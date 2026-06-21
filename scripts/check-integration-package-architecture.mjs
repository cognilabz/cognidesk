#!/usr/bin/env node
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const workspacePatterns = [
  ["packages", "*"],
  ["integrations", "*", "*"],
];
const providerCategorySegments = new Set([
  "cobrowsing",
  "community",
  "contact-center",
  "ecommerce",
  "email",
  "form",
  "help-center",
  "marketplace",
  "messaging",
  "review",
  "sms",
  "social",
  "ticketing",
  "video",
  "voice",
  "workplace",
]);
const providerSdkPackages = new Set([
  "@aws-sdk/client-connect",
  "@aws-sdk/client-ses",
  "@azure/communication-email",
  "@azure/communication-sms",
  "@azure/identity",
  "@googleapis/gmail",
  "@hubspot/api-client",
  "@microsoft/microsoft-graph-client",
  "@slack/web-api",
  "@vonage/server-sdk",
  "googleapis",
  "mailgun.js",
  "openai",
  "stripe",
  "twilio",
]);
const infrastructurePackageNames = new Set([
  "@cognidesk/voice-websocket",
]);
const oldImportBridgeMetadataKeys = [
  "compatibilityBridge",
  "legacyImportBridge",
  "oldImportBridge",
  "oldImportCompatibilityPackage",
];

const failures = [];
const warnings = [];
const workspaces = await readWorkspacePackages();
const splitProviderPackages = [];

for (const pkg of workspaces) {
  if (await isSplitProviderPackage(pkg)) splitProviderPackages.push(pkg);
}

await checkNoOldImportCompatibilityPackages(workspaces);
await checkNoRuntimeNodeModulesScanning(workspaces);
await checkManifestOnlyEntrypoints();
await checkSdkBackedGeneratedClones(splitProviderPackages);
await checkFullProviderApiClaimsUseAdapterVerification(splitProviderPackages);

if (warnings.length > 0) {
  console.log("Integration package architecture warnings:");
  for (const warning of warnings) console.log(`  ${warning}`);
}

if (failures.length > 0) {
  console.error("Integration package architecture check failed:");
  for (const failure of failures) console.error(`  ${failure}`);
  process.exit(1);
}

console.log("Integration package architecture check passed:");
console.log(`  split provider packages discovered: ${splitProviderPackages.length}`);
console.log("  no old-import compatibility packages or provider bridges were discovered");
console.log("  package source does not scan node_modules at runtime");
console.log("  manifest/catalog entry points are free of provider SDK runtime imports");
console.log("  SDK-backed provider packages did not add generated full-provider API clones");
console.log("  full-provider-api claims require adapter verification, not raw SDK breadth");

async function readWorkspacePackages() {
  const packages = [];

  for (const dir of await workspacePackageDirs()) {
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

  return packages.sort((left, right) => left.name.localeCompare(right.name));
}

async function workspacePackageDirs() {
  const dirs = [];

  async function visit(root, segments, current) {
    if (current.length === segments.length) {
      dirs.push(path.join(root, ...current));
      return;
    }

    const segment = segments[current.length];
    const currentDir = path.join(root, ...current);
    if (!existsSync(currentDir)) return;

    if (segment === "*") {
      const entries = await readdir(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory()) await visit(root, segments, [...current, entry.name]);
      }
      return;
    }

    await visit(root, segments, [...current, segment]);
  }

  for (const pattern of workspacePatterns) {
    await visit(repoRoot, pattern, []);
  }

  return dirs.sort();
}

async function isSplitProviderPackage(pkg) {
  if (infrastructurePackageNames.has(pkg.name)) return false;
  if (pkg.packageJson.cognidesk?.providerPackage === true) return true;
  if (pkg.packageJson.cognidesk?.kind === "provider-package") return true;
  if (!isSplitProviderPackageName(pkg.name)) return false;
  return await packageSourceDeclaresOwnProviderManifest(pkg);
}

function isSplitProviderPackageName(name) {
  return splitProviderPackageCategory(name) !== undefined;
}

function splitProviderPackageCategory(name) {
  const prefix = "@cognidesk/";
  if (!name.startsWith(prefix)) return undefined;

  const slug = name.slice(prefix.length);
  const categories = [...providerCategorySegments].sort((left, right) => right.length - left.length);
  for (const category of categories) {
    if (slug.startsWith(`${category}-`) && slug.length > category.length + 1) return category;
  }

  return undefined;
}

async function packageSourceDeclaresOwnProviderManifest(pkg) {
  const srcDir = path.join(pkg.dir, "src");
  if (!existsSync(srcDir)) return false;
  const sourceFiles = await walk(srcDir);

  for (const file of sourceFiles) {
    if (!file.endsWith(".ts") || isGeneratedSourceFile(file)) continue;
    const source = await readFile(file, "utf8");
    if (
      source.includes("defineProviderPackage")
      && source.includes("packageName")
      && source.includes(pkg.name)
    ) {
      return true;
    }
  }

  return false;
}

