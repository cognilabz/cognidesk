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
export const AmazonFullApiEasyShipOperationKeys = [
  "easyShip_2022-03-23:listHandoverSlots",
  "easyShip_2022-03-23:getScheduledPackage",
  "easyShip_2022-03-23:createScheduledPackage",
  "easyShip_2022-03-23:updateScheduledPackages",
  "easyShip_2022-03-23:createScheduledPackageBulk"
] as const;
export type AmazonFullApiEasyShipOperationKey = typeof AmazonFullApiEasyShipOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonFullApiEasyShipOperationPathParamMap {
  "easyShip_2022-03-23:listHandoverSlots": {};
  "easyShip_2022-03-23:getScheduledPackage": {};
  "easyShip_2022-03-23:createScheduledPackage": {};
  "easyShip_2022-03-23:updateScheduledPackages": {};
  "easyShip_2022-03-23:createScheduledPackageBulk": {};
}

export interface AmazonFullApiEasyShipOperationRequestMap {
  "easyShip_2022-03-23:listHandoverSlots": AmazonFullApiOperationInput<"easyShip_2022-03-23:listHandoverSlots">;
  "easyShip_2022-03-23:getScheduledPackage": AmazonFullApiOperationInput<"easyShip_2022-03-23:getScheduledPackage">;
  "easyShip_2022-03-23:createScheduledPackage": AmazonFullApiOperationInput<"easyShip_2022-03-23:createScheduledPackage">;
  "easyShip_2022-03-23:updateScheduledPackages": AmazonFullApiOperationInput<"easyShip_2022-03-23:updateScheduledPackages">;
  "easyShip_2022-03-23:createScheduledPackageBulk": AmazonFullApiOperationInput<"easyShip_2022-03-23:createScheduledPackageBulk">;
}

export interface AmazonFullApiEasyShipGeneratedClient {
  ListHandoverSlots(...args: AmazonFullApiOperationArgs<"easyShip_2022-03-23:listHandoverSlots">): Promise<AmazonFullApiOperationResponseMap["easyShip_2022-03-23:listHandoverSlots"]>;
  GetScheduledPackage(...args: AmazonFullApiOperationArgs<"easyShip_2022-03-23:getScheduledPackage">): Promise<AmazonFullApiOperationResponseMap["easyShip_2022-03-23:getScheduledPackage"]>;
  CreateScheduledPackage(...args: AmazonFullApiOperationArgs<"easyShip_2022-03-23:createScheduledPackage">): Promise<AmazonFullApiOperationResponseMap["easyShip_2022-03-23:createScheduledPackage"]>;
  UpdateScheduledPackages(...args: AmazonFullApiOperationArgs<"easyShip_2022-03-23:updateScheduledPackages">): Promise<AmazonFullApiOperationResponseMap["easyShip_2022-03-23:updateScheduledPackages"]>;
  CreateScheduledPackageBulk(...args: AmazonFullApiOperationArgs<"easyShip_2022-03-23:createScheduledPackageBulk">): Promise<AmazonFullApiOperationResponseMap["easyShip_2022-03-23:createScheduledPackageBulk"]>;
}

export const AmazonFullApiEasyShipGeneratedFunctionNames = [
  "ListHandoverSlots",
  "GetScheduledPackage",
  "CreateScheduledPackage",
  "UpdateScheduledPackages",
  "CreateScheduledPackageBulk"
] as const satisfies readonly (keyof AmazonFullApiEasyShipGeneratedClient)[];

export function createAmazonFullApiEasyShipGeneratedClient(
  callOperation: AmazonGeneratedOperationCaller,
): AmazonFullApiEasyShipGeneratedClient {
  return {
    ListHandoverSlots: (...args) => callOperation("easyShip_2022-03-23:listHandoverSlots", ...(args as AmazonFullApiOperationArgs<"easyShip_2022-03-23:listHandoverSlots">)),
    GetScheduledPackage: (...args) => callOperation("easyShip_2022-03-23:getScheduledPackage", ...(args as AmazonFullApiOperationArgs<"easyShip_2022-03-23:getScheduledPackage">)),
    CreateScheduledPackage: (...args) => callOperation("easyShip_2022-03-23:createScheduledPackage", ...(args as AmazonFullApiOperationArgs<"easyShip_2022-03-23:createScheduledPackage">)),
    UpdateScheduledPackages: (...args) => callOperation("easyShip_2022-03-23:updateScheduledPackages", ...(args as AmazonFullApiOperationArgs<"easyShip_2022-03-23:updateScheduledPackages">)),
    CreateScheduledPackageBulk: (...args) => callOperation("easyShip_2022-03-23:createScheduledPackageBulk", ...(args as AmazonFullApiOperationArgs<"easyShip_2022-03-23:createScheduledPackageBulk">)),
  };
}
