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
    packageName: "@cognidesk/integration-voice-aws-speech",
    provider: "aws-speech",
    integrationName: "AWS Speech Integration",
  },
  {
    dir: "integrations/voice/azure-speech",
    packageName: "@cognidesk/integration-voice-azure-speech",
    provider: "azure-speech",
    integrationName: "Azure AI Speech Integration",
  },
  {
    dir: "integrations/voice/google-speech",
    packageName: "@cognidesk/integration-voice-google-speech",
    provider: "google-speech",
    integrationName: "Google Cloud Speech Integration",
  },
  {
    dir: "integrations/voice/openai",
    packageName: "@cognidesk/integration-voice-openai",
    provider: "openai",
    integrationName: "OpenAI Realtime Voice Integration",
  },
] as const;

const ownedVoiceManifestFiles = splitVoiceProviderPackages.map(
  (pkg) => `${pkg.dir}/src/manifest.ts`,
);

const providerSdkPackagePattern = String.raw`(?:openai|openai/[^"']+|@aws-sdk/[^"']+|microsoft-cognitiveservices-speech-sdk|@google-cloud/[^"']+)`;
const runtimeProviderImportPattern = new RegExp(
  String.raw`(?:\bfrom\s+["']${providerSdkPackagePattern}["']`
    + String.raw`|\bimport\s+["']${providerSdkPackagePattern}["']`
    + String.raw`|\bimport\s*\(\s*["']${providerSdkPackagePattern}["']\s*\)`
    + String.raw`|\brequire\s*\(\s*["']${providerSdkPackagePattern}["']\s*\))`,
);

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

  it("detects provider SDK imports across common JavaScript import forms", () => {
    expect('import OpenAI from "openai";').toMatch(runtimeProviderImportPattern);
    expect('import "@aws-sdk/client-polly";').toMatch(runtimeProviderImportPattern);
    expect('await import("@google-cloud/speech");').toMatch(runtimeProviderImportPattern);
    expect('const sdk = require("microsoft-cognitiveservices-speech-sdk");').toMatch(runtimeProviderImportPattern);
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

    expect(migrationDoc).toContain("@cognidesk/integration-voice-aws-speech");
    expect(migrationDoc).toContain("@cognidesk/integration-voice-azure-speech");
    expect(migrationDoc).toContain("@cognidesk/integration-voice-google-speech");
    expect(migrationDoc).toContain("@cognidesk/integration-voice-openai");
    expect(migrationDoc).toContain("Dedicated GitHub Issue Body");
  });
});
