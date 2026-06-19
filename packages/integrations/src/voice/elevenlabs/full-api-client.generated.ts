// Generated from the ElevenLabs OpenAPI spec (https://api.elevenlabs.io/openapi.json).
// Do not edit by hand; run scripts/generate-elevenlabs-full-api.mjs after checking upstream docs.

import type { ElevenLabsOperationRequestInput } from "./index.js";
import type {
  ElevenLabsFullApiOperationQueryMap,
  ElevenLabsFullApiOperationQueryRequiredMap,
  ElevenLabsFullApiOperationRequestBodyMap,
  ElevenLabsFullApiOperationRequestBodyRequiredMap,
  ElevenLabsFullApiOperationResponseMap,
} from "./full-api-schema-types.generated.js";
import {
  createElevenLabsFullApiAccessAllGeneratedClient,
  ElevenLabsFullApiAccessAllGeneratedFunctionNames,
  type ElevenLabsFullApiAccessAllGeneratedClient,
  type ElevenLabsFullApiAccessAllOperationPathParamMap,
  type ElevenLabsFullApiAccessAllOperationRequestMap,
} from "./full-api.generated/client/access-all-chunk.generated.js";
import {
  createElevenLabsFullApiAgentsInsightsGeneratedClient,
  ElevenLabsFullApiAgentsInsightsGeneratedFunctionNames,
  type ElevenLabsFullApiAgentsInsightsGeneratedClient,
  type ElevenLabsFullApiAgentsInsightsOperationPathParamMap,
  type ElevenLabsFullApiAgentsInsightsOperationRequestMap,
} from "./full-api.generated/client/agents-insights-chunk.generated.js";
import {
  createElevenLabsFullApiAgentsPlatform01GeneratedClient,
  ElevenLabsFullApiAgentsPlatform01GeneratedFunctionNames,
  type ElevenLabsFullApiAgentsPlatform01GeneratedClient,
  type ElevenLabsFullApiAgentsPlatform01OperationPathParamMap,
  type ElevenLabsFullApiAgentsPlatform01OperationRequestMap,
} from "./full-api.generated/client/agents-platform-01-chunk.generated.js";
import {
  createElevenLabsFullApiAgentsPlatform02GeneratedClient,
  ElevenLabsFullApiAgentsPlatform02GeneratedFunctionNames,
  type ElevenLabsFullApiAgentsPlatform02GeneratedClient,
  type ElevenLabsFullApiAgentsPlatform02OperationPathParamMap,
  type ElevenLabsFullApiAgentsPlatform02OperationRequestMap,
} from "./full-api.generated/client/agents-platform-02-chunk.generated.js";
import {
  createElevenLabsFullApiAgentsWorkspaceAnalyticsGeneratedClient,
  ElevenLabsFullApiAgentsWorkspaceAnalyticsGeneratedFunctionNames,
  type ElevenLabsFullApiAgentsWorkspaceAnalyticsGeneratedClient,
  type ElevenLabsFullApiAgentsWorkspaceAnalyticsOperationPathParamMap,
  type ElevenLabsFullApiAgentsWorkspaceAnalyticsOperationRequestMap,
} from "./full-api.generated/client/agents-workspace-analytics-chunk.generated.js";
import {
  createElevenLabsFullApiAudioIsolationGeneratedClient,
  ElevenLabsFullApiAudioIsolationGeneratedFunctionNames,
  type ElevenLabsFullApiAudioIsolationGeneratedClient,
  type ElevenLabsFullApiAudioIsolationOperationPathParamMap,
  type ElevenLabsFullApiAudioIsolationOperationRequestMap,
} from "./full-api.generated/client/audio-isolation-chunk.generated.js";
import {
  createElevenLabsFullApiAudioNativeGeneratedClient,
  ElevenLabsFullApiAudioNativeGeneratedFunctionNames,
  type ElevenLabsFullApiAudioNativeGeneratedClient,
  type ElevenLabsFullApiAudioNativeOperationPathParamMap,
  type ElevenLabsFullApiAudioNativeOperationRequestMap,
} from "./full-api.generated/client/audio-native-chunk.generated.js";
import {
  createElevenLabsFullApiConversationalAIGeneratedClient,
  ElevenLabsFullApiConversationalAIGeneratedFunctionNames,
  type ElevenLabsFullApiConversationalAIGeneratedClient,
  type ElevenLabsFullApiConversationalAIOperationPathParamMap,
  type ElevenLabsFullApiConversationalAIOperationRequestMap,
} from "./full-api.generated/client/conversational-ai-chunk.generated.js";
import {
  createElevenLabsFullApiDocsGeneratedClient,
  ElevenLabsFullApiDocsGeneratedFunctionNames,
  type ElevenLabsFullApiDocsGeneratedClient,
  type ElevenLabsFullApiDocsOperationPathParamMap,
  type ElevenLabsFullApiDocsOperationRequestMap,
} from "./full-api.generated/client/docs-chunk.generated.js";
import {
  createElevenLabsFullApiDubbingGeneratedClient,
  ElevenLabsFullApiDubbingGeneratedFunctionNames,
  type ElevenLabsFullApiDubbingGeneratedClient,
  type ElevenLabsFullApiDubbingOperationPathParamMap,
  type ElevenLabsFullApiDubbingOperationRequestMap,
} from "./full-api.generated/client/dubbing-chunk.generated.js";
import {
  createElevenLabsFullApiForcedAlignmentGeneratedClient,
  ElevenLabsFullApiForcedAlignmentGeneratedFunctionNames,
  type ElevenLabsFullApiForcedAlignmentGeneratedClient,
  type ElevenLabsFullApiForcedAlignmentOperationPathParamMap,
  type ElevenLabsFullApiForcedAlignmentOperationRequestMap,
} from "./full-api.generated/client/forced-alignment-chunk.generated.js";
import {
  createElevenLabsFullApiModelsGeneratedClient,
  ElevenLabsFullApiModelsGeneratedFunctionNames,
  type ElevenLabsFullApiModelsGeneratedClient,
  type ElevenLabsFullApiModelsOperationPathParamMap,
  type ElevenLabsFullApiModelsOperationRequestMap,
} from "./full-api.generated/client/models-chunk.generated.js";
import {
  createElevenLabsFullApiMusicGenerationGeneratedClient,
  ElevenLabsFullApiMusicGenerationGeneratedFunctionNames,
  type ElevenLabsFullApiMusicGenerationGeneratedClient,
  type ElevenLabsFullApiMusicGenerationOperationPathParamMap,
  type ElevenLabsFullApiMusicGenerationOperationRequestMap,
} from "./full-api.generated/client/music-generation-chunk.generated.js";
import {
  createElevenLabsFullApiProductionsGeneratedClient,
  ElevenLabsFullApiProductionsGeneratedFunctionNames,
  type ElevenLabsFullApiProductionsGeneratedClient,
  type ElevenLabsFullApiProductionsOperationPathParamMap,
  type ElevenLabsFullApiProductionsOperationRequestMap,
} from "./full-api.generated/client/productions-chunk.generated.js";
import {
  createElevenLabsFullApiPronunciationDictionaryGeneratedClient,
  ElevenLabsFullApiPronunciationDictionaryGeneratedFunctionNames,
  type ElevenLabsFullApiPronunciationDictionaryGeneratedClient,
  type ElevenLabsFullApiPronunciationDictionaryOperationPathParamMap,
  type ElevenLabsFullApiPronunciationDictionaryOperationRequestMap,
} from "./full-api.generated/client/pronunciation-dictionary-chunk.generated.js";
import {
  createElevenLabsFullApiPvcVoicesGeneratedClient,
  ElevenLabsFullApiPvcVoicesGeneratedFunctionNames,
  type ElevenLabsFullApiPvcVoicesGeneratedClient,
  type ElevenLabsFullApiPvcVoicesOperationPathParamMap,
  type ElevenLabsFullApiPvcVoicesOperationRequestMap,
} from "./full-api.generated/client/pvc-voices-chunk.generated.js";
import {
  createElevenLabsFullApiSamplesGeneratedClient,
  ElevenLabsFullApiSamplesGeneratedFunctionNames,
  type ElevenLabsFullApiSamplesGeneratedClient,
  type ElevenLabsFullApiSamplesOperationPathParamMap,
  type ElevenLabsFullApiSamplesOperationRequestMap,
} from "./full-api.generated/client/samples-chunk.generated.js";
import {
  createElevenLabsFullApiSingleUseTokenGeneratedClient,
  ElevenLabsFullApiSingleUseTokenGeneratedFunctionNames,
  type ElevenLabsFullApiSingleUseTokenGeneratedClient,
  type ElevenLabsFullApiSingleUseTokenOperationPathParamMap,
  type ElevenLabsFullApiSingleUseTokenOperationRequestMap,
} from "./full-api.generated/client/single-use-token-chunk.generated.js";
import {
  createElevenLabsFullApiSoundGenerationGeneratedClient,
  ElevenLabsFullApiSoundGenerationGeneratedFunctionNames,
  type ElevenLabsFullApiSoundGenerationGeneratedClient,
  type ElevenLabsFullApiSoundGenerationOperationPathParamMap,
  type ElevenLabsFullApiSoundGenerationOperationRequestMap,
} from "./full-api.generated/client/sound-generation-chunk.generated.js";
import {
  createElevenLabsFullApiSpeechEngineGeneratedClient,
  ElevenLabsFullApiSpeechEngineGeneratedFunctionNames,
  type ElevenLabsFullApiSpeechEngineGeneratedClient,
  type ElevenLabsFullApiSpeechEngineOperationPathParamMap,
  type ElevenLabsFullApiSpeechEngineOperationRequestMap,
} from "./full-api.generated/client/speech-engine-chunk.generated.js";
import {
  createElevenLabsFullApiSpeechHistoryGeneratedClient,
  ElevenLabsFullApiSpeechHistoryGeneratedFunctionNames,
  type ElevenLabsFullApiSpeechHistoryGeneratedClient,
  type ElevenLabsFullApiSpeechHistoryOperationPathParamMap,
  type ElevenLabsFullApiSpeechHistoryOperationRequestMap,
} from "./full-api.generated/client/speech-history-chunk.generated.js";
import {
  createElevenLabsFullApiSpeechToSpeechGeneratedClient,
  ElevenLabsFullApiSpeechToSpeechGeneratedFunctionNames,
  type ElevenLabsFullApiSpeechToSpeechGeneratedClient,
  type ElevenLabsFullApiSpeechToSpeechOperationPathParamMap,
  type ElevenLabsFullApiSpeechToSpeechOperationRequestMap,
} from "./full-api.generated/client/speech-to-speech-chunk.generated.js";
import {
  createElevenLabsFullApiSpeechToTextGeneratedClient,
  ElevenLabsFullApiSpeechToTextGeneratedFunctionNames,
  type ElevenLabsFullApiSpeechToTextGeneratedClient,
  type ElevenLabsFullApiSpeechToTextOperationPathParamMap,
  type ElevenLabsFullApiSpeechToTextOperationRequestMap,
} from "./full-api.generated/client/speech-to-text-chunk.generated.js";
import {
  createElevenLabsFullApiStudioGeneratedClient,
  ElevenLabsFullApiStudioGeneratedFunctionNames,
  type ElevenLabsFullApiStudioGeneratedClient,
  type ElevenLabsFullApiStudioOperationPathParamMap,
  type ElevenLabsFullApiStudioOperationRequestMap,
} from "./full-api.generated/client/studio-chunk.generated.js";
import {
  createElevenLabsFullApiTextToDialogueGeneratedClient,
  ElevenLabsFullApiTextToDialogueGeneratedFunctionNames,
  type ElevenLabsFullApiTextToDialogueGeneratedClient,
  type ElevenLabsFullApiTextToDialogueOperationPathParamMap,
  type ElevenLabsFullApiTextToDialogueOperationRequestMap,
} from "./full-api.generated/client/text-to-dialogue-chunk.generated.js";
import {
  createElevenLabsFullApiTextToSpeechGeneratedClient,
  ElevenLabsFullApiTextToSpeechGeneratedFunctionNames,
  type ElevenLabsFullApiTextToSpeechGeneratedClient,
  type ElevenLabsFullApiTextToSpeechOperationPathParamMap,
  type ElevenLabsFullApiTextToSpeechOperationRequestMap,
} from "./full-api.generated/client/text-to-speech-chunk.generated.js";
import {
  createElevenLabsFullApiTextToVoiceGeneratedClient,
  ElevenLabsFullApiTextToVoiceGeneratedFunctionNames,
  type ElevenLabsFullApiTextToVoiceGeneratedClient,
  type ElevenLabsFullApiTextToVoiceOperationPathParamMap,
  type ElevenLabsFullApiTextToVoiceOperationRequestMap,
} from "./full-api.generated/client/text-to-voice-chunk.generated.js";
import {
  createElevenLabsFullApiV1GeneratedClient,
  ElevenLabsFullApiV1GeneratedFunctionNames,
  type ElevenLabsFullApiV1GeneratedClient,
  type ElevenLabsFullApiV1OperationPathParamMap,
  type ElevenLabsFullApiV1OperationRequestMap,
} from "./full-api.generated/client/v1-chunk.generated.js";
import {
  createElevenLabsFullApiVideoToMusicGeneratedClient,
  ElevenLabsFullApiVideoToMusicGeneratedFunctionNames,
  type ElevenLabsFullApiVideoToMusicGeneratedClient,
  type ElevenLabsFullApiVideoToMusicOperationPathParamMap,
  type ElevenLabsFullApiVideoToMusicOperationRequestMap,
} from "./full-api.generated/client/video-to-music-chunk.generated.js";
import {
  createElevenLabsFullApiVoicesGeneratedClient,
  ElevenLabsFullApiVoicesGeneratedFunctionNames,
  type ElevenLabsFullApiVoicesGeneratedClient,
  type ElevenLabsFullApiVoicesOperationPathParamMap,
  type ElevenLabsFullApiVoicesOperationRequestMap,
} from "./full-api.generated/client/voices-chunk.generated.js";
import {
  createElevenLabsFullApiWorkspaceGeneratedClient,
  ElevenLabsFullApiWorkspaceGeneratedFunctionNames,
  type ElevenLabsFullApiWorkspaceGeneratedClient,
  type ElevenLabsFullApiWorkspaceOperationPathParamMap,
  type ElevenLabsFullApiWorkspaceOperationRequestMap,
} from "./full-api.generated/client/workspace-chunk.generated.js";

