import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
import type { VitePWAOptions } from "vite-plugin-pwa";
import devtools from "solid-devtools/vite";

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  injectRegister: "auto",
  devOptions: {
    enabled: true,
  },

  includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
  manifest: {
    name: "Felix Ramnelöv",
    short_name: "FR",
    description: "Resume Website",
    theme_color: "#000000",
    icons: [
      {
        src: "pwa-64x64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "maskable-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
};

export default defineConfig({
  plugins: [
    solid(),
    devtools({ autoname: true }),
    VitePWA(pwaOptions),
  ],
  server: {
    watch: {
      usePolling: true,
    },
    port: 3000,
  },
  define: {
    global: {},
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port: 8080,
  },
});
