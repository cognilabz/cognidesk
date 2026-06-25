import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it, vi } from "vitest";
import {
  createKustomerTicketingClient,
  createKustomerTicketingIntegration,
  type JsonObject,
  type KustomerTicketingProviderClient,
} from "../src/index.js";
import packageJson from "../package.json";
import { kustomerTicketingProviderManifest as manifestOnly, kustomerHostClientSupportSlice } from "../src/manifest.js";

describe("@cognidesk/integration-ticketing-kustomer", () => {
  it("exports a provider REST adapter Kustomer decision", () => {
    expect(manifestOnly.packageName).toBe("@cognidesk/integration-ticketing-kustomer");
    expect(kustomerHostClientSupportSlice.implementationStrategy).toBe("provider-rest-adapter");
    expect(kustomerHostClientSupportSlice.sdkDecision).toMatchObject({
      verdict: "no-official-sdk-rest-adapter",
      result: "no-official-maintained-ticketing-rest-sdk",
      checkedAt: "2026-06-25",
    });
    expect(kustomerHostClientSupportSlice.sdkDecision.rejectedSdkPackages.map((sdkPackage) => sdkPackage.packageName))
      .toEqual(["@kustomer/apps-server", "@kustomer/apps-client", "@kustomer/apps-server-sdk", "@kustomer/chat-react-native"]);
    expect(manifestOnly.metadata?.providerClient).toMatchObject({
      interface: "KustomerTicketingProviderClient",
      defaultClientPolicy: "built-in-rest-adapter",
    });
    expect(manifestOnly.metadata?.providerRestAdapterException).toMatchObject({
      result: "no-official-maintained-ticketing-rest-sdk",
      defaultClientPolicy: "built-in-kustomer-rest-adapter-with-access-token",
      typedClientOverride: "KustomerTicketingProviderClient",
    });
    expect(packageJson.cognidesk.providerRestAdapterException).toMatchObject({
      result: "no-official-maintained-ticketing-rest-sdk",
      defaultClientPolicy: "built-in-kustomer-rest-adapter-with-access-token",
      typedClientOverride: "KustomerTicketingProviderClient",
    });
  });

  it("binds declared operations to handlers", () => {
    const integration = createKustomerTicketingIntegration({
      providerClient: createProviderClient(),
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("delegates Kustomer messages to the host client and rejects undocumented channels", async () => {
    const messages: JsonObject[] = [];
    const integration = createKustomerTicketingIntegration({
      providerClient: createProviderClient({
        async createMessage(message) {
          messages.push(message);
          return { id: "msg_1" };
        },
      }),
    });
    await integration.run("ticket.comment.create", { message: { channel: "email", direction: "out", app: "cognidesk" } });
    expect(messages[0]).toMatchObject({ channel: "email", direction: "out", app: "cognidesk" });
    await expect(integration.run("ticket.comment.create", {
      message: { channel: "note", direction: "out", app: "cognidesk" },
    })).rejects.toThrow("Unsupported Kustomer message channel");
    expect(messages).toHaveLength(1);
  });

  it("uses the built-in Kustomer REST adapter when credentials are configured", async () => {
    const fetchMock = vi.fn(async (_input: RequestInfo | URL, _init?: RequestInit) =>
      new Response(JSON.stringify({ ok: true, id: "conv_1" }), {
        status: 200,
        headers: { "content-type": "application/json" },
      }));
    const client = createKustomerTicketingClient({
      baseUrl: "https://example.kustomerapp.com/",
      accessToken: "kus-token",
      fetch: fetchMock,
    });

    await expect(client.createConversation({
      title: "Need help",
      customer: { id: "cust_1" },
      omitted: undefined,
    })).resolves.toMatchObject({ ok: true, id: "conv_1" });
    await client.getConversation("conv 1/a");
    await client.listMessages({ conversation: "conv_1", limit: 2, filter: { status: "open" } });

    const [createUrl, createInit] = fetchMock.mock.calls[0]!;
    expect(String(createUrl)).toBe("https://example.kustomerapp.com/v1/conversations");
    expect(createInit?.method).toBe("POST");
    expect(new Headers(createInit?.headers).get("Authorization")).toBe("Bearer kus-token");
    expect(new Headers(createInit?.headers).get("Content-Type")).toBe("application/json");
    expect(JSON.parse(createInit?.body as string)).toEqual({
      title: "Need help",
      customer: { id: "cust_1" },
    });

    expect(String(fetchMock.mock.calls[1]![0]))
      .toBe("https://example.kustomerapp.com/v1/conversations/conv%201%2Fa");
    const messagesUrl = new URL(String(fetchMock.mock.calls[2]![0]));
    expect(messagesUrl.pathname).toBe("/v1/messages");
    expect(messagesUrl.searchParams.get("conversation")).toBe("conv_1");
    expect(messagesUrl.searchParams.get("limit")).toBe("2");
    expect(messagesUrl.searchParams.get("filter")).toBe(JSON.stringify({ status: "open" }));
  });

  it("rejects invalid operation inputs before calling the host client", async () => {
    const calls: string[] = [];
    const integration = createKustomerTicketingIntegration({
      providerClient: createProviderClient({
        async getConversation() {
          calls.push("getConversation");
          return { ok: true };
        },
        async updateConversation() {
          calls.push("updateConversation");
          return { ok: true };
        },
        async listConversations() {
          calls.push("listConversations");
          return { ok: true };
        },
      }),
    });

    await expect(integration.run("ticket.read", { conversationId: "" }))
      .rejects.toThrow("Kustomer conversationId must be a non-empty string");
    await expect(integration.run("ticket.update", {
      conversationId: "conv_1",
      patch: [] as unknown as JsonObject,
    })).rejects.toThrow("ticket.update patch must be a JSON object");
    await expect(integration.run("ticket.search", {
      query: "status=open" as unknown as JsonObject,
    })).rejects.toThrow("ticket.search query must be a JSON object");
    expect(calls).toEqual([]);
  });

  it("rejects unsafe raw REST requests before fetch", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "content-type": "application/json" },
      }));
    const client = createKustomerTicketingClient({
      accessToken: "kus-token",
      fetch: fetchMock,
    });

    expect(client.rawRequest).toBeDefined();
    await expect(client.rawRequest!("https://evil.example/v1/messages"))
      .rejects.toThrow("Kustomer raw request path must be a relative REST path");
    await expect(client.rawRequest!("/v1/messages", { method: "post" }))
      .rejects.toThrow("Kustomer raw request method must be one of GET, POST, PUT, PATCH, DELETE");
    await expect(client.rawRequest!("/v1/messages", { query: "limit=1" }))
      .rejects.toThrow("Kustomer raw request query must be a JSON object");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("fails closed when no Kustomer provider client is supplied", async () => {
    const integration = createKustomerTicketingIntegration();
    await expect(integration.run("ticket.search", {})).rejects.toThrow(
      "Kustomer provider client is required",
    );
  });
});

function createProviderClient(
  overrides: Partial<KustomerTicketingProviderClient> = {},
): KustomerTicketingProviderClient {
  const ok = async (): Promise<JsonObject> => ({ ok: true });

  return {
    createConversation: ok,
    getConversation: ok,
    updateConversation: ok,
    listConversations: ok,
    listMessages: ok,
    createMessage: ok,
    createCustomerDraft: ok,
    readiness: ok,
    ...overrides,
  };
}
