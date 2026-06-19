import { connectionOperationAliases } from "./definitions.js";
import type { ConnectionExecutionOptions, McpConnectionDefinition } from "./types.js";

export async function discoverMcpOperationIds(
  connection: McpConnectionDefinition,
  options: Pick<ConnectionExecutionOptions, "mcpClient" | "signal"> = {},
): Promise<Set<string>> {
  if (!options.mcpClient) {
    return new Set(connectionOperationAliases(connection).map((operation) => operation.providerOperation));
  }
  const tools = await options.mcpClient.listTools({
    source: String(connection.source),
    ...(options.signal ? { signal: options.signal } : {}),
  });
  return new Set(tools.map((mcpTool) => mcpTool.name));
}
