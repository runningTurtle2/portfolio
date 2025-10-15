/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)']
      },
      colors: {
        // Semantic color tokens
        bg: 'var(--color-bg)',
        card: 'var(--color-card-bg)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
        'tag-bg': 'var(--color-tag-bg)',
        'tag-text': 'var(--color-tag-text)',
        'nav-bg': 'var(--color-nav-bg)',
        'nav-text': 'var(--color-nav-text)',
        'nav-hover': 'var(--color-nav-hover)',
      },
    },
  },
  plugins: [],
}