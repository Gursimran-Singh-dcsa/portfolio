module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['out', '.next', 'node_modules', '.eslintrc.cjs', 'next-env.d.ts', 'public/sw.js'],
  parser: '@typescript-eslint/parser',
}
