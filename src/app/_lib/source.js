import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";

// Only trusted server pages supply these file paths. Never accept a visitor’s path here.
export async function demoSources(...files) {
  return Promise.all(
    files.map(async function mapName(name) {
      const code = await readFile(
        path.join(process.cwd(), "src", name),
        "utf8",
      );
      return {
        name: `src/${name}`,
        code,
        highlighted: Prism.highlight(code, Prism.languages.jsx, "jsx"),
      };
    }),
  );
}
