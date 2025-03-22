import * as emotion from "@emotion/eslint-plugin"
import prettyCozy from "@pretty-cozy/eslint-config"

export default [
  ...prettyCozy.baseTs,
  ...prettyCozy.react,
  {
    plugins: { emotion },
    rules: {
      "emotion/syntax-preference": [2, "string"],
    },
  },
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/yags-mini/**",
    ],
  },
  {
    name: "eslint-migration",
    rules: {
      "check-file/folder-naming-convention": "off",
      "@typescript-eslint/no-dynamic-delete": "off",
      "react/no-unescaped-entities": "off",
    },
  },
  ...prettyCozy.prettier,
]
