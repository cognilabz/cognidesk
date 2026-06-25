import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";

import {
  isGeneratedFullProviderApiClone,
  isSdkBackedPackage,
  manifestOnlyRuntimeImportViolationsForSource,
  noProviderSdkDecisionMetadataFailuresForPackage,
  providerCoverageArtifactReferenceFailuresForSource,
  providerSdkDependencyMetadataFailuresForPackage,
  providerSdkRuntimeUsageFailuresForPackage,
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
      "@zoom/rivet",
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

  it("requires every provider package to declare provider SDK metadata, even when empty", () => {
    const pkg = {
      name: "@cognidesk/integration-ticketing-front",
      packageJsonPath: "/repo/integrations/ticketing/front/package.json",
      packageJson: {
        dependencies: {
          "@cognidesk/integration-kit": "workspace:*",
        },
        cognidesk: {
          providerPackage: true,
        },
      },
    };

    assert.deepEqual(
      providerSdkDependencyMetadataFailuresForPackage(pkg).map((failure) => failure.replace(/^.*package.json: /, "")),
      [
        "provider packages must declare cognidesk.providerSdkDependencies as an array; use [] only with an explicit REST/protocol/internal no-SDK decision",
      ],
    );
  });
});

describe("non-SDK provider decision metadata", () => {
  it("rejects empty provider SDK dependencies when only source declares a REST/protocol decision", async () => {
    await withTempProviderPackage({
      "src/manifest.ts": [
        "export const manifest = {",
        "  metadata: {",
        "    implementation: {",
        '      providerSdkDecision: "internal-provider/local-runtime/no-provider-SDK",',
        "      providerSdkDependencies: [],",
        "    },",
        "  },",
        "};",
      ].join("\n"),
    }, async (pkg) => {
      pkg.packageJson = {
        dependencies: { "@cognidesk/integration-kit": "workspace:*" },
        cognidesk: { providerSdkDependencies: [] },
      };

      assert.deepEqual(
        (await noProviderSdkDecisionMetadataFailuresForPackage(pkg)).map((failure) => failure.replace(/^.*package.json: /, "")),
        [
          "cognidesk.providerSdkDependencies is [], but no explicit REST/protocol/internal provider SDK decision was found in package metadata",
        ],
      );
    });
  });

  it("rejects empty provider SDK dependencies without an explicit no-SDK decision", async () => {
    await withTempProviderPackage({
      "src/index.ts": "export const runtime = {};",
    }, async (pkg) => {
      pkg.packageJson = {
        dependencies: { "@cognidesk/integration-kit": "workspace:*" },
        cognidesk: { providerSdkDependencies: [] },
      };

      assert.deepEqual(
        (await noProviderSdkDecisionMetadataFailuresForPackage(pkg)).map((failure) => failure.replace(/^.*package.json: /, "")),
        [
          "cognidesk.providerSdkDependencies is [], but no explicit REST/protocol/internal provider SDK decision was found in package metadata",
        ],
      );
    });
  });

  it("rejects empty or falsey package metadata as a no-SDK decision", async () => {
    await withTempProviderPackage({
      "src/index.ts": "export const runtime = {};",
    }, async (pkg) => {
      pkg.packageJson = {
        dependencies: { "@cognidesk/integration-kit": "workspace:*" },
        cognidesk: {
          providerSdkDependencies: [],
          providerRestAdapterException: {},
          providerSdkException: false,
          sdkDecision: "",
          implementationStrategy: "provider",
        },
      };

      assert.deepEqual(
        (await noProviderSdkDecisionMetadataFailuresForPackage(pkg)).map((failure) => failure.replace(/^.*package.json: /, "")),
        [
          "cognidesk.providerSdkDependencies is [], but no explicit REST/protocol/internal provider SDK decision was found in package metadata",
        ],
      );
    });
  });

  it("accepts structured package metadata with a meaningful no-SDK decision", async () => {
    await withTempProviderPackage({
      "src/index.ts": "export const runtime = {};",
    }, async (pkg) => {
      pkg.packageJson = {
        dependencies: { "@cognidesk/integration-kit": "workspace:*" },
        cognidesk: {
          providerSdkDependencies: [],
          providerRestAdapterException: {
            result: "no-official-sdk-rest-adapter",
            reason: "The provider has no suitable official backend SDK for this selected surface.",
          },
        },
      };

      assert.deepEqual(await noProviderSdkDecisionMetadataFailuresForPackage(pkg), []);
    });
  });
});

