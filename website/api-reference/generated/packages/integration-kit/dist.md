# packages/integration-kit/dist

## Classes

### IntegrationError

#### Extends

- `Error`

#### Implements

- [`NormalizedIntegrationErrorShape`](#normalizedintegrationerrorshape)

#### Constructors

##### Constructor

```ts
new IntegrationError(
   code,
   message,
   context?): IntegrationError;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `code` | [`IntegrationErrorCode`](#integrationerrorcode-1) |
| `message` | `string` |
| `context?` | [`IntegrationErrorContext`](#integrationerrorcontext) & \{ `cause?`: `unknown`; \} |

###### Returns

[`IntegrationError`](#integrationerror)

###### Overrides

```ts
Error.constructor
```

#### Properties

##### code

```ts
readonly code: IntegrationErrorCode;
```

###### Implementation of

[`NormalizedIntegrationErrorShape`](#normalizedintegrationerrorshape).[`code`](#code-1)

##### details?

```ts
readonly optional details?: Record<string, unknown>;
```

###### Implementation of

[`NormalizedIntegrationErrorShape`](#normalizedintegrationerrorshape).[`details`](#details-2)

##### name

```ts
readonly name: "IntegrationError" = "IntegrationError";
```

###### Implementation of

[`NormalizedIntegrationErrorShape`](#normalizedintegrationerrorshape).[`name`](#name-1)

###### Overrides

```ts
Error.name
```

##### operationAlias?

```ts
readonly optional operationAlias?: string;
```

###### Implementation of

[`NormalizedIntegrationErrorShape`](#normalizedintegrationerrorshape).[`operationAlias`](#operationalias-4)

##### provider?

```ts
readonly optional provider?: string;
```

###### Implementation of

[`NormalizedIntegrationErrorShape`](#normalizedintegrationerrorshape).[`provider`](#provider-4)

##### providerPackageId?

```ts
readonly optional providerPackageId?: string;
```

###### Implementation of

[`NormalizedIntegrationErrorShape`](#normalizedintegrationerrorshape).[`providerPackageId`](#providerpackageid-5)

##### requestId?

```ts
readonly optional requestId?: string;
```

###### Implementation of

[`NormalizedIntegrationErrorShape`](#normalizedintegrationerrorshape).[`requestId`](#requestid-2)

##### retryable?

```ts
readonly optional retryable?: boolean;
```

###### Implementation of

[`NormalizedIntegrationErrorShape`](#normalizedintegrationerrorshape).[`retryable`](#retryable-2)

##### statusCode?

```ts
readonly optional statusCode?: number;
```

###### Implementation of

[`NormalizedIntegrationErrorShape`](#normalizedintegrationerrorshape).[`statusCode`](#statuscode-2)

## Interfaces

### CursorPaginationInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Cursor` *extends* `string` | `string` |

#### Properties

##### cursor?

```ts
optional cursor?: Cursor;
```

##### limit?

```ts
optional limit?: number;
```

***

### DefinedIntegration

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Manifest` *extends* [`ProviderManifestAuthorInput`](#providermanifestauthorinput) | - |
| `Credentials` | `unknown` |
| `Handlers` *extends* [`IntegrationOperationHandlers`](#integrationoperationhandlers)\<`Credentials`\> | [`IntegrationOperationHandlers`](#integrationoperationhandlers)\<`Credentials`\> |

#### Properties

##### bindingReport

```ts
bindingReport: OperationBindingReport;
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
} & Manifest;
```

###### Type Declaration

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

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### operationAliases

```ts
operationAliases: ManifestOperationAlias<Manifest>[];
```

##### operations

```ts
operations: Handlers;
```

#### Methods

##### getOperationHandler()

```ts
getOperationHandler<Alias>(alias): Handlers[Alias];
```

###### Type Parameters

| Type Parameter |
| ------ |
| `Alias` *extends* `string` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `alias` | `Alias` |

###### Returns

`Handlers`\[`Alias`\]

##### requireOperationHandler()

```ts
requireOperationHandler<Alias>(alias): Handlers[Alias];
```

###### Type Parameters

| Type Parameter |
| ------ |
| `Alias` *extends* `string` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `alias` | `Alias` |

###### Returns

`Handlers`\[`Alias`\]

##### run()

```ts
run<Alias>(
   alias,
   input,
context?): Promise<Awaited<ReturnType<Handlers[Alias]>>>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `Alias` *extends* `string` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `alias` | `Alias` |
| `input` | `Parameters`\<`Handlers`\[`Alias`\]\>\[`0`\] |
| `context?` | `Partial`\<[`IntegrationOperationContext`](#integrationoperationcontext)\<`Credentials`\>\> |

###### Returns

`Promise`\<`Awaited`\<`ReturnType`\<`Handlers`\[`Alias`\]\>\>\>

***

### DefineIntegrationInput

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Manifest` *extends* [`ProviderManifestAuthorInput`](#providermanifestauthorinput) | - |
| `Credentials` | `unknown` |
| `Handlers` *extends* [`IntegrationOperationHandlers`](#integrationoperationhandlers)\<`Credentials`\> | [`IntegrationOperationHandlers`](#integrationoperationhandlers)\<`Credentials`\> |

#### Properties

##### credentials?

```ts
optional credentials?: Credentials;
```

##### instrumentation?

```ts
optional instrumentation?: IntegrationInstrumentationHooks;
```

##### manifest

```ts
manifest: Manifest;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### operations

```ts
operations: ExactIntegrationOperationHandlers<Manifest, Handlers>;
```

***

### IntegrationErrorContext

#### Extended by

- [`NormalizedIntegrationErrorShape`](#normalizedintegrationerrorshape)

#### Properties

##### details?

```ts
optional details?: Record<string, unknown>;
```

##### operationAlias?

```ts
optional operationAlias?: string;
```

##### provider?

```ts
optional provider?: string;
```

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

##### requestId?

```ts
optional requestId?: string;
```

##### retryable?

```ts
optional retryable?: boolean;
```

##### statusCode?

```ts
optional statusCode?: number;
```

***

### IntegrationInstrumentationEvent

#### Properties

##### durationMs?

```ts
optional durationMs?: number;
```

##### error?

```ts
optional error?: NormalizedIntegrationErrorShape;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### operationAlias

```ts
operationAlias: string;
```

##### phase

```ts
phase: "error" | "start" | "success";
```

##### provider?

```ts
optional provider?: string;
```

##### providerPackageId

```ts
providerPackageId: string;
```

##### startedAt

```ts
startedAt: number;
```

***

### IntegrationInstrumentationHooks

#### Methods

##### onOperationError()?

```ts
optional onOperationError(event): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`IntegrationInstrumentationEvent`](#integrationinstrumentationevent) |

###### Returns

`void`

##### onOperationStart()?

```ts
optional onOperationStart(event): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`IntegrationInstrumentationEvent`](#integrationinstrumentationevent) |

###### Returns

`void`

##### onOperationSuccess()?

```ts
optional onOperationSuccess(event): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | [`IntegrationInstrumentationEvent`](#integrationinstrumentationevent) |

###### Returns

`void`

***

### IntegrationOperationContext

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Credentials` | `unknown` |

#### Properties

##### abortSignal?

```ts
optional abortSignal?: AbortSignal;
```

##### credentials?

```ts
optional credentials?: Credentials;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### operationAlias

```ts
operationAlias: string;
```

##### provider

```ts
provider: string;
```

##### providerPackageId

```ts
providerPackageId: string;
```

***

### IntegrationPage

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Item` | - |
| `Cursor` *extends* `string` | `string` |

#### Properties

##### items

```ts
items: Item[];
```

##### pageInfo

```ts
pageInfo: PageInfo<Cursor>;
```

##### raw?

```ts
optional raw?: unknown;
```

***

### IntegrationProviderProfileAttachment

#### Properties

##### conformant

```ts
conformant: boolean;
```

##### coverage

```ts
coverage: "full" | "partial" | "standard";
```

##### extensionOperations

```ts
extensionOperations: string[];
```

##### id

```ts
id: string;
```

##### matchedOperations

```ts
matchedOperations: string[];
```

##### missingOptionalOperations

```ts
missingOptionalOperations: string[];
```

##### missingRecommendedOperations

```ts
missingRecommendedOperations: string[];
```

##### missingRequiredOperations

```ts
missingRequiredOperations: string[];
```

***

### IntegrationReadinessSummary

#### Properties

##### blockingRequirementIds

```ts
blockingRequirementIds: string[];
```

##### expiredRequirementIds

```ts
expiredRequirementIds: string[];
```

##### insufficientScopeRequirementIds

```ts
insufficientScopeRequirementIds: string[];
```

##### missingRequirementIds

```ts
missingRequirementIds: string[];
```

##### permissionBlockedRequirementIds

```ts
permissionBlockedRequirementIds: string[];
```

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

##### ready

```ts
ready: boolean;
```

##### statuses

```ts
statuses: {
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

***

### NormalizedIntegrationErrorShape

#### Extends

- [`IntegrationErrorContext`](#integrationerrorcontext)

#### Properties

##### cause?

```ts
optional cause?: unknown;
```

##### code

```ts
code: IntegrationErrorCode;
```

##### details?

```ts
optional details?: Record<string, unknown>;
```

###### Inherited from

[`IntegrationErrorContext`](#integrationerrorcontext).[`details`](#details-1)

##### message

```ts
message: string;
```

##### name

```ts
name: "IntegrationError";
```

##### operationAlias?

```ts
optional operationAlias?: string;
```

###### Inherited from

[`IntegrationErrorContext`](#integrationerrorcontext).[`operationAlias`](#operationalias-1)

##### provider?

```ts
optional provider?: string;
```

###### Inherited from

[`IntegrationErrorContext`](#integrationerrorcontext).[`provider`](#provider-1)

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

###### Inherited from

[`IntegrationErrorContext`](#integrationerrorcontext).[`providerPackageId`](#providerpackageid-1)

##### requestId?

```ts
optional requestId?: string;
```

###### Inherited from

[`IntegrationErrorContext`](#integrationerrorcontext).[`requestId`](#requestid-1)

##### retryable?

```ts
optional retryable?: boolean;
```

###### Inherited from

[`IntegrationErrorContext`](#integrationerrorcontext).[`retryable`](#retryable-1)

##### statusCode?

```ts
optional statusCode?: number;
```

###### Inherited from

[`IntegrationErrorContext`](#integrationerrorcontext).[`statusCode`](#statuscode-1)

***

### OffsetPaginationInput

#### Properties

##### limit?

```ts
optional limit?: number;
```

##### offset?

```ts
optional offset?: number;
```

***

### OperationBindingReport

#### Properties

##### declaredOperationAliases

```ts
declaredOperationAliases: string[];
```

##### extraHandlerAliases

```ts
extraHandlerAliases: string[];
```

##### handlerOperationAliases

```ts
handlerOperationAliases: string[];
```

##### invalidExtensionOperationAliases

```ts
invalidExtensionOperationAliases: string[];
```

##### missingHandlerAliases

```ts
missingHandlerAliases: string[];
```

***

### PageInfo

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Cursor` *extends* `string` | `string` |

#### Properties

##### hasNextPage

```ts
hasNextPage: boolean;
```

##### hasPreviousPage?

```ts
optional hasPreviousPage?: boolean;
```

##### nextCursor?

```ts
optional nextCursor?: Cursor;
```

##### previousCursor?

```ts
optional previousCursor?: Cursor;
```

***

### ParsedWebhookEvent

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Payload` | `unknown` |

#### Properties

##### eventId?

```ts
optional eventId?: string;
```

##### eventType

```ts
eventType: string;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### payload

```ts
payload: Payload;
```

##### providerPackageId

```ts
providerPackageId: string;
```

##### rawBody?

```ts
optional rawBody?: string | Uint8Array<ArrayBufferLike>;
```

##### receivedAt

```ts
receivedAt: string;
```

***

### ProviderJsonRequestInput

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### apiKey?

```ts
optional apiKey?: string;
```

##### apiKeyHeaderName?

```ts
optional apiKeyHeaderName?: string;
```

##### authorizationHeader?

```ts
optional authorizationHeader?: string;
```

##### baseUrl

```ts
baseUrl: string;
```

##### body?

```ts
optional body?: unknown;
```

##### fetch?

```ts
optional fetch?: {
  (input, init?): Promise<Response>;
  (input, init?): Promise<Response>;
};
```

###### Call Signature

```ts
(input, init?): Promise<Response>;
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `URL` \| `RequestInfo` |
| `init?` | `RequestInit` |

###### Returns

`Promise`\<`Response`\>

###### Call Signature

```ts
(input, init?): Promise<Response>;
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| `Request` \| `URL` |
| `init?` | `RequestInit` |

###### Returns

`Promise`\<`Response`\>

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### idempotencyKey?

```ts
optional idempotencyKey?: string;
```

##### method?

```ts
optional method?: ProviderHttpMethod;
```

##### path

```ts
path: string;
```

##### pathParams?

```ts
optional pathParams?: Record<string, string | number | boolean>;
```

##### providerName?

```ts
optional providerName?: string;
```

##### query?

```ts
optional query?: Record<string, ProviderQueryValue>;
```

##### retry?

```ts
optional retry?: number | ProviderJsonRetryOptions;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### timeoutMs?

```ts
optional timeoutMs?: number;
```

***

### ProviderJsonRetryOptions

#### Properties

##### attempts?

```ts
optional attempts?: number;
```

##### baseDelayMs?

```ts
optional baseDelayMs?: number;
```

##### maxDelayMs?

```ts
optional maxDelayMs?: number;
```

##### statusCodes?

```ts
optional statusCodes?: readonly number[];
```

***

### ProviderManifestAuthorInput

#### Properties

##### category

```ts
category: string;
```

##### id

```ts
id: string;
```

##### metadata?

```ts
optional metadata?: unknown;
```

##### name

```ts
name: string;
```

##### operations?

```ts
optional operations?: readonly {
  alias: string;
}[];
```

##### packageName

```ts
packageName: string;
```

##### provider

```ts
provider: string;
```

***

### WebhookHandlerResult

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Payload` | `unknown` |

#### Properties

##### event?

```ts
optional event?: ParsedWebhookEvent<Payload>;
```

##### response?

```ts
optional response?: {
  body?: unknown;
  headers?: Record<string, string>;
  status: number;
};
```

###### body?

```ts
optional body?: unknown;
```

###### headers?

```ts
optional headers?: Record<string, string>;
```

###### status

```ts
status: number;
```

##### verification

```ts
verification: WebhookVerificationResult;
```

***

### WebhookVerificationResult

#### Properties

##### eventId?

```ts
optional eventId?: string;
```

##### eventType?

```ts
optional eventType?: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### metadata?

```ts
optional metadata?: Record<string, unknown>;
```

##### providerPackageId?

```ts
optional providerPackageId?: string;
```

##### reason?

```ts
optional reason?: string;
```

##### status

```ts
status: WebhookVerificationStatus;
```

## Type Aliases

### ExactIntegrationOperationHandlers

```ts
type ExactIntegrationOperationHandlers<Manifest, Handlers> = Handlers & MissingOperationHandlers<Manifest, Handlers> & ExtraOperationHandlers<Manifest, Handlers>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `Manifest` |
| `Handlers` *extends* `AnyIntegrationOperationHandlers` |

***

### IntegrationErrorCode

```ts
type IntegrationErrorCode =
  | "contract-violation"
  | "credential-missing"
  | "not-ready"
  | "provider-auth"
  | "provider-permission"
  | "provider-rate-limited"
  | "provider-timeout"
  | "provider-unavailable"
  | "provider-validation"
  | "webhook-verification-failed"
  | "unknown";
```

***

### IntegrationOperationHandler

```ts
type IntegrationOperationHandler<Input, Output, Credentials> = (input, context) => Output | Promise<Output>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Input` | `unknown` |
| `Output` | `unknown` |
| `Credentials` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Input` |
| `context` | [`IntegrationOperationContext`](#integrationoperationcontext)\<`Credentials`\> |

#### Returns

`Output` \| `Promise`\<`Output`\>

***

### IntegrationOperationHandlers

```ts
type IntegrationOperationHandlers<Credentials> = Record<string, IntegrationOperationHandler<any, any, Credentials>>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Credentials` | `unknown` |

***

### ManifestOperationAlias

```ts
type ManifestOperationAlias<Manifest> = Manifest extends {
  operations: readonly infer Operation[];
} ? Operation extends {
  alias: infer Alias;
} ? Alias : never : Manifest extends {
  operations?: readonly infer Operation[];
} ? Operation extends {
  alias: infer Alias;
} ? Alias : never : never;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `Manifest` |

***

### ProviderHttpMethod

```ts
type ProviderHttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
```

***

### ProviderNamespacedOperationAlias

```ts
type ProviderNamespacedOperationAlias<Provider> = `${Provider}.${string}`;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `Provider` *extends* `string` |

***

### ProviderQueryValue

```ts
type ProviderQueryValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | readonly (string | number | boolean)[];
```

***

### WebhookVerificationStatus

```ts
type WebhookVerificationStatus = "verified" | "rejected" | "skipped";
```

## Functions

### assertIntegrationReady()

```ts
function assertIntegrationReady(summary): void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `summary` | [`IntegrationReadinessSummary`](#integrationreadinesssummary) |

#### Returns

`void`

***

### collectIntegrationPages()

```ts
function collectIntegrationPages<Item, Cursor>(
   firstPage,
   loadPage,
options?): Promise<Item[]>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Item` | - |
| `Cursor` *extends* `string` | `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `firstPage` | [`CursorPaginationInput`](#cursorpaginationinput)\<`Cursor`\> |
| `loadPage` | (`input`) => \| [`IntegrationPage`](#integrationpage)\<`Item`, `Cursor`\> \| `Promise`\<[`IntegrationPage`](#integrationpage)\<`Item`, `Cursor`\>\> |
| `options?` | \{ `maxPages?`: `number`; \} |
| `options.maxPages?` | `number` |

#### Returns

`Promise`\<`Item`[]\>

***

### createOperationBindingReport()

```ts
function createOperationBindingReport(manifest, handlers): OperationBindingReport;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manifest` | `Pick`\<[`ProviderManifest`](../core/dist.md#providermanifest), `"operations"` \| `"provider"` \| `"id"` \| `"category"` \| `"packageName"`\> |
| `handlers` | `Record`\<`string`, `unknown`\> |

#### Returns

[`OperationBindingReport`](#operationbindingreport)

***

### createOperationInstrumentation()

```ts
function createOperationInstrumentation(input): {
  error: void;
  success: void;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `hooks?`: [`IntegrationInstrumentationHooks`](#integrationinstrumentationhooks); `metadata?`: `Record`\<`string`, `unknown`\>; `operationAlias`: `string`; `provider?`: `string`; `providerPackageId`: `string`; \} |
| `input.hooks?` | [`IntegrationInstrumentationHooks`](#integrationinstrumentationhooks) |
| `input.metadata?` | `Record`\<`string`, `unknown`\> |
| `input.operationAlias` | `string` |
| `input.provider?` | `string` |
| `input.providerPackageId` | `string` |

#### Returns

```ts
{
  error: void;
  success: void;
}
```

| Name | Type |
| ------ | ------ |
| `error()` | (`error`, `metadata?`) => `void` |
| `success()` | (`metadata?`) => `void` |

***

### credentialConfigured()

```ts
function credentialConfigured(input): {
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
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `message?`: `string`; `providerPackageId?`: `string`; `requirementId`: `string`; `scopes?`: readonly `string`[]; \} |
| `input.message?` | `string` |
| `input.providerPackageId?` | `string` |
| `input.requirementId` | `string` |
| `input.scopes?` | readonly `string`[] |

#### Returns

```ts
{
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
}
```

| Name | Type |
| ------ | ------ |
| `expiresAt?` | `string` |
| `message?` | `string` |
| `providerPackageId?` | `string` |
| `requirementId` | `string` |
| `scopes?` | `string`[] |
| `state` | \| `"required"` \| `"configured"` \| `"permission-blocked"` \| `"not-required"` \| `"missing"` \| `"expired"` \| `"insufficient-scope"` \| `"unavailable"` |

***

### credentialMissing()

```ts
function credentialMissing(input): {
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
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `message?`: `string`; `providerPackageId?`: `string`; `requirementId`: `string`; `scopes?`: readonly `string`[]; \} |
| `input.message?` | `string` |
| `input.providerPackageId?` | `string` |
| `input.requirementId` | `string` |
| `input.scopes?` | readonly `string`[] |

#### Returns

```ts
{
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
}
```

| Name | Type |
| ------ | ------ |
| `expiresAt?` | `string` |
| `message?` | `string` |
| `providerPackageId?` | `string` |
| `requirementId` | `string` |
| `scopes?` | `string`[] |
| `state` | \| `"required"` \| `"configured"` \| `"permission-blocked"` \| `"not-required"` \| `"missing"` \| `"expired"` \| `"insufficient-scope"` \| `"unavailable"` |

***

### credentialNotRequired()

```ts
function credentialNotRequired(input): {
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
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `message?`: `string`; `providerPackageId?`: `string`; `requirementId`: `string`; \} |
| `input.message?` | `string` |
| `input.providerPackageId?` | `string` |
| `input.requirementId` | `string` |

#### Returns

```ts
{
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
}
```

| Name | Type |
| ------ | ------ |
| `expiresAt?` | `string` |
| `message?` | `string` |
| `providerPackageId?` | `string` |
| `requirementId` | `string` |
| `scopes?` | `string`[] |
| `state` | \| `"required"` \| `"configured"` \| `"permission-blocked"` \| `"not-required"` \| `"missing"` \| `"expired"` \| `"insufficient-scope"` \| `"unavailable"` |

***

### credentialStatusesFromManifest()

```ts
function credentialStatusesFromManifest(manifest, configuredRequirementIds): {
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

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manifest` | `Pick`\<[`ProviderManifest`](../core/dist.md#providermanifest), `"id"` \| `"credentialRequirements"`\> |
| `configuredRequirementIds` | `Iterable`\<`string`\> |

#### Returns

\{
  `expiresAt?`: `string`;
  `message?`: `string`;
  `providerPackageId?`: `string`;
  `requirementId`: `string`;
  `scopes`: `string`[];
  `state`:   \| `"required"`
     \| `"configured"`
     \| `"permission-blocked"`
     \| `"not-required"`
     \| `"missing"`
     \| `"expired"`
     \| `"insufficient-scope"`
     \| `"unavailable"`;
\}[]

***

### defineIntegration()

```ts
function defineIntegration<Manifest, Credentials, Handlers>(input): DefinedIntegration<Manifest, Credentials, Handlers>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Manifest` *extends* [`ProviderManifestAuthorInput`](#providermanifestauthorinput) | - |
| `Credentials` | `unknown` |
| `Handlers` *extends* [`IntegrationOperationHandlers`](#integrationoperationhandlers)\<`Credentials`\> | [`IntegrationOperationHandlers`](#integrationoperationhandlers)\<`Credentials`\> |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`DefineIntegrationInput`](#defineintegrationinput)\<`Manifest`, `Credentials`, `Handlers`\> |

#### Returns

[`DefinedIntegration`](#definedintegration)\<`Manifest`, `Credentials`, `Handlers`\>

***

### defineIntegrationProviderPackage()

```ts
function defineIntegrationProviderPackage<Manifest>(manifest): {
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
} & Manifest;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `Manifest` *extends* [`ProviderManifestAuthorInput`](#providermanifestauthorinput) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manifest` | `Manifest` |

#### Returns

\{
  `capabilities`: \{
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension?`: `boolean`;
     `label?`: `string`;
     `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
        `schemaName?`: `string`;
     \}[];
     `requiresCredential?`: `boolean`;
     `sideEffect?`: `boolean`;
  \}[];
  `category`: `string`;
  `channelAudiences`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
  `coverage`: \{
     `evidence`: \{
        `label`: `string`;
        `url?`: `string`;
     \}[];
     `notes`: `string`[];
     `scope`:   \| `"support-workflow-subset"`
        \| `"provider-api-subset"`
        \| `"connector-required"`
        \| `"local-protocol"`
        \| `"full-provider-api"`;
  \};
  `credentialRequirements`: \{
     `description?`: `string`;
     `id`: `string`;
     `label?`: `string`;
     `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
     `required`: `boolean`;
     `scopes`: `string`[];
  \}[];
  `directions`: (
     \| `"receive-only"`
     \| `"send-only"`
     \| `"inbound-only"`
     \| `"outbound-only"`
    \| `"bidirectional"`)[];
  `id`: `string`;
  `limitations`: `string`[];
  `maintainers`: \{
     `name`: `string`;
     `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`;
     `url?`: `string`;
  \}[];
  `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
  `name`: `string`;
  `operations`: \{
     `alias`: `string`;
     `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`;
     `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[];
     `capability`: `string`;
     `changesWorkflow?`: `boolean`;
     `description?`: `string`;
     `exposesSensitiveData?`: `boolean`;
     `extension`: `boolean`;
     `externallyVisible?`: `boolean`;
     `inputSchema?`: `unknown`;
     `inputSchemaName?`: `string`;
     `inputSchemaRef?`: `string`;
     `label?`: `string`;
     `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
     `outputSchema?`: `unknown`;
     `outputSchemaName?`: `string`;
     `outputSchemaRef?`: `string`;
     `providerObject?`: `string`;
     `providerObjects?`: \{
        `description?`: `string`;
        `kind`: `string`;
        `label?`: `string`;
        `metadata?`: `z.ZodOptional`\<`z.ZodRecord`\<`z.ZodString`, `z.ZodUnknown`\>\>;
        `schemaName?`: `string`;
     \}[];
     `providerOperation?`: `string`;
     `requiredPolicyIds?`: `string`[];
     `requiresApproval?`: `boolean`;
     `requiresCredential?`: `boolean`;
     `sideEffect?`: `boolean`;
  \}[];
  `packageName`: `string`;
  `privacyNotes`: `string`[];
  `provider`: `string`;
  `trustLevel`: `"community"` \| `"official"` \| `"verified"` \| `"experimental"`;
\} & `Manifest`

***

### integrationErrorToJSON()

```ts
function integrationErrorToJSON(error): NormalizedIntegrationErrorShape;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | [`IntegrationError`](#integrationerror) |

#### Returns

[`NormalizedIntegrationErrorShape`](#normalizedintegrationerrorshape)

***

### integrationPage()

```ts
function integrationPage<Item, Cursor>(input): IntegrationPage<Item, Cursor>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Item` | - |
| `Cursor` *extends* `string` | `string` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `hasNextPage?`: `boolean`; `hasPreviousPage?`: `boolean`; `items`: readonly `Item`[]; `nextCursor?`: `Cursor`; `previousCursor?`: `Cursor`; `raw?`: `unknown`; \} |
| `input.hasNextPage?` | `boolean` |
| `input.hasPreviousPage?` | `boolean` |
| `input.items` | readonly `Item`[] |
| `input.nextCursor?` | `Cursor` |
| `input.previousCursor?` | `Cursor` |
| `input.raw?` | `unknown` |

#### Returns

[`IntegrationPage`](#integrationpage)\<`Item`, `Cursor`\>

***

### isProviderNamespacedOperationAlias()

```ts
function isProviderNamespacedOperationAlias(alias, manifest): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `alias` | `string` |
| `manifest` | `Pick`\<[`ProviderManifest`](../core/dist.md#providermanifest), `"id"` \| `"provider"` \| `"packageName"`\> |

#### Returns

`boolean`

***

### normalizeIntegrationError()

```ts
function normalizeIntegrationError(error, context?): IntegrationError;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `error` | `unknown` |
| `context?` | [`IntegrationErrorContext`](#integrationerrorcontext) |

#### Returns

[`IntegrationError`](#integrationerror)

***

### parsedWebhookEvent()

```ts
function parsedWebhookEvent<Payload>(input): ParsedWebhookEvent<Payload>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `Payload` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `eventId?`: `string`; `eventType`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `payload`: `Payload`; `providerPackageId`: `string`; `rawBody?`: `string` \| `Uint8Array`\<`ArrayBufferLike`\>; `receivedAt?`: `string`; \} |
| `input.eventId?` | `string` |
| `input.eventType` | `string` |
| `input.metadata?` | `Record`\<`string`, `unknown`\> |
| `input.payload` | `Payload` |
| `input.providerPackageId` | `string` |
| `input.rawBody?` | `string` \| `Uint8Array`\<`ArrayBufferLike`\> |
| `input.receivedAt?` | `string` |

#### Returns

[`ParsedWebhookEvent`](#parsedwebhookevent)\<`Payload`\>

***

### providerJsonRequest()

```ts
function providerJsonRequest<T>(input): Promise<T>;
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`ProviderJsonRequestInput`](#providerjsonrequestinput) |

#### Returns

`Promise`\<`T`\>

***

### providerOperationAliasNamespaces()

```ts
function providerOperationAliasNamespaces(manifest): readonly string[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `manifest` | `Pick`\<[`ProviderManifest`](../core/dist.md#providermanifest), `"id"` \| `"provider"` \| `"packageName"`\> |

#### Returns

readonly `string`[]

***

### providerRequestUrl()

```ts
function providerRequestUrl(input): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Pick`\<[`ProviderJsonRequestInput`](#providerjsonrequestinput), `"baseUrl"` \| `"path"` \| `"pathParams"` \| `"query"`\> |

#### Returns

`string`

***

### rejectedWebhook()

```ts
function rejectedWebhook(input): WebhookVerificationResult;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Omit`\<[`WebhookVerificationResult`](#webhookverificationresult), `"status"`\> & \{ `reason`: `string`; \} |

#### Returns

[`WebhookVerificationResult`](#webhookverificationresult)

***

### skippedWebhookVerification()

```ts
function skippedWebhookVerification(input): WebhookVerificationResult;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Omit`\<[`WebhookVerificationResult`](#webhookverificationresult), `"status"`\> & \{ `reason`: `string`; \} |

#### Returns

[`WebhookVerificationResult`](#webhookverificationresult)

***

### summarizeIntegrationReadiness()

```ts
function summarizeIntegrationReadiness(statusesInput, options?): IntegrationReadinessSummary;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `statusesInput` | readonly \{ `expiresAt?`: `string`; `message?`: `string`; `providerPackageId?`: `string`; `requirementId`: `string`; `scopes?`: `string`[]; `state`: \| `"required"` \| `"configured"` \| `"permission-blocked"` \| `"not-required"` \| `"missing"` \| `"expired"` \| `"insufficient-scope"` \| `"unavailable"`; \}[] |
| `options?` | \{ `providerPackageId?`: `string`; `requiredRequirementIds?`: readonly `string`[]; \} |
| `options.providerPackageId?` | `string` |
| `options.requiredRequirementIds?` | readonly `string`[] |

#### Returns

[`IntegrationReadinessSummary`](#integrationreadinesssummary)

***

### verifiedWebhook()

```ts
function verifiedWebhook(input?): WebhookVerificationResult;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | `Omit`\<[`WebhookVerificationResult`](#webhookverificationresult), `"status"`\> |

#### Returns

[`WebhookVerificationResult`](#webhookverificationresult)

## References

### CategoryCoverageLevel

Re-exports [CategoryCoverageLevel](dist/category-profiles.md#categorycoveragelevel)

***

### CategoryDataSourceDeclaration

Re-exports [CategoryDataSourceDeclaration](../core/dist.md#categorydatasourcedeclaration)

***

### CategoryEventDeclaration

Re-exports [CategoryEventDeclaration](../core/dist.md#categoryeventdeclaration)

***

### CategoryOperationAliasMap

Re-exports [CategoryOperationAliasMap](dist/category-profiles.md#categoryoperationaliasmap)

***

### CategoryOperationDeclaration

Re-exports [CategoryOperationDeclaration](../core/dist.md#categoryoperationdeclaration)

***

### CategoryOperationLevel

Re-exports [CategoryOperationLevel](../core/dist.md#categoryoperationlevel)

***

### CategoryOutputDeclaration

Re-exports [CategoryOutputDeclaration](../core/dist.md#categoryoutputdeclaration)

***

### ChannelCapabilityDeclaration

Re-exports [ChannelCapabilityDeclaration](../core/dist.md#channelcapabilitydeclaration)

***

### contactCenterCategoryProfile

Re-exports [contactCenterCategoryProfile](dist/category-profiles.md#contactcentercategoryprofile)

***

### ContactCenterOperationAlias

Re-exports [ContactCenterOperationAlias](dist/category-profiles.md#contactcenteroperationalias)

***

### contactCenterOperationAliasMap

Re-exports [contactCenterOperationAliasMap](dist/category-profiles.md#contactcenteroperationaliasmap)

***

### ecommerceCategoryProfile

Re-exports [ecommerceCategoryProfile](dist/category-profiles.md#ecommercecategoryprofile)

***

### EcommerceOperationAlias

Re-exports [EcommerceOperationAlias](dist/category-profiles.md#ecommerceoperationalias)

***

### ecommerceOperationAliasMap

Re-exports [ecommerceOperationAliasMap](dist/category-profiles.md#ecommerceoperationaliasmap)

***

### emailCategoryProfile

Re-exports [emailCategoryProfile](dist/category-profiles.md#emailcategoryprofile)

***

### EmailOperationAlias

Re-exports [EmailOperationAlias](dist/category-profiles.md#emailoperationalias)

***

### emailOperationAliasMap

Re-exports [emailOperationAliasMap](dist/category-profiles.md#emailoperationaliasmap)

***

### getIntegrationCategoryProfile

Re-exports [getIntegrationCategoryProfile](dist/category-profiles.md#getintegrationcategoryprofile)

***

### handoffCategoryProfile

Re-exports [handoffCategoryProfile](dist/category-profiles.md#handoffcategoryprofile)

***

### integrationCategoryOperationAliasMaps

Re-exports [integrationCategoryOperationAliasMaps](dist/category-profiles.md#integrationcategoryoperationaliasmaps)

***

### IntegrationCategoryProfile

Re-exports [IntegrationCategoryProfile](dist/category-profiles.md#integrationcategoryprofile)

***

### IntegrationCategoryProfileId

Re-exports [IntegrationCategoryProfileId](dist/category-profiles.md#integrationcategoryprofileid-1)

***

### integrationCategoryProfiles

Re-exports [integrationCategoryProfiles](dist/category-profiles.md#integrationcategoryprofiles)

***

### integrationCategoryProfilesByCategory

Re-exports [integrationCategoryProfilesByCategory](dist/category-profiles.md#integrationcategoryprofilesbycategory)

***

### messagingCategoryProfile

Re-exports [messagingCategoryProfile](dist/category-profiles.md#messagingcategoryprofile)

***

### OperationSchemaDescriptor

Re-exports [OperationSchemaDescriptor](dist/category-profiles.md#operationschemadescriptor)

***

### ProviderCapabilityCoverage

Re-exports [ProviderCapabilityCoverage](dist/category-profiles.md#providercapabilitycoverage)

***

### ProviderCredentialRequirement

Re-exports [ProviderCredentialRequirement](../core/dist.md#providercredentialrequirement)

***

### ProviderCredentialStatus

Re-exports [ProviderCredentialStatus](../core/dist.md#providercredentialstatus)

***

### ProviderCredentialStatusInput

Re-exports [ProviderCredentialStatusInput](../core/dist.md#providercredentialstatusinput)

***

### ProviderManifest

Re-exports [ProviderManifest](../core/dist.md#providermanifest)

***

### ProviderManifestInput

Re-exports [ProviderManifestInput](../core/dist.md#providermanifestinput)

***

### ProviderOperationDeclaration

Re-exports [ProviderOperationDeclaration](../core/dist.md#provideroperationdeclaration)

***

### ProviderOperationDeclarationInput

Re-exports [ProviderOperationDeclarationInput](../core/dist.md#provideroperationdeclarationinput)

***

### requireIntegrationCategoryProfile

Re-exports [requireIntegrationCategoryProfile](dist/category-profiles.md#requireintegrationcategoryprofile)

***

### smsCategoryProfile

Re-exports [smsCategoryProfile](dist/category-profiles.md#smscategoryprofile)

***

### SmsOperationAlias

Re-exports [SmsOperationAlias](dist/category-profiles.md#smsoperationalias)

***

### smsOperationAliasMap

Re-exports [smsOperationAliasMap](dist/category-profiles.md#smsoperationaliasmap)

***

### ticketingCategoryProfile

Re-exports [ticketingCategoryProfile](dist/category-profiles.md#ticketingcategoryprofile)

***

### TicketingOperationAlias

Re-exports [TicketingOperationAlias](dist/category-profiles.md#ticketingoperationalias)

***

### ticketingOperationAliasMap

Re-exports [ticketingOperationAliasMap](dist/category-profiles.md#ticketingoperationaliasmap)

***

### voiceCategoryProfile

Re-exports [voiceCategoryProfile](dist/category-profiles.md#voicecategoryprofile)

***

### VoiceOperationAlias

Re-exports [VoiceOperationAlias](dist/category-profiles.md#voiceoperationalias)

***

### voiceOperationAliasMap

Re-exports [voiceOperationAliasMap](dist/category-profiles.md#voiceoperationaliasmap)

***

### workplaceCategoryProfile

Re-exports [workplaceCategoryProfile](dist/category-profiles.md#workplacecategoryprofile)

***

### WorkplaceOperationAlias

Re-exports [WorkplaceOperationAlias](dist/category-profiles.md#workplaceoperationalias)

***

### workplaceOperationAliasMap

Re-exports [workplaceOperationAliasMap](dist/category-profiles.md#workplaceoperationaliasmap)
