/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
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
};
