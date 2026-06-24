import { textInputWidget, widgetPrompt, type createAgent } from "@cognidesk/core";
import { secureEmailLoginContext } from "../domain/schemas.js";

export function addSecureEmailLoginJourney(agent: ReturnType<typeof createAgent>) {
  const emailLogin = agent.stateMachineJourney("secure-email-login", {
    condition: [
      "Customer asks for an account-protected flight action that requires login or verified email before support can continue.",
      "Use this for passenger-name corrections, re-sending boarding passes or e-tickets, invoices, receipts, refund status/details, profile or contact access, payment-confirmation follow-up, compensation documents, or date-change requests tied to an existing booking.",
      "Do not use this for simple ticket status, public flight status, general policy questions, lost-bag triage, or new mocked bookings.",
    ].join(" "),
    examples: [
      "Send my boarding pass to my email.",
      "I need to change the passenger name on CD-CL102-4821.",
      "Can you access my account profile?",
      "Please send the invoice for my booking.",
      "I need to change the date on booking CD-CL204-4821.",
      "What is the refund status for booking CD-CL204-4821?",
      "Please resend my e-ticket and receipt.",
    ],
    tags: ["email", "login", "channel-switch", "secure-account", "refund", "receipt", "boarding-pass"],
    context: secureEmailLoginContext,
    priority: 50,
  });

  const collectSecureContact = emailLogin.state("collectSecureContact")
    .instructions([
      "Explain that this request needs account login, so the chat will switch to a secure email continuation.",
      "Use airline-support language: the secure step protects booking ownership before changing personal, payment, refund, or travel-document data.",
      "Never ask for a password, one-time code, passport number, payment card, or login token in chat.",
      "Do not repeat the full account email back in chat; refer to it as the account email or use a masked form.",
      "In chat, ask the customer to provide only the booking reference and account email using the form below.",
      "If the customer already provided one value, ask only for the missing value.",
    ].join(" "))
    .collect("bookingReference", {
      prompt: "Booking reference",
      widget: widgetPrompt(textInputWidget, {
        label: "Booking reference",
        placeholder: "CD-CL102-4821",
      }),
    })
    .collect("accountEmail", {
      prompt: "Account email",
      widget: widgetPrompt(textInputWidget, {
        label: "Account email",
        placeholder: "alex@example.com",
      }),
    })
    .collect("requestType", { required: false });

  const emailPrepared = emailLogin.final("emailPrepared");

  emailLogin.initial(collectSecureContact);
  collectSecureContact.when("booking reference and account email are known", {
    guard: ({ context }) => Boolean(context.bookingReference && context.accountEmail),
  }).target(emailPrepared);
}
