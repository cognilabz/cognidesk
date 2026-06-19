// Generated endpoint chunk for TwilioVoiceFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TwilioVoiceGeneratedOperationCaller,
  TwilioVoiceFullApiOperationArgs,
  TwilioVoiceFullApiOperationInput,
  TwilioVoiceFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TwilioVoiceFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TwilioVoiceFullApiTrunkingV1OperationKeys = [
  "trunking_v1:CreateCredentialList",
  "trunking_v1:CreateIpAccessControlList",
  "trunking_v1:CreateOriginationUrl",
  "trunking_v1:CreatePhoneNumber",
  "trunking_v1:CreateTrunk",
  "trunking_v1:DeleteCredentialList",
  "trunking_v1:DeleteIpAccessControlList",
  "trunking_v1:DeleteOriginationUrl",
  "trunking_v1:DeletePhoneNumber",
  "trunking_v1:DeleteTrunk",
  "trunking_v1:FetchCredentialList",
  "trunking_v1:FetchIpAccessControlList",
  "trunking_v1:FetchOriginationUrl",
  "trunking_v1:FetchPhoneNumber",
  "trunking_v1:FetchRecording",
  "trunking_v1:FetchTrunk",
  "trunking_v1:ListCredentialList",
  "trunking_v1:ListIpAccessControlList",
  "trunking_v1:ListOriginationUrl",
  "trunking_v1:ListPhoneNumber",
  "trunking_v1:ListTrunk",
  "trunking_v1:UpdateOriginationUrl",
  "trunking_v1:UpdateRecording",
  "trunking_v1:UpdateTrunk"
] as const;
export type TwilioVoiceFullApiTrunkingV1OperationKey = typeof TwilioVoiceFullApiTrunkingV1OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioVoiceFullApiTrunkingV1OperationPathParamMap {
  "trunking_v1:CreateCredentialList": { "TrunkSid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:CreateIpAccessControlList": { "TrunkSid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:CreateOriginationUrl": { "TrunkSid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:CreatePhoneNumber": { "TrunkSid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:CreateTrunk": {};
  "trunking_v1:DeleteCredentialList": { "TrunkSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:DeleteIpAccessControlList": { "TrunkSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:DeleteOriginationUrl": { "TrunkSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:DeletePhoneNumber": { "TrunkSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:DeleteTrunk": { "Sid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:FetchCredentialList": { "TrunkSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:FetchIpAccessControlList": { "TrunkSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:FetchOriginationUrl": { "TrunkSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:FetchPhoneNumber": { "TrunkSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:FetchRecording": { "TrunkSid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:FetchTrunk": { "Sid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:ListCredentialList": { "TrunkSid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:ListIpAccessControlList": { "TrunkSid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:ListOriginationUrl": { "TrunkSid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:ListPhoneNumber": { "TrunkSid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:ListTrunk": {};
  "trunking_v1:UpdateOriginationUrl": { "TrunkSid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:UpdateRecording": { "TrunkSid": TwilioVoiceFullApiPathParamValue };
  "trunking_v1:UpdateTrunk": { "Sid": TwilioVoiceFullApiPathParamValue };
}

export interface TwilioVoiceFullApiTrunkingV1OperationRequestMap {
  "trunking_v1:CreateCredentialList": TwilioVoiceFullApiOperationInput<"trunking_v1:CreateCredentialList">;
  "trunking_v1:CreateIpAccessControlList": TwilioVoiceFullApiOperationInput<"trunking_v1:CreateIpAccessControlList">;
  "trunking_v1:CreateOriginationUrl": TwilioVoiceFullApiOperationInput<"trunking_v1:CreateOriginationUrl">;
  "trunking_v1:CreatePhoneNumber": TwilioVoiceFullApiOperationInput<"trunking_v1:CreatePhoneNumber">;
  "trunking_v1:CreateTrunk": TwilioVoiceFullApiOperationInput<"trunking_v1:CreateTrunk">;
  "trunking_v1:DeleteCredentialList": TwilioVoiceFullApiOperationInput<"trunking_v1:DeleteCredentialList">;
  "trunking_v1:DeleteIpAccessControlList": TwilioVoiceFullApiOperationInput<"trunking_v1:DeleteIpAccessControlList">;
  "trunking_v1:DeleteOriginationUrl": TwilioVoiceFullApiOperationInput<"trunking_v1:DeleteOriginationUrl">;
  "trunking_v1:DeletePhoneNumber": TwilioVoiceFullApiOperationInput<"trunking_v1:DeletePhoneNumber">;
  "trunking_v1:DeleteTrunk": TwilioVoiceFullApiOperationInput<"trunking_v1:DeleteTrunk">;
  "trunking_v1:FetchCredentialList": TwilioVoiceFullApiOperationInput<"trunking_v1:FetchCredentialList">;
  "trunking_v1:FetchIpAccessControlList": TwilioVoiceFullApiOperationInput<"trunking_v1:FetchIpAccessControlList">;
  "trunking_v1:FetchOriginationUrl": TwilioVoiceFullApiOperationInput<"trunking_v1:FetchOriginationUrl">;
  "trunking_v1:FetchPhoneNumber": TwilioVoiceFullApiOperationInput<"trunking_v1:FetchPhoneNumber">;
  "trunking_v1:FetchRecording": TwilioVoiceFullApiOperationInput<"trunking_v1:FetchRecording">;
  "trunking_v1:FetchTrunk": TwilioVoiceFullApiOperationInput<"trunking_v1:FetchTrunk">;
  "trunking_v1:ListCredentialList": TwilioVoiceFullApiOperationInput<"trunking_v1:ListCredentialList">;
  "trunking_v1:ListIpAccessControlList": TwilioVoiceFullApiOperationInput<"trunking_v1:ListIpAccessControlList">;
  "trunking_v1:ListOriginationUrl": TwilioVoiceFullApiOperationInput<"trunking_v1:ListOriginationUrl">;
  "trunking_v1:ListPhoneNumber": TwilioVoiceFullApiOperationInput<"trunking_v1:ListPhoneNumber">;
  "trunking_v1:ListTrunk": TwilioVoiceFullApiOperationInput<"trunking_v1:ListTrunk">;
  "trunking_v1:UpdateOriginationUrl": TwilioVoiceFullApiOperationInput<"trunking_v1:UpdateOriginationUrl">;
  "trunking_v1:UpdateRecording": TwilioVoiceFullApiOperationInput<"trunking_v1:UpdateRecording">;
  "trunking_v1:UpdateTrunk": TwilioVoiceFullApiOperationInput<"trunking_v1:UpdateTrunk">;
}

export interface TwilioVoiceFullApiTrunkingV1GeneratedClient {
  TrunkingV1CreateCredentialList(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:CreateCredentialList">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:CreateCredentialList"]>;
  TrunkingV1CreateIpAccessControlList(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:CreateIpAccessControlList">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:CreateIpAccessControlList"]>;
  TrunkingV1CreateOriginationUrl(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:CreateOriginationUrl">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:CreateOriginationUrl"]>;
  TrunkingV1CreatePhoneNumber(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:CreatePhoneNumber">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:CreatePhoneNumber"]>;
  TrunkingV1CreateTrunk(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:CreateTrunk">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:CreateTrunk"]>;
  TrunkingV1DeleteCredentialList(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:DeleteCredentialList">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:DeleteCredentialList"]>;
  TrunkingV1DeleteIpAccessControlList(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:DeleteIpAccessControlList">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:DeleteIpAccessControlList"]>;
  TrunkingV1DeleteOriginationUrl(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:DeleteOriginationUrl">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:DeleteOriginationUrl"]>;
  TrunkingV1DeletePhoneNumber(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:DeletePhoneNumber">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:DeletePhoneNumber"]>;
  TrunkingV1DeleteTrunk(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:DeleteTrunk">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:DeleteTrunk"]>;
  TrunkingV1FetchCredentialList(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:FetchCredentialList">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:FetchCredentialList"]>;
  TrunkingV1FetchIpAccessControlList(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:FetchIpAccessControlList">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:FetchIpAccessControlList"]>;
  TrunkingV1FetchOriginationUrl(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:FetchOriginationUrl">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:FetchOriginationUrl"]>;
  TrunkingV1FetchPhoneNumber(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:FetchPhoneNumber">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:FetchPhoneNumber"]>;
  TrunkingV1FetchRecording(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:FetchRecording">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:FetchRecording"]>;
  TrunkingV1FetchTrunk(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:FetchTrunk">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:FetchTrunk"]>;
  TrunkingV1ListCredentialList(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:ListCredentialList">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:ListCredentialList"]>;
  TrunkingV1ListIpAccessControlList(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:ListIpAccessControlList">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:ListIpAccessControlList"]>;
  TrunkingV1ListOriginationUrl(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:ListOriginationUrl">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:ListOriginationUrl"]>;
  TrunkingV1ListPhoneNumber(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:ListPhoneNumber">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:ListPhoneNumber"]>;
  TrunkingV1ListTrunk(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:ListTrunk">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:ListTrunk"]>;
  TrunkingV1UpdateOriginationUrl(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:UpdateOriginationUrl">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:UpdateOriginationUrl"]>;
  TrunkingV1UpdateRecording(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:UpdateRecording">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:UpdateRecording"]>;
  TrunkingV1UpdateTrunk(...args: TwilioVoiceFullApiOperationArgs<"trunking_v1:UpdateTrunk">): Promise<TwilioVoiceFullApiOperationResponseMap["trunking_v1:UpdateTrunk"]>;
}

export const TwilioVoiceFullApiTrunkingV1GeneratedFunctionNames = [
  "TrunkingV1CreateCredentialList",
  "TrunkingV1CreateIpAccessControlList",
  "TrunkingV1CreateOriginationUrl",
  "TrunkingV1CreatePhoneNumber",
  "TrunkingV1CreateTrunk",
  "TrunkingV1DeleteCredentialList",
  "TrunkingV1DeleteIpAccessControlList",
  "TrunkingV1DeleteOriginationUrl",
  "TrunkingV1DeletePhoneNumber",
  "TrunkingV1DeleteTrunk",
  "TrunkingV1FetchCredentialList",
  "TrunkingV1FetchIpAccessControlList",
  "TrunkingV1FetchOriginationUrl",
  "TrunkingV1FetchPhoneNumber",
  "TrunkingV1FetchRecording",
  "TrunkingV1FetchTrunk",
  "TrunkingV1ListCredentialList",
  "TrunkingV1ListIpAccessControlList",
  "TrunkingV1ListOriginationUrl",
  "TrunkingV1ListPhoneNumber",
  "TrunkingV1ListTrunk",
  "TrunkingV1UpdateOriginationUrl",
  "TrunkingV1UpdateRecording",
  "TrunkingV1UpdateTrunk"
] as const satisfies readonly (keyof TwilioVoiceFullApiTrunkingV1GeneratedClient)[];

export function createTwilioVoiceFullApiTrunkingV1GeneratedClient(
  callOperation: TwilioVoiceGeneratedOperationCaller,
): TwilioVoiceFullApiTrunkingV1GeneratedClient {
  return {
    TrunkingV1CreateCredentialList: (...args) => callOperation("trunking_v1:CreateCredentialList", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:CreateCredentialList">)),
    TrunkingV1CreateIpAccessControlList: (...args) => callOperation("trunking_v1:CreateIpAccessControlList", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:CreateIpAccessControlList">)),
    TrunkingV1CreateOriginationUrl: (...args) => callOperation("trunking_v1:CreateOriginationUrl", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:CreateOriginationUrl">)),
    TrunkingV1CreatePhoneNumber: (...args) => callOperation("trunking_v1:CreatePhoneNumber", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:CreatePhoneNumber">)),
    TrunkingV1CreateTrunk: (...args) => callOperation("trunking_v1:CreateTrunk", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:CreateTrunk">)),
    TrunkingV1DeleteCredentialList: (...args) => callOperation("trunking_v1:DeleteCredentialList", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:DeleteCredentialList">)),
    TrunkingV1DeleteIpAccessControlList: (...args) => callOperation("trunking_v1:DeleteIpAccessControlList", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:DeleteIpAccessControlList">)),
    TrunkingV1DeleteOriginationUrl: (...args) => callOperation("trunking_v1:DeleteOriginationUrl", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:DeleteOriginationUrl">)),
    TrunkingV1DeletePhoneNumber: (...args) => callOperation("trunking_v1:DeletePhoneNumber", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:DeletePhoneNumber">)),
    TrunkingV1DeleteTrunk: (...args) => callOperation("trunking_v1:DeleteTrunk", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:DeleteTrunk">)),
    TrunkingV1FetchCredentialList: (...args) => callOperation("trunking_v1:FetchCredentialList", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:FetchCredentialList">)),
    TrunkingV1FetchIpAccessControlList: (...args) => callOperation("trunking_v1:FetchIpAccessControlList", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:FetchIpAccessControlList">)),
    TrunkingV1FetchOriginationUrl: (...args) => callOperation("trunking_v1:FetchOriginationUrl", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:FetchOriginationUrl">)),
    TrunkingV1FetchPhoneNumber: (...args) => callOperation("trunking_v1:FetchPhoneNumber", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:FetchPhoneNumber">)),
    TrunkingV1FetchRecording: (...args) => callOperation("trunking_v1:FetchRecording", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:FetchRecording">)),
    TrunkingV1FetchTrunk: (...args) => callOperation("trunking_v1:FetchTrunk", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:FetchTrunk">)),
    TrunkingV1ListCredentialList: (...args) => callOperation("trunking_v1:ListCredentialList", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:ListCredentialList">)),
    TrunkingV1ListIpAccessControlList: (...args) => callOperation("trunking_v1:ListIpAccessControlList", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:ListIpAccessControlList">)),
    TrunkingV1ListOriginationUrl: (...args) => callOperation("trunking_v1:ListOriginationUrl", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:ListOriginationUrl">)),
    TrunkingV1ListPhoneNumber: (...args) => callOperation("trunking_v1:ListPhoneNumber", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:ListPhoneNumber">)),
    TrunkingV1ListTrunk: (...args) => callOperation("trunking_v1:ListTrunk", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:ListTrunk">)),
    TrunkingV1UpdateOriginationUrl: (...args) => callOperation("trunking_v1:UpdateOriginationUrl", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:UpdateOriginationUrl">)),
    TrunkingV1UpdateRecording: (...args) => callOperation("trunking_v1:UpdateRecording", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:UpdateRecording">)),
    TrunkingV1UpdateTrunk: (...args) => callOperation("trunking_v1:UpdateTrunk", ...(args as TwilioVoiceFullApiOperationArgs<"trunking_v1:UpdateTrunk">)),
  };
}
