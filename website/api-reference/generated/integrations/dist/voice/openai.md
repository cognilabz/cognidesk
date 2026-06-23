# integrations/dist/voice/openai

## Interfaces

### OpenAIRealtimeFactoryInput

#### Properties

##### client

```ts
client: OpenAI;
```

##### model

```ts
model: "gpt-realtime-2";
```

***

### OpenAIRealtimeSocket

#### Methods

##### close()

```ts
close(props?): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `props?` | \{ `code`: `number`; `reason`: `string`; \} |
| `props.code?` | `number` |
| `props.reason?` | `string` |

###### Returns

`void`

##### on()

###### Call Signature

```ts
on(event, listener): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"event"` |
| `listener` | (`event`) => `void` |

###### Returns

`void`

###### Call Signature

```ts
on(event, listener): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `"error"` |
| `listener` | (`error`) => `void` |

###### Returns

`void`

##### send()

```ts
send(event): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `RealtimeClientEvent` |

###### Returns

`void`

***

### OpenAIVoiceProviderOptions

#### Properties

##### apiKey?

```ts
optional apiKey?: string;
```

##### baseURL?

```ts
optional baseURL?: string;
```

##### client?

```ts
optional client?: OpenAI;
```

##### model?

```ts
optional model?: "gpt-realtime-2";
```

##### realtime?

```ts
optional realtime?: OpenAIRealtimeFactory;
```

##### sessionDefaults?

```ts
optional sessionDefaults?: Partial<RealtimeSessionCreateRequest>;
```

##### transcriptionLanguage?

```ts
optional transcriptionLanguage?: string;
```

##### voice?

```ts
optional voice?: string;
```

***

### VoiceOpenaiJsonObject

#### Extended by

- [`VoiceOpenaiProviderExtensionFields`](#voiceopenaiproviderextensionfields)
- [`VoiceOpenaiProviderResponse`](#voiceopenaiproviderresponse)

#### Indexable

```ts
[key: string]: VoiceOpenaiProviderExtensionValue
```

***

### VoiceOpenaiProviderExtensionFields

#### Extends

- [`VoiceOpenaiJsonObject`](#voiceopenaijsonobject)

#### Indexable

```ts
[key: string]: VoiceOpenaiProviderExtensionValue
```

***

### VoiceOpenaiProviderResponse

#### Extends

- [`VoiceOpenaiJsonObject`](#voiceopenaijsonobject)

#### Indexable

```ts
[key: string]: VoiceOpenaiProviderExtensionValue
```

## Type Aliases

### OpenAIRealtimeFactory

```ts
type OpenAIRealtimeFactory = (input) => Promise<OpenAIRealtimeSocket>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OpenAIRealtimeFactoryInput`](#openairealtimefactoryinput) |

#### Returns

`Promise`\<[`OpenAIRealtimeSocket`](#openairealtimesocket)\>

***

### VoiceOpenaiJsonPrimitive

```ts
type VoiceOpenaiJsonPrimitive = string | number | boolean | null;
```

***

### VoiceOpenaiJsonValue

```ts
type VoiceOpenaiJsonValue =
  | VoiceOpenaiJsonPrimitive
  | VoiceOpenaiJsonObject
  | readonly VoiceOpenaiJsonValue[];
```

***

### VoiceOpenaiProviderExtensionValue

```ts
type VoiceOpenaiProviderExtensionValue = VoiceOpenaiJsonValue | object | undefined;
```

***

### VoiceOpenaiProviderPayload

```ts
type VoiceOpenaiProviderPayload = VoiceOpenaiJsonObject | object;
```

***

### VoiceOpenaiProviderQuery

```ts
type VoiceOpenaiProviderQuery = Record<string, VoiceOpenaiProviderExtensionValue>;
```

## Variables

### createOpenAIVoiceAdapter

```ts
const createOpenAIVoiceAdapter: typeof createOpenAIVoiceProvider;
```

***

### OPENAI\_REALTIME\_V1\_MODEL

```ts
const OPENAI_REALTIME_V1_MODEL: "gpt-realtime-2" = "gpt-realtime-2";
```

***

### openAIVoiceProviderManifest

```ts
const openAIVoiceProviderManifest: {
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
  trustLevel: "community" | "official" | "verified" | "experimental";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| <a id="property-category"></a> `category` | `string` |
| <a id="property-channelaudiences"></a> `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| <a id="property-directions"></a> `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| <a id="property-id"></a> `id` | `string` |
| <a id="property-limitations"></a> `limitations` | `string`[] |
| <a id="property-maintainers"></a> `maintainers` | \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| <a id="property-metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> |
| <a id="property-name"></a> `name` | `string` |
| <a id="property-operations"></a> `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| <a id="property-packagename"></a> `packageName` | `string` |
| <a id="property-privacynotes"></a> `privacyNotes` | `string`[] |
| <a id="property-provider"></a> `provider` | `string` |
| <a id="property-trustlevel"></a> `trustLevel` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

## Functions

### createOpenAIRealtimeSocket()

```ts
function createOpenAIRealtimeSocket(input): Promise<OpenAIRealtimeSocket>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OpenAIRealtimeFactoryInput`](#openairealtimefactoryinput) |

#### Returns

`Promise`\<[`OpenAIRealtimeSocket`](#openairealtimesocket)\>

***

### createOpenAIVoiceProvider()

```ts
function createOpenAIVoiceProvider(options?): VoiceProvider;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`OpenAIVoiceProviderOptions`](#openaivoiceprovideroptions) |

#### Returns

[`VoiceProvider`](../../../voice-websocket/dist.md#voiceprovider)
