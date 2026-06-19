import { timingSafeEqual } from "node:crypto";
import type {
  ParseSalesforceEventRequestOptions,
  SalesforceEventPayload,
  SalesforceOutboundMessage,
  SalesforceOutboundNotification,
  SalesforceParsedEventRequest,
  ValidateSalesforceWebhookSecretInput,
} from "./contracts.js";

export async function parseSalesforceEventRequest(
  request: Request,
  options: ParseSalesforceEventRequestOptions = {},
): Promise<SalesforceParsedEventRequest> {
  const rawBody = await request.text();
  const requireVerification = options.requireVerification ?? true;
  let verified = false;

  if (options.verifier) {
    verified = await options.verifier({ request, rawBody });
  } else if (options.webhookSecret) {
    verified = validateSalesforceWebhookSecret({
      expectedSecret: options.webhookSecret,
      actualSecret: request.headers.get(options.headerName ?? "x-cognidesk-salesforce-secret"),
    });
  } else if (requireVerification) {
    throw new Error("Salesforce webhook verification is required.");
  }

  if (requireVerification && !verified) {
    throw new Error("Salesforce webhook verification failed.");
  }

  const contentType = request.headers.get("content-type") ?? undefined;
  const eventType = request.headers.get("x-salesforce-event")
    ?? request.headers.get("x-cognidesk-event")
    ?? undefined;
  return {
    rawBody,
    ...(contentType ? { contentType } : {}),
    ...(eventType ? { eventType } : {}),
    payload: parseSalesforceEventPayload(rawBody, contentType),
    verified,
  };
}

export function parseSalesforceEventPayload(rawBody: string, contentType?: string): SalesforceEventPayload {
  const trimmed = rawBody.trim();
  if (!trimmed) return { kind: "text", text: "" };
  if (contentType?.includes("json") || trimmed.startsWith("{") || trimmed.startsWith("[")) {
    return { kind: "json", json: JSON.parse(rawBody) as unknown };
  }
  if (contentType?.includes("xml") || trimmed.startsWith("<")) {
    return { kind: "outbound-message", message: parseSalesforceOutboundMessage(rawBody) };
  }
  return { kind: "text", text: rawBody };
}

export function validateSalesforceWebhookSecret(input: ValidateSalesforceWebhookSecretInput) {
  if (!input.expectedSecret || !input.actualSecret) return false;
  const expectedBuffer = Buffer.from(input.expectedSecret);
  const actualBuffer = Buffer.from(input.actualSecret);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}

function parseSalesforceOutboundMessage(xml: string): SalesforceOutboundMessage {
  const notifications = [...xml.matchAll(/<notifications\b[^>]*>([\s\S]*?)<\/notifications>/gi)]
    .map((match) => parseOutboundNotification(match[1] ?? ""));
  const organizationId = xmlTag(xml, "OrganizationId");
  const actionId = xmlTag(xml, "ActionId");
  const sessionId = xmlTag(xml, "SessionId");
  const enterpriseUrl = xmlTag(xml, "EnterpriseUrl");
  const partnerUrl = xmlTag(xml, "PartnerUrl");
  return {
    ...(organizationId ? { organizationId } : {}),
    ...(actionId ? { actionId } : {}),
    ...(sessionId ? { sessionId } : {}),
    ...(enterpriseUrl ? { enterpriseUrl } : {}),
    ...(partnerUrl ? { partnerUrl } : {}),
    notifications,
  };
}

function parseOutboundNotification(xml: string): SalesforceOutboundNotification {
  const sObjectXml = xml.match(/<sObject\b[^>]*>([\s\S]*?)<\/sObject>/i)?.[1] ?? "";
  const sObject = Object.fromEntries(
    [...sObjectXml.matchAll(/<([A-Za-z_][\w:.]*)\b[^>]*>([\s\S]*?)<\/\1>/g)]
      .map(([, key, value]) => [stripNamespace(key ?? ""), decodeXml(value ?? "")]),
  );
  const id = xmlTag(xml, "Id");
  return {
    ...(id ? { id } : {}),
    sObject,
  };
}

function xmlTag(xml: string, tagName: string) {
  const match = xml.match(new RegExp(`<(?:[\\w]+:)?${tagName}\\b[^>]*>([\\s\\S]*?)</(?:[\\w]+:)?${tagName}>`, "i"));
  return match?.[1] ? decodeXml(match[1]) : undefined;
}

function stripNamespace(tagName: string) {
  return tagName.includes(":") ? tagName.split(":").pop() ?? tagName : tagName;
}

function decodeXml(value: string) {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}
