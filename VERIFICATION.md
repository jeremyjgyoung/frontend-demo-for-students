# Local verification

Checked on October 21, 2026, with Node 24.19.0 and pnpm 11.19.0.

- A fresh `pnpm install --frozen-lockfile` completed successfully. The dependency lockfile was preserved exactly.
- `pnpm check` passed lint, type checks, and formatting checks.
- `pnpm test` passed all three application content and map-worker checks.
- `pnpm build` completed successfully.
- `pnpm dev --port 3000` served the app at http://localhost:3000.
- A temporary source edit appeared automatically in the browser. The source was then restored exactly.
- Browser checks passed for filtering and sorting, Explanation and Code tabs, a Base UI dialog applying a choice, and mini-app child navigation with a full reload.
- The tested browser session reported no console errors or warnings.
- Untyped JavaScript support remains enabled. Shared UI components are unchanged.

The local package has a minimal Next.js configuration and no hosted-preview scripts or containers. No environment file or account is required for the sample data. Live map tiles still require internet access; map-provider requests were not part of this verification.

The source ZIP has package.json at its root. It includes hidden project settings and the pnpm lockfile. Dependencies, build output, caches, generated map-worker files, local databases, and credential files are excluded.

## Expanded layout lessons

- Added landing-page, dashboard, article/sidebar, and full-height app-screen lessons. Each has its own demo.jsx, lesson.js, page.jsx, and README.md.
- Expanded the common-layout gallery and layout reference. Updated Explore navigation and the lesson route manifest.
- `pnpm check`, `pnpm test`, and `pnpm build` passed after the layout changes.
- Browser checks passed for gallery navigation, Explanation and Code tabs, landing-page anchors, dashboard week selection, project selection, and extra notes.
- Wide and narrow preview checks confirmed that the columns stack. Article contents use sticky positioning only in the wide layout. The footer stays after longer content.
- All four new demos fit a 390px browser viewport without horizontal page overflow. The temporary viewport override was reset after testing.
- No browser console errors or warnings were reported in the checked session.

## LMS image-hosting instructions

- Updated the upload steps to identify the cloud icon in the bottom-right corner of the LMS. The preview, Explanation, Markdown lesson, and image reference agree.
- The hosted-image snippet uses Next.js Image with the copied URL as src, useful alt text, source dimensions, and unoptimized to load the original file directly.
- Lint, type checks, formatting checks, tests, and the production build passed.
- Browser checks confirmed the LMS-only instructions, the Explanation tab, and the local Next.js Image preview. No console warnings or errors were reported.
- No LMS upload or live hosted-image request was tested. The sample URL remains a placeholder for the student's copied URL.

## Simplified component and image lessons

- Component Basics now starts with importing and using the components already in the template. Removed the component-install command and updated titles, navigation, the component explorer, and Markdown lessons.
- The button demo supports variant and shape changes and a named click handler. Browser checks confirmed that clicking Join the club updates its status message.
- Image hosting is LMS-only. Removed the provider comparison, extra provider option, and image-host configuration section. Examples use Next.js Image with unoptimized and require no host rule.
- Browser checks confirmed that the image renders directly and the simplified Explanation tab contains the upload, usage, and sizing instructions. The checked session reported no console warnings or errors.
- Lint, type checks, formatting, and all three content tests passed. No live LMS image upload was tested.

## Visual component reference

- The site header now has a prominent Component Reference link. The home page, Component Basics, Component Explorer, and reference directory also link to the gallery.
- `/reference/components` shows live previews for every installed component in seven categories. Forms and inputs are grouped together. Code stays collapsed below each preview.
- Each preview has its own small named function in `src/app/reference/components/previews`. Its Code panel reads that actual file, including imports and local event handlers.
- A coverage test compares the preview files and reference metadata with the installed UI components. All 62 components have previews, and all four tests passed.
- Browser checks covered category search and empty results, form values, select options, questionnaire submission, dialogs, a drawer, a sheet, a dropdown action, both notification systems, and expanding a Code panel.
- The full gallery mounted all 62 previews without console warnings or errors. The initial page opens at the top without a questionnaire focus jump.
- The gallery and cards fit the phone-width test without horizontal page overflow. The header link remained visible. The temporary viewport override was reset.
- Lint, type checks, formatting, and the production build passed.
