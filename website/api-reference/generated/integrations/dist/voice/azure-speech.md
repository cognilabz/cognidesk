# integrations/dist/voice/azure-speech

## Interfaces

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

##### region

```ts
region: string;
```

##### speechKey

```ts
speechKey: string;
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

### AzureSpeechFullApiGeneratedClient

#### Extends

- `AzureSpeechFullApiBaseModelGeneratedClient`.`AzureSpeechFullApiBatchSynthesisGeneratedClient`.`AzureSpeechFullApiConsentGeneratedClient`.`AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient`.`AzureSpeechFullApiCustomSpeechEndpointsGeneratedClient`.`AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient`.`AzureSpeechFullApiCustomSpeechModelsGeneratedClient`.`AzureSpeechFullApiCustomSpeechOperationsGeneratedClient`.`AzureSpeechFullApiCustomSpeechProjectsGeneratedClient`.`AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient`.`AzureSpeechFullApiCustomSpeechWebHooksGeneratedClient`.`AzureSpeechFullApiEndpointGeneratedClient`.`AzureSpeechFullApiModelGeneratedClient`.`AzureSpeechFullApiOperationsGeneratedClient`.`AzureSpeechFullApiPersonalVoiceGeneratedClient`.`AzureSpeechFullApiProjectGeneratedClient`.`AzureSpeechFullApiTrainingSetGeneratedClient`.`AzureSpeechFullApiTranscribeGeneratedClient`.`AzureSpeechFullApiTranscriptionsTranscribeGeneratedClient`

#### Methods

##### BatchTextToSpeechBatchSynthesesCreate()

```ts
BatchTextToSpeechBatchSynthesesCreate(...args): Promise<AzureSpeechFullApiSchemaBatchSynthesis>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaBatchSynthesis`](#azurespeechfullapischemabatchsynthesis)\>

###### Inherited from

```ts
AzureSpeechFullApiBatchSynthesisGeneratedClient.BatchTextToSpeechBatchSynthesesCreate
```

##### BatchTextToSpeechBatchSynthesesDelete()

```ts
BatchTextToSpeechBatchSynthesesDelete(...args): Promise<AzureSpeechFullApiSchemaErrorResponse>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaErrorResponse`](#azurespeechfullapischemaerrorresponse)\>

###### Inherited from

```ts
AzureSpeechFullApiBatchSynthesisGeneratedClient.BatchTextToSpeechBatchSynthesesDelete
```

##### BatchTextToSpeechBatchSynthesesGet()

```ts
BatchTextToSpeechBatchSynthesesGet(...args): Promise<AzureSpeechFullApiSchemaBatchSynthesis>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaBatchSynthesis`](#azurespeechfullapischemabatchsynthesis)\>

###### Inherited from

```ts
AzureSpeechFullApiBatchSynthesisGeneratedClient.BatchTextToSpeechBatchSynthesesGet
```

##### BatchTextToSpeechBatchSynthesesList()

```ts
BatchTextToSpeechBatchSynthesesList(...args): Promise<AzureSpeechFullApiSchemaPaginatedBatchSynthesis>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"batch-text-to-speech:BatchSyntheses_List:/batchsyntheses"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedBatchSynthesis`](#azurespeechfullapischemapaginatedbatchsynthesis)\>

###### Inherited from

```ts
AzureSpeechFullApiBatchSynthesisGeneratedClient.BatchTextToSpeechBatchSynthesesList
```

##### BatchTextToSpeechOperationsGet()

```ts
BatchTextToSpeechOperationsGet(...args): Promise<AzureSpeechFullApiSchemaOperation>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"batch-text-to-speech:Operations_Get:/operations/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaOperation`](#azurespeechfullapischemaoperation)\>

###### Inherited from

```ts
AzureSpeechFullApiOperationsGeneratedClient.BatchTextToSpeechOperationsGet
```

##### CustomTextToSpeechBaseModelsList()

```ts
CustomTextToSpeechBaseModelsList(...args): Promise<readonly AzureSpeechFullApiSchemaBaseModel[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:BaseModels_List:/basemodels"`\>\] |

###### Returns

`Promise`\<readonly [`AzureSpeechFullApiSchemaBaseModel`](#azurespeechfullapischemabasemodel)[]\>

###### Inherited from

```ts
AzureSpeechFullApiBaseModelGeneratedClient.CustomTextToSpeechBaseModelsList
```

##### CustomTextToSpeechConsentsCreate()

```ts
CustomTextToSpeechConsentsCreate(...args): Promise<AzureSpeechFullApiSchemaConsent>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Consents_Create:/consents/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaConsent`](#azurespeechfullapischemaconsent)\>

###### Inherited from

```ts
AzureSpeechFullApiConsentGeneratedClient.CustomTextToSpeechConsentsCreate
```

##### CustomTextToSpeechConsentsDelete()

```ts
CustomTextToSpeechConsentsDelete(...args): Promise<AzureSpeechFullApiSchemaErrorResponse2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Consents_Delete:/consents/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaErrorResponse2`](#azurespeechfullapischemaerrorresponse2)\>

###### Inherited from

```ts
AzureSpeechFullApiConsentGeneratedClient.CustomTextToSpeechConsentsDelete
```

##### CustomTextToSpeechConsentsGet()

```ts
CustomTextToSpeechConsentsGet(...args): Promise<AzureSpeechFullApiSchemaConsent>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Consents_Get:/consents/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaConsent`](#azurespeechfullapischemaconsent)\>

###### Inherited from

```ts
AzureSpeechFullApiConsentGeneratedClient.CustomTextToSpeechConsentsGet
```

##### CustomTextToSpeechConsentsList()

```ts
CustomTextToSpeechConsentsList(...args): Promise<AzureSpeechFullApiSchemaPaginatedConsents>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Consents_List:/consents"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedConsents`](#azurespeechfullapischemapaginatedconsents)\>

###### Inherited from

```ts
AzureSpeechFullApiConsentGeneratedClient.CustomTextToSpeechConsentsList
```

##### CustomTextToSpeechConsentsPost()

```ts
CustomTextToSpeechConsentsPost(...args): Promise<AzureSpeechFullApiSchemaConsent>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Consents_Post:/consents/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaConsent`](#azurespeechfullapischemaconsent)\>

###### Inherited from

```ts
AzureSpeechFullApiConsentGeneratedClient.CustomTextToSpeechConsentsPost
```

##### CustomTextToSpeechEndpointsCreate()

```ts
CustomTextToSpeechEndpointsCreate(...args): Promise<AzureSpeechFullApiSchemaEndpoint>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Endpoints_Create:/endpoints/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaEndpoint`](#azurespeechfullapischemaendpoint)\>

###### Inherited from

```ts
AzureSpeechFullApiEndpointGeneratedClient.CustomTextToSpeechEndpointsCreate
```

##### CustomTextToSpeechEndpointsDelete()

```ts
CustomTextToSpeechEndpointsDelete(...args): Promise<AzureSpeechFullApiSchemaErrorResponse2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Endpoints_Delete:/endpoints/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaErrorResponse2`](#azurespeechfullapischemaerrorresponse2)\>

###### Inherited from

```ts
AzureSpeechFullApiEndpointGeneratedClient.CustomTextToSpeechEndpointsDelete
```

##### CustomTextToSpeechEndpointsGet()

```ts
CustomTextToSpeechEndpointsGet(...args): Promise<AzureSpeechFullApiSchemaEndpoint>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Endpoints_Get:/endpoints/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaEndpoint`](#azurespeechfullapischemaendpoint)\>

###### Inherited from

```ts
AzureSpeechFullApiEndpointGeneratedClient.CustomTextToSpeechEndpointsGet
```

##### CustomTextToSpeechEndpointsList()

```ts
CustomTextToSpeechEndpointsList(...args): Promise<AzureSpeechFullApiSchemaPaginatedEndpoints>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Endpoints_List:/endpoints"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedEndpoints`](#azurespeechfullapischemapaginatedendpoints)\>

###### Inherited from

```ts
AzureSpeechFullApiEndpointGeneratedClient.CustomTextToSpeechEndpointsList
```

##### CustomTextToSpeechEndpointsResume()

```ts
CustomTextToSpeechEndpointsResume(...args): Promise<AzureSpeechFullApiSchemaEndpoint>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaEndpoint`](#azurespeechfullapischemaendpoint)\>

###### Inherited from

```ts
AzureSpeechFullApiEndpointGeneratedClient.CustomTextToSpeechEndpointsResume
```

##### CustomTextToSpeechEndpointsSuspend()

```ts
CustomTextToSpeechEndpointsSuspend(...args): Promise<AzureSpeechFullApiSchemaEndpoint>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaEndpoint`](#azurespeechfullapischemaendpoint)\>

###### Inherited from

```ts
AzureSpeechFullApiEndpointGeneratedClient.CustomTextToSpeechEndpointsSuspend
```

##### CustomTextToSpeechModelsCreate()

```ts
CustomTextToSpeechModelsCreate(...args): Promise<AzureSpeechFullApiSchemaModel>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Models_Create:/models/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaModel`](#azurespeechfullapischemamodel)\>

###### Inherited from

```ts
AzureSpeechFullApiModelGeneratedClient.CustomTextToSpeechModelsCreate
```

##### CustomTextToSpeechModelsDelete()

```ts
CustomTextToSpeechModelsDelete(...args): Promise<AzureSpeechFullApiSchemaErrorResponse2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Models_Delete:/models/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaErrorResponse2`](#azurespeechfullapischemaerrorresponse2)\>

###### Inherited from

```ts
AzureSpeechFullApiModelGeneratedClient.CustomTextToSpeechModelsDelete
```

##### CustomTextToSpeechModelsGet()

```ts
CustomTextToSpeechModelsGet(...args): Promise<AzureSpeechFullApiSchemaModel>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Models_Get:/models/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaModel`](#azurespeechfullapischemamodel)\>

###### Inherited from

```ts
AzureSpeechFullApiModelGeneratedClient.CustomTextToSpeechModelsGet
```

##### CustomTextToSpeechModelsList()

```ts
CustomTextToSpeechModelsList(...args): Promise<AzureSpeechFullApiSchemaPaginatedModels>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Models_List:/models"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedModels`](#azurespeechfullapischemapaginatedmodels)\>

###### Inherited from

```ts
AzureSpeechFullApiModelGeneratedClient.CustomTextToSpeechModelsList
```

##### CustomTextToSpeechModelsListRecipes()

```ts
CustomTextToSpeechModelsListRecipes(...args): Promise<readonly AzureSpeechFullApiSchemaRecipe[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Models_ListRecipes:/modelrecipes"`\>\] |

###### Returns

