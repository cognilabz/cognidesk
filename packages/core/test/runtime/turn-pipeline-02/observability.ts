import {
  buildJourneyIndex,
  createAgent,
  createModels,
  createRuntime,
  expect,
  it,
  knowledgeSource,
  recordedMetrics,
  RecordingStorage,
  spanExporter,
  tool,
  z,
} from "./helpers.js";

export function registerObservabilityTests() {
  it("emits OpenTelemetry spans and attaches custom tool spans under SDK tool spans", async () => {
    spanExporter.reset();
    recordedMetrics.length = 0;
    const searchFlights = tool("searchFlights", {
      input: z.object({ origin: z.string(), destination: z.string() }),
      output: z.object({ flights: z.array(z.object({ id: z.string() })) }),
      execute: async ({ telemetry }) => telemetry.withSpan("flight.search_api", () => {
        telemetry.setAttributes({
          "app.provider": "mock-air",
          "app.long_label": "x".repeat(700),
        });
        telemetry.recordMetric({
          name: "app.flight.searches",
          value: 1,
          attributes: {
            "app.route": "VIE-BER",
          },
        });
        telemetry.recordMetric({
          name: "app.undeclared.metric",
          value: 1,
        });
        return { flights: [{ id: "OS123" }] };
      }),
    });
    const knowledge = knowledgeSource("flight-faq", {
      query: z.object({ query: z.string() }),
      metadata: z.object({ source: z.string() }),
      retrieve: async () => ({
        items: [{
          id: "faq-routes",
          content: "Route searches need an origin and destination.",
          metadata: { source: "faq" },
        }],
      }),
    });
    const agentBuilder = createAgent("agent_primary", {
      instructions: "Help customers with flights.",
    });
    agentBuilder.knowledge.add(knowledge);
    const booking = agentBuilder.stateMachineJourney("book-flight", {
      condition: "Customer wants to search flights",
      context: z.object({
        origin: z.string().optional(),
        destination: z.string().optional(),
        flightCount: z.number().optional(),
      }),
    });
    const route = booking.state("route").collect("origin").collect("destination");
    const search = booking.state("search").runTool(searchFlights, {
      input: ({ context }) => ({
        origin: context.origin ?? "",
        destination: context.destination ?? "",
      }),
      assign: {
        flightCount: ({ output }) => output.flights.length,
      },
    });
    booking.initial(route);
    route.transitionTo(search);

    const agent = agentBuilder.compile();
    const models = createModels({
      response: {
        provider: "test",
        model: "response",
        generateText: async () => ({
          text: "I found one route using faq-routes.",
          usage: {
            inputTokens: 7,
            cachedInputTokens: 2,
            outputTokens: 4,
            reasoningTokens: 1,
            totalTokens: 11,
          },
        }),
      },
      extraction: {
        provider: "test",
        model: "extraction",
        generateText: async () => {
          const structured = { values: { origin: "Vienna", destination: "Berlin" } };
          return { text: JSON.stringify(structured), structured };
        },
      },
    });
    const journeyIndex = await buildJourneyIndex(agent, { embeddingModel: models.journeyEmbedding });
    const runtime = createRuntime({
      storage: new RecordingStorage(),
      agent,
      models,
      journeyIndex,
      telemetry: {
        content: "full",
        customMetrics: [{
          name: "app.flight.searches",
          kind: "counter",
          description: "Flight search calls performed by demo tools.",
          unit: "{search}",
        }],
        enrichSpan: ({ spanName, metricKind }) => {
          if (spanName !== "cognidesk.model.generate") return undefined;
          return {
            attributes: {
              "app.customer_segment": "family",
            },
            metricAttributes: {
              "app.customer_segment": "family",
              "app.metric_kind": metricKind ?? "none",
            },
            events: [{
              name: "app.model.enriched",
              attributes: {
                "app.reason": "test",
              },
            }],
          };
        },
      },
    });
    const conversation = await runtime.createConversation({ agentId: agent.id, context: {} });

    await runtime.handleUserMessage({
      conversationId: conversation.id,
      text: "Find flights from Vienna to Berlin.",
    });

    const spans = spanExporter.getFinishedSpans();
    expect(spans.map((span) => span.name)).toEqual(expect.arrayContaining([
      "cognidesk.runtime.handle_user_message",
      "cognidesk.model.generate",
      "cognidesk.tool.execute",
      "cognidesk.knowledge.retrieve",
      "flight.search_api",
    ]));
    const runtimeSpan = spans.find((span) => span.name === "cognidesk.runtime.handle_user_message");
    const toolSpan = spans.find((span) => span.name === "cognidesk.tool.execute" && span.attributes["cognidesk.tool.name"] === "searchFlights");
    const customToolSpan = spans.find((span) => span.name === "flight.search_api");
    expect(runtimeSpan?.spanContext().traceId).toBeTruthy();
    expect(toolSpan?.parentSpanId).toBe(runtimeSpan?.spanContext().spanId);
    expect(customToolSpan?.parentSpanId).toBe(toolSpan?.spanContext().spanId);
    const responseModelSpan = spans.find((span) =>
      span.name === "cognidesk.model.generate"
      && span.attributes["cognidesk.model.name"] === "response"
      && span.attributes["cognidesk.prompt.task"] === "response"
    );
    expect(responseModelSpan?.attributes).toMatchObject({
      "app.customer_segment": "family",
      "cognidesk.model.usage.input_tokens": 7,
      "cognidesk.model.usage.cached_input_tokens": 2,
      "cognidesk.model.usage.output_tokens": 4,
      "cognidesk.model.usage.reasoning_tokens": 1,
      "cognidesk.model.usage.total_tokens": 11,
    });
    expect(responseModelSpan?.events.some((event) => event.name === "app.model.enriched")).toBe(true);
    expect(customToolSpan?.attributes["app.provider"]).toBe("mock-air");
    expect(String(customToolSpan?.attributes["app.long_label"]).endsWith("...")).toBe(true);
    expect(String(customToolSpan?.attributes["app.long_label"]).length).toBeLessThanOrEqual(512);
    expect(spans.some((span) => span.events.some((event) => event.name === "cognidesk.model.input"))).toBe(true);
    expect(recordedMetrics).toEqual(expect.arrayContaining([
      expect.objectContaining({
        kind: "counter",
        name: "app.flight.searches",
        value: 1,
        attributes: expect.objectContaining({
          "app.route": "VIE-BER",
        }),
      }),
      expect.objectContaining({
        kind: "histogram",
        name: "cognidesk.model.tokens",
        value: 11,
        attributes: expect.objectContaining({
          "app.customer_segment": "family",
          "app.metric_kind": "model",
          "cognidesk.token.kind": "total",
        }),
      }),
      expect.objectContaining({
        kind: "histogram",
        name: "cognidesk.model.tokens",
        value: 2,
        attributes: expect.objectContaining({
          "cognidesk.token.kind": "cached_input",
        }),
      }),
      expect.objectContaining({
        kind: "histogram",
        name: "cognidesk.model.tokens",
        value: 1,
        attributes: expect.objectContaining({
          "cognidesk.token.kind": "reasoning",
        }),
      }),
    ]));
    expect(recordedMetrics.some((metric) => metric.name === "app.undeclared.metric")).toBe(false);
    expect((await runtime.listEvents(conversation.id)).some((event) => event.type === "custom.observability")).toBe(false);
  });
}
