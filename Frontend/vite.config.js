import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { port, target } from './importEnv'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: port,
    proxy: {
      '/api': {
        target: target, 
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [react()]
})
