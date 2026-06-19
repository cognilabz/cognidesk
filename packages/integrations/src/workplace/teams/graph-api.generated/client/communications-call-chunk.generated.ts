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
export const TeamsGraphCommunicationsCallOperationKeys = [
  "communications.ListCalls",
  "communications.CreateCalls",
  "communications.GetCalls",
  "communications.UpdateCalls",
  "communications.DeleteCalls",
  "communications.calls.ListAudioRoutingGroups",
  "communications.calls.CreateAudioRoutingGroups",
  "communications.calls.GetAudioRoutingGroups",
  "communications.calls.UpdateAudioRoutingGroups",
  "communications.calls.DeleteAudioRoutingGroups",
  "communications.calls.audioRoutingGroups.GetCount-157e",
  "communications.calls.ListContentSharingSessions",
  "communications.calls.CreateContentSharingSessions",
  "communications.calls.GetContentSharingSessions",
  "communications.calls.UpdateContentSharingSessions",
  "communications.calls.DeleteContentSharingSessions",
  "communications.calls.contentSharingSessions.GetCount-a2b2",
  "communications.calls.call.addLargeGalleryView",
  "communications.calls.call.answer",
  "communications.calls.call.cancelMediaProcessing",
  "communications.calls.call.changeScreenSharingRole",
  "communications.calls.call.keepAlive",
  "communications.calls.call.mute",
  "communications.calls.call.playPrompt",
  "communications.calls.call.recordResponse",
  "communications.calls.call.redirect",
  "communications.calls.call.reject",
  "communications.calls.call.sendDtmfTones",
  "communications.calls.call.subscribeToTone",
  "communications.calls.call.transfer",
  "communications.calls.call.unmute",
  "communications.calls.call.updateRecordingStatus",
  "communications.calls.ListOperations",
  "communications.calls.CreateOperations",
  "communications.calls.GetOperations",
  "communications.calls.UpdateOperations",
  "communications.calls.DeleteOperations",
  "communications.calls.operations.GetCount-3444",
  "communications.calls.ListParticipants",
  "communications.calls.CreateParticipants",
  "communications.calls.GetParticipants",
  "communications.calls.UpdateParticipants",
  "communications.calls.DeleteParticipants",
  "communications.calls.call.participants.participant.mute",
  "communications.calls.call.participants.participant.startHoldMusic",
  "communications.calls.call.participants.participant.stopHoldMusic",
  "communications.calls.participants.GetCount-4efe",
  "communications.calls.call.participants.invite",
  "communications.calls.GetCount-5d04",
  "communications.calls.logTeleconferenceDeviceQuality"
] as const;
export type TeamsGraphCommunicationsCallOperationKey = typeof TeamsGraphCommunicationsCallOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphCommunicationsCallOperationPathParamMap {
  "communications.ListCalls": {};
  "communications.CreateCalls": {};
  "communications.GetCalls": { "call-id": TeamsGraphPathParamValue };
  "communications.UpdateCalls": { "call-id": TeamsGraphPathParamValue };
  "communications.DeleteCalls": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.ListAudioRoutingGroups": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.CreateAudioRoutingGroups": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.GetAudioRoutingGroups": { "call-id": TeamsGraphPathParamValue; "audioRoutingGroup-id": TeamsGraphPathParamValue };
  "communications.calls.UpdateAudioRoutingGroups": { "call-id": TeamsGraphPathParamValue; "audioRoutingGroup-id": TeamsGraphPathParamValue };
  "communications.calls.DeleteAudioRoutingGroups": { "call-id": TeamsGraphPathParamValue; "audioRoutingGroup-id": TeamsGraphPathParamValue };
  "communications.calls.audioRoutingGroups.GetCount-157e": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.ListContentSharingSessions": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.CreateContentSharingSessions": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.GetContentSharingSessions": { "call-id": TeamsGraphPathParamValue; "contentSharingSession-id": TeamsGraphPathParamValue };
  "communications.calls.UpdateContentSharingSessions": { "call-id": TeamsGraphPathParamValue; "contentSharingSession-id": TeamsGraphPathParamValue };
  "communications.calls.DeleteContentSharingSessions": { "call-id": TeamsGraphPathParamValue; "contentSharingSession-id": TeamsGraphPathParamValue };
  "communications.calls.contentSharingSessions.GetCount-a2b2": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.addLargeGalleryView": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.answer": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.cancelMediaProcessing": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.changeScreenSharingRole": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.keepAlive": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.mute": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.playPrompt": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.recordResponse": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.redirect": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.reject": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.sendDtmfTones": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.subscribeToTone": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.transfer": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.unmute": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.updateRecordingStatus": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.ListOperations": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.CreateOperations": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.GetOperations": { "call-id": TeamsGraphPathParamValue; "commsOperation-id": TeamsGraphPathParamValue };
  "communications.calls.UpdateOperations": { "call-id": TeamsGraphPathParamValue; "commsOperation-id": TeamsGraphPathParamValue };
  "communications.calls.DeleteOperations": { "call-id": TeamsGraphPathParamValue; "commsOperation-id": TeamsGraphPathParamValue };
  "communications.calls.operations.GetCount-3444": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.ListParticipants": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.CreateParticipants": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.GetParticipants": { "call-id": TeamsGraphPathParamValue; "participant-id": TeamsGraphPathParamValue };
  "communications.calls.UpdateParticipants": { "call-id": TeamsGraphPathParamValue; "participant-id": TeamsGraphPathParamValue };
  "communications.calls.DeleteParticipants": { "call-id": TeamsGraphPathParamValue; "participant-id": TeamsGraphPathParamValue };
  "communications.calls.call.participants.participant.mute": { "call-id": TeamsGraphPathParamValue; "participant-id": TeamsGraphPathParamValue };
  "communications.calls.call.participants.participant.startHoldMusic": { "call-id": TeamsGraphPathParamValue; "participant-id": TeamsGraphPathParamValue };
  "communications.calls.call.participants.participant.stopHoldMusic": { "call-id": TeamsGraphPathParamValue; "participant-id": TeamsGraphPathParamValue };
  "communications.calls.participants.GetCount-4efe": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.call.participants.invite": { "call-id": TeamsGraphPathParamValue };
  "communications.calls.GetCount-5d04": {};
  "communications.calls.logTeleconferenceDeviceQuality": {};
}

