/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      screens:{
        "sm400": "400px",
        "sm450": "450px",
        "sm500": "500px",
        "md850": "850px",
        "md950": "950px",
      },
      colors: {
        'theme-gold': "#D9B982",
        'theme-white': "#E6E6E6",
        'theme-black': "#141414",
        'theme-grey': "#E5E5E514",
        'theme-grey-alpha': "#CCCCCC",
        'theme-grey-beta': "#939393",
        'theme-error-red': "#FF3333",
      },
      fontFamily:{
        'theme-gilroy': ['Questrial', 'sans-serif'],
        'theme-cirka': [ 'Noto Serif', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

