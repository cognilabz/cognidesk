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
export const TalkdeskFullApiIdentityAPIOperationKeys = [
  "getActivities",
  "getPhoneValidation",
  "getPhoneValidationStats",
  "deleteEnrollment",
  "createEnrollment",
  "getConsent",
  "editConsent"
] as const;
export type TalkdeskFullApiIdentityAPIOperationKey = typeof TalkdeskFullApiIdentityAPIOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiIdentityAPIOperationPathParamMap {
  "getActivities": {};
  "getPhoneValidation": { "phone_number": TalkdeskFullApiPathParamValue };
  "getPhoneValidationStats": { "phone_number": TalkdeskFullApiPathParamValue };
  "deleteEnrollment": { "contact_id": TalkdeskFullApiPathParamValue };
  "createEnrollment": { "contact_id": TalkdeskFullApiPathParamValue };
  "getConsent": { "contact_id": TalkdeskFullApiPathParamValue };
  "editConsent": { "contact_id": TalkdeskFullApiPathParamValue };
}

export interface TalkdeskFullApiIdentityAPIOperationRequestMap {
  "getActivities": TalkdeskFullApiOperationInput<"getActivities">;
  "getPhoneValidation": TalkdeskFullApiOperationInput<"getPhoneValidation">;
  "getPhoneValidationStats": TalkdeskFullApiOperationInput<"getPhoneValidationStats">;
  "deleteEnrollment": TalkdeskFullApiOperationInput<"deleteEnrollment">;
  "createEnrollment": TalkdeskFullApiOperationInput<"createEnrollment">;
  "getConsent": TalkdeskFullApiOperationInput<"getConsent">;
  "editConsent": TalkdeskFullApiOperationInput<"editConsent">;
}

export interface TalkdeskFullApiIdentityAPIGeneratedClient {
  GetActivities(...args: TalkdeskFullApiOperationArgs<"getActivities">): Promise<TalkdeskFullApiOperationResponseMap["getActivities"]>;
  GetPhoneValidation(...args: TalkdeskFullApiOperationArgs<"getPhoneValidation">): Promise<TalkdeskFullApiOperationResponseMap["getPhoneValidation"]>;
  GetPhoneValidationStats(...args: TalkdeskFullApiOperationArgs<"getPhoneValidationStats">): Promise<TalkdeskFullApiOperationResponseMap["getPhoneValidationStats"]>;
  DeleteEnrollment(...args: TalkdeskFullApiOperationArgs<"deleteEnrollment">): Promise<TalkdeskFullApiOperationResponseMap["deleteEnrollment"]>;
  CreateEnrollment(...args: TalkdeskFullApiOperationArgs<"createEnrollment">): Promise<TalkdeskFullApiOperationResponseMap["createEnrollment"]>;
  GetConsent(...args: TalkdeskFullApiOperationArgs<"getConsent">): Promise<TalkdeskFullApiOperationResponseMap["getConsent"]>;
  EditConsent(...args: TalkdeskFullApiOperationArgs<"editConsent">): Promise<TalkdeskFullApiOperationResponseMap["editConsent"]>;
}

export const TalkdeskFullApiIdentityAPIGeneratedFunctionNames = [
  "GetActivities",
  "GetPhoneValidation",
  "GetPhoneValidationStats",
  "DeleteEnrollment",
  "CreateEnrollment",
  "GetConsent",
  "EditConsent"
] as const satisfies readonly (keyof TalkdeskFullApiIdentityAPIGeneratedClient)[];

export function createTalkdeskFullApiIdentityAPIGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiIdentityAPIGeneratedClient {
  return {
    GetActivities: (...args) => callOperation("getActivities", ...(args as TalkdeskFullApiOperationArgs<"getActivities">)),
    GetPhoneValidation: (...args) => callOperation("getPhoneValidation", ...(args as TalkdeskFullApiOperationArgs<"getPhoneValidation">)),
    GetPhoneValidationStats: (...args) => callOperation("getPhoneValidationStats", ...(args as TalkdeskFullApiOperationArgs<"getPhoneValidationStats">)),
    DeleteEnrollment: (...args) => callOperation("deleteEnrollment", ...(args as TalkdeskFullApiOperationArgs<"deleteEnrollment">)),
    CreateEnrollment: (...args) => callOperation("createEnrollment", ...(args as TalkdeskFullApiOperationArgs<"createEnrollment">)),
    GetConsent: (...args) => callOperation("getConsent", ...(args as TalkdeskFullApiOperationArgs<"getConsent">)),
    EditConsent: (...args) => callOperation("editConsent", ...(args as TalkdeskFullApiOperationArgs<"editConsent">)),
  };
}
