import {
  buildJourneyIndex,
  createAgent,
  createModels,
  createRuntime,
  expect,
  it,
  knowledgeSource,
  RecordingStorage,
  spanExporter,
  tool,
  z,
} from "./helpers.js";

export function registerObservabilityTests() {
  it("emits OpenTelemetry spans and attaches custom tool spans under SDK tool spans", async () => {
    spanExporter.reset();
    const searchFlights = tool("searchFlights", {
      input: z.object({ origin: z.string(), destination: z.string() }),
      output: z.object({ flights: z.array(z.object({ id: z.string() })) }),
      execute: async ({ telemetry }) => telemetry.withSpan("flight.search_api", () => ({ flights: [{ id: "OS123" }] })),
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
    const agentBuilder = createAgent("flight-service", {
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
          usage: { totalTokens: 12 },
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
      telemetry: { content: "full" },
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
    expect(spans.some((span) => span.name === "cognidesk.model.generate" && span.attributes["cognidesk.model.usage.total_tokens"] === 12)).toBe(true);
    expect(spans.some((span) => span.events.some((event) => event.name === "cognidesk.model.input"))).toBe(true);
    expect((await runtime.listEvents(conversation.id)).some((event) => event.type === "custom.observability")).toBe(false);
  });
}
