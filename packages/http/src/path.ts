export function normalizeBasePath(basePath: string) {
  if (!basePath || basePath === "/") return "";
  return basePath.startsWith("/") ? basePath.replace(/\/$/, "") : `/${basePath.replace(/\/$/, "")}`;
}

export function stripBasePath(pathname: string, basePath: string) {
  if (!basePath) return pathname;
  if (pathname === basePath) return "/";
  if (!pathname.startsWith(`${basePath}/`)) return null;
  return pathname.slice(basePath.length);
}

export function parseOptionalInteger(value: string | null) {
  if (value === null || value === "") return undefined;
  if (!/^(0|[1-9]\d*)$/.test(value)) {
    throw new HttpInputError("after must be a non-negative integer.");
  }
  return Number(value);
}
import { HttpInputError } from "./responses.js";
