// Generated endpoint chunk for AmazonConnectFullApi.
// Do not edit by hand; run scripts/split-generated-client-modules.mjs after updating provider specs.

import type {
  AmazonConnectGeneratedOperationCaller,
  AmazonConnectFullApiOperationArgs,
  AmazonConnectFullApiOperationInput,
  AmazonConnectFullApiPathParamValue,
} from "../../full-api-client.generated.js";
import type { AmazonConnectFullApiOperationResponseMap } from "../../full-api-schema-types.generated.js";

// Hardened literal operation keys for generated SDK typing.
export const AmazonConnectFullApiAssistantsOperationKeys = [
  "qconnect:CreateAIAgent",
  "qconnect:CreateAIAgentVersion",
  "qconnect:CreateAIGuardrail",
  "qconnect:CreateAIGuardrailVersion",
  "qconnect:CreateAIPrompt",
  "qconnect:CreateAIPromptVersion",
  "qconnect:CreateAssistant",
  "qconnect:CreateAssistantAssociation",
  "qconnect:CreateSession",
  "qconnect:DeleteAIAgent",
  "qconnect:DeleteAIAgentVersion",
  "qconnect:DeleteAIGuardrail",
  "qconnect:DeleteAIGuardrailVersion",
  "qconnect:DeleteAIPrompt",
  "qconnect:DeleteAIPromptVersion",
  "qconnect:DeleteAssistant",
  "qconnect:DeleteAssistantAssociation",
  "qconnect:GetAIAgent",
  "qconnect:GetAIGuardrail",
  "qconnect:GetAIPrompt",
  "qconnect:GetAssistant",
  "qconnect:GetAssistantAssociation",
  "qconnect:GetNextMessage",
  "qconnect:GetRecommendations",
  "qconnect:GetSession",
  "qconnect:ListAIAgentVersions",
  "qconnect:ListAIAgents",
  "qconnect:ListAIGuardrailVersions",
  "qconnect:ListAIGuardrails",
  "qconnect:ListAIPromptVersions",
  "qconnect:ListAIPrompts",
  "qconnect:ListAssistantAssociations",
  "qconnect:ListAssistants",
  "qconnect:ListMessages",
  "qconnect:ListModels",
  "qconnect:ListSpans",
  "qconnect:NotifyRecommendationsReceived",
  "qconnect:PutFeedback",
  "qconnect:QueryAssistant",
  "qconnect:RemoveAssistantAIAgent",
  "qconnect:Retrieve",
  "qconnect:SearchSessions",
  "qconnect:SendMessage",
  "qconnect:UpdateAIAgent",
  "qconnect:UpdateAIGuardrail",
  "qconnect:UpdateAIPrompt",
  "qconnect:UpdateAssistantAIAgent",
  "qconnect:UpdateSession",
  "qconnect:UpdateSessionData",
  "wisdom:CreateAssistant",
  "wisdom:CreateAssistantAssociation",
  "wisdom:CreateSession",
  "wisdom:DeleteAssistant",
  "wisdom:DeleteAssistantAssociation",
  "wisdom:GetAssistant",
  "wisdom:GetAssistantAssociation",
  "wisdom:GetRecommendations",
  "wisdom:GetSession",
  "wisdom:ListAssistantAssociations",
  "wisdom:ListAssistants",
  "wisdom:NotifyRecommendationsReceived",
  "wisdom:QueryAssistant",
  "wisdom:SearchSessions"
] as const;
export type AmazonConnectFullApiAssistantsOperationKey = typeof AmazonConnectFullApiAssistantsOperationKeys[number];
// End hardened literal operation keys.

