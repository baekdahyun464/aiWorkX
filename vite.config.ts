import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                    @import "@/styles/_variables.scss";
                    @import "@/styles/_mixin.scss";
                `,
        silenceDeprecations: ['import'],
      },
    },
    // Enable CSS code splitting
    codeSplit: true,
  },
  build: {
    // Enable chunk size warnings
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunk for React and related libraries
          'react-vendor': ['react', 'react-dom', 'react-router'],
          // Large third-party libraries
          'ag-grid': ['ag-grid-community', 'ag-grid-react'],
          'ui-libs': ['react-select', 'swiper', 'react-countup', 'react-js-pagination'],
        },
        // Optimize asset filenames for caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Enable minification optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
    },
    // Enable source maps for debugging but smaller ones
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: 'esnext',
    // Optimize assets
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },
  // Optimize deps pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router',
      'ag-grid-community',
      'ag-grid-react',
      'react-select',
      'swiper',
      'react-countup',
      'react-js-pagination'
    ],
    // Force optimization of these packages
    force: true,
  },
  // Performance configurations
  server: {
    // Enable HTTP/2 for development
    https: false,
    // Preload common dependencies
    warmup: {
      clientFiles: [
        './src/main.tsx',
        './src/router.tsx',
        './src/components/loading-spinner.tsx'
      ]
    }
  }
});
