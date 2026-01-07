/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        testred: "#ff0000",
      },
      fontFamily: {
        regale: ["Regale", "serif"],
      },
    },
  },
  plugins: [],
};
