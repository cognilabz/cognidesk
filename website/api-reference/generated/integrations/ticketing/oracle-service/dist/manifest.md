# integrations/ticketing/oracle-service/dist/manifest

## Variables

### ORACLE\_SERVICE\_DEFAULT\_API\_VERSION

```ts
const ORACLE_SERVICE_DEFAULT_API_VERSION: "11.13.18.05" = "11.13.18.05";
```

***

### oracleServiceSupportOperationAllowlist

```ts
const oracleServiceSupportOperationAllowlist: readonly [{
  alias: "ticket.create";
  method: "POST";
  path: "/crmRestApi/resources/{apiVersion}/serviceRequests";
}, {
  alias: "ticket.read";
  method: "GET";
  path: "/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}";
}, {
  alias: "ticket.update";
  method: "PATCH";
  path: "/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}";
}, {
  alias: "ticket.search";
  method: "GET";
  path: "/crmRestApi/resources/{apiVersion}/serviceRequests";
}, {
  alias: "oracle-service.serviceRequestMessage.create";
  method: "POST";
  path: "/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}/child/messages";
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
     notes: readonly ["Coverage is typed for Oracle Fusion Service serviceRequests create, read by SrNumber, patch, collection search, child message creation, and readiness checks used by Cognidesk support workflows.", "This is not full Oracle Fusion Service API coverage; service request child resources such as activities, attachments, contacts, message attachment/channel-communication lifecycle, milestones, resources, smart actions, tags, LOV/metadata behavior, workflow rules, queues, privileges, and broader Fusion CX APIs remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "The SDK user's Oracle Fusion Service host, for example https://example.fa.oraclecloud.com.";
     id: "oracle-service-instance";
     label: "Oracle Fusion Service instance URL";
     required: true;
   }, {
     description: "Server-side OAuth bearer access or Basic Auth credentials for Oracle Fusion Service REST APIs with service roles and privileges for serviceRequests and child messages.";
     id: "oracle-service-api-access";
     label: "Oracle Fusion Service REST API access";
     metadata: {
        privilegeGuidance: "These strings are Cognidesk capability labels, not official Oracle OAuth scope names. Oracle access depends on Fusion Service roles and privileges for service request read/create/update/search and message creation.";
        scopeKind: "internal-capability-labels";
     };
     required: true;
     scopes: readonly ["serviceRequests:read", "serviceRequests:write"];
  }];
  directions: readonly ["bidirectional"];
  id: "ticketing.oracle-service";
  limitations: readonly ["Oracle Service categories, required fields, queues, assignment rules, milestones, extensions, and privileges are owned by the SDK user's Fusion Service environment.", "SDK users own handoff timing, field mapping, customer identity matching, visibility, consent, notification policy, and retention before calling Oracle APIs."];
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
        strategy: "direct-http-support-slice";
     };
     implementationStrategy: {
        checkedAt: "2026-06-21";
        reason: "No suitable official JavaScript SDK was found for Oracle Fusion Service serviceRequests; oci-fusionapps targets OCI Fusion Apps Service resource management, not this REST surface.";
        rejectedLibraries: readonly [{
           integrity: "sha512-L0mF2w4tYeVBM1DXEDVuufuKysTQqhvS65GCN7meubjWzxUNMRDO9P/EM1ouSguyjJio7NeCr4hQWSP5AEe46Q==";
           packageName: "oci-fusionapps";
           reason: "Official Oracle-maintained OCI SDK package, but not a Fusion Service service request client.";
           version: "2.135.0";
        }];
        strategy: "direct-support-slice";
     };
     supportOperationSlice: {
        allowlistSha256: "5f3ff8ea4febec8a1f5e4c9d881124c9f215a7b97ebb3ae7a92d7e3f98b370f5";
        checkedAt: "2026-06-21";
        operations: readonly [{
           alias: "ticket.create";
           method: "POST";
           path: "/crmRestApi/resources/{apiVersion}/serviceRequests";
         }, {
           alias: "ticket.read";
           method: "GET";
           path: "/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}";
         }, {
           alias: "ticket.update";
           method: "PATCH";
           path: "/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}";
         }, {
           alias: "ticket.search";
           method: "GET";
           path: "/crmRestApi/resources/{apiVersion}/serviceRequests";
         }, {
           alias: "oracle-service.serviceRequestMessage.create";
           method: "POST";
           path: "/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}/child/messages";
        }];
        sourceKind: "official-docs-reviewed-slice";
        sourceVersion: "11.13.18.05";
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
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Oracle Fusion Service serviceRequests overview"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/api-internal-service-requests.html"`; \}, \{ `label`: `"Oracle Fusion Service create service request"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-post.html"`; \}, \{ `label`: `"Oracle Fusion Service get all service requests"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-get.html"`; \}, \{ `label`: `"Oracle Fusion Service get service request"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-get.html"`; \}, \{ `label`: `"Oracle Fusion Service update service request"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-patch.html"`; \}, \{ `label`: `"Oracle Fusion Service create service request message"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-child-messages-post.html"`; \}\]; `notes`: readonly \[`"Coverage is typed for Oracle Fusion Service serviceRequests create, read by SrNumber, patch, collection search, child message creation, and readiness checks used by Cognidesk support workflows."`, `"This is not full Oracle Fusion Service API coverage; service request child resources such as activities, attachments, contacts, message attachment/channel-communication lifecycle, milestones, resources, smart actions, tags, LOV/metadata behavior, workflow rules, queues, privileges, and broader Fusion CX APIs remain outside this adapter."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Oracle Fusion Service serviceRequests overview"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/api-internal-service-requests.html"`; \}, \{ `label`: `"Oracle Fusion Service create service request"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-post.html"`; \}, \{ `label`: `"Oracle Fusion Service get all service requests"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-get.html"`; \}, \{ `label`: `"Oracle Fusion Service get service request"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-get.html"`; \}, \{ `label`: `"Oracle Fusion Service update service request"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-patch.html"`; \}, \{ `label`: `"Oracle Fusion Service create service request message"`; `url`: `"https://docs.oracle.com/en/cloud/saas/sales/faaps/op-servicerequests-srnumber-child-messages-post.html"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is typed for Oracle Fusion Service serviceRequests create, read by SrNumber, patch, collection search, child message creation, and readiness checks used by Cognidesk support workflows."`, `"This is not full Oracle Fusion Service API coverage; service request child resources such as activities, attachments, contacts, message attachment/channel-communication lifecycle, milestones, resources, smart actions, tags, LOV/metadata behavior, workflow rules, queues, privileges, and broader Fusion CX APIs remain outside this adapter."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"The SDK user's Oracle Fusion Service host, for example https://example.fa.oraclecloud.com."`; `id`: `"oracle-service-instance"`; `label`: `"Oracle Fusion Service instance URL"`; `required`: `true`; \}, \{ `description`: `"Server-side OAuth bearer access or Basic Auth credentials for Oracle Fusion Service REST APIs with service roles and privileges for serviceRequests and child messages."`; `id`: `"oracle-service-api-access"`; `label`: `"Oracle Fusion Service REST API access"`; `metadata`: \{ `privilegeGuidance`: `"These strings are Cognidesk capability labels, not official Oracle OAuth scope names. Oracle access depends on Fusion Service roles and privileges for service request read/create/update/search and message creation."`; `scopeKind`: `"internal-capability-labels"`; \}; `required`: `true`; `scopes`: readonly \[`"serviceRequests:read"`, `"serviceRequests:write"`\]; \}\] |
| `directions` | readonly \[`"bidirectional"`\] |
| `id` | `"ticketing.oracle-service"` |
| `limitations` | readonly \[`"Oracle Service categories, required fields, queues, assignment rules, milestones, extensions, and privileges are owned by the SDK user's Fusion Service environment."`, `"SDK users own handoff timing, field mapping, customer identity matching, visibility, consent, notification policy, and retention before calling Oracle APIs."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `activitiesContactsMilestones`: `"provider-supported-not-typed"`; `attachments`: `"provider-supported-not-typed"`; `queuesSmartActionsWorkflowRules`: `"not-covered"`; `readinessSearch`: `"typed-search"`; `serviceRequestMessages`: `"typed-create"`; `serviceRequests`: `"typed-create-read-update-search"`; \}; `checkedProviderApiCoverage`: \{ `checkedFamilyCount`: `5`; `coverageArtifact`: `"docs/provider-coverage/oracle-service-checked-service-requests-2026-06-18.inventory.json"`; `gapFamilyCount`: `2`; `implementedFamilyCount`: `3`; `implementedOperationCount`: `5`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \}; `implementation`: \{ `strategy`: `"direct-http-support-slice"`; \}; `implementationStrategy`: \{ `checkedAt`: `"2026-06-21"`; `reason`: `"No suitable official JavaScript SDK was found for Oracle Fusion Service serviceRequests; oci-fusionapps targets OCI Fusion Apps Service resource management, not this REST surface."`; `rejectedLibraries`: readonly \[\{ `integrity`: `"sha512-L0mF2w4tYeVBM1DXEDVuufuKysTQqhvS65GCN7meubjWzxUNMRDO9P/EM1ouSguyjJio7NeCr4hQWSP5AEe46Q=="`; `packageName`: `"oci-fusionapps"`; `reason`: `"Official Oracle-maintained OCI SDK package, but not a Fusion Service service request client."`; `version`: `"2.135.0"`; \}\]; `strategy`: `"direct-support-slice"`; \}; `supportOperationSlice`: \{ `allowlistSha256`: `"5f3ff8ea4febec8a1f5e4c9d881124c9f215a7b97ebb3ae7a92d7e3f98b370f5"`; `checkedAt`: `"2026-06-21"`; `operations`: readonly \[\{ `alias`: `"ticket.create"`; `method`: `"POST"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests"`; \}, \{ `alias`: `"ticket.read"`; `method`: `"GET"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}"`; \}, \{ `alias`: `"ticket.update"`; `method`: `"PATCH"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}"`; \}, \{ `alias`: `"ticket.search"`; `method`: `"GET"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests"`; \}, \{ `alias`: `"oracle-service.serviceRequestMessage.create"`; `method`: `"POST"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}/child/messages"`; \}\]; `sourceKind`: `"official-docs-reviewed-slice"`; `sourceVersion`: `"11.13.18.05"`; \}; \} |
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
| `metadata.implementation` | \{ `strategy`: `"direct-http-support-slice"`; \} |
| `metadata.implementation.strategy` | `"direct-http-support-slice"` |
| `metadata.implementationStrategy` | \{ `checkedAt`: `"2026-06-21"`; `reason`: `"No suitable official JavaScript SDK was found for Oracle Fusion Service serviceRequests; oci-fusionapps targets OCI Fusion Apps Service resource management, not this REST surface."`; `rejectedLibraries`: readonly \[\{ `integrity`: `"sha512-L0mF2w4tYeVBM1DXEDVuufuKysTQqhvS65GCN7meubjWzxUNMRDO9P/EM1ouSguyjJio7NeCr4hQWSP5AEe46Q=="`; `packageName`: `"oci-fusionapps"`; `reason`: `"Official Oracle-maintained OCI SDK package, but not a Fusion Service service request client."`; `version`: `"2.135.0"`; \}\]; `strategy`: `"direct-support-slice"`; \} |
| `metadata.implementationStrategy.checkedAt` | `"2026-06-21"` |
| `metadata.implementationStrategy.reason` | `"No suitable official JavaScript SDK was found for Oracle Fusion Service serviceRequests; oci-fusionapps targets OCI Fusion Apps Service resource management, not this REST surface."` |
| `metadata.implementationStrategy.rejectedLibraries` | readonly \[\{ `integrity`: `"sha512-L0mF2w4tYeVBM1DXEDVuufuKysTQqhvS65GCN7meubjWzxUNMRDO9P/EM1ouSguyjJio7NeCr4hQWSP5AEe46Q=="`; `packageName`: `"oci-fusionapps"`; `reason`: `"Official Oracle-maintained OCI SDK package, but not a Fusion Service service request client."`; `version`: `"2.135.0"`; \}\] |
| `metadata.implementationStrategy.strategy` | `"direct-support-slice"` |
| `metadata.supportOperationSlice` | \{ `allowlistSha256`: `"5f3ff8ea4febec8a1f5e4c9d881124c9f215a7b97ebb3ae7a92d7e3f98b370f5"`; `checkedAt`: `"2026-06-21"`; `operations`: readonly \[\{ `alias`: `"ticket.create"`; `method`: `"POST"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests"`; \}, \{ `alias`: `"ticket.read"`; `method`: `"GET"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}"`; \}, \{ `alias`: `"ticket.update"`; `method`: `"PATCH"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}"`; \}, \{ `alias`: `"ticket.search"`; `method`: `"GET"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests"`; \}, \{ `alias`: `"oracle-service.serviceRequestMessage.create"`; `method`: `"POST"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}/child/messages"`; \}\]; `sourceKind`: `"official-docs-reviewed-slice"`; `sourceVersion`: `"11.13.18.05"`; \} |
| `metadata.supportOperationSlice.allowlistSha256` | `"5f3ff8ea4febec8a1f5e4c9d881124c9f215a7b97ebb3ae7a92d7e3f98b370f5"` |
| `metadata.supportOperationSlice.checkedAt` | `"2026-06-21"` |
| `metadata.supportOperationSlice.operations` | readonly \[\{ `alias`: `"ticket.create"`; `method`: `"POST"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests"`; \}, \{ `alias`: `"ticket.read"`; `method`: `"GET"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}"`; \}, \{ `alias`: `"ticket.update"`; `method`: `"PATCH"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}"`; \}, \{ `alias`: `"ticket.search"`; `method`: `"GET"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests"`; \}, \{ `alias`: `"oracle-service.serviceRequestMessage.create"`; `method`: `"POST"`; `path`: `"/crmRestApi/resources/{apiVersion}/serviceRequests/{SrNumber}/child/messages"`; \}\] |
| `metadata.supportOperationSlice.sourceKind` | `"official-docs-reviewed-slice"` |
| `metadata.supportOperationSlice.sourceVersion` | `"11.13.18.05"` |
| `name` | `"Oracle Service"` |
| `operations` | readonly \[\{ `alias`: `"ticket.create"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"oracleServiceRequest"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"oracleServiceRequest"`; `requiresCredential`: `true`; \}, \{ `alias`: `"ticket.update"`; `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"oracleServiceRequest"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"oracleServiceRequest"`; `requiresCredential`: `true`; \}, \{ `alias`: `"oracle-service.serviceRequestMessage.create"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"oracleServiceRequestMessage"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-ticketing-oracle-service"` |
| `privacyNotes` | readonly \[`"Oracle service requests can contain customer identity, problem descriptions, service profile data, queue and assignee details, and internal resolution notes."`, `"Oracle credentials stay server-side and are represented in Studio only as credential readiness and scope status."`\] |
| `provider` | `"oracle-service"` |
| `trustLevel` | `"official"` |
