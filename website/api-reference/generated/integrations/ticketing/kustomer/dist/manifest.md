# integrations/ticketing/kustomer/dist/manifest

## Variables

### kustomerHostClientSupportSlice

```ts
const kustomerHostClientSupportSlice: {
  allowedOperations: readonly [{
     alias: "ticket.create";
     id: "conversations.create";
     source: "provider-rest-adapter";
     target: "restAdapter.createConversation";
   }, {
     alias: "ticket.read";
     id: "conversations.read";
     source: "provider-rest-adapter";
     target: "restAdapter.getConversation";
   }, {
     alias: "ticket.update";
     id: "conversations.update";
     source: "provider-rest-adapter";
     target: "restAdapter.updateConversation";
   }, {
     alias: "ticket.search";
     id: "conversations.list";
     source: "provider-rest-adapter";
     target: "restAdapter.listConversations";
   }, {
     alias: "kustomer.message.list";
     id: "messages.list";
     source: "provider-rest-adapter";
     target: "restAdapter.listMessages";
   }, {
     alias: "ticket.comment.create";
     id: "messages.create";
     source: "provider-rest-adapter";
     target: "restAdapter.createMessage";
   }, {
     alias: "kustomer.customerDraft.create";
     id: "customer_drafts.create";
     source: "provider-rest-adapter";
     target: "restAdapter.createCustomerDraft";
   }, {
     alias: "kustomer.readiness";
     id: "readiness";
     source: "provider-rest-adapter";
     target: "restAdapter.readiness";
  }];
  implementationStrategy: "provider-rest-adapter";
  sdkDecision: {
     candidates: (
        | "@kustomer/apps-server"
        | "@kustomer/apps-client"
        | "@kustomer/apps-server-sdk"
       | "@kustomer/chat-react-native")[];
     checkedAt: "2026-06-25";
     reason: "Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package.";
     rejectedSdkPackages: readonly [{
        checkedVersion: "3.0.5";
        license: "MIT";
        packageName: "@kustomer/apps-server";
        reason: "Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client.";
      }, {
        checkedVersion: "3.0.5";
        license: "MIT";
        packageName: "@kustomer/apps-client";
        reason: "Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations.";
      }, {
        checkedVersion: "0.0.60";
        license: "not-declared";
        packageName: "@kustomer/apps-server-sdk";
        reason: "Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface.";
      }, {
        checkedVersion: "5.3.4";
        license: "SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/";
        packageName: "@kustomer/chat-react-native";
        reason: "React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client.";
     }];
     result: "no-official-maintained-ticketing-rest-sdk";
     verdict: "no-official-sdk-rest-adapter";
  };
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"kustomer.message.list"`; `id`: `"messages.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listMessages"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"messages.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createMessage"`; \}, \{ `alias`: `"kustomer.customerDraft.create"`; `id`: `"customer_drafts.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createCustomerDraft"`; \}, \{ `alias`: `"kustomer.readiness"`; `id`: `"readiness"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"provider-rest-adapter"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | \{ `candidates`: ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[]; `checkedAt`: `"2026-06-25"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `verdict`: `"no-official-sdk-rest-adapter"`; \} |
| `sdkDecision.candidates` | ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[] |
| `sdkDecision.checkedAt` | `"2026-06-25"` |
| `sdkDecision.reason` | `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."` |
| `sdkDecision.rejectedSdkPackages` | readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\] |
| `sdkDecision.result` | `"no-official-maintained-ticketing-rest-sdk"` |
| `sdkDecision.verdict` | `"no-official-sdk-rest-adapter"` |

***

### kustomerProviderRestAdapterException

```ts
const kustomerProviderRestAdapterException: {
  checkedAt: "2026-06-25";
  defaultClientPolicy: "built-in-kustomer-rest-adapter-with-access-token";
  reason: "Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package.";
  rejectedSdkPackages: readonly [{
     checkedVersion: "3.0.5";
     license: "MIT";
     packageName: "@kustomer/apps-server";
     reason: "Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client.";
   }, {
     checkedVersion: "3.0.5";
     license: "MIT";
     packageName: "@kustomer/apps-client";
     reason: "Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations.";
   }, {
     checkedVersion: "0.0.60";
     license: "not-declared";
     packageName: "@kustomer/apps-server-sdk";
     reason: "Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface.";
   }, {
     checkedVersion: "5.3.4";
     license: "SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/";
     packageName: "@kustomer/chat-react-native";
     reason: "React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client.";
  }];
  result: "no-official-maintained-ticketing-rest-sdk";
  typedClientOverride: "KustomerTicketingProviderClient";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-checkedat"></a> `checkedAt` | `"2026-06-25"` |
| <a id="property-defaultclientpolicy"></a> `defaultClientPolicy` | `"built-in-kustomer-rest-adapter-with-access-token"` |
| <a id="property-reason"></a> `reason` | `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."` |
| <a id="property-rejectedsdkpackages"></a> `rejectedSdkPackages` | readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\] |
| <a id="property-result"></a> `result` | `"no-official-maintained-ticketing-rest-sdk"` |
| <a id="property-typedclientoverride"></a> `typedClientOverride` | `"KustomerTicketingProviderClient"` |

***

### kustomerRejectedSdkPackages

```ts
const kustomerRejectedSdkPackages: readonly [{
  checkedVersion: "3.0.5";
  license: "MIT";
  packageName: "@kustomer/apps-server";
  reason: "Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client.";
}, {
  checkedVersion: "3.0.5";
  license: "MIT";
  packageName: "@kustomer/apps-client";
  reason: "Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations.";
}, {
  checkedVersion: "0.0.60";
  license: "not-declared";
  packageName: "@kustomer/apps-server-sdk";
  reason: "Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface.";
}, {
  checkedVersion: "5.3.4";
  license: "SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/";
  packageName: "@kustomer/chat-react-native";
  reason: "React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client.";
}];
```

***

### kustomerSdkDecision

