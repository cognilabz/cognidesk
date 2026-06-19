// Generated endpoint chunk for NiceCxoneFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  NiceCxoneGeneratedOperationCaller,
  NiceCxoneFullApiOperationArgs,
  NiceCxoneFullApiOperationInput,
  NiceCxoneFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { NiceCxoneFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const NiceCxoneFullApiPolicyInstanceServicesOperationKeys = [
  "policy-policyinstance-api-docs:getPolicyInstance:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}",
  "policy-policyinstance-api-docs:generateEvidenceReportUrl:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}/evidence-reports",
  "policy-policyinstance-api-docs:getAllPolicyInstances:GET:/data-policies/v1/policies/{policyId}/policy-instances",
  "policy-policyinstance-api-docs:getPolicyInstances:POST:/data-policies/v1/policies/policy-instances/search"
] as const;
export type NiceCxoneFullApiPolicyInstanceServicesOperationKey = typeof NiceCxoneFullApiPolicyInstanceServicesOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiPolicyInstanceServicesOperationPathParamMap {
  "policy-policyinstance-api-docs:getPolicyInstance:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}": { "policyId": NiceCxoneFullApiPathParamValue; "policyInstanceId": NiceCxoneFullApiPathParamValue };
  "policy-policyinstance-api-docs:generateEvidenceReportUrl:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}/evidence-reports": { "policyId": NiceCxoneFullApiPathParamValue; "policyInstanceId": NiceCxoneFullApiPathParamValue };
  "policy-policyinstance-api-docs:getAllPolicyInstances:GET:/data-policies/v1/policies/{policyId}/policy-instances": { "policyId": NiceCxoneFullApiPathParamValue };
  "policy-policyinstance-api-docs:getPolicyInstances:POST:/data-policies/v1/policies/policy-instances/search": {};
}

export interface NiceCxoneFullApiPolicyInstanceServicesOperationRequestMap {
  "policy-policyinstance-api-docs:getPolicyInstance:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}": NiceCxoneFullApiOperationInput<"policy-policyinstance-api-docs:getPolicyInstance:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}">;
  "policy-policyinstance-api-docs:generateEvidenceReportUrl:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}/evidence-reports": NiceCxoneFullApiOperationInput<"policy-policyinstance-api-docs:generateEvidenceReportUrl:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}/evidence-reports">;
  "policy-policyinstance-api-docs:getAllPolicyInstances:GET:/data-policies/v1/policies/{policyId}/policy-instances": NiceCxoneFullApiOperationInput<"policy-policyinstance-api-docs:getAllPolicyInstances:GET:/data-policies/v1/policies/{policyId}/policy-instances">;
  "policy-policyinstance-api-docs:getPolicyInstances:POST:/data-policies/v1/policies/policy-instances/search": NiceCxoneFullApiOperationInput<"policy-policyinstance-api-docs:getPolicyInstances:POST:/data-policies/v1/policies/policy-instances/search">;
}

export interface NiceCxoneFullApiPolicyInstanceServicesGeneratedClient {
  PolicyPolicyinstanceApiDocsGetPolicyInstance(...args: NiceCxoneFullApiOperationArgs<"policy-policyinstance-api-docs:getPolicyInstance:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}">): Promise<NiceCxoneFullApiOperationResponseMap["policy-policyinstance-api-docs:getPolicyInstance:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}"]>;
  PolicyPolicyinstanceApiDocsGenerateEvidenceReportUrl(...args: NiceCxoneFullApiOperationArgs<"policy-policyinstance-api-docs:generateEvidenceReportUrl:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}/evidence-reports">): Promise<NiceCxoneFullApiOperationResponseMap["policy-policyinstance-api-docs:generateEvidenceReportUrl:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}/evidence-reports"]>;
  PolicyPolicyinstanceApiDocsGetAllPolicyInstances(...args: NiceCxoneFullApiOperationArgs<"policy-policyinstance-api-docs:getAllPolicyInstances:GET:/data-policies/v1/policies/{policyId}/policy-instances">): Promise<NiceCxoneFullApiOperationResponseMap["policy-policyinstance-api-docs:getAllPolicyInstances:GET:/data-policies/v1/policies/{policyId}/policy-instances"]>;
  PolicyPolicyinstanceApiDocsGetPolicyInstances(...args: NiceCxoneFullApiOperationArgs<"policy-policyinstance-api-docs:getPolicyInstances:POST:/data-policies/v1/policies/policy-instances/search">): Promise<NiceCxoneFullApiOperationResponseMap["policy-policyinstance-api-docs:getPolicyInstances:POST:/data-policies/v1/policies/policy-instances/search"]>;
}

export const NiceCxoneFullApiPolicyInstanceServicesGeneratedFunctionNames = [
  "PolicyPolicyinstanceApiDocsGetPolicyInstance",
  "PolicyPolicyinstanceApiDocsGenerateEvidenceReportUrl",
  "PolicyPolicyinstanceApiDocsGetAllPolicyInstances",
  "PolicyPolicyinstanceApiDocsGetPolicyInstances"
] as const satisfies readonly (keyof NiceCxoneFullApiPolicyInstanceServicesGeneratedClient)[];

export function createNiceCxoneFullApiPolicyInstanceServicesGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiPolicyInstanceServicesGeneratedClient {
  return {
    PolicyPolicyinstanceApiDocsGetPolicyInstance: (...args) => callOperation("policy-policyinstance-api-docs:getPolicyInstance:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}", ...(args as NiceCxoneFullApiOperationArgs<"policy-policyinstance-api-docs:getPolicyInstance:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}">)),
    PolicyPolicyinstanceApiDocsGenerateEvidenceReportUrl: (...args) => callOperation("policy-policyinstance-api-docs:generateEvidenceReportUrl:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}/evidence-reports", ...(args as NiceCxoneFullApiOperationArgs<"policy-policyinstance-api-docs:generateEvidenceReportUrl:GET:/data-policies/v1/policies/{policyId}/policy-instances/{policyInstanceId}/evidence-reports">)),
    PolicyPolicyinstanceApiDocsGetAllPolicyInstances: (...args) => callOperation("policy-policyinstance-api-docs:getAllPolicyInstances:GET:/data-policies/v1/policies/{policyId}/policy-instances", ...(args as NiceCxoneFullApiOperationArgs<"policy-policyinstance-api-docs:getAllPolicyInstances:GET:/data-policies/v1/policies/{policyId}/policy-instances">)),
    PolicyPolicyinstanceApiDocsGetPolicyInstances: (...args) => callOperation("policy-policyinstance-api-docs:getPolicyInstances:POST:/data-policies/v1/policies/policy-instances/search", ...(args as NiceCxoneFullApiOperationArgs<"policy-policyinstance-api-docs:getPolicyInstances:POST:/data-policies/v1/policies/policy-instances/search">)),
  };
}
