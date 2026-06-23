import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import {
  createZendeskTicketingIntegration,
  zendeskTicketingProviderManifest,
} from "../src/index.js";
import { zendeskTicketingProviderManifest as manifestOnly } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-zendesk", () => {
  it("exports a manifest-only support slice decision", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/integration-ticketing-zendesk");
    expect(manifestOnly.coverage.scope).toBe("provider-api-subset");
    expect(manifestOnly.metadata?.sdkDecision).toMatchObject({ verdict: "not-adopted" });
    expect(manifestOnly.metadata?.implementationStrategy).toBe("direct-http-support-slice");
  });

  it("binds declared operations to handlers", () => {
    const integration = createZendeskTicketingIntegration({
      instanceUrl: "https://example.zendesk.com",
      accessToken: "token",
      fetch: async () => new Response("{}", { status: 200 }),
    });
    expect(integration.manifest.id).toBe(zendeskTicketingProviderManifest.id);
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("creates Zendesk tickets through the constrained Support API slice", async () => {
    const requests: Array<{ url: string; init: RequestInit | undefined }> = [];
    const integration = createZendeskTicketingIntegration({
      instanceUrl: "https://example.zendesk.com/",
      accessToken: "token",
      fetch: async (url, init) => {
        requests.push({ url: String(url), init });
        return new Response(JSON.stringify({ ticket: { id: 123 } }), { status: 200 });
      },
    });

    await expect(integration.run("ticket.create", { subject: "Need help" })).resolves.toMatchObject({ id: 123 });
    expect(requests[0]?.url).toBe("https://example.zendesk.com/api/v2/tickets.json");
    expect(requests[0]?.init?.method).toBe("POST");
  });
});
