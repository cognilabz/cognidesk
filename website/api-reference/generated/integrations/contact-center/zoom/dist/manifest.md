# integrations/contact-center/zoom/dist/manifest

## Variables

### zoomContactCenterProviderManifest

```ts
const zoomContactCenterProviderManifest: {
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
     capability: "send";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact";
        label: "contact";
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
        label: "Zoom Contact Center REST OpenAPI";
        url: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
      }, {
        label: "Zoom Contact Center Webhooks OpenAPI";
        url: "https://developers.zoom.us/api-hub/contact-center/events/webhooks.json";
      }, {
        label: "Zoom Apps SDK";
        url: "https://github.com/zoom/appssdk";
     }];
     notes: readonly ["@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "zoom-contact-center-account";
     label: "Zoom Contact Center account/API base";
     required: true;
   }, {
     id: "zoom-contact-center-api-access";
     label: "Zoom OAuth access";
     required: true;
   }, {
     id: "zoom-contact-center-routing";
     label: "Zoom queue/channel routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.zoom";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        allowedOperations: readonly [{
           alias: "contact-center.contact.start";
           checksum: "sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7";
           id: "Startworkitemengagement";
           method: "POST";
           path: "/contact_center/engagement";
           source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
         }, {
           alias: "contact-center.contact.read";
           checksum: "sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7";
           id: "getEngagement";
           method: "GET";
           path: "/contact_center/engagements/{engagementId}";
           source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
        }];
        implementationStrategy: "generated-support-slice";
        sdkDecision: "@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
  };
  name: "Zoom Contact Center";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.contact.start";
     capability: "send";
     providerObject: "contact";
   }, {
     alias: "contact-center.contact.read";
     capability: "read-provider-object";
     providerObject: "contact";
   }, {
     alias: "zoom.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-zoom";
  provider: "zoom";
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
| `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `false`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `false`; \}\] |
| `category` | `"contact-center"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Zoom Contact Center REST OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `label`: `"Zoom Contact Center Webhooks OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/events/webhooks.json"`; \}, \{ `label`: `"Zoom Apps SDK"`; `url`: `"https://github.com/zoom/appssdk"`; \}\]; `notes`: readonly \[`"@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Zoom Contact Center REST OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `label`: `"Zoom Contact Center Webhooks OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/events/webhooks.json"`; \}, \{ `label`: `"Zoom Apps SDK"`; `url`: `"https://github.com/zoom/appssdk"`; \}\] |
| `coverage.notes` | readonly \[`"@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"zoom-contact-center-account"`; `label`: `"Zoom Contact Center account/API base"`; `required`: `true`; \}, \{ `id`: `"zoom-contact-center-api-access"`; `label`: `"Zoom OAuth access"`; `required`: `true`; \}, \{ `id`: `"zoom-contact-center-routing"`; `label`: `"Zoom queue/channel routing configuration"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.zoom"` |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."`; `verifiedAt`: `"2026-06-21"`; \}; `manifestOnlySafe`: `true`; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"generated-support-slice"` |
| `metadata.implementation.sdkDecision` | `"@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.manifestOnlySafe` | `true` |
| `name` | `"Zoom Contact Center"` |
| `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"contact-center.contact.read"`; `capability`: `"read-provider-object"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"zoom.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| `packageName` | `"@cognidesk/integration-contact-center-zoom"` |
| `provider` | `"zoom"` |
| `trustLevel` | `"official"` |

***

### zoomContactCenterProviderManifestInput

```ts
const zoomContactCenterProviderManifestInput: {
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
     capability: "send";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact";
        label: "contact";
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
        label: "Zoom Contact Center REST OpenAPI";
        url: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
      }, {
        label: "Zoom Contact Center Webhooks OpenAPI";
        url: "https://developers.zoom.us/api-hub/contact-center/events/webhooks.json";
      }, {
        label: "Zoom Apps SDK";
        url: "https://github.com/zoom/appssdk";
     }];
     notes: readonly ["@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "zoom-contact-center-account";
     label: "Zoom Contact Center account/API base";
     required: true;
   }, {
     id: "zoom-contact-center-api-access";
     label: "Zoom OAuth access";
     required: true;
   }, {
     id: "zoom-contact-center-routing";
     label: "Zoom queue/channel routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.zoom";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        allowedOperations: readonly [{
           alias: "contact-center.contact.start";
           checksum: "sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7";
           id: "Startworkitemengagement";
           method: "POST";
           path: "/contact_center/engagement";
           source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
         }, {
           alias: "contact-center.contact.read";
           checksum: "sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7";
           id: "getEngagement";
           method: "GET";
           path: "/contact_center/engagements/{engagementId}";
           source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
        }];
        implementationStrategy: "generated-support-slice";
        sdkDecision: "@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
  };
  name: "Zoom Contact Center";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.contact.start";
     capability: "send";
     providerObject: "contact";
   }, {
     alias: "contact-center.contact.read";
     capability: "read-provider-object";
     providerObject: "contact";
   }, {
     alias: "zoom.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-zoom";
  provider: "zoom";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `false`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `false`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Zoom Contact Center REST OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `label`: `"Zoom Contact Center Webhooks OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/events/webhooks.json"`; \}, \{ `label`: `"Zoom Apps SDK"`; `url`: `"https://github.com/zoom/appssdk"`; \}\]; `notes`: readonly \[`"@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Zoom Contact Center REST OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `label`: `"Zoom Contact Center Webhooks OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/contact-center/events/webhooks.json"`; \}, \{ `label`: `"Zoom Apps SDK"`; `url`: `"https://github.com/zoom/appssdk"`; \}\] |
| `coverage.notes` | readonly \[`"@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `id`: `"zoom-contact-center-account"`; `label`: `"Zoom Contact Center account/API base"`; `required`: `true`; \}, \{ `id`: `"zoom-contact-center-api-access"`; `label`: `"Zoom OAuth access"`; `required`: `true`; \}, \{ `id`: `"zoom-contact-center-routing"`; `label`: `"Zoom queue/channel routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.zoom"` |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."`; `verifiedAt`: `"2026-06-21"`; \}; `manifestOnlySafe`: `true`; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"generated-support-slice"` |
| `metadata.implementation.sdkDecision` | `"@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.manifestOnlySafe` | `true` |
| <a id="property-name"></a> `name` | `"Zoom Contact Center"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"contact-center.contact.read"`; `capability`: `"read-provider-object"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"zoom.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-zoom"` |
| <a id="property-provider"></a> `provider` | `"zoom"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### zoomContactCenterSupportSlice

```ts
const zoomContactCenterSupportSlice: {
  allowedOperations: readonly [{
     alias: "contact-center.contact.start";
     checksum: "sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7";
     id: "Startworkitemengagement";
     method: "POST";
     path: "/contact_center/engagement";
     source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
   }, {
     alias: "contact-center.contact.read";
     checksum: "sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7";
     id: "getEngagement";
     method: "GET";
     path: "/contact_center/engagements/{engagementId}";
     source: "https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json";
  }];
  implementationStrategy: "generated-support-slice";
  sdkDecision: "@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations.";
  verifiedAt: "2026-06-21";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`; `id`: `"Startworkitemengagement"`; `method`: `"POST"`; `path`: `"/contact_center/engagement"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}, \{ `alias`: `"contact-center.contact.read"`; `checksum`: `"sha256:56456cf010ca13ab7edefa0212372d191e10192dfd4cd8f0c5ffb50fa5d2c1c7"`; `id`: `"getEngagement"`; `method`: `"GET"`; `path`: `"/contact_center/engagements/{engagementId}"`; `source`: `"https://developers.zoom.us/api-hub/contact-center/methods/endpoints.json"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"generated-support-slice"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"@zoom/appssdk is an embedded Zoom Apps SDK, not a Contact Center REST client; this package keeps selected official Contact Center REST/webhook operations."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-21"` |
