import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import { createFrontTicketingIntegration } from "../src/index.js";
import { frontTicketingProviderManifest as manifestOnly } from "../src/manifest.js";

describe("@cognidesk/ticketing-front", () => {
  it("exports a manifest-only scoped Front decision", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/ticketing-front");
    expect(manifestOnly.coverage.scope).toBe("provider-api-subset");
    expect(manifestOnly.metadata?.sdkDecision).toMatchObject({ verdict: "not-adopted" });
  });

  it("binds declared operations to handlers", () => {
    const integration = createFrontTicketingIntegration({
      accessToken: "token",
      fetch: async () => new Response("{}", { status: 200 }),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("creates Front replies and rejects JSON attachment payloads", async () => {
    const requests: string[] = [];
    const integration = createFrontTicketingIntegration({
      accessToken: "token",
      fetch: async (url) => {
        requests.push(String(url));
        return new Response(JSON.stringify({ status: "accepted" }), { status: 200 });
      },
    });
    await integration.run("ticket.comment.create", { conversationId: "cnv_1", payload: { body: "Hello" } });
    expect(requests[0]).toBe("https://api2.frontapp.com/conversations/cnv_1/messages");
    await expect(integration.run("ticket.comment.create", {
      conversationId: "cnv_1",
      payload: { body: "See file", attachments: [] },
    })).rejects.toThrow("multipart/form-data");
  });
});
