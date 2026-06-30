# integrations/contact-center/8x8/dist/manifest

## Variables

### eightByEightProviderManifest

```ts
const eightByEightProviderManifest: {
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
     capability: "update-provider-object";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "update-provider-object";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "agent";
        label: "agent";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "contact-center";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "8x8 Contact Center Call API OpenAPI";
        url: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json";
      }, {
        label: "8x8 Contact Center Agent Status OpenAPI";
        url: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json";
      }, {
        label: "8x8 Partner SDK";
        url: "https://developer.8x8.com/tech-partner/docs/partner-sdk-integration-guide";
     }];
     notes: readonly ["No suitable official server-side JavaScript Contact Center SDK was verified.", "The official @8x8/pui-partner-comm package is a partner iframe communication SDK, not a backend Contact Center API client.", "The runtime constructs a fail-closed built-in REST adapter from baseUrl/API credentials and keeps rawClient available as an override.", "OpenAPI operation IDs are retained as the reviewed path allowlist for package-owned REST calls."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "8x8-contact-center-api-base";
     label: "8x8 Contact Center API base URL";
     required: true;
   }, {
     id: "8x8-contact-center-api-access";
     label: "8x8 Contact Center API access";
     required: true;
   }, {
     id: "8x8-contact-center-routing";
     label: "8x8 queue/campaign routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.8x8";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "provider-rest-adapter";
         }, {
           alias: "contact-center.contact.start";
           checksum: "sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62";
           id: "placePhoneCall";
           method: "POST";
           path: "/tenants/{tenantId}/calls";
           source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json";
         }, {
           alias: "contact-center.contact.end";
           checksum: "sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62";
           id: "deletePhoneInteraction";
           method: "DELETE";
           path: "/tenants/{tenantId}/calls/{interactionId}";
           source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json";
         }, {
           alias: "contact-center.agent.status.update";
           checksum: "sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae";
           id: "setagentstatus";
           method: "PUT";
           path: "/tenants/{tenantId}/agentstatus/agents/{agentId}";
           source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "0.15.0";
              license: "SEE LICENSE IN LICENSE.md";
              package: "@8x8/pui-partner-comm";
              reason: "Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations.";
              result: "browser-partner-iframe-sdk-not-contact-center-api-client";
           }];
           defaultRestPolicy: "fail-closed-built-in-rest-adapter-with-typed-raw-client-override";
           result: "no-suitable-server-side-contact-center-sdk";
           typedClientOverride: "EightByEightRawClient";
        };
        runtimePolicy: {
           defaultClient: "built-in-provider-rest-adapter";
           failClosed: true;
           override: "createEightByEightClient({ rawClient })";
           requestOptions: readonly ["baseUrl", "accessToken", "authorizationHeader", "apiKey", "apiKeyHeaderName", "fetch", "signal", "timeoutMs", "retry"];
        };
        sdkDecision: "No suitable official server-side JavaScript Contact Center SDK was verified. The official @8x8/pui-partner-comm SDK is for iframe partner integrations, so this package provides a fail-closed REST adapter with a rawClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        failClosed: true;
        rawClientOverride: "EightByEightClient.rawClient";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "0.15.0";
           license: "SEE LICENSE IN LICENSE.md";
           package: "@8x8/pui-partner-comm";
           reason: "Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations.";
           result: "browser-partner-iframe-sdk-not-contact-center-api-client";
        }];
        defaultRestPolicy: "fail-closed-built-in-rest-adapter-with-typed-raw-client-override";
        result: "no-suitable-server-side-contact-center-sdk";
        typedClientOverride: "EightByEightRawClient";
     };
  };
  name: "8x8 Contact Center";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.contact.start";
     capability: "send";
     providerObject: "contact";
   }, {
     alias: "contact-center.contact.end";
     capability: "update-provider-object";
     providerObject: "contact";
   }, {
     alias: "contact-center.agent.status.update";
     capability: "update-provider-object";
     providerObject: "agent";
  }];
  packageName: "@cognidesk/integration-contact-center-8x8";
  provider: "8x8";
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
| `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"update-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"update-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"agent"`; `label`: `"agent"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"contact-center"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"8x8 Contact Center Call API OpenAPI"`; `url`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `label`: `"8x8 Contact Center Agent Status OpenAPI"`; `url`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`; \}, \{ `label`: `"8x8 Partner SDK"`; `url`: `"https://developer.8x8.com/tech-partner/docs/partner-sdk-integration-guide"`; \}\]; `notes`: readonly \[`"No suitable official server-side JavaScript Contact Center SDK was verified."`, `"The official @8x8/pui-partner-comm package is a partner iframe communication SDK, not a backend Contact Center API client."`, `"The runtime constructs a fail-closed built-in REST adapter from baseUrl/API credentials and keeps rawClient available as an override."`, `"OpenAPI operation IDs are retained as the reviewed path allowlist for package-owned REST calls."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"8x8 Contact Center Call API OpenAPI"`; `url`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `label`: `"8x8 Contact Center Agent Status OpenAPI"`; `url`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`; \}, \{ `label`: `"8x8 Partner SDK"`; `url`: `"https://developer.8x8.com/tech-partner/docs/partner-sdk-integration-guide"`; \}\] |
| `coverage.notes` | readonly \[`"No suitable official server-side JavaScript Contact Center SDK was verified."`, `"The official @8x8/pui-partner-comm package is a partner iframe communication SDK, not a backend Contact Center API client."`, `"The runtime constructs a fail-closed built-in REST adapter from baseUrl/API credentials and keeps rawClient available as an override."`, `"OpenAPI operation IDs are retained as the reviewed path allowlist for package-owned REST calls."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"8x8-contact-center-api-base"`; `label`: `"8x8 Contact Center API base URL"`; `required`: `true`; \}, \{ `id`: `"8x8-contact-center-api-access"`; `label`: `"8x8 Contact Center API access"`; `required`: `true`; \}, \{ `id`: `"8x8-contact-center-routing"`; `label`: `"8x8 queue/campaign routing configuration"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.8x8"` |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`; `id`: `"placePhoneCall"`; `method`: `"POST"`; `path`: `"/tenants/{tenantId}/calls"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`; `id`: `"deletePhoneInteraction"`; `method`: `"DELETE"`; `path`: `"/tenants/{tenantId}/calls/{interactionId}"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `alias`: `"contact-center.agent.status.update"`; `checksum`: `"sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae"`; `id`: `"setagentstatus"`; `method`: `"PUT"`; `path`: `"/tenants/{tenantId}/agentstatus/agents/{agentId}"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-contact-center-sdk"`; `typedClientOverride`: `"EightByEightRawClient"`; \}; `runtimePolicy`: \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `failClosed`: `true`; `override`: `"createEightByEightClient({ rawClient })"`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; \}; `sdkDecision`: `"No suitable official server-side JavaScript Contact Center SDK was verified. The official @8x8/pui-partner-comm SDK is for iframe partner integrations, so this package provides a fail-closed REST adapter with a rawClient override."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `failClosed`: `true`; `rawClientOverride`: `"EightByEightClient.rawClient"`; `strategy`: `"provider-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-contact-center-sdk"`; `typedClientOverride`: `"EightByEightRawClient"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`; `id`: `"placePhoneCall"`; `method`: `"POST"`; `path`: `"/tenants/{tenantId}/calls"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`; `id`: `"deletePhoneInteraction"`; `method`: `"DELETE"`; `path`: `"/tenants/{tenantId}/calls/{interactionId}"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `alias`: `"contact-center.agent.status.update"`; `checksum`: `"sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae"`; `id`: `"setagentstatus"`; `method`: `"PUT"`; `path`: `"/tenants/{tenantId}/agentstatus/agents/{agentId}"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-contact-center-sdk"`; `typedClientOverride`: `"EightByEightRawClient"`; \}; `runtimePolicy`: \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `failClosed`: `true`; `override`: `"createEightByEightClient({ rawClient })"`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; \}; `sdkDecision`: `"No suitable official server-side JavaScript Contact Center SDK was verified. The official @8x8/pui-partner-comm SDK is for iframe partner integrations, so this package provides a fail-closed REST adapter with a rawClient override."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`; `id`: `"placePhoneCall"`; `method`: `"POST"`; `path`: `"/tenants/{tenantId}/calls"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`; `id`: `"deletePhoneInteraction"`; `method`: `"DELETE"`; `path`: `"/tenants/{tenantId}/calls/{interactionId}"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `alias`: `"contact-center.agent.status.update"`; `checksum`: `"sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae"`; `id`: `"setagentstatus"`; `method`: `"PUT"`; `path`: `"/tenants/{tenantId}/agentstatus/agents/{agentId}"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-contact-center-sdk"`; `typedClientOverride`: `"EightByEightRawClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-suitable-server-side-contact-center-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"EightByEightRawClient"` |
| `metadata.implementation.runtimePolicy` | \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `failClosed`: `true`; `override`: `"createEightByEightClient({ rawClient })"`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; \} |
| `metadata.implementation.runtimePolicy.defaultClient` | `"built-in-provider-rest-adapter"` |
| `metadata.implementation.runtimePolicy.failClosed` | `true` |
| `metadata.implementation.runtimePolicy.override` | `"createEightByEightClient({ rawClient })"` |
| `metadata.implementation.runtimePolicy.requestOptions` | readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\] |
| `metadata.implementation.sdkDecision` | `"No suitable official server-side JavaScript Contact Center SDK was verified. The official @8x8/pui-partner-comm SDK is for iframe partner integrations, so this package provides a fail-closed REST adapter with a rawClient override."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `failClosed`: `true`; `rawClientOverride`: `"EightByEightClient.rawClient"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapter.failClosed` | `true` |
| `metadata.providerRestAdapter.rawClientOverride` | `"EightByEightClient.rawClient"` |
| `metadata.providerRestAdapter.strategy` | `"provider-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-contact-center-sdk"`; `typedClientOverride`: `"EightByEightRawClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-suitable-server-side-contact-center-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"EightByEightRawClient"` |
| `name` | `"8x8 Contact Center"` |
| `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"contact-center.contact.end"`; `capability`: `"update-provider-object"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"contact-center.agent.status.update"`; `capability`: `"update-provider-object"`; `providerObject`: `"agent"`; \}\] |
| `packageName` | `"@cognidesk/integration-contact-center-8x8"` |
| `provider` | `"8x8"` |
| `trustLevel` | `"official"` |