export interface TeamsGraphCommunicationsCallOperationRequestMap {
  "communications.ListCalls": TeamsGraphOperationInput<"communications.ListCalls">;
  "communications.CreateCalls": TeamsGraphOperationInput<"communications.CreateCalls">;
  "communications.GetCalls": TeamsGraphOperationInput<"communications.GetCalls">;
  "communications.UpdateCalls": TeamsGraphOperationInput<"communications.UpdateCalls">;
  "communications.DeleteCalls": TeamsGraphOperationInput<"communications.DeleteCalls">;
  "communications.calls.ListAudioRoutingGroups": TeamsGraphOperationInput<"communications.calls.ListAudioRoutingGroups">;
  "communications.calls.CreateAudioRoutingGroups": TeamsGraphOperationInput<"communications.calls.CreateAudioRoutingGroups">;
  "communications.calls.GetAudioRoutingGroups": TeamsGraphOperationInput<"communications.calls.GetAudioRoutingGroups">;
  "communications.calls.UpdateAudioRoutingGroups": TeamsGraphOperationInput<"communications.calls.UpdateAudioRoutingGroups">;
  "communications.calls.DeleteAudioRoutingGroups": TeamsGraphOperationInput<"communications.calls.DeleteAudioRoutingGroups">;
  "communications.calls.audioRoutingGroups.GetCount-157e": TeamsGraphOperationInput<"communications.calls.audioRoutingGroups.GetCount-157e">;
  "communications.calls.ListContentSharingSessions": TeamsGraphOperationInput<"communications.calls.ListContentSharingSessions">;
  "communications.calls.CreateContentSharingSessions": TeamsGraphOperationInput<"communications.calls.CreateContentSharingSessions">;
  "communications.calls.GetContentSharingSessions": TeamsGraphOperationInput<"communications.calls.GetContentSharingSessions">;
  "communications.calls.UpdateContentSharingSessions": TeamsGraphOperationInput<"communications.calls.UpdateContentSharingSessions">;
  "communications.calls.DeleteContentSharingSessions": TeamsGraphOperationInput<"communications.calls.DeleteContentSharingSessions">;
  "communications.calls.contentSharingSessions.GetCount-a2b2": TeamsGraphOperationInput<"communications.calls.contentSharingSessions.GetCount-a2b2">;
  "communications.calls.call.addLargeGalleryView": TeamsGraphOperationInput<"communications.calls.call.addLargeGalleryView">;
  "communications.calls.call.answer": TeamsGraphOperationInput<"communications.calls.call.answer">;
  "communications.calls.call.cancelMediaProcessing": TeamsGraphOperationInput<"communications.calls.call.cancelMediaProcessing">;
  "communications.calls.call.changeScreenSharingRole": TeamsGraphOperationInput<"communications.calls.call.changeScreenSharingRole">;
  "communications.calls.call.keepAlive": TeamsGraphOperationInput<"communications.calls.call.keepAlive">;
  "communications.calls.call.mute": TeamsGraphOperationInput<"communications.calls.call.mute">;
  "communications.calls.call.playPrompt": TeamsGraphOperationInput<"communications.calls.call.playPrompt">;
  "communications.calls.call.recordResponse": TeamsGraphOperationInput<"communications.calls.call.recordResponse">;
  "communications.calls.call.redirect": TeamsGraphOperationInput<"communications.calls.call.redirect">;
  "communications.calls.call.reject": TeamsGraphOperationInput<"communications.calls.call.reject">;
  "communications.calls.call.sendDtmfTones": TeamsGraphOperationInput<"communications.calls.call.sendDtmfTones">;
  "communications.calls.call.subscribeToTone": TeamsGraphOperationInput<"communications.calls.call.subscribeToTone">;
  "communications.calls.call.transfer": TeamsGraphOperationInput<"communications.calls.call.transfer">;
  "communications.calls.call.unmute": TeamsGraphOperationInput<"communications.calls.call.unmute">;
  "communications.calls.call.updateRecordingStatus": TeamsGraphOperationInput<"communications.calls.call.updateRecordingStatus">;
  "communications.calls.ListOperations": TeamsGraphOperationInput<"communications.calls.ListOperations">;
  "communications.calls.CreateOperations": TeamsGraphOperationInput<"communications.calls.CreateOperations">;
  "communications.calls.GetOperations": TeamsGraphOperationInput<"communications.calls.GetOperations">;
  "communications.calls.UpdateOperations": TeamsGraphOperationInput<"communications.calls.UpdateOperations">;
  "communications.calls.DeleteOperations": TeamsGraphOperationInput<"communications.calls.DeleteOperations">;
  "communications.calls.operations.GetCount-3444": TeamsGraphOperationInput<"communications.calls.operations.GetCount-3444">;
  "communications.calls.ListParticipants": TeamsGraphOperationInput<"communications.calls.ListParticipants">;
  "communications.calls.CreateParticipants": TeamsGraphOperationInput<"communications.calls.CreateParticipants">;
  "communications.calls.GetParticipants": TeamsGraphOperationInput<"communications.calls.GetParticipants">;
  "communications.calls.UpdateParticipants": TeamsGraphOperationInput<"communications.calls.UpdateParticipants">;
  "communications.calls.DeleteParticipants": TeamsGraphOperationInput<"communications.calls.DeleteParticipants">;
  "communications.calls.call.participants.participant.mute": TeamsGraphOperationInput<"communications.calls.call.participants.participant.mute">;
  "communications.calls.call.participants.participant.startHoldMusic": TeamsGraphOperationInput<"communications.calls.call.participants.participant.startHoldMusic">;
  "communications.calls.call.participants.participant.stopHoldMusic": TeamsGraphOperationInput<"communications.calls.call.participants.participant.stopHoldMusic">;
  "communications.calls.participants.GetCount-4efe": TeamsGraphOperationInput<"communications.calls.participants.GetCount-4efe">;
  "communications.calls.call.participants.invite": TeamsGraphOperationInput<"communications.calls.call.participants.invite">;
  "communications.calls.GetCount-5d04": TeamsGraphOperationInput<"communications.calls.GetCount-5d04">;
  "communications.calls.logTeleconferenceDeviceQuality": TeamsGraphOperationInput<"communications.calls.logTeleconferenceDeviceQuality">;
}

