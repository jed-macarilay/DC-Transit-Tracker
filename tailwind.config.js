/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        metro: {
          navy: "#101214",
          slate: "#2b2f33",
          cloud: "#f5f7f6",
          mint: "#2ecc71"
        }
      }
    }
  },
  plugins: []
};
