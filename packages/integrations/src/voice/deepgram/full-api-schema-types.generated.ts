// Generated provider schema DTOs for DeepgramSpeechFullApi.
// Do not edit by hand; run scripts/harden-generated-client-types.mjs after updating provider specs.

export type DeepgramSpeechFullApiSchemaJsonPrimitive = string | number | boolean | null;
export type DeepgramSpeechFullApiSchemaJsonValue = DeepgramSpeechFullApiSchemaJsonPrimitive | readonly DeepgramSpeechFullApiSchemaJsonValue[] | { readonly [key: string]: DeepgramSpeechFullApiSchemaJsonValue | undefined };

export type DeepgramSpeechFullApiSchemaV1ReadPostParametersCallbackMethod = "POST" | "PUT";

export type DeepgramSpeechFullApiSchemaV1ReadPostParametersSummarize = (DeepgramSpeechFullApiSchemaV1ReadPostParametersSummarize0 | boolean);

export type DeepgramSpeechFullApiSchemaV1ReadPostParametersTag = (string | ReadonlyArray<string>);

export type DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomTopic = (string | ReadonlyArray<string>);

export type DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomTopicMode = "extended" | "strict";

export type DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomIntent = (string | ReadonlyArray<string>);

export type DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomIntentMode = "extended" | "strict";

export type DeepgramSpeechFullApiSchemaReadV1Request = (DeepgramSpeechFullApiSchemaReadV1RequestUrl | DeepgramSpeechFullApiSchemaReadV1RequestText);

export type DeepgramSpeechFullApiSchemaReadV1Response = {
  metadata: DeepgramSpeechFullApiSchemaReadV1ResponseMetadata;
  results: DeepgramSpeechFullApiSchemaReadV1ResponseResults;
};

export type DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1Request = {
  config: string;
  metadata?: {
  readonly [key: string]: string | undefined;
};
  api_version?: number;
};

export type DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1Response = {
  agent_id: string;
  config: DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1ResponseConfig;
  metadata?: {
  readonly [key: string]: string | undefined;
};
};

export type DeepgramSpeechFullApiSchemaCreateAgentVariableV1Request = {
  key: string;
  value: DeepgramSpeechFullApiSchemaJsonValue;
  api_version?: number;
};

export type DeepgramSpeechFullApiSchemaAgentVariableV1 = {
  variable_id: string;
  key: string;
  value: DeepgramSpeechFullApiSchemaJsonValue;
  created_at?: string;
  updated_at?: string;
};

export type DeepgramSpeechFullApiSchemaCreateKeyV1Request = (DeepgramSpeechFullApiSchemaJsonValue | DeepgramSpeechFullApiSchemaJsonValue);

export type DeepgramSpeechFullApiSchemaCreateKeyV1Response = {
  api_key_id?: string;
  key?: string;
  comment?: string;
  scopes?: ReadonlyArray<string>;
  tags?: ReadonlyArray<string>;
  expiration_date?: string;
};

export type DeepgramSpeechFullApiSchemaCreateProjectInviteV1Request = {
  email: string;
  scope: string;
};

export type DeepgramSpeechFullApiSchemaCreateProjectInviteV1Response = {
  message?: string;
};

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems = "self-hosted:products" | "self-hosted:product:api" | "self-hosted:product:engine" | "self-hosted:product:license-proxy" | "self-hosted:product:dgtools" | "self-hosted:product:billing" | "self-hosted:product:hotpepper" | "self-hosted:product:metrics-server";

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider = "quay";

export type DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1Request = {
  comment?: string;
};

export type DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1Response = {
  member: DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1ResponseMember;
  distribution_credentials: DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1ResponseDistributionCredentials;
};

export type DeepgramSpeechFullApiSchemaDeleteAgentConfigurationV1Response = {};

export type DeepgramSpeechFullApiSchemaDeleteAgentVariableV1Response = {};

export type DeepgramSpeechFullApiSchemaDeleteProjectV1Response = {
  message?: string;
};

export type DeepgramSpeechFullApiSchemaDeleteProjectKeyV1Response = {
  message?: string;
};

export type DeepgramSpeechFullApiSchemaDeleteProjectMemberV1Response = {
  message?: string;
};

export type DeepgramSpeechFullApiSchemaDeleteProjectInviteV1Response = {
  message?: string;
};

export type DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1Response = {
  member: DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1ResponseMember;
  distribution_credentials: DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1ResponseDistributionCredentials;
};

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersCallbackMethod = "POST" | "PUT";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersTag = (string | ReadonlyArray<string>);

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersBitRate = (DeepgramSpeechFullApiSchemaV1SpeakPostParametersBitRate0 | number | number);

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer = (DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer0 | DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer1 | DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer2 | DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer3 | DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer4);

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding = (DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding0 | DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding1 | DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding2 | DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding3 | DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding4 | DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding5 | DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding6);

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersModel = "aura-asteria-en" | "aura-luna-en" | "aura-stella-en" | "aura-athena-en" | "aura-hera-en" | "aura-orion-en" | "aura-arcas-en" | "aura-perseus-en" | "aura-angus-en" | "aura-orpheus-en" | "aura-helios-en" | "aura-zeus-en" | "aura-2-amalthea-en" | "aura-2-andromeda-en" | "aura-2-apollo-en" | "aura-2-arcas-en" | "aura-2-aries-en" | "aura-2-asteria-en" | "aura-2-athena-en" | "aura-2-atlas-en" | "aura-2-aurora-en" | "aura-2-callista-en" | "aura-2-cordelia-en" | "aura-2-cora-en" | "aura-2-delia-en" | "aura-2-draco-en" | "aura-2-electra-en" | "aura-2-harmonia-en" | "aura-2-helena-en" | "aura-2-hera-en" | "aura-2-hermes-en" | "aura-2-hyperion-en" | "aura-2-iris-en" | "aura-2-janus-en" | "aura-2-juno-en" | "aura-2-jupiter-en" | "aura-2-luna-en" | "aura-2-mars-en" | "aura-2-minerva-en" | "aura-2-neptune-en" | "aura-2-odysseus-en" | "aura-2-ophelia-en" | "aura-2-orion-en" | "aura-2-orpheus-en" | "aura-2-pandora-en" | "aura-2-phoebe-en" | "aura-2-pluto-en" | "aura-2-saturn-en" | "aura-2-selene-en" | "aura-2-thalia-en" | "aura-2-theia-en" | "aura-2-vesta-en" | "aura-2-zeus-en" | "aura-2-sirio-es" | "aura-2-nestor-es" | "aura-2-carina-es" | "aura-2-celeste-es" | "aura-2-alvaro-es" | "aura-2-diana-es" | "aura-2-aquila-es" | "aura-2-selena-es" | "aura-2-estrella-es" | "aura-2-javier-es";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate = (DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate0 | DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate1 | DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate2 | DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate3 | DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate4);

export type DeepgramSpeechFullApiSchemaSpeakV1Request = {
  text: string;
};

export type DeepgramSpeechFullApiSchemaSpeakV1AudioGenerateResponse200 = {};

