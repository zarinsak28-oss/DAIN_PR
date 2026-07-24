/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        bengali: ['Noto Serif Bengali', 'serif'],
      },
      colors: {
        red: {
          brand: '#c60000',
          dark: '#ab0a0f',
          deeper: '#6d0a0d',
        },
      },
      letterSpacing: {
        inter: '-0.06em',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
