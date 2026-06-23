# integrations/ticketing/pega-customer-service/dist/manifest

## Variables

### PEGA\_CUSTOMER\_SERVICE\_DEFAULT\_API\_BASE\_PATH

```ts
const PEGA_CUSTOMER_SERVICE_DEFAULT_API_BASE_PATH: "/api/v1" = "/api/v1";
```

***

### pegaCustomerServiceSupportOperationAllowlist

```ts
const pegaCustomerServiceSupportOperationAllowlist: readonly [{
  alias: "ticket.create";
  method: "POST";
  path: "{apiBasePath}/cases";
}, {
  alias: "ticket.read";
  method: "GET";
  path: "{apiBasePath}/cases/{ID}";
}, {
  alias: "ticket.update";
  method: "PUT";
  path: "{apiBasePath}/cases/{ID}";
}, {
  alias: "ticket.search";
  method: "GET";
  path: "{apiBasePath}/cases";
}, {
  alias: "pega-customer-service.caseTypes.list";
  method: "GET";
  path: "{apiBasePath}/casetypes";
}, {
  alias: "pega-customer-service.assignmentAction.submit";
  method: "PATCH";
  path: "{apiBasePath}/assignments/{assignmentID}/actions/{actionID}";
}];
```

***

### pegaCustomerServiceTicketingProviderManifest

