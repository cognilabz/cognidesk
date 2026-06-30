# integrations/contact-center/nice-cxone/dist/manifest

## Variables

### niceCxoneProviderManifest

```ts
const niceCxoneProviderManifest: {
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
        label: "NICE CXone REST APIs";
        url: "https://developer.niceincontact.com/API";
      }, {
        label: "NICE CXone ACD SDK package";
        url: "https://www.npmjs.com/package/@nice-devone/acd-sdk";
      }, {
        label: "NICE CXone Agent SDK repository";
        url: "https://github.com/nice-devone/nice-cxone-agent-sdk";
     }];
     notes: readonly ["Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and documented for CXone Agent/app-bundler use.", "Runtime calls use a fail-closed built-in REST adapter when baseUrl/API credentials are supplied, with NiceCxoneProviderClient available as a typed host override."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "nice-cxone-api-base";
     label: "NICE CXone API base URL";
     required: true;
   }, {
     id: "nice-cxone-api-access";
     label: "NICE CXone API access";
     required: true;
   }, {
     id: "nice-cxone-routing";
     label: "NICE CXone skill/queue routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.nice-cxone";
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
           checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
           id: "scheduleACallback";
           method: "POST";
           path: "/promise";
           source: "https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs";
         }, {
           alias: "contact-center.contact.start";
           checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
           id: "startChatSession";
           method: "POST";
           path: "/contacts/chats";
           source: "https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs";
         }, {
           alias: "contact-center.contact.end";
           checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
           id: "endChat";
           method: "DELETE";
           path: "/contacts/chats/{chatSession}";
           source: "https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs";
         }, {
           alias: "nice-cxone.request";
           checksum: "not-applicable-host-configured";
           id: "providerExtensionRequest";
           method: "GET";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "26.2.1";
              license: "UNLICENSED";
              package: "@nice-devone/acd-sdk";
              reason: "Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client.";
              result: "official-sdk-not-redistributable-server-rest-client";
            }, {
              checkedVersion: "26.2.1";
              license: "UNLICENSED";
              package: "@nice-devone/agent-sdk";
              reason: "Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime.";
              result: "agent-app-sdk-not-server-rest-client";
            }, {
              checkedVersion: "3.3.0";
              license: "UNLICENSED";
              package: "@nice-devone/nice-cxone-chat-web-sdk";
              reason: "Web SDK targets browser DFO chat rather than package-owned Contact Center server operations.";
              result: "browser-dfo-chat-sdk-not-contact-center-server-client";
           }];
           defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
           result: "no-redistributable-server-side-cxone-sdk";
           typedClientOverride: "NiceCxoneProviderClient";
        };
        sdkDecision: "Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        failureMode: "fail-closed";
        hostClientEscapeHatch: "NiceCxoneClient.providerClient";
        hostClientOverride: true;
        packageOwnedRestClient: true;
        providerClientOverride: "NiceCxoneProviderClient";
        reviewedOperationAllowlist: true;
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "26.2.1";
           license: "UNLICENSED";
           package: "@nice-devone/acd-sdk";
           reason: "Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client.";
           result: "official-sdk-not-redistributable-server-rest-client";
         }, {
           checkedVersion: "26.2.1";
           license: "UNLICENSED";
           package: "@nice-devone/agent-sdk";
           reason: "Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime.";
           result: "agent-app-sdk-not-server-rest-client";
         }, {
           checkedVersion: "3.3.0";
           license: "UNLICENSED";
           package: "@nice-devone/nice-cxone-chat-web-sdk";
           reason: "Web SDK targets browser DFO chat rather than package-owned Contact Center server operations.";
           result: "browser-dfo-chat-sdk-not-contact-center-server-client";
        }];
        defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
        result: "no-redistributable-server-side-cxone-sdk";
        typedClientOverride: "NiceCxoneProviderClient";
     };
     sdkDecision: {
        checkedAt: "2026-06-25";
        checkedVersion: "26.2.1";
        license: "UNLICENSED";
        package: "@nice-devone/acd-sdk";
        reason: "@nice-devone/acd-sdk is the closest NICE CXone ACD npm package, but it is published as UNLICENSED and documented for CXone Agent/app-bundler use with browser and agent SDK dependencies.";
        result: "official-sdk-not-redistributable-server-rest-client";
     };
  };
  name: "NICE CXone";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.callback.schedule";
     capability: "schedule";
     providerObject: "callback";
   }, {
     alias: "contact-center.contact.start";
     capability: "send";
     providerObject: "contact";
   }, {
     alias: "contact-center.contact.end";
     capability: "update-provider-object";
     providerObject: "contact";
   }, {
     alias: "nice-cxone.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-nice-cxone";
  provider: "nice-cxone";
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
| `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"schedule"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"callback"`; `label`: `"callback"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"update-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `false`; \}\] |
| `category` | `"contact-center"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"NICE CXone REST APIs"`; `url`: `"https://developer.niceincontact.com/API"`; \}, \{ `label`: `"NICE CXone ACD SDK package"`; `url`: `"https://www.npmjs.com/package/@nice-devone/acd-sdk"`; \}, \{ `label`: `"NICE CXone Agent SDK repository"`; `url`: `"https://github.com/nice-devone/nice-cxone-agent-sdk"`; \}\]; `notes`: readonly \[`"Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and documented for CXone Agent/app-bundler use."`, `"Runtime calls use a fail-closed built-in REST adapter when baseUrl/API credentials are supplied, with NiceCxoneProviderClient available as a typed host override."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"NICE CXone REST APIs"`; `url`: `"https://developer.niceincontact.com/API"`; \}, \{ `label`: `"NICE CXone ACD SDK package"`; `url`: `"https://www.npmjs.com/package/@nice-devone/acd-sdk"`; \}, \{ `label`: `"NICE CXone Agent SDK repository"`; `url`: `"https://github.com/nice-devone/nice-cxone-agent-sdk"`; \}\] |
| `coverage.notes` | readonly \[`"Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and documented for CXone Agent/app-bundler use."`, `"Runtime calls use a fail-closed built-in REST adapter when baseUrl/API credentials are supplied, with NiceCxoneProviderClient available as a typed host override."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"nice-cxone-api-base"`; `label`: `"NICE CXone API base URL"`; `required`: `true`; \}, \{ `id`: `"nice-cxone-api-access"`; `label`: `"NICE CXone API access"`; `required`: `true`; \}, \{ `id`: `"nice-cxone-routing"`; `label`: `"NICE CXone skill/queue routing configuration"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.nice-cxone"` |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"nice-cxone.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-redistributable-server-side-cxone-sdk"`; `typedClientOverride`: `"NiceCxoneProviderClient"`; \}; `sdkDecision`: `"Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `failureMode`: `"fail-closed"`; `hostClientEscapeHatch`: `"NiceCxoneClient.providerClient"`; `hostClientOverride`: `true`; `packageOwnedRestClient`: `true`; `providerClientOverride`: `"NiceCxoneProviderClient"`; `reviewedOperationAllowlist`: `true`; `strategy`: `"provider-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-redistributable-server-side-cxone-sdk"`; `typedClientOverride`: `"NiceCxoneProviderClient"`; \}; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"@nice-devone/acd-sdk is the closest NICE CXone ACD npm package, but it is published as UNLICENSED and documented for CXone Agent/app-bundler use with browser and agent SDK dependencies."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"nice-cxone.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-redistributable-server-side-cxone-sdk"`; `typedClientOverride`: `"NiceCxoneProviderClient"`; \}; `sdkDecision`: `"Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"nice-cxone.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-redistributable-server-side-cxone-sdk"`; `typedClientOverride`: `"NiceCxoneProviderClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-redistributable-server-side-cxone-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"NiceCxoneProviderClient"` |
| `metadata.implementation.sdkDecision` | `"Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `failureMode`: `"fail-closed"`; `hostClientEscapeHatch`: `"NiceCxoneClient.providerClient"`; `hostClientOverride`: `true`; `packageOwnedRestClient`: `true`; `providerClientOverride`: `"NiceCxoneProviderClient"`; `reviewedOperationAllowlist`: `true`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapter.failureMode` | `"fail-closed"` |
| `metadata.providerRestAdapter.hostClientEscapeHatch` | `"NiceCxoneClient.providerClient"` |
| `metadata.providerRestAdapter.hostClientOverride` | `true` |
| `metadata.providerRestAdapter.packageOwnedRestClient` | `true` |
| `metadata.providerRestAdapter.providerClientOverride` | `"NiceCxoneProviderClient"` |
| `metadata.providerRestAdapter.reviewedOperationAllowlist` | `true` |
| `metadata.providerRestAdapter.strategy` | `"provider-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-redistributable-server-side-cxone-sdk"`; `typedClientOverride`: `"NiceCxoneProviderClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-redistributable-server-side-cxone-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"NiceCxoneProviderClient"` |
| `metadata.sdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"@nice-devone/acd-sdk is the closest NICE CXone ACD npm package, but it is published as UNLICENSED and documented for CXone Agent/app-bundler use with browser and agent SDK dependencies."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \} |
| `metadata.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.sdkDecision.checkedVersion` | `"26.2.1"` |
| `metadata.sdkDecision.license` | `"UNLICENSED"` |
| `metadata.sdkDecision.package` | `"@nice-devone/acd-sdk"` |
| `metadata.sdkDecision.reason` | `"@nice-devone/acd-sdk is the closest NICE CXone ACD npm package, but it is published as UNLICENSED and documented for CXone Agent/app-bundler use with browser and agent SDK dependencies."` |
| `metadata.sdkDecision.result` | `"official-sdk-not-redistributable-server-rest-client"` |
| `name` | `"NICE CXone"` |
| `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `capability`: `"schedule"`; `providerObject`: `"callback"`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"contact-center.contact.end"`; `capability`: `"update-provider-object"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"nice-cxone.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| `packageName` | `"@cognidesk/integration-contact-center-nice-cxone"` |
| `provider` | `"nice-cxone"` |
| `trustLevel` | `"official"` |

***

### niceCxoneProviderManifestInput

```ts
const niceCxoneProviderManifestInput: {
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
        label: "NICE CXone REST APIs";
        url: "https://developer.niceincontact.com/API";
      }, {
        label: "NICE CXone ACD SDK package";
        url: "https://www.npmjs.com/package/@nice-devone/acd-sdk";
      }, {
        label: "NICE CXone Agent SDK repository";
        url: "https://github.com/nice-devone/nice-cxone-agent-sdk";
     }];
     notes: readonly ["Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and documented for CXone Agent/app-bundler use.", "Runtime calls use a fail-closed built-in REST adapter when baseUrl/API credentials are supplied, with NiceCxoneProviderClient available as a typed host override."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "nice-cxone-api-base";
     label: "NICE CXone API base URL";
     required: true;
   }, {
     id: "nice-cxone-api-access";
     label: "NICE CXone API access";
     required: true;
   }, {
     id: "nice-cxone-routing";
     label: "NICE CXone skill/queue routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.nice-cxone";
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
           checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
           id: "scheduleACallback";
           method: "POST";
           path: "/promise";
           source: "https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs";
         }, {
           alias: "contact-center.contact.start";
           checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
           id: "startChatSession";
           method: "POST";
           path: "/contacts/chats";
           source: "https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs";
         }, {
           alias: "contact-center.contact.end";
           checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
           id: "endChat";
           method: "DELETE";
           path: "/contacts/chats/{chatSession}";
           source: "https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs";
         }, {
           alias: "nice-cxone.request";
           checksum: "not-applicable-host-configured";
           id: "providerExtensionRequest";
           method: "GET";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "26.2.1";
              license: "UNLICENSED";
              package: "@nice-devone/acd-sdk";
              reason: "Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client.";
              result: "official-sdk-not-redistributable-server-rest-client";
            }, {
              checkedVersion: "26.2.1";
              license: "UNLICENSED";
              package: "@nice-devone/agent-sdk";
              reason: "Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime.";
              result: "agent-app-sdk-not-server-rest-client";
            }, {
              checkedVersion: "3.3.0";
              license: "UNLICENSED";
              package: "@nice-devone/nice-cxone-chat-web-sdk";
              reason: "Web SDK targets browser DFO chat rather than package-owned Contact Center server operations.";
              result: "browser-dfo-chat-sdk-not-contact-center-server-client";
           }];
           defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
           result: "no-redistributable-server-side-cxone-sdk";
           typedClientOverride: "NiceCxoneProviderClient";
        };
        sdkDecision: "Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        failureMode: "fail-closed";
        hostClientEscapeHatch: "NiceCxoneClient.providerClient";
        hostClientOverride: true;
        packageOwnedRestClient: true;
        providerClientOverride: "NiceCxoneProviderClient";
        reviewedOperationAllowlist: true;
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "26.2.1";
           license: "UNLICENSED";
           package: "@nice-devone/acd-sdk";
           reason: "Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client.";
           result: "official-sdk-not-redistributable-server-rest-client";
         }, {
           checkedVersion: "26.2.1";
           license: "UNLICENSED";
           package: "@nice-devone/agent-sdk";
           reason: "Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime.";
           result: "agent-app-sdk-not-server-rest-client";
         }, {
           checkedVersion: "3.3.0";
           license: "UNLICENSED";
           package: "@nice-devone/nice-cxone-chat-web-sdk";
           reason: "Web SDK targets browser DFO chat rather than package-owned Contact Center server operations.";
           result: "browser-dfo-chat-sdk-not-contact-center-server-client";
        }];
        defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
        result: "no-redistributable-server-side-cxone-sdk";
        typedClientOverride: "NiceCxoneProviderClient";
     };
     sdkDecision: {
        checkedAt: "2026-06-25";
        checkedVersion: "26.2.1";
        license: "UNLICENSED";
        package: "@nice-devone/acd-sdk";
        reason: "@nice-devone/acd-sdk is the closest NICE CXone ACD npm package, but it is published as UNLICENSED and documented for CXone Agent/app-bundler use with browser and agent SDK dependencies.";
        result: "official-sdk-not-redistributable-server-rest-client";
     };
  };
  name: "NICE CXone";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "contact-center.callback.schedule";
     capability: "schedule";
     providerObject: "callback";
   }, {
     alias: "contact-center.contact.start";
     capability: "send";
     providerObject: "contact";
   }, {
     alias: "contact-center.contact.end";
     capability: "update-provider-object";
     providerObject: "contact";
   }, {
     alias: "nice-cxone.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-nice-cxone";
  provider: "nice-cxone";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"schedule"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"callback"`; `label`: `"callback"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"update-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `false`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"NICE CXone REST APIs"`; `url`: `"https://developer.niceincontact.com/API"`; \}, \{ `label`: `"NICE CXone ACD SDK package"`; `url`: `"https://www.npmjs.com/package/@nice-devone/acd-sdk"`; \}, \{ `label`: `"NICE CXone Agent SDK repository"`; `url`: `"https://github.com/nice-devone/nice-cxone-agent-sdk"`; \}\]; `notes`: readonly \[`"Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and documented for CXone Agent/app-bundler use."`, `"Runtime calls use a fail-closed built-in REST adapter when baseUrl/API credentials are supplied, with NiceCxoneProviderClient available as a typed host override."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"NICE CXone REST APIs"`; `url`: `"https://developer.niceincontact.com/API"`; \}, \{ `label`: `"NICE CXone ACD SDK package"`; `url`: `"https://www.npmjs.com/package/@nice-devone/acd-sdk"`; \}, \{ `label`: `"NICE CXone Agent SDK repository"`; `url`: `"https://github.com/nice-devone/nice-cxone-agent-sdk"`; \}\] |
