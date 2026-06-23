# integrations/ticketing/salesforce/dist/manifest

## Variables

### salesforceTicketingProviderManifest

```ts
const salesforceTicketingProviderManifest: {
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
     scope:   | "provider-api-subset"
        | "support-workflow-subset"
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
     | "bidirectional"
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
     capability: "read-provider-object";
     exposesSensitiveData: true;
     label: "Read Salesforce Cases";
     providerObjects: readonly [{
        kind: "ticket";
        label: "Case";
        schemaName: "Case";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "send";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Create Salesforce CaseComments";
     providerObjects: readonly [{
        kind: "ticketComment";
        label: "CaseComment";
        schemaName: "CaseComment";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Create Salesforce Cases";
     providerObjects: readonly [{
        kind: "ticket";
        label: "Case";
        schemaName: "Case";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Update Salesforce Cases";
     providerObjects: readonly [{
        kind: "ticket";
        label: "Case";
        schemaName: "Case";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "search-provider-object";
     exposesSensitiveData: true;
     label: "Search Salesforce Cases";
     providerObjects: readonly [{
        kind: "ticket";
        label: "Case";
        schemaName: "Case";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "draft";
     exposesSensitiveData: true;
     label: "Create Salesforce internal feed items";
     providerObjects: readonly [{
        kind: "internalNote";
        label: "FeedItem";
        schemaName: "FeedItem";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "JSforce";
        url: "https://github.com/jsforce/jsforce";
      }, {
        label: "Salesforce REST API resources";
        url: "https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm";
      }, {
        label: "Salesforce Case object reference";
        url: "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm";
      }, {
        label: "Salesforce CaseComment object reference";
        url: "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casecomment.htm";
      }, {
        label: "Salesforce FeedItem object reference";
        url: "https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feeditem.htm";
     }];
     notes: readonly ["Coverage is scoped to Service Cloud Case support workflows implemented by typed handlers.", "Implementation uses maintained jsforce v3. Broader Salesforce APIs and org-specific sObjects remain accessible through rawClient, but are not Cognidesk adapter coverage.", "Generated or direct raw Salesforce slices should stay scoped to reviewed Service Cloud support workflows."];
     scope: "provider-api-subset";
  };
  credentialRequirements: readonly [{
     id: "salesforce-instance";
     label: "Salesforce instance URL";
     required: true;
   }, {
     id: "salesforce-oauth-access";
     label: "Salesforce OAuth access token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["api", "refresh_token", "openid"];
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "ticketing.salesforce";
  limitations: readonly ["Record types, required fields, queues, owners, assignment rules, Flow automation, field-level security, and Service Cloud licenses are SDK-user configuration.", "Generic SOQL remains an SDK-user-owned escape hatch and does not imply full Salesforce, metadata, Bulk, Pub/Sub, Streaming, or org-specific sObject coverage."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        broaderSalesforceApi: "provider-supported-raw-client";
        caseComments: "typed-create";
        cases: "typed-create-read-update-search";
        feedItems: "typed-internal-note-create";
        soql: "sdk-owned-extension";
     };
     implementation: {
        manifestImport: "no-sdk-client-initialization";
        rawClientEscapeHatch: "SalesforceTicketingClient.rawClient";
        sdkPackage: "jsforce";
        sdkVersionRange: "^3.10.16";
        strategy: "maintained-library";
     };
  };
  name: "Salesforce Service Cloud";
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
  packageName: "@cognidesk/integration-ticketing-salesforce";
  privacyNotes: readonly ["Salesforce cases, comments, feed items, contacts, accounts, platform events, and custom fields can contain customer data and internal support context."];
  provider: "salesforce";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"provider-api-subset"` \| `"support-workflow-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"provider-api-subset"` \| `"support-workflow-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"bidirectional"` \| `"inbound-only"` \| `"outbound-only"`)[] |
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read Salesforce Cases"`; `providerObjects`: readonly \[\{ `kind`: `"ticket"`; `label`: `"Case"`; `schemaName`: `"Case"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"send"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create Salesforce CaseComments"`; `providerObjects`: readonly \[\{ `kind`: `"ticketComment"`; `label`: `"CaseComment"`; `schemaName`: `"CaseComment"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create Salesforce Cases"`; `providerObjects`: readonly \[\{ `kind`: `"ticket"`; `label`: `"Case"`; `schemaName`: `"Case"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Update Salesforce Cases"`; `providerObjects`: readonly \[\{ `kind`: `"ticket"`; `label`: `"Case"`; `schemaName`: `"Case"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Search Salesforce Cases"`; `providerObjects`: readonly \[\{ `kind`: `"ticket"`; `label`: `"Case"`; `schemaName`: `"Case"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"draft"`; `exposesSensitiveData`: `true`; `label`: `"Create Salesforce internal feed items"`; `providerObjects`: readonly \[\{ `kind`: `"internalNote"`; `label`: `"FeedItem"`; `schemaName`: `"FeedItem"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"JSforce"`; `url`: `"https://github.com/jsforce/jsforce"`; \}, \{ `label`: `"Salesforce REST API resources"`; `url`: `"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm"`; \}, \{ `label`: `"Salesforce Case object reference"`; `url`: `"https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm"`; \}, \{ `label`: `"Salesforce CaseComment object reference"`; `url`: `"https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casecomment.htm"`; \}, \{ `label`: `"Salesforce FeedItem object reference"`; `url`: `"https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feeditem.htm"`; \}\]; `notes`: readonly \[`"Coverage is scoped to Service Cloud Case support workflows implemented by typed handlers."`, `"Implementation uses maintained jsforce v3. Broader Salesforce APIs and org-specific sObjects remain accessible through rawClient, but are not Cognidesk adapter coverage."`, `"Generated or direct raw Salesforce slices should stay scoped to reviewed Service Cloud support workflows."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"JSforce"`; `url`: `"https://github.com/jsforce/jsforce"`; \}, \{ `label`: `"Salesforce REST API resources"`; `url`: `"https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm"`; \}, \{ `label`: `"Salesforce Case object reference"`; `url`: `"https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_case.htm"`; \}, \{ `label`: `"Salesforce CaseComment object reference"`; `url`: `"https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_casecomment.htm"`; \}, \{ `label`: `"Salesforce FeedItem object reference"`; `url`: `"https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_feeditem.htm"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is scoped to Service Cloud Case support workflows implemented by typed handlers."`, `"Implementation uses maintained jsforce v3. Broader Salesforce APIs and org-specific sObjects remain accessible through rawClient, but are not Cognidesk adapter coverage."`, `"Generated or direct raw Salesforce slices should stay scoped to reviewed Service Cloud support workflows."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"salesforce-instance"`; `label`: `"Salesforce instance URL"`; `required`: `true`; \}, \{ `id`: `"salesforce-oauth-access"`; `label`: `"Salesforce OAuth access token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: readonly \[`"api"`, `"refresh_token"`, `"openid"`\]; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"ticketing.salesforce"` |
| `limitations` | readonly \[`"Record types, required fields, queues, owners, assignment rules, Flow automation, field-level security, and Service Cloud licenses are SDK-user configuration."`, `"Generic SOQL remains an SDK-user-owned escape hatch and does not imply full Salesforce, metadata, Bulk, Pub/Sub, Streaming, or org-specific sObject coverage."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `broaderSalesforceApi`: `"provider-supported-raw-client"`; `caseComments`: `"typed-create"`; `cases`: `"typed-create-read-update-search"`; `feedItems`: `"typed-internal-note-create"`; `soql`: `"sdk-owned-extension"`; \}; `implementation`: \{ `manifestImport`: `"no-sdk-client-initialization"`; `rawClientEscapeHatch`: `"SalesforceTicketingClient.rawClient"`; `sdkPackage`: `"jsforce"`; `sdkVersionRange`: `"^3.10.16"`; `strategy`: `"maintained-library"`; \}; \} |
| `metadata.channelCoverage` | \{ `broaderSalesforceApi`: `"provider-supported-raw-client"`; `caseComments`: `"typed-create"`; `cases`: `"typed-create-read-update-search"`; `feedItems`: `"typed-internal-note-create"`; `soql`: `"sdk-owned-extension"`; \} |
| `metadata.channelCoverage.broaderSalesforceApi` | `"provider-supported-raw-client"` |
| `metadata.channelCoverage.caseComments` | `"typed-create"` |
| `metadata.channelCoverage.cases` | `"typed-create-read-update-search"` |
| `metadata.channelCoverage.feedItems` | `"typed-internal-note-create"` |
| `metadata.channelCoverage.soql` | `"sdk-owned-extension"` |
| `metadata.implementation` | \{ `manifestImport`: `"no-sdk-client-initialization"`; `rawClientEscapeHatch`: `"SalesforceTicketingClient.rawClient"`; `sdkPackage`: `"jsforce"`; `sdkVersionRange`: `"^3.10.16"`; `strategy`: `"maintained-library"`; \} |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.rawClientEscapeHatch` | `"SalesforceTicketingClient.rawClient"` |
| `metadata.implementation.sdkPackage` | `"jsforce"` |
| `metadata.implementation.sdkVersionRange` | `"^3.10.16"` |
| `metadata.implementation.strategy` | `"maintained-library"` |
| `name` | `"Salesforce Service Cloud"` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `"@cognidesk/integration-ticketing-salesforce"` |
| `privacyNotes` | readonly \[`"Salesforce cases, comments, feed items, contacts, accounts, platform events, and custom fields can contain customer data and internal support context."`\] |
| `provider` | `"salesforce"` |
| `trustLevel` | `"official"` |
