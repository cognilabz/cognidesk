# integrations/voice/vonage/dist/manifest

## Variables

### vonageVoiceProviderManifest

```ts
const vonageVoiceProviderManifest: {
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
     description: "Parses Vonage answer, event, and fallback callbacks.";
     exposesSensitiveData: true;
     label: "Receive voice webhooks";
     providerObjects: readonly [{
        kind: "vonageCall";
        label: "Vonage Call";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Creates outbound calls through the Vonage Voice SDK.";
     exposesSensitiveData: true;
     label: "Create outbound calls";
     providerObjects: readonly [{
        kind: "vonageCall";
        label: "Vonage Call";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "media";
     description: "Builds NCCO websocket/talk actions for Cognidesk voice sessions.";
     label: "NCCO voice media";
     providerObjects: readonly [{
        kind: "vonageNcco";
        label: "Vonage NCCO";
     }];
     requiresCredential: false;
   }, {
     audiences: readonly ["internal-support"];
     capability: "transfer";
     changesWorkflow: true;
     description: "Transfers active calls through Vonage's documented modify-call action.";
     label: "Transfer active calls";
     providerObjects: readonly [{
        kind: "vonageCall";
        label: "Vonage Call";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "voice.webhook-signature";
     description: "Validates signed Vonage callbacks when configured by the SDK user.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Vonage webhooks";
     providerObjects: readonly [{
        kind: "vonageWebhook";
        label: "Vonage Webhook";
     }];
     requiresCredential: true;
  }];
  category: "voice";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Vonage Server SDK package";
        url: "https://www.npmjs.com/package/@vonage/server-sdk";
      }, {
        label: "Vonage Voice API reference";
        url: "https://developer.vonage.com/en/api/voice";
      }, {
        label: "Vonage Voice webhooks";
        url: "https://developer.vonage.com/en/voice/voice-api/webhook-reference";
      }, {
        label: "Vonage NCCO reference";
        url: "https://developer.vonage.com/en/voice/voice-api/ncco-reference";
     }];
     notes: readonly ["Implements normalized Vonage Voice call-control, NCCO, webhook, readiness, and raw SDK access with the official Vonage server SDK.", "Raw Vonage SDK access is exposed as an escape hatch; this package does not re-export the whole SDK as Cognidesk-owned API coverage.", "Broader Vonage platform products, Client SDK behavior, consent, retention, and telephony policy remain SDK-user/provider configuration."];
     scope: "provider-api-subset";
  };
  credentialRequirements: readonly [{
     description: "Vonage Application ID and private key/JWT credentials used by the official SDK.";
     id: "vonage-application";
     label: "Vonage application credentials";
     metadata: {
        scopeKind: "provider-permission";
     };
     required: true;
   }, {
     description: "Optional signature secret or JWT verification setup for signed Vonage callbacks.";
     id: "vonage-webhook-signature";
     label: "Vonage webhook signature secret";
     metadata: {
        scopeKind: "provider-permission";
     };
     required: false;
  }];
  directions: readonly ["inbound-only", "outbound-only", "bidirectional"];
  id: "voice.vonage";
  limitations: readonly ["Live call readiness depends on the SDK user's Vonage application, numbers, webhook URLs, regions, and account permissions."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        dependencyCaveat: "The server SDK includes multiple Vonage product modules; reassess service-specific packages before tightening dependency budgets.";
        sdkPackage: "@vonage/server-sdk";
        strategy: "official-sdk";
        verifiedAt: "2026-06-21";
        verifiedVersion: "3.27.0";
     };
     rawClient: {
        coverage: "upstream-sdk";
        export: "getRawClient";
     };
  };
  name: "Vonage Voice";
  operations: readonly [{
     alias: "voice.call.answer";
     audiences: readonly ["customer-facing"];
     capability: "receive";
     exposesSensitiveData: true;
     label: "Receive voice webhook";
     providerObject: "vonageCall";
     providerOperation: "parseWebhook";
   }, {
     alias: "voice.call.start";
     audiences: readonly ["customer-facing"];
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Create outbound call";
     providerObject: "vonageCall";
     providerOperation: "createOutboundCall";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "voice.call.transfer";
     audiences: readonly ["internal-support"];
     capability: "transfer";
     changesWorkflow: true;
     label: "Transfer call";
     providerObject: "vonageCall";
     providerOperation: "transferCallWithURL";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-voice-vonage";
  privacyNotes: readonly ["Phone numbers, call metadata, webhook parameters, NCCO URLs, and conversation identifiers can contain customer data and are exchanged with Vonage.", "Vonage credentials stay server-side and are never issued to browsers by this package."];
  provider: "vonage";
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"receive"`; `description`: `"Parses Vonage answer, event, and fallback callbacks."`; `exposesSensitiveData`: `true`; `label`: `"Receive voice webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"vonageCall"`; `label`: `"Vonage Call"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Creates outbound calls through the Vonage Voice SDK."`; `exposesSensitiveData`: `true`; `label`: `"Create outbound calls"`; `providerObjects`: readonly \[\{ `kind`: `"vonageCall"`; `label`: `"Vonage Call"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"media"`; `description`: `"Builds NCCO websocket/talk actions for Cognidesk voice sessions."`; `label`: `"NCCO voice media"`; `providerObjects`: readonly \[\{ `kind`: `"vonageNcco"`; `label`: `"Vonage NCCO"`; \}\]; `requiresCredential`: `false`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"transfer"`; `changesWorkflow`: `true`; `description`: `"Transfers active calls through Vonage's documented modify-call action."`; `label`: `"Transfer active calls"`; `providerObjects`: readonly \[\{ `kind`: `"vonageCall"`; `label`: `"Vonage Call"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"voice.webhook-signature"`; `description`: `"Validates signed Vonage callbacks when configured by the SDK user."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Vonage webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"vonageWebhook"`; `label`: `"Vonage Webhook"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"voice"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Vonage Server SDK package"`; `url`: `"https://www.npmjs.com/package/@vonage/server-sdk"`; \}, \{ `label`: `"Vonage Voice API reference"`; `url`: `"https://developer.vonage.com/en/api/voice"`; \}, \{ `label`: `"Vonage Voice webhooks"`; `url`: `"https://developer.vonage.com/en/voice/voice-api/webhook-reference"`; \}, \{ `label`: `"Vonage NCCO reference"`; `url`: `"https://developer.vonage.com/en/voice/voice-api/ncco-reference"`; \}\]; `notes`: readonly \[`"Implements normalized Vonage Voice call-control, NCCO, webhook, readiness, and raw SDK access with the official Vonage server SDK."`, `"Raw Vonage SDK access is exposed as an escape hatch; this package does not re-export the whole SDK as Cognidesk-owned API coverage."`, `"Broader Vonage platform products, Client SDK behavior, consent, retention, and telephony policy remain SDK-user/provider configuration."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Vonage Server SDK package"`; `url`: `"https://www.npmjs.com/package/@vonage/server-sdk"`; \}, \{ `label`: `"Vonage Voice API reference"`; `url`: `"https://developer.vonage.com/en/api/voice"`; \}, \{ `label`: `"Vonage Voice webhooks"`; `url`: `"https://developer.vonage.com/en/voice/voice-api/webhook-reference"`; \}, \{ `label`: `"Vonage NCCO reference"`; `url`: `"https://developer.vonage.com/en/voice/voice-api/ncco-reference"`; \}\] |
| `coverage.notes` | readonly \[`"Implements normalized Vonage Voice call-control, NCCO, webhook, readiness, and raw SDK access with the official Vonage server SDK."`, `"Raw Vonage SDK access is exposed as an escape hatch; this package does not re-export the whole SDK as Cognidesk-owned API coverage."`, `"Broader Vonage platform products, Client SDK behavior, consent, retention, and telephony policy remain SDK-user/provider configuration."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Vonage Application ID and private key/JWT credentials used by the official SDK."`; `id`: `"vonage-application"`; `label`: `"Vonage application credentials"`; `metadata`: \{ `scopeKind`: `"provider-permission"`; \}; `required`: `true`; \}, \{ `description`: `"Optional signature secret or JWT verification setup for signed Vonage callbacks."`; `id`: `"vonage-webhook-signature"`; `label`: `"Vonage webhook signature secret"`; `metadata`: \{ `scopeKind`: `"provider-permission"`; \}; `required`: `false`; \}\] |
| `directions` | readonly \[`"inbound-only"`, `"outbound-only"`, `"bidirectional"`\] |
| `id` | `"voice.vonage"` |
| `limitations` | readonly \[`"Live call readiness depends on the SDK user's Vonage application, numbers, webhook URLs, regions, and account permissions."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `dependencyCaveat`: `"The server SDK includes multiple Vonage product modules; reassess service-specific packages before tightening dependency budgets."`; `sdkPackage`: `"@vonage/server-sdk"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedVersion`: `"3.27.0"`; \}; `rawClient`: \{ `coverage`: `"upstream-sdk"`; `export`: `"getRawClient"`; \}; \} |
| `metadata.implementation` | \{ `dependencyCaveat`: `"The server SDK includes multiple Vonage product modules; reassess service-specific packages before tightening dependency budgets."`; `sdkPackage`: `"@vonage/server-sdk"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedVersion`: `"3.27.0"`; \} |
| `metadata.implementation.dependencyCaveat` | `"The server SDK includes multiple Vonage product modules; reassess service-specific packages before tightening dependency budgets."` |
| `metadata.implementation.sdkPackage` | `"@vonage/server-sdk"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.implementation.verifiedVersion` | `"3.27.0"` |
| `metadata.rawClient` | \{ `coverage`: `"upstream-sdk"`; `export`: `"getRawClient"`; \} |
| `metadata.rawClient.coverage` | `"upstream-sdk"` |
| `metadata.rawClient.export` | `"getRawClient"` |
| `name` | `"Vonage Voice"` |
| `operations` | readonly \[\{ `alias`: `"voice.call.answer"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `label`: `"Receive voice webhook"`; `providerObject`: `"vonageCall"`; `providerOperation`: `"parseWebhook"`; \}, \{ `alias`: `"voice.call.start"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Create outbound call"`; `providerObject`: `"vonageCall"`; `providerOperation`: `"createOutboundCall"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"voice.call.transfer"`; `audiences`: readonly \[`"internal-support"`\]; `capability`: `"transfer"`; `changesWorkflow`: `true`; `label`: `"Transfer call"`; `providerObject`: `"vonageCall"`; `providerOperation`: `"transferCallWithURL"`; `sideEffect`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-voice-vonage"` |
| `privacyNotes` | readonly \[`"Phone numbers, call metadata, webhook parameters, NCCO URLs, and conversation identifiers can contain customer data and are exchanged with Vonage."`, `"Vonage credentials stay server-side and are never issued to browsers by this package."`\] |
| `provider` | `"vonage"` |
| `trustLevel` | `"official"` |
