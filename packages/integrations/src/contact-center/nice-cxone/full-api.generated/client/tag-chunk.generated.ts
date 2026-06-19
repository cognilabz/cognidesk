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
export const NiceCxoneFullApiTagOperationKeys = [
  "digital-tag-api-docs:getTags:GET:/tags",
  "digital-tag-api-docs:createTag:PUT:/tags"
] as const;
export type NiceCxoneFullApiTagOperationKey = typeof NiceCxoneFullApiTagOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiTagOperationPathParamMap {
  "digital-tag-api-docs:getTags:GET:/tags": {};
  "digital-tag-api-docs:createTag:PUT:/tags": {};
}

export interface NiceCxoneFullApiTagOperationRequestMap {
  "digital-tag-api-docs:getTags:GET:/tags": NiceCxoneFullApiOperationInput<"digital-tag-api-docs:getTags:GET:/tags">;
  "digital-tag-api-docs:createTag:PUT:/tags": NiceCxoneFullApiOperationInput<"digital-tag-api-docs:createTag:PUT:/tags">;
}

export interface NiceCxoneFullApiTagGeneratedClient {
  DigitalTagApiDocsGetTags(...args: NiceCxoneFullApiOperationArgs<"digital-tag-api-docs:getTags:GET:/tags">): Promise<NiceCxoneFullApiOperationResponseMap["digital-tag-api-docs:getTags:GET:/tags"]>;
  DigitalTagApiDocsCreateTag(...args: NiceCxoneFullApiOperationArgs<"digital-tag-api-docs:createTag:PUT:/tags">): Promise<NiceCxoneFullApiOperationResponseMap["digital-tag-api-docs:createTag:PUT:/tags"]>;
}

export const NiceCxoneFullApiTagGeneratedFunctionNames = [
  "DigitalTagApiDocsGetTags",
  "DigitalTagApiDocsCreateTag"
] as const satisfies readonly (keyof NiceCxoneFullApiTagGeneratedClient)[];

export function createNiceCxoneFullApiTagGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiTagGeneratedClient {
  return {
    DigitalTagApiDocsGetTags: (...args) => callOperation("digital-tag-api-docs:getTags:GET:/tags", ...(args as NiceCxoneFullApiOperationArgs<"digital-tag-api-docs:getTags:GET:/tags">)),
    DigitalTagApiDocsCreateTag: (...args) => callOperation("digital-tag-api-docs:createTag:PUT:/tags", ...(args as NiceCxoneFullApiOperationArgs<"digital-tag-api-docs:createTag:PUT:/tags">)),
  };
}
