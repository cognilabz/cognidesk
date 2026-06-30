# integrations/contact-center/five9/dist/manifest

## Variables

### five9CheckedProviderSdk

```ts
const five9CheckedProviderSdk: {
  candidates: readonly [{
     checkedVersion: "0.1.3";
     package: "five9";
     reason: "The npm package is a third-party Node module last published in 2017, not an official maintained Five9 backend SDK.";
     result: "third-party-stale";
     source: "https://www.npmjs.com/package/five9";
   }, {
     checkedVersion: "7.2.0";
     package: "uniphore-five9-messaging-api-client-library";
     reason: "The npm package is maintained by Uniphore and targets a messaging API client surface rather than an official Five9 contact-center runtime SDK.";
     result: "third-party-messaging-specific";
     source: "https://www.npmjs.com/package/uniphore-five9-messaging-api-client-library";
   }, {
     package: "Five9 CRM SDK";
     reason: "Five9's JavaScript CRM SDK is loaded from Five9's CDN and integrates browser pages with Agent Desktop Toolkit through window.Five9.CrmSdk.";
     result: "not-backend-runtime-sdk";
     source: "https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html";
  }];
  checkedAt: "2026-06-25";
  officialRuntimeSdkAvailable: false;
  verdict: "no-official-sdk-rest-adapter";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-candidates"></a> `candidates` | readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"The npm package is a third-party Node module last published in 2017, not an official maintained Five9 backend SDK."`; `result`: `"third-party-stale"`; `source`: `"https://www.npmjs.com/package/five9"`; \}, \{ `checkedVersion`: `"7.2.0"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"The npm package is maintained by Uniphore and targets a messaging API client surface rather than an official Five9 contact-center runtime SDK."`; `result`: `"third-party-messaging-specific"`; `source`: `"https://www.npmjs.com/package/uniphore-five9-messaging-api-client-library"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9's JavaScript CRM SDK is loaded from Five9's CDN and integrates browser pages with Agent Desktop Toolkit through window.Five9.CrmSdk."`; `result`: `"not-backend-runtime-sdk"`; `source`: `"https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html"`; \}\] |
| <a id="property-checkedat"></a> `checkedAt` | `"2026-06-25"` |
| <a id="property-officialruntimesdkavailable"></a> `officialRuntimeSdkAvailable` | `false` |
| <a id="property-verdict"></a> `verdict` | `"no-official-sdk-rest-adapter"` |

