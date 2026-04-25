import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tori2k.github.io",
  base: "/olga-realtor",
  vite: { plugins: [tailwindcss()] },
});
