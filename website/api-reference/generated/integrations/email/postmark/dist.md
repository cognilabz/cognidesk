# integrations/email/postmark/dist

## Classes

### PostmarkWebhookAuthenticationError

#### Extends

- `Error`

#### Constructors

##### Constructor

```ts
new PostmarkWebhookAuthenticationError(message?): PostmarkWebhookAuthenticationError;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `message?` | `string` |

###### Returns

[`PostmarkWebhookAuthenticationError`](#postmarkwebhookauthenticationerror)

###### Overrides

```ts
Error.constructor
```

#### Properties

##### status

```ts
readonly status: 401 = 401;
```

##### statusCode

```ts
readonly statusCode: 401 = 401;
```

## Interfaces

### ParsePostmarkInboundWebhookOptions

#### Properties

##### basicAuth?

```ts
optional basicAuth?: PostmarkWebhookBasicAuthCredentials;
```

##### requireBasicAuth?

```ts
optional requireBasicAuth?: boolean;
```

***

### PostmarkCredentialStatusInput

#### Properties

##### accountTokenConfigured?

```ts
optional accountTokenConfigured?: boolean;
```

##### serverTokenConfigured?

```ts
optional serverTokenConfigured?: boolean;
```

***

### PostmarkEmailClient

#### Properties

##### rawClients

```ts
rawClients: PostmarkRawClients;
```

#### Methods

##### createSuppressions()

```ts
createSuppressions(messageStream, input): Promise<SuppressionStatuses>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `messageStream` | `string` |
| `input` | `SuppressionEntries` |

###### Returns

`Promise`\<`SuppressionStatuses`\>

##### deleteSuppressions()

```ts
deleteSuppressions(messageStream, input): Promise<SuppressionStatuses>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `messageStream` | `string` |
| `input` | `SuppressionEntries` |

###### Returns

`Promise`\<`SuppressionStatuses`\>

##### getInboundMessageDetails()

```ts
getInboundMessageDetails(messageId): Promise<InboundMessageDetails>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `messageId` | `string` |

###### Returns

`Promise`\<`InboundMessageDetails`\>

##### getOutboundMessageDetails()

```ts
getOutboundMessageDetails(messageId): Promise<OutboundMessageDetails>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `messageId` | `string` |

###### Returns

`Promise`\<`OutboundMessageDetails`\>

##### listMessageStreams()

```ts
listMessageStreams(input?): Promise<MessageStreams>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | `MessageStreamsFilteringParameters` |

###### Returns

`Promise`\<`MessageStreams`\>

##### sendEmail()

```ts
sendEmail(input): Promise<MessageSendingResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Message` |

###### Returns

`Promise`\<`MessageSendingResponse`\>

##### sendEmailWithTemplate()

