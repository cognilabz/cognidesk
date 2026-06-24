# integrations/email/outlook/dist/manifest

## Variables

### outlookEmailManifestInput

```ts
const outlookEmailManifestInput: {
  capabilities: [{
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "receive";
     description: "Reads Microsoft Graph message resources and validates Outlook change notifications.";
     exposesSensitiveData: true;
     label: "Read Outlook messages and notifications";
     providerObjects: [{
        kind: "outlookMailboxUser";
        label: "Outlook Mailbox User";
      }, {
        kind: "outlookMessage";
        label: "Outlook Message";
      }, {
        kind: "outlookChangeNotification";
        label: "Outlook Change Notification";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "draft";
     description: "Creates Microsoft Graph draft message resources for SDK-user-configured approval workflows.";
     exposesSensitiveData: true;
     label: "Create Outlook drafts";
     providerObjects: [{
        kind: "outlookMessage";
        label: "Outlook Draft Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "mixed"];
     capability: "send";
     description: "Calls Microsoft Graph sendMail when SDK-user policy permits outbound contact.";
     exposesSensitiveData: true;
     label: "Send Outlook mail";
     providerObjects: [{
        kind: "outlookMessage";
        label: "Outlook Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads messages, attachments, mailbox users, and raw Graph resources needed by support workflows.";
     exposesSensitiveData: true;
     label: "Read Outlook mailbox objects";
     providerObjects: [{
        kind: "outlookMessage";
        label: "Outlook Message";
      }, {
        kind: "outlookAttachment";
        label: "Outlook Attachment";
      }, {
        kind: "outlookMailboxUser";
        label: "Outlook Mailbox User";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Microsoft Graph message fields such as categories, importance, read state, or draft content.";
     exposesSensitiveData: true;
     label: "Update Outlook messages";
     providerObjects: [{
        kind: "outlookMessage";
        label: "Outlook Message";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "email";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Microsoft Graph JavaScript client";
        url: "https://www.npmjs.com/package/@microsoft/microsoft-graph-client";
      }, {
        label: "Microsoft Graph create message";
        url: "https://learn.microsoft.com/en-us/graph/api/user-post-messages?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph sendMail";
        url: "https://learn.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph message delta";
        url: "https://learn.microsoft.com/en-us/graph/api/message-delta?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph list attachments";
        url: "https://learn.microsoft.com/en-us/graph/api/message-list-attachments?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph create subscription";
        url: "https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph webhook subscription lifecycle";
        url: "https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks";
     }];
     notes: ["Coverage includes SDK-backed Microsoft Graph Outlook mailbox support workflows: messages, mailFolders, attachments, sendMail, subscriptions, mailbox user readiness, and change notifications.", "The package uses @microsoft/microsoft-graph-client for Graph calls and keeps Cognidesk-normalized helper methods and operation handlers.", "This is not full Microsoft Graph coverage. Calendar, contacts, files/Drive, identity, admin, security, and broader Graph resources remain outside this Outlook adapter."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     description: "Server-side OAuth access token for Microsoft Graph mail APIs. Required permissions are operation-specific.";
     id: "microsoft-graph-oauth-access-token";
     label: "Microsoft Graph OAuth access token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["Mail.Read", "Mail.ReadWrite", "Mail.Send", "User.Read"];
   }, {
     description: "Delegated /me mailbox access or a configured Microsoft Graph user ID/userPrincipalName.";
     id: "microsoft-graph-mailbox-user";
     label: "Mailbox user";
     required: false;
   }, {
     description: "SDK-user-owned clientState value used to validate Microsoft Graph change notifications.";
     id: "microsoft-graph-webhook-client-state";
     label: "Webhook clientState secret";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "email.outlook";
  limitations: ["Available operations depend on Microsoft Graph permissions, OAuth grant type, tenant admin consent, conditional access, mailbox licensing, Exchange Online policy, and delegated or application user selection.", "This package provides transport and webhook foundations; it does not choose default automation, retention, consent, retry, or rate-limit policies.", "Webhook validation is based on Microsoft Graph clientState matching. Subscription renewal/delete/reauthorize policy remains SDK-user-owned."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        attachments: "sdk-owned-list-get-download";
        drafts: "sdk-owned-create";
        mailboxUser: "sdk-owned-read";
        messages: "sdk-owned-list-get-delta-update";
        sendMail: "sdk-owned-send";
        subscriptions: "sdk-owned-create";
        webhookClientState: "typed-validate";
     };
     implementation: {
        manifestOnlyExport: "@cognidesk/integration-email-outlook/manifest";
        rawClientEscapeHatch: "rawClient";
        sdkPackage: "@microsoft/microsoft-graph-client";
        strategy: "official-sdk";
     };
  };
  name: "Microsoft Outlook";
  operations: [{
     alias: "email.receive";
     capability: "receive";
     exposesSensitiveData: true;
     label: "Receive Outlook change notifications";
     providerObject: "emailMessage";
   }, {
     alias: "email.send";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send Outlook mail";
     providerObject: "emailMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "email.draft.create";
     capability: "draft";
     exposesSensitiveData: true;
     label: "Create Outlook draft";
     providerObject: "emailDraft";
     sideEffect: true;
   }, {
     alias: "email.attachments.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     label: "Read Outlook attachments";
     providerObject: "attachment";
   }, {
     alias: "mailbox.watch";
     capability: "receive";
     label: "Create Microsoft Graph mailbox subscription";
     providerObject: "mailbox";
     sideEffect: true;
   }, {
     alias: "outlook.message.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "List Outlook messages";
     providerObject: "emailMessage";
   }, {
     alias: "outlook.message.get";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Get Outlook message";
     providerObject: "emailMessage";
   }, {
     alias: "outlook.message.delta";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Outlook message delta page";
     providerObject: "emailMessage";
   }, {
     alias: "outlook.message.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Update Outlook message";
     providerObject: "emailMessage";
     sideEffect: true;
   }, {
     alias: "outlook.mailboxUser.get";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Get Outlook mailbox user";
     providerObject: "mailbox";
   }, {
     alias: "outlook.webhook.parse";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse Outlook webhook";
     providerObject: "emailMessage";
   }, {
     alias: "outlook.rawGraph.request";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Run raw Microsoft Graph request";
     metadata: {
        rawClientEscapeHatch: true;
     };
     providerObject: "mailbox";
  }];
  packageName: "@cognidesk/integration-email-outlook";
  privacyNotes: ["Outlook messages can contain customer content, attachments, addresses, recipients, categories, internet headers, and conversation history.", "Microsoft Graph OAuth access tokens and webhook clientState secrets stay server-side and are represented in Studio only as credential readiness.", "SDK users own outbound approval, auto-send controls, contact consent, tenant/admin policy review, retention, redaction, attachment retrieval, and deletion behavior."];
  provider: "outlook";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Reads Microsoft Graph message resources and validates Outlook change notifications."`; `exposesSensitiveData`: `true`; `label`: `"Read Outlook messages and notifications"`; `providerObjects`: \[\{ `kind`: `"outlookMailboxUser"`; `label`: `"Outlook Mailbox User"`; \}, \{ `kind`: `"outlookMessage"`; `label`: `"Outlook Message"`; \}, \{ `kind`: `"outlookChangeNotification"`; `label`: `"Outlook Change Notification"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Creates Microsoft Graph draft message resources for SDK-user-configured approval workflows."`; `exposesSensitiveData`: `true`; `label`: `"Create Outlook drafts"`; `providerObjects`: \[\{ `kind`: `"outlookMessage"`; `label`: `"Outlook Draft Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"mixed"`\]; `capability`: `"send"`; `description`: `"Calls Microsoft Graph sendMail when SDK-user policy permits outbound contact."`; `exposesSensitiveData`: `true`; `label`: `"Send Outlook mail"`; `providerObjects`: \[\{ `kind`: `"outlookMessage"`; `label`: `"Outlook Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads messages, attachments, mailbox users, and raw Graph resources needed by support workflows."`; `exposesSensitiveData`: `true`; `label`: `"Read Outlook mailbox objects"`; `providerObjects`: \[\{ `kind`: `"outlookMessage"`; `label`: `"Outlook Message"`; \}, \{ `kind`: `"outlookAttachment"`; `label`: `"Outlook Attachment"`; \}, \{ `kind`: `"outlookMailboxUser"`; `label`: `"Outlook Mailbox User"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates Microsoft Graph message fields such as categories, importance, read state, or draft content."`; `exposesSensitiveData`: `true`; `label`: `"Update Outlook messages"`; `providerObjects`: \[\{ `kind`: `"outlookMessage"`; `label`: `"Outlook Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"email"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Microsoft Graph JavaScript client"`; `url`: `"https://www.npmjs.com/package/@microsoft/microsoft-graph-client"`; \}, \{ `label`: `"Microsoft Graph create message"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/user-post-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph sendMail"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph message delta"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/message-delta?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph list attachments"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/message-list-attachments?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph create subscription"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph webhook subscription lifecycle"`; `url`: `"https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks"`; \}\]; `notes`: \[`"Coverage includes SDK-backed Microsoft Graph Outlook mailbox support workflows: messages, mailFolders, attachments, sendMail, subscriptions, mailbox user readiness, and change notifications."`, `"The package uses @microsoft/microsoft-graph-client for Graph calls and keeps Cognidesk-normalized helper methods and operation handlers."`, `"This is not full Microsoft Graph coverage. Calendar, contacts, files/Drive, identity, admin, security, and broader Graph resources remain outside this Outlook adapter."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Microsoft Graph JavaScript client"`; `url`: `"https://www.npmjs.com/package/@microsoft/microsoft-graph-client"`; \}, \{ `label`: `"Microsoft Graph create message"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/user-post-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph sendMail"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph message delta"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/message-delta?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph list attachments"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/message-list-attachments?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph create subscription"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph webhook subscription lifecycle"`; `url`: `"https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks"`; \}\] |
| `coverage.notes` | \[`"Coverage includes SDK-backed Microsoft Graph Outlook mailbox support workflows: messages, mailFolders, attachments, sendMail, subscriptions, mailbox user readiness, and change notifications."`, `"The package uses @microsoft/microsoft-graph-client for Graph calls and keeps Cognidesk-normalized helper methods and operation handlers."`, `"This is not full Microsoft Graph coverage. Calendar, contacts, files/Drive, identity, admin, security, and broader Graph resources remain outside this Outlook adapter."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `description`: `"Server-side OAuth access token for Microsoft Graph mail APIs. Required permissions are operation-specific."`; `id`: `"microsoft-graph-oauth-access-token"`; `label`: `"Microsoft Graph OAuth access token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: \[`"Mail.Read"`, `"Mail.ReadWrite"`, `"Mail.Send"`, `"User.Read"`\]; \}, \{ `description`: `"Delegated /me mailbox access or a configured Microsoft Graph user ID/userPrincipalName."`; `id`: `"microsoft-graph-mailbox-user"`; `label`: `"Mailbox user"`; `required`: `false`; \}, \{ `description`: `"SDK-user-owned clientState value used to validate Microsoft Graph change notifications."`; `id`: `"microsoft-graph-webhook-client-state"`; `label`: `"Webhook clientState secret"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"email.outlook"` |
| <a id="property-limitations"></a> `limitations` | \[`"Available operations depend on Microsoft Graph permissions, OAuth grant type, tenant admin consent, conditional access, mailbox licensing, Exchange Online policy, and delegated or application user selection."`, `"This package provides transport and webhook foundations; it does not choose default automation, retention, consent, retry, or rate-limit policies."`, `"Webhook validation is based on Microsoft Graph clientState matching. Subscription renewal/delete/reauthorize policy remains SDK-user-owned."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `channelCoverage`: \{ `attachments`: `"sdk-owned-list-get-download"`; `drafts`: `"sdk-owned-create"`; `mailboxUser`: `"sdk-owned-read"`; `messages`: `"sdk-owned-list-get-delta-update"`; `sendMail`: `"sdk-owned-send"`; `subscriptions`: `"sdk-owned-create"`; `webhookClientState`: `"typed-validate"`; \}; `implementation`: \{ `manifestOnlyExport`: `"@cognidesk/integration-email-outlook/manifest"`; `rawClientEscapeHatch`: `"rawClient"`; `sdkPackage`: `"@microsoft/microsoft-graph-client"`; `strategy`: `"official-sdk"`; \}; \} |
| `metadata.channelCoverage` | \{ `attachments`: `"sdk-owned-list-get-download"`; `drafts`: `"sdk-owned-create"`; `mailboxUser`: `"sdk-owned-read"`; `messages`: `"sdk-owned-list-get-delta-update"`; `sendMail`: `"sdk-owned-send"`; `subscriptions`: `"sdk-owned-create"`; `webhookClientState`: `"typed-validate"`; \} |
| `metadata.channelCoverage.attachments` | `"sdk-owned-list-get-download"` |
| `metadata.channelCoverage.drafts` | `"sdk-owned-create"` |
| `metadata.channelCoverage.mailboxUser` | `"sdk-owned-read"` |
| `metadata.channelCoverage.messages` | `"sdk-owned-list-get-delta-update"` |
| `metadata.channelCoverage.sendMail` | `"sdk-owned-send"` |
| `metadata.channelCoverage.subscriptions` | `"sdk-owned-create"` |
| `metadata.channelCoverage.webhookClientState` | `"typed-validate"` |
| `metadata.implementation` | \{ `manifestOnlyExport`: `"@cognidesk/integration-email-outlook/manifest"`; `rawClientEscapeHatch`: `"rawClient"`; `sdkPackage`: `"@microsoft/microsoft-graph-client"`; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.manifestOnlyExport` | `"@cognidesk/integration-email-outlook/manifest"` |
| `metadata.implementation.rawClientEscapeHatch` | `"rawClient"` |
| `metadata.implementation.sdkPackage` | `"@microsoft/microsoft-graph-client"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| <a id="property-name"></a> `name` | `"Microsoft Outlook"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"email.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `label`: `"Receive Outlook change notifications"`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"email.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Send Outlook mail"`; `providerObject`: `"emailMessage"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"email.draft.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `label`: `"Create Outlook draft"`; `providerObject`: `"emailDraft"`; `sideEffect`: `true`; \}, \{ `alias`: `"email.attachments.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read Outlook attachments"`; `providerObject`: `"attachment"`; \}, \{ `alias`: `"mailbox.watch"`; `capability`: `"receive"`; `label`: `"Create Microsoft Graph mailbox subscription"`; `providerObject`: `"mailbox"`; `sideEffect`: `true`; \}, \{ `alias`: `"outlook.message.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"List Outlook messages"`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"outlook.message.get"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Get Outlook message"`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"outlook.message.delta"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read Outlook message delta page"`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"outlook.message.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Update Outlook message"`; `providerObject`: `"emailMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"outlook.mailboxUser.get"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Get Outlook mailbox user"`; `providerObject`: `"mailbox"`; \}, \{ `alias`: `"outlook.webhook.parse"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Parse Outlook webhook"`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"outlook.rawGraph.request"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Run raw Microsoft Graph request"`; `metadata`: \{ `rawClientEscapeHatch`: `true`; \}; `providerObject`: `"mailbox"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-email-outlook"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Outlook messages can contain customer content, attachments, addresses, recipients, categories, internet headers, and conversation history."`, `"Microsoft Graph OAuth access tokens and webhook clientState secrets stay server-side and are represented in Studio only as credential readiness."`, `"SDK users own outbound approval, auto-send controls, contact consent, tenant/admin policy review, retention, redaction, attachment retrieval, and deletion behavior."`\] |
| <a id="property-provider"></a> `provider` | `"outlook"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### outlookEmailOperationAliases

```ts
const outlookEmailOperationAliases: {
  attachmentsRead: "email.attachments.read";
  draftCreate: "email.draft.create";
  mailboxUserGet: "outlook.mailboxUser.get";
  mailboxWatch: "mailbox.watch";
  messageDelta: "outlook.message.delta";
  messageGet: "outlook.message.get";
  messageList: "outlook.message.list";
  messageUpdate: "outlook.message.update";
  rawGraphRequest: "outlook.rawGraph.request";
  receive: "email.receive";
  send: "email.send";
  webhookParse: "outlook.webhook.parse";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-attachmentsread"></a> `attachmentsRead` | `"email.attachments.read"` |
| <a id="property-draftcreate"></a> `draftCreate` | `"email.draft.create"` |
| <a id="property-mailboxuserget"></a> `mailboxUserGet` | `"outlook.mailboxUser.get"` |
| <a id="property-mailboxwatch"></a> `mailboxWatch` | `"mailbox.watch"` |
| <a id="property-messagedelta"></a> `messageDelta` | `"outlook.message.delta"` |
| <a id="property-messageget"></a> `messageGet` | `"outlook.message.get"` |
| <a id="property-messagelist"></a> `messageList` | `"outlook.message.list"` |
| <a id="property-messageupdate"></a> `messageUpdate` | `"outlook.message.update"` |
| <a id="property-rawgraphrequest"></a> `rawGraphRequest` | `"outlook.rawGraph.request"` |
| <a id="property-receive"></a> `receive` | `"email.receive"` |
| <a id="property-send"></a> `send` | `"email.send"` |
| <a id="property-webhookparse"></a> `webhookParse` | `"outlook.webhook.parse"` |

***

### outlookEmailProviderManifest

```ts
const outlookEmailProviderManifest: {
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
     type: "unknown" | "community" | "official" | "partner";
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
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "receive";
     description: "Reads Microsoft Graph message resources and validates Outlook change notifications.";
     exposesSensitiveData: true;
     label: "Read Outlook messages and notifications";
     providerObjects: [{
        kind: "outlookMailboxUser";
        label: "Outlook Mailbox User";
      }, {
        kind: "outlookMessage";
        label: "Outlook Message";
      }, {
        kind: "outlookChangeNotification";
        label: "Outlook Change Notification";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "draft";
     description: "Creates Microsoft Graph draft message resources for SDK-user-configured approval workflows.";
     exposesSensitiveData: true;
     label: "Create Outlook drafts";
     providerObjects: [{
        kind: "outlookMessage";
        label: "Outlook Draft Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "mixed"];
     capability: "send";
     description: "Calls Microsoft Graph sendMail when SDK-user policy permits outbound contact.";
     exposesSensitiveData: true;
     label: "Send Outlook mail";
     providerObjects: [{
        kind: "outlookMessage";
        label: "Outlook Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads messages, attachments, mailbox users, and raw Graph resources needed by support workflows.";
     exposesSensitiveData: true;
     label: "Read Outlook mailbox objects";
     providerObjects: [{
        kind: "outlookMessage";
        label: "Outlook Message";
      }, {
        kind: "outlookAttachment";
        label: "Outlook Attachment";
      }, {
        kind: "outlookMailboxUser";
        label: "Outlook Mailbox User";
     }];
     requiresCredential: true;
   }, {
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Microsoft Graph message fields such as categories, importance, read state, or draft content.";
     exposesSensitiveData: true;
     label: "Update Outlook messages";
     providerObjects: [{
        kind: "outlookMessage";
        label: "Outlook Message";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "email";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Microsoft Graph JavaScript client";
        url: "https://www.npmjs.com/package/@microsoft/microsoft-graph-client";
      }, {
        label: "Microsoft Graph create message";
        url: "https://learn.microsoft.com/en-us/graph/api/user-post-messages?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph sendMail";
        url: "https://learn.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph message delta";
        url: "https://learn.microsoft.com/en-us/graph/api/message-delta?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph list attachments";
        url: "https://learn.microsoft.com/en-us/graph/api/message-list-attachments?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph create subscription";
        url: "https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0";
      }, {
        label: "Microsoft Graph webhook subscription lifecycle";
        url: "https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks";
     }];
     notes: ["Coverage includes SDK-backed Microsoft Graph Outlook mailbox support workflows: messages, mailFolders, attachments, sendMail, subscriptions, mailbox user readiness, and change notifications.", "The package uses @microsoft/microsoft-graph-client for Graph calls and keeps Cognidesk-normalized helper methods and operation handlers.", "This is not full Microsoft Graph coverage. Calendar, contacts, files/Drive, identity, admin, security, and broader Graph resources remain outside this Outlook adapter."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     description: "Server-side OAuth access token for Microsoft Graph mail APIs. Required permissions are operation-specific.";
     id: "microsoft-graph-oauth-access-token";
     label: "Microsoft Graph OAuth access token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: ["Mail.Read", "Mail.ReadWrite", "Mail.Send", "User.Read"];
   }, {
     description: "Delegated /me mailbox access or a configured Microsoft Graph user ID/userPrincipalName.";
     id: "microsoft-graph-mailbox-user";
     label: "Mailbox user";
     required: false;
   }, {
     description: "SDK-user-owned clientState value used to validate Microsoft Graph change notifications.";
     id: "microsoft-graph-webhook-client-state";
     label: "Webhook clientState secret";
     required: false;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "email.outlook";
  limitations: ["Available operations depend on Microsoft Graph permissions, OAuth grant type, tenant admin consent, conditional access, mailbox licensing, Exchange Online policy, and delegated or application user selection.", "This package provides transport and webhook foundations; it does not choose default automation, retention, consent, retry, or rate-limit policies.", "Webhook validation is based on Microsoft Graph clientState matching. Subscription renewal/delete/reauthorize policy remains SDK-user-owned."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        attachments: "sdk-owned-list-get-download";
        drafts: "sdk-owned-create";
        mailboxUser: "sdk-owned-read";
        messages: "sdk-owned-list-get-delta-update";
        sendMail: "sdk-owned-send";
        subscriptions: "sdk-owned-create";
        webhookClientState: "typed-validate";
     };
     implementation: {
        manifestOnlyExport: "@cognidesk/integration-email-outlook/manifest";
        rawClientEscapeHatch: "rawClient";
        sdkPackage: "@microsoft/microsoft-graph-client";
        strategy: "official-sdk";
     };
  };
  name: "Microsoft Outlook";
  operations: [{
     alias: "email.receive";
     capability: "receive";
     exposesSensitiveData: true;
     label: "Receive Outlook change notifications";
     providerObject: "emailMessage";
   }, {
     alias: "email.send";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send Outlook mail";
     providerObject: "emailMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "email.draft.create";
     capability: "draft";
     exposesSensitiveData: true;
     label: "Create Outlook draft";
     providerObject: "emailDraft";
     sideEffect: true;
   }, {
     alias: "email.attachments.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     label: "Read Outlook attachments";
     providerObject: "attachment";
   }, {
     alias: "mailbox.watch";
     capability: "receive";
     label: "Create Microsoft Graph mailbox subscription";
     providerObject: "mailbox";
     sideEffect: true;
   }, {
     alias: "outlook.message.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "List Outlook messages";
     providerObject: "emailMessage";
   }, {
     alias: "outlook.message.get";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Get Outlook message";
     providerObject: "emailMessage";
   }, {
     alias: "outlook.message.delta";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     label: "Read Outlook message delta page";
     providerObject: "emailMessage";
   }, {
     alias: "outlook.message.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Update Outlook message";
     providerObject: "emailMessage";
     sideEffect: true;
   }, {
     alias: "outlook.mailboxUser.get";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Get Outlook mailbox user";
     providerObject: "mailbox";
   }, {
     alias: "outlook.webhook.parse";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse Outlook webhook";
     providerObject: "emailMessage";
   }, {
     alias: "outlook.rawGraph.request";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     label: "Run raw Microsoft Graph request";
     metadata: {
        rawClientEscapeHatch: true;
     };
     providerObject: "mailbox";
  }];
  packageName: "@cognidesk/integration-email-outlook";
  privacyNotes: ["Outlook messages can contain customer content, attachments, addresses, recipients, categories, internet headers, and conversation history.", "Microsoft Graph OAuth access tokens and webhook clientState secrets stay server-side and are represented in Studio only as credential readiness.", "SDK users own outbound approval, auto-send controls, contact consent, tenant/admin policy review, retention, redaction, attachment retrieval, and deletion behavior."];
  provider: "outlook";
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
| `maintainers` | \{ `name`: `string`; `type`: `"unknown"` \| `"community"` \| `"official"` \| `"partner"`; `url?`: `string`; \}[] |
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
| `capabilities` | \[\{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Reads Microsoft Graph message resources and validates Outlook change notifications."`; `exposesSensitiveData`: `true`; `label`: `"Read Outlook messages and notifications"`; `providerObjects`: \[\{ `kind`: `"outlookMailboxUser"`; `label`: `"Outlook Mailbox User"`; \}, \{ `kind`: `"outlookMessage"`; `label`: `"Outlook Message"`; \}, \{ `kind`: `"outlookChangeNotification"`; `label`: `"Outlook Change Notification"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Creates Microsoft Graph draft message resources for SDK-user-configured approval workflows."`; `exposesSensitiveData`: `true`; `label`: `"Create Outlook drafts"`; `providerObjects`: \[\{ `kind`: `"outlookMessage"`; `label`: `"Outlook Draft Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"mixed"`\]; `capability`: `"send"`; `description`: `"Calls Microsoft Graph sendMail when SDK-user policy permits outbound contact."`; `exposesSensitiveData`: `true`; `label`: `"Send Outlook mail"`; `providerObjects`: \[\{ `kind`: `"outlookMessage"`; `label`: `"Outlook Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads messages, attachments, mailbox users, and raw Graph resources needed by support workflows."`; `exposesSensitiveData`: `true`; `label`: `"Read Outlook mailbox objects"`; `providerObjects`: \[\{ `kind`: `"outlookMessage"`; `label`: `"Outlook Message"`; \}, \{ `kind`: `"outlookAttachment"`; `label`: `"Outlook Attachment"`; \}, \{ `kind`: `"outlookMailboxUser"`; `label`: `"Outlook Mailbox User"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates Microsoft Graph message fields such as categories, importance, read state, or draft content."`; `exposesSensitiveData`: `true`; `label`: `"Update Outlook messages"`; `providerObjects`: \[\{ `kind`: `"outlookMessage"`; `label`: `"Outlook Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"email"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Microsoft Graph JavaScript client"`; `url`: `"https://www.npmjs.com/package/@microsoft/microsoft-graph-client"`; \}, \{ `label`: `"Microsoft Graph create message"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/user-post-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph sendMail"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph message delta"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/message-delta?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph list attachments"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/message-list-attachments?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph create subscription"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph webhook subscription lifecycle"`; `url`: `"https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks"`; \}\]; `notes`: \[`"Coverage includes SDK-backed Microsoft Graph Outlook mailbox support workflows: messages, mailFolders, attachments, sendMail, subscriptions, mailbox user readiness, and change notifications."`, `"The package uses @microsoft/microsoft-graph-client for Graph calls and keeps Cognidesk-normalized helper methods and operation handlers."`, `"This is not full Microsoft Graph coverage. Calendar, contacts, files/Drive, identity, admin, security, and broader Graph resources remain outside this Outlook adapter."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Microsoft Graph JavaScript client"`; `url`: `"https://www.npmjs.com/package/@microsoft/microsoft-graph-client"`; \}, \{ `label`: `"Microsoft Graph create message"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/user-post-messages?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph sendMail"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph message delta"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/message-delta?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph list attachments"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/message-list-attachments?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph create subscription"`; `url`: `"https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0"`; \}, \{ `label`: `"Microsoft Graph webhook subscription lifecycle"`; `url`: `"https://learn.microsoft.com/en-us/graph/change-notifications-delivery-webhooks"`; \}\] |
| `coverage.notes` | \[`"Coverage includes SDK-backed Microsoft Graph Outlook mailbox support workflows: messages, mailFolders, attachments, sendMail, subscriptions, mailbox user readiness, and change notifications."`, `"The package uses @microsoft/microsoft-graph-client for Graph calls and keeps Cognidesk-normalized helper methods and operation handlers."`, `"This is not full Microsoft Graph coverage. Calendar, contacts, files/Drive, identity, admin, security, and broader Graph resources remain outside this Outlook adapter."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | \[\{ `description`: `"Server-side OAuth access token for Microsoft Graph mail APIs. Required permissions are operation-specific."`; `id`: `"microsoft-graph-oauth-access-token"`; `label`: `"Microsoft Graph OAuth access token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: \[`"Mail.Read"`, `"Mail.ReadWrite"`, `"Mail.Send"`, `"User.Read"`\]; \}, \{ `description`: `"Delegated /me mailbox access or a configured Microsoft Graph user ID/userPrincipalName."`; `id`: `"microsoft-graph-mailbox-user"`; `label`: `"Mailbox user"`; `required`: `false`; \}, \{ `description`: `"SDK-user-owned clientState value used to validate Microsoft Graph change notifications."`; `id`: `"microsoft-graph-webhook-client-state"`; `label`: `"Webhook clientState secret"`; `required`: `false`; \}\] |
| `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"email.outlook"` |
| `limitations` | \[`"Available operations depend on Microsoft Graph permissions, OAuth grant type, tenant admin consent, conditional access, mailbox licensing, Exchange Online policy, and delegated or application user selection."`, `"This package provides transport and webhook foundations; it does not choose default automation, retention, consent, retry, or rate-limit policies."`, `"Webhook validation is based on Microsoft Graph clientState matching. Subscription renewal/delete/reauthorize policy remains SDK-user-owned."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `attachments`: `"sdk-owned-list-get-download"`; `drafts`: `"sdk-owned-create"`; `mailboxUser`: `"sdk-owned-read"`; `messages`: `"sdk-owned-list-get-delta-update"`; `sendMail`: `"sdk-owned-send"`; `subscriptions`: `"sdk-owned-create"`; `webhookClientState`: `"typed-validate"`; \}; `implementation`: \{ `manifestOnlyExport`: `"@cognidesk/integration-email-outlook/manifest"`; `rawClientEscapeHatch`: `"rawClient"`; `sdkPackage`: `"@microsoft/microsoft-graph-client"`; `strategy`: `"official-sdk"`; \}; \} |
| `metadata.channelCoverage` | \{ `attachments`: `"sdk-owned-list-get-download"`; `drafts`: `"sdk-owned-create"`; `mailboxUser`: `"sdk-owned-read"`; `messages`: `"sdk-owned-list-get-delta-update"`; `sendMail`: `"sdk-owned-send"`; `subscriptions`: `"sdk-owned-create"`; `webhookClientState`: `"typed-validate"`; \} |
| `metadata.channelCoverage.attachments` | `"sdk-owned-list-get-download"` |
| `metadata.channelCoverage.drafts` | `"sdk-owned-create"` |
| `metadata.channelCoverage.mailboxUser` | `"sdk-owned-read"` |
| `metadata.channelCoverage.messages` | `"sdk-owned-list-get-delta-update"` |
| `metadata.channelCoverage.sendMail` | `"sdk-owned-send"` |
| `metadata.channelCoverage.subscriptions` | `"sdk-owned-create"` |
| `metadata.channelCoverage.webhookClientState` | `"typed-validate"` |
| `metadata.implementation` | \{ `manifestOnlyExport`: `"@cognidesk/integration-email-outlook/manifest"`; `rawClientEscapeHatch`: `"rawClient"`; `sdkPackage`: `"@microsoft/microsoft-graph-client"`; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.manifestOnlyExport` | `"@cognidesk/integration-email-outlook/manifest"` |
| `metadata.implementation.rawClientEscapeHatch` | `"rawClient"` |
| `metadata.implementation.sdkPackage` | `"@microsoft/microsoft-graph-client"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `name` | `"Microsoft Outlook"` |
| `operations` | \[\{ `alias`: `"email.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `label`: `"Receive Outlook change notifications"`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"email.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Send Outlook mail"`; `providerObject`: `"emailMessage"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"email.draft.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `label`: `"Create Outlook draft"`; `providerObject`: `"emailDraft"`; `sideEffect`: `true`; \}, \{ `alias`: `"email.attachments.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read Outlook attachments"`; `providerObject`: `"attachment"`; \}, \{ `alias`: `"mailbox.watch"`; `capability`: `"receive"`; `label`: `"Create Microsoft Graph mailbox subscription"`; `providerObject`: `"mailbox"`; `sideEffect`: `true`; \}, \{ `alias`: `"outlook.message.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"List Outlook messages"`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"outlook.message.get"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Get Outlook message"`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"outlook.message.delta"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Read Outlook message delta page"`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"outlook.message.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Update Outlook message"`; `providerObject`: `"emailMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"outlook.mailboxUser.get"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Get Outlook mailbox user"`; `providerObject`: `"mailbox"`; \}, \{ `alias`: `"outlook.webhook.parse"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Parse Outlook webhook"`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"outlook.rawGraph.request"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Run raw Microsoft Graph request"`; `metadata`: \{ `rawClientEscapeHatch`: `true`; \}; `providerObject`: `"mailbox"`; \}\] |
| `packageName` | `"@cognidesk/integration-email-outlook"` |
| `privacyNotes` | \[`"Outlook messages can contain customer content, attachments, addresses, recipients, categories, internet headers, and conversation history."`, `"Microsoft Graph OAuth access tokens and webhook clientState secrets stay server-side and are represented in Studio only as credential readiness."`, `"SDK users own outbound approval, auto-send controls, contact consent, tenant/admin policy review, retention, redaction, attachment retrieval, and deletion behavior."`\] |
| `provider` | `"outlook"` |
| `trustLevel` | `"official"` |
