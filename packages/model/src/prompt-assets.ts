import type { BundledPromptProfile } from "./prompt-types.js";

import defaultProfile from "../assets/prompts/default/profile.json" with { type: "json" };
import defaultResponse from "../assets/prompts/default/response.md";
import defaultJourneyMatcher from "../assets/prompts/default/journey-matcher.md";
import defaultTransitionMatcher from "../assets/prompts/default/transition-matcher.md";
import defaultDelegationCompletion from "../assets/prompts/default/delegation-completion.md";
import defaultExtraction from "../assets/prompts/default/extraction.md";
import defaultCitationPostProcessing from "../assets/prompts/default/citation-post-processing.md";
import defaultCompaction from "../assets/prompts/default/compaction.md";
import defaultGeneratedPreamble from "../assets/prompts/default/generated-preamble.md";

import gpt55Profile from "../assets/prompts/gpt-5.5/profile.json" with { type: "json" };
import gpt55Response from "../assets/prompts/gpt-5.5/response.md";
import gpt55JourneyMatcher from "../assets/prompts/gpt-5.5/journey-matcher.md";
import gpt55TransitionMatcher from "../assets/prompts/gpt-5.5/transition-matcher.md";
import gpt55DelegationCompletion from "../assets/prompts/gpt-5.5/delegation-completion.md";
import gpt55Extraction from "../assets/prompts/gpt-5.5/extraction.md";
import gpt55CitationPostProcessing from "../assets/prompts/gpt-5.5/citation-post-processing.md";
import gpt55Compaction from "../assets/prompts/gpt-5.5/compaction.md";
import gpt55GeneratedPreamble from "../assets/prompts/gpt-5.5/generated-preamble.md";

import gpt54MiniProfile from "../assets/prompts/gpt-5.4-mini/profile.json" with { type: "json" };
import gpt54MiniResponse from "../assets/prompts/gpt-5.4-mini/response.md";
import gpt54MiniJourneyMatcher from "../assets/prompts/gpt-5.4-mini/journey-matcher.md";
import gpt54MiniTransitionMatcher from "../assets/prompts/gpt-5.4-mini/transition-matcher.md";
import gpt54MiniDelegationCompletion from "../assets/prompts/gpt-5.4-mini/delegation-completion.md";
import gpt54MiniExtraction from "../assets/prompts/gpt-5.4-mini/extraction.md";
import gpt54MiniCitationPostProcessing from "../assets/prompts/gpt-5.4-mini/citation-post-processing.md";
import gpt54MiniCompaction from "../assets/prompts/gpt-5.4-mini/compaction.md";
import gpt54MiniGeneratedPreamble from "../assets/prompts/gpt-5.4-mini/generated-preamble.md";

import gpt54NanoProfile from "../assets/prompts/gpt-5.4-nano/profile.json" with { type: "json" };
import gpt54NanoResponse from "../assets/prompts/gpt-5.4-nano/response.md";
import gpt54NanoJourneyMatcher from "../assets/prompts/gpt-5.4-nano/journey-matcher.md";
import gpt54NanoTransitionMatcher from "../assets/prompts/gpt-5.4-nano/transition-matcher.md";
import gpt54NanoDelegationCompletion from "../assets/prompts/gpt-5.4-nano/delegation-completion.md";
import gpt54NanoExtraction from "../assets/prompts/gpt-5.4-nano/extraction.md";
import gpt54NanoCitationPostProcessing from "../assets/prompts/gpt-5.4-nano/citation-post-processing.md";
import gpt54NanoCompaction from "../assets/prompts/gpt-5.4-nano/compaction.md";
import gpt54NanoGeneratedPreamble from "../assets/prompts/gpt-5.4-nano/generated-preamble.md";

import claudeSonnet46Profile from "../assets/prompts/claude-sonnet-4.6/profile.json" with { type: "json" };
import claudeSonnet46Response from "../assets/prompts/claude-sonnet-4.6/response.md";
import claudeSonnet46JourneyMatcher from "../assets/prompts/claude-sonnet-4.6/journey-matcher.md";
import claudeSonnet46TransitionMatcher from "../assets/prompts/claude-sonnet-4.6/transition-matcher.md";
import claudeSonnet46DelegationCompletion from "../assets/prompts/claude-sonnet-4.6/delegation-completion.md";
import claudeSonnet46Extraction from "../assets/prompts/claude-sonnet-4.6/extraction.md";
import claudeSonnet46CitationPostProcessing from "../assets/prompts/claude-sonnet-4.6/citation-post-processing.md";
import claudeSonnet46Compaction from "../assets/prompts/claude-sonnet-4.6/compaction.md";
import claudeSonnet46GeneratedPreamble from "../assets/prompts/claude-sonnet-4.6/generated-preamble.md";

export const bundledPromptProfiles: Record<string, BundledPromptProfile> = {
  default: {
    metadata: defaultProfile,
    templates: {
      response: defaultResponse,
      "journey-matcher": defaultJourneyMatcher,
      "transition-matcher": defaultTransitionMatcher,
      "delegation-completion": defaultDelegationCompletion,
      extraction: defaultExtraction,
      "citation-post-processing": defaultCitationPostProcessing,
      compaction: defaultCompaction,
      "generated-preamble": defaultGeneratedPreamble,
    },
  },
  "gpt-5.5": {
    metadata: gpt55Profile,
    templates: {
      response: gpt55Response,
      "journey-matcher": gpt55JourneyMatcher,
      "transition-matcher": gpt55TransitionMatcher,
      "delegation-completion": gpt55DelegationCompletion,
      extraction: gpt55Extraction,
      "citation-post-processing": gpt55CitationPostProcessing,
      compaction: gpt55Compaction,
      "generated-preamble": gpt55GeneratedPreamble,
    },
  },
  "gpt-5.4-mini": {
    metadata: gpt54MiniProfile,
    templates: {
      response: gpt54MiniResponse,
      "journey-matcher": gpt54MiniJourneyMatcher,
      "transition-matcher": gpt54MiniTransitionMatcher,
      "delegation-completion": gpt54MiniDelegationCompletion,
      extraction: gpt54MiniExtraction,
      "citation-post-processing": gpt54MiniCitationPostProcessing,
      compaction: gpt54MiniCompaction,
      "generated-preamble": gpt54MiniGeneratedPreamble,
    },
  },
  "gpt-5.4-nano": {
    metadata: gpt54NanoProfile,
    templates: {
      response: gpt54NanoResponse,
      "journey-matcher": gpt54NanoJourneyMatcher,
      "transition-matcher": gpt54NanoTransitionMatcher,
      "delegation-completion": gpt54NanoDelegationCompletion,
      extraction: gpt54NanoExtraction,
      "citation-post-processing": gpt54NanoCitationPostProcessing,
      compaction: gpt54NanoCompaction,
      "generated-preamble": gpt54NanoGeneratedPreamble,
    },
  },
  "claude-sonnet-4.6": {
    metadata: claudeSonnet46Profile,
    templates: {
      response: claudeSonnet46Response,
      "journey-matcher": claudeSonnet46JourneyMatcher,
      "transition-matcher": claudeSonnet46TransitionMatcher,
      "delegation-completion": claudeSonnet46DelegationCompletion,
      extraction: claudeSonnet46Extraction,
      "citation-post-processing": claudeSonnet46CitationPostProcessing,
      compaction: claudeSonnet46Compaction,
      "generated-preamble": claudeSonnet46GeneratedPreamble,
    },
  },
};
