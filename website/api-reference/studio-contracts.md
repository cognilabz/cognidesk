# @cognidesk/studio-contracts

`@cognidesk/studio-contracts` contains the shared schemas used by Studio, target
adapters, and the Studio operator runtime.

Install this package when an application needs to expose Studio target metadata,
validate a `cognidesk.studio.json` manifest, return runtime introspection, or
exchange typed operator WebSocket events.

## Contract areas

| Area | Exports |
|------|---------|
| Target manifests | `StudioTargetManifestSchema`, `StudioTargetOverlaySchema`, `mergeStudioTargetManifest` |
| Introspection | `StudioAgentIntrospectionSchema`, journey graph and conversation summary schemas |
| Configuration | Studio configuration surface schemas for target capabilities and policy exposure |
| Dashboards | Dashboard capability and artifact schemas |
| Operator sessions | `StudioOperatorClientEventSchema`, `StudioOperatorServerEventSchema`, operator surface and reasoning-effort types |
| Auth and roles | Studio role and auth-related schemas |
| Responses and summaries | Shared response, tool, knowledge, and widget summary schemas |

## Target manifest validation

```typescript
import {
  StudioTargetManifestSchema,
  mergeStudioTargetManifest,
} from "@cognidesk/studio-contracts";

const manifest = StudioTargetManifestSchema.parse(JSON.parse(source));
const effectiveManifest = mergeStudioTargetManifest(manifest, overlay);
```

The manifest is the source of truth for Studio's target runtime URL, telemetry
sources, source repository, editable path allowlist, validation commands,
dashboard artifact storage, operator instructions, model list, and credential
grant categories.

## Operator event validation

```typescript
import {
  StudioOperatorClientEventSchema,
  StudioOperatorServerEventSchema,
} from "@cognidesk/studio-contracts";

const clientEvent = StudioOperatorClientEventSchema.parse(message);
const serverEvent = StudioOperatorServerEventSchema.parse(message);
```

Use the schemas at service boundaries. They intentionally validate the wire
shape without making Studio own the target application's runtime behavior.

---

## Full type reference

Open the generated [`@cognidesk/studio-contracts` type reference](generated/packages/studio-contracts/dist.md).