export interface AmazonConnectFullApiAssistantsOperationPathParamMap {
  "qconnect:CreateAIAgent": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:CreateAIAgentVersion": { "assistantId": AmazonConnectFullApiPathParamValue; "aiAgentId": AmazonConnectFullApiPathParamValue };
  "qconnect:CreateAIGuardrail": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:CreateAIGuardrailVersion": { "assistantId": AmazonConnectFullApiPathParamValue; "aiGuardrailId": AmazonConnectFullApiPathParamValue };
  "qconnect:CreateAIPrompt": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:CreateAIPromptVersion": { "assistantId": AmazonConnectFullApiPathParamValue; "aiPromptId": AmazonConnectFullApiPathParamValue };
  "qconnect:CreateAssistant": {};
  "qconnect:CreateAssistantAssociation": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:CreateSession": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteAIAgent": { "assistantId": AmazonConnectFullApiPathParamValue; "aiAgentId": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteAIAgentVersion": { "assistantId": AmazonConnectFullApiPathParamValue; "aiAgentId": AmazonConnectFullApiPathParamValue; "versionNumber": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteAIGuardrail": { "assistantId": AmazonConnectFullApiPathParamValue; "aiGuardrailId": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteAIGuardrailVersion": { "assistantId": AmazonConnectFullApiPathParamValue; "aiGuardrailId": AmazonConnectFullApiPathParamValue; "versionNumber": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteAIPrompt": { "assistantId": AmazonConnectFullApiPathParamValue; "aiPromptId": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteAIPromptVersion": { "assistantId": AmazonConnectFullApiPathParamValue; "aiPromptId": AmazonConnectFullApiPathParamValue; "versionNumber": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteAssistant": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:DeleteAssistantAssociation": { "assistantId": AmazonConnectFullApiPathParamValue; "assistantAssociationId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetAIAgent": { "assistantId": AmazonConnectFullApiPathParamValue; "aiAgentId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetAIGuardrail": { "assistantId": AmazonConnectFullApiPathParamValue; "aiGuardrailId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetAIPrompt": { "assistantId": AmazonConnectFullApiPathParamValue; "aiPromptId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetAssistant": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetAssistantAssociation": { "assistantId": AmazonConnectFullApiPathParamValue; "assistantAssociationId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetNextMessage": { "assistantId": AmazonConnectFullApiPathParamValue; "sessionId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetRecommendations": { "assistantId": AmazonConnectFullApiPathParamValue; "sessionId": AmazonConnectFullApiPathParamValue };
  "qconnect:GetSession": { "assistantId": AmazonConnectFullApiPathParamValue; "sessionId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListAIAgentVersions": { "assistantId": AmazonConnectFullApiPathParamValue; "aiAgentId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListAIAgents": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListAIGuardrailVersions": { "assistantId": AmazonConnectFullApiPathParamValue; "aiGuardrailId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListAIGuardrails": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListAIPromptVersions": { "assistantId": AmazonConnectFullApiPathParamValue; "aiPromptId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListAIPrompts": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListAssistantAssociations": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListAssistants": {};
  "qconnect:ListMessages": { "assistantId": AmazonConnectFullApiPathParamValue; "sessionId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListModels": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:ListSpans": { "assistantId": AmazonConnectFullApiPathParamValue; "sessionId": AmazonConnectFullApiPathParamValue };
  "qconnect:NotifyRecommendationsReceived": { "assistantId": AmazonConnectFullApiPathParamValue; "sessionId": AmazonConnectFullApiPathParamValue };
  "qconnect:PutFeedback": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:QueryAssistant": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:RemoveAssistantAIAgent": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:Retrieve": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:SearchSessions": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:SendMessage": { "assistantId": AmazonConnectFullApiPathParamValue; "sessionId": AmazonConnectFullApiPathParamValue };
  "qconnect:UpdateAIAgent": { "assistantId": AmazonConnectFullApiPathParamValue; "aiAgentId": AmazonConnectFullApiPathParamValue };
  "qconnect:UpdateAIGuardrail": { "assistantId": AmazonConnectFullApiPathParamValue; "aiGuardrailId": AmazonConnectFullApiPathParamValue };
  "qconnect:UpdateAIPrompt": { "assistantId": AmazonConnectFullApiPathParamValue; "aiPromptId": AmazonConnectFullApiPathParamValue };
  "qconnect:UpdateAssistantAIAgent": { "assistantId": AmazonConnectFullApiPathParamValue };
  "qconnect:UpdateSession": { "assistantId": AmazonConnectFullApiPathParamValue; "sessionId": AmazonConnectFullApiPathParamValue };
  "qconnect:UpdateSessionData": { "assistantId": AmazonConnectFullApiPathParamValue; "sessionId": AmazonConnectFullApiPathParamValue };
  "wisdom:CreateAssistant": {};
  "wisdom:CreateAssistantAssociation": { "assistantId": AmazonConnectFullApiPathParamValue };
  "wisdom:CreateSession": { "assistantId": AmazonConnectFullApiPathParamValue };
  "wisdom:DeleteAssistant": { "assistantId": AmazonConnectFullApiPathParamValue };
  "wisdom:DeleteAssistantAssociation": { "assistantId": AmazonConnectFullApiPathParamValue; "assistantAssociationId": AmazonConnectFullApiPathParamValue };
  "wisdom:GetAssistant": { "assistantId": AmazonConnectFullApiPathParamValue };
  "wisdom:GetAssistantAssociation": { "assistantId": AmazonConnectFullApiPathParamValue; "assistantAssociationId": AmazonConnectFullApiPathParamValue };
  "wisdom:GetRecommendations": { "assistantId": AmazonConnectFullApiPathParamValue; "sessionId": AmazonConnectFullApiPathParamValue };
  "wisdom:GetSession": { "assistantId": AmazonConnectFullApiPathParamValue; "sessionId": AmazonConnectFullApiPathParamValue };
  "wisdom:ListAssistantAssociations": { "assistantId": AmazonConnectFullApiPathParamValue };
  "wisdom:ListAssistants": {};
  "wisdom:NotifyRecommendationsReceived": { "assistantId": AmazonConnectFullApiPathParamValue; "sessionId": AmazonConnectFullApiPathParamValue };
  "wisdom:QueryAssistant": { "assistantId": AmazonConnectFullApiPathParamValue };
  "wisdom:SearchSessions": { "assistantId": AmazonConnectFullApiPathParamValue };
}

export interface AmazonConnectFullApiAssistantsOperationRequestMap {
  "qconnect:CreateAIAgent": AmazonConnectFullApiOperationInput<"qconnect:CreateAIAgent">;
  "qconnect:CreateAIAgentVersion": AmazonConnectFullApiOperationInput<"qconnect:CreateAIAgentVersion">;
  "qconnect:CreateAIGuardrail": AmazonConnectFullApiOperationInput<"qconnect:CreateAIGuardrail">;
  "qconnect:CreateAIGuardrailVersion": AmazonConnectFullApiOperationInput<"qconnect:CreateAIGuardrailVersion">;
  "qconnect:CreateAIPrompt": AmazonConnectFullApiOperationInput<"qconnect:CreateAIPrompt">;
  "qconnect:CreateAIPromptVersion": AmazonConnectFullApiOperationInput<"qconnect:CreateAIPromptVersion">;
  "qconnect:CreateAssistant": AmazonConnectFullApiOperationInput<"qconnect:CreateAssistant">;
  "qconnect:CreateAssistantAssociation": AmazonConnectFullApiOperationInput<"qconnect:CreateAssistantAssociation">;
  "qconnect:CreateSession": AmazonConnectFullApiOperationInput<"qconnect:CreateSession">;
  "qconnect:DeleteAIAgent": AmazonConnectFullApiOperationInput<"qconnect:DeleteAIAgent">;
  "qconnect:DeleteAIAgentVersion": AmazonConnectFullApiOperationInput<"qconnect:DeleteAIAgentVersion">;
  "qconnect:DeleteAIGuardrail": AmazonConnectFullApiOperationInput<"qconnect:DeleteAIGuardrail">;
  "qconnect:DeleteAIGuardrailVersion": AmazonConnectFullApiOperationInput<"qconnect:DeleteAIGuardrailVersion">;
  "qconnect:DeleteAIPrompt": AmazonConnectFullApiOperationInput<"qconnect:DeleteAIPrompt">;
  "qconnect:DeleteAIPromptVersion": AmazonConnectFullApiOperationInput<"qconnect:DeleteAIPromptVersion">;
  "qconnect:DeleteAssistant": AmazonConnectFullApiOperationInput<"qconnect:DeleteAssistant">;
  "qconnect:DeleteAssistantAssociation": AmazonConnectFullApiOperationInput<"qconnect:DeleteAssistantAssociation">;
  "qconnect:GetAIAgent": AmazonConnectFullApiOperationInput<"qconnect:GetAIAgent">;
  "qconnect:GetAIGuardrail": AmazonConnectFullApiOperationInput<"qconnect:GetAIGuardrail">;
  "qconnect:GetAIPrompt": AmazonConnectFullApiOperationInput<"qconnect:GetAIPrompt">;
  "qconnect:GetAssistant": AmazonConnectFullApiOperationInput<"qconnect:GetAssistant">;
  "qconnect:GetAssistantAssociation": AmazonConnectFullApiOperationInput<"qconnect:GetAssistantAssociation">;
  "qconnect:GetNextMessage": AmazonConnectFullApiOperationInput<"qconnect:GetNextMessage">;
  "qconnect:GetRecommendations": AmazonConnectFullApiOperationInput<"qconnect:GetRecommendations">;
  "qconnect:GetSession": AmazonConnectFullApiOperationInput<"qconnect:GetSession">;
  "qconnect:ListAIAgentVersions": AmazonConnectFullApiOperationInput<"qconnect:ListAIAgentVersions">;
  "qconnect:ListAIAgents": AmazonConnectFullApiOperationInput<"qconnect:ListAIAgents">;
  "qconnect:ListAIGuardrailVersions": AmazonConnectFullApiOperationInput<"qconnect:ListAIGuardrailVersions">;
  "qconnect:ListAIGuardrails": AmazonConnectFullApiOperationInput<"qconnect:ListAIGuardrails">;
  "qconnect:ListAIPromptVersions": AmazonConnectFullApiOperationInput<"qconnect:ListAIPromptVersions">;
  "qconnect:ListAIPrompts": AmazonConnectFullApiOperationInput<"qconnect:ListAIPrompts">;
  "qconnect:ListAssistantAssociations": AmazonConnectFullApiOperationInput<"qconnect:ListAssistantAssociations">;
  "qconnect:ListAssistants": AmazonConnectFullApiOperationInput<"qconnect:ListAssistants">;
  "qconnect:ListMessages": AmazonConnectFullApiOperationInput<"qconnect:ListMessages">;
  "qconnect:ListModels": AmazonConnectFullApiOperationInput<"qconnect:ListModels">;
  "qconnect:ListSpans": AmazonConnectFullApiOperationInput<"qconnect:ListSpans">;
  "qconnect:NotifyRecommendationsReceived": AmazonConnectFullApiOperationInput<"qconnect:NotifyRecommendationsReceived">;
  "qconnect:PutFeedback": AmazonConnectFullApiOperationInput<"qconnect:PutFeedback">;
  "qconnect:QueryAssistant": AmazonConnectFullApiOperationInput<"qconnect:QueryAssistant">;
  "qconnect:RemoveAssistantAIAgent": AmazonConnectFullApiOperationInput<"qconnect:RemoveAssistantAIAgent">;
  "qconnect:Retrieve": AmazonConnectFullApiOperationInput<"qconnect:Retrieve">;
  "qconnect:SearchSessions": AmazonConnectFullApiOperationInput<"qconnect:SearchSessions">;
  "qconnect:SendMessage": AmazonConnectFullApiOperationInput<"qconnect:SendMessage">;
  "qconnect:UpdateAIAgent": AmazonConnectFullApiOperationInput<"qconnect:UpdateAIAgent">;
  "qconnect:UpdateAIGuardrail": AmazonConnectFullApiOperationInput<"qconnect:UpdateAIGuardrail">;
  "qconnect:UpdateAIPrompt": AmazonConnectFullApiOperationInput<"qconnect:UpdateAIPrompt">;
  "qconnect:UpdateAssistantAIAgent": AmazonConnectFullApiOperationInput<"qconnect:UpdateAssistantAIAgent">;
  "qconnect:UpdateSession": AmazonConnectFullApiOperationInput<"qconnect:UpdateSession">;
  "qconnect:UpdateSessionData": AmazonConnectFullApiOperationInput<"qconnect:UpdateSessionData">;
  "wisdom:CreateAssistant": AmazonConnectFullApiOperationInput<"wisdom:CreateAssistant">;
  "wisdom:CreateAssistantAssociation": AmazonConnectFullApiOperationInput<"wisdom:CreateAssistantAssociation">;
  "wisdom:CreateSession": AmazonConnectFullApiOperationInput<"wisdom:CreateSession">;
  "wisdom:DeleteAssistant": AmazonConnectFullApiOperationInput<"wisdom:DeleteAssistant">;
  "wisdom:DeleteAssistantAssociation": AmazonConnectFullApiOperationInput<"wisdom:DeleteAssistantAssociation">;
  "wisdom:GetAssistant": AmazonConnectFullApiOperationInput<"wisdom:GetAssistant">;
  "wisdom:GetAssistantAssociation": AmazonConnectFullApiOperationInput<"wisdom:GetAssistantAssociation">;
  "wisdom:GetRecommendations": AmazonConnectFullApiOperationInput<"wisdom:GetRecommendations">;
  "wisdom:GetSession": AmazonConnectFullApiOperationInput<"wisdom:GetSession">;
  "wisdom:ListAssistantAssociations": AmazonConnectFullApiOperationInput<"wisdom:ListAssistantAssociations">;
  "wisdom:ListAssistants": AmazonConnectFullApiOperationInput<"wisdom:ListAssistants">;
  "wisdom:NotifyRecommendationsReceived": AmazonConnectFullApiOperationInput<"wisdom:NotifyRecommendationsReceived">;
  "wisdom:QueryAssistant": AmazonConnectFullApiOperationInput<"wisdom:QueryAssistant">;
  "wisdom:SearchSessions": AmazonConnectFullApiOperationInput<"wisdom:SearchSessions">;
}

export interface AmazonConnectFullApiAssistantsGeneratedClient {
  CreateAIAgent(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateAIAgent">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateAIAgent"]>;
  CreateAIAgentVersion(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateAIAgentVersion">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateAIAgentVersion"]>;
  CreateAIGuardrail(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateAIGuardrail">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateAIGuardrail"]>;
  CreateAIGuardrailVersion(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateAIGuardrailVersion">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateAIGuardrailVersion"]>;
  CreateAIPrompt(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateAIPrompt">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateAIPrompt"]>;
  CreateAIPromptVersion(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateAIPromptVersion">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateAIPromptVersion"]>;
  CreateAssistant(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateAssistant">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateAssistant"]>;
  CreateAssistantAssociation(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateAssistantAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateAssistantAssociation"]>;
  CreateSession(...args: AmazonConnectFullApiOperationArgs<"qconnect:CreateSession">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:CreateSession"]>;
  DeleteAIAgent(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteAIAgent">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteAIAgent"]>;
  DeleteAIAgentVersion(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteAIAgentVersion">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteAIAgentVersion"]>;
  DeleteAIGuardrail(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteAIGuardrail">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteAIGuardrail"]>;
  DeleteAIGuardrailVersion(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteAIGuardrailVersion">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteAIGuardrailVersion"]>;
  DeleteAIPrompt(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteAIPrompt">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteAIPrompt"]>;
  DeleteAIPromptVersion(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteAIPromptVersion">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteAIPromptVersion"]>;
  DeleteAssistant(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteAssistant">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteAssistant"]>;
  DeleteAssistantAssociation(...args: AmazonConnectFullApiOperationArgs<"qconnect:DeleteAssistantAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:DeleteAssistantAssociation"]>;
  GetAIAgent(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetAIAgent">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetAIAgent"]>;
  GetAIGuardrail(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetAIGuardrail">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetAIGuardrail"]>;
  GetAIPrompt(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetAIPrompt">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetAIPrompt"]>;
  GetAssistant(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetAssistant">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetAssistant"]>;
  GetAssistantAssociation(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetAssistantAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetAssistantAssociation"]>;
  GetNextMessage(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetNextMessage">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetNextMessage"]>;
  GetRecommendations(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetRecommendations">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetRecommendations"]>;
  GetSession(...args: AmazonConnectFullApiOperationArgs<"qconnect:GetSession">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:GetSession"]>;
  ListAIAgentVersions(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListAIAgentVersions">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListAIAgentVersions"]>;
  ListAIAgents(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListAIAgents">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListAIAgents"]>;
  ListAIGuardrailVersions(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListAIGuardrailVersions">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListAIGuardrailVersions"]>;
  ListAIGuardrails(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListAIGuardrails">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListAIGuardrails"]>;
  ListAIPromptVersions(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListAIPromptVersions">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListAIPromptVersions"]>;
  ListAIPrompts(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListAIPrompts">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListAIPrompts"]>;
  ListAssistantAssociations(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListAssistantAssociations">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListAssistantAssociations"]>;
  ListAssistants(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListAssistants">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListAssistants"]>;
  ListMessages(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListMessages">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListMessages"]>;
  ListModels(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListModels">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListModels"]>;
  ListSpans(...args: AmazonConnectFullApiOperationArgs<"qconnect:ListSpans">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:ListSpans"]>;
  NotifyRecommendationsReceived(...args: AmazonConnectFullApiOperationArgs<"qconnect:NotifyRecommendationsReceived">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:NotifyRecommendationsReceived"]>;
  PutFeedback(...args: AmazonConnectFullApiOperationArgs<"qconnect:PutFeedback">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:PutFeedback"]>;
  QueryAssistant(...args: AmazonConnectFullApiOperationArgs<"qconnect:QueryAssistant">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:QueryAssistant"]>;
  RemoveAssistantAIAgent(...args: AmazonConnectFullApiOperationArgs<"qconnect:RemoveAssistantAIAgent">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:RemoveAssistantAIAgent"]>;
  Retrieve(...args: AmazonConnectFullApiOperationArgs<"qconnect:Retrieve">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:Retrieve"]>;
  SearchSessions(...args: AmazonConnectFullApiOperationArgs<"qconnect:SearchSessions">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:SearchSessions"]>;
  SendMessageQconnect(...args: AmazonConnectFullApiOperationArgs<"qconnect:SendMessage">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:SendMessage"]>;
  UpdateAIAgent(...args: AmazonConnectFullApiOperationArgs<"qconnect:UpdateAIAgent">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:UpdateAIAgent"]>;
  UpdateAIGuardrail(...args: AmazonConnectFullApiOperationArgs<"qconnect:UpdateAIGuardrail">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:UpdateAIGuardrail"]>;
  UpdateAIPrompt(...args: AmazonConnectFullApiOperationArgs<"qconnect:UpdateAIPrompt">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:UpdateAIPrompt"]>;
  UpdateAssistantAIAgent(...args: AmazonConnectFullApiOperationArgs<"qconnect:UpdateAssistantAIAgent">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:UpdateAssistantAIAgent"]>;
  UpdateSession(...args: AmazonConnectFullApiOperationArgs<"qconnect:UpdateSession">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:UpdateSession"]>;
  UpdateSessionData(...args: AmazonConnectFullApiOperationArgs<"qconnect:UpdateSessionData">): Promise<AmazonConnectFullApiOperationResponseMap["qconnect:UpdateSessionData"]>;
  CreateAssistantWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:CreateAssistant">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:CreateAssistant"]>;
  CreateAssistantAssociationWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:CreateAssistantAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:CreateAssistantAssociation"]>;
  CreateSessionWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:CreateSession">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:CreateSession"]>;
  DeleteAssistantWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:DeleteAssistant">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:DeleteAssistant"]>;
  DeleteAssistantAssociationWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:DeleteAssistantAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:DeleteAssistantAssociation"]>;
  GetAssistantWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:GetAssistant">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:GetAssistant"]>;
  GetAssistantAssociationWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:GetAssistantAssociation">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:GetAssistantAssociation"]>;
  GetRecommendationsWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:GetRecommendations">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:GetRecommendations"]>;
  GetSessionWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:GetSession">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:GetSession"]>;
  ListAssistantAssociationsWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:ListAssistantAssociations">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:ListAssistantAssociations"]>;
  ListAssistantsWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:ListAssistants">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:ListAssistants"]>;
  NotifyRecommendationsReceivedWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:NotifyRecommendationsReceived">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:NotifyRecommendationsReceived"]>;
  QueryAssistantWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:QueryAssistant">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:QueryAssistant"]>;
  SearchSessionsWisdom(...args: AmazonConnectFullApiOperationArgs<"wisdom:SearchSessions">): Promise<AmazonConnectFullApiOperationResponseMap["wisdom:SearchSessions"]>;
}

export const AmazonConnectFullApiAssistantsGeneratedFunctionNames = [
  "CreateAIAgent",
  "CreateAIAgentVersion",
  "CreateAIGuardrail",
  "CreateAIGuardrailVersion",
  "CreateAIPrompt",
  "CreateAIPromptVersion",
  "CreateAssistant",
  "CreateAssistantAssociation",
  "CreateSession",
  "DeleteAIAgent",
  "DeleteAIAgentVersion",
  "DeleteAIGuardrail",
  "DeleteAIGuardrailVersion",
  "DeleteAIPrompt",
  "DeleteAIPromptVersion",
  "DeleteAssistant",
  "DeleteAssistantAssociation",
  "GetAIAgent",
  "GetAIGuardrail",
  "GetAIPrompt",
  "GetAssistant",
  "GetAssistantAssociation",
  "GetNextMessage",
  "GetRecommendations",
  "GetSession",
  "ListAIAgentVersions",
  "ListAIAgents",
  "ListAIGuardrailVersions",
  "ListAIGuardrails",
  "ListAIPromptVersions",
  "ListAIPrompts",
  "ListAssistantAssociations",
  "ListAssistants",
  "ListMessages",
  "ListModels",
  "ListSpans",
  "NotifyRecommendationsReceived",
  "PutFeedback",
  "QueryAssistant",
  "RemoveAssistantAIAgent",
  "Retrieve",
  "SearchSessions",
  "SendMessageQconnect",
  "UpdateAIAgent",
  "UpdateAIGuardrail",
  "UpdateAIPrompt",
  "UpdateAssistantAIAgent",
  "UpdateSession",
  "UpdateSessionData",
  "CreateAssistantWisdom",
  "CreateAssistantAssociationWisdom",
  "CreateSessionWisdom",
  "DeleteAssistantWisdom",
  "DeleteAssistantAssociationWisdom",
  "GetAssistantWisdom",
  "GetAssistantAssociationWisdom",
  "GetRecommendationsWisdom",
  "GetSessionWisdom",
  "ListAssistantAssociationsWisdom",
  "ListAssistantsWisdom",
  "NotifyRecommendationsReceivedWisdom",
  "QueryAssistantWisdom",
  "SearchSessionsWisdom"
] as const satisfies readonly (keyof AmazonConnectFullApiAssistantsGeneratedClient)[];

export function createAmazonConnectFullApiAssistantsGeneratedClient(
  callOperation: AmazonConnectGeneratedOperationCaller,
): AmazonConnectFullApiAssistantsGeneratedClient {
  return {
    CreateAIAgent: (...args) => callOperation("qconnect:CreateAIAgent", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateAIAgent">)),
    CreateAIAgentVersion: (...args) => callOperation("qconnect:CreateAIAgentVersion", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateAIAgentVersion">)),
    CreateAIGuardrail: (...args) => callOperation("qconnect:CreateAIGuardrail", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateAIGuardrail">)),
    CreateAIGuardrailVersion: (...args) => callOperation("qconnect:CreateAIGuardrailVersion", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateAIGuardrailVersion">)),
    CreateAIPrompt: (...args) => callOperation("qconnect:CreateAIPrompt", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateAIPrompt">)),
    CreateAIPromptVersion: (...args) => callOperation("qconnect:CreateAIPromptVersion", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateAIPromptVersion">)),
    CreateAssistant: (...args) => callOperation("qconnect:CreateAssistant", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateAssistant">)),
    CreateAssistantAssociation: (...args) => callOperation("qconnect:CreateAssistantAssociation", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateAssistantAssociation">)),
    CreateSession: (...args) => callOperation("qconnect:CreateSession", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:CreateSession">)),
    DeleteAIAgent: (...args) => callOperation("qconnect:DeleteAIAgent", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteAIAgent">)),
    DeleteAIAgentVersion: (...args) => callOperation("qconnect:DeleteAIAgentVersion", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteAIAgentVersion">)),
    DeleteAIGuardrail: (...args) => callOperation("qconnect:DeleteAIGuardrail", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteAIGuardrail">)),
    DeleteAIGuardrailVersion: (...args) => callOperation("qconnect:DeleteAIGuardrailVersion", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteAIGuardrailVersion">)),
    DeleteAIPrompt: (...args) => callOperation("qconnect:DeleteAIPrompt", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteAIPrompt">)),
    DeleteAIPromptVersion: (...args) => callOperation("qconnect:DeleteAIPromptVersion", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteAIPromptVersion">)),
    DeleteAssistant: (...args) => callOperation("qconnect:DeleteAssistant", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteAssistant">)),
    DeleteAssistantAssociation: (...args) => callOperation("qconnect:DeleteAssistantAssociation", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:DeleteAssistantAssociation">)),
    GetAIAgent: (...args) => callOperation("qconnect:GetAIAgent", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetAIAgent">)),
    GetAIGuardrail: (...args) => callOperation("qconnect:GetAIGuardrail", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetAIGuardrail">)),
    GetAIPrompt: (...args) => callOperation("qconnect:GetAIPrompt", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetAIPrompt">)),
    GetAssistant: (...args) => callOperation("qconnect:GetAssistant", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetAssistant">)),
    GetAssistantAssociation: (...args) => callOperation("qconnect:GetAssistantAssociation", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetAssistantAssociation">)),
    GetNextMessage: (...args) => callOperation("qconnect:GetNextMessage", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetNextMessage">)),
    GetRecommendations: (...args) => callOperation("qconnect:GetRecommendations", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetRecommendations">)),
    GetSession: (...args) => callOperation("qconnect:GetSession", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:GetSession">)),
    ListAIAgentVersions: (...args) => callOperation("qconnect:ListAIAgentVersions", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListAIAgentVersions">)),
    ListAIAgents: (...args) => callOperation("qconnect:ListAIAgents", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListAIAgents">)),
    ListAIGuardrailVersions: (...args) => callOperation("qconnect:ListAIGuardrailVersions", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListAIGuardrailVersions">)),
    ListAIGuardrails: (...args) => callOperation("qconnect:ListAIGuardrails", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListAIGuardrails">)),
    ListAIPromptVersions: (...args) => callOperation("qconnect:ListAIPromptVersions", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListAIPromptVersions">)),
    ListAIPrompts: (...args) => callOperation("qconnect:ListAIPrompts", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListAIPrompts">)),
    ListAssistantAssociations: (...args) => callOperation("qconnect:ListAssistantAssociations", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListAssistantAssociations">)),
    ListAssistants: (...args) => callOperation("qconnect:ListAssistants", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListAssistants">)),
    ListMessages: (...args) => callOperation("qconnect:ListMessages", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListMessages">)),
    ListModels: (...args) => callOperation("qconnect:ListModels", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListModels">)),
    ListSpans: (...args) => callOperation("qconnect:ListSpans", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:ListSpans">)),
    NotifyRecommendationsReceived: (...args) => callOperation("qconnect:NotifyRecommendationsReceived", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:NotifyRecommendationsReceived">)),
    PutFeedback: (...args) => callOperation("qconnect:PutFeedback", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:PutFeedback">)),
    QueryAssistant: (...args) => callOperation("qconnect:QueryAssistant", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:QueryAssistant">)),
    RemoveAssistantAIAgent: (...args) => callOperation("qconnect:RemoveAssistantAIAgent", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:RemoveAssistantAIAgent">)),
    Retrieve: (...args) => callOperation("qconnect:Retrieve", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:Retrieve">)),
    SearchSessions: (...args) => callOperation("qconnect:SearchSessions", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:SearchSessions">)),
    SendMessageQconnect: (...args) => callOperation("qconnect:SendMessage", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:SendMessage">)),
    UpdateAIAgent: (...args) => callOperation("qconnect:UpdateAIAgent", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:UpdateAIAgent">)),
    UpdateAIGuardrail: (...args) => callOperation("qconnect:UpdateAIGuardrail", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:UpdateAIGuardrail">)),
    UpdateAIPrompt: (...args) => callOperation("qconnect:UpdateAIPrompt", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:UpdateAIPrompt">)),
    UpdateAssistantAIAgent: (...args) => callOperation("qconnect:UpdateAssistantAIAgent", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:UpdateAssistantAIAgent">)),
    UpdateSession: (...args) => callOperation("qconnect:UpdateSession", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:UpdateSession">)),
    UpdateSessionData: (...args) => callOperation("qconnect:UpdateSessionData", ...(args as AmazonConnectFullApiOperationArgs<"qconnect:UpdateSessionData">)),
    CreateAssistantWisdom: (...args) => callOperation("wisdom:CreateAssistant", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:CreateAssistant">)),
    CreateAssistantAssociationWisdom: (...args) => callOperation("wisdom:CreateAssistantAssociation", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:CreateAssistantAssociation">)),
    CreateSessionWisdom: (...args) => callOperation("wisdom:CreateSession", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:CreateSession">)),
    DeleteAssistantWisdom: (...args) => callOperation("wisdom:DeleteAssistant", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:DeleteAssistant">)),
    DeleteAssistantAssociationWisdom: (...args) => callOperation("wisdom:DeleteAssistantAssociation", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:DeleteAssistantAssociation">)),
    GetAssistantWisdom: (...args) => callOperation("wisdom:GetAssistant", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:GetAssistant">)),
    GetAssistantAssociationWisdom: (...args) => callOperation("wisdom:GetAssistantAssociation", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:GetAssistantAssociation">)),
    GetRecommendationsWisdom: (...args) => callOperation("wisdom:GetRecommendations", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:GetRecommendations">)),
    GetSessionWisdom: (...args) => callOperation("wisdom:GetSession", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:GetSession">)),
    ListAssistantAssociationsWisdom: (...args) => callOperation("wisdom:ListAssistantAssociations", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:ListAssistantAssociations">)),
    ListAssistantsWisdom: (...args) => callOperation("wisdom:ListAssistants", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:ListAssistants">)),
    NotifyRecommendationsReceivedWisdom: (...args) => callOperation("wisdom:NotifyRecommendationsReceived", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:NotifyRecommendationsReceived">)),
    QueryAssistantWisdom: (...args) => callOperation("wisdom:QueryAssistant", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:QueryAssistant">)),
    SearchSessionsWisdom: (...args) => callOperation("wisdom:SearchSessions", ...(args as AmazonConnectFullApiOperationArgs<"wisdom:SearchSessions">)),
  };
}
