/** @type {import("eslint").Linter.Config} */
const config = {
    extends: ["prettier", "eslint:recommended"],
    overrides: [
        {
            extends: [
                "next/core-web-vitals",
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
                "plugin:prettier/recommended",
            ],
            plugins: ["unused-imports", "tailwindcss"],
            settings: {
                tailwindcss: {
                    callees: ["cn"],
                },
            },
            files: ["**/*.ts", "**/*.tsx"],
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: [
                    "./tsconfig.json",
                    "./apps/*/tsconfig.json",
                    "./packages/*/tsconfig.json",
                ],
            },
            rules: {
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                        argsIgnorePattern: "^_",
                        varsIgnorePattern: "^_",
                        caughtErrorsIgnorePattern: "^_",
                    },
                ],
            },
        },
    ],
    root: true,
    reportUnusedDisableDirectives: true,
    ignorePatterns: [".eslintrc.js", "**/*.config.js", "**/*.config.cjs", "packages/config/**"],
};

module.exports = config;
