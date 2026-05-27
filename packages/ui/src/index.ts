export type AppearanceStyle = Record<string, string | number>;

export type AppearanceElementObject = {
  className?: string;
  style?: AppearanceStyle;
};

export type AppearanceElementValue = string | AppearanceStyle | AppearanceElementObject;

export type AppearanceConfiguration = {
  variables?: Record<string, string>;
  elements?: Partial<Record<ElementKey | WidgetElementKey, AppearanceElementValue>>;
  widgets?: Record<string, {
    elements?: Partial<Record<WidgetElementKey, AppearanceElementValue>>;
  }>;
};

export const elementKeys = {
  root: "root",
  header: "header",
  messageList: "messageList",
  messageAssistant: "messageAssistant",
  messageSourceSegment: "messageSourceSegment",
  messageUser: "messageUser",
  messageSources: "messageSources",
  messageSourceLink: "messageSourceLink",
  activityIndicator: "activityIndicator",
  activityDot: "activityDot",
  composer: "composer",
  composerInput: "composerInput",
  composerSendButton: "composerSendButton",
  widgetOutlet: "widgetOutlet",
  widgetContainer: "widgetContainer",
  error: "error",
} as const;

export type ElementKey = keyof typeof elementKeys;

export const widgetElementKeys = {
  panel: "panel",
  title: "title",
  description: "description",
  actions: "actions",
  button: "button",
  primaryButton: "primaryButton",
  input: "input",
  choiceList: "choiceList",
  choice: "choice",
  choiceLabel: "choiceLabel",
  choiceDescription: "choiceDescription",
  fields: "fields",
  field: "field",
  fieldLabel: "fieldLabel",
} as const;

export type WidgetElementKey = keyof typeof widgetElementKeys;

const defaultClassNames: Record<ElementKey, string> = {
  root: "cd-root",
  header: "cd-header",
  messageList: "cd-message-list",
  messageAssistant: "cd-message cd-message-assistant",
  messageSourceSegment: "cd-message-source-segment",
  messageUser: "cd-message cd-message-user",
  messageSources: "cd-message-sources",
  messageSourceLink: "cd-message-source-link",
  activityIndicator: "cd-activity-indicator",
  activityDot: "cd-activity-dot",
  composer: "cd-composer",
  composerInput: "cd-composer-input",
  composerSendButton: "cd-composer-send-button",
  widgetOutlet: "cd-widget-outlet",
  widgetContainer: "cd-widget",
  error: "cd-error",
};

const defaultWidgetClassNames: Record<WidgetElementKey, string> = {
  panel: "cd-widget-panel",
  title: "cd-widget-title",
  description: "cd-widget-description",
  actions: "cd-widget-actions",
  button: "cd-widget-button",
  primaryButton: "cd-widget-button cd-widget-button-primary",
  input: "cd-widget-input",
  choiceList: "cd-widget-choice-list",
  choice: "cd-widget-choice",
  choiceLabel: "cd-widget-choice-label",
  choiceDescription: "cd-widget-choice-description",
  fields: "cd-widget-fields",
  field: "cd-widget-field",
  fieldLabel: "cd-widget-field-label",
};

export function resolveElementClassName(
  key: ElementKey,
  appearance?: AppearanceConfiguration,
) : string {
  return resolveClassName(defaultClassNames[key], appearance?.elements?.[key]);
}

export function resolveInlineStyle(
  key: ElementKey,
  appearance?: AppearanceConfiguration,
): AppearanceStyle {
  const configured = appearance?.elements?.[key];
  return resolveStyle(appearance, configured);
}

export function resolveWidgetElementClassName(
  widgetKind: string,
  key: WidgetElementKey,
  appearance?: AppearanceConfiguration,
): string {
  return resolveClassName(
    defaultWidgetClassNames[key],
    appearance?.elements?.[key],
    appearance?.widgets?.[widgetKind]?.elements?.[key],
  );
}

export function resolveWidgetInlineStyle(
  widgetKind: string,
  key: WidgetElementKey,
  appearance?: AppearanceConfiguration,
): AppearanceStyle {
  return resolveStyle(
    appearance,
    appearance?.elements?.[key],
    appearance?.widgets?.[widgetKind]?.elements?.[key],
  );
}

function resolveClassName(defaultClassName: string, ...values: Array<AppearanceElementValue | undefined>) {
  const configuredClassNames = values
    .map((value) => {
      if (typeof value === "string") return value;
      if (isAppearanceElementObject(value) && typeof value.className === "string") return value.className;
      return null;
    })
    .filter((value): value is string => Boolean(value));
  return configuredClassNames.length > 0
    ? [defaultClassName, ...configuredClassNames].join(" ")
    : defaultClassName;
}

function resolveStyle(
  appearance: AppearanceConfiguration | undefined,
  ...values: Array<AppearanceElementValue | undefined>
): AppearanceStyle {
  return {
    ...appearance?.variables,
    ...Object.assign({}, ...values.map(extractStyle).filter((value): value is AppearanceStyle => Boolean(value))),
  };
}

function extractStyle(value: AppearanceElementValue | undefined): AppearanceStyle | null {
  if (!value || typeof value === "string") return null;
  if (isAppearanceElementObject(value)) return value.style ?? null;
  return value;
}

function isAppearanceElementObject(value: AppearanceElementValue | undefined): value is AppearanceElementObject {
  return Boolean(
    value
      && typeof value === "object"
      && ("className" in value || "style" in value),
  );
}
