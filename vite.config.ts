import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // CLARITY_ID (set in Netlify) turns on Microsoft Clarity on /squadcraft/6x1; unset means no script.
  envPrefix: ['VITE_', 'CLARITY_'],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        squadcraft: fileURLToPath(new URL('./squadcraft/index.html', import.meta.url)),
        squadcraft6x1: fileURLToPath(new URL('./squadcraft/6x1/index.html', import.meta.url)),
      },
    },
  },
})
