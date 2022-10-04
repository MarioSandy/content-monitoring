/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['inter', 'sans-serif'],
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}