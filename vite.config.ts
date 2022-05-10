import vue from '@vitejs/plugin-vue';
import {defineConfig} from 'vite';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        ws: true,
      },
    },
  },
  resolve: {alias: {'~': path.resolve(__dirname, './src')}},
});
