import { defineChannelContext, type ConversationChannelInput } from "@cognidesk/core";
import { HttpInputError } from "../responses.js";
import { isRecord } from "./body.js";

export function optionalString(body: Record<string, unknown>, key: string) {
  const value = body[key];
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "string") throw new HttpInputError(`${key} must be a string.`);
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function optionalStringProperty<TKey extends string>(body: Record<string, unknown>, key: TKey) {
  const value = optionalString(body, key);
  return value ? { [key]: value } as Record<TKey, string> : {};
}

export function optionalChannel(body: Record<string, unknown>, key: string): ReturnType<typeof defineChannelContext> | undefined {
  const value = body[key];
  if (value === undefined || value === null) return undefined;
  try {
    return defineChannelContext(value as ConversationChannelInput);
  } catch {
    throw new HttpInputError(`${key} must be a valid conversation channel.`);
  }
}

export function optionalChannelProperty(body: Record<string, unknown>): { channel?: ConversationChannelInput } {
  const channel = optionalChannel(body, "channel");
  return channel ? { channel } : {};
}

export function optionalNonNegativeNumber(body: Record<string, unknown>, key: string) {
  const value = body[key];
  if (value === undefined || value === null) return undefined;
  if (typeof value !== "number" || !Number.isSafeInteger(value) || value < 0) {
    throw new HttpInputError(`${key} must be a non-negative integer.`);
  }
  return value;
}

export function optionalRouting(body: Record<string, unknown>, key: string) {
  const value = optionalString(body, key);
  if (!value) return undefined;
  if (value !== "none" && value !== "activeJourneyOnly" && value !== "full" && value !== "targeted") {
    throw new HttpInputError(`${key} must be a valid routing mode.`);
  }
  return value;
}

export function optionalTarget(body: Record<string, unknown>, key: string) {
  const value = body[key];
  if (value === undefined || value === null) return undefined;
  if (!isRecord(value)) throw new HttpInputError(`${key} must be an object.`);
  const journeyId = optionalString(value, "journeyId");
  const stateId = optionalString(value, "stateId");
  return {
    ...(journeyId ? { journeyId } : {}),
    ...(stateId ? { stateId } : {}),
  };
}

export function optionalVoiceClient(body: Record<string, unknown>) {
  const value = body.client;
  if (value === undefined || value === null) return {};
  if (!isRecord(value)) throw new HttpInputError("client must be an object.");
  const userAgent = optionalString(value, "userAgent");
  const locale = optionalString(value, "locale");
  const metadata = value.metadata;
  if (metadata !== undefined && metadata !== null && !isRecord(metadata)) {
    throw new HttpInputError("client.metadata must be an object.");
  }
  return {
    client: {
      ...(userAgent ? { userAgent } : {}),
      ...(locale ? { locale } : {}),
      ...(isRecord(metadata) ? { metadata } : {}),
    },
  };
}
