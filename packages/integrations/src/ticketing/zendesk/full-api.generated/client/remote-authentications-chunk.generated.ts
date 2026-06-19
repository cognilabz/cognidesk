// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiRemoteAuthenticationsOperationKeys = [
  "ListRemoteAuthentications"
] as const;
export type ZendeskFullApiRemoteAuthenticationsOperationKey = typeof ZendeskFullApiRemoteAuthenticationsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiRemoteAuthenticationsOperationPathParamMap {
  "ListRemoteAuthentications": {};
}

export interface ZendeskFullApiRemoteAuthenticationsOperationRequestMap {
  "ListRemoteAuthentications": ZendeskFullApiOperationInput<"ListRemoteAuthentications">;
}

export interface ZendeskFullApiRemoteAuthenticationsGeneratedClient {
  ListRemoteAuthentications(...args: ZendeskFullApiOperationArgs<"ListRemoteAuthentications">): Promise<ZendeskFullApiOperationResponseMap["ListRemoteAuthentications"]>;
}

export const ZendeskFullApiRemoteAuthenticationsGeneratedFunctionNames = [
  "ListRemoteAuthentications"
] as const satisfies readonly (keyof ZendeskFullApiRemoteAuthenticationsGeneratedClient)[];

export function createZendeskFullApiRemoteAuthenticationsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiRemoteAuthenticationsGeneratedClient {
  return {
    ListRemoteAuthentications: (...args) => callOperation("ListRemoteAuthentications", ...(args as ZendeskFullApiOperationArgs<"ListRemoteAuthentications">)),
  };
}
