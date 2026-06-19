// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiMedicalScribeStreamOperationKeys = [
  "connecthealth:GetMedicalScribeListeningSession",
  "connecthealth:StartMedicalScribeListeningSession"
] as const;
export type AmazonConnectFullApiMedicalScribeStreamOperationKey = typeof AmazonConnectFullApiMedicalScribeStreamOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiMedicalScribeStreamOperationPathParamMap {
  "connecthealth:GetMedicalScribeListeningSession": { "domainId": AmazonConnectFullApiPathParamValue; "subscriptionId": AmazonConnectFullApiPathParamValue; "sessionId": AmazonConnectFullApiPathParamValue };
  "connecthealth:StartMedicalScribeListeningSession": {};
}

export interface AmazonConnectFullApiMedicalScribeStreamOperationRequestMap {
  "connecthealth:GetMedicalScribeListeningSession": AmazonConnectFullApiOperationInput<"connecthealth:GetMedicalScribeListeningSession">;
  "connecthealth:StartMedicalScribeListeningSession": AmazonConnectFullApiOperationInput<"connecthealth:StartMedicalScribeListeningSession">;
}

export interface AmazonConnectFullApiMedicalScribeStreamGeneratedClient {
  GetMedicalScribeListeningSession(...args: AmazonConnectFullApiOperationArgs<"connecthealth:GetMedicalScribeListeningSession">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:GetMedicalScribeListeningSession"]>;
  StartMedicalScribeListeningSession(...args: AmazonConnectFullApiOperationArgs<"connecthealth:StartMedicalScribeListeningSession">): Promise<AmazonConnectFullApiOperationResponseMap["connecthealth:StartMedicalScribeListeningSession"]>;
}

export const AmazonConnectFullApiMedicalScribeStreamGeneratedFunctionNames = [
  "GetMedicalScribeListeningSession",
  "StartMedicalScribeListeningSession"
] as const satisfies readonly (keyof AmazonConnectFullApiMedicalScribeStreamGeneratedClient)[];

export function createAmazonConnectFullApiMedicalScribeStreamGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiMedicalScribeStreamGeneratedClient {
  return {
    GetMedicalScribeListeningSession: (...args) => callOperation("connecthealth:GetMedicalScribeListeningSession", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:GetMedicalScribeListeningSession">)),
    StartMedicalScribeListeningSession: (...args) => callOperation("connecthealth:StartMedicalScribeListeningSession", ...(args as AmazonConnectFullApiOperationArgs<"connecthealth:StartMedicalScribeListeningSession">)),
  };
}
