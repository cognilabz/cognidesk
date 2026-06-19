// Generated endpoint chunk for ElevenLabsFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  ElevenLabsGeneratedOperationCaller,
  ElevenLabsFullApiOperationArgs,
  ElevenLabsFullApiOperationInput,
  ElevenLabsFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { ElevenLabsFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const ElevenLabsFullApiStudioOperationKeys = [
  "POST /v1/studio/podcasts",
  "POST /v1/studio/projects/{project_id}/pronunciation-dictionaries",
  "GET /v1/studio/projects",
  "POST /v1/studio/projects",
  "POST /v1/studio/projects/{project_id}",
  "GET /v1/studio/projects/{project_id}",
  "DELETE /v1/studio/projects/{project_id}",
  "POST /v1/studio/projects/{project_id}/content",
  "POST /v1/studio/projects/{project_id}/convert",
  "GET /v1/studio/projects/{project_id}/snapshots",
  "GET /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}",
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/stream",
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/archive",
  "GET /v1/studio/projects/{project_id}/chapters",
  "POST /v1/studio/projects/{project_id}/chapters",
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}",
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}",
  "DELETE /v1/studio/projects/{project_id}/chapters/{chapter_id}",
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/convert",
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots",
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}",
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream",
  "GET /v1/studio/projects/{project_id}/muted-tracks"
] as const;
export type ElevenLabsFullApiStudioOperationKey = typeof ElevenLabsFullApiStudioOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiStudioOperationPathParamMap {
  "POST /v1/studio/podcasts": {};
  "POST /v1/studio/projects/{project_id}/pronunciation-dictionaries": { "project_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/studio/projects": {};
  "POST /v1/studio/projects": {};
  "POST /v1/studio/projects/{project_id}": { "project_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/studio/projects/{project_id}": { "project_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/studio/projects/{project_id}": { "project_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/studio/projects/{project_id}/content": { "project_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/studio/projects/{project_id}/convert": { "project_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/studio/projects/{project_id}/snapshots": { "project_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}": { "project_id": ElevenLabsFullApiPathParamValue; "project_snapshot_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/stream": { "project_id": ElevenLabsFullApiPathParamValue; "project_snapshot_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/archive": { "project_id": ElevenLabsFullApiPathParamValue; "project_snapshot_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/studio/projects/{project_id}/chapters": { "project_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/studio/projects/{project_id}/chapters": { "project_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}": { "project_id": ElevenLabsFullApiPathParamValue; "chapter_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}": { "project_id": ElevenLabsFullApiPathParamValue; "chapter_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/studio/projects/{project_id}/chapters/{chapter_id}": { "project_id": ElevenLabsFullApiPathParamValue; "chapter_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/convert": { "project_id": ElevenLabsFullApiPathParamValue; "chapter_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots": { "project_id": ElevenLabsFullApiPathParamValue; "chapter_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}": { "project_id": ElevenLabsFullApiPathParamValue; "chapter_id": ElevenLabsFullApiPathParamValue; "chapter_snapshot_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream": { "project_id": ElevenLabsFullApiPathParamValue; "chapter_id": ElevenLabsFullApiPathParamValue; "chapter_snapshot_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/studio/projects/{project_id}/muted-tracks": { "project_id": ElevenLabsFullApiPathParamValue };
}

export interface ElevenLabsFullApiStudioOperationRequestMap {
  "POST /v1/studio/podcasts": ElevenLabsFullApiOperationInput<"POST /v1/studio/podcasts">;
  "POST /v1/studio/projects/{project_id}/pronunciation-dictionaries": ElevenLabsFullApiOperationInput<"POST /v1/studio/projects/{project_id}/pronunciation-dictionaries">;
  "GET /v1/studio/projects": ElevenLabsFullApiOperationInput<"GET /v1/studio/projects">;
  "POST /v1/studio/projects": ElevenLabsFullApiOperationInput<"POST /v1/studio/projects">;
  "POST /v1/studio/projects/{project_id}": ElevenLabsFullApiOperationInput<"POST /v1/studio/projects/{project_id}">;
  "GET /v1/studio/projects/{project_id}": ElevenLabsFullApiOperationInput<"GET /v1/studio/projects/{project_id}">;
  "DELETE /v1/studio/projects/{project_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/studio/projects/{project_id}">;
  "POST /v1/studio/projects/{project_id}/content": ElevenLabsFullApiOperationInput<"POST /v1/studio/projects/{project_id}/content">;
  "POST /v1/studio/projects/{project_id}/convert": ElevenLabsFullApiOperationInput<"POST /v1/studio/projects/{project_id}/convert">;
  "GET /v1/studio/projects/{project_id}/snapshots": ElevenLabsFullApiOperationInput<"GET /v1/studio/projects/{project_id}/snapshots">;
  "GET /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}": ElevenLabsFullApiOperationInput<"GET /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}">;
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/stream": ElevenLabsFullApiOperationInput<"POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/stream">;
  "POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/archive": ElevenLabsFullApiOperationInput<"POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/archive">;
  "GET /v1/studio/projects/{project_id}/chapters": ElevenLabsFullApiOperationInput<"GET /v1/studio/projects/{project_id}/chapters">;
  "POST /v1/studio/projects/{project_id}/chapters": ElevenLabsFullApiOperationInput<"POST /v1/studio/projects/{project_id}/chapters">;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}": ElevenLabsFullApiOperationInput<"GET /v1/studio/projects/{project_id}/chapters/{chapter_id}">;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}": ElevenLabsFullApiOperationInput<"POST /v1/studio/projects/{project_id}/chapters/{chapter_id}">;
  "DELETE /v1/studio/projects/{project_id}/chapters/{chapter_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/studio/projects/{project_id}/chapters/{chapter_id}">;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/convert": ElevenLabsFullApiOperationInput<"POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/convert">;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots": ElevenLabsFullApiOperationInput<"GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots">;
  "GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}": ElevenLabsFullApiOperationInput<"GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}">;
  "POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream": ElevenLabsFullApiOperationInput<"POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream">;
  "GET /v1/studio/projects/{project_id}/muted-tracks": ElevenLabsFullApiOperationInput<"GET /v1/studio/projects/{project_id}/muted-tracks">;
}

export interface ElevenLabsFullApiStudioGeneratedClient {
  CreatePodcast(...args: ElevenLabsFullApiOperationArgs<"POST /v1/studio/podcasts">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/studio/podcasts"]>;
  UpdatePronunciationDictionaries(...args: ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/pronunciation-dictionaries">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/studio/projects/{project_id}/pronunciation-dictionaries"]>;
  GetProjects(...args: ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/studio/projects"]>;
  AddProject(...args: ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/studio/projects"]>;
  EditProject(...args: ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/studio/projects/{project_id}"]>;
  GetProjectById(...args: ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/studio/projects/{project_id}"]>;
  DeleteProject(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/studio/projects/{project_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/studio/projects/{project_id}"]>;
  EditProjectContent(...args: ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/content">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/studio/projects/{project_id}/content"]>;
  ConvertProjectEndpoint(...args: ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/convert">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/studio/projects/{project_id}/convert"]>;
  GetProjectSnapshots(...args: ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}/snapshots">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/studio/projects/{project_id}/snapshots"]>;
  GetProjectSnapshotEndpoint(...args: ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}"]>;
  StreamProjectSnapshotAudioEndpoint(...args: ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/stream">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/stream"]>;
  StreamProjectSnapshotArchiveEndpoint(...args: ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/archive">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/archive"]>;
  GetChapters(...args: ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}/chapters">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/studio/projects/{project_id}/chapters"]>;
  AddChapter(...args: ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/chapters">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/studio/projects/{project_id}/chapters"]>;
  GetChapterByIdEndpoint(...args: ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}/chapters/{chapter_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/studio/projects/{project_id}/chapters/{chapter_id}"]>;
  EditChapter(...args: ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/chapters/{chapter_id}">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/studio/projects/{project_id}/chapters/{chapter_id}"]>;
  DeleteChapterEndpoint(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/studio/projects/{project_id}/chapters/{chapter_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/studio/projects/{project_id}/chapters/{chapter_id}"]>;
  ConvertChapterEndpoint(...args: ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/convert">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/convert"]>;
  GetChapterSnapshots(...args: ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots"]>;
  GetChapterSnapshotEndpoint(...args: ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}"]>;
  StreamChapterSnapshotAudio(...args: ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream"]>;
  GetProjectMutedTracksEndpoint(...args: ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}/muted-tracks">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/studio/projects/{project_id}/muted-tracks"]>;
}

export const ElevenLabsFullApiStudioGeneratedFunctionNames = [
  "CreatePodcast",
  "UpdatePronunciationDictionaries",
  "GetProjects",
  "AddProject",
  "EditProject",
  "GetProjectById",
  "DeleteProject",
  "EditProjectContent",
  "ConvertProjectEndpoint",
  "GetProjectSnapshots",
  "GetProjectSnapshotEndpoint",
  "StreamProjectSnapshotAudioEndpoint",
  "StreamProjectSnapshotArchiveEndpoint",
  "GetChapters",
  "AddChapter",
  "GetChapterByIdEndpoint",
  "EditChapter",
  "DeleteChapterEndpoint",
  "ConvertChapterEndpoint",
  "GetChapterSnapshots",
  "GetChapterSnapshotEndpoint",
  "StreamChapterSnapshotAudio",
  "GetProjectMutedTracksEndpoint"
] as const satisfies readonly (keyof ElevenLabsFullApiStudioGeneratedClient)[];

export function createElevenLabsFullApiStudioGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiStudioGeneratedClient {
  return {
    CreatePodcast: (...args) => callOperation("POST /v1/studio/podcasts", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/studio/podcasts">)),
    UpdatePronunciationDictionaries: (...args) => callOperation("POST /v1/studio/projects/{project_id}/pronunciation-dictionaries", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/pronunciation-dictionaries">)),
    GetProjects: (...args) => callOperation("GET /v1/studio/projects", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects">)),
    AddProject: (...args) => callOperation("POST /v1/studio/projects", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects">)),
    EditProject: (...args) => callOperation("POST /v1/studio/projects/{project_id}", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}">)),
    GetProjectById: (...args) => callOperation("GET /v1/studio/projects/{project_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}">)),
    DeleteProject: (...args) => callOperation("DELETE /v1/studio/projects/{project_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/studio/projects/{project_id}">)),
    EditProjectContent: (...args) => callOperation("POST /v1/studio/projects/{project_id}/content", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/content">)),
    ConvertProjectEndpoint: (...args) => callOperation("POST /v1/studio/projects/{project_id}/convert", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/convert">)),
    GetProjectSnapshots: (...args) => callOperation("GET /v1/studio/projects/{project_id}/snapshots", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}/snapshots">)),
    GetProjectSnapshotEndpoint: (...args) => callOperation("GET /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}">)),
    StreamProjectSnapshotAudioEndpoint: (...args) => callOperation("POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/stream", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/stream">)),
    StreamProjectSnapshotArchiveEndpoint: (...args) => callOperation("POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/archive", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/snapshots/{project_snapshot_id}/archive">)),
    GetChapters: (...args) => callOperation("GET /v1/studio/projects/{project_id}/chapters", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}/chapters">)),
    AddChapter: (...args) => callOperation("POST /v1/studio/projects/{project_id}/chapters", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/chapters">)),
    GetChapterByIdEndpoint: (...args) => callOperation("GET /v1/studio/projects/{project_id}/chapters/{chapter_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}/chapters/{chapter_id}">)),
    EditChapter: (...args) => callOperation("POST /v1/studio/projects/{project_id}/chapters/{chapter_id}", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/chapters/{chapter_id}">)),
    DeleteChapterEndpoint: (...args) => callOperation("DELETE /v1/studio/projects/{project_id}/chapters/{chapter_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/studio/projects/{project_id}/chapters/{chapter_id}">)),
    ConvertChapterEndpoint: (...args) => callOperation("POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/convert", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/convert">)),
    GetChapterSnapshots: (...args) => callOperation("GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots">)),
    GetChapterSnapshotEndpoint: (...args) => callOperation("GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}">)),
    StreamChapterSnapshotAudio: (...args) => callOperation("POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/studio/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream">)),
    GetProjectMutedTracksEndpoint: (...args) => callOperation("GET /v1/studio/projects/{project_id}/muted-tracks", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/studio/projects/{project_id}/muted-tracks">)),
  };
}
