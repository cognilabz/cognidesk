import { createAnthropic } from "@ai-sdk/anthropic";
import { createAzure } from "@ai-sdk/azure";
import { createCohere } from "@ai-sdk/cohere";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createGroq } from "@ai-sdk/groq";
import { createMistral } from "@ai-sdk/mistral";
import { createOpenAI } from "@ai-sdk/openai";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { createXai } from "@ai-sdk/xai";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import type { AgentModelSet } from "@cognidesk/core";
import { createModelSet, type ModelSetDefinition } from "@cognidesk/model";
import {
  getConfiguredEmbeddingProvider,
  type ConfiguredModelApiKeys,
  type FlightDemoEmbeddingConfig,
  type FlightDemoModelConfig,
} from "../../config.js";

type LanguageModelEntry = ModelSetDefinition["response"];
type EmbeddingModelEntry = ModelSetDefinition["journeyEmbedding"];

type LanguageProviderFactory = {
  languageModel: (modelId: string) => LanguageModelEntry;
};

type EmbeddingProviderFactory = {
  embeddingModel: (modelId: string) => EmbeddingModelEntry;
};

export function createAiSdkModelSet(
  config: FlightDemoModelConfig,
  apiKeys: ConfiguredModelApiKeys | string,
): AgentModelSet {
  const keys = normalizeApiKeys(apiKeys);
  const languageProvider = createLanguageProvider(config, keys.language);
  const embeddingProviderConfig = getConfiguredEmbeddingProvider(config);
  const embeddingProvider = createEmbeddingProvider(
    embeddingProviderConfig,
    getEmbeddingApiKey(config, embeddingProviderConfig, keys),
  );

  return createModelSet({
    response: languageProvider.languageModel(config.roles.response),
    matcher: languageProvider.languageModel(config.roles.matcher),
    extraction: languageProvider.languageModel(config.roles.extraction),
    citationPostProcessing: languageProvider.languageModel(config.roles.citationPostProcessing),
    compaction: languageProvider.languageModel(config.roles.compaction),
    journeyEmbedding: embeddingProvider.embeddingModel(config.roles.journeyEmbedding),
  });
}

function normalizeApiKeys(apiKeys: ConfiguredModelApiKeys | string): ConfiguredModelApiKeys {
  return typeof apiKeys === "string" ? { language: apiKeys } : apiKeys;
}

function getEmbeddingApiKey(
  languageConfig: FlightDemoModelConfig,
  embeddingConfig: FlightDemoEmbeddingConfig,
  apiKeys: ConfiguredModelApiKeys,
) {
  if (embeddingConfig.apiKeyEnv === languageConfig.apiKeyEnv) {
    return apiKeys.language;
  }
  if (apiKeys.embedding) {
    return apiKeys.embedding;
  }
  throw new Error(
    `Flight demo requires ${embeddingConfig.apiKeyEnv} for ${embeddingConfig.provider} embeddings.`,
  );
}

