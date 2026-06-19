import type { ProviderCredentialStatus, ProviderManifest } from "@cognidesk/core";
import type { ProviderConformanceCheckResult, ProviderConformanceInput } from "./types.js";

export async function runLiveChecks(args: {
  manifest: ProviderManifest;
  credentialStatuses: ProviderCredentialStatus[];
  live?: ProviderConformanceInput["live"];
  signal?: AbortSignal;
}): Promise<ProviderConformanceCheckResult[]> {
  const checks = args.live?.checks ?? [];
  if (!args.live?.enabled || checks.length === 0) {
    return [{
      id: "provider.live",
      status: "skipped",
      message: "Live provider checks were not enabled.",
    }];
  }

  const results: ProviderConformanceCheckResult[] = [];
  for (const check of checks) {
    const missing = (check.requiredCredentialIds ?? [])
      .filter((credentialId) => !hasConfiguredCredential(args.credentialStatuses, credentialId));
    if (missing.length > 0) {
      results.push({
        id: `provider.live.${check.id}`,
        status: "credential-blocked",
        message: "Live provider check is blocked by missing or unavailable credentials.",
        details: { requirementIds: missing },
      });
      continue;
    }
    try {
      const result = await check.run({
        manifest: args.manifest,
        credentialStatuses: args.credentialStatuses,
        ...(args.signal ? { signal: args.signal } : {}),
      });
      results.push({
        id: `provider.live.${check.id}`,
        status: "passed",
        message: check.description ?? "Live provider check passed.",
        ...(result?.details ? { details: result.details } : {}),
      });
    } catch (error) {
      results.push({
        id: `provider.live.${check.id}`,
        status: "failed",
        message: error instanceof Error ? error.message : "Live provider check failed.",
      });
    }
  }
  return results;
}

function hasConfiguredCredential(credentials: ProviderCredentialStatus[], requirementId: string) {
  return credentials.some((credential) =>
    credential.requirementId === requirementId
    && credential.state === "configured"
  );
}
