/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "sm400": "400px",
      },
      colors: {
        'theme-gold': "#D9B982",
        'theme-white': "#E6E6E6",
        'theme-black': "#141414",
      },
      fontFamily:{
        'theme-gilroy': ['Questrial', 'sans-serif'],
        'theme-cirka': [ 'Noto Serif', 'serif'],
      }
    },
  },
  plugins: [],
}

