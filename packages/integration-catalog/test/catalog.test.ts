import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
  isIntegrationProviderReferenceAvailable,
} from "../../integrations/src/provider-catalog/references.js";
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

  it("prefers split provider package imports for migrated enterprise service clouds", () => {
    expect(getIntegrationCatalogEntry("ticketing.oracle-service")).toMatchObject({
      importPath: "@cognidesk/integration-ticketing-oracle-service/manifest",
      packageName: "@cognidesk/integration-ticketing-oracle-service",
      implementation: {
        strategy: "direct-http-support-slice",
        runtimePackage: "@cognidesk/integration-ticketing-oracle-service",
        manifestSource: "integrations/ticketing/oracle-service/src/manifest.ts",
        manifestSourceKind: "manifest-only",
      },
    });
    expect(getIntegrationCatalogEntry("ticketing.pega-customer-service")).toMatchObject({
      importPath: "@cognidesk/integration-ticketing-pega-customer-service/manifest",
      packageName: "@cognidesk/integration-ticketing-pega-customer-service",
      implementation: {
        strategy: "direct-http-support-slice",
        runtimePackage: "@cognidesk/integration-ticketing-pega-customer-service",
        manifestSource: "integrations/ticketing/pega-customer-service/src/manifest.ts",
        manifestSourceKind: "manifest-only",
      },
    });
    expect(getIntegrationCatalogEntry("ticketing.sap-service-cloud")).toMatchObject({
      importPath: "@cognidesk/integration-ticketing-sap-service-cloud/manifest",
      packageName: "@cognidesk/integration-ticketing-sap-service-cloud",
      implementation: {
        strategy: "direct-http-support-slice",
        runtimePackage: "@cognidesk/integration-ticketing-sap-service-cloud",
        manifestSource: "integrations/ticketing/sap-service-cloud/src/manifest.ts",
        manifestSourceKind: "manifest-only",
      },
    });
  });

  it("does not advertise migrated enterprise service clouds through legacy integration references", () => {
    const migratedProviders = [
      {
        id: "ticketing.oracle-service",
        importPath: "@cognidesk/integration-ticketing-oracle-service/manifest",
        packageName: "@cognidesk/integration-ticketing-oracle-service",
      },
      {
        id: "ticketing.pega-customer-service",
        importPath: "@cognidesk/integration-ticketing-pega-customer-service/manifest",
        packageName: "@cognidesk/integration-ticketing-pega-customer-service",
      },
      {
        id: "ticketing.sap-service-cloud",
        importPath: "@cognidesk/integration-ticketing-sap-service-cloud/manifest",
        packageName: "@cognidesk/integration-ticketing-sap-service-cloud",
      },
    ] as const;

    for (const provider of migratedProviders) {
      expect(isIntegrationProviderReferenceAvailable(provider.id)).toBe(false);
      expect(getIntegrationCatalogEntry(provider.id)).toMatchObject({
        importPath: provider.importPath,
        packageName: provider.packageName,
        implementation: {
          manifestSourceKind: "manifest-only",
          runtimePackage: provider.packageName,
        },
      });
    }
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
