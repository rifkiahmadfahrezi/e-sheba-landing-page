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
        'lightblue': '#E1EEFF',
        'myblack': '#2E2E2E'
      },
      backgroundImage: {
        'ellipse': 'url(/img/ellipse.svg)',
      },
      gridTemplateColumns:{
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(300px, 1fr))',

      }
    },
  },
  plugins: [],
}