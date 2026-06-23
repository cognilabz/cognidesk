# integrations/email/mailgun/dist/manifest

## Variables

### mailgunEmailProviderManifest

```ts
const mailgunEmailProviderManifest: {
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
     audiences: readonly ["customer-facing", "mixed"];
     capability: "receive";
     description: "Parses and verifies Mailgun inbound, delivery, engagement, and failure callbacks.";
     exposesSensitiveData: true;
     label: "Receive Mailgun events";
     providerObjects: readonly [{
        kind: "mailgunEvent";
        label: "Mailgun Event";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Sends support email through the official Mailgun SDK.";
     exposesSensitiveData: true;
     label: "Send Mailgun email";
     providerObjects: readonly [{
        kind: "mailgunMessage";
        label: "Mailgun Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads support-scoped stored messages, domain state, webhooks, and event delivery status.";
     exposesSensitiveData: true;
     label: "Read Mailgun message and domain resources";
     providerObjects: readonly [{
        kind: "mailgunStoredMessage";
        label: "Mailgun Stored Message";
      }, {
        kind: "mailgunDomain";
        label: "Mailgun Domain";
      }, {
        kind: "mailgunWebhook";
        label: "Mailgun Webhook";
      }, {
        kind: "deliveryStatus";
        label: "Delivery Status";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Searches Mailgun event history through mailgun.js for retention-aware support workflows.";
     exposesSensitiveData: true;
     label: "Search Mailgun events";
     providerObjects: readonly [{
        kind: "mailgunEvent";
        label: "Mailgun Event";
     }];
     requiresCredential: true;
  }];
  category: "email";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "mailgun.js package";
        url: "https://github.com/mailgun/mailgun.js";
      }, {
        label: "Mailgun Messages API";
        url: "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/messages";
      }, {
        label: "Mailgun Events API";
        url: "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/events";
      }, {
        label: "Mailgun Webhooks";
        url: "https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/domain-webhooks";
     }];
     notes: readonly ["Coverage is the Cognidesk normalized support-email adapter surface backed by the official Mailgun SDK.", "The raw mailgun.js client is exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full Mailgun API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side Mailgun API key used by the official mailgun.js client.";
     id: "mailgun-api-key";
     label: "Mailgun API key";
     required: true;
   }, {
     description: "Mailgun domain selected by the SDK user for outbound, event, and stored-message operations.";
     id: "mailgun-domain";
     label: "Mailgun sending domain";
     required: true;
   }, {
     description: "Signing key used to verify Mailgun event callbacks.";
     id: "mailgun-webhook-signing-key";
     label: "Mailgun webhook signing key";
     required: false;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "email.mailgun";
  limitations: readonly ["The SDK user owns domain selection, route policy, retention, redaction, replay-cache storage, outbound approval, and rate limiting.", "Advanced provider operations remain available through the raw mailgun.js client, not as Cognidesk-owned generated operations."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        eventSearch: "provider-supported-via-official-sdk";
        fullProviderApiClone: "not-covered";
        sendEmail: "provider-supported-via-official-sdk";
        sendReply: "provider-supported-via-official-sdk";
        storedMessageRead: "provider-supported-via-official-sdk";
        webhooks: "provider-supported-via-official-sdk";
     };
     implementation: {
        integrationKitStatus: "implemented";
        manifestImport: "no-sdk-client-initialization";
        sdkPackage: "mailgun.js";
        sdkVersionRange: "^13.2.0";
        strategy: "official-sdk";
        verifiedAt: "2026-06-21";
        verifiedPackageVersion: "13.2.0";
     };
     rawClientEscapeHatch: "mailgun.js IMailgunClient exposed from createMailgunEmailClient().rawClient";
  };
  name: "Mailgun";
  operations: readonly [{
     alias: "email.receive";
     capability: "receive";
     exposesSensitiveData: true;
     providerObject: "emailMessage";
   }, {
     alias: "email.send";
     capability: "send";
     exposesSensitiveData: true;
     providerObject: "emailMessage";
     sideEffect: true;
   }, {
     alias: "email.reply.send";
     capability: "send";
     exposesSensitiveData: true;
     providerObject: "emailMessage";
     sideEffect: true;
   }, {
     alias: "email.deliveryStatus.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "deliveryStatus";
   }, {
     alias: "mailgun.storedMessage.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "mailgunStoredMessage";
   }, {
     alias: "mailgun.domain.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "mailgunDomain";
   }, {
     alias: "mailgun.webhooks.list";
     capability: "read-provider-object";
     extension: true;
     providerObject: "mailgunWebhook";
  }];
  packageName: "@cognidesk/integration-email-mailgun";
  privacyNotes: readonly ["Mailgun message bodies, recipients, sender addresses, headers, tags, variables, event payloads, routes, and attachments can contain customer data.", "Mailgun API keys and webhook signing keys stay server-side and are represented only as readiness state."];
  provider: "mailgun";
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Parses and verifies Mailgun inbound, delivery, engagement, and failure callbacks."`; `exposesSensitiveData`: `true`; `label`: `"Receive Mailgun events"`; `providerObjects`: readonly \[\{ `kind`: `"mailgunEvent"`; `label`: `"Mailgun Event"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Sends support email through the official Mailgun SDK."`; `exposesSensitiveData`: `true`; `label`: `"Send Mailgun email"`; `providerObjects`: readonly \[\{ `kind`: `"mailgunMessage"`; `label`: `"Mailgun Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads support-scoped stored messages, domain state, webhooks, and event delivery status."`; `exposesSensitiveData`: `true`; `label`: `"Read Mailgun message and domain resources"`; `providerObjects`: readonly \[\{ `kind`: `"mailgunStoredMessage"`; `label`: `"Mailgun Stored Message"`; \}, \{ `kind`: `"mailgunDomain"`; `label`: `"Mailgun Domain"`; \}, \{ `kind`: `"mailgunWebhook"`; `label`: `"Mailgun Webhook"`; \}, \{ `kind`: `"deliveryStatus"`; `label`: `"Delivery Status"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Searches Mailgun event history through mailgun.js for retention-aware support workflows."`; `exposesSensitiveData`: `true`; `label`: `"Search Mailgun events"`; `providerObjects`: readonly \[\{ `kind`: `"mailgunEvent"`; `label`: `"Mailgun Event"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"email"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"mailgun.js package"`; `url`: `"https://github.com/mailgun/mailgun.js"`; \}, \{ `label`: `"Mailgun Messages API"`; `url`: `"https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/messages"`; \}, \{ `label`: `"Mailgun Events API"`; `url`: `"https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/events"`; \}, \{ `label`: `"Mailgun Webhooks"`; `url`: `"https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/domain-webhooks"`; \}\]; `notes`: readonly \[`"Coverage is the Cognidesk normalized support-email adapter surface backed by the official Mailgun SDK."`, `"The raw mailgun.js client is exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full Mailgun API clone."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"mailgun.js package"`; `url`: `"https://github.com/mailgun/mailgun.js"`; \}, \{ `label`: `"Mailgun Messages API"`; `url`: `"https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/messages"`; \}, \{ `label`: `"Mailgun Events API"`; `url`: `"https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/events"`; \}, \{ `label`: `"Mailgun Webhooks"`; `url`: `"https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/domain-webhooks"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is the Cognidesk normalized support-email adapter surface backed by the official Mailgun SDK."`, `"The raw mailgun.js client is exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full Mailgun API clone."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Server-side Mailgun API key used by the official mailgun.js client."`; `id`: `"mailgun-api-key"`; `label`: `"Mailgun API key"`; `required`: `true`; \}, \{ `description`: `"Mailgun domain selected by the SDK user for outbound, event, and stored-message operations."`; `id`: `"mailgun-domain"`; `label`: `"Mailgun sending domain"`; `required`: `true`; \}, \{ `description`: `"Signing key used to verify Mailgun event callbacks."`; `id`: `"mailgun-webhook-signing-key"`; `label`: `"Mailgun webhook signing key"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"email.mailgun"` |
| `limitations` | readonly \[`"The SDK user owns domain selection, route policy, retention, redaction, replay-cache storage, outbound approval, and rate limiting."`, `"Advanced provider operations remain available through the raw mailgun.js client, not as Cognidesk-owned generated operations."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `eventSearch`: `"provider-supported-via-official-sdk"`; `fullProviderApiClone`: `"not-covered"`; `sendEmail`: `"provider-supported-via-official-sdk"`; `sendReply`: `"provider-supported-via-official-sdk"`; `storedMessageRead`: `"provider-supported-via-official-sdk"`; `webhooks`: `"provider-supported-via-official-sdk"`; \}; `implementation`: \{ `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `sdkPackage`: `"mailgun.js"`; `sdkVersionRange`: `"^13.2.0"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedPackageVersion`: `"13.2.0"`; \}; `rawClientEscapeHatch`: `"mailgun.js IMailgunClient exposed from createMailgunEmailClient().rawClient"`; \} |
| `metadata.channelCoverage` | \{ `eventSearch`: `"provider-supported-via-official-sdk"`; `fullProviderApiClone`: `"not-covered"`; `sendEmail`: `"provider-supported-via-official-sdk"`; `sendReply`: `"provider-supported-via-official-sdk"`; `storedMessageRead`: `"provider-supported-via-official-sdk"`; `webhooks`: `"provider-supported-via-official-sdk"`; \} |
| `metadata.channelCoverage.eventSearch` | `"provider-supported-via-official-sdk"` |
| `metadata.channelCoverage.fullProviderApiClone` | `"not-covered"` |
| `metadata.channelCoverage.sendEmail` | `"provider-supported-via-official-sdk"` |
| `metadata.channelCoverage.sendReply` | `"provider-supported-via-official-sdk"` |
| `metadata.channelCoverage.storedMessageRead` | `"provider-supported-via-official-sdk"` |
| `metadata.channelCoverage.webhooks` | `"provider-supported-via-official-sdk"` |
| `metadata.implementation` | \{ `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `sdkPackage`: `"mailgun.js"`; `sdkVersionRange`: `"^13.2.0"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedPackageVersion`: `"13.2.0"`; \} |
| `metadata.implementation.integrationKitStatus` | `"implemented"` |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.sdkPackage` | `"mailgun.js"` |
| `metadata.implementation.sdkVersionRange` | `"^13.2.0"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.implementation.verifiedPackageVersion` | `"13.2.0"` |
| `metadata.rawClientEscapeHatch` | `"mailgun.js IMailgunClient exposed from createMailgunEmailClient().rawClient"` |
| `name` | `"Mailgun"` |
| `operations` | readonly \[\{ `alias`: `"email.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"email.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"email.reply.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"email.deliveryStatus.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"deliveryStatus"`; \}, \{ `alias`: `"mailgun.storedMessage.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"mailgunStoredMessage"`; \}, \{ `alias`: `"mailgun.domain.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"mailgunDomain"`; \}, \{ `alias`: `"mailgun.webhooks.list"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"mailgunWebhook"`; \}\] |
| `packageName` | `"@cognidesk/integration-email-mailgun"` |
| `privacyNotes` | readonly \[`"Mailgun message bodies, recipients, sender addresses, headers, tags, variables, event payloads, routes, and attachments can contain customer data."`, `"Mailgun API keys and webhook signing keys stay server-side and are represented only as readiness state."`\] |
| `provider` | `"mailgun"` |
| `trustLevel` | `"official"` |
