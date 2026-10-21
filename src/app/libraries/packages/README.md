# Find and install a library

Choose a package for a real need, then understand what pnpm adds.

## Try it

1. Use the checklist to evaluate the map packages.
2. Find the two packages in package.json.
3. Find their exact installed versions in the lockfile.

## How it works

### 1. Separate the package and the service

MapLibre draws the map. react-map-gl provides React components. OpenFreeMap supplies map data and styles. Installing a renderer does not download the whole world.

```jsx
// Install in the project terminal:
// pnpm add react-map-gl maplibre-gl
```

### 2. Understand the files

package.json lists the dependencies you request. pnpm-lock.yaml records the resolved versions. Keep the lockfile so classmates install the same dependency tree.

```jsx
// Reproduce the recorded installation:
// pnpm install --frozen-lockfile
```

### 3. Follow the documentation in small steps

First render one map. Then add one marker. Add interaction after the small version works. Check peer dependencies rather than bypassing compatibility errors.

```jsx
// Find → evaluate → install → import → configure → render
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.
