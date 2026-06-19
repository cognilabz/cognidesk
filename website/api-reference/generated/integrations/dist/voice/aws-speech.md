# integrations/dist/voice/aws-speech

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

### AwsSpeechCredentialStatusInput

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

### AwsSpeechFullApiGeneratedClient

#### Extends

- `AwsSpeechFullApiCallAnalyticsStreamTranscriptionGeneratedClient`.`AwsSpeechFullApiCallanalyticscategoriesGeneratedClient`.`AwsSpeechFullApiCallanalyticsjobsGeneratedClient`.`AwsSpeechFullApiLanguagemodelsGeneratedClient`.`AwsSpeechFullApiMedicalScribeStreamGeneratedClient`.`AwsSpeechFullApiMedicalStreamTranscriptionGeneratedClient`.`AwsSpeechFullApiMedicalscribejobsGeneratedClient`.`AwsSpeechFullApiMedicaltranscriptionjobsGeneratedClient`.`AwsSpeechFullApiMedicalvocabulariesGeneratedClient`.`AwsSpeechFullApiStreamTranscriptionGeneratedClient`.`AwsSpeechFullApiTagsGeneratedClient`.`AwsSpeechFullApiTranscriptionjobsGeneratedClient`.`AwsSpeechFullApiV1GeneratedClient`.`AwsSpeechFullApiVocabulariesGeneratedClient`.`AwsSpeechFullApiVocabularyFiltersGeneratedClient`

#### Methods

##### PollyDeleteLexicon()

