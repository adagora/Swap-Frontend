module.exports = {
  extends: [
    /* Includes: react-a11y, react-hooks, react, import */
    'airbnb',
    /* Set of recommended typescript practices */
    'plugin:@typescript-eslint/recommended',
    /* To fix problems with imports without the '.ts' '.tsx' extensions */
    'plugin:import/typescript',
    /* Turn off ESlint code style rules to avoid Prettier conflicts */
    'plugin:prettier/recommended'
    // 'plugin:react-hooks/recommended'
  ],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ['jest', '@typescript-eslint', 'prettier'],
  rules: {
    'no-console': 'off',
    strict: ['error', 'global'],
    curly: 'warn',
    'prefer-promise-reject-errors': ['off'],
    'no-use-before-define': ['off'],
    'no-return-assign': ['off'],
    'consistent-return': ['off'],
    'no-nested-ternary': ['off'],

    /* Typescript */
    'no-undef': ['off'],
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true
      }
    ],

    /* Jest */
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',

    /* React */
    'react/destructuring-assignment': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['off'],
    'react/no-unused-prop-types': ['warn'],
    'react/prop-types': ['warn'],
    'react/require-default-props': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-curly-newline': 'off',

    /* Allow use of devDependencies in files */
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': 'off',
    'import/prefer-default-export': ['warn'],
    'import/no-named-as-default': 'off',

    /* Treat code style issues as errors */
    'prettier/prettier': [
      'error',
      {},
      {
        // Take config from .prettierrc file
        usePrettierrc: true
      }
    ]
    /* React Hooks - not working as expected */
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      files: ['*.stories.tsx', '*.mdx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      }
    }
  ]
};
