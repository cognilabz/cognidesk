export { cognideskModelProviderManifest } from "./provider-manifest.js";
export {
  cognideskEmbeddingModel,
  cognideskModel,
} from "./ai-sdk-adapter.js";
export { createModelSet } from "./model-set.js";
export {
  createModelPromptProfile,
  listBuiltInPromptProfiles,
  normalizeLogicalModelSlug,
  type ModelProfileRegistration,
  type PromptOverrideRegistry,
  type PromptProfileOptions,
} from "./prompt/profiles.js";
export {
  promptTemplateFields,
  promptTasks,
  type BundledPromptProfile,
  type PromptProfileMetadata,
  type PromptResearchBasis,
  type PromptTemplateMap,
} from "./prompt/types.js";
export {
  type AiSdkProviderOptions,
  type CognideskEmbeddingModelOptions,
  type CognideskModelOptions,
  type CreateModelSetOptions,
  type EmbeddingModelRoleEntry,
  type LanguageModelRole,
  type ModelJsonObject,
  type ModelJsonPrimitive,
  type ModelJsonValue,
  type ModelProviderExtensionFields,
  type ModelProviderExtensionValue,
  type ModelProviderPayload,
  type ModelProviderQuery,
  type ModelProviderResponse,
  type ModelRoleEntry,
  type ModelSetDefinition,
} from "./adapter/types.js";
