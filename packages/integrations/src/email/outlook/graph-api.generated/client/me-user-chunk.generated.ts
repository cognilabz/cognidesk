// Generated endpoint chunk for OutlookGraph.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  OutlookGraphGeneratedOperationCaller,
  OutlookGraphOperationArgs,
  OutlookGraphOperationInput,
  OutlookGraphPathParamValue,
} from "../../graph-api-client.generated.js";
import type { OutlookGraphOperationResponseMap } from "../../graph-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const OutlookGraphMeUserOperationKeys = [
  "me.user.GetUser",
  "me.user.UpdateUser"
] as const;
export type OutlookGraphMeUserOperationKey = typeof OutlookGraphMeUserOperationKeys[number];
// End hardened literal operation keys.

export interface OutlookGraphMeUserOperationPathParamMap {
  "me.user.GetUser": {};
  "me.user.UpdateUser": {};
}

export interface OutlookGraphMeUserOperationRequestMap {
  "me.user.GetUser": OutlookGraphOperationInput<"me.user.GetUser">;
  "me.user.UpdateUser": OutlookGraphOperationInput<"me.user.UpdateUser">;
}

export interface OutlookGraphMeUserGeneratedClient {
  MeUserGetUser(...args: OutlookGraphOperationArgs<"me.user.GetUser">): Promise<OutlookGraphOperationResponseMap["me.user.GetUser"]>;
  MeUserUpdateUser(...args: OutlookGraphOperationArgs<"me.user.UpdateUser">): Promise<OutlookGraphOperationResponseMap["me.user.UpdateUser"]>;
}

export const OutlookGraphMeUserGeneratedFunctionNames = [
  "MeUserGetUser",
  "MeUserUpdateUser"
] as const satisfies readonly (keyof OutlookGraphMeUserGeneratedClient)[];

export function createOutlookGraphMeUserGeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphMeUserGeneratedClient {
  return {
    MeUserGetUser: (...args) => callOperation("me.user.GetUser", ...(args as OutlookGraphOperationArgs<"me.user.GetUser">)),
    MeUserUpdateUser: (...args) => callOperation("me.user.UpdateUser", ...(args as OutlookGraphOperationArgs<"me.user.UpdateUser">)),
  };
}
