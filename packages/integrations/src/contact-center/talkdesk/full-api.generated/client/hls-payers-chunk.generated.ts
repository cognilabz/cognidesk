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
export const TalkdeskFullApiHLSPayersOperationKeys = [
  "upsertContact",
  "healthcareConnectionsGetMemberById",
  "memberLookup",
  "get_claim_status_by_id_public",
  "get_prior_authorization_status_by_id_public",
  "providerLookupConnections",
  "get_claims_public",
  "get_prior_authorizations"
] as const;
export type TalkdeskFullApiHLSPayersOperationKey = typeof TalkdeskFullApiHLSPayersOperationKeys[number];
// End hardened literal operation keys.

export interface TalkdeskFullApiHLSPayersOperationPathParamMap {
  "upsertContact": { "member_id": TalkdeskFullApiPathParamValue };
  "healthcareConnectionsGetMemberById": { "member_id": TalkdeskFullApiPathParamValue };
  "memberLookup": {};
  "get_claim_status_by_id_public": { "claim_id": TalkdeskFullApiPathParamValue };
  "get_prior_authorization_status_by_id_public": { "prior_authorization_id": TalkdeskFullApiPathParamValue };
  "providerLookupConnections": {};
  "get_claims_public": {};
  "get_prior_authorizations": {};
}

export interface TalkdeskFullApiHLSPayersOperationRequestMap {
  "upsertContact": TalkdeskFullApiOperationInput<"upsertContact">;
  "healthcareConnectionsGetMemberById": TalkdeskFullApiOperationInput<"healthcareConnectionsGetMemberById">;
  "memberLookup": TalkdeskFullApiOperationInput<"memberLookup">;
  "get_claim_status_by_id_public": TalkdeskFullApiOperationInput<"get_claim_status_by_id_public">;
  "get_prior_authorization_status_by_id_public": TalkdeskFullApiOperationInput<"get_prior_authorization_status_by_id_public">;
  "providerLookupConnections": TalkdeskFullApiOperationInput<"providerLookupConnections">;
  "get_claims_public": TalkdeskFullApiOperationInput<"get_claims_public">;
  "get_prior_authorizations": TalkdeskFullApiOperationInput<"get_prior_authorizations">;
}

export interface TalkdeskFullApiHLSPayersGeneratedClient {
  UpsertContact(...args: TalkdeskFullApiOperationArgs<"upsertContact">): Promise<TalkdeskFullApiOperationResponseMap["upsertContact"]>;
  HealthcareConnectionsGetMemberById(...args: TalkdeskFullApiOperationArgs<"healthcareConnectionsGetMemberById">): Promise<TalkdeskFullApiOperationResponseMap["healthcareConnectionsGetMemberById"]>;
  MemberLookup(...args: TalkdeskFullApiOperationArgs<"memberLookup">): Promise<TalkdeskFullApiOperationResponseMap["memberLookup"]>;
  GetClaimStatusByIdPublic(...args: TalkdeskFullApiOperationArgs<"get_claim_status_by_id_public">): Promise<TalkdeskFullApiOperationResponseMap["get_claim_status_by_id_public"]>;
  GetPriorAuthorizationStatusByIdPublic(...args: TalkdeskFullApiOperationArgs<"get_prior_authorization_status_by_id_public">): Promise<TalkdeskFullApiOperationResponseMap["get_prior_authorization_status_by_id_public"]>;
  ProviderLookupConnections(...args: TalkdeskFullApiOperationArgs<"providerLookupConnections">): Promise<TalkdeskFullApiOperationResponseMap["providerLookupConnections"]>;
  GetClaimsPublic(...args: TalkdeskFullApiOperationArgs<"get_claims_public">): Promise<TalkdeskFullApiOperationResponseMap["get_claims_public"]>;
  GetPriorAuthorizations(...args: TalkdeskFullApiOperationArgs<"get_prior_authorizations">): Promise<TalkdeskFullApiOperationResponseMap["get_prior_authorizations"]>;
}

export const TalkdeskFullApiHLSPayersGeneratedFunctionNames = [
  "UpsertContact",
  "HealthcareConnectionsGetMemberById",
  "MemberLookup",
  "GetClaimStatusByIdPublic",
  "GetPriorAuthorizationStatusByIdPublic",
  "ProviderLookupConnections",
  "GetClaimsPublic",
  "GetPriorAuthorizations"
] as const satisfies readonly (keyof TalkdeskFullApiHLSPayersGeneratedClient)[];

export function createTalkdeskFullApiHLSPayersGeneratedClient(
  callOperation: TalkdeskGeneratedOperationCaller,
): TalkdeskFullApiHLSPayersGeneratedClient {
  return {
    UpsertContact: (...args) => callOperation("upsertContact", ...(args as TalkdeskFullApiOperationArgs<"upsertContact">)),
    HealthcareConnectionsGetMemberById: (...args) => callOperation("healthcareConnectionsGetMemberById", ...(args as TalkdeskFullApiOperationArgs<"healthcareConnectionsGetMemberById">)),
    MemberLookup: (...args) => callOperation("memberLookup", ...(args as TalkdeskFullApiOperationArgs<"memberLookup">)),
    GetClaimStatusByIdPublic: (...args) => callOperation("get_claim_status_by_id_public", ...(args as TalkdeskFullApiOperationArgs<"get_claim_status_by_id_public">)),
    GetPriorAuthorizationStatusByIdPublic: (...args) => callOperation("get_prior_authorization_status_by_id_public", ...(args as TalkdeskFullApiOperationArgs<"get_prior_authorization_status_by_id_public">)),
    ProviderLookupConnections: (...args) => callOperation("providerLookupConnections", ...(args as TalkdeskFullApiOperationArgs<"providerLookupConnections">)),
    GetClaimsPublic: (...args) => callOperation("get_claims_public", ...(args as TalkdeskFullApiOperationArgs<"get_claims_public">)),
    GetPriorAuthorizations: (...args) => callOperation("get_prior_authorizations", ...(args as TalkdeskFullApiOperationArgs<"get_prior_authorizations">)),
  };
}
