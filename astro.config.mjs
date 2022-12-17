import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind(),
    image(),
    partytown(),
    prefetch(),
    react(),
    astroImageTools,
  ],
  output: "server",
  adapter: cloudflare(),
});