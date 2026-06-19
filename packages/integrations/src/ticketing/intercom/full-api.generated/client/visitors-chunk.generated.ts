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
export const IntercomFullApiVisitorsOperationKeys = [
  "retrieveVisitorWithUserId",
  "updateVisitor",
  "convertVisitor"
] as const;
export type IntercomFullApiVisitorsOperationKey = typeof IntercomFullApiVisitorsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiVisitorsOperationPathParamMap {
  "retrieveVisitorWithUserId": {};
  "updateVisitor": {};
  "convertVisitor": {};
}

export interface IntercomFullApiVisitorsOperationRequestMap {
  "retrieveVisitorWithUserId": IntercomFullApiOperationInput<"retrieveVisitorWithUserId">;
  "updateVisitor": IntercomFullApiOperationInput<"updateVisitor">;
  "convertVisitor": IntercomFullApiOperationInput<"convertVisitor">;
}

export interface IntercomFullApiVisitorsGeneratedClient {
  intercomRetrieveVisitorWithUserId(...args: IntercomFullApiOperationArgs<"retrieveVisitorWithUserId">): Promise<IntercomFullApiOperationResponseMap["retrieveVisitorWithUserId"]>;
  intercomUpdateVisitor(...args: IntercomFullApiOperationArgs<"updateVisitor">): Promise<IntercomFullApiOperationResponseMap["updateVisitor"]>;
  intercomConvertVisitor(...args: IntercomFullApiOperationArgs<"convertVisitor">): Promise<IntercomFullApiOperationResponseMap["convertVisitor"]>;
}

export const IntercomFullApiVisitorsGeneratedFunctionNames = [
  "intercomRetrieveVisitorWithUserId",
  "intercomUpdateVisitor",
  "intercomConvertVisitor"
] as const satisfies readonly (keyof IntercomFullApiVisitorsGeneratedClient)[];

export function createIntercomFullApiVisitorsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiVisitorsGeneratedClient {
  return {
    intercomRetrieveVisitorWithUserId: (...args) => callOperation("retrieveVisitorWithUserId", ...(args as IntercomFullApiOperationArgs<"retrieveVisitorWithUserId">)),
    intercomUpdateVisitor: (...args) => callOperation("updateVisitor", ...(args as IntercomFullApiOperationArgs<"updateVisitor">)),
    intercomConvertVisitor: (...args) => callOperation("convertVisitor", ...(args as IntercomFullApiOperationArgs<"convertVisitor">)),
  };
}
