import { describe, expect, it, vi } from "vitest";

describe("@cognidesk/integration-ticketing-intercom/manifest", () => {
  it("imports without loading the Intercom SDK client module", async () => {
    vi.resetModules();
    vi.doMock("intercom-client", () => {
      throw new Error("manifest imported the Intercom SDK");
    });

    try {
      const { intercomTicketingProviderManifest } = await import("../src/manifest.js");

      expect(intercomTicketingProviderManifest.packageName).toBe("@cognidesk/integration-ticketing-intercom");
      expect(intercomTicketingProviderManifest.metadata?.implementation).toMatchObject({
        strategy: "official-sdk",
        manifestImport: "no-sdk-client-initialization",
      });
      const operationAliases = intercomTicketingProviderManifest.operations.map((operation) => operation.alias);
      expect(new Set(operationAliases).size).toBe(operationAliases.length);
      expect(intercomTicketingProviderManifest.operations).toEqual(expect.arrayContaining([
        expect.objectContaining({ alias: "ticket.read", providerOperation: "tickets.get" }),
        expect.objectContaining({ alias: "ticket.comment.create", providerOperation: "tickets.reply" }),
        expect.objectContaining({ alias: "ticket.internalNote.create", providerOperation: "tickets.reply" }),
        expect.objectContaining({ alias: "intercom.conversation.read", providerOperation: "conversations.find" }),
      ]));
    } finally {
      vi.doUnmock("intercom-client");
    }
  }, 15_000);
});
