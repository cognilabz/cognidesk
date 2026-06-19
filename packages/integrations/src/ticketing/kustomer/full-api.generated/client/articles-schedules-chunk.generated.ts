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
export const KustomerFullApiArticlesSchedulesOperationKeys = [
  "Createarticleschedule",
  "DeleteArticleSchedule",
  "UpdateArticleSchedule"
] as const;
export type KustomerFullApiArticlesSchedulesOperationKey = typeof KustomerFullApiArticlesSchedulesOperationKeys[number];
// End hardened literal operation keys.

export interface KustomerFullApiArticlesSchedulesOperationPathParamMap {
  "Createarticleschedule": { "id": KustomerFullApiPathParamValue };
  "DeleteArticleSchedule": { "id": KustomerFullApiPathParamValue; "type": KustomerFullApiPathParamValue; "lang": KustomerFullApiPathParamValue };
  "UpdateArticleSchedule": { "id": KustomerFullApiPathParamValue; "type": KustomerFullApiPathParamValue; "lang": KustomerFullApiPathParamValue };
}

export interface KustomerFullApiArticlesSchedulesOperationRequestMap {
  "Createarticleschedule": KustomerFullApiOperationInput<"Createarticleschedule">;
  "DeleteArticleSchedule": KustomerFullApiOperationInput<"DeleteArticleSchedule">;
  "UpdateArticleSchedule": KustomerFullApiOperationInput<"UpdateArticleSchedule">;
}

export interface KustomerFullApiArticlesSchedulesGeneratedClient {
  kustomerCreatearticleschedule(...args: KustomerFullApiOperationArgs<"Createarticleschedule">): Promise<KustomerFullApiOperationResponseMap["Createarticleschedule"]>;
  kustomerDeleteArticleSchedule(...args: KustomerFullApiOperationArgs<"DeleteArticleSchedule">): Promise<KustomerFullApiOperationResponseMap["DeleteArticleSchedule"]>;
  kustomerUpdateArticleSchedule(...args: KustomerFullApiOperationArgs<"UpdateArticleSchedule">): Promise<KustomerFullApiOperationResponseMap["UpdateArticleSchedule"]>;
}

export const KustomerFullApiArticlesSchedulesGeneratedFunctionNames = [
  "kustomerCreatearticleschedule",
  "kustomerDeleteArticleSchedule",
  "kustomerUpdateArticleSchedule"
] as const satisfies readonly (keyof KustomerFullApiArticlesSchedulesGeneratedClient)[];

export function createKustomerFullApiArticlesSchedulesGeneratedClient(
  callOperation: KustomerGeneratedOperationCaller,
): KustomerFullApiArticlesSchedulesGeneratedClient {
  return {
    kustomerCreatearticleschedule: (...args) => callOperation("Createarticleschedule", ...(args as KustomerFullApiOperationArgs<"Createarticleschedule">)),
    kustomerDeleteArticleSchedule: (...args) => callOperation("DeleteArticleSchedule", ...(args as KustomerFullApiOperationArgs<"DeleteArticleSchedule">)),
    kustomerUpdateArticleSchedule: (...args) => callOperation("UpdateArticleSchedule", ...(args as KustomerFullApiOperationArgs<"UpdateArticleSchedule">)),
  };
}
