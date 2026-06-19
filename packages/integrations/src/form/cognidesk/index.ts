import { createHmac, timingSafeEqual } from "node:crypto";
import {
  defineChannelContext,
  type ChannelContext,
  type ProviderCredentialStatusInput,
} from "@cognidesk/core";
import { defineIntegrationProviderPackage as defineProviderPackage } from "../../provider-manifest.js";

export const cognideskFormsProviderManifest = defineProviderPackage({
  id: "form.cognidesk",
  name: "Cognidesk Forms",
  packageName: "@cognidesk/integrations",
  provider: "cognidesk",
  category: "form",
  trustLevel: "official",
  directions: ["receive-only", "inbound-only"],
  channelAudiences: ["customer-facing", "mixed"],
  credentialRequirements: [
    {
      id: "form-registry",
      label: "Form registry",
      description: "SDK-user-configured registry of accepted form definitions and submission policies.",
      required: true,
    },
    {
      id: "form-webhook-secret",
      label: "Form webhook secret",
      description: "Shared HMAC secret used to verify form submission webhooks before intake.",
      required: false,
    },
  ],
  coverage: {
    scope: "local-protocol",
    notes: [
      "Coverage is limited to SDK-user-defined Cognidesk form definitions, structural submission validation, intake normalization, and Cognidesk HMAC webhook parsing.",
      "The package does not implement a named external forms provider API for form hosting, third-party submission storage, file-upload storage, analytics, routing, or provider-specific webhook management.",
    ],
    evidence: [],
  },
  capabilities: [
    {
      capability: "receive",
      label: "Receive form submissions",
      description: "Validates signed form submission webhooks and normalizes accepted submissions into intake records.",
      audiences: ["customer-facing", "mixed"],
      providerObjects: [{ kind: "formSubmission", label: "Form Submission" }],
      requiresCredential: true,
      exposesSensitiveData: true,
    },
    {
      capability: "read-provider-object",
      label: "Read configured forms",
      description: "Reads SDK-user-defined form schemas from the configured form registry.",
      audiences: ["internal-support", "mixed"],
      providerObjects: [{ kind: "formDefinition", label: "Form Definition" }],
      requiresCredential: true,
    },
    {
      capability: "form.webhook-signature",
      label: "Validate form webhook signatures",
      description: "Validates HMAC-SHA256 signatures for generic form webhooks before parsing submitted fields.",
      audiences: ["internal-support"],
      providerObjects: [{ kind: "signedFormWebhook", label: "Signed Form Webhook" }],
      requiresCredential: true,
      exposesSensitiveData: true,
      extension: true,
    },
  ],
  privacyNotes: [
    "Form submissions can include customer contact details, free-text messages, uploaded-file references, and SDK-user-defined custom fields.",
    "Webhook secrets and registry credentials stay server-side and are represented in Studio only as readiness state.",
  ],
  limitations: [
    "Field definitions, required fields, accepted options, intake routing, retention, and automation policy are owned by SDK user configuration.",
    "Validation is structural and explicit; this package does not infer customer intent or classify free text.",
  ],
  maintainers: [{ name: "Cognidesk", type: "official" }],
  metadata: {
    channelCoverage: {
      formDefinitions: "typed-read-validate",
      formSubmissions: "typed-validate-normalize",
      formWebhooks: "typed-validate-parse",
      thirdPartyFormsProviderApis: "not-covered",
    },
  },
});

export type FormFieldType =
  | "text"
  | "email"
  | "number"
  | "boolean"
  | "select"
  | "multiselect"
  | "date"
  | "file"
  | "object";

export type FormsJsonPrimitive = string | number | boolean | null;
export type FormsJsonValue =
  | FormsJsonPrimitive
  | FormsJsonObject
  | readonly FormsJsonValue[];
export type FormsProviderExtensionValue = FormsJsonValue | object | undefined;
export interface FormsJsonObject {
  [key: string]: FormsProviderExtensionValue;
}
export type FormsProviderPayload = FormsJsonObject | object;
export type FormsProviderQuery = Record<string, FormsProviderExtensionValue>;
export interface FormsProviderResponse extends FormsJsonObject {}
export interface FormsProviderExtensionFields extends FormsJsonObject {}

export interface FormFieldOption {
  value: string;
  label?: string;
  metadata?: FormsProviderExtensionFields;
}

export interface FormFieldDefinition {
  id: string;
  label?: string;
  type: FormFieldType;
  required?: boolean;
  options?: FormFieldOption[];
  metadata?: FormsProviderExtensionFields;
}

export interface FormDefinitionInput {
  id: string;
  name?: string;
  version?: string;
  fields: FormFieldDefinition[];
  allowUnknownFields?: boolean;
  metadata?: FormsProviderExtensionFields;
}

export interface FormDefinition extends FormDefinitionInput {
  name: string;
  allowUnknownFields: boolean;
}

