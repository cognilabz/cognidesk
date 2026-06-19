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
export const MailgunFullApiDKIMSecurityOperationKeys = [
  "PUT /v1/dkim_management/domains/{name}/rotation",
  "POST /v1/dkim_management/domains/{name}/rotate"
] as const;
export type MailgunFullApiDKIMSecurityOperationKey = typeof MailgunFullApiDKIMSecurityOperationKeys[number];
// End hardened literal operation keys.

export interface MailgunFullApiDKIMSecurityOperationPathParamMap {
  "PUT /v1/dkim_management/domains/{name}/rotation": { "name": MailgunFullApiPathParamValue };
  "POST /v1/dkim_management/domains/{name}/rotate": { "name": MailgunFullApiPathParamValue };
}

export interface MailgunFullApiDKIMSecurityOperationRequestMap {
  "PUT /v1/dkim_management/domains/{name}/rotation": MailgunFullApiOperationInput<"PUT /v1/dkim_management/domains/{name}/rotation">;
  "POST /v1/dkim_management/domains/{name}/rotate": MailgunFullApiOperationInput<"POST /v1/dkim_management/domains/{name}/rotate">;
}

export interface MailgunFullApiDKIMSecurityGeneratedClient {
  UpdateAutomaticSenderSecurityDKIMKeyRotationForADomain(...args: MailgunFullApiOperationArgs<"PUT /v1/dkim_management/domains/{name}/rotation">): Promise<MailgunFullApiOperationResponseMap["PUT /v1/dkim_management/domains/{name}/rotation"]>;
  RotateAutomaticSenderSecurityDKIMKeyForADomain(...args: MailgunFullApiOperationArgs<"POST /v1/dkim_management/domains/{name}/rotate">): Promise<MailgunFullApiOperationResponseMap["POST /v1/dkim_management/domains/{name}/rotate"]>;
}

export const MailgunFullApiDKIMSecurityGeneratedFunctionNames = [
  "UpdateAutomaticSenderSecurityDKIMKeyRotationForADomain",
  "RotateAutomaticSenderSecurityDKIMKeyForADomain"
] as const satisfies readonly (keyof MailgunFullApiDKIMSecurityGeneratedClient)[];

export function createMailgunFullApiDKIMSecurityGeneratedClient(
  callOperation: MailgunGeneratedOperationCaller,
): MailgunFullApiDKIMSecurityGeneratedClient {
  return {
    UpdateAutomaticSenderSecurityDKIMKeyRotationForADomain: (...args) => callOperation("PUT /v1/dkim_management/domains/{name}/rotation", ...(args as MailgunFullApiOperationArgs<"PUT /v1/dkim_management/domains/{name}/rotation">)),
    RotateAutomaticSenderSecurityDKIMKeyForADomain: (...args) => callOperation("POST /v1/dkim_management/domains/{name}/rotate", ...(args as MailgunFullApiOperationArgs<"POST /v1/dkim_management/domains/{name}/rotate">)),
  };
}
