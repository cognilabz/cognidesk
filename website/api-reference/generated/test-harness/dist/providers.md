# test-harness/dist/providers

## Interfaces

### CategoryOperationDeclaration

#### Properties

##### alias

```ts
alias: string;
```

##### audiences?

```ts
optional audiences?: string[];
```

##### capability?

```ts
optional capability?: string;
```

##### changesWorkflow?

```ts
optional changesWorkflow?: boolean;
```

##### exposesSensitiveData?

```ts
optional exposesSensitiveData?: boolean;
```

##### extension?

```ts
optional extension?: boolean;
```

##### externallyVisible?

```ts
optional externallyVisible?: boolean;
```

##### inputSchema?

```ts
optional inputSchema?: unknown;
```

##### inputSchemaName?

```ts
optional inputSchemaName?: string;
```

##### inputSchemaRef?

```ts
optional inputSchemaRef?: string;
```

##### level?

```ts
optional level?: CategoryOperationLevel;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### outputSchema?

```ts
optional outputSchema?: unknown;
```

##### outputSchemaName?

```ts
optional outputSchemaName?: string;
```

##### outputSchemaRef?

```ts
optional outputSchemaRef?: string;
```

##### providerObject?

```ts
optional providerObject?: string;
```

##### providerObjects?

```ts
optional providerObjects?: {
  kind: string;
  label?: string;
}[];
```

###### kind

```ts
kind: string;
```

###### label?

```ts
optional label?: string;
```

##### requiredPolicyIds?

```ts
optional requiredPolicyIds?: string[];
```

##### sideEffect?

```ts
optional sideEffect?: boolean;
```

***

### ProviderCategoryCoverage

#### Properties

##### category

```ts
category: string;
```

##### claimedCoverageLevel?

```ts
optional claimedCoverageLevel?: ProviderCategoryCoverageLevel;
```

##### coverageLevel

```ts
coverageLevel: ProviderCategoryCoverageLevel;
```

##### implementedOperations

```ts
implementedOperations: string[];
```

##### invalidExtensions

```ts
invalidExtensions: {
  alias: string;
  missing: string[];
}[];
```

###### alias

```ts
alias: string;
```

###### missing

```ts
missing: string[];
```

##### missingOptional

```ts
missingOptional: string[];
```

##### missingRecommended

```ts
missingRecommended: string[];
```

##### missingRequired

```ts
missingRequired: string[];
```

##### operationCounts

```ts
operationCounts: {
  extension: number;
  implemented: number;
  optional: number;
  recommended: number;
  required: number;
};
```

###### extension

```ts
extension: number;
```

###### implemented

```ts
implemented: number;
```

###### optional

```ts
optional: number;
```

###### recommended

```ts
recommended: number;
```

###### required

```ts
required: number;
```

##### overstatedCoverage?

```ts
optional overstatedCoverage?: boolean;
```

##### profileId?

```ts
optional profileId?: string;
```

##### unsupportedOperations

```ts
unsupportedOperations: {
  alias: string;
  capability: string;
}[];
```

###### alias

```ts
alias: string;
```

###### capability

```ts
capability: string;
```

***

### ProviderConformanceCheckResult

#### Properties

##### details?

```ts
optional details?: Record<string, unknown>;
```

##### id

```ts
id: string;
```

##### message

```ts
message: string;
```

##### status

```ts
status: ProviderConformanceStatus;
```

***

### ProviderConformanceInput

#### Properties

##### availability?

```ts
optional availability?: {
  blockers?: {
     code: string;
     kind?:   | "unknown"
        | "permission-blocked"
        | "missing-policy"
        | "missing-configuration"
        | "missing-credentials"
        | "provider-unsupported";
     message: string;
  }[];
  capability?: string;
  enabledForAgents?: string[];
  enabledForChannels?: string[];
  enabledForJourneys?: string[];
  enabledForTools?: string[];
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageId?: string;
  status:   | "enabled"
     | "registry-available"
     | "installed"
     | "configured"
     | "blocked";
}[];
```

###### blockers?

```ts
optional blockers?: {
  code: string;
  kind?:   | "unknown"
     | "permission-blocked"
     | "missing-policy"
     | "missing-configuration"
     | "missing-credentials"
     | "provider-unsupported";
  message: string;
}[];
```

###### capability?

```ts
optional capability?: string;
```

###### enabledForAgents?

```ts
optional enabledForAgents?: string[];
```

###### enabledForChannels?

```ts
optional enabledForChannels?: string[];
```

###### enabledForJourneys?

```ts
optional enabledForJourneys?: string[];
```

###### enabledForTools?

```ts
optional enabledForTools?: string[];
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### status

