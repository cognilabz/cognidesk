import type {
  AmazonConnectClientOptions,
  AmazonConnectHttpMethod,
  AmazonConnectJsonObject,
  AmazonConnectOperationRequestInput,
  AmazonConnectProviderPayload,
  AmazonConnectProviderQuery,
} from "./contracts.js";

export function connectBaseUrl(region: string) {
  if (!region) throw new Error("Amazon Connect region is required.");
  return `https://connect.${region}.amazonaws.com`;
}

export function participantBaseUrl(region: string) {
  if (!region) throw new Error("Amazon Connect region is required.");
  return `https://participant.connect.${region}.amazonaws.com`;
}

export async function amazonConnectRequest<T>(input: {
  url: URL;
  method: AmazonConnectHttpMethod;
  options: AmazonConnectClientOptions;
  fetch: typeof fetch;
  body?: AmazonConnectProviderPayload;
}): Promise<T> {
  const response = await input.fetch(input.url.toString(), {
    method: input.method,
    headers: {
      accept: "application/json",
      ...(input.body ? { "content-type": "application/json" } : {}),
      ...(input.options.authorizationHeader ? { authorization: input.options.authorizationHeader } : {}),
      ...(input.options.signedHeaders ?? {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as AmazonConnectJsonObject : {};
  if (!response.ok) {
    throw new Error(typeof body.Message === "string" ? body.Message : `Amazon Connect API returned ${response.status}.`);
  }
  return body as T;
}

export async function amazonConnectGeneratedRequest<T>(input: {
  operation: {
    method: AmazonConnectHttpMethod;
    path: string;
    serviceKey: string;
    endpointPrefix: string;
  };
  options: AmazonConnectClientOptions;
  fetch: typeof fetch;
  input: AmazonConnectOperationRequestInput;
}): Promise<T> {
  const url = generatedAmazonConnectUrl(input.options, input.operation, input.input.pathParams, input.input.query);
  const body = input.input.body === undefined ? undefined : JSON.stringify(input.input.body);
  const participantBearer = input.operation.serviceKey === "connectparticipant" ? input.input.bearerToken : undefined;
  if (input.operation.serviceKey === "connectparticipant" && !participantBearer && !input.options.authorizationHeader) {
    throw new Error("Amazon Connect Participant generated operations require bearerToken or signed authorizationHeader.");
  }
  const response = await input.fetch(url.toString(), {
    method: input.operation.method,
    headers: {
      accept: "application/json",
      ...(body ? { "content-type": "application/json" } : {}),
      ...(participantBearer ? { "x-amz-bearer": participantBearer } : {}),
      ...(!participantBearer && input.options.authorizationHeader ? { authorization: input.options.authorizationHeader } : {}),
      ...(input.options.signedHeaders ?? {}),
      ...(input.input.headers ?? {}),
    },
    ...(body ? { body } : {}),
  });
  const text = await response.text();
  const parsed = text ? JSON.parse(text) as AmazonConnectJsonObject : {};
  if (!response.ok) {
    throw new Error(typeof parsed.Message === "string" ? parsed.Message : `Amazon Connect API returned ${response.status}.`);
  }
  return parsed as T;
}

export async function amazonConnectParticipantRequest(input: {
  url: URL;
  bearer: string;
  fetch: typeof fetch;
  body: AmazonConnectProviderPayload;
}) {
  if (!input.bearer) throw new Error("Amazon Connect Participant Service bearer token is required.");
  const response = await input.fetch(input.url.toString(), {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "x-amz-bearer": input.bearer,
    },
    body: JSON.stringify(input.body),
  });
  const text = await response.text();
  const body = text ? JSON.parse(text) as AmazonConnectJsonObject : {};
  if (!response.ok) {
    throw new Error(typeof body.Message === "string" ? body.Message : `Amazon Connect Participant Service returned ${response.status}.`);
  }
  return body;
}

function generatedAmazonConnectUrl(
  options: AmazonConnectClientOptions,
  operation: { path: string; endpointPrefix: string },
  pathParams: Record<string, string | number | boolean | undefined> = {},
  query?: AmazonConnectProviderQuery,
) {
  const resolvedPath = operation.path.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams[key];
    if (value === undefined) throw new Error(`Missing Amazon Connect path parameter '${key}'.`);
    return encodeURIComponent(String(value));
  });
  const base = options.endpointOverrides?.[operation.endpointPrefix]
    ?? `https://${operation.endpointPrefix}.${options.region}.amazonaws.com`;
  const url = new URL(resolvedPath, base);
  appendAmazonConnectQuery(url.searchParams, query);
  return url;
}

function appendAmazonConnectQuery(params: URLSearchParams, query?: AmazonConnectProviderQuery) {
  for (const [key, value] of Object.entries(query ?? {})) {
    if (value === undefined || value === null || value === "") continue;
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item !== undefined && item !== null && item !== "") params.append(key, String(item));
      }
      continue;
    }
    params.set(key, String(value));
  }
}
