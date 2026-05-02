import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>
}) {
  const { message } = await searchParams

  const signIn = async (formData: FormData) => {
    'use server'
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      return redirect('/login?message=Email atau password salah')
    }

    return redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0d0d] px-4 font-sans text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">Admin Akses</h1>
        <p className="mb-8 text-sm text-gray-400">Silakan masuk ke dasbor Venturin.</p>

        <form action={signIn} className="flex flex-col gap-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30"
          />
          <button
            type="submit"
            className="mt-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
          >
            Masuk ke Dasbor
          </button>

          {message && (
            <p className="mt-4 rounded bg-red-500/10 p-3 text-center text-sm text-red-400">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
