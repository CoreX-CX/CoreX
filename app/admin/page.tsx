'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

type RequestItem = {
  id: string
  name: string
  email: string
  service: string
  budget?: string
  description: string
  completed?: boolean
  created_at?: string
}

export default function AdminPage() {
  const [session, setSession] = useState<any>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(false)

  const [requests, setRequests] = useState<RequestItem[]>([])
  const [q, setQ] = useState('')
  const [serviceFilter, setServiceFilter] = useState('')

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      const currentSession = data?.session ?? null
      setSession(currentSession)
      if (currentSession) await verifyAdmin(currentSession.access_token)
    }
    getSession()

    const { data: listener } = supabase.auth.onAuthStateChange((event, sess) => {
      // sess may be a Session object or null
      const currentSession = sess ?? null
      setSession(currentSession)
      if (currentSession) verifyAdmin((currentSession as any).access_token)
      else setIsAdmin(false)
    })

    return () => listener?.subscription?.unsubscribe()
  }, [])

  async function verifyAdmin(token: string) {
    try {
      const res = await fetch('/api/admin/verify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token }) })
      const data = await res.json()
      if (res.ok) {
        setIsAdmin(true)
        fetchRequests(token)
      } else {
        setIsAdmin(false)
      }
    } catch (err) {
      setIsAdmin(false)
    }
  }

  async function fetchRequests(token?: string) {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (q) params.set('q', q)
      if (serviceFilter) params.set('service', serviceFilter)

      const res = await fetch(`/api/admin/requests?${params.toString()}`, { headers: { Authorization: `Bearer ${token || session?.access_token}` } })
      const data = await res.json()
      if (res.ok) setRequests(data.data || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  async function signIn(email: string, password: string) {
    setLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      if (data?.session) {
        await verifyAdmin(data.session.access_token)
      }
    } catch (err: any) {
      alert(err.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  async function signOut() {
    await supabase.auth.signOut()
    setIsAdmin(false)
    setRequests([])
  }

  async function removeRequest(id: string) {
    if (!confirm('Delete this request?')) return
    const res = await fetch(`/api/admin/requests/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${session?.access_token}` } })
    if (res.ok) fetchRequests()
  }

  async function toggleCompleted(id: string, current: boolean) {
    const res = await fetch(`/api/admin/requests/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session?.access_token}` }, body: JSON.stringify({ completed: !current }) })
    if (res.ok) fetchRequests()
  }

  return (
    <div className="py-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-100">Admin Dashboard</h1>
        <p className="text-slate-400 mt-1">Manage incoming client requests</p>

        {!session || !isAdmin ? (
          <div className="mt-6 max-w-md">
            <h3 className="text-lg text-slate-100 mb-3">Admin sign in</h3>
            <AdminSignIn onSignIn={signIn} loading={loading} />
          </div>
        ) : (
          <div className="mt-6">
            <div className="flex flex-col md:flex-row items-center gap-3 justify-between">
              <div className="flex items-center gap-3">
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, email or description" className="rounded-md bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-slate-200 w-72" />
                <select value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value)} className="rounded-md bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-slate-200">
                  <option value="">All services</option>
                  <option>Website Development</option>
                  <option>Custom Software</option>
                  <option>Discord Bots</option>
                  <option>Telegram Bots</option>
                  <option>Hosting Services</option>
                </select>
                <button onClick={() => fetchRequests()} className="rounded-md bg-corex-blue px-3 py-2 text-black font-medium">Search</button>
                <button onClick={() => { setQ(''); setServiceFilter(''); fetchRequests() }} className="rounded-md border border-zinc-800 px-3 py-2 text-slate-200">Reset</button>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={signOut} className="rounded-md border border-zinc-800 px-3 py-2 text-slate-200">Sign out</button>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full table-auto text-left">
                <thead>
                  <tr className="text-slate-400 text-sm">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Service</th>
                    <th className="p-3">Budget</th>
                    <th className="p-3">Created</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr><td colSpan={7} className="p-4 text-slate-400">Loading...</td></tr>
                  ) : requests.length === 0 ? (
                    <tr><td colSpan={7} className="p-4 text-slate-400">No requests found</td></tr>
                  ) : (
                    requests.map((r) => (
                      <tr key={r.id} className="border-t border-white/5 align-top">
                        <td className="p-3 align-top">
                          <div className="font-medium text-slate-100">{r.name}</div>
                          <div className="text-slate-400 text-sm mt-1">{r.description?.slice(0, 80)}{r.description && r.description.length > 80 ? '...' : ''}</div>
                        </td>
                        <td className="p-3 align-top"><a className="text-corex-cyan">{r.email}</a></td>
                        <td className="p-3 align-top">{r.service}</td>
                        <td className="p-3 align-top">{r.budget || '-'}</td>
                        <td className="p-3 align-top text-sm text-slate-400">{r.created_at ? new Date(r.created_at).toLocaleString() : '-'}</td>
                        <td className="p-3 align-top">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${r.completed ? 'bg-green-600 text-black' : 'bg-zinc-800 text-slate-200'}`}>
                            {r.completed ? 'Completed' : 'Open'}
                          </span>
                        </td>
                        <td className="p-3 align-top">
                          <div className="flex items-center gap-2">
                            <button onClick={() => toggleCompleted(r.id, !!r.completed)} className="rounded-md px-3 py-1 bg-purple-600 text-black text-sm">{r.completed ? 'Mark Open' : 'Mark Done'}</button>
                            <button onClick={() => removeRequest(r.id)} className="rounded-md px-3 py-1 bg-red-600 text-black text-sm">Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function AdminSignIn({ onSignIn, loading }: { onSignIn: (email: string, password: string) => Promise<void>, loading: boolean }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSignIn(email, password) }} className="space-y-3">
      <label className="block">
        <span className="text-sm text-slate-300">Email</span>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-1 w-full rounded-md bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-slate-100" />
      </label>

      <label className="block">
        <span className="text-sm text-slate-300">Password</span>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="mt-1 w-full rounded-md bg-zinc-900/60 border border-zinc-800 px-3 py-2 text-slate-100" />
      </label>

      <div className="flex items-center gap-3">
        <button disabled={loading} type="submit" className="rounded-md bg-corex-blue px-4 py-2 text-black font-semibold">Sign in</button>
      </div>
    </form>
  )
}
