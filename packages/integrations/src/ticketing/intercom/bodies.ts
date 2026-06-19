import type {
  IntercomCreateConversationInput,
  IntercomCreateTicketInput,
  IntercomJsonObject,
  IntercomManageConversationInput,
  IntercomReplyConversationInput,
  IntercomSearchConversationsInput,
  IntercomSearchTicketsInput,
  IntercomUpdateConversationInput,
  IntercomUpdateTicketInput,
} from "./contracts.js";

export function createConversationBody(input: IntercomCreateConversationInput) {
  return stripUndefined({
    from: {
      type: input.from.type ?? "contact",
      id: input.from.id,
    },
    body: input.body,
    subject: input.subject,
    attachment_urls: input.attachmentUrls,
    created_at: input.createdAt,
    ...(input.additionalFields ?? {}),
  });
}

export function updateConversationBody(input: IntercomUpdateConversationInput) {
  return stripUndefined({
    read: input.read,
    title: input.title,
    custom_attributes: input.customAttributes,
    company_id: input.companyId,
    ...(input.additionalFields ?? {}),
  });
}

export function replyConversationBody(input: IntercomReplyConversationInput) {
  return stripUndefined({
    message_type: input.messageType,
    type: input.type,
    admin_id: input.adminId,
    intercom_user_id: input.intercomUserId,
    body: input.body,
    attachment_urls: input.attachmentUrls,
    created_at: input.createdAt,
    ...(input.additionalFields ?? {}),
  });
}

export function manageConversationBody(input: IntercomManageConversationInput) {
  return stripUndefined({
    message_type: input.messageType,
    type: input.type,
    admin_id: input.adminId,
    assignee_id: input.assigneeId,
    team_assignee_id: input.teamAssigneeId,
    snoozed_until: input.snoozedUntil,
    body: input.body,
    ...(input.additionalFields ?? {}),
  });
}

export function createTicketBody(input: IntercomCreateTicketInput) {
  return stripUndefined({
    skip_notifications: input.skipNotifications,
    ticket_type_id: input.ticketTypeId,
    contacts: input.contacts.map((contact) => stripUndefined({
      type: contact.type,
      id: contact.id,
    })),
    conversation_to_link_id: input.conversationToLinkId,
    company_id: input.companyId,
    created_at: input.createdAt,
    ticket_attributes: input.ticketAttributes,
    assignment: input.assignment
      ? stripUndefined({
          admin_assignee_id: input.assignment.adminAssigneeId,
          team_assignee_id: input.assignment.teamAssigneeId,
        })
      : undefined,
    ...(input.additionalFields ?? {}),
  });
}

export function updateTicketBody(input: IntercomUpdateTicketInput) {
  return stripUndefined({
    skip_notifications: input.skipNotifications,
    ticket_attributes: input.ticketAttributes,
    ticket_state_id: input.ticketStateId,
    company_id: input.companyId,
    open: input.open,
    is_shared: input.isShared,
    snoozed_until: input.snoozedUntil,
    admin_id: input.adminId,
    assignee_id: input.assigneeId,
    ...(input.additionalFields ?? {}),
  });
}

export function searchBody(input: IntercomSearchConversationsInput | IntercomSearchTicketsInput) {
  return stripUndefined({
    query: input.query,
    pagination: input.pagination,
  });
}

function stripUndefined<T extends IntercomJsonObject>(input: T) {
  return Object.fromEntries(Object.entries(input).filter((entry) => entry[1] !== undefined));
}
