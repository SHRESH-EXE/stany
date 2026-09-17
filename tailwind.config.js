/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#08090A',
          900: '#0D0F10',
          850: '#111315',
          800: '#181A1D',
          700: '#22252A',
        },
        accent: {
          green: '#8FAF72',
          'green-light': '#A8C98B',
          amber: '#D98B45',
          'amber-light': '#E8A365',
          ember: '#C45731',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
};
