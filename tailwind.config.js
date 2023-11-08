/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-gold': "#D9B982",
        'theme-white': "#E6E6E6",
        'theme-black': "#141414",
      },
      fontFamily:{
        'theme-gilroy': ['Josefin Sans', 'sans-serif'],
        'theme-cirka': ['Josefin Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

