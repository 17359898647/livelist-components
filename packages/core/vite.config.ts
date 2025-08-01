import tailwindcss from '@tailwindcss/vite'
import solidPlugin from 'vite-plugin-solid'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    tailwindcss() as any,
    solidPlugin(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'LivelistCore',
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['solid-js', 'solid-js/web', 'solid-js/store'],
      output: {
        globals: {
          'solid-js': 'Solid',
        },
      },
    },
    target: 'esnext',
  },
})
