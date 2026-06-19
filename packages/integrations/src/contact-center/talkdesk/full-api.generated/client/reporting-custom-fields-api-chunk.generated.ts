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
export const TalkdeskFullApiReportingCustomFieldsAPIOperationKeys = [
  "interaction-custom-fields-post"
] as const;
export type TalkdeskFullApiReportingCustomFieldsAPIOperationKey = typeof TalkdeskFullApiReportingCustomFieldsAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiReportingCustomFieldsAPIOperationPathParamMap {
  "interaction-custom-fields-post": {};
}

export interface TalkdeskFullApiReportingCustomFieldsAPIOperationRequestMap {
  "interaction-custom-fields-post": TalkdeskFullApiOperationInput<"interaction-custom-fields-post">;
}

export interface TalkdeskFullApiReportingCustomFieldsAPIGeneratedClient {
  InteractionCustomFieldsPost(...args: TalkdeskFullApiOperationArgs<"interaction-custom-fields-post">): Promise<TalkdeskFullApiOperationResponseMap["interaction-custom-fields-post"]>;
}

export const TalkdeskFullApiReportingCustomFieldsAPIGeneratedFunctionNames = [
  "InteractionCustomFieldsPost"
] as const satisfies readonly (keyof TalkdeskFullApiReportingCustomFieldsAPIGeneratedClient)[];

export function createTalkdeskFullApiReportingCustomFieldsAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiReportingCustomFieldsAPIGeneratedClient {
  return {
    InteractionCustomFieldsPost: (...args) => callOperation("interaction-custom-fields-post", ...(args as TalkdeskFullApiOperationArgs<"interaction-custom-fields-post">)),
  };
}
