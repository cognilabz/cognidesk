# integrations/contact-center/genesys-engage/dist/manifest

## Variables

### genesysEngageProviderManifest

```ts
const genesysEngageProviderManifest: {
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
        label: "Genesys GMS Callback Services API";
        url: "https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI";
      }, {
        label: "Genesys GMS Chat API v2";
        url: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2";
      }, {
        label: "PureEngage engagement-client-js";
        url: "https://www.npmjs.com/package/engagement-client-js";
      }, {
        label: "Genesys Cloud Platform SDK for JavaScript";
        url: "https://github.com/MyPureCloud/platform-client-sdk-javascript";
      }, {
        label: "PureEngage Engagement Client Library";
        url: "https://developer.genesyscloud.com/client-libraries/engagement/js/index.html";
     }];
     notes: readonly ["Runtime callback scheduling uses the official PureEngage engagement-client-js generated SDK through CallbacksApi.bookCallbackExternal.", "No matching maintained backend/runtime SDK was verified for GMS Chat API v2, so chat operations use the reviewed REST adapter.", "GenesysEngageProviderClient remains available as a typed host override for tenant-specific surfaces and handoff routing."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "genesys-engage-gms-base-url";
     label: "Genesys Mobile Services base URL";
     required: true;
   }, {
     id: "genesys-engage-auth";
     label: "Genesys Engage/GMS authentication";
     required: false;
   }, {
     id: "genesys-engage-routing";
     label: "Genesys Engage callback, chat, and routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.genesys-engage";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        adapterKind: "official-engagement-sdk-plus-gms-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "provider-rest-adapter";
         }, {
           alias: "contact-center.callback.schedule";
           checksum: "provider-sdk-generated-swagger-client";
           id: "createCallback";
           method: "POST";
           path: "/callback/create";
           sdkMethod: "CallbacksApi.bookCallbackExternal";
           sdkPackage: "engagement-client-js";
           source: "engagement-client-js CallbacksApi.bookCallbackExternal";
         }, {
           alias: "contact-center.contact.start";
           checksum: "not-available-html-doc";
           id: "requestChat";
           method: "POST";
           path: "/genesys/2/chat/{serviceName}";
           source: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2";
         }, {
           alias: "genesys-engage.chat.send";
           checksum: "not-available-html-doc";
           id: "sendChatMessage";
           method: "POST";
           path: "/genesys/2/chat/{serviceName}/{chatId}/send";
           source: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2";
         }, {
           alias: "genesys-engage.gms.request";
           checksum: "not-applicable-host-configured";
           id: "providerExtensionRequest";
           method: "GET";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        implementationStrategy: "official-sdk-and-provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "9.0.83";
              license: "MIT";
              package: "engagement-client-js";
              reason: "Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter.";
              result: "accepted-callback-runtime-sdk";
            }, {
              checkedVersion: "9.0.95";
              license: "MIT";
              package: "genesys-workspace-client-js";
              reason: "Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints.";
              result: "workspace-web-edition-api-not-gms-runtime-client";
            }, {
              checkedVersion: "255.1.0";
              license: "MIT";
              package: "purecloud-platform-client-v2";
              reason: "Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints.";
              result: "genesys-cloud-sdk-not-genesys-engage-gms";
           }];
           defaultRestPolicy: "official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override";
           result: "official-engagement-sdk-for-callbacks-gms-chat-rest-adapter";
           typedClientOverride: "GenesysEngageProviderClient";
        };
        sdkDecision: "engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "official-engagement-sdk-plus-gms-rest-adapter";
        providerClientOverride: "GenesysEngageProviderClient";
        strategy: "official-sdk-and-provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "9.0.83";
           license: "MIT";
           package: "engagement-client-js";
           reason: "Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter.";
           result: "accepted-callback-runtime-sdk";
         }, {
           checkedVersion: "9.0.95";
           license: "MIT";
           package: "genesys-workspace-client-js";
           reason: "Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints.";
           result: "workspace-web-edition-api-not-gms-runtime-client";
         }, {
           checkedVersion: "255.1.0";
           license: "MIT";
           package: "purecloud-platform-client-v2";
           reason: "Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints.";
           result: "genesys-cloud-sdk-not-genesys-engage-gms";
        }];
        defaultRestPolicy: "official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override";
        result: "official-engagement-sdk-for-callbacks-gms-chat-rest-adapter";
        typedClientOverride: "GenesysEngageProviderClient";
     };
  };
  name: "Genesys Engage / GMS";
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
     alias: "genesys-engage.chat.send";
     capability: "send";
     extension: true;
     providerObject: "contact";
   }, {
     alias: "genesys-engage.gms.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-genesys-engage";
  provider: "genesys-engage";
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
| `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"schedule"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"callback"`; `label`: `"callback"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `false`; \}\] |
| `category` | `"contact-center"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Genesys GMS Callback Services API"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `label`: `"Genesys GMS Chat API v2"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `label`: `"PureEngage engagement-client-js"`; `url`: `"https://www.npmjs.com/package/engagement-client-js"`; \}, \{ `label`: `"Genesys Cloud Platform SDK for JavaScript"`; `url`: `"https://github.com/MyPureCloud/platform-client-sdk-javascript"`; \}, \{ `label`: `"PureEngage Engagement Client Library"`; `url`: `"https://developer.genesyscloud.com/client-libraries/engagement/js/index.html"`; \}\]; `notes`: readonly \[`"Runtime callback scheduling uses the official PureEngage engagement-client-js generated SDK through CallbacksApi.bookCallbackExternal."`, `"No matching maintained backend/runtime SDK was verified for GMS Chat API v2, so chat operations use the reviewed REST adapter."`, `"GenesysEngageProviderClient remains available as a typed host override for tenant-specific surfaces and handoff routing."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Genesys GMS Callback Services API"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `label`: `"Genesys GMS Chat API v2"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `label`: `"PureEngage engagement-client-js"`; `url`: `"https://www.npmjs.com/package/engagement-client-js"`; \}, \{ `label`: `"Genesys Cloud Platform SDK for JavaScript"`; `url`: `"https://github.com/MyPureCloud/platform-client-sdk-javascript"`; \}, \{ `label`: `"PureEngage Engagement Client Library"`; `url`: `"https://developer.genesyscloud.com/client-libraries/engagement/js/index.html"`; \}\] |
| `coverage.notes` | readonly \[`"Runtime callback scheduling uses the official PureEngage engagement-client-js generated SDK through CallbacksApi.bookCallbackExternal."`, `"No matching maintained backend/runtime SDK was verified for GMS Chat API v2, so chat operations use the reviewed REST adapter."`, `"GenesysEngageProviderClient remains available as a typed host override for tenant-specific surfaces and handoff routing."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"genesys-engage-gms-base-url"`; `label`: `"Genesys Mobile Services base URL"`; `required`: `true`; \}, \{ `id`: `"genesys-engage-auth"`; `label`: `"Genesys Engage/GMS authentication"`; `required`: `false`; \}, \{ `id`: `"genesys-engage-routing"`; `label`: `"Genesys Engage callback, chat, and routing configuration"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.genesys-engage"` |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `adapterKind`: `"official-engagement-sdk-plus-gms-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"provider-sdk-generated-swagger-client"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/callback/create"`; `sdkMethod`: `"CallbacksApi.bookCallbackExternal"`; `sdkPackage`: `"engagement-client-js"`; `source`: `"engagement-client-js CallbacksApi.bookCallbackExternal"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.gms.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `implementationStrategy`: `"official-sdk-and-provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\]; `defaultRestPolicy`: `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"`; `result`: `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"`; `typedClientOverride`: `"GenesysEngageProviderClient"`; \}; `sdkDecision`: `"engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"official-engagement-sdk-plus-gms-rest-adapter"`; `providerClientOverride`: `"GenesysEngageProviderClient"`; `strategy`: `"official-sdk-and-provider-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\]; `defaultRestPolicy`: `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"`; `result`: `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"`; `typedClientOverride`: `"GenesysEngageProviderClient"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"official-engagement-sdk-plus-gms-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"provider-sdk-generated-swagger-client"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/callback/create"`; `sdkMethod`: `"CallbacksApi.bookCallbackExternal"`; `sdkPackage`: `"engagement-client-js"`; `source`: `"engagement-client-js CallbacksApi.bookCallbackExternal"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.gms.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `implementationStrategy`: `"official-sdk-and-provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\]; `defaultRestPolicy`: `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"`; `result`: `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"`; `typedClientOverride`: `"GenesysEngageProviderClient"`; \}; `sdkDecision`: `"engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"official-engagement-sdk-plus-gms-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"provider-sdk-generated-swagger-client"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/callback/create"`; `sdkMethod`: `"CallbacksApi.bookCallbackExternal"`; `sdkPackage`: `"engagement-client-js"`; `source`: `"engagement-client-js CallbacksApi.bookCallbackExternal"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.gms.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"official-sdk-and-provider-rest-adapter"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\]; `defaultRestPolicy`: `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"`; `result`: `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"`; `typedClientOverride`: `"GenesysEngageProviderClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"GenesysEngageProviderClient"` |
| `metadata.implementation.sdkDecision` | `"engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"official-engagement-sdk-plus-gms-rest-adapter"`; `providerClientOverride`: `"GenesysEngageProviderClient"`; `strategy`: `"official-sdk-and-provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"official-engagement-sdk-plus-gms-rest-adapter"` |
| `metadata.providerRestAdapter.providerClientOverride` | `"GenesysEngageProviderClient"` |
| `metadata.providerRestAdapter.strategy` | `"official-sdk-and-provider-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\]; `defaultRestPolicy`: `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"`; `result`: `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"`; `typedClientOverride`: `"GenesysEngageProviderClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"` |
| `metadata.providerSdkDecision.result` | `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"GenesysEngageProviderClient"` |
| `name` | `"Genesys Engage / GMS"` |
| `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `capability`: `"schedule"`; `providerObject`: `"callback"`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `capability`: `"send"`; `extension`: `true`; `providerObject`: `"contact"`; \}, \{ `alias`: `"genesys-engage.gms.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| `packageName` | `"@cognidesk/integration-contact-center-genesys-engage"` |
| `provider` | `"genesys-engage"` |
| `trustLevel` | `"official"` |

***

### genesysEngageProviderManifestInput

```ts
const genesysEngageProviderManifestInput: {
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
        label: "Genesys GMS Callback Services API";
        url: "https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI";
      }, {
        label: "Genesys GMS Chat API v2";
        url: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2";
      }, {
        label: "PureEngage engagement-client-js";
        url: "https://www.npmjs.com/package/engagement-client-js";
      }, {
        label: "Genesys Cloud Platform SDK for JavaScript";
        url: "https://github.com/MyPureCloud/platform-client-sdk-javascript";
      }, {
        label: "PureEngage Engagement Client Library";
        url: "https://developer.genesyscloud.com/client-libraries/engagement/js/index.html";
     }];
     notes: readonly ["Runtime callback scheduling uses the official PureEngage engagement-client-js generated SDK through CallbacksApi.bookCallbackExternal.", "No matching maintained backend/runtime SDK was verified for GMS Chat API v2, so chat operations use the reviewed REST adapter.", "GenesysEngageProviderClient remains available as a typed host override for tenant-specific surfaces and handoff routing."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "genesys-engage-gms-base-url";
     label: "Genesys Mobile Services base URL";
     required: true;
   }, {
     id: "genesys-engage-auth";
     label: "Genesys Engage/GMS authentication";
     required: false;
   }, {
     id: "genesys-engage-routing";
     label: "Genesys Engage callback, chat, and routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.genesys-engage";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        adapterKind: "official-engagement-sdk-plus-gms-rest-adapter";
        allowedOperations: readonly [{
           alias: "contact-center.handoff.request";
           checksum: "not-applicable-host-configured";
           id: "configuredHandoff";
           method: "POST";
           path: "host-configured";
           source: "provider-rest-adapter";
         }, {
           alias: "contact-center.callback.schedule";
           checksum: "provider-sdk-generated-swagger-client";
           id: "createCallback";
           method: "POST";
           path: "/callback/create";
           sdkMethod: "CallbacksApi.bookCallbackExternal";
           sdkPackage: "engagement-client-js";
           source: "engagement-client-js CallbacksApi.bookCallbackExternal";
         }, {
           alias: "contact-center.contact.start";
           checksum: "not-available-html-doc";
           id: "requestChat";
           method: "POST";
           path: "/genesys/2/chat/{serviceName}";
           source: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2";
         }, {
           alias: "genesys-engage.chat.send";
           checksum: "not-available-html-doc";
           id: "sendChatMessage";
           method: "POST";
           path: "/genesys/2/chat/{serviceName}/{chatId}/send";
           source: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2";
         }, {
           alias: "genesys-engage.gms.request";
           checksum: "not-applicable-host-configured";
           id: "providerExtensionRequest";
           method: "GET";
           path: "host-configured";
           source: "provider-rest-adapter";
        }];
        implementationStrategy: "official-sdk-and-provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              checkedVersion: "9.0.83";
              license: "MIT";
              package: "engagement-client-js";
              reason: "Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter.";
              result: "accepted-callback-runtime-sdk";
            }, {
              checkedVersion: "9.0.95";
              license: "MIT";
              package: "genesys-workspace-client-js";
              reason: "Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints.";
              result: "workspace-web-edition-api-not-gms-runtime-client";
            }, {
              checkedVersion: "255.1.0";
              license: "MIT";
              package: "purecloud-platform-client-v2";
              reason: "Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints.";
              result: "genesys-cloud-sdk-not-genesys-engage-gms";
           }];
           defaultRestPolicy: "official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override";
           result: "official-engagement-sdk-for-callbacks-gms-chat-rest-adapter";
           typedClientOverride: "GenesysEngageProviderClient";
        };
        sdkDecision: "engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "official-engagement-sdk-plus-gms-rest-adapter";
        providerClientOverride: "GenesysEngageProviderClient";
        strategy: "official-sdk-and-provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           checkedVersion: "9.0.83";
           license: "MIT";
           package: "engagement-client-js";
           reason: "Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter.";
           result: "accepted-callback-runtime-sdk";
         }, {
           checkedVersion: "9.0.95";
           license: "MIT";
           package: "genesys-workspace-client-js";
           reason: "Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints.";
           result: "workspace-web-edition-api-not-gms-runtime-client";
         }, {
           checkedVersion: "255.1.0";
           license: "MIT";
           package: "purecloud-platform-client-v2";
           reason: "Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints.";
           result: "genesys-cloud-sdk-not-genesys-engage-gms";
        }];
        defaultRestPolicy: "official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override";
        result: "official-engagement-sdk-for-callbacks-gms-chat-rest-adapter";
        typedClientOverride: "GenesysEngageProviderClient";
     };
  };
  name: "Genesys Engage / GMS";
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
     alias: "genesys-engage.chat.send";
     capability: "send";
     extension: true;
     providerObject: "contact";
   }, {
     alias: "genesys-engage.gms.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-genesys-engage";
  provider: "genesys-engage";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"schedule"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"callback"`; `label`: `"callback"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `false`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Genesys GMS Callback Services API"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `label`: `"Genesys GMS Chat API v2"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `label`: `"PureEngage engagement-client-js"`; `url`: `"https://www.npmjs.com/package/engagement-client-js"`; \}, \{ `label`: `"Genesys Cloud Platform SDK for JavaScript"`; `url`: `"https://github.com/MyPureCloud/platform-client-sdk-javascript"`; \}, \{ `label`: `"PureEngage Engagement Client Library"`; `url`: `"https://developer.genesyscloud.com/client-libraries/engagement/js/index.html"`; \}\]; `notes`: readonly \[`"Runtime callback scheduling uses the official PureEngage engagement-client-js generated SDK through CallbacksApi.bookCallbackExternal."`, `"No matching maintained backend/runtime SDK was verified for GMS Chat API v2, so chat operations use the reviewed REST adapter."`, `"GenesysEngageProviderClient remains available as a typed host override for tenant-specific surfaces and handoff routing."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Genesys GMS Callback Services API"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `label`: `"Genesys GMS Chat API v2"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `label`: `"PureEngage engagement-client-js"`; `url`: `"https://www.npmjs.com/package/engagement-client-js"`; \}, \{ `label`: `"Genesys Cloud Platform SDK for JavaScript"`; `url`: `"https://github.com/MyPureCloud/platform-client-sdk-javascript"`; \}, \{ `label`: `"PureEngage Engagement Client Library"`; `url`: `"https://developer.genesyscloud.com/client-libraries/engagement/js/index.html"`; \}\] |
| `coverage.notes` | readonly \[`"Runtime callback scheduling uses the official PureEngage engagement-client-js generated SDK through CallbacksApi.bookCallbackExternal."`, `"No matching maintained backend/runtime SDK was verified for GMS Chat API v2, so chat operations use the reviewed REST adapter."`, `"GenesysEngageProviderClient remains available as a typed host override for tenant-specific surfaces and handoff routing."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `id`: `"genesys-engage-gms-base-url"`; `label`: `"Genesys Mobile Services base URL"`; `required`: `true`; \}, \{ `id`: `"genesys-engage-auth"`; `label`: `"Genesys Engage/GMS authentication"`; `required`: `false`; \}, \{ `id`: `"genesys-engage-routing"`; `label`: `"Genesys Engage callback, chat, and routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.genesys-engage"` |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `adapterKind`: `"official-engagement-sdk-plus-gms-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"provider-sdk-generated-swagger-client"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/callback/create"`; `sdkMethod`: `"CallbacksApi.bookCallbackExternal"`; `sdkPackage`: `"engagement-client-js"`; `source`: `"engagement-client-js CallbacksApi.bookCallbackExternal"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.gms.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `implementationStrategy`: `"official-sdk-and-provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\]; `defaultRestPolicy`: `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"`; `result`: `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"`; `typedClientOverride`: `"GenesysEngageProviderClient"`; \}; `sdkDecision`: `"engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"official-engagement-sdk-plus-gms-rest-adapter"`; `providerClientOverride`: `"GenesysEngageProviderClient"`; `strategy`: `"official-sdk-and-provider-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\]; `defaultRestPolicy`: `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"`; `result`: `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"`; `typedClientOverride`: `"GenesysEngageProviderClient"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"official-engagement-sdk-plus-gms-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"provider-sdk-generated-swagger-client"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/callback/create"`; `sdkMethod`: `"CallbacksApi.bookCallbackExternal"`; `sdkPackage`: `"engagement-client-js"`; `source`: `"engagement-client-js CallbacksApi.bookCallbackExternal"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.gms.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\]; `implementationStrategy`: `"official-sdk-and-provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\]; `defaultRestPolicy`: `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"`; `result`: `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"`; `typedClientOverride`: `"GenesysEngageProviderClient"`; \}; `sdkDecision`: `"engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"official-engagement-sdk-plus-gms-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"provider-sdk-generated-swagger-client"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/callback/create"`; `sdkMethod`: `"CallbacksApi.bookCallbackExternal"`; `sdkPackage`: `"engagement-client-js"`; `source`: `"engagement-client-js CallbacksApi.bookCallbackExternal"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.gms.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"official-sdk-and-provider-rest-adapter"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\]; `defaultRestPolicy`: `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"`; `result`: `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"`; `typedClientOverride`: `"GenesysEngageProviderClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"GenesysEngageProviderClient"` |
| `metadata.implementation.sdkDecision` | `"engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"official-engagement-sdk-plus-gms-rest-adapter"`; `providerClientOverride`: `"GenesysEngageProviderClient"`; `strategy`: `"official-sdk-and-provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"official-engagement-sdk-plus-gms-rest-adapter"` |
| `metadata.providerRestAdapter.providerClientOverride` | `"GenesysEngageProviderClient"` |
| `metadata.providerRestAdapter.strategy` | `"official-sdk-and-provider-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\]; `defaultRestPolicy`: `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"`; `result`: `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"`; `typedClientOverride`: `"GenesysEngageProviderClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"` |
| `metadata.providerSdkDecision.result` | `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"GenesysEngageProviderClient"` |
| <a id="property-name"></a> `name` | `"Genesys Engage / GMS"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `capability`: `"schedule"`; `providerObject`: `"callback"`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `capability`: `"send"`; `extension`: `true`; `providerObject`: `"contact"`; \}, \{ `alias`: `"genesys-engage.gms.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-genesys-engage"` |
| <a id="property-provider"></a> `provider` | `"genesys-engage"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### genesysEngageProviderSdkDecision

```ts
const genesysEngageProviderSdkDecision: {
  checkedAt: "2026-06-25";
  checkedPackages: readonly [{
     checkedVersion: "9.0.83";
     license: "MIT";
     package: "engagement-client-js";
     reason: "Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter.";
     result: "accepted-callback-runtime-sdk";
   }, {
     checkedVersion: "9.0.95";
     license: "MIT";
     package: "genesys-workspace-client-js";
     reason: "Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints.";
     result: "workspace-web-edition-api-not-gms-runtime-client";
   }, {
     checkedVersion: "255.1.0";
     license: "MIT";
     package: "purecloud-platform-client-v2";
     reason: "Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints.";
     result: "genesys-cloud-sdk-not-genesys-engage-gms";
  }];
  defaultRestPolicy: "official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override";
  result: "official-engagement-sdk-for-callbacks-gms-chat-rest-adapter";
  typedClientOverride: "GenesysEngageProviderClient";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-checkedat"></a> `checkedAt` | `"2026-06-25"` |
| <a id="property-checkedpackages"></a> `checkedPackages` | readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\] |
| <a id="property-defaultrestpolicy"></a> `defaultRestPolicy` | `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"` |
| <a id="property-result"></a> `result` | `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"` |
| <a id="property-typedclientoverride"></a> `typedClientOverride` | `"GenesysEngageProviderClient"` |

***

### genesysEngageRestSupportSlice

```ts
const genesysEngageRestSupportSlice: {
  adapterKind: "official-engagement-sdk-plus-gms-rest-adapter";
  allowedOperations: readonly [{
     alias: "contact-center.handoff.request";
     checksum: "not-applicable-host-configured";
     id: "configuredHandoff";
     method: "POST";
     path: "host-configured";
     source: "provider-rest-adapter";
   }, {
     alias: "contact-center.callback.schedule";
     checksum: "provider-sdk-generated-swagger-client";
     id: "createCallback";
     method: "POST";
     path: "/callback/create";
     sdkMethod: "CallbacksApi.bookCallbackExternal";
     sdkPackage: "engagement-client-js";
     source: "engagement-client-js CallbacksApi.bookCallbackExternal";
   }, {
     alias: "contact-center.contact.start";
     checksum: "not-available-html-doc";
     id: "requestChat";
     method: "POST";
     path: "/genesys/2/chat/{serviceName}";
     source: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2";
   }, {
     alias: "genesys-engage.chat.send";
     checksum: "not-available-html-doc";
     id: "sendChatMessage";
     method: "POST";
     path: "/genesys/2/chat/{serviceName}/{chatId}/send";
     source: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2";
   }, {
     alias: "genesys-engage.gms.request";
     checksum: "not-applicable-host-configured";
     id: "providerExtensionRequest";
     method: "GET";
     path: "host-configured";
     source: "provider-rest-adapter";
  }];
  implementationStrategy: "official-sdk-and-provider-rest-adapter";
  providerSdkDecision: {
     checkedAt: "2026-06-25";
     checkedPackages: readonly [{
        checkedVersion: "9.0.83";
        license: "MIT";
        package: "engagement-client-js";
        reason: "Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter.";
        result: "accepted-callback-runtime-sdk";
      }, {
        checkedVersion: "9.0.95";
        license: "MIT";
        package: "genesys-workspace-client-js";
        reason: "Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints.";
        result: "workspace-web-edition-api-not-gms-runtime-client";
      }, {
        checkedVersion: "255.1.0";
        license: "MIT";
        package: "purecloud-platform-client-v2";
        reason: "Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints.";
        result: "genesys-cloud-sdk-not-genesys-engage-gms";
     }];
     defaultRestPolicy: "official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override";
     result: "official-engagement-sdk-for-callbacks-gms-chat-rest-adapter";
     typedClientOverride: "GenesysEngageProviderClient";
  };
  sdkDecision: "engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind"></a> `adapterKind` | `"official-engagement-sdk-plus-gms-rest-adapter"` |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"provider-sdk-generated-swagger-client"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/callback/create"`; `sdkMethod`: `"CallbacksApi.bookCallbackExternal"`; `sdkPackage`: `"engagement-client-js"`; `source`: `"engagement-client-js CallbacksApi.bookCallbackExternal"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.gms.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"official-sdk-and-provider-rest-adapter"` |
| <a id="property-providersdkdecision"></a> `providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\]; `defaultRestPolicy`: `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"`; `result`: `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"`; `typedClientOverride`: `"GenesysEngageProviderClient"`; \} |
| `providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\] |
| `providerSdkDecision.defaultRestPolicy` | `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"` |
| `providerSdkDecision.result` | `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"` |
| `providerSdkDecision.typedClientOverride` | `"GenesysEngageProviderClient"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-25"` |

