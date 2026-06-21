import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance, createOperationHandlerStubs } from "@cognidesk/integration-kit/testing";
import {
  createPostmarkEmailIntegration,
  parsePostmarkInboundWebhook,
  postmarkEmailCredentialStatuses,
  postmarkEmailProviderManifest,
  type PostmarkRawClients,
} from "../src/index.js";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

describe("@cognidesk/email-postmark", () => {
  it("keeps manifest imports metadata-only", async () => {
    const source = await readFile(path.join(packageRoot, "src", "manifest.ts"), "utf8");
    expect(source).not.toMatch(/from ["']postmark["']/);
    expect(postmarkEmailProviderManifest.packageName).toBe("@cognidesk/email-postmark");
    expect(postmarkEmailProviderManifest.metadata?.implementation).toMatchObject({
      manifestImport: "no-sdk-client-initialization",
    });
  });

  it("imports /manifest without loading postmark", async () => {
    vi.resetModules();
    vi.doMock("postmark", () => {
      throw new Error("manifest imported postmark");
    });

    const { postmarkEmailProviderManifest: manifest } = await import("../src/manifest.js");

    expect(manifest.packageName).toBe("@cognidesk/email-postmark");
    vi.doUnmock("postmark");
  });

  it("passes provider conformance for the split package manifest", async () => {
    const report = assertIntegrationConformance({
      manifest: postmarkEmailProviderManifest,
      operations: createOperationHandlerStubs(postmarkEmailProviderManifest),
    });

    expect(report).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
    expect(postmarkEmailCredentialStatuses({ serverTokenConfigured: true })
      .every((status) => status.state === "configured" || status.state === "not-required")).toBe(true);
  });

  it("binds declared operations to the official SDK raw clients", async () => {
    const rawClients = {
      server: {
        sendEmail: vi.fn(async () => ({ MessageID: "message-id" })),
        getOutboundMessageDetails: vi.fn(async () => ({ MessageID: "message-id" })),
        getInboundMessageDetails: vi.fn(async () => ({ MessageID: "inbound-id" })),
        getMessageStreams: vi.fn(async () => ({ MessageStreams: [{ ID: "outbound" }] })),
        createSuppressions: vi.fn(async () => ({ Suppressions: [{ EmailAddress: "customer@example.test" }] })),
        deleteSuppressions: vi.fn(async () => ({ Suppressions: [{ EmailAddress: "customer@example.test" }] })),
      },
    } as unknown as PostmarkRawClients;
    const integration = createPostmarkEmailIntegration({
      serverToken: "server-token",
      rawClients,
    });

    await expect(integration.operations["email.send"]?.({
      From: "support@example.test",
      To: "customer@example.test",
      Subject: "Hello",
      TextBody: "Body",
    })).resolves.toMatchObject({ MessageID: "message-id" });
    await integration.operations["postmark.messageStreams.list"]?.({});

    expect(rawClients.server.sendEmail).toHaveBeenCalled();
    expect(rawClients.server.getMessageStreams).toHaveBeenCalledWith({});
  });

  it("parses inbound webhooks", async () => {
    await expect(parsePostmarkInboundWebhook(new Request("https://example.test", {
      method: "POST",
      body: JSON.stringify({ MessageID: "inbound-id", From: "customer@example.test" }),
    }))).resolves.toMatchObject({ MessageID: "inbound-id" });
  });
});
