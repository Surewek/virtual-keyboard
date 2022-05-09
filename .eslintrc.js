module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    'airbnb/base',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    'linebreak-style': ['error', 'windows'],
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never', { js: 'always' }],
    'no-unused-vars': 'off',
  },
};
