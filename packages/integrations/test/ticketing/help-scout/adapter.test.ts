import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import { readProviderCoverageArtifact } from "../../provider-coverage-artifacts.js";
import {
  createHelpScoutTicketingClient,
  createHelpScoutTicketingLiveChecks,
  helpScoutTicketingCredentialStatuses,
  helpScoutTicketingProviderManifest,
} from "../../../src/ticketing/help-scout/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest", () => {
    expect(helpScoutTicketingProviderManifest).toMatchObject({
      id: "ticketing.help-scout",
      packageName: "@cognidesk/integrations",
      category: "ticketing",
      provider: "help-scout",
      coverage: {
        scope: "support-workflow-subset",
      },
    });
    expect(helpScoutTicketingProviderManifest.coverage.notes.join(" "))
      .toContain("raw conversation JSONPatch update");
    expect(helpScoutTicketingProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developer.helpscout.com/llms.txt",
        "https://developer.helpscout.com/mailbox-api/overview/authentication",
        "https://developer.helpscout.com/mailbox-api/endpoints/conversations/update/",
        "https://developer.helpscout.com/mailbox-api/endpoints/conversations/threads/list/",
        "https://developer.helpscout.com/mailbox-api/endpoints/conversations/threads/reply/",
        "https://developer.helpscout.com/mailbox-api/endpoints/conversations/threads/note/",
        "https://developer.helpscout.com/mailbox-api/endpoints/inboxes/list/",
      ]));
    expect(helpScoutTicketingProviderManifest.credentialRequirements[0]?.scopes)
      .not.toEqual(expect.arrayContaining(["conversations.read", "conversations.write"]));
    const handoffObjects = helpScoutTicketingProviderManifest.capabilities
      .find((capability) => capability.capability === "handoff")?.providerObjects;
    expect(handoffObjects).toEqual(expect.arrayContaining([
      expect.objectContaining({ kind: "helpScoutReplyThread" }),
      expect.objectContaining({ kind: "helpScoutNoteThread" }),
    ]));
    const coverage = readProviderCoverageArtifact("docs/provider-coverage/help-scout-checked-inbox-api-2026-06-18.inventory.json");
    expect(helpScoutTicketingProviderManifest.metadata).toMatchObject({
      checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/help-scout-checked-inbox-api-2026-06-18.inventory.json",
        checkedFamilyCount: coverage.counts?.familyCount,
        implementedFamilyCount: coverage.counts?.implementedFamilyCount,
        gapFamilyCount: coverage.counts?.gapFamilyCount,
        implementedOperationCount: coverage.counts?.implementedOperationCount,
      },
    });
  });

  it("creates Help Scout conversations", async () => {
    const fetchMock = vi.fn(async () => new Response(JSON.stringify({ id: 123 }), { status: 201 }));
    const client = createHelpScoutTicketingClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createConversation({
      mailboxId: 42,
      subject: "Flight disruption",
      customer: { email: "ada@example.test" },
      threads: [{ type: "customer", text: "Need help rebooking." }],
    })).resolves.toMatchObject({ id: 123 });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.helpscout.net/v2/conversations",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({ authorization: "Bearer configured" }),
      }),
    );
  });

  it("sends Help Scout conversation updates as the documented JSONPatch payload", async () => {
    const fetchMock = vi.fn(async () => new Response(null, { status: 204 }));
    const client = createHelpScoutTicketingClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.updateConversation("123", {
      op: "replace",
      path: "/subject",
      value: "Updated subject",
    })).resolves.toEqual({});

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.helpscout.net/v2/conversations/123",
      expect.objectContaining({
        method: "PATCH",
        headers: expect.objectContaining({ authorization: "Bearer configured" }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
      op: "replace",
      path: "/subject",
      value: "Updated subject",
    });
  });

  it("lists threads and creates reply/note threads for handoff context", async () => {
    const fetchMock = vi.fn(async (url: string | URL | Request) => {
      const value = String(url);
      if (value.endsWith("/v2/conversations/123/threads")) {
        return new Response(JSON.stringify({ _embedded: { threads: [{ id: 456 }] } }), { status: 200 });
      }
      if (value.endsWith("/v2/conversations/123/reply")) {
        return new Response(null, { status: 201, headers: { "Resource-ID": "567" } });
      }
      if (value.endsWith("/v2/conversations/123/notes")) {
        return new Response(null, { status: 201, headers: { "Resource-ID": "568" } });
      }
      return new Response(JSON.stringify({ message: `Unexpected URL ${value}` }), { status: 404 });
    });
    const client = createHelpScoutTicketingClient({
      accessToken: "configured",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.listThreads("123"))
      .resolves.toMatchObject({ _embedded: { threads: [{ id: 456 }] } });
    await expect(client.createReply("123", {
      customer: { id: 456 },
      text: "Manual handoff reply",
      status: "active",
    })).resolves.toEqual({ resourceId: "567" });
    await expect(client.createNote("123", {
      text: "Internal handoff note",
      user: 789,
    })).resolves.toEqual({ resourceId: "568" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.helpscout.net/v2/conversations/123/reply",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          customer: { id: 456 },
          text: "Manual handoff reply",
          status: "active",
        }),
        headers: expect.objectContaining({
          authorization: "Bearer configured",
          "content-type": "application/json",
        }),
      }),
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.helpscout.net/v2/conversations/123/notes",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          text: "Internal handoff note",
          user: 789,
        }),
      }),
    );
  });

  it("passes provider conformance", async () => {
    const result = await runProviderConformance({
      manifest: helpScoutTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [helpScoutTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: helpScoutTicketingCredentialStatuses({ apiAccessConfigured: true }),
    });

    expect(result.status).toBe("passed");
  });

  it("passes live conformance with configured Help Scout readiness", async () => {
    const result = await runProviderConformance({
      manifest: helpScoutTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [helpScoutTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: helpScoutTicketingCredentialStatuses({ apiAccessConfigured: true }),
      live: {
        enabled: true,
        checks: createHelpScoutTicketingLiveChecks({
          accessToken: "configured",
          client: { async readiness() {
            return { _embedded: { mailboxes: [{ id: 42 }] } };
          } },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.mailboxes",
      status: "passed",
    }));
  });

  it("blocks Help Scout live checks when OAuth access is missing", async () => {
    const result = await runProviderConformance({
      manifest: helpScoutTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [helpScoutTicketingProviderManifest.id],
        enabledCapabilities: ["create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: helpScoutTicketingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createHelpScoutTicketingLiveChecks({
          accessToken: "missing",
          client: { async readiness() {
            throw new Error("Help Scout readiness should be credential-blocked before execution.");
          } },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.mailboxes",
      status: "credential-blocked",
    }));
  });
});
