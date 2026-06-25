import { describe, expect, it } from "vitest";
import { assertIntegrationConformance } from "@cognidesk/integration-kit/testing";
import {
  createWhatsAppWebMessagingClient,
  defineWhatsAppWebMessagingIntegration,
  toWhatsAppWebJid,
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
