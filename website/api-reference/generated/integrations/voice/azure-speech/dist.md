# integrations/voice/azure-speech/dist

## Interfaces

### AzurePushAudioInputStream

#### Methods

##### close()

```ts
close(): void;
```

###### Returns

`void`

##### write()

```ts
write(buffer): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `buffer` | `ArrayBuffer` |

###### Returns

`void`

***

### AzureSpeechClient

#### Methods

##### synthesizeSpeech()

```ts
synthesizeSpeech(input): Promise<ArrayBuffer>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AzureTextToSpeechInput`](#azuretexttospeechinput) |

###### Returns

`Promise`\<`ArrayBuffer`\>

##### transcribeSpeech()

```ts
transcribeSpeech(input): Promise<AzureSpeechToTextResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AzureSpeechToTextInput`](#azurespeechtotextinput) |

###### Returns

`Promise`\<[`AzureSpeechToTextResult`](#azurespeechtotextresult)\>

***

### AzureSpeechClientOptions

#### Properties

##### region

```ts
region: string;
```

##### sdk?

```ts
optional sdk?: AzureSpeechSdk;
```

##### speechKey

```ts
speechKey: string;
```

***

### AzureSpeechConfig

#### Properties

##### speechRecognitionLanguage?

```ts
optional speechRecognitionLanguage?: string;
```

##### speechSynthesisLanguage?

```ts
optional speechSynthesisLanguage?: string;
```

##### speechSynthesisOutputFormat?

```ts
optional speechSynthesisOutputFormat?: unknown;
```

##### speechSynthesisVoiceName?

```ts
optional speechSynthesisVoiceName?: string;
```

#### Methods

##### setSpeechSynthesisOutputFormat()?

```ts
optional setSpeechSynthesisOutputFormat(format): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `format` | `unknown` |

###### Returns

`void`

***

### AzureSpeechCredentialStatusInput

#### Properties

##### region?

```ts
optional region?: string;
```

##### speechKey?

```ts
optional speechKey?: string;
```

***

### AzureSpeechRecognitionResult

#### Properties

##### duration?

```ts
optional duration?: number;
```

##### errorDetails?

```ts
optional errorDetails?: string;
```

##### offset?

```ts
optional offset?: number;
```

##### reason?

```ts
optional reason?: unknown;
```

##### text?

```ts
optional text?: string;
```

***

### AzureSpeechRecognizer

#### Methods

##### close()?

```ts
optional close(): void;
```

###### Returns

`void`

##### recognizeOnceAsync()

```ts
recognizeOnceAsync(success, error): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `success` | (`result`) => `void` |
| `error` | (`error`) => `void` |

###### Returns

`void`

***

### AzureSpeechSdk

#### Properties

##### AudioConfig

```ts
AudioConfig: {
  fromStreamInput: unknown;
};
```

###### fromStreamInput()

```ts
fromStreamInput(stream): unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `stream` | `unknown` |

###### Returns

`unknown`

##### AudioInputStream

```ts
AudioInputStream: {
  createPushStream: AzurePushAudioInputStream;
};
```

###### createPushStream()

```ts
createPushStream(format?): AzurePushAudioInputStream;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `format?` | `unknown` |

###### Returns

[`AzurePushAudioInputStream`](#azurepushaudioinputstream)

##### AudioStreamFormat

```ts
AudioStreamFormat: {
  getWaveFormatPCM: unknown;
};
```

###### getWaveFormatPCM()

```ts
getWaveFormatPCM(
   samplesPerSec,
   bitsPerSample,
   channels): unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `samplesPerSec` | `number` |
| `bitsPerSample` | `number` |
| `channels` | `number` |

###### Returns

`unknown`

##### ResultReason?

```ts
optional ResultReason?: Record<string, number | string>;
```

##### SpeechConfig

```ts
SpeechConfig: {
  fromSubscription: AzureSpeechConfig;
};
```

###### fromSubscription()

