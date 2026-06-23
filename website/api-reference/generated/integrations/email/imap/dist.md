# integrations/email/imap/dist

## Interfaces

### ImapCredentialStatusInput

#### Properties

##### authMode?

```ts
optional authMode?: "password" | "oauth2" | "external";
```

##### mailboxCredentialsConfigured?

```ts
optional mailboxCredentialsConfigured?: boolean;
```

##### serverConfigured?

```ts
optional serverConfigured?: boolean;
```

***

### ImapEmailClient

#### Properties

##### rawClient

```ts
rawClient: ImapRawClient;
```

#### Methods

##### checkMailbox()

```ts
checkMailbox(): Promise<ImapMailboxReadiness>;
```

###### Returns

`Promise`\<[`ImapMailboxReadiness`](#imapmailboxreadiness)\>

##### close()

```ts
close(): Promise<void>;
```

###### Returns

`Promise`\<`void`\>

##### fetchMessages()

```ts
fetchMessages(input): Promise<unknown[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `query`: `FetchQueryObject`; `range`: `string` \| `number`[] \| `SearchObject`; `uid?`: `boolean`; \} |
| `input.query` | `FetchQueryObject` |
| `input.range` | `string` \| `number`[] \| `SearchObject` |
| `input.uid?` | `boolean` |

###### Returns

`Promise`\<`unknown`[]\>

##### searchMessages()

```ts
searchMessages(input): Promise<number[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `query`: `SearchObject`; `uid?`: `boolean`; \} |
| `input.query` | `SearchObject` |
| `input.uid?` | `boolean` |

###### Returns

`Promise`\<`number`[]\>

***

### ImapEmailClientOptions

#### Properties

##### connection

```ts
connection: ImapFlowOptions;
```

##### leaveOpen?

```ts
optional leaveOpen?: boolean;
```

##### mailbox?

```ts
optional mailbox?: string;
```

##### rawClient?

```ts
optional rawClient?: ImapRawClient;
```

##### rawClientConnected?

```ts
optional rawClientConnected?: boolean;
```

***

### ImapMailboxReadiness

#### Properties

##### mailbox

```ts
mailbox: string;
```

##### messagesTotal?

```ts
optional messagesTotal?: number;
```

##### readOnly?

```ts
optional readOnly?: boolean;
```

##### ready

```ts
ready: boolean;
```

##### status?

```ts
optional status?: unknown;
```

##### uidValidity?

```ts
optional uidValidity?: string | number;
```

***

### ImapRawClient

#### Methods

##### connect()

```ts
connect(): Promise<void>;
```

###### Returns

`Promise`\<`void`\>

##### fetch()

```ts
fetch(
   range,
   query,
options?): AsyncIterable<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `range` | `string` \| `number`[] \| `SearchObject` |
| `query` | `FetchQueryObject` |
| `options?` | \{ `uid?`: `boolean`; \} |
| `options.uid?` | `boolean` |

###### Returns

`AsyncIterable`\<`unknown`\>

##### logout()

```ts
logout(): Promise<void>;
```

###### Returns

`Promise`\<`void`\>

##### mailboxOpen()

```ts
mailboxOpen(path): Promise<{
  exists: number;
  path: string;
  readOnly?: boolean;
  uidValidity: number | bigint;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |

###### Returns

`Promise`\<\{
  `exists`: `number`;
  `path`: `string`;
  `readOnly?`: `boolean`;
  `uidValidity`: `number` \| `bigint`;
\}\>

##### search()

```ts
search(query, options?): Promise<false | number[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `SearchObject` |
| `options?` | \{ `uid?`: `boolean`; \} |
| `options.uid?` | `boolean` |

###### Returns

`Promise`\<`false` \| `number`[]\>

##### status()

```ts
status(path, query): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `query` | \{ `messages?`: `boolean`; `uidValidity?`: `boolean`; `unseen?`: `boolean`; \} |
| `query.messages?` | `boolean` |
| `query.uidValidity?` | `boolean` |
| `query.unseen?` | `boolean` |

###### Returns

`Promise`\<`unknown`\>

## Functions

### createImapEmailClient()

```ts
function createImapEmailClient(options): ImapEmailClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ImapEmailClientOptions`](#imapemailclientoptions) |

#### Returns

[`ImapEmailClient`](#imapemailclient)

***

### createImapEmailIntegration()

```ts
function createImapEmailIntegration(options): {
  bindingReport: OperationBindingReport;
  client: ImapEmailClient;
  manifest: {
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
     capabilities: readonly [{
        audiences: readonly ["customer-facing", "mixed"];
        capability: "read-provider-object";
        description: "Checks mailbox readiness and fetches explicitly requested message data through ImapFlow.";
        exposesSensitiveData: true;
        label: "Read IMAP mailbox data";
        providerObjects: readonly [{
           kind: "imapMailbox";
           label: "IMAP Mailbox";
         }, {
           kind: "emailMessage";
           label: "Email Message";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "search-provider-object";
        description: "Runs SDK-user supplied IMAP searches through ImapFlow.";
        exposesSensitiveData: true;
        label: "Search IMAP mailbox";
        providerObjects: readonly [{
           kind: "emailMessage";
           label: "Email Message";
        }];
        requiresCredential: true;
     }];
     category: "email";
     channelAudiences: readonly ["customer-facing", "mixed"];
     coverage: {
        evidence: readonly [{
           label: "RFC 9051 IMAP4rev2";
           url: "https://datatracker.ietf.org/doc/html/rfc9051";
         }, {
           label: "ImapFlow";
           url: "https://imapflow.com/";
        }];
        notes: readonly ["Coverage is a focused Cognidesk IMAP protocol adapter backed by ImapFlow.", "This package does not claim full mailbox synchronization, MIME parsing, retention policy, attachment policy, or outbound SMTP support."];
        scope: "local-protocol";
     };
     credentialRequirements: readonly [{
        description: "Mailbox host, port, TLS mode, and mailbox folder configuration.";
        id: "imap-server";
        label: "IMAP server settings";
        required: true;
      }, {
        description: "Mailbox username with password, OAuth2 access token, or externally supplied auth.";
        id: "imap-mailbox-credentials";
        label: "IMAP mailbox credentials";
        required: true;
     }];
     directions: readonly ["inbound-only"];
     id: "email.imap";
     limitations: readonly ["This package does not implement full mailbox synchronization, storage, retention, MIME parsing policy, attachment handling policy, deletion policy, or outbound SMTP.", "SDK users own mailbox selection, search scope, flag mutation policy, retention, redaction, and concurrency limits."];
     maintainers: readonly [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           fullMailboxSync: "not-covered";
           mailboxReadiness: "provider-supported-via-protocol-library";
           messageFetch: "provider-supported-via-protocol-library";
           messageSearch: "provider-supported-via-protocol-library";
           mimeParsingAttachments: "not-covered";
           outboundSmtp: "not-covered";
        };
        directSliceMetadata: {
           allowlist: readonly ["connect", "logout", "mailboxOpen", "status", "search", "fetch"];
           checksum: "npm:imapflow@1.4.2";
           source: "RFC 9051 plus ImapFlow 1.4.2 declarations";
        };
        implementation: {
           integrationKitStatus: "implemented";
           libraryPackage: "imapflow";
           libraryVersionRange: "^1.4.2";
           manifestImport: "no-sdk-client-initialization";
           protocolSource: "RFC 9051";
           strategy: "protocol-library";
           verifiedAt: "2026-06-21";
           verifiedPackageVersion: "1.4.2";
        };
        rawClientEscapeHatch: "ImapFlow client exposed from createImapEmailClient().rawClient";
     };
     name: "IMAP Mailbox";
     operations: readonly [{
        alias: "imap.mailbox.check";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        extension: true;
        providerObject: "imapMailbox";
      }, {
        alias: "email.thread.search";
        capability: "search-provider-object";
        exposesSensitiveData: true;
        providerObject: "emailMessage";
      }, {
        alias: "email.thread.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        providerObject: "emailMessage";
     }];
     packageName: "@cognidesk/integration-email-imap";
     privacyNotes: readonly ["IMAP messages can contain customer content, addresses, headers, attachments, and mailbox folder metadata.", "Mailbox credentials stay server-side and are represented only as readiness state."];
     provider: "imap";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: ("imap.mailbox.check" | "email.thread.search" | "email.thread.read")[];
  operations: {
     email.thread.read: (input) => Promise<unknown[]>;
     email.thread.search: (input) => Promise<number[]>;
     imap.mailbox.check: () => Promise<ImapMailboxReadiness>;
  };
  rawClient: ImapRawClient;
  getOperationHandler: {
     email.thread.read: (input) => Promise<unknown[]>;
     email.thread.search: (input) => Promise<number[]>;
     imap.mailbox.check: () => Promise<ImapMailboxReadiness>;
  }[Alias];
  requireOperationHandler: {
     email.thread.read: (input) => Promise<unknown[]>;
     email.thread.search: (input) => Promise<number[]>;
     imap.mailbox.check: () => Promise<ImapMailboxReadiness>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     email.thread.read: (input) => Promise<unknown[]>;
     email.thread.search: (input) => Promise<number[]>;
     imap.mailbox.check: () => Promise<ImapMailboxReadiness>;
  }[Alias]>>>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ImapEmailClientOptions`](#imapemailclientoptions) |

#### Returns

```ts
{
  bindingReport: OperationBindingReport;
  client: ImapEmailClient;
  manifest: {
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
     capabilities: readonly [{
        audiences: readonly ["customer-facing", "mixed"];
        capability: "read-provider-object";
        description: "Checks mailbox readiness and fetches explicitly requested message data through ImapFlow.";
        exposesSensitiveData: true;
        label: "Read IMAP mailbox data";
        providerObjects: readonly [{
           kind: "imapMailbox";
           label: "IMAP Mailbox";
         }, {
           kind: "emailMessage";
           label: "Email Message";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "search-provider-object";
        description: "Runs SDK-user supplied IMAP searches through ImapFlow.";
        exposesSensitiveData: true;
        label: "Search IMAP mailbox";
        providerObjects: readonly [{
           kind: "emailMessage";
           label: "Email Message";
        }];
        requiresCredential: true;
     }];
     category: "email";
     channelAudiences: readonly ["customer-facing", "mixed"];
     coverage: {
        evidence: readonly [{
           label: "RFC 9051 IMAP4rev2";
           url: "https://datatracker.ietf.org/doc/html/rfc9051";
         }, {
           label: "ImapFlow";
           url: "https://imapflow.com/";
        }];
        notes: readonly ["Coverage is a focused Cognidesk IMAP protocol adapter backed by ImapFlow.", "This package does not claim full mailbox synchronization, MIME parsing, retention policy, attachment policy, or outbound SMTP support."];
        scope: "local-protocol";
     };
     credentialRequirements: readonly [{
        description: "Mailbox host, port, TLS mode, and mailbox folder configuration.";
        id: "imap-server";
        label: "IMAP server settings";
        required: true;
      }, {
        description: "Mailbox username with password, OAuth2 access token, or externally supplied auth.";
        id: "imap-mailbox-credentials";
        label: "IMAP mailbox credentials";
        required: true;
     }];
     directions: readonly ["inbound-only"];
     id: "email.imap";
     limitations: readonly ["This package does not implement full mailbox synchronization, storage, retention, MIME parsing policy, attachment handling policy, deletion policy, or outbound SMTP.", "SDK users own mailbox selection, search scope, flag mutation policy, retention, redaction, and concurrency limits."];
     maintainers: readonly [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           fullMailboxSync: "not-covered";
           mailboxReadiness: "provider-supported-via-protocol-library";
           messageFetch: "provider-supported-via-protocol-library";
           messageSearch: "provider-supported-via-protocol-library";
           mimeParsingAttachments: "not-covered";
           outboundSmtp: "not-covered";
        };
        directSliceMetadata: {
           allowlist: readonly ["connect", "logout", "mailboxOpen", "status", "search", "fetch"];
           checksum: "npm:imapflow@1.4.2";
           source: "RFC 9051 plus ImapFlow 1.4.2 declarations";
        };
        implementation: {
           integrationKitStatus: "implemented";
           libraryPackage: "imapflow";
           libraryVersionRange: "^1.4.2";
           manifestImport: "no-sdk-client-initialization";
           protocolSource: "RFC 9051";
           strategy: "protocol-library";
           verifiedAt: "2026-06-21";
           verifiedPackageVersion: "1.4.2";
        };
        rawClientEscapeHatch: "ImapFlow client exposed from createImapEmailClient().rawClient";
     };
     name: "IMAP Mailbox";
     operations: readonly [{
        alias: "imap.mailbox.check";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        extension: true;
        providerObject: "imapMailbox";
      }, {
        alias: "email.thread.search";
        capability: "search-provider-object";
        exposesSensitiveData: true;
        providerObject: "emailMessage";
      }, {
        alias: "email.thread.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        providerObject: "emailMessage";
     }];
     packageName: "@cognidesk/integration-email-imap";
     privacyNotes: readonly ["IMAP messages can contain customer content, addresses, headers, attachments, and mailbox folder metadata.", "Mailbox credentials stay server-side and are represented only as readiness state."];
     provider: "imap";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: ("imap.mailbox.check" | "email.thread.search" | "email.thread.read")[];
  operations: {
     email.thread.read: (input) => Promise<unknown[]>;
     email.thread.search: (input) => Promise<number[]>;
     imap.mailbox.check: () => Promise<ImapMailboxReadiness>;
  };
  rawClient: ImapRawClient;
  getOperationHandler: {
     email.thread.read: (input) => Promise<unknown[]>;
     email.thread.search: (input) => Promise<number[]>;
     imap.mailbox.check: () => Promise<ImapMailboxReadiness>;
  }[Alias];
  requireOperationHandler: {
     email.thread.read: (input) => Promise<unknown[]>;
     email.thread.search: (input) => Promise<number[]>;
     imap.mailbox.check: () => Promise<ImapMailboxReadiness>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     email.thread.read: (input) => Promise<unknown[]>;
     email.thread.search: (input) => Promise<number[]>;
     imap.mailbox.check: () => Promise<ImapMailboxReadiness>;
  }[Alias]>>>;
}
```

| Name | Type |
| ------ | ------ |
| `bindingReport` | [`OperationBindingReport`](../../../packages/integration-kit/dist.md#operationbindingreport) |
| `client` | [`ImapEmailClient`](#imapemailclient) |
| `manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage`: \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations`: `string`[]; `maintainers`: \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `Record`\<`string`, `unknown`\>; `name`: `string`; `operations`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes`: `string`[]; `provider`: `string`; `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} & \{ `capabilities`: readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Checks mailbox readiness and fetches explicitly requested message data through ImapFlow."`; `exposesSensitiveData`: `true`; `label`: `"Read IMAP mailbox data"`; `providerObjects`: readonly \[\{ `kind`: `"imapMailbox"`; `label`: `"IMAP Mailbox"`; \}, \{ `kind`: `"emailMessage"`; `label`: `"Email Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Runs SDK-user supplied IMAP searches through ImapFlow."`; `exposesSensitiveData`: `true`; `label`: `"Search IMAP mailbox"`; `providerObjects`: readonly \[\{ `kind`: `"emailMessage"`; `label`: `"Email Message"`; \}\]; `requiresCredential`: `true`; \}\]; `category`: `"email"`; `channelAudiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `coverage`: \{ `evidence`: readonly \[\{ `label`: `"RFC 9051 IMAP4rev2"`; `url`: `"https://datatracker.ietf.org/doc/html/rfc9051"`; \}, \{ `label`: `"ImapFlow"`; `url`: `"https://imapflow.com/"`; \}\]; `notes`: readonly \[`"Coverage is a focused Cognidesk IMAP protocol adapter backed by ImapFlow."`, `"This package does not claim full mailbox synchronization, MIME parsing, retention policy, attachment policy, or outbound SMTP support."`\]; `scope`: `"local-protocol"`; \}; `credentialRequirements`: readonly \[\{ `description`: `"Mailbox host, port, TLS mode, and mailbox folder configuration."`; `id`: `"imap-server"`; `label`: `"IMAP server settings"`; `required`: `true`; \}, \{ `description`: `"Mailbox username with password, OAuth2 access token, or externally supplied auth."`; `id`: `"imap-mailbox-credentials"`; `label`: `"IMAP mailbox credentials"`; `required`: `true`; \}\]; `directions`: readonly \[`"inbound-only"`\]; `id`: `"email.imap"`; `limitations`: readonly \[`"This package does not implement full mailbox synchronization, storage, retention, MIME parsing policy, attachment handling policy, deletion policy, or outbound SMTP."`, `"SDK users own mailbox selection, search scope, flag mutation policy, retention, redaction, and concurrency limits."`\]; `maintainers`: readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\]; `metadata`: \{ `channelCoverage`: \{ `fullMailboxSync`: `"not-covered"`; `mailboxReadiness`: `"provider-supported-via-protocol-library"`; `messageFetch`: `"provider-supported-via-protocol-library"`; `messageSearch`: `"provider-supported-via-protocol-library"`; `mimeParsingAttachments`: `"not-covered"`; `outboundSmtp`: `"not-covered"`; \}; `directSliceMetadata`: \{ `allowlist`: readonly \[`"connect"`, `"logout"`, `"mailboxOpen"`, `"status"`, `"search"`, `"fetch"`\]; `checksum`: `"npm:imapflow@1.4.2"`; `source`: `"RFC 9051 plus ImapFlow 1.4.2 declarations"`; \}; `implementation`: \{ `integrationKitStatus`: `"implemented"`; `libraryPackage`: `"imapflow"`; `libraryVersionRange`: `"^1.4.2"`; `manifestImport`: `"no-sdk-client-initialization"`; `protocolSource`: `"RFC 9051"`; `strategy`: `"protocol-library"`; `verifiedAt`: `"2026-06-21"`; `verifiedPackageVersion`: `"1.4.2"`; \}; `rawClientEscapeHatch`: `"ImapFlow client exposed from createImapEmailClient().rawClient"`; \}; `name`: `"IMAP Mailbox"`; `operations`: readonly \[\{ `alias`: `"imap.mailbox.check"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"imapMailbox"`; \}, \{ `alias`: `"email.thread.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"email.thread.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; \}\]; `packageName`: `"@cognidesk/integration-email-imap"`; `privacyNotes`: readonly \[`"IMAP messages can contain customer content, addresses, headers, attachments, and mailbox folder metadata."`, `"Mailbox credentials stay server-side and are represented only as readiness state."`\]; `provider`: `"imap"`; `trustLevel`: `"official"`; \} |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `operationAliases` | (`"imap.mailbox.check"` \| `"email.thread.search"` \| `"email.thread.read"`)[] |
| `operations` | \{ `email.thread.read`: (`input`) => `Promise`\<`unknown`[]\>; `email.thread.search`: (`input`) => `Promise`\<`number`[]\>; `imap.mailbox.check`: () => `Promise`\<[`ImapMailboxReadiness`](#imapmailboxreadiness)\>; \} |
| `operations.email.thread.read()` | (`input`) => `Promise`\<`unknown`[]\> |
| `operations.email.thread.search()` | (`input`) => `Promise`\<`number`[]\> |
| `operations.imap.mailbox.check()` | () => `Promise`\<[`ImapMailboxReadiness`](#imapmailboxreadiness)\> |
| `rawClient` | [`ImapRawClient`](#imaprawclient) |
| `getOperationHandler()` | (`alias`) => \{ `email.thread.read`: (`input`) => `Promise`\<`unknown`[]\>; `email.thread.search`: (`input`) => `Promise`\<`number`[]\>; `imap.mailbox.check`: () => `Promise`\<[`ImapMailboxReadiness`](#imapmailboxreadiness)\>; \}\[`Alias`\] |
| `requireOperationHandler()` | (`alias`) => \{ `email.thread.read`: (`input`) => `Promise`\<`unknown`[]\>; `email.thread.search`: (`input`) => `Promise`\<`number`[]\>; `imap.mailbox.check`: () => `Promise`\<[`ImapMailboxReadiness`](#imapmailboxreadiness)\>; \}\[`Alias`\] |
| `run()` | ( `alias`, `input`, `context?`) => `Promise`\<`Awaited`\<`ReturnType`\<\{ `email.thread.read`: (`input`) => `Promise`\<`unknown`[]\>; `email.thread.search`: (`input`) => `Promise`\<`number`[]\>; `imap.mailbox.check`: () => `Promise`\<[`ImapMailboxReadiness`](#imapmailboxreadiness)\>; \}\[`Alias`\]\>\>\> |

***

### createImapEmailLiveChecks()

```ts
function createImapEmailLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: ImapMailboxReadiness;
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ImapEmailClientOptions`](#imapemailclientoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: [`ImapMailboxReadiness`](#imapmailboxreadiness);
  \}\>;
\}[]

***

### imapEmailCredentialStatuses()

```ts
function imapEmailCredentialStatuses(input): {
  expiresAt?: string;
  message?: string;
  providerPackageId?: string;
  requirementId: string;
  scopes?: string[];
  state:   | "required"
     | "configured"
     | "permission-blocked"
     | "not-required"
     | "missing"
     | "expired"
     | "insufficient-scope"
     | "unavailable";
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ImapCredentialStatusInput`](#imapcredentialstatusinput) |

#### Returns

\{
  `expiresAt?`: `string`;
  `message?`: `string`;
  `providerPackageId?`: `string`;
  `requirementId`: `string`;
  `scopes?`: `string`[];
  `state`:   \| `"required"`
     \| `"configured"`
     \| `"permission-blocked"`
     \| `"not-required"`
     \| `"missing"`
     \| `"expired"`
     \| `"insufficient-scope"`
     \| `"unavailable"`;
\}[]

## References

### imapEmailProviderManifest

Re-exports [imapEmailProviderManifest](dist/manifest.md#imapemailprovidermanifest)
