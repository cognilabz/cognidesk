# integrations/contact-center/aircall/dist/manifest

## Variables

### aircallOperationAliases

```ts
const aircallOperationAliases: readonly ["contact-center.handoff.request"];
```

***

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
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "callTransfer";
        label: "Aircall call transfer";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "contact-center";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Aircall API References";
        url: "https://developer.aircall.io/api-references/";
      }, {
        label: "Aircall Everywhere SDK";
        url: "https://github.com/aircall/aircall-everywhere";
      }, {
        label: "aircall-everywhere npm package";
        url: "https://www.npmjs.com/package/aircall-everywhere";
     }];
     notes: ["aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client.", "Runtime calls use Aircall Public API REST for documented call transfer and ping endpoints, with AircallRawClient available as the host-client override."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "aircall-api-base";
     label: "Aircall Public API base URL";
     required: false;
   }, {
     id: "aircall-api-access";
     label: "Aircall OAuth bearer token or Basic authorization header";
     required: true;
   }, {
     id: "aircall-routing";
     label: "Aircall number/team/routing configuration";
     required: false;
  }];
  directions: ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.aircall";
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        adapterKind: "aircall-public-api-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "aircall-public-api-transfer-call-2026-06-25";
           id: "transferCall";
           method: "POST";
           path: "/calls/{callId}/transfers";
           source: "provider-rest-adapter";
        }];
        defaultBaseUrl: "https://api.aircall.io/v1";
        failClosed: "Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall().";
        implementationStrategy: "no-official-sdk-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "2.0.6";
              license: "ISC";
              package: "aircall-everywhere";
              reason: "Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations.";
              result: "browser-workspace-iframe-sdk-not-public-api-client";
           }];
           defaultRestPolicy: "fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override";
           result: "no-suitable-server-side-public-api-sdk";
           typedClientOverride: "AircallRawClient";
        };
        sdkDecision: "No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "aircall-public-api-rest-adapter";
        defaultBaseUrl: "https://api.aircall.io/v1";
        defaultClientPolicy: "provider-rest-adapter-when-configured";
        failClosed: true;
        rawClientOverride: "AircallRawClient";
        strategy: "no-official-sdk-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "2.0.6";
           license: "ISC";
           package: "aircall-everywhere";
           reason: "Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations.";
           result: "browser-workspace-iframe-sdk-not-public-api-client";
        }];
        defaultRestPolicy: "fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override";
        result: "no-suitable-server-side-public-api-sdk";
        typedClientOverride: "AircallRawClient";
     };
  };
  name: "Aircall";
  operations: [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "callTransfer";
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
| `capabilities` | \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"callTransfer"`; `label`: `"Aircall call transfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"contact-center"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Aircall API References"`; `url`: `"https://developer.aircall.io/api-references/"`; \}, \{ `label`: `"Aircall Everywhere SDK"`; `url`: `"https://github.com/aircall/aircall-everywhere"`; \}, \{ `label`: `"aircall-everywhere npm package"`; `url`: `"https://www.npmjs.com/package/aircall-everywhere"`; \}\]; `notes`: \[`"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client."`, `"Runtime calls use Aircall Public API REST for documented call transfer and ping endpoints, with AircallRawClient available as the host-client override."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Aircall API References"`; `url`: `"https://developer.aircall.io/api-references/"`; \}, \{ `label`: `"Aircall Everywhere SDK"`; `url`: `"https://github.com/aircall/aircall-everywhere"`; \}, \{ `label`: `"aircall-everywhere npm package"`; `url`: `"https://www.npmjs.com/package/aircall-everywhere"`; \}\] |
| `coverage.notes` | \[`"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client."`, `"Runtime calls use Aircall Public API REST for documented call transfer and ping endpoints, with AircallRawClient available as the host-client override."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `id`: `"aircall-api-base"`; `label`: `"Aircall Public API base URL"`; `required`: `false`; \}, \{ `id`: `"aircall-api-access"`; `label`: `"Aircall OAuth bearer token or Basic authorization header"`; `required`: `true`; \}, \{ `id`: `"aircall-routing"`; `label`: `"Aircall number/team/routing configuration"`; `required`: `false`; \}\] |
| `directions` | \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.aircall"` |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `adapterKind`: `"aircall-public-api-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"aircall-public-api-transfer-call-2026-06-25"`; `id`: `"transferCall"`; `method`: `"POST"`; `path`: `"/calls/{callId}/transfers"`; `source`: `"provider-rest-adapter"`; \}\]; `defaultBaseUrl`: `"https://api.aircall.io/v1"`; `failClosed`: `"Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall()."`; `implementationStrategy`: `"no-official-sdk-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-public-api-sdk"`; `typedClientOverride`: `"AircallRawClient"`; \}; `sdkDecision`: `"No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"aircall-public-api-rest-adapter"`; `defaultBaseUrl`: `"https://api.aircall.io/v1"`; `defaultClientPolicy`: `"provider-rest-adapter-when-configured"`; `failClosed`: `true`; `rawClientOverride`: `"AircallRawClient"`; `strategy`: `"no-official-sdk-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-public-api-sdk"`; `typedClientOverride`: `"AircallRawClient"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"aircall-public-api-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"aircall-public-api-transfer-call-2026-06-25"`; `id`: `"transferCall"`; `method`: `"POST"`; `path`: `"/calls/{callId}/transfers"`; `source`: `"provider-rest-adapter"`; \}\]; `defaultBaseUrl`: `"https://api.aircall.io/v1"`; `failClosed`: `"Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall()."`; `implementationStrategy`: `"no-official-sdk-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-public-api-sdk"`; `typedClientOverride`: `"AircallRawClient"`; \}; `sdkDecision`: `"No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"aircall-public-api-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"aircall-public-api-transfer-call-2026-06-25"`; `id`: `"transferCall"`; `method`: `"POST"`; `path`: `"/calls/{callId}/transfers"`; `source`: `"provider-rest-adapter"`; \}\] |
| `metadata.implementation.defaultBaseUrl` | `"https://api.aircall.io/v1"` |
| `metadata.implementation.failClosed` | `"Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall()."` |
| `metadata.implementation.implementationStrategy` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-public-api-sdk"`; `typedClientOverride`: `"AircallRawClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-suitable-server-side-public-api-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"AircallRawClient"` |
| `metadata.implementation.sdkDecision` | `"No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"aircall-public-api-rest-adapter"`; `defaultBaseUrl`: `"https://api.aircall.io/v1"`; `defaultClientPolicy`: `"provider-rest-adapter-when-configured"`; `failClosed`: `true`; `rawClientOverride`: `"AircallRawClient"`; `strategy`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"aircall-public-api-rest-adapter"` |
| `metadata.providerRestAdapter.defaultBaseUrl` | `"https://api.aircall.io/v1"` |
| `metadata.providerRestAdapter.defaultClientPolicy` | `"provider-rest-adapter-when-configured"` |
| `metadata.providerRestAdapter.failClosed` | `true` |
| `metadata.providerRestAdapter.rawClientOverride` | `"AircallRawClient"` |
| `metadata.providerRestAdapter.strategy` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-public-api-sdk"`; `typedClientOverride`: `"AircallRawClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-suitable-server-side-public-api-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"AircallRawClient"` |
| `name` | `"Aircall"` |
| `operations` | \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"callTransfer"`; \}\] |
| `packageName` | `"@cognidesk/integration-contact-center-aircall"` |
| `provider` | `"aircall"` |
| `trustLevel` | `"official"` |

