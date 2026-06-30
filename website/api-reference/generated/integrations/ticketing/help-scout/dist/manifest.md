# integrations/ticketing/help-scout/dist/manifest

## Variables

### helpScoutHostClientSupportSlice

```ts
const helpScoutHostClientSupportSlice: {
  adapterKind: "no-official-sdk-rest-adapter";
  allowedOperations: readonly [{
     alias: "ticket.create";
     id: "conversations.create";
     source: "provider-rest-adapter";
     target: "restAdapter.createConversation";
   }, {
     alias: "ticket.read";
     id: "conversations.read";
     source: "provider-rest-adapter";
     target: "restAdapter.getConversation";
   }, {
     alias: "ticket.update";
     id: "conversations.update";
     source: "provider-rest-adapter";
     target: "restAdapter.updateConversation";
   }, {
     alias: "ticket.search";
     id: "conversations.list";
     source: "provider-rest-adapter";
     target: "restAdapter.listConversations";
   }, {
     alias: "ticket.comment.create";
     id: "reply.create";
     source: "provider-rest-adapter";
     target: "restAdapter.createReply";
   }, {
     alias: "ticket.internalNote.create";
     id: "note.create";
     source: "provider-rest-adapter";
     target: "restAdapter.createNote";
   }, {
     alias: "help-scout.thread.list";
     id: "threads.list";
     source: "provider-rest-adapter";
     target: "restAdapter.listThreads";
   }, {
     alias: "help-scout.readiness";
     id: "mailboxes.list";
     source: "provider-rest-adapter";
     target: "restAdapter.readiness";
  }];
  defaultHttpClient: "providerJsonRequest";
  packageOwnedRestClient: true;
  providerClientOverride: true;
  providerSdkDecision: "no-official-sdk-rest-adapter";
  sdkEvaluation: {
     candidates: readonly [{
        checkedVersion: "0.10.0";
        package: "@helpscout/javascript-sdk";
        reason: "Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations.";
        result: "not-runtime-inbox-api-client";
      }, {
        checkedVersion: "0.0.1";
        package: "helpscout";
        reason: "Community Node wrapper; not listed by Help Scout as an official supported Inbox API client.";
        result: "rejected-unofficial-legacy";
      }, {
        checkedVersion: "0.0.2";
        package: "helpscout-v2";
        reason: "Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK.";
        result: "rejected-unofficial";
      }, {
        checkedVersion: "0.1.2";
        package: "@bufferapp/helpscout";
        reason: "Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK.";
        result: "rejected-unofficial-legacy";
     }];
     checkedAt: "2026-06-25";
     requiredRuntimeSurface: "server-side Help Scout Inbox API 2.0 ticketing client";
     result: "no-official-maintained-runtime-sdk";
  };
  strategy: "provider-rest-adapter";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind"></a> `adapterKind` | `"no-official-sdk-rest-adapter"` |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"reply.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createReply"`; \}, \{ `alias`: `"ticket.internalNote.create"`; `id`: `"note.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createNote"`; \}, \{ `alias`: `"help-scout.thread.list"`; `id`: `"threads.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listThreads"`; \}, \{ `alias`: `"help-scout.readiness"`; `id`: `"mailboxes.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\] |
| <a id="property-defaulthttpclient"></a> `defaultHttpClient` | `"providerJsonRequest"` |
| <a id="property-packageownedrestclient"></a> `packageOwnedRestClient` | `true` |
| <a id="property-providerclientoverride"></a> `providerClientOverride` | `true` |
| <a id="property-providersdkdecision"></a> `providerSdkDecision` | `"no-official-sdk-rest-adapter"` |
| <a id="property-sdkevaluation"></a> `sdkEvaluation` | \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.10.0"`; `package`: `"@helpscout/javascript-sdk"`; `reason`: `"Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations."`; `result`: `"not-runtime-inbox-api-client"`; \}, \{ `checkedVersion`: `"0.0.1"`; `package`: `"helpscout"`; `reason`: `"Community Node wrapper; not listed by Help Scout as an official supported Inbox API client."`; `result`: `"rejected-unofficial-legacy"`; \}, \{ `checkedVersion`: `"0.0.2"`; `package`: `"helpscout-v2"`; `reason`: `"Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK."`; `result`: `"rejected-unofficial"`; \}, \{ `checkedVersion`: `"0.1.2"`; `package`: `"@bufferapp/helpscout"`; `reason`: `"Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK."`; `result`: `"rejected-unofficial-legacy"`; \}\]; `checkedAt`: `"2026-06-25"`; `requiredRuntimeSurface`: `"server-side Help Scout Inbox API 2.0 ticketing client"`; `result`: `"no-official-maintained-runtime-sdk"`; \} |
| `sdkEvaluation.candidates` | readonly \[\{ `checkedVersion`: `"0.10.0"`; `package`: `"@helpscout/javascript-sdk"`; `reason`: `"Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations."`; `result`: `"not-runtime-inbox-api-client"`; \}, \{ `checkedVersion`: `"0.0.1"`; `package`: `"helpscout"`; `reason`: `"Community Node wrapper; not listed by Help Scout as an official supported Inbox API client."`; `result`: `"rejected-unofficial-legacy"`; \}, \{ `checkedVersion`: `"0.0.2"`; `package`: `"helpscout-v2"`; `reason`: `"Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK."`; `result`: `"rejected-unofficial"`; \}, \{ `checkedVersion`: `"0.1.2"`; `package`: `"@bufferapp/helpscout"`; `reason`: `"Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK."`; `result`: `"rejected-unofficial-legacy"`; \}\] |
| `sdkEvaluation.checkedAt` | `"2026-06-25"` |
| `sdkEvaluation.requiredRuntimeSurface` | `"server-side Help Scout Inbox API 2.0 ticketing client"` |
| `sdkEvaluation.result` | `"no-official-maintained-runtime-sdk"` |
| <a id="property-strategy"></a> `strategy` | `"provider-rest-adapter"` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-25"` |

