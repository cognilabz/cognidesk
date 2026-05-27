# Cognidesk

Cognidesk is a TypeScript chatbot SDK context for building customer support agents as code.

## Language

**Runtime SDK**:
A portable TypeScript package that executes customer support conversations from developer-provided definitions. It owns the conversation loop, path selection, tool execution, state snapshots, and emitted UI/runtime events.
_Avoid_: Definition-only SDK, hosted-only runtime

**Transport Neutrality**:
The Runtime SDK's ability to run without depending on a specific HTTP server, framework, streaming protocol, or deployment target.
_Avoid_: Framework-bound runtime

**Built-In Adapter**:
An SDK-provided integration for common needs such as HTTP, SSE, storage, model providers, or local development. Built-In Adapters are optional conveniences and do not define the Runtime SDK boundary.
_Avoid_: Required platform dependency

**HTTP Adapter**:
A Built-In Adapter that exposes the transport-neutral runtime over REST-style POST endpoints and SSE Streaming.
_Avoid_: Core HTTP server

**HTTP Handler**:
A framework-agnostic request handler used by the HTTP Adapter. Framework wrappers can adapt it to Node, Hono, Express, Fastify, or other servers.
_Avoid_: Framework-specific route as core transport

**Model Adapter**:
An SDK integration that lets the runtime call a configured model through a consistent Cognidesk interface. Model Adapters are created through the Cognidesk model entrypoint, commonly by wrapping Vercel AI SDK model handles.
_Avoid_: Provider-specific runtime

**AI SDK Model Handle**:
A Vercel AI SDK language or embedding model object supplied by an application to the Cognidesk model entrypoint. AI SDK Model Handles are allowed at the `@cognidesk/model` boundary but are wrapped before reaching Core runtime APIs.
_Avoid_: Provider-specific Cognidesk adapter package, raw AI SDK object in Core

**AI SDK-Style Model Definition**:
The application-facing way to configure Cognidesk models by passing Vercel AI SDK model values in the same style used by the AI SDK itself, such as `openai("gpt-5.5")`, `openrouter("openai/gpt-5.5")`, or a provider registry model id. Cognidesk wraps these definitions as Model Adapters and derives prompt identity separately.
_Avoid_: Cognidesk-specific provider factory, duplicated OpenAI/OpenRouter options

**Model Metadata Inference**:
The Cognidesk model entrypoint's attempt to derive provider id, provider model id, and Logical Model Slug from an AI SDK-Style Model Definition. Applications provide explicit overrides only when inference is insufficient or intentionally different.
_Avoid_: Required duplicate model id, manual provider naming for normal AI SDK handles

**Logical Model Slug**:
A provider-independent identifier for the model whose behavior a prompt profile targets, such as `gpt-5.5`, `gpt-5.4-mini`, `gpt-5.4-nano`, or `claude-sonnet-4.6`. Provider routes, aliases, and snapshot IDs are normalized to a Logical Model Slug before selecting default prompts.
_Avoid_: Provider model id as prompt identity, package-specific prompt id

**Model Profile Registration**:
The declared mapping that introduces a Logical Model Slug to Cognidesk, including provider aliases and prompt profile availability. Applications may register additional Logical Model Slugs, but stray prompt folders do not implicitly create model profiles.
_Avoid_: Accidental prompt folder as model support, unregistered model alias

**Default Prompt Profile**:
The generic non-model-optimized Model Prompt Profile used when a configured provider model cannot be normalized to a registered Logical Model Slug. The Default Prompt Profile keeps unknown models runnable but must not make the unknown model appear to be a known logical model.
_Avoid_: Silent known-model fallback, pretending an unknown model is `gpt-5.5`

**Built-In Logical Model Profile**:
An SDK-shipped complete Model Prompt Profile for a registered Logical Model Slug. The v1 built-in logical model profiles target `gpt-5.5`, `gpt-5.4-mini`, `gpt-5.4-nano`, and `claude-sonnet-4.6`.
_Avoid_: Provider route profile, partial SDK-shipped model profile

**Prompt Asset Store**:
The SDK-owned prompt file tree containing the Default Prompt Profile and built-in Logical Model Slug profiles. Prompt Assets are authored as markdown files, organized by profile slug and Prompt Task, bundled into `@cognidesk/model` for runtime use, and SDK-shipped profiles must include every required promptable task file.
_Avoid_: Prompt constants scattered through provider bindings, app-local SDK defaults

**Model Role**:
A named runtime use of a model, such as response generation, matching, extraction, citation post-processing, Journey Index embeddings, or conversation compaction. Production Model Roles are configured as one model set for an Agent because prompts are written for the models they use.
_Avoid_: Single model for every task

**Agent Model Set**:
The complete set of production Model Role configurations for an Agent. Journeys and states do not override the Agent Model Set in v1; Test Harness judge and simulated-user models are configured separately.
_Avoid_: Per-journey model override

**AI SDK-Style Model Set Definition**:
An application-facing Agent Model Set declaration that maps each Model Role to either an AI SDK-Style Model Definition or a configured role entry with generation settings and metadata overrides. Cognidesk converts this role map into Model Adapters and applies prompt profile selection for each role.
_Avoid_: Manual adapter construction for every role, provider-specific model-set factory

**Model Prompt Profile**:
The role-specific prompt set used with a logical model family or concrete logical model in an Agent Model Set. The Runtime SDK selects defaults from logical model identity rather than provider route, while applications may override individual role prompts or replace the full Model Prompt Profile when they intentionally take ownership of that prompt behavior.
_Avoid_: One universal prompt, app-local extractor prompt, scattered role prompts

**Prompt Template Field**:
A named runtime value that a Model Prompt Profile prompt may reference when shaping role behavior. Prompt Template Fields are defined per Prompt Profile Role, and missing required fields fail the prompt render contract without making prompt files own the entire runtime context.
_Avoid_: Hidden prompt variable, app-specific placeholder as SDK default

**Prompt Template Renderer**:
The internal Jinja-compatible renderer used by `@cognidesk/model` to compile and render Prompt Assets and Prompt Overrides. The renderer is an implementation detail; public APIs expose Cognidesk prompt concepts rather than renderer-specific APIs.
_Avoid_: Public Nunjucks API, ad hoc string replacement

**Prompt Template Validation**:
The startup-time validation of Prompt Assets and Prompt Overrides for known role filenames, registered Logical Model Slugs, template syntax, and allowed per-role Prompt Template Fields. Prompt Template Validation prevents prompt authoring mistakes from surfacing during live conversations.
_Avoid_: Lazy prompt failure, unchecked template field

**Prompt Research Basis**:
The source evidence used when authoring a Built-In Logical Model Profile, including current official model prompting guidance and Cognidesk eval results. Prompt Research Basis determines whether a model-specific Prompt Task should use zero-shot instructions, few-shot examples, XML-style structure, reasoning guidance, or other model-specific techniques.
_Avoid_: Generic prompt folklore, few-shot examples everywhere, model-specific prompt without evidence

**Prompt Profile Metadata**:
The bundled structured metadata for a Built-In Logical Model Profile that documents its Prompt Research Basis and profile-level assumptions. Prompt Profile Metadata is authored as `profile.json`, making model-specific prompt choices auditable without embedding research notes in every Prompt Task file.
_Avoid_: Undocumented model-specific prompt, research notes scattered through prompts

**Model-Visible Prompt Payload**:
A structured prompt rendering payload assembled from runtime data after model-visibility rules and Privacy Hooks have been applied. Model-Visible Prompt Payloads give prompts rich data for reasoning without exposing unredacted internal runtime objects or unstable implementation shapes.
_Avoid_: Raw internal object, pre-rendered-only prompt text, unfiltered event dump

**Role Instruction Layer**:
The rendered prompt text for a Prompt Profile Role that tells the model how to perform that role. A Role Instruction Layer is combined with the Model-Visible Prompt Payload and Structured Model Output contract rather than replacing runtime-owned context assembly.
_Avoid_: Full prompt ownership by markdown file, context assembly in prompt override

