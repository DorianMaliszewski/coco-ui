const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}'],
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
      boxShadow: {
        'dark-sm': '0 1px 2px 0 rgba(255,255,255, 0.5)',
        dark:
          '0 1px 3px 0 rgba(255,255,255, 0.5), 0 1px 2px 0 rgba(255,255,255, 0.06)',
        'dark-md':
          '0 4px 6px -1px rgba(255,255,255, 0.5), 0 2px 4px -1px rgba(255,255,255, 0.06)',
        'dark-lg':
          '0 10px 15px -3px rgba(255,255,255, 0.5), 0 4px 6px -2px rgba(255,255,255, 0.05)',
        'dark-xl':
          '0 20px 25px -5px rgba(255,255,255, 0.5), 0 10px 10px -5px rgba(255,255,255, 0.04)',
        'dark-2xl': '0 25px 50px -12px rgba(255,255,255, 1)',
        'dark-inner': 'inset 0 2px 4px 0 rgba(255,255,255, 0.5)',
      },
      keyframes: {
        'slide-to-right': {
          '0%': { left: '0' },
          '100%': {
            left: '100%',
            transform: 'translateX(-100%)',
          },
        },
        'slide-to-left': {
          '0%': { right: '0' },
          '100%': {
            right: '100%',
            transform: 'translateX(0%)',
          },
        },
      },
      animation: {
        'slide-to-right': 'slide-to-right 200ms linear',
        'slide-to-left': 'slide-to-left 200ms linear',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
}
