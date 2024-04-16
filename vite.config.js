import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      port: 5173,
      usePolling: true,
  },
},
  plugins: [react()],
  
})
