/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/pageContainer/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      gray: "#777777",
      green: "#A2D5C6",
      bgGray: "#EBEBEB",
      bgBlue: "#E1F5FE",
      blue: "#039be5",
      lightGray: "#cccccc",
      lightGreen: "#20c997",
    },
    extend: {
      fontFamily: {
        sans: ["SeoulHangangM"],
      },
      keyframes: {
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translate3d(-100%,0,0)",
          },
          to: {
            opacity: "1",
            transform: "translateZ(0)",
          },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 1s ease-in-out 4750ms 1 forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