export type ElevenLabsFullApiPathParamValue = string | number;
export interface ElevenLabsFullApiOperationPathParamMap extends ElevenLabsFullApiAccessAllOperationPathParamMap, ElevenLabsFullApiAgentsInsightsOperationPathParamMap, ElevenLabsFullApiAgentsPlatform01OperationPathParamMap, ElevenLabsFullApiAgentsPlatform02OperationPathParamMap, ElevenLabsFullApiAgentsWorkspaceAnalyticsOperationPathParamMap, ElevenLabsFullApiAudioIsolationOperationPathParamMap, ElevenLabsFullApiAudioNativeOperationPathParamMap, ElevenLabsFullApiConversationalAIOperationPathParamMap, ElevenLabsFullApiDocsOperationPathParamMap, ElevenLabsFullApiDubbingOperationPathParamMap, ElevenLabsFullApiForcedAlignmentOperationPathParamMap, ElevenLabsFullApiModelsOperationPathParamMap, ElevenLabsFullApiMusicGenerationOperationPathParamMap, ElevenLabsFullApiProductionsOperationPathParamMap, ElevenLabsFullApiPronunciationDictionaryOperationPathParamMap, ElevenLabsFullApiPvcVoicesOperationPathParamMap, ElevenLabsFullApiSamplesOperationPathParamMap, ElevenLabsFullApiSingleUseTokenOperationPathParamMap, ElevenLabsFullApiSoundGenerationOperationPathParamMap, ElevenLabsFullApiSpeechEngineOperationPathParamMap, ElevenLabsFullApiSpeechHistoryOperationPathParamMap, ElevenLabsFullApiSpeechToSpeechOperationPathParamMap, ElevenLabsFullApiSpeechToTextOperationPathParamMap, ElevenLabsFullApiStudioOperationPathParamMap, ElevenLabsFullApiTextToDialogueOperationPathParamMap, ElevenLabsFullApiTextToSpeechOperationPathParamMap, ElevenLabsFullApiTextToVoiceOperationPathParamMap, ElevenLabsFullApiV1OperationPathParamMap, ElevenLabsFullApiVideoToMusicOperationPathParamMap, ElevenLabsFullApiVoicesOperationPathParamMap, ElevenLabsFullApiWorkspaceOperationPathParamMap {}

