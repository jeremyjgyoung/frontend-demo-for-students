import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { components } from "../src/app/reference/components/catalog.js";

test("The visual reference has a real preview for every installed component", function previewCoverage() {
  const installed = readdirSync("src/components/ui")
    .filter(function isComponent(file) {
      return file.endsWith(".tsx");
    })
    .map(function componentName(file) {
      return file.replace(/\.tsx$/, "");
    })
    .sort();
  const previewFiles = readdirSync("src/app/reference/components/previews")
    .map(function previewName(file) {
      return file.replace(/\.jsx$/, "");
    })
    .sort();
  assert.deepEqual(previewFiles, installed);
  assert.deepEqual(
    components
      .map(function id(component) {
        return component.id;
      })
      .sort(),
    installed,
  );
  const registry = readFileSync(
    "src/app/reference/components/preview-components.jsx",
    "utf8",
  );
  for (const id of installed) {
    assert.ok(
      registry.includes('"./previews/' + id + '"'),
      id + " is imported into the gallery",
    );
    const source = readFileSync(
      "src/app/reference/components/previews/" + id + ".jsx",
      "utf8",
    );
    assert.match(source, /export function \w+Preview\(/, id);
    assert.ok(
      source.includes("@/components/ui/" + id + '"') || id === "sonner",
      id + " uses its real component",
    );
  }
});
