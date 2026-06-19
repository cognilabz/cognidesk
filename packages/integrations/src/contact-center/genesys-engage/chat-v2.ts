import type {
  GenesysEngageChatV2FileInput,
  GenesysEngageChatV2SessionInput,
  GenesysEngageContactCenterClientOptions,
  GenesysEngageProviderPayload,
} from "./contracts.js";
import { flattenUserData, formEncode } from "./encoding.js";
import { genesysEngageRequest } from "./request.js";

export function postChatV2Session(
  options: GenesysEngageContactCenterClientOptions,
  fetchImpl: typeof fetch,
  input: GenesysEngageChatV2SessionInput,
  action: string,
  payload: GenesysEngageProviderPayload = {},
) {
  return genesysEngageRequest({
    options,
    fetch: fetchImpl,
    method: "POST",
    path: chatV2SessionPath(input, action),
    body: chatV2SessionForm(input, payload),
    contentType: "application/x-www-form-urlencoded",
  });
}

export function chatV2SessionPath(input: GenesysEngageChatV2SessionInput, suffix: string) {
  return `/genesys/2/chat/${encodeURIComponent(input.serviceName)}/${encodeURIComponent(input.chatId)}/${suffix}`;
}

export function chatV2SessionForm(
  input: GenesysEngageChatV2SessionInput,
  payload: GenesysEngageProviderPayload = {},
) {
  return formEncode({
    userId: input.userId,
    secureKey: input.secureKey,
    alias: input.alias,
    ...payload,
  });
}

export function chatV2FileForm(input: GenesysEngageChatV2FileInput) {
  const form = input.file instanceof FormData ? input.file : new FormData();
  if (!(input.file instanceof FormData) && input.file !== undefined) {
    if (input.file instanceof Blob) {
      form.set("file", input.file, input.fileName);
    } else {
      form.set("file", input.file);
    }
  }
  form.set("userId", input.userId);
  form.set("secureKey", input.secureKey);
  form.set("alias", input.alias);
  for (const [key, value] of Object.entries(flattenUserData(input.userData ?? {}))) {
    if (value !== undefined) form.set(key, String(value));
  }
  return form;
}
