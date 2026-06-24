# integrations/ticketing/help-scout/dist/manifest

## Variables

### helpScoutTicketingProviderManifest

```ts
const helpScoutTicketingProviderManifest: {
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
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
      }, {
        kind: "helpScoutReplyThread";
        label: "Help Scout Reply Thread";
      }, {
        kind: "helpScoutNoteThread";
        label: "Help Scout Note Thread";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
      }, {
        kind: "helpScoutReplyThread";
        label: "Help Scout Reply Thread";
      }, {
        kind: "helpScoutNoteThread";
        label: "Help Scout Note Thread";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Help Scout JavaScript SDK";
        url: "https://developer.helpscout.com/apps/javascript-sdk/";
      }, {
        label: "Help Scout open-source clients";
        url: "https://developer.helpscout.com/open-source/";
      }, {
        label: "Help Scout Inbox API";
        url: "https://developer.helpscout.com/mailbox-api/";
     }];
     notes: ["SDK decision: Help Scout's official JavaScript SDK is for Apps UI context, not a backend Inbox API client.", "Coverage is limited to Help Scout Inbox API conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "help-scout-api-access";
     label: "Help Scout OAuth access";
     required: true;
  }];
  directions: ["bidirectional"];
  id: "ticketing.help-scout";
  limitations: ["Mailbox IDs, thread types, assignment, workflow rules, and customer visibility are SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidates: readonly ["@helpscout/javascript-sdk"];
        checkedAt: "2026-06-21";
        reason: "The official JavaScript SDK targets Help Scout Apps UI, not backend Inbox API operations.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["conversations.create", "conversations.read", "conversations.update", "conversations.list", "threads.list", "reply.create", "note.create", "mailboxes.list"];
        source: "Help Scout Inbox API";
     };
  };
  name: "Help Scout";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /v2/conversations";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /v2/conversations/{conversation_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PATCH /v2/conversations/{conversation_id}";
     sideEffect: true;
   }, {
     alias: "ticket.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /v2/conversations";
   }, {
     alias: "ticket.comment.create";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticketComment";
     providerOperation: "POST /v2/conversations/{conversation_id}/reply";
     sideEffect: true;
   }, {
     alias: "ticket.internalNote.create";
     capability: "draft";
     exposesSensitiveData: true;
     providerObject: "internalNote";
     providerOperation: "POST /v2/conversations/{conversation_id}/notes";
     sideEffect: true;
   }, {
     alias: "help-scout.thread.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "helpScoutThread";
     providerOperation: "GET /v2/conversations/{conversation_id}/threads";
   }, {
     alias: "help-scout.readiness";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "helpScoutMailbox";
     providerOperation: "GET /v2/mailboxes";
  }];
  packageName: "@cognidesk/integration-ticketing-help-scout";
  privacyNotes: ["Help Scout conversations can include customer identity, mailbox threads, notes, tags, custom fields, and assignments."];
  provider: "help-scout";
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
| `capabilities` | \[\{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"helpScoutConversation"`; `label`: `"Help Scout Conversation"`; \}, \{ `kind`: `"helpScoutReplyThread"`; `label`: `"Help Scout Reply Thread"`; \}, \{ `kind`: `"helpScoutNoteThread"`; `label`: `"Help Scout Note Thread"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"helpScoutConversation"`; `label`: `"Help Scout Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"helpScoutConversation"`; `label`: `"Help Scout Conversation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"helpScoutConversation"`; `label`: `"Help Scout Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"helpScoutConversation"`; `label`: `"Help Scout Conversation"`; \}, \{ `kind`: `"helpScoutReplyThread"`; `label`: `"Help Scout Reply Thread"`; \}, \{ `kind`: `"helpScoutNoteThread"`; `label`: `"Help Scout Note Thread"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Help Scout JavaScript SDK"`; `url`: `"https://developer.helpscout.com/apps/javascript-sdk/"`; \}, \{ `label`: `"Help Scout open-source clients"`; `url`: `"https://developer.helpscout.com/open-source/"`; \}, \{ `label`: `"Help Scout Inbox API"`; `url`: `"https://developer.helpscout.com/mailbox-api/"`; \}\]; `notes`: \[`"SDK decision: Help Scout's official JavaScript SDK is for Apps UI context, not a backend Inbox API client."`, `"Coverage is limited to Help Scout Inbox API conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Help Scout JavaScript SDK"`; `url`: `"https://developer.helpscout.com/apps/javascript-sdk/"`; \}, \{ `label`: `"Help Scout open-source clients"`; `url`: `"https://developer.helpscout.com/open-source/"`; \}, \{ `label`: `"Help Scout Inbox API"`; `url`: `"https://developer.helpscout.com/mailbox-api/"`; \}\] |
| `coverage.notes` | \[`"SDK decision: Help Scout's official JavaScript SDK is for Apps UI context, not a backend Inbox API client."`, `"Coverage is limited to Help Scout Inbox API conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `id`: `"help-scout-api-access"`; `label`: `"Help Scout OAuth access"`; `required`: `true`; \}\] |
| `directions` | \[`"bidirectional"`\] |
| `id` | `"ticketing.help-scout"` |
| `limitations` | \[`"Mailbox IDs, thread types, assignment, workflow rules, and customer visibility are SDK-user configuration."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementationStrategy`: `"direct-http-support-slice"`; `issue`: `35`; `sdkDecision`: \{ `candidates`: readonly \[`"@helpscout/javascript-sdk"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"The official JavaScript SDK targets Help Scout Apps UI, not backend Inbox API operations."`; `verdict`: `"not-adopted"`; \}; `supportSlice`: \{ `allowlistedOperations`: readonly \[`"conversations.create"`, `"conversations.read"`, `"conversations.update"`, `"conversations.list"`, `"threads.list"`, `"reply.create"`, `"note.create"`, `"mailboxes.list"`\]; `source`: `"Help Scout Inbox API"`; \}; \} |
| `metadata.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.issue` | `35` |
| `metadata.sdkDecision` | \{ `candidates`: readonly \[`"@helpscout/javascript-sdk"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"The official JavaScript SDK targets Help Scout Apps UI, not backend Inbox API operations."`; `verdict`: `"not-adopted"`; \} |
| `metadata.sdkDecision.candidates` | readonly \[`"@helpscout/javascript-sdk"`\] |
| `metadata.sdkDecision.checkedAt` | `"2026-06-21"` |
| `metadata.sdkDecision.reason` | `"The official JavaScript SDK targets Help Scout Apps UI, not backend Inbox API operations."` |
| `metadata.sdkDecision.verdict` | `"not-adopted"` |
| `metadata.supportSlice` | \{ `allowlistedOperations`: readonly \[`"conversations.create"`, `"conversations.read"`, `"conversations.update"`, `"conversations.list"`, `"threads.list"`, `"reply.create"`, `"note.create"`, `"mailboxes.list"`\]; `source`: `"Help Scout Inbox API"`; \} |
| `metadata.supportSlice.allowlistedOperations` | readonly \[`"conversations.create"`, `"conversations.read"`, `"conversations.update"`, `"conversations.list"`, `"threads.list"`, `"reply.create"`, `"note.create"`, `"mailboxes.list"`\] |
| `metadata.supportSlice.source` | `"Help Scout Inbox API"` |
| `name` | `"Help Scout"` |
| `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /v2/conversations"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /v2/conversations/{conversation_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PATCH /v2/conversations/{conversation_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /v2/conversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /v2/conversations/{conversation_id}/reply"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.internalNote.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `providerObject`: `"internalNote"`; `providerOperation`: `"POST /v2/conversations/{conversation_id}/notes"`; `sideEffect`: `true`; \}, \{ `alias`: `"help-scout.thread.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"helpScoutThread"`; `providerOperation`: `"GET /v2/conversations/{conversation_id}/threads"`; \}, \{ `alias`: `"help-scout.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"helpScoutMailbox"`; `providerOperation`: `"GET /v2/mailboxes"`; \}\] |
| `packageName` | `"@cognidesk/integration-ticketing-help-scout"` |
| `privacyNotes` | \[`"Help Scout conversations can include customer identity, mailbox threads, notes, tags, custom fields, and assignments."`\] |
| `provider` | `"help-scout"` |
| `trustLevel` | `"official"` |

