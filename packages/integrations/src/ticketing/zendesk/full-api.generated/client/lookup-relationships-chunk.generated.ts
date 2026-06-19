// Generated endpoint chunk for ZendeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZendeskGeneratedOperationCaller,
  ZendeskFullApiOperationArgs,
  ZendeskFullApiOperationInput,
  ZendeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZendeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZendeskFullApiLookupRelationshipsOperationKeys = [
  "GetRelationshipFilterDefinitions",
  "GetSourcesByTarget"
] as const;
export type ZendeskFullApiLookupRelationshipsOperationKey = typeof ZendeskFullApiLookupRelationshipsOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiLookupRelationshipsOperationPathParamMap {
  "GetRelationshipFilterDefinitions": { "target_type": ZendeskFullApiPathParamValue };
  "GetSourcesByTarget": { "target_type": ZendeskFullApiPathParamValue; "target_id": ZendeskFullApiPathParamValue; "field_id": ZendeskFullApiPathParamValue; "source_type": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiLookupRelationshipsOperationRequestMap {
  "GetRelationshipFilterDefinitions": ZendeskFullApiOperationInput<"GetRelationshipFilterDefinitions">;
  "GetSourcesByTarget": ZendeskFullApiOperationInput<"GetSourcesByTarget">;
}

export interface ZendeskFullApiLookupRelationshipsGeneratedClient {
  GetRelationshipFilterDefinitions(...args: ZendeskFullApiOperationArgs<"GetRelationshipFilterDefinitions">): Promise<ZendeskFullApiOperationResponseMap["GetRelationshipFilterDefinitions"]>;
  GetSourcesByTarget(...args: ZendeskFullApiOperationArgs<"GetSourcesByTarget">): Promise<ZendeskFullApiOperationResponseMap["GetSourcesByTarget"]>;
}

export const ZendeskFullApiLookupRelationshipsGeneratedFunctionNames = [
  "GetRelationshipFilterDefinitions",
  "GetSourcesByTarget"
] as const satisfies readonly (keyof ZendeskFullApiLookupRelationshipsGeneratedClient)[];

export function createZendeskFullApiLookupRelationshipsGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiLookupRelationshipsGeneratedClient {
  return {
    GetRelationshipFilterDefinitions: (...args) => callOperation("GetRelationshipFilterDefinitions", ...(args as ZendeskFullApiOperationArgs<"GetRelationshipFilterDefinitions">)),
    GetSourcesByTarget: (...args) => callOperation("GetSourcesByTarget", ...(args as ZendeskFullApiOperationArgs<"GetSourcesByTarget">)),
  };
}