export interface FormSubmissionInput {
  formId: string;
  submissionId?: string;
  submittedAt?: string;
  fields: FormsJsonObject;
  customer?: FormsJsonObject;
  source?: FormsJsonObject;
  metadata?: FormsProviderExtensionFields;
}

export interface FormValidationError {
  fieldId: string;
  code: "unknown-field" | "missing-required" | "invalid-type" | "invalid-option";
  message: string;
}

export type FormValidationResult =
  | { valid: true; submission: FormSubmissionInput; errors: [] }
  | { valid: false; submission: FormSubmissionInput; errors: FormValidationError[] };

export interface FormIntakeRecord {
  id: string;
  kind: "formSubmission";
  formId: string;
  formName: string;
  submittedAt: string;
  fields: FormsJsonObject;
  customer?: FormsJsonObject;
  source?: FormsJsonObject;
  metadata?: FormsProviderExtensionFields;
}

export interface FormChannelEvent {
  type: "channel.form.submission";
  id: string;
  occurredAt: string;
  channel: ChannelContext;
  intake: FormIntakeRecord;
}

export interface ParseFormWebhookOptions {
  secret?: string;
  requireSignature?: boolean;
  signatureHeader?: string;
  rawBody?: string;
  forms?: FormDefinition[];
}

export interface FormsCredentialStatusInput {
  registryConfigured?: boolean;
  webhookSecretConfigured?: boolean;
}

export function defineForm(input: FormDefinitionInput): FormDefinition {
  if (!input.id.trim()) throw new Error("Form id is required.");
  if (input.fields.length === 0) throw new Error(`Form '${input.id}' must define at least one field.`);
  const ids = new Set<string>();
  for (const field of input.fields) {
    if (!field.id.trim()) throw new Error(`Form '${input.id}' has a field without an id.`);
    if (ids.has(field.id)) throw new Error(`Form '${input.id}' has duplicate field id '${field.id}'.`);
    ids.add(field.id);
    if ((field.type === "select" || field.type === "multiselect") && (!field.options || field.options.length === 0)) {
      throw new Error(`Field '${field.id}' must define explicit options.`);
    }
  }
  return {
    ...input,
    name: input.name ?? input.id,
    allowUnknownFields: input.allowUnknownFields ?? false,
  };
}

export function validateFormSubmission(
  form: FormDefinition,
  submission: FormSubmissionInput,
): FormValidationResult {
  if (submission.formId !== form.id) {
    return {
      valid: false,
      submission,
      errors: [{
        fieldId: "formId",
        code: "invalid-option",
        message: `Submission targets form '${submission.formId}', expected '${form.id}'.`,
      }],
    };
  }

  const errors: FormValidationError[] = [];
  const fieldsById = new Map(form.fields.map((field) => [field.id, field]));
  for (const field of form.fields) {
    const value = submission.fields[field.id];
    if (value === undefined || value === null || value === "") {
      if (field.required) {
        errors.push({
          fieldId: field.id,
          code: "missing-required",
          message: `Required field '${field.id}' is missing.`,
        });
      }
      continue;
    }
    const error = validateFieldValue(field, value);
    if (error) errors.push(error);
  }

  if (!form.allowUnknownFields) {
    for (const fieldId of Object.keys(submission.fields)) {
      if (!fieldsById.has(fieldId)) {
        errors.push({
          fieldId,
          code: "unknown-field",
          message: `Field '${fieldId}' is not defined for form '${form.id}'.`,
        });
      }
    }
  }

  return errors.length === 0
    ? { valid: true, submission, errors: [] }
    : { valid: false, submission, errors };
}

export function normalizeFormSubmission(
  form: FormDefinition,
  submission: FormSubmissionInput,
): FormIntakeRecord {
  const validation = validateFormSubmission(form, submission);
  if (!validation.valid) {
    throw new Error(`Form submission failed structural validation: ${validation.errors.map((error) => error.message).join(" ")}`);
  }
  const submittedAt = submission.submittedAt ?? new Date().toISOString();
  return {
    id: submission.submissionId ?? `${form.id}:${submittedAt}`,
    kind: "formSubmission",
    formId: form.id,
    formName: form.name,
    submittedAt,
    fields: submission.fields,
    ...(submission.customer ? { customer: submission.customer } : {}),
    ...(submission.source ? { source: submission.source } : {}),
    ...(submission.metadata ? { metadata: submission.metadata } : {}),
  };
}

export function normalizeFormSubmissionEvent(
  form: FormDefinition,
  submission: FormSubmissionInput,
): FormChannelEvent {
  const intake = normalizeFormSubmission(form, submission);
  return {
    type: "channel.form.submission",
    id: intake.id,
    occurredAt: intake.submittedAt,
    channel: defineChannelContext({
      channelId: cognideskFormsProviderManifest.id,
      kind: "form",
      provider: cognideskFormsProviderManifest.provider,
      externalMessageId: intake.id,
    }),
    intake,
  };
}

