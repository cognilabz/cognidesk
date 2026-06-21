import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const testDir = dirname(fileURLToPath(import.meta.url));
const packageRoot = join(testDir, "../..");
const workspaceRoot = join(packageRoot, "../..");

const splitVoiceProviderPackages = [
  {
    dir: "integrations/voice/aws-speech",
    packageName: "@cognidesk/voice-aws-speech",
    provider: "aws-speech",
    integrationName: "AWS Speech Integration",
  },
  {
    dir: "integrations/voice/azure-speech",
    packageName: "@cognidesk/voice-azure-speech",
    provider: "azure-speech",
    integrationName: "Azure AI Speech Integration",
  },
  {
    dir: "integrations/voice/google-speech",
    packageName: "@cognidesk/voice-google-speech",
    provider: "google-speech",
    integrationName: "Google Cloud Speech Integration",
  },
  {
    dir: "integrations/voice/openai",
    packageName: "@cognidesk/voice-openai",
    provider: "openai",
    integrationName: "OpenAI Realtime Voice Integration",
  },
] as const;

const ownedVoiceManifestFiles = splitVoiceProviderPackages.map(
  (pkg) => `${pkg.dir}/src/manifest.ts`,
);

const runtimeProviderImportPattern = /from\s+["'](?:openai|openai\/[^"']+|@aws-sdk\/[^"']+|microsoft-cognitiveservices-speech-sdk|@google-cloud\/[^"']+)["']/;

describe("voice SDK-first migration guardrails", () => {
  it("records the reconciled package split prerequisites", async () => {
    const workspaceYaml = await readFile(join(workspaceRoot, "pnpm-workspace.yaml"), "utf8");

    expect(workspaceYaml).toContain("integrations/*/*");
    await expect(readFile(join(workspaceRoot, "packages/integration-kit/package.json"), "utf8"))
      .resolves.toContain("@cognidesk/integration-kit");
  });

  it("keeps owned voice manifest-only paths free of provider SDK runtime imports", async () => {
    for (const relativePath of ownedVoiceManifestFiles) {
      const source = await readFile(join(workspaceRoot, relativePath), "utf8");

      expect(source, `${relativePath} should not import provider SDK runtime packages`)
        .not.toMatch(runtimeProviderImportPattern);
    }
  });

  it("keeps voice integration package names and entry points visible", async () => {
    for (const pkg of splitVoiceProviderPackages) {
      const packageJson = JSON.parse(await readFile(join(workspaceRoot, pkg.dir, "package.json"), "utf8"));
      const manifestSource = await readFile(join(workspaceRoot, pkg.dir, "src/manifest.ts"), "utf8");

      expect(packageJson.name).toBe(pkg.packageName);
      expect(packageJson.cognidesk).toMatchObject({
        kind: "provider-package",
        providerPackage: true,
        release: "independent-provider",
        category: "voice",
        provider: pkg.provider,
      });
      expect(packageJson.exports).toHaveProperty("./manifest");
      expect(packageJson.exports).toHaveProperty("./runtime");
      expect(manifestSource).toContain(`integrationName: "${pkg.integrationName}"`);
      expect(manifestSource).toContain(`integrationPackageName: "${pkg.packageName}"`);
      expect(manifestSource).toContain(`manifest: "${pkg.packageName}/manifest"`);
      expect(manifestSource).toContain(`runtime: "${pkg.packageName}/runtime"`);
    }
  });

  it("keeps the voice SDK migration issue body in the migration artifact", async () => {
    const migrationDoc = await readFile(
      join(workspaceRoot, "docs/integrations-voice-sdk-first-migration.md"),
      "utf8",
    );

    expect(migrationDoc).toContain("@cognidesk/voice-aws-speech");
    expect(migrationDoc).toContain("@cognidesk/voice-azure-speech");
    expect(migrationDoc).toContain("@cognidesk/voice-google-speech");
    expect(migrationDoc).toContain("@cognidesk/voice-openai");
    expect(migrationDoc).toContain("Dedicated GitHub Issue Body");
  });
});
