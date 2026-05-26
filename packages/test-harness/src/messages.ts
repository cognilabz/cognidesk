import type { ModelMessage } from "@cognidesk/core";
import type { EvaluationCriterion, HarnessScenario, TranscriptTurn } from "./types.js";

export function createSimulatedUserMessages(scenario: HarnessScenario, transcript: TranscriptTurn[]): ModelMessage[] {
  return [
    {
      role: "system",
      content: [
        `You are simulating this user identity: ${scenario.user.identity}.`,
        `Goal: ${scenario.user.goal}`,
        scenario.user.background ? `Background: ${scenario.user.background}` : "",
        "Return only the next user message. Do not describe your reasoning.",
      ].filter(Boolean).join("\n"),
    },
    {
      role: "user",
      content: renderTranscript(transcript),
    },
  ];
}

export function createJudgeMessages(args: {
  scenario: HarnessScenario;
  transcript: TranscriptTurn[];
  criterion: EvaluationCriterion;
}): ModelMessage[] {
  return [
    {
      role: "system",
      content: [
        "You are an evaluation judge for a customer support chatbot.",
        args.scenario.judge?.instructions ?? "",
        "Score only the criterion. Return JSON matching the supplied schema.",
      ].filter(Boolean).join("\n"),
    },
    {
      role: "user",
      content: [
        `Scenario: ${args.scenario.name ?? args.scenario.id}`,
        args.scenario.description ? `Description: ${args.scenario.description}` : "",
        `Simulated user: ${args.scenario.user.identity}`,
        `User goal: ${args.scenario.user.goal}`,
        `Criterion ${args.criterion.id}: ${args.criterion.description}`,
        "",
        renderTranscript(args.transcript),
      ].filter(Boolean).join("\n"),
    },
  ];
}

function renderTranscript(transcript: TranscriptTurn[]) {
  if (transcript.length === 0) return "Transcript is empty.";
  return transcript.map((turn) => `${turn.role.toUpperCase()}: ${turn.content}`).join("\n");
}
