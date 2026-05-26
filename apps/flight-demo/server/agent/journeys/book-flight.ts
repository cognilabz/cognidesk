import type { createAgent } from "@cognidesk/core";
import { bookingContext } from "../domain/schemas.js";
import type { FlightTools } from "../tools/flight-tools.js";

export function addBookFlightJourney(agent: ReturnType<typeof createAgent>, tools: FlightTools) {
  const booking = agent.stateMachineJourney("book-flight", {
    condition: "Customer wants to search for flights or book a ticket",
    examples: ["Book a ticket to Berlin", "Find me a flight from Vienna to Paris tomorrow"],
    tags: ["booking", "tickets"],
    context: bookingContext,
    priority: 20,
  });
  const collectRoute = booking.state("collectRoute")
    .collect("origin")
    .collect("destination")
    .collect("departureDate");
  const chooseFlight = booking.state("chooseFlight").runTool(tools.searchFlights, {
    input: ({ context }) => ({
      origin: context.origin ?? "",
      destination: context.destination ?? "",
      departureDate: context.departureDate ?? "",
    }),
    assign: {
      availableFlights: ({ output }) => output.flights,
    },
  });
  const confirmPassenger = booking.state("confirmPassenger").collect("passengerName");
  const book = booking.state("book").runTool(tools.bookFlight, {
    confirm: {
      message: "Confirm mocked booking",
    },
  });
  const booked = booking.final("booked");
  booking.initial(collectRoute);
  collectRoute.when("route and date are known").target(chooseFlight);
  chooseFlight.when("customer selected a flight").target(confirmPassenger);
  confirmPassenger.when("passenger is known").target(book);
  book.transitionTo(booked);
}
