// Generated endpoint chunk for TwilioSmsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TwilioSmsGeneratedOperationCaller,
  TwilioSmsFullApiOperationArgs,
  TwilioSmsFullApiOperationInput,
  TwilioSmsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { TwilioSmsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TwilioSmsFullApiVerifyV2OperationKeys = [
  "verify_v2:CreateAccessToken",
  "verify_v2:CreateBucket",
  "verify_v2:CreateChallenge",
  "verify_v2:CreateChallengePasskeys",
  "verify_v2:CreateEntity",
  "verify_v2:CreateMessagingConfiguration",
  "verify_v2:CreateNewFactor",
  "verify_v2:CreateNewFactorPasskey",
  "verify_v2:CreateNotification",
  "verify_v2:CreateRateLimit",
  "verify_v2:CreateSafelist",
  "verify_v2:CreateService",
  "verify_v2:CreateVerification",
  "verify_v2:CreateVerificationCheck",
  "verify_v2:CreateWebhook",
  "verify_v2:DeleteBucket",
  "verify_v2:DeleteEntity",
  "verify_v2:DeleteFactor",
  "verify_v2:DeleteMessagingConfiguration",
  "verify_v2:DeleteRateLimit",
  "verify_v2:DeleteSafelist",
  "verify_v2:DeleteService",
  "verify_v2:DeleteWebhook",
  "verify_v2:FetchAccessToken",
  "verify_v2:FetchBucket",
  "verify_v2:FetchChallenge",
  "verify_v2:FetchEntity",
  "verify_v2:FetchFactor",
  "verify_v2:FetchForm",
  "verify_v2:FetchMessagingConfiguration",
  "verify_v2:FetchRateLimit",
  "verify_v2:FetchSafelist",
  "verify_v2:FetchService",
  "verify_v2:FetchVerification",
  "verify_v2:FetchVerificationAttempt",
  "verify_v2:FetchVerificationAttemptsSummary",
  "verify_v2:FetchWebhook",
  "verify_v2:ListBucket",
  "verify_v2:ListChallenge",
  "verify_v2:ListEntity",
  "verify_v2:ListFactor",
  "verify_v2:ListMessagingConfiguration",
  "verify_v2:ListRateLimit",
  "verify_v2:ListService",
  "verify_v2:ListVerificationAttempt",
  "verify_v2:ListVerificationTemplate",
  "verify_v2:ListWebhook",
  "verify_v2:UpdateBucket",
  "verify_v2:UpdateChallenge",
  "verify_v2:UpdateChallengePasskeys",
  "verify_v2:UpdateFactor",
  "verify_v2:UpdateMessagingConfiguration",
  "verify_v2:UpdatePasskeysFactor",
  "verify_v2:UpdateRateLimit",
  "verify_v2:UpdateService",
  "verify_v2:UpdateVerification",
  "verify_v2:UpdateWebhook"
] as const;
export type TwilioSmsFullApiVerifyV2OperationKey = typeof TwilioSmsFullApiVerifyV2OperationKeys[number];
// End hardened literal operation keys.

export interface TwilioSmsFullApiVerifyV2OperationPathParamMap {
  "verify_v2:CreateAccessToken": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:CreateBucket": { "ServiceSid": TwilioSmsFullApiPathParamValue; "RateLimitSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:CreateChallenge": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Identity": TwilioSmsFullApiPathParamValue };
  "verify_v2:CreateChallengePasskeys": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:CreateEntity": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:CreateMessagingConfiguration": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:CreateNewFactor": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Identity": TwilioSmsFullApiPathParamValue };
  "verify_v2:CreateNewFactorPasskey": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:CreateNotification": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Identity": TwilioSmsFullApiPathParamValue; "ChallengeSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:CreateRateLimit": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:CreateSafelist": {};
  "verify_v2:CreateService": {};
  "verify_v2:CreateVerification": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:CreateVerificationCheck": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:CreateWebhook": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:DeleteBucket": { "ServiceSid": TwilioSmsFullApiPathParamValue; "RateLimitSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:DeleteEntity": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Identity": TwilioSmsFullApiPathParamValue };
  "verify_v2:DeleteFactor": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Identity": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:DeleteMessagingConfiguration": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Country": TwilioSmsFullApiPathParamValue };
  "verify_v2:DeleteRateLimit": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:DeleteSafelist": { "PhoneNumber": TwilioSmsFullApiPathParamValue };
  "verify_v2:DeleteService": { "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:DeleteWebhook": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:FetchAccessToken": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:FetchBucket": { "ServiceSid": TwilioSmsFullApiPathParamValue; "RateLimitSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:FetchChallenge": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Identity": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:FetchEntity": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Identity": TwilioSmsFullApiPathParamValue };
  "verify_v2:FetchFactor": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Identity": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:FetchForm": { "FormType": TwilioSmsFullApiPathParamValue };
  "verify_v2:FetchMessagingConfiguration": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Country": TwilioSmsFullApiPathParamValue };
  "verify_v2:FetchRateLimit": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:FetchSafelist": { "PhoneNumber": TwilioSmsFullApiPathParamValue };
  "verify_v2:FetchService": { "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:FetchVerification": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:FetchVerificationAttempt": { "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:FetchVerificationAttemptsSummary": {};
  "verify_v2:FetchWebhook": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:ListBucket": { "ServiceSid": TwilioSmsFullApiPathParamValue; "RateLimitSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:ListChallenge": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Identity": TwilioSmsFullApiPathParamValue };
  "verify_v2:ListEntity": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:ListFactor": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Identity": TwilioSmsFullApiPathParamValue };
  "verify_v2:ListMessagingConfiguration": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:ListRateLimit": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:ListService": {};
  "verify_v2:ListVerificationAttempt": {};
  "verify_v2:ListVerificationTemplate": {};
  "verify_v2:ListWebhook": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:UpdateBucket": { "ServiceSid": TwilioSmsFullApiPathParamValue; "RateLimitSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:UpdateChallenge": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Identity": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:UpdateChallengePasskeys": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:UpdateFactor": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Identity": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:UpdateMessagingConfiguration": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Country": TwilioSmsFullApiPathParamValue };
  "verify_v2:UpdatePasskeysFactor": { "ServiceSid": TwilioSmsFullApiPathParamValue };
  "verify_v2:UpdateRateLimit": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:UpdateService": { "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:UpdateVerification": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
  "verify_v2:UpdateWebhook": { "ServiceSid": TwilioSmsFullApiPathParamValue; "Sid": TwilioSmsFullApiPathParamValue };
}

