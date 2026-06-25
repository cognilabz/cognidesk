import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it, vi } from "vitest";
import { createHelpScoutTicketingClient, createHelpScoutTicketingIntegration, type HelpScoutTicketingProviderClient } from "../src/index.js";
import { helpScoutTicketingProviderManifest as manifestOnly } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-help-scout", () => {
  it("exports a provider REST adapter Inbox API decision", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/integration-ticketing-help-scout");
    expect(manifestOnly.coverage.scope).toBe("support-workflow-subset");
    expect(manifestOnly.metadata).toMatchObject({
      implementation: {
        strategy: "provider-rest-adapter",
        adapterKind: "no-official-sdk-rest-adapter",
        packageOwnedRestClient: true,
        providerClientOverride: true,
        sdkEvaluation: {
          checkedAt: "2026-06-25",
          result: "no-official-maintained-runtime-sdk",
          requiredRuntimeSurface: "server-side Help Scout Inbox API 2.0 ticketing client",
          candidates: expect.arrayContaining([
            expect.objectContaining({
              package: "@helpscout/javascript-sdk",
              checkedVersion: "0.10.0",
              result: "not-runtime-inbox-api-client",
            }),
            expect.objectContaining({
              package: "helpscout-v2",
              result: "rejected-unofficial",
            }),
          ]),
        },
      },
      providerRestAdapterException: {
        status: "accepted",
        adapterKind: "no-official-sdk-rest-adapter",
        allowedDefaultRuntime: "built-in-help-scout-inbox-rest-adapter",
      },
      providerClient: {
        package: "host-provided",
        interface: "HelpScoutTicketingProviderClient",
        importPolicy: "runtime-override",
        defaultClientPolicy: "built-in-rest-adapter",
      },
    });
    expect(manifestOnly.credentialRequirements.map((credential) => credential.id)).toEqual(expect.arrayContaining([
      "help-scout-base-url",
      "help-scout-api-access",
    ]));
    expect(manifestOnly.metadata).toHaveProperty("sdkDecision", "no-official-sdk-rest-adapter");
    expect(JSON.stringify(manifestOnly.metadata)).not.toContain("direct-http-support-slice");
    expect(manifestOnly.coverage.evidence[0]?.url).toBe("https://developer.helpscout.com/mailbox-api/");
    expect(manifestOnly.metadata?.implementation?.allowedOperations).toEqual(expect.arrayContaining([
      expect.objectContaining({ alias: "ticket.create", source: "provider-rest-adapter" }),
      expect.objectContaining({ alias: "ticket.comment.create", source: "provider-rest-adapter" }),
      expect.objectContaining({ alias: "help-scout.readiness", source: "provider-rest-adapter" }),
    ]));
  });

  it("does not depend on non-qualifying Help Scout JavaScript SDK packages", () => {
    const packageRoot = dirname(dirname(fileURLToPath(import.meta.url)));
    const packageJson = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8"));
    expect(packageJson.dependencies).toEqual({
      "@cognidesk/core": "workspace:*",
      "@cognidesk/integration-kit": "workspace:*",
    });
    expect(Object.keys(packageJson.dependencies)).not.toEqual(expect.arrayContaining([
      "@helpscout/javascript-sdk",
      "helpscout",
      "helpscout-v2",
      "@bufferapp/helpscout",
    ]));
  });

  it("binds declared operations to handlers", () => {
    const integration = createHelpScoutTicketingIntegration({
      providerClient: fakeProviderClient(),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("delegates Help Scout notes to the injected provider client", async () => {
    const providerClient = fakeProviderClient();
    const client = createHelpScoutTicketingClient({ providerClient });
    expect(client).toBe(providerClient);

    const integration = createHelpScoutTicketingIntegration({
      providerClient,
    });

    await integration.run("ticket.internalNote.create", { conversationId: 11, note: { text: "Internal" } });
    expect(providerClient.createNote).toHaveBeenCalledWith(11, { text: "Internal" });
  });

  it("fails closed without Help Scout provider credentials or provider client", async () => {
    const integration = createHelpScoutTicketingIntegration();
    await expect(integration.run("ticket.read", { conversationId: 11 }))
      .rejects.toThrow("configure accessToken/apiKey");
  });

  it("normalizes raw REST methods and rejects unsupported methods", async () => {
    const fetchMock = vi.fn(async (_input: RequestInfo | URL, _init?: RequestInit) => jsonResponse({ ok: true }));
    const client = createHelpScoutTicketingClient({
      accessToken: "help-scout-token",
      fetch: fetchMock,
    });

    await expect(client.rawRequest?.("/v2/custom", { method: "put" })).resolves.toEqual({ ok: true });
    expect(fetchMock.mock.calls[0]?.[1]?.method).toBe("PUT");

    await expect(client.rawRequest?.("/v2/custom", { method: "TRACE" }))
      .rejects.toThrow("Unsupported Help Scout HTTP method");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});

function fakeProviderClient(): HelpScoutTicketingProviderClient {
  return {
    createConversation: vi.fn(async (payload) => ({ id: 1, payload })),
    getConversation: vi.fn(async (conversationId) => ({ id: conversationId })),
    updateConversation: vi.fn(async (conversationId, patch) => ({ id: conversationId, patch })),
    listConversations: vi.fn(async (query) => ({ query })),
    createReply: vi.fn(async (conversationId, payload) => ({ id: conversationId, payload })),
    createNote: vi.fn(async (conversationId, payload) => ({ id: conversationId, payload })),
    listThreads: vi.fn(async (conversationId) => ({ conversationId })),
    readiness: vi.fn(async () => ({ ok: true })),
  };
}

function jsonResponse(body: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
    ...init,
  });
}
