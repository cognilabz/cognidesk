import { choiceWidget, textInputWidget, widgetPrompt, type createAgent } from "@cognidesk/core";
import { whatsappCustomerMessageContext } from "../domain/schemas.js";
import type { FlightTools } from "../tools/flight-tools.js";

export function addWhatsAppCustomerMessageJourney(agent: ReturnType<typeof createAgent>, tools: FlightTools) {
  const whatsapp = agent.stateMachineJourney("whatsapp-customer-message", {
    condition: [
      "Customer asks to receive a WhatsApp verification link, confirmation link, or support notification for an airline support case.",
      "Use this when WhatsApp is explicitly requested as the delivery channel.",
      "Typical airline cases include secure verification, check-in reminders, boarding-pass or e-ticket continuation links, gate-change notifications, delay/cancellation updates, rebooking confirmation links, baggage-claim updates, and support-case updates.",
      "Do not use this for ordinary ticket status, flight search, baggage policy, email login, or human handoff unless the customer asks for a WhatsApp message.",
    ].join(" "),
    examples: [
      "Send me a WhatsApp verification link.",
      "Can you send the confirmation link by WhatsApp to +15550100?",
      "Notify the customer on WhatsApp that the support case was updated.",
      "Send me the gate-change notification on WhatsApp.",
      "Send the rebooking confirmation link by WhatsApp.",
      "Schick mir bitte den Bestaetigungslink per WhatsApp.",
    ],
    tags: ["whatsapp", "messaging", "verification", "notification"],
    context: whatsappCustomerMessageContext,
    priority: 55,
  });

  const collectMessage = whatsapp.state("collectMessage")
    .instructions([
      "Explain that the demo can send a WhatsApp verification link, confirmation link, or notification after explicit approval.",
      "Collect only the WhatsApp number and message type that are needed for delivery.",
      "If the request is airline-specific, use requestLabel for a short label such as check-in reminder, gate-change notification, rebooking confirmation, boarding-pass link, baggage-claim update, or refund-status update.",
      "If the customer already provided one value, ask only for the missing value.",
      "For notification-only requests, use notificationText if the customer provides specific wording; otherwise a generic support update is enough.",
      "Do not send secrets or ask for passwords, one-time codes, passport numbers, payment card details, or full identity documents.",
    ].join(" "))
    .collect("recipientPhone", {
      prompt: "WhatsApp number",
      widget: widgetPrompt(textInputWidget, {
        label: "WhatsApp number",
        placeholder: "+15550100",
      }),
    })
    .collect("messagePurpose", {
      prompt: "Message type",
      widget: widgetPrompt(choiceWidget, {
        label: "Message type",
        options: [
          {
            id: "verification-link",
            label: "Verification link",
            description: "Send a link that verifies the customer before continuing.",
          },
          {
            id: "confirmation-link",
            label: "Confirmation link",
            description: "Send a link for the customer to confirm a pending action.",
          },
          {
            id: "notification",
            label: "Notification",
            description: "Send a WhatsApp update without an action link.",
          },
        ],
      }),
    })
    .collect("bookingReference", {
      required: false,
      prompt: "Booking reference",
      widget: widgetPrompt(textInputWidget, {
        label: "Booking reference",
        placeholder: "CD-CL102-4821",
      }),
    })
    .collect("requestLabel", { required: false })
    .collect("notificationText", {
      required: false,
      prompt: "Notification text",
      widget: widgetPrompt(textInputWidget, {
        label: "Notification text",
        placeholder: "Your flight support request has an update.",
      }),
    });

  const sendMessage = whatsapp.state("sendWhatsAppMessage").runTool(tools.sendWhatsAppCustomerMessage, {
    confirm: {
      message: "Send WhatsApp message",
      reason: "Review the recipient and message type before sending through WhatsApp.",
    },
    input: ({ context }) => ({
      recipientPhone: context.recipientPhone ?? "",
      messagePurpose: context.messagePurpose ?? "notification",
      bookingReference: context.bookingReference,
      requestLabel: context.requestLabel,
      notificationText: context.notificationText,
    }),
    assign: {
      whatsAppDelivery: ({ output }) => output,
    },
  });
  const sent = whatsapp.final("sent");

  whatsapp.initial(collectMessage);
  collectMessage.when("WhatsApp number and message type are known", {
    guard: ({ context }) => Boolean(context.recipientPhone && context.messagePurpose),
  }).target(sendMessage);
  sendMessage.transitionTo(sent);
}