`Promise`\<readonly [`AzureSpeechFullApiSchemaRecipe`](#azurespeechfullapischemarecipe)[]\>

###### Inherited from

```ts
AzureSpeechFullApiModelGeneratedClient.CustomTextToSpeechModelsListRecipes
```

##### CustomTextToSpeechOperationsGet()

```ts
CustomTextToSpeechOperationsGet(...args): Promise<AzureSpeechFullApiSchemaOperation2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Operations_Get:/operations/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaOperation2`](#azurespeechfullapischemaoperation2)\>

###### Inherited from

```ts
AzureSpeechFullApiOperationsGeneratedClient.CustomTextToSpeechOperationsGet
```

##### CustomTextToSpeechPersonalVoicesCreate()

```ts
CustomTextToSpeechPersonalVoicesCreate(...args): Promise<AzureSpeechFullApiSchemaPersonalVoice>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPersonalVoice`](#azurespeechfullapischemapersonalvoice)\>

###### Inherited from

```ts
AzureSpeechFullApiPersonalVoiceGeneratedClient.CustomTextToSpeechPersonalVoicesCreate
```

##### CustomTextToSpeechPersonalVoicesDelete()

```ts
CustomTextToSpeechPersonalVoicesDelete(...args): Promise<AzureSpeechFullApiSchemaErrorResponse2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaErrorResponse2`](#azurespeechfullapischemaerrorresponse2)\>

###### Inherited from

```ts
AzureSpeechFullApiPersonalVoiceGeneratedClient.CustomTextToSpeechPersonalVoicesDelete
```

##### CustomTextToSpeechPersonalVoicesGet()

```ts
CustomTextToSpeechPersonalVoicesGet(...args): Promise<AzureSpeechFullApiSchemaPersonalVoice>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPersonalVoice`](#azurespeechfullapischemapersonalvoice)\>

###### Inherited from

```ts
AzureSpeechFullApiPersonalVoiceGeneratedClient.CustomTextToSpeechPersonalVoicesGet
```

##### CustomTextToSpeechPersonalVoicesList()

```ts
CustomTextToSpeechPersonalVoicesList(...args): Promise<AzureSpeechFullApiSchemaPaginatedPersonalVoices>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:PersonalVoices_List:/personalvoices"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedPersonalVoices`](#azurespeechfullapischemapaginatedpersonalvoices)\>

###### Inherited from

```ts
AzureSpeechFullApiPersonalVoiceGeneratedClient.CustomTextToSpeechPersonalVoicesList
```

##### CustomTextToSpeechPersonalVoicesPost()

```ts
CustomTextToSpeechPersonalVoicesPost(...args): Promise<AzureSpeechFullApiSchemaPersonalVoice>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPersonalVoice`](#azurespeechfullapischemapersonalvoice)\>

###### Inherited from

```ts
AzureSpeechFullApiPersonalVoiceGeneratedClient.CustomTextToSpeechPersonalVoicesPost
```

##### CustomTextToSpeechProjectsCreate()

```ts
CustomTextToSpeechProjectsCreate(...args): Promise<AzureSpeechFullApiSchemaProject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Projects_Create:/projects/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaProject`](#azurespeechfullapischemaproject)\>

###### Inherited from

```ts
AzureSpeechFullApiProjectGeneratedClient.CustomTextToSpeechProjectsCreate
```

##### CustomTextToSpeechProjectsDelete()

```ts
CustomTextToSpeechProjectsDelete(...args): Promise<AzureSpeechFullApiSchemaErrorResponse2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Projects_Delete:/projects/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaErrorResponse2`](#azurespeechfullapischemaerrorresponse2)\>

###### Inherited from

```ts
AzureSpeechFullApiProjectGeneratedClient.CustomTextToSpeechProjectsDelete
```

##### CustomTextToSpeechProjectsGet()

```ts
CustomTextToSpeechProjectsGet(...args): Promise<AzureSpeechFullApiSchemaProject>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Projects_Get:/projects/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaProject`](#azurespeechfullapischemaproject)\>

###### Inherited from

```ts
AzureSpeechFullApiProjectGeneratedClient.CustomTextToSpeechProjectsGet
```

##### CustomTextToSpeechProjectsList()

```ts
CustomTextToSpeechProjectsList(...args): Promise<AzureSpeechFullApiSchemaPaginatedProjects>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:Projects_List:/projects"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedProjects`](#azurespeechfullapischemapaginatedprojects)\>

###### Inherited from

```ts
AzureSpeechFullApiProjectGeneratedClient.CustomTextToSpeechProjectsList
```

##### CustomTextToSpeechTrainingSetsCreate()

```ts
CustomTextToSpeechTrainingSetsCreate(...args): Promise<AzureSpeechFullApiSchemaTrainingSet>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaTrainingSet`](#azurespeechfullapischematrainingset)\>

###### Inherited from

```ts
AzureSpeechFullApiTrainingSetGeneratedClient.CustomTextToSpeechTrainingSetsCreate
```

##### CustomTextToSpeechTrainingSetsDelete()

```ts
CustomTextToSpeechTrainingSetsDelete(...args): Promise<AzureSpeechFullApiSchemaErrorResponse2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaErrorResponse2`](#azurespeechfullapischemaerrorresponse2)\>

###### Inherited from

```ts
AzureSpeechFullApiTrainingSetGeneratedClient.CustomTextToSpeechTrainingSetsDelete
```

##### CustomTextToSpeechTrainingSetsGet()

```ts
CustomTextToSpeechTrainingSetsGet(...args): Promise<AzureSpeechFullApiSchemaTrainingSet>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaTrainingSet`](#azurespeechfullapischematrainingset)\>

###### Inherited from

```ts
AzureSpeechFullApiTrainingSetGeneratedClient.CustomTextToSpeechTrainingSetsGet
```

##### CustomTextToSpeechTrainingSetsList()

```ts
CustomTextToSpeechTrainingSetsList(...args): Promise<AzureSpeechFullApiSchemaPaginatedTrainingSets>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:TrainingSets_List:/trainingsets"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedTrainingSets`](#azurespeechfullapischemapaginatedtrainingsets)\>

###### Inherited from

```ts
AzureSpeechFullApiTrainingSetGeneratedClient.CustomTextToSpeechTrainingSetsList
```

##### CustomTextToSpeechTrainingSetsUploadData()

```ts
CustomTextToSpeechTrainingSetsUploadData(...args): Promise<AzureSpeechFullApiSchemaErrorResponse2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaErrorResponse2`](#azurespeechfullapischemaerrorresponse2)\>

###### Inherited from

```ts
AzureSpeechFullApiTrainingSetGeneratedClient.CustomTextToSpeechTrainingSetsUploadData
```

##### SpeechToTextDatasetsCommitBlocks()

```ts
SpeechToTextDatasetsCommitBlocks(...args): Promise<AzureSpeechFullApiSchemaError>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaError`](#azurespeechfullapischemaerror)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient.SpeechToTextDatasetsCommitBlocks
```

##### SpeechToTextDatasetsCreate()

```ts
SpeechToTextDatasetsCreate(...args): Promise<AzureSpeechFullApiSchemaDataset2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Datasets_Create:/datasets"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaDataset2`](#azurespeechfullapischemadataset2)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient.SpeechToTextDatasetsCreate
```

##### SpeechToTextDatasetsDelete()

```ts
SpeechToTextDatasetsDelete(...args): Promise<AzureSpeechFullApiSchemaError>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Datasets_Delete:/datasets/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaError`](#azurespeechfullapischemaerror)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient.SpeechToTextDatasetsDelete
```

##### SpeechToTextDatasetsGet()

```ts
SpeechToTextDatasetsGet(...args): Promise<AzureSpeechFullApiSchemaDataset2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Datasets_Get:/datasets/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaDataset2`](#azurespeechfullapischemadataset2)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient.SpeechToTextDatasetsGet
```

##### SpeechToTextDatasetsGetBlocks()

```ts
SpeechToTextDatasetsGetBlocks(...args): Promise<AzureSpeechFullApiSchemaUploadedBlocks>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaUploadedBlocks`](#azurespeechfullapischemauploadedblocks)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient.SpeechToTextDatasetsGetBlocks
```

##### SpeechToTextDatasetsGetFile()

```ts
SpeechToTextDatasetsGetFile(...args): Promise<AzureSpeechFullApiSchemaFile>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaFile`](#azurespeechfullapischemafile)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient.SpeechToTextDatasetsGetFile
```

##### SpeechToTextDatasetsList()

```ts
SpeechToTextDatasetsList(...args): Promise<AzureSpeechFullApiSchemaPaginatedDatasets>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Datasets_List:/datasets"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedDatasets`](#azurespeechfullapischemapaginateddatasets)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient.SpeechToTextDatasetsList
```

##### SpeechToTextDatasetsListFiles()

```ts
SpeechToTextDatasetsListFiles(...args): Promise<AzureSpeechFullApiSchemaPaginatedFiles>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Datasets_ListFiles:/datasets/{id}/files"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedFiles`](#azurespeechfullapischemapaginatedfiles)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient.SpeechToTextDatasetsListFiles
```

##### SpeechToTextDatasetsListSupportedLocales()

```ts
SpeechToTextDatasetsListSupportedLocales(...args): Promise<AzureSpeechFullApiSchemaDatasetLocales>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Datasets_ListSupportedLocales:/datasets/locales"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaDatasetLocales`](#azurespeechfullapischemadatasetlocales)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient.SpeechToTextDatasetsListSupportedLocales
```

##### SpeechToTextDatasetsUpdate()

```ts
SpeechToTextDatasetsUpdate(...args): Promise<AzureSpeechFullApiSchemaDataset2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Datasets_Update:/datasets/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaDataset2`](#azurespeechfullapischemadataset2)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient.SpeechToTextDatasetsUpdate
```

##### SpeechToTextDatasetsUploadBlock()

```ts
SpeechToTextDatasetsUploadBlock(...args): Promise<AzureSpeechFullApiSchemaError>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaError`](#azurespeechfullapischemaerror)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechDatasetsForModelAdaptationGeneratedClient.SpeechToTextDatasetsUploadBlock
```

##### SpeechToTextEndpointsCreate()

```ts
SpeechToTextEndpointsCreate(...args): Promise<AzureSpeechFullApiSchemaEndpoint2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Endpoints_Create:/endpoints"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaEndpoint2`](#azurespeechfullapischemaendpoint2)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechEndpointsGeneratedClient.SpeechToTextEndpointsCreate
```

##### SpeechToTextEndpointsDelete()

```ts
SpeechToTextEndpointsDelete(...args): Promise<AzureSpeechFullApiSchemaError>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Endpoints_Delete:/endpoints/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaError`](#azurespeechfullapischemaerror)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechEndpointsGeneratedClient.SpeechToTextEndpointsDelete
```

##### SpeechToTextEndpointsGet()

```ts
SpeechToTextEndpointsGet(...args): Promise<AzureSpeechFullApiSchemaEndpoint2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Endpoints_Get:/endpoints/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaEndpoint2`](#azurespeechfullapischemaendpoint2)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechEndpointsGeneratedClient.SpeechToTextEndpointsGet
```

##### SpeechToTextEndpointsList()

```ts
SpeechToTextEndpointsList(...args): Promise<AzureSpeechFullApiSchemaPaginatedEndpoints2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Endpoints_List:/endpoints"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedEndpoints2`](#azurespeechfullapischemapaginatedendpoints2)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechEndpointsGeneratedClient.SpeechToTextEndpointsList
```

##### SpeechToTextEndpointsListSupportedLocales()

```ts
SpeechToTextEndpointsListSupportedLocales(...args): Promise<readonly string[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales"`\>\] |

###### Returns

`Promise`\<readonly `string`[]\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechEndpointsGeneratedClient.SpeechToTextEndpointsListSupportedLocales
```

##### SpeechToTextEndpointsUpdate()

```ts
SpeechToTextEndpointsUpdate(...args): Promise<AzureSpeechFullApiSchemaEndpoint2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Endpoints_Update:/endpoints/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaEndpoint2`](#azurespeechfullapischemaendpoint2)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechEndpointsGeneratedClient.SpeechToTextEndpointsUpdate
```

##### SpeechToTextEvaluationsCreate()

```ts
SpeechToTextEvaluationsCreate(...args): Promise<AzureSpeechFullApiSchemaEvaluation>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Evaluations_Create:/evaluations"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaEvaluation`](#azurespeechfullapischemaevaluation)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient.SpeechToTextEvaluationsCreate
```

##### SpeechToTextEvaluationsDelete()

```ts
SpeechToTextEvaluationsDelete(...args): Promise<AzureSpeechFullApiSchemaError>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Evaluations_Delete:/evaluations/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaError`](#azurespeechfullapischemaerror)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient.SpeechToTextEvaluationsDelete
```

##### SpeechToTextEvaluationsGet()

```ts
SpeechToTextEvaluationsGet(...args): Promise<AzureSpeechFullApiSchemaEvaluation>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Evaluations_Get:/evaluations/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaEvaluation`](#azurespeechfullapischemaevaluation)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient.SpeechToTextEvaluationsGet
```

##### SpeechToTextEvaluationsGetFile()

```ts
SpeechToTextEvaluationsGetFile(...args): Promise<AzureSpeechFullApiSchemaFile>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaFile`](#azurespeechfullapischemafile)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient.SpeechToTextEvaluationsGetFile
```

##### SpeechToTextEvaluationsList()

```ts
SpeechToTextEvaluationsList(...args): Promise<AzureSpeechFullApiSchemaPaginatedEvaluations>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Evaluations_List:/evaluations"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedEvaluations`](#azurespeechfullapischemapaginatedevaluations)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient.SpeechToTextEvaluationsList
```

##### SpeechToTextEvaluationsListFiles()

```ts
SpeechToTextEvaluationsListFiles(...args): Promise<AzureSpeechFullApiSchemaPaginatedFiles>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedFiles`](#azurespeechfullapischemapaginatedfiles)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient.SpeechToTextEvaluationsListFiles
```

##### SpeechToTextEvaluationsListSupportedLocales()

```ts
SpeechToTextEvaluationsListSupportedLocales(...args): Promise<readonly string[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales"`\>\] |

###### Returns

`Promise`\<readonly `string`[]\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient.SpeechToTextEvaluationsListSupportedLocales
```

##### SpeechToTextEvaluationsUpdate()

```ts
SpeechToTextEvaluationsUpdate(...args): Promise<AzureSpeechFullApiSchemaEvaluation>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Evaluations_Update:/evaluations/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaEvaluation`](#azurespeechfullapischemaevaluation)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelEvaluationsGeneratedClient.SpeechToTextEvaluationsUpdate
```

##### SpeechToTextModelsAuthorizeCopy()

```ts
SpeechToTextModelsAuthorizeCopy(...args): Promise<AzureSpeechFullApiSchemaModelCopyAuthorization>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Models_AuthorizeCopy:/models:authorizecopy"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaModelCopyAuthorization`](#azurespeechfullapischemamodelcopyauthorization)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelsGeneratedClient.SpeechToTextModelsAuthorizeCopy
```

##### SpeechToTextModelsCopy()

```ts
SpeechToTextModelsCopy(...args): Promise<AzureSpeechFullApiSchemaOperation3>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Models_Copy:/models/{id}:copy"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaOperation3`](#azurespeechfullapischemaoperation3)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelsGeneratedClient.SpeechToTextModelsCopy
```

##### SpeechToTextModelsCreate()

```ts
SpeechToTextModelsCreate(...args): Promise<AzureSpeechFullApiSchemaSharedModel>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Models_Create:/models"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaSharedModel`](#azurespeechfullapischemasharedmodel)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelsGeneratedClient.SpeechToTextModelsCreate
```

##### SpeechToTextModelsDelete()

```ts
SpeechToTextModelsDelete(...args): Promise<AzureSpeechFullApiSchemaError>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Models_Delete:/models/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaError`](#azurespeechfullapischemaerror)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelsGeneratedClient.SpeechToTextModelsDelete
```

##### SpeechToTextModelsGetBaseModel()

```ts
SpeechToTextModelsGetBaseModel(...args): Promise<AzureSpeechFullApiSchemaSharedModel>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Models_GetBaseModel:/models/base/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaSharedModel`](#azurespeechfullapischemasharedmodel)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelsGeneratedClient.SpeechToTextModelsGetBaseModel
```

##### SpeechToTextModelsGetBaseModelManifest()

```ts
SpeechToTextModelsGetBaseModelManifest(...args): Promise<AzureSpeechFullApiSchemaModelManifest>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaModelManifest`](#azurespeechfullapischemamodelmanifest)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelsGeneratedClient.SpeechToTextModelsGetBaseModelManifest
```

##### SpeechToTextModelsGetCustomModel()

```ts
SpeechToTextModelsGetCustomModel(...args): Promise<AzureSpeechFullApiSchemaSharedModel>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Models_GetCustomModel:/models/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaSharedModel`](#azurespeechfullapischemasharedmodel)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelsGeneratedClient.SpeechToTextModelsGetCustomModel
```

##### SpeechToTextModelsGetCustomModelManifest()

```ts
SpeechToTextModelsGetCustomModelManifest(...args): Promise<AzureSpeechFullApiSchemaModelManifest>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaModelManifest`](#azurespeechfullapischemamodelmanifest)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelsGeneratedClient.SpeechToTextModelsGetCustomModelManifest
```

##### SpeechToTextModelsGetFile()

```ts
SpeechToTextModelsGetFile(...args): Promise<AzureSpeechFullApiSchemaFile>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Models_GetFile:/models/{id}/files/{fileId}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaFile`](#azurespeechfullapischemafile)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelsGeneratedClient.SpeechToTextModelsGetFile
```

##### SpeechToTextModelsListBaseModels()

```ts
SpeechToTextModelsListBaseModels(...args): Promise<AzureSpeechFullApiSchemaPaginatedBaseModels>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Models_ListBaseModels:/models/base"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedBaseModels`](#azurespeechfullapischemapaginatedbasemodels)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelsGeneratedClient.SpeechToTextModelsListBaseModels
```

##### SpeechToTextModelsListCustomModels()

```ts
SpeechToTextModelsListCustomModels(...args): Promise<AzureSpeechFullApiSchemaPaginatedCustomModels>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Models_ListCustomModels:/models"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedCustomModels`](#azurespeechfullapischemapaginatedcustommodels)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelsGeneratedClient.SpeechToTextModelsListCustomModels
```

##### SpeechToTextModelsListFiles()

```ts
SpeechToTextModelsListFiles(...args): Promise<AzureSpeechFullApiSchemaPaginatedFiles>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Models_ListFiles:/models/{id}/files"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedFiles`](#azurespeechfullapischemapaginatedfiles)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelsGeneratedClient.SpeechToTextModelsListFiles
```

##### SpeechToTextModelsListSupportedLocales()

```ts
SpeechToTextModelsListSupportedLocales(...args): Promise<readonly string[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Models_ListSupportedLocales:/models/locales"`\>\] |

###### Returns

`Promise`\<readonly `string`[]\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelsGeneratedClient.SpeechToTextModelsListSupportedLocales
```

##### SpeechToTextModelsUpdate()

```ts
SpeechToTextModelsUpdate(...args): Promise<AzureSpeechFullApiSchemaSharedModel>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Models_Update:/models/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaSharedModel`](#azurespeechfullapischemasharedmodel)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechModelsGeneratedClient.SpeechToTextModelsUpdate
```

##### SpeechToTextOperationsGetModelCopy()

```ts
SpeechToTextOperationsGetModelCopy(...args): Promise<AzureSpeechFullApiSchemaOperation3>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaOperation3`](#azurespeechfullapischemaoperation3)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechOperationsGeneratedClient.SpeechToTextOperationsGetModelCopy
```

##### SpeechToTextProjectsCreate()

```ts
SpeechToTextProjectsCreate(...args): Promise<AzureSpeechFullApiSchemaProject2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Projects_Create:/projects"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaProject2`](#azurespeechfullapischemaproject2)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechProjectsGeneratedClient.SpeechToTextProjectsCreate
```

##### SpeechToTextProjectsDelete()

```ts
SpeechToTextProjectsDelete(...args): Promise<AzureSpeechFullApiSchemaError>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Projects_Delete:/projects/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaError`](#azurespeechfullapischemaerror)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechProjectsGeneratedClient.SpeechToTextProjectsDelete
```

##### SpeechToTextProjectsGet()

```ts
SpeechToTextProjectsGet(...args): Promise<AzureSpeechFullApiSchemaProject2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Projects_Get:/projects/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaProject2`](#azurespeechfullapischemaproject2)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechProjectsGeneratedClient.SpeechToTextProjectsGet
```

##### SpeechToTextProjectsList()

```ts
SpeechToTextProjectsList(...args): Promise<AzureSpeechFullApiSchemaPaginatedProjects2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Projects_List:/projects"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedProjects2`](#azurespeechfullapischemapaginatedprojects2)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechProjectsGeneratedClient.SpeechToTextProjectsList
```

##### SpeechToTextProjectsListDatasets()

```ts
SpeechToTextProjectsListDatasets(...args): Promise<AzureSpeechFullApiSchemaPaginatedDatasets>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Projects_ListDatasets:/projects/{id}/datasets"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedDatasets`](#azurespeechfullapischemapaginateddatasets)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechProjectsGeneratedClient.SpeechToTextProjectsListDatasets
```

##### SpeechToTextProjectsListEndpoints()

```ts
SpeechToTextProjectsListEndpoints(...args): Promise<AzureSpeechFullApiSchemaPaginatedEndpoints2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedEndpoints2`](#azurespeechfullapischemapaginatedendpoints2)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechProjectsGeneratedClient.SpeechToTextProjectsListEndpoints
```

##### SpeechToTextProjectsListEvaluations()

```ts
SpeechToTextProjectsListEvaluations(...args): Promise<AzureSpeechFullApiSchemaPaginatedEvaluations>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedEvaluations`](#azurespeechfullapischemapaginatedevaluations)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechProjectsGeneratedClient.SpeechToTextProjectsListEvaluations
```

##### SpeechToTextProjectsListModels()

```ts
SpeechToTextProjectsListModels(...args): Promise<AzureSpeechFullApiSchemaPaginatedCustomModels>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Projects_ListModels:/projects/{id}/models"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedCustomModels`](#azurespeechfullapischemapaginatedcustommodels)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechProjectsGeneratedClient.SpeechToTextProjectsListModels
```

##### SpeechToTextProjectsListSupportedLocales()

```ts
SpeechToTextProjectsListSupportedLocales(...args): Promise<readonly string[]>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Projects_ListSupportedLocales:/projects/locales"`\>\] |

###### Returns

`Promise`\<readonly `string`[]\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechProjectsGeneratedClient.SpeechToTextProjectsListSupportedLocales
```

##### SpeechToTextProjectsListTranscriptions()

```ts
SpeechToTextProjectsListTranscriptions(...args): Promise<AzureSpeechFullApiSchemaPaginatedTranscriptions>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedTranscriptions`](#azurespeechfullapischemapaginatedtranscriptions)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechProjectsGeneratedClient.SpeechToTextProjectsListTranscriptions
```

##### SpeechToTextProjectsUpdate()

```ts
SpeechToTextProjectsUpdate(...args): Promise<AzureSpeechFullApiSchemaProject2>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Projects_Update:/projects/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaProject2`](#azurespeechfullapischemaproject2)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechProjectsGeneratedClient.SpeechToTextProjectsUpdate
```

##### SpeechToTextTranscriptionsDelete()

```ts
SpeechToTextTranscriptionsDelete(...args): Promise<AzureSpeechFullApiSchemaError>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Transcriptions_Delete:/transcriptions/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaError`](#azurespeechfullapischemaerror)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient.SpeechToTextTranscriptionsDelete
```

##### SpeechToTextTranscriptionsGet()

```ts
SpeechToTextTranscriptionsGet(...args): Promise<AzureSpeechFullApiSchemaTranscription>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Transcriptions_Get:/transcriptions/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaTranscription`](#azurespeechfullapischematranscription)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient.SpeechToTextTranscriptionsGet
```

##### SpeechToTextTranscriptionsGetFile()

```ts
SpeechToTextTranscriptionsGetFile(...args): Promise<AzureSpeechFullApiSchemaFile>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaFile`](#azurespeechfullapischemafile)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient.SpeechToTextTranscriptionsGetFile
```

##### SpeechToTextTranscriptionsList()

```ts
SpeechToTextTranscriptionsList(...args): Promise<AzureSpeechFullApiSchemaPaginatedTranscriptions>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Transcriptions_List:/transcriptions"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedTranscriptions`](#azurespeechfullapischemapaginatedtranscriptions)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient.SpeechToTextTranscriptionsList
```

##### SpeechToTextTranscriptionsListFiles()

```ts
SpeechToTextTranscriptionsListFiles(...args): Promise<AzureSpeechFullApiSchemaPaginatedFiles>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedFiles`](#azurespeechfullapischemapaginatedfiles)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient.SpeechToTextTranscriptionsListFiles
```

##### SpeechToTextTranscriptionsListSupportedLocales()

```ts
SpeechToTextTranscriptionsListSupportedLocales(...args): Promise<AzureSpeechFullApiSchemaTranscriptionLocales>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaTranscriptionLocales`](#azurespeechfullapischematranscriptionlocales)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient.SpeechToTextTranscriptionsListSupportedLocales
```

##### SpeechToTextTranscriptionsSubmit()

```ts
SpeechToTextTranscriptionsSubmit(...args): Promise<AzureSpeechFullApiSchemaTranscription>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Transcriptions_Submit:/transcriptions:submit"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaTranscription`](#azurespeechfullapischematranscription)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient.SpeechToTextTranscriptionsSubmit
```

##### SpeechToTextTranscriptionsTranscribe()

```ts
SpeechToTextTranscriptionsTranscribe(...args): Promise<AzureSpeechFullApiSchemaTranscribeResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaTranscribeResult`](#azurespeechfullapischematranscriberesult)\>

###### Inherited from

```ts
AzureSpeechFullApiTranscribeGeneratedClient.SpeechToTextTranscriptionsTranscribe
```

##### SpeechToTextTranscriptionsUpdate()

```ts
SpeechToTextTranscriptionsUpdate(...args): Promise<AzureSpeechFullApiSchemaTranscription>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:Transcriptions_Update:/transcriptions/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaTranscription`](#azurespeechfullapischematranscription)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechTranscriptionsGeneratedClient.SpeechToTextTranscriptionsUpdate
```

##### SpeechToTextWebHooksCreate()

```ts
SpeechToTextWebHooksCreate(...args): Promise<AzureSpeechFullApiSchemaWebHook>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:WebHooks_Create:/webhooks"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaWebHook`](#azurespeechfullapischemawebhook)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechWebHooksGeneratedClient.SpeechToTextWebHooksCreate
```

##### SpeechToTextWebHooksDelete()

```ts
SpeechToTextWebHooksDelete(...args): Promise<AzureSpeechFullApiSchemaError>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:WebHooks_Delete:/webhooks/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaError`](#azurespeechfullapischemaerror)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechWebHooksGeneratedClient.SpeechToTextWebHooksDelete
```

##### SpeechToTextWebHooksGet()

```ts
SpeechToTextWebHooksGet(...args): Promise<AzureSpeechFullApiSchemaWebHook>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:WebHooks_Get:/webhooks/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaWebHook`](#azurespeechfullapischemawebhook)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechWebHooksGeneratedClient.SpeechToTextWebHooksGet
```

##### SpeechToTextWebHooksList()

```ts
SpeechToTextWebHooksList(...args): Promise<AzureSpeechFullApiSchemaPaginatedWebHooks>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:WebHooks_List:/webhooks"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaPaginatedWebHooks`](#azurespeechfullapischemapaginatedwebhooks)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechWebHooksGeneratedClient.SpeechToTextWebHooksList
```

##### SpeechToTextWebHooksPing()

```ts
SpeechToTextWebHooksPing(...args): Promise<AzureSpeechFullApiSchemaError>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:WebHooks_Ping:/webhooks/{id}:ping"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaError`](#azurespeechfullapischemaerror)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechWebHooksGeneratedClient.SpeechToTextWebHooksPing
```

##### SpeechToTextWebHooksTest()

```ts
SpeechToTextWebHooksTest(...args): Promise<AzureSpeechFullApiSchemaError>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:WebHooks_Test:/webhooks/{id}:test"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaError`](#azurespeechfullapischemaerror)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechWebHooksGeneratedClient.SpeechToTextWebHooksTest
```

##### SpeechToTextWebHooksUpdate()

```ts
SpeechToTextWebHooksUpdate(...args): Promise<AzureSpeechFullApiSchemaWebHook>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"speech-to-text:WebHooks_Update:/webhooks/{id}"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaWebHook`](#azurespeechfullapischemawebhook)\>

###### Inherited from

```ts
AzureSpeechFullApiCustomSpeechWebHooksGeneratedClient.SpeechToTextWebHooksUpdate
```

##### TranscriptionTranscribe()

```ts
TranscriptionTranscribe(...args): Promise<AzureSpeechFullApiSchemaTranscriptionResult>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`AzureSpeechFullApiOperationInput`\<`"transcription:Transcribe:/transcriptions:transcribe"`\>\] |

###### Returns

`Promise`\<[`AzureSpeechFullApiSchemaTranscriptionResult`](#azurespeechfullapischematranscriptionresult)\>

###### Inherited from

```ts
AzureSpeechFullApiTranscriptionsTranscribeGeneratedClient.TranscriptionTranscribe
```

***

### AzureSpeechFullApiOperation

#### Properties

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
method: AzureSpeechFullApiOperationMethod;
```

##### operationId

```ts
operationId: string;
```

##### path

```ts
path: string;
```

##### requestContentTypes

```ts
requestContentTypes: readonly string[];
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

##### summary

```ts
summary: string;
```

##### tags

```ts
tags: readonly string[];
```

***

### AzureSpeechFullApiOperationQueryMap

#### Properties

##### batch-text-to-speech:BatchSyntheses\_Create:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### batch-text-to-speech:BatchSyntheses\_Delete:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### batch-text-to-speech:BatchSyntheses\_Get:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### batch-text-to-speech:BatchSyntheses\_List:/batchsyntheses

```ts
batch-text-to-speech:BatchSyntheses_List:/batchsyntheses: {
  api-version: string;
  maxpagesize?: number;
  skip?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### maxpagesize?

```ts
optional maxpagesize?: number;
```

###### skip?

```ts
optional skip?: number;
```

##### batch-text-to-speech:Operations\_Get:/operations/\{id\}

```ts
batch-text-to-speech:Operations_Get:/operations/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:BaseModels\_List:/basemodels

```ts
custom-text-to-speech:BaseModels_List:/basemodels: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Consents\_Create:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Create:/consents/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Consents\_Delete:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Delete:/consents/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Consents\_Get:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Get:/consents/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Consents\_List:/consents

```ts
custom-text-to-speech:Consents_List:/consents: {
  api-version: string;
  filter?: string;
  maxpagesize?: number;
  skip?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### maxpagesize?

```ts
optional maxpagesize?: number;
```

###### skip?

```ts
optional skip?: number;
```

##### custom-text-to-speech:Consents\_Post:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Post:/consents/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Endpoints\_Create:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Create:/endpoints/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Endpoints\_Delete:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Delete:/endpoints/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Endpoints\_Get:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Get:/endpoints/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Endpoints\_List:/endpoints

```ts
custom-text-to-speech:Endpoints_List:/endpoints: {
  api-version: string;
  filter?: string;
  maxpagesize?: number;
  skip?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### maxpagesize?

```ts
optional maxpagesize?: number;
```

###### skip?

```ts
optional skip?: number;
```

##### custom-text-to-speech:Endpoints\_Resume:/endpoints/\{id\}:resume

```ts
custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Endpoints\_Suspend:/endpoints/\{id\}:suspend

```ts
custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Models\_Create:/models/\{id\}

```ts
custom-text-to-speech:Models_Create:/models/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Models\_Delete:/models/\{id\}

```ts
custom-text-to-speech:Models_Delete:/models/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Models\_Get:/models/\{id\}

```ts
custom-text-to-speech:Models_Get:/models/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Models\_List:/models

```ts
custom-text-to-speech:Models_List:/models: {
  api-version: string;
  filter?: string;
  maxpagesize?: number;
  skip?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### maxpagesize?

```ts
optional maxpagesize?: number;
```

###### skip?

```ts
optional skip?: number;
```

##### custom-text-to-speech:Models\_ListRecipes:/modelrecipes

```ts
custom-text-to-speech:Models_ListRecipes:/modelrecipes: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Operations\_Get:/operations/\{id\}

```ts
custom-text-to-speech:Operations_Get:/operations/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:PersonalVoices\_Create:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:PersonalVoices\_Delete:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:PersonalVoices\_Get:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:PersonalVoices\_List:/personalvoices

```ts
custom-text-to-speech:PersonalVoices_List:/personalvoices: {
  api-version: string;
  filter?: string;
  maxpagesize?: number;
  skip?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### maxpagesize?

```ts
optional maxpagesize?: number;
```

###### skip?

```ts
optional skip?: number;
```

##### custom-text-to-speech:PersonalVoices\_Post:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Projects\_Create:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Create:/projects/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Projects\_Delete:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Delete:/projects/{id}: {
  api-version: string;
  forceDelete?: boolean;
};
```

###### api-version

```ts
api-version: string;
```

###### forceDelete?

```ts
optional forceDelete?: boolean;
```

##### custom-text-to-speech:Projects\_Get:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Get:/projects/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:Projects\_List:/projects

```ts
custom-text-to-speech:Projects_List:/projects: {
  api-version: string;
  filter?: string;
  maxpagesize?: number;
  skip?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### maxpagesize?

```ts
optional maxpagesize?: number;
```

###### skip?

```ts
optional skip?: number;
```

##### custom-text-to-speech:TrainingSets\_Create:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:TrainingSets\_Delete:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:TrainingSets\_Get:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### custom-text-to-speech:TrainingSets\_List:/trainingsets

```ts
custom-text-to-speech:TrainingSets_List:/trainingsets: {
  api-version: string;
  filter?: string;
  maxpagesize?: number;
  skip?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### maxpagesize?

```ts
optional maxpagesize?: number;
```

###### skip?

```ts
optional skip?: number;
```

##### custom-text-to-speech:TrainingSets\_UploadData:/trainingsets/\{id\}:upload

```ts
custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Datasets\_CommitBlocks:/datasets/\{id\}/blocks:commit

```ts
speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Datasets\_Create:/datasets

```ts
speech-to-text:Datasets_Create:/datasets: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Datasets\_Delete:/datasets/\{id\}

```ts
speech-to-text:Datasets_Delete:/datasets/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Datasets\_Get:/datasets/\{id\}

```ts
speech-to-text:Datasets_Get:/datasets/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Datasets\_GetBlocks:/datasets/\{id\}/blocks

```ts
speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Datasets\_GetFile:/datasets/\{id\}/files/\{fileId\}

```ts
speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}: {
  api-version: string;
  sasLifetimeMinutes?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### sasLifetimeMinutes?

```ts
optional sasLifetimeMinutes?: number;
```

##### speech-to-text:Datasets\_List:/datasets

```ts
speech-to-text:Datasets_List:/datasets: {
  api-version: string;
  filter?: string;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Datasets\_ListFiles:/datasets/\{id\}/files

```ts
speech-to-text:Datasets_ListFiles:/datasets/{id}/files: {
  api-version: string;
  filter?: string;
  sasLifetimeMinutes?: number;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### sasLifetimeMinutes?

```ts
optional sasLifetimeMinutes?: number;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Datasets\_ListSupportedLocales:/datasets/locales

```ts
speech-to-text:Datasets_ListSupportedLocales:/datasets/locales: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Datasets\_Update:/datasets/\{id\}

```ts
speech-to-text:Datasets_Update:/datasets/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Datasets\_UploadBlock:/datasets/\{id\}/blocks

```ts
speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks: {
  api-version: string;
  blockid: string;
};
```

###### api-version

```ts
api-version: string;
```

###### blockid

```ts
blockid: string;
```

##### speech-to-text:Endpoints\_Create:/endpoints

```ts
speech-to-text:Endpoints_Create:/endpoints: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Endpoints\_Delete:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Delete:/endpoints/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Endpoints\_Get:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Get:/endpoints/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Endpoints\_List:/endpoints

```ts
speech-to-text:Endpoints_List:/endpoints: {
  api-version: string;
  filter?: string;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Endpoints\_ListSupportedLocales:/endpoints/locales

```ts
speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Endpoints\_Update:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Update:/endpoints/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Evaluations\_Create:/evaluations

```ts
speech-to-text:Evaluations_Create:/evaluations: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Evaluations\_Delete:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Delete:/evaluations/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Evaluations\_Get:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Get:/evaluations/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Evaluations\_GetFile:/evaluations/\{id\}/files/\{fileId\}

```ts
speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}: {
  api-version: string;
  sasLifetimeMinutes?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### sasLifetimeMinutes?

```ts
optional sasLifetimeMinutes?: number;
```

##### speech-to-text:Evaluations\_List:/evaluations

```ts
speech-to-text:Evaluations_List:/evaluations: {
  api-version: string;
  filter?: string;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Evaluations\_ListFiles:/evaluations/\{id\}/files

```ts
speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files: {
  api-version: string;
  filter?: string;
  sasLifetimeMinutes?: number;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### sasLifetimeMinutes?

```ts
optional sasLifetimeMinutes?: number;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Evaluations\_ListSupportedLocales:/evaluations/locales

```ts
speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Evaluations\_Update:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Update:/evaluations/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Models\_AuthorizeCopy:/models:authorizecopy

```ts
speech-to-text:Models_AuthorizeCopy:/models:authorizecopy: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Models\_Copy:/models/\{id\}:copy

```ts
speech-to-text:Models_Copy:/models/{id}:copy: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Models\_Create:/models

```ts
speech-to-text:Models_Create:/models: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Models\_Delete:/models/\{id\}

```ts
speech-to-text:Models_Delete:/models/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Models\_GetBaseModel:/models/base/\{id\}

```ts
speech-to-text:Models_GetBaseModel:/models/base/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Models\_GetBaseModelManifest:/models/base/\{id\}/manifest

```ts
speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest: {
  api-version: string;
  sasLifetimeMinutes: number;
};
```

###### api-version

```ts
api-version: string;
```

###### sasLifetimeMinutes

```ts
sasLifetimeMinutes: number;
```

##### speech-to-text:Models\_GetCustomModel:/models/\{id\}

```ts
speech-to-text:Models_GetCustomModel:/models/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Models\_GetCustomModelManifest:/models/\{id\}/manifest

```ts
speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest: {
  api-version: string;
  sasLifetimeMinutes: number;
};
```

###### api-version

```ts
api-version: string;
```

###### sasLifetimeMinutes

```ts
sasLifetimeMinutes: number;
```

##### speech-to-text:Models\_GetFile:/models/\{id\}/files/\{fileId\}

```ts
speech-to-text:Models_GetFile:/models/{id}/files/{fileId}: {
  api-version: string;
  sasLifetimeMinutes?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### sasLifetimeMinutes?

```ts
optional sasLifetimeMinutes?: number;
```

##### speech-to-text:Models\_ListBaseModels:/models/base

```ts
speech-to-text:Models_ListBaseModels:/models/base: {
  api-version: string;
  filter?: string;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Models\_ListCustomModels:/models

```ts
speech-to-text:Models_ListCustomModels:/models: {
  api-version: string;
  filter?: string;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Models\_ListFiles:/models/\{id\}/files

```ts
speech-to-text:Models_ListFiles:/models/{id}/files: {
  api-version: string;
  filter?: string;
  sasLifetimeMinutes?: number;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### sasLifetimeMinutes?

```ts
optional sasLifetimeMinutes?: number;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Models\_ListSupportedLocales:/models/locales

```ts
speech-to-text:Models_ListSupportedLocales:/models/locales: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Models\_Update:/models/\{id\}

```ts
speech-to-text:Models_Update:/models/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Operations\_GetModelCopy:/operations/models/copy/\{id\}

```ts
speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Projects\_Create:/projects

```ts
speech-to-text:Projects_Create:/projects: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Projects\_Delete:/projects/\{id\}

```ts
speech-to-text:Projects_Delete:/projects/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Projects\_Get:/projects/\{id\}

```ts
speech-to-text:Projects_Get:/projects/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Projects\_List:/projects

```ts
speech-to-text:Projects_List:/projects: {
  api-version: string;
  filter?: string;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Projects\_ListDatasets:/projects/\{id\}/datasets

```ts
speech-to-text:Projects_ListDatasets:/projects/{id}/datasets: {
  api-version: string;
  filter?: string;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Projects\_ListEndpoints:/projects/\{id\}/endpoints

```ts
speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints: {
  api-version: string;
  filter?: string;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Projects\_ListEvaluations:/projects/\{id\}/evaluations

```ts
speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations: {
  api-version: string;
  filter?: string;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Projects\_ListModels:/projects/\{id\}/models

```ts
speech-to-text:Projects_ListModels:/projects/{id}/models: {
  api-version: string;
  filter?: string;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Projects\_ListSupportedLocales:/projects/locales

```ts
speech-to-text:Projects_ListSupportedLocales:/projects/locales: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Projects\_ListTranscriptions:/projects/\{id\}/transcriptions

```ts
speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions: {
  api-version: string;
  filter?: string;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Projects\_Update:/projects/\{id\}

```ts
speech-to-text:Projects_Update:/projects/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Transcriptions\_Delete:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Delete:/transcriptions/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Transcriptions\_Get:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Get:/transcriptions/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Transcriptions\_GetFile:/transcriptions/\{id\}/files/\{fileId\}

```ts
speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}: {
  api-version: string;
  sasLifetimeMinutes?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### sasLifetimeMinutes?

```ts
optional sasLifetimeMinutes?: number;
```

##### speech-to-text:Transcriptions\_List:/transcriptions

```ts
speech-to-text:Transcriptions_List:/transcriptions: {
  api-version: string;
  filter?: string;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Transcriptions\_ListFiles:/transcriptions/\{id\}/files

```ts
speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files: {
  api-version: string;
  filter?: string;
  sasLifetimeMinutes?: number;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### sasLifetimeMinutes?

```ts
optional sasLifetimeMinutes?: number;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:Transcriptions\_ListSupportedLocales:/transcriptions/locales

```ts
speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Transcriptions\_Submit:/transcriptions:submit

```ts
speech-to-text:Transcriptions_Submit:/transcriptions:submit: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Transcriptions\_Transcribe:/transcriptions:transcribe

```ts
speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:Transcriptions\_Update:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Update:/transcriptions/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:WebHooks\_Create:/webhooks

```ts
speech-to-text:WebHooks_Create:/webhooks: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:WebHooks\_Delete:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Delete:/webhooks/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:WebHooks\_Get:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Get:/webhooks/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:WebHooks\_List:/webhooks

```ts
speech-to-text:WebHooks_List:/webhooks: {
  api-version: string;
  filter?: string;
  skip?: number;
  top?: number;
};
```

###### api-version

```ts
api-version: string;
```

###### filter?

```ts
optional filter?: string;
```

###### skip?

```ts
optional skip?: number;
```

###### top?

```ts
optional top?: number;
```

##### speech-to-text:WebHooks\_Ping:/webhooks/\{id\}:ping

```ts
speech-to-text:WebHooks_Ping:/webhooks/{id}:ping: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:WebHooks\_Test:/webhooks/\{id\}:test

```ts
speech-to-text:WebHooks_Test:/webhooks/{id}:test: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### speech-to-text:WebHooks\_Update:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Update:/webhooks/{id}: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

##### transcription:Transcribe:/transcriptions:transcribe

```ts
transcription:Transcribe:/transcriptions:transcribe: {
  api-version: string;
};
```

###### api-version

```ts
api-version: string;
```

***

### AzureSpeechFullApiOperationQueryRequiredMap

#### Properties

##### batch-text-to-speech:BatchSyntheses\_Create:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}: true;
```

##### batch-text-to-speech:BatchSyntheses\_Delete:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}: true;
```

##### batch-text-to-speech:BatchSyntheses\_Get:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}: true;
```

##### batch-text-to-speech:BatchSyntheses\_List:/batchsyntheses

```ts
batch-text-to-speech:BatchSyntheses_List:/batchsyntheses: true;
```

##### batch-text-to-speech:Operations\_Get:/operations/\{id\}

```ts
batch-text-to-speech:Operations_Get:/operations/{id}: true;
```

##### custom-text-to-speech:BaseModels\_List:/basemodels

```ts
custom-text-to-speech:BaseModels_List:/basemodels: true;
```

##### custom-text-to-speech:Consents\_Create:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Create:/consents/{id}: true;
```

##### custom-text-to-speech:Consents\_Delete:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Delete:/consents/{id}: true;
```

##### custom-text-to-speech:Consents\_Get:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Get:/consents/{id}: true;
```

##### custom-text-to-speech:Consents\_List:/consents

```ts
custom-text-to-speech:Consents_List:/consents: true;
```

##### custom-text-to-speech:Consents\_Post:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Post:/consents/{id}: true;
```

##### custom-text-to-speech:Endpoints\_Create:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Create:/endpoints/{id}: true;
```

##### custom-text-to-speech:Endpoints\_Delete:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Delete:/endpoints/{id}: true;
```

##### custom-text-to-speech:Endpoints\_Get:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Get:/endpoints/{id}: true;
```

##### custom-text-to-speech:Endpoints\_List:/endpoints

```ts
custom-text-to-speech:Endpoints_List:/endpoints: true;
```

##### custom-text-to-speech:Endpoints\_Resume:/endpoints/\{id\}:resume

```ts
custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume: true;
```

##### custom-text-to-speech:Endpoints\_Suspend:/endpoints/\{id\}:suspend

```ts
custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend: true;
```

##### custom-text-to-speech:Models\_Create:/models/\{id\}

```ts
custom-text-to-speech:Models_Create:/models/{id}: true;
```

##### custom-text-to-speech:Models\_Delete:/models/\{id\}

```ts
custom-text-to-speech:Models_Delete:/models/{id}: true;
```

##### custom-text-to-speech:Models\_Get:/models/\{id\}

```ts
custom-text-to-speech:Models_Get:/models/{id}: true;
```

##### custom-text-to-speech:Models\_List:/models

```ts
custom-text-to-speech:Models_List:/models: true;
```

##### custom-text-to-speech:Models\_ListRecipes:/modelrecipes

```ts
custom-text-to-speech:Models_ListRecipes:/modelrecipes: true;
```

##### custom-text-to-speech:Operations\_Get:/operations/\{id\}

```ts
custom-text-to-speech:Operations_Get:/operations/{id}: true;
```

##### custom-text-to-speech:PersonalVoices\_Create:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}: true;
```

##### custom-text-to-speech:PersonalVoices\_Delete:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}: true;
```

##### custom-text-to-speech:PersonalVoices\_Get:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}: true;
```

##### custom-text-to-speech:PersonalVoices\_List:/personalvoices

```ts
custom-text-to-speech:PersonalVoices_List:/personalvoices: true;
```

##### custom-text-to-speech:PersonalVoices\_Post:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}: true;
```

##### custom-text-to-speech:Projects\_Create:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Create:/projects/{id}: true;
```

##### custom-text-to-speech:Projects\_Delete:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Delete:/projects/{id}: true;
```

##### custom-text-to-speech:Projects\_Get:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Get:/projects/{id}: true;
```

##### custom-text-to-speech:Projects\_List:/projects

```ts
custom-text-to-speech:Projects_List:/projects: true;
```

##### custom-text-to-speech:TrainingSets\_Create:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}: true;
```

##### custom-text-to-speech:TrainingSets\_Delete:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}: true;
```

##### custom-text-to-speech:TrainingSets\_Get:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}: true;
```

##### custom-text-to-speech:TrainingSets\_List:/trainingsets

```ts
custom-text-to-speech:TrainingSets_List:/trainingsets: true;
```

##### custom-text-to-speech:TrainingSets\_UploadData:/trainingsets/\{id\}:upload

```ts
custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload: true;
```

##### speech-to-text:Datasets\_CommitBlocks:/datasets/\{id\}/blocks:commit

```ts
speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit: true;
```

##### speech-to-text:Datasets\_Create:/datasets

```ts
speech-to-text:Datasets_Create:/datasets: true;
```

##### speech-to-text:Datasets\_Delete:/datasets/\{id\}

```ts
speech-to-text:Datasets_Delete:/datasets/{id}: true;
```

##### speech-to-text:Datasets\_Get:/datasets/\{id\}

```ts
speech-to-text:Datasets_Get:/datasets/{id}: true;
```

##### speech-to-text:Datasets\_GetBlocks:/datasets/\{id\}/blocks

```ts
speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks: true;
```

##### speech-to-text:Datasets\_GetFile:/datasets/\{id\}/files/\{fileId\}

```ts
speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}: true;
```

##### speech-to-text:Datasets\_List:/datasets

```ts
speech-to-text:Datasets_List:/datasets: true;
```

##### speech-to-text:Datasets\_ListFiles:/datasets/\{id\}/files

```ts
speech-to-text:Datasets_ListFiles:/datasets/{id}/files: true;
```

##### speech-to-text:Datasets\_ListSupportedLocales:/datasets/locales

```ts
speech-to-text:Datasets_ListSupportedLocales:/datasets/locales: true;
```

##### speech-to-text:Datasets\_Update:/datasets/\{id\}

```ts
speech-to-text:Datasets_Update:/datasets/{id}: true;
```

##### speech-to-text:Datasets\_UploadBlock:/datasets/\{id\}/blocks

```ts
speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks: true;
```

##### speech-to-text:Endpoints\_Create:/endpoints

```ts
speech-to-text:Endpoints_Create:/endpoints: true;
```

##### speech-to-text:Endpoints\_Delete:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Delete:/endpoints/{id}: true;
```

##### speech-to-text:Endpoints\_Get:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Get:/endpoints/{id}: true;
```

##### speech-to-text:Endpoints\_List:/endpoints

```ts
speech-to-text:Endpoints_List:/endpoints: true;
```

##### speech-to-text:Endpoints\_ListSupportedLocales:/endpoints/locales

```ts
speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales: true;
```

##### speech-to-text:Endpoints\_Update:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Update:/endpoints/{id}: true;
```

##### speech-to-text:Evaluations\_Create:/evaluations

```ts
speech-to-text:Evaluations_Create:/evaluations: true;
```

##### speech-to-text:Evaluations\_Delete:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Delete:/evaluations/{id}: true;
```

##### speech-to-text:Evaluations\_Get:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Get:/evaluations/{id}: true;
```

##### speech-to-text:Evaluations\_GetFile:/evaluations/\{id\}/files/\{fileId\}

```ts
speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}: true;
```

##### speech-to-text:Evaluations\_List:/evaluations

```ts
speech-to-text:Evaluations_List:/evaluations: true;
```

##### speech-to-text:Evaluations\_ListFiles:/evaluations/\{id\}/files

```ts
speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files: true;
```

##### speech-to-text:Evaluations\_ListSupportedLocales:/evaluations/locales

```ts
speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales: true;
```

##### speech-to-text:Evaluations\_Update:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Update:/evaluations/{id}: true;
```

##### speech-to-text:Models\_AuthorizeCopy:/models:authorizecopy

```ts
speech-to-text:Models_AuthorizeCopy:/models:authorizecopy: true;
```

##### speech-to-text:Models\_Copy:/models/\{id\}:copy

```ts
speech-to-text:Models_Copy:/models/{id}:copy: true;
```

##### speech-to-text:Models\_Create:/models

```ts
speech-to-text:Models_Create:/models: true;
```

##### speech-to-text:Models\_Delete:/models/\{id\}

```ts
speech-to-text:Models_Delete:/models/{id}: true;
```

##### speech-to-text:Models\_GetBaseModel:/models/base/\{id\}

```ts
speech-to-text:Models_GetBaseModel:/models/base/{id}: true;
```

##### speech-to-text:Models\_GetBaseModelManifest:/models/base/\{id\}/manifest

```ts
speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest: true;
```

##### speech-to-text:Models\_GetCustomModel:/models/\{id\}

```ts
speech-to-text:Models_GetCustomModel:/models/{id}: true;
```

##### speech-to-text:Models\_GetCustomModelManifest:/models/\{id\}/manifest

```ts
speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest: true;
```

##### speech-to-text:Models\_GetFile:/models/\{id\}/files/\{fileId\}

```ts
speech-to-text:Models_GetFile:/models/{id}/files/{fileId}: true;
```

##### speech-to-text:Models\_ListBaseModels:/models/base

```ts
speech-to-text:Models_ListBaseModels:/models/base: true;
```

##### speech-to-text:Models\_ListCustomModels:/models

```ts
speech-to-text:Models_ListCustomModels:/models: true;
```

##### speech-to-text:Models\_ListFiles:/models/\{id\}/files

```ts
speech-to-text:Models_ListFiles:/models/{id}/files: true;
```

##### speech-to-text:Models\_ListSupportedLocales:/models/locales

```ts
speech-to-text:Models_ListSupportedLocales:/models/locales: true;
```

##### speech-to-text:Models\_Update:/models/\{id\}

```ts
speech-to-text:Models_Update:/models/{id}: true;
```

##### speech-to-text:Operations\_GetModelCopy:/operations/models/copy/\{id\}

```ts
speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}: true;
```

##### speech-to-text:Projects\_Create:/projects

```ts
speech-to-text:Projects_Create:/projects: true;
```

##### speech-to-text:Projects\_Delete:/projects/\{id\}

```ts
speech-to-text:Projects_Delete:/projects/{id}: true;
```

##### speech-to-text:Projects\_Get:/projects/\{id\}

```ts
speech-to-text:Projects_Get:/projects/{id}: true;
```

##### speech-to-text:Projects\_List:/projects

```ts
speech-to-text:Projects_List:/projects: true;
```

##### speech-to-text:Projects\_ListDatasets:/projects/\{id\}/datasets

```ts
speech-to-text:Projects_ListDatasets:/projects/{id}/datasets: true;
```

##### speech-to-text:Projects\_ListEndpoints:/projects/\{id\}/endpoints

```ts
speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints: true;
```

##### speech-to-text:Projects\_ListEvaluations:/projects/\{id\}/evaluations

```ts
speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations: true;
```

##### speech-to-text:Projects\_ListModels:/projects/\{id\}/models

```ts
speech-to-text:Projects_ListModels:/projects/{id}/models: true;
```

##### speech-to-text:Projects\_ListSupportedLocales:/projects/locales

```ts
speech-to-text:Projects_ListSupportedLocales:/projects/locales: true;
```

##### speech-to-text:Projects\_ListTranscriptions:/projects/\{id\}/transcriptions

```ts
speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions: true;
```

##### speech-to-text:Projects\_Update:/projects/\{id\}

```ts
speech-to-text:Projects_Update:/projects/{id}: true;
```

##### speech-to-text:Transcriptions\_Delete:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Delete:/transcriptions/{id}: true;
```

##### speech-to-text:Transcriptions\_Get:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Get:/transcriptions/{id}: true;
```

##### speech-to-text:Transcriptions\_GetFile:/transcriptions/\{id\}/files/\{fileId\}

```ts
speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}: true;
```

##### speech-to-text:Transcriptions\_List:/transcriptions

```ts
speech-to-text:Transcriptions_List:/transcriptions: true;
```

##### speech-to-text:Transcriptions\_ListFiles:/transcriptions/\{id\}/files

```ts
speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files: true;
```

##### speech-to-text:Transcriptions\_ListSupportedLocales:/transcriptions/locales

```ts
speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales: true;
```

##### speech-to-text:Transcriptions\_Submit:/transcriptions:submit

```ts
speech-to-text:Transcriptions_Submit:/transcriptions:submit: true;
```

##### speech-to-text:Transcriptions\_Transcribe:/transcriptions:transcribe

```ts
speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe: true;
```

##### speech-to-text:Transcriptions\_Update:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Update:/transcriptions/{id}: true;
```

##### speech-to-text:WebHooks\_Create:/webhooks

```ts
speech-to-text:WebHooks_Create:/webhooks: true;
```

##### speech-to-text:WebHooks\_Delete:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Delete:/webhooks/{id}: true;
```

##### speech-to-text:WebHooks\_Get:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Get:/webhooks/{id}: true;
```

##### speech-to-text:WebHooks\_List:/webhooks

```ts
speech-to-text:WebHooks_List:/webhooks: true;
```

##### speech-to-text:WebHooks\_Ping:/webhooks/\{id\}:ping

```ts
speech-to-text:WebHooks_Ping:/webhooks/{id}:ping: true;
```

##### speech-to-text:WebHooks\_Test:/webhooks/\{id\}:test

```ts
speech-to-text:WebHooks_Test:/webhooks/{id}:test: true;
```

##### speech-to-text:WebHooks\_Update:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Update:/webhooks/{id}: true;
```

##### transcription:Transcribe:/transcriptions:transcribe

```ts
transcription:Transcribe:/transcriptions:transcribe: true;
```

***

### AzureSpeechFullApiOperationRequestBodyMap

#### Properties

##### batch-text-to-speech:BatchSyntheses\_Create:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}: AzureSpeechFullApiSchemaBatchSynthesis;
```

##### batch-text-to-speech:BatchSyntheses\_Delete:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}: never;
```

##### batch-text-to-speech:BatchSyntheses\_Get:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}: never;
```

##### batch-text-to-speech:BatchSyntheses\_List:/batchsyntheses

```ts
batch-text-to-speech:BatchSyntheses_List:/batchsyntheses: never;
```

##### batch-text-to-speech:Operations\_Get:/operations/\{id\}

```ts
batch-text-to-speech:Operations_Get:/operations/{id}: never;
```

##### custom-text-to-speech:BaseModels\_List:/basemodels

```ts
custom-text-to-speech:BaseModels_List:/basemodels: never;
```

##### custom-text-to-speech:Consents\_Create:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Create:/consents/{id}: AzureSpeechFullApiSchemaConsent;
```

##### custom-text-to-speech:Consents\_Delete:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Delete:/consents/{id}: never;
```

##### custom-text-to-speech:Consents\_Get:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Get:/consents/{id}: never;
```

##### custom-text-to-speech:Consents\_List:/consents

```ts
custom-text-to-speech:Consents_List:/consents: never;
```

##### custom-text-to-speech:Consents\_Post:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Post:/consents/{id}: {
  audiodata: AzureSpeechFullApiSchemaJsonValue;
  companyName: string;
  description?: string;
  displayName?: string;
  locale: string;
  projectId: string;
  properties?: string;
  voiceTalentName: string;
};
```

###### audiodata

```ts
audiodata: AzureSpeechFullApiSchemaJsonValue;
```

###### companyName

```ts
companyName: string;
```

###### description?

```ts
optional description?: string;
```

###### displayName?

```ts
optional displayName?: string;
```

###### locale

```ts
locale: string;
```

###### projectId

```ts
projectId: string;
```

###### properties?

```ts
optional properties?: string;
```

###### voiceTalentName

```ts
voiceTalentName: string;
```

##### custom-text-to-speech:Endpoints\_Create:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Create:/endpoints/{id}: AzureSpeechFullApiSchemaEndpoint;
```

##### custom-text-to-speech:Endpoints\_Delete:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Delete:/endpoints/{id}: never;
```

##### custom-text-to-speech:Endpoints\_Get:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Get:/endpoints/{id}: never;
```

##### custom-text-to-speech:Endpoints\_List:/endpoints

```ts
custom-text-to-speech:Endpoints_List:/endpoints: never;
```

##### custom-text-to-speech:Endpoints\_Resume:/endpoints/\{id\}:resume

```ts
custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume: never;
```

##### custom-text-to-speech:Endpoints\_Suspend:/endpoints/\{id\}:suspend

```ts
custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend: never;
```

##### custom-text-to-speech:Models\_Create:/models/\{id\}

```ts
custom-text-to-speech:Models_Create:/models/{id}: AzureSpeechFullApiSchemaModel;
```

##### custom-text-to-speech:Models\_Delete:/models/\{id\}

```ts
custom-text-to-speech:Models_Delete:/models/{id}: never;
```

##### custom-text-to-speech:Models\_Get:/models/\{id\}

```ts
custom-text-to-speech:Models_Get:/models/{id}: never;
```

##### custom-text-to-speech:Models\_List:/models

```ts
custom-text-to-speech:Models_List:/models: never;
```

##### custom-text-to-speech:Models\_ListRecipes:/modelrecipes

```ts
custom-text-to-speech:Models_ListRecipes:/modelrecipes: never;
```

##### custom-text-to-speech:Operations\_Get:/operations/\{id\}

```ts
custom-text-to-speech:Operations_Get:/operations/{id}: never;
```

##### custom-text-to-speech:PersonalVoices\_Create:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}: AzureSpeechFullApiSchemaPersonalVoice;
```

##### custom-text-to-speech:PersonalVoices\_Delete:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}: never;
```

##### custom-text-to-speech:PersonalVoices\_Get:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}: never;
```

##### custom-text-to-speech:PersonalVoices\_List:/personalvoices

```ts
custom-text-to-speech:PersonalVoices_List:/personalvoices: never;
```

##### custom-text-to-speech:PersonalVoices\_Post:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}: {
  audioData?: AzureSpeechFullApiSchemaJsonValue;
  description?: string;
  displayName?: string;
  projectId: string;
  properties?: string;
};
```

###### audioData?

```ts
optional audioData?: AzureSpeechFullApiSchemaJsonValue;
```

###### description?

```ts
optional description?: string;
```

###### displayName?

```ts
optional displayName?: string;
```

###### projectId

```ts
projectId: string;
```

###### properties?

```ts
optional properties?: string;
```

##### custom-text-to-speech:Projects\_Create:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Create:/projects/{id}: AzureSpeechFullApiSchemaProject;
```

##### custom-text-to-speech:Projects\_Delete:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Delete:/projects/{id}: never;
```

##### custom-text-to-speech:Projects\_Get:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Get:/projects/{id}: never;
```

##### custom-text-to-speech:Projects\_List:/projects

```ts
custom-text-to-speech:Projects_List:/projects: never;
```

##### custom-text-to-speech:TrainingSets\_Create:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}: AzureSpeechFullApiSchemaTrainingSet;
```

##### custom-text-to-speech:TrainingSets\_Delete:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}: never;
```

##### custom-text-to-speech:TrainingSets\_Get:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}: never;
```

##### custom-text-to-speech:TrainingSets\_List:/trainingsets

```ts
custom-text-to-speech:TrainingSets_List:/trainingsets: never;
```

##### custom-text-to-speech:TrainingSets\_UploadData:/trainingsets/\{id\}:upload

```ts
custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload: AzureSpeechFullApiSchemaDataset;
```

##### speech-to-text:Datasets\_CommitBlocks:/datasets/\{id\}/blocks:commit

```ts
speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit: readonly AzureSpeechFullApiSchemaCommitBlocksEntry[];
```

##### speech-to-text:Datasets\_Create:/datasets

```ts
speech-to-text:Datasets_Create:/datasets: AzureSpeechFullApiSchemaDataset2;
```

##### speech-to-text:Datasets\_Delete:/datasets/\{id\}

```ts
speech-to-text:Datasets_Delete:/datasets/{id}: never;
```

##### speech-to-text:Datasets\_Get:/datasets/\{id\}

```ts
speech-to-text:Datasets_Get:/datasets/{id}: never;
```

##### speech-to-text:Datasets\_GetBlocks:/datasets/\{id\}/blocks

```ts
speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks: never;
```

##### speech-to-text:Datasets\_GetFile:/datasets/\{id\}/files/\{fileId\}

```ts
speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}: never;
```

##### speech-to-text:Datasets\_List:/datasets

```ts
speech-to-text:Datasets_List:/datasets: never;
```

##### speech-to-text:Datasets\_ListFiles:/datasets/\{id\}/files

```ts
speech-to-text:Datasets_ListFiles:/datasets/{id}/files: never;
```

##### speech-to-text:Datasets\_ListSupportedLocales:/datasets/locales

```ts
speech-to-text:Datasets_ListSupportedLocales:/datasets/locales: never;
```

##### speech-to-text:Datasets\_Update:/datasets/\{id\}

```ts
speech-to-text:Datasets_Update:/datasets/{id}: AzureSpeechFullApiSchemaDatasetUpdate;
```

##### speech-to-text:Datasets\_UploadBlock:/datasets/\{id\}/blocks

```ts
speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks: string;
```

##### speech-to-text:Endpoints\_Create:/endpoints

```ts
speech-to-text:Endpoints_Create:/endpoints: AzureSpeechFullApiSchemaEndpoint2;
```

##### speech-to-text:Endpoints\_Delete:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Delete:/endpoints/{id}: never;
```

##### speech-to-text:Endpoints\_Get:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Get:/endpoints/{id}: never;
```

##### speech-to-text:Endpoints\_List:/endpoints

```ts
speech-to-text:Endpoints_List:/endpoints: never;
```

##### speech-to-text:Endpoints\_ListSupportedLocales:/endpoints/locales

```ts
speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales: never;
```

##### speech-to-text:Endpoints\_Update:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Update:/endpoints/{id}: AzureSpeechFullApiSchemaEndpointUpdate;
```

##### speech-to-text:Evaluations\_Create:/evaluations

```ts
speech-to-text:Evaluations_Create:/evaluations: AzureSpeechFullApiSchemaEvaluation;
```

##### speech-to-text:Evaluations\_Delete:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Delete:/evaluations/{id}: never;
```

##### speech-to-text:Evaluations\_Get:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Get:/evaluations/{id}: never;
```

##### speech-to-text:Evaluations\_GetFile:/evaluations/\{id\}/files/\{fileId\}

```ts
speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}: never;
```

##### speech-to-text:Evaluations\_List:/evaluations

```ts
speech-to-text:Evaluations_List:/evaluations: never;
```

##### speech-to-text:Evaluations\_ListFiles:/evaluations/\{id\}/files

```ts
speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files: never;
```

##### speech-to-text:Evaluations\_ListSupportedLocales:/evaluations/locales

```ts
speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales: never;
```

##### speech-to-text:Evaluations\_Update:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Update:/evaluations/{id}: AzureSpeechFullApiSchemaEvaluationUpdate;
```

##### speech-to-text:Models\_AuthorizeCopy:/models:authorizecopy

```ts
speech-to-text:Models_AuthorizeCopy:/models:authorizecopy: AzureSpeechFullApiSchemaModelCopyAuthorizationDefinition;
```

##### speech-to-text:Models\_Copy:/models/\{id\}:copy

```ts
speech-to-text:Models_Copy:/models/{id}:copy: AzureSpeechFullApiSchemaModelCopyAuthorization;
```

##### speech-to-text:Models\_Create:/models

```ts
speech-to-text:Models_Create:/models: AzureSpeechFullApiSchemaSharedModel;
```

##### speech-to-text:Models\_Delete:/models/\{id\}

```ts
speech-to-text:Models_Delete:/models/{id}: never;
```

##### speech-to-text:Models\_GetBaseModel:/models/base/\{id\}

```ts
speech-to-text:Models_GetBaseModel:/models/base/{id}: never;
```

##### speech-to-text:Models\_GetBaseModelManifest:/models/base/\{id\}/manifest

```ts
speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest: never;
```

##### speech-to-text:Models\_GetCustomModel:/models/\{id\}

```ts
speech-to-text:Models_GetCustomModel:/models/{id}: never;
```

##### speech-to-text:Models\_GetCustomModelManifest:/models/\{id\}/manifest

```ts
speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest: never;
```

##### speech-to-text:Models\_GetFile:/models/\{id\}/files/\{fileId\}

```ts
speech-to-text:Models_GetFile:/models/{id}/files/{fileId}: never;
```

##### speech-to-text:Models\_ListBaseModels:/models/base

```ts
speech-to-text:Models_ListBaseModels:/models/base: never;
```

##### speech-to-text:Models\_ListCustomModels:/models

```ts
speech-to-text:Models_ListCustomModels:/models: never;
```

##### speech-to-text:Models\_ListFiles:/models/\{id\}/files

```ts
speech-to-text:Models_ListFiles:/models/{id}/files: never;
```

##### speech-to-text:Models\_ListSupportedLocales:/models/locales

```ts
speech-to-text:Models_ListSupportedLocales:/models/locales: never;
```

##### speech-to-text:Models\_Update:/models/\{id\}

```ts
speech-to-text:Models_Update:/models/{id}: AzureSpeechFullApiSchemaModelUpdate;
```

##### speech-to-text:Operations\_GetModelCopy:/operations/models/copy/\{id\}

```ts
speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}: never;
```

##### speech-to-text:Projects\_Create:/projects

```ts
speech-to-text:Projects_Create:/projects: AzureSpeechFullApiSchemaProject2;
```

##### speech-to-text:Projects\_Delete:/projects/\{id\}

```ts
speech-to-text:Projects_Delete:/projects/{id}: never;
```

##### speech-to-text:Projects\_Get:/projects/\{id\}

```ts
speech-to-text:Projects_Get:/projects/{id}: never;
```

##### speech-to-text:Projects\_List:/projects

```ts
speech-to-text:Projects_List:/projects: never;
```

##### speech-to-text:Projects\_ListDatasets:/projects/\{id\}/datasets

```ts
speech-to-text:Projects_ListDatasets:/projects/{id}/datasets: never;
```

##### speech-to-text:Projects\_ListEndpoints:/projects/\{id\}/endpoints

```ts
speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints: never;
```

##### speech-to-text:Projects\_ListEvaluations:/projects/\{id\}/evaluations

```ts
speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations: never;
```

##### speech-to-text:Projects\_ListModels:/projects/\{id\}/models

```ts
speech-to-text:Projects_ListModels:/projects/{id}/models: never;
```

##### speech-to-text:Projects\_ListSupportedLocales:/projects/locales

```ts
speech-to-text:Projects_ListSupportedLocales:/projects/locales: never;
```

##### speech-to-text:Projects\_ListTranscriptions:/projects/\{id\}/transcriptions

```ts
speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions: never;
```

##### speech-to-text:Projects\_Update:/projects/\{id\}

```ts
speech-to-text:Projects_Update:/projects/{id}: AzureSpeechFullApiSchemaProjectUpdate;
```

##### speech-to-text:Transcriptions\_Delete:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Delete:/transcriptions/{id}: never;
```

##### speech-to-text:Transcriptions\_Get:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Get:/transcriptions/{id}: never;
```

##### speech-to-text:Transcriptions\_GetFile:/transcriptions/\{id\}/files/\{fileId\}

```ts
speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}: never;
```

##### speech-to-text:Transcriptions\_List:/transcriptions

```ts
speech-to-text:Transcriptions_List:/transcriptions: never;
```

##### speech-to-text:Transcriptions\_ListFiles:/transcriptions/\{id\}/files

```ts
speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files: never;
```

##### speech-to-text:Transcriptions\_ListSupportedLocales:/transcriptions/locales

```ts
speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales: never;
```

##### speech-to-text:Transcriptions\_Submit:/transcriptions:submit

```ts
speech-to-text:Transcriptions_Submit:/transcriptions:submit: AzureSpeechFullApiSchemaTranscription;
```

##### speech-to-text:Transcriptions\_Transcribe:/transcriptions:transcribe

```ts
speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe: {
  audio?: AzureSpeechFullApiSchemaJsonValue;
  definition?: string;
};
```

###### audio?

```ts
optional audio?: AzureSpeechFullApiSchemaJsonValue;
```

###### definition?

```ts
optional definition?: string;
```

##### speech-to-text:Transcriptions\_Update:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Update:/transcriptions/{id}: AzureSpeechFullApiSchemaTranscriptionUpdate;
```

##### speech-to-text:WebHooks\_Create:/webhooks

```ts
speech-to-text:WebHooks_Create:/webhooks: AzureSpeechFullApiSchemaWebHook;
```

##### speech-to-text:WebHooks\_Delete:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Delete:/webhooks/{id}: never;
```

##### speech-to-text:WebHooks\_Get:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Get:/webhooks/{id}: never;
```

##### speech-to-text:WebHooks\_List:/webhooks

```ts
speech-to-text:WebHooks_List:/webhooks: never;
```

##### speech-to-text:WebHooks\_Ping:/webhooks/\{id\}:ping

```ts
speech-to-text:WebHooks_Ping:/webhooks/{id}:ping: never;
```

##### speech-to-text:WebHooks\_Test:/webhooks/\{id\}:test

```ts
speech-to-text:WebHooks_Test:/webhooks/{id}:test: never;
```

##### speech-to-text:WebHooks\_Update:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Update:/webhooks/{id}: AzureSpeechFullApiSchemaWebHookUpdate;
```

##### transcription:Transcribe:/transcriptions:transcribe

```ts
transcription:Transcribe:/transcriptions:transcribe: {
  audio?: AzureSpeechFullApiSchemaJsonValue;
  definition: string;
};
```

###### audio?

```ts
optional audio?: AzureSpeechFullApiSchemaJsonValue;
```

###### definition

```ts
definition: string;
```

***

### AzureSpeechFullApiOperationRequestBodyRequiredMap

#### Properties

##### batch-text-to-speech:BatchSyntheses\_Create:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}: true;
```

##### batch-text-to-speech:BatchSyntheses\_Delete:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}: false;
```

##### batch-text-to-speech:BatchSyntheses\_Get:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}: false;
```

##### batch-text-to-speech:BatchSyntheses\_List:/batchsyntheses

```ts
batch-text-to-speech:BatchSyntheses_List:/batchsyntheses: false;
```

##### batch-text-to-speech:Operations\_Get:/operations/\{id\}

```ts
batch-text-to-speech:Operations_Get:/operations/{id}: false;
```

##### custom-text-to-speech:BaseModels\_List:/basemodels

```ts
custom-text-to-speech:BaseModels_List:/basemodels: false;
```

##### custom-text-to-speech:Consents\_Create:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Create:/consents/{id}: true;
```

##### custom-text-to-speech:Consents\_Delete:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Delete:/consents/{id}: false;
```

##### custom-text-to-speech:Consents\_Get:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Get:/consents/{id}: false;
```

##### custom-text-to-speech:Consents\_List:/consents

```ts
custom-text-to-speech:Consents_List:/consents: false;
```

##### custom-text-to-speech:Consents\_Post:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Post:/consents/{id}: true;
```

##### custom-text-to-speech:Endpoints\_Create:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Create:/endpoints/{id}: true;
```

##### custom-text-to-speech:Endpoints\_Delete:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Delete:/endpoints/{id}: false;
```

##### custom-text-to-speech:Endpoints\_Get:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Get:/endpoints/{id}: false;
```

##### custom-text-to-speech:Endpoints\_List:/endpoints

```ts
custom-text-to-speech:Endpoints_List:/endpoints: false;
```

##### custom-text-to-speech:Endpoints\_Resume:/endpoints/\{id\}:resume

```ts
custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume: false;
```

##### custom-text-to-speech:Endpoints\_Suspend:/endpoints/\{id\}:suspend

```ts
custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend: false;
```

##### custom-text-to-speech:Models\_Create:/models/\{id\}

```ts
custom-text-to-speech:Models_Create:/models/{id}: true;
```

##### custom-text-to-speech:Models\_Delete:/models/\{id\}

```ts
custom-text-to-speech:Models_Delete:/models/{id}: false;
```

##### custom-text-to-speech:Models\_Get:/models/\{id\}

```ts
custom-text-to-speech:Models_Get:/models/{id}: false;
```

##### custom-text-to-speech:Models\_List:/models

```ts
custom-text-to-speech:Models_List:/models: false;
```

##### custom-text-to-speech:Models\_ListRecipes:/modelrecipes

```ts
custom-text-to-speech:Models_ListRecipes:/modelrecipes: false;
```

##### custom-text-to-speech:Operations\_Get:/operations/\{id\}

```ts
custom-text-to-speech:Operations_Get:/operations/{id}: false;
```

##### custom-text-to-speech:PersonalVoices\_Create:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}: true;
```

##### custom-text-to-speech:PersonalVoices\_Delete:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}: false;
```

##### custom-text-to-speech:PersonalVoices\_Get:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}: false;
```

##### custom-text-to-speech:PersonalVoices\_List:/personalvoices

```ts
custom-text-to-speech:PersonalVoices_List:/personalvoices: false;
```

##### custom-text-to-speech:PersonalVoices\_Post:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}: true;
```

##### custom-text-to-speech:Projects\_Create:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Create:/projects/{id}: true;
```

##### custom-text-to-speech:Projects\_Delete:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Delete:/projects/{id}: false;
```

##### custom-text-to-speech:Projects\_Get:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Get:/projects/{id}: false;
```

##### custom-text-to-speech:Projects\_List:/projects

```ts
custom-text-to-speech:Projects_List:/projects: false;
```

##### custom-text-to-speech:TrainingSets\_Create:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}: true;
```

##### custom-text-to-speech:TrainingSets\_Delete:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}: false;
```

##### custom-text-to-speech:TrainingSets\_Get:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}: false;
```

##### custom-text-to-speech:TrainingSets\_List:/trainingsets

```ts
custom-text-to-speech:TrainingSets_List:/trainingsets: false;
```

##### custom-text-to-speech:TrainingSets\_UploadData:/trainingsets/\{id\}:upload

```ts
custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload: true;
```

##### speech-to-text:Datasets\_CommitBlocks:/datasets/\{id\}/blocks:commit

```ts
speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit: true;
```

##### speech-to-text:Datasets\_Create:/datasets

```ts
speech-to-text:Datasets_Create:/datasets: true;
```

##### speech-to-text:Datasets\_Delete:/datasets/\{id\}

```ts
speech-to-text:Datasets_Delete:/datasets/{id}: false;
```

##### speech-to-text:Datasets\_Get:/datasets/\{id\}

```ts
speech-to-text:Datasets_Get:/datasets/{id}: false;
```

##### speech-to-text:Datasets\_GetBlocks:/datasets/\{id\}/blocks

```ts
speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks: false;
```

##### speech-to-text:Datasets\_GetFile:/datasets/\{id\}/files/\{fileId\}

```ts
speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}: false;
```

##### speech-to-text:Datasets\_List:/datasets

```ts
speech-to-text:Datasets_List:/datasets: false;
```

##### speech-to-text:Datasets\_ListFiles:/datasets/\{id\}/files

```ts
speech-to-text:Datasets_ListFiles:/datasets/{id}/files: false;
```

##### speech-to-text:Datasets\_ListSupportedLocales:/datasets/locales

```ts
speech-to-text:Datasets_ListSupportedLocales:/datasets/locales: false;
```

##### speech-to-text:Datasets\_Update:/datasets/\{id\}

```ts
speech-to-text:Datasets_Update:/datasets/{id}: true;
```

##### speech-to-text:Datasets\_UploadBlock:/datasets/\{id\}/blocks

```ts
speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks: true;
```

##### speech-to-text:Endpoints\_Create:/endpoints

```ts
speech-to-text:Endpoints_Create:/endpoints: true;
```

##### speech-to-text:Endpoints\_Delete:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Delete:/endpoints/{id}: false;
```

##### speech-to-text:Endpoints\_Get:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Get:/endpoints/{id}: false;
```

##### speech-to-text:Endpoints\_List:/endpoints

```ts
speech-to-text:Endpoints_List:/endpoints: false;
```

##### speech-to-text:Endpoints\_ListSupportedLocales:/endpoints/locales

```ts
speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales: false;
```

##### speech-to-text:Endpoints\_Update:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Update:/endpoints/{id}: true;
```

##### speech-to-text:Evaluations\_Create:/evaluations

```ts
speech-to-text:Evaluations_Create:/evaluations: true;
```

##### speech-to-text:Evaluations\_Delete:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Delete:/evaluations/{id}: false;
```

##### speech-to-text:Evaluations\_Get:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Get:/evaluations/{id}: false;
```

##### speech-to-text:Evaluations\_GetFile:/evaluations/\{id\}/files/\{fileId\}

```ts
speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}: false;
```

##### speech-to-text:Evaluations\_List:/evaluations

```ts
speech-to-text:Evaluations_List:/evaluations: false;
```

##### speech-to-text:Evaluations\_ListFiles:/evaluations/\{id\}/files

```ts
speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files: false;
```

##### speech-to-text:Evaluations\_ListSupportedLocales:/evaluations/locales

```ts
speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales: false;
```

##### speech-to-text:Evaluations\_Update:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Update:/evaluations/{id}: true;
```

##### speech-to-text:Models\_AuthorizeCopy:/models:authorizecopy

```ts
speech-to-text:Models_AuthorizeCopy:/models:authorizecopy: true;
```

##### speech-to-text:Models\_Copy:/models/\{id\}:copy

```ts
speech-to-text:Models_Copy:/models/{id}:copy: true;
```

##### speech-to-text:Models\_Create:/models

```ts
speech-to-text:Models_Create:/models: true;
```

##### speech-to-text:Models\_Delete:/models/\{id\}

```ts
speech-to-text:Models_Delete:/models/{id}: false;
```

##### speech-to-text:Models\_GetBaseModel:/models/base/\{id\}

```ts
speech-to-text:Models_GetBaseModel:/models/base/{id}: false;
```

##### speech-to-text:Models\_GetBaseModelManifest:/models/base/\{id\}/manifest

```ts
speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest: false;
```

##### speech-to-text:Models\_GetCustomModel:/models/\{id\}

```ts
speech-to-text:Models_GetCustomModel:/models/{id}: false;
```

##### speech-to-text:Models\_GetCustomModelManifest:/models/\{id\}/manifest

```ts
speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest: false;
```

##### speech-to-text:Models\_GetFile:/models/\{id\}/files/\{fileId\}

```ts
speech-to-text:Models_GetFile:/models/{id}/files/{fileId}: false;
```

##### speech-to-text:Models\_ListBaseModels:/models/base

```ts
speech-to-text:Models_ListBaseModels:/models/base: false;
```

##### speech-to-text:Models\_ListCustomModels:/models

```ts
speech-to-text:Models_ListCustomModels:/models: false;
```

##### speech-to-text:Models\_ListFiles:/models/\{id\}/files

```ts
speech-to-text:Models_ListFiles:/models/{id}/files: false;
```

##### speech-to-text:Models\_ListSupportedLocales:/models/locales

```ts
speech-to-text:Models_ListSupportedLocales:/models/locales: false;
```

##### speech-to-text:Models\_Update:/models/\{id\}

```ts
speech-to-text:Models_Update:/models/{id}: true;
```

##### speech-to-text:Operations\_GetModelCopy:/operations/models/copy/\{id\}

```ts
speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}: false;
```

##### speech-to-text:Projects\_Create:/projects

```ts
speech-to-text:Projects_Create:/projects: true;
```

##### speech-to-text:Projects\_Delete:/projects/\{id\}

```ts
speech-to-text:Projects_Delete:/projects/{id}: false;
```

##### speech-to-text:Projects\_Get:/projects/\{id\}

```ts
speech-to-text:Projects_Get:/projects/{id}: false;
```

##### speech-to-text:Projects\_List:/projects

```ts
speech-to-text:Projects_List:/projects: false;
```

##### speech-to-text:Projects\_ListDatasets:/projects/\{id\}/datasets

```ts
speech-to-text:Projects_ListDatasets:/projects/{id}/datasets: false;
```

##### speech-to-text:Projects\_ListEndpoints:/projects/\{id\}/endpoints

```ts
speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints: false;
```

##### speech-to-text:Projects\_ListEvaluations:/projects/\{id\}/evaluations

```ts
speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations: false;
```

##### speech-to-text:Projects\_ListModels:/projects/\{id\}/models

```ts
speech-to-text:Projects_ListModels:/projects/{id}/models: false;
```

##### speech-to-text:Projects\_ListSupportedLocales:/projects/locales

```ts
speech-to-text:Projects_ListSupportedLocales:/projects/locales: false;
```

##### speech-to-text:Projects\_ListTranscriptions:/projects/\{id\}/transcriptions

```ts
speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions: false;
```

##### speech-to-text:Projects\_Update:/projects/\{id\}

```ts
speech-to-text:Projects_Update:/projects/{id}: true;
```

##### speech-to-text:Transcriptions\_Delete:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Delete:/transcriptions/{id}: false;
```

##### speech-to-text:Transcriptions\_Get:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Get:/transcriptions/{id}: false;
```

##### speech-to-text:Transcriptions\_GetFile:/transcriptions/\{id\}/files/\{fileId\}

```ts
speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}: false;
```

##### speech-to-text:Transcriptions\_List:/transcriptions

```ts
speech-to-text:Transcriptions_List:/transcriptions: false;
```

##### speech-to-text:Transcriptions\_ListFiles:/transcriptions/\{id\}/files

```ts
speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files: false;
```

##### speech-to-text:Transcriptions\_ListSupportedLocales:/transcriptions/locales

```ts
speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales: false;
```

##### speech-to-text:Transcriptions\_Submit:/transcriptions:submit

```ts
speech-to-text:Transcriptions_Submit:/transcriptions:submit: true;
```

##### speech-to-text:Transcriptions\_Transcribe:/transcriptions:transcribe

```ts
speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe: false;
```

##### speech-to-text:Transcriptions\_Update:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Update:/transcriptions/{id}: true;
```

##### speech-to-text:WebHooks\_Create:/webhooks

```ts
speech-to-text:WebHooks_Create:/webhooks: true;
```

##### speech-to-text:WebHooks\_Delete:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Delete:/webhooks/{id}: false;
```

##### speech-to-text:WebHooks\_Get:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Get:/webhooks/{id}: false;
```

##### speech-to-text:WebHooks\_List:/webhooks

```ts
speech-to-text:WebHooks_List:/webhooks: false;
```

##### speech-to-text:WebHooks\_Ping:/webhooks/\{id\}:ping

```ts
speech-to-text:WebHooks_Ping:/webhooks/{id}:ping: false;
```

##### speech-to-text:WebHooks\_Test:/webhooks/\{id\}:test

```ts
speech-to-text:WebHooks_Test:/webhooks/{id}:test: false;
```

##### speech-to-text:WebHooks\_Update:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Update:/webhooks/{id}: true;
```

##### transcription:Transcribe:/transcriptions:transcribe

```ts
transcription:Transcribe:/transcriptions:transcribe: true;
```

***

### AzureSpeechFullApiOperationResponseMap

#### Properties

##### batch-text-to-speech:BatchSyntheses\_Create:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Create:/batchsyntheses/{id}: AzureSpeechFullApiSchemaBatchSynthesis;
```

##### batch-text-to-speech:BatchSyntheses\_Delete:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Delete:/batchsyntheses/{id}: AzureSpeechFullApiSchemaErrorResponse;
```

##### batch-text-to-speech:BatchSyntheses\_Get:/batchsyntheses/\{id\}

```ts
batch-text-to-speech:BatchSyntheses_Get:/batchsyntheses/{id}: AzureSpeechFullApiSchemaBatchSynthesis;
```

##### batch-text-to-speech:BatchSyntheses\_List:/batchsyntheses

```ts
batch-text-to-speech:BatchSyntheses_List:/batchsyntheses: AzureSpeechFullApiSchemaPaginatedBatchSynthesis;
```

##### batch-text-to-speech:Operations\_Get:/operations/\{id\}

```ts
batch-text-to-speech:Operations_Get:/operations/{id}: AzureSpeechFullApiSchemaOperation;
```

##### custom-text-to-speech:BaseModels\_List:/basemodels

```ts
custom-text-to-speech:BaseModels_List:/basemodels: readonly AzureSpeechFullApiSchemaBaseModel[];
```

##### custom-text-to-speech:Consents\_Create:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Create:/consents/{id}: AzureSpeechFullApiSchemaConsent;
```

##### custom-text-to-speech:Consents\_Delete:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Delete:/consents/{id}: AzureSpeechFullApiSchemaErrorResponse2;
```

##### custom-text-to-speech:Consents\_Get:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Get:/consents/{id}: AzureSpeechFullApiSchemaConsent;
```

##### custom-text-to-speech:Consents\_List:/consents

```ts
custom-text-to-speech:Consents_List:/consents: AzureSpeechFullApiSchemaPaginatedConsents;
```

##### custom-text-to-speech:Consents\_Post:/consents/\{id\}

```ts
custom-text-to-speech:Consents_Post:/consents/{id}: AzureSpeechFullApiSchemaConsent;
```

##### custom-text-to-speech:Endpoints\_Create:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Create:/endpoints/{id}: AzureSpeechFullApiSchemaEndpoint;
```

##### custom-text-to-speech:Endpoints\_Delete:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Delete:/endpoints/{id}: AzureSpeechFullApiSchemaErrorResponse2;
```

##### custom-text-to-speech:Endpoints\_Get:/endpoints/\{id\}

```ts
custom-text-to-speech:Endpoints_Get:/endpoints/{id}: AzureSpeechFullApiSchemaEndpoint;
```

##### custom-text-to-speech:Endpoints\_List:/endpoints

```ts
custom-text-to-speech:Endpoints_List:/endpoints: AzureSpeechFullApiSchemaPaginatedEndpoints;
```

##### custom-text-to-speech:Endpoints\_Resume:/endpoints/\{id\}:resume

```ts
custom-text-to-speech:Endpoints_Resume:/endpoints/{id}:resume: AzureSpeechFullApiSchemaEndpoint;
```

##### custom-text-to-speech:Endpoints\_Suspend:/endpoints/\{id\}:suspend

```ts
custom-text-to-speech:Endpoints_Suspend:/endpoints/{id}:suspend: AzureSpeechFullApiSchemaEndpoint;
```

##### custom-text-to-speech:Models\_Create:/models/\{id\}

```ts
custom-text-to-speech:Models_Create:/models/{id}: AzureSpeechFullApiSchemaModel;
```

##### custom-text-to-speech:Models\_Delete:/models/\{id\}

```ts
custom-text-to-speech:Models_Delete:/models/{id}: AzureSpeechFullApiSchemaErrorResponse2;
```

##### custom-text-to-speech:Models\_Get:/models/\{id\}

```ts
custom-text-to-speech:Models_Get:/models/{id}: AzureSpeechFullApiSchemaModel;
```

##### custom-text-to-speech:Models\_List:/models

```ts
custom-text-to-speech:Models_List:/models: AzureSpeechFullApiSchemaPaginatedModels;
```

##### custom-text-to-speech:Models\_ListRecipes:/modelrecipes

```ts
custom-text-to-speech:Models_ListRecipes:/modelrecipes: readonly AzureSpeechFullApiSchemaRecipe[];
```

##### custom-text-to-speech:Operations\_Get:/operations/\{id\}

```ts
custom-text-to-speech:Operations_Get:/operations/{id}: AzureSpeechFullApiSchemaOperation2;
```

##### custom-text-to-speech:PersonalVoices\_Create:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Create:/personalvoices/{id}: AzureSpeechFullApiSchemaPersonalVoice;
```

##### custom-text-to-speech:PersonalVoices\_Delete:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Delete:/personalvoices/{id}: AzureSpeechFullApiSchemaErrorResponse2;
```

##### custom-text-to-speech:PersonalVoices\_Get:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Get:/personalvoices/{id}: AzureSpeechFullApiSchemaPersonalVoice;
```

##### custom-text-to-speech:PersonalVoices\_List:/personalvoices

```ts
custom-text-to-speech:PersonalVoices_List:/personalvoices: AzureSpeechFullApiSchemaPaginatedPersonalVoices;
```

##### custom-text-to-speech:PersonalVoices\_Post:/personalvoices/\{id\}

```ts
custom-text-to-speech:PersonalVoices_Post:/personalvoices/{id}: AzureSpeechFullApiSchemaPersonalVoice;
```

##### custom-text-to-speech:Projects\_Create:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Create:/projects/{id}: AzureSpeechFullApiSchemaProject;
```

##### custom-text-to-speech:Projects\_Delete:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Delete:/projects/{id}: AzureSpeechFullApiSchemaErrorResponse2;
```

##### custom-text-to-speech:Projects\_Get:/projects/\{id\}

```ts
custom-text-to-speech:Projects_Get:/projects/{id}: AzureSpeechFullApiSchemaProject;
```

##### custom-text-to-speech:Projects\_List:/projects

```ts
custom-text-to-speech:Projects_List:/projects: AzureSpeechFullApiSchemaPaginatedProjects;
```

##### custom-text-to-speech:TrainingSets\_Create:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Create:/trainingsets/{id}: AzureSpeechFullApiSchemaTrainingSet;
```

##### custom-text-to-speech:TrainingSets\_Delete:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Delete:/trainingsets/{id}: AzureSpeechFullApiSchemaErrorResponse2;
```

##### custom-text-to-speech:TrainingSets\_Get:/trainingsets/\{id\}

```ts
custom-text-to-speech:TrainingSets_Get:/trainingsets/{id}: AzureSpeechFullApiSchemaTrainingSet;
```

##### custom-text-to-speech:TrainingSets\_List:/trainingsets

```ts
custom-text-to-speech:TrainingSets_List:/trainingsets: AzureSpeechFullApiSchemaPaginatedTrainingSets;
```

##### custom-text-to-speech:TrainingSets\_UploadData:/trainingsets/\{id\}:upload

```ts
custom-text-to-speech:TrainingSets_UploadData:/trainingsets/{id}:upload: AzureSpeechFullApiSchemaErrorResponse2;
```

##### speech-to-text:Datasets\_CommitBlocks:/datasets/\{id\}/blocks:commit

```ts
speech-to-text:Datasets_CommitBlocks:/datasets/{id}/blocks:commit: AzureSpeechFullApiSchemaError;
```

##### speech-to-text:Datasets\_Create:/datasets

```ts
speech-to-text:Datasets_Create:/datasets: AzureSpeechFullApiSchemaDataset2;
```

##### speech-to-text:Datasets\_Delete:/datasets/\{id\}

```ts
speech-to-text:Datasets_Delete:/datasets/{id}: AzureSpeechFullApiSchemaError;
```

##### speech-to-text:Datasets\_Get:/datasets/\{id\}

```ts
speech-to-text:Datasets_Get:/datasets/{id}: AzureSpeechFullApiSchemaDataset2;
```

##### speech-to-text:Datasets\_GetBlocks:/datasets/\{id\}/blocks

```ts
speech-to-text:Datasets_GetBlocks:/datasets/{id}/blocks: AzureSpeechFullApiSchemaUploadedBlocks;
```

##### speech-to-text:Datasets\_GetFile:/datasets/\{id\}/files/\{fileId\}

```ts
speech-to-text:Datasets_GetFile:/datasets/{id}/files/{fileId}: AzureSpeechFullApiSchemaFile;
```

##### speech-to-text:Datasets\_List:/datasets

```ts
speech-to-text:Datasets_List:/datasets: AzureSpeechFullApiSchemaPaginatedDatasets;
```

##### speech-to-text:Datasets\_ListFiles:/datasets/\{id\}/files

```ts
speech-to-text:Datasets_ListFiles:/datasets/{id}/files: AzureSpeechFullApiSchemaPaginatedFiles;
```

##### speech-to-text:Datasets\_ListSupportedLocales:/datasets/locales

```ts
speech-to-text:Datasets_ListSupportedLocales:/datasets/locales: AzureSpeechFullApiSchemaDatasetLocales;
```

##### speech-to-text:Datasets\_Update:/datasets/\{id\}

```ts
speech-to-text:Datasets_Update:/datasets/{id}: AzureSpeechFullApiSchemaDataset2;
```

##### speech-to-text:Datasets\_UploadBlock:/datasets/\{id\}/blocks

```ts
speech-to-text:Datasets_UploadBlock:/datasets/{id}/blocks: AzureSpeechFullApiSchemaError;
```

##### speech-to-text:Endpoints\_Create:/endpoints

```ts
speech-to-text:Endpoints_Create:/endpoints: AzureSpeechFullApiSchemaEndpoint2;
```

##### speech-to-text:Endpoints\_Delete:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Delete:/endpoints/{id}: AzureSpeechFullApiSchemaError;
```

##### speech-to-text:Endpoints\_Get:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Get:/endpoints/{id}: AzureSpeechFullApiSchemaEndpoint2;
```

##### speech-to-text:Endpoints\_List:/endpoints

```ts
speech-to-text:Endpoints_List:/endpoints: AzureSpeechFullApiSchemaPaginatedEndpoints2;
```

##### speech-to-text:Endpoints\_ListSupportedLocales:/endpoints/locales

```ts
speech-to-text:Endpoints_ListSupportedLocales:/endpoints/locales: readonly string[];
```

##### speech-to-text:Endpoints\_Update:/endpoints/\{id\}

```ts
speech-to-text:Endpoints_Update:/endpoints/{id}: AzureSpeechFullApiSchemaEndpoint2;
```

##### speech-to-text:Evaluations\_Create:/evaluations

```ts
speech-to-text:Evaluations_Create:/evaluations: AzureSpeechFullApiSchemaEvaluation;
```

##### speech-to-text:Evaluations\_Delete:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Delete:/evaluations/{id}: AzureSpeechFullApiSchemaError;
```

##### speech-to-text:Evaluations\_Get:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Get:/evaluations/{id}: AzureSpeechFullApiSchemaEvaluation;
```

##### speech-to-text:Evaluations\_GetFile:/evaluations/\{id\}/files/\{fileId\}

```ts
speech-to-text:Evaluations_GetFile:/evaluations/{id}/files/{fileId}: AzureSpeechFullApiSchemaFile;
```

##### speech-to-text:Evaluations\_List:/evaluations

```ts
speech-to-text:Evaluations_List:/evaluations: AzureSpeechFullApiSchemaPaginatedEvaluations;
```

##### speech-to-text:Evaluations\_ListFiles:/evaluations/\{id\}/files

```ts
speech-to-text:Evaluations_ListFiles:/evaluations/{id}/files: AzureSpeechFullApiSchemaPaginatedFiles;
```

##### speech-to-text:Evaluations\_ListSupportedLocales:/evaluations/locales

```ts
speech-to-text:Evaluations_ListSupportedLocales:/evaluations/locales: readonly string[];
```

##### speech-to-text:Evaluations\_Update:/evaluations/\{id\}

```ts
speech-to-text:Evaluations_Update:/evaluations/{id}: AzureSpeechFullApiSchemaEvaluation;
```

##### speech-to-text:Models\_AuthorizeCopy:/models:authorizecopy

```ts
speech-to-text:Models_AuthorizeCopy:/models:authorizecopy: AzureSpeechFullApiSchemaModelCopyAuthorization;
```

##### speech-to-text:Models\_Copy:/models/\{id\}:copy

```ts
speech-to-text:Models_Copy:/models/{id}:copy: AzureSpeechFullApiSchemaOperation3;
```

##### speech-to-text:Models\_Create:/models

```ts
speech-to-text:Models_Create:/models: AzureSpeechFullApiSchemaSharedModel;
```

##### speech-to-text:Models\_Delete:/models/\{id\}

```ts
speech-to-text:Models_Delete:/models/{id}: AzureSpeechFullApiSchemaError;
```

##### speech-to-text:Models\_GetBaseModel:/models/base/\{id\}

```ts
speech-to-text:Models_GetBaseModel:/models/base/{id}: AzureSpeechFullApiSchemaSharedModel;
```

##### speech-to-text:Models\_GetBaseModelManifest:/models/base/\{id\}/manifest

```ts
speech-to-text:Models_GetBaseModelManifest:/models/base/{id}/manifest: AzureSpeechFullApiSchemaModelManifest;
```

##### speech-to-text:Models\_GetCustomModel:/models/\{id\}

```ts
speech-to-text:Models_GetCustomModel:/models/{id}: AzureSpeechFullApiSchemaSharedModel;
```

##### speech-to-text:Models\_GetCustomModelManifest:/models/\{id\}/manifest

```ts
speech-to-text:Models_GetCustomModelManifest:/models/{id}/manifest: AzureSpeechFullApiSchemaModelManifest;
```

##### speech-to-text:Models\_GetFile:/models/\{id\}/files/\{fileId\}

```ts
speech-to-text:Models_GetFile:/models/{id}/files/{fileId}: AzureSpeechFullApiSchemaFile;
```

##### speech-to-text:Models\_ListBaseModels:/models/base

```ts
speech-to-text:Models_ListBaseModels:/models/base: AzureSpeechFullApiSchemaPaginatedBaseModels;
```

##### speech-to-text:Models\_ListCustomModels:/models

```ts
speech-to-text:Models_ListCustomModels:/models: AzureSpeechFullApiSchemaPaginatedCustomModels;
```

##### speech-to-text:Models\_ListFiles:/models/\{id\}/files

```ts
speech-to-text:Models_ListFiles:/models/{id}/files: AzureSpeechFullApiSchemaPaginatedFiles;
```

##### speech-to-text:Models\_ListSupportedLocales:/models/locales

```ts
speech-to-text:Models_ListSupportedLocales:/models/locales: readonly string[];
```

##### speech-to-text:Models\_Update:/models/\{id\}

```ts
speech-to-text:Models_Update:/models/{id}: AzureSpeechFullApiSchemaSharedModel;
```

##### speech-to-text:Operations\_GetModelCopy:/operations/models/copy/\{id\}

```ts
speech-to-text:Operations_GetModelCopy:/operations/models/copy/{id}: AzureSpeechFullApiSchemaOperation3;
```

##### speech-to-text:Projects\_Create:/projects

```ts
speech-to-text:Projects_Create:/projects: AzureSpeechFullApiSchemaProject2;
```

##### speech-to-text:Projects\_Delete:/projects/\{id\}

```ts
speech-to-text:Projects_Delete:/projects/{id}: AzureSpeechFullApiSchemaError;
```

##### speech-to-text:Projects\_Get:/projects/\{id\}

```ts
speech-to-text:Projects_Get:/projects/{id}: AzureSpeechFullApiSchemaProject2;
```

##### speech-to-text:Projects\_List:/projects

```ts
speech-to-text:Projects_List:/projects: AzureSpeechFullApiSchemaPaginatedProjects2;
```

##### speech-to-text:Projects\_ListDatasets:/projects/\{id\}/datasets

```ts
speech-to-text:Projects_ListDatasets:/projects/{id}/datasets: AzureSpeechFullApiSchemaPaginatedDatasets;
```

##### speech-to-text:Projects\_ListEndpoints:/projects/\{id\}/endpoints

```ts
speech-to-text:Projects_ListEndpoints:/projects/{id}/endpoints: AzureSpeechFullApiSchemaPaginatedEndpoints2;
```

##### speech-to-text:Projects\_ListEvaluations:/projects/\{id\}/evaluations

```ts
speech-to-text:Projects_ListEvaluations:/projects/{id}/evaluations: AzureSpeechFullApiSchemaPaginatedEvaluations;
```

##### speech-to-text:Projects\_ListModels:/projects/\{id\}/models

```ts
speech-to-text:Projects_ListModels:/projects/{id}/models: AzureSpeechFullApiSchemaPaginatedCustomModels;
```

##### speech-to-text:Projects\_ListSupportedLocales:/projects/locales

```ts
speech-to-text:Projects_ListSupportedLocales:/projects/locales: readonly string[];
```

##### speech-to-text:Projects\_ListTranscriptions:/projects/\{id\}/transcriptions

```ts
speech-to-text:Projects_ListTranscriptions:/projects/{id}/transcriptions: AzureSpeechFullApiSchemaPaginatedTranscriptions;
```

##### speech-to-text:Projects\_Update:/projects/\{id\}

```ts
speech-to-text:Projects_Update:/projects/{id}: AzureSpeechFullApiSchemaProject2;
```

##### speech-to-text:Transcriptions\_Delete:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Delete:/transcriptions/{id}: AzureSpeechFullApiSchemaError;
```

##### speech-to-text:Transcriptions\_Get:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Get:/transcriptions/{id}: AzureSpeechFullApiSchemaTranscription;
```

##### speech-to-text:Transcriptions\_GetFile:/transcriptions/\{id\}/files/\{fileId\}

```ts
speech-to-text:Transcriptions_GetFile:/transcriptions/{id}/files/{fileId}: AzureSpeechFullApiSchemaFile;
```

##### speech-to-text:Transcriptions\_List:/transcriptions

```ts
speech-to-text:Transcriptions_List:/transcriptions: AzureSpeechFullApiSchemaPaginatedTranscriptions;
```

##### speech-to-text:Transcriptions\_ListFiles:/transcriptions/\{id\}/files

```ts
speech-to-text:Transcriptions_ListFiles:/transcriptions/{id}/files: AzureSpeechFullApiSchemaPaginatedFiles;
```

##### speech-to-text:Transcriptions\_ListSupportedLocales:/transcriptions/locales

```ts
speech-to-text:Transcriptions_ListSupportedLocales:/transcriptions/locales: AzureSpeechFullApiSchemaTranscriptionLocales;
```

##### speech-to-text:Transcriptions\_Submit:/transcriptions:submit

```ts
speech-to-text:Transcriptions_Submit:/transcriptions:submit: AzureSpeechFullApiSchemaTranscription;
```

##### speech-to-text:Transcriptions\_Transcribe:/transcriptions:transcribe

```ts
speech-to-text:Transcriptions_Transcribe:/transcriptions:transcribe: AzureSpeechFullApiSchemaTranscribeResult;
```

##### speech-to-text:Transcriptions\_Update:/transcriptions/\{id\}

```ts
speech-to-text:Transcriptions_Update:/transcriptions/{id}: AzureSpeechFullApiSchemaTranscription;
```

##### speech-to-text:WebHooks\_Create:/webhooks

```ts
speech-to-text:WebHooks_Create:/webhooks: AzureSpeechFullApiSchemaWebHook;
```

##### speech-to-text:WebHooks\_Delete:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Delete:/webhooks/{id}: AzureSpeechFullApiSchemaError;
```

##### speech-to-text:WebHooks\_Get:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Get:/webhooks/{id}: AzureSpeechFullApiSchemaWebHook;
```

##### speech-to-text:WebHooks\_List:/webhooks

```ts
speech-to-text:WebHooks_List:/webhooks: AzureSpeechFullApiSchemaPaginatedWebHooks;
```

##### speech-to-text:WebHooks\_Ping:/webhooks/\{id\}:ping

```ts
speech-to-text:WebHooks_Ping:/webhooks/{id}:ping: AzureSpeechFullApiSchemaError;
```

##### speech-to-text:WebHooks\_Test:/webhooks/\{id\}:test

```ts
speech-to-text:WebHooks_Test:/webhooks/{id}:test: AzureSpeechFullApiSchemaError;
```

##### speech-to-text:WebHooks\_Update:/webhooks/\{id\}

```ts
speech-to-text:WebHooks_Update:/webhooks/{id}: AzureSpeechFullApiSchemaWebHook;
```

##### transcription:Transcribe:/transcriptions:transcribe

```ts
transcription:Transcribe:/transcriptions:transcribe: AzureSpeechFullApiSchemaTranscriptionResult;
```

***

### AzureSpeechFullApiSpec

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

### AzureSpeechJsonObject

#### Indexable

```ts
[key: string]: AzureSpeechJsonValue
```

***

### AzureSpeechOperationRequestInput

#### Properties

##### body?

```ts
optional body?:
  | ArrayBuffer
  | Uint8Array<ArrayBufferLike>
  | AzureSpeechJsonValue
  | FormData;
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
optional query?: Record<string, AzureSpeechJsonValue | undefined>;
```

##### responseType?

```ts
optional responseType?: "response" | "json" | "arrayBuffer" | "stream";
```

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
optional raw?: AzureSpeechJsonObject;
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

##### speechToTextEndpoint?

```ts
optional speechToTextEndpoint?: string;
```

##### textToSpeechEndpoint?

```ts
optional textToSpeechEndpoint?: string;
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

## Type Aliases

### AzureSpeechFullApiOperationId

```ts
type AzureSpeechFullApiOperationId = typeof AZURE_SPEECH_FULL_API_OPERATION_OPERATION_IDS[number];
```

***

### AzureSpeechFullApiOperationMethod

```ts
type AzureSpeechFullApiOperationMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
```

***

### AzureSpeechFullApiSchemaAzureBlobContentSource

```ts
type AzureSpeechFullApiSchemaAzureBlobContentSource = {
  containerUrl: string;
  extensions: ReadonlyArray<string>;
  prefix?: string;
};
```

#### Properties

##### containerUrl

```ts
containerUrl: string;
```

##### extensions

```ts
extensions: ReadonlyArray<string>;
```

##### prefix?

```ts
optional prefix?: string;
```

***

### AzureSpeechFullApiSchemaBaseModel

```ts
type AzureSpeechFullApiSchemaBaseModel = {
  capabilities?: ReadonlyArray<AzureSpeechFullApiSchemaModelCapability>;
  description?: string;
  expirationDateTime?: string;
  name: string;
  releaseDateTime: string;
};
```

#### Properties

##### capabilities?

```ts
optional capabilities?: ReadonlyArray<AzureSpeechFullApiSchemaModelCapability>;
```

##### description?

```ts
optional description?: string;
```

##### expirationDateTime?

```ts
optional expirationDateTime?: string;
```

##### name

```ts
name: string;
```

##### releaseDateTime

```ts
releaseDateTime: string;
```

***

### AzureSpeechFullApiSchemaBaseModel2

```ts
type AzureSpeechFullApiSchemaBaseModel2 = AzureSpeechFullApiSchemaSharedModel;
```

***

### AzureSpeechFullApiSchemaBatchSynthesis

```ts
type AzureSpeechFullApiSchemaBatchSynthesis = {
  createdDateTime?: string;
  customVoices?: {
   [key: string]: string;
  };
  description?: string;
  id?: AzureSpeechFullApiSchemaResourceId;
  inputKind: AzureSpeechFullApiSchemaInputKind;
  inputs?: ReadonlyArray<AzureSpeechFullApiSchemaBatchSynthesisInput>;
  lastActionDateTime?: string;
  outputs?: AzureSpeechFullApiSchemaBatchSynthesisOutputs;
  properties?: AzureSpeechFullApiSchemaBatchSynthesisProperties;
  status?: AzureSpeechFullApiSchemaStatus;
  synthesisConfig?: AzureSpeechFullApiSchemaBatchSynthesisConfig;
};
```

#### Properties

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### customVoices?

```ts
optional customVoices?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### description?

```ts
optional description?: string;
```

##### id?

```ts
optional id?: AzureSpeechFullApiSchemaResourceId;
```

##### inputKind

```ts
inputKind: AzureSpeechFullApiSchemaInputKind;
```

##### inputs?

```ts
optional inputs?: ReadonlyArray<AzureSpeechFullApiSchemaBatchSynthesisInput>;
```

##### lastActionDateTime?

```ts
optional lastActionDateTime?: string;
```

##### outputs?

```ts
optional outputs?: AzureSpeechFullApiSchemaBatchSynthesisOutputs;
```

##### properties?

```ts
optional properties?: AzureSpeechFullApiSchemaBatchSynthesisProperties;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaStatus;
```

##### synthesisConfig?

```ts
optional synthesisConfig?: AzureSpeechFullApiSchemaBatchSynthesisConfig;
```

***

### AzureSpeechFullApiSchemaBatchSynthesisBackgroundAudioDefinition

```ts
type AzureSpeechFullApiSchemaBatchSynthesisBackgroundAudioDefinition = {
  fadein?: number;
  fadeout?: number;
  src: string;
  volume?: number;
};
```

#### Properties

##### fadein?

```ts
optional fadein?: number;
```

##### fadeout?

```ts
optional fadeout?: number;
```

##### src

```ts
src: string;
```

##### volume?

```ts
optional volume?: number;
```

***

### AzureSpeechFullApiSchemaBatchSynthesisBillingDetails

```ts
type AzureSpeechFullApiSchemaBatchSynthesisBillingDetails = {
  aoaiCharacters?: number;
  aoaiHDCharacters?: number;
  customNeuralCharacters?: number;
  neuralCharacters?: number;
  personalVoiceCharacters?: number;
};
```

#### Properties

##### aoaiCharacters?

```ts
optional aoaiCharacters?: number;
```

##### aoaiHDCharacters?

```ts
optional aoaiHDCharacters?: number;
```

##### customNeuralCharacters?

```ts
optional customNeuralCharacters?: number;
```

##### neuralCharacters?

```ts
optional neuralCharacters?: number;
```

##### personalVoiceCharacters?

```ts
optional personalVoiceCharacters?: number;
```

***

### AzureSpeechFullApiSchemaBatchSynthesisConfig

```ts
type AzureSpeechFullApiSchemaBatchSynthesisConfig = {
  backgroundAudio?: AzureSpeechFullApiSchemaBatchSynthesisBackgroundAudioDefinition;
  pitch?: string;
  rate?: string;
  style?: string;
  voice: string;
  volume?: string;
};
```

#### Properties

##### backgroundAudio?

```ts
optional backgroundAudio?: AzureSpeechFullApiSchemaBatchSynthesisBackgroundAudioDefinition;
```

##### pitch?

```ts
optional pitch?: string;
```

##### rate?

```ts
optional rate?: string;
```

##### style?

```ts
optional style?: string;
```

##### voice

```ts
voice: string;
```

##### volume?

```ts
optional volume?: string;
```

***

### AzureSpeechFullApiSchemaBatchSynthesisError

```ts
type AzureSpeechFullApiSchemaBatchSynthesisError = {
  code?: string;
  message?: string;
};
```

#### Properties

##### code?

```ts
optional code?: string;
```

##### message?

```ts
optional message?: string;
```

***

### AzureSpeechFullApiSchemaBatchSynthesisInput

```ts
type AzureSpeechFullApiSchemaBatchSynthesisInput = {
  content: string;
};
```

#### Properties

##### content

```ts
content: string;
```

***

### AzureSpeechFullApiSchemaBatchSynthesisOutputs

```ts
type AzureSpeechFullApiSchemaBatchSynthesisOutputs = {
  result?: string;
  summary?: string;
};
```

#### Properties

##### result?

```ts
optional result?: string;
```

##### summary?

```ts
optional summary?: string;
```

***

### AzureSpeechFullApiSchemaBatchSynthesisProperties

```ts
type AzureSpeechFullApiSchemaBatchSynthesisProperties = {
  billingDetails?: AzureSpeechFullApiSchemaBatchSynthesisBillingDetails;
  concatenateResult?: boolean;
  decompressOutputFiles?: boolean;
  destinationContainerUrl?: string;
  destinationPath?: string;
  durationInMilliseconds?: number;
  error?: AzureSpeechFullApiSchemaBatchSynthesisError;
  failedAudioCount?: number;
  outputFormat?: string;
  sentenceBoundaryEnabled?: boolean;
  sizeInBytes?: number;
  succeededAudioCount?: number;
  timeToLiveInHours?: number;
  wordBoundaryEnabled?: boolean;
};
```

#### Properties

##### billingDetails?

```ts
optional billingDetails?: AzureSpeechFullApiSchemaBatchSynthesisBillingDetails;
```

##### concatenateResult?

```ts
optional concatenateResult?: boolean;
```

##### decompressOutputFiles?

```ts
optional decompressOutputFiles?: boolean;
```

##### destinationContainerUrl?

```ts
optional destinationContainerUrl?: string;
```

##### destinationPath?

```ts
optional destinationPath?: string;
```

##### durationInMilliseconds?

```ts
optional durationInMilliseconds?: number;
```

##### error?

```ts
optional error?: AzureSpeechFullApiSchemaBatchSynthesisError;
```

##### failedAudioCount?

```ts
optional failedAudioCount?: number;
```

##### outputFormat?

```ts
optional outputFormat?: string;
```

##### sentenceBoundaryEnabled?

```ts
optional sentenceBoundaryEnabled?: boolean;
```

##### sizeInBytes?

```ts
optional sizeInBytes?: number;
```

##### succeededAudioCount?

```ts
optional succeededAudioCount?: number;
```

##### timeToLiveInHours?

```ts
optional timeToLiveInHours?: number;
```

##### wordBoundaryEnabled?

```ts
optional wordBoundaryEnabled?: boolean;
```

***

### AzureSpeechFullApiSchemaBlockKind

```ts
type AzureSpeechFullApiSchemaBlockKind = "Committed" | "Uncommitted" | "Latest";
```

***

### AzureSpeechFullApiSchemaChannelCombinedPhrases

```ts
type AzureSpeechFullApiSchemaChannelCombinedPhrases = {
  channel?: number;
  text: string;
};
```

#### Properties

##### channel?

```ts
optional channel?: number;
```

##### text

```ts
text: string;
```

***

### AzureSpeechFullApiSchemaChannelCombinedPhrases2

```ts
type AzureSpeechFullApiSchemaChannelCombinedPhrases2 = {
  channel?: number;
  text: string;
};
```

#### Properties

##### channel?

```ts
optional channel?: number;
```

##### text

```ts
text: string;
```

***

### AzureSpeechFullApiSchemaCommitBlocksEntry

```ts
type AzureSpeechFullApiSchemaCommitBlocksEntry = {
  id?: string;
  kind?: AzureSpeechFullApiSchemaBlockKind;
};
```

#### Properties

##### id?

```ts
optional id?: string;
```

##### kind?

```ts
optional kind?: AzureSpeechFullApiSchemaBlockKind;
```

***

### AzureSpeechFullApiSchemaConsent

```ts
type AzureSpeechFullApiSchemaConsent = {
  audioUrl?: string;
  companyName: string;
  createdDateTime?: string;
  description?: string;
  displayName?: string;
  id?: AzureSpeechFullApiSchemaResourceId2;
  lastActionDateTime?: string;
  locale: string;
  projectId: AzureSpeechFullApiSchemaResourceId2;
  properties?: AzureSpeechFullApiSchemaConsentProperties;
  status?: AzureSpeechFullApiSchemaStatus2;
  voiceTalentName: string;
};
```

#### Properties

##### audioUrl?

```ts
optional audioUrl?: string;
```

##### companyName

```ts
companyName: string;
```

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### description?

```ts
optional description?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### id?

```ts
optional id?: AzureSpeechFullApiSchemaResourceId2;
```

##### lastActionDateTime?

```ts
optional lastActionDateTime?: string;
```

##### locale

```ts
locale: string;
```

##### projectId

```ts
projectId: AzureSpeechFullApiSchemaResourceId2;
```

##### properties?

```ts
optional properties?: AzureSpeechFullApiSchemaConsentProperties;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaStatus2;
```

##### voiceTalentName

```ts
voiceTalentName: string;
```

***

### AzureSpeechFullApiSchemaConsentFailureReason

```ts
type AzureSpeechFullApiSchemaConsentFailureReason = "AudioAndScriptNotMatch" | "Internal";
```

***

### AzureSpeechFullApiSchemaConsentProperties

```ts
type AzureSpeechFullApiSchemaConsentProperties = {
  failureReason?: AzureSpeechFullApiSchemaConsentFailureReason;
};
```

#### Properties

##### failureReason?

```ts
optional failureReason?: AzureSpeechFullApiSchemaConsentFailureReason;
```

***

### AzureSpeechFullApiSchemaCustomModel

```ts
type AzureSpeechFullApiSchemaCustomModel = AzureSpeechFullApiSchemaSharedModel;
```

***

### AzureSpeechFullApiSchemaDataset

```ts
type AzureSpeechFullApiSchemaDataset = {
  audios: AzureSpeechFullApiSchemaAzureBlobContentSource;
  description?: string;
  displayName?: string;
  kind: AzureSpeechFullApiSchemaDatasetKind;
  scripts?: AzureSpeechFullApiSchemaAzureBlobContentSource;
};
```

#### Properties

##### audios

```ts
audios: AzureSpeechFullApiSchemaAzureBlobContentSource;
```

##### description?

```ts
optional description?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### kind

```ts
kind: AzureSpeechFullApiSchemaDatasetKind;
```

##### scripts?

```ts
optional scripts?: AzureSpeechFullApiSchemaAzureBlobContentSource;
```

***

### AzureSpeechFullApiSchemaDataset2

```ts
type AzureSpeechFullApiSchemaDataset2 = {
  contentUrl?: string;
  createdDateTime?: string;
  customProperties?: {
   [key: string]: string;
  };
  description?: string;
  displayName: string;
  kind: AzureSpeechFullApiSchemaDatasetKind2;
  lastActionDateTime?: string;
  links?: AzureSpeechFullApiSchemaDatasetLinks;
  locale: string;
  project?: AzureSpeechFullApiSchemaEntityReference;
  properties?: AzureSpeechFullApiSchemaDatasetProperties;
  self?: string;
  status?: AzureSpeechFullApiSchemaStatus3;
};
```

#### Properties

##### contentUrl?

```ts
optional contentUrl?: string;
```

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### customProperties?

```ts
optional customProperties?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### description?

```ts
optional description?: string;
```

##### displayName

```ts
displayName: string;
```

##### kind

```ts
kind: AzureSpeechFullApiSchemaDatasetKind2;
```

##### lastActionDateTime?

```ts
optional lastActionDateTime?: string;
```

##### links?

```ts
optional links?: AzureSpeechFullApiSchemaDatasetLinks;
```

##### locale

```ts
locale: string;
```

##### project?

```ts
optional project?: AzureSpeechFullApiSchemaEntityReference;
```

##### properties?

```ts
optional properties?: AzureSpeechFullApiSchemaDatasetProperties;
```

##### self?

```ts
optional self?: string;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaStatus3;
```

***

### AzureSpeechFullApiSchemaDatasetKind

```ts
type AzureSpeechFullApiSchemaDatasetKind = "AudioAndScript" | "LongAudio" | "AudioOnly";
```

***

### AzureSpeechFullApiSchemaDatasetKind2

```ts
type AzureSpeechFullApiSchemaDatasetKind2 =
  | "Language"
  | "Acoustic"
  | "Pronunciation"
  | "AudioFiles"
  | "LanguageMarkdown"
  | "OutputFormatting";
```

***

### AzureSpeechFullApiSchemaDatasetLinks

```ts
type AzureSpeechFullApiSchemaDatasetLinks = {
  commitBlocks?: string;
  files?: string;
  listBlocks?: string;
  uploadBlocks?: string;
};
```

#### Properties

##### commitBlocks?

```ts
optional commitBlocks?: string;
```

##### files?

```ts
optional files?: string;
```

##### listBlocks?

```ts
optional listBlocks?: string;
```

##### uploadBlocks?

```ts
optional uploadBlocks?: string;
```

***

### AzureSpeechFullApiSchemaDatasetLocales

```ts
type AzureSpeechFullApiSchemaDatasetLocales = {
  Acoustic?: ReadonlyArray<string>;
  AudioFiles?: ReadonlyArray<string>;
  Language?: ReadonlyArray<string>;
  LanguageMarkdown?: ReadonlyArray<string>;
  OutputFormatting?: ReadonlyArray<string>;
  Pronunciation?: ReadonlyArray<string>;
};
```

#### Properties

##### Acoustic?

```ts
optional Acoustic?: ReadonlyArray<string>;
```

##### AudioFiles?

```ts
optional AudioFiles?: ReadonlyArray<string>;
```

##### Language?

```ts
optional Language?: ReadonlyArray<string>;
```

##### LanguageMarkdown?

```ts
optional LanguageMarkdown?: ReadonlyArray<string>;
```

##### OutputFormatting?

```ts
optional OutputFormatting?: ReadonlyArray<string>;
```

##### Pronunciation?

```ts
optional Pronunciation?: ReadonlyArray<string>;
```

***

### AzureSpeechFullApiSchemaDatasetProperties

```ts
type AzureSpeechFullApiSchemaDatasetProperties = {
  acceptedLineCount?: number;
  durationMilliseconds?: number;
  error?: AzureSpeechFullApiSchemaEntityError;
  rejectedLineCount?: number;
  textNormalizationKind?: AzureSpeechFullApiSchemaTextNormalizationKind;
};
```

#### Properties

##### acceptedLineCount?

```ts
optional acceptedLineCount?: number;
```

##### durationMilliseconds?

```ts
optional durationMilliseconds?: number;
```

##### error?

```ts
optional error?: AzureSpeechFullApiSchemaEntityError;
```

##### rejectedLineCount?

```ts
optional rejectedLineCount?: number;
```

##### textNormalizationKind?

```ts
optional textNormalizationKind?: AzureSpeechFullApiSchemaTextNormalizationKind;
```

***

### AzureSpeechFullApiSchemaDatasetUpdate

```ts
type AzureSpeechFullApiSchemaDatasetUpdate = {
  customProperties?: {
   [key: string]: string;
  };
  description?: string;
  displayName?: string;
  project?: AzureSpeechFullApiSchemaEntityReference;
};
```

#### Properties

##### customProperties?

```ts
optional customProperties?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### description?

```ts
optional description?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### project?

```ts
optional project?: AzureSpeechFullApiSchemaEntityReference;
```

***

### AzureSpeechFullApiSchemaDetailedErrorCode

```ts
type AzureSpeechFullApiSchemaDetailedErrorCode =
  | "InvalidParameterValue"
  | "InvalidRequestBodyFormat"
  | "EmptyRequest"
  | "MissingInputRecords"
  | "InvalidDocument"
  | "ModelVersionIncorrect"
  | "InvalidDocumentBatch"
  | "UnsupportedLanguageCode"
  | "DataImportFailed"
  | "InUseViolation"
  | "InvalidLocale"
  | "InvalidBaseModel"
  | "InvalidAdaptationMapping"
  | "InvalidDataset"
  | "InvalidTest"
  | "FailedDataset"
  | "InvalidModel"
  | "InvalidTranscription"
  | "InvalidPayload"
  | "InvalidParameter"
  | "EndpointWithoutLogging"
  | "InvalidPermissions"
  | "InvalidPrerequisite"
  | "InvalidProductId"
  | "InvalidSubscription"
  | "InvalidProject"
  | "InvalidProjectKind"
  | "InvalidRecordingsUri"
  | "OnlyOneOfUrlsOrContainerOrDataset"
  | "ExceededNumberOfRecordingsUris"
  | "InvalidChannels"
  | "ModelMismatch"
  | "ProjectGenderMismatch"
  | "ModelDeprecated"
  | "ModelExists"
  | "ModelNotDeployable"
  | "EndpointNotUpdatable"
  | "SingleDefaultEndpoint"
  | "EndpointCannotBeDefault"
  | "InvalidModelUri"
  | "SubscriptionNotFound"
  | "QuotaViolation"
  | "UnsupportedDelta"
  | "UnsupportedFilter"
  | "UnsupportedPagination"
  | "UnsupportedDynamicConfiguration"
  | "UnsupportedOrderBy"
  | "NoUtf8WithBom"
  | "ModelDeploymentNotCompleteState"
  | "SkuLimitsExist"
  | "DeployingFailedModel"
  | "UnsupportedTimeRange"
  | "InvalidLogDate"
  | "InvalidLogId"
  | "InvalidLogStartTime"
  | "InvalidLogEndTime"
  | "InvalidTopForLogs"
  | "InvalidSkipTokenForLogs"
  | "DeleteNotAllowed"
  | "Forbidden"
  | "DeployNotAllowed"
  | "UnexpectedError"
  | "InvalidCollection"
  | "InvalidCallbackUri"
  | "InvalidSasValidityDuration"
  | "InaccessibleCustomerStorage"
  | "UnsupportedClassBasedAdaptation"
  | "InvalidWebHookEventKind"
  | "InvalidTimeToLive"
  | "InvalidSourceAzureResourceId"
  | "ModelCopyAuthorizationExpired"
  | "EndpointLoggingNotSupported"
  | "NoLanguageIdentified"
  | "MultipleLanguagesIdentified"
  | "InvalidAudioFormat"
  | "BadChannelConfiguration"
  | "InvalidChannelSpecification"
  | "AudioLengthLimitExceeded"
  | "EmptyAudioFile";
```

***

### AzureSpeechFullApiSchemaDiarizationProperties

```ts
type AzureSpeechFullApiSchemaDiarizationProperties = {
  enabled?: boolean;
  maxSpeakers?: number;
};
```

#### Properties

##### enabled?

```ts
optional enabled?: boolean;
```

##### maxSpeakers?

```ts
optional maxSpeakers?: number;
```

***

### AzureSpeechFullApiSchemaEditsSummary

```ts
type AzureSpeechFullApiSchemaEditsSummary = {
  numberOfEdits?: number;
  percentageOfAllEdits?: number;
};
```

#### Properties

##### numberOfEdits?

```ts
optional numberOfEdits?: number;
```

##### percentageOfAllEdits?

```ts
optional percentageOfAllEdits?: number;
```

***

### AzureSpeechFullApiSchemaEndpoint

```ts
type AzureSpeechFullApiSchemaEndpoint = {
  createdDateTime?: string;
  description?: string;
  displayName?: string;
  id?: string;
  lastActionDateTime?: string;
  modelId: AzureSpeechFullApiSchemaResourceId2;
  projectId: AzureSpeechFullApiSchemaResourceId2;
  properties?: AzureSpeechFullApiSchemaEndpointProperties;
  status?: AzureSpeechFullApiSchemaStatus2;
};
```

#### Properties

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### description?

```ts
optional description?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### id?

```ts
optional id?: string;
```

##### lastActionDateTime?

```ts
optional lastActionDateTime?: string;
```

##### modelId

```ts
modelId: AzureSpeechFullApiSchemaResourceId2;
```

##### projectId

```ts
projectId: AzureSpeechFullApiSchemaResourceId2;
```

##### properties?

```ts
optional properties?: AzureSpeechFullApiSchemaEndpointProperties;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaStatus2;
```

***

### AzureSpeechFullApiSchemaEndpoint2

```ts
type AzureSpeechFullApiSchemaEndpoint2 = {
  createdDateTime?: string;
  customProperties?: {
   [key: string]: string;
  };
  description?: string;
  displayName: string;
  lastActionDateTime?: string;
  links?: AzureSpeechFullApiSchemaEndpointLinks;
  locale: string;
  model?: AzureSpeechFullApiSchemaEntityReference;
  project?: AzureSpeechFullApiSchemaEntityReference;
  properties?: AzureSpeechFullApiSchemaEndpointProperties2;
  self?: string;
  status?: AzureSpeechFullApiSchemaStatus3;
};
```

#### Properties

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### customProperties?

```ts
optional customProperties?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### description?

```ts
optional description?: string;
```

##### displayName

```ts
displayName: string;
```

##### lastActionDateTime?

```ts
optional lastActionDateTime?: string;
```

##### links?

```ts
optional links?: AzureSpeechFullApiSchemaEndpointLinks;
```

##### locale

```ts
locale: string;
```

##### model?

```ts
optional model?: AzureSpeechFullApiSchemaEntityReference;
```

##### project?

```ts
optional project?: AzureSpeechFullApiSchemaEntityReference;
```

##### properties?

```ts
optional properties?: AzureSpeechFullApiSchemaEndpointProperties2;
```

##### self?

```ts
optional self?: string;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaStatus3;
```

***

### AzureSpeechFullApiSchemaEndpointKind

```ts
type AzureSpeechFullApiSchemaEndpointKind = "HighPerformance" | "FastResume";
```

***

### AzureSpeechFullApiSchemaEndpointLinks

```ts
type AzureSpeechFullApiSchemaEndpointLinks = {
  webSocket?: string;
};
```

#### Properties

##### webSocket?

```ts
optional webSocket?: string;
```

***

### AzureSpeechFullApiSchemaEndpointProperties

```ts
type AzureSpeechFullApiSchemaEndpointProperties = {
  kind?: AzureSpeechFullApiSchemaEndpointKind;
};
```

#### Properties

##### kind?

```ts
optional kind?: AzureSpeechFullApiSchemaEndpointKind;
```

***

### AzureSpeechFullApiSchemaEndpointProperties2

```ts
type AzureSpeechFullApiSchemaEndpointProperties2 = {
  error?: AzureSpeechFullApiSchemaEntityError;
  loggingEnabled?: boolean;
};
```

#### Properties

##### error?

```ts
optional error?: AzureSpeechFullApiSchemaEntityError;
```

##### loggingEnabled?

```ts
optional loggingEnabled?: boolean;
```

***

### AzureSpeechFullApiSchemaEndpointPropertiesUpdate

```ts
type AzureSpeechFullApiSchemaEndpointPropertiesUpdate = {
  contentLoggingEnabled?: boolean;
};
```

#### Properties

##### contentLoggingEnabled?

```ts
optional contentLoggingEnabled?: boolean;
```

***

### AzureSpeechFullApiSchemaEndpointUpdate

```ts
type AzureSpeechFullApiSchemaEndpointUpdate = {
  customProperties?: {
   [key: string]: string;
  };
  description?: string;
  displayName?: string;
  model?: AzureSpeechFullApiSchemaEntityReference;
  project?: AzureSpeechFullApiSchemaEntityReference;
  properties?: AzureSpeechFullApiSchemaEndpointPropertiesUpdate;
};
```

#### Properties

##### customProperties?

```ts
optional customProperties?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### description?

```ts
optional description?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### model?

```ts
optional model?: AzureSpeechFullApiSchemaEntityReference;
```

##### project?

```ts
optional project?: AzureSpeechFullApiSchemaEntityReference;
```

##### properties?

```ts
optional properties?: AzureSpeechFullApiSchemaEndpointPropertiesUpdate;
```

***

### AzureSpeechFullApiSchemaEntityError

```ts
type AzureSpeechFullApiSchemaEntityError = {
  code?: string;
  message?: string;
};
```

#### Properties

##### code?

```ts
optional code?: string;
```

##### message?

```ts
optional message?: string;
```

***

### AzureSpeechFullApiSchemaEntityReference

```ts
type AzureSpeechFullApiSchemaEntityReference = {
  self: string;
};
```

#### Properties

##### self

```ts
self: string;
```

***

### AzureSpeechFullApiSchemaError

```ts
type AzureSpeechFullApiSchemaError = {
  code?: AzureSpeechFullApiSchemaErrorCode;
  details?: ReadonlyArray<AzureSpeechFullApiSchemaError>;
  innerError?: AzureSpeechFullApiSchemaInnerError;
  message?: string;
  target?: string;
};
```

#### Properties

##### code?

```ts
optional code?: AzureSpeechFullApiSchemaErrorCode;
```

##### details?

```ts
optional details?: ReadonlyArray<AzureSpeechFullApiSchemaError>;
```

##### innerError?

```ts
optional innerError?: AzureSpeechFullApiSchemaInnerError;
```

##### message?

```ts
optional message?: string;
```

##### target?

```ts
optional target?: string;
```

***

### AzureSpeechFullApiSchemaError2

```ts
type AzureSpeechFullApiSchemaError2 = {
  code: AzureSpeechFullApiSchemaErrorCode2;
  details?: ReadonlyArray<AzureSpeechFullApiSchemaError2>;
  innererror?: AzureSpeechFullApiSchemaInnerError2;
  message: string;
  target?: string;
};
```

#### Properties

##### code

```ts
code: AzureSpeechFullApiSchemaErrorCode2;
```

##### details?

```ts
optional details?: ReadonlyArray<AzureSpeechFullApiSchemaError2>;
```

##### innererror?

```ts
optional innererror?: AzureSpeechFullApiSchemaInnerError2;
```

##### message

```ts
message: string;
```

##### target?

```ts
optional target?: string;
```

***

### AzureSpeechFullApiSchemaError3

```ts
type AzureSpeechFullApiSchemaError3 = {
  code: AzureSpeechFullApiSchemaErrorCode3;
  details?: ReadonlyArray<AzureSpeechFullApiSchemaError3>;
  innererror?: AzureSpeechFullApiSchemaInnerError3;
  message: string;
  target?: string;
};
```

#### Properties

##### code

```ts
code: AzureSpeechFullApiSchemaErrorCode3;
```

##### details?

```ts
optional details?: ReadonlyArray<AzureSpeechFullApiSchemaError3>;
```

##### innererror?

```ts
optional innererror?: AzureSpeechFullApiSchemaInnerError3;
```

##### message

```ts
message: string;
```

##### target?

```ts
optional target?: string;
```

***

### AzureSpeechFullApiSchemaErrorCode

```ts
type AzureSpeechFullApiSchemaErrorCode =
  | "InvalidRequest"
  | "InvalidArgument"
  | "InternalServerError"
  | "ServiceUnavailable"
  | "NotFound"
  | "PipelineError"
  | "Conflict"
  | "InternalCommunicationFailed"
  | "Forbidden"
  | "NotAllowed"
  | "Unauthorized"
  | "UnsupportedMediaType"
  | "TooManyRequests"
  | "UnprocessableEntity";
```

***

### AzureSpeechFullApiSchemaErrorCode2

```ts
type AzureSpeechFullApiSchemaErrorCode2 =
  | "BadRequest"
  | "BadArgument"
  | "Unauthorized"
  | "Forbidden"
  | "NotFound"
  | "UnsupportedMediaType"
  | "TooManyRequests"
  | "InternalServerError"
  | "ServiceUnavailable";
```

***

### AzureSpeechFullApiSchemaErrorCode3

```ts
type AzureSpeechFullApiSchemaErrorCode3 =
  | "BadRequest"
  | "BadArgument"
  | "Unauthorized"
  | "Forbidden"
  | "NotFound"
  | "UnsupportedMediaType"
  | "TooManyRequests"
  | "InternalServerError"
  | "ServiceUnavailable";
```

***

### AzureSpeechFullApiSchemaErrorResponse

```ts
type AzureSpeechFullApiSchemaErrorResponse = {
  error: AzureSpeechFullApiSchemaError2;
};
```

#### Properties

##### error

```ts
error: AzureSpeechFullApiSchemaError2;
```

***

### AzureSpeechFullApiSchemaErrorResponse2

```ts
type AzureSpeechFullApiSchemaErrorResponse2 = {
  error: AzureSpeechFullApiSchemaError3;
};
```

#### Properties

##### error

```ts
error: AzureSpeechFullApiSchemaError3;
```

***

### AzureSpeechFullApiSchemaEvaluation

```ts
type AzureSpeechFullApiSchemaEvaluation = {
  createdDateTime?: string;
  customProperties?: {
   [key: string]: string;
  };
  dataset: AzureSpeechFullApiSchemaEntityReference;
  description?: string;
  displayName: string;
  lastActionDateTime?: string;
  links?: AzureSpeechFullApiSchemaEvaluationLinks;
  locale: string;
  model1: AzureSpeechFullApiSchemaEntityReference;
  model2: AzureSpeechFullApiSchemaEntityReference;
  project?: AzureSpeechFullApiSchemaEntityReference;
  properties?: AzureSpeechFullApiSchemaEvaluationProperties;
  self?: string;
  status?: AzureSpeechFullApiSchemaStatus3;
  transcription1?: AzureSpeechFullApiSchemaEntityReference;
  transcription2?: AzureSpeechFullApiSchemaEntityReference;
};
```

#### Properties

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### customProperties?

```ts
optional customProperties?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### dataset

```ts
dataset: AzureSpeechFullApiSchemaEntityReference;
```

##### description?

```ts
optional description?: string;
```

##### displayName

```ts
displayName: string;
```

##### lastActionDateTime?

```ts
optional lastActionDateTime?: string;
```

##### links?

```ts
optional links?: AzureSpeechFullApiSchemaEvaluationLinks;
```

##### locale

```ts
locale: string;
```

##### model1

```ts
model1: AzureSpeechFullApiSchemaEntityReference;
```

##### model2

```ts
model2: AzureSpeechFullApiSchemaEntityReference;
```

##### project?

```ts
optional project?: AzureSpeechFullApiSchemaEntityReference;
```

##### properties?

```ts
optional properties?: AzureSpeechFullApiSchemaEvaluationProperties;
```

##### self?

```ts
optional self?: string;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaStatus3;
```

##### transcription1?

```ts
optional transcription1?: AzureSpeechFullApiSchemaEntityReference;
```

##### transcription2?

```ts
optional transcription2?: AzureSpeechFullApiSchemaEntityReference;
```

***

### AzureSpeechFullApiSchemaEvaluationLinks

```ts
type AzureSpeechFullApiSchemaEvaluationLinks = {
  files?: string;
};
```

#### Properties

##### files?

```ts
optional files?: string;
```

***

### AzureSpeechFullApiSchemaEvaluationProperties

```ts
type AzureSpeechFullApiSchemaEvaluationProperties = {
  correctTokenCount1?: number;
  correctTokenCount2?: number;
  correctWordCount1?: number;
  correctWordCount2?: number;
  error?: AzureSpeechFullApiSchemaEntityError;
  sentenceCount1?: number;
  sentenceCount2?: number;
  sentenceErrorRate1?: number;
  sentenceErrorRate2?: number;
  tokenCount1?: number;
  tokenCount2?: number;
  tokenDeletionCount1?: number;
  tokenDeletionCount2?: number;
  tokenErrorRate1?: number;
  tokenErrorRate2?: number;
  tokenErrors1?: AzureSpeechFullApiSchemaTokenErrorDetails;
  tokenErrors2?: AzureSpeechFullApiSchemaTokenErrorDetails;
  tokenInsertionCount1?: number;
  tokenInsertionCount2?: number;
  tokenSubstitutionCount1?: number;
  tokenSubstitutionCount2?: number;
  wordCount1?: number;
  wordCount2?: number;
  wordDeletionCount1?: number;
  wordDeletionCount2?: number;
  wordErrorRate1?: number;
  wordErrorRate2?: number;
  wordInsertionCount1?: number;
  wordInsertionCount2?: number;
  wordSubstitutionCount1?: number;
  wordSubstitutionCount2?: number;
};
```

#### Properties

##### correctTokenCount1?

```ts
optional correctTokenCount1?: number;
```

##### correctTokenCount2?

```ts
optional correctTokenCount2?: number;
```

##### correctWordCount1?

```ts
optional correctWordCount1?: number;
```

##### correctWordCount2?

```ts
optional correctWordCount2?: number;
```

##### error?

```ts
optional error?: AzureSpeechFullApiSchemaEntityError;
```

##### sentenceCount1?

```ts
optional sentenceCount1?: number;
```

##### sentenceCount2?

```ts
optional sentenceCount2?: number;
```

##### sentenceErrorRate1?

```ts
optional sentenceErrorRate1?: number;
```

##### sentenceErrorRate2?

```ts
optional sentenceErrorRate2?: number;
```

##### tokenCount1?

```ts
optional tokenCount1?: number;
```

##### tokenCount2?

```ts
optional tokenCount2?: number;
```

##### tokenDeletionCount1?

```ts
optional tokenDeletionCount1?: number;
```

##### tokenDeletionCount2?

```ts
optional tokenDeletionCount2?: number;
```

##### tokenErrorRate1?

```ts
optional tokenErrorRate1?: number;
```

##### tokenErrorRate2?

```ts
optional tokenErrorRate2?: number;
```

##### tokenErrors1?

```ts
optional tokenErrors1?: AzureSpeechFullApiSchemaTokenErrorDetails;
```

##### tokenErrors2?

```ts
optional tokenErrors2?: AzureSpeechFullApiSchemaTokenErrorDetails;
```

##### tokenInsertionCount1?

```ts
optional tokenInsertionCount1?: number;
```

##### tokenInsertionCount2?

```ts
optional tokenInsertionCount2?: number;
```

##### tokenSubstitutionCount1?

```ts
optional tokenSubstitutionCount1?: number;
```

##### tokenSubstitutionCount2?

```ts
optional tokenSubstitutionCount2?: number;
```

##### wordCount1?

```ts
optional wordCount1?: number;
```

##### wordCount2?

```ts
optional wordCount2?: number;
```

##### wordDeletionCount1?

```ts
optional wordDeletionCount1?: number;
```

##### wordDeletionCount2?

```ts
optional wordDeletionCount2?: number;
```

##### wordErrorRate1?

```ts
optional wordErrorRate1?: number;
```

##### wordErrorRate2?

```ts
optional wordErrorRate2?: number;
```

##### wordInsertionCount1?

```ts
optional wordInsertionCount1?: number;
```

##### wordInsertionCount2?

```ts
optional wordInsertionCount2?: number;
```

##### wordSubstitutionCount1?

```ts
optional wordSubstitutionCount1?: number;
```

##### wordSubstitutionCount2?

```ts
optional wordSubstitutionCount2?: number;
```

***

### AzureSpeechFullApiSchemaEvaluationUpdate

```ts
type AzureSpeechFullApiSchemaEvaluationUpdate = {
  customProperties?: {
   [key: string]: string;
  };
  description?: string;
  displayName?: string;
  project?: AzureSpeechFullApiSchemaEntityReference;
};
```

#### Properties

##### customProperties?

```ts
optional customProperties?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### description?

```ts
optional description?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### project?

```ts
optional project?: AzureSpeechFullApiSchemaEntityReference;
```

***

### AzureSpeechFullApiSchemaFile

```ts
type AzureSpeechFullApiSchemaFile = {
  createdDateTime?: string;
  kind?: AzureSpeechFullApiSchemaFileKind;
  links?: AzureSpeechFullApiSchemaFileLinks;
  name?: string;
  properties?: AzureSpeechFullApiSchemaFileProperties;
  self?: string;
};
```

#### Properties

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### kind?

```ts
optional kind?: AzureSpeechFullApiSchemaFileKind;
```

##### links?

```ts
optional links?: AzureSpeechFullApiSchemaFileLinks;
```

##### name?

```ts
optional name?: string;
```

##### properties?

```ts
optional properties?: AzureSpeechFullApiSchemaFileProperties;
```

##### self?

```ts
optional self?: string;
```

***

### AzureSpeechFullApiSchemaFileKind

```ts
type AzureSpeechFullApiSchemaFileKind =
  | "DatasetReport"
  | "Audio"
  | "LanguageData"
  | "PronunciationData"
  | "AcousticDataArchive"
  | "AcousticDataTranscriptionV2"
  | "Transcription"
  | "TranscriptionReport"
  | "EvaluationDetails"
  | "ModelReport"
  | "OutputFormattingData";
```

***

### AzureSpeechFullApiSchemaFileLinks

```ts
type AzureSpeechFullApiSchemaFileLinks = {
  contentUrl?: string;
};
```

#### Properties

##### contentUrl?

```ts
optional contentUrl?: string;
```

***

### AzureSpeechFullApiSchemaFileProperties

```ts
type AzureSpeechFullApiSchemaFileProperties = {
  durationMilliseconds?: number;
  size?: number;
};
```

#### Properties

##### durationMilliseconds?

```ts
optional durationMilliseconds?: number;
```

##### size?

```ts
optional size?: number;
```

***

### AzureSpeechFullApiSchemaInnerError

```ts
type AzureSpeechFullApiSchemaInnerError = {
  code?: AzureSpeechFullApiSchemaDetailedErrorCode;
  details?: {
   [key: string]: string;
  };
  innerError?: AzureSpeechFullApiSchemaInnerError;
  message?: string;
  target?: string;
};
```

#### Properties

##### code?

```ts
optional code?: AzureSpeechFullApiSchemaDetailedErrorCode;
```

##### details?

```ts
optional details?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### innerError?

```ts
optional innerError?: AzureSpeechFullApiSchemaInnerError;
```

##### message?

```ts
optional message?: string;
```

##### target?

```ts
optional target?: string;
```

***

### AzureSpeechFullApiSchemaInnerError2

```ts
type AzureSpeechFullApiSchemaInnerError2 = {
  code?: string;
  innererror?: AzureSpeechFullApiSchemaInnerError2;
  message?: string;
  target?: string;
};
```

#### Properties

##### code?

```ts
optional code?: string;
```

##### innererror?

```ts
optional innererror?: AzureSpeechFullApiSchemaInnerError2;
```

##### message?

```ts
optional message?: string;
```

##### target?

```ts
optional target?: string;
```

***

### AzureSpeechFullApiSchemaInnerError3

```ts
type AzureSpeechFullApiSchemaInnerError3 = {
  code?: string;
  innererror?: AzureSpeechFullApiSchemaInnerError3;
  message?: string;
  target?: string;
};
```

#### Properties

##### code?

```ts
optional code?: string;
```

##### innererror?

```ts
optional innererror?: AzureSpeechFullApiSchemaInnerError3;
```

##### message?

```ts
optional message?: string;
```

##### target?

```ts
optional target?: string;
```

***

### AzureSpeechFullApiSchemaInputKind

```ts
type AzureSpeechFullApiSchemaInputKind = "PlainText" | "SSML";
```

***

### AzureSpeechFullApiSchemaJsonPrimitive

```ts
type AzureSpeechFullApiSchemaJsonPrimitive = string | number | boolean | null;
```

***

### AzureSpeechFullApiSchemaJsonValue

```ts
type AzureSpeechFullApiSchemaJsonValue =
  | AzureSpeechFullApiSchemaJsonPrimitive
  | readonly AzureSpeechFullApiSchemaJsonValue[]
  | {
[key: string]: AzureSpeechFullApiSchemaJsonValue;
};
```

***

### AzureSpeechFullApiSchemaLanguageIdentificationMode

```ts
type AzureSpeechFullApiSchemaLanguageIdentificationMode = "Continuous" | "Single";
```

***

### AzureSpeechFullApiSchemaLanguageIdentificationProperties

```ts
type AzureSpeechFullApiSchemaLanguageIdentificationProperties = {
  candidateLocales: ReadonlyArray<string>;
  mode?: AzureSpeechFullApiSchemaLanguageIdentificationMode;
  speechModelMapping?: {
   [key: string]: AzureSpeechFullApiSchemaEntityReference;
  };
};
```

#### Properties

##### candidateLocales

```ts
candidateLocales: ReadonlyArray<string>;
```

##### mode?

```ts
optional mode?: AzureSpeechFullApiSchemaLanguageIdentificationMode;
```

##### speechModelMapping?

```ts
optional speechModelMapping?: {
[key: string]: AzureSpeechFullApiSchemaEntityReference;
};
```

###### Index Signature

```ts
[key: string]: AzureSpeechFullApiSchemaEntityReference
```

***

### AzureSpeechFullApiSchemaModel

```ts
type AzureSpeechFullApiSchemaModel = {
  consentId: AzureSpeechFullApiSchemaResourceId2;
  createdDateTime?: string;
  description?: string;
  engineVersion?: string;
  id?: AzureSpeechFullApiSchemaResourceId2;
  lastActionDateTime?: string;
  locale?: string;
  projectId: AzureSpeechFullApiSchemaResourceId2;
  properties?: AzureSpeechFullApiSchemaModelProperties;
  recipe: AzureSpeechFullApiSchemaRecipe;
  status?: AzureSpeechFullApiSchemaStatus2;
  trainingSetId: AzureSpeechFullApiSchemaResourceId2;
  voiceName?: string;
};
```

#### Properties

##### consentId

```ts
consentId: AzureSpeechFullApiSchemaResourceId2;
```

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### description?

```ts
optional description?: string;
```

##### engineVersion?

```ts
optional engineVersion?: string;
```

##### id?

```ts
optional id?: AzureSpeechFullApiSchemaResourceId2;
```

##### lastActionDateTime?

```ts
optional lastActionDateTime?: string;
```

##### locale?

```ts
optional locale?: string;
```

##### projectId

```ts
projectId: AzureSpeechFullApiSchemaResourceId2;
```

##### properties?

```ts
optional properties?: AzureSpeechFullApiSchemaModelProperties;
```

##### recipe

```ts
recipe: AzureSpeechFullApiSchemaRecipe;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaStatus2;
```

##### trainingSetId

```ts
trainingSetId: AzureSpeechFullApiSchemaResourceId2;
```

##### voiceName?

```ts
optional voiceName?: string;
```

***

### AzureSpeechFullApiSchemaModelCapability

```ts
type AzureSpeechFullApiSchemaModelCapability = "PersonalVoice";
```

***

### AzureSpeechFullApiSchemaModelCopyAuthorization

```ts
type AzureSpeechFullApiSchemaModelCopyAuthorization = {
  expirationDateTime: string;
  id: string;
  sourceResourceId: string;
  targetResourceEndpoint: string;
  targetResourceId: string;
  targetResourceRegion: string;
};
```

#### Properties

##### expirationDateTime

```ts
expirationDateTime: string;
```

##### id

```ts
id: string;
```

##### sourceResourceId

```ts
sourceResourceId: string;
```

##### targetResourceEndpoint

```ts
targetResourceEndpoint: string;
```

##### targetResourceId

```ts
targetResourceId: string;
```

##### targetResourceRegion

```ts
targetResourceRegion: string;
```

***

### AzureSpeechFullApiSchemaModelCopyAuthorizationDefinition

```ts
type AzureSpeechFullApiSchemaModelCopyAuthorizationDefinition = {
  sourceResourceId: string;
};
```

#### Properties

##### sourceResourceId

```ts
sourceResourceId: string;
```

***

### AzureSpeechFullApiSchemaModelFailureReason

```ts
type AzureSpeechFullApiSchemaModelFailureReason =
  | "InaccessibleCustomerStorage"
  | "SpeakerVerificationFailed"
  | "TerminateByUser"
  | "Internal";
```

***

### AzureSpeechFullApiSchemaModelFile

```ts
type AzureSpeechFullApiSchemaModelFile = {
  contentUrl?: string;
  name?: string;
};
```

#### Properties

##### contentUrl?

```ts
optional contentUrl?: string;
```

##### name?

```ts
optional name?: string;
```

***

### AzureSpeechFullApiSchemaModelManifest

```ts
type AzureSpeechFullApiSchemaModelManifest = {
  model: AzureSpeechFullApiSchemaEntityReference;
  modelFiles: ReadonlyArray<AzureSpeechFullApiSchemaModelFile>;
  properties: {
   [key: string]: AzureSpeechFullApiSchemaJsonValue;
  };
};
```

#### Properties

##### model

```ts
model: AzureSpeechFullApiSchemaEntityReference;
```

##### modelFiles

```ts
modelFiles: ReadonlyArray<AzureSpeechFullApiSchemaModelFile>;
```

##### properties

```ts
properties: {
[key: string]: AzureSpeechFullApiSchemaJsonValue;
};
```

###### Index Signature

```ts
[key: string]: AzureSpeechFullApiSchemaJsonValue
```

***

### AzureSpeechFullApiSchemaModelProperties

```ts
type AzureSpeechFullApiSchemaModelProperties = {
  failureReason?: AzureSpeechFullApiSchemaModelFailureReason;
  presetStyles?: ReadonlyArray<string>;
  styleTrainingSetIds?: {
   [key: string]: string;
  };
  voiceStyles?: ReadonlyArray<string>;
};
```

#### Properties

##### failureReason?

```ts
optional failureReason?: AzureSpeechFullApiSchemaModelFailureReason;
```

##### presetStyles?

```ts
optional presetStyles?: ReadonlyArray<string>;
```

##### styleTrainingSetIds?

```ts
optional styleTrainingSetIds?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### voiceStyles?

```ts
optional voiceStyles?: ReadonlyArray<string>;
```

***

### AzureSpeechFullApiSchemaModelUpdate

```ts
type AzureSpeechFullApiSchemaModelUpdate = {
  customProperties?: {
   [key: string]: string;
  };
  description?: string;
  displayName?: string;
  project?: AzureSpeechFullApiSchemaEntityReference;
};
```

#### Properties

##### customProperties?

```ts
optional customProperties?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### description?

```ts
optional description?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### project?

```ts
optional project?: AzureSpeechFullApiSchemaEntityReference;
```

***

### AzureSpeechFullApiSchemaOperation

```ts
type AzureSpeechFullApiSchemaOperation = {
  id?: AzureSpeechFullApiSchemaOperationId;
  status?: AzureSpeechFullApiSchemaOperationStatus;
};
```

#### Properties

##### id?

```ts
optional id?: AzureSpeechFullApiSchemaOperationId;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaOperationStatus;
```

***

### AzureSpeechFullApiSchemaOperation2

```ts
type AzureSpeechFullApiSchemaOperation2 = {
  id?: AzureSpeechFullApiSchemaOperationId2;
  status?: AzureSpeechFullApiSchemaOperationStatus2;
};
```

#### Properties

##### id?

```ts
optional id?: AzureSpeechFullApiSchemaOperationId2;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaOperationStatus2;
```

***

### AzureSpeechFullApiSchemaOperation3

```ts
type AzureSpeechFullApiSchemaOperation3 = {
  createdDateTime?: string;
  error?: AzureSpeechFullApiSchemaEntityError;
  id: string;
  lastActionDateTime?: string;
  result?: AzureSpeechFullApiSchemaOperationResult;
  self?: string;
  status?: AzureSpeechFullApiSchemaStatus3;
};
```

#### Properties

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### error?

```ts
optional error?: AzureSpeechFullApiSchemaEntityError;
```

##### id

```ts
id: string;
```

##### lastActionDateTime?

```ts
optional lastActionDateTime?: string;
```

##### result?

```ts
optional result?: AzureSpeechFullApiSchemaOperationResult;
```

##### self?

```ts
optional self?: string;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaStatus3;
```

***

### AzureSpeechFullApiSchemaOperationId

```ts
type AzureSpeechFullApiSchemaOperationId = string;
```

***

### AzureSpeechFullApiSchemaOperationId2

```ts
type AzureSpeechFullApiSchemaOperationId2 = string;
```

***

### AzureSpeechFullApiSchemaOperationResult

```ts
type AzureSpeechFullApiSchemaOperationResult = {
  link?: string;
};
```

#### Properties

##### link?

```ts
optional link?: string;
```

***

### AzureSpeechFullApiSchemaOperationStatus

```ts
type AzureSpeechFullApiSchemaOperationStatus = "NotStarted" | "Running" | "Succeeded" | "Failed";
```

***

### AzureSpeechFullApiSchemaOperationStatus2

```ts
type AzureSpeechFullApiSchemaOperationStatus2 = "NotStarted" | "Running" | "Succeeded" | "Failed";
```

***

### AzureSpeechFullApiSchemaPaginatedBaseModels

```ts
type AzureSpeechFullApiSchemaPaginatedBaseModels = {
  @nextLink?: string;
  values?: ReadonlyArray<AzureSpeechFullApiSchemaBaseModel2>;
};
```

#### Properties

##### @nextLink?

```ts
optional @nextLink?: string;
```

##### values?

```ts
optional values?: ReadonlyArray<AzureSpeechFullApiSchemaBaseModel2>;
```

***

### AzureSpeechFullApiSchemaPaginatedBatchSynthesis

```ts
type AzureSpeechFullApiSchemaPaginatedBatchSynthesis = {
  nextLink?: string;
  value: ReadonlyArray<AzureSpeechFullApiSchemaBatchSynthesis>;
};
```

#### Properties

##### nextLink?

```ts
optional nextLink?: string;
```

##### value

```ts
value: ReadonlyArray<AzureSpeechFullApiSchemaBatchSynthesis>;
```

***

### AzureSpeechFullApiSchemaPaginatedConsents

```ts
type AzureSpeechFullApiSchemaPaginatedConsents = {
  nextLink?: string;
  value: ReadonlyArray<AzureSpeechFullApiSchemaConsent>;
};
```

#### Properties

##### nextLink?

```ts
optional nextLink?: string;
```

##### value

```ts
value: ReadonlyArray<AzureSpeechFullApiSchemaConsent>;
```

***

### AzureSpeechFullApiSchemaPaginatedCustomModels

```ts
type AzureSpeechFullApiSchemaPaginatedCustomModels = {
  @nextLink?: string;
  values?: ReadonlyArray<AzureSpeechFullApiSchemaCustomModel>;
};
```

#### Properties

##### @nextLink?

```ts
optional @nextLink?: string;
```

##### values?

```ts
optional values?: ReadonlyArray<AzureSpeechFullApiSchemaCustomModel>;
```

***

### AzureSpeechFullApiSchemaPaginatedDatasets

```ts
type AzureSpeechFullApiSchemaPaginatedDatasets = {
  @nextLink?: string;
  values?: ReadonlyArray<AzureSpeechFullApiSchemaDataset2>;
};
```

#### Properties

##### @nextLink?

```ts
optional @nextLink?: string;
```

##### values?

```ts
optional values?: ReadonlyArray<AzureSpeechFullApiSchemaDataset2>;
```

***

### AzureSpeechFullApiSchemaPaginatedEndpoints

```ts
type AzureSpeechFullApiSchemaPaginatedEndpoints = {
  nextLink?: string;
  value: ReadonlyArray<AzureSpeechFullApiSchemaEndpoint>;
};
```

#### Properties

##### nextLink?

```ts
optional nextLink?: string;
```

##### value

```ts
value: ReadonlyArray<AzureSpeechFullApiSchemaEndpoint>;
```

***

### AzureSpeechFullApiSchemaPaginatedEndpoints2

```ts
type AzureSpeechFullApiSchemaPaginatedEndpoints2 = {
  @nextLink?: string;
  values?: ReadonlyArray<AzureSpeechFullApiSchemaEndpoint2>;
};
```

#### Properties

##### @nextLink?

```ts
optional @nextLink?: string;
```

##### values?

```ts
optional values?: ReadonlyArray<AzureSpeechFullApiSchemaEndpoint2>;
```

***

### AzureSpeechFullApiSchemaPaginatedEvaluations

```ts
type AzureSpeechFullApiSchemaPaginatedEvaluations = {
  @nextLink?: string;
  values?: ReadonlyArray<AzureSpeechFullApiSchemaEvaluation>;
};
```

#### Properties

##### @nextLink?

```ts
optional @nextLink?: string;
```

##### values?

```ts
optional values?: ReadonlyArray<AzureSpeechFullApiSchemaEvaluation>;
```

***

### AzureSpeechFullApiSchemaPaginatedFiles

```ts
type AzureSpeechFullApiSchemaPaginatedFiles = {
  @nextLink?: string;
  values?: ReadonlyArray<AzureSpeechFullApiSchemaFile>;
};
```

#### Properties

##### @nextLink?

```ts
optional @nextLink?: string;
```

##### values?

```ts
optional values?: ReadonlyArray<AzureSpeechFullApiSchemaFile>;
```

***

### AzureSpeechFullApiSchemaPaginatedModels

```ts
type AzureSpeechFullApiSchemaPaginatedModels = {
  nextLink?: string;
  value: ReadonlyArray<AzureSpeechFullApiSchemaModel>;
};
```

#### Properties

##### nextLink?

```ts
optional nextLink?: string;
```

##### value

```ts
value: ReadonlyArray<AzureSpeechFullApiSchemaModel>;
```

***

### AzureSpeechFullApiSchemaPaginatedPersonalVoices

```ts
type AzureSpeechFullApiSchemaPaginatedPersonalVoices = {
  nextLink?: string;
  value: ReadonlyArray<AzureSpeechFullApiSchemaPersonalVoice>;
};
```

#### Properties

##### nextLink?

```ts
optional nextLink?: string;
```

##### value

```ts
value: ReadonlyArray<AzureSpeechFullApiSchemaPersonalVoice>;
```

***

### AzureSpeechFullApiSchemaPaginatedProjects

```ts
type AzureSpeechFullApiSchemaPaginatedProjects = {
  nextLink?: string;
  value: ReadonlyArray<AzureSpeechFullApiSchemaProject>;
};
```

#### Properties

##### nextLink?

```ts
optional nextLink?: string;
```

##### value

```ts
value: ReadonlyArray<AzureSpeechFullApiSchemaProject>;
```

***

### AzureSpeechFullApiSchemaPaginatedProjects2

```ts
type AzureSpeechFullApiSchemaPaginatedProjects2 = {
  @nextLink?: string;
  values?: ReadonlyArray<AzureSpeechFullApiSchemaProject2>;
};
```

#### Properties

##### @nextLink?

```ts
optional @nextLink?: string;
```

##### values?

```ts
optional values?: ReadonlyArray<AzureSpeechFullApiSchemaProject2>;
```

***

### AzureSpeechFullApiSchemaPaginatedTrainingSets

```ts
type AzureSpeechFullApiSchemaPaginatedTrainingSets = {
  nextLink?: string;
  value: ReadonlyArray<AzureSpeechFullApiSchemaTrainingSet>;
};
```

#### Properties

##### nextLink?

```ts
optional nextLink?: string;
```

##### value

```ts
value: ReadonlyArray<AzureSpeechFullApiSchemaTrainingSet>;
```

***

### AzureSpeechFullApiSchemaPaginatedTranscriptions

```ts
type AzureSpeechFullApiSchemaPaginatedTranscriptions = {
  @nextLink?: string;
  values?: ReadonlyArray<AzureSpeechFullApiSchemaTranscription>;
};
```

#### Properties

##### @nextLink?

```ts
optional @nextLink?: string;
```

##### values?

```ts
optional values?: ReadonlyArray<AzureSpeechFullApiSchemaTranscription>;
```

***

### AzureSpeechFullApiSchemaPaginatedWebHooks

```ts
type AzureSpeechFullApiSchemaPaginatedWebHooks = {
  @nextLink?: string;
  values?: ReadonlyArray<AzureSpeechFullApiSchemaWebHook>;
};
```

#### Properties

##### @nextLink?

```ts
optional @nextLink?: string;
```

##### values?

```ts
optional values?: ReadonlyArray<AzureSpeechFullApiSchemaWebHook>;
```

***

### AzureSpeechFullApiSchemaPersonalVoice

```ts
type AzureSpeechFullApiSchemaPersonalVoice = {
  audios?: AzureSpeechFullApiSchemaAzureBlobContentSource;
  consentId: AzureSpeechFullApiSchemaResourceId2;
  createdDateTime?: string;
  description?: string;
  displayName?: string;
  id?: AzureSpeechFullApiSchemaResourceId2;
  lastActionDateTime?: string;
  projectId: AzureSpeechFullApiSchemaResourceId2;
  properties?: AzureSpeechFullApiSchemaPersonalVoiceProperties;
  speakerProfileId?: string;
  status?: AzureSpeechFullApiSchemaStatus2;
};
```

#### Properties

##### audios?

```ts
optional audios?: AzureSpeechFullApiSchemaAzureBlobContentSource;
```

##### consentId

```ts
consentId: AzureSpeechFullApiSchemaResourceId2;
```

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### description?

```ts
optional description?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### id?

```ts
optional id?: AzureSpeechFullApiSchemaResourceId2;
```

##### lastActionDateTime?

```ts
optional lastActionDateTime?: string;
```

##### projectId

```ts
projectId: AzureSpeechFullApiSchemaResourceId2;
```

##### properties?

```ts
optional properties?: AzureSpeechFullApiSchemaPersonalVoiceProperties;
```

##### speakerProfileId?

```ts
optional speakerProfileId?: string;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaStatus2;
```

***

### AzureSpeechFullApiSchemaPersonalVoiceProperties

```ts
type AzureSpeechFullApiSchemaPersonalVoiceProperties = {
  failureReason?: AzureSpeechFullApiSchemaModelFailureReason;
};
```

#### Properties

##### failureReason?

```ts
optional failureReason?: AzureSpeechFullApiSchemaModelFailureReason;
```

***

### AzureSpeechFullApiSchemaPhrase

```ts
type AzureSpeechFullApiSchemaPhrase = {
  channel?: number;
  confidence: number;
  durationMilliseconds: number;
  locale?: string;
  offsetMilliseconds: number;
  speaker?: number;
  text: string;
  words?: ReadonlyArray<AzureSpeechFullApiSchemaWord>;
};
```

#### Properties

##### channel?

```ts
optional channel?: number;
```

##### confidence

```ts
confidence: number;
```

##### durationMilliseconds

```ts
durationMilliseconds: number;
```

##### locale?

```ts
optional locale?: string;
```

##### offsetMilliseconds

```ts
offsetMilliseconds: number;
```

##### speaker?

```ts
optional speaker?: number;
```

##### text

```ts
text: string;
```

##### words?

```ts
optional words?: ReadonlyArray<AzureSpeechFullApiSchemaWord>;
```

***

### AzureSpeechFullApiSchemaPresetStyleItem

```ts
type AzureSpeechFullApiSchemaPresetStyleItem = {
  female?: ReadonlyArray<string>;
  male?: ReadonlyArray<string>;
};
```

#### Properties

##### female?

```ts
optional female?: ReadonlyArray<string>;
```

##### male?

```ts
optional male?: ReadonlyArray<string>;
```

***

### AzureSpeechFullApiSchemaProfanityFilterMode

```ts
type AzureSpeechFullApiSchemaProfanityFilterMode = "None" | "Removed" | "Tags" | "Masked";
```

***

### AzureSpeechFullApiSchemaProject

```ts
type AzureSpeechFullApiSchemaProject = {
  createdDateTime?: string;
  description?: string;
  displayName?: string;
  id?: AzureSpeechFullApiSchemaResourceId2;
  kind: AzureSpeechFullApiSchemaProjectKind;
};
```

#### Properties

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### description?

```ts
optional description?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### id?

```ts
optional id?: AzureSpeechFullApiSchemaResourceId2;
```

##### kind

```ts
kind: AzureSpeechFullApiSchemaProjectKind;
```

***

### AzureSpeechFullApiSchemaProject2

```ts
type AzureSpeechFullApiSchemaProject2 = {
  createdDateTime?: string;
  customProperties?: {
   [key: string]: string;
  };
  description?: string;
  displayName: string;
  foundryProjectName?: string;
  links?: AzureSpeechFullApiSchemaProjectLinks;
  locale: string;
  self?: string;
};
```

#### Properties

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### customProperties?

```ts
optional customProperties?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### description?

```ts
optional description?: string;
```

##### displayName

```ts
displayName: string;
```

##### foundryProjectName?

```ts
optional foundryProjectName?: string;
```

##### links?

```ts
optional links?: AzureSpeechFullApiSchemaProjectLinks;
```

##### locale

```ts
locale: string;
```

##### self?

```ts
optional self?: string;
```

***

### AzureSpeechFullApiSchemaProjectKind

```ts
type AzureSpeechFullApiSchemaProjectKind = "ProfessionalVoice" | "PersonalVoice";
```

***

### AzureSpeechFullApiSchemaProjectLinks

```ts
type AzureSpeechFullApiSchemaProjectLinks = {
  datasets?: string;
  endpoints?: string;
  evaluations?: string;
  models?: string;
  transcriptions?: string;
};
```

#### Properties

##### datasets?

```ts
optional datasets?: string;
```

##### endpoints?

```ts
optional endpoints?: string;
```

##### evaluations?

```ts
optional evaluations?: string;
```

##### models?

```ts
optional models?: string;
```

##### transcriptions?

```ts
optional transcriptions?: string;
```

***

### AzureSpeechFullApiSchemaProjectUpdate

```ts
type AzureSpeechFullApiSchemaProjectUpdate = {
  customProperties?: {
   [key: string]: string;
  };
  description?: string;
  displayName?: string;
  foundryProjectName?: string;
};
```

#### Properties

##### customProperties?

```ts
optional customProperties?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### description?

```ts
optional description?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### foundryProjectName?

```ts
optional foundryProjectName?: string;
```

***

### AzureSpeechFullApiSchemaPunctuationMode

```ts
type AzureSpeechFullApiSchemaPunctuationMode = "None" | "Dictated" | "Automatic" | "DictatedAndAutomatic";
```

***

### AzureSpeechFullApiSchemaRecipe

```ts
type AzureSpeechFullApiSchemaRecipe = {
  datasetLocales?: ReadonlyArray<string>;
  description?: string;
  kind?: string;
  maxCustomStyleNum?: number;
  minStyleUtteranceCount?: number;
  minUtteranceCount?: number;
  modelLocales?: ReadonlyArray<string>;
  presetStyles?: {
   [key: string]: AzureSpeechFullApiSchemaPresetStyleItem;
  };
  version?: string;
};
```

#### Properties

##### datasetLocales?

```ts
optional datasetLocales?: ReadonlyArray<string>;
```

##### description?

```ts
optional description?: string;
```

##### kind?

```ts
optional kind?: string;
```

##### maxCustomStyleNum?

```ts
optional maxCustomStyleNum?: number;
```

##### minStyleUtteranceCount?

```ts
optional minStyleUtteranceCount?: number;
```

##### minUtteranceCount?

```ts
optional minUtteranceCount?: number;
```

##### modelLocales?

```ts
optional modelLocales?: ReadonlyArray<string>;
```

##### presetStyles?

```ts
optional presetStyles?: {
[key: string]: AzureSpeechFullApiSchemaPresetStyleItem;
};
```

###### Index Signature

```ts
[key: string]: AzureSpeechFullApiSchemaPresetStyleItem
```

##### version?

```ts
optional version?: string;
```

***

### AzureSpeechFullApiSchemaResourceId

```ts
type AzureSpeechFullApiSchemaResourceId = string;
```

***

### AzureSpeechFullApiSchemaResourceId2

```ts
type AzureSpeechFullApiSchemaResourceId2 = string;
```

***

### AzureSpeechFullApiSchemaResponseBlock

```ts
type AzureSpeechFullApiSchemaResponseBlock = {
  name?: string;
  size?: number;
};
```

#### Properties

##### name?

```ts
optional name?: string;
```

##### size?

```ts
optional size?: number;
```

***

### AzureSpeechFullApiSchemaSharedModel

```ts
type AzureSpeechFullApiSchemaSharedModel = {
  createdDateTime?: string;
  description?: string;
  displayName: string;
  lastActionDateTime?: string;
  locale: string;
  self?: string;
  status?: AzureSpeechFullApiSchemaStatus3;
};
```

#### Properties

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### description?

```ts
optional description?: string;
```

##### displayName

```ts
displayName: string;
```

##### lastActionDateTime?

```ts
optional lastActionDateTime?: string;
```

##### locale

```ts
locale: string;
```

##### self?

```ts
optional self?: string;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaStatus3;
```

***

### AzureSpeechFullApiSchemaStatus

```ts
type AzureSpeechFullApiSchemaStatus = "NotStarted" | "Running" | "Succeeded" | "Failed";
```

***

### AzureSpeechFullApiSchemaStatus2

```ts
type AzureSpeechFullApiSchemaStatus2 =
  | "NotStarted"
  | "Running"
  | "Succeeded"
  | "Failed"
  | "Disabling"
  | "Disabled";
```

***

### AzureSpeechFullApiSchemaStatus3

```ts
type AzureSpeechFullApiSchemaStatus3 = "NotStarted" | "Running" | "Succeeded" | "Failed";
```

***

### AzureSpeechFullApiSchemaTextNormalizationKind

```ts
type AzureSpeechFullApiSchemaTextNormalizationKind = "Default" | "None";
```

***

### AzureSpeechFullApiSchemaTokenErrorDetails

```ts
type AzureSpeechFullApiSchemaTokenErrorDetails = {
  capitalization?: AzureSpeechFullApiSchemaEditsSummary;
  inverseTextNormalization?: AzureSpeechFullApiSchemaEditsSummary;
  lexical?: AzureSpeechFullApiSchemaEditsSummary;
  others?: AzureSpeechFullApiSchemaEditsSummary;
  punctuation?: AzureSpeechFullApiSchemaEditsSummary;
};
```

#### Properties

##### capitalization?

```ts
optional capitalization?: AzureSpeechFullApiSchemaEditsSummary;
```

##### inverseTextNormalization?

```ts
optional inverseTextNormalization?: AzureSpeechFullApiSchemaEditsSummary;
```

##### lexical?

```ts
optional lexical?: AzureSpeechFullApiSchemaEditsSummary;
```

##### others?

```ts
optional others?: AzureSpeechFullApiSchemaEditsSummary;
```

##### punctuation?

```ts
optional punctuation?: AzureSpeechFullApiSchemaEditsSummary;
```

***

### AzureSpeechFullApiSchemaTrainingSet

```ts
type AzureSpeechFullApiSchemaTrainingSet = {
  createdDateTime?: string;
  description?: string;
  displayName?: string;
  id?: AzureSpeechFullApiSchemaResourceId2;
  lastActionDateTime?: string;
  locale: string;
  projectId: AzureSpeechFullApiSchemaResourceId2;
  properties?: AzureSpeechFullApiSchemaTrainingSetProperties;
  status?: AzureSpeechFullApiSchemaStatus2;
  voiceKind?: AzureSpeechFullApiSchemaVoiceKind;
};
```

#### Properties

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### description?

```ts
optional description?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### id?

```ts
optional id?: AzureSpeechFullApiSchemaResourceId2;
```

##### lastActionDateTime?

```ts
optional lastActionDateTime?: string;
```

##### locale

```ts
locale: string;
```

##### projectId

```ts
projectId: AzureSpeechFullApiSchemaResourceId2;
```

##### properties?

```ts
optional properties?: AzureSpeechFullApiSchemaTrainingSetProperties;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaStatus2;
```

##### voiceKind?

```ts
optional voiceKind?: AzureSpeechFullApiSchemaVoiceKind;
```

***

### AzureSpeechFullApiSchemaTrainingSetProperties

```ts
type AzureSpeechFullApiSchemaTrainingSetProperties = {
  utteranceCount?: number;
};
```

#### Properties

##### utteranceCount?

```ts
optional utteranceCount?: number;
```

***

### AzureSpeechFullApiSchemaTranscribedPhrase

```ts
type AzureSpeechFullApiSchemaTranscribedPhrase = {
  channel?: number;
  confidence: number;
  durationMilliseconds: number;
  locale?: string;
  offsetMilliseconds: number;
  speaker?: number;
  text: string;
  words?: ReadonlyArray<AzureSpeechFullApiSchemaTranscribedWord>;
};
```

#### Properties

##### channel?

```ts
optional channel?: number;
```

##### confidence

```ts
confidence: number;
```

##### durationMilliseconds

```ts
durationMilliseconds: number;
```

##### locale?

```ts
optional locale?: string;
```

##### offsetMilliseconds

```ts
offsetMilliseconds: number;
```

##### speaker?

```ts
optional speaker?: number;
```

##### text

```ts
text: string;
```

##### words?

```ts
optional words?: ReadonlyArray<AzureSpeechFullApiSchemaTranscribedWord>;
```

***

### AzureSpeechFullApiSchemaTranscribedWord

```ts
type AzureSpeechFullApiSchemaTranscribedWord = {
  durationMilliseconds: number;
  offsetMilliseconds: number;
  text: string;
};
```

#### Properties

##### durationMilliseconds

```ts
durationMilliseconds: number;
```

##### offsetMilliseconds

```ts
offsetMilliseconds: number;
```

##### text

```ts
text: string;
```

***

### AzureSpeechFullApiSchemaTranscribeResult

```ts
type AzureSpeechFullApiSchemaTranscribeResult = {
  combinedPhrases: ReadonlyArray<AzureSpeechFullApiSchemaChannelCombinedPhrases>;
  durationMilliseconds: number;
  phrases: ReadonlyArray<AzureSpeechFullApiSchemaPhrase>;
};
```

#### Properties

##### combinedPhrases

```ts
combinedPhrases: ReadonlyArray<AzureSpeechFullApiSchemaChannelCombinedPhrases>;
```

##### durationMilliseconds

```ts
durationMilliseconds: number;
```

##### phrases

```ts
phrases: ReadonlyArray<AzureSpeechFullApiSchemaPhrase>;
```

***

### AzureSpeechFullApiSchemaTranscription

```ts
type AzureSpeechFullApiSchemaTranscription = {
  contentContainerUrl?: string;
  contentUrls?: ReadonlyArray<string>;
  createdDateTime?: string;
  customProperties?: {
   [key: string]: string;
  };
  dataset?: AzureSpeechFullApiSchemaEntityReference;
  description?: string;
  displayName: string;
  lastActionDateTime?: string;
  links?: AzureSpeechFullApiSchemaTranscriptionLinks;
  locale: string;
  model?: AzureSpeechFullApiSchemaEntityReference;
  project?: AzureSpeechFullApiSchemaEntityReference;
  properties: AzureSpeechFullApiSchemaTranscriptionProperties;
  self?: string;
  status?: AzureSpeechFullApiSchemaStatus3;
};
```

#### Properties

##### contentContainerUrl?

```ts
optional contentContainerUrl?: string;
```

##### contentUrls?

```ts
optional contentUrls?: ReadonlyArray<string>;
```

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### customProperties?

```ts
optional customProperties?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### dataset?

```ts
optional dataset?: AzureSpeechFullApiSchemaEntityReference;
```

##### description?

```ts
optional description?: string;
```

##### displayName

```ts
displayName: string;
```

##### lastActionDateTime?

```ts
optional lastActionDateTime?: string;
```

##### links?

```ts
optional links?: AzureSpeechFullApiSchemaTranscriptionLinks;
```

##### locale

```ts
locale: string;
```

##### model?

```ts
optional model?: AzureSpeechFullApiSchemaEntityReference;
```

##### project?

```ts
optional project?: AzureSpeechFullApiSchemaEntityReference;
```

##### properties

```ts
properties: AzureSpeechFullApiSchemaTranscriptionProperties;
```

##### self?

```ts
optional self?: string;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaStatus3;
```

***

### AzureSpeechFullApiSchemaTranscriptionLinks

```ts
type AzureSpeechFullApiSchemaTranscriptionLinks = {
  files?: string;
};
```

#### Properties

##### files?

```ts
optional files?: string;
```

***

### AzureSpeechFullApiSchemaTranscriptionLocales

```ts
type AzureSpeechFullApiSchemaTranscriptionLocales = {
  Submit?: ReadonlyArray<string>;
  Transcribe?: ReadonlyArray<string>;
};
```

#### Properties

##### Submit?

```ts
optional Submit?: ReadonlyArray<string>;
```

##### Transcribe?

```ts
optional Transcribe?: ReadonlyArray<string>;
```

***

### AzureSpeechFullApiSchemaTranscriptionProperties

```ts
type AzureSpeechFullApiSchemaTranscriptionProperties = {
  channels?: ReadonlyArray<number>;
  destinationContainerUrl?: string;
  diarization?: AzureSpeechFullApiSchemaDiarizationProperties;
  displayFormWordLevelTimestampsEnabled?: boolean;
  durationMilliseconds?: number;
  error?: AzureSpeechFullApiSchemaEntityError;
  languageIdentification?: AzureSpeechFullApiSchemaLanguageIdentificationProperties;
  profanityFilterMode?: AzureSpeechFullApiSchemaProfanityFilterMode;
  punctuationMode?: AzureSpeechFullApiSchemaPunctuationMode;
  timeToLiveHours: number;
  wordLevelTimestampsEnabled?: boolean;
};
```

#### Properties

##### channels?

```ts
optional channels?: ReadonlyArray<number>;
```

##### destinationContainerUrl?

```ts
optional destinationContainerUrl?: string;
```

##### diarization?

```ts
optional diarization?: AzureSpeechFullApiSchemaDiarizationProperties;
```

##### displayFormWordLevelTimestampsEnabled?

```ts
optional displayFormWordLevelTimestampsEnabled?: boolean;
```

##### durationMilliseconds?

```ts
optional durationMilliseconds?: number;
```

##### error?

```ts
optional error?: AzureSpeechFullApiSchemaEntityError;
```

##### languageIdentification?

```ts
optional languageIdentification?: AzureSpeechFullApiSchemaLanguageIdentificationProperties;
```

##### profanityFilterMode?

```ts
optional profanityFilterMode?: AzureSpeechFullApiSchemaProfanityFilterMode;
```

##### punctuationMode?

```ts
optional punctuationMode?: AzureSpeechFullApiSchemaPunctuationMode;
```

##### timeToLiveHours

```ts
timeToLiveHours: number;
```

##### wordLevelTimestampsEnabled?

```ts
optional wordLevelTimestampsEnabled?: boolean;
```

***

### AzureSpeechFullApiSchemaTranscriptionResult

```ts
type AzureSpeechFullApiSchemaTranscriptionResult = {
  combinedPhrases: ReadonlyArray<AzureSpeechFullApiSchemaChannelCombinedPhrases2>;
  durationMilliseconds: number;
  phrases: ReadonlyArray<AzureSpeechFullApiSchemaTranscribedPhrase>;
};
```

#### Properties

##### combinedPhrases

```ts
combinedPhrases: ReadonlyArray<AzureSpeechFullApiSchemaChannelCombinedPhrases2>;
```

##### durationMilliseconds

```ts
durationMilliseconds: number;
```

##### phrases

```ts
phrases: ReadonlyArray<AzureSpeechFullApiSchemaTranscribedPhrase>;
```

***

### AzureSpeechFullApiSchemaTranscriptionUpdate

```ts
type AzureSpeechFullApiSchemaTranscriptionUpdate = {
  customProperties?: {
   [key: string]: string;
  };
  description?: string;
  displayName?: string;
  project?: AzureSpeechFullApiSchemaEntityReference;
};
```

#### Properties

##### customProperties?

```ts
optional customProperties?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### description?

```ts
optional description?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### project?

```ts
optional project?: AzureSpeechFullApiSchemaEntityReference;
```

***

### AzureSpeechFullApiSchemaUploadedBlocks

```ts
type AzureSpeechFullApiSchemaUploadedBlocks = {
  committedBlocks?: ReadonlyArray<AzureSpeechFullApiSchemaResponseBlock>;
  uncommittedBlocks?: ReadonlyArray<AzureSpeechFullApiSchemaResponseBlock>;
};
```

#### Properties

##### committedBlocks?

```ts
optional committedBlocks?: ReadonlyArray<AzureSpeechFullApiSchemaResponseBlock>;
```

##### uncommittedBlocks?

```ts
optional uncommittedBlocks?: ReadonlyArray<AzureSpeechFullApiSchemaResponseBlock>;
```

***

### AzureSpeechFullApiSchemaVoiceKind

```ts
type AzureSpeechFullApiSchemaVoiceKind = "Male" | "Female";
```

***

### AzureSpeechFullApiSchemaWebHook

```ts
type AzureSpeechFullApiSchemaWebHook = {
  createdDateTime?: string;
  customProperties?: {
   [key: string]: string;
  };
  description?: string;
  displayName: string;
  events: AzureSpeechFullApiSchemaWebHookEvents;
  lastActionDateTime?: string;
  links?: AzureSpeechFullApiSchemaWebHookLinks;
  properties?: AzureSpeechFullApiSchemaWebHookProperties;
  self?: string;
  status?: AzureSpeechFullApiSchemaStatus3;
  webUrl: string;
};
```

#### Properties

##### createdDateTime?

```ts
optional createdDateTime?: string;
```

##### customProperties?

```ts
optional customProperties?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### description?

```ts
optional description?: string;
```

##### displayName

```ts
displayName: string;
```

##### events

```ts
events: AzureSpeechFullApiSchemaWebHookEvents;
```

##### lastActionDateTime?

```ts
optional lastActionDateTime?: string;
```

##### links?

```ts
optional links?: AzureSpeechFullApiSchemaWebHookLinks;
```

##### properties?

```ts
optional properties?: AzureSpeechFullApiSchemaWebHookProperties;
```

##### self?

```ts
optional self?: string;
```

##### status?

```ts
optional status?: AzureSpeechFullApiSchemaStatus3;
```

##### webUrl

```ts
webUrl: string;
```

***

### AzureSpeechFullApiSchemaWebHookEvents

```ts
type AzureSpeechFullApiSchemaWebHookEvents = {
  challenge?: boolean;
  datasetCompletion?: boolean;
  datasetCreation?: boolean;
  datasetDeletion?: boolean;
  datasetProcessing?: boolean;
  endpointCompletion?: boolean;
  endpointCreation?: boolean;
  endpointDeletion?: boolean;
  endpointProcessing?: boolean;
  evaluationCompletion?: boolean;
  evaluationCreation?: boolean;
  evaluationDeletion?: boolean;
  evaluationProcessing?: boolean;
  modelCompletion?: boolean;
  modelCreation?: boolean;
  modelDeletion?: boolean;
  modelProcessing?: boolean;
  ping?: boolean;
  transcriptionCompletion?: boolean;
  transcriptionCreation?: boolean;
  transcriptionDeletion?: boolean;
  transcriptionProcessing?: boolean;
};
```

#### Properties

##### challenge?

```ts
optional challenge?: boolean;
```

##### datasetCompletion?

```ts
optional datasetCompletion?: boolean;
```

##### datasetCreation?

```ts
optional datasetCreation?: boolean;
```

##### datasetDeletion?

```ts
optional datasetDeletion?: boolean;
```

##### datasetProcessing?

```ts
optional datasetProcessing?: boolean;
```

##### endpointCompletion?

```ts
optional endpointCompletion?: boolean;
```

##### endpointCreation?

```ts
optional endpointCreation?: boolean;
```

##### endpointDeletion?

```ts
optional endpointDeletion?: boolean;
```

##### endpointProcessing?

```ts
optional endpointProcessing?: boolean;
```

##### evaluationCompletion?

```ts
optional evaluationCompletion?: boolean;
```

##### evaluationCreation?

```ts
optional evaluationCreation?: boolean;
```

##### evaluationDeletion?

```ts
optional evaluationDeletion?: boolean;
```

##### evaluationProcessing?

```ts
optional evaluationProcessing?: boolean;
```

##### modelCompletion?

```ts
optional modelCompletion?: boolean;
```

##### modelCreation?

```ts
optional modelCreation?: boolean;
```

##### modelDeletion?

```ts
optional modelDeletion?: boolean;
```

##### modelProcessing?

```ts
optional modelProcessing?: boolean;
```

##### ping?

```ts
optional ping?: boolean;
```

##### transcriptionCompletion?

```ts
optional transcriptionCompletion?: boolean;
```

##### transcriptionCreation?

```ts
optional transcriptionCreation?: boolean;
```

##### transcriptionDeletion?

```ts
optional transcriptionDeletion?: boolean;
```

##### transcriptionProcessing?

```ts
optional transcriptionProcessing?: boolean;
```

***

### AzureSpeechFullApiSchemaWebHookLinks

```ts
type AzureSpeechFullApiSchemaWebHookLinks = {
  ping?: string;
  test?: string;
};
```

#### Properties

##### ping?

```ts
optional ping?: string;
```

##### test?

```ts
optional test?: string;
```

***

### AzureSpeechFullApiSchemaWebHookProperties

```ts
type AzureSpeechFullApiSchemaWebHookProperties = {
  apiVersion?: string;
  error?: AzureSpeechFullApiSchemaEntityError;
  secret?: string;
};
```

#### Properties

##### apiVersion?

```ts
optional apiVersion?: string;
```

##### error?

```ts
optional error?: AzureSpeechFullApiSchemaEntityError;
```

##### secret?

```ts
optional secret?: string;
```

***

### AzureSpeechFullApiSchemaWebHookPropertiesUpdate

```ts
type AzureSpeechFullApiSchemaWebHookPropertiesUpdate = {
  secret?: string;
};
```

#### Properties

##### secret?

```ts
optional secret?: string;
```

***

### AzureSpeechFullApiSchemaWebHookUpdate

```ts
type AzureSpeechFullApiSchemaWebHookUpdate = {
  customProperties?: {
   [key: string]: string;
  };
  description?: string;
  displayName?: string;
  events?: AzureSpeechFullApiSchemaWebHookEvents;
  properties?: AzureSpeechFullApiSchemaWebHookPropertiesUpdate;
  webUrl?: string;
};
```

#### Properties

##### customProperties?

```ts
optional customProperties?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### description?

```ts
optional description?: string;
```

##### displayName?

```ts
optional displayName?: string;
```

##### events?

```ts
optional events?: AzureSpeechFullApiSchemaWebHookEvents;
```

##### properties?

```ts
optional properties?: AzureSpeechFullApiSchemaWebHookPropertiesUpdate;
```

##### webUrl?

```ts
optional webUrl?: string;
```

***

### AzureSpeechFullApiSchemaWord

```ts
type AzureSpeechFullApiSchemaWord = {
  durationMilliseconds: number;
  offsetMilliseconds: number;
  text: string;
};
```

#### Properties

##### durationMilliseconds

```ts
durationMilliseconds: number;
```

##### offsetMilliseconds

```ts
offsetMilliseconds: number;
```

##### text

```ts
text: string;
```

***

### AzureSpeechGeneratedOperationCaller

```ts
type AzureSpeechGeneratedOperationCaller = <OperationKey>(operationKey, ...args) => Promise<AzureSpeechFullApiOperationResponseMap[OperationKey]>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `OperationKey` *extends* `AzureSpeechFullApiOperationKey` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `operationKey` | `OperationKey` |
| ...`args` | `AzureSpeechFullApiOperationArgs`\<`OperationKey`\> |

#### Returns

`Promise`\<[`AzureSpeechFullApiOperationResponseMap`](#azurespeechfullapioperationresponsemap)\[`OperationKey`\]\>

***

### AzureSpeechJsonPrimitive

```ts
type AzureSpeechJsonPrimitive = string | number | boolean | null;
```

***

### AzureSpeechJsonValue

```ts
type AzureSpeechJsonValue =
  | AzureSpeechJsonPrimitive
  | AzureSpeechJsonObject
  | readonly AzureSpeechJsonValue[];
```

***

### AzureSpeechResource

```ts
type AzureSpeechResource =
  | AzureSpeechJsonValue
  | ArrayBuffer
| ReadableStream<Uint8Array>;
```

## Variables

### AZURE\_SPEECH\_FULL\_API\_GENERATED\_AT

```ts
const AZURE_SPEECH_FULL_API_GENERATED_AT: "2026-06-18";
```

***

### AZURE\_SPEECH\_FULL\_API\_GENERATED\_FUNCTION\_COUNT

```ts
const AZURE_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT: 105;
```

***

### AZURE\_SPEECH\_FULL\_API\_GENERATED\_FUNCTION\_NAMES

```ts
const AZURE_SPEECH_FULL_API_GENERATED_FUNCTION_NAMES: readonly ["CustomTextToSpeechBaseModelsList", "BatchTextToSpeechBatchSynthesesCreate", "BatchTextToSpeechBatchSynthesesDelete", "BatchTextToSpeechBatchSynthesesGet", "BatchTextToSpeechBatchSynthesesList", "CustomTextToSpeechConsentsCreate", "CustomTextToSpeechConsentsDelete", "CustomTextToSpeechConsentsGet", "CustomTextToSpeechConsentsList", "CustomTextToSpeechConsentsPost", "SpeechToTextDatasetsCommitBlocks", "SpeechToTextDatasetsCreate", "SpeechToTextDatasetsDelete", "SpeechToTextDatasetsGet", "SpeechToTextDatasetsGetBlocks", "SpeechToTextDatasetsGetFile", "SpeechToTextDatasetsList", "SpeechToTextDatasetsListFiles", "SpeechToTextDatasetsListSupportedLocales", "SpeechToTextDatasetsUpdate", "SpeechToTextDatasetsUploadBlock", "SpeechToTextEndpointsCreate", "SpeechToTextEndpointsDelete", "SpeechToTextEndpointsGet", "SpeechToTextEndpointsList", "SpeechToTextEndpointsListSupportedLocales", "SpeechToTextEndpointsUpdate", "SpeechToTextEvaluationsCreate", "SpeechToTextEvaluationsDelete", "SpeechToTextEvaluationsGet", "SpeechToTextEvaluationsGetFile", "SpeechToTextEvaluationsList", "SpeechToTextEvaluationsListFiles", "SpeechToTextEvaluationsListSupportedLocales", "SpeechToTextEvaluationsUpdate", "SpeechToTextModelsAuthorizeCopy", "SpeechToTextModelsCopy", "SpeechToTextModelsCreate", "SpeechToTextModelsDelete", "SpeechToTextModelsGetBaseModel", "SpeechToTextModelsGetBaseModelManifest", "SpeechToTextModelsGetCustomModel", "SpeechToTextModelsGetCustomModelManifest", "SpeechToTextModelsGetFile", "SpeechToTextModelsListBaseModels", "SpeechToTextModelsListCustomModels", "SpeechToTextModelsListFiles", "SpeechToTextModelsListSupportedLocales", "SpeechToTextModelsUpdate", "SpeechToTextOperationsGetModelCopy", "SpeechToTextProjectsCreate", "SpeechToTextProjectsDelete", "SpeechToTextProjectsGet", "SpeechToTextProjectsList", "SpeechToTextProjectsListDatasets", "SpeechToTextProjectsListEndpoints", "SpeechToTextProjectsListEvaluations", "SpeechToTextProjectsListModels", "SpeechToTextProjectsListSupportedLocales", "SpeechToTextProjectsListTranscriptions", "SpeechToTextProjectsUpdate", "SpeechToTextTranscriptionsDelete", "SpeechToTextTranscriptionsGet", "SpeechToTextTranscriptionsGetFile", "SpeechToTextTranscriptionsList", "SpeechToTextTranscriptionsListFiles", "SpeechToTextTranscriptionsListSupportedLocales", "SpeechToTextTranscriptionsSubmit", "SpeechToTextTranscriptionsUpdate", "SpeechToTextWebHooksCreate", "SpeechToTextWebHooksDelete", "SpeechToTextWebHooksGet", "SpeechToTextWebHooksList", "SpeechToTextWebHooksPing", "SpeechToTextWebHooksTest", "SpeechToTextWebHooksUpdate", "CustomTextToSpeechEndpointsCreate", "CustomTextToSpeechEndpointsDelete", "CustomTextToSpeechEndpointsGet", "CustomTextToSpeechEndpointsList", "CustomTextToSpeechEndpointsResume", "CustomTextToSpeechEndpointsSuspend", "CustomTextToSpeechModelsCreate", "CustomTextToSpeechModelsDelete", "CustomTextToSpeechModelsGet", "CustomTextToSpeechModelsList", "CustomTextToSpeechModelsListRecipes", "BatchTextToSpeechOperationsGet", "CustomTextToSpeechOperationsGet", "CustomTextToSpeechPersonalVoicesCreate", "CustomTextToSpeechPersonalVoicesDelete", "CustomTextToSpeechPersonalVoicesGet", "CustomTextToSpeechPersonalVoicesList", "CustomTextToSpeechPersonalVoicesPost", "CustomTextToSpeechProjectsCreate", "CustomTextToSpeechProjectsDelete", "CustomTextToSpeechProjectsGet", "CustomTextToSpeechProjectsList", "CustomTextToSpeechTrainingSetsCreate", "CustomTextToSpeechTrainingSetsDelete", "CustomTextToSpeechTrainingSetsGet", "CustomTextToSpeechTrainingSetsList", "CustomTextToSpeechTrainingSetsUploadData", "SpeechToTextTranscriptionsTranscribe", "TranscriptionTranscribe"];
```

***

### AZURE\_SPEECH\_FULL\_API\_OPERATION\_BY\_ID

```ts
const AZURE_SPEECH_FULL_API_OPERATION_BY_ID: Map<string, AzureSpeechFullApiOperation>;
```

***

### AZURE\_SPEECH\_FULL\_API\_OPERATION\_BY\_OPERATION\_ID

```ts
const AZURE_SPEECH_FULL_API_OPERATION_BY_OPERATION_ID: Map<string, AzureSpeechFullApiOperation>;
```

***

### AZURE\_SPEECH\_FULL\_API\_OPERATION\_COUNT

```ts
const AZURE_SPEECH_FULL_API_OPERATION_COUNT: 105;
```

***

### AZURE\_SPEECH\_FULL\_API\_OPERATIONS

```ts
const AZURE_SPEECH_FULL_API_OPERATIONS: readonly AzureSpeechFullApiOperation[];
```

***

### AZURE\_SPEECH\_FULL\_API\_SPEC

```ts
const AZURE_SPEECH_FULL_API_SPEC: {
  operationCount: number;
  pathCount: number;
  source: string;
  specs: readonly AzureSpeechFullApiSpec[];
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-operationcount"></a> `operationCount` | `number` |
| <a id="property-pathcount"></a> `pathCount` | `number` |
| <a id="property-source"></a> `source` | `string` |
| <a id="property-specs"></a> `specs` | readonly [`AzureSpeechFullApiSpec`](#azurespeechfullapispec)[] |

***

### AZURE\_SPEECH\_FULL\_API\_SPEC\_SOURCE

```ts
const AZURE_SPEECH_FULL_API_SPEC_SOURCE: "https://github.com/Azure/azure-rest-api-specs/tree/main/specification/cognitiveservices/data-plane/Speech";
```

***

### AZURE\_SPEECH\_FULL\_API\_SPEC\_VERSION

```ts
const AZURE_SPEECH_FULL_API_SPEC_VERSION: "azure-speech-rest-api-specs-2026-06-18";
```

***

### AZURE\_SPEECH\_FULL\_API\_SPECS

```ts
const AZURE_SPEECH_FULL_API_SPECS: readonly AzureSpeechFullApiSpec[];
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

### createAzureSpeechFullApiGeneratedClient()

```ts
function createAzureSpeechFullApiGeneratedClient(callOperation): AzureSpeechFullApiGeneratedClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callOperation` | [`AzureSpeechGeneratedOperationCaller`](#azurespeechgeneratedoperationcaller) |

#### Returns

[`AzureSpeechFullApiGeneratedClient`](#azurespeechfullapigeneratedclient)

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

[`VoiceProvider`](../../../voice-websocket/dist.md#voiceprovider)
