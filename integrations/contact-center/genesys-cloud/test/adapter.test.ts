import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import {
  createGenesysCloudContactCenterClient,
  createGenesysCloudContactCenterIntegration,
  createGenesysCloudSdkClient,
  genesysCloudContactCenterCredentialStatuses,
  genesysCloudContactCenterManifest,
  verifyGenesysCloudOpenMessagingWebhookSignature,
} from "../src/index.js";

describe("@cognidesk/integration-contact-center-genesys-cloud", () => {
  it("keeps the manifest metadata-only", async () => {
    const manifestModule = await import("../src/manifest.js");
    expect(manifestModule.genesysCloudContactCenterManifest.packageName)
      .toBe("@cognidesk/integration-contact-center-genesys-cloud");
  });

  it("binds manifest operations to injected SDK-backed client handlers", async () => {
    const sdkClient = createSdkClient();
    const contactCenterClient = {
      sdkClient,
      createHandoff: vi.fn(async () => ({ ok: true })),
      createCallback: vi.fn(async () => ({ ok: true })),
      createOpenMessage: vi.fn(async () => ({ ok: true })),
      getConversation: vi.fn(async () => ({ ok: true })),
      listQueues: vi.fn(async () => ({ ok: true })),
      readiness: vi.fn(async () => ({ ok: true })),
    };
    const integration = await createGenesysCloudContactCenterIntegration({
      apiBaseUrl: "https://api.mypurecloud.ie",
      accessToken: "token",
      contactCenterClient,
    });

    expect(integration.manifest.operations.map((operation) => operation.alias).sort())
      .toEqual([...integration.operationAliases].sort());
    expect(integration.contactCenterClient).toBe(contactCenterClient);
    expect(integration.sdkClient).toBe(sdkClient);
  });

  it("treats injected contact-center clients as configured credentials", () => {
    const contactCenterClient = {
      sdkClient: createSdkClient(),
      createHandoff: vi.fn(async () => ({ ok: true })),
      createCallback: vi.fn(async () => ({ ok: true })),
      createOpenMessage: vi.fn(async () => ({ ok: true })),
      getConversation: vi.fn(async () => ({ ok: true })),
      listQueues: vi.fn(async () => ({ ok: true })),
      readiness: vi.fn(async () => ({ ok: true })),
    };

    expect(genesysCloudContactCenterCredentialStatuses({ contactCenterClient } as never))
      .toEqual(expect.arrayContaining([
        expect.objectContaining({ requirementId: "genesys-cloud-region", state: "configured" }),
        expect.objectContaining({ requirementId: "genesys-cloud-api-access", state: "configured" }),
      ]));
  });

  it("routes normalized operations through named Genesys SDK APIs", async () => {
    const sdkClient = createSdkClient();
    const client = await createGenesysCloudContactCenterClient({
      apiBaseUrl: "https://api.mypurecloud.ie",
      accessToken: "token",
      sdkClient,
    });

    await client.createCallback({ callback: { queueId: "queue-1" } });
    await client.listQueues({ pageSize: 25, name: "Escalation" });
    await client.createOpenMessage({
      integrationId: "integration-1",
      message: { text: "hello" },
      prefetchConversationId: true,
    });
    await client.getConversation({ conversationId: "conversation-1" });
    await client.readiness();

    expect(sdkClient.conversationsApi.postConversationsCallbacks)
      .toHaveBeenCalledWith({ queueId: "queue-1" }, undefined);
    expect(sdkClient.routingApi.getRoutingQueues)
      .toHaveBeenCalledWith({ pageSize: 25, name: "Escalation" });
    expect(sdkClient.conversationsApi.postConversationsMessageInboundOpenMessage)
      .toHaveBeenCalledWith("integration-1", { text: "hello" }, { prefetchConversationId: true });
    expect(sdkClient.conversationsApi.getConversation)
      .toHaveBeenCalledWith("conversation-1", undefined);
    expect(sdkClient.usersApi.getUsersMe).toHaveBeenCalledWith();
  });

  it("creates SDK API clients from purecloud-platform-client-v2 constructors", async () => {
    const apiClient = {
      setEnvironment: vi.fn(),
      setAccessToken: vi.fn(),
    };
    const constructedWith: unknown[] = [];
    const conversationsApi = {
      postConversationsCallbacks: vi.fn(async () => ({ ok: true })),
      postConversationsMessageInboundOpenMessage: vi.fn(async () => ({ ok: true })),
      getConversation: vi.fn(async () => ({ id: "conversation-1" })),
    };
    const routingApi = {
      getRoutingQueues: vi.fn(async () => ({ entities: [] })),
    };
    const usersApi = {
      getUsersMe: vi.fn(async () => ({ id: "user-1" })),
    };
    const sdk = {
      ApiClient: { instance: apiClient },
      ConversationsApi: class {
        constructor(receivedApiClient: unknown) {
          constructedWith.push(receivedApiClient);
          return conversationsApi;
        }
      },
      RoutingApi: class {
        constructor(receivedApiClient: unknown) {
          constructedWith.push(receivedApiClient);
          return routingApi;
        }
      },
      UsersApi: class {
        constructor(receivedApiClient: unknown) {
          constructedWith.push(receivedApiClient);
          return usersApi;
        }
      },
    };

    const sdkClient = await createGenesysCloudSdkClient({
      apiBaseUrl: "https://api.mypurecloud.ie",
      accessToken: "token",
      sdk,
    });

    expect(apiClient.setEnvironment).toHaveBeenCalledWith("https://api.mypurecloud.ie");
    expect(apiClient.setAccessToken).toHaveBeenCalledWith("token");
    expect(constructedWith).toEqual([apiClient, apiClient, apiClient]);
    expect(sdkClient.conversationsApi).toBe(conversationsApi);
    expect(sdkClient.routingApi).toBe(routingApi);
    expect(sdkClient.usersApi).toBe(usersApi);
  });

  it("verifies Open Messaging webhook signatures locally", () => {
    const secret = "secret";
    const body = JSON.stringify({ id: "message-1" });
    const digest = createHmac("sha256", secret).update(body).digest("hex");
    expect(verifyGenesysCloudOpenMessagingWebhookSignature({
      secret,
      body,
      signature: `sha256=${digest}`,
    })).toBe(true);
    expect(verifyGenesysCloudOpenMessagingWebhookSignature({
      secret: " ",
      body,
      signature: `sha256=${digest}`,
    })).toBe(false);
  });

  it("declares SDK-backed coverage", () => {
    expect(genesysCloudContactCenterManifest.coverage.scope).toBe("support-workflow-subset");
    expect(genesysCloudContactCenterManifest.metadata).toMatchObject({
      implementation: {
        strategy: "official-sdk",
        sdkPackages: ["purecloud-platform-client-v2"],
      },
    });
  });

  it("matches supported contact-center category aliases with normalized operation objects", () => {
    expect(genesysCloudContactCenterManifest.metadata?.categoryProfile).toMatchObject({
      id: "contact-center",
      matchedOperations: expect.arrayContaining([
        "contact-center.handoff.request",
        "contact-center.callback.schedule",
        "contact-center.contact.read",
        "contact-center.queue.list",
      ]),
    });
    expect(genesysCloudContactCenterManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((providerObject) => providerObject.kind) ?? []
    )).toEqual(expect.arrayContaining([
      "genesysCloudCallback",
      "genesysCloudOpenMessage",
      "genesysCloudConversation",
      "genesysCloudQueue",
    ]));
  });
});

function createSdkClient() {
  return {
    apiClient: {},
    conversationsApi: {
      postConversationsCallbacks: vi.fn(async () => ({ ok: true })),
      postConversationsMessageInboundOpenMessage: vi.fn(async () => ({ ok: true })),
      getConversation: vi.fn(async () => ({ ok: true })),
    },
    routingApi: {
      getRoutingQueues: vi.fn(async () => ({ ok: true })),
    },
    usersApi: {
      getUsersMe: vi.fn(async () => ({ ok: true })),
    },
  };
}
