import {
  createElevenLabsFullApiGeneratedClient,
  type ElevenLabsGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  ELEVENLABS_FULL_API_OPERATION_BY_ID,
  ELEVENLABS_FULL_API_OPERATION_BY_UID,
  type ElevenLabsFullApiOperationUid,
} from "./full-api-operations.generated.js";
import type {
  ElevenLabsConversationDetails,
  ElevenLabsConversationSignedUrlResponse,
  ElevenLabsHistoryListResponse,
  ElevenLabsListConversationsResponse,
  ElevenLabsModelSummary,
  ElevenLabsOperationRequestInput,
  ElevenLabsSpeechWithTimingResponse,
  ElevenLabsTranscriptResponse,
  ElevenLabsVoiceClient,
  ElevenLabsVoiceClientOptions,
  ElevenLabsVoiceJsonObject,
  ElevenLabsVoicesResponse,
} from "./contracts.js";
import {
  audioIsolationForm,
  audioOutputQuery,
  booleanQuery,
  buildElevenLabsWebSocketUrl,
  compactJson,
  compactQuery,
  elevenLabsArrayBufferRequest,
  elevenLabsJsonRequest,
  elevenLabsOperationRequest,
  elevenLabsRawRequest,
  forcedAlignmentForm,
  listConversationsQuery,
  speechBody,
  speechQuery,
  transcriptForm,
  voiceChangerForm,
} from "./request.js";

