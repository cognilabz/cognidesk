// Generated endpoint chunk for TalkdeskFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TalkdeskGeneratedOperationCaller,
  TalkdeskFullApiOperationArgs,
  TalkdeskFullApiOperationInput,
  TalkdeskFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TalkdeskFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TalkdeskFullApiFallbackExperienceOperationKeys = [
  "fallback-experience-get",
  "fallback-experience-put",
  "getFallbackExperienceSettings",
  "putFallbackExperienceSettings"
] as const;
export type TalkdeskFullApiFallbackExperienceOperationKey = typeof TalkdeskFullApiFallbackExperienceOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiFallbackExperienceOperationPathParamMap {
  "fallback-experience-get": {};
  "fallback-experience-put": {};
  "getFallbackExperienceSettings": {};
  "putFallbackExperienceSettings": {};
}

export interface TalkdeskFullApiFallbackExperienceOperationRequestMap {
  "fallback-experience-get": TalkdeskFullApiOperationInput<"fallback-experience-get">;
  "fallback-experience-put": TalkdeskFullApiOperationInput<"fallback-experience-put">;
  "getFallbackExperienceSettings": TalkdeskFullApiOperationInput<"getFallbackExperienceSettings">;
  "putFallbackExperienceSettings": TalkdeskFullApiOperationInput<"putFallbackExperienceSettings">;
}

export interface TalkdeskFullApiFallbackExperienceGeneratedClient {
  FallbackExperienceGet(...args: TalkdeskFullApiOperationArgs<"fallback-experience-get">): Promise<TalkdeskFullApiOperationResponseMap["fallback-experience-get"]>;
  FallbackExperiencePut(...args: TalkdeskFullApiOperationArgs<"fallback-experience-put">): Promise<TalkdeskFullApiOperationResponseMap["fallback-experience-put"]>;
  GetFallbackExperienceSettings(...args: TalkdeskFullApiOperationArgs<"getFallbackExperienceSettings">): Promise<TalkdeskFullApiOperationResponseMap["getFallbackExperienceSettings"]>;
  PutFallbackExperienceSettings(...args: TalkdeskFullApiOperationArgs<"putFallbackExperienceSettings">): Promise<TalkdeskFullApiOperationResponseMap["putFallbackExperienceSettings"]>;
}

export const TalkdeskFullApiFallbackExperienceGeneratedFunctionNames = [
  "FallbackExperienceGet",
  "FallbackExperiencePut",
  "GetFallbackExperienceSettings",
  "PutFallbackExperienceSettings"
] as const satisfies readonly (keyof TalkdeskFullApiFallbackExperienceGeneratedClient)[];

export function createTalkdeskFullApiFallbackExperienceGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiFallbackExperienceGeneratedClient {
  return {
    FallbackExperienceGet: (...args) => callOperation("fallback-experience-get", ...(args as TalkdeskFullApiOperationArgs<"fallback-experience-get">)),
    FallbackExperiencePut: (...args) => callOperation("fallback-experience-put", ...(args as TalkdeskFullApiOperationArgs<"fallback-experience-put">)),
    GetFallbackExperienceSettings: (...args) => callOperation("getFallbackExperienceSettings", ...(args as TalkdeskFullApiOperationArgs<"getFallbackExperienceSettings">)),
    PutFallbackExperienceSettings: (...args) => callOperation("putFallbackExperienceSettings", ...(args as TalkdeskFullApiOperationArgs<"putFallbackExperienceSettings">)),
  };
}
