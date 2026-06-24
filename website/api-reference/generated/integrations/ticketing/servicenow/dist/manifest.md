# integrations/ticketing/servicenow/dist/manifest

## Variables

### serviceNowTicketingProviderManifest

```ts
const serviceNowTicketingProviderManifest: {
  capabilities: {
     audiences?: ("internal-support" | "mixed" | "customer-facing")[];
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
  channelAudiences: ("internal-support" | "mixed" | "customer-facing")[];
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
     audience?: "internal-support" | "mixed" | "customer-facing";
     audiences?: ("internal-support" | "mixed" | "customer-facing")[];
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
     audiences: readonly ["internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates SDK-user-selected ServiceNow Table API records such as incidents or cases; generic table names are SDK-owned schema plumbing, not generated per-table coverage.";
     label: "Create ServiceNow records";
     providerObjects: readonly [{
        kind: "servicenowRecord";
        label: "ServiceNow Record";
      }, {
        kind: "servicenowIncident";
        label: "ServiceNow Incident";
        schemaName: "incident";
      }, {
        kind: "servicenowAttachment";
        label: "ServiceNow Attachment";
      }, {
        kind: "servicenowImportSetRecord";
        label: "ServiceNow Import Set Record";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads ServiceNow Table API records by table and sys_id.";
     exposesSensitiveData: true;
     label: "Read ServiceNow records";
     providerObjects: readonly [{
        kind: "servicenowRecord";
        label: "ServiceNow Record";
      }, {
        kind: "servicenowAttachment";
        label: "ServiceNow Attachment";
      }, {
        kind: "servicenowImportSetRecord";
        label: "ServiceNow Import Set Record";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates ServiceNow Table API records such as incidents, comments, state, or assignment fields.";
     exposesSensitiveData: true;
     label: "Update ServiceNow records";
     providerObjects: readonly [{
        kind: "servicenowRecord";
        label: "ServiceNow Record";
      }, {
        kind: "servicenowIncident";
        label: "ServiceNow Incident";
        schemaName: "incident";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Queries ServiceNow Table API records with SDK-user-supplied sysparm_query and field constraints.";
     exposesSensitiveData: true;
     label: "Search ServiceNow records";
     providerObjects: readonly [{
        kind: "servicenowRecord";
        label: "ServiceNow Record";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     description: "Provides Table API incident, attachment, and import-set operations used by SDK-user-configured record handoff workflows; this is not native Virtual Agent or Live Agent Chat transfer coverage.";
     label: "Attach record handoff to ServiceNow";
     providerObjects: readonly [{
        kind: "servicenowIncident";
        label: "ServiceNow Incident";
        schemaName: "incident";
      }, {
        kind: "servicenowAttachment";
        label: "ServiceNow Attachment";
      }, {
        kind: "servicenowImportSetRecord";
        label: "ServiceNow Import Set Record";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: readonly ["internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "ServiceNow Table API";
        url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_TableAPI.html";
      }, {
        label: "ServiceNow Attachment API";
        url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_AttachmentAPI.html";
      }, {
        label: "ServiceNow Import Set API";
        url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_ImportSetAPI.html";
      }, {
        label: "ServiceNow Virtual Agent API";
        url: "https://www.servicenow.com/docs/r/conversational-interfaces/virtual-agent/virtual-agent-api-landing-page.html";
      }, {
        label: "ServiceNow Virtual Agent Bot Integration API";
        url: "https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/bot-api.html";
      }, {
        label: "ServiceNow Virtual Agent API features";
        url: "https://www.servicenow.com/docs/r/yokohama/conversational-interfaces/virtual-agent/va-api-features.html";
     }];
     notes: readonly ["Coverage is limited to ServiceNow Table API record create/read/update/search, incident creation, Attachment API upload/list, Import Set insert/read, and readiness checks used by Cognidesk support workflows.", "Generic Table API helpers accept SDK-user-selected table names and fields, but they are not customer-specific generated schema coverage for arbitrary tables, custom fields, ACLs, business rules, or plugins.", "This is not full ServiceNow platform API coverage for Service Catalog/cart, journal-field semantics, attachment download/delete, transform-map lifecycle, scripted REST APIs, workflow APIs, or broader platform administration."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "The SDK user's ServiceNow instance URL, for example https://example.service-now.com.";
     id: "servicenow-instance";
     label: "ServiceNow instance URL";
     required: true;
   }, {
     description: "Server-side Basic Auth or OAuth bearer access for ServiceNow REST APIs; effective access is governed by ServiceNow roles, ACLs, table access, and any tenant REST API Auth Scopes.";
     id: "servicenow-api-access";
     label: "ServiceNow API access";
     metadata: {
        privilegeGuidance: "The table_api value is Cognidesk capability guidance, not a universal ServiceNow OAuth scope. The credential must be authorized for Table API, Attachment API, Import Set API, and configured target tables.";
        scopeKind: "internal-capability-labels";
     };
     required: true;
     scopes: readonly ["table_api"];
  }];
  directions: readonly ["bidirectional"];
  id: "ticketing.servicenow";
  limitations: readonly ["Available tables, fields, ACLs, business rules, and mandatory fields are owned by the SDK user's ServiceNow instance.", "Handoff timing, approval, field mapping, assignment, and customer visibility are SDK-user configuration."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        arbitraryTableTyping: "not-covered";
        attachmentDownloadDelete: "provider-supported-not-implemented";
        attachments: "typed-upload-list";
        catalogWorkflowScriptedRest: "provider-supported-not-implemented";
        cccifCustomChatIntegration: "provider-supported-not-typed";
        connectConversationScopedApi: "provider-supported-not-typed";
        csmCaseApi: "provider-supported-not-typed";
        genericTableApi: "sdk-owned-classified-endpoint";
        importSets: "typed-json-create-read";
        incidents: "typed-create-comment-worknote";
        liveAgentTransfer: "provider-supported-not-typed";
        readinessSearch: "typed-search";
        tableRecords: "typed-json-create-read-update-search";
        taskTableRecords: "provider-supported-not-typed";
        virtualAgentApi: "provider-supported-not-typed";
        virtualAgentBotIntegrationApi: "provider-supported-not-typed";
     };
     checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/servicenow-checked-table-attachment-importset-2026-06-18.inventory.json";
        familyCount: 4;
        fullCoverageExportRequirement: "Full instance-specific ServiceNow coverage requires REST API Explorer/OpenAPI export for enabled APIs, table dictionary export, plugin/product inventory, ACL/role evidence, and scripted REST definitions from the SDK user's instance.";
        gapFamilyCount: 1;
        implementedFamilyCount: 3;
        implementedOperationCount: 11;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     implementation: {
        manifestImport: "no-sdk-client-initialization";
        runtimePackage: "@cognidesk/integration-ticketing-servicenow";
        strategy: "direct-http-support-slice";
     };
  };
  name: "ServiceNow Ticketing";
  packageName: "@cognidesk/integration-ticketing-servicenow";
  privacyNotes: readonly ["ServiceNow records can contain customer data, support notes, internal assignment data, and attached workflow context.", "ServiceNow credentials stay server-side and are never exposed through Studio credential status."];
  provider: "servicenow";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"internal-support"` \| `"mixed"` \| `"customer-facing"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"internal-support"` \| `"mixed"` \| `"customer-facing"`)[] |
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
| `operations` | \{ `alias`: `string`; `audience?`: `"internal-support"` \| `"mixed"` \| `"customer-facing"`; `audiences?`: (`"internal-support"` \| `"mixed"` \| `"customer-facing"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates SDK-user-selected ServiceNow Table API records such as incidents or cases; generic table names are SDK-owned schema plumbing, not generated per-table coverage."`; `label`: `"Create ServiceNow records"`; `providerObjects`: readonly \[\{ `kind`: `"servicenowRecord"`; `label`: `"ServiceNow Record"`; \}, \{ `kind`: `"servicenowIncident"`; `label`: `"ServiceNow Incident"`; `schemaName`: `"incident"`; \}, \{ `kind`: `"servicenowAttachment"`; `label`: `"ServiceNow Attachment"`; \}, \{ `kind`: `"servicenowImportSetRecord"`; `label`: `"ServiceNow Import Set Record"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads ServiceNow Table API records by table and sys_id."`; `exposesSensitiveData`: `true`; `label`: `"Read ServiceNow records"`; `providerObjects`: readonly \[\{ `kind`: `"servicenowRecord"`; `label`: `"ServiceNow Record"`; \}, \{ `kind`: `"servicenowAttachment"`; `label`: `"ServiceNow Attachment"`; \}, \{ `kind`: `"servicenowImportSetRecord"`; `label`: `"ServiceNow Import Set Record"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates ServiceNow Table API records such as incidents, comments, state, or assignment fields."`; `exposesSensitiveData`: `true`; `label`: `"Update ServiceNow records"`; `providerObjects`: readonly \[\{ `kind`: `"servicenowRecord"`; `label`: `"ServiceNow Record"`; \}, \{ `kind`: `"servicenowIncident"`; `label`: `"ServiceNow Incident"`; `schemaName`: `"incident"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Queries ServiceNow Table API records with SDK-user-supplied sysparm_query and field constraints."`; `exposesSensitiveData`: `true`; `label`: `"Search ServiceNow records"`; `providerObjects`: readonly \[\{ `kind`: `"servicenowRecord"`; `label`: `"ServiceNow Record"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"handoff"`; `changesWorkflow`: `true`; `description`: `"Provides Table API incident, attachment, and import-set operations used by SDK-user-configured record handoff workflows; this is not native Virtual Agent or Live Agent Chat transfer coverage."`; `label`: `"Attach record handoff to ServiceNow"`; `providerObjects`: readonly \[\{ `kind`: `"servicenowIncident"`; `label`: `"ServiceNow Incident"`; `schemaName`: `"incident"`; \}, \{ `kind`: `"servicenowAttachment"`; `label`: `"ServiceNow Attachment"`; \}, \{ `kind`: `"servicenowImportSetRecord"`; `label`: `"ServiceNow Import Set Record"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | readonly \[`"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"ServiceNow Table API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_TableAPI.html"`; \}, \{ `label`: `"ServiceNow Attachment API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_AttachmentAPI.html"`; \}, \{ `label`: `"ServiceNow Import Set API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_ImportSetAPI.html"`; \}, \{ `label`: `"ServiceNow Virtual Agent API"`; `url`: `"https://www.servicenow.com/docs/r/conversational-interfaces/virtual-agent/virtual-agent-api-landing-page.html"`; \}, \{ `label`: `"ServiceNow Virtual Agent Bot Integration API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/bot-api.html"`; \}, \{ `label`: `"ServiceNow Virtual Agent API features"`; `url`: `"https://www.servicenow.com/docs/r/yokohama/conversational-interfaces/virtual-agent/va-api-features.html"`; \}\]; `notes`: readonly \[`"Coverage is limited to ServiceNow Table API record create/read/update/search, incident creation, Attachment API upload/list, Import Set insert/read, and readiness checks used by Cognidesk support workflows."`, `"Generic Table API helpers accept SDK-user-selected table names and fields, but they are not customer-specific generated schema coverage for arbitrary tables, custom fields, ACLs, business rules, or plugins."`, `"This is not full ServiceNow platform API coverage for Service Catalog/cart, journal-field semantics, attachment download/delete, transform-map lifecycle, scripted REST APIs, workflow APIs, or broader platform administration."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"ServiceNow Table API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_TableAPI.html"`; \}, \{ `label`: `"ServiceNow Attachment API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_AttachmentAPI.html"`; \}, \{ `label`: `"ServiceNow Import Set API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_ImportSetAPI.html"`; \}, \{ `label`: `"ServiceNow Virtual Agent API"`; `url`: `"https://www.servicenow.com/docs/r/conversational-interfaces/virtual-agent/virtual-agent-api-landing-page.html"`; \}, \{ `label`: `"ServiceNow Virtual Agent Bot Integration API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/bot-api.html"`; \}, \{ `label`: `"ServiceNow Virtual Agent API features"`; `url`: `"https://www.servicenow.com/docs/r/yokohama/conversational-interfaces/virtual-agent/va-api-features.html"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is limited to ServiceNow Table API record create/read/update/search, incident creation, Attachment API upload/list, Import Set insert/read, and readiness checks used by Cognidesk support workflows."`, `"Generic Table API helpers accept SDK-user-selected table names and fields, but they are not customer-specific generated schema coverage for arbitrary tables, custom fields, ACLs, business rules, or plugins."`, `"This is not full ServiceNow platform API coverage for Service Catalog/cart, journal-field semantics, attachment download/delete, transform-map lifecycle, scripted REST APIs, workflow APIs, or broader platform administration."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"The SDK user's ServiceNow instance URL, for example https://example.service-now.com."`; `id`: `"servicenow-instance"`; `label`: `"ServiceNow instance URL"`; `required`: `true`; \}, \{ `description`: `"Server-side Basic Auth or OAuth bearer access for ServiceNow REST APIs; effective access is governed by ServiceNow roles, ACLs, table access, and any tenant REST API Auth Scopes."`; `id`: `"servicenow-api-access"`; `label`: `"ServiceNow API access"`; `metadata`: \{ `privilegeGuidance`: `"The table_api value is Cognidesk capability guidance, not a universal ServiceNow OAuth scope. The credential must be authorized for Table API, Attachment API, Import Set API, and configured target tables."`; `scopeKind`: `"internal-capability-labels"`; \}; `required`: `true`; `scopes`: readonly \[`"table_api"`\]; \}\] |
| `directions` | readonly \[`"bidirectional"`\] |
| `id` | `"ticketing.servicenow"` |
| `limitations` | readonly \[`"Available tables, fields, ACLs, business rules, and mandatory fields are owned by the SDK user's ServiceNow instance."`, `"Handoff timing, approval, field mapping, assignment, and customer visibility are SDK-user configuration."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `arbitraryTableTyping`: `"not-covered"`; `attachmentDownloadDelete`: `"provider-supported-not-implemented"`; `attachments`: `"typed-upload-list"`; `catalogWorkflowScriptedRest`: `"provider-supported-not-implemented"`; `cccifCustomChatIntegration`: `"provider-supported-not-typed"`; `connectConversationScopedApi`: `"provider-supported-not-typed"`; `csmCaseApi`: `"provider-supported-not-typed"`; `genericTableApi`: `"sdk-owned-classified-endpoint"`; `importSets`: `"typed-json-create-read"`; `incidents`: `"typed-create-comment-worknote"`; `liveAgentTransfer`: `"provider-supported-not-typed"`; `readinessSearch`: `"typed-search"`; `tableRecords`: `"typed-json-create-read-update-search"`; `taskTableRecords`: `"provider-supported-not-typed"`; `virtualAgentApi`: `"provider-supported-not-typed"`; `virtualAgentBotIntegrationApi`: `"provider-supported-not-typed"`; \}; `checkedProviderApiCoverage`: \{ `coverageArtifact`: `"docs/provider-coverage/servicenow-checked-table-attachment-importset-2026-06-18.inventory.json"`; `familyCount`: `4`; `fullCoverageExportRequirement`: `"Full instance-specific ServiceNow coverage requires REST API Explorer/OpenAPI export for enabled APIs, table dictionary export, plugin/product inventory, ACL/role evidence, and scripted REST definitions from the SDK user's instance."`; `gapFamilyCount`: `1`; `implementedFamilyCount`: `3`; `implementedOperationCount`: `11`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \}; `implementation`: \{ `manifestImport`: `"no-sdk-client-initialization"`; `runtimePackage`: `"@cognidesk/integration-ticketing-servicenow"`; `strategy`: `"direct-http-support-slice"`; \}; \} |
| `metadata.channelCoverage` | \{ `arbitraryTableTyping`: `"not-covered"`; `attachmentDownloadDelete`: `"provider-supported-not-implemented"`; `attachments`: `"typed-upload-list"`; `catalogWorkflowScriptedRest`: `"provider-supported-not-implemented"`; `cccifCustomChatIntegration`: `"provider-supported-not-typed"`; `connectConversationScopedApi`: `"provider-supported-not-typed"`; `csmCaseApi`: `"provider-supported-not-typed"`; `genericTableApi`: `"sdk-owned-classified-endpoint"`; `importSets`: `"typed-json-create-read"`; `incidents`: `"typed-create-comment-worknote"`; `liveAgentTransfer`: `"provider-supported-not-typed"`; `readinessSearch`: `"typed-search"`; `tableRecords`: `"typed-json-create-read-update-search"`; `taskTableRecords`: `"provider-supported-not-typed"`; `virtualAgentApi`: `"provider-supported-not-typed"`; `virtualAgentBotIntegrationApi`: `"provider-supported-not-typed"`; \} |
| `metadata.channelCoverage.arbitraryTableTyping` | `"not-covered"` |
| `metadata.channelCoverage.attachmentDownloadDelete` | `"provider-supported-not-implemented"` |
| `metadata.channelCoverage.attachments` | `"typed-upload-list"` |
| `metadata.channelCoverage.catalogWorkflowScriptedRest` | `"provider-supported-not-implemented"` |
| `metadata.channelCoverage.cccifCustomChatIntegration` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.connectConversationScopedApi` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.csmCaseApi` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.genericTableApi` | `"sdk-owned-classified-endpoint"` |
| `metadata.channelCoverage.importSets` | `"typed-json-create-read"` |
| `metadata.channelCoverage.incidents` | `"typed-create-comment-worknote"` |
| `metadata.channelCoverage.liveAgentTransfer` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.readinessSearch` | `"typed-search"` |
| `metadata.channelCoverage.tableRecords` | `"typed-json-create-read-update-search"` |
| `metadata.channelCoverage.taskTableRecords` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.virtualAgentApi` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.virtualAgentBotIntegrationApi` | `"provider-supported-not-typed"` |
| `metadata.checkedProviderApiCoverage` | \{ `coverageArtifact`: `"docs/provider-coverage/servicenow-checked-table-attachment-importset-2026-06-18.inventory.json"`; `familyCount`: `4`; `fullCoverageExportRequirement`: `"Full instance-specific ServiceNow coverage requires REST API Explorer/OpenAPI export for enabled APIs, table dictionary export, plugin/product inventory, ACL/role evidence, and scripted REST definitions from the SDK user's instance."`; `gapFamilyCount`: `1`; `implementedFamilyCount`: `3`; `implementedOperationCount`: `11`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \} |
| `metadata.checkedProviderApiCoverage.coverageArtifact` | `"docs/provider-coverage/servicenow-checked-table-attachment-importset-2026-06-18.inventory.json"` |
| `metadata.checkedProviderApiCoverage.familyCount` | `4` |
| `metadata.checkedProviderApiCoverage.fullCoverageExportRequirement` | `"Full instance-specific ServiceNow coverage requires REST API Explorer/OpenAPI export for enabled APIs, table dictionary export, plugin/product inventory, ACL/role evidence, and scripted REST definitions from the SDK user's instance."` |
| `metadata.checkedProviderApiCoverage.gapFamilyCount` | `1` |
| `metadata.checkedProviderApiCoverage.implementedFamilyCount` | `3` |
| `metadata.checkedProviderApiCoverage.implementedOperationCount` | `11` |
| `metadata.checkedProviderApiCoverage.sourceKind` | `"checked-endpoint-family-inventory"` |
| `metadata.checkedProviderApiCoverage.verifiedAt` | `"2026-06-18"` |
| `metadata.implementation` | \{ `manifestImport`: `"no-sdk-client-initialization"`; `runtimePackage`: `"@cognidesk/integration-ticketing-servicenow"`; `strategy`: `"direct-http-support-slice"`; \} |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.runtimePackage` | `"@cognidesk/integration-ticketing-servicenow"` |
| `metadata.implementation.strategy` | `"direct-http-support-slice"` |
| `name` | `"ServiceNow Ticketing"` |
| `packageName` | `"@cognidesk/integration-ticketing-servicenow"` |
| `privacyNotes` | readonly \[`"ServiceNow records can contain customer data, support notes, internal assignment data, and attached workflow context."`, `"ServiceNow credentials stay server-side and are never exposed through Studio credential status."`\] |
| `provider` | `"servicenow"` |
| `trustLevel` | `"official"` |
