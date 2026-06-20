import type { VoiceBackgroundWorkRecord } from "./types.js";
import { parseRecord } from "./utils.js";

export function voiceSafeResultText(
  record: VoiceBackgroundWorkRecord,
  result: { text: string; activeJourneyId?: string; snapshot?: { activeStateIds?: string[]; journeyContext?: unknown } },
) {
  const isBookFlightVoiceWork = record.targetJourneyId === "book-flight" || result.activeJourneyId === "book-flight";
  if (!isBookFlightVoiceWork || !mentionsUnavailableForm(result.text)) return result.text;

  const context = parseRecord(result.snapshot?.journeyContext);
  const missingOrigin = !hasVoiceValue(context.origin);
  const missingDestination = !hasVoiceValue(context.destination);
  const missingDate = !hasVoiceValue(context.departureDate);
  const german = /\bformular\b/i.test(result.text) || /\bflug|buchen|reisedaten\b/i.test(record.userTranscript);

  if (german) {
    if (missingOrigin && missingDestination) return "Gern. Von wo nach wo soll der Flug gehen?";
    if (missingOrigin) return "Gern. Von welcher Stadt möchtest du abfliegen?";
    if (missingDestination) return "Gern. Wohin möchtest du fliegen?";
    if (missingDate) return "Gern. An welchem Datum möchtest du reisen?";
    return "Gern. Welche Reisedaten möchtest du verwenden?";
  }

  if (missingOrigin && missingDestination) return "Sure. What city are you flying from, and where are you going?";
  if (missingOrigin) return "Sure. Which city are you flying from?";
  if (missingDestination) return "Sure. Where would you like to fly?";
  if (missingDate) return "Sure. What date would you like to travel?";
  return "Sure. What travel details would you like to use?";
}

function mentionsUnavailableForm(text: string) {
  return /\bform(?:ular)?\b/i.test(text);
}

function hasVoiceValue(value: unknown) {
  return typeof value === "string" ? value.trim().length > 0 : value !== undefined && value !== null;
}
