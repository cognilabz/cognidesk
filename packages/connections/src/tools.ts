import {
  tool,
  type AnyTool,
  type ToolApprovalOptions,
  type ToolExecutionContext,
  type ToolPolicyOptions,
} from "@cognidesk/core";
import { z } from "zod";
import { connectionOperationAliases } from "./definitions.js";
import { executeConnectionOperation } from "./execution.js";
import { defaultConnectionInputSchema } from "./schemas.js";
import type {
  ConnectionDefinition,
  ConnectionExecutionOptions,
  ConnectionOperationAlias,
  ConnectionToolArguments,
} from "./types.js";

type OperationSelection = Array<string> | Record<string, boolean | { toolName?: string; approval?: ToolApprovalOptions }>;

export function createConnectionTools(
  connection: ConnectionDefinition,
  options: ConnectionExecutionOptions & {
    operations?: OperationSelection;
  } = {},
): AnyTool[] {
  const selected = selectOperations(connection, options.operations);
  return selected.map((operation) => {
    const input = operation.input ?? defaultConnectionInputSchema;
    const output = operation.output ?? z.unknown();
    const toolName = operation.toolName ?? defaultToolName(connection, operation.alias);
    const policy: ToolPolicyOptions = {
      ...(operation.capability ? { capability: operation.capability } : {}),
      ...(operation.providerPackageId ?? connection.providerPackageId
        ? { providerPackageId: operation.providerPackageId ?? connection.providerPackageId }
        : {}),
      operationAlias: operation.alias,
      providerOperation: operation.providerOperation,
      ...(operation.actionAudience ? { actionAudience: operation.actionAudience } : {}),
      ...(operation.outbound !== undefined ? { outbound: operation.outbound } : {}),
      ...(operation.externallyVisible !== undefined ? { externallyVisible: operation.externallyVisible } : {}),
      ...(operation.exposesSensitiveData !== undefined ? { exposesSensitiveData: operation.exposesSensitiveData } : {}),
      ...(operation.changesWorkflow !== undefined ? { changesWorkflow: operation.changesWorkflow } : {}),
      ...(operation.requiredPolicyIds ? { requiredPolicyIds: operation.requiredPolicyIds } : {}),
      ...(operation.approval ? { approval: operation.approval } : {}),
    };
    return tool(toolName, {
      description: operation.description ?? `${connection.provider} ${operation.alias}`,
      input,
      output,
      sideEffect: operation.sideEffect ?? false,
      policy,
      execute: async ({ input, signal }: ToolExecutionContext<unknown>) => executeConnectionOperation(connection, operation.alias, input as ConnectionToolArguments, {
        ...options,
        ...(signal ? { signal } : {}),
      }),
    });
  });
}

function selectOperations(
  connection: ConnectionDefinition,
  selection?: OperationSelection,
): ConnectionOperationAlias[] {
  let operations = connectionOperationAliases(connection);
  if (Array.isArray(selection)) {
    const selected = new Set(selection);
    operations = operations.filter((operation) => selected.has(operation.alias));
  } else if (selection) {
    operations = operations
      .filter((operation) => selection[operation.alias])
      .map((operation) => {
        const override = selection[operation.alias]!;
        return typeof override === "object"
          ? {
              ...operation,
              ...(override.toolName ? { toolName: override.toolName } : {}),
              ...(override.approval ? { approval: override.approval } : {}),
            }
          : operation;
      });
  }
  return operations;
}

function defaultToolName(connection: ConnectionDefinition, alias: string) {
  return `${connection.id}_${alias}`.replace(/[^a-zA-Z0-9_-]/g, "_");
}