**Prompt Rendering Boundary**:
The division of responsibility where Core selects Prompt Task Identity and prepares Model-Visible Prompt Payloads, while `@cognidesk/model` selects, validates, and renders Prompt Assets. This keeps runtime state ownership in Core and template asset ownership in the model package.
_Avoid_: Core-owned prompt asset loading, model package owning runtime state

**Prompt Profile Render Contract**:
The strict current API between Core and a Model Prompt Profile for rendering a Role Instruction Layer from Prompt Task Identity, model metadata, Model-Visible Prompt Payload, and Structured Model Output metadata. The Prompt Profile Render Contract replaces the older message-transform API rather than preserving backward compatibility.
_Avoid_: Legacy message transform, compatibility shim for old prompt profiles

**Prompt Override**:
An application-provided Role Instruction Layer that replaces the built-in prompt for one Prompt Profile Role and Logical Model Slug. Prompt Overrides are per-role replacements; roles without overrides continue to use SDK defaults unless the application deliberately requires a complete custom profile.
_Avoid_: Additive prompt patch, ambiguous instruction priority

**Prompt Override Registry**:
Application configuration at the Agent Model Set boundary that declares Prompt Overrides by Logical Model Slug and Prompt Profile Role. Prompt Override Registries are resolved and validated when the Agent Model Set is created, keeping prompt ownership explicit without embedding prompt text inside individual role model settings.
_Avoid_: Prompt override hidden in a role adapter, scattered override paths

**Prompt Profile Role**:
A promptable Model Role covered by a Model Prompt Profile. A Prompt Profile Role may have multiple Prompt Tasks when one model role has distinct runtime jobs, such as journey matching, transition matching, and delegation completion under the matcher model role.
_Avoid_: Optional built-in role prompt, embedding prompt

**Prompt Task**:
A concrete prompt template used for a specific runtime job within a Prompt Profile Role. The v1 required Prompt Tasks are response, journey matcher, transition matcher, delegation completion, extraction, citation post-processing, compaction, and generated preamble; Journey Index embeddings are excluded because they do not use chat prompts.
_Avoid_: Overloaded matcher prompt, one prompt file for unrelated JSON contracts

**Prompt Task Identity**:
The runtime-selected Prompt Task for a model call, separate from the Model Role used for model-set selection and tracing. Prompt Task Identity lets one Model Role, such as matcher, use different prompt templates for different runtime jobs.
_Avoid_: Encoding prompt task in model role, inferring matcher subtype from message text

**Response Prompt Task**:
The Prompt Task for normal assistant response generation, including response rounds that call tools and final responses after tool results. Tool follow-up behavior belongs in the Response Prompt Task rather than a separate prompt task.
_Avoid_: Separate tool response prompt, side-effect claim before tool success

**Structured Model Output**:
A runtime-enforced model result shape for Model Roles that produce machine-read decisions or extracted data. Matching, extraction, citation post-processing, and conversation compaction use Structured Model Output; prompt text may describe the expected shape, but validation belongs to the Runtime SDK contract for that role.
_Avoid_: Prompt-only JSON instruction, unvalidated matcher result

**Provider Model Configuration**:
Application-owned setup that chooses a Vercel AI SDK provider and creates AI SDK Model Handles for an Agent Model Set. Provider Model Configuration belongs in applications and demos, not separate public Cognidesk provider packages.
_Avoid_: SDK-owned OpenAI package, SDK-owned OpenRouter package, provider-specific prompt identity

**Storage Adapter**:
An SDK integration that persists conversations, Runtime Events, snapshots, and runtime state through a consistent Cognidesk interface. SQLite is the first intended Storage Adapter.
_Avoid_: Hardcoded persistence backend

**SQLite Storage Adapter**:
The first concrete Storage Adapter for Cognidesk. It lives in a separate library package rather than inside the core runtime package.
_Avoid_: Core-embedded SQLite, in-memory test storage

**Starter Application**:
A runnable example application that composes Cognidesk Core with concrete adapters such as SQLite, model providers, SSE Streaming, and default UI packages.
_Avoid_: Core package dependency

**Demo Server**:
The starter Node server that runs the HTTP Adapter with concrete runtime adapters such as SQLite and model providers.
_Avoid_: Next.js-only backend

**Demo React App**:
The starter Vite React application that uses the Browser Client, ChatWidget, and React UI Package.
_Avoid_: Next.js-first frontend

**Flight Service Demo**:
The non-A1 sample domain for demonstrating Cognidesk. It covers flight booking, ticket status, flight information, customer support tools, Knowledge, Widgets, and eval scenarios using real Cognidesk runtime modules, app-owned demo Knowledge, and mocked flight-service integrations.
_Avoid_: Telecom demo, A1-like demo, fully mocked SDK demo

**Demo Data**:
Mocked data used only by the Flight Service Demo. Demo Data lives inside the demo application and is not a reusable SDK package.
_Avoid_: Shared demo fixtures package

**Book Flight Journey**:
The Flight Service Demo State Machine Journey for searching, selecting, and booking a flight.
_Avoid_: Generic booking demo

**Ticket Status Journey**:
The Flight Service Demo State Machine Journey for looking up and explaining ticket or booking status.
_Avoid_: Generic lookup demo

**Travel Disruption Specialist**:
The Flight Service Demo Delegation Journey for delays, cancellations, rebooking options, and disruption support.
_Avoid_: Generic escalation demo

**SSE Streaming**:
The built-in streaming transport for delivering Event Stream updates and chat message streaming to clients. Messages are submitted through POST requests, while streaming updates are delivered over Server-Sent Events.
_Avoid_: WebSocket-first streaming

**External Handoff**:
A runtime outcome where the assistant pauses because control has moved to a human, external system, or application-managed process. External Handoff can be explicitly resumed.
_Avoid_: Assistant keeps talking

**Conversation Resume**:
The explicit return from External Handoff to assistant-managed conversation handling.
_Avoid_: Implicit assistant restart

**Handoff Adapter**:
An optional integration that turns an External Handoff into provider-specific behavior such as opening a ticket, live chat, or human support session.
_Avoid_: Provider-specific core handoff

**Test Harness**:
An SDK-provided development and evaluation tool for customers to run their own agent implementations against real models and inspect Runtime Events, Journey Activation, state changes, tool calls, Knowledge Retrieval, and Conversation Closure.
_Avoid_: CI-only mock harness, Studio

**Eval Scenario**:
A code-defined Test Harness scenario that exercises a customer's agent implementation and records expected or observed runtime behavior.
_Avoid_: Manual transcript only

**Eval CLI**:
The command-line runner for executing Eval Scenarios against real models and producing evaluation output.
_Avoid_: UI-only eval runner

**LLM Judge**:
A model-backed evaluator used by the Test Harness to assess qualitative behavior such as helpfulness, policy adherence, goal completion, or response quality. The judge model is separately configurable from the runtime model.
_Avoid_: Only string assertions

**Simulated User**:
A model-backed or scripted customer persona used by the Test Harness to interact with an agent implementation. A Simulated User has its own identity and scenario goals, may be scripted, persona-driven, or hybrid, and can use a separately configured model.
_Avoid_: Anonymous prompt generator

**Local Runtime Environment**:
A minimal runnable Docker Compose environment for local development. It starts the Demo Server, Demo React App, SQLite storage, and generated index files without requiring Studio, pgvector, Redis, or external provider services.
_Avoid_: Hosted-only setup

**Workspace**:
The pnpm/Turborepo monorepo containing Cognidesk packages, demo applications, documentation, tests, and generated artifacts.
_Avoid_: Separate repos for v1 packages

**Declarative Definition**:
A typed code declaration that describes an agent, path, tool, retriever, guideline, condition, or widget without embedding application-specific infrastructure. Declarative definitions are interpreted by the Runtime SDK during conversation execution.
_Avoid_: Static config, workflow file