function createLanguageProvider(config: FlightDemoModelConfig, apiKey: string): LanguageProviderFactory {
  switch (config.provider) {
    case "openai": {
      const provider = createOpenAI({
        apiKey,
        ...(config.baseURL ? { baseURL: config.baseURL } : {}),
      });
      return { languageModel: (modelId) => provider.responses(modelId) };
    }
    case "openrouter": {
      const provider = createOpenRouter({
        apiKey,
        ...(config.appName ? { appName: config.appName } : {}),
        ...(config.siteUrl ? { appUrl: config.siteUrl } : {}),
      });
      return { languageModel: (modelId) => provider.chat(modelId) };
    }
    case "anthropic": {
      const provider = createAnthropic({
        apiKey,
        ...(config.baseURL ? { baseURL: config.baseURL } : {}),
      });
      return { languageModel: (modelId) => provider.chat(modelId) };
    }
    case "google": {
      const provider = createGoogleGenerativeAI({
        apiKey,
        ...(config.baseURL ? { baseURL: config.baseURL } : {}),
      });
      return { languageModel: (modelId) => provider.chat(modelId) };
    }
    case "mistral": {
      const provider = createMistral({
        apiKey,
        ...(config.baseURL ? { baseURL: config.baseURL } : {}),
      });
      return { languageModel: (modelId) => provider.chat(modelId) };
    }
    case "cohere": {
      const provider = createCohere({
        apiKey,
        ...(config.baseURL ? { baseURL: config.baseURL } : {}),
      });
      return { languageModel: (modelId) => provider.languageModel(modelId) };
    }
    case "groq": {
      const provider = createGroq({
        apiKey,
        ...(config.baseURL ? { baseURL: config.baseURL } : {}),
      });
      return { languageModel: (modelId) => provider.languageModel(modelId) };
    }
    case "xai": {
      const provider = createXai({
        apiKey,
        ...(config.baseURL ? { baseURL: config.baseURL } : {}),
      });
      return { languageModel: (modelId) => provider.chat(modelId) };
    }
    case "azure-openai": {
      const provider = createAzure(createAzureOptions(config, apiKey));
      return { languageModel: (modelId) => provider.responses(modelId) };
    }
    case "openai-compatible": {
      const provider = createOpenAICompatible<string, string, string, string>({
        apiKey,
        name: config.name,
        baseURL: config.baseURL,
        ...(config.includeUsage !== undefined ? { includeUsage: config.includeUsage } : {}),
        ...(config.supportsStructuredOutputs !== undefined
          ? { supportsStructuredOutputs: config.supportsStructuredOutputs }
          : {}),
      });
      return { languageModel: (modelId) => provider.languageModel(modelId) };
    }
  }
}

function createEmbeddingProvider(config: FlightDemoEmbeddingConfig, apiKey: string): EmbeddingProviderFactory {
  switch (config.provider) {
    case "openai": {
      const provider = createOpenAI({
        apiKey,
        ...(config.baseURL ? { baseURL: config.baseURL } : {}),
      });
      return { embeddingModel: (modelId) => provider.embedding(modelId) };
    }
    case "openrouter": {
      const provider = createOpenRouter({
        apiKey,
        ...(config.appName ? { appName: config.appName } : {}),
        ...(config.siteUrl ? { appUrl: config.siteUrl } : {}),
      });
      return { embeddingModel: (modelId) => provider.textEmbeddingModel(modelId) };
    }
    case "google": {
      const provider = createGoogleGenerativeAI({
        apiKey,
        ...(config.baseURL ? { baseURL: config.baseURL } : {}),
      });
      return { embeddingModel: (modelId) => provider.embedding(modelId) };
    }
    case "mistral": {
      const provider = createMistral({
        apiKey,
        ...(config.baseURL ? { baseURL: config.baseURL } : {}),
      });
      return { embeddingModel: (modelId) => provider.embedding(modelId) };
    }
    case "cohere": {
      const provider = createCohere({
        apiKey,
        ...(config.baseURL ? { baseURL: config.baseURL } : {}),
      });
      return { embeddingModel: (modelId) => provider.embedding(modelId) };
    }
    case "azure-openai": {
      const provider = createAzure(createAzureOptions(config, apiKey));
      return { embeddingModel: (modelId) => provider.embedding(modelId) };
    }
    case "openai-compatible": {
      const provider = createOpenAICompatible<string, string, string, string>({
        apiKey,
        name: config.name,
        baseURL: config.baseURL,
        ...(config.includeUsage !== undefined ? { includeUsage: config.includeUsage } : {}),
        ...(config.supportsStructuredOutputs !== undefined
          ? { supportsStructuredOutputs: config.supportsStructuredOutputs }
          : {}),
      });
      return { embeddingModel: (modelId) => provider.embeddingModel(modelId) };
    }
  }
}

function createAzureOptions(
  config: Extract<FlightDemoModelConfig | FlightDemoEmbeddingConfig, { provider: "azure-openai" }>,
  apiKey: string,
) {
  return {
    apiKey,
    ...(config.resourceName ? { resourceName: config.resourceName } : {}),
    ...(config.baseURL ? { baseURL: config.baseURL } : {}),
    ...(config.apiVersion ? { apiVersion: config.apiVersion } : {}),
    ...(config.useDeploymentBasedUrls !== undefined ? { useDeploymentBasedUrls: config.useDeploymentBasedUrls } : {}),
  };
}
