// Generated endpoint chunk for TeamsGraph.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  TeamsGraphGeneratedOperationCaller,
  TeamsGraphOperationArgs,
  TeamsGraphOperationInput,
  TeamsGraphPathParamValue,
} from "../../graph-api-client.generated.js";
import type { TeamsGraphOperationResponseMap } from "../../graph-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const TeamsGraphCommunicationsCallRecordOperationKeys = [
  "communications.ListCallRecords",
  "communications.CreateCallRecords",
  "communications.GetCallRecords",
  "communications.UpdateCallRecords",
  "communications.DeleteCallRecords",
  "communications.callRecords.GetOrganizer_v2",
  "communications.callRecords.UpdateOrganizer_v2",
  "communications.callRecords.DeleteOrganizer_v2",
  "communications.callRecords.ListParticipants_v2",
  "communications.callRecords.CreateParticipants_v2",
  "communications.callRecords.GetParticipants_v2",
  "communications.callRecords.UpdateParticipants_v2",
  "communications.callRecords.DeleteParticipants_v2",
  "communications.callRecords.participants_v2.GetCount-ecf7",
  "communications.callRecords.ListSessions",
  "communications.callRecords.CreateSessions",
  "communications.callRecords.GetSessions",
  "communications.callRecords.UpdateSessions",
  "communications.callRecords.DeleteSessions",
  "communications.callRecords.sessions.ListSegments",
  "communications.callRecords.sessions.CreateSegments",
  "communications.callRecords.sessions.GetSegments",
  "communications.callRecords.sessions.UpdateSegments",
  "communications.callRecords.sessions.DeleteSegments",
  "communications.callRecords.sessions.segments.GetCount-4fed",
  "communications.callRecords.sessions.GetCount-c743",
  "communications.callRecords.GetCount-e558",
  "communications.callRecords.getDirectRoutingCalls",
  "communications.callRecords.getPstnCalls"
] as const;
export type TeamsGraphCommunicationsCallRecordOperationKey = typeof TeamsGraphCommunicationsCallRecordOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphCommunicationsCallRecordOperationPathParamMap {
  "communications.ListCallRecords": {};
  "communications.CreateCallRecords": {};
  "communications.GetCallRecords": { "callRecord-id": TeamsGraphPathParamValue };
  "communications.UpdateCallRecords": { "callRecord-id": TeamsGraphPathParamValue };
  "communications.DeleteCallRecords": { "callRecord-id": TeamsGraphPathParamValue };
  "communications.callRecords.GetOrganizer_v2": { "callRecord-id": TeamsGraphPathParamValue };
  "communications.callRecords.UpdateOrganizer_v2": { "callRecord-id": TeamsGraphPathParamValue };
  "communications.callRecords.DeleteOrganizer_v2": { "callRecord-id": TeamsGraphPathParamValue };
  "communications.callRecords.ListParticipants_v2": { "callRecord-id": TeamsGraphPathParamValue };
  "communications.callRecords.CreateParticipants_v2": { "callRecord-id": TeamsGraphPathParamValue };
  "communications.callRecords.GetParticipants_v2": { "callRecord-id": TeamsGraphPathParamValue; "participant-id": TeamsGraphPathParamValue };
  "communications.callRecords.UpdateParticipants_v2": { "callRecord-id": TeamsGraphPathParamValue; "participant-id": TeamsGraphPathParamValue };
  "communications.callRecords.DeleteParticipants_v2": { "callRecord-id": TeamsGraphPathParamValue; "participant-id": TeamsGraphPathParamValue };
  "communications.callRecords.participants_v2.GetCount-ecf7": { "callRecord-id": TeamsGraphPathParamValue };
  "communications.callRecords.ListSessions": { "callRecord-id": TeamsGraphPathParamValue };
  "communications.callRecords.CreateSessions": { "callRecord-id": TeamsGraphPathParamValue };
  "communications.callRecords.GetSessions": { "callRecord-id": TeamsGraphPathParamValue; "session-id": TeamsGraphPathParamValue };
  "communications.callRecords.UpdateSessions": { "callRecord-id": TeamsGraphPathParamValue; "session-id": TeamsGraphPathParamValue };
  "communications.callRecords.DeleteSessions": { "callRecord-id": TeamsGraphPathParamValue; "session-id": TeamsGraphPathParamValue };
  "communications.callRecords.sessions.ListSegments": { "callRecord-id": TeamsGraphPathParamValue; "session-id": TeamsGraphPathParamValue };
  "communications.callRecords.sessions.CreateSegments": { "callRecord-id": TeamsGraphPathParamValue; "session-id": TeamsGraphPathParamValue };
  "communications.callRecords.sessions.GetSegments": { "callRecord-id": TeamsGraphPathParamValue; "session-id": TeamsGraphPathParamValue; "segment-id": TeamsGraphPathParamValue };
  "communications.callRecords.sessions.UpdateSegments": { "callRecord-id": TeamsGraphPathParamValue; "session-id": TeamsGraphPathParamValue; "segment-id": TeamsGraphPathParamValue };
  "communications.callRecords.sessions.DeleteSegments": { "callRecord-id": TeamsGraphPathParamValue; "session-id": TeamsGraphPathParamValue; "segment-id": TeamsGraphPathParamValue };
  "communications.callRecords.sessions.segments.GetCount-4fed": { "callRecord-id": TeamsGraphPathParamValue; "session-id": TeamsGraphPathParamValue };
  "communications.callRecords.sessions.GetCount-c743": { "callRecord-id": TeamsGraphPathParamValue };
  "communications.callRecords.GetCount-e558": {};
  "communications.callRecords.getDirectRoutingCalls": { "fromDateTime": TeamsGraphPathParamValue; "toDateTime": TeamsGraphPathParamValue };
  "communications.callRecords.getPstnCalls": { "fromDateTime": TeamsGraphPathParamValue; "toDateTime": TeamsGraphPathParamValue };
}

