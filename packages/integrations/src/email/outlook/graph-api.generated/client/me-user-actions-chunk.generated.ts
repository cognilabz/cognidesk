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
export const OutlookGraphMeUserActionsOperationKeys = [
  "me.sendMail"
] as const;
export type OutlookGraphMeUserActionsOperationKey = typeof OutlookGraphMeUserActionsOperationKeys[number];
// End hardened literal operation keys.

export interface OutlookGraphMeUserActionsOperationPathParamMap {
  "me.sendMail": {};
}

export interface OutlookGraphMeUserActionsOperationRequestMap {
  "me.sendMail": OutlookGraphOperationInput<"me.sendMail">;
}

export interface OutlookGraphMeUserActionsGeneratedClient {
  MeSendMail(...args: OutlookGraphOperationArgs<"me.sendMail">): Promise<OutlookGraphOperationResponseMap["me.sendMail"]>;
}

export const OutlookGraphMeUserActionsGeneratedFunctionNames = [
  "MeSendMail"
] as const satisfies readonly (keyof OutlookGraphMeUserActionsGeneratedClient)[];

export function createOutlookGraphMeUserActionsGeneratedClient(
  callOperation: OutlookGraphGeneratedOperationCaller,
): OutlookGraphMeUserActionsGeneratedClient {
  return {
    MeSendMail: (...args) => callOperation("me.sendMail", ...(args as OutlookGraphOperationArgs<"me.sendMail">)),
  };
}
