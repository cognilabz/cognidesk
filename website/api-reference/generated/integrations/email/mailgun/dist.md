# integrations/email/mailgun/dist

## Interfaces

### MailgunCredentialStatusInput

#### Properties

##### apiKeyConfigured?

```ts
optional apiKeyConfigured?: boolean;
```

##### domain?

```ts
optional domain?: string;
```

##### requireWebhookSignature?

```ts
optional requireWebhookSignature?: boolean;
```

##### webhookSigningKeyConfigured?

```ts
optional webhookSigningKeyConfigured?: boolean;
```

***

### MailgunEmailAddressedInput

#### Extended by

- [`MailgunReplyInput`](#mailgunreplyinput)

#### Properties

##### attachments?

```ts
optional attachments?: unknown[];
```

##### bcc?

```ts
optional bcc?: string | string[];
```

##### cc?

```ts
optional cc?: string | string[];
```

##### from

```ts
from: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### html?

```ts
optional html?: string;
```

##### subject

```ts
subject: string;
```

##### tags?

```ts
optional tags?: string[];
```

##### text?

```ts
optional text?: string;
```

##### to

```ts
to: string | string[];
```

##### variables?

```ts
optional variables?: Record<string, unknown>;
```

***

### MailgunEmailClient

#### Properties

##### rawClient

```ts
rawClient: MailgunRawClient;
```

#### Methods

##### getDomain()

```ts
getDomain(): Promise<unknown>;
```

###### Returns

`Promise`\<`unknown`\>

##### getStoredMessage()

```ts
getStoredMessage(storageKey): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `storageKey` | `string` |

###### Returns

`Promise`\<`unknown`\>

##### listWebhooks()

```ts
listWebhooks(): Promise<unknown>;
```

###### Returns

`Promise`\<`unknown`\>

##### searchEvents()

```ts
searchEvents(input?): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`MailgunEventSearchInput`](#mailguneventsearchinput) |

###### Returns

`Promise`\<`unknown`\>

##### sendEmail()

```ts
sendEmail(input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`MailgunEmailAddressedInput`](#mailgunemailaddressedinput) |

###### Returns

`Promise`\<`unknown`\>

##### sendReply()

```ts
sendReply(input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`MailgunReplyInput`](#mailgunreplyinput) |

###### Returns

`Promise`\<`unknown`\>

***

### MailgunEmailClientOptions

#### Properties

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

##### apiKey

```ts
apiKey: string;
```

##### domain

```ts
domain: string;
```

##### formData?

```ts
optional formData?: unknown;
```

##### rawClient?

```ts
optional rawClient?: MailgunRawClient;
```

##### region?

```ts
optional region?: string;
```

##### requireWebhookSignature?

```ts
optional requireWebhookSignature?: boolean;
```

##### webhookSigningKey?

```ts
optional webhookSigningKey?: string;
```

***

### MailgunEventSearchInput

#### Properties

##### ascending?

```ts
optional ascending?: boolean | "yes" | "no";
```

##### begin?

```ts
optional begin?: string;
```

##### end?

```ts
optional end?: string;
```

##### event?

```ts
optional event?: string;
```

##### limit?

```ts
optional limit?: number;
```

##### messageId?

```ts
optional messageId?: string;
```

##### recipient?

```ts
optional recipient?: string;
```

##### severity?

```ts
optional severity?: string;
```

##### tags?

```ts
optional tags?: string | string[];
```

***

### MailgunRawClient

#### Properties

##### domains

```ts
domains: {
  get: Promise<unknown>;
};
```

###### get()

```ts
get(domain): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `domain` | `string` |

###### Returns

`Promise`\<`unknown`\>

##### events

```ts
events: {
  get: Promise<unknown>;
};
```

###### get()

```ts
get(domain, query?): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `domain` | `string` |
| `query?` | `Record`\<`string`, `unknown`\> |

###### Returns

`Promise`\<`unknown`\>

##### messages

```ts
messages: {
  retrieveStoredEmail?: (domain, storageKey) => Promise<unknown>;
  create: Promise<unknown>;
};
```

###### retrieveStoredEmail?

```ts
optional retrieveStoredEmail?: (domain, storageKey) => Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `domain` | `string` |
| `storageKey` | `string` |

###### Returns

`Promise`\<`unknown`\>

###### create()

```ts
create(domain, data): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `domain` | `string` |
| `data` | `Record`\<`string`, `unknown`\> |

###### Returns

`Promise`\<`unknown`\>

##### webhooks

```ts
webhooks: {
  list: Promise<unknown>;
};
```

###### list()

```ts
list(domain, query): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `domain` | `string` |
| `query` | `Record`\<`string`, `unknown`\> |

###### Returns

`Promise`\<`unknown`\>

***

### MailgunReplyInput

#### Extends

- [`MailgunEmailAddressedInput`](#mailgunemailaddressedinput)

#### Properties

##### attachments?

```ts
optional attachments?: unknown[];
```

###### Inherited from

[`MailgunEmailAddressedInput`](#mailgunemailaddressedinput).[`attachments`](#attachments)

##### bcc?

```ts
optional bcc?: string | string[];
```

###### Inherited from

[`MailgunEmailAddressedInput`](#mailgunemailaddressedinput).[`bcc`](#bcc)

##### cc?

```ts
optional cc?: string | string[];
```

###### Inherited from

[`MailgunEmailAddressedInput`](#mailgunemailaddressedinput).[`cc`](#cc)

##### from

```ts
from: string;
```

###### Inherited from

[`MailgunEmailAddressedInput`](#mailgunemailaddressedinput).[`from`](#from)

##### headers?

```ts
optional headers?: Record<string, string>;
```

###### Inherited from

[`MailgunEmailAddressedInput`](#mailgunemailaddressedinput).[`headers`](#headers)

##### html?

```ts
optional html?: string;
```

###### Inherited from

[`MailgunEmailAddressedInput`](#mailgunemailaddressedinput).[`html`](#html)

##### inReplyTo?

```ts
optional inReplyTo?: string;
```

##### references?

```ts
optional references?: string | string[];
```

##### subject

```ts
subject: string;
```

###### Inherited from

[`MailgunEmailAddressedInput`](#mailgunemailaddressedinput).[`subject`](#subject)

##### tags?

```ts
optional tags?: string[];
```

###### Inherited from

[`MailgunEmailAddressedInput`](#mailgunemailaddressedinput).[`tags`](#tags)

##### text?

```ts
optional text?: string;
```

###### Inherited from

[`MailgunEmailAddressedInput`](#mailgunemailaddressedinput).[`text`](#text)

##### to

```ts
to: string | string[];
```

###### Inherited from

[`MailgunEmailAddressedInput`](#mailgunemailaddressedinput).[`to`](#to)

##### variables?

```ts
optional variables?: Record<string, unknown>;
```

###### Inherited from

[`MailgunEmailAddressedInput`](#mailgunemailaddressedinput).[`variables`](#variables)

***

### MailgunWebhookSignatureInput

#### Properties

##### signature

```ts
signature: string;
```

##### signingKey

```ts
signingKey: string;
```

##### timestamp

```ts
timestamp: string;
```

##### token

```ts
token: string;
```

## Functions

### createMailgunEmailClient()

```ts
function createMailgunEmailClient(options): MailgunEmailClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`MailgunEmailClientOptions`](#mailgunemailclientoptions) |

#### Returns

[`MailgunEmailClient`](#mailgunemailclient)

***

### createMailgunEmailIntegration()

```ts
function createMailgunEmailIntegration(options): {
  bindingReport: OperationBindingReport;
  client: MailgunEmailClient;
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
        description: "Parses and verifies Mailgun inbound, delivery, engagement, and failure callbacks.";
        exposesSensitiveData: true;
        label: "Receive Mailgun events";
        providerObjects: readonly [{
           kind: "mailgunEvent";
           label: "Mailgun Event";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["customer-facing"];
        capability: "send";
        description: "Sends support email through the official Mailgun SDK.";
        exposesSensitiveData: true;
        label: "Send Mailgun email";
        providerObjects: readonly [{
           kind: "mailgunMessage";
           label: "Mailgun Message";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "read-provider-object";
        description: "Reads support-scoped stored messages, domain state, webhooks, and event delivery status.";
        exposesSensitiveData: true;
        label: "Read Mailgun message and domain resources";
        providerObjects: readonly [{
           kind: "mailgunStoredMessage";
           label: "Mailgun Stored Message";
         }, {
           kind: "mailgunDomain";
           label: "Mailgun Domain";
         }, {
           kind: "mailgunWebhook";
           label: "Mailgun Webhook";
         }, {
           kind: "deliveryStatus";
           label: "Delivery Status";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "search-provider-object";
        description: "Searches Mailgun event history through mailgun.js for retention-aware support workflows.";
        exposesSensitiveData: true;
        label: "Search Mailgun events";
        providerObjects: readonly [{
           kind: "mailgunEvent";
           label: "Mailgun Event";
        }];
        requiresCredential: true;
     }];
     category: "email";
     channelAudiences: readonly ["customer-facing", "mixed"];
     coverage: {
        evidence: readonly [{
           label: "mailgun.js package";
           url: "https://github.com/mailgun/mailgun.js";
         }, {
           label: "Mailgun Messages API";
           url: "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/messages";
         }, {
           label: "Mailgun Events API";
           url: "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/events";
         }, {
           label: "Mailgun Webhooks";
           url: "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/domain-webhooks";
        }];
        notes: readonly ["Coverage is the Cognidesk normalized support-email adapter surface backed by the official Mailgun SDK.", "The raw mailgun.js client is exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full Mailgun API clone."];
        scope: "support-workflow-subset";
     };
     credentialRequirements: readonly [{
        description: "Server-side Mailgun API key used by the official mailgun.js client.";
        id: "mailgun-api-key";
        label: "Mailgun API key";
        required: true;
      }, {
        description: "Mailgun domain selected by the SDK user for outbound, event, and stored-message operations.";
        id: "mailgun-domain";
        label: "Mailgun sending domain";
        required: true;
      }, {
        description: "Signing key used to verify Mailgun event callbacks.";
        id: "mailgun-webhook-signing-key";
        label: "Mailgun webhook signing key";
        required: false;
     }];
     directions: readonly ["receive-only", "send-only", "bidirectional"];
     id: "email.mailgun";
     limitations: readonly ["The SDK user owns domain selection, route policy, retention, redaction, replay-cache storage, outbound approval, and rate limiting.", "Advanced provider operations remain available through the raw mailgun.js client, not as Cognidesk-owned generated operations."];
     maintainers: readonly [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           eventSearch: "provider-supported-via-official-sdk";
           fullProviderApiClone: "not-covered";
           sendEmail: "provider-supported-via-official-sdk";
           sendReply: "provider-supported-via-official-sdk";
           storedMessageRead: "provider-supported-via-official-sdk";
           webhooks: "provider-supported-via-official-sdk";
        };
        implementation: {
           integrationKitStatus: "implemented";
           manifestImport: "no-sdk-client-initialization";
           sdkPackage: "mailgun.js";
           sdkVersionRange: "^13.2.0";
           strategy: "official-sdk";
           verifiedAt: "2026-06-21";
           verifiedPackageVersion: "13.2.0";
        };
        rawClientEscapeHatch: "mailgun.js IMailgunClient exposed from createMailgunEmailClient().rawClient";
     };
     name: "Mailgun";
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
        alias: "mailgun.storedMessage.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        extension: true;
        providerObject: "mailgunStoredMessage";
      }, {
        alias: "mailgun.domain.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        extension: true;
        providerObject: "mailgunDomain";
      }, {
        alias: "mailgun.webhooks.list";
        capability: "read-provider-object";
        extension: true;
        providerObject: "mailgunWebhook";
     }];
     packageName: "@cognidesk/integration-email-mailgun";
     privacyNotes: readonly ["Mailgun message bodies, recipients, sender addresses, headers, tags, variables, event payloads, routes, and attachments can contain customer data.", "Mailgun API keys and webhook signing keys stay server-side and are represented only as readiness state."];
     provider: "mailgun";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: (
     | "email.receive"
     | "email.reply.send"
     | "email.send"
     | "email.deliveryStatus.read"
     | "mailgun.storedMessage.read"
     | "mailgun.domain.read"
    | "mailgun.webhooks.list")[];
  operations: {
     email.deliveryStatus.read: (input) => Promise<unknown>;
     email.receive: (input) => Promise<{
        payload: any;
        verified: boolean;
     }>;
     email.reply.send: (input) => Promise<unknown>;
     email.send: (input) => Promise<unknown>;
     mailgun.domain.read: () => Promise<unknown>;
     mailgun.storedMessage.read: (input) => Promise<unknown>;
     mailgun.webhooks.list: () => Promise<unknown>;
  };
  rawClient: MailgunRawClient;
  getOperationHandler: {
     email.deliveryStatus.read: (input) => Promise<unknown>;
     email.receive: (input) => Promise<{
        payload: any;
        verified: boolean;
     }>;
     email.reply.send: (input) => Promise<unknown>;
     email.send: (input) => Promise<unknown>;
     mailgun.domain.read: () => Promise<unknown>;
     mailgun.storedMessage.read: (input) => Promise<unknown>;
     mailgun.webhooks.list: () => Promise<unknown>;
  }[Alias];
  requireOperationHandler: {
     email.deliveryStatus.read: (input) => Promise<unknown>;
     email.receive: (input) => Promise<{
        payload: any;
        verified: boolean;
     }>;
     email.reply.send: (input) => Promise<unknown>;
     email.send: (input) => Promise<unknown>;
     mailgun.domain.read: () => Promise<unknown>;
     mailgun.storedMessage.read: (input) => Promise<unknown>;
     mailgun.webhooks.list: () => Promise<unknown>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     email.deliveryStatus.read: (input) => Promise<unknown>;
     email.receive: (input) => Promise<{
        payload: any;
        verified: boolean;
     }>;
     email.reply.send: (input) => Promise<unknown>;
     email.send: (input) => Promise<unknown>;
     mailgun.domain.read: () => Promise<unknown>;
     mailgun.storedMessage.read: (input) => Promise<unknown>;
     mailgun.webhooks.list: () => Promise<unknown>;
  }[Alias]>>>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`MailgunEmailClientOptions`](#mailgunemailclientoptions) |

#### Returns

```ts
{
  bindingReport: OperationBindingReport;
  client: MailgunEmailClient;
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
        description: "Parses and verifies Mailgun inbound, delivery, engagement, and failure callbacks.";
        exposesSensitiveData: true;
        label: "Receive Mailgun events";
        providerObjects: readonly [{
           kind: "mailgunEvent";
           label: "Mailgun Event";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["customer-facing"];
        capability: "send";
        description: "Sends support email through the official Mailgun SDK.";
        exposesSensitiveData: true;
        label: "Send Mailgun email";
        providerObjects: readonly [{
           kind: "mailgunMessage";
           label: "Mailgun Message";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "read-provider-object";
        description: "Reads support-scoped stored messages, domain state, webhooks, and event delivery status.";
        exposesSensitiveData: true;
        label: "Read Mailgun message and domain resources";
        providerObjects: readonly [{
           kind: "mailgunStoredMessage";
           label: "Mailgun Stored Message";
         }, {
           kind: "mailgunDomain";
           label: "Mailgun Domain";
         }, {
           kind: "mailgunWebhook";
           label: "Mailgun Webhook";
         }, {
           kind: "deliveryStatus";
           label: "Delivery Status";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "search-provider-object";
        description: "Searches Mailgun event history through mailgun.js for retention-aware support workflows.";
        exposesSensitiveData: true;
        label: "Search Mailgun events";
        providerObjects: readonly [{
           kind: "mailgunEvent";
           label: "Mailgun Event";
        }];
        requiresCredential: true;
     }];
     category: "email";
     channelAudiences: readonly ["customer-facing", "mixed"];
     coverage: {
        evidence: readonly [{
           label: "mailgun.js package";
           url: "https://github.com/mailgun/mailgun.js";
         }, {
           label: "Mailgun Messages API";
           url: "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/messages";
         }, {
           label: "Mailgun Events API";
           url: "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/events";
         }, {
           label: "Mailgun Webhooks";
           url: "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/domain-webhooks";
        }];
        notes: readonly ["Coverage is the Cognidesk normalized support-email adapter surface backed by the official Mailgun SDK.", "The raw mailgun.js client is exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full Mailgun API clone."];
        scope: "support-workflow-subset";
     };
     credentialRequirements: readonly [{
        description: "Server-side Mailgun API key used by the official mailgun.js client.";
        id: "mailgun-api-key";
        label: "Mailgun API key";
        required: true;
      }, {
        description: "Mailgun domain selected by the SDK user for outbound, event, and stored-message operations.";
        id: "mailgun-domain";
        label: "Mailgun sending domain";
        required: true;
      }, {
        description: "Signing key used to verify Mailgun event callbacks.";
        id: "mailgun-webhook-signing-key";
        label: "Mailgun webhook signing key";
        required: false;
     }];
     directions: readonly ["receive-only", "send-only", "bidirectional"];
     id: "email.mailgun";
     limitations: readonly ["The SDK user owns domain selection, route policy, retention, redaction, replay-cache storage, outbound approval, and rate limiting.", "Advanced provider operations remain available through the raw mailgun.js client, not as Cognidesk-owned generated operations."];
     maintainers: readonly [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           eventSearch: "provider-supported-via-official-sdk";
           fullProviderApiClone: "not-covered";
           sendEmail: "provider-supported-via-official-sdk";
           sendReply: "provider-supported-via-official-sdk";
           storedMessageRead: "provider-supported-via-official-sdk";
           webhooks: "provider-supported-via-official-sdk";
        };
        implementation: {
           integrationKitStatus: "implemented";
           manifestImport: "no-sdk-client-initialization";
           sdkPackage: "mailgun.js";
           sdkVersionRange: "^13.2.0";
           strategy: "official-sdk";
           verifiedAt: "2026-06-21";
           verifiedPackageVersion: "13.2.0";
        };
        rawClientEscapeHatch: "mailgun.js IMailgunClient exposed from createMailgunEmailClient().rawClient";
     };
     name: "Mailgun";
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
        alias: "mailgun.storedMessage.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        extension: true;
        providerObject: "mailgunStoredMessage";
      }, {
        alias: "mailgun.domain.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        extension: true;
        providerObject: "mailgunDomain";
      }, {
        alias: "mailgun.webhooks.list";
        capability: "read-provider-object";
        extension: true;
        providerObject: "mailgunWebhook";
     }];
     packageName: "@cognidesk/integration-email-mailgun";
     privacyNotes: readonly ["Mailgun message bodies, recipients, sender addresses, headers, tags, variables, event payloads, routes, and attachments can contain customer data.", "Mailgun API keys and webhook signing keys stay server-side and are represented only as readiness state."];
     provider: "mailgun";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: (
     | "email.receive"
     | "email.reply.send"
     | "email.send"
     | "email.deliveryStatus.read"
     | "mailgun.storedMessage.read"
     | "mailgun.domain.read"
    | "mailgun.webhooks.list")[];
  operations: {
     email.deliveryStatus.read: (input) => Promise<unknown>;
     email.receive: (input) => Promise<{
        payload: any;
        verified: boolean;
     }>;
     email.reply.send: (input) => Promise<unknown>;
     email.send: (input) => Promise<unknown>;
     mailgun.domain.read: () => Promise<unknown>;
     mailgun.storedMessage.read: (input) => Promise<unknown>;
     mailgun.webhooks.list: () => Promise<unknown>;
  };
  rawClient: MailgunRawClient;
  getOperationHandler: {
     email.deliveryStatus.read: (input) => Promise<unknown>;
     email.receive: (input) => Promise<{
        payload: any;
        verified: boolean;
     }>;
     email.reply.send: (input) => Promise<unknown>;
     email.send: (input) => Promise<unknown>;
     mailgun.domain.read: () => Promise<unknown>;
     mailgun.storedMessage.read: (input) => Promise<unknown>;
     mailgun.webhooks.list: () => Promise<unknown>;
  }[Alias];
  requireOperationHandler: {
     email.deliveryStatus.read: (input) => Promise<unknown>;
     email.receive: (input) => Promise<{
        payload: any;
        verified: boolean;
     }>;
     email.reply.send: (input) => Promise<unknown>;
     email.send: (input) => Promise<unknown>;
     mailgun.domain.read: () => Promise<unknown>;
     mailgun.storedMessage.read: (input) => Promise<unknown>;
     mailgun.webhooks.list: () => Promise<unknown>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     email.deliveryStatus.read: (input) => Promise<unknown>;
     email.receive: (input) => Promise<{
        payload: any;
        verified: boolean;
     }>;
     email.reply.send: (input) => Promise<unknown>;
     email.send: (input) => Promise<unknown>;
     mailgun.domain.read: () => Promise<unknown>;
     mailgun.storedMessage.read: (input) => Promise<unknown>;
     mailgun.webhooks.list: () => Promise<unknown>;
  }[Alias]>>>;
}
```

| Name | Type |
| ------ | ------ |
| `bindingReport` | [`OperationBindingReport`](../../../packages/integration-kit/dist.md#operationbindingreport) |
| `client` | [`MailgunEmailClient`](#mailgunemailclient) |
| `manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage`: \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations`: `string`[]; `maintainers`: \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `Record`\<`string`, `unknown`\>; `name`: `string`; `operations`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes`: `string`[]; `provider`: `string`; `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} & \{ `capabilities`: readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Parses and verifies Mailgun inbound, delivery, engagement, and failure callbacks."`; `exposesSensitiveData`: `true`; `label`: `"Receive Mailgun events"`; `providerObjects`: readonly \[\{ `kind`: `"mailgunEvent"`; `label`: `"Mailgun Event"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Sends support email through the official Mailgun SDK."`; `exposesSensitiveData`: `true`; `label`: `"Send Mailgun email"`; `providerObjects`: readonly \[\{ `kind`: `"mailgunMessage"`; `label`: `"Mailgun Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads support-scoped stored messages, domain state, webhooks, and event delivery status."`; `exposesSensitiveData`: `true`; `label`: `"Read Mailgun message and domain resources"`; `providerObjects`: readonly \[\{ `kind`: `"mailgunStoredMessage"`; `label`: `"Mailgun Stored Message"`; \}, \{ `kind`: `"mailgunDomain"`; `label`: `"Mailgun Domain"`; \}, \{ `kind`: `"mailgunWebhook"`; `label`: `"Mailgun Webhook"`; \}, \{ `kind`: `"deliveryStatus"`; `label`: `"Delivery Status"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Searches Mailgun event history through mailgun.js for retention-aware support workflows."`; `exposesSensitiveData`: `true`; `label`: `"Search Mailgun events"`; `providerObjects`: readonly \[\{ `kind`: `"mailgunEvent"`; `label`: `"Mailgun Event"`; \}\]; `requiresCredential`: `true`; \}\]; `category`: `"email"`; `channelAudiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `coverage`: \{ `evidence`: readonly \[\{ `label`: `"mailgun.js package"`; `url`: `"https://github.com/mailgun/mailgun.js"`; \}, \{ `label`: `"Mailgun Messages API"`; `url`: `"https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/messages"`; \}, \{ `label`: `"Mailgun Events API"`; `url`: `"https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/events"`; \}, \{ `label`: `"Mailgun Webhooks"`; `url`: `"https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/domain-webhooks"`; \}\]; `notes`: readonly \[`"Coverage is the Cognidesk normalized support-email adapter surface backed by the official Mailgun SDK."`, `"The raw mailgun.js client is exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full Mailgun API clone."`\]; `scope`: `"support-workflow-subset"`; \}; `credentialRequirements`: readonly \[\{ `description`: `"Server-side Mailgun API key used by the official mailgun.js client."`; `id`: `"mailgun-api-key"`; `label`: `"Mailgun API key"`; `required`: `true`; \}, \{ `description`: `"Mailgun domain selected by the SDK user for outbound, event, and stored-message operations."`; `id`: `"mailgun-domain"`; `label`: `"Mailgun sending domain"`; `required`: `true`; \}, \{ `description`: `"Signing key used to verify Mailgun event callbacks."`; `id`: `"mailgun-webhook-signing-key"`; `label`: `"Mailgun webhook signing key"`; `required`: `false`; \}\]; `directions`: readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\]; `id`: `"email.mailgun"`; `limitations`: readonly \[`"The SDK user owns domain selection, route policy, retention, redaction, replay-cache storage, outbound approval, and rate limiting."`, `"Advanced provider operations remain available through the raw mailgun.js client, not as Cognidesk-owned generated operations."`\]; `maintainers`: readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\]; `metadata`: \{ `channelCoverage`: \{ `eventSearch`: `"provider-supported-via-official-sdk"`; `fullProviderApiClone`: `"not-covered"`; `sendEmail`: `"provider-supported-via-official-sdk"`; `sendReply`: `"provider-supported-via-official-sdk"`; `storedMessageRead`: `"provider-supported-via-official-sdk"`; `webhooks`: `"provider-supported-via-official-sdk"`; \}; `implementation`: \{ `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `sdkPackage`: `"mailgun.js"`; `sdkVersionRange`: `"^13.2.0"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedPackageVersion`: `"13.2.0"`; \}; `rawClientEscapeHatch`: `"mailgun.js IMailgunClient exposed from createMailgunEmailClient().rawClient"`; \}; `name`: `"Mailgun"`; `operations`: readonly \[\{ `alias`: `"email.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"email.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"email.reply.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"email.deliveryStatus.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"deliveryStatus"`; \}, \{ `alias`: `"mailgun.storedMessage.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"mailgunStoredMessage"`; \}, \{ `alias`: `"mailgun.domain.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"mailgunDomain"`; \}, \{ `alias`: `"mailgun.webhooks.list"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"mailgunWebhook"`; \}\]; `packageName`: `"@cognidesk/integration-email-mailgun"`; `privacyNotes`: readonly \[`"Mailgun message bodies, recipients, sender addresses, headers, tags, variables, event payloads, routes, and attachments can contain customer data."`, `"Mailgun API keys and webhook signing keys stay server-side and are represented only as readiness state."`\]; `provider`: `"mailgun"`; `trustLevel`: `"official"`; \} |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `operationAliases` | ( \| `"email.receive"` \| `"email.reply.send"` \| `"email.send"` \| `"email.deliveryStatus.read"` \| `"mailgun.storedMessage.read"` \| `"mailgun.domain.read"` \| `"mailgun.webhooks.list"`)[] |
| `operations` | \{ `email.deliveryStatus.read`: (`input`) => `Promise`\<`unknown`\>; `email.receive`: (`input`) => `Promise`\<\{ `payload`: `any`; `verified`: `boolean`; \}\>; `email.reply.send`: (`input`) => `Promise`\<`unknown`\>; `email.send`: (`input`) => `Promise`\<`unknown`\>; `mailgun.domain.read`: () => `Promise`\<`unknown`\>; `mailgun.storedMessage.read`: (`input`) => `Promise`\<`unknown`\>; `mailgun.webhooks.list`: () => `Promise`\<`unknown`\>; \} |
| `operations.email.deliveryStatus.read()` | (`input`) => `Promise`\<`unknown`\> |
| `operations.email.receive()` | (`input`) => `Promise`\<\{ `payload`: `any`; `verified`: `boolean`; \}\> |
| `operations.email.reply.send()` | (`input`) => `Promise`\<`unknown`\> |
| `operations.email.send()` | (`input`) => `Promise`\<`unknown`\> |
| `operations.mailgun.domain.read()` | () => `Promise`\<`unknown`\> |
| `operations.mailgun.storedMessage.read()` | (`input`) => `Promise`\<`unknown`\> |
| `operations.mailgun.webhooks.list()` | () => `Promise`\<`unknown`\> |
| `rawClient` | [`MailgunRawClient`](#mailgunrawclient) |
| `getOperationHandler()` | (`alias`) => \{ `email.deliveryStatus.read`: (`input`) => `Promise`\<`unknown`\>; `email.receive`: (`input`) => `Promise`\<\{ `payload`: `any`; `verified`: `boolean`; \}\>; `email.reply.send`: (`input`) => `Promise`\<`unknown`\>; `email.send`: (`input`) => `Promise`\<`unknown`\>; `mailgun.domain.read`: () => `Promise`\<`unknown`\>; `mailgun.storedMessage.read`: (`input`) => `Promise`\<`unknown`\>; `mailgun.webhooks.list`: () => `Promise`\<`unknown`\>; \}\[`Alias`\] |
| `requireOperationHandler()` | (`alias`) => \{ `email.deliveryStatus.read`: (`input`) => `Promise`\<`unknown`\>; `email.receive`: (`input`) => `Promise`\<\{ `payload`: `any`; `verified`: `boolean`; \}\>; `email.reply.send`: (`input`) => `Promise`\<`unknown`\>; `email.send`: (`input`) => `Promise`\<`unknown`\>; `mailgun.domain.read`: () => `Promise`\<`unknown`\>; `mailgun.storedMessage.read`: (`input`) => `Promise`\<`unknown`\>; `mailgun.webhooks.list`: () => `Promise`\<`unknown`\>; \}\[`Alias`\] |
| `run()` | ( `alias`, `input`, `context?`) => `Promise`\<`Awaited`\<`ReturnType`\<\{ `email.deliveryStatus.read`: (`input`) => `Promise`\<`unknown`\>; `email.receive`: (`input`) => `Promise`\<\{ `payload`: `any`; `verified`: `boolean`; \}\>; `email.reply.send`: (`input`) => `Promise`\<`unknown`\>; `email.send`: (`input`) => `Promise`\<`unknown`\>; `mailgun.domain.read`: () => `Promise`\<`unknown`\>; `mailgun.storedMessage.read`: (`input`) => `Promise`\<`unknown`\>; `mailgun.webhooks.list`: () => `Promise`\<`unknown`\>; \}\[`Alias`\]\>\>\> |

***

### createMailgunEmailLiveChecks()

```ts
function createMailgunEmailLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: {
        domain: string;
        providerResponse: unknown;
     };
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`MailgunEmailClientOptions`](#mailgunemailclientoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: \{
        `domain`: `string`;
        `providerResponse`: `unknown`;
     \};
  \}\>;
\}[]

***

### mailgunEmailCredentialStatuses()

```ts
function mailgunEmailCredentialStatuses(input): {
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
| `input` | [`MailgunCredentialStatusInput`](#mailguncredentialstatusinput) |

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

***

### parseMailgunWebhook()

```ts
function parseMailgunWebhook(request, options?): Promise<{
  payload: any;
  verified: boolean;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | \{ `requireSignature?`: `boolean`; `signingKey?`: `string`; \} |
| `options.requireSignature?` | `boolean` |
| `options.signingKey?` | `string` |

#### Returns

`Promise`\<\{
  `payload`: `any`;
  `verified`: `boolean`;
\}\>

***

### verifyMailgunWebhookSignature()

```ts
function verifyMailgunWebhookSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`MailgunWebhookSignatureInput`](#mailgunwebhooksignatureinput) |

#### Returns

`boolean`

## References

### mailgunEmailProviderManifest

Re-exports [mailgunEmailProviderManifest](dist/manifest.md#mailgunemailprovidermanifest)
