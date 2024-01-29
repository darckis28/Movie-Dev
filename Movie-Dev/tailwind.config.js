/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        initial: "rgba(0, 0, 0, 0.4)",
        secund: "rgba(0, 0, 0, 0.8)",
      },
      backgroundColor: {
        "opacity-black": "rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        dr: "450px",
      },
    },
  },
  plugins: [],
};
