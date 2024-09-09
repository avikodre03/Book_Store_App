import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import config from './src/importEnv'



export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: config.port,
    proxy: {
      '/api': {
        target: config.target, 
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [react()]
})


