# Hide provider SDK objects behind Cognidesk abstractions

Cognidesk may use provider SDKs such as the OpenAI Agents SDK under the hood, but public APIs must expose Cognidesk types, definitions, models, events, tools, widgets, and adapters rather than provider-native objects. This keeps the runtime portable across OpenAI, OpenRouter, and future providers while allowing strong built-ins to use the best available provider SDK internally.
