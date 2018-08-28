module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': 'off',
    indent: ['error', 2],
    'max-len': [2, 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignorePattern: '<path([\\s\\S]*?)/>',
      ignoreTemplateLiterals: true,
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
