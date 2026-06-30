# integrations/sms/twilio/dist/manifest

## Variables

### twilioSmsProviderManifest

```ts
const twilioSmsProviderManifest: {
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
     description: "Validates and parses Twilio Messaging webhooks for SDK-user-owned SMS/MMS handling.";
     exposesSensitiveData: true;
     label: "Receive inbound SMS/MMS";
     providerObjects: readonly [{
        kind: "twilioMessage";
        label: "Twilio Message";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Creates outbound SMS or MMS messages through the Twilio helper library.";
     exposesSensitiveData: true;
     label: "Send SMS/MMS messages";
     providerObjects: readonly [{
        kind: "twilioMessage";
        label: "Twilio Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "schedule";
     changesWorkflow: true;
     description: "Schedules outbound messages through Twilio's Message Scheduling fields when a Messaging Service SID, SendAt, and ScheduleType are supplied.";
     exposesSensitiveData: true;
     label: "Schedule SMS/MMS messages";
     providerObjects: readonly [{
        kind: "twilioMessage";
        label: "Twilio Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "read-provider-object";
     description: "Reads Twilio Message resources by Message SID.";
     exposesSensitiveData: true;
     label: "Read Twilio messages";
     providerObjects: readonly [{
        kind: "twilioMessage";
        label: "Twilio Message";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "search-provider-object";
     description: "Lists Twilio Message resources with SDK-user-supplied filters.";
     exposesSensitiveData: true;
     label: "List Twilio messages";
     providerObjects: readonly [{
        kind: "twilioMessage";
        label: "Twilio Message";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "twilio.webhook-signature";
     description: "Validates X-Twilio-Signature for form-encoded Twilio Messaging webhooks and status callbacks.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate Twilio webhooks";
     providerObjects: readonly [{
        kind: "twilioWebhook";
        label: "Twilio Webhook";
     }];
     requiresCredential: true;
  }];
  category: "sms";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Twilio Node helper library";
        url: "https://www.npmjs.com/package/twilio";
      }, {
        label: "Twilio Messaging API overview";
        url: "https://www.twilio.com/docs/messaging/api";
      }, {
        label: "Twilio Message resource";
        url: "https://www.twilio.com/docs/messaging/api/message-resource";
      }, {
        label: "Twilio webhook security";
        url: "https://www.twilio.com/docs/usage/webhooks/webhooks-security";
     }];
     notes: readonly ["Implements normalized SMS/MMS send, read, list, cancel, readiness, webhook, and Twilio SDK client access with the official Twilio Node helper library.", "Twilio SMS and Twilio Voice are separate Cognidesk category packages even though they use the same upstream helper library.", "Messaging Services administration, Verify, Conversations, Content, Studio, toll-free/A2P compliance, pricing, and carrier policy remain available only through raw Twilio client access or future normalized operations."];
     scope: "provider-api-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side Twilio account credentials used for Messaging REST API calls and webhook signature validation.";
     id: "twilio-account";
     label: "Twilio Account SID and Auth Token";
     metadata: {
        scopeKind: "provider-permission";
     };
     required: true;
   }, {
     description: "A Twilio SMS/MMS-capable phone number or Messaging Service configured by the SDK user.";
     id: "twilio-sms-sender";
     label: "Twilio SMS/MMS-capable sender";
     metadata: {
        scopeKind: "internal-capability";
     };
     required: true;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "sms.twilio";
  limitations: readonly ["Live SMS readiness depends on the SDK user's Twilio account, SMS-capable sender, Messaging Service configuration, phone-number capabilities, regions, carrier registration, webhooks, and account permissions."];
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
     sdkClient: {
        coverage: "deprecated-raw-client-alias";
        export: "getSdkClient";
     };
  };
  name: "Twilio Programmable Messaging";
  operations: readonly [{
     alias: "sms.message.receive";
     audiences: readonly ["customer-facing"];
     capability: "receive";
     exposesSensitiveData: true;
     label: "Receive SMS";
     providerObject: "smsMessage";
     providerOperation: "parseWebhook";
   }, {
     alias: "sms.message.send";
     audiences: readonly ["customer-facing"];
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     label: "Send SMS";
     providerObject: "smsMessage";
     providerOperation: "sendMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "sms.message.read";
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "read-provider-object";
     exposesSensitiveData: true;
     label: "Read SMS";
     providerObject: "smsMessage";
     providerOperation: "fetchMessage";
   }, {
     alias: "sms.message.search";
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "search-provider-object";
     exposesSensitiveData: true;
     label: "Search SMS";
     providerObject: "smsMessage";
     providerOperation: "listMessages";
  }];
  packageName: "@cognidesk/integration-sms-twilio";
  privacyNotes: readonly ["Phone numbers, message bodies, message metadata, webhook parameters, delivery status, and media URLs can contain customer data and are exchanged with Twilio.", "Twilio credentials stay server-side and are never issued to browsers by this package.", "Outbound SMS consent, opt-in/opt-out handling, quiet hours, campaign registration, content policy, retention, and regional compliance are SDK-user-owned responsibilities."];
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
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"bidirectional"` \| `"inbound-only"` \| `"outbound-only"`)[] |
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"receive"`; `description`: `"Validates and parses Twilio Messaging webhooks for SDK-user-owned SMS/MMS handling."`; `exposesSensitiveData`: `true`; `label`: `"Receive inbound SMS/MMS"`; `providerObjects`: readonly \[\{ `kind`: `"twilioMessage"`; `label`: `"Twilio Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Creates outbound SMS or MMS messages through the Twilio helper library."`; `exposesSensitiveData`: `true`; `label`: `"Send SMS/MMS messages"`; `providerObjects`: readonly \[\{ `kind`: `"twilioMessage"`; `label`: `"Twilio Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"schedule"`; `changesWorkflow`: `true`; `description`: `"Schedules outbound messages through Twilio's Message Scheduling fields when a Messaging Service SID, SendAt, and ScheduleType are supplied."`; `exposesSensitiveData`: `true`; `label`: `"Schedule SMS/MMS messages"`; `providerObjects`: readonly \[\{ `kind`: `"twilioMessage"`; `label`: `"Twilio Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads Twilio Message resources by Message SID."`; `exposesSensitiveData`: `true`; `label`: `"Read Twilio messages"`; `providerObjects`: readonly \[\{ `kind`: `"twilioMessage"`; `label`: `"Twilio Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"search-provider-object"`; `description`: `"Lists Twilio Message resources with SDK-user-supplied filters."`; `exposesSensitiveData`: `true`; `label`: `"List Twilio messages"`; `providerObjects`: readonly \[\{ `kind`: `"twilioMessage"`; `label`: `"Twilio Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"twilio.webhook-signature"`; `description`: `"Validates X-Twilio-Signature for form-encoded Twilio Messaging webhooks and status callbacks."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate Twilio webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"twilioWebhook"`; `label`: `"Twilio Webhook"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"sms"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Twilio Node helper library"`; `url`: `"https://www.npmjs.com/package/twilio"`; \}, \{ `label`: `"Twilio Messaging API overview"`; `url`: `"https://www.twilio.com/docs/messaging/api"`; \}, \{ `label`: `"Twilio Message resource"`; `url`: `"https://www.twilio.com/docs/messaging/api/message-resource"`; \}, \{ `label`: `"Twilio webhook security"`; `url`: `"https://www.twilio.com/docs/usage/webhooks/webhooks-security"`; \}\]; `notes`: readonly \[`"Implements normalized SMS/MMS send, read, list, cancel, readiness, webhook, and Twilio SDK client access with the official Twilio Node helper library."`, `"Twilio SMS and Twilio Voice are separate Cognidesk category packages even though they use the same upstream helper library."`, `"Messaging Services administration, Verify, Conversations, Content, Studio, toll-free/A2P compliance, pricing, and carrier policy remain available only through raw Twilio client access or future normalized operations."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Twilio Node helper library"`; `url`: `"https://www.npmjs.com/package/twilio"`; \}, \{ `label`: `"Twilio Messaging API overview"`; `url`: `"https://www.twilio.com/docs/messaging/api"`; \}, \{ `label`: `"Twilio Message resource"`; `url`: `"https://www.twilio.com/docs/messaging/api/message-resource"`; \}, \{ `label`: `"Twilio webhook security"`; `url`: `"https://www.twilio.com/docs/usage/webhooks/webhooks-security"`; \}\] |
| `coverage.notes` | readonly \[`"Implements normalized SMS/MMS send, read, list, cancel, readiness, webhook, and Twilio SDK client access with the official Twilio Node helper library."`, `"Twilio SMS and Twilio Voice are separate Cognidesk category packages even though they use the same upstream helper library."`, `"Messaging Services administration, Verify, Conversations, Content, Studio, toll-free/A2P compliance, pricing, and carrier policy remain available only through raw Twilio client access or future normalized operations."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Server-side Twilio account credentials used for Messaging REST API calls and webhook signature validation."`; `id`: `"twilio-account"`; `label`: `"Twilio Account SID and Auth Token"`; `metadata`: \{ `scopeKind`: `"provider-permission"`; \}; `required`: `true`; \}, \{ `description`: `"A Twilio SMS/MMS-capable phone number or Messaging Service configured by the SDK user."`; `id`: `"twilio-sms-sender"`; `label`: `"Twilio SMS/MMS-capable sender"`; `metadata`: \{ `scopeKind`: `"internal-capability"`; \}; `required`: `true`; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"sms.twilio"` |
| `limitations` | readonly \[`"Live SMS readiness depends on the SDK user's Twilio account, SMS-capable sender, Messaging Service configuration, phone-number capabilities, regions, carrier registration, webhooks, and account permissions."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `implementation`: \{ `sdkPackage`: `"twilio"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedVersion`: `"6.0.2"`; \}; `rawClient`: \{ `coverage`: `"upstream-sdk"`; `export`: `"getRawClient"`; \}; `sdkClient`: \{ `coverage`: `"deprecated-raw-client-alias"`; `export`: `"getSdkClient"`; \}; \} |
| `metadata.implementation` | \{ `sdkPackage`: `"twilio"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedVersion`: `"6.0.2"`; \} |
| `metadata.implementation.sdkPackage` | `"twilio"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.implementation.verifiedVersion` | `"6.0.2"` |
| `metadata.rawClient` | \{ `coverage`: `"upstream-sdk"`; `export`: `"getRawClient"`; \} |
| `metadata.rawClient.coverage` | `"upstream-sdk"` |
| `metadata.rawClient.export` | `"getRawClient"` |
| `metadata.sdkClient` | \{ `coverage`: `"deprecated-raw-client-alias"`; `export`: `"getSdkClient"`; \} |
| `metadata.sdkClient.coverage` | `"deprecated-raw-client-alias"` |
| `metadata.sdkClient.export` | `"getSdkClient"` |
| `name` | `"Twilio Programmable Messaging"` |
| `operations` | readonly \[\{ `alias`: `"sms.message.receive"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `label`: `"Receive SMS"`; `providerObject`: `"smsMessage"`; `providerOperation`: `"parseWebhook"`; \}, \{ `alias`: `"sms.message.send"`; `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `label`: `"Send SMS"`; `providerObject`: `"smsMessage"`; `providerOperation`: `"sendMessage"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"sms.message.read"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Read SMS"`; `providerObject`: `"smsMessage"`; `providerOperation`: `"fetchMessage"`; \}, \{ `alias`: `"sms.message.search"`; `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `label`: `"Search SMS"`; `providerObject`: `"smsMessage"`; `providerOperation`: `"listMessages"`; \}\] |
| `packageName` | `"@cognidesk/integration-sms-twilio"` |
| `privacyNotes` | readonly \[`"Phone numbers, message bodies, message metadata, webhook parameters, delivery status, and media URLs can contain customer data and are exchanged with Twilio."`, `"Twilio credentials stay server-side and are never issued to browsers by this package."`, `"Outbound SMS consent, opt-in/opt-out handling, quiet hours, campaign registration, content policy, retention, and regional compliance are SDK-user-owned responsibilities."`\] |
| `provider` | `"twilio"` |
| `trustLevel` | `"official"` |
