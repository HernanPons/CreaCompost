import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['../Pages/SegundoCarousel/SegundoCarousel.jsx'], // Agrega aquí los módulos problemáticos
    },
  },
});
