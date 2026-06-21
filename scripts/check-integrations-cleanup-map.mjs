#!/usr/bin/env node
import { existsSync } from "node:fs";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const legacySrcDir = path.join(repoRoot, "packages", "integrations", "src");
const cleanupMapPath = path.join(repoRoot, "docs", "integrations-monolith-cleanup.md");
const matrixPath = path.join(repoRoot, "docs", "provider-migration-matrix.md");
const cleanupStart = "<!-- integrations-cleanup-map:start -->";
const cleanupEnd = "<!-- integrations-cleanup-map:end -->";
const matrixStart = "<!-- provider-migration-matrix:start -->";
const matrixEnd = "<!-- provider-migration-matrix:end -->";
const nonProviderDirs = new Set(["category-profiles", "internal", "provider-catalog"]);
const requiredCleanupPhrases = [
  "packages/integration-catalog/src/catalog.generated.ts",
  "packages/integrations/src/provider-catalog/runtime-loaders.generated.ts",
  "website/guides/provider-integrations-catalog.md",
  "scripts/check-integration-package-architecture.test.mjs",
  "pnpm release:verify-packages -- --fail-size-budget",
  "f2c6de7",
  "abcce55",
  "19baf7c",
  "a1571b7",
  "@cognidesk/contact-center-8x8",
  "@cognidesk/contact-center-aircall",
  "@cognidesk/contact-center-five9",
  "@cognidesk/contact-center-genesys-engage",
  "@cognidesk/contact-center-genesys-pureconnect",
  "@cognidesk/contact-center-nextiva",
  "@cognidesk/contact-center-nice-cxone",
  "@cognidesk/contact-center-talkdesk",
  "@cognidesk/contact-center-zoom",
  "@cognidesk/cobrowsing-cognidesk",
  "@cognidesk/community-forum",
  "@cognidesk/form-cognidesk",
  "@cognidesk/help-center-cognidesk",
  "@cognidesk/voice-sip",
  "#45",
  "SAP Cloud SDK",
  "@cognidesk/{category}-{provider}",
  "@cognidesk/integration-*",
];

const currentProviders = await currentProviderDirs();
const cleanupSource = await readFile(cleanupMapPath, "utf8");
const cleanupRows = parseTableRows(cleanupSource, cleanupStart, cleanupEnd, 8)
  .map(([provider, issue, targetPackage, legacyDir, oldImport, decision, generatedSurface, removalGate]) => ({
    provider,
    issue,
    targetPackage,
    legacyDir,
    oldImport,
    decision,
    generatedSurface,
    removalGate,
  }));
const matrixRows = new Map(
  parseTableRows(await readFile(matrixPath, "utf8"), matrixStart, matrixEnd, 5)
    .map(([provider, currentEvidence, decision, targetPackage, notes]) => [
      provider,
      { currentEvidence, decision, targetPackage, notes },
    ]),
);

const failures = [];
const cleanupByProvider = new Map();

for (const phrase of requiredCleanupPhrases) {
  if (!cleanupSource.includes(phrase)) {
    failures.push(`docs/integrations-monolith-cleanup.md: missing required cleanup checkpoint '${phrase}'`);
  }
}

for (const row of cleanupRows) {
  if (cleanupByProvider.has(row.provider)) {
    failures.push(`docs/integrations-monolith-cleanup.md: duplicate cleanup row for ${row.provider}`);
  }
  cleanupByProvider.set(row.provider, row);
}

for (const provider of currentProviders) {
  const row = cleanupByProvider.get(provider);
  const matrix = matrixRows.get(provider);

  if (!row) {
    failures.push(`docs/integrations-monolith-cleanup.md: missing cleanup row for current legacy provider ${provider}`);
    continue;
  }

  if (!matrix) {
    failures.push(`docs/provider-migration-matrix.md: missing matrix row for current legacy provider ${provider}`);
    continue;
  }

  const expectedLegacyDir = `packages/integrations/src/${provider}`;
  const expectedOldImport = `@cognidesk/integrations/${provider}`;
  if (row.legacyDir !== expectedLegacyDir) {
    failures.push(`${provider}: cleanup legacy dir is ${row.legacyDir}, expected ${expectedLegacyDir}`);
  }
  if (row.oldImport !== expectedOldImport) {
    failures.push(`${provider}: cleanup old import is ${row.oldImport}, expected ${expectedOldImport}`);
  }
  if (row.targetPackage !== matrix.targetPackage) {
    failures.push(`${provider}: cleanup target package ${row.targetPackage} does not match matrix ${matrix.targetPackage}`);
  }
  if (row.decision !== matrix.decision) {
    failures.push(`${provider}: cleanup decision ${row.decision} does not match matrix ${matrix.decision}`);
  }
  if (!/^#\d+$/.test(row.issue)) {
    failures.push(`${provider}: cleanup issue must be a GitHub issue reference such as #29`);
  }
  if (row.generatedSurface.length === 0 || row.removalGate.length === 0) {
    failures.push(`${provider}: cleanup row must describe generated surface and removal gate`);
  }
}

if (failures.length > 0) {
  console.error("Integration monolith cleanup map check failed:");
  for (const failure of failures) console.error(`  ${failure}`);
  process.exit(1);
}

console.log("Integration monolith cleanup map check passed:");
console.log(`  current legacy providers covered: ${currentProviders.length}`);
console.log(`  cleanup rows recorded: ${cleanupRows.length}`);

async function currentProviderDirs() {
  if (!existsSync(legacySrcDir)) return [];

  const providers = [];
  for (const category of await readdir(legacySrcDir, { withFileTypes: true })) {
    if (!category.isDirectory() || nonProviderDirs.has(category.name)) continue;

    const categoryDir = path.join(legacySrcDir, category.name);
    for (const provider of await readdir(categoryDir, { withFileTypes: true })) {
      if (provider.isDirectory()) providers.push(`${category.name}/${provider.name}`);
    }
  }
  return providers.sort((left, right) => left.localeCompare(right));
}

function parseTableRows(source, startMarker, endMarker, expectedCells) {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker);
  if (start < 0 || end <= start) {
    throw new Error(`Unable to find table markers ${startMarker} and ${endMarker}.`);
  }

  return source
    .slice(start + startMarker.length, end)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|"))
    .filter((line) => !line.includes("---"))
    .filter((line) => !line.startsWith("| Provider |"))
    .map((line) => {
      const cells = line
        .slice(1, -1)
        .split("|")
        .map((cell) => stripMarkdownCode(cell.trim()));
      if (cells.length !== expectedCells) {
        throw new Error(`Expected ${expectedCells} cells in table row, got ${cells.length}: ${line}`);
      }
      return cells;
    });
}

function stripMarkdownCode(value) {
  return value.replace(/^`|`$/g, "");
}
