#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import {
  assertFixedStablePackageVersion,
  nextPatchVersion,
  packageWorkspaces,
  updatePackageTrain,
  writePackages,
} from "./release-workspace.mjs";

const root = process.cwd();
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const prereleaseId = readOption("--preid") ?? "dev";
const registry = readOption("--registry") ?? process.env.NPM_CONFIG_REGISTRY ?? "https://registry.npmjs.org/";

function readOption(name) {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
  return args[index + 1];
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function npmVersions(packageName) {
  const result = spawnSync("npm", ["view", packageName, "versions", "--json", "--registry", registry], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });

  if (result.status !== 0) {
    if (result.stderr.includes("E404") || result.stderr.includes("404 Not Found")) {
      return [];
    }

    process.stderr.write(result.stderr);
    throw new Error(`Unable to read published versions for ${packageName}.`);
  }

  const text = result.stdout.trim();
  if (!text) return [];

  const parsed = JSON.parse(text);
  return Array.isArray(parsed) ? parsed : [parsed];
}

function nextPrereleaseVersion(packages, baseVersion) {
  const pattern = new RegExp(`^${escapeRegExp(baseVersion)}-${escapeRegExp(prereleaseId)}\\.(\\d+)$`);
  let highest = -1;

  for (const pkg of packages) {
    for (const version of npmVersions(pkg.name)) {
      const match = pattern.exec(version);
      if (!match) continue;
      highest = Math.max(highest, Number(match[1]));
    }
  }

  return {
    version: `${baseVersion}-${prereleaseId}.${highest + 1}`,
    previousNumber: highest,
  };
}

const packages = packageWorkspaces(root);
const stableVersion = assertFixedStablePackageVersion(packages);
const nextStableVersion = nextPatchVersion(stableVersion);
const prerelease = nextPrereleaseVersion(packages, nextStableVersion);

console.log("Prepared SDK dev release plan:");
console.log(`  stable source version: ${stableVersion}`);
console.log(`  dev release line: ${nextStableVersion}-${prereleaseId}.N`);
console.log(`  previous published dev number: ${prerelease.previousNumber < 0 ? "(none)" : prerelease.previousNumber}`);
console.log(`  next dev version: ${prerelease.version}`);
console.log(`  publishable packages: ${packages.length}`);

if (dryRun) {
  console.log("\nDry run: package manifests were not changed.");
  process.exit(0);
}

updatePackageTrain(packages, prerelease.version);
writePackages(packages);

console.log("\nUpdated package manifests for dev publish.");
