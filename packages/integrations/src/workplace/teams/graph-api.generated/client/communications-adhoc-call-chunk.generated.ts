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
export const TeamsGraphCommunicationsAdhocCallOperationKeys = [
  "communications.ListAdhocCalls",
  "communications.CreateAdhocCalls",
  "communications.GetAdhocCalls",
  "communications.UpdateAdhocCalls",
  "communications.DeleteAdhocCalls",
  "communications.adhocCalls.ListRecordings",
  "communications.adhocCalls.CreateRecordings",
  "communications.adhocCalls.GetRecordings",
  "communications.adhocCalls.UpdateRecordings",
  "communications.adhocCalls.DeleteRecordings",
  "communications.adhocCalls.GetRecordingsContent",
  "communications.adhocCalls.UpdateRecordingsContent",
  "communications.adhocCalls.DeleteRecordingsContent",
  "communications.adhocCalls.recordings.GetCount-6c48",
  "communications.adhocCalls.adhocCall.recordings.delta",
  "communications.adhocCalls.ListTranscripts",
  "communications.adhocCalls.CreateTranscripts",
  "communications.adhocCalls.GetTranscripts",
  "communications.adhocCalls.UpdateTranscripts",
  "communications.adhocCalls.DeleteTranscripts",
  "communications.adhocCalls.GetTranscriptsContent",
  "communications.adhocCalls.UpdateTranscriptsContent",
  "communications.adhocCalls.DeleteTranscriptsContent",
  "communications.adhocCalls.GetTranscriptsMetadataContent",
  "communications.adhocCalls.UpdateTranscriptsMetadataContent",
  "communications.adhocCalls.DeleteTranscriptsMetadataContent",
  "communications.adhocCalls.transcripts.GetCount-c91e",
  "communications.adhocCalls.adhocCall.transcripts.delta",
  "communications.adhocCalls.GetCount-c122",
  "communications.adhocCalls.getAllRecordings",
  "communications.adhocCalls.getAllTranscripts"
] as const;
export type TeamsGraphCommunicationsAdhocCallOperationKey = typeof TeamsGraphCommunicationsAdhocCallOperationKeys[number];
// End hardened literal operation keys.

