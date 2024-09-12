import prettier from 'eslint-plugin-prettier';
import babelParser from '@babel/eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { fixupPluginRules, fixupConfigRules } from '@eslint/compat';
import importPlugin from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...fixupConfigRules(compat.extends('airbnb', 'airbnb/hooks')),
  ...compat.extends('prettier', 'plugin:prettier/recommended'),
  {
    plugins: {
      prettier,
      import: fixupPluginRules(importPlugin),
    },

    languageOptions: {
      globals: {
        fetch: 'readonly',
        JSX: true,
      },

      parser: babelParser,
    },

    settings: {
      'import/resolver': {
        node: {},
        exports: {},
      },
    },

    rules: {
      'react/jsx-filename-extension': 'off',
      'no-underscore-dangle': 'off',
      'react/forbid-prop-types': 'off',
      'react/jsx-fragments': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
    },
  },
];
