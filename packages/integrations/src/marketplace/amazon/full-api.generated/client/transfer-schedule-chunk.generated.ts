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
export const AmazonFullApiTransferScheduleOperationKeys = [
  "sellerWallet_2024-03-01:listTransferSchedules",
  "sellerWallet_2024-03-01:createTransferSchedule",
  "sellerWallet_2024-03-01:updateTransferSchedule",
  "sellerWallet_2024-03-01:getTransferSchedule",
  "sellerWallet_2024-03-01:deleteScheduleTransaction"
] as const;
export type AmazonFullApiTransferScheduleOperationKey = typeof AmazonFullApiTransferScheduleOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiTransferScheduleOperationPathParamMap {
  "sellerWallet_2024-03-01:listTransferSchedules": {};
  "sellerWallet_2024-03-01:createTransferSchedule": {};
  "sellerWallet_2024-03-01:updateTransferSchedule": {};
  "sellerWallet_2024-03-01:getTransferSchedule": { "transferScheduleId": AmazonFullApiPathParamValue };
  "sellerWallet_2024-03-01:deleteScheduleTransaction": { "transferScheduleId": AmazonFullApiPathParamValue };
}

export interface AmazonFullApiTransferScheduleOperationRequestMap {
  "sellerWallet_2024-03-01:listTransferSchedules": AmazonFullApiOperationInput<"sellerWallet_2024-03-01:listTransferSchedules">;
  "sellerWallet_2024-03-01:createTransferSchedule": AmazonFullApiOperationInput<"sellerWallet_2024-03-01:createTransferSchedule">;
  "sellerWallet_2024-03-01:updateTransferSchedule": AmazonFullApiOperationInput<"sellerWallet_2024-03-01:updateTransferSchedule">;
  "sellerWallet_2024-03-01:getTransferSchedule": AmazonFullApiOperationInput<"sellerWallet_2024-03-01:getTransferSchedule">;
  "sellerWallet_2024-03-01:deleteScheduleTransaction": AmazonFullApiOperationInput<"sellerWallet_2024-03-01:deleteScheduleTransaction">;
}

export interface AmazonFullApiTransferScheduleGeneratedClient {
  ListTransferSchedules(...args: AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:listTransferSchedules">): Promise<AmazonFullApiOperationResponseMap["sellerWallet_2024-03-01:listTransferSchedules"]>;
  CreateTransferSchedule(...args: AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:createTransferSchedule">): Promise<AmazonFullApiOperationResponseMap["sellerWallet_2024-03-01:createTransferSchedule"]>;
  UpdateTransferSchedule(...args: AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:updateTransferSchedule">): Promise<AmazonFullApiOperationResponseMap["sellerWallet_2024-03-01:updateTransferSchedule"]>;
  GetTransferSchedule(...args: AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:getTransferSchedule">): Promise<AmazonFullApiOperationResponseMap["sellerWallet_2024-03-01:getTransferSchedule"]>;
  DeleteScheduleTransaction(...args: AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:deleteScheduleTransaction">): Promise<AmazonFullApiOperationResponseMap["sellerWallet_2024-03-01:deleteScheduleTransaction"]>;
}

export const AmazonFullApiTransferScheduleGeneratedFunctionNames = [
  "ListTransferSchedules",
  "CreateTransferSchedule",
  "UpdateTransferSchedule",
  "GetTransferSchedule",
  "DeleteScheduleTransaction"
] as const satisfies readonly (keyof AmazonFullApiTransferScheduleGeneratedClient)[];

export function createAmazonFullApiTransferScheduleGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiTransferScheduleGeneratedClient {
  return {
    ListTransferSchedules: (...args) => callOperation("sellerWallet_2024-03-01:listTransferSchedules", ...(args as AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:listTransferSchedules">)),
    CreateTransferSchedule: (...args) => callOperation("sellerWallet_2024-03-01:createTransferSchedule", ...(args as AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:createTransferSchedule">)),
    UpdateTransferSchedule: (...args) => callOperation("sellerWallet_2024-03-01:updateTransferSchedule", ...(args as AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:updateTransferSchedule">)),
    GetTransferSchedule: (...args) => callOperation("sellerWallet_2024-03-01:getTransferSchedule", ...(args as AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:getTransferSchedule">)),
    DeleteScheduleTransaction: (...args) => callOperation("sellerWallet_2024-03-01:deleteScheduleTransaction", ...(args as AmazonFullApiOperationArgs<"sellerWallet_2024-03-01:deleteScheduleTransaction">)),
  };
}
