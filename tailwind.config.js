/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12110f",
        ivory: "#f8f4ec",
        cream: "#eee5d6",
        champagne: "#c9ad82",
        sand: "#d9cbb8",
        taupe: "#857667",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Arial", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      letterSpacing: {
        editorial: "0.18em",
      },
      boxShadow: {
        soft: "0 20px 70px rgba(30, 24, 16, 0.10)",
      },
    },
  },
  plugins: [],
};
