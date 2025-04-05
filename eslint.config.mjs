import globals from 'globals'
import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  // Next.js のeslintプラグインをflatで動かすための設定
  // see https://github.com/vercel/next.js/issues/64114#issuecomment-2440625243
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
    },
    settings: {
      next: {
        rootDir: 'src/',
      },
    },
  },
  eslintConfigPrettier
)
