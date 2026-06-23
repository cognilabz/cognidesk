import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  aggregateExportSubpathForImportPath,
  isGeneratedFullProviderApiClone,
  manifestOnlyRuntimeImportViolationsForSource,
  packageExportSubpaths,
  providerReferenceImportPaths,
} from "./check-integration-package-architecture.mjs";

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

describe("aggregate provider catalog export guards", () => {
  it("maps aggregate import paths to package export subpaths", () => {
    assert.equal(
      aggregateExportSubpathForImportPath("@cognidesk/integrations/ticketing/zendesk"),
      "./ticketing/zendesk",
    );
    assert.equal(aggregateExportSubpathForImportPath("@cognidesk/integrations"), ".");
    assert.equal(
      aggregateExportSubpathForImportPath("@cognidesk/integration-ticketing-zendesk/manifest"),
      undefined,
    );
  });

  it("reads subpath exports from package exports maps", () => {
    assert.deepEqual(
      packageExportSubpaths({
        ".": {
          import: "./dist/index.js",
        },
        "./ticketing/zendesk": {
          import: "./dist/ticketing/zendesk/index.js",
        },
      }),
      new Set([".", "./ticketing/zendesk"]),
    );
  });

  it("extracts provider reference import paths from catalog source", () => {
    const source = `
      export const references = [
        { "importPath": "@cognidesk/integrations/ticketing/zendesk" },
        { importPath: "@cognidesk/integration-ticketing-salesforce/manifest" },
      ];
    `;

    assert.deepEqual(providerReferenceImportPaths(source), [
      {
        importPath: "@cognidesk/integrations/ticketing/zendesk",
        line: 3,
      },
      {
        importPath: "@cognidesk/integration-ticketing-salesforce/manifest",
        line: 4,
      },
    ]);
  });
});

describe("manifestOnlyRuntimeImportViolationsForSource", () => {
  const manifestFile = "/repo/integrations/email/gmail/src/manifest.ts";

  it("rejects manifest imports that reach provider runtime modules", () => {
    const source = [
      'import { defineProviderPackage } from "@cognidesk/integration-kit";',
      'import { createGmailRuntime } from "./runtime.js";',
      'import { createGmailClient } from "./client/index.js";',
      'import { createLegacyRuntime } from "../runtime.js";',
      'import { gmailRuntime } from "@cognidesk/integration-email-gmail/runtime";',
      'export { gmailClient } from "@cognidesk/integration-email-gmail/client/testing";',
    ].join("\n");

    assert.deepEqual(
      manifestOnlyRuntimeImportViolationsForSource(source, manifestFile).map((violation) => violation.specifier),
      [
        "./runtime.js",
        "./client/index.js",
        "../runtime.js",
        "@cognidesk/integration-email-gmail/runtime",
        "@cognidesk/integration-email-gmail/client/testing",
      ],
    );
  });

  it("allows provider-neutral kit/core, metadata, and type-only imports", () => {
    const source = [
      'import { defineProviderPackage } from "@cognidesk/integration-kit";',
      'import { ProviderManifest } from "@cognidesk/core";',
      'import { GMAIL_OPERATION_COUNT } from "./metadata.js";',
      'import type { GmailRuntime } from "./runtime.js";',
      'export type { GmailClient } from "@cognidesk/integration-email-gmail/client";',
    ].join("\n");

    assert.deepEqual(manifestOnlyRuntimeImportViolationsForSource(source, manifestFile), []);
  });
});