***

### helpScoutSupportSlice

```ts
const helpScoutSupportSlice: {
  adapterKind: "no-official-sdk-rest-adapter";
  allowedOperations: readonly [{
     alias: "ticket.create";
     id: "conversations.create";
     source: "provider-rest-adapter";
     target: "restAdapter.createConversation";
   }, {
     alias: "ticket.read";
     id: "conversations.read";
     source: "provider-rest-adapter";
     target: "restAdapter.getConversation";
   }, {
     alias: "ticket.update";
     id: "conversations.update";
     source: "provider-rest-adapter";
     target: "restAdapter.updateConversation";
   }, {
     alias: "ticket.search";
     id: "conversations.list";
     source: "provider-rest-adapter";
     target: "restAdapter.listConversations";
   }, {
     alias: "ticket.comment.create";
     id: "reply.create";
     source: "provider-rest-adapter";
     target: "restAdapter.createReply";
   }, {
     alias: "ticket.internalNote.create";
     id: "note.create";
     source: "provider-rest-adapter";
     target: "restAdapter.createNote";
   }, {
     alias: "help-scout.thread.list";
     id: "threads.list";
     source: "provider-rest-adapter";
     target: "restAdapter.listThreads";
   }, {
     alias: "help-scout.readiness";
     id: "mailboxes.list";
     source: "provider-rest-adapter";
     target: "restAdapter.readiness";
  }];
  defaultHttpClient: "providerJsonRequest";
  packageOwnedRestClient: true;
  providerClientOverride: true;
  providerSdkDecision: "no-official-sdk-rest-adapter";
  sdkEvaluation: {
     candidates: readonly [{
        checkedVersion: "0.10.0";
        package: "@helpscout/javascript-sdk";
        reason: "Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations.";
        result: "not-runtime-inbox-api-client";
      }, {
        checkedVersion: "0.0.1";
        package: "helpscout";
        reason: "Community Node wrapper; not listed by Help Scout as an official supported Inbox API client.";
        result: "rejected-unofficial-legacy";
      }, {
        checkedVersion: "0.0.2";
        package: "helpscout-v2";
        reason: "Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK.";
        result: "rejected-unofficial";
      }, {
        checkedVersion: "0.1.2";
        package: "@bufferapp/helpscout";
        reason: "Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK.";
        result: "rejected-unofficial-legacy";
     }];
     checkedAt: "2026-06-25";
     requiredRuntimeSurface: "server-side Help Scout Inbox API 2.0 ticketing client";
     result: "no-official-maintained-runtime-sdk";
  };
  strategy: "provider-rest-adapter";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind-1"></a> `adapterKind` | `"no-official-sdk-rest-adapter"` |
| <a id="property-allowedoperations-1"></a> `allowedOperations` | readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"reply.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createReply"`; \}, \{ `alias`: `"ticket.internalNote.create"`; `id`: `"note.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createNote"`; \}, \{ `alias`: `"help-scout.thread.list"`; `id`: `"threads.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listThreads"`; \}, \{ `alias`: `"help-scout.readiness"`; `id`: `"mailboxes.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\] |
| <a id="property-defaulthttpclient-1"></a> `defaultHttpClient` | `"providerJsonRequest"` |
| <a id="property-packageownedrestclient-1"></a> `packageOwnedRestClient` | `true` |
| <a id="property-providerclientoverride-1"></a> `providerClientOverride` | `true` |
| <a id="property-providersdkdecision-1"></a> `providerSdkDecision` | `"no-official-sdk-rest-adapter"` |
| <a id="property-sdkevaluation-1"></a> `sdkEvaluation` | \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.10.0"`; `package`: `"@helpscout/javascript-sdk"`; `reason`: `"Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations."`; `result`: `"not-runtime-inbox-api-client"`; \}, \{ `checkedVersion`: `"0.0.1"`; `package`: `"helpscout"`; `reason`: `"Community Node wrapper; not listed by Help Scout as an official supported Inbox API client."`; `result`: `"rejected-unofficial-legacy"`; \}, \{ `checkedVersion`: `"0.0.2"`; `package`: `"helpscout-v2"`; `reason`: `"Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK."`; `result`: `"rejected-unofficial"`; \}, \{ `checkedVersion`: `"0.1.2"`; `package`: `"@bufferapp/helpscout"`; `reason`: `"Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK."`; `result`: `"rejected-unofficial-legacy"`; \}\]; `checkedAt`: `"2026-06-25"`; `requiredRuntimeSurface`: `"server-side Help Scout Inbox API 2.0 ticketing client"`; `result`: `"no-official-maintained-runtime-sdk"`; \} |
| `sdkEvaluation.candidates` | readonly \[\{ `checkedVersion`: `"0.10.0"`; `package`: `"@helpscout/javascript-sdk"`; `reason`: `"Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations."`; `result`: `"not-runtime-inbox-api-client"`; \}, \{ `checkedVersion`: `"0.0.1"`; `package`: `"helpscout"`; `reason`: `"Community Node wrapper; not listed by Help Scout as an official supported Inbox API client."`; `result`: `"rejected-unofficial-legacy"`; \}, \{ `checkedVersion`: `"0.0.2"`; `package`: `"helpscout-v2"`; `reason`: `"Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK."`; `result`: `"rejected-unofficial"`; \}, \{ `checkedVersion`: `"0.1.2"`; `package`: `"@bufferapp/helpscout"`; `reason`: `"Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK."`; `result`: `"rejected-unofficial-legacy"`; \}\] |
| `sdkEvaluation.checkedAt` | `"2026-06-25"` |
| `sdkEvaluation.requiredRuntimeSurface` | `"server-side Help Scout Inbox API 2.0 ticketing client"` |
| `sdkEvaluation.result` | `"no-official-maintained-runtime-sdk"` |
| <a id="property-strategy-1"></a> `strategy` | `"provider-rest-adapter"` |
| <a id="property-verifiedat-1"></a> `verifiedAt` | `"2026-06-25"` |

