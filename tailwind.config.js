/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  daisyui: {
    themes: ["light", "dark", "cmyk"],
  },
  darkMode: "class",

  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],

};
