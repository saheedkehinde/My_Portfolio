import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@radix-ui')) return 'radix-ui'
            if (id.includes('class-variance-authority')) return 'cva'
            if (id.includes('react')) return 'vendor'
          }
        },
        chunkFileNames: 'chunks/[name]-[hash].js',
      },
    },
    sourcemap: false, // Disable in prod for faster builds/loads
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
