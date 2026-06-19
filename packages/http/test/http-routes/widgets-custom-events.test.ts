import { describe, expect, it } from "vitest";
import { createCognideskHttpHandler } from "../../src/index.js";
import type { CustomRuntimeEventDefinition, JourneyEventDefinition, RuntimeEvent, RuntimeSnapshot } from "@cognidesk/core";
import { FakeRuntime } from "../fixtures.js";

describe("HTTP widget and custom event routes", () => {
  it("posts widget submissions to the runtime", async () => {
      const runtime = new FakeRuntime();
      const handler = createCognideskHttpHandler({ runtime, agentId: "flight-service" });

      const response = await handler.handle(new Request("http://localhost/conversations/conversation_1/widgets/prompt_1/submissions", {
        method: "POST",
        body: JSON.stringify({ widgetKind: "confirmation", output: { confirmed: true } }),
      }));
      const body = await response.json() as { event: RuntimeEvent };

      expect(response.status).toBe(200);
      expect(body.event.type).toBe("ui.submitted");
      expect(body.event.data).toEqual({
        promptId: "prompt_1",
        widgetKind: "confirmation",
        output: { confirmed: true },
      });
    });

    it("posts custom and journey events to the runtime", async () => {
      const runtime = new FakeRuntime();
      const payload = { parse: (value: unknown) => value };
      const leadCaptured = {
        kind: "customRuntimeEvent",
        name: "lead.captured",
        payload,
        visibleToModel: true,
      } as unknown as CustomRuntimeEventDefinition;
      const ticketSynced = {
        kind: "journeyEvent",
        name: "ticket.synced",
        payload,
        routing: "targeted",
      } as unknown as JourneyEventDefinition;
      const handler = createCognideskHttpHandler({
        runtime,
        agentId: "flight-service",
        customEvents: [leadCaptured],
        journeyEvents: [ticketSynced],
      });

      const customResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/custom-events/lead.captured", {
        method: "POST",
        body: JSON.stringify({ payload: { email: "alex@example.com" } }),
      }));
      const custom = await customResponse.json() as { event: RuntimeEvent };

      const journeyResponse = await handler.handle(new Request("http://localhost/conversations/conversation_1/journey-events/ticket.synced", {
        method: "POST",
        body: JSON.stringify({
          payload: { bookingReference: "ABC123" },
          target: { journeyId: "ticket-status", stateId: "wait" },
        }),
      }));
      const journey = await journeyResponse.json() as { event: RuntimeEvent; snapshot: RuntimeSnapshot | null; events: RuntimeEvent[] };

      expect(customResponse.status).toBe(200);
      expect(custom.event.type).toBe("custom.lead.captured");
      expect(custom.event.data).toEqual({ email: "alex@example.com" });
      expect(journeyResponse.status).toBe(200);
      expect(journey.event.type).toBe("journey.event.emitted");
      expect(journey.event.data).toEqual({
        name: "ticket.synced",
        payload: { bookingReference: "ABC123" },
        routing: "targeted",
        target: { journeyId: "ticket-status", stateId: "wait" },
      });
      expect(journey.snapshot?.activeJourneyId).toBe("ticket-status");
    });
});
