import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        tailwindcss(),
        AutoImport({
            imports: ['vue', 'vue-router', 'pinia'],
            dts: './auto-imports.d.ts',
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            // '~@m': fileURLToPath(new URL('./src/modules', import.meta.url)),
            // '~@c': fileURLToPath(new URL('./src/core', import.meta.url)),
        },
    },
    build: {
        rolldownOptions: {
            output: {
                manualChunks: {
                    'vue-vendor': ['vue', 'vue-router', 'pinia'],
                },
            },
        },
        chunkSizeWarningLimit: 500,
    },
})
