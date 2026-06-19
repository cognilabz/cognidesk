import type {
  GoogleSpeechClientOptions,
  GoogleSpeechJsonObject,
  GoogleSpeechJsonValue,
} from "./contracts.js";

export async function googleHeaders(options: GoogleSpeechClientOptions, signal: AbortSignal | undefined) {
  const accessToken = await resolveAccessToken(options, signal);
  return {
    authorization: `Bearer ${accessToken}`,
    "content-type": "application/json; charset=utf-8",
    ...(options.quotaProjectId ? { "x-goog-user-project": options.quotaProjectId } : {}),
  };
}

export async function googleJsonResponse(response: Response, label: string): Promise<GoogleSpeechJsonObject> {
  const text = await response.text();
  if (!response.ok) {
    const message = googleErrorMessage(text);
    throw new Error(message || `${label} returned ${response.status}.`);
  }
  return text ? JSON.parse(text) as GoogleSpeechJsonObject : {};
}

export function objectArrayField(value: GoogleSpeechJsonValue | undefined) {
  return Array.isArray(value)
    ? value.filter((item): item is GoogleSpeechJsonObject => typeof item === "object" && item !== null && !Array.isArray(item))
    : undefined;
}

export function stringField(value: GoogleSpeechJsonValue | undefined) {
  return typeof value === "string" ? value : undefined;
}

export function numberField(value: GoogleSpeechJsonValue | undefined) {
  return typeof value === "number" ? value : undefined;
}

async function resolveAccessToken(options: GoogleSpeechClientOptions, signal: AbortSignal | undefined) {
  const token = options.getAccessToken
    ? await options.getAccessToken(signal ? { signal } : {})
    : options.accessToken;
  if (!token) {
    throw new Error("Google Cloud access token is required to create a speech client.");
  }
  return token;
}

function googleErrorMessage(text: string) {
  if (!text) return undefined;
  try {
    const json = JSON.parse(text) as GoogleSpeechJsonObject;
    const error = objectField(json.error);
    const message = stringField(error?.message);
    const status = stringField(error?.status);
    return message && status ? `${status}: ${message}` : message;
  } catch {
    return text;
  }
}

function objectField(value: GoogleSpeechJsonValue | undefined): GoogleSpeechJsonObject | undefined {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return undefined;
  return value as GoogleSpeechJsonObject;
}
