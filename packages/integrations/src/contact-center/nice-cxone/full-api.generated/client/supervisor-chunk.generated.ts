// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiSupervisorOperationKeys = [
  "supervisor-api-docs:contactMonitor:POST:/agent-sessions/{sessionId}/monitor",
  "supervisor-api-docs:contactCoach:POST:/agent-sessions/{sessionId}/coach",
  "supervisor-api-docs:contactBarge:POST:/agent-sessions/{sessionId}/barge",
  "supervisor-api-docs:post-agent-sessions-sessionId-take-over:POST:/agent-sessions/{sessionId}/take-over"
] as const;
export type NiceCxoneFullApiSupervisorOperationKey = typeof NiceCxoneFullApiSupervisorOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiSupervisorOperationPathParamMap {
  "supervisor-api-docs:contactMonitor:POST:/agent-sessions/{sessionId}/monitor": { "sessionId": NiceCxoneFullApiPathParamValue };
  "supervisor-api-docs:contactCoach:POST:/agent-sessions/{sessionId}/coach": { "sessionId": NiceCxoneFullApiPathParamValue };
  "supervisor-api-docs:contactBarge:POST:/agent-sessions/{sessionId}/barge": { "sessionId": NiceCxoneFullApiPathParamValue };
  "supervisor-api-docs:post-agent-sessions-sessionId-take-over:POST:/agent-sessions/{sessionId}/take-over": { "sessionId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiSupervisorOperationRequestMap {
  "supervisor-api-docs:contactMonitor:POST:/agent-sessions/{sessionId}/monitor": NiceCxoneFullApiOperationInput<"supervisor-api-docs:contactMonitor:POST:/agent-sessions/{sessionId}/monitor">;
  "supervisor-api-docs:contactCoach:POST:/agent-sessions/{sessionId}/coach": NiceCxoneFullApiOperationInput<"supervisor-api-docs:contactCoach:POST:/agent-sessions/{sessionId}/coach">;
  "supervisor-api-docs:contactBarge:POST:/agent-sessions/{sessionId}/barge": NiceCxoneFullApiOperationInput<"supervisor-api-docs:contactBarge:POST:/agent-sessions/{sessionId}/barge">;
  "supervisor-api-docs:post-agent-sessions-sessionId-take-over:POST:/agent-sessions/{sessionId}/take-over": NiceCxoneFullApiOperationInput<"supervisor-api-docs:post-agent-sessions-sessionId-take-over:POST:/agent-sessions/{sessionId}/take-over">;
}

export interface NiceCxoneFullApiSupervisorGeneratedClient {
  SupervisorApiDocsContactMonitor(...args: NiceCxoneFullApiOperationArgs<"supervisor-api-docs:contactMonitor:POST:/agent-sessions/{sessionId}/monitor">): Promise<NiceCxoneFullApiOperationResponseMap["supervisor-api-docs:contactMonitor:POST:/agent-sessions/{sessionId}/monitor"]>;
  SupervisorApiDocsContactCoach(...args: NiceCxoneFullApiOperationArgs<"supervisor-api-docs:contactCoach:POST:/agent-sessions/{sessionId}/coach">): Promise<NiceCxoneFullApiOperationResponseMap["supervisor-api-docs:contactCoach:POST:/agent-sessions/{sessionId}/coach"]>;
  SupervisorApiDocsContactBarge(...args: NiceCxoneFullApiOperationArgs<"supervisor-api-docs:contactBarge:POST:/agent-sessions/{sessionId}/barge">): Promise<NiceCxoneFullApiOperationResponseMap["supervisor-api-docs:contactBarge:POST:/agent-sessions/{sessionId}/barge"]>;
  SupervisorApiDocsPostAgentSessionsSessionIdTakeOver(...args: NiceCxoneFullApiOperationArgs<"supervisor-api-docs:post-agent-sessions-sessionId-take-over:POST:/agent-sessions/{sessionId}/take-over">): Promise<NiceCxoneFullApiOperationResponseMap["supervisor-api-docs:post-agent-sessions-sessionId-take-over:POST:/agent-sessions/{sessionId}/take-over"]>;
}

export const NiceCxoneFullApiSupervisorGeneratedFunctionNames = [
  "SupervisorApiDocsContactMonitor",
  "SupervisorApiDocsContactCoach",
  "SupervisorApiDocsContactBarge",
  "SupervisorApiDocsPostAgentSessionsSessionIdTakeOver"
] as const satisfies readonly (keyof NiceCxoneFullApiSupervisorGeneratedClient)[];

export function createNiceCxoneFullApiSupervisorGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiSupervisorGeneratedClient {
  return {
    SupervisorApiDocsContactMonitor: (...args) => callOperation("supervisor-api-docs:contactMonitor:POST:/agent-sessions/{sessionId}/monitor", ...(args as NiceCxoneFullApiOperationArgs<"supervisor-api-docs:contactMonitor:POST:/agent-sessions/{sessionId}/monitor">)),
    SupervisorApiDocsContactCoach: (...args) => callOperation("supervisor-api-docs:contactCoach:POST:/agent-sessions/{sessionId}/coach", ...(args as NiceCxoneFullApiOperationArgs<"supervisor-api-docs:contactCoach:POST:/agent-sessions/{sessionId}/coach">)),
    SupervisorApiDocsContactBarge: (...args) => callOperation("supervisor-api-docs:contactBarge:POST:/agent-sessions/{sessionId}/barge", ...(args as NiceCxoneFullApiOperationArgs<"supervisor-api-docs:contactBarge:POST:/agent-sessions/{sessionId}/barge">)),
    SupervisorApiDocsPostAgentSessionsSessionIdTakeOver: (...args) => callOperation("supervisor-api-docs:post-agent-sessions-sessionId-take-over:POST:/agent-sessions/{sessionId}/take-over", ...(args as NiceCxoneFullApiOperationArgs<"supervisor-api-docs:post-agent-sessions-sessionId-take-over:POST:/agent-sessions/{sessionId}/take-over">)),
  };
}
