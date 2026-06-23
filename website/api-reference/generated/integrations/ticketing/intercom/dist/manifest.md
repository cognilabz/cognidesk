# integrations/ticketing/intercom/dist/manifest

## Variables

### intercomTicketingProviderManifest

```ts
const intercomTicketingProviderManifest: {
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
     | "bidirectional"
     | "inbound-only"
    | "outbound-only")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "official" | "community" | "unknown" | "partner";
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
  trustLevel: "official" | "community" | "verified" | "experimental";
} & {
  capabilities: readonly [{
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     label: "Read Intercom tickets";
     providerObjects: readonly [{
        kind: "ticket";
        label: "Ticket";
      }, {
        kind: "conversationLink";
        label: "Conversation";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "send";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Create Intercom replies";
     providerObjects: readonly [{
        kind: "ticketComment";
        label: "Ticket Comment";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Create Intercom tickets";
     providerObjects: readonly [{
        kind: "ticket";
        label: "Ticket";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Update Intercom tickets";
     providerObjects: readonly [{
        kind: "ticket";
        label: "Ticket";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     exposesSensitiveData: true;
     label: "Search Intercom tickets";
     providerObjects: readonly [{
        kind: "ticket";
        label: "Ticket";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "draft";
     exposesSensitiveData: true;
     label: "Create Intercom internal notes";
     providerObjects: readonly [{
        kind: "internalNote";
        label: "Internal Note";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Intercom Node client";
        url: "https://github.com/intercom/intercom-node";
      }, {
        label: "Intercom Tickets API";
        url: "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/tickets";
      }, {
        label: "Intercom Conversations API";
        url: "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/conversations";
     }];
     notes: readonly ["Coverage is scoped to normalized ticket and conversation operations implemented by typed handlers.", "Implementation uses the maintained official intercom-client package pinned to 7.0.3; broader Intercom APIs remain available through rawClient.", "Generated Cognidesk full-provider API clones should be removed only after this package's replacement tests pass."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side Intercom access token or OAuth bearer token.";
     id: "intercom-access-token";
     label: "Intercom access token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["read_conversations", "write_conversations", "read_tickets", "write_tickets"];
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "ticketing.intercom";
  limitations: readonly ["Ticket types, attributes, states, assignment targets, teammate availability, scopes, and public/private reply policy are SDK-user configuration.", "This package does not claim full Intercom REST API coverage; use rawClient for advanced official SDK methods."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        broaderIntercomApi: "provider-supported-raw-client";
        conversations: "typed-reply-read-extension";
        internalNotes: "typed-conversation-note";
        tickets: "typed-create-read-update-search";
     };
     implementation: {
        manifestImport: "no-sdk-client-initialization";
        rawClientEscapeHatch: "IntercomTicketingClient.rawClient";
        sdkPackage: "intercom-client";
        sdkVersionRange: "7.0.3";
        strategy: "official-sdk";
        supplyChainNote: "7.0.3 is pinned; do not allow compromised 7.0.4.";
     };
  };
  name: "Intercom";
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
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
  packageName: "@cognidesk/integration-ticketing-intercom";
  privacyNotes: readonly ["Intercom conversations, tickets, contacts, admins, teams, custom attributes, and assignment metadata can contain customer data and internal support context."];
  provider: "intercom";
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
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"bidirectional"` \| `"inbound-only"` \| `"outbound-only"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"official"` \| `"community"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read Intercom tickets"`; `providerObjects`: readonly \[\{ `kind`: `"ticket"`; `label`: `"Ticket"`; \}, \{ `kind`: `"conversationLink"`; `label`: `"Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"send"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create Intercom replies"`; `providerObjects`: readonly \[\{ `kind`: `"ticketComment"`; `label`: `"Ticket Comment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create Intercom tickets"`; `providerObjects`: readonly \[\{ `kind`: `"ticket"`; `label`: `"Ticket"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Update Intercom tickets"`; `providerObjects`: readonly \[\{ `kind`: `"ticket"`; `label`: `"Ticket"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Search Intercom tickets"`; `providerObjects`: readonly \[\{ `kind`: `"ticket"`; `label`: `"Ticket"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `label`: `"Create Intercom internal notes"`; `providerObjects`: readonly \[\{ `kind`: `"internalNote"`; `label`: `"Internal Note"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Intercom Node client"`; `url`: `"https://github.com/intercom/intercom-node"`; \}, \{ `label`: `"Intercom Tickets API"`; `url`: `"https://developers.intercom.com/docs/references/rest-api/api.intercom.io/tickets"`; \}, \{ `label`: `"Intercom Conversations API"`; `url`: `"https://developers.intercom.com/docs/references/rest-api/api.intercom.io/conversations"`; \}\]; `notes`: readonly \[`"Coverage is scoped to normalized ticket and conversation operations implemented by typed handlers."`, `"Implementation uses the maintained official intercom-client package pinned to 7.0.3; broader Intercom APIs remain available through rawClient."`, `"Generated Cognidesk full-provider API clones should be removed only after this package's replacement tests pass."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Intercom Node client"`; `url`: `"https://github.com/intercom/intercom-node"`; \}, \{ `label`: `"Intercom Tickets API"`; `url`: `"https://developers.intercom.com/docs/references/rest-api/api.intercom.io/tickets"`; \}, \{ `label`: `"Intercom Conversations API"`; `url`: `"https://developers.intercom.com/docs/references/rest-api/api.intercom.io/conversations"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is scoped to normalized ticket and conversation operations implemented by typed handlers."`, `"Implementation uses the maintained official intercom-client package pinned to 7.0.3; broader Intercom APIs remain available through rawClient."`, `"Generated Cognidesk full-provider API clones should be removed only after this package's replacement tests pass."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Server-side Intercom access token or OAuth bearer token."`; `id`: `"intercom-access-token"`; `label`: `"Intercom access token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: readonly \[`"read_conversations"`, `"write_conversations"`, `"read_tickets"`, `"write_tickets"`\]; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"ticketing.intercom"` |
| `limitations` | readonly \[`"Ticket types, attributes, states, assignment targets, teammate availability, scopes, and public/private reply policy are SDK-user configuration."`, `"This package does not claim full Intercom REST API coverage; use rawClient for advanced official SDK methods."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `broaderIntercomApi`: `"provider-supported-raw-client"`; `conversations`: `"typed-reply-read-extension"`; `internalNotes`: `"typed-conversation-note"`; `tickets`: `"typed-create-read-update-search"`; \}; `implementation`: \{ `manifestImport`: `"no-sdk-client-initialization"`; `rawClientEscapeHatch`: `"IntercomTicketingClient.rawClient"`; `sdkPackage`: `"intercom-client"`; `sdkVersionRange`: `"7.0.3"`; `strategy`: `"official-sdk"`; `supplyChainNote`: `"7.0.3 is pinned; do not allow compromised 7.0.4."`; \}; \} |
| `metadata.channelCoverage` | \{ `broaderIntercomApi`: `"provider-supported-raw-client"`; `conversations`: `"typed-reply-read-extension"`; `internalNotes`: `"typed-conversation-note"`; `tickets`: `"typed-create-read-update-search"`; \} |
| `metadata.channelCoverage.broaderIntercomApi` | `"provider-supported-raw-client"` |
| `metadata.channelCoverage.conversations` | `"typed-reply-read-extension"` |
| `metadata.channelCoverage.internalNotes` | `"typed-conversation-note"` |
| `metadata.channelCoverage.tickets` | `"typed-create-read-update-search"` |
| `metadata.implementation` | \{ `manifestImport`: `"no-sdk-client-initialization"`; `rawClientEscapeHatch`: `"IntercomTicketingClient.rawClient"`; `sdkPackage`: `"intercom-client"`; `sdkVersionRange`: `"7.0.3"`; `strategy`: `"official-sdk"`; `supplyChainNote`: `"7.0.3 is pinned; do not allow compromised 7.0.4."`; \} |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.rawClientEscapeHatch` | `"IntercomTicketingClient.rawClient"` |
| `metadata.implementation.sdkPackage` | `"intercom-client"` |
| `metadata.implementation.sdkVersionRange` | `"7.0.3"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.implementation.supplyChainNote` | `"7.0.3 is pinned; do not allow compromised 7.0.4."` |
| `name` | `"Intercom"` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `"@cognidesk/integration-ticketing-intercom"` |
| `privacyNotes` | readonly \[`"Intercom conversations, tickets, contacts, admins, teams, custom attributes, and assignment metadata can contain customer data and internal support context."`\] |
| `provider` | `"intercom"` |
| `trustLevel` | `"official"` |
