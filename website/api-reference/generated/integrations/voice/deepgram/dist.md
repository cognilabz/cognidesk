# integrations/voice/deepgram/dist

## Interfaces

### DeepgramJsonObject

#### Indexable

```ts
[key: string]: DeepgramJsonValue
```

***

### DeepgramRawClient

#### Properties

##### listen?

```ts
optional listen?: {
  v1?: {
     media?: {
        transcribeFile:   | HttpResponsePromise<MediaTranscribeResponse>
           | PromiseLike<DeepgramJsonObject>;
     };
  };
};
```

###### v1?

```ts
optional v1?: {
  media?: {
     transcribeFile:   | HttpResponsePromise<MediaTranscribeResponse>
        | PromiseLike<DeepgramJsonObject>;
  };
};
```

###### v1.media?

```ts
optional media?: {
  transcribeFile:   | HttpResponsePromise<MediaTranscribeResponse>
     | PromiseLike<DeepgramJsonObject>;
};
```

###### v1.media.transcribeFile()

```ts
transcribeFile(
   uploadable,
   request,
   requestOptions?):
  | HttpResponsePromise<MediaTranscribeResponse>
| PromiseLike<DeepgramJsonObject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `uploadable` | `Uploadable` |
| `request` | `MediaTranscribeRequestOctetStream` |
| `requestOptions?` | `RequestOptions` |

###### Returns

  \| `HttpResponsePromise`\<`MediaTranscribeResponse`\>
  \| `PromiseLike`\<[`DeepgramJsonObject`](#deepgramjsonobject)\>

##### speak?

```ts
optional speak?: {
  v1?: {
     audio?: {
        generate:   | HttpResponsePromise<BinaryResponse>
           | PromiseLike<
           | Response
           | ArrayBuffer
           | Uint8Array<ArrayBufferLike>
           | BinaryResponse>;
     };
  };
};
```

###### v1?

```ts
optional v1?: {
  audio?: {
     generate:   | HttpResponsePromise<BinaryResponse>
        | PromiseLike<
        | Response
        | ArrayBuffer
        | Uint8Array<ArrayBufferLike>
        | BinaryResponse>;
  };
};
```

###### v1.audio?

```ts
optional audio?: {
  generate:   | HttpResponsePromise<BinaryResponse>
     | PromiseLike<
     | Response
     | ArrayBuffer
     | Uint8Array<ArrayBufferLike>
     | BinaryResponse>;
};
```

###### v1.audio.generate()

```ts
generate(request, requestOptions?):
  | HttpResponsePromise<BinaryResponse>
  | PromiseLike<
  | Response
  | ArrayBuffer
  | Uint8Array<ArrayBufferLike>
| BinaryResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `SpeakV1Request` |
| `requestOptions?` | `RequestOptions` |

###### Returns

  \| `HttpResponsePromise`\<`BinaryResponse`\>
  \| `PromiseLike`\<
  \| `Response`
  \| `ArrayBuffer`
  \| `Uint8Array`\<`ArrayBufferLike`\>
  \| `BinaryResponse`\>

***

### DeepgramTextToSpeechInput

#### Properties

##### container?

```ts
optional container?: string;
```

##### encoding?

```ts
optional encoding?: string;
```

##### model?

```ts
optional model?: string;
```

##### sampleRate?

