export function buildSocketUrl(input: {
  requestUrl: string;
  baseUrl?: string;
  basePath: string;
  pathPrefix: string;
  connectionId: string;
  token: string;
}) {
  const requestUrl = new URL(input.requestUrl);
  const base = input.baseUrl ? new URL(input.baseUrl) : requestUrl;
  const protocol = base.protocol === "https:" ? "wss:" : "ws:";
  const url = new URL(`${input.basePath}${input.pathPrefix}/${encodeURIComponent(input.connectionId)}/socket`, base);
  url.protocol = protocol;
  url.searchParams.set("token", input.token);
  return url.toString();
}

export function normalizePathPrefix(path: string) {
  const withSlash = path.startsWith("/") ? path : `/${path}`;
  return withSlash.endsWith("/") ? withSlash.slice(0, -1) : withSlash;
}
