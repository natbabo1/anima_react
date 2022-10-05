/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      zinc: colors.zinc,
      stone: colors.stone,
      'dark-gray': '#1e1e1e',
      'medium-gray': '#3d3d3d',
      'light-gray': '#525252',
      'shadow-grow': '#302d28',
      'anima-green': '#06c149',
      'anima-lime': '#08e355',
      'snow-white': '#dee2e6',
      'low-white': '#adb5bd'
    }
  },
  plugins: [require('flowbite/plugin')]
};