| `coverage.notes` | readonly \[`"Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and documented for CXone Agent/app-bundler use."`, `"Runtime calls use a fail-closed built-in REST adapter when baseUrl/API credentials are supplied, with NiceCxoneProviderClient available as a typed host override."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `id`: `"nice-cxone-api-base"`; `label`: `"NICE CXone API base URL"`; `required`: `true`; \}, \{ `id`: `"nice-cxone-api-access"`; `label`: `"NICE CXone API access"`; `required`: `true`; \}, \{ `id`: `"nice-cxone-routing"`; `label`: `"NICE CXone skill/queue routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.nice-cxone"` |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"nice-cxone.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-redistributable-server-side-cxone-sdk"`; `typedClientOverride`: `"NiceCxoneProviderClient"`; \}; `sdkDecision`: `"Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `failureMode`: `"fail-closed"`; `hostClientEscapeHatch`: `"NiceCxoneClient.providerClient"`; `hostClientOverride`: `true`; `packageOwnedRestClient`: `true`; `providerClientOverride`: `"NiceCxoneProviderClient"`; `reviewedOperationAllowlist`: `true`; `strategy`: `"provider-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-redistributable-server-side-cxone-sdk"`; `typedClientOverride`: `"NiceCxoneProviderClient"`; \}; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"@nice-devone/acd-sdk is the closest NICE CXone ACD npm package, but it is published as UNLICENSED and documented for CXone Agent/app-bundler use with browser and agent SDK dependencies."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"nice-cxone.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-redistributable-server-side-cxone-sdk"`; `typedClientOverride`: `"NiceCxoneProviderClient"`; \}; `sdkDecision`: `"Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"nice-cxone.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-redistributable-server-side-cxone-sdk"`; `typedClientOverride`: `"NiceCxoneProviderClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-redistributable-server-side-cxone-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"NiceCxoneProviderClient"` |
| `metadata.implementation.sdkDecision` | `"Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `failureMode`: `"fail-closed"`; `hostClientEscapeHatch`: `"NiceCxoneClient.providerClient"`; `hostClientOverride`: `true`; `packageOwnedRestClient`: `true`; `providerClientOverride`: `"NiceCxoneProviderClient"`; `reviewedOperationAllowlist`: `true`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapter.failureMode` | `"fail-closed"` |
| `metadata.providerRestAdapter.hostClientEscapeHatch` | `"NiceCxoneClient.providerClient"` |
| `metadata.providerRestAdapter.hostClientOverride` | `true` |
| `metadata.providerRestAdapter.packageOwnedRestClient` | `true` |
| `metadata.providerRestAdapter.providerClientOverride` | `"NiceCxoneProviderClient"` |
| `metadata.providerRestAdapter.reviewedOperationAllowlist` | `true` |
| `metadata.providerRestAdapter.strategy` | `"provider-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-redistributable-server-side-cxone-sdk"`; `typedClientOverride`: `"NiceCxoneProviderClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-redistributable-server-side-cxone-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"NiceCxoneProviderClient"` |
| `metadata.sdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"@nice-devone/acd-sdk is the closest NICE CXone ACD npm package, but it is published as UNLICENSED and documented for CXone Agent/app-bundler use with browser and agent SDK dependencies."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \} |
| `metadata.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.sdkDecision.checkedVersion` | `"26.2.1"` |
| `metadata.sdkDecision.license` | `"UNLICENSED"` |
| `metadata.sdkDecision.package` | `"@nice-devone/acd-sdk"` |
| `metadata.sdkDecision.reason` | `"@nice-devone/acd-sdk is the closest NICE CXone ACD npm package, but it is published as UNLICENSED and documented for CXone Agent/app-bundler use with browser and agent SDK dependencies."` |
| `metadata.sdkDecision.result` | `"official-sdk-not-redistributable-server-rest-client"` |
| <a id="property-name"></a> `name` | `"NICE CXone"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `capability`: `"schedule"`; `providerObject`: `"callback"`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"contact-center.contact.end"`; `capability`: `"update-provider-object"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"nice-cxone.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-nice-cxone"` |
| <a id="property-provider"></a> `provider` | `"nice-cxone"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### niceCxoneProviderSdkDecision

