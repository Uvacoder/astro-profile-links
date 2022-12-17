import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
// import astroImageTools from "astro-imagetools";
import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
// import { VitePWA } from 'vite-plugin-pwa'
import AstroPWA from '@vite-pwa/astro';
import critters from "astro-critters";
import purgecss from 'astro-purgecss';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  srcDir: './src',
  integrations: [mdx(), tailwind(), image({
    logLevel: "debug",
    cacheDir: '.image-cache/'
  }), partytown({
    config: {
      debug: process.env.NODE_ENV !== 'production',
      forward: ["dataLayer.push"]
    }
  }), prefetch({
    selector: "a[href^='/products']"
  }), react(),
  // astroImageTools,
  AstroPWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto'
  }), critters(), purgecss()],
  output: "server",
  adapter: cloudflare()
});