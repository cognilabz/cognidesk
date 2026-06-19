import { describe, expect, expectTypeOf, it } from "vitest";
import {
  cognideskVoiceWebSocketProviderManifest,
  type VoiceControlSurface,
  type VoiceJsonObject,
} from "../../src/index.js";

describe("@cognidesk/voice-websocket manifest and types", () => {
  it("exports an official provider manifest for the Cognidesk voice protocol", () => {
      expect(cognideskVoiceWebSocketProviderManifest).toMatchObject({
        id: "voice.websocket",
        packageName: "@cognidesk/voice-websocket",
        category: "voice",
        provider: "websocket",
        trustLevel: "official",
        directions: ["bidirectional"],
      });
      expect(cognideskVoiceWebSocketProviderManifest.capabilities.map((capability) => capability.capability))
        .toEqual(expect.arrayContaining(["receive", "send", "media", "thread"]));
      expect(cognideskVoiceWebSocketProviderManifest.credentialRequirements).toEqual([]);
      expect(cognideskVoiceWebSocketProviderManifest.coverage).toMatchObject({
        scope: "local-protocol",
      });
      expect(cognideskVoiceWebSocketProviderManifest.coverage.notes.join(" "))
        .toContain("Does not implement an external voice provider API");
      expect(cognideskVoiceWebSocketProviderManifest.coverage.notes.join(" "))
        .toContain("selected VoiceProvider and SDK-user configuration");
      expect(cognideskVoiceWebSocketProviderManifest.coverage.evidence.map((evidence) => evidence.label))
        .toEqual(expect.arrayContaining([
          "CONTEXT.md Voice Browser Protocol definition",
          "CONTEXT.md Voice WebSocket Adapter definition",
        ]));
    });

    it("types voice control tools as JSON wire contracts", () => {
      type LookupArguments = { query: string; filters?: { locale: string } };
      type LookupOutput = { ok: boolean; items: Array<{ id: string; content: string }> };
      const parameters = {
        type: "object",
        properties: {
          query: { type: "string" },
          filters: {
            type: "object",
            properties: {
              locale: { type: "string" },
            },
          },
        },
        required: ["query"],
      } satisfies VoiceJsonObject;
      const control: VoiceControlSurface<LookupArguments, LookupOutput> = {
        tools: [{
          name: "lookup_help",
          parameters,
        }],
        handleToolCall(input) {
          expectTypeOf(input.arguments.query).toEqualTypeOf<string>();
          return {
            output: {
              ok: true,
              items: [{ id: "article_1", content: input.arguments.query }],
            },
          };
        },
      };

      expect(control.tools[0]?.parameters?.type).toBe("object");
    });
});