export interface TeamsGraphCommunicationsCallGeneratedClient {
  CommunicationsListCalls(...args: TeamsGraphOperationArgs<"communications.ListCalls">): Promise<TeamsGraphOperationResponseMap["communications.ListCalls"]>;
  CommunicationsCreateCalls(...args: TeamsGraphOperationArgs<"communications.CreateCalls">): Promise<TeamsGraphOperationResponseMap["communications.CreateCalls"]>;
  CommunicationsGetCalls(...args: TeamsGraphOperationArgs<"communications.GetCalls">): Promise<TeamsGraphOperationResponseMap["communications.GetCalls"]>;
  CommunicationsUpdateCalls(...args: TeamsGraphOperationArgs<"communications.UpdateCalls">): Promise<TeamsGraphOperationResponseMap["communications.UpdateCalls"]>;
  CommunicationsDeleteCalls(...args: TeamsGraphOperationArgs<"communications.DeleteCalls">): Promise<TeamsGraphOperationResponseMap["communications.DeleteCalls"]>;
  CommunicationsCallsListAudioRoutingGroups(...args: TeamsGraphOperationArgs<"communications.calls.ListAudioRoutingGroups">): Promise<TeamsGraphOperationResponseMap["communications.calls.ListAudioRoutingGroups"]>;
  CommunicationsCallsCreateAudioRoutingGroups(...args: TeamsGraphOperationArgs<"communications.calls.CreateAudioRoutingGroups">): Promise<TeamsGraphOperationResponseMap["communications.calls.CreateAudioRoutingGroups"]>;
  CommunicationsCallsGetAudioRoutingGroups(...args: TeamsGraphOperationArgs<"communications.calls.GetAudioRoutingGroups">): Promise<TeamsGraphOperationResponseMap["communications.calls.GetAudioRoutingGroups"]>;
  CommunicationsCallsUpdateAudioRoutingGroups(...args: TeamsGraphOperationArgs<"communications.calls.UpdateAudioRoutingGroups">): Promise<TeamsGraphOperationResponseMap["communications.calls.UpdateAudioRoutingGroups"]>;
  CommunicationsCallsDeleteAudioRoutingGroups(...args: TeamsGraphOperationArgs<"communications.calls.DeleteAudioRoutingGroups">): Promise<TeamsGraphOperationResponseMap["communications.calls.DeleteAudioRoutingGroups"]>;
  CommunicationsCallsAudioRoutingGroupsGetCount157e(...args: TeamsGraphOperationArgs<"communications.calls.audioRoutingGroups.GetCount-157e">): Promise<TeamsGraphOperationResponseMap["communications.calls.audioRoutingGroups.GetCount-157e"]>;
  CommunicationsCallsListContentSharingSessions(...args: TeamsGraphOperationArgs<"communications.calls.ListContentSharingSessions">): Promise<TeamsGraphOperationResponseMap["communications.calls.ListContentSharingSessions"]>;
  CommunicationsCallsCreateContentSharingSessions(...args: TeamsGraphOperationArgs<"communications.calls.CreateContentSharingSessions">): Promise<TeamsGraphOperationResponseMap["communications.calls.CreateContentSharingSessions"]>;
  CommunicationsCallsGetContentSharingSessions(...args: TeamsGraphOperationArgs<"communications.calls.GetContentSharingSessions">): Promise<TeamsGraphOperationResponseMap["communications.calls.GetContentSharingSessions"]>;
  CommunicationsCallsUpdateContentSharingSessions(...args: TeamsGraphOperationArgs<"communications.calls.UpdateContentSharingSessions">): Promise<TeamsGraphOperationResponseMap["communications.calls.UpdateContentSharingSessions"]>;
  CommunicationsCallsDeleteContentSharingSessions(...args: TeamsGraphOperationArgs<"communications.calls.DeleteContentSharingSessions">): Promise<TeamsGraphOperationResponseMap["communications.calls.DeleteContentSharingSessions"]>;
  CommunicationsCallsContentSharingSessionsGetCountA2b2(...args: TeamsGraphOperationArgs<"communications.calls.contentSharingSessions.GetCount-a2b2">): Promise<TeamsGraphOperationResponseMap["communications.calls.contentSharingSessions.GetCount-a2b2"]>;
  CommunicationsCallsCallAddLargeGalleryView(...args: TeamsGraphOperationArgs<"communications.calls.call.addLargeGalleryView">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.addLargeGalleryView"]>;
  CommunicationsCallsCallAnswer(...args: TeamsGraphOperationArgs<"communications.calls.call.answer">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.answer"]>;
  CommunicationsCallsCallCancelMediaProcessing(...args: TeamsGraphOperationArgs<"communications.calls.call.cancelMediaProcessing">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.cancelMediaProcessing"]>;
  CommunicationsCallsCallChangeScreenSharingRole(...args: TeamsGraphOperationArgs<"communications.calls.call.changeScreenSharingRole">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.changeScreenSharingRole"]>;
  CommunicationsCallsCallKeepAlive(...args: TeamsGraphOperationArgs<"communications.calls.call.keepAlive">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.keepAlive"]>;
  CommunicationsCallsCallMute(...args: TeamsGraphOperationArgs<"communications.calls.call.mute">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.mute"]>;
  CommunicationsCallsCallPlayPrompt(...args: TeamsGraphOperationArgs<"communications.calls.call.playPrompt">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.playPrompt"]>;
  CommunicationsCallsCallRecordResponse(...args: TeamsGraphOperationArgs<"communications.calls.call.recordResponse">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.recordResponse"]>;
  CommunicationsCallsCallRedirect(...args: TeamsGraphOperationArgs<"communications.calls.call.redirect">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.redirect"]>;
  CommunicationsCallsCallReject(...args: TeamsGraphOperationArgs<"communications.calls.call.reject">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.reject"]>;
  CommunicationsCallsCallSendDtmfTones(...args: TeamsGraphOperationArgs<"communications.calls.call.sendDtmfTones">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.sendDtmfTones"]>;
  CommunicationsCallsCallSubscribeToTone(...args: TeamsGraphOperationArgs<"communications.calls.call.subscribeToTone">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.subscribeToTone"]>;
  CommunicationsCallsCallTransfer(...args: TeamsGraphOperationArgs<"communications.calls.call.transfer">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.transfer"]>;
  CommunicationsCallsCallUnmute(...args: TeamsGraphOperationArgs<"communications.calls.call.unmute">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.unmute"]>;
  CommunicationsCallsCallUpdateRecordingStatus(...args: TeamsGraphOperationArgs<"communications.calls.call.updateRecordingStatus">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.updateRecordingStatus"]>;
  CommunicationsCallsListOperations(...args: TeamsGraphOperationArgs<"communications.calls.ListOperations">): Promise<TeamsGraphOperationResponseMap["communications.calls.ListOperations"]>;
  CommunicationsCallsCreateOperations(...args: TeamsGraphOperationArgs<"communications.calls.CreateOperations">): Promise<TeamsGraphOperationResponseMap["communications.calls.CreateOperations"]>;
  CommunicationsCallsGetOperations(...args: TeamsGraphOperationArgs<"communications.calls.GetOperations">): Promise<TeamsGraphOperationResponseMap["communications.calls.GetOperations"]>;
  CommunicationsCallsUpdateOperations(...args: TeamsGraphOperationArgs<"communications.calls.UpdateOperations">): Promise<TeamsGraphOperationResponseMap["communications.calls.UpdateOperations"]>;
  CommunicationsCallsDeleteOperations(...args: TeamsGraphOperationArgs<"communications.calls.DeleteOperations">): Promise<TeamsGraphOperationResponseMap["communications.calls.DeleteOperations"]>;
  CommunicationsCallsOperationsGetCount3444(...args: TeamsGraphOperationArgs<"communications.calls.operations.GetCount-3444">): Promise<TeamsGraphOperationResponseMap["communications.calls.operations.GetCount-3444"]>;
  CommunicationsCallsListParticipants(...args: TeamsGraphOperationArgs<"communications.calls.ListParticipants">): Promise<TeamsGraphOperationResponseMap["communications.calls.ListParticipants"]>;
  CommunicationsCallsCreateParticipants(...args: TeamsGraphOperationArgs<"communications.calls.CreateParticipants">): Promise<TeamsGraphOperationResponseMap["communications.calls.CreateParticipants"]>;
  CommunicationsCallsGetParticipants(...args: TeamsGraphOperationArgs<"communications.calls.GetParticipants">): Promise<TeamsGraphOperationResponseMap["communications.calls.GetParticipants"]>;
  CommunicationsCallsUpdateParticipants(...args: TeamsGraphOperationArgs<"communications.calls.UpdateParticipants">): Promise<TeamsGraphOperationResponseMap["communications.calls.UpdateParticipants"]>;
  CommunicationsCallsDeleteParticipants(...args: TeamsGraphOperationArgs<"communications.calls.DeleteParticipants">): Promise<TeamsGraphOperationResponseMap["communications.calls.DeleteParticipants"]>;
  CommunicationsCallsCallParticipantsParticipantMute(...args: TeamsGraphOperationArgs<"communications.calls.call.participants.participant.mute">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.participants.participant.mute"]>;
  CommunicationsCallsCallParticipantsParticipantStartHoldMusic(...args: TeamsGraphOperationArgs<"communications.calls.call.participants.participant.startHoldMusic">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.participants.participant.startHoldMusic"]>;
  CommunicationsCallsCallParticipantsParticipantStopHoldMusic(...args: TeamsGraphOperationArgs<"communications.calls.call.participants.participant.stopHoldMusic">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.participants.participant.stopHoldMusic"]>;
  CommunicationsCallsParticipantsGetCount4efe(...args: TeamsGraphOperationArgs<"communications.calls.participants.GetCount-4efe">): Promise<TeamsGraphOperationResponseMap["communications.calls.participants.GetCount-4efe"]>;
  CommunicationsCallsCallParticipantsInvite(...args: TeamsGraphOperationArgs<"communications.calls.call.participants.invite">): Promise<TeamsGraphOperationResponseMap["communications.calls.call.participants.invite"]>;
  CommunicationsCallsGetCount5d04(...args: TeamsGraphOperationArgs<"communications.calls.GetCount-5d04">): Promise<TeamsGraphOperationResponseMap["communications.calls.GetCount-5d04"]>;
  CommunicationsCallsLogTeleconferenceDeviceQuality(...args: TeamsGraphOperationArgs<"communications.calls.logTeleconferenceDeviceQuality">): Promise<TeamsGraphOperationResponseMap["communications.calls.logTeleconferenceDeviceQuality"]>;
}

export const TeamsGraphCommunicationsCallGeneratedFunctionNames = [
  "CommunicationsListCalls",
  "CommunicationsCreateCalls",
  "CommunicationsGetCalls",
  "CommunicationsUpdateCalls",
  "CommunicationsDeleteCalls",
  "CommunicationsCallsListAudioRoutingGroups",
  "CommunicationsCallsCreateAudioRoutingGroups",
  "CommunicationsCallsGetAudioRoutingGroups",
  "CommunicationsCallsUpdateAudioRoutingGroups",
  "CommunicationsCallsDeleteAudioRoutingGroups",
  "CommunicationsCallsAudioRoutingGroupsGetCount157e",
  "CommunicationsCallsListContentSharingSessions",
  "CommunicationsCallsCreateContentSharingSessions",
  "CommunicationsCallsGetContentSharingSessions",
  "CommunicationsCallsUpdateContentSharingSessions",
  "CommunicationsCallsDeleteContentSharingSessions",
  "CommunicationsCallsContentSharingSessionsGetCountA2b2",
  "CommunicationsCallsCallAddLargeGalleryView",
  "CommunicationsCallsCallAnswer",
  "CommunicationsCallsCallCancelMediaProcessing",
  "CommunicationsCallsCallChangeScreenSharingRole",
  "CommunicationsCallsCallKeepAlive",
  "CommunicationsCallsCallMute",
  "CommunicationsCallsCallPlayPrompt",
  "CommunicationsCallsCallRecordResponse",
  "CommunicationsCallsCallRedirect",
  "CommunicationsCallsCallReject",
  "CommunicationsCallsCallSendDtmfTones",
  "CommunicationsCallsCallSubscribeToTone",
  "CommunicationsCallsCallTransfer",
  "CommunicationsCallsCallUnmute",
  "CommunicationsCallsCallUpdateRecordingStatus",
  "CommunicationsCallsListOperations",
  "CommunicationsCallsCreateOperations",
  "CommunicationsCallsGetOperations",
  "CommunicationsCallsUpdateOperations",
  "CommunicationsCallsDeleteOperations",
  "CommunicationsCallsOperationsGetCount3444",
  "CommunicationsCallsListParticipants",
  "CommunicationsCallsCreateParticipants",
  "CommunicationsCallsGetParticipants",
  "CommunicationsCallsUpdateParticipants",
  "CommunicationsCallsDeleteParticipants",
  "CommunicationsCallsCallParticipantsParticipantMute",
  "CommunicationsCallsCallParticipantsParticipantStartHoldMusic",
  "CommunicationsCallsCallParticipantsParticipantStopHoldMusic",
  "CommunicationsCallsParticipantsGetCount4efe",
  "CommunicationsCallsCallParticipantsInvite",
  "CommunicationsCallsGetCount5d04",
  "CommunicationsCallsLogTeleconferenceDeviceQuality"
] as const satisfies readonly (keyof TeamsGraphCommunicationsCallGeneratedClient)[];

export function createTeamsGraphCommunicationsCallGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphCommunicationsCallGeneratedClient {
  return {
    CommunicationsListCalls: (...args) => callOperation("communications.ListCalls", ...(args as TeamsGraphOperationArgs<"communications.ListCalls">)),
    CommunicationsCreateCalls: (...args) => callOperation("communications.CreateCalls", ...(args as TeamsGraphOperationArgs<"communications.CreateCalls">)),
    CommunicationsGetCalls: (...args) => callOperation("communications.GetCalls", ...(args as TeamsGraphOperationArgs<"communications.GetCalls">)),
    CommunicationsUpdateCalls: (...args) => callOperation("communications.UpdateCalls", ...(args as TeamsGraphOperationArgs<"communications.UpdateCalls">)),
    CommunicationsDeleteCalls: (...args) => callOperation("communications.DeleteCalls", ...(args as TeamsGraphOperationArgs<"communications.DeleteCalls">)),
    CommunicationsCallsListAudioRoutingGroups: (...args) => callOperation("communications.calls.ListAudioRoutingGroups", ...(args as TeamsGraphOperationArgs<"communications.calls.ListAudioRoutingGroups">)),
    CommunicationsCallsCreateAudioRoutingGroups: (...args) => callOperation("communications.calls.CreateAudioRoutingGroups", ...(args as TeamsGraphOperationArgs<"communications.calls.CreateAudioRoutingGroups">)),
    CommunicationsCallsGetAudioRoutingGroups: (...args) => callOperation("communications.calls.GetAudioRoutingGroups", ...(args as TeamsGraphOperationArgs<"communications.calls.GetAudioRoutingGroups">)),
    CommunicationsCallsUpdateAudioRoutingGroups: (...args) => callOperation("communications.calls.UpdateAudioRoutingGroups", ...(args as TeamsGraphOperationArgs<"communications.calls.UpdateAudioRoutingGroups">)),
    CommunicationsCallsDeleteAudioRoutingGroups: (...args) => callOperation("communications.calls.DeleteAudioRoutingGroups", ...(args as TeamsGraphOperationArgs<"communications.calls.DeleteAudioRoutingGroups">)),
    CommunicationsCallsAudioRoutingGroupsGetCount157e: (...args) => callOperation("communications.calls.audioRoutingGroups.GetCount-157e", ...(args as TeamsGraphOperationArgs<"communications.calls.audioRoutingGroups.GetCount-157e">)),
    CommunicationsCallsListContentSharingSessions: (...args) => callOperation("communications.calls.ListContentSharingSessions", ...(args as TeamsGraphOperationArgs<"communications.calls.ListContentSharingSessions">)),
    CommunicationsCallsCreateContentSharingSessions: (...args) => callOperation("communications.calls.CreateContentSharingSessions", ...(args as TeamsGraphOperationArgs<"communications.calls.CreateContentSharingSessions">)),
    CommunicationsCallsGetContentSharingSessions: (...args) => callOperation("communications.calls.GetContentSharingSessions", ...(args as TeamsGraphOperationArgs<"communications.calls.GetContentSharingSessions">)),
    CommunicationsCallsUpdateContentSharingSessions: (...args) => callOperation("communications.calls.UpdateContentSharingSessions", ...(args as TeamsGraphOperationArgs<"communications.calls.UpdateContentSharingSessions">)),
    CommunicationsCallsDeleteContentSharingSessions: (...args) => callOperation("communications.calls.DeleteContentSharingSessions", ...(args as TeamsGraphOperationArgs<"communications.calls.DeleteContentSharingSessions">)),
    CommunicationsCallsContentSharingSessionsGetCountA2b2: (...args) => callOperation("communications.calls.contentSharingSessions.GetCount-a2b2", ...(args as TeamsGraphOperationArgs<"communications.calls.contentSharingSessions.GetCount-a2b2">)),
    CommunicationsCallsCallAddLargeGalleryView: (...args) => callOperation("communications.calls.call.addLargeGalleryView", ...(args as TeamsGraphOperationArgs<"communications.calls.call.addLargeGalleryView">)),
    CommunicationsCallsCallAnswer: (...args) => callOperation("communications.calls.call.answer", ...(args as TeamsGraphOperationArgs<"communications.calls.call.answer">)),
    CommunicationsCallsCallCancelMediaProcessing: (...args) => callOperation("communications.calls.call.cancelMediaProcessing", ...(args as TeamsGraphOperationArgs<"communications.calls.call.cancelMediaProcessing">)),
    CommunicationsCallsCallChangeScreenSharingRole: (...args) => callOperation("communications.calls.call.changeScreenSharingRole", ...(args as TeamsGraphOperationArgs<"communications.calls.call.changeScreenSharingRole">)),
    CommunicationsCallsCallKeepAlive: (...args) => callOperation("communications.calls.call.keepAlive", ...(args as TeamsGraphOperationArgs<"communications.calls.call.keepAlive">)),
    CommunicationsCallsCallMute: (...args) => callOperation("communications.calls.call.mute", ...(args as TeamsGraphOperationArgs<"communications.calls.call.mute">)),
    CommunicationsCallsCallPlayPrompt: (...args) => callOperation("communications.calls.call.playPrompt", ...(args as TeamsGraphOperationArgs<"communications.calls.call.playPrompt">)),
    CommunicationsCallsCallRecordResponse: (...args) => callOperation("communications.calls.call.recordResponse", ...(args as TeamsGraphOperationArgs<"communications.calls.call.recordResponse">)),
    CommunicationsCallsCallRedirect: (...args) => callOperation("communications.calls.call.redirect", ...(args as TeamsGraphOperationArgs<"communications.calls.call.redirect">)),
    CommunicationsCallsCallReject: (...args) => callOperation("communications.calls.call.reject", ...(args as TeamsGraphOperationArgs<"communications.calls.call.reject">)),
    CommunicationsCallsCallSendDtmfTones: (...args) => callOperation("communications.calls.call.sendDtmfTones", ...(args as TeamsGraphOperationArgs<"communications.calls.call.sendDtmfTones">)),
    CommunicationsCallsCallSubscribeToTone: (...args) => callOperation("communications.calls.call.subscribeToTone", ...(args as TeamsGraphOperationArgs<"communications.calls.call.subscribeToTone">)),
    CommunicationsCallsCallTransfer: (...args) => callOperation("communications.calls.call.transfer", ...(args as TeamsGraphOperationArgs<"communications.calls.call.transfer">)),
    CommunicationsCallsCallUnmute: (...args) => callOperation("communications.calls.call.unmute", ...(args as TeamsGraphOperationArgs<"communications.calls.call.unmute">)),
    CommunicationsCallsCallUpdateRecordingStatus: (...args) => callOperation("communications.calls.call.updateRecordingStatus", ...(args as TeamsGraphOperationArgs<"communications.calls.call.updateRecordingStatus">)),
    CommunicationsCallsListOperations: (...args) => callOperation("communications.calls.ListOperations", ...(args as TeamsGraphOperationArgs<"communications.calls.ListOperations">)),
    CommunicationsCallsCreateOperations: (...args) => callOperation("communications.calls.CreateOperations", ...(args as TeamsGraphOperationArgs<"communications.calls.CreateOperations">)),
    CommunicationsCallsGetOperations: (...args) => callOperation("communications.calls.GetOperations", ...(args as TeamsGraphOperationArgs<"communications.calls.GetOperations">)),
    CommunicationsCallsUpdateOperations: (...args) => callOperation("communications.calls.UpdateOperations", ...(args as TeamsGraphOperationArgs<"communications.calls.UpdateOperations">)),
    CommunicationsCallsDeleteOperations: (...args) => callOperation("communications.calls.DeleteOperations", ...(args as TeamsGraphOperationArgs<"communications.calls.DeleteOperations">)),
    CommunicationsCallsOperationsGetCount3444: (...args) => callOperation("communications.calls.operations.GetCount-3444", ...(args as TeamsGraphOperationArgs<"communications.calls.operations.GetCount-3444">)),
    CommunicationsCallsListParticipants: (...args) => callOperation("communications.calls.ListParticipants", ...(args as TeamsGraphOperationArgs<"communications.calls.ListParticipants">)),
    CommunicationsCallsCreateParticipants: (...args) => callOperation("communications.calls.CreateParticipants", ...(args as TeamsGraphOperationArgs<"communications.calls.CreateParticipants">)),
    CommunicationsCallsGetParticipants: (...args) => callOperation("communications.calls.GetParticipants", ...(args as TeamsGraphOperationArgs<"communications.calls.GetParticipants">)),
    CommunicationsCallsUpdateParticipants: (...args) => callOperation("communications.calls.UpdateParticipants", ...(args as TeamsGraphOperationArgs<"communications.calls.UpdateParticipants">)),
    CommunicationsCallsDeleteParticipants: (...args) => callOperation("communications.calls.DeleteParticipants", ...(args as TeamsGraphOperationArgs<"communications.calls.DeleteParticipants">)),
    CommunicationsCallsCallParticipantsParticipantMute: (...args) => callOperation("communications.calls.call.participants.participant.mute", ...(args as TeamsGraphOperationArgs<"communications.calls.call.participants.participant.mute">)),
    CommunicationsCallsCallParticipantsParticipantStartHoldMusic: (...args) => callOperation("communications.calls.call.participants.participant.startHoldMusic", ...(args as TeamsGraphOperationArgs<"communications.calls.call.participants.participant.startHoldMusic">)),
    CommunicationsCallsCallParticipantsParticipantStopHoldMusic: (...args) => callOperation("communications.calls.call.participants.participant.stopHoldMusic", ...(args as TeamsGraphOperationArgs<"communications.calls.call.participants.participant.stopHoldMusic">)),
    CommunicationsCallsParticipantsGetCount4efe: (...args) => callOperation("communications.calls.participants.GetCount-4efe", ...(args as TeamsGraphOperationArgs<"communications.calls.participants.GetCount-4efe">)),
    CommunicationsCallsCallParticipantsInvite: (...args) => callOperation("communications.calls.call.participants.invite", ...(args as TeamsGraphOperationArgs<"communications.calls.call.participants.invite">)),
    CommunicationsCallsGetCount5d04: (...args) => callOperation("communications.calls.GetCount-5d04", ...(args as TeamsGraphOperationArgs<"communications.calls.GetCount-5d04">)),
    CommunicationsCallsLogTeleconferenceDeviceQuality: (...args) => callOperation("communications.calls.logTeleconferenceDeviceQuality", ...(args as TeamsGraphOperationArgs<"communications.calls.logTeleconferenceDeviceQuality">)),
  };
}
