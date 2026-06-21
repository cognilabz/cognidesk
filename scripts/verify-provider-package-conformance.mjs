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
const oneMiB = 1024 * 1024;
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
const defaultPackedSizeBudgetBytes = 12 * oneMiB;
const defaultUnpackedSizeBudgetBytes = 40 * oneMiB;
const defaultDeclarationFileBudgetBytes = 4 * oneMiB;
const stagedProviderPackages = [
  "@cognidesk/email-gmail",
  "@cognidesk/email-outlook",
  "@cognidesk/workplace-slack",
  "@cognidesk/workplace-teams",
  "@cognidesk/ecommerce-stripe",
];
const stagedProviderPackageIssues = new Map([
  ["@cognidesk/email-gmail", "#23/#29"],
  ["@cognidesk/email-outlook", "#29"],
  ["@cognidesk/workplace-slack", "#25"],
  ["@cognidesk/workplace-teams", "#24"],
  ["@cognidesk/ecommerce-stripe", "#30"],
]);
const providerFamilyIssueSummary = "#23 Gmail, #24 Microsoft Graph, #25 Slack/Discord, #29 email, #30 ecommerce, #31 marketplace, #32 Meta, #33 RCS/TikTok, #34 review, #35 helpdesk ticketing, #36 CRM ticketing, #37 enterprise service clouds, #38 contact-center core, #39 contact-center long tail, #40 cloud speech, #41 voice telephony, #42 video, #43 local/protocol";
const infrastructurePackageNames = new Set([
  "@cognidesk/voice-websocket",
]);

const workspaces = await readWorkspacePackages();
const workspaceByName = new Map(workspaces.map((pkg) => [pkg.name, pkg]));
const providerPackages = [];

for (const pkg of workspaces) {
  if (await isProviderPackage(pkg)) providerPackages.push(pkg);
}

for (const packageName of stagedProviderPackages) {
  const pkg = workspaceByName.get(packageName);
  if (pkg && !providerPackages.some((candidate) => candidate.name === packageName)) {
    providerPackages.push(pkg);
  }
}

providerPackages.sort((left, right) => left.name.localeCompare(right.name));

const missingStagedPackages = stagedProviderPackages.filter((packageName) => !workspaceByName.has(packageName));
const failures = [];

if (providerPackages.length === 0) {
  console.log("Provider package conformance:");
  console.log("  no split provider workspaces discovered yet");
  console.log(`  staged package checks pending provider-family issues #23-#25/#29-#43: ${formatStagedPackages(missingStagedPackages)}`);
  console.log(`  provider family trackers: ${providerFamilyIssueSummary}`);
  process.exit(0);
}

for (const pkg of providerPackages) {
  await checkProviderPackage(pkg);
}

if (failures.length > 0) {
  console.error("Provider package conformance failed:");
  for (const failure of failures) console.error(`  ${failure}`);
  process.exit(1);
}

