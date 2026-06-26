import { readFile } from "node:fs/promises";
import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createZohoDeskTicketingClient,
  createZohoDeskTicketingLiveChecks,
  createUnconfiguredZohoDeskProviderClient,
  type ZohoDeskProviderClient,
  type ZohoDeskTicketingClientOptions,
  zohoDeskTicketingCredentialStatuses,
  zohoDeskTicketingProviderManifest,
} from "../src/index.js";

function createProviderClient(overrides: Partial<ZohoDeskProviderClient> = {}): ZohoDeskProviderClient {
  return {
    ...createUnconfiguredZohoDeskProviderClient(),
    ...overrides,
  };
}

describe("@cognidesk/integration-ticketing-zoho-desk", () => {
  it("exports an official provider manifest", () => {
    expect(zohoDeskTicketingProviderManifest).toMatchObject({
      id: "ticketing.zoho-desk",
      packageName: "@cognidesk/integration-ticketing-zoho-desk",
      category: "ticketing",
      provider: "zoho-desk",
    });
  });

  it("declares docs-backed scoped Zoho Desk coverage", () => {
    expect(zohoDeskTicketingProviderManifest.coverage.scope).toBe("support-workflow-subset");
    expect(zohoDeskTicketingProviderManifest.coverage.notes.join(" ")).toContain("not full Zoho Desk API coverage");
    expect(zohoDeskTicketingProviderManifest.coverage.evidence.map((item) => item.url)).toEqual(expect.arrayContaining([
      "https://desk.zoho.com/DeskAPIDocument",
      "https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Createaticket",
      "https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Listalltickets",
      "https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Updateaticket",
      "https://desk.zoho.com/DeskAPIDocument#TicketsComments#TicketsComments_Listallticketcomments",
      "https://desk.zoho.com/DeskAPIDocument#TicketsComments#TicketsComments_Createticketcomment",
      "https://desk.zoho.com/DeskAPIDocument#Threads#Threads_Listallthreads",
      "https://desk.zoho.com/DeskAPIDocument#Threads#Threads_SendEmailReply",
      "https://desk.zoho.com/DeskAPIDocument#Organizations",
    ]));
    expect(zohoDeskTicketingProviderManifest.credentialRequirements[1]?.scopes)
      .toEqual(["Desk.tickets.CREATE", "Desk.tickets.READ", "Desk.tickets.UPDATE", "Desk.basic.READ"]);
    expect(zohoDeskTicketingProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    )).toEqual(expect.arrayContaining([
      "zohoDeskTicket",
      "zohoDeskTicketComment",
      "zohoDeskThread",
      "zohoDeskReply",
    ]));
    expect(zohoDeskTicketingProviderManifest.metadata).toMatchObject({
      implementation: {
        strategy: "provider-rest-adapter",
        adapterKind: "no-official-sdk-rest-adapter",
        providerClientInterface: "ZohoDeskProviderClient",
        defaultClientPolicy: "use-built-in-rest-adapter-when-orgId-and-accessToken-are-configured",
        packageOwnedRestClient: true,
        providerClientOverride: true,
        officialRuntimeSdkAvailable: false,
        manifestImport: "no-client-initialization",
      },
      implementationStrategy: "no-official-sdk-rest-adapter",
      providerClient: {
        interface: "ZohoDeskProviderClient",
        importPolicy: "runtime-entrypoint-only",
        defaultClientPolicy: "configured-rest-default-with-host-client-override",
        sdkDecision: {
          result: "no-official-sdk-rest-adapter",
        },
      },
      providerRestAdapterException: {
        status: "accepted",
        reviewedAt: "2026-06-25",
        adapterKind: "no-official-sdk-rest-adapter",
        allowedDefaultRuntime: "built-in-rest-adapter",
        hostSdkPath: "ZohoDeskProviderClient",
      },
      checkedProviderSdk: {
        checkedAt: "2026-06-25",
        verdict: "no-official-sdk-rest-adapter",
        officialRuntimeSdkAvailable: false,
        candidates: expect.arrayContaining([
          expect.objectContaining({
            package: "Zoho Desk Java SDK",
            result: "not-node-typescript-runtime",
          }),
          expect.objectContaining({
            package: "@zohodesk/js-api-creator",
            result: "not-provider-ticketing-sdk",
          }),
          expect.objectContaining({
            package: "Zoho Desk extension JS SDK bundle",
            result: "not-backend-runtime-sdk",
          }),
          expect.objectContaining({
            package: "Zoho Desk ASAP JavaScript APIs",
            result: "not-backend-runtime-sdk",
          }),
        ]),
      },
      checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/zoho-desk-checked-rest-api-2026-06-18.inventory.json",
        checkedFamilyCount: 5,
        delegatedFamilyCount: 0,
        gapFamilyCount: 1,
        delegatedOperationCount: 0,
        packageOwnedProviderOperationCount: 9,
      },
    });
    expect(JSON.stringify(zohoDeskTicketingProviderManifest.metadata)).not.toContain("direct-http-support-slice");
  });

  it("declares no runtime provider SDK dependency for the REST-adapter exception", async () => {
    const packageJson = JSON.parse(
      await readFile(new URL("../package.json", import.meta.url), "utf8"),
    ) as {
      dependencies?: Record<string, string>;
    };
    expect(packageJson.dependencies).not.toHaveProperty("@zohodesk/js-api-creator");
  });

  it("delegates Zoho Desk ticket creation to the host-injected provider client", async () => {
    const createTicket = vi.fn(async () => ({ id: "ticket-1" }));
    const client = createZohoDeskTicketingClient({
      providerClient: createProviderClient({ createTicket }),
    });

    await expect(client.createTicket({
      subject: "Flight disruption",
      departmentId: "dept-1",
      email: "ada@example.test",
      additionalFields: { cfEscalationTier: "gold" },
    })).resolves.toMatchObject({ id: "ticket-1" });

    expect(createTicket).toHaveBeenCalledWith({
      subject: "Flight disruption",
      departmentId: "dept-1",
      email: "ada@example.test",
      cfEscalationTier: "gold",
    });
  });

  it("delegates Zoho Desk ticket comment operations to the host-injected provider client", async () => {
    const listTicketComments = vi.fn(async () => ({ data: [] }));
    const createTicketComment = vi.fn(async () => ({ id: "comment-1" }));
    const client = createZohoDeskTicketingClient({
      providerClient: createProviderClient({ listTicketComments, createTicketComment }),
    });

    await expect(client.listTicketComments("ticket-1", { limit: 50, from: 0, include: "plainText" }))
      .resolves.toMatchObject({ data: [] });
    await expect(client.createTicketComment("ticket-1", {
      content: "Internal handoff note.",
      isPublic: false,
      contentType: "plainText",
    })).resolves.toMatchObject({ id: "comment-1" });

    expect(listTicketComments).toHaveBeenCalledWith("ticket-1", { limit: 50, from: 0, include: "plainText" });
    expect(createTicketComment).toHaveBeenCalledWith("ticket-1", {
      content: "Internal handoff note.",
      isPublic: false,
      contentType: "plainText",
    });
  });

  it("delegates Zoho Desk ticket threads and replies to the host-injected provider client", async () => {
    const listTicketThreads = vi.fn(async () => ({ data: [{ id: "thread-1" }] }));
    const sendTicketReply = vi.fn(async () => ({ id: "reply-1" }));
    const client = createZohoDeskTicketingClient({
      providerClient: createProviderClient({ listTicketThreads, sendTicketReply }),
    });

    await expect(client.listTicketThreads("ticket-1", { limit: 25, sortBy: "createdTime" }))
      .resolves.toMatchObject({ data: [{ id: "thread-1" }] });
    await expect(client.sendTicketReply("ticket-1", {
      channel: "EMAIL",
      content: "We are escalating this to a specialist.",
      to: "ada@example.test",
      fromEmailAddress: "support@example.test",
    })).resolves.toMatchObject({ id: "reply-1" });

    expect(listTicketThreads).toHaveBeenCalledWith("ticket-1", { limit: 25, sortBy: "createdTime" });
    expect(sendTicketReply).toHaveBeenCalledWith("ticket-1", {
      channel: "EMAIL",
      content: "We are escalating this to a specialist.",
      to: "ada@example.test",
      fromEmailAddress: "support@example.test",
    });
  });

  it("uses the built-in Zoho Desk REST adapter when credentials are configured", async () => {
    const fetchMock = vi.fn(async (_input: RequestInfo | URL, _init?: RequestInit) =>
      jsonResponse({ id: "ticket-1" }));
    const client = createZohoDeskTicketingClient({
      orgId: "123456",
      accessToken: "access-token",
      dataCenter: "eu",
      headers: { orgId: "attacker-org" },
      fetch: fetchMock,
    });

    await expect(client.createTicket({
      subject: "Flight disruption",
      departmentId: "dept-1",
      email: "ada@example.test",
      status: "Open",
      additionalFields: {
        subject: "Attacker subject",
        departmentId: "dept-attacker",
        status: "Closed",
        cfEscalationTier: "gold",
      },
    })).resolves.toMatchObject({ id: "ticket-1" });
    await client.listTicketComments("ticket 42/a", { limit: 50, include: "plainText" });

    const [createUrl, createInit] = fetchMock.mock.calls[0]!;
    expect(String(createUrl)).toBe("https://desk.zoho.eu/api/v1/tickets");
    expect(createInit?.method).toBe("POST");
    const createHeaders = new Headers(createInit?.headers);
    expect(createHeaders.get("Authorization")).toBe("Zoho-oauthtoken access-token");
    expect(createHeaders.get("orgId")).toBe("123456");
    expect(createHeaders.get("Content-Type")).toBe("application/json");
    expect(JSON.parse(createInit?.body as string)).toEqual({
      subject: "Flight disruption",
      departmentId: "dept-1",
      email: "ada@example.test",
      status: "Open",
      cfEscalationTier: "gold",
    });

    const commentsUrl = new URL(String(fetchMock.mock.calls[1]![0]));
    expect(commentsUrl.origin).toBe("https://desk.zoho.eu");
    expect(commentsUrl.pathname).toBe("/api/v1/tickets/ticket%2042%2Fa/comments");
    expect(commentsUrl.searchParams.get("limit")).toBe("50");
    expect(commentsUrl.searchParams.get("include")).toBe("plainText");

    await client.listTickets({ status: "open", ignored: undefined, empty: null });
    const ticketsUrl = new URL(String(fetchMock.mock.calls[2]![0]));
    expect(ticketsUrl.searchParams.get("status")).toBe("open");
    expect(ticketsUrl.searchParams.has("ignored")).toBe(false);
    expect(ticketsUrl.searchParams.has("empty")).toBe(false);
  });

  it("rejects unrecognized Zoho Desk data centers unless an explicit API base URL is supplied", () => {
    expect(() => createZohoDeskTicketingClient({
      orgId: "123456",
      accessToken: "access-token",
      dataCenter: "evil.example",
    })).toThrow("Unsupported Zoho Desk dataCenter");
    expect(() => createZohoDeskTicketingClient({
      orgId: "123456",
      accessToken: "access-token",
      apiBaseUrl: "https://desk.private.example/api/v1",
      dataCenter: "evil.example",
    })).not.toThrow();
  });

  it("surfaces Zoho Desk REST JSON errors", async () => {
    const fetchMock: NonNullable<ZohoDeskTicketingClientOptions["fetch"]> = vi.fn(async () =>
      jsonResponse({ errorCode: "INVALID_OAUTH", message: "Invalid OAuth token" }, {
        status: 401,
        statusText: "Unauthorized",
      }));
    const client = createZohoDeskTicketingClient({
      orgId: "123456",
      accessToken: "expired-token",
      fetch: fetchMock,
    });

    await expect(client.getTicket("ticket-1")).rejects.toMatchObject({
      message: "Zoho Desk request failed with 401.",
      status: 401,
      payload: { errorCode: "INVALID_OAUTH", message: "Invalid OAuth token" },
    });
  });

  it("fails closed only when neither REST credentials nor host/provider client are provided", async () => {
    const client = createZohoDeskTicketingClient();

    await expect(client.listTickets()).rejects.toThrow("Zoho Desk REST adapter requires orgId and accessToken");

    const liveCheck = createZohoDeskTicketingLiveChecks()[0];
    await expect(liveCheck!.run({})).rejects.toThrow("Zoho Desk REST adapter requires orgId and accessToken");

    const incompleteProviderClient = { ...createUnconfiguredZohoDeskProviderClient() } as Record<string, unknown>;
    delete incompleteProviderClient.readiness;
    expect(() => createZohoDeskTicketingClient({
      providerClient: incompleteProviderClient as unknown as ZohoDeskProviderClient,
    })).toThrow("Zoho Desk providerClient must implement readiness()");
  });

  it("does not carry the retired direct-http-support-slice metadata", () => {
    const metadata = JSON.stringify(zohoDeskTicketingProviderManifest.metadata);
    expect(metadata).not.toContain("direct-http-support-slice");
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: zohoDeskTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [zohoDeskTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: zohoDeskTicketingCredentialStatuses({ orgId: "123456", apiAccessConfigured: true }),
    });

    expect(result.status).toBe("passed");
  });

  it("passes live conformance with configured Zoho Desk readiness", async () => {
    const result = await runProviderConformance({
      manifest: zohoDeskTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [zohoDeskTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: zohoDeskTicketingCredentialStatuses({ orgId: "123456", apiAccessConfigured: true }),
      live: {
        enabled: true,
        checks: createZohoDeskTicketingLiveChecks({
          client: { async readiness() {
            return { data: [{ id: "org-1" }] };
          } },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.organizations",
      status: "passed",
    }));
  });

  it("blocks Zoho Desk live checks when org or API access is missing", async () => {
    const missingOrg = await runProviderConformance({
      manifest: zohoDeskTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [zohoDeskTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: zohoDeskTicketingCredentialStatuses({ apiAccessConfigured: true }),
      live: {
        enabled: true,
        checks: createZohoDeskTicketingLiveChecks({
          client: { async readiness() {
            throw new Error("Zoho Desk readiness should be credential-blocked before execution.");
          } },
        }),
      },
    });

    const missingAccess = await runProviderConformance({
      manifest: zohoDeskTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [zohoDeskTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: zohoDeskTicketingCredentialStatuses({ orgId: "123456" }),
      live: {
        enabled: true,
        checks: createZohoDeskTicketingLiveChecks({
          client: { async readiness() {
            throw new Error("Zoho Desk readiness should be credential-blocked before execution.");
          } },
        }),
      },
    });

    expect(missingOrg.status).toBe("credential-blocked");
    expect(missingAccess.status).toBe("credential-blocked");
    for (const result of [missingOrg, missingAccess]) {
      expect(result.checks).toContainEqual(expect.objectContaining({
        id: "provider.live.organizations",
        status: "credential-blocked",
      }));
    }
  });
});

function jsonResponse(body: unknown, init: ResponseInit = {}) {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
    ...init,
  });
}
