# integrations/dist/voice/google-speech

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

##### getAccessToken?

```ts
optional getAccessToken?: GoogleSpeechAccessTokenProvider;
```

##### quotaProjectId?

```ts
optional quotaProjectId?: string;
```

##### speechToTextEndpoint?

```ts
optional speechToTextEndpoint?: string;
```

##### textToSpeechEndpoint?

```ts
optional textToSpeechEndpoint?: string;
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

### GoogleSpeechFullApiGeneratedClient

#### Methods

##### SpeechOperationsGet()

```ts
SpeechOperationsGet(...args): Promise<GoogleSpeechFullApiSchemaOperation>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"speech.operations.get"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaOperation`](#googlespeechfullapischemaoperation)\>

##### SpeechOperationsList()

```ts
SpeechOperationsList(...args): Promise<GoogleSpeechFullApiSchemaListOperationsResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"speech.operations.list"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaListOperationsResponse`](#googlespeechfullapischemalistoperationsresponse)\>

##### SpeechProjectsLocationsCustomClassesCreate()

```ts
SpeechProjectsLocationsCustomClassesCreate(...args): Promise<GoogleSpeechFullApiSchemaCustomClass>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"speech.projects.locations.customClasses.create"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaCustomClass`](#googlespeechfullapischemacustomclass)\>

##### SpeechProjectsLocationsCustomClassesDelete()

```ts
SpeechProjectsLocationsCustomClassesDelete(...args): Promise<GoogleSpeechFullApiSchemaEmpty>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"speech.projects.locations.customClasses.delete"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaEmpty`](#googlespeechfullapischemaempty)\>

##### SpeechProjectsLocationsCustomClassesGet()

```ts
SpeechProjectsLocationsCustomClassesGet(...args): Promise<GoogleSpeechFullApiSchemaCustomClass>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"speech.projects.locations.customClasses.get"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaCustomClass`](#googlespeechfullapischemacustomclass)\>

##### SpeechProjectsLocationsCustomClassesList()

```ts
SpeechProjectsLocationsCustomClassesList(...args): Promise<GoogleSpeechFullApiSchemaListCustomClassesResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"speech.projects.locations.customClasses.list"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaListCustomClassesResponse`](#googlespeechfullapischemalistcustomclassesresponse)\>

##### SpeechProjectsLocationsCustomClassesPatch()

```ts
SpeechProjectsLocationsCustomClassesPatch(...args): Promise<GoogleSpeechFullApiSchemaCustomClass>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"speech.projects.locations.customClasses.patch"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaCustomClass`](#googlespeechfullapischemacustomclass)\>

##### SpeechProjectsLocationsPhraseSetsCreate()

```ts
SpeechProjectsLocationsPhraseSetsCreate(...args): Promise<GoogleSpeechFullApiSchemaPhraseSet>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"speech.projects.locations.phraseSets.create"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaPhraseSet`](#googlespeechfullapischemaphraseset)\>

##### SpeechProjectsLocationsPhraseSetsDelete()

```ts
SpeechProjectsLocationsPhraseSetsDelete(...args): Promise<GoogleSpeechFullApiSchemaEmpty>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"speech.projects.locations.phraseSets.delete"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaEmpty`](#googlespeechfullapischemaempty)\>

##### SpeechProjectsLocationsPhraseSetsGet()

```ts
SpeechProjectsLocationsPhraseSetsGet(...args): Promise<GoogleSpeechFullApiSchemaPhraseSet>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"speech.projects.locations.phraseSets.get"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaPhraseSet`](#googlespeechfullapischemaphraseset)\>

##### SpeechProjectsLocationsPhraseSetsList()

```ts
SpeechProjectsLocationsPhraseSetsList(...args): Promise<GoogleSpeechFullApiSchemaListPhraseSetResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"speech.projects.locations.phraseSets.list"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaListPhraseSetResponse`](#googlespeechfullapischemalistphrasesetresponse)\>

##### SpeechProjectsLocationsPhraseSetsPatch()

```ts
SpeechProjectsLocationsPhraseSetsPatch(...args): Promise<GoogleSpeechFullApiSchemaPhraseSet>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"speech.projects.locations.phraseSets.patch"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaPhraseSet`](#googlespeechfullapischemaphraseset)\>

##### SpeechSpeechLongrunningrecognize()

```ts
SpeechSpeechLongrunningrecognize(...args): Promise<GoogleSpeechFullApiSchemaOperation>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"speech.speech.longrunningrecognize"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaOperation`](#googlespeechfullapischemaoperation)\>

##### SpeechSpeechRecognize()

```ts
SpeechSpeechRecognize(...args): Promise<GoogleSpeechFullApiSchemaRecognizeResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"speech.speech.recognize"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaRecognizeResponse`](#googlespeechfullapischemarecognizeresponse)\>

##### TexttospeechOperationsCancel()

```ts
TexttospeechOperationsCancel(...args): Promise<GoogleSpeechFullApiSchemaEmpty2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"texttospeech.operations.cancel"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaEmpty2`](#googlespeechfullapischemaempty2)\>

##### TexttospeechOperationsDelete()

```ts
TexttospeechOperationsDelete(...args): Promise<GoogleSpeechFullApiSchemaEmpty2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"texttospeech.operations.delete"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaEmpty2`](#googlespeechfullapischemaempty2)\>

##### TexttospeechProjectsLocationsOperationsGet()

```ts
TexttospeechProjectsLocationsOperationsGet(...args): Promise<GoogleSpeechFullApiSchemaOperation2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"texttospeech.projects.locations.operations.get"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaOperation2`](#googlespeechfullapischemaoperation2)\>

##### TexttospeechProjectsLocationsOperationsList()

```ts
TexttospeechProjectsLocationsOperationsList(...args): Promise<GoogleSpeechFullApiSchemaListOperationsResponse2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"texttospeech.projects.locations.operations.list"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaListOperationsResponse2`](#googlespeechfullapischemalistoperationsresponse2)\>

##### TexttospeechProjectsLocationsSynthesizeLongAudio()

```ts
TexttospeechProjectsLocationsSynthesizeLongAudio(...args): Promise<GoogleSpeechFullApiSchemaOperation2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"texttospeech.projects.locations.synthesizeLongAudio"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaOperation2`](#googlespeechfullapischemaoperation2)\>

##### TexttospeechTextSynthesize()

```ts
TexttospeechTextSynthesize(...args): Promise<GoogleSpeechFullApiSchemaSynthesizeSpeechResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"texttospeech.text.synthesize"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaSynthesizeSpeechResponse`](#googlespeechfullapischemasynthesizespeechresponse)\>

##### TexttospeechVoicesList()

```ts
TexttospeechVoicesList(...args): Promise<GoogleSpeechFullApiSchemaListVoicesResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`GoogleSpeechFullApiOperationInput`\<`"texttospeech.voices.list"`\>\] |

###### Returns

