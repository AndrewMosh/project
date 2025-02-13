/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  define: {
    'process.env': process.env,
  },
  plugins: [react()],
  test: {
	coverage: {
    provider: 'v8', 
		reportsDirectory: './coverage', 
		reporter: ['text', 'html'], 
		include: ['src/**/*.ts', 'src/**/*.tsx'], 
		exclude: ['node_modules', 'tests/**/*.test.ts'],
	  },
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: true,
  },
  resolve: {
    alias: {
      '@shared': path.resolve(__dirname, './src/shared'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@store': path.resolve(__dirname, './src/store'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `
          @use '@styles/config/variables' as *;
          @use '@styles/config/normalize' as *;
          @use '@styles/mixins/flex-wrapper' as *;
		  @use '@styles/mixins/flex-center' as *;
          @use '@styles/mixins/media' as *;
		  @use '@styles/config/fonts' as *;
        `,
      },
    },
  },
});
