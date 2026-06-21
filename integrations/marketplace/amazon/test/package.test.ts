import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import { amazonMarketplaceIntegration } from "../src/integration.js";
import { amazonMarketplaceOperationAliases, amazonMarketplaceProviderManifest } from "../src/manifest.js";
import { loadAmazonSpApiOfficialSdk } from "../src/official-sdk.js";

describe("@cognidesk/marketplace-amazon", () => {
  it("binds every manifest operation to a handler", () => {
    const report = assertIntegrationConformance(amazonMarketplaceIntegration);

    expect(report.missingHandlerAliases).toEqual([]);
    expect(report.extraHandlerAliases).toEqual([]);
    expect(amazonMarketplaceProviderManifest.packageName).toBe("@cognidesk/marketplace-amazon");
    expect(amazonMarketplaceProviderManifest.coverage.scope).toBe("support-workflow-subset");
    expect(amazonMarketplaceProviderManifest.operations.map((operation) => operation.alias)).toContain(
      amazonMarketplaceOperationAliases.getOrders,
    );
  });

  it("keeps manifest imports runtime-light", async () => {
    const manifestModule = await import("../src/manifest.js");

    expect(Object.keys(manifestModule).sort()).toEqual([
      "amazonMarketplaceOperationAliases",
      "amazonMarketplaceProviderManifest",
    ]);
  });

  it("exposes runtime imports separately from manifest-only metadata", async () => {
    const runtimeModule = await import("../src/runtime.js");

    expect(runtimeModule).toHaveProperty("amazonMarketplaceIntegration");
    expect(runtimeModule).toHaveProperty("createAmazonMarketplaceClient");
    expect(runtimeModule).toHaveProperty("loadAmazonSpApiOfficialSdk");
  });

  it("can load the official Amazon SP-API SDK as a raw-client escape hatch", async () => {
    const sdk = await loadAmazonSpApiOfficialSdk();

    expect(sdk).toHaveProperty("SellersSpApi");
    expect(sdk).toHaveProperty("OrdersSpApi");
    expect(sdk).toHaveProperty("NotificationsSpApi");
  }, 20_000);
});
