import type { ProviderManifestInput } from "@cognidesk/core";
import type { IntegrationCategoryProfile } from "../../src/providers.js";

export type TestProviderOperationInput = string | {
  alias: string;
  level?: "required" | "recommended" | "optional" | "extension";
  extension?: boolean;
  capability?: string;
  providerObject?: string;
  inputSchemaRef?: string;
  outputSchemaRef?: string;
  sideEffect?: boolean;
  exposesSensitiveData?: boolean;
  changesWorkflow?: boolean;
};

export const ticketingCategoryProfile = {
  id: "ticketing.default.v1",
  category: "ticketing",
  operations: [
    { alias: "ticket.read", level: "required", capability: "read-provider-object" },
    { alias: "ticket.comment.create", level: "required", capability: "send" },
    { alias: "ticket.update", level: "recommended", capability: "update-provider-object" },
    { alias: "ticket.assign", level: "optional", capability: "transfer" },
  ],
} satisfies IntegrationCategoryProfile;

export function ticketingManifestWithOperations(operations: TestProviderOperationInput[]): ProviderManifestInput {
  return {
    id: "ticketing.zendesk",
    name: "Zendesk",
    packageName: "@cognidesk/integration-ticketing-zendesk",
    provider: "zendesk",
    category: "ticketing",
    trustLevel: "community",
    directions: ["bidirectional"],
    coverage: {
      scope: "support-workflow-subset",
      evidence: [{ label: "Zendesk API reference", url: "https://developer.zendesk.com/api-reference/" }],
    },
    capabilities: [
      {
        capability: "read-provider-object",
        providerObjects: [{ kind: "ticket", label: "Ticket" }],
        exposesSensitiveData: true,
      },
      {
        capability: "send",
        providerObjects: [{ kind: "ticketComment", label: "Ticket Comment" }],
        sideEffect: true,
        exposesSensitiveData: true,
      },
      {
        capability: "update-provider-object",
        providerObjects: [{ kind: "ticket", label: "Ticket" }],
        sideEffect: true,
        exposesSensitiveData: true,
        changesWorkflow: true,
      },
      {
        capability: "transfer",
        providerObjects: [{ kind: "ticket", label: "Ticket" }],
        sideEffect: true,
        changesWorkflow: true,
      },
    ],
    operations: operations.map(providerOperation),
  };
}

function providerOperation(operation: TestProviderOperationInput) {
  if (typeof operation !== "string") {
    return {
      ...operation,
      capability: operation.capability ?? capabilityForOperation(operation.alias),
    };
  }
  return {
    alias: operation,
    capability: capabilityForOperation(operation),
  };
}

function capabilityForOperation(alias: string) {
  const operation = ticketingCategoryProfile.operations?.find((candidate) => candidate.alias === alias);
  if (!operation?.capability) {
    throw new Error(`No test capability declared for operation '${alias}'.`);
  }
  return operation.capability;
}
