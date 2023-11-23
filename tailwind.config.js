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
        "sm500": "500px",
        "md850": "850px",
        "md950": "950px",
      },
      colors: {
        'theme-gold': "#D9B982",
        'theme-white': "#E6E6E6",
        'theme-black': "#141414",
        'theme-grey': "#E5E5E514",
        'theme-grey-beta': "#939393",
      },
      fontFamily:{
        'theme-gilroy': ['Questrial', 'sans-serif'],
        'theme-cirka': [ 'Noto Serif', 'serif'],
      },
    },
  },
  plugins: [],
}

