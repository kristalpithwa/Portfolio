/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(40deg)" },
        },
      },
      animation: {
        rotate: "rotate 3s linear infinite",
        wave: "wave 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
