/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Noto Sans", ...defaultTheme.fontFamily.sans],
        display: ["Eagle Lake", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: ["@tailwindcss/nesting"],
};
