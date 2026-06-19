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
export const SlackWebApiUsergroupsOperationKeys = [
  "POST /usergroups.create",
  "POST /usergroups.disable",
  "POST /usergroups.enable",
  "GET /usergroups.list",
  "POST /usergroups.update"
] as const;
export type SlackWebApiUsergroupsOperationKey = typeof SlackWebApiUsergroupsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiUsergroupsOperationPathParamMap {
  "POST /usergroups.create": {};
  "POST /usergroups.disable": {};
  "POST /usergroups.enable": {};
  "GET /usergroups.list": {};
  "POST /usergroups.update": {};
}

export interface SlackWebApiUsergroupsOperationRequestMap {
  "POST /usergroups.create": SlackWebApiOperationInput<"POST /usergroups.create">;
  "POST /usergroups.disable": SlackWebApiOperationInput<"POST /usergroups.disable">;
  "POST /usergroups.enable": SlackWebApiOperationInput<"POST /usergroups.enable">;
  "GET /usergroups.list": SlackWebApiOperationInput<"GET /usergroups.list">;
  "POST /usergroups.update": SlackWebApiOperationInput<"POST /usergroups.update">;
}

export interface SlackWebApiUsergroupsGeneratedClient {
  UsergroupsCreate(...args: SlackWebApiOperationArgs<"POST /usergroups.create">): Promise<SlackWebApiOperationResponseMap["POST /usergroups.create"]>;
  UsergroupsDisable(...args: SlackWebApiOperationArgs<"POST /usergroups.disable">): Promise<SlackWebApiOperationResponseMap["POST /usergroups.disable"]>;
  UsergroupsEnable(...args: SlackWebApiOperationArgs<"POST /usergroups.enable">): Promise<SlackWebApiOperationResponseMap["POST /usergroups.enable"]>;
  UsergroupsList(...args: SlackWebApiOperationArgs<"GET /usergroups.list">): Promise<SlackWebApiOperationResponseMap["GET /usergroups.list"]>;
  UsergroupsUpdate(...args: SlackWebApiOperationArgs<"POST /usergroups.update">): Promise<SlackWebApiOperationResponseMap["POST /usergroups.update"]>;
}

export const SlackWebApiUsergroupsGeneratedFunctionNames = [
  "UsergroupsCreate",
  "UsergroupsDisable",
  "UsergroupsEnable",
  "UsergroupsList",
  "UsergroupsUpdate"
] as const satisfies readonly (keyof SlackWebApiUsergroupsGeneratedClient)[];

export function createSlackWebApiUsergroupsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiUsergroupsGeneratedClient {
  return {
    UsergroupsCreate: (...args) => callOperation("POST /usergroups.create", ...(args as SlackWebApiOperationArgs<"POST /usergroups.create">)),
    UsergroupsDisable: (...args) => callOperation("POST /usergroups.disable", ...(args as SlackWebApiOperationArgs<"POST /usergroups.disable">)),
    UsergroupsEnable: (...args) => callOperation("POST /usergroups.enable", ...(args as SlackWebApiOperationArgs<"POST /usergroups.enable">)),
    UsergroupsList: (...args) => callOperation("GET /usergroups.list", ...(args as SlackWebApiOperationArgs<"GET /usergroups.list">)),
    UsergroupsUpdate: (...args) => callOperation("POST /usergroups.update", ...(args as SlackWebApiOperationArgs<"POST /usergroups.update">)),
  };
}