export interface TeamsGraphCommunicationsCallRecordOperationRequestMap {
  "communications.ListCallRecords": TeamsGraphOperationInput<"communications.ListCallRecords">;
  "communications.CreateCallRecords": TeamsGraphOperationInput<"communications.CreateCallRecords">;
  "communications.GetCallRecords": TeamsGraphOperationInput<"communications.GetCallRecords">;
  "communications.UpdateCallRecords": TeamsGraphOperationInput<"communications.UpdateCallRecords">;
  "communications.DeleteCallRecords": TeamsGraphOperationInput<"communications.DeleteCallRecords">;
  "communications.callRecords.GetOrganizer_v2": TeamsGraphOperationInput<"communications.callRecords.GetOrganizer_v2">;
  "communications.callRecords.UpdateOrganizer_v2": TeamsGraphOperationInput<"communications.callRecords.UpdateOrganizer_v2">;
  "communications.callRecords.DeleteOrganizer_v2": TeamsGraphOperationInput<"communications.callRecords.DeleteOrganizer_v2">;
  "communications.callRecords.ListParticipants_v2": TeamsGraphOperationInput<"communications.callRecords.ListParticipants_v2">;
  "communications.callRecords.CreateParticipants_v2": TeamsGraphOperationInput<"communications.callRecords.CreateParticipants_v2">;
  "communications.callRecords.GetParticipants_v2": TeamsGraphOperationInput<"communications.callRecords.GetParticipants_v2">;
  "communications.callRecords.UpdateParticipants_v2": TeamsGraphOperationInput<"communications.callRecords.UpdateParticipants_v2">;
  "communications.callRecords.DeleteParticipants_v2": TeamsGraphOperationInput<"communications.callRecords.DeleteParticipants_v2">;
  "communications.callRecords.participants_v2.GetCount-ecf7": TeamsGraphOperationInput<"communications.callRecords.participants_v2.GetCount-ecf7">;
  "communications.callRecords.ListSessions": TeamsGraphOperationInput<"communications.callRecords.ListSessions">;
  "communications.callRecords.CreateSessions": TeamsGraphOperationInput<"communications.callRecords.CreateSessions">;
  "communications.callRecords.GetSessions": TeamsGraphOperationInput<"communications.callRecords.GetSessions">;
  "communications.callRecords.UpdateSessions": TeamsGraphOperationInput<"communications.callRecords.UpdateSessions">;
  "communications.callRecords.DeleteSessions": TeamsGraphOperationInput<"communications.callRecords.DeleteSessions">;
  "communications.callRecords.sessions.ListSegments": TeamsGraphOperationInput<"communications.callRecords.sessions.ListSegments">;
  "communications.callRecords.sessions.CreateSegments": TeamsGraphOperationInput<"communications.callRecords.sessions.CreateSegments">;
  "communications.callRecords.sessions.GetSegments": TeamsGraphOperationInput<"communications.callRecords.sessions.GetSegments">;
  "communications.callRecords.sessions.UpdateSegments": TeamsGraphOperationInput<"communications.callRecords.sessions.UpdateSegments">;
  "communications.callRecords.sessions.DeleteSegments": TeamsGraphOperationInput<"communications.callRecords.sessions.DeleteSegments">;
  "communications.callRecords.sessions.segments.GetCount-4fed": TeamsGraphOperationInput<"communications.callRecords.sessions.segments.GetCount-4fed">;
  "communications.callRecords.sessions.GetCount-c743": TeamsGraphOperationInput<"communications.callRecords.sessions.GetCount-c743">;
  "communications.callRecords.GetCount-e558": TeamsGraphOperationInput<"communications.callRecords.GetCount-e558">;
  "communications.callRecords.getDirectRoutingCalls": TeamsGraphOperationInput<"communications.callRecords.getDirectRoutingCalls">;
  "communications.callRecords.getPstnCalls": TeamsGraphOperationInput<"communications.callRecords.getPstnCalls">;
}

