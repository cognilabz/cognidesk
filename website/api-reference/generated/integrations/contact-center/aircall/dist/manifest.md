# integrations/contact-center/aircall/dist/manifest

## Variables

### aircallProviderManifest

```ts
const aircallProviderManifest: {
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
        label: "Aircall API References";
        url: "https://developer.aircall.io/api-references/";
      }, {
        label: "Aircall Everywhere SDK";
        url: "https://github.com/aircall/aircall-everywhere";
     }];
     notes: readonly ["aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "aircall-api-base";
     label: "Aircall Public API base URL";
     required: true;
   }, {
     id: "aircall-api-access";
     label: "Aircall API access";
     required: true;
   }, {
     id: "aircall-routing";
     label: "Aircall number/team/routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.aircall";
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
        sdkDecision: "aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
  };
  name: "Aircall";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
  }];
  packageName: "@cognidesk/integration-contact-center-aircall";
  provider: "aircall";
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
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Aircall API References"`; `url`: `"https://developer.aircall.io/api-references/"`; \}, \{ `label`: `"Aircall Everywhere SDK"`; `url`: `"https://github.com/aircall/aircall-everywhere"`; \}\]; `notes`: readonly \[`"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Aircall API References"`; `url`: `"https://developer.aircall.io/api-references/"`; \}, \{ `label`: `"Aircall Everywhere SDK"`; `url`: `"https://github.com/aircall/aircall-everywhere"`; \}\] |
| `coverage.notes` | readonly \[`"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"aircall-api-base"`; `label`: `"Aircall Public API base URL"`; `required`: `true`; \}, \{ `id`: `"aircall-api-access"`; `label`: `"Aircall API access"`; `required`: `true`; \}, \{ `id`: `"aircall-routing"`; `label`: `"Aircall number/team/routing configuration"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.aircall"` |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"direct-http-support-slice"`; `sdkDecision`: `"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."`; `verifiedAt`: `"2026-06-21"`; \}; `manifestOnlySafe`: `true`; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"direct-http-support-slice"`; `sdkDecision`: `"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.implementation.sdkDecision` | `"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.manifestOnlySafe` | `true` |
| `name` | `"Aircall"` |
| `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}\] |
| `packageName` | `"@cognidesk/integration-contact-center-aircall"` |
| `provider` | `"aircall"` |
| `trustLevel` | `"official"` |

***

### aircallProviderManifestInput

```ts
const aircallProviderManifestInput: {
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
        label: "Aircall API References";
        url: "https://developer.aircall.io/api-references/";
      }, {
        label: "Aircall Everywhere SDK";
        url: "https://github.com/aircall/aircall-everywhere";
     }];
     notes: readonly ["aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "aircall-api-base";
     label: "Aircall Public API base URL";
     required: true;
   }, {
     id: "aircall-api-access";
     label: "Aircall API access";
     required: true;
   }, {
     id: "aircall-routing";
     label: "Aircall number/team/routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.aircall";
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
        sdkDecision: "aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
  };
  name: "Aircall";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
  }];
  packageName: "@cognidesk/integration-contact-center-aircall";
  provider: "aircall";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Aircall API References"`; `url`: `"https://developer.aircall.io/api-references/"`; \}, \{ `label`: `"Aircall Everywhere SDK"`; `url`: `"https://github.com/aircall/aircall-everywhere"`; \}\]; `notes`: readonly \[`"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Aircall API References"`; `url`: `"https://developer.aircall.io/api-references/"`; \}, \{ `label`: `"Aircall Everywhere SDK"`; `url`: `"https://github.com/aircall/aircall-everywhere"`; \}\] |
| `coverage.notes` | readonly \[`"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `id`: `"aircall-api-base"`; `label`: `"Aircall Public API base URL"`; `required`: `true`; \}, \{ `id`: `"aircall-api-access"`; `label`: `"Aircall API access"`; `required`: `true`; \}, \{ `id`: `"aircall-routing"`; `label`: `"Aircall number/team/routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.aircall"` |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"direct-http-support-slice"`; `sdkDecision`: `"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."`; `verifiedAt`: `"2026-06-21"`; \}; `manifestOnlySafe`: `true`; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"direct-http-support-slice"`; `sdkDecision`: `"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"direct-http-support-slice"` |
| `metadata.implementation.sdkDecision` | `"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.manifestOnlySafe` | `true` |
| <a id="property-name"></a> `name` | `"Aircall"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-aircall"` |
| <a id="property-provider"></a> `provider` | `"aircall"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### aircallSupportSlice

```ts
const aircallSupportSlice: {
  allowedOperations: readonly [{
     alias: "contact-center.handoff.request";
     checksum: "not-applicable-host-configured";
     id: "configuredHandoff";
     method: "POST";
     path: "host-configured";
     source: "host-configured";
  }];
  implementationStrategy: "direct-http-support-slice";
  sdkDecision: "aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls.";
  verifiedAt: "2026-06-21";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"host-configured"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"direct-http-support-slice"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client; this package keeps only configured-path support workflow calls."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-21"` |
