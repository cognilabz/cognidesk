export type {
  BaseConnectionDefinition,
  ConnectionAuth,
  ConnectionContractVerification,
  ConnectionDefinition,
  ConnectionExecutionOptions,
  ConnectionExtensionValue,
  ConnectionHttpRequest,
  ConnectionJsonObject,
  ConnectionJsonPrimitive,
  ConnectionJsonValue,
  ConnectionKind,
  ConnectionMetadata,
  ConnectionOpenApiDocument,
  ConnectionOperationAlias,
  ConnectionSource,
  ConnectionToolArguments,
  ConnectionToolResult,
  CredentialResolver,
  McpConnectionClient,
  McpConnectionDefinition,
  McpToolDescriptor,
  OpenApiConnectionDefinition,
  ReviewedProviderContract,
} from "./types.js";

export {
  connectionOperationAliases,
  defineMcpConnection,
  defineOpenApiConnection,
} from "./definitions.js";
export { connectionBackedProviderMetadata } from "./metadata.js";
export { verifyConnectionContract } from "./verification.js";
export { createConnectionTools } from "./tools.js";
export { executeConnectionOperation } from "./execution.js";
export { connectionDigest, discoverOpenApiOperationIds } from "./openapi.js";
export { discoverMcpOperationIds } from "./mcp.js";
