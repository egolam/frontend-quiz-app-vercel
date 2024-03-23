/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary" :"#A729F5",
        "dark-navy" : "#313E51",
        "navy" : "#3B4D66",
        "grey-navy" : "#626C7F",
        "light-bluish" : "#ABC1E1",
        "light-grey" : "#F4F6FA",
        "red-incorrect" : "#EE5454",
        "green-correct" : "#26D782"

      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
