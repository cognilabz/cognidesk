# integrations/form/cognidesk/dist

## Interfaces

### NormalizeFormSubmissionOperationInput

#### Properties

##### form

```ts
form: FormDefinition;
```

##### submission

```ts
submission: FormSubmissionInput;
```

***

### ParseFormWebhookOperationInput

#### Properties

##### options?

```ts
optional options?: ParseFormWebhookOptions;
```

##### request

```ts
request: Request;
```

## Functions

### createCognideskFormsIntegration()

```ts
function createCognideskFormsIntegration(): DefinedIntegration<never, unknown, never>;
```

#### Returns

[`DefinedIntegration`](../../../packages/integration-kit/dist.md#definedintegration)\<`never`, `unknown`, `never`\>

## References

### cognideskFormsProviderManifest

Re-exports [cognideskFormsProviderManifest](dist/manifest.md#cognideskformsprovidermanifest)

***

### defineForm

Re-exports [defineForm](dist/runtime.md#defineform)

***

### FormChannelEvent

Re-exports [FormChannelEvent](dist/runtime.md#formchannelevent)

***

### FormDefinition

Re-exports [FormDefinition](dist/runtime.md#formdefinition)

***

### FormDefinitionInput

Re-exports [FormDefinitionInput](dist/runtime.md#formdefinitioninput)

***

### FormFieldDefinition

Re-exports [FormFieldDefinition](dist/runtime.md#formfielddefinition)

***

### FormFieldOption

Re-exports [FormFieldOption](dist/runtime.md#formfieldoption)

***

### FormFieldType

Re-exports [FormFieldType](dist/runtime.md#formfieldtype)

***

### FormIntakeRecord

Re-exports [FormIntakeRecord](dist/runtime.md#formintakerecord)

***

### formsCredentialStatuses

Re-exports [formsCredentialStatuses](dist/runtime.md#formscredentialstatuses)

***

### FormsCredentialStatusInput

Re-exports [FormsCredentialStatusInput](dist/runtime.md#formscredentialstatusinput)

***

### FormsJsonObject

Re-exports [FormsJsonObject](dist/runtime.md#formsjsonobject)

***

### FormsJsonPrimitive

Re-exports [FormsJsonPrimitive](dist/runtime.md#formsjsonprimitive)

***

### FormsJsonValue

Re-exports [FormsJsonValue](dist/runtime.md#formsjsonvalue)

***

### FormsProviderExtensionFields

Re-exports [FormsProviderExtensionFields](dist/runtime.md#formsproviderextensionfields)

***

### FormsProviderExtensionValue

Re-exports [FormsProviderExtensionValue](dist/runtime.md#formsproviderextensionvalue)

***

### FormsProviderPayload

Re-exports [FormsProviderPayload](dist/runtime.md#formsproviderpayload)

***

### FormsProviderQuery

Re-exports [FormsProviderQuery](dist/runtime.md#formsproviderquery)

***

### FormsProviderResponse

Re-exports [FormsProviderResponse](dist/runtime.md#formsproviderresponse)

***

### FormSubmissionInput

Re-exports [FormSubmissionInput](dist/runtime.md#formsubmissioninput)

***

### FormValidationError

Re-exports [FormValidationError](dist/runtime.md#formvalidationerror)

***

### FormValidationResult

Re-exports [FormValidationResult](dist/runtime.md#formvalidationresult)

***

### normalizeFormSubmission

Re-exports [normalizeFormSubmission](dist/runtime.md#normalizeformsubmission)

***

### normalizeFormSubmissionEvent

Re-exports [normalizeFormSubmissionEvent](dist/runtime.md#normalizeformsubmissionevent)

***

### parseFormWebhook

Re-exports [parseFormWebhook](dist/runtime.md#parseformwebhook)

***

### ParseFormWebhookOptions

Re-exports [ParseFormWebhookOptions](dist/runtime.md#parseformwebhookoptions)

***

### validateFormSubmission

Re-exports [validateFormSubmission](dist/runtime.md#validateformsubmission)

***

### validateFormWebhookSignature

Re-exports [validateFormWebhookSignature](dist/runtime.md#validateformwebhooksignature)
