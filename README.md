# ESLint Hardcore config

## Installing

1. In your project folder, run:

```
yarn install --dev eslint-plugin-hardcore
```

2. You will see several dependencies were installed. Now, create (or update) a `.eslintrc` file with the following content:

```js
{
  'plugins': ["hardcore"],
  'extends': [
    'plugin:hardcore/recommended', // For any node project
    'plugin:hardcore/react', // if using react
    'plugin:hardcore/react-native', // if using react-native
  ]
}
```
