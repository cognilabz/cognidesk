import { defineIntegration } from "@cognidesk/integration-kit";
import type {
  CreateCobrowsingSessionInput,
  EndCobrowsingSessionInput,
  JoinCobrowsingSessionInput,
  RawCobrowsingSessionEvent,
} from "./contracts.js";
import { normalizeCobrowsingEvent } from "./webhooks.js";
import { cognideskCobrowsingProviderManifest } from "./manifest.js";

export interface CognideskCobrowsingIntegrationClient {
  createSession(input: CreateCobrowsingSessionInput): unknown | Promise<unknown>;
  joinSession(input: JoinCobrowsingSessionInput): unknown | Promise<unknown>;
  endSession(input: EndCobrowsingSessionInput): unknown | Promise<unknown>;
}

export interface CognideskCobrowsingIntegrationOptions {
  client: CognideskCobrowsingIntegrationClient;
}

export function createCognideskCobrowsingIntegration(options: CognideskCobrowsingIntegrationOptions) {
  return defineIntegration({
    manifest: cognideskCobrowsingProviderManifest as never,
    operations: {
      "cognidesk.cobrowsing.session.create": (input: CreateCobrowsingSessionInput) =>
        options.client.createSession(input),
      "cognidesk.cobrowsing.session.join": (input: JoinCobrowsingSessionInput) =>
        options.client.joinSession(input),
      "cognidesk.cobrowsing.session.end": (input: EndCobrowsingSessionInput) =>
        options.client.endSession(input),
      "cognidesk.cobrowsing.event.normalize": (input: RawCobrowsingSessionEvent) =>
        normalizeCobrowsingEvent(input),
    } as never,
  });
}
