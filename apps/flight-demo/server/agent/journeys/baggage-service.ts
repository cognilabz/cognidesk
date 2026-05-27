import type { createAgent, KnowledgeSource } from "@cognidesk/core";

export function addBaggageServiceJourney(agent: ReturnType<typeof createAgent>, flightKnowledge: KnowledgeSource) {
  agent.delegationJourney("baggage-service", {
    condition: [
      "Customer wants to add, order, buy, purchase, upgrade, check eligibility for, or change extra baggage, luggage, bags, or sports equipment.",
      "Use this Journey for unsupported baggage/add-on service requests. Do not use it for simple baggage policy questions like allowance unless the customer asks for an add-on action.",
    ].join(" "),
    examples: [
      "I want to order more baggage in Economy Light",
      "Can you check if my booking can add extra luggage?",
      "Please add a checked bag to CD-CL204-4821",
    ],
    tags: ["baggage", "add-ons", "unsupported"],
    priority: 50,
    stickiness: "high",
    matcher: ({ activeJourneyId }) => activeJourneyId === "baggage-service",
    specialist: {
      goal: "Handle unsupported baggage and travel add-on requests without fabricating service actions.",
      instructions: [
        "State that this demo can explain the baggage policy but cannot add, order, buy, or verify eligibility for baggage or sports-equipment add-ons.",
        "If the customer provides a booking reference in this context, do not check ticket status from it and do not ask for more booking data.",
        "Offer policy information or human handoff as supported next steps.",
        "Never open the flight-booking flow for baggage, luggage, seats, meals, payments, or add-ons.",
      ].join(" "),
      knowledge: [flightKnowledge],
    },
  });
}
