import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import {
  cognideskHelpCenterProviderManifest as cognideskHelpCenterProviderManifestFromRoot,
  createCognideskHelpCenterIntegration,
} from "../src/index.js";
import { cognideskHelpCenterProviderManifest } from "../src/manifest.js";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
type OperationRunner = (alias: string, input: unknown) => Promise<unknown>;

function operationAliases(manifest: { operations?: readonly { alias: string }[] }) {
  return manifest.operations?.map((operation) => operation.alias) ?? [];
}

describe("@cognidesk/integration-help-center-cognidesk", () => {
  it("binds help-center operations to executable handlers", async () => {
    const integration = createCognideskHelpCenterIntegration({
      source: {
        id: "local-docs",
        type: "local",
        articles: [{ id: "reset", title: "Reset password", body: "Use account settings." }],
      },
    });

    expect(assertIntegrationConformance(integration)).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
    });
    await expect((integration.run as unknown as OperationRunner)("cognidesk.help-center.article.search", {
      query: "settings",
    })).resolves.toMatchObject({ articles: [{ id: "reset" }] });
  });

  it("exports the same operation aliases from root and manifest subpath", () => {
    expect(operationAliases(cognideskHelpCenterProviderManifestFromRoot)).toEqual(
      operationAliases(cognideskHelpCenterProviderManifest),
    );
    expect(operationAliases(cognideskHelpCenterProviderManifestFromRoot)).toEqual([
      "cognidesk.help-center.article.search",
      "cognidesk.help-center.article.fetch",
      "cognidesk.help-center.webhook.parse",
    ]);
  });

  it("keeps the manifest subpath runtime-light", async () => {
    const source = await readFile(resolve(packageRoot, "src/manifest.ts"), "utf8");

    expect(cognideskHelpCenterProviderManifest.packageName).toBe("@cognidesk/integration-help-center-cognidesk");
    expect(source).not.toContain("node:crypto");
    expect(source).not.toContain("./index");
    expect(source).not.toContain("fetch(");
  });

  it("ships a shared provider REST adapter for HTTP help-center sources", async () => {
    const source = await readFile(resolve(packageRoot, "src/core.ts"), "utf8");

    expect(source).toContain("providerJsonRequest");
    expect(source).toContain("typeof fetch");
    expect(source).toContain("baseUrl");
    expect(source).not.toContain("helpCenterRequest");
    expect(source).not.toContain("joinUrl");
  });

  it("documents the internal help-center runtime without an external provider SDK", async () => {
    const packageJson = JSON.parse(await readFile(resolve(packageRoot, "package.json"), "utf8")) as {
      dependencies?: Record<string, string>;
      exports?: Record<string, { import?: string; types?: string }>;
      scripts?: Record<string, string>;
      cognidesk?: {
        providerPackage?: boolean;
        release?: string;
        manifestOnlyExports?: string[];
      };
    };
    const integration = createCognideskHelpCenterIntegration({
      source: {
        id: "local-docs",
        type: "local",
        articles: [{ id: "reset", title: "Reset password" }],
      },
    });

    expect(cognideskHelpCenterProviderManifest.metadata).toMatchObject({
      implementation: {
        strategy: "local-protocol",
        sdkPackage: "@cognidesk/integration-help-center-cognidesk",
        runtimePackage: "@cognidesk/integration-help-center-cognidesk",
        manifestImport: "no-sdk-client-initialization",
        externalProviderSdk: "not-applicable-internal-provider",
        defaultClientPolicy: "built-in-http-source-when-base-url-configured",
        typedClientOverride: "HelpCenterProviderClient",
      },
    });
    expect(integration.metadata).toMatchObject({
      implementationStrategy: "local-source-or-host-injected-help-center-client",
      providerClient: "HelpCenterProviderClient",
    });
    expect(Object.keys(packageJson.dependencies ?? {}).sort()).toEqual([
      "@cognidesk/core",
      "@cognidesk/integration-kit",
    ]);
    expect(packageJson.cognidesk).toMatchObject({
      providerPackage: true,
      release: "independent-provider",
      manifestOnlyExports: ["./manifest"],
    });
    expect(packageJson.exports?.["./runtime"]).toMatchObject({
      import: "./dist/runtime.js",
      types: "./dist/runtime.d.ts",
    });
    expect(packageJson.scripts?.build).toContain("src/runtime.ts");
  });
});
