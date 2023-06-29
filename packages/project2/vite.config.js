import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8082,
  },
  preview: {
    port: 8082,
  },
  // 参考 https://github.com/vitejs/vite/issues/6215 低版本react可能会提示找不到react/jsx-dev-runtime
  plugins: [react( process.env.NODE_ENV === 'production' ? undefined : { jsxRuntime: 'classic' })],
})
