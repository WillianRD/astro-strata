import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 4000,
  },
  output: "server",
  adapter: vercel()
});