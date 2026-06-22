import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
  createIntegrationRuntimeRegistry,
  deriveStudioIntegrationStates,
  getIntegrationCatalogEntry,
  integrationCatalog,
  listIntegrationCatalogEntries,
} from "../src/index.js";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

describe("integration catalog", () => {
  it("lists metadata-only catalog entries with normalized coverage and readiness fields", () => {
    expect(integrationCatalog.length).toBeGreaterThan(0);
    expect(integrationCatalog.every((entry) => entry.packageName && entry.implementation.sdkPackage)).toBe(true);
    expect(integrationCatalog.every((entry) => entry.adapterCoverage.scope && entry.implementation.documentationPath)).toBe(true);
    expect(integrationCatalog.every((entry) => Array.isArray(entry.readiness.credentialRequirements))).toBe(true);
    expect(listIntegrationCatalogEntries({ category: "voice" }).length).toBeGreaterThan(0);
  });

  it("separates catalog availability from target installation and readiness", () => {
    const twilio = getIntegrationCatalogEntry("voice.twilio");
    if (!twilio) throw new Error("voice.twilio catalog entry is missing");

    const states = deriveStudioIntegrationStates({
      catalog: [twilio],
      targetProviderPackages: [{ id: "voice.twilio", packageName: "@cognidesk/integrations" }],
      providerReadiness: [{ providerPackageId: "voice.twilio", status: "ready" }],
      credentialStatuses: [{ providerPackageId: "voice.twilio", requirementId: "twilio-account", state: "configured" }],
    });

    expect(states[0]).toMatchObject({
      providerPackageId: "voice.twilio",
      catalog: { state: "available" },
      installation: { state: "installed" },
      readiness: { state: "ready" },
    });
  });

  it("keeps runtime loading explicit and app supplied", async () => {
    const registry = createIntegrationRuntimeRegistry();
    registry.register({
      id: "voice.twilio",
      async load() {
        return { twilioVoiceProviderManifest: { id: "voice.twilio" } };
      },
    });

    await expect(registry.loadManifest("voice.twilio")).resolves.toEqual({ id: "voice.twilio" });
    await expect(registry.load("email.gmail")).rejects.toThrow("not registered");
  });

  it("does not import provider runtime packages from catalog source or build output", async () => {
    const files = [
      "src/index.ts",
      "src/catalog.ts",
      "src/catalog.generated.ts",
      "src/runtime-registration.ts",
      "src/studio.ts",
      "dist/index.js",
      "dist/chunk-*.js",
    ];
    const contents = await Promise.all(files.map((file) => readPossiblyGlobbed(file)));
    const joined = contents.join("\n");

    expect(joined).not.toMatch(/from\s+["']@cognidesk\/integrations/);
    expect(joined).not.toMatch(/import\(\s*["']@cognidesk\/integrations/);
    expect(joined).not.toMatch(/from\s+["']@cognidesk\/core/);
    expect(joined).not.toMatch(/from\s+["']openai/);
  });
});

async function readPossiblyGlobbed(file: string): Promise<string> {
  if (!file.includes("*")) return readFile(path.join(packageRoot, file), "utf8").catch(() => "");
  const [prefix = "", suffix = ""] = file.split("*");
  const directory = path.dirname(path.join(packageRoot, prefix));
  const basenamePrefix = path.basename(prefix);
  const entries = await import("node:fs/promises").then((fs) => fs.readdir(directory)).catch(() => []);
  const matches = entries.filter((entry) => entry.startsWith(basenamePrefix) && entry.endsWith(suffix));
  const contents = await Promise.all(matches.map((entry) => readFile(path.join(directory, entry), "utf8")));
  return contents.join("\n");
}
