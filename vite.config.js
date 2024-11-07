import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['.Navbar.css'], // Agrega aquí los módulos problemáticos
    },
  },
});
