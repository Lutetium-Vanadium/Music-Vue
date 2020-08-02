module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'func-names': 0,
    'space-before-function-paren': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-new': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    'import/no-extraneous-dependencies': 0,
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'no-underscore-dangle': 0,
    '@typescript-eslint/no-var-requires': 0,
    'global-require': 0,
    'class-methods-use-this': 0,
  },
};
