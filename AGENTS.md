<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Teaching code

- The audience is high school students. Use short, direct sentences. Explain new terms.
- Keep each lesson in the folder that matches its route. Start with demo.jsx.
- Prefer clear, direct code over abstraction. A small amount of duplication is intentional.
- Keep state, named event handlers, inputs, and output together when practical.
- Use named functions and named exports. Use default exports only for framework files or configs that require them.
- Write comments that explain a reason, a surprising rule, or a useful next step.
- Keep Explanation second, between Preview and Code. Include relevant snippets after the overview.
- Keep README.md and lesson.js consistent. Do not add LMS navigation links to the Markdown lessons.
- Preserve untyped JavaScript support. Shared upstream UI components can remain TypeScript.
- Do not add a database, authentication, or API key requirement to the local examples.
