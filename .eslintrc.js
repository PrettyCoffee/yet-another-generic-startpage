const baseConfigs = [
  "eslint:recommended",
  "plugin:@typescript-eslint/eslint-recommended",
  "plugin:import/recommended",
  "plugin:import/typescript",
  "plugin:react-hooks/recommended",
  "plugin:jsx-a11y/recommended",
  "plugin:prettier/recommended",
]

const plugins = [
  "@emotion",
  "@typescript-eslint",
  "import",
  "unused-imports",
  "jsx-a11y",
]

const prettierRules = {
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "es5",
  semi: false,
  bracketSpacing: true,
  arrowParens: "avoid",
  endOfLine: "auto",
  jsxSingleQuote: false,
}

const importOrderRules = {
  groups: ["builtin", "external", "internal"],
  pathGroups: [
    {
      pattern: "react",
      group: "external",
      position: "before",
    },
  ],
  pathGroupsExcludedImportTypes: ["react"],
  "newlines-between": "always",
  alphabetize: {
    order: "asc",
    caseInsensitive: true,
  },
}

module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  extends: baseConfigs,
  plugins: plugins,
  rules: {
    "@emotion/syntax-preference": [2, "string"],
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-use-before-define": ["error"],
    "jsx-a11y/no-onchange": "off", // deprecated rule, will be deleted in a future release
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/label-has-associated-control": "off",

    "import/order": ["error", importOrderRules],
    "prettier/prettier": ["error", prettierRules],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
}
