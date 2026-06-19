import type { ProviderManifestInput } from "@cognidesk/core";
import { connectionOperationAliases } from "./definitions.js";
import type { ConnectionDefinition } from "./types.js";

export function connectionBackedProviderMetadata(connection: ConnectionDefinition): NonNullable<ProviderManifestInput["metadata"]> {
  return {
    connectionBacked: {
      kind: connection.kind,
      id: connection.id,
      provider: connection.provider,
      source: typeof connection.source === "string" ? connection.source : "inline",
      reviewedContract: connection.reviewedContract ?? null,
      operationAliases: connectionOperationAliases(connection).map((operation) => ({
        alias: operation.alias,
        providerOperation: operation.providerOperation,
        ...(operation.toolName ? { toolName: operation.toolName } : {}),
        ...(operation.capability ? { capability: operation.capability } : {}),
        ...(operation.actionAudience ? { actionAudience: operation.actionAudience } : {}),
        sideEffect: operation.sideEffect ?? false,
        ...(operation.outbound !== undefined ? { outbound: operation.outbound } : {}),
        ...(operation.externallyVisible !== undefined ? { externallyVisible: operation.externallyVisible } : {}),
        ...(operation.exposesSensitiveData !== undefined ? { exposesSensitiveData: operation.exposesSensitiveData } : {}),
        ...(operation.changesWorkflow !== undefined ? { changesWorkflow: operation.changesWorkflow } : {}),
        ...(operation.approval ? { approval: operation.approval } : {}),
      })),
    },
  };
}
