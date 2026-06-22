import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { classifyProviderSymbol, transformProviderImports } from "./migrate-provider-imports.mjs";

function transform(sourceText, fileName = "example.ts") {
  const result = transformProviderImports(sourceText, { fileName });
  assert.deepEqual(result.diagnostics, []);
  return result;
}

describe("classifyProviderSymbol", () => {
  it("routes manifest symbols to manifest imports", () => {
    assert.equal(classifyProviderSymbol("gmailEmailProviderManifest"), "manifest");
    assert.equal(classifyProviderSymbol("ProviderManifest"), "manifest");
  });

  it("routes runtime helpers, generated API names, and contract types to runtime imports", () => {
    assert.equal(classifyProviderSymbol("createGmailEmailClient"), "runtime");
    assert.equal(classifyProviderSymbol("ProviderApiError"), "runtime");
    assert.equal(classifyProviderSymbol("GMAIL_FULL_API_GENERATED_FUNCTION_COUNT"), "runtime");
    assert.equal(classifyProviderSymbol("GmailFullApiSchemaJsonValue"), "runtime");
    assert.equal(classifyProviderSymbol("GmailEmailClientOptions"), "runtime");
  });

  it("leaves ambiguous names unclassified", () => {
    assert.equal(classifyProviderSymbol("gmailThing"), undefined);
  });
});