```ts
const kustomerSdkDecision: {
  candidates: (
     | "@kustomer/apps-server"
     | "@kustomer/apps-client"
     | "@kustomer/apps-server-sdk"
    | "@kustomer/chat-react-native")[];
  checkedAt: "2026-06-25";
  reason: "Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package.";
  rejectedSdkPackages: readonly [{
     checkedVersion: "3.0.5";
     license: "MIT";
     packageName: "@kustomer/apps-server";
     reason: "Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client.";
   }, {
     checkedVersion: "3.0.5";
     license: "MIT";
     packageName: "@kustomer/apps-client";
     reason: "Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations.";
   }, {
     checkedVersion: "0.0.60";
     license: "not-declared";
     packageName: "@kustomer/apps-server-sdk";
     reason: "Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface.";
   }, {
     checkedVersion: "5.3.4";
     license: "SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/";
     packageName: "@kustomer/chat-react-native";
     reason: "React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client.";
  }];
  result: "no-official-maintained-ticketing-rest-sdk";
  verdict: "no-official-sdk-rest-adapter";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-candidates"></a> `candidates` | ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[] |
| <a id="property-checkedat-1"></a> `checkedAt` | `"2026-06-25"` |
| <a id="property-reason-1"></a> `reason` | `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."` |
| <a id="property-rejectedsdkpackages-1"></a> `rejectedSdkPackages` | readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\] |
| <a id="property-result-1"></a> `result` | `"no-official-maintained-ticketing-rest-sdk"` |
| <a id="property-verdict"></a> `verdict` | `"no-official-sdk-rest-adapter"` |

***

### kustomerTicketingProviderManifest

