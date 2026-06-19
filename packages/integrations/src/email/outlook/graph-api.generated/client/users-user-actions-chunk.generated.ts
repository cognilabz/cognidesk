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
export const OutlookGraphUsersUserActionsOperationKeys = [
  "users.user.sendMail"
] as const;
export type OutlookGraphUsersUserActionsOperationKey = typeof OutlookGraphUsersUserActionsOperationKeys[number];
// End hardened literal operation keys.

export interface OutlookGraphUsersUserActionsOperationPathParamMap {
  "users.user.sendMail": { "user-id": OutlookGraphPathParamValue };
}

export interface OutlookGraphUsersUserActionsOperationRequestMap {
  "users.user.sendMail": OutlookGraphOperationInput<"users.user.sendMail">;
}

export interface OutlookGraphUsersUserActionsGeneratedClient {
  UsersUserSendMail(...args: OutlookGraphOperationArgs<"users.user.sendMail">): Promise<OutlookGraphOperationResponseMap["users.user.sendMail"]>;
}

export const OutlookGraphUsersUserActionsGeneratedFunctionNames = [
  "UsersUserSendMail"
] as const satisfies readonly (keyof OutlookGraphUsersUserActionsGeneratedClient)[];

export function createOutlookGraphUsersUserActionsGeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphUsersUserActionsGeneratedClient {
  return {
    UsersUserSendMail: (...args) => callOperation("users.user.sendMail", ...(args as OutlookGraphOperationArgs<"users.user.sendMail">)),
  };
}
