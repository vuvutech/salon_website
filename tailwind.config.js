/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    }
  },
  daisyui: {
    themes: ["light", "dark", "cmyk"],
  },
  darkMode: "class",

  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin'),
    // require("daisyui")
  ],

};
