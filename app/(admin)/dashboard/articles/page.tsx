import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { deleteArticle, togglePublished } from '@/app/actions/articles'
import DeleteButton from '@/components/admin/DeleteButton'

export default async function ArticlesPage() {
  const articles = await prisma.article.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Artikel Blog</h1>
          <p className="text-sm text-gray-400">Kelola semua artikel yang dipublikasikan di blog.</p>
        </div>
        <Link
          href="/dashboard/articles/new"
          className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200"
        >
          + Artikel Baru
        </Link>
      </div>

      {articles.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/5 p-12 text-center">
          <p className="text-gray-400">Belum ada artikel. Buat artikel pertamamu!</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead className="border-b border-white/10 bg-white/5">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-400">Judul</th>
                <th className="px-6 py-3 text-left font-medium text-gray-400">Slug</th>
                <th className="px-6 py-3 text-left font-medium text-gray-400">Status</th>
                <th className="px-6 py-3 text-left font-medium text-gray-400">Tanggal</th>
                <th className="px-6 py-3 text-right font-medium text-gray-400">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {articles.map((article) => (
                <tr key={article.id} className="bg-white/[0.02] transition-colors hover:bg-white/5">
                  <td className="px-6 py-4 font-medium text-white">{article.title}</td>
                  <td className="px-6 py-4 text-gray-400">{article.slug}</td>
                  <td className="px-6 py-4">
                    <form action={togglePublished}>
                      <input type="hidden" name="id" value={article.id} />
                      <input type="hidden" name="published" value={String(article.published)} />
                      <button
                        type="submit"
                        className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                          article.published
                            ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                            : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30'
                        }`}
                      >
                        {article.published ? 'Dipublikasi' : 'Draft'}
                      </button>
                    </form>
                  </td>
                  <td className="px-6 py-4 text-gray-400">
                    {new Date(article.createdAt).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/dashboard/articles/${article.id}/edit`}
                        className="rounded-lg border border-white/10 px-3 py-1 text-xs text-gray-300 transition-colors hover:bg-white/10"
                      >
                        Edit
                      </Link>
                      <DeleteButton
                        action={deleteArticle}
                        id={article.id}
                        confirmMessage="Hapus artikel ini permanen?"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
