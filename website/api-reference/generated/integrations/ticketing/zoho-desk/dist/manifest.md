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
     notes: readonly ["Coverage is typed for Zoho Desk ticket create, read, patch, ticket listing/search query passthrough, ticket comments, ticket threads, send-reply, organization readiness, and credential status used by Cognidesk support workflows.", "This is not full Zoho Desk API coverage; contacts, accounts, departments, agents, teams, attachments, layouts, blueprints, assignment/skills actions, spam/trash lifecycle, webhooks, help center, analytics, and broader settings APIs remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     id: "zoho-desk-org";
     label: "Zoho Desk organization ID";
     required: true;
   }, {
     id: "zoho-desk-api-access";
     label: "Zoho Desk OAuth access";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["Desk.tickets.CREATE", "Desk.tickets.READ", "Desk.tickets.UPDATE", "Desk.basic.READ"];
  }];
  directions: readonly ["bidirectional"];
  id: "ticketing.zoho-desk";
  limitations: readonly ["Departments, layouts, mandatory fields, assignment rules, blueprints, and visibility are SDK-user configuration."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        attachmentsBlueprintsWebhooks: "provider-supported-not-typed";
        comments: "typed-create-list";
        contactsAccountsAgentsDepartments: "provider-supported-not-typed";
        organizationsReadiness: "typed-read";
        replies: "typed-send";
        slasAssignmentsSkills: "not-covered";
        threads: "typed-list";
        tickets: "typed-create-read-update-list";
     };
     checkedProviderApiCoverage: {
        checkedFamilyCount: 5;
        coverageArtifact: "docs/provider-coverage/zoho-desk-checked-rest-api-2026-06-18.inventory.json";
        gapFamilyCount: 1;
        implementedFamilyCount: 4;
        implementedOperationCount: 9;
        sourceKind: "checked-endpoint-family-inventory";
        verifiedAt: "2026-06-18";
     };
     implementation: {
        manifestImport: "no-sdk-client-initialization";
        runtimePackage: "@cognidesk/integration-ticketing-zoho-desk";
        strategy: "direct-http-support-slice";
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
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Zoho Desk API documentation"`; `url`: `"https://desk.zoho.com/DeskAPIDocument"`; \}, \{ `label`: `"Zoho Desk create ticket"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Createaticket"`; \}, \{ `label`: `"Zoho Desk list all tickets"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Listalltickets"`; \}, \{ `label`: `"Zoho Desk update ticket"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Updateaticket"`; \}, \{ `label`: `"Zoho Desk list ticket comments"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#TicketsComments#TicketsComments_Listallticketcomments"`; \}, \{ `label`: `"Zoho Desk create ticket comment"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#TicketsComments#TicketsComments_Createticketcomment"`; \}, \{ `label`: `"Zoho Desk list ticket threads"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Threads#Threads_Listallthreads"`; \}, \{ `label`: `"Zoho Desk send email reply"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Threads#Threads_SendEmailReply"`; \}, \{ `label`: `"Zoho Desk organizations"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Organizations"`; \}\]; `notes`: readonly \[`"Coverage is typed for Zoho Desk ticket create, read, patch, ticket listing/search query passthrough, ticket comments, ticket threads, send-reply, organization readiness, and credential status used by Cognidesk support workflows."`, `"This is not full Zoho Desk API coverage; contacts, accounts, departments, agents, teams, attachments, layouts, blueprints, assignment/skills actions, spam/trash lifecycle, webhooks, help center, analytics, and broader settings APIs remain outside this adapter."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Zoho Desk API documentation"`; `url`: `"https://desk.zoho.com/DeskAPIDocument"`; \}, \{ `label`: `"Zoho Desk create ticket"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Createaticket"`; \}, \{ `label`: `"Zoho Desk list all tickets"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Listalltickets"`; \}, \{ `label`: `"Zoho Desk update ticket"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Tickets#Tickets_Updateaticket"`; \}, \{ `label`: `"Zoho Desk list ticket comments"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#TicketsComments#TicketsComments_Listallticketcomments"`; \}, \{ `label`: `"Zoho Desk create ticket comment"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#TicketsComments#TicketsComments_Createticketcomment"`; \}, \{ `label`: `"Zoho Desk list ticket threads"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Threads#Threads_Listallthreads"`; \}, \{ `label`: `"Zoho Desk send email reply"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Threads#Threads_SendEmailReply"`; \}, \{ `label`: `"Zoho Desk organizations"`; `url`: `"https://desk.zoho.com/DeskAPIDocument#Organizations"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is typed for Zoho Desk ticket create, read, patch, ticket listing/search query passthrough, ticket comments, ticket threads, send-reply, organization readiness, and credential status used by Cognidesk support workflows."`, `"This is not full Zoho Desk API coverage; contacts, accounts, departments, agents, teams, attachments, layouts, blueprints, assignment/skills actions, spam/trash lifecycle, webhooks, help center, analytics, and broader settings APIs remain outside this adapter."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `id`: `"zoho-desk-org"`; `label`: `"Zoho Desk organization ID"`; `required`: `true`; \}, \{ `id`: `"zoho-desk-api-access"`; `label`: `"Zoho Desk OAuth access"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: readonly \[`"Desk.tickets.CREATE"`, `"Desk.tickets.READ"`, `"Desk.tickets.UPDATE"`, `"Desk.basic.READ"`\]; \}\] |
| `directions` | readonly \[`"bidirectional"`\] |
| `id` | `"ticketing.zoho-desk"` |
| `limitations` | readonly \[`"Departments, layouts, mandatory fields, assignment rules, blueprints, and visibility are SDK-user configuration."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `attachmentsBlueprintsWebhooks`: `"provider-supported-not-typed"`; `comments`: `"typed-create-list"`; `contactsAccountsAgentsDepartments`: `"provider-supported-not-typed"`; `organizationsReadiness`: `"typed-read"`; `replies`: `"typed-send"`; `slasAssignmentsSkills`: `"not-covered"`; `threads`: `"typed-list"`; `tickets`: `"typed-create-read-update-list"`; \}; `checkedProviderApiCoverage`: \{ `checkedFamilyCount`: `5`; `coverageArtifact`: `"docs/provider-coverage/zoho-desk-checked-rest-api-2026-06-18.inventory.json"`; `gapFamilyCount`: `1`; `implementedFamilyCount`: `4`; `implementedOperationCount`: `9`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \}; `implementation`: \{ `manifestImport`: `"no-sdk-client-initialization"`; `runtimePackage`: `"@cognidesk/integration-ticketing-zoho-desk"`; `strategy`: `"direct-http-support-slice"`; \}; \} |
| `metadata.channelCoverage` | \{ `attachmentsBlueprintsWebhooks`: `"provider-supported-not-typed"`; `comments`: `"typed-create-list"`; `contactsAccountsAgentsDepartments`: `"provider-supported-not-typed"`; `organizationsReadiness`: `"typed-read"`; `replies`: `"typed-send"`; `slasAssignmentsSkills`: `"not-covered"`; `threads`: `"typed-list"`; `tickets`: `"typed-create-read-update-list"`; \} |
| `metadata.channelCoverage.attachmentsBlueprintsWebhooks` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.comments` | `"typed-create-list"` |
| `metadata.channelCoverage.contactsAccountsAgentsDepartments` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.organizationsReadiness` | `"typed-read"` |
| `metadata.channelCoverage.replies` | `"typed-send"` |
| `metadata.channelCoverage.slasAssignmentsSkills` | `"not-covered"` |
| `metadata.channelCoverage.threads` | `"typed-list"` |
| `metadata.channelCoverage.tickets` | `"typed-create-read-update-list"` |
| `metadata.checkedProviderApiCoverage` | \{ `checkedFamilyCount`: `5`; `coverageArtifact`: `"docs/provider-coverage/zoho-desk-checked-rest-api-2026-06-18.inventory.json"`; `gapFamilyCount`: `1`; `implementedFamilyCount`: `4`; `implementedOperationCount`: `9`; `sourceKind`: `"checked-endpoint-family-inventory"`; `verifiedAt`: `"2026-06-18"`; \} |
| `metadata.checkedProviderApiCoverage.checkedFamilyCount` | `5` |
| `metadata.checkedProviderApiCoverage.coverageArtifact` | `"docs/provider-coverage/zoho-desk-checked-rest-api-2026-06-18.inventory.json"` |
| `metadata.checkedProviderApiCoverage.gapFamilyCount` | `1` |
| `metadata.checkedProviderApiCoverage.implementedFamilyCount` | `4` |
| `metadata.checkedProviderApiCoverage.implementedOperationCount` | `9` |
| `metadata.checkedProviderApiCoverage.sourceKind` | `"checked-endpoint-family-inventory"` |
| `metadata.checkedProviderApiCoverage.verifiedAt` | `"2026-06-18"` |
| `metadata.implementation` | \{ `manifestImport`: `"no-sdk-client-initialization"`; `runtimePackage`: `"@cognidesk/integration-ticketing-zoho-desk"`; `strategy`: `"direct-http-support-slice"`; \} |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.runtimePackage` | `"@cognidesk/integration-ticketing-zoho-desk"` |
| `metadata.implementation.strategy` | `"direct-http-support-slice"` |
| `name` | `"Zoho Desk"` |
| `packageName` | `"@cognidesk/integration-ticketing-zoho-desk"` |
| `privacyNotes` | readonly \[`"Zoho Desk tickets can contain customer messages, contact details, SLA state, assignments, and internal comments."`\] |
| `provider` | `"zoho-desk"` |
| `trustLevel` | `"official"` |
