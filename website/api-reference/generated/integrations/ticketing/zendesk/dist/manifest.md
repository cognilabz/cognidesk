# integrations/ticketing/zendesk/dist/manifest

## Variables

### zendeskTicketingProviderManifest

```ts
const zendeskTicketingProviderManifest: {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: Record<string, unknown>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: Record<string, unknown>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
  coverage: {
     evidence: {
        label: string;
        url?: string;
     }[];
     notes: string[];
     scope:   | "support-workflow-subset"
        | "provider-api-subset"
        | "connector-required"
        | "local-protocol"
        | "full-provider-api";
  };
  credentialRequirements: {
     description?: string;
     id: string;
     label?: string;
     metadata?: Record<string, unknown>;
     required: boolean;
     scopes: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "inbound-only"
     | "outbound-only"
    | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "community" | "official" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: Record<string, unknown>;
  name: string;
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension: boolean;
     externallyVisible?: boolean;
     inputSchema?: unknown;
     inputSchemaName?: string;
     inputSchemaRef?: string;
     label?: string;
     metadata?: Record<string, unknown>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: Record<string, unknown>;
        schemaName?: string;
     }[];
     providerOperation?: string;
     requiredPolicyIds?: string[];
     requiresApproval?: boolean;
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  packageName: string;
  privacyNotes: string[];
  provider: string;
  trustLevel: "community" | "official" | "verified" | "experimental";
} & {
  capabilities: [{
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
      }, {
        kind: "zendeskTicketComment";
        label: "Zendesk Ticket Comment";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
      }, {
        kind: "zendeskUser";
        label: "Zendesk User";
      }, {
        kind: "zendeskOrganization";
        label: "Zendesk Organization";
      }, {
        kind: "zendeskWebhook";
        label: "Zendesk Webhook";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
      }, {
        kind: "zendeskTicketComment";
        label: "Zendesk Ticket Comment";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Zendesk Node.js API client docs";
        url: "https://developer.zendesk.com/documentation/ticketing/api-clients/nodejs/";
      }, {
        label: "Zendesk Support API OpenAPI";
        url: "https://developer.zendesk.com/zendesk/oas.yaml";
      }, {
        label: "Zendesk Support Tickets API";
        url: "https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/";
      }, {
        label: "Zendesk Ticket Comments API";
        url: "https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/";
      }, {
        label: "Zendesk Upload Files API";
        url: "https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/";
     }];
     notes: ["SDK decision: Zendesk documents node-zendesk but marks it not officially supported, so this package keeps a constrained Zendesk Support API slice instead of adopting it as an official SDK.", "Coverage is limited to ticket create/read/update/search, comments, uploads, users, organizations, webhooks list, current-user readiness, and raw request escape hatch operations used by Cognidesk support workflows.", "This package intentionally does not copy the old generated full Zendesk Support OpenAPI clone."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     id: "zendesk-instance";
     label: "Zendesk Support instance URL";
     required: true;
   }, {
     id: "zendesk-api-access";
     label: "Zendesk Support API access";
     metadata: {
        privilegeGuidance: "OAuth tokens use Zendesk read/write scopes. API-token credentials inherit the Zendesk user's role and Support permissions.";
        scopeKind: "mixed-auth-mode";
     };
     required: true;
     scopes: ["read", "write"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.zendesk";
  limitations: ["Tenant fields, triggers, automations, macros, routing, requester identity, and outbound policy remain SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidate: "node-zendesk";
        checkedAt: "2026-06-21";
        reason: "Zendesk's own docs mark node-zendesk as not officially supported.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["tickets.create", "tickets.read", "tickets.update", "search", "ticket_comments.create", "uploads.create", "users.read", "organizations.read", "webhooks.list", "users.me"];
        source: "Zendesk Support API";
     };
  };
  name: "Zendesk Support";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /api/v2/tickets.json";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/v2/tickets/{ticket_id}.json";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PUT /api/v2/tickets/{ticket_id}.json";
     sideEffect: true;
   }, {
     alias: "ticket.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/v2/search.json";
   }, {
     alias: "ticket.comment.create";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticketComment";
     providerOperation: "PUT /api/v2/tickets/{ticket_id}.json";
     sideEffect: true;
   }, {
     alias: "ticket.internalNote.create";
     capability: "draft";
     exposesSensitiveData: true;
     providerObject: "internalNote";
     providerOperation: "PUT /api/v2/tickets/{ticket_id}.json";
     sideEffect: true;
   }, {
     alias: "ticket.attachments.add";
     capability: "attach";
     exposesSensitiveData: true;
     providerObject: "attachment";
     providerOperation: "POST /api/v2/uploads.json";
     sideEffect: true;
   }, {
     alias: "customer.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "customer";
     providerOperation: "GET /api/v2/users/{user_id}.json";
   }, {
     alias: "zendesk.organization.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "zendeskOrganization";
     providerOperation: "GET /api/v2/organizations/{organization_id}.json";
   }, {
     alias: "zendesk.webhook.list";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "zendeskWebhook";
     providerOperation: "GET /api/v2/webhooks";
   }, {
     alias: "zendesk.readiness";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "zendeskCurrentUser";
     providerOperation: "GET /api/v2/users/me.json";
  }];
  packageName: "@cognidesk/integration-ticketing-zendesk";
  privacyNotes: ["Zendesk tickets can contain customer messages, requester details, internal comments, tags, and workflow metadata."];
  provider: "zendesk";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \[\{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"zendeskTicket"`; `label`: `"Zendesk Ticket"`; \}, \{ `kind`: `"zendeskTicketComment"`; `label`: `"Zendesk Ticket Comment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"zendeskTicket"`; `label`: `"Zendesk Ticket"`; \}, \{ `kind`: `"zendeskUser"`; `label`: `"Zendesk User"`; \}, \{ `kind`: `"zendeskOrganization"`; `label`: `"Zendesk Organization"`; \}, \{ `kind`: `"zendeskWebhook"`; `label`: `"Zendesk Webhook"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"zendeskTicket"`; `label`: `"Zendesk Ticket"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"zendeskTicket"`; `label`: `"Zendesk Ticket"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"zendeskTicket"`; `label`: `"Zendesk Ticket"`; \}, \{ `kind`: `"zendeskTicketComment"`; `label`: `"Zendesk Ticket Comment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Zendesk Node.js API client docs"`; `url`: `"https://developer.zendesk.com/documentation/ticketing/api-clients/nodejs/"`; \}, \{ `label`: `"Zendesk Support API OpenAPI"`; `url`: `"https://developer.zendesk.com/zendesk/oas.yaml"`; \}, \{ `label`: `"Zendesk Support Tickets API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/"`; \}, \{ `label`: `"Zendesk Ticket Comments API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/"`; \}, \{ `label`: `"Zendesk Upload Files API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/"`; \}\]; `notes`: \[`"SDK decision: Zendesk documents node-zendesk but marks it not officially supported, so this package keeps a constrained Zendesk Support API slice instead of adopting it as an official SDK."`, `"Coverage is limited to ticket create/read/update/search, comments, uploads, users, organizations, webhooks list, current-user readiness, and raw request escape hatch operations used by Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Zendesk Support OpenAPI clone."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Zendesk Node.js API client docs"`; `url`: `"https://developer.zendesk.com/documentation/ticketing/api-clients/nodejs/"`; \}, \{ `label`: `"Zendesk Support API OpenAPI"`; `url`: `"https://developer.zendesk.com/zendesk/oas.yaml"`; \}, \{ `label`: `"Zendesk Support Tickets API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/"`; \}, \{ `label`: `"Zendesk Ticket Comments API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/"`; \}, \{ `label`: `"Zendesk Upload Files API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/"`; \}\] |