***

### eightByEightProviderManifestInput

```ts
const eightByEightProviderManifestInput: {
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
     capability: "update-provider-object";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "update-provider-object";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "agent";
        label: "agent";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "contact-center";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "8x8 Contact Center Call API OpenAPI";
        url: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json";
      }, {
        label: "8x8 Contact Center Agent Status OpenAPI";
        url: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json";
      }, {
        label: "8x8 Partner SDK";
        url: "https://developer.8x8.com/tech-partner/docs/partner-sdk-integration-guide";
     }];
     notes: readonly ["No suitable official server-side JavaScript Contact Center SDK was verified.", "The official @8x8/pui-partner-comm package is a partner iframe communication SDK, not a backend Contact Center API client.", "The runtime constructs a fail-closed built-in REST adapter from baseUrl/API credentials and keeps rawClient available as an override.", "OpenAPI operation IDs are retained as the reviewed path allowlist for package-owned REST calls."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "8x8-contact-center-api-base";
     label: "8x8 Contact Center API base URL";
     required: true;
   }, {
     id: "8x8-contact-center-api-access";
     label: "8x8 Contact Center API access";
     required: true;
   }, {
     id: "8x8-contact-center-routing";
     label: "8x8 queue/campaign routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.8x8";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "provider-rest-adapter";
         }, {
           alias: "contact-center.contact.start";
           checksum: "sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62";
           id: "placePhoneCall";
           method: "POST";
           path: "/tenants/{tenantId}/calls";
           source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json";
         }, {
           alias: "contact-center.contact.end";
           checksum: "sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62";
           id: "deletePhoneInteraction";
           method: "DELETE";
           path: "/tenants/{tenantId}/calls/{interactionId}";
           source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json";
         }, {
           alias: "contact-center.agent.status.update";
           checksum: "sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae";
           id: "setagentstatus";
           method: "PUT";
           path: "/tenants/{tenantId}/agentstatus/agents/{agentId}";
           source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "0.15.0";
              license: "SEE LICENSE IN LICENSE.md";
              package: "@8x8/pui-partner-comm";
              reason: "Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations.";
              result: "browser-partner-iframe-sdk-not-contact-center-api-client";
           }];
           defaultRestPolicy: "fail-closed-built-in-rest-adapter-with-typed-raw-client-override";
           result: "no-suitable-server-side-contact-center-sdk";
           typedClientOverride: "EightByEightRawClient";
        };
        runtimePolicy: {
           defaultClient: "built-in-provider-rest-adapter";
           failClosed: true;
           override: "createEightByEightClient({ rawClient })";
           requestOptions: readonly ["baseUrl", "accessToken", "authorizationHeader", "apiKey", "apiKeyHeaderName", "fetch", "signal", "timeoutMs", "retry"];
        };
        sdkDecision: "No suitable official server-side JavaScript Contact Center SDK was verified. The official @8x8/pui-partner-comm SDK is for iframe partner integrations, so this package provides a fail-closed REST adapter with a rawClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        failClosed: true;
        rawClientOverride: "EightByEightClient.rawClient";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "0.15.0";
           license: "SEE LICENSE IN LICENSE.md";
           package: "@8x8/pui-partner-comm";
           reason: "Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations.";
           result: "browser-partner-iframe-sdk-not-contact-center-api-client";
        }];
        defaultRestPolicy: "fail-closed-built-in-rest-adapter-with-typed-raw-client-override";
        result: "no-suitable-server-side-contact-center-sdk";
        typedClientOverride: "EightByEightRawClient";
     };
  };
  name: "8x8 Contact Center";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.contact.start";
     capability: "send";
     providerObject: "contact";
   }, {
     alias: "contact-center.contact.end";
     capability: "update-provider-object";
     providerObject: "contact";
   }, {
     alias: "contact-center.agent.status.update";
     capability: "update-provider-object";
     providerObject: "agent";
  }];
  packageName: "@cognidesk/integration-contact-center-8x8";
  provider: "8x8";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"update-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"update-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"agent"`; `label`: `"agent"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"8x8 Contact Center Call API OpenAPI"`; `url`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `label`: `"8x8 Contact Center Agent Status OpenAPI"`; `url`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`; \}, \{ `label`: `"8x8 Partner SDK"`; `url`: `"https://developer.8x8.com/tech-partner/docs/partner-sdk-integration-guide"`; \}\]; `notes`: readonly \[`"No suitable official server-side JavaScript Contact Center SDK was verified."`, `"The official @8x8/pui-partner-comm package is a partner iframe communication SDK, not a backend Contact Center API client."`, `"The runtime constructs a fail-closed built-in REST adapter from baseUrl/API credentials and keeps rawClient available as an override."`, `"OpenAPI operation IDs are retained as the reviewed path allowlist for package-owned REST calls."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"8x8 Contact Center Call API OpenAPI"`; `url`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `label`: `"8x8 Contact Center Agent Status OpenAPI"`; `url`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`; \}, \{ `label`: `"8x8 Partner SDK"`; `url`: `"https://developer.8x8.com/tech-partner/docs/partner-sdk-integration-guide"`; \}\] |
