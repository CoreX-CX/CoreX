import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'COREX',
  description: 'COREX — Modern platform',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen text-slate-100 antialiased">
        <div className="relative min-h-screen">
          {/* Background gradients */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#07102a] via-[#0b0633] to-[#000000]" />
          <div className="absolute inset-0 -z-20 opacity-60 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-800/30 via-purple-700/20 to-transparent" />

          <div className="relative z-10 max-w-6xl mx-auto p-6">
            <header className="flex items-center justify-between py-4">
              <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                COREX
              </h1>
              <nav className="space-x-4 text-sm text-slate-300">
                <a href="/" className="hover:text-white">Home</a>
                <a href="/store" className="hover:text-white">Store</a>
                <a href="/login" className="hover:text-white">Login</a>
                <a href="/register" className="hover:text-white">Register</a>
              </nav>
            </header>

            <main className="mt-8">
              <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-8 shadow-lg">
                {children}
              </div>
            </main>

            <footer className="mt-8 text-sm text-zinc-500">© {new Date().getFullYear()} COREX</footer>
          </div>
        </div>
      </body>
    </html>
  )
}
