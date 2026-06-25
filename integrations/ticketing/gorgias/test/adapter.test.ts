import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import {
  createGorgiasTicketingIntegration,
  type GorgiasTicketingProviderClient,
} from "../src/index.js";
import { gorgiasTicketingProviderManifest as manifestOnly } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-gorgias", () => {
  it("exports a provider REST adapter Gorgias decision", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/integration-ticketing-gorgias");
    expect(manifestOnly.metadata).toMatchObject({
      implementationStrategy: "provider-rest-adapter",
      providerClient: {
        interface: "GorgiasTicketingProviderClient",
        defaultClient: "built-in-rest-adapter",
      },
    });
    expect(manifestOnly.metadata).toHaveProperty("sdkDecision", "no-official-sdk-rest-adapter");
  });

  it("binds declared operations to handlers", () => {
    const integration = createGorgiasTicketingIntegration({
      providerClient: createProviderClient(),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("creates Gorgias ticket messages through the host provider client", async () => {
    const calls: unknown[] = [];
    const integration = createGorgiasTicketingIntegration({
      providerClient: createProviderClient({
        async createTicketMessage(ticketId, payload) {
          calls.push({ ticketId, payload });
          return { id: 5 };
        },
      }),
    });
    await integration.run("ticket.comment.create", { ticketId: 7, message: { body_text: "Hello", channel: "email", from_agent: true } });
    expect(calls).toEqual([
      {
        ticketId: 7,
        payload: { body_text: "Hello", channel: "email", from_agent: true },
      },
    ]);
  });

  it("fails closed without a host-injected provider client", async () => {
    const integration = createGorgiasTicketingIntegration();
    await expect(integration.run("ticket.read", { ticketId: 7 })).rejects.toThrow("Gorgias provider client is required");
  });
});

function createProviderClient(
  overrides: Partial<GorgiasTicketingProviderClient> = {},
): GorgiasTicketingProviderClient {
  const response = async () => ({});
  return {
    createTicket: response,
    getTicket: response,
    updateTicket: response,
    listTickets: response,
    createTicketMessage: response,
    listMessages: response,
    readiness: response,
    ...overrides,
  };
}
