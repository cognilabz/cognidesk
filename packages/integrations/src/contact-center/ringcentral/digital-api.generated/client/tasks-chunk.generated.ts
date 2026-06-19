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
export const RingCentralDigitalApiTasksOperationKeys = [
  "GET /tasks",
  "GET /tasks/{taskId}",
  "POST /tasks/{taskId}/move",
  "POST /tasks/{taskId}/complete",
  "POST /tasks/{taskId}/transfer"
] as const;
export type RingCentralDigitalApiTasksOperationKey = typeof RingCentralDigitalApiTasksOperationKeys[number];
// End hardened literal operation keys.

export interface RingCentralDigitalApiTasksOperationPathParamMap {
  "GET /tasks": {};
  "GET /tasks/{taskId}": { "taskId": RingCentralDigitalApiPathParamValue };
  "POST /tasks/{taskId}/move": { "taskId": RingCentralDigitalApiPathParamValue };
  "POST /tasks/{taskId}/complete": { "taskId": RingCentralDigitalApiPathParamValue };
  "POST /tasks/{taskId}/transfer": { "taskId": RingCentralDigitalApiPathParamValue };
}

export interface RingCentralDigitalApiTasksOperationRequestMap {
  "GET /tasks": RingCentralDigitalApiOperationInput<"GET /tasks">;
  "GET /tasks/{taskId}": RingCentralDigitalApiOperationInput<"GET /tasks/{taskId}">;
  "POST /tasks/{taskId}/move": RingCentralDigitalApiOperationInput<"POST /tasks/{taskId}/move">;
  "POST /tasks/{taskId}/complete": RingCentralDigitalApiOperationInput<"POST /tasks/{taskId}/complete">;
  "POST /tasks/{taskId}/transfer": RingCentralDigitalApiOperationInput<"POST /tasks/{taskId}/transfer">;
}

export interface RingCentralDigitalApiTasksGeneratedClient {
  GetAllTasks(...args: RingCentralDigitalApiOperationArgs<"GET /tasks">): Promise<RingCentralDigitalApiOperationResponseMap["GET /tasks"]>;
  GetTask(...args: RingCentralDigitalApiOperationArgs<"GET /tasks/{taskId}">): Promise<RingCentralDigitalApiOperationResponseMap["GET /tasks/{taskId}"]>;
  MoveTask(...args: RingCentralDigitalApiOperationArgs<"POST /tasks/{taskId}/move">): Promise<RingCentralDigitalApiOperationResponseMap["POST /tasks/{taskId}/move"]>;
  CompleteTask(...args: RingCentralDigitalApiOperationArgs<"POST /tasks/{taskId}/complete">): Promise<RingCentralDigitalApiOperationResponseMap["POST /tasks/{taskId}/complete"]>;
  TransferTask(...args: RingCentralDigitalApiOperationArgs<"POST /tasks/{taskId}/transfer">): Promise<RingCentralDigitalApiOperationResponseMap["POST /tasks/{taskId}/transfer"]>;
}

export const RingCentralDigitalApiTasksGeneratedFunctionNames = [
  "GetAllTasks",
  "GetTask",
  "MoveTask",
  "CompleteTask",
  "TransferTask"
] as const satisfies readonly (keyof RingCentralDigitalApiTasksGeneratedClient)[];

export function createRingCentralDigitalApiTasksGeneratedClient(
  callOperation: RingCentralDigitalGeneratedOperationCaller,
): RingCentralDigitalApiTasksGeneratedClient {
  return {
    GetAllTasks: (...args) => callOperation("GET /tasks", ...(args as RingCentralDigitalApiOperationArgs<"GET /tasks">)),
    GetTask: (...args) => callOperation("GET /tasks/{taskId}", ...(args as RingCentralDigitalApiOperationArgs<"GET /tasks/{taskId}">)),
    MoveTask: (...args) => callOperation("POST /tasks/{taskId}/move", ...(args as RingCentralDigitalApiOperationArgs<"POST /tasks/{taskId}/move">)),
    CompleteTask: (...args) => callOperation("POST /tasks/{taskId}/complete", ...(args as RingCentralDigitalApiOperationArgs<"POST /tasks/{taskId}/complete">)),
    TransferTask: (...args) => callOperation("POST /tasks/{taskId}/transfer", ...(args as RingCentralDigitalApiOperationArgs<"POST /tasks/{taskId}/transfer">)),
  };
}
