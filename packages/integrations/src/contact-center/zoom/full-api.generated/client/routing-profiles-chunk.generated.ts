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
export const ZoomContactCenterFullApiRoutingProfilesOperationKeys = [
  "GET /contact_center/agent_routing_profiles",
  "POST /contact_center/agent_routing_profiles",
  "GET /contact_center/agent_routing_profiles/{agentRoutingProfileId}",
  "DELETE /contact_center/agent_routing_profiles/{agentRoutingProfileId}",
  "PATCH /contact_center/agent_routing_profiles/{agentRoutingProfileId}",
  "GET /contact_center/consumer_routing_profiles",
  "POST /contact_center/consumer_routing_profiles",
  "GET /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}",
  "DELETE /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}",
  "PATCH /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}"
] as const;
export type ZoomContactCenterFullApiRoutingProfilesOperationKey = typeof ZoomContactCenterFullApiRoutingProfilesOperationKeys[number];
// End hardened literal operation keys.

export interface ZoomContactCenterFullApiRoutingProfilesOperationPathParamMap {
  "GET /contact_center/agent_routing_profiles": {};
  "POST /contact_center/agent_routing_profiles": {};
  "GET /contact_center/agent_routing_profiles/{agentRoutingProfileId}": { "agentRoutingProfileId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/agent_routing_profiles/{agentRoutingProfileId}": { "agentRoutingProfileId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/agent_routing_profiles/{agentRoutingProfileId}": { "agentRoutingProfileId": ZoomContactCenterFullApiPathParamValue };
  "GET /contact_center/consumer_routing_profiles": {};
  "POST /contact_center/consumer_routing_profiles": {};
  "GET /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": { "consumerRoutingProfileId": ZoomContactCenterFullApiPathParamValue };
  "DELETE /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": { "consumerRoutingProfileId": ZoomContactCenterFullApiPathParamValue };
  "PATCH /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": { "consumerRoutingProfileId": ZoomContactCenterFullApiPathParamValue };
}

export interface ZoomContactCenterFullApiRoutingProfilesOperationRequestMap {
  "GET /contact_center/agent_routing_profiles": ZoomContactCenterFullApiOperationInput<"GET /contact_center/agent_routing_profiles">;
  "POST /contact_center/agent_routing_profiles": ZoomContactCenterFullApiOperationInput<"POST /contact_center/agent_routing_profiles">;
  "GET /contact_center/agent_routing_profiles/{agentRoutingProfileId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/agent_routing_profiles/{agentRoutingProfileId}">;
  "DELETE /contact_center/agent_routing_profiles/{agentRoutingProfileId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/agent_routing_profiles/{agentRoutingProfileId}">;
  "PATCH /contact_center/agent_routing_profiles/{agentRoutingProfileId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/agent_routing_profiles/{agentRoutingProfileId}">;
  "GET /contact_center/consumer_routing_profiles": ZoomContactCenterFullApiOperationInput<"GET /contact_center/consumer_routing_profiles">;
  "POST /contact_center/consumer_routing_profiles": ZoomContactCenterFullApiOperationInput<"POST /contact_center/consumer_routing_profiles">;
  "GET /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": ZoomContactCenterFullApiOperationInput<"GET /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}">;
  "DELETE /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": ZoomContactCenterFullApiOperationInput<"DELETE /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}">;
  "PATCH /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}": ZoomContactCenterFullApiOperationInput<"PATCH /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}">;
}

export interface ZoomContactCenterFullApiRoutingProfilesGeneratedClient {
  Listagentroutingprofiles(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/agent_routing_profiles">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/agent_routing_profiles"]>;
  Createanagentroutingprofile(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/agent_routing_profiles">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/agent_routing_profiles"]>;
  GetAgentRoutingProfile(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/agent_routing_profiles/{agentRoutingProfileId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/agent_routing_profiles/{agentRoutingProfileId}"]>;
  Deleteanagentroutingprofile(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/agent_routing_profiles/{agentRoutingProfileId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/agent_routing_profiles/{agentRoutingProfileId}"]>;
  UpdateanagentroutingprofileSdetails(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/agent_routing_profiles/{agentRoutingProfileId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/agent_routing_profiles/{agentRoutingProfileId}"]>;
  Listconsumerroutingprofiles(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/consumer_routing_profiles">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/consumer_routing_profiles"]>;
  Createaconsumerroutingprofile(...args: ZoomContactCenterFullApiOperationArgs<"POST /contact_center/consumer_routing_profiles">): Promise<ZoomContactCenterFullApiOperationResponseMap["POST /contact_center/consumer_routing_profiles"]>;
  Getaconsumerroutingprofile(...args: ZoomContactCenterFullApiOperationArgs<"GET /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["GET /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}"]>;
  Deleteaconsumerroutingprofile(...args: ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["DELETE /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}"]>;
  UpdateaconsumerroutingprofileSdetails(...args: ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}">): Promise<ZoomContactCenterFullApiOperationResponseMap["PATCH /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}"]>;
}

export const ZoomContactCenterFullApiRoutingProfilesGeneratedFunctionNames = [
  "Listagentroutingprofiles",
  "Createanagentroutingprofile",
  "GetAgentRoutingProfile",
  "Deleteanagentroutingprofile",
  "UpdateanagentroutingprofileSdetails",
  "Listconsumerroutingprofiles",
  "Createaconsumerroutingprofile",
  "Getaconsumerroutingprofile",
  "Deleteaconsumerroutingprofile",
  "UpdateaconsumerroutingprofileSdetails"
] as const satisfies readonly (keyof ZoomContactCenterFullApiRoutingProfilesGeneratedClient)[];

export function createZoomContactCenterFullApiRoutingProfilesGeneratedClient(
  callOperation: ZoomContactCenterGeneratedOperationCaller,
): ZoomContactCenterFullApiRoutingProfilesGeneratedClient {
  return {
    Listagentroutingprofiles: (...args) => callOperation("GET /contact_center/agent_routing_profiles", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/agent_routing_profiles">)),
    Createanagentroutingprofile: (...args) => callOperation("POST /contact_center/agent_routing_profiles", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/agent_routing_profiles">)),
    GetAgentRoutingProfile: (...args) => callOperation("GET /contact_center/agent_routing_profiles/{agentRoutingProfileId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/agent_routing_profiles/{agentRoutingProfileId}">)),
    Deleteanagentroutingprofile: (...args) => callOperation("DELETE /contact_center/agent_routing_profiles/{agentRoutingProfileId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/agent_routing_profiles/{agentRoutingProfileId}">)),
    UpdateanagentroutingprofileSdetails: (...args) => callOperation("PATCH /contact_center/agent_routing_profiles/{agentRoutingProfileId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/agent_routing_profiles/{agentRoutingProfileId}">)),
    Listconsumerroutingprofiles: (...args) => callOperation("GET /contact_center/consumer_routing_profiles", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/consumer_routing_profiles">)),
    Createaconsumerroutingprofile: (...args) => callOperation("POST /contact_center/consumer_routing_profiles", ...(args as ZoomContactCenterFullApiOperationArgs<"POST /contact_center/consumer_routing_profiles">)),
    Getaconsumerroutingprofile: (...args) => callOperation("GET /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}", ...(args as ZoomContactCenterFullApiOperationArgs<"GET /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}">)),
    Deleteaconsumerroutingprofile: (...args) => callOperation("DELETE /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}", ...(args as ZoomContactCenterFullApiOperationArgs<"DELETE /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}">)),
    UpdateaconsumerroutingprofileSdetails: (...args) => callOperation("PATCH /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}", ...(args as ZoomContactCenterFullApiOperationArgs<"PATCH /contact_center/consumer_routing_profiles/{consumerRoutingProfileId}">)),
  };
}