**Journey**:
A goal-oriented support capability that can shape how the Base Agent handles a conversation turn. A Journey may guide the Base Agent through deterministic state-machine steps or delegate control to a specialist agent.
_Avoid_: Path, flow

**Base Agent**:
The always-active customer support agent identity for a conversation. It has its own base prompt and may be extended with tools, RAG, and active Journey context.
_Avoid_: Default journey, fallback bot

**Conversation Closure**:
The explicit ending of a conversation by application code, runtime policy, or an allowed Tool. Conversation Closure is separate from Journey completion because the Base Agent itself is open-ended.
_Avoid_: Base Agent completion

**Conversation Lifecycle**:
The high-level state of a conversation: active, handoff, or closed.
_Avoid_: Many lifecycle states for v1

**Turn Interruption**:
The default behavior where a new user message can stop current assistant generation for an Agent. Turn Interruption is constrained during side-effect states and does not automatically cancel side-effect actions once started.
_Avoid_: Concurrent turn processing

**Aborted Message**:
A partially generated assistant message that was stopped by Turn Interruption and preserved in the Event Stream.
_Avoid_: Deleting interrupted generation

**Aborted Message Display**:
The UI behavior for Aborted Messages. The default ChatWidget collapses partial text into a compact interrupted state rather than rendering it as a normal assistant response.
_Avoid_: Showing partial aborted text as final answer

**Built-In Tool**:
A Tool provided by the SDK for common runtime behavior. Built-In Tools must still be explicitly exposed through Tool Scope before the model can use them.
_Avoid_: Always-enabled system tool

**Runtime Event**:
A typed append-only immutable event emitted by the Runtime SDK to describe conversation messages, Journey decisions, extraction proposals, state changes, tool execution, Knowledge Retrieval, UI prompts, errors, and Conversation Closure. Runtime Events have monotonically increasing per-conversation offsets.
_Avoid_: Internal runtime object

**Custom Runtime Event**:
An app-defined Runtime Event emitted programmatically through the SDK. Custom Runtime Events declare Zod payload schemas and follow the same append-only, offset, privacy, and Event Stream rules as built-in events. They are not visible to model context unless explicitly marked.
_Avoid_: Out-of-band UI signal

**Intermediate Message**:
A programmatically triggered assistant message emitted before the final response for a turn, typically for long-running tools, progress updates, or wait-time preambles.
_Avoid_: Accidental extra response

**Generated Preamble**:
A constrained model-generated Intermediate Message used to acknowledge longer waits or progress without making unsupported claims.
_Avoid_: Unbounded extra assistant turn

**Event Stream**:
The ordered stream of Runtime Events used by applications and UI components to observe and render a conversation.
_Avoid_: Direct orchestration state

**Runtime Snapshot**:
The saved current runtime state for a conversation, used as the primary hot path for processing the next turn.
_Avoid_: Replay-only runtime state

**Event Replay**:
The ability to rebuild or inspect conversation state from stored Runtime Events for debugging, evals, audits, or migrations.
_Avoid_: Snapshot-only opacity

**Widget**:
A typed runtime-declared UI interaction that applications render through their chosen UI layer. The Runtime SDK emits Widget prompts and validates Widget submissions; UI packages provide renderers.
_Avoid_: React-only component, untyped prompt

**Widget Definition**:
A shared typed declaration for a Widget's input and output schemas. Widget Definitions type both runtime prompts and UI renderers.
_Avoid_: Renderer-only props

**Built-In Widget**:
A generic Widget Definition provided by the SDK, such as text input, choice, confirmation, form, or date picker. Auth, payment, and provider-specific handoff widgets are app-defined.
_Avoid_: Built-in auth widget

**Renderer**:
A UI-layer implementation that displays a Widget prompt and produces a Widget submission. Renderers live outside Core.
_Avoid_: React component in core

**Appearance Configuration**:
A typed UI customization object for React components that controls theme variables, class names, element-level styles, and per-component overrides.
_Avoid_: Forking default components for styling

**Tailwind-Based UI**:
The React UI Package's styling approach. Components are authored with Tailwind conventions and distributed with precompiled CSS so consumers do not need to compile Cognidesk internals.
_Avoid_: Tailwind-free component library, consumer-required package scanning

**Element Key**:
A stable named UI part exposed for styling or replacement through Appearance Configuration.
_Avoid_: Private CSS selector

**Headless Component**:
A low-level React component or hook that provides behavior and accessibility without enforcing the default visual design.
_Avoid_: Only prebuilt widget

**React UI Package**:
The React-specific visual component package for Cognidesk. It provides default renderers and primitives for the React integration rather than framework-agnostic UI components.
_Avoid_: Framework-neutral UI package in v1

**Browser Client**:
The React package's typed client for submitting messages, submitting Widgets, consuming SSE Streaming, tracking offsets, and receiving Runtime Events.
_Avoid_: Untyped fetch calls in components

**ChatWidget**:
The prebuilt React conversation component exported by the React package. It uses the Browser Client, Event Stream, Renderer registry, and React UI Package defaults.
_Avoid_: UI-package-owned runtime component

**State Machine Journey**:
A deterministic Journey that guides the Base Agent through explicit conversational states, transitions, guards, actions, hierarchy, and parallel regions. It is defined in Cognidesk's SDK language rather than as a raw xstate machine.
_Avoid_: xstate path, guided flow

**Journey State**:
A named point or region in a State Machine Journey with its own instructions, expected inputs, allowed transitions, possible actions, and optional child states.
_Avoid_: Step, screen

**Final State**:
A terminal Journey State that marks successful or intentional completion of a State Machine Journey.
_Avoid_: Completion only through policy

**State Inheritance**:
The default behavior where child Journey States inherit parent instructions, Tool Scope, Knowledge Scope, guards, and shared Journey Context unless the definition restricts or overrides them.
_Avoid_: Isolated child state by default

**Journey Transition**:
A declared movement from one Journey State to another. A transition may depend on customer input, collected context, guard results, or tool outcomes.
_Avoid_: Next step

**Transition Priority**:
An optional ordering signal for Journey Transitions. When multiple transitions match, the runtime uses priority and declaration order deterministically.
_Avoid_: Ambiguous transition choice

**Journey Event**:
A typed event declared inside a State Machine Journey and validated with a Zod Schema. Journey Events provide the deterministic backbone for tool, widget, and action-driven transitions.
_Avoid_: Untyped event string

**External Event**:
A Journey Event emitted by application code or an adapter rather than generated directly from a user turn. Timers and background triggers are represented as External Events in v1, and matching/routing behavior is controlled by Event Routing Mode.
_Avoid_: Built-in timer scheduler

**Event Routing Mode**:
The routing setting that determines whether an event triggers no matching, active-Journey-only handling, full Journey matching, or targeted Journey/state handling. User messages default to full matching, while Widget submissions default to active-Journey-only routing.
_Avoid_: Every external event runs full matching

**Conversational Transition**:
A Journey Transition described by natural-language conditions and proposed through matching or Journey Proposals before Journey Policy validation.
_Avoid_: Model-direct state change

**Parallel Region**:
A part of a State Machine Journey where multiple child states may be active at the same time as logical parallel state. It does not imply unrestricted concurrent side effects.
_Avoid_: Parallel step, uncontrolled concurrent execution

**Response Coordinator**:
The runtime responsibility that combines active Base Agent, Journey, state, parallel-region, tool, and Knowledge context into a single coherent assistant response for a turn.
_Avoid_: Independent final responses from parallel states

**Instruction Stack**:
The deterministic layering of Base Agent, global, Journey, State, Tool, Knowledge, and channel instructions used by the Response Coordinator.
_Avoid_: Ad hoc prompt concatenation

**Action Scheduler**:
The deterministic runtime process that executes state actions for active Journey States, including logical parallel regions, in declaration order.
_Avoid_: Unordered action execution

