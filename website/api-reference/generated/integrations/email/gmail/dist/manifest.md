# integrations/email/gmail/dist/manifest

## Variables

### gmailEmailProviderManifest

```ts
const gmailEmailProviderManifest: {
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
     capability: "receive";
     description: "Parses Gmail Pub/Sub notifications and reads Gmail watch/history cursors.";
     exposesSensitiveData: true;
     label: "Receive Gmail mailbox changes";
     providerObjects: readonly [{
        kind: "mailbox";
        label: "Gmail Mailbox";
      }, {
        kind: "gmailHistory";
        label: "Gmail History";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Gmail threads, messages, labels, and attachment bodies through the official SDK.";
     exposesSensitiveData: true;
     label: "Read Gmail threads and attachments";
     providerObjects: readonly [{
        kind: "emailThread";
        label: "Email Thread";
      }, {
        kind: "emailMessage";
        label: "Email Message";
      }, {
        kind: "attachment";
        label: "Attachment";
      }, {
        kind: "mailLabel";
        label: "Mail Label";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "draft";
     description: "Creates Gmail draft messages for SDK-user-configured approval workflows.";
     exposesSensitiveData: true;
     label: "Create Gmail drafts";
     providerObjects: readonly [{
        kind: "emailDraft";
        label: "Email Draft";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "send";
     description: "Sends Gmail replies, new messages, or existing drafts when SDK-user policy permits outbound contact.";
     exposesSensitiveData: true;
     label: "Send Gmail messages";
     providerObjects: readonly [{
        kind: "emailMessage";
        label: "Email Message";
      }, {
        kind: "emailDraft";
        label: "Email Draft";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Removes active inbox labels from Gmail threads when SDK-user policy permits mutation.";
     exposesSensitiveData: true;
     label: "Archive Gmail threads";
     providerObjects: readonly [{
        kind: "emailThread";
        label: "Email Thread";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "email";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "@googleapis/gmail package";
        url: "https://www.npmjs.com/package/@googleapis/gmail";
      }, {
        label: "Gmail API Node.js quickstart";
        url: "https://developers.google.com/workspace/gmail/api/quickstart/nodejs";
      }, {
        label: "Gmail users.threads.get";
        url: "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/get";
      }, {
        label: "Gmail users.messages.send";
        url: "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/send";
      }, {
        label: "Gmail users.drafts.create";
        url: "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/create";
      }, {
        label: "Gmail users.threads.modify";
        url: "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/modify";
      }, {
        label: "Gmail users.watch";
        url: "https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/watch";
      }, {
        label: "Gmail push notifications";
        url: "https://developers.google.com/workspace/gmail/api/guides/push";
     }];
     notes: readonly ["Coverage is intentionally scoped to normalized Cognidesk email support workflows implemented by typed handlers.", "Implementation uses the official service-specific @googleapis/gmail SDK. Broader Gmail methods remain accessible through GmailEmailClient.rawClient instead of generated Cognidesk-owned full API functions.", "Operation handlers are bound through @cognidesk/integration-kit so manifest operations and executable handlers must stay in exact parity.", "Receive coverage is Gmail watch/history foundation plus Google Cloud Pub/Sub push notification parsing; Pub/Sub topic/subscription hosting, authentication, retry, and history synchronization policy are SDK-user responsibilities."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side OAuth access token or injected official Gmail SDK auth client.";
     id: "google-oauth-access-token";
     label: "Google OAuth access token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["https://www.googleapis.com/auth/gmail.readonly", "https://www.googleapis.com/auth/gmail.compose", "https://www.googleapis.com/auth/gmail.send", "https://www.googleapis.com/auth/gmail.modify", "https://www.googleapis.com/auth/gmail.metadata"];
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "email.gmail";
  limitations: readonly ["Available operations depend on OAuth scopes, Google Workspace policy, delegated user, and mailbox state configured by the SDK user.", "Gmail watch notifications require an SDK-user-managed Google Cloud Pub/Sub topic, subscription, webhook/worker, and history synchronization strategy.", "Draft approval, auto-send, retention, redaction, and outbound-contact policy are SDK-user configuration.", "This package does not claim full Gmail API coverage; use rawClient for advanced official SDK methods."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        broaderGmailApi: "provider-supported-raw-client";
        gmailAttachments: "typed-read-body";
        gmailDrafts: "typed-create-and-send";
        gmailLabels: "typed-list";
        gmailMessages: "typed-send-and-reply";
        gmailThreads: "typed-read-and-archive";
        gmailWatchHistory: "typed-watch-history-foundation";
        pubSubPushDelivery: "typed-parse-only-sdk-owned-hosting";
     };
     implementation: {
        integrationKitStatus: "implemented";
        manifestImport: "no-sdk-client-initialization";
        rawClientEscapeHatch: "GmailEmailClient.rawClient";
        sdkPackage: "@googleapis/gmail";
        sdkVersionRange: "^17.0.0";
        strategy: "official-sdk";
     };
     scopeAlternatives: {
        metadataOnlyCaveat: "Gmail metadata-only scopes support profile/watch/read metadata surfaces, but SDK users must avoid query-dependent listing where the Gmail API disallows q with gmail.metadata.";
        profile: readonly ["https://mail.google.com/", "https://www.googleapis.com/auth/gmail.modify", "https://www.googleapis.com/auth/gmail.compose", "https://www.googleapis.com/auth/gmail.readonly", "https://www.googleapis.com/auth/gmail.metadata"];
        send: readonly ["https://mail.google.com/", "https://www.googleapis.com/auth/gmail.modify", "https://www.googleapis.com/auth/gmail.compose", "https://www.googleapis.com/auth/gmail.send"];
        watch: readonly ["https://mail.google.com/", "https://www.googleapis.com/auth/gmail.modify", "https://www.googleapis.com/auth/gmail.readonly", "https://www.googleapis.com/auth/gmail.metadata"];
     };
  };
  name: "Gmail";
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
  packageName: "@cognidesk/integration-email-gmail";
  privacyNotes: readonly ["Gmail messages can contain customer content, attachments, addresses, labels, and thread history.", "OAuth tokens stay server-side and are represented in Studio only as credential readiness."];
  provider: "gmail";
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Parses Gmail Pub/Sub notifications and reads Gmail watch/history cursors."`; `exposesSensitiveData`: `true`; `label`: `"Receive Gmail mailbox changes"`; `providerObjects`: readonly \[\{ `kind`: `"mailbox"`; `label`: `"Gmail Mailbox"`; \}, \{ `kind`: `"gmailHistory"`; `label`: `"Gmail History"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Gmail threads, messages, labels, and attachment bodies through the official SDK."`; `exposesSensitiveData`: `true`; `label`: `"Read Gmail threads and attachments"`; `providerObjects`: readonly \[\{ `kind`: `"emailThread"`; `label`: `"Email Thread"`; \}, \{ `kind`: `"emailMessage"`; `label`: `"Email Message"`; \}, \{ `kind`: `"attachment"`; `label`: `"Attachment"`; \}, \{ `kind`: `"mailLabel"`; `label`: `"Mail Label"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Creates Gmail draft messages for SDK-user-configured approval workflows."`; `exposesSensitiveData`: `true`; `label`: `"Create Gmail drafts"`; `providerObjects`: readonly \[\{ `kind`: `"emailDraft"`; `label`: `"Email Draft"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"send"`; `description`: `"Sends Gmail replies, new messages, or existing drafts when SDK-user policy permits outbound contact."`; `exposesSensitiveData`: `true`; `label`: `"Send Gmail messages"`; `providerObjects`: readonly \[\{ `kind`: `"emailMessage"`; `label`: `"Email Message"`; \}, \{ `kind`: `"emailDraft"`; `label`: `"Email Draft"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Removes active inbox labels from Gmail threads when SDK-user policy permits mutation."`; `exposesSensitiveData`: `true`; `label`: `"Archive Gmail threads"`; `providerObjects`: readonly \[\{ `kind`: `"emailThread"`; `label`: `"Email Thread"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"email"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"@googleapis/gmail package"`; `url`: `"https://www.npmjs.com/package/@googleapis/gmail"`; \}, \{ `label`: `"Gmail API Node.js quickstart"`; `url`: `"https://developers.google.com/workspace/gmail/api/quickstart/nodejs"`; \}, \{ `label`: `"Gmail users.threads.get"`; `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/get"`; \}, \{ `label`: `"Gmail users.messages.send"`; `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/send"`; \}, \{ `label`: `"Gmail users.drafts.create"`; `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/create"`; \}, \{ `label`: `"Gmail users.threads.modify"`; `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/modify"`; \}, \{ `label`: `"Gmail users.watch"`; `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/watch"`; \}, \{ `label`: `"Gmail push notifications"`; `url`: `"https://developers.google.com/workspace/gmail/api/guides/push"`; \}\]; `notes`: readonly \[`"Coverage is intentionally scoped to normalized Cognidesk email support workflows implemented by typed handlers."`, `"Implementation uses the official service-specific @googleapis/gmail SDK. Broader Gmail methods remain accessible through GmailEmailClient.rawClient instead of generated Cognidesk-owned full API functions."`, `"Operation handlers are bound through @cognidesk/integration-kit so manifest operations and executable handlers must stay in exact parity."`, `"Receive coverage is Gmail watch/history foundation plus Google Cloud Pub/Sub push notification parsing; Pub/Sub topic/subscription hosting, authentication, retry, and history synchronization policy are SDK-user responsibilities."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"@googleapis/gmail package"`; `url`: `"https://www.npmjs.com/package/@googleapis/gmail"`; \}, \{ `label`: `"Gmail API Node.js quickstart"`; `url`: `"https://developers.google.com/workspace/gmail/api/quickstart/nodejs"`; \}, \{ `label`: `"Gmail users.threads.get"`; `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/get"`; \}, \{ `label`: `"Gmail users.messages.send"`; `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.messages/send"`; \}, \{ `label`: `"Gmail users.drafts.create"`; `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.drafts/create"`; \}, \{ `label`: `"Gmail users.threads.modify"`; `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users.threads/modify"`; \}, \{ `label`: `"Gmail users.watch"`; `url`: `"https://developers.google.com/workspace/gmail/api/reference/rest/v1/users/watch"`; \}, \{ `label`: `"Gmail push notifications"`; `url`: `"https://developers.google.com/workspace/gmail/api/guides/push"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is intentionally scoped to normalized Cognidesk email support workflows implemented by typed handlers."`, `"Implementation uses the official service-specific @googleapis/gmail SDK. Broader Gmail methods remain accessible through GmailEmailClient.rawClient instead of generated Cognidesk-owned full API functions."`, `"Operation handlers are bound through @cognidesk/integration-kit so manifest operations and executable handlers must stay in exact parity."`, `"Receive coverage is Gmail watch/history foundation plus Google Cloud Pub/Sub push notification parsing; Pub/Sub topic/subscription hosting, authentication, retry, and history synchronization policy are SDK-user responsibilities."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Server-side OAuth access token or injected official Gmail SDK auth client."`; `id`: `"google-oauth-access-token"`; `label`: `"Google OAuth access token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: readonly \[`"https://www.googleapis.com/auth/gmail.readonly"`, `"https://www.googleapis.com/auth/gmail.compose"`, `"https://www.googleapis.com/auth/gmail.send"`, `"https://www.googleapis.com/auth/gmail.modify"`, `"https://www.googleapis.com/auth/gmail.metadata"`\]; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"email.gmail"` |
| `limitations` | readonly \[`"Available operations depend on OAuth scopes, Google Workspace policy, delegated user, and mailbox state configured by the SDK user."`, `"Gmail watch notifications require an SDK-user-managed Google Cloud Pub/Sub topic, subscription, webhook/worker, and history synchronization strategy."`, `"Draft approval, auto-send, retention, redaction, and outbound-contact policy are SDK-user configuration."`, `"This package does not claim full Gmail API coverage; use rawClient for advanced official SDK methods."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `broaderGmailApi`: `"provider-supported-raw-client"`; `gmailAttachments`: `"typed-read-body"`; `gmailDrafts`: `"typed-create-and-send"`; `gmailLabels`: `"typed-list"`; `gmailMessages`: `"typed-send-and-reply"`; `gmailThreads`: `"typed-read-and-archive"`; `gmailWatchHistory`: `"typed-watch-history-foundation"`; `pubSubPushDelivery`: `"typed-parse-only-sdk-owned-hosting"`; \}; `implementation`: \{ `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `rawClientEscapeHatch`: `"GmailEmailClient.rawClient"`; `sdkPackage`: `"@googleapis/gmail"`; `sdkVersionRange`: `"^17.0.0"`; `strategy`: `"official-sdk"`; \}; `scopeAlternatives`: \{ `metadataOnlyCaveat`: `"Gmail metadata-only scopes support profile/watch/read metadata surfaces, but SDK users must avoid query-dependent listing where the Gmail API disallows q with gmail.metadata."`; `profile`: readonly \[`"https://mail.google.com/"`, `"https://www.googleapis.com/auth/gmail.modify"`, `"https://www.googleapis.com/auth/gmail.compose"`, `"https://www.googleapis.com/auth/gmail.readonly"`, `"https://www.googleapis.com/auth/gmail.metadata"`\]; `send`: readonly \[`"https://mail.google.com/"`, `"https://www.googleapis.com/auth/gmail.modify"`, `"https://www.googleapis.com/auth/gmail.compose"`, `"https://www.googleapis.com/auth/gmail.send"`\]; `watch`: readonly \[`"https://mail.google.com/"`, `"https://www.googleapis.com/auth/gmail.modify"`, `"https://www.googleapis.com/auth/gmail.readonly"`, `"https://www.googleapis.com/auth/gmail.metadata"`\]; \}; \} |
| `metadata.channelCoverage` | \{ `broaderGmailApi`: `"provider-supported-raw-client"`; `gmailAttachments`: `"typed-read-body"`; `gmailDrafts`: `"typed-create-and-send"`; `gmailLabels`: `"typed-list"`; `gmailMessages`: `"typed-send-and-reply"`; `gmailThreads`: `"typed-read-and-archive"`; `gmailWatchHistory`: `"typed-watch-history-foundation"`; `pubSubPushDelivery`: `"typed-parse-only-sdk-owned-hosting"`; \} |
| `metadata.channelCoverage.broaderGmailApi` | `"provider-supported-raw-client"` |
| `metadata.channelCoverage.gmailAttachments` | `"typed-read-body"` |
| `metadata.channelCoverage.gmailDrafts` | `"typed-create-and-send"` |
| `metadata.channelCoverage.gmailLabels` | `"typed-list"` |
| `metadata.channelCoverage.gmailMessages` | `"typed-send-and-reply"` |
| `metadata.channelCoverage.gmailThreads` | `"typed-read-and-archive"` |
| `metadata.channelCoverage.gmailWatchHistory` | `"typed-watch-history-foundation"` |
| `metadata.channelCoverage.pubSubPushDelivery` | `"typed-parse-only-sdk-owned-hosting"` |
| `metadata.implementation` | \{ `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `rawClientEscapeHatch`: `"GmailEmailClient.rawClient"`; `sdkPackage`: `"@googleapis/gmail"`; `sdkVersionRange`: `"^17.0.0"`; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.integrationKitStatus` | `"implemented"` |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.rawClientEscapeHatch` | `"GmailEmailClient.rawClient"` |
| `metadata.implementation.sdkPackage` | `"@googleapis/gmail"` |
| `metadata.implementation.sdkVersionRange` | `"^17.0.0"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.scopeAlternatives` | \{ `metadataOnlyCaveat`: `"Gmail metadata-only scopes support profile/watch/read metadata surfaces, but SDK users must avoid query-dependent listing where the Gmail API disallows q with gmail.metadata."`; `profile`: readonly \[`"https://mail.google.com/"`, `"https://www.googleapis.com/auth/gmail.modify"`, `"https://www.googleapis.com/auth/gmail.compose"`, `"https://www.googleapis.com/auth/gmail.readonly"`, `"https://www.googleapis.com/auth/gmail.metadata"`\]; `send`: readonly \[`"https://mail.google.com/"`, `"https://www.googleapis.com/auth/gmail.modify"`, `"https://www.googleapis.com/auth/gmail.compose"`, `"https://www.googleapis.com/auth/gmail.send"`\]; `watch`: readonly \[`"https://mail.google.com/"`, `"https://www.googleapis.com/auth/gmail.modify"`, `"https://www.googleapis.com/auth/gmail.readonly"`, `"https://www.googleapis.com/auth/gmail.metadata"`\]; \} |
| `metadata.scopeAlternatives.metadataOnlyCaveat` | `"Gmail metadata-only scopes support profile/watch/read metadata surfaces, but SDK users must avoid query-dependent listing where the Gmail API disallows q with gmail.metadata."` |
| `metadata.scopeAlternatives.profile` | readonly \[`"https://mail.google.com/"`, `"https://www.googleapis.com/auth/gmail.modify"`, `"https://www.googleapis.com/auth/gmail.compose"`, `"https://www.googleapis.com/auth/gmail.readonly"`, `"https://www.googleapis.com/auth/gmail.metadata"`\] |
| `metadata.scopeAlternatives.send` | readonly \[`"https://mail.google.com/"`, `"https://www.googleapis.com/auth/gmail.modify"`, `"https://www.googleapis.com/auth/gmail.compose"`, `"https://www.googleapis.com/auth/gmail.send"`\] |
| `metadata.scopeAlternatives.watch` | readonly \[`"https://mail.google.com/"`, `"https://www.googleapis.com/auth/gmail.modify"`, `"https://www.googleapis.com/auth/gmail.readonly"`, `"https://www.googleapis.com/auth/gmail.metadata"`\] |
| `name` | `"Gmail"` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `"@cognidesk/integration-email-gmail"` |
| `privacyNotes` | readonly \[`"Gmail messages can contain customer content, attachments, addresses, labels, and thread history."`, `"OAuth tokens stay server-side and are represented in Studio only as credential readiness."`\] |
| `provider` | `"gmail"` |
| `trustLevel` | `"official"` |