***

### genesysEngageSupportSlice

```ts
const genesysEngageSupportSlice: {
  adapterKind: "official-engagement-sdk-plus-gms-rest-adapter";
  allowedOperations: readonly [{
     alias: "contact-center.handoff.request";
     checksum: "not-applicable-host-configured";
     id: "configuredHandoff";
     method: "POST";
     path: "host-configured";
     source: "provider-rest-adapter";
   }, {
     alias: "contact-center.callback.schedule";
     checksum: "provider-sdk-generated-swagger-client";
     id: "createCallback";
     method: "POST";
     path: "/callback/create";
     sdkMethod: "CallbacksApi.bookCallbackExternal";
     sdkPackage: "engagement-client-js";
     source: "engagement-client-js CallbacksApi.bookCallbackExternal";
   }, {
     alias: "contact-center.contact.start";
     checksum: "not-available-html-doc";
     id: "requestChat";
     method: "POST";
     path: "/genesys/2/chat/{serviceName}";
     source: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2";
   }, {
     alias: "genesys-engage.chat.send";
     checksum: "not-available-html-doc";
     id: "sendChatMessage";
     method: "POST";
     path: "/genesys/2/chat/{serviceName}/{chatId}/send";
     source: "https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2";
   }, {
     alias: "genesys-engage.gms.request";
     checksum: "not-applicable-host-configured";
     id: "providerExtensionRequest";
     method: "GET";
     path: "host-configured";
     source: "provider-rest-adapter";
  }];
  implementationStrategy: "official-sdk-and-provider-rest-adapter";
  providerSdkDecision: {
     checkedAt: "2026-06-25";
     checkedPackages: readonly [{
        checkedVersion: "9.0.83";
        license: "MIT";
        package: "engagement-client-js";
        reason: "Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter.";
        result: "accepted-callback-runtime-sdk";
      }, {
        checkedVersion: "9.0.95";
        license: "MIT";
        package: "genesys-workspace-client-js";
        reason: "Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints.";
        result: "workspace-web-edition-api-not-gms-runtime-client";
      }, {
        checkedVersion: "255.1.0";
        license: "MIT";
        package: "purecloud-platform-client-v2";
        reason: "Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints.";
        result: "genesys-cloud-sdk-not-genesys-engage-gms";
     }];
     defaultRestPolicy: "official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override";
     result: "official-engagement-sdk-for-callbacks-gms-chat-rest-adapter";
     typedClientOverride: "GenesysEngageProviderClient";
  };
  sdkDecision: "engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind-1"></a> `adapterKind` | `"official-engagement-sdk-plus-gms-rest-adapter"` |
| <a id="property-allowedoperations-1"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"configuredHandoff"`; `method`: `"POST"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"provider-sdk-generated-swagger-client"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/callback/create"`; `sdkMethod`: `"CallbacksApi.bookCallbackExternal"`; `sdkPackage`: `"engagement-client-js"`; `source`: `"engagement-client-js CallbacksApi.bookCallbackExternal"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.gms.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"providerExtensionRequest"`; `method`: `"GET"`; `path`: `"host-configured"`; `source`: `"provider-rest-adapter"`; \}\] |
| <a id="property-implementationstrategy-1"></a> `implementationStrategy` | `"official-sdk-and-provider-rest-adapter"` |
| <a id="property-providersdkdecision-1"></a> `providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\]; `defaultRestPolicy`: `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"`; `result`: `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"`; `typedClientOverride`: `"GenesysEngageProviderClient"`; \} |
| `providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `providerSdkDecision.checkedPackages` | readonly \[\{ `checkedVersion`: `"9.0.83"`; `license`: `"MIT"`; `package`: `"engagement-client-js"`; `reason`: `"Official PureEngage Engagement client exposes CallbacksApi.bookCallbackExternal, which backs Cognidesk contact-center.callback.schedule. It does not expose GMS Chat API v2, so chat operations stay on the reviewed REST adapter."`; `result`: `"accepted-callback-runtime-sdk"`; \}, \{ `checkedVersion`: `"9.0.95"`; `license`: `"MIT"`; `package`: `"genesys-workspace-client-js"`; `reason`: `"Workspace Web Edition client targets workspace voice/call controls rather than GMS Chat API v2 and GMS callback endpoints."`; `result`: `"workspace-web-edition-api-not-gms-runtime-client"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not Genesys Engage GMS Chat/Callback endpoints."`; `result`: `"genesys-cloud-sdk-not-genesys-engage-gms"`; \}\] |
| `providerSdkDecision.defaultRestPolicy` | `"official-engagement-client-sdk-for-callbacks-with-fail-closed-gms-chat-rest-adapter-and-typed-provider-client-override"` |
| `providerSdkDecision.result` | `"official-engagement-sdk-for-callbacks-gms-chat-rest-adapter"` |
| `providerSdkDecision.typedClientOverride` | `"GenesysEngageProviderClient"` |
| <a id="property-sdkdecision-1"></a> `sdkDecision` | `"engagement-client-js is used for callback scheduling through CallbacksApi.bookCallbackExternal. GMS Chat API v2 has no matching maintained backend/runtime SDK in the checked packages, so chat operations use the built-in reviewed REST adapter with providerClient override."` |
| <a id="property-verifiedat-1"></a> `verifiedAt` | `"2026-06-25"` |
