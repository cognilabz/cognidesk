import type { createAgent } from "@cognidesk/core";
import { statusContext } from "../domain/schemas.js";
import type { FlightTools } from "../tools/flight-tools.js";

export function addTicketStatusJourney(agent: ReturnType<typeof createAgent>, tools: FlightTools) {
  const status = agent.stateMachineJourney("ticket-status", {
    condition: [
      "Customer explicitly wants ticket status, booking status, e-ticket status, check-in status, boarding or gate timing, or flight information for a booking reference or flight number.",
      "Use this for airline status questions such as whether a booking is confirmed, whether check-in is open, whether the flight is delayed/cancelled/boarding, or what the next travel step is.",
      "Do not use this Journey for baggage add-ons, luggage eligibility, baggage claims, fare-rule checks, seat purchases, refunds, payments, passenger-name changes, receipts, invoices, or unsupported service changes.",
    ].join(" "),
    examples: [
      "Where is my ticket?",
      "What is the status of booking CD-CL204-4821?",
      "Can I check in for CL204?",
      "Is flight CL204 delayed or boarding yet?",
      "Which gate should I watch for flight CL204?",
    ],
    tags: ["status", "check-in", "flight-info", "boarding", "gate", "disruption"],
    context: statusContext,
    priority: 30,
    includeWhen: ({ activeJourneyId }) => activeJourneyId !== "baggage-service",
    matcher: ({ turn }) => Boolean((turn as { forceStatus?: boolean }).forceStatus),
  });
  const identify = status.state("identify")
    .instructions([
      "Collect either a booking reference or a flight number, whichever matches the customer's question.",
      "Ask for only one missing identifier at a time.",
      "Do not ask for passport, payment, password, one-time code, or account-login details.",
    ].join(" "))
    .collect("bookingReference", { required: false })
    .collect("flightNumber", { required: false });
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