***

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
        label: "Five9 CRM SDK JSDoc";
        url: "https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html";
      }, {
        label: "npm five9 package";
        url: "https://www.npmjs.com/package/five9";
     }];
     notes: readonly ["No suitable official backend JavaScript/TypeScript SDK was verified.", "Runtime calls use a built-in REST adapter only when baseUrl/API credentials and host-configured operation paths are supplied, with Five9ProviderClient available as a typed host-client override."];
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
     checkedProviderSdk: {
        candidates: readonly [{
           checkedVersion: "0.1.3";
           package: "five9";
           reason: "The npm package is a third-party Node module last published in 2017, not an official maintained Five9 backend SDK.";
           result: "third-party-stale";
           source: "https://www.npmjs.com/package/five9";
         }, {
           checkedVersion: "7.2.0";
           package: "uniphore-five9-messaging-api-client-library";
           reason: "The npm package is maintained by Uniphore and targets a messaging API client surface rather than an official Five9 contact-center runtime SDK.";
           result: "third-party-messaging-specific";
           source: "https://www.npmjs.com/package/uniphore-five9-messaging-api-client-library";
         }, {
           package: "Five9 CRM SDK";
           reason: "Five9's JavaScript CRM SDK is loaded from Five9's CDN and integrates browser pages with Agent Desktop Toolkit through window.Five9.CrmSdk.";
           result: "not-backend-runtime-sdk";
           source: "https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html";
        }];
        checkedAt: "2026-06-25";
        officialRuntimeSdkAvailable: false;
        verdict: "no-official-sdk-rest-adapter";
     };
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        defaultClientPolicy: "configured-rest-default-with-host-client-override";
        failClosedWithoutHostConfig: true;
        implementationStrategy: "provider-rest-adapter";
        officialRuntimeSdkAvailable: false;
        providerClientInterface: "Five9ProviderClient";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "0.1.3";
              package: "five9";
              reason: "Third-party package last published years ago, not an official maintained Five9 runtime SDK.";
              result: "third-party-stale-node-module";
            }, {
              checkedVersion: "7.2.0";
              license: "ISC";
              package: "uniphore-five9-messaging-api-client-library";
              reason: "Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface.";
              result: "third-party-messaging-specific-client";
            }, {
              package: "Five9 CRM SDK";
              reason: "Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit.";
              result: "browser-agent-desktop-cdn-sdk-not-node-runtime";
           }];
           defaultRestPolicy: "fail-closed-configured-rest-adapter-with-typed-provider-client-override";
           result: "no-suitable-official-server-side-sdk";
           typedClientOverride: "Five9ProviderClient";
        };
        sdkDecision: "No suitable official backend JavaScript/TypeScript SDK was verified; five9@0.1.3 is third-party and stale, Uniphore's package is third-party and messaging-specific, and Five9 CRM SDK is browser/ADT-oriented.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerClient: {
        defaultClientPolicy: "configured-rest-default-with-host-client-override";
        importPolicy: "runtime-entrypoint-only";
        interface: "Five9ProviderClient";
        package: "built-in-provider-rest-adapter";
        rawClientAlias: "Five9RawClient";
        sdkDecision: {
           checkedAt: "2026-06-25";
           result: "no-official-sdk-rest-adapter";
        };
     };
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        defaultClientPolicy: "configured-rest-default-with-host-client-override";
        failClosedWithoutBaseUrl: true;
        failClosedWithoutConfiguredPath: true;
        providerClientOverride: "Five9ProviderClient";
        rawClientOverride: "Five9RawClient";
        strategy: "provider-rest-adapter";
     };
     providerRestAdapterException: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedDefaultRuntime: "built-in-rest-adapter";
        failClosed: true;
        guardrails: readonly ["Keep Five9 calls behind Five9ProviderClient or the built-in REST adapter until an official maintained Node/TypeScript Five9 runtime SDK exists.", "Require baseUrl and host-configured operation paths before the built-in REST adapter can call fetch.", "If an official maintained runtime SDK is adopted later, switch implementationStrategy away from provider-rest-adapter and add a normal package.json runtime dependency."];
        hostSdkPath: "Five9ProviderClient";
        reason: "No maintained official Five9 Node/TypeScript backend runtime SDK was verified for the declared contact-center handoff workflow; documented Five9 JavaScript SDK surfaces are browser/ADT-oriented.";
        reviewedAt: "2026-06-25";
        status: "accepted";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "0.1.3";
           package: "five9";
           reason: "Third-party package last published years ago, not an official maintained Five9 runtime SDK.";
           result: "third-party-stale-node-module";
         }, {
           checkedVersion: "7.2.0";
           license: "ISC";
           package: "uniphore-five9-messaging-api-client-library";
           reason: "Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface.";
           result: "third-party-messaging-specific-client";
         }, {
           package: "Five9 CRM SDK";
           reason: "Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit.";
           result: "browser-agent-desktop-cdn-sdk-not-node-runtime";
        }];
        defaultRestPolicy: "fail-closed-configured-rest-adapter-with-typed-provider-client-override";
        result: "no-suitable-official-server-side-sdk";
        typedClientOverride: "Five9ProviderClient";
     };
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
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Five9 Contact Center APIs and SDKs"`; `url`: `"https://www.five9.com/products/capabilities/call-center-apis-and-sdks"`; \}, \{ `label`: `"Five9 CRM SDK JSDoc"`; `url`: `"https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html"`; \}, \{ `label`: `"npm five9 package"`; `url`: `"https://www.npmjs.com/package/five9"`; \}\]; `notes`: readonly \[`"No suitable official backend JavaScript/TypeScript SDK was verified."`, `"Runtime calls use a built-in REST adapter only when baseUrl/API credentials and host-configured operation paths are supplied, with Five9ProviderClient available as a typed host-client override."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Five9 Contact Center APIs and SDKs"`; `url`: `"https://www.five9.com/products/capabilities/call-center-apis-and-sdks"`; \}, \{ `label`: `"Five9 CRM SDK JSDoc"`; `url`: `"https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html"`; \}, \{ `label`: `"npm five9 package"`; `url`: `"https://www.npmjs.com/package/five9"`; \}\] |
| `coverage.notes` | readonly \[`"No suitable official backend JavaScript/TypeScript SDK was verified."`, `"Runtime calls use a built-in REST adapter only when baseUrl/API credentials and host-configured operation paths are supplied, with Five9ProviderClient available as a typed host-client override."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"five9-api-base"`; `label`: `"Five9 API base URL"`; `required`: `true`; \}, \{ `id`: `"five9-api-access"`; `label`: `"Five9 API access"`; `required`: `true`; \}, \{ `id`: `"five9-routing"`; `label`: `"Five9 skill/campaign routing configuration"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.five9"` |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `checkedProviderSdk`: \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"The npm package is a third-party Node module last published in 2017, not an official maintained Five9 backend SDK."`; `result`: `"third-party-stale"`; `source`: `"https://www.npmjs.com/package/five9"`; \}, \{ `checkedVersion`: `"7.2.0"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"The npm package is maintained by Uniphore and targets a messaging API client surface rather than an official Five9 contact-center runtime SDK."`; `result`: `"third-party-messaging-specific"`; `source`: `"https://www.npmjs.com/package/uniphore-five9-messaging-api-client-library"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9's JavaScript CRM SDK is loaded from Five9's CDN and integrates browser pages with Agent Desktop Toolkit through window.Five9.CrmSdk."`; `result`: `"not-backend-runtime-sdk"`; `source`: `"https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html"`; \}\]; `checkedAt`: `"2026-06-25"`; `officialRuntimeSdkAvailable`: `false`; `verdict`: `"no-official-sdk-rest-adapter"`; \}; `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`; `failClosedWithoutHostConfig`: `true`; `implementationStrategy`: `"provider-rest-adapter"`; `officialRuntimeSdkAvailable`: `false`; `providerClientInterface`: `"Five9ProviderClient"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\]; `defaultRestPolicy`: `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-official-server-side-sdk"`; `typedClientOverride`: `"Five9ProviderClient"`; \}; `sdkDecision`: `"No suitable official backend JavaScript/TypeScript SDK was verified; five9@0.1.3 is third-party and stale, Uniphore's package is third-party and messaging-specific, and Five9 CRM SDK is browser/ADT-oriented."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerClient`: \{ `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`; `importPolicy`: `"runtime-entrypoint-only"`; `interface`: `"Five9ProviderClient"`; `package`: `"built-in-provider-rest-adapter"`; `rawClientAlias`: `"Five9RawClient"`; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `result`: `"no-official-sdk-rest-adapter"`; \}; \}; `providerRestAdapter`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`; `failClosedWithoutBaseUrl`: `true`; `failClosedWithoutConfiguredPath`: `true`; `providerClientOverride`: `"Five9ProviderClient"`; `rawClientOverride`: `"Five9RawClient"`; `strategy`: `"provider-rest-adapter"`; \}; `providerRestAdapterException`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedDefaultRuntime`: `"built-in-rest-adapter"`; `failClosed`: `true`; `guardrails`: readonly \[`"Keep Five9 calls behind Five9ProviderClient or the built-in REST adapter until an official maintained Node/TypeScript Five9 runtime SDK exists."`, `"Require baseUrl and host-configured operation paths before the built-in REST adapter can call fetch."`, `"If an official maintained runtime SDK is adopted later, switch implementationStrategy away from provider-rest-adapter and add a normal package.json runtime dependency."`\]; `hostSdkPath`: `"Five9ProviderClient"`; `reason`: `"No maintained official Five9 Node/TypeScript backend runtime SDK was verified for the declared contact-center handoff workflow; documented Five9 JavaScript SDK surfaces are browser/ADT-oriented."`; `reviewedAt`: `"2026-06-25"`; `status`: `"accepted"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\]; `defaultRestPolicy`: `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-official-server-side-sdk"`; `typedClientOverride`: `"Five9ProviderClient"`; \}; \} |
| `metadata.checkedProviderSdk` | \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"The npm package is a third-party Node module last published in 2017, not an official maintained Five9 backend SDK."`; `result`: `"third-party-stale"`; `source`: `"https://www.npmjs.com/package/five9"`; \}, \{ `checkedVersion`: `"7.2.0"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"The npm package is maintained by Uniphore and targets a messaging API client surface rather than an official Five9 contact-center runtime SDK."`; `result`: `"third-party-messaging-specific"`; `source`: `"https://www.npmjs.com/package/uniphore-five9-messaging-api-client-library"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9's JavaScript CRM SDK is loaded from Five9's CDN and integrates browser pages with Agent Desktop Toolkit through window.Five9.CrmSdk."`; `result`: `"not-backend-runtime-sdk"`; `source`: `"https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html"`; \}\]; `checkedAt`: `"2026-06-25"`; `officialRuntimeSdkAvailable`: `false`; `verdict`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.checkedProviderSdk.candidates` | readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"The npm package is a third-party Node module last published in 2017, not an official maintained Five9 backend SDK."`; `result`: `"third-party-stale"`; `source`: `"https://www.npmjs.com/package/five9"`; \}, \{ `checkedVersion`: `"7.2.0"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"The npm package is maintained by Uniphore and targets a messaging API client surface rather than an official Five9 contact-center runtime SDK."`; `result`: `"third-party-messaging-specific"`; `source`: `"https://www.npmjs.com/package/uniphore-five9-messaging-api-client-library"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9's JavaScript CRM SDK is loaded from Five9's CDN and integrates browser pages with Agent Desktop Toolkit through window.Five9.CrmSdk."`; `result`: `"not-backend-runtime-sdk"`; `source`: `"https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html"`; \}\] |
| `metadata.checkedProviderSdk.checkedAt` | `"2026-06-25"` |
| `metadata.checkedProviderSdk.officialRuntimeSdkAvailable` | `false` |
| `metadata.checkedProviderSdk.verdict` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`; `failClosedWithoutHostConfig`: `true`; `implementationStrategy`: `"provider-rest-adapter"`; `officialRuntimeSdkAvailable`: `false`; `providerClientInterface`: `"Five9ProviderClient"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\]; `defaultRestPolicy`: `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-official-server-side-sdk"`; `typedClientOverride`: `"Five9ProviderClient"`; \}; `sdkDecision`: `"No suitable official backend JavaScript/TypeScript SDK was verified; five9@0.1.3 is third-party and stale, Uniphore's package is third-party and messaging-specific, and Five9 CRM SDK is browser/ADT-oriented."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| `metadata.implementation.defaultClientPolicy` | `"configured-rest-default-with-host-client-override"` |
| `metadata.implementation.failClosedWithoutHostConfig` | `true` |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.officialRuntimeSdkAvailable` | `false` |
| `metadata.implementation.providerClientInterface` | `"Five9ProviderClient"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\]; `defaultRestPolicy`: `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-official-server-side-sdk"`; `typedClientOverride`: `"Five9ProviderClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-suitable-official-server-side-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"Five9ProviderClient"` |
| `metadata.implementation.sdkDecision` | `"No suitable official backend JavaScript/TypeScript SDK was verified; five9@0.1.3 is third-party and stale, Uniphore's package is third-party and messaging-specific, and Five9 CRM SDK is browser/ADT-oriented."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerClient` | \{ `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`; `importPolicy`: `"runtime-entrypoint-only"`; `interface`: `"Five9ProviderClient"`; `package`: `"built-in-provider-rest-adapter"`; `rawClientAlias`: `"Five9RawClient"`; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `result`: `"no-official-sdk-rest-adapter"`; \}; \} |
| `metadata.providerClient.defaultClientPolicy` | `"configured-rest-default-with-host-client-override"` |
| `metadata.providerClient.importPolicy` | `"runtime-entrypoint-only"` |
| `metadata.providerClient.interface` | `"Five9ProviderClient"` |
| `metadata.providerClient.package` | `"built-in-provider-rest-adapter"` |
| `metadata.providerClient.rawClientAlias` | `"Five9RawClient"` |
| `metadata.providerClient.sdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `result`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.providerClient.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerClient.sdkDecision.result` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`; `failClosedWithoutBaseUrl`: `true`; `failClosedWithoutConfiguredPath`: `true`; `providerClientOverride`: `"Five9ProviderClient"`; `rawClientOverride`: `"Five9RawClient"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapter.defaultClientPolicy` | `"configured-rest-default-with-host-client-override"` |
| `metadata.providerRestAdapter.failClosedWithoutBaseUrl` | `true` |
| `metadata.providerRestAdapter.failClosedWithoutConfiguredPath` | `true` |
| `metadata.providerRestAdapter.providerClientOverride` | `"Five9ProviderClient"` |
| `metadata.providerRestAdapter.rawClientOverride` | `"Five9RawClient"` |
| `metadata.providerRestAdapter.strategy` | `"provider-rest-adapter"` |
| `metadata.providerRestAdapterException` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedDefaultRuntime`: `"built-in-rest-adapter"`; `failClosed`: `true`; `guardrails`: readonly \[`"Keep Five9 calls behind Five9ProviderClient or the built-in REST adapter until an official maintained Node/TypeScript Five9 runtime SDK exists."`, `"Require baseUrl and host-configured operation paths before the built-in REST adapter can call fetch."`, `"If an official maintained runtime SDK is adopted later, switch implementationStrategy away from provider-rest-adapter and add a normal package.json runtime dependency."`\]; `hostSdkPath`: `"Five9ProviderClient"`; `reason`: `"No maintained official Five9 Node/TypeScript backend runtime SDK was verified for the declared contact-center handoff workflow; documented Five9 JavaScript SDK surfaces are browser/ADT-oriented."`; `reviewedAt`: `"2026-06-25"`; `status`: `"accepted"`; \} |
| `metadata.providerRestAdapterException.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapterException.allowedDefaultRuntime` | `"built-in-rest-adapter"` |
| `metadata.providerRestAdapterException.failClosed` | `true` |
| `metadata.providerRestAdapterException.guardrails` | readonly \[`"Keep Five9 calls behind Five9ProviderClient or the built-in REST adapter until an official maintained Node/TypeScript Five9 runtime SDK exists."`, `"Require baseUrl and host-configured operation paths before the built-in REST adapter can call fetch."`, `"If an official maintained runtime SDK is adopted later, switch implementationStrategy away from provider-rest-adapter and add a normal package.json runtime dependency."`\] |
| `metadata.providerRestAdapterException.hostSdkPath` | `"Five9ProviderClient"` |
| `metadata.providerRestAdapterException.reason` | `"No maintained official Five9 Node/TypeScript backend runtime SDK was verified for the declared contact-center handoff workflow; documented Five9 JavaScript SDK surfaces are browser/ADT-oriented."` |
| `metadata.providerRestAdapterException.reviewedAt` | `"2026-06-25"` |
| `metadata.providerRestAdapterException.status` | `"accepted"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\]; `defaultRestPolicy`: `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-official-server-side-sdk"`; `typedClientOverride`: `"Five9ProviderClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-suitable-official-server-side-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"Five9ProviderClient"` |
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
        label: "Five9 CRM SDK JSDoc";
        url: "https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html";
      }, {
        label: "npm five9 package";
        url: "https://www.npmjs.com/package/five9";
     }];
     notes: readonly ["No suitable official backend JavaScript/TypeScript SDK was verified.", "Runtime calls use a built-in REST adapter only when baseUrl/API credentials and host-configured operation paths are supplied, with Five9ProviderClient available as a typed host-client override."];
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
     checkedProviderSdk: {
        candidates: readonly [{
           checkedVersion: "0.1.3";
           package: "five9";
           reason: "The npm package is a third-party Node module last published in 2017, not an official maintained Five9 backend SDK.";
           result: "third-party-stale";
           source: "https://www.npmjs.com/package/five9";
         }, {
           checkedVersion: "7.2.0";
           package: "uniphore-five9-messaging-api-client-library";
           reason: "The npm package is maintained by Uniphore and targets a messaging API client surface rather than an official Five9 contact-center runtime SDK.";
           result: "third-party-messaging-specific";
           source: "https://www.npmjs.com/package/uniphore-five9-messaging-api-client-library";
         }, {
           package: "Five9 CRM SDK";
           reason: "Five9's JavaScript CRM SDK is loaded from Five9's CDN and integrates browser pages with Agent Desktop Toolkit through window.Five9.CrmSdk.";
           result: "not-backend-runtime-sdk";
           source: "https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html";
        }];
        checkedAt: "2026-06-25";
        officialRuntimeSdkAvailable: false;
        verdict: "no-official-sdk-rest-adapter";
     };
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        defaultClientPolicy: "configured-rest-default-with-host-client-override";
        failClosedWithoutHostConfig: true;
        implementationStrategy: "provider-rest-adapter";
        officialRuntimeSdkAvailable: false;
        providerClientInterface: "Five9ProviderClient";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "0.1.3";
              package: "five9";
              reason: "Third-party package last published years ago, not an official maintained Five9 runtime SDK.";
              result: "third-party-stale-node-module";
            }, {
              checkedVersion: "7.2.0";
              license: "ISC";
              package: "uniphore-five9-messaging-api-client-library";
              reason: "Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface.";
              result: "third-party-messaging-specific-client";
            }, {
              package: "Five9 CRM SDK";
              reason: "Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit.";
              result: "browser-agent-desktop-cdn-sdk-not-node-runtime";
           }];
           defaultRestPolicy: "fail-closed-configured-rest-adapter-with-typed-provider-client-override";
           result: "no-suitable-official-server-side-sdk";
           typedClientOverride: "Five9ProviderClient";
        };
        sdkDecision: "No suitable official backend JavaScript/TypeScript SDK was verified; five9@0.1.3 is third-party and stale, Uniphore's package is third-party and messaging-specific, and Five9 CRM SDK is browser/ADT-oriented.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerClient: {
        defaultClientPolicy: "configured-rest-default-with-host-client-override";
        importPolicy: "runtime-entrypoint-only";
        interface: "Five9ProviderClient";
        package: "built-in-provider-rest-adapter";
        rawClientAlias: "Five9RawClient";
        sdkDecision: {
           checkedAt: "2026-06-25";
           result: "no-official-sdk-rest-adapter";
        };
     };
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        defaultClientPolicy: "configured-rest-default-with-host-client-override";
        failClosedWithoutBaseUrl: true;
        failClosedWithoutConfiguredPath: true;
        providerClientOverride: "Five9ProviderClient";
        rawClientOverride: "Five9RawClient";
        strategy: "provider-rest-adapter";
     };
     providerRestAdapterException: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedDefaultRuntime: "built-in-rest-adapter";
        failClosed: true;
        guardrails: readonly ["Keep Five9 calls behind Five9ProviderClient or the built-in REST adapter until an official maintained Node/TypeScript Five9 runtime SDK exists.", "Require baseUrl and host-configured operation paths before the built-in REST adapter can call fetch.", "If an official maintained runtime SDK is adopted later, switch implementationStrategy away from provider-rest-adapter and add a normal package.json runtime dependency."];
        hostSdkPath: "Five9ProviderClient";
        reason: "No maintained official Five9 Node/TypeScript backend runtime SDK was verified for the declared contact-center handoff workflow; documented Five9 JavaScript SDK surfaces are browser/ADT-oriented.";
        reviewedAt: "2026-06-25";
        status: "accepted";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "0.1.3";
           package: "five9";
           reason: "Third-party package last published years ago, not an official maintained Five9 runtime SDK.";
           result: "third-party-stale-node-module";
         }, {
           checkedVersion: "7.2.0";
           license: "ISC";
           package: "uniphore-five9-messaging-api-client-library";
           reason: "Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface.";
           result: "third-party-messaging-specific-client";
         }, {
           package: "Five9 CRM SDK";
           reason: "Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit.";
           result: "browser-agent-desktop-cdn-sdk-not-node-runtime";
        }];
        defaultRestPolicy: "fail-closed-configured-rest-adapter-with-typed-provider-client-override";
        result: "no-suitable-official-server-side-sdk";
        typedClientOverride: "Five9ProviderClient";
     };
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
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Five9 Contact Center APIs and SDKs"`; `url`: `"https://www.five9.com/products/capabilities/call-center-apis-and-sdks"`; \}, \{ `label`: `"Five9 CRM SDK JSDoc"`; `url`: `"https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html"`; \}, \{ `label`: `"npm five9 package"`; `url`: `"https://www.npmjs.com/package/five9"`; \}\]; `notes`: readonly \[`"No suitable official backend JavaScript/TypeScript SDK was verified."`, `"Runtime calls use a built-in REST adapter only when baseUrl/API credentials and host-configured operation paths are supplied, with Five9ProviderClient available as a typed host-client override."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Five9 Contact Center APIs and SDKs"`; `url`: `"https://www.five9.com/products/capabilities/call-center-apis-and-sdks"`; \}, \{ `label`: `"Five9 CRM SDK JSDoc"`; `url`: `"https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html"`; \}, \{ `label`: `"npm five9 package"`; `url`: `"https://www.npmjs.com/package/five9"`; \}\] |
| `coverage.notes` | readonly \[`"No suitable official backend JavaScript/TypeScript SDK was verified."`, `"Runtime calls use a built-in REST adapter only when baseUrl/API credentials and host-configured operation paths are supplied, with Five9ProviderClient available as a typed host-client override."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `id`: `"five9-api-base"`; `label`: `"Five9 API base URL"`; `required`: `true`; \}, \{ `id`: `"five9-api-access"`; `label`: `"Five9 API access"`; `required`: `true`; \}, \{ `id`: `"five9-routing"`; `label`: `"Five9 skill/campaign routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.five9"` |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `checkedProviderSdk`: \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"The npm package is a third-party Node module last published in 2017, not an official maintained Five9 backend SDK."`; `result`: `"third-party-stale"`; `source`: `"https://www.npmjs.com/package/five9"`; \}, \{ `checkedVersion`: `"7.2.0"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"The npm package is maintained by Uniphore and targets a messaging API client surface rather than an official Five9 contact-center runtime SDK."`; `result`: `"third-party-messaging-specific"`; `source`: `"https://www.npmjs.com/package/uniphore-five9-messaging-api-client-library"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9's JavaScript CRM SDK is loaded from Five9's CDN and integrates browser pages with Agent Desktop Toolkit through window.Five9.CrmSdk."`; `result`: `"not-backend-runtime-sdk"`; `source`: `"https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html"`; \}\]; `checkedAt`: `"2026-06-25"`; `officialRuntimeSdkAvailable`: `false`; `verdict`: `"no-official-sdk-rest-adapter"`; \}; `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`; `failClosedWithoutHostConfig`: `true`; `implementationStrategy`: `"provider-rest-adapter"`; `officialRuntimeSdkAvailable`: `false`; `providerClientInterface`: `"Five9ProviderClient"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\]; `defaultRestPolicy`: `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-official-server-side-sdk"`; `typedClientOverride`: `"Five9ProviderClient"`; \}; `sdkDecision`: `"No suitable official backend JavaScript/TypeScript SDK was verified; five9@0.1.3 is third-party and stale, Uniphore's package is third-party and messaging-specific, and Five9 CRM SDK is browser/ADT-oriented."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerClient`: \{ `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`; `importPolicy`: `"runtime-entrypoint-only"`; `interface`: `"Five9ProviderClient"`; `package`: `"built-in-provider-rest-adapter"`; `rawClientAlias`: `"Five9RawClient"`; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `result`: `"no-official-sdk-rest-adapter"`; \}; \}; `providerRestAdapter`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`; `failClosedWithoutBaseUrl`: `true`; `failClosedWithoutConfiguredPath`: `true`; `providerClientOverride`: `"Five9ProviderClient"`; `rawClientOverride`: `"Five9RawClient"`; `strategy`: `"provider-rest-adapter"`; \}; `providerRestAdapterException`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedDefaultRuntime`: `"built-in-rest-adapter"`; `failClosed`: `true`; `guardrails`: readonly \[`"Keep Five9 calls behind Five9ProviderClient or the built-in REST adapter until an official maintained Node/TypeScript Five9 runtime SDK exists."`, `"Require baseUrl and host-configured operation paths before the built-in REST adapter can call fetch."`, `"If an official maintained runtime SDK is adopted later, switch implementationStrategy away from provider-rest-adapter and add a normal package.json runtime dependency."`\]; `hostSdkPath`: `"Five9ProviderClient"`; `reason`: `"No maintained official Five9 Node/TypeScript backend runtime SDK was verified for the declared contact-center handoff workflow; documented Five9 JavaScript SDK surfaces are browser/ADT-oriented."`; `reviewedAt`: `"2026-06-25"`; `status`: `"accepted"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\]; `defaultRestPolicy`: `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-official-server-side-sdk"`; `typedClientOverride`: `"Five9ProviderClient"`; \}; \} |
| `metadata.checkedProviderSdk` | \{ `candidates`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"The npm package is a third-party Node module last published in 2017, not an official maintained Five9 backend SDK."`; `result`: `"third-party-stale"`; `source`: `"https://www.npmjs.com/package/five9"`; \}, \{ `checkedVersion`: `"7.2.0"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"The npm package is maintained by Uniphore and targets a messaging API client surface rather than an official Five9 contact-center runtime SDK."`; `result`: `"third-party-messaging-specific"`; `source`: `"https://www.npmjs.com/package/uniphore-five9-messaging-api-client-library"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9's JavaScript CRM SDK is loaded from Five9's CDN and integrates browser pages with Agent Desktop Toolkit through window.Five9.CrmSdk."`; `result`: `"not-backend-runtime-sdk"`; `source`: `"https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html"`; \}\]; `checkedAt`: `"2026-06-25"`; `officialRuntimeSdkAvailable`: `false`; `verdict`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.checkedProviderSdk.candidates` | readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"The npm package is a third-party Node module last published in 2017, not an official maintained Five9 backend SDK."`; `result`: `"third-party-stale"`; `source`: `"https://www.npmjs.com/package/five9"`; \}, \{ `checkedVersion`: `"7.2.0"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"The npm package is maintained by Uniphore and targets a messaging API client surface rather than an official Five9 contact-center runtime SDK."`; `result`: `"third-party-messaging-specific"`; `source`: `"https://www.npmjs.com/package/uniphore-five9-messaging-api-client-library"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9's JavaScript CRM SDK is loaded from Five9's CDN and integrates browser pages with Agent Desktop Toolkit through window.Five9.CrmSdk."`; `result`: `"not-backend-runtime-sdk"`; `source`: `"https://cdn.prod.us.five9.net/stable/crm-sdk-lib/doc/index.html"`; \}\] |
| `metadata.checkedProviderSdk.checkedAt` | `"2026-06-25"` |
| `metadata.checkedProviderSdk.officialRuntimeSdkAvailable` | `false` |
| `metadata.checkedProviderSdk.verdict` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`; `failClosedWithoutHostConfig`: `true`; `implementationStrategy`: `"provider-rest-adapter"`; `officialRuntimeSdkAvailable`: `false`; `providerClientInterface`: `"Five9ProviderClient"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\]; `defaultRestPolicy`: `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-official-server-side-sdk"`; `typedClientOverride`: `"Five9ProviderClient"`; \}; `sdkDecision`: `"No suitable official backend JavaScript/TypeScript SDK was verified; five9@0.1.3 is third-party and stale, Uniphore's package is third-party and messaging-specific, and Five9 CRM SDK is browser/ADT-oriented."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| `metadata.implementation.defaultClientPolicy` | `"configured-rest-default-with-host-client-override"` |
| `metadata.implementation.failClosedWithoutHostConfig` | `true` |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.officialRuntimeSdkAvailable` | `false` |
| `metadata.implementation.providerClientInterface` | `"Five9ProviderClient"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\]; `defaultRestPolicy`: `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-official-server-side-sdk"`; `typedClientOverride`: `"Five9ProviderClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-suitable-official-server-side-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"Five9ProviderClient"` |
| `metadata.implementation.sdkDecision` | `"No suitable official backend JavaScript/TypeScript SDK was verified; five9@0.1.3 is third-party and stale, Uniphore's package is third-party and messaging-specific, and Five9 CRM SDK is browser/ADT-oriented."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerClient` | \{ `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`; `importPolicy`: `"runtime-entrypoint-only"`; `interface`: `"Five9ProviderClient"`; `package`: `"built-in-provider-rest-adapter"`; `rawClientAlias`: `"Five9RawClient"`; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `result`: `"no-official-sdk-rest-adapter"`; \}; \} |
| `metadata.providerClient.defaultClientPolicy` | `"configured-rest-default-with-host-client-override"` |
| `metadata.providerClient.importPolicy` | `"runtime-entrypoint-only"` |
| `metadata.providerClient.interface` | `"Five9ProviderClient"` |
| `metadata.providerClient.package` | `"built-in-provider-rest-adapter"` |
| `metadata.providerClient.rawClientAlias` | `"Five9RawClient"` |
| `metadata.providerClient.sdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `result`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.providerClient.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerClient.sdkDecision.result` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`; `failClosedWithoutBaseUrl`: `true`; `failClosedWithoutConfiguredPath`: `true`; `providerClientOverride`: `"Five9ProviderClient"`; `rawClientOverride`: `"Five9RawClient"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapter.defaultClientPolicy` | `"configured-rest-default-with-host-client-override"` |
| `metadata.providerRestAdapter.failClosedWithoutBaseUrl` | `true` |
| `metadata.providerRestAdapter.failClosedWithoutConfiguredPath` | `true` |
| `metadata.providerRestAdapter.providerClientOverride` | `"Five9ProviderClient"` |
| `metadata.providerRestAdapter.rawClientOverride` | `"Five9RawClient"` |
| `metadata.providerRestAdapter.strategy` | `"provider-rest-adapter"` |
| `metadata.providerRestAdapterException` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedDefaultRuntime`: `"built-in-rest-adapter"`; `failClosed`: `true`; `guardrails`: readonly \[`"Keep Five9 calls behind Five9ProviderClient or the built-in REST adapter until an official maintained Node/TypeScript Five9 runtime SDK exists."`, `"Require baseUrl and host-configured operation paths before the built-in REST adapter can call fetch."`, `"If an official maintained runtime SDK is adopted later, switch implementationStrategy away from provider-rest-adapter and add a normal package.json runtime dependency."`\]; `hostSdkPath`: `"Five9ProviderClient"`; `reason`: `"No maintained official Five9 Node/TypeScript backend runtime SDK was verified for the declared contact-center handoff workflow; documented Five9 JavaScript SDK surfaces are browser/ADT-oriented."`; `reviewedAt`: `"2026-06-25"`; `status`: `"accepted"`; \} |
| `metadata.providerRestAdapterException.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapterException.allowedDefaultRuntime` | `"built-in-rest-adapter"` |
| `metadata.providerRestAdapterException.failClosed` | `true` |
| `metadata.providerRestAdapterException.guardrails` | readonly \[`"Keep Five9 calls behind Five9ProviderClient or the built-in REST adapter until an official maintained Node/TypeScript Five9 runtime SDK exists."`, `"Require baseUrl and host-configured operation paths before the built-in REST adapter can call fetch."`, `"If an official maintained runtime SDK is adopted later, switch implementationStrategy away from provider-rest-adapter and add a normal package.json runtime dependency."`\] |
| `metadata.providerRestAdapterException.hostSdkPath` | `"Five9ProviderClient"` |
| `metadata.providerRestAdapterException.reason` | `"No maintained official Five9 Node/TypeScript backend runtime SDK was verified for the declared contact-center handoff workflow; documented Five9 JavaScript SDK surfaces are browser/ADT-oriented."` |
| `metadata.providerRestAdapterException.reviewedAt` | `"2026-06-25"` |
| `metadata.providerRestAdapterException.status` | `"accepted"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\]; `defaultRestPolicy`: `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-official-server-side-sdk"`; `typedClientOverride`: `"Five9ProviderClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-suitable-official-server-side-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"Five9ProviderClient"` |
| <a id="property-name"></a> `name` | `"Five9"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-five9"` |
| <a id="property-provider"></a> `provider` | `"five9"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### five9ProviderSdkDecision

```ts
const five9ProviderSdkDecision: {
  checkedAt: "2026-06-25";
  checkedPackages: readonly [{
     checkedVersion: "0.1.3";
     package: "five9";
     reason: "Third-party package last published years ago, not an official maintained Five9 runtime SDK.";
     result: "third-party-stale-node-module";
   }, {
     checkedVersion: "7.2.0";
     license: "ISC";
     package: "uniphore-five9-messaging-api-client-library";
     reason: "Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface.";
     result: "third-party-messaging-specific-client";
   }, {
     package: "Five9 CRM SDK";
     reason: "Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit.";
     result: "browser-agent-desktop-cdn-sdk-not-node-runtime";
  }];
  defaultRestPolicy: "fail-closed-configured-rest-adapter-with-typed-provider-client-override";
  result: "no-suitable-official-server-side-sdk";
  typedClientOverride: "Five9ProviderClient";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-checkedat-1"></a> `checkedAt` | `"2026-06-25"` |
| <a id="property-checkedpackages"></a> `checkedPackages` | readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\] |
| <a id="property-defaultrestpolicy"></a> `defaultRestPolicy` | `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"` |
| <a id="property-result"></a> `result` | `"no-suitable-official-server-side-sdk"` |
| <a id="property-typedclientoverride"></a> `typedClientOverride` | `"Five9ProviderClient"` |

