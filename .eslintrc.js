module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:vue/essential',
    'google',
    'plugin:vue/vue3-strongly-recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 13,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
    'simple-import-sort',
  ],
  'rules': {
    'vue/multi-word-component-names': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-irregular-whitespace': 'off',
    'linebreak-style': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/no-v-for-template-key-on-child': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/no-multiple-template-root': 'off',
    'max-len': ['error', {code: 180}],
    'indent': ['error', 2],
    'simple-import-sort/imports': 'warn',
    'object-curly-newline': ['error', {'multiline': true, 'minProperties': 3}],
    'vue/max-attributes-per-line': ['error', {'singleline': {'max': 3}, 'multiline': {'max': 1}}],
  },
};
