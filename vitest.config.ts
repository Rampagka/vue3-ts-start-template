import viteConfig from './vite.config'

import { defineConfig, mergeConfig } from 'vitest/config'

export default mergeConfig(
    viteConfig as Parameters<typeof mergeConfig>[0],
    defineConfig({
        test: {
            environment: 'happy-dom',
        },
    }),
)
