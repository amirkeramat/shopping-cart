/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    fontFamily:{
        'Loto':['Loto','sans-serif'],
        'Anton':[ 'Anton', 'sans-serif']
      },
    extend: {
      colors:{
      'costume-dark': '#001219',
      'costume-main-white': '#f0f8ff',
      'costume-white': '#ffffff',
      'costume-main-red': '#d90429',
      },
    },
  },
  plugins: [],
}

