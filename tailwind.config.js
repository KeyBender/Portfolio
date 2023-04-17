/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    extend: {
      fontFamily: {
        'logo': ['Rubik Mono One', 'sans-serif']
      },
      colors: {
        'red': '#ED254E',
        'yellow': '#F9DC5C',
        'cyan': '#C2EABD',
        'navy': '#011936',
        'gray': '#465362'
      }
    },
  },
  plugins: [],
};
