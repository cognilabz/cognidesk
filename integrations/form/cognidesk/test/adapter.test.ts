import { createHmac } from "node:crypto";
import { describe, expect, it } from "vitest";
import { runProviderConformance } from "@cognidesk/test-harness";
import {
  cognideskFormsProviderManifest,
  defineForm,
  formsCredentialStatuses,
  normalizeFormSubmission,
  normalizeFormSubmissionEvent,
  parseFormWebhook,
  validateFormSubmission,
  validateFormWebhookSignature,
} from "../src/index.js";

describe("@cognidesk/integration-form-cognidesk", () => {
  it("exports an official generic form provider manifest", () => {
    expect(cognideskFormsProviderManifest).toMatchObject({
      id: "form.cognidesk",
      packageName: "@cognidesk/integration-form-cognidesk",
      category: "form",
      provider: "cognidesk",
      trustLevel: "official",
    });
    expect(cognideskFormsProviderManifest.capabilities.map((capability) => capability.capability))
      .toEqual(expect.arrayContaining(["receive", "read-provider-object", "form.webhook-signature"]));
    expect(cognideskFormsProviderManifest.coverage).toMatchObject({
      scope: "local-protocol",
      evidence: [],
    });
    expect(cognideskFormsProviderManifest.coverage.notes.join(" "))
      .toContain("does not implement a named external forms provider API");
    expect(cognideskFormsProviderManifest.metadata).toMatchObject({
      implementation: {
        strategy: "protocol-local-runtime",
        providerSdkDecision: "internal-provider/local-runtime/no-provider-SDK",
        externalProviderSdk: "not-applicable-internal-provider",
      },
      checkedProviderSdk: {
        verdict: "internal-provider/local-runtime/no-provider-SDK",
        packageSurfaceRuntimeSdkAvailable: false,
      },
    });
  });

  it("defines forms and validates submissions structurally", () => {
    const form = defineForm({
      id: "contact",
      fields: [
        { id: "email", type: "email", required: true },
        { id: "priority", type: "select", options: [{ value: "normal" }, { value: "urgent" }] },
        { id: "tags", type: "multiselect", options: [{ value: "billing" }, { value: "bug" }] },
      ],
    });

    expect(validateFormSubmission(form, {
      formId: "contact",
      fields: { email: "customer@example.test", priority: "urgent", tags: ["billing"] },
    })).toMatchObject({ valid: true });

    const invalid = validateFormSubmission(form, {
      formId: "contact",
      fields: { priority: "later", extra: true },
    });
    expect(invalid.valid).toBe(false);
    expect(invalid.errors.map((error) => error.code)).toEqual([
      "missing-required",
      "invalid-option",
      "unknown-field",
    ]);
  });

  it("normalizes submissions into intake records and channel events", () => {
    const form = defineForm({
      id: "support",
      name: "Support Intake",
      fields: [{ id: "message", type: "text", required: true }],
    });
    const intake = normalizeFormSubmission(form, {
      formId: "support",
      submissionId: "sub_123",
      submittedAt: "2026-06-17T10:00:00.000Z",
      fields: { message: "Need help" },
      customer: { email: "customer@example.test" },
    });
    const event = normalizeFormSubmissionEvent(form, {
      formId: "support",
      submissionId: "sub_123",
      submittedAt: "2026-06-17T10:00:00.000Z",
      fields: { message: "Need help" },
    });

    expect(intake).toMatchObject({ kind: "formSubmission", formName: "Support Intake" });
    expect(event).toMatchObject({
      type: "channel.form.submission",
      channel: { kind: "form", provider: "cognidesk" },
      intake: { id: "sub_123" },
    });
  });

  it("parses signed form webhooks and fails closed when required", async () => {
    const form = defineForm({
      id: "contact",
      fields: [{ id: "email", type: "email", required: true }],
    });
    const rawBody = JSON.stringify({
      formId: "contact",
      submissionId: "sub_123",
      fields: { email: "customer@example.test" },
    });
    const secret = "form-secret";
    const signature = `sha256=${createHmac("sha256", secret).update(rawBody).digest("hex")}`;
    const request = new Request("https://example.test/forms", {
      method: "POST",
      headers: { "x-cognidesk-form-signature": signature },
      body: rawBody,
    });

    expect(validateFormWebhookSignature({ rawBody, signature, secret })).toBe(true);
    await expect(parseFormWebhook(request, { secret, forms: [form] })).resolves.toMatchObject({
      formId: "contact",
      submissionId: "sub_123",
    });

    const unsigned = new Request("https://example.test/forms", { method: "POST", body: rawBody });
    await expect(parseFormWebhook(unsigned, { secret, requireSignature: true })).rejects
      .toThrow("Form webhook signature validation failed.");
  });

  it("passes provider conformance with explicit generic package naming", async () => {
    const result = await runProviderConformance({
      manifest: cognideskFormsProviderManifest,
      expectedPackageName: "@cognidesk/integration-form-cognidesk",
      channels: [{
        id: "forms",
        channel: "form",
        providerPackageIds: [cognideskFormsProviderManifest.id],
        enabledCapabilities: ["receive", "read-provider-object", "form.webhook-signature"],
      }],
      credentialStatuses: formsCredentialStatuses({
        registryConfigured: true,
        webhookSecretConfigured: true,
      }),
    });

    expect(result.status).toBe("passed");
  });
});
