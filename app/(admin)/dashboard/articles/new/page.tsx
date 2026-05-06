import Link from 'next/link'
import { createArticle } from '@/app/actions/articles'

export default async function NewArticlePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/dashboard/articles" className="text-sm text-gray-400 transition-colors hover:text-white">
          ← Kembali
        </Link>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Artikel Baru</h1>
          <p className="text-sm text-gray-400">Buat dan publikasikan artikel blog baru.</p>
        </div>
      </div>

      {error && (
        <div className="rounded-lg bg-red-500/10 p-3 text-sm text-red-400">{error}</div>
      )}

      <form action={createArticle} className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Judul Artikel</label>
          <input
            name="title"
            required
            className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30"
            placeholder="Masukkan judul artikel..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Slug URL</label>
          <input
            name="slug"
            required
            className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30"
            placeholder="contoh-slug-artikel"
          />
          <p className="text-xs text-gray-500">Gunakan huruf kecil, tanpa spasi, pisahkan dengan tanda hubung (-).</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Konten</label>
          <textarea
            name="content"
            required
            rows={12}
            className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30"
            placeholder="Tulis konten artikel di sini..."
          />
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/30 px-4 py-3">
          <input
            type="checkbox"
            id="published"
            name="published"
            value="true"
            className="size-4 rounded border-white/20 bg-black/50 accent-white"
          />
          <label htmlFor="published" className="text-sm text-gray-300">
            Publikasikan sekarang
          </label>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="rounded-lg bg-white px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200"
          >
            Simpan Artikel
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
