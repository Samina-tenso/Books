/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}", "./index.html"
  ],
  theme: {
    extend: {
      boxShadow: {
        'xl': '-3px 3px 0px -1px rgba(24, 24, 23)',
      },
      colors: {
        'red-grey': '#F3F0E7',
        'gold': '#C79C2F'

      },
      container: {
        center: true,
        padding: '2rem'
      },

    },

  },
  plugins: [],
}
