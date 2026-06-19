import type { ToolApprovalOptions } from "@cognidesk/core";
import type { z } from "zod";

export type ConnectionKind = "openapi" | "mcp";

export type ConnectionJsonPrimitive = string | number | boolean | null;
export type ConnectionJsonValue =
  | ConnectionJsonPrimitive
  | ConnectionJsonObject
  | readonly ConnectionJsonValue[];
export type ConnectionExtensionValue = ConnectionJsonValue | object | undefined;
export interface ConnectionJsonObject {
  [key: string]: ConnectionExtensionValue;
}
export interface ConnectionMetadata extends ConnectionJsonObject {}
export interface ConnectionOpenApiDocument extends ConnectionJsonObject {}
export type ConnectionSource = string | ConnectionOpenApiDocument;
export type ConnectionToolArguments = ConnectionExtensionValue;
export type ConnectionToolResult = ConnectionExtensionValue;

export type ConnectionAuth =
  | { kind: "none" }
  | { kind: "bearer"; credentialId: string; headerName?: string }
  | { kind: "apiKey"; credentialId: string; in: "header" | "query"; name: string }
  | { kind: "basic"; usernameCredentialId: string; passwordCredentialId: string };

export interface ReviewedProviderContract {
  source: string;
  digest?: string;
  version?: string;
  compatibility?: string;
  reviewedAt?: string;
  reviewedBy?: string;
}

export interface ConnectionHttpRequest {
  path?: Record<string, string | number | boolean>;
  query?: Record<string, string | number | boolean | null | undefined>;
  headers?: Record<string, string>;
  body?: ConnectionExtensionValue;
}

export interface ConnectionOperationAlias {
  alias: string;
  providerOperation: string;
  toolName?: string;
  description?: string;
  input?: z.ZodType;
  output?: z.ZodType;
  request?: (input: ConnectionToolArguments) => ConnectionHttpRequest;
  capability?: string;
  providerPackageId?: string;
  providerObjects?: Array<{ kind: string; label?: string; description?: string }>;
  actionAudience?: "customer-facing" | "internal-support" | "mixed";
  sideEffect?: boolean;
  outbound?: boolean;
  externallyVisible?: boolean;
  exposesSensitiveData?: boolean;
  changesWorkflow?: boolean;
  requiredPolicyIds?: string[];
  approval?: ToolApprovalOptions;
  metadata?: ConnectionMetadata;
}

export interface BaseConnectionDefinition<TKind extends ConnectionKind> {
  kind: TKind;
  id: string;
  provider: string;
  providerPackageId?: string;
  source: ConnectionSource;
  auth?: ConnectionAuth;
  reviewedContract?: ReviewedProviderContract;
  operations: Record<string, Omit<ConnectionOperationAlias, "alias">>;
  metadata?: ConnectionMetadata;
}

export type OpenApiConnectionDefinition = BaseConnectionDefinition<"openapi"> & {
  baseUrl?: string;
};

export type McpConnectionDefinition = BaseConnectionDefinition<"mcp">;

export type ConnectionDefinition = OpenApiConnectionDefinition | McpConnectionDefinition;

export interface McpToolDescriptor {
  name: string;
  description?: string;
  inputSchema?: ConnectionJsonObject;
}

export interface McpConnectionClient {
  listTools(input: { source: string; signal?: AbortSignal }): Promise<McpToolDescriptor[]>;
  callTool(input: { source: string; name: string; arguments: ConnectionToolArguments; signal?: AbortSignal }): Promise<ConnectionToolResult>;
}

export type CredentialResolver =
  | Record<string, string | undefined>
  | ((credentialId: string) => string | undefined | Promise<string | undefined>);

export interface ConnectionExecutionOptions {
  credentials?: CredentialResolver;
  fetch?: typeof fetch;
  baseUrl?: string;
  signal?: AbortSignal;
  mcpClient?: McpConnectionClient;
}

export interface ConnectionContractVerification {
  status: "verified" | "blocked";
  digest?: string;
  message: string;
  missingOperations: string[];
}
