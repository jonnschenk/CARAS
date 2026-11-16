import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // El sitio se publica en GitHub Pages bajo https://jonnschenk.github.io/CARAS/
  base: '/CARAS/',
  // Expone el servidor en la red local para probar desde otros dispositivos
  server: {
    host: true,
  },
  preview: {
    host: true,
  },
})
