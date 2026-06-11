#!/usr/bin/env node
import { execFileSync, spawnSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const registry = process.env.NPM_CONFIG_REGISTRY ?? "https://registry.npmjs.org/";
const dryRun = process.argv.includes("--dry-run");

function packageWorkspaces() {
  return readdirSync(join(root, "packages"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const dir = join("packages", entry.name);
      const packageJson = JSON.parse(readFileSync(join(root, dir, "package.json"), "utf8"));
      return {
        dir,
        name: packageJson.name,
        version: packageJson.version,
        dependencies: {
          ...packageJson.dependencies,
          ...packageJson.peerDependencies,
          ...packageJson.optionalDependencies,
        },
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function sortByInternalDependencies(packages) {
  const byName = new Map(packages.map((pkg) => [pkg.name, pkg]));
  const sorted = [];
  const state = new Map();

  function visit(pkg) {
    const currentState = state.get(pkg.name);
    if (currentState === "visiting") {
      throw new Error(`Internal dependency cycle detected at ${pkg.name}`);
    }
    if (currentState === "visited") return;

    state.set(pkg.name, "visiting");
    for (const dependencyName of Object.keys(pkg.dependencies ?? {})) {
      const dependency = byName.get(dependencyName);
      if (dependency) {
        visit(dependency);
      }
    }
    state.set(pkg.name, "visited");
    sorted.push(pkg);
  }

  for (const pkg of packages) {
    visit(pkg);
  }

  return sorted;
}

function isPublished(pkg) {
  const result = spawnSync("npm", ["view", `${pkg.name}@${pkg.version}`, "version", "--registry", registry], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });

  if (result.status === 0) {
    return true;
  }

  if (result.stderr.includes("E404") || result.stderr.includes("404 Not Found")) {
    return false;
  }

  process.stderr.write(result.stderr);
  throw new Error(`Unable to check published version for ${pkg.name}@${pkg.version}`);
}

function publish(pkg) {
  const args = [
    "publish",
    ".",
    "--access",
    "public",
    "--provenance",
    "--no-git-checks",
    "--registry",
    registry,
  ];

  execFileSync("npm", args, {
    cwd: join(root, pkg.dir),
    stdio: "inherit",
  });
}

let publishedCount = 0;
let skippedCount = 0;

for (const pkg of sortByInternalDependencies(packageWorkspaces())) {
  if (isPublished(pkg)) {
    console.log(`Skipping ${pkg.name}@${pkg.version}; already published.`);
    skippedCount += 1;
    continue;
  }

  console.log(`Publishing ${pkg.name}@${pkg.version}`);
  if (dryRun) {
    console.log(`Dry run: (cd ${pkg.dir} && npm publish .)`);
    publishedCount += 1;
    continue;
  }

  publish(pkg);
  publishedCount += 1;
}

console.log(`Done. Published ${publishedCount}, skipped ${skippedCount}.`);
