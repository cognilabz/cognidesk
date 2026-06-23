import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import { createKustomerTicketingIntegration } from "../src/index.js";
import { kustomerTicketingProviderManifest as manifestOnly } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-kustomer", () => {
  it("exports a manifest-only scoped Kustomer decision", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/integration-ticketing-kustomer");
    expect(manifestOnly.metadata?.sdkDecision).toMatchObject({ verdict: "not-adopted" });
  });

  it("binds declared operations to handlers", () => {
    const integration = createKustomerTicketingIntegration({
      accessToken: "token",
      fetch: async () => new Response("{}", { status: 200 }),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("creates Kustomer messages and rejects undocumented channels", async () => {
    const requests: string[] = [];
    const integration = createKustomerTicketingIntegration({
      accessToken: "token",
      fetch: async (url) => {
        requests.push(String(url));
        return new Response(JSON.stringify({ id: "msg_1" }), { status: 200 });
      },
    });
    await integration.run("ticket.comment.create", { message: { channel: "email", direction: "out", app: "cognidesk" } });
    expect(requests[0]).toBe("https://api.kustomerapp.com/v1/messages");
    await expect(integration.run("ticket.comment.create", {
      message: { channel: "note", direction: "out", app: "cognidesk" },
    })).rejects.toThrow("Unsupported Kustomer message channel");
  });
});
