import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it, vi } from "vitest";
import { createHelpScoutTicketingClient, createHelpScoutTicketingIntegration, type HelpScoutTicketingProviderClient } from "../src/index.js";
import { helpScoutTicketingProviderManifest as manifestOnly } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-help-scout", () => {
  it("exports a provider REST adapter Inbox API decision", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/integration-ticketing-help-scout");
    expect(manifestOnly.coverage.scope).toBe("support-workflow-subset");
    expect(manifestOnly.metadata).toMatchObject({
      implementation: { implementationStrategy: "provider-rest-adapter" },
      providerClient: {
        interface: "HelpScoutTicketingProviderClient",
        importPolicy: "runtime-override",
        defaultClientPolicy: "built-in-rest-adapter",
      },
    });
    expect(manifestOnly.credentialRequirements.map((credential) => credential.id)).toEqual(expect.arrayContaining([
      "help-scout-base-url",
      "help-scout-api-access",
    ]));
    expect(manifestOnly.metadata).toHaveProperty("sdkDecision", "no-official-sdk-rest-adapter");
    expect(JSON.stringify(manifestOnly.metadata)).not.toContain("direct-http-support-slice");
  });

  it("binds declared operations to handlers", () => {
    const integration = createHelpScoutTicketingIntegration({
      providerClient: fakeProviderClient(),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("delegates Help Scout notes to the injected provider client", async () => {
    const providerClient = fakeProviderClient();
    const client = createHelpScoutTicketingClient({ providerClient });
    expect(client).toBe(providerClient);

    const integration = createHelpScoutTicketingIntegration({
      providerClient,
    });

    await integration.run("ticket.internalNote.create", { conversationId: 11, note: { text: "Internal" } });
    expect(providerClient.createNote).toHaveBeenCalledWith(11, { text: "Internal" });
  });

  it("fails closed without Help Scout provider credentials or provider client", async () => {
    const integration = createHelpScoutTicketingIntegration();
    await expect(integration.run("ticket.read", { conversationId: 11 }))
      .rejects.toThrow("configure baseUrl with accessToken/apiKey");
  });
});

function fakeProviderClient(): HelpScoutTicketingProviderClient {
  return {
    createConversation: vi.fn(async (payload) => ({ id: 1, payload })),
    getConversation: vi.fn(async (conversationId) => ({ id: conversationId })),
    updateConversation: vi.fn(async (conversationId, patch) => ({ id: conversationId, patch })),
    listConversations: vi.fn(async (query) => ({ query })),
    createReply: vi.fn(async (conversationId, payload) => ({ id: conversationId, payload })),
    createNote: vi.fn(async (conversationId, payload) => ({ id: conversationId, payload })),
    listThreads: vi.fn(async (conversationId) => ({ conversationId })),
    readiness: vi.fn(async () => ({ ok: true })),
  };
}
