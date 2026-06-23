# packages/integration-kit/dist/testing

## Interfaces

### IntegrationConformanceIssue

#### Properties

##### alias

```ts
alias: string;
```

##### code

```ts
code: IntegrationConformanceIssueCode;
```

##### message

```ts
message: string;
```

***

### IntegrationConformanceSubject

#### Properties

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

##### operations

```ts
operations: Record<string, unknown>;
```

## Type Aliases

### IntegrationConformanceIssueCode

```ts
type IntegrationConformanceIssueCode =
  | "missing-operation-handler"
  | "extra-operation-handler"
  | "invalid-extension-operation-alias";
```

## Functions

### assertIntegrationConformance()

```ts
function assertIntegrationConformance(subject): OperationBindingReport;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `subject` | [`IntegrationConformanceSubject`](#integrationconformancesubject) |

#### Returns

[`OperationBindingReport`](../dist.md#operationbindingreport)

***

### collectIntegrationConformanceIssues()

```ts
function collectIntegrationConformanceIssues(subject): IntegrationConformanceIssue[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `subject` | [`IntegrationConformanceSubject`](#integrationconformancesubject) |

#### Returns

[`IntegrationConformanceIssue`](#integrationconformanceissue)[]

***

### createOperationHandlerStubs()

```ts
function createOperationHandlerStubs(manifest, handler?): Record<string, IntegrationOperationHandler>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manifest` | `Pick`\<[`ProviderManifest`](../../core/dist.md#providermanifest), `"operations"`\> |
| `handler?` | [`IntegrationOperationHandler`](../dist.md#integrationoperationhandler) |

#### Returns

`Record`\<`string`, [`IntegrationOperationHandler`](../dist.md#integrationoperationhandler)\>

***

### expectProviderExtensionAliasNamespace()

```ts
function expectProviderExtensionAliasNamespace(manifest, alias): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manifest` | `Pick`\<[`ProviderManifest`](../../core/dist.md#providermanifest), `"id"` \| `"provider"` \| `"packageName"`\> |
| `alias` | `string` |

#### Returns

`void`
