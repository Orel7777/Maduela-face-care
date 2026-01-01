/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#fffaf2',
          surface: '#ffffff',
          muted: '#f6efe4',
          ink: '#2a2421',
          inkMuted: '#5b4f47',
          accent: '#a06c3b',
          accentSoft: '#ddc1a7',
          line: '#ead7c7',
        },
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(42, 36, 33, 0.10)',
        card: '0 18px 50px rgba(42, 36, 33, 0.12)',
      },
    },
  },
  plugins: [],
}
