/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#02b875',
        'secondary': '#212121',
      },
      screens: {
        sm:{max: '639px'},
        md: '800px',
      },
    },
  },
  plugins: [],
}