module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],

  rules: {
    camelcase: 'off',
    'no-shadow': 'off',
    'import/no-extraneous-dependencies': 'off',
    'max-len': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'no-empty-pattern': 'off',
    'arrow-parens': 'off',
    'consistent-return': 'off',
    'arrow-body-style': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-underscore-dangle': 'off',
    semi: [2, 'never'],
    'unicorn/number-literal-case': 'off',
    'no-nested-ternary': 'off',
    'no-multiple-empty-lines': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/prop-types': 'off', // look again
    'react/no-unescaped-entities': 'off',
    'react/no-array-index-key': 'off',
    'react/button-has-type': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-danger': 'off',
    // A11y things
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
  },

  ignorePatterns: ['node_modules/', '.next/'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@/constants', './constants'],
          ['@/copy', './copy'],
          ['@/tempData', './tempData'],
          ['@/helpers', './helpers'],
          ['@/graphQl', './graphQl'],
          ['@', './components'],
          ['~', '.'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.css'],
      },
    },
  },
}
