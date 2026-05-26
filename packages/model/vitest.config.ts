import { readFileSync } from "node:fs";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [{
    name: "cognidesk-model-markdown",
    load(id) {
      if (!id.endsWith(".md")) return null;
      return `export default ${JSON.stringify(readFileSync(id, "utf8"))};`;
    },
  }],
});
