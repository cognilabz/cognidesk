import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import {
  EBAY_SELECTED_API_OPERATION_COUNT,
  ebayMarketplaceIntegration,
  ebayMarketplaceOperationAlias,
  ebayMarketplaceProviderManifest,
  ebaySelectedApiOperationCatalog,
} from "../src/index.js";

describe("@cognidesk/marketplace-ebay", () => {
  it("binds every selected support-slice operation to a handler", () => {
    const report = assertIntegrationConformance(ebayMarketplaceIntegration);

    expect(report.missingHandlerAliases).toEqual([]);
    expect(report.extraHandlerAliases).toEqual([]);
    expect(ebayMarketplaceProviderManifest.packageName).toBe("@cognidesk/marketplace-ebay");
    expect(ebayMarketplaceProviderManifest.coverage.scope).toBe("support-workflow-subset");
    expect(ebayMarketplaceProviderManifest.operations).toHaveLength(EBAY_SELECTED_API_OPERATION_COUNT);
    expect(ebayMarketplaceProviderManifest.operations.map((operation) => operation.alias)).toContain(
      ebayMarketplaceOperationAlias("getOrder"),
    );
  });

  it("keeps manifest imports runtime-light", async () => {
    const manifestModule = await import("../src/manifest.js");

    expect(Object.keys(manifestModule).sort()).toEqual([
      "EBAY_SELECTED_API_GENERATED_FUNCTION_COUNT",
      "EBAY_SELECTED_API_OPERATION_COUNT",
      "EBAY_SELECTED_API_PATH_COUNT",
      "EBAY_SELECTED_API_VERIFICATION_DATE",
      "ebayMarketplaceOperationAlias",
      "ebayMarketplaceProviderManifest",
      "ebaySelectedApiFunctionCatalog",
      "ebaySelectedApiOperationCatalog",
      "ebaySelectedApiSpecs",
    ]);
  });

  it("exposes runtime imports separately from manifest-only metadata", async () => {
    const runtimeModule = await import("../src/runtime.js");

    expect(runtimeModule).toHaveProperty("ebayMarketplaceIntegration");
    expect(runtimeModule).toHaveProperty("createEbayMarketplaceClient");
    expect(runtimeModule).toHaveProperty("parseEbayNotificationWebhook");
  });

  it("records selected source metadata for each allowed operation", () => {
    const allowlist = ebayMarketplaceProviderManifest.metadata?.supportSlice as {
      allowlist?: Array<{ alias?: string; specUrl?: string }>;
    };

    expect(allowlist.allowlist).toHaveLength(ebaySelectedApiOperationCatalog.length);
    const firstOperation = ebaySelectedApiOperationCatalog.at(0);
    expect(firstOperation).toBeDefined();
    expect(allowlist.allowlist?.at(0)).toMatchObject({
      alias: ebayMarketplaceOperationAlias(firstOperation?.functionName ?? ""),
    });
  });
});
