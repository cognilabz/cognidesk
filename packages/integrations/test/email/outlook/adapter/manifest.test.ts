import {
  describe,
  expect,
  it,
  OUTLOOK_GRAPH_API_GENERATED_FUNCTION_COUNT,
  OUTLOOK_GRAPH_API_GENERATED_FUNCTION_NAMES,
  OUTLOOK_GRAPH_API_OPERATION_COUNT,
  OUTLOOK_GRAPH_API_PATH_COUNT,
  outlookEmailProviderManifest,
} from "./helpers.js";

describe("@cognidesk/integrations", () => {
  it("exports an official provider manifest for Outlook email", () => {
    expect(outlookEmailProviderManifest).toMatchObject({
      id: "email.outlook",
      packageName: "@cognidesk/integrations",
      category: "email",
      provider: "outlook",
      trustLevel: "official",
      coverage: {
        scope: "provider-api-subset",
      },
    });
    expect(outlookEmailProviderManifest.metadata?.generatedProviderApiVerification).toMatchObject({
      documentedPathCount: 193,
      documentedOperationCount: 289,
      implementedOperationCount: 289,
      unimplementedOperationCount: 0,
      generatedFunctionCount: 289,
    });
    expect(OUTLOOK_GRAPH_API_PATH_COUNT).toBe(193);
    expect(OUTLOOK_GRAPH_API_OPERATION_COUNT).toBe(289);
    expect(OUTLOOK_GRAPH_API_GENERATED_FUNCTION_COUNT).toBe(289);
    expect(OUTLOOK_GRAPH_API_GENERATED_FUNCTION_NAMES).toEqual(expect.arrayContaining([
      "MeSendMail",
      "UsersUserSendMail",
      "MeMessagesMessageAttachmentsCreateUploadSession",
      "SubscriptionsSubscriptionUpdateSubscription",
      "SubscriptionsSubscriptionDeleteSubscription",
      "MeMailFoldersMailFolderMessagesDelta",
      "UsersUserGetUser",
    ]));
    expect(outlookEmailProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining([
        "receive",
        "draft",
        "send",
        "thread",
        "attach",
        "update-provider-object",
        "outlook.webhook-client-state",
      ]));
    expect(outlookEmailProviderManifest.capabilities.find((capability) =>
      capability.capability === "attach"
    )).toMatchObject({
      label: "Read Outlook attachment content",
      exposesSensitiveData: true,
    });
    expect(outlookEmailProviderManifest.credentialRequirements.map((requirement) => requirement.id))
      .toEqual([
        "microsoft-graph-oauth-access-token",
        "microsoft-graph-mailbox-user",
        "microsoft-graph-webhook-client-state",
      ]);
    expect(outlookEmailProviderManifest.credentialRequirements.find((requirement) =>
      requirement.id === "microsoft-graph-oauth-access-token"
    )?.description).toContain("operation-specific");
    expect(outlookEmailProviderManifest.metadata).toMatchObject({
      permissionAlternatives: {
        sendMail: {
          delegated: ["Mail.Send"],
          application: ["Mail.Send"],
        },
        messageDelta: {
          delegatedLeastPrivileged: ["Mail.ReadBasic"],
          applicationLeastPrivileged: ["Mail.ReadBasic.All"],
        },
        subscriptionCreate: {
          rule: expect.stringContaining("generated mailbox slice"),
        },
      },
    });
    expect(outlookEmailProviderManifest.coverage.notes.join(" "))
      .toContain("Outlook mailbox slice");
    expect(outlookEmailProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://github.com/microsoftgraph/msgraph-metadata/blob/master/apis.yaml",
        "https://raw.githubusercontent.com/microsoftgraph/msgraph-metadata/master/openapi/v1.0/openapi.yaml",
        "https://learn.microsoft.com/en-us/graph/api/user-sendmail?view=graph-rest-1.0",
        "https://learn.microsoft.com/en-us/graph/api/message-delta?view=graph-rest-1.0",
        "https://learn.microsoft.com/en-us/graph/api/subscription-post-subscriptions?view=graph-rest-1.0",
      ]));
    expect(outlookEmailProviderManifest.privacyNotes.join(" ")).toContain("outbound approval");
    expect(outlookEmailProviderManifest.privacyNotes.join(" ")).toContain("tenant/admin policy");
    expect(outlookEmailProviderManifest.limitations.join(" "))
      .toContain("generated mailbox slice exposes subscription renewal/delete/reauthorize operations");
  });
});
