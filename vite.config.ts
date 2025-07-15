import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), compression({ algorithm: 'brotliCompress', ext: '.br' })],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries into distinct chunks to improve caching and reduce initial bundle size
          react: ['react', 'react-dom'],
          swiper: ['swiper', 'swiper/react', 'swiper/modules'],
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                    @import "@/styles/_variables.scss";
                    @import "@/styles/_mixin.scss";
                `,
      },
    },
  },
});
