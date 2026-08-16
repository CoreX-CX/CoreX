import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const SUPABASE_URL = process.env.SUPABASE_URL || ''
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  // note: we don't throw at import time in case env is provided at runtime in some hosts
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, service, budget, description } = body

    if (!name || !email || !service || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ error: 'Supabase environment variables not configured' }, { status: 500 })
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    })

    const insert = await supabase.from('requests').insert([
      { name, email, service, budget: budget || null, description },
    ])

    if (insert.error) {
      console.error('Supabase insert error', insert.error)
      return NextResponse.json({ error: insert.error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err: any) {
    console.error('Request handler error', err)
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 })
  }
}
