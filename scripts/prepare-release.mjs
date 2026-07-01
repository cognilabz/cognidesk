#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import {
  assertFixedStablePackageVersion,
  bumpStableVersion,
  isAnyPackageVersionPublished,
  nextAvailablePatchVersion,
  platformPackageWorkspaces,
  updatePackageTrain,
  writePackages,
} from "./release-workspace.mjs";

const root = process.cwd();
const args = process.argv.slice(2);
const validBumps = new Set(["patch", "minor", "major"]);
const yes = args.includes("--yes");
const autoPatchExisting = args.includes("--auto-patch-existing");
const skipInstall = args.includes("--skip-install");
const explicitBump = readOption("--bump");
const defaultBump = readOption("--default-bump") ?? "patch";
const registry = readOption("--registry") ?? process.env.NPM_CONFIG_REGISTRY ?? "https://registry.npmjs.org/";

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
  bump = await readBump(currentVersion);

  if (!validBumps.has(bump)) {
    throw new Error(`Invalid bump "${bump}". Expected patch, minor, or major.`);
  }

  nextVersion = bumpStableVersion(currentVersion, bump);
}

const shouldWritePackages = nextVersion !== currentVersion || autoPatchExisting;

if (shouldWritePackages) {
  updatePackageTrain(packages, nextVersion);
  writePackages(packages);
  if (!skipInstall) runPnpmInstall();
}

console.log("\nPrepared SDK release:");
console.log(`  ${currentVersion} -> ${nextVersion} (${bump})`);
console.log(`  ${shouldWritePackages ? "Updated" : "Checked"} ${packages.length} platform SDK packages.`);

console.log("\nNext steps:");
console.log("  pnpm check");
console.log("  git add packages pnpm-lock.yaml");
console.log(`  git commit -m "Release SDK ${nextVersion}"`);
console.log(`  git tag v${nextVersion}`);
console.log(`  git push origin main v${nextVersion}`);