```ts
status:
  | "enabled"
  | "registry-available"
  | "installed"
  | "configured"
  | "blocked";
```

##### categoryProfiles?

```ts
optional categoryProfiles?: IntegrationCategoryProfile[];
```

##### channels?

```ts
optional channels?: {
  audience?: "customer-facing" | "internal-support" | "mixed";
  behavior?: {
   [key: string]: unknown;
     allowMarkdown?: boolean;
     allowWidgets?: boolean;
     approval?: unknown;
     draftFirst?: boolean;
     handoff?: unknown;
     maxCharacters?: number;
     maxWords?: number;
     media?: unknown;
     sensitiveData?: unknown;
     tone?: string;
  };
  channel: string;
  channelSetIds?: string[];
  enabled?: boolean;
  enabledCapabilities?: string[];
  flowActivations?: {
     enabled?: boolean;
     journeyId: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds?: string[];
     providerPackageIds?: string[];
     reason?: string;
  }[];
  handoff?: {
     destinations?: string[];
     enabled?: boolean;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds?: string[];
     providerPackageIds?: string[];
     sdkControlled?: boolean;
  };
  id: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outbound?: {
     enabled?: boolean;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     policyIds?: string[];
     providerPackageIds?: string[];
     requiresProviderOutboundSupport?: boolean;
  };
  policies?: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerPackageIds?: string[];
}[];
```

###### audience?

```ts
optional audience?: "customer-facing" | "internal-support" | "mixed";
```

###### behavior?

```ts
optional behavior?: {
[key: string]: unknown;
  allowMarkdown?: boolean;
  allowWidgets?: boolean;
  approval?: unknown;
  draftFirst?: boolean;
  handoff?: unknown;
  maxCharacters?: number;
  maxWords?: number;
  media?: unknown;
  sensitiveData?: unknown;
  tone?: string;
};
```

###### Index Signature

```ts
[key: string]: unknown
```

###### behavior.allowMarkdown?

```ts
optional allowMarkdown?: boolean;
```

###### behavior.allowWidgets?

```ts
optional allowWidgets?: boolean;
```

###### behavior.approval?

```ts
optional approval?: unknown;
```

###### behavior.draftFirst?

```ts
optional draftFirst?: boolean;
```

###### behavior.handoff?

```ts
optional handoff?: unknown;
```

###### behavior.maxCharacters?

```ts
optional maxCharacters?: number;
```

###### behavior.maxWords?

```ts
optional maxWords?: number;
```

###### behavior.media?

```ts
optional media?: unknown;
```

###### behavior.sensitiveData?

```ts
optional sensitiveData?: unknown;
```

###### behavior.tone?

```ts
optional tone?: string;
```

###### channel

```ts
channel: string;
```

###### channelSetIds?

```ts
optional channelSetIds?: string[];
```

###### enabled?

```ts
optional enabled?: boolean;
```

###### enabledCapabilities?

```ts
optional enabledCapabilities?: string[];
```

###### flowActivations?

```ts
optional flowActivations?: {
  enabled?: boolean;
  journeyId: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds?: string[];
  providerPackageIds?: string[];
  reason?: string;
}[];
```

###### handoff?

```ts
optional handoff?: {
  destinations?: string[];
  enabled?: boolean;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds?: string[];
  providerPackageIds?: string[];
  sdkControlled?: boolean;
};
```

###### handoff.destinations?

```ts
optional destinations?: string[];
```

###### handoff.enabled?

```ts
optional enabled?: boolean;
```

###### handoff.metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### handoff.policyIds?

```ts
optional policyIds?: string[];
```

###### handoff.providerPackageIds?

```ts
optional providerPackageIds?: string[];
```

###### handoff.sdkControlled?

