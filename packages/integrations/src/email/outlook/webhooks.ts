import { timingSafeEqual } from "node:crypto";
import type {
  OutlookChangeNotificationPayload,
  OutlookWebhookRequest,
  ParseOutlookWebhookOptions,
  ValidateOutlookWebhookClientStateInput,
  VerifyOutlookWebhookValidationTokenInput,
} from "./contracts.js";

export function validateOutlookWebhookClientState(input: ValidateOutlookWebhookClientStateInput) {
  if (!input.actualClientState) return false;
  const expectedBuffer = Buffer.from(input.expectedClientState);
  const actualBuffer = Buffer.from(input.actualClientState);
  return expectedBuffer.length === actualBuffer.length
    && timingSafeEqual(expectedBuffer, actualBuffer);
}

export async function parseOutlookWebhook(
  request: Request,
  options: ParseOutlookWebhookOptions = {},
): Promise<OutlookWebhookRequest> {
  const rawBody = await request.text();
  const payload = rawBody ? JSON.parse(rawBody) as OutlookChangeNotificationPayload : {};
  const notifications = payload.value ?? [];
  const requireClientState = options.requireClientState ?? Boolean(options.clientState);
  if (requireClientState) {
    if (!options.clientState) {
      throw new Error("Microsoft Graph webhook clientState is required to validate Outlook notifications.");
    }
    for (const notification of notifications) {
      if (!validateOutlookWebhookClientState({
        expectedClientState: options.clientState,
        actualClientState: notification.clientState,
      })) {
        throw new Error("Microsoft Graph webhook clientState validation failed.");
      }
    }
  }
  const contentType = request.headers.get("content-type") ?? undefined;
  return {
    rawBody,
    ...(contentType ? { contentType } : {}),
    payload,
    notifications,
    validationTokens: payload.validationTokens ?? [],
  };
}

export function verifyOutlookWebhookValidationToken(input: VerifyOutlookWebhookValidationTokenInput) {
  return input.validationToken ? decodeURIComponent(input.validationToken) : undefined;
}
