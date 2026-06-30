# integrations/form/cognidesk/dist/manifest

## Variables

### cognideskFormsProviderManifest

```ts
const cognideskFormsProviderManifest: {
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
     | "receive-only"
     | "inbound-only"
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
     capability: "receive";
     description: "Validates signed form submission webhooks and normalizes accepted submissions into intake records.";
     exposesSensitiveData: true;
     label: "Receive form submissions";
     providerObjects: readonly [{
        kind: "formSubmission";
        label: "Form Submission";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads SDK-user-defined form schemas from the configured form registry.";
     label: "Read configured forms";
     providerObjects: readonly [{
        kind: "formDefinition";
        label: "Form Definition";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "form.webhook-signature";
     description: "Validates HMAC-SHA256 signatures for generic form webhooks before parsing submitted fields.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate form webhook signatures";
     providerObjects: readonly [{
        kind: "signedFormWebhook";
        label: "Signed Form Webhook";
     }];
     requiresCredential: true;
  }];
  category: "form";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [];
     notes: readonly ["Coverage is limited to SDK-user-defined Cognidesk form definitions, structural submission validation, intake normalization, and Cognidesk HMAC webhook parsing.", "The package does not implement a named external forms provider API for form hosting, third-party submission storage, file-upload storage, analytics, routing, or provider-specific webhook management."];
     scope: "local-protocol";
  };
  credentialRequirements: readonly [{
     description: "SDK-user-configured registry of accepted form definitions and submission policies.";
     id: "form-registry";
     label: "Form registry";
     required: true;
   }, {
     description: "Shared HMAC secret used to verify form submission webhooks before intake.";
     id: "form-webhook-secret";
     label: "Form webhook secret";
     required: false;
  }];
  directions: readonly ["receive-only", "inbound-only"];
  id: "form.cognidesk";
  limitations: readonly ["Field definitions, required fields, accepted options, intake routing, retention, and automation policy are owned by SDK user configuration.", "Validation is structural and explicit; this package does not infer customer intent or classify free text."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        formDefinitions: "typed-read-validate";
        formSubmissions: "typed-validate-normalize";
        formWebhooks: "typed-validate-parse";
        thirdPartyFormsProviderApis: "not-covered";
     };
     checkedProviderSdk: {
        checkedAt: "2026-06-25";
        packageSurfaceRuntimeSdkAvailable: false;
        verdict: "internal-provider/local-runtime/no-provider-SDK";
     };
     implementation: {
        checkedAt: "2026-06-25";
        checkedSurface: "package.json dependencies and src runtime imports";
        externalProviderSdk: "not-applicable-internal-provider";
        guardrails: readonly ["Keep form definitions behind the SDK-user-configured registry until a named external forms provider package is introduced.", "Do not report third-party form hosting, submission storage, analytics, or provider webhook administration as covered by this package.", "If an external forms provider SDK is adopted later, route runtime operations through it and add a normal package.json runtime dependency."];
        integrationKitStatus: "implemented";
        manifestImport: "no-sdk-client-initialization";
        protocolSource: "Cognidesk local form submission protocol";
        providerSdkDecision: "internal-provider/local-runtime/no-provider-SDK";
        reason: "Cognidesk Forms is an internal intake protocol package; it validates SDK-user-defined forms and signed webhook payloads rather than wrapping a named external forms provider SDK.";
        runtime: "SDK-user-configured Cognidesk form registry and signed webhook parser";
        strategy: "protocol-local-runtime";
     };
  };
  name: "Cognidesk Forms";
  operations: readonly [{
     alias: "cognidesk.form.definition.validate";
     capability: "read-provider-object";
     extension: true;
     label: "Validate form definition";
     providerObject: "formDefinition";
     requiresCredential: true;
   }, {
     alias: "cognidesk.form.submission.normalize";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     label: "Normalize form submission";
     providerObject: "formSubmission";
     requiresCredential: true;
   }, {
     alias: "cognidesk.form.webhook.parse";
     capability: "form.webhook-signature";
     exposesSensitiveData: true;
     extension: true;
     label: "Parse form webhook";
     providerObject: "signedFormWebhook";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-form-cognidesk";
  privacyNotes: readonly ["Form submissions can include customer contact details, free-text messages, uploaded-file references, and SDK-user-defined custom fields.", "Webhook secrets and registry credentials stay server-side and are represented in Studio only as readiness state."];
  provider: "cognidesk";
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
| `directions` | ( \| `"receive-only"` \| `"inbound-only"` \| `"send-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
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
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates signed form submission webhooks and normalizes accepted submissions into intake records."`; `exposesSensitiveData`: `true`; `label`: `"Receive form submissions"`; `providerObjects`: readonly \[\{ `kind`: `"formSubmission"`; `label`: `"Form Submission"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads SDK-user-defined form schemas from the configured form registry."`; `label`: `"Read configured forms"`; `providerObjects`: readonly \[\{ `kind`: `"formDefinition"`; `label`: `"Form Definition"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"form.webhook-signature"`; `description`: `"Validates HMAC-SHA256 signatures for generic form webhooks before parsing submitted fields."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate form webhook signatures"`; `providerObjects`: readonly \[\{ `kind`: `"signedFormWebhook"`; `label`: `"Signed Form Webhook"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"form"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\]; `notes`: readonly \[`"Coverage is limited to SDK-user-defined Cognidesk form definitions, structural submission validation, intake normalization, and Cognidesk HMAC webhook parsing."`, `"The package does not implement a named external forms provider API for form hosting, third-party submission storage, file-upload storage, analytics, routing, or provider-specific webhook management."`\]; `scope`: `"local-protocol"`; \} |
| `coverage.evidence` | readonly \[\] |
| `coverage.notes` | readonly \[`"Coverage is limited to SDK-user-defined Cognidesk form definitions, structural submission validation, intake normalization, and Cognidesk HMAC webhook parsing."`, `"The package does not implement a named external forms provider API for form hosting, third-party submission storage, file-upload storage, analytics, routing, or provider-specific webhook management."`\] |
| `coverage.scope` | `"local-protocol"` |
| `credentialRequirements` | readonly \[\{ `description`: `"SDK-user-configured registry of accepted form definitions and submission policies."`; `id`: `"form-registry"`; `label`: `"Form registry"`; `required`: `true`; \}, \{ `description`: `"Shared HMAC secret used to verify form submission webhooks before intake."`; `id`: `"form-webhook-secret"`; `label`: `"Form webhook secret"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"receive-only"`, `"inbound-only"`\] |
| `id` | `"form.cognidesk"` |
| `limitations` | readonly \[`"Field definitions, required fields, accepted options, intake routing, retention, and automation policy are owned by SDK user configuration."`, `"Validation is structural and explicit; this package does not infer customer intent or classify free text."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `formDefinitions`: `"typed-read-validate"`; `formSubmissions`: `"typed-validate-normalize"`; `formWebhooks`: `"typed-validate-parse"`; `thirdPartyFormsProviderApis`: `"not-covered"`; \}; `checkedProviderSdk`: \{ `checkedAt`: `"2026-06-25"`; `packageSurfaceRuntimeSdkAvailable`: `false`; `verdict`: `"internal-provider/local-runtime/no-provider-SDK"`; \}; `implementation`: \{ `checkedAt`: `"2026-06-25"`; `checkedSurface`: `"package.json dependencies and src runtime imports"`; `externalProviderSdk`: `"not-applicable-internal-provider"`; `guardrails`: readonly \[`"Keep form definitions behind the SDK-user-configured registry until a named external forms provider package is introduced."`, `"Do not report third-party form hosting, submission storage, analytics, or provider webhook administration as covered by this package."`, `"If an external forms provider SDK is adopted later, route runtime operations through it and add a normal package.json runtime dependency."`\]; `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `protocolSource`: `"Cognidesk local form submission protocol"`; `providerSdkDecision`: `"internal-provider/local-runtime/no-provider-SDK"`; `reason`: `"Cognidesk Forms is an internal intake protocol package; it validates SDK-user-defined forms and signed webhook payloads rather than wrapping a named external forms provider SDK."`; `runtime`: `"SDK-user-configured Cognidesk form registry and signed webhook parser"`; `strategy`: `"protocol-local-runtime"`; \}; \} |
| `metadata.channelCoverage` | \{ `formDefinitions`: `"typed-read-validate"`; `formSubmissions`: `"typed-validate-normalize"`; `formWebhooks`: `"typed-validate-parse"`; `thirdPartyFormsProviderApis`: `"not-covered"`; \} |
| `metadata.channelCoverage.formDefinitions` | `"typed-read-validate"` |
| `metadata.channelCoverage.formSubmissions` | `"typed-validate-normalize"` |
| `metadata.channelCoverage.formWebhooks` | `"typed-validate-parse"` |
| `metadata.channelCoverage.thirdPartyFormsProviderApis` | `"not-covered"` |
| `metadata.checkedProviderSdk` | \{ `checkedAt`: `"2026-06-25"`; `packageSurfaceRuntimeSdkAvailable`: `false`; `verdict`: `"internal-provider/local-runtime/no-provider-SDK"`; \} |
| `metadata.checkedProviderSdk.checkedAt` | `"2026-06-25"` |
| `metadata.checkedProviderSdk.packageSurfaceRuntimeSdkAvailable` | `false` |
| `metadata.checkedProviderSdk.verdict` | `"internal-provider/local-runtime/no-provider-SDK"` |
| `metadata.implementation` | \{ `checkedAt`: `"2026-06-25"`; `checkedSurface`: `"package.json dependencies and src runtime imports"`; `externalProviderSdk`: `"not-applicable-internal-provider"`; `guardrails`: readonly \[`"Keep form definitions behind the SDK-user-configured registry until a named external forms provider package is introduced."`, `"Do not report third-party form hosting, submission storage, analytics, or provider webhook administration as covered by this package."`, `"If an external forms provider SDK is adopted later, route runtime operations through it and add a normal package.json runtime dependency."`\]; `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `protocolSource`: `"Cognidesk local form submission protocol"`; `providerSdkDecision`: `"internal-provider/local-runtime/no-provider-SDK"`; `reason`: `"Cognidesk Forms is an internal intake protocol package; it validates SDK-user-defined forms and signed webhook payloads rather than wrapping a named external forms provider SDK."`; `runtime`: `"SDK-user-configured Cognidesk form registry and signed webhook parser"`; `strategy`: `"protocol-local-runtime"`; \} |
| `metadata.implementation.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.checkedSurface` | `"package.json dependencies and src runtime imports"` |
| `metadata.implementation.externalProviderSdk` | `"not-applicable-internal-provider"` |
| `metadata.implementation.guardrails` | readonly \[`"Keep form definitions behind the SDK-user-configured registry until a named external forms provider package is introduced."`, `"Do not report third-party form hosting, submission storage, analytics, or provider webhook administration as covered by this package."`, `"If an external forms provider SDK is adopted later, route runtime operations through it and add a normal package.json runtime dependency."`\] |
| `metadata.implementation.integrationKitStatus` | `"implemented"` |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.protocolSource` | `"Cognidesk local form submission protocol"` |
| `metadata.implementation.providerSdkDecision` | `"internal-provider/local-runtime/no-provider-SDK"` |
| `metadata.implementation.reason` | `"Cognidesk Forms is an internal intake protocol package; it validates SDK-user-defined forms and signed webhook payloads rather than wrapping a named external forms provider SDK."` |
| `metadata.implementation.runtime` | `"SDK-user-configured Cognidesk form registry and signed webhook parser"` |
| `metadata.implementation.strategy` | `"protocol-local-runtime"` |
| `name` | `"Cognidesk Forms"` |
| `operations` | readonly \[\{ `alias`: `"cognidesk.form.definition.validate"`; `capability`: `"read-provider-object"`; `extension`: `true`; `label`: `"Validate form definition"`; `providerObject`: `"formDefinition"`; `requiresCredential`: `true`; \}, \{ `alias`: `"cognidesk.form.submission.normalize"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Normalize form submission"`; `providerObject`: `"formSubmission"`; `requiresCredential`: `true`; \}, \{ `alias`: `"cognidesk.form.webhook.parse"`; `capability`: `"form.webhook-signature"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Parse form webhook"`; `providerObject`: `"signedFormWebhook"`; `requiresCredential`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-form-cognidesk"` |
| `privacyNotes` | readonly \[`"Form submissions can include customer contact details, free-text messages, uploaded-file references, and SDK-user-defined custom fields."`, `"Webhook secrets and registry credentials stay server-side and are represented in Studio only as readiness state."`\] |
| `provider` | `"cognidesk"` |
| `trustLevel` | `"official"` |
