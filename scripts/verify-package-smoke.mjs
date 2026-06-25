#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import {
  mkdir,
  mkdtemp,
  readdir,
  rm,
  stat,
  symlink,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  isProviderPackage,
  packageWorkspaces,
} from "./release-workspace.mjs";

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const args = process.argv.slice(2);
const defaultPlatformSmokePackageNames = [
  "@cognidesk/core",
  "@cognidesk/http",
  "@cognidesk/react",
  "@cognidesk/integration-catalog",
];
const oneMiB = 1024 * 1024;
const defaultPublishedDistBudgetBytes = 100 * oneMiB;
const defaultDeclarationChunkBudgetBytes = 7 * oneMiB;
const largestDeclarationCount = 10;
const failSizeBudget = args.includes("--fail-size-budget");
const smokeAllPackages = args.includes("--all");

const discoveredWorkspaces = packageWorkspaces(repoRoot);
const providerPackageNames = new Set(discoveredWorkspaces.filter(isProviderPackage).map((pkg) => pkg.name));
const workspaces = discoveredWorkspaces.map((pkg) => ({
  ...pkg,
  dir: path.join(repoRoot, ...pkg.dir.split("/")),
  relativeDir: pkg.dir,
}));
const workspaceByName = new Map(workspaces.map((pkg) => [pkg.name, pkg]));
const smokePackages = selectSmokePackages();

const exportEntries = smokePackages.flatMap((pkg) => publicExportEntries(pkg));
const missingTargets = await missingExportTargets(exportEntries);
const importableExportEntries = exportEntries.filter(isJavaScriptRuntimeExport);
const assetExportEntries = exportEntries.filter((entry) => !isJavaScriptRuntimeExport(entry));

console.log("Package public export smoke:");
for (const pkg of smokePackages) {
  const count = exportEntries.filter((entry) => entry.packageName === pkg.name).length;
  console.log(`  ${pkg.name}: ${count} public export${count === 1 ? "" : "s"}`);
}

await reportPackageDistSizes(workspaces);

if (missingTargets.length > 0) {
  console.error("\nMissing built export targets:");
  for (const target of missingTargets) {
    console.error(`  ${target.specifier} -> ${target.relativeTarget}`);
  }
  console.error("\nRun pnpm build before this smoke check.");
  process.exit(1);
}

if (assetExportEntries.length > 0) {
  console.log(
    `\nSkipping ${assetExportEntries.length} non-JavaScript asset export`
      + `${assetExportEntries.length === 1 ? "" : "s"} during Node import smoke:`,
  );
  for (const entry of assetExportEntries) {
    console.log(`  ${entry.specifier}`);
  }
}

await runImportSmoke(importableExportEntries.map((entry) => entry.specifier));

function selectSmokePackages() {
  const requestedPackageNames = readRepeatedOption("--package");
  if (requestedPackageNames.length > 0) {
    return requestedPackageNames.map((name) => {
      const pkg = workspaceByName.get(name);
      if (!pkg) {
        throw new Error(`Unable to find workspace package ${name}.`);
      }
      return pkg;
    });
  }

  if (smokeAllPackages) {
    return workspaces;
  }

  const defaultNames = new Set([
    ...defaultPlatformSmokePackageNames,
  ]);
  const packages = workspaces.filter((pkg) => {
    return defaultNames.has(pkg.name) || providerPackageNames.has(pkg.name);
  });

  if (packages.length === 0) {
    throw new Error("No packages selected for smoke import verification.");
  }

  return packages;
}

function readRepeatedOption(name) {
  const values = [];
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] !== name) continue;
    const value = args[index + 1];
    if (!value || value.startsWith("--")) {
      throw new Error(`Expected a package name after ${name}.`);
    }
    values.push(value);
    index += 1;
  }
  return values;
}

