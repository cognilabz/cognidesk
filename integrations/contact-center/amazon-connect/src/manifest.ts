import {
  defineIntegrationProviderPackage,
  type ProviderManifestInput,
} from "@cognidesk/integration-kit";

export const amazonConnectContactCenterManifestInput = {
  id: "contactCenter.amazon-connect",
  name: "Amazon Connect",
  packageName: "@cognidesk/integration-contact-center-amazon-connect",
  provider: "amazon-connect",
  category: "contact-center",
  trustLevel: "official",
  directions: ["inbound-only", "outbound-only", "bidirectional"],
  channelAudiences: ["customer-facing", "internal-support", "mixed"],
  credentialRequirements: [
    {
      id: "amazon-connect-instance",
      label: "Amazon Connect instance",
      description: "Amazon Connect instance ID and AWS region.",
      required: true,
    },
    {
      id: "amazon-connect-api-access",
      label: "Amazon Connect API access",
      description: "AWS SDK v3 credentials with the required Amazon Connect and Connect Participant permissions.",
      scopes: [
        "connect:StartTaskContact",
        "connect:StartChatContact",
        "connect:TransferContact",
        "connect:DescribeInstance",
      ],
      required: true,
      metadata: {
        scopeKind: "provider-permission-labels",
        privilegeGuidance: "These are AWS IAM action names, not OAuth scopes.",
      },
    },
  ],
  coverage: {
    scope: "support-workflow-subset",
    notes: [
      "Runtime uses AWS SDK v3 clients for normalized Amazon Connect support workflows.",
      "Raw AWS SDK clients are exposed as escape hatches for provider-specific operations.",
      "The previous generated Connect-family full-provider clone is not carried forward as a Cognidesk-owned API; broader Connect-family SDK clients should be added only when normalized support workflows need them.",
      "Connect Health was present in the old generated model bundle, but no @aws-sdk/client-connect-health npm package was found during the 2026-06-21 SDK check.",
    ],
    evidence: [
      { label: "AWS SDK for JavaScript v3", url: "https://github.com/aws/aws-sdk-js-v3" },
      { label: "Amazon Connect API Reference", url: "https://docs.aws.amazon.com/connect/latest/APIReference/Welcome.html" },
      { label: "Amazon Connect Participant Service", url: "https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Participant_Service.html" },
    ],
  },
  capabilities: [
    {
      capability: "handoff",
      label: "Create Amazon Connect task handoffs",
      providerObjects: [{ kind: "amazonConnectTaskContact", label: "Amazon Connect Task Contact" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "send",
      label: "Start Amazon Connect chat contacts and send participant messages",
      providerObjects: [
        { kind: "amazonConnectChatContact", label: "Amazon Connect Chat Contact" },
        { kind: "amazonConnectChatMessage", label: "Amazon Connect Chat Message" },
      ],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "transfer",
      label: "Transfer Amazon Connect task or email contacts",
      providerObjects: [{ kind: "amazonConnectContactTransfer", label: "Amazon Connect Contact Transfer" }],
      requiresCredential: true,
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      capability: "read-provider-object",
      label: "Read Amazon Connect instance and transcript state",
      providerObjects: [
        { kind: "amazonConnectInstance", label: "Amazon Connect Instance" },
        { kind: "amazonConnectChatTranscript", label: "Amazon Connect Chat Transcript" },
      ],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
  ],
  operations: [
    {
      alias: "contactCenter.handoff.request",
      capability: "handoff",
      providerOperation: "StartTaskContact",
      providerObject: "contactTransfer",
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      alias: "contactCenter.task.create",
      capability: "create-provider-object",
      providerOperation: "StartTaskContact",
      providerObject: "contactCenterTask",
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      alias: "contactCenter.contact.start",
      capability: "send",
      providerOperation: "StartChatContact",
      providerObject: "contact",
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      alias: "contactCenter.transfer.request",
      capability: "transfer",
      providerOperation: "TransferContact",
      providerObject: "contactTransfer",
      sideEffect: true,
      exposesSensitiveData: true,
      changesWorkflow: true,
    },
    {
      alias: "contactCenter.transcript.read",
      capability: "read-provider-object",
      providerOperation: "GetTranscript",
      providerObject: "contactTranscript",
      exposesSensitiveData: true,
    },
  ],
  privacyNotes: [
    "Task, chat, transfer, and transcript operations can include customer identifiers, routing attributes, messages, summaries, and participant tokens.",
    "AWS credentials remain inside the SDK user's runtime configuration.",
  ],
  limitations: [
    "Contact flows, queue/quick-connect routing, outbound consent, IAM policy, participant token custody, and WebSocket subscription behavior remain application/AWS configuration.",
    "Raw AWS SDK clients are available for escape-hatch use, but raw SDK breadth is not declared as normalized Cognidesk adapter coverage.",
  ],
  metadata: {
    implementation: {
      strategy: "official-sdk",
      sdkPackage: "@aws-sdk/client-connect, @aws-sdk/client-connectparticipant",
      sdkPackages: ["@aws-sdk/client-connect", "@aws-sdk/client-connectparticipant"],
    },
    channelCoverage: {
      taskContact: "sdk-normalized",
      chatContact: "sdk-normalized",
      participantMessages: "sdk-normalized",
      participantTranscript: "sdk-normalized",
      taskEmailTransfer: "sdk-normalized",
      rawAwsSdkClients: "escape-hatch",
      connectHealth: "sdk-gap",
    },
  },
  maintainers: [{ name: "Cognidesk", type: "official" }],
} as const satisfies ProviderManifestInput;

export const amazonConnectContactCenterManifest = defineIntegrationProviderPackage(amazonConnectContactCenterManifestInput);
