# integrations/voice/google-speech/dist

## Interfaces

### GoogleSpeechClient

#### Methods

##### getRawClients()

```ts
getRawClients(): GoogleSpeechRawClients;
```

###### Returns

[`GoogleSpeechRawClients`](#googlespeechrawclients)

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

### GoogleSpeechRawClients

#### Properties

##### speechClient

```ts
speechClient: SpeechClient;
```

##### textToSpeechClient

```ts
textToSpeechClient: TextToSpeechClient;
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

## Variables

### googleSpeechIntegration

```ts
const googleSpeechIntegration: DefinedIntegration<{
  capabilities: (
     | {
     audiences: "customer-facing"[];
     capability: string;
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
     description: string;
     exposesSensitiveData: true;
     label: string;
     providerObjects: {
        kind: string;
        label: string;
     }[];
     requiresCredential: true;
     sideEffect?: never;
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
     required: true;
  }[];
  directions: ("receive-only" | "send-only" | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "official";
  }[];
  metadata: {
     channelCoverage: {
        backgroundModelProvider: string;
        browserVoiceProtocol: string;
        fullGoogleCloudSpeechSdk: string;
        longAudioSynthesis: string;
        longRunningRecognize: string;
        speechToText: string;
        streamingRecognize: string;
        textToSpeech: string;
     };
     implementation: {
        adapterCoverage: string[];
        rawClientEscapeHatch: boolean;
        sdkPackages: string[];
        strategy: string;
     };
     integrationEntryPoints: {
        manifest: string;
        runtime: string;
     };
     integrationName: string;
     integrationPackageName: string;
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
  voice.session.start: (input, context) => Promise<GoogleSpeechToTextResult>;
  voice.speak: (input, context) => Promise<ArrayBuffer>;
  voice.turn.finalize: (input, context) => Promise<GoogleSpeechToTextResult>;
}>;
```

***

### googleSpeechProviderManifest

```ts
const googleSpeechProviderManifest: {
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
} & {
  capabilities: (
     | {
     audiences: "customer-facing"[];
     capability: string;
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
     description: string;
     exposesSensitiveData: true;
     label: string;
     providerObjects: {
        kind: string;
        label: string;
     }[];
     requiresCredential: true;
     sideEffect?: never;
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
     required: true;
  }[];
  directions: ("receive-only" | "send-only" | "bidirectional")[];
  id: string;
  limitations: string[];
  maintainers: {
     name: string;
     type: "official";
  }[];
  metadata: {
     channelCoverage: {
        backgroundModelProvider: string;
        browserVoiceProtocol: string;
        fullGoogleCloudSpeechSdk: string;
        longAudioSynthesis: string;
        longRunningRecognize: string;
        speechToText: string;
        streamingRecognize: string;
        textToSpeech: string;
     };
     implementation: {
        adapterCoverage: string[];
        rawClientEscapeHatch: boolean;
        sdkPackages: string[];
        strategy: string;
     };
     integrationEntryPoints: {
        manifest: string;
        runtime: string;
     };
     integrationName: string;
     integrationPackageName: string;
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
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| `directions` | ( \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"` \| `"bidirectional"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| `metadata?` | `Record`\<`string`, `unknown`\> |
| `name` | `string` |
| `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

#### Type Declaration

| Name | Type |
| ------ | ------ |
| `capabilities` | ( \| \{ `audiences`: `"customer-facing"`[]; `capability`: `string`; `description`: `string`; `exposesSensitiveData`: `true`; `label`: `string`; `providerObjects`: \{ `kind`: `string`; `label`: `string`; \}[]; `requiresCredential`: `true`; `sideEffect`: `true`; \} \| \{ `audiences`: (`"customer-facing"` \| `"internal-support"`)[]; `capability`: `string`; `description`: `string`; `exposesSensitiveData`: `true`; `label`: `string`; `providerObjects`: \{ `kind`: `string`; `label`: `string`; \}[]; `requiresCredential`: `true`; `sideEffect?`: `never`; \})[] |
| `category` | `string` |
| `channelAudiences` | (`"customer-facing"` \| `"mixed"`)[] |
| `coverage` | \{ `evidence`: \{ `label`: `string`; `url`: `string`; \}[]; `notes`: `string`[]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | \{ `description`: `string`; `id`: `string`; `label`: `string`; `required`: `true`; \}[] |
| `directions` | (`"receive-only"` \| `"send-only"` \| `"bidirectional"`)[] |
| `id` | `string` |
| `limitations` | `string`[] |
| `maintainers` | \{ `name`: `string`; `type`: `"official"`; \}[] |
| `metadata` | \{ `channelCoverage`: \{ `backgroundModelProvider`: `string`; `browserVoiceProtocol`: `string`; `fullGoogleCloudSpeechSdk`: `string`; `longAudioSynthesis`: `string`; `longRunningRecognize`: `string`; `speechToText`: `string`; `streamingRecognize`: `string`; `textToSpeech`: `string`; \}; `implementation`: \{ `adapterCoverage`: `string`[]; `rawClientEscapeHatch`: `boolean`; `sdkPackages`: `string`[]; `strategy`: `string`; \}; `integrationEntryPoints`: \{ `manifest`: `string`; `runtime`: `string`; \}; `integrationName`: `string`; `integrationPackageName`: `string`; \} |
| `metadata.channelCoverage` | \{ `backgroundModelProvider`: `string`; `browserVoiceProtocol`: `string`; `fullGoogleCloudSpeechSdk`: `string`; `longAudioSynthesis`: `string`; `longRunningRecognize`: `string`; `speechToText`: `string`; `streamingRecognize`: `string`; `textToSpeech`: `string`; \} |
| `metadata.channelCoverage.backgroundModelProvider` | `string` |
| `metadata.channelCoverage.browserVoiceProtocol` | `string` |
| `metadata.channelCoverage.fullGoogleCloudSpeechSdk` | `string` |
| `metadata.channelCoverage.longAudioSynthesis` | `string` |
| `metadata.channelCoverage.longRunningRecognize` | `string` |
| `metadata.channelCoverage.speechToText` | `string` |
| `metadata.channelCoverage.streamingRecognize` | `string` |
| `metadata.channelCoverage.textToSpeech` | `string` |
| `metadata.implementation` | \{ `adapterCoverage`: `string`[]; `rawClientEscapeHatch`: `boolean`; `sdkPackages`: `string`[]; `strategy`: `string`; \} |
| `metadata.implementation.adapterCoverage` | `string`[] |
| `metadata.implementation.rawClientEscapeHatch` | `boolean` |
| `metadata.implementation.sdkPackages` | `string`[] |
| `metadata.implementation.strategy` | `string` |
| `metadata.integrationEntryPoints` | \{ `manifest`: `string`; `runtime`: `string`; \} |
| `metadata.integrationEntryPoints.manifest` | `string` |
| `metadata.integrationEntryPoints.runtime` | `string` |
| `metadata.integrationName` | `string` |
| `metadata.integrationPackageName` | `string` |
| `name` | `string` |
| `operations` | ( \| \{ `alias`: `string`; `capability`: `string`; `exposesSensitiveData`: `true`; `externallyVisible?`: `never`; `providerObject`: `string`; `providerOperation`: `string`; `requiresCredential`: `true`; `sideEffect?`: `never`; \} \| \{ `alias`: `string`; `capability`: `string`; `exposesSensitiveData?`: `never`; `externallyVisible`: `true`; `providerObject`: `string`; `providerOperation`: `string`; `requiresCredential`: `true`; `sideEffect`: `true`; \})[] |
| `packageName` | `string` |
| `privacyNotes` | `string`[] |
| `provider` | `string` |
| `trustLevel` | `"official"` |

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
function createGoogleSpeechRawClients(options): GoogleSpeechRawClients;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`GoogleSpeechClientOptions`](#googlespeechclientoptions) |

#### Returns

[`GoogleSpeechRawClients`](#googlespeechrawclients)

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
