# integrations/ticketing/dynamics365/dist/manifest

## Variables

### dynamics365TicketingProviderManifest

```ts
const dynamics365TicketingProviderManifest: {
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
     description: "Creates Dataverse incident records for SDK-user-configured customer-service handoff.";
     exposesSensitiveData: true;
     label: "Create Dynamics cases";
     providerObjects: readonly [{
        kind: "dynamics365Incident";
        label: "Dynamics 365 Case";
        schemaName: "incident";
      }, {
        kind: "dynamics365Annotation";
        label: "Dynamics 365 Annotation";
        schemaName: "annotation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "draft";
     description: "Creates Dataverse annotation records for internal support handoff context.";
     exposesSensitiveData: true;
     label: "Create Dynamics internal notes";
     providerObjects: readonly [{
        kind: "internalNote";
        label: "Internal Note";
        schemaName: "annotation";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads Dataverse incident records and readiness metadata.";
     exposesSensitiveData: true;
     label: "Read Dynamics cases";
     providerObjects: readonly [{
        kind: "dynamics365Incident";
        label: "Dynamics 365 Case";
        schemaName: "incident";
      }, {
        kind: "dynamics365Annotation";
        label: "Dynamics 365 Annotation";
        schemaName: "annotation";
      }, {
        kind: "dynamics365Queue";
        label: "Dynamics 365 Queue";
        schemaName: "queue";
      }, {
        kind: "dynamics365Activity";
        label: "Dynamics 365 Activity";
        schemaName: "activitypointer";
      }, {
        kind: "dynamics365EntityDefinition";
        label: "Dynamics 365 Entity Definition";
        schemaName: "EntityDefinition";
      }, {
        kind: "dynamics365WhoAmI";
        label: "Dynamics 365 WhoAmI";
        schemaName: "WhoAmI";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Dataverse incident records such as status, title, description, owner, or custom fields.";
     exposesSensitiveData: true;
     label: "Update Dynamics cases";
     providerObjects: readonly [{
        kind: "dynamics365Incident";
        label: "Dynamics 365 Case";
        schemaName: "incident";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Queries Dataverse incident records with SDK-user-supplied OData options.";
     exposesSensitiveData: true;
     label: "Search Dynamics cases";
     providerObjects: readonly [{
        kind: "dynamics365Incident";
        label: "Dynamics 365 Case";
        schemaName: "incident";
      }, {
        kind: "dynamics365Annotation";
        label: "Dynamics 365 Annotation";
        schemaName: "annotation";
      }, {
        kind: "dynamics365Queue";
        label: "Dynamics 365 Queue";
        schemaName: "queue";
      }, {
        kind: "dynamics365Activity";
        label: "Dynamics 365 Activity";
        schemaName: "activitypointer";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     description: "Uses Dataverse incident, annotation, and selected queue operations in SDK-user-configured record handoff workflows; this does not imply native Omnichannel conversation transfer or live-work-item mutation.";
     exposesSensitiveData: true;
     label: "Attach handoff to Dynamics";
     providerObjects: readonly [{
        kind: "dynamics365Incident";
        label: "Dynamics 365 Case";
        schemaName: "incident";
      }, {
        kind: "dynamics365Annotation";
        label: "Dynamics 365 Annotation";
        schemaName: "annotation";
      }, {
        kind: "dynamics365Queue";
        label: "Dynamics 365 Queue";
        schemaName: "queue";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Microsoft Dataverse Web API overview";
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview";
      }, {
        label: "dynamics-web-api Dataverse helper";
        url: "https://github.com/AleksandrRogov/DynamicsWebApi";
      }, {
        label: "Dynamics 365 Customer Service incident table reference";
        url: "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/incident";
      }, {
        label: "Dataverse EntityDefinitions metadata queries";
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-metadata-web-api";
      }, {
        label: "Dataverse WhoAmI Function";
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/whoami?view=dataverse-latest";
      }, {
        label: "Dataverse Note/Annotation table reference";
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/annotation";
      }, {
        label: "Dataverse ActivityPointer table reference";
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/activitypointer";
      }, {
        label: "Dataverse queue EntityType reference";
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/queue";
      }, {
        label: "Dataverse AddToQueue Action";
        url: "https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/addtoqueue?view=dataverse-latest";
      }, {
        label: "Dynamics 365 Omnichannel JavaScript API";
        url: "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/omnichannel-api-reference";
      }, {
        label: "Dynamics 365 custom messaging channel table";
        url: "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/msdyn_occustommessagingchannel";
      }, {
        label: "Dynamics 365 getConversations Omnichannel API";
        url: "https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/methods/getconversations";
     }];
     notes: readonly ["Coverage is limited to Dataverse incident CRUD/search, selected metadata/readiness helpers, incident notes via annotations, queue AddToQueue, and queue/activity reads used by Cognidesk support workflows.", "Implementation uses dynamics-web-api 2.5.0; broader Dataverse Web API capabilities remain available through the rawClient escape hatch but are not Cognidesk adapter coverage.", "Annotation note creation supports bounded inline annotation document fields (`filename`, `documentbody`, `mimetype`) on the Dataverse annotation record; this is not a complete file/attachment lifecycle.", "This is not full Microsoft Dataverse, Dynamics 365 Customer Service, activity, annotation attachment, relationship metadata, broader queue routing, or custom action API coverage."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "dynamics365-instance";
     label: "Dynamics 365 Dataverse environment URL";
     required: true;
   }, {
     id: "dynamics365-api-access";
     label: "Dynamics 365 OAuth access";
     metadata: {
        privilegeGuidance: "Delegated clients request <environment-url>/user_impersonation; confidential clients commonly request <environment-url>/.default. Dataverse security roles still govern incident, annotation, queue, activity, and AddToQueue access.";
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["user_impersonation"];
  }];
  directions: readonly ["bidirectional"];
  id: "ticketing.dynamics365";
  limitations: readonly ["Dataverse table customizations, required fields, queues, owners, security roles, and routing rules are SDK-user configuration.", "Unified Routing live-work-item mutation is provider-sensitive and must not be inferred from typed AddToQueue support."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        activities: "typed-list";
        annotationAttachmentLifecycle: "provider-supported-not-typed";
        annotationInlineDocumentFields: "typed-selected";
        annotationsCaseNotes: "typed-create-list";
        broaderDataverseApi: "provider-supported-raw-client";
        ccaasConversationActions: "provider-supported-not-typed";
        conversationsLiveWorkItems: "provider-supported-not-typed";
        customActions: "not-covered";
        customMessagingChannels: "provider-supported-not-typed";
        incidents: "typed-crud-search";
        linkToConversation: "provider-supported-client-sdk-not-typed";
        messagingApis: "provider-supported-not-typed";
        metadataReadiness: "typed-selected";
        omnichannelLiveChatWidget: "provider-supported-client-sdk-not-typed";
        queueRouting: "typed-selected";
        queues: "typed-list";
        relationshipMetadata: "not-covered";
        transcriptAnnotations: "provider-supported-not-typed";
        unifiedRoutingLiveWorkItemMutation: "provider-supported-not-typed";
     };
     checkedProviderApiCoverage: {
        coverageArtifact: "docs/provider-coverage/dynamics365-checked-dataverse-customer-service-2026-06-18.inventory.json";
        familyCount: 4;
        fullCoverageExportRequirement: "Full environment-specific Dataverse/Dynamics coverage requires the SDK user's $metadata/CSDL, EntityDefinitions, solution customizations, enabled Dynamics 365 Customer Service products, security roles, and custom action/function export.";
        gapFamilyCount: 1;
        implementedFamilyCount: 3;
        implementedOperationCount: 11;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     implementation: {
        manifestImport: "no-sdk-client-initialization";
        rawClientEscapeHatch: "Dynamics365TicketingClient.rawClient/getRawClient()";
        runtimePackage: "@cognidesk/integration-ticketing-dynamics365";
        sdkPackage: "dynamics-web-api";
        sdkVersionRange: "2.5.0";
        strategy: "sdk-backed";
     };
  };
  name: "Microsoft Dynamics 365 Customer Service";
  operations: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
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
  packageName: "@cognidesk/integration-ticketing-dynamics365";
  privacyNotes: readonly ["Dynamics cases can contain customer identity, support summaries, entitlements, queue and owner metadata, and internal notes.", "Dynamics OAuth credentials stay server-side and Studio receives only readiness."];
  provider: "dynamics365";
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates Dataverse incident records for SDK-user-configured customer-service handoff."`; `exposesSensitiveData`: `true`; `label`: `"Create Dynamics cases"`; `providerObjects`: readonly \[\{ `kind`: `"dynamics365Incident"`; `label`: `"Dynamics 365 Case"`; `schemaName`: `"incident"`; \}, \{ `kind`: `"dynamics365Annotation"`; `label`: `"Dynamics 365 Annotation"`; `schemaName`: `"annotation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Creates Dataverse annotation records for internal support handoff context."`; `exposesSensitiveData`: `true`; `label`: `"Create Dynamics internal notes"`; `providerObjects`: readonly \[\{ `kind`: `"internalNote"`; `label`: `"Internal Note"`; `schemaName`: `"annotation"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Dataverse incident records and readiness metadata."`; `exposesSensitiveData`: `true`; `label`: `"Read Dynamics cases"`; `providerObjects`: readonly \[\{ `kind`: `"dynamics365Incident"`; `label`: `"Dynamics 365 Case"`; `schemaName`: `"incident"`; \}, \{ `kind`: `"dynamics365Annotation"`; `label`: `"Dynamics 365 Annotation"`; `schemaName`: `"annotation"`; \}, \{ `kind`: `"dynamics365Queue"`; `label`: `"Dynamics 365 Queue"`; `schemaName`: `"queue"`; \}, \{ `kind`: `"dynamics365Activity"`; `label`: `"Dynamics 365 Activity"`; `schemaName`: `"activitypointer"`; \}, \{ `kind`: `"dynamics365EntityDefinition"`; `label`: `"Dynamics 365 Entity Definition"`; `schemaName`: `"EntityDefinition"`; \}, \{ `kind`: `"dynamics365WhoAmI"`; `label`: `"Dynamics 365 WhoAmI"`; `schemaName`: `"WhoAmI"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates Dataverse incident records such as status, title, description, owner, or custom fields."`; `exposesSensitiveData`: `true`; `label`: `"Update Dynamics cases"`; `providerObjects`: readonly \[\{ `kind`: `"dynamics365Incident"`; `label`: `"Dynamics 365 Case"`; `schemaName`: `"incident"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Queries Dataverse incident records with SDK-user-supplied OData options."`; `exposesSensitiveData`: `true`; `label`: `"Search Dynamics cases"`; `providerObjects`: readonly \[\{ `kind`: `"dynamics365Incident"`; `label`: `"Dynamics 365 Case"`; `schemaName`: `"incident"`; \}, \{ `kind`: `"dynamics365Annotation"`; `label`: `"Dynamics 365 Annotation"`; `schemaName`: `"annotation"`; \}, \{ `kind`: `"dynamics365Queue"`; `label`: `"Dynamics 365 Queue"`; `schemaName`: `"queue"`; \}, \{ `kind`: `"dynamics365Activity"`; `label`: `"Dynamics 365 Activity"`; `schemaName`: `"activitypointer"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"handoff"`; `changesWorkflow`: `true`; `description`: `"Uses Dataverse incident, annotation, and selected queue operations in SDK-user-configured record handoff workflows; this does not imply native Omnichannel conversation transfer or live-work-item mutation."`; `exposesSensitiveData`: `true`; `label`: `"Attach handoff to Dynamics"`; `providerObjects`: readonly \[\{ `kind`: `"dynamics365Incident"`; `label`: `"Dynamics 365 Case"`; `schemaName`: `"incident"`; \}, \{ `kind`: `"dynamics365Annotation"`; `label`: `"Dynamics 365 Annotation"`; `schemaName`: `"annotation"`; \}, \{ `kind`: `"dynamics365Queue"`; `label`: `"Dynamics 365 Queue"`; `schemaName`: `"queue"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Microsoft Dataverse Web API overview"`; `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"`; \}, \{ `label`: `"dynamics-web-api Dataverse helper"`; `url`: `"https://github.com/AleksandrRogov/DynamicsWebApi"`; \}, \{ `label`: `"Dynamics 365 Customer Service incident table reference"`; `url`: `"https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/incident"`; \}, \{ `label`: `"Dataverse EntityDefinitions metadata queries"`; `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-metadata-web-api"`; \}, \{ `label`: `"Dataverse WhoAmI Function"`; `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/whoami?view=dataverse-latest"`; \}, \{ `label`: `"Dataverse Note/Annotation table reference"`; `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/annotation"`; \}, \{ `label`: `"Dataverse ActivityPointer table reference"`; `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/activitypointer"`; \}, \{ `label`: `"Dataverse queue EntityType reference"`; `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/queue"`; \}, \{ `label`: `"Dataverse AddToQueue Action"`; `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/addtoqueue?view=dataverse-latest"`; \}, \{ `label`: `"Dynamics 365 Omnichannel JavaScript API"`; `url`: `"https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/omnichannel-api-reference"`; \}, \{ `label`: `"Dynamics 365 custom messaging channel table"`; `url`: `"https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/msdyn_occustommessagingchannel"`; \}, \{ `label`: `"Dynamics 365 getConversations Omnichannel API"`; `url`: `"https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/methods/getconversations"`; \}\]; `notes`: readonly \[`"Coverage is limited to Dataverse incident CRUD/search, selected metadata/readiness helpers, incident notes via annotations, queue AddToQueue, and queue/activity reads used by Cognidesk support workflows."`, `"Implementation uses dynamics-web-api 2.5.0; broader Dataverse Web API capabilities remain available through the rawClient escape hatch but are not Cognidesk adapter coverage."`, `` "Annotation note creation supports bounded inline annotation document fields (`filename`, `documentbody`, `mimetype`) on the Dataverse annotation record; this is not a complete file/attachment lifecycle." ``, `"This is not full Microsoft Dataverse, Dynamics 365 Customer Service, activity, annotation attachment, relationship metadata, broader queue routing, or custom action API coverage."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Microsoft Dataverse Web API overview"`; `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/overview"`; \}, \{ `label`: `"dynamics-web-api Dataverse helper"`; `url`: `"https://github.com/AleksandrRogov/DynamicsWebApi"`; \}, \{ `label`: `"Dynamics 365 Customer Service incident table reference"`; `url`: `"https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/incident"`; \}, \{ `label`: `"Dataverse EntityDefinitions metadata queries"`; `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/query-metadata-web-api"`; \}, \{ `label`: `"Dataverse WhoAmI Function"`; `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/whoami?view=dataverse-latest"`; \}, \{ `label`: `"Dataverse Note/Annotation table reference"`; `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/annotation"`; \}, \{ `label`: `"Dataverse ActivityPointer table reference"`; `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/reference/entities/activitypointer"`; \}, \{ `label`: `"Dataverse queue EntityType reference"`; `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/queue"`; \}, \{ `label`: `"Dataverse AddToQueue Action"`; `url`: `"https://learn.microsoft.com/en-us/power-apps/developer/data-platform/webapi/reference/addtoqueue?view=dataverse-latest"`; \}, \{ `label`: `"Dynamics 365 Omnichannel JavaScript API"`; `url`: `"https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/omnichannel-api-reference"`; \}, \{ `label`: `"Dynamics 365 custom messaging channel table"`; `url`: `"https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/entities/msdyn_occustommessagingchannel"`; \}, \{ `label`: `"Dynamics 365 getConversations Omnichannel API"`; `url`: `"https://learn.microsoft.com/en-us/dynamics365/customer-service/develop/reference/methods/getconversations"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is limited to Dataverse incident CRUD/search, selected metadata/readiness helpers, incident notes via annotations, queue AddToQueue, and queue/activity reads used by Cognidesk support workflows."`, `"Implementation uses dynamics-web-api 2.5.0; broader Dataverse Web API capabilities remain available through the rawClient escape hatch but are not Cognidesk adapter coverage."`, `` "Annotation note creation supports bounded inline annotation document fields (`filename`, `documentbody`, `mimetype`) on the Dataverse annotation record; this is not a complete file/attachment lifecycle." ``, `"This is not full Microsoft Dataverse, Dynamics 365 Customer Service, activity, annotation attachment, relationship metadata, broader queue routing, or custom action API coverage."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"dynamics365-instance"`; `label`: `"Dynamics 365 Dataverse environment URL"`; `required`: `true`; \}, \{ `id`: `"dynamics365-api-access"`; `label`: `"Dynamics 365 OAuth access"`; `metadata`: \{ `privilegeGuidance`: `"Delegated clients request <environment-url>/user_impersonation; confidential clients commonly request <environment-url>/.default. Dataverse security roles still govern incident, annotation, queue, activity, and AddToQueue access."`; `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: readonly \[`"user_impersonation"`\]; \}\] |
| `directions` | readonly \[`"bidirectional"`\] |
| `id` | `"ticketing.dynamics365"` |
| `limitations` | readonly \[`"Dataverse table customizations, required fields, queues, owners, security roles, and routing rules are SDK-user configuration."`, `"Unified Routing live-work-item mutation is provider-sensitive and must not be inferred from typed AddToQueue support."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `activities`: `"typed-list"`; `annotationAttachmentLifecycle`: `"provider-supported-not-typed"`; `annotationInlineDocumentFields`: `"typed-selected"`; `annotationsCaseNotes`: `"typed-create-list"`; `broaderDataverseApi`: `"provider-supported-raw-client"`; `ccaasConversationActions`: `"provider-supported-not-typed"`; `conversationsLiveWorkItems`: `"provider-supported-not-typed"`; `customActions`: `"not-covered"`; `customMessagingChannels`: `"provider-supported-not-typed"`; `incidents`: `"typed-crud-search"`; `linkToConversation`: `"provider-supported-client-sdk-not-typed"`; `messagingApis`: `"provider-supported-not-typed"`; `metadataReadiness`: `"typed-selected"`; `omnichannelLiveChatWidget`: `"provider-supported-client-sdk-not-typed"`; `queueRouting`: `"typed-selected"`; `queues`: `"typed-list"`; `relationshipMetadata`: `"not-covered"`; `transcriptAnnotations`: `"provider-supported-not-typed"`; `unifiedRoutingLiveWorkItemMutation`: `"provider-supported-not-typed"`; \}; `checkedProviderApiCoverage`: \{ `coverageArtifact`: `"docs/provider-coverage/dynamics365-checked-dataverse-customer-service-2026-06-18.inventory.json"`; `familyCount`: `4`; `fullCoverageExportRequirement`: `"Full environment-specific Dataverse/Dynamics coverage requires the SDK user's $metadata/CSDL, EntityDefinitions, solution customizations, enabled Dynamics 365 Customer Service products, security roles, and custom action/function export."`; `gapFamilyCount`: `1`; `implementedFamilyCount`: `3`; `implementedOperationCount`: `11`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \}; `implementation`: \{ `manifestImport`: `"no-sdk-client-initialization"`; `rawClientEscapeHatch`: `"Dynamics365TicketingClient.rawClient/getRawClient()"`; `runtimePackage`: `"@cognidesk/integration-ticketing-dynamics365"`; `sdkPackage`: `"dynamics-web-api"`; `sdkVersionRange`: `"2.5.0"`; `strategy`: `"sdk-backed"`; \}; \} |
| `metadata.channelCoverage` | \{ `activities`: `"typed-list"`; `annotationAttachmentLifecycle`: `"provider-supported-not-typed"`; `annotationInlineDocumentFields`: `"typed-selected"`; `annotationsCaseNotes`: `"typed-create-list"`; `broaderDataverseApi`: `"provider-supported-raw-client"`; `ccaasConversationActions`: `"provider-supported-not-typed"`; `conversationsLiveWorkItems`: `"provider-supported-not-typed"`; `customActions`: `"not-covered"`; `customMessagingChannels`: `"provider-supported-not-typed"`; `incidents`: `"typed-crud-search"`; `linkToConversation`: `"provider-supported-client-sdk-not-typed"`; `messagingApis`: `"provider-supported-not-typed"`; `metadataReadiness`: `"typed-selected"`; `omnichannelLiveChatWidget`: `"provider-supported-client-sdk-not-typed"`; `queueRouting`: `"typed-selected"`; `queues`: `"typed-list"`; `relationshipMetadata`: `"not-covered"`; `transcriptAnnotations`: `"provider-supported-not-typed"`; `unifiedRoutingLiveWorkItemMutation`: `"provider-supported-not-typed"`; \} |
| `metadata.channelCoverage.activities` | `"typed-list"` |
| `metadata.channelCoverage.annotationAttachmentLifecycle` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.annotationInlineDocumentFields` | `"typed-selected"` |
| `metadata.channelCoverage.annotationsCaseNotes` | `"typed-create-list"` |
| `metadata.channelCoverage.broaderDataverseApi` | `"provider-supported-raw-client"` |
| `metadata.channelCoverage.ccaasConversationActions` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.conversationsLiveWorkItems` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.customActions` | `"not-covered"` |
| `metadata.channelCoverage.customMessagingChannels` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.incidents` | `"typed-crud-search"` |
| `metadata.channelCoverage.linkToConversation` | `"provider-supported-client-sdk-not-typed"` |
| `metadata.channelCoverage.messagingApis` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.metadataReadiness` | `"typed-selected"` |
| `metadata.channelCoverage.omnichannelLiveChatWidget` | `"provider-supported-client-sdk-not-typed"` |
| `metadata.channelCoverage.queueRouting` | `"typed-selected"` |
| `metadata.channelCoverage.queues` | `"typed-list"` |
| `metadata.channelCoverage.relationshipMetadata` | `"not-covered"` |
| `metadata.channelCoverage.transcriptAnnotations` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.unifiedRoutingLiveWorkItemMutation` | `"provider-supported-not-typed"` |
| `metadata.checkedProviderApiCoverage` | \{ `coverageArtifact`: `"docs/provider-coverage/dynamics365-checked-dataverse-customer-service-2026-06-18.inventory.json"`; `familyCount`: `4`; `fullCoverageExportRequirement`: `"Full environment-specific Dataverse/Dynamics coverage requires the SDK user's $metadata/CSDL, EntityDefinitions, solution customizations, enabled Dynamics 365 Customer Service products, security roles, and custom action/function export."`; `gapFamilyCount`: `1`; `implementedFamilyCount`: `3`; `implementedOperationCount`: `11`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \} |
| `metadata.checkedProviderApiCoverage.coverageArtifact` | `"docs/provider-coverage/dynamics365-checked-dataverse-customer-service-2026-06-18.inventory.json"` |
| `metadata.checkedProviderApiCoverage.familyCount` | `4` |
| `metadata.checkedProviderApiCoverage.fullCoverageExportRequirement` | `"Full environment-specific Dataverse/Dynamics coverage requires the SDK user's $metadata/CSDL, EntityDefinitions, solution customizations, enabled Dynamics 365 Customer Service products, security roles, and custom action/function export."` |
| `metadata.checkedProviderApiCoverage.gapFamilyCount` | `1` |
| `metadata.checkedProviderApiCoverage.implementedFamilyCount` | `3` |
| `metadata.checkedProviderApiCoverage.implementedOperationCount` | `11` |
| `metadata.checkedProviderApiCoverage.sourceKind` | `"checked-endpoint-family-inventory"` |
| `metadata.checkedProviderApiCoverage.verifiedAt` | `"2026-06-18"` |
| `metadata.implementation` | \{ `manifestImport`: `"no-sdk-client-initialization"`; `rawClientEscapeHatch`: `"Dynamics365TicketingClient.rawClient/getRawClient()"`; `runtimePackage`: `"@cognidesk/integration-ticketing-dynamics365"`; `sdkPackage`: `"dynamics-web-api"`; `sdkVersionRange`: `"2.5.0"`; `strategy`: `"sdk-backed"`; \} |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.rawClientEscapeHatch` | `"Dynamics365TicketingClient.rawClient/getRawClient()"` |
| `metadata.implementation.runtimePackage` | `"@cognidesk/integration-ticketing-dynamics365"` |
| `metadata.implementation.sdkPackage` | `"dynamics-web-api"` |
| `metadata.implementation.sdkVersionRange` | `"2.5.0"` |
| `metadata.implementation.strategy` | `"sdk-backed"` |
| `name` | `"Microsoft Dynamics 365 Customer Service"` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `"@cognidesk/integration-ticketing-dynamics365"` |
| `privacyNotes` | readonly \[`"Dynamics cases can contain customer identity, support summaries, entitlements, queue and owner metadata, and internal notes."`, `"Dynamics OAuth credentials stay server-side and Studio receives only readiness."`\] |
| `provider` | `"dynamics365"` |
| `trustLevel` | `"official"` |
