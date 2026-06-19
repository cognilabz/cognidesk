import type { SipAddress } from "./contracts.js";

export function buildSipAddress(address: SipAddress | string) {
  if (typeof address === "string") return address;
  if (!address.displayName) return address.uri;
  return `"${address.displayName.replaceAll("\"", "\\\"")}" <${address.uri}>`;
}
