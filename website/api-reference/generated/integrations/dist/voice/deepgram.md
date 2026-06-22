# integrations/dist/voice/deepgram

## Interfaces

### DeepgramSpeechClient

#### Methods

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

### DeepgramSpeechClientOptions

#### Properties

##### apiBaseUrl?

```ts
optional apiBaseUrl?: string;
```

##### apiKey

```ts
apiKey: string;
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

***

### DeepgramSpeechCredentialStatusInput

#### Properties

##### apiKey?

```ts
optional apiKey?: string;
```

***

### DeepgramSpeechFullApiGeneratedClient

#### Extends

- `DeepgramSpeechFullApiSubpackageAgentSubpackageAgentV1SubpackageAgentV1SettingsSubpackageAgentV1SettingsThinkSubpackageAgentV1SettingsThinkModelsGeneratedClient`.`DeepgramSpeechFullApiSubpackageAuthSubpackageAuthV1SubpackageAuthV1TokensGeneratedClient`.`DeepgramSpeechFullApiSubpackageListenSubpackageListenV1SubpackageListenV1MediaGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ModelsGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBalancesGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBreakdownGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingFieldsGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingPurchasesGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersInvitesGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersScopesGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsModelsGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsRequestsGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsUsageGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsUsageSubpackageManageV1ProjectsUsageBreakdownGeneratedClient`.`DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsUsageSubpackageManageV1ProjectsUsageFieldsGeneratedClient`.`DeepgramSpeechFullApiSubpackageReadSubpackageReadV1SubpackageReadV1TextGeneratedClient`.`DeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsGeneratedClient`.`DeepgramSpeechFullApiSubpackageSpeakSubpackageSpeakV1SubpackageSpeakV1AudioGeneratedClient`.`DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsGeneratedClient`.`DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesGeneratedClient`

#### Methods

##### Analyze()

```ts
Analyze(...args): Promise<DeepgramSpeechFullApiSchemaReadV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"POST /v1/read"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaReadV1Response`](#deepgramspeechfullapischemareadv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageReadSubpackageReadV1SubpackageReadV1TextGeneratedClient.Analyze
```

##### Create()

