/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1170px'
    },
   extend: {
    colors: {
      'theme-primary': '#1678CB',
      'theme-secondary': '#3B8BEA',
      'theme-text': '#242424',
    },
   },
  },
  plugins: [],
}