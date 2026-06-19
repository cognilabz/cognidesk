// Generated endpoint chunk for FrontFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  FrontGeneratedOperationCaller,
  FrontFullApiOperationArgs,
  FrontFullApiOperationInput,
  FrontFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { FrontFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const FrontFullApiSignaturesOperationKeys = [
  "delete-signature",
  "get-signatures",
  "update-signature",
  "list-teammate-signatures",
  "create-teammate-signature",
  "list-team-signatures",
  "create-team-signature"
] as const;
export type FrontFullApiSignaturesOperationKey = typeof FrontFullApiSignaturesOperationKeys[number];
// End hardened literal operation keys.

export interface FrontFullApiSignaturesOperationPathParamMap {
  "delete-signature": { "signature_id": FrontFullApiPathParamValue };
  "get-signatures": { "signature_id": FrontFullApiPathParamValue };
  "update-signature": { "signature_id": FrontFullApiPathParamValue };
  "list-teammate-signatures": { "teammate_id": FrontFullApiPathParamValue };
  "create-teammate-signature": { "teammate_id": FrontFullApiPathParamValue };
  "list-team-signatures": { "team_id": FrontFullApiPathParamValue };
  "create-team-signature": { "team_id": FrontFullApiPathParamValue };
}

export interface FrontFullApiSignaturesOperationRequestMap {
  "delete-signature": FrontFullApiOperationInput<"delete-signature">;
  "get-signatures": FrontFullApiOperationInput<"get-signatures">;
  "update-signature": FrontFullApiOperationInput<"update-signature">;
  "list-teammate-signatures": FrontFullApiOperationInput<"list-teammate-signatures">;
  "create-teammate-signature": FrontFullApiOperationInput<"create-teammate-signature">;
  "list-team-signatures": FrontFullApiOperationInput<"list-team-signatures">;
  "create-team-signature": FrontFullApiOperationInput<"create-team-signature">;
}

export interface FrontFullApiSignaturesGeneratedClient {
  frontDeleteSignature(...args: FrontFullApiOperationArgs<"delete-signature">): Promise<FrontFullApiOperationResponseMap["delete-signature"]>;
  frontGetSignatures(...args: FrontFullApiOperationArgs<"get-signatures">): Promise<FrontFullApiOperationResponseMap["get-signatures"]>;
  frontUpdateSignature(...args: FrontFullApiOperationArgs<"update-signature">): Promise<FrontFullApiOperationResponseMap["update-signature"]>;
  frontListTeammateSignatures(...args: FrontFullApiOperationArgs<"list-teammate-signatures">): Promise<FrontFullApiOperationResponseMap["list-teammate-signatures"]>;
  frontCreateTeammateSignature(...args: FrontFullApiOperationArgs<"create-teammate-signature">): Promise<FrontFullApiOperationResponseMap["create-teammate-signature"]>;
  frontListTeamSignatures(...args: FrontFullApiOperationArgs<"list-team-signatures">): Promise<FrontFullApiOperationResponseMap["list-team-signatures"]>;
  frontCreateTeamSignature(...args: FrontFullApiOperationArgs<"create-team-signature">): Promise<FrontFullApiOperationResponseMap["create-team-signature"]>;
}

export const FrontFullApiSignaturesGeneratedFunctionNames = [
  "frontDeleteSignature",
  "frontGetSignatures",
  "frontUpdateSignature",
  "frontListTeammateSignatures",
  "frontCreateTeammateSignature",
  "frontListTeamSignatures",
  "frontCreateTeamSignature"
] as const satisfies readonly (keyof FrontFullApiSignaturesGeneratedClient)[];

export function createFrontFullApiSignaturesGeneratedClient(
  callOperation: FrontGeneratedOperationCaller,
): FrontFullApiSignaturesGeneratedClient {
  return {
    frontDeleteSignature: (...args) => callOperation("delete-signature", ...(args as FrontFullApiOperationArgs<"delete-signature">)),
    frontGetSignatures: (...args) => callOperation("get-signatures", ...(args as FrontFullApiOperationArgs<"get-signatures">)),
    frontUpdateSignature: (...args) => callOperation("update-signature", ...(args as FrontFullApiOperationArgs<"update-signature">)),
    frontListTeammateSignatures: (...args) => callOperation("list-teammate-signatures", ...(args as FrontFullApiOperationArgs<"list-teammate-signatures">)),
    frontCreateTeammateSignature: (...args) => callOperation("create-teammate-signature", ...(args as FrontFullApiOperationArgs<"create-teammate-signature">)),
    frontListTeamSignatures: (...args) => callOperation("list-team-signatures", ...(args as FrontFullApiOperationArgs<"list-team-signatures">)),
    frontCreateTeamSignature: (...args) => callOperation("create-team-signature", ...(args as FrontFullApiOperationArgs<"create-team-signature">)),
  };
}
