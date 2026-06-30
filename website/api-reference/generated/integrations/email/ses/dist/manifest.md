# integrations/email/ses/dist/manifest

## Variables

### sesEmailProviderManifest

```ts
const sesEmailProviderManifest: {
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
     description: "Parses SES delivery, bounce, complaint, and receiving notifications from SNS/SQS payloads.";
     exposesSensitiveData: true;
     label: "Parse SES/SNS events";
     providerObjects: readonly [{
        kind: "sesEvent";
        label: "SES Event";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Sends support email through AWS SDK v3 SESv2 and raw MIME through classic SES.";
     exposesSensitiveData: true;
     label: "Send SES email";
     providerObjects: readonly [{
        kind: "sesMessage";
        label: "SES Message";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads SES account readiness, identities, templates, configuration sets, and suppression state.";
     exposesSensitiveData: true;
     label: "Read SES account resources";
     providerObjects: readonly [{
        kind: "sesAccount";
        label: "SES Account";
      }, {
        kind: "sesIdentity";
        label: "SES Identity";
      }, {
        kind: "sesSuppressedDestination";
        label: "SES Suppressed Destination";
      }, {
        kind: "deliveryStatus";
        label: "Delivery Status";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Deletes suppression-list entries when SDK-user policy permits.";
     label: "Manage SES suppressions";
     providerObjects: readonly [{
        kind: "sesSuppressedDestination";
        label: "SES Suppressed Destination";
     }];
     requiresCredential: true;
     sideEffect: true;
  }];
  category: "email";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "AWS SDK for JavaScript v3 SESv2 client";
        url: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sesv2";
      }, {
        label: "AWS SDK for JavaScript v3 SES classic client";
        url: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-ses";
      }, {
        label: "Amazon SES API v2";
        url: "https://docs.aws.amazon.com/ses/latest/APIReference-V2/Welcome.html";
      }, {
        label: "Amazon SES event publishing";
        url: "https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html";
      }, {
        label: "Amazon SNS signature verification";
        url: "https://docs.aws.amazon.com/sns/latest/dg/sns-verify-signature-of-message.html";
     }];
     notes: readonly ["Coverage is the Cognidesk normalized support-email adapter surface backed by AWS SDK v3 SES clients.", "The raw AWS SDK clients are exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full SES API clone."];
     scope: "support-workflow-subset";
  };
  credentialRequirements: readonly [{
     description: "AWS credentials resolved by the AWS SDK default chain or explicitly supplied by the SDK user.";
     id: "aws-credentials";
     label: "AWS credentials";
     metadata: {
        scopeKind: "provider-permission-labels";
     };
     required: true;
     scopes: readonly ["ses:SendEmail", "ses:SendRawEmail", "ses:GetAccount", "ses:ListEmailIdentities", "ses:DeleteSuppressedDestination"];
   }, {
     description: "AWS Region for SES operations.";
     id: "aws-region";
     label: "AWS region";
     required: true;
   }, {
     description: "Verifier used when fail-closed SNS notification verification is required.";
     id: "ses-sns-verification";
     label: "SNS signature verification";
     required: false;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "email.ses";
  limitations: readonly ["SES is not a mailbox product and does not expose mailbox-style message history.", "The SDK user owns regions, IAM policy, sender identities, suppression policy, configuration sets, event routing, SNS verification, retention, and outbound approval."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        accountReadiness: "provider-supported-via-official-sdk";
        fullProviderApiClone: "not-covered";
        identities: "provider-supported-via-official-sdk";
        mailboxStyleRead: "not-covered";
        rawMimeSend: "provider-supported-via-official-sdk";
        sendEmail: "provider-supported-via-official-sdk";
        snsEvents: "typed-parse";
        suppressions: "provider-supported-via-official-sdk";
     };
     implementation: {
        integrationKitStatus: "implemented";
        manifestImport: "no-sdk-client-initialization";
        sdkPackages: readonly ["@aws-sdk/client-sesv2", "@aws-sdk/client-ses"];
        sdkVersionRange: "^3.1073.0";
        strategy: "official-sdk";
        verifiedAt: "2026-06-21";
        verifiedPackageVersion: "3.1073.0";
     };
     rawClientEscapeHatch: "AWS SDK SESv2Client and optional SESClient exposed from createSesEmailClient().rawClients";
  };
  name: "Amazon SES";
  operations: readonly [{
     alias: "email.send";
     capability: "send";
     exposesSensitiveData: true;
     providerObject: "sesMessage";
     sideEffect: true;
   }, {
     alias: "ses.rawEmail.send";
     capability: "send";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "sesMessage";
     sideEffect: true;
   }, {
     alias: "email.deliveryStatus.read";
     capability: "read-provider-object";
     exposesSensitiveData: true;
     providerObject: "deliveryStatus";
   }, {
     alias: "ses.snsNotification.receive";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     providerObject: "sesEvent";
   }, {
     alias: "ses.account.read";
     capability: "read-provider-object";
     extension: true;
     providerObject: "sesAccount";
   }, {
     alias: "ses.identities.list";
     capability: "read-provider-object";
     extension: true;
     providerObject: "sesIdentity";
   }, {
     alias: "ses.suppressedDestination.delete";
     capability: "update-provider-object";
     changesWorkflow: true;
     extension: true;
     providerObject: "sesSuppressedDestination";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-email-ses";
  privacyNotes: readonly ["SES email bodies, recipients, sender identities, headers, tags, templates, configuration sets, delivery events, and raw MIME content can contain customer data.", "AWS credentials, SNS certificates, and SQS credentials stay server-side and are represented only as readiness state."];
  provider: "ses";
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Parses SES delivery, bounce, complaint, and receiving notifications from SNS/SQS payloads."`; `exposesSensitiveData`: `true`; `label`: `"Parse SES/SNS events"`; `providerObjects`: readonly \[\{ `kind`: `"sesEvent"`; `label`: `"SES Event"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Sends support email through AWS SDK v3 SESv2 and raw MIME through classic SES."`; `exposesSensitiveData`: `true`; `label`: `"Send SES email"`; `providerObjects`: readonly \[\{ `kind`: `"sesMessage"`; `label`: `"SES Message"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads SES account readiness, identities, templates, configuration sets, and suppression state."`; `exposesSensitiveData`: `true`; `label`: `"Read SES account resources"`; `providerObjects`: readonly \[\{ `kind`: `"sesAccount"`; `label`: `"SES Account"`; \}, \{ `kind`: `"sesIdentity"`; `label`: `"SES Identity"`; \}, \{ `kind`: `"sesSuppressedDestination"`; `label`: `"SES Suppressed Destination"`; \}, \{ `kind`: `"deliveryStatus"`; `label`: `"Delivery Status"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Deletes suppression-list entries when SDK-user policy permits."`; `label`: `"Manage SES suppressions"`; `providerObjects`: readonly \[\{ `kind`: `"sesSuppressedDestination"`; `label`: `"SES Suppressed Destination"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}\] |
| `category` | `"email"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"AWS SDK for JavaScript v3 SESv2 client"`; `url`: `"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sesv2"`; \}, \{ `label`: `"AWS SDK for JavaScript v3 SES classic client"`; `url`: `"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-ses"`; \}, \{ `label`: `"Amazon SES API v2"`; `url`: `"https://docs.aws.amazon.com/ses/latest/APIReference-V2/Welcome.html"`; \}, \{ `label`: `"Amazon SES event publishing"`; `url`: `"https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html"`; \}, \{ `label`: `"Amazon SNS signature verification"`; `url`: `"https://docs.aws.amazon.com/sns/latest/dg/sns-verify-signature-of-message.html"`; \}\]; `notes`: readonly \[`"Coverage is the Cognidesk normalized support-email adapter surface backed by AWS SDK v3 SES clients."`, `"The raw AWS SDK clients are exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full SES API clone."`\]; `scope`: `"support-workflow-subset"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"AWS SDK for JavaScript v3 SESv2 client"`; `url`: `"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-sesv2"`; \}, \{ `label`: `"AWS SDK for JavaScript v3 SES classic client"`; `url`: `"https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-ses"`; \}, \{ `label`: `"Amazon SES API v2"`; `url`: `"https://docs.aws.amazon.com/ses/latest/APIReference-V2/Welcome.html"`; \}, \{ `label`: `"Amazon SES event publishing"`; `url`: `"https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html"`; \}, \{ `label`: `"Amazon SNS signature verification"`; `url`: `"https://docs.aws.amazon.com/sns/latest/dg/sns-verify-signature-of-message.html"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is the Cognidesk normalized support-email adapter surface backed by AWS SDK v3 SES clients."`, `"The raw AWS SDK clients are exposed for SDK-user controlled advanced provider operations; Cognidesk does not re-export a generated full SES API clone."`\] |
| `coverage.scope` | `"support-workflow-subset"` |
| `credentialRequirements` | readonly \[\{ `description`: `"AWS credentials resolved by the AWS SDK default chain or explicitly supplied by the SDK user."`; `id`: `"aws-credentials"`; `label`: `"AWS credentials"`; `metadata`: \{ `scopeKind`: `"provider-permission-labels"`; \}; `required`: `true`; `scopes`: readonly \[`"ses:SendEmail"`, `"ses:SendRawEmail"`, `"ses:GetAccount"`, `"ses:ListEmailIdentities"`, `"ses:DeleteSuppressedDestination"`\]; \}, \{ `description`: `"AWS Region for SES operations."`; `id`: `"aws-region"`; `label`: `"AWS region"`; `required`: `true`; \}, \{ `description`: `"Verifier used when fail-closed SNS notification verification is required."`; `id`: `"ses-sns-verification"`; `label`: `"SNS signature verification"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"email.ses"` |
| `limitations` | readonly \[`"SES is not a mailbox product and does not expose mailbox-style message history."`, `"The SDK user owns regions, IAM policy, sender identities, suppression policy, configuration sets, event routing, SNS verification, retention, and outbound approval."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `accountReadiness`: `"provider-supported-via-official-sdk"`; `fullProviderApiClone`: `"not-covered"`; `identities`: `"provider-supported-via-official-sdk"`; `mailboxStyleRead`: `"not-covered"`; `rawMimeSend`: `"provider-supported-via-official-sdk"`; `sendEmail`: `"provider-supported-via-official-sdk"`; `snsEvents`: `"typed-parse"`; `suppressions`: `"provider-supported-via-official-sdk"`; \}; `implementation`: \{ `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `sdkPackages`: readonly \[`"@aws-sdk/client-sesv2"`, `"@aws-sdk/client-ses"`\]; `sdkVersionRange`: `"^3.1073.0"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedPackageVersion`: `"3.1073.0"`; \}; `rawClientEscapeHatch`: `"AWS SDK SESv2Client and optional SESClient exposed from createSesEmailClient().rawClients"`; \} |
| `metadata.channelCoverage` | \{ `accountReadiness`: `"provider-supported-via-official-sdk"`; `fullProviderApiClone`: `"not-covered"`; `identities`: `"provider-supported-via-official-sdk"`; `mailboxStyleRead`: `"not-covered"`; `rawMimeSend`: `"provider-supported-via-official-sdk"`; `sendEmail`: `"provider-supported-via-official-sdk"`; `snsEvents`: `"typed-parse"`; `suppressions`: `"provider-supported-via-official-sdk"`; \} |
| `metadata.channelCoverage.accountReadiness` | `"provider-supported-via-official-sdk"` |
| `metadata.channelCoverage.fullProviderApiClone` | `"not-covered"` |
| `metadata.channelCoverage.identities` | `"provider-supported-via-official-sdk"` |
| `metadata.channelCoverage.mailboxStyleRead` | `"not-covered"` |
| `metadata.channelCoverage.rawMimeSend` | `"provider-supported-via-official-sdk"` |
| `metadata.channelCoverage.sendEmail` | `"provider-supported-via-official-sdk"` |
| `metadata.channelCoverage.snsEvents` | `"typed-parse"` |
| `metadata.channelCoverage.suppressions` | `"provider-supported-via-official-sdk"` |
| `metadata.implementation` | \{ `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `sdkPackages`: readonly \[`"@aws-sdk/client-sesv2"`, `"@aws-sdk/client-ses"`\]; `sdkVersionRange`: `"^3.1073.0"`; `strategy`: `"official-sdk"`; `verifiedAt`: `"2026-06-21"`; `verifiedPackageVersion`: `"3.1073.0"`; \} |
| `metadata.implementation.integrationKitStatus` | `"implemented"` |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.sdkPackages` | readonly \[`"@aws-sdk/client-sesv2"`, `"@aws-sdk/client-ses"`\] |
| `metadata.implementation.sdkVersionRange` | `"^3.1073.0"` |
| `metadata.implementation.strategy` | `"official-sdk"` |
| `metadata.implementation.verifiedAt` | `"2026-06-21"` |
| `metadata.implementation.verifiedPackageVersion` | `"3.1073.0"` |
| `metadata.rawClientEscapeHatch` | `"AWS SDK SESv2Client and optional SESClient exposed from createSesEmailClient().rawClients"` |
| `name` | `"Amazon SES"` |
| `operations` | readonly \[\{ `alias`: `"email.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `providerObject`: `"sesMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"ses.rawEmail.send"`; `capability`: `"send"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"sesMessage"`; `sideEffect`: `true`; \}, \{ `alias`: `"email.deliveryStatus.read"`; `capability`: `"read-provider-object"`; `exposesSensitiveData`: `true`; `providerObject`: `"deliveryStatus"`; \}, \{ `alias`: `"ses.snsNotification.receive"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `providerObject`: `"sesEvent"`; \}, \{ `alias`: `"ses.account.read"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"sesAccount"`; \}, \{ `alias`: `"ses.identities.list"`; `capability`: `"read-provider-object"`; `extension`: `true`; `providerObject`: `"sesIdentity"`; \}, \{ `alias`: `"ses.suppressedDestination.delete"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `extension`: `true`; `providerObject`: `"sesSuppressedDestination"`; `sideEffect`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-email-ses"` |
| `privacyNotes` | readonly \[`"SES email bodies, recipients, sender identities, headers, tags, templates, configuration sets, delivery events, and raw MIME content can contain customer data."`, `"AWS credentials, SNS certificates, and SQS credentials stay server-side and are represented only as readiness state."`\] |
| `provider` | `"ses"` |
| `trustLevel` | `"official"` |
