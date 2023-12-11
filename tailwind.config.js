/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true
    },
    screen: {},
    extend: {
      fontFamily: {
        body: ["Inter"]
      },

      colors: {
      }
    },
    fontFamily: {
      custom: ["inter"]
    }
  },
  plugins: []
};