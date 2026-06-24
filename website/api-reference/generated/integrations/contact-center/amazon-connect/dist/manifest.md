# integrations/contact-center/amazon-connect/dist/manifest

## Variables

### amazonConnectContactCenterManifest

```ts
const amazonConnectContactCenterManifest: {
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
| `capabilities` | \[\{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create Amazon Connect task handoffs"`; `providerObjects`: \[\{ `kind`: `"amazonConnectTaskContact"`; `label`: `"Amazon Connect Task Contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Start Amazon Connect chat contacts and send participant messages"`; `providerObjects`: \[\{ `kind`: `"amazonConnectChatContact"`; `label`: `"Amazon Connect Chat Contact"`; \}, \{ `kind`: `"amazonConnectChatMessage"`; `label`: `"Amazon Connect Chat Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"transfer"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Transfer Amazon Connect task or email contacts"`; `providerObjects`: \[\{ `kind`: `"amazonConnectContactTransfer"`; `label`: `"Amazon Connect Contact Transfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read Amazon Connect instance and transcript state"`; `providerObjects`: \[\{ `kind`: `"amazonConnectInstance"`; `label`: `"Amazon Connect Instance"`; \}, \{ `kind`: `"amazonConnectChatTranscript"`; `label`: `"Amazon Connect Chat Transcript"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"contact-center"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"AWS SDK for JavaScript v3"`; `url`: `"https://github.com/aws/aws-sdk-js-v3"`; \}, \{ `label`: `"Amazon Connect API Reference"`; `url`: `"https://docs.aws.amazon.com/connect/latest/APIReference/Welcome.html"`; \}, \{ `label`: `"Amazon Connect Participant Service"`; `url`: `"https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Participant_Service.html"`; \}\]; `notes`: \[`"Runtime uses AWS SDK v3 clients for normalized Amazon Connect support workflows."`, `"Raw AWS SDK clients are exposed as escape hatches for provider-specific operations."`, `"The previous generated Connect-family full-provider clone is not carried forward as a Cognidesk-owned API; broader Connect-family SDK clients should be added only when normalized support workflows need them."`, `"Connect Health was present in the old generated model bundle, but no @aws-sdk/client-connect-health npm package was found during the 2026-06-21 SDK check."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"AWS SDK for JavaScript v3"`; `url`: `"https://github.com/aws/aws-sdk-js-v3"`; \}, \{ `label`: `"Amazon Connect API Reference"`; `url`: `"https://docs.aws.amazon.com/connect/latest/APIReference/Welcome.html"`; \}, \{ `label`: `"Amazon Connect Participant Service"`; `url`: `"https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Participant_Service.html"`; \}\] |
| `coverage.notes` | \[`"Runtime uses AWS SDK v3 clients for normalized Amazon Connect support workflows."`, `"Raw AWS SDK clients are exposed as escape hatches for provider-specific operations."`, `"The previous generated Connect-family full-provider clone is not carried forward as a Cognidesk-owned API; broader Connect-family SDK clients should be added only when normalized support workflows need them."`, `"Connect Health was present in the old generated model bundle, but no @aws-sdk/client-connect-health npm package was found during the 2026-06-21 SDK check."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `description`: `"Amazon Connect instance ID and AWS region."`; `id`: `"amazon-connect-instance"`; `label`: `"Amazon Connect instance"`; `required`: `true`; \}, \{ `description`: `"AWS SDK v3 credentials with the required Amazon Connect and Connect Participant permissions."`; `id`: `"amazon-connect-api-access"`; `label`: `"Amazon Connect API access"`; `metadata`: \{ `privilegeGuidance`: `"These are AWS IAM action names, not OAuth scopes."`; `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: \[`"connect:StartTaskContact"`, `"connect:StartChatContact"`, `"connect:TransferContact"`, `"connect:DescribeInstance"`\]; \}\] |
| `directions` | \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.amazon-connect"` |
| `limitations` | \[`"Contact flows, queue/quick-connect routing, outbound consent, IAM policy, participant token custody, and WebSocket subscription behavior remain application/AWS configuration."`, `"Raw AWS SDK clients are available for escape-hatch use, but raw SDK breadth is not declared as normalized Cognidesk adapter coverage."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `chatContact`: `"sdk-normalized"`; `connectHealth`: `"sdk-gap"`; `participantMessages`: `"sdk-normalized"`; `participantTranscript`: `"sdk-normalized"`; `rawAwsSdkClients`: `"escape-hatch"`; `taskContact`: `"sdk-normalized"`; `taskEmailTransfer`: `"sdk-normalized"`; \}; `implementation`: \{ `sdkPackage`: `"@aws-sdk/client-connect, @aws-sdk/client-connectparticipant"`; `sdkPackages`: readonly \[`"@aws-sdk/client-connect"`, `"@aws-sdk/client-connectparticipant"`\]; `strategy`: `"official-sdk"`; \}; \} |
| `metadata.channelCoverage` | \{ `chatContact`: `"sdk-normalized"`; `connectHealth`: `"sdk-gap"`; `participantMessages`: `"sdk-normalized"`; `participantTranscript`: `"sdk-normalized"`; `rawAwsSdkClients`: `"escape-hatch"`; `taskContact`: `"sdk-normalized"`; `taskEmailTransfer`: `"sdk-normalized"`; \} |
| `metadata.channelCoverage.chatContact` | `"sdk-normalized"` |
| `metadata.channelCoverage.connectHealth` | `"sdk-gap"` |
| `metadata.channelCoverage.participantMessages` | `"sdk-normalized"` |
| `metadata.channelCoverage.participantTranscript` | `"sdk-normalized"` |
| `metadata.channelCoverage.rawAwsSdkClients` | `"escape-hatch"` |
| `metadata.channelCoverage.taskContact` | `"sdk-normalized"` |
| `metadata.channelCoverage.taskEmailTransfer` | `"sdk-normalized"` |
| `metadata.implementation` | \{ `sdkPackage`: `"@aws-sdk/client-connect, @aws-sdk/client-connectparticipant"`; `sdkPackages`: readonly \[`"@aws-sdk/client-connect"`, `"@aws-sdk/client-connectparticipant"`\]; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.sdkPackage` | `"@aws-sdk/client-connect, @aws-sdk/client-connectparticipant"` |
| `metadata.implementation.sdkPackages` | readonly \[`"@aws-sdk/client-connect"`, `"@aws-sdk/client-connectparticipant"`\] |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `name` | `"Amazon Connect"` |
| `operations` | \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"contactTransfer"`; `providerOperation`: `"StartTaskContact"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.task.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"contact-center-task"`; `providerOperation`: `"StartTaskContact"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"contact"`; `providerOperation`: `"StartChatContact"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.transfer.request"`; `capability`: `"transfer"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"contactTransfer"`; `providerOperation`: `"TransferContact"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.transcript.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"contactTranscript"`; `providerOperation`: `"GetTranscript"`; \}\] |
| `packageName` | `"@cognidesk/integration-contact-center-amazon-connect"` |
| `privacyNotes` | \[`"Task, chat, transfer, and transcript operations can include customer identifiers, routing attributes, messages, summaries, and participant tokens."`, `"AWS credentials remain inside the SDK user's runtime configuration."`\] |
| `provider` | `"amazon-connect"` |
| `trustLevel` | `"official"` |

***

### amazonConnectContactCenterManifestInput

```ts
const amazonConnectContactCenterManifestInput: {
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
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create Amazon Connect task handoffs"`; `providerObjects`: \[\{ `kind`: `"amazonConnectTaskContact"`; `label`: `"Amazon Connect Task Contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Start Amazon Connect chat contacts and send participant messages"`; `providerObjects`: \[\{ `kind`: `"amazonConnectChatContact"`; `label`: `"Amazon Connect Chat Contact"`; \}, \{ `kind`: `"amazonConnectChatMessage"`; `label`: `"Amazon Connect Chat Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"transfer"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Transfer Amazon Connect task or email contacts"`; `providerObjects`: \[\{ `kind`: `"amazonConnectContactTransfer"`; `label`: `"Amazon Connect Contact Transfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read Amazon Connect instance and transcript state"`; `providerObjects`: \[\{ `kind`: `"amazonConnectInstance"`; `label`: `"Amazon Connect Instance"`; \}, \{ `kind`: `"amazonConnectChatTranscript"`; `label`: `"Amazon Connect Chat Transcript"`; \}\]; `requiresCredential`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"AWS SDK for JavaScript v3"`; `url`: `"https://github.com/aws/aws-sdk-js-v3"`; \}, \{ `label`: `"Amazon Connect API Reference"`; `url`: `"https://docs.aws.amazon.com/connect/latest/APIReference/Welcome.html"`; \}, \{ `label`: `"Amazon Connect Participant Service"`; `url`: `"https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Participant_Service.html"`; \}\]; `notes`: \[`"Runtime uses AWS SDK v3 clients for normalized Amazon Connect support workflows."`, `"Raw AWS SDK clients are exposed as escape hatches for provider-specific operations."`, `"The previous generated Connect-family full-provider clone is not carried forward as a Cognidesk-owned API; broader Connect-family SDK clients should be added only when normalized support workflows need them."`, `"Connect Health was present in the old generated model bundle, but no @aws-sdk/client-connect-health npm package was found during the 2026-06-21 SDK check."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"AWS SDK for JavaScript v3"`; `url`: `"https://github.com/aws/aws-sdk-js-v3"`; \}, \{ `label`: `"Amazon Connect API Reference"`; `url`: `"https://docs.aws.amazon.com/connect/latest/APIReference/Welcome.html"`; \}, \{ `label`: `"Amazon Connect Participant Service"`; `url`: `"https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Participant_Service.html"`; \}\] |
| `coverage.notes` | \[`"Runtime uses AWS SDK v3 clients for normalized Amazon Connect support workflows."`, `"Raw AWS SDK clients are exposed as escape hatches for provider-specific operations."`, `"The previous generated Connect-family full-provider clone is not carried forward as a Cognidesk-owned API; broader Connect-family SDK clients should be added only when normalized support workflows need them."`, `"Connect Health was present in the old generated model bundle, but no @aws-sdk/client-connect-health npm package was found during the 2026-06-21 SDK check."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `description`: `"Amazon Connect instance ID and AWS region."`; `id`: `"amazon-connect-instance"`; `label`: `"Amazon Connect instance"`; `required`: `true`; \}, \{ `description`: `"AWS SDK v3 credentials with the required Amazon Connect and Connect Participant permissions."`; `id`: `"amazon-connect-api-access"`; `label`: `"Amazon Connect API access"`; `metadata`: \{ `privilegeGuidance`: `"These are AWS IAM action names, not OAuth scopes."`; `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: \[`"connect:StartTaskContact"`, `"connect:StartChatContact"`, `"connect:TransferContact"`, `"connect:DescribeInstance"`\]; \}\] |
| <a id="property-directions"></a> `directions` | \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.amazon-connect"` |
| <a id="property-limitations"></a> `limitations` | \[`"Contact flows, queue/quick-connect routing, outbound consent, IAM policy, participant token custody, and WebSocket subscription behavior remain application/AWS configuration."`, `"Raw AWS SDK clients are available for escape-hatch use, but raw SDK breadth is not declared as normalized Cognidesk adapter coverage."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `channelCoverage`: \{ `chatContact`: `"sdk-normalized"`; `connectHealth`: `"sdk-gap"`; `participantMessages`: `"sdk-normalized"`; `participantTranscript`: `"sdk-normalized"`; `rawAwsSdkClients`: `"escape-hatch"`; `taskContact`: `"sdk-normalized"`; `taskEmailTransfer`: `"sdk-normalized"`; \}; `implementation`: \{ `sdkPackage`: `"@aws-sdk/client-connect, @aws-sdk/client-connectparticipant"`; `sdkPackages`: readonly \[`"@aws-sdk/client-connect"`, `"@aws-sdk/client-connectparticipant"`\]; `strategy`: `"official-sdk"`; \}; \} |
| `metadata.channelCoverage` | \{ `chatContact`: `"sdk-normalized"`; `connectHealth`: `"sdk-gap"`; `participantMessages`: `"sdk-normalized"`; `participantTranscript`: `"sdk-normalized"`; `rawAwsSdkClients`: `"escape-hatch"`; `taskContact`: `"sdk-normalized"`; `taskEmailTransfer`: `"sdk-normalized"`; \} |
| `metadata.channelCoverage.chatContact` | `"sdk-normalized"` |
| `metadata.channelCoverage.connectHealth` | `"sdk-gap"` |
| `metadata.channelCoverage.participantMessages` | `"sdk-normalized"` |
| `metadata.channelCoverage.participantTranscript` | `"sdk-normalized"` |
| `metadata.channelCoverage.rawAwsSdkClients` | `"escape-hatch"` |
| `metadata.channelCoverage.taskContact` | `"sdk-normalized"` |
| `metadata.channelCoverage.taskEmailTransfer` | `"sdk-normalized"` |
| `metadata.implementation` | \{ `sdkPackage`: `"@aws-sdk/client-connect, @aws-sdk/client-connectparticipant"`; `sdkPackages`: readonly \[`"@aws-sdk/client-connect"`, `"@aws-sdk/client-connectparticipant"`\]; `strategy`: `"official-sdk"`; \} |
| `metadata.implementation.sdkPackage` | `"@aws-sdk/client-connect, @aws-sdk/client-connectparticipant"` |
| `metadata.implementation.sdkPackages` | readonly \[`"@aws-sdk/client-connect"`, `"@aws-sdk/client-connectparticipant"`\] |
| `metadata.implementation.strategy` | `"official-sdk"` |
| <a id="property-name"></a> `name` | `"Amazon Connect"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"contactTransfer"`; `providerOperation`: `"StartTaskContact"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.task.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"contact-center-task"`; `providerOperation`: `"StartTaskContact"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"contact"`; `providerOperation`: `"StartChatContact"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.transfer.request"`; `capability`: `"transfer"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"contactTransfer"`; `providerOperation`: `"TransferContact"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.transcript.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"contactTranscript"`; `providerOperation`: `"GetTranscript"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-amazon-connect"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Task, chat, transfer, and transcript operations can include customer identifiers, routing attributes, messages, summaries, and participant tokens."`, `"AWS credentials remain inside the SDK user's runtime configuration."`\] |
| <a id="property-provider"></a> `provider` | `"amazon-connect"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