```ts
const kustomerTicketingProviderManifest: {
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
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
      }, {
        kind: "kustomerDraft";
        label: "Kustomer Draft";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
      }, {
        kind: "kustomerDraft";
        label: "Kustomer Draft";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Kustomer developer portal";
        url: "https://developer.kustomer.com/";
      }, {
        label: "Kustomer REST APIs portal";
        url: "https://developer.kustomer.com/kustomer-api-docs/reference";
      }, {
        label: "@kustomer/apps-server npm package";
        url: "https://www.npmjs.com/package/@kustomer/apps-server";
      }, {
        label: "@kustomer/apps-server-sdk npm package";
        url: "https://www.npmjs.com/package/@kustomer/apps-server-sdk";
      }, {
        label: "@kustomer/chat-react-native npm package";
        url: "https://www.npmjs.com/package/@kustomer/chat-react-native";
      }, {
        label: "Kustomer API keys";
        url: "https://help.kustomer.com/api-keys-SJs5YTIWX";
      }, {
        label: "Kustomer create message";
        url: "https://developer.kustomer.com/kustomer-api-docs/reference/createmessage";
     }];
     notes: ["Kustomer's developer surface separates REST APIs for backend systems from Apps Platform and Chat SDK packages.", "Support workflow calls use the built-in Kustomer REST adapter when baseUrl and accessToken/apiKey are configured.", "A host-provided KustomerTicketingProviderClient can still override the built-in REST adapter.", "The package declares an explicit REST-adapter exception because the checked Kustomer npm SDK packages do not provide a suitable backend support/ticketing REST client.", "Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows.", "This package intentionally does not copy the old generated full Kustomer public API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "kustomer-base-url";
     label: "Kustomer API base URL";
     required: false;
   }, {
     id: "kustomer-api-access";
     label: "Kustomer API access token or API key";
     metadata: {
        defaultClientPolicy: "built-in-rest-adapter";
     };
     required: true;
   }, {
     id: "kustomer-api-permissions";
     label: "Kustomer API permissions";
     metadata: {
        privilegeGuidance: "Kustomer API keys are governed by roles and API permissions; these strings are provider permission labels, not OAuth scopes.";
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: ["org.user.conversation.read", "org.user.conversation.write", "org.permission.conversation.create", "org.user.message.read", "org.user.message.write", "org.permission.message.create", "org.permission.draft.create", "org.admin.user.read"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.kustomer";
  limitations: ["REST-adapter or host-client configuration owns auth, tenancy, pagination, retries, rate limits, and provider response normalization policy.", "Conversation model, queues, teams, custom objects, and message visibility are host-client configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        allowedOperations: readonly [{
           alias: "ticket.create";
           id: "conversations.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createConversation";
         }, {
           alias: "ticket.read";
           id: "conversations.read";
           source: "provider-rest-adapter";
           target: "restAdapter.getConversation";
         }, {
           alias: "ticket.update";
           id: "conversations.update";
           source: "provider-rest-adapter";
           target: "restAdapter.updateConversation";
         }, {
           alias: "ticket.search";
           id: "conversations.list";
           source: "provider-rest-adapter";
           target: "restAdapter.listConversations";
         }, {
           alias: "kustomer.message.list";
           id: "messages.list";
           source: "provider-rest-adapter";
           target: "restAdapter.listMessages";
         }, {
           alias: "ticket.comment.create";
           id: "messages.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createMessage";
         }, {
           alias: "kustomer.customerDraft.create";
           id: "customer_drafts.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createCustomerDraft";
         }, {
           alias: "kustomer.readiness";
           id: "readiness";
           source: "provider-rest-adapter";
           target: "restAdapter.readiness";
        }];
        implementationStrategy: "provider-rest-adapter";
        sdkDecision: {
           candidates: (
              | "@kustomer/apps-server"
              | "@kustomer/apps-client"
              | "@kustomer/apps-server-sdk"
             | "@kustomer/chat-react-native")[];
           checkedAt: "2026-06-25";
           reason: "Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package.";
           rejectedSdkPackages: readonly [{
              checkedVersion: "3.0.5";
              license: "MIT";
              packageName: "@kustomer/apps-server";
              reason: "Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client.";
            }, {
              checkedVersion: "3.0.5";
              license: "MIT";
              packageName: "@kustomer/apps-client";
              reason: "Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations.";
            }, {
              checkedVersion: "0.0.60";
              license: "not-declared";
              packageName: "@kustomer/apps-server-sdk";
              reason: "Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface.";
            }, {
              checkedVersion: "5.3.4";
              license: "SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/";
              packageName: "@kustomer/chat-react-native";
              reason: "React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client.";
           }];
           result: "no-official-maintained-ticketing-rest-sdk";
           verdict: "no-official-sdk-rest-adapter";
        };
     };
     implementationStrategy: "provider-rest-adapter";
     issue: 35;
     manifestOnlySafe: true;
     providerClient: {
        defaultClientPolicy: "built-in-rest-adapter";
        importPolicy: "runtime-override";
        interface: "KustomerTicketingProviderClient";
        package: "optional-override";
     };
     providerRestAdapterException: {
        checkedAt: "2026-06-25";
        defaultClientPolicy: "built-in-kustomer-rest-adapter-with-access-token";
        reason: "Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package.";
        rejectedSdkPackages: readonly [{
           checkedVersion: "3.0.5";
           license: "MIT";
           packageName: "@kustomer/apps-server";
           reason: "Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client.";
         }, {
           checkedVersion: "3.0.5";
           license: "MIT";
           packageName: "@kustomer/apps-client";
           reason: "Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations.";
         }, {
           checkedVersion: "0.0.60";
           license: "not-declared";
           packageName: "@kustomer/apps-server-sdk";
           reason: "Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface.";
         }, {
           checkedVersion: "5.3.4";
           license: "SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/";
           packageName: "@kustomer/chat-react-native";
           reason: "React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client.";
        }];
        result: "no-official-maintained-ticketing-rest-sdk";
        typedClientOverride: "KustomerTicketingProviderClient";
     };
     sdkDecision: {
        candidates: (
           | "@kustomer/apps-server"
           | "@kustomer/apps-client"
           | "@kustomer/apps-server-sdk"
          | "@kustomer/chat-react-native")[];
        checkedAt: "2026-06-25";
        reason: "Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package.";
        rejectedSdkPackages: readonly [{
           checkedVersion: "3.0.5";
           license: "MIT";
           packageName: "@kustomer/apps-server";
           reason: "Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client.";
         }, {
           checkedVersion: "3.0.5";
           license: "MIT";
           packageName: "@kustomer/apps-client";
           reason: "Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations.";
         }, {
           checkedVersion: "0.0.60";
           license: "not-declared";
           packageName: "@kustomer/apps-server-sdk";
           reason: "Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface.";
         }, {
           checkedVersion: "5.3.4";
           license: "SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/";
           packageName: "@kustomer/chat-react-native";
           reason: "React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client.";
        }];
        result: "no-official-maintained-ticketing-rest-sdk";
        verdict: "no-official-sdk-rest-adapter";
     };
  };
  name: "Kustomer";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /v1/conversations";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /v1/conversations/{conversation_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PATCH /v1/conversations/{conversation_id}";
     sideEffect: true;
   }, {
     alias: "ticket.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /v1/conversations";
   }, {
     alias: "ticket.comment.create";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticketComment";
     providerOperation: "POST /v1/messages";
     sideEffect: true;
   }, {
     alias: "kustomer.message.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "kustomerMessage";
     providerOperation: "GET /v1/messages";
   }, {
     alias: "kustomer.customerDraft.create";
     capability: "draft";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "kustomerDraft";
     providerOperation: "POST /v1/customers/{customer_id}/drafts";
     sideEffect: true;
   }, {
     alias: "kustomer.readiness";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "kustomerUser";
     providerOperation: "GET /v1/users/current";
  }];
  packageName: "@cognidesk/integration-ticketing-kustomer";
  privacyNotes: ["Kustomer conversations can include customer timeline data, messages, notes, tags, queue status, and custom objects."];
  provider: "kustomer";
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
| `capabilities` | \[\{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}, \{ `kind`: `"kustomerMessage"`; `label`: `"Kustomer Message"`; \}, \{ `kind`: `"kustomerDraft"`; `label`: `"Kustomer Draft"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}, \{ `kind`: `"kustomerMessage"`; `label`: `"Kustomer Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}, \{ `kind`: `"kustomerMessage"`; `label`: `"Kustomer Message"`; \}, \{ `kind`: `"kustomerDraft"`; `label`: `"Kustomer Draft"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Kustomer developer portal"`; `url`: `"https://developer.kustomer.com/"`; \}, \{ `label`: `"Kustomer REST APIs portal"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference"`; \}, \{ `label`: `"@kustomer/apps-server npm package"`; `url`: `"https://www.npmjs.com/package/@kustomer/apps-server"`; \}, \{ `label`: `"@kustomer/apps-server-sdk npm package"`; `url`: `"https://www.npmjs.com/package/@kustomer/apps-server-sdk"`; \}, \{ `label`: `"@kustomer/chat-react-native npm package"`; `url`: `"https://www.npmjs.com/package/@kustomer/chat-react-native"`; \}, \{ `label`: `"Kustomer API keys"`; `url`: `"https://help.kustomer.com/api-keys-SJs5YTIWX"`; \}, \{ `label`: `"Kustomer create message"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference/createmessage"`; \}\]; `notes`: \[`"Kustomer's developer surface separates REST APIs for backend systems from Apps Platform and Chat SDK packages."`, `"Support workflow calls use the built-in Kustomer REST adapter when baseUrl and accessToken/apiKey are configured."`, `"A host-provided KustomerTicketingProviderClient can still override the built-in REST adapter."`, `"The package declares an explicit REST-adapter exception because the checked Kustomer npm SDK packages do not provide a suitable backend support/ticketing REST client."`, `"Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows."`, `"This package intentionally does not copy the old generated full Kustomer public API clone."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Kustomer developer portal"`; `url`: `"https://developer.kustomer.com/"`; \}, \{ `label`: `"Kustomer REST APIs portal"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference"`; \}, \{ `label`: `"@kustomer/apps-server npm package"`; `url`: `"https://www.npmjs.com/package/@kustomer/apps-server"`; \}, \{ `label`: `"@kustomer/apps-server-sdk npm package"`; `url`: `"https://www.npmjs.com/package/@kustomer/apps-server-sdk"`; \}, \{ `label`: `"@kustomer/chat-react-native npm package"`; `url`: `"https://www.npmjs.com/package/@kustomer/chat-react-native"`; \}, \{ `label`: `"Kustomer API keys"`; `url`: `"https://help.kustomer.com/api-keys-SJs5YTIWX"`; \}, \{ `label`: `"Kustomer create message"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference/createmessage"`; \}\] |
| `coverage.notes` | \[`"Kustomer's developer surface separates REST APIs for backend systems from Apps Platform and Chat SDK packages."`, `"Support workflow calls use the built-in Kustomer REST adapter when baseUrl and accessToken/apiKey are configured."`, `"A host-provided KustomerTicketingProviderClient can still override the built-in REST adapter."`, `"The package declares an explicit REST-adapter exception because the checked Kustomer npm SDK packages do not provide a suitable backend support/ticketing REST client."`, `"Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows."`, `"This package intentionally does not copy the old generated full Kustomer public API clone."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `id`: `"kustomer-base-url"`; `label`: `"Kustomer API base URL"`; `required`: `false`; \}, \{ `id`: `"kustomer-api-access"`; `label`: `"Kustomer API access token or API key"`; `metadata`: \{ `defaultClientPolicy`: `"built-in-rest-adapter"`; \}; `required`: `true`; \}, \{ `id`: `"kustomer-api-permissions"`; `label`: `"Kustomer API permissions"`; `metadata`: \{ `privilegeGuidance`: `"Kustomer API keys are governed by roles and API permissions; these strings are provider permission labels, not OAuth scopes."`; `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: \[`"org.user.conversation.read"`, `"org.user.conversation.write"`, `"org.permission.conversation.create"`, `"org.user.message.read"`, `"org.user.message.write"`, `"org.permission.message.create"`, `"org.permission.draft.create"`, `"org.admin.user.read"`\]; \}\] |
| `directions` | \[`"bidirectional"`\] |
| `id` | `"ticketing.kustomer"` |
| `limitations` | \[`"REST-adapter or host-client configuration owns auth, tenancy, pagination, retries, rate limits, and provider response normalization policy."`, `"Conversation model, queues, teams, custom objects, and message visibility are host-client configuration."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"kustomer.message.list"`; `id`: `"messages.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listMessages"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"messages.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createMessage"`; \}, \{ `alias`: `"kustomer.customerDraft.create"`; `id`: `"customer_drafts.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createCustomerDraft"`; \}, \{ `alias`: `"kustomer.readiness"`; `id`: `"readiness"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `sdkDecision`: \{ `candidates`: ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[]; `checkedAt`: `"2026-06-25"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `verdict`: `"no-official-sdk-rest-adapter"`; \}; \}; `implementationStrategy`: `"provider-rest-adapter"`; `issue`: `35`; `manifestOnlySafe`: `true`; `providerClient`: \{ `defaultClientPolicy`: `"built-in-rest-adapter"`; `importPolicy`: `"runtime-override"`; `interface`: `"KustomerTicketingProviderClient"`; `package`: `"optional-override"`; \}; `providerRestAdapterException`: \{ `checkedAt`: `"2026-06-25"`; `defaultClientPolicy`: `"built-in-kustomer-rest-adapter-with-access-token"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `typedClientOverride`: `"KustomerTicketingProviderClient"`; \}; `sdkDecision`: \{ `candidates`: ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[]; `checkedAt`: `"2026-06-25"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `verdict`: `"no-official-sdk-rest-adapter"`; \}; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"kustomer.message.list"`; `id`: `"messages.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listMessages"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"messages.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createMessage"`; \}, \{ `alias`: `"kustomer.customerDraft.create"`; `id`: `"customer_drafts.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createCustomerDraft"`; \}, \{ `alias`: `"kustomer.readiness"`; `id`: `"readiness"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `sdkDecision`: \{ `candidates`: ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[]; `checkedAt`: `"2026-06-25"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `verdict`: `"no-official-sdk-rest-adapter"`; \}; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"kustomer.message.list"`; `id`: `"messages.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listMessages"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"messages.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createMessage"`; \}, \{ `alias`: `"kustomer.customerDraft.create"`; `id`: `"customer_drafts.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createCustomerDraft"`; \}, \{ `alias`: `"kustomer.readiness"`; `id`: `"readiness"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.sdkDecision` | \{ `candidates`: ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[]; `checkedAt`: `"2026-06-25"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `verdict`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.implementation.sdkDecision.candidates` | ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[] |
| `metadata.implementation.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.sdkDecision.reason` | `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."` |
| `metadata.implementation.sdkDecision.rejectedSdkPackages` | readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\] |
| `metadata.implementation.sdkDecision.result` | `"no-official-maintained-ticketing-rest-sdk"` |
| `metadata.implementation.sdkDecision.verdict` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.issue` | `35` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerClient` | \{ `defaultClientPolicy`: `"built-in-rest-adapter"`; `importPolicy`: `"runtime-override"`; `interface`: `"KustomerTicketingProviderClient"`; `package`: `"optional-override"`; \} |
| `metadata.providerClient.defaultClientPolicy` | `"built-in-rest-adapter"` |
| `metadata.providerClient.importPolicy` | `"runtime-override"` |
| `metadata.providerClient.interface` | `"KustomerTicketingProviderClient"` |
| `metadata.providerClient.package` | `"optional-override"` |
| `metadata.providerRestAdapterException` | \{ `checkedAt`: `"2026-06-25"`; `defaultClientPolicy`: `"built-in-kustomer-rest-adapter-with-access-token"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `typedClientOverride`: `"KustomerTicketingProviderClient"`; \} |
| `metadata.providerRestAdapterException.checkedAt` | `"2026-06-25"` |
| `metadata.providerRestAdapterException.defaultClientPolicy` | `"built-in-kustomer-rest-adapter-with-access-token"` |
| `metadata.providerRestAdapterException.reason` | `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."` |
| `metadata.providerRestAdapterException.rejectedSdkPackages` | readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\] |
| `metadata.providerRestAdapterException.result` | `"no-official-maintained-ticketing-rest-sdk"` |
| `metadata.providerRestAdapterException.typedClientOverride` | `"KustomerTicketingProviderClient"` |
| `metadata.sdkDecision` | \{ `candidates`: ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[]; `checkedAt`: `"2026-06-25"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `verdict`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.sdkDecision.candidates` | ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[] |
| `metadata.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.sdkDecision.reason` | `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."` |
| `metadata.sdkDecision.rejectedSdkPackages` | readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\] |
| `metadata.sdkDecision.result` | `"no-official-maintained-ticketing-rest-sdk"` |
| `metadata.sdkDecision.verdict` | `"no-official-sdk-rest-adapter"` |
| `name` | `"Kustomer"` |
| `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /v1/conversations"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /v1/conversations/{conversation_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PATCH /v1/conversations/{conversation_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /v1/conversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /v1/messages"`; `sideEffect`: `true`; \}, \{ `alias`: `"kustomer.message.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"kustomerMessage"`; `providerOperation`: `"GET /v1/messages"`; \}, \{ `alias`: `"kustomer.customerDraft.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"kustomerDraft"`; `providerOperation`: `"POST /v1/customers/{customer_id}/drafts"`; `sideEffect`: `true`; \}, \{ `alias`: `"kustomer.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"kustomerUser"`; `providerOperation`: `"GET /v1/users/current"`; \}\] |
| `packageName` | `"@cognidesk/integration-ticketing-kustomer"` |
| `privacyNotes` | \[`"Kustomer conversations can include customer timeline data, messages, notes, tags, queue status, and custom objects."`\] |
| `provider` | `"kustomer"` |
| `trustLevel` | `"official"` |

