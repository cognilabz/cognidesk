import {
  expect,
  it,
  WHEREBY_FULL_API_GENERATED_FUNCTION_COUNT,
  WHEREBY_FULL_API_OPERATION_COUNT,
  WHEREBY_FULL_API_PATH_COUNT,
  wherebyVideoProviderManifest,
} from "./helpers.js";

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
    expect(wherebyVideoProviderManifest.credentialRequirements
      .find((requirement) => requirement.id === "whereby-api-key")?.scopes).toEqual([]);
    expect(wherebyVideoProviderManifest.limitations.join(" ")).toContain("SDK user");
    expect(wherebyVideoProviderManifest.privacyNotes.join(" ")).toContain("recording");
    expect(wherebyVideoProviderManifest.coverage).toMatchObject({
      scope: "provider-api-subset",
    });
    expect(wherebyVideoProviderManifest.coverage.notes.join(" "))
      .toContain("every operation in Whereby's official public REST OpenAPI spec");
    expect(wherebyVideoProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://raw.githubusercontent.com/whereby/docs/main/.gitbook/assets/_api-reference-docs-openapi.json",
        "https://docs.whereby.com/reference/whereby-rest-api-reference/meetings",
        "https://docs.whereby.com/reference/whereby-rest-api-reference/recordings",
        "https://docs.whereby.com/reference/whereby-rest-api-reference/summaries",
      ]));
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