**State Action**:
A deterministic action attached to a Journey State or Journey Transition. State Actions may run on entry, exit, or transition.
_Avoid_: Only model-driven action

**Action Failure Policy**:
The behavior used when a State Action or Tool fails. Developers can define explicit success, failure, and validation transitions; the default is to retry transient failures once when safe, avoid automatic retries for validation errors or uncertain side effects, and tell the user.
_Avoid_: Silent action failure

**Action Definition**:
A named, typed declaration for custom State Action behavior. Action Definitions are preferred over anonymous async callbacks so they can be validated, traced, and tested.
_Avoid_: Anonymous action callback

**Composable Journey Definition**:
A Journey definition that can be built incrementally across modules while preserving type safety and a single runtime meaning.
_Avoid_: One big config object

**Journey Fragment**:
A reusable definition-time statechart fragment that can be composed into a State Machine Journey. Journey Fragments are typed against required Journey Context, can declare required capabilities, and are not independently activated Journeys.
_Avoid_: Sub-journey

**Mutable Builder Reference**:
A definition-time object used to incrementally configure an Agent, Journey, State, Tool Scope, Knowledge Scope, or Widget usage. Mutable Builder References prioritize ergonomic authoring and are compiled into immutable runtime definitions.
_Avoid_: Pure immutable type-chain DSL

**Compiled Journey**:
An immutable runtime graph produced from a Composable Journey Definition after validation. The runtime executes Compiled Journeys, not mutable builders.
_Avoid_: Runtime builder

**Journey Graph**:
The inspectable graph representation of a Compiled Journey used for debugging, documentation, visualization, evals, and future Studio features.
_Avoid_: Opaque compiled machine

**Compile Validation**:
The validation step that turns mutable definitions into immutable runtime graphs and rejects invalid or unsafe configurations that TypeScript cannot fully prove.
_Avoid_: Runtime discovery of invalid definitions

**Type-Safe State Reference**:
A reference to a Journey State that TypeScript can verify at compile time. String references to unknown states are not valid Type-Safe State References.
_Avoid_: Untyped state id

**State Reference**:
The primary value used to wire State Machine Journey definitions after a Journey State has been created. State References are preferred over string IDs for transitions, initial state selection, and child relationships.
_Avoid_: String target

**State ID**:
A string literal identifier assigned when a Journey State is created. State IDs are used for runtime identity, persistence, events, visualization, and eval assertions, while State References are used for type-safe authoring links.
_Avoid_: Opaque-only state identity

**Typed Journey Context**:
The typed data available to Journey States, guards, actions, tools, and response generation. Journey definitions should expose strongly typed context rather than unstructured records.
_Avoid_: Record string unknown, shared bag

**Assign Action**:
A built-in State Action that updates Typed Journey Context only.
_Avoid_: Mutating Application Context through assign

**Collected Field**:
A Journey Context field that a Journey State needs and may obtain conversationally or through a Widget prompt. Collected Fields are required by default unless marked optional or conditionally required, and are automatically extracted from user messages by default.
_Avoid_: Passive context key

**Extraction Proposal**:
A staged set of model-extracted field values that has passed schema validation but has not yet been committed to Journey Context by Journey Policy.
_Avoid_: Immediate context mutation

**Context Path**:
A type-safe path to a field inside Typed Journey Context, including nested object fields. Arbitrary array index paths are avoided in v1.
_Avoid_: Top-level-only context key, arbitrary array index path

**List Collection**:
A typed collection helper for repeated Journey Context data such as passengers. It replaces arbitrary array index Context Paths.
_Avoid_: passengers[0] path collection

**Field Confirmation**:
A per-field or pre-action requirement that a collected or extracted value be confirmed before it is used for sensitive or irreversible behavior.
_Avoid_: Confirm every field globally

**Form Widget**:
A Built-In Widget that collects multiple Collected Fields through one UI prompt. The state still owns the data requirements.
_Avoid_: Separate form state concept

**Journey Context Schema**:
The required Zod object schema that defines the Typed Journey Context for a State Machine Journey.
_Avoid_: Implicit context shape

**Application Context**:
The app-defined typed data available to the Runtime SDK, such as identity, tenant, auth state, locale, feature flags, or request metadata. Cognidesk does not define domain-specific Customer or Tenant models.
_Avoid_: Built-in customer model

**Conversation Context**:
The durable portion of Application Context associated with a conversation.
_Avoid_: Persisting every turn field

**Turn Context**:
The per-request portion of Application Context supplied for a specific user message, widget submission, resume, or closure operation.
_Avoid_: Durable auth snapshot by default

**Privacy Hook**:
An app-defined function that redacts or filters data before persistence, model input, traces, logs, or external adapter calls.
_Avoid_: Hardcoded privacy rules

**Observability Hook**:
A deprecated app-defined function concept formerly used to receive Cognidesk diagnostic events before OpenTelemetry became the default telemetry model.
_Avoid_: New observability extension point

**Trace Event**:
A deprecated provider-neutral diagnostic event concept formerly used to describe runtime execution before OpenTelemetry became the default telemetry model.
_Avoid_: New tracing model

**Telemetry**:
The SDK's default observability signal for runtime execution, covering traces and metrics while leaving log collection to the hosting application or deployment platform.
_Avoid_: Logs-only diagnostics

**Telemetry Content Mode**:
An application-selected telemetry setting that controls whether spans include redacted or full runtime content such as messages, prompts, tool inputs, tool outputs, Knowledge snippets, and model responses. Full mode bypasses telemetry redaction only and must not bypass privacy rules for persistence, model input, logs, or external adapter calls.
_Avoid_: Always-full traces

**Telemetry Context**:
An SDK-provided helper available during runtime execution, especially inside Tool Execution Context, for adding nested spans, span attributes, span events, and exceptions to the active telemetry trace.
_Avoid_: Tool authors manually wiring trace parents

**Telemetry Trace ID**:
The OpenTelemetry trace identifier associated with runtime execution and persisted events when available.
_Avoid_: App-supplied traceId

**Token Usage**:
A normalized record of model token usage emitted by the Runtime SDK when providers supply it. Cost calculation is provider-specific metadata rather than a core guarantee.
_Avoid_: Hardcoded pricing table

**Zod Schema**:
The runtime validation and TypeScript inference mechanism used for Journey context, tool input/output, widget payloads, model outputs, and external data boundaries.
_Avoid_: Schema adapter, schema-agnostic validator

**Structured Model Output**:
Model output that must conform to a Zod Schema before the Runtime SDK uses it for matching, policy proposals, tool decisions, or other structured behavior.
_Avoid_: Trusting raw model JSON

**Tool**:
A named capability the Runtime SDK can execute on behalf of the Base Agent or an Active Journey. Every Tool declares Zod input and output schemas.
_Avoid_: Function without schema, untyped action

**Tool Scope**:
The visibility boundary that determines when a Tool may be used. Tools may be scoped to the Base Agent, a Journey, or a Journey State.
_Avoid_: Global tool list only

**Scope Restriction**:
A state-level rule that narrows inherited Tool Scope or Knowledge Scope using allow-list or block-list semantics.
_Avoid_: Inheritance with no narrowing

**Action Tool**:
A Tool executed deterministically by a Journey State action. Action Tools are used for required workflow behavior and side effects.
_Avoid_: Model-chosen workflow tool

**Side-Effect Tool**:
A Tool that changes external or durable state. Side-Effect Tools require an explicit confirmation policy when executed as Action Tools unless the developer deliberately overrides that requirement.
_Avoid_: Unconfirmed irreversible action

**Idempotency Key**:
A Tool execution key that lets the runtime or external system safely recognize repeated attempts of the same side-effect operation.
_Avoid_: Blind side-effect retry

**Assistant Tool**:
A Tool exposed to the Base Agent or Active Journey for model-directed use within the current Tool Scope.
_Avoid_: Deterministic state action

