import {
  createVonageVoiceFullApiGeneratedClient,
  type VonageGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  VONAGE_VOICE_FULL_API_OPERATION_BY_ID,
  VONAGE_VOICE_FULL_API_OPERATION_BY_OPERATION_ID,
  type VonageVoiceFullApiOperationId,
} from "./full-api-operations.generated.js";
import type {
  VonageCallResource,
  VonageOperationRequestInput,
  VonageVoiceClient,
  VonageVoiceClientOptions,
  VonageVoiceJsonObject,
} from "./contracts.js";
import {
  assertVonageOutboundCallInput,
  normalizeOutboundCall,
  vonageOperationRequest,
  vonageRequest,
} from "./request.js";

export function createVonageVoiceClient(options: VonageVoiceClientOptions): VonageVoiceClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://api.nexmo.com").replace(/\/+$/, "");
  const restBaseUrl = (options.restBaseUrl ?? "https://rest.nexmo.com").replace(/\/+$/, "");
  const fetchImpl = options.fetch ?? fetch;
  const requestOperation = async (
    operationId: VonageVoiceFullApiOperationId | string,
    input: VonageOperationRequestInput = {},
  ) => {
    const operation = VONAGE_VOICE_FULL_API_OPERATION_BY_ID.get(operationId)
      ?? VONAGE_VOICE_FULL_API_OPERATION_BY_OPERATION_ID.get(operationId);
    if (!operation) throw new Error(`Unknown Vonage Voice REST operation '${operationId}'.`);
    return vonageOperationRequest({
      operation,
      input,
      options,
      apiBaseUrl,
      restBaseUrl,
      fetch: fetchImpl,
    });
  };
  const fullApi = createVonageVoiceFullApiGeneratedClient(requestOperation as VonageGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as VonageGeneratedOperationCaller,
    async createOutboundCall(input) {
      assertVonageOutboundCallInput(input, options);
      return vonageRequest<VonageCallResource>({
        url: `${apiBaseUrl}/v1/calls`,
        method: "POST",
        options,
        fetch: fetchImpl,
        body: normalizeOutboundCall(input, options),
      });
    },
    async fetchCall(uuid) {
      return vonageRequest<VonageCallResource>({
        url: `${apiBaseUrl}/v1/calls/${encodeURIComponent(uuid)}`,
        method: "GET",
        options,
        fetch: fetchImpl,
      });
    },
    async updateCall(uuid, input) {
      if (input.action !== "transfer") {
        throw new Error("Vonage Voice v1 modify-call supports only the documented transfer action.");
      }
      return vonageRequest<VonageVoiceJsonObject>({
        url: `${apiBaseUrl}/v1/calls/${encodeURIComponent(uuid)}`,
        method: "PUT",
        options,
        fetch: fetchImpl,
        body: input,
      });
    },
  };
}