```ts
fromSubscription(speechKey, region): AzureSpeechConfig;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `speechKey` | `string` |
| `region` | `string` |

###### Returns

[`AzureSpeechConfig`](#azurespeechconfig)

##### SpeechRecognizer

```ts
SpeechRecognizer: (speechConfig, audioConfig) => AzureSpeechRecognizer;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `speechConfig` | [`AzureSpeechConfig`](#azurespeechconfig) |
| `audioConfig` | `unknown` |

###### Returns

[`AzureSpeechRecognizer`](#azurespeechrecognizer)

##### SpeechSynthesisOutputFormat?

```ts
optional SpeechSynthesisOutputFormat?: Record<string, number | string>;
```

##### SpeechSynthesizer

```ts
SpeechSynthesizer: (speechConfig, audioConfig?) => AzureSpeechSynthesizer;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `speechConfig` | [`AzureSpeechConfig`](#azurespeechconfig) |
| `audioConfig?` | `unknown` |

###### Returns

[`AzureSpeechSynthesizer`](#azurespeechsynthesizer)

***

### AzureSpeechSynthesisResult

#### Properties

##### audioData?

```ts
optional audioData?: ArrayBuffer;
```

##### errorDetails?

```ts
optional errorDetails?: string;
```

##### reason?

```ts
optional reason?: unknown;
```

***

### AzureSpeechSynthesizer

#### Methods

##### close()?

```ts
optional close(): void;
```

###### Returns

`void`

##### speakTextAsync()

```ts
speakTextAsync(
   text,
   success,
   error): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |
| `success` | (`result`) => `void` |
| `error` | (`error`) => `void` |

###### Returns

`void`

***

### AzureSpeechToTextInput

#### Properties

##### audio

```ts
audio: Uint8Array;
```

##### language?

```ts
optional language?: string;
```

##### sampleRate?

```ts
optional sampleRate?: number;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

***

### AzureSpeechToTextResult

#### Properties

##### duration?

```ts
optional duration?: number;
```

##### offset?

```ts
optional offset?: number;
```

##### raw?

```ts
optional raw?: unknown;
```

##### recognitionStatus?

```ts
optional recognitionStatus?: string;
```

##### text

```ts
text: string;
```

***

### AzureSpeechVoiceProviderOptions

#### Extends

- `Omit`\<`Partial`\<`SpeechPipelineVoiceProviderOptions`\>, `"provider"` \| `"transcriptionSource"` \| `"transcribe"` \| `"synthesize"`\>

#### Properties

##### client?

```ts
optional client?: AzureSpeechClient;
```

##### endSilenceMs?

```ts
optional endSilenceMs?: number;
```

###### Inherited from

```ts
Omit.endSilenceMs
```

##### id?

```ts
optional id?: string;
```

###### Inherited from

```ts
Omit.id
```

##### language?

```ts
optional language?: string;
```

##### maxSpeechMs?

```ts
optional maxSpeechMs?: number;
```

###### Inherited from

```ts
Omit.maxSpeechMs
```

##### minSpeechMs?

```ts
optional minSpeechMs?: number;
```

###### Inherited from

```ts
Omit.minSpeechMs
```

##### model?

```ts
optional model?: string;
```

###### Inherited from

```ts
Omit.model
```

##### outputFormat?

```ts
optional outputFormat?: string;
```

##### region?

```ts
optional region?: string;
```

##### sampleRate?

```ts
optional sampleRate?: number;
```

###### Inherited from

```ts
Omit.sampleRate
```

##### sdk?

```ts
optional sdk?: AzureSpeechSdk;
```

##### silenceThreshold?

```ts
optional silenceThreshold?: number;
```

###### Inherited from

```ts
Omit.silenceThreshold
```

##### speechKey?

```ts
optional speechKey?: string;
```

##### voiceName

```ts
voiceName: string;
```

***

### AzureTextToSpeechInput

#### Properties

##### language?

```ts
optional language?: string;
```

##### outputFormat?

```ts
optional outputFormat?: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### text

```ts
text: string;
```

##### voiceName

```ts
voiceName: string;
```

## Variables

### createAzureSpeechVoiceAdapter

```ts
const createAzureSpeechVoiceAdapter: typeof createAzureSpeechVoiceProvider;
```

## Functions

### azureSpeechCredentialStatuses()

```ts
function azureSpeechCredentialStatuses(input): {
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

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AzureSpeechCredentialStatusInput`](#azurespeechcredentialstatusinput) |

#### Returns

\{
  `expiresAt?`: `string`;
  `message?`: `string`;
  `providerPackageId?`: `string`;
  `requirementId`: `string`;
  `scopes?`: `string`[];
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

### createAzureSpeechClient()

```ts
function createAzureSpeechClient(options): AzureSpeechClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AzureSpeechClientOptions`](#azurespeechclientoptions) |

#### Returns

[`AzureSpeechClient`](#azurespeechclient)

***

### createAzureSpeechVoiceProvider()

```ts
function createAzureSpeechVoiceProvider(options): VoiceProvider;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AzureSpeechVoiceProviderOptions`](#azurespeechvoiceprovideroptions) |

#### Returns

[`VoiceProvider`](../../../packages/voice-websocket/dist.md#voiceprovider)

## References

### azureSpeechIntegration

Re-exports [azureSpeechIntegration](dist/manifest.md#azurespeechintegration)

***

### azureSpeechProviderManifest

Re-exports [azureSpeechProviderManifest](dist/manifest.md#azurespeechprovidermanifest)
