# integrations/voice/google-speech/dist

## Interfaces

### GoogleSpeechClient

#### Methods

##### synthesizeSpeech()

```ts
synthesizeSpeech(input): Promise<ArrayBuffer>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GoogleTextToSpeechInput`](#googletexttospeechinput) |

###### Returns

`Promise`\<`ArrayBuffer`\>

##### transcribeSpeech()

```ts
transcribeSpeech(input): Promise<GoogleSpeechToTextResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`GoogleSpeechToTextInput`](#googlespeechtotextinput) |

###### Returns

`Promise`\<[`GoogleSpeechToTextResult`](#googlespeechtotextresult)\>

***

### GoogleSpeechClientOptions

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### clientOptions?

```ts
optional clientOptions?: object;
```

##### getAccessToken?

```ts
optional getAccessToken?: GoogleSpeechAccessTokenProvider;
```

##### quotaProjectId?

```ts
optional quotaProjectId?: string;
```

##### speechClient?

```ts
optional speechClient?: SpeechClient;
```

##### textToSpeechClient?

```ts
optional textToSpeechClient?: TextToSpeechClient;
```

***

### GoogleSpeechCredentialStatusInput

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### hasAccessTokenProvider?

```ts
optional hasAccessTokenProvider?: boolean;
```

***

### GoogleSpeechJsonObject

#### Indexable

```ts
[key: string]: GoogleSpeechJsonValue
```

***

### GoogleSpeechOperationRequestInput

#### Properties

##### body?

```ts
optional body?: GoogleSpeechJsonValue;
```

##### contentType?

```ts
optional contentType?: string;
```

##### headers?

```ts
optional headers?: Record<string, string>;
```

##### pathParams?

```ts
optional pathParams?: Record<string, string | number>;
```

##### query?

```ts
optional query?: Record<string, GoogleSpeechJsonValue | undefined>;
```

##### responseType?

```ts
optional responseType?: "response" | "json" | "arrayBuffer" | "stream";
```

***

### GoogleSpeechToTextInput

#### Properties

##### audio

```ts
audio: Uint8Array;
```

##### enableAutomaticPunctuation?

```ts
optional enableAutomaticPunctuation?: boolean;
```

##### encoding?

```ts
optional encoding?: string;
```

##### languageCode?

```ts
optional languageCode?: string;
```

##### maxAlternatives?

```ts
optional maxAlternatives?: number;
```

##### model?

```ts
optional model?: string;
```

##### profanityFilter?

```ts
optional profanityFilter?: boolean;
```

##### sampleRate?

```ts
optional sampleRate?: number;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### useEnhanced?

```ts
optional useEnhanced?: boolean;
```

***

### GoogleSpeechToTextResult

#### Properties

##### confidence?

```ts
optional confidence?: number;
```

##### languageCode?

```ts
optional languageCode?: string;
```

##### raw?

```ts
optional raw?: GoogleSpeechJsonObject;
```

##### requestId?

```ts
optional requestId?: string;
```

##### text

```ts
text: string;
```

##### totalBilledTime?

```ts
optional totalBilledTime?: string;
```

***

### GoogleSpeechVoiceProviderOptions

#### Extends

- `Omit`\<`Partial`\<`SpeechPipelineVoiceProviderOptions`\>, `"provider"` \| `"transcriptionSource"` \| `"transcribe"` \| `"synthesize"`\>

#### Properties

##### accessToken?

```ts
optional accessToken?: string;
```

##### audioEncoding?

```ts
optional audioEncoding?: string;
```

##### client?

```ts
optional client?: GoogleSpeechClient;
```

##### clientOptions?

```ts
optional clientOptions?: object;
```

##### effectsProfileId?

```ts
optional effectsProfileId?: readonly string[];
```

##### enableAutomaticPunctuation?

```ts
optional enableAutomaticPunctuation?: boolean;
```

##### endSilenceMs?

```ts
optional endSilenceMs?: number;
```

###### Inherited from

```ts
Omit.endSilenceMs
```

##### getAccessToken?

```ts
optional getAccessToken?: GoogleSpeechAccessTokenProvider;
```

##### id?

```ts
optional id?: string;
```

###### Inherited from

```ts
Omit.id
```

##### languageCode?

```ts
optional languageCode?: string;
```

##### maxAlternatives?

```ts
optional maxAlternatives?: number;
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

##### outputSampleRate?

```ts
optional outputSampleRate?: number;
```

##### pitch?

```ts
optional pitch?: number;
```

##### profanityFilter?

```ts
optional profanityFilter?: boolean;
```

##### quotaProjectId?

```ts
optional quotaProjectId?: string;
```

##### recognitionEncoding?

```ts
optional recognitionEncoding?: string;
```

##### recognitionModel?

```ts
optional recognitionModel?: string;
```

##### sampleRate?

```ts
optional sampleRate?: number;
```

###### Inherited from

```ts
Omit.sampleRate
```

##### silenceThreshold?

```ts
optional silenceThreshold?: number;
```

###### Inherited from

```ts
Omit.silenceThreshold
```

##### speakingRate?

```ts
optional speakingRate?: number;
```

##### speechClient?

```ts
optional speechClient?: SpeechClient;
```

##### ssmlGender?

```ts
optional ssmlGender?: string;
```

##### stripLinear16WavHeader?

```ts
optional stripLinear16WavHeader?: boolean;
```

##### textToSpeechClient?

```ts
optional textToSpeechClient?: TextToSpeechClient;
```

##### useEnhanced?

```ts
optional useEnhanced?: boolean;
```

##### voiceLanguageCode?

```ts
optional voiceLanguageCode?: string;
```

##### voiceName

```ts
voiceName: string;
```

##### volumeGainDb?

```ts
optional volumeGainDb?: number;
```

***

### GoogleTextToSpeechInput

#### Properties

##### audioEncoding?

```ts
optional audioEncoding?: string;
```

##### effectsProfileId?

```ts
optional effectsProfileId?: readonly string[];
```

##### languageCode?

```ts
optional languageCode?: string;
```

##### pitch?

```ts
optional pitch?: number;
```

##### sampleRateHertz?

```ts
optional sampleRateHertz?: number;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### speakingRate?

```ts
optional speakingRate?: number;
```

##### ssmlGender?

```ts
optional ssmlGender?: string;
```

##### text

```ts
text: string;
```

##### voiceName?

```ts
optional voiceName?: string;
```

##### volumeGainDb?

```ts
optional volumeGainDb?: number;
```

## Type Aliases

### GoogleSpeechAccessTokenProvider

```ts
type GoogleSpeechAccessTokenProvider = (input) => string | Promise<string>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `signal?`: `AbortSignal`; \} |
| `input.signal?` | `AbortSignal` |

#### Returns

`string` \| `Promise`\<`string`\>

***

### GoogleSpeechJsonPrimitive

```ts
type GoogleSpeechJsonPrimitive = string | number | boolean | null;
```

***

### GoogleSpeechJsonValue

```ts
type GoogleSpeechJsonValue =
  | GoogleSpeechJsonPrimitive
  | GoogleSpeechJsonObject
  | readonly GoogleSpeechJsonValue[];
```

***

### GoogleSpeechRecognitionEncoding

```ts
type GoogleSpeechRecognitionEncoding =
  | "ENCODING_UNSPECIFIED"
  | "LINEAR16"
  | "FLAC"
  | "MULAW"
  | "AMR"
  | "AMR_WB"
  | "OGG_OPUS"
  | "SPEEX_WITH_HEADER_BYTE"
  | "MP3"
  | "WEBM_OPUS"
  | "ALAW"
  | string;
```

***

### GoogleSpeechResource

```ts
type GoogleSpeechResource = GoogleSpeechJsonValue;
```

***

### GoogleTextToSpeechAudioEncoding

```ts
type GoogleTextToSpeechAudioEncoding =
  | "AUDIO_ENCODING_UNSPECIFIED"
  | "LINEAR16"
  | "MP3"
  | "OGG_OPUS"
  | "MULAW"
  | "ALAW"
  | string;
```

***

### GoogleTextToSpeechSsmlGender

```ts
type GoogleTextToSpeechSsmlGender = "SSML_VOICE_GENDER_UNSPECIFIED" | "MALE" | "FEMALE" | "NEUTRAL" | string;
```

## Functions

### createGoogleSpeechClient()

```ts
function createGoogleSpeechClient(options): GoogleSpeechClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GoogleSpeechClientOptions`](#googlespeechclientoptions) |

#### Returns

[`GoogleSpeechClient`](#googlespeechclient)

***

### createGoogleSpeechRawClients()

```ts
function createGoogleSpeechRawClients(options): {
  speechClient: SpeechClient;
  textToSpeechClient: TextToSpeechClient;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GoogleSpeechClientOptions`](#googlespeechclientoptions) |

#### Returns

```ts
{
  speechClient: SpeechClient;
  textToSpeechClient: TextToSpeechClient;
}
```

| Name | Type |
| ------ | ------ |
| `speechClient` | `SpeechClient` |
| `textToSpeechClient` | `TextToSpeechClient` |

***

### createGoogleSpeechVoiceProvider()

```ts
function createGoogleSpeechVoiceProvider(options): VoiceProvider;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GoogleSpeechVoiceProviderOptions`](#googlespeechvoiceprovideroptions) |

#### Returns

[`VoiceProvider`](../../../packages/voice-websocket/dist.md#voiceprovider)

***

### googleSpeechCredentialStatuses()

```ts
function googleSpeechCredentialStatuses(input): {
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
| `input` | [`GoogleSpeechCredentialStatusInput`](#googlespeechcredentialstatusinput) |

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

## References

### googleSpeechIntegration

Re-exports [googleSpeechIntegration](dist/manifest.md#googlespeechintegration)

***

### googleSpeechProviderManifest

Re-exports [googleSpeechProviderManifest](dist/manifest.md#googlespeechprovidermanifest)
