/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        paper: "#FDFCF8",
        ink: {
          DEFAULT: "#17140F",
          soft: "#55503F",
        },
        brass: {
          DEFAULT: "#AD7F3C",
          dark: "#8C6529",
        },
        mist: "#C9D4EA",
        line: "#E4DFD3",
      },
      fontFamily: {
        sans: [
          '"Arial Narrow"',
          '"Liberation Sans Narrow"',
          '"Archivo Narrow"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
}
