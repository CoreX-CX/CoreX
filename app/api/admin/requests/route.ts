import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseServer'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const q = url.searchParams.get('q') || ''
    const service = url.searchParams.get('service') || ''

    // Authorization header with Bearer token required
    const auth = req.headers.get('authorization') || ''
    const token = auth.replace('Bearer ', '')
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    // verify token and admin email
    const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(token)
    if (userError || !userData.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const adminEmails = (process.env.ADMIN_EMAILS || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean)
    if (!adminEmails.includes(userData.user.email?.toLowerCase() || '')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    let query = supabaseAdmin.from('requests').select('*').order('created_at', { ascending: false })

    if (service) query = query.eq('service', service)
    if (q) query = query.or(`name.ilike.%${q}%,email.ilike.%${q}%,description.ilike.%${q}%`)

    const { data, error } = await query
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    return NextResponse.json({ data })
  } catch (err: any) {
    console.error('admin/requests GET error', err)
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 })
  }
}