**Knowledge**:
A first-class grounding capability that automatically retrieves and supplies trusted context for the Base Agent or an Active Journey. Knowledge is distinct from Tools because it shapes answer grounding, citations, and source events rather than performing actions.
_Avoid_: RAG tool, search function

**Knowledge Source**:
A uniform SDK abstraction for retrieving Knowledge from documents, vector stores, APIs, external knowledge bases, or other trusted systems.
_Avoid_: Document store only

**Knowledge Scope**:
The visibility boundary that determines when a Knowledge Source contributes grounding context. Knowledge may be scoped to the Base Agent, a Journey, or a Journey State.
_Avoid_: Global RAG only

**Knowledge Item**:
A retrieved Knowledge result with a standard envelope and typed metadata. The common envelope supports ranking, citations, UI source rendering, and observability while metadata preserves source-specific structure.
_Avoid_: Raw chunk

**Compacted Knowledge Reference**:
A structured summary and source reference for older Knowledge Items used in compacted prompt context. Full Knowledge can be re-retrieved from Knowledge Sources when needed.
_Avoid_: Keeping every old retrieved chunk in prompt context

**Citation Span**:
A best-effort source-linked message segment in a generated assistant message that identifies which Knowledge Items support that part of the answer. Citation Spans are post-processed after answer generation only when Knowledge is used, validated, and allow UI renderers to underline supported text and show sources on hover when available.
_Avoid_: Source list only

**Message Segment**:
A structured part of an assistant message used for rich rendering such as Citation Spans. Messages also keep plain text for transcripts, search, and simple clients. Streaming sends plain text deltas first and finalizes segments on completion.
_Avoid_: Structured-only message

**Support Reference**:
A typed reference from a Message Segment to supporting evidence such as a Knowledge Item or, in future, a Tool result. v1 implements Knowledge-backed Support References first.
_Avoid_: Knowledge-only segment model

**Post-Processing Configuration**:
An Agent-level setting that controls optional response post-processing such as Message Segment and Citation Span generation.
_Avoid_: Mandatory citation post-processing

**Knowledge Retrieval**:
The automatic collection of Knowledge Items from active Knowledge Sources after Journey Activation has been resolved for the turn.
_Avoid_: Pre-routing document search

**Delegation Journey**:
A Journey that hands execution to a specialist agent with its own instructions and capabilities until that specialist exits or returns control.
_Avoid_: Sub-agent path, skill path

**Specialist Agent**:
An agent-like execution unit inside a Delegation Journey. It has its own goal, instructions, tools, and Knowledge, but it does not own nested Journeys.
_Avoid_: Recursive agent, skill, context helper

**Delegation Return**:
The explicit handoff back from a Specialist Agent to the Base Agent, including the relevant conversation summary and state.
_Avoid_: Silent fallback

**Completion Policy**:
A declared set of signals that determine when a Journey or Specialist Agent has fulfilled its goal. Completion signals may come from tools, user confirmation, model judgment, or deterministic SDK checks.
_Avoid_: Implicit done state

**Journey Activation**:
The act of selecting a Journey whose context, state, tools, and constraints apply to the Base Agent. Journey Activation does not replace the Base Agent.
_Avoid_: Transforming the agent

**Journey Entry**:
The defined way a State Machine Journey becomes active. A Journey normally enters through its initial state and may skip forward only when Journey Policy allows it.
_Avoid_: Arbitrary state entry

**Alternate Entry**:
An explicitly declared non-default Journey Entry for cases where a Journey may begin at a later state when its conditions and context requirements are satisfied.
_Avoid_: Hidden jump into any state

**Activation Metadata**:
The shared Journey fields used for candidate retrieval, matching, and Journey Policy decisions. Activation Metadata includes conditions, examples, candidate triggers, priority, stickiness, and guards.
_Avoid_: Routing config

**Candidate Filter**:
A cheap deterministic non-LLM filter applied before Embedding Journey Retrieval to reduce the Journey pool using tags, feature flags, tenant data, channel, or other Application Context. Full Journey Guards run after matching and during continuation.
_Avoid_: Embedding search over every journey

**Journey Example**:
An example customer utterance that helps Journey Candidate Retrieval and matching understand when a Journey applies.
_Avoid_: Comment-only example

**Active Journey**:
The Journey currently applied to the Base Agent for a conversation. An Active Journey may end or be replaced when the conversation context points elsewhere.
_Avoid_: Sub journey, active path

**Journey Summary**:
A concise summary of a completed or exited Journey that can inform future Base Agent responses without keeping the full Journey Context active.
_Avoid_: Always-active completed context

**Journey Context Viewer Tool**:
A Built-In Tool that lets the Base Agent retrieve exact persisted Journey Context when developer policy explicitly exposes it.
_Avoid_: Automatic full context exposure

**Context Reuse Policy**:
A Journey-level policy that defines whether previous Journey Context fields may be reused when a Journey activates again. Reuse is not automatic and requires user intent plus developer permission.
_Avoid_: Stale context reuse by default

**Journey Policy**:
A deterministic validation layer that decides whether proposed Journey progress, step skipping, Journey exit, clarification, or Journey switching is allowed. It validates proposals against Journey metadata and collected context, biases ambiguous turns toward the Active Journey instead of oscillating between Journeys, and gives Delegation Journeys high default stickiness while preserving explicit breakout.
_Avoid_: LLM-only routing, freeform step jumping

**Visit Requirement**:
A state-level rule that prevents Journey Policy from skipping a Journey State. Visit Requirements are used for states with mandatory confirmations, side effects, legal text, widgets, or other required user-visible behavior, and may be inferred during Compile Validation or declared explicitly.
_Avoid_: Non-skippable step

**Journey Condition**:
A natural-language description of when a Journey should be activated. It is used by the matcher to interpret the customer’s intent.
_Avoid_: Guard, if-statement

**Journey Guard**:
A deterministic code predicate that must pass before a Journey can be activated or continued. Guards represent runtime facts such as authentication, channel, tenant eligibility, or feature flags.
_Avoid_: Condition, prompt rule

**Guard Result**:
A structured allow or deny result returned by a Journey Guard or transition guard. Guard Results may include denial reasons and remediation instructions, including typed Widget prompts.
_Avoid_: Boolean-only guard

**Journey Candidate Retrieval**:
A pre-matching step that narrows the available Journeys to a small relevant candidate set before LLM-based matching. It prevents every Journey definition from being sent to the matcher on every turn and always includes the Active Journey unless it is hard-disabled.
_Avoid_: Sending all journeys to the model

**Journey Index**:
A retrieval abstraction for finding relevant Journey definitions before matching. It indexes Journey metadata rather than customer support Knowledge.
_Avoid_: Knowledge Source for routing

**Generated Journey Index**:
A JSON Journey Index artifact generated from TypeScript Journey definitions and their Activation Metadata. It may be committed for deterministic production startup and checked in CI for freshness. Embeddings are precomputed and regenerated when the Journey definition hash changes. Development may regenerate incompatible indexes; production fails fast; CI checks freshness.
_Avoid_: Hand-authored journey index

**Embedding Journey Retrieval**:
The required v1 retrieval strategy for Journey Candidate Retrieval. It uses embeddings over the Generated Journey Index rather than lexical-only scoring, and runtime embedding model compatibility must be validated against index metadata.
_Avoid_: Simple keyword scoring as the only v1 retrieval

**Routing Projection**:
The routing-relevant representation of a Journey used for Journey Index generation, embedding, hashing, and candidate retrieval. It includes Activation Metadata and optional state summaries, but excludes implementation details that do not affect Journey matching.
_Avoid_: Full source hash

**State Summary**:
An optional concise routing description for a Journey State. If omitted, the Routing Projection may fall back to state instructions.
_Avoid_: Full state prompt in index

**Journey Candidate**:
A Journey proposed by candidate retrieval or matching as potentially relevant to the current turn. Candidates are ranked before Journey Policy selects the final outcome.
_Avoid_: Winning journey

