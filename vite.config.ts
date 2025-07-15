import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import purgeCss from 'vite-plugin-purgecss';
import viteImagemin from 'vite-plugin-imagemin';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'brotliCompress', ext: '.br' }),
    purgeCss({
      content: ['./index.html', './src/**/*.{ts,tsx,js,jsx,scss,html}'],
    }),
    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 70 },
      pngquant: { quality: [0.65, 0.8], speed: 4 },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: false },
        ],
      },
    }),
    visualizer({ filename: './dist/bundle-report.html', gzipSize: true, brotliSize: true }),
  ],
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
