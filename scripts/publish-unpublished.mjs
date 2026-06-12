#!/usr/bin/env node
import { execFileSync, spawnSync } from "node:child_process";
import { join } from "node:path";
import {
  assertFixedPackageVersion,
  dependencyFields,
  packageWorkspaces,
} from "./release-workspace.mjs";

const root = process.cwd();
const args = process.argv.slice(2);
const registry = readOption("--registry") ?? process.env.NPM_CONFIG_REGISTRY ?? "https://registry.npmjs.org/";
const dryRun = args.includes("--dry-run");
const failOnExisting = args.includes("--fail-on-existing");
const distTag = readOption("--tag") ?? "latest";

function readOption(name) {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
  return args[index + 1];
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

    for (const field of dependencyFields) {
      const dependencies = pkg.packageJson[field];
      if (!dependencies) continue;

      for (const dependencyName of Object.keys(dependencies)) {
        const dependency = byName.get(dependencyName);
        if (dependency) {
          visit(dependency);
        }
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
  const result = spawnSync("npm", ["view", `${pkg.name}@${pkg.packageJson.version}`, "version", "--registry", registry], {
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
  throw new Error(`Unable to check published version for ${pkg.name}@${pkg.packageJson.version}`);
}

function publish(pkg) {
  const args = [
    "publish",
    ".",
    "--access",
    pkg.packageJson.publishConfig?.access ?? "public",
    "--tag",
    distTag,
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

if (!distTag) {
  throw new Error("A non-empty npm dist-tag is required.");
}

const packages = sortByInternalDependencies(packageWorkspaces(root));
const version = assertFixedPackageVersion(packages);
const decisions = packages.map((pkg) => ({ pkg, published: isPublished(pkg) }));
const alreadyPublished = decisions.filter(({ published }) => published);

console.log(`Publish plan: ${packages.length} packages at ${version} with dist-tag "${distTag}".`);

if (alreadyPublished.length > 0 && failOnExisting) {
  const names = alreadyPublished
    .map(({ pkg }) => `${pkg.name}@${pkg.packageJson.version}`)
    .join(", ");
  throw new Error(`Refusing to publish partial train; already published: ${names}`);
}

let publishedCount = 0;
let skippedCount = 0;

for (const { pkg, published } of decisions) {
  if (published) {
    console.log(`Skipping ${pkg.name}@${pkg.packageJson.version}; already published.`);
    skippedCount += 1;
    continue;
  }

  console.log(`Publishing ${pkg.name}@${pkg.packageJson.version} with dist-tag "${distTag}".`);
  if (dryRun) {
    console.log(`Dry run: (cd ${pkg.dir} && npm publish . --tag ${distTag})`);
    publishedCount += 1;
    continue;
  }

  publish(pkg);
  publishedCount += 1;
}

console.log(`Done. ${dryRun ? "Would publish" : "Published"} ${publishedCount}, skipped ${skippedCount}.`);
