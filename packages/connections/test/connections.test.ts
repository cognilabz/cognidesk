import { describe, expect, it } from "vitest";
import { z } from "zod";
import {
  connectionBackedProviderMetadata,
  createConnectionTools,
  defineMcpConnection,
  defineOpenApiConnection,
  verifyConnectionContract,
} from "../src/index.js";

const openApiDocument = {
  openapi: "3.1.0",
  servers: [{ url: "https://front.example.test" }],
  paths: {
    "/conversations/{conversationId}/messages": {
      post: {
        operationId: "createConversationReply",
        responses: { "200": { description: "OK" } },
      },
    },
    "/conversations/search/{query}": {
      get: {
        operationId: "searchConversations",
        responses: { "200": { description: "OK" } },
      },
    },
  },
};

describe("@cognidesk/connections", () => {
  it("verifies reviewed OpenAPI operation aliases and creates explicitly selected tools", async () => {
    const connection = defineOpenApiConnection({
      id: "ticketing.front",
      provider: "front",
      providerPackageId: "ticketing.front",
      source: openApiDocument,
      reviewedContract: {
        source: "inline",
        version: "2026-06-17",
      },
      auth: { kind: "bearer", credentialId: "front-api-token" },
      operations: {
        replyToConversation: {
          providerOperation: "createConversationReply",
          capability: "send",
          actionAudience: "customer-facing",
          sideEffect: true,
          externallyVisible: true,
          exposesSensitiveData: true,
          changesWorkflow: true,
          requiredPolicyIds: ["front-send-policy"],
          approval: {
            requirement: "required",
            supportedResolutions: ["approve", "deny", "edit"],
            editableFields: ["body"],
          },
          input: z.object({
            conversationId: z.string(),
            body: z.string(),
          }),
          output: z.object({ ok: z.boolean() }),
          request: (input) => {
            const typed = input as { conversationId: string; body: string };
            return {
              path: { conversationId: typed.conversationId },
              body: { body: typed.body },
            };
          },
        },
        searchConversations: {
          providerOperation: "searchConversations",
          capability: "search-provider-object",
          actionAudience: "internal-support",
          exposesSensitiveData: true,
          input: z.object({ query: z.string() }),
          request: (input) => ({ path: { query: (input as { query: string }).query } }),
        },
      },
    });

    await expect(verifyConnectionContract(connection)).resolves.toMatchObject({
      status: "verified",
      missingOperations: [],
    });

    const calls: Array<{ url: string; init: RequestInit }> = [];
    const tools = createConnectionTools(connection, {
      operations: ["replyToConversation"],
      credentials: { "front-api-token": "secret-token" },
      fetch: async (url, init) => {
        calls.push({ url: String(url), init: init ?? {} });
        return new Response(JSON.stringify({ ok: true }), { status: 200 });
      },
    });

    expect(tools).toHaveLength(1);
    expect(tools[0]?.policy).toMatchObject({
      providerPackageId: "ticketing.front",
      operationAlias: "replyToConversation",
      providerOperation: "createConversationReply",
      capability: "send",
      approval: { requirement: "required" },
    });
    await expect(tools[0]?.execute({
      input: { conversationId: "conv_1", body: "Hello" },
      app: {},
      conversationId: "c1",
      telemetry: fakeTelemetry(),
    })).resolves.toEqual({ ok: true });
    expect(calls[0]?.url).toBe("https://front.example.test/conversations/conv_1/messages");
    expect(calls[0]?.init.headers).toMatchObject({ authorization: "Bearer secret-token" });
  });

  it("blocks reviewed OpenAPI aliases when the provider operation is missing", async () => {
    const connection = defineOpenApiConnection({
      id: "ticketing.front",
      provider: "front",
      source: openApiDocument,
      reviewedContract: { source: "inline", version: "2026-06-17" },
      operations: {
        missing: {
          providerOperation: "deleteConversation",
          capability: "delete-provider-object",
          sideEffect: true,
        },
      },
    });

    await expect(verifyConnectionContract(connection)).resolves.toMatchObject({
      status: "blocked",
      missingOperations: ["deleteConversation"],
    });
  });

  it("describes connection-backed provider metadata for conformance", () => {
    const connection = defineMcpConnection({
      id: "internal.support",
      provider: "internal",
      source: "https://internal.example.test/mcp",
      reviewedContract: {
        source: "https://internal.example.test/mcp",
        compatibility: "2026-06",
      },
      operations: {
        findOrder: {
          providerOperation: "findOrder",
          capability: "read-provider-object",
          exposesSensitiveData: true,
        },
      },
    });

    expect(connectionBackedProviderMetadata(connection)).toMatchObject({
      connectionBacked: {
        kind: "mcp",
        operationAliases: [{
          alias: "findOrder",
          providerOperation: "findOrder",
          capability: "read-provider-object",
          sideEffect: false,
          exposesSensitiveData: true,
        }],
      },
    });
  });

  it("rejects incomplete connection definitions at runtime", () => {
    expect(() => defineOpenApiConnection({
      id: "",
      provider: "front",
      source: openApiDocument,
      reviewedContract: { source: "inline" },
      operations: {
        replyToConversation: {
          providerOperation: "",
        },
      },
    })).toThrow("Invalid openapi connection definition");

    expect(() => defineMcpConnection({
      id: "internal.support",
      provider: "internal",
      source: "",
      operations: {},
    })).toThrow("source is required");
  });

  it("reports malformed runtime connection input through validation failures", () => {
    expect(() => defineOpenApiConnection({
      id: 123,
      provider: "front",
      source: openApiDocument,
      auth: { kind: "apiKey", credentialId: 42, in: "header", name: null },
      providerPackageId: 99,
      reviewedContract: { source: null },
      operations: {
        replyToConversation: {
          providerOperation: 123,
          providerPackageId: false,
        },
      },
    } as never)).toThrow(/Invalid openapi connection definition: .*id must be a string.*auth\.credentialId must be a string.*replyToConversation\.providerOperation must be a string/s);

    expect(() => defineOpenApiConnection({
      id: "front",
      provider: "front",
      source: openApiDocument,
      operations: undefined,
    } as never)).toThrow("operations must be an object");
  });
});

function fakeTelemetry() {
  return {
    startSpan: () => ({ end() {} } as never),
    async withSpan(_name: string, ...args: unknown[]) {
      const run = args.at(-1) as (span: unknown) => unknown;
      return run({});
    },
    setAttribute() {},
    addEvent() {},
    recordException() {},
  };
}
