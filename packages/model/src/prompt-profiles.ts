import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import nunjucks from "nunjucks";
import type {
  ModelPromptProfile,
  ModelPromptProfileRenderInput,
  PromptTask,
} from "@cognidesk/core";
import { bundledPromptProfiles } from "./prompt-assets.js";
import {
  promptTasks,
  type BundledPromptProfile,
  type PromptTemplateMap,
} from "./prompt-types.js";

export type PromptOverrideValue =
  | string
  | { path: string }
  | { template: string };

export type PromptOverrideRegistry = Record<string, Partial<Record<PromptTask, PromptOverrideValue>>>;

export interface ModelProfileRegistration {
  slug: string;
  aliases?: string[];
}

export interface PromptProfileOptions {
  logicalModelSlug?: string;
  providerModelId?: string;
  modelProfiles?: ModelProfileRegistration[];
  promptOverrides?: PromptOverrideRegistry;
  baseDir?: string;
}

const builtInAliases: Record<string, string[]> = {
  "gpt-5.5": ["gpt-5.5", "openai/gpt-5.5", "openai:gpt-5.5"],
  "gpt-5.4-mini": ["gpt-5.4-mini", "openai/gpt-5.4-mini", "openai:gpt-5.4-mini"],
  "gpt-5.4-nano": ["gpt-5.4-nano", "openai/gpt-5.4-nano", "openai:gpt-5.4-nano"],
  "claude-sonnet-4.6": [
    "claude-sonnet-4.6",
    "anthropic/claude-sonnet-4.6",
    "anthropic:claude-sonnet-4.6",
  ],
};

const renderEnvironment = new nunjucks.Environment(undefined, {
  autoescape: false,
  throwOnUndefined: true,
  trimBlocks: false,
  lstripBlocks: false,
});

renderEnvironment.addFilter("json", (value: unknown, spaces = 0) => JSON.stringify(value, null, Number(spaces)));

export function createModelPromptProfile(options: PromptProfileOptions = {}): ModelPromptProfile {
  const registrations = registeredProfiles(options.modelProfiles);
  validateOverrideRegistry(options.promptOverrides, registrations);
  const requestedSlug = options.logicalModelSlug
    ? requireRegisteredSlug(options.logicalModelSlug, registrations)
    : normalizeLogicalModelSlugWithRegistrations(options.providerModelId, registrations) ?? "default";
  const profileSlug = registrations.has(requestedSlug) ? requestedSlug : "default";
  const templates = applyPromptOverrides(profileSlug, options.promptOverrides, options.baseDir);
  validatePromptTemplates(profileSlug, templates);
  const description = profileSlug === "default"
    ? "Default non-model-optimized Cognidesk prompt profile."
    : `Default Cognidesk prompt profile for ${profileSlug}.`;
  return {
    id: profileSlug,
    description,
    logicalModelSlug: profileSlug,
    renderInstruction(input: ModelPromptProfileRenderInput) {
      const template = templates[input.promptTask];
      if (!template) {
        throw new Error(`Prompt task '${input.promptTask}' is not available in profile '${profileSlug}'.`);
      }
      return renderTemplate(profileSlug, input.promptTask, template, renderContext(input));
    },
  };
}

export function normalizeLogicalModelSlug(
  providerModelId: string | undefined,
  modelProfiles: Iterable<ModelProfileRegistration> = [],
): string | null {
  return normalizeLogicalModelSlugWithRegistrations(providerModelId, registeredProfiles(modelProfiles));
}

export function listBuiltInPromptProfiles() {
  return Object.values(bundledPromptProfiles).map((profile) => profile.metadata);
}

function registeredProfiles(customProfiles: Iterable<ModelProfileRegistration> = []) {
  const registrations = new Map<string, ModelProfileRegistration>();
  for (const slug of Object.keys(bundledPromptProfiles)) {
    registrations.set(slug, { slug, aliases: builtInAliases[slug] ?? [slug] });
  }
  for (const profile of customProfiles) {
    registrations.set(profile.slug, profile);
  }
  return registrations;
}

function aliasMap(registrations: Map<string, ModelProfileRegistration>) {
  const aliases = new Map<string, string>();
  for (const [slug, registration] of registrations) {
    aliases.set(slug, slug);
    for (const alias of registration.aliases ?? []) aliases.set(alias, slug);
  }
  return aliases;
}

function normalizeLogicalModelSlugWithRegistrations(
  providerModelId: string | undefined,
  registrations: Map<string, ModelProfileRegistration>,
) {
  if (!providerModelId) return null;
  const normalized = providerModelId.trim();
  const aliases = aliasMap(registrations);
  return aliases.get(normalized) ?? aliases.get(stripProviderPrefix(normalized)) ?? null;
}

