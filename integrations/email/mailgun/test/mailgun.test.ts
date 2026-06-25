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
    expect(mailgunEmailCredentialStatuses({
      apiKeyConfigured: true,
      domain: "mg.example.test",
      requireWebhookSignature: true,
    }).find((status) => status.requirementId === "mailgun-webhook-signing-key")?.state).toBe("missing");
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
    await expect(integration.operations["email.reply.send"]?.({
      from: "support@example.test",
      to: "customer@example.test",
      subject: "Re: Hello",
      text: "Reply",
      inReplyTo: "<original@example.test>",
      references: ["<thread-root@example.test>", "<original@example.test>"],
    })).resolves.toMatchObject({ id: "<message@example.test>" });
    await integration.operations["mailgun.storedMessage.read"]?.({ storageKey: "storage-key" });

    expect(rawClient.messages.create).toHaveBeenCalledWith("mg.example.test", expect.objectContaining({
      from: "support@example.test",
      to: "customer@example.test",
    }));
    expect(rawClient.messages.create).toHaveBeenCalledWith("mg.example.test", expect.objectContaining({
      "h:In-Reply-To": "<original@example.test>",
      "h:References": "<thread-root@example.test> <original@example.test>",
    }));
    expect((rawClient.messages as unknown as { retrieveStoredEmail: ReturnType<typeof vi.fn> }).retrieveStoredEmail)
      .toHaveBeenCalledWith("mg.example.test", "storage-key");
  });

  it("creates the default runtime client through mailgun.js and binds SDK methods", async () => {
    vi.resetModules();
    const TestFormData = class TestFormData {};
    const rawClient = createMailgunRawClientStub();
    const clientFactory = vi.fn(() => rawClient);
    const MailgunConstructor = vi.fn(function MailgunMock(this: { client?: typeof clientFactory }) {
      this.client = clientFactory;
    });
    vi.doMock("mailgun.js", () => ({ default: MailgunConstructor }));

    try {
      const { createMailgunEmailIntegration } = await import("../src/index.js");
      const integration = createMailgunEmailIntegration({
        apiKey: "key",
        domain: "mg.example.test",
        region: "eu",
        formData: TestFormData,
      });

      await integration.operations["email.send"]?.({
        from: "support@example.test",
        to: "customer@example.test",
        subject: "Hello",
        text: "Body",
      });
      await integration.operations["email.deliveryStatus.read"]?.({ event: "delivered" });
      await integration.operations["mailgun.storedMessage.read"]?.({ storageKey: "storage-key" });
      await integration.operations["mailgun.domain.read"]?.();
      await integration.operations["mailgun.webhooks.list"]?.();

      expect(MailgunConstructor).toHaveBeenCalledWith(TestFormData);
      expect(clientFactory).toHaveBeenCalledWith({
        username: "api",
        key: "key",
        url: "https://api.eu.mailgun.net",
        useFetch: true,
      });
      expect(rawClient.messages.create).toHaveBeenCalledWith("mg.example.test", expect.objectContaining({
        from: "support@example.test",
        to: "customer@example.test",
      }));
      expect(rawClient.events.get).toHaveBeenCalledWith("mg.example.test", { event: "delivered" });
      expect(rawClient.messages.retrieveStoredEmail).toHaveBeenCalledWith("mg.example.test", "storage-key");
      expect(rawClient.domains.get).toHaveBeenCalledWith("mg.example.test");
      expect(rawClient.webhooks.list).toHaveBeenCalledWith("mg.example.test", {});
    } finally {
      vi.doUnmock("mailgun.js");
      vi.resetModules();
    }
  });

  it("fails closed if the mailgun.js runtime client does not expose stored-message retrieval", async () => {
    vi.resetModules();
    const rawClient = createMailgunRawClientStub();
    delete (rawClient.messages as { retrieveStoredEmail?: unknown }).retrieveStoredEmail;
    const clientFactory = vi.fn(() => rawClient);
    const MailgunConstructor = vi.fn(function MailgunMock(this: { client?: typeof clientFactory }) {
      this.client = clientFactory;
    });
    vi.doMock("mailgun.js", () => ({ default: MailgunConstructor }));

    try {
      const { createMailgunEmailClient } = await import("../src/index.js");

      expect(() => createMailgunEmailClient({
        apiKey: "key",
        domain: "mg.example.test",
      })).toThrow("mailgun.js runtime client is missing messages.retrieveStoredEmail.");
    } finally {
      vi.doUnmock("mailgun.js");
      vi.resetModules();
    }
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
    await expect(parseMailgunWebhook(new Request("https://example.test", {
      method: "POST",
      body: JSON.stringify(null),
    }), { requireSignature: true })).rejects.toThrow("payload must be a JSON object");
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
