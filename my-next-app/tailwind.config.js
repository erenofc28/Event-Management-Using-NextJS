/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        testred: "#ff0000",
  //         brand: {
  //   burgundy: "#541A2E",
  //   gold: "#F5EA8A",
  //   rose: "#EEE9EB",
  // },
      },
      fontFamily: {
        regale: ["Regale", "serif"],
      },
    },
  },
  plugins: [],
};
