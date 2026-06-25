import jsforce from "jsforce";
import { describe, expect, it } from "vitest";
import {
  createSalesforceTicketingClient,
  salesforceTicketingProviderOperations,
  type SalesforceProviderPayload,
  type SalesforceTicketingRawClient,
} from "../src/index.js";

interface SdkCall {
  object?: string;
  method: "retrieve" | "create" | "update" | "query";
  args: unknown[];
}

describe("@cognidesk/integration-ticketing-salesforce", () => {
  it("constructs a jsforce Connection as the default raw SDK client", () => {
    const client = createSalesforceTicketingClient({
      instanceUrl: "https://example.my.salesforce.com",
      accessToken: "access-token",
    });

    expect(client.rawClient).toBeInstanceOf(jsforce.Connection);
    expect(client.getRawClient()).toBe(client.rawClient);
    expect((client.rawClient as any).instanceUrl).toBe("https://example.my.salesforce.com");
    expect((client.rawClient as any).accessToken).toBe("access-token");
  });

  it("declares provider operations as concrete jsforce runtime methods", () => {
    expect(Object.fromEntries(
      salesforceTicketingProviderOperations.map((operation) => [
        operation.alias,
        operation.providerOperation,
      ]),
    )).toEqual({
      "ticket.read": "Connection.sobject(\"Case\").retrieve",
      "ticket.comment.create": "Connection.sobject(\"CaseComment\").create",
      "ticket.create": "Connection.sobject(\"Case\").create",
      "ticket.update": "Connection.sobject(\"Case\").update",
      "ticket.search": "Connection.query",
      "ticket.internalNote.create": "Connection.sobject(\"FeedItem\").create",
      "salesforce.soql.query": "Connection.query",
    });
  });

  it("binds declared operations to jsforce SDK runtime calls", async () => {
    const calls: SdkCall[] = [];
    const rawClient = createRawClient(calls);
    const client = createSalesforceTicketingClient({
      rawClient,
    });

    expect(client.rawClient).toBe(rawClient);
    expect(client.getRawClient()).toBe(rawClient);
    expect(client.integration.bindingReport.missingHandlerAliases).toEqual([]);

    await client.integration.run("ticket.read", { ticketId: "500-read" });
    await client.integration.run("ticket.create", {
      subject: "A",
      status: "New",
      fields: { Custom__c: "custom" },
    });
    await client.integration.run("ticket.update", {
      ticketId: "500-update",
      patch: {
        status: "Closed",
        fields: { Resolution__c: "fixed" },
      },
    });
    await client.integration.run("ticket.comment.create", {
      caseId: "500-comment",
      body: "public",
      isPublished: false,
    });
    await client.integration.run("ticket.search", {
      where: "Status = 'New'",
      limit: 5,
    });
    await client.integration.run("ticket.internalNote.create", {
      ticketId: "500-note",
      note: "private",
    });
    await client.integration.run("salesforce.soql.query", {
      soql: "SELECT Id FROM Case LIMIT 1",
    });

    expect(calls).toEqual([
      { object: "Case", method: "retrieve", args: ["500-read"] },
      {
        object: "Case",
        method: "create",
        args: [{ Subject: "A", Status: "New", Custom__c: "custom" }],
      },
      {
        object: "Case",
        method: "update",
        args: [{ Id: "500-update", Status: "Closed", Resolution__c: "fixed" }],
      },
      {
        object: "CaseComment",
        method: "create",
        args: [{ ParentId: "500-comment", CommentBody: "public", IsPublished: false }],
      },
      {
        method: "query",
        args: [
          "SELECT Id, CaseNumber, Subject, Status, Priority, Origin, CreatedDate, LastModifiedDate FROM Case WHERE Status = 'New' LIMIT 5",
        ],
      },
      {
        object: "FeedItem",
        method: "create",
        args: [{ ParentId: "500-note", Body: "private", Type: "TextPost" }],
      },
      { method: "query", args: ["SELECT Id FROM Case LIMIT 1"] },
    ]);
  });
});

function createRawClient(calls: SdkCall[]): SalesforceTicketingRawClient {
  return {
    sobject(object) {
      return {
        async retrieve(id: string | string[]) {
          calls.push({ object, method: "retrieve", args: [id] });
          return { object, id };
        },
        async create(input: SalesforceProviderPayload | SalesforceProviderPayload[]) {
          calls.push({ object, method: "create", args: [input] });
          return { object, input };
        },
        async update(input: SalesforceProviderPayload | SalesforceProviderPayload[]) {
          calls.push({ object, method: "update", args: [input] });
          return { object, input };
        },
      };
    },
    async query(soql) {
      calls.push({ method: "query", args: [soql] });
      return { soql };
    },
  };
}
