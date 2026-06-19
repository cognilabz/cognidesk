// Generated endpoint chunk for GenesysCloudFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  GenesysCloudGeneratedOperationCaller,
  GenesysCloudFullApiOperationArgs,
  GenesysCloudFullApiOperationInput,
  GenesysCloudFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { GenesysCloudFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const GenesysCloudFullApiInfrastructureAsCodeOperationKeys = [
  "getInfrastructureascodeAccelerator",
  "getInfrastructureascodeAccelerators",
  "getInfrastructureascodeJob",
  "getInfrastructureascodeJobs",
  "postInfrastructureascodeJobs"
] as const;
export type GenesysCloudFullApiInfrastructureAsCodeOperationKey = typeof GenesysCloudFullApiInfrastructureAsCodeOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiInfrastructureAsCodeOperationPathParamMap {
  "getInfrastructureascodeAccelerator": { "acceleratorId": GenesysCloudFullApiPathParamValue };
  "getInfrastructureascodeAccelerators": {};
  "getInfrastructureascodeJob": { "jobId": GenesysCloudFullApiPathParamValue };
  "getInfrastructureascodeJobs": {};
  "postInfrastructureascodeJobs": {};
}

export interface GenesysCloudFullApiInfrastructureAsCodeOperationRequestMap {
  "getInfrastructureascodeAccelerator": GenesysCloudFullApiOperationInput<"getInfrastructureascodeAccelerator">;
  "getInfrastructureascodeAccelerators": GenesysCloudFullApiOperationInput<"getInfrastructureascodeAccelerators">;
  "getInfrastructureascodeJob": GenesysCloudFullApiOperationInput<"getInfrastructureascodeJob">;
  "getInfrastructureascodeJobs": GenesysCloudFullApiOperationInput<"getInfrastructureascodeJobs">;
  "postInfrastructureascodeJobs": GenesysCloudFullApiOperationInput<"postInfrastructureascodeJobs">;
}

export interface GenesysCloudFullApiInfrastructureAsCodeGeneratedClient {
  GetInfrastructureascodeAccelerator(...args: GenesysCloudFullApiOperationArgs<"getInfrastructureascodeAccelerator">): Promise<GenesysCloudFullApiOperationResponseMap["getInfrastructureascodeAccelerator"]>;
  GetInfrastructureascodeAccelerators(...args: GenesysCloudFullApiOperationArgs<"getInfrastructureascodeAccelerators">): Promise<GenesysCloudFullApiOperationResponseMap["getInfrastructureascodeAccelerators"]>;
  GetInfrastructureascodeJob(...args: GenesysCloudFullApiOperationArgs<"getInfrastructureascodeJob">): Promise<GenesysCloudFullApiOperationResponseMap["getInfrastructureascodeJob"]>;
  GetInfrastructureascodeJobs(...args: GenesysCloudFullApiOperationArgs<"getInfrastructureascodeJobs">): Promise<GenesysCloudFullApiOperationResponseMap["getInfrastructureascodeJobs"]>;
  PostInfrastructureascodeJobs(...args: GenesysCloudFullApiOperationArgs<"postInfrastructureascodeJobs">): Promise<GenesysCloudFullApiOperationResponseMap["postInfrastructureascodeJobs"]>;
}

export const GenesysCloudFullApiInfrastructureAsCodeGeneratedFunctionNames = [
  "GetInfrastructureascodeAccelerator",
  "GetInfrastructureascodeAccelerators",
  "GetInfrastructureascodeJob",
  "GetInfrastructureascodeJobs",
  "PostInfrastructureascodeJobs"
] as const satisfies readonly (keyof GenesysCloudFullApiInfrastructureAsCodeGeneratedClient)[];

export function createGenesysCloudFullApiInfrastructureAsCodeGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiInfrastructureAsCodeGeneratedClient {
  return {
    GetInfrastructureascodeAccelerator: (...args) => callOperation("getInfrastructureascodeAccelerator", ...(args as GenesysCloudFullApiOperationArgs<"getInfrastructureascodeAccelerator">)),
    GetInfrastructureascodeAccelerators: (...args) => callOperation("getInfrastructureascodeAccelerators", ...(args as GenesysCloudFullApiOperationArgs<"getInfrastructureascodeAccelerators">)),
    GetInfrastructureascodeJob: (...args) => callOperation("getInfrastructureascodeJob", ...(args as GenesysCloudFullApiOperationArgs<"getInfrastructureascodeJob">)),
    GetInfrastructureascodeJobs: (...args) => callOperation("getInfrastructureascodeJobs", ...(args as GenesysCloudFullApiOperationArgs<"getInfrastructureascodeJobs">)),
    PostInfrastructureascodeJobs: (...args) => callOperation("postInfrastructureascodeJobs", ...(args as GenesysCloudFullApiOperationArgs<"postInfrastructureascodeJobs">)),
  };
}
