const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,css}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.violet,
      warning: colors.yellow,
      success: colors.green,
      error: colors.red,
      info: colors.blue,
      background: colors.white,
      foreground: colors.gray[900],
      gray: colors.gray,
      white: 'white',
      black: 'black',
      transparent: 'transparent',
    },
    extend: {
      zIndex: {
        100: '100',
      },
    }
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
}
