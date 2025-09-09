/* eslint-env node */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-refresh'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  settings: { react: { version: 'detect' } },
  env: { browser: true, es2022: true, node: true },
  rules: {
    'react/react-in-jsx-scope': 'off', // not needed with React 17+
    'react-refresh/only-export-components': 'warn',
  },
}
