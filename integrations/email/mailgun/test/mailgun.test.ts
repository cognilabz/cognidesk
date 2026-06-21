import { createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createMailgunEmailIntegration,
  mailgunEmailCredentialStatuses,
  mailgunEmailProviderManifest,
  parseMailgunWebhook,
  verifyMailgunWebhookSignature,
  type MailgunRawClient,
} from "../src/index.js";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

describe("@cognidesk/integration-email-mailgun", () => {
  it("keeps manifest imports metadata-only", async () => {
    const source = await readFile(path.join(packageRoot, "src", "manifest.ts"), "utf8");
    expect(source).not.toMatch(/from ["']mailgun\.js["']/);
    expect(mailgunEmailProviderManifest.packageName).toBe("@cognidesk/integration-email-mailgun");
    expect(mailgunEmailProviderManifest.metadata?.implementation).toMatchObject({
      manifestImport: "no-sdk-client-initialization",
    });
  });

  it("imports /manifest without loading mailgun.js", async () => {
    vi.resetModules();
    vi.doMock("mailgun.js", () => {
      throw new Error("manifest imported mailgun.js");
    });

    const { mailgunEmailProviderManifest: manifest } = await import("../src/manifest.js");

    expect(manifest.packageName).toBe("@cognidesk/integration-email-mailgun");
    vi.doUnmock("mailgun.js");
  });

  it("passes provider conformance for the split package integration operations", async () => {
    const integration = createMailgunEmailIntegration({
      apiKey: "key",
      domain: "mg.example.test",
      rawClient: createMailgunRawClientStub(),
    });
    const report = assertIntegrationConformance({
      manifest: mailgunEmailProviderManifest,
      operations: integration.operations,
    });

    expect(report).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
    expect(mailgunEmailCredentialStatuses({
      apiKeyConfigured: true,
      domain: "mg.example.test",
      webhookSigningKeyConfigured: true,
    }).every((status) => status.state === "configured")).toBe(true);
  });

  it("binds declared operations to the official SDK raw client", async () => {
    const rawClient = createMailgunRawClientStub();
    const integration = createMailgunEmailIntegration({
      apiKey: "key",
      domain: "mg.example.test",
      rawClient,
    });

    await expect(integration.operations["email.send"]?.({
      from: "support@example.test",
      to: "customer@example.test",
      subject: "Hello",
      text: "Body",
    })).resolves.toMatchObject({ id: "<message@example.test>" });
    await integration.operations["mailgun.storedMessage.read"]?.({ storageKey: "storage-key" });

    expect(rawClient.messages.create).toHaveBeenCalledWith("mg.example.test", expect.objectContaining({
      from: "support@example.test",
      to: "customer@example.test",
    }));
    expect((rawClient.messages as unknown as { retrieveStoredEmail: ReturnType<typeof vi.fn> }).retrieveStoredEmail)
      .toHaveBeenCalledWith("mg.example.test", "storage-key");
  });

  it("binds email.receive to the Mailgun webhook parser", async () => {
    const signingKey = "signing-key";
    const timestamp = "1710000000";
    const token = "token";
    const signature = createHmac("sha256", signingKey).update(`${timestamp}${token}`).digest("hex");
    const integration = createMailgunEmailIntegration({
      apiKey: "key",
      domain: "mg.example.test",
      rawClient: createMailgunRawClientStub(),
      webhookSigningKey: signingKey,
      requireWebhookSignature: true,
    });

    await expect(integration.operations["email.receive"]?.(new Request("https://example.test", {
      method: "POST",
      body: JSON.stringify({
        signature: { timestamp, token, signature },
        "event-data": { event: "delivered", recipient: "customer@example.test" },
      }),
    }))).resolves.toMatchObject({
      verified: true,
      payload: {
        "event-data": { event: "delivered", recipient: "customer@example.test" },
      },
    });
  });

  it("verifies Mailgun webhook signatures", async () => {
    const signingKey = "signing-key";
    const timestamp = "1710000000";
    const token = "token";
    const signature = createHmac("sha256", signingKey).update(`${timestamp}${token}`).digest("hex");

    expect(verifyMailgunWebhookSignature({ timestamp, token, signature, signingKey })).toBe(true);
    await expect(parseMailgunWebhook(new Request("https://example.test", {
      method: "POST",
      body: JSON.stringify({ signature: { timestamp, token, signature }, event: "delivered" }),
    }), { signingKey, requireSignature: true })).resolves.toMatchObject({ verified: true });
  });
});

function createMailgunRawClientStub(): MailgunRawClient {
  return {
    messages: {
      create: vi.fn(async () => ({ id: "<message@example.test>" })),
      retrieveStoredEmail: vi.fn(async () => ({ subject: "Stored" })),
    },
    events: { get: vi.fn(async () => ({ items: [{ event: "delivered" }] })) },
    domains: { get: vi.fn(async () => ({ name: "mg.example.test" })) },
    webhooks: { list: vi.fn(async () => ({ webhooks: [] })) },
  } as unknown as MailgunRawClient;
}
