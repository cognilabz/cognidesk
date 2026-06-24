# integrations/ticketing/help-scout/dist

## Interfaces

### HelpScoutTicketingClientOptions

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

##### fetch?

```ts
optional fetch?: {
  (input, init?): Promise<Response>;
  (input, init?): Promise<Response>;
};
```

###### Call Signature

```ts
(input, init?): Promise<Response>;
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `URL` \| `RequestInfo` |
| `init?` | `RequestInit` |

###### Returns

`Promise`\<`Response`\>

###### Call Signature

```ts
(input, init?): Promise<Response>;
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| `Request` \| `URL` |
| `init?` | `RequestInit` |

###### Returns

`Promise`\<`Response`\>

***

### JsonObject

#### Indexable

```ts
[key: string]: JsonValue
```

## Type Aliases

### JsonPrimitive

```ts
type JsonPrimitive = string | number | boolean | null;
```

***

### JsonValue

```ts
type JsonValue =
  | JsonPrimitive
  | JsonObject
  | JsonValue[];
```

## Functions

### createHelpScoutTicketingClient()

```ts
function createHelpScoutTicketingClient(options?): {
  createConversation: (payload) => Promise<JsonObject>;
  createNote: (conversationId, payload) => Promise<JsonObject>;
  createReply: (conversationId, payload) => Promise<JsonObject>;
  getConversation: (conversationId) => Promise<JsonObject>;
  listConversations: (query?) => Promise<JsonObject>;
  listThreads: (conversationId) => Promise<JsonObject>;
  rawRequest: <T>(path, init?) => Promise<T>;
  readiness: () => Promise<JsonObject>;
  updateConversation: (conversationId, patch) => Promise<JsonObject>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`HelpScoutTicketingClientOptions`](#helpscoutticketingclientoptions) |

#### Returns

```ts
{
  createConversation: (payload) => Promise<JsonObject>;
  createNote: (conversationId, payload) => Promise<JsonObject>;
  createReply: (conversationId, payload) => Promise<JsonObject>;
  getConversation: (conversationId) => Promise<JsonObject>;
  listConversations: (query?) => Promise<JsonObject>;
  listThreads: (conversationId) => Promise<JsonObject>;
  rawRequest: <T>(path, init?) => Promise<T>;
  readiness: () => Promise<JsonObject>;
  updateConversation: (conversationId, patch) => Promise<JsonObject>;
}
```

| Name | Type |
| ------ | ------ |
| `createConversation()` | (`payload`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `createNote()` | (`conversationId`, `payload`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `createReply()` | (`conversationId`, `payload`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `getConversation()` | (`conversationId`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `listConversations()` | (`query?`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `listThreads()` | (`conversationId`) => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `rawRequest()` | \<`T`\>(`path`, `init?`) => `Promise`\<`T`\> |
| `readiness()` | () => `Promise`\<[`JsonObject`](#jsonobject)\> |
| `updateConversation()` | (`conversationId`, `patch`) => `Promise`\<[`JsonObject`](#jsonobject)\> |

***

### createHelpScoutTicketingIntegration()

```ts
function createHelpScoutTicketingIntegration(options?): DefinedIntegration<{
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
  }];
  packageName: "@cognidesk/integration-ticketing-help-scout";
  privacyNotes: ["Help Scout conversations can include customer identity, mailbox threads, notes, tags, custom fields, and assignments."];
  provider: "help-scout";
  trustLevel: "official";
}, unknown, {
  help-scout.readiness: () => Promise<JsonObject>;
  help-scout.thread.list: (input) => Promise<JsonObject>;
  ticket.comment.create: (input) => Promise<JsonObject>;
  ticket.create: (input) => Promise<JsonObject>;
  ticket.internalNote.create: (input) => Promise<JsonObject>;
  ticket.read: (input) => Promise<JsonObject>;
  ticket.search: (input?) => Promise<JsonObject>;
  ticket.update: (input) => Promise<JsonObject>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`HelpScoutTicketingClientOptions`](#helpscoutticketingclientoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: \[\{
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"helpScoutConversation"`;
        `label`: `"Help Scout Conversation"`;
      \}, \{
        `kind`: `"helpScoutReplyThread"`;
        `label`: `"Help Scout Reply Thread"`;
      \}, \{
        `kind`: `"helpScoutNoteThread"`;
        `label`: `"Help Scout Note Thread"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"helpScoutConversation"`;
        `label`: `"Help Scout Conversation"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"helpScoutConversation"`;
        `label`: `"Help Scout Conversation"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}, \{
     `capability`: `"search-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"helpScoutConversation"`;
        `label`: `"Help Scout Conversation"`;
     \}\];
     `requiresCredential`: `true`;
   \}, \{
     `capability`: `"handoff"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObjects`: \[\{
        `kind`: `"helpScoutConversation"`;
        `label`: `"Help Scout Conversation"`;
      \}, \{
        `kind`: `"helpScoutReplyThread"`;
        `label`: `"Help Scout Reply Thread"`;
      \}, \{
        `kind`: `"helpScoutNoteThread"`;
        `label`: `"Help Scout Note Thread"`;
     \}\];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \}\];
  `category`: `"ticketing"`;
  `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
  `coverage`: \{
     `evidence`: \[\{
        `label`: `"Help Scout JavaScript SDK"`;
        `url`: `"https://developer.helpscout.com/apps/javascript-sdk/"`;
      \}, \{
        `label`: `"Help Scout open-source clients"`;
        `url`: `"https://developer.helpscout.com/open-source/"`;
      \}, \{
        `label`: `"Help Scout Inbox API"`;
        `url`: `"https://developer.helpscout.com/mailbox-api/"`;
     \}\];
     `notes`: \[`"SDK decision: Help Scout's official JavaScript SDK is for Apps UI context, not a backend Inbox API client."`, `"Coverage is limited to Help Scout Inbox API conversation create/read/list/update, thread list, reply/note thread creation, and mailbox-list readiness."`\];
     `scope`: `"support-workflow-subset"`;
  \};
  `credentialRequirements`: \[\{
     `id`: `"help-scout-api-access"`;
     `label`: `"Help Scout OAuth access"`;
     `required`: `true`;
  \}\];
  `directions`: \[`"bidirectional"`\];
  `id`: `"ticketing.help-scout"`;
  `limitations`: \[`"Mailbox IDs, thread types, assignment, workflow rules, and customer visibility are SDK-user configuration."`\];
  `maintainers`: \[\{
     `name`: `"Cognidesk"`;
     `type`: `"official"`;
  \}\];
  `metadata`: \{
     `implementationStrategy`: `"direct-http-support-slice"`;
     `issue`: `35`;
     `sdkDecision`: \{
        `candidates`: readonly \[`"@helpscout/javascript-sdk"`\];
        `checkedAt`: `"2026-06-21"`;
        `reason`: `"The official JavaScript SDK targets Help Scout Apps UI, not backend Inbox API operations."`;
        `verdict`: `"not-adopted"`;
     \};
     `supportSlice`: \{
        `allowlistedOperations`: readonly \[`"conversations.create"`, `"conversations.read"`, `"conversations.update"`, `"conversations.list"`, `"threads.list"`, `"reply.create"`, `"note.create"`, `"mailboxes.list"`\];
        `source`: `"Help Scout Inbox API"`;
     \};
  \};
  `name`: `"Help Scout"`;
  `operations`: \[\{
     `alias`: `"ticket.create"`;
     `capability`: `"create-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"POST /v2/conversations"`;
     `sideEffect`: `true`;
   \}, \{
     `alias`: `"ticket.read"`;
     `capability`: `"read-provider-object"`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"GET /v2/conversations/{conversation_id}"`;
   \}, \{
     `alias`: `"ticket.update"`;
     `capability`: `"update-provider-object"`;
     `changesWorkflow`: `true`;
     `exposesSensitiveData`: `true`;
     `providerObject`: `"ticket"`;
     `providerOperation`: `"PATCH /v2/conversations/{conversation_id}"`;
     `sideEffect`: `true`;
  \}\];
  `packageName`: `"@cognidesk/integration-ticketing-help-scout"`;
  `privacyNotes`: \[`"Help Scout conversations can include customer identity, mailbox threads, notes, tags, custom fields, and assignments."`\];
  `provider`: `"help-scout"`;
  `trustLevel`: `"official"`;
\}, `unknown`, \{
  `help-scout.readiness`: () => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `help-scout.thread.list`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.comment.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.internalNote.create`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.read`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.search`: (`input?`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
  `ticket.update`: (`input`) => `Promise`\<[`JsonObject`](#jsonobject)\>;
\}\>

## References

### helpScoutTicketingProviderManifest

Re-exports [helpScoutTicketingProviderManifest](dist/manifest.md#helpscoutticketingprovidermanifest)
