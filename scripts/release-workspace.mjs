import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

export const dependencyFields = [
  "dependencies",
  "peerDependencies",
  "optionalDependencies",
  "devDependencies",
];

export const platformWorkspacePatterns = ["packages/*"];
export const providerWorkspacePatterns = ["integrations/*/*"];
export const appWorkspacePatterns = ["apps/*"];
export const publishableWorkspacePatterns = [
  ...platformWorkspacePatterns,
  ...providerWorkspacePatterns,
];
export const workspacePatterns = [
  ...publishableWorkspacePatterns,
  ...appWorkspacePatterns,
];

export function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

export function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`);
}

export function allWorkspacePackages(root = process.cwd()) {
  return discoverWorkspacePackages(root, workspacePatterns);
}

export function packageWorkspaces(root = process.cwd()) {
  return discoverWorkspacePackages(root, publishableWorkspacePatterns)
    .filter((pkg) => isPublishablePackage(pkg.packageJson))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function platformPackageWorkspaces(root = process.cwd()) {
  return discoverWorkspacePackages(root, platformWorkspacePatterns)
    .filter((pkg) => isPublishablePackage(pkg.packageJson))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function providerPackageWorkspaces(root = process.cwd()) {
  return discoverWorkspacePackages(root, providerWorkspacePatterns)
    .filter((pkg) => isPublishablePackage(pkg.packageJson))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function fixedVersionTrainPackages(root = process.cwd()) {
  return platformPackageWorkspaces(root);
}

export function independentProviderPackageWorkspaces(root = process.cwd()) {
  return providerPackageWorkspaces(root);
}

export function discoverWorkspacePackages(root = process.cwd(), patterns = workspacePatterns) {
  const dirs = new Set(patterns.flatMap((pattern) => expandWorkspacePattern(root, pattern)));
  return [...dirs]
    .sort()
    .map((dir) => {
      const packageJsonPath = path.join(root, ...dir.split("/"), "package.json");
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
    .sort((a, b) => (a.name ?? a.dir).localeCompare(b.name ?? b.dir));
}

function expandWorkspacePattern(root, pattern) {
  const segments = pattern.split("/");
  const dirs = [];

  function visit(index, currentSegments) {
    if (index === segments.length) {
      dirs.push(currentSegments.join("/"));
      return;
    }

    const segment = segments[index];
    const currentPath = path.join(root, ...currentSegments);

    if (segment === "*") {
      if (!existsSync(currentPath)) return;

      for (const entry of readdirSync(currentPath, { withFileTypes: true })) {
        if (entry.isDirectory()) {
          visit(index + 1, [...currentSegments, entry.name]);
        }
      }
      return;
    }

    const nextSegments = [...currentSegments, segment];
    if (!existsSync(path.join(root, ...nextSegments))) return;
    visit(index + 1, nextSegments);
  }

  visit(0, []);
  return dirs;
}

export function isPublishablePackage(packageJson) {
  return packageJson.private !== true
    && typeof packageJson.name === "string"
    && typeof packageJson.version === "string"
    && Boolean(packageJson.publishConfig);
}

export function isPlatformPackage(pkg) {
  return pkg.dir.startsWith("packages/")
    && pkg.dir.split("/").length === 2;
}

export function isProviderPackage(pkg) {
  return pkg.dir.startsWith("integrations/")
    && pkg.dir.split("/").length === 3;
}

export function isIndependentProviderPackage(packageJson) {
  return packageJson.cognidesk?.providerPackage === true
    || packageJson.cognidesk?.kind === "provider-package"
    || packageJson.cognidesk?.release === "independent-provider";
}

export function assertPublishablePackages(packages, description = "publishable packages") {
  if (packages.length === 0) {
    throw new Error(`No ${description} found.`);
  }
}

export function assertStableVersion(version) {
  if (!/^\d+\.\d+\.\d+$/.test(version)) {
    throw new Error(`Expected a stable major.minor.patch version, got "${version}".`);
  }
}

export function assertFixedPackageVersion(packages, description = "publishable packages") {
  assertPublishablePackages(packages, description);

  const versions = new Set(packages.map((pkg) => pkg.packageJson.version));
  if (versions.size !== 1) {
    throw new Error(`${description} must share one version, got: ${[...versions].sort().join(", ")}`);
  }

  return packages[0].packageJson.version;
}

export function assertFixedStablePackageVersion(packages, description = "publishable packages") {
  const version = assertFixedPackageVersion(packages, description);
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

export function updatePackageTrain(packages, version, dependencyPackages = packages) {
  const packageNames = new Set(dependencyPackages.map((pkg) => pkg.name));

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
