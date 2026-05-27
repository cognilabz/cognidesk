import type { createAgent } from "@cognidesk/core";
import { statusContext } from "../domain/schemas.js";
import type { FlightTools } from "../tools/flight-tools.js";

export function addTicketStatusJourney(agent: ReturnType<typeof createAgent>, tools: FlightTools) {
  const status = agent.stateMachineJourney("ticket-status", {
    condition: "Customer explicitly wants ticket status, booking status, check-in status, or flight information for a booking reference or flight number. Do not use this Journey for baggage add-ons, luggage eligibility, fare-rule checks, seat purchases, refunds, payments, or unsupported service changes.",
    examples: ["Where is my ticket?", "What is the status of booking CD-CL204-4821?", "Can I check in for CL204?", "What is the status of flight CL204?"],
    tags: ["status", "check-in", "flight-info"],
    context: statusContext,
    priority: 30,
    includeWhen: ({ activeJourneyId }) => activeJourneyId !== "baggage-service",
    matcher: ({ turn }) => Boolean((turn as { forceStatus?: boolean }).forceStatus),
  });
  const identify = status.state("identify").collect("bookingReference", { required: false }).collect("flightNumber", { required: false });
  const lookupBooking = status.state("lookupBooking").runTool(tools.getTicketStatus, {
    input: ({ context }) => ({
      bookingReference: context.bookingReference ?? "",
    }),
    assign: {
      ticketStatus: ({ output }) => output,
    },
  });
  const lookupFlight = status.state("lookupFlight").runTool(tools.getFlightInfo, {
    input: ({ context }) => ({
      flightNumber: context.flightNumber ?? "",
    }),
    assign: {
      flightInfo: ({ output }) => output,
    },
  });
  const done = status.final("done");
  status.initial(identify);
  identify.when("booking reference is known", {
    guard: ({ context }) => Boolean(context.bookingReference),
  }).target(lookupBooking);
  identify.when("flight number is known", {
    guard: ({ context }) => Boolean(context.flightNumber),
  }).target(lookupFlight);
  lookupBooking.transitionTo(done);
  lookupFlight.transitionTo(done);
}
