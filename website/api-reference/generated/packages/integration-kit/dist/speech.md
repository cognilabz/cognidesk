# packages/integration-kit/dist/speech

## Interfaces

### SpeechPipelineSynthesis

#### Properties

##### audio

```ts
audio:
  | ArrayBuffer
  | Uint8Array<ArrayBufferLike>
| ReadableStream<Uint8Array<ArrayBufferLike>>;
```

##### metadata?

```ts
optional metadata?: VoiceJsonObject;
```

##### transcript?

```ts
optional transcript?: string;
```

***

### SpeechPipelineSynthesizeInput

#### Properties

##### profile?

```ts
optional profile?: VoiceProfile;
```

##### session

```ts
session: VoiceSocketSession;
```

##### signal

```ts
signal: AbortSignal;
```

##### text

```ts
text: string;
```

***

### SpeechPipelineTranscribeInput

#### Properties

##### audio

```ts
audio: Uint8Array;
```

##### profile?

```ts
optional profile?: VoiceProfile;
```

##### sampleRate

```ts
sampleRate: number;
```

##### session

```ts
session: VoiceSocketSession;
```

##### signal

```ts
signal: AbortSignal;
```

***

### SpeechPipelineTranscription

#### Properties

##### endedAtMs?

```ts
optional endedAtMs?: number;
```

##### itemId?

```ts
optional itemId?: string;
```

##### metadata?

```ts
optional metadata?: VoiceJsonObject;
```

##### startedAtMs?

```ts
optional startedAtMs?: number;
```

##### text

```ts
text: string;
```

***

### SpeechPipelineVoiceProviderOptions

#### Properties

##### endSilenceMs?

```ts
optional endSilenceMs?: number;
```

##### id

```ts
id: string;
```

##### maxSpeechMs?

```ts
optional maxSpeechMs?: number;
```

##### minSpeechMs?

```ts
optional minSpeechMs?: number;
```

##### model?

```ts
optional model?: string;
```

##### provider

```ts
provider: string;
```

##### sampleRate?

```ts
optional sampleRate?: number;
```

##### silenceThreshold?

```ts
optional silenceThreshold?: number;
```

##### transcriptionSource

```ts
transcriptionSource: string;
```

#### Methods

##### synthesize()

```ts
synthesize(input): Promise<SpeechPipelineSynthesis>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SpeechPipelineSynthesizeInput`](#speechpipelinesynthesizeinput) |

###### Returns

`Promise`\<[`SpeechPipelineSynthesis`](#speechpipelinesynthesis)\>

##### transcribe()

```ts
transcribe(input): Promise<SpeechPipelineTranscription>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`SpeechPipelineTranscribeInput`](#speechpipelinetranscribeinput) |

###### Returns

`Promise`\<[`SpeechPipelineTranscription`](#speechpipelinetranscription)\>

## Functions

### createSpeechPipelineVoiceProvider()

```ts
function createSpeechPipelineVoiceProvider(options): VoiceProvider;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`SpeechPipelineVoiceProviderOptions`](#speechpipelinevoiceprovideroptions) |

#### Returns

[`VoiceProvider`](../../voice-websocket/dist.md#voiceprovider)

***

### pcm16WavBlob()

```ts
function pcm16WavBlob(audio, sampleRate?): Blob;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `audio` | `Uint8Array` |
| `sampleRate?` | `number` |

#### Returns

`Blob`

***

### pcm16WavBytes()

```ts
function pcm16WavBytes(audio, sampleRate?): Uint8Array<ArrayBuffer>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `audio` | `Uint8Array` |
| `sampleRate?` | `number` |

#### Returns

`Uint8Array`\<`ArrayBuffer`\>
