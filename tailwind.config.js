/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'ibm': ['IBM Plex Sans', 'sans-serif']
    },
    extend: {
      colors: {
        'blue': '#0360D9',
        'darkblue': '#0D2B46',
        'lightblue': '#E1EEFF'
      },
      backgroundImage: {
        'ellipse': 'url(/img/ellipse.svg)',
      }
    },
  },
  plugins: [],
}