**Always Include**:
A Journey setting that adds the Journey to the candidate set on every eligible turn before matching. It bypasses embedding topK but not hard Candidate Filters.
_Avoid_: Always match

**Candidate Trigger**:
A deterministic per-Journey function that adds the Journey to the candidate set when it returns true. Candidate Triggers bypass embedding topK after hard Candidate Filters, but do not activate Journeys directly.
_Avoid_: Matcher

**Matcher**:
The ranking stage that evaluates Journey Candidates against the current turn and conversation context using Routing Projections and active-state context. The Matcher should use full conversation context by default, compacting to summaries only when necessary.
_Avoid_: Candidate trigger

**Conversation Compaction**:
The automatic, evented process of replacing older conversation-derived prompt context with summaries when full conversation context no longer fits practical model or runtime limits. Conversation Compaction normally runs after a turn completes, may run before a turn if required to avoid context-limit failure, is observable through Runtime Events but not prominently user-visible by default, preserves original Runtime Events, and does not compact stable source-of-truth layers such as definitions, schemas, Application Context, or the current Runtime Snapshot.
_Avoid_: Summary-first context

**Stable Prompt Layer**:
Prompt context rebuilt from source-of-truth runtime inputs each turn, such as Base Agent instructions, active Journey definitions, schemas, Application Context, and current Runtime Snapshot. Stable Prompt Layers are not compacted.
_Avoid_: Summarized definitions

**Compaction Summary**:
A structured Zod-validated summary produced by Conversation Compaction for future prompt construction. Agents may customize the Compaction Summary schema and compaction instructions. Compaction Summaries include schema version metadata and source event ranges, are recorded in Runtime Events, and are stored in Runtime Snapshots for fast prompt construction.
_Avoid_: Prose-only memory blob

**Compacted Tool Result**:
A structured summary and reference for an older Tool result used in compacted prompt context. The full Tool result remains available in stored Runtime Events.
_Avoid_: Keeping every old tool payload in prompt context

**Role Context Window**:
The context selection policy for a Model Role. Matcher and response generation use full conversation context by default, while extraction, citation post-processing, and embedding query generation use scoped context.
_Avoid_: One context window for every model call

**Journey Proposal**:
The Matcher's suggested action for the Active Journey, such as continue, clarify, exit, switch, or target a different state. Journey Proposals must be validated by Journey Policy before execution.
_Avoid_: Direct state change

## Example Dialogue

Developer: "Is Cognidesk just where I define the chatbot?"

Domain expert: "No. Cognidesk is a Runtime SDK. You define the agent declaratively, and the SDK executes the conversation."

Developer: "So my app provides the model, storage, retriever, tools, and UI?"

Domain expert: "Yes. The SDK owns the runtime loop and extension contracts; the app supplies infrastructure and business capabilities."

Developer: "Can my app pass Vercel AI SDK model handles to Cognidesk?"

Domain expert: "Yes, at the `@cognidesk/model` boundary. Core still receives Cognidesk Model Adapters rather than raw provider SDK objects."

Developer: "Do I need to use Cognidesk-specific OpenAI or OpenRouter factory functions?"

Domain expert: "No. Applications define models in the AI SDK style and Cognidesk wraps those model definitions."

Developer: "Do I have to repeat the provider and model id when passing an AI SDK model?"

Domain expert: "Normally no. Cognidesk uses Model Metadata Inference and only needs overrides for ambiguous model definitions."

Developer: "Does the Runtime SDK require a specific web server?"

Domain expert: "No. Cognidesk is transport-neutral, but it can provide Built-In Adapters for common integrations."

Developer: "Can Cognidesk include telecom-specific A1 behavior from Daybreaker?"

Domain expert: "No. Daybreaker can inspire runtime patterns, but Cognidesk must not contain A1-specific domain behavior."

Developer: "How does Cognidesk control model cost without quality presets?"

Domain expert: "Applications configure Model Roles explicitly and documentation can recommend measured defaults."

Developer: "Can each Journey choose its own response model?"

Domain expert: "No. An Agent has one Agent Model Set because prompts are coupled to the configured models."

Developer: "Does my app need to wrap every role model manually?"

Domain expert: "No. It can use an AI SDK-Style Model Set Definition and let Cognidesk create the Agent Model Set."

Developer: "Where do model-specific prompts live?"

Domain expert: "In Model Prompt Profiles. The SDK owns defaults for each Model Role, and an application can override them deliberately at the Agent Model Set boundary."

Developer: "Does `gpt-5.5` use different prompts when called through OpenRouter instead of OpenAI?"

Domain expert: "No. Provider routing changes execution, not logical model identity. The same logical model receives the same default Model Prompt Profile."

Developer: "Should Cognidesk ship separate public OpenAI and OpenRouter model packages?"

Domain expert: "No. Applications choose providers through Vercel AI SDK and pass AI SDK Model Handles through the single Cognidesk model entrypoint."

Developer: "What key does the SDK use to find those default prompts?"

Domain expert: "A Logical Model Slug. Provider-specific model ids are normalized before prompt lookup."

Developer: "Can an app add prompts for a model Cognidesk does not know yet?"

Domain expert: "Yes, through Model Profile Registration. A prompt folder alone is not enough to create a supported logical model."

Developer: "What if the configured model is unknown?"

Domain expert: "Use the Default Prompt Profile rather than borrowing prompts from a known logical model."

Developer: "Where do SDK-owned prompt files live?"

Domain expert: "In the Prompt Asset Store, including a generic `default` profile and built-in logical model profiles."

Developer: "Does every model prompt profile need an embedding prompt?"

Domain expert: "No. Built-in Model Prompt Profiles cover promptable Prompt Tasks; Journey Index embeddings do not use chat prompts."

Developer: "Can the matcher just be told in the prompt to return JSON?"

Domain expert: "No. Machine-read roles use Structured Model Output; prompt text reinforces the behavior, but the Runtime SDK validates the shape."

Developer: "Is there only one matcher prompt?"

Domain expert: "No. The matcher Model Role can have multiple Prompt Tasks when the runtime job and Structured Model Output differ."

Developer: "Do all prompt files get the same template fields?"

Domain expert: "No. Prompt Template Fields are defined per Prompt Profile Role because response generation, matching, extraction, and compaction need different runtime inputs."

Developer: "When are prompt templates validated?"

Domain expert: "During model-set creation. Prompt Template Validation checks syntax, role names, model slugs, and per-role field usage before traffic starts."

Developer: "Should every prompt include few-shot examples?"

Domain expert: "No. Few-shot examples depend on the Prompt Research Basis for that logical model and task, and must be justified by prompting guidance or eval results."

Developer: "Where is the research basis for a built-in profile recorded?"

Domain expert: "In Prompt Profile Metadata bundled with the Built-In Logical Model Profile."

Developer: "Can prompt templates receive raw runtime data so models can reason over it?"

Domain expert: "They receive Model-Visible Prompt Payloads: rich structured data that has already passed model-visibility and privacy boundaries."

Developer: "Does a markdown prompt replace the whole system message?"

Domain expert: "No. It renders the Role Instruction Layer; runtime-owned payload assembly and Structured Model Output remain separate responsibilities."

Developer: "If my app provides `matcher.md`, is it appended to the SDK matcher prompt?"

Domain expert: "No. Prompt Overrides replace one role's Role Instruction Layer so instruction priority stays clear."

Developer: "Where are prompt overrides declared?"

Domain expert: "At the Agent Model Set boundary in a Prompt Override Registry, keyed by Logical Model Slug and Prompt Profile Role."

Developer: "Can the Flight Service Demo fall back to mock models when provider credentials are missing?"

Domain expert: "No. The demo runtime should fail startup without real model-provider configuration; mock models belong in explicit tests, not the running demo."

Developer: "Does v1 need a native Cognidesk Knowledge database package?"

Domain expert: "No. Cognidesk owns the Knowledge Source contract; concrete vector stores and demo document ingestion can remain app-owned in v1."

