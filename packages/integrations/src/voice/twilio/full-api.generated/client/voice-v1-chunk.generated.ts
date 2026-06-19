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
export const TwilioVoiceFullApiVoiceV1OperationKeys = [
  "voice_v1:CreateByocTrunk",
  "voice_v1:CreateConnectionPolicy",
  "voice_v1:CreateConnectionPolicyTarget",
  "voice_v1:CreateDialingPermissionsCountryBulkUpdate",
  "voice_v1:CreateIpRecord",
  "voice_v1:CreateSourceIpMapping",
  "voice_v1:DeleteArchivedCall",
  "voice_v1:DeleteByocTrunk",
  "voice_v1:DeleteConnectionPolicy",
  "voice_v1:DeleteConnectionPolicyTarget",
  "voice_v1:DeleteIpRecord",
  "voice_v1:DeleteSourceIpMapping",
  "voice_v1:FetchByocTrunk",
  "voice_v1:FetchConnectionPolicy",
  "voice_v1:FetchConnectionPolicyTarget",
  "voice_v1:FetchDialingPermissionsCountry",
  "voice_v1:FetchDialingPermissionsSettings",
  "voice_v1:FetchIpRecord",
  "voice_v1:FetchSourceIpMapping",
  "voice_v1:ListByocTrunk",
  "voice_v1:ListConnectionPolicy",
  "voice_v1:ListConnectionPolicyTarget",
  "voice_v1:ListDialingPermissionsCountry",
  "voice_v1:ListDialingPermissionsHrsPrefixes",
  "voice_v1:ListIpRecord",
  "voice_v1:ListSourceIpMapping",
  "voice_v1:UpdateByocTrunk",
  "voice_v1:UpdateConnectionPolicy",
  "voice_v1:UpdateConnectionPolicyTarget",
  "voice_v1:UpdateDialingPermissionsSettings",
  "voice_v1:UpdateIpRecord",
  "voice_v1:UpdateSourceIpMapping"
] as const;
export type TwilioVoiceFullApiVoiceV1OperationKey = typeof TwilioVoiceFullApiVoiceV1OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioVoiceFullApiVoiceV1OperationPathParamMap {
  "voice_v1:CreateByocTrunk": {};
  "voice_v1:CreateConnectionPolicy": {};
  "voice_v1:CreateConnectionPolicyTarget": { "ConnectionPolicySid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:CreateDialingPermissionsCountryBulkUpdate": {};
  "voice_v1:CreateIpRecord": {};
  "voice_v1:CreateSourceIpMapping": {};
  "voice_v1:DeleteArchivedCall": { "Date": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:DeleteByocTrunk": { "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:DeleteConnectionPolicy": { "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:DeleteConnectionPolicyTarget": { "ConnectionPolicySid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:DeleteIpRecord": { "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:DeleteSourceIpMapping": { "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:FetchByocTrunk": { "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:FetchConnectionPolicy": { "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:FetchConnectionPolicyTarget": { "ConnectionPolicySid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:FetchDialingPermissionsCountry": { "IsoCode": TwilioVoiceFullApiPathParamValue };
  "voice_v1:FetchDialingPermissionsSettings": {};
  "voice_v1:FetchIpRecord": { "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:FetchSourceIpMapping": { "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:ListByocTrunk": {};
  "voice_v1:ListConnectionPolicy": {};
  "voice_v1:ListConnectionPolicyTarget": { "ConnectionPolicySid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:ListDialingPermissionsCountry": {};
  "voice_v1:ListDialingPermissionsHrsPrefixes": { "IsoCode": TwilioVoiceFullApiPathParamValue };
  "voice_v1:ListIpRecord": {};
  "voice_v1:ListSourceIpMapping": {};
  "voice_v1:UpdateByocTrunk": { "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:UpdateConnectionPolicy": { "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:UpdateConnectionPolicyTarget": { "ConnectionPolicySid": TwilioVoiceFullApiPathParamValue; "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:UpdateDialingPermissionsSettings": {};
  "voice_v1:UpdateIpRecord": { "Sid": TwilioVoiceFullApiPathParamValue };
  "voice_v1:UpdateSourceIpMapping": { "Sid": TwilioVoiceFullApiPathParamValue };
}

export interface TwilioVoiceFullApiVoiceV1OperationRequestMap {
  "voice_v1:CreateByocTrunk": TwilioVoiceFullApiOperationInput<"voice_v1:CreateByocTrunk">;
  "voice_v1:CreateConnectionPolicy": TwilioVoiceFullApiOperationInput<"voice_v1:CreateConnectionPolicy">;
  "voice_v1:CreateConnectionPolicyTarget": TwilioVoiceFullApiOperationInput<"voice_v1:CreateConnectionPolicyTarget">;
  "voice_v1:CreateDialingPermissionsCountryBulkUpdate": TwilioVoiceFullApiOperationInput<"voice_v1:CreateDialingPermissionsCountryBulkUpdate">;
  "voice_v1:CreateIpRecord": TwilioVoiceFullApiOperationInput<"voice_v1:CreateIpRecord">;
  "voice_v1:CreateSourceIpMapping": TwilioVoiceFullApiOperationInput<"voice_v1:CreateSourceIpMapping">;
  "voice_v1:DeleteArchivedCall": TwilioVoiceFullApiOperationInput<"voice_v1:DeleteArchivedCall">;
  "voice_v1:DeleteByocTrunk": TwilioVoiceFullApiOperationInput<"voice_v1:DeleteByocTrunk">;
  "voice_v1:DeleteConnectionPolicy": TwilioVoiceFullApiOperationInput<"voice_v1:DeleteConnectionPolicy">;
  "voice_v1:DeleteConnectionPolicyTarget": TwilioVoiceFullApiOperationInput<"voice_v1:DeleteConnectionPolicyTarget">;
  "voice_v1:DeleteIpRecord": TwilioVoiceFullApiOperationInput<"voice_v1:DeleteIpRecord">;
  "voice_v1:DeleteSourceIpMapping": TwilioVoiceFullApiOperationInput<"voice_v1:DeleteSourceIpMapping">;
  "voice_v1:FetchByocTrunk": TwilioVoiceFullApiOperationInput<"voice_v1:FetchByocTrunk">;
  "voice_v1:FetchConnectionPolicy": TwilioVoiceFullApiOperationInput<"voice_v1:FetchConnectionPolicy">;
  "voice_v1:FetchConnectionPolicyTarget": TwilioVoiceFullApiOperationInput<"voice_v1:FetchConnectionPolicyTarget">;
  "voice_v1:FetchDialingPermissionsCountry": TwilioVoiceFullApiOperationInput<"voice_v1:FetchDialingPermissionsCountry">;
  "voice_v1:FetchDialingPermissionsSettings": TwilioVoiceFullApiOperationInput<"voice_v1:FetchDialingPermissionsSettings">;
  "voice_v1:FetchIpRecord": TwilioVoiceFullApiOperationInput<"voice_v1:FetchIpRecord">;
  "voice_v1:FetchSourceIpMapping": TwilioVoiceFullApiOperationInput<"voice_v1:FetchSourceIpMapping">;
  "voice_v1:ListByocTrunk": TwilioVoiceFullApiOperationInput<"voice_v1:ListByocTrunk">;
  "voice_v1:ListConnectionPolicy": TwilioVoiceFullApiOperationInput<"voice_v1:ListConnectionPolicy">;
  "voice_v1:ListConnectionPolicyTarget": TwilioVoiceFullApiOperationInput<"voice_v1:ListConnectionPolicyTarget">;
  "voice_v1:ListDialingPermissionsCountry": TwilioVoiceFullApiOperationInput<"voice_v1:ListDialingPermissionsCountry">;
  "voice_v1:ListDialingPermissionsHrsPrefixes": TwilioVoiceFullApiOperationInput<"voice_v1:ListDialingPermissionsHrsPrefixes">;
  "voice_v1:ListIpRecord": TwilioVoiceFullApiOperationInput<"voice_v1:ListIpRecord">;
  "voice_v1:ListSourceIpMapping": TwilioVoiceFullApiOperationInput<"voice_v1:ListSourceIpMapping">;
  "voice_v1:UpdateByocTrunk": TwilioVoiceFullApiOperationInput<"voice_v1:UpdateByocTrunk">;
  "voice_v1:UpdateConnectionPolicy": TwilioVoiceFullApiOperationInput<"voice_v1:UpdateConnectionPolicy">;
  "voice_v1:UpdateConnectionPolicyTarget": TwilioVoiceFullApiOperationInput<"voice_v1:UpdateConnectionPolicyTarget">;
  "voice_v1:UpdateDialingPermissionsSettings": TwilioVoiceFullApiOperationInput<"voice_v1:UpdateDialingPermissionsSettings">;
  "voice_v1:UpdateIpRecord": TwilioVoiceFullApiOperationInput<"voice_v1:UpdateIpRecord">;
  "voice_v1:UpdateSourceIpMapping": TwilioVoiceFullApiOperationInput<"voice_v1:UpdateSourceIpMapping">;
}

export interface TwilioVoiceFullApiVoiceV1GeneratedClient {
  VoiceV1CreateByocTrunk(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:CreateByocTrunk">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:CreateByocTrunk"]>;
  VoiceV1CreateConnectionPolicy(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:CreateConnectionPolicy">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:CreateConnectionPolicy"]>;
  VoiceV1CreateConnectionPolicyTarget(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:CreateConnectionPolicyTarget">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:CreateConnectionPolicyTarget"]>;
  VoiceV1CreateDialingPermissionsCountryBulkUpdate(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:CreateDialingPermissionsCountryBulkUpdate">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:CreateDialingPermissionsCountryBulkUpdate"]>;
  VoiceV1CreateIpRecord(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:CreateIpRecord">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:CreateIpRecord"]>;
  VoiceV1CreateSourceIpMapping(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:CreateSourceIpMapping">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:CreateSourceIpMapping"]>;
  VoiceV1DeleteArchivedCall(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:DeleteArchivedCall">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:DeleteArchivedCall"]>;
  VoiceV1DeleteByocTrunk(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:DeleteByocTrunk">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:DeleteByocTrunk"]>;
  VoiceV1DeleteConnectionPolicy(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:DeleteConnectionPolicy">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:DeleteConnectionPolicy"]>;
  VoiceV1DeleteConnectionPolicyTarget(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:DeleteConnectionPolicyTarget">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:DeleteConnectionPolicyTarget"]>;
  VoiceV1DeleteIpRecord(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:DeleteIpRecord">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:DeleteIpRecord"]>;
  VoiceV1DeleteSourceIpMapping(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:DeleteSourceIpMapping">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:DeleteSourceIpMapping"]>;
  VoiceV1FetchByocTrunk(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:FetchByocTrunk">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:FetchByocTrunk"]>;
  VoiceV1FetchConnectionPolicy(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:FetchConnectionPolicy">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:FetchConnectionPolicy"]>;
  VoiceV1FetchConnectionPolicyTarget(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:FetchConnectionPolicyTarget">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:FetchConnectionPolicyTarget"]>;
  VoiceV1FetchDialingPermissionsCountry(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:FetchDialingPermissionsCountry">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:FetchDialingPermissionsCountry"]>;
  VoiceV1FetchDialingPermissionsSettings(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:FetchDialingPermissionsSettings">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:FetchDialingPermissionsSettings"]>;
  VoiceV1FetchIpRecord(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:FetchIpRecord">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:FetchIpRecord"]>;
  VoiceV1FetchSourceIpMapping(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:FetchSourceIpMapping">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:FetchSourceIpMapping"]>;
  VoiceV1ListByocTrunk(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:ListByocTrunk">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:ListByocTrunk"]>;
  VoiceV1ListConnectionPolicy(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:ListConnectionPolicy">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:ListConnectionPolicy"]>;
  VoiceV1ListConnectionPolicyTarget(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:ListConnectionPolicyTarget">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:ListConnectionPolicyTarget"]>;
  VoiceV1ListDialingPermissionsCountry(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:ListDialingPermissionsCountry">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:ListDialingPermissionsCountry"]>;
  VoiceV1ListDialingPermissionsHrsPrefixes(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:ListDialingPermissionsHrsPrefixes">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:ListDialingPermissionsHrsPrefixes"]>;
  VoiceV1ListIpRecord(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:ListIpRecord">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:ListIpRecord"]>;
  VoiceV1ListSourceIpMapping(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:ListSourceIpMapping">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:ListSourceIpMapping"]>;
  VoiceV1UpdateByocTrunk(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:UpdateByocTrunk">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:UpdateByocTrunk"]>;
  VoiceV1UpdateConnectionPolicy(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:UpdateConnectionPolicy">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:UpdateConnectionPolicy"]>;
  VoiceV1UpdateConnectionPolicyTarget(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:UpdateConnectionPolicyTarget">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:UpdateConnectionPolicyTarget"]>;
  VoiceV1UpdateDialingPermissionsSettings(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:UpdateDialingPermissionsSettings">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:UpdateDialingPermissionsSettings"]>;
  VoiceV1UpdateIpRecord(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:UpdateIpRecord">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:UpdateIpRecord"]>;
  VoiceV1UpdateSourceIpMapping(...args: TwilioVoiceFullApiOperationArgs<"voice_v1:UpdateSourceIpMapping">): Promise<TwilioVoiceFullApiOperationResponseMap["voice_v1:UpdateSourceIpMapping"]>;
}

export const TwilioVoiceFullApiVoiceV1GeneratedFunctionNames = [
  "VoiceV1CreateByocTrunk",
  "VoiceV1CreateConnectionPolicy",
  "VoiceV1CreateConnectionPolicyTarget",
  "VoiceV1CreateDialingPermissionsCountryBulkUpdate",
  "VoiceV1CreateIpRecord",
  "VoiceV1CreateSourceIpMapping",
  "VoiceV1DeleteArchivedCall",
  "VoiceV1DeleteByocTrunk",
  "VoiceV1DeleteConnectionPolicy",
  "VoiceV1DeleteConnectionPolicyTarget",
  "VoiceV1DeleteIpRecord",
  "VoiceV1DeleteSourceIpMapping",
  "VoiceV1FetchByocTrunk",
  "VoiceV1FetchConnectionPolicy",
  "VoiceV1FetchConnectionPolicyTarget",
  "VoiceV1FetchDialingPermissionsCountry",
  "VoiceV1FetchDialingPermissionsSettings",
  "VoiceV1FetchIpRecord",
  "VoiceV1FetchSourceIpMapping",
  "VoiceV1ListByocTrunk",
  "VoiceV1ListConnectionPolicy",
  "VoiceV1ListConnectionPolicyTarget",
  "VoiceV1ListDialingPermissionsCountry",
  "VoiceV1ListDialingPermissionsHrsPrefixes",
  "VoiceV1ListIpRecord",
  "VoiceV1ListSourceIpMapping",
  "VoiceV1UpdateByocTrunk",
  "VoiceV1UpdateConnectionPolicy",
  "VoiceV1UpdateConnectionPolicyTarget",
  "VoiceV1UpdateDialingPermissionsSettings",
  "VoiceV1UpdateIpRecord",
  "VoiceV1UpdateSourceIpMapping"
] as const satisfies readonly (keyof TwilioVoiceFullApiVoiceV1GeneratedClient)[];

export function createTwilioVoiceFullApiVoiceV1GeneratedClient(
  callOperation: TwilioVoiceGeneratedOperationCaller,
): TwilioVoiceFullApiVoiceV1GeneratedClient {
  return {
    VoiceV1CreateByocTrunk: (...args) => callOperation("voice_v1:CreateByocTrunk", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:CreateByocTrunk">)),
    VoiceV1CreateConnectionPolicy: (...args) => callOperation("voice_v1:CreateConnectionPolicy", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:CreateConnectionPolicy">)),
    VoiceV1CreateConnectionPolicyTarget: (...args) => callOperation("voice_v1:CreateConnectionPolicyTarget", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:CreateConnectionPolicyTarget">)),
    VoiceV1CreateDialingPermissionsCountryBulkUpdate: (...args) => callOperation("voice_v1:CreateDialingPermissionsCountryBulkUpdate", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:CreateDialingPermissionsCountryBulkUpdate">)),
    VoiceV1CreateIpRecord: (...args) => callOperation("voice_v1:CreateIpRecord", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:CreateIpRecord">)),
    VoiceV1CreateSourceIpMapping: (...args) => callOperation("voice_v1:CreateSourceIpMapping", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:CreateSourceIpMapping">)),
    VoiceV1DeleteArchivedCall: (...args) => callOperation("voice_v1:DeleteArchivedCall", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:DeleteArchivedCall">)),
    VoiceV1DeleteByocTrunk: (...args) => callOperation("voice_v1:DeleteByocTrunk", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:DeleteByocTrunk">)),
    VoiceV1DeleteConnectionPolicy: (...args) => callOperation("voice_v1:DeleteConnectionPolicy", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:DeleteConnectionPolicy">)),
    VoiceV1DeleteConnectionPolicyTarget: (...args) => callOperation("voice_v1:DeleteConnectionPolicyTarget", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:DeleteConnectionPolicyTarget">)),
    VoiceV1DeleteIpRecord: (...args) => callOperation("voice_v1:DeleteIpRecord", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:DeleteIpRecord">)),
    VoiceV1DeleteSourceIpMapping: (...args) => callOperation("voice_v1:DeleteSourceIpMapping", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:DeleteSourceIpMapping">)),
    VoiceV1FetchByocTrunk: (...args) => callOperation("voice_v1:FetchByocTrunk", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:FetchByocTrunk">)),
    VoiceV1FetchConnectionPolicy: (...args) => callOperation("voice_v1:FetchConnectionPolicy", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:FetchConnectionPolicy">)),
    VoiceV1FetchConnectionPolicyTarget: (...args) => callOperation("voice_v1:FetchConnectionPolicyTarget", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:FetchConnectionPolicyTarget">)),
    VoiceV1FetchDialingPermissionsCountry: (...args) => callOperation("voice_v1:FetchDialingPermissionsCountry", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:FetchDialingPermissionsCountry">)),
    VoiceV1FetchDialingPermissionsSettings: (...args) => callOperation("voice_v1:FetchDialingPermissionsSettings", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:FetchDialingPermissionsSettings">)),
    VoiceV1FetchIpRecord: (...args) => callOperation("voice_v1:FetchIpRecord", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:FetchIpRecord">)),
    VoiceV1FetchSourceIpMapping: (...args) => callOperation("voice_v1:FetchSourceIpMapping", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:FetchSourceIpMapping">)),
    VoiceV1ListByocTrunk: (...args) => callOperation("voice_v1:ListByocTrunk", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:ListByocTrunk">)),
    VoiceV1ListConnectionPolicy: (...args) => callOperation("voice_v1:ListConnectionPolicy", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:ListConnectionPolicy">)),
    VoiceV1ListConnectionPolicyTarget: (...args) => callOperation("voice_v1:ListConnectionPolicyTarget", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:ListConnectionPolicyTarget">)),
    VoiceV1ListDialingPermissionsCountry: (...args) => callOperation("voice_v1:ListDialingPermissionsCountry", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:ListDialingPermissionsCountry">)),
    VoiceV1ListDialingPermissionsHrsPrefixes: (...args) => callOperation("voice_v1:ListDialingPermissionsHrsPrefixes", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:ListDialingPermissionsHrsPrefixes">)),
    VoiceV1ListIpRecord: (...args) => callOperation("voice_v1:ListIpRecord", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:ListIpRecord">)),
    VoiceV1ListSourceIpMapping: (...args) => callOperation("voice_v1:ListSourceIpMapping", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:ListSourceIpMapping">)),
    VoiceV1UpdateByocTrunk: (...args) => callOperation("voice_v1:UpdateByocTrunk", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:UpdateByocTrunk">)),
    VoiceV1UpdateConnectionPolicy: (...args) => callOperation("voice_v1:UpdateConnectionPolicy", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:UpdateConnectionPolicy">)),
    VoiceV1UpdateConnectionPolicyTarget: (...args) => callOperation("voice_v1:UpdateConnectionPolicyTarget", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:UpdateConnectionPolicyTarget">)),
    VoiceV1UpdateDialingPermissionsSettings: (...args) => callOperation("voice_v1:UpdateDialingPermissionsSettings", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:UpdateDialingPermissionsSettings">)),
    VoiceV1UpdateIpRecord: (...args) => callOperation("voice_v1:UpdateIpRecord", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:UpdateIpRecord">)),
    VoiceV1UpdateSourceIpMapping: (...args) => callOperation("voice_v1:UpdateSourceIpMapping", ...(args as TwilioVoiceFullApiOperationArgs<"voice_v1:UpdateSourceIpMapping">)),
  };
}
