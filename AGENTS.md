# Repository Guidelines

## Project Structure & Module Organization
The site is a Docusaurus 3 app. Author content in `docs/` (guides, CLI docs under `docs/cli/`) and `blog/` (Markdown posts). React-based customizations live in `src/` (`src/pages/index.tsx`, `src/components/`), while static assets and JSON feeds ship from `static/`. Build artifacts land in `build/` and should never be committed. Automation scripts sit in `scripts/`, notably `scripts/prebuild.sh`, which normalizes CLI docs and samples before every build.

## Build, Test, and Development Commands
Install dependencies with `npm install`. Use `npm run start` for local dev; it runs `scripts/prebuild.sh`, then serves the docs with hot reload. Execute `npm run build` for production-ready static output and `npm run serve` to smoke-test the generated `build/`. Run `npm run typecheck` to catch TS issues without compiling, and `npm run clear` if you need to reset the Docusaurus cache.

## Coding Style & Naming Conventions
Write prose in Markdown or MDX with frontmatter; use kebab-case filenames such as `docs/networking/private-endpoints.mdx`. React/TypeScript follows 2-space indentation, named exports when practical, and TypeScript types declared near component definitions. Tailwind utility classes are available; co-locate component styles via `.module.css` when utilities are insufficient. Keep metadata files (`_category_.json`) lean and descriptive.

## External Dependencies & Prebuild Notes
The prebuild step shells into `../defang/src/cmd/gendocs` (requires Go) and ingests `../samples/samples`. Keep those repositories updated locally, or vendor them into `defang-docs/defang` and `defang-docs/samples` when working in CI or preview branches.

## User-facing copy
Docs are read by developers who just met Defang. Every page should say what to do next, in their words. Never expose internal systems: internal hostnames (anything `*.defang.dev`), internal account IDs, backend names (Fabric), schema terms (tenant), deprecated wire enums (`--mode=production`), or admin and staff surfaces. Product names and taglines are decided, not drafted: Defang Deploy ("Develop Once, Deploy Anywhere." is the tagline for docs), Defang Station ("Bring your agent. Run it anywhere."), and Defang Forge. Retired, never reintroduce: Playground, "Platform" as the product name, and "Cloud, Simplified". Deployment modes are `affordable`, `balanced`, and `high_availability`; plans are Starter, Pro, and Enterprise. Full rules live in `strategy/language-style-guide.md` in DefangLabs/defang-global.
