/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateRows: {
        autoFill: "repeat(auto-fill, minmax(200px, 1fr))",
      },
      gridTemplateColumns: {
        autoFill: "repeat(auto-fill, minmax(200px, 1fr))",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        montserat: ["Montserrat", "sans-serif"],
      },
      animation: {
        fadeOut: "fadeOut 0.5s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  purge: ["./dist/**/*.html", "./src/**/*.js"], //? Add purge configuration
  plugins: [],
};
