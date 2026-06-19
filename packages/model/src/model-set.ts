import type {
  AgentModelSet,
  ModelAdapter,
} from "@cognidesk/core";
import {
  cognideskEmbeddingModel,
  cognideskModel,
} from "./ai-sdk-adapter.js";
import type {
  CognideskEmbeddingModelOptions,
  CognideskModelOptions,
  CreateModelSetOptions,
  EmbeddingModelRoleEntry,
  ModelRoleEntry,
  ModelSetDefinition,
} from "./adapter/types.js";

export function createModelSet(definition: ModelSetDefinition, options: CreateModelSetOptions = {}): AgentModelSet {
  return {
    response: createLanguageRole(definition.response, options),
    matcher: createLanguageRole(definition.matcher, options),
    extraction: createLanguageRole(definition.extraction, options),
    citationPostProcessing: createLanguageRole(definition.citationPostProcessing, options),
    compaction: createLanguageRole(definition.compaction, options),
    journeyEmbedding: createEmbeddingRole(definition.journeyEmbedding),
  };
}

function createLanguageRole(entry: ModelRoleEntry, options: CreateModelSetOptions): ModelAdapter {
  const normalized = normalizeLanguageRoleEntry(entry);
  return cognideskModel({
    ...normalized,
    ...(options.modelProfiles ? { modelProfiles: options.modelProfiles } : {}),
    ...(options.promptOverrides ? { promptOverrides: options.promptOverrides } : {}),
    ...(options.promptOverrideBaseDir ? { promptOverrideBaseDir: options.promptOverrideBaseDir } : {}),
  });
}

function createEmbeddingRole(entry: EmbeddingModelRoleEntry): ModelAdapter {
  return cognideskEmbeddingModel(normalizeEmbeddingRoleEntry(entry));
}

function normalizeLanguageRoleEntry(entry: ModelRoleEntry): CognideskModelOptions {
  return isConfiguredRoleEntry(entry) ? entry as CognideskModelOptions : { model: entry };
}

function normalizeEmbeddingRoleEntry(entry: EmbeddingModelRoleEntry): CognideskEmbeddingModelOptions {
  return isConfiguredRoleEntry(entry) ? entry as CognideskEmbeddingModelOptions : { model: entry };
}

function isConfiguredRoleEntry(entry: unknown): entry is { model: unknown } {
  return typeof entry === "object" && entry !== null && "model" in entry;
}
