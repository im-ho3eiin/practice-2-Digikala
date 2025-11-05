import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'path'; // for use resolve, then tell vite about another HTML files

export default defineConfig({
  plugins: [tailwindcss()],
  base: "./",
  build: {
    rollupOptions: {
      // 👇 tell Vite about ALL your HTML entry points
      input: {
        main:      resolve(__dirname, 'index.html'),
        fantastic: resolve(__dirname, 'fantastic-page.html'),
        register:  resolve(__dirname, 'register-page.html'),
      },},}
});
