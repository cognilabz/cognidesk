# integrations/ticketing/freshdesk/dist/manifest

## Variables

### freshdeskTicketingProviderManifest

```ts
const freshdeskTicketingProviderManifest: {
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
     capability: "receive";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskWebhookEvent";
        label: "Freshdesk Webhook Event";
     }];
     requiresCredential: true;
   }, {
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskTicket";
        label: "Freshdesk Ticket";
      }, {
        kind: "freshdeskContact";
        label: "Freshdesk Contact";
      }, {
        kind: "freshdeskConversation";
        label: "Freshdesk Ticket Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskTicket";
        label: "Freshdesk Ticket";
      }, {
        kind: "freshdeskContact";
        label: "Freshdesk Contact";
      }, {
        kind: "freshdeskAgent";
        label: "Freshdesk Agent";
      }, {
        kind: "freshdeskGroup";
        label: "Freshdesk Group";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskTicket";
        label: "Freshdesk Ticket";
      }, {
        kind: "freshdeskContact";
        label: "Freshdesk Contact";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskTicket";
        label: "Freshdesk Ticket";
      }, {
        kind: "freshdeskContact";
        label: "Freshdesk Contact";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskTicket";
        label: "Freshdesk Ticket";
      }, {
        kind: "freshdeskConversation";
        label: "Freshdesk Ticket Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Freshdesk API v2 reference";
        url: "https://developers.freshdesk.com/api/";
      }, {
        label: "Freshworks API SDK announcement";
        url: "https://community.freshworks.dev/t/freshworks-api-sdk-for-node-js/5232";
     }];
     notes: ["SDK decision: Freshworks has beta or very early JavaScript packages, but no verified official maintained Freshdesk ticketing backend client suitable for this adapter.", "Coverage is limited to Freshdesk v2 tickets, contacts, conversations, replies, notes, handoff updates, agents, groups, current-agent readiness, and SDK-user shared-secret webhook validation."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     id: "freshdesk-domain";
     label: "Freshdesk domain";
     required: true;
   }, {
     id: "freshdesk-api-key";
     label: "Freshdesk API key";
     metadata: {
        privilegeGuidance: "Freshdesk API keys are governed by the authenticated agent's Freshdesk role and ticket permissions.";
        scopeKind: "internal-capability-labels";
     };
     required: true;
     scopes: ["read", "write"];
   }, {
     id: "freshdesk-webhook-secret";
     label: "Freshdesk webhook shared secret";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "ticketing.freshdesk";
  limitations: ["Ticket forms, required fields, statuses, products, groups, SLAs, automations, and agent permissions are SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidates: readonly ["@freshworks/api-sdk", "@freshworks/freshdesk"];
        checkedAt: "2026-06-21";
        reason: "No verified official maintained Freshdesk ticketing backend SDK was found.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["tickets.create", "tickets.read", "tickets.update", "tickets.search", "reply.create", "note.create", "contacts.read", "contacts.search", "agents.read", "groups.read", "agents.me", "automation_webhook.parse"];
        source: "Freshdesk API v2";
     };
  };
  name: "Freshdesk Ticketing";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /api/v2/tickets";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/v2/tickets/{ticket_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PUT /api/v2/tickets/{ticket_id}";
     sideEffect: true;
   }, {
     alias: "ticket.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/v2/search/tickets";
   }, {
     alias: "ticket.comment.create";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticketComment";
     providerOperation: "POST /api/v2/tickets/{ticket_id}/reply";
     sideEffect: true;
   }, {
     alias: "ticket.internalNote.create";
     capability: "draft";
     exposesSensitiveData: true;
     providerObject: "internalNote";
     providerOperation: "POST /api/v2/tickets/{ticket_id}/notes";
     sideEffect: true;
   }, {
     alias: "customer.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "customer";
     providerOperation: "GET /api/v2/contacts/{contact_id}";
   }, {
     alias: "customer.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "customer";
     providerOperation: "GET /api/v2/search/contacts";
   }, {
     alias: "freshdesk.agent.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "freshdeskAgent";
     providerOperation: "GET /api/v2/agents/{agent_id}";
   }, {
     alias: "freshdesk.group.read";
     capability: "read-provider-object";
     extension: true;
     providerObject: "freshdeskGroup";
     providerOperation: "GET /api/v2/groups/{group_id}";
   }, {
     alias: "freshdesk.readiness";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "freshdeskAgent";
     providerOperation: "GET /api/v2/agents/me";
   }, {
     alias: "freshdesk.webhook.parse";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "freshdeskWebhookEvent";
     providerOperation: "SDK-user configured automation webhook";
  }];
  packageName: "@cognidesk/integration-ticketing-freshdesk";
  privacyNotes: ["Freshdesk tickets, conversations, notes, contacts, assignments, tags, custom fields, and automation webhook payloads can contain customer data."];
  provider: "freshdesk";
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
| `capabilities` | \[\{ `capability`: `"receive"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"freshdeskWebhookEvent"`; `label`: `"Freshdesk Webhook Event"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"freshdeskTicket"`; `label`: `"Freshdesk Ticket"`; \}, \{ `kind`: `"freshdeskContact"`; `label`: `"Freshdesk Contact"`; \}, \{ `kind`: `"freshdeskConversation"`; `label`: `"Freshdesk Ticket Conversation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"freshdeskTicket"`; `label`: `"Freshdesk Ticket"`; \}, \{ `kind`: `"freshdeskContact"`; `label`: `"Freshdesk Contact"`; \}, \{ `kind`: `"freshdeskAgent"`; `label`: `"Freshdesk Agent"`; \}, \{ `kind`: `"freshdeskGroup"`; `label`: `"Freshdesk Group"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"freshdeskTicket"`; `label`: `"Freshdesk Ticket"`; \}, \{ `kind`: `"freshdeskContact"`; `label`: `"Freshdesk Contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"freshdeskTicket"`; `label`: `"Freshdesk Ticket"`; \}, \{ `kind`: `"freshdeskContact"`; `label`: `"Freshdesk Contact"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"freshdeskTicket"`; `label`: `"Freshdesk Ticket"`; \}, \{ `kind`: `"freshdeskConversation"`; `label`: `"Freshdesk Ticket Conversation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Freshdesk API v2 reference"`; `url`: `"https://developers.freshdesk.com/api/"`; \}, \{ `label`: `"Freshworks API SDK announcement"`; `url`: `"https://community.freshworks.dev/t/freshworks-api-sdk-for-node-js/5232"`; \}\]; `notes`: \[`"SDK decision: Freshworks has beta or very early JavaScript packages, but no verified official maintained Freshdesk ticketing backend client suitable for this adapter."`, `"Coverage is limited to Freshdesk v2 tickets, contacts, conversations, replies, notes, handoff updates, agents, groups, current-agent readiness, and SDK-user shared-secret webhook validation."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Freshdesk API v2 reference"`; `url`: `"https://developers.freshdesk.com/api/"`; \}, \{ `label`: `"Freshworks API SDK announcement"`; `url`: `"https://community.freshworks.dev/t/freshworks-api-sdk-for-node-js/5232"`; \}\] |
| `coverage.notes` | \[`"SDK decision: Freshworks has beta or very early JavaScript packages, but no verified official maintained Freshdesk ticketing backend client suitable for this adapter."`, `"Coverage is limited to Freshdesk v2 tickets, contacts, conversations, replies, notes, handoff updates, agents, groups, current-agent readiness, and SDK-user shared-secret webhook validation."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | \[\{ `id`: `"freshdesk-domain"`; `label`: `"Freshdesk domain"`; `required`: `true`; \}, \{ `id`: `"freshdesk-api-key"`; `label`: `"Freshdesk API key"`; `metadata`: \{ `privilegeGuidance`: `"Freshdesk API keys are governed by the authenticated agent's Freshdesk role and ticket permissions."`; `scopeKind`: `"internal-capability-labels"`; \}; `required`: `true`; `scopes`: \[`"read"`, `"write"`\]; \}, \{ `id`: `"freshdesk-webhook-secret"`; `label`: `"Freshdesk webhook shared secret"`; `required`: `false`; \}\] |
| `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"ticketing.freshdesk"` |
| `limitations` | \[`"Ticket forms, required fields, statuses, products, groups, SLAs, automations, and agent permissions are SDK-user configuration."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementationStrategy`: `"direct-http-support-slice"`; `issue`: `35`; `sdkDecision`: \{ `candidates`: readonly \[`"@freshworks/api-sdk"`, `"@freshworks/freshdesk"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"No verified official maintained Freshdesk ticketing backend SDK was found."`; `verdict`: `"not-adopted"`; \}; `supportSlice`: \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.search"`, `"reply.create"`, `"note.create"`, `"contacts.read"`, `"contacts.search"`, `"agents.read"`, `"groups.read"`, `"agents.me"`, `"automation_webhook.parse"`\]; `source`: `"Freshdesk API v2"`; \}; \} |
| `metadata.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.issue` | `35` |
| `metadata.sdkDecision` | \{ `candidates`: readonly \[`"@freshworks/api-sdk"`, `"@freshworks/freshdesk"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"No verified official maintained Freshdesk ticketing backend SDK was found."`; `verdict`: `"not-adopted"`; \} |
| `metadata.sdkDecision.candidates` | readonly \[`"@freshworks/api-sdk"`, `"@freshworks/freshdesk"`\] |
| `metadata.sdkDecision.checkedAt` | `"2026-06-21"` |
| `metadata.sdkDecision.reason` | `"No verified official maintained Freshdesk ticketing backend SDK was found."` |
| `metadata.sdkDecision.verdict` | `"not-adopted"` |
| `metadata.supportSlice` | \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.search"`, `"reply.create"`, `"note.create"`, `"contacts.read"`, `"contacts.search"`, `"agents.read"`, `"groups.read"`, `"agents.me"`, `"automation_webhook.parse"`\]; `source`: `"Freshdesk API v2"`; \} |
| `metadata.supportSlice.allowlistedOperations` | readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.search"`, `"reply.create"`, `"note.create"`, `"contacts.read"`, `"contacts.search"`, `"agents.read"`, `"groups.read"`, `"agents.me"`, `"automation_webhook.parse"`\] |
| `metadata.supportSlice.source` | `"Freshdesk API v2"` |
| `name` | `"Freshdesk Ticketing"` |
| `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /api/v2/tickets"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/v2/tickets/{ticket_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PUT /api/v2/tickets/{ticket_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/v2/search/tickets"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /api/v2/tickets/{ticket_id}/reply"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.internalNote.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `providerObject`: `"internalNote"`; `providerOperation`: `"POST /api/v2/tickets/{ticket_id}/notes"`; `sideEffect`: `true`; \}, \{ `alias`: `"customer.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"customer"`; `providerOperation`: `"GET /api/v2/contacts/{contact_id}"`; \}, \{ `alias`: `"customer.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"customer"`; `providerOperation`: `"GET /api/v2/search/contacts"`; \}, \{ `alias`: `"freshdesk.agent.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"freshdeskAgent"`; `providerOperation`: `"GET /api/v2/agents/{agent_id}"`; \}, \{ `alias`: `"freshdesk.group.read"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"freshdeskGroup"`; `providerOperation`: `"GET /api/v2/groups/{group_id}"`; \}, \{ `alias`: `"freshdesk.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"freshdeskAgent"`; `providerOperation`: `"GET /api/v2/agents/me"`; \}, \{ `alias`: `"freshdesk.webhook.parse"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"freshdeskWebhookEvent"`; `providerOperation`: `"SDK-user configured automation webhook"`; \}\] |
| `packageName` | `"@cognidesk/integration-ticketing-freshdesk"` |
| `privacyNotes` | \[`"Freshdesk tickets, conversations, notes, contacts, assignments, tags, custom fields, and automation webhook payloads can contain customer data."`\] |
| `provider` | `"freshdesk"` |
| `trustLevel` | `"official"` |

***

### freshdeskTicketingProviderManifestInput

```ts
const freshdeskTicketingProviderManifestInput: {
  capabilities: [{
     capability: "receive";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskWebhookEvent";
        label: "Freshdesk Webhook Event";
     }];
     requiresCredential: true;
   }, {
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskTicket";
        label: "Freshdesk Ticket";
      }, {
        kind: "freshdeskContact";
        label: "Freshdesk Contact";
      }, {
        kind: "freshdeskConversation";
        label: "Freshdesk Ticket Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskTicket";
        label: "Freshdesk Ticket";
      }, {
        kind: "freshdeskContact";
        label: "Freshdesk Contact";
      }, {
        kind: "freshdeskAgent";
        label: "Freshdesk Agent";
      }, {
        kind: "freshdeskGroup";
        label: "Freshdesk Group";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskTicket";
        label: "Freshdesk Ticket";
      }, {
        kind: "freshdeskContact";
        label: "Freshdesk Contact";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskTicket";
        label: "Freshdesk Ticket";
      }, {
        kind: "freshdeskContact";
        label: "Freshdesk Contact";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "freshdeskTicket";
        label: "Freshdesk Ticket";
      }, {
        kind: "freshdeskConversation";
        label: "Freshdesk Ticket Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Freshdesk API v2 reference";
        url: "https://developers.freshdesk.com/api/";
      }, {
        label: "Freshworks API SDK announcement";
        url: "https://community.freshworks.dev/t/freshworks-api-sdk-for-node-js/5232";
     }];
     notes: ["SDK decision: Freshworks has beta or very early JavaScript packages, but no verified official maintained Freshdesk ticketing backend client suitable for this adapter.", "Coverage is limited to Freshdesk v2 tickets, contacts, conversations, replies, notes, handoff updates, agents, groups, current-agent readiness, and SDK-user shared-secret webhook validation."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     id: "freshdesk-domain";
     label: "Freshdesk domain";
     required: true;
   }, {
     id: "freshdesk-api-key";
     label: "Freshdesk API key";
     metadata: {
        privilegeGuidance: "Freshdesk API keys are governed by the authenticated agent's Freshdesk role and ticket permissions.";
        scopeKind: "internal-capability-labels";
     };
     required: true;
     scopes: ["read", "write"];
   }, {
     id: "freshdesk-webhook-secret";
     label: "Freshdesk webhook shared secret";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "ticketing.freshdesk";
  limitations: ["Ticket forms, required fields, statuses, products, groups, SLAs, automations, and agent permissions are SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidates: readonly ["@freshworks/api-sdk", "@freshworks/freshdesk"];
        checkedAt: "2026-06-21";
        reason: "No verified official maintained Freshdesk ticketing backend SDK was found.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["tickets.create", "tickets.read", "tickets.update", "tickets.search", "reply.create", "note.create", "contacts.read", "contacts.search", "agents.read", "groups.read", "agents.me", "automation_webhook.parse"];
        source: "Freshdesk API v2";
     };
  };
  name: "Freshdesk Ticketing";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /api/v2/tickets";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/v2/tickets/{ticket_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PUT /api/v2/tickets/{ticket_id}";
     sideEffect: true;
   }, {
     alias: "ticket.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/v2/search/tickets";
   }, {
     alias: "ticket.comment.create";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticketComment";
     providerOperation: "POST /api/v2/tickets/{ticket_id}/reply";
     sideEffect: true;
   }, {
     alias: "ticket.internalNote.create";
     capability: "draft";
     exposesSensitiveData: true;
     providerObject: "internalNote";
     providerOperation: "POST /api/v2/tickets/{ticket_id}/notes";
     sideEffect: true;
   }, {
     alias: "customer.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "customer";
     providerOperation: "GET /api/v2/contacts/{contact_id}";
   }, {
     alias: "customer.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "customer";
     providerOperation: "GET /api/v2/search/contacts";
   }, {
     alias: "freshdesk.agent.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "freshdeskAgent";
     providerOperation: "GET /api/v2/agents/{agent_id}";
   }, {
     alias: "freshdesk.group.read";
     capability: "read-provider-object";
     extension: true;
     providerObject: "freshdeskGroup";
     providerOperation: "GET /api/v2/groups/{group_id}";
   }, {
     alias: "freshdesk.readiness";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "freshdeskAgent";
     providerOperation: "GET /api/v2/agents/me";
   }, {
     alias: "freshdesk.webhook.parse";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "freshdeskWebhookEvent";
     providerOperation: "SDK-user configured automation webhook";
  }];
  packageName: "@cognidesk/integration-ticketing-freshdesk";
  privacyNotes: ["Freshdesk tickets, conversations, notes, contacts, assignments, tags, custom fields, and automation webhook payloads can contain customer data."];
  provider: "freshdesk";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `capability`: `"receive"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"freshdeskWebhookEvent"`; `label`: `"Freshdesk Webhook Event"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"freshdeskTicket"`; `label`: `"Freshdesk Ticket"`; \}, \{ `kind`: `"freshdeskContact"`; `label`: `"Freshdesk Contact"`; \}, \{ `kind`: `"freshdeskConversation"`; `label`: `"Freshdesk Ticket Conversation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"freshdeskTicket"`; `label`: `"Freshdesk Ticket"`; \}, \{ `kind`: `"freshdeskContact"`; `label`: `"Freshdesk Contact"`; \}, \{ `kind`: `"freshdeskAgent"`; `label`: `"Freshdesk Agent"`; \}, \{ `kind`: `"freshdeskGroup"`; `label`: `"Freshdesk Group"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"freshdeskTicket"`; `label`: `"Freshdesk Ticket"`; \}, \{ `kind`: `"freshdeskContact"`; `label`: `"Freshdesk Contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"freshdeskTicket"`; `label`: `"Freshdesk Ticket"`; \}, \{ `kind`: `"freshdeskContact"`; `label`: `"Freshdesk Contact"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"freshdeskTicket"`; `label`: `"Freshdesk Ticket"`; \}, \{ `kind`: `"freshdeskConversation"`; `label`: `"Freshdesk Ticket Conversation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"ticketing"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Freshdesk API v2 reference"`; `url`: `"https://developers.freshdesk.com/api/"`; \}, \{ `label`: `"Freshworks API SDK announcement"`; `url`: `"https://community.freshworks.dev/t/freshworks-api-sdk-for-node-js/5232"`; \}\]; `notes`: \[`"SDK decision: Freshworks has beta or very early JavaScript packages, but no verified official maintained Freshdesk ticketing backend client suitable for this adapter."`, `"Coverage is limited to Freshdesk v2 tickets, contacts, conversations, replies, notes, handoff updates, agents, groups, current-agent readiness, and SDK-user shared-secret webhook validation."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Freshdesk API v2 reference"`; `url`: `"https://developers.freshdesk.com/api/"`; \}, \{ `label`: `"Freshworks API SDK announcement"`; `url`: `"https://community.freshworks.dev/t/freshworks-api-sdk-for-node-js/5232"`; \}\] |