function stripProviderPrefix(modelId: string) {
  const slash = modelId.indexOf("/");
  if (slash > 0) return modelId.slice(slash + 1);
  const colon = modelId.indexOf(":");
  if (colon > 0) return modelId.slice(colon + 1);
  return modelId;
}

function requireRegisteredSlug(slug: string, registrations: Map<string, ModelProfileRegistration>) {
  if (!registrations.has(slug)) {
    throw new Error(`Logical model slug '${slug}' is not registered.`);
  }
  return slug;
}

function applyPromptOverrides(
  profileSlug: string,
  overrides: PromptOverrideRegistry | undefined,
  baseDir: string | undefined,
): PromptTemplateMap {
  const bundled = bundledPromptProfiles[profileSlug] ?? bundledPromptProfiles.default;
  if (!bundled) throw new Error("Default prompt profile is missing.");
  const templates = completeTemplateMap(bundled);
  for (const [task, value] of Object.entries(overrides?.[profileSlug] ?? {}) as Array<[PromptTask, PromptOverrideValue]>) {
    templates[task] = readPromptOverride(value, baseDir);
  }
  return templates;
}

function completeTemplateMap(profile: BundledPromptProfile): PromptTemplateMap {
  const templates = { ...profile.templates };
  for (const task of promptTasks) {
    if (!templates[task]?.trim()) {
      throw new Error(`Built-in prompt profile '${profile.metadata.slug}' is missing '${task}.md'.`);
    }
  }
  return templates;
}

function readPromptOverride(value: PromptOverrideValue, baseDir: string | undefined) {
  if (typeof value === "string") return readFileSync(resolve(baseDir ?? process.cwd(), value), "utf8");
  if ("path" in value) return readFileSync(resolve(baseDir ?? process.cwd(), value.path), "utf8");
  return value.template;
}

function validateOverrideRegistry(
  overrides: PromptOverrideRegistry | undefined,
  registrations: Map<string, ModelProfileRegistration>,
) {
  if (!overrides) return;
  for (const [slug, roleOverrides] of Object.entries(overrides)) {
    if (!registrations.has(slug)) throw new Error(`Prompt override references unregistered logical model slug '${slug}'.`);
    for (const task of Object.keys(roleOverrides)) {
      if (!promptTasks.includes(task as PromptTask)) throw new Error(`Unknown prompt task '${task}' in overrides for '${slug}'.`);
    }
  }
}

function validatePromptTemplates(profileSlug: string, templates: PromptTemplateMap) {
  for (const task of promptTasks) {
    const template = templates[task];
    if (!template) throw new Error(`Prompt profile '${profileSlug}' is missing '${task}.md'.`);
    renderTemplate(profileSlug, task, template, sampleContext(task));
  }
}

function renderTemplate(profileSlug: string, task: PromptTask, template: string, context: Record<string, unknown>) {
  try {
    return renderEnvironment.renderString(template, context).trim();
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown template error.";
    throw new Error(`Prompt template '${profileSlug}/${task}.md' failed validation: ${message}`);
  }
}

function renderContext(input: ModelPromptProfileRenderInput) {
  return {
    model: input.model,
    structuredOutput: input.structuredOutput ?? null,
    ...input.payload,
  };
}

function sampleContext(task: PromptTask): Record<string, unknown> {
  const structuredOutput = {
    required: true,
    name: task,
    schema: { type: "object", properties: {}, additionalProperties: false },
  };
  const common = {
    model: { provider: "test", model: "test", logicalModelSlug: "default" },
    structuredOutput,
  };
  switch (task) {
    case "response":
      return {
        ...common,
        selectedJourneyId: "journey",
        activeStateIds: ["state"],
        journeyContext: {},
        tools: [],
      };
    case "journey-matcher":
      return {
        ...common,
        latestUserMessage: "hello",
        activeJourneyId: null,
        conversationTranscript: [],
        candidates: [],
      };
    case "transition-matcher":
      return {
        ...common,
        journey: {},
        state: {},
        latestUserMessage: "hello",
        currentContext: {},
        candidates: [],
      };
    case "delegation-completion":
      return {
        ...common,
        journey: {},
        conversationTranscript: [],
      };
    case "extraction":
      return {
        ...common,
        journey: {},
        state: {},
        latestUserMessage: "hello",
        currentContext: {},
        fields: [],
        stateInstructions: "",
      };
    case "citation-post-processing":
      return {
        ...common,
        assistantAnswer: "answer",
        knowledge: [],
      };
    case "compaction":
      return {
        ...common,
        instructions: "compact",
        fromOffset: 1,
        toOffset: 1,
        events: [],
      };
    case "generated-preamble":
      return {
        ...common,
        purpose: null,
        maxWords: 24,
        history: [],
      };
  }
}
