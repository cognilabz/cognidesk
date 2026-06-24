# @cognidesk/test-harness

`@cognidesk/test-harness` runs repeatable agent scenarios and provider
conformance checks against Cognidesk runtimes.

Use it when you need evidence that an agent follows a scripted support path,
meets rubric criteria, preserves privacy during evaluation, or that a Provider
Integration manifest follows the expected capability and credential rules.

## Main exports

```typescript
import {
  createTestHarness,
  runtimeHarnessClient,
  runProviderConformance,
} from "@cognidesk/test-harness";
```

| Export | Purpose |
|--------|---------|
| `createTestHarness(options)` | Creates a scenario runner around a `HarnessAgentClient`, optional simulated user model, optional judge model, and privacy redaction hooks. |
| `runtimeHarnessClient(runtime)` | Adapts a `CognideskRuntime` to the harness client interface. |
| `runProviderConformance(input)` | Checks Provider Integration manifests, channel policies, credential declarations, capability evidence, fail-closed policy, and optional live checks. |
| `deriveProviderCategoryCoverage(...)` | Summarizes category coverage for Provider Integration audits. |

## Scenario testing

```typescript
const harness = createTestHarness({
  client: runtimeHarnessClient(runtime),
  judgeModel: models.matcher,
  timeoutMs: 30_000,
});

const result = await harness.runScenario({
  id: "ticket-status",
  agentId: agent.id,
  user: {
    identity: "returning customer",
    scriptedTurns: ["Can you check booking CD-CL204-4821?"],
  },
  criteria: [{
    id: "uses-ticket-tool",
    description: "The assistant should look up the ticket instead of inventing status.",
    weight: 1,
  }],
});
```

Scenario criteria require a `judgeModel`. Without a judge, use scripted turns
and deterministic assertions only.

## Provider conformance

```typescript
const result = await runProviderConformance({
  manifest,
  expectedPackageName: "@cognidesk/integration-email-gmail",
  credentialStatuses,
  channels,
  availability,
});
```

`credential-blocked` is a valid result for checks that need live provider access
but do not have credentials. Treat it differently from a hard failure.

---

## Full type reference

- [`@cognidesk/test-harness`](generated/packages/test-harness/dist.md)
- [`@cognidesk/test-harness/providers`](generated/packages/test-harness/dist/providers.md)
