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
export const NiceCxoneFullApiExtractingDataOperationKeys = [
  "dataextraction-dataextraction-api-docs:getAllJobs:GET:/data-extraction/v1/jobs",
  "dataextraction-dataextraction-api-docs:extractData:POST:/data-extraction/v1/jobs",
  "dataextraction-dataextraction-api-docs:getJobStatus:GET:/data-extraction/v1/jobs/{jobId}"
] as const;
export type NiceCxoneFullApiExtractingDataOperationKey = typeof NiceCxoneFullApiExtractingDataOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiExtractingDataOperationPathParamMap {
  "dataextraction-dataextraction-api-docs:getAllJobs:GET:/data-extraction/v1/jobs": {};
  "dataextraction-dataextraction-api-docs:extractData:POST:/data-extraction/v1/jobs": {};
  "dataextraction-dataextraction-api-docs:getJobStatus:GET:/data-extraction/v1/jobs/{jobId}": { "jobId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiExtractingDataOperationRequestMap {
  "dataextraction-dataextraction-api-docs:getAllJobs:GET:/data-extraction/v1/jobs": NiceCxoneFullApiOperationInput<"dataextraction-dataextraction-api-docs:getAllJobs:GET:/data-extraction/v1/jobs">;
  "dataextraction-dataextraction-api-docs:extractData:POST:/data-extraction/v1/jobs": NiceCxoneFullApiOperationInput<"dataextraction-dataextraction-api-docs:extractData:POST:/data-extraction/v1/jobs">;
  "dataextraction-dataextraction-api-docs:getJobStatus:GET:/data-extraction/v1/jobs/{jobId}": NiceCxoneFullApiOperationInput<"dataextraction-dataextraction-api-docs:getJobStatus:GET:/data-extraction/v1/jobs/{jobId}">;
}

export interface NiceCxoneFullApiExtractingDataGeneratedClient {
  DataextractionDataextractionApiDocsGetAllJobs(...args: NiceCxoneFullApiOperationArgs<"dataextraction-dataextraction-api-docs:getAllJobs:GET:/data-extraction/v1/jobs">): Promise<NiceCxoneFullApiOperationResponseMap["dataextraction-dataextraction-api-docs:getAllJobs:GET:/data-extraction/v1/jobs"]>;
  DataextractionDataextractionApiDocsExtractData(...args: NiceCxoneFullApiOperationArgs<"dataextraction-dataextraction-api-docs:extractData:POST:/data-extraction/v1/jobs">): Promise<NiceCxoneFullApiOperationResponseMap["dataextraction-dataextraction-api-docs:extractData:POST:/data-extraction/v1/jobs"]>;
  DataextractionDataextractionApiDocsGetJobStatus(...args: NiceCxoneFullApiOperationArgs<"dataextraction-dataextraction-api-docs:getJobStatus:GET:/data-extraction/v1/jobs/{jobId}">): Promise<NiceCxoneFullApiOperationResponseMap["dataextraction-dataextraction-api-docs:getJobStatus:GET:/data-extraction/v1/jobs/{jobId}"]>;
}

export const NiceCxoneFullApiExtractingDataGeneratedFunctionNames = [
  "DataextractionDataextractionApiDocsGetAllJobs",
  "DataextractionDataextractionApiDocsExtractData",
  "DataextractionDataextractionApiDocsGetJobStatus"
] as const satisfies readonly (keyof NiceCxoneFullApiExtractingDataGeneratedClient)[];

export function createNiceCxoneFullApiExtractingDataGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiExtractingDataGeneratedClient {
  return {
    DataextractionDataextractionApiDocsGetAllJobs: (...args) => callOperation("dataextraction-dataextraction-api-docs:getAllJobs:GET:/data-extraction/v1/jobs", ...(args as NiceCxoneFullApiOperationArgs<"dataextraction-dataextraction-api-docs:getAllJobs:GET:/data-extraction/v1/jobs">)),
    DataextractionDataextractionApiDocsExtractData: (...args) => callOperation("dataextraction-dataextraction-api-docs:extractData:POST:/data-extraction/v1/jobs", ...(args as NiceCxoneFullApiOperationArgs<"dataextraction-dataextraction-api-docs:extractData:POST:/data-extraction/v1/jobs">)),
    DataextractionDataextractionApiDocsGetJobStatus: (...args) => callOperation("dataextraction-dataextraction-api-docs:getJobStatus:GET:/data-extraction/v1/jobs/{jobId}", ...(args as NiceCxoneFullApiOperationArgs<"dataextraction-dataextraction-api-docs:getJobStatus:GET:/data-extraction/v1/jobs/{jobId}">)),
  };
}
