import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://olga-levchuk.ru",
  vite: { plugins: [tailwindcss()] },
});
