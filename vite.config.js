/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // error occured "Loading module from “http://localhost:5173/node_modules/.vite/deps/html-react-parser.js?v=0922589b” was blocked because of a disallowed MIME type (“”)"
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
