import type {
  AnyCustomRuntimeEvent,
  AnyTool,
  KnowledgeSource,
  ObjectSchema,
  WidgetDefinition,
} from "../types.js";
import { CapabilityScope } from "./capability-scope.js";
import type {
  AgentOptions,
  CompiledAgent,
  DelegationJourneyOptions,
  StateMachineJourneyOptions,
  VoiceProfileOptions,
} from "./compiled-types.js";
import {
  DelegationJourneyBuilder,
  StateMachineJourneyBuilder,
} from "./journey-builders.js";
import {
  assertUniqueIds,
  assertUniqueKinds,
  assertUniqueNames,
  pushUnique,
} from "./utils.js";

export class AgentBuilder<const TId extends string> {
  readonly tools = new CapabilityScope<AnyTool>();
  readonly knowledge = new CapabilityScope<KnowledgeSource>();
  readonly customEvents = new CapabilityScope<AnyCustomRuntimeEvent>();
  readonly widgets: WidgetDefinition[] = [];
  private voiceProfile?: VoiceProfileOptions;
  private readonly journeys: Array<StateMachineJourneyBuilder<string, ObjectSchema> | DelegationJourneyBuilder<string>> = [];

  constructor(readonly id: TId, readonly options: AgentOptions) {}

  stateMachineJourney<const TJourneyId extends string, TContextSchema extends ObjectSchema>(
    id: TJourneyId,
    options: StateMachineJourneyOptions<TContextSchema>,
  ) {
    const journey = new StateMachineJourneyBuilder(id, options);
    this.journeys.push(journey as unknown as StateMachineJourneyBuilder<string, ObjectSchema>);
    return journey;
  }

  delegationJourney<const TJourneyId extends string>(
    id: TJourneyId,
    options: DelegationJourneyOptions,
  ) {
    const journey = new DelegationJourneyBuilder(id, options);
    this.journeys.push(journey);
    return journey;
  }

  registerWidget(widgetDefinition: WidgetDefinition) {
    pushUnique(this.widgets, widgetDefinition);
    return this;
  }

  voice(options: VoiceProfileOptions) {
    this.voiceProfile = options;
    return this;
  }

  compile(): CompiledAgent {
    const compiledJourneys = this.journeys.map((journey) => journey.compile());
    assertUniqueIds(compiledJourneys, "Journey");
    assertUniqueNames(this.tools.list(), "Tool");
    assertUniqueNames(this.knowledge.list(), "Knowledge source");
    const customEvents = this.customEvents.list();
    assertUniqueNames(customEvents, "Custom runtime event");
    assertUniqueKinds(this.widgets, "Widget");
    return {
      id: this.id,
      instructions: this.options.instructions,
      ...(this.options.logLevel ? { logLevel: this.options.logLevel } : {}),
      behavior: this.options.behavior ?? {},
      postProcessing: this.options.postProcessing ?? {},
      ...(this.voiceProfile ? { voice: this.voiceProfile } : {}),
      journeys: compiledJourneys,
      tools: this.tools.list(),
      knowledge: this.knowledge.list(),
      widgets: this.widgets,
      customEvents,
    };
  }
}

export function createAgent<const TId extends string>(id: TId, options: AgentOptions) {
  return new AgentBuilder(id, options);
}
