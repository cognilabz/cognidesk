// Generated endpoint chunk for AppStoreFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AppStoreGeneratedOperationCaller,
  AppStoreFullApiOperationArgs,
  AppStoreFullApiOperationInput,
  AppStoreFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AppStoreFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AppStoreFullApiAppInfosOperationKeys = [
  "appInfos_ageRatingDeclaration_getToOneRelated",
  "appInfos_ageRatingDeclaration_getToOneRelationship",
  "appInfos_appInfoLocalizations_getToManyRelated",
  "appInfos_appInfoLocalizations_getToManyRelationship",
  "appInfos_getInstance",
  "appInfos_primaryCategory_getToOneRelated",
  "appInfos_primaryCategory_getToOneRelationship",
  "appInfos_primarySubcategoryOne_getToOneRelated",
  "appInfos_primarySubcategoryOne_getToOneRelationship",
  "appInfos_primarySubcategoryTwo_getToOneRelated",
  "appInfos_primarySubcategoryTwo_getToOneRelationship",
  "appInfos_secondaryCategory_getToOneRelated",
  "appInfos_secondaryCategory_getToOneRelationship",
  "appInfos_secondarySubcategoryOne_getToOneRelated",
  "appInfos_secondarySubcategoryOne_getToOneRelationship",
  "appInfos_secondarySubcategoryTwo_getToOneRelated",
  "appInfos_secondarySubcategoryTwo_getToOneRelationship",
  "appInfos_territoryAgeRatings_getToManyRelated",
  "appInfos_territoryAgeRatings_getToManyRelationship",
  "appInfos_updateInstance"
] as const;
export type AppStoreFullApiAppInfosOperationKey = typeof AppStoreFullApiAppInfosOperationKeys[number];
// End hardened literal operation keys.

export interface AppStoreFullApiAppInfosOperationPathParamMap {
  "appInfos_ageRatingDeclaration_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appInfos_ageRatingDeclaration_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appInfos_appInfoLocalizations_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appInfos_appInfoLocalizations_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appInfos_getInstance": { "id": AppStoreFullApiPathParamValue };
  "appInfos_primaryCategory_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appInfos_primaryCategory_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appInfos_primarySubcategoryOne_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appInfos_primarySubcategoryOne_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appInfos_primarySubcategoryTwo_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appInfos_primarySubcategoryTwo_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appInfos_secondaryCategory_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appInfos_secondaryCategory_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appInfos_secondarySubcategoryOne_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appInfos_secondarySubcategoryOne_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appInfos_secondarySubcategoryTwo_getToOneRelated": { "id": AppStoreFullApiPathParamValue };
  "appInfos_secondarySubcategoryTwo_getToOneRelationship": { "id": AppStoreFullApiPathParamValue };
  "appInfos_territoryAgeRatings_getToManyRelated": { "id": AppStoreFullApiPathParamValue };
  "appInfos_territoryAgeRatings_getToManyRelationship": { "id": AppStoreFullApiPathParamValue };
  "appInfos_updateInstance": { "id": AppStoreFullApiPathParamValue };
}

