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
     audiences: readonly ["mixed"];
     capability: "send";
     changesWorkflow: true;
     description: "Posts customer-visible comments to ServiceNow incident records.";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send customer-visible updates";
     providerObjects: readonly [{
        kind: "servicenowIncident";
        label: "ServiceNow Incident";
        schemaName: "incident";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "draft";
     changesWorkflow: true;
     description: "Creates internal work notes on ServiceNow incident records.";
     exposesSensitiveData: true;
     externallyVisible: false;
     label: "Create internal notes";
     providerObjects: readonly [{
        kind: "servicenowIncident";
        label: "ServiceNow Incident";
        schemaName: "incident";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "attach";
     description: "Uploads attachments to ServiceNow records.";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Attach files to ServiceNow records";
     providerObjects: readonly [{
        kind: "servicenowAttachment";
        label: "ServiceNow Attachment";
     }];
     requiresCredential: true;
     sideEffect: true;
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
     notes: readonly ["Coverage is limited to ServiceNow Table API record create/read/update/search, incident creation, Attachment API upload/list, Import Set insert/read, and readiness checks used by Cognidesk support workflows.", "Implementation uses the official @servicenow/sdk-api Connector when instanceUrl/baseUrl and OAuth bearer credentials are configured, with ServiceNowRawClient injection as an override for host-owned transports.", "Generic Table API helpers accept SDK-user-selected table names and fields, but they are not customer-specific generated schema coverage for arbitrary tables, custom fields, ACLs, business rules, or plugins.", "This is not full ServiceNow platform API coverage for Service Catalog/cart, journal-field semantics, attachment download/delete, transform-map lifecycle, scripted REST APIs, workflow APIs, or broader platform administration."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "The SDK user's ServiceNow instance URL for the built-in official @servicenow/sdk-api Connector transport, for example https://example.service-now.com. Not required when the host injects a ServiceNowRawClient.";
     id: "servicenow-instance";
     label: "ServiceNow instance URL";
     metadata: {
        requiredWhen: "built-in-servicenow-sdk-connector";
     };
     required: false;
   }, {
     description: "Server-side OAuth bearer access for the built-in official @servicenow/sdk-api Connector transport; effective access is governed by ServiceNow roles, ACLs, table access, and any tenant REST API Auth Scopes. Use ServiceNowRawClient injection for other tenant-auth transports.";
     id: "servicenow-api-access";
     label: "ServiceNow API access";
     metadata: {
        privilegeGuidance: "The table_api value is Cognidesk capability guidance, not a universal ServiceNow OAuth scope. The credential must be authorized for Table API, Attachment API, Import Set API, and configured target tables.";
        requiredWhen: "built-in-servicenow-sdk-connector";
        scopeKind: "internal-capability-labels";
     };
     required: false;
     scopes: readonly ["table_api"];
   }, {
     description: "Optional ServiceNowRawClient override supplied by the host application. When configured, Cognidesk delegates operations to that client instead of constructing the built-in @servicenow/sdk-api Connector transport.";
     id: "servicenow-raw-client";
     label: "Host-provided ServiceNow raw client";
     metadata: {
        clientInterface: "ServiceNowRawClient";
        credentialKind: "host-client-override";
        satisfies: readonly ["servicenow-instance", "servicenow-api-access"];
     };
     required: false;
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
     checkedProviderSdk: {
        checkedVersion: "4.8.0";
        license: "MIT";
        package: "@servicenow/sdk-api";
        reason: "OAuth default runtime uses Connector.fetch for create/read/update/attachment/import-set calls and Connector.queryTable for compatible table search calls. Non-OAuth tenant-auth transports must be supplied through ServiceNowRawClient injection instead of a package-owned REST fallback.";
        result: "used-as-runtime-connector";
     };
     implementation: {
        defaultClientPolicy: "use-official-servicenow-sdk-api-connector-for-oauth-runtime-transport; require ServiceNowRawClient injection for non-OAuth tenant-auth transports";
        manifestImport: "no-sdk-client-initialization";
        packageOwnedRestClient: false;
        rawClientEscapeHatch: "ServiceNowTicketingClient.rawClient";
        rawClientOverride: true;
        runtimePackage: "@cognidesk/integration-ticketing-servicenow";
        sdkPackage: "@servicenow/sdk-api";
        sdkRuntimeSurface: "Connector.fetch and Connector.queryTable";
        strategy: "official-sdk-connector";
     };
     sdkDecision: {
        checkedAt: "2026-06-25";
        checkedVersion: "4.8.0";
        license: "MIT";
        package: "@servicenow/sdk-api";
        reason: "The official ServiceNow SDK API exports Connector.fetch and Connector.queryTable as runtime instance transport. It does not provide a ticketing-specific Table/Attachment/Import Set client, so Cognidesk translates ticketing operations into the official connector transport and retains typed rawClient injection for host-owned clients.";
        result: "official-sdk-runtime-connector-not-ticketing-client";
     };
  };
  name: "ServiceNow Ticketing";
  operations: (
     | {
     alias: string;
     audiences: ("internal-support" | "mixed")[];
     capability: string;
     changesWorkflow: true;
     description: string;
     exposesSensitiveData: true;
     extension?: never;
     externallyVisible?: never;
     label: string;
     providerObject: string;
     providerOperation: string;
     requiresApproval?: never;
     requiresCredential: true;
     sideEffect: true;
   }
     | {
     alias: string;
     audiences: ("internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: never;
     description: string;
     exposesSensitiveData: true;
     extension?: never;
     externallyVisible?: never;
     label: string;
     providerObject: string;
     providerOperation: string;
     requiresApproval?: never;
     requiresCredential: true;
     sideEffect?: never;
   }
     | {
     alias: string;
     audiences: "mixed"[];
     capability: string;
     changesWorkflow: true;
     description: string;
     exposesSensitiveData: true;
     extension?: never;
     externallyVisible: true;
     label: string;
     providerObject: string;
     providerOperation: string;
     requiresApproval: true;
     requiresCredential: true;
     sideEffect: true;
   }
     | {
     alias: string;
     audiences: ("internal-support" | "mixed")[];
     capability: string;
     changesWorkflow: true;
     description: string;
     exposesSensitiveData: true;
     extension?: never;
     externallyVisible: false;
     label: string;
     providerObject: string;
     providerOperation: string;
     requiresApproval?: never;
     requiresCredential: true;
     sideEffect: true;
   }
     | {
     alias: string;
     audiences: ("internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: never;
     description: string;
     exposesSensitiveData: true;
     extension?: never;
     externallyVisible: true;
     label: string;
     providerObject: string;
     providerOperation: string;
     requiresApproval?: never;
     requiresCredential: true;
     sideEffect: true;
   }
     | {
     alias: string;
     audiences: ("internal-support" | "mixed")[];
     capability: string;
     changesWorkflow: true;
     description: string;
     exposesSensitiveData: true;
     extension: true;
     externallyVisible?: never;
     label: string;
     providerObject: string;
     providerOperation: string;
     requiresApproval?: never;
     requiresCredential: true;
     sideEffect: true;
   }
     | {
     alias: string;
     audiences: ("internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: never;
     description: string;
     exposesSensitiveData: true;
     extension: true;
     externallyVisible?: never;
     label: string;
     providerObject: string;
     providerOperation: string;
     requiresApproval?: never;
     requiresCredential: true;
     sideEffect?: never;
  })[];
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates SDK-user-selected ServiceNow Table API records such as incidents or cases; generic table names are SDK-owned schema plumbing, not generated per-table coverage."`; `label`: `"Create ServiceNow records"`; `providerObjects`: readonly \[\{ `kind`: `"servicenowRecord"`; `label`: `"ServiceNow Record"`; \}, \{ `kind`: `"servicenowIncident"`; `label`: `"ServiceNow Incident"`; `schemaName`: `"incident"`; \}, \{ `kind`: `"servicenowAttachment"`; `label`: `"ServiceNow Attachment"`; \}, \{ `kind`: `"servicenowImportSetRecord"`; `label`: `"ServiceNow Import Set Record"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads ServiceNow Table API records by table and sys_id."`; `exposesSensitiveData`: `true`; `label`: `"Read ServiceNow records"`; `providerObjects`: readonly \[\{ `kind`: `"servicenowRecord"`; `label`: `"ServiceNow Record"`; \}, \{ `kind`: `"servicenowAttachment"`; `label`: `"ServiceNow Attachment"`; \}, \{ `kind`: `"servicenowImportSetRecord"`; `label`: `"ServiceNow Import Set Record"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates ServiceNow Table API records such as incidents, comments, state, or assignment fields."`; `exposesSensitiveData`: `true`; `label`: `"Update ServiceNow records"`; `providerObjects`: readonly \[\{ `kind`: `"servicenowRecord"`; `label`: `"ServiceNow Record"`; \}, \{ `kind`: `"servicenowIncident"`; `label`: `"ServiceNow Incident"`; `schemaName`: `"incident"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Queries ServiceNow Table API records with SDK-user-supplied sysparm_query and field constraints."`; `exposesSensitiveData`: `true`; `label`: `"Search ServiceNow records"`; `providerObjects`: readonly \[\{ `kind`: `"servicenowRecord"`; `label`: `"ServiceNow Record"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"mixed"`\]; `capability`: `"send"`; `changesWorkflow`: `true`; `description`: `"Posts customer-visible comments to ServiceNow incident records."`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Send customer-visible updates"`; `providerObjects`: readonly \[\{ `kind`: `"servicenowIncident"`; `label`: `"ServiceNow Incident"`; `schemaName`: `"incident"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"draft"`; `changesWorkflow`: `true`; `description`: `"Creates internal work notes on ServiceNow incident records."`; `exposesSensitiveData`: `true`; `externallyVisible`: `false`; `label`: `"Create internal notes"`; `providerObjects`: readonly \[\{ `kind`: `"servicenowIncident"`; `label`: `"ServiceNow Incident"`; `schemaName`: `"incident"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"attach"`; `description`: `"Uploads attachments to ServiceNow records."`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Attach files to ServiceNow records"`; `providerObjects`: readonly \[\{ `kind`: `"servicenowAttachment"`; `label`: `"ServiceNow Attachment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"handoff"`; `changesWorkflow`: `true`; `description`: `"Provides Table API incident, attachment, and import-set operations used by SDK-user-configured record handoff workflows; this is not native Virtual Agent or Live Agent Chat transfer coverage."`; `label`: `"Attach record handoff to ServiceNow"`; `providerObjects`: readonly \[\{ `kind`: `"servicenowIncident"`; `label`: `"ServiceNow Incident"`; `schemaName`: `"incident"`; \}, \{ `kind`: `"servicenowAttachment"`; `label`: `"ServiceNow Attachment"`; \}, \{ `kind`: `"servicenowImportSetRecord"`; `label`: `"ServiceNow Import Set Record"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | readonly \[`"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"ServiceNow Table API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_TableAPI.html"`; \}, \{ `label`: `"ServiceNow Attachment API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_AttachmentAPI.html"`; \}, \{ `label`: `"ServiceNow Import Set API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_ImportSetAPI.html"`; \}, \{ `label`: `"ServiceNow Virtual Agent API"`; `url`: `"https://www.servicenow.com/docs/r/conversational-interfaces/virtual-agent/virtual-agent-api-landing-page.html"`; \}, \{ `label`: `"ServiceNow Virtual Agent Bot Integration API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/bot-api.html"`; \}, \{ `label`: `"ServiceNow Virtual Agent API features"`; `url`: `"https://www.servicenow.com/docs/r/yokohama/conversational-interfaces/virtual-agent/va-api-features.html"`; \}\]; `notes`: readonly \[`"Coverage is limited to ServiceNow Table API record create/read/update/search, incident creation, Attachment API upload/list, Import Set insert/read, and readiness checks used by Cognidesk support workflows."`, `"Implementation uses the official @servicenow/sdk-api Connector when instanceUrl/baseUrl and OAuth bearer credentials are configured, with ServiceNowRawClient injection as an override for host-owned transports."`, `"Generic Table API helpers accept SDK-user-selected table names and fields, but they are not customer-specific generated schema coverage for arbitrary tables, custom fields, ACLs, business rules, or plugins."`, `"This is not full ServiceNow platform API coverage for Service Catalog/cart, journal-field semantics, attachment download/delete, transform-map lifecycle, scripted REST APIs, workflow APIs, or broader platform administration."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"ServiceNow Table API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_TableAPI.html"`; \}, \{ `label`: `"ServiceNow Attachment API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_AttachmentAPI.html"`; \}, \{ `label`: `"ServiceNow Import Set API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/c_ImportSetAPI.html"`; \}, \{ `label`: `"ServiceNow Virtual Agent API"`; `url`: `"https://www.servicenow.com/docs/r/conversational-interfaces/virtual-agent/virtual-agent-api-landing-page.html"`; \}, \{ `label`: `"ServiceNow Virtual Agent Bot Integration API"`; `url`: `"https://www.servicenow.com/docs/r/washingtondc/api-reference/rest-apis/bot-api.html"`; \}, \{ `label`: `"ServiceNow Virtual Agent API features"`; `url`: `"https://www.servicenow.com/docs/r/yokohama/conversational-interfaces/virtual-agent/va-api-features.html"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is limited to ServiceNow Table API record create/read/update/search, incident creation, Attachment API upload/list, Import Set insert/read, and readiness checks used by Cognidesk support workflows."`, `"Implementation uses the official @servicenow/sdk-api Connector when instanceUrl/baseUrl and OAuth bearer credentials are configured, with ServiceNowRawClient injection as an override for host-owned transports."`, `"Generic Table API helpers accept SDK-user-selected table names and fields, but they are not customer-specific generated schema coverage for arbitrary tables, custom fields, ACLs, business rules, or plugins."`, `"This is not full ServiceNow platform API coverage for Service Catalog/cart, journal-field semantics, attachment download/delete, transform-map lifecycle, scripted REST APIs, workflow APIs, or broader platform administration."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"The SDK user's ServiceNow instance URL for the built-in official @servicenow/sdk-api Connector transport, for example https://example.service-now.com. Not required when the host injects a ServiceNowRawClient."`; `id`: `"servicenow-instance"`; `label`: `"ServiceNow instance URL"`; `metadata`: \{ `requiredWhen`: `"built-in-servicenow-sdk-connector"`; \}; `required`: `false`; \}, \{ `description`: `"Server-side OAuth bearer access for the built-in official @servicenow/sdk-api Connector transport; effective access is governed by ServiceNow roles, ACLs, table access, and any tenant REST API Auth Scopes. Use ServiceNowRawClient injection for other tenant-auth transports."`; `id`: `"servicenow-api-access"`; `label`: `"ServiceNow API access"`; `metadata`: \{ `privilegeGuidance`: `"The table_api value is Cognidesk capability guidance, not a universal ServiceNow OAuth scope. The credential must be authorized for Table API, Attachment API, Import Set API, and configured target tables."`; `requiredWhen`: `"built-in-servicenow-sdk-connector"`; `scopeKind`: `"internal-capability-labels"`; \}; `required`: `false`; `scopes`: readonly \[`"table_api"`\]; \}, \{ `description`: `"Optional ServiceNowRawClient override supplied by the host application. When configured, Cognidesk delegates operations to that client instead of constructing the built-in @servicenow/sdk-api Connector transport."`; `id`: `"servicenow-raw-client"`; `label`: `"Host-provided ServiceNow raw client"`; `metadata`: \{ `clientInterface`: `"ServiceNowRawClient"`; `credentialKind`: `"host-client-override"`; `satisfies`: readonly \[`"servicenow-instance"`, `"servicenow-api-access"`\]; \}; `required`: `false`; \}\] |
| `directions` | readonly \[`"bidirectional"`\] |
| `id` | `"ticketing.servicenow"` |
| `limitations` | readonly \[`"Available tables, fields, ACLs, business rules, and mandatory fields are owned by the SDK user's ServiceNow instance."`, `"Handoff timing, approval, field mapping, assignment, and customer visibility are SDK-user configuration."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `arbitraryTableTyping`: `"not-covered"`; `attachmentDownloadDelete`: `"provider-supported-not-implemented"`; `attachments`: `"typed-upload-list"`; `catalogWorkflowScriptedRest`: `"provider-supported-not-implemented"`; `cccifCustomChatIntegration`: `"provider-supported-not-typed"`; `connectConversationScopedApi`: `"provider-supported-not-typed"`; `csmCaseApi`: `"provider-supported-not-typed"`; `genericTableApi`: `"sdk-owned-classified-endpoint"`; `importSets`: `"typed-json-create-read"`; `incidents`: `"typed-create-comment-worknote"`; `liveAgentTransfer`: `"provider-supported-not-typed"`; `readinessSearch`: `"typed-search"`; `tableRecords`: `"typed-json-create-read-update-search"`; `taskTableRecords`: `"provider-supported-not-typed"`; `virtualAgentApi`: `"provider-supported-not-typed"`; `virtualAgentBotIntegrationApi`: `"provider-supported-not-typed"`; \}; `checkedProviderApiCoverage`: \{ `coverageArtifact`: `"docs/provider-coverage/servicenow-checked-table-attachment-importset-2026-06-18.inventory.json"`; `familyCount`: `4`; `fullCoverageExportRequirement`: `"Full instance-specific ServiceNow coverage requires REST API Explorer/OpenAPI export for enabled APIs, table dictionary export, plugin/product inventory, ACL/role evidence, and scripted REST definitions from the SDK user's instance."`; `gapFamilyCount`: `1`; `implementedFamilyCount`: `3`; `implementedOperationCount`: `11`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \}; `checkedProviderSdk`: \{ `checkedVersion`: `"4.8.0"`; `license`: `"MIT"`; `package`: `"@servicenow/sdk-api"`; `reason`: `"OAuth default runtime uses Connector.fetch for create/read/update/attachment/import-set calls and Connector.queryTable for compatible table search calls. Non-OAuth tenant-auth transports must be supplied through ServiceNowRawClient injection instead of a package-owned REST fallback."`; `result`: `"used-as-runtime-connector"`; \}; `implementation`: \{ `defaultClientPolicy`: `"use-official-servicenow-sdk-api-connector-for-oauth-runtime-transport; require ServiceNowRawClient injection for non-OAuth tenant-auth transports"`; `manifestImport`: `"no-sdk-client-initialization"`; `packageOwnedRestClient`: `false`; `rawClientEscapeHatch`: `"ServiceNowTicketingClient.rawClient"`; `rawClientOverride`: `true`; `runtimePackage`: `"@cognidesk/integration-ticketing-servicenow"`; `sdkPackage`: `"@servicenow/sdk-api"`; `sdkRuntimeSurface`: `"Connector.fetch and Connector.queryTable"`; `strategy`: `"official-sdk-connector"`; \}; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `checkedVersion`: `"4.8.0"`; `license`: `"MIT"`; `package`: `"@servicenow/sdk-api"`; `reason`: `"The official ServiceNow SDK API exports Connector.fetch and Connector.queryTable as runtime instance transport. It does not provide a ticketing-specific Table/Attachment/Import Set client, so Cognidesk translates ticketing operations into the official connector transport and retains typed rawClient injection for host-owned clients."`; `result`: `"official-sdk-runtime-connector-not-ticketing-client"`; \}; \} |
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
| `metadata.checkedProviderSdk` | \{ `checkedVersion`: `"4.8.0"`; `license`: `"MIT"`; `package`: `"@servicenow/sdk-api"`; `reason`: `"OAuth default runtime uses Connector.fetch for create/read/update/attachment/import-set calls and Connector.queryTable for compatible table search calls. Non-OAuth tenant-auth transports must be supplied through ServiceNowRawClient injection instead of a package-owned REST fallback."`; `result`: `"used-as-runtime-connector"`; \} |
| `metadata.checkedProviderSdk.checkedVersion` | `"4.8.0"` |
| `metadata.checkedProviderSdk.license` | `"MIT"` |
| `metadata.checkedProviderSdk.package` | `"@servicenow/sdk-api"` |
| `metadata.checkedProviderSdk.reason` | `"OAuth default runtime uses Connector.fetch for create/read/update/attachment/import-set calls and Connector.queryTable for compatible table search calls. Non-OAuth tenant-auth transports must be supplied through ServiceNowRawClient injection instead of a package-owned REST fallback."` |
| `metadata.checkedProviderSdk.result` | `"used-as-runtime-connector"` |
| `metadata.implementation` | \{ `defaultClientPolicy`: `"use-official-servicenow-sdk-api-connector-for-oauth-runtime-transport; require ServiceNowRawClient injection for non-OAuth tenant-auth transports"`; `manifestImport`: `"no-sdk-client-initialization"`; `packageOwnedRestClient`: `false`; `rawClientEscapeHatch`: `"ServiceNowTicketingClient.rawClient"`; `rawClientOverride`: `true`; `runtimePackage`: `"@cognidesk/integration-ticketing-servicenow"`; `sdkPackage`: `"@servicenow/sdk-api"`; `sdkRuntimeSurface`: `"Connector.fetch and Connector.queryTable"`; `strategy`: `"official-sdk-connector"`; \} |
| `metadata.implementation.defaultClientPolicy` | `"use-official-servicenow-sdk-api-connector-for-oauth-runtime-transport; require ServiceNowRawClient injection for non-OAuth tenant-auth transports"` |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.packageOwnedRestClient` | `false` |
| `metadata.implementation.rawClientEscapeHatch` | `"ServiceNowTicketingClient.rawClient"` |
| `metadata.implementation.rawClientOverride` | `true` |
| `metadata.implementation.runtimePackage` | `"@cognidesk/integration-ticketing-servicenow"` |
| `metadata.implementation.sdkPackage` | `"@servicenow/sdk-api"` |
| `metadata.implementation.sdkRuntimeSurface` | `"Connector.fetch and Connector.queryTable"` |
| `metadata.implementation.strategy` | `"official-sdk-connector"` |
| `metadata.sdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `checkedVersion`: `"4.8.0"`; `license`: `"MIT"`; `package`: `"@servicenow/sdk-api"`; `reason`: `"The official ServiceNow SDK API exports Connector.fetch and Connector.queryTable as runtime instance transport. It does not provide a ticketing-specific Table/Attachment/Import Set client, so Cognidesk translates ticketing operations into the official connector transport and retains typed rawClient injection for host-owned clients."`; `result`: `"official-sdk-runtime-connector-not-ticketing-client"`; \} |
| `metadata.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.sdkDecision.checkedVersion` | `"4.8.0"` |
| `metadata.sdkDecision.license` | `"MIT"` |
| `metadata.sdkDecision.package` | `"@servicenow/sdk-api"` |
| `metadata.sdkDecision.reason` | `"The official ServiceNow SDK API exports Connector.fetch and Connector.queryTable as runtime instance transport. It does not provide a ticketing-specific Table/Attachment/Import Set client, so Cognidesk translates ticketing operations into the official connector transport and retains typed rawClient injection for host-owned clients."` |
| `metadata.sdkDecision.result` | `"official-sdk-runtime-connector-not-ticketing-client"` |
| `name` | `"ServiceNow Ticketing"` |
| `operations` | ( \| \{ `alias`: `string`; `audiences`: (`"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow`: `true`; `description`: `string`; `exposesSensitiveData`: `true`; `extension?`: `never`; `externallyVisible?`: `never`; `label`: `string`; `providerObject`: `string`; `providerOperation`: `string`; `requiresApproval?`: `never`; `requiresCredential`: `true`; `sideEffect`: `true`; \} \| \{ `alias`: `string`; `audiences`: (`"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `never`; `description`: `string`; `exposesSensitiveData`: `true`; `extension?`: `never`; `externallyVisible?`: `never`; `label`: `string`; `providerObject`: `string`; `providerOperation`: `string`; `requiresApproval?`: `never`; `requiresCredential`: `true`; `sideEffect?`: `never`; \} \| \{ `alias`: `string`; `audiences`: `"mixed"`[]; `capability`: `string`; `changesWorkflow`: `true`; `description`: `string`; `exposesSensitiveData`: `true`; `extension?`: `never`; `externallyVisible`: `true`; `label`: `string`; `providerObject`: `string`; `providerOperation`: `string`; `requiresApproval`: `true`; `requiresCredential`: `true`; `sideEffect`: `true`; \} \| \{ `alias`: `string`; `audiences`: (`"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow`: `true`; `description`: `string`; `exposesSensitiveData`: `true`; `extension?`: `never`; `externallyVisible`: `false`; `label`: `string`; `providerObject`: `string`; `providerOperation`: `string`; `requiresApproval?`: `never`; `requiresCredential`: `true`; `sideEffect`: `true`; \} \| \{ `alias`: `string`; `audiences`: (`"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `never`; `description`: `string`; `exposesSensitiveData`: `true`; `extension?`: `never`; `externallyVisible`: `true`; `label`: `string`; `providerObject`: `string`; `providerOperation`: `string`; `requiresApproval?`: `never`; `requiresCredential`: `true`; `sideEffect`: `true`; \} \| \{ `alias`: `string`; `audiences`: (`"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow`: `true`; `description`: `string`; `exposesSensitiveData`: `true`; `extension`: `true`; `externallyVisible?`: `never`; `label`: `string`; `providerObject`: `string`; `providerOperation`: `string`; `requiresApproval?`: `never`; `requiresCredential`: `true`; `sideEffect`: `true`; \} \| \{ `alias`: `string`; `audiences`: (`"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `never`; `description`: `string`; `exposesSensitiveData`: `true`; `extension`: `true`; `externallyVisible?`: `never`; `label`: `string`; `providerObject`: `string`; `providerOperation`: `string`; `requiresApproval?`: `never`; `requiresCredential`: `true`; `sideEffect?`: `never`; \})[] |
| `packageName` | `"@cognidesk/integration-ticketing-servicenow"` |
| `privacyNotes` | readonly \[`"ServiceNow records can contain customer data, support notes, internal assignment data, and attached workflow context."`, `"ServiceNow credentials stay server-side and are never exposed through Studio credential status."`\] |
| `provider` | `"servicenow"` |
| `trustLevel` | `"official"` |
