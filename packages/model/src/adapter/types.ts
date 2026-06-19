import type {
  EmbeddingModel,
  generateText,
  LanguageModel,
} from "ai";
import type {
  AgentModelSet,
  ModelPromptProfile,
} from "@cognidesk/core";
import type {
  ModelProfileRegistration,
  PromptOverrideRegistry,
} from "../prompt/profiles.js";

export type AiSdkProviderOptions = NonNullable<Parameters<typeof generateText>[0]["providerOptions"]>;

export type ModelJsonPrimitive = string | number | boolean | null;
export type ModelJsonValue =
  | ModelJsonPrimitive
  | ModelJsonObject
  | readonly ModelJsonValue[];
export type ModelProviderExtensionValue = ModelJsonValue | object | undefined;
export interface ModelJsonObject {
  [key: string]: ModelProviderExtensionValue;
}
export type ModelProviderPayload = ModelJsonObject | object;
export type ModelProviderQuery = Record<string, ModelProviderExtensionValue>;
export interface ModelProviderResponse extends ModelJsonObject {}
export interface ModelProviderExtensionFields extends ModelJsonObject {}

export interface CognideskModelOptions {
  model: LanguageModel;
  providerId?: string;
  modelId?: string;
  logicalModelSlug?: string;
  promptProfile?: ModelPromptProfile;
  modelProfiles?: ModelProfileRegistration[];
  promptOverrides?: PromptOverrideRegistry;
  promptOverrideBaseDir?: string;
  temperature?: number;
  maxOutputTokens?: number;
  headers?: Record<string, string>;
  providerOptions?: AiSdkProviderOptions;
}

export interface CognideskEmbeddingModelOptions {
  model: EmbeddingModel;
  providerId?: string;
  modelId?: string;
  headers?: Record<string, string>;
  providerOptions?: AiSdkProviderOptions;
}

export type LanguageModelRole = Exclude<keyof AgentModelSet, "journeyEmbedding">;

export type ModelRoleEntry =
  | LanguageModel
  | (Omit<CognideskModelOptions, "promptProfile" | "modelProfiles" | "promptOverrides" | "promptOverrideBaseDir"> & {
      promptProfile?: ModelPromptProfile;
    });

export type EmbeddingModelRoleEntry =
  | EmbeddingModel
  | CognideskEmbeddingModelOptions;

export type ModelSetDefinition = {
  [Role in LanguageModelRole]: ModelRoleEntry;
} & {
  journeyEmbedding: EmbeddingModelRoleEntry;
};

export interface CreateModelSetOptions {
  modelProfiles?: ModelProfileRegistration[];
  promptOverrides?: PromptOverrideRegistry;
  promptOverrideBaseDir?: string;
}
