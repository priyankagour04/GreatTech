/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Blue: { 500: "#0d6efd" },
        text: { "text-light": "#78716c" },
        secondary_color: { 500: "#0f0d1d" },
      },
      boxShadow: {
        Cardshadow: "0px 4px 25px 0px #0000000f", // Correct shadow syntax
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(90deg, #3c72fc -10.59%, #00060c 300.59%)",
        "footer-shadow-img":
          "url('/src/assets/images/footer-shadow-shape.png')",
        "footer-left-img": "url('/src/assets/images/footer-solid-left.png')",
        "footer-right-img": "url('/src/assets/images/footer-solid-right.png')",
        "Card-item": "url('/src/assets/images/service-item-shape.png')",
        "Counter-Card-item" :"url('/src/assets/images/counnter-bg-shape.png')",
      },
    },
  },
  plugins: [],
};
