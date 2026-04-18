import prettyCozy from "@pretty-cozy/eslint-config"
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig([
  ...prettyCozy.baseTs,
  ...prettyCozy.react,

  globalIgnores([
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/yags-mini/**",
  ]),

  {
    name: "local-rules",
    rules: {
      "check-file/filename-naming-convention": "off",
      "check-file/folder-naming-convention": "off",
      "@typescript-eslint/no-dynamic-delete": "off",
      "react/no-unescaped-entities": "off",
    },
  },

  ...prettyCozy.prettier,
])
