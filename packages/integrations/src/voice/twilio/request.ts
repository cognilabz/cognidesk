import type {
  TwilioCallEndInput,
  TwilioCallRedirectInput,
  TwilioCallUpdateInput,
  TwilioOutboundCallInput,
  TwilioVoiceClientOptions,
  TwilioVoiceFormObject,
  TwilioVoiceFormValue,
  TwilioVoiceHttpMethod,
} from "./contracts.js";

export function outboundCallBody(input: TwilioOutboundCallInput) {
  if (!input.url && !input.twiml && !input.applicationSid) {
    throw new Error("At least one of url, twiml, or applicationSid is required to create a Twilio outbound call.");
  }
  if (input.applicationSid && (input.url || input.twiml)) {
    throw new Error("applicationSid cannot be combined with url or twiml when creating a Twilio outbound call.");
  }
  const params = new URLSearchParams({
    To: input.to,
    From: input.from,
  });
  if (input.url) params.set("Url", input.url);
  if (input.twiml) params.set("Twiml", input.twiml);
  if (input.applicationSid) params.set("ApplicationSid", input.applicationSid);
  if (input.method) params.set("Method", input.method);
  if (input.statusCallback) params.set("StatusCallback", input.statusCallback);
  if (input.statusCallbackMethod) params.set("StatusCallbackMethod", input.statusCallbackMethod);
  for (const event of input.statusCallbackEvent ?? []) params.append("StatusCallbackEvent", event);
  if (input.timeoutSeconds !== undefined) params.set("Timeout", String(input.timeoutSeconds));
  if (input.machineDetection) params.set("MachineDetection", input.machineDetection);
  if (input.sendDigits) params.set("SendDigits", input.sendDigits);
  for (const [key, value] of Object.entries(input.metadata ?? {})) {
    params.append(`Parameter[${key}]`, value);
  }
  return params;
}

export function callUpdateBody(input: TwilioCallUpdateInput) {
  if ([input.url, input.twiml].filter(Boolean).length > 1) {
    throw new Error("Only one of url or twiml can be used when updating a Twilio call.");
  }
  const params = new URLSearchParams();
  applyCallUpdateParams(params, input);
  if ([...params].length === 0) {
    throw new Error("At least one Twilio call update field is required.");
  }
  return params;
}

export function callRedirectBody(input: TwilioCallRedirectInput) {
  const redirectSourceCount = [input.url, input.twiml].filter(Boolean).length;
  if (redirectSourceCount !== 1) {
    throw new Error("Exactly one of url or twiml is required to redirect a Twilio call.");
  }
  const params = new URLSearchParams();
  applyCallUpdateParams(params, input);
  return params;
}

export function callEndBody(input: TwilioCallEndInput) {
  const params = new URLSearchParams({
    Status: input.status ?? "completed",
  });
  if (input.statusCallback) params.set("StatusCallback", input.statusCallback);
  if (input.statusCallbackMethod) params.set("StatusCallbackMethod", input.statusCallbackMethod);
  return params;
}

export async function twilioRequest<T>(input: {
  url: string;
  method: TwilioVoiceHttpMethod;
  auth: Pick<TwilioVoiceClientOptions, "accountSid" | "authToken" | "apiKeySid" | "apiKeySecret">;
  fetch: typeof fetch;
  body?: TwilioVoiceFormObject | URLSearchParams | undefined;
  contentType?: string | undefined;
}): Promise<T> {
  const auth = twilioBasicAuth(input.auth);
  const serialized = serializeTwilioBody(input.body, input.contentType);
  const response = await input.fetch(input.url, {
    method: input.method,
    headers: {
      authorization: `Basic ${Buffer.from(`${auth.username}:${auth.password}`).toString("base64")}`,
      ...(serialized ? { "content-type": serialized.contentType } : {}),
    },
    ...(serialized ? { body: serialized.body } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as T & { message?: string } : {} as T & { message?: string };
  if (!response.ok) {
    throw new Error(body.message ?? `Twilio Voice API returned ${response.status}.`);
  }
  return body as T;
}

export function twilioRequestUrl(apiBaseUrl: string, path: string, query?: TwilioVoiceFormObject) {
  const url = new URL(`${apiBaseUrl}${path.startsWith("/") ? path : `/${path}`}`);
  appendTwilioParams(url.searchParams, query);
  return url.toString();
}

export function twilioOperationPath(pathTemplate: string, pathParams: Record<string, string | number | boolean | undefined>) {
  return pathTemplate.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing Twilio path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
}

function applyCallUpdateParams(params: URLSearchParams, input: TwilioCallUpdateInput) {
  if (input.url) params.set("Url", input.url);
  if (input.twiml) params.set("Twiml", input.twiml);
  if (input.method) params.set("Method", input.method);
  if (input.status) params.set("Status", input.status);
  if (input.fallbackUrl) params.set("FallbackUrl", input.fallbackUrl);
  if (input.fallbackMethod) params.set("FallbackMethod", input.fallbackMethod);
  if (input.statusCallback) params.set("StatusCallback", input.statusCallback);
  if (input.statusCallbackMethod) params.set("StatusCallbackMethod", input.statusCallbackMethod);
  if (input.timeLimitSeconds !== undefined) params.set("TimeLimit", String(input.timeLimitSeconds));
}

function serializeTwilioBody(body: TwilioVoiceFormObject | URLSearchParams | undefined, contentType?: string) {
  if (!body) return undefined;
  const selectedContentType = contentType ?? "application/x-www-form-urlencoded";
  if (body instanceof URLSearchParams) {
    return { contentType: "application/x-www-form-urlencoded", body };
  }
  if (selectedContentType.includes("json")) {
    return { contentType: selectedContentType, body: JSON.stringify(body) };
  }
  const params = new URLSearchParams();
  appendTwilioParams(params, body);
  return { contentType: "application/x-www-form-urlencoded", body: params };
}

function appendTwilioParams(params: URLSearchParams, value: TwilioVoiceFormValue, prefix?: string): void {
  if (value === undefined || value === null) return;
  if (Array.isArray(value)) {
    for (const item of value) appendTwilioParams(params, item, prefix);
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      appendTwilioParams(params, child, prefix ? `${prefix}[${key}]` : key);
    }
    return;
  }
  if (!prefix) throw new Error("Twilio request parameter key is required.");
  params.append(prefix, String(value));
}

function twilioBasicAuth(auth: Pick<TwilioVoiceClientOptions, "accountSid" | "authToken" | "apiKeySid" | "apiKeySecret">) {
  if (auth.apiKeySid && auth.apiKeySecret) {
    return { username: auth.apiKeySid, password: auth.apiKeySecret };
  }
  if (auth.authToken) {
    return { username: auth.accountSid, password: auth.authToken };
  }
  throw new Error("Twilio REST API calls require authToken or apiKeySid/apiKeySecret.");
}