| `coverage.notes` | readonly \[`"No suitable official server-side JavaScript Contact Center SDK was verified."`, `"The official @8x8/pui-partner-comm package is a partner iframe communication SDK, not a backend Contact Center API client."`, `"The runtime constructs a fail-closed built-in REST adapter from baseUrl/API credentials and keeps rawClient available as an override."`, `"OpenAPI operation IDs are retained as the reviewed path allowlist for package-owned REST calls."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `id`: `"8x8-contact-center-api-base"`; `label`: `"8x8 Contact Center API base URL"`; `required`: `true`; \}, \{ `id`: `"8x8-contact-center-api-access"`; `label`: `"8x8 Contact Center API access"`; `required`: `true`; \}, \{ `id`: `"8x8-contact-center-routing"`; `label`: `"8x8 queue/campaign routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.8x8"` |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`; `id`: `"placePhoneCall"`; `method`: `"POST"`; `path`: `"/tenants/{tenantId}/calls"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`; `id`: `"deletePhoneInteraction"`; `method`: `"DELETE"`; `path`: `"/tenants/{tenantId}/calls/{interactionId}"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `alias`: `"contact-center.agent.status.update"`; `checksum`: `"sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae"`; `id`: `"setagentstatus"`; `method`: `"PUT"`; `path`: `"/tenants/{tenantId}/agentstatus/agents/{agentId}"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-contact-center-sdk"`; `typedClientOverride`: `"EightByEightRawClient"`; \}; `runtimePolicy`: \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `failClosed`: `true`; `override`: `"createEightByEightClient({ rawClient })"`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; \}; `sdkDecision`: `"No suitable official server-side JavaScript Contact Center SDK was verified. The official @8x8/pui-partner-comm SDK is for iframe partner integrations, so this package provides a fail-closed REST adapter with a rawClient override."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `failClosed`: `true`; `rawClientOverride`: `"EightByEightClient.rawClient"`; `strategy`: `"provider-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-contact-center-sdk"`; `typedClientOverride`: `"EightByEightRawClient"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`; `id`: `"placePhoneCall"`; `method`: `"POST"`; `path`: `"/tenants/{tenantId}/calls"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`; `id`: `"deletePhoneInteraction"`; `method`: `"DELETE"`; `path`: `"/tenants/{tenantId}/calls/{interactionId}"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `alias`: `"contact-center.agent.status.update"`; `checksum`: `"sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae"`; `id`: `"setagentstatus"`; `method`: `"PUT"`; `path`: `"/tenants/{tenantId}/agentstatus/agents/{agentId}"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-contact-center-sdk"`; `typedClientOverride`: `"EightByEightRawClient"`; \}; `runtimePolicy`: \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `failClosed`: `true`; `override`: `"createEightByEightClient({ rawClient })"`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; \}; `sdkDecision`: `"No suitable official server-side JavaScript Contact Center SDK was verified. The official @8x8/pui-partner-comm SDK is for iframe partner integrations, so this package provides a fail-closed REST adapter with a rawClient override."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`; `id`: `"placePhoneCall"`; `method`: `"POST"`; `path`: `"/tenants/{tenantId}/calls"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`; `id`: `"deletePhoneInteraction"`; `method`: `"DELETE"`; `path`: `"/tenants/{tenantId}/calls/{interactionId}"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `alias`: `"contact-center.agent.status.update"`; `checksum`: `"sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae"`; `id`: `"setagentstatus"`; `method`: `"PUT"`; `path`: `"/tenants/{tenantId}/agentstatus/agents/{agentId}"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-contact-center-sdk"`; `typedClientOverride`: `"EightByEightRawClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-suitable-server-side-contact-center-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"EightByEightRawClient"` |
| `metadata.implementation.runtimePolicy` | \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `failClosed`: `true`; `override`: `"createEightByEightClient({ rawClient })"`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; \} |
| `metadata.implementation.runtimePolicy.defaultClient` | `"built-in-provider-rest-adapter"` |
| `metadata.implementation.runtimePolicy.failClosed` | `true` |
| `metadata.implementation.runtimePolicy.override` | `"createEightByEightClient({ rawClient })"` |
| `metadata.implementation.runtimePolicy.requestOptions` | readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\] |
| `metadata.implementation.sdkDecision` | `"No suitable official server-side JavaScript Contact Center SDK was verified. The official @8x8/pui-partner-comm SDK is for iframe partner integrations, so this package provides a fail-closed REST adapter with a rawClient override."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `failClosed`: `true`; `rawClientOverride`: `"EightByEightClient.rawClient"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapter.failClosed` | `true` |
| `metadata.providerRestAdapter.rawClientOverride` | `"EightByEightClient.rawClient"` |
| `metadata.providerRestAdapter.strategy` | `"provider-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-contact-center-sdk"`; `typedClientOverride`: `"EightByEightRawClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-suitable-server-side-contact-center-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"EightByEightRawClient"` |
| <a id="property-name"></a> `name` | `"8x8 Contact Center"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"contact-center.contact.end"`; `capability`: `"update-provider-object"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"contact-center.agent.status.update"`; `capability`: `"update-provider-object"`; `providerObject`: `"agent"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-8x8"` |
| <a id="property-provider"></a> `provider` | `"8x8"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### eightByEightProviderSdkDecision

```ts
const eightByEightProviderSdkDecision: {
  checkedAt: "2026-06-25";
  checkedPackages: readonly [{
     checkedVersion: "0.15.0";
     license: "SEE LICENSE IN LICENSE.md";
     package: "@8x8/pui-partner-comm";
     reason: "Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations.";
     result: "browser-partner-iframe-sdk-not-contact-center-api-client";
  }];
  defaultRestPolicy: "fail-closed-built-in-rest-adapter-with-typed-raw-client-override";
  result: "no-suitable-server-side-contact-center-sdk";
  typedClientOverride: "EightByEightRawClient";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-checkedat"></a> `checkedAt` | `"2026-06-25"` |
| <a id="property-checkedpackages"></a> `checkedPackages` | readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\] |
| <a id="property-defaultrestpolicy"></a> `defaultRestPolicy` | `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"` |
| <a id="property-result"></a> `result` | `"no-suitable-server-side-contact-center-sdk"` |
| <a id="property-typedclientoverride"></a> `typedClientOverride` | `"EightByEightRawClient"` |

