/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "rgba(77, 77, 77, 1)",
        mediumGray: "rgba(113, 113, 113, 1)",
        twentyFourGray: "rgba(24, 25, 31, 1)",
        customGreen: "rgba(76, 175, 79, 1)",
        neutralGrey: "rgba(137, 147, 158, 1)",
        brandPrimary: "rgba(76, 175, 79, 1)",
        neutralSilver: "rgba(245, 247, 250, 1)",
        shadow: "rgba(171, 190, 209, 0.4)",
        neutralBlack: "rgba(38, 50, 56, 1)",
      },
    },
  },
  plugins: [],
};
