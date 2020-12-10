module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  plugins: ["jsx-a11y", "import", "prettier", "@typescript-eslint"],
  globals: {},
  rules: {
    // prettier
    "prettier/prettier": ["error"],
    // TypeScript
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    // v4 changes
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    // import
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
      },
    },
    "import/extensions": [".js", ".ts", ".mjs", ".jsx", ".tsx"],
  },
};
