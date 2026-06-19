import {
  SALESFORCE_DEFAULT_API_VERSION,
  type SalesforceAccountResource,
  type SalesforceAssignmentRuleOptions,
  type SalesforceCaseCommentResource,
  type SalesforceCaseResource,
  type SalesforceContactResource,
  type SalesforceCreateCaseInput,
  type SalesforceCreateFeedItemInput,
  type SalesforceCreateResult,
  type SalesforceFeedItemResource,
  type SalesforceOrganizationResource,
  type SalesforceProviderResponse,
  type SalesforceQueryResult,
  type SalesforceRecord,
  type SalesforceTicketingClient,
  type SalesforceTicketingClientOptions,
  type SalesforceUpdateCaseInput,
  type SalesforceUserInfo,
} from "./contracts.js";
import {
  applyFields,
  buildSoql,
  dataUrl,
  escapeSoqlString,
  normalizeApiVersion,
  normalizeInstanceUrl,
  pruneUndefined,
  salesforceRequest,
  sobjectRowUrl,
  sobjectUrl,
} from "./request.js";

export function createSalesforceTicketingClient(
  options: SalesforceTicketingClientOptions,
): SalesforceTicketingClient {
  const baseUrl = normalizeInstanceUrl(options.instanceUrl);
  const apiVersion = normalizeApiVersion(options.apiVersion ?? SALESFORCE_DEFAULT_API_VERSION);
  const fetchImpl = options.fetch ?? globalThis.fetch;
  if (!fetchImpl) {
    throw new Error("A fetch implementation is required to create a Salesforce ticketing client.");
  }

  return {
    describeSObject(objectName) {
      return salesforceRequest<SalesforceProviderResponse>({
        url: dataUrl(baseUrl, apiVersion, `/sobjects/${encodeURIComponent(objectName)}/describe`),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    getUserInfo() {
      return salesforceRequest<SalesforceUserInfo>({
        url: new URL("/services/oauth2/userinfo", baseUrl),
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async getOrganization() {
      const result = await this.query<SalesforceOrganizationResource>(
        "SELECT Id, Name, OrganizationType, InstanceName, IsSandbox FROM Organization LIMIT 1",
      );
      return result.records[0];
    },
    createCase(input, assignment) {
      const headers = assignmentRuleHeaders(assignment);
      return salesforceRequest<SalesforceCreateResult>({
        url: sobjectUrl(baseUrl, apiVersion, "Case"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: caseBody(input),
        ...(headers ? { headers } : {}),
      });
    },
    getCase(caseId, fields) {
      const url = sobjectRowUrl(baseUrl, apiVersion, "Case", caseId);
      applyFields(url, fields);
      return salesforceRequest<SalesforceCaseResource>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    updateCase(caseId, input, assignment) {
      const headers = assignmentRuleHeaders(assignment);
      return salesforceRequest<void>({
        url: sobjectRowUrl(baseUrl, apiVersion, "Case", caseId),
        method: "PATCH",
        options,
        fetch: fetchImpl,
        body: caseBody(input),
        ...(headers ? { headers } : {}),
        emptyResponse: true,
      });
    },
    searchCases(input = {}) {
      return this.query<SalesforceCaseResource>(buildSoql({
        objectName: "Case",
        fields: input.fields ?? [
          "Id",
          "CaseNumber",
          "Subject",
          "Status",
          "Priority",
          "Origin",
          "ContactId",
          "AccountId",
          "OwnerId",
          "CreatedDate",
          "LastModifiedDate",
        ],
        ...input,
      }));
    },
    createCaseComment(input) {
      return salesforceRequest<SalesforceCreateResult>({
        url: sobjectUrl(baseUrl, apiVersion, "CaseComment"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: pruneUndefined({
          ...input.fields,
          ParentId: input.caseId,
          CommentBody: input.body,
          IsPublished: input.isPublished,
        }),
      });
    },
    listCaseComments(caseId, fields = ["Id", "ParentId", "CommentBody", "IsPublished", "CreatedDate", "CreatedById"]) {
      return this.query<SalesforceCaseCommentResource>(buildSoql({
        objectName: "CaseComment",
        fields,
        where: `ParentId = '${escapeSoqlString(caseId)}'`,
        orderBy: "CreatedDate ASC",
      }));
    },
    createFeedItem(input) {
      return salesforceRequest<SalesforceCreateResult>({
        url: sobjectUrl(baseUrl, apiVersion, "FeedItem"),
        method: "POST",
        options,
        fetch: fetchImpl,
        body: pruneUndefined({
          ...input.fields,
          ParentId: input.parentId,
          Body: input.body,
          Type: input.type ?? "TextPost",
          Visibility: input.visibility,
        }),
      });
    },
    listFeedItems(parentId, fields = ["Id", "ParentId", "Body", "Type", "Visibility", "CreatedDate", "CreatedById"]) {
      return this.query<SalesforceFeedItemResource>(buildSoql({
        objectName: "FeedItem",
        fields,
        where: `ParentId = '${escapeSoqlString(parentId)}'`,
        orderBy: "CreatedDate ASC",
      }));
    },
    getContact(contactId, fields) {
      const url = sobjectRowUrl(baseUrl, apiVersion, "Contact", contactId);
      applyFields(url, fields);
      return salesforceRequest<SalesforceContactResource>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    findContactsByEmail(input) {
      return this.query<SalesforceContactResource>(buildSoql({
        objectName: "Contact",
        fields: input.fields ?? ["Id", "Email", "FirstName", "LastName", "Name", "AccountId"],
        where: `Email = '${escapeSoqlString(input.email)}'`,
        limit: input.limit ?? 10,
      }));
    },
    getAccount(accountId, fields) {
      const url = sobjectRowUrl(baseUrl, apiVersion, "Account", accountId);
      applyFields(url, fields);
      return salesforceRequest<SalesforceAccountResource>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    searchAccounts(input = {}) {
      return this.query<SalesforceAccountResource>(buildSoql({
        objectName: "Account",
        fields: input.fields ?? ["Id", "Name", "Website", "CreatedDate", "LastModifiedDate"],
        ...input,
      }));
    },
    query<T extends SalesforceRecord = SalesforceRecord>(soql: string) {
      const url = dataUrl(baseUrl, apiVersion, "/query");
      url.searchParams.set("q", soql);
      return salesforceRequest<SalesforceQueryResult<T>>({
        url,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
  };
}

function caseBody(input: SalesforceCreateCaseInput | SalesforceUpdateCaseInput) {
  return pruneUndefined({
    ...input.fields,
    Subject: input.subject,
    Description: input.description,
    Status: input.status,
    Priority: input.priority,
    Origin: input.origin,
    ContactId: input.contactId,
    AccountId: input.accountId,
    OwnerId: input.ownerId,
    SuppliedEmail: input.suppliedEmail,
    SuppliedName: input.suppliedName,
    SuppliedPhone: input.suppliedPhone,
    Reason: input.reason,
    Type: input.type,
  });
}

function assignmentRuleHeaders(assignment?: SalesforceAssignmentRuleOptions): Record<string, string> | undefined {
  if (!assignment) return undefined;
  if (assignment.assignmentRuleId) return { "Sforce-Auto-Assign": assignment.assignmentRuleId };
  if (assignment.useDefaultRule !== undefined) return { "Sforce-Auto-Assign": String(assignment.useDefaultRule) };
  return undefined;
}
