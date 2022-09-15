{ import('tailwindcss').Config }

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
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
        'teal': '    #00b894'

      },
      container: {
        center: true,
        padding: '2rem'
      },

    },

  },
  plugins: [],
});
