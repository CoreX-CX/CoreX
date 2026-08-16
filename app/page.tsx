import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Welcome to COREX
        </h2>
        <p className="mt-4 text-slate-300">
          A modern platform scaffolded with Next.js 15, TypeScript, Tailwind CSS, and the App Router.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/store" className="rounded-md bg-blue-600/80 px-4 py-2 text-sm font-medium hover:bg-blue-500">
            Visit Store
          </Link>
          <Link href="/login" className="rounded-md border border-zinc-700 px-4 py-2 text-sm text-slate-200 hover:bg-zinc-800">
            Login
          </Link>
          <Link href="/register" className="rounded-md bg-purple-600/80 px-4 py-2 text-sm font-medium hover:bg-purple-500">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  )
}
