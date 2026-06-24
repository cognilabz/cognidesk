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
     notes: ["SDK decision: no viable official maintained backend JavaScript client was verified. The deprecated front-sdk package is not adopted.", "Coverage is limited to selected Front Core/Channel API conversation, message, comment, search, update, and teammate readiness operations for support workflows.", "This package intentionally does not copy the old generated full Front Core/Channel API clone."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     id: "front-api-access";
     label: "Front API token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["conversations:read", "conversations:write", "messages:send", "messages:read", "comments:write", "comments:read", "teammates:read"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.front";
  limitations: ["Inbox IDs, channel IDs, teammate assignment, tags, and message visibility are SDK-user configuration. Multipart attachments are rejected by JSON helpers and require SDK-user direct multipart handling."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidates: readonly ["front-sdk", "Front Plugin SDK"];
        checkedAt: "2026-06-21";
        reason: "front-sdk is deprecated and the official Plugin SDK is not a backend Core API client.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["messages.create", "conversations.reply", "conversations.read", "conversations.update", "conversations.search", "conversation_messages.list", "comments.create", "comments.list", "teammates.list"];
        source: "Front Core and Channel APIs";
     };
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
| `coverage` | \{ `evidence`: \[\{ `label`: `"Front Core API overview"`; `url`: `"https://dev.frontapp.com/docs/core-api-overview"`; \}, \{ `label`: `"Front API overview"`; `url`: `"https://help.front.com/en/articles/2482"`; \}, \{ `label`: `"Front Create message"`; `url`: `"https://dev.frontapp.com/reference/create-message"`; \}, \{ `label`: `"Front Create conversation reply"`; `url`: `"https://dev.frontapp.com/reference/create-message-reply"`; \}\]; `notes`: \[`"SDK decision: no viable official maintained backend JavaScript client was verified. The deprecated front-sdk package is not adopted."`, `"Coverage is limited to selected Front Core/Channel API conversation, message, comment, search, update, and teammate readiness operations for support workflows."`, `"This package intentionally does not copy the old generated full Front Core/Channel API clone."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Front Core API overview"`; `url`: `"https://dev.frontapp.com/docs/core-api-overview"`; \}, \{ `label`: `"Front API overview"`; `url`: `"https://help.front.com/en/articles/2482"`; \}, \{ `label`: `"Front Create message"`; `url`: `"https://dev.frontapp.com/reference/create-message"`; \}, \{ `label`: `"Front Create conversation reply"`; `url`: `"https://dev.frontapp.com/reference/create-message-reply"`; \}\] |
| `coverage.notes` | \[`"SDK decision: no viable official maintained backend JavaScript client was verified. The deprecated front-sdk package is not adopted."`, `"Coverage is limited to selected Front Core/Channel API conversation, message, comment, search, update, and teammate readiness operations for support workflows."`, `"This package intentionally does not copy the old generated full Front Core/Channel API clone."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | \[\{ `id`: `"front-api-access"`; `label`: `"Front API token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: \[`"conversations:read"`, `"conversations:write"`, `"messages:send"`, `"messages:read"`, `"comments:write"`, `"comments:read"`, `"teammates:read"`\]; \}\] |
| `directions` | \[`"bidirectional"`\] |
| `id` | `"ticketing.front"` |
| `limitations` | \[`"Inbox IDs, channel IDs, teammate assignment, tags, and message visibility are SDK-user configuration. Multipart attachments are rejected by JSON helpers and require SDK-user direct multipart handling."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementationStrategy`: `"direct-http-support-slice"`; `issue`: `35`; `sdkDecision`: \{ `candidates`: readonly \[`"front-sdk"`, `"Front Plugin SDK"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"front-sdk is deprecated and the official Plugin SDK is not a backend Core API client."`; `verdict`: `"not-adopted"`; \}; `supportSlice`: \{ `allowlistedOperations`: readonly \[`"messages.create"`, `"conversations.reply"`, `"conversations.read"`, `"conversations.update"`, `"conversations.search"`, `"conversation_messages.list"`, `"comments.create"`, `"comments.list"`, `"teammates.list"`\]; `source`: `"Front Core and Channel APIs"`; \}; \} |
| `metadata.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.issue` | `35` |
| `metadata.sdkDecision` | \{ `candidates`: readonly \[`"front-sdk"`, `"Front Plugin SDK"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"front-sdk is deprecated and the official Plugin SDK is not a backend Core API client."`; `verdict`: `"not-adopted"`; \} |
| `metadata.sdkDecision.candidates` | readonly \[`"front-sdk"`, `"Front Plugin SDK"`\] |
| `metadata.sdkDecision.checkedAt` | `"2026-06-21"` |
| `metadata.sdkDecision.reason` | `"front-sdk is deprecated and the official Plugin SDK is not a backend Core API client."` |
| `metadata.sdkDecision.verdict` | `"not-adopted"` |
| `metadata.supportSlice` | \{ `allowlistedOperations`: readonly \[`"messages.create"`, `"conversations.reply"`, `"conversations.read"`, `"conversations.update"`, `"conversations.search"`, `"conversation_messages.list"`, `"comments.create"`, `"comments.list"`, `"teammates.list"`\]; `source`: `"Front Core and Channel APIs"`; \} |
| `metadata.supportSlice.allowlistedOperations` | readonly \[`"messages.create"`, `"conversations.reply"`, `"conversations.read"`, `"conversations.update"`, `"conversations.search"`, `"conversation_messages.list"`, `"comments.create"`, `"comments.list"`, `"teammates.list"`\] |
| `metadata.supportSlice.source` | `"Front Core and Channel APIs"` |
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
     notes: ["SDK decision: no viable official maintained backend JavaScript client was verified. The deprecated front-sdk package is not adopted.", "Coverage is limited to selected Front Core/Channel API conversation, message, comment, search, update, and teammate readiness operations for support workflows.", "This package intentionally does not copy the old generated full Front Core/Channel API clone."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     id: "front-api-access";
     label: "Front API token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["conversations:read", "conversations:write", "messages:send", "messages:read", "comments:write", "comments:read", "teammates:read"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.front";
  limitations: ["Inbox IDs, channel IDs, teammate assignment, tags, and message visibility are SDK-user configuration. Multipart attachments are rejected by JSON helpers and require SDK-user direct multipart handling."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidates: readonly ["front-sdk", "Front Plugin SDK"];
        checkedAt: "2026-06-21";
        reason: "front-sdk is deprecated and the official Plugin SDK is not a backend Core API client.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["messages.create", "conversations.reply", "conversations.read", "conversations.update", "conversations.search", "conversation_messages.list", "comments.create", "comments.list", "teammates.list"];
        source: "Front Core and Channel APIs";
     };
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
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Front Core API overview"`; `url`: `"https://dev.frontapp.com/docs/core-api-overview"`; \}, \{ `label`: `"Front API overview"`; `url`: `"https://help.front.com/en/articles/2482"`; \}, \{ `label`: `"Front Create message"`; `url`: `"https://dev.frontapp.com/reference/create-message"`; \}, \{ `label`: `"Front Create conversation reply"`; `url`: `"https://dev.frontapp.com/reference/create-message-reply"`; \}\]; `notes`: \[`"SDK decision: no viable official maintained backend JavaScript client was verified. The deprecated front-sdk package is not adopted."`, `"Coverage is limited to selected Front Core/Channel API conversation, message, comment, search, update, and teammate readiness operations for support workflows."`, `"This package intentionally does not copy the old generated full Front Core/Channel API clone."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Front Core API overview"`; `url`: `"https://dev.frontapp.com/docs/core-api-overview"`; \}, \{ `label`: `"Front API overview"`; `url`: `"https://help.front.com/en/articles/2482"`; \}, \{ `label`: `"Front Create message"`; `url`: `"https://dev.frontapp.com/reference/create-message"`; \}, \{ `label`: `"Front Create conversation reply"`; `url`: `"https://dev.frontapp.com/reference/create-message-reply"`; \}\] |
| `coverage.notes` | \[`"SDK decision: no viable official maintained backend JavaScript client was verified. The deprecated front-sdk package is not adopted."`, `"Coverage is limited to selected Front Core/Channel API conversation, message, comment, search, update, and teammate readiness operations for support workflows."`, `"This package intentionally does not copy the old generated full Front Core/Channel API clone."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `id`: `"front-api-access"`; `label`: `"Front API token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: \[`"conversations:read"`, `"conversations:write"`, `"messages:send"`, `"messages:read"`, `"comments:write"`, `"comments:read"`, `"teammates:read"`\]; \}\] |
| <a id="property-directions"></a> `directions` | \[`"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"ticketing.front"` |
| <a id="property-limitations"></a> `limitations` | \[`"Inbox IDs, channel IDs, teammate assignment, tags, and message visibility are SDK-user configuration. Multipart attachments are rejected by JSON helpers and require SDK-user direct multipart handling."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementationStrategy`: `"direct-http-support-slice"`; `issue`: `35`; `sdkDecision`: \{ `candidates`: readonly \[`"front-sdk"`, `"Front Plugin SDK"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"front-sdk is deprecated and the official Plugin SDK is not a backend Core API client."`; `verdict`: `"not-adopted"`; \}; `supportSlice`: \{ `allowlistedOperations`: readonly \[`"messages.create"`, `"conversations.reply"`, `"conversations.read"`, `"conversations.update"`, `"conversations.search"`, `"conversation_messages.list"`, `"comments.create"`, `"comments.list"`, `"teammates.list"`\]; `source`: `"Front Core and Channel APIs"`; \}; \} |
| `metadata.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.issue` | `35` |
| `metadata.sdkDecision` | \{ `candidates`: readonly \[`"front-sdk"`, `"Front Plugin SDK"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"front-sdk is deprecated and the official Plugin SDK is not a backend Core API client."`; `verdict`: `"not-adopted"`; \} |
| `metadata.sdkDecision.candidates` | readonly \[`"front-sdk"`, `"Front Plugin SDK"`\] |
| `metadata.sdkDecision.checkedAt` | `"2026-06-21"` |
| `metadata.sdkDecision.reason` | `"front-sdk is deprecated and the official Plugin SDK is not a backend Core API client."` |
| `metadata.sdkDecision.verdict` | `"not-adopted"` |
| `metadata.supportSlice` | \{ `allowlistedOperations`: readonly \[`"messages.create"`, `"conversations.reply"`, `"conversations.read"`, `"conversations.update"`, `"conversations.search"`, `"conversation_messages.list"`, `"comments.create"`, `"comments.list"`, `"teammates.list"`\]; `source`: `"Front Core and Channel APIs"`; \} |
| `metadata.supportSlice.allowlistedOperations` | readonly \[`"messages.create"`, `"conversations.reply"`, `"conversations.read"`, `"conversations.update"`, `"conversations.search"`, `"conversation_messages.list"`, `"comments.create"`, `"comments.list"`, `"teammates.list"`\] |
| `metadata.supportSlice.source` | `"Front Core and Channel APIs"` |
| <a id="property-name"></a> `name` | `"Front"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /channels/{channel_id}/messages"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /conversations/{conversation_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PATCH /conversations/{conversation_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /conversations/search/{query}"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /conversations/{conversation_id}/messages"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.internalNote.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `providerObject`: `"internalNote"`; `providerOperation`: `"POST /conversations/{conversation_id}/comments"`; `sideEffect`: `true`; \}, \{ `alias`: `"front.message.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"frontMessage"`; `providerOperation`: `"GET /conversations/{conversation_id}/messages"`; \}, \{ `alias`: `"front.comment.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"frontComment"`; `providerOperation`: `"GET /conversations/{conversation_id}/comments"`; \}, \{ `alias`: `"front.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"frontTeammate"`; `providerOperation`: `"GET /teammates"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-ticketing-front"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Front conversations can contain customer messages, teammate comments, inbox routing, tags, links, and assignment context."`\] |
| <a id="property-provider"></a> `provider` | `"front"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
