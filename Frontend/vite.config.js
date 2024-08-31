import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5000,
    proxy: {
      '/api': {
        target: "https://book-store-app-ychd.onrender.com", 
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [react()]
})