```ts
PollyDeleteLexicon(...args): Promise<AwsSpeechFullApiSchemaDeleteLexiconOutput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"polly:DeleteLexicon"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaDeleteLexiconOutput`](#awsspeechfullapischemadeletelexiconoutput)\>

###### Inherited from

```ts
AwsSpeechFullApiV1GeneratedClient.PollyDeleteLexicon
```

##### PollyDescribeVoices()

```ts
PollyDescribeVoices(...args): Promise<AwsSpeechFullApiSchemaDescribeVoicesOutput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"polly:DescribeVoices"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaDescribeVoicesOutput`](#awsspeechfullapischemadescribevoicesoutput)\>

###### Inherited from

```ts
AwsSpeechFullApiV1GeneratedClient.PollyDescribeVoices
```

##### PollyGetLexicon()

```ts
PollyGetLexicon(...args): Promise<AwsSpeechFullApiSchemaGetLexiconOutput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"polly:GetLexicon"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaGetLexiconOutput`](#awsspeechfullapischemagetlexiconoutput)\>

###### Inherited from

```ts
AwsSpeechFullApiV1GeneratedClient.PollyGetLexicon
```

##### PollyGetSpeechSynthesisTask()

```ts
PollyGetSpeechSynthesisTask(...args): Promise<AwsSpeechFullApiSchemaGetSpeechSynthesisTaskOutput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"polly:GetSpeechSynthesisTask"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaGetSpeechSynthesisTaskOutput`](#awsspeechfullapischemagetspeechsynthesistaskoutput)\>

###### Inherited from

```ts
AwsSpeechFullApiV1GeneratedClient.PollyGetSpeechSynthesisTask
```

##### PollyListLexicons()

```ts
PollyListLexicons(...args): Promise<AwsSpeechFullApiSchemaListLexiconsOutput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"polly:ListLexicons"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaListLexiconsOutput`](#awsspeechfullapischemalistlexiconsoutput)\>

###### Inherited from

```ts
AwsSpeechFullApiV1GeneratedClient.PollyListLexicons
```

##### PollyListSpeechSynthesisTasks()

```ts
PollyListSpeechSynthesisTasks(...args): Promise<AwsSpeechFullApiSchemaListSpeechSynthesisTasksOutput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"polly:ListSpeechSynthesisTasks"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaListSpeechSynthesisTasksOutput`](#awsspeechfullapischemalistspeechsynthesistasksoutput)\>

###### Inherited from

```ts
AwsSpeechFullApiV1GeneratedClient.PollyListSpeechSynthesisTasks
```

##### PollyPutLexicon()

```ts
PollyPutLexicon(...args): Promise<AwsSpeechFullApiSchemaPutLexiconOutput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"polly:PutLexicon"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaPutLexiconOutput`](#awsspeechfullapischemaputlexiconoutput)\>

###### Inherited from

```ts
AwsSpeechFullApiV1GeneratedClient.PollyPutLexicon
```

##### PollyStartSpeechSynthesisStream()

```ts
PollyStartSpeechSynthesisStream(...args): Promise<AwsSpeechFullApiSchemaStartSpeechSynthesisStreamOutput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"polly:StartSpeechSynthesisStream"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaStartSpeechSynthesisStreamOutput`](#awsspeechfullapischemastartspeechsynthesisstreamoutput)\>

###### Inherited from

```ts
AwsSpeechFullApiV1GeneratedClient.PollyStartSpeechSynthesisStream
```

##### PollyStartSpeechSynthesisTask()

```ts
PollyStartSpeechSynthesisTask(...args): Promise<AwsSpeechFullApiSchemaStartSpeechSynthesisTaskOutput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"polly:StartSpeechSynthesisTask"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaStartSpeechSynthesisTaskOutput`](#awsspeechfullapischemastartspeechsynthesistaskoutput)\>

###### Inherited from

```ts
AwsSpeechFullApiV1GeneratedClient.PollyStartSpeechSynthesisTask
```

##### PollySynthesizeSpeech()

```ts
PollySynthesizeSpeech(...args): Promise<AwsSpeechFullApiSchemaSynthesizeSpeechOutput>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"polly:SynthesizeSpeech"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaSynthesizeSpeechOutput`](#awsspeechfullapischemasynthesizespeechoutput)\>

###### Inherited from

```ts
AwsSpeechFullApiV1GeneratedClient.PollySynthesizeSpeech
```

##### TranscribeCreateCallAnalyticsCategory()

```ts
TranscribeCreateCallAnalyticsCategory(...args): Promise<AwsSpeechFullApiSchemaCreateCallAnalyticsCategoryResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:CreateCallAnalyticsCategory"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaCreateCallAnalyticsCategoryResponse`](#awsspeechfullapischemacreatecallanalyticscategoryresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiCallanalyticscategoriesGeneratedClient.TranscribeCreateCallAnalyticsCategory
```

##### TranscribeCreateLanguageModel()

```ts
TranscribeCreateLanguageModel(...args): Promise<AwsSpeechFullApiSchemaCreateLanguageModelResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:CreateLanguageModel"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaCreateLanguageModelResponse`](#awsspeechfullapischemacreatelanguagemodelresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiLanguagemodelsGeneratedClient.TranscribeCreateLanguageModel
```

##### TranscribeCreateMedicalVocabulary()

```ts
TranscribeCreateMedicalVocabulary(...args): Promise<AwsSpeechFullApiSchemaCreateMedicalVocabularyResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:CreateMedicalVocabulary"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaCreateMedicalVocabularyResponse`](#awsspeechfullapischemacreatemedicalvocabularyresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiMedicalvocabulariesGeneratedClient.TranscribeCreateMedicalVocabulary
```

##### TranscribeCreateVocabulary()

```ts
TranscribeCreateVocabulary(...args): Promise<AwsSpeechFullApiSchemaCreateVocabularyResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:CreateVocabulary"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaCreateVocabularyResponse`](#awsspeechfullapischemacreatevocabularyresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiVocabulariesGeneratedClient.TranscribeCreateVocabulary
```

##### TranscribeCreateVocabularyFilter()

```ts
TranscribeCreateVocabularyFilter(...args): Promise<AwsSpeechFullApiSchemaCreateVocabularyFilterResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:CreateVocabularyFilter"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaCreateVocabularyFilterResponse`](#awsspeechfullapischemacreatevocabularyfilterresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiVocabularyFiltersGeneratedClient.TranscribeCreateVocabularyFilter
```

##### TranscribeDeleteCallAnalyticsCategory()

```ts
TranscribeDeleteCallAnalyticsCategory(...args): Promise<AwsSpeechFullApiSchemaDeleteCallAnalyticsCategoryResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:DeleteCallAnalyticsCategory"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaDeleteCallAnalyticsCategoryResponse`](#awsspeechfullapischemadeletecallanalyticscategoryresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiCallanalyticscategoriesGeneratedClient.TranscribeDeleteCallAnalyticsCategory
```

##### TranscribeDeleteCallAnalyticsJob()

```ts
TranscribeDeleteCallAnalyticsJob(...args): Promise<AwsSpeechFullApiSchemaDeleteCallAnalyticsJobResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:DeleteCallAnalyticsJob"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaDeleteCallAnalyticsJobResponse`](#awsspeechfullapischemadeletecallanalyticsjobresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiCallanalyticsjobsGeneratedClient.TranscribeDeleteCallAnalyticsJob
```

##### TranscribeDeleteLanguageModel()

```ts
TranscribeDeleteLanguageModel(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:DeleteLanguageModel"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
AwsSpeechFullApiLanguagemodelsGeneratedClient.TranscribeDeleteLanguageModel
```

##### TranscribeDeleteMedicalScribeJob()

```ts
TranscribeDeleteMedicalScribeJob(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:DeleteMedicalScribeJob"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
AwsSpeechFullApiMedicalscribejobsGeneratedClient.TranscribeDeleteMedicalScribeJob
```

##### TranscribeDeleteMedicalTranscriptionJob()

```ts
TranscribeDeleteMedicalTranscriptionJob(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:DeleteMedicalTranscriptionJob"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
AwsSpeechFullApiMedicaltranscriptionjobsGeneratedClient.TranscribeDeleteMedicalTranscriptionJob
```

##### TranscribeDeleteMedicalVocabulary()

```ts
TranscribeDeleteMedicalVocabulary(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:DeleteMedicalVocabulary"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
AwsSpeechFullApiMedicalvocabulariesGeneratedClient.TranscribeDeleteMedicalVocabulary
```

##### TranscribeDeleteTranscriptionJob()

```ts
TranscribeDeleteTranscriptionJob(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:DeleteTranscriptionJob"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
AwsSpeechFullApiTranscriptionjobsGeneratedClient.TranscribeDeleteTranscriptionJob
```

##### TranscribeDeleteVocabulary()

```ts
TranscribeDeleteVocabulary(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:DeleteVocabulary"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
AwsSpeechFullApiVocabulariesGeneratedClient.TranscribeDeleteVocabulary
```

##### TranscribeDeleteVocabularyFilter()

```ts
TranscribeDeleteVocabularyFilter(...args): Promise<void>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:DeleteVocabularyFilter"`\>\] |

###### Returns

`Promise`\<`void`\>

###### Inherited from

```ts
AwsSpeechFullApiVocabularyFiltersGeneratedClient.TranscribeDeleteVocabularyFilter
```

##### TranscribeDescribeLanguageModel()

```ts
TranscribeDescribeLanguageModel(...args): Promise<AwsSpeechFullApiSchemaDescribeLanguageModelResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:DescribeLanguageModel"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaDescribeLanguageModelResponse`](#awsspeechfullapischemadescribelanguagemodelresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiLanguagemodelsGeneratedClient.TranscribeDescribeLanguageModel
```

##### TranscribeGetCallAnalyticsCategory()

```ts
TranscribeGetCallAnalyticsCategory(...args): Promise<AwsSpeechFullApiSchemaGetCallAnalyticsCategoryResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:GetCallAnalyticsCategory"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaGetCallAnalyticsCategoryResponse`](#awsspeechfullapischemagetcallanalyticscategoryresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiCallanalyticscategoriesGeneratedClient.TranscribeGetCallAnalyticsCategory
```

##### TranscribeGetCallAnalyticsJob()

```ts
TranscribeGetCallAnalyticsJob(...args): Promise<AwsSpeechFullApiSchemaGetCallAnalyticsJobResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:GetCallAnalyticsJob"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaGetCallAnalyticsJobResponse`](#awsspeechfullapischemagetcallanalyticsjobresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiCallanalyticsjobsGeneratedClient.TranscribeGetCallAnalyticsJob
```

##### TranscribeGetMedicalScribeJob()

```ts
TranscribeGetMedicalScribeJob(...args): Promise<AwsSpeechFullApiSchemaGetMedicalScribeJobResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:GetMedicalScribeJob"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaGetMedicalScribeJobResponse`](#awsspeechfullapischemagetmedicalscribejobresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiMedicalscribejobsGeneratedClient.TranscribeGetMedicalScribeJob
```

##### TranscribeGetMedicalTranscriptionJob()

```ts
TranscribeGetMedicalTranscriptionJob(...args): Promise<AwsSpeechFullApiSchemaGetMedicalTranscriptionJobResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:GetMedicalTranscriptionJob"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaGetMedicalTranscriptionJobResponse`](#awsspeechfullapischemagetmedicaltranscriptionjobresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiMedicaltranscriptionjobsGeneratedClient.TranscribeGetMedicalTranscriptionJob
```

##### TranscribeGetMedicalVocabulary()

```ts
TranscribeGetMedicalVocabulary(...args): Promise<AwsSpeechFullApiSchemaGetMedicalVocabularyResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:GetMedicalVocabulary"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaGetMedicalVocabularyResponse`](#awsspeechfullapischemagetmedicalvocabularyresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiMedicalvocabulariesGeneratedClient.TranscribeGetMedicalVocabulary
```

##### TranscribeGetTranscriptionJob()

```ts
TranscribeGetTranscriptionJob(...args): Promise<AwsSpeechFullApiSchemaGetTranscriptionJobResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:GetTranscriptionJob"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaGetTranscriptionJobResponse`](#awsspeechfullapischemagettranscriptionjobresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiTranscriptionjobsGeneratedClient.TranscribeGetTranscriptionJob
```

##### TranscribeGetVocabulary()

```ts
TranscribeGetVocabulary(...args): Promise<AwsSpeechFullApiSchemaGetVocabularyResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:GetVocabulary"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaGetVocabularyResponse`](#awsspeechfullapischemagetvocabularyresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiVocabulariesGeneratedClient.TranscribeGetVocabulary
```

##### TranscribeGetVocabularyFilter()

```ts
TranscribeGetVocabularyFilter(...args): Promise<AwsSpeechFullApiSchemaGetVocabularyFilterResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:GetVocabularyFilter"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaGetVocabularyFilterResponse`](#awsspeechfullapischemagetvocabularyfilterresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiVocabularyFiltersGeneratedClient.TranscribeGetVocabularyFilter
```

##### TranscribeListCallAnalyticsCategories()

```ts
TranscribeListCallAnalyticsCategories(...args): Promise<AwsSpeechFullApiSchemaListCallAnalyticsCategoriesResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:ListCallAnalyticsCategories"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaListCallAnalyticsCategoriesResponse`](#awsspeechfullapischemalistcallanalyticscategoriesresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiCallanalyticscategoriesGeneratedClient.TranscribeListCallAnalyticsCategories
```

##### TranscribeListCallAnalyticsJobs()

```ts
TranscribeListCallAnalyticsJobs(...args): Promise<AwsSpeechFullApiSchemaListCallAnalyticsJobsResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:ListCallAnalyticsJobs"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaListCallAnalyticsJobsResponse`](#awsspeechfullapischemalistcallanalyticsjobsresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiCallanalyticsjobsGeneratedClient.TranscribeListCallAnalyticsJobs
```

##### TranscribeListLanguageModels()

```ts
TranscribeListLanguageModels(...args): Promise<AwsSpeechFullApiSchemaListLanguageModelsResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:ListLanguageModels"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaListLanguageModelsResponse`](#awsspeechfullapischemalistlanguagemodelsresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiLanguagemodelsGeneratedClient.TranscribeListLanguageModels
```

##### TranscribeListMedicalScribeJobs()

```ts
TranscribeListMedicalScribeJobs(...args): Promise<AwsSpeechFullApiSchemaListMedicalScribeJobsResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:ListMedicalScribeJobs"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaListMedicalScribeJobsResponse`](#awsspeechfullapischemalistmedicalscribejobsresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiMedicalscribejobsGeneratedClient.TranscribeListMedicalScribeJobs
```

##### TranscribeListMedicalTranscriptionJobs()

```ts
TranscribeListMedicalTranscriptionJobs(...args): Promise<AwsSpeechFullApiSchemaListMedicalTranscriptionJobsResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:ListMedicalTranscriptionJobs"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaListMedicalTranscriptionJobsResponse`](#awsspeechfullapischemalistmedicaltranscriptionjobsresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiMedicaltranscriptionjobsGeneratedClient.TranscribeListMedicalTranscriptionJobs
```

##### TranscribeListMedicalVocabularies()

```ts
TranscribeListMedicalVocabularies(...args): Promise<AwsSpeechFullApiSchemaListMedicalVocabulariesResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:ListMedicalVocabularies"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaListMedicalVocabulariesResponse`](#awsspeechfullapischemalistmedicalvocabulariesresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiMedicalvocabulariesGeneratedClient.TranscribeListMedicalVocabularies
```

##### TranscribeListTagsForResource()

```ts
TranscribeListTagsForResource(...args): Promise<AwsSpeechFullApiSchemaListTagsForResourceResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:ListTagsForResource"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaListTagsForResourceResponse`](#awsspeechfullapischemalisttagsforresourceresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiTagsGeneratedClient.TranscribeListTagsForResource
```

##### TranscribeListTranscriptionJobs()

```ts
TranscribeListTranscriptionJobs(...args): Promise<AwsSpeechFullApiSchemaListTranscriptionJobsResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:ListTranscriptionJobs"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaListTranscriptionJobsResponse`](#awsspeechfullapischemalisttranscriptionjobsresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiTranscriptionjobsGeneratedClient.TranscribeListTranscriptionJobs
```

##### TranscribeListVocabularies()

```ts
TranscribeListVocabularies(...args): Promise<AwsSpeechFullApiSchemaListVocabulariesResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:ListVocabularies"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaListVocabulariesResponse`](#awsspeechfullapischemalistvocabulariesresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiVocabulariesGeneratedClient.TranscribeListVocabularies
```

##### TranscribeListVocabularyFilters()

```ts
TranscribeListVocabularyFilters(...args): Promise<AwsSpeechFullApiSchemaListVocabularyFiltersResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:ListVocabularyFilters"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaListVocabularyFiltersResponse`](#awsspeechfullapischemalistvocabularyfiltersresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiVocabularyFiltersGeneratedClient.TranscribeListVocabularyFilters
```

##### TranscribeStartCallAnalyticsJob()

```ts
TranscribeStartCallAnalyticsJob(...args): Promise<AwsSpeechFullApiSchemaStartCallAnalyticsJobResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:StartCallAnalyticsJob"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaStartCallAnalyticsJobResponse`](#awsspeechfullapischemastartcallanalyticsjobresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiCallanalyticsjobsGeneratedClient.TranscribeStartCallAnalyticsJob
```

##### TranscribeStartMedicalScribeJob()

```ts
TranscribeStartMedicalScribeJob(...args): Promise<AwsSpeechFullApiSchemaStartMedicalScribeJobResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:StartMedicalScribeJob"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaStartMedicalScribeJobResponse`](#awsspeechfullapischemastartmedicalscribejobresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiMedicalscribejobsGeneratedClient.TranscribeStartMedicalScribeJob
```

##### TranscribeStartMedicalTranscriptionJob()

```ts
TranscribeStartMedicalTranscriptionJob(...args): Promise<AwsSpeechFullApiSchemaStartMedicalTranscriptionJobResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:StartMedicalTranscriptionJob"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaStartMedicalTranscriptionJobResponse`](#awsspeechfullapischemastartmedicaltranscriptionjobresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiMedicaltranscriptionjobsGeneratedClient.TranscribeStartMedicalTranscriptionJob
```

##### TranscribeStartTranscriptionJob()

```ts
TranscribeStartTranscriptionJob(...args): Promise<AwsSpeechFullApiSchemaStartTranscriptionJobResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:StartTranscriptionJob"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaStartTranscriptionJobResponse`](#awsspeechfullapischemastarttranscriptionjobresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiTranscriptionjobsGeneratedClient.TranscribeStartTranscriptionJob
```

##### TranscribeStreamingGetMedicalScribeStream()

```ts
TranscribeStreamingGetMedicalScribeStream(...args): Promise<AwsSpeechFullApiSchemaGetMedicalScribeStreamResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe-streaming:GetMedicalScribeStream"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaGetMedicalScribeStreamResponse`](#awsspeechfullapischemagetmedicalscribestreamresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiMedicalScribeStreamGeneratedClient.TranscribeStreamingGetMedicalScribeStream
```

##### TranscribeStreamingStartCallAnalyticsStreamTranscription()

```ts
TranscribeStreamingStartCallAnalyticsStreamTranscription(...args): Promise<AwsSpeechFullApiSchemaStartCallAnalyticsStreamTranscriptionResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe-streaming:StartCallAnalyticsStreamTranscription"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaStartCallAnalyticsStreamTranscriptionResponse`](#awsspeechfullapischemastartcallanalyticsstreamtranscriptionresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiCallAnalyticsStreamTranscriptionGeneratedClient.TranscribeStreamingStartCallAnalyticsStreamTranscription
```

##### TranscribeStreamingStartMedicalScribeStream()

```ts
TranscribeStreamingStartMedicalScribeStream(...args): Promise<AwsSpeechFullApiSchemaStartMedicalScribeStreamResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe-streaming:StartMedicalScribeStream"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaStartMedicalScribeStreamResponse`](#awsspeechfullapischemastartmedicalscribestreamresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiMedicalScribeStreamGeneratedClient.TranscribeStreamingStartMedicalScribeStream
```

##### TranscribeStreamingStartMedicalStreamTranscription()

```ts
TranscribeStreamingStartMedicalStreamTranscription(...args): Promise<AwsSpeechFullApiSchemaStartMedicalStreamTranscriptionResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe-streaming:StartMedicalStreamTranscription"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaStartMedicalStreamTranscriptionResponse`](#awsspeechfullapischemastartmedicalstreamtranscriptionresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiMedicalStreamTranscriptionGeneratedClient.TranscribeStreamingStartMedicalStreamTranscription
```

##### TranscribeStreamingStartStreamTranscription()

```ts
TranscribeStreamingStartStreamTranscription(...args): Promise<AwsSpeechFullApiSchemaStartStreamTranscriptionResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe-streaming:StartStreamTranscription"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaStartStreamTranscriptionResponse`](#awsspeechfullapischemastartstreamtranscriptionresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiStreamTranscriptionGeneratedClient.TranscribeStreamingStartStreamTranscription
```

##### TranscribeTagResource()

```ts
TranscribeTagResource(...args): Promise<AwsSpeechFullApiSchemaTagResourceResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:TagResource"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaTagResourceResponse`](#awsspeechfullapischematagresourceresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiTagsGeneratedClient.TranscribeTagResource
```

##### TranscribeUntagResource()

```ts
TranscribeUntagResource(...args): Promise<AwsSpeechFullApiSchemaUntagResourceResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:UntagResource"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaUntagResourceResponse`](#awsspeechfullapischemauntagresourceresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiTagsGeneratedClient.TranscribeUntagResource
```

##### TranscribeUpdateCallAnalyticsCategory()

```ts
TranscribeUpdateCallAnalyticsCategory(...args): Promise<AwsSpeechFullApiSchemaUpdateCallAnalyticsCategoryResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:UpdateCallAnalyticsCategory"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaUpdateCallAnalyticsCategoryResponse`](#awsspeechfullapischemaupdatecallanalyticscategoryresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiCallanalyticscategoriesGeneratedClient.TranscribeUpdateCallAnalyticsCategory
```

##### TranscribeUpdateMedicalVocabulary()

```ts
TranscribeUpdateMedicalVocabulary(...args): Promise<AwsSpeechFullApiSchemaUpdateMedicalVocabularyResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:UpdateMedicalVocabulary"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaUpdateMedicalVocabularyResponse`](#awsspeechfullapischemaupdatemedicalvocabularyresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiMedicalvocabulariesGeneratedClient.TranscribeUpdateMedicalVocabulary
```

##### TranscribeUpdateVocabulary()

```ts
TranscribeUpdateVocabulary(...args): Promise<AwsSpeechFullApiSchemaUpdateVocabularyResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:UpdateVocabulary"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaUpdateVocabularyResponse`](#awsspeechfullapischemaupdatevocabularyresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiVocabulariesGeneratedClient.TranscribeUpdateVocabulary
```

##### TranscribeUpdateVocabularyFilter()

```ts
TranscribeUpdateVocabularyFilter(...args): Promise<AwsSpeechFullApiSchemaUpdateVocabularyFilterResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AwsSpeechFullApiOperationInput`\<`"transcribe:UpdateVocabularyFilter"`\>\] |

###### Returns

`Promise`\<[`AwsSpeechFullApiSchemaUpdateVocabularyFilterResponse`](#awsspeechfullapischemaupdatevocabularyfilterresponse)\>

###### Inherited from

```ts
AwsSpeechFullApiVocabularyFiltersGeneratedClient.TranscribeUpdateVocabularyFilter
```

***

### AwsSpeechFullApiOperation

#### Properties

##### apiVersion

```ts
apiVersion: string;
```

##### docsUrl

```ts
docsUrl: string;
```

##### endpointPrefix

```ts
endpointPrefix: string;
```

##### functionName

```ts
functionName: string;
```

##### inputShape

```ts
inputShape: string;
```

##### method

```ts
method: AwsSpeechFullApiOperationMethod;
```

##### modelName

```ts
modelName: string;
```

##### modelPath

```ts
modelPath: string;
```

##### operationId

```ts
operationId: string;
```

##### outputShape

```ts
outputShape: string;
```

##### path

```ts
path: string;
```

##### protocol

```ts
protocol: string;
```

##### serviceKey

```ts
serviceKey: string;
```

##### serviceName

```ts
serviceName: string;
```

##### signingName

```ts
signingName: string;
```

##### uid

```ts
uid: string;
```

***

### AwsSpeechFullApiOperationQueryMap

#### Properties

##### polly:DeleteLexicon

```ts
polly:DeleteLexicon: {
};
```

##### polly:DescribeVoices

```ts
polly:DescribeVoices: {
  Engine?: AwsSpeechFullApiSchemaJsonValue;
  IncludeAdditionalLanguageCodes?: boolean;
  LanguageCode?: AwsSpeechFullApiSchemaJsonValue;
  NextToken?: string;
};
```

###### Engine?

```ts
optional Engine?: AwsSpeechFullApiSchemaJsonValue;
```

###### IncludeAdditionalLanguageCodes?

```ts
optional IncludeAdditionalLanguageCodes?: boolean;
```

###### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaJsonValue;
```

###### NextToken?

```ts
optional NextToken?: string;
```

##### polly:GetLexicon

```ts
polly:GetLexicon: {
};
```

##### polly:GetSpeechSynthesisTask

```ts
polly:GetSpeechSynthesisTask: {
};
```

##### polly:ListLexicons

```ts
polly:ListLexicons: {
  NextToken?: string;
};
```

###### NextToken?

```ts
optional NextToken?: string;
```

##### polly:ListSpeechSynthesisTasks

```ts
polly:ListSpeechSynthesisTasks: {
  MaxResults?: number;
  NextToken?: string;
  Status?: AwsSpeechFullApiSchemaJsonValue;
};
```

###### MaxResults?

```ts
optional MaxResults?: number;
```

###### NextToken?

```ts
optional NextToken?: string;
```

###### Status?

```ts
optional Status?: AwsSpeechFullApiSchemaJsonValue;
```

##### polly:PutLexicon

```ts
polly:PutLexicon: {
};
```

##### polly:StartSpeechSynthesisStream

```ts
polly:StartSpeechSynthesisStream: {
};
```

##### polly:StartSpeechSynthesisTask

```ts
polly:StartSpeechSynthesisTask: {
};
```

##### polly:SynthesizeSpeech

```ts
polly:SynthesizeSpeech: {
};
```

##### transcribe-streaming:GetMedicalScribeStream

```ts
transcribe-streaming:GetMedicalScribeStream: {
};
```

##### transcribe-streaming:StartCallAnalyticsStreamTranscription

```ts
transcribe-streaming:StartCallAnalyticsStreamTranscription: {
};
```

##### transcribe-streaming:StartMedicalScribeStream

```ts
transcribe-streaming:StartMedicalScribeStream: {
};
```

##### transcribe-streaming:StartMedicalStreamTranscription

```ts
transcribe-streaming:StartMedicalStreamTranscription: {
};
```

##### transcribe-streaming:StartStreamTranscription

```ts
transcribe-streaming:StartStreamTranscription: {
};
```

##### transcribe:CreateCallAnalyticsCategory

```ts
transcribe:CreateCallAnalyticsCategory: {
};
```

##### transcribe:CreateLanguageModel

```ts
transcribe:CreateLanguageModel: {
};
```

##### transcribe:CreateMedicalVocabulary

```ts
transcribe:CreateMedicalVocabulary: {
};
```

##### transcribe:CreateVocabulary

```ts
transcribe:CreateVocabulary: {
};
```

##### transcribe:CreateVocabularyFilter

```ts
transcribe:CreateVocabularyFilter: {
};
```

##### transcribe:DeleteCallAnalyticsCategory

```ts
transcribe:DeleteCallAnalyticsCategory: {
};
```

##### transcribe:DeleteCallAnalyticsJob

```ts
transcribe:DeleteCallAnalyticsJob: {
};
```

##### transcribe:DeleteLanguageModel

```ts
transcribe:DeleteLanguageModel: {
};
```

##### transcribe:DeleteMedicalScribeJob

```ts
transcribe:DeleteMedicalScribeJob: {
};
```

##### transcribe:DeleteMedicalTranscriptionJob

```ts
transcribe:DeleteMedicalTranscriptionJob: {
};
```

##### transcribe:DeleteMedicalVocabulary

```ts
transcribe:DeleteMedicalVocabulary: {
};
```

##### transcribe:DeleteTranscriptionJob

```ts
transcribe:DeleteTranscriptionJob: {
};
```

##### transcribe:DeleteVocabulary

```ts
transcribe:DeleteVocabulary: {
};
```

##### transcribe:DeleteVocabularyFilter

```ts
transcribe:DeleteVocabularyFilter: {
};
```

##### transcribe:DescribeLanguageModel

```ts
transcribe:DescribeLanguageModel: {
};
```

##### transcribe:GetCallAnalyticsCategory

```ts
transcribe:GetCallAnalyticsCategory: {
};
```

##### transcribe:GetCallAnalyticsJob

```ts
transcribe:GetCallAnalyticsJob: {
};
```

##### transcribe:GetMedicalScribeJob

```ts
transcribe:GetMedicalScribeJob: {
};
```

##### transcribe:GetMedicalTranscriptionJob

```ts
transcribe:GetMedicalTranscriptionJob: {
};
```

##### transcribe:GetMedicalVocabulary

```ts
transcribe:GetMedicalVocabulary: {
};
```

##### transcribe:GetTranscriptionJob

```ts
transcribe:GetTranscriptionJob: {
};
```

##### transcribe:GetVocabulary

```ts
transcribe:GetVocabulary: {
};
```

##### transcribe:GetVocabularyFilter

```ts
transcribe:GetVocabularyFilter: {
};
```

##### transcribe:ListCallAnalyticsCategories

```ts
transcribe:ListCallAnalyticsCategories: {
  MaxResults?: number;
  NextToken?: string;
};
```

###### MaxResults?

```ts
optional MaxResults?: number;
```

###### NextToken?

```ts
optional NextToken?: string;
```

##### transcribe:ListCallAnalyticsJobs

```ts
transcribe:ListCallAnalyticsJobs: {
  JobNameContains?: string;
  MaxResults?: number;
  NextToken?: string;
  Status?: AwsSpeechFullApiSchemaJsonValue;
};
```

###### JobNameContains?

```ts
optional JobNameContains?: string;
```

###### MaxResults?

```ts
optional MaxResults?: number;
```

###### NextToken?

```ts
optional NextToken?: string;
```

###### Status?

```ts
optional Status?: AwsSpeechFullApiSchemaJsonValue;
```

##### transcribe:ListLanguageModels

```ts
transcribe:ListLanguageModels: {
  MaxResults?: number;
  NameContains?: string;
  NextToken?: string;
  StatusEquals?: AwsSpeechFullApiSchemaJsonValue;
};
```

###### MaxResults?

```ts
optional MaxResults?: number;
```

###### NameContains?

```ts
optional NameContains?: string;
```

###### NextToken?

```ts
optional NextToken?: string;
```

###### StatusEquals?

```ts
optional StatusEquals?: AwsSpeechFullApiSchemaJsonValue;
```

##### transcribe:ListMedicalScribeJobs

```ts
transcribe:ListMedicalScribeJobs: {
  JobNameContains?: string;
  MaxResults?: number;
  NextToken?: string;
  Status?: AwsSpeechFullApiSchemaJsonValue;
};
```

###### JobNameContains?

```ts
optional JobNameContains?: string;
```

###### MaxResults?

```ts
optional MaxResults?: number;
```

###### NextToken?

```ts
optional NextToken?: string;
```

###### Status?

```ts
optional Status?: AwsSpeechFullApiSchemaJsonValue;
```

##### transcribe:ListMedicalTranscriptionJobs

```ts
transcribe:ListMedicalTranscriptionJobs: {
  JobNameContains?: string;
  MaxResults?: number;
  NextToken?: string;
  Status?: AwsSpeechFullApiSchemaJsonValue;
};
```

###### JobNameContains?

```ts
optional JobNameContains?: string;
```

###### MaxResults?

```ts
optional MaxResults?: number;
```

###### NextToken?

```ts
optional NextToken?: string;
```

###### Status?

```ts
optional Status?: AwsSpeechFullApiSchemaJsonValue;
```

##### transcribe:ListMedicalVocabularies

```ts
transcribe:ListMedicalVocabularies: {
  MaxResults?: number;
  NameContains?: string;
  NextToken?: string;
  StateEquals?: AwsSpeechFullApiSchemaJsonValue;
};
```

###### MaxResults?

```ts
optional MaxResults?: number;
```

###### NameContains?

```ts
optional NameContains?: string;
```

###### NextToken?

```ts
optional NextToken?: string;
```

###### StateEquals?

```ts
optional StateEquals?: AwsSpeechFullApiSchemaJsonValue;
```

##### transcribe:ListTagsForResource

```ts
transcribe:ListTagsForResource: {
};
```

##### transcribe:ListTranscriptionJobs

```ts
transcribe:ListTranscriptionJobs: {
  JobNameContains?: string;
  MaxResults?: number;
  NextToken?: string;
  Status?: AwsSpeechFullApiSchemaJsonValue;
};
```

###### JobNameContains?

```ts
optional JobNameContains?: string;
```

###### MaxResults?

```ts
optional MaxResults?: number;
```

###### NextToken?

```ts
optional NextToken?: string;
```

###### Status?

```ts
optional Status?: AwsSpeechFullApiSchemaJsonValue;
```

##### transcribe:ListVocabularies

```ts
transcribe:ListVocabularies: {
  MaxResults?: number;
  NameContains?: string;
  NextToken?: string;
  StateEquals?: AwsSpeechFullApiSchemaJsonValue;
};
```

###### MaxResults?

```ts
optional MaxResults?: number;
```

###### NameContains?

```ts
optional NameContains?: string;
```

###### NextToken?

```ts
optional NextToken?: string;
```

###### StateEquals?

```ts
optional StateEquals?: AwsSpeechFullApiSchemaJsonValue;
```

##### transcribe:ListVocabularyFilters

```ts
transcribe:ListVocabularyFilters: {
  MaxResults?: number;
  NameContains?: string;
  NextToken?: string;
};
```

###### MaxResults?

```ts
optional MaxResults?: number;
```

###### NameContains?

```ts
optional NameContains?: string;
```

###### NextToken?

```ts
optional NextToken?: string;
```

##### transcribe:StartCallAnalyticsJob

```ts
transcribe:StartCallAnalyticsJob: {
};
```

##### transcribe:StartMedicalScribeJob

```ts
transcribe:StartMedicalScribeJob: {
};
```

##### transcribe:StartMedicalTranscriptionJob

```ts
transcribe:StartMedicalTranscriptionJob: {
};
```

##### transcribe:StartTranscriptionJob

```ts
transcribe:StartTranscriptionJob: {
};
```

##### transcribe:TagResource

```ts
transcribe:TagResource: {
};
```

##### transcribe:UntagResource

```ts
transcribe:UntagResource: {
  TagKeys: AwsSpeechFullApiSchemaTagKeyList;
};
```

###### TagKeys

```ts
TagKeys: AwsSpeechFullApiSchemaTagKeyList;
```

##### transcribe:UpdateCallAnalyticsCategory

```ts
transcribe:UpdateCallAnalyticsCategory: {
};
```

##### transcribe:UpdateMedicalVocabulary

```ts
transcribe:UpdateMedicalVocabulary: {
};
```

##### transcribe:UpdateVocabulary

```ts
transcribe:UpdateVocabulary: {
};
```

##### transcribe:UpdateVocabularyFilter

```ts
transcribe:UpdateVocabularyFilter: {
};
```

***

### AwsSpeechFullApiOperationQueryRequiredMap

#### Properties

##### polly:DeleteLexicon

```ts
polly:DeleteLexicon: false;
```

##### polly:DescribeVoices

```ts
polly:DescribeVoices: false;
```

##### polly:GetLexicon

```ts
polly:GetLexicon: false;
```

##### polly:GetSpeechSynthesisTask

```ts
polly:GetSpeechSynthesisTask: false;
```

##### polly:ListLexicons

```ts
polly:ListLexicons: false;
```

##### polly:ListSpeechSynthesisTasks

```ts
polly:ListSpeechSynthesisTasks: false;
```

##### polly:PutLexicon

```ts
polly:PutLexicon: false;
```

##### polly:StartSpeechSynthesisStream

```ts
polly:StartSpeechSynthesisStream: false;
```

##### polly:StartSpeechSynthesisTask

```ts
polly:StartSpeechSynthesisTask: false;
```

##### polly:SynthesizeSpeech

```ts
polly:SynthesizeSpeech: false;
```

##### transcribe-streaming:GetMedicalScribeStream

```ts
transcribe-streaming:GetMedicalScribeStream: false;
```

##### transcribe-streaming:StartCallAnalyticsStreamTranscription

```ts
transcribe-streaming:StartCallAnalyticsStreamTranscription: false;
```

##### transcribe-streaming:StartMedicalScribeStream

```ts
transcribe-streaming:StartMedicalScribeStream: false;
```

##### transcribe-streaming:StartMedicalStreamTranscription

```ts
transcribe-streaming:StartMedicalStreamTranscription: false;
```

##### transcribe-streaming:StartStreamTranscription

```ts
transcribe-streaming:StartStreamTranscription: false;
```

##### transcribe:CreateCallAnalyticsCategory

```ts
transcribe:CreateCallAnalyticsCategory: false;
```

##### transcribe:CreateLanguageModel

```ts
transcribe:CreateLanguageModel: false;
```

##### transcribe:CreateMedicalVocabulary

```ts
transcribe:CreateMedicalVocabulary: false;
```

##### transcribe:CreateVocabulary

```ts
transcribe:CreateVocabulary: false;
```

##### transcribe:CreateVocabularyFilter

```ts
transcribe:CreateVocabularyFilter: false;
```

##### transcribe:DeleteCallAnalyticsCategory

```ts
transcribe:DeleteCallAnalyticsCategory: false;
```

##### transcribe:DeleteCallAnalyticsJob

```ts
transcribe:DeleteCallAnalyticsJob: false;
```

##### transcribe:DeleteLanguageModel

```ts
transcribe:DeleteLanguageModel: false;
```

##### transcribe:DeleteMedicalScribeJob

```ts
transcribe:DeleteMedicalScribeJob: false;
```

##### transcribe:DeleteMedicalTranscriptionJob

```ts
transcribe:DeleteMedicalTranscriptionJob: false;
```

##### transcribe:DeleteMedicalVocabulary

```ts
transcribe:DeleteMedicalVocabulary: false;
```

##### transcribe:DeleteTranscriptionJob

```ts
transcribe:DeleteTranscriptionJob: false;
```

##### transcribe:DeleteVocabulary

```ts
transcribe:DeleteVocabulary: false;
```

##### transcribe:DeleteVocabularyFilter

```ts
transcribe:DeleteVocabularyFilter: false;
```

##### transcribe:DescribeLanguageModel

```ts
transcribe:DescribeLanguageModel: false;
```

##### transcribe:GetCallAnalyticsCategory

```ts
transcribe:GetCallAnalyticsCategory: false;
```

##### transcribe:GetCallAnalyticsJob

```ts
transcribe:GetCallAnalyticsJob: false;
```

##### transcribe:GetMedicalScribeJob

```ts
transcribe:GetMedicalScribeJob: false;
```

##### transcribe:GetMedicalTranscriptionJob

```ts
transcribe:GetMedicalTranscriptionJob: false;
```

##### transcribe:GetMedicalVocabulary

```ts
transcribe:GetMedicalVocabulary: false;
```

##### transcribe:GetTranscriptionJob

```ts
transcribe:GetTranscriptionJob: false;
```

##### transcribe:GetVocabulary

```ts
transcribe:GetVocabulary: false;
```

##### transcribe:GetVocabularyFilter

```ts
transcribe:GetVocabularyFilter: false;
```

##### transcribe:ListCallAnalyticsCategories

```ts
transcribe:ListCallAnalyticsCategories: false;
```

##### transcribe:ListCallAnalyticsJobs

```ts
transcribe:ListCallAnalyticsJobs: false;
```

##### transcribe:ListLanguageModels

```ts
transcribe:ListLanguageModels: false;
```

##### transcribe:ListMedicalScribeJobs

```ts
transcribe:ListMedicalScribeJobs: false;
```

##### transcribe:ListMedicalTranscriptionJobs

```ts
transcribe:ListMedicalTranscriptionJobs: false;
```

##### transcribe:ListMedicalVocabularies

```ts
transcribe:ListMedicalVocabularies: false;
```

##### transcribe:ListTagsForResource

```ts
transcribe:ListTagsForResource: false;
```

##### transcribe:ListTranscriptionJobs

```ts
transcribe:ListTranscriptionJobs: false;
```

##### transcribe:ListVocabularies

```ts
transcribe:ListVocabularies: false;
```

##### transcribe:ListVocabularyFilters

```ts
transcribe:ListVocabularyFilters: false;
```

##### transcribe:StartCallAnalyticsJob

```ts
transcribe:StartCallAnalyticsJob: false;
```

##### transcribe:StartMedicalScribeJob

```ts
transcribe:StartMedicalScribeJob: false;
```

##### transcribe:StartMedicalTranscriptionJob

```ts
transcribe:StartMedicalTranscriptionJob: false;
```

##### transcribe:StartTranscriptionJob

```ts
transcribe:StartTranscriptionJob: false;
```

##### transcribe:TagResource

```ts
transcribe:TagResource: false;
```

##### transcribe:UntagResource

```ts
transcribe:UntagResource: true;
```

##### transcribe:UpdateCallAnalyticsCategory

```ts
transcribe:UpdateCallAnalyticsCategory: false;
```

##### transcribe:UpdateMedicalVocabulary

```ts
transcribe:UpdateMedicalVocabulary: false;
```

##### transcribe:UpdateVocabulary

```ts
transcribe:UpdateVocabulary: false;
```

##### transcribe:UpdateVocabularyFilter

```ts
transcribe:UpdateVocabularyFilter: false;
```

***

### AwsSpeechFullApiOperationRequestBodyMap

#### Properties

##### polly:DeleteLexicon

```ts
polly:DeleteLexicon: never;
```

##### polly:DescribeVoices

```ts
polly:DescribeVoices: never;
```

##### polly:GetLexicon

```ts
polly:GetLexicon: never;
```

##### polly:GetSpeechSynthesisTask

```ts
polly:GetSpeechSynthesisTask: never;
```

##### polly:ListLexicons

```ts
polly:ListLexicons: never;
```

##### polly:ListSpeechSynthesisTasks

```ts
polly:ListSpeechSynthesisTasks: never;
```

##### polly:PutLexicon

```ts
polly:PutLexicon: {
  Content: string;
};
```

###### Content

```ts
Content: string;
```

##### polly:StartSpeechSynthesisStream

```ts
polly:StartSpeechSynthesisStream: AwsSpeechFullApiSchemaStartSpeechSynthesisStreamActionStream;
```

##### polly:StartSpeechSynthesisTask

```ts
polly:StartSpeechSynthesisTask: {
  Engine?: AwsSpeechFullApiSchemaJsonValue;
  LanguageCode?: AwsSpeechFullApiSchemaJsonValue;
  LexiconNames?: AwsSpeechFullApiSchemaLexiconNameList;
  OutputFormat: AwsSpeechFullApiSchemaJsonValue;
  OutputS3BucketName: string;
  OutputS3KeyPrefix?: string;
  SampleRate?: string;
  SnsTopicArn?: string;
  SpeechMarkTypes?: AwsSpeechFullApiSchemaSpeechMarkTypeList;
  Text: string;
  TextType?: AwsSpeechFullApiSchemaJsonValue;
  VoiceId: AwsSpeechFullApiSchemaJsonValue;
};
```

###### Engine?

```ts
optional Engine?: AwsSpeechFullApiSchemaJsonValue;
```

###### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaJsonValue;
```

###### LexiconNames?

```ts
optional LexiconNames?: AwsSpeechFullApiSchemaLexiconNameList;
```

###### OutputFormat

```ts
OutputFormat: AwsSpeechFullApiSchemaJsonValue;
```

###### OutputS3BucketName

```ts
OutputS3BucketName: string;
```

###### OutputS3KeyPrefix?

```ts
optional OutputS3KeyPrefix?: string;
```

###### SampleRate?

```ts
optional SampleRate?: string;
```

###### SnsTopicArn?

```ts
optional SnsTopicArn?: string;
```

###### SpeechMarkTypes?

```ts
optional SpeechMarkTypes?: AwsSpeechFullApiSchemaSpeechMarkTypeList;
```

###### Text

```ts
Text: string;
```

###### TextType?

```ts
optional TextType?: AwsSpeechFullApiSchemaJsonValue;
```

###### VoiceId

```ts
VoiceId: AwsSpeechFullApiSchemaJsonValue;
```

##### polly:SynthesizeSpeech

```ts
polly:SynthesizeSpeech: {
  Engine?: AwsSpeechFullApiSchemaJsonValue;
  LanguageCode?: AwsSpeechFullApiSchemaJsonValue;
  LexiconNames?: AwsSpeechFullApiSchemaLexiconNameList;
  OutputFormat: AwsSpeechFullApiSchemaJsonValue;
  SampleRate?: string;
  SpeechMarkTypes?: AwsSpeechFullApiSchemaSpeechMarkTypeList;
  Text: string;
  TextType?: AwsSpeechFullApiSchemaJsonValue;
  VoiceId: AwsSpeechFullApiSchemaJsonValue;
};
```

###### Engine?

```ts
optional Engine?: AwsSpeechFullApiSchemaJsonValue;
```

###### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaJsonValue;
```

###### LexiconNames?

```ts
optional LexiconNames?: AwsSpeechFullApiSchemaLexiconNameList;
```

###### OutputFormat

```ts
OutputFormat: AwsSpeechFullApiSchemaJsonValue;
```

###### SampleRate?

```ts
optional SampleRate?: string;
```

###### SpeechMarkTypes?

```ts
optional SpeechMarkTypes?: AwsSpeechFullApiSchemaSpeechMarkTypeList;
```

###### Text

```ts
Text: string;
```

###### TextType?

```ts
optional TextType?: AwsSpeechFullApiSchemaJsonValue;
```

###### VoiceId

```ts
VoiceId: AwsSpeechFullApiSchemaJsonValue;
```

##### transcribe-streaming:GetMedicalScribeStream

```ts
transcribe-streaming:GetMedicalScribeStream: never;
```

##### transcribe-streaming:StartCallAnalyticsStreamTranscription

```ts
transcribe-streaming:StartCallAnalyticsStreamTranscription: AwsSpeechFullApiSchemaAudioStream;
```

##### transcribe-streaming:StartMedicalScribeStream

```ts
transcribe-streaming:StartMedicalScribeStream: AwsSpeechFullApiSchemaMedicalScribeInputStream;
```

##### transcribe-streaming:StartMedicalStreamTranscription

```ts
transcribe-streaming:StartMedicalStreamTranscription: AwsSpeechFullApiSchemaAudioStream;
```

##### transcribe-streaming:StartStreamTranscription

```ts
transcribe-streaming:StartStreamTranscription: AwsSpeechFullApiSchemaAudioStream;
```

##### transcribe:CreateCallAnalyticsCategory

```ts
transcribe:CreateCallAnalyticsCategory: {
  InputType?: AwsSpeechFullApiSchemaJsonValue;
  Rules: AwsSpeechFullApiSchemaRuleList;
  Tags?: AwsSpeechFullApiSchemaTagList;
};
```

###### InputType?

```ts
optional InputType?: AwsSpeechFullApiSchemaJsonValue;
```

###### Rules

```ts
Rules: AwsSpeechFullApiSchemaRuleList;
```

###### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

##### transcribe:CreateLanguageModel

```ts
transcribe:CreateLanguageModel: {
  BaseModelName: AwsSpeechFullApiSchemaJsonValue;
  InputDataConfig: AwsSpeechFullApiSchemaInputDataConfig;
  LanguageCode: AwsSpeechFullApiSchemaJsonValue;
  Tags?: AwsSpeechFullApiSchemaTagList;
};
```

###### BaseModelName

```ts
BaseModelName: AwsSpeechFullApiSchemaJsonValue;
```

###### InputDataConfig

```ts
InputDataConfig: AwsSpeechFullApiSchemaInputDataConfig;
```

###### LanguageCode

```ts
LanguageCode: AwsSpeechFullApiSchemaJsonValue;
```

###### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

##### transcribe:CreateMedicalVocabulary

```ts
transcribe:CreateMedicalVocabulary: {
  LanguageCode: AwsSpeechFullApiSchemaJsonValue;
  Tags?: AwsSpeechFullApiSchemaTagList;
  VocabularyFileUri: string;
};
```

###### LanguageCode

```ts
LanguageCode: AwsSpeechFullApiSchemaJsonValue;
```

###### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

###### VocabularyFileUri

```ts
VocabularyFileUri: string;
```

##### transcribe:CreateVocabulary

```ts
transcribe:CreateVocabulary: {
  DataAccessRoleArn?: string;
  LanguageCode: AwsSpeechFullApiSchemaJsonValue;
  Phrases?: AwsSpeechFullApiSchemaPhrases;
  Tags?: AwsSpeechFullApiSchemaTagList;
  VocabularyFileUri?: string;
};
```

###### DataAccessRoleArn?

```ts
optional DataAccessRoleArn?: string;
```

###### LanguageCode

```ts
LanguageCode: AwsSpeechFullApiSchemaJsonValue;
```

###### Phrases?

```ts
optional Phrases?: AwsSpeechFullApiSchemaPhrases;
```

###### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

###### VocabularyFileUri?

```ts
optional VocabularyFileUri?: string;
```

##### transcribe:CreateVocabularyFilter

```ts
transcribe:CreateVocabularyFilter: {
  DataAccessRoleArn?: string;
  LanguageCode: AwsSpeechFullApiSchemaJsonValue;
  Tags?: AwsSpeechFullApiSchemaTagList;
  VocabularyFilterFileUri?: string;
  Words?: AwsSpeechFullApiSchemaWords;
};
```

###### DataAccessRoleArn?

```ts
optional DataAccessRoleArn?: string;
```

###### LanguageCode

```ts
LanguageCode: AwsSpeechFullApiSchemaJsonValue;
```

###### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

###### VocabularyFilterFileUri?

```ts
optional VocabularyFilterFileUri?: string;
```

###### Words?

```ts
optional Words?: AwsSpeechFullApiSchemaWords;
```

##### transcribe:DeleteCallAnalyticsCategory

```ts
transcribe:DeleteCallAnalyticsCategory: never;
```

##### transcribe:DeleteCallAnalyticsJob

```ts
transcribe:DeleteCallAnalyticsJob: never;
```

##### transcribe:DeleteLanguageModel

```ts
transcribe:DeleteLanguageModel: never;
```

##### transcribe:DeleteMedicalScribeJob

```ts
transcribe:DeleteMedicalScribeJob: never;
```

##### transcribe:DeleteMedicalTranscriptionJob

```ts
transcribe:DeleteMedicalTranscriptionJob: never;
```

##### transcribe:DeleteMedicalVocabulary

```ts
transcribe:DeleteMedicalVocabulary: never;
```

##### transcribe:DeleteTranscriptionJob

```ts
transcribe:DeleteTranscriptionJob: never;
```

##### transcribe:DeleteVocabulary

```ts
transcribe:DeleteVocabulary: never;
```

##### transcribe:DeleteVocabularyFilter

```ts
transcribe:DeleteVocabularyFilter: never;
```

##### transcribe:DescribeLanguageModel

```ts
transcribe:DescribeLanguageModel: never;
```

##### transcribe:GetCallAnalyticsCategory

```ts
transcribe:GetCallAnalyticsCategory: never;
```

##### transcribe:GetCallAnalyticsJob

```ts
transcribe:GetCallAnalyticsJob: never;
```

##### transcribe:GetMedicalScribeJob

```ts
transcribe:GetMedicalScribeJob: never;
```

##### transcribe:GetMedicalTranscriptionJob

```ts
transcribe:GetMedicalTranscriptionJob: never;
```

##### transcribe:GetMedicalVocabulary

```ts
transcribe:GetMedicalVocabulary: never;
```

##### transcribe:GetTranscriptionJob

```ts
transcribe:GetTranscriptionJob: never;
```

##### transcribe:GetVocabulary

```ts
transcribe:GetVocabulary: never;
```

##### transcribe:GetVocabularyFilter

```ts
transcribe:GetVocabularyFilter: never;
```

##### transcribe:ListCallAnalyticsCategories

```ts
transcribe:ListCallAnalyticsCategories: never;
```

##### transcribe:ListCallAnalyticsJobs

```ts
transcribe:ListCallAnalyticsJobs: never;
```

##### transcribe:ListLanguageModels

```ts
transcribe:ListLanguageModels: never;
```

##### transcribe:ListMedicalScribeJobs

```ts
transcribe:ListMedicalScribeJobs: never;
```

##### transcribe:ListMedicalTranscriptionJobs

```ts
transcribe:ListMedicalTranscriptionJobs: never;
```

##### transcribe:ListMedicalVocabularies

```ts
transcribe:ListMedicalVocabularies: never;
```

##### transcribe:ListTagsForResource

```ts
transcribe:ListTagsForResource: never;
```

##### transcribe:ListTranscriptionJobs

```ts
transcribe:ListTranscriptionJobs: never;
```

##### transcribe:ListVocabularies

```ts
transcribe:ListVocabularies: never;
```

##### transcribe:ListVocabularyFilters

```ts
transcribe:ListVocabularyFilters: never;
```

##### transcribe:StartCallAnalyticsJob

```ts
transcribe:StartCallAnalyticsJob: {
  ChannelDefinitions?: AwsSpeechFullApiSchemaChannelDefinitions;
  DataAccessRoleArn?: string;
  Media: AwsSpeechFullApiSchemaMedia;
  OutputEncryptionKMSKeyId?: string;
  OutputLocation?: string;
  Settings?: AwsSpeechFullApiSchemaCallAnalyticsJobSettings;
  Tags?: AwsSpeechFullApiSchemaTagList;
};
```

###### ChannelDefinitions?

```ts
optional ChannelDefinitions?: AwsSpeechFullApiSchemaChannelDefinitions;
```

###### DataAccessRoleArn?

```ts
optional DataAccessRoleArn?: string;
```

###### Media

```ts
Media: AwsSpeechFullApiSchemaMedia;
```

###### OutputEncryptionKMSKeyId?

```ts
optional OutputEncryptionKMSKeyId?: string;
```

###### OutputLocation?

```ts
optional OutputLocation?: string;
```

###### Settings?

```ts
optional Settings?: AwsSpeechFullApiSchemaCallAnalyticsJobSettings;
```

###### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

##### transcribe:StartMedicalScribeJob

```ts
transcribe:StartMedicalScribeJob: {
  ChannelDefinitions?: AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions;
  DataAccessRoleArn: string;
  KMSEncryptionContext?: AwsSpeechFullApiSchemaKMSEncryptionContextMap;
  Media: AwsSpeechFullApiSchemaMedia;
  MedicalScribeContext?: AwsSpeechFullApiSchemaMedicalScribeContext;
  OutputBucketName: string;
  OutputEncryptionKMSKeyId?: string;
  Settings: AwsSpeechFullApiSchemaMedicalScribeSettings;
  Tags?: AwsSpeechFullApiSchemaTagList;
};
```

###### ChannelDefinitions?

```ts
optional ChannelDefinitions?: AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions;
```

###### DataAccessRoleArn

```ts
DataAccessRoleArn: string;
```

###### KMSEncryptionContext?

```ts
optional KMSEncryptionContext?: AwsSpeechFullApiSchemaKMSEncryptionContextMap;
```

###### Media

```ts
Media: AwsSpeechFullApiSchemaMedia;
```

###### MedicalScribeContext?

```ts
optional MedicalScribeContext?: AwsSpeechFullApiSchemaMedicalScribeContext;
```

###### OutputBucketName

```ts
OutputBucketName: string;
```

###### OutputEncryptionKMSKeyId?

```ts
optional OutputEncryptionKMSKeyId?: string;
```

###### Settings

```ts
Settings: AwsSpeechFullApiSchemaMedicalScribeSettings;
```

###### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

##### transcribe:StartMedicalTranscriptionJob

```ts
transcribe:StartMedicalTranscriptionJob: {
  ContentIdentificationType?: AwsSpeechFullApiSchemaJsonValue;
  KMSEncryptionContext?: AwsSpeechFullApiSchemaKMSEncryptionContextMap;
  LanguageCode: AwsSpeechFullApiSchemaJsonValue;
  Media: AwsSpeechFullApiSchemaMedia;
  MediaFormat?: AwsSpeechFullApiSchemaJsonValue;
  MediaSampleRateHertz?: number;
  OutputBucketName: string;
  OutputEncryptionKMSKeyId?: string;
  OutputKey?: string;
  Settings?: AwsSpeechFullApiSchemaMedicalTranscriptionSetting;
  Specialty: AwsSpeechFullApiSchemaJsonValue;
  Tags?: AwsSpeechFullApiSchemaTagList;
  Type: AwsSpeechFullApiSchemaJsonValue;
};
```

###### ContentIdentificationType?

```ts
optional ContentIdentificationType?: AwsSpeechFullApiSchemaJsonValue;
```

###### KMSEncryptionContext?

```ts
optional KMSEncryptionContext?: AwsSpeechFullApiSchemaKMSEncryptionContextMap;
```

###### LanguageCode

```ts
LanguageCode: AwsSpeechFullApiSchemaJsonValue;
```

###### Media

```ts
Media: AwsSpeechFullApiSchemaMedia;
```

###### MediaFormat?

```ts
optional MediaFormat?: AwsSpeechFullApiSchemaJsonValue;
```

###### MediaSampleRateHertz?

```ts
optional MediaSampleRateHertz?: number;
```

###### OutputBucketName

```ts
OutputBucketName: string;
```

###### OutputEncryptionKMSKeyId?

```ts
optional OutputEncryptionKMSKeyId?: string;
```

###### OutputKey?

```ts
optional OutputKey?: string;
```

###### Settings?

```ts
optional Settings?: AwsSpeechFullApiSchemaMedicalTranscriptionSetting;
```

###### Specialty

```ts
Specialty: AwsSpeechFullApiSchemaJsonValue;
```

###### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

###### Type

```ts
Type: AwsSpeechFullApiSchemaJsonValue;
```

##### transcribe:StartTranscriptionJob

```ts
transcribe:StartTranscriptionJob: {
  ContentRedaction?: AwsSpeechFullApiSchemaContentRedaction;
  IdentifyLanguage?: boolean;
  IdentifyMultipleLanguages?: boolean;
  JobExecutionSettings?: AwsSpeechFullApiSchemaJobExecutionSettings;
  KMSEncryptionContext?: AwsSpeechFullApiSchemaKMSEncryptionContextMap;
  LanguageCode?: AwsSpeechFullApiSchemaJsonValue;
  LanguageIdSettings?: AwsSpeechFullApiSchemaLanguageIdSettingsMap;
  LanguageOptions?: AwsSpeechFullApiSchemaLanguageOptions;
  Media: AwsSpeechFullApiSchemaMedia;
  MediaFormat?: AwsSpeechFullApiSchemaJsonValue;
  MediaSampleRateHertz?: number;
  ModelSettings?: AwsSpeechFullApiSchemaModelSettings;
  OutputBucketName?: string;
  OutputEncryptionKMSKeyId?: string;
  OutputKey?: string;
  Settings?: AwsSpeechFullApiSchemaSettings;
  Subtitles?: AwsSpeechFullApiSchemaSubtitles;
  Tags?: AwsSpeechFullApiSchemaTagList;
  ToxicityDetection?: AwsSpeechFullApiSchemaToxicityDetection;
};
```

###### ContentRedaction?

```ts
optional ContentRedaction?: AwsSpeechFullApiSchemaContentRedaction;
```

###### IdentifyLanguage?

```ts
optional IdentifyLanguage?: boolean;
```

###### IdentifyMultipleLanguages?

```ts
optional IdentifyMultipleLanguages?: boolean;
```

###### JobExecutionSettings?

```ts
optional JobExecutionSettings?: AwsSpeechFullApiSchemaJobExecutionSettings;
```

###### KMSEncryptionContext?

```ts
optional KMSEncryptionContext?: AwsSpeechFullApiSchemaKMSEncryptionContextMap;
```

###### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaJsonValue;
```

###### LanguageIdSettings?

```ts
optional LanguageIdSettings?: AwsSpeechFullApiSchemaLanguageIdSettingsMap;
```

###### LanguageOptions?

```ts
optional LanguageOptions?: AwsSpeechFullApiSchemaLanguageOptions;
```

###### Media

```ts
Media: AwsSpeechFullApiSchemaMedia;
```

###### MediaFormat?

```ts
optional MediaFormat?: AwsSpeechFullApiSchemaJsonValue;
```

###### MediaSampleRateHertz?

```ts
optional MediaSampleRateHertz?: number;
```

###### ModelSettings?

```ts
optional ModelSettings?: AwsSpeechFullApiSchemaModelSettings;
```

###### OutputBucketName?

```ts
optional OutputBucketName?: string;
```

###### OutputEncryptionKMSKeyId?

```ts
optional OutputEncryptionKMSKeyId?: string;
```

###### OutputKey?

```ts
optional OutputKey?: string;
```

###### Settings?

```ts
optional Settings?: AwsSpeechFullApiSchemaSettings;
```

###### Subtitles?

```ts
optional Subtitles?: AwsSpeechFullApiSchemaSubtitles;
```

###### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

###### ToxicityDetection?

```ts
optional ToxicityDetection?: AwsSpeechFullApiSchemaToxicityDetection;
```

##### transcribe:TagResource

```ts
transcribe:TagResource: {
  Tags: AwsSpeechFullApiSchemaTagList;
};
```

###### Tags

```ts
Tags: AwsSpeechFullApiSchemaTagList;
```

##### transcribe:UntagResource

```ts
transcribe:UntagResource: never;
```

##### transcribe:UpdateCallAnalyticsCategory

```ts
transcribe:UpdateCallAnalyticsCategory: {
  InputType?: AwsSpeechFullApiSchemaJsonValue;
  Rules: AwsSpeechFullApiSchemaRuleList;
};
```

###### InputType?

```ts
optional InputType?: AwsSpeechFullApiSchemaJsonValue;
```

###### Rules

```ts
Rules: AwsSpeechFullApiSchemaRuleList;
```

##### transcribe:UpdateMedicalVocabulary

```ts
transcribe:UpdateMedicalVocabulary: {
  LanguageCode: AwsSpeechFullApiSchemaJsonValue;
  VocabularyFileUri: string;
};
```

###### LanguageCode

```ts
LanguageCode: AwsSpeechFullApiSchemaJsonValue;
```

###### VocabularyFileUri

```ts
VocabularyFileUri: string;
```

##### transcribe:UpdateVocabulary

```ts
transcribe:UpdateVocabulary: {
  DataAccessRoleArn?: string;
  LanguageCode: AwsSpeechFullApiSchemaJsonValue;
  Phrases?: AwsSpeechFullApiSchemaPhrases;
  VocabularyFileUri?: string;
};
```

###### DataAccessRoleArn?

```ts
optional DataAccessRoleArn?: string;
```

###### LanguageCode

```ts
LanguageCode: AwsSpeechFullApiSchemaJsonValue;
```

###### Phrases?

```ts
optional Phrases?: AwsSpeechFullApiSchemaPhrases;
```

###### VocabularyFileUri?

```ts
optional VocabularyFileUri?: string;
```

##### transcribe:UpdateVocabularyFilter

```ts
transcribe:UpdateVocabularyFilter: {
  DataAccessRoleArn?: string;
  VocabularyFilterFileUri?: string;
  Words?: AwsSpeechFullApiSchemaWords;
};
```

###### DataAccessRoleArn?

```ts
optional DataAccessRoleArn?: string;
```

###### VocabularyFilterFileUri?

```ts
optional VocabularyFilterFileUri?: string;
```

###### Words?

```ts
optional Words?: AwsSpeechFullApiSchemaWords;
```

***

### AwsSpeechFullApiOperationRequestBodyRequiredMap

#### Properties

##### polly:DeleteLexicon

```ts
polly:DeleteLexicon: false;
```

##### polly:DescribeVoices

```ts
polly:DescribeVoices: false;
```

##### polly:GetLexicon

```ts
polly:GetLexicon: false;
```

##### polly:GetSpeechSynthesisTask

```ts
polly:GetSpeechSynthesisTask: false;
```

##### polly:ListLexicons

```ts
polly:ListLexicons: false;
```

##### polly:ListSpeechSynthesisTasks

```ts
polly:ListSpeechSynthesisTasks: false;
```

##### polly:PutLexicon

```ts
polly:PutLexicon: true;
```

##### polly:StartSpeechSynthesisStream

```ts
polly:StartSpeechSynthesisStream: false;
```

##### polly:StartSpeechSynthesisTask

```ts
polly:StartSpeechSynthesisTask: true;
```

##### polly:SynthesizeSpeech

```ts
polly:SynthesizeSpeech: true;
```

##### transcribe-streaming:GetMedicalScribeStream

```ts
transcribe-streaming:GetMedicalScribeStream: false;
```

##### transcribe-streaming:StartCallAnalyticsStreamTranscription

```ts
transcribe-streaming:StartCallAnalyticsStreamTranscription: true;
```

##### transcribe-streaming:StartMedicalScribeStream

```ts
transcribe-streaming:StartMedicalScribeStream: true;
```

##### transcribe-streaming:StartMedicalStreamTranscription

```ts
transcribe-streaming:StartMedicalStreamTranscription: true;
```

##### transcribe-streaming:StartStreamTranscription

```ts
transcribe-streaming:StartStreamTranscription: true;
```

##### transcribe:CreateCallAnalyticsCategory

```ts
transcribe:CreateCallAnalyticsCategory: true;
```

##### transcribe:CreateLanguageModel

```ts
transcribe:CreateLanguageModel: true;
```

##### transcribe:CreateMedicalVocabulary

```ts
transcribe:CreateMedicalVocabulary: true;
```

##### transcribe:CreateVocabulary

```ts
transcribe:CreateVocabulary: true;
```

##### transcribe:CreateVocabularyFilter

```ts
transcribe:CreateVocabularyFilter: true;
```

##### transcribe:DeleteCallAnalyticsCategory

```ts
transcribe:DeleteCallAnalyticsCategory: false;
```

##### transcribe:DeleteCallAnalyticsJob

```ts
transcribe:DeleteCallAnalyticsJob: false;
```

##### transcribe:DeleteLanguageModel

```ts
transcribe:DeleteLanguageModel: false;
```

##### transcribe:DeleteMedicalScribeJob

```ts
transcribe:DeleteMedicalScribeJob: false;
```

##### transcribe:DeleteMedicalTranscriptionJob

```ts
transcribe:DeleteMedicalTranscriptionJob: false;
```

##### transcribe:DeleteMedicalVocabulary

```ts
transcribe:DeleteMedicalVocabulary: false;
```

##### transcribe:DeleteTranscriptionJob

```ts
transcribe:DeleteTranscriptionJob: false;
```

##### transcribe:DeleteVocabulary

```ts
transcribe:DeleteVocabulary: false;
```

##### transcribe:DeleteVocabularyFilter

```ts
transcribe:DeleteVocabularyFilter: false;
```

##### transcribe:DescribeLanguageModel

```ts
transcribe:DescribeLanguageModel: false;
```

##### transcribe:GetCallAnalyticsCategory

```ts
transcribe:GetCallAnalyticsCategory: false;
```

##### transcribe:GetCallAnalyticsJob

```ts
transcribe:GetCallAnalyticsJob: false;
```

##### transcribe:GetMedicalScribeJob

```ts
transcribe:GetMedicalScribeJob: false;
```

##### transcribe:GetMedicalTranscriptionJob

```ts
transcribe:GetMedicalTranscriptionJob: false;
```

##### transcribe:GetMedicalVocabulary

```ts
transcribe:GetMedicalVocabulary: false;
```

##### transcribe:GetTranscriptionJob

```ts
transcribe:GetTranscriptionJob: false;
```

##### transcribe:GetVocabulary

```ts
transcribe:GetVocabulary: false;
```

##### transcribe:GetVocabularyFilter

```ts
transcribe:GetVocabularyFilter: false;
```

##### transcribe:ListCallAnalyticsCategories

```ts
transcribe:ListCallAnalyticsCategories: false;
```

##### transcribe:ListCallAnalyticsJobs

```ts
transcribe:ListCallAnalyticsJobs: false;
```

##### transcribe:ListLanguageModels

```ts
transcribe:ListLanguageModels: false;
```

##### transcribe:ListMedicalScribeJobs

```ts
transcribe:ListMedicalScribeJobs: false;
```

##### transcribe:ListMedicalTranscriptionJobs

```ts
transcribe:ListMedicalTranscriptionJobs: false;
```

##### transcribe:ListMedicalVocabularies

```ts
transcribe:ListMedicalVocabularies: false;
```

##### transcribe:ListTagsForResource

```ts
transcribe:ListTagsForResource: false;
```

##### transcribe:ListTranscriptionJobs

```ts
transcribe:ListTranscriptionJobs: false;
```

##### transcribe:ListVocabularies

```ts
transcribe:ListVocabularies: false;
```

##### transcribe:ListVocabularyFilters

```ts
transcribe:ListVocabularyFilters: false;
```

##### transcribe:StartCallAnalyticsJob

```ts
transcribe:StartCallAnalyticsJob: true;
```

##### transcribe:StartMedicalScribeJob

```ts
transcribe:StartMedicalScribeJob: true;
```

##### transcribe:StartMedicalTranscriptionJob

```ts
transcribe:StartMedicalTranscriptionJob: true;
```

##### transcribe:StartTranscriptionJob

```ts
transcribe:StartTranscriptionJob: true;
```

##### transcribe:TagResource

```ts
transcribe:TagResource: true;
```

##### transcribe:UntagResource

```ts
transcribe:UntagResource: false;
```

##### transcribe:UpdateCallAnalyticsCategory

```ts
transcribe:UpdateCallAnalyticsCategory: true;
```

##### transcribe:UpdateMedicalVocabulary

```ts
transcribe:UpdateMedicalVocabulary: true;
```

##### transcribe:UpdateVocabulary

```ts
transcribe:UpdateVocabulary: true;
```

##### transcribe:UpdateVocabularyFilter

```ts
transcribe:UpdateVocabularyFilter: false;
```

***

### AwsSpeechFullApiOperationResponseMap

#### Properties

##### polly:DeleteLexicon

```ts
polly:DeleteLexicon: AwsSpeechFullApiSchemaDeleteLexiconOutput;
```

##### polly:DescribeVoices

```ts
polly:DescribeVoices: AwsSpeechFullApiSchemaDescribeVoicesOutput;
```

##### polly:GetLexicon

```ts
polly:GetLexicon: AwsSpeechFullApiSchemaGetLexiconOutput;
```

##### polly:GetSpeechSynthesisTask

```ts
polly:GetSpeechSynthesisTask: AwsSpeechFullApiSchemaGetSpeechSynthesisTaskOutput;
```

##### polly:ListLexicons

```ts
polly:ListLexicons: AwsSpeechFullApiSchemaListLexiconsOutput;
```

##### polly:ListSpeechSynthesisTasks

```ts
polly:ListSpeechSynthesisTasks: AwsSpeechFullApiSchemaListSpeechSynthesisTasksOutput;
```

##### polly:PutLexicon

```ts
polly:PutLexicon: AwsSpeechFullApiSchemaPutLexiconOutput;
```

##### polly:StartSpeechSynthesisStream

```ts
polly:StartSpeechSynthesisStream: AwsSpeechFullApiSchemaStartSpeechSynthesisStreamOutput;
```

##### polly:StartSpeechSynthesisTask

```ts
polly:StartSpeechSynthesisTask: AwsSpeechFullApiSchemaStartSpeechSynthesisTaskOutput;
```

##### polly:SynthesizeSpeech

```ts
polly:SynthesizeSpeech: AwsSpeechFullApiSchemaSynthesizeSpeechOutput;
```

##### transcribe-streaming:GetMedicalScribeStream

```ts
transcribe-streaming:GetMedicalScribeStream: AwsSpeechFullApiSchemaGetMedicalScribeStreamResponse;
```

##### transcribe-streaming:StartCallAnalyticsStreamTranscription

```ts
transcribe-streaming:StartCallAnalyticsStreamTranscription: AwsSpeechFullApiSchemaStartCallAnalyticsStreamTranscriptionResponse;
```

##### transcribe-streaming:StartMedicalScribeStream

```ts
transcribe-streaming:StartMedicalScribeStream: AwsSpeechFullApiSchemaStartMedicalScribeStreamResponse;
```

##### transcribe-streaming:StartMedicalStreamTranscription

```ts
transcribe-streaming:StartMedicalStreamTranscription: AwsSpeechFullApiSchemaStartMedicalStreamTranscriptionResponse;
```

##### transcribe-streaming:StartStreamTranscription

```ts
transcribe-streaming:StartStreamTranscription: AwsSpeechFullApiSchemaStartStreamTranscriptionResponse;
```

##### transcribe:CreateCallAnalyticsCategory

```ts
transcribe:CreateCallAnalyticsCategory: AwsSpeechFullApiSchemaCreateCallAnalyticsCategoryResponse;
```

##### transcribe:CreateLanguageModel

```ts
transcribe:CreateLanguageModel: AwsSpeechFullApiSchemaCreateLanguageModelResponse;
```

##### transcribe:CreateMedicalVocabulary

```ts
transcribe:CreateMedicalVocabulary: AwsSpeechFullApiSchemaCreateMedicalVocabularyResponse;
```

##### transcribe:CreateVocabulary

```ts
transcribe:CreateVocabulary: AwsSpeechFullApiSchemaCreateVocabularyResponse;
```

##### transcribe:CreateVocabularyFilter

```ts
transcribe:CreateVocabularyFilter: AwsSpeechFullApiSchemaCreateVocabularyFilterResponse;
```

##### transcribe:DeleteCallAnalyticsCategory

```ts
transcribe:DeleteCallAnalyticsCategory: AwsSpeechFullApiSchemaDeleteCallAnalyticsCategoryResponse;
```

##### transcribe:DeleteCallAnalyticsJob

```ts
transcribe:DeleteCallAnalyticsJob: AwsSpeechFullApiSchemaDeleteCallAnalyticsJobResponse;
```

##### transcribe:DeleteLanguageModel

```ts
transcribe:DeleteLanguageModel: void;
```

##### transcribe:DeleteMedicalScribeJob

```ts
transcribe:DeleteMedicalScribeJob: void;
```

##### transcribe:DeleteMedicalTranscriptionJob

```ts
transcribe:DeleteMedicalTranscriptionJob: void;
```

##### transcribe:DeleteMedicalVocabulary

```ts
transcribe:DeleteMedicalVocabulary: void;
```

##### transcribe:DeleteTranscriptionJob

```ts
transcribe:DeleteTranscriptionJob: void;
```

##### transcribe:DeleteVocabulary

```ts
transcribe:DeleteVocabulary: void;
```

##### transcribe:DeleteVocabularyFilter

```ts
transcribe:DeleteVocabularyFilter: void;
```

##### transcribe:DescribeLanguageModel

```ts
transcribe:DescribeLanguageModel: AwsSpeechFullApiSchemaDescribeLanguageModelResponse;
```

##### transcribe:GetCallAnalyticsCategory

```ts
transcribe:GetCallAnalyticsCategory: AwsSpeechFullApiSchemaGetCallAnalyticsCategoryResponse;
```

##### transcribe:GetCallAnalyticsJob

```ts
transcribe:GetCallAnalyticsJob: AwsSpeechFullApiSchemaGetCallAnalyticsJobResponse;
```

##### transcribe:GetMedicalScribeJob

```ts
transcribe:GetMedicalScribeJob: AwsSpeechFullApiSchemaGetMedicalScribeJobResponse;
```

##### transcribe:GetMedicalTranscriptionJob

```ts
transcribe:GetMedicalTranscriptionJob: AwsSpeechFullApiSchemaGetMedicalTranscriptionJobResponse;
```

##### transcribe:GetMedicalVocabulary

```ts
transcribe:GetMedicalVocabulary: AwsSpeechFullApiSchemaGetMedicalVocabularyResponse;
```

##### transcribe:GetTranscriptionJob

```ts
transcribe:GetTranscriptionJob: AwsSpeechFullApiSchemaGetTranscriptionJobResponse;
```

##### transcribe:GetVocabulary

```ts
transcribe:GetVocabulary: AwsSpeechFullApiSchemaGetVocabularyResponse;
```

##### transcribe:GetVocabularyFilter

```ts
transcribe:GetVocabularyFilter: AwsSpeechFullApiSchemaGetVocabularyFilterResponse;
```

##### transcribe:ListCallAnalyticsCategories

```ts
transcribe:ListCallAnalyticsCategories: AwsSpeechFullApiSchemaListCallAnalyticsCategoriesResponse;
```

##### transcribe:ListCallAnalyticsJobs

```ts
transcribe:ListCallAnalyticsJobs: AwsSpeechFullApiSchemaListCallAnalyticsJobsResponse;
```

##### transcribe:ListLanguageModels

```ts
transcribe:ListLanguageModels: AwsSpeechFullApiSchemaListLanguageModelsResponse;
```

##### transcribe:ListMedicalScribeJobs

```ts
transcribe:ListMedicalScribeJobs: AwsSpeechFullApiSchemaListMedicalScribeJobsResponse;
```

##### transcribe:ListMedicalTranscriptionJobs

```ts
transcribe:ListMedicalTranscriptionJobs: AwsSpeechFullApiSchemaListMedicalTranscriptionJobsResponse;
```

##### transcribe:ListMedicalVocabularies

```ts
transcribe:ListMedicalVocabularies: AwsSpeechFullApiSchemaListMedicalVocabulariesResponse;
```

##### transcribe:ListTagsForResource

```ts
transcribe:ListTagsForResource: AwsSpeechFullApiSchemaListTagsForResourceResponse;
```

##### transcribe:ListTranscriptionJobs

```ts
transcribe:ListTranscriptionJobs: AwsSpeechFullApiSchemaListTranscriptionJobsResponse;
```

##### transcribe:ListVocabularies

```ts
transcribe:ListVocabularies: AwsSpeechFullApiSchemaListVocabulariesResponse;
```

##### transcribe:ListVocabularyFilters

```ts
transcribe:ListVocabularyFilters: AwsSpeechFullApiSchemaListVocabularyFiltersResponse;
```

##### transcribe:StartCallAnalyticsJob

```ts
transcribe:StartCallAnalyticsJob: AwsSpeechFullApiSchemaStartCallAnalyticsJobResponse;
```

##### transcribe:StartMedicalScribeJob

```ts
transcribe:StartMedicalScribeJob: AwsSpeechFullApiSchemaStartMedicalScribeJobResponse;
```

##### transcribe:StartMedicalTranscriptionJob

```ts
transcribe:StartMedicalTranscriptionJob: AwsSpeechFullApiSchemaStartMedicalTranscriptionJobResponse;
```

##### transcribe:StartTranscriptionJob

```ts
transcribe:StartTranscriptionJob: AwsSpeechFullApiSchemaStartTranscriptionJobResponse;
```

##### transcribe:TagResource

```ts
transcribe:TagResource: AwsSpeechFullApiSchemaTagResourceResponse;
```

##### transcribe:UntagResource

```ts
transcribe:UntagResource: AwsSpeechFullApiSchemaUntagResourceResponse;
```

##### transcribe:UpdateCallAnalyticsCategory

```ts
transcribe:UpdateCallAnalyticsCategory: AwsSpeechFullApiSchemaUpdateCallAnalyticsCategoryResponse;
```

##### transcribe:UpdateMedicalVocabulary

```ts
transcribe:UpdateMedicalVocabulary: AwsSpeechFullApiSchemaUpdateMedicalVocabularyResponse;
```

##### transcribe:UpdateVocabulary

```ts
transcribe:UpdateVocabulary: AwsSpeechFullApiSchemaUpdateVocabularyResponse;
```

##### transcribe:UpdateVocabularyFilter

```ts
transcribe:UpdateVocabularyFilter: AwsSpeechFullApiSchemaUpdateVocabularyFilterResponse;
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

### AwsSpeechFullApiOperationMethod

```ts
type AwsSpeechFullApiOperationMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
```

***

### AwsSpeechFullApiOperationUid

```ts
type AwsSpeechFullApiOperationUid = typeof AWS_SPEECH_FULL_API_OPERATION_UIDS[number];
```

***

### AwsSpeechFullApiSchemaAbsoluteTimeRange

```ts
type AwsSpeechFullApiSchemaAbsoluteTimeRange = {
  EndTime?: number;
  First?: number;
  Last?: number;
  StartTime?: number;
};
```

#### Properties

##### EndTime?

```ts
optional EndTime?: number;
```

##### First?

```ts
optional First?: number;
```

##### Last?

```ts
optional Last?: number;
```

##### StartTime?

```ts
optional StartTime?: number;
```

***

### AwsSpeechFullApiSchemaAlternative

```ts
type AwsSpeechFullApiSchemaAlternative = {
  Entities?: AwsSpeechFullApiSchemaEntityList;
  Items?: AwsSpeechFullApiSchemaItemList;
  Transcript?: string;
};
```

#### Properties

##### Entities?

```ts
optional Entities?: AwsSpeechFullApiSchemaEntityList;
```

##### Items?

```ts
optional Items?: AwsSpeechFullApiSchemaItemList;
```

##### Transcript?

```ts
optional Transcript?: string;
```

***

### AwsSpeechFullApiSchemaAlternativeList

```ts
type AwsSpeechFullApiSchemaAlternativeList = ReadonlyArray<AwsSpeechFullApiSchemaAlternative>;
```

***

### AwsSpeechFullApiSchemaAudioEvent

```ts
type AwsSpeechFullApiSchemaAudioEvent = {
  AudioChunk?: string;
};
```

#### Properties

##### AudioChunk?

```ts
optional AudioChunk?: string;
```

***

### AwsSpeechFullApiSchemaAudioEvent2

```ts
type AwsSpeechFullApiSchemaAudioEvent2 = {
  AudioChunk?: string;
};
```

#### Properties

##### AudioChunk?

```ts
optional AudioChunk?: string;
```

***

### AwsSpeechFullApiSchemaAudioStream

```ts
type AwsSpeechFullApiSchemaAudioStream =
  | {
  AudioEvent: AwsSpeechFullApiSchemaAudioEvent;
}
  | {
  ConfigurationEvent: AwsSpeechFullApiSchemaConfigurationEvent;
};
```

***

### AwsSpeechFullApiSchemaBadRequestException

```ts
type AwsSpeechFullApiSchemaBadRequestException = {
  Message?: string;
};
```

#### Properties

##### Message?

```ts
optional Message?: string;
```

***

### AwsSpeechFullApiSchemaBaseModelName

```ts
type AwsSpeechFullApiSchemaBaseModelName = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsEntity

```ts
type AwsSpeechFullApiSchemaCallAnalyticsEntity = {
  BeginOffsetMillis?: number;
  Category?: string;
  Confidence?: number;
  Content?: string;
  EndOffsetMillis?: number;
  Type?: string;
};
```

#### Properties

##### BeginOffsetMillis?

```ts
optional BeginOffsetMillis?: number;
```

##### Category?

```ts
optional Category?: string;
```

##### Confidence?

```ts
optional Confidence?: number;
```

##### Content?

```ts
optional Content?: string;
```

##### EndOffsetMillis?

```ts
optional EndOffsetMillis?: number;
```

##### Type?

```ts
optional Type?: string;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsEntityList

```ts
type AwsSpeechFullApiSchemaCallAnalyticsEntityList = ReadonlyArray<AwsSpeechFullApiSchemaCallAnalyticsEntity>;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsFeature

```ts
type AwsSpeechFullApiSchemaCallAnalyticsFeature = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsItem

```ts
type AwsSpeechFullApiSchemaCallAnalyticsItem = {
  BeginOffsetMillis?: number;
  Confidence?: number;
  Content?: string;
  EndOffsetMillis?: number;
  Stable?: boolean;
  Type?: AwsSpeechFullApiSchemaItemType;
  VocabularyFilterMatch?: boolean;
};
```

#### Properties

##### BeginOffsetMillis?

```ts
optional BeginOffsetMillis?: number;
```

##### Confidence?

```ts
optional Confidence?: number;
```

##### Content?

```ts
optional Content?: string;
```

##### EndOffsetMillis?

```ts
optional EndOffsetMillis?: number;
```

##### Stable?

```ts
optional Stable?: boolean;
```

##### Type?

```ts
optional Type?: AwsSpeechFullApiSchemaItemType;
```

##### VocabularyFilterMatch?

```ts
optional VocabularyFilterMatch?: boolean;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsItemList

```ts
type AwsSpeechFullApiSchemaCallAnalyticsItemList = ReadonlyArray<AwsSpeechFullApiSchemaCallAnalyticsItem>;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsJob

```ts
type AwsSpeechFullApiSchemaCallAnalyticsJob = {
  CallAnalyticsJobDetails?: AwsSpeechFullApiSchemaCallAnalyticsJobDetails;
  CallAnalyticsJobName?: string;
  CallAnalyticsJobStatus?: AwsSpeechFullApiSchemaCallAnalyticsJobStatus;
  ChannelDefinitions?: AwsSpeechFullApiSchemaChannelDefinitions;
  CompletionTime?: string;
  CreationTime?: string;
  DataAccessRoleArn?: string;
  FailureReason?: string;
  IdentifiedLanguageScore?: number;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  Media?: AwsSpeechFullApiSchemaMedia;
  MediaFormat?: AwsSpeechFullApiSchemaMediaFormat;
  MediaSampleRateHertz?: number;
  Settings?: AwsSpeechFullApiSchemaCallAnalyticsJobSettings;
  StartTime?: string;
  Tags?: AwsSpeechFullApiSchemaTagList;
  Transcript?: AwsSpeechFullApiSchemaTranscript;
};
```

#### Properties

##### CallAnalyticsJobDetails?

```ts
optional CallAnalyticsJobDetails?: AwsSpeechFullApiSchemaCallAnalyticsJobDetails;
```

##### CallAnalyticsJobName?

```ts
optional CallAnalyticsJobName?: string;
```

##### CallAnalyticsJobStatus?

```ts
optional CallAnalyticsJobStatus?: AwsSpeechFullApiSchemaCallAnalyticsJobStatus;
```

##### ChannelDefinitions?

```ts
optional ChannelDefinitions?: AwsSpeechFullApiSchemaChannelDefinitions;
```

##### CompletionTime?

```ts
optional CompletionTime?: string;
```

##### CreationTime?

```ts
optional CreationTime?: string;
```

##### DataAccessRoleArn?

```ts
optional DataAccessRoleArn?: string;
```

##### FailureReason?

```ts
optional FailureReason?: string;
```

##### IdentifiedLanguageScore?

```ts
optional IdentifiedLanguageScore?: number;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### Media?

```ts
optional Media?: AwsSpeechFullApiSchemaMedia;
```

##### MediaFormat?

```ts
optional MediaFormat?: AwsSpeechFullApiSchemaMediaFormat;
```

##### MediaSampleRateHertz?

```ts
optional MediaSampleRateHertz?: number;
```

##### Settings?

```ts
optional Settings?: AwsSpeechFullApiSchemaCallAnalyticsJobSettings;
```

##### StartTime?

```ts
optional StartTime?: string;
```

##### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

##### Transcript?

```ts
optional Transcript?: AwsSpeechFullApiSchemaTranscript;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsJobDetails

```ts
type AwsSpeechFullApiSchemaCallAnalyticsJobDetails = {
  Skipped?: AwsSpeechFullApiSchemaCallAnalyticsSkippedFeatureList;
};
```

#### Properties

##### Skipped?

```ts
optional Skipped?: AwsSpeechFullApiSchemaCallAnalyticsSkippedFeatureList;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsJobSettings

```ts
type AwsSpeechFullApiSchemaCallAnalyticsJobSettings = {
  ContentRedaction?: AwsSpeechFullApiSchemaContentRedaction;
  LanguageIdSettings?: AwsSpeechFullApiSchemaLanguageIdSettingsMap;
  LanguageModelName?: string;
  LanguageOptions?: AwsSpeechFullApiSchemaLanguageOptions;
  Summarization?: AwsSpeechFullApiSchemaSummarization;
  VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod;
  VocabularyFilterName?: string;
  VocabularyName?: string;
};
```

#### Properties

##### ContentRedaction?

```ts
optional ContentRedaction?: AwsSpeechFullApiSchemaContentRedaction;
```

##### LanguageIdSettings?

```ts
optional LanguageIdSettings?: AwsSpeechFullApiSchemaLanguageIdSettingsMap;
```

##### LanguageModelName?

```ts
optional LanguageModelName?: string;
```

##### LanguageOptions?

```ts
optional LanguageOptions?: AwsSpeechFullApiSchemaLanguageOptions;
```

##### Summarization?

```ts
optional Summarization?: AwsSpeechFullApiSchemaSummarization;
```

##### VocabularyFilterMethod?

```ts
optional VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod;
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

### AwsSpeechFullApiSchemaCallAnalyticsJobStatus

```ts
type AwsSpeechFullApiSchemaCallAnalyticsJobStatus = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsJobSummaries

```ts
type AwsSpeechFullApiSchemaCallAnalyticsJobSummaries = ReadonlyArray<AwsSpeechFullApiSchemaCallAnalyticsJobSummary>;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsJobSummary

```ts
type AwsSpeechFullApiSchemaCallAnalyticsJobSummary = {
  CallAnalyticsJobDetails?: AwsSpeechFullApiSchemaCallAnalyticsJobDetails;
  CallAnalyticsJobName?: string;
  CallAnalyticsJobStatus?: AwsSpeechFullApiSchemaCallAnalyticsJobStatus;
  CompletionTime?: string;
  CreationTime?: string;
  FailureReason?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  StartTime?: string;
};
```

#### Properties

##### CallAnalyticsJobDetails?

```ts
optional CallAnalyticsJobDetails?: AwsSpeechFullApiSchemaCallAnalyticsJobDetails;
```

##### CallAnalyticsJobName?

```ts
optional CallAnalyticsJobName?: string;
```

##### CallAnalyticsJobStatus?

```ts
optional CallAnalyticsJobStatus?: AwsSpeechFullApiSchemaCallAnalyticsJobStatus;
```

##### CompletionTime?

```ts
optional CompletionTime?: string;
```

##### CreationTime?

```ts
optional CreationTime?: string;
```

##### FailureReason?

```ts
optional FailureReason?: string;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### StartTime?

```ts
optional StartTime?: string;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsLanguageCode

```ts
type AwsSpeechFullApiSchemaCallAnalyticsLanguageCode = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsLanguageIdentification

```ts
type AwsSpeechFullApiSchemaCallAnalyticsLanguageIdentification = ReadonlyArray<AwsSpeechFullApiSchemaCallAnalyticsLanguageWithScore>;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsLanguageWithScore

```ts
type AwsSpeechFullApiSchemaCallAnalyticsLanguageWithScore = {
  LanguageCode?: AwsSpeechFullApiSchemaCallAnalyticsLanguageCode;
  Score?: number;
};
```

#### Properties

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaCallAnalyticsLanguageCode;
```

##### Score?

```ts
optional Score?: number;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsSkippedFeature

```ts
type AwsSpeechFullApiSchemaCallAnalyticsSkippedFeature = {
  Feature?: AwsSpeechFullApiSchemaCallAnalyticsFeature;
  Message?: string;
  ReasonCode?: AwsSpeechFullApiSchemaCallAnalyticsSkippedReasonCode;
};
```

#### Properties

##### Feature?

```ts
optional Feature?: AwsSpeechFullApiSchemaCallAnalyticsFeature;
```

##### Message?

```ts
optional Message?: string;
```

##### ReasonCode?

```ts
optional ReasonCode?: AwsSpeechFullApiSchemaCallAnalyticsSkippedReasonCode;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsSkippedFeatureList

```ts
type AwsSpeechFullApiSchemaCallAnalyticsSkippedFeatureList = ReadonlyArray<AwsSpeechFullApiSchemaCallAnalyticsSkippedFeature>;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsSkippedReasonCode

```ts
type AwsSpeechFullApiSchemaCallAnalyticsSkippedReasonCode = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaCallAnalyticsTranscriptResultStream

```ts
type AwsSpeechFullApiSchemaCallAnalyticsTranscriptResultStream =
  | {
  UtteranceEvent: AwsSpeechFullApiSchemaUtteranceEvent;
}
  | {
  CategoryEvent: AwsSpeechFullApiSchemaCategoryEvent;
}
  | {
  BadRequestException: AwsSpeechFullApiSchemaBadRequestException;
}
  | {
  LimitExceededException: AwsSpeechFullApiSchemaLimitExceededException;
}
  | {
  InternalFailureException: AwsSpeechFullApiSchemaInternalFailureException;
}
  | {
  ConflictException: AwsSpeechFullApiSchemaConflictException;
}
  | {
  ServiceUnavailableException: AwsSpeechFullApiSchemaServiceUnavailableException;
};
```

***

### AwsSpeechFullApiSchemaCategoryEvent

```ts
type AwsSpeechFullApiSchemaCategoryEvent = {
  MatchedCategories?: AwsSpeechFullApiSchemaStringList;
  MatchedDetails?: AwsSpeechFullApiSchemaMatchedCategoryDetails;
};
```

#### Properties

##### MatchedCategories?

```ts
optional MatchedCategories?: AwsSpeechFullApiSchemaStringList;
```

##### MatchedDetails?

```ts
optional MatchedDetails?: AwsSpeechFullApiSchemaMatchedCategoryDetails;
```

***

### AwsSpeechFullApiSchemaCategoryProperties

```ts
type AwsSpeechFullApiSchemaCategoryProperties = {
  CategoryName?: string;
  CreateTime?: string;
  InputType?: AwsSpeechFullApiSchemaInputType;
  LastUpdateTime?: string;
  Rules?: AwsSpeechFullApiSchemaRuleList;
  Tags?: AwsSpeechFullApiSchemaTagList;
};
```

#### Properties

##### CategoryName?

```ts
optional CategoryName?: string;
```

##### CreateTime?

```ts
optional CreateTime?: string;
```

##### InputType?

```ts
optional InputType?: AwsSpeechFullApiSchemaInputType;
```

##### LastUpdateTime?

```ts
optional LastUpdateTime?: string;
```

##### Rules?

```ts
optional Rules?: AwsSpeechFullApiSchemaRuleList;
```

##### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

***

### AwsSpeechFullApiSchemaCategoryPropertiesList

```ts
type AwsSpeechFullApiSchemaCategoryPropertiesList = ReadonlyArray<AwsSpeechFullApiSchemaCategoryProperties>;
```

***

### AwsSpeechFullApiSchemaChannelDefinition

```ts
type AwsSpeechFullApiSchemaChannelDefinition = {
  ChannelId?: number;
  ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole;
};
```

#### Properties

##### ChannelId?

```ts
optional ChannelId?: number;
```

##### ParticipantRole?

```ts
optional ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole;
```

***

### AwsSpeechFullApiSchemaChannelDefinition2

```ts
type AwsSpeechFullApiSchemaChannelDefinition2 = {
  ChannelId: number;
  ParticipantRole: AwsSpeechFullApiSchemaParticipantRole2;
};
```

#### Properties

##### ChannelId

```ts
ChannelId: number;
```

##### ParticipantRole

```ts
ParticipantRole: AwsSpeechFullApiSchemaParticipantRole2;
```

***

### AwsSpeechFullApiSchemaChannelDefinitions

```ts
type AwsSpeechFullApiSchemaChannelDefinitions = ReadonlyArray<AwsSpeechFullApiSchemaChannelDefinition>;
```

***

### AwsSpeechFullApiSchemaChannelDefinitions2

```ts
type AwsSpeechFullApiSchemaChannelDefinitions2 = ReadonlyArray<AwsSpeechFullApiSchemaChannelDefinition2>;
```

***

### AwsSpeechFullApiSchemaCharacterOffsets

```ts
type AwsSpeechFullApiSchemaCharacterOffsets = {
  Begin?: number;
  End?: number;
};
```

#### Properties

##### Begin?

```ts
optional Begin?: number;
```

##### End?

```ts
optional End?: number;
```

***

### AwsSpeechFullApiSchemaClinicalNoteGenerationResult

```ts
type AwsSpeechFullApiSchemaClinicalNoteGenerationResult = {
  ClinicalNoteOutputLocation?: string;
  FailureReason?: string;
  Status?: AwsSpeechFullApiSchemaClinicalNoteGenerationStatus;
  TranscriptOutputLocation?: string;
};
```

#### Properties

##### ClinicalNoteOutputLocation?

```ts
optional ClinicalNoteOutputLocation?: string;
```

##### FailureReason?

```ts
optional FailureReason?: string;
```

##### Status?

```ts
optional Status?: AwsSpeechFullApiSchemaClinicalNoteGenerationStatus;
```

##### TranscriptOutputLocation?

```ts
optional TranscriptOutputLocation?: string;
```

***

### AwsSpeechFullApiSchemaClinicalNoteGenerationSettings

```ts
type AwsSpeechFullApiSchemaClinicalNoteGenerationSettings = {
  NoteTemplate?: AwsSpeechFullApiSchemaMedicalScribeNoteTemplate;
};
```

#### Properties

##### NoteTemplate?

```ts
optional NoteTemplate?: AwsSpeechFullApiSchemaMedicalScribeNoteTemplate;
```

***

### AwsSpeechFullApiSchemaClinicalNoteGenerationSettings2

```ts
type AwsSpeechFullApiSchemaClinicalNoteGenerationSettings2 = {
  NoteTemplate?: AwsSpeechFullApiSchemaMedicalScribeNoteTemplate2;
  OutputBucketName: string;
};
```

#### Properties

##### NoteTemplate?

```ts
optional NoteTemplate?: AwsSpeechFullApiSchemaMedicalScribeNoteTemplate2;
```

##### OutputBucketName

```ts
OutputBucketName: string;
```

***

### AwsSpeechFullApiSchemaClinicalNoteGenerationStatus

```ts
type AwsSpeechFullApiSchemaClinicalNoteGenerationStatus = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaCLMLanguageCode

```ts
type AwsSpeechFullApiSchemaCLMLanguageCode = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaCloseStreamEvent

```ts
type AwsSpeechFullApiSchemaCloseStreamEvent = {
};
```

***

### AwsSpeechFullApiSchemaConfigurationEvent

```ts
type AwsSpeechFullApiSchemaConfigurationEvent = {
  ChannelDefinitions?: AwsSpeechFullApiSchemaChannelDefinitions2;
  PostCallAnalyticsSettings?: AwsSpeechFullApiSchemaPostCallAnalyticsSettings;
};
```

#### Properties

##### ChannelDefinitions?

```ts
optional ChannelDefinitions?: AwsSpeechFullApiSchemaChannelDefinitions2;
```

##### PostCallAnalyticsSettings?

```ts
optional PostCallAnalyticsSettings?: AwsSpeechFullApiSchemaPostCallAnalyticsSettings;
```

***

### AwsSpeechFullApiSchemaConflictException

```ts
type AwsSpeechFullApiSchemaConflictException = {
  Message?: string;
};
```

#### Properties

##### Message?

```ts
optional Message?: string;
```

***

### AwsSpeechFullApiSchemaContentIdentificationType

```ts
type AwsSpeechFullApiSchemaContentIdentificationType = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaContentRedaction

```ts
type AwsSpeechFullApiSchemaContentRedaction = {
  PiiEntityTypes?: AwsSpeechFullApiSchemaPiiEntityTypes;
  RedactionOutput: AwsSpeechFullApiSchemaRedactionOutput;
  RedactionType: AwsSpeechFullApiSchemaRedactionType;
};
```

#### Properties

##### PiiEntityTypes?

```ts
optional PiiEntityTypes?: AwsSpeechFullApiSchemaPiiEntityTypes;
```

##### RedactionOutput

```ts
RedactionOutput: AwsSpeechFullApiSchemaRedactionOutput;
```

##### RedactionType

```ts
RedactionType: AwsSpeechFullApiSchemaRedactionType;
```

***

### AwsSpeechFullApiSchemaContentRedactionOutput

```ts
type AwsSpeechFullApiSchemaContentRedactionOutput = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaContentRedactionType

```ts
type AwsSpeechFullApiSchemaContentRedactionType = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaCreateCallAnalyticsCategoryResponse

```ts
type AwsSpeechFullApiSchemaCreateCallAnalyticsCategoryResponse = {
  CategoryProperties?: AwsSpeechFullApiSchemaCategoryProperties;
};
```

#### Properties

##### CategoryProperties?

```ts
optional CategoryProperties?: AwsSpeechFullApiSchemaCategoryProperties;
```

***

### AwsSpeechFullApiSchemaCreateLanguageModelResponse

```ts
type AwsSpeechFullApiSchemaCreateLanguageModelResponse = {
  BaseModelName?: AwsSpeechFullApiSchemaBaseModelName;
  InputDataConfig?: AwsSpeechFullApiSchemaInputDataConfig;
  LanguageCode?: AwsSpeechFullApiSchemaCLMLanguageCode;
  ModelName?: string;
  ModelStatus?: AwsSpeechFullApiSchemaModelStatus;
};
```

#### Properties

##### BaseModelName?

```ts
optional BaseModelName?: AwsSpeechFullApiSchemaBaseModelName;
```

##### InputDataConfig?

```ts
optional InputDataConfig?: AwsSpeechFullApiSchemaInputDataConfig;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaCLMLanguageCode;
```

##### ModelName?

```ts
optional ModelName?: string;
```

##### ModelStatus?

```ts
optional ModelStatus?: AwsSpeechFullApiSchemaModelStatus;
```

***

### AwsSpeechFullApiSchemaCreateMedicalVocabularyResponse

```ts
type AwsSpeechFullApiSchemaCreateMedicalVocabularyResponse = {
  FailureReason?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  VocabularyName?: string;
  VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
};
```

#### Properties

##### FailureReason?

```ts
optional FailureReason?: string;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### LastModifiedTime?

```ts
optional LastModifiedTime?: string;
```

##### VocabularyName?

```ts
optional VocabularyName?: string;
```

##### VocabularyState?

```ts
optional VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
```

***

### AwsSpeechFullApiSchemaCreateVocabularyFilterResponse

```ts
type AwsSpeechFullApiSchemaCreateVocabularyFilterResponse = {
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  VocabularyFilterName?: string;
};
```

#### Properties

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### LastModifiedTime?

```ts
optional LastModifiedTime?: string;
```

##### VocabularyFilterName?

```ts
optional VocabularyFilterName?: string;
```

***

### AwsSpeechFullApiSchemaCreateVocabularyResponse

```ts
type AwsSpeechFullApiSchemaCreateVocabularyResponse = {
  FailureReason?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  VocabularyName?: string;
  VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
};
```

#### Properties

##### FailureReason?

```ts
optional FailureReason?: string;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### LastModifiedTime?

```ts
optional LastModifiedTime?: string;
```

##### VocabularyName?

```ts
optional VocabularyName?: string;
```

##### VocabularyState?

```ts
optional VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
```

***

### AwsSpeechFullApiSchemaDeleteCallAnalyticsCategoryResponse

```ts
type AwsSpeechFullApiSchemaDeleteCallAnalyticsCategoryResponse = {
};
```

***

### AwsSpeechFullApiSchemaDeleteCallAnalyticsJobResponse

```ts
type AwsSpeechFullApiSchemaDeleteCallAnalyticsJobResponse = {
};
```

***

### AwsSpeechFullApiSchemaDeleteLexiconOutput

```ts
type AwsSpeechFullApiSchemaDeleteLexiconOutput = {
};
```

***

### AwsSpeechFullApiSchemaDescribeLanguageModelResponse

```ts
type AwsSpeechFullApiSchemaDescribeLanguageModelResponse = {
  LanguageModel?: AwsSpeechFullApiSchemaLanguageModel;
};
```

#### Properties

##### LanguageModel?

```ts
optional LanguageModel?: AwsSpeechFullApiSchemaLanguageModel;
```

***

### AwsSpeechFullApiSchemaDescribeVoicesOutput

```ts
type AwsSpeechFullApiSchemaDescribeVoicesOutput = {
  NextToken?: string;
  Voices?: AwsSpeechFullApiSchemaVoiceList;
};
```

#### Properties

##### NextToken?

```ts
optional NextToken?: string;
```

##### Voices?

```ts
optional Voices?: AwsSpeechFullApiSchemaVoiceList;
```

***

### AwsSpeechFullApiSchemaEngine

```ts
type AwsSpeechFullApiSchemaEngine = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaEngineList

```ts
type AwsSpeechFullApiSchemaEngineList = ReadonlyArray<AwsSpeechFullApiSchemaEngine>;
```

***

### AwsSpeechFullApiSchemaEntity

```ts
type AwsSpeechFullApiSchemaEntity = {
  Category?: string;
  Confidence?: number;
  Content?: string;
  EndTime?: number;
  StartTime?: number;
  Type?: string;
};
```

#### Properties

##### Category?

```ts
optional Category?: string;
```

##### Confidence?

```ts
optional Confidence?: number;
```

##### Content?

```ts
optional Content?: string;
```

##### EndTime?

```ts
optional EndTime?: number;
```

##### StartTime?

```ts
optional StartTime?: number;
```

##### Type?

```ts
optional Type?: string;
```

***

### AwsSpeechFullApiSchemaEntityList

```ts
type AwsSpeechFullApiSchemaEntityList = ReadonlyArray<AwsSpeechFullApiSchemaEntity>;
```

***

### AwsSpeechFullApiSchemaFlushStreamConfiguration

```ts
type AwsSpeechFullApiSchemaFlushStreamConfiguration = {
  Force?: boolean;
};
```

#### Properties

##### Force?

```ts
optional Force?: boolean;
```

***

### AwsSpeechFullApiSchemaGender

```ts
type AwsSpeechFullApiSchemaGender = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaGetCallAnalyticsCategoryResponse

```ts
type AwsSpeechFullApiSchemaGetCallAnalyticsCategoryResponse = {
  CategoryProperties?: AwsSpeechFullApiSchemaCategoryProperties;
};
```

#### Properties

##### CategoryProperties?

```ts
optional CategoryProperties?: AwsSpeechFullApiSchemaCategoryProperties;
```

***

### AwsSpeechFullApiSchemaGetCallAnalyticsJobResponse

```ts
type AwsSpeechFullApiSchemaGetCallAnalyticsJobResponse = {
  CallAnalyticsJob?: AwsSpeechFullApiSchemaCallAnalyticsJob;
};
```

#### Properties

##### CallAnalyticsJob?

```ts
optional CallAnalyticsJob?: AwsSpeechFullApiSchemaCallAnalyticsJob;
```

***

### AwsSpeechFullApiSchemaGetLexiconOutput

```ts
type AwsSpeechFullApiSchemaGetLexiconOutput = {
  Lexicon?: AwsSpeechFullApiSchemaLexicon;
  LexiconAttributes?: AwsSpeechFullApiSchemaLexiconAttributes;
};
```

#### Properties

##### Lexicon?

```ts
optional Lexicon?: AwsSpeechFullApiSchemaLexicon;
```

##### LexiconAttributes?

```ts
optional LexiconAttributes?: AwsSpeechFullApiSchemaLexiconAttributes;
```

***

### AwsSpeechFullApiSchemaGetMedicalScribeJobResponse

```ts
type AwsSpeechFullApiSchemaGetMedicalScribeJobResponse = {
  MedicalScribeJob?: AwsSpeechFullApiSchemaMedicalScribeJob;
};
```

#### Properties

##### MedicalScribeJob?

```ts
optional MedicalScribeJob?: AwsSpeechFullApiSchemaMedicalScribeJob;
```

***

### AwsSpeechFullApiSchemaGetMedicalScribeStreamResponse

```ts
type AwsSpeechFullApiSchemaGetMedicalScribeStreamResponse = {
  MedicalScribeStreamDetails?: AwsSpeechFullApiSchemaMedicalScribeStreamDetails;
};
```

#### Properties

##### MedicalScribeStreamDetails?

```ts
optional MedicalScribeStreamDetails?: AwsSpeechFullApiSchemaMedicalScribeStreamDetails;
```

***

### AwsSpeechFullApiSchemaGetMedicalTranscriptionJobResponse

```ts
type AwsSpeechFullApiSchemaGetMedicalTranscriptionJobResponse = {
  MedicalTranscriptionJob?: AwsSpeechFullApiSchemaMedicalTranscriptionJob;
};
```

#### Properties

##### MedicalTranscriptionJob?

```ts
optional MedicalTranscriptionJob?: AwsSpeechFullApiSchemaMedicalTranscriptionJob;
```

***

### AwsSpeechFullApiSchemaGetMedicalVocabularyResponse

```ts
type AwsSpeechFullApiSchemaGetMedicalVocabularyResponse = {
  DownloadUri?: string;
  FailureReason?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  VocabularyName?: string;
  VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
};
```

#### Properties

##### DownloadUri?

```ts
optional DownloadUri?: string;
```

##### FailureReason?

```ts
optional FailureReason?: string;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### LastModifiedTime?

```ts
optional LastModifiedTime?: string;
```

##### VocabularyName?

```ts
optional VocabularyName?: string;
```

##### VocabularyState?

```ts
optional VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
```

***

### AwsSpeechFullApiSchemaGetSpeechSynthesisTaskOutput

```ts
type AwsSpeechFullApiSchemaGetSpeechSynthesisTaskOutput = {
  SynthesisTask?: AwsSpeechFullApiSchemaSynthesisTask;
};
```

#### Properties

##### SynthesisTask?

```ts
optional SynthesisTask?: AwsSpeechFullApiSchemaSynthesisTask;
```

***

### AwsSpeechFullApiSchemaGetTranscriptionJobResponse

```ts
type AwsSpeechFullApiSchemaGetTranscriptionJobResponse = {
  TranscriptionJob?: AwsSpeechFullApiSchemaTranscriptionJob;
};
```

#### Properties

##### TranscriptionJob?

```ts
optional TranscriptionJob?: AwsSpeechFullApiSchemaTranscriptionJob;
```

***

### AwsSpeechFullApiSchemaGetVocabularyFilterResponse

```ts
type AwsSpeechFullApiSchemaGetVocabularyFilterResponse = {
  DownloadUri?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  VocabularyFilterName?: string;
};
```

#### Properties

##### DownloadUri?

```ts
optional DownloadUri?: string;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### LastModifiedTime?

```ts
optional LastModifiedTime?: string;
```

##### VocabularyFilterName?

```ts
optional VocabularyFilterName?: string;
```

***

### AwsSpeechFullApiSchemaGetVocabularyResponse

```ts
type AwsSpeechFullApiSchemaGetVocabularyResponse = {
  DownloadUri?: string;
  FailureReason?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  VocabularyName?: string;
  VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
};
```

#### Properties

##### DownloadUri?

```ts
optional DownloadUri?: string;
```

##### FailureReason?

```ts
optional FailureReason?: string;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### LastModifiedTime?

```ts
optional LastModifiedTime?: string;
```

##### VocabularyName?

```ts
optional VocabularyName?: string;
```

##### VocabularyState?

```ts
optional VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
```

***

### AwsSpeechFullApiSchemaInputDataConfig

```ts
type AwsSpeechFullApiSchemaInputDataConfig = {
  DataAccessRoleArn: string;
  S3Uri: string;
  TuningDataS3Uri?: string;
};
```

#### Properties

##### DataAccessRoleArn

```ts
DataAccessRoleArn: string;
```

##### S3Uri

```ts
S3Uri: string;
```

##### TuningDataS3Uri?

```ts
optional TuningDataS3Uri?: string;
```

***

### AwsSpeechFullApiSchemaInputType

```ts
type AwsSpeechFullApiSchemaInputType = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaInternalFailureException

```ts
type AwsSpeechFullApiSchemaInternalFailureException = {
  Message?: string;
};
```

#### Properties

##### Message?

```ts
optional Message?: string;
```

***

### AwsSpeechFullApiSchemaInterruptionFilter

```ts
type AwsSpeechFullApiSchemaInterruptionFilter = {
  AbsoluteTimeRange?: AwsSpeechFullApiSchemaAbsoluteTimeRange;
  Negate?: boolean;
  ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole;
  RelativeTimeRange?: AwsSpeechFullApiSchemaRelativeTimeRange;
  Threshold?: number;
};
```

#### Properties

##### AbsoluteTimeRange?

```ts
optional AbsoluteTimeRange?: AwsSpeechFullApiSchemaAbsoluteTimeRange;
```

##### Negate?

```ts
optional Negate?: boolean;
```

##### ParticipantRole?

```ts
optional ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole;
```

##### RelativeTimeRange?

```ts
optional RelativeTimeRange?: AwsSpeechFullApiSchemaRelativeTimeRange;
```

##### Threshold?

```ts
optional Threshold?: number;
```

***

### AwsSpeechFullApiSchemaIssueDetected

```ts
type AwsSpeechFullApiSchemaIssueDetected = {
  CharacterOffsets?: AwsSpeechFullApiSchemaCharacterOffsets;
};
```

#### Properties

##### CharacterOffsets?

```ts
optional CharacterOffsets?: AwsSpeechFullApiSchemaCharacterOffsets;
```

***

### AwsSpeechFullApiSchemaIssuesDetected

```ts
type AwsSpeechFullApiSchemaIssuesDetected = ReadonlyArray<AwsSpeechFullApiSchemaIssueDetected>;
```

***

### AwsSpeechFullApiSchemaItem

```ts
type AwsSpeechFullApiSchemaItem = {
  Confidence?: number;
  Content?: string;
  EndTime?: number;
  Speaker?: string;
  Stable?: boolean;
  StartTime?: number;
  Type?: AwsSpeechFullApiSchemaItemType;
  VocabularyFilterMatch?: boolean;
};
```

#### Properties

##### Confidence?

```ts
optional Confidence?: number;
```

##### Content?

```ts
optional Content?: string;
```

##### EndTime?

```ts
optional EndTime?: number;
```

##### Speaker?

```ts
optional Speaker?: string;
```

##### Stable?

```ts
optional Stable?: boolean;
```

##### StartTime?

```ts
optional StartTime?: number;
```

##### Type?

```ts
optional Type?: AwsSpeechFullApiSchemaItemType;
```

##### VocabularyFilterMatch?

```ts
optional VocabularyFilterMatch?: boolean;
```

***

### AwsSpeechFullApiSchemaItemList

```ts
type AwsSpeechFullApiSchemaItemList = ReadonlyArray<AwsSpeechFullApiSchemaItem>;
```

***

### AwsSpeechFullApiSchemaItemType

```ts
type AwsSpeechFullApiSchemaItemType = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaJobExecutionSettings

```ts
type AwsSpeechFullApiSchemaJobExecutionSettings = {
  AllowDeferredExecution?: boolean;
  DataAccessRoleArn?: string;
};
```

#### Properties

##### AllowDeferredExecution?

```ts
optional AllowDeferredExecution?: boolean;
```

##### DataAccessRoleArn?

```ts
optional DataAccessRoleArn?: string;
```

***

### AwsSpeechFullApiSchemaJsonPrimitive

```ts
type AwsSpeechFullApiSchemaJsonPrimitive = string | number | boolean | null;
```

***

### AwsSpeechFullApiSchemaJsonValue

```ts
type AwsSpeechFullApiSchemaJsonValue =
  | AwsSpeechFullApiSchemaJsonPrimitive
  | readonly AwsSpeechFullApiSchemaJsonValue[]
  | {
[key: string]: AwsSpeechFullApiSchemaJsonValue;
};
```

***

### AwsSpeechFullApiSchemaKMSEncryptionContextMap

```ts
type AwsSpeechFullApiSchemaKMSEncryptionContextMap = {
[key: string]: string;
};
```

#### Index Signature

```ts
[key: string]: string
```

***

### AwsSpeechFullApiSchemaKMSEncryptionContextMap2

```ts
type AwsSpeechFullApiSchemaKMSEncryptionContextMap2 = {
[key: string]: string;
};
```

#### Index Signature

```ts
[key: string]: string
```

***

### AwsSpeechFullApiSchemaLanguageCode

```ts
type AwsSpeechFullApiSchemaLanguageCode = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaLanguageCode2

```ts
type AwsSpeechFullApiSchemaLanguageCode2 = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaLanguageCode3

```ts
type AwsSpeechFullApiSchemaLanguageCode3 = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaLanguageCodeItem

```ts
type AwsSpeechFullApiSchemaLanguageCodeItem = {
  DurationInSeconds?: number;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
};
```

#### Properties

##### DurationInSeconds?

```ts
optional DurationInSeconds?: number;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

***

### AwsSpeechFullApiSchemaLanguageCodeList

```ts
type AwsSpeechFullApiSchemaLanguageCodeList = ReadonlyArray<AwsSpeechFullApiSchemaLanguageCodeItem>;
```

***

### AwsSpeechFullApiSchemaLanguageCodeList2

```ts
type AwsSpeechFullApiSchemaLanguageCodeList2 = ReadonlyArray<AwsSpeechFullApiSchemaLanguageCode>;
```

***

### AwsSpeechFullApiSchemaLanguageIdentification

```ts
type AwsSpeechFullApiSchemaLanguageIdentification = ReadonlyArray<AwsSpeechFullApiSchemaLanguageWithScore>;
```

***

### AwsSpeechFullApiSchemaLanguageIdSettings

```ts
type AwsSpeechFullApiSchemaLanguageIdSettings = {
  LanguageModelName?: string;
  VocabularyFilterName?: string;
  VocabularyName?: string;
};
```

#### Properties

##### LanguageModelName?

```ts
optional LanguageModelName?: string;
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

### AwsSpeechFullApiSchemaLanguageIdSettingsMap

```ts
type AwsSpeechFullApiSchemaLanguageIdSettingsMap = {
[key: string]: AwsSpeechFullApiSchemaLanguageIdSettings;
};
```

#### Index Signature

```ts
[key: string]: AwsSpeechFullApiSchemaLanguageIdSettings
```

***

### AwsSpeechFullApiSchemaLanguageModel

```ts
type AwsSpeechFullApiSchemaLanguageModel = {
  BaseModelName?: AwsSpeechFullApiSchemaBaseModelName;
  CreateTime?: string;
  FailureReason?: string;
  InputDataConfig?: AwsSpeechFullApiSchemaInputDataConfig;
  LanguageCode?: AwsSpeechFullApiSchemaCLMLanguageCode;
  LastModifiedTime?: string;
  ModelName?: string;
  ModelStatus?: AwsSpeechFullApiSchemaModelStatus;
  UpgradeAvailability?: boolean;
};
```

#### Properties

##### BaseModelName?

```ts
optional BaseModelName?: AwsSpeechFullApiSchemaBaseModelName;
```

##### CreateTime?

```ts
optional CreateTime?: string;
```

##### FailureReason?

```ts
optional FailureReason?: string;
```

##### InputDataConfig?

```ts
optional InputDataConfig?: AwsSpeechFullApiSchemaInputDataConfig;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaCLMLanguageCode;
```

##### LastModifiedTime?

```ts
optional LastModifiedTime?: string;
```

##### ModelName?

```ts
optional ModelName?: string;
```

##### ModelStatus?

```ts
optional ModelStatus?: AwsSpeechFullApiSchemaModelStatus;
```

##### UpgradeAvailability?

```ts
optional UpgradeAvailability?: boolean;
```

***

### AwsSpeechFullApiSchemaLanguageOptions

```ts
type AwsSpeechFullApiSchemaLanguageOptions = ReadonlyArray<AwsSpeechFullApiSchemaLanguageCode2>;
```

***

### AwsSpeechFullApiSchemaLanguageWithScore

```ts
type AwsSpeechFullApiSchemaLanguageWithScore = {
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode3;
  Score?: number;
};
```

#### Properties

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode3;
```

##### Score?

```ts
optional Score?: number;
```

***

### AwsSpeechFullApiSchemaLexicon

```ts
type AwsSpeechFullApiSchemaLexicon = {
  Content?: string;
  Name?: string;
};
```

#### Properties

##### Content?

```ts
optional Content?: string;
```

##### Name?

```ts
optional Name?: string;
```

***

### AwsSpeechFullApiSchemaLexiconAttributes

```ts
type AwsSpeechFullApiSchemaLexiconAttributes = {
  Alphabet?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode;
  LastModified?: string;
  LexemesCount?: number;
  LexiconArn?: string;
  Size?: number;
};
```

#### Properties

##### Alphabet?

```ts
optional Alphabet?: string;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode;
```

##### LastModified?

```ts
optional LastModified?: string;
```

##### LexemesCount?

```ts
optional LexemesCount?: number;
```

##### LexiconArn?

```ts
optional LexiconArn?: string;
```

##### Size?

```ts
optional Size?: number;
```

***

### AwsSpeechFullApiSchemaLexiconDescription

```ts
type AwsSpeechFullApiSchemaLexiconDescription = {
  Attributes?: AwsSpeechFullApiSchemaLexiconAttributes;
  Name?: string;
};
```

#### Properties

##### Attributes?

```ts
optional Attributes?: AwsSpeechFullApiSchemaLexiconAttributes;
```

##### Name?

```ts
optional Name?: string;
```

***

### AwsSpeechFullApiSchemaLexiconDescriptionList

```ts
type AwsSpeechFullApiSchemaLexiconDescriptionList = ReadonlyArray<AwsSpeechFullApiSchemaLexiconDescription>;
```

***

### AwsSpeechFullApiSchemaLexiconNameList

```ts
type AwsSpeechFullApiSchemaLexiconNameList = ReadonlyArray<string>;
```

***

### AwsSpeechFullApiSchemaLimitExceededException

```ts
type AwsSpeechFullApiSchemaLimitExceededException = {
  Message?: string;
};
```

#### Properties

##### Message?

```ts
optional Message?: string;
```

***

### AwsSpeechFullApiSchemaListCallAnalyticsCategoriesResponse

```ts
type AwsSpeechFullApiSchemaListCallAnalyticsCategoriesResponse = {
  Categories?: AwsSpeechFullApiSchemaCategoryPropertiesList;
  NextToken?: string;
};
```

#### Properties

##### Categories?

```ts
optional Categories?: AwsSpeechFullApiSchemaCategoryPropertiesList;
```

##### NextToken?

```ts
optional NextToken?: string;
```

***

### AwsSpeechFullApiSchemaListCallAnalyticsJobsResponse

```ts
type AwsSpeechFullApiSchemaListCallAnalyticsJobsResponse = {
  CallAnalyticsJobSummaries?: AwsSpeechFullApiSchemaCallAnalyticsJobSummaries;
  NextToken?: string;
  Status?: AwsSpeechFullApiSchemaCallAnalyticsJobStatus;
};
```

#### Properties

##### CallAnalyticsJobSummaries?

```ts
optional CallAnalyticsJobSummaries?: AwsSpeechFullApiSchemaCallAnalyticsJobSummaries;
```

##### NextToken?

```ts
optional NextToken?: string;
```

##### Status?

```ts
optional Status?: AwsSpeechFullApiSchemaCallAnalyticsJobStatus;
```

***

### AwsSpeechFullApiSchemaListLanguageModelsResponse

```ts
type AwsSpeechFullApiSchemaListLanguageModelsResponse = {
  Models?: AwsSpeechFullApiSchemaModels;
  NextToken?: string;
};
```

#### Properties

##### Models?

```ts
optional Models?: AwsSpeechFullApiSchemaModels;
```

##### NextToken?

```ts
optional NextToken?: string;
```

***

### AwsSpeechFullApiSchemaListLexiconsOutput

```ts
type AwsSpeechFullApiSchemaListLexiconsOutput = {
  Lexicons?: AwsSpeechFullApiSchemaLexiconDescriptionList;
  NextToken?: string;
};
```

#### Properties

##### Lexicons?

```ts
optional Lexicons?: AwsSpeechFullApiSchemaLexiconDescriptionList;
```

##### NextToken?

```ts
optional NextToken?: string;
```

***

### AwsSpeechFullApiSchemaListMedicalScribeJobsResponse

```ts
type AwsSpeechFullApiSchemaListMedicalScribeJobsResponse = {
  MedicalScribeJobSummaries?: AwsSpeechFullApiSchemaMedicalScribeJobSummaries;
  NextToken?: string;
  Status?: AwsSpeechFullApiSchemaMedicalScribeJobStatus;
};
```

#### Properties

##### MedicalScribeJobSummaries?

```ts
optional MedicalScribeJobSummaries?: AwsSpeechFullApiSchemaMedicalScribeJobSummaries;
```

##### NextToken?

```ts
optional NextToken?: string;
```

##### Status?

```ts
optional Status?: AwsSpeechFullApiSchemaMedicalScribeJobStatus;
```

***

### AwsSpeechFullApiSchemaListMedicalTranscriptionJobsResponse

```ts
type AwsSpeechFullApiSchemaListMedicalTranscriptionJobsResponse = {
  MedicalTranscriptionJobSummaries?: AwsSpeechFullApiSchemaMedicalTranscriptionJobSummaries;
  NextToken?: string;
  Status?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
};
```

#### Properties

##### MedicalTranscriptionJobSummaries?

```ts
optional MedicalTranscriptionJobSummaries?: AwsSpeechFullApiSchemaMedicalTranscriptionJobSummaries;
```

##### NextToken?

```ts
optional NextToken?: string;
```

##### Status?

```ts
optional Status?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
```

***

### AwsSpeechFullApiSchemaListMedicalVocabulariesResponse

```ts
type AwsSpeechFullApiSchemaListMedicalVocabulariesResponse = {
  NextToken?: string;
  Status?: AwsSpeechFullApiSchemaVocabularyState;
  Vocabularies?: AwsSpeechFullApiSchemaVocabularies;
};
```

#### Properties

##### NextToken?

```ts
optional NextToken?: string;
```

##### Status?

```ts
optional Status?: AwsSpeechFullApiSchemaVocabularyState;
```

##### Vocabularies?

```ts
optional Vocabularies?: AwsSpeechFullApiSchemaVocabularies;
```

***

### AwsSpeechFullApiSchemaListSpeechSynthesisTasksOutput

```ts
type AwsSpeechFullApiSchemaListSpeechSynthesisTasksOutput = {
  NextToken?: string;
  SynthesisTasks?: AwsSpeechFullApiSchemaSynthesisTasks;
};
```

#### Properties

##### NextToken?

```ts
optional NextToken?: string;
```

##### SynthesisTasks?

```ts
optional SynthesisTasks?: AwsSpeechFullApiSchemaSynthesisTasks;
```

***

### AwsSpeechFullApiSchemaListTagsForResourceResponse

```ts
type AwsSpeechFullApiSchemaListTagsForResourceResponse = {
  ResourceArn?: string;
  Tags?: AwsSpeechFullApiSchemaTagList;
};
```

#### Properties

##### ResourceArn?

```ts
optional ResourceArn?: string;
```

##### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

***

### AwsSpeechFullApiSchemaListTranscriptionJobsResponse

```ts
type AwsSpeechFullApiSchemaListTranscriptionJobsResponse = {
  NextToken?: string;
  Status?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
  TranscriptionJobSummaries?: AwsSpeechFullApiSchemaTranscriptionJobSummaries;
};
```

#### Properties

##### NextToken?

```ts
optional NextToken?: string;
```

##### Status?

```ts
optional Status?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
```

##### TranscriptionJobSummaries?

```ts
optional TranscriptionJobSummaries?: AwsSpeechFullApiSchemaTranscriptionJobSummaries;
```

***

### AwsSpeechFullApiSchemaListVocabulariesResponse

```ts
type AwsSpeechFullApiSchemaListVocabulariesResponse = {
  NextToken?: string;
  Status?: AwsSpeechFullApiSchemaVocabularyState;
  Vocabularies?: AwsSpeechFullApiSchemaVocabularies;
};
```

#### Properties

##### NextToken?

```ts
optional NextToken?: string;
```

##### Status?

```ts
optional Status?: AwsSpeechFullApiSchemaVocabularyState;
```

##### Vocabularies?

```ts
optional Vocabularies?: AwsSpeechFullApiSchemaVocabularies;
```

***

### AwsSpeechFullApiSchemaListVocabularyFiltersResponse

```ts
type AwsSpeechFullApiSchemaListVocabularyFiltersResponse = {
  NextToken?: string;
  VocabularyFilters?: AwsSpeechFullApiSchemaVocabularyFilters;
};
```

#### Properties

##### NextToken?

```ts
optional NextToken?: string;
```

##### VocabularyFilters?

```ts
optional VocabularyFilters?: AwsSpeechFullApiSchemaVocabularyFilters;
```

***

### AwsSpeechFullApiSchemaMatchedCategoryDetails

```ts
type AwsSpeechFullApiSchemaMatchedCategoryDetails = {
[key: string]: AwsSpeechFullApiSchemaPointsOfInterest;
};
```

#### Index Signature

```ts
[key: string]: AwsSpeechFullApiSchemaPointsOfInterest
```

***

### AwsSpeechFullApiSchemaMedia

```ts
type AwsSpeechFullApiSchemaMedia = {
  MediaFileUri?: string;
  RedactedMediaFileUri?: string;
};
```

#### Properties

##### MediaFileUri?

```ts
optional MediaFileUri?: string;
```

##### RedactedMediaFileUri?

```ts
optional RedactedMediaFileUri?: string;
```

***

### AwsSpeechFullApiSchemaMediaEncoding

```ts
type AwsSpeechFullApiSchemaMediaEncoding = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMediaFormat

```ts
type AwsSpeechFullApiSchemaMediaFormat = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalAlternative

```ts
type AwsSpeechFullApiSchemaMedicalAlternative = {
  Entities?: AwsSpeechFullApiSchemaMedicalEntityList;
  Items?: AwsSpeechFullApiSchemaMedicalItemList;
  Transcript?: string;
};
```

#### Properties

##### Entities?

```ts
optional Entities?: AwsSpeechFullApiSchemaMedicalEntityList;
```

##### Items?

```ts
optional Items?: AwsSpeechFullApiSchemaMedicalItemList;
```

##### Transcript?

```ts
optional Transcript?: string;
```

***

### AwsSpeechFullApiSchemaMedicalAlternativeList

```ts
type AwsSpeechFullApiSchemaMedicalAlternativeList = ReadonlyArray<AwsSpeechFullApiSchemaMedicalAlternative>;
```

***

### AwsSpeechFullApiSchemaMedicalContentIdentificationType

```ts
type AwsSpeechFullApiSchemaMedicalContentIdentificationType = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalContentIdentificationType2

```ts
type AwsSpeechFullApiSchemaMedicalContentIdentificationType2 = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalEntity

```ts
type AwsSpeechFullApiSchemaMedicalEntity = {
  Category?: string;
  Confidence?: number;
  Content?: string;
  EndTime?: number;
  StartTime?: number;
};
```

#### Properties

##### Category?

```ts
optional Category?: string;
```

##### Confidence?

```ts
optional Confidence?: number;
```

##### Content?

```ts
optional Content?: string;
```

##### EndTime?

```ts
optional EndTime?: number;
```

##### StartTime?

```ts
optional StartTime?: number;
```

***

### AwsSpeechFullApiSchemaMedicalEntityList

```ts
type AwsSpeechFullApiSchemaMedicalEntityList = ReadonlyArray<AwsSpeechFullApiSchemaMedicalEntity>;
```

***

### AwsSpeechFullApiSchemaMedicalItem

```ts
type AwsSpeechFullApiSchemaMedicalItem = {
  Confidence?: number;
  Content?: string;
  EndTime?: number;
  Speaker?: string;
  StartTime?: number;
  Type?: AwsSpeechFullApiSchemaItemType;
};
```

#### Properties

##### Confidence?

```ts
optional Confidence?: number;
```

##### Content?

```ts
optional Content?: string;
```

##### EndTime?

```ts
optional EndTime?: number;
```

##### Speaker?

```ts
optional Speaker?: string;
```

##### StartTime?

```ts
optional StartTime?: number;
```

##### Type?

```ts
optional Type?: AwsSpeechFullApiSchemaItemType;
```

***

### AwsSpeechFullApiSchemaMedicalItemList

```ts
type AwsSpeechFullApiSchemaMedicalItemList = ReadonlyArray<AwsSpeechFullApiSchemaMedicalItem>;
```

***

### AwsSpeechFullApiSchemaMedicalResult

```ts
type AwsSpeechFullApiSchemaMedicalResult = {
  Alternatives?: AwsSpeechFullApiSchemaMedicalAlternativeList;
  ChannelId?: string;
  EndTime?: number;
  IsPartial?: boolean;
  ResultId?: string;
  StartTime?: number;
};
```

#### Properties

##### Alternatives?

```ts
optional Alternatives?: AwsSpeechFullApiSchemaMedicalAlternativeList;
```

##### ChannelId?

```ts
optional ChannelId?: string;
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

***

### AwsSpeechFullApiSchemaMedicalResultList

```ts
type AwsSpeechFullApiSchemaMedicalResultList = ReadonlyArray<AwsSpeechFullApiSchemaMedicalResult>;
```

***

### AwsSpeechFullApiSchemaMedicalScribeAudioEvent

```ts
type AwsSpeechFullApiSchemaMedicalScribeAudioEvent = {
  AudioChunk: string;
};
```

#### Properties

##### AudioChunk

```ts
AudioChunk: string;
```

***

### AwsSpeechFullApiSchemaMedicalScribeChannelDefinition

```ts
type AwsSpeechFullApiSchemaMedicalScribeChannelDefinition = {
  ChannelId: number;
  ParticipantRole: AwsSpeechFullApiSchemaMedicalScribeParticipantRole;
};
```

#### Properties

##### ChannelId

```ts
ChannelId: number;
```

##### ParticipantRole

```ts
ParticipantRole: AwsSpeechFullApiSchemaMedicalScribeParticipantRole;
```

***

### AwsSpeechFullApiSchemaMedicalScribeChannelDefinition2

```ts
type AwsSpeechFullApiSchemaMedicalScribeChannelDefinition2 = {
  ChannelId: number;
  ParticipantRole: AwsSpeechFullApiSchemaMedicalScribeParticipantRole2;
};
```

#### Properties

##### ChannelId

```ts
ChannelId: number;
```

##### ParticipantRole

```ts
ParticipantRole: AwsSpeechFullApiSchemaMedicalScribeParticipantRole2;
```

***

### AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions

```ts
type AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions = ReadonlyArray<AwsSpeechFullApiSchemaMedicalScribeChannelDefinition>;
```

***

### AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions2

```ts
type AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions2 = ReadonlyArray<AwsSpeechFullApiSchemaMedicalScribeChannelDefinition2>;
```

***

### AwsSpeechFullApiSchemaMedicalScribeConfigurationEvent

```ts
type AwsSpeechFullApiSchemaMedicalScribeConfigurationEvent = {
  ChannelDefinitions?: AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions2;
  EncryptionSettings?: AwsSpeechFullApiSchemaMedicalScribeEncryptionSettings;
  MedicalScribeContext?: AwsSpeechFullApiSchemaMedicalScribeContext2;
  PostStreamAnalyticsSettings: AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsSettings;
  ResourceAccessRoleArn: string;
  VocabularyFilterMethod?: AwsSpeechFullApiSchemaMedicalScribeVocabularyFilterMethod;
  VocabularyFilterName?: string;
  VocabularyName?: string;
};
```

#### Properties

##### ChannelDefinitions?

```ts
optional ChannelDefinitions?: AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions2;
```

##### EncryptionSettings?

```ts
optional EncryptionSettings?: AwsSpeechFullApiSchemaMedicalScribeEncryptionSettings;
```

##### MedicalScribeContext?

```ts
optional MedicalScribeContext?: AwsSpeechFullApiSchemaMedicalScribeContext2;
```

##### PostStreamAnalyticsSettings

```ts
PostStreamAnalyticsSettings: AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsSettings;
```

##### ResourceAccessRoleArn

```ts
ResourceAccessRoleArn: string;
```

##### VocabularyFilterMethod?

```ts
optional VocabularyFilterMethod?: AwsSpeechFullApiSchemaMedicalScribeVocabularyFilterMethod;
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

### AwsSpeechFullApiSchemaMedicalScribeContext

```ts
type AwsSpeechFullApiSchemaMedicalScribeContext = {
  PatientContext?: AwsSpeechFullApiSchemaMedicalScribePatientContext;
};
```

#### Properties

##### PatientContext?

```ts
optional PatientContext?: AwsSpeechFullApiSchemaMedicalScribePatientContext;
```

***

### AwsSpeechFullApiSchemaMedicalScribeContext2

```ts
type AwsSpeechFullApiSchemaMedicalScribeContext2 = {
  PatientContext?: AwsSpeechFullApiSchemaMedicalScribePatientContext2;
};
```

#### Properties

##### PatientContext?

```ts
optional PatientContext?: AwsSpeechFullApiSchemaMedicalScribePatientContext2;
```

***

### AwsSpeechFullApiSchemaMedicalScribeEncryptionSettings

```ts
type AwsSpeechFullApiSchemaMedicalScribeEncryptionSettings = {
  KmsEncryptionContext?: AwsSpeechFullApiSchemaKMSEncryptionContextMap2;
  KmsKeyId: string;
};
```

#### Properties

##### KmsEncryptionContext?

```ts
optional KmsEncryptionContext?: AwsSpeechFullApiSchemaKMSEncryptionContextMap2;
```

##### KmsKeyId

```ts
KmsKeyId: string;
```

***

### AwsSpeechFullApiSchemaMedicalScribeInputStream

```ts
type AwsSpeechFullApiSchemaMedicalScribeInputStream =
  | {
  AudioEvent: AwsSpeechFullApiSchemaMedicalScribeAudioEvent;
}
  | {
  SessionControlEvent: AwsSpeechFullApiSchemaMedicalScribeSessionControlEvent;
}
  | {
  ConfigurationEvent: AwsSpeechFullApiSchemaMedicalScribeConfigurationEvent;
};
```

***

### AwsSpeechFullApiSchemaMedicalScribeJob

```ts
type AwsSpeechFullApiSchemaMedicalScribeJob = {
  ChannelDefinitions?: AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions;
  CompletionTime?: string;
  CreationTime?: string;
  DataAccessRoleArn?: string;
  FailureReason?: string;
  LanguageCode?: AwsSpeechFullApiSchemaMedicalScribeLanguageCode2;
  Media?: AwsSpeechFullApiSchemaMedia;
  MedicalScribeContextProvided?: boolean;
  MedicalScribeJobName?: string;
  MedicalScribeJobStatus?: AwsSpeechFullApiSchemaMedicalScribeJobStatus;
  MedicalScribeOutput?: AwsSpeechFullApiSchemaMedicalScribeOutput;
  Settings?: AwsSpeechFullApiSchemaMedicalScribeSettings;
  StartTime?: string;
  Tags?: AwsSpeechFullApiSchemaTagList;
};
```

#### Properties

##### ChannelDefinitions?

```ts
optional ChannelDefinitions?: AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions;
```

##### CompletionTime?

```ts
optional CompletionTime?: string;
```

##### CreationTime?

```ts
optional CreationTime?: string;
```

##### DataAccessRoleArn?

```ts
optional DataAccessRoleArn?: string;
```

##### FailureReason?

```ts
optional FailureReason?: string;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaMedicalScribeLanguageCode2;
```

##### Media?

```ts
optional Media?: AwsSpeechFullApiSchemaMedia;
```

##### MedicalScribeContextProvided?

```ts
optional MedicalScribeContextProvided?: boolean;
```

##### MedicalScribeJobName?

```ts
optional MedicalScribeJobName?: string;
```

##### MedicalScribeJobStatus?

```ts
optional MedicalScribeJobStatus?: AwsSpeechFullApiSchemaMedicalScribeJobStatus;
```

##### MedicalScribeOutput?

```ts
optional MedicalScribeOutput?: AwsSpeechFullApiSchemaMedicalScribeOutput;
```

##### Settings?

```ts
optional Settings?: AwsSpeechFullApiSchemaMedicalScribeSettings;
```

##### StartTime?

```ts
optional StartTime?: string;
```

##### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

***

### AwsSpeechFullApiSchemaMedicalScribeJobStatus

```ts
type AwsSpeechFullApiSchemaMedicalScribeJobStatus = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalScribeJobSummaries

```ts
type AwsSpeechFullApiSchemaMedicalScribeJobSummaries = ReadonlyArray<AwsSpeechFullApiSchemaMedicalScribeJobSummary>;
```

***

### AwsSpeechFullApiSchemaMedicalScribeJobSummary

```ts
type AwsSpeechFullApiSchemaMedicalScribeJobSummary = {
  CompletionTime?: string;
  CreationTime?: string;
  FailureReason?: string;
  LanguageCode?: AwsSpeechFullApiSchemaMedicalScribeLanguageCode2;
  MedicalScribeJobName?: string;
  MedicalScribeJobStatus?: AwsSpeechFullApiSchemaMedicalScribeJobStatus;
  StartTime?: string;
};
```

#### Properties

##### CompletionTime?

```ts
optional CompletionTime?: string;
```

##### CreationTime?

```ts
optional CreationTime?: string;
```

##### FailureReason?

```ts
optional FailureReason?: string;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaMedicalScribeLanguageCode2;
```

##### MedicalScribeJobName?

```ts
optional MedicalScribeJobName?: string;
```

##### MedicalScribeJobStatus?

```ts
optional MedicalScribeJobStatus?: AwsSpeechFullApiSchemaMedicalScribeJobStatus;
```

##### StartTime?

```ts
optional StartTime?: string;
```

***

### AwsSpeechFullApiSchemaMedicalScribeLanguageCode

```ts
type AwsSpeechFullApiSchemaMedicalScribeLanguageCode = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalScribeLanguageCode2

```ts
type AwsSpeechFullApiSchemaMedicalScribeLanguageCode2 = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalScribeMediaEncoding

```ts
type AwsSpeechFullApiSchemaMedicalScribeMediaEncoding = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalScribeNoteTemplate

```ts
type AwsSpeechFullApiSchemaMedicalScribeNoteTemplate = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalScribeNoteTemplate2

```ts
type AwsSpeechFullApiSchemaMedicalScribeNoteTemplate2 = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalScribeOutput

```ts
type AwsSpeechFullApiSchemaMedicalScribeOutput = {
  ClinicalDocumentUri: string;
  TranscriptFileUri: string;
};
```

#### Properties

##### ClinicalDocumentUri

```ts
ClinicalDocumentUri: string;
```

##### TranscriptFileUri

```ts
TranscriptFileUri: string;
```

***

### AwsSpeechFullApiSchemaMedicalScribeParticipantRole

```ts
type AwsSpeechFullApiSchemaMedicalScribeParticipantRole = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalScribeParticipantRole2

```ts
type AwsSpeechFullApiSchemaMedicalScribeParticipantRole2 = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalScribePatientContext

```ts
type AwsSpeechFullApiSchemaMedicalScribePatientContext = {
  Pronouns?: AwsSpeechFullApiSchemaPronouns;
};
```

#### Properties

##### Pronouns?

```ts
optional Pronouns?: AwsSpeechFullApiSchemaPronouns;
```

***

### AwsSpeechFullApiSchemaMedicalScribePatientContext2

```ts
type AwsSpeechFullApiSchemaMedicalScribePatientContext2 = {
  Pronouns?: AwsSpeechFullApiSchemaPronouns2;
};
```

#### Properties

##### Pronouns?

```ts
optional Pronouns?: AwsSpeechFullApiSchemaPronouns2;
```

***

### AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsResult

```ts
type AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsResult = {
  ClinicalNoteGenerationResult?: AwsSpeechFullApiSchemaClinicalNoteGenerationResult;
};
```

#### Properties

##### ClinicalNoteGenerationResult?

```ts
optional ClinicalNoteGenerationResult?: AwsSpeechFullApiSchemaClinicalNoteGenerationResult;
```

***

### AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsSettings

```ts
type AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsSettings = {
  ClinicalNoteGenerationSettings: AwsSpeechFullApiSchemaClinicalNoteGenerationSettings2;
};
```

#### Properties

##### ClinicalNoteGenerationSettings

```ts
ClinicalNoteGenerationSettings: AwsSpeechFullApiSchemaClinicalNoteGenerationSettings2;
```

***

### AwsSpeechFullApiSchemaMedicalScribeResultStream

```ts
type AwsSpeechFullApiSchemaMedicalScribeResultStream =
  | {
  TranscriptEvent: AwsSpeechFullApiSchemaMedicalScribeTranscriptEvent;
}
  | {
  BadRequestException: AwsSpeechFullApiSchemaBadRequestException;
}
  | {
  LimitExceededException: AwsSpeechFullApiSchemaLimitExceededException;
}
  | {
  InternalFailureException: AwsSpeechFullApiSchemaInternalFailureException;
}
  | {
  ConflictException: AwsSpeechFullApiSchemaConflictException;
}
  | {
  ServiceUnavailableException: AwsSpeechFullApiSchemaServiceUnavailableException;
};
```

***

### AwsSpeechFullApiSchemaMedicalScribeSessionControlEvent

```ts
type AwsSpeechFullApiSchemaMedicalScribeSessionControlEvent = {
  Type: AwsSpeechFullApiSchemaMedicalScribeSessionControlEventType;
};
```

#### Properties

##### Type

```ts
Type: AwsSpeechFullApiSchemaMedicalScribeSessionControlEventType;
```

***

### AwsSpeechFullApiSchemaMedicalScribeSessionControlEventType

```ts
type AwsSpeechFullApiSchemaMedicalScribeSessionControlEventType = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalScribeSettings

```ts
type AwsSpeechFullApiSchemaMedicalScribeSettings = {
  ChannelIdentification?: boolean;
  ClinicalNoteGenerationSettings?: AwsSpeechFullApiSchemaClinicalNoteGenerationSettings;
  MaxSpeakerLabels?: number;
  ShowSpeakerLabels?: boolean;
  VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod;
  VocabularyFilterName?: string;
  VocabularyName?: string;
};
```

#### Properties

##### ChannelIdentification?

```ts
optional ChannelIdentification?: boolean;
```

##### ClinicalNoteGenerationSettings?

```ts
optional ClinicalNoteGenerationSettings?: AwsSpeechFullApiSchemaClinicalNoteGenerationSettings;
```

##### MaxSpeakerLabels?

```ts
optional MaxSpeakerLabels?: number;
```

##### ShowSpeakerLabels?

```ts
optional ShowSpeakerLabels?: boolean;
```

##### VocabularyFilterMethod?

```ts
optional VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod;
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

### AwsSpeechFullApiSchemaMedicalScribeStreamDetails

```ts
type AwsSpeechFullApiSchemaMedicalScribeStreamDetails = {
  ChannelDefinitions?: AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions2;
  EncryptionSettings?: AwsSpeechFullApiSchemaMedicalScribeEncryptionSettings;
  LanguageCode?: AwsSpeechFullApiSchemaMedicalScribeLanguageCode;
  MediaEncoding?: AwsSpeechFullApiSchemaMedicalScribeMediaEncoding;
  MediaSampleRateHertz?: number;
  MedicalScribeContextProvided?: boolean;
  PostStreamAnalyticsResult?: AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsResult;
  PostStreamAnalyticsSettings?: AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsSettings;
  ResourceAccessRoleArn?: string;
  SessionId?: string;
  StreamCreatedAt?: string;
  StreamEndedAt?: string;
  StreamStatus?: AwsSpeechFullApiSchemaMedicalScribeStreamStatus;
  VocabularyFilterMethod?: AwsSpeechFullApiSchemaMedicalScribeVocabularyFilterMethod;
  VocabularyFilterName?: string;
  VocabularyName?: string;
};
```

#### Properties

##### ChannelDefinitions?

```ts
optional ChannelDefinitions?: AwsSpeechFullApiSchemaMedicalScribeChannelDefinitions2;
```

##### EncryptionSettings?

```ts
optional EncryptionSettings?: AwsSpeechFullApiSchemaMedicalScribeEncryptionSettings;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaMedicalScribeLanguageCode;
```

##### MediaEncoding?

```ts
optional MediaEncoding?: AwsSpeechFullApiSchemaMedicalScribeMediaEncoding;
```

##### MediaSampleRateHertz?

```ts
optional MediaSampleRateHertz?: number;
```

##### MedicalScribeContextProvided?

```ts
optional MedicalScribeContextProvided?: boolean;
```

##### PostStreamAnalyticsResult?

```ts
optional PostStreamAnalyticsResult?: AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsResult;
```

##### PostStreamAnalyticsSettings?

```ts
optional PostStreamAnalyticsSettings?: AwsSpeechFullApiSchemaMedicalScribePostStreamAnalyticsSettings;
```

##### ResourceAccessRoleArn?

```ts
optional ResourceAccessRoleArn?: string;
```

##### SessionId?

```ts
optional SessionId?: string;
```

##### StreamCreatedAt?

```ts
optional StreamCreatedAt?: string;
```

##### StreamEndedAt?

```ts
optional StreamEndedAt?: string;
```

##### StreamStatus?

```ts
optional StreamStatus?: AwsSpeechFullApiSchemaMedicalScribeStreamStatus;
```

##### VocabularyFilterMethod?

```ts
optional VocabularyFilterMethod?: AwsSpeechFullApiSchemaMedicalScribeVocabularyFilterMethod;
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

### AwsSpeechFullApiSchemaMedicalScribeStreamStatus

```ts
type AwsSpeechFullApiSchemaMedicalScribeStreamStatus = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalScribeTranscriptEvent

```ts
type AwsSpeechFullApiSchemaMedicalScribeTranscriptEvent = {
  TranscriptSegment?: AwsSpeechFullApiSchemaMedicalScribeTranscriptSegment;
};
```

#### Properties

##### TranscriptSegment?

```ts
optional TranscriptSegment?: AwsSpeechFullApiSchemaMedicalScribeTranscriptSegment;
```

***

### AwsSpeechFullApiSchemaMedicalScribeTranscriptItem

```ts
type AwsSpeechFullApiSchemaMedicalScribeTranscriptItem = {
  BeginAudioTime?: number;
  Confidence?: number;
  Content?: string;
  EndAudioTime?: number;
  Type?: AwsSpeechFullApiSchemaMedicalScribeTranscriptItemType;
  VocabularyFilterMatch?: boolean;
};
```

#### Properties

##### BeginAudioTime?

```ts
optional BeginAudioTime?: number;
```

##### Confidence?

```ts
optional Confidence?: number;
```

##### Content?

```ts
optional Content?: string;
```

##### EndAudioTime?

```ts
optional EndAudioTime?: number;
```

##### Type?

```ts
optional Type?: AwsSpeechFullApiSchemaMedicalScribeTranscriptItemType;
```

##### VocabularyFilterMatch?

```ts
optional VocabularyFilterMatch?: boolean;
```

***

### AwsSpeechFullApiSchemaMedicalScribeTranscriptItemList

```ts
type AwsSpeechFullApiSchemaMedicalScribeTranscriptItemList = ReadonlyArray<AwsSpeechFullApiSchemaMedicalScribeTranscriptItem>;
```

***

### AwsSpeechFullApiSchemaMedicalScribeTranscriptItemType

```ts
type AwsSpeechFullApiSchemaMedicalScribeTranscriptItemType = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalScribeTranscriptSegment

```ts
type AwsSpeechFullApiSchemaMedicalScribeTranscriptSegment = {
  BeginAudioTime?: number;
  ChannelId?: string;
  Content?: string;
  EndAudioTime?: number;
  IsPartial?: boolean;
  Items?: AwsSpeechFullApiSchemaMedicalScribeTranscriptItemList;
  SegmentId?: string;
};
```

#### Properties

##### BeginAudioTime?

```ts
optional BeginAudioTime?: number;
```

##### ChannelId?

```ts
optional ChannelId?: string;
```

##### Content?

```ts
optional Content?: string;
```

##### EndAudioTime?

```ts
optional EndAudioTime?: number;
```

##### IsPartial?

```ts
optional IsPartial?: boolean;
```

##### Items?

```ts
optional Items?: AwsSpeechFullApiSchemaMedicalScribeTranscriptItemList;
```

##### SegmentId?

```ts
optional SegmentId?: string;
```

***

### AwsSpeechFullApiSchemaMedicalScribeVocabularyFilterMethod

```ts
type AwsSpeechFullApiSchemaMedicalScribeVocabularyFilterMethod = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaMedicalTranscript

```ts
type AwsSpeechFullApiSchemaMedicalTranscript = {
  TranscriptFileUri?: string;
};
```

#### Properties

##### TranscriptFileUri?

```ts
optional TranscriptFileUri?: string;
```

***

### AwsSpeechFullApiSchemaMedicalTranscript2

```ts
type AwsSpeechFullApiSchemaMedicalTranscript2 = {
  Results?: AwsSpeechFullApiSchemaMedicalResultList;
};
```

#### Properties

##### Results?

```ts
optional Results?: AwsSpeechFullApiSchemaMedicalResultList;
```

***

### AwsSpeechFullApiSchemaMedicalTranscriptEvent

```ts
type AwsSpeechFullApiSchemaMedicalTranscriptEvent = {
  Transcript?: AwsSpeechFullApiSchemaMedicalTranscript2;
};
```

#### Properties

##### Transcript?

```ts
optional Transcript?: AwsSpeechFullApiSchemaMedicalTranscript2;
```

***

### AwsSpeechFullApiSchemaMedicalTranscriptionJob

```ts
type AwsSpeechFullApiSchemaMedicalTranscriptionJob = {
  CompletionTime?: string;
  ContentIdentificationType?: AwsSpeechFullApiSchemaMedicalContentIdentificationType;
  CreationTime?: string;
  FailureReason?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  Media?: AwsSpeechFullApiSchemaMedia;
  MediaFormat?: AwsSpeechFullApiSchemaMediaFormat;
  MediaSampleRateHertz?: number;
  MedicalTranscriptionJobName?: string;
  Settings?: AwsSpeechFullApiSchemaMedicalTranscriptionSetting;
  Specialty?: AwsSpeechFullApiSchemaSpecialty;
  StartTime?: string;
  Tags?: AwsSpeechFullApiSchemaTagList;
  Transcript?: AwsSpeechFullApiSchemaMedicalTranscript;
  TranscriptionJobStatus?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
  Type?: AwsSpeechFullApiSchemaType;
};
```

#### Properties

##### CompletionTime?

```ts
optional CompletionTime?: string;
```

##### ContentIdentificationType?

```ts
optional ContentIdentificationType?: AwsSpeechFullApiSchemaMedicalContentIdentificationType;
```

##### CreationTime?

```ts
optional CreationTime?: string;
```

##### FailureReason?

```ts
optional FailureReason?: string;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### Media?

```ts
optional Media?: AwsSpeechFullApiSchemaMedia;
```

##### MediaFormat?

```ts
optional MediaFormat?: AwsSpeechFullApiSchemaMediaFormat;
```

##### MediaSampleRateHertz?

```ts
optional MediaSampleRateHertz?: number;
```

##### MedicalTranscriptionJobName?

```ts
optional MedicalTranscriptionJobName?: string;
```

##### Settings?

```ts
optional Settings?: AwsSpeechFullApiSchemaMedicalTranscriptionSetting;
```

##### Specialty?

```ts
optional Specialty?: AwsSpeechFullApiSchemaSpecialty;
```

##### StartTime?

```ts
optional StartTime?: string;
```

##### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

##### Transcript?

```ts
optional Transcript?: AwsSpeechFullApiSchemaMedicalTranscript;
```

##### TranscriptionJobStatus?

```ts
optional TranscriptionJobStatus?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
```

##### Type?

```ts
optional Type?: AwsSpeechFullApiSchemaType;
```

***

### AwsSpeechFullApiSchemaMedicalTranscriptionJobSummaries

```ts
type AwsSpeechFullApiSchemaMedicalTranscriptionJobSummaries = ReadonlyArray<AwsSpeechFullApiSchemaMedicalTranscriptionJobSummary>;
```

***

### AwsSpeechFullApiSchemaMedicalTranscriptionJobSummary

```ts
type AwsSpeechFullApiSchemaMedicalTranscriptionJobSummary = {
  CompletionTime?: string;
  ContentIdentificationType?: AwsSpeechFullApiSchemaMedicalContentIdentificationType;
  CreationTime?: string;
  FailureReason?: string;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  MedicalTranscriptionJobName?: string;
  OutputLocationType?: AwsSpeechFullApiSchemaOutputLocationType;
  Specialty?: AwsSpeechFullApiSchemaSpecialty;
  StartTime?: string;
  TranscriptionJobStatus?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
  Type?: AwsSpeechFullApiSchemaType;
};
```

#### Properties

##### CompletionTime?

```ts
optional CompletionTime?: string;
```

##### ContentIdentificationType?

```ts
optional ContentIdentificationType?: AwsSpeechFullApiSchemaMedicalContentIdentificationType;
```

##### CreationTime?

```ts
optional CreationTime?: string;
```

##### FailureReason?

```ts
optional FailureReason?: string;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### MedicalTranscriptionJobName?

```ts
optional MedicalTranscriptionJobName?: string;
```

##### OutputLocationType?

```ts
optional OutputLocationType?: AwsSpeechFullApiSchemaOutputLocationType;
```

##### Specialty?

```ts
optional Specialty?: AwsSpeechFullApiSchemaSpecialty;
```

##### StartTime?

```ts
optional StartTime?: string;
```

##### TranscriptionJobStatus?

```ts
optional TranscriptionJobStatus?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
```

##### Type?

```ts
optional Type?: AwsSpeechFullApiSchemaType;
```

***

### AwsSpeechFullApiSchemaMedicalTranscriptionSetting

```ts
type AwsSpeechFullApiSchemaMedicalTranscriptionSetting = {
  ChannelIdentification?: boolean;
  MaxAlternatives?: number;
  MaxSpeakerLabels?: number;
  ShowAlternatives?: boolean;
  ShowSpeakerLabels?: boolean;
  VocabularyName?: string;
};
```

#### Properties

##### ChannelIdentification?

```ts
optional ChannelIdentification?: boolean;
```

##### MaxAlternatives?

```ts
optional MaxAlternatives?: number;
```

##### MaxSpeakerLabels?

```ts
optional MaxSpeakerLabels?: number;
```

##### ShowAlternatives?

```ts
optional ShowAlternatives?: boolean;
```

##### ShowSpeakerLabels?

```ts
optional ShowSpeakerLabels?: boolean;
```

##### VocabularyName?

```ts
optional VocabularyName?: string;
```

***

### AwsSpeechFullApiSchemaMedicalTranscriptResultStream

```ts
type AwsSpeechFullApiSchemaMedicalTranscriptResultStream =
  | {
  TranscriptEvent: AwsSpeechFullApiSchemaMedicalTranscriptEvent;
}
  | {
  BadRequestException: AwsSpeechFullApiSchemaBadRequestException;
}
  | {
  LimitExceededException: AwsSpeechFullApiSchemaLimitExceededException;
}
  | {
  InternalFailureException: AwsSpeechFullApiSchemaInternalFailureException;
}
  | {
  ConflictException: AwsSpeechFullApiSchemaConflictException;
}
  | {
  ServiceUnavailableException: AwsSpeechFullApiSchemaServiceUnavailableException;
};
```

***

### AwsSpeechFullApiSchemaModels

```ts
type AwsSpeechFullApiSchemaModels = ReadonlyArray<AwsSpeechFullApiSchemaLanguageModel>;
```

***

### AwsSpeechFullApiSchemaModelSettings

```ts
type AwsSpeechFullApiSchemaModelSettings = {
  LanguageModelName?: string;
};
```

#### Properties

##### LanguageModelName?

```ts
optional LanguageModelName?: string;
```

***

### AwsSpeechFullApiSchemaModelStatus

```ts
type AwsSpeechFullApiSchemaModelStatus = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaNonTalkTimeFilter

```ts
type AwsSpeechFullApiSchemaNonTalkTimeFilter = {
  AbsoluteTimeRange?: AwsSpeechFullApiSchemaAbsoluteTimeRange;
  Negate?: boolean;
  RelativeTimeRange?: AwsSpeechFullApiSchemaRelativeTimeRange;
  Threshold?: number;
};
```

#### Properties

##### AbsoluteTimeRange?

```ts
optional AbsoluteTimeRange?: AwsSpeechFullApiSchemaAbsoluteTimeRange;
```

##### Negate?

```ts
optional Negate?: boolean;
```

##### RelativeTimeRange?

```ts
optional RelativeTimeRange?: AwsSpeechFullApiSchemaRelativeTimeRange;
```

##### Threshold?

```ts
optional Threshold?: number;
```

***

### AwsSpeechFullApiSchemaOutputFormat

```ts
type AwsSpeechFullApiSchemaOutputFormat = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaOutputLocationType

```ts
type AwsSpeechFullApiSchemaOutputLocationType = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaPartialResultsStability

```ts
type AwsSpeechFullApiSchemaPartialResultsStability = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaParticipantRole

```ts
type AwsSpeechFullApiSchemaParticipantRole = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaParticipantRole2

```ts
type AwsSpeechFullApiSchemaParticipantRole2 = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaPhrases

```ts
type AwsSpeechFullApiSchemaPhrases = ReadonlyArray<string>;
```

***

### AwsSpeechFullApiSchemaPiiEntityType

```ts
type AwsSpeechFullApiSchemaPiiEntityType = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaPiiEntityTypes

```ts
type AwsSpeechFullApiSchemaPiiEntityTypes = ReadonlyArray<AwsSpeechFullApiSchemaPiiEntityType>;
```

***

### AwsSpeechFullApiSchemaPointsOfInterest

```ts
type AwsSpeechFullApiSchemaPointsOfInterest = {
  TimestampRanges?: AwsSpeechFullApiSchemaTimestampRanges;
};
```

#### Properties

##### TimestampRanges?

```ts
optional TimestampRanges?: AwsSpeechFullApiSchemaTimestampRanges;
```

***

### AwsSpeechFullApiSchemaPostCallAnalyticsSettings

```ts
type AwsSpeechFullApiSchemaPostCallAnalyticsSettings = {
  ContentRedactionOutput?: AwsSpeechFullApiSchemaContentRedactionOutput;
  DataAccessRoleArn: string;
  OutputEncryptionKMSKeyId?: string;
  OutputLocation: string;
};
```

#### Properties

##### ContentRedactionOutput?

```ts
optional ContentRedactionOutput?: AwsSpeechFullApiSchemaContentRedactionOutput;
```

##### DataAccessRoleArn

```ts
DataAccessRoleArn: string;
```

##### OutputEncryptionKMSKeyId?

```ts
optional OutputEncryptionKMSKeyId?: string;
```

##### OutputLocation

```ts
OutputLocation: string;
```

***

### AwsSpeechFullApiSchemaPronouns

```ts
type AwsSpeechFullApiSchemaPronouns = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaPronouns2

```ts
type AwsSpeechFullApiSchemaPronouns2 = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaPutLexiconOutput

```ts
type AwsSpeechFullApiSchemaPutLexiconOutput = {
};
```

***

### AwsSpeechFullApiSchemaQuotaCode

```ts
type AwsSpeechFullApiSchemaQuotaCode = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaRedactionOutput

```ts
type AwsSpeechFullApiSchemaRedactionOutput = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaRedactionType

```ts
type AwsSpeechFullApiSchemaRedactionType = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaRelativeTimeRange

```ts
type AwsSpeechFullApiSchemaRelativeTimeRange = {
  EndPercentage?: number;
  First?: number;
  Last?: number;
  StartPercentage?: number;
};
```

#### Properties

##### EndPercentage?

```ts
optional EndPercentage?: number;
```

##### First?

```ts
optional First?: number;
```

##### Last?

```ts
optional Last?: number;
```

##### StartPercentage?

```ts
optional StartPercentage?: number;
```

***

### AwsSpeechFullApiSchemaResult

```ts
type AwsSpeechFullApiSchemaResult = {
  Alternatives?: AwsSpeechFullApiSchemaAlternativeList;
  ChannelId?: string;
  EndTime?: number;
  IsPartial?: boolean;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode3;
  LanguageIdentification?: AwsSpeechFullApiSchemaLanguageIdentification;
  ResultId?: string;
  StartTime?: number;
};
```

#### Properties

##### Alternatives?

```ts
optional Alternatives?: AwsSpeechFullApiSchemaAlternativeList;
```

##### ChannelId?

```ts
optional ChannelId?: string;
```

##### EndTime?

```ts
optional EndTime?: number;
```

##### IsPartial?

```ts
optional IsPartial?: boolean;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode3;
```

##### LanguageIdentification?

```ts
optional LanguageIdentification?: AwsSpeechFullApiSchemaLanguageIdentification;
```

##### ResultId?

```ts
optional ResultId?: string;
```

##### StartTime?

```ts
optional StartTime?: number;
```

***

### AwsSpeechFullApiSchemaResultList

```ts
type AwsSpeechFullApiSchemaResultList = ReadonlyArray<AwsSpeechFullApiSchemaResult>;
```

***

### AwsSpeechFullApiSchemaRule

```ts
type AwsSpeechFullApiSchemaRule =
  | {
  NonTalkTimeFilter: AwsSpeechFullApiSchemaNonTalkTimeFilter;
}
  | {
  InterruptionFilter: AwsSpeechFullApiSchemaInterruptionFilter;
}
  | {
  TranscriptFilter: AwsSpeechFullApiSchemaTranscriptFilter;
}
  | {
  SentimentFilter: AwsSpeechFullApiSchemaSentimentFilter;
};
```

***

### AwsSpeechFullApiSchemaRuleList

```ts
type AwsSpeechFullApiSchemaRuleList = ReadonlyArray<AwsSpeechFullApiSchemaRule>;
```

***

### AwsSpeechFullApiSchemaSentiment

```ts
type AwsSpeechFullApiSchemaSentiment = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaSentimentFilter

```ts
type AwsSpeechFullApiSchemaSentimentFilter = {
  AbsoluteTimeRange?: AwsSpeechFullApiSchemaAbsoluteTimeRange;
  Negate?: boolean;
  ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole;
  RelativeTimeRange?: AwsSpeechFullApiSchemaRelativeTimeRange;
  Sentiments: AwsSpeechFullApiSchemaSentimentValueList;
};
```

#### Properties

##### AbsoluteTimeRange?

```ts
optional AbsoluteTimeRange?: AwsSpeechFullApiSchemaAbsoluteTimeRange;
```

##### Negate?

```ts
optional Negate?: boolean;
```

##### ParticipantRole?

```ts
optional ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole;
```

##### RelativeTimeRange?

```ts
optional RelativeTimeRange?: AwsSpeechFullApiSchemaRelativeTimeRange;
```

##### Sentiments

```ts
Sentiments: AwsSpeechFullApiSchemaSentimentValueList;
```

***

### AwsSpeechFullApiSchemaSentimentValue

```ts
type AwsSpeechFullApiSchemaSentimentValue = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaSentimentValueList

```ts
type AwsSpeechFullApiSchemaSentimentValueList = ReadonlyArray<AwsSpeechFullApiSchemaSentimentValue>;
```

***

### AwsSpeechFullApiSchemaServiceCode

```ts
type AwsSpeechFullApiSchemaServiceCode = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaServiceFailureException

```ts
type AwsSpeechFullApiSchemaServiceFailureException = {
  message?: string;
};
```

#### Properties

##### message?

```ts
optional message?: string;
```

***

### AwsSpeechFullApiSchemaServiceQuotaExceededException

```ts
type AwsSpeechFullApiSchemaServiceQuotaExceededException = {
  message: string;
  quotaCode: AwsSpeechFullApiSchemaQuotaCode;
  serviceCode: AwsSpeechFullApiSchemaServiceCode;
};
```

#### Properties

##### message

```ts
message: string;
```

##### quotaCode

```ts
quotaCode: AwsSpeechFullApiSchemaQuotaCode;
```

##### serviceCode

```ts
serviceCode: AwsSpeechFullApiSchemaServiceCode;
```

***

### AwsSpeechFullApiSchemaServiceUnavailableException

```ts
type AwsSpeechFullApiSchemaServiceUnavailableException = {
  Message?: string;
};
```

#### Properties

##### Message?

```ts
optional Message?: string;
```

***

### AwsSpeechFullApiSchemaSettings

```ts
type AwsSpeechFullApiSchemaSettings = {
  ChannelIdentification?: boolean;
  MaxAlternatives?: number;
  MaxSpeakerLabels?: number;
  ShowAlternatives?: boolean;
  ShowSpeakerLabels?: boolean;
  VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod;
  VocabularyFilterName?: string;
  VocabularyName?: string;
};
```

#### Properties

##### ChannelIdentification?

```ts
optional ChannelIdentification?: boolean;
```

##### MaxAlternatives?

```ts
optional MaxAlternatives?: number;
```

##### MaxSpeakerLabels?

```ts
optional MaxSpeakerLabels?: number;
```

##### ShowAlternatives?

```ts
optional ShowAlternatives?: boolean;
```

##### ShowSpeakerLabels?

```ts
optional ShowSpeakerLabels?: boolean;
```

##### VocabularyFilterMethod?

```ts
optional VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod;
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

### AwsSpeechFullApiSchemaSpecialty

```ts
type AwsSpeechFullApiSchemaSpecialty = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaSpecialty2

```ts
type AwsSpeechFullApiSchemaSpecialty2 = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaSpeechMarkType

```ts
type AwsSpeechFullApiSchemaSpeechMarkType = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaSpeechMarkTypeList

```ts
type AwsSpeechFullApiSchemaSpeechMarkTypeList = ReadonlyArray<AwsSpeechFullApiSchemaSpeechMarkType>;
```

***

### AwsSpeechFullApiSchemaStartCallAnalyticsJobResponse

```ts
type AwsSpeechFullApiSchemaStartCallAnalyticsJobResponse = {
  CallAnalyticsJob?: AwsSpeechFullApiSchemaCallAnalyticsJob;
};
```

#### Properties

##### CallAnalyticsJob?

```ts
optional CallAnalyticsJob?: AwsSpeechFullApiSchemaCallAnalyticsJob;
```

***

### AwsSpeechFullApiSchemaStartCallAnalyticsStreamTranscriptionResponse

```ts
type AwsSpeechFullApiSchemaStartCallAnalyticsStreamTranscriptionResponse = {
  CallAnalyticsTranscriptResultStream?: AwsSpeechFullApiSchemaCallAnalyticsTranscriptResultStream;
  ContentIdentificationType?: AwsSpeechFullApiSchemaContentIdentificationType;
  ContentRedactionType?: AwsSpeechFullApiSchemaContentRedactionType;
  EnablePartialResultsStabilization?: boolean;
  IdentifyLanguage?: boolean;
  LanguageCode?: AwsSpeechFullApiSchemaCallAnalyticsLanguageCode;
  LanguageModelName?: string;
  LanguageOptions?: string;
  MediaEncoding?: AwsSpeechFullApiSchemaMediaEncoding;
  MediaSampleRateHertz?: number;
  PartialResultsStability?: AwsSpeechFullApiSchemaPartialResultsStability;
  PiiEntityTypes?: string;
  PreferredLanguage?: AwsSpeechFullApiSchemaCallAnalyticsLanguageCode;
  RequestId?: string;
  SessionId?: string;
  VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod2;
  VocabularyFilterName?: string;
  VocabularyFilterNames?: string;
  VocabularyName?: string;
  VocabularyNames?: string;
};
```

#### Properties

##### CallAnalyticsTranscriptResultStream?

```ts
optional CallAnalyticsTranscriptResultStream?: AwsSpeechFullApiSchemaCallAnalyticsTranscriptResultStream;
```

##### ContentIdentificationType?

```ts
optional ContentIdentificationType?: AwsSpeechFullApiSchemaContentIdentificationType;
```

##### ContentRedactionType?

```ts
optional ContentRedactionType?: AwsSpeechFullApiSchemaContentRedactionType;
```

##### EnablePartialResultsStabilization?

```ts
optional EnablePartialResultsStabilization?: boolean;
```

##### IdentifyLanguage?

```ts
optional IdentifyLanguage?: boolean;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaCallAnalyticsLanguageCode;
```

##### LanguageModelName?

```ts
optional LanguageModelName?: string;
```

##### LanguageOptions?

```ts
optional LanguageOptions?: string;
```

##### MediaEncoding?

```ts
optional MediaEncoding?: AwsSpeechFullApiSchemaMediaEncoding;
```

##### MediaSampleRateHertz?

```ts
optional MediaSampleRateHertz?: number;
```

##### PartialResultsStability?

```ts
optional PartialResultsStability?: AwsSpeechFullApiSchemaPartialResultsStability;
```

##### PiiEntityTypes?

```ts
optional PiiEntityTypes?: string;
```

##### PreferredLanguage?

```ts
optional PreferredLanguage?: AwsSpeechFullApiSchemaCallAnalyticsLanguageCode;
```

##### RequestId?

```ts
optional RequestId?: string;
```

##### SessionId?

```ts
optional SessionId?: string;
```

##### VocabularyFilterMethod?

```ts
optional VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod2;
```

##### VocabularyFilterName?

```ts
optional VocabularyFilterName?: string;
```

##### VocabularyFilterNames?

```ts
optional VocabularyFilterNames?: string;
```

##### VocabularyName?

```ts
optional VocabularyName?: string;
```

##### VocabularyNames?

```ts
optional VocabularyNames?: string;
```

***

### AwsSpeechFullApiSchemaStartMedicalScribeJobResponse

```ts
type AwsSpeechFullApiSchemaStartMedicalScribeJobResponse = {
  MedicalScribeJob?: AwsSpeechFullApiSchemaMedicalScribeJob;
};
```

#### Properties

##### MedicalScribeJob?

```ts
optional MedicalScribeJob?: AwsSpeechFullApiSchemaMedicalScribeJob;
```

***

### AwsSpeechFullApiSchemaStartMedicalScribeStreamResponse

```ts
type AwsSpeechFullApiSchemaStartMedicalScribeStreamResponse = {
  LanguageCode?: AwsSpeechFullApiSchemaMedicalScribeLanguageCode;
  MediaEncoding?: AwsSpeechFullApiSchemaMedicalScribeMediaEncoding;
  MediaSampleRateHertz?: number;
  RequestId?: string;
  ResultStream?: AwsSpeechFullApiSchemaMedicalScribeResultStream;
  SessionId?: string;
};
```

#### Properties

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaMedicalScribeLanguageCode;
```

##### MediaEncoding?

```ts
optional MediaEncoding?: AwsSpeechFullApiSchemaMedicalScribeMediaEncoding;
```

##### MediaSampleRateHertz?

```ts
optional MediaSampleRateHertz?: number;
```

##### RequestId?

```ts
optional RequestId?: string;
```

##### ResultStream?

```ts
optional ResultStream?: AwsSpeechFullApiSchemaMedicalScribeResultStream;
```

##### SessionId?

```ts
optional SessionId?: string;
```

***

### AwsSpeechFullApiSchemaStartMedicalStreamTranscriptionResponse

```ts
type AwsSpeechFullApiSchemaStartMedicalStreamTranscriptionResponse = {
  ContentIdentificationType?: AwsSpeechFullApiSchemaMedicalContentIdentificationType2;
  EnableChannelIdentification?: boolean;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode3;
  MediaEncoding?: AwsSpeechFullApiSchemaMediaEncoding;
  MediaSampleRateHertz?: number;
  NumberOfChannels?: number;
  RequestId?: string;
  SessionId?: string;
  ShowSpeakerLabel?: boolean;
  Specialty?: AwsSpeechFullApiSchemaSpecialty2;
  TranscriptResultStream?: AwsSpeechFullApiSchemaMedicalTranscriptResultStream;
  Type?: AwsSpeechFullApiSchemaType2;
  VocabularyName?: string;
};
```

#### Properties

##### ContentIdentificationType?

```ts
optional ContentIdentificationType?: AwsSpeechFullApiSchemaMedicalContentIdentificationType2;
```

##### EnableChannelIdentification?

```ts
optional EnableChannelIdentification?: boolean;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode3;
```

##### MediaEncoding?

```ts
optional MediaEncoding?: AwsSpeechFullApiSchemaMediaEncoding;
```

##### MediaSampleRateHertz?

```ts
optional MediaSampleRateHertz?: number;
```

##### NumberOfChannels?

```ts
optional NumberOfChannels?: number;
```

##### RequestId?

```ts
optional RequestId?: string;
```

##### SessionId?

```ts
optional SessionId?: string;
```

##### ShowSpeakerLabel?

```ts
optional ShowSpeakerLabel?: boolean;
```

##### Specialty?

```ts
optional Specialty?: AwsSpeechFullApiSchemaSpecialty2;
```

##### TranscriptResultStream?

```ts
optional TranscriptResultStream?: AwsSpeechFullApiSchemaMedicalTranscriptResultStream;
```

##### Type?

```ts
optional Type?: AwsSpeechFullApiSchemaType2;
```

##### VocabularyName?

```ts
optional VocabularyName?: string;
```

***

### AwsSpeechFullApiSchemaStartMedicalTranscriptionJobResponse

```ts
type AwsSpeechFullApiSchemaStartMedicalTranscriptionJobResponse = {
  MedicalTranscriptionJob?: AwsSpeechFullApiSchemaMedicalTranscriptionJob;
};
```

#### Properties

##### MedicalTranscriptionJob?

```ts
optional MedicalTranscriptionJob?: AwsSpeechFullApiSchemaMedicalTranscriptionJob;
```

***

### AwsSpeechFullApiSchemaStartSpeechSynthesisStreamActionStream

```ts
type AwsSpeechFullApiSchemaStartSpeechSynthesisStreamActionStream =
  | {
  TextEvent: AwsSpeechFullApiSchemaTextEvent;
}
  | {
  CloseStreamEvent: AwsSpeechFullApiSchemaCloseStreamEvent;
};
```

***

### AwsSpeechFullApiSchemaStartSpeechSynthesisStreamEventStream

```ts
type AwsSpeechFullApiSchemaStartSpeechSynthesisStreamEventStream =
  | {
  AudioEvent: AwsSpeechFullApiSchemaAudioEvent2;
}
  | {
  StreamClosedEvent: AwsSpeechFullApiSchemaStreamClosedEvent;
}
  | {
  ValidationException: AwsSpeechFullApiSchemaValidationException;
}
  | {
  ServiceQuotaExceededException: AwsSpeechFullApiSchemaServiceQuotaExceededException;
}
  | {
  ServiceFailureException: AwsSpeechFullApiSchemaServiceFailureException;
}
  | {
  ThrottlingException: AwsSpeechFullApiSchemaThrottlingException;
};
```

***

### AwsSpeechFullApiSchemaStartSpeechSynthesisStreamOutput

```ts
type AwsSpeechFullApiSchemaStartSpeechSynthesisStreamOutput = {
  EventStream?: AwsSpeechFullApiSchemaStartSpeechSynthesisStreamEventStream;
};
```

#### Properties

##### EventStream?

```ts
optional EventStream?: AwsSpeechFullApiSchemaStartSpeechSynthesisStreamEventStream;
```

***

### AwsSpeechFullApiSchemaStartSpeechSynthesisTaskOutput

```ts
type AwsSpeechFullApiSchemaStartSpeechSynthesisTaskOutput = {
  SynthesisTask?: AwsSpeechFullApiSchemaSynthesisTask;
};
```

#### Properties

##### SynthesisTask?

```ts
optional SynthesisTask?: AwsSpeechFullApiSchemaSynthesisTask;
```

***

### AwsSpeechFullApiSchemaStartStreamTranscriptionResponse

```ts
type AwsSpeechFullApiSchemaStartStreamTranscriptionResponse = {
  ContentIdentificationType?: AwsSpeechFullApiSchemaContentIdentificationType;
  ContentRedactionType?: AwsSpeechFullApiSchemaContentRedactionType;
  EnableChannelIdentification?: boolean;
  EnablePartialResultsStabilization?: boolean;
  IdentifyLanguage?: boolean;
  IdentifyMultipleLanguages?: boolean;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode3;
  LanguageModelName?: string;
  LanguageOptions?: string;
  MediaEncoding?: AwsSpeechFullApiSchemaMediaEncoding;
  MediaSampleRateHertz?: number;
  NumberOfChannels?: number;
  PartialResultsStability?: AwsSpeechFullApiSchemaPartialResultsStability;
  PiiEntityTypes?: string;
  PreferredLanguage?: AwsSpeechFullApiSchemaLanguageCode3;
  RequestId?: string;
  SessionId?: string;
  SessionResumeWindow?: number;
  ShowSpeakerLabel?: boolean;
  TranscriptResultStream?: AwsSpeechFullApiSchemaTranscriptResultStream;
  VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod2;
  VocabularyFilterName?: string;
  VocabularyFilterNames?: string;
  VocabularyName?: string;
  VocabularyNames?: string;
};
```

#### Properties

##### ContentIdentificationType?

```ts
optional ContentIdentificationType?: AwsSpeechFullApiSchemaContentIdentificationType;
```

##### ContentRedactionType?

```ts
optional ContentRedactionType?: AwsSpeechFullApiSchemaContentRedactionType;
```

##### EnableChannelIdentification?

```ts
optional EnableChannelIdentification?: boolean;
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
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode3;
```

##### LanguageModelName?

```ts
optional LanguageModelName?: string;
```

##### LanguageOptions?

```ts
optional LanguageOptions?: string;
```

##### MediaEncoding?

```ts
optional MediaEncoding?: AwsSpeechFullApiSchemaMediaEncoding;
```

##### MediaSampleRateHertz?

```ts
optional MediaSampleRateHertz?: number;
```

##### NumberOfChannels?

```ts
optional NumberOfChannels?: number;
```

##### PartialResultsStability?

```ts
optional PartialResultsStability?: AwsSpeechFullApiSchemaPartialResultsStability;
```

##### PiiEntityTypes?

```ts
optional PiiEntityTypes?: string;
```

##### PreferredLanguage?

```ts
optional PreferredLanguage?: AwsSpeechFullApiSchemaLanguageCode3;
```

##### RequestId?

```ts
optional RequestId?: string;
```

##### SessionId?

```ts
optional SessionId?: string;
```

##### SessionResumeWindow?

```ts
optional SessionResumeWindow?: number;
```

##### ShowSpeakerLabel?

```ts
optional ShowSpeakerLabel?: boolean;
```

##### TranscriptResultStream?

```ts
optional TranscriptResultStream?: AwsSpeechFullApiSchemaTranscriptResultStream;
```

##### VocabularyFilterMethod?

```ts
optional VocabularyFilterMethod?: AwsSpeechFullApiSchemaVocabularyFilterMethod2;
```

##### VocabularyFilterName?

```ts
optional VocabularyFilterName?: string;
```

##### VocabularyFilterNames?

```ts
optional VocabularyFilterNames?: string;
```

##### VocabularyName?

```ts
optional VocabularyName?: string;
```

##### VocabularyNames?

```ts
optional VocabularyNames?: string;
```

***

### AwsSpeechFullApiSchemaStartTranscriptionJobResponse

```ts
type AwsSpeechFullApiSchemaStartTranscriptionJobResponse = {
  TranscriptionJob?: AwsSpeechFullApiSchemaTranscriptionJob;
};
```

#### Properties

##### TranscriptionJob?

```ts
optional TranscriptionJob?: AwsSpeechFullApiSchemaTranscriptionJob;
```

***

### AwsSpeechFullApiSchemaStreamClosedEvent

```ts
type AwsSpeechFullApiSchemaStreamClosedEvent = {
  RequestCharacters?: number;
};
```

#### Properties

##### RequestCharacters?

```ts
optional RequestCharacters?: number;
```

***

### AwsSpeechFullApiSchemaStringList

```ts
type AwsSpeechFullApiSchemaStringList = ReadonlyArray<string>;
```

***

### AwsSpeechFullApiSchemaStringTargetList

```ts
type AwsSpeechFullApiSchemaStringTargetList = ReadonlyArray<string>;
```

***

### AwsSpeechFullApiSchemaSubtitleFileUris

```ts
type AwsSpeechFullApiSchemaSubtitleFileUris = ReadonlyArray<string>;
```

***

### AwsSpeechFullApiSchemaSubtitleFormat

```ts
type AwsSpeechFullApiSchemaSubtitleFormat = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaSubtitleFormats

```ts
type AwsSpeechFullApiSchemaSubtitleFormats = ReadonlyArray<AwsSpeechFullApiSchemaSubtitleFormat>;
```

***

### AwsSpeechFullApiSchemaSubtitles

```ts
type AwsSpeechFullApiSchemaSubtitles = {
  Formats?: AwsSpeechFullApiSchemaSubtitleFormats;
  OutputStartIndex?: number;
};
```

#### Properties

##### Formats?

```ts
optional Formats?: AwsSpeechFullApiSchemaSubtitleFormats;
```

##### OutputStartIndex?

```ts
optional OutputStartIndex?: number;
```

***

### AwsSpeechFullApiSchemaSubtitlesOutput

```ts
type AwsSpeechFullApiSchemaSubtitlesOutput = {
  Formats?: AwsSpeechFullApiSchemaSubtitleFormats;
  OutputStartIndex?: number;
  SubtitleFileUris?: AwsSpeechFullApiSchemaSubtitleFileUris;
};
```

#### Properties

##### Formats?

```ts
optional Formats?: AwsSpeechFullApiSchemaSubtitleFormats;
```

##### OutputStartIndex?

```ts
optional OutputStartIndex?: number;
```

##### SubtitleFileUris?

```ts
optional SubtitleFileUris?: AwsSpeechFullApiSchemaSubtitleFileUris;
```

***

### AwsSpeechFullApiSchemaSummarization

```ts
type AwsSpeechFullApiSchemaSummarization = {
  GenerateAbstractiveSummary: boolean;
};
```

#### Properties

##### GenerateAbstractiveSummary

```ts
GenerateAbstractiveSummary: boolean;
```

***

### AwsSpeechFullApiSchemaSynthesisTask

```ts
type AwsSpeechFullApiSchemaSynthesisTask = {
  CreationTime?: string;
  Engine?: AwsSpeechFullApiSchemaEngine;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode;
  LexiconNames?: AwsSpeechFullApiSchemaLexiconNameList;
  OutputFormat?: AwsSpeechFullApiSchemaOutputFormat;
  OutputUri?: string;
  RequestCharacters?: number;
  SampleRate?: string;
  SnsTopicArn?: string;
  SpeechMarkTypes?: AwsSpeechFullApiSchemaSpeechMarkTypeList;
  TaskId?: string;
  TaskStatus?: AwsSpeechFullApiSchemaTaskStatus;
  TaskStatusReason?: string;
  TextType?: AwsSpeechFullApiSchemaTextType;
  VoiceId?: AwsSpeechFullApiSchemaVoiceId;
};
```

#### Properties

##### CreationTime?

```ts
optional CreationTime?: string;
```

##### Engine?

```ts
optional Engine?: AwsSpeechFullApiSchemaEngine;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode;
```

##### LexiconNames?

```ts
optional LexiconNames?: AwsSpeechFullApiSchemaLexiconNameList;
```

##### OutputFormat?

```ts
optional OutputFormat?: AwsSpeechFullApiSchemaOutputFormat;
```

##### OutputUri?

```ts
optional OutputUri?: string;
```

##### RequestCharacters?

```ts
optional RequestCharacters?: number;
```

##### SampleRate?

```ts
optional SampleRate?: string;
```

##### SnsTopicArn?

```ts
optional SnsTopicArn?: string;
```

##### SpeechMarkTypes?

```ts
optional SpeechMarkTypes?: AwsSpeechFullApiSchemaSpeechMarkTypeList;
```

##### TaskId?

```ts
optional TaskId?: string;
```

##### TaskStatus?

```ts
optional TaskStatus?: AwsSpeechFullApiSchemaTaskStatus;
```

##### TaskStatusReason?

```ts
optional TaskStatusReason?: string;
```

##### TextType?

```ts
optional TextType?: AwsSpeechFullApiSchemaTextType;
```

##### VoiceId?

```ts
optional VoiceId?: AwsSpeechFullApiSchemaVoiceId;
```

***

### AwsSpeechFullApiSchemaSynthesisTasks

```ts
type AwsSpeechFullApiSchemaSynthesisTasks = ReadonlyArray<AwsSpeechFullApiSchemaSynthesisTask>;
```

***

### AwsSpeechFullApiSchemaSynthesizeSpeechOutput

```ts
type AwsSpeechFullApiSchemaSynthesizeSpeechOutput = {
  AudioStream?: string;
  ContentType?: string;
  RequestCharacters?: number;
};
```

#### Properties

##### AudioStream?

```ts
optional AudioStream?: string;
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

### AwsSpeechFullApiSchemaTag

```ts
type AwsSpeechFullApiSchemaTag = {
  Key: string;
  Value: string;
};
```

#### Properties

##### Key

```ts
Key: string;
```

##### Value

```ts
Value: string;
```

***

### AwsSpeechFullApiSchemaTagKeyList

```ts
type AwsSpeechFullApiSchemaTagKeyList = ReadonlyArray<string>;
```

***

### AwsSpeechFullApiSchemaTagList

```ts
type AwsSpeechFullApiSchemaTagList = ReadonlyArray<AwsSpeechFullApiSchemaTag>;
```

***

### AwsSpeechFullApiSchemaTagResourceResponse

```ts
type AwsSpeechFullApiSchemaTagResourceResponse = {
};
```

***

### AwsSpeechFullApiSchemaTaskStatus

```ts
type AwsSpeechFullApiSchemaTaskStatus = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaTextEvent

```ts
type AwsSpeechFullApiSchemaTextEvent = {
  FlushStreamConfiguration?: AwsSpeechFullApiSchemaFlushStreamConfiguration;
  Text: string;
  TextType?: AwsSpeechFullApiSchemaTextType;
};
```

#### Properties

##### FlushStreamConfiguration?

```ts
optional FlushStreamConfiguration?: AwsSpeechFullApiSchemaFlushStreamConfiguration;
```

##### Text

```ts
Text: string;
```

##### TextType?

```ts
optional TextType?: AwsSpeechFullApiSchemaTextType;
```

***

### AwsSpeechFullApiSchemaTextType

```ts
type AwsSpeechFullApiSchemaTextType = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaThrottlingException

```ts
type AwsSpeechFullApiSchemaThrottlingException = {
  message?: string;
  throttlingReasons?: AwsSpeechFullApiSchemaThrottlingReasonList;
};
```

#### Properties

##### message?

```ts
optional message?: string;
```

##### throttlingReasons?

```ts
optional throttlingReasons?: AwsSpeechFullApiSchemaThrottlingReasonList;
```

***

### AwsSpeechFullApiSchemaThrottlingReason

```ts
type AwsSpeechFullApiSchemaThrottlingReason = {
  reason?: string;
  resource?: string;
};
```

#### Properties

##### reason?

```ts
optional reason?: string;
```

##### resource?

```ts
optional resource?: string;
```

***

### AwsSpeechFullApiSchemaThrottlingReasonList

```ts
type AwsSpeechFullApiSchemaThrottlingReasonList = ReadonlyArray<AwsSpeechFullApiSchemaThrottlingReason>;
```

***

### AwsSpeechFullApiSchemaTimestampRange

```ts
type AwsSpeechFullApiSchemaTimestampRange = {
  BeginOffsetMillis?: number;
  EndOffsetMillis?: number;
};
```

#### Properties

##### BeginOffsetMillis?

```ts
optional BeginOffsetMillis?: number;
```

##### EndOffsetMillis?

```ts
optional EndOffsetMillis?: number;
```

***

### AwsSpeechFullApiSchemaTimestampRanges

```ts
type AwsSpeechFullApiSchemaTimestampRanges = ReadonlyArray<AwsSpeechFullApiSchemaTimestampRange>;
```

***

### AwsSpeechFullApiSchemaToxicityCategories

```ts
type AwsSpeechFullApiSchemaToxicityCategories = ReadonlyArray<AwsSpeechFullApiSchemaToxicityCategory>;
```

***

### AwsSpeechFullApiSchemaToxicityCategory

```ts
type AwsSpeechFullApiSchemaToxicityCategory = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaToxicityDetection

```ts
type AwsSpeechFullApiSchemaToxicityDetection = ReadonlyArray<AwsSpeechFullApiSchemaToxicityDetectionSettings>;
```

***

### AwsSpeechFullApiSchemaToxicityDetectionSettings

```ts
type AwsSpeechFullApiSchemaToxicityDetectionSettings = {
  ToxicityCategories: AwsSpeechFullApiSchemaToxicityCategories;
};
```

#### Properties

##### ToxicityCategories

```ts
ToxicityCategories: AwsSpeechFullApiSchemaToxicityCategories;
```

***

### AwsSpeechFullApiSchemaTranscript

```ts
type AwsSpeechFullApiSchemaTranscript = {
  RedactedTranscriptFileUri?: string;
  TranscriptFileUri?: string;
};
```

#### Properties

##### RedactedTranscriptFileUri?

```ts
optional RedactedTranscriptFileUri?: string;
```

##### TranscriptFileUri?

```ts
optional TranscriptFileUri?: string;
```

***

### AwsSpeechFullApiSchemaTranscript2

```ts
type AwsSpeechFullApiSchemaTranscript2 = {
  Results?: AwsSpeechFullApiSchemaResultList;
};
```

#### Properties

##### Results?

```ts
optional Results?: AwsSpeechFullApiSchemaResultList;
```

***

### AwsSpeechFullApiSchemaTranscriptEvent

```ts
type AwsSpeechFullApiSchemaTranscriptEvent = {
  Transcript?: AwsSpeechFullApiSchemaTranscript2;
};
```

#### Properties

##### Transcript?

```ts
optional Transcript?: AwsSpeechFullApiSchemaTranscript2;
```

***

### AwsSpeechFullApiSchemaTranscriptFilter

```ts
type AwsSpeechFullApiSchemaTranscriptFilter = {
  AbsoluteTimeRange?: AwsSpeechFullApiSchemaAbsoluteTimeRange;
  Negate?: boolean;
  ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole;
  RelativeTimeRange?: AwsSpeechFullApiSchemaRelativeTimeRange;
  Targets: AwsSpeechFullApiSchemaStringTargetList;
  TranscriptFilterType: AwsSpeechFullApiSchemaTranscriptFilterType;
};
```

#### Properties

##### AbsoluteTimeRange?

```ts
optional AbsoluteTimeRange?: AwsSpeechFullApiSchemaAbsoluteTimeRange;
```

##### Negate?

```ts
optional Negate?: boolean;
```

##### ParticipantRole?

```ts
optional ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole;
```

##### RelativeTimeRange?

```ts
optional RelativeTimeRange?: AwsSpeechFullApiSchemaRelativeTimeRange;
```

##### Targets

```ts
Targets: AwsSpeechFullApiSchemaStringTargetList;
```

##### TranscriptFilterType

```ts
TranscriptFilterType: AwsSpeechFullApiSchemaTranscriptFilterType;
```

***

### AwsSpeechFullApiSchemaTranscriptFilterType

```ts
type AwsSpeechFullApiSchemaTranscriptFilterType = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaTranscriptionJob

```ts
type AwsSpeechFullApiSchemaTranscriptionJob = {
  CompletionTime?: string;
  ContentRedaction?: AwsSpeechFullApiSchemaContentRedaction;
  CreationTime?: string;
  FailureReason?: string;
  IdentifiedLanguageScore?: number;
  IdentifyLanguage?: boolean;
  IdentifyMultipleLanguages?: boolean;
  JobExecutionSettings?: AwsSpeechFullApiSchemaJobExecutionSettings;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LanguageCodes?: AwsSpeechFullApiSchemaLanguageCodeList;
  LanguageIdSettings?: AwsSpeechFullApiSchemaLanguageIdSettingsMap;
  LanguageOptions?: AwsSpeechFullApiSchemaLanguageOptions;
  Media?: AwsSpeechFullApiSchemaMedia;
  MediaFormat?: AwsSpeechFullApiSchemaMediaFormat;
  MediaSampleRateHertz?: number;
  ModelSettings?: AwsSpeechFullApiSchemaModelSettings;
  Settings?: AwsSpeechFullApiSchemaSettings;
  StartTime?: string;
  Subtitles?: AwsSpeechFullApiSchemaSubtitlesOutput;
  Tags?: AwsSpeechFullApiSchemaTagList;
  ToxicityDetection?: AwsSpeechFullApiSchemaToxicityDetection;
  Transcript?: AwsSpeechFullApiSchemaTranscript;
  TranscriptionJobName?: string;
  TranscriptionJobStatus?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
};
```

#### Properties

##### CompletionTime?

```ts
optional CompletionTime?: string;
```

##### ContentRedaction?

```ts
optional ContentRedaction?: AwsSpeechFullApiSchemaContentRedaction;
```

##### CreationTime?

```ts
optional CreationTime?: string;
```

##### FailureReason?

```ts
optional FailureReason?: string;
```

##### IdentifiedLanguageScore?

```ts
optional IdentifiedLanguageScore?: number;
```

##### IdentifyLanguage?

```ts
optional IdentifyLanguage?: boolean;
```

##### IdentifyMultipleLanguages?

```ts
optional IdentifyMultipleLanguages?: boolean;
```

##### JobExecutionSettings?

```ts
optional JobExecutionSettings?: AwsSpeechFullApiSchemaJobExecutionSettings;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### LanguageCodes?

```ts
optional LanguageCodes?: AwsSpeechFullApiSchemaLanguageCodeList;
```

##### LanguageIdSettings?

```ts
optional LanguageIdSettings?: AwsSpeechFullApiSchemaLanguageIdSettingsMap;
```

##### LanguageOptions?

```ts
optional LanguageOptions?: AwsSpeechFullApiSchemaLanguageOptions;
```

##### Media?

```ts
optional Media?: AwsSpeechFullApiSchemaMedia;
```

##### MediaFormat?

```ts
optional MediaFormat?: AwsSpeechFullApiSchemaMediaFormat;
```

##### MediaSampleRateHertz?

```ts
optional MediaSampleRateHertz?: number;
```

##### ModelSettings?

```ts
optional ModelSettings?: AwsSpeechFullApiSchemaModelSettings;
```

##### Settings?

```ts
optional Settings?: AwsSpeechFullApiSchemaSettings;
```

##### StartTime?

```ts
optional StartTime?: string;
```

##### Subtitles?

```ts
optional Subtitles?: AwsSpeechFullApiSchemaSubtitlesOutput;
```

##### Tags?

```ts
optional Tags?: AwsSpeechFullApiSchemaTagList;
```

##### ToxicityDetection?

```ts
optional ToxicityDetection?: AwsSpeechFullApiSchemaToxicityDetection;
```

##### Transcript?

```ts
optional Transcript?: AwsSpeechFullApiSchemaTranscript;
```

##### TranscriptionJobName?

```ts
optional TranscriptionJobName?: string;
```

##### TranscriptionJobStatus?

```ts
optional TranscriptionJobStatus?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
```

***

### AwsSpeechFullApiSchemaTranscriptionJobStatus

```ts
type AwsSpeechFullApiSchemaTranscriptionJobStatus = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaTranscriptionJobSummaries

```ts
type AwsSpeechFullApiSchemaTranscriptionJobSummaries = ReadonlyArray<AwsSpeechFullApiSchemaTranscriptionJobSummary>;
```

***

### AwsSpeechFullApiSchemaTranscriptionJobSummary

```ts
type AwsSpeechFullApiSchemaTranscriptionJobSummary = {
  CompletionTime?: string;
  ContentRedaction?: AwsSpeechFullApiSchemaContentRedaction;
  CreationTime?: string;
  FailureReason?: string;
  IdentifiedLanguageScore?: number;
  IdentifyLanguage?: boolean;
  IdentifyMultipleLanguages?: boolean;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LanguageCodes?: AwsSpeechFullApiSchemaLanguageCodeList;
  ModelSettings?: AwsSpeechFullApiSchemaModelSettings;
  OutputLocationType?: AwsSpeechFullApiSchemaOutputLocationType;
  StartTime?: string;
  ToxicityDetection?: AwsSpeechFullApiSchemaToxicityDetection;
  TranscriptionJobName?: string;
  TranscriptionJobStatus?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
};
```

#### Properties

##### CompletionTime?

```ts
optional CompletionTime?: string;
```

##### ContentRedaction?

```ts
optional ContentRedaction?: AwsSpeechFullApiSchemaContentRedaction;
```

##### CreationTime?

```ts
optional CreationTime?: string;
```

##### FailureReason?

```ts
optional FailureReason?: string;
```

##### IdentifiedLanguageScore?

```ts
optional IdentifiedLanguageScore?: number;
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
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### LanguageCodes?

```ts
optional LanguageCodes?: AwsSpeechFullApiSchemaLanguageCodeList;
```

##### ModelSettings?

```ts
optional ModelSettings?: AwsSpeechFullApiSchemaModelSettings;
```

##### OutputLocationType?

```ts
optional OutputLocationType?: AwsSpeechFullApiSchemaOutputLocationType;
```

##### StartTime?

```ts
optional StartTime?: string;
```

##### ToxicityDetection?

```ts
optional ToxicityDetection?: AwsSpeechFullApiSchemaToxicityDetection;
```

##### TranscriptionJobName?

```ts
optional TranscriptionJobName?: string;
```

##### TranscriptionJobStatus?

```ts
optional TranscriptionJobStatus?: AwsSpeechFullApiSchemaTranscriptionJobStatus;
```

***

### AwsSpeechFullApiSchemaTranscriptResultStream

```ts
type AwsSpeechFullApiSchemaTranscriptResultStream =
  | {
  TranscriptEvent: AwsSpeechFullApiSchemaTranscriptEvent;
}
  | {
  BadRequestException: AwsSpeechFullApiSchemaBadRequestException;
}
  | {
  LimitExceededException: AwsSpeechFullApiSchemaLimitExceededException;
}
  | {
  InternalFailureException: AwsSpeechFullApiSchemaInternalFailureException;
}
  | {
  ConflictException: AwsSpeechFullApiSchemaConflictException;
}
  | {
  ServiceUnavailableException: AwsSpeechFullApiSchemaServiceUnavailableException;
};
```

***

### AwsSpeechFullApiSchemaType

```ts
type AwsSpeechFullApiSchemaType = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaType2

```ts
type AwsSpeechFullApiSchemaType2 = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaUntagResourceResponse

```ts
type AwsSpeechFullApiSchemaUntagResourceResponse = {
};
```

***

### AwsSpeechFullApiSchemaUpdateCallAnalyticsCategoryResponse

```ts
type AwsSpeechFullApiSchemaUpdateCallAnalyticsCategoryResponse = {
  CategoryProperties?: AwsSpeechFullApiSchemaCategoryProperties;
};
```

#### Properties

##### CategoryProperties?

```ts
optional CategoryProperties?: AwsSpeechFullApiSchemaCategoryProperties;
```

***

### AwsSpeechFullApiSchemaUpdateMedicalVocabularyResponse

```ts
type AwsSpeechFullApiSchemaUpdateMedicalVocabularyResponse = {
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  VocabularyName?: string;
  VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
};
```

#### Properties

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### LastModifiedTime?

```ts
optional LastModifiedTime?: string;
```

##### VocabularyName?

```ts
optional VocabularyName?: string;
```

##### VocabularyState?

```ts
optional VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
```

***

### AwsSpeechFullApiSchemaUpdateVocabularyFilterResponse

```ts
type AwsSpeechFullApiSchemaUpdateVocabularyFilterResponse = {
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  VocabularyFilterName?: string;
};
```

#### Properties

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### LastModifiedTime?

```ts
optional LastModifiedTime?: string;
```

##### VocabularyFilterName?

```ts
optional VocabularyFilterName?: string;
```

***

### AwsSpeechFullApiSchemaUpdateVocabularyResponse

```ts
type AwsSpeechFullApiSchemaUpdateVocabularyResponse = {
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  VocabularyName?: string;
  VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
};
```

#### Properties

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### LastModifiedTime?

```ts
optional LastModifiedTime?: string;
```

##### VocabularyName?

```ts
optional VocabularyName?: string;
```

##### VocabularyState?

```ts
optional VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
```

***

### AwsSpeechFullApiSchemaUtteranceEvent

```ts
type AwsSpeechFullApiSchemaUtteranceEvent = {
  BeginOffsetMillis?: number;
  EndOffsetMillis?: number;
  Entities?: AwsSpeechFullApiSchemaCallAnalyticsEntityList;
  IsPartial?: boolean;
  IssuesDetected?: AwsSpeechFullApiSchemaIssuesDetected;
  Items?: AwsSpeechFullApiSchemaCallAnalyticsItemList;
  LanguageCode?: AwsSpeechFullApiSchemaCallAnalyticsLanguageCode;
  LanguageIdentification?: AwsSpeechFullApiSchemaCallAnalyticsLanguageIdentification;
  ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole2;
  Sentiment?: AwsSpeechFullApiSchemaSentiment;
  Transcript?: string;
  UtteranceId?: string;
};
```

#### Properties

##### BeginOffsetMillis?

```ts
optional BeginOffsetMillis?: number;
```

##### EndOffsetMillis?

```ts
optional EndOffsetMillis?: number;
```

##### Entities?

```ts
optional Entities?: AwsSpeechFullApiSchemaCallAnalyticsEntityList;
```

##### IsPartial?

```ts
optional IsPartial?: boolean;
```

##### IssuesDetected?

```ts
optional IssuesDetected?: AwsSpeechFullApiSchemaIssuesDetected;
```

##### Items?

```ts
optional Items?: AwsSpeechFullApiSchemaCallAnalyticsItemList;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaCallAnalyticsLanguageCode;
```

##### LanguageIdentification?

```ts
optional LanguageIdentification?: AwsSpeechFullApiSchemaCallAnalyticsLanguageIdentification;
```

##### ParticipantRole?

```ts
optional ParticipantRole?: AwsSpeechFullApiSchemaParticipantRole2;
```

##### Sentiment?

```ts
optional Sentiment?: AwsSpeechFullApiSchemaSentiment;
```

##### Transcript?

```ts
optional Transcript?: string;
```

##### UtteranceId?

```ts
optional UtteranceId?: string;
```

***

### AwsSpeechFullApiSchemaValidationException

```ts
type AwsSpeechFullApiSchemaValidationException = {
  fields?: AwsSpeechFullApiSchemaValidationExceptionFieldList;
  message: string;
  reason: AwsSpeechFullApiSchemaValidationExceptionReason;
};
```

#### Properties

##### fields?

```ts
optional fields?: AwsSpeechFullApiSchemaValidationExceptionFieldList;
```

##### message

```ts
message: string;
```

##### reason

```ts
reason: AwsSpeechFullApiSchemaValidationExceptionReason;
```

***

### AwsSpeechFullApiSchemaValidationExceptionField

```ts
type AwsSpeechFullApiSchemaValidationExceptionField = {
  message: string;
  name: string;
};
```

#### Properties

##### message

```ts
message: string;
```

##### name

```ts
name: string;
```

***

### AwsSpeechFullApiSchemaValidationExceptionFieldList

```ts
type AwsSpeechFullApiSchemaValidationExceptionFieldList = ReadonlyArray<AwsSpeechFullApiSchemaValidationExceptionField>;
```

***

### AwsSpeechFullApiSchemaValidationExceptionReason

```ts
type AwsSpeechFullApiSchemaValidationExceptionReason = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaVocabularies

```ts
type AwsSpeechFullApiSchemaVocabularies = ReadonlyArray<AwsSpeechFullApiSchemaVocabularyInfo>;
```

***

### AwsSpeechFullApiSchemaVocabularyFilterInfo

```ts
type AwsSpeechFullApiSchemaVocabularyFilterInfo = {
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  VocabularyFilterName?: string;
};
```

#### Properties

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### LastModifiedTime?

```ts
optional LastModifiedTime?: string;
```

##### VocabularyFilterName?

```ts
optional VocabularyFilterName?: string;
```

***

### AwsSpeechFullApiSchemaVocabularyFilterMethod

```ts
type AwsSpeechFullApiSchemaVocabularyFilterMethod = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaVocabularyFilterMethod2

```ts
type AwsSpeechFullApiSchemaVocabularyFilterMethod2 = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaVocabularyFilters

```ts
type AwsSpeechFullApiSchemaVocabularyFilters = ReadonlyArray<AwsSpeechFullApiSchemaVocabularyFilterInfo>;
```

***

### AwsSpeechFullApiSchemaVocabularyInfo

```ts
type AwsSpeechFullApiSchemaVocabularyInfo = {
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
  LastModifiedTime?: string;
  VocabularyName?: string;
  VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
};
```

#### Properties

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode2;
```

##### LastModifiedTime?

```ts
optional LastModifiedTime?: string;
```

##### VocabularyName?

```ts
optional VocabularyName?: string;
```

##### VocabularyState?

```ts
optional VocabularyState?: AwsSpeechFullApiSchemaVocabularyState;
```

***

### AwsSpeechFullApiSchemaVocabularyState

```ts
type AwsSpeechFullApiSchemaVocabularyState = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaVoice

```ts
type AwsSpeechFullApiSchemaVoice = {
  AdditionalLanguageCodes?: AwsSpeechFullApiSchemaLanguageCodeList2;
  Gender?: AwsSpeechFullApiSchemaGender;
  Id?: AwsSpeechFullApiSchemaVoiceId;
  LanguageCode?: AwsSpeechFullApiSchemaLanguageCode;
  LanguageName?: string;
  Name?: string;
  SupportedEngines?: AwsSpeechFullApiSchemaEngineList;
};
```

#### Properties

##### AdditionalLanguageCodes?

```ts
optional AdditionalLanguageCodes?: AwsSpeechFullApiSchemaLanguageCodeList2;
```

##### Gender?

```ts
optional Gender?: AwsSpeechFullApiSchemaGender;
```

##### Id?

```ts
optional Id?: AwsSpeechFullApiSchemaVoiceId;
```

##### LanguageCode?

```ts
optional LanguageCode?: AwsSpeechFullApiSchemaLanguageCode;
```

##### LanguageName?

```ts
optional LanguageName?: string;
```

##### Name?

```ts
optional Name?: string;
```

##### SupportedEngines?

```ts
optional SupportedEngines?: AwsSpeechFullApiSchemaEngineList;
```

***

### AwsSpeechFullApiSchemaVoiceId

```ts
type AwsSpeechFullApiSchemaVoiceId = AwsSpeechFullApiSchemaJsonValue;
```

***

### AwsSpeechFullApiSchemaVoiceList

```ts
type AwsSpeechFullApiSchemaVoiceList = ReadonlyArray<AwsSpeechFullApiSchemaVoice>;
```

***

### AwsSpeechFullApiSchemaWords

```ts
type AwsSpeechFullApiSchemaWords = ReadonlyArray<string>;
```

***

### AwsSpeechGeneratedOperationCaller

```ts
type AwsSpeechGeneratedOperationCaller = <OperationKey>(operationKey, ...args) => Promise<AwsSpeechFullApiOperationResponseMap[OperationKey]>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `OperationKey` *extends* `AwsSpeechFullApiOperationKey` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `operationKey` | `OperationKey` |
| ...`args` | `AwsSpeechFullApiOperationArgs`\<`OperationKey`\> |

#### Returns

`Promise`\<[`AwsSpeechFullApiOperationResponseMap`](#awsspeechfullapioperationresponsemap)\[`OperationKey`\]\>

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

### AWS\_SPEECH\_FULL\_API\_GENERATED\_AT

```ts
const AWS_SPEECH_FULL_API_GENERATED_AT: "2026-06-18";
```

***

### AWS\_SPEECH\_FULL\_API\_GENERATED\_FUNCTION\_COUNT

```ts
const AWS_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT: 58;
```

***

### AWS\_SPEECH\_FULL\_API\_GENERATED\_FUNCTION\_NAMES

```ts
const AWS_SPEECH_FULL_API_GENERATED_FUNCTION_NAMES: readonly ["TranscribeStreamingStartCallAnalyticsStreamTranscription", "TranscribeCreateCallAnalyticsCategory", "TranscribeDeleteCallAnalyticsCategory", "TranscribeGetCallAnalyticsCategory", "TranscribeListCallAnalyticsCategories", "TranscribeUpdateCallAnalyticsCategory", "TranscribeDeleteCallAnalyticsJob", "TranscribeGetCallAnalyticsJob", "TranscribeListCallAnalyticsJobs", "TranscribeStartCallAnalyticsJob", "TranscribeCreateLanguageModel", "TranscribeDeleteLanguageModel", "TranscribeDescribeLanguageModel", "TranscribeListLanguageModels", "TranscribeStreamingGetMedicalScribeStream", "TranscribeStreamingStartMedicalScribeStream", "TranscribeStreamingStartMedicalStreamTranscription", "TranscribeDeleteMedicalScribeJob", "TranscribeGetMedicalScribeJob", "TranscribeListMedicalScribeJobs", "TranscribeStartMedicalScribeJob", "TranscribeDeleteMedicalTranscriptionJob", "TranscribeGetMedicalTranscriptionJob", "TranscribeListMedicalTranscriptionJobs", "TranscribeStartMedicalTranscriptionJob", "TranscribeCreateMedicalVocabulary", "TranscribeDeleteMedicalVocabulary", "TranscribeGetMedicalVocabulary", "TranscribeListMedicalVocabularies", "TranscribeUpdateMedicalVocabulary", "TranscribeStreamingStartStreamTranscription", "TranscribeListTagsForResource", "TranscribeTagResource", "TranscribeUntagResource", "TranscribeDeleteTranscriptionJob", "TranscribeGetTranscriptionJob", "TranscribeListTranscriptionJobs", "TranscribeStartTranscriptionJob", "PollyDeleteLexicon", "PollyDescribeVoices", "PollyGetLexicon", "PollyGetSpeechSynthesisTask", "PollyListLexicons", "PollyListSpeechSynthesisTasks", "PollyPutLexicon", "PollyStartSpeechSynthesisStream", "PollyStartSpeechSynthesisTask", "PollySynthesizeSpeech", "TranscribeCreateVocabulary", "TranscribeDeleteVocabulary", "TranscribeGetVocabulary", "TranscribeListVocabularies", "TranscribeUpdateVocabulary", "TranscribeCreateVocabularyFilter", "TranscribeDeleteVocabularyFilter", "TranscribeGetVocabularyFilter", "TranscribeListVocabularyFilters", "TranscribeUpdateVocabularyFilter"];
```

***

### AWS\_SPEECH\_FULL\_API\_OPERATION\_BY\_ID

```ts
const AWS_SPEECH_FULL_API_OPERATION_BY_ID: Map<string, AwsSpeechFullApiOperation>;
```

***

### AWS\_SPEECH\_FULL\_API\_OPERATION\_BY\_OPERATION\_ID

```ts
const AWS_SPEECH_FULL_API_OPERATION_BY_OPERATION_ID: Map<string, AwsSpeechFullApiOperation>;
```

***

### AWS\_SPEECH\_FULL\_API\_OPERATION\_BY\_UID

```ts
const AWS_SPEECH_FULL_API_OPERATION_BY_UID: Map<string, AwsSpeechFullApiOperation>;
```

***

### AWS\_SPEECH\_FULL\_API\_OPERATION\_COUNT

```ts
const AWS_SPEECH_FULL_API_OPERATION_COUNT: 58;
```

***

### AWS\_SPEECH\_FULL\_API\_OPERATIONS

```ts
const AWS_SPEECH_FULL_API_OPERATIONS: readonly AwsSpeechFullApiOperation[];
```

***

### AWS\_SPEECH\_FULL\_API\_SPEC

```ts
const AWS_SPEECH_FULL_API_SPEC: {
  branch: string;
  modelCount: number;
  models: readonly {
     apiVersion: string;
     docsUrl: string;
     modelPath: string;
     operationCount: number;
     protocol: string;
     sdkId: string;
     serviceKey: string;
  }[];
  operationCount: number;
  repository: string;
  source: string;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-branch"></a> `branch` | `string` |
| <a id="property-modelcount"></a> `modelCount` | `number` |
| <a id="property-models"></a> `models` | readonly \{ `apiVersion`: `string`; `docsUrl`: `string`; `modelPath`: `string`; `operationCount`: `number`; `protocol`: `string`; `sdkId`: `string`; `serviceKey`: `string`; \}[] |
| <a id="property-operationcount"></a> `operationCount` | `number` |
| <a id="property-repository"></a> `repository` | `string` |
| <a id="property-source"></a> `source` | `string` |

***

### AWS\_SPEECH\_FULL\_API\_SPEC\_SOURCE

```ts
const AWS_SPEECH_FULL_API_SPEC_SOURCE: "https://github.com/aws/api-models-aws/tree/main/models";
```

***

### AWS\_SPEECH\_FULL\_API\_SPEC\_VERSION

```ts
const AWS_SPEECH_FULL_API_SPEC_VERSION: "aws-api-models-main-2026-06-18";
```

***

### awsSpeechProviderManifest

```ts
const awsSpeechProviderManifest: {
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
     | "bidirectional"
     | "receive-only"
     | "send-only"
     | "inbound-only"
    | "outbound-only")[];
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
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-capabilities"></a> `capabilities` | \{ `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension?`: `boolean`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| <a id="property-category"></a> `category` | `string` |
| <a id="property-channelaudiences"></a> `channelAudiences` | (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[] |
| <a id="property-coverage"></a> `coverage` | \{ `evidence`: \{ `label`: `string`; `url?`: `string`; \}[]; `notes`: `string`[]; `scope`: \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"`; \} |
| `coverage.evidence` | \{ `label`: `string`; `url?`: `string`; \}[] |
| `coverage.notes` | `string`[] |
| `coverage.scope` | \| `"support-workflow-subset"` \| `"provider-api-subset"` \| `"connector-required"` \| `"local-protocol"` \| `"full-provider-api"` |
| <a id="property-credentialrequirements"></a> `credentialRequirements` | \{ `description?`: `string`; `id`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `required`: `boolean`; `scopes`: `string`[]; \}[] |
| <a id="property-directions"></a> `directions` | ( \| `"bidirectional"` \| `"receive-only"` \| `"send-only"` \| `"inbound-only"` \| `"outbound-only"`)[] |
| <a id="property-id"></a> `id` | `string` |
| <a id="property-limitations"></a> `limitations` | `string`[] |
| <a id="property-maintainers"></a> `maintainers` | \{ `name`: `string`; `type`: `"community"` \| `"official"` \| `"unknown"` \| `"partner"`; `url?`: `string`; \}[] |
| <a id="property-metadata"></a> `metadata?` | `Record`\<`string`, `unknown`\> |
| <a id="property-name"></a> `name` | `string` |
| <a id="property-operations"></a> `operations` | \{ `alias`: `string`; `audience?`: `"customer-facing"` \| `"internal-support"` \| `"mixed"`; `audiences?`: (`"customer-facing"` \| `"internal-support"` \| `"mixed"`)[]; `capability`: `string`; `changesWorkflow?`: `boolean`; `description?`: `string`; `exposesSensitiveData?`: `boolean`; `extension`: `boolean`; `externallyVisible?`: `boolean`; `inputSchema?`: `unknown`; `inputSchemaName?`: `string`; `inputSchemaRef?`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `outputSchema?`: `unknown`; `outputSchemaName?`: `string`; `outputSchemaRef?`: `string`; `providerObject?`: `string`; `providerObjects?`: \{ `description?`: `string`; `kind`: `string`; `label?`: `string`; `metadata?`: `Record`\<`string`, `unknown`\>; `schemaName?`: `string`; \}[]; `providerOperation?`: `string`; `requiredPolicyIds?`: `string`[]; `requiresApproval?`: `boolean`; `requiresCredential?`: `boolean`; `sideEffect?`: `boolean`; \}[] |
| <a id="property-packagename"></a> `packageName` | `string` |
| <a id="property-privacynotes"></a> `privacyNotes` | `string`[] |
| <a id="property-provider"></a> `provider` | `string` |
| <a id="property-trustlevel"></a> `trustLevel` | `"community"` \| `"official"` \| `"verified"` \| `"experimental"` |

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

### createAwsSpeechFullApiGeneratedClient()

```ts
function createAwsSpeechFullApiGeneratedClient(callOperation): AwsSpeechFullApiGeneratedClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callOperation` | [`AwsSpeechGeneratedOperationCaller`](#awsspeechgeneratedoperationcaller) |

#### Returns

[`AwsSpeechFullApiGeneratedClient`](#awsspeechfullapigeneratedclient)

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

[`VoiceProvider`](../../../voice-websocket/dist.md#voiceprovider)