export interface TwilioSmsFullApiVerifyV2OperationRequestMap {
  "verify_v2:CreateAccessToken": TwilioSmsFullApiOperationInput<"verify_v2:CreateAccessToken">;
  "verify_v2:CreateBucket": TwilioSmsFullApiOperationInput<"verify_v2:CreateBucket">;
  "verify_v2:CreateChallenge": TwilioSmsFullApiOperationInput<"verify_v2:CreateChallenge">;
  "verify_v2:CreateChallengePasskeys": TwilioSmsFullApiOperationInput<"verify_v2:CreateChallengePasskeys">;
  "verify_v2:CreateEntity": TwilioSmsFullApiOperationInput<"verify_v2:CreateEntity">;
  "verify_v2:CreateMessagingConfiguration": TwilioSmsFullApiOperationInput<"verify_v2:CreateMessagingConfiguration">;
  "verify_v2:CreateNewFactor": TwilioSmsFullApiOperationInput<"verify_v2:CreateNewFactor">;
  "verify_v2:CreateNewFactorPasskey": TwilioSmsFullApiOperationInput<"verify_v2:CreateNewFactorPasskey">;
  "verify_v2:CreateNotification": TwilioSmsFullApiOperationInput<"verify_v2:CreateNotification">;
  "verify_v2:CreateRateLimit": TwilioSmsFullApiOperationInput<"verify_v2:CreateRateLimit">;
  "verify_v2:CreateSafelist": TwilioSmsFullApiOperationInput<"verify_v2:CreateSafelist">;
  "verify_v2:CreateService": TwilioSmsFullApiOperationInput<"verify_v2:CreateService">;
  "verify_v2:CreateVerification": TwilioSmsFullApiOperationInput<"verify_v2:CreateVerification">;
  "verify_v2:CreateVerificationCheck": TwilioSmsFullApiOperationInput<"verify_v2:CreateVerificationCheck">;
  "verify_v2:CreateWebhook": TwilioSmsFullApiOperationInput<"verify_v2:CreateWebhook">;
  "verify_v2:DeleteBucket": TwilioSmsFullApiOperationInput<"verify_v2:DeleteBucket">;
  "verify_v2:DeleteEntity": TwilioSmsFullApiOperationInput<"verify_v2:DeleteEntity">;
  "verify_v2:DeleteFactor": TwilioSmsFullApiOperationInput<"verify_v2:DeleteFactor">;
  "verify_v2:DeleteMessagingConfiguration": TwilioSmsFullApiOperationInput<"verify_v2:DeleteMessagingConfiguration">;
  "verify_v2:DeleteRateLimit": TwilioSmsFullApiOperationInput<"verify_v2:DeleteRateLimit">;
  "verify_v2:DeleteSafelist": TwilioSmsFullApiOperationInput<"verify_v2:DeleteSafelist">;
  "verify_v2:DeleteService": TwilioSmsFullApiOperationInput<"verify_v2:DeleteService">;
  "verify_v2:DeleteWebhook": TwilioSmsFullApiOperationInput<"verify_v2:DeleteWebhook">;
  "verify_v2:FetchAccessToken": TwilioSmsFullApiOperationInput<"verify_v2:FetchAccessToken">;
  "verify_v2:FetchBucket": TwilioSmsFullApiOperationInput<"verify_v2:FetchBucket">;
  "verify_v2:FetchChallenge": TwilioSmsFullApiOperationInput<"verify_v2:FetchChallenge">;
  "verify_v2:FetchEntity": TwilioSmsFullApiOperationInput<"verify_v2:FetchEntity">;
  "verify_v2:FetchFactor": TwilioSmsFullApiOperationInput<"verify_v2:FetchFactor">;
  "verify_v2:FetchForm": TwilioSmsFullApiOperationInput<"verify_v2:FetchForm">;
  "verify_v2:FetchMessagingConfiguration": TwilioSmsFullApiOperationInput<"verify_v2:FetchMessagingConfiguration">;
  "verify_v2:FetchRateLimit": TwilioSmsFullApiOperationInput<"verify_v2:FetchRateLimit">;
  "verify_v2:FetchSafelist": TwilioSmsFullApiOperationInput<"verify_v2:FetchSafelist">;
  "verify_v2:FetchService": TwilioSmsFullApiOperationInput<"verify_v2:FetchService">;
  "verify_v2:FetchVerification": TwilioSmsFullApiOperationInput<"verify_v2:FetchVerification">;
  "verify_v2:FetchVerificationAttempt": TwilioSmsFullApiOperationInput<"verify_v2:FetchVerificationAttempt">;
  "verify_v2:FetchVerificationAttemptsSummary": TwilioSmsFullApiOperationInput<"verify_v2:FetchVerificationAttemptsSummary">;
  "verify_v2:FetchWebhook": TwilioSmsFullApiOperationInput<"verify_v2:FetchWebhook">;
  "verify_v2:ListBucket": TwilioSmsFullApiOperationInput<"verify_v2:ListBucket">;
  "verify_v2:ListChallenge": TwilioSmsFullApiOperationInput<"verify_v2:ListChallenge">;
  "verify_v2:ListEntity": TwilioSmsFullApiOperationInput<"verify_v2:ListEntity">;
  "verify_v2:ListFactor": TwilioSmsFullApiOperationInput<"verify_v2:ListFactor">;
  "verify_v2:ListMessagingConfiguration": TwilioSmsFullApiOperationInput<"verify_v2:ListMessagingConfiguration">;
  "verify_v2:ListRateLimit": TwilioSmsFullApiOperationInput<"verify_v2:ListRateLimit">;
  "verify_v2:ListService": TwilioSmsFullApiOperationInput<"verify_v2:ListService">;
  "verify_v2:ListVerificationAttempt": TwilioSmsFullApiOperationInput<"verify_v2:ListVerificationAttempt">;
  "verify_v2:ListVerificationTemplate": TwilioSmsFullApiOperationInput<"verify_v2:ListVerificationTemplate">;
  "verify_v2:ListWebhook": TwilioSmsFullApiOperationInput<"verify_v2:ListWebhook">;
  "verify_v2:UpdateBucket": TwilioSmsFullApiOperationInput<"verify_v2:UpdateBucket">;
  "verify_v2:UpdateChallenge": TwilioSmsFullApiOperationInput<"verify_v2:UpdateChallenge">;
  "verify_v2:UpdateChallengePasskeys": TwilioSmsFullApiOperationInput<"verify_v2:UpdateChallengePasskeys">;
  "verify_v2:UpdateFactor": TwilioSmsFullApiOperationInput<"verify_v2:UpdateFactor">;
  "verify_v2:UpdateMessagingConfiguration": TwilioSmsFullApiOperationInput<"verify_v2:UpdateMessagingConfiguration">;
  "verify_v2:UpdatePasskeysFactor": TwilioSmsFullApiOperationInput<"verify_v2:UpdatePasskeysFactor">;
  "verify_v2:UpdateRateLimit": TwilioSmsFullApiOperationInput<"verify_v2:UpdateRateLimit">;
  "verify_v2:UpdateService": TwilioSmsFullApiOperationInput<"verify_v2:UpdateService">;
  "verify_v2:UpdateVerification": TwilioSmsFullApiOperationInput<"verify_v2:UpdateVerification">;
  "verify_v2:UpdateWebhook": TwilioSmsFullApiOperationInput<"verify_v2:UpdateWebhook">;
}

