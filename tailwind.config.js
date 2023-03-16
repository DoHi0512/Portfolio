/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/pageContainer/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    animationDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
      500: "500ms",
      600: "600ms",
      700: "700ms",
      800: "800ms",
      900: "900ms",
      1000: "1000ms",
      1100: "1100ms",
    },
    colors: {
      gray: "#777777",
    },
    mr: {
      left: "100rem",
    },
    variants: {
      animationDelay: ["responsive", "hover"],
    },
    extend: {
      fontFamily: {
        sans: ["SeoulHangangM"],
      },
      keyframes: {
        typingCursor: {
          from: {
            borderRight: "2px solid white",
          },
          to: { borderRight: "2px solid black" },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: { opacity: "1" },
        },
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
        typingCursor: "typingCursor 1s ease-in-out 0ms 2",
        fadeIn: "fadeIn 1s ease-in-out 4000ms 1 forwards",
        fadeInLeft: "fadeInLeft 1s ease-in-out 4000ms 1 forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
