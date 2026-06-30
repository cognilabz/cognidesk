# integrations/ticketing/oracle-service/dist/manifest

## Variables

### ORACLE\_SERVICE\_DEFAULT\_API\_VERSION

```ts
const ORACLE_SERVICE_DEFAULT_API_VERSION: "11.13.18.05" = "11.13.18.05";
```

***

### oracleServiceProviderClientOperationTargets

```ts
const oracleServiceProviderClientOperationTargets: readonly [{
  alias: "ticket.create";
  target: "providerClient.createServiceRequest";
}, {
  alias: "ticket.read";
  target: "providerClient.getServiceRequest";
}, {
  alias: "ticket.update";
  target: "providerClient.updateServiceRequest";
}, {
  alias: "ticket.search";
  target: "providerClient.searchServiceRequests";
}, {
  alias: "oracle-service.serviceRequestMessage.create";
  target: "providerClient.createServiceRequestMessage";
}];
```

***

### oracleServiceRejectedProviderSdkCandidates

```ts
const oracleServiceRejectedProviderSdkCandidates: readonly [{
  packageName: "oci-fusionapps";
  reason: "Oracle-maintained OCI SDK package for Fusion Apps Service administration, not a typed Oracle Fusion Service serviceRequests or B2C Service incident data client.";
  result: "not-used-as-runtime-ticketing-sdk";
  source: "npm";
  version: "2.135.1";
}, {
  packageName: "oci-sdk";
  reason: "Oracle-maintained OCI SDK aggregate, but it does not expose the Oracle Fusion Service serviceRequests or Oracle B2C Service incident ticketing runtime surface used by this package.";
  result: "not-used-as-runtime-ticketing-sdk";
  source: "npm";
  version: "2.135.1";
}, {
  packageName: "osvc_node";
  reason: "Unofficial Oracle Service Cloud REST wrapper last published years ago, not a maintained Oracle runtime SDK suitable for Cognidesk provider-client ownership.";
  result: "rejected-unofficial-stale-wrapper";
  source: "npm";
  version: "1.0.0";
}];
```

***

### oracleServiceTicketingProviderManifest

