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

#### Properties

##### createSpeechConfig

```ts
createSpeechConfig: AzureSpeechConfigFactory;
```

##### handlers

```ts
handlers: AzureSpeechOperationHandlers;
```

##### rawHandles

```ts
rawHandles: AzureSpeechRawConfigHandles;
```

##### rawSdk

```ts
rawSdk: AzureSpeechSdk;
```

#### Methods

##### execute()

```ts
execute<K>(alias, input): Promise<AzureSpeechOperationOutputMap[K]>;
```

###### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* [`AzureSpeechOperationAlias`](#azurespeechoperationalias) |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `alias` | `K` |
| `input` | [`AzureSpeechOperationInputMap`](#azurespeechoperationinputmap)\[`K`\] |

###### Returns

`Promise`\<[`AzureSpeechOperationOutputMap`](#azurespeechoperationoutputmap)\[`K`\]\>

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

##### createSpeechConfig?

```ts
optional createSpeechConfig?: AzureSpeechConfigFactory;
```

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
optional speechSynthesisOutputFormat?: AzureSpeechSynthesisOutputFormat;
```

##### speechSynthesisVoiceName?

```ts
optional speechSynthesisVoiceName?: string;
```

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

### AzureSpeechIntegrationOptions

#### Extends

- `Partial`\<[`AzureSpeechClientOptions`](#azurespeechclientoptions)\>

#### Properties

##### client?

```ts
optional client?: AzureSpeechClient;
```

##### createSpeechConfig?

```ts
optional createSpeechConfig?: AzureSpeechConfigFactory;
```

###### Inherited from

[`AzureSpeechClientOptions`](#azurespeechclientoptions).[`createSpeechConfig`](#createspeechconfig-1)

##### region?

```ts
optional region?: string;
```

###### Inherited from

[`AzureSpeechClientOptions`](#azurespeechclientoptions).[`region`](#region)

##### sdk?

```ts
optional sdk?: AzureSpeechSdk;
```

###### Inherited from

[`AzureSpeechClientOptions`](#azurespeechclientoptions).[`sdk`](#sdk)

##### speechKey?

```ts
optional speechKey?: string;
```

###### Inherited from

[`AzureSpeechClientOptions`](#azurespeechclientoptions).[`speechKey`](#speechkey)

***

### AzureSpeechOperationInputMap

#### Properties

##### voice.session.start

```ts
voice.session.start: AzureSpeechToTextInput;
```

##### voice.speak

```ts
voice.speak: AzureTextToSpeechInput;
```

##### voice.turn.finalize

```ts
voice.turn.finalize: AzureSpeechToTextInput;
```

***

### AzureSpeechOperationOutputMap

#### Properties

##### voice.session.start

```ts
voice.session.start: AzureSpeechToTextResult;
```

##### voice.speak

```ts
voice.speak: ArrayBuffer;
```

##### voice.turn.finalize

```ts
voice.turn.finalize: AzureSpeechToTextResult;
```

***

### AzureSpeechRawConfigHandles

#### Properties

##### createSpeechConfig

```ts
createSpeechConfig: AzureSpeechConfigFactory;
```

##### sdk

```ts
sdk: AzureSpeechSdk;
```

***

### AzureSpeechRecognitionResult

#### Extends

- `Partial`\<`Pick`\<`MicrosoftSpeechSdk.SpeechRecognitionResult`, `"text"` \| `"reason"` \| `"duration"` \| `"offset"` \| `"errorDetails"`\>\>

***

### AzureSpeechRecognizer

#### Methods

##### close()?

```ts
optional close(success?, error?): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `success?` | () => `void` |
| `error?` | (`error`) => `void` |

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
  fromStreamInput: AzureAudioConfig;
};
```

###### fromStreamInput()

```ts
fromStreamInput(stream): AzureAudioConfig;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `stream` | [`AzurePushAudioInputStream`](#azurepushaudioinputstream) |

###### Returns

[`AzureAudioConfig`](#azureaudioconfig)

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
optional ResultReason?: Record<string, number | string | undefined>;
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
SpeechRecognizer: (speechConfig, audioConfig?) => AzureSpeechRecognizer;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `speechConfig` | [`AzureSpeechConfig`](#azurespeechconfig) |
| `audioConfig?` | [`AzureAudioConfig`](#azureaudioconfig) |

###### Returns

[`AzureSpeechRecognizer`](#azurespeechrecognizer)

##### SpeechSynthesisOutputFormat

```ts
SpeechSynthesisOutputFormat: Partial<Record<
  | "Raw8Khz8BitMonoMULaw"
  | "Riff16Khz16KbpsMonoSiren"
  | "Audio16Khz16KbpsMonoSiren"
  | "Audio16Khz32KBitRateMonoMp3"
  | "Audio16Khz128KBitRateMonoMp3"
  | "Audio16Khz64KBitRateMonoMp3"
  | "Audio24Khz48KBitRateMonoMp3"
  | "Audio24Khz96KBitRateMonoMp3"
  | "Audio24Khz160KBitRateMonoMp3"
  | "Raw16Khz16BitMonoTrueSilk"
  | "Riff16Khz16BitMonoPcm"
  | "Riff8Khz16BitMonoPcm"
  | "Riff24Khz16BitMonoPcm"
  | "Riff8Khz8BitMonoMULaw"
  | "Raw16Khz16BitMonoPcm"
  | "Raw24Khz16BitMonoPcm"
  | "Raw8Khz16BitMonoPcm"
  | "Ogg16Khz16BitMonoOpus"
  | "Ogg24Khz16BitMonoOpus"
  | "Raw48Khz16BitMonoPcm"
  | "Riff48Khz16BitMonoPcm"
  | "Audio48Khz96KBitRateMonoMp3"
  | "Audio48Khz192KBitRateMonoMp3"
  | "Ogg48Khz16BitMonoOpus"
  | "Webm16Khz16BitMonoOpus"
  | "Webm24Khz16BitMonoOpus"
  | "Raw24Khz16BitMonoTrueSilk"
  | "Raw8Khz8BitMonoALaw"
  | "Riff8Khz8BitMonoALaw"
  | "Webm24Khz16Bit24KbpsMonoOpus"
  | "Audio16Khz16Bit32KbpsMonoOpus"
  | "Audio24Khz16Bit48KbpsMonoOpus"
  | "Audio24Khz16Bit24KbpsMonoOpus"
  | "Raw22050Hz16BitMonoPcm"
  | "Riff22050Hz16BitMonoPcm"
  | "Raw44100Hz16BitMonoPcm"
  | "Riff44100Hz16BitMonoPcm"
  | "AmrWb16000Hz"
| "G72216Khz64Kbps", SpeechSynthesisOutputFormat>> & Record<string, string | number>;
```

##### SpeechSynthesizer

```ts
SpeechSynthesizer: (speechConfig, audioConfig?) => AzureSpeechSynthesizer;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `speechConfig` | [`AzureSpeechConfig`](#azurespeechconfig) |
| `audioConfig?` | [`AzureAudioConfig`](#azureaudioconfig) |

###### Returns

[`AzureSpeechSynthesizer`](#azurespeechsynthesizer)

***

### AzureSpeechSynthesisResult

#### Extends

- `Partial`\<`Pick`\<`MicrosoftSpeechSdk.SpeechSynthesisResult`, `"audioData"` \| `"reason"` \| `"errorDetails"`\>\>

***

### AzureSpeechSynthesizer

#### Methods

##### close()?

```ts
optional close(success?, error?): void;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `success?` | () => `void` |
| `error?` | (`error`) => `void` |

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
optional outputFormat?: AzureSpeechSynthesisOutputFormat;
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
optional outputFormat?: AzureSpeechSynthesisOutputFormat;
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

## Type Aliases

### AzureAudioConfig

```ts
type AzureAudioConfig = MicrosoftSpeechSdk.AudioConfig | Record<string, unknown>;
```

***

### AzureSpeechConfigFactory

```ts
type AzureSpeechConfigFactory = () => AzureSpeechConfig;
```

#### Returns

[`AzureSpeechConfig`](#azurespeechconfig)

***

### AzureSpeechOperationAlias

```ts
type AzureSpeechOperationAlias = "voice.session.start" | "voice.turn.finalize" | "voice.speak";
```

***

### AzureSpeechOperationHandler

```ts
type AzureSpeechOperationHandler<K> = (input) => Promise<AzureSpeechOperationOutputMap[K]>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* [`AzureSpeechOperationAlias`](#azurespeechoperationalias) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`AzureSpeechOperationInputMap`](#azurespeechoperationinputmap)\[`K`\] |

#### Returns

`Promise`\<[`AzureSpeechOperationOutputMap`](#azurespeechoperationoutputmap)\[`K`\]\>

***

### AzureSpeechOperationHandlers

```ts
type AzureSpeechOperationHandlers = { [K in AzureSpeechOperationAlias]: AzureSpeechOperationHandler<K> };
```

***

### AzureSpeechSynthesisOutputFormat

```ts
type AzureSpeechSynthesisOutputFormat =
  | AzureSpeechSynthesisOutputFormatName
  | MicrosoftSpeechSdk.SpeechSynthesisOutputFormat;
```

***

### AzureSpeechSynthesisOutputFormatName

```ts
type AzureSpeechSynthesisOutputFormatName = keyof typeof MicrosoftSpeechSdk.SpeechSynthesisOutputFormat;
```

## Variables

### azureSpeechIntegration

```ts
const azureSpeechIntegration: DefinedIntegration<{
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
        fullAzureSpeechSdk: string;
        speechToText: string;
        telephony: string;
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
  voice.session.start: (input, context) => Promise<AzureSpeechToTextResult>;
  voice.speak: (input, context) => Promise<ArrayBuffer>;
  voice.turn.finalize: (input, context) => Promise<AzureSpeechToTextResult>;
}>;
```

***

### azureSpeechProviderManifest

```ts
const azureSpeechProviderManifest: {
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
        fullAzureSpeechSdk: string;
        speechToText: string;
        telephony: string;
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
| `metadata` | \{ `channelCoverage`: \{ `backgroundModelProvider`: `string`; `browserVoiceProtocol`: `string`; `fullAzureSpeechSdk`: `string`; `speechToText`: `string`; `telephony`: `string`; `textToSpeech`: `string`; \}; `implementation`: \{ `adapterCoverage`: `string`[]; `rawClientEscapeHatch`: `boolean`; `sdkPackages`: `string`[]; `strategy`: `string`; \}; `integrationEntryPoints`: \{ `manifest`: `string`; `runtime`: `string`; \}; `integrationName`: `string`; `integrationPackageName`: `string`; \} |
| `metadata.channelCoverage` | \{ `backgroundModelProvider`: `string`; `browserVoiceProtocol`: `string`; `fullAzureSpeechSdk`: `string`; `speechToText`: `string`; `telephony`: `string`; `textToSpeech`: `string`; \} |
| `metadata.channelCoverage.backgroundModelProvider` | `string` |
| `metadata.channelCoverage.browserVoiceProtocol` | `string` |
| `metadata.channelCoverage.fullAzureSpeechSdk` | `string` |
| `metadata.channelCoverage.speechToText` | `string` |
| `metadata.channelCoverage.telephony` | `string` |
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

***

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

### createAzureSpeechIntegration()

```ts
function createAzureSpeechIntegration(options): DefinedIntegration<{
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
        fullAzureSpeechSdk: string;
        speechToText: string;
        telephony: string;
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
}, unknown, IntegrationOperationHandlers>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AzureSpeechIntegrationOptions`](#azurespeechintegrationoptions) |

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<\{
  `capabilities`: (
     \| \{
     `audiences`: `"customer-facing"`[];
     `capability`: `string`;
     `description`: `string`;
     `exposesSensitiveData`: `true`;
     `label`: `string`;
     `providerObjects`: \{
        `kind`: `string`;
        `label`: `string`;
     \}[];
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
   \}
     \| \{
     `audiences`: (`"customer-facing"` \| `"internal-support"`)[];
     `capability`: `string`;
     `description`: `string`;
     `exposesSensitiveData`: `true`;
     `label`: `string`;
     `providerObjects`: \{
        `kind`: `string`;
        `label`: `string`;
     \}[];
     `requiresCredential`: `true`;
     `sideEffect?`: `never`;
  \})[];
  `category`: `string`;
  `channelAudiences`: (`"customer-facing"` \| `"mixed"`)[];
  `coverage`: \{
     `evidence`: \{
        `label`: `string`;
        `url`: `string`;
     \}[];
     `notes`: `string`[];
     `scope`: `"provider-api-subset"`;
  \};
  `credentialRequirements`: \{
     `description`: `string`;
     `id`: `string`;
     `label`: `string`;
     `required`: `true`;
  \}[];
  `directions`: (`"receive-only"` \| `"send-only"` \| `"bidirectional"`)[];
  `id`: `string`;
  `limitations`: `string`[];
  `maintainers`: \{
     `name`: `string`;
     `type`: `"official"`;
  \}[];
  `metadata`: \{
     `channelCoverage`: \{
        `backgroundModelProvider`: `string`;
        `browserVoiceProtocol`: `string`;
        `fullAzureSpeechSdk`: `string`;
        `speechToText`: `string`;
        `telephony`: `string`;
        `textToSpeech`: `string`;
     \};
     `implementation`: \{
        `adapterCoverage`: `string`[];
        `rawClientEscapeHatch`: `boolean`;
        `sdkPackages`: `string`[];
        `strategy`: `string`;
     \};
     `integrationEntryPoints`: \{
        `manifest`: `string`;
        `runtime`: `string`;
     \};
     `integrationName`: `string`;
     `integrationPackageName`: `string`;
  \};
  `name`: `string`;
  `operations`: (
     \| \{
     `alias`: `string`;
     `capability`: `string`;
     `exposesSensitiveData`: `true`;
     `externallyVisible?`: `never`;
     `providerObject`: `string`;
     `providerOperation`: `string`;
     `requiresCredential`: `true`;
     `sideEffect?`: `never`;
   \}
     \| \{
     `alias`: `string`;
     `capability`: `string`;
     `exposesSensitiveData?`: `never`;
     `externallyVisible`: `true`;
     `providerObject`: `string`;
     `providerOperation`: `string`;
     `requiresCredential`: `true`;
     `sideEffect`: `true`;
  \})[];
  `packageName`: `string`;
  `privacyNotes`: `string`[];
  `provider`: `string`;
  `trustLevel`: `"official"`;
\}, `unknown`, [`IntegrationOperationHandlers`](../../../packages/integration-kit/dist.md#integrationoperationhandlers)\>

***

### createAzureSpeechOperationHandlers()

```ts
function createAzureSpeechOperationHandlers(options): AzureSpeechOperationHandlers;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AzureSpeechIntegrationOptions`](#azurespeechintegrationoptions) |

#### Returns

[`AzureSpeechOperationHandlers`](#azurespeechoperationhandlers)

***

### createAzureSpeechRawConfigHandles()

```ts
function createAzureSpeechRawConfigHandles(options): AzureSpeechRawConfigHandles;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`AzureSpeechClientOptions`](#azurespeechclientoptions) |

#### Returns

[`AzureSpeechRawConfigHandles`](#azurespeechrawconfighandles)

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
