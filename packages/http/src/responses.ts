export interface ResponseOptions {
  cors?: boolean;
}

export async function readJson<T>(request: Request): Promise<T> {
  if (!request.body) return {} as T;
  return await request.json() as T;
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
  if (!options.cors) return headers;
  return {
    ...headers,
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET,POST,OPTIONS",
    "access-control-allow-headers": "content-type,authorization",
  };
}
