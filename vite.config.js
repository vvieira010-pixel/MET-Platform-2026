import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'images/met-logo.png'],
      manifest: {
        name: 'MET Proficiency Platform',
        short_name: 'MET Mastery',
        description: 'MET test prep for nurses and healthcare professionals',
        theme_color: '#0a2a44',
        background_color: '#0a2a44',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,svg,png,webp,mp3}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/grnzzgzqizoxfcbflnwq\.supabase\.co\/rest\/v1\//,
            handler: 'NetworkFirst',
            options: { cacheName: 'supabase-api', expiration: { maxEntries: 100, maxAgeSeconds: 86400 } },
          },
        ],
      },
    }),
  ],
  cacheDir: '.vite-cache-v2',
  build: {
    outDir: 'dist-build',
    emptyOutDir: true,
        target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/motion/')) return 'vendor-motion';
          if (id.includes('node_modules/recharts/')) return 'vendor-recharts';
          if (id.includes('node_modules/d3-')) return 'vendor-d3';
          if (id.includes('node_modules/es-toolkit')) return 'vendor-toolkit';
          if (id.includes('node_modules/@grapesjs/studio-sdk')) return 'vendor-grapesjs';
        },
      },
    },
  },
  server: {
    port: 5173,
    hmr: true,
    proxy: {
      '/api': process.env.USE_PROD_API === 'true'
        ? { target: 'https://met-mastery.vercel.app', changeOrigin: true }
        : 'http://localhost:3000',
    },
  },
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
  },
});
