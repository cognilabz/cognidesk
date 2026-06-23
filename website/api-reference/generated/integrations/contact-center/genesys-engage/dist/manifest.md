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
     capability: "send";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: true;
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
     }];
     notes: readonly ["No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."];
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
        allowedOperations: readonly [{
           alias: "contact-center.callback.schedule";
           checksum: "not-available-html-doc";
           id: "createCallback";
           method: "POST";
           path: "/genesys/1/service/callback/{serviceName}";
           source: "https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI";
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
        }];
        implementationStrategy: "generated-support-slice";
        sdkDecision: "No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
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
| `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"schedule"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"callback"`; `label`: `"callback"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"contact-center"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Genesys GMS Callback Services API"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `label`: `"Genesys GMS Chat API v2"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}\]; `notes`: readonly \[`"No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Genesys GMS Callback Services API"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `label`: `"Genesys GMS Chat API v2"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}\] |
| `coverage.notes` | readonly \[`"No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"genesys-engage-gms-base-url"`; `label`: `"Genesys Mobile Services base URL"`; `required`: `true`; \}, \{ `id`: `"genesys-engage-auth"`; `label`: `"Genesys Engage/GMS authentication"`; `required`: `false`; \}, \{ `id`: `"genesys-engage-routing"`; `label`: `"Genesys Engage callback, chat, and routing configuration"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.genesys-engage"` |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"not-available-html-doc"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/genesys/1/service/callback/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."`; `verifiedAt`: `"2026-06-21"`; \}; `manifestOnlySafe`: `true`; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"not-available-html-doc"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/genesys/1/service/callback/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"not-available-html-doc"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/genesys/1/service/callback/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"generated-support-slice"` |
| `metadata.implementation.sdkDecision` | `"No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.manifestOnlySafe` | `true` |
| `name` | `"Genesys Engage / GMS"` |
| `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `capability`: `"schedule"`; `providerObject`: `"callback"`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `capability`: `"send"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
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
     capability: "send";
     exposesSensitiveData: true;
     providerObjects: readonly [{
        kind: "contact";
        label: "contact";
     }];
     requiresCredential: true;
     sideEffect: true;
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
     }];
     notes: readonly ["No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."];
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
        allowedOperations: readonly [{
           alias: "contact-center.callback.schedule";
           checksum: "not-available-html-doc";
           id: "createCallback";
           method: "POST";
           path: "/genesys/1/service/callback/{serviceName}";
           source: "https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI";
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
        }];
        implementationStrategy: "generated-support-slice";
        sdkDecision: "No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
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
  }];
  packageName: "@cognidesk/integration-contact-center-genesys-engage";
  provider: "genesys-engage";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"schedule"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"callback"`; `label`: `"callback"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Genesys GMS Callback Services API"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `label`: `"Genesys GMS Chat API v2"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}\]; `notes`: readonly \[`"No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Genesys GMS Callback Services API"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `label`: `"Genesys GMS Chat API v2"`; `url`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}\] |
| `coverage.notes` | readonly \[`"No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `id`: `"genesys-engage-gms-base-url"`; `label`: `"Genesys Mobile Services base URL"`; `required`: `true`; \}, \{ `id`: `"genesys-engage-auth"`; `label`: `"Genesys Engage/GMS authentication"`; `required`: `false`; \}, \{ `id`: `"genesys-engage-routing"`; `label`: `"Genesys Engage callback, chat, and routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.genesys-engage"` |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"not-available-html-doc"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/genesys/1/service/callback/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."`; `verifiedAt`: `"2026-06-21"`; \}; `manifestOnlySafe`: `true`; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"not-available-html-doc"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/genesys/1/service/callback/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"not-available-html-doc"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/genesys/1/service/callback/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"generated-support-slice"` |
| `metadata.implementation.sdkDecision` | `"No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.manifestOnlySafe` | `true` |
| <a id="property-name"></a> `name` | `"Genesys Engage / GMS"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"contact-center.callback.schedule"`; `capability`: `"schedule"`; `providerObject`: `"callback"`; \}, \{ `alias`: `"contact-center.contact.start"`; `capability`: `"send"`; `providerObject`: `"contact"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `capability`: `"send"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-genesys-engage"` |
| <a id="property-provider"></a> `provider` | `"genesys-engage"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### genesysEngageSupportSlice

```ts
const genesysEngageSupportSlice: {
  allowedOperations: readonly [{
     alias: "contact-center.callback.schedule";
     checksum: "not-available-html-doc";
     id: "createCallback";
     method: "POST";
     path: "/genesys/1/service/callback/{serviceName}";
     source: "https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI";
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
  }];
  implementationStrategy: "generated-support-slice";
  sdkDecision: "No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations.";
  verifiedAt: "2026-06-21";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"contact-center.callback.schedule"`; `checksum`: `"not-available-html-doc"`; `id`: `"createCallback"`; `method`: `"POST"`; `path`: `"/genesys/1/service/callback/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/CallbackServicesAPI"`; \}, \{ `alias`: `"contact-center.contact.start"`; `checksum`: `"not-available-html-doc"`; `id`: `"requestChat"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}, \{ `alias`: `"genesys-engage.chat.send"`; `checksum`: `"not-available-html-doc"`; `id`: `"sendChatMessage"`; `method`: `"POST"`; `path`: `"/genesys/2/chat/{serviceName}/{chatId}/send"`; `source`: `"https://docs.genesys.com/Documentation/GMS/latest/API/ChatAPIv2"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"generated-support-slice"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"No viable GMS Chat API v2 or Engage Callback JavaScript SDK was verified; the package keeps selected GMS support operations."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-21"` |
