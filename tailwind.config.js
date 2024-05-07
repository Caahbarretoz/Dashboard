/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xxs: "8px",
        xxl: "27px",
        13: "13px",
      },
      colors: {
        "blue-250": "#2500ff",
        "black-title": "#151D48",
        "grey-custom": "#CDCDCD",
        "grey-999": "#999",
        "ciano-custom": "#28f9da",
        titles: "#fff",
        "big-titles": "#fff",
        colorful: "#28f9da",
        "dark-green": "#00382e",
      },
      spacing: {
        xxs: "11px",
      },
      width: {
        58: "230px",
        42: "168px",
        120: "120px",
      },
      height: {
        "10%": "10.5%",
        120: "120px",
      },
      backgroundColor: {
        "blue-250": "#2500ff",
        "grey-custom": "#CDCDCD",
        "black-custom": "#101010",
        "ciano-custom": "#28f9da",
        "dark-green": "#00382e",
      },
    },
  },
  plugins: [],
};
