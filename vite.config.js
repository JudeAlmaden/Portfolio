import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages — matches the repo name.
  // Change to '/' if you set a custom domain on the Pages settings.
  base: '/Portfolio/',
  server: {
    port: 3001,
  },
})
