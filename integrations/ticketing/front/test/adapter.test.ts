import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it, vi } from "vitest";
import {
  createFrontTicketingClient,
  createFrontTicketingIntegration,
  type FrontTicketingProviderClient,
  type JsonObject,
} from "../src/index.js";
import { frontTicketingProviderManifest as manifestOnly } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-front", () => {
  it("exports Front provider REST adapter metadata", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/integration-ticketing-front");
    expect(manifestOnly.coverage.scope).toBe("support-workflow-subset");
    expect(manifestOnly.metadata).toHaveProperty("sdkDecision", "no-official-sdk-rest-adapter");
    expect(manifestOnly.metadata).toHaveProperty("implementationStrategy", "provider-rest-adapter");
    expect(manifestOnly.metadata?.implementation).toMatchObject({
      strategy: "provider-rest-adapter",
      providerClientInterface: "FrontTicketingProviderClient",
      packageOwnedRestClient: true,
    });
    expect(manifestOnly.metadata?.checkedProviderSdk).toMatchObject({
      checkedAt: "2026-06-25",
      candidates: expect.arrayContaining([
        expect.objectContaining({
          package: "front-sdk",
          result: "rejected-deprecated-archived",
        }),
        expect.objectContaining({
          package: "@frontapp/plugin-sdk",
          result: "not-runtime-core-api-client",
        }),
        expect.objectContaining({
          package: "front-chat-sdk",
          result: "not-ticketing-core-api-client",
        }),
        expect.objectContaining({
          package: "@utdk/front",
          result: "rejected-generated-preview-incomplete-runtime-client",
        }),
      ]),
    });
    const checkedProviderSdk = manifestOnly.metadata?.checkedProviderSdk as unknown as {
      candidates?: readonly { result?: string }[];
    } | undefined;
    expect(checkedProviderSdk?.candidates).toHaveLength(4);
    expect(checkedProviderSdk?.candidates?.some((candidate) => candidate.result?.startsWith("accepted"))).toBe(false);
  });

  it("binds declared operations to handlers", () => {
    const integration = createFrontTicketingIntegration({
      providerClient: createStubFrontProviderClient(),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("delegates Front replies to the injected provider client and rejects JSON attachment payloads", async () => {
    const calls: Array<{ method: string; args: unknown[] }> = [];
    const providerClient = createStubFrontProviderClient({
      async replyToConversation(conversationId, payload) {
        calls.push({ method: "replyToConversation", args: [conversationId, payload] });
        return { status: "accepted" };
      },
    });
    const integration = createFrontTicketingIntegration({
      providerClient,
    });

    await integration.run("ticket.comment.create", { conversationId: "cnv_1", payload: { body: "Hello" } });
    expect(calls).toEqual([{
      method: "replyToConversation",
      args: ["cnv_1", { body: "Hello" }],
    }]);

    await expect(integration.run("ticket.comment.create", {
      conversationId: "cnv_1",
      payload: { body: "See file", attachments: [] },
    })).rejects.toThrow("multipart/form-data");
    expect(calls).toHaveLength(1);
  });

  it("fails closed without Front provider credentials or provider client", async () => {
    const client = createFrontTicketingClient();

    await expect(client.readiness()).rejects.toThrow("configure baseUrl with accessToken/apiKey");
  });

  it("normalizes raw REST methods and rejects unsupported methods", async () => {
    const requestInits: RequestInit[] = [];
    const fetchMock = vi.fn(async (_input: RequestInfo | URL, init?: RequestInit) => {
      requestInits.push(init ?? {});
      return jsonResponse({ ok: true });
    });
    const client = createFrontTicketingClient({
      baseUrl: "https://front.example.test",
      accessToken: "front-token",
      fetch: fetchMock as typeof fetch,
    });

    await expect(client.rawRequest?.("/custom/{conversationId}", {
      method: "post",
      pathParams: { conversationId: "cnv 1/a" },
    })).resolves.toEqual({ ok: true });
    expect(String(fetchMock.mock.calls[0]?.[0])).toBe("https://front.example.test/custom/cnv%201%2Fa");
    expect(requestInits[0]?.method).toBe("POST");

    await expect(client.rawRequest?.("/custom/path", { method: "TRACE" }))
      .rejects.toThrow("Unsupported Front HTTP method");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});

function createStubFrontProviderClient(
  overrides: Partial<FrontTicketingProviderClient> = {},
): FrontTicketingProviderClient {
  const json = async (): Promise<JsonObject> => ({});
  return {
    createMessage: json,
    getConversation: json,
    updateConversation: json,
    searchConversations: json,
    replyToConversation: json,
    addComment: json,
    listMessages: json,
    listComments: json,
    readiness: json,
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
