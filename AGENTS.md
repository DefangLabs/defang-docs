# Repository Guidelines

## Project Structure & Module Organization
The site is a Docusaurus 3 app. Author content in `docs/` (guides, CLI docs under `docs/cli/`) and `blog/` (Markdown posts). React-based customizations live in `src/` (`src/pages/index.tsx`, `src/components/`), while static assets and JSON feeds ship from `static/`. Build artifacts land in `build/` and should never be committed. Automation scripts sit in `scripts/`, notably `scripts/prebuild.sh`, which normalizes CLI docs and samples before every build.

## Build, Test, and Development Commands
Install dependencies with `npm install`. Use `npm run start` for local dev; it runs `scripts/prebuild.sh`, then serves the docs with hot reload. Execute `npm run build` for production-ready static output and `npm run serve` to smoke-test the generated `build/`. Run `npm run typecheck` to catch TS issues without compiling, and `npm run clear` if you need to reset the Docusaurus cache.

## Coding Style & Naming Conventions
Write prose in Markdown or MDX with frontmatter; use kebab-case filenames such as `docs/networking/private-endpoints.mdx`. React/TypeScript follows 2-space indentation, named exports when practical, and TypeScript types declared near component definitions. Tailwind utility classes are available; co-locate component styles via `.module.css` when utilities are insufficient. Keep metadata files (`_category_.json`) lean and descriptive.

## External Dependencies & Prebuild Notes
The prebuild step shells into `../defang/src/cmd/gendocs` (requires Go) and ingests `../samples/samples`. Keep those repositories updated locally, or vendor them into `defang-docs/defang` and `defang-docs/samples` when working in CI or preview branches.
