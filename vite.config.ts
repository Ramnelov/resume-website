import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  plugins: [solid()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
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
});
