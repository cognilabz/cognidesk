import type {
  GenesysEngageJsonObject,
  GenesysEngageProviderPayload,
} from "./contracts.js";

export function encodeCallbackPayload(
  payload: GenesysEngageProviderPayload,
  contentType: "application/json" | "application/x-www-form-urlencoded",
) {
  if (contentType === "application/json") return JSON.stringify(payload);
  return formEncode(payload);
}

export function encodeChatV2Payload(
  payload: GenesysEngageProviderPayload,
  contentType: "application/json" | "application/x-www-form-urlencoded" | "multipart/form-data",
) {
  if (contentType === "application/json") return JSON.stringify(payload);
  if (contentType === "multipart/form-data") {
    const form = new FormData();
    for (const [key, value] of Object.entries(payload)) {
      if (value !== undefined) form.set(key, value instanceof Blob ? value : String(value));
    }
    return form;
  }
  return formEncode(payload);
}

export function formEncode(payload: GenesysEngageProviderPayload) {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(payload)) {
    if (value !== undefined) params.set(key, String(value));
  }
  return params.toString();
}

export function flattenUserData(userData: GenesysEngageJsonObject) {
  return Object.fromEntries(
    Object.entries(userData).map(([key, value]) => [`userData[${key}]`, value]),
  );
}
