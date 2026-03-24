/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Space_Grotesk': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#050816',
        foreground: '#f9fafb',
        primary: '#22c55e',
        'primary-foreground': '#020617',
        border: 'rgba(148,163,184,0.26)',
        muted: {
          DEFAULT: '#9ca3af',
          foreground: '#9ca3af',
        },
        secondary: '#0f172a',
      },
    },
  },
  plugins: [],
}
