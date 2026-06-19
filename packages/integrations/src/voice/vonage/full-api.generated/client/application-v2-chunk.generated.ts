// Generated endpoint chunk for VonageVoiceFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  VonageGeneratedOperationCaller,
  VonageVoiceFullApiOperationArgs,
  VonageVoiceFullApiOperationInput,
  VonageVoiceFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { VonageVoiceFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const VonageVoiceFullApiApplicationV2OperationKeys = [
  "application_v2:listApplication",
  "application_v2:createApplication",
  "application_v2:getApplication",
  "application_v2:updateApplication",
  "application_v2:deleteApplication",
  "application_v2:getUsers",
  "application_v2:createUser",
  "application_v2:getUser",
  "application_v2:updateUser",
  "application_v2:deleteUser"
] as const;
export type VonageVoiceFullApiApplicationV2OperationKey = typeof VonageVoiceFullApiApplicationV2OperationKeys[number];
// End hardened literal operation keys.

export interface VonageVoiceFullApiApplicationV2OperationPathParamMap {
  "application_v2:listApplication": {};
  "application_v2:createApplication": {};
  "application_v2:getApplication": { "id": VonageVoiceFullApiPathParamValue };
  "application_v2:updateApplication": { "id": VonageVoiceFullApiPathParamValue };
  "application_v2:deleteApplication": { "id": VonageVoiceFullApiPathParamValue };
  "application_v2:getUsers": {};
  "application_v2:createUser": {};
  "application_v2:getUser": { "id": VonageVoiceFullApiPathParamValue };
  "application_v2:updateUser": { "id": VonageVoiceFullApiPathParamValue };
  "application_v2:deleteUser": { "id": VonageVoiceFullApiPathParamValue };
}

export interface VonageVoiceFullApiApplicationV2OperationRequestMap {
  "application_v2:listApplication": VonageVoiceFullApiOperationInput<"application_v2:listApplication">;
  "application_v2:createApplication": VonageVoiceFullApiOperationInput<"application_v2:createApplication">;
  "application_v2:getApplication": VonageVoiceFullApiOperationInput<"application_v2:getApplication">;
  "application_v2:updateApplication": VonageVoiceFullApiOperationInput<"application_v2:updateApplication">;
  "application_v2:deleteApplication": VonageVoiceFullApiOperationInput<"application_v2:deleteApplication">;
  "application_v2:getUsers": VonageVoiceFullApiOperationInput<"application_v2:getUsers">;
  "application_v2:createUser": VonageVoiceFullApiOperationInput<"application_v2:createUser">;
  "application_v2:getUser": VonageVoiceFullApiOperationInput<"application_v2:getUser">;
  "application_v2:updateUser": VonageVoiceFullApiOperationInput<"application_v2:updateUser">;
  "application_v2:deleteUser": VonageVoiceFullApiOperationInput<"application_v2:deleteUser">;
}

export interface VonageVoiceFullApiApplicationV2GeneratedClient {
  ApplicationV2ListApplication(...args: VonageVoiceFullApiOperationArgs<"application_v2:listApplication">): Promise<VonageVoiceFullApiOperationResponseMap["application_v2:listApplication"]>;
  ApplicationV2CreateApplication(...args: VonageVoiceFullApiOperationArgs<"application_v2:createApplication">): Promise<VonageVoiceFullApiOperationResponseMap["application_v2:createApplication"]>;
  ApplicationV2GetApplication(...args: VonageVoiceFullApiOperationArgs<"application_v2:getApplication">): Promise<VonageVoiceFullApiOperationResponseMap["application_v2:getApplication"]>;
  ApplicationV2UpdateApplication(...args: VonageVoiceFullApiOperationArgs<"application_v2:updateApplication">): Promise<VonageVoiceFullApiOperationResponseMap["application_v2:updateApplication"]>;
  ApplicationV2DeleteApplication(...args: VonageVoiceFullApiOperationArgs<"application_v2:deleteApplication">): Promise<VonageVoiceFullApiOperationResponseMap["application_v2:deleteApplication"]>;
  ApplicationV2GetUsers(...args: VonageVoiceFullApiOperationArgs<"application_v2:getUsers">): Promise<VonageVoiceFullApiOperationResponseMap["application_v2:getUsers"]>;
  ApplicationV2CreateUser(...args: VonageVoiceFullApiOperationArgs<"application_v2:createUser">): Promise<VonageVoiceFullApiOperationResponseMap["application_v2:createUser"]>;
  ApplicationV2GetUser(...args: VonageVoiceFullApiOperationArgs<"application_v2:getUser">): Promise<VonageVoiceFullApiOperationResponseMap["application_v2:getUser"]>;
  ApplicationV2UpdateUser(...args: VonageVoiceFullApiOperationArgs<"application_v2:updateUser">): Promise<VonageVoiceFullApiOperationResponseMap["application_v2:updateUser"]>;
  ApplicationV2DeleteUser(...args: VonageVoiceFullApiOperationArgs<"application_v2:deleteUser">): Promise<VonageVoiceFullApiOperationResponseMap["application_v2:deleteUser"]>;
}

export const VonageVoiceFullApiApplicationV2GeneratedFunctionNames = [
  "ApplicationV2ListApplication",
  "ApplicationV2CreateApplication",
  "ApplicationV2GetApplication",
  "ApplicationV2UpdateApplication",
  "ApplicationV2DeleteApplication",
  "ApplicationV2GetUsers",
  "ApplicationV2CreateUser",
  "ApplicationV2GetUser",
  "ApplicationV2UpdateUser",
  "ApplicationV2DeleteUser"
] as const satisfies readonly (keyof VonageVoiceFullApiApplicationV2GeneratedClient)[];

export function createVonageVoiceFullApiApplicationV2GeneratedClient(
  callOperation: VonageGeneratedOperationCaller,
): VonageVoiceFullApiApplicationV2GeneratedClient {
  return {
    ApplicationV2ListApplication: (...args) => callOperation("application_v2:listApplication", ...(args as VonageVoiceFullApiOperationArgs<"application_v2:listApplication">)),
    ApplicationV2CreateApplication: (...args) => callOperation("application_v2:createApplication", ...(args as VonageVoiceFullApiOperationArgs<"application_v2:createApplication">)),
    ApplicationV2GetApplication: (...args) => callOperation("application_v2:getApplication", ...(args as VonageVoiceFullApiOperationArgs<"application_v2:getApplication">)),
    ApplicationV2UpdateApplication: (...args) => callOperation("application_v2:updateApplication", ...(args as VonageVoiceFullApiOperationArgs<"application_v2:updateApplication">)),
    ApplicationV2DeleteApplication: (...args) => callOperation("application_v2:deleteApplication", ...(args as VonageVoiceFullApiOperationArgs<"application_v2:deleteApplication">)),
    ApplicationV2GetUsers: (...args) => callOperation("application_v2:getUsers", ...(args as VonageVoiceFullApiOperationArgs<"application_v2:getUsers">)),
    ApplicationV2CreateUser: (...args) => callOperation("application_v2:createUser", ...(args as VonageVoiceFullApiOperationArgs<"application_v2:createUser">)),
    ApplicationV2GetUser: (...args) => callOperation("application_v2:getUser", ...(args as VonageVoiceFullApiOperationArgs<"application_v2:getUser">)),
    ApplicationV2UpdateUser: (...args) => callOperation("application_v2:updateUser", ...(args as VonageVoiceFullApiOperationArgs<"application_v2:updateUser">)),
    ApplicationV2DeleteUser: (...args) => callOperation("application_v2:deleteUser", ...(args as VonageVoiceFullApiOperationArgs<"application_v2:deleteUser">)),
  };
}
