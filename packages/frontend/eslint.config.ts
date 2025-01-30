import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import react from 'eslint-plugin-react';

export default tseslint.config(
  {
    ignores: ['node_modules/**', 'dist/**', '.react-router/**']
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  prettierConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser
      },
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  },
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      'react/no-unescaped-entities': 'off'
    }
  }
);
