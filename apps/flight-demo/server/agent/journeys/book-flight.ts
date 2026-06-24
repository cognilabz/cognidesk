import { choiceWidget, datePickerWidget, textInputWidget, widgetPrompt, type createAgent } from "@cognidesk/core";
import { bookingContext } from "../domain/schemas.js";
import type { Flight } from "../domain/schemas.js";
import type { FlightTools } from "../tools/flight-tools.js";

export function addBookFlightJourney(agent: ReturnType<typeof createAgent>, tools: FlightTools) {
  const booking = agent.stateMachineJourney("book-flight", {
    condition: [
      "Customer explicitly wants to search flight availability, compare flight options, create a new itinerary, or book a replacement flight after a disruption.",
      "Use this for route/date shopping, fare option selection, and confirmed mocked booking creation.",
      "Do not use this Journey for baggage, luggage, add-ons, seats, payment, refund status, receipts, passenger-name changes, ticket-status lookups, generic policy questions, or unsupported service requests unless the customer also clearly asks to book a flight itinerary.",
    ].join(" "),
    examples: [
      "Book a ticket to Berlin",
      "Find me a flight from Vienna to Paris tomorrow",
      "My flight was cancelled; show me replacement flights from Vienna to Berlin on 2026-05-27",
      "What is the cheapest option from Vienna to Berlin tomorrow?",
    ],
    tags: ["booking", "tickets", "rebooking", "availability"],
    context: bookingContext,
    priority: 20,
  });
  const collectRoute = booking.state("collectRoute")
    .instructions([
      "Treat the request like airline itinerary shopping: collect origin, destination, travel date, and optionally passenger name.",
      "In chat or web channels, a route-details form is shown when origin, destination, or departure date is missing.",
      "When that form is visible, ask the customer to use the form below instead of asking them to send those values separately in chat.",
      "In voice channels, no form or widget is shown; ask conversationally for one missing travel detail at a time and never tell the customer to use a form.",
      "Use one short sentence and do not repeat the same form instruction.",
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
      selectedFlightId: () => undefined,
      lastSearchOrigin: ({ context }) => context.origin,
      lastSearchDestination: ({ context }) => context.destination,
      lastSearchDepartureDate: ({ context }) => context.departureDate,
    },
  });
  const selectFlight = booking.state("selectFlight")
    .instructions([
      "Show the availableFlights from journeyContext in the answer with route, departure time, status, and price.",
      "The customer may select a flight with the choice widget or in plain chat.",
      "If the customer says the cheaper/cheapest option, select the available flight with the lowest price.",
      "If the customer names a flight number, normalize it to uppercase.",
      "Do not mention real payment, seat assignment, baggage purchase, or ticket-change processing in this state.",
    ].join(" "))
    .collect("selectedFlightId", {
      prompt: "Flight option",
      widget: widgetPrompt(choiceWidget, {
        label: "Flight option",
        options: [],
      }),
      widgetInput: ({ context }) => flightChoiceInput(context),
    });
  const noFlights = booking.state("noFlights")
    .instructions([
      "No mocked flights matched the last search.",
      "Frame this like an airline support availability miss: acknowledge the requested route/date, then offer concrete alternatives.",
      "For vague follow-ups such as 'What are available flights?' or 'On any dates?', use routeAlternativeFlights and allAvailableFlights from journeyContext instead of repeating only the failed date.",
      "If routeAlternativeFlights is empty, say there are no mocked flights for that route on any date and list available mocked flights from allAvailableFlights with flight number, route, departure date/time, and price; do not reduce them to route names only.",
      "When listing route alternatives, include the flight numbers such as CL102 so the customer can choose a concrete option.",
      "If routeAlternativeFlights is not empty, those alternatives are selectable booking candidates. The customer may pick one using the choice widget or plain chat.",
      "If the customer says the cheaper/cheapest option, select the route alternative with the lowest price.",
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
        availableFlights: ({ output }) => output.routeFlights,
        selectedFlightId: () => undefined,
      },
    })
    .collect("origin", { required: false })
    .collect("destination", { required: false })
    .collect("departureDate", { required: false })
    .collect("selectedFlightId", {
      prompt: "Flight option",
      requiredWhen: ({ context }) => Array.isArray(context.availableFlights) && context.availableFlights.length > 0 && !searchCriteriaChanged(context),
      widget: widgetPrompt(choiceWidget, {
        label: "Route alternative",
        options: [],
      }),
      widgetInput: ({ context }) => flightChoiceInput(context),
    });
  const confirmPassenger = booking.state("confirmPassenger")
    .instructions("Tell the customer which selected mocked flight is being prepared, then collect the passenger name if it is missing. Do not ask for passport, date of birth, payment card, or loyalty-account data.")
    .collect("passengerName", {
      prompt: "Passenger name",
      widget: widgetPrompt(textInputWidget, {
        label: "Passenger name",
        placeholder: "Alex Morgan",
      }),
    });
  const book = booking.state("book").runTool(tools.bookFlight, {
    confirm: {
      message: "Confirm mocked booking",
      reason: "Review the itinerary details before creating the mocked booking.",
    },
    input: ({ context }) => ({
      selectedFlightId: normalizeFlightId(context.selectedFlightId),
      passengerName: context.passengerName ?? "",
      flight: summarizeSelectedFlight(context),
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
  noFlights.when("customer selected one of the listed route alternatives", {
    priority: 20,
    guard: ({ context }) => hasSelectedAvailableFlight(context),
  }).target(confirmPassenger);
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

function hasSelectedAvailableFlight(context: Record<string, unknown>) {
  const selectedFlightId = normalizeFlightId(context.selectedFlightId);
  return Boolean(selectedFlightId && getAvailableFlights(context).some((flight) => flight.id === selectedFlightId));
}

function flightChoiceInput(context: Record<string, unknown>) {
  const flights = getAvailableFlights(context);
  return {
    label: flights.length > 1 ? "Choose a flight" : "Choose this flight",
    options: flights.map((flight) => ({
      id: flight.id,
      label: `${flight.id} — ${flight.origin} to ${flight.destination}`,
      description: `${formatFlightDate(flight.departureTime)} · €${flight.price} · ${flight.status}`,
    })),
  };
}

function summarizeSelectedFlight(context: Record<string, unknown>) {
  const selectedFlightId = normalizeFlightId(context.selectedFlightId);
  const flight = getAvailableFlights(context).find((candidate) => candidate.id === selectedFlightId);
  return flight ? `${flight.id} — ${flight.origin} to ${flight.destination} — ${formatFlightDate(flight.departureTime)} — €${flight.price}` : selectedFlightId;
}

function getAvailableFlights(context: Record<string, unknown>) {
  return Array.isArray(context.availableFlights)
    ? context.availableFlights.filter(isFlight)
    : [];
}

function isFlight(value: unknown): value is Flight {
  return Boolean(
    value
      && typeof value === "object"
      && "id" in value
      && typeof value.id === "string"
      && "origin" in value
      && typeof value.origin === "string"
      && "destination" in value
      && typeof value.destination === "string"
      && "departureTime" in value
      && typeof value.departureTime === "string"
      && "status" in value
      && typeof value.status === "string"
      && "price" in value
      && typeof value.price === "number",
  );
}

function formatFlightDate(value: string) {
  return value.replace("T", " ").replace(/:\d{2}(?:[+-]\d{2}:\d{2}|Z)$/, "");
}