export type DeepgramSpeechFullApiSchemaAgentConfigurationV1 = {
  agent_id: string;
  config: DeepgramSpeechFullApiSchemaAgentConfigurationV1Config;
  metadata?: {
  readonly [key: string]: string | undefined;
};
  created_at?: string;
  updated_at?: string;
};

export type DeepgramSpeechFullApiSchemaGetProjectBalanceV1Response = {
  balance_id?: string;
  amount?: number;
  units?: string;
  purchase_order_id?: string;
};

export type DeepgramSpeechFullApiSchemaGetProjectV1Response = {
  project_id?: string;
  mip_opt_out?: boolean;
  name?: string;
};

export type DeepgramSpeechFullApiSchemaGetModelV1Response = (DeepgramSpeechFullApiSchemaGetModelV1Response0 | DeepgramSpeechFullApiSchemaGetModelV1Response1);

export type DeepgramSpeechFullApiSchemaGetProjectKeyV1Response = {
  item?: DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItem;
};

export type DeepgramSpeechFullApiSchemaGetProjectRequestV1Response = {
  request?: DeepgramSpeechFullApiSchemaProjectRequestResponse;
};

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersDeployment = "hosted" | "beta" | "self-hosted";

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersEndpoint = "listen" | "read" | "speak" | "agent";

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersMethod = "sync" | "async" | "streaming";

export type DeepgramSpeechFullApiSchemaUsageV1Response = {
  start?: string;
  end?: string;
  resolution?: DeepgramSpeechFullApiSchemaUsageV1ResponseResolution;
};

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersGrouping = "accessor" | "endpoint" | "feature_set" | "models" | "method" | "tags" | "deployment";

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersDeployment = "hosted" | "beta" | "self-hosted";

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersEndpoint = "listen" | "read" | "speak" | "agent";

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersMethod = "sync" | "async" | "streaming";

export type DeepgramSpeechFullApiSchemaUsageBreakdownV1Response = {
  start: string;
  end: string;
  resolution: DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResolution;
  results: ReadonlyArray<DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResultsItems>;
};

export type DeepgramSpeechFullApiSchemaGrantV1Request = {
  ttl_seconds?: number;
};

export type DeepgramSpeechFullApiSchemaGrantV1Response = {
  access_token: string;
  expires_in?: number;
};

export type DeepgramSpeechFullApiSchemaLeaveProjectV1Response = {
  message?: string;
};

export type DeepgramSpeechFullApiSchemaAgentThinkModelsV1Response = {
  models: ReadonlyArray<DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems>;
};

export type DeepgramSpeechFullApiSchemaListProjectInvitesV1Response = {
  invites?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectInvitesV1ResponseInvitesItems>;
};

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersDeployment = "hosted" | "beta" | "self-hosted";

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersEndpoint = "listen" | "read" | "speak" | "agent";

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersMethod = "sync" | "async" | "streaming";

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersStatus = "succeeded" | "failed";

export type DeepgramSpeechFullApiSchemaListProjectRequestsV1Response = {
  page?: number;
  limit?: number;
  requests?: ReadonlyArray<DeepgramSpeechFullApiSchemaProjectRequestResponse>;
};

export type DeepgramSpeechFullApiSchemaUsageFieldsV1Response = {
  tags?: ReadonlyArray<string>;
  models?: ReadonlyArray<DeepgramSpeechFullApiSchemaUsageFieldsV1ResponseModelsItems>;
  processing_methods?: ReadonlyArray<string>;
  features?: ReadonlyArray<string>;
};

export type DeepgramSpeechFullApiSchemaListProjectBalancesV1Response = {
  balances?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectBalancesV1ResponseBalancesItems>;
};

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdBillingBreakdownGetParametersDeployment = "hosted" | "beta" | "self-hosted";

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems = "accessor" | "deployment" | "line_item" | "tags";

export type DeepgramSpeechFullApiSchemaBillingBreakdownV1Response = {
  start: string;
  end: string;
  resolution: DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResolution;
  results: ReadonlyArray<DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResultsItems>;
};

export type DeepgramSpeechFullApiSchemaListBillingFieldsV1Response = {
  accessors?: ReadonlyArray<string>;
  deployments?: ReadonlyArray<DeepgramSpeechFullApiSchemaListBillingFieldsV1ResponseDeploymentsItems>;
  tags?: ReadonlyArray<string>;
  line_items?: {
  readonly [key: string]: string | undefined;
};
};

export type DeepgramSpeechFullApiSchemaListProjectPurchasesV1Response = {
  orders?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectPurchasesV1ResponseOrdersItems>;
};

export type DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1Response = {
  distribution_credentials?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems>;
};

export type DeepgramSpeechFullApiSchemaListAgentConfigurationsV1Response = {
  agents?: ReadonlyArray<DeepgramSpeechFullApiSchemaAgentConfigurationV1>;
};

export type DeepgramSpeechFullApiSchemaListAgentVariablesV1Response = {
  variables?: ReadonlyArray<DeepgramSpeechFullApiSchemaAgentVariableV1>;
};

export type DeepgramSpeechFullApiSchemaListProjectsV1Response = {
  projects?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectsV1ResponseProjectsItems>;
};

export type DeepgramSpeechFullApiSchemaListModelsV1Response = {
  stt?: ReadonlyArray<DeepgramSpeechFullApiSchemaListModelsV1ResponseSttModels>;
  tts?: ReadonlyArray<DeepgramSpeechFullApiSchemaListModelsV1ResponseTtsModels>;
};

export type DeepgramSpeechFullApiSchemaV1ProjectsProjectIdKeysGetParametersStatus = "active" | "expired";

export type DeepgramSpeechFullApiSchemaListProjectKeysV1Response = {
  api_keys?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItems>;
};

export type DeepgramSpeechFullApiSchemaListProjectMembersV1Response = {
  members?: ReadonlyArray<DeepgramSpeechFullApiSchemaListProjectMembersV1ResponseMembersItems>;
};

export type DeepgramSpeechFullApiSchemaListProjectMemberScopesV1Response = {
  scopes?: ReadonlyArray<string>;
};

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersCallbackMethod = "POST" | "PUT";

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersExtra = (string | ReadonlyArray<string>);

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersSummarize = (DeepgramSpeechFullApiSchemaV1ListenPostParametersSummarize0 | boolean);

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersTag = (string | ReadonlyArray<string>);

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomTopic = (string | ReadonlyArray<string>);

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomTopicMode = "extended" | "strict";

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomIntent = (string | ReadonlyArray<string>);

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomIntentMode = "extended" | "strict";

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersDetectLanguage = (boolean | ReadonlyArray<string>);

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersDiarizeModel = "latest" | "v1" | "v2";

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersEncoding = "linear16" | "flac" | "mulaw" | "amr-nb" | "amr-wb" | "opus" | "speex" | "g729";

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersKeywords = (string | ReadonlyArray<string>);

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersModel = (DeepgramSpeechFullApiSchemaV1ListenPostParametersModel0 | string);

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersRedact = (string | DeepgramSpeechFullApiSchemaV1ListenPostParametersRedact1);

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersReplace = (string | ReadonlyArray<string>);

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersSearch = (string | ReadonlyArray<string>);

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersVersion = (DeepgramSpeechFullApiSchemaV1ListenPostParametersVersion0 | string);