export interface AppStoreFullApiAppInfosOperationRequestMap {
  "appInfos_ageRatingDeclaration_getToOneRelated": AppStoreFullApiOperationInput<"appInfos_ageRatingDeclaration_getToOneRelated">;
  "appInfos_ageRatingDeclaration_getToOneRelationship": AppStoreFullApiOperationInput<"appInfos_ageRatingDeclaration_getToOneRelationship">;
  "appInfos_appInfoLocalizations_getToManyRelated": AppStoreFullApiOperationInput<"appInfos_appInfoLocalizations_getToManyRelated">;
  "appInfos_appInfoLocalizations_getToManyRelationship": AppStoreFullApiOperationInput<"appInfos_appInfoLocalizations_getToManyRelationship">;
  "appInfos_getInstance": AppStoreFullApiOperationInput<"appInfos_getInstance">;
  "appInfos_primaryCategory_getToOneRelated": AppStoreFullApiOperationInput<"appInfos_primaryCategory_getToOneRelated">;
  "appInfos_primaryCategory_getToOneRelationship": AppStoreFullApiOperationInput<"appInfos_primaryCategory_getToOneRelationship">;
  "appInfos_primarySubcategoryOne_getToOneRelated": AppStoreFullApiOperationInput<"appInfos_primarySubcategoryOne_getToOneRelated">;
  "appInfos_primarySubcategoryOne_getToOneRelationship": AppStoreFullApiOperationInput<"appInfos_primarySubcategoryOne_getToOneRelationship">;
  "appInfos_primarySubcategoryTwo_getToOneRelated": AppStoreFullApiOperationInput<"appInfos_primarySubcategoryTwo_getToOneRelated">;
  "appInfos_primarySubcategoryTwo_getToOneRelationship": AppStoreFullApiOperationInput<"appInfos_primarySubcategoryTwo_getToOneRelationship">;
  "appInfos_secondaryCategory_getToOneRelated": AppStoreFullApiOperationInput<"appInfos_secondaryCategory_getToOneRelated">;
  "appInfos_secondaryCategory_getToOneRelationship": AppStoreFullApiOperationInput<"appInfos_secondaryCategory_getToOneRelationship">;
  "appInfos_secondarySubcategoryOne_getToOneRelated": AppStoreFullApiOperationInput<"appInfos_secondarySubcategoryOne_getToOneRelated">;
  "appInfos_secondarySubcategoryOne_getToOneRelationship": AppStoreFullApiOperationInput<"appInfos_secondarySubcategoryOne_getToOneRelationship">;
  "appInfos_secondarySubcategoryTwo_getToOneRelated": AppStoreFullApiOperationInput<"appInfos_secondarySubcategoryTwo_getToOneRelated">;
  "appInfos_secondarySubcategoryTwo_getToOneRelationship": AppStoreFullApiOperationInput<"appInfos_secondarySubcategoryTwo_getToOneRelationship">;
  "appInfos_territoryAgeRatings_getToManyRelated": AppStoreFullApiOperationInput<"appInfos_territoryAgeRatings_getToManyRelated">;
  "appInfos_territoryAgeRatings_getToManyRelationship": AppStoreFullApiOperationInput<"appInfos_territoryAgeRatings_getToManyRelationship">;
  "appInfos_updateInstance": AppStoreFullApiOperationInput<"appInfos_updateInstance">;
}

