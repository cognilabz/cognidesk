import { datePickerWidget, textInputWidget, widgetPrompt, type createAgent } from "@cognidesk/core";
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
    .instructions([
      "A route-details form is shown when origin, destination, or departure date is missing.",
      "When the form is visible, ask the customer to use the form below instead of asking them to send those values separately in chat.",
      "Interpret relative travel dates using 2026-05-26 as today.",
      "Store departureDate as YYYY-MM-DD; for example, tomorrow is 2026-05-27.",
    ].join(" "))
    .collect("origin", {
      prompt: "Origin city",
      widget: widgetPrompt(textInputWidget, {
        label: "Origin city",
        placeholder: "Vienna",
      }),
    })
    .collect("destination", {
      prompt: "Destination city",
      widget: widgetPrompt(textInputWidget, {
        label: "Destination city",
        placeholder: "Berlin",
      }),
    })
    .collect("departureDate", {
      prompt: "Departure date",
      widget: widgetPrompt(datePickerWidget, {
        label: "Departure date",
        min: "2026-05-26",
      }),
    })
    .collect("passengerName", {
      required: false,
      prompt: "Passenger name",
      widget: widgetPrompt(textInputWidget, {
        label: "Passenger name",
        placeholder: "Alex Morgan",
      }),
    });
  const chooseFlight = booking.state("chooseFlight").runTool(tools.searchFlights, {
    input: ({ context }) => ({
      origin: context.origin ?? "",
      destination: context.destination ?? "",
      departureDate: context.departureDate ?? "",
    }),
    assign: {
      availableFlights: ({ output }) => output.flights,
      lastSearchOrigin: ({ context }) => context.origin,
      lastSearchDestination: ({ context }) => context.destination,
      lastSearchDepartureDate: ({ context }) => context.departureDate,
    },
  });
  const selectFlight = booking.state("selectFlight")
    .instructions("Show the availableFlights from journeyContext in the answer and ask the customer to use the flight-number field below. Do not ask them to reply in chat when the field is visible.")
    .collect("selectedFlightId", {
      prompt: "Choose one of the mocked flight numbers.",
      widget: widgetPrompt(textInputWidget, {
        label: "Flight number",
        description: "Use a flight number from the search results.",
        placeholder: "CL102",
      }),
    });
  const noFlights = booking.state("noFlights")
    .instructions([
      "No mocked flights matched the last search.",
      "For vague follow-ups such as 'What are available flights?' or 'On any dates?', use routeAlternativeFlights and allAvailableFlights from journeyContext instead of repeating only the failed date.",
      "If routeAlternativeFlights is empty, say there are no mocked flights for that route on any date and offer the available mocked routes.",
      "If the customer gives a new route or date, update the changed slot and search again.",
      "Interpret relative travel dates using 2026-05-26 as today and store departureDate as YYYY-MM-DD.",
    ].join(" "))
    .entry(tools.suggestFlightOptions, {
      input: ({ context }) => ({
        origin: context.origin,
        destination: context.destination,
      }),
      assign: {
        routeAlternativeFlights: ({ output }) => output.routeFlights,
        allAvailableFlights: ({ output }) => output.allFlights,
      },
    })
    .collect("origin", { required: false })
    .collect("destination", { required: false })
    .collect("departureDate", { required: false });
  const confirmPassenger = booking.state("confirmPassenger").collect("passengerName", {
    prompt: "Passenger name",
    widget: widgetPrompt(textInputWidget, {
      label: "Passenger name",
      placeholder: "Alex Morgan",
    }),
  });
  const book = booking.state("book").runTool(tools.bookFlight, {
    confirm: {
      message: "Confirm mocked booking",
    },
    input: ({ context }) => ({
      selectedFlightId: normalizeFlightId(context.selectedFlightId),
      passengerName: context.passengerName ?? "",
    }),
    assign: {
      bookingReference: ({ output }) => output.bookingReference,
    },
  });
  const booked = booking.final("booked");
  booking.initial(collectRoute);
  collectRoute.when("route and date are known").target(chooseFlight);
  chooseFlight.when("mocked flights are available", {
    guard: ({ context }) => Array.isArray(context.availableFlights) && context.availableFlights.length > 0,
  }).target(selectFlight);
  chooseFlight.when("no mocked flights are available", {
    guard: ({ context }) => Array.isArray(context.availableFlights) && context.availableFlights.length === 0,
  }).target(noFlights);
  selectFlight.when("customer selected an available flight", {
    guard: ({ context }) => Boolean(
      context.selectedFlightId
        && context.availableFlights?.some((flight) => flight.id === normalizeFlightId(context.selectedFlightId)),
    ),
  }).target(confirmPassenger);
  noFlights.when("customer changed the route or departure date", {
    guard: ({ context }) => searchCriteriaChanged(context),
  }).target(chooseFlight);
  confirmPassenger.when("passenger is known").target(book);
  book.transitionTo(booked);
}

function normalizeFlightId(value: unknown) {
  return typeof value === "string" ? value.trim().toUpperCase() : "";
}

function searchCriteriaChanged(context: Record<string, unknown>) {
  return normalizeText(context.origin) !== normalizeText(context.lastSearchOrigin)
    || normalizeText(context.destination) !== normalizeText(context.lastSearchDestination)
    || normalizeText(context.departureDate) !== normalizeText(context.lastSearchDepartureDate);
}

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}