export type DeepgramSpeechFullApiSchemaListenV1RequestUrl = {
  url: string;
};

export type DeepgramSpeechFullApiSchemaListenV1MediaTranscribeResponse200 = (DeepgramSpeechFullApiSchemaListenV1Response | DeepgramSpeechFullApiSchemaListenV1AcceptedResponse);

export type DeepgramSpeechFullApiSchemaUpdateAgentMetadataV1Request = {
  metadata: {
  readonly [key: string]: string | undefined;
};
};

export type DeepgramSpeechFullApiSchemaUpdateAgentVariableV1Request = {
  value: DeepgramSpeechFullApiSchemaJsonValue;
};

export type DeepgramSpeechFullApiSchemaUpdateProjectV1Request = {
  name?: string;
};

export type DeepgramSpeechFullApiSchemaUpdateProjectV1Response = {
  message?: string;
};

export type DeepgramSpeechFullApiSchemaUpdateProjectMemberScopesV1Request = {
  scope: string;
};

export type DeepgramSpeechFullApiSchemaUpdateProjectMemberScopesV1Response = {
  message?: string;
};

export type DeepgramSpeechFullApiSchemaV1ReadPostParametersSummarize0 = "v2";

export type DeepgramSpeechFullApiSchemaReadV1RequestUrl = {
  url: string;
};

export type DeepgramSpeechFullApiSchemaReadV1RequestText = {
  text: string;
};

export type DeepgramSpeechFullApiSchemaReadV1ResponseMetadata = {
  metadata?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadata;
};

export type DeepgramSpeechFullApiSchemaReadV1ResponseResults = {
  summary?: DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummary;
  topics?: DeepgramSpeechFullApiSchemaSharedTopics;
  intents?: DeepgramSpeechFullApiSchemaSharedIntents;
  sentiments?: DeepgramSpeechFullApiSchemaSharedSentiments;
};

export type DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1ResponseConfig = {};

export type DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1ResponseMember = {
  member_id: string;
  email: string;
};

export type DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1ResponseDistributionCredentials = {
  distribution_credentials_id: string;
  provider: string;
  comment?: string;
  scopes: ReadonlyArray<string>;
  created: string;
};

export type DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1ResponseMember = {
  member_id: string;
  email: string;
};

export type DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1ResponseDistributionCredentials = {
  distribution_credentials_id: string;
  provider: string;
  comment?: string;
  scopes: ReadonlyArray<string>;
  created: string;
};

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersBitRate0 = "32000" | "48000";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer0 = "none";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer1 = "wav";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer2 = "wav";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer3 = "wav";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer4 = "ogg";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding0 = "linear16";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding1 = "flac";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding2 = "mulaw";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding3 = "alaw";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding4 = "mp3";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding5 = "opus";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding6 = "aac";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate0 = "8000" | "16000" | "24000" | "32000" | "48000";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate1 = "8000" | "16000";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate2 = "8000" | "16000";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate3 = "22050";

export type DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate4 = "48000";

export type DeepgramSpeechFullApiSchemaAgentConfigurationV1Config = {};

export type DeepgramSpeechFullApiSchemaGetModelV1Response0 = {
  name?: string;
  canonical_name?: string;
  architecture?: string;
  languages?: ReadonlyArray<string>;
  version?: string;
  uuid?: string;
  batch?: boolean;
  streaming?: boolean;
  formatted_output?: boolean;
};

export type DeepgramSpeechFullApiSchemaGetModelV1Response1 = {
  name?: string;
  canonical_name?: string;
  architecture?: string;
  languages?: ReadonlyArray<string>;
  version?: string;
  uuid?: string;
  metadata?: DeepgramSpeechFullApiSchemaGetModelV1ResponseOneOf1Metadata;
};

export type DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItem = {
  member?: DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItemMember;
};

export type DeepgramSpeechFullApiSchemaProjectRequestResponse = {
  request_id?: string;
  project_uuid?: string;
  created?: string;
  path?: string;
  api_key_id?: string;
  response?: DeepgramSpeechFullApiSchemaProjectRequestResponseResponse;
  code?: number;
  deployment?: string;
  callback?: string;
};

export type DeepgramSpeechFullApiSchemaUsageV1ResponseResolution = {
  units?: string;
  amount?: number;
};

export type DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResolution = {
  units: string;
  amount: number;
};

export type DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResultsItems = {
  hours: number;
  total_hours: number;
  agent_hours: number;
  tokens_in: number;
  tokens_out: number;
  tts_characters: number;
  requests: number;
  grouping: DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResultsItemsGrouping;
};

export type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems = (DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems0 | DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems1 | DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems2 | DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems3 | DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems4);

export type DeepgramSpeechFullApiSchemaListProjectInvitesV1ResponseInvitesItems = {
  email?: string;
  scope?: string;
};

export type DeepgramSpeechFullApiSchemaUsageFieldsV1ResponseModelsItems = {
  name?: string;
  language?: string;
  version?: string;
  model_id?: string;
};

export type DeepgramSpeechFullApiSchemaListProjectBalancesV1ResponseBalancesItems = {
  balance_id?: string;
  amount?: number;
  units?: string;
  purchase_order_id?: string;
};

export type DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResolution = {
  units: string;
  amount: number;
};

export type DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResultsItems = {
  dollars: number;
  grouping: DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResultsItemsGrouping;
};

export type DeepgramSpeechFullApiSchemaListBillingFieldsV1ResponseDeploymentsItems = "hosted" | "beta" | "self-hosted" | "dedicated";

export type DeepgramSpeechFullApiSchemaListProjectPurchasesV1ResponseOrdersItems = {
  order_id?: string;
  expiration?: string;
  created?: string;
  amount?: number;
  units?: string;
  order_type?: string;
};

export type DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems = {
  member: DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember;
  distribution_credentials: DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials;
};

export type DeepgramSpeechFullApiSchemaListProjectsV1ResponseProjectsItems = {
  project_id?: string;
  name?: string;
};

export type DeepgramSpeechFullApiSchemaListModelsV1ResponseSttModels = {
  name?: string;
  canonical_name?: string;
  architecture?: string;
  languages?: ReadonlyArray<string>;
  version?: string;
  uuid?: string;
  batch?: boolean;
  streaming?: boolean;
  formatted_output?: boolean;
};

export type DeepgramSpeechFullApiSchemaListModelsV1ResponseTtsModels = {
  name?: string;
  canonical_name?: string;
  architecture?: string;
  languages?: ReadonlyArray<string>;
  version?: string;
  uuid?: string;
  metadata?: DeepgramSpeechFullApiSchemaListModelsV1ResponseTtsModelsMetadata;
};

export type DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItems = {
  member?: DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItemsMember;
  api_key?: DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItemsApiKey;
};

