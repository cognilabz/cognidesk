// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiHLSSycurioIntegrationOperationKeys = [
  "sycurioLogin"
] as const;
export type TalkdeskFullApiHLSSycurioIntegrationOperationKey = typeof TalkdeskFullApiHLSSycurioIntegrationOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiHLSSycurioIntegrationOperationPathParamMap {
  "sycurioLogin": {};
}

export interface TalkdeskFullApiHLSSycurioIntegrationOperationRequestMap {
  "sycurioLogin": TalkdeskFullApiOperationInput<"sycurioLogin">;
}

export interface TalkdeskFullApiHLSSycurioIntegrationGeneratedClient {
  SycurioLogin(...args: TalkdeskFullApiOperationArgs<"sycurioLogin">): Promise<TalkdeskFullApiOperationResponseMap["sycurioLogin"]>;
}

export const TalkdeskFullApiHLSSycurioIntegrationGeneratedFunctionNames = [
  "SycurioLogin"
] as const satisfies readonly (keyof TalkdeskFullApiHLSSycurioIntegrationGeneratedClient)[];

export function createTalkdeskFullApiHLSSycurioIntegrationGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiHLSSycurioIntegrationGeneratedClient {
  return {
    SycurioLogin: (...args) => callOperation("sycurioLogin", ...(args as TalkdeskFullApiOperationArgs<"sycurioLogin">)),
  };
}
