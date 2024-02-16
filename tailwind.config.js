/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DF9438",
        yellow: "#FBBC05",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        title: ["Saiba", "sans-serif"],
        titleOutline: ["Saiba-Outline", "sans-serif"],
      },
      fontSize: {
        title: "3.75rem",
      },
      backgroundImage: () => ({
        instagram:
          "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
        blurCard:
          "radial-gradient(circle, rgba(67,61,96,0.8) 0%, rgba(33,30,46,0.4) 100%);",
      }),

      screens: {
        tablets: "900px",
        mobiles: "500px",
      },
    },
  },
  plugins: [],
};
