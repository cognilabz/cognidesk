// Generated endpoint chunk for RingCentralDigitalApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  RingCentralDigitalGeneratedOperationCaller,
  RingCentralDigitalApiOperationArgs,
  RingCentralDigitalApiOperationInput,
  RingCentralDigitalApiPathParamValue,
} from "../../digital-api-client.generated.js";
import type { RingCentralDigitalApiOperationResponseMap } from "../../digital-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const RingCentralDigitalApiInterventionCommentsOperationKeys = [
  "GET /intervention_comments",
  "POST /intervention_comments",
  "DELETE /intervention_comments/{interventionCommentId}",
  "GET /intervention_comments/{interventionCommentId}"
] as const;
export type RingCentralDigitalApiInterventionCommentsOperationKey = typeof RingCentralDigitalApiInterventionCommentsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiInterventionCommentsOperationPathParamMap {
  "GET /intervention_comments": {};
  "POST /intervention_comments": {};
  "DELETE /intervention_comments/{interventionCommentId}": { "interventionCommentId": RingCentralDigitalApiPathParamValue };
  "GET /intervention_comments/{interventionCommentId}": { "interventionCommentId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiInterventionCommentsOperationRequestMap {
  "GET /intervention_comments": RingCentralDigitalApiOperationInput<"GET /intervention_comments">;
  "POST /intervention_comments": RingCentralDigitalApiOperationInput<"POST /intervention_comments">;
  "DELETE /intervention_comments/{interventionCommentId}": RingCentralDigitalApiOperationInput<"DELETE /intervention_comments/{interventionCommentId}">;
  "GET /intervention_comments/{interventionCommentId}": RingCentralDigitalApiOperationInput<"GET /intervention_comments/{interventionCommentId}">;
}

export interface RingCentralDigitalApiInterventionCommentsGeneratedClient {
  GetAllInterventionComments(...args: RingCentralDigitalApiOperationArgs<"GET /intervention_comments">): Promise<RingCentralDigitalApiOperationResponseMap["GET /intervention_comments"]>;
  CreateInterventionComment(...args: RingCentralDigitalApiOperationArgs<"POST /intervention_comments">): Promise<RingCentralDigitalApiOperationResponseMap["POST /intervention_comments"]>;
  DeleteInterventionComment(...args: RingCentralDigitalApiOperationArgs<"DELETE /intervention_comments/{interventionCommentId}">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /intervention_comments/{interventionCommentId}"]>;
  GetInterventionComment(...args: RingCentralDigitalApiOperationArgs<"GET /intervention_comments/{interventionCommentId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /intervention_comments/{interventionCommentId}"]>;
}

export const RingCentralDigitalApiInterventionCommentsGeneratedFunctionNames = [
  "GetAllInterventionComments",
  "CreateInterventionComment",
  "DeleteInterventionComment",
  "GetInterventionComment"
] as const satisfies readonly (keyof RingCentralDigitalApiInterventionCommentsGeneratedClient)[];

export function createRingCentralDigitalApiInterventionCommentsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiInterventionCommentsGeneratedClient {
  return {
    GetAllInterventionComments: (...args) => callOperation("GET /intervention_comments", ...(args as RingCentralDigitalApiOperationArgs<"GET /intervention_comments">)),
    CreateInterventionComment: (...args) => callOperation("POST /intervention_comments", ...(args as RingCentralDigitalApiOperationArgs<"POST /intervention_comments">)),
    DeleteInterventionComment: (...args) => callOperation("DELETE /intervention_comments/{interventionCommentId}", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /intervention_comments/{interventionCommentId}">)),
    GetInterventionComment: (...args) => callOperation("GET /intervention_comments/{interventionCommentId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /intervention_comments/{interventionCommentId}">)),
  };
}