```ts
optional sdkControlled?: boolean;
```

###### id

```ts
id: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### outbound?

```ts
optional outbound?: {
  enabled?: boolean;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  policyIds?: string[];
  providerPackageIds?: string[];
  requiresProviderOutboundSupport?: boolean;
};
```

###### outbound.enabled?

```ts
optional enabled?: boolean;
```

###### outbound.metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### outbound.policyIds?

```ts
optional policyIds?: string[];
```

###### outbound.providerPackageIds?

```ts
optional providerPackageIds?: string[];
```

###### outbound.requiresProviderOutboundSupport?

```ts
optional requiresProviderOutboundSupport?: boolean;
```

###### policies?

```ts
optional policies?: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### providerPackageIds?

```ts
optional providerPackageIds?: string[];
```

##### credentialStatuses?

```ts
optional credentialStatuses?: {
  expiresAt?: string;
  message?: string;
  providerPackageId?: string;
  requirementId: string;
  scopes?: string[];
  state:   | "required"
     | "configured"
     | "permission-blocked"
     | "not-required"
     | "missing"
     | "expired"
     | "insufficient-scope"
     | "unavailable";
}[];
```

###### expiresAt?

```ts
optional expiresAt?: string;
```

###### message?

```ts
optional message?: string;
```

###### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### requirementId

```ts
requirementId: string;
```

###### scopes?

```ts
optional scopes?: string[];
```

###### state

```ts
state:
  | "required"
  | "configured"
  | "permission-blocked"
  | "not-required"
  | "missing"
  | "expired"
  | "insufficient-scope"
  | "unavailable";
```

##### expectedPackageName?

```ts
optional expectedPackageName?: string;
```

##### live?

```ts
optional live?: {
  checks?: ProviderLiveCheck[];
  enabled?: boolean;
};
```

###### checks?

```ts
optional checks?: ProviderLiveCheck[];
```

###### enabled?

```ts
optional enabled?: boolean;
```

##### manifest

```ts
manifest: {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        schemaName?: string;
     }[];
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  category: string;
  channelAudiences?: ("customer-facing" | "internal-support" | "mixed")[];
  coverage?: {
     evidence?: {
        label: string;
        url?: string;
     }[];
     notes?: string[];
     scope?:   | "support-workflow-subset"
        | "provider-api-subset"
        | "connector-required"
        | "local-protocol"
        | "full-provider-api";
  };
  credentialRequirements?: {
     description?: string;
     id: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     required?: boolean;
     scopes?: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "inbound-only"
     | "outbound-only"
    | "bidirectional")[];
  id: string;
  limitations?: string[];
  maintainers?: {
     name: string;
     type?: "community" | "official" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  name: string;
  operations?: {
     alias: string;
     audience?: "customer-facing" | "internal-support" | "mixed";
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     externallyVisible?: boolean;
     inputSchema?: unknown;
     inputSchemaName?: string;
     inputSchemaRef?: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        schemaName?: string;
     }[];
     providerOperation?: string;
     requiredPolicyIds?: string[];
     requiresApproval?: boolean;
     requiresCredential?: boolean;
     sideEffect?: boolean;
  }[];
  packageName: string;
  privacyNotes?: string[];
  provider: string;
  trustLevel?: "community" | "official" | "verified" | "experimental";
};
```

###### capabilities

```ts
capabilities: {
  audiences?: ("customer-facing" | "internal-support" | "mixed")[];
  capability: string;
  changesWorkflow?: boolean;
  description?: string;
  exposesSensitiveData?: boolean;
  extension?: boolean;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerObjects?: {
     description?: string;
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName?: string;
  }[];
  requiresCredential?: boolean;
  sideEffect?: boolean;
}[];
```

###### category

```ts
category: string;
```

###### channelAudiences?

```ts
optional channelAudiences?: ("customer-facing" | "internal-support" | "mixed")[];
```

###### coverage?

```ts
optional coverage?: {
  evidence?: {
     label: string;
     url?: string;
  }[];
  notes?: string[];
  scope?:   | "support-workflow-subset"
     | "provider-api-subset"
     | "connector-required"
     | "local-protocol"
     | "full-provider-api";
};
```