```ts
const pegaCustomerServiceTicketingProviderManifest: {
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
     description: "Creates Pega Customer Service cases with the Pega DX API from SDK-user-selected workflows.";
     exposesSensitiveData: true;
     label: "Create Pega cases";
     providerObjects: readonly [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Pega cases and case type metadata through the Pega DX API.";
     exposesSensitiveData: true;
     label: "Read Pega cases";
     providerObjects: readonly [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
      }, {
        kind: "pegaCaseType";
        label: "Pega Case Type";
        schemaName: "Pega-API-CaseManagement-CaseType";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Pega cases with SDK-user-supplied case data through the Pega DX API.";
     exposesSensitiveData: true;
     label: "Update Pega cases";
     providerObjects: readonly [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Queries Pega cases with SDK-user-supplied case type, status, assignment, and pagination controls.";
     exposesSensitiveData: true;
     label: "Search Pega cases";
     providerObjects: readonly [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     description: "Submits SDK-user-configured Pega DX assignment actions or case operations for human handoff workflows.";
     exposesSensitiveData: true;
     label: "Run Pega case handoff action";
     providerObjects: readonly [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
      }, {
        kind: "pegaAssignmentAction";
        label: "Pega Assignment Action";
        schemaName: "Pega-API-CaseManagement-AssignmentAction";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Pega DX API overview";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/dx-api-overview.html";
      }, {
        label: "Pega DX API cases endpoints";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/managing-cases-dx-api.html";
      }, {
        label: "Pega DX API POST /cases";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-post-cases.html";
      }, {
        label: "Pega DX API GET /cases";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases.html";
      }, {
        label: "Pega DX API GET /cases/{ID}";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases-id.html";
      }, {
        label: "Pega DX API PUT /cases/{ID}";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-put-cases-id.html";
      }, {
        label: "Pega DX API GET /casetypes";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-casetypes_0.html";
      }, {
        label: "Pega DX API PATCH /assignments/{assignmentID}/actions/{actionID}";
        url: "https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-patch-assignments-assignmentid-actions-actionid.html";
     }];
     notes: readonly ["Coverage is typed for Pega DX API case creation, case read/update, case search/listing, case-type listing, assignment action submission, and readiness checks used by Cognidesk support workflows.", "This is not full Pega Customer Service or Pega Platform API coverage; broader assignments/actions lifecycle, stages/process navigation, attachments, data views/pages, bulk actions, views, refresh/validation flows, security rules, and broader application administration remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "The SDK user's Pega Platform or Pega Customer Service application URL.";
     id: "pega-customer-service-instance";
     label: "Pega Customer Service instance URL";
     required: true;
   }, {
     description: "Server-side OAuth bearer access or Basic Auth credentials for Pega DX API endpoints with operator/client privileges for cases, case types, and assignment actions.";
     id: "pega-customer-service-api-access";
     label: "Pega DX API access";
     metadata: {
        privilegeGuidance: "These strings are Cognidesk capability labels, not proven official Pega OAuth scopes. Pega access depends on the operator/client access group and privileges for case list/read/create/update, case type read, and assignment action submission.";
        scopeKind: "internal-capability-labels";
     };
     required: true;
     scopes: readonly ["cases:read", "cases:write", "casetypes:read"];
  }];
  directions: readonly ["bidirectional"];
  id: "ticketing.pega-customer-service";
  limitations: readonly ["Case types, starting processes, field requirements, assignment routing, security rules, data pages, and stage transitions are owned by the SDK user's Pega application.", "SDK users own case-type selection, field mapping, handoff timing, customer identity matching, notification policy, and retention before calling Pega APIs."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        assignmentActions: "typed-submit";
        attachmentsDataPages: "provider-supported-not-typed";
        broaderCaseManagementAdmin: "not-covered";
        cases: "typed-create-read-update-search";
        caseTypes: "typed-list";
        readiness: "typed-list";
        stageLifecycleActions: "provider-supported-not-typed";
     };
     checkedProviderApiCoverage: {
        checkedFamilyCount: 4;
        coverageArtifact: "docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json";
        gapFamilyCount: 1;
        implementedFamilyCount: 3;
        implementedOperationCount: 6;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     implementation: {
        strategy: "direct-http-support-slice";
     };
     implementationStrategy: {
        checkedAt: "2026-06-21";
        reason: "No suitable maintained server-side JavaScript SDK was found for Pega Customer Service/DX API case operations; current Pega JavaScript packages are Constellation UI/client orchestration assets.";
        rejectedLibraries: readonly [{
           integrity: "sha512-dPPo+e/ADjMwabHfQ5s9DX2P8IeJiSg6NPXFRLFkFZm1OFbkDevf3YoSpf5/XzWD3IqcBo0dx8NzV7tLjp4EJw==";
           packageName: "@pega/constellationjs";
           reason: "Pega-maintained package, but it provides ConstellationJS engine files rather than a server-side DX API case client.";
           version: "25.1.3";
        }];
        strategy: "direct-support-slice";
     };
     supportOperationSlice: {
        allowlistSha256: "6b4e3eb1f0a9b371002d8a3be22827c473680c7ce1335a0faf9d990e94cd32fd";
        checkedAt: "2026-06-21";
        operations: readonly [{
           alias: "ticket.create";
           method: "POST";
           path: "{apiBasePath}/cases";
         }, {
           alias: "ticket.read";
           method: "GET";
           path: "{apiBasePath}/cases/{ID}";
         }, {
           alias: "ticket.update";
           method: "PUT";
           path: "{apiBasePath}/cases/{ID}";
         }, {
           alias: "ticket.search";
           method: "GET";
           path: "{apiBasePath}/cases";
         }, {
           alias: "pega-customer-service.caseTypes.list";
           method: "GET";
           path: "{apiBasePath}/casetypes";
         }, {
           alias: "pega-customer-service.assignmentAction.submit";
           method: "PATCH";
           path: "{apiBasePath}/assignments/{assignmentID}/actions/{actionID}";
        }];
        sourceKind: "official-docs-reviewed-slice";
        sourceVersion: "/api/v1";
     };
  };
  name: "Pega Customer Service";
  operations: readonly [{
     alias: "ticket.create";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.read";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
   }, {
     alias: "ticket.update";
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.search";
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
   }, {
     alias: "pega-customer-service.caseTypes.list";
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "pegaCaseType";
     requiresCredential: true;
   }, {
     alias: "pega-customer-service.assignmentAction.submit";
     audiences: readonly ["internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     providerObject: "pegaAssignmentAction";
     requiresCredential: true;
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-ticketing-pega-customer-service";
  privacyNotes: readonly ["Pega cases can contain customer identity, interaction details, assignments, statuses, case data, attachments metadata, and internal workflow context.", "Pega API credentials stay server-side and Studio receives only readiness and scope status."];
  provider: "pega-customer-service";
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates Pega Customer Service cases with the Pega DX API from SDK-user-selected workflows."`; `exposesSensitiveData`: `true`; `label`: `"Create Pega cases"`; `providerObjects`: readonly \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Pega cases and case type metadata through the Pega DX API."`; `exposesSensitiveData`: `true`; `label`: `"Read Pega cases"`; `providerObjects`: readonly \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}, \{ `kind`: `"pegaCaseType"`; `label`: `"Pega Case Type"`; `schemaName`: `"Pega-API-CaseManagement-CaseType"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates Pega cases with SDK-user-supplied case data through the Pega DX API."`; `exposesSensitiveData`: `true`; `label`: `"Update Pega cases"`; `providerObjects`: readonly \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Queries Pega cases with SDK-user-supplied case type, status, assignment, and pagination controls."`; `exposesSensitiveData`: `true`; `label`: `"Search Pega cases"`; `providerObjects`: readonly \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"handoff"`; `changesWorkflow`: `true`; `description`: `"Submits SDK-user-configured Pega DX assignment actions or case operations for human handoff workflows."`; `exposesSensitiveData`: `true`; `label`: `"Run Pega case handoff action"`; `providerObjects`: readonly \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}, \{ `kind`: `"pegaAssignmentAction"`; `label`: `"Pega Assignment Action"`; `schemaName`: `"Pega-API-CaseManagement-AssignmentAction"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Pega DX API overview"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/dx-api-overview.html"`; \}, \{ `label`: `"Pega DX API cases endpoints"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/managing-cases-dx-api.html"`; \}, \{ `label`: `"Pega DX API POST /cases"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-post-cases.html"`; \}, \{ `label`: `"Pega DX API GET /cases"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases.html"`; \}, \{ `label`: `"Pega DX API GET /cases/{ID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases-id.html"`; \}, \{ `label`: `"Pega DX API PUT /cases/{ID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-put-cases-id.html"`; \}, \{ `label`: `"Pega DX API GET /casetypes"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-casetypes_0.html"`; \}, \{ `label`: `"Pega DX API PATCH /assignments/{assignmentID}/actions/{actionID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-patch-assignments-assignmentid-actions-actionid.html"`; \}\]; `notes`: readonly \[`"Coverage is typed for Pega DX API case creation, case read/update, case search/listing, case-type listing, assignment action submission, and readiness checks used by Cognidesk support workflows."`, `"This is not full Pega Customer Service or Pega Platform API coverage; broader assignments/actions lifecycle, stages/process navigation, attachments, data views/pages, bulk actions, views, refresh/validation flows, security rules, and broader application administration remain outside this adapter."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Pega DX API overview"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/dx-api-overview.html"`; \}, \{ `label`: `"Pega DX API cases endpoints"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/managing-cases-dx-api.html"`; \}, \{ `label`: `"Pega DX API POST /cases"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-post-cases.html"`; \}, \{ `label`: `"Pega DX API GET /cases"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases.html"`; \}, \{ `label`: `"Pega DX API GET /cases/{ID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases-id.html"`; \}, \{ `label`: `"Pega DX API PUT /cases/{ID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-put-cases-id.html"`; \}, \{ `label`: `"Pega DX API GET /casetypes"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-casetypes_0.html"`; \}, \{ `label`: `"Pega DX API PATCH /assignments/{assignmentID}/actions/{actionID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-patch-assignments-assignmentid-actions-actionid.html"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is typed for Pega DX API case creation, case read/update, case search/listing, case-type listing, assignment action submission, and readiness checks used by Cognidesk support workflows."`, `"This is not full Pega Customer Service or Pega Platform API coverage; broader assignments/actions lifecycle, stages/process navigation, attachments, data views/pages, bulk actions, views, refresh/validation flows, security rules, and broader application administration remain outside this adapter."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"The SDK user's Pega Platform or Pega Customer Service application URL."`; `id`: `"pega-customer-service-instance"`; `label`: `"Pega Customer Service instance URL"`; `required`: `true`; \}, \{ `description`: `"Server-side OAuth bearer access or Basic Auth credentials for Pega DX API endpoints with operator/client privileges for cases, case types, and assignment actions."`; `id`: `"pega-customer-service-api-access"`; `label`: `"Pega DX API access"`; `metadata`: \{ `privilegeGuidance`: `"These strings are Cognidesk capability labels, not proven official Pega OAuth scopes. Pega access depends on the operator/client access group and privileges for case list/read/create/update, case type read, and assignment action submission."`; `scopeKind`: `"internal-capability-labels"`; \}; `required`: `true`; `scopes`: readonly \[`"cases:read"`, `"cases:write"`, `"casetypes:read"`\]; \}\] |
| `directions` | readonly \[`"bidirectional"`\] |
| `id` | `"ticketing.pega-customer-service"` |
| `limitations` | readonly \[`"Case types, starting processes, field requirements, assignment routing, security rules, data pages, and stage transitions are owned by the SDK user's Pega application."`, `"SDK users own case-type selection, field mapping, handoff timing, customer identity matching, notification policy, and retention before calling Pega APIs."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `assignmentActions`: `"typed-submit"`; `attachmentsDataPages`: `"provider-supported-not-typed"`; `broaderCaseManagementAdmin`: `"not-covered"`; `cases`: `"typed-create-read-update-search"`; `caseTypes`: `"typed-list"`; `readiness`: `"typed-list"`; `stageLifecycleActions`: `"provider-supported-not-typed"`; \}; `checkedProviderApiCoverage`: \{ `checkedFamilyCount`: `4`; `coverageArtifact`: `"docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json"`; `gapFamilyCount`: `1`; `implementedFamilyCount`: `3`; `implementedOperationCount`: `6`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \}; `implementation`: \{ `strategy`: `"direct-http-support-slice"`; \}; `implementationStrategy`: \{ `checkedAt`: `"2026-06-21"`; `reason`: `"No suitable maintained server-side JavaScript SDK was found for Pega Customer Service/DX API case operations; current Pega JavaScript packages are Constellation UI/client orchestration assets."`; `rejectedLibraries`: readonly \[\{ `integrity`: `"sha512-dPPo+e/ADjMwabHfQ5s9DX2P8IeJiSg6NPXFRLFkFZm1OFbkDevf3YoSpf5/XzWD3IqcBo0dx8NzV7tLjp4EJw=="`; `packageName`: `"@pega/constellationjs"`; `reason`: `"Pega-maintained package, but it provides ConstellationJS engine files rather than a server-side DX API case client."`; `version`: `"25.1.3"`; \}\]; `strategy`: `"direct-support-slice"`; \}; `supportOperationSlice`: \{ `allowlistSha256`: `"6b4e3eb1f0a9b371002d8a3be22827c473680c7ce1335a0faf9d990e94cd32fd"`; `checkedAt`: `"2026-06-21"`; `operations`: readonly \[\{ `alias`: `"ticket.create"`; `method`: `"POST"`; `path`: `"{apiBasePath}/cases"`; \}, \{ `alias`: `"ticket.read"`; `method`: `"GET"`; `path`: `"{apiBasePath}/cases/{ID}"`; \}, \{ `alias`: `"ticket.update"`; `method`: `"PUT"`; `path`: `"{apiBasePath}/cases/{ID}"`; \}, \{ `alias`: `"ticket.search"`; `method`: `"GET"`; `path`: `"{apiBasePath}/cases"`; \}, \{ `alias`: `"pega-customer-service.caseTypes.list"`; `method`: `"GET"`; `path`: `"{apiBasePath}/casetypes"`; \}, \{ `alias`: `"pega-customer-service.assignmentAction.submit"`; `method`: `"PATCH"`; `path`: `"{apiBasePath}/assignments/{assignmentID}/actions/{actionID}"`; \}\]; `sourceKind`: `"official-docs-reviewed-slice"`; `sourceVersion`: `"/api/v1"`; \}; \} |
| `metadata.channelCoverage` | \{ `assignmentActions`: `"typed-submit"`; `attachmentsDataPages`: `"provider-supported-not-typed"`; `broaderCaseManagementAdmin`: `"not-covered"`; `cases`: `"typed-create-read-update-search"`; `caseTypes`: `"typed-list"`; `readiness`: `"typed-list"`; `stageLifecycleActions`: `"provider-supported-not-typed"`; \} |
| `metadata.channelCoverage.assignmentActions` | `"typed-submit"` |
| `metadata.channelCoverage.attachmentsDataPages` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.broaderCaseManagementAdmin` | `"not-covered"` |
| `metadata.channelCoverage.cases` | `"typed-create-read-update-search"` |
| `metadata.channelCoverage.caseTypes` | `"typed-list"` |
| `metadata.channelCoverage.readiness` | `"typed-list"` |
| `metadata.channelCoverage.stageLifecycleActions` | `"provider-supported-not-typed"` |
| `metadata.checkedProviderApiCoverage` | \{ `checkedFamilyCount`: `4`; `coverageArtifact`: `"docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json"`; `gapFamilyCount`: `1`; `implementedFamilyCount`: `3`; `implementedOperationCount`: `6`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \} |
| `metadata.checkedProviderApiCoverage.checkedFamilyCount` | `4` |
| `metadata.checkedProviderApiCoverage.coverageArtifact` | `"docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json"` |
| `metadata.checkedProviderApiCoverage.gapFamilyCount` | `1` |
| `metadata.checkedProviderApiCoverage.implementedFamilyCount` | `3` |
| `metadata.checkedProviderApiCoverage.implementedOperationCount` | `6` |
| `metadata.checkedProviderApiCoverage.sourceKind` | `"checked-endpoint-family-inventory"` |
| `metadata.checkedProviderApiCoverage.verifiedAt` | `"2026-06-18"` |
| `metadata.implementation` | \{ `strategy`: `"direct-http-support-slice"`; \} |
| `metadata.implementation.strategy` | `"direct-http-support-slice"` |
| `metadata.implementationStrategy` | \{ `checkedAt`: `"2026-06-21"`; `reason`: `"No suitable maintained server-side JavaScript SDK was found for Pega Customer Service/DX API case operations; current Pega JavaScript packages are Constellation UI/client orchestration assets."`; `rejectedLibraries`: readonly \[\{ `integrity`: `"sha512-dPPo+e/ADjMwabHfQ5s9DX2P8IeJiSg6NPXFRLFkFZm1OFbkDevf3YoSpf5/XzWD3IqcBo0dx8NzV7tLjp4EJw=="`; `packageName`: `"@pega/constellationjs"`; `reason`: `"Pega-maintained package, but it provides ConstellationJS engine files rather than a server-side DX API case client."`; `version`: `"25.1.3"`; \}\]; `strategy`: `"direct-support-slice"`; \} |
| `metadata.implementationStrategy.checkedAt` | `"2026-06-21"` |
| `metadata.implementationStrategy.reason` | `"No suitable maintained server-side JavaScript SDK was found for Pega Customer Service/DX API case operations; current Pega JavaScript packages are Constellation UI/client orchestration assets."` |
| `metadata.implementationStrategy.rejectedLibraries` | readonly \[\{ `integrity`: `"sha512-dPPo+e/ADjMwabHfQ5s9DX2P8IeJiSg6NPXFRLFkFZm1OFbkDevf3YoSpf5/XzWD3IqcBo0dx8NzV7tLjp4EJw=="`; `packageName`: `"@pega/constellationjs"`; `reason`: `"Pega-maintained package, but it provides ConstellationJS engine files rather than a server-side DX API case client."`; `version`: `"25.1.3"`; \}\] |
| `metadata.implementationStrategy.strategy` | `"direct-support-slice"` |
| `metadata.supportOperationSlice` | \{ `allowlistSha256`: `"6b4e3eb1f0a9b371002d8a3be22827c473680c7ce1335a0faf9d990e94cd32fd"`; `checkedAt`: `"2026-06-21"`; `operations`: readonly \[\{ `alias`: `"ticket.create"`; `method`: `"POST"`; `path`: `"{apiBasePath}/cases"`; \}, \{ `alias`: `"ticket.read"`; `method`: `"GET"`; `path`: `"{apiBasePath}/cases/{ID}"`; \}, \{ `alias`: `"ticket.update"`; `method`: `"PUT"`; `path`: `"{apiBasePath}/cases/{ID}"`; \}, \{ `alias`: `"ticket.search"`; `method`: `"GET"`; `path`: `"{apiBasePath}/cases"`; \}, \{ `alias`: `"pega-customer-service.caseTypes.list"`; `method`: `"GET"`; `path`: `"{apiBasePath}/casetypes"`; \}, \{ `alias`: `"pega-customer-service.assignmentAction.submit"`; `method`: `"PATCH"`; `path`: `"{apiBasePath}/assignments/{assignmentID}/actions/{actionID}"`; \}\]; `sourceKind`: `"official-docs-reviewed-slice"`; `sourceVersion`: `"/api/v1"`; \} |
| `metadata.supportOperationSlice.allowlistSha256` | `"6b4e3eb1f0a9b371002d8a3be22827c473680c7ce1335a0faf9d990e94cd32fd"` |
| `metadata.supportOperationSlice.checkedAt` | `"2026-06-21"` |
| `metadata.supportOperationSlice.operations` | readonly \[\{ `alias`: `"ticket.create"`; `method`: `"POST"`; `path`: `"{apiBasePath}/cases"`; \}, \{ `alias`: `"ticket.read"`; `method`: `"GET"`; `path`: `"{apiBasePath}/cases/{ID}"`; \}, \{ `alias`: `"ticket.update"`; `method`: `"PUT"`; `path`: `"{apiBasePath}/cases/{ID}"`; \}, \{ `alias`: `"ticket.search"`; `method`: `"GET"`; `path`: `"{apiBasePath}/cases"`; \}, \{ `alias`: `"pega-customer-service.caseTypes.list"`; `method`: `"GET"`; `path`: `"{apiBasePath}/casetypes"`; \}, \{ `alias`: `"pega-customer-service.assignmentAction.submit"`; `method`: `"PATCH"`; `path`: `"{apiBasePath}/assignments/{assignmentID}/actions/{actionID}"`; \}\] |
| `metadata.supportOperationSlice.sourceKind` | `"official-docs-reviewed-slice"` |
| `metadata.supportOperationSlice.sourceVersion` | `"/api/v1"` |
| `name` | `"Pega Customer Service"` |
| `operations` | readonly \[\{ `alias`: `"ticket.create"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"pegaCase"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"pegaCase"`; `requiresCredential`: `true`; \}, \{ `alias`: `"ticket.update"`; `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"pegaCase"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"pegaCase"`; `requiresCredential`: `true`; \}, \{ `alias`: `"pega-customer-service.caseTypes.list"`; `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"pegaCaseType"`; `requiresCredential`: `true`; \}, \{ `alias`: `"pega-customer-service.assignmentAction.submit"`; `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"pegaAssignmentAction"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-ticketing-pega-customer-service"` |
| `privacyNotes` | readonly \[`"Pega cases can contain customer identity, interaction details, assignments, statuses, case data, attachments metadata, and internal workflow context."`, `"Pega API credentials stay server-side and Studio receives only readiness and scope status."`\] |
| `provider` | `"pega-customer-service"` |
| `trustLevel` | `"official"` |
