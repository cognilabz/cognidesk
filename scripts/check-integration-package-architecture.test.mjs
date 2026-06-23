import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  isGeneratedFullProviderApiClone,
  isSdkBackedPackage,
  manifestOnlyRuntimeImportViolationsForSource,
  providerCoverageArtifactReferenceFailuresForSource,
  providerSdkDependencyMetadataFailuresForPackage,
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

describe("manifestOnlyRuntimeImportViolationsForSource", () => {
  const manifestFile = "/repo/integrations/email/gmail/src/manifest.ts";

  it("rejects manifest imports that reach provider runtime modules", () => {
    const source = [
      'import { defineProviderPackage } from "@cognidesk/integration-kit";',
      'import { createGmailRuntime } from "./runtime.js";',
      'import { createGmailClient } from "./client/index.js";',
      'import { createProviderRuntime } from "../runtime.js";',
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

describe("provider SDK dependency metadata", () => {
  it("detects current SDK-backed provider dependencies even before metadata is declared", () => {
    const sdkDependencies = [
      "@amazon-sp-api-release/amazon-sp-api-sdk-js",
      "@deepgram/sdk",
      "@elevenlabs/elevenlabs-js",
      "twilio",
      "@vonage/server-sdk",
    ];

    for (const dependencyName of sdkDependencies) {
      assert.equal(
        isSdkBackedPackage({ dependencies: { [dependencyName]: "^1.0.0" } }),
        true,
        dependencyName,
      );
    }
  });

  it("requires provider SDK metadata to match runtime SDK dependencies", () => {
    const pkg = {
      name: "@cognidesk/integration-voice-deepgram",
      packageJsonPath: "/repo/integrations/voice/deepgram/package.json",
      packageJson: {
        dependencies: {
          "@cognidesk/integration-kit": "workspace:*",
          "@deepgram/sdk": "^5.4.0",
        },
        cognidesk: {
          providerPackage: true,
          providerSdkDependencies: ["@missing/sdk"],
        },
      },
    };

    assert.deepEqual(
      providerSdkDependencyMetadataFailuresForPackage(pkg).map((failure) => failure.replace(/^.*package.json: /, "")),
      [
        "SDK-backed provider package must list runtime SDK dependencies in cognidesk.providerSdkDependencies (@deepgram/sdk)",
        "cognidesk.providerSdkDependencies references packages that are not runtime dependencies (@missing/sdk)",
      ],
    );
  });
});

describe("providerCoverageArtifactReferenceFailuresForSource", () => {
  it("requires coverage artifact references to resolve under docs/provider-coverage", () => {
    const source = [
      "export const metadata = {",
      "  coverageArtifact: \"docs/provider-coverage/zoom-meetings-api-2026-06-18.operations.json\",",
      "  operationCatalogArtifact: \"docs/provider-coverage/zoom-meetings-api-2026-06-18.functions.json\",",
      "  functionCatalogArtifact: \"tmp/functions.json\",",
      "};",
    ].join("\n");

    assert.deepEqual(
      providerCoverageArtifactReferenceFailuresForSource(source, "/repo/integrations/video/zoom/src/manifest.ts", {
        artifactExists: (artifactPath) => artifactPath === "docs/provider-coverage/zoom-meetings-api-2026-06-18.operations.json",
      }).map((failure) => failure.replace(/^.*manifest.ts: /, "")),
      [
        "operationCatalogArtifact references missing provider coverage artifact docs/provider-coverage/zoom-meetings-api-2026-06-18.functions.json",
        "functionCatalogArtifact must reference a repo-relative docs/provider-coverage artifact (tmp/functions.json)",
      ],
    );
  });
});
