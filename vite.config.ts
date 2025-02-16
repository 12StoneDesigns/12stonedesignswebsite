import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from one level up to include project root
      allow: [
        // Vite's default paths
        'public',
        'src',
        // Add project root to allow access to all project files
        path.resolve(__dirname)
      ]
    }
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          'three-vendor': [
            'three',
            '@react-three/fiber',
            '@react-three/drei',
            'maath/random/dist/maath-random.esm'
          ],
          'react-vendor': ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei']
  },
  assetsInclude: ['**/*.docx', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  publicDir: 'public'
});
