import type {
  MailgunAttachmentInput,
  MailgunEmailInput,
} from "./contracts.js";

export function buildMailgunEmailForm(input: MailgunEmailInput): FormData {
  const body = new FormData();
  body.set("from", input.from);
  appendAddress(body, "to", input.to);
  appendAddress(body, "cc", input.cc);
  appendAddress(body, "bcc", input.bcc);
  body.set("subject", input.subject);
  appendIfDefined(body, "text", input.text);
  appendIfDefined(body, "html", input.html);
  appendIfDefined(body, "template", input.template);
  appendIfDefined(body, "t:version", input["t:version"]);
  appendIfDefined(body, "h:Reply-To", input["h:Reply-To"]);
  appendIfDefined(body, "o:tracking", stringifyMailgunValue(input["o:tracking"]));
  appendIfDefined(body, "o:tracking-clicks", stringifyMailgunValue(input["o:tracking-clicks"]));
  appendIfDefined(body, "o:tracking-opens", stringifyMailgunValue(input["o:tracking-opens"]));
  appendRepeated(body, "o:tag", input["o:tag"]);
  for (const [key, value] of Object.entries(input.variables ?? {})) {
    body.set(`v:${key}`, JSON.stringify(value));
  }
  for (const [key, value] of Object.entries(input.custom ?? {})) {
    if (value !== undefined) body.set(`h:X-Mailgun-Variables-${key}`, String(value));
  }
  appendFiles(body, "attachment", input.attachment);
  appendFiles(body, "inline", input.inline);
  return body;
}

export function appendAddress(body: FormData, key: string, value?: string | string[]) {
  appendRepeated(body, key, value);
}

function appendRepeated(body: FormData, key: string, value?: string | string[]) {
  if (Array.isArray(value)) {
    for (const item of value) body.append(key, item);
    return;
  }
  appendIfDefined(body, key, value);
}

function appendIfDefined(body: FormData, key: string, value?: string) {
  if (value !== undefined && value !== "") body.append(key, value);
}

function appendFiles(body: FormData, key: string, files?: MailgunAttachmentInput[]) {
  for (const file of files ?? []) {
    body.append(key, toBlob(file.content), file.filename ?? file.name);
  }
}

function stringifyMailgunValue(value?: boolean | "yes" | "no" | "htmlonly"): string | undefined {
  if (value === undefined) return undefined;
  if (typeof value === "boolean") return value ? "yes" : "no";
  return value;
}

export function toBlob(value: Blob | ArrayBuffer | Uint8Array | string): Blob {
  if (value instanceof Blob) return value;
  if (value instanceof Uint8Array) {
    const copy = new Uint8Array(value.byteLength);
    copy.set(value);
    return new Blob([copy.buffer]);
  }
  return new Blob([value]);
}
