import { expect, expectTypeOf, it } from "vitest";
import {
  SES_FULL_API_GENERATED_FUNCTION_COUNT,
  SES_FULL_API_OPERATION_COUNT,
  sesEmailProviderManifest,
  type SesEmailClient,
  type SesFullApiOperationResponseMap,
  type SesListEmailIdentitiesResponse,
  type SesSuppressedDestinationResponse,
} from "../../../../src/email/ses/index.js";

export function registerSesManifestTests() {
  it("exports an official provider manifest for Amazon SES email", () => {
    expect(sesEmailProviderManifest).toMatchObject({
      id: "email.ses",
      packageName: "@cognidesk/integrations",
      category: "email",
      provider: "ses",
      trustLevel: "official",
      coverage: {
        scope: "full-provider-api",
      },
    });
    expect(SES_FULL_API_OPERATION_COUNT).toBe(182);
    expect(SES_FULL_API_GENERATED_FUNCTION_COUNT).toBe(182);
    expect(sesEmailProviderManifest.metadata).toMatchObject({
      fullProviderApiVerification: {
        documentedOperationCount: 182,
        implementedOperationCount: 182,
        unimplementedOperationCount: 0,
        generatedFunctionCount: 182,
      },
    });
    expect(sesEmailProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "send",
        "draft",
        "thread",
        "attach",
        "read-provider-object",
        "search-provider-object",
        "update-provider-object",
      ]));
    expect(sesEmailProviderManifest.credentialRequirements.find((requirement) =>
      requirement.id === "aws-access-key-id"
    )?.scopes).toEqual(expect.arrayContaining([
      "ses:SendEmail",
      "ses:GetAccount",
      "ses:ListEmailIdentities",
      "ses:GetSuppressedDestination",
    ]));
    expect(sesEmailProviderManifest.metadata).toMatchObject({
      iamActions: expect.arrayContaining([
        "ses:SendEmail",
        "ses:GetAccount",
        "ses:ListEmailIdentities",
        "ses:GetSuppressedDestination",
        "ses:DeleteSuppressedDestination",
      ]),
    });
    expect(sesEmailProviderManifest.capabilities.flatMap((capability) =>
      capability.providerObjects?.map((object) => object.kind) ?? []
    )).toContain("sesSuppressedDestination");
    expect(sesEmailProviderManifest.capabilities.find((capability) =>
      capability.capability === "update-provider-object"
    )).toMatchObject({
      sideEffect: true,
      changesWorkflow: true,
      providerObjects: [{ kind: "sesSuppressedDestination", label: "SES Suppressed Destination" }],
    });
    const receiveCapability = sesEmailProviderManifest.capabilities.find((capability) =>
      capability.capability === "receive"
    );
    expect(receiveCapability?.label).toBe("Parse SES/SNS email notifications");
    expect(receiveCapability?.description).toContain("does not fetch mailbox contents");
    expect(receiveCapability?.description).toContain("S3-stored raw messages");
    expect(sesEmailProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_GetAccount.html",
        "https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListEmailIdentities.html",
        "https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListEmailTemplates.html",
        "https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_ListConfigurationSets.html",
        "https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_DeleteSuppressedDestination.html",
        "https://docs.aws.amazon.com/ses/latest/dg/receiving-email.html",
        "https://docs.aws.amazon.com/ses/latest/dg/receiving-email-notifications-contents.html",
      ]));
  });

  it("types Amazon SES helper and selected operation responses", () => {
    if (false) {
      const client = undefined as unknown as SesEmailClient;
      const account = client.requestOperation("sesv2:GetAccount", {});
      const identities = client.listEmailIdentities({ PageSize: 10 });
      const suppressed = client.getSuppressedDestination("customer@example.test");

      expectTypeOf<Awaited<typeof account>>().toEqualTypeOf<SesFullApiOperationResponseMap["sesv2:GetAccount"]>();
      expectTypeOf<Awaited<typeof identities>>().toEqualTypeOf<SesListEmailIdentitiesResponse>();
      expectTypeOf<Awaited<typeof suppressed>>().toEqualTypeOf<SesSuppressedDestinationResponse>();
    }
  });
}
