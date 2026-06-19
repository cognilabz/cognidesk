import type {
  GenesysPureConnectContactCenterClientOptions,
  GenesysPureConnectHttpMethod,
  GenesysPureConnectJsonObject,
  GenesysPureConnectProviderPayload,
  GenesysPureConnectProviderResponse,
  GenesysPureConnectRequestInput,
  GenesysPureConnectSessionInput,
} from "./contracts.js";

export interface GenesysPureConnectRequestInternalInput {
  options: GenesysPureConnectContactCenterClientOptions;
  fetch: typeof fetch;
  method: GenesysPureConnectHttpMethod;
  path: string;
  body?: BodyInit | GenesysPureConnectProviderPayload | undefined;
  headers?: Record<string, string> | undefined;
  acceptLanguage?: string | undefined;
  idempotencyKey?: string | undefined;
}

export async function genesysPureConnectRequest(
  input: GenesysPureConnectRequestInternalInput & { returnResponse?: false | undefined },
): Promise<GenesysPureConnectProviderResponse>;
export async function genesysPureConnectRequest(
  input: GenesysPureConnectRequestInternalInput & { returnResponse: true },
): Promise<Response>;
export async function genesysPureConnectRequest(
  input: GenesysPureConnectRequestInternalInput & { returnResponse?: boolean | undefined },
): Promise<GenesysPureConnectJsonObject | Response> {
  const requestBody = requestBodyInit(input.body);
  const response = await input.fetch(providerUrl(input.options.icwsBaseUrl, input.path), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.acceptLanguage ? { "accept-language": input.acceptLanguage } : {}),
      ...(requestBody && typeof requestBody === "string" ? { "content-type": "application/json" } : {}),
      ...(input.options.authorizationHeader ? { authorization: input.options.authorizationHeader } : {}),
      ...(input.idempotencyKey ? { "idempotency-key": input.idempotencyKey } : {}),
      ...(input.headers ?? {}),
    },
    ...(requestBody ? { body: requestBody } : {}),
  });
  if (input.returnResponse && response.ok) return response;
  return parseProviderResponse(response, "Genesys PureConnect");
}

export function pureConnectRequestInput(
  options: GenesysPureConnectContactCenterClientOptions,
  fetchImpl: typeof fetch,
  input: GenesysPureConnectRequestInput & GenesysPureConnectSessionInput,
): GenesysPureConnectRequestInternalInput {
  return {
    options,
    fetch: fetchImpl,
    method: input.method,
    path: resolvePureConnectSessionPath(input.path, input.sessionId ?? options.sessionId),
    ...(input.body !== undefined ? { body: input.body } : {}),
    ...(input.headers !== undefined ? { headers: input.headers } : {}),
    ...(input.acceptLanguage !== undefined ? { acceptLanguage: input.acceptLanguage } : {}),
    ...(input.idempotencyKey !== undefined ? { idempotencyKey: input.idempotencyKey } : {}),
  };
}

export function pureConnectSessionHeaders(
  options: GenesysPureConnectContactCenterClientOptions,
  input: GenesysPureConnectSessionInput,
) {
  const csrfToken = input.csrfToken ?? options.csrfToken;
  const sessionCookie = input.sessionCookie ?? options.sessionCookie;
  return {
    ...(csrfToken ? { "inin-icws-csrf-token": csrfToken } : {}),
    ...(sessionCookie ? { cookie: sessionCookie } : {}),
  };
}

function resolvePureConnectSessionPath(path: string, sessionId?: string) {
  if (!path.includes("{sessionId}")) return path;
  if (!sessionId) throw new Error("Genesys PureConnect ICWS sessionId is required.");
  return path.replaceAll("{sessionId}", encodeURIComponent(sessionId));
}

function requestBodyInit(body: BodyInit | GenesysPureConnectProviderPayload | undefined) {
  if (body === undefined) return undefined;
  if (
    typeof body === "string"
    || body instanceof URLSearchParams
    || body instanceof FormData
    || body instanceof Blob
    || body instanceof ArrayBuffer
  ) {
    return body;
  }
  return JSON.stringify(body);
}

function providerUrl(baseUrl: string, path: string) {
  if (!baseUrl) throw new Error("Genesys PureConnect icwsBaseUrl is required.");
  return new URL(path, baseUrl.replace(/\/+$/, "")).toString();
}

async function parseProviderResponse(response: Response, provider: string) {
  const text = await response.text();
  const body = text ? JSON.parse(text) as GenesysPureConnectJsonObject : {};
  if (!response.ok) {
    throw new Error(typeof body.message === "string" ? body.message : `${provider} API returned ${response.status}.`);
  }
  return body;
}
