import type { KnowledgeSource, createAgent } from "@cognidesk/core";

export function addHandoffJourney(agent: ReturnType<typeof createAgent>, flightKnowledge: KnowledgeSource) {
  agent.delegationJourney("human-handoff", {
    condition: "Customer is angry, asks for a person, or has a complex exception",
    examples: ["I want to talk to a human", "This is urgent and complicated"],
    tags: ["handoff"],
    specialist: {
      goal: "Collect a short handoff summary and stop automated replies.",
      tools: [],
      knowledge: [flightKnowledge],
    },
  });
}