export type DeepgramSpeechFullApiSchemaListProjectMembersV1ResponseMembersItems = {
  member_id?: string;
  scopes?: ReadonlyArray<string>;
  email?: string;
  first_name?: string;
  last_name?: string;
};

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersSummarize0 = "v2";

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersModel0 = "nova-3" | "nova-3-general" | "nova-3-medical" | "nova-2" | "nova-2-general" | "nova-2-meeting" | "nova-2-finance" | "nova-2-conversationalai" | "nova-2-voicemail" | "nova-2-video" | "nova-2-medical" | "nova-2-drivethru" | "nova-2-automotive" | "nova" | "nova-general" | "nova-phonecall" | "nova-medical" | "enhanced" | "enhanced-general" | "enhanced-meeting" | "enhanced-phonecall" | "enhanced-finance" | "base" | "meeting" | "phonecall" | "finance" | "conversationalai" | "voicemail" | "video";

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersRedact1 = ReadonlyArray<DeepgramSpeechFullApiSchemaV1ListenPostParametersRedactSchemaOneOf1Items>;

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersVersion0 = "latest";

export type DeepgramSpeechFullApiSchemaListenV1Response = {
  metadata: DeepgramSpeechFullApiSchemaListenV1ResponseMetadata;
  results: DeepgramSpeechFullApiSchemaListenV1ResponseResults;
};

export type DeepgramSpeechFullApiSchemaListenV1AcceptedResponse = {
  request_id: string;
};

export type DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadata = {
  request_id?: string;
  created?: string;
  language?: string;
  summary_info?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataSummaryInfo;
  sentiment_info?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataSentimentInfo;
  topics_info?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataTopicsInfo;
  intents_info?: DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataIntentsInfo;
};

export type DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummary = {
  results?: DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummaryResults;
};

export type DeepgramSpeechFullApiSchemaSharedTopics = {
  results?: DeepgramSpeechFullApiSchemaSharedTopicsResults;
};

export type DeepgramSpeechFullApiSchemaSharedIntents = {
  results?: DeepgramSpeechFullApiSchemaSharedIntentsResults;
};

export type DeepgramSpeechFullApiSchemaSharedSentiments = {
  segments?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedSentimentsSegmentsItems>;
  average?: DeepgramSpeechFullApiSchemaSharedSentimentsAverage;
};

export type DeepgramSpeechFullApiSchemaGetModelV1ResponseOneOf1Metadata = {
  accent?: string;
  age?: string;
  color?: string;
  image?: string;
  sample?: string;
  tags?: ReadonlyArray<string>;
  use_cases?: ReadonlyArray<string>;
};

export type DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItemMember = {
  member_id?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  api_key?: DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItemMemberApiKey;
};

export type DeepgramSpeechFullApiSchemaProjectRequestResponseResponse = {};

export type DeepgramSpeechFullApiSchemaUsageBreakdownV1ResponseResultsItemsGrouping = {
  start?: string;
  end?: string;
  accessor?: string | null;
  endpoint?: string | null;
  feature_set?: string | null;
  models?: ReadonlyArray<string>;
  method?: string | null;
  tags?: ReadonlyArray<string> | null;
  deployment?: string | null;
};

export type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems0 = {
  id: DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf0Id;
  name: string;
  provider: DeepgramSpeechFullApiSchemaJsonValue;
};

export type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems1 = {
  id: DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf1Id;
  name: string;
  provider: DeepgramSpeechFullApiSchemaJsonValue;
};

export type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems2 = {
  id: DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf2Id;
  name: string;
  provider: DeepgramSpeechFullApiSchemaJsonValue;
};

export type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems3 = {
  id: DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf3Id;
  name: string;
  provider: DeepgramSpeechFullApiSchemaJsonValue;
};

export type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItems4 = {
  id: string;
  name: string;
  provider: DeepgramSpeechFullApiSchemaJsonValue;
};

export type DeepgramSpeechFullApiSchemaBillingBreakdownV1ResponseResultsItemsGrouping = {
  start?: string;
  end?: string;
  accessor?: string | null;
  deployment?: string | null;
  line_item?: string | null;
  tags?: ReadonlyArray<string> | null;
};

export type DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember = {
  member_id: string;
  email: string;
};

export type DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials = {
  distribution_credentials_id: string;
  provider: string;
  comment?: string;
  scopes: ReadonlyArray<string>;
  created: string;
};

export type DeepgramSpeechFullApiSchemaListModelsV1ResponseTtsModelsMetadata = {
  accent?: string;
  age?: string;
  color?: string;
  image?: string;
  sample?: string;
  tags?: ReadonlyArray<string>;
  use_cases?: ReadonlyArray<string>;
};

export type DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItemsMember = {
  member_id?: string;
  email?: string;
};

export type DeepgramSpeechFullApiSchemaListProjectKeysV1ResponseApiKeysItemsApiKey = {
  api_key_id?: string;
  comment?: string;
  scopes?: ReadonlyArray<string>;
  created?: string;
};

export type DeepgramSpeechFullApiSchemaV1ListenPostParametersRedactSchemaOneOf1Items = "pci" | "pii" | "numbers";