***

### five9RestSupportSlice

```ts
const five9RestSupportSlice: {
  adapterKind: "no-official-sdk-rest-adapter";
  allowedOperations: readonly [{
     alias: "contact-center.handoff.request";
     checksum: "not-applicable-host-configured";
     id: "configuredHandoff";
     method: "POST";
     path: "host-configured";
     source: "provider-rest-adapter";
  }];
  defaultClientPolicy: "configured-rest-default-with-host-client-override";
  failClosedWithoutHostConfig: true;
  implementationStrategy: "provider-rest-adapter";
  officialRuntimeSdkAvailable: false;
  providerClientInterface: "Five9ProviderClient";
  providerSdkDecision: {
     checkedAt: "2026-06-25";
     checkedPackages: readonly [{
        checkedVersion: "0.1.3";
        package: "five9";
        reason: "Third-party package last published years ago, not an official maintained Five9 runtime SDK.";
        result: "third-party-stale-node-module";
      }, {
        checkedVersion: "7.2.0";
        license: "ISC";
        package: "uniphore-five9-messaging-api-client-library";
        reason: "Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface.";
        result: "third-party-messaging-specific-client";
      }, {
        package: "Five9 CRM SDK";
        reason: "Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit.";
        result: "browser-agent-desktop-cdn-sdk-not-node-runtime";
     }];
     defaultRestPolicy: "fail-closed-configured-rest-adapter-with-typed-provider-client-override";
     result: "no-suitable-official-server-side-sdk";
     typedClientOverride: "Five9ProviderClient";
  };
  sdkDecision: "No suitable official backend JavaScript/TypeScript SDK was verified; five9@0.1.3 is third-party and stale, Uniphore's package is third-party and messaging-specific, and Five9 CRM SDK is browser/ADT-oriented.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind"></a> `adapterKind` | `"no-official-sdk-rest-adapter"` |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| <a id="property-defaultclientpolicy"></a> `defaultClientPolicy` | `"configured-rest-default-with-host-client-override"` |
| <a id="property-failclosedwithouthostconfig"></a> `failClosedWithoutHostConfig` | `true` |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"provider-rest-adapter"` |
| <a id="property-officialruntimesdkavailable-1"></a> `officialRuntimeSdkAvailable` | `false` |
| <a id="property-providerclientinterface"></a> `providerClientInterface` | `"Five9ProviderClient"` |
| <a id="property-providersdkdecision"></a> `providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\]; `defaultRestPolicy`: `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-suitable-official-server-side-sdk"`; `typedClientOverride`: `"Five9ProviderClient"`; \} |
| `providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"0.1.3"`; `package`: `"five9"`; `reason`: `"Third-party package last published years ago, not an official maintained Five9 runtime SDK."`; `result`: `"third-party-stale-node-module"`; \}, \{ `checkedVersion`: `"7.2.0"`; `license`: `"ISC"`; `package`: `"uniphore-five9-messaging-api-client-library"`; `reason`: `"Uniphore-maintained messaging client, not an official Five9 contact-center runtime SDK for the declared handoff surface."`; `result`: `"third-party-messaging-specific-client"`; \}, \{ `package`: `"Five9 CRM SDK"`; `reason`: `"Five9 JavaScript CRM SDK is loaded from Five9 CDN for browser pages integrated with Agent Desktop Toolkit."`; `result`: `"browser-agent-desktop-cdn-sdk-not-node-runtime"`; \}\] |
| `providerSdkDecision.defaultRestPolicy` | `"fail-closed-configured-rest-adapter-with-typed-provider-client-override"` |
| `providerSdkDecision.result` | `"no-suitable-official-server-side-sdk"` |
| `providerSdkDecision.typedClientOverride` | `"Five9ProviderClient"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"No suitable official backend JavaScript/TypeScript SDK was verified; five9@0.1.3 is third-party and stale, Uniphore's package is third-party and messaging-specific, and Five9 CRM SDK is browser/ADT-oriented."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-25"` |
