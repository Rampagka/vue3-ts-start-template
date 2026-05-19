import baseConfig from './src/core/configs/eslint/base'
import importsConfig from './src/core/configs/eslint/imports'
import moduleStructure from './src/core/configs/eslint/module-structure'

import { defineConfigWithVueTs } from '@vue/eslint-config-typescript'
import { globalIgnores } from 'eslint/config'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{vue,ts,mts,tsx}'],
    },

    globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
    ...baseConfig,
    importsConfig,
    moduleStructure,
)
