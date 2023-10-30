/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens:{
      sm: '480px',
      md: '800px',
      lg: '1280px',
    },
    extend: {
      colors: {
        'zar': '#111fff'
      }
    },
  },
  plugins: [],
}

