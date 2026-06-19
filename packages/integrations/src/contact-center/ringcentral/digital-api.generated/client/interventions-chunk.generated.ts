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
export const RingCentralDigitalApiInterventionsOperationKeys = [
  "GET /interventions",
  "POST /interventions",
  "GET /interventions/{interventionId}",
  "PUT /interventions/{interventionId}",
  "DELETE /interventions/{interventionId}/cancel",
  "PUT /interventions/{interventionId}/close",
  "PUT /interventions/{interventionId}/reassign",
  "PUT /interventions/{interventionId}/update_categories"
] as const;
export type RingCentralDigitalApiInterventionsOperationKey = typeof RingCentralDigitalApiInterventionsOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiInterventionsOperationPathParamMap {
  "GET /interventions": {};
  "POST /interventions": {};
  "GET /interventions/{interventionId}": { "interventionId": RingCentralDigitalApiPathParamValue };
  "PUT /interventions/{interventionId}": { "interventionId": RingCentralDigitalApiPathParamValue };
  "DELETE /interventions/{interventionId}/cancel": { "interventionId": RingCentralDigitalApiPathParamValue };
  "PUT /interventions/{interventionId}/close": { "interventionId": RingCentralDigitalApiPathParamValue };
  "PUT /interventions/{interventionId}/reassign": { "interventionId": RingCentralDigitalApiPathParamValue };
  "PUT /interventions/{interventionId}/update_categories": { "interventionId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiInterventionsOperationRequestMap {
  "GET /interventions": RingCentralDigitalApiOperationInput<"GET /interventions">;
  "POST /interventions": RingCentralDigitalApiOperationInput<"POST /interventions">;
  "GET /interventions/{interventionId}": RingCentralDigitalApiOperationInput<"GET /interventions/{interventionId}">;
  "PUT /interventions/{interventionId}": RingCentralDigitalApiOperationInput<"PUT /interventions/{interventionId}">;
  "DELETE /interventions/{interventionId}/cancel": RingCentralDigitalApiOperationInput<"DELETE /interventions/{interventionId}/cancel">;
  "PUT /interventions/{interventionId}/close": RingCentralDigitalApiOperationInput<"PUT /interventions/{interventionId}/close">;
  "PUT /interventions/{interventionId}/reassign": RingCentralDigitalApiOperationInput<"PUT /interventions/{interventionId}/reassign">;
  "PUT /interventions/{interventionId}/update_categories": RingCentralDigitalApiOperationInput<"PUT /interventions/{interventionId}/update_categories">;
}

export interface RingCentralDigitalApiInterventionsGeneratedClient {
  GetAllInterventions(...args: RingCentralDigitalApiOperationArgs<"GET /interventions">): Promise<RingCentralDigitalApiOperationResponseMap["GET /interventions"]>;
  CreateIntervention(...args: RingCentralDigitalApiOperationArgs<"POST /interventions">): Promise<RingCentralDigitalApiOperationResponseMap["POST /interventions"]>;
  GetIntervention(...args: RingCentralDigitalApiOperationArgs<"GET /interventions/{interventionId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /interventions/{interventionId}"]>;
  UpdateIntervention(...args: RingCentralDigitalApiOperationArgs<"PUT /interventions/{interventionId}">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /interventions/{interventionId}"]>;
  CancelIntervention(...args: RingCentralDigitalApiOperationArgs<"DELETE /interventions/{interventionId}/cancel">): Promise<RingCentralDigitalApiOperationResponseMap["DELETE /interventions/{interventionId}/cancel"]>;
  CloseIntervention(...args: RingCentralDigitalApiOperationArgs<"PUT /interventions/{interventionId}/close">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /interventions/{interventionId}/close"]>;
  ReassignIntervention(...args: RingCentralDigitalApiOperationArgs<"PUT /interventions/{interventionId}/reassign">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /interventions/{interventionId}/reassign"]>;
  CategorizeIntervention(...args: RingCentralDigitalApiOperationArgs<"PUT /interventions/{interventionId}/update_categories">): Promise<RingCentralDigitalApiOperationResponseMap["PUT /interventions/{interventionId}/update_categories"]>;
}

export const RingCentralDigitalApiInterventionsGeneratedFunctionNames = [
  "GetAllInterventions",
  "CreateIntervention",
  "GetIntervention",
  "UpdateIntervention",
  "CancelIntervention",
  "CloseIntervention",
  "ReassignIntervention",
  "CategorizeIntervention"
] as const satisfies readonly (keyof RingCentralDigitalApiInterventionsGeneratedClient)[];

export function createRingCentralDigitalApiInterventionsGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiInterventionsGeneratedClient {
  return {
    GetAllInterventions: (...args) => callOperation("GET /interventions", ...(args as RingCentralDigitalApiOperationArgs<"GET /interventions">)),
    CreateIntervention: (...args) => callOperation("POST /interventions", ...(args as RingCentralDigitalApiOperationArgs<"POST /interventions">)),
    GetIntervention: (...args) => callOperation("GET /interventions/{interventionId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /interventions/{interventionId}">)),
    UpdateIntervention: (...args) => callOperation("PUT /interventions/{interventionId}", ...(args as RingCentralDigitalApiOperationArgs<"PUT /interventions/{interventionId}">)),
    CancelIntervention: (...args) => callOperation("DELETE /interventions/{interventionId}/cancel", ...(args as RingCentralDigitalApiOperationArgs<"DELETE /interventions/{interventionId}/cancel">)),
    CloseIntervention: (...args) => callOperation("PUT /interventions/{interventionId}/close", ...(args as RingCentralDigitalApiOperationArgs<"PUT /interventions/{interventionId}/close">)),
    ReassignIntervention: (...args) => callOperation("PUT /interventions/{interventionId}/reassign", ...(args as RingCentralDigitalApiOperationArgs<"PUT /interventions/{interventionId}/reassign">)),
    CategorizeIntervention: (...args) => callOperation("PUT /interventions/{interventionId}/update_categories", ...(args as RingCentralDigitalApiOperationArgs<"PUT /interventions/{interventionId}/update_categories">)),
  };
}
