# integrations/contact-center/ringcentral/dist/manifest

## Variables

### ringCentralContactCenterManifest

```ts
const ringCentralContactCenterManifest: {
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
| `capabilities` | \[\{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create RingCX handoff"`; `providerObjects`: \[\{ `kind`: `"ringcxHandoff"`; `label`: `"RingCX Handoff"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Check RingCentral readiness"`; `providerObjects`: \[\{ `kind`: `"ringcentralReadiness"`; `label`: `"RingCentral Readiness"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"contact-center"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"RingCentral JavaScript SDK"`; `url`: `"https://github.com/ringcentral/ringcentral-js"`; \}, \{ `label`: `"RingCX Voice APIs"`; `url`: `"https://developers.ringcentral.com/engage-voice-api"`; \}, \{ `label`: `"RingCX Digital APIs"`; `url`: `"https://developers.ringcentral.com/engage-digital-api"`; \}\]; `notes`: \[`"Runtime uses @ringcentral/sdk for authentication and SDK.platform()-dispatched contact-center operations."`, `"The official SDK does not currently prove typed coverage for every current RingCX Voice and Engage Digital OpenAPI operation."`, `"Normalized Cognidesk coverage is limited to SDK-configured handoff/readiness through an injected SDK platform client."`, `"Provider-package-local reviewed RingCX slices can be added later for operations not covered cleanly by @ringcentral/sdk."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"RingCentral JavaScript SDK"`; `url`: `"https://github.com/ringcentral/ringcentral-js"`; \}, \{ `label`: `"RingCX Voice APIs"`; `url`: `"https://developers.ringcentral.com/engage-voice-api"`; \}, \{ `label`: `"RingCX Digital APIs"`; `url`: `"https://developers.ringcentral.com/engage-digital-api"`; \}\] |
| `coverage.notes` | \[`"Runtime uses @ringcentral/sdk for authentication and SDK.platform()-dispatched contact-center operations."`, `"The official SDK does not currently prove typed coverage for every current RingCX Voice and Engage Digital OpenAPI operation."`, `"Normalized Cognidesk coverage is limited to SDK-configured handoff/readiness through an injected SDK platform client."`, `"Provider-package-local reviewed RingCX slices can be added later for operations not covered cleanly by @ringcentral/sdk."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `id`: `"ringcentral-api-base"`; `label`: `"RingCentral API base URL"`; `required`: `true`; \}, \{ `description`: `"RingCentral SDK OAuth access or an injected SDK platform client."`; `id`: `"ringcentral-api-access"`; `label`: `"RingCentral API access"`; `metadata`: \{ `privilegeGuidance`: `"RingCX deployments may still require product-specific permissions beyond RingCentral OAuth token possession."`; `scopeKind`: `"mixed-auth-mode"`; \}; `required`: `true`; \}, \{ `id`: `"ringcentral-ringcx-routing"`; `label`: `"RingCX handoff/readiness routing configuration"`; `required`: `false`; \}\] |
| `directions` | \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.ringcentral"` |
| `limitations` | \[`"RingCX API product, regional endpoint, queue/campaign IDs, and outbound eligibility are SDK-user configuration."`, `"Legacy RingCX Voice APIs, product-private endpoints, Channel SDK runtime, web/mobile widgets, and broader RingCentral platform APIs remain separate surfaces."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `channelSdkMessaging`: `"provider-supported-sdk-runtime-not-typed"`; `configuredHttpHandoff`: `"SDK.platform().post"`; `configuredReadiness`: `"SDK.platform().get"`; `currentVoiceRestApiOperations`: `"provider-supported-not-typed"`; `digitalRestApiOperations`: `"provider-supported-not-typed"`; `sdkBackedClient`: `"injected-client"`; \}; `implementation`: \{ `operationMethodMap`: \{ `contact-center.handoff.request`: `"SDK.platform().post"`; `contact-center.handoff.status.read`: `"SDK.platform().get"`; \}; `sdkPackage`: `"@ringcentral/sdk"`; `sdkPackages`: readonly \[`"@ringcentral/sdk"`\]; `sdkRuntimeSurface`: `"SDK.platform()"`; `strategy`: `"official-sdk-backed-client-plus-reviewed-slices"`; \}; \} |
| `metadata.channelCoverage` | \{ `channelSdkMessaging`: `"provider-supported-sdk-runtime-not-typed"`; `configuredHttpHandoff`: `"SDK.platform().post"`; `configuredReadiness`: `"SDK.platform().get"`; `currentVoiceRestApiOperations`: `"provider-supported-not-typed"`; `digitalRestApiOperations`: `"provider-supported-not-typed"`; `sdkBackedClient`: `"injected-client"`; \} |
| `metadata.channelCoverage.channelSdkMessaging` | `"provider-supported-sdk-runtime-not-typed"` |
| `metadata.channelCoverage.configuredHttpHandoff` | `"SDK.platform().post"` |
| `metadata.channelCoverage.configuredReadiness` | `"SDK.platform().get"` |
| `metadata.channelCoverage.currentVoiceRestApiOperations` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.digitalRestApiOperations` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.sdkBackedClient` | `"injected-client"` |
| `metadata.implementation` | \{ `operationMethodMap`: \{ `contact-center.handoff.request`: `"SDK.platform().post"`; `contact-center.handoff.status.read`: `"SDK.platform().get"`; \}; `sdkPackage`: `"@ringcentral/sdk"`; `sdkPackages`: readonly \[`"@ringcentral/sdk"`\]; `sdkRuntimeSurface`: `"SDK.platform()"`; `strategy`: `"official-sdk-backed-client-plus-reviewed-slices"`; \} |
| `metadata.implementation.operationMethodMap` | \{ `contact-center.handoff.request`: `"SDK.platform().post"`; `contact-center.handoff.status.read`: `"SDK.platform().get"`; \} |
| `metadata.implementation.operationMethodMap.contact-center.handoff.request` | `"SDK.platform().post"` |
| `metadata.implementation.operationMethodMap.contact-center.handoff.status.read` | `"SDK.platform().get"` |
| `metadata.implementation.sdkPackage` | `"@ringcentral/sdk"` |
| `metadata.implementation.sdkPackages` | readonly \[`"@ringcentral/sdk"`\] |
| `metadata.implementation.sdkRuntimeSurface` | `"SDK.platform()"` |
| `metadata.implementation.strategy` | `"official-sdk-backed-client-plus-reviewed-slices"` |
| `name` | `"RingCentral RingCX"` |
| `operations` | \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ringcxHandoff"`; `providerOperation`: `"SDK.platform().post"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.handoff.status.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ringcentralReadiness"`; `providerOperation`: `"SDK.platform().get"`; \}\] |
| `packageName` | `"@cognidesk/integration-contact-center-ringcentral"` |
| `privacyNotes` | \[`"RingCX handoffs can include customer identifiers, queue/campaign metadata, and conversation summaries."`, `"RingCentral OAuth credentials stay inside the SDK user's runtime configuration."`\] |
| `provider` | `"ringcentral"` |
| `trustLevel` | `"official"` |

***

### ringCentralContactCenterManifestInput

```ts
const ringCentralContactCenterManifestInput: {
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
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create RingCX handoff"`; `providerObjects`: \[\{ `kind`: `"ringcxHandoff"`; `label`: `"RingCX Handoff"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Check RingCentral readiness"`; `providerObjects`: \[\{ `kind`: `"ringcentralReadiness"`; `label`: `"RingCentral Readiness"`; \}\]; `requiresCredential`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"RingCentral JavaScript SDK"`; `url`: `"https://github.com/ringcentral/ringcentral-js"`; \}, \{ `label`: `"RingCX Voice APIs"`; `url`: `"https://developers.ringcentral.com/engage-voice-api"`; \}, \{ `label`: `"RingCX Digital APIs"`; `url`: `"https://developers.ringcentral.com/engage-digital-api"`; \}\]; `notes`: \[`"Runtime uses @ringcentral/sdk for authentication and SDK.platform()-dispatched contact-center operations."`, `"The official SDK does not currently prove typed coverage for every current RingCX Voice and Engage Digital OpenAPI operation."`, `"Normalized Cognidesk coverage is limited to SDK-configured handoff/readiness through an injected SDK platform client."`, `"Provider-package-local reviewed RingCX slices can be added later for operations not covered cleanly by @ringcentral/sdk."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"RingCentral JavaScript SDK"`; `url`: `"https://github.com/ringcentral/ringcentral-js"`; \}, \{ `label`: `"RingCX Voice APIs"`; `url`: `"https://developers.ringcentral.com/engage-voice-api"`; \}, \{ `label`: `"RingCX Digital APIs"`; `url`: `"https://developers.ringcentral.com/engage-digital-api"`; \}\] |
| `coverage.notes` | \[`"Runtime uses @ringcentral/sdk for authentication and SDK.platform()-dispatched contact-center operations."`, `"The official SDK does not currently prove typed coverage for every current RingCX Voice and Engage Digital OpenAPI operation."`, `"Normalized Cognidesk coverage is limited to SDK-configured handoff/readiness through an injected SDK platform client."`, `"Provider-package-local reviewed RingCX slices can be added later for operations not covered cleanly by @ringcentral/sdk."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `id`: `"ringcentral-api-base"`; `label`: `"RingCentral API base URL"`; `required`: `true`; \}, \{ `description`: `"RingCentral SDK OAuth access or an injected SDK platform client."`; `id`: `"ringcentral-api-access"`; `label`: `"RingCentral API access"`; `metadata`: \{ `privilegeGuidance`: `"RingCX deployments may still require product-specific permissions beyond RingCentral OAuth token possession."`; `scopeKind`: `"mixed-auth-mode"`; \}; `required`: `true`; \}, \{ `id`: `"ringcentral-ringcx-routing"`; `label`: `"RingCX handoff/readiness routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.ringcentral"` |
| <a id="property-limitations"></a> `limitations` | \[`"RingCX API product, regional endpoint, queue/campaign IDs, and outbound eligibility are SDK-user configuration."`, `"Legacy RingCX Voice APIs, product-private endpoints, Channel SDK runtime, web/mobile widgets, and broader RingCentral platform APIs remain separate surfaces."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `channelCoverage`: \{ `channelSdkMessaging`: `"provider-supported-sdk-runtime-not-typed"`; `configuredHttpHandoff`: `"SDK.platform().post"`; `configuredReadiness`: `"SDK.platform().get"`; `currentVoiceRestApiOperations`: `"provider-supported-not-typed"`; `digitalRestApiOperations`: `"provider-supported-not-typed"`; `sdkBackedClient`: `"injected-client"`; \}; `implementation`: \{ `operationMethodMap`: \{ `contact-center.handoff.request`: `"SDK.platform().post"`; `contact-center.handoff.status.read`: `"SDK.platform().get"`; \}; `sdkPackage`: `"@ringcentral/sdk"`; `sdkPackages`: readonly \[`"@ringcentral/sdk"`\]; `sdkRuntimeSurface`: `"SDK.platform()"`; `strategy`: `"official-sdk-backed-client-plus-reviewed-slices"`; \}; \} |
| `metadata.channelCoverage` | \{ `channelSdkMessaging`: `"provider-supported-sdk-runtime-not-typed"`; `configuredHttpHandoff`: `"SDK.platform().post"`; `configuredReadiness`: `"SDK.platform().get"`; `currentVoiceRestApiOperations`: `"provider-supported-not-typed"`; `digitalRestApiOperations`: `"provider-supported-not-typed"`; `sdkBackedClient`: `"injected-client"`; \} |
| `metadata.channelCoverage.channelSdkMessaging` | `"provider-supported-sdk-runtime-not-typed"` |
| `metadata.channelCoverage.configuredHttpHandoff` | `"SDK.platform().post"` |
| `metadata.channelCoverage.configuredReadiness` | `"SDK.platform().get"` |
| `metadata.channelCoverage.currentVoiceRestApiOperations` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.digitalRestApiOperations` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.sdkBackedClient` | `"injected-client"` |
| `metadata.implementation` | \{ `operationMethodMap`: \{ `contact-center.handoff.request`: `"SDK.platform().post"`; `contact-center.handoff.status.read`: `"SDK.platform().get"`; \}; `sdkPackage`: `"@ringcentral/sdk"`; `sdkPackages`: readonly \[`"@ringcentral/sdk"`\]; `sdkRuntimeSurface`: `"SDK.platform()"`; `strategy`: `"official-sdk-backed-client-plus-reviewed-slices"`; \} |
| `metadata.implementation.operationMethodMap` | \{ `contact-center.handoff.request`: `"SDK.platform().post"`; `contact-center.handoff.status.read`: `"SDK.platform().get"`; \} |
| `metadata.implementation.operationMethodMap.contact-center.handoff.request` | `"SDK.platform().post"` |
| `metadata.implementation.operationMethodMap.contact-center.handoff.status.read` | `"SDK.platform().get"` |
| `metadata.implementation.sdkPackage` | `"@ringcentral/sdk"` |
| `metadata.implementation.sdkPackages` | readonly \[`"@ringcentral/sdk"`\] |
| `metadata.implementation.sdkRuntimeSurface` | `"SDK.platform()"` |
| `metadata.implementation.strategy` | `"official-sdk-backed-client-plus-reviewed-slices"` |
| <a id="property-name"></a> `name` | `"RingCentral RingCX"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ringcxHandoff"`; `providerOperation`: `"SDK.platform().post"`; `sideEffect`: `true`; \}, \{ `alias`: `"contact-center.handoff.status.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ringcentralReadiness"`; `providerOperation`: `"SDK.platform().get"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-ringcentral"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"RingCX handoffs can include customer identifiers, queue/campaign metadata, and conversation summaries."`, `"RingCentral OAuth credentials stay inside the SDK user's runtime configuration."`\] |
| <a id="property-provider"></a> `provider` | `"ringcentral"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
