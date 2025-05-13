import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import daStyle from 'eslint-config-dicodingacademy';

export default defineConfig([
  { ignores: ['**/src/utils/**'] },
  daStyle,
  {
    files: ['src/**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['src/**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
  },
  {
    files: ['src/**/*.{js,mjs,cjs}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
]);
