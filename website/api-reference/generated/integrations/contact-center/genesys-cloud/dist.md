# integrations/contact-center/genesys-cloud/dist

## Interfaces

### GenesysCloudContactCenterOptions

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiBaseUrl

```ts
apiBaseUrl: string;
```

##### defaultHandoffPath?

```ts
optional defaultHandoffPath?: string;
```

##### rawClient?

```ts
optional rawClient?: GenesysCloudRawClient;
```

##### readinessPath?

```ts
optional readinessPath?: string;
```

***

### GenesysCloudRawClient

#### Properties

##### apiClient

```ts
apiClient: GenesysCloudSdkApiClient;
```

#### Methods

##### request()

```ts
request<T>(
   method,
   path,
input?): Promise<T>;
```

###### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `method` | [`GenesysCloudHttpMethod`](#genesyscloudhttpmethod) |
| `path` | `string` |
| `input?` | [`GenesysCloudRequestInput`](#genesyscloudrequestinput) |

###### Returns

`Promise`\<`T`\>

***

### GenesysCloudRequestInput

#### Properties

##### body?

```ts
optional body?: unknown;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### query?

```ts
optional query?: Record<string, string | number | boolean | undefined>;
```

***

### GenesysCloudSdkApiClient

#### Properties

##### callApi?

```ts
optional callApi?: (...args) => Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `unknown`[] |

###### Returns

`Promise`\<`unknown`\>

##### setAccessToken?

```ts
optional setAccessToken?: (token) => void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `token` | `string` |

###### Returns

`void`

##### setEnvironment?

```ts
optional setEnvironment?: (environment) => void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `environment` | `string` |

###### Returns

`void`

## Type Aliases

### GenesysCloudHttpMethod

```ts
type GenesysCloudHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
```

***

### GenesysCloudJsonObject

```ts
type GenesysCloudJsonObject = Record<string, unknown>;
```

## Functions

### createGenesysCloudContactCenterClient()

```ts
function createGenesysCloudContactCenterClient(options): Promise<{
  rawClient: GenesysCloudRawClient;
  createCallback: Promise<unknown>;
  createHandoff: Promise<unknown>;
  createOpenMessage: Promise<unknown>;
  getConversation: Promise<unknown>;
  listQueues: Promise<unknown>;
  readiness: Promise<unknown>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GenesysCloudContactCenterOptions`](#genesyscloudcontactcenteroptions) |

#### Returns

`Promise`\<\{
  `rawClient`: [`GenesysCloudRawClient`](#genesyscloudrawclient);
  `createCallback`: `Promise`\<`unknown`\>;
  `createHandoff`: `Promise`\<`unknown`\>;
  `createOpenMessage`: `Promise`\<`unknown`\>;
  `getConversation`: `Promise`\<`unknown`\>;
  `listQueues`: `Promise`\<`unknown`\>;
  `readiness`: `Promise`\<`unknown`\>;
\}\>

***

### createGenesysCloudContactCenterIntegration()

```ts
function createGenesysCloudContactCenterIntegration(options): Promise<{
  bindingReport: OperationBindingReport;
  credentialStatuses: () => {
     message: string;
     providerPackageId: "contact-center.genesys-cloud";
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
        label: "Create Genesys Cloud callback or Open Messaging ingress";
        providerObjects: [{
           kind: "genesysCloudCallback";
           label: "Genesys Cloud Callback";
         }, {
           kind: "genesysCloudOpenMessage";
           label: "Genesys Cloud Open Messaging inbound message/event/receipt";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        capability: "contact-center.open-messaging-ingress";
        changesWorkflow: true;
        exposesSensitiveData: true;
        extension: true;
        label: "Deliver Genesys Cloud Open Messaging ingress";
        providerObjects: [{
           kind: "genesysCloudOpenMessage";
           label: "Genesys Cloud Open Messaging inbound message/event/receipt";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        capability: "schedule";
        changesWorkflow: true;
        exposesSensitiveData: true;
        label: "Create Genesys Cloud callbacks";
        providerObjects: [{
           kind: "genesysCloudCallback";
           label: "Genesys Cloud Callback";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        capability: "read-provider-object";
        exposesSensitiveData: true;
        label: "Read Genesys Cloud conversations and queues";
        providerObjects: [{
           kind: "genesysCloudConversation";
           label: "Genesys Cloud Conversation";
         }, {
           kind: "genesysCloudQueue";
           label: "Genesys Cloud Queue";
        }];
        requiresCredential: true;
     }];
     category: "contact-center";
     channelAudiences: ["customer-facing", "internal-support", "mixed"];
     coverage: {
        evidence: [{
           label: "Genesys Cloud JavaScript SDK";
           url: "https://github.com/MyPureCloud/platform-client-sdk-javascript";
         }, {
           label: "Genesys Cloud Developer Center";
           url: "https://developer.genesys.cloud/";
         }, {
           label: "Genesys Cloud Open Messaging";
           url: "https://help.genesys.cloud/articles/configure-an-open-messaging-integration/";
        }];
        notes: ["Runtime uses the official purecloud-platform-client-v2 SDK for normalized Genesys Cloud support workflows.", "The raw Genesys SDK ApiClient is exposed as an escape hatch for provider-specific operations.", "Open Messaging webhook signature verification stays local because it protects the Cognidesk webhook boundary.", "The previous generated full Swagger clone is not carried forward as a Cognidesk-owned API surface."];
        scope: "support-workflow-subset";
     };
     credentialRequirements: [{
        id: "genesys-cloud-region";
        label: "Genesys Cloud API region/base URL";
        required: true;
      }, {
        id: "genesys-cloud-api-access";
        label: "Genesys Cloud OAuth access";
        metadata: {
           privilegeGuidance: "Genesys Cloud permissions are configured through OAuth clients and org roles.";
           scopeKind: "provider-permission-labels";
        };
        required: true;
        scopes: ["conversation:callback:create", "routing:queue:view", "user:me:view"];
      }, {
        id: "genesys-cloud-open-messaging";
        label: "Genesys Cloud Open Messaging integration and webhook secret";
        metadata: {
           scopeKind: "provider-permission-labels";
        };
        required: false;
        scopes: ["Messaging > Integration > All"];
      }, {
        id: "genesys-cloud-routing";
        label: "Genesys Cloud queue, callback, or digital messaging routing configuration";
        required: false;
     }];
     directions: ["inbound-only", "outbound-only", "bidirectional"];
     id: "contact-center.genesys-cloud";
     limitations: ["Genesys regions, OAuth permissions, Architect flows, queues, callbacks, digital integrations, and outbound policy remain SDK-user configuration.", "Raw SDK access is available for escape-hatch use, but raw SDK breadth is not declared as normalized Cognidesk adapter coverage."];
     maintainers: [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           callback: "sdk-normalized";
           conversations: "sdk-normalized";
           messengerJavascriptSdk: "provider-supported-customer-site-not-typed";
           openMessagingInboundApi: "sdk-normalized";
           openMessagingOutboundWebhookSignature: "typed-verify-only";
           queues: "sdk-normalized";
           rawGenesysCloudSdkClient: "escape-hatch";
        };
        implementation: {
           sdkPackage: "purecloud-platform-client-v2";
           sdkPackages: readonly ["purecloud-platform-client-v2"];
           strategy: "official-sdk";
        };
     };
     name: "Genesys Cloud CX";
     operations: [{
        alias: "contact-center.handoff.request";
        capability: "handoff";
        changesWorkflow: true;
        exposesSensitiveData: true;
        providerObject: "contactTransfer";
        providerOperation: "sdk-configured-request";
        sideEffect: true;
      }, {
        alias: "contact-center.callback.schedule";
        capability: "schedule";
        changesWorkflow: true;
        exposesSensitiveData: true;
        providerObject: "callback";
        providerOperation: "POST /api/v2/conversations/callbacks";
        sideEffect: true;
      }, {
        alias: "contact-center.contact.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        providerObject: "contact";
        providerOperation: "GET /api/v2/conversations/{conversationId}";
      }, {
        alias: "contact-center.queue.list";
        capability: "read-provider-object";
        providerObject: "queue";
        providerOperation: "GET /api/v2/routing/queues";
      }, {
        alias: "genesys-cloud.openMessaging.message.create";
        capability: "contact-center.open-messaging-ingress";
        changesWorkflow: true;
        exposesSensitiveData: true;
        extension: true;
        providerObject: "genesysCloudOpenMessage";
        providerOperation: "POST /api/v2/conversations/messages/{integrationId}/inbound/open/message";
        sideEffect: true;
     }];
     packageName: "@cognidesk/integration-contact-center-genesys-cloud";
     privacyNotes: ["Callbacks and Open Messaging ingress can include customer phone numbers, identity, channel metadata, message content, and routing data.", "OAuth tokens stay inside the SDK user's runtime configuration."];
     provider: "genesys-cloud";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: (
     | "contact-center.contact.read"
     | "contact-center.queue.list"
     | "contact-center.handoff.request"
     | "contact-center.callback.schedule"
    | "genesys-cloud.openMessaging.message.create")[];
  operations: {
     contact-center.callback.schedule: (input) => Promise<unknown>;
     contact-center.contact.read: (input) => Promise<unknown>;
     contact-center.handoff.request: (input) => Promise<unknown>;
     contact-center.queue.list: (input?) => Promise<unknown>;
     genesys-cloud.openMessaging.message.create: (input) => Promise<unknown>;
  };
  rawClient: GenesysCloudRawClient;
  readiness: () => Promise<
     | {
     blockers?: never;
     checkSource: string;
     live: boolean;
     providerPackageId: "contact-center.genesys-cloud";
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
     providerPackageId: "contact-center.genesys-cloud";
     status: string;
  }>;
  getOperationHandler: {
     contact-center.callback.schedule: (input) => Promise<unknown>;
     contact-center.contact.read: (input) => Promise<unknown>;
     contact-center.handoff.request: (input) => Promise<unknown>;
     contact-center.queue.list: (input?) => Promise<unknown>;
     genesys-cloud.openMessaging.message.create: (input) => Promise<unknown>;
  }[Alias];
  requireOperationHandler: {
     contact-center.callback.schedule: (input) => Promise<unknown>;
     contact-center.contact.read: (input) => Promise<unknown>;
     contact-center.handoff.request: (input) => Promise<unknown>;
     contact-center.queue.list: (input?) => Promise<unknown>;
     genesys-cloud.openMessaging.message.create: (input) => Promise<unknown>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     contact-center.callback.schedule: (input) => Promise<unknown>;
     contact-center.contact.read: (input) => Promise<unknown>;
     contact-center.handoff.request: (input) => Promise<unknown>;
     contact-center.queue.list: (input?) => Promise<unknown>;
     genesys-cloud.openMessaging.message.create: (input) => Promise<unknown>;
  }[Alias]>>>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GenesysCloudContactCenterOptions`](#genesyscloudcontactcenteroptions) |

#### Returns

`Promise`\<\{
  `bindingReport`: [`OperationBindingReport`](../../../packages/integration-kit/dist.md#operationbindingreport);
  `credentialStatuses`: () => \{
     `message`: `string`;
     `providerPackageId`: `"contact-center.genesys-cloud"`;
     `requirementId`: `string`;
     `state`: `string`;
  \}[];
  `manifest`: \{
     `capabilities`: \{
        `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
        `capability`: `string`;
        `changesWorkflow?`: `boolean`;
        `description?`: `string`;
        `exposesSensitiveData?`: `boolean`;
        `extension?`: `boolean`;
        `label?`: `string`;
        `metadata?`: `Record`\<`string`, `unknown`\>;
        `providerObjects?`: \{
           `description?`: `string`;
           `kind`: `string`;
           `label?`: `string`;
           `metadata?`: `Record`\<`string`, `unknown`\>;
           `schemaName?`: `string`;
        \}[];
        `requiresCredential?`: `boolean`;
        `sideEffect?`: `boolean`;
     \}[];
     `category`: `string`;
     `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `coverage`: \{
        `evidence`: \{
           `label`: `string`;
           `url?`: `string`;
        \}[];
        `notes`: `string`[];
        `scope`:   \| `"support-workflow-subset"`
           \| `"provider-api-subset"`
           \| `"connector-required"`
           \| `"local-protocol"`
           \| `"full-provider-api"`;
     \};
     `credentialRequirements`: \{
        `description?`: `string`;
        `id`: `string`;
        `label?`: `string`;
        `metadata?`: `Record`\<`string`, `unknown`\>;
        `required`: `boolean`;
        `scopes`: `string`[];
     \}[];
     `directions`: (
        \| `"receive-only"`
        \| `"send-only"`
        \| `"inbound-only"`
        \| `"outbound-only"`
       \| `"bidirectional"`)[];
     `id`: `string`;
     `limitations`: `string`[];
     `maintainers`: \{
        `name`: `string`;
        `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`;
        `url?`: `string`;
     \}[];
     `metadata?`: `Record`\<`string`, `unknown`\>;
     `name`: `string`;
     `operations`: \{
        `alias`: `string`;
        `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`;
        `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
        `capability`: `string`;
        `changesWorkflow?`: `boolean`;
        `description?`: `string`;
        `exposesSensitiveData?`: `boolean`;
        `extension`: `boolean`;
        `externallyVisible?`: `boolean`;
        `inputSchema?`: `unknown`;
        `inputSchemaName?`: `string`;
        `inputSchemaRef?`: `string`;
        `label?`: `string`;
        `metadata?`: `Record`\<`string`, `unknown`\>;
        `outputSchema?`: `unknown`;
        `outputSchemaName?`: `string`;
        `outputSchemaRef?`: `string`;
        `providerObject?`: `string`;
        `providerObjects?`: \{
           `description?`: `string`;
           `kind`: `string`;
           `label?`: `string`;
           `metadata?`: `Record`\<`string`, `unknown`\>;
           `schemaName?`: `string`;
        \}[];
        `providerOperation?`: `string`;
        `requiredPolicyIds?`: `string`[];
        `requiresApproval?`: `boolean`;
        `requiresCredential?`: `boolean`;
        `sideEffect?`: `boolean`;
     \}[];
     `packageName`: `string`;
     `privacyNotes`: `string`[];
     `provider`: `string`;
     `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`;
   \} & \{
     `capabilities`: \[\{
        `capability`: `"handoff"`;
        `changesWorkflow`: `true`;
        `exposesSensitiveData`: `true`;
        `label`: `"Create Genesys Cloud callback or Open Messaging ingress"`;
        `providerObjects`: \[\{
           `kind`: `"genesysCloudCallback"`;
           `label`: `"Genesys Cloud Callback"`;
         \}, \{
           `kind`: `"genesysCloudOpenMessage"`;
           `label`: `"Genesys Cloud Open Messaging inbound message/event/receipt"`;
        \}\];
        `requiresCredential`: `true`;
        `sideEffect`: `true`;
      \}, \{
        `capability`: `"contact-center.open-messaging-ingress"`;
        `changesWorkflow`: `true`;
        `exposesSensitiveData`: `true`;
        `extension`: `true`;
        `label`: `"Deliver Genesys Cloud Open Messaging ingress"`;
        `providerObjects`: \[\{
           `kind`: `"genesysCloudOpenMessage"`;
           `label`: `"Genesys Cloud Open Messaging inbound message/event/receipt"`;
        \}\];
        `requiresCredential`: `true`;
        `sideEffect`: `true`;
      \}, \{
        `capability`: `"schedule"`;
        `changesWorkflow`: `true`;
        `exposesSensitiveData`: `true`;
        `label`: `"Create Genesys Cloud callbacks"`;
        `providerObjects`: \[\{
           `kind`: `"genesysCloudCallback"`;
           `label`: `"Genesys Cloud Callback"`;
        \}\];
        `requiresCredential`: `true`;
        `sideEffect`: `true`;
      \}, \{
        `capability`: `"read-provider-object"`;
        `exposesSensitiveData`: `true`;
        `label`: `"Read Genesys Cloud conversations and queues"`;
        `providerObjects`: \[\{
           `kind`: `"genesysCloudConversation"`;
           `label`: `"Genesys Cloud Conversation"`;
         \}, \{
           `kind`: `"genesysCloudQueue"`;
           `label`: `"Genesys Cloud Queue"`;
        \}\];
        `requiresCredential`: `true`;
     \}\];
     `category`: `"contact-center"`;
     `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `coverage`: \{
        `evidence`: \[\{
           `label`: `"Genesys Cloud JavaScript SDK"`;
           `url`: `"https://github.com/MyPureCloud/platform-client-sdk-javascript"`;
         \}, \{
           `label`: `"Genesys Cloud Developer Center"`;
           `url`: `"https://developer.genesys.cloud/"`;
         \}, \{
           `label`: `"Genesys Cloud Open Messaging"`;
           `url`: `"https://help.genesys.cloud/articles/configure-an-open-messaging-integration/"`;
        \}\];
        `notes`: \[`"Runtime uses the official purecloud-platform-client-v2 SDK for normalized Genesys Cloud support workflows."`, `"The raw Genesys SDK ApiClient is exposed as an escape hatch for provider-specific operations."`, `"Open Messaging webhook signature verification stays local because it protects the Cognidesk webhook boundary."`, `"The previous generated full Swagger clone is not carried forward as a Cognidesk-owned API surface."`\];
        `scope`: `"support-workflow-subset"`;
     \};
     `credentialRequirements`: \[\{
        `id`: `"genesys-cloud-region"`;
        `label`: `"Genesys Cloud API region/base URL"`;
        `required`: `true`;
      \}, \{
        `id`: `"genesys-cloud-api-access"`;
        `label`: `"Genesys Cloud OAuth access"`;
        `metadata`: \{
           `privilegeGuidance`: `"Genesys Cloud permissions are configured through OAuth clients and org roles."`;
           `scopeKind`: `"provider-permission-labels"`;
        \};
        `required`: `true`;
        `scopes`: \[`"conversation:callback:create"`, `"routing:queue:view"`, `"user:me:view"`\];
      \}, \{
        `id`: `"genesys-cloud-open-messaging"`;
        `label`: `"Genesys Cloud Open Messaging integration and webhook secret"`;
        `metadata`: \{
           `scopeKind`: `"provider-permission-labels"`;
        \};
        `required`: `false`;
        `scopes`: \[`"Messaging > Integration > All"`\];
      \}, \{
        `id`: `"genesys-cloud-routing"`;
        `label`: `"Genesys Cloud queue, callback, or digital messaging routing configuration"`;
        `required`: `false`;
     \}\];
     `directions`: \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
     `id`: `"contact-center.genesys-cloud"`;
     `limitations`: \[`"Genesys regions, OAuth permissions, Architect flows, queues, callbacks, digital integrations, and outbound policy remain SDK-user configuration."`, `"Raw SDK access is available for escape-hatch use, but raw SDK breadth is not declared as normalized Cognidesk adapter coverage."`\];
     `maintainers`: \[\{
        `name`: `"Cognidesk"`;
        `type`: `"official"`;
     \}\];
     `metadata`: \{
        `channelCoverage`: \{
           `callback`: `"sdk-normalized"`;
           `conversations`: `"sdk-normalized"`;
           `messengerJavascriptSdk`: `"provider-supported-customer-site-not-typed"`;
           `openMessagingInboundApi`: `"sdk-normalized"`;
           `openMessagingOutboundWebhookSignature`: `"typed-verify-only"`;
           `queues`: `"sdk-normalized"`;
           `rawGenesysCloudSdkClient`: `"escape-hatch"`;
        \};
        `implementation`: \{
           `sdkPackage`: `"purecloud-platform-client-v2"`;
           `sdkPackages`: readonly \[`"purecloud-platform-client-v2"`\];
           `strategy`: `"official-sdk"`;
        \};
     \};
     `name`: `"Genesys Cloud CX"`;
     `operations`: \[\{
        `alias`: `"contact-center.handoff.request"`;
        `capability`: `"handoff"`;
        `changesWorkflow`: `true`;
        `exposesSensitiveData`: `true`;
        `providerObject`: `"contactTransfer"`;
        `providerOperation`: `"sdk-configured-request"`;
        `sideEffect`: `true`;
      \}, \{
        `alias`: `"contact-center.callback.schedule"`;
        `capability`: `"schedule"`;
        `changesWorkflow`: `true`;
        `exposesSensitiveData`: `true`;
        `providerObject`: `"callback"`;
        `providerOperation`: `"POST /api/v2/conversations/callbacks"`;
        `sideEffect`: `true`;
      \}, \{
        `alias`: `"contact-center.contact.read"`;
        `capability`: `"read-provider-object"`;
        `exposesSensitiveData`: `true`;
        `providerObject`: `"contact"`;
        `providerOperation`: `"GET /api/v2/conversations/{conversationId}"`;
      \}, \{
        `alias`: `"contact-center.queue.list"`;
        `capability`: `"read-provider-object"`;
        `providerObject`: `"queue"`;
        `providerOperation`: `"GET /api/v2/routing/queues"`;
      \}, \{
        `alias`: `"genesys-cloud.openMessaging.message.create"`;
        `capability`: `"contact-center.open-messaging-ingress"`;
        `changesWorkflow`: `true`;
        `exposesSensitiveData`: `true`;
        `extension`: `true`;
        `providerObject`: `"genesysCloudOpenMessage"`;
        `providerOperation`: `"POST /api/v2/conversations/messages/{integrationId}/inbound/open/message"`;
        `sideEffect`: `true`;
     \}\];
     `packageName`: `"@cognidesk/integration-contact-center-genesys-cloud"`;
     `privacyNotes`: \[`"Callbacks and Open Messaging ingress can include customer phone numbers, identity, channel metadata, message content, and routing data."`, `"OAuth tokens stay inside the SDK user's runtime configuration."`\];
     `provider`: `"genesys-cloud"`;
     `trustLevel`: `"official"`;
  \};
  `metadata?`: `Record`\<`string`, `unknown`\>;
  `operationAliases`: (
     \| `"contact-center.contact.read"`
     \| `"contact-center.queue.list"`
     \| `"contact-center.handoff.request"`
     \| `"contact-center.callback.schedule"`
    \| `"genesys-cloud.openMessaging.message.create"`)[];
  `operations`: \{
     `contact-center.callback.schedule`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.contact.read`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.handoff.request`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.queue.list`: (`input?`) => `Promise`\<`unknown`\>;
     `genesys-cloud.openMessaging.message.create`: (`input`) => `Promise`\<`unknown`\>;
  \};
  `rawClient`: [`GenesysCloudRawClient`](#genesyscloudrawclient);
  `readiness`: () => `Promise`\<
     \| \{
     `blockers?`: `never`;
     `checkSource`: `string`;
     `live`: `boolean`;
     `providerPackageId`: `"contact-center.genesys-cloud"`;
     `status`: `string`;
   \}
     \| \{
     `blockers`: \{
        `code`: `string`;
        `kind`: `string`;
        `message`: `string`;
     \}[];
     `checkSource`: `string`;
     `live`: `boolean`;
     `providerPackageId`: `"contact-center.genesys-cloud"`;
     `status`: `string`;
  \}\>;
  `getOperationHandler`: \{
     `contact-center.callback.schedule`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.contact.read`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.handoff.request`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.queue.list`: (`input?`) => `Promise`\<`unknown`\>;
     `genesys-cloud.openMessaging.message.create`: (`input`) => `Promise`\<`unknown`\>;
  \}\[`Alias`\];
  `requireOperationHandler`: \{
     `contact-center.callback.schedule`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.contact.read`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.handoff.request`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.queue.list`: (`input?`) => `Promise`\<`unknown`\>;
     `genesys-cloud.openMessaging.message.create`: (`input`) => `Promise`\<`unknown`\>;
  \}\[`Alias`\];
  `run`: `Promise`\<`Awaited`\<`ReturnType`\<\{
     `contact-center.callback.schedule`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.contact.read`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.handoff.request`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.queue.list`: (`input?`) => `Promise`\<`unknown`\>;
     `genesys-cloud.openMessaging.message.create`: (`input`) => `Promise`\<`unknown`\>;
  \}\[`Alias`\]\>\>\>;
\}\>

***

### genesysCloudContactCenterCredentialStatuses()

```ts
function genesysCloudContactCenterCredentialStatuses(input): {
  message: string;
  providerPackageId: "contact-center.genesys-cloud";
  requirementId: string;
  state: string;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Pick`\<[`GenesysCloudContactCenterOptions`](#genesyscloudcontactcenteroptions), `"apiBaseUrl"` \| `"accessToken"` \| `"defaultHandoffPath"`\> |

#### Returns

\{
  `message`: `string`;
  `providerPackageId`: `"contact-center.genesys-cloud"`;
  `requirementId`: `string`;
  `state`: `string`;
\}[]

***

### verifyGenesysCloudOpenMessagingWebhookSignature()

```ts
function verifyGenesysCloudOpenMessagingWebhookSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `body`: `string` \| `Buffer`\<`ArrayBufferLike`\>; `secret`: `string`; `signature`: `string`; \} |
| `input.body` | `string` \| `Buffer`\<`ArrayBufferLike`\> |
| `input.secret` | `string` |
| `input.signature` | `string` |

#### Returns

`boolean`

## References

### genesysCloudContactCenterManifest

Re-exports [genesysCloudContactCenterManifest](dist/manifest.md#genesyscloudcontactcentermanifest)
