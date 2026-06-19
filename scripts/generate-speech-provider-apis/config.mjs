import path from "node:path";

export const repoRoot = process.cwd();
export const generatedAt = "2026-06-18";
export const docsDir = path.join(repoRoot, "docs/provider-coverage");
export const httpMethods = new Set(["get", "post", "put", "patch", "delete"]);
