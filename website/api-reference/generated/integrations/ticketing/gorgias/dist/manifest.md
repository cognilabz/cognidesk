# integrations/ticketing/gorgias/dist/manifest

## Variables

### gorgiasTicketingProviderManifest

```ts
const gorgiasTicketingProviderManifest: {
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
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
      }, {
        kind: "gorgiasMessage";
        label: "Gorgias Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
      }, {
        kind: "gorgiasMessage";
        label: "Gorgias Message";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
      }, {
        kind: "gorgiasMessage";
        label: "Gorgias Message";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
      }, {
        kind: "gorgiasMessage";
        label: "Gorgias Message";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Gorgias developer docs";
        url: "https://developers.gorgias.com/";
      }, {
        label: "Gorgias Create ticket";
        url: "https://developers.gorgias.com/reference/create-ticket";
      }, {
        label: "Gorgias Create ticket message";
        url: "https://developers.gorgias.com/reference/create-ticket-message";
      }, {
        label: "Gorgias OAuth2 Scopes";
        url: "https://developers.gorgias.com/docs/oauth2-scopes";
     }];
     notes: ["SDK decision: no official maintained backend JavaScript REST client was verified for Gorgias.", "Coverage is limited to Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows.", "This package intentionally does not copy the old generated full Gorgias public API clone."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     id: "gorgias-api-base";
     label: "Gorgias API base URL";
     required: true;
   }, {
     id: "gorgias-api-access";
     label: "Gorgias API access";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["account:read", "tickets:read", "tickets:write"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.gorgias";
  limitations: ["Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidates: readonly ["gorgias-client", "@friggframework/api-module-gorgias", "Gorgias REST docs"];
        checkedAt: "2026-06-21";
        reason: "No official maintained backend JavaScript REST client was verified.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["tickets.create", "tickets.read", "tickets.update", "tickets.list", "ticket_messages.create", "messages.list", "account.read"];
        source: "Gorgias public REST API";
     };
  };
  name: "Gorgias";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /api/tickets";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/tickets/{ticket_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PUT /api/tickets/{ticket_id}";
     sideEffect: true;
   }, {
     alias: "ticket.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/tickets";
   }, {
     alias: "ticket.comment.create";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticketComment";
     providerOperation: "POST /api/tickets/{ticket_id}/messages";
     sideEffect: true;
   }, {
     alias: "gorgias.message.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "gorgiasMessage";
     providerOperation: "GET /api/messages";
   }, {
     alias: "gorgias.readiness";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "gorgiasAccount";
     providerOperation: "GET /api/account";
  }];
  packageName: "@cognidesk/integration-ticketing-gorgias";
  privacyNotes: ["Gorgias tickets can include ecommerce context, customer identifiers, messages, notes, tags, and assignment metadata."];
  provider: "gorgias";
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
| `capabilities` | \[\{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"gorgiasTicket"`; `label`: `"Gorgias Ticket"`; \}, \{ `kind`: `"gorgiasMessage"`; `label`: `"Gorgias Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"gorgiasTicket"`; `label`: `"Gorgias Ticket"`; \}, \{ `kind`: `"gorgiasMessage"`; `label`: `"Gorgias Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"gorgiasTicket"`; `label`: `"Gorgias Ticket"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"gorgiasTicket"`; `label`: `"Gorgias Ticket"`; \}, \{ `kind`: `"gorgiasMessage"`; `label`: `"Gorgias Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"gorgiasTicket"`; `label`: `"Gorgias Ticket"`; \}, \{ `kind`: `"gorgiasMessage"`; `label`: `"Gorgias Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Gorgias developer docs"`; `url`: `"https://developers.gorgias.com/"`; \}, \{ `label`: `"Gorgias Create ticket"`; `url`: `"https://developers.gorgias.com/reference/create-ticket"`; \}, \{ `label`: `"Gorgias Create ticket message"`; `url`: `"https://developers.gorgias.com/reference/create-ticket-message"`; \}, \{ `label`: `"Gorgias OAuth2 Scopes"`; `url`: `"https://developers.gorgias.com/docs/oauth2-scopes"`; \}\]; `notes`: \[`"SDK decision: no official maintained backend JavaScript REST client was verified for Gorgias."`, `"Coverage is limited to Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Gorgias public API clone."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Gorgias developer docs"`; `url`: `"https://developers.gorgias.com/"`; \}, \{ `label`: `"Gorgias Create ticket"`; `url`: `"https://developers.gorgias.com/reference/create-ticket"`; \}, \{ `label`: `"Gorgias Create ticket message"`; `url`: `"https://developers.gorgias.com/reference/create-ticket-message"`; \}, \{ `label`: `"Gorgias OAuth2 Scopes"`; `url`: `"https://developers.gorgias.com/docs/oauth2-scopes"`; \}\] |
| `coverage.notes` | \[`"SDK decision: no official maintained backend JavaScript REST client was verified for Gorgias."`, `"Coverage is limited to Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Gorgias public API clone."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | \[\{ `id`: `"gorgias-api-base"`; `label`: `"Gorgias API base URL"`; `required`: `true`; \}, \{ `id`: `"gorgias-api-access"`; `label`: `"Gorgias API access"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: \[`"account:read"`, `"tickets:read"`, `"tickets:write"`\]; \}\] |
| `directions` | \[`"bidirectional"`\] |
| `id` | `"ticketing.gorgias"` |
| `limitations` | \[`"Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementationStrategy`: `"direct-http-support-slice"`; `issue`: `35`; `sdkDecision`: \{ `candidates`: readonly \[`"gorgias-client"`, `"@friggframework/api-module-gorgias"`, `"Gorgias REST docs"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"No official maintained backend JavaScript REST client was verified."`; `verdict`: `"not-adopted"`; \}; `supportSlice`: \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.list"`, `"ticket_messages.create"`, `"messages.list"`, `"account.read"`\]; `source`: `"Gorgias public REST API"`; \}; \} |
| `metadata.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.issue` | `35` |
| `metadata.sdkDecision` | \{ `candidates`: readonly \[`"gorgias-client"`, `"@friggframework/api-module-gorgias"`, `"Gorgias REST docs"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"No official maintained backend JavaScript REST client was verified."`; `verdict`: `"not-adopted"`; \} |
| `metadata.sdkDecision.candidates` | readonly \[`"gorgias-client"`, `"@friggframework/api-module-gorgias"`, `"Gorgias REST docs"`\] |
| `metadata.sdkDecision.checkedAt` | `"2026-06-21"` |
| `metadata.sdkDecision.reason` | `"No official maintained backend JavaScript REST client was verified."` |
| `metadata.sdkDecision.verdict` | `"not-adopted"` |
| `metadata.supportSlice` | \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.list"`, `"ticket_messages.create"`, `"messages.list"`, `"account.read"`\]; `source`: `"Gorgias public REST API"`; \} |
| `metadata.supportSlice.allowlistedOperations` | readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.list"`, `"ticket_messages.create"`, `"messages.list"`, `"account.read"`\] |
| `metadata.supportSlice.source` | `"Gorgias public REST API"` |
| `name` | `"Gorgias"` |
| `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /api/tickets"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/tickets/{ticket_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PUT /api/tickets/{ticket_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/tickets"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /api/tickets/{ticket_id}/messages"`; `sideEffect`: `true`; \}, \{ `alias`: `"gorgias.message.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"gorgiasMessage"`; `providerOperation`: `"GET /api/messages"`; \}, \{ `alias`: `"gorgias.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"gorgiasAccount"`; `providerOperation`: `"GET /api/account"`; \}\] |
| `packageName` | `"@cognidesk/integration-ticketing-gorgias"` |
| `privacyNotes` | \[`"Gorgias tickets can include ecommerce context, customer identifiers, messages, notes, tags, and assignment metadata."`\] |
| `provider` | `"gorgias"` |
| `trustLevel` | `"official"` |

***

### gorgiasTicketingProviderManifestInput

```ts
const gorgiasTicketingProviderManifestInput: {
  capabilities: [{
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
      }, {
        kind: "gorgiasMessage";
        label: "Gorgias Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
      }, {
        kind: "gorgiasMessage";
        label: "Gorgias Message";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
      }, {
        kind: "gorgiasMessage";
        label: "Gorgias Message";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "gorgiasTicket";
        label: "Gorgias Ticket";
      }, {
        kind: "gorgiasMessage";
        label: "Gorgias Message";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Gorgias developer docs";
        url: "https://developers.gorgias.com/";
      }, {
        label: "Gorgias Create ticket";
        url: "https://developers.gorgias.com/reference/create-ticket";
      }, {
        label: "Gorgias Create ticket message";
        url: "https://developers.gorgias.com/reference/create-ticket-message";
      }, {
        label: "Gorgias OAuth2 Scopes";
        url: "https://developers.gorgias.com/docs/oauth2-scopes";
     }];
     notes: ["SDK decision: no official maintained backend JavaScript REST client was verified for Gorgias.", "Coverage is limited to Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows.", "This package intentionally does not copy the old generated full Gorgias public API clone."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     id: "gorgias-api-base";
     label: "Gorgias API base URL";
     required: true;
   }, {
     id: "gorgias-api-access";
     label: "Gorgias API access";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["account:read", "tickets:read", "tickets:write"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.gorgias";
  limitations: ["Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidates: readonly ["gorgias-client", "@friggframework/api-module-gorgias", "Gorgias REST docs"];
        checkedAt: "2026-06-21";
        reason: "No official maintained backend JavaScript REST client was verified.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["tickets.create", "tickets.read", "tickets.update", "tickets.list", "ticket_messages.create", "messages.list", "account.read"];
        source: "Gorgias public REST API";
     };
  };
  name: "Gorgias";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /api/tickets";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/tickets/{ticket_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PUT /api/tickets/{ticket_id}";
     sideEffect: true;
   }, {
     alias: "ticket.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /api/tickets";
   }, {
     alias: "ticket.comment.create";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticketComment";
     providerOperation: "POST /api/tickets/{ticket_id}/messages";
     sideEffect: true;
   }, {
     alias: "gorgias.message.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "gorgiasMessage";
     providerOperation: "GET /api/messages";
   }, {
     alias: "gorgias.readiness";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "gorgiasAccount";
     providerOperation: "GET /api/account";
  }];
  packageName: "@cognidesk/integration-ticketing-gorgias";
  privacyNotes: ["Gorgias tickets can include ecommerce context, customer identifiers, messages, notes, tags, and assignment metadata."];
  provider: "gorgias";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"gorgiasTicket"`; `label`: `"Gorgias Ticket"`; \}, \{ `kind`: `"gorgiasMessage"`; `label`: `"Gorgias Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"gorgiasTicket"`; `label`: `"Gorgias Ticket"`; \}, \{ `kind`: `"gorgiasMessage"`; `label`: `"Gorgias Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"gorgiasTicket"`; `label`: `"Gorgias Ticket"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"gorgiasTicket"`; `label`: `"Gorgias Ticket"`; \}, \{ `kind`: `"gorgiasMessage"`; `label`: `"Gorgias Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"gorgiasTicket"`; `label`: `"Gorgias Ticket"`; \}, \{ `kind`: `"gorgiasMessage"`; `label`: `"Gorgias Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"ticketing"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Gorgias developer docs"`; `url`: `"https://developers.gorgias.com/"`; \}, \{ `label`: `"Gorgias Create ticket"`; `url`: `"https://developers.gorgias.com/reference/create-ticket"`; \}, \{ `label`: `"Gorgias Create ticket message"`; `url`: `"https://developers.gorgias.com/reference/create-ticket-message"`; \}, \{ `label`: `"Gorgias OAuth2 Scopes"`; `url`: `"https://developers.gorgias.com/docs/oauth2-scopes"`; \}\]; `notes`: \[`"SDK decision: no official maintained backend JavaScript REST client was verified for Gorgias."`, `"Coverage is limited to Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Gorgias public API clone."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Gorgias developer docs"`; `url`: `"https://developers.gorgias.com/"`; \}, \{ `label`: `"Gorgias Create ticket"`; `url`: `"https://developers.gorgias.com/reference/create-ticket"`; \}, \{ `label`: `"Gorgias Create ticket message"`; `url`: `"https://developers.gorgias.com/reference/create-ticket-message"`; \}, \{ `label`: `"Gorgias OAuth2 Scopes"`; `url`: `"https://developers.gorgias.com/docs/oauth2-scopes"`; \}\] |
