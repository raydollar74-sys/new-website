/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fef9e6',
          100: '#fdf0cc',
          200: '#fce199',
          300: '#fad266',
          400: '#f9c333',
          500: '#f8b400',
          600: '#c69000',
          700: '#946c00',
          800: '#634800',
          900: '#312400',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out',
        countUp: 'countUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}