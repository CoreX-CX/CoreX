'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire up auth
    alert(`Would sign in ${email}`)
  }

  return (
    <section className="py-12 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-slate-100">Sign in</h2>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm text-slate-300">Email</span>
          <input
            type="email"
            className="mt-1 w-full rounded-md bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-slate-100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="block">
          <span className="text-sm text-slate-300">Password</span>
          <input
            type="password"
            className="mt-1 w-full rounded-md bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-slate-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500" type="submit">
          Sign in
        </button>

        <p className="text-sm text-slate-400 text-center">
          Don’t have an account? <Link href="/register" className="text-blue-400">Register</Link>
        </p>
      </form>
    </section>
  )
}