export type ElevenLabsFullApiOperationKey = keyof ElevenLabsFullApiOperationPathParamMap & string;

export type ElevenLabsFullApiOperationQueryInput<OperationKey extends ElevenLabsFullApiOperationKey> =
  ElevenLabsFullApiOperationQueryRequiredMap[OperationKey] extends true
    ? { query: ElevenLabsFullApiOperationQueryMap[OperationKey] }
    : { query?: ElevenLabsFullApiOperationQueryMap[OperationKey] };

export type ElevenLabsFullApiOperationBodyInput<OperationKey extends ElevenLabsFullApiOperationKey> =
  [ElevenLabsFullApiOperationRequestBodyMap[OperationKey]] extends [never]
    ? { body?: never }
    : ElevenLabsFullApiOperationRequestBodyRequiredMap[OperationKey] extends true
      ? { body: ElevenLabsFullApiOperationRequestBodyMap[OperationKey] }
      : { body?: ElevenLabsFullApiOperationRequestBodyMap[OperationKey] };

export type ElevenLabsFullApiOperationInput<OperationKey extends ElevenLabsFullApiOperationKey> = Omit<ElevenLabsOperationRequestInput, "pathParams" | "query" | "body"> & (
  {} extends ElevenLabsFullApiOperationPathParamMap[OperationKey]
    ? { pathParams?: never }
    : { pathParams: ElevenLabsFullApiOperationPathParamMap[OperationKey] }
) & ElevenLabsFullApiOperationQueryInput<OperationKey> & ElevenLabsFullApiOperationBodyInput<OperationKey>;

