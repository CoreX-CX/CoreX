import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 pt-8 pb-12">
      <div className="max-w-6xl mx-auto px-6 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} COREX — Premium Digital Solutions</div>
        <div className="flex items-center gap-4">
          <a className="hover:text-white">Terms</a>
          <a className="hover:text-white">Privacy</a>
          <a className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
