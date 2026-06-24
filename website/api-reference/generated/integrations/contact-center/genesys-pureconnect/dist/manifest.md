# integrations/contact-center/genesys-pureconnect/dist/manifest

## Variables

### genesysPureConnectProviderManifest

```ts
const genesysPureConnectProviderManifest: {
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
     capability: "create-provider-object";
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
        label: "PureConnect ICWS connection";
        url: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm";
      }, {
        label: "PureConnect ICWS interactions";
        url: "https://help.genesys.com/staging/developer/root/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm";
     }];
     notes: readonly ["No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "genesys-pureconnect-icws-base-url";
     label: "PureConnect ICWS base URL";
     required: true;
   }, {
     id: "genesys-pureconnect-session";
     label: "PureConnect ICWS session/authentication";
     required: false;
   }, {
     id: "genesys-pureconnect-routing";
     label: "PureConnect Interaction Web Tools routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.genesys-pureconnect";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        allowedOperations: readonly [{
           alias: "genesys-pureconnect.icws.connect";
           checksum: "not-available-html-doc";
           id: "createConnection";
           method: "POST";
           path: "/icws/connection";
           source: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm";
         }, {
           alias: "genesys-pureconnect.icws.request";
           checksum: "not-applicable-host-configured";
           id: "sessionRequest";
           method: "GET";
           path: "host-configured-icws-session-path";
           source: "host-configured";
        }];
        implementationStrategy: "generated-support-slice";
        sdkDecision: "No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
  };
  name: "Genesys PureConnect / ICWS";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "genesys-pureconnect.icws.connect";
     capability: "create-provider-object";
     extension: true;
     providerObject: "contact";
   }, {
     alias: "genesys-pureconnect.icws.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-genesys-pureconnect";
  provider: "genesys-pureconnect";
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
| `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"create-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `false`; \}\] |
| `category` | `"contact-center"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"PureConnect ICWS connection"`; `url`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `label`: `"PureConnect ICWS interactions"`; `url`: `"https://help.genesys.com/staging/developer/root/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm"`; \}\]; `notes`: readonly \[`"No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"PureConnect ICWS connection"`; `url`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `label`: `"PureConnect ICWS interactions"`; `url`: `"https://help.genesys.com/staging/developer/root/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm"`; \}\] |
| `coverage.notes` | readonly \[`"No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"genesys-pureconnect-icws-base-url"`; `label`: `"PureConnect ICWS base URL"`; `required`: `true`; \}, \{ `id`: `"genesys-pureconnect-session"`; `label`: `"PureConnect ICWS session/authentication"`; `required`: `false`; \}, \{ `id`: `"genesys-pureconnect-routing"`; `label`: `"PureConnect Interaction Web Tools routing configuration"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.genesys-pureconnect"` |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"genesys-pureconnect.icws.connect"`; `checksum`: `"not-available-html-doc"`; `id`: `"createConnection"`; `method`: `"POST"`; `path`: `"/icws/connection"`; `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"sessionRequest"`; `method`: `"GET"`; `path`: `"host-configured-icws-session-path"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."`; `verifiedAt`: `"2026-06-21"`; \}; `manifestOnlySafe`: `true`; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"genesys-pureconnect.icws.connect"`; `checksum`: `"not-available-html-doc"`; `id`: `"createConnection"`; `method`: `"POST"`; `path`: `"/icws/connection"`; `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"sessionRequest"`; `method`: `"GET"`; `path`: `"host-configured-icws-session-path"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"genesys-pureconnect.icws.connect"`; `checksum`: `"not-available-html-doc"`; `id`: `"createConnection"`; `method`: `"POST"`; `path`: `"/icws/connection"`; `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"sessionRequest"`; `method`: `"GET"`; `path`: `"host-configured-icws-session-path"`; `source`: `"host-configured"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"generated-support-slice"` |
| `metadata.implementation.sdkDecision` | `"No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.manifestOnlySafe` | `true` |
| `name` | `"Genesys PureConnect / ICWS"` |
| `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"genesys-pureconnect.icws.connect"`; `capability`: `"create-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| `packageName` | `"@cognidesk/integration-contact-center-genesys-pureconnect"` |
| `provider` | `"genesys-pureconnect"` |
| `trustLevel` | `"official"` |

***

### genesysPureConnectProviderManifestInput

```ts
const genesysPureConnectProviderManifestInput: {
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
     capability: "create-provider-object";
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
        label: "PureConnect ICWS connection";
        url: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm";
      }, {
        label: "PureConnect ICWS interactions";
        url: "https://help.genesys.com/staging/developer/root/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm";
     }];
     notes: readonly ["No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "genesys-pureconnect-icws-base-url";
     label: "PureConnect ICWS base URL";
     required: true;
   }, {
     id: "genesys-pureconnect-session";
     label: "PureConnect ICWS session/authentication";
     required: false;
   }, {
     id: "genesys-pureconnect-routing";
     label: "PureConnect Interaction Web Tools routing configuration";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "contact-center.genesys-pureconnect";
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        allowedOperations: readonly [{
           alias: "genesys-pureconnect.icws.connect";
           checksum: "not-available-html-doc";
           id: "createConnection";
           method: "POST";
           path: "/icws/connection";
           source: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm";
         }, {
           alias: "genesys-pureconnect.icws.request";
           checksum: "not-applicable-host-configured";
           id: "sessionRequest";
           method: "GET";
           path: "host-configured-icws-session-path";
           source: "host-configured";
        }];
        implementationStrategy: "generated-support-slice";
        sdkDecision: "No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations.";
        verifiedAt: "2026-06-21";
     };
     manifestOnlySafe: true;
  };
  name: "Genesys PureConnect / ICWS";
  operations: readonly [{
     alias: "contact-center.handoff.request";
     capability: "handoff";
     providerObject: "contactTransfer";
   }, {
     alias: "genesys-pureconnect.icws.connect";
     capability: "create-provider-object";
     extension: true;
     providerObject: "contact";
   }, {
     alias: "genesys-pureconnect.icws.request";
     capability: "read-provider-object";
     extension: true;
     providerObject: "contact";
  }];
  packageName: "@cognidesk/integration-contact-center-genesys-pureconnect";
  provider: "genesys-pureconnect";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | readonly \[\{ `capability`: `"handoff"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contactTransfer"`; `label`: `"contactTransfer"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"create-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObjects`: readonly \[\{ `kind`: `"contact"`; `label`: `"contact"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `false`; \}\] |
| <a id="property-category"></a> `category` | `"contact-center"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"PureConnect ICWS connection"`; `url`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `label`: `"PureConnect ICWS interactions"`; `url`: `"https://help.genesys.com/staging/developer/root/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm"`; \}\]; `notes`: readonly \[`"No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"PureConnect ICWS connection"`; `url`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `label`: `"PureConnect ICWS interactions"`; `url`: `"https://help.genesys.com/staging/developer/root/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm"`; \}\] |
| `coverage.notes` | readonly \[`"No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `id`: `"genesys-pureconnect-icws-base-url"`; `label`: `"PureConnect ICWS base URL"`; `required`: `true`; \}, \{ `id`: `"genesys-pureconnect-session"`; `label`: `"PureConnect ICWS session/authentication"`; `required`: `false`; \}, \{ `id`: `"genesys-pureconnect-routing"`; `label`: `"PureConnect Interaction Web Tools routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.genesys-pureconnect"` |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `allowedOperations`: readonly \[\{ `alias`: `"genesys-pureconnect.icws.connect"`; `checksum`: `"not-available-html-doc"`; `id`: `"createConnection"`; `method`: `"POST"`; `path`: `"/icws/connection"`; `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"sessionRequest"`; `method`: `"GET"`; `path`: `"host-configured-icws-session-path"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."`; `verifiedAt`: `"2026-06-21"`; \}; `manifestOnlySafe`: `true`; \} |
| `metadata.implementation` | \{ `allowedOperations`: readonly \[\{ `alias`: `"genesys-pureconnect.icws.connect"`; `checksum`: `"not-available-html-doc"`; `id`: `"createConnection"`; `method`: `"POST"`; `path`: `"/icws/connection"`; `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"sessionRequest"`; `method`: `"GET"`; `path`: `"host-configured-icws-session-path"`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"generated-support-slice"`; `sdkDecision`: `"No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"genesys-pureconnect.icws.connect"`; `checksum`: `"not-available-html-doc"`; `id`: `"createConnection"`; `method`: `"POST"`; `path`: `"/icws/connection"`; `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"sessionRequest"`; `method`: `"GET"`; `path`: `"host-configured-icws-session-path"`; `source`: `"host-configured"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"generated-support-slice"` |
| `metadata.implementation.sdkDecision` | `"No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.manifestOnlySafe` | `true` |
| <a id="property-name"></a> `name` | `"Genesys PureConnect / ICWS"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"genesys-pureconnect.icws.connect"`; `capability`: `"create-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-genesys-pureconnect"` |
| <a id="property-provider"></a> `provider` | `"genesys-pureconnect"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### genesysPureConnectSupportSlice

```ts
const genesysPureConnectSupportSlice: {
  allowedOperations: readonly [{
     alias: "genesys-pureconnect.icws.connect";
     checksum: "not-available-html-doc";
     id: "createConnection";
     method: "POST";
     path: "/icws/connection";
     source: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm";
   }, {
     alias: "genesys-pureconnect.icws.request";
     checksum: "not-applicable-host-configured";
     id: "sessionRequest";
     method: "GET";
     path: "host-configured-icws-session-path";
     source: "host-configured";
  }];
  implementationStrategy: "generated-support-slice";
  sdkDecision: "No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations.";
  verifiedAt: "2026-06-21";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"genesys-pureconnect.icws.connect"`; `checksum`: `"not-available-html-doc"`; `id`: `"createConnection"`; `method`: `"POST"`; `path`: `"/icws/connection"`; `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"sessionRequest"`; `method`: `"GET"`; `path`: `"host-configured-icws-session-path"`; `source`: `"host-configured"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"generated-support-slice"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"No viable official JavaScript SDK was verified for PureConnect ICWS or Interaction Web Tools; the package keeps selected ICWS support operations."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-21"` |
