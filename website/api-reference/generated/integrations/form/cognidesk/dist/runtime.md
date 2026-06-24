# integrations/form/cognidesk/dist/runtime

## Interfaces

### FormChannelEvent

#### Properties

##### channel

```ts
channel: {
  capabilities: {
     async: boolean;
     attachments: boolean;
     audioInput: boolean;
     audioOutput: boolean;
     buttons: boolean;
     deliveryReceipts: boolean;
     files: boolean;
     html: boolean;
     images: boolean;
     markdown: boolean;
     privateReplies: boolean;
     publicReplies: boolean;
     quickReplies: boolean;
     readReceipts: boolean;
     realtime: boolean;
     richText: boolean;
     supportsHumanTransfer: boolean;
     templates: boolean;
     threaded: boolean;
     typingIndicator: boolean;
     voice: boolean;
     widgets: boolean;
  };
  channelId: string;
  externalConversationId?: string;
  externalMessageId?: string;
  externalThreadId?: string;
  externalUserId?: string;
  kind: string;
  locale?: string;
  metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
  provider?: string;
  timezone?: string;
};
```

###### capabilities

```ts
capabilities: {
  async: boolean;
  attachments: boolean;
  audioInput: boolean;
  audioOutput: boolean;
  buttons: boolean;
  deliveryReceipts: boolean;
  files: boolean;
  html: boolean;
  images: boolean;
  markdown: boolean;
  privateReplies: boolean;
  publicReplies: boolean;
  quickReplies: boolean;
  readReceipts: boolean;
  realtime: boolean;
  richText: boolean;
  supportsHumanTransfer: boolean;
  templates: boolean;
  threaded: boolean;
  typingIndicator: boolean;
  voice: boolean;
  widgets: boolean;
};
```

###### capabilities.async

```ts
async: boolean;
```

###### capabilities.attachments

```ts
attachments: boolean;
```

###### capabilities.audioInput

```ts
audioInput: boolean;
```

###### capabilities.audioOutput

```ts
audioOutput: boolean;
```

###### capabilities.buttons

```ts
buttons: boolean;
```

###### capabilities.deliveryReceipts

```ts
deliveryReceipts: boolean;
```

###### capabilities.files

```ts
files: boolean;
```

###### capabilities.html

```ts
html: boolean;
```

###### capabilities.images

```ts
images: boolean;
```

###### capabilities.markdown

```ts
markdown: boolean;
```

###### capabilities.privateReplies

```ts
privateReplies: boolean;
```

###### capabilities.publicReplies

```ts
publicReplies: boolean;
```

###### capabilities.quickReplies

```ts
quickReplies: boolean;
```

###### capabilities.readReceipts

```ts
readReceipts: boolean;
```

###### capabilities.realtime

```ts
realtime: boolean;
```

###### capabilities.richText

```ts
richText: boolean;
```

###### capabilities.supportsHumanTransfer

```ts
supportsHumanTransfer: boolean;
```

###### capabilities.templates

```ts
templates: boolean;
```

###### capabilities.threaded

```ts
threaded: boolean;
```

###### capabilities.typingIndicator

```ts
typingIndicator: boolean;
```

###### capabilities.voice

```ts
voice: boolean;
```

###### capabilities.widgets

```ts
widgets: boolean;
```

###### channelId

```ts
channelId: string;
```

###### externalConversationId?

```ts
optional externalConversationId?: string;
```

###### externalMessageId?

```ts
optional externalMessageId?: string;
```

###### externalThreadId?

```ts
optional externalThreadId?: string;
```

###### externalUserId?

```ts
optional externalUserId?: string;
```

###### kind

```ts
kind: string;
```

###### locale?

```ts
optional locale?: string;
```

###### metadata?

```ts
optional metadata?: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
```

###### provider?

```ts
optional provider?: string;
```

###### timezone?

```ts
optional timezone?: string;
```

##### id

```ts
id: string;
```

##### intake

```ts
intake: FormIntakeRecord;
```

##### occurredAt

```ts
occurredAt: string;
```

##### type

```ts
type: "channel.form.submission";
```

***

### FormDefinition

#### Extends

