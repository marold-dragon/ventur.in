import Link from 'next/link'
import { ReactNode } from 'react'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/login')
  }

  const signOut = async () => {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen bg-[#0d0d0d] font-sans text-white">
      <aside className="flex w-64 flex-col border-r border-white/10 bg-black/50 p-6">
        <div className="mb-8">
          <h2 className="text-xl font-semibold tracking-tight">Venturin CMS</h2>
          <p className="mt-1 truncate text-xs text-gray-400">{user.email}</p>
        </div>

        <nav className="flex-1 space-y-2">
          <Link href="/dashboard" className="block rounded-lg px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white">
            Overview
          </Link>
          <Link href="/dashboard/articles" className="block rounded-lg px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white">
            Artikel Blog
          </Link>
          <Link href="/dashboard/seo" className="block rounded-lg px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white">
            Kontrol SEO
          </Link>
          <Link href="/dashboard/content" className="block rounded-lg px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white">
            Manajemen Konten
          </Link>
        </nav>

        <form action={signOut} className="mt-auto border-t border-white/10 pt-4">
          <button type="submit" className="w-full rounded-lg px-4 py-2 text-left text-sm text-red-400 transition-colors hover:bg-red-500/10">
            Keluar Sistem
          </button>
        </form>
      </aside>

      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  )
}
