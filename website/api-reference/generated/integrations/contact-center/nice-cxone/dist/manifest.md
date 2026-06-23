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
        label: "NICE CXone Agent SDK";
        url: "https://github.com/nice-devone/nice-cxone-agent-sdk";
     }];
     notes: readonly ["Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."];
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
        allowedOperations: readonly [{
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
        }];
        implementationStrategy: "generated-support-slice";
        sdkDecision: "Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
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
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"NICE CXone REST APIs"`; `url`: `"https://developer.niceincontact.com/API"`; \}, \{ `label`: `"NICE CXone Agent SDK"`; `url`: `"https://github.com/nice-devone/nice-cxone-agent-sdk"`; \}\]; `notes`: readonly \[`"Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"NICE CXone REST APIs"`; `url`: `"https://developer.niceincontact.com/API"`; \}, \{ `label`: `"NICE CXone Agent SDK"`; `url`: `"https://github.com/nice-devone/nice-cxone-agent-sdk"`; \}\] |
| `coverage.notes` | readonly \[`"Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"nice-cxone-api-base"`; `label`: `"NICE CXone API base URL"`; `required`: `true`; \}, \{ `id`: `"nice-cxone-api-access"`; `label`: `"NICE CXone API access"`; `required`: `true`; \}, \{ `id`: `"nice-cxone-routing"`; `label`: `"NICE CXone skill/queue routing configuration"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.nice-cxone"` |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."`; `verifiedAt`: `"2026-06-21"`; \}; `manifestOnlySafe`: `true`; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"generated-support-slice"` |
| `metadata.implementation.sdkDecision` | `"Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.manifestOnlySafe` | `true` |
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
        label: "NICE CXone Agent SDK";
        url: "https://github.com/nice-devone/nice-cxone-agent-sdk";
     }];
     notes: readonly ["Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."];
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
        allowedOperations: readonly [{
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
        }];
        implementationStrategy: "generated-support-slice";
        sdkDecision: "Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
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
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"NICE CXone REST APIs"`; `url`: `"https://developer.niceincontact.com/API"`; \}, \{ `label`: `"NICE CXone Agent SDK"`; `url`: `"https://github.com/nice-devone/nice-cxone-agent-sdk"`; \}\]; `notes`: readonly \[`"Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"NICE CXone REST APIs"`; `url`: `"https://developer.niceincontact.com/API"`; \}, \{ `label`: `"NICE CXone Agent SDK"`; `url`: `"https://github.com/nice-devone/nice-cxone-agent-sdk"`; \}\] |
| `coverage.notes` | readonly \[`"Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `id`: `"nice-cxone-api-base"`; `label`: `"NICE CXone API base URL"`; `required`: `true`; \}, \{ `id`: `"nice-cxone-api-access"`; `label`: `"NICE CXone API access"`; `required`: `true`; \}, \{ `id`: `"nice-cxone-routing"`; `label`: `"NICE CXone skill/queue routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.nice-cxone"` |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."`; `verifiedAt`: `"2026-06-21"`; \}; `manifestOnlySafe`: `true`; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"generated-support-slice"` |
| `metadata.implementation.sdkDecision` | `"Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.manifestOnlySafe` | `true` |
| <a id="property-name"></a> `name` | `"NICE CXone"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `capability`: `"schedule"`; `providerObject`: `"callback"`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"contact-center.contact.end"`; `capability`: `"update-provider-object"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"nice-cxone.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-nice-cxone"` |
| <a id="property-provider"></a> `provider` | `"nice-cxone"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### niceCxoneSupportSlice

```ts
const niceCxoneSupportSlice: {
  allowedOperations: readonly [{
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
  }];
  implementationStrategy: "generated-support-slice";
  sdkDecision: "Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice.";
  verifiedAt: "2026-06-21";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"scheduleACallback"`; `method`: `"POST"`; `path`: `"/promise"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-callback-api-docs"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"startChatSession"`; `method`: `"POST"`; `path`: `"/contacts/chats"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}, \{ `alias`: `"contact-center.contact.end"`; `checksum`: `"sha256:076fb5602cd1e76f13d38bb2172547e9d2f91877447c3088ff14e849bac2099a-local-generated-operation-catalog"`; `id`: `"endChat"`; `method`: `"DELETE"`; `path`: `"/contacts/chats/{chatSession}"`; `source`: `"https://developer.niceincontact.com/content/apis/patron/patron-chatrequests-api-docs"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"generated-support-slice"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"Maintained NICE @nice-devone SDKs exist but are UNLICENSED and focus on agent/browser/digital SDK surfaces; this package keeps a reviewed support slice."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-21"` |