export interface ElevenLabsFullApiOperationRequestMap extends ElevenLabsFullApiAccessAllOperationRequestMap, ElevenLabsFullApiAgentsInsightsOperationRequestMap, ElevenLabsFullApiAgentsPlatform01OperationRequestMap, ElevenLabsFullApiAgentsPlatform02OperationRequestMap, ElevenLabsFullApiAgentsWorkspaceAnalyticsOperationRequestMap, ElevenLabsFullApiAudioIsolationOperationRequestMap, ElevenLabsFullApiAudioNativeOperationRequestMap, ElevenLabsFullApiConversationalAIOperationRequestMap, ElevenLabsFullApiDocsOperationRequestMap, ElevenLabsFullApiDubbingOperationRequestMap, ElevenLabsFullApiForcedAlignmentOperationRequestMap, ElevenLabsFullApiModelsOperationRequestMap, ElevenLabsFullApiMusicGenerationOperationRequestMap, ElevenLabsFullApiProductionsOperationRequestMap, ElevenLabsFullApiPronunciationDictionaryOperationRequestMap, ElevenLabsFullApiPvcVoicesOperationRequestMap, ElevenLabsFullApiSamplesOperationRequestMap, ElevenLabsFullApiSingleUseTokenOperationRequestMap, ElevenLabsFullApiSoundGenerationOperationRequestMap, ElevenLabsFullApiSpeechEngineOperationRequestMap, ElevenLabsFullApiSpeechHistoryOperationRequestMap, ElevenLabsFullApiSpeechToSpeechOperationRequestMap, ElevenLabsFullApiSpeechToTextOperationRequestMap, ElevenLabsFullApiStudioOperationRequestMap, ElevenLabsFullApiTextToDialogueOperationRequestMap, ElevenLabsFullApiTextToSpeechOperationRequestMap, ElevenLabsFullApiTextToVoiceOperationRequestMap, ElevenLabsFullApiV1OperationRequestMap, ElevenLabsFullApiVideoToMusicOperationRequestMap, ElevenLabsFullApiVoicesOperationRequestMap, ElevenLabsFullApiWorkspaceOperationRequestMap {}

