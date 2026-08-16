'use client'

import { useState } from 'react'

const SERVICES = [
  'Website Development',
  'Custom Software',
  'Discord Bots',
  'Telegram Bots',
  'Hosting Services',
]

export default function RequestPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState(SERVICES[0])
  const [budget, setBudget] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, service, budget, description }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Submission failed')

      setSuccess('Request submitted — we will contact you soon!')
      setName('')
      setEmail('')
      setService(SERVICES[0])
      setBudget('')
      setDescription('')
    } catch (err: any) {
      setError(err.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-100">Request a Project</h1>
        <p className="mt-2 text-slate-400">Fill out the form below and we will get back to you with a proposal.</p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm text-slate-300">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 w-full rounded-md bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-slate-100"
              />
            </label>

            <label className="block">
              <span className="text-sm text-slate-300">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full rounded-md bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-slate-100"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm text-slate-300">Service</span>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="mt-1 w-full rounded-md bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-slate-100"
            >
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm text-slate-300">Budget (USD)</span>
            <input
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="e.g. 5000"
              className="mt-1 w-full rounded-md bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-slate-100"
            />
          </label>

          <label className="block">
            <span className="text-sm text-slate-300">Project Description</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
              required
              className="mt-1 w-full rounded-md bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-slate-100"
            />
          </label>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="inline-block rounded-lg bg-gradient-to-r from-corex-blue to-corex-purple px-5 py-2 text-sm font-semibold text-black hover:opacity-95"
            >
              {loading ? 'Sending...' : 'Submit Request'}
            </button>

            {success && <div className="text-sm text-green-400">{success}</div>}
            {error && <div className="text-sm text-red-400">{error}</div>}
          </div>
        </form>
      </div>
    </div>
  )
}
