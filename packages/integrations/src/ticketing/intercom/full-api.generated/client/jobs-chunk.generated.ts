// Generated endpoint chunk for IntercomFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  IntercomGeneratedOperationCaller,
  IntercomFullApiOperationArgs,
  IntercomFullApiOperationInput,
  IntercomFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { IntercomFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const IntercomFullApiJobsOperationKeys = [
  "jobsStatus"
] as const;
export type IntercomFullApiJobsOperationKey = typeof IntercomFullApiJobsOperationKeys[number];
// End hardened literal operation keys.

export interface IntercomFullApiJobsOperationPathParamMap {
  "jobsStatus": { "job_id": IntercomFullApiPathParamValue };
}

export interface IntercomFullApiJobsOperationRequestMap {
  "jobsStatus": IntercomFullApiOperationInput<"jobsStatus">;
}

export interface IntercomFullApiJobsGeneratedClient {
  intercomJobsStatus(...args: IntercomFullApiOperationArgs<"jobsStatus">): Promise<IntercomFullApiOperationResponseMap["jobsStatus"]>;
}

export const IntercomFullApiJobsGeneratedFunctionNames = [
  "intercomJobsStatus"
] as const satisfies readonly (keyof IntercomFullApiJobsGeneratedClient)[];

export function createIntercomFullApiJobsGeneratedClient(
  callOperation: IntercomGeneratedOperationCaller,
): IntercomFullApiJobsGeneratedClient {
  return {
    intercomJobsStatus: (...args) => callOperation("jobsStatus", ...(args as IntercomFullApiOperationArgs<"jobsStatus">)),
  };
}
