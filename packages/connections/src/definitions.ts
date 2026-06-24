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
  requireNonEmptyString(connection.id, "id", failures);
  requireNonEmptyString(connection.provider, "provider", failures);
  if (typeof connection.source === "string" && !connection.source.trim()) failures.push("source is required");
  if (connection.kind === "mcp" && typeof connection.source !== "string") {
    failures.push("mcp source must be a URL or connection string");
  }
  if (
    connection.providerPackageId !== undefined
    && !optionalNonEmptyString(connection.providerPackageId, "providerPackageId", failures)
  ) {
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
  if (!auth) return;
  if (!isRecord(auth)) {
    failures.push("auth must be an object");
    return;
  }
  if (auth.kind === "none") return;
  if (auth.kind === "bearer") {
    requireNonEmptyString(auth.credentialId, "auth.credentialId", failures);
  }
  if (auth.kind === "apiKey") {
    requireNonEmptyString(auth.credentialId, "auth.credentialId", failures);
    requireNonEmptyString(auth.name, "auth.name", failures);
  }
  if (auth.kind === "basic") {
    requireNonEmptyString(auth.usernameCredentialId, "auth.usernameCredentialId", failures);
    requireNonEmptyString(auth.passwordCredentialId, "auth.passwordCredentialId", failures);
  }
  if (!["none", "bearer", "apiKey", "basic"].includes(String(auth.kind))) {
    failures.push("auth.kind is unsupported");
  }
}

function validateReviewedContract(connection: ConnectionDefinition, failures: string[]) {
  const reviewed = connection.reviewedContract;
  if (!reviewed) return;
  if (!isRecord(reviewed)) {
    failures.push("reviewedContract must be an object");
    return;
  }
  requireNonEmptyString(reviewed.source, "reviewedContract.source", failures);
  if (!optionalNonEmptyString(reviewed.digest, "reviewedContract.digest", failures)
    && !optionalNonEmptyString(reviewed.version, "reviewedContract.version", failures)
    && !optionalNonEmptyString(reviewed.compatibility, "reviewedContract.compatibility", failures)) {
    failures.push("reviewedContract requires digest, version, or compatibility");
  }
}

function validateOperations(connection: ConnectionDefinition, failures: string[]) {
  if (!isRecord(connection.operations)) {
    failures.push("operations must be an object");
    return;
  }
  const entries = Object.entries(connection.operations);
  if (entries.length === 0) failures.push("at least one operation alias is required");
  for (const [alias, operation] of entries) {
    if (!alias.trim()) failures.push("operation alias must not be empty");
    if (!isRecord(operation)) {
      failures.push(`${alias || "(empty alias)"} operation must be an object`);
      continue;
    }
    requireNonEmptyString(operation.providerOperation, `${alias || "(empty alias)"}.providerOperation`, failures);
    if (
      operation.providerPackageId !== undefined
      && !optionalNonEmptyString(operation.providerPackageId, `${alias}.providerPackageId`, failures)
    ) {
      failures.push(`${alias}.providerPackageId must not be empty`);
    }
  }
}

function requireNonEmptyString(value: unknown, field: string, failures: string[]) {
  if (typeof value !== "string") {
    failures.push(`${field} must be a string`);
    return false;
  }
  if (!value.trim()) {
    failures.push(`${field} is required`);
    return false;
  }
  return true;
}

function optionalNonEmptyString(value: unknown, field: string, failures: string[]) {
  if (value === undefined) return false;
  if (typeof value !== "string") {
    failures.push(`${field} must be a string`);
    return false;
  }
  return Boolean(value.trim());
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
