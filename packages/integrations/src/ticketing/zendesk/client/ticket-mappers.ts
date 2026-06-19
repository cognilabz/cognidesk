import type {
  ZendeskCreateTicketInput,
  ZendeskSearchTicketsInput,
  ZendeskUpdateTicketInput,
} from "../contracts.js";

export function createTicketBody(input: ZendeskCreateTicketInput) {
  return {
    subject: input.subject,
    comment: input.comment,
    ...(input.requesterId !== undefined ? { requester_id: input.requesterId } : {}),
    ...(input.requesterEmail ? { requester: { email: input.requesterEmail } } : {}),
    ...(input.priority ? { priority: input.priority } : {}),
    ...(input.status ? { status: input.status } : {}),
    ...(input.type ? { type: input.type } : {}),
    ...(input.tags ? { tags: input.tags } : {}),
    ...(input.customFields ? { custom_fields: input.customFields } : {}),
    ...(input.additionalFields ?? {}),
  };
}

export function updateTicketBody(input: ZendeskUpdateTicketInput) {
  return {
    ...(input.subject ? { subject: input.subject } : {}),
    ...(input.comment ? { comment: input.comment } : {}),
    ...(input.priority ? { priority: input.priority } : {}),
    ...(input.status ? { status: input.status } : {}),
    ...(input.assigneeId !== undefined ? { assignee_id: input.assigneeId } : {}),
    ...(input.groupId !== undefined ? { group_id: input.groupId } : {}),
    ...(input.tags ? { tags: input.tags } : {}),
    ...(input.customFields ? { custom_fields: input.customFields } : {}),
    ...(input.additionalFields ?? {}),
  };
}

export function applySearchQuery(url: URL, input: ZendeskSearchTicketsInput) {
  const query = input.query ? `type:ticket ${input.query}` : "type:ticket";
  url.searchParams.set("query", query);
  if (input.sortBy) url.searchParams.set("sort_by", input.sortBy);
  if (input.sortOrder) url.searchParams.set("sort_order", input.sortOrder);
  if (input.limit !== undefined) url.searchParams.set("per_page", String(input.limit));
  if (input.page !== undefined) url.searchParams.set("page", String(input.page));
}
