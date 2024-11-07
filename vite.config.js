import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [''], // Agrega aquí los módulos problemáticos
    },
  },
});
