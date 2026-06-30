# integrations/ticketing/front/dist/manifest

## Variables

### frontTicketingProviderManifest

```ts
const frontTicketingProviderManifest: {
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
        kind: "frontConversation";
        label: "Front Conversation";
      }, {
        kind: "frontMessage";
        label: "Front Message";
      }, {
        kind: "frontComment";
        label: "Front Comment";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "frontConversation";
        label: "Front Conversation";
      }, {
        kind: "frontMessage";
        label: "Front Message";
      }, {
        kind: "frontComment";
        label: "Front Comment";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "frontConversation";
        label: "Front Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "frontConversation";
        label: "Front Conversation";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "frontConversation";
        label: "Front Conversation";
      }, {
        kind: "frontMessage";
        label: "Front Message";
      }, {
        kind: "frontComment";
        label: "Front Comment";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Front Core API overview";
        url: "https://dev.frontapp.com/docs/core-api-overview";
      }, {
        label: "Front API overview";
        url: "https://help.front.com/en/articles/2482";
      }, {
        label: "Front Create message";
        url: "https://dev.frontapp.com/reference/create-message";
      }, {
        label: "Front Create conversation reply";
        url: "https://dev.frontapp.com/reference/create-message-reply";
     }];
     notes: ["Runtime calls use the built-in Front REST adapter by default because no viable maintained backend Core/Channel API JavaScript client was verified.", "Coverage is limited to selected Front conversation, message, comment, search, update, and teammate readiness operations for support workflows.", "A host-provided FrontTicketingProviderClient can still override the built-in REST adapter.", "This package intentionally does not copy the old generated full Front Core/Channel API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "front-base-url";
     label: "Front API base URL";
     metadata: {
        defaultValue: "https://api2.frontapp.com";
        requiredWhen: "using-built-in-rest-adapter";
     };
     required: false;
   }, {
     id: "front-api-access";
     label: "Front API access token or API key";
     metadata: {
        requiredWhen: "using-built-in-rest-adapter";
        scopeKind: "provider-oauth-scopes";
     };
     required: false;
     scopes: ["conversations:read", "conversations:write", "messages:send", "messages:read", "comments:write", "comments:read", "teammates:read"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.front";
  limitations: ["Inbox IDs, channel IDs, teammate assignment, tags, message visibility, credentials, retries, pagination, and API base URL selection are SDK-user configuration. Multipart attachments are rejected by JSON operation helpers and require SDK-user direct multipart handling."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     checkedProviderSdk: {
        candidates: readonly [{
           checkedVersion: "0.8.2";
           package: "front-sdk";
           reason: "The npm package is deprecated and reports that its GitHub repository has been archived.";
           result: "rejected-deprecated-archived";
         }, {
           checkedVersion: "1.10.0";
           package: "@frontapp/plugin-sdk";
           reason: "The package is the Front UI/plugin SDK, not a backend Core/Channel API client for support ticketing operations.";
           result: "not-runtime-core-api-client";
         }, {
           checkedVersion: "1.2.1";
           package: "front-chat-sdk";
           reason: "The package targets Front Chat SDK use cases rather than Core/Channel API ticketing operations.";
           result: "not-ticketing-core-api-client";
         }, {
           checkedVersion: "1.0.0-20260530.2-dev.646adf4";
           package: "@utdk/front";
           reason: "The package is a third-party generated preview from Front's OpenAPI spec; the packed types expose an empty FrontClient and its source imports ../client.js outside the package contents, so it is not a viable maintained typed runtime client dependency.";
           result: "rejected-generated-preview-incomplete-runtime-client";
        }];
        checkedAt: "2026-06-25";
     };
     frontCoreChannelCoverage: {
        allowlistedOperations: readonly ["messages.create", "conversations.reply", "conversations.read", "conversations.update", "conversations.search", "conversation_messages.list", "comments.create", "comments.list", "teammates.list"];
        source: "Built-in Front Core and Channel REST adapter";
     };
     implementation: {
        manifestImport: "no-sdk-client-initialization";
        packageOwnedRestClient: true;
        providerClientInterface: "FrontTicketingProviderClient";
        providerClientOverride: true;
        runtimePackage: "@cognidesk/integration-ticketing-front";
        strategy: "provider-rest-adapter";
     };
     implementationStrategy: "provider-rest-adapter";
     issue: 35;
     sdkDecision: "no-official-sdk-rest-adapter";
  };
  name: "Front";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticket";
     providerOperation: "POST /channels/{channel_id}/messages";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /conversations/{conversation_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PATCH /conversations/{conversation_id}";
     sideEffect: true;
   }, {
     alias: "ticket.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /conversations/search/{query}";
   }, {
     alias: "ticket.comment.create";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticketComment";
     providerOperation: "POST /conversations/{conversation_id}/messages";
     sideEffect: true;
   }, {
     alias: "ticket.internalNote.create";
     capability: "draft";
     exposesSensitiveData: true;
     providerObject: "internalNote";
     providerOperation: "POST /conversations/{conversation_id}/comments";
     sideEffect: true;
   }, {
     alias: "front.message.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "frontMessage";
     providerOperation: "GET /conversations/{conversation_id}/messages";
   }, {
     alias: "front.comment.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "frontComment";
     providerOperation: "GET /conversations/{conversation_id}/comments";
   }, {
     alias: "front.readiness";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "frontTeammate";
     providerOperation: "GET /teammates";
  }];
  packageName: "@cognidesk/integration-ticketing-front";
  privacyNotes: ["Front conversations can contain customer messages, teammate comments, inbox routing, tags, links, and assignment context."];
  provider: "front";
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
| `capabilities` | \[\{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"frontConversation"`; `label`: `"Front Conversation"`; \}, \{ `kind`: `"frontMessage"`; `label`: `"Front Message"`; \}, \{ `kind`: `"frontComment"`; `label`: `"Front Comment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"frontConversation"`; `label`: `"Front Conversation"`; \}, \{ `kind`: `"frontMessage"`; `label`: `"Front Message"`; \}, \{ `kind`: `"frontComment"`; `label`: `"Front Comment"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"frontConversation"`; `label`: `"Front Conversation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"frontConversation"`; `label`: `"Front Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"frontConversation"`; `label`: `"Front Conversation"`; \}, \{ `kind`: `"frontMessage"`; `label`: `"Front Message"`; \}, \{ `kind`: `"frontComment"`; `label`: `"Front Comment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Front Core API overview"`; `url`: `"https://dev.frontapp.com/docs/core-api-overview"`; \}, \{ `label`: `"Front API overview"`; `url`: `"https://help.front.com/en/articles/2482"`; \}, \{ `label`: `"Front Create message"`; `url`: `"https://dev.frontapp.com/reference/create-message"`; \}, \{ `label`: `"Front Create conversation reply"`; `url`: `"https://dev.frontapp.com/reference/create-message-reply"`; \}\]; `notes`: \[`"Runtime calls use the built-in Front REST adapter by default because no viable maintained backend Core/Channel API JavaScript client was verified."`, `"Coverage is limited to selected Front conversation, message, comment, search, update, and teammate readiness operations for support workflows."`, `"A host-provided FrontTicketingProviderClient can still override the built-in REST adapter."`, `"This package intentionally does not copy the old generated full Front Core/Channel API clone."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Front Core API overview"`; `url`: `"https://dev.frontapp.com/docs/core-api-overview"`; \}, \{ `label`: `"Front API overview"`; `url`: `"https://help.front.com/en/articles/2482"`; \}, \{ `label`: `"Front Create message"`; `url`: `"https://dev.frontapp.com/reference/create-message"`; \}, \{ `label`: `"Front Create conversation reply"`; `url`: `"https://dev.frontapp.com/reference/create-message-reply"`; \}\] |
| `coverage.notes` | \[`"Runtime calls use the built-in Front REST adapter by default because no viable maintained backend Core/Channel API JavaScript client was verified."`, `"Coverage is limited to selected Front conversation, message, comment, search, update, and teammate readiness operations for support workflows."`, `"A host-provided FrontTicketingProviderClient can still override the built-in REST adapter."`, `"This package intentionally does not copy the old generated full Front Core/Channel API clone."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `id`: `"front-base-url"`; `label`: `"Front API base URL"`; `metadata`: \{ `defaultValue`: `"https://api2.frontapp.com"`; `requiredWhen`: `"using-built-in-rest-adapter"`; \}; `required`: `false`; \}, \{ `id`: `"front-api-access"`; `label`: `"Front API access token or API key"`; `metadata`: \{ `requiredWhen`: `"using-built-in-rest-adapter"`; `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `false`; `scopes`: \[`"conversations:read"`, `"conversations:write"`, `"messages:send"`, `"messages:read"`, `"comments:write"`, `"comments:read"`, `"teammates:read"`\]; \}\] |
| `directions` | \[`"bidirectional"`\] |
| `id` | `"ticketing.front"` |
| `limitations` | \[`"Inbox IDs, channel IDs, teammate assignment, tags, message visibility, credentials, retries, pagination, and API base URL selection are SDK-user configuration. Multipart attachments are rejected by JSON operation helpers and require SDK-user direct multipart handling."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `checkedProviderSdk`: \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.8.2"`; `package`: `"front-sdk"`; `reason`: `"The npm package is deprecated and reports that its GitHub repository has been archived."`; `result`: `"rejected-deprecated-archived"`; \}, \{ `checkedVersion`: `"1.10.0"`; `package`: `"@frontapp/plugin-sdk"`; `reason`: `"The package is the Front UI/plugin SDK, not a backend Core/Channel API client for support ticketing operations."`; `result`: `"not-runtime-core-api-client"`; \}, \{ `checkedVersion`: `"1.2.1"`; `package`: `"front-chat-sdk"`; `reason`: `"The package targets Front Chat SDK use cases rather than Core/Channel API ticketing operations."`; `result`: `"not-ticketing-core-api-client"`; \}, \{ `checkedVersion`: `"1.0.0-20260530.2-dev.646adf4"`; `package`: `"@utdk/front"`; `reason`: `"The package is a third-party generated preview from Front's OpenAPI spec; the packed types expose an empty FrontClient and its source imports ../client.js outside the package contents, so it is not a viable maintained typed runtime client dependency."`; `result`: `"rejected-generated-preview-incomplete-runtime-client"`; \}\]; `checkedAt`: `"2026-06-25"`; \}; `frontCoreChannelCoverage`: \{ `allowlistedOperations`: readonly \[`"messages.create"`, `"conversations.reply"`, `"conversations.read"`, `"conversations.update"`, `"conversations.search"`, `"conversation_messages.list"`, `"comments.create"`, `"comments.list"`, `"teammates.list"`\]; `source`: `"Built-in Front Core and Channel REST adapter"`; \}; `implementation`: \{ `manifestImport`: `"no-sdk-client-initialization"`; `packageOwnedRestClient`: `true`; `providerClientInterface`: `"FrontTicketingProviderClient"`; `providerClientOverride`: `true`; `runtimePackage`: `"@cognidesk/integration-ticketing-front"`; `strategy`: `"provider-rest-adapter"`; \}; `implementationStrategy`: `"provider-rest-adapter"`; `issue`: `35`; `sdkDecision`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.checkedProviderSdk` | \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.8.2"`; `package`: `"front-sdk"`; `reason`: `"The npm package is deprecated and reports that its GitHub repository has been archived."`; `result`: `"rejected-deprecated-archived"`; \}, \{ `checkedVersion`: `"1.10.0"`; `package`: `"@frontapp/plugin-sdk"`; `reason`: `"The package is the Front UI/plugin SDK, not a backend Core/Channel API client for support ticketing operations."`; `result`: `"not-runtime-core-api-client"`; \}, \{ `checkedVersion`: `"1.2.1"`; `package`: `"front-chat-sdk"`; `reason`: `"The package targets Front Chat SDK use cases rather than Core/Channel API ticketing operations."`; `result`: `"not-ticketing-core-api-client"`; \}, \{ `checkedVersion`: `"1.0.0-20260530.2-dev.646adf4"`; `package`: `"@utdk/front"`; `reason`: `"The package is a third-party generated preview from Front's OpenAPI spec; the packed types expose an empty FrontClient and its source imports ../client.js outside the package contents, so it is not a viable maintained typed runtime client dependency."`; `result`: `"rejected-generated-preview-incomplete-runtime-client"`; \}\]; `checkedAt`: `"2026-06-25"`; \} |
| `metadata.checkedProviderSdk.candidates` | readonly \[\{ `checkedVersion`: `"0.8.2"`; `package`: `"front-sdk"`; `reason`: `"The npm package is deprecated and reports that its GitHub repository has been archived."`; `result`: `"rejected-deprecated-archived"`; \}, \{ `checkedVersion`: `"1.10.0"`; `package`: `"@frontapp/plugin-sdk"`; `reason`: `"The package is the Front UI/plugin SDK, not a backend Core/Channel API client for support ticketing operations."`; `result`: `"not-runtime-core-api-client"`; \}, \{ `checkedVersion`: `"1.2.1"`; `package`: `"front-chat-sdk"`; `reason`: `"The package targets Front Chat SDK use cases rather than Core/Channel API ticketing operations."`; `result`: `"not-ticketing-core-api-client"`; \}, \{ `checkedVersion`: `"1.0.0-20260530.2-dev.646adf4"`; `package`: `"@utdk/front"`; `reason`: `"The package is a third-party generated preview from Front's OpenAPI spec; the packed types expose an empty FrontClient and its source imports ../client.js outside the package contents, so it is not a viable maintained typed runtime client dependency."`; `result`: `"rejected-generated-preview-incomplete-runtime-client"`; \}\] |
| `metadata.checkedProviderSdk.checkedAt` | `"2026-06-25"` |
| `metadata.frontCoreChannelCoverage` | \{ `allowlistedOperations`: readonly \[`"messages.create"`, `"conversations.reply"`, `"conversations.read"`, `"conversations.update"`, `"conversations.search"`, `"conversation_messages.list"`, `"comments.create"`, `"comments.list"`, `"teammates.list"`\]; `source`: `"Built-in Front Core and Channel REST adapter"`; \} |
| `metadata.frontCoreChannelCoverage.allowlistedOperations` | readonly \[`"messages.create"`, `"conversations.reply"`, `"conversations.read"`, `"conversations.update"`, `"conversations.search"`, `"conversation_messages.list"`, `"comments.create"`, `"comments.list"`, `"teammates.list"`\] |
| `metadata.frontCoreChannelCoverage.source` | `"Built-in Front Core and Channel REST adapter"` |
| `metadata.implementation` | \{ `manifestImport`: `"no-sdk-client-initialization"`; `packageOwnedRestClient`: `true`; `providerClientInterface`: `"FrontTicketingProviderClient"`; `providerClientOverride`: `true`; `runtimePackage`: `"@cognidesk/integration-ticketing-front"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.packageOwnedRestClient` | `true` |
| `metadata.implementation.providerClientInterface` | `"FrontTicketingProviderClient"` |
| `metadata.implementation.providerClientOverride` | `true` |
| `metadata.implementation.runtimePackage` | `"@cognidesk/integration-ticketing-front"` |
| `metadata.implementation.strategy` | `"provider-rest-adapter"` |
| `metadata.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.issue` | `35` |
| `metadata.sdkDecision` | `"no-official-sdk-rest-adapter"` |
| `name` | `"Front"` |
| `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /channels/{channel_id}/messages"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /conversations/{conversation_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PATCH /conversations/{conversation_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /conversations/search/{query}"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /conversations/{conversation_id}/messages"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.internalNote.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `providerObject`: `"internalNote"`; `providerOperation`: `"POST /conversations/{conversation_id}/comments"`; `sideEffect`: `true`; \}, \{ `alias`: `"front.message.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"frontMessage"`; `providerOperation`: `"GET /conversations/{conversation_id}/messages"`; \}, \{ `alias`: `"front.comment.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"frontComment"`; `providerOperation`: `"GET /conversations/{conversation_id}/comments"`; \}, \{ `alias`: `"front.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"frontTeammate"`; `providerOperation`: `"GET /teammates"`; \}\] |
| `packageName` | `"@cognidesk/integration-ticketing-front"` |
| `privacyNotes` | \[`"Front conversations can contain customer messages, teammate comments, inbox routing, tags, links, and assignment context."`\] |
| `provider` | `"front"` |
| `trustLevel` | `"official"` |

***

### frontTicketingProviderManifestInput

```ts
const frontTicketingProviderManifestInput: {
  capabilities: [{
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "frontConversation";
        label: "Front Conversation";
      }, {
        kind: "frontMessage";
        label: "Front Message";
      }, {
        kind: "frontComment";
        label: "Front Comment";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "frontConversation";
        label: "Front Conversation";
      }, {
        kind: "frontMessage";
        label: "Front Message";
      }, {
        kind: "frontComment";
        label: "Front Comment";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "frontConversation";
        label: "Front Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "frontConversation";
        label: "Front Conversation";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "frontConversation";
        label: "Front Conversation";
      }, {
        kind: "frontMessage";
        label: "Front Message";
      }, {
        kind: "frontComment";
        label: "Front Comment";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Front Core API overview";
        url: "https://dev.frontapp.com/docs/core-api-overview";
      }, {
        label: "Front API overview";
        url: "https://help.front.com/en/articles/2482";
      }, {
        label: "Front Create message";
        url: "https://dev.frontapp.com/reference/create-message";
      }, {
        label: "Front Create conversation reply";
        url: "https://dev.frontapp.com/reference/create-message-reply";
     }];
     notes: ["Runtime calls use the built-in Front REST adapter by default because no viable maintained backend Core/Channel API JavaScript client was verified.", "Coverage is limited to selected Front conversation, message, comment, search, update, and teammate readiness operations for support workflows.", "A host-provided FrontTicketingProviderClient can still override the built-in REST adapter.", "This package intentionally does not copy the old generated full Front Core/Channel API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "front-base-url";
     label: "Front API base URL";
     metadata: {
        defaultValue: "https://api2.frontapp.com";
        requiredWhen: "using-built-in-rest-adapter";
     };
     required: false;
   }, {
     id: "front-api-access";
     label: "Front API access token or API key";
     metadata: {
        requiredWhen: "using-built-in-rest-adapter";
        scopeKind: "provider-oauth-scopes";
     };
     required: false;
     scopes: ["conversations:read", "conversations:write", "messages:send", "messages:read", "comments:write", "comments:read", "teammates:read"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.front";
  limitations: ["Inbox IDs, channel IDs, teammate assignment, tags, message visibility, credentials, retries, pagination, and API base URL selection are SDK-user configuration. Multipart attachments are rejected by JSON operation helpers and require SDK-user direct multipart handling."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     checkedProviderSdk: {
        candidates: readonly [{
           checkedVersion: "0.8.2";
           package: "front-sdk";
           reason: "The npm package is deprecated and reports that its GitHub repository has been archived.";
           result: "rejected-deprecated-archived";
         }, {
           checkedVersion: "1.10.0";
           package: "@frontapp/plugin-sdk";
           reason: "The package is the Front UI/plugin SDK, not a backend Core/Channel API client for support ticketing operations.";
           result: "not-runtime-core-api-client";
         }, {
           checkedVersion: "1.2.1";
           package: "front-chat-sdk";
           reason: "The package targets Front Chat SDK use cases rather than Core/Channel API ticketing operations.";
           result: "not-ticketing-core-api-client";
         }, {
           checkedVersion: "1.0.0-20260530.2-dev.646adf4";
           package: "@utdk/front";
           reason: "The package is a third-party generated preview from Front's OpenAPI spec; the packed types expose an empty FrontClient and its source imports ../client.js outside the package contents, so it is not a viable maintained typed runtime client dependency.";
           result: "rejected-generated-preview-incomplete-runtime-client";
        }];
        checkedAt: "2026-06-25";
     };
     frontCoreChannelCoverage: {
        allowlistedOperations: readonly ["messages.create", "conversations.reply", "conversations.read", "conversations.update", "conversations.search", "conversation_messages.list", "comments.create", "comments.list", "teammates.list"];
        source: "Built-in Front Core and Channel REST adapter";
     };
     implementation: {
        manifestImport: "no-sdk-client-initialization";
        packageOwnedRestClient: true;
        providerClientInterface: "FrontTicketingProviderClient";
        providerClientOverride: true;
        runtimePackage: "@cognidesk/integration-ticketing-front";
        strategy: "provider-rest-adapter";
     };
     implementationStrategy: "provider-rest-adapter";
     issue: 35;
     sdkDecision: "no-official-sdk-rest-adapter";
  };
  name: "Front";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticket";
     providerOperation: "POST /channels/{channel_id}/messages";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /conversations/{conversation_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PATCH /conversations/{conversation_id}";
     sideEffect: true;
   }, {
     alias: "ticket.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /conversations/search/{query}";
   }, {
     alias: "ticket.comment.create";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticketComment";
     providerOperation: "POST /conversations/{conversation_id}/messages";
     sideEffect: true;
   }, {
     alias: "ticket.internalNote.create";
     capability: "draft";
     exposesSensitiveData: true;
     providerObject: "internalNote";
     providerOperation: "POST /conversations/{conversation_id}/comments";
     sideEffect: true;
   }, {
     alias: "front.message.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "frontMessage";
     providerOperation: "GET /conversations/{conversation_id}/messages";
   }, {
     alias: "front.comment.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "frontComment";
     providerOperation: "GET /conversations/{conversation_id}/comments";
   }, {
     alias: "front.readiness";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "frontTeammate";
     providerOperation: "GET /teammates";
  }];
  packageName: "@cognidesk/integration-ticketing-front";
  privacyNotes: ["Front conversations can contain customer messages, teammate comments, inbox routing, tags, links, and assignment context."];
  provider: "front";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"frontConversation"`; `label`: `"Front Conversation"`; \}, \{ `kind`: `"frontMessage"`; `label`: `"Front Message"`; \}, \{ `kind`: `"frontComment"`; `label`: `"Front Comment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"frontConversation"`; `label`: `"Front Conversation"`; \}, \{ `kind`: `"frontMessage"`; `label`: `"Front Message"`; \}, \{ `kind`: `"frontComment"`; `label`: `"Front Comment"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"frontConversation"`; `label`: `"Front Conversation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"frontConversation"`; `label`: `"Front Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"frontConversation"`; `label`: `"Front Conversation"`; \}, \{ `kind`: `"frontMessage"`; `label`: `"Front Message"`; \}, \{ `kind`: `"frontComment"`; `label`: `"Front Comment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"ticketing"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Front Core API overview"`; `url`: `"https://dev.frontapp.com/docs/core-api-overview"`; \}, \{ `label`: `"Front API overview"`; `url`: `"https://help.front.com/en/articles/2482"`; \}, \{ `label`: `"Front Create message"`; `url`: `"https://dev.frontapp.com/reference/create-message"`; \}, \{ `label`: `"Front Create conversation reply"`; `url`: `"https://dev.frontapp.com/reference/create-message-reply"`; \}\]; `notes`: \[`"Runtime calls use the built-in Front REST adapter by default because no viable maintained backend Core/Channel API JavaScript client was verified."`, `"Coverage is limited to selected Front conversation, message, comment, search, update, and teammate readiness operations for support workflows."`, `"A host-provided FrontTicketingProviderClient can still override the built-in REST adapter."`, `"This package intentionally does not copy the old generated full Front Core/Channel API clone."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Front Core API overview"`; `url`: `"https://dev.frontapp.com/docs/core-api-overview"`; \}, \{ `label`: `"Front API overview"`; `url`: `"https://help.front.com/en/articles/2482"`; \}, \{ `label`: `"Front Create message"`; `url`: `"https://dev.frontapp.com/reference/create-message"`; \}, \{ `label`: `"Front Create conversation reply"`; `url`: `"https://dev.frontapp.com/reference/create-message-reply"`; \}\] |
