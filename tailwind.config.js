/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { "500": "#e82574", "700": "#bc1c5c" },
        Blue: { "500": "#2986f9" },
        text: { "text-light": "#78716c" },
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(90deg, #3c72fc -10.59%, #00060c 300.59%)',
      },
    },
  },
  plugins: [],
}
