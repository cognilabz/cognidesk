#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import {
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  stat,
  symlink,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const packageNamesToSmoke = [
  "@cognidesk/core",
  "@cognidesk/http",
  "@cognidesk/react",
  "@cognidesk/integrations",
];
const integrationsDist = path.join(repoRoot, "packages", "integrations", "dist");
const oneMiB = 1024 * 1024;
const publishedDistBudgetBytes = 100 * oneMiB;
const declarationChunkBudgetBytes = 7 * oneMiB;
const largestDeclarationCount = 10;
const failSizeBudget = process.argv.includes("--fail-size-budget");

const workspaces = await readWorkspacePackages();
const workspaceByName = new Map(workspaces.map((pkg) => [pkg.name, pkg]));
const smokePackages = packageNamesToSmoke.map((name) => {
  const pkg = workspaceByName.get(name);
  if (!pkg) {
    throw new Error(`Unable to find workspace package ${name}.`);
  }
  return pkg;
});

const exportEntries = smokePackages.flatMap((pkg) => publicExportEntries(pkg));
const missingTargets = await missingExportTargets(exportEntries);

console.log("Package public export smoke:");
for (const pkg of smokePackages) {
  const count = exportEntries.filter((entry) => entry.packageName === pkg.name).length;
  console.log(`  ${pkg.name}: ${count} public export${count === 1 ? "" : "s"}`);
}

await reportIntegrationsDist();

if (missingTargets.length > 0) {
  console.error("\nMissing built export targets:");
  for (const target of missingTargets) {
    console.error(`  ${target.specifier} -> ${target.relativeTarget}`);
  }
  console.error("\nRun pnpm build before this smoke check.");
  process.exit(1);
}

await runImportSmoke(exportEntries.map((entry) => entry.specifier));

async function readWorkspacePackages() {
  const packagesDir = path.join(repoRoot, "packages");
  const entries = await readdir(packagesDir, { withFileTypes: true });
  const packages = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const dir = path.join(packagesDir, entry.name);
    const packageJsonPath = path.join(dir, "package.json");
    if (!existsSync(packageJsonPath)) continue;

    const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));
    if (typeof packageJson.name !== "string") continue;

    packages.push({
      dir,
      name: packageJson.name,
      packageJson,
      packageJsonPath,
    });
  }

  return packages.sort((a, b) => a.name.localeCompare(b.name));
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

async function reportIntegrationsDist() {
  const files = await walk(integrationsDist);

  console.log("\nIntegrations dist size report:");
  if (files.length === 0) {
    console.log("  no dist files found");
    return;
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
    .filter((file) => file.bytes > declarationChunkBudgetBytes)
    .slice(0, largestDeclarationCount);

  console.log(
    `  total: ${formatBytes(totalBytes)} across ${fileSizes.length} files `
      + `(budget reference: ${formatBytes(publishedDistBudgetBytes)})`,
  );
  console.log(
    `  declarations: ${formatBytes(declarationBytes)} across ${declarations.length} files `
      + `(chunk budget reference: ${formatBytes(declarationChunkBudgetBytes)})`,
  );
  console.log("  largest declarations:");
  for (const file of declarations.slice(0, largestDeclarationCount)) {
    console.log(`    ${formatBytes(file.bytes)} ${path.relative(repoRoot, file.file)}`);
  }

  const warnings = [];
  if (totalBytes > publishedDistBudgetBytes) {
    warnings.push(
      `packages/integrations/dist is ${formatBytes(totalBytes)}, above ${formatBytes(publishedDistBudgetBytes)}`,
    );
  }
  for (const file of oversizedDeclarations) {
    warnings.push(
      `${path.relative(repoRoot, file.file)} is ${formatBytes(file.bytes)}, `
        + `above ${formatBytes(declarationChunkBudgetBytes)}`,
    );
  }

  if (warnings.length > 0) {
    console.log("  size budget warnings:");
    for (const warning of warnings) {
      console.log(`    ${warning}`);
    }
    if (failSizeBudget) {
      throw new Error("Integrations dist size budget exceeded.");
    }
  }
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