function publicExportEntries(pkg) {
  const exportsField = pkg.packageJson.exports;
  const entries = [];

  if (exportsField === undefined) {
    entries.push({
      packageDir: pkg.dir,
      packageName: pkg.name,
      specifier: pkg.name,
      subpath: ".",
      targets: [pkg.packageJson.main, pkg.packageJson.types].filter(Boolean),
    });
    return entries;
  }

  const exportMap = isSubpathExportMap(exportsField)
    ? exportsField
    : { ".": exportsField };

  for (const [subpath, value] of Object.entries(exportMap)) {
    if (!isPublicSubpath(subpath)) continue;
    if (subpath === "./package.json") continue;
    if (subpath.includes("*")) continue;

    entries.push({
      packageDir: pkg.dir,
      packageName: pkg.name,
      specifier: specifierForSubpath(pkg.name, subpath),
      subpath,
      targets: collectExportTargets(value),
    });
  }

  return entries;
}

function isSubpathExportMap(value) {
  return typeof value === "object"
    && value !== null
    && !Array.isArray(value)
    && Object.keys(value).some(isPublicSubpath);
}

function isPublicSubpath(value) {
  return value === "." || value.startsWith("./");
}

function specifierForSubpath(packageName, subpath) {
  if (subpath === ".") return packageName;
  return `${packageName}/${subpath.slice(2)}`;
}

function collectExportTargets(value) {
  if (typeof value === "string") {
    return value.startsWith(".") ? [value] : [];
  }

  if (Array.isArray(value)) {
    return value.flatMap(collectExportTargets);
  }

  if (typeof value === "object" && value !== null) {
    return Object.values(value).flatMap(collectExportTargets);
  }

  return [];
}

function isJavaScriptRuntimeExport(entry) {
  return entry.targets.some((target) => {
    const extension = path.extname(target);
    return extension === ".js" || extension === ".mjs" || extension === ".cjs";
  });
}

async function missingExportTargets(entries) {
  const missing = [];

  for (const entry of entries) {
    for (const target of entry.targets) {
      const absoluteTarget = path.resolve(entry.packageDir, target);
      if (!existsSync(absoluteTarget)) {
        missing.push({
          specifier: entry.specifier,
          relativeTarget: path.relative(repoRoot, absoluteTarget),
        });
      }
    }
  }

  return missing;
}

async function reportPackageDistSizes(packages) {
  console.log("\nPackage dist size report:");

  const warnings = [];
  for (const pkg of packages) {
    warnings.push(...await reportPackageDistSize(pkg));
  }

  if (warnings.length > 0 && failSizeBudget) {
    throw new Error("Package dist size budget exceeded.");
  }
}

async function reportPackageDistSize(pkg) {
  const files = await walk(path.join(pkg.dir, "dist"));
  const budget = sizeBudgetForPackage(pkg);
  const warnings = [];

  console.log(`  ${pkg.name}:`);
  if (files.length === 0) {
    console.log("    no dist files found");
    return warnings;
  }

  const fileSizes = await Promise.all(files.map(async (file) => ({
    file,
    bytes: (await stat(file)).size,
  })));
  const totalBytes = fileSizes.reduce((sum, file) => sum + file.bytes, 0);
  const declarations = fileSizes
    .filter((file) => file.file.endsWith(".d.ts"))
    .sort((a, b) => b.bytes - a.bytes);
  const declarationBytes = declarations.reduce((sum, file) => sum + file.bytes, 0);
  const oversizedDeclarations = declarations
    .filter((file) => file.bytes > budget.declarationChunkBytes)
    .slice(0, largestDeclarationCount);

  console.log(
    `    total: ${formatBytes(totalBytes)} across ${fileSizes.length} files `
      + `(budget: ${formatBytes(budget.distBytes)})`,
  );
  console.log(
    `    declarations: ${formatBytes(declarationBytes)} across ${declarations.length} files `
      + `(chunk budget: ${formatBytes(budget.declarationChunkBytes)})`,
  );
  console.log("    largest declarations:");
  for (const file of declarations.slice(0, largestDeclarationCount)) {
    console.log(`      ${formatBytes(file.bytes)} ${path.relative(repoRoot, file.file)}`);
  }

  if (totalBytes > budget.distBytes) {
    warnings.push(
      `${pkg.name} dist is ${formatBytes(totalBytes)}, above ${formatBytes(budget.distBytes)}`,
    );
  }
  for (const file of oversizedDeclarations) {
    warnings.push(
      `${path.relative(repoRoot, file.file)} is ${formatBytes(file.bytes)}, `
        + `above ${formatBytes(budget.declarationChunkBytes)}`,
    );
  }

  if (warnings.length > 0) {
    console.log("    size budget warnings:");
    for (const warning of warnings) {
      console.log(`      ${warning}`);
    }
  }

  return warnings;
}

