module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    'object-curly-spacing': [2, 'always'],
    semi: 2,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-console': 0,
    'react/prop-types': [2, { ignore: ['children'] }],
    'react-hooks/exhaustive-deps': 0,
  },
};
