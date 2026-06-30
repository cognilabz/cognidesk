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
        label: "Nextiva Frontend SDKs";
        url: "https://developer.nextiva.com/nextiva/docs/overview-of-sdks";
      }, {
        label: "Nextiva SDK Installation";
        url: "https://developer.nextiva.com/nextiva/docs/sdk-installation";
      }, {
        label: "Nextiva ncx-sdk";
        url: "https://github.com/Nextiva/ncx-sdk";
      }, {
        label: "Nextiva ncx-web-sdk";
        url: "https://github.com/Nextiva/ncx-web-sdk";
     }];
     notes: readonly ["No suitable public server-side Nextiva JavaScript SDK was verified for this provider runtime.", "Runtime calls use a strict typed REST adapter when baseUrl/API credentials are supplied, with NextivaProviderClient available as a host-client override.", "Nextiva's current SDK documentation describes frontend SDKs; public npm packages checked for NCX were frontend/session-oriented, dev/unlicensed, unavailable under documented scoped names, or too loosely typed for package-owned server runtime calls."];
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
        adapterKind: "no-suitable-runtime-sdk-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        hostClientEscapeHatch: "NextivaClientOptions.providerClient";
        hostClientOverride: true;
        implementationStrategy: "provider-rest-adapter";
        packageOwnedRestClient: true;
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "1.5.8";
              license: "MIT";
              package: "ncx-sdk";
              reason: "Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations.";
              result: "not-used-as-runtime-rest-client";
            }, {
              checkedVersion: "0.0.1-dev.6";
              license: "UNLICENSED";
              package: "ncx-web-sdk";
              reason: "Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract.";
              result: "not-used-as-runtime-rest-client";
            }, {
              checkedVersion: "0.0.1-dev.10";
              license: "UNLICENSED";
              package: "ncx-react-sdk";
              reason: "React frontend SDK is not appropriate for this provider runtime package.";
              result: "not-used-as-runtime-rest-client";
           }];
           defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
           result: "no-suitable-server-side-sdk";
           typedClientOverride: "NextivaProviderClient";
        };
        sdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "1.5.8";
              license: "MIT";
              package: "ncx-sdk";
              reason: "Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations.";
              result: "not-used-as-runtime-rest-client";
            }, {
              checkedVersion: "0.0.1-dev.6";
              license: "UNLICENSED";
              package: "ncx-web-sdk";
              reason: "Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check.";
              result: "not-used-as-runtime-rest-client";
            }, {
              checkedVersion: "0.0.1-dev.10";
              license: "UNLICENSED";
              package: "ncx-react-sdk";
              reason: "React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package.";
              result: "not-used-as-runtime-rest-client";
           }];
           result: "no-suitable-server-side-sdk";
        };
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-suitable-runtime-sdk-rest-adapter";
        packageOwnedRestClient: true;
        providerClientOverride: "NextivaProviderClient";
        requestValidation: "json-path-query-header-validated";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "1.5.8";
           license: "MIT";
           package: "ncx-sdk";
           reason: "Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations.";
           result: "not-used-as-runtime-rest-client";
         }, {
           checkedVersion: "0.0.1-dev.6";
           license: "UNLICENSED";
           package: "ncx-web-sdk";
           reason: "Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract.";
           result: "not-used-as-runtime-rest-client";
         }, {
           checkedVersion: "0.0.1-dev.10";
           license: "UNLICENSED";
           package: "ncx-react-sdk";
           reason: "React frontend SDK is not appropriate for this provider runtime package.";
           result: "not-used-as-runtime-rest-client";
        }];
        defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
        result: "no-suitable-server-side-sdk";
        typedClientOverride: "NextivaProviderClient";
     };
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
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Nextiva Contact Center REST APIs"`; `url`: `"https://www.nextiva.com/resources/learn/rest-apis"`; \}, \{ `label`: `"Nextiva WorkItem Service"`; `url`: `"https://developer.nextiva.com/nextiva/docs/workitem-service"`; \}, \{ `label`: `"Nextiva Frontend SDKs"`; `url`: `"https://developer.nextiva.com/nextiva/docs/overview-of-sdks"`; \}, \{ `label`: `"Nextiva SDK Installation"`; `url`: `"https://developer.nextiva.com/nextiva/docs/sdk-installation"`; \}, \{ `label`: `"Nextiva ncx-sdk"`; `url`: `"https://github.com/Nextiva/ncx-sdk"`; \}, \{ `label`: `"Nextiva ncx-web-sdk"`; `url`: `"https://github.com/Nextiva/ncx-web-sdk"`; \}\]; `notes`: readonly \[`"No suitable public server-side Nextiva JavaScript SDK was verified for this provider runtime."`, `"Runtime calls use a strict typed REST adapter when baseUrl/API credentials are supplied, with NextivaProviderClient available as a host-client override."`, `"Nextiva's current SDK documentation describes frontend SDKs; public npm packages checked for NCX were frontend/session-oriented, dev/unlicensed, unavailable under documented scoped names, or too loosely typed for package-owned server runtime calls."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Nextiva Contact Center REST APIs"`; `url`: `"https://www.nextiva.com/resources/learn/rest-apis"`; \}, \{ `label`: `"Nextiva WorkItem Service"`; `url`: `"https://developer.nextiva.com/nextiva/docs/workitem-service"`; \}, \{ `label`: `"Nextiva Frontend SDKs"`; `url`: `"https://developer.nextiva.com/nextiva/docs/overview-of-sdks"`; \}, \{ `label`: `"Nextiva SDK Installation"`; `url`: `"https://developer.nextiva.com/nextiva/docs/sdk-installation"`; \}, \{ `label`: `"Nextiva ncx-sdk"`; `url`: `"https://github.com/Nextiva/ncx-sdk"`; \}, \{ `label`: `"Nextiva ncx-web-sdk"`; `url`: `"https://github.com/Nextiva/ncx-web-sdk"`; \}\] |
| `coverage.notes` | readonly \[`"No suitable public server-side Nextiva JavaScript SDK was verified for this provider runtime."`, `"Runtime calls use a strict typed REST adapter when baseUrl/API credentials are supplied, with NextivaProviderClient available as a host-client override."`, `"Nextiva's current SDK documentation describes frontend SDKs; public npm packages checked for NCX were frontend/session-oriented, dev/unlicensed, unavailable under documented scoped names, or too loosely typed for package-owned server runtime calls."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"nextiva-contact-center-api-base"`; `label`: `"Nextiva Contact Center API base URL"`; `required`: `true`; \}, \{ `id`: `"nextiva-contact-center-api-access"`; `label`: `"Nextiva Contact Center API access"`; `required`: `true`; \}, \{ `id`: `"nextiva-contact-center-routing"`; `label`: `"Nextiva queue/campaign/routing configuration"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.nextiva"` |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `adapterKind`: `"no-suitable-runtime-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `hostClientEscapeHatch`: `"NextivaClientOptions.providerClient"`; `hostClientOverride`: `true`; `implementationStrategy`: `"provider-rest-adapter"`; `packageOwnedRestClient`: `true`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-server-side-sdk"`; `typedClientOverride`: `"NextivaProviderClient"`; \}; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `result`: `"no-suitable-server-side-sdk"`; \}; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"no-suitable-runtime-sdk-rest-adapter"`; `packageOwnedRestClient`: `true`; `providerClientOverride`: `"NextivaProviderClient"`; `requestValidation`: `"json-path-query-header-validated"`; `strategy`: `"provider-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-server-side-sdk"`; `typedClientOverride`: `"NextivaProviderClient"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"no-suitable-runtime-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `hostClientEscapeHatch`: `"NextivaClientOptions.providerClient"`; `hostClientOverride`: `true`; `implementationStrategy`: `"provider-rest-adapter"`; `packageOwnedRestClient`: `true`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-server-side-sdk"`; `typedClientOverride`: `"NextivaProviderClient"`; \}; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `result`: `"no-suitable-server-side-sdk"`; \}; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-suitable-runtime-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| `metadata.implementation.hostClientEscapeHatch` | `"NextivaClientOptions.providerClient"` |
| `metadata.implementation.hostClientOverride` | `true` |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.packageOwnedRestClient` | `true` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-server-side-sdk"`; `typedClientOverride`: `"NextivaProviderClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-suitable-server-side-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"NextivaProviderClient"` |
| `metadata.implementation.sdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `result`: `"no-suitable-server-side-sdk"`; \} |
| `metadata.implementation.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.sdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\] |
| `metadata.implementation.sdkDecision.result` | `"no-suitable-server-side-sdk"` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"no-suitable-runtime-sdk-rest-adapter"`; `packageOwnedRestClient`: `true`; `providerClientOverride`: `"NextivaProviderClient"`; `requestValidation`: `"json-path-query-header-validated"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"no-suitable-runtime-sdk-rest-adapter"` |
| `metadata.providerRestAdapter.packageOwnedRestClient` | `true` |
| `metadata.providerRestAdapter.providerClientOverride` | `"NextivaProviderClient"` |
| `metadata.providerRestAdapter.requestValidation` | `"json-path-query-header-validated"` |
| `metadata.providerRestAdapter.strategy` | `"provider-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-server-side-sdk"`; `typedClientOverride`: `"NextivaProviderClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-suitable-server-side-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"NextivaProviderClient"` |
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
        label: "Nextiva Frontend SDKs";
        url: "https://developer.nextiva.com/nextiva/docs/overview-of-sdks";
      }, {
        label: "Nextiva SDK Installation";
        url: "https://developer.nextiva.com/nextiva/docs/sdk-installation";
      }, {
        label: "Nextiva ncx-sdk";
        url: "https://github.com/Nextiva/ncx-sdk";
      }, {
        label: "Nextiva ncx-web-sdk";
        url: "https://github.com/Nextiva/ncx-web-sdk";
     }];
     notes: readonly ["No suitable public server-side Nextiva JavaScript SDK was verified for this provider runtime.", "Runtime calls use a strict typed REST adapter when baseUrl/API credentials are supplied, with NextivaProviderClient available as a host-client override.", "Nextiva's current SDK documentation describes frontend SDKs; public npm packages checked for NCX were frontend/session-oriented, dev/unlicensed, unavailable under documented scoped names, or too loosely typed for package-owned server runtime calls."];
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
        adapterKind: "no-suitable-runtime-sdk-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        hostClientEscapeHatch: "NextivaClientOptions.providerClient";
        hostClientOverride: true;
        implementationStrategy: "provider-rest-adapter";
        packageOwnedRestClient: true;
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "1.5.8";
              license: "MIT";
              package: "ncx-sdk";
              reason: "Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations.";
              result: "not-used-as-runtime-rest-client";
            }, {
              checkedVersion: "0.0.1-dev.6";
              license: "UNLICENSED";
              package: "ncx-web-sdk";
              reason: "Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract.";
              result: "not-used-as-runtime-rest-client";
            }, {
              checkedVersion: "0.0.1-dev.10";
              license: "UNLICENSED";
              package: "ncx-react-sdk";
              reason: "React frontend SDK is not appropriate for this provider runtime package.";
              result: "not-used-as-runtime-rest-client";
           }];
           defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
           result: "no-suitable-server-side-sdk";
           typedClientOverride: "NextivaProviderClient";
        };
        sdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "1.5.8";
              license: "MIT";
              package: "ncx-sdk";
              reason: "Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations.";
              result: "not-used-as-runtime-rest-client";
            }, {
              checkedVersion: "0.0.1-dev.6";
              license: "UNLICENSED";
              package: "ncx-web-sdk";
              reason: "Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check.";
              result: "not-used-as-runtime-rest-client";
            }, {
              checkedVersion: "0.0.1-dev.10";
              license: "UNLICENSED";
              package: "ncx-react-sdk";
              reason: "React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package.";
              result: "not-used-as-runtime-rest-client";
           }];
           result: "no-suitable-server-side-sdk";
        };
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-suitable-runtime-sdk-rest-adapter";
        packageOwnedRestClient: true;
        providerClientOverride: "NextivaProviderClient";
        requestValidation: "json-path-query-header-validated";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "1.5.8";
           license: "MIT";
           package: "ncx-sdk";
           reason: "Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations.";
           result: "not-used-as-runtime-rest-client";
         }, {
           checkedVersion: "0.0.1-dev.6";
           license: "UNLICENSED";
           package: "ncx-web-sdk";
           reason: "Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract.";
           result: "not-used-as-runtime-rest-client";
         }, {
           checkedVersion: "0.0.1-dev.10";
           license: "UNLICENSED";
           package: "ncx-react-sdk";
           reason: "React frontend SDK is not appropriate for this provider runtime package.";
           result: "not-used-as-runtime-rest-client";
        }];
        defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
        result: "no-suitable-server-side-sdk";
        typedClientOverride: "NextivaProviderClient";
     };
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
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Nextiva Contact Center REST APIs"`; `url`: `"https://www.nextiva.com/resources/learn/rest-apis"`; \}, \{ `label`: `"Nextiva WorkItem Service"`; `url`: `"https://developer.nextiva.com/nextiva/docs/workitem-service"`; \}, \{ `label`: `"Nextiva Frontend SDKs"`; `url`: `"https://developer.nextiva.com/nextiva/docs/overview-of-sdks"`; \}, \{ `label`: `"Nextiva SDK Installation"`; `url`: `"https://developer.nextiva.com/nextiva/docs/sdk-installation"`; \}, \{ `label`: `"Nextiva ncx-sdk"`; `url`: `"https://github.com/Nextiva/ncx-sdk"`; \}, \{ `label`: `"Nextiva ncx-web-sdk"`; `url`: `"https://github.com/Nextiva/ncx-web-sdk"`; \}\]; `notes`: readonly \[`"No suitable public server-side Nextiva JavaScript SDK was verified for this provider runtime."`, `"Runtime calls use a strict typed REST adapter when baseUrl/API credentials are supplied, with NextivaProviderClient available as a host-client override."`, `"Nextiva's current SDK documentation describes frontend SDKs; public npm packages checked for NCX were frontend/session-oriented, dev/unlicensed, unavailable under documented scoped names, or too loosely typed for package-owned server runtime calls."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Nextiva Contact Center REST APIs"`; `url`: `"https://www.nextiva.com/resources/learn/rest-apis"`; \}, \{ `label`: `"Nextiva WorkItem Service"`; `url`: `"https://developer.nextiva.com/nextiva/docs/workitem-service"`; \}, \{ `label`: `"Nextiva Frontend SDKs"`; `url`: `"https://developer.nextiva.com/nextiva/docs/overview-of-sdks"`; \}, \{ `label`: `"Nextiva SDK Installation"`; `url`: `"https://developer.nextiva.com/nextiva/docs/sdk-installation"`; \}, \{ `label`: `"Nextiva ncx-sdk"`; `url`: `"https://github.com/Nextiva/ncx-sdk"`; \}, \{ `label`: `"Nextiva ncx-web-sdk"`; `url`: `"https://github.com/Nextiva/ncx-web-sdk"`; \}\] |
| `coverage.notes` | readonly \[`"No suitable public server-side Nextiva JavaScript SDK was verified for this provider runtime."`, `"Runtime calls use a strict typed REST adapter when baseUrl/API credentials are supplied, with NextivaProviderClient available as a host-client override."`, `"Nextiva's current SDK documentation describes frontend SDKs; public npm packages checked for NCX were frontend/session-oriented, dev/unlicensed, unavailable under documented scoped names, or too loosely typed for package-owned server runtime calls."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `id`: `"nextiva-contact-center-api-base"`; `label`: `"Nextiva Contact Center API base URL"`; `required`: `true`; \}, \{ `id`: `"nextiva-contact-center-api-access"`; `label`: `"Nextiva Contact Center API access"`; `required`: `true`; \}, \{ `id`: `"nextiva-contact-center-routing"`; `label`: `"Nextiva queue/campaign/routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.nextiva"` |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `adapterKind`: `"no-suitable-runtime-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `hostClientEscapeHatch`: `"NextivaClientOptions.providerClient"`; `hostClientOverride`: `true`; `implementationStrategy`: `"provider-rest-adapter"`; `packageOwnedRestClient`: `true`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-server-side-sdk"`; `typedClientOverride`: `"NextivaProviderClient"`; \}; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `result`: `"no-suitable-server-side-sdk"`; \}; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"no-suitable-runtime-sdk-rest-adapter"`; `packageOwnedRestClient`: `true`; `providerClientOverride`: `"NextivaProviderClient"`; `requestValidation`: `"json-path-query-header-validated"`; `strategy`: `"provider-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-server-side-sdk"`; `typedClientOverride`: `"NextivaProviderClient"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"no-suitable-runtime-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `hostClientEscapeHatch`: `"NextivaClientOptions.providerClient"`; `hostClientOverride`: `true`; `implementationStrategy`: `"provider-rest-adapter"`; `packageOwnedRestClient`: `true`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-server-side-sdk"`; `typedClientOverride`: `"NextivaProviderClient"`; \}; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `result`: `"no-suitable-server-side-sdk"`; \}; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-suitable-runtime-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| `metadata.implementation.hostClientEscapeHatch` | `"NextivaClientOptions.providerClient"` |
| `metadata.implementation.hostClientOverride` | `true` |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.packageOwnedRestClient` | `true` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-server-side-sdk"`; `typedClientOverride`: `"NextivaProviderClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-suitable-server-side-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"NextivaProviderClient"` |
| `metadata.implementation.sdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `result`: `"no-suitable-server-side-sdk"`; \} |
| `metadata.implementation.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.sdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\] |
| `metadata.implementation.sdkDecision.result` | `"no-suitable-server-side-sdk"` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"no-suitable-runtime-sdk-rest-adapter"`; `packageOwnedRestClient`: `true`; `providerClientOverride`: `"NextivaProviderClient"`; `requestValidation`: `"json-path-query-header-validated"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"no-suitable-runtime-sdk-rest-adapter"` |
| `metadata.providerRestAdapter.packageOwnedRestClient` | `true` |
| `metadata.providerRestAdapter.providerClientOverride` | `"NextivaProviderClient"` |
| `metadata.providerRestAdapter.requestValidation` | `"json-path-query-header-validated"` |
| `metadata.providerRestAdapter.strategy` | `"provider-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-server-side-sdk"`; `typedClientOverride`: `"NextivaProviderClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-suitable-server-side-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"NextivaProviderClient"` |
| <a id="property-name"></a> `name` | `"Nextiva Contact Center"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"nextiva.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-nextiva"` |
| <a id="property-provider"></a> `provider` | `"nextiva"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### nextivaProviderSdkDecision

```ts
const nextivaProviderSdkDecision: {
  checkedAt: "2026-06-25";
  checkedPackages: readonly [{
     checkedVersion: "1.5.8";
     license: "MIT";
     package: "ncx-sdk";
     reason: "Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations.";
     result: "not-used-as-runtime-rest-client";
   }, {
     checkedVersion: "0.0.1-dev.6";
     license: "UNLICENSED";
     package: "ncx-web-sdk";
     reason: "Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract.";
     result: "not-used-as-runtime-rest-client";
   }, {
     checkedVersion: "0.0.1-dev.10";
     license: "UNLICENSED";
     package: "ncx-react-sdk";
     reason: "React frontend SDK is not appropriate for this provider runtime package.";
     result: "not-used-as-runtime-rest-client";
  }];
  defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
  result: "no-suitable-server-side-sdk";
  typedClientOverride: "NextivaProviderClient";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-checkedat"></a> `checkedAt` | `"2026-06-25"` |
| <a id="property-checkedpackages"></a> `checkedPackages` | readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\] |
| <a id="property-defaultrestpolicy"></a> `defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| <a id="property-result"></a> `result` | `"no-suitable-server-side-sdk"` |
| <a id="property-typedclientoverride"></a> `typedClientOverride` | `"NextivaProviderClient"` |

***

### nextivaSupportSlice

```ts
const nextivaSupportSlice: {
  adapterKind: "no-suitable-runtime-sdk-rest-adapter";
  allowedOperations: readonly [{
     alias: "contact-center.handoff.request";
     checksum: "not-applicable-host-configured";
     id: "configuredHandoff";
     method: "POST";
     path: "host-configured";
     source: "provider-rest-adapter";
  }];
  hostClientEscapeHatch: "NextivaClientOptions.providerClient";
  hostClientOverride: true;
  implementationStrategy: "provider-rest-adapter";
  packageOwnedRestClient: true;
  providerSdkDecision: {
     checkedAt: "2026-06-25";
     checkedPackages: readonly [{
        checkedVersion: "1.5.8";
        license: "MIT";
        package: "ncx-sdk";
        reason: "Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations.";
        result: "not-used-as-runtime-rest-client";
      }, {
        checkedVersion: "0.0.1-dev.6";
        license: "UNLICENSED";
        package: "ncx-web-sdk";
        reason: "Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract.";
        result: "not-used-as-runtime-rest-client";
      }, {
        checkedVersion: "0.0.1-dev.10";
        license: "UNLICENSED";
        package: "ncx-react-sdk";
        reason: "React frontend SDK is not appropriate for this provider runtime package.";
        result: "not-used-as-runtime-rest-client";
     }];
     defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
     result: "no-suitable-server-side-sdk";
     typedClientOverride: "NextivaProviderClient";
  };
  sdkDecision: {
     checkedAt: "2026-06-25";
     checkedPackages: readonly [{
        checkedVersion: "1.5.8";
        license: "MIT";
        package: "ncx-sdk";
        reason: "Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations.";
        result: "not-used-as-runtime-rest-client";
      }, {
        checkedVersion: "0.0.1-dev.6";
        license: "UNLICENSED";
        package: "ncx-web-sdk";
        reason: "Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check.";
        result: "not-used-as-runtime-rest-client";
      }, {
        checkedVersion: "0.0.1-dev.10";
        license: "UNLICENSED";
        package: "ncx-react-sdk";
        reason: "React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package.";
        result: "not-used-as-runtime-rest-client";
     }];
     result: "no-suitable-server-side-sdk";
  };
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind"></a> `adapterKind` | `"no-suitable-runtime-sdk-rest-adapter"` |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| <a id="property-hostclientescapehatch"></a> `hostClientEscapeHatch` | `"NextivaClientOptions.providerClient"` |
| <a id="property-hostclientoverride"></a> `hostClientOverride` | `true` |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"provider-rest-adapter"` |
| <a id="property-packageownedrestclient"></a> `packageOwnedRestClient` | `true` |
| <a id="property-providersdkdecision"></a> `providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-server-side-sdk"`; `typedClientOverride`: `"NextivaProviderClient"`; \} |
| `providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Session/frontend-oriented client with broad any-typed services and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Dev-tagged browser Web SDK with browser telephony/UI peer surface and no suitable redistributable server-side runtime contract."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\] |
| `providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `providerSdkDecision.result` | `"no-suitable-server-side-sdk"` |
| `providerSdkDecision.typedClientOverride` | `"NextivaProviderClient"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\]; `result`: `"no-suitable-server-side-sdk"`; \} |
| `sdkDecision.checkedAt` | `"2026-06-25"` |
| `sdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"1.5.8"`; `license`: `"MIT"`; `package`: `"ncx-sdk"`; `reason`: `"Public package is a session/frontend-oriented client with broad any-typed WorkitemsService methods and socket/session initialization, not a strict server-side REST client for Cognidesk handoff operations."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.6"`; `license`: `"UNLICENSED"`; `package`: `"ncx-web-sdk"`; `reason`: `"Public npm package is a dev-tagged browser Web SDK with peer dependencies for browser telephony/UI runtime and a tiny exported type surface; the scoped package documented by Nextiva was not available on the public npm registry during this check."`; `result`: `"not-used-as-runtime-rest-client"`; \}, \{ `checkedVersion`: `"0.0.1-dev.10"`; `license`: `"UNLICENSED"`; `package`: `"ncx-react-sdk"`; `reason`: `"React frontend SDK depends on React and NCX core dev packages, so it is not appropriate for this provider runtime package."`; `result`: `"not-used-as-runtime-rest-client"`; \}\] |
| `sdkDecision.result` | `"no-suitable-server-side-sdk"` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-25"` |
