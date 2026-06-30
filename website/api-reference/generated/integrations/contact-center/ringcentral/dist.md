# integrations/contact-center/ringcentral/dist

## Interfaces

### RingCentralContactCenterClient

#### Properties

##### sdk

```ts
sdk: RingCentralSdkClient;
```

#### Methods

##### createHandoff()

```ts
createHandoff(input): Promise<unknown>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`RingCentralCreateHandoffInput`](#ringcentralcreatehandoffinput) |

###### Returns

`Promise`\<`unknown`\>

##### readiness()

```ts
readiness(): Promise<unknown>;
```

###### Returns

`Promise`\<`unknown`\>

***

### RingCentralContactCenterCommonOptions

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

##### readinessPath?

```ts
optional readinessPath?: string;
```

##### sdk?

```ts
optional sdk?: RingCentralSdkClient;
```

##### server?

```ts
optional server?: string;
```

***

### RingCentralCreateHandoffInput

#### Properties

##### payload

```ts
payload: unknown;
```

***

### RingCentralSdkClient

#### Methods

##### platform()

```ts
platform(): RingCentralSdkPlatform;
```

###### Returns

[`RingCentralSdkPlatform`](#ringcentralsdkplatform)

## Type Aliases

### RingCentralContactCenterClientOptions

```ts
type RingCentralContactCenterClientOptions = RingCentralContactCenterCommonOptions &
  | {
  sdk: RingCentralSdkClient;
  server?: string;
}
  | {
  sdk?: undefined;
  server: string;
};
```

***

### RingCentralContactCenterIntegrationOptions

```ts
type RingCentralContactCenterIntegrationOptions =
  | RingCentralContactCenterCommonOptions & {
  contactCenterClient: RingCentralContactCenterClient;
}
  | RingCentralContactCenterClientOptions & {
  contactCenterClient?: undefined;
};
```

***

### RingCentralContactCenterOptions

```ts
type RingCentralContactCenterOptions = RingCentralContactCenterIntegrationOptions;
```

***

### RingCentralJsonObject

```ts
type RingCentralJsonObject = Record<string, unknown>;
```

***

### RingCentralSdkPlatform

```ts
type RingCentralSdkPlatform = Pick<ReturnType<SDK["platform"]>, "auth" | "get" | "post">;
```

## Variables

### createRingCentralContactCenterIntegrationOperationHandlers

```ts
const createRingCentralContactCenterIntegrationOperationHandlers: typeof createRingCentralContactCenterOperationHandlers;
```

## Functions

### createRingCentralContactCenterClient()

```ts
function createRingCentralContactCenterClient(options): RingCentralContactCenterClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RingCentralContactCenterClientOptions`](#ringcentralcontactcenterclientoptions) |

#### Returns

[`RingCentralContactCenterClient`](#ringcentralcontactcenterclient)

***

### createRingCentralContactCenterIntegration()

```ts
function createRingCentralContactCenterIntegration(options): {
  bindingReport: OperationBindingReport;
  contactCenterClient: RingCentralContactCenterClient;
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
        notes: ["Runtime uses @ringcentral/sdk for authentication and SDK.platform()-dispatched contact-center operations.", "The official SDK does not currently prove typed coverage for every current RingCX Voice and Engage Digital OpenAPI operation.", "Normalized Cognidesk coverage is limited to SDK-configured handoff/readiness through an injected SDK platform client.", "Provider-package-local reviewed RingCX slices can be added later for operations not covered cleanly by @ringcentral/sdk."];
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
           configuredHttpHandoff: "SDK.platform().post";
           configuredReadiness: "SDK.platform().get";
           currentVoiceRestApiOperations: "provider-supported-not-typed";
           digitalRestApiOperations: "provider-supported-not-typed";
           sdkBackedClient: "injected-client";
        };
        implementation: {
           operationMethodMap: {
              contact-center.handoff.request: "SDK.platform().post";
              contact-center.handoff.status.read: "SDK.platform().get";
           };
           sdkPackage: "@ringcentral/sdk";
           sdkPackages: readonly ["@ringcentral/sdk"];
           sdkRuntimeSurface: "SDK.platform()";
           strategy: "official-sdk-backed-client-plus-reviewed-slices";
        };
     };
     name: "RingCentral RingCX";
     operations: [{
        alias: "contact-center.handoff.request";
        capability: "handoff";
        changesWorkflow: true;
        exposesSensitiveData: true;
        providerObject: "ringcxHandoff";
        providerOperation: "SDK.platform().post";
        sideEffect: true;
      }, {
        alias: "contact-center.handoff.status.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        providerObject: "ringcentralReadiness";
        providerOperation: "SDK.platform().get";
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
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RingCentralContactCenterIntegrationOptions`](#ringcentralcontactcenterintegrationoptions) |

#### Returns

```ts
{
  bindingReport: OperationBindingReport;
  contactCenterClient: RingCentralContactCenterClient;
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
        notes: ["Runtime uses @ringcentral/sdk for authentication and SDK.platform()-dispatched contact-center operations.", "The official SDK does not currently prove typed coverage for every current RingCX Voice and Engage Digital OpenAPI operation.", "Normalized Cognidesk coverage is limited to SDK-configured handoff/readiness through an injected SDK platform client.", "Provider-package-local reviewed RingCX slices can be added later for operations not covered cleanly by @ringcentral/sdk."];
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
           configuredHttpHandoff: "SDK.platform().post";
           configuredReadiness: "SDK.platform().get";
           currentVoiceRestApiOperations: "provider-supported-not-typed";
           digitalRestApiOperations: "provider-supported-not-typed";
           sdkBackedClient: "injected-client";
        };
        implementation: {
           operationMethodMap: {
              contact-center.handoff.request: "SDK.platform().post";
              contact-center.handoff.status.read: "SDK.platform().get";
           };
           sdkPackage: "@ringcentral/sdk";
           sdkPackages: readonly ["@ringcentral/sdk"];
           sdkRuntimeSurface: "SDK.platform()";
           strategy: "official-sdk-backed-client-plus-reviewed-slices";
        };
     };
     name: "RingCentral RingCX";
     operations: [{
        alias: "contact-center.handoff.request";
        capability: "handoff";
        changesWorkflow: true;
        exposesSensitiveData: true;
        providerObject: "ringcxHandoff";
        providerOperation: "SDK.platform().post";
        sideEffect: true;
      }, {
        alias: "contact-center.handoff.status.read";
        capability: "read-provider-object";
        exposesSensitiveData: true;
        providerObject: "ringcentralReadiness";
        providerOperation: "SDK.platform().get";
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
}
```

| Name | Type |
| ------ | ------ |
| `bindingReport` | [`OperationBindingReport`](../../../packages/integration-kit/dist.md#operationbindingreport) |
| `contactCenterClient` | [`RingCentralContactCenterClient`](#ringcentralcontactcenterclient) |
| `credentialStatuses()` | () => \{ `message`: `string`; `providerPackageId`: `"contact-center.ringcentral"`; `requirementId`: `string`; `state`: `string`; \}[] |
| `manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage`: \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations`: `string`[]; `maintainers`: \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `Record`\<`string`, `unknown`\>; `name`: `string`; `operations`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes`: `string`[]; `provider`: `string`; `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} & \{ `capabilities`: \[\{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create RingCX handoff"`; `providerObjects`: \[\{ `kind`: `"ringcxHandoff"`; `label`: `"RingCX Handoff"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Check RingCentral readiness"`; `providerObjects`: \[\{ `kind`: `"ringcentralReadiness"`; `label`: `"RingCentral Readiness"`; \}\]; `requiresCredential`: `true`; \}\]; `category`: `"contact-center"`; `channelAudiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `coverage`: \{ `evidence`: \[\{ `label`: `"RingCentral JavaScript SDK"`; `url`: `"https://github.com/ringcentral/ringcentral-js"`; \}, \{ `label`: `"RingCX Voice APIs"`; `url`: `"https://developers.ringcentral.com/engage-voice-api"`; \}, \{ `label`: `"RingCX Digital APIs"`; `url`: `"https://developers.ringcentral.com/engage-digital-api"`; \}\]; `notes`: \[`"Runtime uses @ringcentral/sdk for authentication and SDK.platform()-dispatched contact-center operations."`, `"The official SDK does not currently prove typed coverage for every current RingCX Voice and Engage Digital OpenAPI operation."`, `"Normalized Cognidesk coverage is limited to SDK-configured handoff/readiness through an injected SDK platform client."`, `"Provider-package-local reviewed RingCX slices can be added later for operations not covered cleanly by @ringcentral/sdk."`\]; `scope`: `"support-workflow-subset"`; \}; `credentialRequirements`: \[\{ `id`: `"ringcentral-api-base"`; `label`: `"RingCentral API base URL"`; `required`: `true`; \}, \{ `description`: `"RingCentral SDK OAuth access or an injected SDK platform client."`; `id`: `"ringcentral-api-access"`; `label`: `"RingCentral API access"`; `metadata`: \{ `privilegeGuidance`: `"RingCX deployments may still require product-specific permissions beyond RingCentral OAuth token possession."`; `scopeKind`: `"mixed-auth-mode"`; \}; `required`: `true`; \}, \{ `id`: `"ringcentral-ringcx-routing"`; `label`: `"RingCX handoff/readiness routing configuration"`; `required`: `false`; \}\]; `directions`: \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\]; `id`: `"contact-center.ringcentral"`; `limitations`: \[`"RingCX API product, regional endpoint, queue/campaign IDs, and outbound eligibility are SDK-user configuration."`, `"Legacy RingCX Voice APIs, product-private endpoints, Channel SDK runtime, web/mobile widgets, and broader RingCentral platform APIs remain separate surfaces."`\]; `maintainers`: \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\]; `metadata`: \{ `channelCoverage`: \{ `channelSdkMessaging`: `"provider-supported-sdk-runtime-not-typed"`; `configuredHttpHandoff`: `"SDK.platform().post"`; `configuredReadiness`: `"SDK.platform().get"`; `currentVoiceRestApiOperations`: `"provider-supported-not-typed"`; `digitalRestApiOperations`: `"provider-supported-not-typed"`; `sdkBackedClient`: `"injected-client"`; \}; `implementation`: \{ `operationMethodMap`: \{ `contact-center.handoff.request`: `"SDK.platform().post"`; `contact-center.handoff.status.read`: `"SDK.platform().get"`; \}; `sdkPackage`: `"@ringcentral/sdk"`; `sdkPackages`: readonly \[`"@ringcentral/sdk"`\]; `sdkRuntimeSurface`: `"SDK.platform()"`; `strategy`: `"official-sdk-backed-client-plus-reviewed-slices"`; \}; \}; `name`: `"RingCentral RingCX"`; `operations`: \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ringcxHandoff"`; `providerOperation`: `"SDK.platform().post"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.handoff.status.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ringcentralReadiness"`; `providerOperation`: `"SDK.platform().get"`; \}\]; `packageName`: `"@cognidesk/integration-contact-center-ringcentral"`; `privacyNotes`: \[`"RingCX handoffs can include customer identifiers, queue/campaign metadata, and conversation summaries."`, `"RingCentral OAuth credentials stay inside the SDK user's runtime configuration."`\]; `provider`: `"ringcentral"`; `trustLevel`: `"official"`; \} |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `operationAliases` | ( \| `"contact-center.handoff.request"` \| `"contact-center.handoff.status.read"`)[] |
| `operations` | \{ `contact-center.handoff.request`: (`input`) => `Promise`\<`unknown`\>; `contact-center.handoff.status.read`: () => `Promise`\<`unknown`\>; \} |
| `operations.contact-center.handoff.request()` | (`input`) => `Promise`\<`unknown`\> |
| `operations.contact-center.handoff.status.read()` | () => `Promise`\<`unknown`\> |
| `readiness()` | () => `Promise`\< \| \{ `blockers?`: `never`; `checkSource`: `string`; `live`: `boolean`; `providerPackageId`: `"contact-center.ringcentral"`; `status`: `string`; \} \| \{ `blockers`: \{ `code`: `string`; `kind`: `string`; `message`: `string`; \}[]; `checkSource`: `string`; `live`: `boolean`; `providerPackageId`: `"contact-center.ringcentral"`; `status`: `string`; \}\> |
| `getOperationHandler()` | (`alias`) => \{ `contact-center.handoff.request`: (`input`) => `Promise`\<`unknown`\>; `contact-center.handoff.status.read`: () => `Promise`\<`unknown`\>; \}\[`Alias`\] |
| `requireOperationHandler()` | (`alias`) => \{ `contact-center.handoff.request`: (`input`) => `Promise`\<`unknown`\>; `contact-center.handoff.status.read`: () => `Promise`\<`unknown`\>; \}\[`Alias`\] |
| `run()` | ( `alias`, `input`, `context?`) => `Promise`\<`Awaited`\<`ReturnType`\<\{ `contact-center.handoff.request`: (`input`) => `Promise`\<`unknown`\>; `contact-center.handoff.status.read`: () => `Promise`\<`unknown`\>; \}\[`Alias`\]\>\>\> |

***

### createRingCentralContactCenterOperationHandlers()

```ts
function createRingCentralContactCenterOperationHandlers(options): {
  contact-center.handoff.request: (input) => Promise<unknown>;
  contact-center.handoff.status.read: () => Promise<unknown>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`RingCentralContactCenterIntegrationOptions`](#ringcentralcontactcenterintegrationoptions) |

#### Returns

```ts
{
  contact-center.handoff.request: (input) => Promise<unknown>;
  contact-center.handoff.status.read: () => Promise<unknown>;
}
```

| Name | Type |
| ------ | ------ |
| `contact-center.handoff.request()` | (`input`) => `Promise`\<`unknown`\> |
| `contact-center.handoff.status.read()` | () => `Promise`\<`unknown`\> |

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
| `input` | `Pick`\<[`RingCentralContactCenterOptions`](#ringcentralcontactcenteroptions), \| `"accessToken"` \| `"contactCenterClient"` \| `"defaultHandoffPath"` \| `"sdk"` \| `"server"`\> |

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
