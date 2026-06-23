import type {
  ConnectionDefinition,
  ConnectionOperationAlias,
  McpConnectionDefinition,
  OpenApiConnectionDefinition,
} from "./types.js";

export function defineOpenApiConnection(input: Omit<OpenApiConnectionDefinition, "kind">): OpenApiConnectionDefinition {
  return validateConnectionDefinition({ kind: "openapi", ...input });
}

export function defineMcpConnection(input: Omit<McpConnectionDefinition, "kind">): McpConnectionDefinition {
  return validateConnectionDefinition({ kind: "mcp", ...input });
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

function validateConnectionDefinition<TConnection extends ConnectionDefinition>(connection: TConnection): TConnection {
  const failures: string[] = [];
  if (!connection.id.trim()) failures.push("id is required");
  if (!connection.provider.trim()) failures.push("provider is required");
  if (typeof connection.source === "string" && !connection.source.trim()) failures.push("source is required");
  if (connection.kind === "mcp" && typeof connection.source !== "string") {
    failures.push("mcp source must be a URL or connection string");
  }
  if (connection.providerPackageId !== undefined && !connection.providerPackageId.trim()) {
    failures.push("providerPackageId must not be empty");
  }
  validateAuth(connection, failures);
  validateReviewedContract(connection, failures);
  validateOperations(connection, failures);
  if (failures.length > 0) {
    throw new Error(`Invalid ${connection.kind} connection definition: ${failures.join("; ")}`);
  }
  return connection;
}

function validateAuth(connection: ConnectionDefinition, failures: string[]) {
  const auth = connection.auth;
  if (!auth || auth.kind === "none") return;
  if (auth.kind === "bearer" && !auth.credentialId.trim()) failures.push("auth.credentialId is required");
  if (auth.kind === "apiKey") {
    if (!auth.credentialId.trim()) failures.push("auth.credentialId is required");
    if (!auth.name.trim()) failures.push("auth.name is required");
  }
  if (auth.kind === "basic") {
    if (!auth.usernameCredentialId.trim()) failures.push("auth.usernameCredentialId is required");
    if (!auth.passwordCredentialId.trim()) failures.push("auth.passwordCredentialId is required");
  }
}

function validateReviewedContract(connection: ConnectionDefinition, failures: string[]) {
  const reviewed = connection.reviewedContract;
  if (!reviewed) return;
  if (!reviewed.source.trim()) failures.push("reviewedContract.source is required");
  if (!reviewed.digest?.trim() && !reviewed.version?.trim() && !reviewed.compatibility?.trim()) {
    failures.push("reviewedContract requires digest, version, or compatibility");
  }
}

function validateOperations(connection: ConnectionDefinition, failures: string[]) {
  const entries = Object.entries(connection.operations);
  if (entries.length === 0) failures.push("at least one operation alias is required");
  for (const [alias, operation] of entries) {
    if (!alias.trim()) failures.push("operation alias must not be empty");
    if (!operation.providerOperation.trim()) {
      failures.push(`${alias || "(empty alias)"}.providerOperation is required`);
    }
    if (operation.providerPackageId !== undefined && !operation.providerPackageId.trim()) {
      failures.push(`${alias}.providerPackageId must not be empty`);
    }
  }
}
