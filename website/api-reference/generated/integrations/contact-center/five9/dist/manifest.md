# integrations/contact-center/five9/dist/manifest

## Variables

### five9ProviderManifest

```ts
const five9ProviderManifest: {
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
  }];
  category: "contact-center";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Five9 Contact Center APIs and SDKs";
        url: "https://www.five9.com/products/capabilities/call-center-apis-and-sdks";
      }, {
        label: "Five9 development program";
        url: "https://www.five9.com/development";
     }];
     notes: readonly ["No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "five9-api-base";
     label: "Five9 API base URL";
     required: true;
   }, {
     id: "five9-api-access";
     label: "Five9 API access";
     required: true;
   }, {
     id: "five9-routing";
     label: "Five9 skill/campaign routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.five9";
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
        sdkDecision: "No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
  };
  name: "Five9";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
  }];
  packageName: "@cognidesk/integration-contact-center-five9";
  provider: "five9";
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
| `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"contact-center"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Five9 Contact Center APIs and SDKs"`; `url`: `"https://www.five9.com/products/capabilities/call-center-apis-and-sdks"`; \}, \{ `label`: `"Five9 development program"`; `url`: `"https://www.five9.com/development"`; \}\]; `notes`: readonly \[`"No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Five9 Contact Center APIs and SDKs"`; `url`: `"https://www.five9.com/products/capabilities/call-center-apis-and-sdks"`; \}, \{ `label`: `"Five9 development program"`; `url`: `"https://www.five9.com/development"`; \}\] |
| `coverage.notes` | readonly \[`"No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"five9-api-base"`; `label`: `"Five9 API base URL"`; `required`: `true`; \}, \{ `id`: `"five9-api-access"`; `label`: `"Five9 API access"`; `required`: `true`; \}, \{ `id`: `"five9-routing"`; `label`: `"Five9 skill/campaign routing configuration"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.five9"` |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"direct-http-support-slice"`; `sdkDecision`: `"No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."`; `verifiedAt`: `"2026-06-21"`; \}; `manifestOnlySafe`: `true`; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"direct-http-support-slice"`; `sdkDecision`: `"No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.implementation.sdkDecision` | `"No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.manifestOnlySafe` | `true` |
| `name` | `"Five9"` |
| `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}\] |
| `packageName` | `"@cognidesk/integration-contact-center-five9"` |
| `provider` | `"five9"` |
| `trustLevel` | `"official"` |

***

### five9ProviderManifestInput

```ts
const five9ProviderManifestInput: {
  capabilities: readonly [{
     capability: "handoff";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contactTransfer";
        label: "contactTransfer";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "contact-center";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Five9 Contact Center APIs and SDKs";
        url: "https://www.five9.com/products/capabilities/call-center-apis-and-sdks";
      }, {
        label: "Five9 development program";
        url: "https://www.five9.com/development";
     }];
     notes: readonly ["No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "five9-api-base";
     label: "Five9 API base URL";
     required: true;
   }, {
     id: "five9-api-access";
     label: "Five9 API access";
     required: true;
   }, {
     id: "five9-routing";
     label: "Five9 skill/campaign routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.five9";
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
        sdkDecision: "No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
  };
  name: "Five9";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
  }];
  packageName: "@cognidesk/integration-contact-center-five9";
  provider: "five9";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Five9 Contact Center APIs and SDKs"`; `url`: `"https://www.five9.com/products/capabilities/call-center-apis-and-sdks"`; \}, \{ `label`: `"Five9 development program"`; `url`: `"https://www.five9.com/development"`; \}\]; `notes`: readonly \[`"No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Five9 Contact Center APIs and SDKs"`; `url`: `"https://www.five9.com/products/capabilities/call-center-apis-and-sdks"`; \}, \{ `label`: `"Five9 development program"`; `url`: `"https://www.five9.com/development"`; \}\] |
| `coverage.notes` | readonly \[`"No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `id`: `"five9-api-base"`; `label`: `"Five9 API base URL"`; `required`: `true`; \}, \{ `id`: `"five9-api-access"`; `label`: `"Five9 API access"`; `required`: `true`; \}, \{ `id`: `"five9-routing"`; `label`: `"Five9 skill/campaign routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.five9"` |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"direct-http-support-slice"`; `sdkDecision`: `"No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."`; `verifiedAt`: `"2026-06-21"`; \}; `manifestOnlySafe`: `true`; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"direct-http-support-slice"`; `sdkDecision`: `"No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.implementation.sdkDecision` | `"No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.manifestOnlySafe` | `true` |
| <a id="property-name"></a> `name` | `"Five9"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-five9"` |
| <a id="property-provider"></a> `provider` | `"five9"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### five9SupportSlice

```ts
const five9SupportSlice: {
  allowedOperations: readonly [{
     alias: "contact-center.handoff.request";
     checksum: "not-applicable-host-configured";
     id: "configuredHandoff";
     method: "POST";
     path: "host-configured";
     source: "host-configured";
  }];
  implementationStrategy: "direct-http-support-slice";
  sdkDecision: "No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented.";
  verifiedAt: "2026-06-21";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"direct-http-support-slice"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"No viable official server-side JavaScript SDK was verified; npm five9 is third-party and stale, while Five9 CRM SDK is browser/ADT-oriented."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-21"` |
