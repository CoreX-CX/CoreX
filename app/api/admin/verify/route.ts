import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseServer'

export async function POST(req: Request) {
  try {
    const { token } = await req.json()
    if (!token) return NextResponse.json({ error: 'Missing token' }, { status: 400 })

    const { data, error } = await supabaseAdmin.auth.getUser(token)
    if (error) return NextResponse.json({ error: error.message }, { status: 401 })

    const user = data.user
    if (!user) return NextResponse.json({ error: 'Invalid token' }, { status: 401 })

    // Admin emails configured via env var ADMIN_EMAILS (comma separated)
    const adminEmails = (process.env.ADMIN_EMAILS || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean)

    if (!adminEmails.includes(user.email?.toLowerCase() || '')) {
      return NextResponse.json({ error: 'Not an admin' }, { status: 403 })
    }

    return NextResponse.json({ ok: true, user: { id: user.id, email: user.email } })
  } catch (err: any) {
    console.error('admin/verify error', err)
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 })
  }
}
