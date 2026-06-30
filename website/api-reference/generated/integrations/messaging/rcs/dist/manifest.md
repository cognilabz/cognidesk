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
     notes: readonly ["Runtime coverage uses the official @google/rcsbusinessmessaging SDK for selected RCS for Business support workflows: agentMessages text/media/card sends, agent events, phone capability checks, and file create/upload helpers.", "Agent readiness, launch, and verification coverage is read-only via the Business Communications REST API because @google/rcsbusinessmessaging does not expose the brands.agents API.", "This package accepts accessToken, tokenProvider, serviceAccount, baseUrl, messagingApiBaseUrl, and managementApiBaseUrl options; hosts may still provide an injected provider client backed by an approved SDK or runtime.", "This is not full RCS for Business API coverage; brand/agent lifecycle management, launch and verification mutation workflows, tester management, integrations, analytics, user batch APIs, Dialogflow messages, revoke/delete breadth, and broader event catalogs remain outside this adapter."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "SDK-user-owned RBM agentId and, for management checks, brands/*/agents/* resource name.";
     id: "rcs-agent";
     label: "RCS for Business agent identity";
     required: true;
   }, {
     description: "Built-in Google RCS SDK/Business Communications REST credentials or host-owned RcsMessagingProviderClient that encapsulates Google SDK/provider transport, token refresh, retries, and regional endpoint configuration.";
     id: "rcs-provider-client";
     label: "RCS provider transport";
     metadata: {
        credentialOwnership: "sdk-user-or-host-managed";
        defaultClientPolicy: "provider-rest-adapter-when-configured";
        injectionInterface: "RcsMessagingProviderClient";
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
  limitations: readonly ["RCS for Business access, agent creation, brand verification, carrier launch, tester setup, webhook configuration, and production throughput require the SDK user's Google RBM partner or provider approval.", "Recipient reachability and feature support depend on the user's device, carrier, region, agent launch state, tester status, and capability checks; unsupported recipients or features may return NOT_FOUND or INVALID_ARGUMENT.", "Host applications may inject an RcsMessagingProviderClient backed by an approved SDK, provider package, or host-owned transport.", "The built-in Google RCS SDK/Business Communications REST adapter requires accessToken, tokenProvider, serviceAccount, or providerClient plus agent identifiers; API key-only transport is rejected because Google RCS for Business documents service-account/OAuth authentication for RBM APIs.", "Media upload behavior is delegated to the host provider client; callers must satisfy Google-hosted/external media, file-size, caching, and approval requirements for their deployment."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     apiCoverage: {
        checkedAt: "2026-06-25";
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
        acceptedAuthModes: readonly ["accessToken", "tokenProvider", "serviceAccount", "providerClient"];
        allowlistChecksum: string;
        allowlistChecksumAlgorithm: "sha256";
        apiCoverage: {
           checkedAt: "2026-06-25";
           operationCatalog: "package:src/selected-operations.ts";
        };
        checkedAt: "2026-06-25";
        defaultFetchClient: "businesscommunications-rest-adapter";
        defaultHttpClient: "providerJsonRequest";
        defaultProviderSdk: "@google/rcsbusinessmessaging";
        failClosedWithoutCredentialedTransport: true;
        failClosedWithoutProviderClient: false;
        manifestImport: "no-client-initialization";
        providerClientInterface: "RcsMessagingProviderClient";
        rejectedAuthModes: readonly ["apiKey-only"];
        sdkDecision: {
           failClosedWithoutCredentialedTransport: true;
           notes: readonly ["@google/rcsbusinessmessaging is the default runtime for RBM agentMessages, agentEvents, files, and phone capabilities.", "The package does not expose the Business Communications brands.agents readiness API used by this support slice, so those read-only checks use a strict typed REST adapter.", "Both runtime paths share the same accessToken, tokenProvider, and service-account credential handling.", "API key-only transport is rejected; hosts may inject RcsMessagingProviderClient when they want to wrap Google's SDK or another approved provider runtime."];
           officialRuntimeSdk: {
              docsUrl: "https://developers.google.com/business-communications/rcs-business-messaging/reference/libraries";
              npmModifiedAt: "2025-04-30T16:44:00.722Z";
              packageName: "@google/rcsbusinessmessaging";
              status: "real-maintained-rbm-runtime";
              versionChecked: "1.0.10";
           };
           selectedDefaultClient: "google-rcsbusinessmessaging-sdk-plus-businesscommunications-rest";
           viableAsSoleDefaultRuntime: false;
           viableForRbmMessagingRuntime: true;
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
        source: "official Google RCS for Business SDK plus Business Communications REST reference";
        sourceVersion: "rcsbusinessmessaging.v1 + businesscommunications.v1 public docs checked 2026-06-25";
        strategy: "provider-sdk-hybrid";
     };
     implementationStrategy: "provider-sdk-hybrid";
     providerClient: {
        defaultClient: "google-rcsbusinessmessaging-sdk-when-configured";
        importPolicy: "provider-client-override-supported";
        injectionPolicy: "override-supported";
        interface: "RcsMessagingProviderClient";
     };
  };
  name: "Google RCS for Business";
  packageName: "@cognidesk/integration-messaging-rcs";
  privacyNotes: readonly ["RCS messages, phone numbers, media metadata, suggested replies/actions, delivery receipts, subscription events, and webhook payloads can contain customer data.", "OAuth tokens, Google credential material, SDK clients, webhook client tokens, and shared secrets stay server-side and are represented in Studio only as credential/provider transport readiness.", "Unsubscribe, resubscribe, STOP/START fallback handling, outbound-contact policy, consent, fallback routing, retention, and deletion are SDK-user-owned responsibilities."];
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
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"RCS agentMessages create"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentMessages/create"`; \}, \{ `label`: `"RCS agentEvents create"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentEvents/create"`; \}, \{ `label`: `"RCS webhooks"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks"`; \}, \{ `label`: `"RCS files create"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/files/create"`; \}, \{ `label`: `"RCS agent launch read"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getLaunch"`; \}, \{ `label`: `"RCS agent verification read"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getVerification"`; \}\]; `notes`: readonly \[`"Runtime coverage uses the official @google/rcsbusinessmessaging SDK for selected RCS for Business support workflows: agentMessages text/media/card sends, agent events, phone capability checks, and file create/upload helpers."`, `"Agent readiness, launch, and verification coverage is read-only via the Business Communications REST API because @google/rcsbusinessmessaging does not expose the brands.agents API."`, `"This package accepts accessToken, tokenProvider, serviceAccount, baseUrl, messagingApiBaseUrl, and managementApiBaseUrl options; hosts may still provide an injected provider client backed by an approved SDK or runtime."`, `"This is not full RCS for Business API coverage; brand/agent lifecycle management, launch and verification mutation workflows, tester management, integrations, analytics, user batch APIs, Dialogflow messages, revoke/delete breadth, and broader event catalogs remain outside this adapter."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"RCS agentMessages create"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentMessages/create"`; \}, \{ `label`: `"RCS agentEvents create"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/phones.agentEvents/create"`; \}, \{ `label`: `"RCS webhooks"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/guides/integrate/webhooks"`; \}, \{ `label`: `"RCS files create"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/rest/v1/files/create"`; \}, \{ `label`: `"RCS agent launch read"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getLaunch"`; \}, \{ `label`: `"RCS agent verification read"`; `url`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/business-communications/rest/v1/brands.agents/getVerification"`; \}\] |
| `coverage.notes` | readonly \[`"Runtime coverage uses the official @google/rcsbusinessmessaging SDK for selected RCS for Business support workflows: agentMessages text/media/card sends, agent events, phone capability checks, and file create/upload helpers."`, `"Agent readiness, launch, and verification coverage is read-only via the Business Communications REST API because @google/rcsbusinessmessaging does not expose the brands.agents API."`, `"This package accepts accessToken, tokenProvider, serviceAccount, baseUrl, messagingApiBaseUrl, and managementApiBaseUrl options; hosts may still provide an injected provider client backed by an approved SDK or runtime."`, `"This is not full RCS for Business API coverage; brand/agent lifecycle management, launch and verification mutation workflows, tester management, integrations, analytics, user batch APIs, Dialogflow messages, revoke/delete breadth, and broader event catalogs remain outside this adapter."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"SDK-user-owned RBM agentId and, for management checks, brands/*/agents/* resource name."`; `id`: `"rcs-agent"`; `label`: `"RCS for Business agent identity"`; `required`: `true`; \}, \{ `description`: `"Built-in Google RCS SDK/Business Communications REST credentials or host-owned RcsMessagingProviderClient that encapsulates Google SDK/provider transport, token refresh, retries, and regional endpoint configuration."`; `id`: `"rcs-provider-client"`; `label`: `"RCS provider transport"`; `metadata`: \{ `credentialOwnership`: `"sdk-user-or-host-managed"`; `defaultClientPolicy`: `"provider-rest-adapter-when-configured"`; `injectionInterface`: `"RcsMessagingProviderClient"`; `scopeKind`: `"provider-oauth-scopes"`; \}; `required`: `true`; `scopes`: readonly \[`"https://www.googleapis.com/auth/rcsbusinessmessaging"`, `"https://www.googleapis.com/auth/businesscommunications"`\]; \}, \{ `description`: `"Client token configured in the RCS for Business Developer Console and used for X-Goog-Signature validation."`; `id`: `"rcs-webhook-client-token"`; `label`: `"RCS webhook client token"`; `required`: `true`; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"messaging.rcs"` |
| `limitations` | readonly \[`"RCS for Business access, agent creation, brand verification, carrier launch, tester setup, webhook configuration, and production throughput require the SDK user's Google RBM partner or provider approval."`, `"Recipient reachability and feature support depend on the user's device, carrier, region, agent launch state, tester status, and capability checks; unsupported recipients or features may return NOT_FOUND or INVALID_ARGUMENT."`, `"Host applications may inject an RcsMessagingProviderClient backed by an approved SDK, provider package, or host-owned transport."`, `"The built-in Google RCS SDK/Business Communications REST adapter requires accessToken, tokenProvider, serviceAccount, or providerClient plus agent identifiers; API key-only transport is rejected because Google RCS for Business documents service-account/OAuth authentication for RBM APIs."`, `"Media upload behavior is delegated to the host provider client; callers must satisfy Google-hosted/external media, file-size, caching, and approval requirements for their deployment."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `apiCoverage`: \{ `checkedAt`: `"2026-06-25"`; `documentedOperationCount`: `38`; `fullProviderApi`: `false`; `generatedFromOfficialSpec`: `false`; `implementedOperationCount`: `number`; `machineReadableSpecStatus`: `"Google documents Discovery URLs for rcsbusinessmessaging.v1 and businesscommunications.v1, but anonymous fetches returned 403 during this audit."`; `operationCatalog`: `"package:src/selected-operations.ts"`; `selectedOperationCount`: `number`; \}; `channelCoverage`: \{ `agentEvents`: `"typed-send"`; `agentMessages`: `"typed-send-text-media-card"`; `agentReadiness`: `"typed-read"`; `brandAgentLifecycle`: `"provider-supported-not-typed"`; `files`: `"typed-create-upload"`; `launchVerification`: `"typed-read"`; `phoneCapabilities`: `"typed-read"`; `webhooks`: `"typed-challenge-verify-parse"`; \}; `implementation`: \{ `acceptedAuthModes`: readonly \[`"accessToken"`, `"tokenProvider"`, `"serviceAccount"`, `"providerClient"`\]; `allowlistChecksum`: `string`; `allowlistChecksumAlgorithm`: `"sha256"`; `apiCoverage`: \{ `checkedAt`: `"2026-06-25"`; `operationCatalog`: `"package:src/selected-operations.ts"`; \}; `checkedAt`: `"2026-06-25"`; `defaultFetchClient`: `"businesscommunications-rest-adapter"`; `defaultHttpClient`: `"providerJsonRequest"`; `defaultProviderSdk`: `"@google/rcsbusinessmessaging"`; `failClosedWithoutCredentialedTransport`: `true`; `failClosedWithoutProviderClient`: `false`; `manifestImport`: `"no-client-initialization"`; `providerClientInterface`: `"RcsMessagingProviderClient"`; `rejectedAuthModes`: readonly \[`"apiKey-only"`\]; `sdkDecision`: \{ `failClosedWithoutCredentialedTransport`: `true`; `notes`: readonly \[`"@google/rcsbusinessmessaging is the default runtime for RBM agentMessages, agentEvents, files, and phone capabilities."`, `"The package does not expose the Business Communications brands.agents readiness API used by this support slice, so those read-only checks use a strict typed REST adapter."`, `"Both runtime paths share the same accessToken, tokenProvider, and service-account credential handling."`, `"API key-only transport is rejected; hosts may inject RcsMessagingProviderClient when they want to wrap Google's SDK or another approved provider runtime."`\]; `officialRuntimeSdk`: \{ `docsUrl`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/libraries"`; `npmModifiedAt`: `"2025-04-30T16:44:00.722Z"`; `packageName`: `"@google/rcsbusinessmessaging"`; `status`: `"real-maintained-rbm-runtime"`; `versionChecked`: `"1.0.10"`; \}; `selectedDefaultClient`: `"google-rcsbusinessmessaging-sdk-plus-businesscommunications-rest"`; `viableAsSoleDefaultRuntime`: `false`; `viableForRbmMessagingRuntime`: `true`; \}; `selectedOperations`: ( \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"POST"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"POST"`; `notes`: `string`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"GET"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"businesscommunications.v1"`; `functionName`: `string`; `method`: `"GET"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \})[]; `source`: `"official Google RCS for Business SDK plus Business Communications REST reference"`; `sourceVersion`: `"rcsbusinessmessaging.v1 + businesscommunications.v1 public docs checked 2026-06-25"`; `strategy`: `"provider-sdk-hybrid"`; \}; `implementationStrategy`: `"provider-sdk-hybrid"`; `providerClient`: \{ `defaultClient`: `"google-rcsbusinessmessaging-sdk-when-configured"`; `importPolicy`: `"provider-client-override-supported"`; `injectionPolicy`: `"override-supported"`; `interface`: `"RcsMessagingProviderClient"`; \}; \} |
| `metadata.apiCoverage` | \{ `checkedAt`: `"2026-06-25"`; `documentedOperationCount`: `38`; `fullProviderApi`: `false`; `generatedFromOfficialSpec`: `false`; `implementedOperationCount`: `number`; `machineReadableSpecStatus`: `"Google documents Discovery URLs for rcsbusinessmessaging.v1 and businesscommunications.v1, but anonymous fetches returned 403 during this audit."`; `operationCatalog`: `"package:src/selected-operations.ts"`; `selectedOperationCount`: `number`; \} |
| `metadata.apiCoverage.checkedAt` | `"2026-06-25"` |
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
| `metadata.implementation` | \{ `acceptedAuthModes`: readonly \[`"accessToken"`, `"tokenProvider"`, `"serviceAccount"`, `"providerClient"`\]; `allowlistChecksum`: `string`; `allowlistChecksumAlgorithm`: `"sha256"`; `apiCoverage`: \{ `checkedAt`: `"2026-06-25"`; `operationCatalog`: `"package:src/selected-operations.ts"`; \}; `checkedAt`: `"2026-06-25"`; `defaultFetchClient`: `"businesscommunications-rest-adapter"`; `defaultHttpClient`: `"providerJsonRequest"`; `defaultProviderSdk`: `"@google/rcsbusinessmessaging"`; `failClosedWithoutCredentialedTransport`: `true`; `failClosedWithoutProviderClient`: `false`; `manifestImport`: `"no-client-initialization"`; `providerClientInterface`: `"RcsMessagingProviderClient"`; `rejectedAuthModes`: readonly \[`"apiKey-only"`\]; `sdkDecision`: \{ `failClosedWithoutCredentialedTransport`: `true`; `notes`: readonly \[`"@google/rcsbusinessmessaging is the default runtime for RBM agentMessages, agentEvents, files, and phone capabilities."`, `"The package does not expose the Business Communications brands.agents readiness API used by this support slice, so those read-only checks use a strict typed REST adapter."`, `"Both runtime paths share the same accessToken, tokenProvider, and service-account credential handling."`, `"API key-only transport is rejected; hosts may inject RcsMessagingProviderClient when they want to wrap Google's SDK or another approved provider runtime."`\]; `officialRuntimeSdk`: \{ `docsUrl`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/libraries"`; `npmModifiedAt`: `"2025-04-30T16:44:00.722Z"`; `packageName`: `"@google/rcsbusinessmessaging"`; `status`: `"real-maintained-rbm-runtime"`; `versionChecked`: `"1.0.10"`; \}; `selectedDefaultClient`: `"google-rcsbusinessmessaging-sdk-plus-businesscommunications-rest"`; `viableAsSoleDefaultRuntime`: `false`; `viableForRbmMessagingRuntime`: `true`; \}; `selectedOperations`: ( \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"POST"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"POST"`; `notes`: `string`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"GET"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"businesscommunications.v1"`; `functionName`: `string`; `method`: `"GET"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \})[]; `source`: `"official Google RCS for Business SDK plus Business Communications REST reference"`; `sourceVersion`: `"rcsbusinessmessaging.v1 + businesscommunications.v1 public docs checked 2026-06-25"`; `strategy`: `"provider-sdk-hybrid"`; \} |
| `metadata.implementation.acceptedAuthModes` | readonly \[`"accessToken"`, `"tokenProvider"`, `"serviceAccount"`, `"providerClient"`\] |
| `metadata.implementation.allowlistChecksum` | `string` |
| `metadata.implementation.allowlistChecksumAlgorithm` | `"sha256"` |
| `metadata.implementation.apiCoverage` | \{ `checkedAt`: `"2026-06-25"`; `operationCatalog`: `"package:src/selected-operations.ts"`; \} |
| `metadata.implementation.apiCoverage.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.apiCoverage.operationCatalog` | `"package:src/selected-operations.ts"` |
| `metadata.implementation.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.defaultFetchClient` | `"businesscommunications-rest-adapter"` |
| `metadata.implementation.defaultHttpClient` | `"providerJsonRequest"` |
| `metadata.implementation.defaultProviderSdk` | `"@google/rcsbusinessmessaging"` |
| `metadata.implementation.failClosedWithoutCredentialedTransport` | `true` |
| `metadata.implementation.failClosedWithoutProviderClient` | `false` |
| `metadata.implementation.manifestImport` | `"no-client-initialization"` |
| `metadata.implementation.providerClientInterface` | `"RcsMessagingProviderClient"` |
| `metadata.implementation.rejectedAuthModes` | readonly \[`"apiKey-only"`\] |
| `metadata.implementation.sdkDecision` | \{ `failClosedWithoutCredentialedTransport`: `true`; `notes`: readonly \[`"@google/rcsbusinessmessaging is the default runtime for RBM agentMessages, agentEvents, files, and phone capabilities."`, `"The package does not expose the Business Communications brands.agents readiness API used by this support slice, so those read-only checks use a strict typed REST adapter."`, `"Both runtime paths share the same accessToken, tokenProvider, and service-account credential handling."`, `"API key-only transport is rejected; hosts may inject RcsMessagingProviderClient when they want to wrap Google's SDK or another approved provider runtime."`\]; `officialRuntimeSdk`: \{ `docsUrl`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/libraries"`; `npmModifiedAt`: `"2025-04-30T16:44:00.722Z"`; `packageName`: `"@google/rcsbusinessmessaging"`; `status`: `"real-maintained-rbm-runtime"`; `versionChecked`: `"1.0.10"`; \}; `selectedDefaultClient`: `"google-rcsbusinessmessaging-sdk-plus-businesscommunications-rest"`; `viableAsSoleDefaultRuntime`: `false`; `viableForRbmMessagingRuntime`: `true`; \} |
| `metadata.implementation.sdkDecision.failClosedWithoutCredentialedTransport` | `true` |
| `metadata.implementation.sdkDecision.notes` | readonly \[`"@google/rcsbusinessmessaging is the default runtime for RBM agentMessages, agentEvents, files, and phone capabilities."`, `"The package does not expose the Business Communications brands.agents readiness API used by this support slice, so those read-only checks use a strict typed REST adapter."`, `"Both runtime paths share the same accessToken, tokenProvider, and service-account credential handling."`, `"API key-only transport is rejected; hosts may inject RcsMessagingProviderClient when they want to wrap Google's SDK or another approved provider runtime."`\] |
| `metadata.implementation.sdkDecision.officialRuntimeSdk` | \{ `docsUrl`: `"https://developers.google.com/business-communications/rcs-business-messaging/reference/libraries"`; `npmModifiedAt`: `"2025-04-30T16:44:00.722Z"`; `packageName`: `"@google/rcsbusinessmessaging"`; `status`: `"real-maintained-rbm-runtime"`; `versionChecked`: `"1.0.10"`; \} |
| `metadata.implementation.sdkDecision.officialRuntimeSdk.docsUrl` | `"https://developers.google.com/business-communications/rcs-business-messaging/reference/libraries"` |
| `metadata.implementation.sdkDecision.officialRuntimeSdk.npmModifiedAt` | `"2025-04-30T16:44:00.722Z"` |
| `metadata.implementation.sdkDecision.officialRuntimeSdk.packageName` | `"@google/rcsbusinessmessaging"` |
| `metadata.implementation.sdkDecision.officialRuntimeSdk.status` | `"real-maintained-rbm-runtime"` |
| `metadata.implementation.sdkDecision.officialRuntimeSdk.versionChecked` | `"1.0.10"` |
| `metadata.implementation.sdkDecision.selectedDefaultClient` | `"google-rcsbusinessmessaging-sdk-plus-businesscommunications-rest"` |
| `metadata.implementation.sdkDecision.viableAsSoleDefaultRuntime` | `false` |
| `metadata.implementation.sdkDecision.viableForRbmMessagingRuntime` | `true` |
| `metadata.implementation.selectedOperations` | ( \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"POST"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"POST"`; `notes`: `string`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"rcsbusinessmessaging.v1"`; `functionName`: `string`; `method`: `"GET"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \} \| \{ `api`: `"businesscommunications.v1"`; `functionName`: `string`; `method`: `"GET"`; `notes?`: `never`; `path`: `string`; `sourceUrl`: `string`; `uid`: `string`; \})[] |
| `metadata.implementation.source` | `"official Google RCS for Business SDK plus Business Communications REST reference"` |
| `metadata.implementation.sourceVersion` | `"rcsbusinessmessaging.v1 + businesscommunications.v1 public docs checked 2026-06-25"` |
| `metadata.implementation.strategy` | `"provider-sdk-hybrid"` |
| `metadata.implementationStrategy` | `"provider-sdk-hybrid"` |
| `metadata.providerClient` | \{ `defaultClient`: `"google-rcsbusinessmessaging-sdk-when-configured"`; `importPolicy`: `"provider-client-override-supported"`; `injectionPolicy`: `"override-supported"`; `interface`: `"RcsMessagingProviderClient"`; \} |
| `metadata.providerClient.defaultClient` | `"google-rcsbusinessmessaging-sdk-when-configured"` |
| `metadata.providerClient.importPolicy` | `"provider-client-override-supported"` |
| `metadata.providerClient.injectionPolicy` | `"override-supported"` |
| `metadata.providerClient.interface` | `"RcsMessagingProviderClient"` |
| `name` | `"Google RCS for Business"` |
| `packageName` | `"@cognidesk/integration-messaging-rcs"` |
| `privacyNotes` | readonly \[`"RCS messages, phone numbers, media metadata, suggested replies/actions, delivery receipts, subscription events, and webhook payloads can contain customer data."`, `"OAuth tokens, Google credential material, SDK clients, webhook client tokens, and shared secrets stay server-side and are represented in Studio only as credential/provider transport readiness."`, `"Unsubscribe, resubscribe, STOP/START fallback handling, outbound-contact policy, consent, fallback routing, retention, and deletion are SDK-user-owned responsibilities."`\] |
| `provider` | `"rcs"` |
| `trustLevel` | `"official"` |
