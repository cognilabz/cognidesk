import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import { readProviderCoverageArtifact } from "../../provider-coverage-artifacts.js";
import {
  createKustomerTicketingClient,
  createKustomerTicketingLiveChecks,
  kustomerTicketingCredentialStatuses,
  kustomerTicketingProviderManifest,
} from "../../../src/ticketing/kustomer/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest", () => {
    expect(kustomerTicketingProviderManifest).toMatchObject({
      id: "ticketing.kustomer",
      packageName: "@cognidesk/integrations",
      category: "ticketing",
      provider: "kustomer",
      coverage: {
        scope: "full-provider-api",
      },
    });
    expect(kustomerTicketingProviderManifest.coverage.notes.join(" "))
      .toContain("generated per-operation functions");
    expect(kustomerTicketingProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developer.kustomer.com/kustomer-api-docs/reference",
        "https://dash.readme.com/api/v1/api-registry/a9esg22kmox9ylt0",
        "https://developer.kustomer.com/kustomer-api-docs/reference/getmessages",
        "https://developer.kustomer.com/kustomer-api-docs/reference/createmessage",
        "https://developer.kustomer.com/kustomer-api-docs/reference/createadraftbycustomer",
        "https://help.kustomer.com/api-keys-SJs5YTIWX",
        "https://help.kustomer.com/permissions-for-common-api-requests-HkltTBZbN",
      ]));
    expect(kustomerTicketingProviderManifest.credentialRequirements[0]?.scopes)
      .toEqual(expect.arrayContaining([
        "org.permission.conversation.create",
        "org.user.message.read",
        "org.user.message.write",
        "org.permission.message.create",
        "org.permission.draft.create",
      ]));
    const createObjects = kustomerTicketingProviderManifest.capabilities
      .find((capability) => capability.capability === "create-provider-object")?.providerObjects;
    expect(createObjects).toEqual(expect.arrayContaining([
      expect.objectContaining({ kind: "kustomerMessage" }),
      expect.objectContaining({ kind: "kustomerDraft" }),
    ]));
    const coverage = readProviderCoverageArtifact("docs/provider-coverage/kustomer-public-api-2026-06-18.operations.json");
    expect(kustomerTicketingProviderManifest.metadata).toMatchObject({
      fullProviderApiVerification: {
        coverageArtifact: "docs/provider-coverage/kustomer-public-api-2026-06-18.operations.json",
        functionCatalogArtifact: "docs/provider-coverage/kustomer-public-api-2026-06-18.functions.json",
        documentedOperationCount: coverage.spec?.documentedOperationCount,
        implementedOperationCount: coverage.localSurface?.generatedOperationCount,
        generatedFunctionCount: coverage.localSurface?.generatedFunctionCount,
        unimplementedOperationCount: 0,
      },
    });
    expect(coverage.localSurface?.supportHelperOperationCount).toBe(7);
    expect(coverage.localSurface?.supportHelperGapOperationCount).toBe(403);
  });

  it("creates Kustomer conversations", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "conversation-1" }), { status: 201 }));
    const client = createKustomerTicketingClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createConversation({ customer: "customer-1", name: "Flight disruption" }))
      .resolves.toMatchObject({ id: "conversation-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.kustomerapp.com/v1/conversations",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ authorization: "Bearer configured" }),
      }),
    );
  });

  it("lists and creates Kustomer messages for handoff workflows", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ data: [] }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ id: "message-1" }), { status: 201 }));
    const client = createKustomerTicketingClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listMessages({ page: 1, pageSize: 100 }))
      .resolves.toMatchObject({ data: [] });
    await expect(client.createMessage({
      channel: "email",
      direction: "out",
      app: "cognidesk",
      customer: "customer-1",
      conversation: "conversation-1",
    })).resolves.toMatchObject({ id: "message-1" });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.kustomerapp.com/v1/messages?page=1&pageSize=100",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({ authorization: "Bearer configured" }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.kustomerapp.com/v1/messages",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          channel: "email",
          direction: "out",
          app: "cognidesk",
          customer: "customer-1",
          conversation: "conversation-1",
        }),
      }),
    );
  });

  it("rejects undocumented Kustomer message channels before calling the API", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "message-1" }), { status: 201 }));
    const client = createKustomerTicketingClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createMessage({
      channel: "note",
      direction: "out",
      app: "cognidesk",
    })).rejects.toThrow("documented Create Message channels");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("creates Kustomer customer drafts through the documented customer drafts endpoint", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "draft-1" }), { status: 200 }));
    const client = createKustomerTicketingClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createCustomerDraft("customer-1", {
      channel: "email",
      body: "Internal handoff draft.",
      conversation: "conversation-1",
    }, { createConversation: true })).resolves.toMatchObject({ id: "draft-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.kustomerapp.com/v1/customers/customer-1/drafts?createConversation=true",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer configured",
          "content-type": "application/json",
        }),
        body: JSON.stringify({
          channel: "email",
          body: "Internal handoff draft.",
          conversation: "conversation-1",
        }),
      }),
    );
  });

  it("rejects undocumented Kustomer draft channels before calling the API", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "draft-1" }), { status: 200 }));
    const client = createKustomerTicketingClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createCustomerDraft("customer-1", {
      channel: "note",
      body: "Internal handoff draft.",
    })).rejects.toThrow("documented customer messaging channels");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("checks Kustomer readiness through the documented messages endpoint", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ data: [] }), { status: 200 }));
    const client = createKustomerTicketingClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.readiness()).resolves.toMatchObject({ data: [] });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.kustomerapp.com/v1/messages?pageSize=1",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: kustomerTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [kustomerTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: kustomerTicketingCredentialStatuses({ apiAccessConfigured: true }),
    });

    expect(result.status).toBe("passed");
  });

  it("passes live conformance with configured Kustomer readiness", async () => {
    const result = await runProviderConformance({
      manifest: kustomerTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [kustomerTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: kustomerTicketingCredentialStatuses({ apiAccessConfigured: true }),
      live: {
        enabled: true,
        checks: createKustomerTicketingLiveChecks({
          accessToken: "configured",
          client: { async readiness() {
            return { id: "org-1" };
          } },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.messages",
      status: "passed",
    }));
  });

  it("blocks Kustomer live checks when API access is missing", async () => {
    const result = await runProviderConformance({
      manifest: kustomerTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [kustomerTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: kustomerTicketingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createKustomerTicketingLiveChecks({
          accessToken: "missing",
          client: { async readiness() {
            throw new Error("Kustomer readiness should be credential-blocked before execution.");
          } },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.messages",
      status: "credential-blocked",
    }));
  });
});
