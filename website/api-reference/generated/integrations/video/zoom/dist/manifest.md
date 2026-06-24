# integrations/video/zoom/dist/manifest

## Variables

### zoomVideoProviderManifest

```ts
const zoomVideoProviderManifest: {
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
     | "inbound-only"
     | "outbound-only"
     | "bidirectional"
     | "receive-only"
    | "send-only")[];
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
     capability: "schedule";
     changesWorkflow: true;
     description: "Creates Zoom meetings through SDK-user-selected scheduling or escalation workflows.";
     exposesSensitiveData: true;
     label: "Schedule Zoom meetings";
     providerObjects: readonly [{
        kind: "zoomMeeting";
        label: "Zoom Meeting";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Zoom meeting resources with SDK-user-supplied topic, timing, recurrence, and settings.";
     exposesSensitiveData: true;
     label: "Create Zoom meetings";
     providerObjects: readonly [{
        kind: "zoomMeeting";
        label: "Zoom Meeting";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Lists Zoom meetings and reads meeting details by meeting ID.";
     exposesSensitiveData: true;
     label: "Read Zoom meetings";
     providerObjects: readonly [{
        kind: "zoomMeeting";
        label: "Zoom Meeting";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "delete-provider-object";
     changesWorkflow: true;
     description: "Deletes Zoom meetings when SDK-user lifecycle or retention policy permits deletion.";
     exposesSensitiveData: true;
     label: "Delete Zoom meetings";
     providerObjects: readonly [{
        kind: "zoomMeeting";
        label: "Zoom Meeting";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates Zoom meeting fields, recurrence, tracking fields, or settings when SDK-user policy permits mutation.";
     exposesSensitiveData: true;
     label: "Update Zoom meetings";
     providerObjects: readonly [{
        kind: "zoomMeeting";
        label: "Zoom Meeting";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "receive";
     description: "Validates and parses Zoom webhook payloads for SDK-user-owned meeting lifecycle workflows.";
     exposesSensitiveData: true;
     label: "Receive Zoom webhooks";
     providerObjects: readonly [{
        kind: "zoomWebhookEvent";
        label: "Zoom Webhook Event";
      }, {
        kind: "zoomMeeting";
        label: "Zoom Meeting";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "zoom.request-signature";
     description: "Validates Zoom x-zm-signature and x-zm-request-timestamp values and supports endpoint URL validation challenges.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Zoom webhook signatures";
     providerObjects: readonly [{
        kind: "zoomSignedRequest";
        label: "Zoom Signed Request";
     }];
     requiresCredential: true;
  }];
  category: "video";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Zoom Meetings API Hub OpenAPI";
        url: "https://developers.zoom.us/api-hub/meetings/methods/endpoints.json";
      }, {
        label: "Zoom Meetings API reference";
        url: "https://developers.zoom.us/docs/api/meetings/";
      }, {
        label: "Zoom webhooks reference";
        url: "https://developers.zoom.us/docs/api/rest/webhook-reference/";
      }, {
        label: "Zoom webhook validation";
        url: "https://developers.zoom.us/docs/api/rest/webhook-reference/#validate-your-webhook-endpoint";
     }];
     notes: readonly ["Coverage includes generated per-operation functions for every operation in Zoom's official Meetings API Hub OpenAPI spec.", "Typed convenience helpers remain available for meetings create/list/read/update/delete, current-user readiness, webhook URL-validation handling, and x-zm-signature verification.", "This package is a generated Zoom Meetings API domain slice, not full Zoom platform coverage. Zoom Phone, Contact Center, Team Chat, Rooms, Marketplace app management outside the Meetings API Hub, account administration beyond this spec, and full webhook/event catalogs remain separate Zoom surfaces.", "The SDK user owns OAuth scopes, host delegation, account plan/admin settings, meeting lifecycle policy, recording/transcript consent, retention, deletion, and participant disclosure decisions."];
     scope: "provider-api-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side OAuth access token for Zoom REST API meeting and user endpoints.";
     id: "zoom-oauth-access-token";
     label: "Zoom OAuth access token";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["meeting:write", "meeting:read", "user:read", "meeting:write:meeting", "meeting:read:list_meetings", "meeting:read:meeting", "meeting:update:meeting", "meeting:delete:meeting", "user:read:user"];
   }, {
     description: "Server-side secret token used to validate Zoom webhook request signatures.";
     id: "zoom-webhook-secret-token";
     label: "Zoom webhook secret token";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "video.zoom";
  limitations: readonly ["Available meeting operations depend on the SDK user's Zoom OAuth scopes, account plan, account-level settings, admin policy, and delegated host permissions.", "This package does not choose whether a video workflow is inbound, outbound, customer-facing, internal, recorded, retained, or escalated; those decisions remain SDK-user configuration.", "Live meeting media transport, captions, cloud recording retrieval, and telephony dial-out are outside this package's REST and webhook foundation."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        currentUser: "typed-read";
        meetings: "typed-create-list-read-update-delete";
        meetingsApiHub: "generated-constrained-support-slice";
        meetingsRecordingsRegistrantsReportsDevicesTspWebinars: "generated-full-surface-where-present-in-meetings-api-hub";
        webhooks: "typed-validate-parse";
        webhookUrlValidation: "typed-response";
        zoomPhoneContactCenterTeamChatRoomsCalendar: "provider-supported-not-typed-separate-surface";
     };
     generatedProviderSliceVerification: {
        allowlist: readonly ["Archiving", "Cloud Recording", "Devices", "H323 Devices", "In-Meeting Apps", "In-Meeting Features", "Invitation & Registration", "Live streaming", "Meetings", "PAC", "Polls", "Reports", "SIP Phone", "Summaries", "Surveys", "Templates", "Tracking Field", "TSP", "Webinars"];
        apiVersion: "2";
        coverageArtifact: "docs/provider-coverage/zoom-meetings-api-2026-06-18.operations.json";
        documentedOperationCount: 184;
        documentedPathCount: 129;
        functionCatalogArtifact: "docs/provider-coverage/zoom-meetings-api-2026-06-18.functions.json";
        functionCatalogChecksumSha256: "8934aa5f43e3a15d5a087dcf663854d41bb013d38aee8d65171b967bcc43202b";
        generatedFunctionCount: 184;
        implementedOperationCount: 184;
        operationCatalogArtifact: "docs/provider-coverage/zoom-meetings-api-2026-06-18.operations.json";
        operationCatalogChecksumSha256: "d32cdc0636126fef0491cfd13f95219359be167d339a57b4b4322f7be1146392";
        provider: "zoom-meetings-api-hub";
        sourceChecksumSha256: "07acb50f2a3f070b161ed57fbd9ca9ae83db42a6c1fa538f36b7e1c8300b6b06";
        unimplementedOperationCount: 0;
        verifiedAt: "2026-06-21";
     };
     sdkViability: {
        checkedAt: "2026-06-21";
        decision: "no-official-maintained-server-rest-sdk-found";
        rejectedSdkPackages: readonly [{
           packageName: "@zoom/meetingsdk";
           reason: "Official browser Meeting SDK for embedding/joining meetings, not a server REST API client.";
         }, {
           packageName: "@zoom/videosdk";
           reason: "Official browser Video SDK for custom video experiences, not the Zoom Meetings REST API.";
         }, {
           packageName: "@zoom/rtms";
           reason: "Official Node real-time media streams SDK, not scheduling/resource REST management.";
        }];
     };
  };
  name: "Zoom Meetings";
  operations: readonly [{
     alias: "video.meeting.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "zoomMeeting";
     sideEffect: true;
   }, {
     alias: "video.meeting.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "zoomMeeting";
   }, {
     alias: "video.meeting.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "zoomMeeting";
   }, {
     alias: "video.meeting.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "zoomMeeting";
     sideEffect: true;
   }, {
     alias: "video.meeting.delete";
     capability: "delete-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "zoomMeeting";
     sideEffect: true;
   }, {
     alias: "video.user.current.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "zoomUser";
   }, {
     alias: "zoom.meetings.request";
     capability: "read-provider-object";
     extension: true;
     metadata: {
        supportSliceEscapeHatch: true;
     };
     providerObject: "zoomMeetingsApiOperation";
   }, {
     alias: "zoom.webhook.parse";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "zoomWebhookEvent";
  }];
  packageName: "@cognidesk/integration-video-zoom";
  privacyNotes: readonly ["Zoom meetings and webhooks can contain participant identifiers, host details, invite links, meeting metadata, chat-capable workflow context, and recording-related event metadata.", "Zoom OAuth access tokens and webhook secret tokens stay server-side and are represented in Studio only as credential readiness.", "User consent, meeting disclosure, recording enablement, transcript use, retention, and deletion are owned by the SDK user's Zoom account configuration and application policy."];
  provider: "zoom";
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
| `directions` | ( \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"` \| `"receive-only"` \| `"send-only"`)[] |
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"schedule"`; `changesWorkflow`: `true`; `description`: `"Creates Zoom meetings through SDK-user-selected scheduling or escalation workflows."`; `exposesSensitiveData`: `true`; `label`: `"Schedule Zoom meetings"`; `providerObjects`: readonly \[\{ `kind`: `"zoomMeeting"`; `label`: `"Zoom Meeting"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates Zoom meeting resources with SDK-user-supplied topic, timing, recurrence, and settings."`; `exposesSensitiveData`: `true`; `label`: `"Create Zoom meetings"`; `providerObjects`: readonly \[\{ `kind`: `"zoomMeeting"`; `label`: `"Zoom Meeting"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Lists Zoom meetings and reads meeting details by meeting ID."`; `exposesSensitiveData`: `true`; `label`: `"Read Zoom meetings"`; `providerObjects`: readonly \[\{ `kind`: `"zoomMeeting"`; `label`: `"Zoom Meeting"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"delete-provider-object"`; `changesWorkflow`: `true`; `description`: `"Deletes Zoom meetings when SDK-user lifecycle or retention policy permits deletion."`; `exposesSensitiveData`: `true`; `label`: `"Delete Zoom meetings"`; `providerObjects`: readonly \[\{ `kind`: `"zoomMeeting"`; `label`: `"Zoom Meeting"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates Zoom meeting fields, recurrence, tracking fields, or settings when SDK-user policy permits mutation."`; `exposesSensitiveData`: `true`; `label`: `"Update Zoom meetings"`; `providerObjects`: readonly \[\{ `kind`: `"zoomMeeting"`; `label`: `"Zoom Meeting"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates and parses Zoom webhook payloads for SDK-user-owned meeting lifecycle workflows."`; `exposesSensitiveData`: `true`; `label`: `"Receive Zoom webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"zoomWebhookEvent"`; `label`: `"Zoom Webhook Event"`; \}, \{ `kind`: `"zoomMeeting"`; `label`: `"Zoom Meeting"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"zoom.request-signature"`; `description`: `"Validates Zoom x-zm-signature and x-zm-request-timestamp values and supports endpoint URL validation challenges."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Zoom webhook signatures"`; `providerObjects`: readonly \[\{ `kind`: `"zoomSignedRequest"`; `label`: `"Zoom Signed Request"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"video"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Zoom Meetings API Hub OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/meetings/methods/endpoints.json"`; \}, \{ `label`: `"Zoom Meetings API reference"`; `url`: `"https://developers.zoom.us/docs/api/meetings/"`; \}, \{ `label`: `"Zoom webhooks reference"`; `url`: `"https://developers.zoom.us/docs/api/rest/webhook-reference/"`; \}, \{ `label`: `"Zoom webhook validation"`; `url`: `"https://developers.zoom.us/docs/api/rest/webhook-reference/#validate-your-webhook-endpoint"`; \}\]; `notes`: readonly \[`"Coverage includes generated per-operation functions for every operation in Zoom's official Meetings API Hub OpenAPI spec."`, `"Typed convenience helpers remain available for meetings create/list/read/update/delete, current-user readiness, webhook URL-validation handling, and x-zm-signature verification."`, `"This package is a generated Zoom Meetings API domain slice, not full Zoom platform coverage. Zoom Phone, Contact Center, Team Chat, Rooms, Marketplace app management outside the Meetings API Hub, account administration beyond this spec, and full webhook/event catalogs remain separate Zoom surfaces."`, `"The SDK user owns OAuth scopes, host delegation, account plan/admin settings, meeting lifecycle policy, recording/transcript consent, retention, deletion, and participant disclosure decisions."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Zoom Meetings API Hub OpenAPI"`; `url`: `"https://developers.zoom.us/api-hub/meetings/methods/endpoints.json"`; \}, \{ `label`: `"Zoom Meetings API reference"`; `url`: `"https://developers.zoom.us/docs/api/meetings/"`; \}, \{ `label`: `"Zoom webhooks reference"`; `url`: `"https://developers.zoom.us/docs/api/rest/webhook-reference/"`; \}, \{ `label`: `"Zoom webhook validation"`; `url`: `"https://developers.zoom.us/docs/api/rest/webhook-reference/#validate-your-webhook-endpoint"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage includes generated per-operation functions for every operation in Zoom's official Meetings API Hub OpenAPI spec."`, `"Typed convenience helpers remain available for meetings create/list/read/update/delete, current-user readiness, webhook URL-validation handling, and x-zm-signature verification."`, `"This package is a generated Zoom Meetings API domain slice, not full Zoom platform coverage. Zoom Phone, Contact Center, Team Chat, Rooms, Marketplace app management outside the Meetings API Hub, account administration beyond this spec, and full webhook/event catalogs remain separate Zoom surfaces."`, `"The SDK user owns OAuth scopes, host delegation, account plan/admin settings, meeting lifecycle policy, recording/transcript consent, retention, deletion, and participant disclosure decisions."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Server-side OAuth access token for Zoom REST API meeting and user endpoints."`; `id`: `"zoom-oauth-access-token"`; `label`: `"Zoom OAuth access token"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: readonly \[`"meeting:write"`, `"meeting:read"`, `"user:read"`, `"meeting:write:meeting"`, `"meeting:read:list_meetings"`, `"meeting:read:meeting"`, `"meeting:update:meeting"`, `"meeting:delete:meeting"`, `"user:read:user"`\]; \}, \{ `description`: `"Server-side secret token used to validate Zoom webhook request signatures."`; `id`: `"zoom-webhook-secret-token"`; `label`: `"Zoom webhook secret token"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"video.zoom"` |
| `limitations` | readonly \[`"Available meeting operations depend on the SDK user's Zoom OAuth scopes, account plan, account-level settings, admin policy, and delegated host permissions."`, `"This package does not choose whether a video workflow is inbound, outbound, customer-facing, internal, recorded, retained, or escalated; those decisions remain SDK-user configuration."`, `"Live meeting media transport, captions, cloud recording retrieval, and telephony dial-out are outside this package's REST and webhook foundation."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `currentUser`: `"typed-read"`; `meetings`: `"typed-create-list-read-update-delete"`; `meetingsApiHub`: `"generated-constrained-support-slice"`; `meetingsRecordingsRegistrantsReportsDevicesTspWebinars`: `"generated-full-surface-where-present-in-meetings-api-hub"`; `webhooks`: `"typed-validate-parse"`; `webhookUrlValidation`: `"typed-response"`; `zoomPhoneContactCenterTeamChatRoomsCalendar`: `"provider-supported-not-typed-separate-surface"`; \}; `generatedProviderSliceVerification`: \{ `allowlist`: readonly \[`"Archiving"`, `"Cloud Recording"`, `"Devices"`, `"H323 Devices"`, `"In-Meeting Apps"`, `"In-Meeting Features"`, `"Invitation & Registration"`, `"Live streaming"`, `"Meetings"`, `"PAC"`, `"Polls"`, `"Reports"`, `"SIP Phone"`, `"Summaries"`, `"Surveys"`, `"Templates"`, `"Tracking Field"`, `"TSP"`, `"Webinars"`\]; `apiVersion`: `"2"`; `coverageArtifact`: `"docs/provider-coverage/zoom-meetings-api-2026-06-18.operations.json"`; `documentedOperationCount`: `184`; `documentedPathCount`: `129`; `functionCatalogArtifact`: `"docs/provider-coverage/zoom-meetings-api-2026-06-18.functions.json"`; `functionCatalogChecksumSha256`: `"8934aa5f43e3a15d5a087dcf663854d41bb013d38aee8d65171b967bcc43202b"`; `generatedFunctionCount`: `184`; `implementedOperationCount`: `184`; `operationCatalogArtifact`: `"docs/provider-coverage/zoom-meetings-api-2026-06-18.operations.json"`; `operationCatalogChecksumSha256`: `"d32cdc0636126fef0491cfd13f95219359be167d339a57b4b4322f7be1146392"`; `provider`: `"zoom-meetings-api-hub"`; `sourceChecksumSha256`: `"07acb50f2a3f070b161ed57fbd9ca9ae83db42a6c1fa538f36b7e1c8300b6b06"`; `unimplementedOperationCount`: `0`; `verifiedAt`: `"2026-06-21"`; \}; `sdkViability`: \{ `checkedAt`: `"2026-06-21"`; `decision`: `"no-official-maintained-server-rest-sdk-found"`; `rejectedSdkPackages`: readonly \[\{ `packageName`: `"@zoom/meetingsdk"`; `reason`: `"Official browser Meeting SDK for embedding/joining meetings, not a server REST API client."`; \}, \{ `packageName`: `"@zoom/videosdk"`; `reason`: `"Official browser Video SDK for custom video experiences, not the Zoom Meetings REST API."`; \}, \{ `packageName`: `"@zoom/rtms"`; `reason`: `"Official Node real-time media streams SDK, not scheduling/resource REST management."`; \}\]; \}; \} |
| `metadata.channelCoverage` | \{ `currentUser`: `"typed-read"`; `meetings`: `"typed-create-list-read-update-delete"`; `meetingsApiHub`: `"generated-constrained-support-slice"`; `meetingsRecordingsRegistrantsReportsDevicesTspWebinars`: `"generated-full-surface-where-present-in-meetings-api-hub"`; `webhooks`: `"typed-validate-parse"`; `webhookUrlValidation`: `"typed-response"`; `zoomPhoneContactCenterTeamChatRoomsCalendar`: `"provider-supported-not-typed-separate-surface"`; \} |
| `metadata.channelCoverage.currentUser` | `"typed-read"` |
| `metadata.channelCoverage.meetings` | `"typed-create-list-read-update-delete"` |
| `metadata.channelCoverage.meetingsApiHub` | `"generated-constrained-support-slice"` |
| `metadata.channelCoverage.meetingsRecordingsRegistrantsReportsDevicesTspWebinars` | `"generated-full-surface-where-present-in-meetings-api-hub"` |
| `metadata.channelCoverage.webhooks` | `"typed-validate-parse"` |
| `metadata.channelCoverage.webhookUrlValidation` | `"typed-response"` |
| `metadata.channelCoverage.zoomPhoneContactCenterTeamChatRoomsCalendar` | `"provider-supported-not-typed-separate-surface"` |
| `metadata.generatedProviderSliceVerification` | \{ `allowlist`: readonly \[`"Archiving"`, `"Cloud Recording"`, `"Devices"`, `"H323 Devices"`, `"In-Meeting Apps"`, `"In-Meeting Features"`, `"Invitation & Registration"`, `"Live streaming"`, `"Meetings"`, `"PAC"`, `"Polls"`, `"Reports"`, `"SIP Phone"`, `"Summaries"`, `"Surveys"`, `"Templates"`, `"Tracking Field"`, `"TSP"`, `"Webinars"`\]; `apiVersion`: `"2"`; `coverageArtifact`: `"docs/provider-coverage/zoom-meetings-api-2026-06-18.operations.json"`; `documentedOperationCount`: `184`; `documentedPathCount`: `129`; `functionCatalogArtifact`: `"docs/provider-coverage/zoom-meetings-api-2026-06-18.functions.json"`; `functionCatalogChecksumSha256`: `"8934aa5f43e3a15d5a087dcf663854d41bb013d38aee8d65171b967bcc43202b"`; `generatedFunctionCount`: `184`; `implementedOperationCount`: `184`; `operationCatalogArtifact`: `"docs/provider-coverage/zoom-meetings-api-2026-06-18.operations.json"`; `operationCatalogChecksumSha256`: `"d32cdc0636126fef0491cfd13f95219359be167d339a57b4b4322f7be1146392"`; `provider`: `"zoom-meetings-api-hub"`; `sourceChecksumSha256`: `"07acb50f2a3f070b161ed57fbd9ca9ae83db42a6c1fa538f36b7e1c8300b6b06"`; `unimplementedOperationCount`: `0`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.generatedProviderSliceVerification.allowlist` | readonly \[`"Archiving"`, `"Cloud Recording"`, `"Devices"`, `"H323 Devices"`, `"In-Meeting Apps"`, `"In-Meeting Features"`, `"Invitation & Registration"`, `"Live streaming"`, `"Meetings"`, `"PAC"`, `"Polls"`, `"Reports"`, `"SIP Phone"`, `"Summaries"`, `"Surveys"`, `"Templates"`, `"Tracking Field"`, `"TSP"`, `"Webinars"`\] |
| `metadata.generatedProviderSliceVerification.apiVersion` | `"2"` |
| `metadata.generatedProviderSliceVerification.coverageArtifact` | `"docs/provider-coverage/zoom-meetings-api-2026-06-18.operations.json"` |
| `metadata.generatedProviderSliceVerification.documentedOperationCount` | `184` |
| `metadata.generatedProviderSliceVerification.documentedPathCount` | `129` |
| `metadata.generatedProviderSliceVerification.functionCatalogArtifact` | `"docs/provider-coverage/zoom-meetings-api-2026-06-18.functions.json"` |
| `metadata.generatedProviderSliceVerification.functionCatalogChecksumSha256` | `"8934aa5f43e3a15d5a087dcf663854d41bb013d38aee8d65171b967bcc43202b"` |
| `metadata.generatedProviderSliceVerification.generatedFunctionCount` | `184` |
| `metadata.generatedProviderSliceVerification.implementedOperationCount` | `184` |
| `metadata.generatedProviderSliceVerification.operationCatalogArtifact` | `"docs/provider-coverage/zoom-meetings-api-2026-06-18.operations.json"` |
| `metadata.generatedProviderSliceVerification.operationCatalogChecksumSha256` | `"d32cdc0636126fef0491cfd13f95219359be167d339a57b4b4322f7be1146392"` |
| `metadata.generatedProviderSliceVerification.provider` | `"zoom-meetings-api-hub"` |
| `metadata.generatedProviderSliceVerification.sourceChecksumSha256` | `"07acb50f2a3f070b161ed57fbd9ca9ae83db42a6c1fa538f36b7e1c8300b6b06"` |
| `metadata.generatedProviderSliceVerification.unimplementedOperationCount` | `0` |
| `metadata.generatedProviderSliceVerification.verifiedAt` | `"2026-06-21"` |
| `metadata.sdkViability` | \{ `checkedAt`: `"2026-06-21"`; `decision`: `"no-official-maintained-server-rest-sdk-found"`; `rejectedSdkPackages`: readonly \[\{ `packageName`: `"@zoom/meetingsdk"`; `reason`: `"Official browser Meeting SDK for embedding/joining meetings, not a server REST API client."`; \}, \{ `packageName`: `"@zoom/videosdk"`; `reason`: `"Official browser Video SDK for custom video experiences, not the Zoom Meetings REST API."`; \}, \{ `packageName`: `"@zoom/rtms"`; `reason`: `"Official Node real-time media streams SDK, not scheduling/resource REST management."`; \}\]; \} |
| `metadata.sdkViability.checkedAt` | `"2026-06-21"` |
| `metadata.sdkViability.decision` | `"no-official-maintained-server-rest-sdk-found"` |
| `metadata.sdkViability.rejectedSdkPackages` | readonly \[\{ `packageName`: `"@zoom/meetingsdk"`; `reason`: `"Official browser Meeting SDK for embedding/joining meetings, not a server REST API client."`; \}, \{ `packageName`: `"@zoom/videosdk"`; `reason`: `"Official browser Video SDK for custom video experiences, not the Zoom Meetings REST API."`; \}, \{ `packageName`: `"@zoom/rtms"`; `reason`: `"Official Node real-time media streams SDK, not scheduling/resource REST management."`; \}\] |
| `name` | `"Zoom Meetings"` |
| `operations` | readonly \[\{ `alias`: `"video.meeting.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"zoomMeeting"`; `sideEffect`: `true`; \}, \{ `alias`: `"video.meeting.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"zoomMeeting"`; \}, \{ `alias`: `"video.meeting.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"zoomMeeting"`; \}, \{ `alias`: `"video.meeting.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"zoomMeeting"`; `sideEffect`: `true`; \}, \{ `alias`: `"video.meeting.delete"`; `capability`: `"delete-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"zoomMeeting"`; `sideEffect`: `true`; \}, \{ `alias`: `"video.user.current.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"zoomUser"`; \}, \{ `alias`: `"zoom.meetings.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `metadata`: \{ `supportSliceEscapeHatch`: `true`; \}; `providerObject`: `"zoomMeetingsApiOperation"`; \}, \{ `alias`: `"zoom.webhook.parse"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"zoomWebhookEvent"`; \}\] |
| `packageName` | `"@cognidesk/integration-video-zoom"` |
| `privacyNotes` | readonly \[`"Zoom meetings and webhooks can contain participant identifiers, host details, invite links, meeting metadata, chat-capable workflow context, and recording-related event metadata."`, `"Zoom OAuth access tokens and webhook secret tokens stay server-side and are represented in Studio only as credential readiness."`, `"User consent, meeting disclosure, recording enablement, transcript use, retention, and deletion are owned by the SDK user's Zoom account configuration and application policy."`\] |
| `provider` | `"zoom"` |
| `trustLevel` | `"official"` |
