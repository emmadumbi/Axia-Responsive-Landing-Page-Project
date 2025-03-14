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
      fontSize: {
        "6xl": "clamp(2rem, 1.5rem + 2.5vw, 3.75rem)",
        "4xl": "clamp(1.5rem, 1.286rem + 1.071vw, 2.25rem)",
        "3xl": "clamp(1.125rem, 0.946rem + 0.893vw, 1.75rem)",
        sm: "clamp(0.75rem, 0.679rem + 0.357vw, 1rem)",
      },
      screens: {
        xl: { max: "81.25em" }, //1300px
        lg: { max: "57.5em" }, //920px
        md: { max: "51.875em" }, //830px
        sm: { max: "43.75em" }, //700px
      },
    },
  },
  plugins: [],
};
