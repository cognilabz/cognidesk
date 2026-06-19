import { describe, expect, it, vi } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  SALESFORCE_DEFAULT_API_VERSION,
  createSalesforceTicketingClient,
  createSalesforceTicketingLiveChecks,
  parseSalesforceEventPayload,
  parseSalesforceEventRequest,
  salesforceTicketingCredentialStatuses,
  salesforceTicketingProviderManifest,
  validateSalesforceWebhookSecret,
} from "../../../src/ticketing/salesforce/index.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Salesforce Service Cloud ticketing", () => {
    expect(salesforceTicketingProviderManifest).toMatchObject({
      id: "ticketing.salesforce",
      packageName: "@cognidesk/integrations",
      category: "ticketing",
      provider: "salesforce",
      trustLevel: "official",
      coverage: {
        scope: "provider-api-subset",
      },
    });
    expect(salesforceTicketingProviderManifest.coverage.notes.join(" ")).toContain("not full Salesforce REST");
    expect(salesforceTicketingProviderManifest.coverage.notes.join(" ")).toContain("inbound event relay parsing");
    expect(salesforceTicketingProviderManifest.coverage.notes.join(" ")).toContain("generic SOQL `query()` helper");
    expect(salesforceTicketingProviderManifest.coverage.evidence.map((entry) => entry.url))
      .toEqual(expect.arrayContaining([
        "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm",
        "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/headers_autoassign.htm",
        "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm",
      ]));
    expect(salesforceTicketingProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "create-provider-object",
        "read-provider-object",
        "update-provider-object",
        "search-provider-object",
        "handoff",
        "salesforce.webhook-verifier",
      ]));
    expect(salesforceTicketingProviderManifest.credentialRequirements
      .find((requirement) => requirement.id === "salesforce-webhook-secret")?.required).toBe(false);
    const receiveCapability = salesforceTicketingProviderManifest.capabilities
      .find((capability) => capability.capability === "receive");
    const searchCapability = salesforceTicketingProviderManifest.capabilities
      .find((capability) => capability.capability === "search-provider-object");
    expect(receiveCapability?.label).toBe("Parse Salesforce event relay payloads");
    expect(receiveCapability?.description).toContain("does not subscribe to Pub/Sub");
    expect(searchCapability?.description).toContain("generic SOQL query helper is an SDK-user-owned escape hatch");
    expect(salesforceTicketingProviderManifest.metadata).toMatchObject({
      checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/salesforce-checked-rest-service-cloud-2026-06-18.inventory.json",
        implementedOperationCount: 16,
        fullCoverageExportRequirement: expect.stringContaining("sObject describe/metadata exports"),
      },
      channelCoverage: {
        genericSoqlQuery: "sdk-owned-classified-endpoint",
      },
    });
    const createCapability = salesforceTicketingProviderManifest.capabilities
      .find((capability) => capability.capability === "create-provider-object");
    const handoffCapability = salesforceTicketingProviderManifest.capabilities
      .find((capability) => capability.capability === "handoff");
    expect(createCapability?.providerObjects?.map((object) => object.schemaName))
      .toEqual(["Case", "CaseComment", "FeedItem"]);
    expect(handoffCapability?.description).toContain("comment and feed-item foundations");
    expect(handoffCapability?.description).not.toContain("attachment");
    expect(salesforceTicketingProviderManifest.limitations.join(" ")).toContain("SDK users own handoff timing");
  });

  it("creates Salesforce cases through the versioned REST sObject API", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({
        id: "500xx0000012345AAA",
        success: true,
        errors: [],
      }), { status: 201 })
    );
    const client = createSalesforceTicketingClient({
      instanceUrl: "https://example.my.salesforce.com/support",
      accessToken: "sf-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    const result = await client.createCase({
      subject: "Cannot sign in",
      description: "Customer cannot sign in after password reset.",
      status: "New",
      priority: "High",
      origin: "Web",
      suppliedEmail: "customer@example.test",
      fields: { External_Conversation_Id__c: "conversation_1" },
    });

    expect(result.id).toBe("500xx0000012345AAA");
    expect(fetchMock).toHaveBeenCalledWith(
      `https://example.my.salesforce.com/services/data/${SALESFORCE_DEFAULT_API_VERSION}/sobjects/Case`,
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          authorization: "Bearer sf-token",
          "content-type": "application/json",
        }),
      }),
    );
    const request = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(request.body)).toEqual({
      External_Conversation_Id__c: "conversation_1",
      Subject: "Cannot sign in",
      Description: "Customer cannot sign in after password reset.",
      Status: "New",
      Priority: "High",
      Origin: "Web",
      SuppliedEmail: "customer@example.test",
    });
  });

  it("reads, updates, and searches cases with Salesforce REST API shapes", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.endsWith("/sobjects/Case/describe") && init.method === "GET") {
        return new Response(JSON.stringify({ name: "Case", fields: [{ name: "Status" }] }), { status: 200 });
      }
      if (url.endsWith("/sobjects/Case/500xx0000012345AAA?fields=Id%2CCaseNumber%2CSubject") && init.method === "GET") {
        return new Response(JSON.stringify({ Id: "500xx0000012345AAA", CaseNumber: "00001001" }), { status: 200 });
      }
      if (url.endsWith("/sobjects/Case/500xx0000012345AAA") && init.method === "PATCH") {
        return new Response(null, { status: 204 });
      }
      return new Response(JSON.stringify({
        totalSize: 1,
        done: true,
        records: [{ Id: "500xx0000012345AAA", Subject: "Cannot sign in" }],
      }), { status: 200 });
    });
    const client = createSalesforceTicketingClient({
      instanceUrl: "https://example.my.salesforce.com",
      accessToken: "sf-token",
      apiVersion: "61.0",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.describeSObject("Case")).resolves.toMatchObject({ name: "Case" });
    await expect(client.getCase("500xx0000012345AAA", ["Id", "CaseNumber", "Subject"]))
      .resolves.toMatchObject({ CaseNumber: "00001001" });
    await expect(client.updateCase("500xx0000012345AAA", {
      status: "Working",
      ownerId: "005xx0000012345AAA",
      fields: { Escalated__c: true },
    }, { useDefaultRule: true })).resolves.toBeUndefined();
    const search = await client.searchCases({
      where: "Status != 'Closed'",
      orderBy: "LastModifiedDate DESC",
      limit: 5,
    });

    expect(search.records).toHaveLength(1);
    const updateInit = (fetchMock.mock.calls[2] as unknown[])[1] as { body: string; headers: Record<string, string> };
    expect(updateInit.headers["Sforce-Auto-Assign"]).toBe("true");
    const updateRequest = updateInit;
    expect(JSON.parse(updateRequest.body)).toEqual({
      Escalated__c: true,
      Status: "Working",
      OwnerId: "005xx0000012345AAA",
    });
    const [searchUrl] = fetchMock.mock.calls[3] as unknown as [string, RequestInit];
    expect(searchUrl).toBe(
      "https://example.my.salesforce.com/services/data/v61.0/query?q=SELECT+Id%2C+CaseNumber%2C+Subject%2C+Status%2C+Priority%2C+Origin%2C+ContactId%2C+AccountId%2C+OwnerId%2C+CreatedDate%2C+LastModifiedDate+FROM+Case+WHERE+Status+%21%3D+%27Closed%27+ORDER+BY+LastModifiedDate+DESC+LIMIT+5",
    );
  });

  it("supports case comments, feed items, contacts, accounts, and identity checks", async () => {
    const fetchMock = vi.fn(async (url: string, init: RequestInit) => {
      if (url.endsWith("/sobjects/CaseComment") && init.method === "POST") {
        return new Response(JSON.stringify({ id: "00axx0000012345AAA", success: true, errors: [] }), { status: 201 });
      }
      if (url.endsWith("/sobjects/FeedItem") && init.method === "POST") {
        return new Response(JSON.stringify({ id: "0D5xx0000012345AAA", success: true, errors: [] }), { status: 201 });
      }
      if (url.includes("FROM+Contact")) {
        return new Response(JSON.stringify({ totalSize: 1, done: true, records: [{ Id: "003xx", Email: "customer@example.test" }] }), { status: 200 });
      }
      if (url.includes("FROM+Account")) {
        return new Response(JSON.stringify({ totalSize: 1, done: true, records: [{ Id: "001xx", Name: "Example" }] }), { status: 200 });
      }
      if (url.endsWith("/services/oauth2/userinfo")) {
        return new Response(JSON.stringify({ user_id: "005xx", organization_id: "00Dxx", preferred_username: "agent@example.test" }), { status: 200 });
      }
      if (url.includes("FROM+Organization")) {
        return new Response(JSON.stringify({ totalSize: 1, done: true, records: [{ Id: "00Dxx", Name: "Example Org", IsSandbox: false }] }), { status: 200 });
      }
      return new Response(JSON.stringify({ totalSize: 0, done: true, records: [] }), { status: 200 });
    });
    const client = createSalesforceTicketingClient({
      instanceUrl: "https://example.my.salesforce.com",
      accessToken: "sf-token",
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(client.createCaseComment({
      caseId: "500xx",
      body: "Internal handoff context.",
      isPublished: false,
    })).resolves.toMatchObject({ id: "00axx0000012345AAA" });
    await expect(client.createFeedItem({
      parentId: "500xx",
      body: "A specialist is taking over.",
      visibility: "InternalUsers",
    })).resolves.toMatchObject({ id: "0D5xx0000012345AAA" });
    await expect(client.findContactsByEmail({ email: "customer@example.test" })).resolves.toMatchObject({
      records: [{ Id: "003xx" }],
    });
    await expect(client.searchAccounts({ where: "Name = 'Example'", limit: 1 })).resolves.toMatchObject({
      records: [{ Id: "001xx" }],
    });
    await expect(client.getUserInfo()).resolves.toMatchObject({ user_id: "005xx" });
    await expect(client.getOrganization()).resolves.toMatchObject({ Name: "Example Org" });

    const commentRequest = (fetchMock.mock.calls[0] as unknown[])[1] as { body: string };
    expect(JSON.parse(commentRequest.body)).toEqual({
      ParentId: "500xx",
      CommentBody: "Internal handoff context.",
      IsPublished: false,
    });
    const feedRequest = (fetchMock.mock.calls[1] as unknown[])[1] as { body: string };
    expect(JSON.parse(feedRequest.body)).toEqual({
      ParentId: "500xx",
      Body: "A specialist is taking over.",
      Type: "TextPost",
      Visibility: "InternalUsers",
    });
  });

  it("validates and parses Salesforce event requests with fail-closed verification", async () => {
    expect(validateSalesforceWebhookSecret({
      expectedSecret: "secret",
      actualSecret: "secret",
    })).toBe(true);
    expect(validateSalesforceWebhookSecret({
      expectedSecret: "secret",
      actualSecret: "wrong",
    })).toBe(false);

    const request = new Request("https://sdk.example.test/webhooks/salesforce", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-salesforce-event": "Case_Updated__e",
        "x-cognidesk-salesforce-secret": "secret",
      },
      body: JSON.stringify({
        schema: "Case_Updated__e",
        payload: { CaseId__c: "500xx", Status__c: "Working" },
        event: { replayId: 12 },
      }),
    });

    await expect(parseSalesforceEventRequest(request, { webhookSecret: "secret" })).resolves.toMatchObject({
      eventType: "Case_Updated__e",
      verified: true,
      payload: {
        kind: "json",
        json: {
          schema: "Case_Updated__e",
          payload: { CaseId__c: "500xx", Status__c: "Working" },
          event: { replayId: 12 },
        },
      },
    });

    const unsigned = new Request("https://sdk.example.test/webhooks/salesforce", {
      method: "POST",
      body: "{}",
    });
    await expect(parseSalesforceEventRequest(unsigned, { requireVerification: true }))
      .rejects.toThrow("Salesforce webhook verification is required.");
  });

  it("parses Salesforce Outbound Message XML payloads", () => {
    const payload = parseSalesforceEventPayload(`
      <notifications>
        <OrganizationId>00Dxx0000000001</OrganizationId>
        <ActionId>04kxx0000000001</ActionId>
        <Notification>
          <Id>04lxx0000000001</Id>
          <sObject>
            <sf:Id>500xx0000012345AAA</sf:Id>
            <sf:Status>Working</sf:Status>
            <sf:Subject>Cannot sign in &amp; reset password</sf:Subject>
          </sObject>
        </Notification>
      </notifications>
    `, "text/xml");

    expect(payload).toEqual({
      kind: "outbound-message",
      message: {
        organizationId: "00Dxx0000000001",
        actionId: "04kxx0000000001",
        notifications: [{
          id: "04lxx0000000001",
          sObject: {
            Id: "500xx0000012345AAA",
            Status: "Working",
            Subject: "Cannot sign in & reset password",
          },
        }],
      },
    });
  });

  it("reports live conformance as credential-blocked until Salesforce credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: salesforceTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [salesforceTicketingProviderManifest.id],
        enabledCapabilities: ["receive", "create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: salesforceTicketingCredentialStatuses({}),
      live: {
        enabled: true,
        checks: createSalesforceTicketingLiveChecks({
          instanceUrl: "https://example.my.salesforce.com",
          accessToken: "missing",
          client: {
            async getUserInfo() {
              return {};
            },
            async getOrganization() {
              return {};
            },
          },
        }),
      },
    });

    expect(result.status).toBe("credential-blocked");
    expect(result.checks.some((check) =>
      check.id === "provider.live.identity-org" && check.status === "credential-blocked"
    )).toBe(true);
  });

  it("passes conformance when Salesforce identity/org live check and credentials are configured", async () => {
    const result = await runProviderConformance({
      manifest: salesforceTicketingProviderManifest,
      channels: [{
        id: "ticketing",
        channel: "ticketing",
        providerPackageIds: [salesforceTicketingProviderManifest.id],
        enabledCapabilities: ["receive", "create-provider-object", "read-provider-object", "update-provider-object", "search-provider-object", "handoff"],
      }],
      credentialStatuses: salesforceTicketingCredentialStatuses({
        instanceUrl: "https://example.my.salesforce.com",
        accessToken: "configured",
        webhookSecret: "configured",
      }),
      live: {
        enabled: true,
        checks: createSalesforceTicketingLiveChecks({
          instanceUrl: "https://example.my.salesforce.com",
          accessToken: "configured",
          client: {
            async getUserInfo() {
              return { user_id: "005xx", organization_id: "00Dxx", preferred_username: "agent@example.test" };
            },
            async getOrganization() {
              return { Id: "00Dxx", Name: "Example Org", InstanceName: "NA1", IsSandbox: false };
            },
          },
        }),
      },
    });

    expect(result.status).toBe("passed");
    expect(result.checks).toContainEqual(expect.objectContaining({
      id: "provider.live.identity-org",
      status: "passed",
    }));
  });
});
