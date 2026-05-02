export const metadata = {
  title: 'Dashboard | Venturin CMS',
}

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">System Overview</h1>
        <p className="text-sm text-gray-400">Selamat datang di panel kontrol Venturin. Pilih menu di samping untuk mulai mengelola konten.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm text-gray-400">Total Artikel</h3>
          <p className="mt-2 text-3xl font-semibold">0</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm text-gray-400">Halaman Termanajemen</h3>
          <p className="mt-2 text-3xl font-semibold">0</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-sm text-gray-400">Status Server</h3>
          <div className="mt-2 flex items-center gap-2">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-green-400">Online & Optimal</span>
          </div>
        </div>
      </div>
    </div>
  )
}
