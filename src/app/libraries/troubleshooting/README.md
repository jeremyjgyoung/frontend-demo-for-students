# Fix common library problems

Check one cause at a time before changing the whole example.

## Try it

1. Choose each symptom.
2. Find the related setup in the first-map Code tab.

## How it works

### 1. Read before reinstalling

Check the first error message and the network panel. A missing stylesheet, height, or external tile request is not fixed by changing React state.

```jsx
// Check: imports → stylesheet → container → worker → network → versions
```

### 2. Load browser-only code in the browser

Map code uses browser APIs. The client wrapper uses dynamic with ssr: false. Keep metadata in the server page.

```jsx
const BrowserMap = dynamic(
  function loadMap() {
    return import("./demo").then(function getMap(module) {
      return module.LessonDemo;
    });
  },
  { ssr: false },
);
```

## Try a change

Change one value. Predict what will change. Run the page and explain the result.
