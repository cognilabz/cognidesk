import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import {
  createFreshdeskTicketingIntegration,
  parseFreshdeskWebhookRequest,
} from "../src/index.js";
import { freshdeskTicketingProviderManifest as manifestOnly } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-freshdesk", () => {
  it("exports a manifest-only direct slice decision", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/integration-ticketing-freshdesk");
    expect(manifestOnly.metadata?.sdkDecision).toMatchObject({ verdict: "not-adopted" });
  });

  it("binds declared operations to handlers", () => {
    const integration = createFreshdeskTicketingIntegration({
      domain: "example.freshdesk.com",
      apiKey: "key",
      fetch: async () => new Response("{}", { status: 200 }),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("creates Freshdesk replies and parses shared-secret webhooks", async () => {
    const requests: Array<{ url: string; init: RequestInit | undefined }> = [];
    const integration = createFreshdeskTicketingIntegration({
      domain: "https://example.freshdesk.com",
      apiKey: "key",
      fetch: async (url, init) => {
        requests.push({ url: String(url), init });
        return new Response(JSON.stringify({ id: 9 }), { status: 200 });
      },
    });
    await integration.run("ticket.comment.create", { ticketId: 42, reply: { body: "Hello" } });
    expect(requests[0]?.url).toBe("https://example.freshdesk.com/api/v2/tickets/42/reply");

    const request = new Request("https://example.test/webhook", {
      method: "POST",
      headers: { "x-cognidesk-freshdesk-webhook-secret": "secret" },
      body: JSON.stringify({ ticket_id: 42 }),
    });
    await expect(parseFreshdeskWebhookRequest(request, { webhookSecret: "secret" }))
      .resolves.toMatchObject({ verified: true, event: { provider: "freshdesk" } });
  });
});