export interface TeamsGraphCommunicationsAdhocCallOperationPathParamMap {
  "communications.ListAdhocCalls": {};
  "communications.CreateAdhocCalls": {};
  "communications.GetAdhocCalls": { "adhocCall-id": TeamsGraphPathParamValue };
  "communications.UpdateAdhocCalls": { "adhocCall-id": TeamsGraphPathParamValue };
  "communications.DeleteAdhocCalls": { "adhocCall-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.ListRecordings": { "adhocCall-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.CreateRecordings": { "adhocCall-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.GetRecordings": { "adhocCall-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.UpdateRecordings": { "adhocCall-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.DeleteRecordings": { "adhocCall-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.GetRecordingsContent": { "adhocCall-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.UpdateRecordingsContent": { "adhocCall-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.DeleteRecordingsContent": { "adhocCall-id": TeamsGraphPathParamValue; "callRecording-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.recordings.GetCount-6c48": { "adhocCall-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.adhocCall.recordings.delta": { "adhocCall-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.ListTranscripts": { "adhocCall-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.CreateTranscripts": { "adhocCall-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.GetTranscripts": { "adhocCall-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.UpdateTranscripts": { "adhocCall-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.DeleteTranscripts": { "adhocCall-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.GetTranscriptsContent": { "adhocCall-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.UpdateTranscriptsContent": { "adhocCall-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.DeleteTranscriptsContent": { "adhocCall-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.GetTranscriptsMetadataContent": { "adhocCall-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.UpdateTranscriptsMetadataContent": { "adhocCall-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.DeleteTranscriptsMetadataContent": { "adhocCall-id": TeamsGraphPathParamValue; "callTranscript-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.transcripts.GetCount-c91e": { "adhocCall-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.adhocCall.transcripts.delta": { "adhocCall-id": TeamsGraphPathParamValue };
  "communications.adhocCalls.GetCount-c122": {};
  "communications.adhocCalls.getAllRecordings": {};
  "communications.adhocCalls.getAllTranscripts": {};
}

export interface TeamsGraphCommunicationsAdhocCallOperationRequestMap {
  "communications.ListAdhocCalls": TeamsGraphOperationInput<"communications.ListAdhocCalls">;
  "communications.CreateAdhocCalls": TeamsGraphOperationInput<"communications.CreateAdhocCalls">;
  "communications.GetAdhocCalls": TeamsGraphOperationInput<"communications.GetAdhocCalls">;
  "communications.UpdateAdhocCalls": TeamsGraphOperationInput<"communications.UpdateAdhocCalls">;
  "communications.DeleteAdhocCalls": TeamsGraphOperationInput<"communications.DeleteAdhocCalls">;
  "communications.adhocCalls.ListRecordings": TeamsGraphOperationInput<"communications.adhocCalls.ListRecordings">;
  "communications.adhocCalls.CreateRecordings": TeamsGraphOperationInput<"communications.adhocCalls.CreateRecordings">;
  "communications.adhocCalls.GetRecordings": TeamsGraphOperationInput<"communications.adhocCalls.GetRecordings">;
  "communications.adhocCalls.UpdateRecordings": TeamsGraphOperationInput<"communications.adhocCalls.UpdateRecordings">;
  "communications.adhocCalls.DeleteRecordings": TeamsGraphOperationInput<"communications.adhocCalls.DeleteRecordings">;
  "communications.adhocCalls.GetRecordingsContent": TeamsGraphOperationInput<"communications.adhocCalls.GetRecordingsContent">;
  "communications.adhocCalls.UpdateRecordingsContent": TeamsGraphOperationInput<"communications.adhocCalls.UpdateRecordingsContent">;
  "communications.adhocCalls.DeleteRecordingsContent": TeamsGraphOperationInput<"communications.adhocCalls.DeleteRecordingsContent">;
  "communications.adhocCalls.recordings.GetCount-6c48": TeamsGraphOperationInput<"communications.adhocCalls.recordings.GetCount-6c48">;
  "communications.adhocCalls.adhocCall.recordings.delta": TeamsGraphOperationInput<"communications.adhocCalls.adhocCall.recordings.delta">;
  "communications.adhocCalls.ListTranscripts": TeamsGraphOperationInput<"communications.adhocCalls.ListTranscripts">;
  "communications.adhocCalls.CreateTranscripts": TeamsGraphOperationInput<"communications.adhocCalls.CreateTranscripts">;
  "communications.adhocCalls.GetTranscripts": TeamsGraphOperationInput<"communications.adhocCalls.GetTranscripts">;
  "communications.adhocCalls.UpdateTranscripts": TeamsGraphOperationInput<"communications.adhocCalls.UpdateTranscripts">;
  "communications.adhocCalls.DeleteTranscripts": TeamsGraphOperationInput<"communications.adhocCalls.DeleteTranscripts">;
  "communications.adhocCalls.GetTranscriptsContent": TeamsGraphOperationInput<"communications.adhocCalls.GetTranscriptsContent">;
  "communications.adhocCalls.UpdateTranscriptsContent": TeamsGraphOperationInput<"communications.adhocCalls.UpdateTranscriptsContent">;
  "communications.adhocCalls.DeleteTranscriptsContent": TeamsGraphOperationInput<"communications.adhocCalls.DeleteTranscriptsContent">;
  "communications.adhocCalls.GetTranscriptsMetadataContent": TeamsGraphOperationInput<"communications.adhocCalls.GetTranscriptsMetadataContent">;
  "communications.adhocCalls.UpdateTranscriptsMetadataContent": TeamsGraphOperationInput<"communications.adhocCalls.UpdateTranscriptsMetadataContent">;
  "communications.adhocCalls.DeleteTranscriptsMetadataContent": TeamsGraphOperationInput<"communications.adhocCalls.DeleteTranscriptsMetadataContent">;
  "communications.adhocCalls.transcripts.GetCount-c91e": TeamsGraphOperationInput<"communications.adhocCalls.transcripts.GetCount-c91e">;
  "communications.adhocCalls.adhocCall.transcripts.delta": TeamsGraphOperationInput<"communications.adhocCalls.adhocCall.transcripts.delta">;
  "communications.adhocCalls.GetCount-c122": TeamsGraphOperationInput<"communications.adhocCalls.GetCount-c122">;
  "communications.adhocCalls.getAllRecordings": TeamsGraphOperationInput<"communications.adhocCalls.getAllRecordings">;
  "communications.adhocCalls.getAllTranscripts": TeamsGraphOperationInput<"communications.adhocCalls.getAllTranscripts">;
}

export interface TeamsGraphCommunicationsAdhocCallGeneratedClient {
  CommunicationsListAdhocCalls(...args: TeamsGraphOperationArgs<"communications.ListAdhocCalls">): Promise<TeamsGraphOperationResponseMap["communications.ListAdhocCalls"]>;
  CommunicationsCreateAdhocCalls(...args: TeamsGraphOperationArgs<"communications.CreateAdhocCalls">): Promise<TeamsGraphOperationResponseMap["communications.CreateAdhocCalls"]>;
  CommunicationsGetAdhocCalls(...args: TeamsGraphOperationArgs<"communications.GetAdhocCalls">): Promise<TeamsGraphOperationResponseMap["communications.GetAdhocCalls"]>;
  CommunicationsUpdateAdhocCalls(...args: TeamsGraphOperationArgs<"communications.UpdateAdhocCalls">): Promise<TeamsGraphOperationResponseMap["communications.UpdateAdhocCalls"]>;
  CommunicationsDeleteAdhocCalls(...args: TeamsGraphOperationArgs<"communications.DeleteAdhocCalls">): Promise<TeamsGraphOperationResponseMap["communications.DeleteAdhocCalls"]>;
  CommunicationsAdhocCallsListRecordings(...args: TeamsGraphOperationArgs<"communications.adhocCalls.ListRecordings">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.ListRecordings"]>;
  CommunicationsAdhocCallsCreateRecordings(...args: TeamsGraphOperationArgs<"communications.adhocCalls.CreateRecordings">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.CreateRecordings"]>;
  CommunicationsAdhocCallsGetRecordings(...args: TeamsGraphOperationArgs<"communications.adhocCalls.GetRecordings">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.GetRecordings"]>;
  CommunicationsAdhocCallsUpdateRecordings(...args: TeamsGraphOperationArgs<"communications.adhocCalls.UpdateRecordings">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.UpdateRecordings"]>;
  CommunicationsAdhocCallsDeleteRecordings(...args: TeamsGraphOperationArgs<"communications.adhocCalls.DeleteRecordings">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.DeleteRecordings"]>;
  CommunicationsAdhocCallsGetRecordingsContent(...args: TeamsGraphOperationArgs<"communications.adhocCalls.GetRecordingsContent">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.GetRecordingsContent"]>;
  CommunicationsAdhocCallsUpdateRecordingsContent(...args: TeamsGraphOperationArgs<"communications.adhocCalls.UpdateRecordingsContent">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.UpdateRecordingsContent"]>;
  CommunicationsAdhocCallsDeleteRecordingsContent(...args: TeamsGraphOperationArgs<"communications.adhocCalls.DeleteRecordingsContent">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.DeleteRecordingsContent"]>;
  CommunicationsAdhocCallsRecordingsGetCount6c48(...args: TeamsGraphOperationArgs<"communications.adhocCalls.recordings.GetCount-6c48">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.recordings.GetCount-6c48"]>;
  CommunicationsAdhocCallsAdhocCallRecordingsDelta(...args: TeamsGraphOperationArgs<"communications.adhocCalls.adhocCall.recordings.delta">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.adhocCall.recordings.delta"]>;
  CommunicationsAdhocCallsListTranscripts(...args: TeamsGraphOperationArgs<"communications.adhocCalls.ListTranscripts">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.ListTranscripts"]>;
  CommunicationsAdhocCallsCreateTranscripts(...args: TeamsGraphOperationArgs<"communications.adhocCalls.CreateTranscripts">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.CreateTranscripts"]>;
  CommunicationsAdhocCallsGetTranscripts(...args: TeamsGraphOperationArgs<"communications.adhocCalls.GetTranscripts">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.GetTranscripts"]>;
  CommunicationsAdhocCallsUpdateTranscripts(...args: TeamsGraphOperationArgs<"communications.adhocCalls.UpdateTranscripts">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.UpdateTranscripts"]>;
  CommunicationsAdhocCallsDeleteTranscripts(...args: TeamsGraphOperationArgs<"communications.adhocCalls.DeleteTranscripts">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.DeleteTranscripts"]>;
  CommunicationsAdhocCallsGetTranscriptsContent(...args: TeamsGraphOperationArgs<"communications.adhocCalls.GetTranscriptsContent">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.GetTranscriptsContent"]>;
  CommunicationsAdhocCallsUpdateTranscriptsContent(...args: TeamsGraphOperationArgs<"communications.adhocCalls.UpdateTranscriptsContent">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.UpdateTranscriptsContent"]>;
  CommunicationsAdhocCallsDeleteTranscriptsContent(...args: TeamsGraphOperationArgs<"communications.adhocCalls.DeleteTranscriptsContent">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.DeleteTranscriptsContent"]>;
  CommunicationsAdhocCallsGetTranscriptsMetadataContent(...args: TeamsGraphOperationArgs<"communications.adhocCalls.GetTranscriptsMetadataContent">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.GetTranscriptsMetadataContent"]>;
  CommunicationsAdhocCallsUpdateTranscriptsMetadataContent(...args: TeamsGraphOperationArgs<"communications.adhocCalls.UpdateTranscriptsMetadataContent">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.UpdateTranscriptsMetadataContent"]>;
  CommunicationsAdhocCallsDeleteTranscriptsMetadataContent(...args: TeamsGraphOperationArgs<"communications.adhocCalls.DeleteTranscriptsMetadataContent">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.DeleteTranscriptsMetadataContent"]>;
  CommunicationsAdhocCallsTranscriptsGetCountC91e(...args: TeamsGraphOperationArgs<"communications.adhocCalls.transcripts.GetCount-c91e">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.transcripts.GetCount-c91e"]>;
  CommunicationsAdhocCallsAdhocCallTranscriptsDelta(...args: TeamsGraphOperationArgs<"communications.adhocCalls.adhocCall.transcripts.delta">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.adhocCall.transcripts.delta"]>;
  CommunicationsAdhocCallsGetCountC122(...args: TeamsGraphOperationArgs<"communications.adhocCalls.GetCount-c122">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.GetCount-c122"]>;
  CommunicationsAdhocCallsGetAllRecordings(...args: TeamsGraphOperationArgs<"communications.adhocCalls.getAllRecordings">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.getAllRecordings"]>;
  CommunicationsAdhocCallsGetAllTranscripts(...args: TeamsGraphOperationArgs<"communications.adhocCalls.getAllTranscripts">): Promise<TeamsGraphOperationResponseMap["communications.adhocCalls.getAllTranscripts"]>;
}

export const TeamsGraphCommunicationsAdhocCallGeneratedFunctionNames = [
  "CommunicationsListAdhocCalls",
  "CommunicationsCreateAdhocCalls",
  "CommunicationsGetAdhocCalls",
  "CommunicationsUpdateAdhocCalls",
  "CommunicationsDeleteAdhocCalls",
  "CommunicationsAdhocCallsListRecordings",
  "CommunicationsAdhocCallsCreateRecordings",
  "CommunicationsAdhocCallsGetRecordings",
  "CommunicationsAdhocCallsUpdateRecordings",
  "CommunicationsAdhocCallsDeleteRecordings",
  "CommunicationsAdhocCallsGetRecordingsContent",
  "CommunicationsAdhocCallsUpdateRecordingsContent",
  "CommunicationsAdhocCallsDeleteRecordingsContent",
  "CommunicationsAdhocCallsRecordingsGetCount6c48",
  "CommunicationsAdhocCallsAdhocCallRecordingsDelta",
  "CommunicationsAdhocCallsListTranscripts",
  "CommunicationsAdhocCallsCreateTranscripts",
  "CommunicationsAdhocCallsGetTranscripts",
  "CommunicationsAdhocCallsUpdateTranscripts",
  "CommunicationsAdhocCallsDeleteTranscripts",
  "CommunicationsAdhocCallsGetTranscriptsContent",
  "CommunicationsAdhocCallsUpdateTranscriptsContent",
  "CommunicationsAdhocCallsDeleteTranscriptsContent",
  "CommunicationsAdhocCallsGetTranscriptsMetadataContent",
  "CommunicationsAdhocCallsUpdateTranscriptsMetadataContent",
  "CommunicationsAdhocCallsDeleteTranscriptsMetadataContent",
  "CommunicationsAdhocCallsTranscriptsGetCountC91e",
  "CommunicationsAdhocCallsAdhocCallTranscriptsDelta",
  "CommunicationsAdhocCallsGetCountC122",
  "CommunicationsAdhocCallsGetAllRecordings",
  "CommunicationsAdhocCallsGetAllTranscripts"
] as const satisfies readonly (keyof TeamsGraphCommunicationsAdhocCallGeneratedClient)[];

export function createTeamsGraphCommunicationsAdhocCallGeneratedClient(
  callOperation: TeamsGraphGeneratedOperationCaller,
): TeamsGraphCommunicationsAdhocCallGeneratedClient {
  return {
    CommunicationsListAdhocCalls: (...args) => callOperation("communications.ListAdhocCalls", ...(args as TeamsGraphOperationArgs<"communications.ListAdhocCalls">)),
    CommunicationsCreateAdhocCalls: (...args) => callOperation("communications.CreateAdhocCalls", ...(args as TeamsGraphOperationArgs<"communications.CreateAdhocCalls">)),
    CommunicationsGetAdhocCalls: (...args) => callOperation("communications.GetAdhocCalls", ...(args as TeamsGraphOperationArgs<"communications.GetAdhocCalls">)),
    CommunicationsUpdateAdhocCalls: (...args) => callOperation("communications.UpdateAdhocCalls", ...(args as TeamsGraphOperationArgs<"communications.UpdateAdhocCalls">)),
    CommunicationsDeleteAdhocCalls: (...args) => callOperation("communications.DeleteAdhocCalls", ...(args as TeamsGraphOperationArgs<"communications.DeleteAdhocCalls">)),
    CommunicationsAdhocCallsListRecordings: (...args) => callOperation("communications.adhocCalls.ListRecordings", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.ListRecordings">)),
    CommunicationsAdhocCallsCreateRecordings: (...args) => callOperation("communications.adhocCalls.CreateRecordings", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.CreateRecordings">)),
    CommunicationsAdhocCallsGetRecordings: (...args) => callOperation("communications.adhocCalls.GetRecordings", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.GetRecordings">)),
    CommunicationsAdhocCallsUpdateRecordings: (...args) => callOperation("communications.adhocCalls.UpdateRecordings", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.UpdateRecordings">)),
    CommunicationsAdhocCallsDeleteRecordings: (...args) => callOperation("communications.adhocCalls.DeleteRecordings", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.DeleteRecordings">)),
    CommunicationsAdhocCallsGetRecordingsContent: (...args) => callOperation("communications.adhocCalls.GetRecordingsContent", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.GetRecordingsContent">)),
    CommunicationsAdhocCallsUpdateRecordingsContent: (...args) => callOperation("communications.adhocCalls.UpdateRecordingsContent", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.UpdateRecordingsContent">)),
    CommunicationsAdhocCallsDeleteRecordingsContent: (...args) => callOperation("communications.adhocCalls.DeleteRecordingsContent", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.DeleteRecordingsContent">)),
    CommunicationsAdhocCallsRecordingsGetCount6c48: (...args) => callOperation("communications.adhocCalls.recordings.GetCount-6c48", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.recordings.GetCount-6c48">)),
    CommunicationsAdhocCallsAdhocCallRecordingsDelta: (...args) => callOperation("communications.adhocCalls.adhocCall.recordings.delta", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.adhocCall.recordings.delta">)),
    CommunicationsAdhocCallsListTranscripts: (...args) => callOperation("communications.adhocCalls.ListTranscripts", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.ListTranscripts">)),
    CommunicationsAdhocCallsCreateTranscripts: (...args) => callOperation("communications.adhocCalls.CreateTranscripts", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.CreateTranscripts">)),
    CommunicationsAdhocCallsGetTranscripts: (...args) => callOperation("communications.adhocCalls.GetTranscripts", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.GetTranscripts">)),
    CommunicationsAdhocCallsUpdateTranscripts: (...args) => callOperation("communications.adhocCalls.UpdateTranscripts", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.UpdateTranscripts">)),
    CommunicationsAdhocCallsDeleteTranscripts: (...args) => callOperation("communications.adhocCalls.DeleteTranscripts", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.DeleteTranscripts">)),
    CommunicationsAdhocCallsGetTranscriptsContent: (...args) => callOperation("communications.adhocCalls.GetTranscriptsContent", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.GetTranscriptsContent">)),
    CommunicationsAdhocCallsUpdateTranscriptsContent: (...args) => callOperation("communications.adhocCalls.UpdateTranscriptsContent", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.UpdateTranscriptsContent">)),
    CommunicationsAdhocCallsDeleteTranscriptsContent: (...args) => callOperation("communications.adhocCalls.DeleteTranscriptsContent", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.DeleteTranscriptsContent">)),
    CommunicationsAdhocCallsGetTranscriptsMetadataContent: (...args) => callOperation("communications.adhocCalls.GetTranscriptsMetadataContent", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.GetTranscriptsMetadataContent">)),
    CommunicationsAdhocCallsUpdateTranscriptsMetadataContent: (...args) => callOperation("communications.adhocCalls.UpdateTranscriptsMetadataContent", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.UpdateTranscriptsMetadataContent">)),
    CommunicationsAdhocCallsDeleteTranscriptsMetadataContent: (...args) => callOperation("communications.adhocCalls.DeleteTranscriptsMetadataContent", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.DeleteTranscriptsMetadataContent">)),
    CommunicationsAdhocCallsTranscriptsGetCountC91e: (...args) => callOperation("communications.adhocCalls.transcripts.GetCount-c91e", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.transcripts.GetCount-c91e">)),
    CommunicationsAdhocCallsAdhocCallTranscriptsDelta: (...args) => callOperation("communications.adhocCalls.adhocCall.transcripts.delta", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.adhocCall.transcripts.delta">)),
    CommunicationsAdhocCallsGetCountC122: (...args) => callOperation("communications.adhocCalls.GetCount-c122", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.GetCount-c122">)),
    CommunicationsAdhocCallsGetAllRecordings: (...args) => callOperation("communications.adhocCalls.getAllRecordings", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.getAllRecordings">)),
    CommunicationsAdhocCallsGetAllTranscripts: (...args) => callOperation("communications.adhocCalls.getAllTranscripts", ...(args as TeamsGraphOperationArgs<"communications.adhocCalls.getAllTranscripts">)),
  };
}
