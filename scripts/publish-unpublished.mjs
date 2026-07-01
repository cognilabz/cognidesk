#!/usr/bin/env node
import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  assertNoWorkspaceProtocolDependencies,
  assertFixedPackageVersion,
  assertFixedStablePackageVersion,
  bumpStableVersion,
  dependencyFields,
  isAnyPackageVersionPublished,
  isPlatformPackage,
  isProviderPackage,
  materializeWorkspaceDependencies,
  nextAvailablePatchVersion,
  packageWorkspaces,
  platformPackageWorkspaces,
  readPublishedPackageState,
  updatePackageTrain,
  writePackages,
} from "./release-workspace.mjs";

const root = process.cwd();
const args = process.argv.slice(2);
const validBumps = new Set(["patch", "minor", "major"]);
const registry = readOption("--registry") ?? process.env.NPM_CONFIG_REGISTRY ?? "https://registry.npmjs.org/";
const dryRun = args.includes("--dry-run");
const failOnExisting = args.includes("--fail-on-existing");
const distTag = readOption("--tag") ?? "latest";
const packageFilter = readOption("--package");
const explicitBump = readOption("--bump");
const defaultBump = readOption("--default-bump") ?? "patch";
const autoPatchExisting = args.includes("--auto-patch-existing");
const prepareRelease = args.includes("--prepare-release") || autoPatchExisting || Boolean(explicitBump);
const skipInstall = args.includes("--skip-install");
const provenance = args.includes("--provenance")
  || (!args.includes("--no-provenance") && process.env.GITHUB_ACTIONS === "true");

function readOption(name) {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
  return args[index + 1];
}

function runPnpmInstall() {
  const result = spawnSync("pnpm", ["install", "--lockfile-only"], {
    cwd: root,
    stdio: "inherit",
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function prepareStablePlatformRelease() {
  if (!validBumps.has(defaultBump)) {
    throw new Error(`Invalid default bump "${defaultBump}". Expected patch, minor, or major.`);
  }

  const packages = platformPackageWorkspaces(root);
  const currentVersion = assertFixedStablePackageVersion(packages, "platform SDK packages");
  let nextVersion;
  let bump;

  if (autoPatchExisting) {
    nextVersion = nextAvailablePatchVersion(
      currentVersion,
      (version) => isAnyPackageVersionPublished(packages, version, { root, registry }),
    );
    bump = nextVersion === currentVersion ? "none" : "auto-patch-existing";
  } else {
    bump = (explicitBump ?? defaultBump).toLowerCase();

    if (!validBumps.has(bump)) {
      throw new Error(`Invalid bump "${bump}". Expected patch, minor, or major.`);
    }

    nextVersion = bumpStableVersion(currentVersion, bump);
  }

  console.log("Prepared SDK release before publish:");
  console.log(`  ${currentVersion} -> ${nextVersion} (${bump})`);
  console.log(`  ${dryRun ? "Would update" : "Updated"} ${packages.length} platform SDK packages.`);

  if (dryRun) {
    console.log("  Dry run: package manifests were not changed.");
    return;
  }

  updatePackageTrain(packages, nextVersion);
  writePackages(packages);
  if (!skipInstall) runPnpmInstall();
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

function npmPublishArgs(pkg) {
  const npmArgs = [
    "publish",
    ".",
    "--access",
    pkg.packageJson.publishConfig?.access ?? "public",
    "--tag",
    distTag,
  ];
  if (provenance) npmArgs.push("--provenance");
  npmArgs.push("--no-git-checks", "--registry", registry);
  return npmArgs;
}

function publish(pkg) {
  const npmArgs = npmPublishArgs(pkg);
  const originalPackageJson = readFileSync(pkg.packageJsonPath, "utf8");
  const publishPackageJson = publishManifest(pkg);

  try {
    writeFileSync(pkg.packageJsonPath, `${JSON.stringify(publishPackageJson, null, 2)}\n`);
    execFileSync("npm", npmArgs, {
      cwd: join(root, pkg.dir),
      stdio: "inherit",
    });
  } finally {
    writeFileSync(pkg.packageJsonPath, originalPackageJson);
  }
}

function publishManifest(pkg) {
  const packageJson = materializeWorkspaceDependencies(pkg.packageJson, packageVersions);
  assertNoWorkspaceProtocolDependencies(packageJson, `${pkg.name}@${pkg.packageJson.version} publish manifest`);
  return packageJson;
}

if (!distTag) {
  throw new Error("A non-empty npm dist-tag is required.");
}

if (prepareRelease) prepareStablePlatformRelease();

const allPackages = sortByInternalDependencies(packageWorkspaces(root));
const packages = packageFilter
  ? allPackages.filter((pkg) => pkg.name === packageFilter || pkg.dir === packageFilter)
  : allPackages;

if (packageFilter && packages.length === 0) {
  throw new Error(`No publishable package matched --package ${packageFilter}.`);
}

const packageVersions = new Map(allPackages.map((pkg) => [pkg.name, pkg.packageJson.version]));
const platformPackages = allPackages.filter(isPlatformPackage);
const providerPackages = allPackages.filter(isProviderPackage);
const selectedPlatformPackages = packages.filter(isPlatformPackage);
const selectedProviderPackages = packages.filter(isProviderPackage);
const platformVersion = assertFixedPackageVersion(platformPackages, "platform SDK packages");
const decisions = packages.map((pkg) => ({
  pkg,
  ...readPublishedPackageState(pkg, { root, registry }),
}));
for (const pkg of packages) {
  publishManifest(pkg);
}
const alreadyPublishedPlatform = decisions
  .filter(({ pkg, versionPublished }) => isPlatformPackage(pkg) && versionPublished);

console.log(`Publish plan: ${packages.length} package${packages.length === 1 ? "" : "s"} with dist-tag "${distTag}".`);
if (packageFilter) console.log(`  package filter: ${packageFilter}`);
console.log(`  selected platform SDK packages: ${selectedPlatformPackages.length} of ${platformPackages.length} at ${platformVersion}`);
console.log(`  selected independent provider packages: ${selectedProviderPackages.length} of ${providerPackages.length}`);
console.log(`  provenance: ${provenance ? "enabled" : "disabled"}`);

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
    console.log(
      `Dry run: (cd ${pkg.dir} && npm ${npmPublishArgs(pkg).join(" ")})`,
    );
    publishedCount += 1;
    continue;
  }

  publish(pkg);
  publishedCount += 1;
}

console.log(`Done. ${dryRun ? "Would publish" : "Published"} ${publishedCount}, skipped ${skippedCount}.`);