```ts
sendEmailWithTemplate(input): Promise<MessageSendingResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `TemplatedMessage` |

###### Returns

`Promise`\<`MessageSendingResponse`\>

***

### PostmarkEmailClientOptions

#### Properties

##### accountToken?

```ts
optional accountToken?: string;
```

##### rawClients?

```ts
optional rawClients?: PostmarkRawClients;
```

##### requireWebhookBasicAuth?

```ts
optional requireWebhookBasicAuth?: boolean;
```

##### serverToken

```ts
serverToken: string;
```

##### webhookBasicAuth?

```ts
optional webhookBasicAuth?: PostmarkWebhookBasicAuthCredentials;
```

***

### PostmarkInboundWebhook

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### Attachments?

```ts
optional Attachments?: {
  Content?: string;
  ContentLength?: number;
  ContentType?: string;
  Name?: string;
}[];
```

###### Content?

```ts
optional Content?: string;
```

###### ContentLength?

```ts
optional ContentLength?: number;
```

###### ContentType?

```ts
optional ContentType?: string;
```

###### Name?

```ts
optional Name?: string;
```

##### Date?

```ts
optional Date?: string;
```

##### From?

```ts
optional From?: string;
```

##### Headers?

```ts
optional Headers?: {
  Name?: string;
  Value?: string;
}[];
```

###### Name?

```ts
optional Name?: string;
```

###### Value?

```ts
optional Value?: string;
```

##### HtmlBody?

```ts
optional HtmlBody?: string;
```

##### MessageID?

```ts
optional MessageID?: string;
```

##### Subject?

```ts
optional Subject?: string;
```

##### TextBody?

```ts
optional TextBody?: string;
```

##### To?

```ts
optional To?: string;
```

***

### PostmarkRawClients

#### Properties

##### account?

```ts
optional account?: AccountClient;
```

##### server

```ts
server: ServerClient;
```

***

### PostmarkWebhookBasicAuthCredentials

#### Properties

##### password

```ts
password: string;
```

##### username

```ts
username: string;
```

## Functions

### createPostmarkEmailClient()

```ts
function createPostmarkEmailClient(options): PostmarkEmailClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`PostmarkEmailClientOptions`](#postmarkemailclientoptions) |

#### Returns

[`PostmarkEmailClient`](#postmarkemailclient)

***

### createPostmarkEmailIntegration()

```ts
function createPostmarkEmailIntegration(options): {
  bindingReport: OperationBindingReport;
  client: PostmarkEmailClient;
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
        capability: "receive";
        description: "Parses inbound email webhooks into support email events.";
        exposesSensitiveData: true;
        label: "Receive Postmark inbound webhooks";
        providerObjects: readonly [{
           kind: "emailMessage";
           label: "Email Message";
         }, {
           kind: "postmarkInboundMessage";
           label: "Postmark Inbound Message";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["customer-facing"];
        capability: "send";
        description: "Sends support email through the official Postmark ServerClient.";
        exposesSensitiveData: true;
        label: "Send Postmark email";
        providerObjects: readonly [{
           kind: "emailMessage";
           label: "Email Message";
         }, {
           kind: "postmarkMessage";
           label: "Postmark Message";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "read-provider-object";
        description: "Reads message details, delivery status, message streams, webhooks, and suppression state.";
        exposesSensitiveData: true;
        label: "Read Postmark messages and streams";
        providerObjects: readonly [{
           kind: "postmarkMessage";
           label: "Postmark Message";
         }, {
           kind: "postmarkMessageStream";
           label: "Postmark Message Stream";
         }, {
           kind: "postmarkSuppression";
           label: "Postmark Suppression";
         }, {
           kind: "deliveryStatus";
           label: "Delivery Status";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "update-provider-object";
        changesWorkflow: true;
        description: "Adds or deletes suppressions when SDK-user policy permits.";
        label: "Manage Postmark suppressions";
        providerObjects: readonly [{
           kind: "postmarkSuppression";
           label: "Postmark Suppression";
        }];
        requiresCredential: true;
        sideEffect: true;
     }];
     category: "email";
     channelAudiences: readonly ["customer-facing", "mixed"];
     coverage: {
        evidence: readonly [{
           label: "Postmark Node.js library";
           url: "https://github.com/ActiveCampaign/postmark.js";
         }, {
           label: "Postmark Email API";
           url: "https://postmarkapp.com/developer/api/email-api";
         }, {
           label: "Postmark Messages API";
           url: "https://postmarkapp.com/developer/api/messages-api";
         }, {
           label: "Postmark inbound webhooks";
           url: "https://postmarkapp.com/developer/webhooks/inbound-webhook";
        }];
        notes: readonly ["Coverage is the Cognidesk normalized support-email adapter surface backed by the official Postmark Node client.", "The raw Postmark clients are exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full Postmark API clone."];
        scope: "support-workflow-subset";
     };
     credentialRequirements: readonly [{
        description: "Server token used by the official Postmark ServerClient.";
        id: "postmark-server-token";
        label: "Postmark server token";
        required: true;
      }, {
        description: "Optional account token for explicitly retained account-scoped support operations.";
        id: "postmark-account-token";
        label: "Postmark account token";
        required: false;
     }];
     directions: readonly ["receive-only", "send-only", "bidirectional"];
     id: "email.postmark";
     limitations: readonly ["The SDK user owns message stream selection, webhook auth policy, retention, redaction, outbound approval, and rate limiting.", "Advanced provider operations remain available through raw Postmark clients, not as Cognidesk-owned generated operations."];
     maintainers: readonly [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           fullProviderApiClone: "not-covered";
           inboundWebhook: "typed-parse";
           messageDetails: "provider-supported-via-official-sdk";
           messageStreams: "provider-supported-via-official-sdk";
           sendEmail: "provider-supported-via-official-sdk";
           suppressions: "provider-supported-via-official-sdk";
           templateSend: "provider-supported-via-official-sdk";
        };
        implementation: {
           integrationKitStatus: "implemented";
           manifestImport: "no-sdk-client-initialization";
           sdkPackage: "postmark";
           sdkVersionRange: "^4.0.7";
           strategy: "official-sdk";
           verifiedAt: "2026-06-21";
           verifiedPackageVersion: "4.0.7";
        };
        rawClientEscapeHatch: "Postmark ServerClient and optional AccountClient exposed from createPostmarkEmailClient().rawClients";
     };
     name: "Postmark";
     operations: readonly [{
        alias: "email.receive";
        capability: "receive";
        exposesSensitiveData: true;
        providerObject: "emailMessage";
      }, {
        alias: "email.send";
        capability: "send";
        exposesSensitiveData: true;
        providerObject: "emailMessage";
        sideEffect: true;
      }, {
        alias: "email.reply.send";
        capability: "send";
        exposesSensitiveData: true;
        providerObject: "emailMessage";
        sideEffect: true;
      }, {
        alias: "email.deliveryStatus.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        providerObject: "deliveryStatus";
      }, {
        alias: "postmark.messageStreams.list";
        capability: "read-provider-object";
        extension: true;
        providerObject: "postmarkMessageStream";
      }, {
        alias: "postmark.suppressions.create";
        capability: "update-provider-object";
        changesWorkflow: true;
        extension: true;
        providerObject: "postmarkSuppression";
        sideEffect: true;
      }, {
        alias: "postmark.suppressions.delete";
        capability: "update-provider-object";
        changesWorkflow: true;
        extension: true;
        providerObject: "postmarkSuppression";
        sideEffect: true;
     }];
     packageName: "@cognidesk/integration-email-postmark";
     privacyNotes: readonly ["Postmark email bodies, recipients, sender addresses, headers, attachments, metadata, and webhook payloads can contain customer data.", "Postmark tokens stay server-side and are represented only as readiness state."];
     provider: "postmark";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: (
     | "email.receive"
     | "email.send"
     | "email.reply.send"
     | "email.deliveryStatus.read"
     | "postmark.messageStreams.list"
     | "postmark.suppressions.create"
    | "postmark.suppressions.delete")[];
  operations: {
     email.deliveryStatus.read: (input) =>
        | Promise<OutboundMessageDetails>
       | Promise<InboundMessageDetails>;
     email.receive: (input) => Promise<PostmarkInboundWebhook>;
     email.reply.send: (input) => Promise<MessageSendingResponse>;
     email.send: (input) => Promise<MessageSendingResponse>;
     postmark.messageStreams.list: (input) => Promise<MessageStreams>;
     postmark.suppressions.create: (input) => Promise<SuppressionStatuses>;
     postmark.suppressions.delete: (input) => Promise<SuppressionStatuses>;
  };
  rawClients: PostmarkRawClients;
  getOperationHandler: {
     email.deliveryStatus.read: (input) =>
        | Promise<OutboundMessageDetails>
       | Promise<InboundMessageDetails>;
     email.receive: (input) => Promise<PostmarkInboundWebhook>;
     email.reply.send: (input) => Promise<MessageSendingResponse>;
     email.send: (input) => Promise<MessageSendingResponse>;
     postmark.messageStreams.list: (input) => Promise<MessageStreams>;
     postmark.suppressions.create: (input) => Promise<SuppressionStatuses>;
     postmark.suppressions.delete: (input) => Promise<SuppressionStatuses>;
  }[Alias];
  requireOperationHandler: {
     email.deliveryStatus.read: (input) =>
        | Promise<OutboundMessageDetails>
       | Promise<InboundMessageDetails>;
     email.receive: (input) => Promise<PostmarkInboundWebhook>;
     email.reply.send: (input) => Promise<MessageSendingResponse>;
     email.send: (input) => Promise<MessageSendingResponse>;
     postmark.messageStreams.list: (input) => Promise<MessageStreams>;
     postmark.suppressions.create: (input) => Promise<SuppressionStatuses>;
     postmark.suppressions.delete: (input) => Promise<SuppressionStatuses>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     email.deliveryStatus.read: (input) =>
        | Promise<OutboundMessageDetails>
       | Promise<InboundMessageDetails>;
     email.receive: (input) => Promise<PostmarkInboundWebhook>;
     email.reply.send: (input) => Promise<MessageSendingResponse>;
     email.send: (input) => Promise<MessageSendingResponse>;
     postmark.messageStreams.list: (input) => Promise<MessageStreams>;
     postmark.suppressions.create: (input) => Promise<SuppressionStatuses>;
     postmark.suppressions.delete: (input) => Promise<SuppressionStatuses>;
  }[Alias]>>>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`PostmarkEmailClientOptions`](#postmarkemailclientoptions) |

#### Returns

```ts
{
  bindingReport: OperationBindingReport;
  client: PostmarkEmailClient;
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
        capability: "receive";
        description: "Parses inbound email webhooks into support email events.";
        exposesSensitiveData: true;
        label: "Receive Postmark inbound webhooks";
        providerObjects: readonly [{
           kind: "emailMessage";
           label: "Email Message";
         }, {
           kind: "postmarkInboundMessage";
           label: "Postmark Inbound Message";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["customer-facing"];
        capability: "send";
        description: "Sends support email through the official Postmark ServerClient.";
        exposesSensitiveData: true;
        label: "Send Postmark email";
        providerObjects: readonly [{
           kind: "emailMessage";
           label: "Email Message";
         }, {
           kind: "postmarkMessage";
           label: "Postmark Message";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "read-provider-object";
        description: "Reads message details, delivery status, message streams, webhooks, and suppression state.";
        exposesSensitiveData: true;
        label: "Read Postmark messages and streams";
        providerObjects: readonly [{
           kind: "postmarkMessage";
           label: "Postmark Message";
         }, {
           kind: "postmarkMessageStream";
           label: "Postmark Message Stream";
         }, {
           kind: "postmarkSuppression";
           label: "Postmark Suppression";
         }, {
           kind: "deliveryStatus";
           label: "Delivery Status";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "update-provider-object";
        changesWorkflow: true;
        description: "Adds or deletes suppressions when SDK-user policy permits.";
        label: "Manage Postmark suppressions";
        providerObjects: readonly [{
           kind: "postmarkSuppression";
           label: "Postmark Suppression";
        }];
        requiresCredential: true;
        sideEffect: true;
     }];
     category: "email";
     channelAudiences: readonly ["customer-facing", "mixed"];
     coverage: {
        evidence: readonly [{
           label: "Postmark Node.js library";
           url: "https://github.com/ActiveCampaign/postmark.js";
         }, {
           label: "Postmark Email API";
           url: "https://postmarkapp.com/developer/api/email-api";
         }, {
           label: "Postmark Messages API";
           url: "https://postmarkapp.com/developer/api/messages-api";
         }, {
           label: "Postmark inbound webhooks";
           url: "https://postmarkapp.com/developer/webhooks/inbound-webhook";
        }];
        notes: readonly ["Coverage is the Cognidesk normalized support-email adapter surface backed by the official Postmark Node client.", "The raw Postmark clients are exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full Postmark API clone."];
        scope: "support-workflow-subset";
     };
     credentialRequirements: readonly [{
        description: "Server token used by the official Postmark ServerClient.";
        id: "postmark-server-token";
        label: "Postmark server token";
        required: true;
      }, {
        description: "Optional account token for explicitly retained account-scoped support operations.";
        id: "postmark-account-token";
        label: "Postmark account token";
        required: false;
     }];
     directions: readonly ["receive-only", "send-only", "bidirectional"];
     id: "email.postmark";
     limitations: readonly ["The SDK user owns message stream selection, webhook auth policy, retention, redaction, outbound approval, and rate limiting.", "Advanced provider operations remain available through raw Postmark clients, not as Cognidesk-owned generated operations."];
     maintainers: readonly [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           fullProviderApiClone: "not-covered";
           inboundWebhook: "typed-parse";
           messageDetails: "provider-supported-via-official-sdk";
           messageStreams: "provider-supported-via-official-sdk";
           sendEmail: "provider-supported-via-official-sdk";
           suppressions: "provider-supported-via-official-sdk";
           templateSend: "provider-supported-via-official-sdk";
        };
        implementation: {
           integrationKitStatus: "implemented";
           manifestImport: "no-sdk-client-initialization";
           sdkPackage: "postmark";
           sdkVersionRange: "^4.0.7";
           strategy: "official-sdk";
           verifiedAt: "2026-06-21";
           verifiedPackageVersion: "4.0.7";
        };
        rawClientEscapeHatch: "Postmark ServerClient and optional AccountClient exposed from createPostmarkEmailClient().rawClients";
     };
     name: "Postmark";
     operations: readonly [{
        alias: "email.receive";
        capability: "receive";
        exposesSensitiveData: true;
        providerObject: "emailMessage";
      }, {
        alias: "email.send";
        capability: "send";
        exposesSensitiveData: true;
        providerObject: "emailMessage";
        sideEffect: true;
      }, {
        alias: "email.reply.send";
        capability: "send";
        exposesSensitiveData: true;
        providerObject: "emailMessage";
        sideEffect: true;
      }, {
        alias: "email.deliveryStatus.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        providerObject: "deliveryStatus";
      }, {
        alias: "postmark.messageStreams.list";
        capability: "read-provider-object";
        extension: true;
        providerObject: "postmarkMessageStream";
      }, {
        alias: "postmark.suppressions.create";
        capability: "update-provider-object";
        changesWorkflow: true;
        extension: true;
        providerObject: "postmarkSuppression";
        sideEffect: true;
      }, {
        alias: "postmark.suppressions.delete";
        capability: "update-provider-object";
        changesWorkflow: true;
        extension: true;
        providerObject: "postmarkSuppression";
        sideEffect: true;
     }];
     packageName: "@cognidesk/integration-email-postmark";
     privacyNotes: readonly ["Postmark email bodies, recipients, sender addresses, headers, attachments, metadata, and webhook payloads can contain customer data.", "Postmark tokens stay server-side and are represented only as readiness state."];
     provider: "postmark";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: (
     | "email.receive"
     | "email.send"
     | "email.reply.send"
     | "email.deliveryStatus.read"
     | "postmark.messageStreams.list"
     | "postmark.suppressions.create"
    | "postmark.suppressions.delete")[];
  operations: {
     email.deliveryStatus.read: (input) =>
        | Promise<OutboundMessageDetails>
       | Promise<InboundMessageDetails>;
     email.receive: (input) => Promise<PostmarkInboundWebhook>;
     email.reply.send: (input) => Promise<MessageSendingResponse>;
     email.send: (input) => Promise<MessageSendingResponse>;
     postmark.messageStreams.list: (input) => Promise<MessageStreams>;
     postmark.suppressions.create: (input) => Promise<SuppressionStatuses>;
     postmark.suppressions.delete: (input) => Promise<SuppressionStatuses>;
  };
  rawClients: PostmarkRawClients;
  getOperationHandler: {
     email.deliveryStatus.read: (input) =>
        | Promise<OutboundMessageDetails>
       | Promise<InboundMessageDetails>;
     email.receive: (input) => Promise<PostmarkInboundWebhook>;
     email.reply.send: (input) => Promise<MessageSendingResponse>;
     email.send: (input) => Promise<MessageSendingResponse>;
     postmark.messageStreams.list: (input) => Promise<MessageStreams>;
     postmark.suppressions.create: (input) => Promise<SuppressionStatuses>;
     postmark.suppressions.delete: (input) => Promise<SuppressionStatuses>;
  }[Alias];
  requireOperationHandler: {
     email.deliveryStatus.read: (input) =>
        | Promise<OutboundMessageDetails>
       | Promise<InboundMessageDetails>;
     email.receive: (input) => Promise<PostmarkInboundWebhook>;
     email.reply.send: (input) => Promise<MessageSendingResponse>;
     email.send: (input) => Promise<MessageSendingResponse>;
     postmark.messageStreams.list: (input) => Promise<MessageStreams>;
     postmark.suppressions.create: (input) => Promise<SuppressionStatuses>;
     postmark.suppressions.delete: (input) => Promise<SuppressionStatuses>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     email.deliveryStatus.read: (input) =>
        | Promise<OutboundMessageDetails>
       | Promise<InboundMessageDetails>;
     email.receive: (input) => Promise<PostmarkInboundWebhook>;
     email.reply.send: (input) => Promise<MessageSendingResponse>;
     email.send: (input) => Promise<MessageSendingResponse>;
     postmark.messageStreams.list: (input) => Promise<MessageStreams>;
     postmark.suppressions.create: (input) => Promise<SuppressionStatuses>;
     postmark.suppressions.delete: (input) => Promise<SuppressionStatuses>;
  }[Alias]>>>;
}
```

| Name | Type |
| ------ | ------ |
| `bindingReport` | [`OperationBindingReport`](../../../packages/integration-kit/dist.md#operationbindingreport) |
| `client` | [`PostmarkEmailClient`](#postmarkemailclient) |
| `manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage`: \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations`: `string`[]; `maintainers`: \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `Record`\<`string`, `unknown`\>; `name`: `string`; `operations`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes`: `string`[]; `provider`: `string`; `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} & \{ `capabilities`: readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Parses inbound email webhooks into support email events."`; `exposesSensitiveData`: `true`; `label`: `"Receive Postmark inbound webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"emailMessage"`; `label`: `"Email Message"`; \}, \{ `kind`: `"postmarkInboundMessage"`; `label`: `"Postmark Inbound Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Sends support email through the official Postmark ServerClient."`; `exposesSensitiveData`: `true`; `label`: `"Send Postmark email"`; `providerObjects`: readonly \[\{ `kind`: `"emailMessage"`; `label`: `"Email Message"`; \}, \{ `kind`: `"postmarkMessage"`; `label`: `"Postmark Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads message details, delivery status, message streams, webhooks, and suppression state."`; `exposesSensitiveData`: `true`; `label`: `"Read Postmark messages and streams"`; `providerObjects`: readonly \[\{ `kind`: `"postmarkMessage"`; `label`: `"Postmark Message"`; \}, \{ `kind`: `"postmarkMessageStream"`; `label`: `"Postmark Message Stream"`; \}, \{ `kind`: `"postmarkSuppression"`; `label`: `"Postmark Suppression"`; \}, \{ `kind`: `"deliveryStatus"`; `label`: `"Delivery Status"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Adds or deletes suppressions when SDK-user policy permits."`; `label`: `"Manage Postmark suppressions"`; `providerObjects`: readonly \[\{ `kind`: `"postmarkSuppression"`; `label`: `"Postmark Suppression"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\]; `category`: `"email"`; `channelAudiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `coverage`: \{ `evidence`: readonly \[\{ `label`: `"Postmark Node.js library"`; `url`: `"https://github.com/ActiveCampaign/postmark.js"`; \}, \{ `label`: `"Postmark Email API"`; `url`: `"https://postmarkapp.com/developer/api/email-api"`; \}, \{ `label`: `"Postmark Messages API"`; `url`: `"https://postmarkapp.com/developer/api/messages-api"`; \}, \{ `label`: `"Postmark inbound webhooks"`; `url`: `"https://postmarkapp.com/developer/webhooks/inbound-webhook"`; \}\]; `notes`: readonly \[`"Coverage is the Cognidesk normalized support-email adapter surface backed by the official Postmark Node client."`, `"The raw Postmark clients are exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full Postmark API clone."`\]; `scope`: `"support-workflow-subset"`; \}; `credentialRequirements`: readonly \[\{ `description`: `"Server token used by the official Postmark ServerClient."`; `id`: `"postmark-server-token"`; `label`: `"Postmark server token"`; `required`: `true`; \}, \{ `description`: `"Optional account token for explicitly retained account-scoped support operations."`; `id`: `"postmark-account-token"`; `label`: `"Postmark account token"`; `required`: `false`; \}\]; `directions`: readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\]; `id`: `"email.postmark"`; `limitations`: readonly \[`"The SDK user owns message stream selection, webhook auth policy, retention, redaction, outbound approval, and rate limiting."`, `"Advanced provider operations remain available through raw Postmark clients, not as Cognidesk-owned generated operations."`\]; `maintainers`: readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\]; `metadata`: \{ `channelCoverage`: \{ `fullProviderApiClone`: `"not-covered"`; `inboundWebhook`: `"typed-parse"`; `messageDetails`: `"provider-supported-via-official-sdk"`; `messageStreams`: `"provider-supported-via-official-sdk"`; `sendEmail`: `"provider-supported-via-official-sdk"`; `suppressions`: `"provider-supported-via-official-sdk"`; `templateSend`: `"provider-supported-via-official-sdk"`; \}; `implementation`: \{ `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `sdkPackage`: `"postmark"`; `sdkVersionRange`: `"^4.0.7"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedPackageVersion`: `"4.0.7"`; \}; `rawClientEscapeHatch`: `"Postmark ServerClient and optional AccountClient exposed from createPostmarkEmailClient().rawClients"`; \}; `name`: `"Postmark"`; `operations`: readonly \[\{ `alias`: `"email.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"email.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"email.reply.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"email.deliveryStatus.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"deliveryStatus"`; \}, \{ `alias`: `"postmark.messageStreams.list"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"postmarkMessageStream"`; \}, \{ `alias`: `"postmark.suppressions.create"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `extension`: `true`; `providerObject`: `"postmarkSuppression"`; `sideEffect`: `true`; \}, \{ `alias`: `"postmark.suppressions.delete"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `extension`: `true`; `providerObject`: `"postmarkSuppression"`; `sideEffect`: `true`; \}\]; `packageName`: `"@cognidesk/integration-email-postmark"`; `privacyNotes`: readonly \[`"Postmark email bodies, recipients, sender addresses, headers, attachments, metadata, and webhook payloads can contain customer data."`, `"Postmark tokens stay server-side and are represented only as readiness state."`\]; `provider`: `"postmark"`; `trustLevel`: `"official"`; \} |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `operationAliases` | ( \| `"email.receive"` \| `"email.send"` \| `"email.reply.send"` \| `"email.deliveryStatus.read"` \| `"postmark.messageStreams.list"` \| `"postmark.suppressions.create"` \| `"postmark.suppressions.delete"`)[] |
| `operations` | \{ `email.deliveryStatus.read`: (`input`) => \| `Promise`\<`OutboundMessageDetails`\> \| `Promise`\<`InboundMessageDetails`\>; `email.receive`: (`input`) => `Promise`\<[`PostmarkInboundWebhook`](#postmarkinboundwebhook)\>; `email.reply.send`: (`input`) => `Promise`\<`MessageSendingResponse`\>; `email.send`: (`input`) => `Promise`\<`MessageSendingResponse`\>; `postmark.messageStreams.list`: (`input`) => `Promise`\<`MessageStreams`\>; `postmark.suppressions.create`: (`input`) => `Promise`\<`SuppressionStatuses`\>; `postmark.suppressions.delete`: (`input`) => `Promise`\<`SuppressionStatuses`\>; \} |
| `operations.email.deliveryStatus.read()` | (`input`) => \| `Promise`\<`OutboundMessageDetails`\> \| `Promise`\<`InboundMessageDetails`\> |
| `operations.email.receive()` | (`input`) => `Promise`\<[`PostmarkInboundWebhook`](#postmarkinboundwebhook)\> |
| `operations.email.reply.send()` | (`input`) => `Promise`\<`MessageSendingResponse`\> |
| `operations.email.send()` | (`input`) => `Promise`\<`MessageSendingResponse`\> |
| `operations.postmark.messageStreams.list()` | (`input`) => `Promise`\<`MessageStreams`\> |
| `operations.postmark.suppressions.create()` | (`input`) => `Promise`\<`SuppressionStatuses`\> |
| `operations.postmark.suppressions.delete()` | (`input`) => `Promise`\<`SuppressionStatuses`\> |
| `rawClients` | [`PostmarkRawClients`](#postmarkrawclients) |
| `getOperationHandler()` | (`alias`) => \{ `email.deliveryStatus.read`: (`input`) => \| `Promise`\<`OutboundMessageDetails`\> \| `Promise`\<`InboundMessageDetails`\>; `email.receive`: (`input`) => `Promise`\<[`PostmarkInboundWebhook`](#postmarkinboundwebhook)\>; `email.reply.send`: (`input`) => `Promise`\<`MessageSendingResponse`\>; `email.send`: (`input`) => `Promise`\<`MessageSendingResponse`\>; `postmark.messageStreams.list`: (`input`) => `Promise`\<`MessageStreams`\>; `postmark.suppressions.create`: (`input`) => `Promise`\<`SuppressionStatuses`\>; `postmark.suppressions.delete`: (`input`) => `Promise`\<`SuppressionStatuses`\>; \}\[`Alias`\] |
| `requireOperationHandler()` | (`alias`) => \{ `email.deliveryStatus.read`: (`input`) => \| `Promise`\<`OutboundMessageDetails`\> \| `Promise`\<`InboundMessageDetails`\>; `email.receive`: (`input`) => `Promise`\<[`PostmarkInboundWebhook`](#postmarkinboundwebhook)\>; `email.reply.send`: (`input`) => `Promise`\<`MessageSendingResponse`\>; `email.send`: (`input`) => `Promise`\<`MessageSendingResponse`\>; `postmark.messageStreams.list`: (`input`) => `Promise`\<`MessageStreams`\>; `postmark.suppressions.create`: (`input`) => `Promise`\<`SuppressionStatuses`\>; `postmark.suppressions.delete`: (`input`) => `Promise`\<`SuppressionStatuses`\>; \}\[`Alias`\] |
| `run()` | ( `alias`, `input`, `context?`) => `Promise`\<`Awaited`\<`ReturnType`\<\{ `email.deliveryStatus.read`: (`input`) => \| `Promise`\<`OutboundMessageDetails`\> \| `Promise`\<`InboundMessageDetails`\>; `email.receive`: (`input`) => `Promise`\<[`PostmarkInboundWebhook`](#postmarkinboundwebhook)\>; `email.reply.send`: (`input`) => `Promise`\<`MessageSendingResponse`\>; `email.send`: (`input`) => `Promise`\<`MessageSendingResponse`\>; `postmark.messageStreams.list`: (`input`) => `Promise`\<`MessageStreams`\>; `postmark.suppressions.create`: (`input`) => `Promise`\<`SuppressionStatuses`\>; `postmark.suppressions.delete`: (`input`) => `Promise`\<`SuppressionStatuses`\>; \}\[`Alias`\]\>\>\> |

***

### createPostmarkEmailLiveChecks()

```ts
function createPostmarkEmailLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        server: Server;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`PostmarkEmailClientOptions`](#postmarkemailclientoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `server`: `Server`;
     \};
  \}\>;
\}[]

***

### parsePostmarkInboundWebhook()

```ts
function parsePostmarkInboundWebhook(request, options?): Promise<PostmarkInboundWebhook>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParsePostmarkInboundWebhookOptions`](#parsepostmarkinboundwebhookoptions) |

#### Returns

`Promise`\<[`PostmarkInboundWebhook`](#postmarkinboundwebhook)\>

***

### postmarkEmailCredentialStatuses()

```ts
function postmarkEmailCredentialStatuses(input): {
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
| `input` | [`PostmarkCredentialStatusInput`](#postmarkcredentialstatusinput) |

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

### postmarkEmailProviderManifest

Re-exports [postmarkEmailProviderManifest](dist/manifest.md#postmarkemailprovidermanifest)