export type DeepgramSpeechFullApiSchemaListenV1ResponseMetadata = {
  transaction_key?: string;
  request_id: string;
  sha256: string;
  created: string;
  duration: number;
  channels: number;
  models: ReadonlyArray<string>;
  model_info: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataModelInfo;
  summary_info?: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataSummaryInfo;
  sentiment_info?: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataSentimentInfo;
  topics_info?: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataTopicsInfo;
  intents_info?: DeepgramSpeechFullApiSchemaListenV1ResponseMetadataIntentsInfo;
  tags?: ReadonlyArray<string>;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResults = {
  channels: DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannels;
  utterances?: DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterances;
  summary?: DeepgramSpeechFullApiSchemaListenV1ResponseResultsSummary;
  topics?: DeepgramSpeechFullApiSchemaSharedTopics;
  intents?: DeepgramSpeechFullApiSchemaSharedIntents;
  sentiments?: DeepgramSpeechFullApiSchemaSharedSentiments;
};

export type DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataSummaryInfo = {
  model_uuid?: string;
  input_tokens?: number;
  output_tokens?: number;
};

export type DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataSentimentInfo = {
  model_uuid?: string;
  input_tokens?: number;
  output_tokens?: number;
};

export type DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataTopicsInfo = {
  model_uuid?: string;
  input_tokens?: number;
  output_tokens?: number;
};

export type DeepgramSpeechFullApiSchemaReadV1ResponseMetadataMetadataIntentsInfo = {
  model_uuid?: string;
  input_tokens?: number;
  output_tokens?: number;
};

export type DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummaryResults = {
  summary?: DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummaryResultsSummary;
};

export type DeepgramSpeechFullApiSchemaSharedTopicsResults = {
  topics?: DeepgramSpeechFullApiSchemaSharedTopicsResultsTopics;
};

export type DeepgramSpeechFullApiSchemaSharedIntentsResults = {
  intents?: DeepgramSpeechFullApiSchemaSharedIntentsResultsIntents;
};

export type DeepgramSpeechFullApiSchemaSharedSentimentsSegmentsItems = {
  text?: string;
  start_word?: number;
  end_word?: number;
  sentiment?: string;
  sentiment_score?: number;
};

export type DeepgramSpeechFullApiSchemaSharedSentimentsAverage = {
  sentiment?: string;
  sentiment_score?: number;
};

export type DeepgramSpeechFullApiSchemaGetProjectKeyV1ResponseItemMemberApiKey = {
  api_key_id?: string;
  comment?: string;
  scopes?: ReadonlyArray<string>;
  tags?: ReadonlyArray<string>;
  expiration_date?: string;
  created?: string;
};

export type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf0Id = "gpt-5" | "gpt-5-mini" | "gpt-5-nano" | "gpt-4.1" | "gpt-4.1-mini" | "gpt-4.1-nano" | "gpt-4o" | "gpt-4o-mini";

export type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf1Id = "claude-3-5-haiku-latest" | "claude-sonnet-4-20250514";

export type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf2Id = "gemini-2.5-flash" | "gemini-2.0-flash" | "gemini-2.0-flash-lite";

export type DeepgramSpeechFullApiSchemaAgentThinkModelsV1ResponseModelsItemsOneOf3Id = "openai/gpt-oss-20b";

export type DeepgramSpeechFullApiSchemaListenV1ResponseMetadataModelInfo = {};

export type DeepgramSpeechFullApiSchemaListenV1ResponseMetadataSummaryInfo = {
  model_uuid?: string;
  input_tokens?: number;
  output_tokens?: number;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseMetadataSentimentInfo = {
  model_uuid?: string;
  input_tokens?: number;
  output_tokens?: number;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseMetadataTopicsInfo = {
  model_uuid?: string;
  input_tokens?: number;
  output_tokens?: number;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseMetadataIntentsInfo = {
  model_uuid?: string;
  input_tokens?: number;
  output_tokens?: number;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannels = ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItems>;

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterances = ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterancesItems>;

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsSummary = {
  result?: string;
  short?: string;
};

export type DeepgramSpeechFullApiSchemaReadV1ResponseResultsSummaryResultsSummary = {
  text?: string;
};

export type DeepgramSpeechFullApiSchemaSharedTopicsResultsTopics = {
  segments?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedTopicsResultsTopicsSegmentsItems>;
};

export type DeepgramSpeechFullApiSchemaSharedIntentsResultsIntents = {
  segments?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedIntentsResultsIntentsSegmentsItems>;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItems = {
  search?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsSearchItems>;
  alternatives?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItems>;
  detected_language?: string;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterancesItems = {
  start?: number;
  end?: number;
  confidence?: number;
  channel?: number;
  transcript?: string;
  words?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterancesItemsWordsItems>;
  speaker?: number;
  id?: string;
};

export type DeepgramSpeechFullApiSchemaSharedTopicsResultsTopicsSegmentsItems = {
  text?: string;
  start_word?: number;
  end_word?: number;
  topics?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedTopicsResultsTopicsSegmentsItemsTopicsItems>;
};

export type DeepgramSpeechFullApiSchemaSharedIntentsResultsIntentsSegmentsItems = {
  text?: string;
  start_word?: number;
  end_word?: number;
  intents?: ReadonlyArray<DeepgramSpeechFullApiSchemaSharedIntentsResultsIntentsSegmentsItemsIntentsItems>;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsSearchItems = {
  query?: string;
  hits?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsSearchItemsHitsItems>;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItems = {
  transcript?: string;
  confidence?: number;
  words?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems>;
  paragraphs?: DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs;
  entities?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems>;
  summaries?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems>;
  topics?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems>;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsUtterancesItemsWordsItems = {
  word?: string;
  start?: number;
  end?: number;
  confidence?: number;
  speaker?: number;
  speaker_confidence?: number;
  punctuated_word?: string;
};

export type DeepgramSpeechFullApiSchemaSharedTopicsResultsTopicsSegmentsItemsTopicsItems = {
  topic?: string;
  confidence_score?: number;
};

export type DeepgramSpeechFullApiSchemaSharedIntentsResultsIntentsSegmentsItemsIntentsItems = {
  intent?: string;
  confidence_score?: number;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsSearchItemsHitsItems = {
  confidence?: number;
  start?: number;
  end?: number;
  snippet?: string;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems = {
  word?: string;
  start?: number;
  end?: number;
  confidence?: number;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs = {
  transcript?: string;
  paragraphs?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems>;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems = {
  label?: string;
  value?: string;
  raw_value?: string;
  confidence?: number;
  start_word?: number;
  end_word?: number;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems = {
  summary?: string;
  start_word?: number;
  end_word?: number;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems = {
  text?: string;
  start_word?: number;
  end_word?: number;
  topics?: ReadonlyArray<string>;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems = {
  sentences?: ReadonlyArray<DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems>;
  speaker?: number;
  num_words?: number;
  start?: number;
  end?: number;
};

export type DeepgramSpeechFullApiSchemaListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems = {
  text?: string;
  start?: number;
  end?: number;
};

export interface DeepgramSpeechFullApiOperationQueryMap {
  "POST /v1/read": {
  callback?: string;
  callback_method?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCallbackMethod;
  sentiment?: boolean;
  summarize?: DeepgramSpeechFullApiSchemaV1ReadPostParametersSummarize;
  tag?: DeepgramSpeechFullApiSchemaV1ReadPostParametersTag;
  topics?: boolean;
  custom_topic?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomTopic;
  custom_topic_mode?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomTopicMode;
  intents?: boolean;
  custom_intent?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomIntent;
  custom_intent_mode?: DeepgramSpeechFullApiSchemaV1ReadPostParametersCustomIntentMode;
  language?: string;
};
  "POST /v1/projects/{project_id}/agents": {};
  "POST /v1/projects/{project_id}/agent-variables": {};
  "POST /v1/projects/{project_id}/keys": {};
  "POST /v1/projects/{project_id}/invites": {};
  "POST /v1/projects/{project_id}/self-hosted/distribution/credentials": {
  scopes?: ReadonlyArray<DeepgramSpeechFullApiSchemaV1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems>;
  provider?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider;
};
  "DELETE /v1/projects/{project_id}/agents/{agent_id}": {};
  "DELETE /v1/projects/{project_id}/agent-variables/{variable_id}": {};
  "DELETE /v1/projects/{project_id}": {};
  "DELETE /v1/projects/{project_id}/keys/{key_id}": {};
  "DELETE /v1/projects/{project_id}/members/{member_id}": {};
  "DELETE /v1/projects/{project_id}/invites/{email}": {};
  "DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}": {};
  "POST /v1/speak": {
  callback?: string;
  callback_method?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersCallbackMethod;
  mip_opt_out?: boolean;
  tag?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersTag;
  bit_rate?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersBitRate;
  container?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersContainer;
  encoding?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersEncoding;
  model?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersModel;
  sample_rate?: DeepgramSpeechFullApiSchemaV1SpeakPostParametersSampleRate;
  speed?: number;
};
  "GET /v1/projects/{project_id}/agents/{agent_id}": {};
  "GET /v1/projects/{project_id}/balances/{balance_id}": {};
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}": {};
  "GET /v1/projects/{project_id}/agent-variables/{variable_id}": {};
  "GET /v1/projects/{project_id}": {
  limit?: number;
  page?: number;
};
  "GET /v1/projects/{project_id}/models/{model_id}": {};
  "GET /v1/models/{model_id}": {};
  "GET /v1/projects/{project_id}/keys/{key_id}": {};
  "GET /v1/projects/{project_id}/requests/{request_id}": {};
  "GET /v1/projects/{project_id}/usage": {
  start?: string;
  end?: string;
  accessor?: string;
  alternatives?: boolean;
  callback_method?: boolean;
  callback?: boolean;
  channels?: boolean;
  custom_intent_mode?: boolean;
  custom_intent?: boolean;
  custom_topic_mode?: boolean;
  custom_topic?: boolean;
  deployment?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageGetParametersDeployment;
  detect_entities?: boolean;
  detect_language?: boolean;
  diarize?: boolean;
  dictation?: boolean;
  encoding?: boolean;
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
  summarize?: boolean;
  tag?: string;
  topics?: boolean;
  utt_split?: boolean;
  utterances?: boolean;
  version?: boolean;
};
  "GET /v1/projects/{project_id}/usage/breakdown": {
  start?: string;
  end?: string;
  grouping?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersGrouping;
  accessor?: string;
  alternatives?: boolean;
  callback_method?: boolean;
  callback?: boolean;
  channels?: boolean;
  custom_intent_mode?: boolean;
  custom_intent?: boolean;
  custom_topic_mode?: boolean;
  custom_topic?: boolean;
  deployment?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersDeployment;
  detect_entities?: boolean;
  detect_language?: boolean;
  diarize?: boolean;
  dictation?: boolean;
  encoding?: boolean;
  endpoint?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdUsageBreakdownGetParametersEndpoint;
  extra?: boolean;
  filler_words?: boolean;
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
  summarize?: boolean;
  tag?: string;
  topics?: boolean;
  utt_split?: boolean;
  utterances?: boolean;
  version?: boolean;
};
  "POST /v1/auth/grant": {};
  "DELETE /v1/projects/{project_id}/leave": {};
  "GET /v1/agent/settings/think/models": {};
  "GET /v1/projects/{project_id}/invites": {};
  "GET /v1/projects/{project_id}/requests": {
  start?: string;
  end?: string;
  limit?: number;
  page?: number;
  accessor?: string;
  request_id?: string;
  deployment?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersDeployment;
  endpoint?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersEndpoint;
  method?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersMethod;
  status?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdRequestsGetParametersStatus;
};
  "GET /v1/projects/{project_id}/usage/fields": {
  start?: string;
  end?: string;
};
  "GET /v1/projects/{project_id}/balances": {};
  "GET /v1/projects/{project_id}/billing/breakdown": {
  start?: string;
  end?: string;
  accessor?: string;
  deployment?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdBillingBreakdownGetParametersDeployment;
  tag?: string;
  line_item?: string;
  grouping?: ReadonlyArray<DeepgramSpeechFullApiSchemaV1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems>;
};
  "GET /v1/projects/{project_id}/billing/fields": {
  start?: string;
  end?: string;
};
  "GET /v1/projects/{project_id}/purchases": {
  limit?: number;
};
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials": {};
  "GET /v1/projects/{project_id}/agents": {};
  "GET /v1/projects/{project_id}/agent-variables": {};
  "GET /v1/projects": {};
  "GET /v1/projects/{project_id}/models": {
  include_outdated?: boolean;
};
  "GET /v1/models": {
  include_outdated?: boolean;
};
  "GET /v1/projects/{project_id}/keys": {
  status?: DeepgramSpeechFullApiSchemaV1ProjectsProjectIdKeysGetParametersStatus;
};
  "GET /v1/projects/{project_id}/members": {};
  "GET /v1/projects/{project_id}/members/{member_id}/scopes": {};
  "POST /v1/listen": {
  callback?: string;
  callback_method?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCallbackMethod;
  extra?: DeepgramSpeechFullApiSchemaV1ListenPostParametersExtra;
  sentiment?: boolean;
  summarize?: DeepgramSpeechFullApiSchemaV1ListenPostParametersSummarize;
  tag?: DeepgramSpeechFullApiSchemaV1ListenPostParametersTag;
  topics?: boolean;
  custom_topic?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomTopic;
  custom_topic_mode?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomTopicMode;
  intents?: boolean;
  custom_intent?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomIntent;
  custom_intent_mode?: DeepgramSpeechFullApiSchemaV1ListenPostParametersCustomIntentMode;
  detect_entities?: boolean;
  detect_language?: DeepgramSpeechFullApiSchemaV1ListenPostParametersDetectLanguage;
  diarize?: boolean;
  diarize_model?: DeepgramSpeechFullApiSchemaV1ListenPostParametersDiarizeModel;
  dictation?: boolean;
  encoding?: DeepgramSpeechFullApiSchemaV1ListenPostParametersEncoding;
  filler_words?: boolean;
  keyterm?: ReadonlyArray<string>;
  keywords?: DeepgramSpeechFullApiSchemaV1ListenPostParametersKeywords;
  language?: string;
  measurements?: boolean;
  model?: DeepgramSpeechFullApiSchemaV1ListenPostParametersModel;
  multichannel?: boolean;
  numerals?: boolean;
  paragraphs?: boolean;
  profanity_filter?: boolean;
  punctuate?: boolean;
  redact?: DeepgramSpeechFullApiSchemaV1ListenPostParametersRedact;
  replace?: DeepgramSpeechFullApiSchemaV1ListenPostParametersReplace;
  search?: DeepgramSpeechFullApiSchemaV1ListenPostParametersSearch;
  smart_format?: boolean;
  utterances?: boolean;
  utt_split?: number;
  version?: DeepgramSpeechFullApiSchemaV1ListenPostParametersVersion;
  mip_opt_out?: boolean;
};
  "PUT /v1/projects/{project_id}/agents/{agent_id}": {};
  "PATCH /v1/projects/{project_id}/agent-variables/{variable_id}": {};
  "PATCH /v1/projects/{project_id}": {};
  "PUT /v1/projects/{project_id}/members/{member_id}/scopes": {};
}

export interface DeepgramSpeechFullApiOperationQueryRequiredMap {
  "POST /v1/read": false;
  "POST /v1/projects/{project_id}/agents": false;
  "POST /v1/projects/{project_id}/agent-variables": false;
  "POST /v1/projects/{project_id}/keys": false;
  "POST /v1/projects/{project_id}/invites": false;
  "POST /v1/projects/{project_id}/self-hosted/distribution/credentials": false;
  "DELETE /v1/projects/{project_id}/agents/{agent_id}": false;
  "DELETE /v1/projects/{project_id}/agent-variables/{variable_id}": false;
  "DELETE /v1/projects/{project_id}": false;
  "DELETE /v1/projects/{project_id}/keys/{key_id}": false;
  "DELETE /v1/projects/{project_id}/members/{member_id}": false;
  "DELETE /v1/projects/{project_id}/invites/{email}": false;
  "DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}": false;
  "POST /v1/speak": false;
  "GET /v1/projects/{project_id}/agents/{agent_id}": false;
  "GET /v1/projects/{project_id}/balances/{balance_id}": false;
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}": false;
  "GET /v1/projects/{project_id}/agent-variables/{variable_id}": false;
  "GET /v1/projects/{project_id}": false;
  "GET /v1/projects/{project_id}/models/{model_id}": false;
  "GET /v1/models/{model_id}": false;
  "GET /v1/projects/{project_id}/keys/{key_id}": false;
  "GET /v1/projects/{project_id}/requests/{request_id}": false;
  "GET /v1/projects/{project_id}/usage": false;
  "GET /v1/projects/{project_id}/usage/breakdown": false;
  "POST /v1/auth/grant": false;
  "DELETE /v1/projects/{project_id}/leave": false;
  "GET /v1/agent/settings/think/models": false;
  "GET /v1/projects/{project_id}/invites": false;
  "GET /v1/projects/{project_id}/requests": false;
  "GET /v1/projects/{project_id}/usage/fields": false;
  "GET /v1/projects/{project_id}/balances": false;
  "GET /v1/projects/{project_id}/billing/breakdown": false;
  "GET /v1/projects/{project_id}/billing/fields": false;
  "GET /v1/projects/{project_id}/purchases": false;
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials": false;
  "GET /v1/projects/{project_id}/agents": false;
  "GET /v1/projects/{project_id}/agent-variables": false;
  "GET /v1/projects": false;
  "GET /v1/projects/{project_id}/models": false;
  "GET /v1/models": false;
  "GET /v1/projects/{project_id}/keys": false;
  "GET /v1/projects/{project_id}/members": false;
  "GET /v1/projects/{project_id}/members/{member_id}/scopes": false;
  "POST /v1/listen": false;
  "PUT /v1/projects/{project_id}/agents/{agent_id}": false;
  "PATCH /v1/projects/{project_id}/agent-variables/{variable_id}": false;
  "PATCH /v1/projects/{project_id}": false;
  "PUT /v1/projects/{project_id}/members/{member_id}/scopes": false;
}

export interface DeepgramSpeechFullApiOperationRequestBodyMap {
  "POST /v1/read": DeepgramSpeechFullApiSchemaReadV1Request;
  "POST /v1/projects/{project_id}/agents": DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1Request;
  "POST /v1/projects/{project_id}/agent-variables": DeepgramSpeechFullApiSchemaCreateAgentVariableV1Request;
  "POST /v1/projects/{project_id}/keys": DeepgramSpeechFullApiSchemaCreateKeyV1Request;
  "POST /v1/projects/{project_id}/invites": DeepgramSpeechFullApiSchemaCreateProjectInviteV1Request;
  "POST /v1/projects/{project_id}/self-hosted/distribution/credentials": DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1Request;
  "DELETE /v1/projects/{project_id}/agents/{agent_id}": never;
  "DELETE /v1/projects/{project_id}/agent-variables/{variable_id}": never;
  "DELETE /v1/projects/{project_id}": never;
  "DELETE /v1/projects/{project_id}/keys/{key_id}": never;
  "DELETE /v1/projects/{project_id}/members/{member_id}": never;
  "DELETE /v1/projects/{project_id}/invites/{email}": never;
  "DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}": never;
  "POST /v1/speak": DeepgramSpeechFullApiSchemaSpeakV1Request;
  "GET /v1/projects/{project_id}/agents/{agent_id}": never;
  "GET /v1/projects/{project_id}/balances/{balance_id}": never;
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}": never;
  "GET /v1/projects/{project_id}/agent-variables/{variable_id}": never;
  "GET /v1/projects/{project_id}": never;
  "GET /v1/projects/{project_id}/models/{model_id}": never;
  "GET /v1/models/{model_id}": never;
  "GET /v1/projects/{project_id}/keys/{key_id}": never;
  "GET /v1/projects/{project_id}/requests/{request_id}": never;
  "GET /v1/projects/{project_id}/usage": never;
  "GET /v1/projects/{project_id}/usage/breakdown": never;
  "POST /v1/auth/grant": DeepgramSpeechFullApiSchemaGrantV1Request;
  "DELETE /v1/projects/{project_id}/leave": never;
  "GET /v1/agent/settings/think/models": never;
  "GET /v1/projects/{project_id}/invites": never;
  "GET /v1/projects/{project_id}/requests": never;
  "GET /v1/projects/{project_id}/usage/fields": never;
  "GET /v1/projects/{project_id}/balances": never;
  "GET /v1/projects/{project_id}/billing/breakdown": never;
  "GET /v1/projects/{project_id}/billing/fields": never;
  "GET /v1/projects/{project_id}/purchases": never;
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials": never;
  "GET /v1/projects/{project_id}/agents": never;
  "GET /v1/projects/{project_id}/agent-variables": never;
  "GET /v1/projects": never;
  "GET /v1/projects/{project_id}/models": never;
  "GET /v1/models": never;
  "GET /v1/projects/{project_id}/keys": never;
  "GET /v1/projects/{project_id}/members": never;
  "GET /v1/projects/{project_id}/members/{member_id}/scopes": never;
  "POST /v1/listen": DeepgramSpeechFullApiSchemaListenV1RequestUrl;
  "PUT /v1/projects/{project_id}/agents/{agent_id}": DeepgramSpeechFullApiSchemaUpdateAgentMetadataV1Request;
  "PATCH /v1/projects/{project_id}/agent-variables/{variable_id}": DeepgramSpeechFullApiSchemaUpdateAgentVariableV1Request;
  "PATCH /v1/projects/{project_id}": DeepgramSpeechFullApiSchemaUpdateProjectV1Request;
  "PUT /v1/projects/{project_id}/members/{member_id}/scopes": DeepgramSpeechFullApiSchemaUpdateProjectMemberScopesV1Request;
}

export interface DeepgramSpeechFullApiOperationRequestBodyRequiredMap {
  "POST /v1/read": false;
  "POST /v1/projects/{project_id}/agents": false;
  "POST /v1/projects/{project_id}/agent-variables": false;
  "POST /v1/projects/{project_id}/keys": false;
  "POST /v1/projects/{project_id}/invites": false;
  "POST /v1/projects/{project_id}/self-hosted/distribution/credentials": false;
  "DELETE /v1/projects/{project_id}/agents/{agent_id}": false;
  "DELETE /v1/projects/{project_id}/agent-variables/{variable_id}": false;
  "DELETE /v1/projects/{project_id}": false;
  "DELETE /v1/projects/{project_id}/keys/{key_id}": false;
  "DELETE /v1/projects/{project_id}/members/{member_id}": false;
  "DELETE /v1/projects/{project_id}/invites/{email}": false;
  "DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}": false;
  "POST /v1/speak": false;
  "GET /v1/projects/{project_id}/agents/{agent_id}": false;
  "GET /v1/projects/{project_id}/balances/{balance_id}": false;
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}": false;
  "GET /v1/projects/{project_id}/agent-variables/{variable_id}": false;
  "GET /v1/projects/{project_id}": false;
  "GET /v1/projects/{project_id}/models/{model_id}": false;
  "GET /v1/models/{model_id}": false;
  "GET /v1/projects/{project_id}/keys/{key_id}": false;
  "GET /v1/projects/{project_id}/requests/{request_id}": false;
  "GET /v1/projects/{project_id}/usage": false;
  "GET /v1/projects/{project_id}/usage/breakdown": false;
  "POST /v1/auth/grant": false;
  "DELETE /v1/projects/{project_id}/leave": false;
  "GET /v1/agent/settings/think/models": false;
  "GET /v1/projects/{project_id}/invites": false;
  "GET /v1/projects/{project_id}/requests": false;
  "GET /v1/projects/{project_id}/usage/fields": false;
  "GET /v1/projects/{project_id}/balances": false;
  "GET /v1/projects/{project_id}/billing/breakdown": false;
  "GET /v1/projects/{project_id}/billing/fields": false;
  "GET /v1/projects/{project_id}/purchases": false;
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials": false;
  "GET /v1/projects/{project_id}/agents": false;
  "GET /v1/projects/{project_id}/agent-variables": false;
  "GET /v1/projects": false;
  "GET /v1/projects/{project_id}/models": false;
  "GET /v1/models": false;
  "GET /v1/projects/{project_id}/keys": false;
  "GET /v1/projects/{project_id}/members": false;
  "GET /v1/projects/{project_id}/members/{member_id}/scopes": false;
  "POST /v1/listen": false;
  "PUT /v1/projects/{project_id}/agents/{agent_id}": false;
  "PATCH /v1/projects/{project_id}/agent-variables/{variable_id}": false;
  "PATCH /v1/projects/{project_id}": false;
  "PUT /v1/projects/{project_id}/members/{member_id}/scopes": false;
}

export interface DeepgramSpeechFullApiOperationResponseMap {
  "POST /v1/read": DeepgramSpeechFullApiSchemaReadV1Response;
  "POST /v1/projects/{project_id}/agents": DeepgramSpeechFullApiSchemaCreateAgentConfigurationV1Response;
  "POST /v1/projects/{project_id}/agent-variables": DeepgramSpeechFullApiSchemaAgentVariableV1;
  "POST /v1/projects/{project_id}/keys": DeepgramSpeechFullApiSchemaCreateKeyV1Response;
  "POST /v1/projects/{project_id}/invites": DeepgramSpeechFullApiSchemaCreateProjectInviteV1Response;
  "POST /v1/projects/{project_id}/self-hosted/distribution/credentials": DeepgramSpeechFullApiSchemaCreateProjectDistributionCredentialsV1Response;
  "DELETE /v1/projects/{project_id}/agents/{agent_id}": DeepgramSpeechFullApiSchemaDeleteAgentConfigurationV1Response;
  "DELETE /v1/projects/{project_id}/agent-variables/{variable_id}": DeepgramSpeechFullApiSchemaDeleteAgentVariableV1Response;
  "DELETE /v1/projects/{project_id}": DeepgramSpeechFullApiSchemaDeleteProjectV1Response;
  "DELETE /v1/projects/{project_id}/keys/{key_id}": DeepgramSpeechFullApiSchemaDeleteProjectKeyV1Response;
  "DELETE /v1/projects/{project_id}/members/{member_id}": DeepgramSpeechFullApiSchemaDeleteProjectMemberV1Response;
  "DELETE /v1/projects/{project_id}/invites/{email}": DeepgramSpeechFullApiSchemaDeleteProjectInviteV1Response;
  "DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}": DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1Response;
  "POST /v1/speak": DeepgramSpeechFullApiSchemaSpeakV1AudioGenerateResponse200;
  "GET /v1/projects/{project_id}/agents/{agent_id}": DeepgramSpeechFullApiSchemaAgentConfigurationV1;
  "GET /v1/projects/{project_id}/balances/{balance_id}": DeepgramSpeechFullApiSchemaGetProjectBalanceV1Response;
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}": DeepgramSpeechFullApiSchemaGetProjectDistributionCredentialsV1Response;
  "GET /v1/projects/{project_id}/agent-variables/{variable_id}": DeepgramSpeechFullApiSchemaAgentVariableV1;
  "GET /v1/projects/{project_id}": DeepgramSpeechFullApiSchemaGetProjectV1Response;
  "GET /v1/projects/{project_id}/models/{model_id}": DeepgramSpeechFullApiSchemaGetModelV1Response;
  "GET /v1/models/{model_id}": DeepgramSpeechFullApiSchemaGetModelV1Response;
  "GET /v1/projects/{project_id}/keys/{key_id}": DeepgramSpeechFullApiSchemaGetProjectKeyV1Response;
  "GET /v1/projects/{project_id}/requests/{request_id}": DeepgramSpeechFullApiSchemaGetProjectRequestV1Response;
  "GET /v1/projects/{project_id}/usage": DeepgramSpeechFullApiSchemaUsageV1Response;
  "GET /v1/projects/{project_id}/usage/breakdown": DeepgramSpeechFullApiSchemaUsageBreakdownV1Response;
  "POST /v1/auth/grant": DeepgramSpeechFullApiSchemaGrantV1Response;
  "DELETE /v1/projects/{project_id}/leave": DeepgramSpeechFullApiSchemaLeaveProjectV1Response;
  "GET /v1/agent/settings/think/models": DeepgramSpeechFullApiSchemaAgentThinkModelsV1Response;
  "GET /v1/projects/{project_id}/invites": DeepgramSpeechFullApiSchemaListProjectInvitesV1Response;
  "GET /v1/projects/{project_id}/requests": DeepgramSpeechFullApiSchemaListProjectRequestsV1Response;
  "GET /v1/projects/{project_id}/usage/fields": DeepgramSpeechFullApiSchemaUsageFieldsV1Response;
  "GET /v1/projects/{project_id}/balances": DeepgramSpeechFullApiSchemaListProjectBalancesV1Response;
  "GET /v1/projects/{project_id}/billing/breakdown": DeepgramSpeechFullApiSchemaBillingBreakdownV1Response;
  "GET /v1/projects/{project_id}/billing/fields": DeepgramSpeechFullApiSchemaListBillingFieldsV1Response;
  "GET /v1/projects/{project_id}/purchases": DeepgramSpeechFullApiSchemaListProjectPurchasesV1Response;
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials": DeepgramSpeechFullApiSchemaListProjectDistributionCredentialsV1Response;
  "GET /v1/projects/{project_id}/agents": DeepgramSpeechFullApiSchemaListAgentConfigurationsV1Response;
  "GET /v1/projects/{project_id}/agent-variables": DeepgramSpeechFullApiSchemaListAgentVariablesV1Response;
  "GET /v1/projects": DeepgramSpeechFullApiSchemaListProjectsV1Response;
  "GET /v1/projects/{project_id}/models": DeepgramSpeechFullApiSchemaListModelsV1Response;
  "GET /v1/models": DeepgramSpeechFullApiSchemaListModelsV1Response;
  "GET /v1/projects/{project_id}/keys": DeepgramSpeechFullApiSchemaListProjectKeysV1Response;
  "GET /v1/projects/{project_id}/members": DeepgramSpeechFullApiSchemaListProjectMembersV1Response;
  "GET /v1/projects/{project_id}/members/{member_id}/scopes": DeepgramSpeechFullApiSchemaListProjectMemberScopesV1Response;
  "POST /v1/listen": DeepgramSpeechFullApiSchemaListenV1MediaTranscribeResponse200;
  "PUT /v1/projects/{project_id}/agents/{agent_id}": DeepgramSpeechFullApiSchemaAgentConfigurationV1;
  "PATCH /v1/projects/{project_id}/agent-variables/{variable_id}": DeepgramSpeechFullApiSchemaAgentVariableV1;
  "PATCH /v1/projects/{project_id}": DeepgramSpeechFullApiSchemaUpdateProjectV1Response;
  "PUT /v1/projects/{project_id}/members/{member_id}/scopes": DeepgramSpeechFullApiSchemaUpdateProjectMemberScopesV1Response;
}
