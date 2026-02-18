import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Use jsdom for browser-like environment
    globals: true,        // Optional: allows using test/expect without imports
    setupFiles: ["vitest.setup.js"],
  },
});

