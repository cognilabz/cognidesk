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
export const ZendeskFullApiSearchOperationKeys = [
  "CountSearchResults",
  "ExportSearchResults",
  "ListSearchResults"
] as const;
export type ZendeskFullApiSearchOperationKey = typeof ZendeskFullApiSearchOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiSearchOperationPathParamMap {
  "CountSearchResults": {};
  "ExportSearchResults": {};
  "ListSearchResults": {};
}

export interface ZendeskFullApiSearchOperationRequestMap {
  "CountSearchResults": ZendeskFullApiOperationInput<"CountSearchResults">;
  "ExportSearchResults": ZendeskFullApiOperationInput<"ExportSearchResults">;
  "ListSearchResults": ZendeskFullApiOperationInput<"ListSearchResults">;
}

export interface ZendeskFullApiSearchGeneratedClient {
  CountSearchResults(...args: ZendeskFullApiOperationArgs<"CountSearchResults">): Promise<ZendeskFullApiOperationResponseMap["CountSearchResults"]>;
  ExportSearchResults(...args: ZendeskFullApiOperationArgs<"ExportSearchResults">): Promise<ZendeskFullApiOperationResponseMap["ExportSearchResults"]>;
  ListSearchResults(...args: ZendeskFullApiOperationArgs<"ListSearchResults">): Promise<ZendeskFullApiOperationResponseMap["ListSearchResults"]>;
}

export const ZendeskFullApiSearchGeneratedFunctionNames = [
  "CountSearchResults",
  "ExportSearchResults",
  "ListSearchResults"
] as const satisfies readonly (keyof ZendeskFullApiSearchGeneratedClient)[];

export function createZendeskFullApiSearchGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiSearchGeneratedClient {
  return {
    CountSearchResults: (...args) => callOperation("CountSearchResults", ...(args as ZendeskFullApiOperationArgs<"CountSearchResults">)),
    ExportSearchResults: (...args) => callOperation("ExportSearchResults", ...(args as ZendeskFullApiOperationArgs<"ExportSearchResults">)),
    ListSearchResults: (...args) => callOperation("ListSearchResults", ...(args as ZendeskFullApiOperationArgs<"ListSearchResults">)),
  };
}
