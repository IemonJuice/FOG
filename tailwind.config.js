/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        nvidia: {

          "primary": "#75FF00",

          "secondary": "#f3f4f6",

          "accent": "#76b900",

          "neutral": "rgba(23,23,23,0.34)",

          "base-100": "#000000",

          "info": "#ecfccb",

          "success": "#84cc16",

          "warning": "#f3f4f6",

          "error": "#ffffff",
        },

        AMD: {

          "primary": "#ef0707",

          "secondary": "#bd0000",

          "accent": "#ff2424",

          "neutral": "rgba(23,23,23,0.34)",

          "base-100": "#000000",

          "info": "rgb(255,234,236)",

          "success": "white",

          "warning": "#ff1d00",

          "error": "#f20000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