describe("transformProviderImports", () => {
  it("rewrites manifest imports to the provider manifest subpath", () => {
    const result = transform(
      'import { gmailEmailProviderManifest } from "@cognidesk/integrations/email/gmail";\n',
    );

    assert.equal(result.changed, true);
    assert.equal(
      result.sourceText,
      'import { gmailEmailProviderManifest } from "@cognidesk/integration-email-gmail/manifest";\n',
    );
  });

  it("rewrites runtime imports to the provider runtime subpath", () => {
    const result = transform(
      'import { createGmailEmailClient } from "@cognidesk/integrations/email/gmail";\n',
    );

    assert.equal(
      result.sourceText,
      'import { createGmailEmailClient } from "@cognidesk/integration-email-gmail/runtime";\n',
    );
  });

  it("fails closed for removed Gmail generated full-API imports", () => {
    const sourceText = 'import { GMAIL_FULL_API_GENERATED_FUNCTION_COUNT } from "@cognidesk/integrations/email/gmail";\n';
    const result = transformProviderImports(sourceText, { fileName: "removed-gmail-generated.ts" });

    assert.equal(result.changed, false);
    assert.equal(result.sourceText, sourceText);
    assert.equal(result.diagnostics.length, 1);
    assert.match(result.diagnostics[0].message, /Legacy Gmail generated\/full-API symbol 'GMAIL_FULL_API_GENERATED_FUNCTION_COUNT'/);
    assert.match(result.diagnostics[0].message, /not exported by '@cognidesk\/integration-email-gmail\/runtime'/);
  });

  it("does not partially rewrite mixed imports when Gmail generated full-API symbols are present", () => {
    const sourceText = 'import { gmailEmailProviderManifest, createGmailEmailClient, type GmailFullApiSchemaJsonValue } from "@cognidesk/integrations/email/gmail";\n';
    const result = transformProviderImports(sourceText, { fileName: "mixed-removed-gmail-generated.ts" });

    assert.equal(result.changed, false);
    assert.equal(result.sourceText, sourceText);
    assert.equal(result.diagnostics.length, 1);
    assert.match(result.diagnostics[0].message, /Legacy Gmail generated\/full-API symbol 'GmailFullApiSchemaJsonValue'/);
  });

  it("splits mixed manifest and runtime imports", () => {
    const result = transform(
      'import { gmailEmailProviderManifest, createGmailEmailClient, type GmailEmailClientOptions } from "@cognidesk/integrations/email/gmail";\n',
    );

    assert.equal(
      result.sourceText,
      [
        'import { gmailEmailProviderManifest } from "@cognidesk/integration-email-gmail/manifest";',
        'import { createGmailEmailClient, type GmailEmailClientOptions } from "@cognidesk/integration-email-gmail/runtime";',
        "",
      ].join("\n"),
    );
  });

  it("keeps type-only imports type-only while routing by symbol", () => {
    const manifest = transform(
      'import type { GmailEmailProviderManifest } from "@cognidesk/integrations/email/gmail";\n',
    );
    const runtime = transform(
      'import type { GmailEmailClientOptions } from "@cognidesk/integrations/email/gmail";\n',
    );

    assert.equal(
      manifest.sourceText,
      'import type { GmailEmailProviderManifest } from "@cognidesk/integration-email-gmail/manifest";\n',
    );
    assert.equal(
      runtime.sourceText,
      'import type { GmailEmailClientOptions } from "@cognidesk/integration-email-gmail/runtime";\n',
    );
  });

  it("rewrites named exports", () => {
    const result = transform(
      'export { slackWorkplaceProviderManifest } from "@cognidesk/integrations/workplace/slack";\n',
    );

    assert.equal(
      result.sourceText,
      'export { slackWorkplaceProviderManifest } from "@cognidesk/integration-workplace-slack/manifest";\n',
    );
  });

  it("splits mixed named exports", () => {
    const result = transform(
      'export { twilioSmsProviderManifest, createTwilioSmsClient } from "@cognidesk/integrations/sms/twilio";\n',
    );

    assert.equal(
      result.sourceText,
      [
        'export { twilioSmsProviderManifest } from "@cognidesk/integration-sms-twilio/manifest";',
        'export { createTwilioSmsClient } from "@cognidesk/integration-sms-twilio/runtime";',
        "",
      ].join("\n"),
    );
  });

  it("keeps category/provider packages distinct for shared provider brands", () => {
    const result = transform(
      [
        'import { createTwilioSmsClient } from "@cognidesk/integrations/sms/twilio";',
        'import { createTwilioVoiceClient } from "@cognidesk/integrations/voice/twilio";',
        'import { createZoomVideoClient } from "@cognidesk/integrations/video/zoom";',
        'import { createZoomContactCenterClient } from "@cognidesk/integrations/contact-center/zoom";',
        "",
      ].join("\n"),
    );

    assert.equal(
      result.sourceText,
      [
        'import { createTwilioSmsClient } from "@cognidesk/integration-sms-twilio/runtime";',
        'import { createTwilioVoiceClient } from "@cognidesk/integration-voice-twilio/runtime";',
        'import { createZoomVideoClient } from "@cognidesk/integration-video-zoom/runtime";',
        'import { createZoomContactCenterClient } from "@cognidesk/integration-contact-center-zoom/runtime";',
        "",
      ].join("\n"),
    );
  });

  it("leaves already migrated imports unchanged", () => {
    const result = transform(
      'import { gmailEmailProviderManifest } from "@cognidesk/integration-email-gmail/manifest";\n',
    );

    assert.equal(result.changed, false);
    assert.equal(
      result.sourceText,
      'import { gmailEmailProviderManifest } from "@cognidesk/integration-email-gmail/manifest";\n',
    );
  });

  it("fails closed for imports the parser cannot migrate safely", () => {
    const sideEffect = transformProviderImports(
      'import "@cognidesk/integrations/email/gmail";\n',
      { fileName: "side-effect.ts" },
    );
    const defaultImport = transformProviderImports(
      'import gmail from "@cognidesk/integrations/email/gmail";\n',
      { fileName: "default.ts" },
    );
    const namespaceImport = transformProviderImports(
      'import * as gmail from "@cognidesk/integrations/email/gmail";\n',
      { fileName: "namespace.ts" },
    );
    const starExport = transformProviderImports(
      'export * from "@cognidesk/integrations/email/gmail";\n',
      { fileName: "star.ts" },
    );

    assert.match(sideEffect.diagnostics[0].message, /Side-effect provider imports/);
    assert.match(defaultImport.diagnostics[0].message, /Default import/);
    assert.match(namespaceImport.diagnostics[0].message, /Namespace import/);
    assert.match(starExport.diagnostics[0].message, /Star re-export/);
  });

  it("fails closed for ambiguous symbols and unsupported legacy subpaths", () => {
    const ambiguous = transformProviderImports(
      'import { gmailThing } from "@cognidesk/integrations/email/gmail";\n',
      { fileName: "ambiguous.ts" },
    );
    const unsupported = transformProviderImports(
      'import { createGmailEmailClient } from "@cognidesk/integrations/email/gmail/client";\n',
      { fileName: "unsupported.ts" },
    );
    const unknownCategory = transformProviderImports(
      'import { fooProviderManifest } from "@cognidesk/integrations/unknown/foo";\n',
      { fileName: "unknown-category.ts" },
    );

    assert.match(ambiguous.diagnostics[0].message, /Cannot classify provider import/);
    assert.match(unsupported.diagnostics[0].message, /Unsupported legacy provider import/);
    assert.match(unknownCategory.diagnostics[0].message, /Unknown provider category/);
  });
});
