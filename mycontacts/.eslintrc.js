module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "no-console": "off",
    camelcase: "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    "comma-dangle": "off",
    "linebreak-style": "off",
    "comma-props": "off",
    "function-paren-newline": "off",
    "implicit-arrow-linebreak": "off",
    avoidEscape: true,
    allowTemplateLiterals: true,
  },
};
