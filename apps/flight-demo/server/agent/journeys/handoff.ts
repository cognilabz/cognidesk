import type { KnowledgeSource, createAgent } from "@cognidesk/core";

export function addHandoffJourney(agent: ReturnType<typeof createAgent>, flightKnowledge: KnowledgeSource) {
  agent.delegationJourney("human-handoff", {
    condition: [
      "Customer asks for a person, is angry or distressed, or has an airline exception that needs live support authority.",
      "Use this for urgent disruption handling, cancellations, missed connections, stranded passengers, accessibility or medical needs, unaccompanied-minor cases, group-booking exceptions, payment disputes, legal/compensation escalation, or any customer who explicitly wants a human agent.",
      "Do not use this for simple policy answers or normal mocked booking/status flows unless the customer asks to escalate.",
    ].join(" "),
    examples: [
      "I want to talk to a human",
      "This is urgent and complicated",
      "My flight was cancelled and I need a person",
      "I missed my connection and I am stranded at the airport",
      "I need wheelchair assistance added now",
      "I am angry and want an airline agent",
    ],
    tags: ["handoff", "escalation", "disruption", "accessibility", "missed-connection"],
    priority: 60,
    specialist: {
      goal: "Collect a short airline-support handoff summary and stop automated replies.",
      instructions: [
        "Acknowledge the escalation calmly and avoid arguing with the customer.",
        "Summarize the issue, urgency, known booking or flight identifiers, travel date, airport context, and what the customer wants next.",
        "Ask for only one missing critical detail if it materially helps the human agent; otherwise proceed with the handoff summary.",
        "Do not request passwords, one-time codes, passport numbers, payment cards, or medical documents in chat.",
      ].join(" "),
      tools: [],
      knowledge: [flightKnowledge],
    },
  });
}
