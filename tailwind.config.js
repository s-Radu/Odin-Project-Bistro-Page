/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  purge: ["./dist/**/*.html", "./src/**/*.js"], //? Add purge configuration
  plugins: [],
};
