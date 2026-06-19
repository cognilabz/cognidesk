import type { VoiceModelSet } from "@cognidesk/core";
import { OPENAI_REALTIME_V1_MODEL } from "./contracts.js";

export function assertSupportedModel(modelSet: VoiceModelSet | undefined) {
  if (!modelSet) return;
  if (modelSet.provider !== "openai") {
    throw new Error(`@cognidesk/integrations/voice/openai cannot run voice model provider '${modelSet.provider}'.`);
  }
  if (modelSet.model !== OPENAI_REALTIME_V1_MODEL) {
    throw new Error(`@cognidesk/integrations/voice/openai v1 supports only ${OPENAI_REALTIME_V1_MODEL}.`);
  }
}
