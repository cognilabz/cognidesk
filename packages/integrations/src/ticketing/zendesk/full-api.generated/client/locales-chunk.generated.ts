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
export const ZendeskFullApiLocalesOperationKeys = [
  "DetectBestLocale",
  "ListAvailablePublicLocales",
  "ListLocales",
  "ListLocalesForAgent",
  "ShowCurrentLocale",
  "ShowLocaleById"
] as const;
export type ZendeskFullApiLocalesOperationKey = typeof ZendeskFullApiLocalesOperationKeys[number];
// End hardened literal operation keys.

export interface ZendeskFullApiLocalesOperationPathParamMap {
  "DetectBestLocale": {};
  "ListAvailablePublicLocales": {};
  "ListLocales": {};
  "ListLocalesForAgent": {};
  "ShowCurrentLocale": {};
  "ShowLocaleById": { "locale_id": ZendeskFullApiPathParamValue };
}

export interface ZendeskFullApiLocalesOperationRequestMap {
  "DetectBestLocale": ZendeskFullApiOperationInput<"DetectBestLocale">;
  "ListAvailablePublicLocales": ZendeskFullApiOperationInput<"ListAvailablePublicLocales">;
  "ListLocales": ZendeskFullApiOperationInput<"ListLocales">;
  "ListLocalesForAgent": ZendeskFullApiOperationInput<"ListLocalesForAgent">;
  "ShowCurrentLocale": ZendeskFullApiOperationInput<"ShowCurrentLocale">;
  "ShowLocaleById": ZendeskFullApiOperationInput<"ShowLocaleById">;
}

export interface ZendeskFullApiLocalesGeneratedClient {
  DetectBestLocale(...args: ZendeskFullApiOperationArgs<"DetectBestLocale">): Promise<ZendeskFullApiOperationResponseMap["DetectBestLocale"]>;
  ListAvailablePublicLocales(...args: ZendeskFullApiOperationArgs<"ListAvailablePublicLocales">): Promise<ZendeskFullApiOperationResponseMap["ListAvailablePublicLocales"]>;
  ListLocales(...args: ZendeskFullApiOperationArgs<"ListLocales">): Promise<ZendeskFullApiOperationResponseMap["ListLocales"]>;
  ListLocalesForAgent(...args: ZendeskFullApiOperationArgs<"ListLocalesForAgent">): Promise<ZendeskFullApiOperationResponseMap["ListLocalesForAgent"]>;
  ShowCurrentLocale(...args: ZendeskFullApiOperationArgs<"ShowCurrentLocale">): Promise<ZendeskFullApiOperationResponseMap["ShowCurrentLocale"]>;
  ShowLocaleById(...args: ZendeskFullApiOperationArgs<"ShowLocaleById">): Promise<ZendeskFullApiOperationResponseMap["ShowLocaleById"]>;
}

export const ZendeskFullApiLocalesGeneratedFunctionNames = [
  "DetectBestLocale",
  "ListAvailablePublicLocales",
  "ListLocales",
  "ListLocalesForAgent",
  "ShowCurrentLocale",
  "ShowLocaleById"
] as const satisfies readonly (keyof ZendeskFullApiLocalesGeneratedClient)[];

export function createZendeskFullApiLocalesGeneratedClient(
  callOperation: ZendeskGeneratedOperationCaller,
): ZendeskFullApiLocalesGeneratedClient {
  return {
    DetectBestLocale: (...args) => callOperation("DetectBestLocale", ...(args as ZendeskFullApiOperationArgs<"DetectBestLocale">)),
    ListAvailablePublicLocales: (...args) => callOperation("ListAvailablePublicLocales", ...(args as ZendeskFullApiOperationArgs<"ListAvailablePublicLocales">)),
    ListLocales: (...args) => callOperation("ListLocales", ...(args as ZendeskFullApiOperationArgs<"ListLocales">)),
    ListLocalesForAgent: (...args) => callOperation("ListLocalesForAgent", ...(args as ZendeskFullApiOperationArgs<"ListLocalesForAgent">)),
    ShowCurrentLocale: (...args) => callOperation("ShowCurrentLocale", ...(args as ZendeskFullApiOperationArgs<"ShowCurrentLocale">)),
    ShowLocaleById: (...args) => callOperation("ShowLocaleById", ...(args as ZendeskFullApiOperationArgs<"ShowLocaleById">)),
  };
}
