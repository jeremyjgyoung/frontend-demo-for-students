import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { topics } from "../src/app/_lib/catalog.js";
import { components } from "../src/app/reference/components/catalog.js";
import { componentCategories } from "../src/app/component-explorer/catalog.js";

test("Component Explorer covers every installed component once, with inputs last", function checkCategories() {
  const ids = componentCategories.flatMap(function categoryIds(category) {
    return category.components;
  });
  assert.equal(componentCategories[0].components[0], "button");
  assert.equal(componentCategories.at(-1).id, "inputs");
  assert.equal(new Set(ids).size, ids.length);
  assert.deepEqual(
    [...ids].sort(),
    components
      .map(function componentId(component) {
        return component.id;
      })
      .sort(),
  );
});

test("Every listed lesson has its own runnable route and student-readable source", async function checkLessons() {
  const items = topics.flatMap(function lessonItems(topic) {
    return topic.items;
  });
  const expectedRoutes = JSON.parse(
    readFileSync("tests/lesson-routes.json", "utf8"),
  );
  assert.deepEqual(
    items.map(function route(item) {
      return item.href;
    }),
    expectedRoutes,
  );
  assert.equal(
    new Set(
      items.map(function lessonHref(item) {
        return item.href;
      }),
    ).size,
    items.length,
  );
  for (const item of items) {
    const folder = "src/app" + item.href;
    for (const file of ["page.jsx", "demo.jsx", "lesson.js", "README.md"])
      assert.ok(existsSync(folder + "/" + file), folder + "/" + file);
    const { lesson } = await import("../" + folder + "/lesson.js");
    assert.ok(lesson.explanations.length >= 2, item.href);
    assert.ok(lesson.steps.length >= 2, item.href);
    assert.equal(lesson.title, item.title);
    const demo = readFileSync(folder + "/demo.jsx", "utf8");
    assert.ok(demo.includes("export function LessonDemo"));
    assert.ok(!demo.includes("pocketbase"), item.href);
  }
});
test("The worker setup uses the installed version and the lessons request its local URL", function checkWorker() {
  assert.ok(
    readFileSync("scripts/prepare-map.mjs", "utf8").includes(
      "maplibre-gl-worker.mjs",
    ),
  );
  for (const slug of ["first-map", "places", "connected-map"])
    assert.ok(
      readFileSync("src/app/libraries/" + slug + "/demo.jsx", "utf8").includes(
        'setWorkerUrl("/maplibre-worker.mjs")',
      ),
    );
});
