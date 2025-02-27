import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/React-Weather-App/', // Your repo name
  build: {
    outDir: 'docs', // Ensure output goes to docs/
  },
});
