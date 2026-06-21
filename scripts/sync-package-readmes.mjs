#!/usr/bin/env node
import { copyFileSync, existsSync } from "node:fs";
import path from "node:path";
import { packageWorkspaces } from "./release-workspace.mjs";

const root = process.cwd();
const sourceReadme = process.argv[2] ?? "README.md";
const sourceReadmePath = path.resolve(root, sourceReadme);

if (!existsSync(sourceReadmePath)) {
  console.error(`README source not found: ${sourceReadme}`);
  process.exit(1);
}

const packages = packageWorkspaces(root);
for (const pkg of packages) {
  const packageDir = path.join(root, ...pkg.dir.split("/"));
  const targetReadmePath = path.join(packageDir, "README.md");
  copyFileSync(sourceReadmePath, targetReadmePath);
  console.log(`Synced ${sourceReadme} -> ${pkg.dir}/README.md (${pkg.name})`);
}
