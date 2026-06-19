import {
  createTwilioVoiceFullApiGeneratedClient,
  type TwilioVoiceGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  TWILIO_VOICE_FULL_API_OPERATION_BY_ID,
  type TwilioVoiceFullApiOperationId,
} from "./full-api-operations.generated.js";
import type {
  TwilioAccountResource,
  TwilioCallResource,
  TwilioVoiceClient,
  TwilioVoiceClientOptions,
  TwilioVoiceClientRequestInput,
  TwilioVoiceHttpMethod,
  TwilioVoiceOperationRequestInput,
  TwilioVoiceResource,
} from "./contracts.js";
import {
  callEndBody,
  callRedirectBody,
  callUpdateBody,
  outboundCallBody,
  twilioOperationPath,
  twilioRequest,
  twilioRequestUrl,
} from "./request.js";

export function createTwilioVoiceClient(options: TwilioVoiceClientOptions): TwilioVoiceClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://api.twilio.com").replace(/\/+$/, "");
  const apiVersion = options.apiVersion ?? "2010-04-01";
  const fetchImpl = options.fetch ?? fetch;

  const request = <T = TwilioVoiceResource>(
    method: TwilioVoiceHttpMethod,
    path: string,
    input: TwilioVoiceClientRequestInput = {},
  ) => twilioRequest<T>({
    url: twilioRequestUrl(apiBaseUrl, path, input.query),
    method,
    body: method === "GET" ? undefined : input.body,
    contentType: input.contentType,
    auth: options,
    fetch: fetchImpl,
  });

  const requestOperation = async (
    operationId: TwilioVoiceFullApiOperationId | string,
    input: TwilioVoiceOperationRequestInput = {},
  ) => {
    const operation = TWILIO_VOICE_FULL_API_OPERATION_BY_ID.get(operationId);
    if (!operation) {
      throw new Error(`Unknown Twilio Voice OpenAPI operation '${operationId}'.`);
    }
    const path = twilioOperationPath(operation.path, {
      AccountSid: options.accountSid,
      ...input.pathParams,
    });
    return request(operation.method as TwilioVoiceHttpMethod, path, {
      query: input.query,
      body: input.body,
      contentType: input.contentType ?? operation.requestContentTypes[0],
    });
  };
  const fullApi = createTwilioVoiceFullApiGeneratedClient(requestOperation as TwilioVoiceGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as TwilioVoiceGeneratedOperationCaller,
    async createOutboundCall(input) {
      const body = outboundCallBody(input);
      return twilioRequest<TwilioCallResource>({
        url: `${apiBaseUrl}/${apiVersion}/Accounts/${encodeURIComponent(options.accountSid)}/Calls.json`,
        method: "POST",
        body,
        auth: options,
        fetch: fetchImpl,
      });
    },
    async fetchCall(callSid) {
      return twilioRequest<TwilioCallResource>({
        url: `${apiBaseUrl}/${apiVersion}/Accounts/${encodeURIComponent(options.accountSid)}/Calls/${encodeURIComponent(callSid)}.json`,
        method: "GET",
        auth: options,
        fetch: fetchImpl,
      });
    },
    async updateCall(callSid, input) {
      return twilioRequest<TwilioCallResource>({
        url: `${apiBaseUrl}/${apiVersion}/Accounts/${encodeURIComponent(options.accountSid)}/Calls/${encodeURIComponent(callSid)}.json`,
        method: "POST",
        body: callUpdateBody(input),
        auth: options,
        fetch: fetchImpl,
      });
    },
    async redirectCall(callSid, input) {
      return twilioRequest<TwilioCallResource>({
        url: `${apiBaseUrl}/${apiVersion}/Accounts/${encodeURIComponent(options.accountSid)}/Calls/${encodeURIComponent(callSid)}.json`,
        method: "POST",
        body: callRedirectBody(input),
        auth: options,
        fetch: fetchImpl,
      });
    },
    async endCall(callSid, input = {}) {
      return twilioRequest<TwilioCallResource>({
        url: `${apiBaseUrl}/${apiVersion}/Accounts/${encodeURIComponent(options.accountSid)}/Calls/${encodeURIComponent(callSid)}.json`,
        method: "POST",
        body: callEndBody(input),
        auth: options,
        fetch: fetchImpl,
      });
    },
    async fetchAccount() {
      return twilioRequest<TwilioAccountResource>({
        url: `${apiBaseUrl}/${apiVersion}/Accounts/${encodeURIComponent(options.accountSid)}.json`,
        method: "GET",
        auth: options,
        fetch: fetchImpl,
      });
    },
  };
}
