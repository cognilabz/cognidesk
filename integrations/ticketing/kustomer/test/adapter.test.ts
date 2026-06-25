import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import {
  createKustomerTicketingIntegration,
  type JsonObject,
  type KustomerTicketingProviderClient,
} from "../src/index.js";
import { kustomerTicketingProviderManifest as manifestOnly, kustomerHostClientSupportSlice } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-kustomer", () => {
  it("exports a provider REST adapter Kustomer decision", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/integration-ticketing-kustomer");
    expect(kustomerHostClientSupportSlice.implementationStrategy).toBe("provider-rest-adapter");
    expect(kustomerHostClientSupportSlice.sdkDecision).toMatchObject({ verdict: "no-official-sdk-rest-adapter" });
    expect(manifestOnly.metadata?.providerClient).toMatchObject({
      interface: "KustomerTicketingProviderClient",
      defaultClientPolicy: "built-in-rest-adapter",
    });
  });

  it("binds declared operations to handlers", () => {
    const integration = createKustomerTicketingIntegration({
      providerClient: createProviderClient(),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("delegates Kustomer messages to the host client and rejects undocumented channels", async () => {
    const messages: JsonObject[] = [];
    const integration = createKustomerTicketingIntegration({
      providerClient: createProviderClient({
        async createMessage(message) {
          messages.push(message);
          return { id: "msg_1" };
        },
      }),
    });
    await integration.run("ticket.comment.create", { message: { channel: "email", direction: "out", app: "cognidesk" } });
    expect(messages[0]).toMatchObject({ channel: "email", direction: "out", app: "cognidesk" });
    await expect(integration.run("ticket.comment.create", {
      message: { channel: "note", direction: "out", app: "cognidesk" },
    })).rejects.toThrow("Unsupported Kustomer message channel");
    expect(messages).toHaveLength(1);
  });

  it("fails closed when no Kustomer provider client is supplied", async () => {
    const integration = createKustomerTicketingIntegration();
    await expect(integration.run("ticket.search", {})).rejects.toThrow(
      "Kustomer provider client is required",
    );
  });
});

function createProviderClient(
  overrides: Partial<KustomerTicketingProviderClient> = {},
): KustomerTicketingProviderClient {
  const ok = async (): Promise<JsonObject> => ({ ok: true });

  return {
    createConversation: ok,
    getConversation: ok,
    updateConversation: ok,
    listConversations: ok,
    listMessages: ok,
    createMessage: ok,
    createCustomerDraft: ok,
    readiness: ok,
    ...overrides,
  };
}
