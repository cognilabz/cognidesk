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
export const AmazonConnectFullApiTemplatesOperationKeys = [
  "customer-profiles:GetProfileObjectTypeTemplate",
  "customer-profiles:ListProfileObjectTypeTemplates"
] as const;
export type AmazonConnectFullApiTemplatesOperationKey = typeof AmazonConnectFullApiTemplatesOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiTemplatesOperationPathParamMap {
  "customer-profiles:GetProfileObjectTypeTemplate": { "TemplateId": AmazonConnectFullApiPathParamValue };
  "customer-profiles:ListProfileObjectTypeTemplates": {};
}

export interface AmazonConnectFullApiTemplatesOperationRequestMap {
  "customer-profiles:GetProfileObjectTypeTemplate": AmazonConnectFullApiOperationInput<"customer-profiles:GetProfileObjectTypeTemplate">;
  "customer-profiles:ListProfileObjectTypeTemplates": AmazonConnectFullApiOperationInput<"customer-profiles:ListProfileObjectTypeTemplates">;
}

export interface AmazonConnectFullApiTemplatesGeneratedClient {
  GetProfileObjectTypeTemplate(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:GetProfileObjectTypeTemplate">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:GetProfileObjectTypeTemplate"]>;
  ListProfileObjectTypeTemplates(...args: AmazonConnectFullApiOperationArgs<"customer-profiles:ListProfileObjectTypeTemplates">): Promise<AmazonConnectFullApiOperationResponseMap["customer-profiles:ListProfileObjectTypeTemplates"]>;
}

export const AmazonConnectFullApiTemplatesGeneratedFunctionNames = [
  "GetProfileObjectTypeTemplate",
  "ListProfileObjectTypeTemplates"
] as const satisfies readonly (keyof AmazonConnectFullApiTemplatesGeneratedClient)[];

export function createAmazonConnectFullApiTemplatesGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiTemplatesGeneratedClient {
  return {
    GetProfileObjectTypeTemplate: (...args) => callOperation("customer-profiles:GetProfileObjectTypeTemplate", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:GetProfileObjectTypeTemplate">)),
    ListProfileObjectTypeTemplates: (...args) => callOperation("customer-profiles:ListProfileObjectTypeTemplates", ...(args as AmazonConnectFullApiOperationArgs<"customer-profiles:ListProfileObjectTypeTemplates">)),
  };
}
