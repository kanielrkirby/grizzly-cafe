import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";
import swup from "@swup/astro";

export default defineConfig({
  site: "https://grizzlycafe.netlify.app",
  integrations: [
    swup({
      theme: false,
      reloadScripts: false,
      progress: true,
      containers: ["html"],
    }),
    prefetch(),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    compress(),
  ],
});
