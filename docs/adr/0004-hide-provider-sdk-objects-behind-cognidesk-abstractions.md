# Hide provider SDK objects behind Core abstractions

Cognidesk Core must expose Cognidesk types, definitions, models, events, tools, widgets, and adapters rather than provider-native objects. The `@cognidesk/model` integration package is the narrow exception: it may publicly accept Vercel AI SDK model handles and wrap them as Cognidesk Model Adapters, keeping the runtime portable while letting applications own provider selection.
