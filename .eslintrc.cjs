module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:jsx-a11y/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: {
      version: "18.2"
    }
  },
  plugins: ["react-refresh", "prettier", "jsx-a11y"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "react/react-in-jsx-scope": 0,
    "react-hooks/rules-of-hooks": "error",
    "no-console": 0,
    "react/state-in-constructor": 0,
    "linebreak-style": 0,
    "react/prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "react-hooks/exhaustive-deps": 0,
    "import/named": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    // "prettier/prettier": [
    //   "error",
    //   {
    //     "trailingComma": "none",
    //     "singleQuote": true,
    //     "printWidth": 100,
    //     "tabWidth": 2,
    //     "semi": true,
    //     "endOfLine": "auto"
    //   }
    // ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ],
    // enable additional rules
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-unused-vars": "error",
    "no-duplicate-imports": "error",
    "no-empty-pattern": "error",
    "no-unexpected-multiline": "error",
    "no-use-before-define": "error",
    camelcase: "error",
    curly: ["error", "multi"],
    "no-alert": "error",
    "no-empty": "error",
    "no-empty-function": "error",
    "no-nested-ternary": "error",
    "arrow-spacing": "error",
    // "no-multi-spaces": "error",
    "no-trailing-spaces": "error",
    "max-params": ["error", 3],
    "object-curly-spacing": ["error", "always"],
    "block-spacing": "error",
    "spaced-comment": "error",
    "space-infix-ops": "error"
  }
};
