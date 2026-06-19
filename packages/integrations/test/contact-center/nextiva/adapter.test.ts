import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createNextivaContactCenterClient,
  createNextivaContactCenterLiveChecks,
  nextivaContactCenterCredentialStatuses,
  nextivaContactCenterProviderManifest,
} from "../../../src/contact-center/nextiva/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official contact-center provider manifest", () => {
    expect(nextivaContactCenterProviderManifest).toMatchObject({
      id: "contactCenter.nextiva",
      packageName: "@cognidesk/integrations",
      category: "contactCenter",
      provider: "nextiva",
      trustLevel: "official",
    });
    expect(nextivaContactCenterProviderManifest.coverage).toMatchObject({
      scope: "support-workflow-subset",
    });
    expect(nextivaContactCenterProviderManifest.coverage.notes.join(" ")).toContain("not evidence of full Nextiva Contact Center API coverage");
    expect(nextivaContactCenterProviderManifest.coverage.notes.join(" ")).toContain("No official public OpenAPI/Swagger inventory was found");
    expect(nextivaContactCenterProviderManifest.coverage.notes.join(" ")).toContain("nextiva-contact-center-api-2026-06-18.checked-inventory.json");
    expect(nextivaContactCenterProviderManifest.coverage.notes.join(" ")).toContain("callbacks/callback administration");
    expect(nextivaContactCenterProviderManifest.coverage.notes.join(" ")).toContain("transfers to agent/inbox/external destinations");
    expect(nextivaContactCenterProviderManifest.coverage.notes.join(" ")).toContain("arbitrary Nextiva-side mutations");
    expect(nextivaContactCenterProviderManifest.directions).toEqual(["inbound-only", "outbound-only", "bidirectional"]);
    expect(nextivaContactCenterProviderManifest.metadata).toMatchObject({
      checkedInventoryArtifact: "docs/provider-coverage/nextiva-contact-center-api-2026-06-18.checked-inventory.json",
      checkedProviderSupportedNotTypedFamilies: 12,
      officialPublicOpenApiSpec: "not-found",
      channelCoverage: {
        configuredHttpHandoff: "supported",
        genericRequest: "sdk-owned-classified-endpoint",
        publicOpenApiSpec: "not-covered",
        publicServiceDocs: "provider-supported-not-typed",
        userSessionAcdService: "provider-supported-not-typed",
        acdOfferLifecycle: "provider-supported-not-typed",
        workItems: "provider-supported-not-typed",
        workitemCallControl: "provider-supported-not-typed",
        workitemTransferAgentInboxExternal: "provider-supported-not-typed",
        workitemEmailResponse: "provider-supported-not-typed",
        conversationFetchCreateSend: "provider-supported-not-typed",
        callbacks: "provider-supported-not-typed",
        outboundDialingMessaging: "provider-supported-not-typed",
        campaigns: "provider-supported-not-typed",
        transfer: "provider-supported-not-typed",
      },
    });
    expect(nextivaContactCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toEqual(expect.arrayContaining(["transfer", "send"]));
    expect(nextivaContactCenterProviderManifest.capabilities).toContainEqual(expect.objectContaining({
      capability: "nextiva.request",
      extension: true,
    }));
    expect(nextivaContactCenterProviderManifest.capabilities.find((capability) =>
      capability.capability === "nextiva.request"
    )?.description).toContain("host app must classify and gate");
    expect(nextivaContactCenterProviderManifest.limitations.join(" ")).toContain("does not satisfy typed handoff, send, or transfer coverage");
    expect(nextivaContactCenterProviderManifest.limitations.join(" ")).toContain("Per-conversation handoff calls cannot override");
    expect(nextivaContactCenterProviderManifest.limitations.join(" ")).toContain("callbacks/callback administration");
    expect(nextivaContactCenterProviderManifest.credentialRequirements.find((requirement) =>
      requirement.id === "nextiva-contact-center-authorities"
    )?.scopes).toEqual([]);
    expect(nextivaContactCenterProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://www.nextiva.com/resources/learn/rest-apis",
        "https://developer.nextiva.com/nextiva/docs/user-service",
        "https://developer.nextiva.com/nextiva/docs/acd-service",
        "https://developer.nextiva.com/nextiva/docs/workitem-service",
        "https://developer.nextiva.com/nextiva/docs/conversation-service",
      ]));
    expect(nextivaContactCenterProviderManifest.credentialRequirements[1]?.scopes).toEqual([]);
  });

  it("creates Nextiva handoff requests through the configured path", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ workitemId: "workitem-1" }), { status: 201 }));
    const client = createNextivaContactCenterClient({
      apiBaseUrl: "https://tenant.nextiva.example.test",
      accessToken: "configured",
      defaultHandoffPath: "/custom/cognidesk/nextiva-handoff",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      payload: { phoneNumber: "+15551234567", queueId: "queue-1", summary: "Needs billing help" },
      query: { tenantId: "tenant-1" },
      idempotencyKey: "handoff-1",
    })).resolves.toMatchObject({ workitemId: "workitem-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://tenant.nextiva.example.test/custom/cognidesk/nextiva-handoff?tenantId=tenant-1",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer configured",
          "content-type": "application/json",
          "idempotency-key": "handoff-1",
        }),
        body: JSON.stringify({ phoneNumber: "+15551234567", queueId: "queue-1", summary: "Needs billing help" }),
      }),
    );
  });

  it("does not allow per-call Nextiva handoff paths to hide custom workitem actions", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ workitemId: "workitem-1" }), { status: 201 }));
    const client = createNextivaContactCenterClient({
      apiBaseUrl: "https://tenant.nextiva.example.test",
      accessToken: "configured",
      defaultHandoffPath: "/custom/cognidesk/nextiva-handoff",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      path: "/api/v1/workitems",
      payload: { phoneNumber: "+15551234567" },
    } as never)).resolves.toMatchObject({ workitemId: "workitem-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://tenant.nextiva.example.test/custom/cognidesk/nextiva-handoff",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("does not assume undocumented default Nextiva handoff or readiness paths", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const client = createNextivaContactCenterClient({
      apiBaseUrl: "https://tenant.nextiva.example.test",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({ payload: { queueId: "queue-1" } }))
      .rejects.toThrow("Nextiva handoff path must be configured");
    await expect(client.readiness()).rejects.toThrow("Nextiva readiness path must be configured");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("uses the SDK-configured Nextiva readiness path", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const client = createNextivaContactCenterClient({
      apiBaseUrl: "https://tenant.nextiva.example.test",
      accessToken: "configured",
      readinessPath: "/configured/readiness",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.readiness()).resolves.toMatchObject({ ok: true });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://tenant.nextiva.example.test/configured/readiness",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("supports typed generic requests and API-key auth", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ contactId: "contact-1" }), { status: 200 }));
    const client = createNextivaContactCenterClient({
      apiBaseUrl: "https://tenant.nextiva.example.test",
      apiKey: "key",
      apiKeyHeaderName: "x-nextiva-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const result = await client.request({
      method: "GET",
      path: "/api/v1/contacts/contact-1",
      headers: { "x-request-source": "cognidesk", "x-undefined": undefined },
    });

    expect(result.contactId).toBe("contact-1");
    expect(fetchMock).toHaveBeenCalledWith(
      "https://tenant.nextiva.example.test/api/v1/contacts/contact-1",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({
          "x-nextiva-api-key": "key",
          "x-request-source": "cognidesk",
        }),
      }),
    );
    const [, requestInit] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(requestInit.headers).not.toHaveProperty("x-undefined");
  });

  it("requires explicit policy classification for mutating generic Nextiva requests", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ workitemId: "workitem-1" }), { status: 200 }));
    const client = createNextivaContactCenterClient({
      apiBaseUrl: "https://tenant.nextiva.example.test",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.request({
      method: "POST",
      path: "/api/v1/workitems",
      body: { queueId: "queue-1" },
    })).rejects.toThrow("allowMutation=true");
    await expect(client.request({
      method: "POST",
      path: "/api/v1/workitems",
      body: { queueId: "queue-1" },
      allowMutation: true,
    })).rejects.toThrow("policy classification");

    await expect(client.request({
      method: "POST",
      path: "/api/v1/workitems",
      body: { queueId: "queue-1" },
      allowMutation: true,
      classification: "host-owned-workitem-create",
    })).resolves.toMatchObject({ workitemId: "workitem-1" });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("runs the configured readiness live check", async () => {
    const readiness = vi.fn(async () => ({ ok: true }));
    const [check] = createNextivaContactCenterLiveChecks({
      apiBaseUrl: "https://tenant.nextiva.example.test",
      accessToken: "configured",
      client: { readiness },
    });

    await expect(check?.run({})).resolves.toMatchObject({ details: { ok: true } });
    expect(readiness).toHaveBeenCalledTimes(1);
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: nextivaContactCenterProviderManifest,
      channels: [{
        id: "contact-center",
        channel: "contactCenter",
        providerPackageIds: [nextivaContactCenterProviderManifest.id],
        enabledCapabilities: ["handoff"],
      }],
      credentialStatuses: nextivaContactCenterCredentialStatuses({
        apiBaseUrl: "https://tenant.nextiva.example.test",
        apiAccessConfigured: true,
        authoritiesConfigured: true,
        routingConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
    expect(result.manifest.credentialRequirements[1]?.scopes).toEqual([]);
    expect(nextivaContactCenterCredentialStatuses({
      apiBaseUrl: "https://tenant.nextiva.example.test",
      apiAccessConfigured: true,
      authoritiesConfigured: true,
      routingConfigured: true,
    }).find((status) => status.requirementId === "nextiva-contact-center-authorities")?.state).toBe("configured");
  });
});
