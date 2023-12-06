/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DF9438",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        title: ["Saiba", "sans-serif"],
        titleOutline: ["Saiba-Outline", "sans-serif"],
      },
      fontSize: {
        title: "3.75rem",
      },
    },
  },
  plugins: [],
};
