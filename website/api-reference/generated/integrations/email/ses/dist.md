# integrations/email/ses/dist

## Interfaces

### ParsedSesSnsNotification

#### Properties

##### event

```ts
event: unknown;
```

##### notification

```ts
notification: SesSnsNotification;
```

##### verified

```ts
verified: boolean;
```

***

### ParseSesSnsNotificationOptions

#### Properties

##### requireSignatureVerification?

```ts
optional requireSignatureVerification?: boolean;
```

##### verifySignature?

```ts
optional verifySignature?: (notification) => boolean | Promise<boolean>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `notification` | [`SesSnsNotification`](#sessnsnotification) |

###### Returns

`boolean` \| `Promise`\<`boolean`\>

***

### SesCredentialStatusInput

#### Properties

##### credentialsConfigured?

```ts
optional credentialsConfigured?: boolean;
```

##### region?

```ts
optional region?: string;
```

##### requireSnsSignatureVerification?

```ts
optional requireSnsSignatureVerification?: boolean;
```

##### snsVerificationConfigured?

```ts
optional snsVerificationConfigured?: boolean;
```

***

### SesEmailClient

#### Properties

##### rawClients

```ts
rawClients: SesRawClients;
```

#### Methods

##### deleteSuppressedDestination()

```ts
deleteSuppressedDestination(input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `DeleteSuppressedDestinationCommandInput` |

###### Returns

`Promise`\<`unknown`\>

##### getAccount()

```ts
getAccount(): Promise<GetAccountCommandOutput>;
```

###### Returns

`Promise`\<`GetAccountCommandOutput`\>

##### listEmailIdentities()

```ts
listEmailIdentities(input?): Promise<ListEmailIdentitiesCommandOutput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | `ListEmailIdentitiesCommandInput` |

###### Returns

`Promise`\<`ListEmailIdentitiesCommandOutput`\>

##### sendEmail()

```ts
sendEmail(input): Promise<SendEmailCommandOutput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `SendEmailCommandInput` |

###### Returns

`Promise`\<`SendEmailCommandOutput`\>

##### sendRawEmail()

```ts
sendRawEmail(input): Promise<SendRawEmailCommandOutput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `SendRawEmailCommandInput` |

###### Returns

`Promise`\<`SendRawEmailCommandOutput`\>

***

### SesEmailClientOptions

#### Properties

##### credentials?

```ts
optional credentials?: {
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
};
```

###### accessKeyId

```ts
accessKeyId: string;
```

###### secretAccessKey

```ts
secretAccessKey: string;
```

###### sessionToken?

```ts
optional sessionToken?: string;
```

##### rawClients?

```ts
optional rawClients?: SesRawClients;
```

##### region

```ts
region: string;
```

##### snsParseOptions?

```ts
optional snsParseOptions?: ParseSesSnsNotificationOptions;
```

***

### SesRawClients

#### Properties

##### ses

```ts
ses: Pick<SESClient, "send">;
```

##### sesv2

```ts
sesv2: Pick<SESv2Client, "send">;
```

***

### SesSnsNotification

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### Message?

```ts
optional Message?: string;
```

##### MessageId?

```ts
optional MessageId?: string;
```

##### Signature?

```ts
optional Signature?: string;
```

##### SignatureVersion?

```ts
optional SignatureVersion?: string;
```

##### SigningCertURL?

```ts
optional SigningCertURL?: string;
```

##### Timestamp?

```ts
optional Timestamp?: string;
```

##### TopicArn?

```ts
optional TopicArn?: string;
```

##### Type?

```ts
optional Type?: string;
```

##### UnsubscribeURL?

```ts
optional UnsubscribeURL?: string;
```

## Functions

### createSesEmailClient()

```ts
function createSesEmailClient(options): SesEmailClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SesEmailClientOptions`](#sesemailclientoptions) |

#### Returns

[`SesEmailClient`](#sesemailclient)

***

### createSesEmailIntegration()

```ts
function createSesEmailIntegration(options): {
  bindingReport: OperationBindingReport;
  client: SesEmailClient;
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
        description: "Parses SES delivery, bounce, complaint, and receiving notifications from SNS/SQS payloads.";
        exposesSensitiveData: true;
        label: "Parse SES/SNS events";
        providerObjects: readonly [{
           kind: "sesEvent";
           label: "SES Event";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["customer-facing"];
        capability: "send";
        description: "Sends support email through AWS SDK v3 SESv2 and raw MIME through classic SES.";
        exposesSensitiveData: true;
        label: "Send SES email";
        providerObjects: readonly [{
           kind: "sesMessage";
           label: "SES Message";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "read-provider-object";
        description: "Reads SES account readiness, identities, templates, configuration sets, and suppression state.";
        exposesSensitiveData: true;
        label: "Read SES account resources";
        providerObjects: readonly [{
           kind: "sesAccount";
           label: "SES Account";
         }, {
           kind: "sesIdentity";
           label: "SES Identity";
         }, {
           kind: "sesSuppressedDestination";
           label: "SES Suppressed Destination";
         }, {
           kind: "deliveryStatus";
           label: "Delivery Status";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "update-provider-object";
        changesWorkflow: true;
        description: "Deletes suppression-list entries when SDK-user policy permits.";
        label: "Manage SES suppressions";
        providerObjects: readonly [{
           kind: "sesSuppressedDestination";
           label: "SES Suppressed Destination";
        }];
        requiresCredential: true;
        sideEffect: true;
     }];
     category: "email";
     channelAudiences: readonly ["customer-facing", "mixed"];
     coverage: {
        evidence: readonly [{
           label: "AWS SDK for JavaScript v3 SESv2 client";
           url: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sesv2";
         }, {
           label: "AWS SDK for JavaScript v3 SES classic client";
           url: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-ses";
         }, {
           label: "Amazon SES API v2";
           url: "https://docs.aws.amazon.com/ses/latest/APIReference-V2/Welcome.html";
         }, {
           label: "Amazon SES event publishing";
           url: "https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html";
         }, {
           label: "Amazon SNS signature verification";
           url: "https://docs.aws.amazon.com/sns/latest/dg/sns-verify-signature-of-message.html";
        }];
        notes: readonly ["Coverage is the Cognidesk normalized support-email adapter surface backed by AWS SDK v3 SES clients.", "The raw AWS SDK clients are exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full SES API clone."];
        scope: "support-workflow-subset";
     };
     credentialRequirements: readonly [{
        description: "AWS credentials resolved by the AWS SDK default chain or explicitly supplied by the SDK user.";
        id: "aws-credentials";
        label: "AWS credentials";
        metadata: {
           scopeKind: "provider-permission-labels";
        };
        required: true;
        scopes: readonly ["ses:SendEmail", "ses:SendRawEmail", "ses:GetAccount", "ses:ListEmailIdentities", "ses:DeleteSuppressedDestination"];
      }, {
        description: "AWS Region for SES operations.";
        id: "aws-region";
        label: "AWS region";
        required: true;
      }, {
        description: "Verifier used when fail-closed SNS notification verification is required.";
        id: "ses-sns-verification";
        label: "SNS signature verification";
        required: false;
     }];
     directions: readonly ["receive-only", "send-only", "bidirectional"];
     id: "email.ses";
     limitations: readonly ["SES is not a mailbox product and does not expose mailbox-style message history.", "The SDK user owns regions, IAM policy, sender identities, suppression policy, configuration sets, event routing, SNS verification, retention, and outbound approval."];
     maintainers: readonly [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           accountReadiness: "provider-supported-via-official-sdk";
           fullProviderApiClone: "not-covered";
           identities: "provider-supported-via-official-sdk";
           mailboxStyleRead: "not-covered";
           rawMimeSend: "provider-supported-via-official-sdk";
           sendEmail: "provider-supported-via-official-sdk";
           snsEvents: "typed-parse";
           suppressions: "provider-supported-via-official-sdk";
        };
        implementation: {
           integrationKitStatus: "implemented";
           manifestImport: "no-sdk-client-initialization";
           sdkPackages: readonly ["@aws-sdk/client-sesv2", "@aws-sdk/client-ses"];
           sdkVersionRange: "^3.1073.0";
           strategy: "official-sdk";
           verifiedAt: "2026-06-21";
           verifiedPackageVersion: "3.1073.0";
        };
        rawClientEscapeHatch: "AWS SDK SESv2Client and optional SESClient exposed from createSesEmailClient().rawClients";
     };
     name: "Amazon SES";
     operations: readonly [{
        alias: "email.send";
        capability: "send";
        exposesSensitiveData: true;
        providerObject: "sesMessage";
        sideEffect: true;
      }, {
        alias: "ses.rawEmail.send";
        capability: "send";
        exposesSensitiveData: true;
        extension: true;
        providerObject: "sesMessage";
        sideEffect: true;
      }, {
        alias: "email.deliveryStatus.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        providerObject: "deliveryStatus";
      }, {
        alias: "ses.snsNotification.receive";
        capability: "receive";
        exposesSensitiveData: true;
        extension: true;
        providerObject: "sesEvent";
      }, {
        alias: "ses.account.read";
        capability: "read-provider-object";
        extension: true;
        providerObject: "sesAccount";
      }, {
        alias: "ses.identities.list";
        capability: "read-provider-object";
        extension: true;
        providerObject: "sesIdentity";
      }, {
        alias: "ses.suppressedDestination.delete";
        capability: "update-provider-object";
        changesWorkflow: true;
        extension: true;
        providerObject: "sesSuppressedDestination";
        sideEffect: true;
     }];
     packageName: "@cognidesk/integration-email-ses";
     privacyNotes: readonly ["SES email bodies, recipients, sender identities, headers, tags, templates, configuration sets, delivery events, and raw MIME content can contain customer data.", "AWS credentials, SNS certificates, and SQS credentials stay server-side and are represented only as readiness state."];
     provider: "ses";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: (
     | "email.send"
     | "email.deliveryStatus.read"
     | "ses.rawEmail.send"
     | "ses.snsNotification.receive"
     | "ses.account.read"
     | "ses.identities.list"
    | "ses.suppressedDestination.delete")[];
  operations: {
     email.deliveryStatus.read: (input) => Promise<ParsedSesSnsNotification>;
     email.send: (input) => Promise<SendEmailCommandOutput>;
     ses.account.read: () => Promise<GetAccountCommandOutput>;
     ses.identities.list: (input) => Promise<ListEmailIdentitiesCommandOutput>;
     ses.rawEmail.send: (input) => Promise<SendRawEmailCommandOutput>;
     ses.snsNotification.receive: (input) => Promise<ParsedSesSnsNotification>;
     ses.suppressedDestination.delete: (input) => Promise<unknown>;
  };
  rawClients: SesRawClients;
  getOperationHandler: {
     email.deliveryStatus.read: (input) => Promise<ParsedSesSnsNotification>;
     email.send: (input) => Promise<SendEmailCommandOutput>;
     ses.account.read: () => Promise<GetAccountCommandOutput>;
     ses.identities.list: (input) => Promise<ListEmailIdentitiesCommandOutput>;
     ses.rawEmail.send: (input) => Promise<SendRawEmailCommandOutput>;
     ses.snsNotification.receive: (input) => Promise<ParsedSesSnsNotification>;
     ses.suppressedDestination.delete: (input) => Promise<unknown>;
  }[Alias];
  requireOperationHandler: {
     email.deliveryStatus.read: (input) => Promise<ParsedSesSnsNotification>;
     email.send: (input) => Promise<SendEmailCommandOutput>;
     ses.account.read: () => Promise<GetAccountCommandOutput>;
     ses.identities.list: (input) => Promise<ListEmailIdentitiesCommandOutput>;
     ses.rawEmail.send: (input) => Promise<SendRawEmailCommandOutput>;
     ses.snsNotification.receive: (input) => Promise<ParsedSesSnsNotification>;
     ses.suppressedDestination.delete: (input) => Promise<unknown>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     email.deliveryStatus.read: (input) => Promise<ParsedSesSnsNotification>;
     email.send: (input) => Promise<SendEmailCommandOutput>;
     ses.account.read: () => Promise<GetAccountCommandOutput>;
     ses.identities.list: (input) => Promise<ListEmailIdentitiesCommandOutput>;
     ses.rawEmail.send: (input) => Promise<SendRawEmailCommandOutput>;
     ses.snsNotification.receive: (input) => Promise<ParsedSesSnsNotification>;
     ses.suppressedDestination.delete: (input) => Promise<unknown>;
  }[Alias]>>>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SesEmailClientOptions`](#sesemailclientoptions) |

#### Returns

```ts
{
  bindingReport: OperationBindingReport;
  client: SesEmailClient;
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
        description: "Parses SES delivery, bounce, complaint, and receiving notifications from SNS/SQS payloads.";
        exposesSensitiveData: true;
        label: "Parse SES/SNS events";
        providerObjects: readonly [{
           kind: "sesEvent";
           label: "SES Event";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["customer-facing"];
        capability: "send";
        description: "Sends support email through AWS SDK v3 SESv2 and raw MIME through classic SES.";
        exposesSensitiveData: true;
        label: "Send SES email";
        providerObjects: readonly [{
           kind: "sesMessage";
           label: "SES Message";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "read-provider-object";
        description: "Reads SES account readiness, identities, templates, configuration sets, and suppression state.";
        exposesSensitiveData: true;
        label: "Read SES account resources";
        providerObjects: readonly [{
           kind: "sesAccount";
           label: "SES Account";
         }, {
           kind: "sesIdentity";
           label: "SES Identity";
         }, {
           kind: "sesSuppressedDestination";
           label: "SES Suppressed Destination";
         }, {
           kind: "deliveryStatus";
           label: "Delivery Status";
        }];
        requiresCredential: true;
      }, {
        audiences: readonly ["internal-support", "mixed"];
        capability: "update-provider-object";
        changesWorkflow: true;
        description: "Deletes suppression-list entries when SDK-user policy permits.";
        label: "Manage SES suppressions";
        providerObjects: readonly [{
           kind: "sesSuppressedDestination";
           label: "SES Suppressed Destination";
        }];
        requiresCredential: true;
        sideEffect: true;
     }];
     category: "email";
     channelAudiences: readonly ["customer-facing", "mixed"];
     coverage: {
        evidence: readonly [{
           label: "AWS SDK for JavaScript v3 SESv2 client";
           url: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sesv2";
         }, {
           label: "AWS SDK for JavaScript v3 SES classic client";
           url: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-ses";
         }, {
           label: "Amazon SES API v2";
           url: "https://docs.aws.amazon.com/ses/latest/APIReference-V2/Welcome.html";
         }, {
           label: "Amazon SES event publishing";
           url: "https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html";
         }, {
           label: "Amazon SNS signature verification";
           url: "https://docs.aws.amazon.com/sns/latest/dg/sns-verify-signature-of-message.html";
        }];
        notes: readonly ["Coverage is the Cognidesk normalized support-email adapter surface backed by AWS SDK v3 SES clients.", "The raw AWS SDK clients are exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full SES API clone."];
        scope: "support-workflow-subset";
     };
     credentialRequirements: readonly [{
        description: "AWS credentials resolved by the AWS SDK default chain or explicitly supplied by the SDK user.";
        id: "aws-credentials";
        label: "AWS credentials";
        metadata: {
           scopeKind: "provider-permission-labels";
        };
        required: true;
        scopes: readonly ["ses:SendEmail", "ses:SendRawEmail", "ses:GetAccount", "ses:ListEmailIdentities", "ses:DeleteSuppressedDestination"];
      }, {
        description: "AWS Region for SES operations.";
        id: "aws-region";
        label: "AWS region";
        required: true;
      }, {
        description: "Verifier used when fail-closed SNS notification verification is required.";
        id: "ses-sns-verification";
        label: "SNS signature verification";
        required: false;
     }];
     directions: readonly ["receive-only", "send-only", "bidirectional"];
     id: "email.ses";
     limitations: readonly ["SES is not a mailbox product and does not expose mailbox-style message history.", "The SDK user owns regions, IAM policy, sender identities, suppression policy, configuration sets, event routing, SNS verification, retention, and outbound approval."];
     maintainers: readonly [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           accountReadiness: "provider-supported-via-official-sdk";
           fullProviderApiClone: "not-covered";
           identities: "provider-supported-via-official-sdk";
           mailboxStyleRead: "not-covered";
           rawMimeSend: "provider-supported-via-official-sdk";
           sendEmail: "provider-supported-via-official-sdk";
           snsEvents: "typed-parse";
           suppressions: "provider-supported-via-official-sdk";
        };
        implementation: {
           integrationKitStatus: "implemented";
           manifestImport: "no-sdk-client-initialization";
           sdkPackages: readonly ["@aws-sdk/client-sesv2", "@aws-sdk/client-ses"];
           sdkVersionRange: "^3.1073.0";
           strategy: "official-sdk";
           verifiedAt: "2026-06-21";
           verifiedPackageVersion: "3.1073.0";
        };
        rawClientEscapeHatch: "AWS SDK SESv2Client and optional SESClient exposed from createSesEmailClient().rawClients";
     };
     name: "Amazon SES";
     operations: readonly [{
        alias: "email.send";
        capability: "send";
        exposesSensitiveData: true;
        providerObject: "sesMessage";
        sideEffect: true;
      }, {
        alias: "ses.rawEmail.send";
        capability: "send";
        exposesSensitiveData: true;
        extension: true;
        providerObject: "sesMessage";
        sideEffect: true;
      }, {
        alias: "email.deliveryStatus.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        providerObject: "deliveryStatus";
      }, {
        alias: "ses.snsNotification.receive";
        capability: "receive";
        exposesSensitiveData: true;
        extension: true;
        providerObject: "sesEvent";
      }, {
        alias: "ses.account.read";
        capability: "read-provider-object";
        extension: true;
        providerObject: "sesAccount";
      }, {
        alias: "ses.identities.list";
        capability: "read-provider-object";
        extension: true;
        providerObject: "sesIdentity";
      }, {
        alias: "ses.suppressedDestination.delete";
        capability: "update-provider-object";
        changesWorkflow: true;
        extension: true;
        providerObject: "sesSuppressedDestination";
        sideEffect: true;
     }];
     packageName: "@cognidesk/integration-email-ses";
     privacyNotes: readonly ["SES email bodies, recipients, sender identities, headers, tags, templates, configuration sets, delivery events, and raw MIME content can contain customer data.", "AWS credentials, SNS certificates, and SQS credentials stay server-side and are represented only as readiness state."];
     provider: "ses";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: (
     | "email.send"
     | "email.deliveryStatus.read"
     | "ses.rawEmail.send"
     | "ses.snsNotification.receive"
     | "ses.account.read"
     | "ses.identities.list"
    | "ses.suppressedDestination.delete")[];
  operations: {
     email.deliveryStatus.read: (input) => Promise<ParsedSesSnsNotification>;
     email.send: (input) => Promise<SendEmailCommandOutput>;
     ses.account.read: () => Promise<GetAccountCommandOutput>;
     ses.identities.list: (input) => Promise<ListEmailIdentitiesCommandOutput>;
     ses.rawEmail.send: (input) => Promise<SendRawEmailCommandOutput>;
     ses.snsNotification.receive: (input) => Promise<ParsedSesSnsNotification>;
     ses.suppressedDestination.delete: (input) => Promise<unknown>;
  };
  rawClients: SesRawClients;
  getOperationHandler: {
     email.deliveryStatus.read: (input) => Promise<ParsedSesSnsNotification>;
     email.send: (input) => Promise<SendEmailCommandOutput>;
     ses.account.read: () => Promise<GetAccountCommandOutput>;
     ses.identities.list: (input) => Promise<ListEmailIdentitiesCommandOutput>;
     ses.rawEmail.send: (input) => Promise<SendRawEmailCommandOutput>;
     ses.snsNotification.receive: (input) => Promise<ParsedSesSnsNotification>;
     ses.suppressedDestination.delete: (input) => Promise<unknown>;
  }[Alias];
  requireOperationHandler: {
     email.deliveryStatus.read: (input) => Promise<ParsedSesSnsNotification>;
     email.send: (input) => Promise<SendEmailCommandOutput>;
     ses.account.read: () => Promise<GetAccountCommandOutput>;
     ses.identities.list: (input) => Promise<ListEmailIdentitiesCommandOutput>;
     ses.rawEmail.send: (input) => Promise<SendRawEmailCommandOutput>;
     ses.snsNotification.receive: (input) => Promise<ParsedSesSnsNotification>;
     ses.suppressedDestination.delete: (input) => Promise<unknown>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     email.deliveryStatus.read: (input) => Promise<ParsedSesSnsNotification>;
     email.send: (input) => Promise<SendEmailCommandOutput>;
     ses.account.read: () => Promise<GetAccountCommandOutput>;
     ses.identities.list: (input) => Promise<ListEmailIdentitiesCommandOutput>;
     ses.rawEmail.send: (input) => Promise<SendRawEmailCommandOutput>;
     ses.snsNotification.receive: (input) => Promise<ParsedSesSnsNotification>;
     ses.suppressedDestination.delete: (input) => Promise<unknown>;
  }[Alias]>>>;
}
```

| Name | Type |
| ------ | ------ |
| `bindingReport` | [`OperationBindingReport`](../../../packages/integration-kit/dist.md#operationbindingreport) |
| `client` | [`SesEmailClient`](#sesemailclient) |
| `manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage`: \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations`: `string`[]; `maintainers`: \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `Record`\<`string`, `unknown`\>; `name`: `string`; `operations`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes`: `string`[]; `provider`: `string`; `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} & \{ `capabilities`: readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Parses SES delivery, bounce, complaint, and receiving notifications from SNS/SQS payloads."`; `exposesSensitiveData`: `true`; `label`: `"Parse SES/SNS events"`; `providerObjects`: readonly \[\{ `kind`: `"sesEvent"`; `label`: `"SES Event"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Sends support email through AWS SDK v3 SESv2 and raw MIME through classic SES."`; `exposesSensitiveData`: `true`; `label`: `"Send SES email"`; `providerObjects`: readonly \[\{ `kind`: `"sesMessage"`; `label`: `"SES Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads SES account readiness, identities, templates, configuration sets, and suppression state."`; `exposesSensitiveData`: `true`; `label`: `"Read SES account resources"`; `providerObjects`: readonly \[\{ `kind`: `"sesAccount"`; `label`: `"SES Account"`; \}, \{ `kind`: `"sesIdentity"`; `label`: `"SES Identity"`; \}, \{ `kind`: `"sesSuppressedDestination"`; `label`: `"SES Suppressed Destination"`; \}, \{ `kind`: `"deliveryStatus"`; `label`: `"Delivery Status"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Deletes suppression-list entries when SDK-user policy permits."`; `label`: `"Manage SES suppressions"`; `providerObjects`: readonly \[\{ `kind`: `"sesSuppressedDestination"`; `label`: `"SES Suppressed Destination"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\]; `category`: `"email"`; `channelAudiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `coverage`: \{ `evidence`: readonly \[\{ `label`: `"AWS SDK for JavaScript v3 SESv2 client"`; `url`: `"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sesv2"`; \}, \{ `label`: `"AWS SDK for JavaScript v3 SES classic client"`; `url`: `"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-ses"`; \}, \{ `label`: `"Amazon SES API v2"`; `url`: `"https://docs.aws.amazon.com/ses/latest/APIReference-V2/Welcome.html"`; \}, \{ `label`: `"Amazon SES event publishing"`; `url`: `"https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html"`; \}, \{ `label`: `"Amazon SNS signature verification"`; `url`: `"https://docs.aws.amazon.com/sns/latest/dg/sns-verify-signature-of-message.html"`; \}\]; `notes`: readonly \[`"Coverage is the Cognidesk normalized support-email adapter surface backed by AWS SDK v3 SES clients."`, `"The raw AWS SDK clients are exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full SES API clone."`\]; `scope`: `"support-workflow-subset"`; \}; `credentialRequirements`: readonly \[\{ `description`: `"AWS credentials resolved by the AWS SDK default chain or explicitly supplied by the SDK user."`; `id`: `"aws-credentials"`; `label`: `"AWS credentials"`; `metadata`: \{ `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: readonly \[`"ses:SendEmail"`, `"ses:SendRawEmail"`, `"ses:GetAccount"`, `"ses:ListEmailIdentities"`, `"ses:DeleteSuppressedDestination"`\]; \}, \{ `description`: `"AWS Region for SES operations."`; `id`: `"aws-region"`; `label`: `"AWS region"`; `required`: `true`; \}, \{ `description`: `"Verifier used when fail-closed SNS notification verification is required."`; `id`: `"ses-sns-verification"`; `label`: `"SNS signature verification"`; `required`: `false`; \}\]; `directions`: readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\]; `id`: `"email.ses"`; `limitations`: readonly \[`"SES is not a mailbox product and does not expose mailbox-style message history."`, `"The SDK user owns regions, IAM policy, sender identities, suppression policy, configuration sets, event routing, SNS verification, retention, and outbound approval."`\]; `maintainers`: readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\]; `metadata`: \{ `channelCoverage`: \{ `accountReadiness`: `"provider-supported-via-official-sdk"`; `fullProviderApiClone`: `"not-covered"`; `identities`: `"provider-supported-via-official-sdk"`; `mailboxStyleRead`: `"not-covered"`; `rawMimeSend`: `"provider-supported-via-official-sdk"`; `sendEmail`: `"provider-supported-via-official-sdk"`; `snsEvents`: `"typed-parse"`; `suppressions`: `"provider-supported-via-official-sdk"`; \}; `implementation`: \{ `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `sdkPackages`: readonly \[`"@aws-sdk/client-sesv2"`, `"@aws-sdk/client-ses"`\]; `sdkVersionRange`: `"^3.1073.0"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedPackageVersion`: `"3.1073.0"`; \}; `rawClientEscapeHatch`: `"AWS SDK SESv2Client and optional SESClient exposed from createSesEmailClient().rawClients"`; \}; `name`: `"Amazon SES"`; `operations`: readonly \[\{ `alias`: `"email.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObject`: `"sesMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"ses.rawEmail.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"sesMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"email.deliveryStatus.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"deliveryStatus"`; \}, \{ `alias`: `"ses.snsNotification.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"sesEvent"`; \}, \{ `alias`: `"ses.account.read"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"sesAccount"`; \}, \{ `alias`: `"ses.identities.list"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"sesIdentity"`; \}, \{ `alias`: `"ses.suppressedDestination.delete"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `extension`: `true`; `providerObject`: `"sesSuppressedDestination"`; `sideEffect`: `true`; \}\]; `packageName`: `"@cognidesk/integration-email-ses"`; `privacyNotes`: readonly \[`"SES email bodies, recipients, sender identities, headers, tags, templates, configuration sets, delivery events, and raw MIME content can contain customer data."`, `"AWS credentials, SNS certificates, and SQS credentials stay server-side and are represented only as readiness state."`\]; `provider`: `"ses"`; `trustLevel`: `"official"`; \} |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `operationAliases` | ( \| `"email.send"` \| `"email.deliveryStatus.read"` \| `"ses.rawEmail.send"` \| `"ses.snsNotification.receive"` \| `"ses.account.read"` \| `"ses.identities.list"` \| `"ses.suppressedDestination.delete"`)[] |
| `operations` | \{ `email.deliveryStatus.read`: (`input`) => `Promise`\<[`ParsedSesSnsNotification`](#parsedsessnsnotification)\>; `email.send`: (`input`) => `Promise`\<`SendEmailCommandOutput`\>; `ses.account.read`: () => `Promise`\<`GetAccountCommandOutput`\>; `ses.identities.list`: (`input`) => `Promise`\<`ListEmailIdentitiesCommandOutput`\>; `ses.rawEmail.send`: (`input`) => `Promise`\<`SendRawEmailCommandOutput`\>; `ses.snsNotification.receive`: (`input`) => `Promise`\<[`ParsedSesSnsNotification`](#parsedsessnsnotification)\>; `ses.suppressedDestination.delete`: (`input`) => `Promise`\<`unknown`\>; \} |
| `operations.email.deliveryStatus.read()` | (`input`) => `Promise`\<[`ParsedSesSnsNotification`](#parsedsessnsnotification)\> |
| `operations.email.send()` | (`input`) => `Promise`\<`SendEmailCommandOutput`\> |
| `operations.ses.account.read()` | () => `Promise`\<`GetAccountCommandOutput`\> |
| `operations.ses.identities.list()` | (`input`) => `Promise`\<`ListEmailIdentitiesCommandOutput`\> |
| `operations.ses.rawEmail.send()` | (`input`) => `Promise`\<`SendRawEmailCommandOutput`\> |
| `operations.ses.snsNotification.receive()` | (`input`) => `Promise`\<[`ParsedSesSnsNotification`](#parsedsessnsnotification)\> |
| `operations.ses.suppressedDestination.delete()` | (`input`) => `Promise`\<`unknown`\> |
| `rawClients` | [`SesRawClients`](#sesrawclients) |
| `getOperationHandler()` | (`alias`) => \{ `email.deliveryStatus.read`: (`input`) => `Promise`\<[`ParsedSesSnsNotification`](#parsedsessnsnotification)\>; `email.send`: (`input`) => `Promise`\<`SendEmailCommandOutput`\>; `ses.account.read`: () => `Promise`\<`GetAccountCommandOutput`\>; `ses.identities.list`: (`input`) => `Promise`\<`ListEmailIdentitiesCommandOutput`\>; `ses.rawEmail.send`: (`input`) => `Promise`\<`SendRawEmailCommandOutput`\>; `ses.snsNotification.receive`: (`input`) => `Promise`\<[`ParsedSesSnsNotification`](#parsedsessnsnotification)\>; `ses.suppressedDestination.delete`: (`input`) => `Promise`\<`unknown`\>; \}\[`Alias`\] |
| `requireOperationHandler()` | (`alias`) => \{ `email.deliveryStatus.read`: (`input`) => `Promise`\<[`ParsedSesSnsNotification`](#parsedsessnsnotification)\>; `email.send`: (`input`) => `Promise`\<`SendEmailCommandOutput`\>; `ses.account.read`: () => `Promise`\<`GetAccountCommandOutput`\>; `ses.identities.list`: (`input`) => `Promise`\<`ListEmailIdentitiesCommandOutput`\>; `ses.rawEmail.send`: (`input`) => `Promise`\<`SendRawEmailCommandOutput`\>; `ses.snsNotification.receive`: (`input`) => `Promise`\<[`ParsedSesSnsNotification`](#parsedsessnsnotification)\>; `ses.suppressedDestination.delete`: (`input`) => `Promise`\<`unknown`\>; \}\[`Alias`\] |
| `run()` | ( `alias`, `input`, `context?`) => `Promise`\<`Awaited`\<`ReturnType`\<\{ `email.deliveryStatus.read`: (`input`) => `Promise`\<[`ParsedSesSnsNotification`](#parsedsessnsnotification)\>; `email.send`: (`input`) => `Promise`\<`SendEmailCommandOutput`\>; `ses.account.read`: () => `Promise`\<`GetAccountCommandOutput`\>; `ses.identities.list`: (`input`) => `Promise`\<`ListEmailIdentitiesCommandOutput`\>; `ses.rawEmail.send`: (`input`) => `Promise`\<`SendRawEmailCommandOutput`\>; `ses.snsNotification.receive`: (`input`) => `Promise`\<[`ParsedSesSnsNotification`](#parsedsessnsnotification)\>; `ses.suppressedDestination.delete`: (`input`) => `Promise`\<`unknown`\>; \}\[`Alias`\]\>\>\> |

***

### createSesEmailLiveChecks()

```ts
function createSesEmailLiveChecks(options): {
  description: string;
  id: string;
  requiredCredentialIds: string[];
  run: Promise<{
     details: GetAccountCommandOutput;
  }>;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SesEmailClientOptions`](#sesemailclientoptions) |

#### Returns

\{
  `description`: `string`;
  `id`: `string`;
  `requiredCredentialIds`: `string`[];
  `run`: `Promise`\<\{
     `details`: `GetAccountCommandOutput`;
  \}\>;
\}[]

***

### parseSesSnsNotification()

```ts
function parseSesSnsNotification(request, options?): Promise<ParsedSesSnsNotification>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseSesSnsNotificationOptions`](#parsesessnsnotificationoptions) |

#### Returns

`Promise`\<[`ParsedSesSnsNotification`](#parsedsessnsnotification)\>

***

### parseSesSqsRecord()

```ts
function parseSesSqsRecord(record): ParsedSesSnsNotification;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `record` | \{ `body`: `string`; \} |
| `record.body` | `string` |

#### Returns

[`ParsedSesSnsNotification`](#parsedsessnsnotification)

***

### sesEmailCredentialStatuses()

```ts
function sesEmailCredentialStatuses(input): {
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
| `input` | [`SesCredentialStatusInput`](#sescredentialstatusinput) |

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

### sesEmailProviderManifest

Re-exports [sesEmailProviderManifest](dist/manifest.md#sesemailprovidermanifest)
