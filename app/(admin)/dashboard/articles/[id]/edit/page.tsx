import Link from 'next/link'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { updateArticle } from '@/app/actions/articles'

export default async function EditArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ error?: string }>
}) {
  const { id } = await params
  const { error } = await searchParams

  const article = await prisma.article.findUnique({ where: { id } })
  if (!article) notFound()

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/articles" className="text-sm text-gray-400 transition-colors hover:text-white">
          ← Kembali
        </Link>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Edit Artikel</h1>
          <p className="text-sm text-gray-400">Perbarui konten artikel yang sudah ada.</p>
        </div>
      </div>

      {error && (
        <div className="rounded-lg bg-red-500/10 p-3 text-sm text-red-400">{error}</div>
      )}

      <form action={updateArticle} className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
        <input type="hidden" name="id" value={article.id} />

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Judul Artikel</label>
          <input
            name="title"
            required
            defaultValue={article.title}
            className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Slug URL</label>
          <input
            name="slug"
            required
            defaultValue={article.slug}
            className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Konten</label>
          <textarea
            name="content"
            required
            rows={12}
            defaultValue={article.content}
            className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30"
          />
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/30 px-4 py-3">
          <input
            type="checkbox"
            id="published"
            name="published"
            value="true"
            defaultChecked={article.published}
            className="size-4 rounded border-white/20 bg-black/50 accent-white"
          />
          <label htmlFor="published" className="text-sm text-gray-300">
            Publikasikan artikel
          </label>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="rounded-lg bg-white px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200"
          >
            Simpan Perubahan
          </button>
          <Link
            href="/dashboard/articles"
            className="rounded-lg border border-white/10 px-6 py-2 text-sm text-gray-300 transition-colors hover:bg-white/10"
          >
            Batal
          </Link>
        </div>
      </form>
    </div>
  )
}
