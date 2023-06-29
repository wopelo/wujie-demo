import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import externalGlobals from 'rollup-plugin-external-globals'

// 全局对象
const globals = externalGlobals({
  react: 'React',
  'react-dom': 'ReactDOM',
})


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8081,
  },
  preview: {
    port: 8081,
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'],
      plugins: [
        globals
      ],
    },
  }
})
