import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const repoRoot = path.resolve(fileURLToPath(new URL("../../..", import.meta.url)));
const integrationsSrc = path.join(repoRoot, "packages", "integrations", "src");
const splitIntegrationsRoot = path.join(repoRoot, "integrations");
const matrixPath = path.join(repoRoot, "docs", "provider-migration-matrix.md");
const matrixStart = "<!-- provider-migration-matrix:start -->";
const matrixEnd = "<!-- provider-migration-matrix:end -->";
const nonProviderDirs = new Set(["category-profiles", "internal", "provider-catalog"]);
const decisions = new Set([
  "official-sdk",
  "generated-support-slice",
  "direct-http-support-slice",
  "local-protocol",
  "delete-not-migrated",
]);

interface MatrixRow {
  provider: string;
  currentEvidence: string;
  decision: string;
  targetPackage: string;
  notes: string;
}

describe("provider migration matrix", () => {
  it("records one migration decision for every current provider directory", async () => {
    const providers = await currentProviderDirs();
    const rows = parseMatrixRows(await readFile(matrixPath, "utf8"));
    const rowProviders = rows.map((row) => row.provider);

    expect(duplicateValues(rowProviders)).toEqual([]);
    expect(rowProviders.sort()).toEqual(providers.sort());

    const invalidRows = rows.filter((row) => !decisions.has(row.decision));
    expect(invalidRows).toEqual([]);

    const incompleteRows = rows.filter((row) =>
      row.currentEvidence.length === 0
      || row.targetPackage.length === 0
      || row.notes.length === 0
    );
    expect(incompleteRows).toEqual([]);
  });

  it("keeps category-spanning providers split by category package", async () => {
    const rows = parseMatrixRows(await readFile(matrixPath, "utf8"));
    const byProvider = new Map(rows.map((row) => [row.provider, row]));

    expect(byProvider.get("sms/twilio")?.targetPackage).toBe("@cognidesk/integration-sms-twilio");
    expect(byProvider.get("voice/twilio")?.targetPackage).toBe("@cognidesk/integration-voice-twilio");
    expect(byProvider.get("contact-center/zoom")?.targetPackage).toBe("@cognidesk/integration-contact-center-zoom");
    expect(byProvider.get("video/zoom")?.targetPackage).toBe("@cognidesk/integration-video-zoom");
    expect(byProvider.get("sms/twilio")?.targetPackage).not.toBe(byProvider.get("voice/twilio")?.targetPackage);
    expect(byProvider.get("contact-center/zoom")?.targetPackage).not.toBe(byProvider.get("video/zoom")?.targetPackage);
  });

  it("documents the dependency gate and no-compatibility-reexport policy", async () => {
    const source = await readFile(matrixPath, "utf8");

    expect(source).toContain("#20 nested provider workspaces");
    expect(source).toContain("#21 integration kit");
    expect(source).toContain("#23 Gmail reference");
    expect(source).toContain("#24 Microsoft Graph reference");
    expect(source).toContain("#25 Slack and Discord reference");
    expect(source).toContain("Do not add compatibility re-exports");
  });
});

async function currentProviderDirs() {
  const providers = new Set<string>();
  for (const category of await readdir(integrationsSrc, { withFileTypes: true })) {
    if (!category.isDirectory() || nonProviderDirs.has(category.name)) continue;
    const categoryDir = path.join(integrationsSrc, category.name);
    for (const provider of await readdir(categoryDir, { withFileTypes: true })) {
      if (provider.isDirectory()) providers.add(`${category.name}/${provider.name}`);
    }
  }
  for (const category of await readdir(splitIntegrationsRoot, { withFileTypes: true })) {
    if (!category.isDirectory()) continue;
    const categoryDir = path.join(splitIntegrationsRoot, category.name);
    for (const provider of await readdir(categoryDir, { withFileTypes: true })) {
      if (provider.isDirectory()) providers.add(`${category.name}/${provider.name}`);
    }
  }
  return [...providers];
}

function parseMatrixRows(source: string): MatrixRow[] {
  const start = source.indexOf(matrixStart);
  const end = source.indexOf(matrixEnd);
  expect(start).toBeGreaterThanOrEqual(0);
  expect(end).toBeGreaterThan(start);

  return source
    .slice(start + matrixStart.length, end)
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
      expect(cells).toHaveLength(5);
      const [provider, currentEvidence, decision, targetPackage, notes] = cells;
      return {
        provider: provider ?? "",
        currentEvidence: currentEvidence ?? "",
        decision: decision ?? "",
        targetPackage: targetPackage ?? "",
        notes: notes ?? "",
      };
    });
}

function stripMarkdownCode(value: string) {
  return value.replace(/^`|`$/g, "");
}

function duplicateValues(values: readonly string[]) {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }
  return [...duplicates].sort();
}
