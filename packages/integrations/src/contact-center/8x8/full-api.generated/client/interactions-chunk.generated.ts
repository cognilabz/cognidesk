// Generated endpoint chunk for EightByEightContactCenterApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  EightByEightGeneratedOperationCaller,
  EightByEightContactCenterApiOperationArgs,
  EightByEightContactCenterApiOperationInput,
  EightByEightContactCenterApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { EightByEightContactCenterApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const EightByEightContactCenterApiInteractionsOperationKeys = [
  "qmsa:GET /interactions/count",
  "qmsa:GET /interactions",
  "qmsa:DELETE /interactions/{interactionGuid}",
  "qmsa:DELETE /interactions/{interactionGuid}/purge",
  "qmsa:PUT /interactions/{interactionGuid}/{customFieldNo}",
  "qmsa:DELETE /interactions/{interactionGuid}/{customFieldNo}",
  "qmsa:GET /interactions/{interactionGuid}/transcriptions",
  "qmsa:GET /interactions/{interactionGuid}/topics",
  "qmsa:GET /interactions/{interactionGuid}/labels",
  "qmsa:GET /interactions/{interactionGuid}/notes",
  "qmsa:GET /interactions/{interactionGuid}/media",
  "qmsa:GET /interactions/redirect"
] as const;
export type EightByEightContactCenterApiInteractionsOperationKey = typeof EightByEightContactCenterApiInteractionsOperationKeys[number];
// End hardened literal operation keys.

export interface EightByEightContactCenterApiInteractionsOperationPathParamMap {
  "qmsa:GET /interactions/count": {};
  "qmsa:GET /interactions": {};
  "qmsa:DELETE /interactions/{interactionGuid}": { "interactionGuid": EightByEightContactCenterApiPathParamValue };
  "qmsa:DELETE /interactions/{interactionGuid}/purge": { "interactionGuid": EightByEightContactCenterApiPathParamValue };
  "qmsa:PUT /interactions/{interactionGuid}/{customFieldNo}": { "interactionGuid": EightByEightContactCenterApiPathParamValue; "customFieldNo": EightByEightContactCenterApiPathParamValue };
  "qmsa:DELETE /interactions/{interactionGuid}/{customFieldNo}": { "interactionGuid": EightByEightContactCenterApiPathParamValue; "customFieldNo": EightByEightContactCenterApiPathParamValue };
  "qmsa:GET /interactions/{interactionGuid}/transcriptions": { "interactionGuid": EightByEightContactCenterApiPathParamValue };
  "qmsa:GET /interactions/{interactionGuid}/topics": { "interactionGuid": EightByEightContactCenterApiPathParamValue };
  "qmsa:GET /interactions/{interactionGuid}/labels": { "interactionGuid": EightByEightContactCenterApiPathParamValue };
  "qmsa:GET /interactions/{interactionGuid}/notes": { "interactionGuid": EightByEightContactCenterApiPathParamValue };
  "qmsa:GET /interactions/{interactionGuid}/media": { "interactionGuid": EightByEightContactCenterApiPathParamValue };
  "qmsa:GET /interactions/redirect": {};
}

export interface EightByEightContactCenterApiInteractionsOperationRequestMap {
  "qmsa:GET /interactions/count": EightByEightContactCenterApiOperationInput<"qmsa:GET /interactions/count">;
  "qmsa:GET /interactions": EightByEightContactCenterApiOperationInput<"qmsa:GET /interactions">;
  "qmsa:DELETE /interactions/{interactionGuid}": EightByEightContactCenterApiOperationInput<"qmsa:DELETE /interactions/{interactionGuid}">;
  "qmsa:DELETE /interactions/{interactionGuid}/purge": EightByEightContactCenterApiOperationInput<"qmsa:DELETE /interactions/{interactionGuid}/purge">;
  "qmsa:PUT /interactions/{interactionGuid}/{customFieldNo}": EightByEightContactCenterApiOperationInput<"qmsa:PUT /interactions/{interactionGuid}/{customFieldNo}">;
  "qmsa:DELETE /interactions/{interactionGuid}/{customFieldNo}": EightByEightContactCenterApiOperationInput<"qmsa:DELETE /interactions/{interactionGuid}/{customFieldNo}">;
  "qmsa:GET /interactions/{interactionGuid}/transcriptions": EightByEightContactCenterApiOperationInput<"qmsa:GET /interactions/{interactionGuid}/transcriptions">;
  "qmsa:GET /interactions/{interactionGuid}/topics": EightByEightContactCenterApiOperationInput<"qmsa:GET /interactions/{interactionGuid}/topics">;
  "qmsa:GET /interactions/{interactionGuid}/labels": EightByEightContactCenterApiOperationInput<"qmsa:GET /interactions/{interactionGuid}/labels">;
  "qmsa:GET /interactions/{interactionGuid}/notes": EightByEightContactCenterApiOperationInput<"qmsa:GET /interactions/{interactionGuid}/notes">;
  "qmsa:GET /interactions/{interactionGuid}/media": EightByEightContactCenterApiOperationInput<"qmsa:GET /interactions/{interactionGuid}/media">;
  "qmsa:GET /interactions/redirect": EightByEightContactCenterApiOperationInput<"qmsa:GET /interactions/redirect">;
}

export interface EightByEightContactCenterApiInteractionsGeneratedClient {
  InteractionsCount(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions/count">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /interactions/count"]>;
  Interactions(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /interactions"]>;
  DeleteInteraction(...args: EightByEightContactCenterApiOperationArgs<"qmsa:DELETE /interactions/{interactionGuid}">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:DELETE /interactions/{interactionGuid}"]>;
  PurgeInteraction(...args: EightByEightContactCenterApiOperationArgs<"qmsa:DELETE /interactions/{interactionGuid}/purge">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:DELETE /interactions/{interactionGuid}/purge"]>;
  UpdateCustomField(...args: EightByEightContactCenterApiOperationArgs<"qmsa:PUT /interactions/{interactionGuid}/{customFieldNo}">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:PUT /interactions/{interactionGuid}/{customFieldNo}"]>;
  DeletesTheCustomField(...args: EightByEightContactCenterApiOperationArgs<"qmsa:DELETE /interactions/{interactionGuid}/{customFieldNo}">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:DELETE /interactions/{interactionGuid}/{customFieldNo}"]>;
  InteractionTranscription(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions/{interactionGuid}/transcriptions">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /interactions/{interactionGuid}/transcriptions"]>;
  Topics(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions/{interactionGuid}/topics">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /interactions/{interactionGuid}/topics"]>;
  Labels(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions/{interactionGuid}/labels">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /interactions/{interactionGuid}/labels"]>;
  Notes(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions/{interactionGuid}/notes">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /interactions/{interactionGuid}/notes"]>;
  InteractionMediaFile(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions/{interactionGuid}/media">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /interactions/{interactionGuid}/media"]>;
  WebpageRedirect(...args: EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions/redirect">): Promise<EightByEightContactCenterApiOperationResponseMap["qmsa:GET /interactions/redirect"]>;
}

export const EightByEightContactCenterApiInteractionsGeneratedFunctionNames = [
  "InteractionsCount",
  "Interactions",
  "DeleteInteraction",
  "PurgeInteraction",
  "UpdateCustomField",
  "DeletesTheCustomField",
  "InteractionTranscription",
  "Topics",
  "Labels",
  "Notes",
  "InteractionMediaFile",
  "WebpageRedirect"
] as const satisfies readonly (keyof EightByEightContactCenterApiInteractionsGeneratedClient)[];

export function createEightByEightContactCenterApiInteractionsGeneratedClient(
  callOperation: EightByEightGeneratedOperationCaller,
): EightByEightContactCenterApiInteractionsGeneratedClient {
  return {
    InteractionsCount: (...args) => callOperation("qmsa:GET /interactions/count", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions/count">)),
    Interactions: (...args) => callOperation("qmsa:GET /interactions", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions">)),
    DeleteInteraction: (...args) => callOperation("qmsa:DELETE /interactions/{interactionGuid}", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:DELETE /interactions/{interactionGuid}">)),
    PurgeInteraction: (...args) => callOperation("qmsa:DELETE /interactions/{interactionGuid}/purge", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:DELETE /interactions/{interactionGuid}/purge">)),
    UpdateCustomField: (...args) => callOperation("qmsa:PUT /interactions/{interactionGuid}/{customFieldNo}", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:PUT /interactions/{interactionGuid}/{customFieldNo}">)),
    DeletesTheCustomField: (...args) => callOperation("qmsa:DELETE /interactions/{interactionGuid}/{customFieldNo}", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:DELETE /interactions/{interactionGuid}/{customFieldNo}">)),
    InteractionTranscription: (...args) => callOperation("qmsa:GET /interactions/{interactionGuid}/transcriptions", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions/{interactionGuid}/transcriptions">)),
    Topics: (...args) => callOperation("qmsa:GET /interactions/{interactionGuid}/topics", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions/{interactionGuid}/topics">)),
    Labels: (...args) => callOperation("qmsa:GET /interactions/{interactionGuid}/labels", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions/{interactionGuid}/labels">)),
    Notes: (...args) => callOperation("qmsa:GET /interactions/{interactionGuid}/notes", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions/{interactionGuid}/notes">)),
    InteractionMediaFile: (...args) => callOperation("qmsa:GET /interactions/{interactionGuid}/media", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions/{interactionGuid}/media">)),
    WebpageRedirect: (...args) => callOperation("qmsa:GET /interactions/redirect", ...(args as EightByEightContactCenterApiOperationArgs<"qmsa:GET /interactions/redirect">)),
  };
}
