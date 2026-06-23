import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import { createGorgiasTicketingIntegration } from "../src/index.js";
import { gorgiasTicketingProviderManifest as manifestOnly } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-gorgias", () => {
  it("exports a manifest-only scoped Gorgias decision", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/integration-ticketing-gorgias");
    expect(manifestOnly.metadata?.sdkDecision).toMatchObject({ verdict: "not-adopted" });
  });

  it("binds declared operations to handlers", () => {
    const integration = createGorgiasTicketingIntegration({
      apiBaseUrl: "https://example.gorgias.com",
      accessToken: "token",
      fetch: async () => new Response("{}", { status: 200 }),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("creates Gorgias ticket messages through the support slice", async () => {
    const requests: string[] = [];
    const integration = createGorgiasTicketingIntegration({
      apiBaseUrl: "https://example.gorgias.com",
      accessToken: "token",
      fetch: async (url) => {
        requests.push(String(url));
        return new Response(JSON.stringify({ id: 5 }), { status: 200 });
      },
    });
    await integration.run("ticket.comment.create", { ticketId: 7, message: { body_text: "Hello", channel: "email", from_agent: true } });
    expect(requests[0]).toBe("https://example.gorgias.com/api/tickets/7/messages");
  });
});
