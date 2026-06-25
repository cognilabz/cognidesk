import { Buffer } from "node:buffer";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it, vi } from "vitest";
import {
  createGorgiasTicketingClient,
  createGorgiasTicketingIntegration,
  type GorgiasTicketingProviderClient,
} from "../src/index.js";
import { gorgiasTicketingProviderManifest as manifestOnly } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-gorgias", () => {
  it("exports a provider REST adapter Gorgias decision", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/integration-ticketing-gorgias");
    expect(manifestOnly.metadata).toMatchObject({
      implementationStrategy: "provider-rest-adapter",
      providerClient: {
        interface: "GorgiasTicketingProviderClient",
        defaultClient: "built-in-rest-adapter",
      },
      sdkEvaluation: {
        result: "no-official-maintained-runtime-sdk",
        officialBackendJavaScriptSdk: false,
      },
      providerRestAdapterException: {
        strict: true,
        baseUrlPolicy: "required-account-subdomain-url; accepts https://{subdomain}.gorgias.com or the Gorgias Base API URL ending in /api",
        providerSdkDependencyPolicy: "do-not-add-third-party-gorgias-sdk-as-default-runtime-dependency",
      },
    });
    expect(manifestOnly.metadata).toHaveProperty("sdkDecision", "no-official-sdk-rest-adapter");
  });

  it("binds declared operations to handlers", () => {
    const integration = createGorgiasTicketingIntegration({
      providerClient: createProviderClient(),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("creates Gorgias ticket messages through the host provider client", async () => {
    const calls: unknown[] = [];
    const integration = createGorgiasTicketingIntegration({
      providerClient: createProviderClient({
        async createTicketMessage(ticketId, payload) {
          calls.push({ ticketId, payload });
          return { id: 5 };
        },
      }),
    });
    await integration.run("ticket.comment.create", { ticketId: 7, message: { body_text: "Hello", channel: "email", from_agent: true } });
    expect(calls).toEqual([
      {
        ticketId: 7,
        payload: { body_text: "Hello", channel: "email", from_agent: true },
      },
    ]);
  });

  it("fails closed without a host-injected provider client", async () => {
    const integration = createGorgiasTicketingIntegration();
    await expect(integration.run("ticket.read", { ticketId: 7 })).rejects.toThrow("Gorgias provider client is required");
  });

  it("normalizes raw REST methods and requires complete Basic auth credentials", async () => {
    const fetchMock = vi.fn(async () => jsonResponse({ ok: true }));
    const client = createGorgiasTicketingClient({
      baseUrl: "https://gorgias.example.test/api/",
      apiKey: "gorgias-key",
      apiEmail: "agent@example.test",
      fetch: fetchMock,
    });

    await expect(client.rawRequest?.("/api/custom", { method: "patch" })).resolves.toEqual({ ok: true });
    const firstRequest = fetchMock.mock.calls[0] as unknown as [string, RequestInit | undefined];
    expect(firstRequest[0]).toBe("https://gorgias.example.test/api/custom");
    expect(firstRequest[1]?.method).toBe("PATCH");
    expect(new Headers(firstRequest[1]?.headers).get("Authorization"))
      .toBe(`Basic ${Buffer.from("agent@example.test:gorgias-key").toString("base64")}`);

    await expect(client.rawRequest?.("/api/custom", { method: "TRACE" }))
      .rejects.toThrow("Unsupported Gorgias HTTP method");
    expect(fetchMock).toHaveBeenCalledTimes(1);

    const missingUsernameClient = createGorgiasTicketingClient({
      baseUrl: "https://gorgias.example.test",
      apiKey: "gorgias-key",
      fetch: fetchMock,
    });
    await expect(missingUsernameClient.readiness()).rejects.toThrow("apiEmail or apiUsername");

    const missingBaseUrlClient = createGorgiasTicketingClient({
      apiKey: "gorgias-key",
      apiEmail: "agent@example.test",
      fetch: fetchMock,
    });
    await expect(missingBaseUrlClient.readiness()).rejects.toThrow("requires baseUrl");
  });
});

function createProviderClient(
  overrides: Partial<GorgiasTicketingProviderClient> = {},
): GorgiasTicketingProviderClient {
  const response = async () => ({});
  return {
    createTicket: response,
    getTicket: response,
    updateTicket: response,
    listTickets: response,
    createTicketMessage: response,
    listMessages: response,
    readiness: response,
    ...overrides,
  };
}

function jsonResponse(body: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
    ...init,
  });
}