```ts
const oracleServiceTicketingProviderManifest: {
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
     | "bidirectional"
     | "receive-only"
     | "send-only"
     | "inbound-only"
    | "outbound-only")[];
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
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Oracle Fusion Service serviceRequests records from SDK-user-selected support workflows.";
     exposesSensitiveData: true;
     label: "Create Oracle service requests";
     providerObjects: readonly [{
        kind: "oracleServiceRequest";
        label: "Oracle Service Request";
        schemaName: "serviceRequests";
      }, {
        kind: "oracleServiceRequestMessage";
        label: "Oracle Service Request Message";
        schemaName: "serviceRequests.child.messages";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Oracle Fusion Service service request records by SrNumber.";
     exposesSensitiveData: true;
     label: "Read Oracle service requests";
     providerObjects: readonly [{
        kind: "oracleServiceRequest";
        label: "Oracle Service Request";
        schemaName: "serviceRequests";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Oracle Fusion Service service request status, queue, assignee, resolution, or custom fields.";
     exposesSensitiveData: true;
     label: "Update Oracle service requests";
     providerObjects: readonly [{
        kind: "oracleServiceRequest";
        label: "Oracle Service Request";
        schemaName: "serviceRequests";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Queries Oracle Fusion Service service requests with SDK-user-supplied q, finder, fields, and paging controls.";
     exposesSensitiveData: true;
     label: "Search Oracle service requests";
     providerObjects: readonly [{
        kind: "oracleServiceRequest";
        label: "Oracle Service Request";
        schemaName: "serviceRequests";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     description: "Provides Oracle service request operations for SDK-user-configured human handoff workflows.";
     exposesSensitiveData: true;
     label: "Attach handoff to Oracle Service";
     providerObjects: readonly [{
        kind: "oracleServiceRequest";
        label: "Oracle Service Request";
        schemaName: "serviceRequests";
      }, {
        kind: "oracleServiceRequestMessage";
        label: "Oracle Service Request Message";
        schemaName: "serviceRequests.child.messages";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Oracle Fusion Service serviceRequests overview";
        url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/api-internal-service-requests.html";
      }, {
        label: "Oracle Fusion Service create service request";
        url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-post.html";
      }, {
        label: "Oracle Fusion Service get all service requests";
        url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-get.html";
      }, {
        label: "Oracle Fusion Service get service request";
        url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-get.html";
      }, {
        label: "Oracle Fusion Service update service request";
        url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-patch.html";
      }, {
        label: "Oracle Fusion Service create service request message";
        url: "https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-child-messages-post.html";
     }];
     notes: readonly ["Coverage is typed for Oracle Fusion Service serviceRequests create, read by SrNumber, patch, collection search, child message creation, and readiness checks used by Cognidesk support workflows.", "Runtime provider operations use the built-in Oracle Fusion Service REST adapter when baseUrl/instanceUrl plus access credentials are provided; a host-injected OracleServiceTicketingProviderClient remains available as an override.", "This is not full Oracle Fusion Service API coverage; service request child resources such as activities, attachments, contacts, message attachment/channel-communication lifecycle, milestones, resources, smart actions, tags, LOV/metadata behavior, workflow rules, queues, privileges, and broader Fusion CX APIs remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Optional SDK-user-owned provider client implementing OracleServiceTicketingProviderClient. When omitted, the package uses its built-in Oracle Fusion Service REST adapter.";
     id: "oracle-service-provider-client";
     label: "Optional host-provided Oracle Service provider client";
     metadata: {
        defaultClientPolicy: "built-in-provider-rest-adapter";
        importPolicy: "optional-host-override";
        interface: "OracleServiceTicketingProviderClient";
     };
     required: false;
   }, {
     description: "The Oracle Fusion Service base URL, for example https://example.fa.oraclecloud.com, used by the built-in REST adapter or supplied by a host provider client override.";
     id: "oracle-service-instance";
     label: "Oracle Fusion Service instance URL";
     metadata: {
        requiredWhen: "built-in-provider-rest-adapter";
     };
     required: false;
   }, {
     description: "Server-side Oracle Fusion Service access for serviceRequests and child messages, supplied as accessToken, basic auth, auth headers, or encapsulated in a host provider client.";
     id: "oracle-service-api-access";
     label: "Oracle Fusion Service API access";
     metadata: {
        privilegeGuidance: "These strings are Cognidesk capability labels, not official Oracle OAuth scope names. Oracle access depends on Fusion Service roles and privileges for service request read/create/update/search and message creation.";
        requiredWhen: "built-in-provider-rest-adapter";
        scopeKind: "internal-capability-labels";
     };
     required: false;
     scopes: readonly ["serviceRequests:read", "serviceRequests:write"];
  }];
  directions: readonly ["bidirectional"];
  id: "ticketing.oracle-service";
  limitations: readonly ["Oracle Service categories, required fields, queues, assignment rules, milestones, extensions, and privileges are owned by the SDK user's Fusion Service environment.", "SDK users own handoff timing, field mapping, customer identity matching, visibility, consent, notification policy, retry/rate-limit behavior, and retention before calling Oracle APIs.", "The built-in adapter covers selected serviceRequests REST operations only; hosts can still inject an approved Oracle Service provider client for custom authentication, retries, or API-version policy."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        activitiesContactsMilestones: "provider-supported-not-typed";
        attachments: "provider-supported-not-typed";
        queuesSmartActionsWorkflowRules: "not-covered";
        readinessSearch: "typed-search";
        serviceRequestMessages: "typed-create";
        serviceRequests: "typed-create-read-update-search";
     };
     checkedProviderApiCoverage: {
        checkedFamilyCount: 5;
        coverageArtifact: "docs/provider-coverage/oracle-service-checked-service-requests-2026-06-18.inventory.json";
        gapFamilyCount: 2;
        implementedFamilyCount: 3;
        implementedOperationCount: 5;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        apiVersion: "11.13.18.05";
        defaultClient: "built-in-oracle-fusion-service-rest-adapter";
        providerClientOverride: true;
        strategy: "provider-rest-adapter";
     };
     implementationStrategy: {
        checkedAt: "2026-06-25";
        exception: "provider-rest-adapter";
        reason: "No suitable maintained npm runtime SDK was verified for Oracle Fusion Service serviceRequests or Oracle Service Cloud/B2C Service incidents; Oracle documents these ticketing surfaces as REST APIs, while the official OCI TypeScript/JavaScript SDK manages OCI resources including Fusion Apps as a Service rather than service request records.";
        rejectedLibraries: readonly [{
           packageName: "oci-fusionapps";
           reason: "Oracle-maintained OCI SDK package for Fusion Apps Service administration, not a typed Oracle Fusion Service serviceRequests or B2C Service incident data client.";
           result: "not-used-as-runtime-ticketing-sdk";
           source: "npm";
           version: "2.135.1";
         }, {
           packageName: "oci-sdk";
           reason: "Oracle-maintained OCI SDK aggregate, but it does not expose the Oracle Fusion Service serviceRequests or Oracle B2C Service incident ticketing runtime surface used by this package.";
           result: "not-used-as-runtime-ticketing-sdk";
           source: "npm";
           version: "2.135.1";
         }, {
           packageName: "osvc_node";
           reason: "Unofficial Oracle Service Cloud REST wrapper last published years ago, not a maintained Oracle runtime SDK suitable for Cognidesk provider-client ownership.";
           result: "rejected-unofficial-stale-wrapper";
           source: "npm";
           version: "1.0.0";
        }];
        result: "no-suitable-maintained-runtime-provider-sdk";
        strategy: "no-official-sdk-rest-adapter";
     };
     providerClient: {
        defaultClientPolicy: "built-in-provider-rest-adapter";
        importPolicy: "optional-host-override";
        interface: "OracleServiceTicketingProviderClient";
        operationTargets: readonly [{
           alias: "ticket.create";
           target: "providerClient.createServiceRequest";
         }, {
           alias: "ticket.read";
           target: "providerClient.getServiceRequest";
         }, {
           alias: "ticket.update";
           target: "providerClient.updateServiceRequest";
         }, {
           alias: "ticket.search";
           target: "providerClient.searchServiceRequests";
         }, {
           alias: "oracle-service.serviceRequestMessage.create";
           target: "providerClient.createServiceRequestMessage";
        }];
        package: "optional-host-provided";
     };
     providerRestAdapterOperationSlice: {
        adapterKind: "no-official-sdk-rest-adapter";
        checkedAt: "2026-06-25";
        operations: readonly [{
           alias: "ticket.create";
           target: "providerClient.createServiceRequest";
         }, {
           alias: "ticket.read";
           target: "providerClient.getServiceRequest";
         }, {
           alias: "ticket.update";
           target: "providerClient.updateServiceRequest";
         }, {
           alias: "ticket.search";
           target: "providerClient.searchServiceRequests";
         }, {
           alias: "oracle-service.serviceRequestMessage.create";
           target: "providerClient.createServiceRequestMessage";
        }];
        sourceKind: "provider-rest-adapter";
        sourceVersion: "11.13.18.05";
     };
     sdkDecision: {
        acceptedRuntimeProviderSdk: null;
        checkedAt: "2026-06-25";
        checkedSources: readonly ["Oracle Fusion Service serviceRequests REST API documentation", "Oracle B2C Service incidents REST API documentation", "npm registry package metadata and search results"];
        providerRestAdapterException: true;
        rejectedLibraries: readonly [{
           packageName: "oci-fusionapps";
           reason: "Oracle-maintained OCI SDK package for Fusion Apps Service administration, not a typed Oracle Fusion Service serviceRequests or B2C Service incident data client.";
           result: "not-used-as-runtime-ticketing-sdk";
           source: "npm";
           version: "2.135.1";
         }, {
           packageName: "oci-sdk";
           reason: "Oracle-maintained OCI SDK aggregate, but it does not expose the Oracle Fusion Service serviceRequests or Oracle B2C Service incident ticketing runtime surface used by this package.";
           result: "not-used-as-runtime-ticketing-sdk";
           source: "npm";
           version: "2.135.1";
         }, {
           packageName: "osvc_node";
           reason: "Unofficial Oracle Service Cloud REST wrapper last published years ago, not a maintained Oracle runtime SDK suitable for Cognidesk provider-client ownership.";
           result: "rejected-unofficial-stale-wrapper";
           source: "npm";
           version: "1.0.0";
        }];
        result: "provider-rest-adapter-exception";
        viableMaintainedRuntimeProviderSdk: false;
     };
  };
  name: "Oracle Service";
  operations: readonly [{
     alias: "ticket.create";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "oracleServiceRequest";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.read";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "oracleServiceRequest";
     requiresCredential: true;
   }, {
     alias: "ticket.update";
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "oracleServiceRequest";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.search";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "oracleServiceRequest";
     requiresCredential: true;
   }, {
     alias: "oracle-service.serviceRequestMessage.create";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     providerObject: "oracleServiceRequestMessage";
     requiresCredential: true;
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-ticketing-oracle-service";
  privacyNotes: readonly ["Oracle service requests can contain customer identity, problem descriptions, service profile data, queue and assignee details, and internal resolution notes.", "Oracle credentials stay server-side and are represented in Studio only as credential readiness and scope status."];
  provider: "oracle-service";
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
| `directions` | ( \| `"bidirectional"` \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"`)[] |
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates Oracle Fusion Service serviceRequests records from SDK-user-selected support workflows."`; `exposesSensitiveData`: `true`; `label`: `"Create Oracle service requests"`; `providerObjects`: readonly \[\{ `kind`: `"oracleServiceRequest"`; `label`: `"Oracle Service Request"`; `schemaName`: `"serviceRequests"`; \}, \{ `kind`: `"oracleServiceRequestMessage"`; `label`: `"Oracle Service Request Message"`; `schemaName`: `"serviceRequests.child.messages"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Oracle Fusion Service service request records by SrNumber."`; `exposesSensitiveData`: `true`; `label`: `"Read Oracle service requests"`; `providerObjects`: readonly \[\{ `kind`: `"oracleServiceRequest"`; `label`: `"Oracle Service Request"`; `schemaName`: `"serviceRequests"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates Oracle Fusion Service service request status, queue, assignee, resolution, or custom fields."`; `exposesSensitiveData`: `true`; `label`: `"Update Oracle service requests"`; `providerObjects`: readonly \[\{ `kind`: `"oracleServiceRequest"`; `label`: `"Oracle Service Request"`; `schemaName`: `"serviceRequests"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Queries Oracle Fusion Service service requests with SDK-user-supplied q, finder, fields, and paging controls."`; `exposesSensitiveData`: `true`; `label`: `"Search Oracle service requests"`; `providerObjects`: readonly \[\{ `kind`: `"oracleServiceRequest"`; `label`: `"Oracle Service Request"`; `schemaName`: `"serviceRequests"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"handoff"`; `changesWorkflow`: `true`; `description`: `"Provides Oracle service request operations for SDK-user-configured human handoff workflows."`; `exposesSensitiveData`: `true`; `label`: `"Attach handoff to Oracle Service"`; `providerObjects`: readonly \[\{ `kind`: `"oracleServiceRequest"`; `label`: `"Oracle Service Request"`; `schemaName`: `"serviceRequests"`; \}, \{ `kind`: `"oracleServiceRequestMessage"`; `label`: `"Oracle Service Request Message"`; `schemaName`: `"serviceRequests.child.messages"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Oracle Fusion Service serviceRequests overview"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/api-internal-service-requests.html"`; \}, \{ `label`: `"Oracle Fusion Service create service request"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-post.html"`; \}, \{ `label`: `"Oracle Fusion Service get all service requests"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-get.html"`; \}, \{ `label`: `"Oracle Fusion Service get service request"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-get.html"`; \}, \{ `label`: `"Oracle Fusion Service update service request"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-patch.html"`; \}, \{ `label`: `"Oracle Fusion Service create service request message"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-child-messages-post.html"`; \}\]; `notes`: readonly \[`"Coverage is typed for Oracle Fusion Service serviceRequests create, read by SrNumber, patch, collection search, child message creation, and readiness checks used by Cognidesk support workflows."`, `"Runtime provider operations use the built-in Oracle Fusion Service REST adapter when baseUrl/instanceUrl plus access credentials are provided; a host-injected OracleServiceTicketingProviderClient remains available as an override."`, `"This is not full Oracle Fusion Service API coverage; service request child resources such as activities, attachments, contacts, message attachment/channel-communication lifecycle, milestones, resources, smart actions, tags, LOV/metadata behavior, workflow rules, queues, privileges, and broader Fusion CX APIs remain outside this adapter."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Oracle Fusion Service serviceRequests overview"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/api-internal-service-requests.html"`; \}, \{ `label`: `"Oracle Fusion Service create service request"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-post.html"`; \}, \{ `label`: `"Oracle Fusion Service get all service requests"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-get.html"`; \}, \{ `label`: `"Oracle Fusion Service get service request"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-get.html"`; \}, \{ `label`: `"Oracle Fusion Service update service request"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-patch.html"`; \}, \{ `label`: `"Oracle Fusion Service create service request message"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-child-messages-post.html"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is typed for Oracle Fusion Service serviceRequests create, read by SrNumber, patch, collection search, child message creation, and readiness checks used by Cognidesk support workflows."`, `"Runtime provider operations use the built-in Oracle Fusion Service REST adapter when baseUrl/instanceUrl plus access credentials are provided; a host-injected OracleServiceTicketingProviderClient remains available as an override."`, `"This is not full Oracle Fusion Service API coverage; service request child resources such as activities, attachments, contacts, message attachment/channel-communication lifecycle, milestones, resources, smart actions, tags, LOV/metadata behavior, workflow rules, queues, privileges, and broader Fusion CX APIs remain outside this adapter."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Optional SDK-user-owned provider client implementing OracleServiceTicketingProviderClient. When omitted, the package uses its built-in Oracle Fusion Service REST adapter."`; `id`: `"oracle-service-provider-client"`; `label`: `"Optional host-provided Oracle Service provider client"`; `metadata`: \{ `defaultClientPolicy`: `"built-in-provider-rest-adapter"`; `importPolicy`: `"optional-host-override"`; `interface`: `"OracleServiceTicketingProviderClient"`; \}; `required`: `false`; \}, \{ `description`: `"The Oracle Fusion Service base URL, for example https://example.fa.oraclecloud.com, used by the built-in REST adapter or supplied by a host provider client override."`; `id`: `"oracle-service-instance"`; `label`: `"Oracle Fusion Service instance URL"`; `metadata`: \{ `requiredWhen`: `"built-in-provider-rest-adapter"`; \}; `required`: `false`; \}, \{ `description`: `"Server-side Oracle Fusion Service access for serviceRequests and child messages, supplied as accessToken, basic auth, auth headers, or encapsulated in a host provider client."`; `id`: `"oracle-service-api-access"`; `label`: `"Oracle Fusion Service API access"`; `metadata`: \{ `privilegeGuidance`: `"These strings are Cognidesk capability labels, not official Oracle OAuth scope names. Oracle access depends on Fusion Service roles and privileges for service request read/create/update/search and message creation."`; `requiredWhen`: `"built-in-provider-rest-adapter"`; `scopeKind`: `"internal-capability-labels"`; \}; `required`: `false`; `scopes`: readonly \[`"serviceRequests:read"`, `"serviceRequests:write"`\]; \}\] |
| `directions` | readonly \[`"bidirectional"`\] |
| `id` | `"ticketing.oracle-service"` |
| `limitations` | readonly \[`"Oracle Service categories, required fields, queues, assignment rules, milestones, extensions, and privileges are owned by the SDK user's Fusion Service environment."`, `"SDK users own handoff timing, field mapping, customer identity matching, visibility, consent, notification policy, retry/rate-limit behavior, and retention before calling Oracle APIs."`, `"The built-in adapter covers selected serviceRequests REST operations only; hosts can still inject an approved Oracle Service provider client for custom authentication, retries, or API-version policy."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `activitiesContactsMilestones`: `"provider-supported-not-typed"`; `attachments`: `"provider-supported-not-typed"`; `queuesSmartActionsWorkflowRules`: `"not-covered"`; `readinessSearch`: `"typed-search"`; `serviceRequestMessages`: `"typed-create"`; `serviceRequests`: `"typed-create-read-update-search"`; \}; `checkedProviderApiCoverage`: \{ `checkedFamilyCount`: `5`; `coverageArtifact`: `"docs/provider-coverage/oracle-service-checked-service-requests-2026-06-18.inventory.json"`; `gapFamilyCount`: `2`; `implementedFamilyCount`: `3`; `implementedOperationCount`: `5`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \}; `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `apiVersion`: `"11.13.18.05"`; `defaultClient`: `"built-in-oracle-fusion-service-rest-adapter"`; `providerClientOverride`: `true`; `strategy`: `"provider-rest-adapter"`; \}; `implementationStrategy`: \{ `checkedAt`: `"2026-06-25"`; `exception`: `"provider-rest-adapter"`; `reason`: `"No suitable maintained npm runtime SDK was verified for Oracle Fusion Service serviceRequests or Oracle Service Cloud/B2C Service incidents; Oracle documents these ticketing surfaces as REST APIs, while the official OCI TypeScript/JavaScript SDK manages OCI resources including Fusion Apps as a Service rather than service request records."`; `rejectedLibraries`: readonly \[\{ `packageName`: `"oci-fusionapps"`; `reason`: `"Oracle-maintained OCI SDK package for Fusion Apps Service administration, not a typed Oracle Fusion Service serviceRequests or B2C Service incident data client."`; `result`: `"not-used-as-runtime-ticketing-sdk"`; `source`: `"npm"`; `version`: `"2.135.1"`; \}, \{ `packageName`: `"oci-sdk"`; `reason`: `"Oracle-maintained OCI SDK aggregate, but it does not expose the Oracle Fusion Service serviceRequests or Oracle B2C Service incident ticketing runtime surface used by this package."`; `result`: `"not-used-as-runtime-ticketing-sdk"`; `source`: `"npm"`; `version`: `"2.135.1"`; \}, \{ `packageName`: `"osvc_node"`; `reason`: `"Unofficial Oracle Service Cloud REST wrapper last published years ago, not a maintained Oracle runtime SDK suitable for Cognidesk provider-client ownership."`; `result`: `"rejected-unofficial-stale-wrapper"`; `source`: `"npm"`; `version`: `"1.0.0"`; \}\]; `result`: `"no-suitable-maintained-runtime-provider-sdk"`; `strategy`: `"no-official-sdk-rest-adapter"`; \}; `providerClient`: \{ `defaultClientPolicy`: `"built-in-provider-rest-adapter"`; `importPolicy`: `"optional-host-override"`; `interface`: `"OracleServiceTicketingProviderClient"`; `operationTargets`: readonly \[\{ `alias`: `"ticket.create"`; `target`: `"providerClient.createServiceRequest"`; \}, \{ `alias`: `"ticket.read"`; `target`: `"providerClient.getServiceRequest"`; \}, \{ `alias`: `"ticket.update"`; `target`: `"providerClient.updateServiceRequest"`; \}, \{ `alias`: `"ticket.search"`; `target`: `"providerClient.searchServiceRequests"`; \}, \{ `alias`: `"oracle-service.serviceRequestMessage.create"`; `target`: `"providerClient.createServiceRequestMessage"`; \}\]; `package`: `"optional-host-provided"`; \}; `providerRestAdapterOperationSlice`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `checkedAt`: `"2026-06-25"`; `operations`: readonly \[\{ `alias`: `"ticket.create"`; `target`: `"providerClient.createServiceRequest"`; \}, \{ `alias`: `"ticket.read"`; `target`: `"providerClient.getServiceRequest"`; \}, \{ `alias`: `"ticket.update"`; `target`: `"providerClient.updateServiceRequest"`; \}, \{ `alias`: `"ticket.search"`; `target`: `"providerClient.searchServiceRequests"`; \}, \{ `alias`: `"oracle-service.serviceRequestMessage.create"`; `target`: `"providerClient.createServiceRequestMessage"`; \}\]; `sourceKind`: `"provider-rest-adapter"`; `sourceVersion`: `"11.13.18.05"`; \}; `sdkDecision`: \{ `acceptedRuntimeProviderSdk`: `null`; `checkedAt`: `"2026-06-25"`; `checkedSources`: readonly \[`"Oracle Fusion Service serviceRequests REST API documentation"`, `"Oracle B2C Service incidents REST API documentation"`, `"npm registry package metadata and search results"`\]; `providerRestAdapterException`: `true`; `rejectedLibraries`: readonly \[\{ `packageName`: `"oci-fusionapps"`; `reason`: `"Oracle-maintained OCI SDK package for Fusion Apps Service administration, not a typed Oracle Fusion Service serviceRequests or B2C Service incident data client."`; `result`: `"not-used-as-runtime-ticketing-sdk"`; `source`: `"npm"`; `version`: `"2.135.1"`; \}, \{ `packageName`: `"oci-sdk"`; `reason`: `"Oracle-maintained OCI SDK aggregate, but it does not expose the Oracle Fusion Service serviceRequests or Oracle B2C Service incident ticketing runtime surface used by this package."`; `result`: `"not-used-as-runtime-ticketing-sdk"`; `source`: `"npm"`; `version`: `"2.135.1"`; \}, \{ `packageName`: `"osvc_node"`; `reason`: `"Unofficial Oracle Service Cloud REST wrapper last published years ago, not a maintained Oracle runtime SDK suitable for Cognidesk provider-client ownership."`; `result`: `"rejected-unofficial-stale-wrapper"`; `source`: `"npm"`; `version`: `"1.0.0"`; \}\]; `result`: `"provider-rest-adapter-exception"`; `viableMaintainedRuntimeProviderSdk`: `false`; \}; \} |
| `metadata.channelCoverage` | \{ `activitiesContactsMilestones`: `"provider-supported-not-typed"`; `attachments`: `"provider-supported-not-typed"`; `queuesSmartActionsWorkflowRules`: `"not-covered"`; `readinessSearch`: `"typed-search"`; `serviceRequestMessages`: `"typed-create"`; `serviceRequests`: `"typed-create-read-update-search"`; \} |
| `metadata.channelCoverage.activitiesContactsMilestones` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.attachments` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.queuesSmartActionsWorkflowRules` | `"not-covered"` |
| `metadata.channelCoverage.readinessSearch` | `"typed-search"` |
| `metadata.channelCoverage.serviceRequestMessages` | `"typed-create"` |
| `metadata.channelCoverage.serviceRequests` | `"typed-create-read-update-search"` |
| `metadata.checkedProviderApiCoverage` | \{ `checkedFamilyCount`: `5`; `coverageArtifact`: `"docs/provider-coverage/oracle-service-checked-service-requests-2026-06-18.inventory.json"`; `gapFamilyCount`: `2`; `implementedFamilyCount`: `3`; `implementedOperationCount`: `5`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \} |
| `metadata.checkedProviderApiCoverage.checkedFamilyCount` | `5` |
| `metadata.checkedProviderApiCoverage.coverageArtifact` | `"docs/provider-coverage/oracle-service-checked-service-requests-2026-06-18.inventory.json"` |
| `metadata.checkedProviderApiCoverage.gapFamilyCount` | `2` |
| `metadata.checkedProviderApiCoverage.implementedFamilyCount` | `3` |
| `metadata.checkedProviderApiCoverage.implementedOperationCount` | `5` |
| `metadata.checkedProviderApiCoverage.sourceKind` | `"checked-endpoint-family-inventory"` |
| `metadata.checkedProviderApiCoverage.verifiedAt` | `"2026-06-18"` |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `apiVersion`: `"11.13.18.05"`; `defaultClient`: `"built-in-oracle-fusion-service-rest-adapter"`; `providerClientOverride`: `true`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.apiVersion` | `"11.13.18.05"` |
| `metadata.implementation.defaultClient` | `"built-in-oracle-fusion-service-rest-adapter"` |
| `metadata.implementation.providerClientOverride` | `true` |
| `metadata.implementation.strategy` | `"provider-rest-adapter"` |
| `metadata.implementationStrategy` | \{ `checkedAt`: `"2026-06-25"`; `exception`: `"provider-rest-adapter"`; `reason`: `"No suitable maintained npm runtime SDK was verified for Oracle Fusion Service serviceRequests or Oracle Service Cloud/B2C Service incidents; Oracle documents these ticketing surfaces as REST APIs, while the official OCI TypeScript/JavaScript SDK manages OCI resources including Fusion Apps as a Service rather than service request records."`; `rejectedLibraries`: readonly \[\{ `packageName`: `"oci-fusionapps"`; `reason`: `"Oracle-maintained OCI SDK package for Fusion Apps Service administration, not a typed Oracle Fusion Service serviceRequests or B2C Service incident data client."`; `result`: `"not-used-as-runtime-ticketing-sdk"`; `source`: `"npm"`; `version`: `"2.135.1"`; \}, \{ `packageName`: `"oci-sdk"`; `reason`: `"Oracle-maintained OCI SDK aggregate, but it does not expose the Oracle Fusion Service serviceRequests or Oracle B2C Service incident ticketing runtime surface used by this package."`; `result`: `"not-used-as-runtime-ticketing-sdk"`; `source`: `"npm"`; `version`: `"2.135.1"`; \}, \{ `packageName`: `"osvc_node"`; `reason`: `"Unofficial Oracle Service Cloud REST wrapper last published years ago, not a maintained Oracle runtime SDK suitable for Cognidesk provider-client ownership."`; `result`: `"rejected-unofficial-stale-wrapper"`; `source`: `"npm"`; `version`: `"1.0.0"`; \}\]; `result`: `"no-suitable-maintained-runtime-provider-sdk"`; `strategy`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.implementationStrategy.checkedAt` | `"2026-06-25"` |
| `metadata.implementationStrategy.exception` | `"provider-rest-adapter"` |
| `metadata.implementationStrategy.reason` | `"No suitable maintained npm runtime SDK was verified for Oracle Fusion Service serviceRequests or Oracle Service Cloud/B2C Service incidents; Oracle documents these ticketing surfaces as REST APIs, while the official OCI TypeScript/JavaScript SDK manages OCI resources including Fusion Apps as a Service rather than service request records."` |
| `metadata.implementationStrategy.rejectedLibraries` | readonly \[\{ `packageName`: `"oci-fusionapps"`; `reason`: `"Oracle-maintained OCI SDK package for Fusion Apps Service administration, not a typed Oracle Fusion Service serviceRequests or B2C Service incident data client."`; `result`: `"not-used-as-runtime-ticketing-sdk"`; `source`: `"npm"`; `version`: `"2.135.1"`; \}, \{ `packageName`: `"oci-sdk"`; `reason`: `"Oracle-maintained OCI SDK aggregate, but it does not expose the Oracle Fusion Service serviceRequests or Oracle B2C Service incident ticketing runtime surface used by this package."`; `result`: `"not-used-as-runtime-ticketing-sdk"`; `source`: `"npm"`; `version`: `"2.135.1"`; \}, \{ `packageName`: `"osvc_node"`; `reason`: `"Unofficial Oracle Service Cloud REST wrapper last published years ago, not a maintained Oracle runtime SDK suitable for Cognidesk provider-client ownership."`; `result`: `"rejected-unofficial-stale-wrapper"`; `source`: `"npm"`; `version`: `"1.0.0"`; \}\] |
| `metadata.implementationStrategy.result` | `"no-suitable-maintained-runtime-provider-sdk"` |
| `metadata.implementationStrategy.strategy` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerClient` | \{ `defaultClientPolicy`: `"built-in-provider-rest-adapter"`; `importPolicy`: `"optional-host-override"`; `interface`: `"OracleServiceTicketingProviderClient"`; `operationTargets`: readonly \[\{ `alias`: `"ticket.create"`; `target`: `"providerClient.createServiceRequest"`; \}, \{ `alias`: `"ticket.read"`; `target`: `"providerClient.getServiceRequest"`; \}, \{ `alias`: `"ticket.update"`; `target`: `"providerClient.updateServiceRequest"`; \}, \{ `alias`: `"ticket.search"`; `target`: `"providerClient.searchServiceRequests"`; \}, \{ `alias`: `"oracle-service.serviceRequestMessage.create"`; `target`: `"providerClient.createServiceRequestMessage"`; \}\]; `package`: `"optional-host-provided"`; \} |
| `metadata.providerClient.defaultClientPolicy` | `"built-in-provider-rest-adapter"` |
| `metadata.providerClient.importPolicy` | `"optional-host-override"` |
| `metadata.providerClient.interface` | `"OracleServiceTicketingProviderClient"` |
| `metadata.providerClient.operationTargets` | readonly \[\{ `alias`: `"ticket.create"`; `target`: `"providerClient.createServiceRequest"`; \}, \{ `alias`: `"ticket.read"`; `target`: `"providerClient.getServiceRequest"`; \}, \{ `alias`: `"ticket.update"`; `target`: `"providerClient.updateServiceRequest"`; \}, \{ `alias`: `"ticket.search"`; `target`: `"providerClient.searchServiceRequests"`; \}, \{ `alias`: `"oracle-service.serviceRequestMessage.create"`; `target`: `"providerClient.createServiceRequestMessage"`; \}\] |
| `metadata.providerClient.package` | `"optional-host-provided"` |
| `metadata.providerRestAdapterOperationSlice` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `checkedAt`: `"2026-06-25"`; `operations`: readonly \[\{ `alias`: `"ticket.create"`; `target`: `"providerClient.createServiceRequest"`; \}, \{ `alias`: `"ticket.read"`; `target`: `"providerClient.getServiceRequest"`; \}, \{ `alias`: `"ticket.update"`; `target`: `"providerClient.updateServiceRequest"`; \}, \{ `alias`: `"ticket.search"`; `target`: `"providerClient.searchServiceRequests"`; \}, \{ `alias`: `"oracle-service.serviceRequestMessage.create"`; `target`: `"providerClient.createServiceRequestMessage"`; \}\]; `sourceKind`: `"provider-rest-adapter"`; `sourceVersion`: `"11.13.18.05"`; \} |
| `metadata.providerRestAdapterOperationSlice.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapterOperationSlice.checkedAt` | `"2026-06-25"` |
| `metadata.providerRestAdapterOperationSlice.operations` | readonly \[\{ `alias`: `"ticket.create"`; `target`: `"providerClient.createServiceRequest"`; \}, \{ `alias`: `"ticket.read"`; `target`: `"providerClient.getServiceRequest"`; \}, \{ `alias`: `"ticket.update"`; `target`: `"providerClient.updateServiceRequest"`; \}, \{ `alias`: `"ticket.search"`; `target`: `"providerClient.searchServiceRequests"`; \}, \{ `alias`: `"oracle-service.serviceRequestMessage.create"`; `target`: `"providerClient.createServiceRequestMessage"`; \}\] |
| `metadata.providerRestAdapterOperationSlice.sourceKind` | `"provider-rest-adapter"` |
| `metadata.providerRestAdapterOperationSlice.sourceVersion` | `"11.13.18.05"` |
| `metadata.sdkDecision` | \{ `acceptedRuntimeProviderSdk`: `null`; `checkedAt`: `"2026-06-25"`; `checkedSources`: readonly \[`"Oracle Fusion Service serviceRequests REST API documentation"`, `"Oracle B2C Service incidents REST API documentation"`, `"npm registry package metadata and search results"`\]; `providerRestAdapterException`: `true`; `rejectedLibraries`: readonly \[\{ `packageName`: `"oci-fusionapps"`; `reason`: `"Oracle-maintained OCI SDK package for Fusion Apps Service administration, not a typed Oracle Fusion Service serviceRequests or B2C Service incident data client."`; `result`: `"not-used-as-runtime-ticketing-sdk"`; `source`: `"npm"`; `version`: `"2.135.1"`; \}, \{ `packageName`: `"oci-sdk"`; `reason`: `"Oracle-maintained OCI SDK aggregate, but it does not expose the Oracle Fusion Service serviceRequests or Oracle B2C Service incident ticketing runtime surface used by this package."`; `result`: `"not-used-as-runtime-ticketing-sdk"`; `source`: `"npm"`; `version`: `"2.135.1"`; \}, \{ `packageName`: `"osvc_node"`; `reason`: `"Unofficial Oracle Service Cloud REST wrapper last published years ago, not a maintained Oracle runtime SDK suitable for Cognidesk provider-client ownership."`; `result`: `"rejected-unofficial-stale-wrapper"`; `source`: `"npm"`; `version`: `"1.0.0"`; \}\]; `result`: `"provider-rest-adapter-exception"`; `viableMaintainedRuntimeProviderSdk`: `false`; \} |
| `metadata.sdkDecision.acceptedRuntimeProviderSdk` | `null` |
| `metadata.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.sdkDecision.checkedSources` | readonly \[`"Oracle Fusion Service serviceRequests REST API documentation"`, `"Oracle B2C Service incidents REST API documentation"`, `"npm registry package metadata and search results"`\] |
| `metadata.sdkDecision.providerRestAdapterException` | `true` |
| `metadata.sdkDecision.rejectedLibraries` | readonly \[\{ `packageName`: `"oci-fusionapps"`; `reason`: `"Oracle-maintained OCI SDK package for Fusion Apps Service administration, not a typed Oracle Fusion Service serviceRequests or B2C Service incident data client."`; `result`: `"not-used-as-runtime-ticketing-sdk"`; `source`: `"npm"`; `version`: `"2.135.1"`; \}, \{ `packageName`: `"oci-sdk"`; `reason`: `"Oracle-maintained OCI SDK aggregate, but it does not expose the Oracle Fusion Service serviceRequests or Oracle B2C Service incident ticketing runtime surface used by this package."`; `result`: `"not-used-as-runtime-ticketing-sdk"`; `source`: `"npm"`; `version`: `"2.135.1"`; \}, \{ `packageName`: `"osvc_node"`; `reason`: `"Unofficial Oracle Service Cloud REST wrapper last published years ago, not a maintained Oracle runtime SDK suitable for Cognidesk provider-client ownership."`; `result`: `"rejected-unofficial-stale-wrapper"`; `source`: `"npm"`; `version`: `"1.0.0"`; \}\] |
| `metadata.sdkDecision.result` | `"provider-rest-adapter-exception"` |
| `metadata.sdkDecision.viableMaintainedRuntimeProviderSdk` | `false` |
| `name` | `"Oracle Service"` |
| `operations` | readonly \[\{ `alias`: `"ticket.create"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"oracleServiceRequest"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"oracleServiceRequest"`; `requiresCredential`: `true`; \}, \{ `alias`: `"ticket.update"`; `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"oracleServiceRequest"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"oracleServiceRequest"`; `requiresCredential`: `true`; \}, \{ `alias`: `"oracle-service.serviceRequestMessage.create"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"oracleServiceRequestMessage"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-ticketing-oracle-service"` |
| `privacyNotes` | readonly \[`"Oracle service requests can contain customer identity, problem descriptions, service profile data, queue and assignee details, and internal resolution notes."`, `"Oracle credentials stay server-side and are represented in Studio only as credential readiness and scope status."`\] |
| `provider` | `"oracle-service"` |
| `trustLevel` | `"official"` |
