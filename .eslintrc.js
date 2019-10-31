module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": ["eslint:recommended", "airbnb"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "restParams": true,
      "spread": true,
      "experimentalObjectRestSpread": true,
    }
  },
  "plugins": [
    "react",
    "react-hooks",
    "import",
    "transform-es2015-destructuring",
    "transform-object-rest-spread",
    "jsx-a11y"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "object-curly-newline": "off",
    "no-console": "error",
    "arrow-body-style": "off",
    "func-names": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    "global-require": "off",
    "guard-for-in": "off",
    "no-restricted-syntax": ["error", "WithStatement"],
    "no-use-before-define": [
      "error",
      {
        "functions": false,
        "classes": true,
      },
    ],
    "no-throw-literal": "off",
    "new-cap": "off",
    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreComments": true,
      }
    ],
    "import/no-webpack-loader-syntax": "off",
    "react/forbid-prop-types": "off",
    "react/prefer-stateless-function": "off",
    "function-paren-newline": ["error", "consistent"],
    "no-else-return": "off",
    "class-methods-use-this": "off",
    "prefer-rest-params": "off",
    "no-unused-expressions": "off",
    "react/react-in-jsx-scope": "off",
    "no-mixed-operators": "off",
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/label-has-for": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-continue": "off",
  },
};
