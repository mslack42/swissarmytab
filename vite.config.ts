import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'

const pwaConf: Partial<VitePWAOptions> = {

  registerType: 'autoUpdate',
  workbox: {
    navigateFallback: '/swissarmytab/index.html',
    globPatterns: ['**/*'], // cache everything in dist
  },

  manifest: {
    name: 'Swiss Army Tab',
    short_name: 'SwissArmyTab',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    icons: [
      {
        src: 'icon-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'icon-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), VitePWA(pwaConf)],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/swissarmytab/",
});
