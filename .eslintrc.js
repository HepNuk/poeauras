module.exports = {
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "extends": [
    // "airbnb-base",
    "plugin:vue/recommended",
    // "plugin:import/errors",
    // "plugin:import/warnings"
  ],
  "env": {
    "browser": true,
  },
  "rules": {
    "strict": 0,
    // "linebreak-style": ["error", "windows"],
//    "semi": [2, "always"],
    "vue/max-attributes-per-line": ["off", {}],
    "vue/require-default-prop": ["off", {}],
    "vue/html-self-closing": ["off", {}],
    "vue/no-unused-components": ["warn", {}],
    "max-len": ["error", { code: 200, ignorePattern: "(\\$t|:href)" }],
    "comma-dangle": ["off", {
//      "arrays": "never",
//      "objects": "never",
//      "imports": "never",
//      "exports": "never",
//      "functions": "ignore"
    }],
  },
};
