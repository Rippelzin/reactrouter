import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
server: {
  https: {
    key: './src/sll/mapapp-privateKey.key',
    cert: './src/sll/mapapp.crt',
  }
},

  plugins: [react()],
})
