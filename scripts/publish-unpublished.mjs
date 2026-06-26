#!/usr/bin/env node
import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  assertFixedPackageVersion,
  dependencyFields,
  isPlatformPackage,
  isProviderPackage,
  materializeWorkspaceDependencies,
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

function npmView(args) {
  return spawnSync("npm", ["view", ...args, "--registry", registry], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function isNotFound(result) {
  return result.stderr.includes("E404") || result.stderr.includes("404 Not Found");
}

function readPublishedState(pkg) {
  const versionResult = npmView([`${pkg.name}@${pkg.packageJson.version}`, "version"]);

  if (versionResult.status === 0) {
    return { packageExists: true, versionPublished: true };
  }

  if (!isNotFound(versionResult)) {
    process.stderr.write(versionResult.stderr);
    throw new Error(`Unable to check published version for ${pkg.name}@${pkg.packageJson.version}`);
  }

  const packageResult = npmView([pkg.name, "version"]);

  if (packageResult.status === 0) {
    return { packageExists: true, versionPublished: false };
  }

  if (isNotFound(packageResult)) {
    return { packageExists: false, versionPublished: false };
  }

  process.stderr.write(packageResult.stderr);
  throw new Error(`Unable to check package existence for ${pkg.name}`);
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
  const originalPackageJson = readFileSync(pkg.packageJsonPath, "utf8");
  const publishPackageJson = materializeWorkspaceDependencies(pkg.packageJson, packageVersions);

  try {
    writeFileSync(pkg.packageJsonPath, `${JSON.stringify(publishPackageJson, null, 2)}\n`);
    execFileSync("npm", args, {
      cwd: join(root, pkg.dir),
      stdio: "inherit",
    });
  } finally {
    writeFileSync(pkg.packageJsonPath, originalPackageJson);
  }
}

if (!distTag) {
  throw new Error("A non-empty npm dist-tag is required.");
}

const packages = sortByInternalDependencies(packageWorkspaces(root));
const packageVersions = new Map(packages.map((pkg) => [pkg.name, pkg.packageJson.version]));
const platformPackages = packages.filter(isPlatformPackage);
const providerPackages = packages.filter(isProviderPackage);
const platformVersion = assertFixedPackageVersion(platformPackages, "platform SDK packages");
const decisions = packages.map((pkg) => ({
  pkg,
  ...readPublishedState(pkg),
}));
const alreadyPublishedPlatform = decisions
  .filter(({ pkg, versionPublished }) => isPlatformPackage(pkg) && versionPublished);

console.log(`Publish plan: ${packages.length} packages with dist-tag "${distTag}".`);
console.log(`  platform SDK packages: ${platformPackages.length} at ${platformVersion}`);
console.log(`  independent provider packages: ${providerPackages.length}`);

if (alreadyPublishedPlatform.length > 0 && failOnExisting) {
  const names = alreadyPublishedPlatform
    .map(({ pkg }) => `${pkg.name}@${pkg.packageJson.version}`)
    .join(", ");
  throw new Error(`Refusing to publish partial platform train; already published: ${names}`);
}

let publishedCount = 0;
let skippedCount = 0;

for (const { pkg, packageExists, versionPublished } of decisions) {
  if (versionPublished) {
    console.log(`Skipping ${pkg.name}@${pkg.packageJson.version}; already published.`);
    skippedCount += 1;
    continue;
  }

  const firstTimePrefix = packageExists ? "" : "first-time ";
  console.log(`Publishing ${firstTimePrefix}${pkg.name}@${pkg.packageJson.version} with dist-tag "${distTag}".`);
  if (dryRun) {
    const access = pkg.packageJson.publishConfig?.access ?? "public";
    console.log(
      `Dry run: (cd ${pkg.dir} && npm publish . --access ${access} --tag ${distTag} --provenance --no-git-checks)`,
    );
    publishedCount += 1;
    continue;
  }

  publish(pkg);
  publishedCount += 1;
}

console.log(`Done. ${dryRun ? "Would publish" : "Published"} ${publishedCount}, skipped ${skippedCount}.`);
