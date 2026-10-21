# Front End Demos — Local Development

Small lessons for high school students. Each lesson has Preview, Explanation, and Code tabs. The example files use JavaScript and JSX, helpful comments, named exports, and named functions. Pages and layouts use the default exports required by Next.js.

## Run locally

Use **Node 24** and **pnpm 11.19.0**. The Node version is in `.nvmrc` and `.node-version`. The pnpm version is pinned in `package.json`.

If you use nvm, run `nvm install` and `nvm use` from this folder. If pnpm is not installed, run `npm install --global pnpm@11.19.0` once.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open **http://localhost:3000** or the address printed by Next.js. Edit a file in `src/app` and save it. The browser updates automatically. Stop the server with **Control+C**.

If another app uses port 3000, run `pnpm dev --port 3033` and open http://localhost:3033.

The demos use local sample data. You do not need a database URL, API key, or environment file. Map tiles need an internet connection.

## Check your changes

```bash
pnpm check
pnpm test
```

`pnpm check` runs lint, TypeScript checks, and formatting checks. To fix formatting, run `pnpm format`.

## Test a production build

Stop the development server first if it uses port 3000.

```bash
pnpm build
pnpm start
```

Open http://localhost:3000. To use another port, run `pnpm start --port 3034`.

The ZIP contains source files and the pnpm lockfile. Run the install command after extracting it; dependencies and generated output are created on your computer.

## Start with Basics

Basics is the first section. Its lessons cover running the project, finding files, default page exports and named imports, use client, and fixing a common error. The page-export lesson imports a real route component without braces and compares it with a named component import. The old /nextjs/use-client URL redirects to /basics/use-client.

## Find a lesson

The URL matches its folder. For example, `/logic/styles` lives in `src/app/logic/styles/`.

- `demo.jsx`: the working example; start here.
- `lesson.js`: the short explanation and code snippets.
- `page.jsx`: the Next.js route and its metadata.
- `README.md`: the standalone Markdown lesson, ready to copy into an LMS.

The pages, responsive navigation, and active-link lessons use a local layout.jsx to keep a mini app inside the lesson frame. Their child page files supply only the changing content. Open demo.jsx to read the app header, then inspect layout.jsx and the child pages. The Code tab includes all of those real files.

The map folders also contain `map-preview.jsx` to load browser-only map code. Each calendar stage has its own readable implementation. There is no shared calendar engine or database.

`src/app/_components` contains only the site shell, navigation, tabs, and source viewer. `src/app/_lib/catalog.js` supplies navigation and cards. Shared shadcn/Base UI components live in `src/components/ui`.

## Explore components

The Component Reference link in the header opens `/reference/components`: a visual gallery of every included component, grouped by category. Each card shows a live preview with its complete import and usage code below it. Use the search box or category links to find a component.

The Component Basics section teaches how components work. The Component Explorer section groups all 62 installed components into seven categories. Each category has its own demo.jsx, explanation, and component list. Everyday essentials come first; inputs come last. Links in the component list open the matching live preview and its working code. The lists share navigation metadata, while each working example keeps its own direct teaching code.

## Accessibility and performance

Accessibility and Performance are separate sections with practical lessons. The old /quality URLs redirect to the new accessibility pages. Performance examples use local image files, a chart loaded when opened, and a real local fetch. The request timer is not a page score. Test complete-page loading with a production build and browser tools.

## Change the site identity

Edit `src/app/layout.jsx` for the default title and description. A server page can export its own `metadata`. Replace `src/app/icon.svg` for the browser icon. Edit `src/app/_components/demo-navbar.jsx` for the visible site name.

## Build tooling

The dev and build commands use the same Next.js webpack compiler. The MapLibre worker is prepared automatically before either command.

## Maps

MapLibre and react-map-gl render the main map examples with OpenFreeMap styles and tiles. A separate Leaflet and React Leaflet example uses OpenStreetMap raster tiles. The comparison lesson separates renderer, React wrapper, and tile service. Both examples need network access but no API key for the configured providers. The other examples use local data and assets.

MapLibre 6 needs a worker. `scripts/prepare-map.mjs` copies the worker from the installed package into `public/maplibre-worker.mjs` before dev and build. Keep the attribution visible. A readable place list accompanies the map. Test classroom devices for WebGL support.

## JavaScript is welcome

`allowJs` is true and `checkJs` is false. Students can add `.js` and `.jsx` files without writing TypeScript types. Upstream UI components remain typed.

## Teaching approach

Use short, direct sentences. Show the relevant code after each explanation. Keep controls, state, event handlers, and output together where practical. Prefer clear code over clever reuse. Do not introduce a helper just to shorten an example.
