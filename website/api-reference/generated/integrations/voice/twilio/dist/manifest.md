# integrations/voice/twilio/dist/manifest

## Variables

### twilioVoiceProviderManifest

```ts
const twilioVoiceProviderManifest: {
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
     audiences: readonly ["customer-facing"];
     capability: "receive";
     description: "Accepts and parses Twilio Voice webhooks for SDK-user-owned Cognidesk voice handling.";
     exposesSensitiveData: true;
     label: "Receive voice webhooks";
     providerObjects: readonly [{
        kind: "twilioCall";
        label: "Twilio Call";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Creates outbound calls through the Twilio helper library.";
     exposesSensitiveData: true;
     label: "Create outbound calls";
     providerObjects: readonly [{
        kind: "twilioCall";
        label: "Twilio Call";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "media";
     description: "Builds TwiML for Cognidesk-owned voice websocket media streams while preserving Twilio track constraints.";
     label: "Media Stream TwiML";
     providerObjects: readonly [{
        kind: "twilioMediaStream";
        label: "Twilio Media Stream";
     }];
     requiresCredential: false;
   }, {
     audiences: readonly ["internal-support"];
     capability: "transfer";
     changesWorkflow: true;
     description: "Redirects or ends active Twilio calls through the Call resource.";
     label: "Redirect or end calls";
     providerObjects: readonly [{
        kind: "twilioCall";
        label: "Twilio Call";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "twilio.webhook-signature";
     description: "Validates X-Twilio-Signature for form-encoded Twilio Voice webhooks.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Twilio webhooks";
     providerObjects: readonly [{
        kind: "twilioWebhook";
        label: "Twilio Webhook";
     }];
     requiresCredential: true;
  }];
  category: "voice";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Twilio Node helper library";
        url: "https://www.npmjs.com/package/twilio";
      }, {
        label: "Twilio Programmable Voice API";
        url: "https://www.twilio.com/docs/voice/api";
      }, {
        label: "Twilio Call Resource";
        url: "https://www.twilio.com/docs/voice/api/call-resource";
      }, {
        label: "Twilio webhook security";
        url: "https://www.twilio.com/docs/usage/webhooks/webhooks-security";
     }];
     notes: readonly ["Implements normalized call-control, TwiML media stream, webhook, readiness, and raw Twilio helper-client access with the official Twilio Node helper library.", "Twilio Voice and Twilio SMS are separate Cognidesk category packages even though they use the same upstream helper library.", "Conferences, queues, recordings, transcription lifecycle, SIP trunks, Voice Insights, and ConversationRelay remain available only through raw Twilio client access or future normalized operations."];
     scope: "provider-api-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side Twilio Account SID used by the helper library.";
     id: "twilio-account";
     label: "Twilio Account SID";
     metadata: {
        scopeKind: "provider-permission";
     };
     required: true;
   }, {
     description: "Twilio Auth Token or API key credentials used for Voice REST calls.";
     id: "twilio-rest-api-credentials";
     label: "Twilio REST API credentials";
     metadata: {
        scopeKind: "provider-permission";
     };
     required: true;
   }, {
     description: "Primary Twilio Auth Token used to validate X-Twilio-Signature webhook requests.";
     id: "twilio-webhook-auth-token";
     label: "Twilio webhook Auth Token";
     metadata: {
        scopeKind: "provider-permission";
     };
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "voice.twilio";
  limitations: readonly ["Live call readiness depends on the SDK user's Twilio account, voice-capable numbers, regions, webhooks, and account permissions."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        sdkPackage: "twilio";
        strategy: "official-sdk";
        verifiedAt: "2026-06-21";
        verifiedVersion: "6.0.2";
     };
     rawClient: {
        coverage: "upstream-sdk";
        export: "getRawClient";
     };
  };
  name: "Twilio Programmable Voice";
  operations: readonly [{
     alias: "voice.call.answer";
     audiences: readonly ["customer-facing"];
     capability: "receive";
     exposesSensitiveData: true;
     label: "Receive voice webhook";
     providerObject: "twilioCall";
     providerOperation: "parseWebhook";
   }, {
     alias: "voice.call.start";
     audiences: readonly ["customer-facing"];
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Create outbound call";
     providerObject: "twilioCall";
     providerOperation: "createOutboundCall";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "voice.call.redirect";
     audiences: readonly ["internal-support"];
     capability: "transfer";
     changesWorkflow: true;
     label: "Redirect call";
     providerObject: "twilioCall";
     providerOperation: "redirectCall";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-voice-twilio";
  privacyNotes: readonly ["Phone numbers, call metadata, webhook parameters, and Media Stream audio metadata are exchanged with Twilio.", "Twilio credentials stay server-side and are never issued to browsers by this package."];
  provider: "twilio";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[] |
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
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"mixed"` \| `"internal-support"`; `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"receive"`; `description`: `"Accepts and parses Twilio Voice webhooks for SDK-user-owned Cognidesk voice handling."`; `exposesSensitiveData`: `true`; `label`: `"Receive voice webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"twilioCall"`; `label`: `"Twilio Call"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Creates outbound calls through the Twilio helper library."`; `exposesSensitiveData`: `true`; `label`: `"Create outbound calls"`; `providerObjects`: readonly \[\{ `kind`: `"twilioCall"`; `label`: `"Twilio Call"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"media"`; `description`: `"Builds TwiML for Cognidesk-owned voice websocket media streams while preserving Twilio track constraints."`; `label`: `"Media Stream TwiML"`; `providerObjects`: readonly \[\{ `kind`: `"twilioMediaStream"`; `label`: `"Twilio Media Stream"`; \}\]; `requiresCredential`: `false`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"transfer"`; `changesWorkflow`: `true`; `description`: `"Redirects or ends active Twilio calls through the Call resource."`; `label`: `"Redirect or end calls"`; `providerObjects`: readonly \[\{ `kind`: `"twilioCall"`; `label`: `"Twilio Call"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"twilio.webhook-signature"`; `description`: `"Validates X-Twilio-Signature for form-encoded Twilio Voice webhooks."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Twilio webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"twilioWebhook"`; `label`: `"Twilio Webhook"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"voice"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Twilio Node helper library"`; `url`: `"https://www.npmjs.com/package/twilio"`; \}, \{ `label`: `"Twilio Programmable Voice API"`; `url`: `"https://www.twilio.com/docs/voice/api"`; \}, \{ `label`: `"Twilio Call Resource"`; `url`: `"https://www.twilio.com/docs/voice/api/call-resource"`; \}, \{ `label`: `"Twilio webhook security"`; `url`: `"https://www.twilio.com/docs/usage/webhooks/webhooks-security"`; \}\]; `notes`: readonly \[`"Implements normalized call-control, TwiML media stream, webhook, readiness, and raw Twilio helper-client access with the official Twilio Node helper library."`, `"Twilio Voice and Twilio SMS are separate Cognidesk category packages even though they use the same upstream helper library."`, `"Conferences, queues, recordings, transcription lifecycle, SIP trunks, Voice Insights, and ConversationRelay remain available only through raw Twilio client access or future normalized operations."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Twilio Node helper library"`; `url`: `"https://www.npmjs.com/package/twilio"`; \}, \{ `label`: `"Twilio Programmable Voice API"`; `url`: `"https://www.twilio.com/docs/voice/api"`; \}, \{ `label`: `"Twilio Call Resource"`; `url`: `"https://www.twilio.com/docs/voice/api/call-resource"`; \}, \{ `label`: `"Twilio webhook security"`; `url`: `"https://www.twilio.com/docs/usage/webhooks/webhooks-security"`; \}\] |
| `coverage.notes` | readonly \[`"Implements normalized call-control, TwiML media stream, webhook, readiness, and raw Twilio helper-client access with the official Twilio Node helper library."`, `"Twilio Voice and Twilio SMS are separate Cognidesk category packages even though they use the same upstream helper library."`, `"Conferences, queues, recordings, transcription lifecycle, SIP trunks, Voice Insights, and ConversationRelay remain available only through raw Twilio client access or future normalized operations."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Server-side Twilio Account SID used by the helper library."`; `id`: `"twilio-account"`; `label`: `"Twilio Account SID"`; `metadata`: \{ `scopeKind`: `"provider-permission"`; \}; `required`: `true`; \}, \{ `description`: `"Twilio Auth Token or API key credentials used for Voice REST calls."`; `id`: `"twilio-rest-api-credentials"`; `label`: `"Twilio REST API credentials"`; `metadata`: \{ `scopeKind`: `"provider-permission"`; \}; `required`: `true`; \}, \{ `description`: `"Primary Twilio Auth Token used to validate X-Twilio-Signature webhook requests."`; `id`: `"twilio-webhook-auth-token"`; `label`: `"Twilio webhook Auth Token"`; `metadata`: \{ `scopeKind`: `"provider-permission"`; \}; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"voice.twilio"` |
| `limitations` | readonly \[`"Live call readiness depends on the SDK user's Twilio account, voice-capable numbers, regions, webhooks, and account permissions."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `sdkPackage`: `"twilio"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedVersion`: `"6.0.2"`; \}; `rawClient`: \{ `coverage`: `"upstream-sdk"`; `export`: `"getRawClient"`; \}; \} |
| `metadata.implementation` | \{ `sdkPackage`: `"twilio"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedVersion`: `"6.0.2"`; \} |
| `metadata.implementation.sdkPackage` | `"twilio"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.implementation.verifiedVersion` | `"6.0.2"` |
| `metadata.rawClient` | \{ `coverage`: `"upstream-sdk"`; `export`: `"getRawClient"`; \} |
| `metadata.rawClient.coverage` | `"upstream-sdk"` |
| `metadata.rawClient.export` | `"getRawClient"` |
| `name` | `"Twilio Programmable Voice"` |
| `operations` | readonly \[\{ `alias`: `"voice.call.answer"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `label`: `"Receive voice webhook"`; `providerObject`: `"twilioCall"`; `providerOperation`: `"parseWebhook"`; \}, \{ `alias`: `"voice.call.start"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Create outbound call"`; `providerObject`: `"twilioCall"`; `providerOperation`: `"createOutboundCall"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"voice.call.redirect"`; `audiences`: readonly \[`"internal-support"`\]; `capability`: `"transfer"`; `changesWorkflow`: `true`; `label`: `"Redirect call"`; `providerObject`: `"twilioCall"`; `providerOperation`: `"redirectCall"`; `sideEffect`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-voice-twilio"` |
| `privacyNotes` | readonly \[`"Phone numbers, call metadata, webhook parameters, and Media Stream audio metadata are exchanged with Twilio."`, `"Twilio credentials stay server-side and are never issued to browsers by this package."`\] |
| `provider` | `"twilio"` |
| `trustLevel` | `"official"` |
