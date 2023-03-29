/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlue: {
          100: "#091242",
        },
        myYellow: {
          100: "#F6B426",
        },
        font: {
          hColor: "#1C1F35",
          pcolor: "#666C89",
        },
      },
    },
  },
  plugins: [],
};
