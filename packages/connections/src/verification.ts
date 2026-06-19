import { connectionOperationAliases } from "./definitions.js";
import { discoverMcpOperationIds } from "./mcp.js";
import { connectionDigest, discoverOpenApiOperationIds } from "./openapi.js";
import type {
  ConnectionContractVerification,
  ConnectionDefinition,
  ConnectionExecutionOptions,
} from "./types.js";

export async function verifyConnectionContract(
  connection: ConnectionDefinition,
  options: Pick<ConnectionExecutionOptions, "fetch" | "signal" | "mcpClient"> = {},
): Promise<ConnectionContractVerification> {
  const operations = connection.kind === "openapi"
    ? await discoverOpenApiOperationIds(connection, options)
    : await discoverMcpOperationIds(connection, options);
  const missingOperations = connectionOperationAliases(connection)
    .map((operation) => operation.providerOperation)
    .filter((operation) => !operations.has(operation));
  const digest = connection.kind === "openapi"
    ? await connectionDigest(connection, options)
    : undefined;
  const expectedDigest = connection.reviewedContract?.digest;
  if (expectedDigest && digest && expectedDigest !== digest) {
    return {
      status: "blocked",
      digest,
      message: "Reviewed provider contract digest does not match the live connection contract.",
      missingOperations,
    };
  }
  if (missingOperations.length > 0) {
    return {
      status: "blocked",
      ...(digest ? { digest } : {}),
      message: "Reviewed connection operation aliases are missing from the provider contract.",
      missingOperations,
    };
  }
  return {
    status: "verified",
    ...(digest ? { digest } : {}),
    message: "Connection contract matches reviewed operation aliases.",
    missingOperations,
  };
}
