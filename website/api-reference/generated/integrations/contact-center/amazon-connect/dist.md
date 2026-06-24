# integrations/contact-center/amazon-connect/dist

## Interfaces

### AmazonConnectContactCenterOptions

#### Properties

##### connectClient?

```ts
optional connectClient?: ConnectClient;
```

##### connectClientConfig?

```ts
optional connectClientConfig?: ConnectClientConfig;
```

##### instanceId

```ts
instanceId: string;
```

##### participantClient?

```ts
optional participantClient?: ConnectParticipantClient;
```

##### participantClientConfig?

```ts
optional participantClientConfig?: ConnectParticipantClientConfig;
```

##### region

```ts
region: string;
```

***

### AmazonConnectRawClients

#### Properties

##### connect

```ts
connect: ConnectClient;
```

##### participant

```ts
participant: ConnectParticipantClient;
```

***

### AmazonConnectStartChatInput

#### Extends

- [`AmazonConnectJsonObject`](#amazonconnectjsonobject)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### attributes?

```ts
optional attributes?: Record<string, string>;
```

##### clientToken?

```ts
optional clientToken?: string;
```

##### contactFlowId

```ts
contactFlowId: string;
```

##### initialMessage?

```ts
optional initialMessage?: {
  content: string;
  contentType: string;
};
```

###### content

```ts
content: string;
```

###### contentType

```ts
contentType: string;
```

##### participantDetails

```ts
participantDetails: {
  displayName: string;
};
```

###### displayName

```ts
displayName: string;
```

##### supportedMessagingContentTypes?

```ts
optional supportedMessagingContentTypes?: string[];
```

***

### AmazonConnectStartTaskInput

#### Extends

- [`AmazonConnectJsonObject`](#amazonconnectjsonobject)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### attributes?

```ts
optional attributes?: Record<string, string>;
```

##### clientToken?

```ts
optional clientToken?: string;
```

##### contactFlowId?

```ts
optional contactFlowId?: string;
```

##### description?

```ts
optional description?: string;
```

##### name

```ts
name: string;
```

##### quickConnectId?

```ts
optional quickConnectId?: string;
```

##### references?

```ts
optional references?: Record<string, {
  type: string;
  value: string;
}>;
```

##### taskTemplateId?

```ts
optional taskTemplateId?: string;
```

***

### AmazonConnectTranscriptInput

#### Properties

##### connectionToken

```ts
connectionToken: string;
```

##### contactId?

```ts
optional contactId?: string;
```

##### maxResults?

```ts
optional maxResults?: number;
```

##### nextToken?

```ts
optional nextToken?: string;
```

***

### AmazonConnectTransferInput

#### Extends

- [`AmazonConnectJsonObject`](#amazonconnectjsonobject)

#### Indexable

```ts
[key: string]: unknown
```

#### Properties

##### clientToken?

```ts
optional clientToken?: string;
```

##### contactFlowId

```ts
contactFlowId: string;
```

##### contactId

```ts
contactId: string;
```

##### queueId?

```ts
optional queueId?: string;
```

##### userId?

```ts
optional userId?: string;
```

## Type Aliases

### AmazonConnectJsonObject

```ts
type AmazonConnectJsonObject = Record<string, unknown>;
```

## Functions

### amazonConnectContactCenterCredentialStatuses()

```ts
function amazonConnectContactCenterCredentialStatuses(input): {
  message: string;
  providerPackageId: "contact-center.amazon-connect";
  requirementId: string;
  state: string;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Pick`\<[`AmazonConnectContactCenterOptions`](#amazonconnectcontactcenteroptions), `"region"` \| `"instanceId"`\> |

#### Returns

\{
  `message`: `string`;
  `providerPackageId`: `"contact-center.amazon-connect"`;
  `requirementId`: `string`;
  `state`: `string`;
\}[]

***

### createAmazonConnectContactCenterClient()

```ts
function createAmazonConnectContactCenterClient(options): {
  rawClients: AmazonConnectRawClients;
  createParticipantConnection: Promise<CreateParticipantConnectionCommandOutput>;
  describeInstance: Promise<DescribeInstanceCommandOutput>;
  getParticipantTranscript: Promise<GetTranscriptCommandOutput>;
  sendParticipantEvent: Promise<SendEventCommandOutput>;
  sendParticipantMessage: Promise<SendMessageCommandOutput>;
  startChatContact: Promise<{
     contactId: string;
     continuedFromContactId: string;
     participantId: string;
     participantToken: string;
     raw: StartChatContactCommandOutput;
  }>;
  startTaskContact: Promise<{
     contactId: string;
     raw: StartTaskContactCommandOutput;
  }>;
  transferContact: Promise<TransferContactCommandOutput>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AmazonConnectContactCenterOptions`](#amazonconnectcontactcenteroptions) |

#### Returns

```ts
{
  rawClients: AmazonConnectRawClients;
  createParticipantConnection: Promise<CreateParticipantConnectionCommandOutput>;
  describeInstance: Promise<DescribeInstanceCommandOutput>;
  getParticipantTranscript: Promise<GetTranscriptCommandOutput>;
  sendParticipantEvent: Promise<SendEventCommandOutput>;
  sendParticipantMessage: Promise<SendMessageCommandOutput>;
  startChatContact: Promise<{
     contactId: string;
     continuedFromContactId: string;
     participantId: string;
     participantToken: string;
     raw: StartChatContactCommandOutput;
  }>;
  startTaskContact: Promise<{
     contactId: string;
     raw: StartTaskContactCommandOutput;
  }>;
  transferContact: Promise<TransferContactCommandOutput>;
}
```

| Name | Type |
| ------ | ------ |
| `rawClients` | [`AmazonConnectRawClients`](#amazonconnectrawclients) |
| `createParticipantConnection()` | (`input`) => `Promise`\<`CreateParticipantConnectionCommandOutput`\> |
| `describeInstance()` | () => `Promise`\<`DescribeInstanceCommandOutput`\> |
| `getParticipantTranscript()` | (`input`) => `Promise`\<`GetTranscriptCommandOutput`\> |
| `sendParticipantEvent()` | (`input`) => `Promise`\<`SendEventCommandOutput`\> |
| `sendParticipantMessage()` | (`input`) => `Promise`\<`SendMessageCommandOutput`\> |
| `startChatContact()` | (`input`) => `Promise`\<\{ `contactId`: `string`; `continuedFromContactId`: `string`; `participantId`: `string`; `participantToken`: `string`; `raw`: `StartChatContactCommandOutput`; \}\> |
| `startTaskContact()` | (`input`) => `Promise`\<\{ `contactId`: `string`; `raw`: `StartTaskContactCommandOutput`; \}\> |
| `transferContact()` | (`input`) => `Promise`\<`TransferContactCommandOutput`\> |

***

### createAmazonConnectContactCenterIntegration()

```ts
function createAmazonConnectContactCenterIntegration(options): {
  bindingReport: OperationBindingReport;
  credentialStatuses: () => {
     message: string;
     providerPackageId: "contact-center.amazon-connect";
     requirementId: string;
     state: string;
  }[];
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
     capabilities: [{
        capability: "handoff";
        changesWorkflow: true;
        exposesSensitiveData: true;
        label: "Create Amazon Connect task handoffs";
        providerObjects: [{
           kind: "amazonConnectTaskContact";
           label: "Amazon Connect Task Contact";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        capability: "send";
        changesWorkflow: true;
        exposesSensitiveData: true;
        label: "Start Amazon Connect chat contacts and send participant messages";
        providerObjects: [{
           kind: "amazonConnectChatContact";
           label: "Amazon Connect Chat Contact";
         }, {
           kind: "amazonConnectChatMessage";
           label: "Amazon Connect Chat Message";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        capability: "transfer";
        changesWorkflow: true;
        exposesSensitiveData: true;
        label: "Transfer Amazon Connect task or email contacts";
        providerObjects: [{
           kind: "amazonConnectContactTransfer";
           label: "Amazon Connect Contact Transfer";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        capability: "read-provider-object";
        exposesSensitiveData: true;
        label: "Read Amazon Connect instance and transcript state";
        providerObjects: [{
           kind: "amazonConnectInstance";
           label: "Amazon Connect Instance";
         }, {
           kind: "amazonConnectChatTranscript";
           label: "Amazon Connect Chat Transcript";
        }];
        requiresCredential: true;
     }];
     category: "contact-center";
     channelAudiences: ["customer-facing", "internal-support", "mixed"];
     coverage: {
        evidence: [{
           label: "AWS SDK for JavaScript v3";
           url: "https://github.com/aws/aws-sdk-js-v3";
         }, {
           label: "Amazon Connect API Reference";
           url: "https://docs.aws.amazon.com/connect/latest/APIReference/Welcome.html";
         }, {
           label: "Amazon Connect Participant Service";
           url: "https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Participant_Service.html";
        }];
        notes: ["Runtime uses AWS SDK v3 clients for normalized Amazon Connect support workflows.", "Raw AWS SDK clients are exposed as escape hatches for provider-specific operations.", "The previous generated Connect-family full-provider clone is not carried forward as a Cognidesk-owned API; broader Connect-family SDK clients should be added only when normalized support workflows need them.", "Connect Health was present in the old generated model bundle, but no @aws-sdk/client-connect-health npm package was found during the 2026-06-21 SDK check."];
        scope: "support-workflow-subset";
     };
     credentialRequirements: [{
        description: "Amazon Connect instance ID and AWS region.";
        id: "amazon-connect-instance";
        label: "Amazon Connect instance";
        required: true;
      }, {
        description: "AWS SDK v3 credentials with the required Amazon Connect and Connect Participant permissions.";
        id: "amazon-connect-api-access";
        label: "Amazon Connect API access";
        metadata: {
           privilegeGuidance: "These are AWS IAM action names, not OAuth scopes.";
           scopeKind: "provider-permission-labels";
        };
        required: true;
        scopes: ["connect:StartTaskContact", "connect:StartChatContact", "connect:TransferContact", "connect:DescribeInstance"];
     }];
     directions: ["inbound-only", "outbound-only", "bidirectional"];
     id: "contact-center.amazon-connect";
     limitations: ["Contact flows, queue/quick-connect routing, outbound consent, IAM policy, participant token custody, and WebSocket subscription behavior remain application/AWS configuration.", "Raw AWS SDK clients are available for escape-hatch use, but raw SDK breadth is not declared as normalized Cognidesk adapter coverage."];
     maintainers: [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           chatContact: "sdk-normalized";
           connectHealth: "sdk-gap";
           participantMessages: "sdk-normalized";
           participantTranscript: "sdk-normalized";
           rawAwsSdkClients: "escape-hatch";
           taskContact: "sdk-normalized";
           taskEmailTransfer: "sdk-normalized";
        };
        implementation: {
           sdkPackage: "@aws-sdk/client-connect, @aws-sdk/client-connectparticipant";
           sdkPackages: readonly ["@aws-sdk/client-connect", "@aws-sdk/client-connectparticipant"];
           strategy: "official-sdk";
        };
     };
     name: "Amazon Connect";
     operations: [{
        alias: "contact-center.handoff.request";
        capability: "handoff";
        changesWorkflow: true;
        exposesSensitiveData: true;
        providerObject: "contactTransfer";
        providerOperation: "StartTaskContact";
        sideEffect: true;
      }, {
        alias: "contact-center.task.create";
        capability: "create-provider-object";
        changesWorkflow: true;
        exposesSensitiveData: true;
        providerObject: "contact-center-task";
        providerOperation: "StartTaskContact";
        sideEffect: true;
      }, {
        alias: "contact-center.contact.start";
        capability: "send";
        changesWorkflow: true;
        exposesSensitiveData: true;
        providerObject: "contact";
        providerOperation: "StartChatContact";
        sideEffect: true;
      }, {
        alias: "contact-center.transfer.request";
        capability: "transfer";
        changesWorkflow: true;
        exposesSensitiveData: true;
        providerObject: "contactTransfer";
        providerOperation: "TransferContact";
        sideEffect: true;
      }, {
        alias: "contact-center.transcript.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        providerObject: "contactTranscript";
        providerOperation: "GetTranscript";
     }];
     packageName: "@cognidesk/integration-contact-center-amazon-connect";
     privacyNotes: ["Task, chat, transfer, and transcript operations can include customer identifiers, routing attributes, messages, summaries, and participant tokens.", "AWS credentials remain inside the SDK user's runtime configuration."];
     provider: "amazon-connect";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: (
     | "contact-center.transfer.request"
     | "contact-center.handoff.request"
     | "contact-center.contact.start"
     | "contact-center.task.create"
    | "contact-center.transcript.read")[];
  operations: {
     contact-center.contact.start: (input) => Promise<{
        contactId: string;
        continuedFromContactId: string;
        participantId: string;
        participantToken: string;
        raw: StartChatContactCommandOutput;
     }>;
     contact-center.handoff.request: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.task.create: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.transcript.read: (input) => Promise<GetTranscriptCommandOutput>;
     contact-center.transfer.request: (input) => Promise<TransferContactCommandOutput>;
  };
  rawClient: AmazonConnectRawClients;
  rawClients: AmazonConnectRawClients;
  readiness: () => Promise<
     | {
     blockers?: never;
     checkSource: string;
     live: boolean;
     providerPackageId: "contact-center.amazon-connect";
     status: string;
   }
     | {
     blockers: {
        code: string;
        kind: string;
        message: string;
     }[];
     checkSource: string;
     live: boolean;
     providerPackageId: "contact-center.amazon-connect";
     status: string;
  }>;
  getOperationHandler: {
     contact-center.contact.start: (input) => Promise<{
        contactId: string;
        continuedFromContactId: string;
        participantId: string;
        participantToken: string;
        raw: StartChatContactCommandOutput;
     }>;
     contact-center.handoff.request: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.task.create: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.transcript.read: (input) => Promise<GetTranscriptCommandOutput>;
     contact-center.transfer.request: (input) => Promise<TransferContactCommandOutput>;
  }[Alias];
  requireOperationHandler: {
     contact-center.contact.start: (input) => Promise<{
        contactId: string;
        continuedFromContactId: string;
        participantId: string;
        participantToken: string;
        raw: StartChatContactCommandOutput;
     }>;
     contact-center.handoff.request: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.task.create: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.transcript.read: (input) => Promise<GetTranscriptCommandOutput>;
     contact-center.transfer.request: (input) => Promise<TransferContactCommandOutput>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     contact-center.contact.start: (input) => Promise<{
        contactId: string;
        continuedFromContactId: string;
        participantId: string;
        participantToken: string;
        raw: StartChatContactCommandOutput;
     }>;
     contact-center.handoff.request: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.task.create: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.transcript.read: (input) => Promise<GetTranscriptCommandOutput>;
     contact-center.transfer.request: (input) => Promise<TransferContactCommandOutput>;
  }[Alias]>>>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AmazonConnectContactCenterOptions`](#amazonconnectcontactcenteroptions) |

#### Returns

```ts
{
  bindingReport: OperationBindingReport;
  credentialStatuses: () => {
     message: string;
     providerPackageId: "contact-center.amazon-connect";
     requirementId: string;
     state: string;
  }[];
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
     capabilities: [{
        capability: "handoff";
        changesWorkflow: true;
        exposesSensitiveData: true;
        label: "Create Amazon Connect task handoffs";
        providerObjects: [{
           kind: "amazonConnectTaskContact";
           label: "Amazon Connect Task Contact";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        capability: "send";
        changesWorkflow: true;
        exposesSensitiveData: true;
        label: "Start Amazon Connect chat contacts and send participant messages";
        providerObjects: [{
           kind: "amazonConnectChatContact";
           label: "Amazon Connect Chat Contact";
         }, {
           kind: "amazonConnectChatMessage";
           label: "Amazon Connect Chat Message";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        capability: "transfer";
        changesWorkflow: true;
        exposesSensitiveData: true;
        label: "Transfer Amazon Connect task or email contacts";
        providerObjects: [{
           kind: "amazonConnectContactTransfer";
           label: "Amazon Connect Contact Transfer";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        capability: "read-provider-object";
        exposesSensitiveData: true;
        label: "Read Amazon Connect instance and transcript state";
        providerObjects: [{
           kind: "amazonConnectInstance";
           label: "Amazon Connect Instance";
         }, {
           kind: "amazonConnectChatTranscript";
           label: "Amazon Connect Chat Transcript";
        }];
        requiresCredential: true;
     }];
     category: "contact-center";
     channelAudiences: ["customer-facing", "internal-support", "mixed"];
     coverage: {
        evidence: [{
           label: "AWS SDK for JavaScript v3";
           url: "https://github.com/aws/aws-sdk-js-v3";
         }, {
           label: "Amazon Connect API Reference";
           url: "https://docs.aws.amazon.com/connect/latest/APIReference/Welcome.html";
         }, {
           label: "Amazon Connect Participant Service";
           url: "https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Participant_Service.html";
        }];
        notes: ["Runtime uses AWS SDK v3 clients for normalized Amazon Connect support workflows.", "Raw AWS SDK clients are exposed as escape hatches for provider-specific operations.", "The previous generated Connect-family full-provider clone is not carried forward as a Cognidesk-owned API; broader Connect-family SDK clients should be added only when normalized support workflows need them.", "Connect Health was present in the old generated model bundle, but no @aws-sdk/client-connect-health npm package was found during the 2026-06-21 SDK check."];
        scope: "support-workflow-subset";
     };
     credentialRequirements: [{
        description: "Amazon Connect instance ID and AWS region.";
        id: "amazon-connect-instance";
        label: "Amazon Connect instance";
        required: true;
      }, {
        description: "AWS SDK v3 credentials with the required Amazon Connect and Connect Participant permissions.";
        id: "amazon-connect-api-access";
        label: "Amazon Connect API access";
        metadata: {
           privilegeGuidance: "These are AWS IAM action names, not OAuth scopes.";
           scopeKind: "provider-permission-labels";
        };
        required: true;
        scopes: ["connect:StartTaskContact", "connect:StartChatContact", "connect:TransferContact", "connect:DescribeInstance"];
     }];
     directions: ["inbound-only", "outbound-only", "bidirectional"];
     id: "contact-center.amazon-connect";
     limitations: ["Contact flows, queue/quick-connect routing, outbound consent, IAM policy, participant token custody, and WebSocket subscription behavior remain application/AWS configuration.", "Raw AWS SDK clients are available for escape-hatch use, but raw SDK breadth is not declared as normalized Cognidesk adapter coverage."];
     maintainers: [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           chatContact: "sdk-normalized";
           connectHealth: "sdk-gap";
           participantMessages: "sdk-normalized";
           participantTranscript: "sdk-normalized";
           rawAwsSdkClients: "escape-hatch";
           taskContact: "sdk-normalized";
           taskEmailTransfer: "sdk-normalized";
        };
        implementation: {
           sdkPackage: "@aws-sdk/client-connect, @aws-sdk/client-connectparticipant";
           sdkPackages: readonly ["@aws-sdk/client-connect", "@aws-sdk/client-connectparticipant"];
           strategy: "official-sdk";
        };
     };
     name: "Amazon Connect";
     operations: [{
        alias: "contact-center.handoff.request";
        capability: "handoff";
        changesWorkflow: true;
        exposesSensitiveData: true;
        providerObject: "contactTransfer";
        providerOperation: "StartTaskContact";
        sideEffect: true;
      }, {
        alias: "contact-center.task.create";
        capability: "create-provider-object";
        changesWorkflow: true;
        exposesSensitiveData: true;
        providerObject: "contact-center-task";
        providerOperation: "StartTaskContact";
        sideEffect: true;
      }, {
        alias: "contact-center.contact.start";
        capability: "send";
        changesWorkflow: true;
        exposesSensitiveData: true;
        providerObject: "contact";
        providerOperation: "StartChatContact";
        sideEffect: true;
      }, {
        alias: "contact-center.transfer.request";
        capability: "transfer";
        changesWorkflow: true;
        exposesSensitiveData: true;
        providerObject: "contactTransfer";
        providerOperation: "TransferContact";
        sideEffect: true;
      }, {
        alias: "contact-center.transcript.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        providerObject: "contactTranscript";
        providerOperation: "GetTranscript";
     }];
     packageName: "@cognidesk/integration-contact-center-amazon-connect";
     privacyNotes: ["Task, chat, transfer, and transcript operations can include customer identifiers, routing attributes, messages, summaries, and participant tokens.", "AWS credentials remain inside the SDK user's runtime configuration."];
     provider: "amazon-connect";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: (
     | "contact-center.transfer.request"
     | "contact-center.handoff.request"
     | "contact-center.contact.start"
     | "contact-center.task.create"
    | "contact-center.transcript.read")[];
  operations: {
     contact-center.contact.start: (input) => Promise<{
        contactId: string;
        continuedFromContactId: string;
        participantId: string;
        participantToken: string;
        raw: StartChatContactCommandOutput;
     }>;
     contact-center.handoff.request: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.task.create: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.transcript.read: (input) => Promise<GetTranscriptCommandOutput>;
     contact-center.transfer.request: (input) => Promise<TransferContactCommandOutput>;
  };
  rawClient: AmazonConnectRawClients;
  rawClients: AmazonConnectRawClients;
  readiness: () => Promise<
     | {
     blockers?: never;
     checkSource: string;
     live: boolean;
     providerPackageId: "contact-center.amazon-connect";
     status: string;
   }
     | {
     blockers: {
        code: string;
        kind: string;
        message: string;
     }[];
     checkSource: string;
     live: boolean;
     providerPackageId: "contact-center.amazon-connect";
     status: string;
  }>;
  getOperationHandler: {
     contact-center.contact.start: (input) => Promise<{
        contactId: string;
        continuedFromContactId: string;
        participantId: string;
        participantToken: string;
        raw: StartChatContactCommandOutput;
     }>;
     contact-center.handoff.request: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.task.create: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.transcript.read: (input) => Promise<GetTranscriptCommandOutput>;
     contact-center.transfer.request: (input) => Promise<TransferContactCommandOutput>;
  }[Alias];
  requireOperationHandler: {
     contact-center.contact.start: (input) => Promise<{
        contactId: string;
        continuedFromContactId: string;
        participantId: string;
        participantToken: string;
        raw: StartChatContactCommandOutput;
     }>;
     contact-center.handoff.request: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.task.create: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.transcript.read: (input) => Promise<GetTranscriptCommandOutput>;
     contact-center.transfer.request: (input) => Promise<TransferContactCommandOutput>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     contact-center.contact.start: (input) => Promise<{
        contactId: string;
        continuedFromContactId: string;
        participantId: string;
        participantToken: string;
        raw: StartChatContactCommandOutput;
     }>;
     contact-center.handoff.request: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.task.create: (input) => Promise<{
        contactId: string;
        raw: StartTaskContactCommandOutput;
     }>;
     contact-center.transcript.read: (input) => Promise<GetTranscriptCommandOutput>;
     contact-center.transfer.request: (input) => Promise<TransferContactCommandOutput>;
  }[Alias]>>>;
}
```

| Name | Type |
| ------ | ------ |
| `bindingReport` | [`OperationBindingReport`](../../../packages/integration-kit/dist.md#operationbindingreport) |
| `credentialStatuses()` | () => \{ `message`: `string`; `providerPackageId`: `"contact-center.amazon-connect"`; `requirementId`: `string`; `state`: `string`; \}[] |
| `manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage`: \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations`: `string`[]; `maintainers`: \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `Record`\<`string`, `unknown`\>; `name`: `string`; `operations`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes`: `string`[]; `provider`: `string`; `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} & \{ `capabilities`: \[\{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create Amazon Connect task handoffs"`; `providerObjects`: \[\{ `kind`: `"amazonConnectTaskContact"`; `label`: `"Amazon Connect Task Contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Start Amazon Connect chat contacts and send participant messages"`; `providerObjects`: \[\{ `kind`: `"amazonConnectChatContact"`; `label`: `"Amazon Connect Chat Contact"`; \}, \{ `kind`: `"amazonConnectChatMessage"`; `label`: `"Amazon Connect Chat Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"transfer"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Transfer Amazon Connect task or email contacts"`; `providerObjects`: \[\{ `kind`: `"amazonConnectContactTransfer"`; `label`: `"Amazon Connect Contact Transfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read Amazon Connect instance and transcript state"`; `providerObjects`: \[\{ `kind`: `"amazonConnectInstance"`; `label`: `"Amazon Connect Instance"`; \}, \{ `kind`: `"amazonConnectChatTranscript"`; `label`: `"Amazon Connect Chat Transcript"`; \}\]; `requiresCredential`: `true`; \}\]; `category`: `"contact-center"`; `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `coverage`: \{ `evidence`: \[\{ `label`: `"AWS SDK for JavaScript v3"`; `url`: `"https://github.com/aws/aws-sdk-js-v3"`; \}, \{ `label`: `"Amazon Connect API Reference"`; `url`: `"https://docs.aws.amazon.com/connect/latest/APIReference/Welcome.html"`; \}, \{ `label`: `"Amazon Connect Participant Service"`; `url`: `"https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Participant_Service.html"`; \}\]; `notes`: \[`"Runtime uses AWS SDK v3 clients for normalized Amazon Connect support workflows."`, `"Raw AWS SDK clients are exposed as escape hatches for provider-specific operations."`, `"The previous generated Connect-family full-provider clone is not carried forward as a Cognidesk-owned API; broader Connect-family SDK clients should be added only when normalized support workflows need them."`, `"Connect Health was present in the old generated model bundle, but no @aws-sdk/client-connect-health npm package was found during the 2026-06-21 SDK check."`\]; `scope`: `"support-workflow-subset"`; \}; `credentialRequirements`: \[\{ `description`: `"Amazon Connect instance ID and AWS region."`; `id`: `"amazon-connect-instance"`; `label`: `"Amazon Connect instance"`; `required`: `true`; \}, \{ `description`: `"AWS SDK v3 credentials with the required Amazon Connect and Connect Participant permissions."`; `id`: `"amazon-connect-api-access"`; `label`: `"Amazon Connect API access"`; `metadata`: \{ `privilegeGuidance`: `"These are AWS IAM action names, not OAuth scopes."`; `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: \[`"connect:StartTaskContact"`, `"connect:StartChatContact"`, `"connect:TransferContact"`, `"connect:DescribeInstance"`\]; \}\]; `directions`: \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\]; `id`: `"contact-center.amazon-connect"`; `limitations`: \[`"Contact flows, queue/quick-connect routing, outbound consent, IAM policy, participant token custody, and WebSocket subscription behavior remain application/AWS configuration."`, `"Raw AWS SDK clients are available for escape-hatch use, but raw SDK breadth is not declared as normalized Cognidesk adapter coverage."`\]; `maintainers`: \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\]; `metadata`: \{ `channelCoverage`: \{ `chatContact`: `"sdk-normalized"`; `connectHealth`: `"sdk-gap"`; `participantMessages`: `"sdk-normalized"`; `participantTranscript`: `"sdk-normalized"`; `rawAwsSdkClients`: `"escape-hatch"`; `taskContact`: `"sdk-normalized"`; `taskEmailTransfer`: `"sdk-normalized"`; \}; `implementation`: \{ `sdkPackage`: `"@aws-sdk/client-connect, @aws-sdk/client-connectparticipant"`; `sdkPackages`: readonly \[`"@aws-sdk/client-connect"`, `"@aws-sdk/client-connectparticipant"`\]; `strategy`: `"official-sdk"`; \}; \}; `name`: `"Amazon Connect"`; `operations`: \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"contactTransfer"`; `providerOperation`: `"StartTaskContact"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.task.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"contact-center-task"`; `providerOperation`: `"StartTaskContact"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"contact"`; `providerOperation`: `"StartChatContact"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.transfer.request"`; `capability`: `"transfer"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"contactTransfer"`; `providerOperation`: `"TransferContact"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.transcript.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"contactTranscript"`; `providerOperation`: `"GetTranscript"`; \}\]; `packageName`: `"@cognidesk/integration-contact-center-amazon-connect"`; `privacyNotes`: \[`"Task, chat, transfer, and transcript operations can include customer identifiers, routing attributes, messages, summaries, and participant tokens."`, `"AWS credentials remain inside the SDK user's runtime configuration."`\]; `provider`: `"amazon-connect"`; `trustLevel`: `"official"`; \} |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `operationAliases` | ( \| `"contact-center.transfer.request"` \| `"contact-center.handoff.request"` \| `"contact-center.contact.start"` \| `"contact-center.task.create"` \| `"contact-center.transcript.read"`)[] |
| `operations` | \{ `contact-center.contact.start`: (`input`) => `Promise`\<\{ `contactId`: `string`; `continuedFromContactId`: `string`; `participantId`: `string`; `participantToken`: `string`; `raw`: `StartChatContactCommandOutput`; \}\>; `contact-center.handoff.request`: (`input`) => `Promise`\<\{ `contactId`: `string`; `raw`: `StartTaskContactCommandOutput`; \}\>; `contact-center.task.create`: (`input`) => `Promise`\<\{ `contactId`: `string`; `raw`: `StartTaskContactCommandOutput`; \}\>; `contact-center.transcript.read`: (`input`) => `Promise`\<`GetTranscriptCommandOutput`\>; `contact-center.transfer.request`: (`input`) => `Promise`\<`TransferContactCommandOutput`\>; \} |
| `operations.contact-center.contact.start()` | (`input`) => `Promise`\<\{ `contactId`: `string`; `continuedFromContactId`: `string`; `participantId`: `string`; `participantToken`: `string`; `raw`: `StartChatContactCommandOutput`; \}\> |
| `operations.contact-center.handoff.request()` | (`input`) => `Promise`\<\{ `contactId`: `string`; `raw`: `StartTaskContactCommandOutput`; \}\> |
| `operations.contact-center.task.create()` | (`input`) => `Promise`\<\{ `contactId`: `string`; `raw`: `StartTaskContactCommandOutput`; \}\> |
| `operations.contact-center.transcript.read()` | (`input`) => `Promise`\<`GetTranscriptCommandOutput`\> |
| `operations.contact-center.transfer.request()` | (`input`) => `Promise`\<`TransferContactCommandOutput`\> |
| `rawClient` | [`AmazonConnectRawClients`](#amazonconnectrawclients) |
| `rawClients` | [`AmazonConnectRawClients`](#amazonconnectrawclients) |
| `readiness()` | () => `Promise`\< \| \{ `blockers?`: `never`; `checkSource`: `string`; `live`: `boolean`; `providerPackageId`: `"contact-center.amazon-connect"`; `status`: `string`; \} \| \{ `blockers`: \{ `code`: `string`; `kind`: `string`; `message`: `string`; \}[]; `checkSource`: `string`; `live`: `boolean`; `providerPackageId`: `"contact-center.amazon-connect"`; `status`: `string`; \}\> |
| `getOperationHandler()` | (`alias`) => \{ `contact-center.contact.start`: (`input`) => `Promise`\<\{ `contactId`: `string`; `continuedFromContactId`: `string`; `participantId`: `string`; `participantToken`: `string`; `raw`: `StartChatContactCommandOutput`; \}\>; `contact-center.handoff.request`: (`input`) => `Promise`\<\{ `contactId`: `string`; `raw`: `StartTaskContactCommandOutput`; \}\>; `contact-center.task.create`: (`input`) => `Promise`\<\{ `contactId`: `string`; `raw`: `StartTaskContactCommandOutput`; \}\>; `contact-center.transcript.read`: (`input`) => `Promise`\<`GetTranscriptCommandOutput`\>; `contact-center.transfer.request`: (`input`) => `Promise`\<`TransferContactCommandOutput`\>; \}\[`Alias`\] |
| `requireOperationHandler()` | (`alias`) => \{ `contact-center.contact.start`: (`input`) => `Promise`\<\{ `contactId`: `string`; `continuedFromContactId`: `string`; `participantId`: `string`; `participantToken`: `string`; `raw`: `StartChatContactCommandOutput`; \}\>; `contact-center.handoff.request`: (`input`) => `Promise`\<\{ `contactId`: `string`; `raw`: `StartTaskContactCommandOutput`; \}\>; `contact-center.task.create`: (`input`) => `Promise`\<\{ `contactId`: `string`; `raw`: `StartTaskContactCommandOutput`; \}\>; `contact-center.transcript.read`: (`input`) => `Promise`\<`GetTranscriptCommandOutput`\>; `contact-center.transfer.request`: (`input`) => `Promise`\<`TransferContactCommandOutput`\>; \}\[`Alias`\] |
| `run()` | ( `alias`, `input`, `context?`) => `Promise`\<`Awaited`\<`ReturnType`\<\{ `contact-center.contact.start`: (`input`) => `Promise`\<\{ `contactId`: `string`; `continuedFromContactId`: `string`; `participantId`: `string`; `participantToken`: `string`; `raw`: `StartChatContactCommandOutput`; \}\>; `contact-center.handoff.request`: (`input`) => `Promise`\<\{ `contactId`: `string`; `raw`: `StartTaskContactCommandOutput`; \}\>; `contact-center.task.create`: (`input`) => `Promise`\<\{ `contactId`: `string`; `raw`: `StartTaskContactCommandOutput`; \}\>; `contact-center.transcript.read`: (`input`) => `Promise`\<`GetTranscriptCommandOutput`\>; `contact-center.transfer.request`: (`input`) => `Promise`\<`TransferContactCommandOutput`\>; \}\[`Alias`\]\>\>\> |

## References

### amazonConnectContactCenterManifest

Re-exports [amazonConnectContactCenterManifest](dist/manifest.md#amazonconnectcontactcentermanifest)
