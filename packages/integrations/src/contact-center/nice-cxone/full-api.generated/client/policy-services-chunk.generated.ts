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
export const NiceCxoneFullApiPolicyServicesOperationKeys = [
  "policy-policyinstance-api-docs:createPolicyDefinition:POST:/data-policies/v1/policies",
  "policy-policyinstance-api-docs:getPolicies:POST:/data-policies/v1/policies/search",
  "policy-policyinstance-api-docs:getPolicyDefinition:GET:/data-policies/v1/policies/{policyId}"
] as const;
export type NiceCxoneFullApiPolicyServicesOperationKey = typeof NiceCxoneFullApiPolicyServicesOperationKeys[number];
// End hardened literal operation keys.

export interface NiceCxoneFullApiPolicyServicesOperationPathParamMap {
  "policy-policyinstance-api-docs:createPolicyDefinition:POST:/data-policies/v1/policies": {};
  "policy-policyinstance-api-docs:getPolicies:POST:/data-policies/v1/policies/search": {};
  "policy-policyinstance-api-docs:getPolicyDefinition:GET:/data-policies/v1/policies/{policyId}": { "policyId": NiceCxoneFullApiPathParamValue };
}

export interface NiceCxoneFullApiPolicyServicesOperationRequestMap {
  "policy-policyinstance-api-docs:createPolicyDefinition:POST:/data-policies/v1/policies": NiceCxoneFullApiOperationInput<"policy-policyinstance-api-docs:createPolicyDefinition:POST:/data-policies/v1/policies">;
  "policy-policyinstance-api-docs:getPolicies:POST:/data-policies/v1/policies/search": NiceCxoneFullApiOperationInput<"policy-policyinstance-api-docs:getPolicies:POST:/data-policies/v1/policies/search">;
  "policy-policyinstance-api-docs:getPolicyDefinition:GET:/data-policies/v1/policies/{policyId}": NiceCxoneFullApiOperationInput<"policy-policyinstance-api-docs:getPolicyDefinition:GET:/data-policies/v1/policies/{policyId}">;
}

export interface NiceCxoneFullApiPolicyServicesGeneratedClient {
  PolicyPolicyinstanceApiDocsCreatePolicyDefinition(...args: NiceCxoneFullApiOperationArgs<"policy-policyinstance-api-docs:createPolicyDefinition:POST:/data-policies/v1/policies">): Promise<NiceCxoneFullApiOperationResponseMap["policy-policyinstance-api-docs:createPolicyDefinition:POST:/data-policies/v1/policies"]>;
  PolicyPolicyinstanceApiDocsGetPolicies(...args: NiceCxoneFullApiOperationArgs<"policy-policyinstance-api-docs:getPolicies:POST:/data-policies/v1/policies/search">): Promise<NiceCxoneFullApiOperationResponseMap["policy-policyinstance-api-docs:getPolicies:POST:/data-policies/v1/policies/search"]>;
  PolicyPolicyinstanceApiDocsGetPolicyDefinition(...args: NiceCxoneFullApiOperationArgs<"policy-policyinstance-api-docs:getPolicyDefinition:GET:/data-policies/v1/policies/{policyId}">): Promise<NiceCxoneFullApiOperationResponseMap["policy-policyinstance-api-docs:getPolicyDefinition:GET:/data-policies/v1/policies/{policyId}"]>;
}

export const NiceCxoneFullApiPolicyServicesGeneratedFunctionNames = [
  "PolicyPolicyinstanceApiDocsCreatePolicyDefinition",
  "PolicyPolicyinstanceApiDocsGetPolicies",
  "PolicyPolicyinstanceApiDocsGetPolicyDefinition"
] as const satisfies readonly (keyof NiceCxoneFullApiPolicyServicesGeneratedClient)[];

export function createNiceCxoneFullApiPolicyServicesGeneratedClient(
  callOperation: NiceCxoneGeneratedOperationCaller,
): NiceCxoneFullApiPolicyServicesGeneratedClient {
  return {
    PolicyPolicyinstanceApiDocsCreatePolicyDefinition: (...args) => callOperation("policy-policyinstance-api-docs:createPolicyDefinition:POST:/data-policies/v1/policies", ...(args as NiceCxoneFullApiOperationArgs<"policy-policyinstance-api-docs:createPolicyDefinition:POST:/data-policies/v1/policies">)),
    PolicyPolicyinstanceApiDocsGetPolicies: (...args) => callOperation("policy-policyinstance-api-docs:getPolicies:POST:/data-policies/v1/policies/search", ...(args as NiceCxoneFullApiOperationArgs<"policy-policyinstance-api-docs:getPolicies:POST:/data-policies/v1/policies/search">)),
    PolicyPolicyinstanceApiDocsGetPolicyDefinition: (...args) => callOperation("policy-policyinstance-api-docs:getPolicyDefinition:GET:/data-policies/v1/policies/{policyId}", ...(args as NiceCxoneFullApiOperationArgs<"policy-policyinstance-api-docs:getPolicyDefinition:GET:/data-policies/v1/policies/{policyId}">)),
  };
}
