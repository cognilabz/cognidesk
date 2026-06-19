# ui/dist

## Type Aliases

### AppearanceConfiguration

```ts
type AppearanceConfiguration = {
  elements?: Partial<Record<ElementKey | WidgetElementKey, AppearanceElementValue>>;
  variables?: Record<string, string>;
  widgets?: Record<string, {
     elements?: Partial<Record<WidgetElementKey, AppearanceElementValue>>;
  }>;
};
```

#### Properties

##### elements?

```ts
optional elements?: Partial<Record<ElementKey | WidgetElementKey, AppearanceElementValue>>;
```

##### variables?

```ts
optional variables?: Record<string, string>;
```

##### widgets?

```ts
optional widgets?: Record<string, {
  elements?: Partial<Record<WidgetElementKey, AppearanceElementValue>>;
}>;
```

***

### AppearanceElementObject

```ts
type AppearanceElementObject = {
  className?: string;
  style?: AppearanceStyle;
};
```

#### Properties

##### className?

```ts
optional className?: string;
```

##### style?

```ts
optional style?: AppearanceStyle;
```

***

### AppearanceElementValue

```ts
type AppearanceElementValue =
  | string
  | AppearanceStyle
  | AppearanceElementObject;
```

***

### AppearanceStyle

```ts
type AppearanceStyle = Record<string, string | number>;
```

***

### ElementKey

```ts
type ElementKey = keyof typeof elementKeys;
```

***

### WidgetElementKey

```ts
type WidgetElementKey = keyof typeof widgetElementKeys;
```

## Variables

### elementKeys

```ts
const elementKeys: {
  activityDot: "activityDot";
  activityIndicator: "activityIndicator";
  composer: "composer";
  composerInput: "composerInput";
  composerSendButton: "composerSendButton";
  error: "error";
  header: "header";
  messageAssistant: "messageAssistant";
  messageList: "messageList";
  messageSourceLink: "messageSourceLink";
  messageSources: "messageSources";
  messageSourceSegment: "messageSourceSegment";
  messageUser: "messageUser";
  root: "root";
  widgetContainer: "widgetContainer";
  widgetOutlet: "widgetOutlet";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-activitydot"></a> `activityDot` | `"activityDot"` |
| <a id="property-activityindicator"></a> `activityIndicator` | `"activityIndicator"` |
| <a id="property-composer"></a> `composer` | `"composer"` |
| <a id="property-composerinput"></a> `composerInput` | `"composerInput"` |
| <a id="property-composersendbutton"></a> `composerSendButton` | `"composerSendButton"` |
| <a id="property-error"></a> `error` | `"error"` |
| <a id="property-header"></a> `header` | `"header"` |
| <a id="property-messageassistant"></a> `messageAssistant` | `"messageAssistant"` |
| <a id="property-messagelist"></a> `messageList` | `"messageList"` |
| <a id="property-messagesourcelink"></a> `messageSourceLink` | `"messageSourceLink"` |
| <a id="property-messagesources"></a> `messageSources` | `"messageSources"` |
| <a id="property-messagesourcesegment"></a> `messageSourceSegment` | `"messageSourceSegment"` |
| <a id="property-messageuser"></a> `messageUser` | `"messageUser"` |
| <a id="property-root"></a> `root` | `"root"` |
| <a id="property-widgetcontainer"></a> `widgetContainer` | `"widgetContainer"` |
| <a id="property-widgetoutlet"></a> `widgetOutlet` | `"widgetOutlet"` |

***

### widgetElementKeys

```ts
const widgetElementKeys: {
  actions: "actions";
  button: "button";
  choice: "choice";
  choiceDescription: "choiceDescription";
  choiceLabel: "choiceLabel";
  choiceList: "choiceList";
  description: "description";
  field: "field";
  fieldLabel: "fieldLabel";
  fields: "fields";
  input: "input";
  panel: "panel";
  primaryButton: "primaryButton";
  title: "title";
};
```

#### Type Declaration

| Name | Type |
| ------ | ------ |
| <a id="property-actions"></a> `actions` | `"actions"` |
| <a id="property-button"></a> `button` | `"button"` |
| <a id="property-choice"></a> `choice` | `"choice"` |
| <a id="property-choicedescription"></a> `choiceDescription` | `"choiceDescription"` |
| <a id="property-choicelabel"></a> `choiceLabel` | `"choiceLabel"` |
| <a id="property-choicelist"></a> `choiceList` | `"choiceList"` |
| <a id="property-description"></a> `description` | `"description"` |
| <a id="property-field"></a> `field` | `"field"` |
| <a id="property-fieldlabel"></a> `fieldLabel` | `"fieldLabel"` |
| <a id="property-fields"></a> `fields` | `"fields"` |
| <a id="property-input"></a> `input` | `"input"` |
| <a id="property-panel"></a> `panel` | `"panel"` |
| <a id="property-primarybutton"></a> `primaryButton` | `"primaryButton"` |
| <a id="property-title"></a> `title` | `"title"` |

## Functions

### resolveElementClassName()

```ts
function resolveElementClassName(key, appearance?): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | \| `"error"` \| `"root"` \| `"header"` \| `"messageList"` \| `"messageAssistant"` \| `"messageSourceSegment"` \| `"messageUser"` \| `"messageSources"` \| `"messageSourceLink"` \| `"activityIndicator"` \| `"activityDot"` \| `"composer"` \| `"composerInput"` \| `"composerSendButton"` \| `"widgetOutlet"` \| `"widgetContainer"` |
| `appearance?` | [`AppearanceConfiguration`](#appearanceconfiguration) |

#### Returns

`string`

***

### resolveInlineStyle()

```ts
function resolveInlineStyle(key, appearance?): AppearanceStyle;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | \| `"error"` \| `"root"` \| `"header"` \| `"messageList"` \| `"messageAssistant"` \| `"messageSourceSegment"` \| `"messageUser"` \| `"messageSources"` \| `"messageSourceLink"` \| `"activityIndicator"` \| `"activityDot"` \| `"composer"` \| `"composerInput"` \| `"composerSendButton"` \| `"widgetOutlet"` \| `"widgetContainer"` |
| `appearance?` | [`AppearanceConfiguration`](#appearanceconfiguration) |

#### Returns

[`AppearanceStyle`](#appearancestyle)

***

### resolveWidgetElementClassName()

```ts
function resolveWidgetElementClassName(
   widgetKind,
   key,
   appearance?): string;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `widgetKind` | `string` |
| `key` | \| `"input"` \| `"description"` \| `"choice"` \| `"title"` \| `"fields"` \| `"panel"` \| `"actions"` \| `"button"` \| `"primaryButton"` \| `"choiceList"` \| `"choiceLabel"` \| `"choiceDescription"` \| `"field"` \| `"fieldLabel"` |
| `appearance?` | [`AppearanceConfiguration`](#appearanceconfiguration) |

#### Returns

`string`

***

### resolveWidgetInlineStyle()

```ts
function resolveWidgetInlineStyle(
   widgetKind,
   key,
   appearance?): AppearanceStyle;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `widgetKind` | `string` |
| `key` | \| `"input"` \| `"description"` \| `"choice"` \| `"title"` \| `"fields"` \| `"panel"` \| `"actions"` \| `"button"` \| `"primaryButton"` \| `"choiceList"` \| `"choiceLabel"` \| `"choiceDescription"` \| `"field"` \| `"fieldLabel"` |
| `appearance?` | [`AppearanceConfiguration`](#appearanceconfiguration) |

#### Returns

[`AppearanceStyle`](#appearancestyle)
