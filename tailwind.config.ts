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
        // small palette extensions for COREX
        corex: {
          50: '#f5f7ff',
        },
      },
      backgroundImage: {
        'corex-hero': 'radial-gradient(ellipse at top left, rgba(59,130,246,0.12), transparent 30%), radial-gradient(ellipse at bottom right, rgba(139,92,246,0.08), transparent 30%)',
      },
    },
  },
  plugins: [],
}

export default config
