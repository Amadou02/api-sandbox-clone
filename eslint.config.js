// eslint.config.js
const prettier = require('eslint-plugin-prettier');
const n = require('eslint-plugin-n');
const promise = require('eslint-plugin-promise');
const importPlugin = require('eslint-plugin-import');

module.exports = [
  {
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    files: ['**/*.js'],
    ignores: ['node_modules/**', 'dist/**', 'coverage/**'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
        process: 'readonly'
      }
    },
    plugins: {
      prettier,
      n,
      promise,
      import: importPlugin
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'space-before-function-paren': 'off',
      'comma-dangle': ['error', 'never'],
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_', // pour ignorer les paramètres comme `_req`, `_res`, etc.
          varsIgnorePattern: '^_', // pour ignorer les variables comme `_Sequelize`, etc.
          args: 'after-used', // comportement par défaut
          ignoreRestSiblings: true
        }
      ],
      'no-console': 'off',
      'n/no-missing-import': 'error',
      'n/no-unpublished-import': 'off',
      'promise/always-return': 'off',
      'promise/catch-or-return': 'warn',
      'import/no-duplicates': 'error',
      'import/order': ['error', { 'newlines-between': 'always' }],
      'prettier/prettier': 'error'
    }
  }
];
