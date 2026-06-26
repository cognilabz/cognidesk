import { readFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";
import type { Five9ProviderClient, Five9RawClient } from "../src/index.js";

describe("@cognidesk/integration-contact-center-five9", () => {
  it("records the package-level provider SDK decision", async () => {
    const manifestModule = await import("../src/manifest.js");
    const packageJson = readPackageJson();
    expect(packageJson.cognidesk.providerSdkDecision).toMatchObject({
      checkedAt: "2026-06-25",
      typedClientOverride: "Five9ProviderClient",
    });
    expect(packageJson.cognidesk.providerSdkDecision.defaultRestPolicy).toContain("rest-adapter");
    expect(packageJson.cognidesk.providerSdkDecision.checkedPackages.length).toBeGreaterThan(0);
    expect(manifestModule.five9RestSupportSlice.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
    expect(manifestModule.five9ProviderManifestInput.metadata.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
  });

  it("declares the built-in REST adapter metadata", async () => {
    const manifestModule = await import("../src/manifest.js");
    const metadata = JSON.stringify(manifestModule.five9ProviderManifestInput.metadata);

    expect(manifestModule.five9ProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-five9");
    expect(manifestModule.five9RestSupportSlice.implementationStrategy).toBe("provider-rest-adapter");
    expect(manifestModule.five9RestSupportSlice.adapterKind).toBe("no-official-sdk-rest-adapter");
    expect(manifestModule.five9RestSupportSlice).toMatchObject({
      providerClientInterface: "Five9ProviderClient",
      officialRuntimeSdkAvailable: false,
      failClosedWithoutHostConfig: true,
    });
    expect(manifestModule.five9ProviderManifestInput.metadata).toMatchObject({
      manifestOnlySafe: true,
      providerClient: {
        interface: "Five9ProviderClient",
        rawClientAlias: "Five9RawClient",
        defaultClientPolicy: "configured-rest-default-with-host-client-override",
      },
      providerRestAdapter: {
        providerClientOverride: "Five9ProviderClient",
        rawClientOverride: "Five9RawClient",
        failClosedWithoutBaseUrl: true,
        failClosedWithoutConfiguredPath: true,
      },
      providerRestAdapterException: {
        status: "accepted",
        failClosed: true,
        hostSdkPath: "Five9ProviderClient",
      },
      checkedProviderSdk: {
        verdict: "no-official-sdk-rest-adapter",
        officialRuntimeSdkAvailable: false,
        candidates: expect.arrayContaining([
          expect.objectContaining({ package: "five9", checkedVersion: "0.1.3", result: "third-party-stale" }),
          expect.objectContaining({ package: "Five9 CRM SDK", result: "not-backend-runtime-sdk" }),
        ]),
      },
    });
    expect(metadata).not.toContain("host-injected-only");
    expect(metadata).toContain("failClosed");
    expect(metadata).not.toContain("direct-http-support-slice");
  });

  it("binds declared operations to built-in REST handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createFive9Integration({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: async () => new Response("{}"),
    });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("uses the default adapter with URL, headers, and JSON body", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ accepted: true })));
    const client = mod.createFive9Client({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      accessToken: "token_123",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.createHandoff({
      payload: { conversationId: "conv_123" },
      query: { source: "test" },
      idempotencyKey: "idem_123",
    });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(url)).toBe("https://api.example.test/handoff?source=test");
    expect(init?.method).toBe("POST");
    expect(init?.body).toBe(JSON.stringify({ conversationId: "conv_123" }));
    expect(init?.headers).toMatchObject({
      authorization: "Bearer token_123",
      "idempotency-key": "idem_123",
      "content-type": "application/json",
    });
  });

  it("delegates to an injected raw client override", async () => {
    const mod = await import("../src/index.js");
    const rawClient: Five9RawClient = { createHandoff: vi.fn(async () => ({ accepted: true })) };
    const client = mod.createFive9Client({ baseUrl: "https://api.example.test", rawClient });

    await expect(client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .resolves.toEqual({ accepted: true });

    expect(client.rawClient).toBe(rawClient);
    expect(rawClient.createHandoff).toHaveBeenCalledWith({ payload: { conversationId: "conv_123" } });
  });

  it("delegates to an injected provider client override", async () => {
    const mod = await import("../src/index.js");
    const providerClient: Five9ProviderClient = { createHandoff: vi.fn(async () => ({ accepted: true })) };
    const client = mod.createFive9Client({ providerClient });

    await expect(client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .resolves.toEqual({ accepted: true });

    expect(client.providerClient).toBe(providerClient);
    expect(client.rawClient).toBe(providerClient);
    expect(providerClient.createHandoff).toHaveBeenCalledWith({ payload: { conversationId: "conv_123" } });
  });

  it("rejects an invalid provider client override before runtime use", async () => {
    const mod = await import("../src/index.js");

    expect(() => mod.createFive9Client({ providerClient: {} as Five9ProviderClient }))
      .toThrow("Five9 requires a providerClient implementing createHandoff()");
  });

  it("fails closed before fetch when REST adapter baseUrl is missing", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ accepted: true })));
    const client = mod.createFive9Client({
      defaultHandoffPath: "/handoff",
      fetch: fetchMock as unknown as typeof fetch,
    });

    expect(() => client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .toThrow("Five9 baseUrl is required to use the built-in REST adapter.");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("fails closed before fetch when REST adapter handoff path is missing", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ accepted: true })));
    const client = mod.createFive9Client({
      baseUrl: "https://api.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    expect(() => client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .toThrow("Five9 handoff path must be configured to use the built-in REST adapter.");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("surfaces provider JSON error payloads from the default adapter", async () => {
    const mod = await import("../src/index.js");
    const client = mod.createFive9Client({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: async () => new Response(JSON.stringify({ error: "rate_limited" }), { status: 429, statusText: "Too Many Requests" }),
    });

    await expect(client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .rejects.toMatchObject({ status: 429, payload: { error: "rate_limited" } });
  });

  it("does not retry handoff POSTs without an idempotency key", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ error: "busy" }), { status: 503 }));
    const client = mod.createFive9Client({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: fetchMock as unknown as typeof fetch,
      retry: { attempts: 2 },
    });

    await expect(client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .rejects.toMatchObject({ status: 503 });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("retries handoff POSTs when an idempotency key is present", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ error: "busy" }), { status: 503 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ accepted: true })));
    const client = mod.createFive9Client({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: fetchMock as unknown as typeof fetch,
      retry: { attempts: 2 },
    });

    await expect(client.createHandoff({
      payload: { conversationId: "conv_123" },
      idempotencyKey: "idem_123",
    })).resolves.toEqual({ accepted: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("passes per-call readiness abort signals to the default adapter", async () => {
    const mod = await import("../src/index.js");
    const controller = new AbortController();
    const fetchMock = vi.fn(async (_url: RequestInfo | URL, init?: RequestInit) => {
      expect(init?.signal).toBe(controller.signal);
      return new Response(JSON.stringify({ ready: true }));
    });
    const client = mod.createFive9Client({
      baseUrl: "https://api.example.test",
      readinessPath: "/ready",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.readiness({ signal: controller.signal })).resolves.toEqual({ ready: true });
  });

  it("fails closed before fetch when REST adapter readiness path is missing", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ready: true })));
    const client = mod.createFive9Client({
      baseUrl: "https://api.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    expect(() => client.readiness())
      .toThrow("Five9 readiness path must be configured to use the built-in REST adapter.");
    expect(fetchMock).not.toHaveBeenCalled();
  });
});

function readPackageJson() {
  return JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")) as {
    cognidesk: {
      providerSdkDecision: {
        checkedAt: string;
        typedClientOverride: string;
        defaultRestPolicy: string;
        checkedPackages: unknown[];
      };
    };
  };
}