`Promise`\<[`GoogleSpeechFullApiSchemaListVoicesResponse`](#googlespeechfullapischemalistvoicesresponse)\>

***

### GoogleSpeechFullApiOperation

#### Properties

##### description

```ts
description: string;
```

##### docsUrl

```ts
docsUrl: string;
```

##### functionName

```ts
functionName: string;
```

##### id

```ts
id: string;
```

##### method

```ts
method: GoogleSpeechFullApiOperationMethod;
```

##### operationId

```ts
operationId: string;
```

##### path

```ts
path: string;
```

##### sourceUrl

```ts
sourceUrl: string;
```

##### specId

```ts
specId: string;
```

##### specLabel

```ts
specLabel: string;
```

***

### GoogleSpeechFullApiOperationQueryMap

#### Properties

##### speech.operations.get

```ts
speech.operations.get: {
};
```

##### speech.operations.list

```ts
speech.operations.list: {
  filter?: string;
  name?: string;
  pageSize?: number;
  pageToken?: string;
  returnPartialSuccess?: boolean;
};
```

###### filter?

```ts
optional filter?: string;
```

###### name?

```ts
optional name?: string;
```

###### pageSize?

```ts
optional pageSize?: number;
```

###### pageToken?

```ts
optional pageToken?: string;
```

###### returnPartialSuccess?

```ts
optional returnPartialSuccess?: boolean;
```

##### speech.projects.locations.customClasses.create

```ts
speech.projects.locations.customClasses.create: {
};
```

##### speech.projects.locations.customClasses.delete

```ts
speech.projects.locations.customClasses.delete: {
};
```

##### speech.projects.locations.customClasses.get

```ts
speech.projects.locations.customClasses.get: {
};
```

##### speech.projects.locations.customClasses.list

```ts
speech.projects.locations.customClasses.list: {
  pageSize?: number;
  pageToken?: string;
};
```

###### pageSize?

```ts
optional pageSize?: number;
```

###### pageToken?

```ts
optional pageToken?: string;
```

##### speech.projects.locations.customClasses.patch

```ts
speech.projects.locations.customClasses.patch: {
  updateMask?: string;
};
```

###### updateMask?

```ts
optional updateMask?: string;
```

##### speech.projects.locations.phraseSets.create

```ts
speech.projects.locations.phraseSets.create: {
};
```

##### speech.projects.locations.phraseSets.delete

```ts
speech.projects.locations.phraseSets.delete: {
};
```

##### speech.projects.locations.phraseSets.get

```ts
speech.projects.locations.phraseSets.get: {
};
```

##### speech.projects.locations.phraseSets.list

```ts
speech.projects.locations.phraseSets.list: {
  pageSize?: number;
  pageToken?: string;
};
```

###### pageSize?

```ts
optional pageSize?: number;
```

###### pageToken?

```ts
optional pageToken?: string;
```

##### speech.projects.locations.phraseSets.patch

```ts
speech.projects.locations.phraseSets.patch: {
  updateMask?: string;
};
```

###### updateMask?

```ts
optional updateMask?: string;
```

##### speech.speech.longrunningrecognize

```ts
speech.speech.longrunningrecognize: {
};
```

##### speech.speech.recognize

```ts
speech.speech.recognize: {
};
```

##### texttospeech.operations.cancel

```ts
texttospeech.operations.cancel: {
};
```

##### texttospeech.operations.delete

```ts
texttospeech.operations.delete: {
};
```

##### texttospeech.projects.locations.operations.get

```ts
texttospeech.projects.locations.operations.get: {
};
```

##### texttospeech.projects.locations.operations.list

```ts
texttospeech.projects.locations.operations.list: {
  filter?: string;
  pageSize?: number;
  pageToken?: string;
  returnPartialSuccess?: boolean;
};
```

###### filter?

```ts
optional filter?: string;
```

###### pageSize?

```ts
optional pageSize?: number;
```

###### pageToken?

```ts
optional pageToken?: string;
```

###### returnPartialSuccess?

```ts
optional returnPartialSuccess?: boolean;
```

##### texttospeech.projects.locations.synthesizeLongAudio

```ts
texttospeech.projects.locations.synthesizeLongAudio: {
};
```

##### texttospeech.text.synthesize

```ts
texttospeech.text.synthesize: {
};
```

##### texttospeech.voices.list

```ts
texttospeech.voices.list: {
  languageCode?: string;
};
```

###### languageCode?

```ts
optional languageCode?: string;
```

***

### GoogleSpeechFullApiOperationQueryRequiredMap

#### Properties

##### speech.operations.get

```ts
speech.operations.get: false;
```

##### speech.operations.list

```ts
speech.operations.list: false;
```

##### speech.projects.locations.customClasses.create

```ts
speech.projects.locations.customClasses.create: false;
```

##### speech.projects.locations.customClasses.delete

```ts
speech.projects.locations.customClasses.delete: false;
```

##### speech.projects.locations.customClasses.get

```ts
speech.projects.locations.customClasses.get: false;
```

##### speech.projects.locations.customClasses.list

```ts
speech.projects.locations.customClasses.list: false;
```

##### speech.projects.locations.customClasses.patch

```ts
speech.projects.locations.customClasses.patch: false;
```

##### speech.projects.locations.phraseSets.create

```ts
speech.projects.locations.phraseSets.create: false;
```

##### speech.projects.locations.phraseSets.delete

```ts
speech.projects.locations.phraseSets.delete: false;
```

##### speech.projects.locations.phraseSets.get

```ts
speech.projects.locations.phraseSets.get: false;
```

##### speech.projects.locations.phraseSets.list

```ts
speech.projects.locations.phraseSets.list: false;
```

##### speech.projects.locations.phraseSets.patch

```ts
speech.projects.locations.phraseSets.patch: false;
```

##### speech.speech.longrunningrecognize

```ts
speech.speech.longrunningrecognize: false;
```

##### speech.speech.recognize

```ts
speech.speech.recognize: false;
```

##### texttospeech.operations.cancel

```ts
texttospeech.operations.cancel: false;
```

##### texttospeech.operations.delete

```ts
texttospeech.operations.delete: false;
```

##### texttospeech.projects.locations.operations.get

```ts
texttospeech.projects.locations.operations.get: false;
```

##### texttospeech.projects.locations.operations.list

```ts
texttospeech.projects.locations.operations.list: false;
```

##### texttospeech.projects.locations.synthesizeLongAudio

```ts
texttospeech.projects.locations.synthesizeLongAudio: false;
```

##### texttospeech.text.synthesize

```ts
texttospeech.text.synthesize: false;
```

##### texttospeech.voices.list

```ts
texttospeech.voices.list: false;
```

***

### GoogleSpeechFullApiOperationRequestBodyMap

#### Properties

##### speech.operations.get

```ts
speech.operations.get: never;
```

##### speech.operations.list

```ts
speech.operations.list: never;
```

##### speech.projects.locations.customClasses.create

```ts
speech.projects.locations.customClasses.create: GoogleSpeechFullApiSchemaCreateCustomClassRequest;
```

##### speech.projects.locations.customClasses.delete

```ts
speech.projects.locations.customClasses.delete: never;
```

##### speech.projects.locations.customClasses.get

```ts
speech.projects.locations.customClasses.get: never;
```

##### speech.projects.locations.customClasses.list

```ts
speech.projects.locations.customClasses.list: never;
```

##### speech.projects.locations.customClasses.patch

```ts
speech.projects.locations.customClasses.patch: GoogleSpeechFullApiSchemaCustomClass;
```

##### speech.projects.locations.phraseSets.create

```ts
speech.projects.locations.phraseSets.create: GoogleSpeechFullApiSchemaCreatePhraseSetRequest;
```

##### speech.projects.locations.phraseSets.delete

```ts
speech.projects.locations.phraseSets.delete: never;
```

##### speech.projects.locations.phraseSets.get

```ts
speech.projects.locations.phraseSets.get: never;
```

##### speech.projects.locations.phraseSets.list

```ts
speech.projects.locations.phraseSets.list: never;
```

##### speech.projects.locations.phraseSets.patch

```ts
speech.projects.locations.phraseSets.patch: GoogleSpeechFullApiSchemaPhraseSet;
```

##### speech.speech.longrunningrecognize

```ts
speech.speech.longrunningrecognize: GoogleSpeechFullApiSchemaLongRunningRecognizeRequest;
```

##### speech.speech.recognize

```ts
speech.speech.recognize: GoogleSpeechFullApiSchemaRecognizeRequest;
```

##### texttospeech.operations.cancel

```ts
texttospeech.operations.cancel: GoogleSpeechFullApiSchemaCancelOperationRequest;
```

##### texttospeech.operations.delete

```ts
texttospeech.operations.delete: never;
```

##### texttospeech.projects.locations.operations.get

```ts
texttospeech.projects.locations.operations.get: never;
```

##### texttospeech.projects.locations.operations.list

```ts
texttospeech.projects.locations.operations.list: never;
```

##### texttospeech.projects.locations.synthesizeLongAudio

```ts
texttospeech.projects.locations.synthesizeLongAudio: GoogleSpeechFullApiSchemaSynthesizeLongAudioRequest;
```

##### texttospeech.text.synthesize

```ts
texttospeech.text.synthesize: GoogleSpeechFullApiSchemaSynthesizeSpeechRequest;
```

##### texttospeech.voices.list

```ts
texttospeech.voices.list: never;
```

***

### GoogleSpeechFullApiOperationRequestBodyRequiredMap

#### Properties

##### speech.operations.get

```ts
speech.operations.get: false;
```

##### speech.operations.list

```ts
speech.operations.list: false;
```

##### speech.projects.locations.customClasses.create

```ts
speech.projects.locations.customClasses.create: true;
```

##### speech.projects.locations.customClasses.delete

```ts
speech.projects.locations.customClasses.delete: false;
```

##### speech.projects.locations.customClasses.get

```ts
speech.projects.locations.customClasses.get: false;
```

##### speech.projects.locations.customClasses.list

```ts
speech.projects.locations.customClasses.list: false;
```

##### speech.projects.locations.customClasses.patch

```ts
speech.projects.locations.customClasses.patch: true;
```

##### speech.projects.locations.phraseSets.create

```ts
speech.projects.locations.phraseSets.create: true;
```

##### speech.projects.locations.phraseSets.delete

```ts
speech.projects.locations.phraseSets.delete: false;
```

##### speech.projects.locations.phraseSets.get

```ts
speech.projects.locations.phraseSets.get: false;
```

##### speech.projects.locations.phraseSets.list

```ts
speech.projects.locations.phraseSets.list: false;
```

##### speech.projects.locations.phraseSets.patch

```ts
speech.projects.locations.phraseSets.patch: true;
```

##### speech.speech.longrunningrecognize

```ts
speech.speech.longrunningrecognize: true;
```

##### speech.speech.recognize

```ts
speech.speech.recognize: true;
```

##### texttospeech.operations.cancel

```ts
texttospeech.operations.cancel: true;
```

##### texttospeech.operations.delete

```ts
texttospeech.operations.delete: false;
```

##### texttospeech.projects.locations.operations.get

```ts
texttospeech.projects.locations.operations.get: false;
```

##### texttospeech.projects.locations.operations.list

```ts
texttospeech.projects.locations.operations.list: false;
```

##### texttospeech.projects.locations.synthesizeLongAudio

```ts
texttospeech.projects.locations.synthesizeLongAudio: true;
```

##### texttospeech.text.synthesize

```ts
texttospeech.text.synthesize: true;
```

##### texttospeech.voices.list

```ts
texttospeech.voices.list: false;
```

***

### GoogleSpeechFullApiOperationResponseMap

#### Properties

##### speech.operations.get

```ts
speech.operations.get: GoogleSpeechFullApiSchemaOperation;
```

##### speech.operations.list

```ts
speech.operations.list: GoogleSpeechFullApiSchemaListOperationsResponse;
```

##### speech.projects.locations.customClasses.create

```ts
speech.projects.locations.customClasses.create: GoogleSpeechFullApiSchemaCustomClass;
```

##### speech.projects.locations.customClasses.delete

```ts
speech.projects.locations.customClasses.delete: GoogleSpeechFullApiSchemaEmpty;
```

##### speech.projects.locations.customClasses.get

```ts
speech.projects.locations.customClasses.get: GoogleSpeechFullApiSchemaCustomClass;
```

##### speech.projects.locations.customClasses.list

```ts
speech.projects.locations.customClasses.list: GoogleSpeechFullApiSchemaListCustomClassesResponse;
```

##### speech.projects.locations.customClasses.patch

```ts
speech.projects.locations.customClasses.patch: GoogleSpeechFullApiSchemaCustomClass;
```

##### speech.projects.locations.phraseSets.create

```ts
speech.projects.locations.phraseSets.create: GoogleSpeechFullApiSchemaPhraseSet;
```

##### speech.projects.locations.phraseSets.delete

```ts
speech.projects.locations.phraseSets.delete: GoogleSpeechFullApiSchemaEmpty;
```

##### speech.projects.locations.phraseSets.get

```ts
speech.projects.locations.phraseSets.get: GoogleSpeechFullApiSchemaPhraseSet;
```

##### speech.projects.locations.phraseSets.list

```ts
speech.projects.locations.phraseSets.list: GoogleSpeechFullApiSchemaListPhraseSetResponse;
```

##### speech.projects.locations.phraseSets.patch

```ts
speech.projects.locations.phraseSets.patch: GoogleSpeechFullApiSchemaPhraseSet;
```

##### speech.speech.longrunningrecognize

```ts
speech.speech.longrunningrecognize: GoogleSpeechFullApiSchemaOperation;
```

##### speech.speech.recognize

```ts
speech.speech.recognize: GoogleSpeechFullApiSchemaRecognizeResponse;
```

##### texttospeech.operations.cancel

```ts
texttospeech.operations.cancel: GoogleSpeechFullApiSchemaEmpty2;
```

##### texttospeech.operations.delete

```ts
texttospeech.operations.delete: GoogleSpeechFullApiSchemaEmpty2;
```

##### texttospeech.projects.locations.operations.get

```ts
texttospeech.projects.locations.operations.get: GoogleSpeechFullApiSchemaOperation2;
```

##### texttospeech.projects.locations.operations.list

```ts
texttospeech.projects.locations.operations.list: GoogleSpeechFullApiSchemaListOperationsResponse2;
```

##### texttospeech.projects.locations.synthesizeLongAudio

```ts
texttospeech.projects.locations.synthesizeLongAudio: GoogleSpeechFullApiSchemaOperation2;
```

##### texttospeech.text.synthesize

```ts
texttospeech.text.synthesize: GoogleSpeechFullApiSchemaSynthesizeSpeechResponse;
```

##### texttospeech.voices.list

```ts
texttospeech.voices.list: GoogleSpeechFullApiSchemaListVoicesResponse;
```

***

### GoogleSpeechFullApiSpec

#### Properties

##### docsUrl

```ts
docsUrl: string;
```

##### id

```ts
id: string;
```

##### label

```ts
label: string;
```

##### operationCount

```ts
operationCount: number;
```

##### pathCount?

```ts
optional pathCount?: number;
```

##### revision?

```ts
optional revision?: string;
```

##### sourceUrl

```ts
sourceUrl: string;
```

##### swagger?

```ts
optional swagger?: string;
```

##### title?

```ts
optional title?: string;
```

##### version

```ts
version: string;
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

##### speechToTextEndpoint?

```ts
optional speechToTextEndpoint?: string;
```

##### ssmlGender?

```ts
optional ssmlGender?: string;
```

##### stripLinear16WavHeader?

```ts
optional stripLinear16WavHeader?: boolean;
```

##### textToSpeechEndpoint?

```ts
optional textToSpeechEndpoint?: string;
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

### GoogleSpeechFullApiOperationId

```ts
type GoogleSpeechFullApiOperationId = typeof GOOGLE_SPEECH_FULL_API_OPERATION_OPERATION_IDS[number];
```

***

### GoogleSpeechFullApiOperationMethod

```ts
type GoogleSpeechFullApiOperationMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
```

***

### GoogleSpeechFullApiSchemaAdvancedVoiceOptions

```ts
type GoogleSpeechFullApiSchemaAdvancedVoiceOptions = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaAudioConfig

```ts
type GoogleSpeechFullApiSchemaAudioConfig = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaCancelOperationRequest

```ts
type GoogleSpeechFullApiSchemaCancelOperationRequest = {
};
```

***

### GoogleSpeechFullApiSchemaClassItem

```ts
type GoogleSpeechFullApiSchemaClassItem = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaCreateCustomClassRequest

```ts
type GoogleSpeechFullApiSchemaCreateCustomClassRequest = {
  customClass?: GoogleSpeechFullApiSchemaCustomClass2;
  customClassId?: string;
};
```

#### Properties

##### customClass?

```ts
optional customClass?: GoogleSpeechFullApiSchemaCustomClass2;
```

##### customClassId?

```ts
optional customClassId?: string;
```

***

### GoogleSpeechFullApiSchemaCreatePhraseSetRequest

```ts
type GoogleSpeechFullApiSchemaCreatePhraseSetRequest = {
  phraseSet?: GoogleSpeechFullApiSchemaPhraseSet2;
  phraseSetId?: string;
};
```

#### Properties

##### phraseSet?

```ts
optional phraseSet?: GoogleSpeechFullApiSchemaPhraseSet2;
```

##### phraseSetId?

```ts
optional phraseSetId?: string;
```

***

### GoogleSpeechFullApiSchemaCustomClass

```ts
type GoogleSpeechFullApiSchemaCustomClass = {
  annotations?: {
   [key: string]: string;
  };
  customClassId?: string;
  deleteTime?: string;
  displayName?: string;
  etag?: string;
  expireTime?: string;
  items?: ReadonlyArray<GoogleSpeechFullApiSchemaClassItem>;
  kmsKeyName?: string;
  kmsKeyVersionName?: string;
  name?: string;
  reconciling?: boolean;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "DELETED";
  uid?: string;
};
```

#### Properties

##### annotations?

```ts
optional annotations?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### customClassId?

```ts
optional customClassId?: string;
```

##### deleteTime?

```ts
optional deleteTime?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### etag?

```ts
optional etag?: string;
```

##### expireTime?

```ts
optional expireTime?: string;
```

##### items?

```ts
optional items?: ReadonlyArray<GoogleSpeechFullApiSchemaClassItem>;
```

##### kmsKeyName?

```ts
optional kmsKeyName?: string;
```

##### kmsKeyVersionName?

```ts
optional kmsKeyVersionName?: string;
```

##### name?

```ts
optional name?: string;
```

##### reconciling?

```ts
optional reconciling?: boolean;
```

##### state?

```ts
optional state?: "STATE_UNSPECIFIED" | "ACTIVE" | "DELETED";
```

##### uid?

```ts
optional uid?: string;
```

***

### GoogleSpeechFullApiSchemaCustomClass2

```ts
type GoogleSpeechFullApiSchemaCustomClass2 = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaEmpty

```ts
type GoogleSpeechFullApiSchemaEmpty = {
};
```

***

### GoogleSpeechFullApiSchemaEmpty2

```ts
type GoogleSpeechFullApiSchemaEmpty2 = {
};
```

***

### GoogleSpeechFullApiSchemaJsonPrimitive

```ts
type GoogleSpeechFullApiSchemaJsonPrimitive = string | number | boolean | null;
```

***

### GoogleSpeechFullApiSchemaJsonValue

```ts
type GoogleSpeechFullApiSchemaJsonValue =
  | GoogleSpeechFullApiSchemaJsonPrimitive
  | readonly GoogleSpeechFullApiSchemaJsonValue[]
  | {
[key: string]: GoogleSpeechFullApiSchemaJsonValue;
};
```

***

### GoogleSpeechFullApiSchemaListCustomClassesResponse

```ts
type GoogleSpeechFullApiSchemaListCustomClassesResponse = {
  customClasses?: ReadonlyArray<GoogleSpeechFullApiSchemaCustomClass2>;
  nextPageToken?: string;
};
```

#### Properties

##### customClasses?

```ts
optional customClasses?: ReadonlyArray<GoogleSpeechFullApiSchemaCustomClass2>;
```

##### nextPageToken?

```ts
optional nextPageToken?: string;
```

***

### GoogleSpeechFullApiSchemaListOperationsResponse

```ts
type GoogleSpeechFullApiSchemaListOperationsResponse = {
  nextPageToken?: string;
  operations?: ReadonlyArray<GoogleSpeechFullApiSchemaOperation3>;
  unreachable?: ReadonlyArray<string>;
};
```

#### Properties

##### nextPageToken?

```ts
optional nextPageToken?: string;
```

##### operations?

```ts
optional operations?: ReadonlyArray<GoogleSpeechFullApiSchemaOperation3>;
```

##### unreachable?

```ts
optional unreachable?: ReadonlyArray<string>;
```

***

### GoogleSpeechFullApiSchemaListOperationsResponse2

```ts
type GoogleSpeechFullApiSchemaListOperationsResponse2 = {
  nextPageToken?: string;
  operations?: ReadonlyArray<GoogleSpeechFullApiSchemaOperation4>;
  unreachable?: ReadonlyArray<string>;
};
```

#### Properties

##### nextPageToken?

```ts
optional nextPageToken?: string;
```

##### operations?

```ts
optional operations?: ReadonlyArray<GoogleSpeechFullApiSchemaOperation4>;
```

##### unreachable?

```ts
optional unreachable?: ReadonlyArray<string>;
```

***

### GoogleSpeechFullApiSchemaListPhraseSetResponse

```ts
type GoogleSpeechFullApiSchemaListPhraseSetResponse = {
  nextPageToken?: string;
  phraseSets?: ReadonlyArray<GoogleSpeechFullApiSchemaPhraseSet2>;
};
```

#### Properties

##### nextPageToken?

```ts
optional nextPageToken?: string;
```

##### phraseSets?

```ts
optional phraseSets?: ReadonlyArray<GoogleSpeechFullApiSchemaPhraseSet2>;
```

***

### GoogleSpeechFullApiSchemaListVoicesResponse

```ts
type GoogleSpeechFullApiSchemaListVoicesResponse = {
  voices?: ReadonlyArray<GoogleSpeechFullApiSchemaVoice>;
};
```

#### Properties

##### voices?

```ts
optional voices?: ReadonlyArray<GoogleSpeechFullApiSchemaVoice>;
```

***

### GoogleSpeechFullApiSchemaLongRunningRecognizeRequest

```ts
type GoogleSpeechFullApiSchemaLongRunningRecognizeRequest = {
  audio?: GoogleSpeechFullApiSchemaRecognitionAudio;
  config?: GoogleSpeechFullApiSchemaRecognitionConfig;
  outputConfig?: GoogleSpeechFullApiSchemaTranscriptOutputConfig;
};
```

#### Properties

##### audio?

```ts
optional audio?: GoogleSpeechFullApiSchemaRecognitionAudio;
```

##### config?

```ts
optional config?: GoogleSpeechFullApiSchemaRecognitionConfig;
```

##### outputConfig?

```ts
optional outputConfig?: GoogleSpeechFullApiSchemaTranscriptOutputConfig;
```

***

### GoogleSpeechFullApiSchemaOperation

```ts
type GoogleSpeechFullApiSchemaOperation = {
  done?: boolean;
  error?: GoogleSpeechFullApiSchemaStatus;
  metadata?: {
   [key: string]: GoogleSpeechFullApiSchemaJsonValue;
  };
  name?: string;
  response?: {
   [key: string]: GoogleSpeechFullApiSchemaJsonValue;
  };
};
```

#### Properties

##### done?

```ts
optional done?: boolean;
```

##### error?

```ts
optional error?: GoogleSpeechFullApiSchemaStatus;
```

##### metadata?

```ts
optional metadata?: {
[key: string]: GoogleSpeechFullApiSchemaJsonValue;
};
```

###### Index Signature

```ts
[key: string]: GoogleSpeechFullApiSchemaJsonValue
```

##### name?

```ts
optional name?: string;
```

##### response?

```ts
optional response?: {
[key: string]: GoogleSpeechFullApiSchemaJsonValue;
};
```

###### Index Signature

```ts
[key: string]: GoogleSpeechFullApiSchemaJsonValue
```

***

### GoogleSpeechFullApiSchemaOperation2

```ts
type GoogleSpeechFullApiSchemaOperation2 = {
  done?: boolean;
  error?: GoogleSpeechFullApiSchemaStatus2;
  metadata?: {
   [key: string]: GoogleSpeechFullApiSchemaJsonValue;
  };
  name?: string;
  response?: {
   [key: string]: GoogleSpeechFullApiSchemaJsonValue;
  };
};
```

#### Properties

##### done?

```ts
optional done?: boolean;
```

##### error?

```ts
optional error?: GoogleSpeechFullApiSchemaStatus2;
```

##### metadata?

```ts
optional metadata?: {
[key: string]: GoogleSpeechFullApiSchemaJsonValue;
};
```

###### Index Signature

```ts
[key: string]: GoogleSpeechFullApiSchemaJsonValue
```

##### name?

```ts
optional name?: string;
```

##### response?

```ts
optional response?: {
[key: string]: GoogleSpeechFullApiSchemaJsonValue;
};
```

###### Index Signature

```ts
[key: string]: GoogleSpeechFullApiSchemaJsonValue
```

***

### GoogleSpeechFullApiSchemaOperation3

```ts
type GoogleSpeechFullApiSchemaOperation3 = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaOperation4

```ts
type GoogleSpeechFullApiSchemaOperation4 = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaPhrase

```ts
type GoogleSpeechFullApiSchemaPhrase = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaPhraseSet

```ts
type GoogleSpeechFullApiSchemaPhraseSet = {
  annotations?: {
   [key: string]: string;
  };
  boost?: number;
  deleteTime?: string;
  displayName?: string;
  etag?: string;
  expireTime?: string;
  kmsKeyName?: string;
  kmsKeyVersionName?: string;
  name?: string;
  phrases?: ReadonlyArray<GoogleSpeechFullApiSchemaPhrase>;
  reconciling?: boolean;
  state?: "STATE_UNSPECIFIED" | "ACTIVE" | "DELETED";
  uid?: string;
};
```

#### Properties

##### annotations?

```ts
optional annotations?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### boost?

```ts
optional boost?: number;
```

##### deleteTime?

```ts
optional deleteTime?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### etag?

```ts
optional etag?: string;
```

##### expireTime?

```ts
optional expireTime?: string;
```

##### kmsKeyName?

```ts
optional kmsKeyName?: string;
```

##### kmsKeyVersionName?

```ts
optional kmsKeyVersionName?: string;
```

##### name?

```ts
optional name?: string;
```

##### phrases?

```ts
optional phrases?: ReadonlyArray<GoogleSpeechFullApiSchemaPhrase>;
```

##### reconciling?

```ts
optional reconciling?: boolean;
```

##### state?

```ts
optional state?: "STATE_UNSPECIFIED" | "ACTIVE" | "DELETED";
```

##### uid?

```ts
optional uid?: string;
```

***

### GoogleSpeechFullApiSchemaPhraseSet2

```ts
type GoogleSpeechFullApiSchemaPhraseSet2 = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaRecognitionAudio

```ts
type GoogleSpeechFullApiSchemaRecognitionAudio = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaRecognitionConfig

```ts
type GoogleSpeechFullApiSchemaRecognitionConfig = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaRecognizeRequest

```ts
type GoogleSpeechFullApiSchemaRecognizeRequest = {
  audio?: GoogleSpeechFullApiSchemaRecognitionAudio;
  config?: GoogleSpeechFullApiSchemaRecognitionConfig;
};
```

#### Properties

##### audio?

```ts
optional audio?: GoogleSpeechFullApiSchemaRecognitionAudio;
```

##### config?

```ts
optional config?: GoogleSpeechFullApiSchemaRecognitionConfig;
```

***

### GoogleSpeechFullApiSchemaRecognizeResponse

```ts
type GoogleSpeechFullApiSchemaRecognizeResponse = {
  requestId?: string;
  results?: ReadonlyArray<GoogleSpeechFullApiSchemaSpeechRecognitionResult>;
  speechAdaptationInfo?: GoogleSpeechFullApiSchemaSpeechAdaptationInfo;
  totalBilledTime?: string;
  usingLegacyModels?: boolean;
};
```

#### Properties

##### requestId?

```ts
optional requestId?: string;
```

##### results?

```ts
optional results?: ReadonlyArray<GoogleSpeechFullApiSchemaSpeechRecognitionResult>;
```

##### speechAdaptationInfo?

```ts
optional speechAdaptationInfo?: GoogleSpeechFullApiSchemaSpeechAdaptationInfo;
```

##### totalBilledTime?

```ts
optional totalBilledTime?: string;
```

##### usingLegacyModels?

```ts
optional usingLegacyModels?: boolean;
```

***

### GoogleSpeechFullApiSchemaSpeechAdaptationInfo

```ts
type GoogleSpeechFullApiSchemaSpeechAdaptationInfo = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaSpeechRecognitionResult

```ts
type GoogleSpeechFullApiSchemaSpeechRecognitionResult = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaStatus

```ts
type GoogleSpeechFullApiSchemaStatus = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaStatus2

```ts
type GoogleSpeechFullApiSchemaStatus2 = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaSynthesisInput

```ts
type GoogleSpeechFullApiSchemaSynthesisInput = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaSynthesizeLongAudioRequest

```ts
type GoogleSpeechFullApiSchemaSynthesizeLongAudioRequest = {
  audioConfig?: GoogleSpeechFullApiSchemaAudioConfig;
  input?: GoogleSpeechFullApiSchemaSynthesisInput;
  outputGcsUri?: string;
  voice?: GoogleSpeechFullApiSchemaVoiceSelectionParams;
};
```

#### Properties

##### audioConfig?

```ts
optional audioConfig?: GoogleSpeechFullApiSchemaAudioConfig;
```

##### input?

```ts
optional input?: GoogleSpeechFullApiSchemaSynthesisInput;
```

##### outputGcsUri?

```ts
optional outputGcsUri?: string;
```

##### voice?

```ts
optional voice?: GoogleSpeechFullApiSchemaVoiceSelectionParams;
```

***

### GoogleSpeechFullApiSchemaSynthesizeSpeechRequest

```ts
type GoogleSpeechFullApiSchemaSynthesizeSpeechRequest = {
  advancedVoiceOptions?: GoogleSpeechFullApiSchemaAdvancedVoiceOptions;
  audioConfig?: GoogleSpeechFullApiSchemaAudioConfig;
  input?: GoogleSpeechFullApiSchemaSynthesisInput;
  voice?: GoogleSpeechFullApiSchemaVoiceSelectionParams;
};
```

#### Properties

##### advancedVoiceOptions?

```ts
optional advancedVoiceOptions?: GoogleSpeechFullApiSchemaAdvancedVoiceOptions;
```

##### audioConfig?

```ts
optional audioConfig?: GoogleSpeechFullApiSchemaAudioConfig;
```

##### input?

```ts
optional input?: GoogleSpeechFullApiSchemaSynthesisInput;
```

##### voice?

```ts
optional voice?: GoogleSpeechFullApiSchemaVoiceSelectionParams;
```

***

### GoogleSpeechFullApiSchemaSynthesizeSpeechResponse

```ts
type GoogleSpeechFullApiSchemaSynthesizeSpeechResponse = {
  audioContent?: string;
};
```

#### Properties

##### audioContent?

```ts
optional audioContent?: string;
```

***

### GoogleSpeechFullApiSchemaTranscriptOutputConfig

```ts
type GoogleSpeechFullApiSchemaTranscriptOutputConfig = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaVoice

```ts
type GoogleSpeechFullApiSchemaVoice = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechFullApiSchemaVoiceSelectionParams

```ts
type GoogleSpeechFullApiSchemaVoiceSelectionParams = GoogleSpeechFullApiSchemaJsonValue;
```

***

### GoogleSpeechGeneratedOperationCaller

```ts
type GoogleSpeechGeneratedOperationCaller = <OperationKey>(operationKey, ...args) => Promise<GoogleSpeechFullApiOperationResponseMap[OperationKey]>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `OperationKey` *extends* `GoogleSpeechFullApiOperationKey` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `operationKey` | `OperationKey` |
| ...`args` | `GoogleSpeechFullApiOperationArgs`\<`OperationKey`\> |

#### Returns

`Promise`\<[`GoogleSpeechFullApiOperationResponseMap`](#googlespeechfullapioperationresponsemap)\[`OperationKey`\]\>

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

### GOOGLE\_SPEECH\_FULL\_API\_GENERATED\_AT

```ts
const GOOGLE_SPEECH_FULL_API_GENERATED_AT: "2026-06-18";
```

***

### GOOGLE\_SPEECH\_FULL\_API\_GENERATED\_FUNCTION\_COUNT

```ts
const GOOGLE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT: 21;
```

***

### GOOGLE\_SPEECH\_FULL\_API\_GENERATED\_FUNCTION\_NAMES

```ts
const GOOGLE_SPEECH_FULL_API_GENERATED_FUNCTION_NAMES: readonly ["SpeechOperationsGet", "SpeechOperationsList", "SpeechProjectsLocationsCustomClassesCreate", "SpeechProjectsLocationsCustomClassesDelete", "SpeechProjectsLocationsCustomClassesGet", "SpeechProjectsLocationsCustomClassesList", "SpeechProjectsLocationsCustomClassesPatch", "SpeechProjectsLocationsPhraseSetsCreate", "SpeechProjectsLocationsPhraseSetsDelete", "SpeechProjectsLocationsPhraseSetsGet", "SpeechProjectsLocationsPhraseSetsList", "SpeechProjectsLocationsPhraseSetsPatch", "SpeechSpeechLongrunningrecognize", "SpeechSpeechRecognize", "TexttospeechOperationsCancel", "TexttospeechOperationsDelete", "TexttospeechProjectsLocationsOperationsGet", "TexttospeechProjectsLocationsOperationsList", "TexttospeechProjectsLocationsSynthesizeLongAudio", "TexttospeechTextSynthesize", "TexttospeechVoicesList"];
```

***

### GOOGLE\_SPEECH\_FULL\_API\_OPERATION\_BY\_ID

```ts
const GOOGLE_SPEECH_FULL_API_OPERATION_BY_ID: Map<string, GoogleSpeechFullApiOperation>;
```

***

### GOOGLE\_SPEECH\_FULL\_API\_OPERATION\_BY\_OPERATION\_ID

```ts
const GOOGLE_SPEECH_FULL_API_OPERATION_BY_OPERATION_ID: Map<string, GoogleSpeechFullApiOperation>;
```

***

### GOOGLE\_SPEECH\_FULL\_API\_OPERATION\_COUNT

```ts
const GOOGLE_SPEECH_FULL_API_OPERATION_COUNT: 21;
```

***

### GOOGLE\_SPEECH\_FULL\_API\_OPERATIONS

```ts
const GOOGLE_SPEECH_FULL_API_OPERATIONS: readonly GoogleSpeechFullApiOperation[];
```

***

### GOOGLE\_SPEECH\_FULL\_API\_SPEC

```ts
const GOOGLE_SPEECH_FULL_API_SPEC: {
  operationCount: number;
  source: string;
  specs: readonly GoogleSpeechFullApiSpec[];
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-operationcount"></a> `operationCount` | `number` |
| <a id="property-source"></a> `source` | `string` |
| <a id="property-specs"></a> `specs` | readonly [`GoogleSpeechFullApiSpec`](#googlespeechfullapispec)[] |

***

### GOOGLE\_SPEECH\_FULL\_API\_SPEC\_SOURCE

```ts
const GOOGLE_SPEECH_FULL_API_SPEC_SOURCE: "google-discovery-bundle";
```

***

### GOOGLE\_SPEECH\_FULL\_API\_SPEC\_VERSION

```ts
const GOOGLE_SPEECH_FULL_API_SPEC_VERSION: "google-speech-discovery-2026-06-18";
```

***

### GOOGLE\_SPEECH\_FULL\_API\_SPECS

```ts
const GOOGLE_SPEECH_FULL_API_SPECS: readonly GoogleSpeechFullApiSpec[];
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
  capabilities: [{
     audiences: ["customer-facing"];
     capability: "receive";
     description: "Transcribes customer PCM voice input with Google Cloud Speech-to-Text.";
     exposesSensitiveData: true;
     label: "Transcribe speech";
     providerObjects: [{
        kind: "googleSpeechTranscript";
        label: "Google Speech Transcript";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing"];
     capability: "send";
     description: "Synthesizes Cognidesk assistant text with Google Cloud Text-to-Speech.";
     exposesSensitiveData: true;
     label: "Synthesize speech";
     providerObjects: [{
        kind: "googleSpeechSynthesis";
        label: "Google Speech Synthesis";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "internal-support"];
     capability: "media";
     description: "Exchanges buffered PCM input and synthesized 24 kHz PCM output for Cognidesk voice sessions.";
     exposesSensitiveData: true;
     label: "Speech audio media";
     providerObjects: [{
        kind: "voiceTranscript";
        label: "Voice Transcript";
      }, {
        kind: "voiceAudio";
        label: "Voice Audio";
     }];
     requiresCredential: true;
  }];
  category: "voice";
  channelAudiences: ["customer-facing", "mixed"];
  coverage: {
     evidence: [{
        label: "Google Cloud Speech-to-Text speech.recognize REST API";
        url: "https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/speech/recognize";
      }, {
        label: "Google Cloud Speech-to-Text RecognitionConfig";
        url: "https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig";
      }, {
        label: "Google Cloud Text-to-Speech text.synthesize REST API";
        url: "https://docs.cloud.google.com/text-to-speech/docs/reference/rest/v1/text/synthesize";
      }, {
        label: "Google Cloud Text-to-Speech audio encodings";
        url: "https://docs.cloud.google.com/text-to-speech/docs/reference/rest/v1/AudioEncoding";
      }, {
        label: "Google Cloud REST authentication";
        url: "https://docs.cloud.google.com/docs/authentication/rest";
     }];
     notes: ["Implements Google Cloud Speech-to-Text synchronous recognize and Cloud Text-to-Speech synchronous synthesize for Cognidesk STT/TTS voice pipelines.", "Generated operation inventory and caller interfaces cover the official Google Cloud Speech-to-Text and Text-to-Speech v1 Discovery documents.", "Google Cloud supplies transcripts and synthesized audio while Cognidesk still owns the Agent Model Set, Journeys, Tools, Knowledge, and durable transcript boundary.", "Does not implement the full Google Cloud Speech SDKs, streaming recognizer sessions, long-running transcription, long audio synthesis, voice catalog administration, or Google Cloud IAM/project policy."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     description: "Server-side OAuth access token or token provider with the cloud-platform scope for Google Cloud Speech-to-Text and Text-to-Speech REST requests.";
     id: "google-cloud-access-token";
     label: "Google Cloud OAuth access token";
     required: true;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "voice.google-speech";
  limitations: ["This package implements synchronous REST STT and REST TTS for Cognidesk speech pipelines, not full streaming Google Cloud Speech SDK sessions.", "The background LLM is the Cognidesk Agent Model Set configured through @cognidesk/model, not Google Cloud Speech.", "Consent, recording, retention, quota project selection, region/data-residency controls, private networking, and Google Cloud IAM policy remain SDK-user configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        backgroundModelProvider: "sdk-owned-agent-model-set";
        browserVoiceProtocol: "sdk-owned-cognidesk-voice-websocket";
        fullGoogleCloudSpeechSdk: "not-covered";
        longAudioSynthesis: "not-covered";
        longRunningRecognize: "not-covered";
        speechToText: "typed-synchronous-recognize-rest";
        streamingRecognize: "not-covered";
        textToSpeech: "typed-synchronous-synthesize-rest";
     };
     generatedSpeechApi: {
        apiVersion: "google-speech-discovery-2026-06-18";
        functionCount: 21;
        operationCount: 21;
     };
  };
  name: "Google Cloud Speech";
  packageName: "@cognidesk/integrations";
  privacyNotes: ["Customer audio is sent to Google Cloud Speech-to-Text for transcription, and assistant response text is sent to Google Cloud Text-to-Speech for synthesis.", "Google Cloud credentials remain server-side and are never issued to browsers by this package."];
  provider: "google-speech";
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
| `capabilities` | \[\{ `audiences`: \[`"customer-facing"`\]; `capability`: `"receive"`; `description`: `"Transcribes customer PCM voice input with Google Cloud Speech-to-Text."`; `exposesSensitiveData`: `true`; `label`: `"Transcribe speech"`; `providerObjects`: \[\{ `kind`: `"googleSpeechTranscript"`; `label`: `"Google Speech Transcript"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Synthesizes Cognidesk assistant text with Google Cloud Text-to-Speech."`; `exposesSensitiveData`: `true`; `label`: `"Synthesize speech"`; `providerObjects`: \[\{ `kind`: `"googleSpeechSynthesis"`; `label`: `"Google Speech Synthesis"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"media"`; `description`: `"Exchanges buffered PCM input and synthesized 24 kHz PCM output for Cognidesk voice sessions."`; `exposesSensitiveData`: `true`; `label`: `"Speech audio media"`; `providerObjects`: \[\{ `kind`: `"voiceTranscript"`; `label`: `"Voice Transcript"`; \}, \{ `kind`: `"voiceAudio"`; `label`: `"Voice Audio"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"voice"` |
| `channelAudiences` | \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Google Cloud Speech-to-Text speech.recognize REST API"`; `url`: `"https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/speech/recognize"`; \}, \{ `label`: `"Google Cloud Speech-to-Text RecognitionConfig"`; `url`: `"https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig"`; \}, \{ `label`: `"Google Cloud Text-to-Speech text.synthesize REST API"`; `url`: `"https://docs.cloud.google.com/text-to-speech/docs/reference/rest/v1/text/synthesize"`; \}, \{ `label`: `"Google Cloud Text-to-Speech audio encodings"`; `url`: `"https://docs.cloud.google.com/text-to-speech/docs/reference/rest/v1/AudioEncoding"`; \}, \{ `label`: `"Google Cloud REST authentication"`; `url`: `"https://docs.cloud.google.com/docs/authentication/rest"`; \}\]; `notes`: \[`"Implements Google Cloud Speech-to-Text synchronous recognize and Cloud Text-to-Speech synchronous synthesize for Cognidesk STT/TTS voice pipelines."`, `"Generated operation inventory and caller interfaces cover the official Google Cloud Speech-to-Text and Text-to-Speech v1 Discovery documents."`, `"Google Cloud supplies transcripts and synthesized audio while Cognidesk still owns the Agent Model Set, Journeys, Tools, Knowledge, and durable transcript boundary."`, `"Does not implement the full Google Cloud Speech SDKs, streaming recognizer sessions, long-running transcription, long audio synthesis, voice catalog administration, or Google Cloud IAM/project policy."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Google Cloud Speech-to-Text speech.recognize REST API"`; `url`: `"https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/speech/recognize"`; \}, \{ `label`: `"Google Cloud Speech-to-Text RecognitionConfig"`; `url`: `"https://docs.cloud.google.com/speech-to-text/docs/reference/rest/v1/RecognitionConfig"`; \}, \{ `label`: `"Google Cloud Text-to-Speech text.synthesize REST API"`; `url`: `"https://docs.cloud.google.com/text-to-speech/docs/reference/rest/v1/text/synthesize"`; \}, \{ `label`: `"Google Cloud Text-to-Speech audio encodings"`; `url`: `"https://docs.cloud.google.com/text-to-speech/docs/reference/rest/v1/AudioEncoding"`; \}, \{ `label`: `"Google Cloud REST authentication"`; `url`: `"https://docs.cloud.google.com/docs/authentication/rest"`; \}\] |
| `coverage.notes` | \[`"Implements Google Cloud Speech-to-Text synchronous recognize and Cloud Text-to-Speech synchronous synthesize for Cognidesk STT/TTS voice pipelines."`, `"Generated operation inventory and caller interfaces cover the official Google Cloud Speech-to-Text and Text-to-Speech v1 Discovery documents."`, `"Google Cloud supplies transcripts and synthesized audio while Cognidesk still owns the Agent Model Set, Journeys, Tools, Knowledge, and durable transcript boundary."`, `"Does not implement the full Google Cloud Speech SDKs, streaming recognizer sessions, long-running transcription, long audio synthesis, voice catalog administration, or Google Cloud IAM/project policy."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | \[\{ `description`: `"Server-side OAuth access token or token provider with the cloud-platform scope for Google Cloud Speech-to-Text and Text-to-Speech REST requests."`; `id`: `"google-cloud-access-token"`; `label`: `"Google Cloud OAuth access token"`; `required`: `true`; \}\] |
| `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"voice.google-speech"` |
| `limitations` | \[`"This package implements synchronous REST STT and REST TTS for Cognidesk speech pipelines, not full streaming Google Cloud Speech SDK sessions."`, `"The background LLM is the Cognidesk Agent Model Set configured through @cognidesk/model, not Google Cloud Speech."`, `"Consent, recording, retention, quota project selection, region/data-residency controls, private networking, and Google Cloud IAM policy remain SDK-user configuration."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `backgroundModelProvider`: `"sdk-owned-agent-model-set"`; `browserVoiceProtocol`: `"sdk-owned-cognidesk-voice-websocket"`; `fullGoogleCloudSpeechSdk`: `"not-covered"`; `longAudioSynthesis`: `"not-covered"`; `longRunningRecognize`: `"not-covered"`; `speechToText`: `"typed-synchronous-recognize-rest"`; `streamingRecognize`: `"not-covered"`; `textToSpeech`: `"typed-synchronous-synthesize-rest"`; \}; `generatedSpeechApi`: \{ `apiVersion`: `"google-speech-discovery-2026-06-18"`; `functionCount`: `21`; `operationCount`: `21`; \}; \} |
| `metadata.channelCoverage` | \{ `backgroundModelProvider`: `"sdk-owned-agent-model-set"`; `browserVoiceProtocol`: `"sdk-owned-cognidesk-voice-websocket"`; `fullGoogleCloudSpeechSdk`: `"not-covered"`; `longAudioSynthesis`: `"not-covered"`; `longRunningRecognize`: `"not-covered"`; `speechToText`: `"typed-synchronous-recognize-rest"`; `streamingRecognize`: `"not-covered"`; `textToSpeech`: `"typed-synchronous-synthesize-rest"`; \} |
| `metadata.channelCoverage.backgroundModelProvider` | `"sdk-owned-agent-model-set"` |
| `metadata.channelCoverage.browserVoiceProtocol` | `"sdk-owned-cognidesk-voice-websocket"` |
| `metadata.channelCoverage.fullGoogleCloudSpeechSdk` | `"not-covered"` |
| `metadata.channelCoverage.longAudioSynthesis` | `"not-covered"` |
| `metadata.channelCoverage.longRunningRecognize` | `"not-covered"` |
| `metadata.channelCoverage.speechToText` | `"typed-synchronous-recognize-rest"` |
| `metadata.channelCoverage.streamingRecognize` | `"not-covered"` |
| `metadata.channelCoverage.textToSpeech` | `"typed-synchronous-synthesize-rest"` |
| `metadata.generatedSpeechApi` | \{ `apiVersion`: `"google-speech-discovery-2026-06-18"`; `functionCount`: `21`; `operationCount`: `21`; \} |
| `metadata.generatedSpeechApi.apiVersion` | `"google-speech-discovery-2026-06-18"` |
| `metadata.generatedSpeechApi.functionCount` | `21` |
| `metadata.generatedSpeechApi.operationCount` | `21` |
| `name` | `"Google Cloud Speech"` |
| `packageName` | `"@cognidesk/integrations"` |
| `privacyNotes` | \[`"Customer audio is sent to Google Cloud Speech-to-Text for transcription, and assistant response text is sent to Google Cloud Text-to-Speech for synthesis."`, `"Google Cloud credentials remain server-side and are never issued to browsers by this package."`\] |
| `provider` | `"google-speech"` |
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

### createGoogleSpeechFullApiGeneratedClient()

```ts
function createGoogleSpeechFullApiGeneratedClient(callOperation): GoogleSpeechFullApiGeneratedClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callOperation` | [`GoogleSpeechGeneratedOperationCaller`](#googlespeechgeneratedoperationcaller) |

#### Returns

[`GoogleSpeechFullApiGeneratedClient`](#googlespeechfullapigeneratedclient)

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

[`VoiceProvider`](../../../voice-websocket/dist.md#voiceprovider)

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
