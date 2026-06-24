# integrations/contact-center/ringcentral/dist

## Interfaces

### RingCentralContactCenterOptions

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### clientId?

```ts
optional clientId?: string;
```

##### clientSecret?

```ts
optional clientSecret?: string;
```

##### defaultHandoffPath?

```ts
optional defaultHandoffPath?: string;
```

##### rawClient?

```ts
optional rawClient?: RingCentralRawClient;
```

##### readinessPath?

```ts
optional readinessPath?: string;
```

##### server

```ts
server: string;
```

***

### RingCentralPlatformClient

#### Properties

##### auth?

```ts
optional auth?: () => {
  setData?: (data) => unknown;
};
```

###### Returns

```ts
{
  setData?: (data) => unknown;
}
```

| Name | Type |
| ------ | ------ |
| `setData()?` | (`data`) => `unknown` |

##### delete?

```ts
optional delete?: (path, query?) => Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `query?` | `unknown` |

###### Returns

`Promise`\<`unknown`\>

##### get?

```ts
optional get?: (path, query?) => Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `query?` | `unknown` |

###### Returns

`Promise`\<`unknown`\>

##### patch?

```ts
optional patch?: (path, body?, query?) => Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `body?` | `unknown` |
| `query?` | `unknown` |

###### Returns

`Promise`\<`unknown`\>

##### post?

```ts
optional post?: (path, body?, query?) => Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `body?` | `unknown` |
| `query?` | `unknown` |

###### Returns

`Promise`\<`unknown`\>

##### put?