Developer: "Is the Test Harness mainly for deterministic CI?"

Domain expert: "No. The Test Harness is primarily for development and real-model evaluation."

Developer: "How do customers define harness runs?"

Domain expert: "They write Eval Scenarios and run them with the Eval CLI."

Developer: "Are evals limited to fixed assertions?"

Domain expert: "No. Eval Scenarios can use assertions, recording, an LLM Judge, and a Simulated User."

Developer: "Does Core know about a specific human support provider?"

Domain expert: "No. Core emits an External Handoff; Handoff Adapters integrate providers."

Developer: "Is handoff the same as closing a conversation?"

Domain expert: "No. External Handoff pauses assistant handling and may later use Conversation Resume."

Developer: "How many lifecycle states does v1 need?"

Domain expert: "Three: active, handoff, and closed."

Developer: "Can a user message interrupt generation?"

Domain expert: "Yes, if enabled. Turn Interruption stops generation and safe work, while side effects are not blindly canceled."

Developer: "Does interrupted output disappear from history?"

Domain expert: "No. It is preserved as an Aborted Message in the Event Stream."

Developer: "Is OpenRouter just an OpenAI adapter option?"

Domain expert: "No. OpenRouter is a separate Cognidesk Model Adapter, even if it shares implementation internally."

Developer: "Should tests use an in-memory storage implementation?"

Domain expert: "No. Tests should use a real Storage Adapter, starting with SQLite."

Developer: "Does Core import the SQLite adapter?"

Domain expert: "No. A Starter Application wires Core to SQLite; Core only defines the storage contract."

Developer: "Is the first starter a Next.js app?"

Domain expert: "No. The first starter is a Demo Server plus Demo React App."

Developer: "What sample domain should the starter use?"

Domain expert: "Use a Flight Service Demo with booking, ticket status, and flight information workflows."

Developer: "Which demo journeys prove the SDK?"

Domain expert: "Start with Book Flight, Ticket Status, and Travel Disruption Specialist."

Developer: "Where should mocked flight data live?"

Domain expert: "Demo Data belongs inside the demo app, not in a reusable package."

Developer: "Are packages developed in separate repositories?"

Domain expert: "No. v1 uses a pnpm/Turborepo Workspace."

Developer: "Does the default client need WebSockets?"

Domain expert: "No. The default streaming model uses POST requests for submissions and SSE Streaming for updates."

Developer: "Is SSE part of Core?"

Domain expert: "No. SSE belongs to the HTTP Adapter; Core remains transport-neutral."

Developer: "Does the HTTP Adapter require Express?"

Domain expert: "No. It should expose an HTTP Handler with thin framework wrappers."

Developer: "Should I call a deterministic route a path?"

Domain expert: "No. Publicly it is a Journey. The implementation may use xstate, but SDK users model a support Journey."

Developer: "Does the Base Agent complete?"

Domain expert: "No. The Base Agent is open-ended. The conversation can be closed explicitly through Conversation Closure."

Developer: "Can the assistant end a conversation by default?"

Domain expert: "No. Conversation Closure can be provided as a Built-In Tool, but it must be explicitly exposed."

Developer: "Should the UI inspect internal Journey objects?"

Domain expert: "No. UI integrations consume the Event Stream."

Developer: "Can apps emit their own runtime events?"

Domain expert: "Yes. Custom Runtime Events are emitted through the SDK and travel through the Event Stream."

Developer: "Does the runtime rebuild state from scratch every turn?"

Domain expert: "No. Runtime Snapshots are the primary hot path, while Event Replay supports debugging and evals."

Developer: "Can the assistant say something before a long tool finishes?"

Domain expert: "Yes. The runtime may emit an Intermediate Message when a Journey State or Tool declares it."

Developer: "Can a wait-time preamble be model-generated?"

Domain expert: "Yes, if it is a constrained Generated Preamble."

Developer: "Are Widgets only React components?"

Domain expert: "No. A Widget is a runtime contract. React components are renderers for Widget prompts."

Developer: "Should runtime and UI define the same custom Widget twice?"

Domain expert: "No. A shared Widget Definition should type both runtime usage and UI rendering."

Developer: "Does Cognidesk provide a login widget?"

Domain expert: "No. Built-In Widgets are generic; auth widgets are app-defined."

Developer: "Can Core export React components?"

Domain expert: "No. Core exports Widget Definitions and Runtime Events; Renderers live in React packages."

Developer: "How should teams customize default React components?"

Domain expert: "Use Appearance Configuration and stable Element Keys first; drop to Headless Components when full control is needed."

Developer: "Do consumers need to configure Tailwind to scan Cognidesk source?"

Domain expert: "No. The UI is Tailwind-based but ships precompiled CSS."

Developer: "Is the UI package framework-neutral?"

Domain expert: "No. The v1 UI package is React-specific; framework neutrality comes from the Event Stream and Widget Definitions."

Developer: "Should React components call fetch directly?"

Domain expert: "No. They should use the Browser Client exported by the React package."

Developer: "Which package owns ChatWidget?"

Domain expert: "The React package owns ChatWidget; the React UI Package provides visual primitives and default renderers."

Developer: "Is the base support agent replaced when a customer enters a cancellation journey?"

Domain expert: "No. The Base Agent remains active, but the Journey contributes context and constraints for that part of the conversation."

Developer: "Does a Specialist Agent only provide advice to the Base Agent?"

Domain expert: "No. In a Delegation Journey, the Specialist Agent takes over execution until it returns control."

Developer: "Can a Specialist Agent define its own sub-journeys?"

Domain expert: "No. A Specialist Agent is the execution unit of a Delegation Journey, not a recursive agent with nested Journeys."

Developer: "How does a Delegation Journey know it is finished?"

Domain expert: "Its Completion Policy defines the allowed completion signals."

Developer: "Can the customer leave the current journey?"

Domain expert: "Yes. A Journey is active only while it fits the conversation context. The Base Agent can end it or activate another Journey."

Developer: "Can Journey Activation jump into any state?"

Domain expert: "No. It uses Journey Entry semantics, with policy-validated skipping or explicit Alternate Entry."

Developer: "Does completed Journey Context stay in the active prompt forever?"

Domain expert: "No. Full context is persisted for audit, while a Journey Summary can remain active."

Developer: "Can the Base Agent inspect exact old Journey Context?"

Domain expert: "Only through an explicitly exposed Journey Context Viewer Tool."

Developer: "Can a repeated Journey use old context automatically?"

Domain expert: "No. Context Reuse Policy must allow it, and the user must ask for reuse."

Developer: "Do State Machine Journeys and Delegation Journeys route differently?"

Domain expert: "No. They use shared Activation Metadata, even though their execution semantics are different."

Developer: "Should embeddings search every Journey?"

Domain expert: "No. Candidate Filters reduce the pool before Embedding Journey Retrieval."

Developer: "Are example utterances just documentation?"

Domain expert: "No. Journey Examples are part of Activation Metadata and the Routing Projection."

Developer: "Can the model skip straight to the final cancellation step?"

Domain expert: "Only if the Journey Policy allows it. Required steps and tool input contracts still have to be satisfied."

Developer: "Is a State Machine Journey just a list of steps?"

Domain expert: "No. It is a state-based definition with transitions, guards, and actions, expressed in Cognidesk's SDK language."

Developer: "Are transitions only natural-language?"

Domain expert: "No. State Machine Journeys support typed Journey Events and Conversational Transitions."

Developer: "Does v1 need built-in timers?"

Domain expert: "No. Timer-like behavior can be modeled through External Events."

Developer: "Do external events always run Journey matching?"

Domain expert: "No. Event Routing Mode controls matching and delivery behavior."

Developer: "What if multiple transitions match?"

Domain expert: "Transition Priority and declaration order resolve matches deterministically."

Developer: "Do child states start from an empty capability set?"

Domain expert: "No. State Inheritance applies by default."

