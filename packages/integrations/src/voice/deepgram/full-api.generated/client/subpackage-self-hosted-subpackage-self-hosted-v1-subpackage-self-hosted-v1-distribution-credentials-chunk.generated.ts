// Generated endpoint chunk for DeepgramSpeechFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  DeepgramSpeechGeneratedOperationCaller,
  DeepgramSpeechFullApiOperationArgs,
  DeepgramSpeechFullApiOperationInput,
  DeepgramSpeechFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { DeepgramSpeechFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const DeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsOperationKeys = [
  "POST /v1/projects/{project_id}/self-hosted/distribution/credentials",
  "DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}",
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}",
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials"
] as const;
export type DeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsOperationKey = typeof DeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsOperationKeys[number];
// End hardened literal operation keys.

export interface DeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsOperationPathParamMap {
  "POST /v1/projects/{project_id}/self-hosted/distribution/credentials": { "project_id": DeepgramSpeechFullApiPathParamValue };
  "DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}": { "project_id": DeepgramSpeechFullApiPathParamValue; "distribution_credentials_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}": { "project_id": DeepgramSpeechFullApiPathParamValue; "distribution_credentials_id": DeepgramSpeechFullApiPathParamValue };
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials": { "project_id": DeepgramSpeechFullApiPathParamValue };
}

export interface DeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsOperationRequestMap {
  "POST /v1/projects/{project_id}/self-hosted/distribution/credentials": DeepgramSpeechFullApiOperationInput<"POST /v1/projects/{project_id}/self-hosted/distribution/credentials">;
  "DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}": DeepgramSpeechFullApiOperationInput<"DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}">;
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}">;
  "GET /v1/projects/{project_id}/self-hosted/distribution/credentials": DeepgramSpeechFullApiOperationInput<"GET /v1/projects/{project_id}/self-hosted/distribution/credentials">;
}

export interface DeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsGeneratedClient {
  Create5(...args: DeepgramSpeechFullApiOperationArgs<"POST /v1/projects/{project_id}/self-hosted/distribution/credentials">): Promise<DeepgramSpeechFullApiOperationResponseMap["POST /v1/projects/{project_id}/self-hosted/distribution/credentials"]>;
  Delete7(...args: DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}"]>;
  Get11(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}"]>;
  List17(...args: DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/self-hosted/distribution/credentials">): Promise<DeepgramSpeechFullApiOperationResponseMap["GET /v1/projects/{project_id}/self-hosted/distribution/credentials"]>;
}

export const DeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsGeneratedFunctionNames = [
  "Create5",
  "Delete7",
  "Get11",
  "List17"
] as const satisfies readonly (keyof DeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsGeneratedClient)[];

export function createDeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsGeneratedClient(
  callOperation: DeepgramSpeechGeneratedOperationCaller,
): DeepgramSpeechFullApiSubpackageSelfHostedSubpackageSelfHostedV1SubpackageSelfHostedV1DistributionCredentialsGeneratedClient {
  return {
    Create5: (...args) => callOperation("POST /v1/projects/{project_id}/self-hosted/distribution/credentials", ...(args as DeepgramSpeechFullApiOperationArgs<"POST /v1/projects/{project_id}/self-hosted/distribution/credentials">)),
    Delete7: (...args) => callOperation("DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"DELETE /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}">)),
    Get11: (...args) => callOperation("GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/self-hosted/distribution/credentials/{distribution_credentials_id}">)),
    List17: (...args) => callOperation("GET /v1/projects/{project_id}/self-hosted/distribution/credentials", ...(args as DeepgramSpeechFullApiOperationArgs<"GET /v1/projects/{project_id}/self-hosted/distribution/credentials">)),
  };
}
