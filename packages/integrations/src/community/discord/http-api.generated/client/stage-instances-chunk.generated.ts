// Generated endpoint chunk for DiscordHttpApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  DiscordHttpApiGeneratedOperationCaller,
  DiscordHttpApiOperationArgs,
  DiscordHttpApiOperationInput,
  DiscordHttpApiPathParamValue,
} from "../../http-api-client.generated.js";
import type { DiscordHttpApiOperationResponseMap } from "../../http-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const DiscordHttpApiStageInstancesOperationKeys = [
  "POST /stage-instances",
  "GET /stage-instances/{channel_id}",
  "DELETE /stage-instances/{channel_id}",
  "PATCH /stage-instances/{channel_id}"
] as const;
export type DiscordHttpApiStageInstancesOperationKey = typeof DiscordHttpApiStageInstancesOperationKeys[number];
// End hardened literal operation keys.

export interface DiscordHttpApiStageInstancesOperationPathParamMap {
  "POST /stage-instances": {};
  "GET /stage-instances/{channel_id}": { "channel_id": DiscordHttpApiPathParamValue };
  "DELETE /stage-instances/{channel_id}": { "channel_id": DiscordHttpApiPathParamValue };
  "PATCH /stage-instances/{channel_id}": { "channel_id": DiscordHttpApiPathParamValue };
}

export interface DiscordHttpApiStageInstancesOperationRequestMap {
  "POST /stage-instances": DiscordHttpApiOperationInput<"POST /stage-instances">;
  "GET /stage-instances/{channel_id}": DiscordHttpApiOperationInput<"GET /stage-instances/{channel_id}">;
  "DELETE /stage-instances/{channel_id}": DiscordHttpApiOperationInput<"DELETE /stage-instances/{channel_id}">;
  "PATCH /stage-instances/{channel_id}": DiscordHttpApiOperationInput<"PATCH /stage-instances/{channel_id}">;
}

export interface DiscordHttpApiStageInstancesGeneratedClient {
  CreateStageInstance(...args: DiscordHttpApiOperationArgs<"POST /stage-instances">): Promise<DiscordHttpApiOperationResponseMap["POST /stage-instances"]>;
  GetStageInstance(...args: DiscordHttpApiOperationArgs<"GET /stage-instances/{channel_id}">): Promise<DiscordHttpApiOperationResponseMap["GET /stage-instances/{channel_id}"]>;
  DeleteStageInstance(...args: DiscordHttpApiOperationArgs<"DELETE /stage-instances/{channel_id}">): Promise<DiscordHttpApiOperationResponseMap["DELETE /stage-instances/{channel_id}"]>;
  UpdateStageInstance(...args: DiscordHttpApiOperationArgs<"PATCH /stage-instances/{channel_id}">): Promise<DiscordHttpApiOperationResponseMap["PATCH /stage-instances/{channel_id}"]>;
}

export const DiscordHttpApiStageInstancesGeneratedFunctionNames = [
  "CreateStageInstance",
  "GetStageInstance",
  "DeleteStageInstance",
  "UpdateStageInstance"
] as const satisfies readonly (keyof DiscordHttpApiStageInstancesGeneratedClient)[];

export function createDiscordHttpApiStageInstancesGeneratedClient(
  callOperation: DiscordHttpApiGeneratedOperationCaller,
): DiscordHttpApiStageInstancesGeneratedClient {
  return {
    CreateStageInstance: (...args) => callOperation("POST /stage-instances", ...(args as DiscordHttpApiOperationArgs<"POST /stage-instances">)),
    GetStageInstance: (...args) => callOperation("GET /stage-instances/{channel_id}", ...(args as DiscordHttpApiOperationArgs<"GET /stage-instances/{channel_id}">)),
    DeleteStageInstance: (...args) => callOperation("DELETE /stage-instances/{channel_id}", ...(args as DiscordHttpApiOperationArgs<"DELETE /stage-instances/{channel_id}">)),
    UpdateStageInstance: (...args) => callOperation("PATCH /stage-instances/{channel_id}", ...(args as DiscordHttpApiOperationArgs<"PATCH /stage-instances/{channel_id}">)),
  };
}
