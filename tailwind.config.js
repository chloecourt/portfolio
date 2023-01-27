const { fontFamily } = require("tailwindcss/defaultTheme");
const { colors } = require("tailwindcss/colors");
// Londrina Outline

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        middle: "1155px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        abc: ["Londrina Outline", "cursive"],
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        roll: {
          "0%, 100%": { transform: "translateX(0) rotate(0deg)" },
          "50%": { transform: "translateX(-3rem) rotate(-30deg)" },
        },
        seedBounce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-30px)" },
          "60%": { transform: "translateY(-15px)" },
        },
        rotateInUp: {
          "0%": {
            opacity: "0",
            transformOrigin: "bottom left",
            transform: "rotate(90deg) ",
          },
          "100%": {
            opacity: "1",
            transformOrigin: "bottom left",
            transform: "rotate(0deg)",
          },
        },
        rotateInDown: {
          "0%": {
            opacity: "0",
            transformOrigin: "bottom left",
            transform: "rotate(-90deg) ",
          },
          "100%": {
            opacity: "1",
            transformOrigin: "bottom left",
            transform: "rotate(0deg)",
          },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
        "roll-in": "roll 3.5s ease-in-out",
        "secondSeed-bounce": "seedBounce 2s infinite",
        "title-bounce": "seedBounce 2s ease-in-out",
        "mango-enter": "rotateInUp 1s ease-in",
        "fruits-down": "rotateInDown 1s ease-in",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