export async function parseFormWebhook(
  request: Request,
  options: ParseFormWebhookOptions = {},
): Promise<FormSubmissionInput> {
  const rawBody = options.rawBody ?? await request.text();
  const requireSignature = options.requireSignature ?? true;
  if (requireSignature) {
    if (!options.secret) throw new Error("Form webhook secret is required to validate signatures.");
    const header = options.signatureHeader ?? "x-cognidesk-form-signature";
    const signature = request.headers.get(header) ?? "";
    if (!validateFormWebhookSignature({ rawBody, signature, secret: options.secret })) {
      throw new Error("Form webhook signature validation failed.");
    }
  }
  const parsed = parseJsonObject(rawBody, "Form webhook body must be a JSON object.");
  const submission = parseSubmissionPayload(parsed);
  if (options.forms) {
    const form = options.forms.find((candidate) => candidate.id === submission.formId);
    if (!form) throw new Error(`Form '${submission.formId}' is not registered.`);
    const validation = validateFormSubmission(form, submission);
    if (!validation.valid) {
      throw new Error(`Form webhook failed structural validation: ${validation.errors.map((error) => error.message).join(" ")}`);
    }
  }
  return submission;
}

export function validateFormWebhookSignature(input: {
  rawBody: string;
  signature: string;
  secret: string;
}): boolean {
  const expected = `sha256=${createHmac("sha256", input.secret).update(input.rawBody).digest("hex")}`;
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(input.signature);
  return expectedBuffer.length === actualBuffer.length && timingSafeEqual(expectedBuffer, actualBuffer);
}

export function formsCredentialStatuses(input: FormsCredentialStatusInput): ProviderCredentialStatusInput[] {
  return [
    {
      providerPackageId: cognideskFormsProviderManifest.id,
      requirementId: "form-registry",
      state: input.registryConfigured ? "configured" : "missing",
      message: input.registryConfigured ? "Form registry is configured." : "A configured form registry is required.",
    },
    {
      providerPackageId: cognideskFormsProviderManifest.id,
      requirementId: "form-webhook-secret",
      state: input.webhookSecretConfigured ? "configured" : "missing",
      message: input.webhookSecretConfigured
        ? "Form webhook signature secret is configured."
        : "Configure a form webhook secret before accepting public form submissions.",
    },
  ];
}

function validateFieldValue(field: FormFieldDefinition, value: unknown): FormValidationError | undefined {
  if (field.type === "text" || field.type === "email" || field.type === "date" || field.type === "file") {
    if (typeof value !== "string") return invalidType(field, "a string");
  } else if (field.type === "number") {
    if (typeof value !== "number" || Number.isNaN(value)) return invalidType(field, "a number");
  } else if (field.type === "boolean") {
    if (typeof value !== "boolean") return invalidType(field, "a boolean");
  } else if (field.type === "object") {
    if (!isRecord(value)) return invalidType(field, "an object");
  } else if (field.type === "select") {
    if (typeof value !== "string") return invalidType(field, "a string option");
    if (!optionValues(field).has(value)) return invalidOption(field, value);
  } else if (field.type === "multiselect") {
    if (!Array.isArray(value) || !value.every((item) => typeof item === "string")) {
      return invalidType(field, "an array of string options");
    }
    const allowed = optionValues(field);
    const unknown = value.find((item) => !allowed.has(item));
    if (unknown) return invalidOption(field, unknown);
  }
  return undefined;
}

function invalidType(field: FormFieldDefinition, expected: string): FormValidationError {
  return {
    fieldId: field.id,
    code: "invalid-type",
    message: `Field '${field.id}' must be ${expected}.`,
  };
}

function invalidOption(field: FormFieldDefinition, value: string): FormValidationError {
  return {
    fieldId: field.id,
    code: "invalid-option",
    message: `Field '${field.id}' received unsupported option '${value}'.`,
  };
}

function optionValues(field: FormFieldDefinition): Set<string> {
  return new Set((field.options ?? []).map((option) => option.value));
}

function parseSubmissionPayload(value: FormsJsonObject): FormSubmissionInput {
  if (typeof value.formId !== "string" || !value.formId.trim()) throw new Error("Form webhook formId is required.");
  if (!isRecord(value.fields)) throw new Error("Form webhook fields must be an object.");
  return {
    formId: value.formId,
    ...(typeof value.submissionId === "string" ? { submissionId: value.submissionId } : {}),
    ...(typeof value.submittedAt === "string" ? { submittedAt: value.submittedAt } : {}),
    fields: value.fields,
    ...(isRecord(value.customer) ? { customer: value.customer } : {}),
    ...(isRecord(value.source) ? { source: value.source } : {}),
    ...(isRecord(value.metadata) ? { metadata: value.metadata } : {}),
  };
}

function parseJsonObject(rawBody: string, message: string): FormsJsonObject {
  const parsed = JSON.parse(rawBody) as unknown;
  if (!isRecord(parsed)) throw new Error(message);
  return parsed;
}

function isRecord(value: unknown): value is FormsJsonObject {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
