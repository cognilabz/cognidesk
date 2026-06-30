# integrations/email/smtp/dist

## Interfaces

### SmtpCredentialStatusInput

#### Properties

##### accountCredentialsConfigured?

```ts
optional accountCredentialsConfigured?: boolean;
```

##### authMode?

```ts
optional authMode?: "password" | "external";
```

##### senderConfigured?

```ts
optional senderConfigured?: boolean;
```

##### serverConfigured?

```ts
optional serverConfigured?: boolean;
```

***

### SmtpEmailClient

#### Properties

##### rawTransport

```ts
rawTransport: SmtpRawTransport;
```

#### Methods

##### checkTransport()

```ts
checkTransport(): Promise<SmtpTransportReadiness>;
```

###### Returns

`Promise`\<[`SmtpTransportReadiness`](#smtptransportreadiness)\>

##### close()

```ts
close(): void;
```

###### Returns

`void`

##### sendEmail()

```ts
sendEmail(input): Promise<SmtpEmailSendResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SmtpEmailMessageInput`](#smtpemailmessageinput) |

###### Returns

`Promise`\<[`SmtpEmailSendResult`](#smtpemailsendresult)\>

##### sendReply()

```ts
sendReply(input): Promise<SmtpEmailSendResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SmtpEmailMessageInput`](#smtpemailmessageinput) |

###### Returns

`Promise`\<[`SmtpEmailSendResult`](#smtpemailsendresult)\>

***

### SmtpEmailClientOptions

#### Properties

##### defaults?

```ts
optional defaults?: SmtpEmailDefaults;
```

##### rawTransport?

```ts
optional rawTransport?: SmtpRawTransport;
```

##### transport

```ts
transport: SmtpTransportOptions;
```

***

### SmtpEmailDefaults

#### Properties

##### from?

```ts
optional from?: string;
```

##### replyTo?

```ts
optional replyTo?: string;
```

***

### SmtpEmailMessageInput

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

##### from?

```ts
optional from?: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### html?

```ts
optional html?: string;
```

##### replyTo?

```ts
optional replyTo?: string;
```

##### subject

```ts
subject: string;
```

##### text?

```ts
optional text?: string;
```

##### to

```ts
to: string | string[];
```

***

### SmtpEmailSendResult

#### Properties

##### accepted

```ts
accepted: string[];
```

##### messageId?

```ts
optional messageId?: string;
```

##### pending

```ts
pending: string[];
```

##### provider

```ts
provider: "smtp";
```

##### rejected

```ts
rejected: string[];
```

##### response?

```ts
optional response?: string;
```

***

### SmtpRawSendInfo

#### Properties

##### accepted?

```ts
optional accepted?: unknown;
```

##### messageId?

```ts
optional messageId?: unknown;
```

##### pending?

```ts
optional pending?: unknown;
```

##### rejected?

```ts
optional rejected?: unknown;
```

##### response?

```ts
optional response?: unknown;
```

***

### SmtpRawTransport

#### Methods

##### close()?

```ts
optional close(): void;
```

###### Returns

`void`

##### sendMail()

```ts
sendMail(input): Promise<SmtpRawSendInfo>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SmtpEmailMessageInput`](#smtpemailmessageinput) & \{ `from`: `string`; \} |

###### Returns

`Promise`\<[`SmtpRawSendInfo`](#smtprawsendinfo)\>

##### verify()?

```ts
optional verify(): Promise<boolean>;
```

###### Returns

`Promise`\<`boolean`\>

***

### SmtpTransportAuth

#### Properties

##### pass

```ts
pass: string;
```

##### user

```ts
user: string;
```

***

### SmtpTransportOptions

#### Properties

##### auth?

```ts
optional auth?: SmtpTransportAuth;
```

##### connectionTimeout?

```ts
optional connectionTimeout?: number;
```

##### greetingTimeout?

```ts
optional greetingTimeout?: number;
```

##### host

```ts
host: string;
```

##### localAddress?

```ts
optional localAddress?: string;
```

##### name?

```ts
optional name?: string;
```

##### port

```ts
port: number;
```

##### requireTLS?

```ts
optional requireTLS?: boolean;
```

##### secure

```ts
secure: boolean;
```

##### socketTimeout?

```ts
optional socketTimeout?: number;
```

***

### SmtpTransportReadiness

#### Properties

##### host

```ts
host: string;
```

##### port

```ts
port: number;
```

##### ready

```ts
ready: boolean;
```

##### secure

```ts
secure: boolean;
```

##### verified

```ts
verified: boolean;
```

## Functions

### createSmtpEmailClient()

```ts
function createSmtpEmailClient(options): SmtpEmailClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SmtpEmailClientOptions`](#smtpemailclientoptions) |

#### Returns

[`SmtpEmailClient`](#smtpemailclient)

***

### createSmtpEmailIntegration()

```ts
function createSmtpEmailIntegration(options): {
  bindingReport: OperationBindingReport;
  client: SmtpEmailClient;
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
        capability: "send";
        description: "Sends outbound support email through a configured SMTP transport.";
        exposesSensitiveData: true;
        label: "Send SMTP email";
        providerObjects: readonly [{
           kind: "emailMessage";
           label: "Email Message";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "read-provider-object";
        description: "Checks whether the configured SMTP transport can authenticate and accept mail.";
        label: "Check SMTP transport";
        providerObjects: readonly [{
           kind: "smtpTransport";
           label: "SMTP Transport";
        }];
        requiresCredential: true;
     }];
     category: "email";
     channelAudiences: readonly ["customer-facing", "mixed"];
     coverage: {
        evidence: readonly [{
           label: "RFC 5321 SMTP";
           url: "https://datatracker.ietf.org/doc/html/rfc5321";
         }, {
           label: "Nodemailer";
           url: "https://nodemailer.com/";
        }];
        notes: readonly ["Coverage is a focused Cognidesk SMTP outbound adapter backed by Nodemailer.", "This package sends SDK-user supplied message payloads and can verify the configured SMTP transport when the server supports it."];
        scope: "local-protocol";
     };
     credentialRequirements: readonly [{
        description: "SMTP host, port, TLS mode, and optional transport security settings.";
        id: "smtp-server";
        label: "SMTP server settings";
        required: true;
      }, {
        description: "Server-side SMTP username and password or externally supplied authenticated transport.";
        id: "smtp-account-credentials";
        label: "SMTP account credentials";
        required: true;
      }, {
        description: "Default from address used when a send call does not provide one.";
        id: "smtp-sender-address";
        label: "Sender address";
        required: false;
     }];
     directions: readonly ["send-only"];
     id: "email.smtp";
     limitations: readonly ["SMTP is outbound-only; mailbox synchronization, inbound parsing, reply polling, retention, and deletion are intentionally outside this package.", "SDK users own outbound approval, consent, sender identity policy, retry policy, rate limits, attachment policy, bounce handling, and retention."];
     maintainers: readonly [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           deliveryWebhooks: "not-covered";
           fullMailboxSync: "not-covered";
           inboundMailbox: "not-covered";
           sendEmail: "provider-supported-via-protocol-library";
           sendReply: "provider-supported-via-protocol-library";
           transportReadiness: "provider-supported-via-protocol-library";
        };
        implementation: {
           integrationKitStatus: "implemented";
           libraryPackage: "nodemailer";
           libraryVersionRange: "^9.0.1";
           manifestImport: "no-sdk-client-initialization";
           protocolSource: "RFC 5321";
           strategy: "local-protocol";
           verifiedAt: "2026-06-24";
           verifiedPackageVersion: "9.0.1";
        };
        rawClientEscapeHatch: "Nodemailer transport exposed from createSmtpEmailClient().rawTransport";
     };
     name: "SMTP Email";
     operations: readonly [{
        alias: "email.send";
        capability: "send";
        exposesSensitiveData: true;
        externallyVisible: true;
        providerObject: "emailMessage";
        requiresApproval: true;
        sideEffect: true;
      }, {
        alias: "email.reply.send";
        capability: "send";
        exposesSensitiveData: true;
        externallyVisible: true;
        providerObject: "emailMessage";
        requiresApproval: true;
        sideEffect: true;
      }, {
        alias: "smtp.transport.check";
        capability: "read-provider-object";
        extension: true;
        providerObject: "smtpTransport";
     }];
     packageName: "@cognidesk/integration-email-smtp";
     privacyNotes: readonly ["SMTP message bodies, recipients, sender addresses, reply-to addresses, headers, attachments, and delivery responses can contain customer data.", "SMTP credentials stay server-side and are represented in Studio only as credential/readiness state."];
     provider: "smtp";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: ("email.reply.send" | "email.send" | "smtp.transport.check")[];
  operations: {
     email.reply.send: (input) => Promise<SmtpEmailSendResult>;
     email.send: (input) => Promise<SmtpEmailSendResult>;
     smtp.transport.check: () => Promise<SmtpTransportReadiness>;
  };
  rawTransport: SmtpRawTransport;
  getOperationHandler: {
     email.reply.send: (input) => Promise<SmtpEmailSendResult>;
     email.send: (input) => Promise<SmtpEmailSendResult>;
     smtp.transport.check: () => Promise<SmtpTransportReadiness>;
  }[Alias];
  requireOperationHandler: {
     email.reply.send: (input) => Promise<SmtpEmailSendResult>;
     email.send: (input) => Promise<SmtpEmailSendResult>;
     smtp.transport.check: () => Promise<SmtpTransportReadiness>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     email.reply.send: (input) => Promise<SmtpEmailSendResult>;
     email.send: (input) => Promise<SmtpEmailSendResult>;
     smtp.transport.check: () => Promise<SmtpTransportReadiness>;
  }[Alias]>>>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SmtpEmailClientOptions`](#smtpemailclientoptions) |

#### Returns

```ts
{
  bindingReport: OperationBindingReport;
  client: SmtpEmailClient;
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
        capability: "send";
        description: "Sends outbound support email through a configured SMTP transport.";
        exposesSensitiveData: true;
        label: "Send SMTP email";
        providerObjects: readonly [{
           kind: "emailMessage";
           label: "Email Message";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "read-provider-object";
        description: "Checks whether the configured SMTP transport can authenticate and accept mail.";
        label: "Check SMTP transport";
        providerObjects: readonly [{
           kind: "smtpTransport";
           label: "SMTP Transport";
        }];
        requiresCredential: true;
     }];
     category: "email";
     channelAudiences: readonly ["customer-facing", "mixed"];
     coverage: {
        evidence: readonly [{
           label: "RFC 5321 SMTP";
           url: "https://datatracker.ietf.org/doc/html/rfc5321";
         }, {
           label: "Nodemailer";
           url: "https://nodemailer.com/";
        }];
        notes: readonly ["Coverage is a focused Cognidesk SMTP outbound adapter backed by Nodemailer.", "This package sends SDK-user supplied message payloads and can verify the configured SMTP transport when the server supports it."];
        scope: "local-protocol";
     };
     credentialRequirements: readonly [{
        description: "SMTP host, port, TLS mode, and optional transport security settings.";
        id: "smtp-server";
        label: "SMTP server settings";
        required: true;
      }, {
        description: "Server-side SMTP username and password or externally supplied authenticated transport.";
        id: "smtp-account-credentials";
        label: "SMTP account credentials";
        required: true;
      }, {
        description: "Default from address used when a send call does not provide one.";
        id: "smtp-sender-address";
        label: "Sender address";
        required: false;
     }];
     directions: readonly ["send-only"];
     id: "email.smtp";
     limitations: readonly ["SMTP is outbound-only; mailbox synchronization, inbound parsing, reply polling, retention, and deletion are intentionally outside this package.", "SDK users own outbound approval, consent, sender identity policy, retry policy, rate limits, attachment policy, bounce handling, and retention."];
     maintainers: readonly [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           deliveryWebhooks: "not-covered";
           fullMailboxSync: "not-covered";
           inboundMailbox: "not-covered";
           sendEmail: "provider-supported-via-protocol-library";
           sendReply: "provider-supported-via-protocol-library";
           transportReadiness: "provider-supported-via-protocol-library";
        };
        implementation: {
           integrationKitStatus: "implemented";
           libraryPackage: "nodemailer";
           libraryVersionRange: "^9.0.1";
           manifestImport: "no-sdk-client-initialization";
           protocolSource: "RFC 5321";
           strategy: "local-protocol";
           verifiedAt: "2026-06-24";
           verifiedPackageVersion: "9.0.1";
        };
        rawClientEscapeHatch: "Nodemailer transport exposed from createSmtpEmailClient().rawTransport";
     };
     name: "SMTP Email";
     operations: readonly [{
        alias: "email.send";
        capability: "send";
        exposesSensitiveData: true;
        externallyVisible: true;
        providerObject: "emailMessage";
        requiresApproval: true;
        sideEffect: true;
      }, {
        alias: "email.reply.send";
        capability: "send";
        exposesSensitiveData: true;
        externallyVisible: true;
        providerObject: "emailMessage";
        requiresApproval: true;
        sideEffect: true;
      }, {
        alias: "smtp.transport.check";
        capability: "read-provider-object";
        extension: true;
        providerObject: "smtpTransport";
     }];
     packageName: "@cognidesk/integration-email-smtp";
     privacyNotes: readonly ["SMTP message bodies, recipients, sender addresses, reply-to addresses, headers, attachments, and delivery responses can contain customer data.", "SMTP credentials stay server-side and are represented in Studio only as credential/readiness state."];
     provider: "smtp";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: ("email.reply.send" | "email.send" | "smtp.transport.check")[];
  operations: {
     email.reply.send: (input) => Promise<SmtpEmailSendResult>;
     email.send: (input) => Promise<SmtpEmailSendResult>;
     smtp.transport.check: () => Promise<SmtpTransportReadiness>;
  };
  rawTransport: SmtpRawTransport;
  getOperationHandler: {
     email.reply.send: (input) => Promise<SmtpEmailSendResult>;
     email.send: (input) => Promise<SmtpEmailSendResult>;
     smtp.transport.check: () => Promise<SmtpTransportReadiness>;
  }[Alias];
  requireOperationHandler: {
     email.reply.send: (input) => Promise<SmtpEmailSendResult>;
     email.send: (input) => Promise<SmtpEmailSendResult>;
     smtp.transport.check: () => Promise<SmtpTransportReadiness>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     email.reply.send: (input) => Promise<SmtpEmailSendResult>;
     email.send: (input) => Promise<SmtpEmailSendResult>;
     smtp.transport.check: () => Promise<SmtpTransportReadiness>;
  }[Alias]>>>;
}
```

| Name | Type |
| ------ | ------ |
| `bindingReport` | [`OperationBindingReport`](../../../packages/integration-kit/dist.md#operationbindingreport) |
| `client` | [`SmtpEmailClient`](#smtpemailclient) |
| `manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage`: \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations`: `string`[]; `maintainers`: \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `Record`\<`string`, `unknown`\>; `name`: `string`; `operations`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes`: `string`[]; `provider`: `string`; `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} & \{ `capabilities`: readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"send"`; `description`: `"Sends outbound support email through a configured SMTP transport."`; `exposesSensitiveData`: `true`; `label`: `"Send SMTP email"`; `providerObjects`: readonly \[\{ `kind`: `"emailMessage"`; `label`: `"Email Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Checks whether the configured SMTP transport can authenticate and accept mail."`; `label`: `"Check SMTP transport"`; `providerObjects`: readonly \[\{ `kind`: `"smtpTransport"`; `label`: `"SMTP Transport"`; \}\]; `requiresCredential`: `true`; \}\]; `category`: `"email"`; `channelAudiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `coverage`: \{ `evidence`: readonly \[\{ `label`: `"RFC 5321 SMTP"`; `url`: `"https://datatracker.ietf.org/doc/html/rfc5321"`; \}, \{ `label`: `"Nodemailer"`; `url`: `"https://nodemailer.com/"`; \}\]; `notes`: readonly \[`"Coverage is a focused Cognidesk SMTP outbound adapter backed by Nodemailer."`, `"This package sends SDK-user supplied message payloads and can verify the configured SMTP transport when the server supports it."`\]; `scope`: `"local-protocol"`; \}; `credentialRequirements`: readonly \[\{ `description`: `"SMTP host, port, TLS mode, and optional transport security settings."`; `id`: `"smtp-server"`; `label`: `"SMTP server settings"`; `required`: `true`; \}, \{ `description`: `"Server-side SMTP username and password or externally supplied authenticated transport."`; `id`: `"smtp-account-credentials"`; `label`: `"SMTP account credentials"`; `required`: `true`; \}, \{ `description`: `"Default from address used when a send call does not provide one."`; `id`: `"smtp-sender-address"`; `label`: `"Sender address"`; `required`: `false`; \}\]; `directions`: readonly \[`"send-only"`\]; `id`: `"email.smtp"`; `limitations`: readonly \[`"SMTP is outbound-only; mailbox synchronization, inbound parsing, reply polling, retention, and deletion are intentionally outside this package."`, `"SDK users own outbound approval, consent, sender identity policy, retry policy, rate limits, attachment policy, bounce handling, and retention."`\]; `maintainers`: readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\]; `metadata`: \{ `channelCoverage`: \{ `deliveryWebhooks`: `"not-covered"`; `fullMailboxSync`: `"not-covered"`; `inboundMailbox`: `"not-covered"`; `sendEmail`: `"provider-supported-via-protocol-library"`; `sendReply`: `"provider-supported-via-protocol-library"`; `transportReadiness`: `"provider-supported-via-protocol-library"`; \}; `implementation`: \{ `integrationKitStatus`: `"implemented"`; `libraryPackage`: `"nodemailer"`; `libraryVersionRange`: `"^9.0.1"`; `manifestImport`: `"no-sdk-client-initialization"`; `protocolSource`: `"RFC 5321"`; `strategy`: `"local-protocol"`; `verifiedAt`: `"2026-06-24"`; `verifiedPackageVersion`: `"9.0.1"`; \}; `rawClientEscapeHatch`: `"Nodemailer transport exposed from createSmtpEmailClient().rawTransport"`; \}; `name`: `"SMTP Email"`; `operations`: readonly \[\{ `alias`: `"email.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"emailMessage"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"email.reply.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"emailMessage"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"smtp.transport.check"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"smtpTransport"`; \}\]; `packageName`: `"@cognidesk/integration-email-smtp"`; `privacyNotes`: readonly \[`"SMTP message bodies, recipients, sender addresses, reply-to addresses, headers, attachments, and delivery responses can contain customer data."`, `"SMTP credentials stay server-side and are represented in Studio only as credential/readiness state."`\]; `provider`: `"smtp"`; `trustLevel`: `"official"`; \} |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `operationAliases` | (`"email.reply.send"` \| `"email.send"` \| `"smtp.transport.check"`)[] |
| `operations` | \{ `email.reply.send`: (`input`) => `Promise`\<[`SmtpEmailSendResult`](#smtpemailsendresult)\>; `email.send`: (`input`) => `Promise`\<[`SmtpEmailSendResult`](#smtpemailsendresult)\>; `smtp.transport.check`: () => `Promise`\<[`SmtpTransportReadiness`](#smtptransportreadiness)\>; \} |
| `operations.email.reply.send()` | (`input`) => `Promise`\<[`SmtpEmailSendResult`](#smtpemailsendresult)\> |
| `operations.email.send()` | (`input`) => `Promise`\<[`SmtpEmailSendResult`](#smtpemailsendresult)\> |
| `operations.smtp.transport.check()` | () => `Promise`\<[`SmtpTransportReadiness`](#smtptransportreadiness)\> |
| `rawTransport` | [`SmtpRawTransport`](#smtprawtransport) |
| `getOperationHandler()` | (`alias`) => \{ `email.reply.send`: (`input`) => `Promise`\<[`SmtpEmailSendResult`](#smtpemailsendresult)\>; `email.send`: (`input`) => `Promise`\<[`SmtpEmailSendResult`](#smtpemailsendresult)\>; `smtp.transport.check`: () => `Promise`\<[`SmtpTransportReadiness`](#smtptransportreadiness)\>; \}\[`Alias`\] |
| `requireOperationHandler()` | (`alias`) => \{ `email.reply.send`: (`input`) => `Promise`\<[`SmtpEmailSendResult`](#smtpemailsendresult)\>; `email.send`: (`input`) => `Promise`\<[`SmtpEmailSendResult`](#smtpemailsendresult)\>; `smtp.transport.check`: () => `Promise`\<[`SmtpTransportReadiness`](#smtptransportreadiness)\>; \}\[`Alias`\] |
| `run()` | ( `alias`, `input`, `context?`) => `Promise`\<`Awaited`\<`ReturnType`\<\{ `email.reply.send`: (`input`) => `Promise`\<[`SmtpEmailSendResult`](#smtpemailsendresult)\>; `email.send`: (`input`) => `Promise`\<[`SmtpEmailSendResult`](#smtpemailsendresult)\>; `smtp.transport.check`: () => `Promise`\<[`SmtpTransportReadiness`](#smtptransportreadiness)\>; \}\[`Alias`\]\>\>\> |

***

### htmlEmailFromText()

```ts
function htmlEmailFromText(text): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`string`

***

### smtpEmailCredentialStatuses()

```ts
function smtpEmailCredentialStatuses(input): {
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
| `input` | [`SmtpCredentialStatusInput`](#smtpcredentialstatusinput) |

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

### smtpEmailProviderManifest

Re-exports [smtpEmailProviderManifest](dist/manifest.md#smtpemailprovidermanifest)
