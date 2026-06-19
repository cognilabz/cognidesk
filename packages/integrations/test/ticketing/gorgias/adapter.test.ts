import { describe, expect, expectTypeOf, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import { readProviderCoverageArtifact } from "../../provider-coverage-artifacts.js";
import {
  createGorgiasTicketingClient,
  createGorgiasTicketingLiveChecks,
  gorgiasTicketingCredentialStatuses,
  gorgiasTicketingProviderManifest,
  type GorgiasAccount,
  type GorgiasCreateTicketMessagePayload,
  type GorgiasCreateTicketPayload,
  type GorgiasListResponse,
  type GorgiasTicket,
  type GorgiasTicketMessage,
  type GorgiasUpdateTicketPayload,
} from "../../../src/ticketing/gorgias/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest", () => {
    expect(gorgiasTicketingProviderManifest).toMatchObject({
      id: "ticketing.gorgias",
      packageName: "@cognidesk/integrations",
      category: "ticketing",
      provider: "gorgias",
      coverage: {
        scope: "full-provider-api",
      },
    });
    expect(gorgiasTicketingProviderManifest.coverage.notes.join(" "))
      .toContain("generated per-operation functions");
    expect(gorgiasTicketingProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developers.gorgias.com/llms.txt",
        "https://developers.gorgias.com/reference/create-ticket",
        "https://developers.gorgias.com/docs/oauth2-scopes",
      ]));
    const coverage = readProviderCoverageArtifact("docs/provider-coverage/gorgias-public-api-2026-06-18.operations.json");
    expect(gorgiasTicketingProviderManifest.metadata).toMatchObject({
      fullProviderApiVerification: {
        coverageArtifact: "docs/provider-coverage/gorgias-public-api-2026-06-18.operations.json",
        functionCatalogArtifact: "docs/provider-coverage/gorgias-public-api-2026-06-18.functions.json",
        documentedOperationCount: coverage.spec?.documentedOperationCount,
        implementedOperationCount: coverage.localSurface?.generatedOperationCount,
        generatedFunctionCount: coverage.localSurface?.generatedFunctionCount,
        unimplementedOperationCount: 0,
      },
    });
    expect(coverage.localSurface?.supportHelperOperationCount).toBe(7);
    expect(coverage.localSurface?.supportHelperGapOperationCount).toBe(106);
    expect(gorgiasTicketingProviderManifest.credentialRequirements[1]?.scopes)
      .toEqual(["account:read", "tickets:read", "tickets:write"]);
    const providerObjectKinds = gorgiasTicketingProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    );
    expect(providerObjectKinds).toEqual(expect.arrayContaining(["gorgiasTicket", "gorgiasMessage"]));
  });

  it("exposes typed Gorgias helper request and response contracts", () => {
    const client = createGorgiasTicketingClient({ apiBaseUrl: "https://example.gorgias.com" });
    const messagePayload: GorgiasCreateTicketMessagePayload = {
      channel: "internal-note",
      from_agent: true,
      body_text: "Cognidesk handoff summary",
      public: false,
    };
    const ticketPayload: GorgiasCreateTicketPayload = {
      subject: "Flight disruption",
      channel: "email",
      messages: [messagePayload],
      priority: "high",
      status: "open",
    };
    const patchPayload: GorgiasUpdateTicketPayload = {
      status: "closed",
      tags: [{ name: "handoff" }],
    };

    expectTypeOf(client.createTicket(ticketPayload)).toEqualTypeOf<Promise<GorgiasTicket>>();
    expectTypeOf(client.updateTicket(123, patchPayload)).toEqualTypeOf<Promise<GorgiasTicket>>();
    expectTypeOf(client.getTicket(123)).toEqualTypeOf<Promise<GorgiasTicket>>();
    expectTypeOf(client.createTicketMessage(123, messagePayload, { action: "force" }))
      .toEqualTypeOf<Promise<GorgiasTicketMessage>>();
    expectTypeOf(client.listTickets({ order_by: "updated_datetime:desc", limit: 25, ticket_ids: [123] }))
      .toEqualTypeOf<Promise<GorgiasListResponse<GorgiasTicket>>>();
    expectTypeOf(client.listMessages({ order_by: "created_datetime:desc", ticket_id: 123 }))
      .toEqualTypeOf<Promise<GorgiasListResponse<GorgiasTicketMessage>>>();
    expectTypeOf(client.readiness()).toEqualTypeOf<Promise<GorgiasAccount>>();

    // @ts-expect-error Gorgias create-ticket requires at least one message.
    const invalidTicketPayload: GorgiasCreateTicketPayload = { subject: "Missing first message" };
    void invalidTicketPayload;
  });

  it("creates Gorgias tickets with Basic auth", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: 123 }), { status: 201 }));
    const client = createGorgiasTicketingClient({
      apiBaseUrl: "https://example.gorgias.com",
      email: "api@example.test",
      apiKey: "key",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createTicket({
      subject: "Flight disruption",
      channel: "email",
      messages: [{
        channel: "email",
        from_agent: false,
        body_text: "Customer needs manual rebooking.",
      }],
    }))
      .resolves.toMatchObject({ id: 123 });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.gorgias.com/api/tickets",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: `Basic ${Buffer.from("api@example.test:key").toString("base64")}`,
        }),
      }),
    );
  });

  it("creates ticket messages and lists messages for handoff notes", async () => {
    const fetchMock = vi.fn(async (url: string | URL | Request) => {
      const value = String(url);
      if (value.endsWith("/api/tickets/123/messages?action=force")) {
        return new Response(JSON.stringify({ id: 456, ticket_id: 123 }), { status: 201 });
      }
      if (value.endsWith("/api/messages?ticket_id=123&limit=50&order_by=created_datetime%3Adesc")) {
        return new Response(JSON.stringify({ data: [{ id: 456 }] }), { status: 200 });
      }
      return new Response(JSON.stringify({ message: `Unexpected URL ${value}` }), { status: 404 });
    });
    const client = createGorgiasTicketingClient({
      apiBaseUrl: "https://example.gorgias.com",
      accessToken: "token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createTicketMessage(123, {
      channel: "internal-note",
      from_agent: true,
      body_text: "Cognidesk handoff summary",
      public: false,
    }, { action: "force" })).resolves.toMatchObject({ id: 456, ticket_id: 123 });

    await expect(client.listMessages({
      ticket_id: 123,
      limit: 50,
      order_by: "created_datetime:desc",
    })).resolves.toMatchObject({ data: [{ id: 456 }] });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://example.gorgias.com/api/tickets/123/messages?action=force",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          channel: "internal-note",
          from_agent: true,
          body_text: "Cognidesk handoff summary",
          public: false,
        }),
        headers: expect.objectContaining({
          authorization: "Bearer token",
          "content-type": "application/json",
        }),
      }),
    );
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: gorgiasTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [gorgiasTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: gorgiasTicketingCredentialStatuses({
        apiBaseUrl: "https://example.gorgias.com",
        apiAccessConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
  });

  it("passes live conformance with configured Gorgias readiness", async () => {
    const result = await runProviderConformance({
      manifest: gorgiasTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [gorgiasTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: gorgiasTicketingCredentialStatuses({
        apiBaseUrl: "https://example.gorgias.com",
        apiAccessConfigured: true,
      }),
      live: {
        enabled: true,
        checks: createGorgiasTicketingLiveChecks({
          apiBaseUrl: "https://example.gorgias.com",
          accessToken: "configured",
          client: { async readiness() {
            return { id: "account-1" };
          } },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.account",
      status: "passed",
    }));
    expect(gorgiasTicketingCredentialStatuses({
      apiBaseUrl: "https://example.gorgias.com",
      apiAccessConfigured: true,
    })[1]?.scopes).toEqual(["account:read", "tickets:read", "tickets:write"]);
  });

  it("blocks Gorgias live checks when base URL or API access is missing", async () => {
    const result = await runProviderConformance({
      manifest: gorgiasTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [gorgiasTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: gorgiasTicketingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createGorgiasTicketingLiveChecks({
          apiBaseUrl: "https://example.gorgias.com",
          accessToken: "missing",
          client: { async readiness() {
            throw new Error("Gorgias readiness should be credential-blocked before execution.");
          } },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.account",
      status: "credential-blocked",
    }));
  });
});
