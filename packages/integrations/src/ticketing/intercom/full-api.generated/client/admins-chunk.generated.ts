// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiAdminsOperationKeys = [
  "listAdmins",
  "retrieveAdmin",
  "setAwayAdmin",
  "listActivityLogs",
  "identifyAdmin"
] as const;
export type IntercomFullApiAdminsOperationKey = typeof IntercomFullApiAdminsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiAdminsOperationPathParamMap {
  "listAdmins": {};
  "retrieveAdmin": { "admin_id": IntercomFullApiPathParamValue };
  "setAwayAdmin": { "admin_id": IntercomFullApiPathParamValue };
  "listActivityLogs": {};
  "identifyAdmin": {};
}

export interface IntercomFullApiAdminsOperationRequestMap {
  "listAdmins": IntercomFullApiOperationInput<"listAdmins">;
  "retrieveAdmin": IntercomFullApiOperationInput<"retrieveAdmin">;
  "setAwayAdmin": IntercomFullApiOperationInput<"setAwayAdmin">;
  "listActivityLogs": IntercomFullApiOperationInput<"listActivityLogs">;
  "identifyAdmin": IntercomFullApiOperationInput<"identifyAdmin">;
}

export interface IntercomFullApiAdminsGeneratedClient {
  intercomListAdmins(...args: IntercomFullApiOperationArgs<"listAdmins">): Promise<IntercomFullApiOperationResponseMap["listAdmins"]>;
  intercomRetrieveAdmin(...args: IntercomFullApiOperationArgs<"retrieveAdmin">): Promise<IntercomFullApiOperationResponseMap["retrieveAdmin"]>;
  intercomSetAwayAdmin(...args: IntercomFullApiOperationArgs<"setAwayAdmin">): Promise<IntercomFullApiOperationResponseMap["setAwayAdmin"]>;
  intercomListActivityLogs(...args: IntercomFullApiOperationArgs<"listActivityLogs">): Promise<IntercomFullApiOperationResponseMap["listActivityLogs"]>;
  intercomIdentifyAdmin(...args: IntercomFullApiOperationArgs<"identifyAdmin">): Promise<IntercomFullApiOperationResponseMap["identifyAdmin"]>;
}

export const IntercomFullApiAdminsGeneratedFunctionNames = [
  "intercomListAdmins",
  "intercomRetrieveAdmin",
  "intercomSetAwayAdmin",
  "intercomListActivityLogs",
  "intercomIdentifyAdmin"
] as const satisfies readonly (keyof IntercomFullApiAdminsGeneratedClient)[];

export function createIntercomFullApiAdminsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiAdminsGeneratedClient {
  return {
    intercomListAdmins: (...args) => callOperation("listAdmins", ...(args as IntercomFullApiOperationArgs<"listAdmins">)),
    intercomRetrieveAdmin: (...args) => callOperation("retrieveAdmin", ...(args as IntercomFullApiOperationArgs<"retrieveAdmin">)),
    intercomSetAwayAdmin: (...args) => callOperation("setAwayAdmin", ...(args as IntercomFullApiOperationArgs<"setAwayAdmin">)),
    intercomListActivityLogs: (...args) => callOperation("listActivityLogs", ...(args as IntercomFullApiOperationArgs<"listActivityLogs">)),
    intercomIdentifyAdmin: (...args) => callOperation("identifyAdmin", ...(args as IntercomFullApiOperationArgs<"identifyAdmin">)),
  };
}
