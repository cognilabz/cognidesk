import { createHmac } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createGenesysCloudContactCenterClient,
  GENESYS_CLOUD_FULL_API_GENERATED_FUNCTION_COUNT,
  GENESYS_CLOUD_FULL_API_GENERATED_FUNCTION_NAMES,
  GENESYS_CLOUD_FULL_API_OPERATION_COUNT,
  genesysCloudContactCenterCredentialStatuses,
  genesysCloudContactCenterProviderManifest,
  verifyGenesysCloudOpenMessagingWebhookSignature,
} from "../../../src/contact-center/genesys-cloud/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official contact-center provider manifest", () => {
    expect(genesysCloudContactCenterProviderManifest).toMatchObject({
      id: "contactCenter.genesys-cloud",
      packageName: "@cognidesk/integrations",
      category: "contactCenter",
      provider: "genesys-cloud",
      trustLevel: "official",
    });
    expect(genesysCloudContactCenterProviderManifest.coverage).toMatchObject({
      scope: "full-provider-api",
    });
    expect(genesysCloudContactCenterProviderManifest.metadata?.fullProviderApiVerification).toMatchObject({
      provider: "genesys-cloud",
      documentedOperationCount: 3147,
      implementedOperationCount: 3147,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 3147,
    });
    expect(GENESYS_CLOUD_FULL_API_OPERATION_COUNT).toBe(3147);
    expect(GENESYS_CLOUD_FULL_API_GENERATED_FUNCTION_COUNT).toBe(3147);
    expect(GENESYS_CLOUD_FULL_API_GENERATED_FUNCTION_NAMES).toEqual(expect.arrayContaining([
      "PostConversationsCallbacks",
      "PostConversationsMessageInboundOpenStructuredResponse",
      "HeadNotificationsChannel",
      "HeadTokensMe",
      "GetConversationsChat",
      "GetRoutingQueues",
      "GetWebdeploymentsDeployments",
    ]));
    expect(genesysCloudContactCenterProviderManifest.coverage.notes.join(" ")).toContain("Open Messaging inbound API");
    expect(genesysCloudContactCenterProviderManifest.coverage.notes.join(" ")).toContain("outbound webhook signature validation");
    expect(genesysCloudContactCenterProviderManifest.coverage.notes.join(" "))
      .toContain("not limited to voice or callback");
    expect(genesysCloudContactCenterProviderManifest.coverage.notes.join(" "))
      .toContain("every operation in the current official Genesys Cloud Platform API Swagger");
    expect(genesysCloudContactCenterProviderManifest.coverage.notes.join(" "))
      .toContain("Messenger customer-site JavaScript behavior is not a server-side REST endpoint");
    expect(genesysCloudContactCenterProviderManifest.credentialRequirements.find((requirement) =>
      requirement.id === "genesys-cloud-open-messaging"
    )?.scopes).toEqual(["Messaging > Integration > All"]);
    expect(genesysCloudContactCenterProviderManifest.metadata).toMatchObject({
      channelCoverage: {
        fullPlatformRestApiOperations: "generated-per-operation-functions",
        voiceCall: "generated-full-surface",
        callback: "typed-create-and-generated-full-surface",
        callbackHandoff: "typed-create-and-generated-full-surface",
        nativeVoiceHandoff: "generated-full-surface",
        nativeChatHandoff: "generated-full-surface",
        openMessagingInboundApi: "typed-digital-ingress-message-event-receipt-and-generated-full-surface",
        openMessagingOutboundWebhookSignature: "typed-verify-only",
        openMessagingWebhookParser: "not-covered",
        nativeWebMessaging: "generated-full-platform-admin-surface",
        webMessagingMessenger: "generated-full-platform-admin-surface",
        webChatWidget: "legacy-provider-supported-customer-site-not-typed",
        transfer: "generated-full-surface",
      },
      deploymentModes: {
        cloud: "supported",
        engageOnPremises: "separate-package-supported",
        pureConnectOnPremises: "separate-package-supported",
      },
    });
    expect(genesysCloudContactCenterProviderManifest.capabilities).toContainEqual(expect.objectContaining({
      capability: "handoff",
      label: "Create Genesys Cloud callback or Open Messaging ingress",
      description: expect.stringContaining("generated fullApi functions rather than this generic handoff capability"),
    }));
    expect(genesysCloudContactCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toContain("webhook");
    expect(genesysCloudContactCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toContain("transfer");
    expect(genesysCloudContactCenterProviderManifest.capabilities).toContainEqual(expect.objectContaining({
      capability: "contact-center.open-messaging-ingress",
      label: "Deliver Genesys Cloud Open Messaging ingress",
      description: expect.stringContaining("not native Web Messaging"),
      extension: true,
    }));
    expect(genesysCloudContactCenterProviderManifest.limitations.join(" ")).toContain("Web Messaging");
  });

  it("exposes generated functions for every documented Genesys Cloud Swagger operation", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const client = createGenesysCloudContactCenterClient({
      apiBaseUrl: "https://api.mypurecloud.ie",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await client.fullApi.PostConversationsCallbacks({
      body: { callbackNumbers: ["+15551234567"], queueId: "queue-1" },
      idempotencyKey: "callback-request-1",
    });
    await client.fullApi.PostConversationsMessageInboundOpenStructuredResponse({
      pathParams: { integrationId: "integration-1" },
      // @ts-expect-error Minimal fixture intentionally exercises request routing; official schema requires Open Messaging channel origin/time fields.
      body: { channel: { messageId: "external-message-1" }, content: [] },
    });
    await client.fullApi.GetConversationsChat({ pathParams: { conversationId: "conversation-1" } });
    await client.fullApi.GetRoutingQueues({ query: { pageSize: 25, name: "Escalation" } });
    await client.fullApi.GetWebdeploymentsDeployments();

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://api.mypurecloud.ie/api/v2/conversations/callbacks",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer configured",
          "content-type": "application/json",
          "idempotency-key": "callback-request-1",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://api.mypurecloud.ie/api/v2/conversations/messages/integration-1/inbound/open/structured/response",
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      3,
      "https://api.mypurecloud.ie/api/v2/conversations/chats/conversation-1",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://api.mypurecloud.ie/api/v2/routing/queues?pageSize=25&name=Escalation",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      5,
      "https://api.mypurecloud.ie/api/v2/webdeployments/deployments",
      expect.objectContaining({ method: "GET" }),
    );
    // @ts-expect-error Missing path params intentionally exercises runtime validation.
    await expect(client.fullApi.GetConversationsChat()).rejects.toThrow("Missing Genesys Cloud path parameter 'conversationId'");
  });

  it("creates handoff requests against the configured Genesys Cloud path", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "callback-1" }), { status: 202 }));
    const client = createGenesysCloudContactCenterClient({
      apiBaseUrl: "https://api.mypurecloud.ie",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      path: "/api/v2/conversations/callbacks",
      payload: { queueId: "queue-1", phoneNumber: "+15551234567" },
      idempotencyKey: "conversation-1",
    })).resolves.toMatchObject({ id: "callback-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.mypurecloud.ie/api/v2/conversations/callbacks",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer configured",
          "idempotency-key": "conversation-1",
        }),
      }),
    );
  });

  it("does not default generic handoff to callback when no SDK path is configured", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "unexpected" }), { status: 202 }));
    const client = createGenesysCloudContactCenterClient({
      apiBaseUrl: "https://api.mypurecloud.ie",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      payload: { queueId: "queue-1", phoneNumber: "+15551234567" },
    })).rejects.toThrow("handoff path must be provided");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("creates callbacks through the documented Genesys Cloud callback endpoint", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "callback-2" }), { status: 202 }));
    const client = createGenesysCloudContactCenterClient({
      apiBaseUrl: "https://api.mypurecloud.ie",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createCallback({
      callback: {
        callbackNumbers: ["+15551234567"],
        queueId: "queue-1",
        data: { conversationId: "conversation-1" },
      },
      idempotencyKey: "callback-request-1",
    })).resolves.toMatchObject({ id: "callback-2" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.mypurecloud.ie/api/v2/conversations/callbacks",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          callbackNumbers: ["+15551234567"],
          queueId: "queue-1",
          data: { conversationId: "conversation-1" },
        }),
        headers: expect.objectContaining({
          authorization: "Bearer configured",
          "content-type": "application/json",
          "idempotency-key": "callback-request-1",
        }),
      }),
    );
  });

  it("creates Open Messaging inbound messages, events, and receipts through integration-specific endpoints", async () => {
    const fetchMock = vi.fn(async (url: string | URL | Request) => {
      const value = String(url);
      if (value.endsWith("/api/v2/conversations/messages/integration-1/inbound/open/message")) {
        return new Response(JSON.stringify({ id: "message-1" }), { status: 202 });
      }
      if (value.endsWith("/api/v2/conversations/messages/integration-1/inbound/open/event")) {
        return new Response(JSON.stringify({ id: "event-1" }), { status: 202 });
      }
      if (value.endsWith("/api/v2/conversations/messages/integration-1/inbound/open/receipt")) {
        return new Response(JSON.stringify({ id: "receipt-1" }), { status: 202 });
      }
      return new Response(JSON.stringify({ message: `Unexpected URL ${value}` }), { status: 404 });
    });
    const client = createGenesysCloudContactCenterClient({
      apiBaseUrl: "https://api.mypurecloud.ie",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createOpenMessage({
      integrationId: "integration-1",
      message: {
        channel: { messageId: "external-message-1", platform: "custom" },
        text: "I need help with my order",
      },
      idempotencyKey: "external-message-1",
    })).resolves.toMatchObject({ id: "message-1" });
    await expect(client.createOpenEvent({
      integrationId: "integration-1",
      event: { eventType: "typing-indicator", channel: { messageId: "external-message-2" } },
    })).resolves.toMatchObject({ id: "event-1" });
    await expect(client.createOpenReceipt({
      integrationId: "integration-1",
      receipt: { receipts: [{ messageId: "external-message-1", status: "delivered" }] },
    })).resolves.toMatchObject({ id: "receipt-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.mypurecloud.ie/api/v2/conversations/messages/integration-1/inbound/open/message",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          channel: { messageId: "external-message-1", platform: "custom" },
          text: "I need help with my order",
        }),
        headers: expect.objectContaining({
          authorization: "Bearer configured",
          "content-type": "application/json",
          "idempotency-key": "external-message-1",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.mypurecloud.ie/api/v2/conversations/messages/integration-1/inbound/open/event",
      expect.objectContaining({ method: "POST" }),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.mypurecloud.ie/api/v2/conversations/messages/integration-1/inbound/open/receipt",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("fails closed when Open Messaging integration IDs are missing", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "unexpected" }), { status: 202 }));
    const client = createGenesysCloudContactCenterClient({
      apiBaseUrl: "https://api.mypurecloud.ie",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createOpenMessage({
      integrationId: "",
      message: { text: "hello" },
    })).rejects.toThrow("integrationId is required");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("reads conversations and queue lists through fixed Genesys Cloud API paths", async () => {
    const fetchMock = vi.fn(async (url: string | URL | Request) => {
      const value = String(url);
      if (value.endsWith("/api/v2/conversations/conversation-1")) {
        return new Response(JSON.stringify({ id: "conversation-1" }), { status: 200 });
      }
      if (value.endsWith("/api/v2/routing/queues?pageSize=25&pageNumber=2&name=Escalation")) {
        return new Response(JSON.stringify({ entities: [{ id: "queue-1" }] }), { status: 200 });
      }
      return new Response(JSON.stringify({ message: `Unexpected URL ${value}` }), { status: 404 });
    });
    const client = createGenesysCloudContactCenterClient({
      apiBaseUrl: "https://api.mypurecloud.ie",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.getConversation({ conversationId: "conversation-1" }))
      .resolves.toMatchObject({ id: "conversation-1" });
    await expect(client.listQueues({ pageSize: 25, pageNumber: 2, name: "Escalation" }))
      .resolves.toMatchObject({ entities: [{ id: "queue-1" }] });
  });

  it("validates Open Messaging outbound webhook signatures with the configured secret", () => {
    const rawBody = JSON.stringify({ id: "genesys-message-1" });
    const signature = `sha256=${createHmac("sha256", "secret").update(rawBody).digest("hex")}`;

    expect(verifyGenesysCloudOpenMessagingWebhookSignature({
      rawBody,
      signatureHeader: signature,
      secret: "secret",
    })).toBe(true);
    expect(verifyGenesysCloudOpenMessagingWebhookSignature({
      rawBody,
      signatureHeader: "sha256=bad",
      secret: "secret",
    })).toBe(false);
    expect(verifyGenesysCloudOpenMessagingWebhookSignature({
      rawBody,
      secret: "secret",
    })).toBe(false);
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: genesysCloudContactCenterProviderManifest,
      channels: [{
        id: "contact-center",
        channel: "contactCenter",
        providerPackageIds: [genesysCloudContactCenterProviderManifest.id],
        enabledCapabilities: ["handoff", "send", "contact-center.open-messaging-ingress"],
      }],
      credentialStatuses: genesysCloudContactCenterCredentialStatuses({
        apiBaseUrl: "https://api.mypurecloud.ie",
        apiAccessConfigured: true,
        routingConfigured: true,
        openMessagingConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
    expect(genesysCloudContactCenterCredentialStatuses({
      apiBaseUrl: "https://api.mypurecloud.ie",
      apiAccessConfigured: true,
      routingConfigured: true,
      openMessagingConfigured: true,
    }).find((status) => status.requirementId === "genesys-cloud-open-messaging")?.scopes)
      .toEqual(["Messaging > Integration > All"]);
    expect(genesysCloudContactCenterCredentialStatuses({
      apiBaseUrl: "https://api.mypurecloud.ie",
      apiAccessConfigured: true,
      routingConfigured: true,
      openMessagingConfigured: false,
    }).find((status) => status.requirementId === "genesys-cloud-open-messaging")?.state)
      .toBe("not-required");
  });
});
