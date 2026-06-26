# AI Agents & Skills

Use this guide when you want an AI coding agent to build with Cognidesk, or
when you want to publish repeatable Cognidesk workflows as reusable Skills.

Cognidesk has two different kinds of agents:

| Name | Runs where | Purpose |
|------|------------|---------|
| Cognidesk Agent | Your application runtime | Talks to customers, uses tools, retrieves knowledge, and follows Journeys. |
| AI coding agent | Your editor, terminal, or automation environment | Reads the repository, edits code, writes tests, and helps build Cognidesk apps. |

Skills sit on the AI coding-agent side. A Skill packages instructions, examples,
scripts, and checklists so a coding agent can repeat a workflow reliably.

## Why Cognidesk works well with AI agents

Cognidesk projects are agent-friendly because the important behavior is explicit
and typed:

| SDK artifact | What the AI coding agent should edit |
|--------------|--------------------------------------|
| Agent instructions | Persona, safety rules, policy boundaries, and response style. |
| Tools | Zod schemas, side-effect metadata, confirmation widgets, and execution code. |
| Knowledge sources | Retrieval schemas, document metadata, citations, and source links. |
| Journeys | Stateful support paths with conditions, examples, context, states, and transitions. |
| Runtime setup | Storage, model roles, transport adapters, telemetry, and UI surfaces. |
| Tests and examples | Behavior fixtures, compile checks, runtime smoke tests, and demo prompts. |

That gives a coding agent concrete files and contracts to inspect instead of
asking it to infer product behavior from prose alone.

## Recommended AI workflow

1. Point the coding agent at the local repository and the relevant docs.
2. Ask it to inspect the current SDK surface before editing behavior.
3. Define the customer-support outcome in terms of tools, knowledge, Journeys,
   or runtime configuration.
4. Keep semantic behavior in Cognidesk artifacts rather than hidden prompt-only
   logic.
5. Verify with a compile, test, demo smoke, or browser check before accepting
   the change.

Useful local context:

| Need | Start here |
|------|------------|
| Build the first runtime agent | [Quick Start](../getting-started/quick-start.md) |
| Understand Cognidesk runtime concepts | [Concepts](../concepts/index.md) |
| Configure instructions | [Agents & Instructions](agents-and-instructions.md) |
| Add typed actions | [Tools](tools.md) |
| Add retrieval | [Knowledge Sources](knowledge-sources.md) |
| Add structured flows | [Journeys](journeys.md) |
| Study a complete app | [Flight Demo](../examples/flight-demo.md) |

## Agent guidance file

For repository-local AI coding agents, keep a short `AGENTS.md` near the code
they edit. This is a good starter for Cognidesk projects:

```md title="AGENTS.md"
# Cognidesk Agent Rules

## Source of truth

- Inspect the current SDK code, examples, and tests before changing behavior.
- Use `createAgent`, `tool`, `knowledgeSource`, and `stateMachineJourney`
  from `@cognidesk/core`.
- Prefer typed Zod schemas over unstructured prompt-only behavior.
- Keep runtime tools, knowledge sources, and Journeys explicit and testable.

## Behavior changes

- Put customer-facing tone and policy boundaries in agent instructions.
- Put external actions in typed tools.
- Put retrieval-backed answers in knowledge sources.
- Put multi-step support flows in state machine Journeys.
- Require confirmation for side-effect tools such as booking, cancellation,
  refunds, writes, handoffs, and outbound messages.

## Verification

- Run the narrowest relevant test or compile command after edits.
- For docs changes, build the MkDocs site.
- For UI changes, verify in a browser.
- Report exactly what passed and what could not be verified.
```

Project-specific rules should stay short. Put product policy, fixture data, and
large examples in docs, tests, or Skills instead of turning `AGENTS.md` into a
second codebase.

## SDK building blocks

A coding agent should usually start from a small, compiling agent definition and
then add capabilities one at a time:

