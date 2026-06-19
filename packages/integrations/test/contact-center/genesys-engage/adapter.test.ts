import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createGenesysEngageContactCenterClient,
  genesysEngageContactCenterCredentialStatuses,
  genesysEngageContactCenterProviderManifest,
} from "../../../src/contact-center/genesys-engage/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official on-prem contact-center provider manifest", () => {
    expect(genesysEngageContactCenterProviderManifest).toMatchObject({
      id: "contactCenter.genesys-engage",
      packageName: "@cognidesk/integrations",
      category: "contactCenter",
      provider: "genesys-engage",
      trustLevel: "official",
    });
    expect(genesysEngageContactCenterProviderManifest.coverage.notes.join(" ")).toContain("on-premises services");
    expect(genesysEngageContactCenterProviderManifest.coverage.notes.join(" ")).toContain("callback creation only");
    expect(genesysEngageContactCenterProviderManifest.coverage.notes.join(" ")).toContain("cancel, delete, reschedule");
    expect(genesysEngageContactCenterProviderManifest.coverage.notes.join(" ")).toContain("typed GMS Chat API v2 customer chat lifecycle");
    expect(genesysEngageContactCenterProviderManifest.coverage.notes.join(" ")).toContain("genesys-engage-gms-api-2026-06-18.checked-inventory.json");
    expect(genesysEngageContactCenterProviderManifest.coverage.notes.join(" ")).toContain("transfer and event delivery are provider-supported but not typed");
    expect(genesysEngageContactCenterProviderManifest.coverage.notes.join(" ")).toContain("does not claim full on-prem API coverage");
    expect(genesysEngageContactCenterProviderManifest.capabilities).toContainEqual(expect.objectContaining({
      capability: "contact-center.on-prem-configured-handoff",
      extension: true,
    }));
    expect(genesysEngageContactCenterProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    )).toEqual(expect.arrayContaining([
      "genesysEngageGmsChatV2",
      "genesysEngageConfiguredChatHandoff",
      "genesysEngageConfiguredCallbackHandoff",
    ]));
    expect(genesysEngageContactCenterProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    )).not.toContain("genesysEngageWebChatService");
    expect(genesysEngageContactCenterProviderManifest.metadata).toMatchObject({
      deploymentMode: "genesys-engage-on-premises",
      checkedInventoryArtifact: "docs/provider-coverage/genesys-engage-gms-api-2026-06-18.checked-inventory.json",
      checkedEndpointEntries: 27,
      officialMachineReadableSpec: "not-found",
      checkedWebhookCatalog: "not-found-in-checked-gms-webchatservice-docs",
      channelCoverage: {
        callback: "typed-create-only",
        callbackLifecycle: "provider-supported-not-typed",
        configuredHttpHandoff: "supported",
        gmsChatV2: "typed-customer-lifecycle",
        gmsChatV2CometD: "provider-supported-not-typed",
        gmsChatV2Lifecycle: "typed-request-send-refresh-disconnect-read-receipt",
        gmsChatV2FileManagement: "typed-limits-upload-download-delete",
        webChatService: "provider-supported-configured-http-only",
        webChatServiceLifecycle: "provider-supported-not-typed",
        webChatServiceEvents: "provider-supported-not-typed",
        events: "provider-supported-not-typed",
        transfer: "provider-supported-not-typed",
        webhooks: "not-covered",
      },
    });
    expect(genesysEngageContactCenterProviderManifest.limitations.join(" "))
      .toContain("WebChatService start/end/transcript/polling");
    expect(genesysEngageContactCenterProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2",
        "https://all.docs.genesys.com/WID/Current/GCAPI/WebChatService",
      ]));
  });

  it("calls documented GMS Chat API v2 customer lifecycle and file endpoints", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.endsWith("/file/file-1/download")) return new Response("file-bytes", { status: 200 });
      return new Response(JSON.stringify({ ok: true, url }), { status: 200 });
    });
    const client = createGenesysEngageContactCenterClient({
      gmsBaseUrl: "https://gms.example.test",
      authorizationHeader: "Basic configured",
      fetch: fetchMock as unknown as typeof fetch,
    });
    const session = {
      serviceName: "web-chat-v2",
      chatId: "chat-123",
      userId: "user-123",
      secureKey: "secure-key",
      alias: "Ada",
    };

    await expect(client.requestChatV2({
      serviceName: "web-chat-v2",
      payload: { firstName: "Ada", subject: "Need help" },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.sendChatV2Message({
      ...session,
      message: "Hello",
      transcriptPosition: 7,
    })).resolves.toMatchObject({ ok: true });
    await expect(client.refreshChatV2({ ...session })).resolves.toMatchObject({ ok: true });
    await expect(client.updateChatV2Data({
      ...session,
      userData: { conversationId: "conversation-1" },
    })).resolves.toMatchObject({ ok: true });
    await expect(client.getChatV2FileLimits(session)).resolves.toMatchObject({ ok: true });
    await expect(client.uploadChatV2File({
      ...session,
      file: new Blob(["hello"], { type: "text/plain" }),
      fileName: "hello.txt",
      userData: { conversationId: "conversation-1" },
    })).resolves.toMatchObject({ ok: true });
    const download = await client.downloadChatV2File({ ...session, fileId: "file-1" });
    await expect(download.text()).resolves.toBe("file-bytes");
    await expect(client.deleteChatV2File({ ...session, fileId: "file-1" })).resolves.toMatchObject({ ok: true });
    await expect(client.disconnectChatV2(session)).resolves.toMatchObject({ ok: true });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://gms.example.test/genesys/2/chat/web-chat-v2",
      expect.objectContaining({
        method: "POST",
        body: "firstName=Ada&subject=Need+help",
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://gms.example.test/genesys/2/chat/web-chat-v2/chat-123/send",
      expect.objectContaining({
        method: "POST",
        body: "userId=user-123&secureKey=secure-key&alias=Ada&message=Hello&transcriptPosition=7",
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      4,
      "https://gms.example.test/genesys/2/chat/web-chat-v2/chat-123/updateData",
      expect.objectContaining({
        body: "userId=user-123&secureKey=secure-key&alias=Ada&userData%5BconversationId%5D=conversation-1",
      }),
    );
    expect((fetchMock.mock.calls[5] as unknown[])[1]).toEqual(expect.objectContaining({
      method: "POST",
      body: expect.any(FormData),
    }));
    expect(fetchMock).toHaveBeenNthCalledWith(
      7,
      "https://gms.example.test/genesys/2/chat/web-chat-v2/chat-123/file/file-1/download",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("creates callbacks through the documented GMS callback service path with form encoding by default", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "callback-1" }), { status: 200 }));
    const client = createGenesysEngageContactCenterClient({
      gmsBaseUrl: "https://gms.example.test",
      authorizationHeader: "Basic configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createCallback({
      serviceName: "callback-for-mobile",
      payload: {
        _customer_number: "01822256",
        my_token: "Stat_Server1",
      },
      query: { _redirect: "" },
      idempotencyKey: "callback-request-1",
    })).resolves.toMatchObject({ id: "callback-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://gms.example.test/genesys/1/service/callback/callback-for-mobile?_redirect=",
      expect.objectContaining({
        method: "POST",
        body: "_customer_number=01822256&my_token=Stat_Server1",
        headers: expect.objectContaining({
          authorization: "Basic configured",
          "content-type": "application/x-www-form-urlencoded",
          "idempotency-key": "callback-request-1",
        }),
      }),
    );
  });

  it("supports JSON callback payloads for deployments configured that way", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "callback-json" }), { status: 200 }));
    const client = createGenesysEngageContactCenterClient({
      gmsBaseUrl: "https://gms.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createCallback({
      serviceName: "callback-for-mobile",
      contentType: "application/json",
      payload: {
        _ors: "http://myors:4421",
        _target: "Billing@Stat_Server1.GA",
      },
    })).resolves.toMatchObject({ id: "callback-json" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://gms.example.test/genesys/1/service/callback/callback-for-mobile",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          _ors: "http://myors:4421",
          _target: "Billing@Stat_Server1.GA",
        }),
        headers: expect.objectContaining({ "content-type": "application/json" }),
      }),
    );
  });

  it("requires SDK-configured handoff paths for deployment-specific chat or on-prem services", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "unexpected" }), { status: 200 }));
    const client = createGenesysEngageContactCenterClient({
      gmsBaseUrl: "https://gms.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({ payload: { transcript: "hello" } }))
      .rejects.toThrow("handoff path must be provided");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("creates configured chat or on-prem handoff requests without inventing a fixed endpoint", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "chat-1" }), { status: 200 }));
    const client = createGenesysEngageContactCenterClient({
      gmsBaseUrl: "https://gms.example.test",
      defaultHandoffPath: "/genesys/1/service/chat/web-chat-v2",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      payload: { transcript: "I need an agent", customerId: "customer-1" },
      idempotencyKey: "conversation-1",
    })).resolves.toMatchObject({ id: "chat-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://gms.example.test/genesys/1/service/chat/web-chat-v2",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ transcript: "I need an agent", customerId: "customer-1" }),
        headers: expect.objectContaining({
          "content-type": "application/json",
          "idempotency-key": "conversation-1",
        }),
      }),
    );
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: genesysEngageContactCenterProviderManifest,
      channels: [{
        id: "contact-center",
        channel: "contactCenter",
        providerPackageIds: [genesysEngageContactCenterProviderManifest.id],
        enabledCapabilities: ["handoff", "send"],
      }],
      credentialStatuses: genesysEngageContactCenterCredentialStatuses({
        gmsBaseUrl: "https://gms.example.test",
        authConfigured: true,
        routingConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
  });
});
