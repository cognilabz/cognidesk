#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import {
  assertFixedStablePackageVersion,
  bumpStableVersion,
  packageWorkspaces,
  updatePackageTrain,
  writePackages,
} from "./release-workspace.mjs";

const root = process.cwd();
const args = process.argv.slice(2);
const validBumps = new Set(["patch", "minor", "major"]);
const yes = args.includes("--yes");
const explicitBump = readOption("--bump");
const defaultBump = readOption("--default-bump") ?? "patch";

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

async function readBump(currentVersion) {
  const initialBump = explicitBump ?? (yes ? defaultBump : undefined);
  if (initialBump) return initialBump.toLowerCase();

  const rl = createInterface({ input, output });
  try {
    const answer = await rl.question(
      `SDK ${currentVersion} bump [patch/minor/major] (${defaultBump}): `,
    );
    return (answer.trim() || defaultBump).toLowerCase();
  } finally {
    rl.close();
  }
}

if (!validBumps.has(defaultBump)) {
  throw new Error(`Invalid default bump "${defaultBump}". Expected patch, minor, or major.`);
}

const packages = packageWorkspaces(root);
const currentVersion = assertFixedStablePackageVersion(packages);
const bump = await readBump(currentVersion);

if (!validBumps.has(bump)) {
  throw new Error(`Invalid bump "${bump}". Expected patch, minor, or major.`);
}

const nextVersion = bumpStableVersion(currentVersion, bump);

updatePackageTrain(packages, nextVersion);
writePackages(packages);
runPnpmInstall();

console.log("\nPrepared SDK release:");
console.log(`  ${currentVersion} -> ${nextVersion} (${bump})`);
console.log(`  Updated ${packages.length} publishable packages.`);

console.log("\nNext steps:");
console.log("  pnpm check");
console.log("  git add packages pnpm-lock.yaml");
console.log(`  git commit -m "Release SDK ${nextVersion}"`);
console.log(`  git tag v${nextVersion}`);
console.log(`  git push origin main v${nextVersion}`);
