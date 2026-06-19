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
export const GenesysCloudFullApiLanguagesOperationKeys = [
  "deleteLanguage",
  "getLanguage",
  "getLanguages",
  "getLanguagesTranslations",
  "getLanguagesTranslationsBuiltin",
  "getLanguagesTranslationsOrganization",
  "getLanguagesTranslationsUser",
  "postLanguages"
] as const;
export type GenesysCloudFullApiLanguagesOperationKey = typeof GenesysCloudFullApiLanguagesOperationKeys[number];
// End hardened literal operation keys.

export interface GenesysCloudFullApiLanguagesOperationPathParamMap {
  "deleteLanguage": { "languageId": GenesysCloudFullApiPathParamValue };
  "getLanguage": { "languageId": GenesysCloudFullApiPathParamValue };
  "getLanguages": {};
  "getLanguagesTranslations": {};
  "getLanguagesTranslationsBuiltin": {};
  "getLanguagesTranslationsOrganization": {};
  "getLanguagesTranslationsUser": { "userId": GenesysCloudFullApiPathParamValue };
  "postLanguages": {};
}

export interface GenesysCloudFullApiLanguagesOperationRequestMap {
  "deleteLanguage": GenesysCloudFullApiOperationInput<"deleteLanguage">;
  "getLanguage": GenesysCloudFullApiOperationInput<"getLanguage">;
  "getLanguages": GenesysCloudFullApiOperationInput<"getLanguages">;
  "getLanguagesTranslations": GenesysCloudFullApiOperationInput<"getLanguagesTranslations">;
  "getLanguagesTranslationsBuiltin": GenesysCloudFullApiOperationInput<"getLanguagesTranslationsBuiltin">;
  "getLanguagesTranslationsOrganization": GenesysCloudFullApiOperationInput<"getLanguagesTranslationsOrganization">;
  "getLanguagesTranslationsUser": GenesysCloudFullApiOperationInput<"getLanguagesTranslationsUser">;
  "postLanguages": GenesysCloudFullApiOperationInput<"postLanguages">;
}

export interface GenesysCloudFullApiLanguagesGeneratedClient {
  DeleteLanguage(...args: GenesysCloudFullApiOperationArgs<"deleteLanguage">): Promise<GenesysCloudFullApiOperationResponseMap["deleteLanguage"]>;
  GetLanguage(...args: GenesysCloudFullApiOperationArgs<"getLanguage">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguage"]>;
  GetLanguages(...args: GenesysCloudFullApiOperationArgs<"getLanguages">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguages"]>;
  GetLanguagesTranslations(...args: GenesysCloudFullApiOperationArgs<"getLanguagesTranslations">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguagesTranslations"]>;
  GetLanguagesTranslationsBuiltin(...args: GenesysCloudFullApiOperationArgs<"getLanguagesTranslationsBuiltin">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguagesTranslationsBuiltin"]>;
  GetLanguagesTranslationsOrganization(...args: GenesysCloudFullApiOperationArgs<"getLanguagesTranslationsOrganization">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguagesTranslationsOrganization"]>;
  GetLanguagesTranslationsUser(...args: GenesysCloudFullApiOperationArgs<"getLanguagesTranslationsUser">): Promise<GenesysCloudFullApiOperationResponseMap["getLanguagesTranslationsUser"]>;
  PostLanguages(...args: GenesysCloudFullApiOperationArgs<"postLanguages">): Promise<GenesysCloudFullApiOperationResponseMap["postLanguages"]>;
}

export const GenesysCloudFullApiLanguagesGeneratedFunctionNames = [
  "DeleteLanguage",
  "GetLanguage",
  "GetLanguages",
  "GetLanguagesTranslations",
  "GetLanguagesTranslationsBuiltin",
  "GetLanguagesTranslationsOrganization",
  "GetLanguagesTranslationsUser",
  "PostLanguages"
] as const satisfies readonly (keyof GenesysCloudFullApiLanguagesGeneratedClient)[];

export function createGenesysCloudFullApiLanguagesGeneratedClient(
  callOperation: GenesysCloudGeneratedOperationCaller,
): GenesysCloudFullApiLanguagesGeneratedClient {
  return {
    DeleteLanguage: (...args) => callOperation("deleteLanguage", ...(args as GenesysCloudFullApiOperationArgs<"deleteLanguage">)),
    GetLanguage: (...args) => callOperation("getLanguage", ...(args as GenesysCloudFullApiOperationArgs<"getLanguage">)),
    GetLanguages: (...args) => callOperation("getLanguages", ...(args as GenesysCloudFullApiOperationArgs<"getLanguages">)),
    GetLanguagesTranslations: (...args) => callOperation("getLanguagesTranslations", ...(args as GenesysCloudFullApiOperationArgs<"getLanguagesTranslations">)),
    GetLanguagesTranslationsBuiltin: (...args) => callOperation("getLanguagesTranslationsBuiltin", ...(args as GenesysCloudFullApiOperationArgs<"getLanguagesTranslationsBuiltin">)),
    GetLanguagesTranslationsOrganization: (...args) => callOperation("getLanguagesTranslationsOrganization", ...(args as GenesysCloudFullApiOperationArgs<"getLanguagesTranslationsOrganization">)),
    GetLanguagesTranslationsUser: (...args) => callOperation("getLanguagesTranslationsUser", ...(args as GenesysCloudFullApiOperationArgs<"getLanguagesTranslationsUser">)),
    PostLanguages: (...args) => callOperation("postLanguages", ...(args as GenesysCloudFullApiOperationArgs<"postLanguages">)),
  };
}
