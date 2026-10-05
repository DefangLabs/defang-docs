# Linting

This project uses Prettier for code formatting.

- All source files (`.ts`, `.tsx`, `.js`, `.jsx`, `.md`, `.json`, `.css`) must be formatted with Prettier before committing.
- `.mdx` is excluded (see `.prettierignore`): Prettier's markdown/mdx printer corrupts Docusaurus JSX-in-Markdown (Tabs/TabItem children, `{/* */}` comments). Format `.mdx` files by hand.
- Run `npx prettier --write <file>` after editing any file.
- Run `npm run format:check` to verify all files are formatted.
- The pre-commit hook runs lint-staged automatically, which formats staged files with Prettier.
- Do NOT skip the pre-commit hook with `--no-verify`.
