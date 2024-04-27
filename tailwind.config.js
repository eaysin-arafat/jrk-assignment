/** @type {import('tailwindcss').Config} */
export default {
  // 640px 768px  1024px	 1280px	1536px
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
