export const inventoryProviders = [
  {
    provider: "salesforce",
    packageName: "@cognidesk/integrations",
    artifactStem: "salesforce-checked-rest-service-cloud",
    officialSources: [
      { label: "Salesforce REST API resources", url: "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm", kind: "official-docs" },
      { label: "Salesforce sObject Describe", url: "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/dome_sobject_describe.htm", kind: "official-docs" },
      { label: "Salesforce Case object reference", url: "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm", kind: "official-docs" },
      { label: "Salesforce CaseComment object reference", url: "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casecomment.htm", kind: "official-docs" },
      { label: "Salesforce FeedItem object reference", url: "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feeditem.htm", kind: "official-docs" },
    ],
    families: [
      family("REST discovery, identity, and org readiness", "implemented-subset", ["GET /services/data/{version}/", "GET /services/oauth2/userinfo", "SOQL Organization readiness query"], ["Full org service availability and limits still require querying the customer's org."]),
      family("Case sObject", "implemented-subset", ["POST /services/data/{version}/sobjects/Case", "GET /services/data/{version}/sobjects/Case/{Id}", "PATCH /services/data/{version}/sobjects/Case/{Id}", "SOQL Case search", "GET /services/data/{version}/sobjects/Case/describe"], ["Record types, required fields, custom fields, layouts, assignment rules, field-level security, triggers, and Flow behavior are org-specific and require describe/metadata export."]),
      family("CaseComment and FeedItem", "implemented-subset", ["POST /sobjects/CaseComment", "SOQL CaseComment list", "POST /sobjects/FeedItem", "SOQL FeedItem list"], ["EmailMessage, ContentVersion/files, rich Chatter feed surfaces, and comment/feed visibility policy are not wrapped."]),
      family("Contact and Account lookup", "implemented-subset", ["GET /sobjects/Contact/{Id}", "SOQL Contact by email", "GET /sobjects/Account/{Id}", "SOQL Account search"], ["Broader sObject CRUD/search is only reachable through SDK-user SOQL escape-hatch plumbing, not generated object coverage."]),
      family("Composite, Bulk, Metadata/Tooling, Pub/Sub, Streaming, Platform Events, Enhanced Chat/Messaging, Live Agent", "gap", [], ["No generated functions in this package. Full/customer-specific coverage requires Salesforce org describe/metadata exports, enabled Service Cloud products, event schemas, connected-app scopes, and permission-set evidence."]),
    ],
  },
  {
    provider: "dynamics365",
    packageName: "@cognidesk/integrations",
    artifactStem: "dynamics365-checked-dataverse-customer-service",
    officialSources: [
      { label: "Microsoft Dataverse Web API overview", url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview", kind: "official-docs" },
      { label: "Dataverse Web API metadata queries", url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-metadata-web-api", kind: "official-docs" },
      { label: "Dynamics 365 Customer Service incident table reference", url: "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/incident", kind: "official-docs" },
      { label: "Dataverse annotation table reference", url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/annotation", kind: "official-docs" },
      { label: "Dataverse AddToQueue Action", url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/addtoqueue?view=dataverse-latest", kind: "official-docs" },
    ],
    families: [
      family("Incident table", "implemented-subset", ["POST /api/data/{version}/incidents", "GET /api/data/{version}/incidents({id})", "PATCH /api/data/{version}/incidents({id})", "GET /api/data/{version}/incidents"], ["Custom columns, required fields, choice labels, relationships, forms, business rules, and security-role effects are environment-specific and require $metadata/EntityDefinitions export."]),
      family("EntityDefinitions/readiness", "implemented-subset", ["GET /api/data/{version}/EntityDefinitions(...)", "GET /api/data/{version}/WhoAmI"], ["Full CSDL/entity/action/function coverage requires customer environment $metadata and privileges."]),
      family("Annotations, queues, and activities", "implemented-subset", ["POST /api/data/{version}/annotations", "GET /api/data/{version}/annotations", "POST /api/data/{version}/AddToQueue", "GET /api/data/{version}/queues", "GET /api/data/{version}/activitypointers"], ["Annotation file download/delete, activity-specific tables, queue item lifecycle, routing rules, and relationship metadata are not wrapped."]),
      family("Omnichannel, custom messaging, live work items, custom actions/functions, broader Dataverse tables", "gap", [], ["No generated functions in this package. Full/customer-specific coverage requires Dataverse $metadata, solution customizations, enabled Dynamics products, security roles, and action/function export."]),
    ],
  },
  {
    provider: "servicenow",
    packageName: "@cognidesk/integrations",
    artifactStem: "servicenow-checked-table-attachment-importset",
    officialSources: [
      { label: "ServiceNow Table API", url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_TableAPI.html", kind: "official-docs" },
      { label: "ServiceNow Attachment API", url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_AttachmentAPI.html", kind: "official-docs" },
      { label: "ServiceNow Import Set API", url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_ImportSetAPI.html", kind: "official-docs" },
      { label: "ServiceNow REST API Explorer", url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/concept/c_RESTAPIExplorer.html", kind: "official-docs" },
    ],
    families: [
      family("Table API records", "implemented-subset", ["POST /api/now/table/{tableName}", "GET /api/now/table/{tableName}/{sys_id}", "PATCH /api/now/table/{tableName}/{sys_id}", "GET /api/now/table/{tableName}"], ["Generic table helpers are SDK-user-selected table plumbing, not generated coverage for arbitrary tables, custom fields, ACLs, business rules, plugins, or journal semantics."]),
      family("Incident convenience helpers", "implemented-subset", ["POST /api/now/table/incident", "PATCH /api/now/table/incident/{sys_id} work_notes", "PATCH /api/now/table/incident/{sys_id} comments"], ["Incident dictionary/customization, mandatory fields, state model, assignment rules, and customer visibility require instance dictionary/schema export."]),
      family("Attachment and Import Set", "implemented-subset", ["POST /api/now/attachment/file", "GET /api/now/attachment", "POST /api/now/import/{stagingTableName}", "GET /api/now/import/{stagingTableName}/{sys_id}"], ["Attachment download/delete, transform-map lifecycle, import-set monitoring breadth, and staging-table typing are gaps."]),
      family("Service Catalog, CSM Case, Virtual Agent/Bot Integration, scripted REST APIs, workflows, platform admin APIs", "gap", [], ["No generated functions in this package. Full/customer-specific coverage requires REST API Explorer/OpenAPI export for enabled APIs, table dictionary export, plugins/products, ACLs, roles, and scripted REST definitions."]),
    ],
  },
  {
    provider: "help-scout",
    packageName: "@cognidesk/integrations",
    artifactStem: "help-scout-checked-inbox-api",
    officialSources: [
      { label: "Help Scout developer llms.txt", url: "https://developer.helpscout.com/llms.txt", kind: "llms-endpoint-inventory" },
      { label: "Help Scout Inbox API", url: "https://developer.helpscout.com/mailbox-api/", kind: "official-docs" },
    ],
    families: [
      family("Conversations", "implemented-subset", ["GET /v2/conversations", "POST /v2/conversations", "GET /v2/conversations/{id}", "PATCH /v2/conversations/{id}"], ["Delete conversation, tags-only update helpers, attachment lifecycle beyond inline payloads."]),
      family("Conversation threads", "implemented-subset", ["GET /v2/conversations/{id}/threads", "POST /v2/conversations/{id}/reply", "POST /v2/conversations/{id}/notes"], ["Drafts, chats, phone threads, forward/customer thread variants, full attachment lifecycle."]),
      family("Mailboxes", "implemented-subset", ["GET /v2/mailboxes"], ["Folders, fields, saved replies, mailbox routing helpers."]),
      family("Customers", "gap", [], ["Customer create/read/update/search/subresources are not typed."]),
      family("Tags, custom properties, reports, workflows, webhooks, Docs API, Chat API, Beacon, Apps", "gap", [], ["No typed helpers in this ticketing adapter."]),
    ],
  },
  {
    provider: "oracle-service",
    packageName: "@cognidesk/integrations",
    artifactStem: "oracle-service-checked-service-requests",
    officialSources: [
      { label: "Oracle Sales and Fusion Service REST API", url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/index.html", kind: "official-docs" },
      { label: "Oracle serviceRequests", url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/api-internal-service-requests.html", kind: "official-docs" },
    ],
    families: [
      family("serviceRequests collection", "implemented-subset", ["GET /crmRestApi/resources/11.13.18.05/serviceRequests", "POST /crmRestApi/resources/11.13.18.05/serviceRequests"], ["Only support-workflow fields are wrapped."]),
      family("serviceRequests item", "implemented-subset", ["GET /crmRestApi/resources/11.13.18.05/serviceRequests/{SrNumber}", "PATCH /crmRestApi/resources/11.13.18.05/serviceRequests/{SrNumber}"], ["Delete and rich child expansions are not wrapped."]),
      family("serviceRequests child messages", "implemented-subset", ["POST /crmRestApi/resources/11.13.18.05/serviceRequests/{SrNumber}/child/messages"], ["Message read/update/delete and message attachments/channel communication lifecycle are gaps."]),
      family("service request child resources", "gap", [], ["Activities, attachments, contacts, resources, milestones, references, tags, smart actions, LOV/metadata behavior."]),
      family("Broader Fusion CX resources", "gap", [], ["Queues, workflow rules, privileges, accounts/contacts outside service request field mapping, and broader CX APIs."]),
    ],
  },
  {
    provider: "pega-customer-service",
    packageName: "@cognidesk/integrations",
    artifactStem: "pega-customer-service-checked-dx-api",
    officialSources: [
      { label: "Pega DX API overview", url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/dx-api-overview.html", kind: "official-docs" },
      { label: "Pega managing cases with DX API", url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/managing-cases-dx-api.html", kind: "official-docs" },
    ],
    families: [
      family("Cases", "implemented-subset", ["POST /cases", "GET /cases", "GET /cases/{ID}", "PUT /cases/{ID}"], ["Case locking/refresh/validation, stage/process navigation, and delete/close policy are not wrapped."]),
      family("Case types", "implemented-subset", ["GET /casetypes"], ["Case type detail/start forms and view metadata beyond listing are not wrapped."]),
      family("Assignment actions", "implemented-subset", ["PATCH /assignments/{assignmentID}/actions/{actionID}"], ["Assignment details, action refresh/validation, bulk action lifecycle, and attachments are gaps."]),
      family("Data views/pages, attachments, views, application/admin APIs", "gap", [], ["No typed helpers in this adapter."]),
    ],
  },
  {
    provider: "sap-service-cloud",
    packageName: "@cognidesk/integrations",
    artifactStem: "sap-service-cloud-checked-c4c-odata",
    officialSources: [
      { label: "SAP Cloud for Customer OData API", url: "https://help.sap.com/docs/sap-cloud-for-customer/odata-services/sap-cloud-for-customer-odata-api", kind: "official-docs" },
      { label: "SAP Cloud for Customer OData Services PDF", url: "https://help.sap.com/doc/77979cd206da4b7f9bd264b390d373fc/CLOUD/en-US/OData_Services.pdf", kind: "official-docs" },
    ],
    families: [
      family("ServiceRequestCollection", "implemented-subset", ["GET /sap/c4c/odata/v1/c4codataapi/ServiceRequestCollection", "POST /sap/c4c/odata/v1/c4codataapi/ServiceRequestCollection", "GET /sap/c4c/odata/v1/c4codataapi/ServiceRequestCollection('{ObjectID}')", "PATCH /sap/c4c/odata/v1/c4codataapi/ServiceRequestCollection('{ObjectID}')"], ["Only service request support fields and query passthrough are wrapped."]),
      family("CSRF token preflight", "implemented-subset", ["GET /sap/c4c/odata/v1/c4codataapi/ServiceRequestCollection?$top=1"], ["Token handling is only helper-level preflight."]),
      family("Related OData entities", "gap", [], ["Notes, descriptions, attachments, involved parties, service categories, code lists, custom OData services, workflow actions, communication arrangements."]),
    ],
  },
  {
    provider: "zoho-desk",
    packageName: "@cognidesk/integrations",
    artifactStem: "zoho-desk-checked-rest-api",
    officialSources: [
      { label: "Zoho Desk API documentation", url: "https://desk.zoho.com/DeskAPIDocument", kind: "official-docs" },
    ],
    families: [
      family("Tickets", "implemented-subset", ["POST /api/v1/tickets", "GET /api/v1/tickets", "GET /api/v1/tickets/{ticket_id}", "PATCH /api/v1/tickets/{ticket_id}"], ["Spam/trash, merge, move, assignment, blueprint, skills, SLA and other ticket actions are not wrapped."]),
      family("Ticket comments", "implemented-subset", ["GET /api/v1/tickets/{ticket_id}/comments", "POST /api/v1/tickets/{ticket_id}/comments"], ["Comment update/delete and attachment details are gaps."]),
      family("Threads and replies", "implemented-subset", ["GET /api/v1/tickets/{ticket_id}/threads", "POST /api/v1/tickets/{ticket_id}/sendReply"], ["Thread detail, forward, draft, attachment and channel-specific lifecycle are gaps."]),
      family("Organizations", "implemented-subset", ["GET /api/v1/organizations"], ["Readiness only."]),
      family("Contacts, accounts, departments, agents, teams, attachments, layouts, webhooks, help center, analytics, settings", "gap", [], ["No typed helpers in this adapter."]),
    ],
  },
];

function family(name, status, implementedOperations, gaps) {
  return { name, status, implementedOperations, gaps };
}
