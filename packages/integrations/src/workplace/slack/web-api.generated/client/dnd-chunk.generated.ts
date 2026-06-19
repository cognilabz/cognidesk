// Generated endpoint chunk for SlackWebApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  SlackWebApiGeneratedOperationCaller,
  SlackWebApiOperationArgs,
  SlackWebApiOperationInput,
  SlackWebApiPathParamValue,
} from "../../web-api-client.generated.js";
import type { SlackWebApiOperationResponseMap } from "../../web-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const SlackWebApiDndOperationKeys = [
  "POST /dnd.endDnd",
  "POST /dnd.endSnooze",
  "GET /dnd.info",
  "POST /dnd.setSnooze",
  "GET /dnd.teamInfo"
] as const;
export type SlackWebApiDndOperationKey = typeof SlackWebApiDndOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiDndOperationPathParamMap {
  "POST /dnd.endDnd": {};
  "POST /dnd.endSnooze": {};
  "GET /dnd.info": {};
  "POST /dnd.setSnooze": {};
  "GET /dnd.teamInfo": {};
}

export interface SlackWebApiDndOperationRequestMap {
  "POST /dnd.endDnd": SlackWebApiOperationInput<"POST /dnd.endDnd">;
  "POST /dnd.endSnooze": SlackWebApiOperationInput<"POST /dnd.endSnooze">;
  "GET /dnd.info": SlackWebApiOperationInput<"GET /dnd.info">;
  "POST /dnd.setSnooze": SlackWebApiOperationInput<"POST /dnd.setSnooze">;
  "GET /dnd.teamInfo": SlackWebApiOperationInput<"GET /dnd.teamInfo">;
}

export interface SlackWebApiDndGeneratedClient {
  DndEndDnd(...args: SlackWebApiOperationArgs<"POST /dnd.endDnd">): Promise<SlackWebApiOperationResponseMap["POST /dnd.endDnd"]>;
  DndEndSnooze(...args: SlackWebApiOperationArgs<"POST /dnd.endSnooze">): Promise<SlackWebApiOperationResponseMap["POST /dnd.endSnooze"]>;
  DndInfo(...args: SlackWebApiOperationArgs<"GET /dnd.info">): Promise<SlackWebApiOperationResponseMap["GET /dnd.info"]>;
  DndSetSnooze(...args: SlackWebApiOperationArgs<"POST /dnd.setSnooze">): Promise<SlackWebApiOperationResponseMap["POST /dnd.setSnooze"]>;
  DndTeamInfo(...args: SlackWebApiOperationArgs<"GET /dnd.teamInfo">): Promise<SlackWebApiOperationResponseMap["GET /dnd.teamInfo"]>;
}

export const SlackWebApiDndGeneratedFunctionNames = [
  "DndEndDnd",
  "DndEndSnooze",
  "DndInfo",
  "DndSetSnooze",
  "DndTeamInfo"
] as const satisfies readonly (keyof SlackWebApiDndGeneratedClient)[];

export function createSlackWebApiDndGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiDndGeneratedClient {
  return {
    DndEndDnd: (...args) => callOperation("POST /dnd.endDnd", ...(args as SlackWebApiOperationArgs<"POST /dnd.endDnd">)),
    DndEndSnooze: (...args) => callOperation("POST /dnd.endSnooze", ...(args as SlackWebApiOperationArgs<"POST /dnd.endSnooze">)),
    DndInfo: (...args) => callOperation("GET /dnd.info", ...(args as SlackWebApiOperationArgs<"GET /dnd.info">)),
    DndSetSnooze: (...args) => callOperation("POST /dnd.setSnooze", ...(args as SlackWebApiOperationArgs<"POST /dnd.setSnooze">)),
    DndTeamInfo: (...args) => callOperation("GET /dnd.teamInfo", ...(args as SlackWebApiOperationArgs<"GET /dnd.teamInfo">)),
  };
}
