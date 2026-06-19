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
export const GenesysCloudFullApiJourney02OperationKeys = [
  "putJourneyViewSchedules",
  "putJourneyViewsEventdefinition",
  "putJourneyViewsEventdefinitionActivate",
  "putJourneyViewVersion"
] as const;
export type GenesysCloudFullApiJourney02OperationKey = typeof GenesysCloudFullApiJourney02OperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiJourney02OperationPathParamMap {
  "putJourneyViewSchedules": { "viewId": GenesysCloudFullApiPathParamValue };
  "putJourneyViewsEventdefinition": { "eventDefinitionId": GenesysCloudFullApiPathParamValue };
  "putJourneyViewsEventdefinitionActivate": { "eventDefinitionId": GenesysCloudFullApiPathParamValue };
  "putJourneyViewVersion": { "viewId": GenesysCloudFullApiPathParamValue; "versionId": GenesysCloudFullApiPathParamValue };
}

export interface GenesysCloudFullApiJourney02OperationRequestMap {
  "putJourneyViewSchedules": GenesysCloudFullApiOperationInput<"putJourneyViewSchedules">;
  "putJourneyViewsEventdefinition": GenesysCloudFullApiOperationInput<"putJourneyViewsEventdefinition">;
  "putJourneyViewsEventdefinitionActivate": GenesysCloudFullApiOperationInput<"putJourneyViewsEventdefinitionActivate">;
  "putJourneyViewVersion": GenesysCloudFullApiOperationInput<"putJourneyViewVersion">;
}

export interface GenesysCloudFullApiJourney02GeneratedClient {
  PutJourneyViewSchedules(...args: GenesysCloudFullApiOperationArgs<"putJourneyViewSchedules">): Promise<GenesysCloudFullApiOperationResponseMap["putJourneyViewSchedules"]>;
  PutJourneyViewsEventdefinition(...args: GenesysCloudFullApiOperationArgs<"putJourneyViewsEventdefinition">): Promise<GenesysCloudFullApiOperationResponseMap["putJourneyViewsEventdefinition"]>;
  PutJourneyViewsEventdefinitionActivate(...args: GenesysCloudFullApiOperationArgs<"putJourneyViewsEventdefinitionActivate">): Promise<GenesysCloudFullApiOperationResponseMap["putJourneyViewsEventdefinitionActivate"]>;
  PutJourneyViewVersion(...args: GenesysCloudFullApiOperationArgs<"putJourneyViewVersion">): Promise<GenesysCloudFullApiOperationResponseMap["putJourneyViewVersion"]>;
}

export const GenesysCloudFullApiJourney02GeneratedFunctionNames = [
  "PutJourneyViewSchedules",
  "PutJourneyViewsEventdefinition",
  "PutJourneyViewsEventdefinitionActivate",
  "PutJourneyViewVersion"
] as const satisfies readonly (keyof GenesysCloudFullApiJourney02GeneratedClient)[];

export function createGenesysCloudFullApiJourney02GeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiJourney02GeneratedClient {
  return {
    PutJourneyViewSchedules: (...args) => callOperation("putJourneyViewSchedules", ...(args as GenesysCloudFullApiOperationArgs<"putJourneyViewSchedules">)),
    PutJourneyViewsEventdefinition: (...args) => callOperation("putJourneyViewsEventdefinition", ...(args as GenesysCloudFullApiOperationArgs<"putJourneyViewsEventdefinition">)),
    PutJourneyViewsEventdefinitionActivate: (...args) => callOperation("putJourneyViewsEventdefinitionActivate", ...(args as GenesysCloudFullApiOperationArgs<"putJourneyViewsEventdefinitionActivate">)),
    PutJourneyViewVersion: (...args) => callOperation("putJourneyViewVersion", ...(args as GenesysCloudFullApiOperationArgs<"putJourneyViewVersion">)),
  };
}