- [`FormDefinitionInput`](#formdefinitioninput)

#### Properties

##### allowUnknownFields

```ts
allowUnknownFields: boolean;
```

###### Overrides

[`FormDefinitionInput`](#formdefinitioninput).[`allowUnknownFields`](#allowunknownfields-1)

##### fields

```ts
fields: FormFieldDefinition[];
```

###### Inherited from

[`FormDefinitionInput`](#formdefinitioninput).[`fields`](#fields-1)

##### id

```ts
id: string;
```

###### Inherited from

[`FormDefinitionInput`](#formdefinitioninput).[`id`](#id-2)

##### metadata?

```ts
optional metadata?: FormsProviderExtensionFields;
```

###### Inherited from

[`FormDefinitionInput`](#formdefinitioninput).[`metadata`](#metadata-1)

##### name

```ts
name: string;
```

###### Overrides

[`FormDefinitionInput`](#formdefinitioninput).[`name`](#name-1)

##### version?

```ts
optional version?: string;
```

###### Inherited from

[`FormDefinitionInput`](#formdefinitioninput).[`version`](#version-1)

***

### FormDefinitionInput

#### Extended by

- [`FormDefinition`](#formdefinition)

#### Properties

##### allowUnknownFields?

```ts
optional allowUnknownFields?: boolean;
```

##### fields

```ts
fields: FormFieldDefinition[];
```

##### id

```ts
id: string;
```

##### metadata?

```ts
optional metadata?: FormsProviderExtensionFields;
```

##### name?

```ts
optional name?: string;
```

##### version?

```ts
optional version?: string;
```

***

### FormFieldDefinition

#### Properties

##### id

```ts
id: string;
```

##### label?

```ts
optional label?: string;
```

##### metadata?

```ts
optional metadata?: FormsProviderExtensionFields;
```

##### options?

```ts
optional options?: FormFieldOption[];
```

##### required?

```ts
optional required?: boolean;
```

##### type

```ts
type: FormFieldType;
```

***

### FormFieldOption

#### Properties

##### label?

```ts
optional label?: string;
```

##### metadata?

```ts
optional metadata?: FormsProviderExtensionFields;
```

##### value

```ts
value: string;
```

***

### FormIntakeRecord

#### Properties

##### customer?

```ts
optional customer?: FormsJsonObject;
```

##### fields

```ts
fields: FormsJsonObject;
```

##### formId

```ts
formId: string;
```

##### formName

```ts
formName: string;
```

##### id

```ts
id: string;
```

##### kind

```ts
kind: "formSubmission";
```

##### metadata?

```ts
optional metadata?: FormsProviderExtensionFields;
```

##### source?

```ts
optional source?: FormsJsonObject;
```

##### submittedAt

```ts
submittedAt: string;
```

***

### FormsCredentialStatusInput

#### Properties

##### registryConfigured?

```ts
optional registryConfigured?: boolean;
```

##### webhookSecretConfigured?

```ts
optional webhookSecretConfigured?: boolean;
```

***

### FormsJsonObject

#### Extended by

- [`FormsProviderExtensionFields`](#formsproviderextensionfields)
- [`FormsProviderResponse`](#formsproviderresponse)

#### Indexable

```ts
[key: string]: FormsProviderExtensionValue
```

***

### FormsProviderExtensionFields

#### Extends

- [`FormsJsonObject`](#formsjsonobject)

#### Indexable

```ts
[key: string]: FormsProviderExtensionValue
```

***

### FormsProviderResponse

#### Extends

- [`FormsJsonObject`](#formsjsonobject)

#### Indexable

```ts
[key: string]: FormsProviderExtensionValue
```

***

### FormSubmissionInput

#### Properties

##### customer?

```ts
optional customer?: FormsJsonObject;
```

##### fields

```ts
fields: FormsJsonObject;
```

##### formId

```ts
formId: string;
```

##### metadata?

```ts
optional metadata?: FormsProviderExtensionFields;
```

##### source?

```ts
optional source?: FormsJsonObject;
```

##### submissionId?

```ts
optional submissionId?: string;
```

##### submittedAt?

```ts
optional submittedAt?: string;
```

***

### FormValidationError

#### Properties

##### code

```ts
code:
  | "unknown-field"
  | "missing-required"
  | "invalid-type"
  | "invalid-option";
```

##### fieldId

```ts
fieldId: string;
```

##### message

```ts
message: string;
```

***

### ParseFormWebhookOptions

#### Properties

##### forms?

```ts
optional forms?: FormDefinition[];
```

##### rawBody?

```ts
optional rawBody?: string;
```

##### requireSignature?

```ts
optional requireSignature?: boolean;
```

##### secret?

```ts
optional secret?: string;
```

##### signatureHeader?

```ts
optional signatureHeader?: string;
```

## Type Aliases

### FormFieldType

```ts
type FormFieldType =
  | "text"
  | "email"
  | "number"
  | "boolean"
  | "select"
  | "multiselect"
  | "date"
  | "file"
  | "object";
```

***

### FormsJsonPrimitive

```ts
type FormsJsonPrimitive = string | number | boolean | null;
```

***

### FormsJsonValue

```ts
type FormsJsonValue =
  | FormsJsonPrimitive
  | FormsJsonObject
  | readonly FormsJsonValue[];
```

***

### FormsProviderExtensionValue

```ts
type FormsProviderExtensionValue = FormsJsonValue | object | undefined;
```

***

### FormsProviderPayload

```ts
type FormsProviderPayload = FormsJsonObject | object;
```

***

### FormsProviderQuery

```ts
type FormsProviderQuery = Record<string, FormsProviderExtensionValue>;
```

***

### FormValidationResult

```ts
type FormValidationResult =
  | {
  errors: [];
  submission: FormSubmissionInput;
  valid: true;
}
  | {
  errors: FormValidationError[];
  submission: FormSubmissionInput;
  valid: false;
};
```

## Functions

### defineForm()

```ts
function defineForm(input): FormDefinition;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`FormDefinitionInput`](#formdefinitioninput) |

#### Returns

[`FormDefinition`](#formdefinition)

***

### formsCredentialStatuses()

```ts
function formsCredentialStatuses(input): {
  expiresAt?: string;
  message?: string;
  providerPackageId?: string;
  requirementId: string;
  scopes?: string[];
  state:   | "required"
     | "configured"
     | "permission-blocked"
     | "not-required"
     | "missing"
     | "expired"
     | "insufficient-scope"
     | "unavailable";
}[];
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | [`FormsCredentialStatusInput`](#formscredentialstatusinput) |

#### Returns

\{
  `expiresAt?`: `string`;
  `message?`: `string`;
  `providerPackageId?`: `string`;
  `requirementId`: `string`;
  `scopes?`: `string`[];
  `state`:   \| `"required"`
     \| `"configured"`
     \| `"permission-blocked"`
     \| `"not-required"`
     \| `"missing"`
     \| `"expired"`
     \| `"insufficient-scope"`
     \| `"unavailable"`;
\}[]

***

### normalizeFormSubmission()

```ts
function normalizeFormSubmission(form, submission): FormIntakeRecord;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `form` | [`FormDefinition`](#formdefinition) |
| `submission` | [`FormSubmissionInput`](#formsubmissioninput) |

#### Returns

[`FormIntakeRecord`](#formintakerecord)

***

### normalizeFormSubmissionEvent()

```ts
function normalizeFormSubmissionEvent(form, submission): FormChannelEvent;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `form` | [`FormDefinition`](#formdefinition) |
| `submission` | [`FormSubmissionInput`](#formsubmissioninput) |

#### Returns

[`FormChannelEvent`](#formchannelevent)

***

### parseFormWebhook()

```ts
function parseFormWebhook(request, options?): Promise<FormSubmissionInput>;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `Request` |
| `options?` | [`ParseFormWebhookOptions`](#parseformwebhookoptions) |

#### Returns

`Promise`\<[`FormSubmissionInput`](#formsubmissioninput)\>

***

### validateFormSubmission()

```ts
function validateFormSubmission(form, submission): FormValidationResult;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `form` | [`FormDefinition`](#formdefinition) |
| `submission` | [`FormSubmissionInput`](#formsubmissioninput) |

#### Returns

[`FormValidationResult`](#formvalidationresult)

***

### validateFormWebhookSignature()

```ts
function validateFormWebhookSignature(input): boolean;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | \{ `rawBody`: `string`; `secret`: `string`; `signature`: `string`; \} |
| `input.rawBody` | `string` |
| `input.secret` | `string` |
| `input.signature` | `string` |

#### Returns

`boolean`
