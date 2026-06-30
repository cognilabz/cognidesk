# integrations/cobrowsing/cognidesk/dist/manifest

## Variables

### cognideskCobrowsingProviderManifest

```ts
const cognideskCobrowsingProviderManifest: {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
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
  channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
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
     | "bidirectional"
     | "receive-only"
     | "send-only"
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
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
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
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "create-provider-object";
     changesWorkflow: true;
     description: "Creates SDK-user-owned cobrowsing session records without implementing browser remoting.";
     exposesSensitiveData: true;
     label: "Create cobrowsing sessions";
     providerObjects: readonly [{
        kind: "cobrowsingSession";
        label: "Cobrowsing Session";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["internal-support", "mixed"];
     capability: "read-provider-object";
     description: "Reads SDK-user-owned cobrowsing session records and readiness state.";
     exposesSensitiveData: true;
     label: "Read cobrowsing sessions";
     providerObjects: readonly [{
        kind: "cobrowsingSession";
        label: "Cobrowsing Session";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "update-provider-object";
     changesWorkflow: true;
     description: "Updates SDK-user-owned cobrowsing session lifecycle for join and end operations.";
     exposesSensitiveData: true;
     label: "Join or end cobrowsing sessions";
     providerObjects: readonly [{
        kind: "cobrowsingSession";
        label: "Cobrowsing Session";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support", "mixed"];
     capability: "receive";
     description: "Validates, parses, and normalizes signed cobrowsing webhook or session-event requests.";
     exposesSensitiveData: true;
     label: "Receive cobrowsing session events";
     providerObjects: readonly [{
        kind: "cobrowsingSessionEvent";
        label: "Cobrowsing Session Event";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "cobrowsing.validate-session-token";
     description: "Validates SDK-user-signed HMAC session tokens with expiration, audience, session, and origin checks.";
     exposesSensitiveData: true;
     extension: true;
     label: "Validate cobrowsing session tokens";
     providerObjects: readonly [{
        kind: "cobrowsingSessionToken";
        label: "Cobrowsing Session Token";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["internal-support"];
     capability: "cobrowsing.verify-signed-event";
     description: "Verifies HMAC signed webhook/session-event payloads with timestamp replay protection.";
     exposesSensitiveData: true;
     extension: true;
     label: "Verify signed cobrowsing events";
     providerObjects: readonly [{
        kind: "cobrowsingSignedEvent";
        label: "Cobrowsing Signed Event";
     }];
     requiresCredential: true;
  }];
  category: "cobrowsing";
  channelAudiences: readonly ["customer-facing", "internal-support", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Cognidesk cobrowsing local protocol module";
        url: "https://github.com/cognilabz/cognidesk/tree/main/integrations/cobrowsing/cognidesk";
      }, {
        label: "CONTEXT.md Built-In Adapter definition";
     }];
     notes: readonly ["Coverage is limited to Cognidesk-owned local cobrowsing protocol primitives: SDK-user session store lifecycle, signed session tokens, event normalization, and HMAC signed-event parsing.", "The package does not implement an external cobrowsing provider API, browser remoting, DOM capture/replay, cursor or screen-control transport, hosted relay infrastructure, storage persistence, or third-party cobrowsing administration.", "The SDK user owns allowed origins, consent capture, recording/redaction policy, data storage, transport, and relay/runtime implementation decisions."];
     scope: "local-protocol";
  };
  credentialRequirements: readonly [{
     description: "SDK-user-owned durable or ephemeral store used to create, join, read, and end cobrowsing sessions.";
     id: "cobrowsing-session-store";
     label: "Cobrowsing session store";
     required: true;
   }, {
     description: "SDK-user-owned HMAC signing material and token lifetime policy for session access tokens.";
     id: "cobrowsing-session-token-signing";
     label: "Signed session token configuration";
     required: true;
   }, {
     description: "SDK-user-owned policy describing when customer consent is required, captured, and retained.";
     id: "cobrowsing-consent-policy";
     label: "Cobrowsing consent policy";
     required: true;
   }, {
     description: "SDK-user-owned policy for recording eligibility, sensitive element masking, field redaction, and retention.";
     id: "cobrowsing-recording-redaction-policy";
     label: "Recording and redaction policy";
     required: true;
   }, {
     description: "SDK-user-owned allowlist of origins where cobrowsing sessions and signed session tokens are valid.";
     id: "cobrowsing-allowed-origins";
     label: "Allowed browser origins";
     required: true;
   }, {
     description: "SDK-user-owned HMAC shared secret used to verify cobrowsing webhook or session-event requests.";
     id: "cobrowsing-webhook-shared-secret";
     label: "Webhook shared secret";
     required: false;
  }];
  directions: readonly ["bidirectional"];
  id: "cobrowsing.cognidesk";
  limitations: readonly ["This package provides the SDK adapter contract, readiness helpers, session lifecycle primitives, token validation, event normalization, and signed-event parsing only.", "It does not implement browser remoting, DOM capture, cursor transport, screen control, storage persistence, or a hosted cobrowsing relay.", "Studio can surface this package's configuration state later, but SDK user configuration remains the authority for behavior."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        browserRemotingDomCaptureCursorScreenControlHostedRelay: "not-covered";
        sessions: "typed-create-read-update";
        sessionTokens: "typed-create-validate";
        signedEvents: "typed-verify-parse";
     };
     docs: "https://github.com/cognilabz/cognidesk/tree/main/integrations/cobrowsing/cognidesk";
     implementation: {
        checkedAt: "2026-06-25";
        defaultClientPolicy: "sdk-user-provided-cobrowsing-session-client";
        externalProviderSdk: "not-applicable-internal-provider";
        integrationKitStatus: "implemented";
        manifestImport: "no-sdk-client-initialization";
        protocolSource: "Cognidesk local cobrowsing protocol";
        providerSdkDecision: "internal-provider/local-runtime/no-provider-SDK";
        reason: "Cognidesk Cobrowsing is an internal local-protocol adapter for SDK-user-owned session storage, signed session tokens, and event normalization rather than a named external cobrowsing provider SDK.";
        rejectedSdkPackages: readonly [];
        runtimePackage: "@cognidesk/integration-cobrowsing-cognidesk";
        sdkPackage: "@cognidesk/integration-cobrowsing-cognidesk";
        strategy: "local-protocol";
        typedClientOverride: "CognideskCobrowsingIntegrationClient";
     };
  };
  name: "Cognidesk Cobrowsing";
  operations: readonly [{
     alias: "cognidesk.cobrowsing.session.create";
     capability: "create-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Create cobrowsing session";
     providerObject: "cobrowsingSession";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "cognidesk.cobrowsing.session.join";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "Join cobrowsing session";
     providerObject: "cobrowsingSession";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "cognidesk.cobrowsing.session.end";
     capability: "update-provider-object";
     changesWorkflow: true;
     exposesSensitiveData: true;
     extension: true;
     label: "End cobrowsing session";
     providerObject: "cobrowsingSession";
     requiresCredential: true;
     sideEffect: true;
   }, {
     alias: "cognidesk.cobrowsing.event.normalize";
     capability: "receive";
     exposesSensitiveData: true;
     extension: true;
     label: "Normalize cobrowsing session event";
     providerObject: "cobrowsingSessionEvent";
     requiresCredential: true;
  }];
  packageName: "@cognidesk/integration-cobrowsing-cognidesk";
  privacyNotes: readonly ["Cobrowsing session IDs, customer identifiers, agent identifiers, page origins, consent records, recording metadata, redaction selectors, and event payloads can contain customer or support data.", "Session token signing material and webhook shared secrets stay server-side and are represented in Studio only as readiness metadata.", "Consent, recording, redaction, allowed-origin, retention, and transport eligibility decisions remain SDK-user-owned configuration."];
  provider: "cognidesk";
  trustLevel: "official";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"local-protocol"` \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"local-protocol"` \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"bidirectional"` \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"official"` \| `"community"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` \| `"community"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | readonly \[\{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `description`: `"Creates SDK-user-owned cobrowsing session records without implementing browser remoting."`; `exposesSensitiveData`: `true`; `label`: `"Create cobrowsing sessions"`; `providerObjects`: readonly \[\{ `kind`: `"cobrowsingSession"`; `label`: `"Cobrowsing Session"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`, `"mixed"`\]; `capability`: `"read-provider-object"`; `description`: `"Reads SDK-user-owned cobrowsing session records and readiness state."`; `exposesSensitiveData`: `true`; `label`: `"Read cobrowsing sessions"`; `providerObjects`: readonly \[\{ `kind`: `"cobrowsingSession"`; `label`: `"Cobrowsing Session"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `description`: `"Updates SDK-user-owned cobrowsing session lifecycle for join and end operations."`; `exposesSensitiveData`: `true`; `label`: `"Join or end cobrowsing sessions"`; `providerObjects`: readonly \[\{ `kind`: `"cobrowsingSession"`; `label`: `"Cobrowsing Session"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\]; `capability`: `"receive"`; `description`: `"Validates, parses, and normalizes signed cobrowsing webhook or session-event requests."`; `exposesSensitiveData`: `true`; `label`: `"Receive cobrowsing session events"`; `providerObjects`: readonly \[\{ `kind`: `"cobrowsingSessionEvent"`; `label`: `"Cobrowsing Session Event"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"cobrowsing.validate-session-token"`; `description`: `"Validates SDK-user-signed HMAC session tokens with expiration, audience, session, and origin checks."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Validate cobrowsing session tokens"`; `providerObjects`: readonly \[\{ `kind`: `"cobrowsingSessionToken"`; `label`: `"Cobrowsing Session Token"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: readonly \[`"internal-support"`\]; `capability`: `"cobrowsing.verify-signed-event"`; `description`: `"Verifies HMAC signed webhook/session-event payloads with timestamp replay protection."`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Verify signed cobrowsing events"`; `providerObjects`: readonly \[\{ `kind`: `"cobrowsingSignedEvent"`; `label`: `"Cobrowsing Signed Event"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"cobrowsing"` |
| `channelAudiences` | readonly \[`"customer-facing"`, `"internal-support"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: readonly \[\{ `label`: `"Cognidesk cobrowsing local protocol module"`; `url`: `"https://github.com/cognilabz/cognidesk/tree/main/integrations/cobrowsing/cognidesk"`; \}, \{ `label`: `"CONTEXT.md Built-In Adapter definition"`; \}\]; `notes`: readonly \[`"Coverage is limited to Cognidesk-owned local cobrowsing protocol primitives: SDK-user session store lifecycle, signed session tokens, event normalization, and HMAC signed-event parsing."`, `"The package does not implement an external cobrowsing provider API, browser remoting, DOM capture/replay, cursor or screen-control transport, hosted relay infrastructure, storage persistence, or third-party cobrowsing administration."`, `"The SDK user owns allowed origins, consent capture, recording/redaction policy, data storage, transport, and relay/runtime implementation decisions."`\]; `scope`: `"local-protocol"`; \} |
| `coverage.evidence` | readonly \[\{ `label`: `"Cognidesk cobrowsing local protocol module"`; `url`: `"https://github.com/cognilabz/cognidesk/tree/main/integrations/cobrowsing/cognidesk"`; \}, \{ `label`: `"CONTEXT.md Built-In Adapter definition"`; \}\] |
| `coverage.notes` | readonly \[`"Coverage is limited to Cognidesk-owned local cobrowsing protocol primitives: SDK-user session store lifecycle, signed session tokens, event normalization, and HMAC signed-event parsing."`, `"The package does not implement an external cobrowsing provider API, browser remoting, DOM capture/replay, cursor or screen-control transport, hosted relay infrastructure, storage persistence, or third-party cobrowsing administration."`, `"The SDK user owns allowed origins, consent capture, recording/redaction policy, data storage, transport, and relay/runtime implementation decisions."`\] |
| `coverage.scope` | `"local-protocol"` |
| `credentialRequirements` | readonly \[\{ `description`: `"SDK-user-owned durable or ephemeral store used to create, join, read, and end cobrowsing sessions."`; `id`: `"cobrowsing-session-store"`; `label`: `"Cobrowsing session store"`; `required`: `true`; \}, \{ `description`: `"SDK-user-owned HMAC signing material and token lifetime policy for session access tokens."`; `id`: `"cobrowsing-session-token-signing"`; `label`: `"Signed session token configuration"`; `required`: `true`; \}, \{ `description`: `"SDK-user-owned policy describing when customer consent is required, captured, and retained."`; `id`: `"cobrowsing-consent-policy"`; `label`: `"Cobrowsing consent policy"`; `required`: `true`; \}, \{ `description`: `"SDK-user-owned policy for recording eligibility, sensitive element masking, field redaction, and retention."`; `id`: `"cobrowsing-recording-redaction-policy"`; `label`: `"Recording and redaction policy"`; `required`: `true`; \}, \{ `description`: `"SDK-user-owned allowlist of origins where cobrowsing sessions and signed session tokens are valid."`; `id`: `"cobrowsing-allowed-origins"`; `label`: `"Allowed browser origins"`; `required`: `true`; \}, \{ `description`: `"SDK-user-owned HMAC shared secret used to verify cobrowsing webhook or session-event requests."`; `id`: `"cobrowsing-webhook-shared-secret"`; `label`: `"Webhook shared secret"`; `required`: `false`; \}\] |
| `directions` | readonly \[`"bidirectional"`\] |
| `id` | `"cobrowsing.cognidesk"` |
| `limitations` | readonly \[`"This package provides the SDK adapter contract, readiness helpers, session lifecycle primitives, token validation, event normalization, and signed-event parsing only."`, `"It does not implement browser remoting, DOM capture, cursor transport, screen control, storage persistence, or a hosted cobrowsing relay."`, `"Studio can surface this package's configuration state later, but SDK user configuration remains the authority for behavior."`\] |
| `maintainers` | readonly \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `browserRemotingDomCaptureCursorScreenControlHostedRelay`: `"not-covered"`; `sessions`: `"typed-create-read-update"`; `sessionTokens`: `"typed-create-validate"`; `signedEvents`: `"typed-verify-parse"`; \}; `docs`: `"https://github.com/cognilabz/cognidesk/tree/main/integrations/cobrowsing/cognidesk"`; `implementation`: \{ `checkedAt`: `"2026-06-25"`; `defaultClientPolicy`: `"sdk-user-provided-cobrowsing-session-client"`; `externalProviderSdk`: `"not-applicable-internal-provider"`; `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `protocolSource`: `"Cognidesk local cobrowsing protocol"`; `providerSdkDecision`: `"internal-provider/local-runtime/no-provider-SDK"`; `reason`: `"Cognidesk Cobrowsing is an internal local-protocol adapter for SDK-user-owned session storage, signed session tokens, and event normalization rather than a named external cobrowsing provider SDK."`; `rejectedSdkPackages`: readonly \[\]; `runtimePackage`: `"@cognidesk/integration-cobrowsing-cognidesk"`; `sdkPackage`: `"@cognidesk/integration-cobrowsing-cognidesk"`; `strategy`: `"local-protocol"`; `typedClientOverride`: `"CognideskCobrowsingIntegrationClient"`; \}; \} |
| `metadata.channelCoverage` | \{ `browserRemotingDomCaptureCursorScreenControlHostedRelay`: `"not-covered"`; `sessions`: `"typed-create-read-update"`; `sessionTokens`: `"typed-create-validate"`; `signedEvents`: `"typed-verify-parse"`; \} |
| `metadata.channelCoverage.browserRemotingDomCaptureCursorScreenControlHostedRelay` | `"not-covered"` |
| `metadata.channelCoverage.sessions` | `"typed-create-read-update"` |
| `metadata.channelCoverage.sessionTokens` | `"typed-create-validate"` |
| `metadata.channelCoverage.signedEvents` | `"typed-verify-parse"` |
| `metadata.docs` | `"https://github.com/cognilabz/cognidesk/tree/main/integrations/cobrowsing/cognidesk"` |
| `metadata.implementation` | \{ `checkedAt`: `"2026-06-25"`; `defaultClientPolicy`: `"sdk-user-provided-cobrowsing-session-client"`; `externalProviderSdk`: `"not-applicable-internal-provider"`; `integrationKitStatus`: `"implemented"`; `manifestImport`: `"no-sdk-client-initialization"`; `protocolSource`: `"Cognidesk local cobrowsing protocol"`; `providerSdkDecision`: `"internal-provider/local-runtime/no-provider-SDK"`; `reason`: `"Cognidesk Cobrowsing is an internal local-protocol adapter for SDK-user-owned session storage, signed session tokens, and event normalization rather than a named external cobrowsing provider SDK."`; `rejectedSdkPackages`: readonly \[\]; `runtimePackage`: `"@cognidesk/integration-cobrowsing-cognidesk"`; `sdkPackage`: `"@cognidesk/integration-cobrowsing-cognidesk"`; `strategy`: `"local-protocol"`; `typedClientOverride`: `"CognideskCobrowsingIntegrationClient"`; \} |
| `metadata.implementation.checkedAt` | `"2026-06-25"` |
| `metadata.implementation.defaultClientPolicy` | `"sdk-user-provided-cobrowsing-session-client"` |
| `metadata.implementation.externalProviderSdk` | `"not-applicable-internal-provider"` |
| `metadata.implementation.integrationKitStatus` | `"implemented"` |
| `metadata.implementation.manifestImport` | `"no-sdk-client-initialization"` |
| `metadata.implementation.protocolSource` | `"Cognidesk local cobrowsing protocol"` |
| `metadata.implementation.providerSdkDecision` | `"internal-provider/local-runtime/no-provider-SDK"` |
| `metadata.implementation.reason` | `"Cognidesk Cobrowsing is an internal local-protocol adapter for SDK-user-owned session storage, signed session tokens, and event normalization rather than a named external cobrowsing provider SDK."` |
| `metadata.implementation.rejectedSdkPackages` | readonly \[\] |
| `metadata.implementation.runtimePackage` | `"@cognidesk/integration-cobrowsing-cognidesk"` |
| `metadata.implementation.sdkPackage` | `"@cognidesk/integration-cobrowsing-cognidesk"` |
| `metadata.implementation.strategy` | `"local-protocol"` |
| `metadata.implementation.typedClientOverride` | `"CognideskCobrowsingIntegrationClient"` |
| `name` | `"Cognidesk Cobrowsing"` |
| `operations` | readonly \[\{ `alias`: `"cognidesk.cobrowsing.session.create"`; `capability`: `"create-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Create cobrowsing session"`; `providerObject`: `"cobrowsingSession"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"cognidesk.cobrowsing.session.join"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Join cobrowsing session"`; `providerObject`: `"cobrowsingSession"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"cognidesk.cobrowsing.session.end"`; `capability`: `"update-provider-object"`; `changesWorkflow`: `true`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"End cobrowsing session"`; `providerObject`: `"cobrowsingSession"`; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `alias`: `"cognidesk.cobrowsing.event.normalize"`; `capability`: `"receive"`; `exposesSensitiveData`: `true`; `extension`: `true`; `label`: `"Normalize cobrowsing session event"`; `providerObject`: `"cobrowsingSessionEvent"`; `requiresCredential`: `true`; \}\] |
| `packageName` | `"@cognidesk/integration-cobrowsing-cognidesk"` |
| `privacyNotes` | readonly \[`"Cobrowsing session IDs, customer identifiers, agent identifiers, page origins, consent records, recording metadata, redaction selectors, and event payloads can contain customer or support data."`, `"Session token signing material and webhook shared secrets stay server-side and are represented in Studio only as readiness metadata."`, `"Consent, recording, redaction, allowed-origin, retention, and transport eligibility decisions remain SDK-user-owned configuration."`\] |
| `provider` | `"cognidesk"` |
| `trustLevel` | `"official"` |
