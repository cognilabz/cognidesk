# integrations/contact-center/talkdesk/dist/manifest

## Variables

### talkdeskProviderManifest

```ts
const talkdeskProviderManifest: {
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
     capability: "schedule";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "callback";
        label: "callback";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "create-provider-object";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact-center-task";
        label: "Contact Center Task";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "contact-center";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Talkdesk public OpenAPI bundle";
        url: "https://api-docs.talkdeskapp.com/public-api";
      }, {
        label: "Talkdesk Callback API";
        url: "https://docs.talkdesk.com/docs/callback-api";
     }];
     notes: readonly ["No suitable official npm REST SDK was verified.", "Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with TalkdeskProviderClient available as an override."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "talkdesk-api-root";
     label: "Talkdesk localized API root";
     required: true;
   }, {
     id: "talkdesk-api-access";
     label: "Talkdesk OAuth access";
     required: true;
   }, {
     id: "talkdesk-routing";
     label: "Talkdesk callback/case routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.talkdesk";
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
           alias: "contact-center.callback.schedule";
           checksum: "sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491";
           id: "calls-callback-post";
           method: "POST";
           path: "/calls/callback";
           source: "https://api-docs.talkdeskapp.com/public-api";
         }, {
           alias: "contact-center.task.create";
           checksum: "sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491";
           id: "CreatingACase";
           method: "POST";
           path: "/cm/core/va/cases";
           source: "https://api-docs.talkdeskapp.com/public-api";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              package: "@talkdesk/td-sdk";
              reason: "No public npm package exists under this likely official SDK name.";
              result: "not-published";
            }, {
              package: "@talkdesk/client-sdk";
              reason: "No public npm package exists under this likely official SDK name.";
              result: "not-published";
            }, {
              package: "@talkdesk/app-connect";
              reason: "No public npm package exists under this likely official SDK name.";
              result: "not-published";
           }];
           defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
           result: "no-official-npm-rest-sdk";
           typedClientOverride: "TalkdeskProviderClient";
        };
        sdkDecision: "No suitable official npm REST SDK was verified; this package provides a built-in REST adapter with providerClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        providerClientOverride: "TalkdeskProviderClient";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           package: "@talkdesk/td-sdk";
           reason: "No public npm package exists under this likely official SDK name.";
           result: "not-published";
         }, {
           package: "@talkdesk/client-sdk";
           reason: "No public npm package exists under this likely official SDK name.";
           result: "not-published";
         }, {
           package: "@talkdesk/app-connect";
           reason: "No public npm package exists under this likely official SDK name.";
           result: "not-published";
        }];
        defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
        result: "no-official-npm-rest-sdk";
        typedClientOverride: "TalkdeskProviderClient";
     };
  };
  name: "Talkdesk";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.callback.schedule";
     capability: "schedule";
     providerObject: "callback";
   }, {
     alias: "contact-center.task.create";
     capability: "create-provider-object";
     providerObject: "contact-center-task";
  }];
  packageName: "@cognidesk/integration-contact-center-talkdesk";
  provider: "talkdesk";
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
| `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"schedule"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"callback"`; `label`: `"callback"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"create-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact-center-task"`; `label`: `"Contact Center Task"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"contact-center"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Talkdesk public OpenAPI bundle"`; `url`: `"https://api-docs.talkdeskapp.com/public-api"`; \}, \{ `label`: `"Talkdesk Callback API"`; `url`: `"https://docs.talkdesk.com/docs/callback-api"`; \}\]; `notes`: readonly \[`"No suitable official npm REST SDK was verified."`, `"Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with TalkdeskProviderClient available as an override."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Talkdesk public OpenAPI bundle"`; `url`: `"https://api-docs.talkdeskapp.com/public-api"`; \}, \{ `label`: `"Talkdesk Callback API"`; `url`: `"https://docs.talkdesk.com/docs/callback-api"`; \}\] |
| `coverage.notes` | readonly \[`"No suitable official npm REST SDK was verified."`, `"Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with TalkdeskProviderClient available as an override."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"talkdesk-api-root"`; `label`: `"Talkdesk localized API root"`; `required`: `true`; \}, \{ `id`: `"talkdesk-api-access"`; `label`: `"Talkdesk OAuth access"`; `required`: `true`; \}, \{ `id`: `"talkdesk-routing"`; `label`: `"Talkdesk callback/case routing configuration"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.talkdesk"` |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`; `id`: `"calls-callback-post"`; `method`: `"POST"`; `path`: `"/calls/callback"`; `source`: `"https://api-docs.talkdeskapp.com/public-api"`; \}, \{ `alias`: `"contact-center.task.create"`; `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`; `id`: `"CreatingACase"`; `method`: `"POST"`; `path`: `"/cm/core/va/cases"`; `source`: `"https://api-docs.talkdeskapp.com/public-api"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-official-npm-rest-sdk"`; `typedClientOverride`: `"TalkdeskProviderClient"`; \}; `sdkDecision`: `"No suitable official npm REST SDK was verified; this package provides a built-in REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `providerClientOverride`: `"TalkdeskProviderClient"`; `strategy`: `"provider-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-official-npm-rest-sdk"`; `typedClientOverride`: `"TalkdeskProviderClient"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`; `id`: `"calls-callback-post"`; `method`: `"POST"`; `path`: `"/calls/callback"`; `source`: `"https://api-docs.talkdeskapp.com/public-api"`; \}, \{ `alias`: `"contact-center.task.create"`; `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`; `id`: `"CreatingACase"`; `method`: `"POST"`; `path`: `"/cm/core/va/cases"`; `source`: `"https://api-docs.talkdeskapp.com/public-api"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-official-npm-rest-sdk"`; `typedClientOverride`: `"TalkdeskProviderClient"`; \}; `sdkDecision`: `"No suitable official npm REST SDK was verified; this package provides a built-in REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`; `id`: `"calls-callback-post"`; `method`: `"POST"`; `path`: `"/calls/callback"`; `source`: `"https://api-docs.talkdeskapp.com/public-api"`; \}, \{ `alias`: `"contact-center.task.create"`; `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`; `id`: `"CreatingACase"`; `method`: `"POST"`; `path`: `"/cm/core/va/cases"`; `source`: `"https://api-docs.talkdeskapp.com/public-api"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-official-npm-rest-sdk"`; `typedClientOverride`: `"TalkdeskProviderClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-official-npm-rest-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"TalkdeskProviderClient"` |
| `metadata.implementation.sdkDecision` | `"No suitable official npm REST SDK was verified; this package provides a built-in REST adapter with providerClient override."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `providerClientOverride`: `"TalkdeskProviderClient"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapter.providerClientOverride` | `"TalkdeskProviderClient"` |
| `metadata.providerRestAdapter.strategy` | `"provider-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-official-npm-rest-sdk"`; `typedClientOverride`: `"TalkdeskProviderClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-official-npm-rest-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"TalkdeskProviderClient"` |
| `name` | `"Talkdesk"` |
| `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `capability`: `"schedule"`; `providerObject`: `"callback"`; \}, \{ `alias`: `"contact-center.task.create"`; `capability`: `"create-provider-object"`; `providerObject`: `"contact-center-task"`; \}\] |
| `packageName` | `"@cognidesk/integration-contact-center-talkdesk"` |
| `provider` | `"talkdesk"` |
| `trustLevel` | `"official"` |

***

### talkdeskProviderManifestInput

```ts
const talkdeskProviderManifestInput: {
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
     capability: "schedule";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "callback";
        label: "callback";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "create-provider-object";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact-center-task";
        label: "Contact Center Task";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "contact-center";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Talkdesk public OpenAPI bundle";
        url: "https://api-docs.talkdeskapp.com/public-api";
      }, {
        label: "Talkdesk Callback API";
        url: "https://docs.talkdesk.com/docs/callback-api";
     }];
     notes: readonly ["No suitable official npm REST SDK was verified.", "Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with TalkdeskProviderClient available as an override."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "talkdesk-api-root";
     label: "Talkdesk localized API root";
     required: true;
   }, {
     id: "talkdesk-api-access";
     label: "Talkdesk OAuth access";
     required: true;
   }, {
     id: "talkdesk-routing";
     label: "Talkdesk callback/case routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.talkdesk";
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
           alias: "contact-center.callback.schedule";
           checksum: "sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491";
           id: "calls-callback-post";
           method: "POST";
           path: "/calls/callback";
           source: "https://api-docs.talkdeskapp.com/public-api";
         }, {
           alias: "contact-center.task.create";
           checksum: "sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491";
           id: "CreatingACase";
           method: "POST";
           path: "/cm/core/va/cases";
           source: "https://api-docs.talkdeskapp.com/public-api";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              package: "@talkdesk/td-sdk";
              reason: "No public npm package exists under this likely official SDK name.";
              result: "not-published";
            }, {
              package: "@talkdesk/client-sdk";
              reason: "No public npm package exists under this likely official SDK name.";
              result: "not-published";
            }, {
              package: "@talkdesk/app-connect";
              reason: "No public npm package exists under this likely official SDK name.";
              result: "not-published";
           }];
           defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
           result: "no-official-npm-rest-sdk";
           typedClientOverride: "TalkdeskProviderClient";
        };
        sdkDecision: "No suitable official npm REST SDK was verified; this package provides a built-in REST adapter with providerClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        providerClientOverride: "TalkdeskProviderClient";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           package: "@talkdesk/td-sdk";
           reason: "No public npm package exists under this likely official SDK name.";
           result: "not-published";
         }, {
           package: "@talkdesk/client-sdk";
           reason: "No public npm package exists under this likely official SDK name.";
           result: "not-published";
         }, {
           package: "@talkdesk/app-connect";
           reason: "No public npm package exists under this likely official SDK name.";
           result: "not-published";
        }];
        defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
        result: "no-official-npm-rest-sdk";
        typedClientOverride: "TalkdeskProviderClient";
     };
  };
  name: "Talkdesk";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.callback.schedule";
     capability: "schedule";
     providerObject: "callback";
   }, {
     alias: "contact-center.task.create";
     capability: "create-provider-object";
     providerObject: "contact-center-task";
  }];
  packageName: "@cognidesk/integration-contact-center-talkdesk";
  provider: "talkdesk";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"schedule"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"callback"`; `label`: `"callback"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"create-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact-center-task"`; `label`: `"Contact Center Task"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Talkdesk public OpenAPI bundle"`; `url`: `"https://api-docs.talkdeskapp.com/public-api"`; \}, \{ `label`: `"Talkdesk Callback API"`; `url`: `"https://docs.talkdesk.com/docs/callback-api"`; \}\]; `notes`: readonly \[`"No suitable official npm REST SDK was verified."`, `"Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with TalkdeskProviderClient available as an override."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Talkdesk public OpenAPI bundle"`; `url`: `"https://api-docs.talkdeskapp.com/public-api"`; \}, \{ `label`: `"Talkdesk Callback API"`; `url`: `"https://docs.talkdesk.com/docs/callback-api"`; \}\] |