***

### aircallProviderManifestInput

```ts
const aircallProviderManifestInput: {
  capabilities: [{
     capability: "handoff";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "callTransfer";
        label: "Aircall call transfer";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "contact-center";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Aircall API References";
        url: "https://developer.aircall.io/api-references/";
      }, {
        label: "Aircall Everywhere SDK";
        url: "https://github.com/aircall/aircall-everywhere";
      }, {
        label: "aircall-everywhere npm package";
        url: "https://www.npmjs.com/package/aircall-everywhere";
     }];
     notes: ["aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client.", "Runtime calls use Aircall Public API REST for documented call transfer and ping endpoints, with AircallRawClient available as the host-client override."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "aircall-api-base";
     label: "Aircall Public API base URL";
     required: false;
   }, {
     id: "aircall-api-access";
     label: "Aircall OAuth bearer token or Basic authorization header";
     required: true;
   }, {
     id: "aircall-routing";
     label: "Aircall number/team/routing configuration";
     required: false;
  }];
  directions: ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.aircall";
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        adapterKind: "aircall-public-api-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "aircall-public-api-transfer-call-2026-06-25";
           id: "transferCall";
           method: "POST";
           path: "/calls/{callId}/transfers";
           source: "provider-rest-adapter";
        }];
        defaultBaseUrl: "https://api.aircall.io/v1";
        failClosed: "Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall().";
        implementationStrategy: "no-official-sdk-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "2.0.6";
              license: "ISC";
              package: "aircall-everywhere";
              reason: "Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations.";
              result: "browser-workspace-iframe-sdk-not-public-api-client";
           }];
           defaultRestPolicy: "fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override";
           result: "no-suitable-server-side-public-api-sdk";
           typedClientOverride: "AircallRawClient";
        };
        sdkDecision: "No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "aircall-public-api-rest-adapter";
        defaultBaseUrl: "https://api.aircall.io/v1";
        defaultClientPolicy: "provider-rest-adapter-when-configured";
        failClosed: true;
        rawClientOverride: "AircallRawClient";
        strategy: "no-official-sdk-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "2.0.6";
           license: "ISC";
           package: "aircall-everywhere";
           reason: "Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations.";
           result: "browser-workspace-iframe-sdk-not-public-api-client";
        }];
        defaultRestPolicy: "fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override";
        result: "no-suitable-server-side-public-api-sdk";
        typedClientOverride: "AircallRawClient";
     };
  };
  name: "Aircall";
  operations: [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "callTransfer";
  }];
  packageName: "@cognidesk/integration-contact-center-aircall";
  provider: "aircall";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"callTransfer"`; `label`: `"Aircall call transfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Aircall API References"`; `url`: `"https://developer.aircall.io/api-references/"`; \}, \{ `label`: `"Aircall Everywhere SDK"`; `url`: `"https://github.com/aircall/aircall-everywhere"`; \}, \{ `label`: `"aircall-everywhere npm package"`; `url`: `"https://www.npmjs.com/package/aircall-everywhere"`; \}\]; `notes`: \[`"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client."`, `"Runtime calls use Aircall Public API REST for documented call transfer and ping endpoints, with AircallRawClient available as the host-client override."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Aircall API References"`; `url`: `"https://developer.aircall.io/api-references/"`; \}, \{ `label`: `"Aircall Everywhere SDK"`; `url`: `"https://github.com/aircall/aircall-everywhere"`; \}, \{ `label`: `"aircall-everywhere npm package"`; `url`: `"https://www.npmjs.com/package/aircall-everywhere"`; \}\] |
