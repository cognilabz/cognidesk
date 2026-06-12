import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

export const dependencyFields = [
  "dependencies",
  "peerDependencies",
  "optionalDependencies",
  "devDependencies",
];

export function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

export function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

export function packageWorkspaces(root = process.cwd()) {
  return readdirSync(join(root, "packages"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const dir = join("packages", entry.name);
      const packageJsonPath = join(root, dir, "package.json");
      if (!existsSync(packageJsonPath)) return undefined;

      const packageJson = readJson(packageJsonPath);

      return {
        dir,
        packageJsonPath,
        packageJson,
        name: packageJson.name,
        version: packageJson.version,
      };
    })
    .filter(Boolean)
    .filter((pkg) => isPublishablePackage(pkg.packageJson))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function isPublishablePackage(packageJson) {
  return packageJson.private !== true
    && typeof packageJson.name === "string"
    && typeof packageJson.version === "string"
    && Boolean(packageJson.publishConfig);
}

export function assertPublishablePackages(packages) {
  if (packages.length === 0) {
    throw new Error("No publishable packages found under packages/*.");
  }
}

export function assertStableVersion(version) {
  if (!/^\d+\.\d+\.\d+$/.test(version)) {
    throw new Error(`Expected a stable major.minor.patch version, got "${version}".`);
  }
}

export function assertFixedPackageVersion(packages) {
  assertPublishablePackages(packages);

  const versions = new Set(packages.map((pkg) => pkg.packageJson.version));
  if (versions.size !== 1) {
    throw new Error(`Publishable packages must share one version, got: ${[...versions].sort().join(", ")}`);
  }

  return packages[0].packageJson.version;
}

export function assertFixedStablePackageVersion(packages) {
  const version = assertFixedPackageVersion(packages);
  assertStableVersion(version);
  return version;
}

export function bumpStableVersion(version, bump) {
  assertStableVersion(version);

  const [major, minor, patch] = version.split(".").map(Number);
  if (bump === "major") return `${major + 1}.0.0`;
  if (bump === "minor") return `${major}.${minor + 1}.0`;
  if (bump === "patch") return `${major}.${minor}.${patch + 1}`;

  throw new Error(`Invalid bump "${bump}". Expected patch, minor, or major.`);
}

export function nextPatchVersion(version) {
  return bumpStableVersion(version, "patch");
}

export function updatePackageTrain(packages, version) {
  const packageNames = new Set(packages.map((pkg) => pkg.name));

  for (const pkg of packages) {
    pkg.packageJson.version = version;

    for (const field of dependencyFields) {
      const dependencies = pkg.packageJson[field];
      if (!dependencies) continue;

      for (const dependencyName of Object.keys(dependencies)) {
        if (packageNames.has(dependencyName)) {
          dependencies[dependencyName] = version;
        }
      }
    }
  }
}

export function writePackages(packages) {
  for (const pkg of packages) {
    writeJson(pkg.packageJsonPath, pkg.packageJson);
  }
}
