/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#03045E',
        'blue': '#0077B6',
        'cyan': '#00B4D8',
        'lightCyan': '#90E0EF',
        'lightBlue': '#CAF0F8'
      },
    },
  },
  plugins: [],
}
