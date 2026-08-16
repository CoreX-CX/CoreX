import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'corex-blue': '#3B82F6',
        'corex-purple': '#A855F7',
        'corex-cyan': '#22D3EE',
        'corex-bg': '#050816',
      },
      boxShadow: {
        'neon-sm': '0 6px 30px rgba(59,130,246,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
