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
export const TalkdeskFullApiPhoneDetailsOperationKeys = [
  "phone-details-outbound-numbers-get",
  "phone-details-numbers-get",
  "phone-details-numbers-id-get"
] as const;
export type TalkdeskFullApiPhoneDetailsOperationKey = typeof TalkdeskFullApiPhoneDetailsOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiPhoneDetailsOperationPathParamMap {
  "phone-details-outbound-numbers-get": {};
  "phone-details-numbers-get": {};
  "phone-details-numbers-id-get": { "id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiPhoneDetailsOperationRequestMap {
  "phone-details-outbound-numbers-get": TalkdeskFullApiOperationInput<"phone-details-outbound-numbers-get">;
  "phone-details-numbers-get": TalkdeskFullApiOperationInput<"phone-details-numbers-get">;
  "phone-details-numbers-id-get": TalkdeskFullApiOperationInput<"phone-details-numbers-id-get">;
}

export interface TalkdeskFullApiPhoneDetailsGeneratedClient {
  PhoneDetailsOutboundNumbersGet(...args: TalkdeskFullApiOperationArgs<"phone-details-outbound-numbers-get">): Promise<TalkdeskFullApiOperationResponseMap["phone-details-outbound-numbers-get"]>;
  PhoneDetailsNumbersGet(...args: TalkdeskFullApiOperationArgs<"phone-details-numbers-get">): Promise<TalkdeskFullApiOperationResponseMap["phone-details-numbers-get"]>;
  PhoneDetailsNumbersIdGet(...args: TalkdeskFullApiOperationArgs<"phone-details-numbers-id-get">): Promise<TalkdeskFullApiOperationResponseMap["phone-details-numbers-id-get"]>;
}

export const TalkdeskFullApiPhoneDetailsGeneratedFunctionNames = [
  "PhoneDetailsOutboundNumbersGet",
  "PhoneDetailsNumbersGet",
  "PhoneDetailsNumbersIdGet"
] as const satisfies readonly (keyof TalkdeskFullApiPhoneDetailsGeneratedClient)[];

export function createTalkdeskFullApiPhoneDetailsGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiPhoneDetailsGeneratedClient {
  return {
    PhoneDetailsOutboundNumbersGet: (...args) => callOperation("phone-details-outbound-numbers-get", ...(args as TalkdeskFullApiOperationArgs<"phone-details-outbound-numbers-get">)),
    PhoneDetailsNumbersGet: (...args) => callOperation("phone-details-numbers-get", ...(args as TalkdeskFullApiOperationArgs<"phone-details-numbers-get">)),
    PhoneDetailsNumbersIdGet: (...args) => callOperation("phone-details-numbers-id-get", ...(args as TalkdeskFullApiOperationArgs<"phone-details-numbers-id-get">)),
  };
}
