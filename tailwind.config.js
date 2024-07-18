// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['"Heebo", "Roboto", "sans-serif"'],
      }
    },
  },
  plugins: [
    
  ],
  darkMode: 'selector',
}

