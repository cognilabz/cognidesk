import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createGenesysPureConnectContactCenterClient,
  genesysPureConnectContactCenterCredentialStatuses,
  genesysPureConnectContactCenterProviderManifest,
} from "../../../src/contact-center/genesys-pureconnect/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official PureConnect provider mode separate from Genesys Cloud and Engage", () => {
    expect(genesysPureConnectContactCenterProviderManifest).toMatchObject({
      id: "contactCenter.genesys-pureconnect",
      packageName: "@cognidesk/integrations",
      category: "contactCenter",
      provider: "genesys-pureconnect",
      trustLevel: "official",
    });
    expect(genesysPureConnectContactCenterProviderManifest.coverage).toMatchObject({
      scope: "support-workflow-subset",
    });
    expect(genesysPureConnectContactCenterProviderManifest.coverage.notes.join(" "))
      .toContain("separate deployment/provider mode from Genesys Cloud and Genesys Engage/GMS");
    expect(genesysPureConnectContactCenterProviderManifest.coverage.notes.join(" "))
      .toContain("does not claim the full PureConnect ICWS API");
    expect(genesysPureConnectContactCenterProviderManifest.coverage.notes.join(" "))
      .toContain("typed wrappers for selected documented interaction");
    expect(genesysPureConnectContactCenterProviderManifest.coverage.notes.join(" "))
      .toContain("messaging message polling and interaction subscriptions");
    expect(genesysPureConnectContactCenterProviderManifest.coverage.notes.join(" "))
      .toContain("genesys-pureconnect-icws-api-2026-06-18.checked-inventory.json");
    expect(genesysPureConnectContactCenterProviderManifest.coverage.notes.join(" "))
      .toContain("no official webhook subscription endpoint catalog was found");
    expect(genesysPureConnectContactCenterProviderManifest.coverage.notes.join(" "))
      .toContain("does not assume `GET /icws/connection`");
    expect(genesysPureConnectContactCenterProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://all.docs.genesys.com/Developer/APIbyService",
        "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm",
        "https://help.genesys.com/staging/developer/root/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm",
        "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/%28sessionId%29/messaging/messages/index.htm",
        "https://help.genesys.com/pureconnect/mergedprojects/wh_tr/mergedprojects/wh_tr_installation_and_configuration/desktop/interaction_web_tools.htm",
      ]));
    expect(genesysPureConnectContactCenterProviderManifest.capabilities.map((capability) => capability.capability))
      .not.toEqual(expect.arrayContaining(["send", "transfer"]));
    expect(genesysPureConnectContactCenterProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    )).toEqual(expect.arrayContaining([
      "genesysPureConnectConfiguredWebChatHandoff",
      "genesysPureConnectConfiguredCallbackHandoff",
    ]));
    expect(genesysPureConnectContactCenterProviderManifest.metadata).toMatchObject({
      deploymentMode: "genesys-pureconnect-icws",
      checkedInventoryArtifact: "docs/provider-coverage/genesys-pureconnect-icws-api-2026-06-18.checked-inventory.json",
      checkedEndpointEntries: 22,
      officialMachineReadableSpec: "not-found",
      checkedWebhookCatalog: "not-found-in-checked-icws-interaction-web-tools-docs",
      channelCoverage: {
        icwsConnection: "typed-create",
        icwsSessionRequest: "typed-generic-request",
        icwsInteractionSelectedActions: "typed-create-get-update-conference-consult",
        icwsInteractionSubscriptions: "typed-subscribe-unsubscribe",
        icwsMessagingMessages: "typed-poll-messages",
        icwsRecordingExportUri: "typed-read",
        icwsConfigurationUserRead: "typed-read",
        icwsDirectory: "provider-supported-not-typed",
        icwsStatistics: "provider-supported-not-typed",
        configuredHttpHandoff: "supported",
        interactionWebToolsWebChat: "provider-supported-configured-http-only",
        interactionWebToolsCallback: "provider-supported-configured-http-only",
        interactionWebToolsChatLifecycle: "provider-supported-not-typed",
        interactionWebToolsCallbackLifecycle: "provider-supported-not-typed",
        pureConnectChatTransfer: "provider-supported-not-typed",
        typedTransfer: "not-covered",
        events: "provider-supported-not-typed",
        webhooks: "not-covered",
      },
    });
  });

  it("creates PureConnect ICWS connections through the documented connection endpoint", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ csrfToken: "csrf-1", sessionId: "session-1" }), { status: 201 }));
    const client = createGenesysPureConnectContactCenterClient({
      icwsBaseUrl: "https://pureconnect.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createConnection({
      acceptLanguage: "en-US",
      include: ["version", "features"],
      payload: {
        __type: "urn:inin.com:connection:authTokenConnectionRequestSettings",
        applicationName: "cognidesk",
        userID: "agent-1",
        password: "secret",
      },
    })).resolves.toMatchObject({ sessionId: "session-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://pureconnect.example.test/icws/connection?include=version%2Cfeatures",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "accept-language": "en-US",
          "content-type": "application/json",
        }),
      }),
    );
  });

  it("calls documented session-scoped ICWS interaction, messaging, recording, and configuration endpoints", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (init.method === "DELETE") return new Response(null, { status: 204 });
      return new Response(JSON.stringify({ ok: true, url, method: init.method }), { status: 200 });
    });
    const client = createGenesysPureConnectContactCenterClient({
      icwsBaseUrl: "https://pureconnect.example.test",
      sessionId: "session-1",
      csrfToken: "csrf-1",
      sessionCookie: "icws=session-cookie",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createInteraction({
      payload: { target: "Support", mediaType: "chat" },
    })).resolves.toMatchObject({ method: "POST" });
    await expect(client.getInteraction({
      interactionId: "interaction-1",
      query: { include: "attributes" },
    })).resolves.toMatchObject({ method: "GET" });
    await expect(client.updateInteraction({
      interactionId: "interaction-1",
      payload: { attributes: { CustomerId: "customer-1" } },
    })).resolves.toMatchObject({ method: "POST" });
    await expect(client.createConference({
      payload: { interactions: ["interaction-1", "interaction-2"] },
    })).resolves.toMatchObject({ method: "POST" });
    await expect(client.createConsult({
      interactionId: "interaction-1",
      payload: { target: "Supervisor" },
    })).resolves.toMatchObject({ method: "POST" });
    await expect(client.getMessages()).resolves.toMatchObject({ method: "GET" });
    await expect(client.subscribeInteraction({
      interactionId: "interaction-1",
      mediaType: "chat",
      payload: { attributes: ["state", "participants"] },
    })).resolves.toMatchObject({ method: "PUT" });
    await expect(client.unsubscribeInteraction({
      interactionId: "interaction-1",
      mediaType: "chat",
    })).resolves.toEqual({});
    await expect(client.getRecordingExportUri({
      recordingId: "recording-1",
      attachmentId: 2,
    })).resolves.toMatchObject({ method: "GET" });
    await expect(client.getConfigurationUser({
      userId: "agent-1",
      select: ["displayName", "extension"],
    })).resolves.toMatchObject({ method: "GET" });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://pureconnect.example.test/icws/session-1/interactions",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "inin-icws-csrf-token": "csrf-1",
          cookie: "icws=session-cookie",
          "content-type": "application/json",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://pureconnect.example.test/icws/session-1/interactions/interaction-1?include=attributes",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      7,
      "https://pureconnect.example.test/icws/session-1/messaging/subscriptions/interactions/interaction-1/chat",
      expect.objectContaining({ method: "PUT" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      9,
      "https://pureconnect.example.test/icws/session-1/recordings/recording-1/2/export-uri",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      10,
      "https://pureconnect.example.test/icws/session-1/configuration/users/agent-1?select=displayName%2Cextension",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("requires configured PureConnect handoff paths for deployment-specific web tools", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "unexpected" }), { status: 200 }));
    const client = createGenesysPureConnectContactCenterClient({
      icwsBaseUrl: "https://pureconnect.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({ payload: { transcript: "hello" } }))
      .rejects.toThrow("PureConnect handoff path must be provided");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("requires a configured PureConnect readiness path instead of assuming GET /icws/connection", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const client = createGenesysPureConnectContactCenterClient({
      icwsBaseUrl: "https://pureconnect.example.test",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.readiness()).rejects.toThrow("readinessPath must be configured");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("calls the SDK-configured PureConnect readiness path", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ version: "2026" }), { status: 200 }));
    const client = createGenesysPureConnectContactCenterClient({
      icwsBaseUrl: "https://pureconnect.example.test",
      readinessPath: "/icws/connection/version",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.readiness()).resolves.toMatchObject({ version: "2026" });
    expect(fetchMock).toHaveBeenCalledWith(
      "https://pureconnect.example.test/icws/connection/version",
      expect.objectContaining({ method: "GET" }),
    );
  });

  it("creates configured PureConnect handoff requests without inventing chat or callback lifecycle endpoints", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "handoff-1" }), { status: 200 }));
    const client = createGenesysPureConnectContactCenterClient({
      icwsBaseUrl: "https://pureconnect.example.test",
      defaultHandoffPath: "/custom/cognidesk/pureconnect-handoff",
      authorizationHeader: "Bearer session-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createHandoff({
      payload: { queue: "Support", customerId: "customer-1" },
      idempotencyKey: "conversation-1",
    })).resolves.toMatchObject({ id: "handoff-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://pureconnect.example.test/custom/cognidesk/pureconnect-handoff",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ queue: "Support", customerId: "customer-1" }),
        headers: expect.objectContaining({
          authorization: "Bearer session-token",
          "idempotency-key": "conversation-1",
        }),
      }),
    );
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: genesysPureConnectContactCenterProviderManifest,
      channels: [{
        id: "contact-center",
        channel: "contactCenter",
        providerPackageIds: [genesysPureConnectContactCenterProviderManifest.id],
        enabledCapabilities: ["handoff"],
      }],
      credentialStatuses: genesysPureConnectContactCenterCredentialStatuses({
        icwsBaseUrl: "https://pureconnect.example.test",
        sessionConfigured: true,
        routingConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
  });
});
