import { readdir } from "node:fs/promises";
import path from "node:path";

export async function walk(root) {
  const result = [];
  for (const entry of await readdir(root, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === "dist" || entry.name === "build") continue;
    const absolute = path.join(root, entry.name);
    if (entry.isDirectory()) {
      result.push(...await walk(absolute));
    } else {
      result.push(absolute);
    }
  }
  return result;
}