| `coverage.notes` | \[`"SDK decision: Zendesk documents node-zendesk but marks it not officially supported, so this package keeps a constrained Zendesk Support API slice instead of adopting it as an official SDK."`, `"Coverage is limited to ticket create/read/update/search, comments, uploads, users, organizations, webhooks list, current-user readiness, and raw request escape hatch operations used by Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Zendesk Support OpenAPI clone."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | \[\{ `id`: `"zendesk-instance"`; `label`: `"Zendesk Support instance URL"`; `required`: `true`; \}, \{ `id`: `"zendesk-api-access"`; `label`: `"Zendesk Support API access"`; `metadata`: \{ `privilegeGuidance`: `"OAuth tokens use Zendesk read/write scopes. API-token credentials inherit the Zendesk user's role and Support permissions."`; `scopeKind`: `"mixed-auth-mode"`; \}; `required`: `true`; `scopes`: \[`"read"`, `"write"`\]; \}\] |
| `directions` | \[`"bidirectional"`\] |
| `id` | `"ticketing.zendesk"` |
| `limitations` | \[`"Tenant fields, triggers, automations, macros, routing, requester identity, and outbound policy remain SDK-user configuration."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementationStrategy`: `"direct-http-support-slice"`; `issue`: `35`; `sdkDecision`: \{ `candidate`: `"node-zendesk"`; `checkedAt`: `"2026-06-21"`; `reason`: `"Zendesk's own docs mark node-zendesk as not officially supported."`; `verdict`: `"not-adopted"`; \}; `supportSlice`: \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"search"`, `"ticket_comments.create"`, `"uploads.create"`, `"users.read"`, `"organizations.read"`, `"webhooks.list"`, `"users.me"`\]; `source`: `"Zendesk Support API"`; \}; \} |
| `metadata.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.issue` | `35` |
| `metadata.sdkDecision` | \{ `candidate`: `"node-zendesk"`; `checkedAt`: `"2026-06-21"`; `reason`: `"Zendesk's own docs mark node-zendesk as not officially supported."`; `verdict`: `"not-adopted"`; \} |
| `metadata.sdkDecision.candidate` | `"node-zendesk"` |
| `metadata.sdkDecision.checkedAt` | `"2026-06-21"` |
| `metadata.sdkDecision.reason` | `"Zendesk's own docs mark node-zendesk as not officially supported."` |
| `metadata.sdkDecision.verdict` | `"not-adopted"` |
| `metadata.supportSlice` | \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"search"`, `"ticket_comments.create"`, `"uploads.create"`, `"users.read"`, `"organizations.read"`, `"webhooks.list"`, `"users.me"`\]; `source`: `"Zendesk Support API"`; \} |
| `metadata.supportSlice.allowlistedOperations` | readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"search"`, `"ticket_comments.create"`, `"uploads.create"`, `"users.read"`, `"organizations.read"`, `"webhooks.list"`, `"users.me"`\] |
| `metadata.supportSlice.source` | `"Zendesk Support API"` |
| `name` | `"Zendesk Support"` |
| `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /api/v2/tickets.json"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/v2/tickets/{ticket_id}.json"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PUT /api/v2/tickets/{ticket_id}.json"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/v2/search.json"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"PUT /api/v2/tickets/{ticket_id}.json"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.internalNote.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `providerObject`: `"internalNote"`; `providerOperation`: `"PUT /api/v2/tickets/{ticket_id}.json"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.attachments.add"`; `capability`: `"attach"`; `exposesSensitiveData`: `true`; `providerObject`: `"attachment"`; `providerOperation`: `"POST /api/v2/uploads.json"`; `sideEffect`: `true`; \}, \{ `alias`: `"customer.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"customer"`; `providerOperation`: `"GET /api/v2/users/{user_id}.json"`; \}, \{ `alias`: `"zendesk.organization.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"zendeskOrganization"`; `providerOperation`: `"GET /api/v2/organizations/{organization_id}.json"`; \}, \{ `alias`: `"zendesk.webhook.list"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"zendeskWebhook"`; `providerOperation`: `"GET /api/v2/webhooks"`; \}, \{ `alias`: `"zendesk.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"zendeskCurrentUser"`; `providerOperation`: `"GET /api/v2/users/me.json"`; \}\] |
| `packageName` | `"@cognidesk/integration-ticketing-zendesk"` |
| `privacyNotes` | \[`"Zendesk tickets can contain customer messages, requester details, internal comments, tags, and workflow metadata."`\] |
| `provider` | `"zendesk"` |
| `trustLevel` | `"official"` |

***

### zendeskTicketingProviderManifestInput

```ts
const zendeskTicketingProviderManifestInput: {
  capabilities: [{
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
      }, {
        kind: "zendeskTicketComment";
        label: "Zendesk Ticket Comment";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
      }, {
        kind: "zendeskUser";
        label: "Zendesk User";
      }, {
        kind: "zendeskOrganization";
        label: "Zendesk Organization";
      }, {
        kind: "zendeskWebhook";
        label: "Zendesk Webhook";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "zendeskTicket";
        label: "Zendesk Ticket";
      }, {
        kind: "zendeskTicketComment";
        label: "Zendesk Ticket Comment";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Zendesk Node.js API client docs";
        url: "https://developer.zendesk.com/documentation/ticketing/api-clients/nodejs/";
      }, {
        label: "Zendesk Support API OpenAPI";
        url: "https://developer.zendesk.com/zendesk/oas.yaml";
      }, {
        label: "Zendesk Support Tickets API";
        url: "https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/";
      }, {
        label: "Zendesk Ticket Comments API";
        url: "https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/";
      }, {
        label: "Zendesk Upload Files API";
        url: "https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/";
     }];
     notes: ["SDK decision: Zendesk documents node-zendesk but marks it not officially supported, so this package keeps a constrained Zendesk Support API slice instead of adopting it as an official SDK.", "Coverage is limited to ticket create/read/update/search, comments, uploads, users, organizations, webhooks list, current-user readiness, and raw request escape hatch operations used by Cognidesk support workflows.", "This package intentionally does not copy the old generated full Zendesk Support OpenAPI clone."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     id: "zendesk-instance";
     label: "Zendesk Support instance URL";
     required: true;
   }, {
     id: "zendesk-api-access";
     label: "Zendesk Support API access";
     metadata: {
        privilegeGuidance: "OAuth tokens use Zendesk read/write scopes. API-token credentials inherit the Zendesk user's role and Support permissions.";
        scopeKind: "mixed-auth-mode";
     };
     required: true;
     scopes: ["read", "write"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.zendesk";
  limitations: ["Tenant fields, triggers, automations, macros, routing, requester identity, and outbound policy remain SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidate: "node-zendesk";
        checkedAt: "2026-06-21";
        reason: "Zendesk's own docs mark node-zendesk as not officially supported.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["tickets.create", "tickets.read", "tickets.update", "search", "ticket_comments.create", "uploads.create", "users.read", "organizations.read", "webhooks.list", "users.me"];
        source: "Zendesk Support API";
     };
  };
  name: "Zendesk Support";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /api/v2/tickets.json";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/v2/tickets/{ticket_id}.json";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PUT /api/v2/tickets/{ticket_id}.json";
     sideEffect: true;
   }, {
     alias: "ticket.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/v2/search.json";
   }, {
     alias: "ticket.comment.create";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticketComment";
     providerOperation: "PUT /api/v2/tickets/{ticket_id}.json";
     sideEffect: true;
   }, {
     alias: "ticket.internalNote.create";
     capability: "draft";
     exposesSensitiveData: true;
     providerObject: "internalNote";
     providerOperation: "PUT /api/v2/tickets/{ticket_id}.json";
     sideEffect: true;
   }, {
     alias: "ticket.attachments.add";
     capability: "attach";
     exposesSensitiveData: true;
     providerObject: "attachment";
     providerOperation: "POST /api/v2/uploads.json";
     sideEffect: true;
   }, {
     alias: "customer.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "customer";
     providerOperation: "GET /api/v2/users/{user_id}.json";
   }, {
     alias: "zendesk.organization.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "zendeskOrganization";
     providerOperation: "GET /api/v2/organizations/{organization_id}.json";
   }, {
     alias: "zendesk.webhook.list";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "zendeskWebhook";
     providerOperation: "GET /api/v2/webhooks";
   }, {
     alias: "zendesk.readiness";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "zendeskCurrentUser";
     providerOperation: "GET /api/v2/users/me.json";
  }];
  packageName: "@cognidesk/integration-ticketing-zendesk";
  privacyNotes: ["Zendesk tickets can contain customer messages, requester details, internal comments, tags, and workflow metadata."];
  provider: "zendesk";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"zendeskTicket"`; `label`: `"Zendesk Ticket"`; \}, \{ `kind`: `"zendeskTicketComment"`; `label`: `"Zendesk Ticket Comment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"zendeskTicket"`; `label`: `"Zendesk Ticket"`; \}, \{ `kind`: `"zendeskUser"`; `label`: `"Zendesk User"`; \}, \{ `kind`: `"zendeskOrganization"`; `label`: `"Zendesk Organization"`; \}, \{ `kind`: `"zendeskWebhook"`; `label`: `"Zendesk Webhook"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"zendeskTicket"`; `label`: `"Zendesk Ticket"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"zendeskTicket"`; `label`: `"Zendesk Ticket"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"zendeskTicket"`; `label`: `"Zendesk Ticket"`; \}, \{ `kind`: `"zendeskTicketComment"`; `label`: `"Zendesk Ticket Comment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"ticketing"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Zendesk Node.js API client docs"`; `url`: `"https://developer.zendesk.com/documentation/ticketing/api-clients/nodejs/"`; \}, \{ `label`: `"Zendesk Support API OpenAPI"`; `url`: `"https://developer.zendesk.com/zendesk/oas.yaml"`; \}, \{ `label`: `"Zendesk Support Tickets API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/"`; \}, \{ `label`: `"Zendesk Ticket Comments API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/"`; \}, \{ `label`: `"Zendesk Upload Files API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/"`; \}\]; `notes`: \[`"SDK decision: Zendesk documents node-zendesk but marks it not officially supported, so this package keeps a constrained Zendesk Support API slice instead of adopting it as an official SDK."`, `"Coverage is limited to ticket create/read/update/search, comments, uploads, users, organizations, webhooks list, current-user readiness, and raw request escape hatch operations used by Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Zendesk Support OpenAPI clone."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Zendesk Node.js API client docs"`; `url`: `"https://developer.zendesk.com/documentation/ticketing/api-clients/nodejs/"`; \}, \{ `label`: `"Zendesk Support API OpenAPI"`; `url`: `"https://developer.zendesk.com/zendesk/oas.yaml"`; \}, \{ `label`: `"Zendesk Support Tickets API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/"`; \}, \{ `label`: `"Zendesk Ticket Comments API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket_comments/"`; \}, \{ `label`: `"Zendesk Upload Files API"`; `url`: `"https://developer.zendesk.com/api-reference/ticketing/tickets/ticket-attachments/"`; \}\] |
