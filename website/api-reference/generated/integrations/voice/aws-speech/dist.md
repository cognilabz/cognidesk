# integrations/voice/aws-speech/dist

## Interfaces

### AwsPollySynthesizeSpeechInput

#### Properties

##### engine?

```ts
optional engine?: AwsPollyEngine;
```

##### languageCode?

```ts
optional languageCode?: AwsPollyLanguageCode;
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

##### speechMarkTypes?

```ts
optional speechMarkTypes?: SpeechMarkType[];
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
voiceId: AwsPollyVoiceId;
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
pollyClient: AwsSdkCommandClient<SynthesizeSpeechCommandOutput>;
```

##### StartStreamTranscriptionCommand

```ts
StartStreamTranscriptionCommand: AwsSdkCommandConstructor<StartStreamTranscriptionCommandInput>;
```

##### SynthesizeSpeechCommand

```ts
SynthesizeSpeechCommand: AwsSdkCommandConstructor<SynthesizeSpeechCommandInput>;
```

##### transcribeStreamingClient

```ts
transcribeStreamingClient: AwsSdkCommandClient<StartStreamTranscriptionCommandOutput>;
```

***

### AwsSpeechClient

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `RawClients` *extends* [`AwsSpeechCommandClients`](#awsspeechcommandclients) | [`AwsSpeechCommandClients`](#awsspeechcommandclients) |

#### Properties

##### rawClients

```ts
rawClients: RawClients;
```

#### Methods

##### getRawClient()

```ts
getRawClient(): RawClients;
```

###### Returns

`RawClients`

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

### AwsSpeechCommandClients

#### Extended by

- [`AwsSpeechRawClients`](#awsspeechrawclients)

#### Properties

##### pollyClient

```ts
pollyClient: AwsSdkCommandClient<SynthesizeSpeechCommandOutput>;
```

##### transcribeStreamingClient

```ts
transcribeStreamingClient: AwsSdkCommandClient<StartStreamTranscriptionCommandOutput>;
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

### AwsSpeechRawClients

#### Extends

