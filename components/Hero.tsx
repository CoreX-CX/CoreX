import React from 'react'
import Link from 'next/link'

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#021028]/30 via-[#0b0420]/30 to-transparent opacity-60" />
      <div className="absolute -right-40 -top-40 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-corex-blue/30 to-corex-purple/30 blur-3xl opacity-70 animate-blob" />
      <div className="absolute -left-32 -bottom-32 w-[360px] h-[360px] rounded-full bg-gradient-to-br from-corex-cyan/20 to-corex-purple/10 blur-3xl opacity-60 animate-blob animation-delay-2000" />

      <div className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-corex-blue to-corex-purple drop-shadow-[0_10px_30px_rgba(163,94,255,0.12)] neon-text">
              COREX
            </h1>

            <p className="mt-4 text-xl text-slate-300 font-medium">Premium Digital Solutions</p>

            <p className="mt-6 text-slate-400 max-w-xl">
              Software, Hosting, Bots and Professional Web Development.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#services" className="inline-block rounded-lg bg-gradient-to-r from-corex-blue to-corex-purple px-5 py-3 text-sm font-semibold text-black hover:scale-[1.02] transition-transform shadow-lg glass-btn">
                Explore Services
              </Link>

              <Link href="#contact" className="inline-block rounded-lg border border-[#2a2a3a] px-5 py-3 text-sm font-medium text-corex-cyan hover:bg-zinc-900/60 transition">
                Contact Us
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-corex-blue shadow-corex" />
                <span>Web3 Integrations</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-corex-purple shadow-corex" />
                <span>Enterprise-grade</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-3xl glass p-6 shadow-2xl border border-white/5">
              <div className="h-56 rounded-xl bg-gradient-to-br from-corex-blue/10 via-corex-purple/6 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="text-slate-200 font-semibold">Premium Suite</div>
                  <div className="text-slate-400 text-sm mt-1">Hosting • Bots • Development</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white/3 p-3">
                  <div className="text-slate-200 font-medium">Custom Bots</div>
                  <div className="text-slate-400 text-sm mt-1">AI & automation</div>
                </div>
                <div className="rounded-lg bg-white/3 p-3">
                  <div className="text-slate-200 font-medium">Managed Hosting</div>
                  <div className="text-slate-400 text-sm mt-1">99.99% uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
