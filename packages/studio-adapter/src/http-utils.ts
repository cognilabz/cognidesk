export function normalizeBasePath(basePath: string) {
  const absoluteBasePath = basePath.startsWith("/") ? basePath : `/${basePath}`;
  const normalized = absoluteBasePath.replace(/\/+$/, "");
  return normalized === "" ? "" : normalized;
}

export function stripBasePath(pathname: string, basePath: string) {
  if (basePath === "") return pathname || "/";
  if (pathname === basePath) return "/";
  if (pathname.startsWith(`${basePath}/`)) return pathname.slice(basePath.length);
  return null;
}

export function isAuthorized(request: Request, serviceToken?: string) {
  if (!serviceToken) return true;
  const authorization = request.headers.get("authorization");
  const tokenHeader = request.headers.get("x-cognidesk-studio-token");
  return authorization === `Bearer ${serviceToken}` || tokenHeader === `Bearer ${serviceToken}`;
}

export function withCors(response: Response, cors: boolean) {
  if (!cors) return response;
  response.headers.set("access-control-allow-origin", "*");
  response.headers.set("access-control-allow-methods", "GET,POST,OPTIONS");
  response.headers.set("access-control-allow-headers", "authorization,content-type,x-cognidesk-studio-token");
  return response;
}

export function coerceLimit(value: string | null, fallback: number, max: number) {
  const parsed = value ? Number(value) : fallback;
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback;
  return Math.min(max, Math.floor(parsed));
}
