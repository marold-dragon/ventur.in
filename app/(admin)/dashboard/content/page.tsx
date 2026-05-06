import { prisma } from '@/lib/prisma'
import { createFeature, updateFeature, deleteFeature, toggleFeature } from '@/app/actions/features'

export default async function ContentPage() {
  const features = await prisma.feature.findMany({
    orderBy: { updatedAt: 'desc' },
  })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Manajemen Konten</h1>
        <p className="text-sm text-gray-400">Kelola kartu fitur yang tampil di halaman utama.</p>
      </div>

      {/* Form Tambah Feature */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-4 text-sm font-semibold text-gray-300">Tambah Fitur Baru</h2>
        <form action={createFeature} className="space-y-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-400">Judul</label>
              <input
                name="title"
                required
                className="w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30"
                placeholder="Nama fitur..."
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-gray-400">Icon (opsional)</label>
              <input
                name="icon"
                className="w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30"
                placeholder="tabler--bolt"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-gray-400">Deskripsi</label>
            <textarea
              name="description"
              required
              rows={2}
              className="w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/30"
              placeholder="Deskripsi singkat fitur..."
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200"
          >
            + Tambah Fitur
          </button>
        </form>
      </div>

      {/* List Feature */}
      {features.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/5 p-12 text-center">
          <p className="text-gray-400">Belum ada fitur. Tambahkan fitur pertama di atas.</p>
        </div>
      ) : (
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-300">Daftar Fitur ({features.length})</h2>
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`rounded-xl border p-5 transition-colors ${
                feature.isActive
                  ? 'border-white/10 bg-white/[0.03]'
                  : 'border-white/5 bg-black/20 opacity-60'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    {feature.icon && (
                      <span className="text-xs text-gray-500">[{feature.icon}]</span>
                    )}
                    <span className="font-medium text-white">{feature.title}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs ${
                        feature.isActive
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gray-500/20 text-gray-500'
                      }`}
                    >
                      {feature.isActive ? 'Aktif' : 'Nonaktif'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <form action={toggleFeature}>
                    <input type="hidden" name="id" value={feature.id} />
                    <input type="hidden" name="isActive" value={String(feature.isActive)} />
                    <button
                      type="submit"
                      className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:bg-white/10"
                    >
                      {feature.isActive ? 'Nonaktifkan' : 'Aktifkan'}
                    </button>
                  </form>
                  <form action={deleteFeature}>
                    <input type="hidden" name="id" value={feature.id} />
                    <button
                      type="submit"
                      className="rounded-lg border border-red-500/20 px-3 py-1.5 text-xs text-red-400 transition-colors hover:bg-red-500/10"
                    >
                      Hapus
                    </button>
                  </form>
                </div>
              </div>

              {/* Inline Edit Form */}
              <details className="mt-4">
                <summary className="cursor-pointer text-xs text-gray-500 hover:text-gray-300">
                  Edit fitur ini
                </summary>
                <form action={updateFeature} className="mt-3 space-y-3 border-t border-white/5 pt-3">
                  <input type="hidden" name="id" value={feature.id} />
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-400">Judul</label>
                      <input
                        name="title"
                        defaultValue={feature.title}
                        required
                        className="w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/30"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-gray-400">Icon</label>
                      <input
                        name="icon"
                        defaultValue={feature.icon || ''}
                        className="w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/30"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-400">Deskripsi</label>
                    <textarea
                      name="description"
                      defaultValue={feature.description}
                      required
                      rows={2}
                      className="w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/30"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-lg bg-white px-5 py-1.5 text-xs font-medium text-black transition-colors hover:bg-gray-200"
                  >
                    Simpan Edit
                  </button>
                </form>
              </details>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