```typescript title="agent.ts"
import { createAgent, tool } from "@cognidesk/core";
import { z } from "zod";

const findTicket = tool("findTicket", {
  description: "Look up a support ticket by booking reference.",
  input: z.object({ bookingReference: z.string() }),
  output: z.object({ status: z.string() }),
  execute: async ({ input }) => ({
    status: `Ticket ${input.bookingReference} is confirmed.`,
  }),
});

const agent = createAgent("flight-support", {
  instructions: [
    "You are a concise flight support agent.",
    "Never invent ticket data.",
    "Ask for a booking reference before checking ticket status.",
  ].join("\n"),
});

agent.tools.add(findTicket);

const ticketStatus = agent.stateMachineJourney("ticket-status", {
  condition: "Customer wants to check ticket status.",
  examples: ["Can you check ticket ABC123?", "Where is my booking?"],
  context: z.object({
    bookingReference: z.string().optional(),
    ticketStatus: z.string().optional(),
  }),
});

const identify = ticketStatus.state("identify")
  .collect("bookingReference");
const lookup = ticketStatus.state("lookup")
  .runTool(findTicket, {
    input: ({ context }) => ({
      bookingReference: context.bookingReference ?? "",
    }),
    assign: {
      ticketStatus: ({ output }) => output.status,
    },
  });
const done = ticketStatus.final("done");

ticketStatus.initial(identify);
identify.transitionTo(lookup);
lookup.transitionTo(done);

export const compiledAgent = agent.compile();
```

This layout gives the coding agent a reliable expansion path:

- add more tools when the agent needs actions
- add knowledge sources when answers need citations
- add Journey states when support flows need memory or guardrails
- add runtime configuration when the app needs storage, models, HTTP, voice, UI,
  or telemetry

## Cognidesk SDK Skill

The `cognidesk-sdk` Skill is an optional companion for AI coding agents that
work inside Cognidesk application projects. It is designed for the normal SDK
user setup: an app with `@cognidesk/*` npm packages installed, public
documentation available, and no local checkout of the Cognidesk monorepo.

The Skill gives the coding agent a compact map of the SDK so it can reason from
the same concepts as these docs: Agents, instructions, tools, knowledge sources,
state machine Journeys, runtime setup, transport adapters, UI, voice,
observability, provider integrations, and verification. It points the coding
agent back to the public documentation and installed TypeScript declarations
when API details matter.

| Area | What the Skill helps an AI coding agent understand |
|------|----------------------------------------------------|
| SDK orientation | Which `@cognidesk/*` packages are involved and where the public docs live. |
| Agent design | How instructions, tools, knowledge, and Journeys fit together. |
| Journey design | How to model multi-step support flows with typed context and transitions. |
| Runtime wiring | How storage, model roles, HTTP/SSE, React UI, voice, telemetry, and providers relate. |
| Safety | Why side effects need confirmation, idempotency, or explicit handoff rules. |
| Verification | Which local checks prove a generated SDK change actually works. |

The Skill does not replace the docs. The docs remain the human-readable source
of truth; the Skill compresses that source into an operating guide for coding
agents. This matters because AI agents often work in projects where only npm
package declarations are present, so they need stable public links and package
boundaries instead of internal repository paths.

For a new Cognidesk app, the Skill can provide a minimal TypeScript starter with
an agent, a typed tool, a ticket-status Journey, model setup, runtime storage,
and a conversation smoke script. For an existing app, it helps the coding agent
review whether behavior belongs in instructions, a tool, a knowledge source, a
Journey, runtime configuration, or UI code.

## Guardrails

Keep these boundaries clear:

- A Cognidesk tool is runtime behavior. A Skill is build-time guidance for a
  coding agent.
- Agent instructions shape responses. Journeys control multi-step support
  processes.
- Knowledge sources answer from documents. Tools perform actions.
- Semantic routing and support eligibility should be tested with examples, not
  only keyword checks.
- Side effects should require confirmation, idempotency, or both.

When in doubt, make the behavior inspectable in code and prove it with a test or
demo prompt.
