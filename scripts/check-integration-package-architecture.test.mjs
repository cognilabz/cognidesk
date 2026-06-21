import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { isGeneratedFullProviderApiClone } from "./check-integration-package-architecture.mjs";

describe("isGeneratedFullProviderApiClone", () => {
  it("detects generated full API clone filenames and directories", () => {
    const cloneFiles = [
      "integrations/email/gmail/src/full-api-client.generated.ts",
      "integrations/email/gmail/src/full-api/operations.generated.ts",
      "integrations/email/outlook/src/graph-api-schema-types.generated.ts",
      "integrations/contact-center/genesys-cloud/src/http-api.generated.ts",
      "integrations/ecommerce/shopify/src/admin-graphql-root-fields.generated.ts",
      "integrations/review/googleplay/src/googleplay-api.generated.ts",
      "integrations/ecommerce/shopify/src/shopify-graphql.generated.ts",
    ];

    for (const file of cloneFiles) {
      assert.equal(isGeneratedFullProviderApiClone(file), true, file);
    }
  });

  it("allows generated metadata and support-slice files that are not full provider clones", () => {
    const allowedFiles = [
      "integrations/email/gmail/src/manifest.generated.ts",
      "integrations/email/gmail/src/operation-allowlist.generated.ts",
      "integrations/email/gmail/src/webhook-events.generated.ts",
      "integrations/email/gmail/src/provider-catalog.generated.ts",
      "integrations/email/gmail/src/full-api-migration-notes.ts",
      "integrations/email/gmail/src/api-metadata.ts",
    ];

    for (const file of allowedFiles) {
      assert.equal(isGeneratedFullProviderApiClone(file), false, file);
    }
  });
});
