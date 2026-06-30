# integrations/voice/openai/dist

## Interfaces

### OpenAIRealtimeEventSendInput

#### Properties

##### event

```ts
event: RealtimeClientEvent;
```

##### socket

```ts
socket: OpenAIRealtimeSocket;
```

***

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

### OpenAIRealtimeSessionStartInput

#### Extends

- [`OpenAIRealtimeSocketInput`](#openairealtimesocketinput)

#### Properties

##### model?

```ts
optional model?: string;
```

###### Inherited from

[`OpenAIRealtimeSocketInput`](#openairealtimesocketinput).[`model`](#model-2)

##### session?

```ts
optional session?: RealtimeSessionCreateRequest;
```

##### socket?

```ts
optional socket?: OpenAIRealtimeSocket;
```

***

### OpenAIRealtimeSessionStartResult

#### Properties

##### session

```ts
session: RealtimeSessionCreateRequest;
```

##### socket

```ts
socket: OpenAIRealtimeSocket;
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

### OpenAIRealtimeSocketInput

#### Extended by

- [`OpenAIRealtimeSessionStartInput`](#openairealtimesessionstartinput)

#### Properties

##### model?

```ts
optional model?: string;
```

***

### OpenAIRealtimeSpeakInput

#### Properties

##### id?

```ts
optional id?: string;
```

##### response?

```ts
optional response?: RealtimeResponseCreateParams;
```

##### socket

```ts
socket: OpenAIRealtimeSocket;
```

##### text?

```ts
optional text?: string;
```

***

### OpenAIRealtimeTurnFinalizeInput

#### Properties

##### eventId?

```ts
optional eventId?: string;
```

##### socket

```ts
socket: OpenAIRealtimeSocket;
```

***

### OpenAIVoiceClient

#### Methods

##### commitAudioTurn()

```ts
commitAudioTurn(input): RealtimeClientEvent;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OpenAIRealtimeTurnFinalizeInput`](#openairealtimeturnfinalizeinput) |

###### Returns

`RealtimeClientEvent`

##### createRealtimeResponse()

```ts
createRealtimeResponse(input): RealtimeClientEvent;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `response`: `RealtimeResponseCreateParams`; `socket`: [`OpenAIRealtimeSocket`](#openairealtimesocket); \} |
| `input.response` | `RealtimeResponseCreateParams` |
| `input.socket` | [`OpenAIRealtimeSocket`](#openairealtimesocket) |

###### Returns

`RealtimeClientEvent`

##### createRealtimeSocket()

```ts
createRealtimeSocket(input?): Promise<OpenAIRealtimeSocket>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`OpenAIRealtimeSocketInput`](#openairealtimesocketinput) |

###### Returns

`Promise`\<[`OpenAIRealtimeSocket`](#openairealtimesocket)\>

##### getRawClient()

```ts
getRawClient(): Promise<OpenAI>;
```

###### Returns

`Promise`\<`OpenAI`\>

##### sendRealtimeEvent()

```ts
sendRealtimeEvent(input): RealtimeClientEvent;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OpenAIRealtimeEventSendInput`](#openairealtimeeventsendinput) |

###### Returns

`RealtimeClientEvent`

##### speak()

```ts
speak(input): {
  event: RealtimeClientEvent;
  speechId?: string;
};
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`OpenAIRealtimeSpeakInput`](#openairealtimespeakinput) |

###### Returns

```ts
{
  event: RealtimeClientEvent;
  speechId?: string;
}
```

| Name | Type |
| ------ | ------ |
| `event` | `RealtimeClientEvent` |
| `speechId?` | `string` |

##### startRealtimeSession()

```ts
startRealtimeSession(input?): Promise<OpenAIRealtimeSessionStartResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input?` | [`OpenAIRealtimeSessionStartInput`](#openairealtimesessionstartinput) |

###### Returns

`Promise`\<[`OpenAIRealtimeSessionStartResult`](#openairealtimesessionstartresult)\>

##### updateRealtimeSession()

```ts
updateRealtimeSession(input): RealtimeClientEvent;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `session`: `RealtimeSessionCreateRequest`; `socket`: [`OpenAIRealtimeSocket`](#openairealtimesocket); \} |
| `input.session` | `RealtimeSessionCreateRequest` |
| `input.socket` | [`OpenAIRealtimeSocket`](#openairealtimesocket) |

###### Returns

`RealtimeClientEvent`

***

### OpenAIVoiceClientOptions

#### Properties

##### apiKey?

```ts
optional apiKey?: string;
```

##### baseURL?

```ts
optional baseURL?: string;
```

##### rawClient?

```ts
optional rawClient?: OpenAI;
```

##### realtime?

```ts
optional realtime?: OpenAIRealtimeFactory;
```

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

Raw official OpenAI SDK client. Prefer rawClient for new code.

##### model?

```ts
optional model?: "gpt-realtime-2";
```

##### rawClient?

```ts
optional rawClient?: OpenAI;
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

##### voiceClient?

```ts
optional voiceClient?: OpenAIVoiceClient;
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

### OpenAIRealtimeResponseCreateRequest

```ts
type OpenAIRealtimeResponseCreateRequest = NonNullable<Extract<RealtimeClientEvent, {
  type: "response.create";
}>["response"]>;
```

## Variables

### createOpenAIVoiceAdapter

```ts
const createOpenAIVoiceAdapter: typeof createOpenAIVoiceProvider;
```

***

### openAIVoiceIntegration

```ts
const openAIVoiceIntegration: DefinedIntegration<{
  capabilities: (
     | {
     audiences: "customer-facing"[];
     capability: string;
     changesWorkflow?: never;
     description: string;
     exposesSensitiveData: true;
     label: string;
     providerObjects: {
        kind: string;
        label: string;
     }[];
     requiresCredential: true;
     sideEffect?: never;
   }
     | {
     audiences: "customer-facing"[];
     capability: string;
     changesWorkflow?: never;
     description: string;
     exposesSensitiveData: true;
     label: string;
     providerObjects: {
        kind: string;
        label: string;
     }[];
     requiresCredential: true;
     sideEffect: true;
   }
     | {
     audiences: ("customer-facing" | "internal-support")[];
     capability: string;
     changesWorkflow: true;
     description: string;
     exposesSensitiveData?: never;
     label: string;
     providerObjects: {
        kind: string;
        label: string;
     }[];
     requiresCredential: true;
     sideEffect: true;
  })[];
  category: string;
  channelAudiences: ("customer-facing" | "mixed")[];
  coverage: {
     evidence: {
        label: string;
        url: string;
     }[];
     notes: string[];
     scope: "provider-api-subset";
  };
  credentialRequirements: {
     description: string;
     id: string;
     label: string;
     metadata: {
        minimumAccess: string[];
        projectScoped: boolean;
        scopeModel: string;
     };
     required: true;
  }[];
  directions: "bidirectional"[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "official";
  }[];
  metadata: {
     channelCoverage: {
        ephemeralSessionIssuance: string;
        outboundCalling: string;
        realtimeAudio: string;
        realtimeToolCalls: string;
        realtimeTranscript: string;
        telephony: string;
        transcriptionOnlySessions: string;
     };
     implementation: {
        adapterCoverage: string[];
        rawClientEscapeHatch: boolean;
        sdkPackage: string;
        sdkPackages: string[];
        strategy: string;
        verifiedAt: string;
        verifiedVersion: string;
     };
     integrationEntryPoints: {
        manifest: string;
        runtime: string;
     };
     integrationName: string;
     integrationPackageName: string;
     rawClient: {
        coverage: string;
        export: string;
        option: string;
     };
  };
  name: string;
  operations: (
     | {
     alias: string;
     capability: string;
     exposesSensitiveData: true;
     externallyVisible?: never;
     providerObject: string;
     providerOperation: string;
     requiresCredential: true;
     sideEffect?: never;
   }
     | {
     alias: string;
     capability: string;
     exposesSensitiveData?: never;
     externallyVisible: true;
     providerObject: string;
     providerOperation: string;
     requiresCredential: true;
     sideEffect: true;
  })[];
  packageName: string;
  privacyNotes: string[];
  provider: string;
  trustLevel: "official";
}, unknown, {
  voice.session.start: (input, context) => Promise<OpenAIRealtimeSessionStartResult>;
  voice.speak: (input, context) => Promise<{
     event: RealtimeClientEvent;
     speechId?: string;
  }>;
  voice.turn.finalize: (input, context) => Promise<OpenAI.Realtime.RealtimeClientEvent>;
}>;
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

### createOpenAIVoiceClient()

```ts
function createOpenAIVoiceClient(options?): OpenAIVoiceClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`OpenAIVoiceClientOptions`](#openaivoiceclientoptions) |

#### Returns

[`OpenAIVoiceClient`](#openaivoiceclient)

***

### createOpenAIVoiceOperationHandlers()

```ts
function createOpenAIVoiceOperationHandlers(options?): {
  voice.session.start: (input, context) => Promise<OpenAIRealtimeSessionStartResult>;
  voice.speak: (input, context) => Promise<{
     event: RealtimeClientEvent;
     speechId?: string;
  }>;
  voice.turn.finalize: (input, context) => Promise<RealtimeClientEvent>;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | \{ `voiceClient?`: [`OpenAIVoiceClient`](#openaivoiceclient); \} |
| `options.voiceClient?` | [`OpenAIVoiceClient`](#openaivoiceclient) |

#### Returns

```ts
{
  voice.session.start: (input, context) => Promise<OpenAIRealtimeSessionStartResult>;
  voice.speak: (input, context) => Promise<{
     event: RealtimeClientEvent;
     speechId?: string;
  }>;
  voice.turn.finalize: (input, context) => Promise<RealtimeClientEvent>;
}
```

| Name | Type |
| ------ | ------ |
| `voice.session.start()` | (`input`, `context`) => `Promise`\<[`OpenAIRealtimeSessionStartResult`](#openairealtimesessionstartresult)\> |
| `voice.speak()` | (`input`, `context`) => `Promise`\<\{ `event`: `RealtimeClientEvent`; `speechId?`: `string`; \}\> |
| `voice.turn.finalize()` | (`input`, `context`) => `Promise`\<`RealtimeClientEvent`\> |

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

[`VoiceProvider`](../../../packages/voice-websocket/dist.md#voiceprovider)

## References

### OPENAI\_REALTIME\_V1\_MODEL

Re-exports [OPENAI_REALTIME_V1_MODEL](dist/manifest.md#openai_realtime_v1_model)

***

### openAIVoiceManifestInput

Re-exports [openAIVoiceManifestInput](dist/manifest.md#openaivoicemanifestinput)

***

### openAIVoiceProviderManifest

Re-exports [openAIVoiceProviderManifest](dist/manifest.md#openaivoiceprovidermanifest)