***

### eightByEightSupportSlice

```ts
const eightByEightSupportSlice: {
  adapterKind: "no-official-sdk-rest-adapter";
  allowedOperations: readonly [{
     alias: "contact-center.handoff.request";
     checksum: "not-applicable-host-configured";
     id: "configuredHandoff";
     method: "POST";
     path: "host-configured";
     source: "provider-rest-adapter";
   }, {
     alias: "contact-center.contact.start";
     checksum: "sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62";
     id: "placePhoneCall";
     method: "POST";
     path: "/tenants/{tenantId}/calls";
     source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json";
   }, {
     alias: "contact-center.contact.end";
     checksum: "sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62";
     id: "deletePhoneInteraction";
     method: "DELETE";
     path: "/tenants/{tenantId}/calls/{interactionId}";
     source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json";
   }, {
     alias: "contact-center.agent.status.update";
     checksum: "sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae";
     id: "setagentstatus";
     method: "PUT";
     path: "/tenants/{tenantId}/agentstatus/agents/{agentId}";
     source: "https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json";
  }];
  implementationStrategy: "provider-rest-adapter";
  providerSdkDecision: {
     checkedAt: "2026-06-25";
     checkedPackages: readonly [{
        checkedVersion: "0.15.0";
        license: "SEE LICENSE IN LICENSE.md";
        package: "@8x8/pui-partner-comm";
        reason: "Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations.";
        result: "browser-partner-iframe-sdk-not-contact-center-api-client";
     }];
     defaultRestPolicy: "fail-closed-built-in-rest-adapter-with-typed-raw-client-override";
     result: "no-suitable-server-side-contact-center-sdk";
     typedClientOverride: "EightByEightRawClient";
  };
  runtimePolicy: {
     defaultClient: "built-in-provider-rest-adapter";
     failClosed: true;
     override: "createEightByEightClient({ rawClient })";
     requestOptions: readonly ["baseUrl", "accessToken", "authorizationHeader", "apiKey", "apiKeyHeaderName", "fetch", "signal", "timeoutMs", "retry"];
  };
  sdkDecision: "No suitable official server-side JavaScript Contact Center SDK was verified. The official @8x8/pui-partner-comm SDK is for iframe partner integrations, so this package provides a fail-closed REST adapter with a rawClient override.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind"></a> `adapterKind` | `"no-official-sdk-rest-adapter"` |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`; `id`: `"placePhoneCall"`; `method`: `"POST"`; `path`: `"/tenants/{tenantId}/calls"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:87445b35060c46e8e70b23636c77d33a1ff2558eb526aefb45447752132cfe62"`; `id`: `"deletePhoneInteraction"`; `method`: `"DELETE"`; `path`: `"/tenants/{tenantId}/calls/{interactionId}"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_call_api.json"`; \}, \{ `alias`: `"contact-center.agent.status.update"`; `checksum`: `"sha256:89ba77f48f7a471fb21c34dfb0c7170c1a90b7ea08da8de65981049ade09c2ae"`; `id`: `"setagentstatus"`; `method`: `"PUT"`; `path`: `"/tenants/{tenantId}/agentstatus/agents/{agentId}"`; `source`: `"https://raw.githubusercontent.com/8x8Cloud/public-developer-docs/master/docs_oas/actions-events/contact_center_agent_status_api.json"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"provider-rest-adapter"` |
| <a id="property-providersdkdecision"></a> `providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-contact-center-sdk"`; `typedClientOverride`: `"EightByEightRawClient"`; \} |
| `providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.15.0"`; `license`: `"SEE LICENSE IN LICENSE.md"`; `package`: `"@8x8/pui-partner-comm"`; `reason`: `"Official package is for 8x8 platform-ui partner iframe communication and does not expose server-side Contact Center REST operations."`; `result`: `"browser-partner-iframe-sdk-not-contact-center-api-client"`; \}\] |
| `providerSdkDecision.defaultRestPolicy` | `"fail-closed-built-in-rest-adapter-with-typed-raw-client-override"` |
| `providerSdkDecision.result` | `"no-suitable-server-side-contact-center-sdk"` |
| `providerSdkDecision.typedClientOverride` | `"EightByEightRawClient"` |
| <a id="property-runtimepolicy"></a> `runtimePolicy` | \{ `defaultClient`: `"built-in-provider-rest-adapter"`; `failClosed`: `true`; `override`: `"createEightByEightClient({ rawClient })"`; `requestOptions`: readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\]; \} |
| `runtimePolicy.defaultClient` | `"built-in-provider-rest-adapter"` |
| `runtimePolicy.failClosed` | `true` |
| `runtimePolicy.override` | `"createEightByEightClient({ rawClient })"` |
| `runtimePolicy.requestOptions` | readonly \[`"baseUrl"`, `"accessToken"`, `"authorizationHeader"`, `"apiKey"`, `"apiKeyHeaderName"`, `"fetch"`, `"signal"`, `"timeoutMs"`, `"retry"`\] |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"No suitable official server-side JavaScript Contact Center SDK was verified. The official @8x8/pui-partner-comm SDK is for iframe partner integrations, so this package provides a fail-closed REST adapter with a rawClient override."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-25"` |
