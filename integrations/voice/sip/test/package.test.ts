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

  it("keeps the manifest subpath runtime-light and declares the drachtio runtime SDK", async () => {
    const source = await readFile(resolve(packageRoot, "src/manifest.ts"), "utf8");
    const drachtioSource = await readFile(resolve(packageRoot, "src/drachtio.ts"), "utf8");
    const packageJson = JSON.parse(await readFile(resolve(packageRoot, "package.json"), "utf8")) as {
      dependencies?: Record<string, string>;
      cognidesk?: {
        providerSdkDependencies?: unknown;
        providerSdkDecision?: {
          selectedSdkPackage?: string;
          defaultClientPolicy?: string;
          typedClientOverride?: string;
        };
      };
    };

    expect(sipVoiceProviderManifest.packageName).toBe("@cognidesk/integration-voice-sip");
    expect(sipVoiceProviderManifest.metadata).toMatchObject({
      implementation: {
        providerSdkDecision: "provider-protocol-lib/drachtio-srf",
        providerSdkDependencies: ["drachtio-srf"],
        runtime: "createDrachtioSipStackGateway backed by drachtio-srf Srf, createUAC, and Dialog call-control methods",
      },
      checkedProviderSdk: {
        verdict: "provider-protocol-lib-selected",
        packageSurfaceRuntimeSdkAvailable: true,
        providerSdkDependencies: ["drachtio-srf"],
      },
    });
    expect(source).not.toContain("./client");
    expect(source).not.toContain("./webhooks");
    expect(drachtioSource).toContain("from \"drachtio-srf\"");
    expect(drachtioSource).toContain("new Srf()");
    expect(drachtioSource).toContain("createUAC");
    expect(drachtioSource).toContain("dialog.request");
    expect(drachtioSource).toContain("dialog.modify");
    expect(packageJson.cognidesk?.providerSdkDependencies).toEqual(["drachtio-srf"]);
    expect(packageJson.cognidesk?.providerSdkDecision).toMatchObject({
      selectedSdkPackage: "drachtio-srf",
      defaultClientPolicy: "drachtio-srf-gateway-when-configured-or-host-injected-SipStackGateway",
      typedClientOverride: "SipStackGateway",
    });
    expect(packageJson.dependencies).toHaveProperty("drachtio-srf");
    expect(packageJson.dependencies).not.toHaveProperty("sip.js");
    expect(packageJson.dependencies).not.toHaveProperty("jssip");
  });
});
