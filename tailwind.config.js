/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          Black: "#263238",
          D_Grey: "#4D4D4D",
          Grey: "#717171",
          L_Grey: "#89939E",
          GreyBlue: "#ABBED1",
          Silver: "#F5F7FA",
          White: "#FFFFFF",
        },
        primary: {
          brand: "#4CAF4F",
        },
        secondary: {
          Secondary: "#263238",
        },
        info: {
          Info: "#2194f3",
        },
        action: {
          Warning: "#FBC02D",
          Error: "#E53835",
          Success: "#2E7D31",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
