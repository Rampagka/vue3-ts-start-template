/* eslint-disable no-restricted-imports */
import baseConfig from './src/core/configs/eslint/base'
import moduleStructure from './src/core/configs/eslint/module-structure'
import importsConfig from './src/core/configs/eslint/imports'
/* eslint-enable no-restricted-imports */

import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs } from '@vue/eslint-config-typescript'

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