###### coverage.evidence?

```ts
optional evidence?: {
  label: string;
  url?: string;
}[];
```

###### coverage.notes?

```ts
optional notes?: string[];
```

###### coverage.scope?

```ts
optional scope?:
  | "support-workflow-subset"
  | "provider-api-subset"
  | "connector-required"
  | "local-protocol"
  | "full-provider-api";
```

###### credentialRequirements?

```ts
optional credentialRequirements?: {
  description?: string;
  id: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  required?: boolean;
  scopes?: string[];
}[];
```

###### directions

```ts
directions: (
  | "receive-only"
  | "send-only"
  | "inbound-only"
  | "outbound-only"
  | "bidirectional")[];
```

###### id

```ts
id: string;
```

###### limitations?

```ts
optional limitations?: string[];
```

###### maintainers?

```ts
optional maintainers?: {
  name: string;
  type?: "community" | "official" | "unknown" | "partner";
  url?: string;
}[];
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### name

```ts
name: string;
```

###### operations?

```ts
optional operations?: {
  alias: string;
  audience?: "customer-facing" | "internal-support" | "mixed";
  audiences?: ("customer-facing" | "internal-support" | "mixed")[];
  capability: string;
  changesWorkflow?: boolean;
  description?: string;
  exposesSensitiveData?: boolean;
  extension?: boolean;
  externallyVisible?: boolean;
  inputSchema?: unknown;
  inputSchemaName?: string;
  inputSchemaRef?: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outputSchema?: unknown;
  outputSchemaName?: string;
  outputSchemaRef?: string;
  providerObject?: string;
  providerObjects?: {
     description?: string;
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName?: string;
  }[];
  providerOperation?: string;
  requiredPolicyIds?: string[];
  requiresApproval?: boolean;
  requiresCredential?: boolean;
  sideEffect?: boolean;
}[];
```

###### packageName

```ts
packageName: string;
```

###### privacyNotes?

```ts
optional privacyNotes?: string[];
```

###### provider

```ts
provider: string;
```

###### trustLevel?

```ts
optional trustLevel?: "community" | "official" | "verified" | "experimental";
```

##### signal?

```ts
optional signal?: AbortSignal;
```

***

### ProviderConformanceResult

#### Properties

##### checks

```ts
checks: ProviderConformanceCheckResult[];
```

##### manifest

```ts
manifest: {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     required: boolean;
     scopes: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "inbound-only"
     | "outbound-only"
    | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "community" | "official" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  trustLevel: "community" | "official" | "verified" | "experimental";
};
```

###### capabilities

```ts
capabilities: {
  audiences?: ("customer-facing" | "internal-support" | "mixed")[];
  capability: string;
  changesWorkflow?: boolean;
  description?: string;
  exposesSensitiveData?: boolean;
  extension?: boolean;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerObjects?: {
     description?: string;
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName?: string;
  }[];
  requiresCredential?: boolean;
  sideEffect?: boolean;
}[];
```

###### category

```ts
category: string;
```

###### channelAudiences

```ts
channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
```

###### coverage

```ts
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
```

###### coverage.evidence

```ts
evidence: {
  label: string;
  url?: string;
}[];
```

###### coverage.notes

```ts
notes: string[];
```

###### coverage.scope

```ts
scope:
  | "support-workflow-subset"
  | "provider-api-subset"
  | "connector-required"
  | "local-protocol"
  | "full-provider-api";
```

###### credentialRequirements

```ts
credentialRequirements: {
  description?: string;
  id: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  required: boolean;
  scopes: string[];
}[];
```

###### directions

```ts
directions: (
  | "receive-only"
  | "send-only"
  | "inbound-only"
  | "outbound-only"
  | "bidirectional")[];
```

###### id

```ts
id: string;
```

###### limitations

```ts
limitations: string[];
```

###### maintainers

```ts
maintainers: {
  name: string;
  type: "community" | "official" | "unknown" | "partner";
  url?: string;
}[];
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### name

```ts
name: string;
```

###### operations

