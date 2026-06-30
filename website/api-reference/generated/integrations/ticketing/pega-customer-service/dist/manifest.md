# integrations/ticketing/pega-customer-service/dist/manifest

## Variables

### pegaCustomerServiceDelegatedOperationAllowlist

```ts
const pegaCustomerServiceDelegatedOperationAllowlist: readonly [{
  alias: "ticket.create";
  providerClientMethod: "createCase";
}, {
  alias: "ticket.read";
  providerClientMethod: "getCase";
}, {
  alias: "ticket.update";
  providerClientMethod: "updateCase";
}, {
  alias: "ticket.search";
  providerClientMethod: "searchCases";
}, {
  alias: "pega-customer-service.caseTypes.list";
  providerClientMethod: "listCaseTypes";
}, {
  alias: "pega-customer-service.assignmentAction.submit";
  providerClientMethod: "performAssignmentAction";
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
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Pega Customer Service cases through the built-in DX REST adapter or provider client override from SDK-user-selected workflows.";
     exposesSensitiveData: true;
     label: "Create Pega cases";
     providerObjects: [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Pega cases and case type metadata through the built-in DX REST adapter or provider client override.";
     exposesSensitiveData: true;
     label: "Read Pega cases";
     providerObjects: [{
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
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Pega cases with SDK-user-supplied case data through the built-in DX REST adapter or provider client override.";
     exposesSensitiveData: true;
     label: "Update Pega cases";
     providerObjects: [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Queries Pega cases with SDK-user-supplied case type, status, assignment, and pagination controls.";
     exposesSensitiveData: true;
     label: "Search Pega cases";
     providerObjects: [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     description: "Submits SDK-user-configured Pega DX assignment actions or case operations for human handoff workflows.";
     exposesSensitiveData: true;
     label: "Run Pega case handoff action";
     providerObjects: [{
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
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
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
      }, {
        label: "Pega React SDK";
        url: "https://github.com/pegasystems/react-sdk";
      }, {
        label: "@pega/constellationjs package";
        url: "https://www.npmjs.com/package/@pega/constellationjs";
      }, {
        label: "@pega/auth package";
        url: "https://www.npmjs.com/package/@pega/auth";
     }];
     notes: ["Runtime coverage uses the built-in Pega DX REST adapter when baseUrl plus access credentials are provided; a host-injected PegaCustomerServiceProviderClient remains available as an override.", "Coverage is typed for Pega Customer Service case creation, case read/update, case search/listing, case-type listing, assignment action submission, and readiness checks used by Cognidesk support workflows.", "This is not full Pega Customer Service or Pega Platform API coverage; broader assignments/actions lifecycle, stages/process navigation, attachments, data views/pages, bulk actions, views, refresh/validation flows, security rules, and broader application administration remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     description: "Optional host runtime override implementing PegaCustomerServiceProviderClient. When omitted, the package uses its built-in Pega DX REST adapter.";
     id: "pega-customer-service-provider-client";
     label: "Optional Pega Customer Service provider client override";
     metadata: {
        credentialOwnership: "host-managed-override";
        defaultClientPolicy: "built-in-dx-rest-adapter";
        defaultFetchClient: "built-in-provider-rest-adapter";
        defaultHttpClient: "built-in-fetch";
        injectionInterface: "PegaCustomerServiceProviderClient";
     };
     required: false;
   }, {
     description: "Pega application base URL used by the built-in DX REST adapter, or supplied by a host provider client override.";
     id: "pega-customer-service-instance";
     label: "Pega Customer Service base URL";
     metadata: {
        requiredWhen: "built-in-dx-rest-adapter";
     };
     required: false;
   }, {
     description: "Server-side Pega DX API access supplied as accessToken, auth headers, or encapsulated in a host provider client override.";
     id: "pega-customer-service-api-access";
     label: "Pega Customer Service DX API access";
     metadata: {
        privilegeGuidance: "These strings are Cognidesk capability labels, not official Pega OAuth scope names. Pega access depends on application OAuth/client configuration, roles, privileges, and case security.";
        requiredWhen: "built-in-dx-rest-adapter";
        scopeKind: "internal-capability-labels";
     };
     required: false;
     scopes: ["cases:read", "cases:write", "assignments:write"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.pega-customer-service";
  limitations: ["The built-in adapter covers selected Pega DX case and assignment-action operations only; hosts can still inject a PegaCustomerServiceProviderClient for custom authentication, retries, or endpoint policy.", "Case types, starting processes, field requirements, assignment routing, security rules, data pages, and stage transitions are owned by the SDK user's Pega application and injected provider client.", "SDK users own case-type selection, field mapping, handoff timing, customer identity matching, notification policy, and retention before invoking Pega provider operations."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        assignmentActions: "typed-rest-adapter-submit";
        attachmentsDataPages: "provider-supported-not-typed";
        broaderCaseManagementAdmin: "not-covered";
        cases: "typed-rest-adapter-create-read-update-search";
        caseTypes: "typed-rest-adapter-list";
        readiness: "typed-rest-adapter-list";
        stageLifecycleActions: "provider-supported-not-typed";
     };
     checkedProviderApiCoverage: {
        checkedFamilyCount: 4;
        coverageArtifact: "docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json";
        gapFamilyCount: 1;
        implementationOwnership: "built-in-provider-rest-adapter";
        implementedFamilyCount: 3;
        implementedOperationCount: 6;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        defaultFetchClient: "built-in-provider-rest-adapter";
        defaultHttpClient: "built-in-fetch";
        manifestImport: "no-client-initialization";
        providerClientInterface: "PegaCustomerServiceProviderClient";
        providerClientOverride: true;
        strategy: "provider-rest-adapter";
     };
     implementationStrategy: {
        checkedAt: "2026-06-25";
        reason: "No suitable official server-side JavaScript SDK was found for Pega Customer Service case operations; current Pega JavaScript SDK surfaces are Constellation UI/client orchestration assets, while DX API remains documented as REST endpoints.";
        rejectedLibraries: readonly [{
           packageName: "@pega/constellationjs";
           reason: "Pega-maintained package, but it delivers ConstellationJS engine files rather than a server-side Customer Service case client.";
           result: "not-used-as-package-default";
         }, {
           packageName: "@pega/auth";
           reason: "Pega-maintained OAuth client infrastructure for Infinity and Launchpad, but not a typed Customer Service or DX case operations client.";
           result: "not-used-as-package-default";
         }, {
           packageName: "pegasystems/react-sdk";
           reason: "Pega-maintained React SDK for Constellation DX components and alternative UI integration, not a backend ticketing provider client for Cognidesk operations.";
           result: "not-used-as-package-default";
        }];
        strategy: "no-official-sdk-rest-adapter";
     };
     providerClient: {
        defaultClient: "built-in-dx-rest-adapter";
        importPolicy: "optional-host-override";
        injectionPolicy: "optional-runtime-override";
        interface: "PegaCustomerServiceProviderClient";
     };
     providerRestAdapterSupportSurface: {
        adapterKind: "no-official-sdk-rest-adapter";
        checkedAt: "2026-06-25";
        operations: readonly [{
           alias: "ticket.create";
           providerClientMethod: "createCase";
         }, {
           alias: "ticket.read";
           providerClientMethod: "getCase";
         }, {
           alias: "ticket.update";
           providerClientMethod: "updateCase";
         }, {
           alias: "ticket.search";
           providerClientMethod: "searchCases";
         }, {
           alias: "pega-customer-service.caseTypes.list";
           providerClientMethod: "listCaseTypes";
         }, {
           alias: "pega-customer-service.assignmentAction.submit";
           providerClientMethod: "performAssignmentAction";
        }];
        source: "Built-in Pega DX REST adapter";
     };
  };
  name: "Pega Customer Service";
  operations: [{
     alias: "ticket.create";
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.read";
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
   }, {
     alias: "ticket.update";
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.search";
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
   }, {
     alias: "pega-customer-service.caseTypes.list";
     audiences: ["internal-support", "mixed"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "pegaCaseType";
     requiresCredential: true;
   }, {
     alias: "pega-customer-service.assignmentAction.submit";
     audiences: ["internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     providerObject: "pegaAssignmentAction";
     requiresCredential: true;
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-ticketing-pega-customer-service";
  privacyNotes: ["Pega cases can contain customer identity, interaction details, assignments, statuses, case data, attachments metadata, and internal workflow context.", "Pega API credentials stay server-side and Studio receives only readiness and scope status."];
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
| `capabilities` | \[\{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates Pega Customer Service cases through the built-in DX REST adapter or provider client override from SDK-user-selected workflows."`; `exposesSensitiveData`: `true`; `label`: `"Create Pega cases"`; `providerObjects`: \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Pega cases and case type metadata through the built-in DX REST adapter or provider client override."`; `exposesSensitiveData`: `true`; `label`: `"Read Pega cases"`; `providerObjects`: \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}, \{ `kind`: `"pegaCaseType"`; `label`: `"Pega Case Type"`; `schemaName`: `"Pega-API-CaseManagement-CaseType"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates Pega cases with SDK-user-supplied case data through the built-in DX REST adapter or provider client override."`; `exposesSensitiveData`: `true`; `label`: `"Update Pega cases"`; `providerObjects`: \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Queries Pega cases with SDK-user-supplied case type, status, assignment, and pagination controls."`; `exposesSensitiveData`: `true`; `label`: `"Search Pega cases"`; `providerObjects`: \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"handoff"`; `changesWorkflow`: `true`; `description`: `"Submits SDK-user-configured Pega DX assignment actions or case operations for human handoff workflows."`; `exposesSensitiveData`: `true`; `label`: `"Run Pega case handoff action"`; `providerObjects`: \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}, \{ `kind`: `"pegaAssignmentAction"`; `label`: `"Pega Assignment Action"`; `schemaName`: `"Pega-API-CaseManagement-AssignmentAction"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Pega DX API overview"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/dx-api-overview.html"`; \}, \{ `label`: `"Pega DX API cases endpoints"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/managing-cases-dx-api.html"`; \}, \{ `label`: `"Pega DX API POST /cases"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-post-cases.html"`; \}, \{ `label`: `"Pega DX API GET /cases"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases.html"`; \}, \{ `label`: `"Pega DX API GET /cases/{ID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases-id.html"`; \}, \{ `label`: `"Pega DX API PUT /cases/{ID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-put-cases-id.html"`; \}, \{ `label`: `"Pega DX API GET /casetypes"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-casetypes_0.html"`; \}, \{ `label`: `"Pega DX API PATCH /assignments/{assignmentID}/actions/{actionID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-patch-assignments-assignmentid-actions-actionid.html"`; \}, \{ `label`: `"Pega React SDK"`; `url`: `"https://github.com/pegasystems/react-sdk"`; \}, \{ `label`: `"@pega/constellationjs package"`; `url`: `"https://www.npmjs.com/package/@pega/constellationjs"`; \}, \{ `label`: `"@pega/auth package"`; `url`: `"https://www.npmjs.com/package/@pega/auth"`; \}\]; `notes`: \[`"Runtime coverage uses the built-in Pega DX REST adapter when baseUrl plus access credentials are provided; a host-injected PegaCustomerServiceProviderClient remains available as an override."`, `"Coverage is typed for Pega Customer Service case creation, case read/update, case search/listing, case-type listing, assignment action submission, and readiness checks used by Cognidesk support workflows."`, `"This is not full Pega Customer Service or Pega Platform API coverage; broader assignments/actions lifecycle, stages/process navigation, attachments, data views/pages, bulk actions, views, refresh/validation flows, security rules, and broader application administration remain outside this adapter."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Pega DX API overview"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/dx-api-overview.html"`; \}, \{ `label`: `"Pega DX API cases endpoints"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/managing-cases-dx-api.html"`; \}, \{ `label`: `"Pega DX API POST /cases"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-post-cases.html"`; \}, \{ `label`: `"Pega DX API GET /cases"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases.html"`; \}, \{ `label`: `"Pega DX API GET /cases/{ID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases-id.html"`; \}, \{ `label`: `"Pega DX API PUT /cases/{ID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-put-cases-id.html"`; \}, \{ `label`: `"Pega DX API GET /casetypes"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-casetypes_0.html"`; \}, \{ `label`: `"Pega DX API PATCH /assignments/{assignmentID}/actions/{actionID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-patch-assignments-assignmentid-actions-actionid.html"`; \}, \{ `label`: `"Pega React SDK"`; `url`: `"https://github.com/pegasystems/react-sdk"`; \}, \{ `label`: `"@pega/constellationjs package"`; `url`: `"https://www.npmjs.com/package/@pega/constellationjs"`; \}, \{ `label`: `"@pega/auth package"`; `url`: `"https://www.npmjs.com/package/@pega/auth"`; \}\] |
| `coverage.notes` | \[`"Runtime coverage uses the built-in Pega DX REST adapter when baseUrl plus access credentials are provided; a host-injected PegaCustomerServiceProviderClient remains available as an override."`, `"Coverage is typed for Pega Customer Service case creation, case read/update, case search/listing, case-type listing, assignment action submission, and readiness checks used by Cognidesk support workflows."`, `"This is not full Pega Customer Service or Pega Platform API coverage; broader assignments/actions lifecycle, stages/process navigation, attachments, data views/pages, bulk actions, views, refresh/validation flows, security rules, and broader application administration remain outside this adapter."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | \[\{ `description`: `"Optional host runtime override implementing PegaCustomerServiceProviderClient. When omitted, the package uses its built-in Pega DX REST adapter."`; `id`: `"pega-customer-service-provider-client"`; `label`: `"Optional Pega Customer Service provider client override"`; `metadata`: \{ `credentialOwnership`: `"host-managed-override"`; `defaultClientPolicy`: `"built-in-dx-rest-adapter"`; `defaultFetchClient`: `"built-in-provider-rest-adapter"`; `defaultHttpClient`: `"built-in-fetch"`; `injectionInterface`: `"PegaCustomerServiceProviderClient"`; \}; `required`: `false`; \}, \{ `description`: `"Pega application base URL used by the built-in DX REST adapter, or supplied by a host provider client override."`; `id`: `"pega-customer-service-instance"`; `label`: `"Pega Customer Service base URL"`; `metadata`: \{ `requiredWhen`: `"built-in-dx-rest-adapter"`; \}; `required`: `false`; \}, \{ `description`: `"Server-side Pega DX API access supplied as accessToken, auth headers, or encapsulated in a host provider client override."`; `id`: `"pega-customer-service-api-access"`; `label`: `"Pega Customer Service DX API access"`; `metadata`: \{ `privilegeGuidance`: `"These strings are Cognidesk capability labels, not official Pega OAuth scope names. Pega access depends on application OAuth/client configuration, roles, privileges, and case security."`; `requiredWhen`: `"built-in-dx-rest-adapter"`; `scopeKind`: `"internal-capability-labels"`; \}; `required`: `false`; `scopes`: \[`"cases:read"`, `"cases:write"`, `"assignments:write"`\]; \}\] |
| `directions` | \[`"bidirectional"`\] |
| `id` | `"ticketing.pega-customer-service"` |
| `limitations` | \[`"The built-in adapter covers selected Pega DX case and assignment-action operations only; hosts can still inject a PegaCustomerServiceProviderClient for custom authentication, retries, or endpoint policy."`, `"Case types, starting processes, field requirements, assignment routing, security rules, data pages, and stage transitions are owned by the SDK user's Pega application and injected provider client."`, `"SDK users own case-type selection, field mapping, handoff timing, customer identity matching, notification policy, and retention before invoking Pega provider operations."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `assignmentActions`: `"typed-rest-adapter-submit"`; `attachmentsDataPages`: `"provider-supported-not-typed"`; `broaderCaseManagementAdmin`: `"not-covered"`; `cases`: `"typed-rest-adapter-create-read-update-search"`; `caseTypes`: `"typed-rest-adapter-list"`; `readiness`: `"typed-rest-adapter-list"`; `stageLifecycleActions`: `"provider-supported-not-typed"`; \}; `checkedProviderApiCoverage`: \{ `checkedFamilyCount`: `4`; `coverageArtifact`: `"docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json"`; `gapFamilyCount`: `1`; `implementationOwnership`: `"built-in-provider-rest-adapter"`; `implementedFamilyCount`: `3`; `implementedOperationCount`: `6`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \}; `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `defaultFetchClient`: `"built-in-provider-rest-adapter"`; `defaultHttpClient`: `"built-in-fetch"`; `manifestImport`: `"no-client-initialization"`; `providerClientInterface`: `"PegaCustomerServiceProviderClient"`; `providerClientOverride`: `true`; `strategy`: `"provider-rest-adapter"`; \}; `implementationStrategy`: \{ `checkedAt`: `"2026-06-25"`; `reason`: `"No suitable official server-side JavaScript SDK was found for Pega Customer Service case operations; current Pega JavaScript SDK surfaces are Constellation UI/client orchestration assets, while DX API remains documented as REST endpoints."`; `rejectedLibraries`: readonly \[\{ `packageName`: `"@pega/constellationjs"`; `reason`: `"Pega-maintained package, but it delivers ConstellationJS engine files rather than a server-side Customer Service case client."`; `result`: `"not-used-as-package-default"`; \}, \{ `packageName`: `"@pega/auth"`; `reason`: `"Pega-maintained OAuth client infrastructure for Infinity and Launchpad, but not a typed Customer Service or DX case operations client."`; `result`: `"not-used-as-package-default"`; \}, \{ `packageName`: `"pegasystems/react-sdk"`; `reason`: `"Pega-maintained React SDK for Constellation DX components and alternative UI integration, not a backend ticketing provider client for Cognidesk operations."`; `result`: `"not-used-as-package-default"`; \}\]; `strategy`: `"no-official-sdk-rest-adapter"`; \}; `providerClient`: \{ `defaultClient`: `"built-in-dx-rest-adapter"`; `importPolicy`: `"optional-host-override"`; `injectionPolicy`: `"optional-runtime-override"`; `interface`: `"PegaCustomerServiceProviderClient"`; \}; `providerRestAdapterSupportSurface`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `checkedAt`: `"2026-06-25"`; `operations`: readonly \[\{ `alias`: `"ticket.create"`; `providerClientMethod`: `"createCase"`; \}, \{ `alias`: `"ticket.read"`; `providerClientMethod`: `"getCase"`; \}, \{ `alias`: `"ticket.update"`; `providerClientMethod`: `"updateCase"`; \}, \{ `alias`: `"ticket.search"`; `providerClientMethod`: `"searchCases"`; \}, \{ `alias`: `"pega-customer-service.caseTypes.list"`; `providerClientMethod`: `"listCaseTypes"`; \}, \{ `alias`: `"pega-customer-service.assignmentAction.submit"`; `providerClientMethod`: `"performAssignmentAction"`; \}\]; `source`: `"Built-in Pega DX REST adapter"`; \}; \} |
| `metadata.channelCoverage` | \{ `assignmentActions`: `"typed-rest-adapter-submit"`; `attachmentsDataPages`: `"provider-supported-not-typed"`; `broaderCaseManagementAdmin`: `"not-covered"`; `cases`: `"typed-rest-adapter-create-read-update-search"`; `caseTypes`: `"typed-rest-adapter-list"`; `readiness`: `"typed-rest-adapter-list"`; `stageLifecycleActions`: `"provider-supported-not-typed"`; \} |
| `metadata.channelCoverage.assignmentActions` | `"typed-rest-adapter-submit"` |
| `metadata.channelCoverage.attachmentsDataPages` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.broaderCaseManagementAdmin` | `"not-covered"` |
| `metadata.channelCoverage.cases` | `"typed-rest-adapter-create-read-update-search"` |
| `metadata.channelCoverage.caseTypes` | `"typed-rest-adapter-list"` |
| `metadata.channelCoverage.readiness` | `"typed-rest-adapter-list"` |
| `metadata.channelCoverage.stageLifecycleActions` | `"provider-supported-not-typed"` |
| `metadata.checkedProviderApiCoverage` | \{ `checkedFamilyCount`: `4`; `coverageArtifact`: `"docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json"`; `gapFamilyCount`: `1`; `implementationOwnership`: `"built-in-provider-rest-adapter"`; `implementedFamilyCount`: `3`; `implementedOperationCount`: `6`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \} |
| `metadata.checkedProviderApiCoverage.checkedFamilyCount` | `4` |
| `metadata.checkedProviderApiCoverage.coverageArtifact` | `"docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json"` |
| `metadata.checkedProviderApiCoverage.gapFamilyCount` | `1` |
| `metadata.checkedProviderApiCoverage.implementationOwnership` | `"built-in-provider-rest-adapter"` |
| `metadata.checkedProviderApiCoverage.implementedFamilyCount` | `3` |
| `metadata.checkedProviderApiCoverage.implementedOperationCount` | `6` |
| `metadata.checkedProviderApiCoverage.sourceKind` | `"checked-endpoint-family-inventory"` |
| `metadata.checkedProviderApiCoverage.verifiedAt` | `"2026-06-18"` |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `defaultFetchClient`: `"built-in-provider-rest-adapter"`; `defaultHttpClient`: `"built-in-fetch"`; `manifestImport`: `"no-client-initialization"`; `providerClientInterface`: `"PegaCustomerServiceProviderClient"`; `providerClientOverride`: `true`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.defaultFetchClient` | `"built-in-provider-rest-adapter"` |
| `metadata.implementation.defaultHttpClient` | `"built-in-fetch"` |
| `metadata.implementation.manifestImport` | `"no-client-initialization"` |
| `metadata.implementation.providerClientInterface` | `"PegaCustomerServiceProviderClient"` |
| `metadata.implementation.providerClientOverride` | `true` |
| `metadata.implementation.strategy` | `"provider-rest-adapter"` |
| `metadata.implementationStrategy` | \{ `checkedAt`: `"2026-06-25"`; `reason`: `"No suitable official server-side JavaScript SDK was found for Pega Customer Service case operations; current Pega JavaScript SDK surfaces are Constellation UI/client orchestration assets, while DX API remains documented as REST endpoints."`; `rejectedLibraries`: readonly \[\{ `packageName`: `"@pega/constellationjs"`; `reason`: `"Pega-maintained package, but it delivers ConstellationJS engine files rather than a server-side Customer Service case client."`; `result`: `"not-used-as-package-default"`; \}, \{ `packageName`: `"@pega/auth"`; `reason`: `"Pega-maintained OAuth client infrastructure for Infinity and Launchpad, but not a typed Customer Service or DX case operations client."`; `result`: `"not-used-as-package-default"`; \}, \{ `packageName`: `"pegasystems/react-sdk"`; `reason`: `"Pega-maintained React SDK for Constellation DX components and alternative UI integration, not a backend ticketing provider client for Cognidesk operations."`; `result`: `"not-used-as-package-default"`; \}\]; `strategy`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.implementationStrategy.checkedAt` | `"2026-06-25"` |
| `metadata.implementationStrategy.reason` | `"No suitable official server-side JavaScript SDK was found for Pega Customer Service case operations; current Pega JavaScript SDK surfaces are Constellation UI/client orchestration assets, while DX API remains documented as REST endpoints."` |
| `metadata.implementationStrategy.rejectedLibraries` | readonly \[\{ `packageName`: `"@pega/constellationjs"`; `reason`: `"Pega-maintained package, but it delivers ConstellationJS engine files rather than a server-side Customer Service case client."`; `result`: `"not-used-as-package-default"`; \}, \{ `packageName`: `"@pega/auth"`; `reason`: `"Pega-maintained OAuth client infrastructure for Infinity and Launchpad, but not a typed Customer Service or DX case operations client."`; `result`: `"not-used-as-package-default"`; \}, \{ `packageName`: `"pegasystems/react-sdk"`; `reason`: `"Pega-maintained React SDK for Constellation DX components and alternative UI integration, not a backend ticketing provider client for Cognidesk operations."`; `result`: `"not-used-as-package-default"`; \}\] |
| `metadata.implementationStrategy.strategy` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerClient` | \{ `defaultClient`: `"built-in-dx-rest-adapter"`; `importPolicy`: `"optional-host-override"`; `injectionPolicy`: `"optional-runtime-override"`; `interface`: `"PegaCustomerServiceProviderClient"`; \} |
| `metadata.providerClient.defaultClient` | `"built-in-dx-rest-adapter"` |
| `metadata.providerClient.importPolicy` | `"optional-host-override"` |
| `metadata.providerClient.injectionPolicy` | `"optional-runtime-override"` |
| `metadata.providerClient.interface` | `"PegaCustomerServiceProviderClient"` |
| `metadata.providerRestAdapterSupportSurface` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `checkedAt`: `"2026-06-25"`; `operations`: readonly \[\{ `alias`: `"ticket.create"`; `providerClientMethod`: `"createCase"`; \}, \{ `alias`: `"ticket.read"`; `providerClientMethod`: `"getCase"`; \}, \{ `alias`: `"ticket.update"`; `providerClientMethod`: `"updateCase"`; \}, \{ `alias`: `"ticket.search"`; `providerClientMethod`: `"searchCases"`; \}, \{ `alias`: `"pega-customer-service.caseTypes.list"`; `providerClientMethod`: `"listCaseTypes"`; \}, \{ `alias`: `"pega-customer-service.assignmentAction.submit"`; `providerClientMethod`: `"performAssignmentAction"`; \}\]; `source`: `"Built-in Pega DX REST adapter"`; \} |
| `metadata.providerRestAdapterSupportSurface.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapterSupportSurface.checkedAt` | `"2026-06-25"` |
| `metadata.providerRestAdapterSupportSurface.operations` | readonly \[\{ `alias`: `"ticket.create"`; `providerClientMethod`: `"createCase"`; \}, \{ `alias`: `"ticket.read"`; `providerClientMethod`: `"getCase"`; \}, \{ `alias`: `"ticket.update"`; `providerClientMethod`: `"updateCase"`; \}, \{ `alias`: `"ticket.search"`; `providerClientMethod`: `"searchCases"`; \}, \{ `alias`: `"pega-customer-service.caseTypes.list"`; `providerClientMethod`: `"listCaseTypes"`; \}, \{ `alias`: `"pega-customer-service.assignmentAction.submit"`; `providerClientMethod`: `"performAssignmentAction"`; \}\] |
| `metadata.providerRestAdapterSupportSurface.source` | `"Built-in Pega DX REST adapter"` |
| `name` | `"Pega Customer Service"` |
| `operations` | \[\{ `alias`: `"ticket.create"`; `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"pegaCase"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"pegaCase"`; `requiresCredential`: `true`; \}, \{ `alias`: `"ticket.update"`; `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"pegaCase"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"pegaCase"`; `requiresCredential`: `true`; \}, \{ `alias`: `"pega-customer-service.caseTypes.list"`; `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"pegaCaseType"`; `requiresCredential`: `true`; \}, \{ `alias`: `"pega-customer-service.assignmentAction.submit"`; `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"pegaAssignmentAction"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-ticketing-pega-customer-service"` |
| `privacyNotes` | \[`"Pega cases can contain customer identity, interaction details, assignments, statuses, case data, attachments metadata, and internal workflow context."`, `"Pega API credentials stay server-side and Studio receives only readiness and scope status."`\] |
| `provider` | `"pega-customer-service"` |
| `trustLevel` | `"official"` |

***

### pegaCustomerServiceTicketingProviderManifestInput

```ts
const pegaCustomerServiceTicketingProviderManifestInput: {
  capabilities: [{
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Pega Customer Service cases through the built-in DX REST adapter or provider client override from SDK-user-selected workflows.";
     exposesSensitiveData: true;
     label: "Create Pega cases";
     providerObjects: [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Pega cases and case type metadata through the built-in DX REST adapter or provider client override.";
     exposesSensitiveData: true;
     label: "Read Pega cases";
     providerObjects: [{
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
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Pega cases with SDK-user-supplied case data through the built-in DX REST adapter or provider client override.";
     exposesSensitiveData: true;
     label: "Update Pega cases";
     providerObjects: [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Queries Pega cases with SDK-user-supplied case type, status, assignment, and pagination controls.";
     exposesSensitiveData: true;
     label: "Search Pega cases";
     providerObjects: [{
        kind: "pegaCase";
        label: "Pega Case";
        schemaName: "Pega-API-CaseManagement-Case";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     description: "Submits SDK-user-configured Pega DX assignment actions or case operations for human handoff workflows.";
     exposesSensitiveData: true;
     label: "Run Pega case handoff action";
     providerObjects: [{
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
  channelAudiences: ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: [{
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
      }, {
        label: "Pega React SDK";
        url: "https://github.com/pegasystems/react-sdk";
      }, {
        label: "@pega/constellationjs package";
        url: "https://www.npmjs.com/package/@pega/constellationjs";
      }, {
        label: "@pega/auth package";
        url: "https://www.npmjs.com/package/@pega/auth";
     }];
     notes: ["Runtime coverage uses the built-in Pega DX REST adapter when baseUrl plus access credentials are provided; a host-injected PegaCustomerServiceProviderClient remains available as an override.", "Coverage is typed for Pega Customer Service case creation, case read/update, case search/listing, case-type listing, assignment action submission, and readiness checks used by Cognidesk support workflows.", "This is not full Pega Customer Service or Pega Platform API coverage; broader assignments/actions lifecycle, stages/process navigation, attachments, data views/pages, bulk actions, views, refresh/validation flows, security rules, and broader application administration remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: [{
     description: "Optional host runtime override implementing PegaCustomerServiceProviderClient. When omitted, the package uses its built-in Pega DX REST adapter.";
     id: "pega-customer-service-provider-client";
     label: "Optional Pega Customer Service provider client override";
     metadata: {
        credentialOwnership: "host-managed-override";
        defaultClientPolicy: "built-in-dx-rest-adapter";
        defaultFetchClient: "built-in-provider-rest-adapter";
        defaultHttpClient: "built-in-fetch";
        injectionInterface: "PegaCustomerServiceProviderClient";
     };
     required: false;
   }, {
     description: "Pega application base URL used by the built-in DX REST adapter, or supplied by a host provider client override.";
     id: "pega-customer-service-instance";
     label: "Pega Customer Service base URL";
     metadata: {
        requiredWhen: "built-in-dx-rest-adapter";
     };
     required: false;
   }, {
     description: "Server-side Pega DX API access supplied as accessToken, auth headers, or encapsulated in a host provider client override.";
     id: "pega-customer-service-api-access";
     label: "Pega Customer Service DX API access";
     metadata: {
        privilegeGuidance: "These strings are Cognidesk capability labels, not official Pega OAuth scope names. Pega access depends on application OAuth/client configuration, roles, privileges, and case security.";
        requiredWhen: "built-in-dx-rest-adapter";
        scopeKind: "internal-capability-labels";
     };
     required: false;
     scopes: ["cases:read", "cases:write", "assignments:write"];
  }];
  directions: ["bidirectional"];
  id: "ticketing.pega-customer-service";
  limitations: ["The built-in adapter covers selected Pega DX case and assignment-action operations only; hosts can still inject a PegaCustomerServiceProviderClient for custom authentication, retries, or endpoint policy.", "Case types, starting processes, field requirements, assignment routing, security rules, data pages, and stage transitions are owned by the SDK user's Pega application and injected provider client.", "SDK users own case-type selection, field mapping, handoff timing, customer identity matching, notification policy, and retention before invoking Pega provider operations."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        assignmentActions: "typed-rest-adapter-submit";
        attachmentsDataPages: "provider-supported-not-typed";
        broaderCaseManagementAdmin: "not-covered";
        cases: "typed-rest-adapter-create-read-update-search";
        caseTypes: "typed-rest-adapter-list";
        readiness: "typed-rest-adapter-list";
        stageLifecycleActions: "provider-supported-not-typed";
     };
     checkedProviderApiCoverage: {
        checkedFamilyCount: 4;
        coverageArtifact: "docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json";
        gapFamilyCount: 1;
        implementationOwnership: "built-in-provider-rest-adapter";
        implementedFamilyCount: 3;
        implementedOperationCount: 6;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        defaultFetchClient: "built-in-provider-rest-adapter";
        defaultHttpClient: "built-in-fetch";
        manifestImport: "no-client-initialization";
        providerClientInterface: "PegaCustomerServiceProviderClient";
        providerClientOverride: true;
        strategy: "provider-rest-adapter";
     };
     implementationStrategy: {
        checkedAt: "2026-06-25";
        reason: "No suitable official server-side JavaScript SDK was found for Pega Customer Service case operations; current Pega JavaScript SDK surfaces are Constellation UI/client orchestration assets, while DX API remains documented as REST endpoints.";
        rejectedLibraries: readonly [{
           packageName: "@pega/constellationjs";
           reason: "Pega-maintained package, but it delivers ConstellationJS engine files rather than a server-side Customer Service case client.";
           result: "not-used-as-package-default";
         }, {
           packageName: "@pega/auth";
           reason: "Pega-maintained OAuth client infrastructure for Infinity and Launchpad, but not a typed Customer Service or DX case operations client.";
           result: "not-used-as-package-default";
         }, {
           packageName: "pegasystems/react-sdk";
           reason: "Pega-maintained React SDK for Constellation DX components and alternative UI integration, not a backend ticketing provider client for Cognidesk operations.";
           result: "not-used-as-package-default";
        }];
        strategy: "no-official-sdk-rest-adapter";
     };
     providerClient: {
        defaultClient: "built-in-dx-rest-adapter";
        importPolicy: "optional-host-override";
        injectionPolicy: "optional-runtime-override";
        interface: "PegaCustomerServiceProviderClient";
     };
     providerRestAdapterSupportSurface: {
        adapterKind: "no-official-sdk-rest-adapter";
        checkedAt: "2026-06-25";
        operations: readonly [{
           alias: "ticket.create";
           providerClientMethod: "createCase";
         }, {
           alias: "ticket.read";
           providerClientMethod: "getCase";
         }, {
           alias: "ticket.update";
           providerClientMethod: "updateCase";
         }, {
           alias: "ticket.search";
           providerClientMethod: "searchCases";
         }, {
           alias: "pega-customer-service.caseTypes.list";
           providerClientMethod: "listCaseTypes";
         }, {
           alias: "pega-customer-service.assignmentAction.submit";
           providerClientMethod: "performAssignmentAction";
        }];
        source: "Built-in Pega DX REST adapter";
     };
  };
  name: "Pega Customer Service";
  operations: [{
     alias: "ticket.create";
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.read";
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
   }, {
     alias: "ticket.update";
     audiences: ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "ticket.search";
     audiences: ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "pegaCase";
     requiresCredential: true;
   }, {
     alias: "pega-customer-service.caseTypes.list";
     audiences: ["internal-support", "mixed"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "pegaCaseType";
     requiresCredential: true;
   }, {
     alias: "pega-customer-service.assignmentAction.submit";
     audiences: ["internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     providerObject: "pegaAssignmentAction";
     requiresCredential: true;
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-ticketing-pega-customer-service";
  privacyNotes: ["Pega cases can contain customer identity, interaction details, assignments, statuses, case data, attachments metadata, and internal workflow context.", "Pega API credentials stay server-side and Studio receives only readiness and scope status."];
  provider: "pega-customer-service";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \[\{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates Pega Customer Service cases through the built-in DX REST adapter or provider client override from SDK-user-selected workflows."`; `exposesSensitiveData`: `true`; `label`: `"Create Pega cases"`; `providerObjects`: \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Pega cases and case type metadata through the built-in DX REST adapter or provider client override."`; `exposesSensitiveData`: `true`; `label`: `"Read Pega cases"`; `providerObjects`: \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}, \{ `kind`: `"pegaCaseType"`; `label`: `"Pega Case Type"`; `schemaName`: `"Pega-API-CaseManagement-CaseType"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates Pega cases with SDK-user-supplied case data through the built-in DX REST adapter or provider client override."`; `exposesSensitiveData`: `true`; `label`: `"Update Pega cases"`; `providerObjects`: \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Queries Pega cases with SDK-user-supplied case type, status, assignment, and pagination controls."`; `exposesSensitiveData`: `true`; `label`: `"Search Pega cases"`; `providerObjects`: \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"handoff"`; `changesWorkflow`: `true`; `description`: `"Submits SDK-user-configured Pega DX assignment actions or case operations for human handoff workflows."`; `exposesSensitiveData`: `true`; `label`: `"Run Pega case handoff action"`; `providerObjects`: \[\{ `kind`: `"pegaCase"`; `label`: `"Pega Case"`; `schemaName`: `"Pega-API-CaseManagement-Case"`; \}, \{ `kind`: `"pegaAssignmentAction"`; `label`: `"Pega Assignment Action"`; `schemaName`: `"Pega-API-CaseManagement-AssignmentAction"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-category"></a> `category` | `"ticketing"` |
| <a id="property-channelaudiences"></a> `channelAudiences` | \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \[\{ `label`: `"Pega DX API overview"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/dx-api-overview.html"`; \}, \{ `label`: `"Pega DX API cases endpoints"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/managing-cases-dx-api.html"`; \}, \{ `label`: `"Pega DX API POST /cases"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-post-cases.html"`; \}, \{ `label`: `"Pega DX API GET /cases"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases.html"`; \}, \{ `label`: `"Pega DX API GET /cases/{ID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases-id.html"`; \}, \{ `label`: `"Pega DX API PUT /cases/{ID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-put-cases-id.html"`; \}, \{ `label`: `"Pega DX API GET /casetypes"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-casetypes_0.html"`; \}, \{ `label`: `"Pega DX API PATCH /assignments/{assignmentID}/actions/{actionID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-patch-assignments-assignmentid-actions-actionid.html"`; \}, \{ `label`: `"Pega React SDK"`; `url`: `"https://github.com/pegasystems/react-sdk"`; \}, \{ `label`: `"@pega/constellationjs package"`; `url`: `"https://www.npmjs.com/package/@pega/constellationjs"`; \}, \{ `label`: `"@pega/auth package"`; `url`: `"https://www.npmjs.com/package/@pega/auth"`; \}\]; `notes`: \[`"Runtime coverage uses the built-in Pega DX REST adapter when baseUrl plus access credentials are provided; a host-injected PegaCustomerServiceProviderClient remains available as an override."`, `"Coverage is typed for Pega Customer Service case creation, case read/update, case search/listing, case-type listing, assignment action submission, and readiness checks used by Cognidesk support workflows."`, `"This is not full Pega Customer Service or Pega Platform API coverage; broader assignments/actions lifecycle, stages/process navigation, attachments, data views/pages, bulk actions, views, refresh/validation flows, security rules, and broader application administration remain outside this adapter."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Pega DX API overview"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/dx-api-overview.html"`; \}, \{ `label`: `"Pega DX API cases endpoints"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/managing-cases-dx-api.html"`; \}, \{ `label`: `"Pega DX API POST /cases"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-post-cases.html"`; \}, \{ `label`: `"Pega DX API GET /cases"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases.html"`; \}, \{ `label`: `"Pega DX API GET /cases/{ID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-cases-id.html"`; \}, \{ `label`: `"Pega DX API PUT /cases/{ID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-put-cases-id.html"`; \}, \{ `label`: `"Pega DX API GET /casetypes"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-get-casetypes_0.html"`; \}, \{ `label`: `"Pega DX API PATCH /assignments/{assignmentID}/actions/{actionID}"`; `url`: `"https://docs.pega.com/bundle/dx-api/page/platform/dx-api/endpoint-patch-assignments-assignmentid-actions-actionid.html"`; \}, \{ `label`: `"Pega React SDK"`; `url`: `"https://github.com/pegasystems/react-sdk"`; \}, \{ `label`: `"@pega/constellationjs package"`; `url`: `"https://www.npmjs.com/package/@pega/constellationjs"`; \}, \{ `label`: `"@pega/auth package"`; `url`: `"https://www.npmjs.com/package/@pega/auth"`; \}\] |
| `coverage.notes` | \[`"Runtime coverage uses the built-in Pega DX REST adapter when baseUrl plus access credentials are provided; a host-injected PegaCustomerServiceProviderClient remains available as an override."`, `"Coverage is typed for Pega Customer Service case creation, case read/update, case search/listing, case-type listing, assignment action submission, and readiness checks used by Cognidesk support workflows."`, `"This is not full Pega Customer Service or Pega Platform API coverage; broader assignments/actions lifecycle, stages/process navigation, attachments, data views/pages, bulk actions, views, refresh/validation flows, security rules, and broader application administration remain outside this adapter."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \[\{ `description`: `"Optional host runtime override implementing PegaCustomerServiceProviderClient. When omitted, the package uses its built-in Pega DX REST adapter."`; `id`: `"pega-customer-service-provider-client"`; `label`: `"Optional Pega Customer Service provider client override"`; `metadata`: \{ `credentialOwnership`: `"host-managed-override"`; `defaultClientPolicy`: `"built-in-dx-rest-adapter"`; `defaultFetchClient`: `"built-in-provider-rest-adapter"`; `defaultHttpClient`: `"built-in-fetch"`; `injectionInterface`: `"PegaCustomerServiceProviderClient"`; \}; `required`: `false`; \}, \{ `description`: `"Pega application base URL used by the built-in DX REST adapter, or supplied by a host provider client override."`; `id`: `"pega-customer-service-instance"`; `label`: `"Pega Customer Service base URL"`; `metadata`: \{ `requiredWhen`: `"built-in-dx-rest-adapter"`; \}; `required`: `false`; \}, \{ `description`: `"Server-side Pega DX API access supplied as accessToken, auth headers, or encapsulated in a host provider client override."`; `id`: `"pega-customer-service-api-access"`; `label`: `"Pega Customer Service DX API access"`; `metadata`: \{ `privilegeGuidance`: `"These strings are Cognidesk capability labels, not official Pega OAuth scope names. Pega access depends on application OAuth/client configuration, roles, privileges, and case security."`; `requiredWhen`: `"built-in-dx-rest-adapter"`; `scopeKind`: `"internal-capability-labels"`; \}; `required`: `false`; `scopes`: \[`"cases:read"`, `"cases:write"`, `"assignments:write"`\]; \}\] |
| <a id="property-directions"></a> `directions` | \[`"bidirectional"`\] |
| <a id="property-id"></a> `id` | `"ticketing.pega-customer-service"` |
| <a id="property-limitations"></a> `limitations` | \[`"The built-in adapter covers selected Pega DX case and assignment-action operations only; hosts can still inject a PegaCustomerServiceProviderClient for custom authentication, retries, or endpoint policy."`, `"Case types, starting processes, field requirements, assignment routing, security rules, data pages, and stage transitions are owned by the SDK user's Pega application and injected provider client."`, `"SDK users own case-type selection, field mapping, handoff timing, customer identity matching, notification policy, and retention before invoking Pega provider operations."`\] |
| <a id="property-maintainers"></a> `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| <a id="property-metadata"></a> `metadata` | \{ `channelCoverage`: \{ `assignmentActions`: `"typed-rest-adapter-submit"`; `attachmentsDataPages`: `"provider-supported-not-typed"`; `broaderCaseManagementAdmin`: `"not-covered"`; `cases`: `"typed-rest-adapter-create-read-update-search"`; `caseTypes`: `"typed-rest-adapter-list"`; `readiness`: `"typed-rest-adapter-list"`; `stageLifecycleActions`: `"provider-supported-not-typed"`; \}; `checkedProviderApiCoverage`: \{ `checkedFamilyCount`: `4`; `coverageArtifact`: `"docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json"`; `gapFamilyCount`: `1`; `implementationOwnership`: `"built-in-provider-rest-adapter"`; `implementedFamilyCount`: `3`; `implementedOperationCount`: `6`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \}; `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `defaultFetchClient`: `"built-in-provider-rest-adapter"`; `defaultHttpClient`: `"built-in-fetch"`; `manifestImport`: `"no-client-initialization"`; `providerClientInterface`: `"PegaCustomerServiceProviderClient"`; `providerClientOverride`: `true`; `strategy`: `"provider-rest-adapter"`; \}; `implementationStrategy`: \{ `checkedAt`: `"2026-06-25"`; `reason`: `"No suitable official server-side JavaScript SDK was found for Pega Customer Service case operations; current Pega JavaScript SDK surfaces are Constellation UI/client orchestration assets, while DX API remains documented as REST endpoints."`; `rejectedLibraries`: readonly \[\{ `packageName`: `"@pega/constellationjs"`; `reason`: `"Pega-maintained package, but it delivers ConstellationJS engine files rather than a server-side Customer Service case client."`; `result`: `"not-used-as-package-default"`; \}, \{ `packageName`: `"@pega/auth"`; `reason`: `"Pega-maintained OAuth client infrastructure for Infinity and Launchpad, but not a typed Customer Service or DX case operations client."`; `result`: `"not-used-as-package-default"`; \}, \{ `packageName`: `"pegasystems/react-sdk"`; `reason`: `"Pega-maintained React SDK for Constellation DX components and alternative UI integration, not a backend ticketing provider client for Cognidesk operations."`; `result`: `"not-used-as-package-default"`; \}\]; `strategy`: `"no-official-sdk-rest-adapter"`; \}; `providerClient`: \{ `defaultClient`: `"built-in-dx-rest-adapter"`; `importPolicy`: `"optional-host-override"`; `injectionPolicy`: `"optional-runtime-override"`; `interface`: `"PegaCustomerServiceProviderClient"`; \}; `providerRestAdapterSupportSurface`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `checkedAt`: `"2026-06-25"`; `operations`: readonly \[\{ `alias`: `"ticket.create"`; `providerClientMethod`: `"createCase"`; \}, \{ `alias`: `"ticket.read"`; `providerClientMethod`: `"getCase"`; \}, \{ `alias`: `"ticket.update"`; `providerClientMethod`: `"updateCase"`; \}, \{ `alias`: `"ticket.search"`; `providerClientMethod`: `"searchCases"`; \}, \{ `alias`: `"pega-customer-service.caseTypes.list"`; `providerClientMethod`: `"listCaseTypes"`; \}, \{ `alias`: `"pega-customer-service.assignmentAction.submit"`; `providerClientMethod`: `"performAssignmentAction"`; \}\]; `source`: `"Built-in Pega DX REST adapter"`; \}; \} |
| `metadata.channelCoverage` | \{ `assignmentActions`: `"typed-rest-adapter-submit"`; `attachmentsDataPages`: `"provider-supported-not-typed"`; `broaderCaseManagementAdmin`: `"not-covered"`; `cases`: `"typed-rest-adapter-create-read-update-search"`; `caseTypes`: `"typed-rest-adapter-list"`; `readiness`: `"typed-rest-adapter-list"`; `stageLifecycleActions`: `"provider-supported-not-typed"`; \} |
| `metadata.channelCoverage.assignmentActions` | `"typed-rest-adapter-submit"` |
| `metadata.channelCoverage.attachmentsDataPages` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.broaderCaseManagementAdmin` | `"not-covered"` |
| `metadata.channelCoverage.cases` | `"typed-rest-adapter-create-read-update-search"` |
| `metadata.channelCoverage.caseTypes` | `"typed-rest-adapter-list"` |
| `metadata.channelCoverage.readiness` | `"typed-rest-adapter-list"` |
| `metadata.channelCoverage.stageLifecycleActions` | `"provider-supported-not-typed"` |
| `metadata.checkedProviderApiCoverage` | \{ `checkedFamilyCount`: `4`; `coverageArtifact`: `"docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json"`; `gapFamilyCount`: `1`; `implementationOwnership`: `"built-in-provider-rest-adapter"`; `implementedFamilyCount`: `3`; `implementedOperationCount`: `6`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \} |
| `metadata.checkedProviderApiCoverage.checkedFamilyCount` | `4` |
| `metadata.checkedProviderApiCoverage.coverageArtifact` | `"docs/provider-coverage/pega-customer-service-checked-dx-api-2026-06-18.inventory.json"` |
| `metadata.checkedProviderApiCoverage.gapFamilyCount` | `1` |
| `metadata.checkedProviderApiCoverage.implementationOwnership` | `"built-in-provider-rest-adapter"` |
| `metadata.checkedProviderApiCoverage.implementedFamilyCount` | `3` |
| `metadata.checkedProviderApiCoverage.implementedOperationCount` | `6` |
| `metadata.checkedProviderApiCoverage.sourceKind` | `"checked-endpoint-family-inventory"` |
| `metadata.checkedProviderApiCoverage.verifiedAt` | `"2026-06-18"` |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `defaultFetchClient`: `"built-in-provider-rest-adapter"`; `defaultHttpClient`: `"built-in-fetch"`; `manifestImport`: `"no-client-initialization"`; `providerClientInterface`: `"PegaCustomerServiceProviderClient"`; `providerClientOverride`: `true`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.defaultFetchClient` | `"built-in-provider-rest-adapter"` |
| `metadata.implementation.defaultHttpClient` | `"built-in-fetch"` |
| `metadata.implementation.manifestImport` | `"no-client-initialization"` |
| `metadata.implementation.providerClientInterface` | `"PegaCustomerServiceProviderClient"` |
| `metadata.implementation.providerClientOverride` | `true` |
| `metadata.implementation.strategy` | `"provider-rest-adapter"` |
| `metadata.implementationStrategy` | \{ `checkedAt`: `"2026-06-25"`; `reason`: `"No suitable official server-side JavaScript SDK was found for Pega Customer Service case operations; current Pega JavaScript SDK surfaces are Constellation UI/client orchestration assets, while DX API remains documented as REST endpoints."`; `rejectedLibraries`: readonly \[\{ `packageName`: `"@pega/constellationjs"`; `reason`: `"Pega-maintained package, but it delivers ConstellationJS engine files rather than a server-side Customer Service case client."`; `result`: `"not-used-as-package-default"`; \}, \{ `packageName`: `"@pega/auth"`; `reason`: `"Pega-maintained OAuth client infrastructure for Infinity and Launchpad, but not a typed Customer Service or DX case operations client."`; `result`: `"not-used-as-package-default"`; \}, \{ `packageName`: `"pegasystems/react-sdk"`; `reason`: `"Pega-maintained React SDK for Constellation DX components and alternative UI integration, not a backend ticketing provider client for Cognidesk operations."`; `result`: `"not-used-as-package-default"`; \}\]; `strategy`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.implementationStrategy.checkedAt` | `"2026-06-25"` |
| `metadata.implementationStrategy.reason` | `"No suitable official server-side JavaScript SDK was found for Pega Customer Service case operations; current Pega JavaScript SDK surfaces are Constellation UI/client orchestration assets, while DX API remains documented as REST endpoints."` |
| `metadata.implementationStrategy.rejectedLibraries` | readonly \[\{ `packageName`: `"@pega/constellationjs"`; `reason`: `"Pega-maintained package, but it delivers ConstellationJS engine files rather than a server-side Customer Service case client."`; `result`: `"not-used-as-package-default"`; \}, \{ `packageName`: `"@pega/auth"`; `reason`: `"Pega-maintained OAuth client infrastructure for Infinity and Launchpad, but not a typed Customer Service or DX case operations client."`; `result`: `"not-used-as-package-default"`; \}, \{ `packageName`: `"pegasystems/react-sdk"`; `reason`: `"Pega-maintained React SDK for Constellation DX components and alternative UI integration, not a backend ticketing provider client for Cognidesk operations."`; `result`: `"not-used-as-package-default"`; \}\] |
| `metadata.implementationStrategy.strategy` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerClient` | \{ `defaultClient`: `"built-in-dx-rest-adapter"`; `importPolicy`: `"optional-host-override"`; `injectionPolicy`: `"optional-runtime-override"`; `interface`: `"PegaCustomerServiceProviderClient"`; \} |
| `metadata.providerClient.defaultClient` | `"built-in-dx-rest-adapter"` |
| `metadata.providerClient.importPolicy` | `"optional-host-override"` |
| `metadata.providerClient.injectionPolicy` | `"optional-runtime-override"` |
| `metadata.providerClient.interface` | `"PegaCustomerServiceProviderClient"` |
| `metadata.providerRestAdapterSupportSurface` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `checkedAt`: `"2026-06-25"`; `operations`: readonly \[\{ `alias`: `"ticket.create"`; `providerClientMethod`: `"createCase"`; \}, \{ `alias`: `"ticket.read"`; `providerClientMethod`: `"getCase"`; \}, \{ `alias`: `"ticket.update"`; `providerClientMethod`: `"updateCase"`; \}, \{ `alias`: `"ticket.search"`; `providerClientMethod`: `"searchCases"`; \}, \{ `alias`: `"pega-customer-service.caseTypes.list"`; `providerClientMethod`: `"listCaseTypes"`; \}, \{ `alias`: `"pega-customer-service.assignmentAction.submit"`; `providerClientMethod`: `"performAssignmentAction"`; \}\]; `source`: `"Built-in Pega DX REST adapter"`; \} |
| `metadata.providerRestAdapterSupportSurface.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapterSupportSurface.checkedAt` | `"2026-06-25"` |
| `metadata.providerRestAdapterSupportSurface.operations` | readonly \[\{ `alias`: `"ticket.create"`; `providerClientMethod`: `"createCase"`; \}, \{ `alias`: `"ticket.read"`; `providerClientMethod`: `"getCase"`; \}, \{ `alias`: `"ticket.update"`; `providerClientMethod`: `"updateCase"`; \}, \{ `alias`: `"ticket.search"`; `providerClientMethod`: `"searchCases"`; \}, \{ `alias`: `"pega-customer-service.caseTypes.list"`; `providerClientMethod`: `"listCaseTypes"`; \}, \{ `alias`: `"pega-customer-service.assignmentAction.submit"`; `providerClientMethod`: `"performAssignmentAction"`; \}\] |
| `metadata.providerRestAdapterSupportSurface.source` | `"Built-in Pega DX REST adapter"` |
| <a id="property-name"></a> `name` | `"Pega Customer Service"` |
| <a id="property-operations"></a> `operations` | \[\{ `alias`: `"ticket.create"`; `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"pegaCase"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.read"`; `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"pegaCase"`; `requiresCredential`: `true`; \}, \{ `alias`: `"ticket.update"`; `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"pegaCase"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"ticket.search"`; `audiences`: \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"pegaCase"`; `requiresCredential`: `true`; \}, \{ `alias`: `"pega-customer-service.caseTypes.list"`; `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"pegaCaseType"`; `requiresCredential`: `true`; \}, \{ `alias`: `"pega-customer-service.assignmentAction.submit"`; `audiences`: \[`"internal-support"`, `"mixed"`\]; `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"pegaAssignmentAction"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| <a id="property-packagename"></a> `packageName` | `"@cognidesk/integration-ticketing-pega-customer-service"` |
| <a id="property-privacynotes"></a> `privacyNotes` | \[`"Pega cases can contain customer identity, interaction details, assignments, statuses, case data, attachments metadata, and internal workflow context."`, `"Pega API credentials stay server-side and Studio receives only readiness and scope status."`\] |
| <a id="property-provider"></a> `provider` | `"pega-customer-service"` |
| <a id="property-trustlevel"></a> `trustLevel` | `"official"` |
