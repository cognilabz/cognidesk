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
export const TalkdeskFullApiPhoneLabelsOperationKeys = [
  "phone-labels-get",
  "phone-labels-put"
] as const;
export type TalkdeskFullApiPhoneLabelsOperationKey = typeof TalkdeskFullApiPhoneLabelsOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiPhoneLabelsOperationPathParamMap {
  "phone-labels-get": {};
  "phone-labels-put": {};
}

export interface TalkdeskFullApiPhoneLabelsOperationRequestMap {
  "phone-labels-get": TalkdeskFullApiOperationInput<"phone-labels-get">;
  "phone-labels-put": TalkdeskFullApiOperationInput<"phone-labels-put">;
}

export interface TalkdeskFullApiPhoneLabelsGeneratedClient {
  PhoneLabelsGet(...args: TalkdeskFullApiOperationArgs<"phone-labels-get">): Promise<TalkdeskFullApiOperationResponseMap["phone-labels-get"]>;
  PhoneLabelsPut(...args: TalkdeskFullApiOperationArgs<"phone-labels-put">): Promise<TalkdeskFullApiOperationResponseMap["phone-labels-put"]>;
}

export const TalkdeskFullApiPhoneLabelsGeneratedFunctionNames = [
  "PhoneLabelsGet",
  "PhoneLabelsPut"
] as const satisfies readonly (keyof TalkdeskFullApiPhoneLabelsGeneratedClient)[];

export function createTalkdeskFullApiPhoneLabelsGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiPhoneLabelsGeneratedClient {
  return {
    PhoneLabelsGet: (...args) => callOperation("phone-labels-get", ...(args as TalkdeskFullApiOperationArgs<"phone-labels-get">)),
    PhoneLabelsPut: (...args) => callOperation("phone-labels-put", ...(args as TalkdeskFullApiOperationArgs<"phone-labels-put">)),
  };
}
