module.exports = {
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jest/recommended',
        'prettier',
        'prettier/react',
    ],
    plugins: [
        'prettier',
        'react',
    ],
    rules: {
        'prettier/prettier': ['error', {
            printWidth: 80,
            tabWidth: 4,
            semi: false,
            trailingComma: 'all',
            singleQuote: true,
        }],
        camelcase: ['error', { properties: 'never' }],
        curly: ['error', 'all'],
        'dot-notation': 'error',
        eqeqeq: 'error',
        'no-duplicate-imports': 'error',
        'no-nested-ternary': 'error',
        'no-useless-computed-key': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'prefer-template': 'error',
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-to-contain': 'error',
        'react/default-props-match-prop-types': 'error',
        'react/require-default-props': 'error',
        'react/no-redundant-should-component-update': 'error',
    },
    settings: {
        react: {
            version: '16.0',
        },
    },
}
