import babelParser from '@babel/eslint-parser';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import eslintConfigs from '@dr.pogodin/eslint-configs';

export default defineConfig([
  {
    ignores: ['**/node_modules', '**/build', '**/.yarn', '**/docs', '**/*.tsx'],
  },
  {
    extends: [eslintConfigs.configs.javascript, prettierConfig, eslintConfigs.configs.react],
    plugins: {
      prettier,
    },
    languageOptions: {
      globals: {
        fetch: 'readonly',
        JSX: true,
      },
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        requireConfigFile: false,
        babelOptions: { presets: ['@babel/preset-react'] },
      },
    },
    settings: {
      'import/resolver': {
        node: {},
        exports: {},
      },
      react: { version: 'detect' },
    },
    rules: {
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-eq-null': 'off',
      'no-underscore-dangle': 'off',
      'no-useless-assignment': 'off',
      'sort-keys': 'off',
      camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
      'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.config.*', '**/__test__/**/*'] }],
      'import/no-unassigned-import': 'off',
      'no-unused-vars': ['error', { caughtErrors: 'none', ignoreRestSiblings: true, varsIgnorePattern: '^React$' }],
      'react/jsx-filename-extension': 'off',
    },
  },
]);