export type ElevenLabsFullApiOperationArgs<OperationKey extends ElevenLabsFullApiOperationKey> = {} extends ElevenLabsFullApiOperationPathParamMap[OperationKey]
  ? [input?: ElevenLabsFullApiOperationRequestMap[OperationKey]]
  : [input: ElevenLabsFullApiOperationRequestMap[OperationKey]];

export type ElevenLabsGeneratedOperationCaller = <OperationKey extends ElevenLabsFullApiOperationKey>(
  operationKey: OperationKey,
  ...args: ElevenLabsFullApiOperationArgs<OperationKey>
) => Promise<ElevenLabsFullApiOperationResponseMap[OperationKey]>;

export interface ElevenLabsFullApiGeneratedClient extends ElevenLabsFullApiAccessAllGeneratedClient, ElevenLabsFullApiAgentsInsightsGeneratedClient, ElevenLabsFullApiAgentsPlatform01GeneratedClient, ElevenLabsFullApiAgentsPlatform02GeneratedClient, ElevenLabsFullApiAgentsWorkspaceAnalyticsGeneratedClient, ElevenLabsFullApiAudioIsolationGeneratedClient, ElevenLabsFullApiAudioNativeGeneratedClient, ElevenLabsFullApiConversationalAIGeneratedClient, ElevenLabsFullApiDocsGeneratedClient, ElevenLabsFullApiDubbingGeneratedClient, ElevenLabsFullApiForcedAlignmentGeneratedClient, ElevenLabsFullApiModelsGeneratedClient, ElevenLabsFullApiMusicGenerationGeneratedClient, ElevenLabsFullApiProductionsGeneratedClient, ElevenLabsFullApiPronunciationDictionaryGeneratedClient, ElevenLabsFullApiPvcVoicesGeneratedClient, ElevenLabsFullApiSamplesGeneratedClient, ElevenLabsFullApiSingleUseTokenGeneratedClient, ElevenLabsFullApiSoundGenerationGeneratedClient, ElevenLabsFullApiSpeechEngineGeneratedClient, ElevenLabsFullApiSpeechHistoryGeneratedClient, ElevenLabsFullApiSpeechToSpeechGeneratedClient, ElevenLabsFullApiSpeechToTextGeneratedClient, ElevenLabsFullApiStudioGeneratedClient, ElevenLabsFullApiTextToDialogueGeneratedClient, ElevenLabsFullApiTextToSpeechGeneratedClient, ElevenLabsFullApiTextToVoiceGeneratedClient, ElevenLabsFullApiV1GeneratedClient, ElevenLabsFullApiVideoToMusicGeneratedClient, ElevenLabsFullApiVoicesGeneratedClient, ElevenLabsFullApiWorkspaceGeneratedClient {}

