import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,        // Try port 3000 first
    strictPort: false, // If 3000 is busy, auto-pick next available
    host: true,
    allowedHosts: true,
  }
});
