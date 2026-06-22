import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import {
  cognideskCobrowsingProviderManifest,
  createCognideskCobrowsingIntegration,
  createInMemoryCobrowsingSessionStore,
  createCobrowsingSessionClient,
} from "../src/index.js";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
type OperationRunner = (alias: string, input: unknown) => Promise<unknown>;

describe("@cognidesk/integration-cobrowsing-cognidesk", () => {
  it("binds local cobrowsing operations to executable handlers", async () => {
    const client = createCobrowsingSessionClient({
      store: createInMemoryCobrowsingSessionStore(),
      policy: {
        allowedOrigins: ["https://app.example.com"],
        consent: { mode: "required" },
        recording: { mode: "disabled" },
        redaction: { enabled: true },
      },
      idFactory: () => "session_1",
      now: () => new Date("2026-06-21T00:00:00.000Z"),
    });
    const integration = createCognideskCobrowsingIntegration({ client });

    expect(assertIntegrationConformance(integration)).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
    });
    await expect((integration.run as unknown as OperationRunner)("cognidesk.cobrowsing.session.create", {
      origin: "https://app.example.com",
    })).resolves.toMatchObject({ id: "session_1", status: "created" });
  });

  it("keeps the manifest subpath runtime-light", async () => {
    const source = await readFile(resolve(packageRoot, "src/manifest.ts"), "utf8");
    const packageJson = JSON.parse(await readFile(resolve(packageRoot, "package.json"), "utf8")) as {
      dependencies?: Record<string, string>;
    };

    expect(cognideskCobrowsingProviderManifest.packageName).toBe("@cognidesk/integration-cobrowsing-cognidesk");
    expect(source).not.toContain("node:crypto");
    expect(source).not.toContain("./client");
    expect(source).not.toContain("./webhooks");
    expect(packageJson.dependencies).not.toHaveProperty("drachtio-srf");
    expect(packageJson.dependencies).not.toHaveProperty("imapflow");
  });
});
