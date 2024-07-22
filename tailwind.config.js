/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': "Poppins",
        'inter' : "Inter",
        'helveticaNeue' : "HelveticaNeue",
      },
      backgroundImage: {
        'book-gradient1': 'linear-gradient(to right, #0C5FD1,#8703C5)',
        'book-gradient2': 'linear-gradient(to right, #8703C5,#0C5FD1)',
        'binding-gradient':'linear-gradient(107.9deg, #0C5FD1 1.25%, #8703C5 93.71%)',
      },
      boxShadow: {
        'book-shadow': '0px 0px 20px 0px #4B30CB',
      },
      blur: {
        xs: '5px',
      }
    },
  },
  plugins: [],
}

