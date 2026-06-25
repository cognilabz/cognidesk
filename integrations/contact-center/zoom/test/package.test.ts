import { describe, expect, it, vi } from "vitest";
import type { ZoomContactCenterProviderClient } from "../src/index.js";

describe("@cognidesk/integration-contact-center-zoom", () => {
  it("declares the built-in REST adapter metadata", async () => {
    const manifestModule = await import("../src/manifest.js");
    const metadata = JSON.stringify(manifestModule.zoomContactCenterProviderManifest.metadata);

    expect(manifestModule.zoomContactCenterProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-zoom");
    expect(manifestModule.zoomContactCenterRestSupportSlice).toBe(manifestModule.zoomContactCenterSupportSlice);
    expect(manifestModule.zoomContactCenterSupportSlice.implementationStrategy).toBe("provider-rest-adapter");
    expect(manifestModule.zoomContactCenterSupportSlice.adapterKind).toBe("no-official-sdk-rest-adapter");
    expect(manifestModule.zoomContactCenterProviderManifest.operations.map((operation) => operation.alias))
      .toEqual([...manifestModule.zoomContactCenterOperationAliases]);
    expect(metadata).not.toContain("host-injected-only");
    expect(metadata).not.toContain("fail-closed");
    expect(metadata).not.toContain("direct-http-support-slice");
  });

  it("binds declared operations to built-in REST handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createZoomContactCenterIntegration({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: async () => new Response("{}"),
    });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("uses the default adapter with encoded paths, headers, query, and JSON body", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true })));
    const client = mod.createZoomContactCenterClient({
      baseUrl: "https://api.example.test",
      accessToken: "token_123",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.request({
      method: "POST",
      path: "/contact_center/engagements/{engagementId}/notes",
      pathParams: { engagementId: "eng/123" },
      query: { include: ["participants", "queue"] },
      body: { note: "follow up" },
      allowMutation: true,
      classification: "host-reviewed-note",
      idempotencyKey: "idem_123",
    });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(url)).toBe("https://api.example.test/contact_center/engagements/eng%2F123/notes?include=participants&include=queue");
    expect(init?.method).toBe("POST");
    expect(init?.body).toBe(JSON.stringify({ note: "follow up" }));
    expect(init?.headers).toMatchObject({
      authorization: "Bearer token_123",
      "idempotency-key": "idem_123",
      "content-type": "application/json",
    });
  });

  it("delegates to an injected provider client override", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createZoomContactCenterClient({ baseUrl: "https://api.example.test", providerClient });

    await client.readContact({ pathParams: { engagementId: "engagement_123" } });

    expect(client.providerClient).toBe(providerClient);
    expect(providerClient.readContact).toHaveBeenCalledWith({ pathParams: { engagementId: "engagement_123" } });
  });

  it("normalizes extension request methods before enforcing mutation policy", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createZoomContactCenterClient({ providerClient });

    expect(() => client.request({ method: "TRACE" as never, path: "/contact_center/danger", allowMutation: true, classification: "host-reviewed-extension" }))
      .toThrow(/not supported/);
    expect(() => client.request({ method: "post" as never, path: "/contact_center/danger", allowMutation: true }))
      .toThrow(/classification/);

    await client.request({
      method: "post" as never,
      path: "/contact_center/danger",
      allowMutation: true,
      classification: "host-reviewed-extension",
    });

    expect(providerClient.request).toHaveBeenCalledWith(expect.objectContaining({
      method: "POST",
      path: "/contact_center/danger",
      allowMutation: true,
      classification: "host-reviewed-extension",
    }));
  });

  it("surfaces provider JSON error payloads from the default adapter", async () => {
    const mod = await import("../src/index.js");
    const client = mod.createZoomContactCenterClient({
      baseUrl: "https://api.example.test",
      fetch: async () => new Response(JSON.stringify({ error: "missing_scope" }), { status: 403, statusText: "Forbidden" }),
    });

    await expect(client.startContact({ body: { queueId: "queue_123" } }))
      .rejects.toMatchObject({ status: 403, payload: { error: "missing_scope" } });
  });
});

function fakeProviderClient(): ZoomContactCenterProviderClient {
  return {
    createHandoff: vi.fn(async () => ({ ok: true })),
    startContact: vi.fn(async () => ({ ok: true })),
    readContact: vi.fn(async () => ({ ok: true })),
    request: vi.fn(async () => ({ ok: true })),
    readiness: vi.fn(async () => ({ ok: true })),
  };
}
