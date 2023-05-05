module.exports = {
    configs: {
        recommended: {
            plugins: [
                'json',
                'import',
                'promise',
                'sonarjs',
                'prettier',
                'filenames',
            ],
            extends: [
                'eslint:recommended',
                'plugin:import/recommended',
                'plugin:import/typescript',
                'plugin:promise/recommended',
                'plugin:json/recommended-with-comments',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:prettier/recommended',
            ],
            rules: [

            ]
        },
        react: {
            plugins: ['hooks'],
            extends: [
                'plugin:react/recommended'
            ],
        },
        'react-native': {
            env: {
                'react-native/react-native': true
            },
            plugins: ['hooks', 'react-native'],
            extends: ['@react-native-community', 'plugin:react/recommended'],
        },
    },
};
