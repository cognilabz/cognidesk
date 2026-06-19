import type { TwilioMediaStreamTwiMLOptions } from "./contracts.js";

export function createTwilioMediaStreamTwiML(options: TwilioMediaStreamTwiMLOptions) {
  const mode = options.mode ?? "connect";
  if (mode === "connect" && options.track && options.track !== "inbound_track") {
    throw new Error("Twilio bidirectional <Connect><Stream> supports only inbound_track.");
  }
  const streamAttrs = attrs({
    url: options.websocketUrl,
    ...(options.name ? { name: options.name } : {}),
    ...(options.track ? { track: options.track } : {}),
    ...(options.statusCallback ? { statusCallback: options.statusCallback } : {}),
  });
  const parameters = Object.entries(options.customParameters ?? {})
    .map(([name, value]) => `<Parameter${attrs({ name, value })}/>`).join("");
  const stream = `<Stream${streamAttrs}>${parameters}</Stream>`;
  const body = mode === "connect"
    ? `<Connect>${stream}</Connect>`
    : `<Start>${stream}</Start>`;
  return `<?xml version="1.0" encoding="UTF-8"?><Response>${body}</Response>`;
}

function attrs(values: Record<string, string | undefined>) {
  return Object.entries(values)
    .filter((entry): entry is [string, string] => entry[1] !== undefined)
    .map(([key, value]) => ` ${key}="${escapeXml(value)}"`).join("");
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("\"", "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