```ts
const niceCxoneProviderSdkDecision: {
  checkedAt: "2026-06-25";
  checkedPackages: readonly [{
     checkedVersion: "26.2.1";
     license: "UNLICENSED";
     package: "@nice-devone/acd-sdk";
     reason: "Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client.";
     result: "official-sdk-not-redistributable-server-rest-client";
   }, {
     checkedVersion: "26.2.1";
     license: "UNLICENSED";
     package: "@nice-devone/agent-sdk";
     reason: "Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime.";
     result: "agent-app-sdk-not-server-rest-client";
   }, {
     checkedVersion: "3.3.0";
     license: "UNLICENSED";
     package: "@nice-devone/nice-cxone-chat-web-sdk";
     reason: "Web SDK targets browser DFO chat rather than package-owned Contact Center server operations.";
     result: "browser-dfo-chat-sdk-not-contact-center-server-client";
  }];
  defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
  result: "no-redistributable-server-side-cxone-sdk";
  typedClientOverride: "NiceCxoneProviderClient";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-checkedat"></a> `checkedAt` | `"2026-06-25"` |
| <a id="property-checkedpackages"></a> `checkedPackages` | readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\] |
| <a id="property-defaultrestpolicy"></a> `defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| <a id="property-result"></a> `result` | `"no-redistributable-server-side-cxone-sdk"` |
| <a id="property-typedclientoverride"></a> `typedClientOverride` | `"NiceCxoneProviderClient"` |

