# integrations/voice/aws-speech/dist

## Interfaces

### AwsPollySynthesizeCommandInput

#### Properties

##### Engine?

```ts
optional Engine?: AwsPollyEngine;
```

##### LanguageCode?

```ts
optional LanguageCode?: string;
```

##### LexiconNames?

```ts
optional LexiconNames?: string[];
```

##### OutputFormat

```ts
OutputFormat: AwsPollyOutputFormat;
```

##### SampleRate?

```ts
optional SampleRate?: string;
```

##### Text

```ts
Text: string;
```

##### TextType?

```ts
optional TextType?: AwsPollyTextType;
```

##### VoiceId

```ts
VoiceId: string;
```

***

### AwsPollySynthesizeCommandOutput

#### Properties

##### AudioStream?

```ts
optional AudioStream?: unknown;
```

##### ContentType?

```ts
optional ContentType?: string;
```

##### RequestCharacters?

```ts
optional RequestCharacters?: number;
```

***

### AwsPollySynthesizeSpeechInput

#### Properties

##### engine?

```ts
optional engine?: AwsPollyEngine;
```

##### languageCode?

```ts
optional languageCode?: string;
```

##### lexiconNames?

```ts
optional lexiconNames?: string[];
```

##### outputFormat?

```ts
optional outputFormat?: AwsPollyOutputFormat;
```

##### sampleRate?

```ts
optional sampleRate?: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### text

```ts
text: string;
```

##### textType?

```ts
optional textType?: AwsPollyTextType;
```

##### voiceId

```ts
voiceId: string;
```

***

### AwsPollySynthesizeSpeechResult

#### Properties

##### audio

```ts
audio:
  | ArrayBuffer
  | Uint8Array<ArrayBufferLike>
| ReadableStream<Uint8Array<ArrayBufferLike>>;
```

##### contentType?

```ts
optional contentType?: string;
```

##### outputFormat?

```ts
optional outputFormat?: AwsPollyOutputFormat;
```

##### requestCharacters?

```ts
optional requestCharacters?: number;
```

***

### AwsSdkCommandClient

#### Type Parameters

| Type Parameter |
| ------ |
| `Output` |

#### Methods

##### send()

```ts
send(command, options?): Promise<Output>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `command` | `unknown` |
| `options?` | \{ `abortSignal?`: `AbortSignal`; \} |
| `options.abortSignal?` | `AbortSignal` |

###### Returns

`Promise`\<`Output`\>

***

### AwsSdkCommandConstructor

#### Type Parameters

| Type Parameter |
| ------ |
| `Input` |

#### Constructors

##### Constructor

