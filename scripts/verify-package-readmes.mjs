#!/usr/bin/env node
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { packageWorkspaces } from "./release-workspace.mjs";

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

export function assertPackageReadmes(packages, root = repoRoot) {
  const failures = [];

  for (const pkg of packages) {
    const relativeDir = pkg.relativeDir ?? pkg.dir;
    const packageDir = path.isAbsolute(pkg.dir)
      ? pkg.dir
      : path.join(root, ...pkg.dir.split("/"));
    const readmePath = path.join(packageDir, "README.md");

    if (!existsSync(readmePath)) {
      failures.push(`${relativeDir}: missing README.md`);
      continue;
    }

    const readme = readFileSync(readmePath, "utf8").trim();
    if (readme.length < 200) {
      failures.push(`${relativeDir}: README.md is too short for npm package display`);
      continue;
    }

    if (!readme.startsWith(`# ${pkg.name}`)) {
      failures.push(`${relativeDir}: README.md must start with "# ${pkg.name}"`);
    }

    if (readme.includes("ERROR: No README data found!")) {
      failures.push(`${relativeDir}: README.md contains npm missing-readme placeholder text`);
    }
  }

  if (failures.length > 0) {
    console.error("\nPackage README check failed:");
    for (const failure of failures) {
      console.error(`  ${failure}`);
    }
    process.exit(1);
  }

  console.log(`Package README check: ${packages.length} package README files found.`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  assertPackageReadmes(packageWorkspaces(repoRoot), repoRoot);
}
