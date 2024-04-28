/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteColor: "#F5F5F5",
        greenTextColor: "#2F8F6F",
        greenBgColor: "#51907D",
        orangeColor: "#FDCC1A",
      },
      fontFamily: {
        italianno: ["Italianno", "cursive"],
      },
    },
  },
  plugins: [],
};
