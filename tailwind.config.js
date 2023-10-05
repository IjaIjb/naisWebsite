/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens : {
      'sm' : '640px',
      'md' : '912px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
      
    },
    fontFamily: {
      'sans': ['Roboto'],
      'sub': ['arial'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      // 'display': ['Oswald', ...],
      // 'body': ['"Open Sans"', ...],
    },
    extend: {},
  },
  plugins: [],
}

