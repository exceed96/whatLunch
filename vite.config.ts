import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: { enabled: true },
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "점심 뭐 먹지?",
        short_name: "점심뭐먹지?",
        description: "오늘 뭐 먹을지 못 고르는 당신이여 여기로 와라",
        background_color: "#ffffff",
        theme_color: "#008649",
        prefer_related_applications: true,
        lang: "ko",
        display: "standalone",
        icons: [
          {
            src: "./src/assets/pwa/pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "./src/assets/pwa/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./src/assets/pwa/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "./src/assets/pwa/maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        sw: "./dist/sw.js",
      },
    },
  },
});
