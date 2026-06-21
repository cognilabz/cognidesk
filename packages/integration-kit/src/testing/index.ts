import type { ProviderManifest } from "@cognidesk/core";
import {
  createOperationBindingReport,
  isProviderNamespacedOperationAlias,
  type IntegrationOperationHandler,
  type OperationBindingReport,
} from "../contracts.js";
import { IntegrationError } from "../errors.js";

export type IntegrationConformanceIssueCode =
  | "missing-operation-handler"
  | "extra-operation-handler"
  | "invalid-extension-operation-alias";

export interface IntegrationConformanceIssue {
  code: IntegrationConformanceIssueCode;
  alias: string;
  message: string;
}

export interface IntegrationConformanceSubject {
  manifest: ProviderManifest;
  operations: Record<string, unknown>;
}

export function collectIntegrationConformanceIssues(
  subject: IntegrationConformanceSubject,
): IntegrationConformanceIssue[] {
  const report = createOperationBindingReport(subject.manifest, subject.operations);
  return operationBindingReportIssues(subject.manifest, report);
}

export function assertIntegrationConformance(subject: IntegrationConformanceSubject): OperationBindingReport {
  const report = createOperationBindingReport(subject.manifest, subject.operations);
  const issues = operationBindingReportIssues(subject.manifest, report);
  if (issues.length > 0) {
    throw new IntegrationError("contract-violation", `Integration '${subject.manifest.id}' failed conformance checks.`, {
      providerPackageId: subject.manifest.id,
      provider: subject.manifest.provider,
      details: { issues, report },
    });
  }
  return report;
}

export function createOperationHandlerStubs(
  manifest: Pick<ProviderManifest, "operations">,
  handler: IntegrationOperationHandler = async () => undefined,
): Record<string, IntegrationOperationHandler> {
  return Object.fromEntries(
    manifest.operations.map((operation) => [operation.alias, handler]),
  );
}

export function expectProviderExtensionAliasNamespace(
  manifest: Pick<ProviderManifest, "id" | "provider" | "packageName">,
  alias: string,
): void {
  if (isProviderNamespacedOperationAlias(alias, manifest)) return;
  throw new IntegrationError("contract-violation", `Operation alias '${alias}' is not provider-namespaced.`, {
    providerPackageId: manifest.id,
    provider: manifest.provider,
    operationAlias: alias,
  });
}

function operationBindingReportIssues(
  manifest: ProviderManifest,
  report: OperationBindingReport,
): IntegrationConformanceIssue[] {
  return [
    ...report.missingHandlerAliases.map((alias) => ({
      code: "missing-operation-handler" as const,
      alias,
      message: `Manifest declares operation '${alias}' but no handler is registered.`,
    })),
    ...report.extraHandlerAliases.map((alias) => ({
      code: "extra-operation-handler" as const,
      alias,
      message: `Handler '${alias}' is registered but the manifest does not declare it.`,
    })),
    ...report.invalidExtensionOperationAliases.map((alias) => ({
      code: "invalid-extension-operation-alias" as const,
      alias,
      message: `Provider extension alias '${alias}' for '${manifest.id}' must start with the provider namespace.`,
    })),
  ];
}
