import {
  createTwilioSmsFullApiGeneratedClient,
  type TwilioSmsGeneratedOperationCaller,
} from "./full-api-client.generated.js";
import {
  TWILIO_SMS_FULL_API_OPERATION_BY_ID,
  type TwilioSmsFullApiOperationId,
} from "./full-api-operations.generated.js";
import type {
  TwilioAccountResource,
  TwilioIncomingPhoneNumberResource,
  TwilioListMessagesInput,
  TwilioMessageListResource,
  TwilioMessageResource,
  TwilioMessageStatusUpdate,
  TwilioSendSmsInput,
  TwilioSmsClient,
  TwilioSmsClientOptions,
  TwilioSmsClientRequestInput,
  TwilioSmsHttpMethod,
  TwilioSmsOperationRequestInput,
  TwilioSmsResource,
} from "./contracts.js";
import {
  twilioOperationPath,
  twilioRequest,
  twilioRequestUrl,
} from "./request.js";

export function createTwilioSmsClient(options: TwilioSmsClientOptions): TwilioSmsClient {
  const apiBaseUrl = (options.apiBaseUrl ?? "https://api.twilio.com").replace(/\/+$/, "");
  const apiVersion = options.apiVersion ?? "2010-04-01";
  const fetchImpl = options.fetch ?? fetch;
  const accountPath = `${apiBaseUrl}/${apiVersion}/Accounts/${encodeURIComponent(options.accountSid)}`;

  const request = <T = TwilioSmsResource>(
    method: TwilioSmsHttpMethod,
    path: string,
    input: TwilioSmsClientRequestInput = {},
  ) => twilioRequest<T>({
    url: twilioRequestUrl(apiBaseUrl, path, input.query),
    method,
    body: method === "GET" ? undefined : input.body,
    contentType: input.contentType,
    auth: options,
    fetch: fetchImpl,
  });

  const requestOperation = async (
    operationId: TwilioSmsFullApiOperationId | string,
    input: TwilioSmsOperationRequestInput = {},
  ) => {
    const operation = TWILIO_SMS_FULL_API_OPERATION_BY_ID.get(operationId);
    if (!operation) {
      throw new Error(`Unknown Twilio Messaging OpenAPI operation '${operationId}'.`);
    }
    const path = twilioOperationPath(operation.path, {
      AccountSid: options.accountSid,
      ...input.pathParams,
    });
    return request(operation.method as TwilioSmsHttpMethod, path, {
      query: input.query,
      body: input.body,
      contentType: input.contentType ?? operation.requestContentTypes[0],
    });
  };
  const fullApi = createTwilioSmsFullApiGeneratedClient(requestOperation as TwilioSmsGeneratedOperationCaller);

  return {
    fullApi,
    requestOperation: requestOperation as TwilioSmsGeneratedOperationCaller,
    async sendMessage(input) {
      return twilioRequest<TwilioMessageResource>({
        url: `${accountPath}/Messages.json`,
        method: "POST",
        body: sendMessageBody(input),
        auth: options,
        fetch: fetchImpl,
      });
    },
    async fetchMessage(messageSid) {
      return twilioRequest<TwilioMessageResource>({
        url: `${accountPath}/Messages/${encodeURIComponent(messageSid)}.json`,
        method: "GET",
        auth: options,
        fetch: fetchImpl,
      });
    },
    async listMessages(input = {}) {
      const url = new URL(`${accountPath}/Messages.json`);
      applyMessageListQuery(url, input);
      return twilioRequest<TwilioMessageListResource>({
        url: url.toString(),
        method: "GET",
        auth: options,
        fetch: fetchImpl,
      });
    },
    async updateMessageStatus(messageSid, status) {
      return twilioRequest<TwilioMessageResource>({
        url: `${accountPath}/Messages/${encodeURIComponent(messageSid)}.json`,
        method: "POST",
        body: new URLSearchParams({ Status: normalizeMessageStatus(status) }),
        auth: options,
        fetch: fetchImpl,
      });
    },
    async fetchAccount() {
      return twilioRequest<TwilioAccountResource>({
        url: `${accountPath}.json`,
        method: "GET",
        auth: options,
        fetch: fetchImpl,
      });
    },
    async listIncomingPhoneNumbers(input = {}) {
      const url = new URL(`${accountPath}/IncomingPhoneNumbers.json`);
      if (input.phoneNumber) url.searchParams.set("PhoneNumber", input.phoneNumber);
      return (await twilioRequest<{ incoming_phone_numbers?: TwilioIncomingPhoneNumberResource[] }>({
        url: url.toString(),
        method: "GET",
        auth: options,
        fetch: fetchImpl,
      })).incoming_phone_numbers ?? [];
    },
  };
}

