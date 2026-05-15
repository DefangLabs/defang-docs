# Linting

This project uses Prettier for code formatting.

- All source files (`.ts`, `.tsx`, `.js`, `.jsx`, `.md`, `.mdx`, `.json`, `.css`) must be formatted with Prettier before committing.
- Run `npx prettier --write <file>` after editing any file.
- Run `npm run format:check` to verify all files are formatted.
- The pre-commit hook runs lint-staged automatically, which formats staged files with Prettier.
- Do NOT skip the pre-commit hook with `--no-verify`.