| `coverage.notes` | \[`"Runtime calls use the built-in Front REST adapter by default because no viable maintained backend Core/Channel API JavaScript client was verified."`, `"Coverage is limited to selected Front conversation, message, comment, search, update, and teammate readiness operations for support workflows."`, `"A host-provided FrontTicketingProviderClient can still override the built-in REST adapter."`, `"This package intentionally does not copy the old generated full Front Core/Channel API clone."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `id`: `"front-base-url"`; `label`: `"Front API base URL"`; `metadata`: \{ `defaultValue`: `"https://api2.frontapp.com"`; `requiredWhen`: `"using-built-in-rest-adapter"`; \}; `required`: `false`; \}, \{ `id`: `"front-api-access"`; `label`: `"Front API access token or API key"`; `metadata`: \{ `requiredWhen`: `"using-built-in-rest-adapter"`; `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `false`; `scopes`: \[`"conversations:read"`, `"conversations:write"`, `"messages:send"`, `"messages:read"`, `"comments:write"`, `"comments:read"`, `"teammates:read"`\]; \}\] |
| <a id="property-directions"></a> `directions` | \[`"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"ticketing.front"` |
| <a id="property-limitations"></a> `limitations` | \[`"Inbox IDs, channel IDs, teammate assignment, tags, message visibility, credentials, retries, pagination, and API base URL selection are SDK-user configuration. Multipart attachments are rejected by JSON operation helpers and require SDK-user direct multipart handling."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `checkedProviderSdk`: \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.8.2"`; `package`: `"front-sdk"`; `reason`: `"The npm package is deprecated and reports that its GitHub repository has been archived."`; `result`: `"rejected-deprecated-archived"`; \}, \{ `checkedVersion`: `"1.10.0"`; `package`: `"@frontapp/plugin-sdk"`; `reason`: `"The package is the Front UI/plugin SDK, not a backend Core/Channel API client for support ticketing operations."`; `result`: `"not-runtime-core-api-client"`; \}, \{ `checkedVersion`: `"1.2.1"`; `package`: `"front-chat-sdk"`; `reason`: `"The package targets Front Chat SDK use cases rather than Core/Channel API ticketing operations."`; `result`: `"not-ticketing-core-api-client"`; \}, \{ `checkedVersion`: `"1.0.0-20260530.2-dev.646adf4"`; `package`: `"@utdk/front"`; `reason`: `"The package is a third-party generated preview from Front's OpenAPI spec; the packed types expose an empty FrontClient and its source imports ../client.js outside the package contents, so it is not a viable maintained typed runtime client dependency."`; `result`: `"rejected-generated-preview-incomplete-runtime-client"`; \}\]; `checkedAt`: `"2026-06-25"`; \}; `frontCoreChannelCoverage`: \{ `allowlistedOperations`: readonly \[`"messages.create"`, `"conversations.reply"`, `"conversations.read"`, `"conversations.update"`, `"conversations.search"`, `"conversation_messages.list"`, `"comments.create"`, `"comments.list"`, `"teammates.list"`\]; `source`: `"Built-in Front Core and Channel REST adapter"`; \}; `implementation`: \{ `manifestImport`: `"no-sdk-client-initialization"`; `packageOwnedRestClient`: `true`; `providerClientInterface`: `"FrontTicketingProviderClient"`; `providerClientOverride`: `true`; `runtimePackage`: `"@cognidesk/integration-ticketing-front"`; `strategy`: `"provider-rest-adapter"`; \}; `implementationStrategy`: `"provider-rest-adapter"`; `issue`: `35`; `sdkDecision`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.checkedProviderSdk` | \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.8.2"`; `package`: `"front-sdk"`; `reason`: `"The npm package is deprecated and reports that its GitHub repository has been archived."`; `result`: `"rejected-deprecated-archived"`; \}, \{ `checkedVersion`: `"1.10.0"`; `package`: `"@frontapp/plugin-sdk"`; `reason`: `"The package is the Front UI/plugin SDK, not a backend Core/Channel API client for support ticketing operations."`; `result`: `"not-runtime-core-api-client"`; \}, \{ `checkedVersion`: `"1.2.1"`; `package`: `"front-chat-sdk"`; `reason`: `"The package targets Front Chat SDK use cases rather than Core/Channel API ticketing operations."`; `result`: `"not-ticketing-core-api-client"`; \}, \{ `checkedVersion`: `"1.0.0-20260530.2-dev.646adf4"`; `package`: `"@utdk/front"`; `reason`: `"The package is a third-party generated preview from Front's OpenAPI spec; the packed types expose an empty FrontClient and its source imports ../client.js outside the package contents, so it is not a viable maintained typed runtime client dependency."`; `result`: `"rejected-generated-preview-incomplete-runtime-client"`; \}\]; `checkedAt`: `"2026-06-25"`; \} |
| `metadata.checkedProviderSdk.candidates` | readonly \[\{ `checkedVersion`: `"0.8.2"`; `package`: `"front-sdk"`; `reason`: `"The npm package is deprecated and reports that its GitHub repository has been archived."`; `result`: `"rejected-deprecated-archived"`; \}, \{ `checkedVersion`: `"1.10.0"`; `package`: `"@frontapp/plugin-sdk"`; `reason`: `"The package is the Front UI/plugin SDK, not a backend Core/Channel API client for support ticketing operations."`; `result`: `"not-runtime-core-api-client"`; \}, \{ `checkedVersion`: `"1.2.1"`; `package`: `"front-chat-sdk"`; `reason`: `"The package targets Front Chat SDK use cases rather than Core/Channel API ticketing operations."`; `result`: `"not-ticketing-core-api-client"`; \}, \{ `checkedVersion`: `"1.0.0-20260530.2-dev.646adf4"`; `package`: `"@utdk/front"`; `reason`: `"The package is a third-party generated preview from Front's OpenAPI spec; the packed types expose an empty FrontClient and its source imports ../client.js outside the package contents, so it is not a viable maintained typed runtime client dependency."`; `result`: `"rejected-generated-preview-incomplete-runtime-client"`; \}\] |
| `metadata.checkedProviderSdk.checkedAt` | `"2026-06-25"` |
| `metadata.frontCoreChannelCoverage` | \{ `allowlistedOperations`: readonly \[`"messages.create"`, `"conversations.reply"`, `"conversations.read"`, `"conversations.update"`, `"conversations.search"`, `"conversation_messages.list"`, `"comments.create"`, `"comments.list"`, `"teammates.list"`\]; `source`: `"Built-in Front Core and Channel REST adapter"`; \} |
| `metadata.frontCoreChannelCoverage.allowlistedOperations` | readonly \[`"messages.create"`, `"conversations.reply"`, `"conversations.read"`, `"conversations.update"`, `"conversations.search"`, `"conversation_messages.list"`, `"comments.create"`, `"comments.list"`, `"teammates.list"`\] |
| `metadata.frontCoreChannelCoverage.source` | `"Built-in Front Core and Channel REST adapter"` |
| `metadata.implementation` | \{ `manifestImport`: `"no-sdk-client-initialization"`; `packageOwnedRestClient`: `true`; `providerClientInterface`: `"FrontTicketingProviderClient"`; `providerClientOverride`: `true`; `runtimePackage`: `"@cognidesk/integration-ticketing-front"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.packageOwnedRestClient` | `true` |
| `metadata.implementation.providerClientInterface` | `"FrontTicketingProviderClient"` |
| `metadata.implementation.providerClientOverride` | `true` |
| `metadata.implementation.runtimePackage` | `"@cognidesk/integration-ticketing-front"` |
| `metadata.implementation.strategy` | `"provider-rest-adapter"` |
| `metadata.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.issue` | `35` |
| `metadata.sdkDecision` | `"no-official-sdk-rest-adapter"` |
| <a id="property-name"></a> `name` | `"Front"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /channels/{channel_id}/messages"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /conversations/{conversation_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PATCH /conversations/{conversation_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /conversations/search/{query}"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /conversations/{conversation_id}/messages"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.internalNote.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `providerObject`: `"internalNote"`; `providerOperation`: `"POST /conversations/{conversation_id}/comments"`; `sideEffect`: `true`; \}, \{ `alias`: `"front.message.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"frontMessage"`; `providerOperation`: `"GET /conversations/{conversation_id}/messages"`; \}, \{ `alias`: `"front.comment.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"frontComment"`; `providerOperation`: `"GET /conversations/{conversation_id}/comments"`; \}, \{ `alias`: `"front.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"frontTeammate"`; `providerOperation`: `"GET /teammates"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-ticketing-front"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Front conversations can contain customer messages, teammate comments, inbox routing, tags, links, and assignment context."`\] |
| <a id="property-provider"></a> `provider` | `"front"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