```ts
new AwsSdkCommandConstructor(input): unknown;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `Input` |

###### Returns

`unknown`

***

### AwsSdkSpeechClientOptions

#### Properties

##### pollyClient

```ts
pollyClient: AwsSdkCommandClient<AwsPollySynthesizeCommandOutput>;
```

##### StartStreamTranscriptionCommand

```ts
StartStreamTranscriptionCommand: AwsSdkCommandConstructor<AwsTranscribeStreamingCommandInput>;
```

##### SynthesizeSpeechCommand

```ts
SynthesizeSpeechCommand: AwsSdkCommandConstructor<AwsPollySynthesizeCommandInput>;
```

##### transcribeStreamingClient

```ts
transcribeStreamingClient: AwsSdkCommandClient<AwsTranscribeStreamingCommandOutput>;
```

***

### AwsSpeechClient

#### Methods

##### synthesizeSpeech()

```ts
synthesizeSpeech(input): Promise<AwsPollySynthesizeSpeechResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AwsPollySynthesizeSpeechInput`](#awspollysynthesizespeechinput) |

###### Returns

`Promise`\<[`AwsPollySynthesizeSpeechResult`](#awspollysynthesizespeechresult)\>

##### transcribeSpeech()

```ts
transcribeSpeech(input): Promise<AwsTranscribeSpeechResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AwsTranscribeSpeechInput`](#awstranscribespeechinput) |

###### Returns

`Promise`\<[`AwsTranscribeSpeechResult`](#awstranscribespeechresult)\>

***

### AwsSpeechClientOptions

#### Extends

- [`AwsSpeechCredentialStatusInput`](#awsspeechcredentialstatusinput)

#### Properties

##### accessKeyId?

```ts
optional accessKeyId?: string;
```

###### Inherited from

[`AwsSpeechCredentialStatusInput`](#awsspeechcredentialstatusinput).[`accessKeyId`](#accesskeyid-1)

##### pollyClient?

```ts
optional pollyClient?: PollyClient;
```

##### pollyClientConfig?

```ts
optional pollyClientConfig?: PollyClientConfig;
```

##### region?

```ts
optional region?: string;
```

###### Inherited from

[`AwsSpeechCredentialStatusInput`](#awsspeechcredentialstatusinput).[`region`](#region-1)

##### secretAccessKey?

```ts
optional secretAccessKey?: string;
```

###### Inherited from

[`AwsSpeechCredentialStatusInput`](#awsspeechcredentialstatusinput).[`secretAccessKey`](#secretaccesskey-1)

##### sessionToken?

```ts
optional sessionToken?: string;
```

###### Inherited from

[`AwsSpeechCredentialStatusInput`](#awsspeechcredentialstatusinput).[`sessionToken`](#sessiontoken-1)

##### transcribeStreamingClient?

```ts
optional transcribeStreamingClient?: TranscribeStreamingClient;
```

##### transcribeStreamingClientConfig?

```ts
optional transcribeStreamingClientConfig?: TranscribeStreamingClientConfig;
```

***

### AwsSpeechCredentialStatusInput

#### Extended by

- [`AwsSpeechClientOptions`](#awsspeechclientoptions)

#### Properties

##### accessKeyId?

```ts
optional accessKeyId?: string;
```

##### region?

```ts
optional region?: string;
```

##### secretAccessKey?

```ts
optional secretAccessKey?: string;
```

##### sessionToken?

```ts
optional sessionToken?: string;
```

***

### AwsSpeechJsonObject

#### Extended by

- [`AwsSpeechProviderExtensionFields`](#awsspeechproviderextensionfields)
- [`AwsSpeechProviderResponse`](#awsspeechproviderresponse)

#### Indexable

```ts
[key: string]: AwsSpeechProviderExtensionValue
```

***

### AwsSpeechOperationRequestInput

#### Properties

##### body?

```ts
optional body?: AwsSpeechProviderPayload;
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
optional query?: AwsSpeechProviderQuery;
```

##### responseType?

```ts
optional responseType?: "response" | "json" | "arrayBuffer" | "stream";
```

***

### AwsSpeechProviderExtensionFields

#### Extends

- [`AwsSpeechJsonObject`](#awsspeechjsonobject)

#### Indexable

```ts
[key: string]: AwsSpeechProviderExtensionValue
```

***

### AwsSpeechProviderResponse

#### Extends

- [`AwsSpeechJsonObject`](#awsspeechjsonobject)

#### Indexable

```ts
[key: string]: AwsSpeechProviderExtensionValue
```

***

### AwsSpeechVoiceProviderOptions

#### Extends

- `Omit`\<`Partial`\<`SpeechPipelineVoiceProviderOptions`\>, `"provider"` \| `"transcriptionSource"` \| `"transcribe"` \| `"synthesize"`\>

#### Properties

##### accessKeyId?

```ts
optional accessKeyId?: string;
```

##### client?

```ts
optional client?: AwsSpeechClient;
```

##### enablePartialResultsStabilization?

```ts
optional enablePartialResultsStabilization?: boolean;
```

##### endSilenceMs?

```ts
optional endSilenceMs?: number;
```

###### Inherited from

```ts
Omit.endSilenceMs
```

##### engine?

```ts
optional engine?: AwsPollyEngine;
```

##### id?

```ts
optional id?: string;
```

###### Inherited from

```ts
Omit.id
```

##### identifyLanguage?

```ts
optional identifyLanguage?: boolean;
```

##### identifyMultipleLanguages?

```ts
optional identifyMultipleLanguages?: boolean;
```

##### languageCode?

```ts
optional languageCode?: string;
```

##### languageOptions?

```ts
optional languageOptions?: string[];
```

##### lexiconNames?

```ts
optional lexiconNames?: string[];
```

##### maxSpeechMs?

```ts
optional maxSpeechMs?: number;
```

###### Inherited from

```ts
Omit.maxSpeechMs
```

##### mediaEncoding?

```ts
optional mediaEncoding?: AwsTranscribeMediaEncoding;
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
optional outputFormat?: AwsPollyOutputFormat;
```

##### partialResultsStability?

```ts
optional partialResultsStability?: AwsTranscribePartialResultsStability;
```

##### pollyClient?

```ts
optional pollyClient?: AwsSdkCommandClient<AwsPollySynthesizeCommandOutput>;
```

##### pollyClientConfig?

```ts
optional pollyClientConfig?: PollyClientConfig;
```

##### pollyLanguageCode?

```ts
optional pollyLanguageCode?: string;
```

##### pollySampleRate?

```ts
optional pollySampleRate?: string;
```

##### preferredLanguage?

```ts
optional preferredLanguage?: string;
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

