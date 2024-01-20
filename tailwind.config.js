/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  purge: ["./dist/**/*.html", "./src/**/*.js"], //? Add purge configuration
  plugins: [],
};