function sizeBudgetForPackage(pkg) {
  const packageBudget = pkg.packageJson.cognidesk?.sizeBudget ?? {};

  return {
    distBytes: parseSizeBudget(packageBudget.dist ?? packageBudget.distBytes, defaultPublishedDistBudgetBytes),
    declarationChunkBytes: parseSizeBudget(
      packageBudget.declarationChunk ?? packageBudget.declarationChunkBytes,
      defaultDeclarationChunkBudgetBytes,
    ),
  };
}

function parseSizeBudget(value, defaultBytes) {
  if (value === undefined) return defaultBytes;

  if (typeof value === "number" && Number.isFinite(value) && value >= 0) {
    return value;
  }

  if (typeof value !== "string") {
    throw new Error(`Invalid package size budget value ${JSON.stringify(value)}.`);
  }

  const match = /^(\d+(?:\.\d+)?)\s*(b|bytes?|kib|kb|mib|mb)$/i.exec(value.trim());
  if (!match) {
    throw new Error(`Invalid package size budget string "${value}". Use bytes, KiB, or MiB.`);
  }

  const amount = Number(match[1]);
  const unit = match[2].toLowerCase();
  if (unit === "b" || unit === "byte" || unit === "bytes") return amount;
  if (unit === "kib" || unit === "kb") return amount * 1024;
  return amount * oneMiB;
}

async function walk(root) {
  const entries = await readdir(root, { withFileTypes: true }).catch((error) => {
    if (isMissingPath(error)) return [];
    throw error;
  });
  const files = [];

  for (const entry of entries) {
    const file = path.join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(file));
    } else {
      files.push(file);
    }
  }

  return files;
}

async function runImportSmoke(specifiers) {
  const tempRoot = await mkdtemp(path.join(tmpdir(), "cognidesk-package-smoke-"));
  try {
    await linkWorkspacePackages(tempRoot);
    const smokeScript = path.join(tempRoot, "smoke-imports.mjs");
    await writeFile(smokeScript, importSmokeSource(specifiers));

    const result = spawnSync(process.execPath, [smokeScript], {
      cwd: tempRoot,
      stdio: "inherit",
    });

    if (result.error) {
      throw result.error;
    }
    if (result.status !== 0) {
      process.exit(result.status ?? 1);
    }
  } finally {
    await rm(tempRoot, { force: true, recursive: true });
  }
}

async function linkWorkspacePackages(tempRoot) {
  for (const pkg of workspaces) {
    const linkPath = path.join(tempRoot, "node_modules", ...pkg.name.split("/"));
    await mkdir(path.dirname(linkPath), { recursive: true });
    await symlink(pkg.dir, linkPath, "dir");
  }
}

function importSmokeSource(specifiers) {
  return `const specifiers = ${JSON.stringify(specifiers, null, 2)};
const failures = [];

for (const specifier of specifiers) {
  try {
    await import(specifier);
  } catch (error) {
    failures.push({
      specifier,
      error: error?.stack ?? error?.message ?? String(error),
    });
  }
}

if (failures.length > 0) {
  console.error(\`Failed to import \${failures.length} public package specifier\${failures.length === 1 ? "" : "s"}:\`);
  for (const failure of failures) {
    console.error(\`  \${failure.specifier}\`);
    console.error(failure.error);
  }
  process.exit(1);
}

console.log(\`Imported \${specifiers.length} public package specifier\${specifiers.length === 1 ? "" : "s"}.\`);
`;
}

function formatBytes(bytes) {
  return `${(bytes / oneMiB).toFixed(2)} MiB`;
}

function isMissingPath(error) {
  return typeof error === "object"
    && error !== null
    && "code" in error
    && error.code === "ENOENT";
}
