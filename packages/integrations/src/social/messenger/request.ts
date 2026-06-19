import type {
  MessengerConversationSearchInput,
  MessengerSocialProviderPayload,
} from "./contracts.js";

export async function messengerRequest<T>(input: {
  url: string;
  method: "GET" | "POST";
  token: string;
  fetch: typeof fetch;
  body?: MessengerSocialProviderPayload | undefined;
}): Promise<T> {
  const response = await input.fetch(input.url, {
    method: input.method,
    headers: {
      authorization: `Bearer ${input.token}`,
      accept: "application/json",
      ...(input.body ? { "content-type": "application/json" } : {}),
    },
    ...(input.body ? { body: JSON.stringify(input.body) } : {}),
  });
  const text = await response.text();
  const body = (text ? JSON.parse(text) : {}) as T & { error?: { message?: string }; message?: string };
  if (!response.ok) {
    throw new Error(body.error?.message ?? body.message ?? `Messenger Graph API returned ${response.status}.`);
  }
  return body as T;
}

export function applyConversationQuery(url: URL, input: MessengerConversationSearchInput) {
  if (input.fields?.length) url.searchParams.set("fields", input.fields.join(","));
  else url.searchParams.set("fields", "id,updated_time,participants,messages{message,from,to,created_time,attachments}");
  if (input.limit !== undefined) url.searchParams.set("limit", String(input.limit));
  if (input.after) url.searchParams.set("after", input.after);
  if (input.userId) url.searchParams.set("user_id", input.userId);
}