***

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
        label: "Help Scout Inbox API";
        url: "https://developer.helpscout.com/mailbox-api/";
      }, {
        label: "Help Scout JavaScript SDK";
        url: "https://developer.helpscout.com/apps/javascript-sdk/";
      }, {
        label: "Help Scout open-source clients";
        url: "https://developer.helpscout.com/open-source/";
     }];
     notes: ["No official maintained backend JavaScript Inbox API client was verified; Help Scout's official Inbox SDK is PHP, and the official JavaScript SDK is for Apps UI context.", "Coverage is implemented by the built-in Help Scout REST adapter for conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness.", "A host-provided HelpScoutTicketingProviderClient can still override the built-in REST adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "help-scout-base-url";
     label: "Help Scout API base URL";
     required: false;
   }, {
     id: "help-scout-api-access";
     label: "Help Scout OAuth access token or API key";
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
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedOperations: readonly [{
           alias: "ticket.create";
           id: "conversations.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createConversation";
         }, {
           alias: "ticket.read";
           id: "conversations.read";
           source: "provider-rest-adapter";
           target: "restAdapter.getConversation";
         }, {
           alias: "ticket.update";
           id: "conversations.update";
           source: "provider-rest-adapter";
           target: "restAdapter.updateConversation";
         }, {
           alias: "ticket.search";
           id: "conversations.list";
           source: "provider-rest-adapter";
           target: "restAdapter.listConversations";
         }, {
           alias: "ticket.comment.create";
           id: "reply.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createReply";
         }, {
           alias: "ticket.internalNote.create";
           id: "note.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createNote";
         }, {
           alias: "help-scout.thread.list";
           id: "threads.list";
           source: "provider-rest-adapter";
           target: "restAdapter.listThreads";
         }, {
           alias: "help-scout.readiness";
           id: "mailboxes.list";
           source: "provider-rest-adapter";
           target: "restAdapter.readiness";
        }];
        defaultHttpClient: "providerJsonRequest";
        packageOwnedRestClient: true;
        providerClientOverride: true;
        providerSdkDecision: "no-official-sdk-rest-adapter";
        sdkEvaluation: {
           candidates: readonly [{
              checkedVersion: "0.10.0";
              package: "@helpscout/javascript-sdk";
              reason: "Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations.";
              result: "not-runtime-inbox-api-client";
            }, {
              checkedVersion: "0.0.1";
              package: "helpscout";
              reason: "Community Node wrapper; not listed by Help Scout as an official supported Inbox API client.";
              result: "rejected-unofficial-legacy";
            }, {
              checkedVersion: "0.0.2";
              package: "helpscout-v2";
              reason: "Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK.";
              result: "rejected-unofficial";
            }, {
              checkedVersion: "0.1.2";
              package: "@bufferapp/helpscout";
              reason: "Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK.";
              result: "rejected-unofficial-legacy";
           }];
           checkedAt: "2026-06-25";
           requiredRuntimeSurface: "server-side Help Scout Inbox API 2.0 ticketing client";
           result: "no-official-maintained-runtime-sdk";
        };
        strategy: "provider-rest-adapter";
        verifiedAt: "2026-06-25";
     };
     issue: 35;
     manifestOnlySafe: true;
     providerClient: {
        defaultClientPolicy: "built-in-rest-adapter";
        importPolicy: "runtime-override";
        interface: "HelpScoutTicketingProviderClient";
        package: "host-provided";
     };
     providerRestAdapterException: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedDefaultRuntime: "built-in-help-scout-inbox-rest-adapter";
        guardrails: readonly ["Do not add @helpscout/javascript-sdk as a runtime dependency for Inbox API ticketing; it is an Apps UI SDK.", "Only the allowlisted Help Scout Inbox API operations in metadata.implementation.allowedOperations are package-owned.", "Use a host-injected HelpScoutTicketingProviderClient for unsupported operations or for any future official maintained backend SDK."];
        hostSdkPath: "HelpScoutTicketingProviderClient";
        status: "accepted";
     };
     sdkDecision: "no-official-sdk-rest-adapter";
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
| `coverage` | \{ `evidence`: \[\{ `label`: `"Help Scout Inbox API"`; `url`: `"https://developer.helpscout.com/mailbox-api/"`; \}, \{ `label`: `"Help Scout JavaScript SDK"`; `url`: `"https://developer.helpscout.com/apps/javascript-sdk/"`; \}, \{ `label`: `"Help Scout open-source clients"`; `url`: `"https://developer.helpscout.com/open-source/"`; \}\]; `notes`: \[`"No official maintained backend JavaScript Inbox API client was verified; Help Scout's official Inbox SDK is PHP, and the official JavaScript SDK is for Apps UI context."`, `"Coverage is implemented by the built-in Help Scout REST adapter for conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness."`, `"A host-provided HelpScoutTicketingProviderClient can still override the built-in REST adapter."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Help Scout Inbox API"`; `url`: `"https://developer.helpscout.com/mailbox-api/"`; \}, \{ `label`: `"Help Scout JavaScript SDK"`; `url`: `"https://developer.helpscout.com/apps/javascript-sdk/"`; \}, \{ `label`: `"Help Scout open-source clients"`; `url`: `"https://developer.helpscout.com/open-source/"`; \}\] |
| `coverage.notes` | \[`"No official maintained backend JavaScript Inbox API client was verified; Help Scout's official Inbox SDK is PHP, and the official JavaScript SDK is for Apps UI context."`, `"Coverage is implemented by the built-in Help Scout REST adapter for conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness."`, `"A host-provided HelpScoutTicketingProviderClient can still override the built-in REST adapter."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `id`: `"help-scout-base-url"`; `label`: `"Help Scout API base URL"`; `required`: `false`; \}, \{ `id`: `"help-scout-api-access"`; `label`: `"Help Scout OAuth access token or API key"`; `required`: `true`; \}\] |
| `directions` | \[`"bidirectional"`\] |
| `id` | `"ticketing.help-scout"` |
| `limitations` | \[`"Mailbox IDs, thread types, assignment, workflow rules, and customer visibility are SDK-user configuration."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"reply.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createReply"`; \}, \{ `alias`: `"ticket.internalNote.create"`; `id`: `"note.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createNote"`; \}, \{ `alias`: `"help-scout.thread.list"`; `id`: `"threads.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listThreads"`; \}, \{ `alias`: `"help-scout.readiness"`; `id`: `"mailboxes.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\]; `defaultHttpClient`: `"providerJsonRequest"`; `packageOwnedRestClient`: `true`; `providerClientOverride`: `true`; `providerSdkDecision`: `"no-official-sdk-rest-adapter"`; `sdkEvaluation`: \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.10.0"`; `package`: `"@helpscout/javascript-sdk"`; `reason`: `"Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations."`; `result`: `"not-runtime-inbox-api-client"`; \}, \{ `checkedVersion`: `"0.0.1"`; `package`: `"helpscout"`; `reason`: `"Community Node wrapper; not listed by Help Scout as an official supported Inbox API client."`; `result`: `"rejected-unofficial-legacy"`; \}, \{ `checkedVersion`: `"0.0.2"`; `package`: `"helpscout-v2"`; `reason`: `"Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK."`; `result`: `"rejected-unofficial"`; \}, \{ `checkedVersion`: `"0.1.2"`; `package`: `"@bufferapp/helpscout"`; `reason`: `"Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK."`; `result`: `"rejected-unofficial-legacy"`; \}\]; `checkedAt`: `"2026-06-25"`; `requiredRuntimeSurface`: `"server-side Help Scout Inbox API 2.0 ticketing client"`; `result`: `"no-official-maintained-runtime-sdk"`; \}; `strategy`: `"provider-rest-adapter"`; `verifiedAt`: `"2026-06-25"`; \}; `issue`: `35`; `manifestOnlySafe`: `true`; `providerClient`: \{ `defaultClientPolicy`: `"built-in-rest-adapter"`; `importPolicy`: `"runtime-override"`; `interface`: `"HelpScoutTicketingProviderClient"`; `package`: `"host-provided"`; \}; `providerRestAdapterException`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedDefaultRuntime`: `"built-in-help-scout-inbox-rest-adapter"`; `guardrails`: readonly \[`"Do not add @helpscout/javascript-sdk as a runtime dependency for Inbox API ticketing; it is an Apps UI SDK."`, `"Only the allowlisted Help Scout Inbox API operations in metadata.implementation.allowedOperations are package-owned."`, `"Use a host-injected HelpScoutTicketingProviderClient for unsupported operations or for any future official maintained backend SDK."`\]; `hostSdkPath`: `"HelpScoutTicketingProviderClient"`; `status`: `"accepted"`; \}; `sdkDecision`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"reply.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createReply"`; \}, \{ `alias`: `"ticket.internalNote.create"`; `id`: `"note.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createNote"`; \}, \{ `alias`: `"help-scout.thread.list"`; `id`: `"threads.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listThreads"`; \}, \{ `alias`: `"help-scout.readiness"`; `id`: `"mailboxes.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\]; `defaultHttpClient`: `"providerJsonRequest"`; `packageOwnedRestClient`: `true`; `providerClientOverride`: `true`; `providerSdkDecision`: `"no-official-sdk-rest-adapter"`; `sdkEvaluation`: \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.10.0"`; `package`: `"@helpscout/javascript-sdk"`; `reason`: `"Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations."`; `result`: `"not-runtime-inbox-api-client"`; \}, \{ `checkedVersion`: `"0.0.1"`; `package`: `"helpscout"`; `reason`: `"Community Node wrapper; not listed by Help Scout as an official supported Inbox API client."`; `result`: `"rejected-unofficial-legacy"`; \}, \{ `checkedVersion`: `"0.0.2"`; `package`: `"helpscout-v2"`; `reason`: `"Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK."`; `result`: `"rejected-unofficial"`; \}, \{ `checkedVersion`: `"0.1.2"`; `package`: `"@bufferapp/helpscout"`; `reason`: `"Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK."`; `result`: `"rejected-unofficial-legacy"`; \}\]; `checkedAt`: `"2026-06-25"`; `requiredRuntimeSurface`: `"server-side Help Scout Inbox API 2.0 ticketing client"`; `result`: `"no-official-maintained-runtime-sdk"`; \}; `strategy`: `"provider-rest-adapter"`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"reply.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createReply"`; \}, \{ `alias`: `"ticket.internalNote.create"`; `id`: `"note.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createNote"`; \}, \{ `alias`: `"help-scout.thread.list"`; `id`: `"threads.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listThreads"`; \}, \{ `alias`: `"help-scout.readiness"`; `id`: `"mailboxes.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\] |
| `metadata.implementation.defaultHttpClient` | `"providerJsonRequest"` |
| `metadata.implementation.packageOwnedRestClient` | `true` |
| `metadata.implementation.providerClientOverride` | `true` |
| `metadata.implementation.providerSdkDecision` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.sdkEvaluation` | \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.10.0"`; `package`: `"@helpscout/javascript-sdk"`; `reason`: `"Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations."`; `result`: `"not-runtime-inbox-api-client"`; \}, \{ `checkedVersion`: `"0.0.1"`; `package`: `"helpscout"`; `reason`: `"Community Node wrapper; not listed by Help Scout as an official supported Inbox API client."`; `result`: `"rejected-unofficial-legacy"`; \}, \{ `checkedVersion`: `"0.0.2"`; `package`: `"helpscout-v2"`; `reason`: `"Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK."`; `result`: `"rejected-unofficial"`; \}, \{ `checkedVersion`: `"0.1.2"`; `package`: `"@bufferapp/helpscout"`; `reason`: `"Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK."`; `result`: `"rejected-unofficial-legacy"`; \}\]; `checkedAt`: `"2026-06-25"`; `requiredRuntimeSurface`: `"server-side Help Scout Inbox API 2.0 ticketing client"`; `result`: `"no-official-maintained-runtime-sdk"`; \} |
| `metadata.implementation.sdkEvaluation.candidates` | readonly \[\{ `checkedVersion`: `"0.10.0"`; `package`: `"@helpscout/javascript-sdk"`; `reason`: `"Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations."`; `result`: `"not-runtime-inbox-api-client"`; \}, \{ `checkedVersion`: `"0.0.1"`; `package`: `"helpscout"`; `reason`: `"Community Node wrapper; not listed by Help Scout as an official supported Inbox API client."`; `result`: `"rejected-unofficial-legacy"`; \}, \{ `checkedVersion`: `"0.0.2"`; `package`: `"helpscout-v2"`; `reason`: `"Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK."`; `result`: `"rejected-unofficial"`; \}, \{ `checkedVersion`: `"0.1.2"`; `package`: `"@bufferapp/helpscout"`; `reason`: `"Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK."`; `result`: `"rejected-unofficial-legacy"`; \}\] |
| `metadata.implementation.sdkEvaluation.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.sdkEvaluation.requiredRuntimeSurface` | `"server-side Help Scout Inbox API 2.0 ticketing client"` |
| `metadata.implementation.sdkEvaluation.result` | `"no-official-maintained-runtime-sdk"` |
| `metadata.implementation.strategy` | `"provider-rest-adapter"` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.issue` | `35` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerClient` | \{ `defaultClientPolicy`: `"built-in-rest-adapter"`; `importPolicy`: `"runtime-override"`; `interface`: `"HelpScoutTicketingProviderClient"`; `package`: `"host-provided"`; \} |
| `metadata.providerClient.defaultClientPolicy` | `"built-in-rest-adapter"` |
| `metadata.providerClient.importPolicy` | `"runtime-override"` |
| `metadata.providerClient.interface` | `"HelpScoutTicketingProviderClient"` |
| `metadata.providerClient.package` | `"host-provided"` |
| `metadata.providerRestAdapterException` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedDefaultRuntime`: `"built-in-help-scout-inbox-rest-adapter"`; `guardrails`: readonly \[`"Do not add @helpscout/javascript-sdk as a runtime dependency for Inbox API ticketing; it is an Apps UI SDK."`, `"Only the allowlisted Help Scout Inbox API operations in metadata.implementation.allowedOperations are package-owned."`, `"Use a host-injected HelpScoutTicketingProviderClient for unsupported operations or for any future official maintained backend SDK."`\]; `hostSdkPath`: `"HelpScoutTicketingProviderClient"`; `status`: `"accepted"`; \} |
| `metadata.providerRestAdapterException.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapterException.allowedDefaultRuntime` | `"built-in-help-scout-inbox-rest-adapter"` |
| `metadata.providerRestAdapterException.guardrails` | readonly \[`"Do not add @helpscout/javascript-sdk as a runtime dependency for Inbox API ticketing; it is an Apps UI SDK."`, `"Only the allowlisted Help Scout Inbox API operations in metadata.implementation.allowedOperations are package-owned."`, `"Use a host-injected HelpScoutTicketingProviderClient for unsupported operations or for any future official maintained backend SDK."`\] |
| `metadata.providerRestAdapterException.hostSdkPath` | `"HelpScoutTicketingProviderClient"` |
| `metadata.providerRestAdapterException.status` | `"accepted"` |
| `metadata.sdkDecision` | `"no-official-sdk-rest-adapter"` |
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
        label: "Help Scout Inbox API";
        url: "https://developer.helpscout.com/mailbox-api/";
      }, {
        label: "Help Scout JavaScript SDK";
        url: "https://developer.helpscout.com/apps/javascript-sdk/";
      }, {
        label: "Help Scout open-source clients";
        url: "https://developer.helpscout.com/open-source/";
     }];
     notes: ["No official maintained backend JavaScript Inbox API client was verified; Help Scout's official Inbox SDK is PHP, and the official JavaScript SDK is for Apps UI context.", "Coverage is implemented by the built-in Help Scout REST adapter for conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness.", "A host-provided HelpScoutTicketingProviderClient can still override the built-in REST adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "help-scout-base-url";
     label: "Help Scout API base URL";
     required: false;
   }, {
     id: "help-scout-api-access";
     label: "Help Scout OAuth access token or API key";
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
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedOperations: readonly [{
           alias: "ticket.create";
           id: "conversations.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createConversation";
         }, {
           alias: "ticket.read";
           id: "conversations.read";
           source: "provider-rest-adapter";
           target: "restAdapter.getConversation";
         }, {
           alias: "ticket.update";
           id: "conversations.update";
           source: "provider-rest-adapter";
           target: "restAdapter.updateConversation";
         }, {
           alias: "ticket.search";
           id: "conversations.list";
           source: "provider-rest-adapter";
           target: "restAdapter.listConversations";
         }, {
           alias: "ticket.comment.create";
           id: "reply.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createReply";
         }, {
           alias: "ticket.internalNote.create";
           id: "note.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createNote";
         }, {
           alias: "help-scout.thread.list";
           id: "threads.list";
           source: "provider-rest-adapter";
           target: "restAdapter.listThreads";
         }, {
           alias: "help-scout.readiness";
           id: "mailboxes.list";
           source: "provider-rest-adapter";
           target: "restAdapter.readiness";
        }];
        defaultHttpClient: "providerJsonRequest";
        packageOwnedRestClient: true;
        providerClientOverride: true;
        providerSdkDecision: "no-official-sdk-rest-adapter";
        sdkEvaluation: {
           candidates: readonly [{
              checkedVersion: "0.10.0";
              package: "@helpscout/javascript-sdk";
              reason: "Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations.";
              result: "not-runtime-inbox-api-client";
            }, {
              checkedVersion: "0.0.1";
              package: "helpscout";
              reason: "Community Node wrapper; not listed by Help Scout as an official supported Inbox API client.";
              result: "rejected-unofficial-legacy";
            }, {
              checkedVersion: "0.0.2";
              package: "helpscout-v2";
              reason: "Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK.";
              result: "rejected-unofficial";
            }, {
              checkedVersion: "0.1.2";
              package: "@bufferapp/helpscout";
              reason: "Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK.";
              result: "rejected-unofficial-legacy";
           }];
           checkedAt: "2026-06-25";
           requiredRuntimeSurface: "server-side Help Scout Inbox API 2.0 ticketing client";
           result: "no-official-maintained-runtime-sdk";
        };
        strategy: "provider-rest-adapter";
        verifiedAt: "2026-06-25";
     };
     issue: 35;
     manifestOnlySafe: true;
     providerClient: {
        defaultClientPolicy: "built-in-rest-adapter";
        importPolicy: "runtime-override";
        interface: "HelpScoutTicketingProviderClient";
        package: "host-provided";
     };
     providerRestAdapterException: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedDefaultRuntime: "built-in-help-scout-inbox-rest-adapter";
        guardrails: readonly ["Do not add @helpscout/javascript-sdk as a runtime dependency for Inbox API ticketing; it is an Apps UI SDK.", "Only the allowlisted Help Scout Inbox API operations in metadata.implementation.allowedOperations are package-owned.", "Use a host-injected HelpScoutTicketingProviderClient for unsupported operations or for any future official maintained backend SDK."];
        hostSdkPath: "HelpScoutTicketingProviderClient";
        status: "accepted";
     };
     sdkDecision: "no-official-sdk-rest-adapter";
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
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Help Scout Inbox API"`; `url`: `"https://developer.helpscout.com/mailbox-api/"`; \}, \{ `label`: `"Help Scout JavaScript SDK"`; `url`: `"https://developer.helpscout.com/apps/javascript-sdk/"`; \}, \{ `label`: `"Help Scout open-source clients"`; `url`: `"https://developer.helpscout.com/open-source/"`; \}\]; `notes`: \[`"No official maintained backend JavaScript Inbox API client was verified; Help Scout's official Inbox SDK is PHP, and the official JavaScript SDK is for Apps UI context."`, `"Coverage is implemented by the built-in Help Scout REST adapter for conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness."`, `"A host-provided HelpScoutTicketingProviderClient can still override the built-in REST adapter."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Help Scout Inbox API"`; `url`: `"https://developer.helpscout.com/mailbox-api/"`; \}, \{ `label`: `"Help Scout JavaScript SDK"`; `url`: `"https://developer.helpscout.com/apps/javascript-sdk/"`; \}, \{ `label`: `"Help Scout open-source clients"`; `url`: `"https://developer.helpscout.com/open-source/"`; \}\] |
| `coverage.notes` | \[`"No official maintained backend JavaScript Inbox API client was verified; Help Scout's official Inbox SDK is PHP, and the official JavaScript SDK is for Apps UI context."`, `"Coverage is implemented by the built-in Help Scout REST adapter for conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness."`, `"A host-provided HelpScoutTicketingProviderClient can still override the built-in REST adapter."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `id`: `"help-scout-base-url"`; `label`: `"Help Scout API base URL"`; `required`: `false`; \}, \{ `id`: `"help-scout-api-access"`; `label`: `"Help Scout OAuth access token or API key"`; `required`: `true`; \}\] |
| <a id="property-directions"></a> `directions` | \[`"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"ticketing.help-scout"` |
| <a id="property-limitations"></a> `limitations` | \[`"Mailbox IDs, thread types, assignment, workflow rules, and customer visibility are SDK-user configuration."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"reply.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createReply"`; \}, \{ `alias`: `"ticket.internalNote.create"`; `id`: `"note.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createNote"`; \}, \{ `alias`: `"help-scout.thread.list"`; `id`: `"threads.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listThreads"`; \}, \{ `alias`: `"help-scout.readiness"`; `id`: `"mailboxes.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\]; `defaultHttpClient`: `"providerJsonRequest"`; `packageOwnedRestClient`: `true`; `providerClientOverride`: `true`; `providerSdkDecision`: `"no-official-sdk-rest-adapter"`; `sdkEvaluation`: \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.10.0"`; `package`: `"@helpscout/javascript-sdk"`; `reason`: `"Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations."`; `result`: `"not-runtime-inbox-api-client"`; \}, \{ `checkedVersion`: `"0.0.1"`; `package`: `"helpscout"`; `reason`: `"Community Node wrapper; not listed by Help Scout as an official supported Inbox API client."`; `result`: `"rejected-unofficial-legacy"`; \}, \{ `checkedVersion`: `"0.0.2"`; `package`: `"helpscout-v2"`; `reason`: `"Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK."`; `result`: `"rejected-unofficial"`; \}, \{ `checkedVersion`: `"0.1.2"`; `package`: `"@bufferapp/helpscout"`; `reason`: `"Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK."`; `result`: `"rejected-unofficial-legacy"`; \}\]; `checkedAt`: `"2026-06-25"`; `requiredRuntimeSurface`: `"server-side Help Scout Inbox API 2.0 ticketing client"`; `result`: `"no-official-maintained-runtime-sdk"`; \}; `strategy`: `"provider-rest-adapter"`; `verifiedAt`: `"2026-06-25"`; \}; `issue`: `35`; `manifestOnlySafe`: `true`; `providerClient`: \{ `defaultClientPolicy`: `"built-in-rest-adapter"`; `importPolicy`: `"runtime-override"`; `interface`: `"HelpScoutTicketingProviderClient"`; `package`: `"host-provided"`; \}; `providerRestAdapterException`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedDefaultRuntime`: `"built-in-help-scout-inbox-rest-adapter"`; `guardrails`: readonly \[`"Do not add @helpscout/javascript-sdk as a runtime dependency for Inbox API ticketing; it is an Apps UI SDK."`, `"Only the allowlisted Help Scout Inbox API operations in metadata.implementation.allowedOperations are package-owned."`, `"Use a host-injected HelpScoutTicketingProviderClient for unsupported operations or for any future official maintained backend SDK."`\]; `hostSdkPath`: `"HelpScoutTicketingProviderClient"`; `status`: `"accepted"`; \}; `sdkDecision`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"reply.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createReply"`; \}, \{ `alias`: `"ticket.internalNote.create"`; `id`: `"note.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createNote"`; \}, \{ `alias`: `"help-scout.thread.list"`; `id`: `"threads.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listThreads"`; \}, \{ `alias`: `"help-scout.readiness"`; `id`: `"mailboxes.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\]; `defaultHttpClient`: `"providerJsonRequest"`; `packageOwnedRestClient`: `true`; `providerClientOverride`: `true`; `providerSdkDecision`: `"no-official-sdk-rest-adapter"`; `sdkEvaluation`: \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.10.0"`; `package`: `"@helpscout/javascript-sdk"`; `reason`: `"Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations."`; `result`: `"not-runtime-inbox-api-client"`; \}, \{ `checkedVersion`: `"0.0.1"`; `package`: `"helpscout"`; `reason`: `"Community Node wrapper; not listed by Help Scout as an official supported Inbox API client."`; `result`: `"rejected-unofficial-legacy"`; \}, \{ `checkedVersion`: `"0.0.2"`; `package`: `"helpscout-v2"`; `reason`: `"Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK."`; `result`: `"rejected-unofficial"`; \}, \{ `checkedVersion`: `"0.1.2"`; `package`: `"@bufferapp/helpscout"`; `reason`: `"Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK."`; `result`: `"rejected-unofficial-legacy"`; \}\]; `checkedAt`: `"2026-06-25"`; `requiredRuntimeSurface`: `"server-side Help Scout Inbox API 2.0 ticketing client"`; `result`: `"no-official-maintained-runtime-sdk"`; \}; `strategy`: `"provider-rest-adapter"`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"reply.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createReply"`; \}, \{ `alias`: `"ticket.internalNote.create"`; `id`: `"note.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createNote"`; \}, \{ `alias`: `"help-scout.thread.list"`; `id`: `"threads.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listThreads"`; \}, \{ `alias`: `"help-scout.readiness"`; `id`: `"mailboxes.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\] |
| `metadata.implementation.defaultHttpClient` | `"providerJsonRequest"` |
| `metadata.implementation.packageOwnedRestClient` | `true` |
| `metadata.implementation.providerClientOverride` | `true` |
| `metadata.implementation.providerSdkDecision` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.sdkEvaluation` | \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.10.0"`; `package`: `"@helpscout/javascript-sdk"`; `reason`: `"Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations."`; `result`: `"not-runtime-inbox-api-client"`; \}, \{ `checkedVersion`: `"0.0.1"`; `package`: `"helpscout"`; `reason`: `"Community Node wrapper; not listed by Help Scout as an official supported Inbox API client."`; `result`: `"rejected-unofficial-legacy"`; \}, \{ `checkedVersion`: `"0.0.2"`; `package`: `"helpscout-v2"`; `reason`: `"Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK."`; `result`: `"rejected-unofficial"`; \}, \{ `checkedVersion`: `"0.1.2"`; `package`: `"@bufferapp/helpscout"`; `reason`: `"Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK."`; `result`: `"rejected-unofficial-legacy"`; \}\]; `checkedAt`: `"2026-06-25"`; `requiredRuntimeSurface`: `"server-side Help Scout Inbox API 2.0 ticketing client"`; `result`: `"no-official-maintained-runtime-sdk"`; \} |
| `metadata.implementation.sdkEvaluation.candidates` | readonly \[\{ `checkedVersion`: `"0.10.0"`; `package`: `"@helpscout/javascript-sdk"`; `reason`: `"Official Help Scout JavaScript SDK is for Apps UI context, contextual data, and interface actions rather than backend Inbox API ticketing operations."`; `result`: `"not-runtime-inbox-api-client"`; \}, \{ `checkedVersion`: `"0.0.1"`; `package`: `"helpscout"`; `reason`: `"Community Node wrapper; not listed by Help Scout as an official supported Inbox API client."`; `result`: `"rejected-unofficial-legacy"`; \}, \{ `checkedVersion`: `"0.0.2"`; `package`: `"helpscout-v2"`; `reason`: `"Community Help Scout API v2 wrapper; not an official or maintained provider runtime SDK."`; `result`: `"rejected-unofficial"`; \}, \{ `checkedVersion`: `"0.1.2"`; `package`: `"@bufferapp/helpscout"`; `reason`: `"Third-party/legacy Node wrapper; not an official Help Scout-maintained runtime SDK."`; `result`: `"rejected-unofficial-legacy"`; \}\] |
| `metadata.implementation.sdkEvaluation.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.sdkEvaluation.requiredRuntimeSurface` | `"server-side Help Scout Inbox API 2.0 ticketing client"` |
| `metadata.implementation.sdkEvaluation.result` | `"no-official-maintained-runtime-sdk"` |
| `metadata.implementation.strategy` | `"provider-rest-adapter"` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.issue` | `35` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerClient` | \{ `defaultClientPolicy`: `"built-in-rest-adapter"`; `importPolicy`: `"runtime-override"`; `interface`: `"HelpScoutTicketingProviderClient"`; `package`: `"host-provided"`; \} |
| `metadata.providerClient.defaultClientPolicy` | `"built-in-rest-adapter"` |
| `metadata.providerClient.importPolicy` | `"runtime-override"` |
| `metadata.providerClient.interface` | `"HelpScoutTicketingProviderClient"` |
| `metadata.providerClient.package` | `"host-provided"` |
| `metadata.providerRestAdapterException` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedDefaultRuntime`: `"built-in-help-scout-inbox-rest-adapter"`; `guardrails`: readonly \[`"Do not add @helpscout/javascript-sdk as a runtime dependency for Inbox API ticketing; it is an Apps UI SDK."`, `"Only the allowlisted Help Scout Inbox API operations in metadata.implementation.allowedOperations are package-owned."`, `"Use a host-injected HelpScoutTicketingProviderClient for unsupported operations or for any future official maintained backend SDK."`\]; `hostSdkPath`: `"HelpScoutTicketingProviderClient"`; `status`: `"accepted"`; \} |
| `metadata.providerRestAdapterException.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapterException.allowedDefaultRuntime` | `"built-in-help-scout-inbox-rest-adapter"` |
| `metadata.providerRestAdapterException.guardrails` | readonly \[`"Do not add @helpscout/javascript-sdk as a runtime dependency for Inbox API ticketing; it is an Apps UI SDK."`, `"Only the allowlisted Help Scout Inbox API operations in metadata.implementation.allowedOperations are package-owned."`, `"Use a host-injected HelpScoutTicketingProviderClient for unsupported operations or for any future official maintained backend SDK."`\] |
| `metadata.providerRestAdapterException.hostSdkPath` | `"HelpScoutTicketingProviderClient"` |
| `metadata.providerRestAdapterException.status` | `"accepted"` |
| `metadata.sdkDecision` | `"no-official-sdk-rest-adapter"` |
| <a id="property-name"></a> `name` | `"Help Scout"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /v2/conversations"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /v2/conversations/{conversation_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PATCH /v2/conversations/{conversation_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /v2/conversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /v2/conversations/{conversation_id}/reply"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.internalNote.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `providerObject`: `"internalNote"`; `providerOperation`: `"POST /v2/conversations/{conversation_id}/notes"`; `sideEffect`: `true`; \}, \{ `alias`: `"help-scout.thread.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"helpScoutThread"`; `providerOperation`: `"GET /v2/conversations/{conversation_id}/threads"`; \}, \{ `alias`: `"help-scout.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"helpScoutMailbox"`; `providerOperation`: `"GET /v2/mailboxes"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-ticketing-help-scout"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Help Scout conversations can include customer identity, mailbox threads, notes, tags, custom fields, and assignments."`\] |
| <a id="property-provider"></a> `provider` | `"help-scout"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
