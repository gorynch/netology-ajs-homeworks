import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: { globals: {...globals.browser, ...globals.node} }
  },
  pluginJs.configs.recommended,
  {
    ignores: ["dist", "config/*"]
  },
  {
    rules: {
      "no-unused-vars": "warn" 
    }
  }
];