export interface AppStoreFullApiAppInfosGeneratedClient {
  AppInfosAgeRatingDeclarationGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appInfos_ageRatingDeclaration_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appInfos_ageRatingDeclaration_getToOneRelated"]>;
  AppInfosAgeRatingDeclarationGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appInfos_ageRatingDeclaration_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appInfos_ageRatingDeclaration_getToOneRelationship"]>;
  AppInfosAppInfoLocalizationsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appInfos_appInfoLocalizations_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appInfos_appInfoLocalizations_getToManyRelated"]>;
  AppInfosAppInfoLocalizationsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appInfos_appInfoLocalizations_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appInfos_appInfoLocalizations_getToManyRelationship"]>;
  AppInfosGetInstance(...args: AppStoreFullApiOperationArgs<"appInfos_getInstance">): Promise<AppStoreFullApiOperationResponseMap["appInfos_getInstance"]>;
  AppInfosPrimaryCategoryGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appInfos_primaryCategory_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appInfos_primaryCategory_getToOneRelated"]>;
  AppInfosPrimaryCategoryGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appInfos_primaryCategory_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appInfos_primaryCategory_getToOneRelationship"]>;
  AppInfosPrimarySubcategoryOneGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appInfos_primarySubcategoryOne_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appInfos_primarySubcategoryOne_getToOneRelated"]>;
  AppInfosPrimarySubcategoryOneGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appInfos_primarySubcategoryOne_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appInfos_primarySubcategoryOne_getToOneRelationship"]>;
  AppInfosPrimarySubcategoryTwoGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appInfos_primarySubcategoryTwo_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appInfos_primarySubcategoryTwo_getToOneRelated"]>;
  AppInfosPrimarySubcategoryTwoGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appInfos_primarySubcategoryTwo_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appInfos_primarySubcategoryTwo_getToOneRelationship"]>;
  AppInfosSecondaryCategoryGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appInfos_secondaryCategory_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appInfos_secondaryCategory_getToOneRelated"]>;
  AppInfosSecondaryCategoryGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appInfos_secondaryCategory_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appInfos_secondaryCategory_getToOneRelationship"]>;
  AppInfosSecondarySubcategoryOneGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appInfos_secondarySubcategoryOne_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appInfos_secondarySubcategoryOne_getToOneRelated"]>;
  AppInfosSecondarySubcategoryOneGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appInfos_secondarySubcategoryOne_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appInfos_secondarySubcategoryOne_getToOneRelationship"]>;
  AppInfosSecondarySubcategoryTwoGetToOneRelated(...args: AppStoreFullApiOperationArgs<"appInfos_secondarySubcategoryTwo_getToOneRelated">): Promise<AppStoreFullApiOperationResponseMap["appInfos_secondarySubcategoryTwo_getToOneRelated"]>;
  AppInfosSecondarySubcategoryTwoGetToOneRelationship(...args: AppStoreFullApiOperationArgs<"appInfos_secondarySubcategoryTwo_getToOneRelationship">): Promise<AppStoreFullApiOperationResponseMap["appInfos_secondarySubcategoryTwo_getToOneRelationship"]>;
  AppInfosTerritoryAgeRatingsGetToManyRelated(...args: AppStoreFullApiOperationArgs<"appInfos_territoryAgeRatings_getToManyRelated">): Promise<AppStoreFullApiOperationResponseMap["appInfos_territoryAgeRatings_getToManyRelated"]>;
  AppInfosTerritoryAgeRatingsGetToManyRelationship(...args: AppStoreFullApiOperationArgs<"appInfos_territoryAgeRatings_getToManyRelationship">): Promise<AppStoreFullApiOperationResponseMap["appInfos_territoryAgeRatings_getToManyRelationship"]>;
  AppInfosUpdateInstance(...args: AppStoreFullApiOperationArgs<"appInfos_updateInstance">): Promise<AppStoreFullApiOperationResponseMap["appInfos_updateInstance"]>;
}

export const AppStoreFullApiAppInfosGeneratedFunctionNames = [
  "AppInfosAgeRatingDeclarationGetToOneRelated",
  "AppInfosAgeRatingDeclarationGetToOneRelationship",
  "AppInfosAppInfoLocalizationsGetToManyRelated",
  "AppInfosAppInfoLocalizationsGetToManyRelationship",
  "AppInfosGetInstance",
  "AppInfosPrimaryCategoryGetToOneRelated",
  "AppInfosPrimaryCategoryGetToOneRelationship",
  "AppInfosPrimarySubcategoryOneGetToOneRelated",
  "AppInfosPrimarySubcategoryOneGetToOneRelationship",
  "AppInfosPrimarySubcategoryTwoGetToOneRelated",
  "AppInfosPrimarySubcategoryTwoGetToOneRelationship",
  "AppInfosSecondaryCategoryGetToOneRelated",
  "AppInfosSecondaryCategoryGetToOneRelationship",
  "AppInfosSecondarySubcategoryOneGetToOneRelated",
  "AppInfosSecondarySubcategoryOneGetToOneRelationship",
  "AppInfosSecondarySubcategoryTwoGetToOneRelated",
  "AppInfosSecondarySubcategoryTwoGetToOneRelationship",
  "AppInfosTerritoryAgeRatingsGetToManyRelated",
  "AppInfosTerritoryAgeRatingsGetToManyRelationship",
  "AppInfosUpdateInstance"
] as const satisfies readonly (keyof AppStoreFullApiAppInfosGeneratedClient)[];

