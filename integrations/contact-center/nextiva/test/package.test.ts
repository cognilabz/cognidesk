import { readFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";
import type { NextivaProviderClient } from "../src/index.js";

describe("@cognidesk/integration-contact-center-nextiva", () => {
  it("records the package-level provider SDK decision", async () => {
    const manifestModule = await import("../src/manifest.js");
    const packageJson = readPackageJson();

    expect(packageJson.cognidesk.providerSdkDependencies).toEqual([]);
    expect(packageJson.cognidesk.providerSdkDecision).toMatchObject({
      checkedAt: "2026-06-25",
      typedClientOverride: "NextivaProviderClient",
    });
    expect(packageJson.cognidesk.providerSdkDecision.defaultRestPolicy).toContain("rest-adapter");
    expect(packageJson.cognidesk.providerSdkDecision.checkedPackages.length).toBeGreaterThan(0);
    expect(manifestModule.nextivaSupportSlice.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
    expect(manifestModule.nextivaProviderManifestInput.metadata.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
  });

  it("declares the built-in REST adapter metadata", async () => {
    const manifestModule = await import("../src/manifest.js");
    const metadata = JSON.stringify(manifestModule.nextivaProviderManifest.metadata);

    expect(manifestModule.nextivaProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-nextiva");
    expect(manifestModule.nextivaSupportSlice.implementationStrategy).toBe("provider-rest-adapter");
    expect(manifestModule.nextivaSupportSlice.adapterKind).toBe("no-suitable-runtime-sdk-rest-adapter");
    expect(manifestModule.nextivaSupportSlice.packageOwnedRestClient).toBe(true);
    expect(manifestModule.nextivaSupportSlice.hostClientEscapeHatch).toBe("NextivaClientOptions.providerClient");
    expect(manifestModule.nextivaSupportSlice.sdkDecision).toMatchObject({
      checkedAt: "2026-06-25",
      result: "no-suitable-server-side-sdk",
    });
    expect(metadata).not.toContain("host-injected-only");
    expect(metadata).toContain("fail-closed");
    expect(metadata).not.toContain("direct-http-support-slice");
  });

  it("records checked SDK packages as unsuitable for this server runtime", async () => {
    const manifestModule = await import("../src/manifest.js");
    const checkedPackages = manifestModule.nextivaSupportSlice.sdkDecision.checkedPackages;

    expect(checkedPackages).toEqual(expect.arrayContaining([
      expect.objectContaining({
        package: "ncx-sdk",
        checkedVersion: "1.5.8",
        result: "not-used-as-runtime-rest-client",
      }),
      expect.objectContaining({
        package: "ncx-web-sdk",
        checkedVersion: "0.0.1-dev.6",
        license: "UNLICENSED",
        result: "not-used-as-runtime-rest-client",
      }),
      expect.objectContaining({
        package: "ncx-react-sdk",
        checkedVersion: "0.0.1-dev.10",
        license: "UNLICENSED",
        result: "not-used-as-runtime-rest-client",
      }),
    ]));
  });

  it("binds declared operations to built-in REST handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createNextivaIntegration({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: async () => new Response("{}"),
    });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("uses the default adapter with encoded paths, headers, and JSON body", async () => {
    const mod = await import("../src/index.js");
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true })));
    const client = mod.createNextivaClient({
      baseUrl: "https://api.example.test",
      apiKey: "key_123",
      apiKeyHeaderName: "x-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.request({
      method: "POST",
      path: "/workitems/{workItemId}",
      pathParams: { workItemId: "work/123" },
      body: { status: "queued" },
      allowMutation: true,
      classification: "host-reviewed-workitem",
    });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(url)).toBe("https://api.example.test/workitems/work%2F123");
    expect(init?.method).toBe("POST");
    expect(init?.body).toBe(JSON.stringify({ status: "queued" }));
    expect(init?.headers).toMatchObject({
      "x-api-key": "key_123",
      "content-type": "application/json",
    });
  });

  it("delegates to an injected provider client override", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createNextivaClient({ baseUrl: "https://api.example.test", providerClient });

    await client.createHandoff({ payload: { conversationId: "conv_123" } });

    expect(client.providerClient).toBe(providerClient);
    expect(providerClient.createHandoff).toHaveBeenCalledWith({ payload: { conversationId: "conv_123" } });
  });

  it("validates typed handoff payloads before invoking the provider client", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createNextivaClient({ providerClient });

    expect(() => client.createHandoff(null as never)).toThrow(/handoff input object/);
    expect(() => client.createHandoff({ payload: ["not-an-object"] as never })).toThrow(/handoff payload/);
    expect(() => client.createHandoff({ payload: { invalid: undefined } as never })).toThrow(/handoff payload.invalid/);

    expect(providerClient.createHandoff).not.toHaveBeenCalled();
  });

  it("normalizes extension request methods before enforcing mutation policy", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createNextivaClient({ providerClient });

    expect(() => client.request({ method: "TRACE" as never, path: "/danger", allowMutation: true, classification: "host-reviewed-extension" }))
      .toThrow(/not supported/);
    expect(() => client.request({ method: "post" as never, path: "/danger", allowMutation: true }))
      .toThrow(/classification/);

    await client.request({
      method: "post" as never,
      path: "/danger",
      allowMutation: true,
      classification: "host-reviewed-extension",
    });

    expect(providerClient.request).toHaveBeenCalledWith(expect.objectContaining({
      method: "POST",
      path: "/danger",
      allowMutation: true,
      classification: "host-reviewed-extension",
    }));
  });

  it("rejects unreviewed operation IDs, absolute paths, and non-JSON bodies before provider calls", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createNextivaClient({ providerClient });

    expect(() => client.request({ operationId: "missingOperation", path: "/contacts" }))
      .toThrow(/not in the reviewed allowlist/);
    expect(() => client.request({ method: "GET", path: "https://api.example.test/contacts" }))
      .toThrow(/relative API path/);
    expect(() => client.request({
      method: "POST",
      path: "/danger",
      body: { attemptedAt: new Date() } as never,
      allowMutation: true,
      classification: "host-reviewed-extension",
    })).toThrow(/request body.attemptedAt/);

    expect(providerClient.request).not.toHaveBeenCalled();
  });

  it("surfaces provider JSON error payloads from the default adapter", async () => {
    const mod = await import("../src/index.js");
    const client = mod.createNextivaClient({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: async () => new Response(JSON.stringify({ error: "bad_request" }), { status: 400, statusText: "Bad Request" }),
    });

    await expect(client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .rejects.toMatchObject({ status: 400, payload: { error: "bad_request" } });
  });
});

function fakeProviderClient(): NextivaProviderClient {
  return {
    createHandoff: vi.fn(async () => ({ ok: true })),
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