***

### niceCxoneRestSupportSlice

```ts
const niceCxoneRestSupportSlice: {
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
     checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
     id: "scheduleACallback";
     method: "POST";
     path: "/promise";
     source: "https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs";
   }, {
     alias: "contact-center.contact.start";
     checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
     id: "startChatSession";
     method: "POST";
     path: "/contacts/chats";
     source: "https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs";
   }, {
     alias: "contact-center.contact.end";
     checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
     id: "endChat";
     method: "DELETE";
     path: "/contacts/chats/{chatSession}";
     source: "https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs";
   }, {
     alias: "nice-cxone.request";
     checksum: "not-applicable-host-configured";
     id: "providerExtensionRequest";
     method: "GET";
     path: "host-configured";
     source: "provider-rest-adapter";
  }];
  implementationStrategy: "provider-rest-adapter";
  providerSdkDecision: {
     checkedAt: "2026-06-25";
     checkedPackages: readonly [{
        checkedVersion: "26.2.1";
        license: "UNLICENSED";
        package: "@nice-devone/acd-sdk";
        reason: "Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client.";
        result: "official-sdk-not-redistributable-server-rest-client";
      }, {
        checkedVersion: "26.2.1";
        license: "UNLICENSED";
        package: "@nice-devone/agent-sdk";
        reason: "Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime.";
        result: "agent-app-sdk-not-server-rest-client";
      }, {
        checkedVersion: "3.3.0";
        license: "UNLICENSED";
        package: "@nice-devone/nice-cxone-chat-web-sdk";
        reason: "Web SDK targets browser DFO chat rather than package-owned Contact Center server operations.";
        result: "browser-dfo-chat-sdk-not-contact-center-server-client";
     }];
     defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
     result: "no-redistributable-server-side-cxone-sdk";
     typedClientOverride: "NiceCxoneProviderClient";
  };
  sdkDecision: "Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind"></a> `adapterKind` | `"no-official-sdk-rest-adapter"` |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"nice-cxone.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"provider-rest-adapter"` |
