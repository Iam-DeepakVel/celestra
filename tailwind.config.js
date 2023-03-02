/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "hero-orange": "#FE7719",
        "hero-middle-brown": "#30181A",
        "hero-bottom-brown": "#551516",
        "celestra-fire": "#FED4AD",
      },
    },
    fontFamily: {
      celestra_glitch: ["Rubik Glitch"],
      celestra_VT: ["VT323"],
      poppins: ["poppins"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
