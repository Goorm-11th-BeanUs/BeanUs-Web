import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@', replacement: 'src' },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://kdbda913f9220a.user-app.krampoline.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\//, ''),
      },
    },
  },
})
