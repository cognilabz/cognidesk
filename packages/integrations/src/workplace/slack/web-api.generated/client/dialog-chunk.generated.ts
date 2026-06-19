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
export const SlackWebApiDialogOperationKeys = [
  "GET /dialog.open"
] as const;
export type SlackWebApiDialogOperationKey = typeof SlackWebApiDialogOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiDialogOperationPathParamMap {
  "GET /dialog.open": {};
}

export interface SlackWebApiDialogOperationRequestMap {
  "GET /dialog.open": SlackWebApiOperationInput<"GET /dialog.open">;
}

export interface SlackWebApiDialogGeneratedClient {
  DialogOpen(...args: SlackWebApiOperationArgs<"GET /dialog.open">): Promise<SlackWebApiOperationResponseMap["GET /dialog.open"]>;
}

export const SlackWebApiDialogGeneratedFunctionNames = [
  "DialogOpen"
] as const satisfies readonly (keyof SlackWebApiDialogGeneratedClient)[];

export function createSlackWebApiDialogGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiDialogGeneratedClient {
  return {
    DialogOpen: (...args) => callOperation("GET /dialog.open", ...(args as SlackWebApiOperationArgs<"GET /dialog.open">)),
  };
}
