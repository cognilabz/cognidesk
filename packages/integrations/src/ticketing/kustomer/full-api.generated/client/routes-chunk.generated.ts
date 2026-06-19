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
export const KustomerFullApiRoutesOperationKeys = [
  "GetRoutesbyArticleID",
  "GetRoutesbyCategoryID",
  "CreateaCategoryRoute",
  "GetRoutebyURL(Public)",
  "GetRoutes",
  "CreateaRoute",
  "DeleteRoutebyID",
  "GetRoutebyID",
  "UpdateRoute"
] as const;
export type KustomerFullApiRoutesOperationKey = typeof KustomerFullApiRoutesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiRoutesOperationPathParamMap {
  "GetRoutesbyArticleID": { "id": KustomerFullApiPathParamValue };
  "GetRoutesbyCategoryID": { "id": KustomerFullApiPathParamValue };
  "CreateaCategoryRoute": { "id": KustomerFullApiPathParamValue };
  "GetRoutebyURL(Public)": {};
  "GetRoutes": {};
  "CreateaRoute": {};
  "DeleteRoutebyID": { "id": KustomerFullApiPathParamValue };
  "GetRoutebyID": { "id": KustomerFullApiPathParamValue };
  "UpdateRoute": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiRoutesOperationRequestMap {
  "GetRoutesbyArticleID": KustomerFullApiOperationInput<"GetRoutesbyArticleID">;
  "GetRoutesbyCategoryID": KustomerFullApiOperationInput<"GetRoutesbyCategoryID">;
  "CreateaCategoryRoute": KustomerFullApiOperationInput<"CreateaCategoryRoute">;
  "GetRoutebyURL(Public)": KustomerFullApiOperationInput<"GetRoutebyURL(Public)">;
  "GetRoutes": KustomerFullApiOperationInput<"GetRoutes">;
  "CreateaRoute": KustomerFullApiOperationInput<"CreateaRoute">;
  "DeleteRoutebyID": KustomerFullApiOperationInput<"DeleteRoutebyID">;
  "GetRoutebyID": KustomerFullApiOperationInput<"GetRoutebyID">;
  "UpdateRoute": KustomerFullApiOperationInput<"UpdateRoute">;
}

export interface KustomerFullApiRoutesGeneratedClient {
  kustomerGetRoutesbyArticleID(...args: KustomerFullApiOperationArgs<"GetRoutesbyArticleID">): Promise<KustomerFullApiOperationResponseMap["GetRoutesbyArticleID"]>;
  kustomerGetRoutesbyCategoryID(...args: KustomerFullApiOperationArgs<"GetRoutesbyCategoryID">): Promise<KustomerFullApiOperationResponseMap["GetRoutesbyCategoryID"]>;
  kustomerCreateaCategoryRoute(...args: KustomerFullApiOperationArgs<"CreateaCategoryRoute">): Promise<KustomerFullApiOperationResponseMap["CreateaCategoryRoute"]>;
  kustomerGetRoutebyURLPublic(...args: KustomerFullApiOperationArgs<"GetRoutebyURL(Public)">): Promise<KustomerFullApiOperationResponseMap["GetRoutebyURL(Public)"]>;
  kustomerGetRoutes(...args: KustomerFullApiOperationArgs<"GetRoutes">): Promise<KustomerFullApiOperationResponseMap["GetRoutes"]>;
  kustomerCreateaRoute(...args: KustomerFullApiOperationArgs<"CreateaRoute">): Promise<KustomerFullApiOperationResponseMap["CreateaRoute"]>;
  kustomerDeleteRoutebyID(...args: KustomerFullApiOperationArgs<"DeleteRoutebyID">): Promise<KustomerFullApiOperationResponseMap["DeleteRoutebyID"]>;
  kustomerGetRoutebyID(...args: KustomerFullApiOperationArgs<"GetRoutebyID">): Promise<KustomerFullApiOperationResponseMap["GetRoutebyID"]>;
  kustomerUpdateRoute(...args: KustomerFullApiOperationArgs<"UpdateRoute">): Promise<KustomerFullApiOperationResponseMap["UpdateRoute"]>;
}

export const KustomerFullApiRoutesGeneratedFunctionNames = [
  "kustomerGetRoutesbyArticleID",
  "kustomerGetRoutesbyCategoryID",
  "kustomerCreateaCategoryRoute",
  "kustomerGetRoutebyURLPublic",
  "kustomerGetRoutes",
  "kustomerCreateaRoute",
  "kustomerDeleteRoutebyID",
  "kustomerGetRoutebyID",
  "kustomerUpdateRoute"
] as const satisfies readonly (keyof KustomerFullApiRoutesGeneratedClient)[];

export function createKustomerFullApiRoutesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiRoutesGeneratedClient {
  return {
    kustomerGetRoutesbyArticleID: (...args) => callOperation("GetRoutesbyArticleID", ...(args as KustomerFullApiOperationArgs<"GetRoutesbyArticleID">)),
    kustomerGetRoutesbyCategoryID: (...args) => callOperation("GetRoutesbyCategoryID", ...(args as KustomerFullApiOperationArgs<"GetRoutesbyCategoryID">)),
    kustomerCreateaCategoryRoute: (...args) => callOperation("CreateaCategoryRoute", ...(args as KustomerFullApiOperationArgs<"CreateaCategoryRoute">)),
    kustomerGetRoutebyURLPublic: (...args) => callOperation("GetRoutebyURL(Public)", ...(args as KustomerFullApiOperationArgs<"GetRoutebyURL(Public)">)),
    kustomerGetRoutes: (...args) => callOperation("GetRoutes", ...(args as KustomerFullApiOperationArgs<"GetRoutes">)),
    kustomerCreateaRoute: (...args) => callOperation("CreateaRoute", ...(args as KustomerFullApiOperationArgs<"CreateaRoute">)),
    kustomerDeleteRoutebyID: (...args) => callOperation("DeleteRoutebyID", ...(args as KustomerFullApiOperationArgs<"DeleteRoutebyID">)),
    kustomerGetRoutebyID: (...args) => callOperation("GetRoutebyID", ...(args as KustomerFullApiOperationArgs<"GetRoutebyID">)),
    kustomerUpdateRoute: (...args) => callOperation("UpdateRoute", ...(args as KustomerFullApiOperationArgs<"UpdateRoute">)),
  };
}
