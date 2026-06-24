# integrations/ticketing/hubspot/dist/manifest

## Variables

### hubSpotTicketingProviderManifest

```ts
const hubSpotTicketingProviderManifest: {
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
     label: "Read HubSpot tickets";
     providerObjects: readonly [{
        kind: "ticket";
        label: "Ticket";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "send";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Create HubSpot ticket comments";
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
     label: "Create HubSpot tickets";
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
     label: "Update HubSpot tickets";
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
     label: "Search HubSpot tickets";
     providerObjects: readonly [{
        kind: "ticket";
        label: "Ticket";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "draft";
     exposesSensitiveData: true;
     label: "Create HubSpot internal notes";
     providerObjects: readonly [{
        kind: "internalNote";
        label: "Internal Note";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "link-provider-object";
     changesWorkflow: true;
     extension: true;
     label: "Create HubSpot associations";
     providerObjects: readonly [{
        kind: "conversationLink";
        label: "Conversation Link";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "HubSpot Node client";
        url: "https://github.com/HubSpot/hubspot-api-nodejs";
      }, {
        label: "HubSpot CRM Tickets API guide";
        url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/objects/tickets/guide";
      }, {
        label: "HubSpot CRM Notes API guide";
        url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/activities/notes/guide";
      }, {
        label: "HubSpot CRM search guide";
        url: "https://developers.hubspot.com/docs/api-reference/latest/crm/search-the-crm";
     }];
     notes: readonly ["Coverage is scoped to normalized ticketing support operations implemented by typed handlers.", "Implementation uses the maintained official @hubspot/api-client package; broader HubSpot APIs remain available through the rawClient escape hatch.", "Generated Cognidesk full-provider API clones should be removed only after this package's replacement tests pass."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side private app access token or OAuth bearer token for HubSpot CRM APIs.";
     id: "hubspot-private-app-token";
     label: "HubSpot private app token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["tickets", "crm.objects.contacts.read", "crm.objects.contacts.write", "crm.objects.owners.read"];
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "ticketing.hubspot";
  limitations: readonly ["Ticket pipelines, stages, owners, custom properties, association labels, scopes, and portal-specific workflow policy are SDK-user configuration.", "This package does not claim full HubSpot API coverage; use rawClient for advanced official SDK methods."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        associations: "typed-extension";
        broaderHubSpotApi: "provider-supported-raw-client";
        comments: "typed-note-create";
        internalNotes: "typed-note-create";
        tickets: "typed-create-read-update-search";
     };
     implementation: {
        manifestImport: "no-sdk-client-initialization";
        rawClientEscapeHatch: "HubSpotTicketingClient.rawClient";
        sdkPackage: "@hubspot/api-client";
        sdkVersionRange: "^13.5.0";
        strategy: "official-sdk";
     };
  };
  name: "HubSpot Service Hub";
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
  packageName: "@cognidesk/integration-ticketing-hubspot";
  privacyNotes: readonly ["HubSpot tickets, notes, contacts, companies, associations, owners, and custom properties can contain customer data and internal support context."];
  provider: "hubspot";
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read HubSpot tickets"`; `providerObjects`: readonly \[\{ `kind`: `"ticket"`; `label`: `"Ticket"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"send"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create HubSpot ticket comments"`; `providerObjects`: readonly \[\{ `kind`: `"ticketComment"`; `label`: `"Ticket Comment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create HubSpot tickets"`; `providerObjects`: readonly \[\{ `kind`: `"ticket"`; `label`: `"Ticket"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Update HubSpot tickets"`; `providerObjects`: readonly \[\{ `kind`: `"ticket"`; `label`: `"Ticket"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Search HubSpot tickets"`; `providerObjects`: readonly \[\{ `kind`: `"ticket"`; `label`: `"Ticket"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `label`: `"Create HubSpot internal notes"`; `providerObjects`: readonly \[\{ `kind`: `"internalNote"`; `label`: `"Internal Note"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"link-provider-object"`; `changesWorkflow`: `true`; `extension`: `true`; `label`: `"Create HubSpot associations"`; `providerObjects`: readonly \[\{ `kind`: `"conversationLink"`; `label`: `"Conversation Link"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"HubSpot Node client"`; `url`: `"https://github.com/HubSpot/hubspot-api-nodejs"`; \}, \{ `label`: `"HubSpot CRM Tickets API guide"`; `url`: `"https://developers.hubspot.com/docs/api-reference/legacy/crm/objects/tickets/guide"`; \}, \{ `label`: `"HubSpot CRM Notes API guide"`; `url`: `"https://developers.hubspot.com/docs/api-reference/legacy/crm/activities/notes/guide"`; \}, \{ `label`: `"HubSpot CRM search guide"`; `url`: `"https://developers.hubspot.com/docs/api-reference/latest/crm/search-the-crm"`; \}\]; `notes`: readonly \[`"Coverage is scoped to normalized ticketing support operations implemented by typed handlers."`, `"Implementation uses the maintained official @hubspot/api-client package; broader HubSpot APIs remain available through the rawClient escape hatch."`, `"Generated Cognidesk full-provider API clones should be removed only after this package's replacement tests pass."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"HubSpot Node client"`; `url`: `"https://github.com/HubSpot/hubspot-api-nodejs"`; \}, \{ `label`: `"HubSpot CRM Tickets API guide"`; `url`: `"https://developers.hubspot.com/docs/api-reference/legacy/crm/objects/tickets/guide"`; \}, \{ `label`: `"HubSpot CRM Notes API guide"`; `url`: `"https://developers.hubspot.com/docs/api-reference/legacy/crm/activities/notes/guide"`; \}, \{ `label`: `"HubSpot CRM search guide"`; `url`: `"https://developers.hubspot.com/docs/api-reference/latest/crm/search-the-crm"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is scoped to normalized ticketing support operations implemented by typed handlers."`, `"Implementation uses the maintained official @hubspot/api-client package; broader HubSpot APIs remain available through the rawClient escape hatch."`, `"Generated Cognidesk full-provider API clones should be removed only after this package's replacement tests pass."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Server-side private app access token or OAuth bearer token for HubSpot CRM APIs."`; `id`: `"hubspot-private-app-token"`; `label`: `"HubSpot private app token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: readonly \[`"tickets"`, `"crm.objects.contacts.read"`, `"crm.objects.contacts.write"`, `"crm.objects.owners.read"`\]; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"ticketing.hubspot"` |
| `limitations` | readonly \[`"Ticket pipelines, stages, owners, custom properties, association labels, scopes, and portal-specific workflow policy are SDK-user configuration."`, `"This package does not claim full HubSpot API coverage; use rawClient for advanced official SDK methods."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `associations`: `"typed-extension"`; `broaderHubSpotApi`: `"provider-supported-raw-client"`; `comments`: `"typed-note-create"`; `internalNotes`: `"typed-note-create"`; `tickets`: `"typed-create-read-update-search"`; \}; `implementation`: \{ `manifestImport`: `"no-sdk-client-initialization"`; `rawClientEscapeHatch`: `"HubSpotTicketingClient.rawClient"`; `sdkPackage`: `"@hubspot/api-client"`; `sdkVersionRange`: `"^13.5.0"`; `strategy`: `"official-sdk"`; \}; \} |
| `metadata.channelCoverage` | \{ `associations`: `"typed-extension"`; `broaderHubSpotApi`: `"provider-supported-raw-client"`; `comments`: `"typed-note-create"`; `internalNotes`: `"typed-note-create"`; `tickets`: `"typed-create-read-update-search"`; \} |
| `metadata.channelCoverage.associations` | `"typed-extension"` |
| `metadata.channelCoverage.broaderHubSpotApi` | `"provider-supported-raw-client"` |
| `metadata.channelCoverage.comments` | `"typed-note-create"` |
| `metadata.channelCoverage.internalNotes` | `"typed-note-create"` |
| `metadata.channelCoverage.tickets` | `"typed-create-read-update-search"` |
| `metadata.implementation` | \{ `manifestImport`: `"no-sdk-client-initialization"`; `rawClientEscapeHatch`: `"HubSpotTicketingClient.rawClient"`; `sdkPackage`: `"@hubspot/api-client"`; `sdkVersionRange`: `"^13.5.0"`; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.rawClientEscapeHatch` | `"HubSpotTicketingClient.rawClient"` |
| `metadata.implementation.sdkPackage` | `"@hubspot/api-client"` |
| `metadata.implementation.sdkVersionRange` | `"^13.5.0"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `name` | `"HubSpot Service Hub"` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `"@cognidesk/integration-ticketing-hubspot"` |
| `privacyNotes` | readonly \[`"HubSpot tickets, notes, contacts, companies, associations, owners, and custom properties can contain customer data and internal support context."`\] |
| `provider` | `"hubspot"` |
| `trustLevel` | `"official"` |
