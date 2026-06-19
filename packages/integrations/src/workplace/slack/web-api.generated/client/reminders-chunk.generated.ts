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
export const SlackWebApiRemindersOperationKeys = [
  "POST /reminders.add",
  "POST /reminders.complete",
  "POST /reminders.delete",
  "GET /reminders.info",
  "GET /reminders.list"
] as const;
export type SlackWebApiRemindersOperationKey = typeof SlackWebApiRemindersOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiRemindersOperationPathParamMap {
  "POST /reminders.add": {};
  "POST /reminders.complete": {};
  "POST /reminders.delete": {};
  "GET /reminders.info": {};
  "GET /reminders.list": {};
}

export interface SlackWebApiRemindersOperationRequestMap {
  "POST /reminders.add": SlackWebApiOperationInput<"POST /reminders.add">;
  "POST /reminders.complete": SlackWebApiOperationInput<"POST /reminders.complete">;
  "POST /reminders.delete": SlackWebApiOperationInput<"POST /reminders.delete">;
  "GET /reminders.info": SlackWebApiOperationInput<"GET /reminders.info">;
  "GET /reminders.list": SlackWebApiOperationInput<"GET /reminders.list">;
}

export interface SlackWebApiRemindersGeneratedClient {
  RemindersAdd(...args: SlackWebApiOperationArgs<"POST /reminders.add">): Promise<SlackWebApiOperationResponseMap["POST /reminders.add"]>;
  RemindersComplete(...args: SlackWebApiOperationArgs<"POST /reminders.complete">): Promise<SlackWebApiOperationResponseMap["POST /reminders.complete"]>;
  RemindersDelete(...args: SlackWebApiOperationArgs<"POST /reminders.delete">): Promise<SlackWebApiOperationResponseMap["POST /reminders.delete"]>;
  RemindersInfo(...args: SlackWebApiOperationArgs<"GET /reminders.info">): Promise<SlackWebApiOperationResponseMap["GET /reminders.info"]>;
  RemindersList(...args: SlackWebApiOperationArgs<"GET /reminders.list">): Promise<SlackWebApiOperationResponseMap["GET /reminders.list"]>;
}

export const SlackWebApiRemindersGeneratedFunctionNames = [
  "RemindersAdd",
  "RemindersComplete",
  "RemindersDelete",
  "RemindersInfo",
  "RemindersList"
] as const satisfies readonly (keyof SlackWebApiRemindersGeneratedClient)[];

export function createSlackWebApiRemindersGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiRemindersGeneratedClient {
  return {
    RemindersAdd: (...args) => callOperation("POST /reminders.add", ...(args as SlackWebApiOperationArgs<"POST /reminders.add">)),
    RemindersComplete: (...args) => callOperation("POST /reminders.complete", ...(args as SlackWebApiOperationArgs<"POST /reminders.complete">)),
    RemindersDelete: (...args) => callOperation("POST /reminders.delete", ...(args as SlackWebApiOperationArgs<"POST /reminders.delete">)),
    RemindersInfo: (...args) => callOperation("GET /reminders.info", ...(args as SlackWebApiOperationArgs<"GET /reminders.info">)),
    RemindersList: (...args) => callOperation("GET /reminders.list", ...(args as SlackWebApiOperationArgs<"GET /reminders.list">)),
  };
}