| `coverage.notes` | \[`"SDK decision: no official maintained backend JavaScript REST client was verified for Gorgias."`, `"Coverage is limited to Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Gorgias public API clone."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `id`: `"gorgias-api-base"`; `label`: `"Gorgias API base URL"`; `required`: `true`; \}, \{ `id`: `"gorgias-api-access"`; `label`: `"Gorgias API access"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: \[`"account:read"`, `"tickets:read"`, `"tickets:write"`\]; \}\] |
| <a id="property-directions"></a> `directions` | \[`"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"ticketing.gorgias"` |
| <a id="property-limitations"></a> `limitations` | \[`"Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementationStrategy`: `"direct-http-support-slice"`; `issue`: `35`; `sdkDecision`: \{ `candidates`: readonly \[`"gorgias-client"`, `"@friggframework/api-module-gorgias"`, `"Gorgias REST docs"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"No official maintained backend JavaScript REST client was verified."`; `verdict`: `"not-adopted"`; \}; `supportSlice`: \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.list"`, `"ticket_messages.create"`, `"messages.list"`, `"account.read"`\]; `source`: `"Gorgias public REST API"`; \}; \} |
| `metadata.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.issue` | `35` |
| `metadata.sdkDecision` | \{ `candidates`: readonly \[`"gorgias-client"`, `"@friggframework/api-module-gorgias"`, `"Gorgias REST docs"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"No official maintained backend JavaScript REST client was verified."`; `verdict`: `"not-adopted"`; \} |
| `metadata.sdkDecision.candidates` | readonly \[`"gorgias-client"`, `"@friggframework/api-module-gorgias"`, `"Gorgias REST docs"`\] |
| `metadata.sdkDecision.checkedAt` | `"2026-06-21"` |
| `metadata.sdkDecision.reason` | `"No official maintained backend JavaScript REST client was verified."` |
| `metadata.sdkDecision.verdict` | `"not-adopted"` |
| `metadata.supportSlice` | \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.list"`, `"ticket_messages.create"`, `"messages.list"`, `"account.read"`\]; `source`: `"Gorgias public REST API"`; \} |
| `metadata.supportSlice.allowlistedOperations` | readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.list"`, `"ticket_messages.create"`, `"messages.list"`, `"account.read"`\] |
| `metadata.supportSlice.source` | `"Gorgias public REST API"` |
| <a id="property-name"></a> `name` | `"Gorgias"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /api/tickets"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/tickets/{ticket_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PUT /api/tickets/{ticket_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/tickets"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /api/tickets/{ticket_id}/messages"`; `sideEffect`: `true`; \}, \{ `alias`: `"gorgias.message.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"gorgiasMessage"`; `providerOperation`: `"GET /api/messages"`; \}, \{ `alias`: `"gorgias.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"gorgiasAccount"`; `providerOperation`: `"GET /api/account"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-ticketing-gorgias"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Gorgias tickets can include ecommerce context, customer identifiers, messages, notes, tags, and assignment metadata."`\] |
| <a id="property-provider"></a> `provider` | `"gorgias"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
