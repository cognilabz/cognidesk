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
export const ElevenLabsFullApiVoicesOperationKeys = [
  "GET /v1/voices/settings/default",
  "GET /v1/voices/{voice_id}/settings",
  "POST /v1/voices/{voice_id}/settings/edit",
  "GET /v1/voices",
  "GET /v1/voices/{voice_id}",
  "DELETE /v1/voices/{voice_id}",
  "GET /v2/voices",
  "POST /v1/voices/add",
  "POST /v1/voices/{voice_id}/edit",
  "POST /v1/voices/add/{public_user_id}/{voice_id}",
  "GET /v1/shared-voices",
  "POST /v1/similar-voices"
] as const;
export type ElevenLabsFullApiVoicesOperationKey = typeof ElevenLabsFullApiVoicesOperationKeys[number];
// End hardened literal operation keys.

export interface ElevenLabsFullApiVoicesOperationPathParamMap {
  "GET /v1/voices/settings/default": {};
  "GET /v1/voices/{voice_id}/settings": { "voice_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/voices/{voice_id}/settings/edit": { "voice_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/voices": {};
  "GET /v1/voices/{voice_id}": { "voice_id": ElevenLabsFullApiPathParamValue };
  "DELETE /v1/voices/{voice_id}": { "voice_id": ElevenLabsFullApiPathParamValue };
  "GET /v2/voices": {};
  "POST /v1/voices/add": {};
  "POST /v1/voices/{voice_id}/edit": { "voice_id": ElevenLabsFullApiPathParamValue };
  "POST /v1/voices/add/{public_user_id}/{voice_id}": { "public_user_id": ElevenLabsFullApiPathParamValue; "voice_id": ElevenLabsFullApiPathParamValue };
  "GET /v1/shared-voices": {};
  "POST /v1/similar-voices": {};
}

export interface ElevenLabsFullApiVoicesOperationRequestMap {
  "GET /v1/voices/settings/default": ElevenLabsFullApiOperationInput<"GET /v1/voices/settings/default">;
  "GET /v1/voices/{voice_id}/settings": ElevenLabsFullApiOperationInput<"GET /v1/voices/{voice_id}/settings">;
  "POST /v1/voices/{voice_id}/settings/edit": ElevenLabsFullApiOperationInput<"POST /v1/voices/{voice_id}/settings/edit">;
  "GET /v1/voices": ElevenLabsFullApiOperationInput<"GET /v1/voices">;
  "GET /v1/voices/{voice_id}": ElevenLabsFullApiOperationInput<"GET /v1/voices/{voice_id}">;
  "DELETE /v1/voices/{voice_id}": ElevenLabsFullApiOperationInput<"DELETE /v1/voices/{voice_id}">;
  "GET /v2/voices": ElevenLabsFullApiOperationInput<"GET /v2/voices">;
  "POST /v1/voices/add": ElevenLabsFullApiOperationInput<"POST /v1/voices/add">;
  "POST /v1/voices/{voice_id}/edit": ElevenLabsFullApiOperationInput<"POST /v1/voices/{voice_id}/edit">;
  "POST /v1/voices/add/{public_user_id}/{voice_id}": ElevenLabsFullApiOperationInput<"POST /v1/voices/add/{public_user_id}/{voice_id}">;
  "GET /v1/shared-voices": ElevenLabsFullApiOperationInput<"GET /v1/shared-voices">;
  "POST /v1/similar-voices": ElevenLabsFullApiOperationInput<"POST /v1/similar-voices">;
}

export interface ElevenLabsFullApiVoicesGeneratedClient {
  GetVoiceSettingsDefault(...args: ElevenLabsFullApiOperationArgs<"GET /v1/voices/settings/default">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/voices/settings/default"]>;
  GetVoiceSettings(...args: ElevenLabsFullApiOperationArgs<"GET /v1/voices/{voice_id}/settings">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/voices/{voice_id}/settings"]>;
  EditVoiceSettings(...args: ElevenLabsFullApiOperationArgs<"POST /v1/voices/{voice_id}/settings/edit">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/voices/{voice_id}/settings/edit"]>;
  GetVoices(...args: ElevenLabsFullApiOperationArgs<"GET /v1/voices">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/voices"]>;
  GetVoiceById(...args: ElevenLabsFullApiOperationArgs<"GET /v1/voices/{voice_id}">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/voices/{voice_id}"]>;
  DeleteVoice(...args: ElevenLabsFullApiOperationArgs<"DELETE /v1/voices/{voice_id}">): Promise<ElevenLabsFullApiOperationResponseMap["DELETE /v1/voices/{voice_id}"]>;
  GetUserVoicesV2(...args: ElevenLabsFullApiOperationArgs<"GET /v2/voices">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v2/voices"]>;
  AddVoice(...args: ElevenLabsFullApiOperationArgs<"POST /v1/voices/add">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/voices/add"]>;
  EditVoice(...args: ElevenLabsFullApiOperationArgs<"POST /v1/voices/{voice_id}/edit">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/voices/{voice_id}/edit"]>;
  AddSharingVoice(...args: ElevenLabsFullApiOperationArgs<"POST /v1/voices/add/{public_user_id}/{voice_id}">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/voices/add/{public_user_id}/{voice_id}"]>;
  GetLibraryVoices(...args: ElevenLabsFullApiOperationArgs<"GET /v1/shared-voices">): Promise<ElevenLabsFullApiOperationResponseMap["GET /v1/shared-voices"]>;
  GetSimilarLibraryVoices(...args: ElevenLabsFullApiOperationArgs<"POST /v1/similar-voices">): Promise<ElevenLabsFullApiOperationResponseMap["POST /v1/similar-voices"]>;
}

export const ElevenLabsFullApiVoicesGeneratedFunctionNames = [
  "GetVoiceSettingsDefault",
  "GetVoiceSettings",
  "EditVoiceSettings",
  "GetVoices",
  "GetVoiceById",
  "DeleteVoice",
  "GetUserVoicesV2",
  "AddVoice",
  "EditVoice",
  "AddSharingVoice",
  "GetLibraryVoices",
  "GetSimilarLibraryVoices"
] as const satisfies readonly (keyof ElevenLabsFullApiVoicesGeneratedClient)[];

export function createElevenLabsFullApiVoicesGeneratedClient(
  callOperation: ElevenLabsGeneratedOperationCaller,
): ElevenLabsFullApiVoicesGeneratedClient {
  return {
    GetVoiceSettingsDefault: (...args) => callOperation("GET /v1/voices/settings/default", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/voices/settings/default">)),
    GetVoiceSettings: (...args) => callOperation("GET /v1/voices/{voice_id}/settings", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/voices/{voice_id}/settings">)),
    EditVoiceSettings: (...args) => callOperation("POST /v1/voices/{voice_id}/settings/edit", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/voices/{voice_id}/settings/edit">)),
    GetVoices: (...args) => callOperation("GET /v1/voices", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/voices">)),
    GetVoiceById: (...args) => callOperation("GET /v1/voices/{voice_id}", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/voices/{voice_id}">)),
    DeleteVoice: (...args) => callOperation("DELETE /v1/voices/{voice_id}", ...(args as ElevenLabsFullApiOperationArgs<"DELETE /v1/voices/{voice_id}">)),
    GetUserVoicesV2: (...args) => callOperation("GET /v2/voices", ...(args as ElevenLabsFullApiOperationArgs<"GET /v2/voices">)),
    AddVoice: (...args) => callOperation("POST /v1/voices/add", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/voices/add">)),
    EditVoice: (...args) => callOperation("POST /v1/voices/{voice_id}/edit", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/voices/{voice_id}/edit">)),
    AddSharingVoice: (...args) => callOperation("POST /v1/voices/add/{public_user_id}/{voice_id}", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/voices/add/{public_user_id}/{voice_id}">)),
    GetLibraryVoices: (...args) => callOperation("GET /v1/shared-voices", ...(args as ElevenLabsFullApiOperationArgs<"GET /v1/shared-voices">)),
    GetSimilarLibraryVoices: (...args) => callOperation("POST /v1/similar-voices", ...(args as ElevenLabsFullApiOperationArgs<"POST /v1/similar-voices">)),
  };
}