- [`AwsSpeechCommandClients`](#awsspeechcommandclients)

#### Properties

##### pollyClient

```ts
pollyClient: PollyClient;
```

###### Overrides

[`AwsSpeechCommandClients`](#awsspeechcommandclients).[`pollyClient`](#pollyclient-2)

##### transcribeStreamingClient

```ts
transcribeStreamingClient: TranscribeStreamingClient;
```

###### Overrides

[`AwsSpeechCommandClients`](#awsspeechcommandclients).[`transcribeStreamingClient`](#transcribestreamingclient-2)

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

##### contentIdentificationType?

```ts
optional contentIdentificationType?: "PII";
```

##### contentRedactionType?

```ts
optional contentRedactionType?: "PII";
```

##### enableChannelIdentification?

```ts
optional enableChannelIdentification?: boolean;
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
optional languageCode?: AwsTranscribeLanguageCode;
```

##### languageModelName?

```ts
optional languageModelName?: string;
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

##### numberOfChannels?

```ts
optional numberOfChannels?: number;
```

##### outputFormat?

```ts
optional outputFormat?: AwsPollyOutputFormat;
```

##### partialResultsStability?

```ts
optional partialResultsStability?: AwsTranscribePartialResultsStability;
```

##### piiEntityTypes?

```ts
optional piiEntityTypes?: string[];
```

##### pollyClient?

```ts
optional pollyClient?: AwsSdkCommandClient<SynthesizeSpeechCommandOutput>;
```

##### pollyClientConfig?

```ts
optional pollyClientConfig?: PollyClientConfig;
```

##### pollyLanguageCode?

```ts
optional pollyLanguageCode?: AwsPollyLanguageCode;
```

##### pollySampleRate?

```ts
optional pollySampleRate?: string;
```

##### preferredLanguage?

```ts
optional preferredLanguage?: AwsTranscribeLanguageCode;
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

##### sessionResumeWindow?

```ts
optional sessionResumeWindow?: number;
```

##### sessionToken?

```ts
optional sessionToken?: string;
```

##### showSpeakerLabel?

```ts
optional showSpeakerLabel?: boolean;
```

##### silenceThreshold?

```ts
optional silenceThreshold?: number;
```

###### Inherited from

```ts
Omit.silenceThreshold
```

##### speechMarkTypes?

```ts
optional speechMarkTypes?: SpeechMarkType[];
```

##### StartStreamTranscriptionCommand?

```ts
optional StartStreamTranscriptionCommand?: AwsSdkCommandConstructor<StartStreamTranscriptionCommandInput>;
```

##### SynthesizeSpeechCommand?

```ts
optional SynthesizeSpeechCommand?: AwsSdkCommandConstructor<SynthesizeSpeechCommandInput>;
```

##### textType?

```ts
optional textType?: AwsPollyTextType;
```

##### transcribeStreamingClient?

```ts
optional transcribeStreamingClient?: AwsSdkCommandClient<StartStreamTranscriptionCommandOutput>;
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

##### vocabularyFilterNames?

```ts
optional vocabularyFilterNames?: string[];
```

##### vocabularyName?

```ts
optional vocabularyName?: string;
```

##### vocabularyNames?

```ts
optional vocabularyNames?: string[];
```

##### voiceId

```ts
voiceId: AwsPollyVoiceId;
```

***

### AwsTranscribeSpeechInput

#### Properties

##### audio

```ts
audio: Uint8Array;
```

##### contentIdentificationType?

```ts
optional contentIdentificationType?: "PII";
```

##### contentRedactionType?

```ts
optional contentRedactionType?: "PII";
```

##### enableChannelIdentification?

```ts
optional enableChannelIdentification?: boolean;
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
optional languageCode?: AwsTranscribeLanguageCode;
```

##### languageModelName?

```ts
optional languageModelName?: string;
```

##### languageOptions?

```ts
optional languageOptions?: string[];
```

##### mediaEncoding?

```ts
optional mediaEncoding?: AwsTranscribeMediaEncoding;
```

##### numberOfChannels?

```ts
optional numberOfChannels?: number;
```

##### partialResultsStability?

```ts
optional partialResultsStability?: AwsTranscribePartialResultsStability;
```

##### piiEntityTypes?

```ts
optional piiEntityTypes?: string[];
```

##### preferredLanguage?

```ts
optional preferredLanguage?: AwsTranscribeLanguageCode;
```

##### sampleRate?

```ts
optional sampleRate?: number;
```

##### sessionId?

```ts
optional sessionId?: string;
```

##### sessionResumeWindow?

```ts
optional sessionResumeWindow?: number;
```

##### showSpeakerLabel?

```ts
optional showSpeakerLabel?: boolean;
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

##### vocabularyFilterNames?

```ts
optional vocabularyFilterNames?: string[];
```

##### vocabularyName?

```ts
optional vocabularyName?: string;
```

##### vocabularyNames?

```ts
optional vocabularyNames?: string[];
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

## Type Aliases

### AwsPollyEngine

```ts
type AwsPollyEngine = NonNullable<SynthesizeSpeechCommandInput["Engine"]>;
```

***

### AwsPollyLanguageCode

```ts
type AwsPollyLanguageCode = NonNullable<SynthesizeSpeechCommandInput["LanguageCode"]>;
```

***

### AwsPollyOutputFormat

```ts
type AwsPollyOutputFormat = NonNullable<SynthesizeSpeechCommandInput["OutputFormat"]>;
```

***

### AwsPollySpeechMarkType

```ts
type AwsPollySpeechMarkType = NonNullable<SynthesizeSpeechCommandInput["SpeechMarkTypes"]>[number];
```

***

### AwsPollySynthesizeCommandInput

```ts
type AwsPollySynthesizeCommandInput = SynthesizeSpeechCommandInput;
```

***

### AwsPollySynthesizeCommandOutput

```ts
type AwsPollySynthesizeCommandOutput = SynthesizeSpeechCommandOutput;
```

***

### AwsPollyTextType

```ts
type AwsPollyTextType = NonNullable<SynthesizeSpeechCommandInput["TextType"]>;
```

***

### AwsPollyVoiceId

```ts
type AwsPollyVoiceId = NonNullable<SynthesizeSpeechCommandInput["VoiceId"]>;
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

### AwsTranscribeContentIdentificationType

```ts
type AwsTranscribeContentIdentificationType = NonNullable<StartStreamTranscriptionCommandInput["ContentIdentificationType"]>;
```

***

### AwsTranscribeContentRedactionType

```ts
type AwsTranscribeContentRedactionType = NonNullable<StartStreamTranscriptionCommandInput["ContentRedactionType"]>;
```

***

### AwsTranscribeLanguageCode

```ts
type AwsTranscribeLanguageCode = NonNullable<StartStreamTranscriptionCommandInput["LanguageCode"]>;
```

***

### AwsTranscribeMediaEncoding

```ts
type AwsTranscribeMediaEncoding = NonNullable<StartStreamTranscriptionCommandInput["MediaEncoding"]>;
```

***

### AwsTranscribePartialResultsStability

```ts
type AwsTranscribePartialResultsStability = NonNullable<StartStreamTranscriptionCommandInput["PartialResultsStability"]>;
```

***

### AwsTranscribeStreamingAudioStreamEvent

```ts
type AwsTranscribeStreamingAudioStreamEvent = NonNullable<StartStreamTranscriptionCommandInput["AudioStream"]> extends AsyncIterable<infer Event> ? Event : never;
```

***

### AwsTranscribeStreamingCommandInput

```ts
type AwsTranscribeStreamingCommandInput = StartStreamTranscriptionCommandInput;
```

***

### AwsTranscribeStreamingCommandOutput

```ts
type AwsTranscribeStreamingCommandOutput = StartStreamTranscriptionCommandOutput;
```

***

### AwsTranscribeStreamingResponseEvent

```ts
type AwsTranscribeStreamingResponseEvent = NonNullable<StartStreamTranscriptionCommandOutput["TranscriptResultStream"]> extends AsyncIterable<infer Event> ? Event : never;
```

***

### AwsTranscribeVocabularyFilterMethod

```ts
type AwsTranscribeVocabularyFilterMethod = NonNullable<StartStreamTranscriptionCommandInput["VocabularyFilterMethod"]>;
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
function createAwsSpeechClient(options): AwsSpeechClient<AwsSpeechRawClients>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AwsSpeechClientOptions`](#awsspeechclientoptions) |

#### Returns

[`AwsSpeechClient`](#awsspeechclient)\<[`AwsSpeechRawClients`](#awsspeechrawclients)\>

***

### createAwsSpeechRawClients()

```ts
function createAwsSpeechRawClients(options): AwsSpeechRawClients;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AwsSpeechClientOptions`](#awsspeechclientoptions) |

#### Returns

[`AwsSpeechRawClients`](#awsspeechrawclients)

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
