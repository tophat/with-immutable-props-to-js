module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['@tophat'],
    rules: {
        'react/prop-types': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx', '.js'],
            },
        },
    },
}
