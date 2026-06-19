// Generated endpoint chunk for MailgunFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  MailgunGeneratedOperationCaller,
  MailgunFullApiOperationArgs,
  MailgunFullApiOperationInput,
  MailgunFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { MailgunFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const MailgunFullApiDomainTrackingOperationKeys = [
  "GET /v3/domains/{name}/tracking",
  "PUT /v3/domains/{name}/tracking/click",
  "PUT /v3/domains/{name}/tracking/open",
  "PUT /v3/domains/{name}/tracking/unsubscribe",
  "GET /v2/x509/{domain}/status",
  "PUT /v2/x509/{domain}",
  "POST /v2/x509/{domain}"
] as const;
export type MailgunFullApiDomainTrackingOperationKey = typeof MailgunFullApiDomainTrackingOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiDomainTrackingOperationPathParamMap {
  "GET /v3/domains/{name}/tracking": { "name": MailgunFullApiPathParamValue };
  "PUT /v3/domains/{name}/tracking/click": { "name": MailgunFullApiPathParamValue };
  "PUT /v3/domains/{name}/tracking/open": { "name": MailgunFullApiPathParamValue };
  "PUT /v3/domains/{name}/tracking/unsubscribe": { "name": MailgunFullApiPathParamValue };
  "GET /v2/x509/{domain}/status": { "domain": MailgunFullApiPathParamValue };
  "PUT /v2/x509/{domain}": { "domain": MailgunFullApiPathParamValue };
  "POST /v2/x509/{domain}": { "domain": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiDomainTrackingOperationRequestMap {
  "GET /v3/domains/{name}/tracking": MailgunFullApiOperationInput<"GET /v3/domains/{name}/tracking">;
  "PUT /v3/domains/{name}/tracking/click": MailgunFullApiOperationInput<"PUT /v3/domains/{name}/tracking/click">;
  "PUT /v3/domains/{name}/tracking/open": MailgunFullApiOperationInput<"PUT /v3/domains/{name}/tracking/open">;
  "PUT /v3/domains/{name}/tracking/unsubscribe": MailgunFullApiOperationInput<"PUT /v3/domains/{name}/tracking/unsubscribe">;
  "GET /v2/x509/{domain}/status": MailgunFullApiOperationInput<"GET /v2/x509/{domain}/status">;
  "PUT /v2/x509/{domain}": MailgunFullApiOperationInput<"PUT /v2/x509/{domain}">;
  "POST /v2/x509/{domain}": MailgunFullApiOperationInput<"POST /v2/x509/{domain}">;
}

export interface MailgunFullApiDomainTrackingGeneratedClient {
  GetTrackingSettings(...args: MailgunFullApiOperationArgs<"GET /v3/domains/{name}/tracking">): Promise<MailgunFullApiOperationResponseMap["GET /v3/domains/{name}/tracking"]>;
  UpdateClickTrackingSettings(...args: MailgunFullApiOperationArgs<"PUT /v3/domains/{name}/tracking/click">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/domains/{name}/tracking/click"]>;
  UpdateOpenTrackingSettings(...args: MailgunFullApiOperationArgs<"PUT /v3/domains/{name}/tracking/open">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/domains/{name}/tracking/open"]>;
  UpdateUnsubscribeTrackingSettings(...args: MailgunFullApiOperationArgs<"PUT /v3/domains/{name}/tracking/unsubscribe">): Promise<MailgunFullApiOperationResponseMap["PUT /v3/domains/{name}/tracking/unsubscribe"]>;
  TrackingCertificateGetCertificateAndStatus(...args: MailgunFullApiOperationArgs<"GET /v2/x509/{domain}/status">): Promise<MailgunFullApiOperationResponseMap["GET /v2/x509/{domain}/status"]>;
  TrackingCertificateRegenerateExpiredCertificate(...args: MailgunFullApiOperationArgs<"PUT /v2/x509/{domain}">): Promise<MailgunFullApiOperationResponseMap["PUT /v2/x509/{domain}"]>;
  TrackingCertificateGenerate(...args: MailgunFullApiOperationArgs<"POST /v2/x509/{domain}">): Promise<MailgunFullApiOperationResponseMap["POST /v2/x509/{domain}"]>;
}

export const MailgunFullApiDomainTrackingGeneratedFunctionNames = [
  "GetTrackingSettings",
  "UpdateClickTrackingSettings",
  "UpdateOpenTrackingSettings",
  "UpdateUnsubscribeTrackingSettings",
  "TrackingCertificateGetCertificateAndStatus",
  "TrackingCertificateRegenerateExpiredCertificate",
  "TrackingCertificateGenerate"
] as const satisfies readonly (keyof MailgunFullApiDomainTrackingGeneratedClient)[];

export function createMailgunFullApiDomainTrackingGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiDomainTrackingGeneratedClient {
  return {
    GetTrackingSettings: (...args) => callOperation("GET /v3/domains/{name}/tracking", ...(args as MailgunFullApiOperationArgs<"GET /v3/domains/{name}/tracking">)),
    UpdateClickTrackingSettings: (...args) => callOperation("PUT /v3/domains/{name}/tracking/click", ...(args as MailgunFullApiOperationArgs<"PUT /v3/domains/{name}/tracking/click">)),
    UpdateOpenTrackingSettings: (...args) => callOperation("PUT /v3/domains/{name}/tracking/open", ...(args as MailgunFullApiOperationArgs<"PUT /v3/domains/{name}/tracking/open">)),
    UpdateUnsubscribeTrackingSettings: (...args) => callOperation("PUT /v3/domains/{name}/tracking/unsubscribe", ...(args as MailgunFullApiOperationArgs<"PUT /v3/domains/{name}/tracking/unsubscribe">)),
    TrackingCertificateGetCertificateAndStatus: (...args) => callOperation("GET /v2/x509/{domain}/status", ...(args as MailgunFullApiOperationArgs<"GET /v2/x509/{domain}/status">)),
    TrackingCertificateRegenerateExpiredCertificate: (...args) => callOperation("PUT /v2/x509/{domain}", ...(args as MailgunFullApiOperationArgs<"PUT /v2/x509/{domain}">)),
    TrackingCertificateGenerate: (...args) => callOperation("POST /v2/x509/{domain}", ...(args as MailgunFullApiOperationArgs<"POST /v2/x509/{domain}">)),
  };
}
