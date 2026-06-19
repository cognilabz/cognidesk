import type {
  VonageEndpoint,
  VonageHttpMethod,
  VonageOperationRequestInput,
  VonageOutboundCallInput,
  VonageVoiceClientOptions,
  VonageVoiceJsonObject,
  VonageVoiceProviderPayload,
} from "./contracts.js";
import { createVonageJwt } from "./credentials.js";

export async function vonageRequest<T>(input: {
  url: string;
  method: "GET" | "POST" | "PUT";
  options: VonageVoiceClientOptions;
  fetch: typeof fetch;
  body?: VonageVoiceProviderPayload | undefined;
}): Promise<T> {
  const jwt = await resolveVonageJwt(input.options);
  const response = await input.fetch(input.url, {
    method: input.method,
    headers: {
      authorization: `Bearer ${jwt}`,
      accept: "application/json",
      ...(input.body ? { "content-type": "application/json" } : {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  const text = await response.text();
  const body = (text ? JSON.parse(text) : {}) as T & { title?: string; detail?: string; message?: string };
  if (!response.ok) {
    throw new Error(body.detail ?? body.message ?? body.title ?? `Vonage Voice API returned ${response.status}.`);
  }
  return body as T;
}

export async function vonageOperationRequest<T>(input: {
  operation: {
    method: VonageHttpMethod;
    path: string;
    serverUrl: string;
    authSchemes: readonly string[];
  };
  input: VonageOperationRequestInput;
  options: VonageVoiceClientOptions;
  apiBaseUrl: string;
  restBaseUrl: string;
  fetch: typeof fetch;
}): Promise<T> {
  const bodyParts = [input.input.json, input.input.form, input.input.body].filter((value) => value !== undefined);
  if (bodyParts.length > 1) {
    throw new Error("Only one of json, form, or body can be supplied for a Vonage operation request.");
  }
  const url = vonageOperationUrl(input.operation.serverUrl, input.operation.path, {
    pathParams: input.input.pathParams,
    query: input.input.query,
    apiBaseUrl: input.apiBaseUrl,
    restBaseUrl: input.restBaseUrl,
  });
  const encodedBody = encodeVonageOperationBody(input.input);
  const headers = await vonageOperationHeaders({
    authSchemes: input.operation.authSchemes,
    options: input.options,
    hasJson: input.input.json !== undefined,
    ...(input.input.headers ? { customHeaders: input.input.headers } : {}),
  });
  const response = await input.fetch(url.toString(), {
    method: input.operation.method,
    headers: {
      accept: "application/json",
      ...headers,
      ...encodedBody.headers,
    },
    ...(encodedBody.body !== undefined ? { body: encodedBody.body } : {}),
    ...(input.input.signal ? { signal: input.input.signal } : {}),
  });
  const text = await response.text();
  const responseBody = (text ? JSON.parse(text) : {}) as T & { title?: string; detail?: string; message?: string };
  if (!response.ok) {
    throw new Error(responseBody.detail ?? responseBody.message ?? responseBody.title ?? `Vonage API returned ${response.status}.`);
  }
  return responseBody as T;
}

export async function resolveVonageJwt(options: VonageVoiceClientOptions): Promise<string> {
  if (options.jwtFactory) return await options.jwtFactory();
  if (!options.privateKey) throw new Error("Vonage private key or jwtFactory is required.");
  return createVonageJwt({
    applicationId: options.applicationId,
    privateKey: options.privateKey,
  });
}

export function normalizeOutboundCall(
  input: VonageOutboundCallInput,
  options: VonageVoiceClientOptions,
): VonageVoiceJsonObject {
  return {
    to: input.to,
    ...(input.from ? { from: input.from } : {}),
    ...(input.answerUrl ? { answer_url: input.answerUrl } : {}),
    ...(input.ncco ? { ncco: input.ncco } : {}),
    ...(input.answerMethod ? { answer_method: input.answerMethod } : {}),
    ...(input.eventUrl ?? options.defaultEventUrl ? { event_url: input.eventUrl ?? options.defaultEventUrl } : {}),
    ...(input.eventMethod ? { event_method: input.eventMethod } : {}),
    ...(input.machineDetection ? { machine_detection: input.machineDetection } : {}),
    ...(input.advancedMachineDetection ? { advanced_machine_detection: input.advancedMachineDetection } : {}),
    ...(input.randomFromNumber !== undefined ? { random_from_number: input.randomFromNumber } : {}),
    ...(input.lengthTimer !== undefined ? { length_timer: input.lengthTimer } : {}),
    ...(input.ringingTimer !== undefined ? { ringing_timer: input.ringingTimer } : {}),
  };
}

export function assertVonageOutboundCallInput(
  input: VonageOutboundCallInput,
  options: VonageVoiceClientOptions,
) {
  const hasAnswerFlow = Boolean(input.answerUrl?.length || input.ncco?.length);
  if (!hasAnswerFlow) {
    throw new Error("Vonage outbound calls require answerUrl or embedded ncco.");
  }
  if (!input.eventUrl?.length && !options.defaultEventUrl?.length) {
    throw new Error("Vonage outbound calls require eventUrl or defaultEventUrl so call events are observable.");
  }
  if (input.randomFromNumber && input.from) {
    throw new Error("Vonage outbound calls cannot combine from with randomFromNumber.");
  }
  if (!input.randomFromNumber && !input.from) {
    throw new Error("Vonage outbound calls require from unless randomFromNumber is enabled.");
  }
  if (usesVonageAppEndpoint(input.to) || input.from?.type === "app") {
    throw new Error("Vonage app endpoints require the Voice v2 /calls API, which this v1 client does not implement.");
  }
}

function vonageOperationUrl(
  serverUrl: string,
  pathTemplate: string,
  input: {
    pathParams?: VonageOperationRequestInput["pathParams"];
    query?: VonageOperationRequestInput["query"];
    apiBaseUrl: string;
    restBaseUrl: string;
  },
) {
  const base = resolveVonageOperationBaseUrl(serverUrl, input.apiBaseUrl, input.restBaseUrl);
  const expandedPath = pathTemplate.replace(/\{([^}]+)\}/g, (_match, rawName: string) => {
    const value = input.pathParams?.[rawName];
    if (value === undefined) throw new Error(`Missing Vonage path parameter '${rawName}'.`);
    return encodeURIComponent(String(value));
  });
  const path = expandedPath === "/" ? "" : expandedPath.startsWith("/") ? expandedPath : `/${expandedPath}`;
  const url = new URL(`${base}${path}`);
  const query = vonageQueryParams(input.query);
  for (const [key, value] of query) url.searchParams.append(key, value);
  return url;
}

function resolveVonageOperationBaseUrl(serverUrl: string, apiBaseUrl: string, restBaseUrl: string) {
  const normalized = serverUrl.replace(/\/+$/, "");
  if (normalized.startsWith("https://api.nexmo.com")) {
    return `${apiBaseUrl}${normalized.slice("https://api.nexmo.com".length)}`.replace(/\/+$/, "");
  }
  if (normalized.startsWith("https://rest.nexmo.com")) {
    return `${restBaseUrl}${normalized.slice("https://rest.nexmo.com".length)}`.replace(/\/+$/, "");
  }
  return normalized;
}

async function vonageOperationHeaders(input: {
  authSchemes: readonly string[];
  options: VonageVoiceClientOptions;
  hasJson: boolean;
  customHeaders?: Record<string, string>;
}) {
  const headers: Record<string, string> = {
    ...(input.hasJson ? { "content-type": "application/json" } : {}),
    ...input.customHeaders,
  };
  if (headers.authorization) return headers;
  if (input.authSchemes.includes("basicAuth")) {
    if (!input.options.apiKey || !input.options.apiSecret) {
      throw new Error("Vonage apiKey and apiSecret are required for Basic-authenticated operations.");
    }
    headers.authorization = `Basic ${Buffer.from(`${input.options.apiKey}:${input.options.apiSecret}`).toString("base64")}`;
    return headers;
  }
  if (input.authSchemes.includes("bearerAuth")) {
    headers.authorization = `Bearer ${await resolveVonageJwt(input.options)}`;
  }
  return headers;
}

function encodeVonageOperationBody(input: VonageOperationRequestInput): { body?: BodyInit; headers: Record<string, string> } {
  if (input.json !== undefined) {
    return { body: JSON.stringify(input.json), headers: { "content-type": "application/json" } };
  }
  if (input.form !== undefined) {
    return { body: input.form, headers: {} };
  }
  if (input.body !== undefined) {
    return { body: input.body, headers: {} };
  }
  return { headers: {} };
}

function vonageQueryParams(values?: VonageOperationRequestInput["query"]) {
  if (!values) return new URLSearchParams();
  if (values instanceof URLSearchParams) return values;
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(values)) {
    if (value === undefined || value === null) continue;
    if (Array.isArray(value)) {
      for (const item of value) params.append(key, String(item));
    } else {
      params.append(key, String(value));
    }
  }
  return params;
}

function usesVonageAppEndpoint(endpoints: VonageEndpoint[]) {
  return endpoints.some((endpoint) => endpoint.type === "app");
}
