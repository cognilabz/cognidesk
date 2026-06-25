import { readFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";

describe("@cognidesk/integration-contact-center-genesys-pureconnect", () => {
  it("records the package-level provider SDK decision", async () => {
    const manifestModule = await import("../src/manifest.js");
    const packageJson = readPackageJson();
    expect(packageJson.cognidesk.providerSdkDecision).toMatchObject({
      checkedAt: "2026-06-25",
      typedClientOverride: "GenesysPureConnectProviderClient",
    });
    expect(packageJson.cognidesk.providerSdkDecision.defaultRestPolicy).toContain("rest-adapter");
    expect(packageJson.cognidesk.providerSdkDecision.checkedPackages.length).toBeGreaterThan(0);
    expect(manifestModule.genesysPureConnectSupportSlice.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
    expect(manifestModule.genesysPureConnectProviderManifestInput.metadata.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
  });

  it("keeps manifest imports metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.genesysPureConnectProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-genesys-pureconnect");
    expect(manifestModule.genesysPureConnectSupportSlice.allowedOperations.length).toBeGreaterThan(0);
    expect(manifestModule.genesysPureConnectSupportSlice.sdkAudit).toMatchObject({
      maintainedRuntimeSdk: false,
      checkedPackages: expect.arrayContaining([
        expect.objectContaining({ name: "machinepack-ic", result: "third-party-unmaintained-icws-package" }),
        expect.objectContaining({ name: "purecloud-platform-client-v2", result: "maintained-genesys-cloud-sdk-not-pureconnect-icws" }),
      ]),
    });
  });

  it("binds declared operations to handlers", async () => {
    const mod = await import("../src/index.js");
    const integration = mod.createGenesysPureConnectIntegration({
      providerClient: fakeProviderClient(),
      defaultHandoffPath: "/handoff",
      readinessPath: "/ready",
    });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("delegates handoff and ICWS operations to the injected provider client", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createGenesysPureConnectClient({
      providerClient,
      defaultHandoffPath: "/configured/handoff",
    });

    await client.createHandoff({
      payload: { conversationId: "conv_123" },
      query: { source: "test" },
      // @ts-expect-error createHandoff intentionally rejects per-call endpoint paths.
      path: "/provider/native-transfer",
    });
    await client.createConnection({ body: { applicationName: "Cognidesk" } });
    await client.request({
      path: "/icws/session-1/interactions",
      method: "GET",
      hostReviewedPath: true,
      classification: "host-reviewed-extension",
    });

    expect(providerClient.createHandoff).toHaveBeenCalledWith({
      payload: { conversationId: "conv_123" },
      query: { source: "test" },
    });
    expect(providerClient.createConnection).toHaveBeenCalledWith({
      body: { applicationName: "Cognidesk" },
      method: "POST",
      path: "/icws/connection",
    });
    expect(providerClient.request).toHaveBeenCalledWith({
      path: "/icws/session-1/interactions",
      method: "GET",
      hostReviewedPath: true,
      classification: "host-reviewed-extension",
    });
  });

  it("fails closed for unreviewed ICWS extension paths", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createGenesysPureConnectClient({ providerClient });

    expect(() => client.request({ method: "GET", path: "/icws/session-1/interactions" }))
      .toThrow(/hostReviewedPath=true/);
    expect(() => client.request({ operationId: "sessionRequest" }))
      .toThrow(/concrete reviewed operationId/);
    expect(() => client.request({
      operationId: "notReviewed",
      path: "/icws/session-1/interactions",
      hostReviewedPath: true,
      classification: "host-reviewed-extension",
    })).toThrow(/not in the reviewed allowlist/);

    await client.request({
      operationId: "sessionRequest",
      method: "GET",
      path: "/icws/session-1/interactions",
      hostReviewedPath: true,
      classification: "host-reviewed-extension",
    });

    expect(providerClient.request).toHaveBeenCalledWith(expect.objectContaining({
      operationId: "sessionRequest",
      method: "GET",
      path: "/icws/session-1/interactions",
      hostReviewedPath: true,
      classification: "host-reviewed-extension",
    }));
  });

  it("normalizes extension request methods before enforcing mutation policy", async () => {
    const mod = await import("../src/index.js");
    const providerClient = fakeProviderClient();
    const client = mod.createGenesysPureConnectClient({ providerClient });

    expect(() => client.request({ method: "TRACE" as never, path: "/icws/session-1/danger", allowMutation: true, classification: "host-reviewed-extension" }))
      .toThrow(/not supported/);
    expect(() => client.request({ method: "post" as never, path: "/icws/session-1/danger", hostReviewedPath: true, allowMutation: true }))
      .toThrow(/classification/);

    await client.request({
      method: "post" as never,
      path: "/icws/session-1/danger",
      hostReviewedPath: true,
      allowMutation: true,
      classification: "host-reviewed-extension",
    });

    expect(providerClient.request).toHaveBeenCalledWith(expect.objectContaining({
      method: "POST",
      path: "/icws/session-1/danger",
      hostReviewedPath: true,
      allowMutation: true,
      classification: "host-reviewed-extension",
    }));
  });

  it("creates a built-in REST adapter when configured without a provider client", async () => {
    const mod = await import("../src/index.js");
    const client = mod.createGenesysPureConnectClient({
      baseUrl: "https://api.example.test",
      accessToken: "pureconnect-token",
      defaultHandoffPath: "/configured/handoff",
    });
    expect(client).toBeDefined();
  });
});

function fakeProviderClient() {
  return {
    createHandoff: vi.fn(async () => ({ ok: true })),
    createConnection: vi.fn(async () => ({ ok: true })),
    request: vi.fn(async () => ({ ok: true })),
    readiness: vi.fn(async () => ({ ok: true })),
  };
}

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