export interface TeamsGraphCommunicationsCallRecordGeneratedClient {
  CommunicationsListCallRecords(...args: TeamsGraphOperationArgs<"communications.ListCallRecords">): Promise<TeamsGraphOperationResponseMap["communications.ListCallRecords"]>;
  CommunicationsCreateCallRecords(...args: TeamsGraphOperationArgs<"communications.CreateCallRecords">): Promise<TeamsGraphOperationResponseMap["communications.CreateCallRecords"]>;
  CommunicationsGetCallRecords(...args: TeamsGraphOperationArgs<"communications.GetCallRecords">): Promise<TeamsGraphOperationResponseMap["communications.GetCallRecords"]>;
  CommunicationsUpdateCallRecords(...args: TeamsGraphOperationArgs<"communications.UpdateCallRecords">): Promise<TeamsGraphOperationResponseMap["communications.UpdateCallRecords"]>;
  CommunicationsDeleteCallRecords(...args: TeamsGraphOperationArgs<"communications.DeleteCallRecords">): Promise<TeamsGraphOperationResponseMap["communications.DeleteCallRecords"]>;
  CommunicationsCallRecordsGetOrganizerV2(...args: TeamsGraphOperationArgs<"communications.callRecords.GetOrganizer_v2">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.GetOrganizer_v2"]>;
  CommunicationsCallRecordsUpdateOrganizerV2(...args: TeamsGraphOperationArgs<"communications.callRecords.UpdateOrganizer_v2">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.UpdateOrganizer_v2"]>;
  CommunicationsCallRecordsDeleteOrganizerV2(...args: TeamsGraphOperationArgs<"communications.callRecords.DeleteOrganizer_v2">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.DeleteOrganizer_v2"]>;
  CommunicationsCallRecordsListParticipantsV2(...args: TeamsGraphOperationArgs<"communications.callRecords.ListParticipants_v2">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.ListParticipants_v2"]>;
  CommunicationsCallRecordsCreateParticipantsV2(...args: TeamsGraphOperationArgs<"communications.callRecords.CreateParticipants_v2">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.CreateParticipants_v2"]>;
  CommunicationsCallRecordsGetParticipantsV2(...args: TeamsGraphOperationArgs<"communications.callRecords.GetParticipants_v2">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.GetParticipants_v2"]>;
  CommunicationsCallRecordsUpdateParticipantsV2(...args: TeamsGraphOperationArgs<"communications.callRecords.UpdateParticipants_v2">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.UpdateParticipants_v2"]>;
  CommunicationsCallRecordsDeleteParticipantsV2(...args: TeamsGraphOperationArgs<"communications.callRecords.DeleteParticipants_v2">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.DeleteParticipants_v2"]>;
  CommunicationsCallRecordsParticipantsV2GetCountEcf7(...args: TeamsGraphOperationArgs<"communications.callRecords.participants_v2.GetCount-ecf7">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.participants_v2.GetCount-ecf7"]>;
  CommunicationsCallRecordsListSessions(...args: TeamsGraphOperationArgs<"communications.callRecords.ListSessions">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.ListSessions"]>;
  CommunicationsCallRecordsCreateSessions(...args: TeamsGraphOperationArgs<"communications.callRecords.CreateSessions">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.CreateSessions"]>;
  CommunicationsCallRecordsGetSessions(...args: TeamsGraphOperationArgs<"communications.callRecords.GetSessions">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.GetSessions"]>;
  CommunicationsCallRecordsUpdateSessions(...args: TeamsGraphOperationArgs<"communications.callRecords.UpdateSessions">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.UpdateSessions"]>;
  CommunicationsCallRecordsDeleteSessions(...args: TeamsGraphOperationArgs<"communications.callRecords.DeleteSessions">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.DeleteSessions"]>;
  CommunicationsCallRecordsSessionsListSegments(...args: TeamsGraphOperationArgs<"communications.callRecords.sessions.ListSegments">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.sessions.ListSegments"]>;
  CommunicationsCallRecordsSessionsCreateSegments(...args: TeamsGraphOperationArgs<"communications.callRecords.sessions.CreateSegments">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.sessions.CreateSegments"]>;
  CommunicationsCallRecordsSessionsGetSegments(...args: TeamsGraphOperationArgs<"communications.callRecords.sessions.GetSegments">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.sessions.GetSegments"]>;
  CommunicationsCallRecordsSessionsUpdateSegments(...args: TeamsGraphOperationArgs<"communications.callRecords.sessions.UpdateSegments">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.sessions.UpdateSegments"]>;
  CommunicationsCallRecordsSessionsDeleteSegments(...args: TeamsGraphOperationArgs<"communications.callRecords.sessions.DeleteSegments">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.sessions.DeleteSegments"]>;
  CommunicationsCallRecordsSessionsSegmentsGetCount4fed(...args: TeamsGraphOperationArgs<"communications.callRecords.sessions.segments.GetCount-4fed">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.sessions.segments.GetCount-4fed"]>;
  CommunicationsCallRecordsSessionsGetCountC743(...args: TeamsGraphOperationArgs<"communications.callRecords.sessions.GetCount-c743">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.sessions.GetCount-c743"]>;
  CommunicationsCallRecordsGetCountE558(...args: TeamsGraphOperationArgs<"communications.callRecords.GetCount-e558">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.GetCount-e558"]>;
  CommunicationsCallRecordsGetDirectRoutingCalls(...args: TeamsGraphOperationArgs<"communications.callRecords.getDirectRoutingCalls">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.getDirectRoutingCalls"]>;
  CommunicationsCallRecordsGetPstnCalls(...args: TeamsGraphOperationArgs<"communications.callRecords.getPstnCalls">): Promise<TeamsGraphOperationResponseMap["communications.callRecords.getPstnCalls"]>;
}

export const TeamsGraphCommunicationsCallRecordGeneratedFunctionNames = [
  "CommunicationsListCallRecords",
  "CommunicationsCreateCallRecords",
  "CommunicationsGetCallRecords",
  "CommunicationsUpdateCallRecords",
  "CommunicationsDeleteCallRecords",
  "CommunicationsCallRecordsGetOrganizerV2",
  "CommunicationsCallRecordsUpdateOrganizerV2",
  "CommunicationsCallRecordsDeleteOrganizerV2",
  "CommunicationsCallRecordsListParticipantsV2",
  "CommunicationsCallRecordsCreateParticipantsV2",
  "CommunicationsCallRecordsGetParticipantsV2",
  "CommunicationsCallRecordsUpdateParticipantsV2",
  "CommunicationsCallRecordsDeleteParticipantsV2",
  "CommunicationsCallRecordsParticipantsV2GetCountEcf7",
  "CommunicationsCallRecordsListSessions",
  "CommunicationsCallRecordsCreateSessions",
  "CommunicationsCallRecordsGetSessions",
  "CommunicationsCallRecordsUpdateSessions",
  "CommunicationsCallRecordsDeleteSessions",
  "CommunicationsCallRecordsSessionsListSegments",
  "CommunicationsCallRecordsSessionsCreateSegments",
  "CommunicationsCallRecordsSessionsGetSegments",
  "CommunicationsCallRecordsSessionsUpdateSegments",
  "CommunicationsCallRecordsSessionsDeleteSegments",
  "CommunicationsCallRecordsSessionsSegmentsGetCount4fed",
  "CommunicationsCallRecordsSessionsGetCountC743",
  "CommunicationsCallRecordsGetCountE558",
  "CommunicationsCallRecordsGetDirectRoutingCalls",
  "CommunicationsCallRecordsGetPstnCalls"
] as const satisfies readonly (keyof TeamsGraphCommunicationsCallRecordGeneratedClient)[];

export function createTeamsGraphCommunicationsCallRecordGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphCommunicationsCallRecordGeneratedClient {
  return {
    CommunicationsListCallRecords: (...args) => callOperation("communications.ListCallRecords", ...(args as TeamsGraphOperationArgs<"communications.ListCallRecords">)),
    CommunicationsCreateCallRecords: (...args) => callOperation("communications.CreateCallRecords", ...(args as TeamsGraphOperationArgs<"communications.CreateCallRecords">)),
    CommunicationsGetCallRecords: (...args) => callOperation("communications.GetCallRecords", ...(args as TeamsGraphOperationArgs<"communications.GetCallRecords">)),
    CommunicationsUpdateCallRecords: (...args) => callOperation("communications.UpdateCallRecords", ...(args as TeamsGraphOperationArgs<"communications.UpdateCallRecords">)),
    CommunicationsDeleteCallRecords: (...args) => callOperation("communications.DeleteCallRecords", ...(args as TeamsGraphOperationArgs<"communications.DeleteCallRecords">)),
    CommunicationsCallRecordsGetOrganizerV2: (...args) => callOperation("communications.callRecords.GetOrganizer_v2", ...(args as TeamsGraphOperationArgs<"communications.callRecords.GetOrganizer_v2">)),
    CommunicationsCallRecordsUpdateOrganizerV2: (...args) => callOperation("communications.callRecords.UpdateOrganizer_v2", ...(args as TeamsGraphOperationArgs<"communications.callRecords.UpdateOrganizer_v2">)),
    CommunicationsCallRecordsDeleteOrganizerV2: (...args) => callOperation("communications.callRecords.DeleteOrganizer_v2", ...(args as TeamsGraphOperationArgs<"communications.callRecords.DeleteOrganizer_v2">)),
    CommunicationsCallRecordsListParticipantsV2: (...args) => callOperation("communications.callRecords.ListParticipants_v2", ...(args as TeamsGraphOperationArgs<"communications.callRecords.ListParticipants_v2">)),
    CommunicationsCallRecordsCreateParticipantsV2: (...args) => callOperation("communications.callRecords.CreateParticipants_v2", ...(args as TeamsGraphOperationArgs<"communications.callRecords.CreateParticipants_v2">)),
    CommunicationsCallRecordsGetParticipantsV2: (...args) => callOperation("communications.callRecords.GetParticipants_v2", ...(args as TeamsGraphOperationArgs<"communications.callRecords.GetParticipants_v2">)),
    CommunicationsCallRecordsUpdateParticipantsV2: (...args) => callOperation("communications.callRecords.UpdateParticipants_v2", ...(args as TeamsGraphOperationArgs<"communications.callRecords.UpdateParticipants_v2">)),
    CommunicationsCallRecordsDeleteParticipantsV2: (...args) => callOperation("communications.callRecords.DeleteParticipants_v2", ...(args as TeamsGraphOperationArgs<"communications.callRecords.DeleteParticipants_v2">)),
    CommunicationsCallRecordsParticipantsV2GetCountEcf7: (...args) => callOperation("communications.callRecords.participants_v2.GetCount-ecf7", ...(args as TeamsGraphOperationArgs<"communications.callRecords.participants_v2.GetCount-ecf7">)),
    CommunicationsCallRecordsListSessions: (...args) => callOperation("communications.callRecords.ListSessions", ...(args as TeamsGraphOperationArgs<"communications.callRecords.ListSessions">)),
    CommunicationsCallRecordsCreateSessions: (...args) => callOperation("communications.callRecords.CreateSessions", ...(args as TeamsGraphOperationArgs<"communications.callRecords.CreateSessions">)),
    CommunicationsCallRecordsGetSessions: (...args) => callOperation("communications.callRecords.GetSessions", ...(args as TeamsGraphOperationArgs<"communications.callRecords.GetSessions">)),
    CommunicationsCallRecordsUpdateSessions: (...args) => callOperation("communications.callRecords.UpdateSessions", ...(args as TeamsGraphOperationArgs<"communications.callRecords.UpdateSessions">)),
    CommunicationsCallRecordsDeleteSessions: (...args) => callOperation("communications.callRecords.DeleteSessions", ...(args as TeamsGraphOperationArgs<"communications.callRecords.DeleteSessions">)),
    CommunicationsCallRecordsSessionsListSegments: (...args) => callOperation("communications.callRecords.sessions.ListSegments", ...(args as TeamsGraphOperationArgs<"communications.callRecords.sessions.ListSegments">)),
    CommunicationsCallRecordsSessionsCreateSegments: (...args) => callOperation("communications.callRecords.sessions.CreateSegments", ...(args as TeamsGraphOperationArgs<"communications.callRecords.sessions.CreateSegments">)),
    CommunicationsCallRecordsSessionsGetSegments: (...args) => callOperation("communications.callRecords.sessions.GetSegments", ...(args as TeamsGraphOperationArgs<"communications.callRecords.sessions.GetSegments">)),
    CommunicationsCallRecordsSessionsUpdateSegments: (...args) => callOperation("communications.callRecords.sessions.UpdateSegments", ...(args as TeamsGraphOperationArgs<"communications.callRecords.sessions.UpdateSegments">)),
    CommunicationsCallRecordsSessionsDeleteSegments: (...args) => callOperation("communications.callRecords.sessions.DeleteSegments", ...(args as TeamsGraphOperationArgs<"communications.callRecords.sessions.DeleteSegments">)),
    CommunicationsCallRecordsSessionsSegmentsGetCount4fed: (...args) => callOperation("communications.callRecords.sessions.segments.GetCount-4fed", ...(args as TeamsGraphOperationArgs<"communications.callRecords.sessions.segments.GetCount-4fed">)),
    CommunicationsCallRecordsSessionsGetCountC743: (...args) => callOperation("communications.callRecords.sessions.GetCount-c743", ...(args as TeamsGraphOperationArgs<"communications.callRecords.sessions.GetCount-c743">)),
    CommunicationsCallRecordsGetCountE558: (...args) => callOperation("communications.callRecords.GetCount-e558", ...(args as TeamsGraphOperationArgs<"communications.callRecords.GetCount-e558">)),
    CommunicationsCallRecordsGetDirectRoutingCalls: (...args) => callOperation("communications.callRecords.getDirectRoutingCalls", ...(args as TeamsGraphOperationArgs<"communications.callRecords.getDirectRoutingCalls">)),
    CommunicationsCallRecordsGetPstnCalls: (...args) => callOperation("communications.callRecords.getPstnCalls", ...(args as TeamsGraphOperationArgs<"communications.callRecords.getPstnCalls">)),
  };
}