***

### helpScoutTicketingProviderManifestInput

```ts
const helpScoutTicketingProviderManifestInput: {
  capabilities: [{
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
      }, {
        kind: "helpScoutReplyThread";
        label: "Help Scout Reply Thread";
      }, {
        kind: "helpScoutNoteThread";
        label: "Help Scout Note Thread";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "helpScoutConversation";
        label: "Help Scout Conversation";
      }, {
        kind: "helpScoutReplyThread";
        label: "Help Scout Reply Thread";
      }, {
        kind: "helpScoutNoteThread";
        label: "Help Scout Note Thread";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Help Scout JavaScript SDK";
        url: "https://developer.helpscout.com/apps/javascript-sdk/";
      }, {
        label: "Help Scout open-source clients";
        url: "https://developer.helpscout.com/open-source/";
      }, {
        label: "Help Scout Inbox API";
        url: "https://developer.helpscout.com/mailbox-api/";
     }];
     notes: ["SDK decision: Help Scout's official JavaScript SDK is for Apps UI context, not a backend Inbox API client.", "Coverage is limited to Help Scout Inbox API conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "help-scout-api-access";
     label: "Help Scout OAuth access";
     required: true;
  }];
  directions: ["bidirectional"];
  id: "ticketing.help-scout";
  limitations: ["Mailbox IDs, thread types, assignment, workflow rules, and customer visibility are SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementationStrategy: "direct-http-support-slice";
     issue: 35;
     sdkDecision: {
        candidates: readonly ["@helpscout/javascript-sdk"];
        checkedAt: "2026-06-21";
        reason: "The official JavaScript SDK targets Help Scout Apps UI, not backend Inbox API operations.";
        verdict: "not-adopted";
     };
     supportSlice: {
        allowlistedOperations: readonly ["conversations.create", "conversations.read", "conversations.update", "conversations.list", "threads.list", "reply.create", "note.create", "mailboxes.list"];
        source: "Help Scout Inbox API";
     };
  };
  name: "Help Scout";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /v2/conversations";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /v2/conversations/{conversation_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PATCH /v2/conversations/{conversation_id}";
     sideEffect: true;
   }, {
     alias: "ticket.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /v2/conversations";
   }, {
     alias: "ticket.comment.create";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticketComment";
     providerOperation: "POST /v2/conversations/{conversation_id}/reply";
     sideEffect: true;
   }, {
     alias: "ticket.internalNote.create";
     capability: "draft";
     exposesSensitiveData: true;
     providerObject: "internalNote";
     providerOperation: "POST /v2/conversations/{conversation_id}/notes";
     sideEffect: true;
   }, {
     alias: "help-scout.thread.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "helpScoutThread";
     providerOperation: "GET /v2/conversations/{conversation_id}/threads";
   }, {
     alias: "help-scout.readiness";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "helpScoutMailbox";
     providerOperation: "GET /v2/mailboxes";
  }];
  packageName: "@cognidesk/integration-ticketing-help-scout";
  privacyNotes: ["Help Scout conversations can include customer identity, mailbox threads, notes, tags, custom fields, and assignments."];
  provider: "help-scout";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"helpScoutConversation"`; `label`: `"Help Scout Conversation"`; \}, \{ `kind`: `"helpScoutReplyThread"`; `label`: `"Help Scout Reply Thread"`; \}, \{ `kind`: `"helpScoutNoteThread"`; `label`: `"Help Scout Note Thread"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"helpScoutConversation"`; `label`: `"Help Scout Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"helpScoutConversation"`; `label`: `"Help Scout Conversation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"helpScoutConversation"`; `label`: `"Help Scout Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"helpScoutConversation"`; `label`: `"Help Scout Conversation"`; \}, \{ `kind`: `"helpScoutReplyThread"`; `label`: `"Help Scout Reply Thread"`; \}, \{ `kind`: `"helpScoutNoteThread"`; `label`: `"Help Scout Note Thread"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"ticketing"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Help Scout JavaScript SDK"`; `url`: `"https://developer.helpscout.com/apps/javascript-sdk/"`; \}, \{ `label`: `"Help Scout open-source clients"`; `url`: `"https://developer.helpscout.com/open-source/"`; \}, \{ `label`: `"Help Scout Inbox API"`; `url`: `"https://developer.helpscout.com/mailbox-api/"`; \}\]; `notes`: \[`"SDK decision: Help Scout's official JavaScript SDK is for Apps UI context, not a backend Inbox API client."`, `"Coverage is limited to Help Scout Inbox API conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Help Scout JavaScript SDK"`; `url`: `"https://developer.helpscout.com/apps/javascript-sdk/"`; \}, \{ `label`: `"Help Scout open-source clients"`; `url`: `"https://developer.helpscout.com/open-source/"`; \}, \{ `label`: `"Help Scout Inbox API"`; `url`: `"https://developer.helpscout.com/mailbox-api/"`; \}\] |
