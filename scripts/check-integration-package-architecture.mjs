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
const providerPackagePrefix = "@cognidesk/integration-";
const providerSdkPackages = new Set([
  "@amazon-sp-api-release/amazon-sp-api-sdk-js",
  "@aws-sdk/client-connect",
  "@aws-sdk/client-connectparticipant",
  "@aws-sdk/client-polly",
  "@aws-sdk/client-ses",
  "@aws-sdk/client-sesv2",
  "@aws-sdk/client-transcribe-streaming",
  "@azure/communication-email",
  "@azure/communication-sms",
  "@azure/identity",
  "@deepgram/sdk",
  "@elevenlabs/elevenlabs-js",
  "@google-cloud/speech",
  "@google-cloud/text-to-speech",
  "@googleapis/androidpublisher",
  "@googleapis/gmail",
  "@hubspot/api-client",
  "intercom-client",
  "imapflow",
  "jsforce",
  "microsoft-cognitiveservices-speech-sdk",
  "@microsoft/microsoft-graph-client",
  "postmark",
  "@ringcentral/sdk",
  "@shopify/admin-api-client",
  "@shopify/shopify-api",
  "@slack/web-api",
  "@vonage/server-sdk",
  "discord.js",
  "googleapis",
  "mailgun.js",
  "openai",
  "purecloud-platform-client-v2",
  "stripe",
  "twilio",
]);
const infrastructurePackageNames = new Set([
  "@cognidesk/voice-websocket",
]);
const retiredProviderAggregatePath = ["packages", "integrations"];
const retiredProviderAggregatePackageName = ["@cognidesk", "integrations"].join("/");
const providerNeutralManifestOnlyPackageNames = new Set([
  "@cognidesk/core",
  "@cognidesk/integration-catalog",
  "@cognidesk/integration-kit",
]);
const manifestOnlyRuntimeRelativeModuleNames = new Set([
  "client",
  "clients",
  "index",
  "runtime",
  "runtimes",
]);
const retiredBridgeMetadataKeys = [
  "providerBridge",
  "aggregateBridge",
];
const failures = [];
const warnings = [];
const splitProviderPackages = [];

async function main() {
  failures.length = 0;
  warnings.length = 0;
  splitProviderPackages.length = 0;

  const workspaces = await readWorkspacePackages();

  for (const pkg of workspaces) {
    if (await isSplitProviderPackage(pkg)) splitProviderPackages.push(pkg);
  }

  checkProviderPackageNaming(splitProviderPackages);
  await checkNoRetiredProviderAggregatePackages(workspaces);
  await checkNoRuntimeNodeModulesScanning(workspaces);
  await checkManifestOnlyEntrypoints();
  await checkSdkBackedGeneratedClones(splitProviderPackages);
  checkProviderSdkDependencyMetadata(splitProviderPackages);
  await checkFullProviderApiClaimsUseAdapterVerification(splitProviderPackages);
  await checkProviderCoverageArtifactReferences(splitProviderPackages);

  if (warnings.length > 0) {
    console.log("Integration package architecture warnings:");
    for (const warning of warnings) console.log(`  ${warning}`);
  }

  if (failures.length > 0) {
    console.error("Integration package architecture check failed:");
    for (const failure of failures) console.error(`  ${failure}`);
    process.exitCode = 1;
    return;
  }

  console.log("Integration package architecture check passed:");
  console.log(`  split provider packages discovered: ${splitProviderPackages.length}`);
  console.log("  no retired aggregate package or provider bridge was discovered");
  console.log("  package source does not scan node_modules at runtime");
  console.log("  manifest/catalog entry points are free of provider SDK runtime imports");
  console.log("  SDK-backed provider packages did not add generated full-provider API clones");
  console.log("  SDK-backed provider packages declare provider SDK dependency metadata");
  console.log("  full-provider-api claims require adapter verification, not raw SDK breadth");
  console.log("  provider coverage artifact references resolve under docs/provider-coverage");
  console.log("  provider package names use @cognidesk/integration-{category}-{provider}");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  });
}

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
  if (expectedProviderPackageNameForPath(pkg.dir)) return true;
  if (pkg.packageJson.cognidesk?.providerPackage === true) return true;
  if (pkg.packageJson.cognidesk?.kind === "provider-package") return true;
  if (!isSplitProviderPackageName(pkg.name)) return false;
  return await packageSourceDeclaresOwnProviderManifest(pkg);
}