***

### kustomerTicketingProviderManifestInput

```ts
const kustomerTicketingProviderManifestInput: {
  capabilities: [{
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
      }, {
        kind: "kustomerDraft";
        label: "Kustomer Draft";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
     }];
     requiresCredential: true;
   }, {
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
     }];
     requiresCredential: true;
   }, {
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObjects: [{
        kind: "kustomerConversation";
        label: "Kustomer Conversation";
      }, {
        kind: "kustomerMessage";
        label: "Kustomer Message";
      }, {
        kind: "kustomerDraft";
        label: "Kustomer Draft";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
        label: "Kustomer developer portal";
        url: "https://developer.kustomer.com/";
      }, {
        label: "Kustomer REST APIs portal";
        url: "https://developer.kustomer.com/kustomer-api-docs/reference";
      }, {
        label: "@kustomer/apps-server npm package";
        url: "https://www.npmjs.com/package/@kustomer/apps-server";
      }, {
        label: "@kustomer/apps-server-sdk npm package";
        url: "https://www.npmjs.com/package/@kustomer/apps-server-sdk";
      }, {
        label: "@kustomer/chat-react-native npm package";
        url: "https://www.npmjs.com/package/@kustomer/chat-react-native";
      }, {
        label: "Kustomer API keys";
        url: "https://help.kustomer.com/api-keys-SJs5YTIWX";
      }, {
        label: "Kustomer create message";
        url: "https://developer.kustomer.com/kustomer-api-docs/reference/createmessage";
     }];
     notes: ["Kustomer's developer surface separates REST APIs for backend systems from Apps Platform and Chat SDK packages.", "Support workflow calls use the built-in Kustomer REST adapter when baseUrl and accessToken/apiKey are configured.", "A host-provided KustomerTicketingProviderClient can still override the built-in REST adapter.", "The package declares an explicit REST-adapter exception because the checked Kustomer npm SDK packages do not provide a suitable backend support/ticketing REST client.", "Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows.", "This package intentionally does not copy the old generated full Kustomer public API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     id: "kustomer-base-url";
     label: "Kustomer API base URL";
     required: false;
   }, {
     id: "kustomer-api-access";
     label: "Kustomer API access token or API key";
     metadata: {
        defaultClientPolicy: "built-in-rest-adapter";
     };
     required: true;
   }, {
     id: "kustomer-api-permissions";
     label: "Kustomer API permissions";
     metadata: {
        privilegeGuidance: "Kustomer API keys are governed by roles and API permissions; these strings are provider permission labels, not OAuth scopes.";
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: ["org.user.conversation.read", "org.user.conversation.write", "org.permission.conversation.create", "org.user.message.read", "org.user.message.write", "org.permission.message.create", "org.permission.draft.create", "org.admin.user.read"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.kustomer";
  limitations: ["REST-adapter or host-client configuration owns auth, tenancy, pagination, retries, rate limits, and provider response normalization policy.", "Conversation model, queues, teams, custom objects, and message visibility are host-client configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        allowedOperations: readonly [{
           alias: "ticket.create";
           id: "conversations.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createConversation";
         }, {
           alias: "ticket.read";
           id: "conversations.read";
           source: "provider-rest-adapter";
           target: "restAdapter.getConversation";
         }, {
           alias: "ticket.update";
           id: "conversations.update";
           source: "provider-rest-adapter";
           target: "restAdapter.updateConversation";
         }, {
           alias: "ticket.search";
           id: "conversations.list";
           source: "provider-rest-adapter";
           target: "restAdapter.listConversations";
         }, {
           alias: "kustomer.message.list";
           id: "messages.list";
           source: "provider-rest-adapter";
           target: "restAdapter.listMessages";
         }, {
           alias: "ticket.comment.create";
           id: "messages.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createMessage";
         }, {
           alias: "kustomer.customerDraft.create";
           id: "customer_drafts.create";
           source: "provider-rest-adapter";
           target: "restAdapter.createCustomerDraft";
         }, {
           alias: "kustomer.readiness";
           id: "readiness";
           source: "provider-rest-adapter";
           target: "restAdapter.readiness";
        }];
        implementationStrategy: "provider-rest-adapter";
        sdkDecision: {
           candidates: (
              | "@kustomer/apps-server"
              | "@kustomer/apps-client"
              | "@kustomer/apps-server-sdk"
             | "@kustomer/chat-react-native")[];
           checkedAt: "2026-06-25";
           reason: "Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package.";
           rejectedSdkPackages: readonly [{
              checkedVersion: "3.0.5";
              license: "MIT";
              packageName: "@kustomer/apps-server";
              reason: "Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client.";
            }, {
              checkedVersion: "3.0.5";
              license: "MIT";
              packageName: "@kustomer/apps-client";
              reason: "Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations.";
            }, {
              checkedVersion: "0.0.60";
              license: "not-declared";
              packageName: "@kustomer/apps-server-sdk";
              reason: "Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface.";
            }, {
              checkedVersion: "5.3.4";
              license: "SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/";
              packageName: "@kustomer/chat-react-native";
              reason: "React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client.";
           }];
           result: "no-official-maintained-ticketing-rest-sdk";
           verdict: "no-official-sdk-rest-adapter";
        };
     };
     implementationStrategy: "provider-rest-adapter";
     issue: 35;
     manifestOnlySafe: true;
     providerClient: {
        defaultClientPolicy: "built-in-rest-adapter";
        importPolicy: "runtime-override";
        interface: "KustomerTicketingProviderClient";
        package: "optional-override";
     };
     providerRestAdapterException: {
        checkedAt: "2026-06-25";
        defaultClientPolicy: "built-in-kustomer-rest-adapter-with-access-token";
        reason: "Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package.";
        rejectedSdkPackages: readonly [{
           checkedVersion: "3.0.5";
           license: "MIT";
           packageName: "@kustomer/apps-server";
           reason: "Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client.";
         }, {
           checkedVersion: "3.0.5";
           license: "MIT";
           packageName: "@kustomer/apps-client";
           reason: "Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations.";
         }, {
           checkedVersion: "0.0.60";
           license: "not-declared";
           packageName: "@kustomer/apps-server-sdk";
           reason: "Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface.";
         }, {
           checkedVersion: "5.3.4";
           license: "SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/";
           packageName: "@kustomer/chat-react-native";
           reason: "React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client.";
        }];
        result: "no-official-maintained-ticketing-rest-sdk";
        typedClientOverride: "KustomerTicketingProviderClient";
     };
     sdkDecision: {
        candidates: (
           | "@kustomer/apps-server"
           | "@kustomer/apps-client"
           | "@kustomer/apps-server-sdk"
          | "@kustomer/chat-react-native")[];
        checkedAt: "2026-06-25";
        reason: "Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package.";
        rejectedSdkPackages: readonly [{
           checkedVersion: "3.0.5";
           license: "MIT";
           packageName: "@kustomer/apps-server";
           reason: "Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client.";
         }, {
           checkedVersion: "3.0.5";
           license: "MIT";
           packageName: "@kustomer/apps-client";
           reason: "Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations.";
         }, {
           checkedVersion: "0.0.60";
           license: "not-declared";
           packageName: "@kustomer/apps-server-sdk";
           reason: "Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface.";
         }, {
           checkedVersion: "5.3.4";
           license: "SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/";
           packageName: "@kustomer/chat-react-native";
           reason: "React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client.";
        }];
        result: "no-official-maintained-ticketing-rest-sdk";
        verdict: "no-official-sdk-rest-adapter";
     };
  };
  name: "Kustomer";
  operations: [{
     alias: "ticket.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "POST /v1/conversations";
     sideEffect: true;
   }, {
     alias: "ticket.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /v1/conversations/{conversation_id}";
   }, {
     alias: "ticket.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "PATCH /v1/conversations/{conversation_id}";
     sideEffect: true;
   }, {
     alias: "ticket.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "ticket";
     providerOperation: "GET /v1/conversations";
   }, {
     alias: "ticket.comment.create";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "ticketComment";
     providerOperation: "POST /v1/messages";
     sideEffect: true;
   }, {
     alias: "kustomer.message.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "kustomerMessage";
     providerOperation: "GET /v1/messages";
   }, {
     alias: "kustomer.customerDraft.create";
     capability: "draft";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "kustomerDraft";
     providerOperation: "POST /v1/customers/{customer_id}/drafts";
     sideEffect: true;
   }, {
     alias: "kustomer.readiness";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "kustomerUser";
     providerOperation: "GET /v1/users/current";
  }];
  packageName: "@cognidesk/integration-ticketing-kustomer";
  privacyNotes: ["Kustomer conversations can include customer timeline data, messages, notes, tags, queue status, and custom objects."];
  provider: "kustomer";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}, \{ `kind`: `"kustomerMessage"`; `label`: `"Kustomer Message"`; \}, \{ `kind`: `"kustomerDraft"`; `label`: `"Kustomer Draft"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}, \{ `kind`: `"kustomerMessage"`; `label`: `"Kustomer Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}\]; `requiresCredential`: `true`; \}, \{ `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObjects`: \[\{ `kind`: `"kustomerConversation"`; `label`: `"Kustomer Conversation"`; \}, \{ `kind`: `"kustomerMessage"`; `label`: `"Kustomer Message"`; \}, \{ `kind`: `"kustomerDraft"`; `label`: `"Kustomer Draft"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"ticketing"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Kustomer developer portal"`; `url`: `"https://developer.kustomer.com/"`; \}, \{ `label`: `"Kustomer REST APIs portal"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference"`; \}, \{ `label`: `"@kustomer/apps-server npm package"`; `url`: `"https://www.npmjs.com/package/@kustomer/apps-server"`; \}, \{ `label`: `"@kustomer/apps-server-sdk npm package"`; `url`: `"https://www.npmjs.com/package/@kustomer/apps-server-sdk"`; \}, \{ `label`: `"@kustomer/chat-react-native npm package"`; `url`: `"https://www.npmjs.com/package/@kustomer/chat-react-native"`; \}, \{ `label`: `"Kustomer API keys"`; `url`: `"https://help.kustomer.com/api-keys-SJs5YTIWX"`; \}, \{ `label`: `"Kustomer create message"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference/createmessage"`; \}\]; `notes`: \[`"Kustomer's developer surface separates REST APIs for backend systems from Apps Platform and Chat SDK packages."`, `"Support workflow calls use the built-in Kustomer REST adapter when baseUrl and accessToken/apiKey are configured."`, `"A host-provided KustomerTicketingProviderClient can still override the built-in REST adapter."`, `"The package declares an explicit REST-adapter exception because the checked Kustomer npm SDK packages do not provide a suitable backend support/ticketing REST client."`, `"Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows."`, `"This package intentionally does not copy the old generated full Kustomer public API clone."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Kustomer developer portal"`; `url`: `"https://developer.kustomer.com/"`; \}, \{ `label`: `"Kustomer REST APIs portal"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference"`; \}, \{ `label`: `"@kustomer/apps-server npm package"`; `url`: `"https://www.npmjs.com/package/@kustomer/apps-server"`; \}, \{ `label`: `"@kustomer/apps-server-sdk npm package"`; `url`: `"https://www.npmjs.com/package/@kustomer/apps-server-sdk"`; \}, \{ `label`: `"@kustomer/chat-react-native npm package"`; `url`: `"https://www.npmjs.com/package/@kustomer/chat-react-native"`; \}, \{ `label`: `"Kustomer API keys"`; `url`: `"https://help.kustomer.com/api-keys-SJs5YTIWX"`; \}, \{ `label`: `"Kustomer create message"`; `url`: `"https://developer.kustomer.com/kustomer-api-docs/reference/createmessage"`; \}\] |
| `coverage.notes` | \[`"Kustomer's developer surface separates REST APIs for backend systems from Apps Platform and Chat SDK packages."`, `"Support workflow calls use the built-in Kustomer REST adapter when baseUrl and accessToken/apiKey are configured."`, `"A host-provided KustomerTicketingProviderClient can still override the built-in REST adapter."`, `"The package declares an explicit REST-adapter exception because the checked Kustomer npm SDK packages do not provide a suitable backend support/ticketing REST client."`, `"Coverage is limited to Kustomer conversation create/read/update/list, message list/create, customer draft creation, and org readiness for support workflows."`, `"This package intentionally does not copy the old generated full Kustomer public API clone."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `id`: `"kustomer-base-url"`; `label`: `"Kustomer API base URL"`; `required`: `false`; \}, \{ `id`: `"kustomer-api-access"`; `label`: `"Kustomer API access token or API key"`; `metadata`: \{ `defaultClientPolicy`: `"built-in-rest-adapter"`; \}; `required`: `true`; \}, \{ `id`: `"kustomer-api-permissions"`; `label`: `"Kustomer API permissions"`; `metadata`: \{ `privilegeGuidance`: `"Kustomer API keys are governed by roles and API permissions; these strings are provider permission labels, not OAuth scopes."`; `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: \[`"org.user.conversation.read"`, `"org.user.conversation.write"`, `"org.permission.conversation.create"`, `"org.user.message.read"`, `"org.user.message.write"`, `"org.permission.message.create"`, `"org.permission.draft.create"`, `"org.admin.user.read"`\]; \}\] |
| <a id="property-directions"></a> `directions` | \[`"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"ticketing.kustomer"` |
| <a id="property-limitations"></a> `limitations` | \[`"REST-adapter or host-client configuration owns auth, tenancy, pagination, retries, rate limits, and provider response normalization policy."`, `"Conversation model, queues, teams, custom objects, and message visibility are host-client configuration."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"kustomer.message.list"`; `id`: `"messages.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listMessages"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"messages.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createMessage"`; \}, \{ `alias`: `"kustomer.customerDraft.create"`; `id`: `"customer_drafts.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createCustomerDraft"`; \}, \{ `alias`: `"kustomer.readiness"`; `id`: `"readiness"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `sdkDecision`: \{ `candidates`: ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[]; `checkedAt`: `"2026-06-25"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `verdict`: `"no-official-sdk-rest-adapter"`; \}; \}; `implementationStrategy`: `"provider-rest-adapter"`; `issue`: `35`; `manifestOnlySafe`: `true`; `providerClient`: \{ `defaultClientPolicy`: `"built-in-rest-adapter"`; `importPolicy`: `"runtime-override"`; `interface`: `"KustomerTicketingProviderClient"`; `package`: `"optional-override"`; \}; `providerRestAdapterException`: \{ `checkedAt`: `"2026-06-25"`; `defaultClientPolicy`: `"built-in-kustomer-rest-adapter-with-access-token"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `typedClientOverride`: `"KustomerTicketingProviderClient"`; \}; `sdkDecision`: \{ `candidates`: ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[]; `checkedAt`: `"2026-06-25"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `verdict`: `"no-official-sdk-rest-adapter"`; \}; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"kustomer.message.list"`; `id`: `"messages.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listMessages"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"messages.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createMessage"`; \}, \{ `alias`: `"kustomer.customerDraft.create"`; `id`: `"customer_drafts.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createCustomerDraft"`; \}, \{ `alias`: `"kustomer.readiness"`; `id`: `"readiness"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `sdkDecision`: \{ `candidates`: ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[]; `checkedAt`: `"2026-06-25"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `verdict`: `"no-official-sdk-rest-adapter"`; \}; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"ticket.create"`; `id`: `"conversations.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createConversation"`; \}, \{ `alias`: `"ticket.read"`; `id`: `"conversations.read"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.getConversation"`; \}, \{ `alias`: `"ticket.update"`; `id`: `"conversations.update"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.updateConversation"`; \}, \{ `alias`: `"ticket.search"`; `id`: `"conversations.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listConversations"`; \}, \{ `alias`: `"kustomer.message.list"`; `id`: `"messages.list"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.listMessages"`; \}, \{ `alias`: `"ticket.comment.create"`; `id`: `"messages.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createMessage"`; \}, \{ `alias`: `"kustomer.customerDraft.create"`; `id`: `"customer_drafts.create"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.createCustomerDraft"`; \}, \{ `alias`: `"kustomer.readiness"`; `id`: `"readiness"`; `source`: `"provider-rest-adapter"`; `target`: `"restAdapter.readiness"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.sdkDecision` | \{ `candidates`: ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[]; `checkedAt`: `"2026-06-25"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `verdict`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.implementation.sdkDecision.candidates` | ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[] |
| `metadata.implementation.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.sdkDecision.reason` | `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."` |
| `metadata.implementation.sdkDecision.rejectedSdkPackages` | readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\] |
| `metadata.implementation.sdkDecision.result` | `"no-official-maintained-ticketing-rest-sdk"` |
| `metadata.implementation.sdkDecision.verdict` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.issue` | `35` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerClient` | \{ `defaultClientPolicy`: `"built-in-rest-adapter"`; `importPolicy`: `"runtime-override"`; `interface`: `"KustomerTicketingProviderClient"`; `package`: `"optional-override"`; \} |
| `metadata.providerClient.defaultClientPolicy` | `"built-in-rest-adapter"` |
| `metadata.providerClient.importPolicy` | `"runtime-override"` |
| `metadata.providerClient.interface` | `"KustomerTicketingProviderClient"` |
| `metadata.providerClient.package` | `"optional-override"` |
| `metadata.providerRestAdapterException` | \{ `checkedAt`: `"2026-06-25"`; `defaultClientPolicy`: `"built-in-kustomer-rest-adapter-with-access-token"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `typedClientOverride`: `"KustomerTicketingProviderClient"`; \} |
| `metadata.providerRestAdapterException.checkedAt` | `"2026-06-25"` |
| `metadata.providerRestAdapterException.defaultClientPolicy` | `"built-in-kustomer-rest-adapter-with-access-token"` |
| `metadata.providerRestAdapterException.reason` | `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."` |
| `metadata.providerRestAdapterException.rejectedSdkPackages` | readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\] |
| `metadata.providerRestAdapterException.result` | `"no-official-maintained-ticketing-rest-sdk"` |
| `metadata.providerRestAdapterException.typedClientOverride` | `"KustomerTicketingProviderClient"` |
| `metadata.sdkDecision` | \{ `candidates`: ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[]; `checkedAt`: `"2026-06-25"`; `reason`: `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."`; `rejectedSdkPackages`: readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\]; `result`: `"no-official-maintained-ticketing-rest-sdk"`; `verdict`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.sdkDecision.candidates` | ( \| `"@kustomer/apps-server"` \| `"@kustomer/apps-client"` \| `"@kustomer/apps-server-sdk"` \| `"@kustomer/chat-react-native"`)[] |
| `metadata.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.sdkDecision.reason` | `"Kustomer's maintained JavaScript packages cover Apps Platform and Chat SDK runtimes, but do not provide a backend support/ticketing REST client for the conversation, message, customer draft, and readiness operations exposed by this package."` |
| `metadata.sdkDecision.rejectedSdkPackages` | readonly \[\{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-server"`; `reason`: `"Official Apps Platform server SDK for building Kustomer apps, not a backend public REST ticketing client."`; \}, \{ `checkedVersion`: `"3.0.5"`; `license`: `"MIT"`; `packageName`: `"@kustomer/apps-client"`; `reason`: `"Official Apps Platform client SDK for Kustomer app UI/runtime behavior, not backend support ticketing operations."`; \}, \{ `checkedVersion`: `"0.0.60"`; `license`: `"not-declared"`; `packageName`: `"@kustomer/apps-server-sdk"`; `reason`: `"Legacy app-building SDK with limited app API helpers, not a maintained public REST ticketing client for this support surface."`; \}, \{ `checkedVersion`: `"5.3.4"`; `license`: `"SEE LICENSE AT https://www.kustomer.com/legal/supplemental-terms/"`; `packageName`: `"@kustomer/chat-react-native"`; `reason`: `"React Native Chat SDK for customer-facing chat UI, not a server-side support ticketing REST client."`; \}\] |
| `metadata.sdkDecision.result` | `"no-official-maintained-ticketing-rest-sdk"` |
| `metadata.sdkDecision.verdict` | `"no-official-sdk-rest-adapter"` |
| <a id="property-name"></a> `name` | `"Kustomer"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"ticket.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"POST /v1/conversations"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /v1/conversations/{conversation_id}"`; \}, \{ `alias`: `"ticket.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"PATCH /v1/conversations/{conversation_id}"`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"ticket"`; `providerOperation`: `"GET /v1/conversations"`; \}, \{ `alias`: `"ticket.comment.create"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"ticketComment"`; `providerOperation`: `"POST /v1/messages"`; `sideEffect`: `true`; \}, \{ `alias`: `"kustomer.message.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"kustomerMessage"`; `providerOperation`: `"GET /v1/messages"`; \}, \{ `alias`: `"kustomer.customerDraft.create"`; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"kustomerDraft"`; `providerOperation`: `"POST /v1/customers/{customer_id}/drafts"`; `sideEffect`: `true`; \}, \{ `alias`: `"kustomer.readiness"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"kustomerUser"`; `providerOperation`: `"GET /v1/users/current"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-ticketing-kustomer"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Kustomer conversations can include customer timeline data, messages, notes, tags, queue status, and custom objects."`\] |
| <a id="property-provider"></a> `provider` | `"kustomer"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
