import type { CognideskHttpCorsOptions } from "./types.js";

export interface ResponseOptions {
  cors?: boolean | CognideskHttpCorsOptions;
  request?: Request;
}

export class HttpInputError extends Error {
  readonly status = 400;
}

export async function readJson<T = unknown>(request: Request): Promise<T> {
  if (!request.body) return {} as T;
  try {
    return await request.json() as T;
  } catch {
    throw new HttpInputError("Request body must be valid JSON.");
  }
}

export function json(body: unknown, status: number, options: ResponseOptions) {
  return new Response(JSON.stringify(body), {
    status,
    headers: withCors({
      "content-type": "application/json; charset=utf-8",
    }, options),
  });
}

export function emptyResponse(status: number, options: ResponseOptions) {
  return new Response(null, {
    status,
    headers: withCors({}, options),
  });
}

export function withCors(headers: Record<string, string>, options: ResponseOptions) {
  const corsHeaders = getCorsHeaders(options);
  if (Object.keys(corsHeaders).length === 0) return headers;
  return mergeHeaderRecords(headers, corsHeaders);
}

export function responseWithCors(response: Response, options: ResponseOptions) {
  const corsHeaders = getCorsHeaders(options);
  if (Object.keys(corsHeaders).length === 0) return response;
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(corsHeaders)) {
    if (key === "vary") {
      headers.set("vary", mergeVary(headers.get("vary"), value));
    } else if (!headers.has(key)) {
      headers.set(key, value);
    }
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function getCorsHeaders(options: ResponseOptions): Record<string, string> {
  const cors = options.cors;
  if (!cors) return {};
  if (cors === true) {
    return {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET,POST,OPTIONS",
      "access-control-allow-headers": "content-type,authorization",
    };
  }

  const origin = options.request?.headers.get("origin");
  if (!origin || !isAllowedOrigin(cors, origin)) return {};

  return {
    "access-control-allow-origin": origin,
    "access-control-allow-methods": formatHeaderList(cors.methods, "GET,POST,OPTIONS"),
    "access-control-allow-headers": formatHeaderList(cors.allowedHeaders, "content-type,authorization"),
    ...(cors.exposedHeaders ? { "access-control-expose-headers": formatHeaderList(cors.exposedHeaders, "") } : {}),
    ...(cors.credentials ? { "access-control-allow-credentials": "true" } : {}),
    ...(cors.maxAgeSeconds !== undefined ? { "access-control-max-age": String(cors.maxAgeSeconds) } : {}),
    vary: "Origin",
  };
}

function isAllowedOrigin(cors: CognideskHttpCorsOptions, origin: string) {
  const origins = Array.isArray(cors.origins) ? cors.origins : [cors.origins];
  return origins.includes(origin);
}

function formatHeaderList(value: string | readonly string[] | undefined, fallback: string): string {
  if (value === undefined) return fallback;
  return typeof value === "string" ? value : value.join(",");
}

function mergeHeaderRecords(headers: Record<string, string>, corsHeaders: Record<string, string>) {
  const merged = { ...headers };
  for (const [key, value] of Object.entries(corsHeaders)) {
    if (key === "vary") {
      merged.vary = mergeVary(merged.vary, value);
    } else if (merged[key] === undefined) {
      merged[key] = value;
    }
  }
  return merged;
}

function mergeVary(existing: string | null | undefined, value: string) {
  if (!existing) return value;
  const existingValues = existing.split(",").map((entry) => entry.trim()).filter(Boolean);
  const normalizedValue = value.toLowerCase();
  if (existingValues.some((entry) => entry.toLowerCase() === normalizedValue)) return existing;
  return `${existing}, ${value}`;
}
