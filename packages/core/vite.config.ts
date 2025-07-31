import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      insertTypesEntry: true,
    }),
  ],
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
});