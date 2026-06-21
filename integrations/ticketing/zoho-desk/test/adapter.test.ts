import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  createZohoDeskTicketingClient,
  createZohoDeskTicketingLiveChecks,
  zohoDeskTicketingCredentialStatuses,
  zohoDeskTicketingProviderManifest,
} from "../src/index.js";

describe("@cognidesk/ticketing-zoho-desk", () => {
  it("exports an official provider manifest", () => {
    expect(zohoDeskTicketingProviderManifest).toMatchObject({
      id: "ticketing.zoho-desk",
      packageName: "@cognidesk/ticketing-zoho-desk",
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
      checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/zoho-desk-checked-rest-api-2026-06-18.inventory.json",
        checkedFamilyCount: 5,
        implementedFamilyCount: 4,
        gapFamilyCount: 1,
        implementedOperationCount: 9,
      },
    });
  });

  it("creates Zoho Desk tickets", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: "ticket-1" }), { status: 201 }));
    const client = createZohoDeskTicketingClient({
      orgId: "123456",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createTicket({
      subject: "Flight disruption",
      departmentId: "dept-1",
      email: "ada@example.test",
    })).resolves.toMatchObject({ id: "ticket-1" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://desk.zoho.com/api/v1/tickets",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Zoho-oauthtoken configured",
          orgId: "123456",
        }),
      }),
    );
  });

  it("lists and creates Zoho Desk ticket comments", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ data: [] }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ id: "comment-1" }), { status: 201 }));
    const client = createZohoDeskTicketingClient({
      orgId: "123456",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listTicketComments("ticket-1", { limit: 50, from: 0, include: "plainText" }))
      .resolves.toMatchObject({ data: [] });
    await expect(client.createTicketComment("ticket-1", {
      content: "Internal handoff note.",
      isPublic: false,
      contentType: "plainText",
    })).resolves.toMatchObject({ id: "comment-1" });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://desk.zoho.com/api/v1/tickets/ticket-1/comments?limit=50&from=0&include=plainText",
      expect.objectContaining({
        method: "GET",
        headers: expect.objectContaining({
          authorization: "Zoho-oauthtoken configured",
          orgId: "123456",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://desk.zoho.com/api/v1/tickets/ticket-1/comments",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          content: "Internal handoff note.",
          isPublic: false,
          contentType: "plainText",
        }),
      }),
    );
  });

  it("lists Zoho Desk ticket threads and sends ticket replies", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ data: [{ id: "thread-1" }] }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ id: "reply-1" }), { status: 201 }));
    const client = createZohoDeskTicketingClient({
      orgId: "123456",
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listTicketThreads("ticket-1", { limit: 25, sortBy: "createdTime" }))
      .resolves.toMatchObject({ data: [{ id: "thread-1" }] });
    await expect(client.sendTicketReply("ticket-1", {
      channel: "EMAIL",
      content: "We are escalating this to a specialist.",
      to: "ada@example.test",
      fromEmailAddress: "support@example.test",
    })).resolves.toMatchObject({ id: "reply-1" });

    expect(fetchMock).toHaveBeenNthCalledWith(
      1,
      "https://desk.zoho.com/api/v1/tickets/ticket-1/threads?limit=25&sortBy=createdTime",
      expect.objectContaining({ method: "GET" }),
    );
    expect(fetchMock).toHaveBeenNthCalledWith(
      2,
      "https://desk.zoho.com/api/v1/tickets/ticket-1/sendReply",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          channel: "EMAIL",
          content: "We are escalating this to a specialist.",
          to: "ada@example.test",
          fromEmailAddress: "support@example.test",
        }),
      }),
    );
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
          orgId: "123456",
          accessToken: "configured",
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
          orgId: "missing",
          accessToken: "configured",
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
          orgId: "123456",
          accessToken: "missing",
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
