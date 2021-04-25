const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
