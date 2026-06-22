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
    await expect((integration.run as unknown as OperationRunner)("cognidesk.helpCenter.article.search", {
      query: "settings",
    })).resolves.toMatchObject({ articles: [{ id: "reset" }] });
  });

  it("exports the same operation aliases from root and manifest subpath", () => {
    expect(operationAliases(cognideskHelpCenterProviderManifestFromRoot)).toEqual(
      operationAliases(cognideskHelpCenterProviderManifest),
    );
    expect(operationAliases(cognideskHelpCenterProviderManifestFromRoot)).toEqual([
      "cognidesk.helpCenter.article.search",
      "cognidesk.helpCenter.article.fetch",
      "cognidesk.helpCenter.webhook.parse",
    ]);
  });

  it("keeps the manifest subpath runtime-light", async () => {
    const source = await readFile(resolve(packageRoot, "src/manifest.ts"), "utf8");

    expect(cognideskHelpCenterProviderManifest.packageName).toBe("@cognidesk/integration-help-center-cognidesk");
    expect(source).not.toContain("node:crypto");
    expect(source).not.toContain("./index");
    expect(source).not.toContain("fetch(");
  });
});
