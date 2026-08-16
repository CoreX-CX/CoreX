import React from 'react'

const reasons = [
  { title: 'Fast Delivery', desc: 'Rapid development cycles and fast iteration.' },
  { title: 'Premium Quality', desc: 'Design-first approach with attention to detail.' },
  { title: 'Secure Solutions', desc: 'Security and compliance baked in.' },
  { title: '24/7 Support', desc: 'Round-the-clock expert support.' },
]

export default function WhyChoose() {
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold text-slate-100">Why Choose COREX</h3>
      <p className="mt-2 text-slate-400 max-w-2xl">A partner that blends technology, security, and design to deliver exceptional outcomes.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r) => (
          <div key={r.title} className="rounded-xl glass p-5 border border-white/5 hover:translate-y-[-4px] transition-transform">
            <div className="text-lg font-semibold text-slate-100">{r.title}</div>
            <div className="mt-2 text-sm text-slate-300">{r.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
