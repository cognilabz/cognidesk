import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import { createHelpScoutTicketingIntegration } from "../src/index.js";
import { helpScoutTicketingProviderManifest as manifestOnly } from "../src/manifest.js";

describe("@cognidesk/ticketing-help-scout", () => {
  it("exports a manifest-only Inbox API decision", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/ticketing-help-scout");
    expect(manifestOnly.coverage.scope).toBe("support-workflow-subset");
    expect(manifestOnly.metadata?.sdkDecision).toMatchObject({ verdict: "not-adopted" });
  });

  it("binds declared operations to handlers", () => {
    const integration = createHelpScoutTicketingIntegration({
      accessToken: "token",
      fetch: async () => new Response("{}", { status: 200 }),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("creates Help Scout notes through the Inbox API support slice", async () => {
    const requests: string[] = [];
    const integration = createHelpScoutTicketingIntegration({
      accessToken: "token",
      fetch: async (url) => {
        requests.push(String(url));
        return new Response(JSON.stringify({ id: 1 }), { status: 200 });
      },
    });
    await integration.run("ticket.internalNote.create", { conversationId: 11, note: { text: "Internal" } });
    expect(requests[0]).toBe("https://api.helpscout.net/v2/conversations/11/notes");
  });
});
