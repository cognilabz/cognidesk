import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import { describe, expect, it } from "vitest";
import { createSipVoiceIntegration, type SipStackGateway, type SipVoiceConfig } from "../src/index.js";
import { sipVoiceProviderManifest } from "../src/manifest.js";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
type OperationRunner = (alias: string, input: unknown) => Promise<unknown>;

const config: SipVoiceConfig = {
  registrarUri: "sip:registrar.example.com",
  domain: "example.com",
  authUsername: "agent",
  authPassword: "secret",
  tlsEnabled: true,
  mediaEncryption: "srtp",
  webhookCallbackUrl: "https://desk.example.com/sip/events",
};

describe("@cognidesk/integration-voice-sip", () => {
  it("binds SIP gateway operations without bundling a SIP stack", async () => {
    const gateway: SipStackGateway = {
      createOutboundCall(input) {
        return { callId: "call_1", state: "inviting", to: input.to };
      },
    };
    const integration = createSipVoiceIntegration({ config, gateway });

    expect(assertIntegrationConformance(integration)).toMatchObject({
      missingHandlerAliases: [],
      extraHandlerAliases: [],
    });
    await expect((integration.run as unknown as OperationRunner)("sip.call.start", {
      to: "sip:customer@example.com",
      from: "sip:support@example.com",
    })).resolves.toMatchObject({ callId: "call_1", state: "inviting" });
  });

  it("keeps the manifest subpath runtime-light and leaves drachtio optional to applications", async () => {
    const source = await readFile(resolve(packageRoot, "src/manifest.ts"), "utf8");
    const packageJson = JSON.parse(await readFile(resolve(packageRoot, "package.json"), "utf8")) as {
      dependencies?: Record<string, string>;
    };

    expect(sipVoiceProviderManifest.packageName).toBe("@cognidesk/integration-voice-sip");
    expect(source).not.toContain("./client");
    expect(source).not.toContain("./webhooks");
    expect(packageJson.dependencies).not.toHaveProperty("drachtio-srf");
    expect(packageJson.dependencies).not.toHaveProperty("sip.js");
  });
});
