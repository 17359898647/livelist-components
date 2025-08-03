import solidPlugin from 'vite-plugin-solid'
import { includes, some } from 'lodash-es'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS(),
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
      onwarn(warning, warn) {
        if (
          warning.code === 'UNUSED_EXTERNAL_IMPORT'
          && warning.ids
          && some(warning.ids, id => includes(id, 'node_modules'))
        ) {
          return
        }
        warn(warning)
      },
    },
    target: 'esnext',
  },
})
