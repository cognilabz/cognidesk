import { readFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";
import type { ZoomContactCenterProviderClient, ZoomContactCenterStartEngagementBody } from "../src/index.js";

describe("@cognidesk/integration-contact-center-zoom", () => {
  it("records the package-level provider SDK decision", async () => {
    const manifestModule = await import("../src/manifest.js");
    const packageJson = readPackageJson();

    expect(packageJson.cognidesk.providerSdkDependencies).toEqual([]);
    expect(packageJson.cognidesk.providerSdkDecision).toMatchObject({
      checkedAt: "2026-06-25",
      typedClientOverride: "ZoomContactCenterProviderClient",
    });
    expect(packageJson.cognidesk.providerSdkDecision.defaultRestPolicy).toContain("rest-adapter");
    expect(packageJson.cognidesk.providerSdkDecision.checkedPackages.length).toBeGreaterThan(0);
    expect(manifestModule.zoomContactCenterSupportSlice.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
    expect(manifestModule.zoomContactCenterProviderManifestInput.metadata.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
  });

  it("declares the built-in REST adapter metadata", async () => {
    const manifestModule = await import("../src/manifest.js");
    const metadata = JSON.stringify(manifestModule.zoomContactCenterProviderManifest.metadata);

    expect(manifestModule.zoomContactCenterProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-zoom");
    expect(manifestModule.zoomContactCenterRestSupportSlice).toBe(manifestModule.zoomContactCenterSupportSlice);
    expect(manifestModule.zoomContactCenterSupportSlice.implementationStrategy).toBe("provider-rest-adapter");
    expect(manifestModule.zoomContactCenterSupportSlice.adapterKind).toBe("no-official-sdk-rest-adapter");
    expect(manifestModule.zoomContactCenterSupportSlice.runtimePolicy.failClosed).toBe(true);
    expect(manifestModule.zoomContactCenterProviderManifest.operations.map((operation) => operation.alias))
      .toEqual([...manifestModule.zoomContactCenterOperationAliases]);
    expect(metadata).toContain("providerClient.request");
    expect(metadata).not.toContain("host-injected-only");
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

  it("uses the default typed REST adapter with encoded paths, headers, query, and JSON body", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true })));
    const client = mod.createZoomContactCenterClient({
      baseUrl: "https://api.example.test",
      accessToken: "token_123",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.readContact({
      engagementId: "eng/123",
      query: { include: ["participants", "queue"] },
    });
    await client.startContact({
      body: validStartEngagementBody(),
      idempotencyKey: "idem_123",
    });

    const [readUrl, readInit] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(readUrl)).toBe("https://api.example.test/contact_center/engagements/eng%2F123?include=participants&include=queue");
    expect(readInit?.method).toBe("GET");
    expect(readInit?.headers).toMatchObject({
      authorization: "Bearer token_123",
    });

    const [startUrl, startInit] = fetchMock.mock.calls[1] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(startUrl)).toBe("https://api.example.test/contact_center/engagement");
    expect(startInit?.method).toBe("POST");
    expect(startInit?.body).toBe(JSON.stringify(validStartEngagementBody()));
    expect(startInit?.headers).toMatchObject({
      authorization: "Bearer token_123",
      "idempotency-key": "idem_123",
      "content-type": "application/json",
    });
  });

  it("delegates to an injected provider client override", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createZoomContactCenterClient({ baseUrl: "https://api.example.test", providerClient });

    await client.readContact({ engagementId: "engagement_123" });

    expect(client.providerClient).toBe(providerClient);
    expect(providerClient.readContact).toHaveBeenCalledWith({ pathParams: { engagementId: "engagement_123" } });
  });

  it("fails closed before provider calls for malformed typed inputs", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createZoomContactCenterClient({ providerClient });

    expect(() => client.readContact({} as never)).toThrow(/readContact\.engagementId/);
    expect(() => client.startContact({ body: { ...validStartEngagementBody(), flow: {} } as never })).toThrow(/flow\.flow_entry_id/);
    expect(providerClient.readContact).not.toHaveBeenCalled();
    expect(providerClient.startContact).not.toHaveBeenCalled();
  });

  it("normalizes host-client extension request methods before enforcing mutation policy", async () => {
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

  it("fails closed on unreviewed default REST extension paths", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true })));
    const client = mod.createZoomContactCenterClient({
      baseUrl: "https://api.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    expect(() => client.request({ method: "GET", path: "/contact_center/unreviewed" }))
      .toThrow(/reviewed operationId/);
    expect(fetchMock).not.toHaveBeenCalled();

    await client.request({ operationId: "getEngagement", pathParams: { engagementId: "eng/123" } });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(url)).toBe("https://api.example.test/contact_center/engagements/eng%2F123");
    expect(init?.method).toBe("GET");
  });

  it("fails closed when the default REST provider client is called directly", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true })));
    const client = mod.createZoomContactCenterClient({
      baseUrl: "https://api.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    expect(() => client.providerClient.startContact({ body: { ...validStartEngagementBody(), channels: [] } as never }))
      .toThrow(/channels must be a non-empty array/);
    expect(() => client.providerClient.readContact({ pathParams: {} }))
      .toThrow(/readContact\.pathParams\.engagementId/);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects malformed provider client overrides at construction", async () => {
    const mod = await import("../src/index.js");

    expect(() => mod.createZoomContactCenterClient({ providerClient: { createHandoff: vi.fn(), startContact: vi.fn() } as never }))
      .toThrow(/missing required method\(s\): readContact/);
  });

  it("surfaces provider JSON error payloads from the default adapter", async () => {
    const mod = await import("../src/index.js");
    const client = mod.createZoomContactCenterClient({
      baseUrl: "https://api.example.test",
      fetch: async () => new Response(JSON.stringify({ error: "missing_scope" }), { status: 403, statusText: "Forbidden" }),
    });

    await expect(client.startContact({ body: validStartEngagementBody() }))
      .rejects.toMatchObject({ status: 403, payload: { error: "missing_scope" } });
  });
});

function validStartEngagementBody(): ZoomContactCenterStartEngagementBody {
  return {
    work_item_variables: {
      work_item_id: "ticket_123",
      work_item_name: "Follow up on ticket 123",
      work_item_origin: "cognidesk",
      work_item_priority: 1,
      work_item_type_id: "work_item_type_123",
    },
    flow: {
      flow_entry_id: "flow_entry_123",
    },
    language_code: "en-US",
    channels: [
      {
        channel: "work_item",
        channel_source: "API",
      },
    ],
    consumers: [
      {
        consumer_display_name: "Jill Doe",
        consumer_email: "jill@example.test",
        consumer_external_id: "consumer_123",
      },
    ],
    variables: [
      {
        name: "global_custom.ticket_id",
        value: "ticket_123",
      },
    ],
  };
}

function fakeProviderClient(): ZoomContactCenterProviderClient {
  return {
    createHandoff: vi.fn(async () => ({ ok: true })),
    startContact: vi.fn(async () => ({ ok: true })),
    readContact: vi.fn(async () => ({ ok: true })),
    request: vi.fn(async () => ({ ok: true })),
    readiness: vi.fn(async () => ({ ok: true })),
  };
}

function readPackageJson() {
  return JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")) as {
    cognidesk: {
      providerSdkDependencies: string[];
      providerSdkDecision: {
        checkedAt: string;
        typedClientOverride: string;
        defaultRestPolicy: string;
        checkedPackages: unknown[];
      };
    };
  };
}
