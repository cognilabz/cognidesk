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
        url: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm";
      }, {
        label: "PureConnect ICWS SDK";
        url: "https://help.genesys.com/pureconnect/mergedprojects/wh_tr/mergedprojects/wh_tr_installation_and_configuration/desktop/interaction_center_web_services_icws_sdk.htm";
      }, {
        label: "NPM ICWS candidate machinepack-ic";
        url: "https://www.npmjs.com/package/machinepack-ic";
     }];
     notes: readonly ["No maintained Genesys PureConnect ICWS npm runtime SDK was verified.", "Official PureConnect ICWS SDK documentation describes a REST API and API documentation rather than a maintained npm runtime client.", "Runtime calls use a typed REST adapter for reviewed endpoints when baseUrl/API credentials are supplied, with GenesysPureConnectProviderClient available as a host-client override.", "Host-configured ICWS session paths require explicit hostReviewedPath=true and a host policy classification before requests are dispatched."];
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
        adapterKind: "no-official-sdk-rest-adapter";
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
           requiresHostReviewedPath: true;
           source: "host-configured";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              package: "genesys-pureconnect";
              reason: "No npm package with this official PureConnect runtime SDK name was found.";
              result: "not-published";
            }, {
              package: "pureconnect";
              reason: "No npm package with this official PureConnect runtime SDK name was found.";
              result: "not-published";
            }, {
              checkedVersion: "0.1.0";
              license: "MIT";
              package: "machinepack-ic";
              reason: "Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK.";
              result: "third-party-unmaintained-icws-package";
            }, {
              checkedVersion: "255.1.0";
              license: "MIT";
              package: "purecloud-platform-client-v2";
              reason: "Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS.";
              result: "genesys-cloud-sdk-not-pureconnect-icws";
           }];
           defaultRestPolicy: "fail-closed-icws-rest-adapter-with-typed-provider-client-override";
           result: "no-maintained-official-pureconnect-icws-npm-sdk";
           typedClientOverride: "GenesysPureConnectProviderClient";
        };
        sdkAudit: {
           checkedPackages: readonly [{
              name: "genesys-pureconnect";
              result: "not-published";
            }, {
              name: "pureconnect";
              result: "not-published";
            }, {
              name: "purecloud-platform-client-v2";
              result: "maintained-genesys-cloud-sdk-not-pureconnect-icws";
            }, {
              latest: "0.1.0";
              name: "machinepack-ic";
              publishedAt: "2015-08-11";
              result: "third-party-unmaintained-icws-package";
           }];
           maintainedRuntimeSdk: false;
           registry: "npm";
        };
        sdkDecision: "No maintained Genesys PureConnect ICWS npm runtime SDK was verified; the official ICWS SDK page describes a REST API/docs, so this package provides a typed REST adapter with providerClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        providerClientOverride: "GenesysPureConnectProviderClient";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           package: "genesys-pureconnect";
           reason: "No npm package with this official PureConnect runtime SDK name was found.";
           result: "not-published";
         }, {
           package: "pureconnect";
           reason: "No npm package with this official PureConnect runtime SDK name was found.";
           result: "not-published";
         }, {
           checkedVersion: "0.1.0";
           license: "MIT";
           package: "machinepack-ic";
           reason: "Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK.";
           result: "third-party-unmaintained-icws-package";
         }, {
           checkedVersion: "255.1.0";
           license: "MIT";
           package: "purecloud-platform-client-v2";
           reason: "Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS.";
           result: "genesys-cloud-sdk-not-pureconnect-icws";
        }];
        defaultRestPolicy: "fail-closed-icws-rest-adapter-with-typed-provider-client-override";
        result: "no-maintained-official-pureconnect-icws-npm-sdk";
        typedClientOverride: "GenesysPureConnectProviderClient";
     };
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
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"PureConnect ICWS connection"`; `url`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `label`: `"PureConnect ICWS interactions"`; `url`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm"`; \}, \{ `label`: `"PureConnect ICWS SDK"`; `url`: `"https://help.genesys.com/pureconnect/mergedprojects/wh_tr/mergedprojects/wh_tr_installation_and_configuration/desktop/interaction_center_web_services_icws_sdk.htm"`; \}, \{ `label`: `"NPM ICWS candidate machinepack-ic"`; `url`: `"https://www.npmjs.com/package/machinepack-ic"`; \}\]; `notes`: readonly \[`"No maintained Genesys PureConnect ICWS npm runtime SDK was verified."`, `"Official PureConnect ICWS SDK documentation describes a REST API and API documentation rather than a maintained npm runtime client."`, `"Runtime calls use a typed REST adapter for reviewed endpoints when baseUrl/API credentials are supplied, with GenesysPureConnectProviderClient available as a host-client override."`, `"Host-configured ICWS session paths require explicit hostReviewedPath=true and a host policy classification before requests are dispatched."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"PureConnect ICWS connection"`; `url`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `label`: `"PureConnect ICWS interactions"`; `url`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm"`; \}, \{ `label`: `"PureConnect ICWS SDK"`; `url`: `"https://help.genesys.com/pureconnect/mergedprojects/wh_tr/mergedprojects/wh_tr_installation_and_configuration/desktop/interaction_center_web_services_icws_sdk.htm"`; \}, \{ `label`: `"NPM ICWS candidate machinepack-ic"`; `url`: `"https://www.npmjs.com/package/machinepack-ic"`; \}\] |
| `coverage.notes` | readonly \[`"No maintained Genesys PureConnect ICWS npm runtime SDK was verified."`, `"Official PureConnect ICWS SDK documentation describes a REST API and API documentation rather than a maintained npm runtime client."`, `"Runtime calls use a typed REST adapter for reviewed endpoints when baseUrl/API credentials are supplied, with GenesysPureConnectProviderClient available as a host-client override."`, `"Host-configured ICWS session paths require explicit hostReviewedPath=true and a host policy classification before requests are dispatched."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"genesys-pureconnect-icws-base-url"`; `label`: `"PureConnect ICWS base URL"`; `required`: `true`; \}, \{ `id`: `"genesys-pureconnect-session"`; `label`: `"PureConnect ICWS session/authentication"`; `required`: `false`; \}, \{ `id`: `"genesys-pureconnect-routing"`; `label`: `"PureConnect Interaction Web Tools routing configuration"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"contact-center.genesys-pureconnect"` |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"genesys-pureconnect.icws.connect"`; `checksum`: `"not-available-html-doc"`; `id`: `"createConnection"`; `method`: `"POST"`; `path`: `"/icws/connection"`; `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"sessionRequest"`; `method`: `"GET"`; `path`: `"host-configured-icws-session-path"`; `requiresHostReviewedPath`: `true`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\]; `defaultRestPolicy`: `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-maintained-official-pureconnect-icws-npm-sdk"`; `typedClientOverride`: `"GenesysPureConnectProviderClient"`; \}; `sdkAudit`: \{ `checkedPackages`: readonly \[\{ `name`: `"genesys-pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"purecloud-platform-client-v2"`; `result`: `"maintained-genesys-cloud-sdk-not-pureconnect-icws"`; \}, \{ `latest`: `"0.1.0"`; `name`: `"machinepack-ic"`; `publishedAt`: `"2015-08-11"`; `result`: `"third-party-unmaintained-icws-package"`; \}\]; `maintainedRuntimeSdk`: `false`; `registry`: `"npm"`; \}; `sdkDecision`: `"No maintained Genesys PureConnect ICWS npm runtime SDK was verified; the official ICWS SDK page describes a REST API/docs, so this package provides a typed REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `providerClientOverride`: `"GenesysPureConnectProviderClient"`; `strategy`: `"provider-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\]; `defaultRestPolicy`: `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-maintained-official-pureconnect-icws-npm-sdk"`; `typedClientOverride`: `"GenesysPureConnectProviderClient"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"genesys-pureconnect.icws.connect"`; `checksum`: `"not-available-html-doc"`; `id`: `"createConnection"`; `method`: `"POST"`; `path`: `"/icws/connection"`; `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"sessionRequest"`; `method`: `"GET"`; `path`: `"host-configured-icws-session-path"`; `requiresHostReviewedPath`: `true`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\]; `defaultRestPolicy`: `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-maintained-official-pureconnect-icws-npm-sdk"`; `typedClientOverride`: `"GenesysPureConnectProviderClient"`; \}; `sdkAudit`: \{ `checkedPackages`: readonly \[\{ `name`: `"genesys-pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"purecloud-platform-client-v2"`; `result`: `"maintained-genesys-cloud-sdk-not-pureconnect-icws"`; \}, \{ `latest`: `"0.1.0"`; `name`: `"machinepack-ic"`; `publishedAt`: `"2015-08-11"`; `result`: `"third-party-unmaintained-icws-package"`; \}\]; `maintainedRuntimeSdk`: `false`; `registry`: `"npm"`; \}; `sdkDecision`: `"No maintained Genesys PureConnect ICWS npm runtime SDK was verified; the official ICWS SDK page describes a REST API/docs, so this package provides a typed REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"genesys-pureconnect.icws.connect"`; `checksum`: `"not-available-html-doc"`; `id`: `"createConnection"`; `method`: `"POST"`; `path`: `"/icws/connection"`; `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"sessionRequest"`; `method`: `"GET"`; `path`: `"host-configured-icws-session-path"`; `requiresHostReviewedPath`: `true`; `source`: `"host-configured"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\]; `defaultRestPolicy`: `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-maintained-official-pureconnect-icws-npm-sdk"`; `typedClientOverride`: `"GenesysPureConnectProviderClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-maintained-official-pureconnect-icws-npm-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"GenesysPureConnectProviderClient"` |
| `metadata.implementation.sdkAudit` | \{ `checkedPackages`: readonly \[\{ `name`: `"genesys-pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"purecloud-platform-client-v2"`; `result`: `"maintained-genesys-cloud-sdk-not-pureconnect-icws"`; \}, \{ `latest`: `"0.1.0"`; `name`: `"machinepack-ic"`; `publishedAt`: `"2015-08-11"`; `result`: `"third-party-unmaintained-icws-package"`; \}\]; `maintainedRuntimeSdk`: `false`; `registry`: `"npm"`; \} |
| `metadata.implementation.sdkAudit.checkedPackages` | readonly \[\{ `name`: `"genesys-pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"purecloud-platform-client-v2"`; `result`: `"maintained-genesys-cloud-sdk-not-pureconnect-icws"`; \}, \{ `latest`: `"0.1.0"`; `name`: `"machinepack-ic"`; `publishedAt`: `"2015-08-11"`; `result`: `"third-party-unmaintained-icws-package"`; \}\] |
| `metadata.implementation.sdkAudit.maintainedRuntimeSdk` | `false` |
| `metadata.implementation.sdkAudit.registry` | `"npm"` |
| `metadata.implementation.sdkDecision` | `"No maintained Genesys PureConnect ICWS npm runtime SDK was verified; the official ICWS SDK page describes a REST API/docs, so this package provides a typed REST adapter with providerClient override."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `providerClientOverride`: `"GenesysPureConnectProviderClient"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapter.providerClientOverride` | `"GenesysPureConnectProviderClient"` |
| `metadata.providerRestAdapter.strategy` | `"provider-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\]; `defaultRestPolicy`: `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-maintained-official-pureconnect-icws-npm-sdk"`; `typedClientOverride`: `"GenesysPureConnectProviderClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-maintained-official-pureconnect-icws-npm-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"GenesysPureConnectProviderClient"` |
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
        url: "https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm";
      }, {
        label: "PureConnect ICWS SDK";
        url: "https://help.genesys.com/pureconnect/mergedprojects/wh_tr/mergedprojects/wh_tr_installation_and_configuration/desktop/interaction_center_web_services_icws_sdk.htm";
      }, {
        label: "NPM ICWS candidate machinepack-ic";
        url: "https://www.npmjs.com/package/machinepack-ic";
     }];
     notes: readonly ["No maintained Genesys PureConnect ICWS npm runtime SDK was verified.", "Official PureConnect ICWS SDK documentation describes a REST API and API documentation rather than a maintained npm runtime client.", "Runtime calls use a typed REST adapter for reviewed endpoints when baseUrl/API credentials are supplied, with GenesysPureConnectProviderClient available as a host-client override.", "Host-configured ICWS session paths require explicit hostReviewedPath=true and a host policy classification before requests are dispatched."];
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
        adapterKind: "no-official-sdk-rest-adapter";
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
           requiresHostReviewedPath: true;
           source: "host-configured";
        }];
        implementationStrategy: "provider-rest-adapter";
        providerSdkDecision: {
           checkedAt: "2026-06-25";
           checkedPackages: readonly [{
              package: "genesys-pureconnect";
              reason: "No npm package with this official PureConnect runtime SDK name was found.";
              result: "not-published";
            }, {
              package: "pureconnect";
              reason: "No npm package with this official PureConnect runtime SDK name was found.";
              result: "not-published";
            }, {
              checkedVersion: "0.1.0";
              license: "MIT";
              package: "machinepack-ic";
              reason: "Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK.";
              result: "third-party-unmaintained-icws-package";
            }, {
              checkedVersion: "255.1.0";
              license: "MIT";
              package: "purecloud-platform-client-v2";
              reason: "Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS.";
              result: "genesys-cloud-sdk-not-pureconnect-icws";
           }];
           defaultRestPolicy: "fail-closed-icws-rest-adapter-with-typed-provider-client-override";
           result: "no-maintained-official-pureconnect-icws-npm-sdk";
           typedClientOverride: "GenesysPureConnectProviderClient";
        };
        sdkAudit: {
           checkedPackages: readonly [{
              name: "genesys-pureconnect";
              result: "not-published";
            }, {
              name: "pureconnect";
              result: "not-published";
            }, {
              name: "purecloud-platform-client-v2";
              result: "maintained-genesys-cloud-sdk-not-pureconnect-icws";
            }, {
              latest: "0.1.0";
              name: "machinepack-ic";
              publishedAt: "2015-08-11";
              result: "third-party-unmaintained-icws-package";
           }];
           maintainedRuntimeSdk: false;
           registry: "npm";
        };
        sdkDecision: "No maintained Genesys PureConnect ICWS npm runtime SDK was verified; the official ICWS SDK page describes a REST API/docs, so this package provides a typed REST adapter with providerClient override.";
        verifiedAt: "2026-06-25";
     };
     manifestOnlySafe: true;
     providerRestAdapter: {
        adapterKind: "no-official-sdk-rest-adapter";
        providerClientOverride: "GenesysPureConnectProviderClient";
        strategy: "provider-rest-adapter";
     };
     providerSdkDecision: {
        checkedAt: "2026-06-25";
        checkedPackages: readonly [{
           package: "genesys-pureconnect";
           reason: "No npm package with this official PureConnect runtime SDK name was found.";
           result: "not-published";
         }, {
           package: "pureconnect";
           reason: "No npm package with this official PureConnect runtime SDK name was found.";
           result: "not-published";
         }, {
           checkedVersion: "0.1.0";
           license: "MIT";
           package: "machinepack-ic";
           reason: "Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK.";
           result: "third-party-unmaintained-icws-package";
         }, {
           checkedVersion: "255.1.0";
           license: "MIT";
           package: "purecloud-platform-client-v2";
           reason: "Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS.";
           result: "genesys-cloud-sdk-not-pureconnect-icws";
        }];
        defaultRestPolicy: "fail-closed-icws-rest-adapter-with-typed-provider-client-override";
        result: "no-maintained-official-pureconnect-icws-npm-sdk";
        typedClientOverride: "GenesysPureConnectProviderClient";
     };
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
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: readonly \[\{ `label`: `"PureConnect ICWS connection"`; `url`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `label`: `"PureConnect ICWS interactions"`; `url`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm"`; \}, \{ `label`: `"PureConnect ICWS SDK"`; `url`: `"https://help.genesys.com/pureconnect/mergedprojects/wh_tr/mergedprojects/wh_tr_installation_and_configuration/desktop/interaction_center_web_services_icws_sdk.htm"`; \}, \{ `label`: `"NPM ICWS candidate machinepack-ic"`; `url`: `"https://www.npmjs.com/package/machinepack-ic"`; \}\]; `notes`: readonly \[`"No maintained Genesys PureConnect ICWS npm runtime SDK was verified."`, `"Official PureConnect ICWS SDK documentation describes a REST API and API documentation rather than a maintained npm runtime client."`, `"Runtime calls use a typed REST adapter for reviewed endpoints when baseUrl/API credentials are supplied, with GenesysPureConnectProviderClient available as a host-client override."`, `"Host-configured ICWS session paths require explicit hostReviewedPath=true and a host policy classification before requests are dispatched."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"PureConnect ICWS connection"`; `url`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `label`: `"PureConnect ICWS interactions"`; `url`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/%28sessionId%29/interactions/Interactions.htm"`; \}, \{ `label`: `"PureConnect ICWS SDK"`; `url`: `"https://help.genesys.com/pureconnect/mergedprojects/wh_tr/mergedprojects/wh_tr_installation_and_configuration/desktop/interaction_center_web_services_icws_sdk.htm"`; \}, \{ `label`: `"NPM ICWS candidate machinepack-ic"`; `url`: `"https://www.npmjs.com/package/machinepack-ic"`; \}\] |
| `coverage.notes` | readonly \[`"No maintained Genesys PureConnect ICWS npm runtime SDK was verified."`, `"Official PureConnect ICWS SDK documentation describes a REST API and API documentation rather than a maintained npm runtime client."`, `"Runtime calls use a typed REST adapter for reviewed endpoints when baseUrl/API credentials are supplied, with GenesysPureConnectProviderClient available as a host-client override."`, `"Host-configured ICWS session paths require explicit hostReviewedPath=true and a host policy classification before requests are dispatched."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | readonly \[\{ `id`: `"genesys-pureconnect-icws-base-url"`; `label`: `"PureConnect ICWS base URL"`; `required`: `true`; \}, \{ `id`: `"genesys-pureconnect-session"`; `label`: `"PureConnect ICWS session/authentication"`; `required`: `false`; \}, \{ `id`: `"genesys-pureconnect-routing"`; `label`: `"PureConnect Interaction Web Tools routing configuration"`; `required`: `false`; \}\] |
| <a id="property-directions"></a> `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"contact-center.genesys-pureconnect"` |
| <a id="property-maintainers"></a> `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"genesys-pureconnect.icws.connect"`; `checksum`: `"not-available-html-doc"`; `id`: `"createConnection"`; `method`: `"POST"`; `path`: `"/icws/connection"`; `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"sessionRequest"`; `method`: `"GET"`; `path`: `"host-configured-icws-session-path"`; `requiresHostReviewedPath`: `true`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\]; `defaultRestPolicy`: `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-maintained-official-pureconnect-icws-npm-sdk"`; `typedClientOverride`: `"GenesysPureConnectProviderClient"`; \}; `sdkAudit`: \{ `checkedPackages`: readonly \[\{ `name`: `"genesys-pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"purecloud-platform-client-v2"`; `result`: `"maintained-genesys-cloud-sdk-not-pureconnect-icws"`; \}, \{ `latest`: `"0.1.0"`; `name`: `"machinepack-ic"`; `publishedAt`: `"2015-08-11"`; `result`: `"third-party-unmaintained-icws-package"`; \}\]; `maintainedRuntimeSdk`: `false`; `registry`: `"npm"`; \}; `sdkDecision`: `"No maintained Genesys PureConnect ICWS npm runtime SDK was verified; the official ICWS SDK page describes a REST API/docs, so this package provides a typed REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \}; `manifestOnlySafe`: `true`; `providerRestAdapter`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `providerClientOverride`: `"GenesysPureConnectProviderClient"`; `strategy`: `"provider-rest-adapter"`; \}; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\]; `defaultRestPolicy`: `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-maintained-official-pureconnect-icws-npm-sdk"`; `typedClientOverride`: `"GenesysPureConnectProviderClient"`; \}; \} |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedOperations`: readonly \[\{ `alias`: `"genesys-pureconnect.icws.connect"`; `checksum`: `"not-available-html-doc"`; `id`: `"createConnection"`; `method`: `"POST"`; `path`: `"/icws/connection"`; `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"sessionRequest"`; `method`: `"GET"`; `path`: `"host-configured-icws-session-path"`; `requiresHostReviewedPath`: `true`; `source`: `"host-configured"`; \}\]; `implementationStrategy`: `"provider-rest-adapter"`; `providerSdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\]; `defaultRestPolicy`: `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-maintained-official-pureconnect-icws-npm-sdk"`; `typedClientOverride`: `"GenesysPureConnectProviderClient"`; \}; `sdkAudit`: \{ `checkedPackages`: readonly \[\{ `name`: `"genesys-pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"purecloud-platform-client-v2"`; `result`: `"maintained-genesys-cloud-sdk-not-pureconnect-icws"`; \}, \{ `latest`: `"0.1.0"`; `name`: `"machinepack-ic"`; `publishedAt`: `"2015-08-11"`; `result`: `"third-party-unmaintained-icws-package"`; \}\]; `maintainedRuntimeSdk`: `false`; `registry`: `"npm"`; \}; `sdkDecision`: `"No maintained Genesys PureConnect ICWS npm runtime SDK was verified; the official ICWS SDK page describes a REST API/docs, so this package provides a typed REST adapter with providerClient override."`; `verifiedAt`: `"2026-06-25"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.allowedOperations` | readonly \[\{ `alias`: `"genesys-pureconnect.icws.connect"`; `checksum`: `"not-available-html-doc"`; `id`: `"createConnection"`; `method`: `"POST"`; `path`: `"/icws/connection"`; `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"sessionRequest"`; `method`: `"GET"`; `path`: `"host-configured-icws-session-path"`; `requiresHostReviewedPath`: `true`; `source`: `"host-configured"`; \}\] |
| `metadata.implementation.implementationStrategy` | `"provider-rest-adapter"` |
| `metadata.implementation.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\]; `defaultRestPolicy`: `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-maintained-official-pureconnect-icws-npm-sdk"`; `typedClientOverride`: `"GenesysPureConnectProviderClient"`; \} |
| `metadata.implementation.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.providerSdkDecision.checkedPackages` | readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\] |
| `metadata.implementation.providerSdkDecision.defaultRestPolicy` | `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"` |
| `metadata.implementation.providerSdkDecision.result` | `"no-maintained-official-pureconnect-icws-npm-sdk"` |
| `metadata.implementation.providerSdkDecision.typedClientOverride` | `"GenesysPureConnectProviderClient"` |
| `metadata.implementation.sdkAudit` | \{ `checkedPackages`: readonly \[\{ `name`: `"genesys-pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"purecloud-platform-client-v2"`; `result`: `"maintained-genesys-cloud-sdk-not-pureconnect-icws"`; \}, \{ `latest`: `"0.1.0"`; `name`: `"machinepack-ic"`; `publishedAt`: `"2015-08-11"`; `result`: `"third-party-unmaintained-icws-package"`; \}\]; `maintainedRuntimeSdk`: `false`; `registry`: `"npm"`; \} |
| `metadata.implementation.sdkAudit.checkedPackages` | readonly \[\{ `name`: `"genesys-pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"purecloud-platform-client-v2"`; `result`: `"maintained-genesys-cloud-sdk-not-pureconnect-icws"`; \}, \{ `latest`: `"0.1.0"`; `name`: `"machinepack-ic"`; `publishedAt`: `"2015-08-11"`; `result`: `"third-party-unmaintained-icws-package"`; \}\] |
| `metadata.implementation.sdkAudit.maintainedRuntimeSdk` | `false` |
| `metadata.implementation.sdkAudit.registry` | `"npm"` |
| `metadata.implementation.sdkDecision` | `"No maintained Genesys PureConnect ICWS npm runtime SDK was verified; the official ICWS SDK page describes a REST API/docs, so this package provides a typed REST adapter with providerClient override."` |
| `metadata.implementation.verifiedAt` | `"2026-06-25"` |
| `metadata.manifestOnlySafe` | `true` |
| `metadata.providerRestAdapter` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `providerClientOverride`: `"GenesysPureConnectProviderClient"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.providerRestAdapter.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapter.providerClientOverride` | `"GenesysPureConnectProviderClient"` |
| `metadata.providerRestAdapter.strategy` | `"provider-rest-adapter"` |
| `metadata.providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\]; `defaultRestPolicy`: `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-maintained-official-pureconnect-icws-npm-sdk"`; `typedClientOverride`: `"GenesysPureConnectProviderClient"`; \} |
| `metadata.providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerSdkDecision.checkedPackages` | readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\] |
| `metadata.providerSdkDecision.defaultRestPolicy` | `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"` |
| `metadata.providerSdkDecision.result` | `"no-maintained-official-pureconnect-icws-npm-sdk"` |
| `metadata.providerSdkDecision.typedClientOverride` | `"GenesysPureConnectProviderClient"` |
| <a id="property-name"></a> `name` | `"Genesys PureConnect / ICWS"` |
| <a id="property-operations"></a> `operations` | readonly \[\{ `alias`: `"contact-center.handoff.request"`; `capability`: `"handoff"`; `providerObject`: `"contactTransfer"`; \}, \{ `alias`: `"genesys-pureconnect.icws.connect"`; `capability`: `"create-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"contact"`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-contact-center-genesys-pureconnect"` |
| <a id="property-provider"></a> `provider` | `"genesys-pureconnect"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |

***

### genesysPureConnectProviderSdkDecision

```ts
const genesysPureConnectProviderSdkDecision: {
  checkedAt: "2026-06-25";
  checkedPackages: readonly [{
     package: "genesys-pureconnect";
     reason: "No npm package with this official PureConnect runtime SDK name was found.";
     result: "not-published";
   }, {
     package: "pureconnect";
     reason: "No npm package with this official PureConnect runtime SDK name was found.";
     result: "not-published";
   }, {
     checkedVersion: "0.1.0";
     license: "MIT";
     package: "machinepack-ic";
     reason: "Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK.";
     result: "third-party-unmaintained-icws-package";
   }, {
     checkedVersion: "255.1.0";
     license: "MIT";
     package: "purecloud-platform-client-v2";
     reason: "Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS.";
     result: "genesys-cloud-sdk-not-pureconnect-icws";
  }];
  defaultRestPolicy: "fail-closed-icws-rest-adapter-with-typed-provider-client-override";
  result: "no-maintained-official-pureconnect-icws-npm-sdk";
  typedClientOverride: "GenesysPureConnectProviderClient";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-checkedat"></a> `checkedAt` | `"2026-06-25"` |
| <a id="property-checkedpackages"></a> `checkedPackages` | readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\] |
| <a id="property-defaultrestpolicy"></a> `defaultRestPolicy` | `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"` |
| <a id="property-result"></a> `result` | `"no-maintained-official-pureconnect-icws-npm-sdk"` |
| <a id="property-typedclientoverride"></a> `typedClientOverride` | `"GenesysPureConnectProviderClient"` |

***

### genesysPureConnectSupportSlice

```ts
const genesysPureConnectSupportSlice: {
  adapterKind: "no-official-sdk-rest-adapter";
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
     requiresHostReviewedPath: true;
     source: "host-configured";
  }];
  implementationStrategy: "provider-rest-adapter";
  providerSdkDecision: {
     checkedAt: "2026-06-25";
     checkedPackages: readonly [{
        package: "genesys-pureconnect";
        reason: "No npm package with this official PureConnect runtime SDK name was found.";
        result: "not-published";
      }, {
        package: "pureconnect";
        reason: "No npm package with this official PureConnect runtime SDK name was found.";
        result: "not-published";
      }, {
        checkedVersion: "0.1.0";
        license: "MIT";
        package: "machinepack-ic";
        reason: "Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK.";
        result: "third-party-unmaintained-icws-package";
      }, {
        checkedVersion: "255.1.0";
        license: "MIT";
        package: "purecloud-platform-client-v2";
        reason: "Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS.";
        result: "genesys-cloud-sdk-not-pureconnect-icws";
     }];
     defaultRestPolicy: "fail-closed-icws-rest-adapter-with-typed-provider-client-override";
     result: "no-maintained-official-pureconnect-icws-npm-sdk";
     typedClientOverride: "GenesysPureConnectProviderClient";
  };
  sdkAudit: {
     checkedPackages: readonly [{
        name: "genesys-pureconnect";
        result: "not-published";
      }, {
        name: "pureconnect";
        result: "not-published";
      }, {
        name: "purecloud-platform-client-v2";
        result: "maintained-genesys-cloud-sdk-not-pureconnect-icws";
      }, {
        latest: "0.1.0";
        name: "machinepack-ic";
        publishedAt: "2015-08-11";
        result: "third-party-unmaintained-icws-package";
     }];
     maintainedRuntimeSdk: false;
     registry: "npm";
  };
  sdkDecision: "No maintained Genesys PureConnect ICWS npm runtime SDK was verified; the official ICWS SDK page describes a REST API/docs, so this package provides a typed REST adapter with providerClient override.";
  verifiedAt: "2026-06-25";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-adapterkind"></a> `adapterKind` | `"no-official-sdk-rest-adapter"` |
| <a id="property-allowedoperations"></a> `allowedOperations` | readonly \[\{ `alias`: `"genesys-pureconnect.icws.connect"`; `checksum`: `"not-available-html-doc"`; `id`: `"createConnection"`; `method`: `"POST"`; `path`: `"/icws/connection"`; `source`: `"https://help.genesys.com/developer/cic/docs/icws/webhelp/icws/connection/index.htm"`; \}, \{ `alias`: `"genesys-pureconnect.icws.request"`; `checksum`: `"not-applicable-host-configured"`; `id`: `"sessionRequest"`; `method`: `"GET"`; `path`: `"host-configured-icws-session-path"`; `requiresHostReviewedPath`: `true`; `source`: `"host-configured"`; \}\] |
| <a id="property-implementationstrategy"></a> `implementationStrategy` | `"provider-rest-adapter"` |
| <a id="property-providersdkdecision"></a> `providerSdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedPackages`: readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\]; `defaultRestPolicy`: `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"`; `result`: `"no-maintained-official-pureconnect-icws-npm-sdk"`; `typedClientOverride`: `"GenesysPureConnectProviderClient"`; \} |
| `providerSdkDecision.checkedAt` | `"2026-06-25"` |
| `providerSdkDecision.checkedPackages` | readonly \[\{ `package`: `"genesys-pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `package`: `"pureconnect"`; `reason`: `"No npm package with this official PureConnect runtime SDK name was found."`; `result`: `"not-published"`; \}, \{ `checkedVersion`: `"0.1.0"`; `license`: `"MIT"`; `package`: `"machinepack-ic"`; `reason`: `"Third-party ICWS wrapper, not an official maintained Genesys PureConnect runtime SDK."`; `result`: `"third-party-unmaintained-icws-package"`; \}, \{ `checkedVersion`: `"255.1.0"`; `license`: `"MIT"`; `package`: `"purecloud-platform-client-v2"`; `reason`: `"Maintained SDK targets Genesys Cloud Platform APIs, not PureConnect ICWS."`; `result`: `"genesys-cloud-sdk-not-pureconnect-icws"`; \}\] |
| `providerSdkDecision.defaultRestPolicy` | `"fail-closed-icws-rest-adapter-with-typed-provider-client-override"` |
| `providerSdkDecision.result` | `"no-maintained-official-pureconnect-icws-npm-sdk"` |
| `providerSdkDecision.typedClientOverride` | `"GenesysPureConnectProviderClient"` |
| <a id="property-sdkaudit"></a> `sdkAudit` | \{ `checkedPackages`: readonly \[\{ `name`: `"genesys-pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"purecloud-platform-client-v2"`; `result`: `"maintained-genesys-cloud-sdk-not-pureconnect-icws"`; \}, \{ `latest`: `"0.1.0"`; `name`: `"machinepack-ic"`; `publishedAt`: `"2015-08-11"`; `result`: `"third-party-unmaintained-icws-package"`; \}\]; `maintainedRuntimeSdk`: `false`; `registry`: `"npm"`; \} |
| `sdkAudit.checkedPackages` | readonly \[\{ `name`: `"genesys-pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"pureconnect"`; `result`: `"not-published"`; \}, \{ `name`: `"purecloud-platform-client-v2"`; `result`: `"maintained-genesys-cloud-sdk-not-pureconnect-icws"`; \}, \{ `latest`: `"0.1.0"`; `name`: `"machinepack-ic"`; `publishedAt`: `"2015-08-11"`; `result`: `"third-party-unmaintained-icws-package"`; \}\] |
| `sdkAudit.maintainedRuntimeSdk` | `false` |
| `sdkAudit.registry` | `"npm"` |
| <a id="property-sdkdecision"></a> `sdkDecision` | `"No maintained Genesys PureConnect ICWS npm runtime SDK was verified; the official ICWS SDK page describes a REST API/docs, so this package provides a typed REST adapter with providerClient override."` |
| <a id="property-verifiedat"></a> `verifiedAt` | `"2026-06-25"` |
