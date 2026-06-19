// Generated endpoint chunk for KustomerFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  KustomerGeneratedOperationCaller,
  KustomerFullApiOperationArgs,
  KustomerFullApiOperationInput,
  KustomerFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { KustomerFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const KustomerFullApiKViewsKlassViewsOperationKeys = [
  "GetKViews",
  "GetKViewsbyResource",
  "UpdateKViewsOrder",
  "UpdateKView"
] as const;
export type KustomerFullApiKViewsKlassViewsOperationKey = typeof KustomerFullApiKViewsKlassViewsOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiKViewsKlassViewsOperationPathParamMap {
  "GetKViews": {};
  "GetKViewsbyResource": { "resource": KustomerFullApiPathParamValue };
  "UpdateKViewsOrder": { "resource": KustomerFullApiPathParamValue; "context": KustomerFullApiPathParamValue };
  "UpdateKView": { "resource": KustomerFullApiPathParamValue; "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiKViewsKlassViewsOperationRequestMap {
  "GetKViews": KustomerFullApiOperationInput<"GetKViews">;
  "GetKViewsbyResource": KustomerFullApiOperationInput<"GetKViewsbyResource">;
  "UpdateKViewsOrder": KustomerFullApiOperationInput<"UpdateKViewsOrder">;
  "UpdateKView": KustomerFullApiOperationInput<"UpdateKView">;
}

export interface KustomerFullApiKViewsKlassViewsGeneratedClient {
  kustomerGetKViews(...args: KustomerFullApiOperationArgs<"GetKViews">): Promise<KustomerFullApiOperationResponseMap["GetKViews"]>;
  kustomerGetKViewsbyResource(...args: KustomerFullApiOperationArgs<"GetKViewsbyResource">): Promise<KustomerFullApiOperationResponseMap["GetKViewsbyResource"]>;
  kustomerUpdateKViewsOrder(...args: KustomerFullApiOperationArgs<"UpdateKViewsOrder">): Promise<KustomerFullApiOperationResponseMap["UpdateKViewsOrder"]>;
  kustomerUpdateKView(...args: KustomerFullApiOperationArgs<"UpdateKView">): Promise<KustomerFullApiOperationResponseMap["UpdateKView"]>;
}

export const KustomerFullApiKViewsKlassViewsGeneratedFunctionNames = [
  "kustomerGetKViews",
  "kustomerGetKViewsbyResource",
  "kustomerUpdateKViewsOrder",
  "kustomerUpdateKView"
] as const satisfies readonly (keyof KustomerFullApiKViewsKlassViewsGeneratedClient)[];

export function createKustomerFullApiKViewsKlassViewsGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiKViewsKlassViewsGeneratedClient {
  return {
    kustomerGetKViews: (...args) => callOperation("GetKViews", ...(args as KustomerFullApiOperationArgs<"GetKViews">)),
    kustomerGetKViewsbyResource: (...args) => callOperation("GetKViewsbyResource", ...(args as KustomerFullApiOperationArgs<"GetKViewsbyResource">)),
    kustomerUpdateKViewsOrder: (...args) => callOperation("UpdateKViewsOrder", ...(args as KustomerFullApiOperationArgs<"UpdateKViewsOrder">)),
    kustomerUpdateKView: (...args) => callOperation("UpdateKView", ...(args as KustomerFullApiOperationArgs<"UpdateKView">)),
  };
}
