#!/usr/bin/env node
import { execFileSync, spawnSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const root = process.cwd();
const args = process.argv.slice(2);
const sinceArg = readOption("--since");
const defaultBump = readOption("--default-bump") ?? "patch";
const yes = args.includes("--yes");
const all = args.includes("--all");

const validBumps = new Set(["patch", "minor", "major", "skip"]);

function readOption(name) {
  const index = args.indexOf(name);
  if (index === -1) return undefined;
  return args[index + 1];
}

function git(args, options = {}) {
  return execFileSync("git", args, {
    cwd: root,
    encoding: "utf8",
    stdio: options.stdio ?? ["ignore", "pipe", "pipe"],
  }).trim();
}

function tryGit(args) {
  try {
    return git(args);
  } catch {
    return "";
  }
}

function latestReleaseTag() {
  return tryGit(["describe", "--tags", "--match", "v*", "--abbrev=0"]);
}

function changedFilesSince(base) {
  const files = new Set();
  const addLines = (text) => {
    for (const line of text.split("\n")) {
      if (line) files.add(line);
    }
  };

  if (base) {
    addLines(tryGit(["diff", "--name-only", `${base}..HEAD`]));
  } else {
    addLines(tryGit(["ls-files"]));
  }

  addLines(tryGit(["diff", "--name-only"]));
  addLines(tryGit(["diff", "--name-only", "--cached"]));
  addLines(tryGit(["ls-files", "--others", "--exclude-standard"]));

  return [...files].sort();
}

function packageWorkspaces() {
  return readdirSync(join(root, "packages"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const dir = join("packages", entry.name);
      const packageJsonPath = join(dir, "package.json");
      const packageJson = JSON.parse(readFileSync(join(root, packageJsonPath), "utf8"));
      return {
        dir,
        packageJsonPath,
        packageJson,
        name: packageJson.name,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function bumpVersion(version, bump) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version);
  if (!match) {
    throw new Error(`Cannot bump non-standard semver version: ${version}`);
  }

  let [, major, minor, patch] = match.map(Number);
  if (bump === "major") {
    major += 1;
    minor = 0;
    patch = 0;
  } else if (bump === "minor") {
    minor += 1;
    patch = 0;
  } else if (bump === "patch") {
    patch += 1;
  }

  return `${major}.${minor}.${patch}`;
}

function packageForFile(file, packages) {
  return packages.find((pkg) => file === pkg.dir || file.startsWith(`${pkg.dir}/`));
}

function writePackageJson(pkg) {
  writeFileSync(join(root, pkg.packageJsonPath), `${JSON.stringify(pkg.packageJson, null, 2)}\n`);
}

function updateInternalDependencyRanges(selectedPackages, newVersions) {
  for (const pkg of selectedPackages) {
    for (const field of ["dependencies", "peerDependencies", "optionalDependencies"]) {
      const deps = pkg.packageJson[field];
      if (!deps) continue;

      for (const [name, version] of newVersions) {
        if (deps[name]) {
          deps[name] = version;
        }
      }
    }
  }
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

const base = sinceArg ?? latestReleaseTag();
const packages = packageWorkspaces();
const changedFiles = changedFilesSince(base);
const changedPackages = all
  ? packages
  : [
      ...new Set(changedFiles.map((file) => packageForFile(file, packages)).filter(Boolean)),
    ].sort((a, b) => a.name.localeCompare(b.name));

console.log(`Release baseline: ${base || "(no v* tag found, using all tracked files)"}`);
console.log(`${all ? "Selected" : "Changed"} publishable packages: ${changedPackages.length}`);

if (changedPackages.length === 0) {
  console.log("No changes found under packages/*.");
  process.exit(0);
}

const rl = createInterface({ input, output });
const selected = [];

try {
  if (all) {
    const prompt = `Bump all ${changedPackages.length} packages [patch/minor/major/skip] (${defaultBump}): `;
    const answer = yes ? defaultBump : (await rl.question(prompt)).trim() || defaultBump;
    const bump = answer.toLowerCase();

    if (!validBumps.has(bump)) {
      throw new Error(`Invalid bump "${answer}"`);
    }

    if (bump !== "skip") {
      for (const pkg of changedPackages) {
        const nextVersion = bumpVersion(pkg.packageJson.version, bump);
        selected.push({ pkg, bump, nextVersion });
      }
    }
  } else {
    for (const pkg of changedPackages) {
      const prompt = `${pkg.name} ${pkg.packageJson.version} bump [patch/minor/major/skip] (${defaultBump}): `;
      const answer = yes ? defaultBump : (await rl.question(prompt)).trim() || defaultBump;
      const bump = answer.toLowerCase();

      if (!validBumps.has(bump)) {
        throw new Error(`Invalid bump "${answer}" for ${pkg.name}`);
      }

      if (bump === "skip") continue;

      const nextVersion = bumpVersion(pkg.packageJson.version, bump);
      selected.push({ pkg, bump, nextVersion });
    }
  }
} finally {
  rl.close();
}

if (selected.length === 0) {
  console.log("No package versions changed.");
  process.exit(0);
}

const newVersions = new Map(selected.map(({ pkg, nextVersion }) => [pkg.name, nextVersion]));

for (const { pkg, nextVersion } of selected) {
  pkg.packageJson.version = nextVersion;
}

updateInternalDependencyRanges(all ? packages : selected.map(({ pkg }) => pkg), newVersions);

for (const pkg of all ? packages : selected.map(({ pkg }) => pkg)) {
  writePackageJson(pkg);
}

runPnpmInstall();

console.log("\nPrepared release:");
for (const { pkg, bump, nextVersion } of selected) {
  console.log(`  ${pkg.name}: ${bump} -> ${nextVersion}`);
}

const highestVersion = selected
  .map(({ nextVersion }) => nextVersion)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .at(-1);

console.log("\nNext steps:");
console.log("  pnpm check");
console.log("  git add packages pnpm-lock.yaml");
console.log(`  git commit -m "Release SDK ${highestVersion}"`);
console.log(`  git tag v${highestVersion}`);
console.log(`  git push origin main v${highestVersion}`);
