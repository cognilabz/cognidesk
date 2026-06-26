import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createWhatsAppWebMessagingClient,
  defineWhatsAppWebMessagingIntegration,
  toWhatsAppWebJid,
  whatsappWebLinkedDeviceRuntimeException,
  whatsappWebMessagingProviderManifest,
  type WhatsAppWebSessionProvider,
} from "../src/index.js";

describe("WhatsApp Web linked-device adapter", () => {
  it("declares a separate community provider package", () => {
    expect(whatsappWebMessagingProviderManifest).toMatchObject({
      id: "messaging.whatsapp-web",
      packageName: "@cognidesk/integration-messaging-whatsapp",
      provider: "whatsapp-web",
      category: "messaging",
      trustLevel: "community",
      directions: ["send-only"],
    });
    expect(whatsappWebMessagingProviderManifest.coverage.notes.join(" ")).toContain("linked-device");
    expect(whatsappWebMessagingProviderManifest.coverage.notes.join(" ")).toContain("does not shell out");

    const integration = defineWhatsAppWebMessagingIntegration({
      client: {
        async sendText(input) {
          return {
            provider: "whatsapp-web",
            sent: true,
            to: input.to,
            jid: toWhatsAppWebJid(input.to),
          };
        },
        async checkReadiness() {
          return {
            provider: "whatsapp-web",
            ok: true,
            authenticated: true,
            authStateDir: ".data/wa",
          };
        },
      },
    });
    expect(() => assertIntegrationConformance(integration)).not.toThrow();
  });

  it("declares and genuinely imports the Baileys community runtime package", async () => {
    const packageJson = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
    expect(packageJson.dependencies).toHaveProperty("baileys");
    expect(packageJson.cognidesk.providerRuntimeExceptions).toEqual([
      expect.objectContaining({
        packageName: "baileys",
        provider: "whatsapp-web",
        scope: "community-linked-device-runtime",
        officialProviderSdk: false,
        checkedAt: "2026-06-25",
      }),
    ]);

    const webClientSource = await readFile(new URL("../src/web-client.ts", import.meta.url), "utf8");
    expect(webClientSource).toContain("from \"baileys\"");
    expect(webClientSource).toContain("Browsers.appropriate(\"Chrome\")");
    expect(webClientSource).not.toContain("shouldSyncHistoryMessage: () => false");
    expect(webClientSource).toContain("delete state.creds.me");
    expect(webClientSource).toContain("&& update.qr");
    expect(webClientSource).not.toContain("update.connection === \"connecting\" || update.qr");

    const manifestSource = await readFile(new URL("../src/web-manifest.ts", import.meta.url), "utf8");
    expect(manifestSource).not.toContain("from \"baileys\"");
    expect(whatsappWebMessagingProviderManifest.metadata?.runtimeLibrary).toMatchObject({
      name: "baileys",
      packageName: "baileys",
      declaredProviderSdkDependency: true,
    });
    expect(whatsappWebMessagingProviderManifest.metadata?.runtimeException).toMatchObject(
      whatsappWebLinkedDeviceRuntimeException,
    );

    const integration = defineWhatsAppWebMessagingIntegration({
      client: {
        async sendText(input) {
          return {
            provider: "whatsapp-web",
            sent: true,
            to: input.to,
            jid: toWhatsAppWebJid(input.to),
          };
        },
        async checkReadiness() {
          return {
            provider: "whatsapp-web",
            ok: true,
            authenticated: true,
            authStateDir: ".data/wa",
          };
        },
      },
    });
    expect(integration.metadata).toMatchObject({
      runtimeLibrary: {
        name: "baileys",
        packageName: "baileys",
        declaredProviderSdkDependency: true,
      },
      runtimeException: whatsappWebLinkedDeviceRuntimeException,
    });
  });

  it("sends through an injected linked-device session provider", async () => {
    const sends: Array<{ jid: string; message: string }> = [];
    const closes: string[] = [];
    const sessionProvider: WhatsAppWebSessionProvider = {
      async connect(options) {
        expect(options).toMatchObject({
          authStateDir: "/tmp/cognidesk-wa",
          pairingPhoneNumber: "+15550123",
          connectTimeoutMs: 12_000,
          sendTimeoutMs: 8_000,
        });
        return {
          user: { id: "15550999@s.whatsapp.net" },
          async sendText(input) {
            sends.push({ jid: input.jid, message: input.message });
            return {
              sent: true,
              jid: input.jid,
              messageId: "wamid.web-test",
            };
          },
          async close() {
            closes.push("closed");
          },
        };
      },
    };
    const client = createWhatsAppWebMessagingClient({
      authStateDir: "/tmp/cognidesk-wa",
      pairingPhoneNumber: "+15550123",
      connectTimeoutMs: 12_000,
      sendTimeoutMs: 8_000,
      sessionProvider,
    });

    await expect(client.sendText({
      to: "+15550100",
      message: "Hello from Cognidesk",
    })).resolves.toMatchObject({
      provider: "whatsapp-web",
      sent: true,
      to: "+15550100",
      jid: "15550100@s.whatsapp.net",
      messageId: "wamid.web-test",
    });

    expect(sends).toEqual([{
      jid: "15550100@s.whatsapp.net",
      message: "Hello from Cognidesk",
    }]);
    expect(closes).toEqual(["closed"]);
  });

  it("normalizes phone recipients and preserves explicit WhatsApp JIDs", () => {
    expect(toWhatsAppWebJid("+1 (555) 0100")).toBe("15550100@s.whatsapp.net");
    expect(toWhatsAppWebJid("120363040918040559@g.us")).toBe("120363040918040559@g.us");
  });
});
