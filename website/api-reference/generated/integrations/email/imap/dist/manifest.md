# integrations/email/imap/dist/manifest

## Variables

### imapEmailProviderManifest

```ts
const imapEmailProviderManifest: {
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
     | "inbound-only"
     | "receive-only"
     | "send-only"
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
     capability: "read-provider-object";
     description: "Checks mailbox readiness and fetches explicitly requested message data through ImapFlow.";
     exposesSensitiveData: true;
     label: "Read IMAP mailbox data";
     providerObjects: readonly [{
        kind: "imapMailbox";
        label: "IMAP Mailbox";
      }, {
        kind: "emailMessage";
        label: "Email Message";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "search-provider-object";
     description: "Runs SDK-user supplied IMAP searches through ImapFlow.";
     exposesSensitiveData: true;
     label: "Search IMAP mailbox";
     providerObjects: readonly [{
        kind: "emailMessage";
        label: "Email Message";
     }];
     requiresCredential: true;
  }];
  category: "email";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "RFC 9051 IMAP4rev2";
        url: "https://datatracker.ietf.org/doc/html/rfc9051";
      }, {
        label: "ImapFlow";
        url: "https://imapflow.com/";
     }];
     notes: readonly ["Coverage is a focused Cognidesk IMAP protocol adapter backed by ImapFlow.", "This package does not claim full mailbox synchronization, MIME parsing, retention policy, attachment policy, or outbound SMTP support."];
     scope: "local-protocol";
  };
  credentialRequirements: readonly [{
     description: "Mailbox host, port, TLS mode, and mailbox folder configuration.";
     id: "imap-server";
     label: "IMAP server settings";
     required: true;
   }, {
     description: "Mailbox username with password, OAuth2 access token, or externally supplied auth.";
     id: "imap-mailbox-credentials";
     label: "IMAP mailbox credentials";
     required: true;
  }];
  directions: readonly ["inbound-only"];
  id: "email.imap";
  limitations: readonly ["This package does not implement full mailbox synchronization, storage, retention, MIME parsing policy, attachment handling policy, deletion policy, or outbound SMTP.", "SDK users own mailbox selection, search scope, flag mutation policy, retention, redaction, and concurrency limits."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        fullMailboxSync: "not-covered";
        mailboxReadiness: "provider-supported-via-protocol-library";
        messageFetch: "provider-supported-via-protocol-library";
        messageSearch: "provider-supported-via-protocol-library";
        mimeParsingAttachments: "not-covered";
        outboundSmtp: "not-covered";
     };
     directSliceMetadata: {
        allowlist: readonly ["connect", "logout", "mailboxOpen", "status", "search", "fetch"];
        checksum: "npm:imapflow@1.4.2";
        source: "RFC 9051 plus ImapFlow 1.4.2 declarations";
     };
     implementation: {
        integrationKitStatus: "implemented";
        libraryPackage: "imapflow";
        libraryVersionRange: "^1.4.2";
        manifestImport: "no-sdk-client-initialization";
        protocolSource: "RFC 9051";
        strategy: "protocol-library";
        verifiedAt: "2026-06-21";
        verifiedPackageVersion: "1.4.2";
     };
     rawClientEscapeHatch: "ImapFlow client exposed from createImapEmailClient().rawClient";
  };
  name: "IMAP Mailbox";
  operations: readonly [{
     alias: "imap.mailbox.check";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "imapMailbox";
   }, {
     alias: "email.thread.search";
     capability: "search-provider-object";
     exposesSensitiveData: true;
     providerObject: "emailMessage";
   }, {
     alias: "email.thread.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "emailMessage";
  }];
  packageName: "@cognidesk/integration-email-imap";
  privacyNotes: readonly ["IMAP messages can contain customer content, addresses, headers, attachments, and mailbox folder metadata.", "Mailbox credentials stay server-side and are represented only as readiness state."];
  provider: "imap";
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
| `directions` | ( \| `"inbound-only"` \| `"receive-only"` \| `"send-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Checks mailbox readiness and fetches explicitly requested message data through ImapFlow."`; `exposesSensitiveData`: `true`; `label`: `"Read IMAP mailbox data"`; `providerObjects`: readonly \[\{ `kind`: `"imapMailbox"`; `label`: `"IMAP Mailbox"`; \}, \{ `kind`: `"emailMessage"`; `label`: `"Email Message"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"search-provider-object"`; `description`: `"Runs SDK-user supplied IMAP searches through ImapFlow."`; `exposesSensitiveData`: `true`; `label`: `"Search IMAP mailbox"`; `providerObjects`: readonly \[\{ `kind`: `"emailMessage"`; `label`: `"Email Message"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"email"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"RFC 9051 IMAP4rev2"`; `url`: `"https://datatracker.ietf.org/doc/html/rfc9051"`; \}, \{ `label`: `"ImapFlow"`; `url`: `"https://imapflow.com/"`; \}\]; `notes`: readonly \[`"Coverage is a focused Cognidesk IMAP protocol adapter backed by ImapFlow."`, `"This package does not claim full mailbox synchronization, MIME parsing, retention policy, attachment policy, or outbound SMTP support."`\]; `scope`: `"local-protocol"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"RFC 9051 IMAP4rev2"`; `url`: `"https://datatracker.ietf.org/doc/html/rfc9051"`; \}, \{ `label`: `"ImapFlow"`; `url`: `"https://imapflow.com/"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is a focused Cognidesk IMAP protocol adapter backed by ImapFlow."`, `"This package does not claim full mailbox synchronization, MIME parsing, retention policy, attachment policy, or outbound SMTP support."`\] |
| `coverage.scope` | `"local-protocol"` |
| `credentialRequirements` | readonly \[\{ `description`: `"Mailbox host, port, TLS mode, and mailbox folder configuration."`; `id`: `"imap-server"`; `label`: `"IMAP server settings"`; `required`: `true`; \}, \{ `description`: `"Mailbox username with password, OAuth2 access token, or externally supplied auth."`; `id`: `"imap-mailbox-credentials"`; `label`: `"IMAP mailbox credentials"`; `required`: `true`; \}\] |
| `directions` | readonly \[`"inbound-only"`\] |
| `id` | `"email.imap"` |
| `limitations` | readonly \[`"This package does not implement full mailbox synchronization, storage, retention, MIME parsing policy, attachment handling policy, deletion policy, or outbound SMTP."`, `"SDK users own mailbox selection, search scope, flag mutation policy, retention, redaction, and concurrency limits."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `fullMailboxSync`: `"not-covered"`; `mailboxReadiness`: `"provider-supported-via-protocol-library"`; `messageFetch`: `"provider-supported-via-protocol-library"`; `messageSearch`: `"provider-supported-via-protocol-library"`; `mimeParsingAttachments`: `"not-covered"`; `outboundSmtp`: `"not-covered"`; \}; `directSliceMetadata`: \{ `allowlist`: readonly \[`"connect"`, `"logout"`, `"mailboxOpen"`, `"status"`, `"search"`, `"fetch"`\]; `checksum`: `"npm:imapflow@1.4.2"`; `source`: `"RFC 9051 plus ImapFlow 1.4.2 declarations"`; \}; `implementation`: \{ `integrationKitStatus`: `"implemented"`; `libraryPackage`: `"imapflow"`; `libraryVersionRange`: `"^1.4.2"`; `manifestImport`: `"no-sdk-client-initialization"`; `protocolSource`: `"RFC 9051"`; `strategy`: `"protocol-library"`; `verifiedAt`: `"2026-06-21"`; `verifiedPackageVersion`: `"1.4.2"`; \}; `rawClientEscapeHatch`: `"ImapFlow client exposed from createImapEmailClient().rawClient"`; \} |
| `metadata.channelCoverage` | \{ `fullMailboxSync`: `"not-covered"`; `mailboxReadiness`: `"provider-supported-via-protocol-library"`; `messageFetch`: `"provider-supported-via-protocol-library"`; `messageSearch`: `"provider-supported-via-protocol-library"`; `mimeParsingAttachments`: `"not-covered"`; `outboundSmtp`: `"not-covered"`; \} |
| `metadata.channelCoverage.fullMailboxSync` | `"not-covered"` |
| `metadata.channelCoverage.mailboxReadiness` | `"provider-supported-via-protocol-library"` |
| `metadata.channelCoverage.messageFetch` | `"provider-supported-via-protocol-library"` |
| `metadata.channelCoverage.messageSearch` | `"provider-supported-via-protocol-library"` |
| `metadata.channelCoverage.mimeParsingAttachments` | `"not-covered"` |
| `metadata.channelCoverage.outboundSmtp` | `"not-covered"` |
| `metadata.directSliceMetadata` | \{ `allowlist`: readonly \[`"connect"`, `"logout"`, `"mailboxOpen"`, `"status"`, `"search"`, `"fetch"`\]; `checksum`: `"npm:imapflow@1.4.2"`; `source`: `"RFC 9051 plus ImapFlow 1.4.2 declarations"`; \} |
| `metadata.directSliceMetadata.allowlist` | readonly \[`"connect"`, `"logout"`, `"mailboxOpen"`, `"status"`, `"search"`, `"fetch"`\] |
| `metadata.directSliceMetadata.checksum` | `"npm:imapflow@1.4.2"` |
| `metadata.directSliceMetadata.source` | `"RFC 9051 plus ImapFlow 1.4.2 declarations"` |
| `metadata.implementation` | \{ `integrationKitStatus`: `"implemented"`; `libraryPackage`: `"imapflow"`; `libraryVersionRange`: `"^1.4.2"`; `manifestImport`: `"no-sdk-client-initialization"`; `protocolSource`: `"RFC 9051"`; `strategy`: `"protocol-library"`; `verifiedAt`: `"2026-06-21"`; `verifiedPackageVersion`: `"1.4.2"`; \} |
| `metadata.implementation.integrationKitStatus` | `"implemented"` |
| `metadata.implementation.libraryPackage` | `"imapflow"` |
| `metadata.implementation.libraryVersionRange` | `"^1.4.2"` |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.protocolSource` | `"RFC 9051"` |
| `metadata.implementation.strategy` | `"protocol-library"` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.implementation.verifiedPackageVersion` | `"1.4.2"` |
| `metadata.rawClientEscapeHatch` | `"ImapFlow client exposed from createImapEmailClient().rawClient"` |
| `name` | `"IMAP Mailbox"` |
| `operations` | readonly \[\{ `alias`: `"imap.mailbox.check"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"imapMailbox"`; \}, \{ `alias`: `"email.thread.search"`; `capability`: `"search-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; \}, \{ `alias`: `"email.thread.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"emailMessage"`; \}\] |
| `packageName` | `"@cognidesk/integration-email-imap"` |
| `privacyNotes` | readonly \[`"IMAP messages can contain customer content, addresses, headers, attachments, and mailbox folder metadata."`, `"Mailbox credentials stay server-side and are represented only as readiness state."`\] |
| `provider` | `"imap"` |
| `trustLevel` | `"official"` |