| `coverage.notes` | \[`"aircall-everywhere is a maintained Workspace iframe SDK, not a server-side Public API client."`, `"Runtime calls use Aircall Public API REST for documented call transfer and ping endpoints, with AircallRawClient available as the host-client override."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `id`: `"aircall-api-base"`; `label`: `"Aircall Public API base URL"`; `required`: `false`; \}, \{ `id`: `"aircall-api-access"`; `label`: `"Aircall OAuth bearer token or Basic authorization header"`; `required`: `true`; \}, \{ `id`: `"aircall-routing"`; `label`: `"Aircall number/team/routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.aircall"` |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `adapterKind`: `"aircall-public-api-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"aircall-public-api-transfer-call-2026-06-25"`; `id`: `"transferCall"`; `method`: `"POST"`; `path`: `"/calls/{callId}/transfers"`; `source`: `"provider-rest-adapter"`; \}\]; `defaultBaseUrl`: `"https://api.aircall.io/v1"`; `failClosed`: `"Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall()."`; `implementationStrategy`: `"no-official-sdk-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-public-api-sdk"`; `typedClientOverride`: `"AircallRawClient"`; \}; `sdkDecision`: `"No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"aircall-public-api-rest-adapter"`; `defaultBaseUrl`: `"https://api.aircall.io/v1"`; `defaultClientPolicy`: `"provider-rest-adapter-when-configured"`; `failClosed`: `true`; `rawClientOverride`: `"AircallRawClient"`; `strategy`: `"no-official-sdk-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-public-api-sdk"`; `typedClientOverride`: `"AircallRawClient"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"aircall-public-api-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"aircall-public-api-transfer-call-2026-06-25"`; `id`: `"transferCall"`; `method`: `"POST"`; `path`: `"/calls/{callId}/transfers"`; `source`: `"provider-rest-adapter"`; \}\]; `defaultBaseUrl`: `"https://api.aircall.io/v1"`; `failClosed`: `"Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall()."`; `implementationStrategy`: `"no-official-sdk-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-public-api-sdk"`; `typedClientOverride`: `"AircallRawClient"`; \}; `sdkDecision`: `"No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"aircall-public-api-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"aircall-public-api-transfer-call-2026-06-25"`; `id`: `"transferCall"`; `method`: `"POST"`; `path`: `"/calls/{callId}/transfers"`; `source`: `"provider-rest-adapter"`; \}\] |
| `metadata.implementation.defaultBaseUrl` | `"https://api.aircall.io/v1"` |
| `metadata.implementation.failClosed` | `"Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall()."` |
| `metadata.implementation.implementationStrategy` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-public-api-sdk"`; `typedClientOverride`: `"AircallRawClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-suitable-server-side-public-api-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"AircallRawClient"` |
| `metadata.implementation.sdkDecision` | `"No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"aircall-public-api-rest-adapter"`; `defaultBaseUrl`: `"https://api.aircall.io/v1"`; `defaultClientPolicy`: `"provider-rest-adapter-when-configured"`; `failClosed`: `true`; `rawClientOverride`: `"AircallRawClient"`; `strategy`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"aircall-public-api-rest-adapter"` |
| `metadata.providerRestAdapter.defaultBaseUrl` | `"https://api.aircall.io/v1"` |
| `metadata.providerRestAdapter.defaultClientPolicy` | `"provider-rest-adapter-when-configured"` |
| `metadata.providerRestAdapter.failClosed` | `true` |
| `metadata.providerRestAdapter.rawClientOverride` | `"AircallRawClient"` |
| `metadata.providerRestAdapter.strategy` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-public-api-sdk"`; `typedClientOverride`: `"AircallRawClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-suitable-server-side-public-api-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"AircallRawClient"` |
| <a id="property-name"></a> `name` | `"Aircall"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"callTransfer"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-aircall"` |
| <a id="property-provider"></a> `provider` | `"aircall"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### aircallProviderSdkDecision

```ts
const aircallProviderSdkDecision: {
  checkedAt: "2026-06-25";
  checkedPackages: readonly [{
     checkedVersion: "2.0.6";
     license: "ISC";
     package: "aircall-everywhere";
     reason: "Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations.";
     result: "browser-workspace-iframe-sdk-not-public-api-client";
  }];
  defaultRestPolicy: "fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override";
  result: "no-suitable-server-side-public-api-sdk";
  typedClientOverride: "AircallRawClient";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-checkedat"></a> `checkedAt` | `"2026-06-25"` |
| <a id="property-checkedpackages"></a> `checkedPackages` | readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\] |
| <a id="property-defaultrestpolicy"></a> `defaultRestPolicy` | `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"` |
| <a id="property-result"></a> `result` | `"no-suitable-server-side-public-api-sdk"` |
| <a id="property-typedclientoverride"></a> `typedClientOverride` | `"AircallRawClient"` |

***

### aircallRestSupportSlice

```ts
const aircallRestSupportSlice: {
  adapterKind: "aircall-public-api-rest-adapter";
  allowedOperations: readonly [{
     alias: "contact-center.handoff.request";
     checksum: "aircall-public-api-transfer-call-2026-06-25";
     id: "transferCall";
     method: "POST";
     path: "/calls/{callId}/transfers";
     source: "provider-rest-adapter";
  }];
  defaultBaseUrl: "https://api.aircall.io/v1";
  failClosed: "Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall().";
  implementationStrategy: "no-official-sdk-rest-adapter";
  providerSdkDecision: {
     checkedAt: "2026-06-25";
     checkedPackages: readonly [{
        checkedVersion: "2.0.6";
        license: "ISC";
        package: "aircall-everywhere";
        reason: "Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations.";
        result: "browser-workspace-iframe-sdk-not-public-api-client";
     }];
     defaultRestPolicy: "fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override";
     result: "no-suitable-server-side-public-api-sdk";
     typedClientOverride: "AircallRawClient";
  };
  sdkDecision: "No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind"></a> `adapterKind` | `"aircall-public-api-rest-adapter"` |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"aircall-public-api-transfer-call-2026-06-25"`; `id`: `"transferCall"`; `method`: `"POST"`; `path`: `"/calls/{callId}/transfers"`; `source`: `"provider-rest-adapter"`; \}\] |