| <a id="property-providersdkdecision"></a> `providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-redistributable-server-side-cxone-sdk"`; `typedClientOverride`: `"NiceCxoneProviderClient"`; \} |
| `providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\] |
| `providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `providerSdkDecision.result` | `"no-redistributable-server-side-cxone-sdk"` |
| `providerSdkDecision.typedClientOverride` | `"NiceCxoneProviderClient"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-25"` |

***

### niceCxoneSupportSlice

```ts
const niceCxoneSupportSlice: {
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
     checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
     id: "scheduleACallback";
     method: "POST";
     path: "/promise";
     source: "https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs";
   }, {
     alias: "contact-center.contact.start";
     checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
     id: "startChatSession";
     method: "POST";
     path: "/contacts/chats";
     source: "https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs";
   }, {
     alias: "contact-center.contact.end";
     checksum: "sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog";
     id: "endChat";
     method: "DELETE";
     path: "/contacts/chats/{chatSession}";
     source: "https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs";
   }, {
     alias: "nice-cxone.request";
     checksum: "not-applicable-host-configured";
     id: "providerExtensionRequest";
     method: "GET";
     path: "host-configured";
     source: "provider-rest-adapter";
  }];
  implementationStrategy: "provider-rest-adapter";
  providerSdkDecision: {
     checkedAt: "2026-06-25";
     checkedPackages: readonly [{
        checkedVersion: "26.2.1";
        license: "UNLICENSED";
        package: "@nice-devone/acd-sdk";
        reason: "Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client.";
        result: "official-sdk-not-redistributable-server-rest-client";
      }, {
        checkedVersion: "26.2.1";
        license: "UNLICENSED";
        package: "@nice-devone/agent-sdk";
        reason: "Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime.";
        result: "agent-app-sdk-not-server-rest-client";
      }, {
        checkedVersion: "3.3.0";
        license: "UNLICENSED";
        package: "@nice-devone/nice-cxone-chat-web-sdk";
        reason: "Web SDK targets browser DFO chat rather than package-owned Contact Center server operations.";
        result: "browser-dfo-chat-sdk-not-contact-center-server-client";
     }];
     defaultRestPolicy: "fail-closed-provider-rest-adapter-with-typed-provider-client-override";
     result: "no-redistributable-server-side-cxone-sdk";
     typedClientOverride: "NiceCxoneProviderClient";
  };
  sdkDecision: "Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind-1"></a> `adapterKind` | `"no-official-sdk-rest-adapter"` |
| <a id="property-allowedoperations-1"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"nice-cxone.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| <a id="property-implementationstrategy-1"></a> `implementationStrategy` | `"provider-rest-adapter"` |
| <a id="property-providersdkdecision-1"></a> `providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\]; `defaultRestPolicy`: `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-redistributable-server-side-cxone-sdk"`; `typedClientOverride`: `"NiceCxoneProviderClient"`; \} |
| `providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/acd-sdk"`; `reason`: `"Closest ACD package is unlicensed and documented for CXone Agent/app-bundler use rather than a redistributable server-side REST client."`; `result`: `"official-sdk-not-redistributable-server-rest-client"`; \}, \{ `checkedVersion`: `"26.2.1"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/agent-sdk"`; `reason`: `"Agent SDK is unlicensed and coupled to CXone Agent/browser app runtime."`; `result`: `"agent-app-sdk-not-server-rest-client"`; \}, \{ `checkedVersion`: `"3.3.0"`; `license`: `"UNLICENSED"`; `package`: `"@nice-devone/nice-cxone-chat-web-sdk"`; `reason`: `"Web SDK targets browser DFO chat rather than package-owned Contact Center server operations."`; `result`: `"browser-dfo-chat-sdk-not-contact-center-server-client"`; \}\] |
| `providerSdkDecision.defaultRestPolicy` | `"fail-closed-provider-rest-adapter-with-typed-provider-client-override"` |
| `providerSdkDecision.result` | `"no-redistributable-server-side-cxone-sdk"` |
| `providerSdkDecision.typedClientOverride` | `"NiceCxoneProviderClient"` |
| <a id="property-sdkdecision-1"></a> `sdkDecision` | `"Maintained NICE @nice-devone SDK packages exist, but the closest ACD runtime package is UNLICENSED and designed for CXone Agent/app-bundler use rather than a redistributable server-side REST client; this package provides a fail-closed built-in REST adapter with providerClient override."` |
| <a id="property-verifiedat-1"></a> `verifiedAt` | `"2026-06-25"` |