export function createAppStoreFullApiAppInfosGeneratedClient(
  callOperation: AppStoreGeneratedOperationCaller,
): AppStoreFullApiAppInfosGeneratedClient {
  return {
    AppInfosAgeRatingDeclarationGetToOneRelated: (...args) => callOperation("appInfos_ageRatingDeclaration_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appInfos_ageRatingDeclaration_getToOneRelated">)),
    AppInfosAgeRatingDeclarationGetToOneRelationship: (...args) => callOperation("appInfos_ageRatingDeclaration_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appInfos_ageRatingDeclaration_getToOneRelationship">)),
    AppInfosAppInfoLocalizationsGetToManyRelated: (...args) => callOperation("appInfos_appInfoLocalizations_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appInfos_appInfoLocalizations_getToManyRelated">)),
    AppInfosAppInfoLocalizationsGetToManyRelationship: (...args) => callOperation("appInfos_appInfoLocalizations_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appInfos_appInfoLocalizations_getToManyRelationship">)),
    AppInfosGetInstance: (...args) => callOperation("appInfos_getInstance", ...(args as AppStoreFullApiOperationArgs<"appInfos_getInstance">)),
    AppInfosPrimaryCategoryGetToOneRelated: (...args) => callOperation("appInfos_primaryCategory_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appInfos_primaryCategory_getToOneRelated">)),
    AppInfosPrimaryCategoryGetToOneRelationship: (...args) => callOperation("appInfos_primaryCategory_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appInfos_primaryCategory_getToOneRelationship">)),
    AppInfosPrimarySubcategoryOneGetToOneRelated: (...args) => callOperation("appInfos_primarySubcategoryOne_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appInfos_primarySubcategoryOne_getToOneRelated">)),
    AppInfosPrimarySubcategoryOneGetToOneRelationship: (...args) => callOperation("appInfos_primarySubcategoryOne_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appInfos_primarySubcategoryOne_getToOneRelationship">)),
    AppInfosPrimarySubcategoryTwoGetToOneRelated: (...args) => callOperation("appInfos_primarySubcategoryTwo_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appInfos_primarySubcategoryTwo_getToOneRelated">)),
    AppInfosPrimarySubcategoryTwoGetToOneRelationship: (...args) => callOperation("appInfos_primarySubcategoryTwo_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appInfos_primarySubcategoryTwo_getToOneRelationship">)),
    AppInfosSecondaryCategoryGetToOneRelated: (...args) => callOperation("appInfos_secondaryCategory_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appInfos_secondaryCategory_getToOneRelated">)),
    AppInfosSecondaryCategoryGetToOneRelationship: (...args) => callOperation("appInfos_secondaryCategory_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appInfos_secondaryCategory_getToOneRelationship">)),
    AppInfosSecondarySubcategoryOneGetToOneRelated: (...args) => callOperation("appInfos_secondarySubcategoryOne_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appInfos_secondarySubcategoryOne_getToOneRelated">)),
    AppInfosSecondarySubcategoryOneGetToOneRelationship: (...args) => callOperation("appInfos_secondarySubcategoryOne_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appInfos_secondarySubcategoryOne_getToOneRelationship">)),
    AppInfosSecondarySubcategoryTwoGetToOneRelated: (...args) => callOperation("appInfos_secondarySubcategoryTwo_getToOneRelated", ...(args as AppStoreFullApiOperationArgs<"appInfos_secondarySubcategoryTwo_getToOneRelated">)),
    AppInfosSecondarySubcategoryTwoGetToOneRelationship: (...args) => callOperation("appInfos_secondarySubcategoryTwo_getToOneRelationship", ...(args as AppStoreFullApiOperationArgs<"appInfos_secondarySubcategoryTwo_getToOneRelationship">)),
    AppInfosTerritoryAgeRatingsGetToManyRelated: (...args) => callOperation("appInfos_territoryAgeRatings_getToManyRelated", ...(args as AppStoreFullApiOperationArgs<"appInfos_territoryAgeRatings_getToManyRelated">)),
    AppInfosTerritoryAgeRatingsGetToManyRelationship: (...args) => callOperation("appInfos_territoryAgeRatings_getToManyRelationship", ...(args as AppStoreFullApiOperationArgs<"appInfos_territoryAgeRatings_getToManyRelationship">)),
    AppInfosUpdateInstance: (...args) => callOperation("appInfos_updateInstance", ...(args as AppStoreFullApiOperationArgs<"appInfos_updateInstance">)),
  };
}
