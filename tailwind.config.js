/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      keyframes: {
        rotate: {
          "0%": {},
          "50%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(720deg)" },
        },
      },
      animation: {
        "rotating-border": "rotate 10s linear infinite",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        newTime: "cubic-bezier(.5,-.75,.7,2)",
      },
      boxShadow: {
        pricBox: "0 0px 60px -20px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
