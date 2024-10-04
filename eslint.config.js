import typescriptParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginImport from 'eslint-plugin-import';
import astroPlugin from 'eslint-plugin-astro';

export default [
  {
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
      import: eslintPluginImport,
      astro: astroPlugin,
    },
    rules: {
      // Global rules
    },
  },
  {
    files: ['*.astro'],
    languageOptions: {
      parser: astroParser,
      extraFileExtensions: ['.astro'],
    },
    rules: {
      // Astro-specific rules
    },
  },
];
