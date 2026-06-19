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
export const KustomerFullApiThemesOperationKeys = [
  "GetThemebyID(Public)",
  "GetActiveTheme(Public)",
  "GetThemes",
  "CreateaTheme",
  "GetThemesbyID"
] as const;
export type KustomerFullApiThemesOperationKey = typeof KustomerFullApiThemesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiThemesOperationPathParamMap {
  "GetThemebyID(Public)": { "id": KustomerFullApiPathParamValue };
  "GetActiveTheme(Public)": {};
  "GetThemes": {};
  "CreateaTheme": {};
  "GetThemesbyID": { "id": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiThemesOperationRequestMap {
  "GetThemebyID(Public)": KustomerFullApiOperationInput<"GetThemebyID(Public)">;
  "GetActiveTheme(Public)": KustomerFullApiOperationInput<"GetActiveTheme(Public)">;
  "GetThemes": KustomerFullApiOperationInput<"GetThemes">;
  "CreateaTheme": KustomerFullApiOperationInput<"CreateaTheme">;
  "GetThemesbyID": KustomerFullApiOperationInput<"GetThemesbyID">;
}

export interface KustomerFullApiThemesGeneratedClient {
  kustomerGetThemebyIDPublic(...args: KustomerFullApiOperationArgs<"GetThemebyID(Public)">): Promise<KustomerFullApiOperationResponseMap["GetThemebyID(Public)"]>;
  kustomerGetActiveThemePublic(...args: KustomerFullApiOperationArgs<"GetActiveTheme(Public)">): Promise<KustomerFullApiOperationResponseMap["GetActiveTheme(Public)"]>;
  kustomerGetThemes(...args: KustomerFullApiOperationArgs<"GetThemes">): Promise<KustomerFullApiOperationResponseMap["GetThemes"]>;
  kustomerCreateaTheme(...args: KustomerFullApiOperationArgs<"CreateaTheme">): Promise<KustomerFullApiOperationResponseMap["CreateaTheme"]>;
  kustomerGetThemesbyID(...args: KustomerFullApiOperationArgs<"GetThemesbyID">): Promise<KustomerFullApiOperationResponseMap["GetThemesbyID"]>;
}

export const KustomerFullApiThemesGeneratedFunctionNames = [
  "kustomerGetThemebyIDPublic",
  "kustomerGetActiveThemePublic",
  "kustomerGetThemes",
  "kustomerCreateaTheme",
  "kustomerGetThemesbyID"
] as const satisfies readonly (keyof KustomerFullApiThemesGeneratedClient)[];

export function createKustomerFullApiThemesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiThemesGeneratedClient {
  return {
    kustomerGetThemebyIDPublic: (...args) => callOperation("GetThemebyID(Public)", ...(args as KustomerFullApiOperationArgs<"GetThemebyID(Public)">)),
    kustomerGetActiveThemePublic: (...args) => callOperation("GetActiveTheme(Public)", ...(args as KustomerFullApiOperationArgs<"GetActiveTheme(Public)">)),
    kustomerGetThemes: (...args) => callOperation("GetThemes", ...(args as KustomerFullApiOperationArgs<"GetThemes">)),
    kustomerCreateaTheme: (...args) => callOperation("CreateaTheme", ...(args as KustomerFullApiOperationArgs<"CreateaTheme">)),
    kustomerGetThemesbyID: (...args) => callOperation("GetThemesbyID", ...(args as KustomerFullApiOperationArgs<"GetThemesbyID">)),
  };
}
