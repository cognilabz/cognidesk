export type AppearanceConfiguration = {
  variables?: Record<string, string>;
  elements?: Record<string, string | Record<string, string | number>>;
  widgets?: Record<string, {
    elements?: Record<string, string | Record<string, string | number>>;
  }>;
};

export const elementKeys = {
  root: "root",
  messageList: "messageList",
  messageAssistant: "messageAssistant",
  messageUser: "messageUser",
  composer: "composer",
  composerInput: "composerInput",
  composerSendButton: "composerSendButton",
  widgetOutlet: "widgetOutlet",
} as const;

export type ElementKey = keyof typeof elementKeys;

const defaultClassNames: Record<ElementKey, string> = {
  root: "cd-root",
  messageList: "cd-message-list",
  messageAssistant: "cd-message cd-message-assistant",
  messageUser: "cd-message cd-message-user",
  composer: "cd-composer",
  composerInput: "cd-composer-input",
  composerSendButton: "cd-composer-send-button",
  widgetOutlet: "cd-widget-outlet",
};

export function resolveElementClassName(
  key: ElementKey,
  appearance?: AppearanceConfiguration,
) {
  const configured = appearance?.elements?.[key];
  if (typeof configured === "string") return `${defaultClassNames[key]} ${configured}`;
  return defaultClassNames[key];
}

export function resolveInlineStyle(
  key: ElementKey,
  appearance?: AppearanceConfiguration,
) {
  const configured = appearance?.elements?.[key];
  const elementStyle = typeof configured === "object" ? configured : {};
  return {
    ...appearance?.variables,
    ...elementStyle,
  };
}