| `coverage.notes` | readonly \[`"No suitable official npm REST SDK was verified."`, `"Runtime calls use a built-in REST adapter when baseUrl/API credentials are supplied, with TalkdeskProviderClient available as an override."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `id`: `"talkdesk-api-root"`; `label`: `"Talkdesk localized API root"`; `required`: `true`; \}, \{ `id`: `"talkdesk-api-access"`; `label`: `"Talkdesk OAuth access"`; `required`: `true`; \}, \{ `id`: `"talkdesk-routing"`; `label`: `"Talkdesk callback/case routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.talkdesk"` |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`; `id`: `"calls-callback-post"`; `method`: `"POST"`; `path`: `"/calls/callback"`; `source`: `"https://api-docs.talkdeskapp.com/public-api"`; \}, \{ `alias`: `"contact-center.task.create"`; `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`; `id`: `"CreatingACase"`; `method`: `"POST"`; `path`: `"/cm/core/va/cases"`; `source`: `"https://api-docs.talkdeskapp.com/public-api"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-official-npm-rest-sdk"`; `typedClientOverride`: `"TalkdeskProviderClient"`; \}; `sdkDecision`: `"No suitable official npm REST SDK was verified; this package provides a built-in REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `providerClientOverride`: `"TalkdeskProviderClient"`; `strategy`: `"provider-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-official-npm-rest-sdk"`; `typedClientOverride`: `"TalkdeskProviderClient"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`; `id`: `"calls-callback-post"`; `method`: `"POST"`; `path`: `"/calls/callback"`; `source`: `"https://api-docs.talkdeskapp.com/public-api"`; \}, \{ `alias`: `"contact-center.task.create"`; `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`; `id`: `"CreatingACase"`; `method`: `"POST"`; `path`: `"/cm/core/va/cases"`; `source`: `"https://api-docs.talkdeskapp.com/public-api"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-official-npm-rest-sdk"`; `typedClientOverride`: `"TalkdeskProviderClient"`; \}; `sdkDecision`: `"No suitable official npm REST SDK was verified; this package provides a built-in REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`; `id`: `"calls-callback-post"`; `method`: `"POST"`; `path`: `"/calls/callback"`; `source`: `"https://api-docs.talkdeskapp.com/public-api"`; \}, \{ `alias`: `"contact-center.task.create"`; `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`; `id`: `"CreatingACase"`; `method`: `"POST"`; `path`: `"/cm/core/va/cases"`; `source`: `"https://api-docs.talkdeskapp.com/public-api"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-official-npm-rest-sdk"`; `typedClientOverride`: `"TalkdeskProviderClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-official-npm-rest-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"TalkdeskProviderClient"` |
| `metadata.implementation.sdkDecision` | `"No suitable official npm REST SDK was verified; this package provides a built-in REST adapter with providerClient override."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `providerClientOverride`: `"TalkdeskProviderClient"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapter.providerClientOverride` | `"TalkdeskProviderClient"` |
| `metadata.providerRestAdapter.strategy` | `"provider-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-official-npm-rest-sdk"`; `typedClientOverride`: `"TalkdeskProviderClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-official-npm-rest-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"TalkdeskProviderClient"` |
| <a id="property-name"></a> `name` | `"Talkdesk"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `capability`: `"schedule"`; `providerObject`: `"callback"`; \}, \{ `alias`: `"contact-center.task.create"`; `capability`: `"create-provider-object"`; `providerObject`: `"contact-center-task"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-talkdesk"` |
| <a id="property-provider"></a> `provider` | `"talkdesk"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### talkdeskProviderSdkDecision

```ts
const talkdeskProviderSdkDecision: {
  checkedAt: "2026-06-25";
  checkedPackages: readonly [{
     package: "@talkdesk/td-sdk";
     reason: "No public npm package exists under this likely official SDK name.";
     result: "not-published";
   }, {
     package: "@talkdesk/client-sdk";
     reason: "No public npm package exists under this likely official SDK name.";
     result: "not-published";
   }, {
     package: "@talkdesk/app-connect";
     reason: "No public npm package exists under this likely official SDK name.";
     result: "not-published";
  }];
  defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
  result: "no-official-npm-rest-sdk";
  typedClientOverride: "TalkdeskProviderClient";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-checkedat"></a> `checkedAt` | `"2026-06-25"` |
| <a id="property-checkedpackages"></a> `checkedPackages` | readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\] |
| <a id="property-defaultrestpolicy"></a> `defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| <a id="property-result"></a> `result` | `"no-official-npm-rest-sdk"` |
| <a id="property-typedclientoverride"></a> `typedClientOverride` | `"TalkdeskProviderClient"` |

***

### talkdeskSupportSlice

```ts
const talkdeskSupportSlice: {
  adapterKind: "no-official-sdk-rest-adapter";
  allowedOperations: readonly [{
     alias: "contact-center.handoff.request";
     checksum: "not-applicable-host-configured";
     id: "configuredHandoff";
     method: "POST";
     path: "host-configured";
     source: "provider-rest-adapter";
   }, {
     alias: "contact-center.callback.schedule";
     checksum: "sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491";
     id: "calls-callback-post";
     method: "POST";
     path: "/calls/callback";
     source: "https://api-docs.talkdeskapp.com/public-api";
   }, {
     alias: "contact-center.task.create";
     checksum: "sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491";
     id: "CreatingACase";
     method: "POST";
     path: "/cm/core/va/cases";
     source: "https://api-docs.talkdeskapp.com/public-api";
  }];
  implementationStrategy: "provider-rest-adapter";
  providerSdkDecision: {
     checkedAt: "2026-06-25";
     checkedPackages: readonly [{
        package: "@talkdesk/td-sdk";
        reason: "No public npm package exists under this likely official SDK name.";
        result: "not-published";
      }, {
        package: "@talkdesk/client-sdk";
        reason: "No public npm package exists under this likely official SDK name.";
        result: "not-published";
      }, {
        package: "@talkdesk/app-connect";
        reason: "No public npm package exists under this likely official SDK name.";
        result: "not-published";
     }];
     defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
     result: "no-official-npm-rest-sdk";
     typedClientOverride: "TalkdeskProviderClient";
  };
  sdkDecision: "No suitable official npm REST SDK was verified; this package provides a built-in REST adapter with providerClient override.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind"></a> `adapterKind` | `"no-official-sdk-rest-adapter"` |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`; `id`: `"calls-callback-post"`; `method`: `"POST"`; `path`: `"/calls/callback"`; `source`: `"https://api-docs.talkdeskapp.com/public-api"`; \}, \{ `alias`: `"contact-center.task.create"`; `checksum`: `"sha256:aa27c72eff1b281fdebab70da85cb4cd30f98c37dd0465207f7bab00438be491"`; `id`: `"CreatingACase"`; `method`: `"POST"`; `path`: `"/cm/core/va/cases"`; `source`: `"https://api-docs.talkdeskapp.com/public-api"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"provider-rest-adapter"` |
| <a id="property-providersdkdecision"></a> `providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-official-npm-rest-sdk"`; `typedClientOverride`: `"TalkdeskProviderClient"`; \} |
| `providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `providerSdkDecision.checkedPackages` | readonly \[\{ `package`: `"@talkdesk/td-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/client-sdk"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}, \{ `package`: `"@talkdesk/app-connect"`; `reason`: `"No public npm package exists under this likely official SDK name."`; `result`: `"not-published"`; \}\] |
| `providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `providerSdkDecision.result` | `"no-official-npm-rest-sdk"` |
| `providerSdkDecision.typedClientOverride` | `"TalkdeskProviderClient"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"No suitable official npm REST SDK was verified; this package provides a built-in REST adapter with providerClient override."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-25"` |
