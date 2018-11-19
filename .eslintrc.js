module.exports = {
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier',
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
    },
    settings: {
        react: {
            version: '15.0',
        },
    },
}
