# integrations/email/smtp/dist/manifest

## Variables

### smtpEmailProviderManifest

```ts
const smtpEmailProviderManifest: {
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
     scope:   | "local-protocol"
        | "support-workflow-subset"
        | "provider-api-subset"
        | "connector-required"
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
     | "send-only"
     | "receive-only"
     | "inbound-only"
     | "outbound-only"
    | "bidirectional")[];
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
     capability: "send";
     description: "Sends outbound support email through a configured SMTP transport.";
     exposesSensitiveData: true;
     label: "Send SMTP email";
     providerObjects: readonly [{
        kind: "emailMessage";
        label: "Email Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Checks whether the configured SMTP transport can authenticate and accept mail.";
     label: "Check SMTP transport";
     providerObjects: readonly [{
        kind: "smtpTransport";
        label: "SMTP Transport";
     }];
     requiresCredential: true;
  }];
  category: "email";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "RFC 5321 SMTP";
        url: "https://datatracker.ietf.org/doc/html/rfc5321";
      }, {
        label: "Nodemailer";
        url: "https://nodemailer.com/";
     }];
     notes: readonly ["Coverage is a focused Cognidesk SMTP outbound adapter backed by Nodemailer.", "This package sends SDK-user supplied message payloads and can verify the configured SMTP transport when the server supports it."];
     scope: "local-protocol";
  };
  credentialRequirements: readonly [{
     description: "SMTP host, port, TLS mode, and optional transport security settings.";
     id: "smtp-server";
     label: "SMTP server settings";
     required: true;
   }, {
     description: "Server-side SMTP username and password or externally supplied authenticated transport.";
     id: "smtp-account-credentials";
     label: "SMTP account credentials";
     required: true;
   }, {
     description: "Default from address used when a send call does not provide one.";
     id: "smtp-sender-address";
     label: "Sender address";
     required: false;
  }];
  directions: readonly ["send-only"];
  id: "email.smtp";
  limitations: readonly ["SMTP is outbound-only; mailbox synchronization, inbound parsing, reply polling, retention, and deletion are intentionally outside this package.", "SDK users own outbound approval, consent, sender identity policy, retry policy, rate limits, attachment policy, bounce handling, and retention."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        deliveryWebhooks: "not-covered";
        fullMailboxSync: "not-covered";
        inboundMailbox: "not-covered";
        sendEmail: "provider-supported-via-protocol-library";
        sendReply: "provider-supported-via-protocol-library";
        transportReadiness: "provider-supported-via-protocol-library";
     };
     implementation: {
        integrationKitStatus: "implemented";
        libraryPackage: "nodemailer";
        libraryVersionRange: "^9.0.1";
        manifestImport: "no-sdk-client-initialization";
        protocolSource: "RFC 5321";
        strategy: "local-protocol";
        verifiedAt: "2026-06-24";
        verifiedPackageVersion: "9.0.1";
     };
     rawClientEscapeHatch: "Nodemailer transport exposed from createSmtpEmailClient().rawTransport";
  };
  name: "SMTP Email";
  operations: readonly [{
     alias: "email.send";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "emailMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "email.reply.send";
     capability: "send";
     exposesSensitiveData: true;
     externallyVisible: true;
     providerObject: "emailMessage";
     requiresApproval: true;
     sideEffect: true;
   }, {
     alias: "smtp.transport.check";
     capability: "read-provider-object";
     extension: true;
     providerObject: "smtpTransport";
  }];
  packageName: "@cognidesk/integration-email-smtp";
  privacyNotes: readonly ["SMTP message bodies, recipients, sender addresses, reply-to addresses, headers, attachments, and delivery responses can contain customer data.", "SMTP credentials stay server-side and are represented in Studio only as credential/readiness state."];
  provider: "smtp";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"mixed"` \| `"internal-support"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"local-protocol"` \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"local-protocol"` \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"send-only"` \| `"receive-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"send"`; `description`: `"Sends outbound support email through a configured SMTP transport."`; `exposesSensitiveData`: `true`; `label`: `"Send SMTP email"`; `providerObjects`: readonly \[\{ `kind`: `"emailMessage"`; `label`: `"Email Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Checks whether the configured SMTP transport can authenticate and accept mail."`; `label`: `"Check SMTP transport"`; `providerObjects`: readonly \[\{ `kind`: `"smtpTransport"`; `label`: `"SMTP Transport"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"email"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"RFC 5321 SMTP"`; `url`: `"https://datatracker.ietf.org/doc/html/rfc5321"`; \}, \{ `label`: `"Nodemailer"`; `url`: `"https://nodemailer.com/"`; \}\]; `notes`: readonly \[`"Coverage is a focused Cognidesk SMTP outbound adapter backed by Nodemailer."`, `"This package sends SDK-user supplied message payloads and can verify the configured SMTP transport when the server supports it."`\]; `scope`: `"local-protocol"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"RFC 5321 SMTP"`; `url`: `"https://datatracker.ietf.org/doc/html/rfc5321"`; \}, \{ `label`: `"Nodemailer"`; `url`: `"https://nodemailer.com/"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is a focused Cognidesk SMTP outbound adapter backed by Nodemailer."`, `"This package sends SDK-user supplied message payloads and can verify the configured SMTP transport when the server supports it."`\] |
| `coverage.scope` | `"local-protocol"` |
| `credentialRequirements` | readonly \[\{ `description`: `"SMTP host, port, TLS mode, and optional transport security settings."`; `id`: `"smtp-server"`; `label`: `"SMTP server settings"`; `required`: `true`; \}, \{ `description`: `"Server-side SMTP username and password or externally supplied authenticated transport."`; `id`: `"smtp-account-credentials"`; `label`: `"SMTP account credentials"`; `required`: `true`; \}, \{ `description`: `"Default from address used when a send call does not provide one."`; `id`: `"smtp-sender-address"`; `label`: `"Sender address"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"send-only"`\] |
| `id` | `"email.smtp"` |
| `limitations` | readonly \[`"SMTP is outbound-only; mailbox synchronization, inbound parsing, reply polling, retention, and deletion are intentionally outside this package."`, `"SDK users own outbound approval, consent, sender identity policy, retry policy, rate limits, attachment policy, bounce handling, and retention."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `deliveryWebhooks`: `"not-covered"`; `fullMailboxSync`: `"not-covered"`; `inboundMailbox`: `"not-covered"`; `sendEmail`: `"provider-supported-via-protocol-library"`; `sendReply`: `"provider-supported-via-protocol-library"`; `transportReadiness`: `"provider-supported-via-protocol-library"`; \}; `implementation`: \{ `integrationKitStatus`: `"implemented"`; `libraryPackage`: `"nodemailer"`; `libraryVersionRange`: `"^9.0.1"`; `manifestImport`: `"no-sdk-client-initialization"`; `protocolSource`: `"RFC 5321"`; `strategy`: `"local-protocol"`; `verifiedAt`: `"2026-06-24"`; `verifiedPackageVersion`: `"9.0.1"`; \}; `rawClientEscapeHatch`: `"Nodemailer transport exposed from createSmtpEmailClient().rawTransport"`; \} |
| `metadata.channelCoverage` | \{ `deliveryWebhooks`: `"not-covered"`; `fullMailboxSync`: `"not-covered"`; `inboundMailbox`: `"not-covered"`; `sendEmail`: `"provider-supported-via-protocol-library"`; `sendReply`: `"provider-supported-via-protocol-library"`; `transportReadiness`: `"provider-supported-via-protocol-library"`; \} |
| `metadata.channelCoverage.deliveryWebhooks` | `"not-covered"` |
| `metadata.channelCoverage.fullMailboxSync` | `"not-covered"` |
| `metadata.channelCoverage.inboundMailbox` | `"not-covered"` |
| `metadata.channelCoverage.sendEmail` | `"provider-supported-via-protocol-library"` |
| `metadata.channelCoverage.sendReply` | `"provider-supported-via-protocol-library"` |
| `metadata.channelCoverage.transportReadiness` | `"provider-supported-via-protocol-library"` |
| `metadata.implementation` | \{ `integrationKitStatus`: `"implemented"`; `libraryPackage`: `"nodemailer"`; `libraryVersionRange`: `"^9.0.1"`; `manifestImport`: `"no-sdk-client-initialization"`; `protocolSource`: `"RFC 5321"`; `strategy`: `"local-protocol"`; `verifiedAt`: `"2026-06-24"`; `verifiedPackageVersion`: `"9.0.1"`; \} |
| `metadata.implementation.integrationKitStatus` | `"implemented"` |
| `metadata.implementation.libraryPackage` | `"nodemailer"` |
| `metadata.implementation.libraryVersionRange` | `"^9.0.1"` |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.protocolSource` | `"RFC 5321"` |
| `metadata.implementation.strategy` | `"local-protocol"` |
| `metadata.implementation.verifiedAt` | `"2026-06-24"` |
| `metadata.implementation.verifiedPackageVersion` | `"9.0.1"` |
| `metadata.rawClientEscapeHatch` | `"Nodemailer transport exposed from createSmtpEmailClient().rawTransport"` |
| `name` | `"SMTP Email"` |
| `operations` | readonly \[\{ `alias`: `"email.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"emailMessage"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"email.reply.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `externallyVisible`: `true`; `providerObject`: `"emailMessage"`; `requiresApproval`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"smtp.transport.check"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"smtpTransport"`; \}\] |
| `packageName` | `"@cognidesk/integration-email-smtp"` |
| `privacyNotes` | readonly \[`"SMTP message bodies, recipients, sender addresses, reply-to addresses, headers, attachments, and delivery responses can contain customer data."`, `"SMTP credentials stay server-side and are represented in Studio only as credential/readiness state."`\] |
| `provider` | `"smtp"` |
| `trustLevel` | `"official"` |
