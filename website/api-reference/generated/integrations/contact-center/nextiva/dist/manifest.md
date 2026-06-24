# integrations/contact-center/nextiva/dist/manifest

## Variables

### nextivaProviderManifest

```ts
const nextivaProviderManifest: {
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
     | "inbound-only"
     | "outbound-only"
     | "bidirectional"
     | "receive-only"
    | "send-only")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "official" | "community" | "unknown" | "partner";
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
  trustLevel: "official" | "community" | "verified" | "experimental";
} & {
  capabilities: readonly [{
     capability: "handoff";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contactTransfer";
        label: "contactTransfer";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: false;
  }];
  category: "contact-center";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Nextiva Contact Center REST APIs";
        url: "https://www.nextiva.com/resources/learn/rest-apis";
      }, {
        label: "Nextiva WorkItem Service";
        url: "https://developer.nextiva.com/nextiva/docs/workitem-service";
      }, {
        label: "Nextiva ncx-sdk";
        url: "https://github.com/Nextiva/ncx-sdk";
     }];
     notes: readonly ["ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "nextiva-contact-center-api-base";
     label: "Nextiva Contact Center API base URL";
     required: true;
   }, {
     id: "nextiva-contact-center-api-access";
     label: "Nextiva Contact Center API access";
     required: true;
   }, {
     id: "nextiva-contact-center-routing";
     label: "Nextiva queue/campaign/routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.nextiva";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "host-configured";
        }];
        implementationStrategy: "direct-http-support-slice";
        sdkDecision: "ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
  };
  name: "Nextiva Contact Center";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "nextiva.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-nextiva";
  provider: "nextiva";
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
| `directions` | ( \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"` \| `"receive-only"` \| `"send-only"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"official"` \| `"community"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `false`; \}\] |
| `category` | `"contact-center"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Nextiva Contact Center REST APIs"`; `url`: `"https://www.nextiva.com/resources/learn/rest-apis"`; \}, \{ `label`: `"Nextiva WorkItem Service"`; `url`: `"https://developer.nextiva.com/nextiva/docs/workitem-service"`; \}, \{ `label`: `"Nextiva ncx-sdk"`; `url`: `"https://github.com/Nextiva/ncx-sdk"`; \}\]; `notes`: readonly \[`"ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Nextiva Contact Center REST APIs"`; `url`: `"https://www.nextiva.com/resources/learn/rest-apis"`; \}, \{ `label`: `"Nextiva WorkItem Service"`; `url`: `"https://developer.nextiva.com/nextiva/docs/workitem-service"`; \}, \{ `label`: `"Nextiva ncx-sdk"`; `url`: `"https://github.com/Nextiva/ncx-sdk"`; \}\] |
| `coverage.notes` | readonly \[`"ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"nextiva-contact-center-api-base"`; `label`: `"Nextiva Contact Center API base URL"`; `required`: `true`; \}, \{ `id`: `"nextiva-contact-center-api-access"`; `label`: `"Nextiva Contact Center API access"`; `required`: `true`; \}, \{ `id`: `"nextiva-contact-center-routing"`; `label`: `"Nextiva queue/campaign/routing configuration"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.nextiva"` |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"direct-http-support-slice"`; `sdkDecision`: `"ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request."`; `verifiedAt`: `"2026-06-21"`; \}; `manifestOnlySafe`: `true`; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"direct-http-support-slice"`; `sdkDecision`: `"ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request."`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.implementation.sdkDecision` | `"ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request."` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.manifestOnlySafe` | `true` |
| `name` | `"Nextiva Contact Center"` |
| `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"nextiva.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| `packageName` | `"@cognidesk/integration-contact-center-nextiva"` |
| `provider` | `"nextiva"` |
| `trustLevel` | `"official"` |

***

### nextivaProviderManifestInput

```ts
const nextivaProviderManifestInput: {
  capabilities: readonly [{
     capability: "handoff";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contactTransfer";
        label: "contactTransfer";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: false;
  }];
  category: "contact-center";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Nextiva Contact Center REST APIs";
        url: "https://www.nextiva.com/resources/learn/rest-apis";
      }, {
        label: "Nextiva WorkItem Service";
        url: "https://developer.nextiva.com/nextiva/docs/workitem-service";
      }, {
        label: "Nextiva ncx-sdk";
        url: "https://github.com/Nextiva/ncx-sdk";
     }];
     notes: readonly ["ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "nextiva-contact-center-api-base";
     label: "Nextiva Contact Center API base URL";
     required: true;
   }, {
     id: "nextiva-contact-center-api-access";
     label: "Nextiva Contact Center API access";
     required: true;
   }, {
     id: "nextiva-contact-center-routing";
     label: "Nextiva queue/campaign/routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.nextiva";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "host-configured";
        }];
        implementationStrategy: "direct-http-support-slice";
        sdkDecision: "ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
  };
  name: "Nextiva Contact Center";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "nextiva.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-nextiva";
  provider: "nextiva";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `false`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Nextiva Contact Center REST APIs"`; `url`: `"https://www.nextiva.com/resources/learn/rest-apis"`; \}, \{ `label`: `"Nextiva WorkItem Service"`; `url`: `"https://developer.nextiva.com/nextiva/docs/workitem-service"`; \}, \{ `label`: `"Nextiva ncx-sdk"`; `url`: `"https://github.com/Nextiva/ncx-sdk"`; \}\]; `notes`: readonly \[`"ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Nextiva Contact Center REST APIs"`; `url`: `"https://www.nextiva.com/resources/learn/rest-apis"`; \}, \{ `label`: `"Nextiva WorkItem Service"`; `url`: `"https://developer.nextiva.com/nextiva/docs/workitem-service"`; \}, \{ `label`: `"Nextiva ncx-sdk"`; `url`: `"https://github.com/Nextiva/ncx-sdk"`; \}\] |
| `coverage.notes` | readonly \[`"ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `id`: `"nextiva-contact-center-api-base"`; `label`: `"Nextiva Contact Center API base URL"`; `required`: `true`; \}, \{ `id`: `"nextiva-contact-center-api-access"`; `label`: `"Nextiva Contact Center API access"`; `required`: `true`; \}, \{ `id`: `"nextiva-contact-center-routing"`; `label`: `"Nextiva queue/campaign/routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.nextiva"` |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"direct-http-support-slice"`; `sdkDecision`: `"ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request."`; `verifiedAt`: `"2026-06-21"`; \}; `manifestOnlySafe`: `true`; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"direct-http-support-slice"`; `sdkDecision`: `"ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request."`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.implementation.sdkDecision` | `"ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request."` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.manifestOnlySafe` | `true` |
| <a id="property-name"></a> `name` | `"Nextiva Contact Center"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"nextiva.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-nextiva"` |
| <a id="property-provider"></a> `provider` | `"nextiva"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### nextivaSupportSlice

```ts
const nextivaSupportSlice: {
  allowedOperations: readonly [{
     alias: "contact-center.handoff.request";
     checksum: "not-applicable-host-configured";
     id: "configuredHandoff";
     method: "POST";
     path: "host-configured";
     source: "host-configured";
  }];
  implementationStrategy: "direct-http-support-slice";
  sdkDecision: "ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request.";
  verifiedAt: "2026-06-21";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"direct-http-support-slice"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"ncx-sdk/ncx-web-sdk require API-fit and license review before adoption; this package keeps configured support operations and a mutation-gated extension request."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-21"` |
