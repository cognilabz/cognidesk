// Generated endpoint chunk for GorgiasFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GorgiasGeneratedOperationCaller,
  GorgiasFullApiOperationArgs,
  GorgiasFullApiOperationInput,
  GorgiasFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GorgiasFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GorgiasFullApiJobsOperationKeys = [
  "list-jobs",
  "create-job",
  "cancel-job",
  "get-job",
  "update-job"
] as const;
export type GorgiasFullApiJobsOperationKey = typeof GorgiasFullApiJobsOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiJobsOperationPathParamMap {
  "list-jobs": {};
  "create-job": {};
  "cancel-job": { "id": GorgiasFullApiPathParamValue };
  "get-job": { "id": GorgiasFullApiPathParamValue };
  "update-job": { "id": GorgiasFullApiPathParamValue };
}

export interface GorgiasFullApiJobsOperationRequestMap {
  "list-jobs": GorgiasFullApiOperationInput<"list-jobs">;
  "create-job": GorgiasFullApiOperationInput<"create-job">;
  "cancel-job": GorgiasFullApiOperationInput<"cancel-job">;
  "get-job": GorgiasFullApiOperationInput<"get-job">;
  "update-job": GorgiasFullApiOperationInput<"update-job">;
}

export interface GorgiasFullApiJobsGeneratedClient {
  gorgiasListJobs(...args: GorgiasFullApiOperationArgs<"list-jobs">): Promise<GorgiasFullApiOperationResponseMap["list-jobs"]>;
  gorgiasCreateJob(...args: GorgiasFullApiOperationArgs<"create-job">): Promise<GorgiasFullApiOperationResponseMap["create-job"]>;
  gorgiasCancelJob(...args: GorgiasFullApiOperationArgs<"cancel-job">): Promise<GorgiasFullApiOperationResponseMap["cancel-job"]>;
  gorgiasGetJob(...args: GorgiasFullApiOperationArgs<"get-job">): Promise<GorgiasFullApiOperationResponseMap["get-job"]>;
  gorgiasUpdateJob(...args: GorgiasFullApiOperationArgs<"update-job">): Promise<GorgiasFullApiOperationResponseMap["update-job"]>;
}

export const GorgiasFullApiJobsGeneratedFunctionNames = [
  "gorgiasListJobs",
  "gorgiasCreateJob",
  "gorgiasCancelJob",
  "gorgiasGetJob",
  "gorgiasUpdateJob"
] as const satisfies readonly (keyof GorgiasFullApiJobsGeneratedClient)[];

export function createGorgiasFullApiJobsGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiJobsGeneratedClient {
  return {
    gorgiasListJobs: (...args) => callOperation("list-jobs", ...(args as GorgiasFullApiOperationArgs<"list-jobs">)),
    gorgiasCreateJob: (...args) => callOperation("create-job", ...(args as GorgiasFullApiOperationArgs<"create-job">)),
    gorgiasCancelJob: (...args) => callOperation("cancel-job", ...(args as GorgiasFullApiOperationArgs<"cancel-job">)),
    gorgiasGetJob: (...args) => callOperation("get-job", ...(args as GorgiasFullApiOperationArgs<"get-job">)),
    gorgiasUpdateJob: (...args) => callOperation("update-job", ...(args as GorgiasFullApiOperationArgs<"update-job">)),
  };
}
