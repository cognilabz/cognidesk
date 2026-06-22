import { defineIntegration } from "@cognidesk/integration-kit";
import {
  defineForm,
  normalizeFormSubmission,
  parseFormWebhook,
  type FormDefinition,
  type FormDefinitionInput,
  type FormSubmissionInput,
  type ParseFormWebhookOptions,
} from "./core.js";
import { cognideskFormsProviderManifest } from "./manifest.js";

export interface NormalizeFormSubmissionOperationInput {
  form: FormDefinition;
  submission: FormSubmissionInput;
}

export interface ParseFormWebhookOperationInput {
  request: Request;
  options?: ParseFormWebhookOptions;
}

export function createCognideskFormsIntegration() {
  return defineIntegration({
    manifest: cognideskFormsProviderManifest as never,
    operations: {
      "cognidesk.form.definition.validate": (input: FormDefinitionInput) => defineForm(input),
      "cognidesk.form.submission.normalize": (input: NormalizeFormSubmissionOperationInput) =>
        normalizeFormSubmission(input.form, input.submission),
      "cognidesk.form.webhook.parse": (input: ParseFormWebhookOperationInput) =>
        parseFormWebhook(input.request, input.options),
    } as never,
  });
}