| <a id="property-defaultbaseurl"></a> `defaultBaseUrl` | `"https://api.aircall.io/v1"` |
| <a id="property-failclosed"></a> `failClosed` | `"Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall()."` |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"no-official-sdk-rest-adapter"` |
| <a id="property-providersdkdecision"></a> `providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-public-api-sdk"`; `typedClientOverride`: `"AircallRawClient"`; \} |
| `providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\] |
| `providerSdkDecision.defaultRestPolicy` | `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"` |
| `providerSdkDecision.result` | `"no-suitable-server-side-public-api-sdk"` |
| `providerSdkDecision.typedClientOverride` | `"AircallRawClient"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-25"` |

***

### aircallSupportSlice

```ts
const aircallSupportSlice: {
  adapterKind: "aircall-public-api-rest-adapter";
  allowedOperations: readonly [{
     alias: "contact-center.handoff.request";
     checksum: "aircall-public-api-transfer-call-2026-06-25";
     id: "transferCall";
     method: "POST";
     path: "/calls/{callId}/transfers";
     source: "provider-rest-adapter";
  }];
  defaultBaseUrl: "https://api.aircall.io/v1";
  failClosed: "Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall().";
  implementationStrategy: "no-official-sdk-rest-adapter";
  providerSdkDecision: {
     checkedAt: "2026-06-25";
     checkedPackages: readonly [{
        checkedVersion: "2.0.6";
        license: "ISC";
        package: "aircall-everywhere";
        reason: "Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations.";
        result: "browser-workspace-iframe-sdk-not-public-api-client";
     }];
     defaultRestPolicy: "fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override";
     result: "no-suitable-server-side-public-api-sdk";
     typedClientOverride: "AircallRawClient";
  };
  sdkDecision: "No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind-1"></a> `adapterKind` | `"aircall-public-api-rest-adapter"` |
| <a id="property-allowedoperations-1"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"aircall-public-api-transfer-call-2026-06-25"`; `id`: `"transferCall"`; `method`: `"POST"`; `path`: `"/calls/{callId}/transfers"`; `source`: `"provider-rest-adapter"`; \}\] |
| <a id="property-defaultbaseurl-1"></a> `defaultBaseUrl` | `"https://api.aircall.io/v1"` |
| <a id="property-failclosed-1"></a> `failClosed` | `"Built-in REST calls require Aircall credentials and documented transfer inputs before fetch; rawClient overrides must implement transferCall()."` |
| <a id="property-implementationstrategy-1"></a> `implementationStrategy` | `"no-official-sdk-rest-adapter"` |
| <a id="property-providersdkdecision-1"></a> `providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"`; `result`: `"no-suitable-server-side-public-api-sdk"`; `typedClientOverride`: `"AircallRawClient"`; \} |
| `providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"2.0.6"`; `license`: `"ISC"`; `package`: `"aircall-everywhere"`; `reason`: `"Maintained official package embeds and communicates with Aircall Workspace in a browser; it does not expose server-side Public API transfer operations."`; `result`: `"browser-workspace-iframe-sdk-not-public-api-client"`; \}\] |
| `providerSdkDecision.defaultRestPolicy` | `"fail-closed-aircall-public-api-rest-adapter-with-typed-raw-client-override"` |
| `providerSdkDecision.result` | `"no-suitable-server-side-public-api-sdk"` |
| `providerSdkDecision.typedClientOverride` | `"AircallRawClient"` |
| <a id="property-sdkdecision-1"></a> `sdkDecision` | `"No maintained official backend/runtime SDK was found. aircall-everywhere is maintained, but it embeds the Workspace iframe in a browser; runtime support uses Aircall Public API REST with a strict rawClient override."` |
| <a id="property-verifiedat-1"></a> `verifiedAt` | `"2026-06-25"` |