function sendMessageBody(input: TwilioSendSmsInput) {
  const senderCount = [input.from, input.messagingServiceSid].filter(Boolean).length;
  if (senderCount !== 1) {
    throw new Error("Exactly one of from or messagingServiceSid is required to send a Twilio SMS message.");
  }
  const hasMedia = arrayOf(input.mediaUrl).length > 0;
  if (input.contentVariables && !input.contentSid) {
    throw new Error("Twilio contentVariables require contentSid.");
  }
  if (!input.body && !hasMedia && !input.contentSid) {
    throw new Error("Twilio SMS requires body, mediaUrl, or contentSid.");
  }
  if (input.contentSid && (input.body || hasMedia)) {
    throw new Error("Twilio ContentSid messages cannot be combined with body or mediaUrl in this adapter.");
  }
  if ((input.sendAt || input.scheduleType) && (!input.messagingServiceSid || !input.sendAt || input.scheduleType !== "fixed")) {
    throw new Error("Twilio scheduled messages require messagingServiceSid, sendAt, and scheduleType 'fixed'.");
  }
  if (input.shortenUrls && !input.messagingServiceSid) {
    throw new Error("Twilio link shortening requires messagingServiceSid.");
  }
  const params = new URLSearchParams({ To: input.to });
  if (input.body) params.set("Body", input.body);
  if (input.from) params.set("From", input.from);
  if (input.messagingServiceSid) params.set("MessagingServiceSid", input.messagingServiceSid);
  if (input.statusCallback) params.set("StatusCallback", input.statusCallback);
  for (const mediaUrl of arrayOf(input.mediaUrl)) params.append("MediaUrl", mediaUrl);
  if (input.contentSid) params.set("ContentSid", input.contentSid);
  if (input.contentVariables) params.set("ContentVariables", JSON.stringify(input.contentVariables));
  if (input.maxPrice) params.set("MaxPrice", input.maxPrice);
  if (input.provideFeedback !== undefined) params.set("ProvideFeedback", String(input.provideFeedback));
  if (input.validityPeriodSeconds !== undefined) params.set("ValidityPeriod", String(input.validityPeriodSeconds));
  if (input.smartEncoded !== undefined) params.set("SmartEncoded", String(input.smartEncoded));
  if (input.shortenUrls !== undefined) params.set("ShortenUrls", String(input.shortenUrls));
  if (input.sendAt) params.set("SendAt", input.sendAt);
  if (input.scheduleType) params.set("ScheduleType", input.scheduleType);
  return params;
}

function applyMessageListQuery(url: URL, input: TwilioListMessagesInput) {
  if (input.to) url.searchParams.set("To", input.to);
  if (input.from) url.searchParams.set("From", input.from);
  if (input.dateSent) url.searchParams.set("DateSent", input.dateSent);
  if (input.dateSentBefore) url.searchParams.set("DateSent<", input.dateSentBefore);
  if (input.dateSentAfter) url.searchParams.set("DateSent>", input.dateSentAfter);
  if (input.pageSize !== undefined) url.searchParams.set("PageSize", String(input.pageSize));
  if (input.pageToken) url.searchParams.set("PageToken", input.pageToken);
}

function normalizeMessageStatus(status: TwilioMessageStatusUpdate) {
  return status === "cancelled" ? "canceled" : status;
}

function arrayOf(value: string | string[] | undefined) {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}