| `coverage.notes` | \[`"SDK decision: Zendesk documents node-zendesk but marks it not officially supported, so this package keeps a constrained Zendesk Support API slice instead of adopting it as an official SDK."`, `"Coverage is limited to ticket create/read/update/search, comments, uploads, users, organizations, webhooks list, current-user readiness, and raw request escape hatch operations used by Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Zendesk Support OpenAPI clone."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `id`: `"zendesk-instance"`; `label`: `"Zendesk Support instance URL"`; `required`: `true`; \}, \{ `id`: `"zendesk-api-access"`; `label`: `"Zendesk Support API access"`; `metadata`: \{ `privilegeGuidance`: `"OAuth tokens use Zendesk read/write scopes. API-token credentials inherit the Zendesk user's role and Support permissions."`; `scopeKind`: `"mixed-auth-mode"`; \}; `required`: `true`; `scopes`: \[`"read"`, `"write"`\]; \}\] |
| <a id="property-directions"></a> `directions` | \[`"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"ticketing.zendesk"` |
| <a id="property-limitations"></a> `limitations` | \[`"Tenant fields, triggers, automations, macros, routing, requester identity, and outbound policy remain SDK-user configuration."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementationStrategy`: `"direct-http-support-slice"`; `issue`: `35`; `sdkDecision`: \{ `candidate`: `"node-zendesk"`; `checkedAt`: `"2026-06-21"`; `reason`: `"Zendesk's own docs mark node-zendesk as not officially supported."`; `verdict`: `"not-adopted"`; \}; `supportSlice`: \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"search"`, `"ticket_comments.create"`, `"uploads.create"`, `"users.read"`, `"organizations.read"`, `"webhooks.list"`, `"users.me"`\]; `source`: `"Zendesk Support API"`; \}; \} |
| `metadata.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.issue` | `35` |
| `metadata.sdkDecision` | \{ `candidate`: `"node-zendesk"`; `checkedAt`: `"2026-06-21"`; `reason`: `"Zendesk's own docs mark node-zendesk as not officially supported."`; `verdict`: `"not-adopted"`; \} |
| `metadata.sdkDecision.candidate` | `"node-zendesk"` |
| `metadata.sdkDecision.checkedAt` | `"2026-06-21"` |
| `metadata.sdkDecision.reason` | `"Zendesk's own docs mark node-zendesk as not officially supported."` |
| `metadata.sdkDecision.verdict` | `"not-adopted"` |
| `metadata.supportSlice` | \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"search"`, `"ticket_comments.create"`, `"uploads.create"`, `"users.read"`, `"organizations.read"`, `"webhooks.list"`, `"users.me"`\]; `source`: `"Zendesk Support API"`; \} |
| `metadata.supportSlice.allowlistedOperations` | readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"search"`, `"ticket_comments.create"`, `"uploads.create"`, `"users.read"`, `"organizations.read"`, `"webhooks.list"`, `"users.me"`\] |
| `metadata.supportSlice.source` | `"Zendesk Support API"` |
| <a id="property-name"></a> `name` | `"Zendesk Support"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /api/v2/tickets.json"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/v2/tickets/{ticket_id}.json"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PUT /api/v2/tickets/{ticket_id}.json"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/v2/search.json"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"PUT /api/v2/tickets/{ticket_id}.json"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.internalNote.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `providerObject`: `"internalNote"`; `providerOperation`: `"PUT /api/v2/tickets/{ticket_id}.json"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.attachments.add"`; `capability`: `"attach"`; `exposesSensitiveData`: `true`; `providerObject`: `"attachment"`; `providerOperation`: `"POST /api/v2/uploads.json"`; `sideEffect`: `true`; \}, \{ `alias`: `"customer.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"customer"`; `providerOperation`: `"GET /api/v2/users/{user_id}.json"`; \}, \{ `alias`: `"zendesk.organization.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"zendeskOrganization"`; `providerOperation`: `"GET /api/v2/organizations/{organization_id}.json"`; \}, \{ `alias`: `"zendesk.webhook.list"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"zendeskWebhook"`; `providerOperation`: `"GET /api/v2/webhooks"`; \}, \{ `alias`: `"zendesk.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"zendeskCurrentUser"`; `providerOperation`: `"GET /api/v2/users/me.json"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-ticketing-zendesk"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Zendesk tickets can contain customer messages, requester details, internal comments, tags, and workflow metadata."`\] |
| <a id="property-provider"></a> `provider` | `"zendesk"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
