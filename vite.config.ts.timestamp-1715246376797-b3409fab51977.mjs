// vite.config.ts
import { defineConfig } from "file:///C:/Users/46735/projekt/resume-website/node_modules/vite/dist/node/index.js";
import solid from "file:///C:/Users/46735/projekt/resume-website/node_modules/vite-plugin-solid/dist/esm/index.mjs";
import path from "path";
import { VitePWA } from "file:///C:/Users/46735/projekt/resume-website/node_modules/vite-plugin-pwa/dist/index.js";
import devtools from "file:///C:/Users/46735/projekt/resume-website/node_modules/solid-devtools/dist/vite.js";
var __vite_injected_original_dirname = "C:\\Users\\46735\\projekt\\resume-website";
var pwaOptions = {
  registerType: "autoUpdate",
  injectRegister: "auto",
  devOptions: {
    enabled: true
  },
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
  manifest: {
    name: "Felix Ramnel\xF6v",
    short_name: "FR",
    description: "Resume Website",
    theme_color: "#000000",
    icons: [
      {
        src: "pwa-64x64.png",
        sizes: "64x64",
        type: "image/png"
      },
      {
        src: "pwa-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "maskable-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  }
};
var vite_config_default = defineConfig({
  plugins: [solid(), devtools({ autoname: true }), VitePWA(pwaOptions)],
  server: {
    watch: {
      usePolling: true
    },
    port: 3e3,
    host: "127.0.0.1"
  },
  define: {
    global: {}
  },
  resolve: {
    alias: {
      "~": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  preview: {
    port: 8080,
    host: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw0NjczNVxcXFxwcm9qZWt0XFxcXHJlc3VtZS13ZWJzaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw0NjczNVxcXFxwcm9qZWt0XFxcXHJlc3VtZS13ZWJzaXRlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy80NjczNS9wcm9qZWt0L3Jlc3VtZS13ZWJzaXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBzb2xpZCBmcm9tIFwidml0ZS1wbHVnaW4tc29saWRcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xuaW1wb3J0IHR5cGUgeyBWaXRlUFdBT3B0aW9ucyB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcbmltcG9ydCBkZXZ0b29scyBmcm9tIFwic29saWQtZGV2dG9vbHMvdml0ZVwiO1xuXG5jb25zdCBwd2FPcHRpb25zOiBQYXJ0aWFsPFZpdGVQV0FPcHRpb25zPiA9IHtcbiAgcmVnaXN0ZXJUeXBlOiBcImF1dG9VcGRhdGVcIixcbiAgaW5qZWN0UmVnaXN0ZXI6IFwiYXV0b1wiLFxuICBkZXZPcHRpb25zOiB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfSxcblxuICBpbmNsdWRlQXNzZXRzOiBbXCJmYXZpY29uLmljb1wiLCBcImFwcGxlLXRvdWNoLWljb24ucG5nXCIsIFwibWFzay1pY29uLnN2Z1wiXSxcbiAgbWFuaWZlc3Q6IHtcbiAgICBuYW1lOiBcIkZlbGl4IFJhbW5lbFx1MDBGNnZcIixcbiAgICBzaG9ydF9uYW1lOiBcIkZSXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVzdW1lIFdlYnNpdGVcIixcbiAgICB0aGVtZV9jb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgaWNvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgc3JjOiBcInB3YS02NHg2NC5wbmdcIixcbiAgICAgICAgc2l6ZXM6IFwiNjR4NjRcIixcbiAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHNyYzogXCJwd2EtMTkyeDE5Mi5wbmdcIixcbiAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3JjOiBcInB3YS01MTJ4NTEyLnBuZ1wiLFxuICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzcmM6IFwibWFza2FibGUtaWNvbi01MTJ4NTEyLnBuZ1wiLFxuICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtzb2xpZCgpLCBkZXZ0b29scyh7IGF1dG9uYW1lOiB0cnVlIH0pLCBWaXRlUFdBKHB3YU9wdGlvbnMpXSxcbiAgc2VydmVyOiB7XG4gICAgd2F0Y2g6IHtcbiAgICAgIHVzZVBvbGxpbmc6IHRydWUsXG4gICAgfSxcbiAgICBwb3J0OiAzMDAwLFxuICAgIGhvc3Q6IFwiMTI3LjAuMC4xXCIsXG4gIH0sXG4gIGRlZmluZToge1xuICAgIGdsb2JhbDoge30sXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJ+XCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgfSxcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQ6IDgwODAsXG4gICAgaG9zdDogdHJ1ZSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUyxTQUFTLG9CQUFvQjtBQUN4VSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsZUFBZTtBQUV4QixPQUFPLGNBQWM7QUFMckIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTSxhQUFzQztBQUFBLEVBQzFDLGNBQWM7QUFBQSxFQUNkLGdCQUFnQjtBQUFBLEVBQ2hCLFlBQVk7QUFBQSxJQUNWLFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFFQSxlQUFlLENBQUMsZUFBZSx3QkFBd0IsZUFBZTtBQUFBLEVBQ3RFLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLGFBQWE7QUFBQSxJQUNiLGFBQWE7QUFBQSxJQUNiLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxRQUNFLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsUUFDRSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDWDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRSxVQUFVLEtBQUssQ0FBQyxHQUFHLFFBQVEsVUFBVSxDQUFDO0FBQUEsRUFDcEUsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLElBQ2Q7QUFBQSxJQUNBLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixRQUFRLENBQUM7QUFBQSxFQUNYO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