##### secretAccessKey?

```ts
optional secretAccessKey?: string;
```

##### sessionToken?

```ts
optional sessionToken?: string;
```

##### silenceThreshold?

```ts
optional silenceThreshold?: number;
```

###### Inherited from

```ts
Omit.silenceThreshold
```

##### StartStreamTranscriptionCommand?

```ts
optional StartStreamTranscriptionCommand?: AwsSdkCommandConstructor<AwsTranscribeStreamingCommandInput>;
```

##### SynthesizeSpeechCommand?

```ts
optional SynthesizeSpeechCommand?: AwsSdkCommandConstructor<AwsPollySynthesizeCommandInput>;
```

##### textType?

```ts
optional textType?: AwsPollyTextType;
```

##### transcribeStreamingClient?

```ts
optional transcribeStreamingClient?: AwsSdkCommandClient<AwsTranscribeStreamingCommandOutput>;
```

##### transcribeStreamingClientConfig?

```ts
optional transcribeStreamingClientConfig?: TranscribeStreamingClientConfig;
```

##### vocabularyFilterMethod?

```ts
optional vocabularyFilterMethod?: AwsTranscribeVocabularyFilterMethod;
```

##### vocabularyFilterName?

```ts
optional vocabularyFilterName?: string;
```

##### vocabularyName?

```ts
optional vocabularyName?: string;
```

##### voiceId

```ts
voiceId: string;
```

***

### AwsTranscribeSpeechInput

#### Properties

##### audio

```ts
audio: Uint8Array;
```

##### enablePartialResultsStabilization?

```ts
optional enablePartialResultsStabilization?: boolean;
```

##### identifyLanguage?

```ts
optional identifyLanguage?: boolean;
```

##### identifyMultipleLanguages?

```ts
optional identifyMultipleLanguages?: boolean;
```

##### languageCode?

```ts
optional languageCode?: string;
```

##### languageOptions?

```ts
optional languageOptions?: string[];
```

##### mediaEncoding?

```ts
optional mediaEncoding?: AwsTranscribeMediaEncoding;
```

##### partialResultsStability?

```ts
optional partialResultsStability?: AwsTranscribePartialResultsStability;
```

##### preferredLanguage?

```ts
optional preferredLanguage?: string;
```

##### sampleRate?

```ts
optional sampleRate?: number;
```

##### sessionId?

