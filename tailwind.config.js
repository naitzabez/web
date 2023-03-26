/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('/src/assets/t-standard.svg')",
      },colors: {
        'prusa': '#9E0000',
        'prusa_light': '#ffa215',
      }
    },
    screens: {
      'sm': {'min': '0px', 'max': '1014px'},
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
