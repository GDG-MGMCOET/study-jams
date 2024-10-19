/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Roboto"', "sans-serif"],
      mono: ['"Roboto Mono"', "monospace"],
    },

    extend: {
      colors: {
        blue: "#4285f4",
        green: "#34a853",
        yellow: "#f9ab00",
        red: "#ea4335",
        bg: "#fef9f9",
      },
    },
  },
  plugins: [],
};

