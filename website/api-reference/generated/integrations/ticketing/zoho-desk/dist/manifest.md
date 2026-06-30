# integrations/ticketing/zoho-desk/dist/manifest

## Variables

### zohoDeskTicketingProviderManifest

```ts
const zohoDeskTicketingProviderManifest: {
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
     audiences: readonly ["customer-facing", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Create Zoho tickets";
     providerObjects: readonly [{
        kind: "zohoDeskTicket";
        label: "Zoho Desk Ticket";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     label: "Read Zoho tickets";
     providerObjects: readonly [{
        kind: "zohoDeskTicket";
        label: "Zoho Desk Ticket";
      }, {
        kind: "zohoDeskTicketComment";
        label: "Zoho Desk Ticket Comment";
      }, {
        kind: "zohoDeskThread";
        label: "Zoho Desk Thread";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Update Zoho tickets";
     providerObjects: readonly [{
        kind: "zohoDeskTicket";
        label: "Zoho Desk Ticket";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     exposesSensitiveData: true;
     label: "Search Zoho tickets";
     providerObjects: readonly [{
        kind: "zohoDeskTicket";
        label: "Zoho Desk Ticket";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "handoff";
     changesWorkflow: true;
     exposesSensitiveData: true;
     label: "Attach handoff to Zoho Desk";
     providerObjects: readonly [{
        kind: "zohoDeskTicket";
        label: "Zoho Desk Ticket";
      }, {
        kind: "zohoDeskTicketComment";
        label: "Zoho Desk Ticket Comment";
      }, {
        kind: "zohoDeskThread";
        label: "Zoho Desk Thread";
      }, {
        kind: "zohoDeskReply";
        label: "Zoho Desk Reply";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "ticketing";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Zoho Desk API documentation";
        url: "https://desk.zoho.com/DeskAPIDocument";
      }, {
        label: "Zoho Desk create ticket";
        url: "https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Createaticket";
      }, {
        label: "Zoho Desk list all tickets";
        url: "https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Listalltickets";
      }, {
        label: "Zoho Desk update ticket";
        url: "https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Updateaticket";
      }, {
        label: "Zoho Desk list ticket comments";
        url: "https://desk.zoho.com/DeskAPIDocument#TicketsComments#TicketsComments_Listallticketcomments";
      }, {
        label: "Zoho Desk create ticket comment";
        url: "https://desk.zoho.com/DeskAPIDocument#TicketsComments#TicketsComments_Createticketcomment";
      }, {
        label: "Zoho Desk list ticket threads";
        url: "https://desk.zoho.com/DeskAPIDocument#Threads#Threads_Listallthreads";
      }, {
        label: "Zoho Desk send email reply";
        url: "https://desk.zoho.com/DeskAPIDocument#Threads#Threads_SendEmailReply";
      }, {
        label: "Zoho Desk organizations";
        url: "https://desk.zoho.com/DeskAPIDocument#Organizations";
     }];
     notes: readonly ["Coverage is typed for Zoho Desk REST-backed ticket create, read, patch, ticket listing/search query passthrough, ticket comments, ticket threads, send-reply, organization readiness, and credential status used by Cognidesk support workflows.", "A host-injected ZohoDeskProviderClient remains available as an override for SDK-user-owned provider adapters, retry policy, or token refresh plumbing.", "This is not full Zoho Desk API coverage; contacts, accounts, departments, agents, teams, attachments, layouts, blueprints, assignment/skills actions, spam/trash lifecycle, webhooks, help center, analytics, and broader settings APIs remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "zoho-desk-org";
     label: "Zoho Desk organization ID";
     metadata: {
        requiredWhen: "using-built-in-rest-adapter";
     };
     required: false;
   }, {
     id: "zoho-desk-api-access";
     label: "Zoho Desk OAuth access";
     metadata: {
        requiredWhen: "using-built-in-rest-adapter";
        scopeKind: "provider-oauth-scopes";
     };
     required: false;
     scopes: readonly ["Desk.tickets.CREATE", "Desk.tickets.READ", "Desk.tickets.UPDATE", "Desk.basic.READ"];
  }];
  directions: readonly ["bidirectional"];
  id: "ticketing.zoho-desk";
  limitations: readonly ["Departments, layouts, mandatory fields, assignment rules, blueprints, and visibility are SDK-user configuration.", "This package provides a constrained Zoho Desk REST/fetch transport for the declared support workflow operations; SDK users still own retry, rate-limit, OAuth token refresh, and regional endpoint policy beyond dataCenter/apiBaseUrl selection."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        attachmentsBlueprintsWebhooks: "provider-supported-not-typed";
        comments: "typed-rest-create-list";
        contactsAccountsAgentsDepartments: "provider-supported-not-typed";
        organizationsReadiness: "typed-rest-read";
        replies: "typed-rest-send";
        slasAssignmentsSkills: "not-covered";
        threads: "typed-rest-list";
        tickets: "typed-rest-create-read-update-list";
     };
     checkedProviderApiCoverage: {
        checkedFamilyCount: 5;
        coverageArtifact: "docs/provider-coverage/zoho-desk-checked-rest-api-2026-06-18.inventory.json";
        delegatedFamilyCount: 0;
        delegatedOperationCount: 0;
        gapFamilyCount: 1;
        packageOwnedProviderOperationCount: 9;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     checkedProviderSdk: {
        candidates: readonly [{
           package: "Zoho Desk Java SDK";
           reason: "Official SDK for Java applications; it is not a runtime package this Node/TypeScript provider package can import.";
           result: "not-node-typescript-runtime";
           source: "https://www.zoho.com/desk/developers/javasdk/";
         }, {
           checkedVersion: "1.0.25";
           package: "@zohodesk/js-api-creator";
           reason: "Maintained JavaScript package, but its README describes a generic API builder rather than a dedicated Zoho Desk typed raw client.";
           result: "not-provider-ticketing-sdk";
           source: "https://www.npmjs.com/package/@zohodesk/js-api-creator";
         }, {
           package: "Zoho Desk extension JS SDK bundle";
           reason: "Extension widget SDK loaded from Zoho-hosted browser script after ZOHODESK.extension.onload(); it is not a server-side REST client dependency.";
           result: "not-backend-runtime-sdk";
           source: "https://help.zoho.com/portal/en/community/topic/building-extensions-8-create-widgets-using-the-js-sdk-bundle-in-the-zoho-desk-platform-part-1";
         }, {
           package: "Zoho Desk ASAP JavaScript APIs";
           reason: "ASAP JavaScript APIs target embedded help-widget behavior in website pages, not backend ticket create/read/update/reply operations.";
           result: "not-backend-runtime-sdk";
           source: "https://www.zoho.com/desk/developers/asap/";
        }];
        checkedAt: "2026-06-25";
        officialRuntimeSdkAvailable: false;
        sources: readonly ["https://www.zoho.com/desk/developers/", "https://www.zoho.com/desk/developers/javasdk/", "https://www.npmjs.com/package/@zohodesk/js-api-creator", "https://help.zoho.com/portal/en/community/topic/building-extensions-8-create-widgets-using-the-js-sdk-bundle-in-the-zoho-desk-platform-part-1", "https://www.zoho.com/desk/developers/asap/"];
        verdict: "no-official-sdk-rest-adapter";
     };
     implementation: {
        adapterKind: "no-official-sdk-rest-adapter";
        defaultClientPolicy: "use-built-in-rest-adapter-when-orgId-and-accessToken-are-configured";
        manifestImport: "no-client-initialization";
        officialRuntimeSdkAvailable: false;
        packageOwnedRestClient: true;
        providerClientInterface: "ZohoDeskProviderClient";
        providerClientOverride: true;
        runtimePackage: "@cognidesk/integration-ticketing-zoho-desk";
        strategy: "provider-rest-adapter";
     };
     implementationStrategy: "no-official-sdk-rest-adapter";
     providerClient: {
        defaultClientPolicy: "configured-rest-default-with-host-client-override";
        importPolicy: "runtime-entrypoint-only";
        interface: "ZohoDeskProviderClient";
        package: "built-in-provider-rest-adapter";
        sdkDecision: {
           checkedAt: "2026-06-25";
           notes: readonly ["Zoho's official Desk developer resources document REST APIs and a Java SDK; the Java SDK is not suitable as a Node/TypeScript package dependency for this adapter.", "@zohodesk/js-api-creator is a generic JavaScript API builder, not a dedicated official Zoho Desk ticketing provider client for this support workflow slice.", "Zoho Desk ASAP/Web SDK documentation targets embedded help-center or extension widgets, not backend ticketing provider operations."];
           result: "no-official-sdk-rest-adapter";
        };
     };
     providerRestAdapterException: {
        adapterKind: "no-official-sdk-rest-adapter";
        allowedDefaultRuntime: "built-in-rest-adapter";
        guardrails: readonly ["Keep backend ticketing calls behind ZohoDeskProviderClient and the built-in REST adapter until an official maintained Node/TypeScript Zoho Desk runtime SDK exists.", "Do not add @zohodesk/js-api-creator as the default provider SDK; it is a generic API builder, not a typed Zoho Desk ticketing client.", "If an official maintained runtime SDK is adopted later, switch implementation.strategy away from provider-rest-adapter and add a normal package.json runtime dependency."];
        hostSdkPath: "ZohoDeskProviderClient";
        reason: "No maintained official Zoho Desk Node/TypeScript runtime SDK was verified for backend ticketing operations; Zoho's official Desk SDK documentation is Java- or browser/widget-oriented for the surfaces checked.";
        reviewedAt: "2026-06-25";
        status: "accepted";
     };
  };
  name: "Zoho Desk";
  packageName: "@cognidesk/integration-ticketing-zoho-desk";
  privacyNotes: readonly ["Zoho Desk tickets can contain customer messages, contact details, SLA state, assignments, and internal comments."];
  provider: "zoho-desk";
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Create Zoho tickets"`; `providerObjects`: readonly \[\{ `kind`: `"zohoDeskTicket"`; `label`: `"Zoho Desk Ticket"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read Zoho tickets"`; `providerObjects`: readonly \[\{ `kind`: `"zohoDeskTicket"`; `label`: `"Zoho Desk Ticket"`; \}, \{ `kind`: `"zohoDeskTicketComment"`; `label`: `"Zoho Desk Ticket Comment"`; \}, \{ `kind`: `"zohoDeskThread"`; `label`: `"Zoho Desk Thread"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Update Zoho tickets"`; `providerObjects`: readonly \[\{ `kind`: `"zohoDeskTicket"`; `label`: `"Zoho Desk Ticket"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Search Zoho tickets"`; `providerObjects`: readonly \[\{ `kind`: `"zohoDeskTicket"`; `label`: `"Zoho Desk Ticket"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"handoff"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `label`: `"Attach handoff to Zoho Desk"`; `providerObjects`: readonly \[\{ `kind`: `"zohoDeskTicket"`; `label`: `"Zoho Desk Ticket"`; \}, \{ `kind`: `"zohoDeskTicketComment"`; `label`: `"Zoho Desk Ticket Comment"`; \}, \{ `kind`: `"zohoDeskThread"`; `label`: `"Zoho Desk Thread"`; \}, \{ `kind`: `"zohoDeskReply"`; `label`: `"Zoho Desk Reply"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"ticketing"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Zoho Desk API documentation"`; `url`: `"https://desk.zoho.com/DeskAPIDocument"`; \}, \{ `label`: `"Zoho Desk create ticket"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Createaticket"`; \}, \{ `label`: `"Zoho Desk list all tickets"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Listalltickets"`; \}, \{ `label`: `"Zoho Desk update ticket"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Updateaticket"`; \}, \{ `label`: `"Zoho Desk list ticket comments"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#TicketsComments#TicketsComments_Listallticketcomments"`; \}, \{ `label`: `"Zoho Desk create ticket comment"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#TicketsComments#TicketsComments_Createticketcomment"`; \}, \{ `label`: `"Zoho Desk list ticket threads"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Threads#Threads_Listallthreads"`; \}, \{ `label`: `"Zoho Desk send email reply"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Threads#Threads_SendEmailReply"`; \}, \{ `label`: `"Zoho Desk organizations"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Organizations"`; \}\]; `notes`: readonly \[`"Coverage is typed for Zoho Desk REST-backed ticket create, read, patch, ticket listing/search query passthrough, ticket comments, ticket threads, send-reply, organization readiness, and credential status used by Cognidesk support workflows."`, `"A host-injected ZohoDeskProviderClient remains available as an override for SDK-user-owned provider adapters, retry policy, or token refresh plumbing."`, `"This is not full Zoho Desk API coverage; contacts, accounts, departments, agents, teams, attachments, layouts, blueprints, assignment/skills actions, spam/trash lifecycle, webhooks, help center, analytics, and broader settings APIs remain outside this adapter."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Zoho Desk API documentation"`; `url`: `"https://desk.zoho.com/DeskAPIDocument"`; \}, \{ `label`: `"Zoho Desk create ticket"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Createaticket"`; \}, \{ `label`: `"Zoho Desk list all tickets"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Listalltickets"`; \}, \{ `label`: `"Zoho Desk update ticket"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Updateaticket"`; \}, \{ `label`: `"Zoho Desk list ticket comments"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#TicketsComments#TicketsComments_Listallticketcomments"`; \}, \{ `label`: `"Zoho Desk create ticket comment"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#TicketsComments#TicketsComments_Createticketcomment"`; \}, \{ `label`: `"Zoho Desk list ticket threads"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Threads#Threads_Listallthreads"`; \}, \{ `label`: `"Zoho Desk send email reply"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Threads#Threads_SendEmailReply"`; \}, \{ `label`: `"Zoho Desk organizations"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Organizations"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is typed for Zoho Desk REST-backed ticket create, read, patch, ticket listing/search query passthrough, ticket comments, ticket threads, send-reply, organization readiness, and credential status used by Cognidesk support workflows."`, `"A host-injected ZohoDeskProviderClient remains available as an override for SDK-user-owned provider adapters, retry policy, or token refresh plumbing."`, `"This is not full Zoho Desk API coverage; contacts, accounts, departments, agents, teams, attachments, layouts, blueprints, assignment/skills actions, spam/trash lifecycle, webhooks, help center, analytics, and broader settings APIs remain outside this adapter."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"zoho-desk-org"`; `label`: `"Zoho Desk organization ID"`; `metadata`: \{ `requiredWhen`: `"using-built-in-rest-adapter"`; \}; `required`: `false`; \}, \{ `id`: `"zoho-desk-api-access"`; `label`: `"Zoho Desk OAuth access"`; `metadata`: \{ `requiredWhen`: `"using-built-in-rest-adapter"`; `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `false`; `scopes`: readonly \[`"Desk.tickets.CREATE"`, `"Desk.tickets.READ"`, `"Desk.tickets.UPDATE"`, `"Desk.basic.READ"`\]; \}\] |
| `directions` | readonly \[`"bidirectional"`\] |
| `id` | `"ticketing.zoho-desk"` |
| `limitations` | readonly \[`"Departments, layouts, mandatory fields, assignment rules, blueprints, and visibility are SDK-user configuration."`, `"This package provides a constrained Zoho Desk REST/fetch transport for the declared support workflow operations; SDK users still own retry, rate-limit, OAuth token refresh, and regional endpoint policy beyond dataCenter/apiBaseUrl selection."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `attachmentsBlueprintsWebhooks`: `"provider-supported-not-typed"`; `comments`: `"typed-rest-create-list"`; `contactsAccountsAgentsDepartments`: `"provider-supported-not-typed"`; `organizationsReadiness`: `"typed-rest-read"`; `replies`: `"typed-rest-send"`; `slasAssignmentsSkills`: `"not-covered"`; `threads`: `"typed-rest-list"`; `tickets`: `"typed-rest-create-read-update-list"`; \}; `checkedProviderApiCoverage`: \{ `checkedFamilyCount`: `5`; `coverageArtifact`: `"docs/provider-coverage/zoho-desk-checked-rest-api-2026-06-18.inventory.json"`; `delegatedFamilyCount`: `0`; `delegatedOperationCount`: `0`; `gapFamilyCount`: `1`; `packageOwnedProviderOperationCount`: `9`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \}; `checkedProviderSdk`: \{ `candidates`: readonly \[\{ `package`: `"Zoho Desk Java SDK"`; `reason`: `"Official SDK for Java applications; it is not a runtime package this Node/TypeScript provider package can import."`; `result`: `"not-node-typescript-runtime"`; `source`: `"https://www.zoho.com/desk/developers/javasdk/"`; \}, \{ `checkedVersion`: `"1.0.25"`; `package`: `"@zohodesk/js-api-creator"`; `reason`: `"Maintained JavaScript package, but its README describes a generic API builder rather than a dedicated Zoho Desk typed raw client."`; `result`: `"not-provider-ticketing-sdk"`; `source`: `"https://www.npmjs.com/package/@zohodesk/js-api-creator"`; \}, \{ `package`: `"Zoho Desk extension JS SDK bundle"`; `reason`: `"Extension widget SDK loaded from Zoho-hosted browser script after ZOHODESK.extension.onload(); it is not a server-side REST client dependency."`; `result`: `"not-backend-runtime-sdk"`; `source`: `"https://help.zoho.com/portal/en/community/topic/building-extensions-8-create-widgets-using-the-js-sdk-bundle-in-the-zoho-desk-platform-part-1"`; \}, \{ `package`: `"Zoho Desk ASAP JavaScript APIs"`; `reason`: `"ASAP JavaScript APIs target embedded help-widget behavior in website pages, not backend ticket create/read/update/reply operations."`; `result`: `"not-backend-runtime-sdk"`; `source`: `"https://www.zoho.com/desk/developers/asap/"`; \}\]; `checkedAt`: `"2026-06-25"`; `officialRuntimeSdkAvailable`: `false`; `sources`: readonly \[`"https://www.zoho.com/desk/developers/"`, `"https://www.zoho.com/desk/developers/javasdk/"`, `"https://www.npmjs.com/package/@zohodesk/js-api-creator"`, `"https://help.zoho.com/portal/en/community/topic/building-extensions-8-create-widgets-using-the-js-sdk-bundle-in-the-zoho-desk-platform-part-1"`, `"https://www.zoho.com/desk/developers/asap/"`\]; `verdict`: `"no-official-sdk-rest-adapter"`; \}; `implementation`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `defaultClientPolicy`: `"use-built-in-rest-adapter-when-orgId-and-accessToken-are-configured"`; `manifestImport`: `"no-client-initialization"`; `officialRuntimeSdkAvailable`: `false`; `packageOwnedRestClient`: `true`; `providerClientInterface`: `"ZohoDeskProviderClient"`; `providerClientOverride`: `true`; `runtimePackage`: `"@cognidesk/integration-ticketing-zoho-desk"`; `strategy`: `"provider-rest-adapter"`; \}; `implementationStrategy`: `"no-official-sdk-rest-adapter"`; `providerClient`: \{ `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`; `importPolicy`: `"runtime-entrypoint-only"`; `interface`: `"ZohoDeskProviderClient"`; `package`: `"built-in-provider-rest-adapter"`; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `notes`: readonly \[`"Zoho's official Desk developer resources document REST APIs and a Java SDK; the Java SDK is not suitable as a Node/TypeScript package dependency for this adapter."`, `"@zohodesk/js-api-creator is a generic JavaScript API builder, not a dedicated official Zoho Desk ticketing provider client for this support workflow slice."`, `"Zoho Desk ASAP/Web SDK documentation targets embedded help-center or extension widgets, not backend ticketing provider operations."`\]; `result`: `"no-official-sdk-rest-adapter"`; \}; \}; `providerRestAdapterException`: \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedDefaultRuntime`: `"built-in-rest-adapter"`; `guardrails`: readonly \[`"Keep backend ticketing calls behind ZohoDeskProviderClient and the built-in REST adapter until an official maintained Node/TypeScript Zoho Desk runtime SDK exists."`, `"Do not add @zohodesk/js-api-creator as the default provider SDK; it is a generic API builder, not a typed Zoho Desk ticketing client."`, `"If an official maintained runtime SDK is adopted later, switch implementation.strategy away from provider-rest-adapter and add a normal package.json runtime dependency."`\]; `hostSdkPath`: `"ZohoDeskProviderClient"`; `reason`: `"No maintained official Zoho Desk Node/TypeScript runtime SDK was verified for backend ticketing operations; Zoho's official Desk SDK documentation is Java- or browser/widget-oriented for the surfaces checked."`; `reviewedAt`: `"2026-06-25"`; `status`: `"accepted"`; \}; \} |
| `metadata.channelCoverage` | \{ `attachmentsBlueprintsWebhooks`: `"provider-supported-not-typed"`; `comments`: `"typed-rest-create-list"`; `contactsAccountsAgentsDepartments`: `"provider-supported-not-typed"`; `organizationsReadiness`: `"typed-rest-read"`; `replies`: `"typed-rest-send"`; `slasAssignmentsSkills`: `"not-covered"`; `threads`: `"typed-rest-list"`; `tickets`: `"typed-rest-create-read-update-list"`; \} |
| `metadata.channelCoverage.attachmentsBlueprintsWebhooks` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.comments` | `"typed-rest-create-list"` |
| `metadata.channelCoverage.contactsAccountsAgentsDepartments` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.organizationsReadiness` | `"typed-rest-read"` |
| `metadata.channelCoverage.replies` | `"typed-rest-send"` |
| `metadata.channelCoverage.slasAssignmentsSkills` | `"not-covered"` |
| `metadata.channelCoverage.threads` | `"typed-rest-list"` |
| `metadata.channelCoverage.tickets` | `"typed-rest-create-read-update-list"` |
| `metadata.checkedProviderApiCoverage` | \{ `checkedFamilyCount`: `5`; `coverageArtifact`: `"docs/provider-coverage/zoho-desk-checked-rest-api-2026-06-18.inventory.json"`; `delegatedFamilyCount`: `0`; `delegatedOperationCount`: `0`; `gapFamilyCount`: `1`; `packageOwnedProviderOperationCount`: `9`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \} |
| `metadata.checkedProviderApiCoverage.checkedFamilyCount` | `5` |
| `metadata.checkedProviderApiCoverage.coverageArtifact` | `"docs/provider-coverage/zoho-desk-checked-rest-api-2026-06-18.inventory.json"` |
| `metadata.checkedProviderApiCoverage.delegatedFamilyCount` | `0` |
| `metadata.checkedProviderApiCoverage.delegatedOperationCount` | `0` |
| `metadata.checkedProviderApiCoverage.gapFamilyCount` | `1` |
| `metadata.checkedProviderApiCoverage.packageOwnedProviderOperationCount` | `9` |
| `metadata.checkedProviderApiCoverage.sourceKind` | `"checked-endpoint-family-inventory"` |
| `metadata.checkedProviderApiCoverage.verifiedAt` | `"2026-06-18"` |
| `metadata.checkedProviderSdk` | \{ `candidates`: readonly \[\{ `package`: `"Zoho Desk Java SDK"`; `reason`: `"Official SDK for Java applications; it is not a runtime package this Node/TypeScript provider package can import."`; `result`: `"not-node-typescript-runtime"`; `source`: `"https://www.zoho.com/desk/developers/javasdk/"`; \}, \{ `checkedVersion`: `"1.0.25"`; `package`: `"@zohodesk/js-api-creator"`; `reason`: `"Maintained JavaScript package, but its README describes a generic API builder rather than a dedicated Zoho Desk typed raw client."`; `result`: `"not-provider-ticketing-sdk"`; `source`: `"https://www.npmjs.com/package/@zohodesk/js-api-creator"`; \}, \{ `package`: `"Zoho Desk extension JS SDK bundle"`; `reason`: `"Extension widget SDK loaded from Zoho-hosted browser script after ZOHODESK.extension.onload(); it is not a server-side REST client dependency."`; `result`: `"not-backend-runtime-sdk"`; `source`: `"https://help.zoho.com/portal/en/community/topic/building-extensions-8-create-widgets-using-the-js-sdk-bundle-in-the-zoho-desk-platform-part-1"`; \}, \{ `package`: `"Zoho Desk ASAP JavaScript APIs"`; `reason`: `"ASAP JavaScript APIs target embedded help-widget behavior in website pages, not backend ticket create/read/update/reply operations."`; `result`: `"not-backend-runtime-sdk"`; `source`: `"https://www.zoho.com/desk/developers/asap/"`; \}\]; `checkedAt`: `"2026-06-25"`; `officialRuntimeSdkAvailable`: `false`; `sources`: readonly \[`"https://www.zoho.com/desk/developers/"`, `"https://www.zoho.com/desk/developers/javasdk/"`, `"https://www.npmjs.com/package/@zohodesk/js-api-creator"`, `"https://help.zoho.com/portal/en/community/topic/building-extensions-8-create-widgets-using-the-js-sdk-bundle-in-the-zoho-desk-platform-part-1"`, `"https://www.zoho.com/desk/developers/asap/"`\]; `verdict`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.checkedProviderSdk.candidates` | readonly \[\{ `package`: `"Zoho Desk Java SDK"`; `reason`: `"Official SDK for Java applications; it is not a runtime package this Node/TypeScript provider package can import."`; `result`: `"not-node-typescript-runtime"`; `source`: `"https://www.zoho.com/desk/developers/javasdk/"`; \}, \{ `checkedVersion`: `"1.0.25"`; `package`: `"@zohodesk/js-api-creator"`; `reason`: `"Maintained JavaScript package, but its README describes a generic API builder rather than a dedicated Zoho Desk typed raw client."`; `result`: `"not-provider-ticketing-sdk"`; `source`: `"https://www.npmjs.com/package/@zohodesk/js-api-creator"`; \}, \{ `package`: `"Zoho Desk extension JS SDK bundle"`; `reason`: `"Extension widget SDK loaded from Zoho-hosted browser script after ZOHODESK.extension.onload(); it is not a server-side REST client dependency."`; `result`: `"not-backend-runtime-sdk"`; `source`: `"https://help.zoho.com/portal/en/community/topic/building-extensions-8-create-widgets-using-the-js-sdk-bundle-in-the-zoho-desk-platform-part-1"`; \}, \{ `package`: `"Zoho Desk ASAP JavaScript APIs"`; `reason`: `"ASAP JavaScript APIs target embedded help-widget behavior in website pages, not backend ticket create/read/update/reply operations."`; `result`: `"not-backend-runtime-sdk"`; `source`: `"https://www.zoho.com/desk/developers/asap/"`; \}\] |
| `metadata.checkedProviderSdk.checkedAt` | `"2026-06-25"` |
| `metadata.checkedProviderSdk.officialRuntimeSdkAvailable` | `false` |
| `metadata.checkedProviderSdk.sources` | readonly \[`"https://www.zoho.com/desk/developers/"`, `"https://www.zoho.com/desk/developers/javasdk/"`, `"https://www.npmjs.com/package/@zohodesk/js-api-creator"`, `"https://help.zoho.com/portal/en/community/topic/building-extensions-8-create-widgets-using-the-js-sdk-bundle-in-the-zoho-desk-platform-part-1"`, `"https://www.zoho.com/desk/developers/asap/"`\] |
| `metadata.checkedProviderSdk.verdict` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `defaultClientPolicy`: `"use-built-in-rest-adapter-when-orgId-and-accessToken-are-configured"`; `manifestImport`: `"no-client-initialization"`; `officialRuntimeSdkAvailable`: `false`; `packageOwnedRestClient`: `true`; `providerClientInterface`: `"ZohoDeskProviderClient"`; `providerClientOverride`: `true`; `runtimePackage`: `"@cognidesk/integration-ticketing-zoho-desk"`; `strategy`: `"provider-rest-adapter"`; \} |
| `metadata.implementation.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.implementation.defaultClientPolicy` | `"use-built-in-rest-adapter-when-orgId-and-accessToken-are-configured"` |
| `metadata.implementation.manifestImport` | `"no-client-initialization"` |
| `metadata.implementation.officialRuntimeSdkAvailable` | `false` |
| `metadata.implementation.packageOwnedRestClient` | `true` |
| `metadata.implementation.providerClientInterface` | `"ZohoDeskProviderClient"` |
| `metadata.implementation.providerClientOverride` | `true` |
| `metadata.implementation.runtimePackage` | `"@cognidesk/integration-ticketing-zoho-desk"` |
| `metadata.implementation.strategy` | `"provider-rest-adapter"` |
| `metadata.implementationStrategy` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerClient` | \{ `defaultClientPolicy`: `"configured-rest-default-with-host-client-override"`; `importPolicy`: `"runtime-entrypoint-only"`; `interface`: `"ZohoDeskProviderClient"`; `package`: `"built-in-provider-rest-adapter"`; `sdkDecision`: \{ `checkedAt`: `"2026-06-25"`; `notes`: readonly \[`"Zoho's official Desk developer resources document REST APIs and a Java SDK; the Java SDK is not suitable as a Node/TypeScript package dependency for this adapter."`, `"@zohodesk/js-api-creator is a generic JavaScript API builder, not a dedicated official Zoho Desk ticketing provider client for this support workflow slice."`, `"Zoho Desk ASAP/Web SDK documentation targets embedded help-center or extension widgets, not backend ticketing provider operations."`\]; `result`: `"no-official-sdk-rest-adapter"`; \}; \} |
| `metadata.providerClient.defaultClientPolicy` | `"configured-rest-default-with-host-client-override"` |
| `metadata.providerClient.importPolicy` | `"runtime-entrypoint-only"` |
| `metadata.providerClient.interface` | `"ZohoDeskProviderClient"` |
| `metadata.providerClient.package` | `"built-in-provider-rest-adapter"` |
| `metadata.providerClient.sdkDecision` | \{ `checkedAt`: `"2026-06-25"`; `notes`: readonly \[`"Zoho's official Desk developer resources document REST APIs and a Java SDK; the Java SDK is not suitable as a Node/TypeScript package dependency for this adapter."`, `"@zohodesk/js-api-creator is a generic JavaScript API builder, not a dedicated official Zoho Desk ticketing provider client for this support workflow slice."`, `"Zoho Desk ASAP/Web SDK documentation targets embedded help-center or extension widgets, not backend ticketing provider operations."`\]; `result`: `"no-official-sdk-rest-adapter"`; \} |
| `metadata.providerClient.sdkDecision.checkedAt` | `"2026-06-25"` |
| `metadata.providerClient.sdkDecision.notes` | readonly \[`"Zoho's official Desk developer resources document REST APIs and a Java SDK; the Java SDK is not suitable as a Node/TypeScript package dependency for this adapter."`, `"@zohodesk/js-api-creator is a generic JavaScript API builder, not a dedicated official Zoho Desk ticketing provider client for this support workflow slice."`, `"Zoho Desk ASAP/Web SDK documentation targets embedded help-center or extension widgets, not backend ticketing provider operations."`\] |
| `metadata.providerClient.sdkDecision.result` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapterException` | \{ `adapterKind`: `"no-official-sdk-rest-adapter"`; `allowedDefaultRuntime`: `"built-in-rest-adapter"`; `guardrails`: readonly \[`"Keep backend ticketing calls behind ZohoDeskProviderClient and the built-in REST adapter until an official maintained Node/TypeScript Zoho Desk runtime SDK exists."`, `"Do not add @zohodesk/js-api-creator as the default provider SDK; it is a generic API builder, not a typed Zoho Desk ticketing client."`, `"If an official maintained runtime SDK is adopted later, switch implementation.strategy away from provider-rest-adapter and add a normal package.json runtime dependency."`\]; `hostSdkPath`: `"ZohoDeskProviderClient"`; `reason`: `"No maintained official Zoho Desk Node/TypeScript runtime SDK was verified for backend ticketing operations; Zoho's official Desk SDK documentation is Java- or browser/widget-oriented for the surfaces checked."`; `reviewedAt`: `"2026-06-25"`; `status`: `"accepted"`; \} |
| `metadata.providerRestAdapterException.adapterKind` | `"no-official-sdk-rest-adapter"` |
| `metadata.providerRestAdapterException.allowedDefaultRuntime` | `"built-in-rest-adapter"` |
| `metadata.providerRestAdapterException.guardrails` | readonly \[`"Keep backend ticketing calls behind ZohoDeskProviderClient and the built-in REST adapter until an official maintained Node/TypeScript Zoho Desk runtime SDK exists."`, `"Do not add @zohodesk/js-api-creator as the default provider SDK; it is a generic API builder, not a typed Zoho Desk ticketing client."`, `"If an official maintained runtime SDK is adopted later, switch implementation.strategy away from provider-rest-adapter and add a normal package.json runtime dependency."`\] |
| `metadata.providerRestAdapterException.hostSdkPath` | `"ZohoDeskProviderClient"` |
| `metadata.providerRestAdapterException.reason` | `"No maintained official Zoho Desk Node/TypeScript runtime SDK was verified for backend ticketing operations; Zoho's official Desk SDK documentation is Java- or browser/widget-oriented for the surfaces checked."` |
| `metadata.providerRestAdapterException.reviewedAt` | `"2026-06-25"` |
| `metadata.providerRestAdapterException.status` | `"accepted"` |
| `name` | `"Zoho Desk"` |
| `packageName` | `"@cognidesk/integration-ticketing-zoho-desk"` |
| `privacyNotes` | readonly \[`"Zoho Desk tickets can contain customer messages, contact details, SLA state, assignments, and internal comments."`\] |
| `provider` | `"zoho-desk"` |
| `trustLevel` | `"official"` |
