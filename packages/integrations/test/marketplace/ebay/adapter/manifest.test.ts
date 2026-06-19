import {
  EBAY_SELECTED_API_GENERATED_FUNCTION_COUNT,
  EBAY_SELECTED_API_OPERATION_COUNT,
  EBAY_SELECTED_API_PATH_COUNT,
  createEbayDigitalSignatureHeaders,
  createEbayMarketplaceClient,
  createEbayMarketplaceLiveChecks,
  createEbayNotificationChallengeResponse,
  createHash,
  createSign,
  describe,
  ebayMarketplaceCredentialStatuses,
  ebayMarketplaceProviderManifest,
  ebaySelectedApiFunctionCatalog,
  ebaySelectedApiOperationCatalog,
  ebaySelectedApiSpecs,
  expect,
  generateKeyPairSync,
  it,
  parseEbayNotificationSignatureHeader,
  parseEbayNotificationWebhook,
  readProviderCoverageArtifact,
  runProviderConformance,
  verifyEbayNotificationSignature,
  vi,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for eBay marketplace support", () => {
      expect(ebayMarketplaceProviderManifest).toMatchObject({
        id: "marketplace.ebay",
        packageName: "@cognidesk/integrations",
        category: "marketplace",
        provider: "ebay",
        trustLevel: "official",
      });
      expect(ebayMarketplaceProviderManifest.capabilities.map((capability) => capability.capability))
        .toEqual(expect.arrayContaining([
          "receive",
          "read-provider-object",
          "search-provider-object",
          "create-provider-object",
          "update-provider-object",
          "send",
          "marketplace.notification-signature",
          "marketplace.digital-signature",
          "marketplace.notification-challenge",
        ]));
      expect(ebayMarketplaceProviderManifest.capabilities.map((capability) => capability.capability))
        .not.toContain("handoff");
      expect(ebayMarketplaceProviderManifest.coverage).toMatchObject({
        scope: "support-workflow-subset",
      });
      expect(ebayMarketplaceProviderManifest.coverage.notes.join(" "))
        .toContain("selected REST slice now covers every documented operation");
      expect(ebayMarketplaceProviderManifest.coverage.evidence.map((evidence) => evidence.url))
        .toEqual(expect.arrayContaining([
          "https://developer.ebay.com/develop/api/sell/fulfillment_api",
          "https://developer.ebay.com/api-docs/static/gs_take-advantage-of-openapi.html",
          "https://developer.ebay.com/api-docs/master/sell/fulfillment/openapi/3/sell_fulfillment_v1_oas3.json",
          "https://developer.ebay.com/api-docs/master/commerce/message/openapi/3/commerce_message_v1_oas3.json",
          "https://developer.ebay.com/api-docs/master/commerce/notification/openapi/3/commerce_notification_v1_oas3.json",
          "https://developer.ebay.com/api-docs/master/developer/key-management/openapi/3/developer_key_management_v1_oas3.json",
          "https://developer.ebay.com/api-docs/master/commerce/identity/openapi/3/commerce_identity_v1_oas3.json",
          "https://developer.ebay.com/develop/guides/digital-signatures-for-apis",
          "https://developer.ebay.com/api-docs/developer/key-management/resources/methods",
          "https://developer.ebay.com/api-docs/commerce/notification/resources/methods",
          "https://developer.ebay.com/api-docs/commerce/notification/resources/public_key/methods/getPublicKey",
          "https://developer.ebay.com/develop/guides-v2/authorization#the-client-credentials-grant-flow",
          "https://developer.ebay.com/api-docs/commerce/message/resources/methods",
        ]));
      expect(ebayMarketplaceProviderManifest.credentialRequirements[0]?.scopes)
        .toEqual(expect.arrayContaining(["https://api.ebay.com/oauth/api_scope/commerce.message"]));
      expect(ebayMarketplaceProviderManifest.credentialRequirements[0]?.scopes)
        .not.toEqual(expect.arrayContaining([
          "https://api.ebay.com/oauth/api_scope/sell.account",
          "https://api.ebay.com/oauth/api_scope/sell.account.readonly",
        ]));
      expect(ebayMarketplaceProviderManifest.credentialRequirements).toContainEqual(expect.objectContaining({
        id: "ebay-application-access-token",
        scopes: ["https://api.ebay.com/oauth/api_scope"],
        required: true,
      }));
      expect(ebayMarketplaceProviderManifest.metadata?.generatedProviderSliceVerification).toMatchObject({
        provider: "ebay-selected-rest",
        documentedPathCount: EBAY_SELECTED_API_PATH_COUNT,
        documentedOperationCount: EBAY_SELECTED_API_OPERATION_COUNT,
        implementedOperationCount: EBAY_SELECTED_API_OPERATION_COUNT,
        unimplementedOperationCount: 0,
        generatedFunctionCount: EBAY_SELECTED_API_GENERATED_FUNCTION_COUNT,
      });
    });

  it("keeps the eBay selected REST operation and function catalogs in sync with checked artifacts", () => {
      const operationsArtifact = readProviderCoverageArtifact<{
        spec: { pathCount: number; operationCount: number; specs: unknown[] };
        operations: Array<{ operationId: string; functionName: string; method: string; path: string }>;
      }>("docs/provider-coverage/ebay-selected-api-2026-06-18.operations.json", () => ({
        spec: {
          specs: [...ebaySelectedApiSpecs],
          pathCount: EBAY_SELECTED_API_PATH_COUNT,
          operationCount: EBAY_SELECTED_API_OPERATION_COUNT,
        },
        operations: ebaySelectedApiOperationCatalog.map(({ operationId, functionName, method, path }) => ({
          operationId,
          functionName,
          method,
          path,
        })),
      }));
      const functionsArtifact = readProviderCoverageArtifact<{
        spec: { operationCount: number };
        functions: string[];
      }>("docs/provider-coverage/ebay-selected-api-2026-06-18.functions.json", () => ({
        spec: { operationCount: EBAY_SELECTED_API_OPERATION_COUNT },
        functions: [...ebaySelectedApiFunctionCatalog],
      }));

      expect(operationsArtifact.spec.specs).toHaveLength(ebaySelectedApiSpecs.length);
      expect(operationsArtifact.spec.pathCount).toBe(EBAY_SELECTED_API_PATH_COUNT);
      expect(operationsArtifact.spec.operationCount).toBe(EBAY_SELECTED_API_OPERATION_COUNT);
      expect(operationsArtifact.operations).toHaveLength(EBAY_SELECTED_API_OPERATION_COUNT);
      expect(functionsArtifact.functions).toHaveLength(EBAY_SELECTED_API_GENERATED_FUNCTION_COUNT);
      expect(ebaySelectedApiOperationCatalog).toHaveLength(EBAY_SELECTED_API_OPERATION_COUNT);
      expect(ebaySelectedApiFunctionCatalog).toHaveLength(EBAY_SELECTED_API_GENERATED_FUNCTION_COUNT);
      expect(new Set(ebaySelectedApiFunctionCatalog).size).toBe(EBAY_SELECTED_API_GENERATED_FUNCTION_COUNT);
      expect(operationsArtifact.operations.map((operation) => operation.functionName))
        .toEqual(ebaySelectedApiFunctionCatalog);
      expect(operationsArtifact.operations.map(({ operationId, functionName, method, path }) => ({
        operationId,
        functionName,
        method,
        path,
      }))).toEqual(ebaySelectedApiOperationCatalog.map(({ operationId, functionName, method, path }) => ({
        operationId,
        functionName,
        method,
        path,
      })));
    });

  it("reports Studio-visible readiness without exposing credential values", () => {
      const statuses = ebayMarketplaceCredentialStatuses({
        accessTokenConfigured: true,
        applicationAccessTokenConfigured: true,
        clientIdConfigured: true,
        clientSecretConfigured: true,
        marketplaceId: "EBAY_US",
        notificationVerificationTokenConfigured: true,
      });

      expect(statuses).toHaveLength(7);
      expect(statuses.filter((status) => status.requirementId !== "ebay-digital-signature-key").every((status) => status.state === "configured")).toBe(true);
      expect(statuses.find((status) => status.requirementId === "ebay-digital-signature-key")?.state).toBe("not-required");
      expect(statuses[0]?.scopes).toEqual(expect.arrayContaining([
        "https://api.ebay.com/oauth/api_scope/commerce.message",
      ]));
      expect(statuses.find((status) => status.requirementId === "ebay-application-access-token")?.scopes)
        .toEqual(["https://api.ebay.com/oauth/api_scope"]);
      expect(JSON.stringify(statuses)).not.toContain("client-secret-value");
    });
});
