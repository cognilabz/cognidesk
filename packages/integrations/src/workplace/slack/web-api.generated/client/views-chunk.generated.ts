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
export const SlackWebApiViewsOperationKeys = [
  "GET /views.open",
  "GET /views.publish",
  "GET /views.push",
  "GET /views.update"
] as const;
export type SlackWebApiViewsOperationKey = typeof SlackWebApiViewsOperationKeys[number];
// End hardened literal operation keys.

export interface SlackWebApiViewsOperationPathParamMap {
  "GET /views.open": {};
  "GET /views.publish": {};
  "GET /views.push": {};
  "GET /views.update": {};
}

export interface SlackWebApiViewsOperationRequestMap {
  "GET /views.open": SlackWebApiOperationInput<"GET /views.open">;
  "GET /views.publish": SlackWebApiOperationInput<"GET /views.publish">;
  "GET /views.push": SlackWebApiOperationInput<"GET /views.push">;
  "GET /views.update": SlackWebApiOperationInput<"GET /views.update">;
}

export interface SlackWebApiViewsGeneratedClient {
  ViewsOpen(...args: SlackWebApiOperationArgs<"GET /views.open">): Promise<SlackWebApiOperationResponseMap["GET /views.open"]>;
  ViewsPublish(...args: SlackWebApiOperationArgs<"GET /views.publish">): Promise<SlackWebApiOperationResponseMap["GET /views.publish"]>;
  ViewsPush(...args: SlackWebApiOperationArgs<"GET /views.push">): Promise<SlackWebApiOperationResponseMap["GET /views.push"]>;
  ViewsUpdate(...args: SlackWebApiOperationArgs<"GET /views.update">): Promise<SlackWebApiOperationResponseMap["GET /views.update"]>;
}

export const SlackWebApiViewsGeneratedFunctionNames = [
  "ViewsOpen",
  "ViewsPublish",
  "ViewsPush",
  "ViewsUpdate"
] as const satisfies readonly (keyof SlackWebApiViewsGeneratedClient)[];

export function createSlackWebApiViewsGeneratedClient(
  callOperation: SlackWebApiGeneratedOperationCaller,
): SlackWebApiViewsGeneratedClient {
  return {
    ViewsOpen: (...args) => callOperation("GET /views.open", ...(args as SlackWebApiOperationArgs<"GET /views.open">)),
    ViewsPublish: (...args) => callOperation("GET /views.publish", ...(args as SlackWebApiOperationArgs<"GET /views.publish">)),
    ViewsPush: (...args) => callOperation("GET /views.push", ...(args as SlackWebApiOperationArgs<"GET /views.push">)),
    ViewsUpdate: (...args) => callOperation("GET /views.update", ...(args as SlackWebApiOperationArgs<"GET /views.update">)),
  };
}
