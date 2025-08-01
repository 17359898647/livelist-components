import solidPlugin from 'vite-plugin-solid'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [solidPlugin()],
  resolve: {
    alias: {
      '~': resolve(__dirname, '../packages/core/src'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
