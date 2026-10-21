import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
const config = defineConfig([
  ...nextVitals,
  {
    rules: {
      "func-names": ["error", "always"],
      "no-restricted-syntax": [
        "error",
        {
          selector: "ArrowFunctionExpression",
          message: "Use a named function so students can follow the callback.",
        },
      ],
    },
  },
  { files: ["**/*.{ts,tsx,mts,cts}"], extends: nextTs },
  {
    files: ["src/components/ui/carousel.tsx", "src/hooks/use-mobile.ts"],
    rules: { "react-hooks/set-state-in-effect": "off" },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "next-env.d.ts",
    "public/maplibre-worker.mjs",
  ]),
]);
export default config;
