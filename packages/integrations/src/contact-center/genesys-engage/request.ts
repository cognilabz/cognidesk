import type {
  GenesysEngageContactCenterClientOptions,
  GenesysEngageHttpMethod,
  GenesysEngageJsonObject,
} from "./contracts.js";

export interface GenesysEngageRequestInternalInput {
  options: GenesysEngageContactCenterClientOptions;
  fetch: typeof fetch;
  method: GenesysEngageHttpMethod;
  path: string;
  body?: BodyInit | GenesysEngageJsonObject | undefined;
  contentType?: string;
  headers?: Record<string, string> | undefined;
  idempotencyKey?: string | undefined;
}

export async function genesysEngageRequest<T = GenesysEngageJsonObject>(
  input: GenesysEngageRequestInternalInput & { returnResponse?: false | undefined },
): Promise<T>;
export async function genesysEngageRequest(
  input: GenesysEngageRequestInternalInput & { returnResponse: true },
): Promise<Response>;
export async function genesysEngageRequest<T = GenesysEngageJsonObject>(
  input: GenesysEngageRequestInternalInput & { returnResponse?: boolean | undefined },
): Promise<T | Response> {
  const requestBody = requestBodyInit(input.body);
  const response = await input.fetch(providerUrl(input.options.gmsBaseUrl, input.path), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.contentType && !(input.body instanceof FormData) ? { "content-type": input.contentType } : {}),
      ...(input.options.authorizationHeader ? { authorization: input.options.authorizationHeader } : {}),
      ...(input.idempotencyKey ? { "idempotency-key": input.idempotencyKey } : {}),
      ...(input.headers ?? {}),
    },
    ...(requestBody ? { body: requestBody } : {}),
  });
  if (input.returnResponse && response.ok) return response;
  return parseProviderResponse(response, "Genesys Engage") as Promise<T>;
}

export function basePath(options: GenesysEngageContactCenterClientOptions) {
  return options.apiBasePath ?? "/genesys/1";
}

function requestBodyInit(body: BodyInit | GenesysEngageJsonObject | undefined) {
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
  if (!baseUrl) throw new Error("Genesys Engage gmsBaseUrl is required.");
  return new URL(path, baseUrl.replace(/\/+$/, "")).toString();
}

async function parseProviderResponse(response: Response, provider: string) {
  const text = await response.text();
  const body = text ? JSON.parse(text) as GenesysEngageJsonObject : {};
  if (!response.ok) {
    throw new Error(typeof body.message === "string" ? body.message : `${provider} API returned ${response.status}.`);
  }
  return body;
}
