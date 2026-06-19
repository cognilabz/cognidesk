// Generated endpoint chunk for AmazonFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonGeneratedOperationCaller,
  AmazonFullApiOperationArgs,
  AmazonFullApiOperationInput,
  AmazonFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonFullApiApplicationsOperationKeys = [
  "application_2023-11-30:rotateApplicationClientSecret"
] as const;
export type AmazonFullApiApplicationsOperationKey = typeof AmazonFullApiApplicationsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiApplicationsOperationPathParamMap {
  "application_2023-11-30:rotateApplicationClientSecret": {};
}

export interface AmazonFullApiApplicationsOperationRequestMap {
  "application_2023-11-30:rotateApplicationClientSecret": AmazonFullApiOperationInput<"application_2023-11-30:rotateApplicationClientSecret">;
}

export interface AmazonFullApiApplicationsGeneratedClient {
  RotateApplicationClientSecret(...args: AmazonFullApiOperationArgs<"application_2023-11-30:rotateApplicationClientSecret">): Promise<AmazonFullApiOperationResponseMap["application_2023-11-30:rotateApplicationClientSecret"]>;
}

export const AmazonFullApiApplicationsGeneratedFunctionNames = [
  "RotateApplicationClientSecret"
] as const satisfies readonly (keyof AmazonFullApiApplicationsGeneratedClient)[];

export function createAmazonFullApiApplicationsGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiApplicationsGeneratedClient {
  return {
    RotateApplicationClientSecret: (...args) => callOperation("application_2023-11-30:rotateApplicationClientSecret", ...(args as AmazonFullApiOperationArgs<"application_2023-11-30:rotateApplicationClientSecret">)),
  };
}