```ts
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outputSchema?: unknown;
  outputSchemaName?: string;
  outputSchemaRef?: string;
  providerObject?: string;
  providerObjects?: {
     description?: string;
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName?: string;
  }[];
  providerOperation?: string;
  requiredPolicyIds?: string[];
  requiresApproval?: boolean;
  requiresCredential?: boolean;
  sideEffect?: boolean;
}[];
```

###### packageName

```ts
packageName: string;
```

###### privacyNotes

```ts
privacyNotes: string[];
```

###### provider

```ts
provider: string;
```

###### trustLevel

```ts
trustLevel: "community" | "official" | "verified" | "experimental";
```

##### passed

```ts
passed: boolean;
```

##### status

```ts
status: "failed" | "passed" | "credential-blocked";
```

***

### ProviderLiveCheck

#### Properties

##### description?

```ts
optional description?: string;
```

##### id

```ts
id: string;
```

##### requiredCredentialIds?

```ts
optional requiredCredentialIds?: string[];
```

#### Methods

##### run()

```ts
run(context): Promise<
  | void
  | {
  details?: Record<string, unknown>;
}>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `context` | [`ProviderLiveCheckContext`](#providerlivecheckcontext) |

###### Returns

`Promise`\<
  \| `void`
  \| \{
  `details?`: `Record`\<`string`, `unknown`\>;
\}\>

***

### ProviderLiveCheckContext

#### Properties

##### credentialStatuses

```ts
credentialStatuses: {
  expiresAt?: string;
  message?: string;
  providerPackageId?: string;
  requirementId: string;
  scopes: string[];
  state:   | "required"
     | "configured"
     | "permission-blocked"
     | "not-required"
     | "missing"
     | "expired"
     | "insufficient-scope"
     | "unavailable";
}[];
```

###### expiresAt?

```ts
optional expiresAt?: string;
```

###### message?

```ts
optional message?: string;
```

###### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### requirementId

```ts
requirementId: string;
```

###### scopes

```ts
scopes: string[];
```

###### state

```ts
state:
  | "required"
  | "configured"
  | "permission-blocked"
  | "not-required"
  | "missing"
  | "expired"
  | "insufficient-scope"
  | "unavailable";
