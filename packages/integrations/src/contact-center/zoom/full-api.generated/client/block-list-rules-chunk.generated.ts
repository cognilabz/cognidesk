// Generated endpoint chunk for ZoomContactCenterFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ZoomContactCenterGeneratedOperationCaller,
  ZoomContactCenterFullApiOperationArgs,
  ZoomContactCenterFullApiOperationInput,
  ZoomContactCenterFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ZoomContactCenterFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ZoomContactCenterFullApiBlockListRulesOperationKeys = [
  "GET /contact_center/block_list_rules/ip_addresses",
  "POST /contact_center/block_list_rules/ip_addresses",
  "DELETE /contact_center/block_list_rules/ip_addresses",
  "GET /contact_center/block_list_rules/ip_addresses/{ipAddressBlockListRuleId}",
  "GET /contact_center/block_list_rules/phone_numbers",
  "POST /contact_center/block_list_rules/phone_numbers",
  "DELETE /contact_center/block_list_rules/phone_numbers",
  "GET /contact_center/block_list_rules/phone_numbers/{phoneBlockListRuleId}"
] as const;
export type ZoomContactCenterFullApiBlockListRulesOperationKey = typeof ZoomContactCenterFullApiBlockListRulesOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiBlockListRulesOperationPathParamMap {
  "GET /contact_center/block_list_rules/ip_addresses": {};
  "POST /contact_center/block_list_rules/ip_addresses": {};
  "DELETE /contact_center/block_list_rules/ip_addresses": {};
  "GET /contact_center/block_list_rules/ip_addresses/{ipAddressBlockListRuleId}": { "ipAddressBlockListRuleId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/block_list_rules/phone_numbers": {};
  "POST /contact_center/block_list_rules/phone_numbers": {};
  "DELETE /contact_center/block_list_rules/phone_numbers": {};
  "GET /contact_center/block_list_rules/phone_numbers/{phoneBlockListRuleId}": { "phoneBlockListRuleId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiBlockListRulesOperationRequestMap {
  "GET /contact_center/block_list_rules/ip_addresses": ZoomContactCenterFullApiOperationInput<"GET /contact_center/block_list_rules/ip_addresses">;
  "POST /contact_center/block_list_rules/ip_addresses": ZoomContactCenterFullApiOperationInput<"POST /contact_center/block_list_rules/ip_addresses">;
  "DELETE /contact_center/block_list_rules/ip_addresses": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/block_list_rules/ip_addresses">;
  "GET /contact_center/block_list_rules/ip_addresses/{ipAddressBlockListRuleId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/block_list_rules/ip_addresses/{ipAddressBlockListRuleId}">;
  "GET /contact_center/block_list_rules/phone_numbers": ZoomContactCenterFullApiOperationInput<"GET /contact_center/block_list_rules/phone_numbers">;
  "POST /contact_center/block_list_rules/phone_numbers": ZoomContactCenterFullApiOperationInput<"POST /contact_center/block_list_rules/phone_numbers">;
  "DELETE /contact_center/block_list_rules/phone_numbers": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/block_list_rules/phone_numbers">;
  "GET /contact_center/block_list_rules/phone_numbers/{phoneBlockListRuleId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/block_list_rules/phone_numbers/{phoneBlockListRuleId}">;
}

export interface ZoomContactCenterFullApiBlockListRulesGeneratedClient {
  ListBlockListRulesIpAddresses(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/block_list_rules/ip_addresses">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/block_list_rules/ip_addresses"]>;
  CreateBlockListRulesIpAddresses(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/block_list_rules/ip_addresses">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/block_list_rules/ip_addresses"]>;
  DeleteBlockListRuleIpAddresses(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/block_list_rules/ip_addresses">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/block_list_rules/ip_addresses"]>;
  GetBlockListRuleIpAddress(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/block_list_rules/ip_addresses/{ipAddressBlockListRuleId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/block_list_rules/ip_addresses/{ipAddressBlockListRuleId}"]>;
  ListBlockListRulesPhoneNumbers(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/block_list_rules/phone_numbers">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/block_list_rules/phone_numbers"]>;
  CreateBlockListRulesPhoneNumbers(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/block_list_rules/phone_numbers">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/block_list_rules/phone_numbers"]>;
  DeleteBlockListRulePhoneNumbers(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/block_list_rules/phone_numbers">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/block_list_rules/phone_numbers"]>;
  GetBlockListRulePhoneNumber(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/block_list_rules/phone_numbers/{phoneBlockListRuleId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/block_list_rules/phone_numbers/{phoneBlockListRuleId}"]>;
}

export const ZoomContactCenterFullApiBlockListRulesGeneratedFunctionNames = [
  "ListBlockListRulesIpAddresses",
  "CreateBlockListRulesIpAddresses",
  "DeleteBlockListRuleIpAddresses",
  "GetBlockListRuleIpAddress",
  "ListBlockListRulesPhoneNumbers",
  "CreateBlockListRulesPhoneNumbers",
  "DeleteBlockListRulePhoneNumbers",
  "GetBlockListRulePhoneNumber"
] as const satisfies readonly (keyof ZoomContactCenterFullApiBlockListRulesGeneratedClient)[];

export function createZoomContactCenterFullApiBlockListRulesGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiBlockListRulesGeneratedClient {
  return {
    ListBlockListRulesIpAddresses: (...args) => callOperation("GET /contact_center/block_list_rules/ip_addresses", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/block_list_rules/ip_addresses">)),
    CreateBlockListRulesIpAddresses: (...args) => callOperation("POST /contact_center/block_list_rules/ip_addresses", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/block_list_rules/ip_addresses">)),
    DeleteBlockListRuleIpAddresses: (...args) => callOperation("DELETE /contact_center/block_list_rules/ip_addresses", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/block_list_rules/ip_addresses">)),
    GetBlockListRuleIpAddress: (...args) => callOperation("GET /contact_center/block_list_rules/ip_addresses/{ipAddressBlockListRuleId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/block_list_rules/ip_addresses/{ipAddressBlockListRuleId}">)),
    ListBlockListRulesPhoneNumbers: (...args) => callOperation("GET /contact_center/block_list_rules/phone_numbers", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/block_list_rules/phone_numbers">)),
    CreateBlockListRulesPhoneNumbers: (...args) => callOperation("POST /contact_center/block_list_rules/phone_numbers", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/block_list_rules/phone_numbers">)),
    DeleteBlockListRulePhoneNumbers: (...args) => callOperation("DELETE /contact_center/block_list_rules/phone_numbers", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/block_list_rules/phone_numbers">)),
    GetBlockListRulePhoneNumber: (...args) => callOperation("GET /contact_center/block_list_rules/phone_numbers/{phoneBlockListRuleId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/block_list_rules/phone_numbers/{phoneBlockListRuleId}">)),
  };
}
