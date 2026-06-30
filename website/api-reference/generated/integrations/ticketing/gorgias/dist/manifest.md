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
        label: "Gorgias REST API credentials";
        url: "https://docs.gorgias.com/en-US/rest-api-208286";
      }, {
        label: "Gorgias Create ticket";
        url: "https://developers.gorgias.com/reference/create-ticket";
      }, {
        label: "Gorgias Create ticket message";
        url: "https://developers.gorgias.com/reference/create-ticket-message";
      }, {
        label: "Gorgias OAuth2 Scopes";
        url: "https://developers.gorgias.com/docs/oauth2-scopes";
      }, {
        label: "gorgias-client package review";
        url: "https://www.npmjs.com/package/gorgias-client";
     }];
     notes: ["Runtime coverage is provided through the built-in Gorgias REST adapter when baseUrl and accessToken/apiKey are configured.", "A host-provided GorgiasTicketingProviderClient can still override the built-in REST adapter.", "Coverage is limited to delegated Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows.", "This package intentionally does not copy the old generated full Gorgias public API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "gorgias-base-url";
     label: "Gorgias REST API base URL";
     required: true;
   }, {
     id: "gorgias-api-access";
     label: "Gorgias access token or API key";
     metadata: {
        authSchemes: readonly ["bearer", "basic-email-api-key"];
     };
     required: true;
   }, {
     id: "gorgias-api-username";
     label: "Gorgias API email or username for Basic auth";
     metadata: {
        requiredWhen: "using-basic-email-api-key";
     };
     required: false;
  }];
  directions: ["bidirectional"];
  id: "ticketing.gorgias";
  limitations: ["Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration.", "The REST adapter covers JSON operations; multipart or provider-specific advanced endpoints belong in an injected GorgiasTicketingProviderClient or rawRequest."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     delegatedSupportSurface: {
        allowlistedOperations: readonly ["tickets.create", "tickets.read", "tickets.update", "tickets.list", "ticket_messages.create", "messages.list", "account.read"];
        source: "Built-in Gorgias REST adapter";
     };
     implementation: {
        defaultBaseUrl: "none-account-base-url-required";
        defaultFetchClient: "runtime-fetch-or-configured-fetch";
        defaultHttpClient: "providerJsonRequest";
        manifestImport: "no-client-initialization";
        providerClientInterface: "GorgiasTicketingProviderClient";
        providerClientOverride: true;
        strategy: "provider-rest-adapter";
     };
     implementationStrategy: "provider-rest-adapter";
     issue: 35;
     providerClient: {
        defaultClient: "built-in-rest-adapter";
        importPolicy: "runtime-override";
        injectionPolicy: "optional-override";
        interface: "GorgiasTicketingProviderClient";
     };
     providerRestAdapterException: {
        allowlistedOperations: readonly ["POST /api/tickets", "GET /api/tickets/{ticket_id}", "PUT /api/tickets/{ticket_id}", "GET /api/tickets", "POST /api/tickets/{ticket_id}/messages", "GET /api/messages", "GET /api/account"];
        authSchemes: readonly ["bearer-oauth-access-token", "basic-email-or-username-api-key"];
        baseUrlPolicy: "required-account-subdomain-url; accepts https://{subdomain}.gorgias.com or the Gorgias Base API URL ending in /api";
        defaultClient: "built-in-rest-adapter";
        providerSdkDependencyPolicy: "do-not-add-third-party-gorgias-sdk-as-default-runtime-dependency";
        rawClientEscapeHatch: "GorgiasTicketingProviderClient.rawRequest";
        reason: "No official maintained Gorgias JavaScript/TypeScript runtime SDK was verified; this package owns a narrow REST adapter until a suitable provider SDK exists.";
        strict: true;
     };
     sdkDecision: "no-official-sdk-rest-adapter";
     sdkEvaluation: {
        checkedAt: "2026-06-25";
        officialBackendJavaScriptSdk: false;
        officialDocsSurface: "Gorgias documents REST API and OAuth/API-key authentication against each account subdomain; no official maintained npm JavaScript runtime SDK was verified.";
        result: "no-official-maintained-runtime-sdk";
        reviewedPackages: readonly [{
           package: "gorgias-client";
           reason: "Typed and recent, but maintained outside Gorgias and its public client is Basic-auth/subdomain oriented; it does not expose a Bearer OAuth default path or account-readiness resource for this package's runtime contract.";
           result: "not-used-as-package-default";
           version: "2.0.4";
         }, {
           package: "@friggframework/api-module-gorgias";
           reason: "Framework module rather than a standalone official Gorgias backend SDK for this runtime package.";
           result: "not-used-as-package-default";
           version: "0.10.1";
         }, {
           package: "@frontend-sdk/gorgias";
           reason: "Frontend/Shogun integration package, not a maintained Gorgias ticketing REST SDK.";
           result: "not-runtime-ticketing-sdk";
           version: "0.26.0";
         }, {
           package: "@pipedream/gorgias";
           reason: "Pipedream component package rather than a typed raw client suitable as this package's default runtime SDK.";
           result: "not-runtime-ticketing-sdk";
           version: "0.6.0";
        }];
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
| `coverage` | \{ `evidence`: \[\{ `label`: `"Gorgias developer docs"`; `url`: `"https://developers.gorgias.com/"`; \}, \{ `label`: `"Gorgias REST API credentials"`; `url`: `"https://docs.gorgias.com/en-US/rest-api-208286"`; \}, \{ `label`: `"Gorgias Create ticket"`; `url`: `"https://developers.gorgias.com/reference/create-ticket"`; \}, \{ `label`: `"Gorgias Create ticket message"`; `url`: `"https://developers.gorgias.com/reference/create-ticket-message"`; \}, \{ `label`: `"Gorgias OAuth2 Scopes"`; `url`: `"https://developers.gorgias.com/docs/oauth2-scopes"`; \}, \{ `label`: `"gorgias-client package review"`; `url`: `"https://www.npmjs.com/package/gorgias-client"`; \}\]; `notes`: \[`"Runtime coverage is provided through the built-in Gorgias REST adapter when baseUrl and accessToken/apiKey are configured."`, `"A host-provided GorgiasTicketingProviderClient can still override the built-in REST adapter."`, `"Coverage is limited to delegated Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Gorgias public API clone."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Gorgias developer docs"`; `url`: `"https://developers.gorgias.com/"`; \}, \{ `label`: `"Gorgias REST API credentials"`; `url`: `"https://docs.gorgias.com/en-US/rest-api-208286"`; \}, \{ `label`: `"Gorgias Create ticket"`; `url`: `"https://developers.gorgias.com/reference/create-ticket"`; \}, \{ `label`: `"Gorgias Create ticket message"`; `url`: `"https://developers.gorgias.com/reference/create-ticket-message"`; \}, \{ `label`: `"Gorgias OAuth2 Scopes"`; `url`: `"https://developers.gorgias.com/docs/oauth2-scopes"`; \}, \{ `label`: `"gorgias-client package review"`; `url`: `"https://www.npmjs.com/package/gorgias-client"`; \}\] |
| `coverage.notes` | \[`"Runtime coverage is provided through the built-in Gorgias REST adapter when baseUrl and accessToken/apiKey are configured."`, `"A host-provided GorgiasTicketingProviderClient can still override the built-in REST adapter."`, `"Coverage is limited to delegated Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Gorgias public API clone."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `id`: `"gorgias-base-url"`; `label`: `"Gorgias REST API base URL"`; `required`: `true`; \}, \{ `id`: `"gorgias-api-access"`; `label`: `"Gorgias access token or API key"`; `metadata`: \{ `authSchemes`: readonly \[`"bearer"`, `"basic-email-api-key"`\]; \}; `required`: `true`; \}, \{ `id`: `"gorgias-api-username"`; `label`: `"Gorgias API email or username for Basic auth"`; `metadata`: \{ `requiredWhen`: `"using-basic-email-api-key"`; \}; `required`: `false`; \}\] |
| `directions` | \[`"bidirectional"`\] |
| `id` | `"ticketing.gorgias"` |
| `limitations` | \[`"Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration."`, `"The REST adapter covers JSON operations; multipart or provider-specific advanced endpoints belong in an injected GorgiasTicketingProviderClient or rawRequest."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `delegatedSupportSurface`: \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.list"`, `"ticket_messages.create"`, `"messages.list"`, `"account.read"`\]; `source`: `"Built-in Gorgias REST adapter"`; \}; `implementation`: \{ `defaultBaseUrl`: `"none-account-base-url-required"`; `defaultFetchClient`: `"runtime-fetch-or-configured-fetch"`; `defaultHttpClient`: `"providerJsonRequest"`; `manifestImport`: `"no-client-initialization"`; `providerClientInterface`: `"GorgiasTicketingProviderClient"`; `providerClientOverride`: `true`; `strategy`: `"provider-rest-adapter"`; \}; `implementationStrategy`: `"provider-rest-adapter"`; `issue`: `35`; `providerClient`: \{ `defaultClient`: `"built-in-rest-adapter"`; `importPolicy`: `"runtime-override"`; `injectionPolicy`: `"optional-override"`; `interface`: `"GorgiasTicketingProviderClient"`; \}; `providerRestAdapterException`: \{ `allowlistedOperations`: readonly \[`"POST /api/tickets"`, `"GET /api/tickets/{ticket_id}"`, `"PUT /api/tickets/{ticket_id}"`, `"GET /api/tickets"`, `"POST /api/tickets/{ticket_id}/messages"`, `"GET /api/messages"`, `"GET /api/account"`\]; `authSchemes`: readonly \[`"bearer-oauth-access-token"`, `"basic-email-or-username-api-key"`\]; `baseUrlPolicy`: `"required-account-subdomain-url; accepts https://{subdomain}.gorgias.com or the Gorgias Base API URL ending in /api"`; `defaultClient`: `"built-in-rest-adapter"`; `providerSdkDependencyPolicy`: `"do-not-add-third-party-gorgias-sdk-as-default-runtime-dependency"`; `rawClientEscapeHatch`: `"GorgiasTicketingProviderClient.rawRequest"`; `reason`: `"No official maintained Gorgias JavaScript/TypeScript runtime SDK was verified; this package owns a narrow REST adapter until a suitable provider SDK exists."`; `strict`: `true`; \}; `sdkDecision`: `"no-official-sdk-rest-adapter"`; `sdkEvaluation`: \{ `checkedAt`: `"2026-06-25"`; `officialBackendJavaScriptSdk`: `false`; `officialDocsSurface`: `"Gorgias documents REST API and OAuth/API-key authentication against each account subdomain; no official maintained npm JavaScript runtime SDK was verified."`; `result`: `"no-official-maintained-runtime-sdk"`; `reviewedPackages`: readonly \[\{ `package`: `"gorgias-client"`; `reason`: `"Typed and recent, but maintained outside Gorgias and its public client is Basic-auth/subdomain oriented; it does not expose a Bearer OAuth default path or account-readiness resource for this package's runtime contract."`; `result`: `"not-used-as-package-default"`; `version`: `"2.0.4"`; \}, \{ `package`: `"@friggframework/api-module-gorgias"`; `reason`: `"Framework module rather than a standalone official Gorgias backend SDK for this runtime package."`; `result`: `"not-used-as-package-default"`; `version`: `"0.10.1"`; \}, \{ `package`: `"@frontend-sdk/gorgias"`; `reason`: `"Frontend/Shogun integration package, not a maintained Gorgias ticketing REST SDK."`; `result`: `"not-runtime-ticketing-sdk"`; `version`: `"0.26.0"`; \}, \{ `package`: `"@pipedream/gorgias"`; `reason`: `"Pipedream component package rather than a typed raw client suitable as this package's default runtime SDK."`; `result`: `"not-runtime-ticketing-sdk"`; `version`: `"0.6.0"`; \}\]; \}; \} |
| `metadata.delegatedSupportSurface` | \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.list"`, `"ticket_messages.create"`, `"messages.list"`, `"account.read"`\]; `source`: `"Built-in Gorgias REST adapter"`; \} |
| `metadata.delegatedSupportSurface.allowlistedOperations` | readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.list"`, `"ticket_messages.create"`, `"messages.list"`, `"account.read"`\] |
| `metadata.delegatedSupportSurface.source` | `"Built-in Gorgias REST adapter"` |
| `metadata.implementation` | \{ `defaultBaseUrl`: `"none-account-base-url-required"`; `defaultFetchClient`: `"runtime-fetch-or-configured-fetch"`; `defaultHttpClient`: `"providerJsonRequest"`; `manifestImport`: `"no-client-initialization"`; `providerClientInterface`: `"GorgiasTicketingProviderClient"`; `providerClientOverride`: `true`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.implementation.defaultBaseUrl` | `"none-account-base-url-required"` |
| `metadata.implementation.defaultFetchClient` | `"runtime-fetch-or-configured-fetch"` |
| `metadata.implementation.defaultHttpClient` | `"providerJsonRequest"` |
| `metadata.implementation.manifestImport` | `"no-client-initialization"` |
| `metadata.implementation.providerClientInterface` | `"GorgiasTicketingProviderClient"` |
| `metadata.implementation.providerClientOverride` | `true` |
| `metadata.implementation.strategy` | `"provider-rest-adapter"` |
| `metadata.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.issue` | `35` |
| `metadata.providerClient` | \{ `defaultClient`: `"built-in-rest-adapter"`; `importPolicy`: `"runtime-override"`; `injectionPolicy`: `"optional-override"`; `interface`: `"GorgiasTicketingProviderClient"`; \} |
| `metadata.providerClient.defaultClient` | `"built-in-rest-adapter"` |
| `metadata.providerClient.importPolicy` | `"runtime-override"` |
| `metadata.providerClient.injectionPolicy` | `"optional-override"` |
| `metadata.providerClient.interface` | `"GorgiasTicketingProviderClient"` |
| `metadata.providerRestAdapterException` | \{ `allowlistedOperations`: readonly \[`"POST /api/tickets"`, `"GET /api/tickets/{ticket_id}"`, `"PUT /api/tickets/{ticket_id}"`, `"GET /api/tickets"`, `"POST /api/tickets/{ticket_id}/messages"`, `"GET /api/messages"`, `"GET /api/account"`\]; `authSchemes`: readonly \[`"bearer-oauth-access-token"`, `"basic-email-or-username-api-key"`\]; `baseUrlPolicy`: `"required-account-subdomain-url; accepts https://{subdomain}.gorgias.com or the Gorgias Base API URL ending in /api"`; `defaultClient`: `"built-in-rest-adapter"`; `providerSdkDependencyPolicy`: `"do-not-add-third-party-gorgias-sdk-as-default-runtime-dependency"`; `rawClientEscapeHatch`: `"GorgiasTicketingProviderClient.rawRequest"`; `reason`: `"No official maintained Gorgias JavaScript/TypeScript runtime SDK was verified; this package owns a narrow REST adapter until a suitable provider SDK exists."`; `strict`: `true`; \} |
| `metadata.providerRestAdapterException.allowlistedOperations` | readonly \[`"POST /api/tickets"`, `"GET /api/tickets/{ticket_id}"`, `"PUT /api/tickets/{ticket_id}"`, `"GET /api/tickets"`, `"POST /api/tickets/{ticket_id}/messages"`, `"GET /api/messages"`, `"GET /api/account"`\] |
| `metadata.providerRestAdapterException.authSchemes` | readonly \[`"bearer-oauth-access-token"`, `"basic-email-or-username-api-key"`\] |
| `metadata.providerRestAdapterException.baseUrlPolicy` | `"required-account-subdomain-url; accepts https://{subdomain}.gorgias.com or the Gorgias Base API URL ending in /api"` |
| `metadata.providerRestAdapterException.defaultClient` | `"built-in-rest-adapter"` |
| `metadata.providerRestAdapterException.providerSdkDependencyPolicy` | `"do-not-add-third-party-gorgias-sdk-as-default-runtime-dependency"` |
| `metadata.providerRestAdapterException.rawClientEscapeHatch` | `"GorgiasTicketingProviderClient.rawRequest"` |
| `metadata.providerRestAdapterException.reason` | `"No official maintained Gorgias JavaScript/TypeScript runtime SDK was verified; this package owns a narrow REST adapter until a suitable provider SDK exists."` |
| `metadata.providerRestAdapterException.strict` | `true` |
| `metadata.sdkDecision` | `"no-official-sdk-rest-adapter"` |
| `metadata.sdkEvaluation` | \{ `checkedAt`: `"2026-06-25"`; `officialBackendJavaScriptSdk`: `false`; `officialDocsSurface`: `"Gorgias documents REST API and OAuth/API-key authentication against each account subdomain; no official maintained npm JavaScript runtime SDK was verified."`; `result`: `"no-official-maintained-runtime-sdk"`; `reviewedPackages`: readonly \[\{ `package`: `"gorgias-client"`; `reason`: `"Typed and recent, but maintained outside Gorgias and its public client is Basic-auth/subdomain oriented; it does not expose a Bearer OAuth default path or account-readiness resource for this package's runtime contract."`; `result`: `"not-used-as-package-default"`; `version`: `"2.0.4"`; \}, \{ `package`: `"@friggframework/api-module-gorgias"`; `reason`: `"Framework module rather than a standalone official Gorgias backend SDK for this runtime package."`; `result`: `"not-used-as-package-default"`; `version`: `"0.10.1"`; \}, \{ `package`: `"@frontend-sdk/gorgias"`; `reason`: `"Frontend/Shogun integration package, not a maintained Gorgias ticketing REST SDK."`; `result`: `"not-runtime-ticketing-sdk"`; `version`: `"0.26.0"`; \}, \{ `package`: `"@pipedream/gorgias"`; `reason`: `"Pipedream component package rather than a typed raw client suitable as this package's default runtime SDK."`; `result`: `"not-runtime-ticketing-sdk"`; `version`: `"0.6.0"`; \}\]; \} |
| `metadata.sdkEvaluation.checkedAt` | `"2026-06-25"` |
| `metadata.sdkEvaluation.officialBackendJavaScriptSdk` | `false` |
| `metadata.sdkEvaluation.officialDocsSurface` | `"Gorgias documents REST API and OAuth/API-key authentication against each account subdomain; no official maintained npm JavaScript runtime SDK was verified."` |
| `metadata.sdkEvaluation.result` | `"no-official-maintained-runtime-sdk"` |
| `metadata.sdkEvaluation.reviewedPackages` | readonly \[\{ `package`: `"gorgias-client"`; `reason`: `"Typed and recent, but maintained outside Gorgias and its public client is Basic-auth/subdomain oriented; it does not expose a Bearer OAuth default path or account-readiness resource for this package's runtime contract."`; `result`: `"not-used-as-package-default"`; `version`: `"2.0.4"`; \}, \{ `package`: `"@friggframework/api-module-gorgias"`; `reason`: `"Framework module rather than a standalone official Gorgias backend SDK for this runtime package."`; `result`: `"not-used-as-package-default"`; `version`: `"0.10.1"`; \}, \{ `package`: `"@frontend-sdk/gorgias"`; `reason`: `"Frontend/Shogun integration package, not a maintained Gorgias ticketing REST SDK."`; `result`: `"not-runtime-ticketing-sdk"`; `version`: `"0.26.0"`; \}, \{ `package`: `"@pipedream/gorgias"`; `reason`: `"Pipedream component package rather than a typed raw client suitable as this package's default runtime SDK."`; `result`: `"not-runtime-ticketing-sdk"`; `version`: `"0.6.0"`; \}\] |
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
        label: "Gorgias REST API credentials";
        url: "https://docs.gorgias.com/en-US/rest-api-208286";
      }, {
        label: "Gorgias Create ticket";
        url: "https://developers.gorgias.com/reference/create-ticket";
      }, {
        label: "Gorgias Create ticket message";
        url: "https://developers.gorgias.com/reference/create-ticket-message";
      }, {
        label: "Gorgias OAuth2 Scopes";
        url: "https://developers.gorgias.com/docs/oauth2-scopes";
      }, {
        label: "gorgias-client package review";
        url: "https://www.npmjs.com/package/gorgias-client";
     }];
     notes: ["Runtime coverage is provided through the built-in Gorgias REST adapter when baseUrl and accessToken/apiKey are configured.", "A host-provided GorgiasTicketingProviderClient can still override the built-in REST adapter.", "Coverage is limited to delegated Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows.", "This package intentionally does not copy the old generated full Gorgias public API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "gorgias-base-url";
     label: "Gorgias REST API base URL";
     required: true;
   }, {
     id: "gorgias-api-access";
     label: "Gorgias access token or API key";
     metadata: {
        authSchemes: readonly ["bearer", "basic-email-api-key"];
     };
     required: true;
   }, {
     id: "gorgias-api-username";
     label: "Gorgias API email or username for Basic auth";
     metadata: {
        requiredWhen: "using-basic-email-api-key";
     };
     required: false;
  }];
  directions: ["bidirectional"];
  id: "ticketing.gorgias";
  limitations: ["Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration.", "The REST adapter covers JSON operations; multipart or provider-specific advanced endpoints belong in an injected GorgiasTicketingProviderClient or rawRequest."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     delegatedSupportSurface: {
        allowlistedOperations: readonly ["tickets.create", "tickets.read", "tickets.update", "tickets.list", "ticket_messages.create", "messages.list", "account.read"];
        source: "Built-in Gorgias REST adapter";
     };
     implementation: {
        defaultBaseUrl: "none-account-base-url-required";
        defaultFetchClient: "runtime-fetch-or-configured-fetch";
        defaultHttpClient: "providerJsonRequest";
        manifestImport: "no-client-initialization";
        providerClientInterface: "GorgiasTicketingProviderClient";
        providerClientOverride: true;
        strategy: "provider-rest-adapter";
     };
     implementationStrategy: "provider-rest-adapter";
     issue: 35;
     providerClient: {
        defaultClient: "built-in-rest-adapter";
        importPolicy: "runtime-override";
        injectionPolicy: "optional-override";
        interface: "GorgiasTicketingProviderClient";
     };
     providerRestAdapterException: {
        allowlistedOperations: readonly ["POST /api/tickets", "GET /api/tickets/{ticket_id}", "PUT /api/tickets/{ticket_id}", "GET /api/tickets", "POST /api/tickets/{ticket_id}/messages", "GET /api/messages", "GET /api/account"];
        authSchemes: readonly ["bearer-oauth-access-token", "basic-email-or-username-api-key"];
        baseUrlPolicy: "required-account-subdomain-url; accepts https://{subdomain}.gorgias.com or the Gorgias Base API URL ending in /api";
        defaultClient: "built-in-rest-adapter";
        providerSdkDependencyPolicy: "do-not-add-third-party-gorgias-sdk-as-default-runtime-dependency";
        rawClientEscapeHatch: "GorgiasTicketingProviderClient.rawRequest";
        reason: "No official maintained Gorgias JavaScript/TypeScript runtime SDK was verified; this package owns a narrow REST adapter until a suitable provider SDK exists.";
        strict: true;
     };
     sdkDecision: "no-official-sdk-rest-adapter";
     sdkEvaluation: {
        checkedAt: "2026-06-25";
        officialBackendJavaScriptSdk: false;
        officialDocsSurface: "Gorgias documents REST API and OAuth/API-key authentication against each account subdomain; no official maintained npm JavaScript runtime SDK was verified.";
        result: "no-official-maintained-runtime-sdk";
        reviewedPackages: readonly [{
           package: "gorgias-client";
           reason: "Typed and recent, but maintained outside Gorgias and its public client is Basic-auth/subdomain oriented; it does not expose a Bearer OAuth default path or account-readiness resource for this package's runtime contract.";
           result: "not-used-as-package-default";
           version: "2.0.4";
         }, {
           package: "@friggframework/api-module-gorgias";
           reason: "Framework module rather than a standalone official Gorgias backend SDK for this runtime package.";
           result: "not-used-as-package-default";
           version: "0.10.1";
         }, {
           package: "@frontend-sdk/gorgias";
           reason: "Frontend/Shogun integration package, not a maintained Gorgias ticketing REST SDK.";
           result: "not-runtime-ticketing-sdk";
           version: "0.26.0";
         }, {
           package: "@pipedream/gorgias";
           reason: "Pipedream component package rather than a typed raw client suitable as this package's default runtime SDK.";
           result: "not-runtime-ticketing-sdk";
           version: "0.6.0";
        }];
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
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Gorgias developer docs"`; `url`: `"https://developers.gorgias.com/"`; \}, \{ `label`: `"Gorgias REST API credentials"`; `url`: `"https://docs.gorgias.com/en-US/rest-api-208286"`; \}, \{ `label`: `"Gorgias Create ticket"`; `url`: `"https://developers.gorgias.com/reference/create-ticket"`; \}, \{ `label`: `"Gorgias Create ticket message"`; `url`: `"https://developers.gorgias.com/reference/create-ticket-message"`; \}, \{ `label`: `"Gorgias OAuth2 Scopes"`; `url`: `"https://developers.gorgias.com/docs/oauth2-scopes"`; \}, \{ `label`: `"gorgias-client package review"`; `url`: `"https://www.npmjs.com/package/gorgias-client"`; \}\]; `notes`: \[`"Runtime coverage is provided through the built-in Gorgias REST adapter when baseUrl and accessToken/apiKey are configured."`, `"A host-provided GorgiasTicketingProviderClient can still override the built-in REST adapter."`, `"Coverage is limited to delegated Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Gorgias public API clone."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Gorgias developer docs"`; `url`: `"https://developers.gorgias.com/"`; \}, \{ `label`: `"Gorgias REST API credentials"`; `url`: `"https://docs.gorgias.com/en-US/rest-api-208286"`; \}, \{ `label`: `"Gorgias Create ticket"`; `url`: `"https://developers.gorgias.com/reference/create-ticket"`; \}, \{ `label`: `"Gorgias Create ticket message"`; `url`: `"https://developers.gorgias.com/reference/create-ticket-message"`; \}, \{ `label`: `"Gorgias OAuth2 Scopes"`; `url`: `"https://developers.gorgias.com/docs/oauth2-scopes"`; \}, \{ `label`: `"gorgias-client package review"`; `url`: `"https://www.npmjs.com/package/gorgias-client"`; \}\] |
| `coverage.notes` | \[`"Runtime coverage is provided through the built-in Gorgias REST adapter when baseUrl and accessToken/apiKey are configured."`, `"A host-provided GorgiasTicketingProviderClient can still override the built-in REST adapter."`, `"Coverage is limited to delegated Gorgias ticket create/read/update/list operations, ticket-message create/list operations, and account readiness for Cognidesk support workflows."`, `"This package intentionally does not copy the old generated full Gorgias public API clone."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `id`: `"gorgias-base-url"`; `label`: `"Gorgias REST API base URL"`; `required`: `true`; \}, \{ `id`: `"gorgias-api-access"`; `label`: `"Gorgias access token or API key"`; `metadata`: \{ `authSchemes`: readonly \[`"bearer"`, `"basic-email-api-key"`\]; \}; `required`: `true`; \}, \{ `id`: `"gorgias-api-username"`; `label`: `"Gorgias API email or username for Basic auth"`; `metadata`: \{ `requiredWhen`: `"using-basic-email-api-key"`; \}; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | \[`"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"ticketing.gorgias"` |
| <a id="property-limitations"></a> `limitations` | \[`"Domain URL, ticket channels, message channels, macros, Shopify context, automations, and visibility are SDK-user configuration."`, `"The REST adapter covers JSON operations; multipart or provider-specific advanced endpoints belong in an injected GorgiasTicketingProviderClient or rawRequest."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `delegatedSupportSurface`: \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.list"`, `"ticket_messages.create"`, `"messages.list"`, `"account.read"`\]; `source`: `"Built-in Gorgias REST adapter"`; \}; `implementation`: \{ `defaultBaseUrl`: `"none-account-base-url-required"`; `defaultFetchClient`: `"runtime-fetch-or-configured-fetch"`; `defaultHttpClient`: `"providerJsonRequest"`; `manifestImport`: `"no-client-initialization"`; `providerClientInterface`: `"GorgiasTicketingProviderClient"`; `providerClientOverride`: `true`; `strategy`: `"provider-rest-adapter"`; \}; `implementationStrategy`: `"provider-rest-adapter"`; `issue`: `35`; `providerClient`: \{ `defaultClient`: `"built-in-rest-adapter"`; `importPolicy`: `"runtime-override"`; `injectionPolicy`: `"optional-override"`; `interface`: `"GorgiasTicketingProviderClient"`; \}; `providerRestAdapterException`: \{ `allowlistedOperations`: readonly \[`"POST /api/tickets"`, `"GET /api/tickets/{ticket_id}"`, `"PUT /api/tickets/{ticket_id}"`, `"GET /api/tickets"`, `"POST /api/tickets/{ticket_id}/messages"`, `"GET /api/messages"`, `"GET /api/account"`\]; `authSchemes`: readonly \[`"bearer-oauth-access-token"`, `"basic-email-or-username-api-key"`\]; `baseUrlPolicy`: `"required-account-subdomain-url; accepts https://{subdomain}.gorgias.com or the Gorgias Base API URL ending in /api"`; `defaultClient`: `"built-in-rest-adapter"`; `providerSdkDependencyPolicy`: `"do-not-add-third-party-gorgias-sdk-as-default-runtime-dependency"`; `rawClientEscapeHatch`: `"GorgiasTicketingProviderClient.rawRequest"`; `reason`: `"No official maintained Gorgias JavaScript/TypeScript runtime SDK was verified; this package owns a narrow REST adapter until a suitable provider SDK exists."`; `strict`: `true`; \}; `sdkDecision`: `"no-official-sdk-rest-adapter"`; `sdkEvaluation`: \{ `checkedAt`: `"2026-06-25"`; `officialBackendJavaScriptSdk`: `false`; `officialDocsSurface`: `"Gorgias documents REST API and OAuth/API-key authentication against each account subdomain; no official maintained npm JavaScript runtime SDK was verified."`; `result`: `"no-official-maintained-runtime-sdk"`; `reviewedPackages`: readonly \[\{ `package`: `"gorgias-client"`; `reason`: `"Typed and recent, but maintained outside Gorgias and its public client is Basic-auth/subdomain oriented; it does not expose a Bearer OAuth default path or account-readiness resource for this package's runtime contract."`; `result`: `"not-used-as-package-default"`; `version`: `"2.0.4"`; \}, \{ `package`: `"@friggframework/api-module-gorgias"`; `reason`: `"Framework module rather than a standalone official Gorgias backend SDK for this runtime package."`; `result`: `"not-used-as-package-default"`; `version`: `"0.10.1"`; \}, \{ `package`: `"@frontend-sdk/gorgias"`; `reason`: `"Frontend/Shogun integration package, not a maintained Gorgias ticketing REST SDK."`; `result`: `"not-runtime-ticketing-sdk"`; `version`: `"0.26.0"`; \}, \{ `package`: `"@pipedream/gorgias"`; `reason`: `"Pipedream component package rather than a typed raw client suitable as this package's default runtime SDK."`; `result`: `"not-runtime-ticketing-sdk"`; `version`: `"0.6.0"`; \}\]; \}; \} |
| `metadata.delegatedSupportSurface` | \{ `allowlistedOperations`: readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.list"`, `"ticket_messages.create"`, `"messages.list"`, `"account.read"`\]; `source`: `"Built-in Gorgias REST adapter"`; \} |
| `metadata.delegatedSupportSurface.allowlistedOperations` | readonly \[`"tickets.create"`, `"tickets.read"`, `"tickets.update"`, `"tickets.list"`, `"ticket_messages.create"`, `"messages.list"`, `"account.read"`\] |
| `metadata.delegatedSupportSurface.source` | `"Built-in Gorgias REST adapter"` |
| `metadata.implementation` | \{ `defaultBaseUrl`: `"none-account-base-url-required"`; `defaultFetchClient`: `"runtime-fetch-or-configured-fetch"`; `defaultHttpClient`: `"providerJsonRequest"`; `manifestImport`: `"no-client-initialization"`; `providerClientInterface`: `"GorgiasTicketingProviderClient"`; `providerClientOverride`: `true`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.implementation.defaultBaseUrl` | `"none-account-base-url-required"` |
| `metadata.implementation.defaultFetchClient` | `"runtime-fetch-or-configured-fetch"` |
| `metadata.implementation.defaultHttpClient` | `"providerJsonRequest"` |
| `metadata.implementation.manifestImport` | `"no-client-initialization"` |
| `metadata.implementation.providerClientInterface` | `"GorgiasTicketingProviderClient"` |
| `metadata.implementation.providerClientOverride` | `true` |
| `metadata.implementation.strategy` | `"provider-rest-adapter"` |
| `metadata.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.issue` | `35` |
| `metadata.providerClient` | \{ `defaultClient`: `"built-in-rest-adapter"`; `importPolicy`: `"runtime-override"`; `injectionPolicy`: `"optional-override"`; `interface`: `"GorgiasTicketingProviderClient"`; \} |
| `metadata.providerClient.defaultClient` | `"built-in-rest-adapter"` |
| `metadata.providerClient.importPolicy` | `"runtime-override"` |
| `metadata.providerClient.injectionPolicy` | `"optional-override"` |
| `metadata.providerClient.interface` | `"GorgiasTicketingProviderClient"` |
| `metadata.providerRestAdapterException` | \{ `allowlistedOperations`: readonly \[`"POST /api/tickets"`, `"GET /api/tickets/{ticket_id}"`, `"PUT /api/tickets/{ticket_id}"`, `"GET /api/tickets"`, `"POST /api/tickets/{ticket_id}/messages"`, `"GET /api/messages"`, `"GET /api/account"`\]; `authSchemes`: readonly \[`"bearer-oauth-access-token"`, `"basic-email-or-username-api-key"`\]; `baseUrlPolicy`: `"required-account-subdomain-url; accepts https://{subdomain}.gorgias.com or the Gorgias Base API URL ending in /api"`; `defaultClient`: `"built-in-rest-adapter"`; `providerSdkDependencyPolicy`: `"do-not-add-third-party-gorgias-sdk-as-default-runtime-dependency"`; `rawClientEscapeHatch`: `"GorgiasTicketingProviderClient.rawRequest"`; `reason`: `"No official maintained Gorgias JavaScript/TypeScript runtime SDK was verified; this package owns a narrow REST adapter until a suitable provider SDK exists."`; `strict`: `true`; \} |
| `metadata.providerRestAdapterException.allowlistedOperations` | readonly \[`"POST /api/tickets"`, `"GET /api/tickets/{ticket_id}"`, `"PUT /api/tickets/{ticket_id}"`, `"GET /api/tickets"`, `"POST /api/tickets/{ticket_id}/messages"`, `"GET /api/messages"`, `"GET /api/account"`\] |
| `metadata.providerRestAdapterException.authSchemes` | readonly \[`"bearer-oauth-access-token"`, `"basic-email-or-username-api-key"`\] |
| `metadata.providerRestAdapterException.baseUrlPolicy` | `"required-account-subdomain-url; accepts https://{subdomain}.gorgias.com or the Gorgias Base API URL ending in /api"` |
| `metadata.providerRestAdapterException.defaultClient` | `"built-in-rest-adapter"` |
| `metadata.providerRestAdapterException.providerSdkDependencyPolicy` | `"do-not-add-third-party-gorgias-sdk-as-default-runtime-dependency"` |
| `metadata.providerRestAdapterException.rawClientEscapeHatch` | `"GorgiasTicketingProviderClient.rawRequest"` |
| `metadata.providerRestAdapterException.reason` | `"No official maintained Gorgias JavaScript/TypeScript runtime SDK was verified; this package owns a narrow REST adapter until a suitable provider SDK exists."` |
| `metadata.providerRestAdapterException.strict` | `true` |
| `metadata.sdkDecision` | `"no-official-sdk-rest-adapter"` |
| `metadata.sdkEvaluation` | \{ `checkedAt`: `"2026-06-25"`; `officialBackendJavaScriptSdk`: `false`; `officialDocsSurface`: `"Gorgias documents REST API and OAuth/API-key authentication against each account subdomain; no official maintained npm JavaScript runtime SDK was verified."`; `result`: `"no-official-maintained-runtime-sdk"`; `reviewedPackages`: readonly \[\{ `package`: `"gorgias-client"`; `reason`: `"Typed and recent, but maintained outside Gorgias and its public client is Basic-auth/subdomain oriented; it does not expose a Bearer OAuth default path or account-readiness resource for this package's runtime contract."`; `result`: `"not-used-as-package-default"`; `version`: `"2.0.4"`; \}, \{ `package`: `"@friggframework/api-module-gorgias"`; `reason`: `"Framework module rather than a standalone official Gorgias backend SDK for this runtime package."`; `result`: `"not-used-as-package-default"`; `version`: `"0.10.1"`; \}, \{ `package`: `"@frontend-sdk/gorgias"`; `reason`: `"Frontend/Shogun integration package, not a maintained Gorgias ticketing REST SDK."`; `result`: `"not-runtime-ticketing-sdk"`; `version`: `"0.26.0"`; \}, \{ `package`: `"@pipedream/gorgias"`; `reason`: `"Pipedream component package rather than a typed raw client suitable as this package's default runtime SDK."`; `result`: `"not-runtime-ticketing-sdk"`; `version`: `"0.6.0"`; \}\]; \} |
| `metadata.sdkEvaluation.checkedAt` | `"2026-06-25"` |
| `metadata.sdkEvaluation.officialBackendJavaScriptSdk` | `false` |
| `metadata.sdkEvaluation.officialDocsSurface` | `"Gorgias documents REST API and OAuth/API-key authentication against each account subdomain; no official maintained npm JavaScript runtime SDK was verified."` |
| `metadata.sdkEvaluation.result` | `"no-official-maintained-runtime-sdk"` |
| `metadata.sdkEvaluation.reviewedPackages` | readonly \[\{ `package`: `"gorgias-client"`; `reason`: `"Typed and recent, but maintained outside Gorgias and its public client is Basic-auth/subdomain oriented; it does not expose a Bearer OAuth default path or account-readiness resource for this package's runtime contract."`; `result`: `"not-used-as-package-default"`; `version`: `"2.0.4"`; \}, \{ `package`: `"@friggframework/api-module-gorgias"`; `reason`: `"Framework module rather than a standalone official Gorgias backend SDK for this runtime package."`; `result`: `"not-used-as-package-default"`; `version`: `"0.10.1"`; \}, \{ `package`: `"@frontend-sdk/gorgias"`; `reason`: `"Frontend/Shogun integration package, not a maintained Gorgias ticketing REST SDK."`; `result`: `"not-runtime-ticketing-sdk"`; `version`: `"0.26.0"`; \}, \{ `package`: `"@pipedream/gorgias"`; `reason`: `"Pipedream component package rather than a typed raw client suitable as this package's default runtime SDK."`; `result`: `"not-runtime-ticketing-sdk"`; `version`: `"0.6.0"`; \}\] |
| <a id="property-name"></a> `name` | `"Gorgias"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /api/tickets"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/tickets/{ticket_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PUT /api/tickets/{ticket_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /api/tickets"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /api/tickets/{ticket_id}/messages"`; `sideEffect`: `true`; \}, \{ `alias`: `"gorgias.message.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"gorgiasMessage"`; `providerOperation`: `"GET /api/messages"`; \}, \{ `alias`: `"gorgias.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"gorgiasAccount"`; `providerOperation`: `"GET /api/account"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-ticketing-gorgias"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Gorgias tickets can include ecommerce context, customer identifiers, messages, notes, tags, and assignment metadata."`\] |
| <a id="property-provider"></a> `provider` | `"gorgias"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
