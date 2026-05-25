/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        metro: {
          navy: "#0f1f3d",
          slate: "#3d4e68",
          cloud: "#f4f7fb"
        }
      }
    }
  },
  plugins: []
};