```ts
optional sessionId?: string;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### vocabularyFilterMethod?

```ts
optional vocabularyFilterMethod?: AwsTranscribeVocabularyFilterMethod;
```

##### vocabularyFilterName?

```ts
optional vocabularyFilterName?: string;
```

##### vocabularyName?

```ts
optional vocabularyName?: string;
```

***

### AwsTranscribeSpeechResult

#### Properties

##### endedAtSeconds?

```ts
optional endedAtSeconds?: number;
```

##### languageCode?

```ts
optional languageCode?: string;
```

##### resultCount?

```ts
optional resultCount?: number;
```

##### resultId?

```ts
optional resultId?: string;
```

##### resultIds?

```ts
optional resultIds?: string[];
```

##### startedAtSeconds?

```ts
optional startedAtSeconds?: number;
```

##### text

```ts
text: string;
```

***

### AwsTranscribeStreamingAudioStreamEvent

#### Properties

##### AudioEvent

```ts
AudioEvent: {
  AudioChunk: Uint8Array;
};
```

###### AudioChunk

```ts
AudioChunk: Uint8Array;
```

***

### AwsTranscribeStreamingCommandInput

#### Properties

##### AudioStream

```ts
AudioStream: AsyncIterable<AwsTranscribeStreamingAudioStreamEvent>;
```

##### EnablePartialResultsStabilization?

```ts
optional EnablePartialResultsStabilization?: boolean;
```

##### IdentifyLanguage?

```ts
optional IdentifyLanguage?: boolean;
```

##### IdentifyMultipleLanguages?

```ts
optional IdentifyMultipleLanguages?: boolean;
```

##### LanguageCode?

```ts
optional LanguageCode?: string;
```

##### LanguageOptions?

```ts
optional LanguageOptions?: string;
```

##### MediaEncoding

```ts
MediaEncoding: AwsTranscribeMediaEncoding;
```

##### MediaSampleRateHertz

```ts
MediaSampleRateHertz: number;
```

##### PartialResultsStability?

```ts
optional PartialResultsStability?: AwsTranscribePartialResultsStability;
```

##### PreferredLanguage?

```ts
optional PreferredLanguage?: string;
```

##### SessionId?

```ts
optional SessionId?: string;
```

##### VocabularyFilterMethod?

```ts
optional VocabularyFilterMethod?: AwsTranscribeVocabularyFilterMethod;
```

##### VocabularyFilterName?

```ts
optional VocabularyFilterName?: string;
```

##### VocabularyName?

```ts
optional VocabularyName?: string;
```

***

### AwsTranscribeStreamingCommandOutput

#### Properties

##### LanguageCode?

```ts
optional LanguageCode?: string;
```

##### MediaEncoding?

```ts
optional MediaEncoding?: AwsTranscribeMediaEncoding;
```

##### MediaSampleRateHertz?

```ts
optional MediaSampleRateHertz?: number;
```

##### TranscriptResultStream?

```ts
optional TranscriptResultStream?: AsyncIterable<AwsTranscribeStreamingResponseEvent>;
```

***

### AwsTranscribeStreamingResponseEvent

#### Properties

##### BadRequestException?

```ts
optional BadRequestException?: AwsSdkExceptionShape;
```

##### ConflictException?

```ts
optional ConflictException?: AwsSdkExceptionShape;
```

##### InternalFailureException?

```ts
optional InternalFailureException?: AwsSdkExceptionShape;
```

##### LimitExceededException?

```ts
optional LimitExceededException?: AwsSdkExceptionShape;
```

##### ServiceUnavailableException?

```ts
optional ServiceUnavailableException?: AwsSdkExceptionShape;
```

##### TranscriptEvent?

```ts
optional TranscriptEvent?: {
  Transcript?: {
     Results?: AwsTranscribeStreamingResult[];
  };
};
```

###### Transcript?

```ts
optional Transcript?: {
  Results?: AwsTranscribeStreamingResult[];
};
```

###### Transcript.Results?

```ts
optional Results?: AwsTranscribeStreamingResult[];
```

***

### AwsTranscribeStreamingResult

#### Properties

##### Alternatives?

```ts
optional Alternatives?: {
  Transcript?: string;
}[];
```

###### Transcript?

```ts
optional Transcript?: string;
```

##### EndTime?

```ts
optional EndTime?: number;
```

##### IsPartial?

```ts
optional IsPartial?: boolean;
```

##### ResultId?

```ts
optional ResultId?: string;
```

##### StartTime?

```ts
optional StartTime?: number;
```

## Type Aliases

### AwsPollyEngine

```ts
type AwsPollyEngine = "standard" | "neural" | "long-form" | "generative";
```

***

### AwsPollyOutputFormat

```ts
type AwsPollyOutputFormat = "json" | "mp3" | "ogg_vorbis" | "pcm" | "ogg_opus";
```

***

### AwsPollyTextType

```ts
type AwsPollyTextType = "text" | "ssml";
```

***

### AwsSpeechJsonPrimitive

```ts
type AwsSpeechJsonPrimitive = string | number | boolean | null;
```

***

### AwsSpeechJsonValue

```ts
type AwsSpeechJsonValue =
  | AwsSpeechJsonPrimitive
  | AwsSpeechJsonObject
  | readonly AwsSpeechJsonValue[];
