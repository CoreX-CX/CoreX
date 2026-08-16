module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
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
