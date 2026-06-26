import { createRequire } from "node:module";
import makeWASocket, {
  Browsers,
  DisconnectReason,
  fetchLatestBaileysVersion,
  useMultiFileAuthState,
  type BaileysEventMap,
  type WASocket,
  type WAMessage,
} from "baileys";
import type {
  WhatsAppWebJsonObject,
  WhatsAppWebJsonValue,
  WhatsAppWebMessagingClient,
  WhatsAppWebMessagingClientOptions,
  WhatsAppWebSession,
  WhatsAppWebSessionConnectOptions,
  WhatsAppWebSessionProvider,
  WhatsAppWebSessionSendTextInput,
} from "./web-contracts.js";

const require = createRequire(import.meta.url);
const defaultAuthStateDir = ".data/whatsapp-web";
const defaultConnectTimeoutMs = 45_000;
const defaultSendTimeoutMs = 30_000;

export function createWhatsAppWebMessagingClient(
  options: WhatsAppWebMessagingClientOptions = {},
): WhatsAppWebMessagingClient {
  const authStateDir = options.authStateDir ?? defaultAuthStateDir;
  const connectTimeoutMs = options.connectTimeoutMs ?? defaultConnectTimeoutMs;
  const sendTimeoutMs = options.sendTimeoutMs ?? defaultSendTimeoutMs;
  const sessionProvider = options.sessionProvider ?? createBaileysWhatsAppWebSessionProvider();

  const connectOptions = {
    authStateDir,
    ...(options.pairingPhoneNumber ? { pairingPhoneNumber: options.pairingPhoneNumber } : {}),
    connectTimeoutMs,
    sendTimeoutMs,
    printQrInTerminal: options.printQrInTerminal ?? true,
    printPairingCodeInTerminal: options.printPairingCodeInTerminal ?? true,
    ...(options.browser ? { browser: options.browser } : {}),
    ...(options.onQr ? { onQr: options.onQr } : {}),
    ...(options.onPairingCode ? { onPairingCode: options.onPairingCode } : {}),
  };

  return {
    async sendText(input) {
      const jid = toWhatsAppWebJid(input.to);
      const session = await sessionProvider.connect(connectOptions);
      try {
        const response = await session.sendText({
          ...input,
          jid,
        });
        return {
          provider: "whatsapp-web",
          sent: response.sent,
          to: input.to,
          jid: response.jid,
          ...(response.messageId ? { messageId: response.messageId } : {}),
          ...(response.raw ? { raw: response.raw } : {}),
        };
      } finally {
        await session.close();
      }
    },
    async checkReadiness() {
      let session: WhatsAppWebSession | null = null;
      try {
        session = await sessionProvider.connect(connectOptions);
        return {
          provider: "whatsapp-web",
          ok: true,
          authenticated: true,
          authStateDir,
          ...(session.user ? { user: session.user } : {}),
        };
      } catch (error) {
        return {
          provider: "whatsapp-web",
          ok: false,
          authenticated: false,
          authStateDir,
          reason: publicWhatsAppWebErrorMessage(error),
        };
      } finally {
        await session?.close().catch(() => undefined);
      }
    },
  };
}

export function createBaileysWhatsAppWebSessionProvider(): WhatsAppWebSessionProvider {
  return {
    connect: connectBaileysWhatsAppWebSession,
  };
}

export function toWhatsAppWebJid(recipient: string) {
  const trimmed = recipient.trim();
  if (!trimmed) throw new Error("WhatsApp Web recipient is required.");
  if (trimmed.includes("@")) return trimmed;
  const digits = trimmed.replace(/\D/g, "");
  if (!digits) throw new Error("WhatsApp Web recipient must be a phone number or WhatsApp JID.");
  return `${digits}@s.whatsapp.net`;
}

