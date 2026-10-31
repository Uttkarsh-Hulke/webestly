/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-dark': 'var(--color-surface-dark)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-text': 'var(--color-primary-text)',
        border: 'var(--color-border)',
        'border-dark': 'var(--color-border-dark)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        brand: {
          navy: 'var(--color-brand-navy)',
          orange: 'var(--color-brand-orange)',
          gold: 'var(--color-brand-gold)',
          white: 'var(--color-brand-white)',
          warm: 'var(--color-brand-warm)',
          slate: 'var(--color-brand-slate)',
          'dark-orange': 'var(--color-brand-dark-orange)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius-md)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
      }
    },
  },
  plugins: [],
}
