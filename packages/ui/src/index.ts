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
