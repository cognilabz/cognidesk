import { timingSafeEqual } from "node:crypto";
import type {
  ParseTeamsChangeNotificationOptions,
  TeamsChangeNotificationCollection,
  TeamsParsedChangeNotificationRequest,
  ValidateTeamsChangeNotificationClientStateInput,
} from "./contracts.js";

export async function parseTeamsChangeNotificationRequest(
  request: Request,
  options: ParseTeamsChangeNotificationOptions = {},
): Promise<TeamsParsedChangeNotificationRequest> {
  const validationToken = new URL(request.url).searchParams.get("validationToken") ?? undefined;
  const rawBody = await request.text();
  const contentType = request.headers.get("content-type") ?? undefined;
  const payload = contentType?.includes("application/json") && rawBody
    ? JSON.parse(rawBody) as TeamsChangeNotificationCollection
    : undefined;
  const notifications = payload?.value ?? [];
  const validClientState = options.clientState
    ? validateTeamsChangeNotificationClientState({ notifications, clientState: options.clientState })
    : undefined;

  if (options.requireClientState && !options.clientState) {
    throw new Error("Microsoft Graph change notification clientState is required for validation.");
  }
  if (options.requireClientState && !validClientState) {
    throw new Error("Microsoft Graph change notification clientState validation failed.");
  }

  return {
    rawBody,
    ...(contentType ? { contentType } : {}),
    ...(validationToken ? { validationToken } : {}),
    ...(payload ? { payload } : {}),
    notifications,
    ...(validClientState !== undefined ? { validClientState } : {}),
  };
}

export function validateTeamsChangeNotificationClientState(
  input: ValidateTeamsChangeNotificationClientStateInput,
) {
  if (input.notifications.length === 0) return false;
  return input.notifications.every((notification) =>
    typeof notification.clientState === "string"
    && secureStringEquals(notification.clientState, input.clientState)
  );
}

export function teamsChangeNotificationValidationResponse(validationToken: string) {
  return new Response(validationToken, {
    status: 200,
    headers: { "content-type": "text/plain" },
  });
}

function secureStringEquals(actual: string, expected: string) {
  const actualBuffer = Buffer.from(actual);
  const expectedBuffer = Buffer.from(expected);
  return actualBuffer.length === expectedBuffer.length
    && timingSafeEqual(actualBuffer, expectedBuffer);
}