async function checkManifestOnlyEntrypoints() {
  const roots = [
    path.join(repoRoot, "packages", "integration-catalog", "src"),
    path.join(repoRoot, "packages", "integrations", "src", "provider-catalog"),
  ];
  const files = [
    path.join(repoRoot, "packages", "integrations", "src", "provider-manifest.ts"),
    path.join(repoRoot, "packages", "integrations", "src", "category-profiles.ts"),
  ];

  for (const root of roots) {
    if (existsSync(root)) files.push(...await walk(root));
  }

  for (const pkg of splitProviderPackages) {
    const srcDir = path.join(pkg.dir, "src");
    if (!existsSync(srcDir)) continue;
    const sourceFiles = await walk(srcDir);
    files.push(...sourceFiles.filter(isManifestOnlySourceFile));
  }

  for (const file of files.filter((file) => file.endsWith(".ts"))) {
    await assertNoProviderSdkRuntimeImports(file);
  }
}

async function checkNoOldImportCompatibilityPackages(packages) {
  for (const pkg of packages) {
    if (pkg.name !== "@cognidesk/integrations" && isOldImportCompatibilityPackage(pkg)) {
      failures.push(
        `${path.relative(repoRoot, pkg.packageJsonPath)}: split provider migration must not add an old-import compatibility package or bridge`,
      );
    }

    for (const metadataKey of oldImportBridgeMetadataKeys) {
      if (pkg.packageJson.cognidesk?.[metadataKey] === true) {
        failures.push(
          `${path.relative(repoRoot, pkg.packageJsonPath)}: cognidesk.${metadataKey} is not allowed; use codemods and explicit registration instead`,
        );
      }
    }
  }

  const legacySrcDir = path.join(repoRoot, "packages", "integrations", "src");
  if (!existsSync(legacySrcDir)) return;

  for (const file of (await walk(legacySrcDir)).filter((candidate) => candidate.endsWith(".ts") && !isGeneratedSourceFile(candidate))) {
    const source = await readFile(file, "utf8");
    for (const specifier of moduleSpecifiers(source)) {
      if (!isSplitProviderPackageSpecifier(specifier)) continue;
      failures.push(
        `${path.relative(repoRoot, file)}: @cognidesk/integrations must not bridge old imports to split provider package '${specifier}'`,
      );
    }
  }
}

