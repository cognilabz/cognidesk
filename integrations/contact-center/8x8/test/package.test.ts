import { readFileSync } from "node:fs";
import { describe, expect, it, vi } from "vitest";
import {
  createEightByEightClient,
  createEightByEightIntegration,
  type EightByEightRawClient,
} from "../src/index.js";
import { eightByEightProviderManifest, eightByEightSupportSlice } from "../src/manifest.js";

describe("@cognidesk/integration-contact-center-8x8", () => {
  it("records the package-level provider SDK decision", async () => {
    const manifestModule = await import("../src/manifest.js");
    const packageJson = readPackageJson();
    expect(packageJson.cognidesk.providerSdkDecision).toMatchObject({
      checkedAt: "2026-06-25",
      typedClientOverride: "EightByEightRawClient",
    });
    expect(packageJson.cognidesk.providerSdkDecision.defaultRestPolicy).toContain("rest-adapter");
    expect(packageJson.cognidesk.providerSdkDecision.checkedPackages.length).toBeGreaterThan(0);
    expect(manifestModule.eightByEightSupportSlice.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
    expect(manifestModule.eightByEightProviderManifestInput.metadata.providerSdkDecision).toEqual(packageJson.cognidesk.providerSdkDecision);
  });

  it("declares the built-in REST adapter metadata", () => {
    const metadata = JSON.stringify(eightByEightProviderManifest.metadata);

    expect(eightByEightProviderManifest.packageName).toBe("@cognidesk/integration-contact-center-8x8");
    expect(eightByEightSupportSlice.implementationStrategy).toBe("provider-rest-adapter");
    expect(eightByEightSupportSlice.adapterKind).toBe("no-official-sdk-rest-adapter");
    expect(eightByEightSupportSlice.runtimePolicy.failClosed).toBe(true);
    expect(eightByEightSupportSlice.allowedOperations.map((operation) => operation.id))
      .toContain("setagentstatus");
    expect(eightByEightSupportSlice.allowedOperations.map((operation) => operation.alias))
      .toContain("contact-center.handoff.request");
    expect(metadata).toContain("provider-rest-adapter");
    expect(metadata).not.toContain("host-injected-only");
    expect(metadata).toContain("fail-closed");
    expect(metadata).not.toContain("direct-http-support-slice");
  });

  it("binds declared operations to built-in REST handlers", () => {
    const integration = createEightByEightIntegration({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: async () => new Response("{}"),
    });
    expect(integration.bindingReport).toMatchObject({ missingHandlerAliases: [], extraHandlerAliases: [], invalidExtensionOperationAliases: [] });
  });

  it("uses the default adapter with encoded paths, headers, and JSON body", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true })));
    const client = createEightByEightClient({
      baseUrl: "https://api.example.test/",
      accessToken: "token_123",
      apiKey: "key_123",
      apiKeyHeaderName: "x-api-key",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.startContact({
      tenantId: "tenant/123",
      agentId: "agent_123",
      prefix: "1",
      number: "15551234567",
      callerId: "12015551212",
      idempotencyKey: "idem_123",
    })).resolves.toEqual({ ok: true });

    const [url, init] = fetchMock.mock.calls[0] as unknown as [RequestInfo | URL, RequestInit];
    expect(String(url)).toBe("https://api.example.test/tenants/tenant%2F123/calls");
    expect(init?.method).toBe("POST");
    expect(init?.body).toBe(JSON.stringify({
      agentId: "agent_123",
      prefix: "1",
      number: "15551234567",
      callerId: "12015551212",
    }));
    expect(init?.headers).toMatchObject({
      authorization: "Bearer token_123",
      "x-api-key": "key_123",
      "idempotency-key": "idem_123",
      "content-type": "application/json",
    });
  });

  it("delegates to an injected raw client override", async () => {
    const rawClient = fakeEightByEightRawClient();
    const client = createEightByEightClient({ baseUrl: "https://api.example.test", rawClient });

    await client.updateAgentStatus({
      tenantId: "tenant_123",
      agentId: "agent_123",
      "agent-status": 1,
    });

    expect(client.rawClient).toBe(rawClient);
    expect(rawClient.updateAgentStatus).toHaveBeenCalledWith({
      tenantId: "tenant_123",
      agentId: "agent_123",
      "agent-status": 1,
    });
  });

  it("validates raw client contact inputs before delegation", () => {
    const rawClient = fakeEightByEightRawClient();
    const client = createEightByEightClient({ rawClient });

    expect(() => client.startContact({} as never)).toThrow(/startContact\.tenantId/);
    expect(() => client.startContact([] as never)).toThrow(/input object/);
    expect(() => client.startContact({ tenantId: "tenant_123", agentId: "agent_123", prefix: "1", callerId: "1" } as never))
      .toThrow(/startContact\.number/);
    expect(() => client.endContact({ tenantId: "tenant_123" } as never)).toThrow(/endContact\.interactionId/);
    expect(() => client.endContact({ tenantId: "tenant_123", interactionId: "interaction_123", endPostProcessing: "true" } as never))
      .toThrow(/endContact\.endPostProcessing/);
    expect(() => client.updateAgentStatus({ tenantId: "tenant_123", agentId: "agent_123" } as never))
      .toThrow(/updateAgentStatus\.agent-status/);
    expect(() => client.updateAgentStatus({ tenantId: "tenant_123", agentId: "agent_123", "agent-status": 2 } as never))
      .toThrow(/one of 1, 3, 4, or 5/);

    expect(rawClient.startContact).not.toHaveBeenCalled();
    expect(rawClient.endContact).not.toHaveBeenCalled();
    expect(rawClient.updateAgentStatus).not.toHaveBeenCalled();
  });

  it("fails closed before network calls for invalid default adapter input", () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true })));
    const client = createEightByEightClient({
      baseUrl: "https://api.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    expect(() => client.startContact({
      tenantId: "tenant_123",
      agentId: "agent_123",
      prefix: "1",
      number: "",
      callerId: "12015551212",
    })).toThrow(/startContact\.number/);
    expect(() => client.updateAgentStatus({
      tenantId: "tenant_123",
      agentId: "agent_123",
      "agent-status": 11,
    } as never)).toThrow(/one of 1, 3, 4, or 5/);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("surfaces provider JSON error payloads from the default adapter", async () => {
    const client = createEightByEightClient({
      baseUrl: "https://api.example.test",
      defaultHandoffPath: "/handoff",
      fetch: async () => new Response(JSON.stringify({ error: "denied" }), { status: 403, statusText: "Forbidden" }),
    });

    await expect(client.createHandoff({ payload: { conversationId: "conv_123" } }))
      .rejects.toMatchObject({ status: 403, payload: { error: "denied" } });
  });
});

function fakeEightByEightRawClient(): EightByEightRawClient {
  return {
    createHandoff: vi.fn(async () => ({ id: "handoff_123" })),
    startContact: vi.fn(async () => ({ id: "interaction_123" })),
    endContact: vi.fn(async () => ({ id: "interaction_123", ended: true })),
    updateAgentStatus: vi.fn(async () => ({ id: "agent_123", status: "available" })),
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