function isSplitProviderPackageName(name) {
  return splitProviderPackageCategory(name) !== undefined;
}

function splitProviderPackageCategory(name) {
  if (!name.startsWith(providerPackagePrefix)) return undefined;

  const slug = name.slice(providerPackagePrefix.length);
  const categories = [...providerCategorySegments].sort((left, right) => right.length - left.length);
  for (const category of categories) {
    if (slug.startsWith(`${category}-`) && slug.length > category.length + 1) return category;
  }

  return undefined;
}

function checkProviderPackageNaming(packages) {
  for (const pkg of packages) {
    if (!pkg.name.startsWith(providerPackagePrefix)) {
      failures.push(
        `${pkg.name}: Provider Integration packages must be named @cognidesk/integration-{category}-{provider}`,
      );
      continue;
    }

    const expectedName = expectedProviderPackageNameForPath(pkg.dir);
    if (expectedName && pkg.name !== expectedName) {
      failures.push(`${pkg.name}: package name must match workspace path as ${expectedName}`);
    }
  }
}

function expectedProviderPackageNameForPath(dir) {
  const relative = path.relative(repoRoot, dir).replace(/\\/g, "/");
  const match = /^integrations\/([^/]+)\/([^/]+)$/.exec(relative);
  if (!match) return undefined;
  return `${providerPackagePrefix}${match[1]}-${match[2]}`;
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
  ];
  const files = [];

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

async function checkNoRetiredProviderAggregatePackages(packages) {
  if (existsSync(path.join(repoRoot, ...retiredProviderAggregatePath, "package.json"))) {
    failures.push("retired provider aggregate package is not allowed; provider runtime code must live in split @cognidesk/integration-{category}-{provider} packages");
  }

  for (const pkg of packages) {
    if (pkg.name === retiredProviderAggregatePackageName) {
      failures.push(
        `${path.relative(repoRoot, pkg.packageJsonPath)}: retired provider aggregate package is not allowed; provider runtime code must live in split @cognidesk/integration-{category}-{provider} packages`,
      );
    }

    if (isRetiredProviderBridgePackage(pkg)) {
      failures.push(
        `${path.relative(repoRoot, pkg.packageJsonPath)}: provider runtime packages must not add aggregate compatibility packages or bridges`,
      );
    }

    for (const metadataKey of retiredBridgeMetadataKeys) {
      if (pkg.packageJson.cognidesk?.[metadataKey] === true) {
        failures.push(
          `${path.relative(repoRoot, pkg.packageJsonPath)}: cognidesk.${metadataKey} is not allowed; use explicit provider registration instead`,
        );
      }
    }
  }
}

