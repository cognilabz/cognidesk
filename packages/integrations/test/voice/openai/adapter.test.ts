import { describe, expect, it } from "vitest";
import type { RealtimeServerEvent } from "openai/resources/realtime/realtime";
import {
  OPENAI_REALTIME_V1_MODEL,
  createOpenAIVoiceProvider,
  openAIVoiceProviderManifest,
} from "../../../src/voice/openai/index.js";
import type { VoiceControlNotification, VoiceProviderEvent } from "@cognidesk/voice-websocket";
import {
  FakeRealtimeSocket,
  fakeRuntimeEvent,
  fakeVoiceSession,
  flushAsync,
  responseDoneEvent,
} from "./helpers.js";

describe("@cognidesk/integrations/voice/openai", () => {
  it("exports an official provider manifest for OpenAI Realtime voice", () => {
    expect(openAIVoiceProviderManifest).toMatchObject({
      id: "voice.openai",
      packageName: "@cognidesk/integrations",
      category: "voice",
      provider: "openai",
      trustLevel: "official",
      directions: ["bidirectional"],
    });
    expect(openAIVoiceProviderManifest.credentialRequirements).toEqual([
      expect.objectContaining({
        id: "openai-api-key",
        required: true,
      }),
    ]);
    expect(openAIVoiceProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining(["receive", "send", "media", "handoff"]));
    expect(openAIVoiceProviderManifest.limitations.join(" ")).toContain(OPENAI_REALTIME_V1_MODEL);
    expect(openAIVoiceProviderManifest.coverage).toMatchObject({
      scope: "provider-api-subset",
    });
    expect(openAIVoiceProviderManifest.coverage.notes.join(" "))
      .toContain("send and handoff capabilities mean OpenAI Realtime audio response events");
    expect(openAIVoiceProviderManifest.coverage.notes.join(" "))
      .toContain("do not mean outbound telephony, carrier handoff, or full OpenAI API coverage");
    expect(openAIVoiceProviderManifest.coverage.evidence.map((evidence) => evidence.url))
      .toEqual(expect.arrayContaining([
        "https://developers.openai.com/api/docs/guides/realtime",
        "https://developers.openai.com/api/docs/guides/realtime-conversations",
        "https://developers.openai.com/api/reference/resources/realtime/client-events/",
        "https://developers.openai.com/api/docs/guides/realtime-models-prompting",
      ]));
  });

  it("configures a gpt-realtime-2 websocket session and translates browser events", async () => {
    const realtime = new FakeRealtimeSocket();
    const provider = createOpenAIVoiceProvider({
      apiKey: "test-key",
      voice: "alloy",
      transcriptionLanguage: "de",
      realtime: async () => realtime,
    });
    const providerEvents: VoiceProviderEvent[] = [];

    const session = await provider.connect({
      session: fakeVoiceSession(),
      profile: {
        instructions: "Speak concisely.",
        modelSet: {
          provider: "openai",
          model: OPENAI_REALTIME_V1_MODEL,
        },
      },
      signal: new AbortController().signal,
      onEvent: (event) => {
        providerEvents.push(event);
      },
    });

    expect(realtime.sent[0]).toMatchObject({
      type: "session.update",
      session: {
        type: "realtime",
        model: OPENAI_REALTIME_V1_MODEL,
        instructions: "Speak concisely.",
        output_modalities: ["audio"],
        reasoning: { effort: "low" },
        audio: {
          input: {
            format: { type: "audio/pcm", rate: 24000 },
            transcription: { model: "gpt-realtime-whisper", language: "de" },
            turn_detection: {
              type: "server_vad",
              create_response: false,
              interrupt_response: true,
            },
          },
          output: {
            format: { type: "audio/pcm", rate: 24000 },
            voice: "alloy",
          },
        },
      },
    });

    await session.send({
      type: "input_audio_buffer.append",
      audio: "AQID",
      sequence: 1,
    });
    await session.send({
      type: "response.cancel",
      response_id: "response_1",
    });

    expect(realtime.sent[1]).toEqual({
      type: "input_audio_buffer.append",
      audio: "AQID",
    });
    expect(realtime.sent[2]).toEqual({
      type: "response.cancel",
      response_id: "response_1",
    });

    realtime.emit({
      type: "conversation.item.input_audio_transcription.completed",
      event_id: "event_transcript",
      item_id: "item_1",
      transcript: "I need my ticket status.",
      content_index: 0,
      usage: { type: "tokens", input_tokens: 1, output_tokens: 0, total_tokens: 1 },
    } as RealtimeServerEvent);
    realtime.emit({
      type: "response.output_audio.delta",
      event_id: "event_audio",
      response_id: "response_1",
      item_id: "item_2",
      output_index: 0,
      content_index: 0,
      delta: "BAUG",
    } as RealtimeServerEvent);

    expect(providerEvents).toEqual([
      {
        kind: "input_transcript.completed",
        text: "I need my ticket status.",
        itemId: "item_1",
        transcriptionSource: "openai-realtime",
      },
      {
        kind: "server_event",
        event: {
          type: "response.output_audio.delta",
          event_id: "event_audio",
          response_id: "response_1",
          item_id: "item_2",
          output_index: 0,
          content_index: 0,
          delta: "BAUG",
        },
      },
    ]);
  });

  it("creates speech responses from Cognidesk turn output", async () => {
    const realtime = new FakeRealtimeSocket();
    const provider = createOpenAIVoiceProvider({
      apiKey: "test-key",
      realtime: async () => realtime,
    });
    const session = await provider.connect({
      session: fakeVoiceSession(),
      signal: new AbortController().signal,
      onEvent: () => undefined,
    });

    const speaking = session.speak({
      text: "Your flight is confirmed.",
      result: {
        conversation: fakeVoiceSession().conversation,
        snapshot: {
          conversationId: "conversation_1",
          lifecycle: "active",
          activeStateIds: [],
          updatedAt: "2026-05-25T00:00:00.000Z",
        },
        events: [],
        voiceEvents: [],
        text: "Your flight is confirmed.",
      },
    });
    await flushAsync();

    expect(realtime.sent[1]).toMatchObject({
      type: "response.create",
      response: {
        conversation: "none",
        output_modalities: ["audio"],
        metadata: {
          cognidesk_voice_kind: "speech",
        },
        instructions: "Read the supplied text exactly. Do not add a greeting, explanation, or closing.",
      },
    });
    expect(JSON.stringify(realtime.sent[1])).toContain("Your flight is confirmed.");
    realtime.emit(responseDoneEvent());
    await speaking;
  });

  it("creates dynamic realtime preamble responses", async () => {
    const realtime = new FakeRealtimeSocket();
    const provider = createOpenAIVoiceProvider({
      apiKey: "test-key",
      realtime: async () => realtime,
    });
    const session = await provider.connect({
      session: fakeVoiceSession(),
      signal: new AbortController().signal,
      onEvent: () => undefined,
    });

    const preamble = session.preamble?.({ text: "Hallo" });
    await flushAsync();

    expect(preamble).toBeDefined();
    expect(realtime.sent[1]).toMatchObject({
      type: "response.create",
      response: {
        conversation: "none",
        output_modalities: ["audio"],
        metadata: {
          cognidesk_voice_kind: "preamble",
        },
      },
    });
    expect(JSON.stringify(realtime.sent[1])).toContain("For the greeting 'Hallo', prefer German.");
    realtime.emit(responseDoneEvent());
    await preamble;
  });

  it("forwards realtime response lifecycle payloads as JSON browser protocol events", async () => {
    const realtime = new FakeRealtimeSocket();
    const provider = createOpenAIVoiceProvider({
      apiKey: "test-key",
      realtime: async () => realtime,
    });
    const providerEvents: VoiceProviderEvent[] = [];

    await provider.connect({
      session: fakeVoiceSession(),
      signal: new AbortController().signal,
      onEvent: (event) => {
        providerEvents.push(event);
      },
    });

    realtime.emit({
      type: "response.done",
      event_id: "event_response_done",
      response: {
        object: "realtime.response",
        id: "response_1",
        status: "completed",
        metadata: {
          cognidesk_voice_id: "speech_1",
        },
      },
    } as RealtimeServerEvent);

    expect(providerEvents).toEqual([{
      kind: "server_event",
      event: {
        type: "response.done",
        event_id: "event_response_done",
        response: {
          object: "realtime.response",
          id: "response_1",
          status: "completed",
          metadata: {
            cognidesk_voice_id: "speech_1",
          },
        },
      },
    }]);
  });

  it("exposes Cognidesk voice control tools to the realtime session", async () => {
    const realtime = new FakeRealtimeSocket();
    const provider = createOpenAIVoiceProvider({
      apiKey: "test-key",
      realtime: async () => realtime,
    });
    const providerEvents: VoiceProviderEvent[] = [];
    const session = fakeVoiceSession();

    await provider.connect({
      session,
      signal: new AbortController().signal,
      control: {
        tools: [{
          name: "retrieve_voice_knowledge",
          description: "Retrieve scoped knowledge.",
          parameters: {
            type: "object",
            properties: {
              query: { type: "string" },
            },
            required: ["query"],
          },
        }],
        instructions: "Use voice control tools for grounded facts.",
        handleToolCall(input) {
          expect(input.session.id).toBe(session.id);
          expect(input.name).toBe("retrieve_voice_knowledge");
          expect(input.arguments).toEqual({ query: "baggage allowance" });
          return {
            events: [fakeRuntimeEvent("knowledge.retrieved", {
              sourceName: "flight-policies",
              itemIds: ["bag-policy"],
            })],
            output: {
              ok: true,
              items: [{ id: "bag-policy", content: "Economy Light includes one cabin bag." }],
            },
          };
        },
      },
      onEvent: (event) => {
        providerEvents.push(event);
      },
    });

    expect(realtime.sent[0]).toMatchObject({
      type: "session.update",
      session: {
        audio: {
          input: {
            turn_detection: {
              create_response: true,
            },
          },
        },
        tool_choice: "auto",
        parallel_tool_calls: false,
        tools: [{
          type: "function",
          name: "retrieve_voice_knowledge",
        }],
      },
    });
    expect(JSON.stringify(realtime.sent[0])).toContain("Use voice control tools for grounded facts.");

    realtime.emit({
      type: "response.function_call_arguments.done",
      event_id: "event_tool_done",
      response_id: "response_1",
      item_id: "item_tool",
      output_index: 0,
      call_id: "call_1",
      name: "retrieve_voice_knowledge",
      arguments: JSON.stringify({ query: "baggage allowance" }),
    } as RealtimeServerEvent);
    await flushAsync();

    expect(providerEvents).toEqual([{
      kind: "runtime_events",
      events: [expect.objectContaining({
        type: "knowledge.retrieved",
      })],
    }]);
    expect(realtime.sent[1]).toMatchObject({
      type: "conversation.item.create",
      item: {
        type: "function_call_output",
        call_id: "call_1",
      },
    });
    expect(JSON.stringify(realtime.sent[1])).toContain("Economy Light includes one cabin bag.");
    expect(realtime.sent[2]).toMatchObject({
      type: "response.create",
      response: {
        conversation: "auto",
        output_modalities: ["audio"],
      },
    });
  });

  it("can push later Cognidesk control notifications into the realtime conversation", async () => {
    const realtime = new FakeRealtimeSocket();
    const provider = createOpenAIVoiceProvider({
      apiKey: "test-key",
      realtime: async () => realtime,
    });
    const providerEvents: VoiceProviderEvent[] = [];
    const session = fakeVoiceSession();
    const notifications: Array<(notification: VoiceControlNotification) => Promise<void>> = [];

    await provider.connect({
      session,
      signal: new AbortController().signal,
      control: {
        tools: [{
          name: "submit_voice_journey_proposal",
          description: "Submit proposal.",
          parameters: { type: "object" },
        }],
        handleToolCall(input) {
          if (input.notify) notifications.push(input.notify);
          return {
            output: {
              ok: true,
              status: "running",
              workId: "voice_work_1",
            },
          };
        },
      },
      onEvent: (event) => {
        providerEvents.push(event);
      },
    });

    realtime.emit({
      type: "response.function_call_arguments.done",
      event_id: "event_tool_done",
      response_id: "response_1",
      item_id: "item_tool",
      output_index: 0,
      call_id: "call_1",
      name: "submit_voice_journey_proposal",
      arguments: JSON.stringify({ intent: "advance_journey" }),
    } as RealtimeServerEvent);
    await flushAsync();

    const sendNotification = notifications[0];
    expect(sendNotification).toBeTypeOf("function");
    expect(realtime.sent[1]).toMatchObject({
      type: "conversation.item.create",
      item: {
        type: "function_call_output",
        call_id: "call_1",
      },
    });
    expect(realtime.sent[2]).toMatchObject({
      type: "response.create",
    });

    if (!sendNotification) throw new Error("Expected control notification callback.");
    await sendNotification({
      message: "Cognidesk background work completed.\nValidated result to tell the customer: Flight CL102 is available.",
      events: [fakeRuntimeEvent("custom.voice.background.completed", {
        workId: "voice_work_1",
      })],
      responseInstructions: "Tell the customer the result briefly.",
    });

    expect(providerEvents).toEqual([{
      kind: "runtime_events",
      events: [expect.objectContaining({
        type: "custom.voice.background.completed",
      })],
    }]);
    expect(realtime.sent[3]).toMatchObject({
      type: "conversation.item.create",
      item: {
        type: "message",
        role: "system",
      },
    });
    expect(JSON.stringify(realtime.sent[3])).toContain("Flight CL102 is available.");
    expect(realtime.sent[4]).toMatchObject({
      type: "response.create",
      response: {
        conversation: "auto",
        output_modalities: ["audio"],
        instructions: "Tell the customer the result briefly.",
      },
    });
  });

  it("rejects non-gpt-realtime-2 model settings in v1", async () => {
    const provider = createOpenAIVoiceProvider({
      apiKey: "test-key",
      realtime: async () => new FakeRealtimeSocket(),
    });

    await expect(provider.connect({
      session: fakeVoiceSession(),
      signal: new AbortController().signal,
      profile: {
        modelSet: {
          provider: "openai",
          model: "gpt-realtime",
        },
      },
      onEvent: () => undefined,
    })).rejects.toThrow("supports only gpt-realtime-2");
  });
});