```ts
Create(...args): Promise<DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"POST /v1/projects/{project_id}/agents"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1Response`](#deepgramspeechfullapischemacreateagentconfigurationv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsGeneratedClient.Create
```

##### Create2()

```ts
Create2(...args): Promise<DeepgramSpeechFullApiSchemaAgentVariableV1>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"POST /v1/projects/{project_id}/agent-variables"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaAgentVariableV1`](#deepgramspeechfullapischemaagentvariablev1)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesGeneratedClient.Create2
```

##### Create3()

```ts
Create3(...args): Promise<DeepgramSpeechFullApiSchemaCreateKeyV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"POST /v1/projects/{project_id}/keys"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaCreateKeyV1Response`](#deepgramspeechfullapischemacreatekeyv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysGeneratedClient.Create3
```

##### Create4()

```ts
Create4(...args): Promise<DeepgramSpeechFullApiSchemaCreateProjectInviteV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"POST /v1/projects/{project_id}/invites"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaCreateProjectInviteV1Response`](#deepgramspeechfullapischemacreateprojectinvitev1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersInvitesGeneratedClient.Create4
```

##### Create5()

```ts
Create5(...args): Promise<DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"POST /v1/projects/{project_id}/self-hosted/distribution/credentials"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1Response`](#deepgramspeechfullapischemacreateprojectdistributioncredentialsv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsGeneratedClient.Create5
```

##### Delete()

```ts
Delete(...args): Promise<DeepgramSpeechFullApiSchemaDeleteAgentConfigurationV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"DELETE /v1/projects/{project_id}/agents/{agent_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaDeleteAgentConfigurationV1Response`](#deepgramspeechfullapischemadeleteagentconfigurationv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsGeneratedClient.Delete
```

##### Delete2()

```ts
Delete2(...args): Promise<DeepgramSpeechFullApiSchemaDeleteAgentVariableV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"DELETE /v1/projects/{project_id}/agent-variables/{variable_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaDeleteAgentVariableV1Response`](#deepgramspeechfullapischemadeleteagentvariablev1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesGeneratedClient.Delete2
```

##### Delete3()

```ts
Delete3(...args): Promise<DeepgramSpeechFullApiSchemaDeleteProjectV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"DELETE /v1/projects/{project_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaDeleteProjectV1Response`](#deepgramspeechfullapischemadeleteprojectv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsGeneratedClient.Delete3
```

##### Delete4()

```ts
Delete4(...args): Promise<DeepgramSpeechFullApiSchemaDeleteProjectKeyV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"DELETE /v1/projects/{project_id}/keys/{key_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaDeleteProjectKeyV1Response`](#deepgramspeechfullapischemadeleteprojectkeyv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysGeneratedClient.Delete4
```

##### Delete5()

```ts
Delete5(...args): Promise<DeepgramSpeechFullApiSchemaDeleteProjectMemberV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"DELETE /v1/projects/{project_id}/members/{member_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaDeleteProjectMemberV1Response`](#deepgramspeechfullapischemadeleteprojectmemberv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersGeneratedClient.Delete5
```

##### Delete6()

```ts
Delete6(...args): Promise<DeepgramSpeechFullApiSchemaDeleteProjectInviteV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"DELETE /v1/projects/{project_id}/invites/{email}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaDeleteProjectInviteV1Response`](#deepgramspeechfullapischemadeleteprojectinvitev1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersInvitesGeneratedClient.Delete6
```

##### Delete7()

```ts
Delete7(...args): Promise<DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1Response`](#deepgramspeechfullapischemagetprojectdistributioncredentialsv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsGeneratedClient.Delete7
```

##### Generate()

```ts
Generate(...args): Promise<DeepgramSpeechFullApiSchemaSpeakV1AudioGenerateResponse200>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"POST /v1/speak"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaSpeakV1AudioGenerateResponse200`](#deepgramspeechfullapischemaspeakv1audiogenerateresponse200)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageSpeakSubpackageSpeakV1SubpackageSpeakV1AudioGeneratedClient.Generate
```

##### Get()

```ts
Get(...args): Promise<DeepgramSpeechFullApiSchemaAgentConfigurationV1>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/agents/{agent_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaAgentConfigurationV1`](#deepgramspeechfullapischemaagentconfigurationv1)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsGeneratedClient.Get
```

##### Get10()

```ts
Get10(...args): Promise<DeepgramSpeechFullApiSchemaGetProjectBalanceV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/balances/{balance_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaGetProjectBalanceV1Response`](#deepgramspeechfullapischemagetprojectbalancev1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBalancesGeneratedClient.Get10
```

##### Get11()

```ts
Get11(...args): Promise<DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1Response`](#deepgramspeechfullapischemagetprojectdistributioncredentialsv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsGeneratedClient.Get11
```

##### Get2()

```ts
Get2(...args): Promise<DeepgramSpeechFullApiSchemaAgentVariableV1>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/agent-variables/{variable_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaAgentVariableV1`](#deepgramspeechfullapischemaagentvariablev1)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesGeneratedClient.Get2
```

##### Get3()

```ts
Get3(...args): Promise<DeepgramSpeechFullApiSchemaGetProjectV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaGetProjectV1Response`](#deepgramspeechfullapischemagetprojectv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsGeneratedClient.Get3
```

##### Get4()

```ts
Get4(...args): Promise<DeepgramSpeechFullApiSchemaGetModelV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/models/{model_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaGetModelV1Response`](#deepgramspeechfullapischemagetmodelv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsModelsGeneratedClient.Get4
```

##### Get5()

```ts
Get5(...args): Promise<DeepgramSpeechFullApiSchemaGetModelV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/models/{model_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaGetModelV1Response`](#deepgramspeechfullapischemagetmodelv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ModelsGeneratedClient.Get5
```

##### Get6()

```ts
Get6(...args): Promise<DeepgramSpeechFullApiSchemaGetProjectKeyV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/keys/{key_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaGetProjectKeyV1Response`](#deepgramspeechfullapischemagetprojectkeyv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysGeneratedClient.Get6
```

##### Get7()

```ts
Get7(...args): Promise<DeepgramSpeechFullApiSchemaGetProjectRequestV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/requests/{request_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaGetProjectRequestV1Response`](#deepgramspeechfullapischemagetprojectrequestv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsRequestsGeneratedClient.Get7
```

##### Get8()

```ts
Get8(...args): Promise<DeepgramSpeechFullApiSchemaUsageV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/usage"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaUsageV1Response`](#deepgramspeechfullapischemausagev1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsUsageGeneratedClient.Get8
```

##### Get9()

```ts
Get9(...args): Promise<DeepgramSpeechFullApiSchemaUsageBreakdownV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/usage/breakdown"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaUsageBreakdownV1Response`](#deepgramspeechfullapischemausagebreakdownv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsUsageSubpackageManageV1ProjectsUsageBreakdownGeneratedClient.Get9
```

##### Grant()

```ts
Grant(...args): Promise<DeepgramSpeechFullApiSchemaGrantV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"POST /v1/auth/grant"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaGrantV1Response`](#deepgramspeechfullapischemagrantv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageAuthSubpackageAuthV1SubpackageAuthV1TokensGeneratedClient.Grant
```

##### Leave()

```ts
Leave(...args): Promise<DeepgramSpeechFullApiSchemaLeaveProjectV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"DELETE /v1/projects/{project_id}/leave"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaLeaveProjectV1Response`](#deepgramspeechfullapischemaleaveprojectv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsGeneratedClient.Leave
```

##### List()

```ts
List(...args): Promise<DeepgramSpeechFullApiSchemaAgentThinkModelsV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/agent/settings/think/models"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaAgentThinkModelsV1Response`](#deepgramspeechfullapischemaagentthinkmodelsv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageAgentSubpackageAgentV1SubpackageAgentV1SettingsSubpackageAgentV1SettingsThinkSubpackageAgentV1SettingsThinkModelsGeneratedClient.List
```

##### List10()

```ts
List10(...args): Promise<DeepgramSpeechFullApiSchemaListProjectInvitesV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/invites"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListProjectInvitesV1Response`](#deepgramspeechfullapischemalistprojectinvitesv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersInvitesGeneratedClient.List10
```

##### List11()

```ts
List11(...args): Promise<DeepgramSpeechFullApiSchemaListProjectRequestsV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/requests"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListProjectRequestsV1Response`](#deepgramspeechfullapischemalistprojectrequestsv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsRequestsGeneratedClient.List11
```

##### List12()

```ts
List12(...args): Promise<DeepgramSpeechFullApiSchemaUsageFieldsV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/usage/fields"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaUsageFieldsV1Response`](#deepgramspeechfullapischemausagefieldsv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsUsageSubpackageManageV1ProjectsUsageFieldsGeneratedClient.List12
```

##### List13()

```ts
List13(...args): Promise<DeepgramSpeechFullApiSchemaListProjectBalancesV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/balances"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListProjectBalancesV1Response`](#deepgramspeechfullapischemalistprojectbalancesv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBalancesGeneratedClient.List13
```

##### List14()

```ts
List14(...args): Promise<DeepgramSpeechFullApiSchemaBillingBreakdownV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/billing/breakdown"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaBillingBreakdownV1Response`](#deepgramspeechfullapischemabillingbreakdownv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingBreakdownGeneratedClient.List14
```

##### List15()

```ts
List15(...args): Promise<DeepgramSpeechFullApiSchemaListBillingFieldsV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/billing/fields"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListBillingFieldsV1Response`](#deepgramspeechfullapischemalistbillingfieldsv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingFieldsGeneratedClient.List15
```

##### List16()

```ts
List16(...args): Promise<DeepgramSpeechFullApiSchemaListProjectPurchasesV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/purchases"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListProjectPurchasesV1Response`](#deepgramspeechfullapischemalistprojectpurchasesv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsBillingSubpackageManageV1ProjectsBillingPurchasesGeneratedClient.List16
```

##### List17()

```ts
List17(...args): Promise<DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/self-hosted/distribution/credentials"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1Response`](#deepgramspeechfullapischemalistprojectdistributioncredentialsv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsGeneratedClient.List17
```

##### List2()

```ts
List2(...args): Promise<DeepgramSpeechFullApiSchemaListAgentConfigurationsV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/agents"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListAgentConfigurationsV1Response`](#deepgramspeechfullapischemalistagentconfigurationsv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsGeneratedClient.List2
```

##### List3()

```ts
List3(...args): Promise<DeepgramSpeechFullApiSchemaListAgentVariablesV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/agent-variables"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListAgentVariablesV1Response`](#deepgramspeechfullapischemalistagentvariablesv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesGeneratedClient.List3
```

##### List4()

```ts
List4(...args): Promise<DeepgramSpeechFullApiSchemaListProjectsV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListProjectsV1Response`](#deepgramspeechfullapischemalistprojectsv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsGeneratedClient.List4
```

##### List5()

```ts
List5(...args): Promise<DeepgramSpeechFullApiSchemaListModelsV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/models"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListModelsV1Response`](#deepgramspeechfullapischemalistmodelsv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsModelsGeneratedClient.List5
```

##### List6()

```ts
List6(...args): Promise<DeepgramSpeechFullApiSchemaListModelsV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/models"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListModelsV1Response`](#deepgramspeechfullapischemalistmodelsv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ModelsGeneratedClient.List6
```

##### List7()

```ts
List7(...args): Promise<DeepgramSpeechFullApiSchemaListProjectKeysV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/keys"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListProjectKeysV1Response`](#deepgramspeechfullapischemalistprojectkeysv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsKeysGeneratedClient.List7
```

##### List8()

```ts
List8(...args): Promise<DeepgramSpeechFullApiSchemaListProjectMembersV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/members"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListProjectMembersV1Response`](#deepgramspeechfullapischemalistprojectmembersv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersGeneratedClient.List8
```

##### List9()

```ts
List9(...args): Promise<DeepgramSpeechFullApiSchemaListProjectMemberScopesV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"GET /v1/projects/{project_id}/members/{member_id}/scopes"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListProjectMemberScopesV1Response`](#deepgramspeechfullapischemalistprojectmemberscopesv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersScopesGeneratedClient.List9
```

##### Transcribe()

```ts
Transcribe(...args): Promise<DeepgramSpeechFullApiSchemaListenV1MediaTranscribeResponse200>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"POST /v1/listen"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaListenV1MediaTranscribeResponse200`](#deepgramspeechfullapischemalistenv1mediatranscriberesponse200)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageListenSubpackageListenV1SubpackageListenV1MediaGeneratedClient.Transcribe
```

##### Update()

```ts
Update(...args): Promise<DeepgramSpeechFullApiSchemaAgentConfigurationV1>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"PUT /v1/projects/{project_id}/agents/{agent_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaAgentConfigurationV1`](#deepgramspeechfullapischemaagentconfigurationv1)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentConfigurationsGeneratedClient.Update
```

##### Update2()

```ts
Update2(...args): Promise<DeepgramSpeechFullApiSchemaAgentVariableV1>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"PATCH /v1/projects/{project_id}/agent-variables/{variable_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaAgentVariableV1`](#deepgramspeechfullapischemaagentvariablev1)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageVoiceAgentSubpackageVoiceAgentVariablesGeneratedClient.Update2
```

##### Update3()

```ts
Update3(...args): Promise<DeepgramSpeechFullApiSchemaUpdateProjectV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"PATCH /v1/projects/{project_id}"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaUpdateProjectV1Response`](#deepgramspeechfullapischemaupdateprojectv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsGeneratedClient.Update3
```

##### Update4()

```ts
Update4(...args): Promise<DeepgramSpeechFullApiSchemaUpdateProjectMemberScopesV1Response>;
```

###### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[`DeepgramSpeechFullApiOperationInput`\<`"PUT /v1/projects/{project_id}/members/{member_id}/scopes"`\>\] |

###### Returns

`Promise`\<[`DeepgramSpeechFullApiSchemaUpdateProjectMemberScopesV1Response`](#deepgramspeechfullapischemaupdateprojectmemberscopesv1response)\>

###### Inherited from

```ts
DeepgramSpeechFullApiSubpackageManageSubpackageManageV1SubpackageManageV1ProjectsSubpackageManageV1ProjectsMembersSubpackageManageV1ProjectsMembersScopesGeneratedClient.Update4
```

***

### DeepgramSpeechFullApiOperation

#### Properties

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
method: DeepgramSpeechFullApiOperationMethod;
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

##### summary

```ts
summary: string;
```

##### tags

```ts
tags: readonly string[];
```

***

### DeepgramSpeechFullApiOperationQueryMap

#### Properties

##### DELETE /v1/projects/\{project\_id\}

```ts
DELETE /v1/projects/{project_id}: {
};
```

##### DELETE /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
DELETE /v1/projects/{project_id}/agent-variables/{variable_id}: {
};
```

##### DELETE /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
DELETE /v1/projects/{project_id}/agents/{agent_id}: {
};
```

##### DELETE /v1/projects/\{project\_id\}/invites/\{email\}

```ts
DELETE /v1/projects/{project_id}/invites/{email}: {
};
```

##### DELETE /v1/projects/\{project\_id\}/keys/\{key\_id\}

```ts
DELETE /v1/projects/{project_id}/keys/{key_id}: {
};
```

##### DELETE /v1/projects/\{project\_id\}/leave

```ts
DELETE /v1/projects/{project_id}/leave: {
};
```

##### DELETE /v1/projects/\{project\_id\}/members/\{member\_id\}

```ts
DELETE /v1/projects/{project_id}/members/{member_id}: {
};
```

##### DELETE /v1/projects/\{project\_id\}/self-hosted/distribution/credentials/\{distribution\_credentials\_id\}

```ts
DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}: {
};
```

##### GET /v1/agent/settings/think/models

```ts
GET /v1/agent/settings/think/models: {
};
```

##### GET /v1/models

```ts
GET /v1/models: {
  include_outdated?: boolean;
};
```

###### include\_outdated?

```ts
optional include_outdated?: boolean;
```

##### GET /v1/models/\{model\_id\}

```ts
GET /v1/models/{model_id}: {
};
```

##### GET /v1/projects

```ts
GET /v1/projects: {
};
```

##### GET /v1/projects/\{project\_id\}

```ts
GET /v1/projects/{project_id}: {
  limit?: number;
  page?: number;
};
```

###### limit?

```ts
optional limit?: number;
```

###### page?

```ts
optional page?: number;
```

##### GET /v1/projects/\{project\_id\}/agent-variables

```ts
GET /v1/projects/{project_id}/agent-variables: {
};
```

##### GET /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
GET /v1/projects/{project_id}/agent-variables/{variable_id}: {
};
```

##### GET /v1/projects/\{project\_id\}/agents

```ts
GET /v1/projects/{project_id}/agents: {
};
```

##### GET /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
GET /v1/projects/{project_id}/agents/{agent_id}: {
};
```

##### GET /v1/projects/\{project\_id\}/balances

```ts
GET /v1/projects/{project_id}/balances: {
};
```

##### GET /v1/projects/\{project\_id\}/balances/\{balance\_id\}

```ts
GET /v1/projects/{project_id}/balances/{balance_id}: {
};
```

##### GET /v1/projects/\{project\_id\}/billing/breakdown

```ts
GET /v1/projects/{project_id}/billing/breakdown: {
  accessor?: string;
  deployment?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdBillingBreakdownGetParametersDeployment;
  end?: string;
  grouping?: readonly DeepgramSpeechFullApiSchemaV1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems[];
  line_item?: string;
  start?: string;
  tag?: string;
};
```

###### accessor?

```ts
optional accessor?: string;
```

###### deployment?

```ts
optional deployment?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdBillingBreakdownGetParametersDeployment;
```

###### end?

```ts
optional end?: string;
```

###### grouping?

```ts
optional grouping?: readonly DeepgramSpeechFullApiSchemaV1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems[];
```

###### line\_item?

```ts
optional line_item?: string;
```

###### start?

```ts
optional start?: string;
```

###### tag?

```ts
optional tag?: string;
```

##### GET /v1/projects/\{project\_id\}/billing/fields

```ts
GET /v1/projects/{project_id}/billing/fields: {
  end?: string;
  start?: string;
};
```

###### end?

```ts
optional end?: string;
```

###### start?

```ts
optional start?: string;
```

##### GET /v1/projects/\{project\_id\}/invites

```ts
GET /v1/projects/{project_id}/invites: {
};
```

##### GET /v1/projects/\{project\_id\}/keys

```ts
GET /v1/projects/{project_id}/keys: {
  status?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdKeysGetParametersStatus;
};
```

###### status?

```ts
optional status?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdKeysGetParametersStatus;
```

##### GET /v1/projects/\{project\_id\}/keys/\{key\_id\}

```ts
GET /v1/projects/{project_id}/keys/{key_id}: {
};
```

##### GET /v1/projects/\{project\_id\}/members

```ts
GET /v1/projects/{project_id}/members: {
};
```

##### GET /v1/projects/\{project\_id\}/members/\{member\_id\}/scopes

```ts
GET /v1/projects/{project_id}/members/{member_id}/scopes: {
};
```

##### GET /v1/projects/\{project\_id\}/models

```ts
GET /v1/projects/{project_id}/models: {
  include_outdated?: boolean;
};
```

###### include\_outdated?

```ts
optional include_outdated?: boolean;
```

##### GET /v1/projects/\{project\_id\}/models/\{model\_id\}

```ts
GET /v1/projects/{project_id}/models/{model_id}: {
};
```

##### GET /v1/projects/\{project\_id\}/purchases

```ts
GET /v1/projects/{project_id}/purchases: {
  limit?: number;
};
```

###### limit?

```ts
optional limit?: number;
```

##### GET /v1/projects/\{project\_id\}/requests

```ts
GET /v1/projects/{project_id}/requests: {
  accessor?: string;
  deployment?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersDeployment;
  end?: string;
  endpoint?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersEndpoint;
  limit?: number;
  method?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersMethod;
  page?: number;
  request_id?: string;
  start?: string;
  status?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersStatus;
};
```

###### accessor?

```ts
optional accessor?: string;
```

###### deployment?

```ts
optional deployment?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersDeployment;
```

###### end?

```ts
optional end?: string;
```

###### endpoint?

```ts
optional endpoint?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersEndpoint;
```

###### limit?

```ts
optional limit?: number;
```

###### method?

```ts
optional method?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersMethod;
```

###### page?

```ts
optional page?: number;
```

###### request\_id?

```ts
optional request_id?: string;
```

###### start?

```ts
optional start?: string;
```

###### status?

```ts
optional status?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersStatus;
```

##### GET /v1/projects/\{project\_id\}/requests/\{request\_id\}

```ts
GET /v1/projects/{project_id}/requests/{request_id}: {
};
```

##### GET /v1/projects/\{project\_id\}/self-hosted/distribution/credentials

```ts
GET /v1/projects/{project_id}/self-hosted/distribution/credentials: {
};
```

##### GET /v1/projects/\{project\_id\}/self-hosted/distribution/credentials/\{distribution\_credentials\_id\}

```ts
GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}: {
};
```

##### GET /v1/projects/\{project\_id\}/usage

```ts
GET /v1/projects/{project_id}/usage: {
  accessor?: string;
  alternatives?: boolean;
  callback?: boolean;
  callback_method?: boolean;
  channels?: boolean;
  custom_intent?: boolean;
  custom_intent_mode?: boolean;
  custom_topic?: boolean;
  custom_topic_mode?: boolean;
  deployment?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersDeployment;
  detect_entities?: boolean;
  detect_language?: boolean;
  diarize?: boolean;
  dictation?: boolean;
  encoding?: boolean;
  end?: string;
  endpoint?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersEndpoint;
  extra?: boolean;
  filler_words?: boolean;
  intents?: boolean;
  keyterm?: boolean;
  keywords?: boolean;
  language?: boolean;
  measurements?: boolean;
  method?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersMethod;
  model?: string;
  multichannel?: boolean;
  numerals?: boolean;
  paragraphs?: boolean;
  profanity_filter?: boolean;
  punctuate?: boolean;
  redact?: boolean;
  replace?: boolean;
  sample_rate?: boolean;
  search?: boolean;
  sentiment?: boolean;
  smart_format?: boolean;
  start?: string;
  summarize?: boolean;
  tag?: string;
  topics?: boolean;
  utt_split?: boolean;
  utterances?: boolean;
  version?: boolean;
};
```

###### accessor?

```ts
optional accessor?: string;
```

###### alternatives?

```ts
optional alternatives?: boolean;
```

###### callback?

```ts
optional callback?: boolean;
```

###### callback\_method?

```ts
optional callback_method?: boolean;
```

###### channels?

```ts
optional channels?: boolean;
```

###### custom\_intent?

```ts
optional custom_intent?: boolean;
```

###### custom\_intent\_mode?

```ts
optional custom_intent_mode?: boolean;
```

###### custom\_topic?

```ts
optional custom_topic?: boolean;
```

###### custom\_topic\_mode?

```ts
optional custom_topic_mode?: boolean;
```

###### deployment?

```ts
optional deployment?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersDeployment;
```

###### detect\_entities?

```ts
optional detect_entities?: boolean;
```

###### detect\_language?

```ts
optional detect_language?: boolean;
```

###### diarize?

```ts
optional diarize?: boolean;
```

###### dictation?

```ts
optional dictation?: boolean;
```

###### encoding?

```ts
optional encoding?: boolean;
```

###### end?

```ts
optional end?: string;
```

###### endpoint?

```ts
optional endpoint?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersEndpoint;
```

###### extra?

```ts
optional extra?: boolean;
```

###### filler\_words?

```ts
optional filler_words?: boolean;
```

###### intents?

```ts
optional intents?: boolean;
```

###### keyterm?

```ts
optional keyterm?: boolean;
```

###### keywords?

```ts
optional keywords?: boolean;
```

###### language?

```ts
optional language?: boolean;
```

###### measurements?

```ts
optional measurements?: boolean;
```

###### method?

```ts
optional method?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersMethod;
```

###### model?

```ts
optional model?: string;
```

###### multichannel?

```ts
optional multichannel?: boolean;
```

###### numerals?

```ts
optional numerals?: boolean;
```

###### paragraphs?

```ts
optional paragraphs?: boolean;
```

###### profanity\_filter?

```ts
optional profanity_filter?: boolean;
```

###### punctuate?

```ts
optional punctuate?: boolean;
```

###### redact?

```ts
optional redact?: boolean;
```

###### replace?

```ts
optional replace?: boolean;
```

###### sample\_rate?

```ts
optional sample_rate?: boolean;
```

###### search?

```ts
optional search?: boolean;
```

###### sentiment?

```ts
optional sentiment?: boolean;
```

###### smart\_format?

```ts
optional smart_format?: boolean;
```

###### start?

```ts
optional start?: string;
```

###### summarize?

```ts
optional summarize?: boolean;
```

###### tag?

```ts
optional tag?: string;
```

###### topics?

```ts
optional topics?: boolean;
```

###### utt\_split?

```ts
optional utt_split?: boolean;
```

###### utterances?

```ts
optional utterances?: boolean;
```

###### version?

```ts
optional version?: boolean;
```

##### GET /v1/projects/\{project\_id\}/usage/breakdown

```ts
GET /v1/projects/{project_id}/usage/breakdown: {
  accessor?: string;
  alternatives?: boolean;
  callback?: boolean;
  callback_method?: boolean;
  channels?: boolean;
  custom_intent?: boolean;
  custom_intent_mode?: boolean;
  custom_topic?: boolean;
  custom_topic_mode?: boolean;
  deployment?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersDeployment;
  detect_entities?: boolean;
  detect_language?: boolean;
  diarize?: boolean;
  dictation?: boolean;
  encoding?: boolean;
  end?: string;
  endpoint?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersEndpoint;
  extra?: boolean;
  filler_words?: boolean;
  grouping?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersGrouping;
  intents?: boolean;
  keyterm?: boolean;
  keywords?: boolean;
  language?: boolean;
  measurements?: boolean;
  method?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersMethod;
  model?: string;
  multichannel?: boolean;
  numerals?: boolean;
  paragraphs?: boolean;
  profanity_filter?: boolean;
  punctuate?: boolean;
  redact?: boolean;
  replace?: boolean;
  sample_rate?: boolean;
  search?: boolean;
  sentiment?: boolean;
  smart_format?: boolean;
  start?: string;
  summarize?: boolean;
  tag?: string;
  topics?: boolean;
  utt_split?: boolean;
  utterances?: boolean;
  version?: boolean;
};
```

###### accessor?

```ts
optional accessor?: string;
```

###### alternatives?

```ts
optional alternatives?: boolean;
```

###### callback?

```ts
optional callback?: boolean;
```

###### callback\_method?

```ts
optional callback_method?: boolean;
```

###### channels?

```ts
optional channels?: boolean;
```

###### custom\_intent?

```ts
optional custom_intent?: boolean;
```

###### custom\_intent\_mode?

```ts
optional custom_intent_mode?: boolean;
```

###### custom\_topic?

```ts
optional custom_topic?: boolean;
```

###### custom\_topic\_mode?

```ts
optional custom_topic_mode?: boolean;
```

###### deployment?

```ts
optional deployment?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersDeployment;
```

###### detect\_entities?

```ts
optional detect_entities?: boolean;
```

###### detect\_language?

```ts
optional detect_language?: boolean;
```

###### diarize?

```ts
optional diarize?: boolean;
```

###### dictation?

```ts
optional dictation?: boolean;
```

###### encoding?

```ts
optional encoding?: boolean;
```

###### end?

```ts
optional end?: string;
```

###### endpoint?

```ts
optional endpoint?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersEndpoint;
```

###### extra?

```ts
optional extra?: boolean;
```

###### filler\_words?

```ts
optional filler_words?: boolean;
```

###### grouping?

```ts
optional grouping?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersGrouping;
```

###### intents?

```ts
optional intents?: boolean;
```

###### keyterm?

```ts
optional keyterm?: boolean;
```

###### keywords?

```ts
optional keywords?: boolean;
```

###### language?

```ts
optional language?: boolean;
```

###### measurements?

```ts
optional measurements?: boolean;
```

###### method?

```ts
optional method?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersMethod;
```

###### model?

```ts
optional model?: string;
```

###### multichannel?

```ts
optional multichannel?: boolean;
```

###### numerals?

```ts
optional numerals?: boolean;
```

###### paragraphs?

```ts
optional paragraphs?: boolean;
```

###### profanity\_filter?

```ts
optional profanity_filter?: boolean;
```

###### punctuate?

```ts
optional punctuate?: boolean;
```

###### redact?

```ts
optional redact?: boolean;
```

###### replace?

```ts
optional replace?: boolean;
```

###### sample\_rate?

```ts
optional sample_rate?: boolean;
```

###### search?

```ts
optional search?: boolean;
```

###### sentiment?

```ts
optional sentiment?: boolean;
```

###### smart\_format?

```ts
optional smart_format?: boolean;
```

###### start?

```ts
optional start?: string;
```

###### summarize?

```ts
optional summarize?: boolean;
```

###### tag?

```ts
optional tag?: string;
```

###### topics?

```ts
optional topics?: boolean;
```

###### utt\_split?

```ts
optional utt_split?: boolean;
```

###### utterances?

```ts
optional utterances?: boolean;
```

###### version?

```ts
optional version?: boolean;
```

##### GET /v1/projects/\{project\_id\}/usage/fields

```ts
GET /v1/projects/{project_id}/usage/fields: {
  end?: string;
  start?: string;
};
```

###### end?

```ts
optional end?: string;
```

###### start?

```ts
optional start?: string;
```

##### PATCH /v1/projects/\{project\_id\}

```ts
PATCH /v1/projects/{project_id}: {
};
```

##### PATCH /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
PATCH /v1/projects/{project_id}/agent-variables/{variable_id}: {
};
```

##### POST /v1/auth/grant

```ts
POST /v1/auth/grant: {
};
```

##### POST /v1/listen

```ts
POST /v1/listen: {
  callback?: string;
  callback_method?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCallbackMethod;
  custom_intent?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomIntent;
  custom_intent_mode?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomIntentMode;
  custom_topic?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomTopic;
  custom_topic_mode?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomTopicMode;
  detect_entities?: boolean;
  detect_language?: DeepgramSpeechFullApiSchemaV1ListenPostParametersDetectLanguage;
  diarize?: boolean;
  diarize_model?: DeepgramSpeechFullApiSchemaV1ListenPostParametersDiarizeModel;
  dictation?: boolean;
  encoding?: DeepgramSpeechFullApiSchemaV1ListenPostParametersEncoding;
  extra?: DeepgramSpeechFullApiSchemaV1ListenPostParametersExtra;
  filler_words?: boolean;
  intents?: boolean;
  keyterm?: readonly string[];
  keywords?: DeepgramSpeechFullApiSchemaV1ListenPostParametersKeywords;
  language?: string;
  measurements?: boolean;
  mip_opt_out?: boolean;
  model?: string;
  multichannel?: boolean;
  numerals?: boolean;
  paragraphs?: boolean;
  profanity_filter?: boolean;
  punctuate?: boolean;
  redact?: DeepgramSpeechFullApiSchemaV1ListenPostParametersRedact;
  replace?: DeepgramSpeechFullApiSchemaV1ListenPostParametersReplace;
  search?: DeepgramSpeechFullApiSchemaV1ListenPostParametersSearch;
  sentiment?: boolean;
  smart_format?: boolean;
  summarize?: DeepgramSpeechFullApiSchemaV1ListenPostParametersSummarize;
  tag?: DeepgramSpeechFullApiSchemaV1ListenPostParametersTag;
  topics?: boolean;
  utt_split?: number;
  utterances?: boolean;
  version?: string;
};
```

###### callback?

```ts
optional callback?: string;
```

###### callback\_method?

```ts
optional callback_method?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCallbackMethod;
```

###### custom\_intent?

```ts
optional custom_intent?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomIntent;
```

###### custom\_intent\_mode?

```ts
optional custom_intent_mode?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomIntentMode;
```

###### custom\_topic?

```ts
optional custom_topic?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomTopic;
```

###### custom\_topic\_mode?

```ts
optional custom_topic_mode?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomTopicMode;
```

###### detect\_entities?

```ts
optional detect_entities?: boolean;
```

###### detect\_language?

```ts
optional detect_language?: DeepgramSpeechFullApiSchemaV1ListenPostParametersDetectLanguage;
```

###### diarize?

```ts
optional diarize?: boolean;
```

###### diarize\_model?

```ts
optional diarize_model?: DeepgramSpeechFullApiSchemaV1ListenPostParametersDiarizeModel;
```

###### dictation?

```ts
optional dictation?: boolean;
```

###### encoding?

```ts
optional encoding?: DeepgramSpeechFullApiSchemaV1ListenPostParametersEncoding;
```

###### extra?

```ts
optional extra?: DeepgramSpeechFullApiSchemaV1ListenPostParametersExtra;
```

###### filler\_words?

```ts
optional filler_words?: boolean;
```

###### intents?

```ts
optional intents?: boolean;
```

###### keyterm?

```ts
optional keyterm?: readonly string[];
```

###### keywords?

```ts
optional keywords?: DeepgramSpeechFullApiSchemaV1ListenPostParametersKeywords;
```

###### language?

```ts
optional language?: string;
```

###### measurements?

```ts
optional measurements?: boolean;
```

###### mip\_opt\_out?

```ts
optional mip_opt_out?: boolean;
```

###### model?

```ts
optional model?: string;
```

###### multichannel?

```ts
optional multichannel?: boolean;
```

###### numerals?

```ts
optional numerals?: boolean;
```

###### paragraphs?

```ts
optional paragraphs?: boolean;
```

###### profanity\_filter?

```ts
optional profanity_filter?: boolean;
```

###### punctuate?

```ts
optional punctuate?: boolean;
```

###### redact?

```ts
optional redact?: DeepgramSpeechFullApiSchemaV1ListenPostParametersRedact;
```

###### replace?

```ts
optional replace?: DeepgramSpeechFullApiSchemaV1ListenPostParametersReplace;
```

###### search?

```ts
optional search?: DeepgramSpeechFullApiSchemaV1ListenPostParametersSearch;
```

###### sentiment?

```ts
optional sentiment?: boolean;
```

###### smart\_format?

```ts
optional smart_format?: boolean;
```

###### summarize?

```ts
optional summarize?: DeepgramSpeechFullApiSchemaV1ListenPostParametersSummarize;
```

###### tag?

```ts
optional tag?: DeepgramSpeechFullApiSchemaV1ListenPostParametersTag;
```

###### topics?

```ts
optional topics?: boolean;
```

###### utt\_split?

```ts
optional utt_split?: number;
```

###### utterances?

```ts
optional utterances?: boolean;
```

###### version?

```ts
optional version?: string;
```

##### POST /v1/projects/\{project\_id\}/agent-variables

```ts
POST /v1/projects/{project_id}/agent-variables: {
};
```

##### POST /v1/projects/\{project\_id\}/agents

```ts
POST /v1/projects/{project_id}/agents: {
};
```

##### POST /v1/projects/\{project\_id\}/invites

```ts
POST /v1/projects/{project_id}/invites: {
};
```

##### POST /v1/projects/\{project\_id\}/keys

```ts
POST /v1/projects/{project_id}/keys: {
};
```

##### POST /v1/projects/\{project\_id\}/self-hosted/distribution/credentials

```ts
POST /v1/projects/{project_id}/self-hosted/distribution/credentials: {
  provider?: "quay";
  scopes?: readonly DeepgramSpeechFullApiSchemaV1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems[];
};
```

###### provider?

```ts
optional provider?: "quay";
```

###### scopes?

```ts
optional scopes?: readonly DeepgramSpeechFullApiSchemaV1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems[];
```

##### POST /v1/read

```ts
POST /v1/read: {
  callback?: string;
  callback_method?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCallbackMethod;
  custom_intent?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomIntent;
  custom_intent_mode?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomIntentMode;
  custom_topic?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomTopic;
  custom_topic_mode?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomTopicMode;
  intents?: boolean;
  language?: string;
  sentiment?: boolean;
  summarize?: DeepgramSpeechFullApiSchemaV1ReadPostParametersSummarize;
  tag?: DeepgramSpeechFullApiSchemaV1ReadPostParametersTag;
  topics?: boolean;
};
```

###### callback?

```ts
optional callback?: string;
```

###### callback\_method?

```ts
optional callback_method?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCallbackMethod;
```

###### custom\_intent?

```ts
optional custom_intent?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomIntent;
```

###### custom\_intent\_mode?

```ts
optional custom_intent_mode?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomIntentMode;
```

###### custom\_topic?

```ts
optional custom_topic?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomTopic;
```

###### custom\_topic\_mode?

```ts
optional custom_topic_mode?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomTopicMode;
```

###### intents?

```ts
optional intents?: boolean;
```

###### language?

```ts
optional language?: string;
```

###### sentiment?

```ts
optional sentiment?: boolean;
```

###### summarize?

```ts
optional summarize?: DeepgramSpeechFullApiSchemaV1ReadPostParametersSummarize;
```

###### tag?

```ts
optional tag?: DeepgramSpeechFullApiSchemaV1ReadPostParametersTag;
```

###### topics?

```ts
optional topics?: boolean;
```

##### POST /v1/speak

```ts
POST /v1/speak: {
  bit_rate?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersBitRate;
  callback?: string;
  callback_method?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersCallbackMethod;
  container?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer;
  encoding?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding;
  mip_opt_out?: boolean;
  model?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersModel;
  sample_rate?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate;
  speed?: number;
  tag?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersTag;
};
```

###### bit\_rate?

```ts
optional bit_rate?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersBitRate;
```

###### callback?

```ts
optional callback?: string;
```

###### callback\_method?

```ts
optional callback_method?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersCallbackMethod;
```

###### container?

```ts
optional container?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer;
```

###### encoding?

```ts
optional encoding?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding;
```

###### mip\_opt\_out?

```ts
optional mip_opt_out?: boolean;
```

###### model?

```ts
optional model?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersModel;
```

###### sample\_rate?

```ts
optional sample_rate?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate;
```

###### speed?

```ts
optional speed?: number;
```

###### tag?

```ts
optional tag?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersTag;
```

##### PUT /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
PUT /v1/projects/{project_id}/agents/{agent_id}: {
};
```

##### PUT /v1/projects/\{project\_id\}/members/\{member\_id\}/scopes

```ts
PUT /v1/projects/{project_id}/members/{member_id}/scopes: {
};
```

***

### DeepgramSpeechFullApiOperationQueryRequiredMap

#### Properties

##### DELETE /v1/projects/\{project\_id\}

```ts
DELETE /v1/projects/{project_id}: false;
```

##### DELETE /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
DELETE /v1/projects/{project_id}/agent-variables/{variable_id}: false;
```

##### DELETE /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
DELETE /v1/projects/{project_id}/agents/{agent_id}: false;
```

##### DELETE /v1/projects/\{project\_id\}/invites/\{email\}

```ts
DELETE /v1/projects/{project_id}/invites/{email}: false;
```

##### DELETE /v1/projects/\{project\_id\}/keys/\{key\_id\}

```ts
DELETE /v1/projects/{project_id}/keys/{key_id}: false;
```

##### DELETE /v1/projects/\{project\_id\}/leave

```ts
DELETE /v1/projects/{project_id}/leave: false;
```

##### DELETE /v1/projects/\{project\_id\}/members/\{member\_id\}

```ts
DELETE /v1/projects/{project_id}/members/{member_id}: false;
```

##### DELETE /v1/projects/\{project\_id\}/self-hosted/distribution/credentials/\{distribution\_credentials\_id\}

```ts
DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}: false;
```

##### GET /v1/agent/settings/think/models

```ts
GET /v1/agent/settings/think/models: false;
```

##### GET /v1/models

```ts
GET /v1/models: false;
```

##### GET /v1/models/\{model\_id\}

```ts
GET /v1/models/{model_id}: false;
```

##### GET /v1/projects

```ts
GET /v1/projects: false;
```

##### GET /v1/projects/\{project\_id\}

```ts
GET /v1/projects/{project_id}: false;
```

##### GET /v1/projects/\{project\_id\}/agent-variables

```ts
GET /v1/projects/{project_id}/agent-variables: false;
```

##### GET /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
GET /v1/projects/{project_id}/agent-variables/{variable_id}: false;
```

##### GET /v1/projects/\{project\_id\}/agents

```ts
GET /v1/projects/{project_id}/agents: false;
```

##### GET /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
GET /v1/projects/{project_id}/agents/{agent_id}: false;
```

##### GET /v1/projects/\{project\_id\}/balances

```ts
GET /v1/projects/{project_id}/balances: false;
```

##### GET /v1/projects/\{project\_id\}/balances/\{balance\_id\}

```ts
GET /v1/projects/{project_id}/balances/{balance_id}: false;
```

##### GET /v1/projects/\{project\_id\}/billing/breakdown

```ts
GET /v1/projects/{project_id}/billing/breakdown: false;
```

##### GET /v1/projects/\{project\_id\}/billing/fields

```ts
GET /v1/projects/{project_id}/billing/fields: false;
```

##### GET /v1/projects/\{project\_id\}/invites

```ts
GET /v1/projects/{project_id}/invites: false;
```

##### GET /v1/projects/\{project\_id\}/keys

```ts
GET /v1/projects/{project_id}/keys: false;
```

##### GET /v1/projects/\{project\_id\}/keys/\{key\_id\}

```ts
GET /v1/projects/{project_id}/keys/{key_id}: false;
```

##### GET /v1/projects/\{project\_id\}/members

```ts
GET /v1/projects/{project_id}/members: false;
```

##### GET /v1/projects/\{project\_id\}/members/\{member\_id\}/scopes

```ts
GET /v1/projects/{project_id}/members/{member_id}/scopes: false;
```

##### GET /v1/projects/\{project\_id\}/models

```ts
GET /v1/projects/{project_id}/models: false;
```

##### GET /v1/projects/\{project\_id\}/models/\{model\_id\}

```ts
GET /v1/projects/{project_id}/models/{model_id}: false;
```

##### GET /v1/projects/\{project\_id\}/purchases

```ts
GET /v1/projects/{project_id}/purchases: false;
```

##### GET /v1/projects/\{project\_id\}/requests

```ts
GET /v1/projects/{project_id}/requests: false;
```

##### GET /v1/projects/\{project\_id\}/requests/\{request\_id\}

```ts
GET /v1/projects/{project_id}/requests/{request_id}: false;
```

##### GET /v1/projects/\{project\_id\}/self-hosted/distribution/credentials

```ts
GET /v1/projects/{project_id}/self-hosted/distribution/credentials: false;
```

##### GET /v1/projects/\{project\_id\}/self-hosted/distribution/credentials/\{distribution\_credentials\_id\}

```ts
GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}: false;
```

##### GET /v1/projects/\{project\_id\}/usage

```ts
GET /v1/projects/{project_id}/usage: false;
```

##### GET /v1/projects/\{project\_id\}/usage/breakdown

```ts
GET /v1/projects/{project_id}/usage/breakdown: false;
```

##### GET /v1/projects/\{project\_id\}/usage/fields

```ts
GET /v1/projects/{project_id}/usage/fields: false;
```

##### PATCH /v1/projects/\{project\_id\}

```ts
PATCH /v1/projects/{project_id}: false;
```

##### PATCH /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
PATCH /v1/projects/{project_id}/agent-variables/{variable_id}: false;
```

##### POST /v1/auth/grant

```ts
POST /v1/auth/grant: false;
```

##### POST /v1/listen

```ts
POST /v1/listen: false;
```

##### POST /v1/projects/\{project\_id\}/agent-variables

```ts
POST /v1/projects/{project_id}/agent-variables: false;
```

##### POST /v1/projects/\{project\_id\}/agents

```ts
POST /v1/projects/{project_id}/agents: false;
```

##### POST /v1/projects/\{project\_id\}/invites

```ts
POST /v1/projects/{project_id}/invites: false;
```

##### POST /v1/projects/\{project\_id\}/keys

```ts
POST /v1/projects/{project_id}/keys: false;
```

##### POST /v1/projects/\{project\_id\}/self-hosted/distribution/credentials

```ts
POST /v1/projects/{project_id}/self-hosted/distribution/credentials: false;
```

##### POST /v1/read

```ts
POST /v1/read: false;
```

##### POST /v1/speak

```ts
POST /v1/speak: false;
```

##### PUT /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
PUT /v1/projects/{project_id}/agents/{agent_id}: false;
```

##### PUT /v1/projects/\{project\_id\}/members/\{member\_id\}/scopes

```ts
PUT /v1/projects/{project_id}/members/{member_id}/scopes: false;
```

***

### DeepgramSpeechFullApiOperationRequestBodyMap

#### Properties

##### DELETE /v1/projects/\{project\_id\}

```ts
DELETE /v1/projects/{project_id}: never;
```

##### DELETE /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
DELETE /v1/projects/{project_id}/agent-variables/{variable_id}: never;
```

##### DELETE /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
DELETE /v1/projects/{project_id}/agents/{agent_id}: never;
```

##### DELETE /v1/projects/\{project\_id\}/invites/\{email\}

```ts
DELETE /v1/projects/{project_id}/invites/{email}: never;
```

##### DELETE /v1/projects/\{project\_id\}/keys/\{key\_id\}

```ts
DELETE /v1/projects/{project_id}/keys/{key_id}: never;
```

##### DELETE /v1/projects/\{project\_id\}/leave

```ts
DELETE /v1/projects/{project_id}/leave: never;
```

##### DELETE /v1/projects/\{project\_id\}/members/\{member\_id\}

```ts
DELETE /v1/projects/{project_id}/members/{member_id}: never;
```

##### DELETE /v1/projects/\{project\_id\}/self-hosted/distribution/credentials/\{distribution\_credentials\_id\}

```ts
DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}: never;
```

##### GET /v1/agent/settings/think/models

```ts
GET /v1/agent/settings/think/models: never;
```

##### GET /v1/models

```ts
GET /v1/models: never;
```

##### GET /v1/models/\{model\_id\}

```ts
GET /v1/models/{model_id}: never;
```

##### GET /v1/projects

```ts
GET /v1/projects: never;
```

##### GET /v1/projects/\{project\_id\}

```ts
GET /v1/projects/{project_id}: never;
```

##### GET /v1/projects/\{project\_id\}/agent-variables

```ts
GET /v1/projects/{project_id}/agent-variables: never;
```

##### GET /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
GET /v1/projects/{project_id}/agent-variables/{variable_id}: never;
```

##### GET /v1/projects/\{project\_id\}/agents

```ts
GET /v1/projects/{project_id}/agents: never;
```

##### GET /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
GET /v1/projects/{project_id}/agents/{agent_id}: never;
```

##### GET /v1/projects/\{project\_id\}/balances

```ts
GET /v1/projects/{project_id}/balances: never;
```

##### GET /v1/projects/\{project\_id\}/balances/\{balance\_id\}

```ts
GET /v1/projects/{project_id}/balances/{balance_id}: never;
```

##### GET /v1/projects/\{project\_id\}/billing/breakdown

```ts
GET /v1/projects/{project_id}/billing/breakdown: never;
```

##### GET /v1/projects/\{project\_id\}/billing/fields

```ts
GET /v1/projects/{project_id}/billing/fields: never;
```

##### GET /v1/projects/\{project\_id\}/invites

```ts
GET /v1/projects/{project_id}/invites: never;
```

##### GET /v1/projects/\{project\_id\}/keys

```ts
GET /v1/projects/{project_id}/keys: never;
```

##### GET /v1/projects/\{project\_id\}/keys/\{key\_id\}

```ts
GET /v1/projects/{project_id}/keys/{key_id}: never;
```

##### GET /v1/projects/\{project\_id\}/members

```ts
GET /v1/projects/{project_id}/members: never;
```

##### GET /v1/projects/\{project\_id\}/members/\{member\_id\}/scopes

```ts
GET /v1/projects/{project_id}/members/{member_id}/scopes: never;
```

##### GET /v1/projects/\{project\_id\}/models

```ts
GET /v1/projects/{project_id}/models: never;
```

##### GET /v1/projects/\{project\_id\}/models/\{model\_id\}

```ts
GET /v1/projects/{project_id}/models/{model_id}: never;
```

##### GET /v1/projects/\{project\_id\}/purchases

```ts
GET /v1/projects/{project_id}/purchases: never;
```

##### GET /v1/projects/\{project\_id\}/requests

```ts
GET /v1/projects/{project_id}/requests: never;
```

##### GET /v1/projects/\{project\_id\}/requests/\{request\_id\}

```ts
GET /v1/projects/{project_id}/requests/{request_id}: never;
```

##### GET /v1/projects/\{project\_id\}/self-hosted/distribution/credentials

```ts
GET /v1/projects/{project_id}/self-hosted/distribution/credentials: never;
```

##### GET /v1/projects/\{project\_id\}/self-hosted/distribution/credentials/\{distribution\_credentials\_id\}

```ts
GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}: never;
```

##### GET /v1/projects/\{project\_id\}/usage

```ts
GET /v1/projects/{project_id}/usage: never;
```

##### GET /v1/projects/\{project\_id\}/usage/breakdown

```ts
GET /v1/projects/{project_id}/usage/breakdown: never;
```

##### GET /v1/projects/\{project\_id\}/usage/fields

```ts
GET /v1/projects/{project_id}/usage/fields: never;
```

##### PATCH /v1/projects/\{project\_id\}

```ts
PATCH /v1/projects/{project_id}: DeepgramSpeechFullApiSchemaUpdateProjectV1Request;
```

##### PATCH /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
PATCH /v1/projects/{project_id}/agent-variables/{variable_id}: DeepgramSpeechFullApiSchemaUpdateAgentVariableV1Request;
```

##### POST /v1/auth/grant

```ts
POST /v1/auth/grant: DeepgramSpeechFullApiSchemaGrantV1Request;
```

##### POST /v1/listen

```ts
POST /v1/listen: DeepgramSpeechFullApiSchemaListenV1RequestUrl;
```

##### POST /v1/projects/\{project\_id\}/agent-variables

```ts
POST /v1/projects/{project_id}/agent-variables: DeepgramSpeechFullApiSchemaCreateAgentVariableV1Request;
```

##### POST /v1/projects/\{project\_id\}/agents

```ts
POST /v1/projects/{project_id}/agents: DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1Request;
```

##### POST /v1/projects/\{project\_id\}/invites

```ts
POST /v1/projects/{project_id}/invites: DeepgramSpeechFullApiSchemaCreateProjectInviteV1Request;
```

##### POST /v1/projects/\{project\_id\}/keys

```ts
POST /v1/projects/{project_id}/keys: DeepgramSpeechFullApiSchemaCreateKeyV1Request;
```

##### POST /v1/projects/\{project\_id\}/self-hosted/distribution/credentials

```ts
POST /v1/projects/{project_id}/self-hosted/distribution/credentials: DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1Request;
```

##### POST /v1/read

```ts
POST /v1/read: DeepgramSpeechFullApiSchemaReadV1Request;
```

##### POST /v1/speak

```ts
POST /v1/speak: DeepgramSpeechFullApiSchemaSpeakV1Request;
```

##### PUT /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
PUT /v1/projects/{project_id}/agents/{agent_id}: DeepgramSpeechFullApiSchemaUpdateAgentMetadataV1Request;
```

##### PUT /v1/projects/\{project\_id\}/members/\{member\_id\}/scopes

```ts
PUT /v1/projects/{project_id}/members/{member_id}/scopes: DeepgramSpeechFullApiSchemaUpdateProjectMemberScopesV1Request;
```

***

### DeepgramSpeechFullApiOperationRequestBodyRequiredMap

#### Properties

##### DELETE /v1/projects/\{project\_id\}

```ts
DELETE /v1/projects/{project_id}: false;
```

##### DELETE /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
DELETE /v1/projects/{project_id}/agent-variables/{variable_id}: false;
```

##### DELETE /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
DELETE /v1/projects/{project_id}/agents/{agent_id}: false;
```

##### DELETE /v1/projects/\{project\_id\}/invites/\{email\}

```ts
DELETE /v1/projects/{project_id}/invites/{email}: false;
```

##### DELETE /v1/projects/\{project\_id\}/keys/\{key\_id\}

```ts
DELETE /v1/projects/{project_id}/keys/{key_id}: false;
```

##### DELETE /v1/projects/\{project\_id\}/leave

```ts
DELETE /v1/projects/{project_id}/leave: false;
```

##### DELETE /v1/projects/\{project\_id\}/members/\{member\_id\}

```ts
DELETE /v1/projects/{project_id}/members/{member_id}: false;
```

##### DELETE /v1/projects/\{project\_id\}/self-hosted/distribution/credentials/\{distribution\_credentials\_id\}

```ts
DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}: false;
```

##### GET /v1/agent/settings/think/models

```ts
GET /v1/agent/settings/think/models: false;
```

##### GET /v1/models

```ts
GET /v1/models: false;
```

##### GET /v1/models/\{model\_id\}

```ts
GET /v1/models/{model_id}: false;
```

##### GET /v1/projects

```ts
GET /v1/projects: false;
```

##### GET /v1/projects/\{project\_id\}

```ts
GET /v1/projects/{project_id}: false;
```

##### GET /v1/projects/\{project\_id\}/agent-variables

```ts
GET /v1/projects/{project_id}/agent-variables: false;
```

##### GET /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
GET /v1/projects/{project_id}/agent-variables/{variable_id}: false;
```

##### GET /v1/projects/\{project\_id\}/agents

```ts
GET /v1/projects/{project_id}/agents: false;
```

##### GET /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
GET /v1/projects/{project_id}/agents/{agent_id}: false;
```

##### GET /v1/projects/\{project\_id\}/balances

```ts
GET /v1/projects/{project_id}/balances: false;
```

##### GET /v1/projects/\{project\_id\}/balances/\{balance\_id\}

```ts
GET /v1/projects/{project_id}/balances/{balance_id}: false;
```

##### GET /v1/projects/\{project\_id\}/billing/breakdown

```ts
GET /v1/projects/{project_id}/billing/breakdown: false;
```

##### GET /v1/projects/\{project\_id\}/billing/fields

```ts
GET /v1/projects/{project_id}/billing/fields: false;
```

##### GET /v1/projects/\{project\_id\}/invites

```ts
GET /v1/projects/{project_id}/invites: false;
```

##### GET /v1/projects/\{project\_id\}/keys

```ts
GET /v1/projects/{project_id}/keys: false;
```

##### GET /v1/projects/\{project\_id\}/keys/\{key\_id\}

```ts
GET /v1/projects/{project_id}/keys/{key_id}: false;
```

##### GET /v1/projects/\{project\_id\}/members

```ts
GET /v1/projects/{project_id}/members: false;
```

##### GET /v1/projects/\{project\_id\}/members/\{member\_id\}/scopes

```ts
GET /v1/projects/{project_id}/members/{member_id}/scopes: false;
```

##### GET /v1/projects/\{project\_id\}/models

```ts
GET /v1/projects/{project_id}/models: false;
```

##### GET /v1/projects/\{project\_id\}/models/\{model\_id\}

```ts
GET /v1/projects/{project_id}/models/{model_id}: false;
```

##### GET /v1/projects/\{project\_id\}/purchases

```ts
GET /v1/projects/{project_id}/purchases: false;
```

##### GET /v1/projects/\{project\_id\}/requests

```ts
GET /v1/projects/{project_id}/requests: false;
```

##### GET /v1/projects/\{project\_id\}/requests/\{request\_id\}

```ts
GET /v1/projects/{project_id}/requests/{request_id}: false;
```

##### GET /v1/projects/\{project\_id\}/self-hosted/distribution/credentials

```ts
GET /v1/projects/{project_id}/self-hosted/distribution/credentials: false;
```

##### GET /v1/projects/\{project\_id\}/self-hosted/distribution/credentials/\{distribution\_credentials\_id\}

```ts
GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}: false;
```

##### GET /v1/projects/\{project\_id\}/usage

```ts
GET /v1/projects/{project_id}/usage: false;
```

##### GET /v1/projects/\{project\_id\}/usage/breakdown

```ts
GET /v1/projects/{project_id}/usage/breakdown: false;
```

##### GET /v1/projects/\{project\_id\}/usage/fields

```ts
GET /v1/projects/{project_id}/usage/fields: false;
```

##### PATCH /v1/projects/\{project\_id\}

```ts
PATCH /v1/projects/{project_id}: false;
```

##### PATCH /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
PATCH /v1/projects/{project_id}/agent-variables/{variable_id}: false;
```

##### POST /v1/auth/grant

```ts
POST /v1/auth/grant: false;
```

##### POST /v1/listen

```ts
POST /v1/listen: false;
```

##### POST /v1/projects/\{project\_id\}/agent-variables

```ts
POST /v1/projects/{project_id}/agent-variables: false;
```

##### POST /v1/projects/\{project\_id\}/agents

```ts
POST /v1/projects/{project_id}/agents: false;
```

##### POST /v1/projects/\{project\_id\}/invites

```ts
POST /v1/projects/{project_id}/invites: false;
```

##### POST /v1/projects/\{project\_id\}/keys

```ts
POST /v1/projects/{project_id}/keys: false;
```

##### POST /v1/projects/\{project\_id\}/self-hosted/distribution/credentials

```ts
POST /v1/projects/{project_id}/self-hosted/distribution/credentials: false;
```

##### POST /v1/read

```ts
POST /v1/read: false;
```

##### POST /v1/speak

```ts
POST /v1/speak: false;
```

##### PUT /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
PUT /v1/projects/{project_id}/agents/{agent_id}: false;
```

##### PUT /v1/projects/\{project\_id\}/members/\{member\_id\}/scopes

```ts
PUT /v1/projects/{project_id}/members/{member_id}/scopes: false;
```

***

### DeepgramSpeechFullApiOperationResponseMap

#### Properties

##### DELETE /v1/projects/\{project\_id\}

```ts
DELETE /v1/projects/{project_id}: DeepgramSpeechFullApiSchemaDeleteProjectV1Response;
```

##### DELETE /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
DELETE /v1/projects/{project_id}/agent-variables/{variable_id}: DeepgramSpeechFullApiSchemaDeleteAgentVariableV1Response;
```

##### DELETE /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
DELETE /v1/projects/{project_id}/agents/{agent_id}: DeepgramSpeechFullApiSchemaDeleteAgentConfigurationV1Response;
```

##### DELETE /v1/projects/\{project\_id\}/invites/\{email\}

```ts
DELETE /v1/projects/{project_id}/invites/{email}: DeepgramSpeechFullApiSchemaDeleteProjectInviteV1Response;
```

##### DELETE /v1/projects/\{project\_id\}/keys/\{key\_id\}

```ts
DELETE /v1/projects/{project_id}/keys/{key_id}: DeepgramSpeechFullApiSchemaDeleteProjectKeyV1Response;
```

##### DELETE /v1/projects/\{project\_id\}/leave

```ts
DELETE /v1/projects/{project_id}/leave: DeepgramSpeechFullApiSchemaLeaveProjectV1Response;
```

##### DELETE /v1/projects/\{project\_id\}/members/\{member\_id\}

```ts
DELETE /v1/projects/{project_id}/members/{member_id}: DeepgramSpeechFullApiSchemaDeleteProjectMemberV1Response;
```

##### DELETE /v1/projects/\{project\_id\}/self-hosted/distribution/credentials/\{distribution\_credentials\_id\}

```ts
DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}: DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1Response;
```

##### GET /v1/agent/settings/think/models

```ts
GET /v1/agent/settings/think/models: DeepgramSpeechFullApiSchemaAgentThinkModelsV1Response;
```

##### GET /v1/models

```ts
GET /v1/models: DeepgramSpeechFullApiSchemaListModelsV1Response;
```

##### GET /v1/models/\{model\_id\}

```ts
GET /v1/models/{model_id}: DeepgramSpeechFullApiSchemaGetModelV1Response;
```

##### GET /v1/projects

```ts
GET /v1/projects: DeepgramSpeechFullApiSchemaListProjectsV1Response;
```

##### GET /v1/projects/\{project\_id\}

```ts
GET /v1/projects/{project_id}: DeepgramSpeechFullApiSchemaGetProjectV1Response;
```

##### GET /v1/projects/\{project\_id\}/agent-variables

```ts
GET /v1/projects/{project_id}/agent-variables: DeepgramSpeechFullApiSchemaListAgentVariablesV1Response;
```

##### GET /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
GET /v1/projects/{project_id}/agent-variables/{variable_id}: DeepgramSpeechFullApiSchemaAgentVariableV1;
```

##### GET /v1/projects/\{project\_id\}/agents

```ts
GET /v1/projects/{project_id}/agents: DeepgramSpeechFullApiSchemaListAgentConfigurationsV1Response;
```

##### GET /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
GET /v1/projects/{project_id}/agents/{agent_id}: DeepgramSpeechFullApiSchemaAgentConfigurationV1;
```

##### GET /v1/projects/\{project\_id\}/balances

```ts
GET /v1/projects/{project_id}/balances: DeepgramSpeechFullApiSchemaListProjectBalancesV1Response;
```

##### GET /v1/projects/\{project\_id\}/balances/\{balance\_id\}

```ts
GET /v1/projects/{project_id}/balances/{balance_id}: DeepgramSpeechFullApiSchemaGetProjectBalanceV1Response;
```

##### GET /v1/projects/\{project\_id\}/billing/breakdown

```ts
GET /v1/projects/{project_id}/billing/breakdown: DeepgramSpeechFullApiSchemaBillingBreakdownV1Response;
```

##### GET /v1/projects/\{project\_id\}/billing/fields

```ts
GET /v1/projects/{project_id}/billing/fields: DeepgramSpeechFullApiSchemaListBillingFieldsV1Response;
```

##### GET /v1/projects/\{project\_id\}/invites

```ts
GET /v1/projects/{project_id}/invites: DeepgramSpeechFullApiSchemaListProjectInvitesV1Response;
```

##### GET /v1/projects/\{project\_id\}/keys

```ts
GET /v1/projects/{project_id}/keys: DeepgramSpeechFullApiSchemaListProjectKeysV1Response;
```

##### GET /v1/projects/\{project\_id\}/keys/\{key\_id\}

```ts
GET /v1/projects/{project_id}/keys/{key_id}: DeepgramSpeechFullApiSchemaGetProjectKeyV1Response;
```

##### GET /v1/projects/\{project\_id\}/members

```ts
GET /v1/projects/{project_id}/members: DeepgramSpeechFullApiSchemaListProjectMembersV1Response;
```

##### GET /v1/projects/\{project\_id\}/members/\{member\_id\}/scopes

```ts
GET /v1/projects/{project_id}/members/{member_id}/scopes: DeepgramSpeechFullApiSchemaListProjectMemberScopesV1Response;
```

##### GET /v1/projects/\{project\_id\}/models

```ts
GET /v1/projects/{project_id}/models: DeepgramSpeechFullApiSchemaListModelsV1Response;
```

##### GET /v1/projects/\{project\_id\}/models/\{model\_id\}

```ts
GET /v1/projects/{project_id}/models/{model_id}: DeepgramSpeechFullApiSchemaGetModelV1Response;
```

##### GET /v1/projects/\{project\_id\}/purchases

```ts
GET /v1/projects/{project_id}/purchases: DeepgramSpeechFullApiSchemaListProjectPurchasesV1Response;
```

##### GET /v1/projects/\{project\_id\}/requests

```ts
GET /v1/projects/{project_id}/requests: DeepgramSpeechFullApiSchemaListProjectRequestsV1Response;
```

##### GET /v1/projects/\{project\_id\}/requests/\{request\_id\}

```ts
GET /v1/projects/{project_id}/requests/{request_id}: DeepgramSpeechFullApiSchemaGetProjectRequestV1Response;
```

##### GET /v1/projects/\{project\_id\}/self-hosted/distribution/credentials

```ts
GET /v1/projects/{project_id}/self-hosted/distribution/credentials: DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1Response;
```

##### GET /v1/projects/\{project\_id\}/self-hosted/distribution/credentials/\{distribution\_credentials\_id\}

```ts
GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}: DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1Response;
```

##### GET /v1/projects/\{project\_id\}/usage

```ts
GET /v1/projects/{project_id}/usage: DeepgramSpeechFullApiSchemaUsageV1Response;
```

##### GET /v1/projects/\{project\_id\}/usage/breakdown

```ts
GET /v1/projects/{project_id}/usage/breakdown: DeepgramSpeechFullApiSchemaUsageBreakdownV1Response;
```

##### GET /v1/projects/\{project\_id\}/usage/fields

```ts
GET /v1/projects/{project_id}/usage/fields: DeepgramSpeechFullApiSchemaUsageFieldsV1Response;
```

##### PATCH /v1/projects/\{project\_id\}

```ts
PATCH /v1/projects/{project_id}: DeepgramSpeechFullApiSchemaUpdateProjectV1Response;
```

##### PATCH /v1/projects/\{project\_id\}/agent-variables/\{variable\_id\}

```ts
PATCH /v1/projects/{project_id}/agent-variables/{variable_id}: DeepgramSpeechFullApiSchemaAgentVariableV1;
```

##### POST /v1/auth/grant

```ts
POST /v1/auth/grant: DeepgramSpeechFullApiSchemaGrantV1Response;
```

##### POST /v1/listen

```ts
POST /v1/listen: DeepgramSpeechFullApiSchemaListenV1MediaTranscribeResponse200;
```

##### POST /v1/projects/\{project\_id\}/agent-variables

```ts
POST /v1/projects/{project_id}/agent-variables: DeepgramSpeechFullApiSchemaAgentVariableV1;
```

##### POST /v1/projects/\{project\_id\}/agents

```ts
POST /v1/projects/{project_id}/agents: DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1Response;
```

##### POST /v1/projects/\{project\_id\}/invites

```ts
POST /v1/projects/{project_id}/invites: DeepgramSpeechFullApiSchemaCreateProjectInviteV1Response;
```

##### POST /v1/projects/\{project\_id\}/keys

```ts
POST /v1/projects/{project_id}/keys: DeepgramSpeechFullApiSchemaCreateKeyV1Response;
```

##### POST /v1/projects/\{project\_id\}/self-hosted/distribution/credentials

```ts
POST /v1/projects/{project_id}/self-hosted/distribution/credentials: DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1Response;
```

##### POST /v1/read

```ts
POST /v1/read: DeepgramSpeechFullApiSchemaReadV1Response;
```

##### POST /v1/speak

```ts
POST /v1/speak: DeepgramSpeechFullApiSchemaSpeakV1AudioGenerateResponse200;
```

##### PUT /v1/projects/\{project\_id\}/agents/\{agent\_id\}

```ts
PUT /v1/projects/{project_id}/agents/{agent_id}: DeepgramSpeechFullApiSchemaAgentConfigurationV1;
```

##### PUT /v1/projects/\{project\_id\}/members/\{member\_id\}/scopes

```ts
PUT /v1/projects/{project_id}/members/{member_id}/scopes: DeepgramSpeechFullApiSchemaUpdateProjectMemberScopesV1Response;
```

***

### DeepgramSpeechJsonObject

#### Indexable

```ts
[key: string]: DeepgramSpeechJsonValue
```

***

### DeepgramSpeechOperationRequestInput

#### Properties

##### body?

```ts
optional body?:
  | ArrayBuffer
  | Uint8Array<ArrayBufferLike>
  | FormData
  | DeepgramSpeechJsonValue;
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
optional query?: Record<string, DeepgramSpeechJsonValue | undefined>;
```

##### responseType?

```ts
optional responseType?: "response" | "json" | "arrayBuffer" | "stream";
```

***

### DeepgramSpeechVoiceProviderOptions

#### Extends

- `Omit`\<`Partial`\<`SpeechPipelineVoiceProviderOptions`\>, `"provider"` \| `"transcriptionSource"` \| `"transcribe"` \| `"synthesize"`\>

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
optional client?: DeepgramSpeechClient;
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

##### outputSampleRate?

```ts
optional outputSampleRate?: number;
```

##### punctuate?

```ts
optional punctuate?: boolean;
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
optional raw?: DeepgramSpeechJsonObject;
```

##### requestId?

```ts
optional requestId?: string;
```

##### text

```ts
text: string;
```

## Type Aliases

### DeepgramAudioContainer

```ts
type DeepgramAudioContainer = "wav" | "none" | "ogg" | string;
```

***

### DeepgramAudioEncoding

```ts
type DeepgramAudioEncoding = "linear16" | "mulaw" | "alaw" | "mp3" | "opus" | "flac" | "aac" | string;
```

***

### DeepgramSpeechFullApiOperationId

```ts
type DeepgramSpeechFullApiOperationId = typeof DEEPGRAM_SPEECH_FULL_API_OPERATION_OPERATION_IDS[number];
```

***

### DeepgramSpeechFullApiOperationMethod

```ts
type DeepgramSpeechFullApiOperationMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
```

***

### DeepgramSpeechFullApiSchemaAgentConfigurationV1

```ts
type DeepgramSpeechFullApiSchemaAgentConfigurationV1 = {
  agent_id: string;
  config: DeepgramSpeechFullApiSchemaAgentConfigurationV1Config;
  created_at?: string;
  metadata?: {
   [key: string]: string;
  };
  updated_at?: string;
};
```

#### Properties

##### agent\_id

```ts
agent_id: string;
```

##### config

```ts
config: DeepgramSpeechFullApiSchemaAgentConfigurationV1Config;
```

##### created\_at?

```ts
optional created_at?: string;
```

##### metadata?

```ts
optional metadata?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### updated\_at?

```ts
optional updated_at?: string;
```

***

### DeepgramSpeechFullApiSchemaAgentConfigurationV1Config

```ts
type DeepgramSpeechFullApiSchemaAgentConfigurationV1Config = {
};
```

***

### DeepgramSpeechFullApiSchemaAgentThinkModelsV1Response

```ts
type DeepgramSpeechFullApiSchemaAgentThinkModelsV1Response = {
  models: ReadonlyArray<DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems>;
};
```

#### Properties

##### models

```ts
models: ReadonlyArray<DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems>;
```

***

### DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems

```ts
type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems =
  | DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems0
  | DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems1
  | DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems2
  | DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems3
  | DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems4;
```

***

### DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems0

```ts
type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems0 = {
  id: DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf0Id;
  name: string;
  provider: DeepgramSpeechFullApiSchemaJsonValue;
};
```

#### Properties

##### id

```ts
id: DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf0Id;
```

##### name

```ts
name: string;
```

##### provider

```ts
provider: DeepgramSpeechFullApiSchemaJsonValue;
```

***

### DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems1

```ts
type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems1 = {
  id: DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf1Id;
  name: string;
  provider: DeepgramSpeechFullApiSchemaJsonValue;
};
```

#### Properties

##### id

```ts
id: DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf1Id;
```

##### name

```ts
name: string;
```

##### provider

```ts
provider: DeepgramSpeechFullApiSchemaJsonValue;
```

***

### DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems2

```ts
type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems2 = {
  id: DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf2Id;
  name: string;
  provider: DeepgramSpeechFullApiSchemaJsonValue;
};
```

#### Properties

##### id

```ts
id: DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf2Id;
```

##### name

```ts
name: string;
```

##### provider

```ts
provider: DeepgramSpeechFullApiSchemaJsonValue;
```

***

### DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems3

```ts
type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems3 = {
  id: DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf3Id;
  name: string;
  provider: DeepgramSpeechFullApiSchemaJsonValue;
};
```

#### Properties

##### id

```ts
id: DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf3Id;
```

##### name

```ts
name: string;
```

##### provider

```ts
provider: DeepgramSpeechFullApiSchemaJsonValue;
```

***

### DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems4

```ts
type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems4 = {
  id: string;
  name: string;
  provider: DeepgramSpeechFullApiSchemaJsonValue;
};
```

#### Properties

##### id

```ts
id: string;
```

##### name

```ts
name: string;
```

##### provider

```ts
provider: DeepgramSpeechFullApiSchemaJsonValue;
```

***

### DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf0Id

```ts
type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf0Id =
  | "gpt-5"
  | "gpt-5-mini"
  | "gpt-5-nano"
  | "gpt-4.1"
  | "gpt-4.1-mini"
  | "gpt-4.1-nano"
  | "gpt-4o"
  | "gpt-4o-mini";
```

***

### DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf1Id

```ts
type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf1Id = "claude-3-5-haiku-latest" | "claude-sonnet-4-20250514";
```

***

### DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf2Id

```ts
type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf2Id = "gemini-2.5-flash" | "gemini-2.0-flash" | "gemini-2.0-flash-lite";
```

***

### DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf3Id

```ts
type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf3Id = "openai/gpt-oss-20b";
```

***

### DeepgramSpeechFullApiSchemaAgentVariableV1

```ts
type DeepgramSpeechFullApiSchemaAgentVariableV1 = {
  created_at?: string;
  key: string;
  updated_at?: string;
  value: DeepgramSpeechFullApiSchemaJsonValue;
  variable_id: string;
};
```

#### Properties

##### created\_at?

```ts
optional created_at?: string;
```

##### key

```ts
key: string;
```

##### updated\_at?

```ts
optional updated_at?: string;
```

##### value

```ts
value: DeepgramSpeechFullApiSchemaJsonValue;
```

##### variable\_id

```ts
variable_id: string;
```

***

### DeepgramSpeechFullApiSchemaBillingBreakdownV1Response

```ts
type DeepgramSpeechFullApiSchemaBillingBreakdownV1Response = {
  end: string;
  resolution: DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResolution;
  results: ReadonlyArray<DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResultsItems>;
  start: string;
};
```

#### Properties

##### end

```ts
end: string;
```

##### resolution

```ts
resolution: DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResolution;
```

##### results

```ts
results: ReadonlyArray<DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResultsItems>;
```

##### start

```ts
start: string;
```

***

### DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResolution

```ts
type DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResolution = {
  amount: number;
  units: string;
};
```

#### Properties

##### amount

```ts
amount: number;
```

##### units

```ts
units: string;
```

***

### DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResultsItems

```ts
type DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResultsItems = {
  dollars: number;
  grouping: DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResultsItemsGrouping;
};
```

#### Properties

##### dollars

```ts
dollars: number;
```

##### grouping

```ts
grouping: DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResultsItemsGrouping;
```

***

### DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResultsItemsGrouping

```ts
type DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResultsItemsGrouping = {
  accessor?: string | null;
  deployment?: string | null;
  end?: string;
  line_item?: string | null;
  start?: string;
  tags?: ReadonlyArray<string> | null;
};
```

#### Properties

##### accessor?

```ts
optional accessor?: string | null;
```

##### deployment?

```ts
optional deployment?: string | null;
```

##### end?

```ts
optional end?: string;
```

##### line\_item?

```ts
optional line_item?: string | null;
```

##### start?

```ts
optional start?: string;
```

##### tags?

```ts
optional tags?: ReadonlyArray<string> | null;
```

***

### DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1Request

```ts
type DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1Request = {
  api_version?: number;
  config: string;
  metadata?: {
   [key: string]: string;
  };
};
```

#### Properties

##### api\_version?

```ts
optional api_version?: number;
```

##### config

```ts
config: string;
```

##### metadata?

```ts
optional metadata?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

***

### DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1Response

```ts
type DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1Response = {
  agent_id: string;
  config: DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1ResponseConfig;
  metadata?: {
   [key: string]: string;
  };
};
```

#### Properties

##### agent\_id

```ts
agent_id: string;
```

##### config

```ts
config: DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1ResponseConfig;
```

##### metadata?

```ts
optional metadata?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

***

### DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1ResponseConfig

```ts
type DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1ResponseConfig = {
};
```

***

### DeepgramSpeechFullApiSchemaCreateAgentVariableV1Request

```ts
type DeepgramSpeechFullApiSchemaCreateAgentVariableV1Request = {
  api_version?: number;
  key: string;
  value: DeepgramSpeechFullApiSchemaJsonValue;
};
```

#### Properties

##### api\_version?

```ts
optional api_version?: number;
```

##### key

```ts
key: string;
```

##### value

```ts
value: DeepgramSpeechFullApiSchemaJsonValue;
```

***

### DeepgramSpeechFullApiSchemaCreateKeyV1Request

```ts
type DeepgramSpeechFullApiSchemaCreateKeyV1Request =
  | DeepgramSpeechFullApiSchemaJsonValue
  | DeepgramSpeechFullApiSchemaJsonValue;
```

***

### DeepgramSpeechFullApiSchemaCreateKeyV1Response

```ts
type DeepgramSpeechFullApiSchemaCreateKeyV1Response = {
  api_key_id?: string;
  comment?: string;
  expiration_date?: string;
  key?: string;
  scopes?: ReadonlyArray<string>;
  tags?: ReadonlyArray<string>;
};
```

#### Properties

##### api\_key\_id?

```ts
optional api_key_id?: string;
```

##### comment?

```ts
optional comment?: string;
```

##### expiration\_date?

```ts
optional expiration_date?: string;
```

##### key?

```ts
optional key?: string;
```

##### scopes?

```ts
optional scopes?: ReadonlyArray<string>;
```

##### tags?

```ts
optional tags?: ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1Request

```ts
type DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1Request = {
  comment?: string;
};
```

#### Properties

##### comment?

```ts
optional comment?: string;
```

***

### DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1Response

```ts
type DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1Response = {
  distribution_credentials: DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1ResponseDistributionCredentials;
  member: DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1ResponseMember;
};
```

#### Properties

##### distribution\_credentials

```ts
distribution_credentials: DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1ResponseDistributionCredentials;
```

##### member

```ts
member: DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1ResponseMember;
```

***

### DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1ResponseDistributionCredentials

```ts
type DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1ResponseDistributionCredentials = {
  comment?: string;
  created: string;
  distribution_credentials_id: string;
  provider: string;
  scopes: ReadonlyArray<string>;
};
```

#### Properties

##### comment?

```ts
optional comment?: string;
```

##### created

```ts
created: string;
```

##### distribution\_credentials\_id

```ts
distribution_credentials_id: string;
```

##### provider

```ts
provider: string;
```

##### scopes

```ts
scopes: ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1ResponseMember

```ts
type DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1ResponseMember = {
  email: string;
  member_id: string;
};
```

#### Properties

##### email

```ts
email: string;
```

##### member\_id

```ts
member_id: string;
```

***

### DeepgramSpeechFullApiSchemaCreateProjectInviteV1Request

```ts
type DeepgramSpeechFullApiSchemaCreateProjectInviteV1Request = {
  email: string;
  scope: string;
};
```

#### Properties

##### email

```ts
email: string;
```

##### scope

```ts
scope: string;
```

***

### DeepgramSpeechFullApiSchemaCreateProjectInviteV1Response

```ts
type DeepgramSpeechFullApiSchemaCreateProjectInviteV1Response = {
  message?: string;
};
```

#### Properties

##### message?

```ts
optional message?: string;
```

***

### DeepgramSpeechFullApiSchemaDeleteAgentConfigurationV1Response

```ts
type DeepgramSpeechFullApiSchemaDeleteAgentConfigurationV1Response = {
};
```

***

### DeepgramSpeechFullApiSchemaDeleteAgentVariableV1Response

```ts
type DeepgramSpeechFullApiSchemaDeleteAgentVariableV1Response = {
};
```

***

### DeepgramSpeechFullApiSchemaDeleteProjectInviteV1Response

```ts
type DeepgramSpeechFullApiSchemaDeleteProjectInviteV1Response = {
  message?: string;
};
```

#### Properties

##### message?

```ts
optional message?: string;
```

***

### DeepgramSpeechFullApiSchemaDeleteProjectKeyV1Response

```ts
type DeepgramSpeechFullApiSchemaDeleteProjectKeyV1Response = {
  message?: string;
};
```

#### Properties

##### message?

```ts
optional message?: string;
```

***

### DeepgramSpeechFullApiSchemaDeleteProjectMemberV1Response

```ts
type DeepgramSpeechFullApiSchemaDeleteProjectMemberV1Response = {
  message?: string;
};
```

#### Properties

##### message?

```ts
optional message?: string;
```

***

### DeepgramSpeechFullApiSchemaDeleteProjectV1Response

```ts
type DeepgramSpeechFullApiSchemaDeleteProjectV1Response = {
  message?: string;
};
```

#### Properties

##### message?

```ts
optional message?: string;
```

***

### DeepgramSpeechFullApiSchemaGetModelV1Response

```ts
type DeepgramSpeechFullApiSchemaGetModelV1Response =
  | DeepgramSpeechFullApiSchemaGetModelV1Response0
  | DeepgramSpeechFullApiSchemaGetModelV1Response1;
```

***

### DeepgramSpeechFullApiSchemaGetModelV1Response0

```ts
type DeepgramSpeechFullApiSchemaGetModelV1Response0 = {
  architecture?: string;
  batch?: boolean;
  canonical_name?: string;
  formatted_output?: boolean;
  languages?: ReadonlyArray<string>;
  name?: string;
  streaming?: boolean;
  uuid?: string;
  version?: string;
};
```

#### Properties

##### architecture?

```ts
optional architecture?: string;
```

##### batch?

```ts
optional batch?: boolean;
```

##### canonical\_name?

```ts
optional canonical_name?: string;
```

##### formatted\_output?

```ts
optional formatted_output?: boolean;
```

##### languages?

```ts
optional languages?: ReadonlyArray<string>;
```

##### name?

```ts
optional name?: string;
```

##### streaming?

```ts
optional streaming?: boolean;
```

##### uuid?

```ts
optional uuid?: string;
```

##### version?

```ts
optional version?: string;
```

***

### DeepgramSpeechFullApiSchemaGetModelV1Response1

```ts
type DeepgramSpeechFullApiSchemaGetModelV1Response1 = {
  architecture?: string;
  canonical_name?: string;
  languages?: ReadonlyArray<string>;
  metadata?: DeepgramSpeechFullApiSchemaGetModelV1ResponseOneOf1Metadata;
  name?: string;
  uuid?: string;
  version?: string;
};
```

#### Properties

##### architecture?

```ts
optional architecture?: string;
```

##### canonical\_name?

```ts
optional canonical_name?: string;
```

##### languages?

```ts
optional languages?: ReadonlyArray<string>;
```

##### metadata?

```ts
optional metadata?: DeepgramSpeechFullApiSchemaGetModelV1ResponseOneOf1Metadata;
```

##### name?

```ts
optional name?: string;
```

##### uuid?

```ts
optional uuid?: string;
```

##### version?

```ts
optional version?: string;
```

***

### DeepgramSpeechFullApiSchemaGetModelV1ResponseOneOf1Metadata

```ts
type DeepgramSpeechFullApiSchemaGetModelV1ResponseOneOf1Metadata = {
  accent?: string;
  age?: string;
  color?: string;
  image?: string;
  sample?: string;
  tags?: ReadonlyArray<string>;
  use_cases?: ReadonlyArray<string>;
};
```

#### Properties

##### accent?

```ts
optional accent?: string;
```

##### age?

```ts
optional age?: string;
```

##### color?

```ts
optional color?: string;
```

##### image?

```ts
optional image?: string;
```

##### sample?

```ts
optional sample?: string;
```

##### tags?

```ts
optional tags?: ReadonlyArray<string>;
```

##### use\_cases?

```ts
optional use_cases?: ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaGetProjectBalanceV1Response

```ts
type DeepgramSpeechFullApiSchemaGetProjectBalanceV1Response = {
  amount?: number;
  balance_id?: string;
  purchase_order_id?: string;
  units?: string;
};
```

#### Properties

##### amount?

```ts
optional amount?: number;
```

##### balance\_id?

```ts
optional balance_id?: string;
```

##### purchase\_order\_id?

```ts
optional purchase_order_id?: string;
```

##### units?

```ts
optional units?: string;
```

***

### DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1Response

```ts
type DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1Response = {
  distribution_credentials: DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1ResponseDistributionCredentials;
  member: DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1ResponseMember;
};
```

#### Properties

##### distribution\_credentials

```ts
distribution_credentials: DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1ResponseDistributionCredentials;
```

##### member

```ts
member: DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1ResponseMember;
```

***

### DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1ResponseDistributionCredentials

```ts
type DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1ResponseDistributionCredentials = {
  comment?: string;
  created: string;
  distribution_credentials_id: string;
  provider: string;
  scopes: ReadonlyArray<string>;
};
```

#### Properties

##### comment?

```ts
optional comment?: string;
```

##### created

```ts
created: string;
```

##### distribution\_credentials\_id

```ts
distribution_credentials_id: string;
```

##### provider

```ts
provider: string;
```

##### scopes

```ts
scopes: ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1ResponseMember

```ts
type DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1ResponseMember = {
  email: string;
  member_id: string;
};
```

#### Properties

##### email

```ts
email: string;
```

##### member\_id

```ts
member_id: string;
```

***

### DeepgramSpeechFullApiSchemaGetProjectKeyV1Response

```ts
type DeepgramSpeechFullApiSchemaGetProjectKeyV1Response = {
  item?: DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItem;
};
```

#### Properties

##### item?

```ts
optional item?: DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItem;
```

***

### DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItem

```ts
type DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItem = {
  member?: DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItemMember;
};
```

#### Properties

##### member?

```ts
optional member?: DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItemMember;
```

***

### DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItemMember

```ts
type DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItemMember = {
  api_key?: DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItemMemberApiKey;
  email?: string;
  first_name?: string;
  last_name?: string;
  member_id?: string;
};
```

#### Properties

##### api\_key?

```ts
optional api_key?: DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItemMemberApiKey;
```

##### email?

```ts
optional email?: string;
```

##### first\_name?

```ts
optional first_name?: string;
```

##### last\_name?

```ts
optional last_name?: string;
```

##### member\_id?

```ts
optional member_id?: string;
```

***

### DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItemMemberApiKey

```ts
type DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItemMemberApiKey = {
  api_key_id?: string;
  comment?: string;
  created?: string;
  expiration_date?: string;
  scopes?: ReadonlyArray<string>;
  tags?: ReadonlyArray<string>;
};
```

#### Properties

##### api\_key\_id?

```ts
optional api_key_id?: string;
```

##### comment?

```ts
optional comment?: string;
```

##### created?

```ts
optional created?: string;
```

##### expiration\_date?

```ts
optional expiration_date?: string;
```

##### scopes?

```ts
optional scopes?: ReadonlyArray<string>;
```

##### tags?

```ts
optional tags?: ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaGetProjectRequestV1Response

```ts
type DeepgramSpeechFullApiSchemaGetProjectRequestV1Response = {
  request?: DeepgramSpeechFullApiSchemaProjectRequestResponse;
};
```

#### Properties

##### request?

```ts
optional request?: DeepgramSpeechFullApiSchemaProjectRequestResponse;
```

***

### DeepgramSpeechFullApiSchemaGetProjectV1Response

```ts
type DeepgramSpeechFullApiSchemaGetProjectV1Response = {
  mip_opt_out?: boolean;
  name?: string;
  project_id?: string;
};
```

#### Properties

##### mip\_opt\_out?

```ts
optional mip_opt_out?: boolean;
```

##### name?

```ts
optional name?: string;
```

##### project\_id?

```ts
optional project_id?: string;
```

***

### DeepgramSpeechFullApiSchemaGrantV1Request

```ts
type DeepgramSpeechFullApiSchemaGrantV1Request = {
  ttl_seconds?: number;
};
```

#### Properties

##### ttl\_seconds?

```ts
optional ttl_seconds?: number;
```

***

### DeepgramSpeechFullApiSchemaGrantV1Response

```ts
type DeepgramSpeechFullApiSchemaGrantV1Response = {
  access_token: string;
  expires_in?: number;
};
```

#### Properties

##### access\_token

```ts
access_token: string;
```

##### expires\_in?

```ts
optional expires_in?: number;
```

***

### DeepgramSpeechFullApiSchemaJsonPrimitive

```ts
type DeepgramSpeechFullApiSchemaJsonPrimitive = string | number | boolean | null;
```

***

### DeepgramSpeechFullApiSchemaJsonValue

```ts
type DeepgramSpeechFullApiSchemaJsonValue =
  | DeepgramSpeechFullApiSchemaJsonPrimitive
  | readonly DeepgramSpeechFullApiSchemaJsonValue[]
  | {
[key: string]: DeepgramSpeechFullApiSchemaJsonValue;
};
```

***

### DeepgramSpeechFullApiSchemaLeaveProjectV1Response

```ts
type DeepgramSpeechFullApiSchemaLeaveProjectV1Response = {
  message?: string;
};
```

#### Properties

##### message?

```ts
optional message?: string;
```

***

### DeepgramSpeechFullApiSchemaListAgentConfigurationsV1Response

```ts
type DeepgramSpeechFullApiSchemaListAgentConfigurationsV1Response = {
  agents?: ReadonlyArray<DeepgramSpeechFullApiSchemaAgentConfigurationV1>;
};
```

#### Properties

##### agents?

```ts
optional agents?: ReadonlyArray<DeepgramSpeechFullApiSchemaAgentConfigurationV1>;
```

***

### DeepgramSpeechFullApiSchemaListAgentVariablesV1Response

```ts
type DeepgramSpeechFullApiSchemaListAgentVariablesV1Response = {
  variables?: ReadonlyArray<DeepgramSpeechFullApiSchemaAgentVariableV1>;
};
```

#### Properties

##### variables?

```ts
optional variables?: ReadonlyArray<DeepgramSpeechFullApiSchemaAgentVariableV1>;
```

***

### DeepgramSpeechFullApiSchemaListBillingFieldsV1Response

```ts
type DeepgramSpeechFullApiSchemaListBillingFieldsV1Response = {
  accessors?: ReadonlyArray<string>;
  deployments?: ReadonlyArray<DeepgramSpeechFullApiSchemaListBillingFieldsV1ResponseDeploymentsItems>;
  line_items?: {
   [key: string]: string;
  };
  tags?: ReadonlyArray<string>;
};
```

#### Properties

##### accessors?

```ts
optional accessors?: ReadonlyArray<string>;
```

##### deployments?

```ts
optional deployments?: ReadonlyArray<DeepgramSpeechFullApiSchemaListBillingFieldsV1ResponseDeploymentsItems>;
```

##### line\_items?

```ts
optional line_items?: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

##### tags?

```ts
optional tags?: ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaListBillingFieldsV1ResponseDeploymentsItems

```ts
type DeepgramSpeechFullApiSchemaListBillingFieldsV1ResponseDeploymentsItems = "hosted" | "beta" | "self-hosted" | "dedicated";
```

***

### DeepgramSpeechFullApiSchemaListenV1AcceptedResponse

```ts
type DeepgramSpeechFullApiSchemaListenV1AcceptedResponse = {
  request_id: string;
};
```

#### Properties

##### request\_id

```ts
request_id: string;
```

***

### DeepgramSpeechFullApiSchemaListenV1MediaTranscribeResponse200

```ts
type DeepgramSpeechFullApiSchemaListenV1MediaTranscribeResponse200 =
  | DeepgramSpeechFullApiSchemaListenV1Response
  | DeepgramSpeechFullApiSchemaListenV1AcceptedResponse;
```

***

### DeepgramSpeechFullApiSchemaListenV1RequestUrl

```ts
type DeepgramSpeechFullApiSchemaListenV1RequestUrl = {
  url: string;
};
```

#### Properties

##### url

```ts
url: string;
```

***

### DeepgramSpeechFullApiSchemaListenV1Response

```ts
type DeepgramSpeechFullApiSchemaListenV1Response = {
  metadata: DeepgramSpeechFullApiSchemaListenV1ResponseMetadata;
  results: DeepgramSpeechFullApiSchemaListenV1ResponseResults;
};
```

#### Properties

##### metadata

```ts
metadata: DeepgramSpeechFullApiSchemaListenV1ResponseMetadata;
```

##### results

```ts
results: DeepgramSpeechFullApiSchemaListenV1ResponseResults;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseMetadata

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseMetadata = {
  channels: number;
  created: string;
  duration: number;
  intents_info?: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataIntentsInfo;
  model_info: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataModelInfo;
  models: ReadonlyArray<string>;
  request_id: string;
  sentiment_info?: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataSentimentInfo;
  sha256: string;
  summary_info?: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataSummaryInfo;
  tags?: ReadonlyArray<string>;
  topics_info?: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataTopicsInfo;
  transaction_key?: string;
};
```

#### Properties

##### channels

```ts
channels: number;
```

##### created

```ts
created: string;
```

##### duration

```ts
duration: number;
```

##### intents\_info?

```ts
optional intents_info?: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataIntentsInfo;
```

##### model\_info

```ts
model_info: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataModelInfo;
```

##### models

```ts
models: ReadonlyArray<string>;
```

##### request\_id

```ts
request_id: string;
```

##### sentiment\_info?

```ts
optional sentiment_info?: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataSentimentInfo;
```

##### sha256

```ts
sha256: string;
```

##### summary\_info?

```ts
optional summary_info?: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataSummaryInfo;
```

##### tags?

```ts
optional tags?: ReadonlyArray<string>;
```

##### topics\_info?

```ts
optional topics_info?: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataTopicsInfo;
```

##### transaction\_key?

```ts
optional transaction_key?: string;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseMetadataIntentsInfo

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseMetadataIntentsInfo = {
  input_tokens?: number;
  model_uuid?: string;
  output_tokens?: number;
};
```

#### Properties

##### input\_tokens?

```ts
optional input_tokens?: number;
```

##### model\_uuid?

```ts
optional model_uuid?: string;
```

##### output\_tokens?

```ts
optional output_tokens?: number;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseMetadataModelInfo

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseMetadataModelInfo = {
};
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseMetadataSentimentInfo

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseMetadataSentimentInfo = {
  input_tokens?: number;
  model_uuid?: string;
  output_tokens?: number;
};
```

#### Properties

##### input\_tokens?

```ts
optional input_tokens?: number;
```

##### model\_uuid?

```ts
optional model_uuid?: string;
```

##### output\_tokens?

```ts
optional output_tokens?: number;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseMetadataSummaryInfo

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseMetadataSummaryInfo = {
  input_tokens?: number;
  model_uuid?: string;
  output_tokens?: number;
};
```

#### Properties

##### input\_tokens?

```ts
optional input_tokens?: number;
```

##### model\_uuid?

```ts
optional model_uuid?: string;
```

##### output\_tokens?

```ts
optional output_tokens?: number;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseMetadataTopicsInfo

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseMetadataTopicsInfo = {
  input_tokens?: number;
  model_uuid?: string;
  output_tokens?: number;
};
```

#### Properties

##### input\_tokens?

```ts
optional input_tokens?: number;
```

##### model\_uuid?

```ts
optional model_uuid?: string;
```

##### output\_tokens?

```ts
optional output_tokens?: number;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResults

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResults = {
  channels: DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannels;
  intents?: DeepgramSpeechFullApiSchemaSharedIntents;
  sentiments?: DeepgramSpeechFullApiSchemaSharedSentiments;
  summary?: DeepgramSpeechFullApiSchemaListenV1ResponseResultsSummary;
  topics?: DeepgramSpeechFullApiSchemaSharedTopics;
  utterances?: DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterances;
};
```

#### Properties

##### channels

```ts
channels: DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannels;
```

##### intents?

```ts
optional intents?: DeepgramSpeechFullApiSchemaSharedIntents;
```

##### sentiments?

```ts
optional sentiments?: DeepgramSpeechFullApiSchemaSharedSentiments;
```

##### summary?

```ts
optional summary?: DeepgramSpeechFullApiSchemaListenV1ResponseResultsSummary;
```

##### topics?

```ts
optional topics?: DeepgramSpeechFullApiSchemaSharedTopics;
```

##### utterances?

```ts
optional utterances?: DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterances;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannels

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannels = ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItems>;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItems

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItems = {
  alternatives?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItems>;
  detected_language?: string;
  search?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsSearchItems>;
};
```

#### Properties

##### alternatives?

```ts
optional alternatives?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItems>;
```

##### detected\_language?

```ts
optional detected_language?: string;
```

##### search?

```ts
optional search?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsSearchItems>;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItems

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItems = {
  confidence?: number;
  entities?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems>;
  paragraphs?: DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs;
  summaries?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems>;
  topics?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems>;
  transcript?: string;
  words?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems>;
};
```

#### Properties

##### confidence?

```ts
optional confidence?: number;
```

##### entities?

```ts
optional entities?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems>;
```

##### paragraphs?

```ts
optional paragraphs?: DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs;
```

##### summaries?

```ts
optional summaries?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems>;
```

##### topics?

```ts
optional topics?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems>;
```

##### transcript?

```ts
optional transcript?: string;
```

##### words?

```ts
optional words?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems>;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems = {
  confidence?: number;
  end_word?: number;
  label?: string;
  raw_value?: string;
  start_word?: number;
  value?: string;
};
```

#### Properties

##### confidence?

```ts
optional confidence?: number;
```

##### end\_word?

```ts
optional end_word?: number;
```

##### label?

```ts
optional label?: string;
```

##### raw\_value?

```ts
optional raw_value?: string;
```

##### start\_word?

```ts
optional start_word?: number;
```

##### value?

```ts
optional value?: string;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs = {
  paragraphs?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems>;
  transcript?: string;
};
```

#### Properties

##### paragraphs?

```ts
optional paragraphs?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems>;
```

##### transcript?

```ts
optional transcript?: string;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems = {
  end?: number;
  num_words?: number;
  sentences?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems>;
  speaker?: number;
  start?: number;
};
```

#### Properties

##### end?

```ts
optional end?: number;
```

##### num\_words?

```ts
optional num_words?: number;
```

##### sentences?

```ts
optional sentences?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems>;
```

##### speaker?

```ts
optional speaker?: number;
```

##### start?

```ts
optional start?: number;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems = {
  end?: number;
  start?: number;
  text?: string;
};
```

#### Properties

##### end?

```ts
optional end?: number;
```

##### start?

```ts
optional start?: number;
```

##### text?

```ts
optional text?: string;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems = {
  end_word?: number;
  start_word?: number;
  summary?: string;
};
```

#### Properties

##### end\_word?

```ts
optional end_word?: number;
```

##### start\_word?

```ts
optional start_word?: number;
```

##### summary?

```ts
optional summary?: string;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems = {
  end_word?: number;
  start_word?: number;
  text?: string;
  topics?: ReadonlyArray<string>;
};
```

#### Properties

##### end\_word?

```ts
optional end_word?: number;
```

##### start\_word?

```ts
optional start_word?: number;
```

##### text?

```ts
optional text?: string;
```

##### topics?

```ts
optional topics?: ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems = {
  confidence?: number;
  end?: number;
  start?: number;
  word?: string;
};
```

#### Properties

##### confidence?

```ts
optional confidence?: number;
```

##### end?

```ts
optional end?: number;
```

##### start?

```ts
optional start?: number;
```

##### word?

```ts
optional word?: string;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsSearchItems

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsSearchItems = {
  hits?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsSearchItemsHitsItems>;
  query?: string;
};
```

#### Properties

##### hits?

```ts
optional hits?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsSearchItemsHitsItems>;
```

##### query?

```ts
optional query?: string;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsSearchItemsHitsItems

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsSearchItemsHitsItems = {
  confidence?: number;
  end?: number;
  snippet?: string;
  start?: number;
};
```

#### Properties

##### confidence?

```ts
optional confidence?: number;
```

##### end?

```ts
optional end?: number;
```

##### snippet?

```ts
optional snippet?: string;
```

##### start?

```ts
optional start?: number;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsSummary

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsSummary = {
  result?: string;
  short?: string;
};
```

#### Properties

##### result?

```ts
optional result?: string;
```

##### short?

```ts
optional short?: string;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterances

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterances = ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterancesItems>;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterancesItems

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterancesItems = {
  channel?: number;
  confidence?: number;
  end?: number;
  id?: string;
  speaker?: number;
  start?: number;
  transcript?: string;
  words?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterancesItemsWordsItems>;
};
```

#### Properties

##### channel?

```ts
optional channel?: number;
```

##### confidence?

```ts
optional confidence?: number;
```

##### end?

```ts
optional end?: number;
```

##### id?

```ts
optional id?: string;
```

##### speaker?

```ts
optional speaker?: number;
```

##### start?

```ts
optional start?: number;
```

##### transcript?

```ts
optional transcript?: string;
```

##### words?

```ts
optional words?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterancesItemsWordsItems>;
```

***

### DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterancesItemsWordsItems

```ts
type DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterancesItemsWordsItems = {
  confidence?: number;
  end?: number;
  punctuated_word?: string;
  speaker?: number;
  speaker_confidence?: number;
  start?: number;
  word?: string;
};
```

#### Properties

##### confidence?

```ts
optional confidence?: number;
```

##### end?

```ts
optional end?: number;
```

##### punctuated\_word?

```ts
optional punctuated_word?: string;
```

##### speaker?

```ts
optional speaker?: number;
```

##### speaker\_confidence?

```ts
optional speaker_confidence?: number;
```

##### start?

```ts
optional start?: number;
```

##### word?

```ts
optional word?: string;
```

***

### DeepgramSpeechFullApiSchemaListModelsV1Response

```ts
type DeepgramSpeechFullApiSchemaListModelsV1Response = {
  stt?: ReadonlyArray<DeepgramSpeechFullApiSchemaListModelsV1ResponseSttModels>;
  tts?: ReadonlyArray<DeepgramSpeechFullApiSchemaListModelsV1ResponseTtsModels>;
};
```

#### Properties

##### stt?

```ts
optional stt?: ReadonlyArray<DeepgramSpeechFullApiSchemaListModelsV1ResponseSttModels>;
```

##### tts?

```ts
optional tts?: ReadonlyArray<DeepgramSpeechFullApiSchemaListModelsV1ResponseTtsModels>;
```

***

### DeepgramSpeechFullApiSchemaListModelsV1ResponseSttModels

```ts
type DeepgramSpeechFullApiSchemaListModelsV1ResponseSttModels = {
  architecture?: string;
  batch?: boolean;
  canonical_name?: string;
  formatted_output?: boolean;
  languages?: ReadonlyArray<string>;
  name?: string;
  streaming?: boolean;
  uuid?: string;
  version?: string;
};
```

#### Properties

##### architecture?

```ts
optional architecture?: string;
```

##### batch?

```ts
optional batch?: boolean;
```

##### canonical\_name?

```ts
optional canonical_name?: string;
```

##### formatted\_output?

```ts
optional formatted_output?: boolean;
```

##### languages?

```ts
optional languages?: ReadonlyArray<string>;
```

##### name?

```ts
optional name?: string;
```

##### streaming?

```ts
optional streaming?: boolean;
```

##### uuid?

```ts
optional uuid?: string;
```

##### version?

```ts
optional version?: string;
```

***

### DeepgramSpeechFullApiSchemaListModelsV1ResponseTtsModels

```ts
type DeepgramSpeechFullApiSchemaListModelsV1ResponseTtsModels = {
  architecture?: string;
  canonical_name?: string;
  languages?: ReadonlyArray<string>;
  metadata?: DeepgramSpeechFullApiSchemaListModelsV1ResponseTtsModelsMetadata;
  name?: string;
  uuid?: string;
  version?: string;
};
```

#### Properties

##### architecture?

```ts
optional architecture?: string;
```

##### canonical\_name?

```ts
optional canonical_name?: string;
```

##### languages?

```ts
optional languages?: ReadonlyArray<string>;
```

##### metadata?

```ts
optional metadata?: DeepgramSpeechFullApiSchemaListModelsV1ResponseTtsModelsMetadata;
```

##### name?

```ts
optional name?: string;
```

##### uuid?

```ts
optional uuid?: string;
```

##### version?

```ts
optional version?: string;
```

***

### DeepgramSpeechFullApiSchemaListModelsV1ResponseTtsModelsMetadata

```ts
type DeepgramSpeechFullApiSchemaListModelsV1ResponseTtsModelsMetadata = {
  accent?: string;
  age?: string;
  color?: string;
  image?: string;
  sample?: string;
  tags?: ReadonlyArray<string>;
  use_cases?: ReadonlyArray<string>;
};
```

#### Properties

##### accent?

```ts
optional accent?: string;
```

##### age?

```ts
optional age?: string;
```

##### color?

```ts
optional color?: string;
```

##### image?

```ts
optional image?: string;
```

##### sample?

```ts
optional sample?: string;
```

##### tags?

```ts
optional tags?: ReadonlyArray<string>;
```

##### use\_cases?

```ts
optional use_cases?: ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaListProjectBalancesV1Response

```ts
type DeepgramSpeechFullApiSchemaListProjectBalancesV1Response = {
  balances?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectBalancesV1ResponseBalancesItems>;
};
```

#### Properties

##### balances?

```ts
optional balances?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectBalancesV1ResponseBalancesItems>;
```

***

### DeepgramSpeechFullApiSchemaListProjectBalancesV1ResponseBalancesItems

```ts
type DeepgramSpeechFullApiSchemaListProjectBalancesV1ResponseBalancesItems = {
  amount?: number;
  balance_id?: string;
  purchase_order_id?: string;
  units?: string;
};
```

#### Properties

##### amount?

```ts
optional amount?: number;
```

##### balance\_id?

```ts
optional balance_id?: string;
```

##### purchase\_order\_id?

```ts
optional purchase_order_id?: string;
```

##### units?

```ts
optional units?: string;
```

***

### DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1Response

```ts
type DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1Response = {
  distribution_credentials?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems>;
};
```

#### Properties

##### distribution\_credentials?

```ts
optional distribution_credentials?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems>;
```

***

### DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems

```ts
type DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems = {
  distribution_credentials: DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials;
  member: DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember;
};
```

#### Properties

##### distribution\_credentials

```ts
distribution_credentials: DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials;
```

##### member

```ts
member: DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember;
```

***

### DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials

```ts
type DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials = {
  comment?: string;
  created: string;
  distribution_credentials_id: string;
  provider: string;
  scopes: ReadonlyArray<string>;
};
```

#### Properties

##### comment?

```ts
optional comment?: string;
```

##### created

```ts
created: string;
```

##### distribution\_credentials\_id

```ts
distribution_credentials_id: string;
```

##### provider

```ts
provider: string;
```

##### scopes

```ts
scopes: ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember

```ts
type DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember = {
  email: string;
  member_id: string;
};
```

#### Properties

##### email

```ts
email: string;
```

##### member\_id

```ts
member_id: string;
```

***

### DeepgramSpeechFullApiSchemaListProjectInvitesV1Response

```ts
type DeepgramSpeechFullApiSchemaListProjectInvitesV1Response = {
  invites?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectInvitesV1ResponseInvitesItems>;
};
```

#### Properties

##### invites?

```ts
optional invites?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectInvitesV1ResponseInvitesItems>;
```

***

### DeepgramSpeechFullApiSchemaListProjectInvitesV1ResponseInvitesItems

```ts
type DeepgramSpeechFullApiSchemaListProjectInvitesV1ResponseInvitesItems = {
  email?: string;
  scope?: string;
};
```

#### Properties

##### email?

```ts
optional email?: string;
```

##### scope?

```ts
optional scope?: string;
```

***

### DeepgramSpeechFullApiSchemaListProjectKeysV1Response

```ts
type DeepgramSpeechFullApiSchemaListProjectKeysV1Response = {
  api_keys?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItems>;
};
```

#### Properties

##### api\_keys?

```ts
optional api_keys?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItems>;
```

***

### DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItems

```ts
type DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItems = {
  api_key?: DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItemsApiKey;
  member?: DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItemsMember;
};
```

#### Properties

##### api\_key?

```ts
optional api_key?: DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItemsApiKey;
```

##### member?

```ts
optional member?: DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItemsMember;
```

***

### DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItemsApiKey

```ts
type DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItemsApiKey = {
  api_key_id?: string;
  comment?: string;
  created?: string;
  scopes?: ReadonlyArray<string>;
};
```

#### Properties

##### api\_key\_id?

```ts
optional api_key_id?: string;
```

##### comment?

```ts
optional comment?: string;
```

##### created?

```ts
optional created?: string;
```

##### scopes?

```ts
optional scopes?: ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItemsMember

```ts
type DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItemsMember = {
  email?: string;
  member_id?: string;
};
```

#### Properties

##### email?

```ts
optional email?: string;
```

##### member\_id?

```ts
optional member_id?: string;
```

***

### DeepgramSpeechFullApiSchemaListProjectMemberScopesV1Response

```ts
type DeepgramSpeechFullApiSchemaListProjectMemberScopesV1Response = {
  scopes?: ReadonlyArray<string>;
};
```

#### Properties

##### scopes?

```ts
optional scopes?: ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaListProjectMembersV1Response

```ts
type DeepgramSpeechFullApiSchemaListProjectMembersV1Response = {
  members?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectMembersV1ResponseMembersItems>;
};
```

#### Properties

##### members?

```ts
optional members?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectMembersV1ResponseMembersItems>;
```

***

### DeepgramSpeechFullApiSchemaListProjectMembersV1ResponseMembersItems

```ts
type DeepgramSpeechFullApiSchemaListProjectMembersV1ResponseMembersItems = {
  email?: string;
  first_name?: string;
  last_name?: string;
  member_id?: string;
  scopes?: ReadonlyArray<string>;
};
```

#### Properties

##### email?

```ts
optional email?: string;
```

##### first\_name?

```ts
optional first_name?: string;
```

##### last\_name?

```ts
optional last_name?: string;
```

##### member\_id?

```ts
optional member_id?: string;
```

##### scopes?

```ts
optional scopes?: ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaListProjectPurchasesV1Response

```ts
type DeepgramSpeechFullApiSchemaListProjectPurchasesV1Response = {
  orders?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectPurchasesV1ResponseOrdersItems>;
};
```

#### Properties

##### orders?

```ts
optional orders?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectPurchasesV1ResponseOrdersItems>;
```

***

### DeepgramSpeechFullApiSchemaListProjectPurchasesV1ResponseOrdersItems

```ts
type DeepgramSpeechFullApiSchemaListProjectPurchasesV1ResponseOrdersItems = {
  amount?: number;
  created?: string;
  expiration?: string;
  order_id?: string;
  order_type?: string;
  units?: string;
};
```

#### Properties

##### amount?

```ts
optional amount?: number;
```

##### created?

```ts
optional created?: string;
```

##### expiration?

```ts
optional expiration?: string;
```

##### order\_id?

```ts
optional order_id?: string;
```

##### order\_type?

```ts
optional order_type?: string;
```

##### units?

```ts
optional units?: string;
```

***

### DeepgramSpeechFullApiSchemaListProjectRequestsV1Response

```ts
type DeepgramSpeechFullApiSchemaListProjectRequestsV1Response = {
  limit?: number;
  page?: number;
  requests?: ReadonlyArray<DeepgramSpeechFullApiSchemaProjectRequestResponse>;
};
```

#### Properties

##### limit?

```ts
optional limit?: number;
```

##### page?

```ts
optional page?: number;
```

##### requests?

```ts
optional requests?: ReadonlyArray<DeepgramSpeechFullApiSchemaProjectRequestResponse>;
```

***

### DeepgramSpeechFullApiSchemaListProjectsV1Response

```ts
type DeepgramSpeechFullApiSchemaListProjectsV1Response = {
  projects?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectsV1ResponseProjectsItems>;
};
```

#### Properties

##### projects?

```ts
optional projects?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectsV1ResponseProjectsItems>;
```

***

### DeepgramSpeechFullApiSchemaListProjectsV1ResponseProjectsItems

```ts
type DeepgramSpeechFullApiSchemaListProjectsV1ResponseProjectsItems = {
  name?: string;
  project_id?: string;
};
```

#### Properties

##### name?

```ts
optional name?: string;
```

##### project\_id?

```ts
optional project_id?: string;
```

***

### DeepgramSpeechFullApiSchemaProjectRequestResponse

```ts
type DeepgramSpeechFullApiSchemaProjectRequestResponse = {
  api_key_id?: string;
  callback?: string;
  code?: number;
  created?: string;
  deployment?: string;
  path?: string;
  project_uuid?: string;
  request_id?: string;
  response?: DeepgramSpeechFullApiSchemaProjectRequestResponseResponse;
};
```

#### Properties

##### api\_key\_id?

```ts
optional api_key_id?: string;
```

##### callback?

```ts
optional callback?: string;
```

##### code?

```ts
optional code?: number;
```

##### created?

```ts
optional created?: string;
```

##### deployment?

```ts
optional deployment?: string;
```

##### path?

```ts
optional path?: string;
```

##### project\_uuid?

```ts
optional project_uuid?: string;
```

##### request\_id?

```ts
optional request_id?: string;
```

##### response?

```ts
optional response?: DeepgramSpeechFullApiSchemaProjectRequestResponseResponse;
```

***

### DeepgramSpeechFullApiSchemaProjectRequestResponseResponse

```ts
type DeepgramSpeechFullApiSchemaProjectRequestResponseResponse = {
};
```

***

### DeepgramSpeechFullApiSchemaReadV1Request

```ts
type DeepgramSpeechFullApiSchemaReadV1Request =
  | DeepgramSpeechFullApiSchemaReadV1RequestUrl
  | DeepgramSpeechFullApiSchemaReadV1RequestText;
```

***

### DeepgramSpeechFullApiSchemaReadV1RequestText

```ts
type DeepgramSpeechFullApiSchemaReadV1RequestText = {
  text: string;
};
```

#### Properties

##### text

```ts
text: string;
```

***

### DeepgramSpeechFullApiSchemaReadV1RequestUrl

```ts
type DeepgramSpeechFullApiSchemaReadV1RequestUrl = {
  url: string;
};
```

#### Properties

##### url

```ts
url: string;
```

***

### DeepgramSpeechFullApiSchemaReadV1Response

```ts
type DeepgramSpeechFullApiSchemaReadV1Response = {
  metadata: DeepgramSpeechFullApiSchemaReadV1ResponseMetadata;
  results: DeepgramSpeechFullApiSchemaReadV1ResponseResults;
};
```

#### Properties

##### metadata

```ts
metadata: DeepgramSpeechFullApiSchemaReadV1ResponseMetadata;
```

##### results

```ts
results: DeepgramSpeechFullApiSchemaReadV1ResponseResults;
```

***

### DeepgramSpeechFullApiSchemaReadV1ResponseMetadata

```ts
type DeepgramSpeechFullApiSchemaReadV1ResponseMetadata = {
  metadata?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadata;
};
```

#### Properties

##### metadata?

```ts
optional metadata?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadata;
```

***

### DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadata

```ts
type DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadata = {
  created?: string;
  intents_info?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataIntentsInfo;
  language?: string;
  request_id?: string;
  sentiment_info?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataSentimentInfo;
  summary_info?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataSummaryInfo;
  topics_info?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataTopicsInfo;
};
```

#### Properties

##### created?

```ts
optional created?: string;
```

##### intents\_info?

```ts
optional intents_info?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataIntentsInfo;
```

##### language?

```ts
optional language?: string;
```

##### request\_id?

```ts
optional request_id?: string;
```

##### sentiment\_info?

```ts
optional sentiment_info?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataSentimentInfo;
```

##### summary\_info?

```ts
optional summary_info?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataSummaryInfo;
```

##### topics\_info?

```ts
optional topics_info?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataTopicsInfo;
```

***

### DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataIntentsInfo

```ts
type DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataIntentsInfo = {
  input_tokens?: number;
  model_uuid?: string;
  output_tokens?: number;
};
```

#### Properties

##### input\_tokens?

```ts
optional input_tokens?: number;
```

##### model\_uuid?

```ts
optional model_uuid?: string;
```

##### output\_tokens?

```ts
optional output_tokens?: number;
```

***

### DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataSentimentInfo

```ts
type DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataSentimentInfo = {
  input_tokens?: number;
  model_uuid?: string;
  output_tokens?: number;
};
```

#### Properties

##### input\_tokens?

```ts
optional input_tokens?: number;
```

##### model\_uuid?

```ts
optional model_uuid?: string;
```

##### output\_tokens?

```ts
optional output_tokens?: number;
```

***

### DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataSummaryInfo

```ts
type DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataSummaryInfo = {
  input_tokens?: number;
  model_uuid?: string;
  output_tokens?: number;
};
```

#### Properties

##### input\_tokens?

```ts
optional input_tokens?: number;
```

##### model\_uuid?

```ts
optional model_uuid?: string;
```

##### output\_tokens?

```ts
optional output_tokens?: number;
```

***

### DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataTopicsInfo

```ts
type DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataTopicsInfo = {
  input_tokens?: number;
  model_uuid?: string;
  output_tokens?: number;
};
```

#### Properties

##### input\_tokens?

```ts
optional input_tokens?: number;
```

##### model\_uuid?

```ts
optional model_uuid?: string;
```

##### output\_tokens?

```ts
optional output_tokens?: number;
```

***

### DeepgramSpeechFullApiSchemaReadV1ResponseResults

```ts
type DeepgramSpeechFullApiSchemaReadV1ResponseResults = {
  intents?: DeepgramSpeechFullApiSchemaSharedIntents;
  sentiments?: DeepgramSpeechFullApiSchemaSharedSentiments;
  summary?: DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummary;
  topics?: DeepgramSpeechFullApiSchemaSharedTopics;
};
```

#### Properties

##### intents?

```ts
optional intents?: DeepgramSpeechFullApiSchemaSharedIntents;
```

##### sentiments?

```ts
optional sentiments?: DeepgramSpeechFullApiSchemaSharedSentiments;
```

##### summary?

```ts
optional summary?: DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummary;
```

##### topics?

```ts
optional topics?: DeepgramSpeechFullApiSchemaSharedTopics;
```

***

### DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummary

```ts
type DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummary = {
  results?: DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummaryResults;
};
```

#### Properties

##### results?

```ts
optional results?: DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummaryResults;
```

***

### DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummaryResults

```ts
type DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummaryResults = {
  summary?: DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummaryResultsSummary;
};
```

#### Properties

##### summary?

```ts
optional summary?: DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummaryResultsSummary;
```

***

### DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummaryResultsSummary

```ts
type DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummaryResultsSummary = {
  text?: string;
};
```

#### Properties

##### text?

```ts
optional text?: string;
```

***

### DeepgramSpeechFullApiSchemaSharedIntents

```ts
type DeepgramSpeechFullApiSchemaSharedIntents = {
  results?: DeepgramSpeechFullApiSchemaSharedIntentsResults;
};
```

#### Properties

##### results?

```ts
optional results?: DeepgramSpeechFullApiSchemaSharedIntentsResults;
```

***

### DeepgramSpeechFullApiSchemaSharedIntentsResults

```ts
type DeepgramSpeechFullApiSchemaSharedIntentsResults = {
  intents?: DeepgramSpeechFullApiSchemaSharedIntentsResultsIntents;
};
```

#### Properties

##### intents?

```ts
optional intents?: DeepgramSpeechFullApiSchemaSharedIntentsResultsIntents;
```

***

### DeepgramSpeechFullApiSchemaSharedIntentsResultsIntents

```ts
type DeepgramSpeechFullApiSchemaSharedIntentsResultsIntents = {
  segments?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedIntentsResultsIntentsSegmentsItems>;
};
```

#### Properties

##### segments?

```ts
optional segments?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedIntentsResultsIntentsSegmentsItems>;
```

***

### DeepgramSpeechFullApiSchemaSharedIntentsResultsIntentsSegmentsItems

```ts
type DeepgramSpeechFullApiSchemaSharedIntentsResultsIntentsSegmentsItems = {
  end_word?: number;
  intents?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedIntentsResultsIntentsSegmentsItemsIntentsItems>;
  start_word?: number;
  text?: string;
};
```

#### Properties

##### end\_word?

```ts
optional end_word?: number;
```

##### intents?

```ts
optional intents?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedIntentsResultsIntentsSegmentsItemsIntentsItems>;
```

##### start\_word?

```ts
optional start_word?: number;
```

##### text?

```ts
optional text?: string;
```

***

### DeepgramSpeechFullApiSchemaSharedIntentsResultsIntentsSegmentsItemsIntentsItems

```ts
type DeepgramSpeechFullApiSchemaSharedIntentsResultsIntentsSegmentsItemsIntentsItems = {
  confidence_score?: number;
  intent?: string;
};
```

#### Properties

##### confidence\_score?

```ts
optional confidence_score?: number;
```

##### intent?

```ts
optional intent?: string;
```

***

### DeepgramSpeechFullApiSchemaSharedSentiments

```ts
type DeepgramSpeechFullApiSchemaSharedSentiments = {
  average?: DeepgramSpeechFullApiSchemaSharedSentimentsAverage;
  segments?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedSentimentsSegmentsItems>;
};
```

#### Properties

##### average?

```ts
optional average?: DeepgramSpeechFullApiSchemaSharedSentimentsAverage;
```

##### segments?

```ts
optional segments?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedSentimentsSegmentsItems>;
```

***

### DeepgramSpeechFullApiSchemaSharedSentimentsAverage

```ts
type DeepgramSpeechFullApiSchemaSharedSentimentsAverage = {
  sentiment?: string;
  sentiment_score?: number;
};
```

#### Properties

##### sentiment?

```ts
optional sentiment?: string;
```

##### sentiment\_score?

```ts
optional sentiment_score?: number;
```

***

### DeepgramSpeechFullApiSchemaSharedSentimentsSegmentsItems

```ts
type DeepgramSpeechFullApiSchemaSharedSentimentsSegmentsItems = {
  end_word?: number;
  sentiment?: string;
  sentiment_score?: number;
  start_word?: number;
  text?: string;
};
```

#### Properties

##### end\_word?

```ts
optional end_word?: number;
```

##### sentiment?

```ts
optional sentiment?: string;
```

##### sentiment\_score?

```ts
optional sentiment_score?: number;
```

##### start\_word?

```ts
optional start_word?: number;
```

##### text?

```ts
optional text?: string;
```

***

### DeepgramSpeechFullApiSchemaSharedTopics

```ts
type DeepgramSpeechFullApiSchemaSharedTopics = {
  results?: DeepgramSpeechFullApiSchemaSharedTopicsResults;
};
```

#### Properties

##### results?

```ts
optional results?: DeepgramSpeechFullApiSchemaSharedTopicsResults;
```

***

### DeepgramSpeechFullApiSchemaSharedTopicsResults

```ts
type DeepgramSpeechFullApiSchemaSharedTopicsResults = {
  topics?: DeepgramSpeechFullApiSchemaSharedTopicsResultsTopics;
};
```

#### Properties

##### topics?

```ts
optional topics?: DeepgramSpeechFullApiSchemaSharedTopicsResultsTopics;
```

***

### DeepgramSpeechFullApiSchemaSharedTopicsResultsTopics

```ts
type DeepgramSpeechFullApiSchemaSharedTopicsResultsTopics = {
  segments?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedTopicsResultsTopicsSegmentsItems>;
};
```

#### Properties

##### segments?

```ts
optional segments?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedTopicsResultsTopicsSegmentsItems>;
```

***

### DeepgramSpeechFullApiSchemaSharedTopicsResultsTopicsSegmentsItems

```ts
type DeepgramSpeechFullApiSchemaSharedTopicsResultsTopicsSegmentsItems = {
  end_word?: number;
  start_word?: number;
  text?: string;
  topics?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedTopicsResultsTopicsSegmentsItemsTopicsItems>;
};
```

#### Properties

##### end\_word?

```ts
optional end_word?: number;
```

##### start\_word?

```ts
optional start_word?: number;
```

##### text?

```ts
optional text?: string;
```

##### topics?

```ts
optional topics?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedTopicsResultsTopicsSegmentsItemsTopicsItems>;
```

***

### DeepgramSpeechFullApiSchemaSharedTopicsResultsTopicsSegmentsItemsTopicsItems

```ts
type DeepgramSpeechFullApiSchemaSharedTopicsResultsTopicsSegmentsItemsTopicsItems = {
  confidence_score?: number;
  topic?: string;
};
```

#### Properties

##### confidence\_score?

```ts
optional confidence_score?: number;
```

##### topic?

```ts
optional topic?: string;
```

***

### DeepgramSpeechFullApiSchemaSpeakV1AudioGenerateResponse200

```ts
type DeepgramSpeechFullApiSchemaSpeakV1AudioGenerateResponse200 = {
};
```

***

### DeepgramSpeechFullApiSchemaSpeakV1Request

```ts
type DeepgramSpeechFullApiSchemaSpeakV1Request = {
  text: string;
};
```

#### Properties

##### text

```ts
text: string;
```

***

### DeepgramSpeechFullApiSchemaUpdateAgentMetadataV1Request

```ts
type DeepgramSpeechFullApiSchemaUpdateAgentMetadataV1Request = {
  metadata: {
   [key: string]: string;
  };
};
```

#### Properties

##### metadata

```ts
metadata: {
[key: string]: string;
};
```

###### Index Signature

```ts
[key: string]: string
```

***

### DeepgramSpeechFullApiSchemaUpdateAgentVariableV1Request

```ts
type DeepgramSpeechFullApiSchemaUpdateAgentVariableV1Request = {
  value: DeepgramSpeechFullApiSchemaJsonValue;
};
```

#### Properties

##### value

```ts
value: DeepgramSpeechFullApiSchemaJsonValue;
```

***

### DeepgramSpeechFullApiSchemaUpdateProjectMemberScopesV1Request

```ts
type DeepgramSpeechFullApiSchemaUpdateProjectMemberScopesV1Request = {
  scope: string;
};
```

#### Properties

##### scope

```ts
scope: string;
```

***

### DeepgramSpeechFullApiSchemaUpdateProjectMemberScopesV1Response

```ts
type DeepgramSpeechFullApiSchemaUpdateProjectMemberScopesV1Response = {
  message?: string;
};
```

#### Properties

##### message?

```ts
optional message?: string;
```

***

### DeepgramSpeechFullApiSchemaUpdateProjectV1Request

```ts
type DeepgramSpeechFullApiSchemaUpdateProjectV1Request = {
  name?: string;
};
```

#### Properties

##### name?

```ts
optional name?: string;
```

***

### DeepgramSpeechFullApiSchemaUpdateProjectV1Response

```ts
type DeepgramSpeechFullApiSchemaUpdateProjectV1Response = {
  message?: string;
};
```

#### Properties

##### message?

```ts
optional message?: string;
```

***

### DeepgramSpeechFullApiSchemaUsageBreakdownV1Response

```ts
type DeepgramSpeechFullApiSchemaUsageBreakdownV1Response = {
  end: string;
  resolution: DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResolution;
  results: ReadonlyArray<DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResultsItems>;
  start: string;
};
```

#### Properties

##### end

```ts
end: string;
```

##### resolution

```ts
resolution: DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResolution;
```

##### results

```ts
results: ReadonlyArray<DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResultsItems>;
```

##### start

```ts
start: string;
```

***

### DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResolution

```ts
type DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResolution = {
  amount: number;
  units: string;
};
```

#### Properties

##### amount

```ts
amount: number;
```

##### units

```ts
units: string;
```

***

### DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResultsItems

```ts
type DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResultsItems = {
  agent_hours: number;
  grouping: DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResultsItemsGrouping;
  hours: number;
  requests: number;
  tokens_in: number;
  tokens_out: number;
  total_hours: number;
  tts_characters: number;
};
```

#### Properties

##### agent\_hours

```ts
agent_hours: number;
```

##### grouping

```ts
grouping: DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResultsItemsGrouping;
```

##### hours

```ts
hours: number;
```

##### requests

```ts
requests: number;
```

##### tokens\_in

```ts
tokens_in: number;
```

##### tokens\_out

```ts
tokens_out: number;
```

##### total\_hours

```ts
total_hours: number;
```

##### tts\_characters

```ts
tts_characters: number;
```

***

### DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResultsItemsGrouping

```ts
type DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResultsItemsGrouping = {
  accessor?: string | null;
  deployment?: string | null;
  end?: string;
  endpoint?: string | null;
  feature_set?: string | null;
  method?: string | null;
  models?: ReadonlyArray<string>;
  start?: string;
  tags?: ReadonlyArray<string> | null;
};
```

#### Properties

##### accessor?

```ts
optional accessor?: string | null;
```

##### deployment?

```ts
optional deployment?: string | null;
```

##### end?

```ts
optional end?: string;
```

##### endpoint?

```ts
optional endpoint?: string | null;
```

##### feature\_set?

```ts
optional feature_set?: string | null;
```

##### method?

```ts
optional method?: string | null;
```

##### models?

```ts
optional models?: ReadonlyArray<string>;
```

##### start?

```ts
optional start?: string;
```

##### tags?

```ts
optional tags?: ReadonlyArray<string> | null;
```

***

### DeepgramSpeechFullApiSchemaUsageFieldsV1Response

```ts
type DeepgramSpeechFullApiSchemaUsageFieldsV1Response = {
  features?: ReadonlyArray<string>;
  models?: ReadonlyArray<DeepgramSpeechFullApiSchemaUsageFieldsV1ResponseModelsItems>;
  processing_methods?: ReadonlyArray<string>;
  tags?: ReadonlyArray<string>;
};
```

#### Properties

##### features?

```ts
optional features?: ReadonlyArray<string>;
```

##### models?

```ts
optional models?: ReadonlyArray<DeepgramSpeechFullApiSchemaUsageFieldsV1ResponseModelsItems>;
```

##### processing\_methods?

```ts
optional processing_methods?: ReadonlyArray<string>;
```

##### tags?

```ts
optional tags?: ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaUsageFieldsV1ResponseModelsItems

```ts
type DeepgramSpeechFullApiSchemaUsageFieldsV1ResponseModelsItems = {
  language?: string;
  model_id?: string;
  name?: string;
  version?: string;
};
```

#### Properties

##### language?

```ts
optional language?: string;
```

##### model\_id?

```ts
optional model_id?: string;
```

##### name?

```ts
optional name?: string;
```

##### version?

```ts
optional version?: string;
```

***

### DeepgramSpeechFullApiSchemaUsageV1Response

```ts
type DeepgramSpeechFullApiSchemaUsageV1Response = {
  end?: string;
  resolution?: DeepgramSpeechFullApiSchemaUsageV1ResponseResolution;
  start?: string;
};
```

#### Properties

##### end?

```ts
optional end?: string;
```

##### resolution?

```ts
optional resolution?: DeepgramSpeechFullApiSchemaUsageV1ResponseResolution;
```

##### start?

```ts
optional start?: string;
```

***

### DeepgramSpeechFullApiSchemaUsageV1ResponseResolution

```ts
type DeepgramSpeechFullApiSchemaUsageV1ResponseResolution = {
  amount?: number;
  units?: string;
};
```

#### Properties

##### amount?

```ts
optional amount?: number;
```

##### units?

```ts
optional units?: string;
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersCallbackMethod

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersCallbackMethod = "POST" | "PUT";
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomIntent

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomIntent = string | ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomIntentMode

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomIntentMode = "extended" | "strict";
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomTopic

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomTopic = string | ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomTopicMode

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomTopicMode = "extended" | "strict";
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersDetectLanguage

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersDetectLanguage = boolean | ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersDiarizeModel

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersDiarizeModel = "latest" | "v1" | "v2";
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersEncoding

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersEncoding =
  | "linear16"
  | "flac"
  | "mulaw"
  | "amr-nb"
  | "amr-wb"
  | "opus"
  | "speex"
  | "g729";
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersExtra

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersExtra = string | ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersKeywords

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersKeywords = string | ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersModel

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersModel =
  | DeepgramSpeechFullApiSchemaV1ListenPostParametersModel0
  | string;
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersModel0

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersModel0 =
  | "nova-3"
  | "nova-3-general"
  | "nova-3-medical"
  | "nova-2"
  | "nova-2-general"
  | "nova-2-meeting"
  | "nova-2-finance"
  | "nova-2-conversationalai"
  | "nova-2-voicemail"
  | "nova-2-video"
  | "nova-2-medical"
  | "nova-2-drivethru"
  | "nova-2-automotive"
  | "nova"
  | "nova-general"
  | "nova-phonecall"
  | "nova-medical"
  | "enhanced"
  | "enhanced-general"
  | "enhanced-meeting"
  | "enhanced-phonecall"
  | "enhanced-finance"
  | "base"
  | "meeting"
  | "phonecall"
  | "finance"
  | "conversationalai"
  | "voicemail"
  | "video";
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersRedact

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersRedact =
  | string
  | DeepgramSpeechFullApiSchemaV1ListenPostParametersRedact1;
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersRedact1

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersRedact1 = ReadonlyArray<DeepgramSpeechFullApiSchemaV1ListenPostParametersRedactSchemaOneOf1Items>;
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersRedactSchemaOneOf1Items

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersRedactSchemaOneOf1Items = "pci" | "pii" | "numbers";
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersReplace

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersReplace = string | ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersSearch

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersSearch = string | ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersSummarize

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersSummarize =
  | DeepgramSpeechFullApiSchemaV1ListenPostParametersSummarize0
  | boolean;
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersSummarize0

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersSummarize0 = "v2";
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersTag

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersTag = string | ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersVersion

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersVersion =
  | DeepgramSpeechFullApiSchemaV1ListenPostParametersVersion0
  | string;
```

***

### DeepgramSpeechFullApiSchemaV1ListenPostParametersVersion0

```ts
type DeepgramSpeechFullApiSchemaV1ListenPostParametersVersion0 = "latest";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdBillingBreakdownGetParametersDeployment

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdBillingBreakdownGetParametersDeployment = "hosted" | "beta" | "self-hosted";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems = "accessor" | "deployment" | "line_item" | "tags";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdKeysGetParametersStatus

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdKeysGetParametersStatus = "active" | "expired";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersDeployment

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersDeployment = "hosted" | "beta" | "self-hosted";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersEndpoint

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersEndpoint = "listen" | "read" | "speak" | "agent";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersMethod

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersMethod = "sync" | "async" | "streaming";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersStatus

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersStatus = "succeeded" | "failed";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider = "quay";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems =
  | "self-hosted:products"
  | "self-hosted:product:api"
  | "self-hosted:product:engine"
  | "self-hosted:product:license-proxy"
  | "self-hosted:product:dgtools"
  | "self-hosted:product:billing"
  | "self-hosted:product:hotpepper"
  | "self-hosted:product:metrics-server";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersDeployment

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersDeployment = "hosted" | "beta" | "self-hosted";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersEndpoint

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersEndpoint = "listen" | "read" | "speak" | "agent";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersGrouping

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersGrouping =
  | "accessor"
  | "endpoint"
  | "feature_set"
  | "models"
  | "method"
  | "tags"
  | "deployment";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersMethod

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersMethod = "sync" | "async" | "streaming";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersDeployment

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersDeployment = "hosted" | "beta" | "self-hosted";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersEndpoint

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersEndpoint = "listen" | "read" | "speak" | "agent";
```

***

### DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersMethod

```ts
type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersMethod = "sync" | "async" | "streaming";
```

***

### DeepgramSpeechFullApiSchemaV1ReadPostParametersCallbackMethod

```ts
type DeepgramSpeechFullApiSchemaV1ReadPostParametersCallbackMethod = "POST" | "PUT";
```

***

### DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomIntent

```ts
type DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomIntent = string | ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomIntentMode

```ts
type DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomIntentMode = "extended" | "strict";
```

***

### DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomTopic

```ts
type DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomTopic = string | ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomTopicMode

```ts
type DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomTopicMode = "extended" | "strict";
```

***

### DeepgramSpeechFullApiSchemaV1ReadPostParametersSummarize

```ts
type DeepgramSpeechFullApiSchemaV1ReadPostParametersSummarize =
  | DeepgramSpeechFullApiSchemaV1ReadPostParametersSummarize0
  | boolean;
```

***

### DeepgramSpeechFullApiSchemaV1ReadPostParametersSummarize0

```ts
type DeepgramSpeechFullApiSchemaV1ReadPostParametersSummarize0 = "v2";
```

***

### DeepgramSpeechFullApiSchemaV1ReadPostParametersTag

```ts
type DeepgramSpeechFullApiSchemaV1ReadPostParametersTag = string | ReadonlyArray<string>;
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersBitRate

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersBitRate =
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersBitRate0
  | number
  | number;
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersBitRate0

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersBitRate0 = "32000" | "48000";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersCallbackMethod

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersCallbackMethod = "POST" | "PUT";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer =
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer0
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer1
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer2
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer3
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer4;
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer0

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer0 = "none";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer1

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer1 = "wav";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer2

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer2 = "wav";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer3

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer3 = "wav";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer4

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer4 = "ogg";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding =
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding0
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding1
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding2
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding3
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding4
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding5
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding6;
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding0

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding0 = "linear16";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding1

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding1 = "flac";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding2

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding2 = "mulaw";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding3

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding3 = "alaw";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding4

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding4 = "mp3";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding5

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding5 = "opus";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding6

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding6 = "aac";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersModel

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersModel =
  | "aura-asteria-en"
  | "aura-luna-en"
  | "aura-stella-en"
  | "aura-athena-en"
  | "aura-hera-en"
  | "aura-orion-en"
  | "aura-arcas-en"
  | "aura-perseus-en"
  | "aura-angus-en"
  | "aura-orpheus-en"
  | "aura-helios-en"
  | "aura-zeus-en"
  | "aura-2-amalthea-en"
  | "aura-2-andromeda-en"
  | "aura-2-apollo-en"
  | "aura-2-arcas-en"
  | "aura-2-aries-en"
  | "aura-2-asteria-en"
  | "aura-2-athena-en"
  | "aura-2-atlas-en"
  | "aura-2-aurora-en"
  | "aura-2-callista-en"
  | "aura-2-cordelia-en"
  | "aura-2-cora-en"
  | "aura-2-delia-en"
  | "aura-2-draco-en"
  | "aura-2-electra-en"
  | "aura-2-harmonia-en"
  | "aura-2-helena-en"
  | "aura-2-hera-en"
  | "aura-2-hermes-en"
  | "aura-2-hyperion-en"
  | "aura-2-iris-en"
  | "aura-2-janus-en"
  | "aura-2-juno-en"
  | "aura-2-jupiter-en"
  | "aura-2-luna-en"
  | "aura-2-mars-en"
  | "aura-2-minerva-en"
  | "aura-2-neptune-en"
  | "aura-2-odysseus-en"
  | "aura-2-ophelia-en"
  | "aura-2-orion-en"
  | "aura-2-orpheus-en"
  | "aura-2-pandora-en"
  | "aura-2-phoebe-en"
  | "aura-2-pluto-en"
  | "aura-2-saturn-en"
  | "aura-2-selene-en"
  | "aura-2-thalia-en"
  | "aura-2-theia-en"
  | "aura-2-vesta-en"
  | "aura-2-zeus-en"
  | "aura-2-sirio-es"
  | "aura-2-nestor-es"
  | "aura-2-carina-es"
  | "aura-2-celeste-es"
  | "aura-2-alvaro-es"
  | "aura-2-diana-es"
  | "aura-2-aquila-es"
  | "aura-2-selena-es"
  | "aura-2-estrella-es"
  | "aura-2-javier-es";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate =
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate0
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate1
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate2
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate3
  | DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate4;
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate0

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate0 = "8000" | "16000" | "24000" | "32000" | "48000";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate1

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate1 = "8000" | "16000";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate2

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate2 = "8000" | "16000";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate3

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate3 = "22050";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate4

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate4 = "48000";
```

***

### DeepgramSpeechFullApiSchemaV1SpeakPostParametersTag

```ts
type DeepgramSpeechFullApiSchemaV1SpeakPostParametersTag = string | ReadonlyArray<string>;
```

***

### DeepgramSpeechGeneratedOperationCaller

```ts
type DeepgramSpeechGeneratedOperationCaller = <OperationKey>(operationKey, ...args) => Promise<DeepgramSpeechFullApiOperationResponseMap[OperationKey]>;
```

#### Type Parameters

| Type Parameter |
| ------ |
| `OperationKey` *extends* `DeepgramSpeechFullApiOperationKey` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `operationKey` | `OperationKey` |
| ...`args` | `DeepgramSpeechFullApiOperationArgs`\<`OperationKey`\> |

#### Returns

`Promise`\<[`DeepgramSpeechFullApiOperationResponseMap`](#deepgramspeechfullapioperationresponsemap)\[`OperationKey`\]\>

***

### DeepgramSpeechJsonPrimitive

```ts
type DeepgramSpeechJsonPrimitive = string | number | boolean | null;
```

***

### DeepgramSpeechJsonValue

```ts
type DeepgramSpeechJsonValue =
  | DeepgramSpeechJsonPrimitive
  | DeepgramSpeechJsonObject
  | DeepgramSpeechJsonValue[];
```

***

### DeepgramSpeechResource

```ts
type DeepgramSpeechResource =
  | DeepgramSpeechJsonValue
  | ArrayBuffer
| ReadableStream<Uint8Array>;
```

## Variables

### DEEPGRAM\_SPEECH\_FULL\_API\_GENERATED\_AT

```ts
const DEEPGRAM_SPEECH_FULL_API_GENERATED_AT: "2026-06-18";
```

***

### DEEPGRAM\_SPEECH\_FULL\_API\_GENERATED\_FUNCTION\_COUNT

```ts
const DEEPGRAM_SPEECH_FULL_API_GENERATED_FUNCTION_COUNT: 49;
```

***

### DEEPGRAM\_SPEECH\_FULL\_API\_GENERATED\_FUNCTION\_NAMES

```ts
const DEEPGRAM_SPEECH_FULL_API_GENERATED_FUNCTION_NAMES: readonly ["List", "Grant", "Transcribe", "Get5", "List6", "Delete3", "Get3", "Leave", "List4", "Update3", "Get10", "List13", "List14", "List15", "List16", "Create3", "Delete4", "Get6", "List7", "Delete5", "List8", "Create4", "Delete6", "List10", "List9", "Update4", "Get4", "List5", "Get7", "List11", "Get8", "Get9", "List12", "Analyze", "Create5", "Delete7", "Get11", "List17", "Generate", "Create", "Delete", "Get", "List2", "Update", "Create2", "Delete2", "Get2", "List3", "Update2"];
```

***

### DEEPGRAM\_SPEECH\_FULL\_API\_OPERATION\_BY\_ID

```ts
const DEEPGRAM_SPEECH_FULL_API_OPERATION_BY_ID: Map<string, DeepgramSpeechFullApiOperation>;
```

***

### DEEPGRAM\_SPEECH\_FULL\_API\_OPERATION\_BY\_OPERATION\_ID

```ts
const DEEPGRAM_SPEECH_FULL_API_OPERATION_BY_OPERATION_ID: Map<string, DeepgramSpeechFullApiOperation>;
```

***

### DEEPGRAM\_SPEECH\_FULL\_API\_OPERATION\_COUNT

```ts
const DEEPGRAM_SPEECH_FULL_API_OPERATION_COUNT: 49;
```

***

### DEEPGRAM\_SPEECH\_FULL\_API\_OPERATIONS

```ts
const DEEPGRAM_SPEECH_FULL_API_OPERATIONS: readonly DeepgramSpeechFullApiOperation[];
```

***

### DEEPGRAM\_SPEECH\_FULL\_API\_SPEC

```ts
const DEEPGRAM_SPEECH_FULL_API_SPEC: {
  docsUrl: string;
  openapi: string;
  operationCount: number;
  pathCount: number;
  sourceUrl: string;
  title: string;
  version: string;
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-docsurl"></a> `docsUrl` | `string` |
| <a id="property-openapi"></a> `openapi` | `string` |
| <a id="property-operationcount"></a> `operationCount` | `number` |
| <a id="property-pathcount"></a> `pathCount` | `number` |
| <a id="property-sourceurl"></a> `sourceUrl` | `string` |
| <a id="property-title"></a> `title` | `string` |
| <a id="property-version"></a> `version` | `string` |

***

### DEEPGRAM\_SPEECH\_FULL\_API\_SPEC\_SOURCE

```ts
const DEEPGRAM_SPEECH_FULL_API_SPEC_SOURCE: "https://developers.deepgram.com/openapi.json";
```

***

### DEEPGRAM\_SPEECH\_FULL\_API\_SPEC\_VERSION

```ts
const DEEPGRAM_SPEECH_FULL_API_SPEC_VERSION: "deepgram-1.0.0";
```

***

### deepgramSpeechProviderManifest

```ts
const deepgramSpeechProviderManifest: {
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
     description: "Transcribes customer PCM voice input with Deepgram speech-to-text.";
     exposesSensitiveData: true;
     label: "Transcribe speech";
     providerObjects: [{
        kind: "deepgramTranscript";
        label: "Deepgram Transcript";
     }];
     requiresCredential: true;
   }, {
     audiences: ["customer-facing"];
     capability: "send";
     description: "Synthesizes Cognidesk assistant text with Deepgram Aura text-to-speech.";
     exposesSensitiveData: true;
     label: "Synthesize speech";
     providerObjects: [{
        kind: "deepgramSpeechSynthesis";
        label: "Deepgram Speech Synthesis";
     }];
     requiresCredential: true;
     sideEffect: true;
   }, {
     audiences: ["customer-facing", "internal-support"];
     capability: "media";
     description: "Exchanges buffered PCM input and synthesized 24 kHz linear16 output for Cognidesk voice sessions.";
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
        label: "Deepgram prerecorded audio STT";
        url: "https://developers.deepgram.com/docs/pre-recorded-audio";
      }, {
        label: "Deepgram Text-to-Speech REST";
        url: "https://developers.deepgram.com/docs/text-to-speech";
      }, {
        label: "Deepgram TTS media output settings";
        url: "https://developers.deepgram.com/docs/tts-media-output-settings";
     }];
     notes: ["Implements Deepgram prerecorded speech-to-text and Aura text-to-speech REST requests for Cognidesk STT/TTS voice pipelines.", "Generated operation inventory and caller interfaces cover Deepgram's official REST OpenAPI document, including /v1/listen and /v1/speak.", "Deepgram supplies transcripts and synthesized speech audio while Cognidesk still owns the Agent Model Set, Journeys, Tools, Knowledge, and durable transcript boundary.", "Does not implement Deepgram Voice Agent, Flux websocket sessions, live streaming STT, custom model administration, self-hosted deployment management, telephony carrier setup, or Deepgram account policy."];
     scope: "provider-api-subset";
  };
  credentialRequirements: [{
     description: "Server-side Deepgram API key sent through the Authorization Token header for speech API requests.";
     id: "deepgram-api-key";
     label: "Deepgram API key";
     metadata: {
        enterpriseControls: readonly ["project-retention-policy", "region-routing", "self-hosted-or-private-deployment"];
        minimumAccess: readonly ["speech-to-text", "text-to-speech"];
     };
     required: true;
  }];
  directions: ["receive-only", "send-only", "bidirectional"];
  id: "voice.deepgram";
  limitations: ["This package implements REST STT/TTS for Cognidesk speech pipelines, not Deepgram Voice Agent or full streaming websocket sessions.", "The background LLM is the Cognidesk Agent Model Set configured through @cognidesk/model, not Deepgram.", "Consent, recording, retention, project region, model-improvement settings, self-hosting, and Deepgram enterprise account policy remain SDK-user/provider configuration."];
  maintainers: [{
     name: "Cognidesk";
     type: "official";
  }];
  metadata: {
     channelCoverage: {
        backgroundModelProvider: "sdk-owned-agent-model-set";
        browserVoiceProtocol: "sdk-owned-cognidesk-voice-websocket";
        deepgramVoiceAgent: "not-covered";
        fluxStreaming: "not-covered";
        speechToText: "typed-prerecorded-audio-rest";
        telephony: "not-covered";
        textToSpeech: "typed-rest";
     };
     generatedSpeechApi: {
        apiVersion: "deepgram-1.0.0";
        functionCount: 49;
        operationCount: 49;
     };
  };
  name: "Deepgram Speech";
  packageName: "@cognidesk/integrations";
  privacyNotes: ["Customer audio is sent to Deepgram for transcription, and assistant response text is sent to Deepgram for synthesis.", "Deepgram API keys remain server-side and are never issued to browsers by this package."];
  provider: "deepgram";
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
| `capabilities` | \[\{ `audiences`: \[`"customer-facing"`\]; `capability`: `"receive"`; `description`: `"Transcribes customer PCM voice input with Deepgram speech-to-text."`; `exposesSensitiveData`: `true`; `label`: `"Transcribe speech"`; `providerObjects`: \[\{ `kind`: `"deepgramTranscript"`; `label`: `"Deepgram Transcript"`; \}\]; `requiresCredential`: `true`; \}, \{ `audiences`: \[`"customer-facing"`\]; `capability`: `"send"`; `description`: `"Synthesizes Cognidesk assistant text with Deepgram Aura text-to-speech."`; `exposesSensitiveData`: `true`; `label`: `"Synthesize speech"`; `providerObjects`: \[\{ `kind`: `"deepgramSpeechSynthesis"`; `label`: `"Deepgram Speech Synthesis"`; \}\]; `requiresCredential`: `true`; `sideEffect`: `true`; \}, \{ `audiences`: \[`"customer-facing"`, `"internal-support"`\]; `capability`: `"media"`; `description`: `"Exchanges buffered PCM input and synthesized 24 kHz linear16 output for Cognidesk voice sessions."`; `exposesSensitiveData`: `true`; `label`: `"Speech audio media"`; `providerObjects`: \[\{ `kind`: `"voiceTranscript"`; `label`: `"Voice Transcript"`; \}, \{ `kind`: `"voiceAudio"`; `label`: `"Voice Audio"`; \}\]; `requiresCredential`: `true`; \}\] |
| `category` | `"voice"` |
| `channelAudiences` | \[`"customer-facing"`, `"mixed"`\] |
| `coverage` | \{ `evidence`: \[\{ `label`: `"Deepgram prerecorded audio STT"`; `url`: `"https://developers.deepgram.com/docs/pre-recorded-audio"`; \}, \{ `label`: `"Deepgram Text-to-Speech REST"`; `url`: `"https://developers.deepgram.com/docs/text-to-speech"`; \}, \{ `label`: `"Deepgram TTS media output settings"`; `url`: `"https://developers.deepgram.com/docs/tts-media-output-settings"`; \}\]; `notes`: \[`"Implements Deepgram prerecorded speech-to-text and Aura text-to-speech REST requests for Cognidesk STT/TTS voice pipelines."`, `"Generated operation inventory and caller interfaces cover Deepgram's official REST OpenAPI document, including /v1/listen and /v1/speak."`, `"Deepgram supplies transcripts and synthesized speech audio while Cognidesk still owns the Agent Model Set, Journeys, Tools, Knowledge, and durable transcript boundary."`, `"Does not implement Deepgram Voice Agent, Flux websocket sessions, live streaming STT, custom model administration, self-hosted deployment management, telephony carrier setup, or Deepgram account policy."`\]; `scope`: `"provider-api-subset"`; \} |
| `coverage.evidence` | \[\{ `label`: `"Deepgram prerecorded audio STT"`; `url`: `"https://developers.deepgram.com/docs/pre-recorded-audio"`; \}, \{ `label`: `"Deepgram Text-to-Speech REST"`; `url`: `"https://developers.deepgram.com/docs/text-to-speech"`; \}, \{ `label`: `"Deepgram TTS media output settings"`; `url`: `"https://developers.deepgram.com/docs/tts-media-output-settings"`; \}\] |
| `coverage.notes` | \[`"Implements Deepgram prerecorded speech-to-text and Aura text-to-speech REST requests for Cognidesk STT/TTS voice pipelines."`, `"Generated operation inventory and caller interfaces cover Deepgram's official REST OpenAPI document, including /v1/listen and /v1/speak."`, `"Deepgram supplies transcripts and synthesized speech audio while Cognidesk still owns the Agent Model Set, Journeys, Tools, Knowledge, and durable transcript boundary."`, `"Does not implement Deepgram Voice Agent, Flux websocket sessions, live streaming STT, custom model administration, self-hosted deployment management, telephony carrier setup, or Deepgram account policy."`\] |
| `coverage.scope` | `"provider-api-subset"` |
| `credentialRequirements` | \[\{ `description`: `"Server-side Deepgram API key sent through the Authorization Token header for speech API requests."`; `id`: `"deepgram-api-key"`; `label`: `"Deepgram API key"`; `metadata`: \{ `enterpriseControls`: readonly \[`"project-retention-policy"`, `"region-routing"`, `"self-hosted-or-private-deployment"`\]; `minimumAccess`: readonly \[`"speech-to-text"`, `"text-to-speech"`\]; \}; `required`: `true`; \}\] |
| `directions` | \[`"receive-only"`, `"send-only"`, `"bidirectional"`\] |
| `id` | `"voice.deepgram"` |
| `limitations` | \[`"This package implements REST STT/TTS for Cognidesk speech pipelines, not Deepgram Voice Agent or full streaming websocket sessions."`, `"The background LLM is the Cognidesk Agent Model Set configured through @cognidesk/model, not Deepgram."`, `"Consent, recording, retention, project region, model-improvement settings, self-hosting, and Deepgram enterprise account policy remain SDK-user/provider configuration."`\] |
| `maintainers` | \[\{ `name`: `"Cognidesk"`; `type`: `"official"`; \}\] |
| `metadata` | \{ `channelCoverage`: \{ `backgroundModelProvider`: `"sdk-owned-agent-model-set"`; `browserVoiceProtocol`: `"sdk-owned-cognidesk-voice-websocket"`; `deepgramVoiceAgent`: `"not-covered"`; `fluxStreaming`: `"not-covered"`; `speechToText`: `"typed-prerecorded-audio-rest"`; `telephony`: `"not-covered"`; `textToSpeech`: `"typed-rest"`; \}; `generatedSpeechApi`: \{ `apiVersion`: `"deepgram-1.0.0"`; `functionCount`: `49`; `operationCount`: `49`; \}; \} |
| `metadata.channelCoverage` | \{ `backgroundModelProvider`: `"sdk-owned-agent-model-set"`; `browserVoiceProtocol`: `"sdk-owned-cognidesk-voice-websocket"`; `deepgramVoiceAgent`: `"not-covered"`; `fluxStreaming`: `"not-covered"`; `speechToText`: `"typed-prerecorded-audio-rest"`; `telephony`: `"not-covered"`; `textToSpeech`: `"typed-rest"`; \} |
| `metadata.channelCoverage.backgroundModelProvider` | `"sdk-owned-agent-model-set"` |
| `metadata.channelCoverage.browserVoiceProtocol` | `"sdk-owned-cognidesk-voice-websocket"` |
| `metadata.channelCoverage.deepgramVoiceAgent` | `"not-covered"` |
| `metadata.channelCoverage.fluxStreaming` | `"not-covered"` |
| `metadata.channelCoverage.speechToText` | `"typed-prerecorded-audio-rest"` |
| `metadata.channelCoverage.telephony` | `"not-covered"` |
| `metadata.channelCoverage.textToSpeech` | `"typed-rest"` |
| `metadata.generatedSpeechApi` | \{ `apiVersion`: `"deepgram-1.0.0"`; `functionCount`: `49`; `operationCount`: `49`; \} |
| `metadata.generatedSpeechApi.apiVersion` | `"deepgram-1.0.0"` |
| `metadata.generatedSpeechApi.functionCount` | `49` |
| `metadata.generatedSpeechApi.operationCount` | `49` |
| `name` | `"Deepgram Speech"` |
| `packageName` | `"@cognidesk/integrations"` |
| `privacyNotes` | \[`"Customer audio is sent to Deepgram for transcription, and assistant response text is sent to Deepgram for synthesis."`, `"Deepgram API keys remain server-side and are never issued to browsers by this package."`\] |
| `provider` | `"deepgram"` |
| `trustLevel` | `"official"` |

## Functions

### createDeepgramSpeechClient()

```ts
function createDeepgramSpeechClient(options): DeepgramSpeechClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`DeepgramSpeechClientOptions`](#deepgramspeechclientoptions) |

#### Returns

[`DeepgramSpeechClient`](#deepgramspeechclient)

***

### createDeepgramSpeechFullApiGeneratedClient()

```ts
function createDeepgramSpeechFullApiGeneratedClient(callOperation): DeepgramSpeechFullApiGeneratedClient;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callOperation` | [`DeepgramSpeechGeneratedOperationCaller`](#deepgramspeechgeneratedoperationcaller) |

#### Returns

[`DeepgramSpeechFullApiGeneratedClient`](#deepgramspeechfullapigeneratedclient)

***

### createDeepgramSpeechVoiceProvider()

```ts
function createDeepgramSpeechVoiceProvider(options?): VoiceProvider;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options?` | [`DeepgramSpeechVoiceProviderOptions`](#deepgramspeechvoiceprovideroptions) |

#### Returns

[`VoiceProvider`](../../../voice-websocket/dist.md#voiceprovider)

***

### deepgramSpeechCredentialStatuses()

```ts
function deepgramSpeechCredentialStatuses(input): {
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
| `input` | [`DeepgramSpeechCredentialStatusInput`](#deepgramspeechcredentialstatusinput) |

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
