import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";
import image from "@astrojs/image";

export default defineConfig({
  site: "https://grizzlycafe.netlify.app",
  integrations: [
    prefetch(),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    compress(),
  ],
});
