import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Enforce LazyMotion strict: use `m`, never the full `motion` import.
      // See IMPLEMENTATION_PLAN_V2 sec.13.
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "framer-motion",
              importNames: ["motion"],
              message:
                "Import `m` from framer-motion instead of `motion` (LazyMotion strict).",
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
