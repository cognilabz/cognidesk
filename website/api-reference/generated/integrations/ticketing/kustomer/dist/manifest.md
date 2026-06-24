# integrations/ticketing/kustomer/dist/manifest

## Variables

### kustomerTicketingProviderManifest

```ts
const kustomerTicketingProviderManifest: {
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
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
      }, {
        kind: "kustomerDraft";
        label: "Kustomer Draft";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
      }, {
        kind: "kustomerDraft";
        label: "Kustomer Draft";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Kustomer developer portal";
        url: "https://developer.kustomer.com/";
      }, {
        label: "Kustomer REST APIs portal";
        url: "https://developer.kustomer.com/kustomer-api-docs/reference";
      }, {
        label: "Kustomer API keys";
        url: "https://help.kustomer.com/api-keys-SJs5YTIWX";
      }, {
        label: "Kustomer create message";
        url: "https://developer.kustomer.com/kustomer-api-docs/reference/createmessage";
     }];
     notes: ["SDK decision: Kustomer app/chat SDKs target Apps or Chat runtimes, not backend REST ticketing operations.", "Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows.", "This package intentionally does not copy the old generated full Kustomer public API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "kustomer-api-access";
     label: "Kustomer API access";
     metadata: {
        privilegeGuidance: "Kustomer API keys are governed by roles and API permissions; these strings are provider permission labels, not OAuth scopes.";
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: ["org.user.conversation.read", "org.user.conversation.write", "org.permission.conversation.create", "org.user.message.read", "org.user.message.write", "org.permission.message.create", "org.permission.draft.create"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.kustomer";
  limitations: ["Conversation model, queues, teams, custom objects, and message visibility are SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidates: readonly ["@kustomer/apps-client", "@kustomer/apps-server-sdk", "@kustomer/chat-react-native"];
        checkedAt: "2026-06-21";
        reason: "Kustomer SDK packages target app/chat runtimes rather than backend REST ticketing operations.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["conversations.create", "conversations.read", "conversations.update", "conversations.list", "messages.list", "messages.create", "customer_drafts.create"];
        source: "Kustomer REST API";
     };
  };
  name: "Kustomer";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /v1/conversations";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /v1/conversations/{conversation_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PATCH /v1/conversations/{conversation_id}";
     sideEffect: true;
   }, {
     alias: "ticket.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /v1/conversations";
   }, {
     alias: "ticket.comment.create";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticketComment";
     providerOperation: "POST /v1/messages";
     sideEffect: true;
   }, {
     alias: "kustomer.message.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "kustomerMessage";
     providerOperation: "GET /v1/messages";
   }, {
     alias: "kustomer.customerDraft.create";
     capability: "draft";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "kustomerDraft";
     providerOperation: "POST /v1/customers/{customer_id}/drafts";
     sideEffect: true;
   }, {
     alias: "kustomer.readiness";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "kustomerOrg";
     providerOperation: "GET /v1/messages";
  }];
  packageName: "@cognidesk/integration-ticketing-kustomer";
  privacyNotes: ["Kustomer conversations can include customer timeline data, messages, notes, tags, queue status, and custom objects."];
  provider: "kustomer";
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
| `capabilities` | \[\{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}, \{ `kind`: `"kustomerMessage"`; `label`: `"Kustomer Message"`; \}, \{ `kind`: `"kustomerDraft"`; `label`: `"Kustomer Draft"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}, \{ `kind`: `"kustomerMessage"`; `label`: `"Kustomer Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}, \{ `kind`: `"kustomerMessage"`; `label`: `"Kustomer Message"`; \}, \{ `kind`: `"kustomerDraft"`; `label`: `"Kustomer Draft"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Kustomer developer portal"`; `url`: `"https://developer.kustomer.com/"`; \}, \{ `label`: `"Kustomer REST APIs portal"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference"`; \}, \{ `label`: `"Kustomer API keys"`; `url`: `"https://help.kustomer.com/api-keys-SJs5YTIWX"`; \}, \{ `label`: `"Kustomer create message"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference/createmessage"`; \}\]; `notes`: \[`"SDK decision: Kustomer app/chat SDKs target Apps or Chat runtimes, not backend REST ticketing operations."`, `"Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows."`, `"This package intentionally does not copy the old generated full Kustomer public API clone."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Kustomer developer portal"`; `url`: `"https://developer.kustomer.com/"`; \}, \{ `label`: `"Kustomer REST APIs portal"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference"`; \}, \{ `label`: `"Kustomer API keys"`; `url`: `"https://help.kustomer.com/api-keys-SJs5YTIWX"`; \}, \{ `label`: `"Kustomer create message"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference/createmessage"`; \}\] |
| `coverage.notes` | \[`"SDK decision: Kustomer app/chat SDKs target Apps or Chat runtimes, not backend REST ticketing operations."`, `"Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows."`, `"This package intentionally does not copy the old generated full Kustomer public API clone."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `id`: `"kustomer-api-access"`; `label`: `"Kustomer API access"`; `metadata`: \{ `privilegeGuidance`: `"Kustomer API keys are governed by roles and API permissions; these strings are provider permission labels, not OAuth scopes."`; `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: \[`"org.user.conversation.read"`, `"org.user.conversation.write"`, `"org.permission.conversation.create"`, `"org.user.message.read"`, `"org.user.message.write"`, `"org.permission.message.create"`, `"org.permission.draft.create"`\]; \}\] |
| `directions` | \[`"bidirectional"`\] |
| `id` | `"ticketing.kustomer"` |
| `limitations` | \[`"Conversation model, queues, teams, custom objects, and message visibility are SDK-user configuration."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementationStrategy`: `"direct-http-support-slice"`; `issue`: `35`; `sdkDecision`: \{ `candidates`: readonly \[`"@kustomer/apps-client"`, `"@kustomer/apps-server-sdk"`, `"@kustomer/chat-react-native"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"Kustomer SDK packages target app/chat runtimes rather than backend REST ticketing operations."`; `verdict`: `"not-adopted"`; \}; `supportSlice`: \{ `allowlistedOperations`: readonly \[`"conversations.create"`, `"conversations.read"`, `"conversations.update"`, `"conversations.list"`, `"messages.list"`, `"messages.create"`, `"customer_drafts.create"`\]; `source`: `"Kustomer REST API"`; \}; \} |
| `metadata.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.issue` | `35` |
| `metadata.sdkDecision` | \{ `candidates`: readonly \[`"@kustomer/apps-client"`, `"@kustomer/apps-server-sdk"`, `"@kustomer/chat-react-native"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"Kustomer SDK packages target app/chat runtimes rather than backend REST ticketing operations."`; `verdict`: `"not-adopted"`; \} |
| `metadata.sdkDecision.candidates` | readonly \[`"@kustomer/apps-client"`, `"@kustomer/apps-server-sdk"`, `"@kustomer/chat-react-native"`\] |
| `metadata.sdkDecision.checkedAt` | `"2026-06-21"` |
| `metadata.sdkDecision.reason` | `"Kustomer SDK packages target app/chat runtimes rather than backend REST ticketing operations."` |
| `metadata.sdkDecision.verdict` | `"not-adopted"` |
| `metadata.supportSlice` | \{ `allowlistedOperations`: readonly \[`"conversations.create"`, `"conversations.read"`, `"conversations.update"`, `"conversations.list"`, `"messages.list"`, `"messages.create"`, `"customer_drafts.create"`\]; `source`: `"Kustomer REST API"`; \} |
| `metadata.supportSlice.allowlistedOperations` | readonly \[`"conversations.create"`, `"conversations.read"`, `"conversations.update"`, `"conversations.list"`, `"messages.list"`, `"messages.create"`, `"customer_drafts.create"`\] |
| `metadata.supportSlice.source` | `"Kustomer REST API"` |
| `name` | `"Kustomer"` |
| `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /v1/conversations"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /v1/conversations/{conversation_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PATCH /v1/conversations/{conversation_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /v1/conversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /v1/messages"`; `sideEffect`: `true`; \}, \{ `alias`: `"kustomer.message.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"kustomerMessage"`; `providerOperation`: `"GET /v1/messages"`; \}, \{ `alias`: `"kustomer.customerDraft.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"kustomerDraft"`; `providerOperation`: `"POST /v1/customers/{customer_id}/drafts"`; `sideEffect`: `true`; \}, \{ `alias`: `"kustomer.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"kustomerOrg"`; `providerOperation`: `"GET /v1/messages"`; \}\] |
| `packageName` | `"@cognidesk/integration-ticketing-kustomer"` |
| `privacyNotes` | \[`"Kustomer conversations can include customer timeline data, messages, notes, tags, queue status, and custom objects."`\] |
| `provider` | `"kustomer"` |
| `trustLevel` | `"official"` |