async function connectBaileysWhatsAppWebSession(
  options: WhatsAppWebSessionConnectOptions,
): Promise<WhatsAppWebSession> {
  const { state, saveCreds } = await useMultiFileAuthState(options.authStateDir);
  if (!state.creds.registered && (state.creds.me || state.creds.pairingCode)) {
    delete state.creds.me;
    state.creds.pairingCode = undefined;
    delete state.creds.account;
    state.creds.signalIdentities = [];
    await saveCreds();
  }
  const fetchedVersion = await fetchLatestBaileysVersion().catch(() => undefined);
  const version = fetchedVersion?.version;
  const browser = options.browser ?? Browsers.appropriate("Chrome");

  return new Promise<WhatsAppWebSession>((resolve, reject) => {
    let activeSocket: WASocket | null = null;
    let settled = false;
    let pairingRequested = false;
    let sawQr = false;
    let pairingCode: string | undefined;
    const startedAt = Date.now();
    const timer = setTimeout(() => {
      fail(new Error(whatsAppWebConnectTimeoutMessage({
        sawQr,
        pairingCode,
        authStateDir: options.authStateDir,
        connectTimeoutMs: options.connectTimeoutMs,
      })));
    }, options.connectTimeoutMs);
    timer.unref?.();

    const fail = (error: Error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      void activeSocket?.end(error).catch(() => undefined);
      reject(error);
    };

    const succeed = (socket: WASocket) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve(createBaileysSession(socket, options.sendTimeoutMs));
    };

    const startSocket = () => {
      if (settled) return;
      const remainingMs = options.connectTimeoutMs - (Date.now() - startedAt);
      if (remainingMs <= 0) {
        fail(new Error(whatsAppWebConnectTimeoutMessage({
          sawQr,
          pairingCode,
          authStateDir: options.authStateDir,
          connectTimeoutMs: options.connectTimeoutMs,
        })));
        return;
      }

      const socket = makeWASocket({
        auth: state,
        ...(version ? { version } : {}),
        browser,
        printQRInTerminal: false,
        connectTimeoutMs: Math.max(5_000, Math.min(remainingMs, 20_000)),
        markOnlineOnConnect: false,
      });
      activeSocket = socket;
      socket.ev.on("creds.update", saveCreds);
      socket.ev.on("connection.update", (update) => {
        void handleConnectionUpdate(socket, update).catch((error: unknown) => {
          fail(error instanceof Error ? error : new Error("WhatsApp Web connection failed."));
        });
      });
    };

    const handleConnectionUpdate = async (
      socket: WASocket,
      update: BaileysEventMap["connection.update"],
    ) => {
      if (settled) return;
      if (update.qr) {
        sawQr = true;
        options.onQr?.(update.qr);
        if (options.printQrInTerminal) printQrToTerminal(update.qr);
      }

      if (
        !state.creds.registered
        && options.pairingPhoneNumber
        && !pairingRequested
        && update.qr
      ) {
        pairingRequested = true;
        pairingCode = await socket.requestPairingCode(normalizePairingPhoneNumber(options.pairingPhoneNumber));
        options.onPairingCode?.(pairingCode);
        if (options.printPairingCodeInTerminal) {
          console.log(`WhatsApp Web pairing code: ${pairingCode}`);
        }
      }

      if (update.connection === "open") {
        succeed(socket);
        return;
      }
      if (update.connection !== "close") return;

      const statusCode = readDisconnectStatusCode(update.lastDisconnect?.error);
      if (statusCode === DisconnectReason.restartRequired) {
        setTimeout(startSocket, 100).unref?.();
        return;
      }
      if (statusCode === DisconnectReason.loggedOut || statusCode === DisconnectReason.badSession) {
        fail(new Error(
          `WhatsApp Web linked-device session is invalid or logged out. Delete '${options.authStateDir}' and pair again.`,
        ));
        return;
      }
      setTimeout(startSocket, 500).unref?.();
    };

    startSocket();
  });
}

