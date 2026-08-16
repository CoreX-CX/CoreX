'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire up registration
    alert(`Would register ${email}`)
  }

  return (
    <section className="py-12 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-slate-100">Create account</h2>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm text-slate-300">Full name</span>
          <input
            className="mt-1 w-full rounded-md bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-slate-100"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

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

        <button className="w-full rounded-md bg-purple-600 px-4 py-2 text-sm font-medium hover:bg-purple-500" type="submit">
          Create account
        </button>

        <p className="text-sm text-slate-400 text-center">
          Already have an account? <Link href="/login" className="text-blue-400">Sign in</Link>
        </p>
      </form>
    </section>
  )
}
