import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import {
  cognideskFormsProviderManifest as cognideskFormsProviderManifestFromRoot,
  createCognideskFormsIntegration,
} from "../src/index.js";
import { cognideskFormsProviderManifest } from "../src/manifest.js";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
type OperationRunner = (alias: string, input: unknown) => Promise<unknown>;

function operationAliases(manifest: { operations?: readonly { alias: string }[] }) {
  return manifest.operations?.map((operation) => operation.alias) ?? [];
}

describe("@cognidesk/integration-form-cognidesk", () => {
  it("binds form operations to executable handlers", async () => {
    const integration = createCognideskFormsIntegration();

    expect(assertIntegrationConformance(integration)).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
    });
    await expect((integration.run as unknown as OperationRunner)("cognidesk.form.definition.validate", {
      id: "contact",
      fields: [{ id: "email", type: "email", required: true }],
    })).resolves.toMatchObject({ id: "contact", name: "contact" });
  });

  it("exports the same operation aliases from root and manifest subpath", () => {
    expect(operationAliases(cognideskFormsProviderManifestFromRoot)).toEqual(operationAliases(cognideskFormsProviderManifest));
    expect(operationAliases(cognideskFormsProviderManifestFromRoot)).toEqual([
      "cognidesk.form.definition.validate",
      "cognidesk.form.submission.normalize",
      "cognidesk.form.webhook.parse",
    ]);
  });

  it("keeps the manifest subpath runtime-light", async () => {
    const source = await readFile(resolve(packageRoot, "src/manifest.ts"), "utf8");

    expect(cognideskFormsProviderManifest.packageName).toBe("@cognidesk/integration-form-cognidesk");
    expect(source).not.toContain("node:crypto");
    expect(source).not.toContain("./index");
    expect(source).not.toContain("fetch");
  });
});
