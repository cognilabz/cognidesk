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
export const GorgiasFullApiSearchOperationKeys = [
  "search"
] as const;
export type GorgiasFullApiSearchOperationKey = typeof GorgiasFullApiSearchOperationKeys[number];
// End hardened literal operation keys.

export interface GorgiasFullApiSearchOperationPathParamMap {
  "search": {};
}

export interface GorgiasFullApiSearchOperationRequestMap {
  "search": GorgiasFullApiOperationInput<"search">;
}

export interface GorgiasFullApiSearchGeneratedClient {
  gorgiasSearch(...args: GorgiasFullApiOperationArgs<"search">): Promise<GorgiasFullApiOperationResponseMap["search"]>;
}

export const GorgiasFullApiSearchGeneratedFunctionNames = [
  "gorgiasSearch"
] as const satisfies readonly (keyof GorgiasFullApiSearchGeneratedClient)[];

export function createGorgiasFullApiSearchGeneratedClient(
  callOperation: GorgiasGeneratedOperationCaller,
): GorgiasFullApiSearchGeneratedClient {
  return {
    gorgiasSearch: (...args) => callOperation("search", ...(args as GorgiasFullApiOperationArgs<"search">)),
  };
}
