/*******************
 * Tailwind Config *
 *******************/
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sarabun', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        wedding: ['Charm', 'cursive']
      },
    },
  },
  plugins: [],
}