| `coverage.notes` | \[`"SDK decision: Freshworks has beta or very early JavaScript packages, but no verified official maintained Freshdesk ticketing backend client suitable for this adapter."`, `"Coverage is limited to Freshdesk v2 tickets, contacts, conversations, replies, notes, handoff updates, agents, groups, current-agent readiness, and SDK-user shared-secret webhook validation."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `id`: `"freshdesk-domain"`; `label`: `"Freshdesk domain"`; `required`: `true`; \}, \{ `id`: `"freshdesk-api-key"`; `label`: `"Freshdesk API key"`; `metadata`: \{ `privilegeGuidance`: `"Freshdesk API keys are governed by the authenticated agent's Freshdesk role and ticket permissions."`; `scopeKind`: `"internal-capability-labels"`; \}; `required`: `true`; `scopes`: \[`"read"`, `"write"`\]; \}, \{ `id`: `"freshdesk-webhook-secret"`; `label`: `"Freshdesk webhook shared secret"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"ticketing.freshdesk"` |
| <a id="property-limitations"></a> `limitations` | \[`"Ticket forms, required fields, statuses, products, groups, SLAs, automations, and agent permissions are SDK-user configuration."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementationStrategy`: `"direct-http-support-slice"`; `issue`: `35`; `sdkDecision`: \{ `candidates`: readonly \[`"@freshworks/api-sdk"`, `"@freshworks/freshdesk"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"No verified official maintained Freshdesk ticketing backend SDK was found."`; `verdict`: `"not-adopted"`; \}; `supportSlice`: \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.search"`, `"reply.create"`, `"note.create"`, `"contacts.read"`, `"contacts.search"`, `"agents.read"`, `"groups.read"`, `"agents.me"`, `"automation_webhook.parse"`\]; `source`: `"Freshdesk API v2"`; \}; \} |
| `metadata.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.issue` | `35` |
| `metadata.sdkDecision` | \{ `candidates`: readonly \[`"@freshworks/api-sdk"`, `"@freshworks/freshdesk"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"No verified official maintained Freshdesk ticketing backend SDK was found."`; `verdict`: `"not-adopted"`; \} |
| `metadata.sdkDecision.candidates` | readonly \[`"@freshworks/api-sdk"`, `"@freshworks/freshdesk"`\] |
| `metadata.sdkDecision.checkedAt` | `"2026-06-21"` |
| `metadata.sdkDecision.reason` | `"No verified official maintained Freshdesk ticketing backend SDK was found."` |
| `metadata.sdkDecision.verdict` | `"not-adopted"` |
| `metadata.supportSlice` | \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.search"`, `"reply.create"`, `"note.create"`, `"contacts.read"`, `"contacts.search"`, `"agents.read"`, `"groups.read"`, `"agents.me"`, `"automation_webhook.parse"`\]; `source`: `"Freshdesk API v2"`; \} |
| `metadata.supportSlice.allowlistedOperations` | readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.search"`, `"reply.create"`, `"note.create"`, `"contacts.read"`, `"contacts.search"`, `"agents.read"`, `"groups.read"`, `"agents.me"`, `"automation_webhook.parse"`\] |
| `metadata.supportSlice.source` | `"Freshdesk API v2"` |
| <a id="property-name"></a> `name` | `"Freshdesk Ticketing"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /api/v2/tickets"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/v2/tickets/{ticket_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PUT /api/v2/tickets/{ticket_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/v2/search/tickets"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /api/v2/tickets/{ticket_id}/reply"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.internalNote.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `providerObject`: `"internalNote"`; `providerOperation`: `"POST /api/v2/tickets/{ticket_id}/notes"`; `sideEffect`: `true`; \}, \{ `alias`: `"customer.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"customer"`; `providerOperation`: `"GET /api/v2/contacts/{contact_id}"`; \}, \{ `alias`: `"customer.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"customer"`; `providerOperation`: `"GET /api/v2/search/contacts"`; \}, \{ `alias`: `"freshdesk.agent.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"freshdeskAgent"`; `providerOperation`: `"GET /api/v2/agents/{agent_id}"`; \}, \{ `alias`: `"freshdesk.group.read"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"freshdeskGroup"`; `providerOperation`: `"GET /api/v2/groups/{group_id}"`; \}, \{ `alias`: `"freshdesk.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"freshdeskAgent"`; `providerOperation`: `"GET /api/v2/agents/me"`; \}, \{ `alias`: `"freshdesk.webhook.parse"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"freshdeskWebhookEvent"`; `providerOperation`: `"SDK-user configured automation webhook"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-ticketing-freshdesk"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Freshdesk tickets, conversations, notes, contacts, assignments, tags, custom fields, and automation webhook payloads can contain customer data."`\] |
| <a id="property-provider"></a> `provider` | `"freshdesk"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
