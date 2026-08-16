import React from 'react'
import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section id="contact" className="mt-16 bg-gradient-to-b from-transparent to-black/20 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl glass p-8 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/6">
          <div>
            <h4 className="text-2xl font-semibold text-slate-100">Ready to Start Your Project?</h4>
            <p className="mt-2 text-slate-400">Let’s build something premium together — tailored to your needs.</p>
          </div>

          <div>
            <Link href="/register" className="inline-block rounded-lg bg-gradient-to-r from-corex-blue to-corex-purple px-6 py-3 text-sm font-semibold text-black shadow-lg">Get Started</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