export const ELEVENLABS_FULL_API_GENERATED_FUNCTION_COUNT = 317 as const;
export const ELEVENLABS_FULL_API_GENERATED_FUNCTION_NAMES = [
  ...ElevenLabsFullApiAccessAllGeneratedFunctionNames,
  ...ElevenLabsFullApiAgentsInsightsGeneratedFunctionNames,
  ...ElevenLabsFullApiAgentsPlatform01GeneratedFunctionNames,
  ...ElevenLabsFullApiAgentsPlatform02GeneratedFunctionNames,
  ...ElevenLabsFullApiAgentsWorkspaceAnalyticsGeneratedFunctionNames,
  ...ElevenLabsFullApiAudioIsolationGeneratedFunctionNames,
  ...ElevenLabsFullApiAudioNativeGeneratedFunctionNames,
  ...ElevenLabsFullApiConversationalAIGeneratedFunctionNames,
  ...ElevenLabsFullApiDocsGeneratedFunctionNames,
  ...ElevenLabsFullApiDubbingGeneratedFunctionNames,
  ...ElevenLabsFullApiForcedAlignmentGeneratedFunctionNames,
  ...ElevenLabsFullApiModelsGeneratedFunctionNames,
  ...ElevenLabsFullApiMusicGenerationGeneratedFunctionNames,
  ...ElevenLabsFullApiProductionsGeneratedFunctionNames,
  ...ElevenLabsFullApiPronunciationDictionaryGeneratedFunctionNames,
  ...ElevenLabsFullApiPvcVoicesGeneratedFunctionNames,
  ...ElevenLabsFullApiSamplesGeneratedFunctionNames,
  ...ElevenLabsFullApiSingleUseTokenGeneratedFunctionNames,
  ...ElevenLabsFullApiSoundGenerationGeneratedFunctionNames,
  ...ElevenLabsFullApiSpeechEngineGeneratedFunctionNames,
  ...ElevenLabsFullApiSpeechHistoryGeneratedFunctionNames,
  ...ElevenLabsFullApiSpeechToSpeechGeneratedFunctionNames,
  ...ElevenLabsFullApiSpeechToTextGeneratedFunctionNames,
  ...ElevenLabsFullApiStudioGeneratedFunctionNames,
  ...ElevenLabsFullApiTextToDialogueGeneratedFunctionNames,
  ...ElevenLabsFullApiTextToSpeechGeneratedFunctionNames,
  ...ElevenLabsFullApiTextToVoiceGeneratedFunctionNames,
  ...ElevenLabsFullApiV1GeneratedFunctionNames,
  ...ElevenLabsFullApiVideoToMusicGeneratedFunctionNames,
  ...ElevenLabsFullApiVoicesGeneratedFunctionNames,
  ...ElevenLabsFullApiWorkspaceGeneratedFunctionNames,
] as const satisfies readonly (keyof ElevenLabsFullApiGeneratedClient)[];