***

### kustomerTicketingProviderManifestInput

```ts
const kustomerTicketingProviderManifestInput: {
  capabilities: [{
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
      }, {
        kind: "kustomerDraft";
        label: "Kustomer Draft";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
      }, {
        kind: "kustomerDraft";
        label: "Kustomer Draft";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Kustomer developer portal";
        url: "https://developer.kustomer.com/";
      }, {
        label: "Kustomer REST APIs portal";
        url: "https://developer.kustomer.com/kustomer-api-docs/reference";
      }, {
        label: "Kustomer API keys";
        url: "https://help.kustomer.com/api-keys-SJs5YTIWX";
      }, {
        label: "Kustomer create message";
        url: "https://developer.kustomer.com/kustomer-api-docs/reference/createmessage";
     }];
     notes: ["SDK decision: Kustomer app/chat SDKs target Apps or Chat runtimes, not backend REST ticketing operations.", "Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows.", "This package intentionally does not copy the old generated full Kustomer public API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "kustomer-api-access";
     label: "Kustomer API access";
     metadata: {
        privilegeGuidance: "Kustomer API keys are governed by roles and API permissions; these strings are provider permission labels, not OAuth scopes.";
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: ["org.user.conversation.read", "org.user.conversation.write", "org.permission.conversation.create", "org.user.message.read", "org.user.message.write", "org.permission.message.create", "org.permission.draft.create"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.kustomer";
  limitations: ["Conversation model, queues, teams, custom objects, and message visibility are SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidates: readonly ["@kustomer/apps-client", "@kustomer/apps-server-sdk", "@kustomer/chat-react-native"];
        checkedAt: "2026-06-21";
        reason: "Kustomer SDK packages target app/chat runtimes rather than backend REST ticketing operations.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["conversations.create", "conversations.read", "conversations.update", "conversations.list", "messages.list", "messages.create", "customer_drafts.create"];
        source: "Kustomer REST API";
     };
  };
  name: "Kustomer";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /v1/conversations";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /v1/conversations/{conversation_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PATCH /v1/conversations/{conversation_id}";
     sideEffect: true;
   }, {
     alias: "ticket.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /v1/conversations";
   }, {
     alias: "ticket.comment.create";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticketComment";
     providerOperation: "POST /v1/messages";
     sideEffect: true;
   }, {
     alias: "kustomer.message.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "kustomerMessage";
     providerOperation: "GET /v1/messages";
   }, {
     alias: "kustomer.customerDraft.create";
     capability: "draft";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "kustomerDraft";
     providerOperation: "POST /v1/customers/{customer_id}/drafts";
     sideEffect: true;
   }, {
     alias: "kustomer.readiness";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "kustomerOrg";
     providerOperation: "GET /v1/messages";
  }];
  packageName: "@cognidesk/integration-ticketing-kustomer";
  privacyNotes: ["Kustomer conversations can include customer timeline data, messages, notes, tags, queue status, and custom objects."];
  provider: "kustomer";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}, \{ `kind`: `"kustomerMessage"`; `label`: `"Kustomer Message"`; \}, \{ `kind`: `"kustomerDraft"`; `label`: `"Kustomer Draft"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}, \{ `kind`: `"kustomerMessage"`; `label`: `"Kustomer Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}, \{ `kind`: `"kustomerMessage"`; `label`: `"Kustomer Message"`; \}, \{ `kind`: `"kustomerDraft"`; `label`: `"Kustomer Draft"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"ticketing"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Kustomer developer portal"`; `url`: `"https://developer.kustomer.com/"`; \}, \{ `label`: `"Kustomer REST APIs portal"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference"`; \}, \{ `label`: `"Kustomer API keys"`; `url`: `"https://help.kustomer.com/api-keys-SJs5YTIWX"`; \}, \{ `label`: `"Kustomer create message"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference/createmessage"`; \}\]; `notes`: \[`"SDK decision: Kustomer app/chat SDKs target Apps or Chat runtimes, not backend REST ticketing operations."`, `"Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows."`, `"This package intentionally does not copy the old generated full Kustomer public API clone."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Kustomer developer portal"`; `url`: `"https://developer.kustomer.com/"`; \}, \{ `label`: `"Kustomer REST APIs portal"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference"`; \}, \{ `label`: `"Kustomer API keys"`; `url`: `"https://help.kustomer.com/api-keys-SJs5YTIWX"`; \}, \{ `label`: `"Kustomer create message"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference/createmessage"`; \}\] |
| `coverage.notes` | \[`"SDK decision: Kustomer app/chat SDKs target Apps or Chat runtimes, not backend REST ticketing operations."`, `"Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows."`, `"This package intentionally does not copy the old generated full Kustomer public API clone."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `id`: `"kustomer-api-access"`; `label`: `"Kustomer API access"`; `metadata`: \{ `privilegeGuidance`: `"Kustomer API keys are governed by roles and API permissions; these strings are provider permission labels, not OAuth scopes."`; `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: \[`"org.user.conversation.read"`, `"org.user.conversation.write"`, `"org.permission.conversation.create"`, `"org.user.message.read"`, `"org.user.message.write"`, `"org.permission.message.create"`, `"org.permission.draft.create"`\]; \}\] |
| <a id="property-directions"></a> `directions` | \[`"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"ticketing.kustomer"` |
| <a id="property-limitations"></a> `limitations` | \[`"Conversation model, queues, teams, custom objects, and message visibility are SDK-user configuration."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementationStrategy`: `"direct-http-support-slice"`; `issue`: `35`; `sdkDecision`: \{ `candidates`: readonly \[`"@kustomer/apps-client"`, `"@kustomer/apps-server-sdk"`, `"@kustomer/chat-react-native"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"Kustomer SDK packages target app/chat runtimes rather than backend REST ticketing operations."`; `verdict`: `"not-adopted"`; \}; `supportSlice`: \{ `allowlistedOperations`: readonly \[`"conversations.create"`, `"conversations.read"`, `"conversations.update"`, `"conversations.list"`, `"messages.list"`, `"messages.create"`, `"customer_drafts.create"`\]; `source`: `"Kustomer REST API"`; \}; \} |
| `metadata.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.issue` | `35` |
| `metadata.sdkDecision` | \{ `candidates`: readonly \[`"@kustomer/apps-client"`, `"@kustomer/apps-server-sdk"`, `"@kustomer/chat-react-native"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"Kustomer SDK packages target app/chat runtimes rather than backend REST ticketing operations."`; `verdict`: `"not-adopted"`; \} |
| `metadata.sdkDecision.candidates` | readonly \[`"@kustomer/apps-client"`, `"@kustomer/apps-server-sdk"`, `"@kustomer/chat-react-native"`\] |
| `metadata.sdkDecision.checkedAt` | `"2026-06-21"` |
| `metadata.sdkDecision.reason` | `"Kustomer SDK packages target app/chat runtimes rather than backend REST ticketing operations."` |
| `metadata.sdkDecision.verdict` | `"not-adopted"` |
| `metadata.supportSlice` | \{ `allowlistedOperations`: readonly \[`"conversations.create"`, `"conversations.read"`, `"conversations.update"`, `"conversations.list"`, `"messages.list"`, `"messages.create"`, `"customer_drafts.create"`\]; `source`: `"Kustomer REST API"`; \} |
| `metadata.supportSlice.allowlistedOperations` | readonly \[`"conversations.create"`, `"conversations.read"`, `"conversations.update"`, `"conversations.list"`, `"messages.list"`, `"messages.create"`, `"customer_drafts.create"`\] |
| `metadata.supportSlice.source` | `"Kustomer REST API"` |
| <a id="property-name"></a> `name` | `"Kustomer"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /v1/conversations"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /v1/conversations/{conversation_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PATCH /v1/conversations/{conversation_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /v1/conversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /v1/messages"`; `sideEffect`: `true`; \}, \{ `alias`: `"kustomer.message.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"kustomerMessage"`; `providerOperation`: `"GET /v1/messages"`; \}, \{ `alias`: `"kustomer.customerDraft.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"kustomerDraft"`; `providerOperation`: `"POST /v1/customers/{customer_id}/drafts"`; `sideEffect`: `true`; \}, \{ `alias`: `"kustomer.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"kustomerOrg"`; `providerOperation`: `"GET /v1/messages"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-ticketing-kustomer"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Kustomer conversations can include customer timeline data, messages, notes, tags, queue status, and custom objects."`\] |
| <a id="property-provider"></a> `provider` | `"kustomer"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
