# integrations/messaging/rcs/dist/manifest

## Variables

### rcsMessagingProviderManifest

```ts
const rcsMessagingProviderManifest: {
  capabilities: {
     audiences?: ("customer-facing" | "mixed" | "internal-support")[];
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
  channelAudiences: ("customer-facing" | "mixed" | "internal-support")[];
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
     | "bidirectional"
     | "inbound-only"
    | "outbound-only")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "unknown" | "official" | "community" | "partner";
     url?: string;
  }[];
  metadata?: Record<string, unknown>;
  name: string;
  operations: {
     alias: string;
     audience?: "customer-facing" | "mixed" | "internal-support";
     audiences?: ("customer-facing" | "mixed" | "internal-support")[];
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
     capability: "receive";
     description: "Validates and parses RCS for Business webhook messages, delivery receipts, and user events.";
     exposesSensitiveData: true;
     label: "Receive RCS webhooks";
     providerObjects: readonly [{
        kind: "rcsUserMessage";
        label: "RCS User Message";
      }, {
        kind: "rcsUserEvent";
        label: "RCS User Event";
      }, {
        kind: "rcsPlatformEvent";
        label: "RCS Platform Event";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Sends text, rich-card, and media messages through RCS Business Messaging agentMessages.";
     exposesSensitiveData: true;
     label: "Send RCS messages";
     providerObjects: readonly [{
        kind: "rcsAgentMessage";
        label: "RCS Agent Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "draft";
     description: "Builds RBM-compatible message request payloads for SDK-user-owned approval and policy workflows.";
     exposesSensitiveData: true;
     label: "Build RCS message payloads";
     providerObjects: readonly [{
        kind: "rcsMessageDraft";
        label: "RCS Message Draft";
     }];
     requiresCredential: false;
   }, {
     audiences: readonly ["customer-facing", "mixed"];
     capability: "media";
     description: "References uploaded RCS files or externally hosted media URLs in outbound messages and rich cards.";
     exposesSensitiveData: true;
     label: "Send RCS media";
     providerObjects: readonly [{
        kind: "rcsMedia";
        label: "RCS Media";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "read-provider-object";
     description: "Reads RBM agent, launch, verification, and phone capability resources for Studio-visible readiness.";
     exposesSensitiveData: true;
     label: "Read RCS agent readiness";
     providerObjects: readonly [{
        kind: "rcsAgent";
        label: "RCS Agent";
      }, {
        kind: "rcsAgentLaunch";
        label: "RCS Agent Launch";
      }, {
        kind: "rcsAgentVerification";
        label: "RCS Agent Verification";
      }, {
        kind: "rcsCapabilities";
        label: "RCS Phone Capabilities";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "rcs.agent-events";
     description: "Sends READ receipts and IS_TYPING indicators when the RBM API and recipient support them.";
     exposesSensitiveData: true;
     extension: true;
     label: "Send RCS read and typing events";
     providerObjects: readonly [{
        kind: "rcsAgentEvent";
        label: "RCS Agent Event";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "rcs.webhook-signature";
     description: "Validates X-Goog-Signature over the decoded webhook message body with the SDK user's client token.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate RCS webhook signatures";
     providerObjects: readonly [{
        kind: "rcsSignedWebhook";
        label: "RCS Signed Webhook";
     }];
     requiresCredential: true;
  }];
  category: "messaging";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "RCS agentMessages create";
        url: "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentMessages/create";
      }, {
        label: "RCS agentEvents create";
        url: "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentEvents/create";
      }, {
        label: "RCS webhooks";
        url: "https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks";
      }, {
        label: "RCS files create";
        url: "https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/files/create";
      }, {
        label: "RCS agent launch read";
        url: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getLaunch";
      }, {
        label: "RCS agent verification read";
        url: "https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getVerification";
     }];
     notes: readonly ["Coverage is typed for selected RCS for Business support workflows: agentMessages text/media/card sends, agent events, phone capability checks, agent readiness, file create/upload helpers, webhook challenge handling, and X-Goog-Signature validation.", "Launch and verification coverage is read-only readiness via getLaunch/getVerification; launch and verification request/update workflows remain outside this adapter.", "This is not full RCS for Business API coverage; brand/agent lifecycle management, launch and verification mutation workflows, tester management, integrations, analytics, user batch APIs, Dialogflow messages, revoke/delete breadth, and broader event catalogs remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "SDK-user-owned RBM agentId and, for management checks, brands/*/agents/* resource name.";
     id: "rcs-agent";
     label: "RCS for Business agent identity";
     required: true;
   }, {
     description: "Server-side OAuth bearer token, token provider, or service-account credentials scoped for RCS for Business APIs.";
     id: "rcs-access-token";
     label: "RCS OAuth access token or service account";
     metadata: {
        scopeKind: "provider-oauth-scopes";
     };
     required: true;
     scopes: readonly ["https://www.googleapis.com/auth/rcsbusinessmessaging", "https://www.googleapis.com/auth/businesscommunications"];
   }, {
     description: "Client token configured in the RCS for Business Developer Console and used for X-Goog-Signature validation.";
     id: "rcs-webhook-client-token";
     label: "RCS webhook client token";
     required: true;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "messaging.rcs";
  limitations: readonly ["RCS for Business access, agent creation, brand verification, carrier launch, tester setup, webhook configuration, and production throughput require the SDK user's Google RBM partner or provider approval.", "Recipient reachability and feature support depend on the user's device, carrier, region, agent launch state, tester status, and capability checks; unsupported recipients or features may return NOT_FOUND or INVALID_ARGUMENT.", "This package provides Google RBM/RCS Business Messaging transport helpers and does not choose default automation, promotional messaging, consent, fallback, retry, or rate-limit policies.", "Media upload endpoints are exposed as request foundations; callers must satisfy Google-hosted/external media, file-size, caching, and approval requirements for their deployment."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     apiCoverage: {
        checkedAt: "2026-06-21";
        documentedOperationCount: 38;
        fullProviderApi: false;
        generatedFromOfficialSpec: false;
        implementedOperationCount: number;
        machineReadableSpecStatus: "Google documents Discovery URLs for rcsbusinessmessaging.v1 and businesscommunications.v1, but anonymous fetches returned 403 during this audit.";
        operationCatalog: "package:src/selected-operations.ts";
        selectedOperationCount: number;
     };
     channelCoverage: {
        agentEvents: "typed-send";
        agentMessages: "typed-send-text-media-card";
        agentReadiness: "typed-read";
        brandAgentLifecycle: "provider-supported-not-typed";
        files: "typed-create-upload";
        launchVerification: "typed-read";
        phoneCapabilities: "typed-read";
        webhooks: "typed-challenge-verify-parse";
     };
     implementation: {
        allowlistChecksum: string;
        allowlistChecksumAlgorithm: "sha256";
        apiCoverage: {
           checkedAt: "2026-06-21";
           operationCatalog: "package:src/selected-operations.ts";
        };
        checkedAt: "2026-06-21";
        sdkDecision: {
           notes: readonly ["googleapis@173.0.0 does not expose rcsbusinessmessaging or businesscommunications at runtime.", "@google/rcsbusinessmessaging@1.0.10 covers RBM messaging resources but not Business Communications readiness resources and its helper API uses module-level singleton initialization."];
           viableOfficialSdk: false;
        };
        selectedOperations: (
           | {
           api: "rcsbusinessmessaging.v1";
           functionName: string;
           method: "POST";
           notes?: never;
           path: string;
           sourceUrl: string;
           uid: string;
         }
           | {
           api: "rcsbusinessmessaging.v1";
           functionName: string;
           method: "POST";
           notes: string;
           path: string;
           sourceUrl: string;
           uid: string;
         }
           | {
           api: "rcsbusinessmessaging.v1";
           functionName: string;
           method: "GET";
           notes?: never;
           path: string;
           sourceUrl: string;
           uid: string;
         }
           | {
           api: "businesscommunications.v1";
           functionName: string;
           method: "GET";
           notes?: never;
           path: string;
           sourceUrl: string;
           uid: string;
        })[];
        source: "official Google RCS for Business REST reference plus documented Discovery URLs";
        sourceVersion: "rcsbusinessmessaging.v1 + businesscommunications.v1 public docs checked 2026-06-21";
        strategy: "direct-http-support-slice";
     };
  };
  name: "Google RCS for Business";
  packageName: "@cognidesk/integration-messaging-rcs";
  privacyNotes: readonly ["RCS messages, phone numbers, media metadata, suggested replies/actions, delivery receipts, subscription events, and webhook payloads can contain customer data.", "OAuth tokens, service-account keys, webhook client tokens, and shared secrets stay server-side and are represented in Studio only as credential readiness.", "Unsubscribe, resubscribe, STOP/START fallback handling, outbound-contact policy, consent, fallback routing, retention, and deletion are SDK-user-owned responsibilities."];
  provider: "rcs";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"bidirectional"` \| `"inbound-only"` \| `"outbound-only"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"unknown"` \| `"official"` \| `"community"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"mixed"` \| `"internal-support"`; `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates and parses RCS for Business webhook messages, delivery receipts, and user events."`; `exposesSensitiveData`: `true`; `label`: `"Receive RCS webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"rcsUserMessage"`; `label`: `"RCS User Message"`; \}, \{ `kind`: `"rcsUserEvent"`; `label`: `"RCS User Event"`; \}, \{ `kind`: `"rcsPlatformEvent"`; `label`: `"RCS Platform Event"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Sends text, rich-card, and media messages through RCS Business Messaging agentMessages."`; `exposesSensitiveData`: `true`; `label`: `"Send RCS messages"`; `providerObjects`: readonly \[\{ `kind`: `"rcsAgentMessage"`; `label`: `"RCS Agent Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"draft"`; `description`: `"Builds RBM-compatible message request payloads for SDK-user-owned approval and policy workflows."`; `exposesSensitiveData`: `true`; `label`: `"Build RCS message payloads"`; `providerObjects`: readonly \[\{ `kind`: `"rcsMessageDraft"`; `label`: `"RCS Message Draft"`; \}\]; `requiresCredential`: `false`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"media"`; `description`: `"References uploaded RCS files or externally hosted media URLs in outbound messages and rich cards."`; `exposesSensitiveData`: `true`; `label`: `"Send RCS media"`; `providerObjects`: readonly \[\{ `kind`: `"rcsMedia"`; `label`: `"RCS Media"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads RBM agent, launch, verification, and phone capability resources for Studio-visible readiness."`; `exposesSensitiveData`: `true`; `label`: `"Read RCS agent readiness"`; `providerObjects`: readonly \[\{ `kind`: `"rcsAgent"`; `label`: `"RCS Agent"`; \}, \{ `kind`: `"rcsAgentLaunch"`; `label`: `"RCS Agent Launch"`; \}, \{ `kind`: `"rcsAgentVerification"`; `label`: `"RCS Agent Verification"`; \}, \{ `kind`: `"rcsCapabilities"`; `label`: `"RCS Phone Capabilities"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"rcs.agent-events"`; `description`: `"Sends READ receipts and IS_TYPING indicators when the RBM API and recipient support them."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Send RCS read and typing events"`; `providerObjects`: readonly \[\{ `kind`: `"rcsAgentEvent"`; `label`: `"RCS Agent Event"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"rcs.webhook-signature"`; `description`: `"Validates X-Goog-Signature over the decoded webhook message body with the SDK user's client token."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate RCS webhook signatures"`; `providerObjects`: readonly \[\{ `kind`: `"rcsSignedWebhook"`; `label`: `"RCS Signed Webhook"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"messaging"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"RCS agentMessages create"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentMessages/create"`; \}, \{ `label`: `"RCS agentEvents create"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentEvents/create"`; \}, \{ `label`: `"RCS webhooks"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks"`; \}, \{ `label`: `"RCS files create"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/files/create"`; \}, \{ `label`: `"RCS agent launch read"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getLaunch"`; \}, \{ `label`: `"RCS agent verification read"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getVerification"`; \}\]; `notes`: readonly \[`"Coverage is typed for selected RCS for Business support workflows: agentMessages text/media/card sends, agent events, phone capability checks, agent readiness, file create/upload helpers, webhook challenge handling, and X-Goog-Signature validation."`, `"Launch and verification coverage is read-only readiness via getLaunch/getVerification; launch and verification request/update workflows remain outside this adapter."`, `"This is not full RCS for Business API coverage; brand/agent lifecycle management, launch and verification mutation workflows, tester management, integrations, analytics, user batch APIs, Dialogflow messages, revoke/delete breadth, and broader event catalogs remain outside this adapter."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"RCS agentMessages create"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentMessages/create"`; \}, \{ `label`: `"RCS agentEvents create"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentEvents/create"`; \}, \{ `label`: `"RCS webhooks"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks"`; \}, \{ `label`: `"RCS files create"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/files/create"`; \}, \{ `label`: `"RCS agent launch read"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getLaunch"`; \}, \{ `label`: `"RCS agent verification read"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getVerification"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is typed for selected RCS for Business support workflows: agentMessages text/media/card sends, agent events, phone capability checks, agent readiness, file create/upload helpers, webhook challenge handling, and X-Goog-Signature validation."`, `"Launch and verification coverage is read-only readiness via getLaunch/getVerification; launch and verification request/update workflows remain outside this adapter."`, `"This is not full RCS for Business API coverage; brand/agent lifecycle management, launch and verification mutation workflows, tester management, integrations, analytics, user batch APIs, Dialogflow messages, revoke/delete breadth, and broader event catalogs remain outside this adapter."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"SDK-user-owned RBM agentId and, for management checks, brands/*/agents/* resource name."`; `id`: `"rcs-agent"`; `label`: `"RCS for Business agent identity"`; `required`: `true`; \}, \{ `description`: `"Server-side OAuth bearer token, token provider, or service-account credentials scoped for RCS for Business APIs."`; `id`: `"rcs-access-token"`; `label`: `"RCS OAuth access token or service account"`; `metadata`: \{ `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: readonly \[`"https://www.googleapis.com/auth/rcsbusinessmessaging"`, `"https://www.googleapis.com/auth/businesscommunications"`\]; \}, \{ `description`: `"Client token configured in the RCS for Business Developer Console and used for X-Goog-Signature validation."`; `id`: `"rcs-webhook-client-token"`; `label`: `"RCS webhook client token"`; `required`: `true`; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"messaging.rcs"` |
| `limitations` | readonly \[`"RCS for Business access, agent creation, brand verification, carrier launch, tester setup, webhook configuration, and production throughput require the SDK user's Google RBM partner or provider approval."`, `"Recipient reachability and feature support depend on the user's device, carrier, region, agent launch state, tester status, and capability checks; unsupported recipients or features may return NOT_FOUND or INVALID_ARGUMENT."`, `"This package provides Google RBM/RCS Business Messaging transport helpers and does not choose default automation, promotional messaging, consent, fallback, retry, or rate-limit policies."`, `"Media upload endpoints are exposed as request foundations; callers must satisfy Google-hosted/external media, file-size, caching, and approval requirements for their deployment."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `apiCoverage`: \{ `checkedAt`: `"2026-06-21"`; `documentedOperationCount`: `38`; `fullProviderApi`: `false`; `generatedFromOfficialSpec`: `false`; `implementedOperationCount`: `number`; `machineReadableSpecStatus`: `"Google documents Discovery URLs for rcsbusinessmessaging.v1 and businesscommunications.v1, but anonymous fetches returned 403 during this audit."`; `operationCatalog`: `"package:src/selected-operations.ts"`; `selectedOperationCount`: `number`; \}; `channelCoverage`: \{ `agentEvents`: `"typed-send"`; `agentMessages`: `"typed-send-text-media-card"`; `agentReadiness`: `"typed-read"`; `brandAgentLifecycle`: `"provider-supported-not-typed"`; `files`: `"typed-create-upload"`; `launchVerification`: `"typed-read"`; `phoneCapabilities`: `"typed-read"`; `webhooks`: `"typed-challenge-verify-parse"`; \}; `implementation`: \{ `allowlistChecksum`: `string`; `allowlistChecksumAlgorithm`: `"sha256"`; `apiCoverage`: \{ `checkedAt`: `"2026-06-21"`; `operationCatalog`: `"package:src/selected-operations.ts"`; \}; `checkedAt`: `"2026-06-21"`; `sdkDecision`: \{ `notes`: readonly \[`"googleapis@173.0.0 does not expose rcsbusinessmessaging or businesscommunications at runtime."`, `"@google/rcsbusinessmessaging@1.0.10 covers RBM messaging resources but not Business Communications readiness resources and its helper API uses module-level singleton initialization."`\]; `viableOfficialSdk`: `false`; \}; `selectedOperations`: ( \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"POST"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"POST"`; `notes`: `string`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"GET"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"businesscommunications.v1"`; `functionName`: `string`; `method`: `"GET"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \})[]; `source`: `"official Google RCS for Business REST reference plus documented Discovery URLs"`; `sourceVersion`: `"rcsbusinessmessaging.v1 + businesscommunications.v1 public docs checked 2026-06-21"`; `strategy`: `"direct-http-support-slice"`; \}; \} |
| `metadata.apiCoverage` | \{ `checkedAt`: `"2026-06-21"`; `documentedOperationCount`: `38`; `fullProviderApi`: `false`; `generatedFromOfficialSpec`: `false`; `implementedOperationCount`: `number`; `machineReadableSpecStatus`: `"Google documents Discovery URLs for rcsbusinessmessaging.v1 and businesscommunications.v1, but anonymous fetches returned 403 during this audit."`; `operationCatalog`: `"package:src/selected-operations.ts"`; `selectedOperationCount`: `number`; \} |
| `metadata.apiCoverage.checkedAt` | `"2026-06-21"` |
| `metadata.apiCoverage.documentedOperationCount` | `38` |
| `metadata.apiCoverage.fullProviderApi` | `false` |
| `metadata.apiCoverage.generatedFromOfficialSpec` | `false` |
| `metadata.apiCoverage.implementedOperationCount` | `number` |
| `metadata.apiCoverage.machineReadableSpecStatus` | `"Google documents Discovery URLs for rcsbusinessmessaging.v1 and businesscommunications.v1, but anonymous fetches returned 403 during this audit."` |
| `metadata.apiCoverage.operationCatalog` | `"package:src/selected-operations.ts"` |
| `metadata.apiCoverage.selectedOperationCount` | `number` |
| `metadata.channelCoverage` | \{ `agentEvents`: `"typed-send"`; `agentMessages`: `"typed-send-text-media-card"`; `agentReadiness`: `"typed-read"`; `brandAgentLifecycle`: `"provider-supported-not-typed"`; `files`: `"typed-create-upload"`; `launchVerification`: `"typed-read"`; `phoneCapabilities`: `"typed-read"`; `webhooks`: `"typed-challenge-verify-parse"`; \} |
| `metadata.channelCoverage.agentEvents` | `"typed-send"` |
| `metadata.channelCoverage.agentMessages` | `"typed-send-text-media-card"` |
| `metadata.channelCoverage.agentReadiness` | `"typed-read"` |
| `metadata.channelCoverage.brandAgentLifecycle` | `"provider-supported-not-typed"` |
| `metadata.channelCoverage.files` | `"typed-create-upload"` |
| `metadata.channelCoverage.launchVerification` | `"typed-read"` |
| `metadata.channelCoverage.phoneCapabilities` | `"typed-read"` |
| `metadata.channelCoverage.webhooks` | `"typed-challenge-verify-parse"` |
| `metadata.implementation` | \{ `allowlistChecksum`: `string`; `allowlistChecksumAlgorithm`: `"sha256"`; `apiCoverage`: \{ `checkedAt`: `"2026-06-21"`; `operationCatalog`: `"package:src/selected-operations.ts"`; \}; `checkedAt`: `"2026-06-21"`; `sdkDecision`: \{ `notes`: readonly \[`"googleapis@173.0.0 does not expose rcsbusinessmessaging or businesscommunications at runtime."`, `"@google/rcsbusinessmessaging@1.0.10 covers RBM messaging resources but not Business Communications readiness resources and its helper API uses module-level singleton initialization."`\]; `viableOfficialSdk`: `false`; \}; `selectedOperations`: ( \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"POST"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"POST"`; `notes`: `string`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"GET"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"businesscommunications.v1"`; `functionName`: `string`; `method`: `"GET"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \})[]; `source`: `"official Google RCS for Business REST reference plus documented Discovery URLs"`; `sourceVersion`: `"rcsbusinessmessaging.v1 + businesscommunications.v1 public docs checked 2026-06-21"`; `strategy`: `"direct-http-support-slice"`; \} |
| `metadata.implementation.allowlistChecksum` | `string` |
| `metadata.implementation.allowlistChecksumAlgorithm` | `"sha256"` |
| `metadata.implementation.apiCoverage` | \{ `checkedAt`: `"2026-06-21"`; `operationCatalog`: `"package:src/selected-operations.ts"`; \} |
| `metadata.implementation.apiCoverage.checkedAt` | `"2026-06-21"` |
| `metadata.implementation.apiCoverage.operationCatalog` | `"package:src/selected-operations.ts"` |
| `metadata.implementation.checkedAt` | `"2026-06-21"` |
| `metadata.implementation.sdkDecision` | \{ `notes`: readonly \[`"googleapis@173.0.0 does not expose rcsbusinessmessaging or businesscommunications at runtime."`, `"@google/rcsbusinessmessaging@1.0.10 covers RBM messaging resources but not Business Communications readiness resources and its helper API uses module-level singleton initialization."`\]; `viableOfficialSdk`: `false`; \} |
| `metadata.implementation.sdkDecision.notes` | readonly \[`"googleapis@173.0.0 does not expose rcsbusinessmessaging or businesscommunications at runtime."`, `"@google/rcsbusinessmessaging@1.0.10 covers RBM messaging resources but not Business Communications readiness resources and its helper API uses module-level singleton initialization."`\] |
| `metadata.implementation.sdkDecision.viableOfficialSdk` | `false` |
| `metadata.implementation.selectedOperations` | ( \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"POST"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"POST"`; `notes`: `string`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"GET"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"businesscommunications.v1"`; `functionName`: `string`; `method`: `"GET"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \})[] |
| `metadata.implementation.source` | `"official Google RCS for Business REST reference plus documented Discovery URLs"` |
| `metadata.implementation.sourceVersion` | `"rcsbusinessmessaging.v1 + businesscommunications.v1 public docs checked 2026-06-21"` |
| `metadata.implementation.strategy` | `"direct-http-support-slice"` |
| `name` | `"Google RCS for Business"` |
| `packageName` | `"@cognidesk/integration-messaging-rcs"` |
| `privacyNotes` | readonly \[`"RCS messages, phone numbers, media metadata, suggested replies/actions, delivery receipts, subscription events, and webhook payloads can contain customer data."`, `"OAuth tokens, service-account keys, webhook client tokens, and shared secrets stay server-side and are represented in Studio only as credential readiness."`, `"Unsubscribe, resubscribe, STOP/START fallback handling, outbound-contact policy, consent, fallback routing, retention, and deletion are SDK-user-owned responsibilities."`\] |
| `provider` | `"rcs"` |
| `trustLevel` | `"official"` |