function isOldImportCompatibilityPackage(pkg) {
  const slug = pkg.name.replace(/^@cognidesk\//, "");
  return /(?:^|-)(?:integrations?|providers?)-(?:compat|compatibility|bridge|legacy)(?:-|$)/.test(slug)
    || /(?:^|-)(?:compat|compatibility|bridge|legacy)-(?:integrations?|providers?)(?:-|$)/.test(slug);
}

function isSplitProviderPackageSpecifier(specifier) {
  const packageName = scopedPackageName(specifier);
  return Boolean(packageName && !infrastructurePackageNames.has(packageName) && isSplitProviderPackageName(packageName));
}

function scopedPackageName(specifier) {
  if (!specifier.startsWith("@")) return specifier.split("/")[0];
  const segments = specifier.split("/");
  if (segments.length < 2) return specifier;
  return `${segments[0]}/${segments[1]}`;
}

async function checkNoRuntimeNodeModulesScanning(packages) {
  for (const pkg of packages) {
    const srcDir = path.join(pkg.dir, "src");
    if (!existsSync(srcDir)) continue;

    for (const file of (await walk(srcDir)).filter((candidate) => candidate.endsWith(".ts") && !isGeneratedSourceFile(candidate))) {
      const source = await readFile(file, "utf8");
      if (!looksLikeRuntimeNodeModulesScan(source)) continue;

      failures.push(
        `${path.relative(repoRoot, file)}: runtime source must not scan node_modules to discover installed provider packages`,
      );
    }
  }
}

function looksLikeRuntimeNodeModulesScan(source) {
  const mentionsNodeModules = /["'`]node_modules["'`]|[/\\]node_modules[/\\]/.test(source);
  if (!mentionsNodeModules) return false;

  return /\b(?:readdir|readdirSync|opendir|opendirSync|glob|globby|fastGlob)\b/.test(source)
    || /\bfrom\s+["'](?:node:)?fs(?:\/promises)?["']/.test(source)
    || /\brequire\s*\(\s*["'](?:node:)?fs(?:\/promises)?["']\s*\)/.test(source);
}

function isManifestOnlySourceFile(file) {
  const segments = file.split(path.sep);
  const basename = path.basename(file);
  return basename === "manifest.ts"
    || basename.startsWith("manifest.")
    || basename === "catalog.ts"
    || basename.startsWith("catalog.")
    || segments.includes("provider-catalog")
    || segments.includes("manifests")
    || segments.includes("metadata");
}

function isGeneratedSourceFile(file) {
  return file.endsWith(".generated.ts") || file.includes(`${path.sep}.generated${path.sep}`);
}

async function assertNoProviderSdkRuntimeImports(file) {
  if (!existsSync(file)) return;

  const source = await readFile(file, "utf8");
  const relative = path.relative(repoRoot, file);
  const imports = runtimeImportSpecifiers(source);

  for (const specifier of imports) {
    if (isAllowedManifestOnlyImport(specifier)) continue;
    failures.push(`${relative}: manifest/catalog entry point imports runtime module '${specifier}'`);
  }
}

function runtimeImportSpecifiers(source) {
  const specifiers = [];
  const importPattern = /(^|\n)\s*import\s+(?!type\b)(?:[\s\S]*?\s+from\s+)?["']([^"']+)["']/g;
  const exportPattern = /(^|\n)\s*export\s+(?!type\b)(?:[\s\S]*?\s+from\s+)["']([^"']+)["']/g;
  const dynamicImportPattern = /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g;

  for (const pattern of [importPattern, exportPattern, dynamicImportPattern]) {
    let match;
    while ((match = pattern.exec(source))) {
      specifiers.push(match[2] ?? match[1]);
    }
  }

  return specifiers;
}

function moduleSpecifiers(source) {
  const specifiers = [];
  const patterns = [
    /(^|\n)\s*import\s+(?:type\s+)?(?:[\s\S]*?\s+from\s+)?["']([^"']+)["']/g,
    /(^|\n)\s*export\s+(?:type\s+)?(?:[\s\S]*?\s+from\s+)["']([^"']+)["']/g,
    /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g,
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(source))) {
      specifiers.push(match[2] ?? match[1]);
    }
  }

  return specifiers;
}

function isAllowedManifestOnlyImport(specifier) {
  return specifier.startsWith(".")
    || specifier.startsWith("node:")
    || specifier.startsWith("@cognidesk/");
}

async function checkSdkBackedGeneratedClones(packages) {
  for (const pkg of packages) {
    if (!isSdkBackedPackage(pkg.packageJson)) continue;

    const srcDir = path.join(pkg.dir, "src");
    if (!existsSync(srcDir)) continue;

    const generatedFullApiFiles = (await walk(srcDir))
      .filter((file) => file.endsWith(".ts"))
      .filter((file) => /(^|[/\\])full-api[-/\\].*\.generated\.ts$|full-api.*\.generated\.ts$/.test(file));

    for (const file of generatedFullApiFiles) {
      failures.push(
        `${path.relative(repoRoot, file)}: SDK-backed provider package ${pkg.name} must not introduce generated full-provider API clone files`,
      );
    }
  }
}

async function checkFullProviderApiClaimsUseAdapterVerification(packages) {
  for (const pkg of packages) {
    const sourceFiles = await sourceFilesForPackage(pkg);
    const manifestFiles = sourceFiles.filter((file) => /(^|[/\\])manifest(?:\.[a-z0-9-]+)?\.ts$/.test(file));

    for (const file of manifestFiles) {
      const source = await readFile(file, "utf8");
      if (!/scope:\s*["']full-provider-api["']/.test(source)) continue;

      if (!source.includes("fullProviderApiVerification")) {
        failures.push(
          `${path.relative(repoRoot, file)}: full-provider-api coverage must include adapter verification metadata; raw provider SDK breadth is not Cognidesk adapter coverage`,
        );
      }
    }
  }
}

async function sourceFilesForPackage(pkg) {
  const srcDir = path.join(pkg.dir, "src");
  if (!existsSync(srcDir)) return [];
  return (await walk(srcDir)).filter((file) => file.endsWith(".ts"));
}

function isSdkBackedPackage(packageJson) {
  const declared = packageJson.cognidesk?.providerSdkDependencies;
  if (Array.isArray(declared) && declared.length > 0) return true;

  for (const field of ["dependencies", "peerDependencies", "optionalDependencies"]) {
    const dependencies = packageJson[field] ?? {};
    for (const dependencyName of Object.keys(dependencies)) {
      if (providerSdkPackages.has(dependencyName)) return true;
    }
  }

  return false;
}

async function walk(root) {
  const entries = await readdir(root, { withFileTypes: true }).catch((error) => {
    if (error?.code === "ENOENT") return [];
    throw error;
  });
  const files = [];

  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === "dist" || entry.name === "build") continue;
    const file = path.join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(file));
    } else {
      files.push(file);
    }
  }

  return files;
}
