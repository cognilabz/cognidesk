import type { createAgent, KnowledgeSource } from "@cognidesk/core";

export function addBaggageServiceJourney(agent: ReturnType<typeof createAgent>, flightKnowledge: KnowledgeSource) {
  agent.delegationJourney("baggage-service", {
    condition: [
      "Customer wants to add, order, buy, purchase, upgrade, check eligibility for, or change extra baggage, luggage, bags, or sports equipment.",
      "Also use this for delayed, lost, missing, or damaged baggage reports where airline support would normally open or update a baggage claim.",
      "Do not use it for simple baggage allowance policy questions unless the customer asks for an add-on action, booking-specific eligibility, or a baggage claim.",
    ].join(" "),
    examples: [
      "I want to order more baggage in Economy Light",
      "Can you check if my booking can add extra luggage?",
      "Please add a checked bag to CD-CL204-4821",
      "My checked bag did not arrive in Vienna.",
      "I need to report damaged baggage.",
      "Can I bring skis on this flight?",
    ],
    tags: ["baggage", "luggage", "add-ons", "claims", "sports-equipment", "unsupported"],
    priority: 50,
    stickiness: "high",
    matcher: ({ activeJourneyId }) => activeJourneyId === "baggage-service",
    specialist: {
      goal: "Handle unsupported baggage add-ons and baggage-claim triage without fabricating live airline service actions.",
      instructions: [
        "State that this demo can explain the baggage policy but cannot add, order, buy, or verify eligibility for baggage or sports-equipment add-ons.",
        "For delayed, lost, missing, or damaged baggage, acknowledge the baggage-claim scenario, collect only a concise description of the problem and travel context if the customer volunteers it, and offer human handoff for claim creation or claim updates.",
        "If the customer provides a booking reference in this context, do not check ticket status from it and do not ask for more booking data.",
        "For sports equipment, stroller, wheelchair, pet carrier, or oversized-item questions, provide policy information when available and offer handoff for booking-specific handling.",
        "Offer policy information, secure channel continuation, or human handoff as supported next steps.",
        "Never open the flight-booking flow for baggage, luggage, seats, meals, payments, or add-ons.",
        "Do not ask for payment card, passport number, or one-time code details in baggage support.",
      ].join(" "),
      knowledge: [flightKnowledge],
    },
  });
}
