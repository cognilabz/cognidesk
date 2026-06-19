import { connectionOperationAliases } from "./definitions.js";
import { executeOpenApiOperation } from "./openapi.js";
import type {
  ConnectionDefinition,
  ConnectionExecutionOptions,
  ConnectionToolArguments,
  ConnectionToolResult,
} from "./types.js";
import { verifyConnectionContract } from "./verification.js";

export async function executeConnectionOperation(
  connection: ConnectionDefinition,
  aliasName: string,
  input: ConnectionToolArguments,
  options: ConnectionExecutionOptions = {},
): Promise<ConnectionToolResult> {
  const operation = connectionOperationAliases(connection).find((candidate) => candidate.alias === aliasName);
  if (!operation) throw new Error(`Connection operation alias '${aliasName}' is not defined on '${connection.id}'.`);
  const verification = await verifyConnectionContract(connection, options);
  if (verification.status !== "verified") throw new Error(verification.message);
  if (connection.kind === "mcp") {
    if (!options.mcpClient) throw new Error("MCP connection execution requires an mcpClient.");
    return options.mcpClient.callTool({
      source: String(connection.source),
      name: operation.providerOperation,
      arguments: input,
      ...(options.signal ? { signal: options.signal } : {}),
    });
  }
  return executeOpenApiOperation(connection, operation, input, options);
}
