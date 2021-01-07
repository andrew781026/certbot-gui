// .eslintrc.js

module.exports = {
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    semi: ["error", "always"],
    "no-console": "off"
  }
};
