# integrations/contact-center/genesys-cloud/dist

## Interfaces

### GenesysCloudContactCenterClient

#### Properties

##### sdkClient

```ts
sdkClient: GenesysCloudSdkClient;
```

#### Methods

##### createCallback()

```ts
createCallback(input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GenesysCloudCreateCallbackInput`](#genesyscloudcreatecallbackinput) |

###### Returns

`Promise`\<`unknown`\>

##### createHandoff()

```ts
createHandoff(input?): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`GenesysCloudHandoffInput`](#genesyscloudhandoffinput) |

###### Returns

`Promise`\<`unknown`\>

##### createOpenMessage()

```ts
createOpenMessage(input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GenesysCloudCreateOpenMessageInput`](#genesyscloudcreateopenmessageinput) |

###### Returns

`Promise`\<`unknown`\>

##### getConversation()

```ts
getConversation(input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GenesysCloudGetConversationInput`](#genesyscloudgetconversationinput) |

###### Returns

`Promise`\<`unknown`\>

##### listQueues()

```ts
listQueues(input?): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`GenesysCloudListQueuesInput`](#genesyscloudlistqueuesinput) |

###### Returns

`Promise`\<`unknown`\>

##### readiness()

```ts
readiness(): Promise<unknown>;
```

###### Returns

`Promise`\<`unknown`\>

***

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

##### sdk?

```ts
optional sdk?: __module;
```

##### sdkClient?

```ts
optional sdkClient?: GenesysCloudSdkClient;
```

***

### GenesysCloudCreateCallbackInput

#### Properties

##### callback

```ts
callback: unknown;
```

##### customHeaders?

```ts
optional customHeaders?: Record<string, string>;
```

***

### GenesysCloudCreateOpenMessageInput

#### Properties

##### customHeaders?

```ts
optional customHeaders?: Record<string, string>;
```

##### integrationId

```ts
integrationId: string;
```

##### message

```ts
message: unknown;
```

##### prefetchConversationId?

```ts
optional prefetchConversationId?: boolean;
```

***

### GenesysCloudGetConversationInput

#### Properties

##### conversationId

```ts
conversationId: string;
```

##### customHeaders?

```ts
optional customHeaders?: Record<string, string>;
```

***

### GenesysCloudHandoffInput

#### Properties

##### callback?

```ts
optional callback?: unknown;
```

##### customHeaders?

```ts
optional customHeaders?: Record<string, string>;
```

##### integrationId?

```ts
optional integrationId?: string;
```

##### message?

```ts
optional message?: unknown;
```

##### openMessage?

```ts
optional openMessage?: GenesysCloudCreateOpenMessageInput;
```

##### payload?

```ts
optional payload?: unknown;
```

##### prefetchConversationId?

```ts
optional prefetchConversationId?: boolean;
```

***

### GenesysCloudListQueuesInput

#### Properties

##### name?

```ts
optional name?: string;
```

##### pageNumber?

```ts
optional pageNumber?: number;
```

##### pageSize?

```ts
optional pageSize?: number;
```

***

### GenesysCloudSdkClient

#### Properties

##### apiClient

```ts
apiClient: ApiClientClass;
```

##### conversationsApi

```ts
conversationsApi: ConversationsApi;
```

##### platformClient

```ts
platformClient: __module;
```

##### routingApi

```ts
routingApi: RoutingApi;
```

##### usersApi

```ts
usersApi: UsersApi;
```

## Type Aliases

### GenesysCloudCallbackBody

```ts
type GenesysCloudCallbackBody = Parameters<GenesysCloudConversationsApi["postConversationsCallbacks"]>[0];
```

***

### GenesysCloudConversationsApi

```ts
type GenesysCloudConversationsApi = InstanceType<typeof GenesysCloudPlatformClient.ConversationsApi>;
```

***

### GenesysCloudJsonObject

```ts
type GenesysCloudJsonObject = Record<string, unknown>;
```

***

### GenesysCloudListQueuesSdkOptions

```ts
type GenesysCloudListQueuesSdkOptions = NonNullable<Parameters<GenesysCloudRoutingApi["getRoutingQueues"]>[0]>;
```

***

### GenesysCloudOpenMessageBody

```ts
type GenesysCloudOpenMessageBody = Parameters<GenesysCloudConversationsApi["postConversationsMessageInboundOpenMessage"]>[1];
```

***

### GenesysCloudOpenMessageSdkCallOptions

```ts
type GenesysCloudOpenMessageSdkCallOptions = NonNullable<Parameters<GenesysCloudConversationsApi["postConversationsMessageInboundOpenMessage"]>[2]>;
```

***

### GenesysCloudPlatformSdk

```ts
type GenesysCloudPlatformSdk = typeof GenesysCloudPlatformClient;
```

***

### GenesysCloudRoutingApi

```ts
type GenesysCloudRoutingApi = InstanceType<typeof GenesysCloudPlatformClient.RoutingApi>;
```

***

### GenesysCloudSdkApiClient

```ts
type GenesysCloudSdkApiClient = typeof GenesysCloudPlatformClient.ApiClient;
```

***

### GenesysCloudSdkCallOptions

```ts
type GenesysCloudSdkCallOptions = NonNullable<Parameters<GenesysCloudConversationsApi["postConversationsCallbacks"]>[1]>;
```

***

### GenesysCloudUsersApi

```ts
type GenesysCloudUsersApi = InstanceType<typeof GenesysCloudPlatformClient.UsersApi>;
```

## Variables

### createGenesysCloudIntegrationOperationHandlers

```ts
const createGenesysCloudIntegrationOperationHandlers: typeof createGenesysCloudContactCenterOperationHandlers;
```

## Functions

### createGenesysCloudContactCenterClient()

```ts
function createGenesysCloudContactCenterClient(options): Promise<GenesysCloudContactCenterClient>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GenesysCloudContactCenterOptions`](#genesyscloudcontactcenteroptions) |

#### Returns

`Promise`\<[`GenesysCloudContactCenterClient`](#genesyscloudcontactcenterclient)\>

***

### createGenesysCloudContactCenterIntegration()

```ts
function createGenesysCloudContactCenterIntegration(options): Promise<{
  bindingReport: OperationBindingReport;
  contactCenterClient: GenesysCloudContactCenterClient;
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
        notes: ["Runtime uses the official purecloud-platform-client-v2 SDK for normalized Genesys Cloud support workflows.", "The SDK-backed client exposes Genesys Conversations, Routing, Users, and ApiClient instances for host-level extension.", "Open Messaging webhook signature verification stays local because it protects the Cognidesk webhook boundary.", "The previous generated full Swagger clone is not carried forward as a Cognidesk-owned API surface."];
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
     limitations: ["Genesys regions, OAuth permissions, Architect flows, queues, callbacks, digital integrations, and outbound policy remain SDK-user configuration.", "SDK client injection is available for escape-hatch use, but full SDK breadth is not declared as normalized Cognidesk adapter coverage."];
     maintainers: [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           callback: "sdk-normalized";
           conversations: "sdk-normalized";
           genesysCloudSdkClient: "escape-hatch";
           messengerJavascriptSdk: "provider-supported-customer-site-not-typed";
           openMessagingInboundApi: "sdk-normalized";
           openMessagingOutboundWebhookSignature: "typed-verify-only";
           queues: "sdk-normalized";
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
        providerOperation: "ConversationsApi.postConversationsCallbacks | ConversationsApi.postConversationsMessageInboundOpenMessage";
        sideEffect: true;
      }, {
        alias: "contact-center.callback.schedule";
        capability: "schedule";
        changesWorkflow: true;
        exposesSensitiveData: true;
        providerObject: "callback";
        providerOperation: "ConversationsApi.postConversationsCallbacks";
        sideEffect: true;
      }, {
        alias: "contact-center.contact.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        providerObject: "contact";
        providerOperation: "ConversationsApi.getConversation";
      }, {
        alias: "contact-center.queue.list";
        capability: "read-provider-object";
        providerObject: "queue";
        providerOperation: "RoutingApi.getRoutingQueues";
      }, {
        alias: "genesys-cloud.openMessaging.message.create";
        capability: "contact-center.open-messaging-ingress";
        changesWorkflow: true;
        exposesSensitiveData: true;
        extension: true;
        providerObject: "genesysCloudOpenMessage";
        providerOperation: "ConversationsApi.postConversationsMessageInboundOpenMessage";
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
     contact-center.callback.schedule: (input, _context) => Promise<unknown>;
     contact-center.contact.read: (input, _context) => Promise<unknown>;
     contact-center.handoff.request: (input, _context) => Promise<unknown>;
     contact-center.queue.list: (input, _context) => Promise<unknown>;
     genesys-cloud.openMessaging.message.create: (input, _context) => Promise<unknown>;
  };
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
  sdkClient: GenesysCloudSdkClient;
  getOperationHandler: {
     contact-center.callback.schedule: (input, _context) => Promise<unknown>;
     contact-center.contact.read: (input, _context) => Promise<unknown>;
     contact-center.handoff.request: (input, _context) => Promise<unknown>;
     contact-center.queue.list: (input, _context) => Promise<unknown>;
     genesys-cloud.openMessaging.message.create: (input, _context) => Promise<unknown>;
  }[Alias];
  requireOperationHandler: {
     contact-center.callback.schedule: (input, _context) => Promise<unknown>;
     contact-center.contact.read: (input, _context) => Promise<unknown>;
     contact-center.handoff.request: (input, _context) => Promise<unknown>;
     contact-center.queue.list: (input, _context) => Promise<unknown>;
     genesys-cloud.openMessaging.message.create: (input, _context) => Promise<unknown>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     contact-center.callback.schedule: (input, _context) => Promise<unknown>;
     contact-center.contact.read: (input, _context) => Promise<unknown>;
     contact-center.handoff.request: (input, _context) => Promise<unknown>;
     contact-center.queue.list: (input, _context) => Promise<unknown>;
     genesys-cloud.openMessaging.message.create: (input, _context) => Promise<unknown>;
  }[Alias]>>>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `GenesysCloudContactCenterIntegrationOptions` |

#### Returns

`Promise`\<\{
  `bindingReport`: [`OperationBindingReport`](../../../packages/integration-kit/dist.md#operationbindingreport);
  `contactCenterClient`: [`GenesysCloudContactCenterClient`](#genesyscloudcontactcenterclient);
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
        `notes`: \[`"Runtime uses the official purecloud-platform-client-v2 SDK for normalized Genesys Cloud support workflows."`, `"The SDK-backed client exposes Genesys Conversations, Routing, Users, and ApiClient instances for host-level extension."`, `"Open Messaging webhook signature verification stays local because it protects the Cognidesk webhook boundary."`, `"The previous generated full Swagger clone is not carried forward as a Cognidesk-owned API surface."`\];
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
     `limitations`: \[`"Genesys regions, OAuth permissions, Architect flows, queues, callbacks, digital integrations, and outbound policy remain SDK-user configuration."`, `"SDK client injection is available for escape-hatch use, but full SDK breadth is not declared as normalized Cognidesk adapter coverage."`\];
     `maintainers`: \[\{
        `name`: `"Cognidesk"`;
        `type`: `"official"`;
     \}\];
     `metadata`: \{
        `channelCoverage`: \{
           `callback`: `"sdk-normalized"`;
           `conversations`: `"sdk-normalized"`;
           `genesysCloudSdkClient`: `"escape-hatch"`;
           `messengerJavascriptSdk`: `"provider-supported-customer-site-not-typed"`;
           `openMessagingInboundApi`: `"sdk-normalized"`;
           `openMessagingOutboundWebhookSignature`: `"typed-verify-only"`;
           `queues`: `"sdk-normalized"`;
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
        `providerOperation`: "ConversationsApi.postConversationsCallbacks \| ConversationsApi.postConversationsMessageInboundOpenMessage";
        `sideEffect`: `true`;
      \}, \{
        `alias`: `"contact-center.callback.schedule"`;
        `capability`: `"schedule"`;
        `changesWorkflow`: `true`;
        `exposesSensitiveData`: `true`;
        `providerObject`: `"callback"`;
        `providerOperation`: `"ConversationsApi.postConversationsCallbacks"`;
        `sideEffect`: `true`;
      \}, \{
        `alias`: `"contact-center.contact.read"`;
        `capability`: `"read-provider-object"`;
        `exposesSensitiveData`: `true`;
        `providerObject`: `"contact"`;
        `providerOperation`: `"ConversationsApi.getConversation"`;
      \}, \{
        `alias`: `"contact-center.queue.list"`;
        `capability`: `"read-provider-object"`;
        `providerObject`: `"queue"`;
        `providerOperation`: `"RoutingApi.getRoutingQueues"`;
      \}, \{
        `alias`: `"genesys-cloud.openMessaging.message.create"`;
        `capability`: `"contact-center.open-messaging-ingress"`;
        `changesWorkflow`: `true`;
        `exposesSensitiveData`: `true`;
        `extension`: `true`;
        `providerObject`: `"genesysCloudOpenMessage"`;
        `providerOperation`: `"ConversationsApi.postConversationsMessageInboundOpenMessage"`;
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
     `contact-center.callback.schedule`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `contact-center.contact.read`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `contact-center.handoff.request`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `contact-center.queue.list`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `genesys-cloud.openMessaging.message.create`: (`input`, `_context`) => `Promise`\<`unknown`\>;
  \};
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
  `sdkClient`: [`GenesysCloudSdkClient`](#genesyscloudsdkclient);
  `getOperationHandler`: \{
     `contact-center.callback.schedule`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `contact-center.contact.read`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `contact-center.handoff.request`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `contact-center.queue.list`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `genesys-cloud.openMessaging.message.create`: (`input`, `_context`) => `Promise`\<`unknown`\>;
  \}\[`Alias`\];
  `requireOperationHandler`: \{
     `contact-center.callback.schedule`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `contact-center.contact.read`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `contact-center.handoff.request`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `contact-center.queue.list`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `genesys-cloud.openMessaging.message.create`: (`input`, `_context`) => `Promise`\<`unknown`\>;
  \}\[`Alias`\];
  `run`: `Promise`\<`Awaited`\<`ReturnType`\<\{
     `contact-center.callback.schedule`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `contact-center.contact.read`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `contact-center.handoff.request`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `contact-center.queue.list`: (`input`, `_context`) => `Promise`\<`unknown`\>;
     `genesys-cloud.openMessaging.message.create`: (`input`, `_context`) => `Promise`\<`unknown`\>;
  \}\[`Alias`\]\>\>\>;
\}\>

***

### createGenesysCloudContactCenterOperationHandlers()

```ts
function createGenesysCloudContactCenterOperationHandlers(options): Promise<{
  contact-center.callback.schedule: (input, _context) => Promise<unknown>;
  contact-center.contact.read: (input, _context) => Promise<unknown>;
  contact-center.handoff.request: (input, _context) => Promise<unknown>;
  contact-center.queue.list: (input, _context) => Promise<unknown>;
  genesys-cloud.openMessaging.message.create: (input, _context) => Promise<unknown>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `GenesysCloudContactCenterIntegrationOptions` |

#### Returns

`Promise`\<\{
  `contact-center.callback.schedule`: (`input`, `_context`) => `Promise`\<`unknown`\>;
  `contact-center.contact.read`: (`input`, `_context`) => `Promise`\<`unknown`\>;
  `contact-center.handoff.request`: (`input`, `_context`) => `Promise`\<`unknown`\>;
  `contact-center.queue.list`: (`input`, `_context`) => `Promise`\<`unknown`\>;
  `genesys-cloud.openMessaging.message.create`: (`input`, `_context`) => `Promise`\<`unknown`\>;
\}\>

***

### createGenesysCloudSdkClient()

```ts
function createGenesysCloudSdkClient(options): Promise<GenesysCloudSdkClient>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `Pick`\<[`GenesysCloudContactCenterOptions`](#genesyscloudcontactcenteroptions), `"apiBaseUrl"` \| `"accessToken"` \| `"sdk"`\> |

#### Returns

`Promise`\<[`GenesysCloudSdkClient`](#genesyscloudsdkclient)\>

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
| `input` | `Pick`\<[`GenesysCloudContactCenterOptions`](#genesyscloudcontactcenteroptions), `"accessToken"` \| `"apiBaseUrl"` \| `"sdkClient"`\> & \{ `contactCenterClient?`: [`GenesysCloudContactCenterClient`](#genesyscloudcontactcenterclient); \} |

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

***

### genesysCloudContactCenterManifestInput

Re-exports [genesysCloudContactCenterManifestInput](dist/manifest.md#genesyscloudcontactcentermanifestinput)
