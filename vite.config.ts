import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  plugins: [solid()],
  server: {
    watch: {
      usePolling: true,
    },
    port: 3000,
    host: "127.0.0.1",
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