describe("provider SDK runtime usage", () => {
  it("accepts declared provider SDK dependencies that runtime code imports", async () => {
    await withTempProviderPackage({
      "src/index.ts": [
        'import { Connector } from "@servicenow/sdk-api";',
        "export function createClient() { return Connector; }",
      ].join("\n"),
    }, async (pkg) => {
      pkg.packageJson = {
        dependencies: { "@servicenow/sdk-api": "^4.8.0" },
        cognidesk: { providerSdkDependencies: ["@servicenow/sdk-api"] },
      };

      assert.deepEqual(await providerSdkRuntimeUsageFailuresForPackage(pkg), []);
    });
  });

  it("requires declared provider SDK dependencies to be used outside manifest-only and type-only source", async () => {
    await withTempProviderPackage({
      "src/manifest.ts": 'import { Connector } from "@servicenow/sdk-api";\nexport const manifest = {};',
      "src/index.ts": 'import type { Connector } from "@servicenow/sdk-api";\nexport const runtime = {};',
    }, async (pkg) => {
      pkg.packageJson = {
        dependencies: { "@servicenow/sdk-api": "^4.8.0" },
        cognidesk: { providerSdkDependencies: ["@servicenow/sdk-api"] },
      };

      assert.deepEqual(
        (await providerSdkRuntimeUsageFailuresForPackage(pkg)).map((failure) => failure.replace(/^.*package.json: /, "")),
        [
          "cognidesk.providerSdkDependencies declares @servicenow/sdk-api, but runtime source does not import it",
        ],
      );
    });
  });

  it("does not count named type-only specifier imports as runtime SDK usage", async () => {
    await withTempProviderPackage({
      "src/index.ts": 'import { type Connector } from "@servicenow/sdk-api";\nexport const runtime = {};',
    }, async (pkg) => {
      pkg.packageJson = {
        dependencies: { "@servicenow/sdk-api": "^4.8.0" },
        cognidesk: { providerSdkDependencies: ["@servicenow/sdk-api"] },
      };

      assert.deepEqual(
        (await providerSdkRuntimeUsageFailuresForPackage(pkg)).map((failure) => failure.replace(/^.*package.json: /, "")),
        [
          "cognidesk.providerSdkDependencies declares @servicenow/sdk-api, but runtime source does not import it",
        ],
      );
    });
  });

  it("counts mixed value and type specifier imports as runtime SDK usage", async () => {
    await withTempProviderPackage({
      "src/index.ts": [
        'import { Connector, type ConnectorOptions } from "@servicenow/sdk-api";',
        "export function createClient(options: ConnectorOptions) { return new Connector(options); }",
      ].join("\n"),
    }, async (pkg) => {
      pkg.packageJson = {
        dependencies: { "@servicenow/sdk-api": "^4.8.0" },
        cognidesk: { providerSdkDependencies: ["@servicenow/sdk-api"] },
      };

      assert.deepEqual(await providerSdkRuntimeUsageFailuresForPackage(pkg), []);
    });
  });
});

async function withTempProviderPackage(files, run) {
  const dir = await mkdtemp(path.join(tmpdir(), "cognidesk-provider-architecture-"));
  try {
    for (const [file, source] of Object.entries(files)) {
      const filePath = path.join(dir, file);
      await mkdir(path.dirname(filePath), { recursive: true });
      await writeFile(filePath, source, "utf8");
    }
    await run({
      dir,
      name: "@cognidesk/integration-ticketing-servicenow",
      packageJsonPath: path.join(dir, "package.json"),
      packageJson: {},
    });
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

describe("providerCoverageArtifactReferenceFailuresForSource", () => {
  it("requires coverage artifact references to resolve under docs/provider-coverage", () => {
    const source = [
      "export const metadata = {",
      "  coverageArtifact: \"docs/provider-coverage/zoom-meetings-api-2026-06-18.operations.json\",",
      "  \"operationCatalogArtifact\": \"docs/provider-coverage/zoom-meetings-api-2026-06-18.functions.json\",",
      "  'functionCatalogArtifact': \"tmp/functions.json\",",
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
