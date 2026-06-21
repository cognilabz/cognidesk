import type { ProviderCredentialStatusInput } from "@cognidesk/integration-kit";
import type {
  AmazonCredentialStatusInput,
  AmazonLiveCheckOptions,
  AmazonMarketplaceJsonValue,
} from "../contracts.js";
import { createAmazonMarketplaceClient } from "../client.js";
import { amazonMarketplaceProviderManifest } from "../manifest.js";

export function amazonMarketplaceCredentialStatuses(
  input: AmazonCredentialStatusInput,
): ProviderCredentialStatusInput[] {
  const tokenConfigured = input.accessTokenConfigured || input.refreshTokenConfigured;
  return [
    {
      providerPackageId: amazonMarketplaceProviderManifest.id,
      requirementId: "amazon-lwa-client",
      state: input.lwaClientConfigured ? "configured" : "missing",
      message: input.lwaClientConfigured
        ? "Amazon LWA client credentials are configured server-side."
        : "Amazon LWA client ID and secret are required for SP-API token lifecycle operations.",
    },
    {
      providerPackageId: amazonMarketplaceProviderManifest.id,
      requirementId: "amazon-lwa-token",
      state: tokenConfigured ? "configured" : "missing",
      scopes: input.scopes ?? [],
      ...(input.expiresAt ? { expiresAt: input.expiresAt } : {}),
      message: tokenConfigured
        ? "Amazon SP-API LWA token material is configured."
        : "A seller-authorized LWA refresh token or access token is required.",
    },
    {
      providerPackageId: amazonMarketplaceProviderManifest.id,
      requirementId: "amazon-aws-role-region",
      state: input.awsRoleConfigured && input.awsRegion ? "configured" : "not-required",
      message: input.awsRoleConfigured && input.awsRegion
        ? `Amazon SP-API AWS role/signing region '${input.awsRegion}' is configured.`
        : "AWS role/signing material is required only when the SDK user enables SigV4 or legacy gateway signing.",
    },
    {
      providerPackageId: amazonMarketplaceProviderManifest.id,
      requirementId: "amazon-marketplace-id",
      state: input.marketplaceId ? "configured" : "missing",
      message: input.marketplaceId
        ? `Amazon marketplace '${input.marketplaceId}' is configured.`
        : "An Amazon marketplace ID is required.",
    },
    {
      providerPackageId: amazonMarketplaceProviderManifest.id,
      requirementId: "amazon-notification-destination",
      state: input.notificationDestinationConfigured ? "configured" : "missing",
      message: input.notificationDestinationConfigured
        ? "Amazon notification destination metadata is configured."
        : "A Notifications API destination or SDK-user ingress route is required.",
    },
    {
      providerPackageId: amazonMarketplaceProviderManifest.id,
      requirementId: "amazon-notification-signature",
      state: input.notificationSignatureConfigured ? "configured" : "missing",
      message: input.notificationSignatureConfigured
        ? "Amazon notification verification policy is configured."
        : "A notification verifier, gateway signature, or shared secret is required for fail-closed ingestion.",
    },
  ];
}

export function createAmazonMarketplaceLiveChecks(options: AmazonLiveCheckOptions) {
  return [{
    id: "seller-account",
    description: "Amazon Sellers API is reachable with the configured LWA access token and marketplace policy.",
    requiredCredentialIds: ["amazon-lwa-token", "amazon-marketplace-id"],
    async run(context: { signal?: AbortSignal }) {
      const client = options.client ?? createAmazonMarketplaceClient(options);
      const account = await client.getMarketplaceParticipations();
      if (context.signal?.aborted) throw new Error("Amazon live seller-account check aborted.");
      return {
        details: {
          marketplaceId: options.marketplaceId,
          participations: Array.isArray((account as { payload?: unknown }).payload)
            ? ((account as { payload: AmazonMarketplaceJsonValue[] }).payload).length
            : "available",
        },
      };
    },
  }];
}