console.log("Provider package conformance passed:");
console.log(`  checked provider packages: ${providerPackages.map((pkg) => pkg.name).join(", ")}`);
if (missingStagedPackages.length > 0) {
  console.log(`  staged package checks still pending provider-family issues #23-#25/#29-#43: ${formatStagedPackages(missingStagedPackages)}`);
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

  return packages;
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

async function isProviderPackage(pkg) {
  if (pkg.name === "@cognidesk/integrations") return false;
  if (infrastructurePackageNames.has(pkg.name)) return false;
  if (pkg.packageJson.cognidesk?.providerPackage === true) return true;
  if (pkg.packageJson.cognidesk?.kind === "provider-package") return true;
  if (!isSplitProviderPackageName(pkg.name)) return false;

  const sourceFiles = await sourceFilesForPackage(pkg);
  for (const file of sourceFiles) {
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

function formatStagedPackages(packageNames) {
  return packageNames.map((packageName) => {
    const issue = stagedProviderPackageIssues.get(packageName);
    return issue ? `${packageName} (${issue})` : packageName;
  }).join(", ");
}

async function sourceFilesForPackage(pkg) {
  const srcDir = path.join(pkg.dir, "src");
  if (!existsSync(srcDir)) return [];
  return (await walk(srcDir)).filter((file) => file.endsWith(".ts"));
}

async function checkProviderPackage(pkg) {
  const packReport = packDryRun(pkg);
  if (packReport) checkPackReport(pkg, packReport);

  const exportEntries = publicExportEntries(pkg);
  checkExportTargets(pkg, exportEntries);

  const manifestEntries = manifestOnlyExportEntries(pkg, exportEntries);
  if (manifestEntries.length === 0) {
    failures.push(`${pkg.name}: provider packages must expose at least one manifest-only import entry point`);
  } else {
    await runTempProjectImportSmoke(pkg, manifestEntries.map((entry) => entry.specifier));
    await runTempProjectTypeSmoke(pkg, manifestEntries.map((entry) => entry.specifier));
  }
}

function packDryRun(pkg) {
  const result = spawnSync("npm", ["pack", "--dry-run", "--json"], {
    cwd: pkg.dir,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });

  if (result.status !== 0) {
    failures.push(`${pkg.name}: npm pack --dry-run failed\n${indent(result.stderr.trim())}`);
    return undefined;
  }

  try {
    const parsed = JSON.parse(result.stdout);
    return Array.isArray(parsed) ? parsed[0] : parsed;
  } catch (error) {
    failures.push(`${pkg.name}: could not parse npm pack --dry-run JSON (${error.message})`);
    return undefined;
  }
}

function checkPackReport(pkg, report) {
  const packedBudget = readBudget(pkg, "packedSizeBytes", defaultPackedSizeBudgetBytes);
  const unpackedBudget = readBudget(pkg, "unpackedSizeBytes", defaultUnpackedSizeBudgetBytes);
  const files = Array.isArray(report.files) ? report.files : [];

  if (report.size > packedBudget) {
    failures.push(`${pkg.name}: packed size ${formatBytes(report.size)} exceeds budget ${formatBytes(packedBudget)}`);
  }
  if (report.unpackedSize > unpackedBudget) {
    failures.push(`${pkg.name}: unpacked size ${formatBytes(report.unpackedSize)} exceeds budget ${formatBytes(unpackedBudget)}`);
  }

  const publishedPaths = files.map((file) => file.path).filter(Boolean);
  const forbiddenSource = publishedPaths.filter((file) => file.startsWith("src/"));
  const forbiddenMaps = publishedPaths.filter((file) => file.endsWith(".map"));
  const manifestFiles = publishedPaths.filter((file) => /(^|\/)(manifest|catalog|metadata)\.(?:js|d\.ts)$/.test(file));

  if (!publishedPaths.some((file) => file.startsWith("dist/"))) {
    failures.push(`${pkg.name}: npm pack contents must include built dist output`);
  }
  if (forbiddenSource.length > 0) {
    failures.push(`${pkg.name}: npm pack includes source files: ${forbiddenSource.slice(0, 5).join(", ")}`);
  }
  if (forbiddenMaps.length > 0) {
    failures.push(`${pkg.name}: npm pack includes source maps: ${forbiddenMaps.slice(0, 5).join(", ")}`);
  }
  if (manifestFiles.length === 0) {
    failures.push(`${pkg.name}: npm pack should include a built manifest/catalog entry point`);
  }
}

function readBudget(pkg, key, fallback) {
  const budgets = pkg.packageJson.cognidesk?.packageSizeBudgetBytes;
  const value = budgets?.[key];
  return Number.isInteger(value) && value > 0 ? value : fallback;
}

function publicExportEntries(pkg) {
  const exportsField = pkg.packageJson.exports;
  if (exportsField === undefined) {
    return [{
      packageDir: pkg.dir,
      packageName: pkg.name,
      specifier: pkg.name,
      subpath: ".",
      targets: [pkg.packageJson.main, pkg.packageJson.types].filter(Boolean),
    }];
  }

  const exportMap = isSubpathExportMap(exportsField) ? exportsField : { ".": exportsField };
  const entries = [];

  for (const [subpath, value] of Object.entries(exportMap)) {
    if (subpath === "./package.json" || subpath.includes("*")) continue;
    if (subpath !== "." && !subpath.startsWith("./")) continue;

    entries.push({
      packageDir: pkg.dir,
      packageName: pkg.name,
      specifier: subpath === "." ? pkg.name : `${pkg.name}/${subpath.slice(2)}`,
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
    && Object.keys(value).some((key) => key === "." || key.startsWith("./"));
}

function collectExportTargets(value) {
  if (typeof value === "string") {
    return value.startsWith(".") ? [value] : [];
  }
  if (Array.isArray(value)) return value.flatMap(collectExportTargets);
  if (typeof value === "object" && value !== null) {
    return Object.values(value).flatMap(collectExportTargets);
  }
  return [];
}

function checkExportTargets(pkg, entries) {
  for (const entry of entries) {
    for (const target of entry.targets) {
      const absoluteTarget = path.resolve(pkg.dir, target);
      if (!existsSync(absoluteTarget)) {
        failures.push(`${entry.specifier}: missing built export target ${path.relative(repoRoot, absoluteTarget)}`);
      }
    }
  }
}

function manifestOnlyExportEntries(pkg, entries) {
  const manifestEntries = entries.filter((entry) =>
    entry.subpath === "."
      ? pkg.packageJson.cognidesk?.rootExport === "manifest-only"
      : /(?:^|\/)(manifest|catalog|metadata|provider-manifest|provider-catalog)$/.test(entry.subpath.slice(2))
  );

  if (Array.isArray(pkg.packageJson.cognidesk?.manifestOnlyExports)) {
    const explicit = new Set(pkg.packageJson.cognidesk.manifestOnlyExports);
    for (const entry of entries) {
      if (explicit.has(entry.subpath) && !manifestEntries.includes(entry)) {
        manifestEntries.push(entry);
      }
    }
  }

  return manifestEntries;
}

async function runTempProjectImportSmoke(pkg, specifiers) {
  const tempRoot = await tempProject();
  try {
    await writeFile(
      path.join(tempRoot, "smoke-imports.mjs"),
      `const specifiers = ${JSON.stringify(specifiers, null, 2)};\nfor (const specifier of specifiers) await import(specifier);\nconsole.log(\`Imported \${specifiers.length} manifest-only provider export(s).\`);\n`,
    );
    const result = spawnSync(process.execPath, ["smoke-imports.mjs"], {
      cwd: tempRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    if (result.status !== 0) {
      failures.push(`${pkg.name}: temp-project Node import smoke failed\n${indent(result.stderr || result.stdout)}`);
    }
  } finally {
    await rm(tempRoot, { force: true, recursive: true });
  }
}

async function runTempProjectTypeSmoke(pkg, specifiers) {
  const tempRoot = await tempProject();
  try {
    await writeFile(path.join(tempRoot, "tsconfig.json"), JSON.stringify({
      compilerOptions: {
        strict: true,
        target: "ES2022",
        module: "NodeNext",
        moduleResolution: "NodeNext",
        skipLibCheck: true,
        noEmit: true,
      },
      include: ["index.ts"],
    }, null, 2));
    await writeFile(
      path.join(tempRoot, "index.ts"),
      specifiers.map((specifier, index) => `import type * as provider${index} from "${specifier}";\ntype Provider${index} = typeof provider${index};`).join("\n"),
    );

    const tsc = path.join(repoRoot, "node_modules", "typescript", "bin", "tsc");
    const result = spawnSync(process.execPath, [tsc, "-p", "tsconfig.json"], {
      cwd: tempRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    if (result.status !== 0) {
      failures.push(`${pkg.name}: temp-project type declaration smoke failed\n${indent(result.stdout || result.stderr)}`);
    }

    await checkDeclarationBudgets(pkg);
  } finally {
    await rm(tempRoot, { force: true, recursive: true });
  }
}

async function checkDeclarationBudgets(pkg) {
  const budget = readBudget(pkg, "declarationFileBytes", defaultDeclarationFileBudgetBytes);
  const distDir = path.join(pkg.dir, "dist");
  if (!existsSync(distDir)) return;

  for (const file of await walk(distDir)) {
    if (!file.endsWith(".d.ts")) continue;
    const bytes = (await stat(file)).size;
    if (bytes > budget) {
      failures.push(`${pkg.name}: declaration ${path.relative(repoRoot, file)} is ${formatBytes(bytes)}, above ${formatBytes(budget)}`);
    }
  }
}

async function tempProject() {
  const tempRoot = await mkdtemp(path.join(tmpdir(), "cognidesk-provider-package-smoke-"));
  await mkdir(path.join(tempRoot, "node_modules"), { recursive: true });

  for (const workspace of workspaces) {
    const linkPath = path.join(tempRoot, "node_modules", ...workspace.name.split("/"));
    await mkdir(path.dirname(linkPath), { recursive: true });
    await symlink(workspace.dir, linkPath, "dir");
  }

  return tempRoot;
}

async function walk(root) {
  const entries = await readdir(root, { withFileTypes: true }).catch((error) => {
    if (error?.code === "ENOENT") return [];
    throw error;
  });
  const files = [];

  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === "build") continue;
    const file = path.join(root, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(file));
    } else {
      files.push(file);
    }
  }

  return files;
}

function indent(value) {
  return String(value).split(/\r?\n/).filter(Boolean).map((line) => `    ${line}`).join("\n");
}

function formatBytes(bytes) {
  return `${(bytes / oneMiB).toFixed(2)} MiB`;
}
