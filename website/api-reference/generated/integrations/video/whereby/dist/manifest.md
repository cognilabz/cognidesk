# integrations/video/whereby/dist/manifest

## Variables

### wherebyVideoProviderManifest

```ts
const wherebyVideoProviderManifest: {
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
     description: "Creates transient Whereby Embedded meeting rooms from SDK-user-owned scheduling and escalation policy.";
     exposesSensitiveData: true;
     label: "Schedule Whereby video rooms";
     providerObjects: readonly [{
        kind: "wherebyMeeting";
        label: "Whereby Meeting";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates Whereby transient meeting rooms, transcription jobs, and summary jobs with SDK-user-provided recording, transcription, and retention policy.";
     exposesSensitiveData: true;
     label: "Create Whereby meetings";
     providerObjects: readonly [{
        kind: "wherebyMeeting";
        label: "Whereby Meeting";
      }, {
        kind: "wherebyTranscription";
        label: "Whereby Transcription";
      }, {
        kind: "wherebySummary";
        label: "Whereby Summary";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Lists and reads Whereby transient meetings, recordings, transcription metadata/access links, and beta summaries for SDK-user-selected support workflows.";
     exposesSensitiveData: true;
     label: "Read Whereby meetings";
     providerObjects: readonly [{
        kind: "wherebyMeeting";
        label: "Whereby Meeting";
      }, {
        kind: "wherebyRecording";
        label: "Whereby Recording";
      }, {
        kind: "wherebyTranscription";
        label: "Whereby Transcription";
      }, {
        kind: "wherebySummary";
        label: "Whereby Summary";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "delete-provider-object";
     changesWorkflow: true;
     description: "Deletes Whereby transient meetings, recordings, transcriptions, and beta summaries when SDK-user lifecycle or retention policy permits deletion.";
     label: "Delete Whereby meetings";
     providerObjects: readonly [{
        kind: "wherebyMeeting";
        label: "Whereby Meeting";
      }, {
        kind: "wherebyRecording";
        label: "Whereby Recording";
      }, {
        kind: "wherebyTranscription";
        label: "Whereby Transcription";
      }, {
        kind: "wherebySummary";
        label: "Whereby Summary";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates supported Whereby room configuration such as theme color tokens for SDK-user-owned branded room experiences.";
     label: "Update Whereby room theme";
     providerObjects: readonly [{
        kind: "wherebyRoomTheme";
        label: "Whereby Room Theme";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "receive";
     description: "Validates and parses Whereby room, session, recording, transcription, and assistant webhook events.";
     exposesSensitiveData: true;
     label: "Receive Whereby webhooks";
     providerObjects: readonly [{
        kind: "wherebyWebhookEvent";
        label: "Whereby Webhook Event";
      }, {
        kind: "wherebyMeeting";
        label: "Whereby Meeting";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "whereby.request-signature";
     description: "Validates Whereby-Signature timestamp and v1 HMAC values with replay protection.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Whereby webhook signatures";
     providerObjects: readonly [{
        kind: "wherebySignedRequest";
        label: "Whereby Signed Request";
     }];
     requiresCredential: true;
  }];
  category: "video";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Whereby REST OpenAPI spec";
        url: "https://raw.githubusercontent.com/whereby/docs/main/.gitbook/assets/_api-reference-docs-openapi.json";
      }, {
        label: "Whereby REST meetings API";
        url: "https://docs.whereby.com/reference/whereby-rest-api-reference/meetings";
      }, {
        label: "Whereby REST recordings API";
        url: "https://docs.whereby.com/reference/whereby-rest-api-reference/recordings";
      }, {
        label: "Whereby REST transcriptions API";
        url: "https://docs.whereby.com/reference/whereby-rest-api-reference/transcriptions";
      }, {
        label: "Whereby REST summaries API";
        url: "https://docs.whereby.com/reference/whereby-rest-api-reference/summaries";
      }, {
        label: "Whereby webhooks reference";
        url: "https://docs.whereby.com/reference/webhooks-reference";
     }];
     notes: readonly ["Coverage includes generated per-operation functions for every operation in Whereby's official public REST OpenAPI spec.", "Typed convenience helpers remain available for meetings, room theme tokens/media, recordings, transcriptions, beta summaries, insights, signed webhook parsing, and live readiness checks.", "This support slice is limited to the Whereby REST API surface; browser/mobile SDK behavior, live media transport, embedded UI control, assistants, web-component APIs, React/React Native SDKs, camera effects, customer S3 policy, and webhook event catalogs are separate Whereby surfaces.", "The SDK user owns consent, recording/transcription/summarization eligibility, data retention, host/viewer URL distribution, room branding policy, and feature-gated beta availability decisions."];
     scope: "provider-api-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side API key used as a bearer token for Whereby Embedded REST API calls.";
     id: "whereby-api-key";
     label: "Whereby API key";
     required: true;
   }, {
     description: "SDK-user-selected Embedded organization or subdomain used for readiness display and room URL policy.";
     id: "whereby-organization";
     label: "Whereby organization/subdomain";
     required: false;
   }, {
     description: "SDK-user-owned room mode, room-name prefix, template type, host/viewer URL exposure, recording, transcription, and streaming policy.";
     id: "whereby-room-template";
     label: "Whereby room template policy";
     required: false;
   }, {
     description: "Endpoint signing secret from the Whereby Embedded dashboard used to validate Whereby-Signature HMAC headers.";
     id: "whereby-webhook-signing-secret";
     label: "Whereby webhook signing secret";
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "video.whereby";
  limitations: readonly ["Whereby meetings are transient rooms controlled by the SDK user's Embedded account, API key, plan, dashboard configuration, and current Whereby feature availability.", "Whereby's documented meeting API supports create, list, get, and delete; meeting mutation is limited by Whereby to the documented room theme endpoints.", "This package provides REST and webhook primitives only; it does not decide channel eligibility, consent, recording/transcription policy, handoff timing, or which users receive host/viewer URLs."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        browserSdkLiveMediaEmbeddedUiAssistants: "provider-supported-not-typed-separate-surface";
        insights: "typed-list-read";
        meetings: "typed-create-list-read-delete";
        recordings: "typed-list-read-access-link-delete";
        restApiOperations: "generated-constrained-support-slice";
        roomTheme: "typed-update";
        summaries: "typed-create-list-read-delete";
        transcriptions: "typed-create-list-read-access-link-delete";
        webhooks: "typed-validate-parse";
     };
     docs: "https://docs.whereby.com/reference/whereby-rest-api-reference/meetings";
     generatedSupportSliceVerification: {
        allowlist: readonly ["POST /meetings", "GET /meetings", "GET /meetings/{meetingId}", "DELETE /meetings/{meetingId}", "GET /recordings", "GET /recordings/{recordingId}", "GET /recordings/{recordingId}/access-link", "POST /recordings/bulk-delete", "DELETE /recordings/{recordingId}", "POST /transcriptions", "GET /transcriptions", "GET /transcriptions/{transcriptionId}", "GET /transcriptions/{transcriptionId}/access-link", "POST /transcriptions/bulk-delete", "DELETE /transcriptions/{transcriptionId}", "POST /summaries", "GET /summaries", "GET /summaries/{summaryId}", "DELETE /summaries/{summaryId}", "PUT /rooms/{roomName}/theme/tokens", "PUT /rooms/{roomName}/theme/logo", "PUT /rooms/{roomName}/theme/room-background", "PUT /rooms/{roomName}/theme/room-knock-page-background", "GET /insights/rooms", "GET /insights/room-sessions", "GET /insights/participants", "GET /insights/participant"];
        apiVersion: "v1";
        coverageArtifact: "docs/provider-coverage/whereby-full-api-2026-06-18.operations.json";
        documentedOperationCount: 27;
        documentedPathCount: 20;
        functionCatalogArtifact: "docs/provider-coverage/whereby-full-api-2026-06-18.functions.json";
        functionCatalogChecksumSha256: "d33fa387bc6cd105db3e21b743e68102d483b7e3dacd0b4c1bedd85be5bc07ef";
        generatedFunctionCount: 27;
        implementedOperationCount: 27;
        operationCatalogArtifact: "docs/provider-coverage/whereby-full-api-2026-06-18.operations.json";
        operationCatalogChecksumSha256: "690fac858b8041598c7297147e5635e227f86b1fd1545e047182839d5fd2803a";
        provider: "whereby-rest";
        sourceChecksumSha256: "3d9aec0774ff42f149cfc67e94ae9b70c617957e278a5e89920807274d8cd77d";
        unimplementedOperationCount: 0;
        verifiedAt: "2026-06-21";
     };
     sdkViability: {
        checkedAt: "2026-06-21";
        decision: "no-official-maintained-server-rest-sdk-found";
        rejectedSdkPackages: readonly [{
           packageName: "@whereby.com/browser-sdk";
           reason: "Official browser SDK for custom video UI, not a server REST API client.";
         }, {
           packageName: "@whereby.com/core";
           reason: "Official media/core SDK requiring browser or WebRTC polyfills, not a REST client.";
         }, {
           packageName: "@whereby.com/assistant-sdk";
           reason: "Official Node assistant/media SDK with beta/plan constraints, not REST resource management.";
        }];
     };
  };
  name: "Whereby Embedded";
  operations: readonly [{
     alias: "video.meeting.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "wherebyMeeting";
     sideEffect: true;
   }, {
     alias: "video.meeting.list";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "wherebyMeeting";
   }, {
     alias: "video.meeting.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "wherebyMeeting";
   }, {
     alias: "video.meeting.delete";
     capability: "delete-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     providerObject: "wherebyMeeting";
     sideEffect: true;
   }, {
     alias: "whereby.room-theme.update";
     capability: "update-provider-object";
     changesWorkflow: true;
     extension: true;
     providerObject: "wherebyRoomTheme";
     sideEffect: true;
   }, {
     alias: "whereby.rest.request";
     capability: "read-provider-object";
     extension: true;
     metadata: {
        supportSliceEscapeHatch: true;
     };
     providerObject: "wherebyRestOperation";
   }, {
     alias: "whereby.webhook.parse";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "wherebyWebhookEvent";
  }];
  packageName: "@cognidesk/integration-video-whereby";
  privacyNotes: readonly ["Whereby meeting URLs, host URLs, viewer URLs, room names, session IDs, participant identifiers, display names, metadata, external IDs, recording metadata, and transcription metadata can contain customer or support data.", "Whereby API keys and webhook signing secrets stay server-side and are represented in Studio only as readiness metadata.", "Consent for video, recording, transcription, streaming, assistant usage, outbound scheduling, retention, and deletion remains SDK-user-owned configuration."];
  provider: "whereby";
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"schedule"`; `changesWorkflow`: `true`; `description`: `"Creates transient Whereby Embedded meeting rooms from SDK-user-owned scheduling and escalation policy."`; `exposesSensitiveData`: `true`; `label`: `"Schedule Whereby video rooms"`; `providerObjects`: readonly \[\{ `kind`: `"wherebyMeeting"`; `label`: `"Whereby Meeting"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates Whereby transient meeting rooms, transcription jobs, and summary jobs with SDK-user-provided recording, transcription, and retention policy."`; `exposesSensitiveData`: `true`; `label`: `"Create Whereby meetings"`; `providerObjects`: readonly \[\{ `kind`: `"wherebyMeeting"`; `label`: `"Whereby Meeting"`; \}, \{ `kind`: `"wherebyTranscription"`; `label`: `"Whereby Transcription"`; \}, \{ `kind`: `"wherebySummary"`; `label`: `"Whereby Summary"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Lists and reads Whereby transient meetings, recordings, transcription metadata/access links, and beta summaries for SDK-user-selected support workflows."`; `exposesSensitiveData`: `true`; `label`: `"Read Whereby meetings"`; `providerObjects`: readonly \[\{ `kind`: `"wherebyMeeting"`; `label`: `"Whereby Meeting"`; \}, \{ `kind`: `"wherebyRecording"`; `label`: `"Whereby Recording"`; \}, \{ `kind`: `"wherebyTranscription"`; `label`: `"Whereby Transcription"`; \}, \{ `kind`: `"wherebySummary"`; `label`: `"Whereby Summary"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"delete-provider-object"`; `changesWorkflow`: `true`; `description`: `"Deletes Whereby transient meetings, recordings, transcriptions, and beta summaries when SDK-user lifecycle or retention policy permits deletion."`; `label`: `"Delete Whereby meetings"`; `providerObjects`: readonly \[\{ `kind`: `"wherebyMeeting"`; `label`: `"Whereby Meeting"`; \}, \{ `kind`: `"wherebyRecording"`; `label`: `"Whereby Recording"`; \}, \{ `kind`: `"wherebyTranscription"`; `label`: `"Whereby Transcription"`; \}, \{ `kind`: `"wherebySummary"`; `label`: `"Whereby Summary"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates supported Whereby room configuration such as theme color tokens for SDK-user-owned branded room experiences."`; `label`: `"Update Whereby room theme"`; `providerObjects`: readonly \[\{ `kind`: `"wherebyRoomTheme"`; `label`: `"Whereby Room Theme"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates and parses Whereby room, session, recording, transcription, and assistant webhook events."`; `exposesSensitiveData`: `true`; `label`: `"Receive Whereby webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"wherebyWebhookEvent"`; `label`: `"Whereby Webhook Event"`; \}, \{ `kind`: `"wherebyMeeting"`; `label`: `"Whereby Meeting"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"whereby.request-signature"`; `description`: `"Validates Whereby-Signature timestamp and v1 HMAC values with replay protection."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Whereby webhook signatures"`; `providerObjects`: readonly \[\{ `kind`: `"wherebySignedRequest"`; `label`: `"Whereby Signed Request"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"video"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Whereby REST OpenAPI spec"`; `url`: `"https://raw.githubusercontent.com/whereby/docs/main/.gitbook/assets/_api-reference-docs-openapi.json"`; \}, \{ `label`: `"Whereby REST meetings API"`; `url`: `"https://docs.whereby.com/reference/whereby-rest-api-reference/meetings"`; \}, \{ `label`: `"Whereby REST recordings API"`; `url`: `"https://docs.whereby.com/reference/whereby-rest-api-reference/recordings"`; \}, \{ `label`: `"Whereby REST transcriptions API"`; `url`: `"https://docs.whereby.com/reference/whereby-rest-api-reference/transcriptions"`; \}, \{ `label`: `"Whereby REST summaries API"`; `url`: `"https://docs.whereby.com/reference/whereby-rest-api-reference/summaries"`; \}, \{ `label`: `"Whereby webhooks reference"`; `url`: `"https://docs.whereby.com/reference/webhooks-reference"`; \}\]; `notes`: readonly \[`"Coverage includes generated per-operation functions for every operation in Whereby's official public REST OpenAPI spec."`, `"Typed convenience helpers remain available for meetings, room theme tokens/media, recordings, transcriptions, beta summaries, insights, signed webhook parsing, and live readiness checks."`, `"This support slice is limited to the Whereby REST API surface; browser/mobile SDK behavior, live media transport, embedded UI control, assistants, web-component APIs, React/React Native SDKs, camera effects, customer S3 policy, and webhook event catalogs are separate Whereby surfaces."`, `"The SDK user owns consent, recording/transcription/summarization eligibility, data retention, host/viewer URL distribution, room branding policy, and feature-gated beta availability decisions."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Whereby REST OpenAPI spec"`; `url`: `"https://raw.githubusercontent.com/whereby/docs/main/.gitbook/assets/_api-reference-docs-openapi.json"`; \}, \{ `label`: `"Whereby REST meetings API"`; `url`: `"https://docs.whereby.com/reference/whereby-rest-api-reference/meetings"`; \}, \{ `label`: `"Whereby REST recordings API"`; `url`: `"https://docs.whereby.com/reference/whereby-rest-api-reference/recordings"`; \}, \{ `label`: `"Whereby REST transcriptions API"`; `url`: `"https://docs.whereby.com/reference/whereby-rest-api-reference/transcriptions"`; \}, \{ `label`: `"Whereby REST summaries API"`; `url`: `"https://docs.whereby.com/reference/whereby-rest-api-reference/summaries"`; \}, \{ `label`: `"Whereby webhooks reference"`; `url`: `"https://docs.whereby.com/reference/webhooks-reference"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage includes generated per-operation functions for every operation in Whereby's official public REST OpenAPI spec."`, `"Typed convenience helpers remain available for meetings, room theme tokens/media, recordings, transcriptions, beta summaries, insights, signed webhook parsing, and live readiness checks."`, `"This support slice is limited to the Whereby REST API surface; browser/mobile SDK behavior, live media transport, embedded UI control, assistants, web-component APIs, React/React Native SDKs, camera effects, customer S3 policy, and webhook event catalogs are separate Whereby surfaces."`, `"The SDK user owns consent, recording/transcription/summarization eligibility, data retention, host/viewer URL distribution, room branding policy, and feature-gated beta availability decisions."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Server-side API key used as a bearer token for Whereby Embedded REST API calls."`; `id`: `"whereby-api-key"`; `label`: `"Whereby API key"`; `required`: `true`; \}, \{ `description`: `"SDK-user-selected Embedded organization or subdomain used for readiness display and room URL policy."`; `id`: `"whereby-organization"`; `label`: `"Whereby organization/subdomain"`; `required`: `false`; \}, \{ `description`: `"SDK-user-owned room mode, room-name prefix, template type, host/viewer URL exposure, recording, transcription, and streaming policy."`; `id`: `"whereby-room-template"`; `label`: `"Whereby room template policy"`; `required`: `false`; \}, \{ `description`: `"Endpoint signing secret from the Whereby Embedded dashboard used to validate Whereby-Signature HMAC headers."`; `id`: `"whereby-webhook-signing-secret"`; `label`: `"Whereby webhook signing secret"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"video.whereby"` |
| `limitations` | readonly \[`"Whereby meetings are transient rooms controlled by the SDK user's Embedded account, API key, plan, dashboard configuration, and current Whereby feature availability."`, `"Whereby's documented meeting API supports create, list, get, and delete; meeting mutation is limited by Whereby to the documented room theme endpoints."`, `"This package provides REST and webhook primitives only; it does not decide channel eligibility, consent, recording/transcription policy, handoff timing, or which users receive host/viewer URLs."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `browserSdkLiveMediaEmbeddedUiAssistants`: `"provider-supported-not-typed-separate-surface"`; `insights`: `"typed-list-read"`; `meetings`: `"typed-create-list-read-delete"`; `recordings`: `"typed-list-read-access-link-delete"`; `restApiOperations`: `"generated-constrained-support-slice"`; `roomTheme`: `"typed-update"`; `summaries`: `"typed-create-list-read-delete"`; `transcriptions`: `"typed-create-list-read-access-link-delete"`; `webhooks`: `"typed-validate-parse"`; \}; `docs`: `"https://docs.whereby.com/reference/whereby-rest-api-reference/meetings"`; `generatedSupportSliceVerification`: \{ `allowlist`: readonly \[`"POST /meetings"`, `"GET /meetings"`, `"GET /meetings/{meetingId}"`, `"DELETE /meetings/{meetingId}"`, `"GET /recordings"`, `"GET /recordings/{recordingId}"`, `"GET /recordings/{recordingId}/access-link"`, `"POST /recordings/bulk-delete"`, `"DELETE /recordings/{recordingId}"`, `"POST /transcriptions"`, `"GET /transcriptions"`, `"GET /transcriptions/{transcriptionId}"`, `"GET /transcriptions/{transcriptionId}/access-link"`, `"POST /transcriptions/bulk-delete"`, `"DELETE /transcriptions/{transcriptionId}"`, `"POST /summaries"`, `"GET /summaries"`, `"GET /summaries/{summaryId}"`, `"DELETE /summaries/{summaryId}"`, `"PUT /rooms/{roomName}/theme/tokens"`, `"PUT /rooms/{roomName}/theme/logo"`, `"PUT /rooms/{roomName}/theme/room-background"`, `"PUT /rooms/{roomName}/theme/room-knock-page-background"`, `"GET /insights/rooms"`, `"GET /insights/room-sessions"`, `"GET /insights/participants"`, `"GET /insights/participant"`\]; `apiVersion`: `"v1"`; `coverageArtifact`: `"docs/provider-coverage/whereby-full-api-2026-06-18.operations.json"`; `documentedOperationCount`: `27`; `documentedPathCount`: `20`; `functionCatalogArtifact`: `"docs/provider-coverage/whereby-full-api-2026-06-18.functions.json"`; `functionCatalogChecksumSha256`: `"d33fa387bc6cd105db3e21b743e68102d483b7e3dacd0b4c1bedd85be5bc07ef"`; `generatedFunctionCount`: `27`; `implementedOperationCount`: `27`; `operationCatalogArtifact`: `"docs/provider-coverage/whereby-full-api-2026-06-18.operations.json"`; `operationCatalogChecksumSha256`: `"690fac858b8041598c7297147e5635e227f86b1fd1545e047182839d5fd2803a"`; `provider`: `"whereby-rest"`; `sourceChecksumSha256`: `"3d9aec0774ff42f149cfc67e94ae9b70c617957e278a5e89920807274d8cd77d"`; `unimplementedOperationCount`: `0`; `verifiedAt`: `"2026-06-21"`; \}; `sdkViability`: \{ `checkedAt`: `"2026-06-21"`; `decision`: `"no-official-maintained-server-rest-sdk-found"`; `rejectedSdkPackages`: readonly \[\{ `packageName`: `"@whereby.com/browser-sdk"`; `reason`: `"Official browser SDK for custom video UI, not a server REST API client."`; \}, \{ `packageName`: `"@whereby.com/core"`; `reason`: `"Official media/core SDK requiring browser or WebRTC polyfills, not a REST client."`; \}, \{ `packageName`: `"@whereby.com/assistant-sdk"`; `reason`: `"Official Node assistant/media SDK with beta/plan constraints, not REST resource management."`; \}\]; \}; \} |
| `metadata.channelCoverage` | \{ `browserSdkLiveMediaEmbeddedUiAssistants`: `"provider-supported-not-typed-separate-surface"`; `insights`: `"typed-list-read"`; `meetings`: `"typed-create-list-read-delete"`; `recordings`: `"typed-list-read-access-link-delete"`; `restApiOperations`: `"generated-constrained-support-slice"`; `roomTheme`: `"typed-update"`; `summaries`: `"typed-create-list-read-delete"`; `transcriptions`: `"typed-create-list-read-access-link-delete"`; `webhooks`: `"typed-validate-parse"`; \} |
| `metadata.channelCoverage.browserSdkLiveMediaEmbeddedUiAssistants` | `"provider-supported-not-typed-separate-surface"` |
| `metadata.channelCoverage.insights` | `"typed-list-read"` |
| `metadata.channelCoverage.meetings` | `"typed-create-list-read-delete"` |
| `metadata.channelCoverage.recordings` | `"typed-list-read-access-link-delete"` |
| `metadata.channelCoverage.restApiOperations` | `"generated-constrained-support-slice"` |
| `metadata.channelCoverage.roomTheme` | `"typed-update"` |
| `metadata.channelCoverage.summaries` | `"typed-create-list-read-delete"` |
| `metadata.channelCoverage.transcriptions` | `"typed-create-list-read-access-link-delete"` |
| `metadata.channelCoverage.webhooks` | `"typed-validate-parse"` |
| `metadata.docs` | `"https://docs.whereby.com/reference/whereby-rest-api-reference/meetings"` |
| `metadata.generatedSupportSliceVerification` | \{ `allowlist`: readonly \[`"POST /meetings"`, `"GET /meetings"`, `"GET /meetings/{meetingId}"`, `"DELETE /meetings/{meetingId}"`, `"GET /recordings"`, `"GET /recordings/{recordingId}"`, `"GET /recordings/{recordingId}/access-link"`, `"POST /recordings/bulk-delete"`, `"DELETE /recordings/{recordingId}"`, `"POST /transcriptions"`, `"GET /transcriptions"`, `"GET /transcriptions/{transcriptionId}"`, `"GET /transcriptions/{transcriptionId}/access-link"`, `"POST /transcriptions/bulk-delete"`, `"DELETE /transcriptions/{transcriptionId}"`, `"POST /summaries"`, `"GET /summaries"`, `"GET /summaries/{summaryId}"`, `"DELETE /summaries/{summaryId}"`, `"PUT /rooms/{roomName}/theme/tokens"`, `"PUT /rooms/{roomName}/theme/logo"`, `"PUT /rooms/{roomName}/theme/room-background"`, `"PUT /rooms/{roomName}/theme/room-knock-page-background"`, `"GET /insights/rooms"`, `"GET /insights/room-sessions"`, `"GET /insights/participants"`, `"GET /insights/participant"`\]; `apiVersion`: `"v1"`; `coverageArtifact`: `"docs/provider-coverage/whereby-full-api-2026-06-18.operations.json"`; `documentedOperationCount`: `27`; `documentedPathCount`: `20`; `functionCatalogArtifact`: `"docs/provider-coverage/whereby-full-api-2026-06-18.functions.json"`; `functionCatalogChecksumSha256`: `"d33fa387bc6cd105db3e21b743e68102d483b7e3dacd0b4c1bedd85be5bc07ef"`; `generatedFunctionCount`: `27`; `implementedOperationCount`: `27`; `operationCatalogArtifact`: `"docs/provider-coverage/whereby-full-api-2026-06-18.operations.json"`; `operationCatalogChecksumSha256`: `"690fac858b8041598c7297147e5635e227f86b1fd1545e047182839d5fd2803a"`; `provider`: `"whereby-rest"`; `sourceChecksumSha256`: `"3d9aec0774ff42f149cfc67e94ae9b70c617957e278a5e89920807274d8cd77d"`; `unimplementedOperationCount`: `0`; `verifiedAt`: `"2026-06-21"`; \} |
| `metadata.generatedSupportSliceVerification.allowlist` | readonly \[`"POST /meetings"`, `"GET /meetings"`, `"GET /meetings/{meetingId}"`, `"DELETE /meetings/{meetingId}"`, `"GET /recordings"`, `"GET /recordings/{recordingId}"`, `"GET /recordings/{recordingId}/access-link"`, `"POST /recordings/bulk-delete"`, `"DELETE /recordings/{recordingId}"`, `"POST /transcriptions"`, `"GET /transcriptions"`, `"GET /transcriptions/{transcriptionId}"`, `"GET /transcriptions/{transcriptionId}/access-link"`, `"POST /transcriptions/bulk-delete"`, `"DELETE /transcriptions/{transcriptionId}"`, `"POST /summaries"`, `"GET /summaries"`, `"GET /summaries/{summaryId}"`, `"DELETE /summaries/{summaryId}"`, `"PUT /rooms/{roomName}/theme/tokens"`, `"PUT /rooms/{roomName}/theme/logo"`, `"PUT /rooms/{roomName}/theme/room-background"`, `"PUT /rooms/{roomName}/theme/room-knock-page-background"`, `"GET /insights/rooms"`, `"GET /insights/room-sessions"`, `"GET /insights/participants"`, `"GET /insights/participant"`\] |
| `metadata.generatedSupportSliceVerification.apiVersion` | `"v1"` |
| `metadata.generatedSupportSliceVerification.coverageArtifact` | `"docs/provider-coverage/whereby-full-api-2026-06-18.operations.json"` |
| `metadata.generatedSupportSliceVerification.documentedOperationCount` | `27` |
| `metadata.generatedSupportSliceVerification.documentedPathCount` | `20` |
| `metadata.generatedSupportSliceVerification.functionCatalogArtifact` | `"docs/provider-coverage/whereby-full-api-2026-06-18.functions.json"` |
| `metadata.generatedSupportSliceVerification.functionCatalogChecksumSha256` | `"d33fa387bc6cd105db3e21b743e68102d483b7e3dacd0b4c1bedd85be5bc07ef"` |
| `metadata.generatedSupportSliceVerification.generatedFunctionCount` | `27` |
| `metadata.generatedSupportSliceVerification.implementedOperationCount` | `27` |
| `metadata.generatedSupportSliceVerification.operationCatalogArtifact` | `"docs/provider-coverage/whereby-full-api-2026-06-18.operations.json"` |
| `metadata.generatedSupportSliceVerification.operationCatalogChecksumSha256` | `"690fac858b8041598c7297147e5635e227f86b1fd1545e047182839d5fd2803a"` |
| `metadata.generatedSupportSliceVerification.provider` | `"whereby-rest"` |
| `metadata.generatedSupportSliceVerification.sourceChecksumSha256` | `"3d9aec0774ff42f149cfc67e94ae9b70c617957e278a5e89920807274d8cd77d"` |
| `metadata.generatedSupportSliceVerification.unimplementedOperationCount` | `0` |
| `metadata.generatedSupportSliceVerification.verifiedAt` | `"2026-06-21"` |
| `metadata.sdkViability` | \{ `checkedAt`: `"2026-06-21"`; `decision`: `"no-official-maintained-server-rest-sdk-found"`; `rejectedSdkPackages`: readonly \[\{ `packageName`: `"@whereby.com/browser-sdk"`; `reason`: `"Official browser SDK for custom video UI, not a server REST API client."`; \}, \{ `packageName`: `"@whereby.com/core"`; `reason`: `"Official media/core SDK requiring browser or WebRTC polyfills, not a REST client."`; \}, \{ `packageName`: `"@whereby.com/assistant-sdk"`; `reason`: `"Official Node assistant/media SDK with beta/plan constraints, not REST resource management."`; \}\]; \} |
| `metadata.sdkViability.checkedAt` | `"2026-06-21"` |
| `metadata.sdkViability.decision` | `"no-official-maintained-server-rest-sdk-found"` |
| `metadata.sdkViability.rejectedSdkPackages` | readonly \[\{ `packageName`: `"@whereby.com/browser-sdk"`; `reason`: `"Official browser SDK for custom video UI, not a server REST API client."`; \}, \{ `packageName`: `"@whereby.com/core"`; `reason`: `"Official media/core SDK requiring browser or WebRTC polyfills, not a REST client."`; \}, \{ `packageName`: `"@whereby.com/assistant-sdk"`; `reason`: `"Official Node assistant/media SDK with beta/plan constraints, not REST resource management."`; \}\] |
| `name` | `"Whereby Embedded"` |
| `operations` | readonly \[\{ `alias`: `"video.meeting.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"wherebyMeeting"`; `sideEffect`: `true`; \}, \{ `alias`: `"video.meeting.list"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"wherebyMeeting"`; \}, \{ `alias`: `"video.meeting.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"wherebyMeeting"`; \}, \{ `alias`: `"video.meeting.delete"`; `capability`: `"delete-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `providerObject`: `"wherebyMeeting"`; `sideEffect`: `true`; \}, \{ `alias`: `"whereby.room-theme.update"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `extension`: `true`; `providerObject`: `"wherebyRoomTheme"`; `sideEffect`: `true`; \}, \{ `alias`: `"whereby.rest.request"`; `capability`: `"read-provider-object"`; `extension`: `true`; `metadata`: \{ `supportSliceEscapeHatch`: `true`; \}; `providerObject`: `"wherebyRestOperation"`; \}, \{ `alias`: `"whereby.webhook.parse"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"wherebyWebhookEvent"`; \}\] |
| `packageName` | `"@cognidesk/integration-video-whereby"` |
| `privacyNotes` | readonly \[`"Whereby meeting URLs, host URLs, viewer URLs, room names, session IDs, participant identifiers, display names, metadata, external IDs, recording metadata, and transcription metadata can contain customer or support data."`, `"Whereby API keys and webhook signing secrets stay server-side and are represented in Studio only as readiness metadata."`, `"Consent for video, recording, transcription, streaming, assistant usage, outbound scheduling, retention, and deletion remains SDK-user-owned configuration."`\] |
| `provider` | `"whereby"` |
| `trustLevel` | `"official"` |
