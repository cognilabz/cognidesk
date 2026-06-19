import { describe, expect, expectTypeOf, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  type Five9ConfiguredRequestResponse,
  createFive9ContactCenterClient,
  five9ContactCenterCredentialStatuses,
  five9ContactCenterProviderManifest,
} from "../../../src/contact-center/five9/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official contact-center provider manifest", () => {
    expect(five9ContactCenterProviderManifest).toMatchObject({
      id: "contactCenter.five9",
      packageName: "@cognidesk/integrations",
      category: "contactCenter",
      provider: "five9",
      trustLevel: "official",
    });
    expect(five9ContactCenterProviderManifest.coverage).toMatchObject({
      scope: "support-workflow-subset",
    });
    expect(five9ContactCenterProviderManifest.coverage.notes.join(" ")).toContain("does not implement Five9's broader APIs");
    expect(five9ContactCenterProviderManifest.coverage.notes.join(" ")).toContain("No official public OpenAPI/Swagger inventory was found");
    expect(five9ContactCenterProviderManifest.coverage.notes.join(" ")).toContain("five9-contact-center-api-2026-06-18.checked-inventory.json");
    expect(five9ContactCenterProviderManifest.coverage.notes.join(" ")).toContain("Web2Campaign");
    expect(five9ContactCenterProviderManifest.coverage.notes.join(" ")).toContain("CRM SDK");
    expect(five9ContactCenterProviderManifest.credentialRequirements[1]?.scopes).toEqual([]);
    expect(five9ContactCenterProviderManifest.directions).toEqual(["inbound-only", "outbound-only", "bidirectional"]);
    expect(five9ContactCenterProviderManifest.metadata).toMatchObject({
      checkedInventoryArtifact: "docs/provider-coverage/five9-contact-center-api-2026-06-18.checked-inventory.json",
      checkedProviderSupportedNotTypedFamilies: 17,
      officialPublicOpenApiSpec: "not-found",
      officialPublicWebhookCatalog: "not-found",
      channelCoverage: {
        configuredHttpHandoff: "supported",
        publicOpenApiSpec: "not-covered",
        developerProgramDocs: "provider-supported-not-typed",
        ctiWebServices: "provider-supported-not-typed",
        configurationWebServices: "provider-supported-not-typed",
        reportingWebServices: "provider-supported-not-typed",
        statisticsWebServices: "provider-supported-not-typed",
        web2Campaign: "provider-supported-not-typed",
        crmSdk: "provider-supported-not-typed",
        webConnectors: "provider-supported-not-typed",
        nativeInboundVoice: "provider-supported-not-typed",
        outboundDialing: "provider-supported-not-typed",
        callback: "provider-supported-not-typed",
        chat: "provider-supported-not-typed",
        digitalEngagement: "provider-supported-not-typed",
        email: "provider-supported-not-typed",
        sms: "provider-supported-not-typed",
        socialMessaging: "provider-supported-not-typed",
        video: "provider-supported-not-typed",
        campaignActions: "provider-supported-not-typed",
        transfer: "provider-supported-not-typed",
        crmObjects: "provider-supported-not-typed",
        recordings: "provider-supported-not-typed",
      },
    });
    expect(five9ContactCenterProviderManifest.capabilities.find((capability) =>
      capability.capability === "handoff"
    )?.description).toContain("without claiming typed contact, callback, CRM, campaign");
    expect(five9ContactCenterProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    )).toContain("five9ConfiguredRequest");
    expect(five9ContactCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toEqual(expect.arrayContaining(["transfer", "send"]));
    expect(five9ContactCenterProviderManifest.limitations.join(" ")).toContain("Per-conversation handoff calls cannot override");
  });

  it("creates Five9 handoff requests through the configured path", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "contact-1" }), { status: 201 }));
    const client = createFive9ContactCenterClient({
      apiBaseUrl: "https://api.five9.example.test",
      authorizationHeader: "Basic configured",
      defaultHandoffPath: "/custom/cognidesk/five9-handoff",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      payload: { number1: "+15551234567", campaignName: "callbacks" },
    })).resolves.toMatchObject({ id: "contact-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.five9.example.test/custom/cognidesk/five9-handoff",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ authorization: "Basic configured" }),
      }),
    );
  });

  it("does not allow per-call Five9 handoff paths to become hidden campaign or transfer actions", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "handoff-1" }), { status: 201 }));
    const client = createFive9ContactCenterClient({
      apiBaseUrl: "https://api.five9.example.test",
      authorizationHeader: "Basic configured",
      defaultHandoffPath: "/custom/cognidesk/five9-handoff",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      payload: { number1: "+15551234567" },
      path: "/appsvcs/rs/svc/orgs/current/campaigns/current/contacts",
    } as never)).resolves.toMatchObject({ id: "handoff-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.five9.example.test/custom/cognidesk/five9-handoff",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("does not assume Five9 handoff or readiness paths", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({}), { status: 200 }));
    const client = createFive9ContactCenterClient({
      apiBaseUrl: "https://api.five9.example.test",
      authorizationHeader: "Basic configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({ payload: {} }))
      .rejects.toThrow("Five9 handoff path must be configured by the SDK app");
    await expect(client.readiness())
      .rejects.toThrow("Five9 readiness path must be configured by the SDK app");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("documents Five9 configured endpoints as a named generic escape hatch", () => {
    const client = createFive9ContactCenterClient({
      apiBaseUrl: "https://api.five9.example.test",
      authorizationHeader: "Basic configured",
      defaultHandoffPath: "/custom/cognidesk/five9-handoff",
      readinessPath: "/custom/readiness",
      fetch: vi.fn() as unknown as typeof fetch,
    });

    expectTypeOf(client.createHandoff).returns.resolves.toMatchTypeOf<Five9ConfiguredRequestResponse>();
    expectTypeOf(client.readiness).returns.resolves.toMatchTypeOf<Five9ConfiguredRequestResponse>();
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: five9ContactCenterProviderManifest,
      channels: [{
        id: "contact-center",
        channel: "contactCenter",
        providerPackageIds: [five9ContactCenterProviderManifest.id],
        enabledCapabilities: ["handoff"],
      }],
      credentialStatuses: five9ContactCenterCredentialStatuses({
        apiBaseUrl: "https://api.five9.example.test",
        apiAccessConfigured: true,
        routingConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
    expect(five9ContactCenterCredentialStatuses({
      apiBaseUrl: "https://api.five9.example.test",
      apiAccessConfigured: true,
      routingConfigured: true,
    })[1]?.scopes).toBeUndefined();
  });
});
