export interface WhatsAppWebSendTextInput {
  to: string;
  message: string;
  previewUrl?: boolean;
}

export interface WhatsAppWebSessionConnectOptions {
  authStateDir: string;
  pairingPhoneNumber?: string;
  connectTimeoutMs: number;
  sendTimeoutMs: number;
  printQrInTerminal: boolean;
  printPairingCodeInTerminal: boolean;
  browser?: WhatsAppWebBrowserDescription;
  onQr?: (qr: string) => void;
  onPairingCode?: (code: string) => void;
}

export interface WhatsAppWebSessionSendTextInput extends WhatsAppWebSendTextInput {
  jid: string;
}

export interface WhatsAppWebSessionSendTextResult {
  sent: boolean;
  jid: string;
  messageId?: string;
  raw?: WhatsAppWebJsonObject;
}

export interface WhatsAppWebSession {
  user?: WhatsAppWebJsonObject;
  sendText(input: WhatsAppWebSessionSendTextInput): Promise<WhatsAppWebSessionSendTextResult>;
  close(): Promise<void>;
}

export interface WhatsAppWebSessionProvider {
  connect(options: WhatsAppWebSessionConnectOptions): Promise<WhatsAppWebSession>;
}

export interface WhatsAppWebMessagingClientOptions {
  authStateDir?: string;
  pairingPhoneNumber?: string;
  connectTimeoutMs?: number;
  sendTimeoutMs?: number;
  printQrInTerminal?: boolean;
  printPairingCodeInTerminal?: boolean;
  browser?: WhatsAppWebBrowserDescription;
  onQr?: (qr: string) => void;
  onPairingCode?: (code: string) => void;
  sessionProvider?: WhatsAppWebSessionProvider;
}

export interface WhatsAppWebSendTextResult {
  provider: "whatsapp-web";
  sent: boolean;
  to: string;
  jid: string;
  messageId?: string;
  raw?: WhatsAppWebJsonObject;
}

export interface WhatsAppWebReadinessResult {
  provider: "whatsapp-web";
  ok: boolean;
  authenticated: boolean;
  authStateDir: string;
  user?: WhatsAppWebJsonObject;
  reason?: string;
}

export interface WhatsAppWebMessagingClient {
  sendText(input: WhatsAppWebSendTextInput): Promise<WhatsAppWebSendTextResult>;
  checkReadiness(): Promise<WhatsAppWebReadinessResult>;
}

export type WhatsAppWebBrowserDescription = [string, string, string];
export type WhatsAppWebJsonPrimitive = string | number | boolean | null;
export type WhatsAppWebJsonValue =
  | WhatsAppWebJsonPrimitive
  | WhatsAppWebJsonObject
  | WhatsAppWebJsonValue[];

export interface WhatsAppWebJsonObject {
  [key: string]: WhatsAppWebJsonValue | undefined;
}
