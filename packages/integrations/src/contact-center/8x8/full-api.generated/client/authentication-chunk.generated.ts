// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiAuthenticationOperationKeys = [
  "chat-api-v2-actions-events:POST /oauth/v2/token",
  "chat-api-contactcenter:POST /oauth/v2/token"
] as const;
export type EightByEightContactCenterApiAuthenticationOperationKey = typeof EightByEightContactCenterApiAuthenticationOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiAuthenticationOperationPathParamMap {
  "chat-api-v2-actions-events:POST /oauth/v2/token": {};
  "chat-api-contactcenter:POST /oauth/v2/token": {};
}

export interface EightByEightContactCenterApiAuthenticationOperationRequestMap {
  "chat-api-v2-actions-events:POST /oauth/v2/token": EightByEightContactCenterApiOperationInput<"chat-api-v2-actions-events:POST /oauth/v2/token">;
  "chat-api-contactcenter:POST /oauth/v2/token": EightByEightContactCenterApiOperationInput<"chat-api-contactcenter:POST /oauth/v2/token">;
}

export interface EightByEightContactCenterApiAuthenticationGeneratedClient {
  Createaccesstoken(...args: EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:POST /oauth/v2/token">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-v2-actions-events:POST /oauth/v2/token"]>;
  Createaccesstoken2(...args: EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:POST /oauth/v2/token">): Promise<EightByEightContactCenterApiOperationResponseMap["chat-api-contactcenter:POST /oauth/v2/token"]>;
}

export const EightByEightContactCenterApiAuthenticationGeneratedFunctionNames = [
  "Createaccesstoken",
  "Createaccesstoken2"
] as const satisfies readonly (keyof EightByEightContactCenterApiAuthenticationGeneratedClient)[];

export function createEightByEightContactCenterApiAuthenticationGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiAuthenticationGeneratedClient {
  return {
    Createaccesstoken: (...args) => callOperation("chat-api-v2-actions-events:POST /oauth/v2/token", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-v2-actions-events:POST /oauth/v2/token">)),
    Createaccesstoken2: (...args) => callOperation("chat-api-contactcenter:POST /oauth/v2/token", ...(args as EightByEightContactCenterApiOperationArgs<"chat-api-contactcenter:POST /oauth/v2/token">)),
  };
}