```

***

### AwsSpeechProviderExtensionValue

```ts
type AwsSpeechProviderExtensionValue = AwsSpeechJsonValue | object | undefined;
```

***

### AwsSpeechProviderPayload

```ts
type AwsSpeechProviderPayload = AwsSpeechJsonObject | object;
```

***

### AwsSpeechProviderQuery

```ts
type AwsSpeechProviderQuery = Record<string, AwsSpeechProviderExtensionValue>;
```

***

### AwsSpeechResource

```ts
type AwsSpeechResource =
  | AwsSpeechJsonValue
  | AwsSpeechProviderPayload;
```

***

### AwsTranscribeMediaEncoding

```ts
type AwsTranscribeMediaEncoding = "pcm" | "ogg-opus" | "flac";
```

***

### AwsTranscribePartialResultsStability

```ts
type AwsTranscribePartialResultsStability = "high" | "medium" | "low";
```

***

### AwsTranscribeVocabularyFilterMethod

```ts
type AwsTranscribeVocabularyFilterMethod = "remove" | "mask" | "tag";
```

## Variables

### AWS\_SPEECH\_API\_SOURCES

```ts
const AWS_SPEECH_API_SOURCES: {
  pollyApiReference: "https://docs.aws.amazon.com/polly/latest/dg/API_Reference.html";
  pollySdk: "https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/polly";
  pollySynthesizeSpeech: "https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html";
  transcribeSdk: "https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe-streaming";
  transcribeStreamingApi: "https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html";
  transcribeStreamingSetup: "https://docs.aws.amazon.com/transcribe/latest/dg/streaming-setting-up.html";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-pollyapireference"></a> `pollyApiReference` | `"https://docs.aws.amazon.com/polly/latest/dg/API_Reference.html"` |
| <a id="property-pollysdk"></a> `pollySdk` | `"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/polly"` |
| <a id="property-pollysynthesizespeech"></a> `pollySynthesizeSpeech` | `"https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html"` |
| <a id="property-transcribesdk"></a> `transcribeSdk` | `"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/transcribe-streaming"` |
| <a id="property-transcribestreamingapi"></a> `transcribeStreamingApi` | `"https://docs.aws.amazon.com/transcribe/latest/APIReference/API_streaming_StartStreamTranscription.html"` |
| <a id="property-transcribestreamingsetup"></a> `transcribeStreamingSetup` | `"https://docs.aws.amazon.com/transcribe/latest/dg/streaming-setting-up.html"` |

***

### createAwsSpeechVoiceAdapter

```ts
const createAwsSpeechVoiceAdapter: typeof createAwsSpeechVoiceProvider;
```

## Functions

### awsSpeechCredentialStatuses()

```ts
function awsSpeechCredentialStatuses(input): {
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
| `input` | [`AwsSpeechCredentialStatusInput`](#awsspeechcredentialstatusinput) |

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

### createAwsSdkSpeechClient()

```ts
function createAwsSdkSpeechClient(options): AwsSpeechClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AwsSdkSpeechClientOptions`](#awssdkspeechclientoptions) |

#### Returns

[`AwsSpeechClient`](#awsspeechclient)

***

### createAwsSpeechClient()

```ts
function createAwsSpeechClient(options): AwsSpeechClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AwsSpeechClientOptions`](#awsspeechclientoptions) |

#### Returns

[`AwsSpeechClient`](#awsspeechclient)

***

### createAwsSpeechRawClients()

```ts
function createAwsSpeechRawClients(options): {
  pollyClient: PollyClient;
  transcribeStreamingClient: TranscribeStreamingClient;
};
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AwsSpeechClientOptions`](#awsspeechclientoptions) |

#### Returns

```ts
{
  pollyClient: PollyClient;
  transcribeStreamingClient: TranscribeStreamingClient;
}
```

| Name | Type |
| ------ | ------ |
| `pollyClient` | `PollyClient` |
| `transcribeStreamingClient` | `TranscribeStreamingClient` |

***

### createAwsSpeechVoiceProvider()

```ts
function createAwsSpeechVoiceProvider(options): VoiceProvider;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AwsSpeechVoiceProviderOptions`](#awsspeechvoiceprovideroptions) |

#### Returns

[`VoiceProvider`](../../../packages/voice-websocket/dist.md#voiceprovider)

## References

### awsSpeechIntegration

Re-exports [awsSpeechIntegration](dist/manifest.md#awsspeechintegration)

***

### awsSpeechProviderManifest

Re-exports [awsSpeechProviderManifest](dist/manifest.md#awsspeechprovidermanifest)
