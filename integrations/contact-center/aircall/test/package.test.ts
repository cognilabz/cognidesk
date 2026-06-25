import { readFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";
import {
  createAircallClient,
  createAircallIntegration,
  createAircallOperationHandlers,
  type AircallRawClient,
} from "../src/index.js";
import {
  aircallProviderManifest,
  aircallRestSupportSlice,
  aircallSupportSlice,
} from "../src/manifest.js";

describe("@cognidesk/integration-contact-center-aircall", () => {
  it("records the package-level provider SDK decision", async () => {
    const manifestModule = await import("../src/manifest.js");
    const packageJson = readPackageJson();

    expect(packageJson.cognidesk.providerSdkDependencies).toEqual([]);
    expect(packageJson.cognidesk.providerSdkDecision).toMatchObject({
      checkedAt: "2026-06-25",
      typedClientOverride: "AircallRawClient",
    });
    expect(packageJson.cognidesk.providerSdkDecision.defaultRestPolicy).toContain("rest-adapter");
    expect(packageJson.cognidesk.providerSdkDecision.checkedPackages.length).toBeGreaterThan(0);
    expect(manifestModule.aircallSupportSlice.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
    expect(manifestModule.aircallProviderManifestInput.metadata.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
  });

  it("declares the strict Aircall Public API REST adapter metadata", () => {
    const metadata = JSON.stringify(aircallProviderManifest.metadata);

    expect(aircallProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-aircall");
    expect(aircallRestSupportSlice).toBe(aircallSupportSlice);
    expect(aircallSupportSlice.implementationStrategy).toBe("no-official-sdk-rest-adapter");
    expect(aircallSupportSlice.adapterKind).toBe("aircall-public-api-rest-adapter");
    expect(aircallSupportSlice.defaultBaseUrl).toBe("https://api.aircall.io/v1");
    expect(aircallSupportSlice.failClosed).toContain("require Aircall credentials");
    expect(aircallSupportSlice.allowedOperations).toEqual([
      expect.objectContaining({
        id: "transferCall",
        alias: "contact-center.handoff.request",
        method: "POST",
        path: "/calls/{callId}/transfers",
        source: "provider-rest-adapter",
      }),
    ]);
    expect(metadata).toContain("failClosed");
    expect(metadata).toContain("provider-rest-adapter-when-configured");
    expect(metadata).not.toContain("host-configured");
    expect(metadata).not.toContain("direct-http-support-slice");
  });

  it("binds declared operations to built-in REST handlers", () => {
    const integration = createAircallIntegration({
      accessToken: "token_123",
      fetch: async () => new Response(""),
    });
    expect(integration.bindingReport).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
      invalidExtensionOperationAliases: [],
    });
  });

  it("validates handoff operation inputs before delegation", async () => {
    const rawClient: AircallRawClient = { transferCall: vi.fn(async () => ({ id: "transfer_123" })) };
    const handlers = createAircallOperationHandlers({ rawClient });

    await expect(handlers["contact-center.handoff.request"](null)).rejects.toThrow(/input object/);
    expect(rawClient.transferCall).not.toHaveBeenCalled();
  });

  it("uses the documented transfer endpoint with bearer auth and JSON body", async () => {
    const fetchMock = vi.fn(async () => new Response(null, { status: 204 }));
    const client = createAircallClient({
      accessToken: "token_123",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({ callId: 123, userId: 456 })).resolves.toEqual({});

    const [url, init] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(url)).toBe("https://api.aircall.io/v1/calls/123/transfers");
    expect(init?.method).toBe("POST");
    expect(init?.body).toBe(JSON.stringify({ user_id: 456 }));
    expect(init?.headers).toMatchObject({
      authorization: "Bearer token_123",
      "content-type": "application/json",
    });
  });

  it("supports team transfer dispatching with an explicit authorization header", async () => {
    const fetchMock = vi.fn(async () => new Response(null, { status: 204 }));
    const client = createAircallClient({
      baseUrl: "https://api.example.test/v1",
      authorizationHeader: "Basic abc123",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.transferCall({
      callId: "789",
      teamId: "team_123",
      dispatchingStrategy: "longest_idle",
    });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(url)).toBe("https://api.example.test/v1/calls/789/transfers");
    expect(init?.body).toBe(JSON.stringify({
      team_id: "team_123",
      dispatching_strategy: "longest_idle",
    }));
    expect(init?.headers).toMatchObject({ authorization: "Basic abc123" });
  });

  it("fails closed before fetch when Aircall credentials are absent", () => {
    const fetchMock = vi.fn(async () => new Response(null, { status: 204 }));
    const client = createAircallClient({ fetch: fetchMock as unknown as typeof fetch });

    expect(() => client.transferCall({ callId: 123, userId: 456 }))
      .toThrow(/requires accessToken or authorizationHeader/);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects ambiguous transfer destinations before fetch", () => {
    const fetchMock = vi.fn(async () => new Response(null, { status: 204 }));
    const client = createAircallClient({
      accessToken: "token_123",
      fetch: fetchMock as unknown as typeof fetch,
    });

    expect(() => client.transferCall({ callId: 123, userId: 456, number: "+15551234567" }))
      .toThrow(/exactly one of userId, teamId, or number/);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects dispatching strategies without a team transfer", () => {
    const fetchMock = vi.fn(async () => new Response(null, { status: 204 }));
    const client = createAircallClient({
      accessToken: "token_123",
      fetch: fetchMock as unknown as typeof fetch,
    });

    expect(() => client.transferCall({
      callId: 123,
      userId: 456,
      dispatchingStrategy: "random",
    })).toThrow(/only valid for team transfers/);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("does not retry non-idempotent transfer requests", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ error: "try_later" }), { status: 503 }));
    const client = createAircallClient({
      accessToken: "token_123",
      retry: 2,
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.transferCall({ callId: 123, userId: 456 }))
      .rejects.toMatchObject({ status: 503 });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("checks readiness with the documented ping endpoint", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ping: "pong" })));
    const client = createAircallClient({
      accessToken: "token_123",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.readiness()).resolves.toEqual({ ping: "pong" });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(url)).toBe("https://api.aircall.io/v1/ping");
    expect(init?.method).toBe("GET");
  });

  it("delegates to an injected raw client override", async () => {
    const rawClient: AircallRawClient = { transferCall: vi.fn(async () => ({ id: "transfer_123" })) };
    const client = createAircallClient({ rawClient });

    await expect(client.createHandoff({ callId: 123, number: "+15551234567" }))
      .resolves.toEqual({ id: "transfer_123" });

    expect(client.rawClient).toBe(rawClient);
    expect(rawClient.transferCall).toHaveBeenCalledWith({ callId: 123, number: "+15551234567" });
  });

  it("surfaces provider JSON error payloads from the default adapter", async () => {
    const client = createAircallClient({
      accessToken: "token_123",
      fetch: async () => new Response(JSON.stringify({ error: "denied" }), { status: 401, statusText: "Unauthorized" }),
    });

    await expect(client.transferCall({ callId: 123, userId: 456 }))
      .rejects.toMatchObject({ status: 401, payload: { error: "denied" } });
  });
});

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
