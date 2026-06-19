// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiSpeechAnalyticsOperationKeys = [
  "qmsa:GET /speechAnalysis/categories/count",
  "qmsa:GET /speechAnalysis/categories",
  "qmsa:GET /speechAnalysis/{categoryId}/topics/count",
  "qmsa:GET /speechAnalysis/{categoryId}/topics"
] as const;
export type EightByEightContactCenterApiSpeechAnalyticsOperationKey = typeof EightByEightContactCenterApiSpeechAnalyticsOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiSpeechAnalyticsOperationPathParamMap {
  "qmsa:GET /speechAnalysis/categories/count": {};
  "qmsa:GET /speechAnalysis/categories": {};
  "qmsa:GET /speechAnalysis/{categoryId}/topics/count": { "categoryId": EightByEightContactCenterApiPathParamValue };
  "qmsa:GET /speechAnalysis/{categoryId}/topics": { "categoryId": EightByEightContactCenterApiPathParamValue };
}

export interface EightByEightContactCenterApiSpeechAnalyticsOperationRequestMap {
  "qmsa:GET /speechAnalysis/categories/count": EightByEightContactCenterApiOperationInput<"qmsa:GET /speechAnalysis/categories/count">;
  "qmsa:GET /speechAnalysis/categories": EightByEightContactCenterApiOperationInput<"qmsa:GET /speechAnalysis/categories">;
  "qmsa:GET /speechAnalysis/{categoryId}/topics/count": EightByEightContactCenterApiOperationInput<"qmsa:GET /speechAnalysis/{categoryId}/topics/count">;
  "qmsa:GET /speechAnalysis/{categoryId}/topics": EightByEightContactCenterApiOperationInput<"qmsa:GET /speechAnalysis/{categoryId}/topics">;
}

export interface EightByEightContactCenterApiSpeechAnalyticsGeneratedClient {
  CategoriesCount(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /speechAnalysis/categories/count">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /speechAnalysis/categories/count"]>;
  List(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /speechAnalysis/categories">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /speechAnalysis/categories"]>;
  TopicsCount(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /speechAnalysis/{categoryId}/topics/count">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /speechAnalysis/{categoryId}/topics/count"]>;
  TopicsList(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /speechAnalysis/{categoryId}/topics">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /speechAnalysis/{categoryId}/topics"]>;
}

export const EightByEightContactCenterApiSpeechAnalyticsGeneratedFunctionNames = [
  "CategoriesCount",
  "List",
  "TopicsCount",
  "TopicsList"
] as const satisfies readonly (keyof EightByEightContactCenterApiSpeechAnalyticsGeneratedClient)[];

export function createEightByEightContactCenterApiSpeechAnalyticsGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiSpeechAnalyticsGeneratedClient {
  return {
    CategoriesCount: (...args) => callOperation("qmsa:GET /speechAnalysis/categories/count", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /speechAnalysis/categories/count">)),
    List: (...args) => callOperation("qmsa:GET /speechAnalysis/categories", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /speechAnalysis/categories">)),
    TopicsCount: (...args) => callOperation("qmsa:GET /speechAnalysis/{categoryId}/topics/count", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /speechAnalysis/{categoryId}/topics/count">)),
    TopicsList: (...args) => callOperation("qmsa:GET /speechAnalysis/{categoryId}/topics", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /speechAnalysis/{categoryId}/topics">)),
  };
}