function createBaileysSession(socket: WASocket, sendTimeoutMs: number): WhatsAppWebSession {
  const user = serializeJsonObject(socket.user);
  return {
    ...(user ? { user } : {}),
    async sendText(input: WhatsAppWebSessionSendTextInput) {
      const message = await withTimeout(
        socket.sendMessage(input.jid, { text: input.message }),
        sendTimeoutMs,
        "WhatsApp Web send timed out.",
      );
      const messageId = message?.key.id ?? undefined;
      return {
        sent: Boolean(messageId),
        jid: input.jid,
        ...(messageId ? { messageId } : {}),
        ...(message ? { raw: serializeBaileysMessage(message) } : {}),
      };
    },
    async close() {
      await socket.end(undefined);
    },
  };
}

async function withTimeout<T>(promise: Promise<T>, timeoutMs: number, message: string): Promise<T> {
  let timeout: NodeJS.Timeout | undefined;
  const timeoutPromise = new Promise<never>((_, reject) => {
    timeout = setTimeout(() => reject(new Error(message)), timeoutMs);
    timeout.unref?.();
  });
  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    if (timeout) clearTimeout(timeout);
  }
}

function normalizePairingPhoneNumber(phoneNumber: string) {
  const digits = phoneNumber.replace(/\D/g, "");
  if (!digits) throw new Error("WhatsApp Web pairing phone number must be E.164 without formatting.");
  return digits;
}

function printQrToTerminal(qr: string) {
  try {
    const qrTerminal = require("qrcode-terminal") as {
      generate(input: string, options?: { small?: boolean }): void;
    };
    qrTerminal.generate(qr, { small: true });
  } catch {
    console.log(`WhatsApp Web QR string: ${qr}`);
  }
}

function whatsAppWebConnectTimeoutMessage(input: {
  sawQr: boolean;
  pairingCode: string | undefined;
  authStateDir: string;
  connectTimeoutMs: number;
}) {
  if (input.pairingCode) {
    return `WhatsApp Web pairing code was generated but the linked-device session did not open within ${input.connectTimeoutMs}ms. Approve the code on the phone and retry.`;
  }
  if (input.sawQr) {
    return `WhatsApp Web session is not paired yet. Scan the QR code from the terminal and retry; auth state is stored in '${input.authStateDir}'.`;
  }
  return `WhatsApp Web session did not connect within ${input.connectTimeoutMs}ms.`;
}

function readDisconnectStatusCode(error: unknown) {
  const output = (error as { output?: { statusCode?: unknown } } | undefined)?.output;
  return typeof output?.statusCode === "number" ? output.statusCode : undefined;
}

function publicWhatsAppWebErrorMessage(error: unknown) {
  if (error instanceof Error && error.message.trim()) return error.message;
  return "WhatsApp Web request failed.";
}

function serializeBaileysMessage(message: WAMessage): WhatsAppWebJsonObject {
  return stripUndefined({
    key: serializeJsonObject({
      id: message.key.id ?? undefined,
      remoteJid: message.key.remoteJid ?? undefined,
      fromMe: message.key.fromMe ?? undefined,
    }),
    messageTimestamp: typeof message.messageTimestamp === "number"
      ? message.messageTimestamp
      : undefined,
    status: typeof message.status === "number" ? message.status : undefined,
  });
}

function serializeJsonObject(value: unknown): WhatsAppWebJsonObject | undefined {
  if (!value || typeof value !== "object" || Array.isArray(value)) return undefined;
  return stripUndefined(Object.fromEntries(
    Object.entries(value).map(([key, entry]) => [key, serializeJsonValue(entry)]),
  ));
}

function serializeJsonValue(value: unknown): WhatsAppWebJsonValue | undefined {
  if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return value;
  }
  if (Array.isArray(value)) return value.map(serializeJsonValue).filter((entry) => entry !== undefined);
  return serializeJsonObject(value);
}

function stripUndefined(input: WhatsAppWebJsonObject): WhatsAppWebJsonObject {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined)) as WhatsAppWebJsonObject;
}
