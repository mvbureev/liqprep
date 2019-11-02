module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": "airbnb",
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
    "jsx-a11y"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  },
};