| `coverage.notes` | \[`"SDK decision: Help Scout's official JavaScript SDK is for Apps UI context, not a backend Inbox API client."`, `"Coverage is limited to Help Scout Inbox API conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `id`: `"help-scout-api-access"`; `label`: `"Help Scout OAuth access"`; `required`: `true`; \}\] |
| <a id="property-directions"></a> `directions` | \[`"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"ticketing.help-scout"` |
| <a id="property-limitations"></a> `limitations` | \[`"Mailbox IDs, thread types, assignment, workflow rules, and customer visibility are SDK-user configuration."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementationStrategy`: `"direct-http-support-slice"`; `issue`: `35`; `sdkDecision`: \{ `candidates`: readonly \[`"@helpscout/javascript-sdk"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"The official JavaScript SDK targets Help Scout Apps UI, not backend Inbox API operations."`; `verdict`: `"not-adopted"`; \}; `supportSlice`: \{ `allowlistedOperations`: readonly \[`"conversations.create"`, `"conversations.read"`, `"conversations.update"`, `"conversations.list"`, `"threads.list"`, `"reply.create"`, `"note.create"`, `"mailboxes.list"`\]; `source`: `"Help Scout Inbox API"`; \}; \} |
| `metadata.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.issue` | `35` |
| `metadata.sdkDecision` | \{ `candidates`: readonly \[`"@helpscout/javascript-sdk"`\]; `checkedAt`: `"2026-06-21"`; `reason`: `"The official JavaScript SDK targets Help Scout Apps UI, not backend Inbox API operations."`; `verdict`: `"not-adopted"`; \} |
| `metadata.sdkDecision.candidates` | readonly \[`"@helpscout/javascript-sdk"`\] |
| `metadata.sdkDecision.checkedAt` | `"2026-06-21"` |
| `metadata.sdkDecision.reason` | `"The official JavaScript SDK targets Help Scout Apps UI, not backend Inbox API operations."` |
| `metadata.sdkDecision.verdict` | `"not-adopted"` |
| `metadata.supportSlice` | \{ `allowlistedOperations`: readonly \[`"conversations.create"`, `"conversations.read"`, `"conversations.update"`, `"conversations.list"`, `"threads.list"`, `"reply.create"`, `"note.create"`, `"mailboxes.list"`\]; `source`: `"Help Scout Inbox API"`; \} |
| `metadata.supportSlice.allowlistedOperations` | readonly \[`"conversations.create"`, `"conversations.read"`, `"conversations.update"`, `"conversations.list"`, `"threads.list"`, `"reply.create"`, `"note.create"`, `"mailboxes.list"`\] |
| `metadata.supportSlice.source` | `"Help Scout Inbox API"` |
| <a id="property-name"></a> `name` | `"Help Scout"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /v2/conversations"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /v2/conversations/{conversation_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PATCH /v2/conversations/{conversation_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /v2/conversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /v2/conversations/{conversation_id}/reply"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.internalNote.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `providerObject`: `"internalNote"`; `providerOperation`: `"POST /v2/conversations/{conversation_id}/notes"`; `sideEffect`: `true`; \}, \{ `alias`: `"help-scout.thread.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"helpScoutThread"`; `providerOperation`: `"GET /v2/conversations/{conversation_id}/threads"`; \}, \{ `alias`: `"help-scout.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"helpScoutMailbox"`; `providerOperation`: `"GET /v2/mailboxes"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-ticketing-help-scout"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Help Scout conversations can include customer identity, mailbox threads, notes, tags, custom fields, and assignments."`\] |
| <a id="property-provider"></a> `provider` | `"help-scout"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
