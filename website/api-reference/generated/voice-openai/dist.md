# voice-openai/dist

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

[`VoiceProvider`](../voice-websocket/dist.md#voiceprovider)