```

##### manifest

```ts
manifest: {
  capabilities: {
     audiences?: ("customer-facing" | "internal-support" | "mixed")[];
     capability: string;
     changesWorkflow?: boolean;
     description?: string;
     exposesSensitiveData?: boolean;
     extension?: boolean;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     required: boolean;
     scopes: string[];
  }[];
  directions: (
     | "receive-only"
     | "send-only"
     | "inbound-only"
     | "outbound-only"
    | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "community" | "official" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     outputSchema?: unknown;
     outputSchemaName?: string;
     outputSchemaRef?: string;
     providerObject?: string;
     providerObjects?: {
        description?: string;
        kind: string;
        label?: string;
        metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
  trustLevel: "community" | "official" | "verified" | "experimental";
};
```

###### capabilities

```ts
capabilities: {
  audiences?: ("customer-facing" | "internal-support" | "mixed")[];
  capability: string;
  changesWorkflow?: boolean;
  description?: string;
  exposesSensitiveData?: boolean;
  extension?: boolean;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  providerObjects?: {
     description?: string;
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName?: string;
  }[];
  requiresCredential?: boolean;
  sideEffect?: boolean;
}[];
```

###### category

```ts
category: string;
```

###### channelAudiences

```ts
channelAudiences: ("customer-facing" | "internal-support" | "mixed")[];
```

###### coverage

```ts
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
```

###### coverage.evidence

```ts
evidence: {
  label: string;
  url?: string;
}[];
```

###### coverage.notes

```ts
notes: string[];
```

###### coverage.scope

```ts
scope:
  | "support-workflow-subset"
  | "provider-api-subset"
  | "connector-required"
  | "local-protocol"
  | "full-provider-api";
```

###### credentialRequirements

```ts
credentialRequirements: {
  description?: string;
  id: string;
  label?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  required: boolean;
  scopes: string[];
}[];
```

###### directions

```ts
directions: (
  | "receive-only"
  | "send-only"
  | "inbound-only"
  | "outbound-only"
  | "bidirectional")[];
```

###### id

```ts
id: string;
```

###### limitations

```ts
limitations: string[];
```

###### maintainers

```ts
maintainers: {
  name: string;
  type: "community" | "official" | "unknown" | "partner";
  url?: string;
}[];
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### name

```ts
name: string;
```

###### operations

```ts
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
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  outputSchema?: unknown;
  outputSchemaName?: string;
  outputSchemaRef?: string;
  providerObject?: string;
  providerObjects?: {
     description?: string;
     kind: string;
     label?: string;
     metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
     schemaName?: string;
  }[];
  providerOperation?: string;
  requiredPolicyIds?: string[];
  requiresApproval?: boolean;
  requiresCredential?: boolean;
  sideEffect?: boolean;
}[];
```

###### packageName

```ts
packageName: string;
```

###### privacyNotes

```ts
privacyNotes: string[];
```

###### provider

```ts
provider: string;
```

###### trustLevel

```ts
trustLevel: "community" | "official" | "verified" | "experimental";
```

##### signal?

```ts
optional signal?: AbortSignal;
```

## Type Aliases

### CategoryOperationLevel

```ts
type CategoryOperationLevel = "required" | "recommended" | "optional" | "extension";
```

***

### IntegrationCategoryProfile

```ts
type IntegrationCategoryProfile = Omit<IntegrationCategoryProfileInput, "category" | "metadata" | "operations"> & {
  category: string;
  id?: string;
  metadata?: Record<string, unknown>;
  operations?: CategoryOperationDeclaration[];
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `category` | `string` |
| `id?` | `string` |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `operations?` | [`CategoryOperationDeclaration`](#categoryoperationdeclaration)[] |

***

### ProviderCategoryCoverageLevel

```ts
type ProviderCategoryCoverageLevel = "none" | "partial" | "standard" | "full";
```

***

### ProviderConformanceStatus

```ts
type ProviderConformanceStatus = "passed" | "failed" | "credential-blocked" | "skipped";
```

## Functions

### deriveProviderCategoryCoverage()

```ts
function deriveProviderCategoryCoverage(input): ProviderCategoryCoverage;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `categoryProfiles?`: [`IntegrationCategoryProfile`](#integrationcategoryprofile)[]; `manifest`: \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage?`: \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements?`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations?`: `string`[]; `maintainers?`: \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `name`: `string`; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes?`: `string`[]; `provider`: `string`; `trustLevel?`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \}; \} |
| `input.categoryProfiles?` | [`IntegrationCategoryProfile`](#integrationcategoryprofile)[] |
| `input.manifest` | \{ `capabilities`: \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `category`: `string`; `channelAudiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `coverage?`: \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \}; `credentialRequirements?`: \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[]; `directions`: ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[]; `id`: `string`; `limitations?`: `string`[]; `maintainers?`: \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[]; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `name`: `string`; `operations?`: \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[]; `packageName`: `string`; `privacyNotes?`: `string`[]; `provider`: `string`; `trustLevel?`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`; \} |
| `input.manifest.capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `input.manifest.category` | `string` |
| `input.manifest.channelAudiences?` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `input.manifest.coverage?` | \{ `evidence?`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes?`: `string`[]; `scope?`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `input.manifest.coverage.evidence?` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `input.manifest.coverage.notes?` | `string`[] |
| `input.manifest.coverage.scope?` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `input.manifest.credentialRequirements?` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `required?`: `boolean`; `scopes?`: `string`[]; \}[] |
| `input.manifest.directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `input.manifest.id` | `string` |
| `input.manifest.limitations?` | `string`[] |
| `input.manifest.maintainers?` | \{ `name`: `string`; `type?`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `input.manifest.metadata?` | `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\> |
| `input.manifest.name` | `string` |
| `input.manifest.operations?` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `input.manifest.packageName` | `string` |
| `input.manifest.privacyNotes?` | `string`[] |
| `input.manifest.provider` | `string` |
| `input.manifest.trustLevel?` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

#### Returns

[`ProviderCategoryCoverage`](#providercategorycoverage)

***

### runProviderConformance()

```ts
function runProviderConformance(input): Promise<ProviderConformanceResult>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ProviderConformanceInput`](#providerconformanceinput) |

#### Returns

`Promise`\<[`ProviderConformanceResult`](#providerconformanceresult)\>
