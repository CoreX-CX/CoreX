import React from 'react'

const services = [
  { title: 'Software Development', desc: 'Full-stack apps, APIs, and integrations.' },
  { title: 'Hosting Services', desc: 'Scalable, managed hosting for production workloads.' },
  { title: 'Custom Bots', desc: 'AI-powered bots for automation and engagement.' },
  { title: 'Web Development', desc: 'Pixel-perfect websites and interfaces.' },
]

export default function Services() {
  return (
    <section id="services" className="mt-12">
      <h2 className="text-3xl font-semibold text-slate-100">Services</h2>
      <p className="mt-2 text-slate-400 max-w-2xl">We provide a premium stack of services tailored for businesses and creators.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl glass p-6 border border-white/5 hover:scale-[1.02] transition">
            <div className="text-xl font-semibold text-slate-100">{s.title}</div>
            <div className="mt-2 text-sm text-slate-300">{s.desc}</div>
            <div className="mt-4 text-sm text-corex-cyan font-medium">Learn more →</div>
          </div>
        ))}
      </div>
    </section>
  )
}