export interface TwilioSmsFullApiVerifyV2GeneratedClient {
  VerifyV2CreateAccessToken(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateAccessToken">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateAccessToken"]>;
  VerifyV2CreateBucket(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateBucket">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateBucket"]>;
  VerifyV2CreateChallenge(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateChallenge">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateChallenge"]>;
  VerifyV2CreateChallengePasskeys(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateChallengePasskeys">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateChallengePasskeys"]>;
  VerifyV2CreateEntity(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateEntity">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateEntity"]>;
  VerifyV2CreateMessagingConfiguration(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateMessagingConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateMessagingConfiguration"]>;
  VerifyV2CreateNewFactor(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateNewFactor">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateNewFactor"]>;
  VerifyV2CreateNewFactorPasskey(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateNewFactorPasskey">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateNewFactorPasskey"]>;
  VerifyV2CreateNotification(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateNotification">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateNotification"]>;
  VerifyV2CreateRateLimit(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateRateLimit">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateRateLimit"]>;
  VerifyV2CreateSafelist(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateSafelist">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateSafelist"]>;
  VerifyV2CreateService(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateService">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateService"]>;
  VerifyV2CreateVerification(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateVerification">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateVerification"]>;
  VerifyV2CreateVerificationCheck(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateVerificationCheck">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateVerificationCheck"]>;
  VerifyV2CreateWebhook(...args: TwilioSmsFullApiOperationArgs<"verify_v2:CreateWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:CreateWebhook"]>;
  VerifyV2DeleteBucket(...args: TwilioSmsFullApiOperationArgs<"verify_v2:DeleteBucket">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:DeleteBucket"]>;
  VerifyV2DeleteEntity(...args: TwilioSmsFullApiOperationArgs<"verify_v2:DeleteEntity">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:DeleteEntity"]>;
  VerifyV2DeleteFactor(...args: TwilioSmsFullApiOperationArgs<"verify_v2:DeleteFactor">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:DeleteFactor"]>;
  VerifyV2DeleteMessagingConfiguration(...args: TwilioSmsFullApiOperationArgs<"verify_v2:DeleteMessagingConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:DeleteMessagingConfiguration"]>;
  VerifyV2DeleteRateLimit(...args: TwilioSmsFullApiOperationArgs<"verify_v2:DeleteRateLimit">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:DeleteRateLimit"]>;
  VerifyV2DeleteSafelist(...args: TwilioSmsFullApiOperationArgs<"verify_v2:DeleteSafelist">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:DeleteSafelist"]>;
  VerifyV2DeleteService(...args: TwilioSmsFullApiOperationArgs<"verify_v2:DeleteService">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:DeleteService"]>;
  VerifyV2DeleteWebhook(...args: TwilioSmsFullApiOperationArgs<"verify_v2:DeleteWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:DeleteWebhook"]>;
  VerifyV2FetchAccessToken(...args: TwilioSmsFullApiOperationArgs<"verify_v2:FetchAccessToken">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:FetchAccessToken"]>;
  VerifyV2FetchBucket(...args: TwilioSmsFullApiOperationArgs<"verify_v2:FetchBucket">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:FetchBucket"]>;
  VerifyV2FetchChallenge(...args: TwilioSmsFullApiOperationArgs<"verify_v2:FetchChallenge">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:FetchChallenge"]>;
  VerifyV2FetchEntity(...args: TwilioSmsFullApiOperationArgs<"verify_v2:FetchEntity">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:FetchEntity"]>;
  VerifyV2FetchFactor(...args: TwilioSmsFullApiOperationArgs<"verify_v2:FetchFactor">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:FetchFactor"]>;
  VerifyV2FetchForm(...args: TwilioSmsFullApiOperationArgs<"verify_v2:FetchForm">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:FetchForm"]>;
  VerifyV2FetchMessagingConfiguration(...args: TwilioSmsFullApiOperationArgs<"verify_v2:FetchMessagingConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:FetchMessagingConfiguration"]>;
  VerifyV2FetchRateLimit(...args: TwilioSmsFullApiOperationArgs<"verify_v2:FetchRateLimit">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:FetchRateLimit"]>;
  VerifyV2FetchSafelist(...args: TwilioSmsFullApiOperationArgs<"verify_v2:FetchSafelist">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:FetchSafelist"]>;
  VerifyV2FetchService(...args: TwilioSmsFullApiOperationArgs<"verify_v2:FetchService">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:FetchService"]>;
  VerifyV2FetchVerification(...args: TwilioSmsFullApiOperationArgs<"verify_v2:FetchVerification">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:FetchVerification"]>;
  VerifyV2FetchVerificationAttempt(...args: TwilioSmsFullApiOperationArgs<"verify_v2:FetchVerificationAttempt">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:FetchVerificationAttempt"]>;
  VerifyV2FetchVerificationAttemptsSummary(...args: TwilioSmsFullApiOperationArgs<"verify_v2:FetchVerificationAttemptsSummary">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:FetchVerificationAttemptsSummary"]>;
  VerifyV2FetchWebhook(...args: TwilioSmsFullApiOperationArgs<"verify_v2:FetchWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:FetchWebhook"]>;
  VerifyV2ListBucket(...args: TwilioSmsFullApiOperationArgs<"verify_v2:ListBucket">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:ListBucket"]>;
  VerifyV2ListChallenge(...args: TwilioSmsFullApiOperationArgs<"verify_v2:ListChallenge">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:ListChallenge"]>;
  VerifyV2ListEntity(...args: TwilioSmsFullApiOperationArgs<"verify_v2:ListEntity">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:ListEntity"]>;
  VerifyV2ListFactor(...args: TwilioSmsFullApiOperationArgs<"verify_v2:ListFactor">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:ListFactor"]>;
  VerifyV2ListMessagingConfiguration(...args: TwilioSmsFullApiOperationArgs<"verify_v2:ListMessagingConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:ListMessagingConfiguration"]>;
  VerifyV2ListRateLimit(...args: TwilioSmsFullApiOperationArgs<"verify_v2:ListRateLimit">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:ListRateLimit"]>;
  VerifyV2ListService(...args: TwilioSmsFullApiOperationArgs<"verify_v2:ListService">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:ListService"]>;
  VerifyV2ListVerificationAttempt(...args: TwilioSmsFullApiOperationArgs<"verify_v2:ListVerificationAttempt">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:ListVerificationAttempt"]>;
  VerifyV2ListVerificationTemplate(...args: TwilioSmsFullApiOperationArgs<"verify_v2:ListVerificationTemplate">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:ListVerificationTemplate"]>;
  VerifyV2ListWebhook(...args: TwilioSmsFullApiOperationArgs<"verify_v2:ListWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:ListWebhook"]>;
  VerifyV2UpdateBucket(...args: TwilioSmsFullApiOperationArgs<"verify_v2:UpdateBucket">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:UpdateBucket"]>;
  VerifyV2UpdateChallenge(...args: TwilioSmsFullApiOperationArgs<"verify_v2:UpdateChallenge">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:UpdateChallenge"]>;
  VerifyV2UpdateChallengePasskeys(...args: TwilioSmsFullApiOperationArgs<"verify_v2:UpdateChallengePasskeys">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:UpdateChallengePasskeys"]>;
  VerifyV2UpdateFactor(...args: TwilioSmsFullApiOperationArgs<"verify_v2:UpdateFactor">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:UpdateFactor"]>;
  VerifyV2UpdateMessagingConfiguration(...args: TwilioSmsFullApiOperationArgs<"verify_v2:UpdateMessagingConfiguration">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:UpdateMessagingConfiguration"]>;
  VerifyV2UpdatePasskeysFactor(...args: TwilioSmsFullApiOperationArgs<"verify_v2:UpdatePasskeysFactor">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:UpdatePasskeysFactor"]>;
  VerifyV2UpdateRateLimit(...args: TwilioSmsFullApiOperationArgs<"verify_v2:UpdateRateLimit">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:UpdateRateLimit"]>;
  VerifyV2UpdateService(...args: TwilioSmsFullApiOperationArgs<"verify_v2:UpdateService">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:UpdateService"]>;
  VerifyV2UpdateVerification(...args: TwilioSmsFullApiOperationArgs<"verify_v2:UpdateVerification">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:UpdateVerification"]>;
  VerifyV2UpdateWebhook(...args: TwilioSmsFullApiOperationArgs<"verify_v2:UpdateWebhook">): Promise<TwilioSmsFullApiOperationResponseMap["verify_v2:UpdateWebhook"]>;
}

export const TwilioSmsFullApiVerifyV2GeneratedFunctionNames = [
  "VerifyV2CreateAccessToken",
  "VerifyV2CreateBucket",
  "VerifyV2CreateChallenge",
  "VerifyV2CreateChallengePasskeys",
  "VerifyV2CreateEntity",
  "VerifyV2CreateMessagingConfiguration",
  "VerifyV2CreateNewFactor",
  "VerifyV2CreateNewFactorPasskey",
  "VerifyV2CreateNotification",
  "VerifyV2CreateRateLimit",
  "VerifyV2CreateSafelist",
  "VerifyV2CreateService",
  "VerifyV2CreateVerification",
  "VerifyV2CreateVerificationCheck",
  "VerifyV2CreateWebhook",
  "VerifyV2DeleteBucket",
  "VerifyV2DeleteEntity",
  "VerifyV2DeleteFactor",
  "VerifyV2DeleteMessagingConfiguration",
  "VerifyV2DeleteRateLimit",
  "VerifyV2DeleteSafelist",
  "VerifyV2DeleteService",
  "VerifyV2DeleteWebhook",
  "VerifyV2FetchAccessToken",
  "VerifyV2FetchBucket",
  "VerifyV2FetchChallenge",
  "VerifyV2FetchEntity",
  "VerifyV2FetchFactor",
  "VerifyV2FetchForm",
  "VerifyV2FetchMessagingConfiguration",
  "VerifyV2FetchRateLimit",
  "VerifyV2FetchSafelist",
  "VerifyV2FetchService",
  "VerifyV2FetchVerification",
  "VerifyV2FetchVerificationAttempt",
  "VerifyV2FetchVerificationAttemptsSummary",
  "VerifyV2FetchWebhook",
  "VerifyV2ListBucket",
  "VerifyV2ListChallenge",
  "VerifyV2ListEntity",
  "VerifyV2ListFactor",
  "VerifyV2ListMessagingConfiguration",
  "VerifyV2ListRateLimit",
  "VerifyV2ListService",
  "VerifyV2ListVerificationAttempt",
  "VerifyV2ListVerificationTemplate",
  "VerifyV2ListWebhook",
  "VerifyV2UpdateBucket",
  "VerifyV2UpdateChallenge",
  "VerifyV2UpdateChallengePasskeys",
  "VerifyV2UpdateFactor",
  "VerifyV2UpdateMessagingConfiguration",
  "VerifyV2UpdatePasskeysFactor",
  "VerifyV2UpdateRateLimit",
  "VerifyV2UpdateService",
  "VerifyV2UpdateVerification",
  "VerifyV2UpdateWebhook"
] as const satisfies readonly (keyof TwilioSmsFullApiVerifyV2GeneratedClient)[];

export function createTwilioSmsFullApiVerifyV2GeneratedClient(
  callOperation: TwilioSmsGeneratedOperationCaller,
): TwilioSmsFullApiVerifyV2GeneratedClient {
  return {
    VerifyV2CreateAccessToken: (...args) => callOperation("verify_v2:CreateAccessToken", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateAccessToken">)),
    VerifyV2CreateBucket: (...args) => callOperation("verify_v2:CreateBucket", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateBucket">)),
    VerifyV2CreateChallenge: (...args) => callOperation("verify_v2:CreateChallenge", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateChallenge">)),
    VerifyV2CreateChallengePasskeys: (...args) => callOperation("verify_v2:CreateChallengePasskeys", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateChallengePasskeys">)),
    VerifyV2CreateEntity: (...args) => callOperation("verify_v2:CreateEntity", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateEntity">)),
    VerifyV2CreateMessagingConfiguration: (...args) => callOperation("verify_v2:CreateMessagingConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateMessagingConfiguration">)),
    VerifyV2CreateNewFactor: (...args) => callOperation("verify_v2:CreateNewFactor", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateNewFactor">)),
    VerifyV2CreateNewFactorPasskey: (...args) => callOperation("verify_v2:CreateNewFactorPasskey", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateNewFactorPasskey">)),
    VerifyV2CreateNotification: (...args) => callOperation("verify_v2:CreateNotification", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateNotification">)),
    VerifyV2CreateRateLimit: (...args) => callOperation("verify_v2:CreateRateLimit", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateRateLimit">)),
    VerifyV2CreateSafelist: (...args) => callOperation("verify_v2:CreateSafelist", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateSafelist">)),
    VerifyV2CreateService: (...args) => callOperation("verify_v2:CreateService", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateService">)),
    VerifyV2CreateVerification: (...args) => callOperation("verify_v2:CreateVerification", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateVerification">)),
    VerifyV2CreateVerificationCheck: (...args) => callOperation("verify_v2:CreateVerificationCheck", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateVerificationCheck">)),
    VerifyV2CreateWebhook: (...args) => callOperation("verify_v2:CreateWebhook", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:CreateWebhook">)),
    VerifyV2DeleteBucket: (...args) => callOperation("verify_v2:DeleteBucket", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:DeleteBucket">)),
    VerifyV2DeleteEntity: (...args) => callOperation("verify_v2:DeleteEntity", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:DeleteEntity">)),
    VerifyV2DeleteFactor: (...args) => callOperation("verify_v2:DeleteFactor", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:DeleteFactor">)),
    VerifyV2DeleteMessagingConfiguration: (...args) => callOperation("verify_v2:DeleteMessagingConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:DeleteMessagingConfiguration">)),
    VerifyV2DeleteRateLimit: (...args) => callOperation("verify_v2:DeleteRateLimit", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:DeleteRateLimit">)),
    VerifyV2DeleteSafelist: (...args) => callOperation("verify_v2:DeleteSafelist", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:DeleteSafelist">)),
    VerifyV2DeleteService: (...args) => callOperation("verify_v2:DeleteService", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:DeleteService">)),
    VerifyV2DeleteWebhook: (...args) => callOperation("verify_v2:DeleteWebhook", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:DeleteWebhook">)),
    VerifyV2FetchAccessToken: (...args) => callOperation("verify_v2:FetchAccessToken", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:FetchAccessToken">)),
    VerifyV2FetchBucket: (...args) => callOperation("verify_v2:FetchBucket", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:FetchBucket">)),
    VerifyV2FetchChallenge: (...args) => callOperation("verify_v2:FetchChallenge", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:FetchChallenge">)),
    VerifyV2FetchEntity: (...args) => callOperation("verify_v2:FetchEntity", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:FetchEntity">)),
    VerifyV2FetchFactor: (...args) => callOperation("verify_v2:FetchFactor", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:FetchFactor">)),
    VerifyV2FetchForm: (...args) => callOperation("verify_v2:FetchForm", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:FetchForm">)),
    VerifyV2FetchMessagingConfiguration: (...args) => callOperation("verify_v2:FetchMessagingConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:FetchMessagingConfiguration">)),
    VerifyV2FetchRateLimit: (...args) => callOperation("verify_v2:FetchRateLimit", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:FetchRateLimit">)),
    VerifyV2FetchSafelist: (...args) => callOperation("verify_v2:FetchSafelist", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:FetchSafelist">)),
    VerifyV2FetchService: (...args) => callOperation("verify_v2:FetchService", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:FetchService">)),
    VerifyV2FetchVerification: (...args) => callOperation("verify_v2:FetchVerification", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:FetchVerification">)),
    VerifyV2FetchVerificationAttempt: (...args) => callOperation("verify_v2:FetchVerificationAttempt", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:FetchVerificationAttempt">)),
    VerifyV2FetchVerificationAttemptsSummary: (...args) => callOperation("verify_v2:FetchVerificationAttemptsSummary", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:FetchVerificationAttemptsSummary">)),
    VerifyV2FetchWebhook: (...args) => callOperation("verify_v2:FetchWebhook", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:FetchWebhook">)),
    VerifyV2ListBucket: (...args) => callOperation("verify_v2:ListBucket", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:ListBucket">)),
    VerifyV2ListChallenge: (...args) => callOperation("verify_v2:ListChallenge", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:ListChallenge">)),
    VerifyV2ListEntity: (...args) => callOperation("verify_v2:ListEntity", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:ListEntity">)),
    VerifyV2ListFactor: (...args) => callOperation("verify_v2:ListFactor", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:ListFactor">)),
    VerifyV2ListMessagingConfiguration: (...args) => callOperation("verify_v2:ListMessagingConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:ListMessagingConfiguration">)),
    VerifyV2ListRateLimit: (...args) => callOperation("verify_v2:ListRateLimit", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:ListRateLimit">)),
    VerifyV2ListService: (...args) => callOperation("verify_v2:ListService", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:ListService">)),
    VerifyV2ListVerificationAttempt: (...args) => callOperation("verify_v2:ListVerificationAttempt", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:ListVerificationAttempt">)),
    VerifyV2ListVerificationTemplate: (...args) => callOperation("verify_v2:ListVerificationTemplate", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:ListVerificationTemplate">)),
    VerifyV2ListWebhook: (...args) => callOperation("verify_v2:ListWebhook", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:ListWebhook">)),
    VerifyV2UpdateBucket: (...args) => callOperation("verify_v2:UpdateBucket", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:UpdateBucket">)),
    VerifyV2UpdateChallenge: (...args) => callOperation("verify_v2:UpdateChallenge", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:UpdateChallenge">)),
    VerifyV2UpdateChallengePasskeys: (...args) => callOperation("verify_v2:UpdateChallengePasskeys", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:UpdateChallengePasskeys">)),
    VerifyV2UpdateFactor: (...args) => callOperation("verify_v2:UpdateFactor", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:UpdateFactor">)),
    VerifyV2UpdateMessagingConfiguration: (...args) => callOperation("verify_v2:UpdateMessagingConfiguration", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:UpdateMessagingConfiguration">)),
    VerifyV2UpdatePasskeysFactor: (...args) => callOperation("verify_v2:UpdatePasskeysFactor", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:UpdatePasskeysFactor">)),
    VerifyV2UpdateRateLimit: (...args) => callOperation("verify_v2:UpdateRateLimit", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:UpdateRateLimit">)),
    VerifyV2UpdateService: (...args) => callOperation("verify_v2:UpdateService", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:UpdateService">)),
    VerifyV2UpdateVerification: (...args) => callOperation("verify_v2:UpdateVerification", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:UpdateVerification">)),
    VerifyV2UpdateWebhook: (...args) => callOperation("verify_v2:UpdateWebhook", ...(args as TwilioSmsFullApiOperationArgs<"verify_v2:UpdateWebhook">)),
  };
}
