import { prisma } from '@/lib/prisma'
import { updateSeo } from '@/app/actions/seo'

export default async function SeoPage() {
  const seoData = await prisma.seoMetadata.findUnique({
    where: { page: 'home' },
  })

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Kontrol SEO</h1>
        <p className="text-sm text-gray-400">Kelola metadata halaman utama untuk optimasi mesin pencari.</p>
      </div>

      <form action={updateSeo} className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6">
        <input type="hidden" name="page" value="home" />

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Meta Title</label>
          <input
            name="metaTitle"
            defaultValue={seoData?.metaTitle || ''}
            className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/30"
            placeholder="Judul halaman di Google..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Meta Description</label>
          <textarea
            name="metaDescription"
            defaultValue={seoData?.metaDescription || ''}
            rows={4}
            className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/30"
            placeholder="Deskripsi singkat halaman..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300">Keywords (Pisahkan dengan koma)</label>
          <input
            name="keywords"
            defaultValue={seoData?.keywords || ''}
            className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/30"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-white px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200"
        >
          Simpan Perubahan
        </button>
      </form>
    </div>
  )
}
