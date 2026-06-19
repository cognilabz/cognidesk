import type {
  ConnectionDefinition,
  ConnectionOperationAlias,
  McpConnectionDefinition,
  OpenApiConnectionDefinition,
} from "./types.js";

export function defineOpenApiConnection(input: Omit<OpenApiConnectionDefinition, "kind">): OpenApiConnectionDefinition {
  return { kind: "openapi", ...input };
}

export function defineMcpConnection(input: Omit<McpConnectionDefinition, "kind">): McpConnectionDefinition {
  return { kind: "mcp", ...input };
}

export function connectionOperationAliases(connection: ConnectionDefinition): ConnectionOperationAlias[] {
  return Object.entries(connection.operations).map(([alias, operation]) => {
    const providerPackageId = operation.providerPackageId ?? connection.providerPackageId;
    return {
      alias,
      ...operation,
      ...(providerPackageId ? { providerPackageId } : {}),
    };
  });
}