```ts
optional sampleRate?: number;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### text

```ts
text: string;
```

***

### DeepgramTextToSpeechResult

#### Properties

##### audio

```ts
audio: ArrayBuffer;
```

##### charCount?

```ts
optional charCount?: number;
```

##### contentType?

```ts
optional contentType?: string;
```

##### modelName?

```ts
optional modelName?: string;
```

##### modelUuid?

```ts
optional modelUuid?: string;
```

##### requestId?

```ts
optional requestId?: string;
```

***

### DeepgramTranscribeAudioInput

#### Properties

##### audio

```ts
audio: Uint8Array;
```

##### detectLanguage?

```ts
optional detectLanguage?: boolean;
```

##### language?

```ts
optional language?: string;
```

##### model?

```ts
optional model?: string;
```

##### punctuate?

```ts
optional punctuate?: boolean;
```

##### sampleRate?

```ts
optional sampleRate?: number;
```

##### signal?

```ts
optional signal?: AbortSignal;
```

##### smartFormat?

```ts
optional smartFormat?: boolean;
```

***

### DeepgramTranscriptionResult

#### Properties

##### channels?

```ts
optional channels?: number;
```

##### confidence?

```ts
optional confidence?: number;
```

##### duration?

```ts
optional duration?: number;
```

##### modelName?

```ts
optional modelName?: string;
```

##### raw?

```ts
optional raw?: DeepgramJsonObject;
```

##### requestId?

```ts
optional requestId?: string;
```

##### text

```ts
text: string;
```

***

### DeepgramVoiceClient

#### Methods

##### getRawClient()

```ts
getRawClient(): Promise<DeepgramRawClient>;
```

###### Returns

`Promise`\<[`DeepgramRawClient`](#deepgramrawclient)\>

##### getSdkClient()

```ts
getSdkClient(): Promise<DeepgramRawClient>;
```

###### Returns

`Promise`\<[`DeepgramRawClient`](#deepgramrawclient)\>

##### synthesizeSpeech()

```ts
synthesizeSpeech(input): Promise<DeepgramTextToSpeechResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`DeepgramTextToSpeechInput`](#deepgramtexttospeechinput) |

###### Returns

`Promise`\<[`DeepgramTextToSpeechResult`](#deepgramtexttospeechresult)\>

##### transcribeAudio()

```ts
transcribeAudio(input): Promise<DeepgramTranscriptionResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`DeepgramTranscribeAudioInput`](#deepgramtranscribeaudioinput) |

###### Returns

`Promise`\<[`DeepgramTranscriptionResult`](#deepgramtranscriptionresult)\>

***

### DeepgramVoiceClientOptions

#### Properties

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

##### apiKey?

```ts
optional apiKey?: string;
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

##### rawClient?

```ts
optional rawClient?: DeepgramRawClient;
```

***

### DeepgramVoiceProviderOptions

#### Extends

- `Omit`\<`Partial`\<`SpeechPipelineVoiceProviderOptions`\>, `"provider"` \| `"transcriptionSource"` \| `"transcribe"` \| `"synthesize"`\>

#### Indexable

```ts
[key: string]: SpeechPipelineVoiceProviderOptions
```

```ts
[key: number]: SpeechPipelineVoiceProviderOptions
```

```ts
[key: symbol]: SpeechPipelineVoiceProviderOptions
```

#### Properties

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

##### apiKey?

```ts
optional apiKey?: string;
```

##### client?

```ts
optional client?: DeepgramVoiceClient;
```

##### container?

```ts
optional container?: string;
```

##### detectLanguage?

```ts
optional detectLanguage?: boolean;
```

##### encoding?

```ts
optional encoding?: string;
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

##### language?

```ts
optional language?: string;
```

##### outputSampleRate?

```ts
optional outputSampleRate?: number;
```

##### punctuate?

```ts
optional punctuate?: boolean;
```

##### rawClient?

```ts
optional rawClient?: DeepgramRawClient;
```

##### smartFormat?

```ts
optional smartFormat?: boolean;
```

##### speechToTextModel?

```ts
optional speechToTextModel?: string;
```

##### textToSpeechModel?

```ts
optional textToSpeechModel?: string;
```

## Type Aliases

### DeepgramJsonPrimitive

```ts
type DeepgramJsonPrimitive = string | number | boolean | null;
```

***

### DeepgramJsonValue

```ts
type DeepgramJsonValue =
  | DeepgramJsonPrimitive
  | DeepgramJsonObject
  | DeepgramJsonValue[];
```

## Variables

### deepgramVoiceIntegration

```ts
const deepgramVoiceIntegration: DefinedIntegration<{
  capabilities: {
     audiences?: ("customer-facing" | "mixed" | "internal-support")[];
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
  channelAudiences: ("customer-facing" | "mixed" | "internal-support")[];
  coverage: {
     evidence: {
        label: string;
        url?: string;
     }[];
     notes: string[];
     scope:   | "provider-api-subset"
        | "support-workflow-subset"
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
     | "bidirectional"
     | "inbound-only"
    | "outbound-only")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "official" | "community" | "unknown" | "partner";
     url?: string;
  }[];
  metadata?: Record<string, unknown>;
  name: string;
  operations: {
     alias: string;
     audience?: "customer-facing" | "mixed" | "internal-support";
     audiences?: ("customer-facing" | "mixed" | "internal-support")[];
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
  trustLevel: "official" | "community" | "verified" | "experimental";
} & {
  capabilities: readonly [{
     audiences: readonly ["customer-facing"];
     capability: "receive";
     description: "Transcribes customer PCM/WAV voice input with Deepgram speech-to-text.";
     exposesSensitiveData: true;
     label: "Transcribe speech";
     providerObjects: readonly [{
        kind: "deepgramTranscript";
        label: "Deepgram Transcript";
     }];
     requiresCredential: true;
   }, {
     audiences: readonly ["customer-facing"];
     capability: "send";
     description: "Synthesizes Cognidesk assistant text with Deepgram text-to-speech.";
     exposesSensitiveData: true;
     label: "Synthesize speech";
     providerObjects: readonly [{
        kind: "deepgramSpeechSynthesis";
        label: "Deepgram Speech Synthesis";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: readonly ["customer-facing", "internal-support"];
     capability: "media";
     description: "Exchanges buffered PCM input and synthesized audio for Cognidesk voice sessions.";
     exposesSensitiveData: true;
     label: "Speech audio media";
     providerObjects: readonly [{
        kind: "voiceTranscript";
        label: "Voice Transcript";
      }, {
        kind: "voiceAudio";
        label: "Voice Audio";
     }];
     requiresCredential: true;
  }];
  category: "voice";
  channelAudiences: readonly ["customer-facing", "mixed"];
  coverage: {
     evidence: readonly [{
        label: "Deepgram SDK package";
        url: "https://www.npmjs.com/package/@deepgram/sdk";
      }, {
        label: "Deepgram prerecorded audio STT";
        url: "https://developers.deepgram.com/docs/pre-recorded-audio";
      }, {
        label: "Deepgram Text-to-Speech REST";
        url: "https://developers.deepgram.com/docs/text-to-speech";
     }];
     notes: readonly ["Implements normalized Cognidesk speech-to-text and text-to-speech operations with the official Deepgram SDK.", "Raw Deepgram SDK access is exposed as an escape hatch, but Cognidesk does not claim ownership of the full Deepgram provider API.", "Deepgram Voice Agent, Flux streaming sessions, account administration, telephony setup, self-hosted deployment management, and custom model administration remain outside this normalized adapter."];
     scope: "provider-api-subset";
  };
  credentialRequirements: readonly [{
     description: "Server-side Deepgram API key used by the official SDK for speech API requests.";
     id: "deepgram-api-key";
     label: "Deepgram API key";
     metadata: {
        minimumAccess: readonly ["speech-to-text", "text-to-speech"];
        scopeKind: "provider-permission";
     };
     required: true;
  }];
  directions: readonly ["receive-only", "send-only", "bidirectional"];
  id: "voice.deepgram";
  limitations: readonly ["This package implements SDK-backed STT/TTS for Cognidesk speech pipelines, not Deepgram Voice Agent or Flux websocket sessions.", "The background LLM is the Cognidesk Agent Model Set, not Deepgram."];
  maintainers: readonly [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     implementation: {
        sdkPackage: "@deepgram/sdk";
        strategy: "official-sdk";
        verifiedAt: "2026-06-21";
        verifiedVersion: "5.4.0";
     };
     rawClient: {
        coverage: "upstream-sdk";
        export: "getRawClient";
     };
  };
  name: "Deepgram Voice";
  operations: readonly [{
     alias: "voice.turn.finalize";
     audiences: readonly ["customer-facing"];
     capability: "receive";
     exposesSensitiveData: true;
     label: "Transcribe speech";
     providerObject: "voiceTranscript";
     providerOperation: "listen.v1.media.transcribeFile";
   }, {
     alias: "voice.speak";
     audiences: readonly ["customer-facing"];
     capability: "send";
     exposesSensitiveData: true;
     label: "Synthesize speech";
     providerObject: "voiceAudio";
     providerOperation: "speak.v1.audio.generate";
     sideEffect: true;
  }];
  packageName: "@cognidesk/integration-voice-deepgram";
  privacyNotes: readonly ["Customer audio is sent to Deepgram for transcription, and assistant response text is sent to Deepgram for synthesis.", "Deepgram API keys remain server-side and are never issued to browsers by this package."];
  provider: "deepgram";
  trustLevel: "official";
}, unknown, {
  voice.speak: (input, context) => Promise<DeepgramTextToSpeechResult>;
  voice.turn.finalize: (input, context) => Promise<DeepgramTranscriptionResult>;
}>;
```

## Functions

### createDeepgramVoiceClient()

```ts
function createDeepgramVoiceClient(options): DeepgramVoiceClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DeepgramVoiceClientOptions`](#deepgramvoiceclientoptions) |

#### Returns

[`DeepgramVoiceClient`](#deepgramvoiceclient)

***

### createDeepgramVoiceProvider()

```ts
function createDeepgramVoiceProvider(options?): VoiceProvider;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`DeepgramVoiceProviderOptions`](#deepgramvoiceprovideroptions) |

#### Returns

[`VoiceProvider`](../../../packages/voice-websocket/dist.md#voiceprovider)

***

### deepgramVoiceCredentialStatuses()

```ts
function deepgramVoiceCredentialStatuses(input): {
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
| `input` | \{ `apiKey?`: `string`; \} |
| `input.apiKey?` | `string` |

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

### deepgramVoiceProviderManifest

Re-exports [deepgramVoiceProviderManifest](dist/manifest.md#deepgramvoiceprovidermanifest)