```ts
optional put?: (path, body?, query?) => Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `path` | `string` |
| `body?` | `unknown` |
| `query?` | `unknown` |

###### Returns

`Promise`\<`unknown`\>

***

### RingCentralRawClient

#### Properties

##### platform

```ts
platform: RingCentralPlatformClient;
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
| `method` | [`RingCentralHttpMethod`](#ringcentralhttpmethod) |
| `path` | `string` |
| `input?` | [`RingCentralRequestInput`](#ringcentralrequestinput) |

###### Returns

`Promise`\<`T`\>

***

### RingCentralRequestInput

#### Properties

##### body?

```ts
optional body?: unknown;
```

##### query?

```ts
optional query?: Record<string, string | number | boolean | undefined>;
```

## Type Aliases

### RingCentralHttpMethod

```ts
type RingCentralHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
```

***

### RingCentralJsonObject

```ts
type RingCentralJsonObject = Record<string, unknown>;
```

## Functions

### createRingCentralContactCenterClient()

```ts
function createRingCentralContactCenterClient(options): Promise<{
  rawClient: RingCentralRawClient;
  request: <T>(method, path, input?) => Promise<T>;
  createHandoff: Promise<unknown>;
  readiness: Promise<unknown>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RingCentralContactCenterOptions`](#ringcentralcontactcenteroptions) |

#### Returns

`Promise`\<\{
  `rawClient`: [`RingCentralRawClient`](#ringcentralrawclient);
  `request`: \<`T`\>(`method`, `path`, `input?`) => `Promise`\<`T`\>;
  `createHandoff`: `Promise`\<`unknown`\>;
  `readiness`: `Promise`\<`unknown`\>;
\}\>

***

### createRingCentralContactCenterIntegration()

```ts
function createRingCentralContactCenterIntegration(options): Promise<{
  bindingReport: OperationBindingReport;
  credentialStatuses: () => {
     message: string;
     providerPackageId: "contact-center.ringcentral";
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
        label: "Create RingCX handoff";
        providerObjects: [{
           kind: "ringcxHandoff";
           label: "RingCX Handoff";
        }];
        requiresCredential: true;
        sideEffect: true;
      }, {
        capability: "read-provider-object";
        exposesSensitiveData: true;
        label: "Check RingCentral readiness";
        providerObjects: [{
           kind: "ringcentralReadiness";
           label: "RingCentral Readiness";
        }];
        requiresCredential: true;
     }];
     category: "contact-center";
     channelAudiences: ["customer-facing", "internal-support", "mixed"];
     coverage: {
        evidence: [{
           label: "RingCentral JavaScript SDK";
           url: "https://github.com/ringcentral/ringcentral-js";
         }, {
           label: "RingCX Voice APIs";
           url: "https://developers.ringcentral.com/engage-voice-api";
         }, {
           label: "RingCX Digital APIs";
           url: "https://developers.ringcentral.com/engage-digital-api";
        }];
        notes: ["Runtime uses @ringcentral/sdk where viable for authentication, request dispatch, and raw platform access.", "The official SDK does not currently prove typed coverage for every current RingCX Voice and Engage Digital OpenAPI operation.", "Normalized Cognidesk coverage is limited to SDK-configured handoff/readiness plus raw SDK request escape hatches.", "Provider-package-local reviewed RingCX slices can be added later for operations not covered cleanly by @ringcentral/sdk."];
        scope: "support-workflow-subset";
     };
     credentialRequirements: [{
        id: "ringcentral-api-base";
        label: "RingCentral API base URL";
        required: true;
      }, {
        description: "RingCentral SDK OAuth access or an injected SDK platform client.";
        id: "ringcentral-api-access";
        label: "RingCentral API access";
        metadata: {
           privilegeGuidance: "RingCX deployments may still require product-specific permissions beyond RingCentral OAuth token possession.";
           scopeKind: "mixed-auth-mode";
        };
        required: true;
      }, {
        id: "ringcentral-ringcx-routing";
        label: "RingCX handoff/readiness routing configuration";
        required: false;
     }];
     directions: ["inbound-only", "outbound-only", "bidirectional"];
     id: "contact-center.ringcentral";
     limitations: ["RingCX API product, regional endpoint, queue/campaign IDs, and outbound eligibility are SDK-user configuration.", "Legacy RingCX Voice APIs, product-private endpoints, Channel SDK runtime, web/mobile widgets, and broader RingCentral platform APIs remain separate surfaces."];
     maintainers: [{
        name: "Cognidesk";
        type: "official";
     }];
     metadata: {
        channelCoverage: {
           channelSdkMessaging: "provider-supported-sdk-runtime-not-typed";
           configuredHttpHandoff: "sdk-dispatched";
           configuredReadiness: "sdk-dispatched";
           currentVoiceRestApiOperations: "provider-supported-not-typed";
           digitalRestApiOperations: "provider-supported-not-typed";
           rawRingCentralSdkPlatform: "escape-hatch";
        };
        implementation: {
           sdkPackage: "@ringcentral/sdk";
           sdkPackages: readonly ["@ringcentral/sdk"];
           strategy: "official-sdk-plus-reviewed-slices";
        };
     };
     name: "RingCentral RingCX";
     operations: [{
        alias: "contact-center.handoff.request";
        capability: "handoff";
        changesWorkflow: true;
        exposesSensitiveData: true;
        providerObject: "contactTransfer";
        providerOperation: "sdk-configured-request";
        sideEffect: true;
      }, {
        alias: "contact-center.handoff.status.read";
        capability: "handoff";
        exposesSensitiveData: true;
        providerObject: "contactTransfer";
        providerOperation: "sdk-configured-readiness-request";
     }];
     packageName: "@cognidesk/integration-contact-center-ringcentral";
     privacyNotes: ["RingCX handoffs can include customer identifiers, queue/campaign metadata, and conversation summaries.", "RingCentral OAuth credentials stay inside the SDK user's runtime configuration."];
     provider: "ringcentral";
     trustLevel: "official";
  };
  metadata?: Record<string, unknown>;
  operationAliases: (
     | "contact-center.handoff.request"
    | "contact-center.handoff.status.read")[];
  operations: {
     contact-center.handoff.request: (input) => Promise<unknown>;
     contact-center.handoff.status.read: () => Promise<unknown>;
  };
  rawClient: RingCentralRawClient;
  readiness: () => Promise<
     | {
     blockers?: never;
     checkSource: string;
     live: boolean;
     providerPackageId: "contact-center.ringcentral";
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
     providerPackageId: "contact-center.ringcentral";
     status: string;
  }>;
  getOperationHandler: {
     contact-center.handoff.request: (input) => Promise<unknown>;
     contact-center.handoff.status.read: () => Promise<unknown>;
  }[Alias];
  requireOperationHandler: {
     contact-center.handoff.request: (input) => Promise<unknown>;
     contact-center.handoff.status.read: () => Promise<unknown>;
  }[Alias];
  run: Promise<Awaited<ReturnType<{
     contact-center.handoff.request: (input) => Promise<unknown>;
     contact-center.handoff.status.read: () => Promise<unknown>;
  }[Alias]>>>;
}>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RingCentralContactCenterOptions`](#ringcentralcontactcenteroptions) |

#### Returns

`Promise`\<\{
  `bindingReport`: [`OperationBindingReport`](../../../packages/integration-kit/dist.md#operationbindingreport);
  `credentialStatuses`: () => \{
     `message`: `string`;
     `providerPackageId`: `"contact-center.ringcentral"`;
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
        `label`: `"Create RingCX handoff"`;
        `providerObjects`: \[\{
           `kind`: `"ringcxHandoff"`;
           `label`: `"RingCX Handoff"`;
        \}\];
        `requiresCredential`: `true`;
        `sideEffect`: `true`;
      \}, \{
        `capability`: `"read-provider-object"`;
        `exposesSensitiveData`: `true`;
        `label`: `"Check RingCentral readiness"`;
        `providerObjects`: \[\{
           `kind`: `"ringcentralReadiness"`;
           `label`: `"RingCentral Readiness"`;
        \}\];
        `requiresCredential`: `true`;
     \}\];
     `category`: `"contact-center"`;
     `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\];
     `coverage`: \{
        `evidence`: \[\{
           `label`: `"RingCentral JavaScript SDK"`;
           `url`: `"https://github.com/ringcentral/ringcentral-js"`;
         \}, \{
           `label`: `"RingCX Voice APIs"`;
           `url`: `"https://developers.ringcentral.com/engage-voice-api"`;
         \}, \{
           `label`: `"RingCX Digital APIs"`;
           `url`: `"https://developers.ringcentral.com/engage-digital-api"`;
        \}\];
        `notes`: \[`"Runtime uses @ringcentral/sdk where viable for authentication, request dispatch, and raw platform access."`, `"The official SDK does not currently prove typed coverage for every current RingCX Voice and Engage Digital OpenAPI operation."`, `"Normalized Cognidesk coverage is limited to SDK-configured handoff/readiness plus raw SDK request escape hatches."`, `"Provider-package-local reviewed RingCX slices can be added later for operations not covered cleanly by @ringcentral/sdk."`\];
        `scope`: `"support-workflow-subset"`;
     \};
     `credentialRequirements`: \[\{
        `id`: `"ringcentral-api-base"`;
        `label`: `"RingCentral API base URL"`;
        `required`: `true`;
      \}, \{
        `description`: `"RingCentral SDK OAuth access or an injected SDK platform client."`;
        `id`: `"ringcentral-api-access"`;
        `label`: `"RingCentral API access"`;
        `metadata`: \{
           `privilegeGuidance`: `"RingCX deployments may still require product-specific permissions beyond RingCentral OAuth token possession."`;
           `scopeKind`: `"mixed-auth-mode"`;
        \};
        `required`: `true`;
      \}, \{
        `id`: `"ringcentral-ringcx-routing"`;
        `label`: `"RingCX handoff/readiness routing configuration"`;
        `required`: `false`;
     \}\];
     `directions`: \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\];
     `id`: `"contact-center.ringcentral"`;
     `limitations`: \[`"RingCX API product, regional endpoint, queue/campaign IDs, and outbound eligibility are SDK-user configuration."`, `"Legacy RingCX Voice APIs, product-private endpoints, Channel SDK runtime, web/mobile widgets, and broader RingCentral platform APIs remain separate surfaces."`\];
     `maintainers`: \[\{
        `name`: `"Cognidesk"`;
        `type`: `"official"`;
     \}\];
     `metadata`: \{
        `channelCoverage`: \{
           `channelSdkMessaging`: `"provider-supported-sdk-runtime-not-typed"`;
           `configuredHttpHandoff`: `"sdk-dispatched"`;
           `configuredReadiness`: `"sdk-dispatched"`;
           `currentVoiceRestApiOperations`: `"provider-supported-not-typed"`;
           `digitalRestApiOperations`: `"provider-supported-not-typed"`;
           `rawRingCentralSdkPlatform`: `"escape-hatch"`;
        \};
        `implementation`: \{
           `sdkPackage`: `"@ringcentral/sdk"`;
           `sdkPackages`: readonly \[`"@ringcentral/sdk"`\];
           `strategy`: `"official-sdk-plus-reviewed-slices"`;
        \};
     \};
     `name`: `"RingCentral RingCX"`;
     `operations`: \[\{
        `alias`: `"contact-center.handoff.request"`;
        `capability`: `"handoff"`;
        `changesWorkflow`: `true`;
        `exposesSensitiveData`: `true`;
        `providerObject`: `"contactTransfer"`;
        `providerOperation`: `"sdk-configured-request"`;
        `sideEffect`: `true`;
      \}, \{
        `alias`: `"contact-center.handoff.status.read"`;
        `capability`: `"handoff"`;
        `exposesSensitiveData`: `true`;
        `providerObject`: `"contactTransfer"`;
        `providerOperation`: `"sdk-configured-readiness-request"`;
     \}\];
     `packageName`: `"@cognidesk/integration-contact-center-ringcentral"`;
     `privacyNotes`: \[`"RingCX handoffs can include customer identifiers, queue/campaign metadata, and conversation summaries."`, `"RingCentral OAuth credentials stay inside the SDK user's runtime configuration."`\];
     `provider`: `"ringcentral"`;
     `trustLevel`: `"official"`;
  \};
  `metadata?`: `Record`\<`string`, `unknown`\>;
  `operationAliases`: (
     \| `"contact-center.handoff.request"`
    \| `"contact-center.handoff.status.read"`)[];
  `operations`: \{
     `contact-center.handoff.request`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.handoff.status.read`: () => `Promise`\<`unknown`\>;
  \};
  `rawClient`: [`RingCentralRawClient`](#ringcentralrawclient);
  `readiness`: () => `Promise`\<
     \| \{
     `blockers?`: `never`;
     `checkSource`: `string`;
     `live`: `boolean`;
     `providerPackageId`: `"contact-center.ringcentral"`;
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
     `providerPackageId`: `"contact-center.ringcentral"`;
     `status`: `string`;
  \}\>;
  `getOperationHandler`: \{
     `contact-center.handoff.request`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.handoff.status.read`: () => `Promise`\<`unknown`\>;
  \}\[`Alias`\];
  `requireOperationHandler`: \{
     `contact-center.handoff.request`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.handoff.status.read`: () => `Promise`\<`unknown`\>;
  \}\[`Alias`\];
  `run`: `Promise`\<`Awaited`\<`ReturnType`\<\{
     `contact-center.handoff.request`: (`input`) => `Promise`\<`unknown`\>;
     `contact-center.handoff.status.read`: () => `Promise`\<`unknown`\>;
  \}\[`Alias`\]\>\>\>;
\}\>

***

### ringCentralContactCenterCredentialStatuses()

```ts
function ringCentralContactCenterCredentialStatuses(input): {
  message: string;
  providerPackageId: "contact-center.ringcentral";
  requirementId: string;
  state: string;
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Pick`\<[`RingCentralContactCenterOptions`](#ringcentralcontactcenteroptions), `"server"` \| `"accessToken"` \| `"rawClient"` \| `"defaultHandoffPath"`\> |

#### Returns

\{
  `message`: `string`;
  `providerPackageId`: `"contact-center.ringcentral"`;
  `requirementId`: `string`;
  `state`: `string`;
\}[]

## References

### ringCentralContactCenterManifest

Re-exports [ringCentralContactCenterManifest](dist/manifest.md#ringcentralcontactcentermanifest)