function isRetiredProviderBridgePackage(pkg) {
  const slug = pkg.name.replace(/^@cognidesk\//, "");
  return /(?:^|-)(?:integrations?|providers?)-(?:compat|compatibility|bridge)(?:-|$)/.test(slug)
    || /(?:^|-)(?:compat|compatibility|bridge)-(?:integrations?|providers?)(?:-|$)/.test(slug);
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

function isProviderCatalogMetadataSourceFile(file) {
  const relative = path.relative(path.join(repoRoot, "packages", "integrations", "src", "provider-catalog"), file);
  if (relative.startsWith("categories")) return true;

  const basename = path.basename(file);
  return basename === "references.ts" || basename === "types.ts";
}

function isGeneratedSourceFile(file) {
  return file.endsWith(".generated.ts") || file.includes(`${path.sep}.generated${path.sep}`);
}

async function assertNoProviderSdkRuntimeImports(file) {
  if (!existsSync(file)) return;

  const source = await readFile(file, "utf8");
  const relative = path.relative(repoRoot, file);

  for (const { specifier } of manifestOnlyRuntimeImportViolationsForSource(source, file)) {
    failures.push(`${relative}: manifest/catalog entry point imports runtime module '${specifier}'`);
  }
}

export function manifestOnlyRuntimeImportViolationsForSource(source, file) {
  const violations = [];

  for (const specifier of runtimeImportSpecifiers(source)) {
    if (isProviderRuntimeSubpathImport(specifier) || isRelativeProviderRuntimeImport(file, specifier)) {
      violations.push({ specifier });
      continue;
    }

    if (isAllowedManifestOnlyImport(specifier)) continue;

    violations.push({ specifier });
  }

  return violations;
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

function isAllowedManifestOnlyImport(specifier) {
  if (specifier.startsWith("node:")) return true;

  if (specifier.startsWith(".")) return true;

  const packageName = scopedPackageName(specifier);
  if (packageName && providerNeutralManifestOnlyPackageNames.has(packageName)) return true;

  return false;
}

function isProviderRuntimeSubpathImport(specifier) {
  const packageName = scopedPackageName(specifier);
  if (!packageName || !isSplitProviderPackageSpecifier(specifier)) return false;

  const subpath = specifier.slice(packageName.length).replace(/^\/+/, "");
  const [firstSegment] = subpath.split("/");
  return manifestOnlyRuntimeRelativeModuleNames.has(stripModuleExtension(firstSegment));
}

function isRelativeProviderRuntimeImport(file, specifier) {
  if (!specifier.startsWith(".")) return false;

  const providerRoot = providerPackageRootForFile(file);
  if (!providerRoot) return false;

  const resolved = path.resolve(path.dirname(file), specifier);
  if (!isPathInsideOrEqual(providerRoot, resolved)) return false;

  const relativeToProvider = path.relative(providerRoot, resolved);
  const segments = relativeToProvider.split(path.sep).filter(Boolean).map(stripModuleExtension);
  if (segments.length === 0) return false;

  return segments.some((segment) => manifestOnlyRuntimeRelativeModuleNames.has(segment));
}

function providerPackageRootForFile(file) {
  const segments = path.resolve(file).split(path.sep);
  const integrationsIndex = segments.lastIndexOf("integrations");
  if (integrationsIndex < 0) return undefined;

  const srcIndex = integrationsIndex + 3;
  const category = segments[integrationsIndex + 1];
  const provider = segments[integrationsIndex + 2];
  if (!category || !provider || !providerCategorySegments.has(category) || segments[srcIndex] !== "src") {
    return undefined;
  }

  return segments.slice(0, srcIndex).join(path.sep) || path.sep;
}

function isPathInsideOrEqual(root, candidate) {
  const relative = path.relative(root, candidate);
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
}

function stripModuleExtension(segment) {
  return segment.replace(/\.(?:c|m)?(?:j|t)sx?$/, "");
}

async function checkSdkBackedGeneratedClones(packages) {
  for (const pkg of packages) {
    if (!isSdkBackedPackage(pkg.packageJson)) continue;

    const srcDir = path.join(pkg.dir, "src");
    if (!existsSync(srcDir)) continue;

    const generatedFullApiFiles = (await walk(srcDir))
      .filter((file) => file.endsWith(".ts"))
      .filter(isGeneratedFullProviderApiClone);

    for (const file of generatedFullApiFiles) {
      failures.push(
        `${path.relative(repoRoot, file)}: SDK-backed provider package ${pkg.name} must not introduce generated full-provider API clone files`,
      );
    }
  }
}

function checkProviderSdkDependencyMetadata(packages) {
  for (const pkg of packages) {
    for (const failure of providerSdkDependencyMetadataFailuresForPackage(pkg)) {
      failures.push(failure);
    }
  }
}

export function providerSdkDependencyMetadataFailuresForPackage(pkg) {
  const failures = [];
  const declaredRaw = pkg.packageJson.cognidesk?.providerSdkDependencies;
  const declared = Array.isArray(declaredRaw)
    ? declaredRaw.filter((value) => typeof value === "string" && value.length > 0)
    : [];
  const invalidDeclared = Array.isArray(declaredRaw)
    ? declaredRaw.filter((value) => typeof value !== "string" || value.length === 0)
    : declaredRaw === undefined
      ? []
      : [declaredRaw];
  const dependencyNames = runtimeDependencyNames(pkg.packageJson);
  const knownSdkDependencies = [...dependencyNames]
    .filter((dependencyName) => providerSdkPackages.has(dependencyName))
    .sort((left, right) => left.localeCompare(right));
  const missingMetadata = knownSdkDependencies.filter((dependencyName) => !declared.includes(dependencyName));
  const unknownMetadata = declared.filter((dependencyName) => !dependencyNames.has(dependencyName));
  const packageJsonPath = pkg.packageJsonPath
    ? path.relative(repoRoot, pkg.packageJsonPath)
    : `${pkg.name}/package.json`;

  if (invalidDeclared.length > 0) {
    failures.push(
      `${packageJsonPath}: cognidesk.providerSdkDependencies must be an array of package names`,
    );
  }

  if (missingMetadata.length > 0) {
    failures.push(
      `${packageJsonPath}: SDK-backed provider package must list runtime SDK dependencies in cognidesk.providerSdkDependencies (${missingMetadata.join(", ")})`,
    );
  }

  if (unknownMetadata.length > 0) {
    failures.push(
      `${packageJsonPath}: cognidesk.providerSdkDependencies references packages that are not runtime dependencies (${unknownMetadata.join(", ")})`,
    );
  }

  return failures;
}

export function isGeneratedFullProviderApiClone(file) {
  const normalized = file.replaceAll(path.sep, "/");
  const basename = path.posix.basename(normalized);
  if (!basename.endsWith(".generated.ts")) return false;

  const pathTokens = new Set(
    normalized
      .split("/")
      .flatMap((segment) => segment.replace(/\.generated\.ts$/, "").split(/[^a-z0-9]+/i))
      .filter(Boolean)
      .map((segment) => segment.toLowerCase()),
  );

  if (pathTokens.has("full") && pathTokens.has("api")) return true;
  if (pathTokens.has("web") && pathTokens.has("api")) return true;
  if (pathTokens.has("graph") && pathTokens.has("api")) return true;
  if (pathTokens.has("http") && pathTokens.has("api")) return true;
  if (pathTokens.has("admin") && pathTokens.has("graphql")) return true;

  return /(^|\/)[a-z0-9-]+-api(?:\.generated\.ts|\/)/i.test(normalized)
    || /(^|\/)[a-z0-9-]+-graphql(?:\.generated\.ts|\/)/i.test(normalized);
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

async function checkProviderCoverageArtifactReferences(packages) {
  for (const pkg of packages) {
    const sourceFiles = await sourceFilesForPackage(pkg);
    for (const file of sourceFiles) {
      const source = await readFile(file, "utf8");
      for (const failure of providerCoverageArtifactReferenceFailuresForSource(source, file)) {
        failures.push(failure);
      }
    }
  }
}

export function providerCoverageArtifactReferenceFailuresForSource(
  source,
  file,
  options = {},
) {
  const artifactExists = options.artifactExists ?? ((artifactPath) => existsSync(path.join(repoRoot, artifactPath)));
  const failures = [];
  const relativeFile = path.relative(repoRoot, file);

  for (const { key, artifactPath } of providerCoverageArtifactReferencesForSource(source)) {
    if (path.isAbsolute(artifactPath) || artifactPath.includes("..") || !artifactPath.startsWith("docs/provider-coverage/")) {
      failures.push(
        `${relativeFile}: ${key} must reference a repo-relative docs/provider-coverage artifact (${artifactPath})`,
      );
      continue;
    }

    if (!artifactExists(artifactPath)) {
      failures.push(
        `${relativeFile}: ${key} references missing provider coverage artifact ${artifactPath}`,
      );
    }
  }

  return failures;
}

function providerCoverageArtifactReferencesForSource(source) {
  const references = [];
  const pattern = /\b(coverageArtifact|operationCatalogArtifact|functionCatalogArtifact):\s*["']([^"']+)["']/g;
  let match;
  while ((match = pattern.exec(source))) {
    references.push({ key: match[1], artifactPath: match[2] });
  }
  return references;
}

async function sourceFilesForPackage(pkg) {
  const srcDir = path.join(pkg.dir, "src");
  if (!existsSync(srcDir)) return [];
  return (await walk(srcDir)).filter((file) => file.endsWith(".ts"));
}

export function isSdkBackedPackage(packageJson) {
  const declared = packageJson.cognidesk?.providerSdkDependencies;
  if (Array.isArray(declared) && declared.length > 0) return true;

  return [...runtimeDependencyNames(packageJson)].some((dependencyName) => providerSdkPackages.has(dependencyName));
}

function runtimeDependencyNames(packageJson) {
  const dependencyNames = new Set();
  for (const field of ["dependencies", "peerDependencies", "optionalDependencies"]) {
    const dependencies = packageJson[field] ?? {};
    for (const dependencyName of Object.keys(dependencies)) dependencyNames.add(dependencyName);
  }
  return dependencyNames;
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
