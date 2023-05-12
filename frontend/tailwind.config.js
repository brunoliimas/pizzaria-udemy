/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        "white": "#FFF",
        "black": "#000",
        "dark-900": "#101026",
        "dark-700": "#1d1d2e",
        "gray-100": "#8a8a8a",
        "green-900": "#22b573",
        "red-900": "#ed1b24",
        "purple-900": "#540c6f",
        "purple-500": "#8437e9",
        "yellow-700": "#ffbe0c",
        "pink-900": "#ff006e"
      },
    },
  },
  plugins: [],
}
