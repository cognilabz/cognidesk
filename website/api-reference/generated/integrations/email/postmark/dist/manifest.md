# integrations/email/postmark/dist/manifest

## Variables

### postmarkEmailProviderManifest

```ts
const postmarkEmailProviderManifest: {
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
     description: "Parses inbound email webhooks into support email events.";
     exposesSensitiveData: true;
     label: "Receive Postmark inbound webhooks";
     providerObjects: readonly [{
        kind: "emailMessage";
        label: "Email Message";
      }, {
        kind: "postmarkInboundMessage";
        label: "Postmark Inbound Message";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Sends support email through the official Postmark ServerClient.";
     exposesSensitiveData: true;
     label: "Send Postmark email";
     providerObjects: readonly [{
        kind: "emailMessage";
        label: "Email Message";
      }, {
        kind: "postmarkMessage";
        label: "Postmark Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads message details, delivery status, message streams, webhooks, and suppression state.";
     exposesSensitiveData: true;
     label: "Read Postmark messages and streams";
     providerObjects: readonly [{
        kind: "postmarkMessage";
        label: "Postmark Message";
      }, {
        kind: "postmarkMessageStream";
        label: "Postmark Message Stream";
      }, {
        kind: "postmarkSuppression";
        label: "Postmark Suppression";
      }, {
        kind: "deliveryStatus";
        label: "Delivery Status";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Adds or deletes suppressions when SDK-user policy permits.";
     label: "Manage Postmark suppressions";
     providerObjects: readonly [{
        kind: "postmarkSuppression";
        label: "Postmark Suppression";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "email";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Postmark Node.js library";
        url: "https://github.com/ActiveCampaign/postmark.js";
      }, {
        label: "Postmark Email API";
        url: "https://postmarkapp.com/developer/api/email-api";
      }, {
        label: "Postmark Messages API";
        url: "https://postmarkapp.com/developer/api/messages-api";
      }, {
        label: "Postmark inbound webhooks";
        url: "https://postmarkapp.com/developer/webhooks/inbound-webhook";
     }];
     notes: readonly ["Coverage is the Cognidesk normalized support-email adapter surface backed by the official Postmark Node client.", "The raw Postmark clients are exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full Postmark API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "Server token used by the official Postmark ServerClient.";
     id: "postmark-server-token";
     label: "Postmark server token";
     required: true;
   }, {
     description: "Optional account token for explicitly retained account-scoped support operations.";
     id: "postmark-account-token";
     label: "Postmark account token";
     required: false;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "email.postmark";
  limitations: readonly ["The SDK user owns message stream selection, webhook auth policy, retention, redaction, outbound approval, and rate limiting.", "Advanced provider operations remain available through raw Postmark clients, not as Cognidesk-owned generated operations."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        fullProviderApiClone: "not-covered";
        inboundWebhook: "typed-parse";
        messageDetails: "provider-supported-via-official-sdk";
        messageStreams: "provider-supported-via-official-sdk";
        sendEmail: "provider-supported-via-official-sdk";
        suppressions: "provider-supported-via-official-sdk";
        templateSend: "provider-supported-via-official-sdk";
     };
     implementation: {
        integrationKitStatus: "implemented";
        manifestImport: "no-sdk-client-initialization";
        sdkPackage: "postmark";
        sdkVersionRange: "^4.0.7";
        strategy: "official-sdk";
        verifiedAt: "2026-06-21";
        verifiedPackageVersion: "4.0.7";
     };
     rawClientEscapeHatch: "Postmark ServerClient and optional AccountClient exposed from createPostmarkEmailClient().rawClients";
  };
  name: "Postmark";
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
     alias: "postmark.messageStreams.list";
     capability: "read-provider-object";
     extension: true;
     providerObject: "postmarkMessageStream";
   }, {
     alias: "postmark.suppressions.create";
     capability: "update-provider-object";
     changesWorkflow: true;
     extension: true;
     providerObject: "postmarkSuppression";
     sideEffect: true;
   }, {
     alias: "postmark.suppressions.delete";
     capability: "update-provider-object";
     changesWorkflow: true;
     extension: true;
     providerObject: "postmarkSuppression";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-email-postmark";
  privacyNotes: readonly ["Postmark email bodies, recipients, sender addresses, headers, attachments, metadata, and webhook payloads can contain customer data.", "Postmark tokens stay server-side and are represented only as readiness state."];
  provider: "postmark";
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Parses inbound email webhooks into support email events."`; `exposesSensitiveData`: `true`; `label`: `"Receive Postmark inbound webhooks"`; `providerObjects`: readonly \[\{ `kind`: `"emailMessage"`; `label`: `"Email Message"`; \}, \{ `kind`: `"postmarkInboundMessage"`; `label`: `"Postmark Inbound Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Sends support email through the official Postmark ServerClient."`; `exposesSensitiveData`: `true`; `label`: `"Send Postmark email"`; `providerObjects`: readonly \[\{ `kind`: `"emailMessage"`; `label`: `"Email Message"`; \}, \{ `kind`: `"postmarkMessage"`; `label`: `"Postmark Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads message details, delivery status, message streams, webhooks, and suppression state."`; `exposesSensitiveData`: `true`; `label`: `"Read Postmark messages and streams"`; `providerObjects`: readonly \[\{ `kind`: `"postmarkMessage"`; `label`: `"Postmark Message"`; \}, \{ `kind`: `"postmarkMessageStream"`; `label`: `"Postmark Message Stream"`; \}, \{ `kind`: `"postmarkSuppression"`; `label`: `"Postmark Suppression"`; \}, \{ `kind`: `"deliveryStatus"`; `label`: `"Delivery Status"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Adds or deletes suppressions when SDK-user policy permits."`; `label`: `"Manage Postmark suppressions"`; `providerObjects`: readonly \[\{ `kind`: `"postmarkSuppression"`; `label`: `"Postmark Suppression"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"email"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Postmark Node.js library"`; `url`: `"https://github.com/ActiveCampaign/postmark.js"`; \}, \{ `label`: `"Postmark Email API"`; `url`: `"https://postmarkapp.com/developer/api/email-api"`; \}, \{ `label`: `"Postmark Messages API"`; `url`: `"https://postmarkapp.com/developer/api/messages-api"`; \}, \{ `label`: `"Postmark inbound webhooks"`; `url`: `"https://postmarkapp.com/developer/webhooks/inbound-webhook"`; \}\]; `notes`: readonly \[`"Coverage is the Cognidesk normalized support-email adapter surface backed by the official Postmark Node client."`, `"The raw Postmark clients are exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full Postmark API clone."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Postmark Node.js library"`; `url`: `"https://github.com/ActiveCampaign/postmark.js"`; \}, \{ `label`: `"Postmark Email API"`; `url`: `"https://postmarkapp.com/developer/api/email-api"`; \}, \{ `label`: `"Postmark Messages API"`; `url`: `"https://postmarkapp.com/developer/api/messages-api"`; \}, \{ `label`: `"Postmark inbound webhooks"`; `url`: `"https://postmarkapp.com/developer/webhooks/inbound-webhook"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is the Cognidesk normalized support-email adapter surface backed by the official Postmark Node client."`, `"The raw Postmark clients are exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full Postmark API clone."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Server token used by the official Postmark ServerClient."`; `id`: `"postmark-server-token"`; `label`: `"Postmark server token"`; `required`: `true`; \}, \{ `description`: `"Optional account token for explicitly retained account-scoped support operations."`; `id`: `"postmark-account-token"`; `label`: `"Postmark account token"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"email.postmark"` |
| `limitations` | readonly \[`"The SDK user owns message stream selection, webhook auth policy, retention, redaction, outbound approval, and rate limiting."`, `"Advanced provider operations remain available through raw Postmark clients, not as Cognidesk-owned generated operations."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `fullProviderApiClone`: `"not-covered"`; `inboundWebhook`: `"typed-parse"`; `messageDetails`: `"provider-supported-via-official-sdk"`; `messageStreams`: `"provider-supported-via-official-sdk"`; `sendEmail`: `"provider-supported-via-official-sdk"`; `suppressions`: `"provider-supported-via-official-sdk"`; `templateSend`: `"provider-supported-via-official-sdk"`; \}; `implementation`: \{ `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `sdkPackage`: `"postmark"`; `sdkVersionRange`: `"^4.0.7"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedPackageVersion`: `"4.0.7"`; \}; `rawClientEscapeHatch`: `"Postmark ServerClient and optional AccountClient exposed from createPostmarkEmailClient().rawClients"`; \} |
| `metadata.channelCoverage` | \{ `fullProviderApiClone`: `"not-covered"`; `inboundWebhook`: `"typed-parse"`; `messageDetails`: `"provider-supported-via-official-sdk"`; `messageStreams`: `"provider-supported-via-official-sdk"`; `sendEmail`: `"provider-supported-via-official-sdk"`; `suppressions`: `"provider-supported-via-official-sdk"`; `templateSend`: `"provider-supported-via-official-sdk"`; \} |
| `metadata.channelCoverage.fullProviderApiClone` | `"not-covered"` |
| `metadata.channelCoverage.inboundWebhook` | `"typed-parse"` |
| `metadata.channelCoverage.messageDetails` | `"provider-supported-via-official-sdk"` |
| `metadata.channelCoverage.messageStreams` | `"provider-supported-via-official-sdk"` |
| `metadata.channelCoverage.sendEmail` | `"provider-supported-via-official-sdk"` |
| `metadata.channelCoverage.suppressions` | `"provider-supported-via-official-sdk"` |
| `metadata.channelCoverage.templateSend` | `"provider-supported-via-official-sdk"` |
| `metadata.implementation` | \{ `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `sdkPackage`: `"postmark"`; `sdkVersionRange`: `"^4.0.7"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedPackageVersion`: `"4.0.7"`; \} |
| `metadata.implementation.integrationKitStatus` | `"implemented"` |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.sdkPackage` | `"postmark"` |
| `metadata.implementation.sdkVersionRange` | `"^4.0.7"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.implementation.verifiedPackageVersion` | `"4.0.7"` |
| `metadata.rawClientEscapeHatch` | `"Postmark ServerClient and optional AccountClient exposed from createPostmarkEmailClient().rawClients"` |
| `name` | `"Postmark"` |
| `operations` | readonly \[\{ `alias`: `"email.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"email.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"email.reply.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"email.deliveryStatus.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"deliveryStatus"`; \}, \{ `alias`: `"postmark.messageStreams.list"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"postmarkMessageStream"`; \}, \{ `alias`: `"postmark.suppressions.create"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `extension`: `true`; `providerObject`: `"postmarkSuppression"`; `sideEffect`: `true`; \}, \{ `alias`: `"postmark.suppressions.delete"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `extension`: `true`; `providerObject`: `"postmarkSuppression"`; `sideEffect`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-email-postmark"` |
| `privacyNotes` | readonly \[`"Postmark email bodies, recipients, sender addresses, headers, attachments, metadata, and webhook payloads can contain customer data."`, `"Postmark tokens stay server-side and are represented only as readiness state."`\] |
| `provider` | `"postmark"` |
| `trustLevel` | `"official"` |
