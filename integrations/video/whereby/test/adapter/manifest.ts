import {
  expect,
  it,
  WHEREBY_FULL_API_GENERATED_FUNCTION_COUNT,
  WHEREBY_FULL_API_OPERATION_COUNT,
  WHEREBY_FULL_API_PATH_COUNT,
  wherebyVideoProviderManifest,
} from "./helpers.js";
import packageJson from "../../package.json";

export function registerWherebyManifestTests() {
  it("exports an official provider manifest for Whereby video", () => {
    expect(wherebyVideoProviderManifest).toMatchObject({
      id: "video.whereby",
      packageName: "@cognidesk/integration-video-whereby",
      category: "video",
      provider: "whereby",
      trustLevel: "official",
    });
    expect(wherebyVideoProviderManifest.capabilities.map((capability: { capability: string }) => capability.capability))
      .toEqual(expect.arrayContaining([
        "schedule",
        "create-provider-object",
        "read-provider-object",
        "delete-provider-object",
        "update-provider-object",
        "receive",
        "whereby.request-signature",
      ]));
    expect(wherebyVideoProviderManifest.operations.map((operation) => operation.alias))
      .toContain("whereby.provider-operation.invoke");
    expect(wherebyVideoProviderManifest.operations.map((operation) => operation.alias))
      .not.toContain("whereby.rest.request");
    expect(wherebyVideoProviderManifest.credentialRequirements
      .find((requirement) => requirement.id === "whereby-provider-client")?.required).toBe(false);
    expect(wherebyVideoProviderManifest.credentialRequirements
      .find((requirement) => requirement.id === "whereby-api-key")?.scopes).toEqual([]);
    expect(wherebyVideoProviderManifest.limitations.join(" ")).toContain("SDK user");
    expect(wherebyVideoProviderManifest.privacyNotes.join(" ")).toContain("recording");
    expect(wherebyVideoProviderManifest.coverage).toMatchObject({
      scope: "provider-api-subset",
    });
    expect(wherebyVideoProviderManifest.coverage.notes.join(" "))
      .toContain("every operation in Whereby's official public REST OpenAPI spec");
    expect(wherebyVideoProviderManifest.coverage.notes.join(" "))
      .toContain("package-owned REST adapter");
    expect(wherebyVideoProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://raw.githubusercontent.com/whereby/docs/main/.gitbook/assets/_api-reference-docs-openapi.json",
        "https://docs.whereby.com/reference/whereby-rest-api-reference/meetings",
        "https://docs.whereby.com/reference/whereby-rest-api-reference/recordings",
        "https://docs.whereby.com/reference/whereby-rest-api-reference/summaries",
      ]));
    expect(wherebyVideoProviderManifest.metadata?.providerClient).toMatchObject({
      interface: "WherebyVideoProviderClient",
      importPolicy: "optional-host-override",
      defaultClientPolicy: "built-in-rest-with-api-key",
    });
    expect(wherebyVideoProviderManifest.metadata?.implementation).toMatchObject({
      implementationStrategy: "no-official-sdk-rest-adapter",
      defaultClientPolicy: "built-in-rest-with-api-key",
      restAdapterException: {
        result: "no-official-maintained-server-rest-sdk",
        checkedAt: "2026-06-25",
        defaultClientPolicy: "built-in-whereby-rest-adapter-with-api-key",
        typedClientOverride: "WherebyVideoProviderClient",
      },
    });
    expect(wherebyVideoProviderManifest.metadata?.providerRestAdapterException).toMatchObject({
      result: "no-official-maintained-server-rest-sdk",
      checkedAt: "2026-06-25",
      defaultClientPolicy: "built-in-whereby-rest-adapter-with-api-key",
      typedClientOverride: "WherebyVideoProviderClient",
      rejectedSdkPackages: expect.arrayContaining([
        expect.objectContaining({ packageName: "@whereby.com/browser-sdk", checkedVersion: "3.26.0", license: "MIT" }),
        expect.objectContaining({ packageName: "@whereby.com/core", checkedVersion: "1.15.0", license: "MIT" }),
        expect.objectContaining({ packageName: "@whereby.com/assistant-sdk", checkedVersion: "1.2.89", license: "MIT" }),
        expect.objectContaining({ packageName: "@whereby.com/react-native-sdk", checkedVersion: "0.8.113", license: "MIT" }),
        expect.objectContaining({ packageName: "@whereby.com/media", checkedVersion: "9.2.6", license: "MIT" }),
      ]),
      missingServerRestSdkPackages: expect.arrayContaining([
        expect.objectContaining({ packageName: "@whereby.com/rest-sdk", npmStatus: "404" }),
        expect.objectContaining({ packageName: "whereby", npmStatus: "404" }),
        expect.objectContaining({ packageName: "whereby-api", npmStatus: "404" }),
      ]),
    });
    expect(packageJson.cognidesk.providerRestAdapterException).toMatchObject({
      result: "no-official-maintained-server-rest-sdk",
      checkedAt: "2026-06-25",
      defaultClientPolicy: "built-in-whereby-rest-adapter-with-api-key",
      typedClientOverride: "WherebyVideoProviderClient",
      rejectedSdkPackages: expect.arrayContaining([
        expect.objectContaining({ packageName: "@whereby.com/core", checkedVersion: "1.15.0", license: "MIT" }),
        expect.objectContaining({ packageName: "@whereby.com/media", checkedVersion: "9.2.6", license: "MIT" }),
      ]),
      missingServerRestSdkPackages: expect.arrayContaining([
        expect.objectContaining({ packageName: "@whereby.com/rest-sdk", npmStatus: "404" }),
      ]),
    });
    expect(wherebyVideoProviderManifest.metadata?.generatedSupportSliceVerification).toMatchObject({
      documentedPathCount: 20,
      documentedOperationCount: 27,
      implementedOperationCount: 27,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 27,
    });
    expect(WHEREBY_FULL_API_PATH_COUNT).toBe(20);
    expect(WHEREBY_FULL_API_OPERATION_COUNT).toBe(27);
    expect(WHEREBY_FULL_API_GENERATED_FUNCTION_COUNT).toBe(27);
  });
}