export function createElevenLabsFullApiGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiGeneratedClient {
  return Object.assign(
    {},
    createElevenLabsFullApiAccessAllGeneratedClient(callOperation),
    createElevenLabsFullApiAgentsInsightsGeneratedClient(callOperation),
    createElevenLabsFullApiAgentsPlatform01GeneratedClient(callOperation),
    createElevenLabsFullApiAgentsPlatform02GeneratedClient(callOperation),
    createElevenLabsFullApiAgentsWorkspaceAnalyticsGeneratedClient(callOperation),
    createElevenLabsFullApiAudioIsolationGeneratedClient(callOperation),
    createElevenLabsFullApiAudioNativeGeneratedClient(callOperation),
    createElevenLabsFullApiConversationalAIGeneratedClient(callOperation),
    createElevenLabsFullApiDocsGeneratedClient(callOperation),
    createElevenLabsFullApiDubbingGeneratedClient(callOperation),
    createElevenLabsFullApiForcedAlignmentGeneratedClient(callOperation),
    createElevenLabsFullApiModelsGeneratedClient(callOperation),
    createElevenLabsFullApiMusicGenerationGeneratedClient(callOperation),
    createElevenLabsFullApiProductionsGeneratedClient(callOperation),
    createElevenLabsFullApiPronunciationDictionaryGeneratedClient(callOperation),
    createElevenLabsFullApiPvcVoicesGeneratedClient(callOperation),
    createElevenLabsFullApiSamplesGeneratedClient(callOperation),
    createElevenLabsFullApiSingleUseTokenGeneratedClient(callOperation),
    createElevenLabsFullApiSoundGenerationGeneratedClient(callOperation),
    createElevenLabsFullApiSpeechEngineGeneratedClient(callOperation),
    createElevenLabsFullApiSpeechHistoryGeneratedClient(callOperation),
    createElevenLabsFullApiSpeechToSpeechGeneratedClient(callOperation),
    createElevenLabsFullApiSpeechToTextGeneratedClient(callOperation),
    createElevenLabsFullApiStudioGeneratedClient(callOperation),
    createElevenLabsFullApiTextToDialogueGeneratedClient(callOperation),
    createElevenLabsFullApiTextToSpeechGeneratedClient(callOperation),
    createElevenLabsFullApiTextToVoiceGeneratedClient(callOperation),
    createElevenLabsFullApiV1GeneratedClient(callOperation),
    createElevenLabsFullApiVideoToMusicGeneratedClient(callOperation),
    createElevenLabsFullApiVoicesGeneratedClient(callOperation),
    createElevenLabsFullApiWorkspaceGeneratedClient(callOperation),
  ) as ElevenLabsFullApiGeneratedClient;
}
