import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";
import { assertIntegrationConformance, createOperationHandlerStubs } from "@cognidesk/integration-kit/testing";
import {
  createImapEmailIntegrationOperationHandlers,
  createImapEmailIntegration,
  imapEmailCredentialStatuses,
  imapEmailProviderManifest,
  type ImapEmailClient,
  type ImapRawClient,
} from "../src/index.js";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));

describe("@cognidesk/integration-email-imap", () => {
  it("keeps manifest imports metadata-only", async () => {
    const source = await readFile(path.join(packageRoot, "src", "manifest.ts"), "utf8");
    expect(source).not.toContain("from \"imapflow\"");
    expect(imapEmailProviderManifest.packageName).toBe("@cognidesk/integration-email-imap");
    expect(imapEmailProviderManifest.metadata?.implementation).toMatchObject({
      manifestImport: "no-sdk-client-initialization",
    });
  });

  it("imports /manifest without loading imapflow", async () => {
    vi.resetModules();
    vi.doMock("imapflow", () => {
      throw new Error("manifest imported imapflow");
    });

    const { imapEmailProviderManifest: manifest } = await import("../src/manifest.js");

    expect(manifest.packageName).toBe("@cognidesk/integration-email-imap");
    vi.doUnmock("imapflow");
  });

  it("passes provider conformance for the split package manifest", async () => {
    const report = assertIntegrationConformance({
      manifest: imapEmailProviderManifest,
      operations: createOperationHandlerStubs(imapEmailProviderManifest),
    });

    expect(report).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
    expect(imapEmailCredentialStatuses({
      serverConfigured: true,
      mailboxCredentialsConfigured: true,
      authMode: "oauth2",
    }).every((status) => status.state === "configured")).toBe(true);
  });

  it("binds declared operations to ImapFlow", async () => {
    async function* fetched() {
      yield { uid: 10, envelope: { subject: "Hello" } };
    }
    const rawClient = {
      connect: vi.fn(async () => {}),
      logout: vi.fn(async () => {}),
      mailboxOpen: vi.fn(async () => ({ path: "INBOX", uidValidity: 123n, exists: 4 })),
      status: vi.fn(async () => ({ messages: 4, unseen: 1 })),
      search: vi.fn(async () => [10]),
      fetch: vi.fn(() => fetched()),
    } as unknown as ImapRawClient;
    const integration = createImapEmailIntegration({
      connection: { host: "imap.example.test", port: 993, secure: true },
      rawClient,
    });

    await expect(integration.operations["imap.mailbox.check"]?.())
      .resolves.toMatchObject({ ready: true, mailbox: "INBOX", uidValidity: "123" });
    await expect(integration.operations["email.thread.search"]?.({ query: { all: true } }))
      .resolves.toEqual([10]);
    await expect(integration.operations["email.thread.read"]?.({ range: [10], query: { envelope: true } }))
      .resolves.toEqual([{ uid: 10, envelope: { subject: "Hello" } }]);
    expect(integration.rawClient).toBe(rawClient);
    expect(integration.client.rawClient).toBe(rawClient);
    expect(rawClient.connect).toHaveBeenCalledTimes(1);
  });

  it("delegates operation handlers to an injected IMAP client", async () => {
    const emailClient = {
      rawClient: {} as ImapRawClient,
      checkMailbox: vi.fn(async () => ({ ready: true, mailbox: "Archive" })),
      searchMessages: vi.fn(async () => [42]),
      fetchMessages: vi.fn(async () => [{ uid: 42, flags: ["\\Seen"] }]),
      close: vi.fn(async () => {}),
    } satisfies ImapEmailClient;
    const handlers = createImapEmailIntegrationOperationHandlers(emailClient);

    await expect(handlers["imap.mailbox.check"]()).resolves.toMatchObject({ ready: true, mailbox: "Archive" });
    await expect(handlers["email.thread.search"]({ query: { all: true } })).resolves.toEqual([42]);
    await expect(handlers["email.thread.read"]({ range: [42], query: { flags: true } }))
      .resolves.toEqual([{ uid: 42, flags: ["\\Seen"] }]);
    expect(emailClient.checkMailbox).toHaveBeenCalledTimes(1);
    expect(emailClient.searchMessages).toHaveBeenCalledWith({ query: { all: true } });
    expect(emailClient.fetchMessages).toHaveBeenCalledWith({ range: [42], query: { flags: true } });
  });
});