export function createElevenLabsVoiceClient(options: ElevenLabsVoiceClientOptions): ElevenLabsVoiceClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://api.elevenlabs.io").replace(/\/+$/, "");
  const fetchImpl = options.fetch ?? fetch;
  const requestOperation = async (
    operationUidOrId: ElevenLabsFullApiOperationUid | string,
    input: ElevenLabsOperationRequestInput = {},
  ) => {
    const operation = ELEVENLABS_FULL_API_OPERATION_BY_UID.get(operationUidOrId)
      ?? ELEVENLABS_FULL_API_OPERATION_BY_ID.get(operationUidOrId);
    if (!operation) throw new Error(`Unknown ElevenLabs REST OpenAPI operation '${operationUidOrId}'.`);
    const requestInput = elevenLabsOperationRequest(operation.method, operation.path, input);
    if (input.responseType === "response") {
      return elevenLabsRawRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        ...requestInput,
      }) as Promise<Response>;
    }
    if (input.responseType === "arrayBuffer") {
      return elevenLabsArrayBufferRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        ...requestInput,
      }) as Promise<ArrayBuffer>;
    }
    if (input.responseType === "stream") {
      const response = await elevenLabsRawRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        ...requestInput,
      });
      if (!response.body) throw new Error("ElevenLabs operation response did not include a readable body.");
      return response.body;
    }
    return elevenLabsJsonRequest({
      apiBaseUrl,
      apiKey: options.apiKey,
      fetch: fetchImpl,
      ...requestInput,
    });
  };
  const fullApi = createElevenLabsFullApiGeneratedClient(requestOperation as ElevenLabsGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as ElevenLabsGeneratedOperationCaller,
    async createSpeech(input) {
      return elevenLabsArrayBufferRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "POST",
        path: `/v1/text-to-speech/${encodeURIComponent(input.voiceId)}`,
        query: speechQuery(input),
        json: speechBody(input),
      });
    },
    async streamSpeech(input) {
      const response = await elevenLabsRawRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "POST",
        path: `/v1/text-to-speech/${encodeURIComponent(input.voiceId)}/stream`,
        query: speechQuery(input),
        json: speechBody(input),
      });
      if (!response.body) throw new Error("ElevenLabs stream speech response did not include a readable body.");
      return response.body;
    },
    async createSpeechWithTiming(input) {
      return elevenLabsJsonRequest<ElevenLabsSpeechWithTimingResponse>({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "POST",
        path: `/v1/text-to-speech/${encodeURIComponent(input.voiceId)}/with-timestamps`,
        query: speechQuery(input),
        json: speechBody(input),
      });
    },
    async streamSpeechWithTiming(input) {
      const response = await elevenLabsRawRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "POST",
        path: `/v1/text-to-speech/${encodeURIComponent(input.voiceId)}/stream/with-timestamps`,
        query: speechQuery(input),
        json: speechBody(input),
      });
      if (!response.body) throw new Error("ElevenLabs stream speech with timing response did not include a readable body.");
      return response.body;
    },
    async createTranscript(input) {
      if (!input.file && !input.sourceUrl) {
        throw new Error("Exactly one of file or sourceUrl is required to create an ElevenLabs transcript.");
      }
      if (input.file && input.sourceUrl) {
        throw new Error("Only one of file or sourceUrl can be used to create an ElevenLabs transcript.");
      }
      return elevenLabsJsonRequest<ElevenLabsTranscriptResponse>({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "POST",
        path: "/v1/speech-to-text",
        query: booleanQuery({ enable_logging: input.enableLogging }),
        form: transcriptForm(input),
      });
    },
    async getTranscript(transcriptionId) {
      return elevenLabsJsonRequest<ElevenLabsTranscriptResponse>({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "GET",
        path: `/v1/speech-to-text/transcripts/${encodeURIComponent(transcriptionId)}`,
      });
    },
    async deleteTranscript(transcriptionId) {
      await elevenLabsRawRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "DELETE",
        path: `/v1/speech-to-text/transcripts/${encodeURIComponent(transcriptionId)}`,
      });
    },
    async createVoiceChange(input) {
      return elevenLabsArrayBufferRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "POST",
        path: `/v1/speech-to-speech/${encodeURIComponent(input.voiceId)}`,
        query: audioOutputQuery(input),
        form: voiceChangerForm(input),
      });
    },
    async streamVoiceChange(input) {
      const response = await elevenLabsRawRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "POST",
        path: `/v1/speech-to-speech/${encodeURIComponent(input.voiceId)}/stream`,
        query: audioOutputQuery(input),
        form: voiceChangerForm(input),
      });
      if (!response.body) throw new Error("ElevenLabs voice changer stream response did not include a readable body.");
      return response.body;
    },
    async createSoundEffect(input) {
      return elevenLabsArrayBufferRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "POST",
        path: "/v1/sound-generation",
        query: audioOutputQuery(input),
        json: compactJson({
          text: input.text,
          duration_seconds: input.durationSeconds,
          prompt_influence: input.promptInfluence,
        }),
      });
    },
    async isolateAudio(input) {
      return elevenLabsArrayBufferRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "POST",
        path: "/v1/audio-isolation",
        query: audioOutputQuery(input),
        form: audioIsolationForm(input),
      });
    },
    async streamAudioIsolation(input) {
      const response = await elevenLabsRawRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "POST",
        path: "/v1/audio-isolation/stream",
        query: audioOutputQuery(input),
        form: audioIsolationForm(input),
      });
      if (!response.body) throw new Error("ElevenLabs audio isolation stream response did not include a readable body.");
      return response.body;
    },
    async createForcedAlignment(input) {
      return elevenLabsJsonRequest<ElevenLabsVoiceJsonObject>({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "POST",
        path: "/v1/forced-alignment",
        form: forcedAlignmentForm(input),
      });
    },
    async listVoices() {
      return elevenLabsJsonRequest<ElevenLabsVoicesResponse>({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "GET",
        path: "/v2/voices",
      });
    },
    async listModels() {
      return elevenLabsJsonRequest<ElevenLabsModelSummary[]>({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "GET",
        path: "/v1/models",
      });
    },
    async getConversationSignedUrl(input) {
      return elevenLabsJsonRequest<ElevenLabsConversationSignedUrlResponse>({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "GET",
        path: "/v1/convai/conversation/get-signed-url",
        query: compactQuery({
          agent_id: input.agentId,
          include_conversation_id: input.includeConversationId,
          branch_id: input.branchId,
          environment: input.environment,
        }),
      });
    },
    async listConversations(input = {}) {
      return elevenLabsJsonRequest<ElevenLabsListConversationsResponse>({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "GET",
        path: "/v1/convai/conversations",
        query: listConversationsQuery(input),
      });
    },
    async getConversation(conversationId, input = {}) {
      return elevenLabsJsonRequest<ElevenLabsConversationDetails>({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "GET",
        path: `/v1/convai/conversations/${encodeURIComponent(conversationId)}`,
        query: compactQuery({ format: input.format }),
      });
    },
    async getConversationAudio(conversationId) {
      return elevenLabsArrayBufferRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "GET",
        path: `/v1/convai/conversations/${encodeURIComponent(conversationId)}/audio`,
      });
    },
    async listHistory(input = {}) {
      return elevenLabsJsonRequest<ElevenLabsHistoryListResponse>({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "GET",
        path: "/v1/history",
        query: compactQuery({
          page_size: input.pageSize,
          start_after_history_item_id: input.startAfterHistoryItemId,
          voice_id: input.voiceId,
          search: input.search,
          source: input.source,
        }),
      });
    },
    async getHistoryItem(historyItemId) {
      return elevenLabsJsonRequest<ElevenLabsVoiceJsonObject>({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "GET",
        path: `/v1/history/${encodeURIComponent(historyItemId)}`,
      });
    },
    async deleteHistoryItem(historyItemId) {
      await elevenLabsRawRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "DELETE",
        path: `/v1/history/${encodeURIComponent(historyItemId)}`,
      });
    },
    async getHistoryAudio(historyItemId) {
      return elevenLabsArrayBufferRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "GET",
        path: `/v1/history/${encodeURIComponent(historyItemId)}/audio`,
      });
    },
    async downloadHistoryItems(input) {
      return elevenLabsArrayBufferRequest({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "POST",
        path: "/v1/history/download",
        json: { history_item_ids: input.historyItemIds },
      });
    },
    async createSingleUseToken(input) {
      return elevenLabsJsonRequest<ElevenLabsVoiceJsonObject>({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "POST",
        path: `/v1/single-use-token/${encodeURIComponent(input.tokenType)}`,
      });
    },
    async getUser() {
      return elevenLabsJsonRequest<ElevenLabsVoiceJsonObject>({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "GET",
        path: "/v1/user",
      });
    },
    async getUserSubscription() {
      return elevenLabsJsonRequest<ElevenLabsVoiceJsonObject>({
        apiBaseUrl,
        apiKey: options.apiKey,
        fetch: fetchImpl,
        method: "GET",
        path: "/v1/user/subscription",
      });
    },
    buildTextToSpeechWebSocketUrl(input) {
      return buildElevenLabsWebSocketUrl({
        apiBaseUrl,
        path: `/v1/text-to-speech/${encodeURIComponent(input.voiceId)}/stream-input`,
        input,
      });
    },
    buildMultiContextTextToSpeechWebSocketUrl(input) {
      return buildElevenLabsWebSocketUrl({
        apiBaseUrl,
        path: `/v1/text-to-speech/${encodeURIComponent(input.voiceId)}/multi-stream-input`,
        input,
        extraQuery: compactQuery({ auto_mode: input.autoMode }),
      });
    },
  };
}