Developer: "How does a State Machine Journey end normally?"

Domain expert: "It can enter a Final State, and Completion Policy can also define broader completion behavior."

Developer: "Does the whole Journey have to be declared in one object?"

Domain expert: "No. A Composable Journey Definition can be assembled across modules while still producing one coherent Journey for the runtime."

Developer: "Can reusable state groups be activated independently?"

Domain expert: "No. Journey Fragments are definition-time composition inside a Journey."

Developer: "Can parallel states each send their own final answer?"

Domain expert: "No. The Response Coordinator produces one coherent final response."

Developer: "How are Base Agent and Journey prompts combined?"

Domain expert: "The Response Coordinator builds an Instruction Stack with deterministic precedence."

Developer: "What happens when multiple active states have actions?"

Domain expert: "The Action Scheduler runs them deterministically in declaration order."

Developer: "Can states have entry and exit behavior?"

Domain expert: "Yes. State Actions may run on entry, exit, or transition."

Developer: "What happens if a Tool fails?"

Domain expert: "Action Failure Policy applies. By default, the runtime retries when safe and informs the user."

Developer: "Can a state action be an anonymous async function?"

Domain expert: "No. Custom behavior should be declared as a named, typed Action Definition."

Developer: "Should every builder method return a new type-level state?"

Domain expert: "No. Cognidesk uses Mutable Builder References with explicit schemas for type safety at important boundaries."

Developer: "Are type checks enough for unsafe journey definitions?"

Domain expert: "No. Compile Validation always enforces runtime graph and safety rules."

Developer: "Can I set the initial state to a string before the state exists?"

Domain expert: "No. Initial state selection should use a Type-Safe State Reference after the state has been defined."

Developer: "Can developers inspect the compiled statechart?"

Domain expert: "Yes. A Compiled Journey exposes a Journey Graph."

Developer: "Should transitions target state IDs?"

Domain expert: "No. Transitions should target State References. Typed lookup by ID can exist as a convenience for modular definitions."

Developer: "Can tools and states use an untyped shared context bag?"

Domain expert: "No. Journey authoring should use Typed Journey Context so missing data is caught during type checking where possible."

Developer: "Can assign change auth or tenant data?"

Domain expert: "No. Assign Action updates Journey Context only."

Developer: "Can a State Machine Journey omit its context schema?"

Domain expert: "No. It declares a Journey Context Schema so states, guards, actions, tools, and widgets can be typed."

Developer: "Does collecting a field only document that it exists?"

Domain expert: "No. A Collected Field declares a state input need and how the runtime may obtain it."

Developer: "Can a state collect nested passenger data?"

Domain expert: "Yes. Collected Fields use type-safe Context Paths."

Developer: "Does extraction write directly into Journey Context?"

Domain expert: "No. Extraction creates an Extraction Proposal that Journey Policy accepts, clarifies, or rejects."

Developer: "Should states collect passengers[0].firstName?"

Domain expert: "No. Use List Collection for repeated data."

Developer: "Must every extracted field be confirmed?"

Domain expert: "No. Field Confirmation is configurable and should be required for sensitive or irreversible behavior."

Developer: "Is a form a separate state type?"

Domain expert: "No. A Form Widget collects fields declared by a Journey State."

Developer: "Does Cognidesk have a built-in Customer model?"

Domain expert: "No. Identity and tenant data belong in Application Context."

Developer: "Is context fixed when a conversation starts?"

Domain expert: "No. Conversation Context is durable, while Turn Context can update per request."

Developer: "Does Cognidesk hardcode privacy rules?"

Domain expert: "No. Cognidesk provides Privacy Hooks so applications define redaction and filtering policy."

Developer: "Does Cognidesk use OpenTelemetry?"

Domain expert: "Yes. OpenTelemetry is the default SDK telemetry model for traces and metrics, while Observability Hooks can still receive Cognidesk diagnostic events."

Developer: "Does Core calculate exact model cost?"

Domain expert: "No. Core normalizes Token Usage; provider adapters may include cost metadata."

Developer: "Can projects use any schema library?"

Domain expert: "No. Cognidesk uses Zod Schema definitions as the standard validation and inference mechanism."

Developer: "Can the runtime trust matcher JSON directly?"

Domain expert: "No. Matcher JSON is Structured Model Output and must be Zod-validated with retry or fallback behavior."

Developer: "Can a Tool just be an async function?"

Domain expert: "No. A Tool is an async capability plus Zod input and output schemas."

Developer: "Are all Tools always available?"

Domain expert: "No. Tool Scope controls whether a Tool is available to the Base Agent, an Active Journey, or a specific Journey State."

Developer: "Can a child state remove inherited capabilities?"

Domain expert: "Yes. Scope Restriction can allow only specific capabilities or exclude inherited ones."

Developer: "Can the model directly execute a contract cancellation tool?"

Domain expert: "Only if it is exposed as an Assistant Tool. Required workflow side effects should usually be Action Tools executed by Journey State actions."

Developer: "Can a booking action run without confirmation?"

Domain expert: "Not by default. A Side-Effect Tool requires explicit confirmation policy before execution."

Developer: "Can side-effect tools be retried safely?"

Domain expert: "Only when the Tool provides an Idempotency Key or is otherwise marked safe to retry."

Developer: "Is document retrieval just another Tool?"

Domain expert: "No. Retrieval-backed grounding is Knowledge. Tools perform actions; Knowledge grounds responses."

Developer: "Does Knowledge only mean uploaded documents?"

Domain expert: "No. A Knowledge Source can retrieve from documents, vector stores, APIs, or external knowledge bases through the same SDK layer."

Developer: "Can each Knowledge Source return arbitrary data?"

Domain expert: "No. It returns Knowledge Items with a common envelope and typed metadata."

Developer: "Is showing a list of sources enough?"

Domain expert: "No. Generated answers should include Citation Spans that connect answer text to supporting Knowledge Items."

Developer: "Must every Agent pay for citation post-processing?"

Domain expert: "No. Post-Processing Configuration can disable optional segment and citation generation."

Developer: "Does the runtime retrieve support Knowledge before deciding the active Journey?"

Domain expert: "No. Journey Candidate Retrieval narrows Journeys before matching; Knowledge Retrieval gathers response grounding after Journey Activation."

Developer: "Can routing reuse the same retrieval source as support documents?"

Domain expert: "No. Routing uses the Journey Index. Support grounding uses Knowledge Sources."

Developer: "Should developers manually write the JSON Journey Index?"

Domain expert: "No. The Generated Journey Index is produced from Journey definitions."

Developer: "Can v1 route Journeys with keyword scoring only?"

Domain expert: "No. Embedding Journey Retrieval is required from day one."

Developer: "Should changing tool implementation regenerate Journey embeddings?"

Domain expert: "No. Embeddings are tied to the Routing Projection, not unrelated implementation details."

Developer: "What if the customer is vague for several turns?"

Domain expert: "The Base Agent should clarify within the Active Journey while that Journey still plausibly fits, rather than switching repeatedly."

Developer: "Can the runtime skip a state whose data is already known?"

Domain expert: "Yes, unless the state has a Visit Requirement or unsafe side effects."

Developer: "Should login status be part of the condition text?"

Domain expert: "No. The Journey Condition describes customer intent. Login status belongs in a Journey Guard."

Developer: "Can a guard explain why it blocked activation?"

Domain expert: "Yes. A Guard Result can include a denial reason and remediation."

Developer: "Should the matcher see every Journey in a large installation?"

Domain expert: "No. Journey Candidate Retrieval should narrow the list first, then the matcher ranks the relevant candidates."

Developer: "Can a Journey provide code that forces it into the candidate set?"

Domain expert: "Yes. Use a Candidate Trigger or Always Include. The Matcher still ranks candidates, and Journey Policy still decides activation."

Developer: "Can the Matcher directly move the active state?"

Domain expert: "No. The Matcher emits a Journey Proposal; Journey Policy validates it before state changes."
