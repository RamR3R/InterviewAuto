/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./node_modules/tw-elements/dist/js/**/*.js",

"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '6rem': '6rem',
        '10rem':'10rem',
        '80':'80%'
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

